from typing import List, Dict, Any, Optional
from fastapi import APIRouter, Depends, HTTPException, Header, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, desc
from app.core.database import get_db
from app.core.security import decode_token
from app.models import Procedure, Article, ChatLog, KnowledgeChunk, Category, AdminUser
from app.schemas import ProcedureCreate, ProcedureResponse, ArticleCreate, ArticleResponse, ApiResponse
from pydantic import BaseModel

router = APIRouter(prefix="/admin", tags=["Quản trị Cán bộ Công an xã"])

async def get_current_admin(
    authorization: Optional[str] = Header(None), 
    db: AsyncSession = Depends(get_db)
) -> AdminUser:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Yêu cầu xác thực tài khoản Cán bộ Công an xã."
        )
    token = authorization.split(" ")[1]
    payload = decode_token(token)
    if not payload or "sub" not in payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Phiên làm việc đã hết hạn hoặc token không hợp lệ."
        )
    user_id = payload["sub"]
    stmt = select(AdminUser).where(AdminUser.id == user_id, AdminUser.is_active == True)
    res = await db.execute(stmt)
    user = res.scalars().first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Tài khoản cán bộ không tồn tại."
        )
    return user

@router.get("/stats")
async def get_dashboard_stats(
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    """Thống kê tổng quan hoạt động Cổng thông tin & Trợ lý số"""
    total_procedures = (await db.execute(select(func.count(Procedure.id)))).scalar() or 0
    total_articles = (await db.execute(select(func.count(Article.id)))).scalar() or 0
    total_chat_queries = (await db.execute(select(func.count(ChatLog.id)))).scalar() or 0
    
    # Tính mức độ hài lòng của người dân
    positive_feedback = (await db.execute(select(func.count(ChatLog.id)).where(ChatLog.feedback_rating == 1))).scalar() or 0
    total_feedback = (await db.execute(select(func.count(ChatLog.id)).where(ChatLog.feedback_rating != None))).scalar() or 0
    satisfaction_rate = round((positive_feedback / total_feedback * 100), 1) if total_feedback > 0 else 100.0

    # Lấy top câu hỏi gần đây của người dân
    stmt_recent = select(ChatLog).order_by(desc(ChatLog.created_at)).limit(10)
    res_recent = await db.execute(stmt_recent)
    recent_queries = [
        {
            "id": log.id,
            "query": log.user_query,
            "rating": log.feedback_rating,
            "created_at": log.created_at.strftime("%H:%M %d/%m/%Y")
        }
        for log in res_recent.scalars().all()
    ]

    return {
        "admin_name": admin.full_name,
        "badge_number": admin.badge_number,
        "total_procedures": total_procedures,
        "total_articles": total_articles,
        "total_chat_queries": total_chat_queries,
        "satisfaction_rate": satisfaction_rate,
        "recent_queries": recent_queries
    }

# QUẢN LÝ THỦ TỤC
@router.post("/procedures", response_model=ProcedureResponse)
async def create_procedure(
    proc_in: ProcedureCreate,
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    proc = Procedure(**proc_in.model_dump())
    db.add(proc)
    await db.commit()
    await db.refresh(proc)
    return proc

@router.delete("/procedures/{procedure_id}", response_model=ApiResponse)
async def delete_procedure(
    procedure_id: str,
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    stmt = select(Procedure).where(Procedure.id == procedure_id)
    res = await db.execute(stmt)
    proc = res.scalars().first()
    if not proc:
        raise HTTPException(status_code=404, detail="Không tìm thấy thủ tục.")
    await db.delete(proc)
    await db.commit()
    return ApiResponse(success=True, message="Đã xóa thủ tục thành công.")

# QUẢN LÝ BÀI VIẾT CẢNH BÁO
@router.post("/articles", response_model=ArticleResponse)
async def create_article(
    art_in: ArticleCreate,
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    art = Article(**art_in.model_dump())
    db.add(art)
    await db.commit()
    await db.refresh(art)
    return art

@router.delete("/articles/{article_id}", response_model=ApiResponse)
async def delete_article(
    article_id: str,
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    stmt = select(Article).where(Article.id == article_id)
    res = await db.execute(stmt)
    art = res.scalars().first()
    if not art:
        raise HTTPException(status_code=404, detail="Không tìm thấy bài viết.")
    await db.delete(art)
    await db.commit()
    return ApiResponse(success=True, message="Đã xóa bài viết thành công.")

# QUẢN TRỊ TRI THỨC AI (KNOWLEDGE INGESTION)
class IngestKnowledgeRequest(BaseModel):
    source_title: str
    source_type: str = "law" # law | procedure | scam_alert | faq
    content: str
    tags: Optional[List[str]] = None

@router.post("/knowledge/ingest", response_model=ApiResponse)
async def ingest_knowledge(
    req: IngestKnowledgeRequest,
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    """Nạp tài liệu văn bản quy phạm pháp luật mới vào kho tri thức AI"""
    # Chia nhỏ văn bản (chunking) theo đoạn văn hoặc độ dài chuẩn
    paragraphs = [p.strip() for p in req.content.split("\n\n") if len(p.strip()) > 30]
    if not paragraphs:
        paragraphs = [req.content.strip()]

    for p in paragraphs:
        chunk = KnowledgeChunk(
            source_title=req.source_title,
            source_type=req.source_type,
            chunk_text=p,
            metadata_json={"tags": req.tags or [], "officer": admin.full_name}
        )
        db.add(chunk)

    await db.commit()
    return ApiResponse(
        success=True, 
        message=f"Đã nạp thành công {len(paragraphs)} đoạn tri thức vào hệ thống AI."
    )

@router.get("/knowledge")
async def list_knowledge(
    admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db)
):
    """Lấy danh sách các tài liệu tri thức đã nạp"""
    stmt = select(KnowledgeChunk).order_by(desc(KnowledgeChunk.created_at)).limit(300)
    res = await db.execute(stmt)
    chunks = res.scalars().all()
    return [
        {
            "id": c.id,
            "source_title": c.source_title,
            "source_type": c.source_type,
            "chunk_preview": c.chunk_text[:120] + "...",
            "created_at": c.created_at.strftime("%H:%M %d/%m/%Y")
        }
        for c in chunks
    ]

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from app.core.database import get_db
from app.schemas import ChatQueryRequest, ChatQueryResponse, ChatFeedbackRequest, ApiResponse
from app.services.rag_service import RAGService
from app.models import ChatLog

router = APIRouter(prefix="/chat", tags=["Trợ lý AI Thông minh"])

@router.post("/query", response_model=ChatQueryResponse)
async def query_ai(request: ChatQueryRequest, db: AsyncSession = Depends(get_db)):
    """Gửi câu hỏi tới Trợ lý số Pháp luật & TTHC Công an xã Đức Hợp"""
    # 1. Kiểm tra hàng rào an toàn (Guardrails)
    guardrail_error = RAGService.check_guardrails(request.query)
    if guardrail_error:
        # Nếu vi phạm guardrail, ghi nhận log và trả lời ngay lập tức
        await RAGService.log_chat(
            db=db,
            session_id=request.session_id,
            user_query=request.query,
            ai_response=guardrail_error,
            sources=[]
        )
        return ChatQueryResponse(
            session_id=request.session_id,
            answer=guardrail_error,
            sources=[]
        )

    # 2. Truy xuất tài liệu & ngữ cảnh phù hợp (RAG Context Retrieval)
    context, sources = await RAGService.retrieve_context(db, request.query)

    # 3. Sinh câu trả lời chuẩn xác
    answer = await RAGService.generate_response(
        query=request.query,
        context=context,
        history=request.history
    )

    # 4. Ghi nhận nhật ký hỏi đáp ẩn danh (Zero PII)
    await RAGService.log_chat(
        db=db,
        session_id=request.session_id,
        user_query=request.query,
        ai_response=answer,
        sources=sources
    )

    return ChatQueryResponse(
        session_id=request.session_id,
        answer=answer,
        sources=sources
    )

@router.post("/feedback", response_model=ApiResponse)
async def submit_feedback(request: ChatFeedbackRequest, db: AsyncSession = Depends(get_db)):
    """Tiếp nhận phản hồi đánh giá của người dân về độ hữu ích của câu trả lời"""
    if request.chat_log_id:
        stmt = (
            update(ChatLog)
            .where(ChatLog.id == request.chat_log_id)
            .values(
                feedback_rating=request.rating,
                feedback_comment=request.comment
            )
        )
        await db.execute(stmt)
        await db.commit()
    else:
        # Tìm bản ghi mới nhất theo session_id
        stmt = (
            select(ChatLog)
            .where(ChatLog.session_id == request.session_id)
            .order_by(ChatLog.created_at.desc())
            .limit(1)
        )
        res = await db.execute(stmt)
        log = res.scalars().first()
        if log:
            log.feedback_rating = request.rating
            log.feedback_comment = request.comment
            await db.commit()

    return ApiResponse(
        success=True,
        message="Cảm ơn Quý công dân đã gửi phản hồi để giúp chúng tôi hoàn thiện chất lượng phục vụ!"
    )

from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.services.article_service import ArticleService
from app.schemas import ArticleResponse

router = APIRouter(prefix="/articles", tags=["Tuyên truyền & Cảnh báo"])

@router.get("", response_model=List[ArticleResponse])
async def list_articles(
    category_id: Optional[str] = Query(None, description="Lọc theo ID danh mục"),
    is_scam_alert: Optional[bool] = Query(None, description="Lọc riêng tin cảnh báo lừa đảo"),
    q: Optional[str] = Query(None, description="Từ khóa tìm kiếm"),
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0),
    db: AsyncSession = Depends(get_db)
):
    """Lấy danh sách bài viết tuyên truyền pháp luật và cảnh báo tội phạm công nghệ cao"""
    return await ArticleService.get_articles(
        db=db,
        category_id=category_id,
        is_scam_alert=is_scam_alert,
        query=q,
        limit=limit,
        offset=offset
    )

@router.get("/{slug}", response_model=ArticleResponse)
async def get_article_detail(slug: str, db: AsyncSession = Depends(get_db)):
    """Xem chi tiết bài viết tuyên truyền hoặc khuyến cáo phòng ngừa tội phạm"""
    article = await ArticleService.get_article_by_slug(db, slug)
    if not article:
        raise HTTPException(status_code=404, detail="Không tìm thấy bài viết yêu cầu.")
    return article

from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_
from app.models import Article

class ArticleService:
    @staticmethod
    async def get_articles(
        db: AsyncSession,
        category_id: Optional[str] = None,
        is_scam_alert: Optional[bool] = None,
        query: Optional[str] = None,
        limit: int = 20,
        offset: int = 0
    ) -> List[Article]:
        stmt = select(Article).where(Article.is_published == True)
        
        if is_scam_alert is not None:
            stmt = stmt.where(Article.is_scam_alert == is_scam_alert)
            
        if category_id:
            stmt = stmt.where(Article.category_id == category_id)
            
        if query:
            search = f"%{query}%"
            stmt = stmt.where(
                or_(
                    Article.title.ilike(search),
                    Article.summary.ilike(search)
                )
            )
            
        stmt = stmt.order_by(Article.created_at.desc()).offset(offset).limit(limit)
        result = await db.execute(stmt)
        return list(result.scalars().all())

    @staticmethod
    async def get_article_by_slug(db: AsyncSession, slug: str) -> Optional[Article]:
        stmt = select(Article).where(Article.slug == slug, Article.is_published == True)
        result = await db.execute(stmt)
        article = result.scalars().first()
        if article:
            article.views_count += 1
            await db.commit()
            await db.refresh(article)
        return article

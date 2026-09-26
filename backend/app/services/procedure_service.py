from typing import List, Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_
from sqlalchemy.orm import selectinload
from app.models import Category, Procedure, ProcedureForm

class ProcedureService:
    @staticmethod
    async def get_categories(db: AsyncSession) -> List[Category]:
        result = await db.execute(
            select(Category).where(Category.is_active == True).order_by(Category.order_num)
        )
        return list(result.scalars().all())

    @staticmethod
    async def get_category_by_code(db: AsyncSession, code: str) -> Optional[Category]:
        result = await db.execute(
            select(Category).where(Category.code == code, Category.is_active == True)
        )
        return result.scalars().first()

    @staticmethod
    async def get_procedures(
        db: AsyncSession, 
        category_id: Optional[str] = None,
        query: Optional[str] = None,
        limit: int = 50,
        offset: int = 0
    ) -> List[Procedure]:
        stmt = (
            select(Procedure)
            .options(selectinload(Procedure.forms))
            .where(Procedure.is_active == True)
        )
        
        if category_id:
            stmt = stmt.where(Procedure.category_id == category_id)
            
        if query:
            search = f"%{query}%"
            stmt = stmt.where(
                or_(
                    Procedure.title.ilike(search),
                    Procedure.code.ilike(search),
                    Procedure.target_audience.ilike(search)
                )
            )
            
        stmt = stmt.order_by(Procedure.created_at.desc()).offset(offset).limit(limit)
        result = await db.execute(stmt)
        return list(result.scalars().all())

    @staticmethod
    async def get_procedure_by_id(db: AsyncSession, procedure_id: str) -> Optional[Procedure]:
        stmt = (
            select(Procedure)
            .options(selectinload(Procedure.forms))
            .where(Procedure.id == procedure_id, Procedure.is_active == True)
        )
        result = await db.execute(stmt)
        procedure = result.scalars().first()
        if procedure:
            procedure.views_count += 1
            await db.commit()
            await db.refresh(procedure)
        return procedure

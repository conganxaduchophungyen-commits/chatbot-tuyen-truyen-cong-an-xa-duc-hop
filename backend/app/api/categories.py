from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.services.procedure_service import ProcedureService
from app.schemas import CategoryResponse

router = APIRouter(prefix="/categories", tags=["Danh mục Nghiệp vụ"])

@router.get("", response_model=List[CategoryResponse])
async def list_categories(db: AsyncSession = Depends(get_db)):
    """Lấy danh sách các nhóm thủ tục và lĩnh vực nghiệp vụ của Công an xã"""
    return await ProcedureService.get_categories(db)

@router.get("/{code}", response_model=CategoryResponse)
async def get_category(code: str, db: AsyncSession = Depends(get_db)):
    """Lấy thông tin chi tiết một nhóm nghiệp vụ theo mã code"""
    cat = await ProcedureService.get_category_by_code(db, code)
    if not cat:
        raise HTTPException(status_code=404, detail="Không tìm thấy danh mục yêu cầu.")
    return cat

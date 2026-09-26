from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app.services.procedure_service import ProcedureService
from app.schemas import ProcedureResponse

router = APIRouter(prefix="/procedures", tags=["Thủ tục Hành chính"])

@router.get("", response_model=List[ProcedureResponse])
async def list_procedures(
    category_id: Optional[str] = Query(None, description="Lọc theo ID danh mục nghiệp vụ"),
    q: Optional[str] = Query(None, description="Từ khóa tìm kiếm tên thủ tục, mã TTHC"),
    limit: int = Query(50, ge=1, le=100),
    offset: int = Query(0, ge=0),
    db: AsyncSession = Depends(get_db)
):
    """Tìm kiếm và tra cứu danh sách thủ tục hành chính thuộc thẩm quyền Công an xã"""
    return await ProcedureService.get_procedures(
        db=db,
        category_id=category_id,
        query=q,
        limit=limit,
        offset=offset
    )

@router.get("/{procedure_id}", response_model=ProcedureResponse)
async def get_procedure_detail(procedure_id: str, db: AsyncSession = Depends(get_db)):
    """Xem chi tiết thành phần hồ sơ, quy trình các bước, lệ phí và tải biểu mẫu của thủ tục"""
    procedure = await ProcedureService.get_procedure_by_id(db, procedure_id)
    if not procedure:
        raise HTTPException(status_code=404, detail="Không tìm thấy thủ tục hành chính yêu cầu.")
    return procedure

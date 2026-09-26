from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.core.security import verify_password, create_access_token
from app.schemas import AdminLoginRequest, TokenResponse
from app.models import AdminUser

router = APIRouter(prefix="/auth", tags=["Xác thực Cán bộ Quản trị"])

@router.post("/login", response_model=TokenResponse)
async def login(credentials: AdminLoginRequest, db: AsyncSession = Depends(get_db)):
    """Đăng nhập dành cho cán bộ Công an xã quản lý hệ thống"""
    stmt = select(AdminUser).where(AdminUser.username == credentials.username, AdminUser.is_active == True)
    res = await db.execute(stmt)
    user = res.scalars().first()

    if not user or not verify_password(credentials.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Tên đăng nhập hoặc mật khẩu không chính xác.",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(subject=user.id)
    return TokenResponse(
        access_token=access_token,
        token_type="bearer",
        user={
            "id": user.id,
            "username": user.username,
            "full_name": user.full_name,
            "badge_number": user.badge_number,
            "role": user.role
        }
    )

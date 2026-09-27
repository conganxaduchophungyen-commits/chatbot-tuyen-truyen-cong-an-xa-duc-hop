from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text
import os

from app.core.config import settings
from app.core.database import get_db
from app.api import api_router
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Khởi tạo bảng và dữ liệu mẫu nếu chưa có (khi chạy trên cloud hoặc máy chủ mới)
    try:
        from app.init_db import init_models, seed_data
        await init_models()
        await seed_data()
        print("-> Khởi tạo Database thành công.")
    except Exception as e:
        print(f"Lỗi khởi tạo Database: {e}")
    yield

app = FastAPI(
    title=f"API Trợ lý Pháp luật & TTHC - {settings.COMMUNE_NAME}",
    description="Hệ thống cung cấp API tra cứu thủ tục hành chính, bài viết tuyên truyền phòng chống tội phạm và hỗ trợ trợ lý AI cho người dân.",
    version="1.0.0",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
    lifespan=lifespan
)

# CORS Middleware (Hỗ trợ truy cập từ frontend và các thiết bị di động)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount thư mục tĩnh cho biểu mẫu và hình ảnh
static_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static")
os.makedirs(static_dir, exist_ok=True)
os.makedirs(os.path.join(static_dir, "forms"), exist_ok=True)
os.makedirs(os.path.join(static_dir, "images"), exist_ok=True)
app.mount("/static", StaticFiles(directory=static_dir), name="static")

# Mount API Routers
app.include_router(api_router, prefix="/api")

@app.get("/api/health")
async def health_check(db: AsyncSession = Depends(get_db)):
    """Kiểm tra sức khỏe hệ thống và trạng thái kết nối cơ sở dữ liệu"""
    db_status = "healthy"
    try:
        await db.execute(text("SELECT 1"))
    except Exception as e:
        db_status = f"error: {str(e)}"

    return {
        "status": "ok",
        "commune": settings.COMMUNE_NAME,
        "province": settings.PROVINCE_NAME,
        "address": settings.ADDRESS,
        "hotline": settings.HOTLINE_NUMBER,
        "database": db_status,
        "environment": settings.ENVIRONMENT
    }

@app.get("/")
async def root():
    return {
        "message": f"Chào mừng đến với Cổng API Trợ lý số Pháp luật & TTHC {settings.COMMUNE_NAME}",
        "docs": "/api/docs"
    }

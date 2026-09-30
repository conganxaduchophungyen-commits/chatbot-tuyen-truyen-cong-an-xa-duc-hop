import ssl
import re
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import declarative_base
from app.core.config import settings

# Xử lý URL cho SQLite / PostgreSQL / Supabase
database_url = settings.DATABASE_URL
connect_args = {}

if database_url.startswith("sqlite"):
    connect_args = {"check_same_thread": False}
else:
    # Chuyển đổi postgres:// hoặc postgresql:// sang postgresql+asyncpg://
    if database_url.startswith("postgres://"):
        database_url = database_url.replace("postgres://", "postgresql+asyncpg://", 1)
    elif database_url.startswith("postgresql://") and not database_url.startswith("postgresql+asyncpg://"):
        database_url = database_url.replace("postgresql://", "postgresql+asyncpg://", 1)
    
    # Loại bỏ sslmode trong query parameter nếu có vì asyncpg xử lý qua connect_args
    if "sslmode=" in database_url:
        database_url = re.sub(r'(\?|&)sslmode=[^&]*', '', database_url)
        if database_url.endswith('?'):
            database_url = database_url[:-1]

    # Cấu hình SSL cho kết nối Cloud (Supabase, Neon, Render...)
    if any(host in database_url for host in ["supabase", "pooler", "render", "aws", "azure", "neon"]):
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        connect_args = {"ssl": ctx}

engine = create_async_engine(
    database_url,
    echo=settings.DEBUG,
    connect_args=connect_args
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False
)

Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()

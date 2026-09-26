import os
from typing import Optional
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ENVIRONMENT: str = "development"
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # CSDL
    DATABASE_URL: str = "sqlite+aiosqlite:///./sql_app.db"
    
    # JWT
    SECRET_KEY: str = "dev_secret_key_cong_an_xa_duc_hop_hung_yen_2026"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 120
    
    # AI / LLM
    GEMINI_API_KEY: Optional[str] = None
    GEMINI_MODEL: str = "gemini-1.5-flash"
    EMBEDDING_MODEL: str = "text-embedding-004"
    
    # Thông tin đơn vị
    COMMUNE_NAME: str = "Công an xã Đức Hợp"
    PROVINCE_NAME: str = "Hưng Yên"
    HOTLINE_NUMBER: str = "02213.815.999"
    HOTLINE_OFFICER: str = "02213.815.999"
    ADDRESS: str = "Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên"

    class Config:
        env_file = ".env"
        extra = "allow"

settings = Settings()

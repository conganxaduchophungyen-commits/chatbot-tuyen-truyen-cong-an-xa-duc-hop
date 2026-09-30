import sys
import asyncio
import os

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from app.core.config import settings
from app.init_db import init_models, seed_data

async def main():
    db_masked = settings.DATABASE_URL.split('@')[-1] if '@' in settings.DATABASE_URL else settings.DATABASE_URL
    print(f"-> [Supabase Migration] Đang kết nối cơ sở dữ liệu: ...@{db_masked}")
    await init_models()
    await seed_data()
    print("-> [Supabase Migration] ✅ Đã khởi tạo và nạp dữ liệu thành công lên Supabase!")

if __name__ == "__main__":
    asyncio.run(main())

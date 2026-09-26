import asyncio
import httpx
from app.main import app

async def test_health():
    async with httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://test") as client:
        response = await client.get("/api/health")
        print("Status code:", response.status_code)
        print("Response JSON:", response.json())
        assert response.status_code == 200
        assert response.json()["database"] == "healthy"
        print("-> KIỂM TRA SỨC KHỎE API & CSDL THÀNH CÔNG!")

if __name__ == "__main__":
    asyncio.run(test_health())

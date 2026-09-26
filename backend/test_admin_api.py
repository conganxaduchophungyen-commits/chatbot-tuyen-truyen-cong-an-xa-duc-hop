import asyncio
import httpx
from app.main import app

async def run_admin_tests():
    print("=" * 60)
    print("BẮT ĐẦU KIỂM THỬ PHÂN HỆ QUẢN TRỊ ADMIN (GIAI ĐOẠN 4)")
    print("=" * 60)

    async with httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://test") as client:
        # 1. Test Login
        login_res = await client.post("/api/auth/login", json={
            "username": "admin_duchop",
            "password": "CongAnDucHop@2026"
        })
        assert login_res.status_code == 200
        token_data = login_res.json()
        token = token_data["access_token"]
        headers = {"Authorization": f"Bearer {token}"}
        print("✓ 1. Đăng nhập cán bộ quản trị: Thành công!")

        # 2. Test Get Dashboard Stats
        stats_res = await client.get("/api/admin/stats", headers=headers)
        assert stats_res.status_code == 200
        stats = stats_res.json()
        print(f"✓ 2. Lấy số liệu thống kê Dashboard: OK")
        print(f"   -> Tổng số TTHC: {stats['total_procedures']}")
        print(f"   -> Tổng số bài cảnh báo: {stats['total_articles']}")
        print(f"   -> Lượt hỏi đáp của dân: {stats['total_chat_queries']}")
        print(f"   -> Tỷ lệ hài lòng: {stats['satisfaction_rate']}%")

        # 3. Test Ingest Knowledge (Nạp tri thức AI)
        ingest_payload = {
            "source_title": "Nghị định 144/2021/NĐ-CP về xử phạt vi phạm hành chính an ninh trật tự",
            "source_type": "law",
            "content": "Phạt tiền từ 300.000 đồng đến 500.000 đồng đối với hành vi không thực hiện đúng quy định về đăng ký thường trú, tạm trú, thông báo lưu trú, khai báo tạm vắng."
        }
        ingest_res = await client.post("/api/admin/knowledge/ingest", json=ingest_payload, headers=headers)
        assert ingest_res.status_code == 200
        print(f"✓ 3. Nạp tri thức văn bản mới vào AI: {ingest_res.json()['message']}")

        # 4. Test List Knowledge
        k_res = await client.get("/api/admin/knowledge", headers=headers)
        assert k_res.status_code == 200
        k_list = k_res.json()
        assert len(k_list) > 0
        print(f"✓ 4. Kiểm tra danh sách tri thức: OK ({len(k_list)} tài liệu)")

    print("=" * 60)
    print("-> 100% KIỂM THỬ PHÂN HỆ QUẢN TRỊ ADMIN ĐÃ VƯỢT QUA XUẤT SẮC!")
    print("=" * 60)

if __name__ == "__main__":
    asyncio.run(run_admin_tests())

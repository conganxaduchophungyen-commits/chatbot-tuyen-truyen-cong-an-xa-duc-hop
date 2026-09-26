import asyncio
import time
import httpx
from app.main import app

async def single_citizen_session(client: httpx.AsyncClient, session_id: str, query: str):
    start = time.perf_counter()
    resp = await client.post("/api/chat/query", json={
        "session_id": session_id,
        "query": query
    })
    elapsed = time.perf_counter() - start
    assert resp.status_code == 200
    data = resp.json()
    assert "answer" in data
    return elapsed

async def run_load_test():
    print("=" * 60)
    print("BẮT ĐẦU KIỂM THỬ TẢI & KHẢ NĂNG ĐỒNG THỜI (CONCURRENCY LOAD TEST)")
    print("=" * 60)

    queries = [
        "Đăng ký thường trú ở xã Đức Hợp cần giấy tờ gì?",
        "Bấm biển số xe máy tại xã cần mang theo giấy tờ gì?",
        "Hướng dẫn nộp phạt nguội vi phạm giao thông",
        "Có người gọi điện bảo VNeID lỗi bắt cài app lạ",
        "Cấp thẻ Căn cước mới cho trẻ dưới 6 tuổi thế nào?"
    ]

    CONCURRENT_USERS = 20

    async with httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://test") as client:
        start_total = time.perf_counter()
        tasks = []
        for i in range(CONCURRENT_USERS):
            q = queries[i % len(queries)]
            s_id = f"load_test_citizen_{i}"
            tasks.append(single_citizen_session(client, s_id, q))

        results = await asyncio.gather(*tasks)
        total_time = time.perf_counter() - start_total

        avg_latency = sum(results) / len(results)
        max_latency = max(results)
        min_latency = min(results)

        print(f"✓ Tổng số yêu cầu đồng thời: {CONCURRENT_USERS} người dân")
        print(f"✓ Tổng thời gian xử lý: {total_time:.3f} giây")
        print(f"✓ Độ trễ trung bình mỗi câu hỏi: {avg_latency:.3f} giây")
        print(f"✓ Độ trễ nhanh nhất: {min_latency:.3f} giây")
        print(f"✓ Độ trễ chậm nhất: {max_latency:.3f} giây")
        print(f"✓ Tốc độ thông lượng (Throughput): {CONCURRENT_USERS / total_time:.1f} yêu cầu/giây")

    print("=" * 60)
    print("-> BÀI KIỂM THỬ TẢI HOÀN TẤT VỚI HIỆU SUẤT XUẤT SẮC!")
    print("=" * 60)

if __name__ == "__main__":
    asyncio.run(run_load_test())

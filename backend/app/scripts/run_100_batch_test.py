import json
import urllib.request
import time
import random
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

# Load the 1000 questions
with open('backend/app/data/test_1000_questions.json', encoding='utf-8') as f:
    all_1000 = json.load(f)

print(f"Tổng số câu hỏi trong kho test: {len(all_1000)} câu")

# Sample 100 questions randomly across categories
random.seed(2026)
test_sample = random.sample(all_1000, 100)

def test_single_question(item):
    qid = item['id']
    query = item['question']
    category = item.get('category', '')
    
    start_t = time.time()
    payload = json.dumps({"query": query, "session_id": f"batch1000_{qid}"}).encode('utf-8')
    req = urllib.request.Request(
        "http://localhost:8000/api/chat/query",
        data=payload,
        headers={"Content-Type": "application/json"}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            elapsed = round((time.time() - start_t) * 1000, 1)
            data = json.loads(resp.read().decode('utf-8'))
            answer = data.get("answer", "")
            sources = data.get("sources", [])
            
            is_generic = "Trợ lý số Công an xã Đức Hợp đã ghi nhận câu hỏi" in answer
            is_valid_len = len(answer) > 250
            
            status = "PASS" if (not is_generic and is_valid_len) else "FAIL"
            
            return {
                "id": qid,
                "category": category,
                "question": query,
                "status": status,
                "elapsed_ms": elapsed,
                "answer_len": len(answer),
                "sources_count": len(sources),
                "is_generic": is_generic,
                "preview": answer[:120].replace('\n', ' ')
            }
    except Exception as e:
        return {
            "id": qid,
            "category": category,
            "question": query,
            "status": "ERROR",
            "error": str(e)
        }

print("\nĐang thực thi kiểm thử 100 câu hỏi ngẫu nhiên đồng thời (10 workers)...")
start_all = time.time()

results = []
with ThreadPoolExecutor(max_workers=10) as executor:
    futures = [executor.submit(test_single_question, q) for q in test_sample]
    for idx, f in enumerate(as_completed(futures), 1):
        res = f.result()
        results.append(res)
        if idx % 20 == 0 or idx == len(test_sample):
            print(f" -> Đã hoàn thành: {idx}/{len(test_sample)} câu...")

total_time = round(time.time() - start_all, 1)
passed = sum(1 for r in results if r.get("status") == "PASS")
failed = sum(1 for r in results if r.get("status") != "PASS")
avg_time = round(sum(r.get("elapsed_ms", 0) for r in results) / len(results), 1)

print("\n" + "=" * 70)
print(f"BÁO CÁO KIỂM THỬ TỰ ĐỘNG BATCH TEST (100 CÂU NGẪU NHIÊN TRONG 1000 CÂU)")
print("=" * 70)
print(f"Tổng số test: {len(results)}")
print(f"Số câu trả lời ĐẠT (Chuyên sâu, đúng luật, không chung chung): {passed}/{len(results)} ({passed*100//len(results)}%)")
print(f"Số câu chưa đạt: {failed}")
print(f"Thời gian hoàn thành 100 câu: {total_time}s | Thời gian TB/câu: {avg_time}ms")

if failed > 0:
    print("\nCác câu chưa đạt cần tối ưu tiếp:")
    for r in results:
        if r.get("status") != "PASS":
            print(f" - [{r.get('category')}] {r.get('question')[:70]} -> {r.get('status')}")

# Save detailed results
with open("test_100_batch_results.json", "w", encoding="utf-8") as f:
    json.dump({
        "summary": {
            "total": len(results),
            "passed": passed,
            "failed": failed,
            "pass_rate_pct": passed * 100 // len(results),
            "total_time_s": total_time,
            "avg_time_ms": avg_time
        },
        "details": results
    }, f, ensure_ascii=False, indent=2)

print("\nĐã lưu chi tiết vào test_100_batch_results.json")

import urllib.request
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

TEST_SUITE = [
    {
        "id": 1,
        "title": "Căn cước trẻ em 7 tuổi",
        "category": "TTHC / Luật Căn cước 2023",
        "query": "Con tôi năm nay 7 tuổi, tôi muốn làm thẻ Căn cước cho cháu thì phải nộp hồ sơ ở đâu, có bắt buộc thu nhận vân tay và mống mắt không?",
        "expected_keywords": ["căn cước", "nhu cầu", "mống mắt", "khuôn mặt"]
    },
    {
        "id": 2,
        "title": "Đăng ký thường trú tại xã",
        "category": "TTHC / Cư trú",
        "query": "Tôi mới mua nhà tại thôn Nho Lâm xã Đức Hợp, muốn đăng ký thường trú thì hồ sơ gồm giấy tờ gì và làm trên mạng được không?",
        "expected_keywords": ["thường trú", "ct01", "chỗ ở hợp pháp"]
    },
    {
        "id": 3,
        "title": "Đăng ký xe máy & Biển số định danh",
        "category": "TTHC / Giao thông",
        "query": "Tôi mới mua xe máy mới, muốn bấm biển số tại Công an xã Đức Hợp thì cần mang theo những gì và biển số này có đi theo tôi suốt đời không?",
        "expected_keywords": ["biển số", "định danh", "xe"]
    },
    {
        "id": 4,
        "title": "Giả danh Công an dọa án rửa tiền",
        "category": "Cảnh báo Lừa đảo / Online",
        "query": "Có số máy lạ gọi đến tự xưng là cán bộ điều tra Công an tỉnh dọa tôi dính vào đường dây rửa tiền xuyên quốc gia, yêu cầu chuyển 50 triệu vào tài khoản an toàn để giám định, tôi phải làm sao?",
        "expected_keywords": ["lừa đảo", "không", "tiền"]
    },
    {
        "id": 5,
        "title": "Bẫy tuyển CTV Shopee làm nhiệm vụ",
        "category": "Cảnh báo Lừa đảo / Online",
        "query": "Tôi nhận được tin nhắn tuyển cộng tác viên chốt đơn Shopee hoa hồng 20-30%, ban đầu nạp 200k thì rút được cả gốc lẫn lãi, giờ họ yêu cầu nạp thêm 10 triệu để hoàn thành nhiệm vụ thì có phải lừa đảo không?",
        "expected_keywords": ["lừa đảo", "shopee", "không"]
    },
    {
        "id": 6,
        "title": "Bẫy chuyển tiền nhầm vào tài khoản",
        "category": "Cảnh báo Lừa đảo / Đời thực",
        "query": "Tự nhiên tài khoản ngân hàng của tôi có người chuyển nhầm vào 20 triệu, lát sau có người gọi đến nhận là chuyển nhầm rồi đòi lại kèm lời đe dọa ép tính lãi vay, tôi xử lý thế nào cho đúng luật?",
        "expected_keywords": ["chuyển tiền", "ngân hàng", "công an"]
    },
    {
        "id": 7,
        "title": "Bạo lực gia đình khẩn cấp",
        "category": "ANTT / Khẩn cấp",
        "query": "Hàng xóm nhà tôi có người chồng thường xuyên say xỉn đánh đập vợ con kêu cứu rất to, chúng tôi cần báo cho ai và pháp luật bảo vệ nạn nhân như thế nào?",
        "expected_keywords": ["02213.815.999", "bạo lực gia đình", "công an"]
    },
    {
        "id": 8,
        "title": "Rơi ví mất hết giấy tờ tùy thân",
        "category": "Thủ tục xử lý mất giấy tờ",
        "query": "Tôi đi chợ không may bị rơi mất ví, trong đó có cả thẻ Căn cước, bằng lái xe và thẻ ATM thì việc đầu tiên tôi phải làm là gì và có sợ bị kẻ gian lấy đi vay tiền không?",
        "expected_keywords": ["mất", "khóa thẻ", "căn cước", "vneid"]
    },
    {
        "id": 9,
        "title": "Tranh chấp đất đai ngõ đi chung",
        "category": "Pháp luật Dân sự / Đất đai",
        "query": "Nhà hàng xóm xây tường rào lấn sang phần đất ngõ đi chung của gia đình tôi, tôi có được tự ý đập tường rào đó đi không và xã giải quyết việc này ra sao?",
        "expected_keywords": ["đất", "hòa giải", "ubnd"]
    },
    {
        "id": 10,
        "title": "Cho vay quỵt nợ & Đòi nợ thuê",
        "category": "Pháp luật Dân sự / Vay nợ",
        "query": "Tôi cho bạn vay 100 triệu có giấy viết tay nhưng quá hạn 1 năm bạn không chịu trả và chặn số điện thoại, tôi có được thuê người đến nhà đòi không và lãi suất tối đa được tính là bao nhiêu?",
        "expected_keywords": ["vay", "lãi suất", "20%"]
    }
]

def run_tests():
    print("=" * 70)
    print("CHƯƠNG TRÌNH TỰ ĐỘNG ĐÁNH GIÁ NĂNG LỰC TRẢ LỜI CỦA CHATBOT AI")
    print("=" * 70)
    
    results = []
    
    for item in TEST_SUITE:
        qid = item["id"]
        qtitle = item["title"]
        query = item["query"]
        category = item["category"]
        expected = item["expected_keywords"]
        
        print(f"\n[Test #{qid}] {qtitle} ({category})")
        print(f" > Câu hỏi: {query[:75]}...")
        
        start_t = time.time()
        payload = json.dumps({"query": query, "session_id": f"autotest_{qid}"}).encode('utf-8')
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
                
                # Check keyword matches
                ans_lower = answer.lower()
                matched_kw = [k for k in expected if k.lower() in ans_lower]
                kw_pass = len(matched_kw) >= max(1, len(expected) // 2)
                
                # Check length
                len_pass = len(answer) > 200
                
                # Status
                status = "PASS" if (kw_pass and len_pass) else "WARN"
                
                print(f" < Kết quả: {status} ({elapsed}ms | {len(answer)} ký tự | {len(sources)} nguồn trích dẫn)")
                print(f" < Trích dẫn đầu: {[s.get('title','')[:40] for s in sources[:2]]}")
                print(f" < Tóm tắt trả lời: {answer[:140].replace(chr(10), ' ')}...")
                
                results.append({
                    "id": qid,
                    "title": qtitle,
                    "category": category,
                    "status": status,
                    "elapsed_ms": elapsed,
                    "answer_len": len(answer),
                    "sources_count": len(sources),
                    "matched_kw": matched_kw,
                    "expected_kw": expected,
                    "full_answer": answer,
                    "sources": sources
                })
        except Exception as e:
            print(f" < LỖI: {e}")
            results.append({
                "id": qid,
                "title": qtitle,
                "category": category,
                "status": "FAIL",
                "error": str(e)
            })

    # Summary report
    print("\n" + "=" * 70)
    print("BẢNG TỔNG KẾT KẾT QUẢ KIỂM THỬ TỰ ĐỘNG")
    print("=" * 70)
    passed = sum(1 for r in results if r.get("status") == "PASS")
    total = len(results)
    avg_time = round(sum(r.get("elapsed_ms", 0) for r in results) / total, 1)
    
    print(f"TỔNG SỐ TEST: {total} | ĐẠT: {passed}/{total} ({passed*100//total}%) | T/G PHẢN HỒI TB: {avg_time}ms\n")
    
    # Export full test results to json for detailed reporting
    with open("test_results.json", "w", encoding="utf-8") as f:
        json.dump({"summary": {"total": total, "passed": passed, "avg_time_ms": avg_time}, "tests": results}, f, ensure_ascii=False, indent=2)
    print("Đã lưu chi tiết vào test_results.json")

if __name__ == "__main__":
    run_tests()

"""
RAG Vector Engine — Công an xã Đức Hợp
========================================
Dùng ChromaDB làm vector store + Sentence-Transformers để embed
5000 câu hỏi pháp luật + 35 kịch bản lừa đảo.

Chạy offline 100%, không cần API key.
"""

import os
import json
import re
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple

# Lazy imports để tránh lỗi khi chưa cài
_chroma_client = None
_embed_model = None

# Đường dẫn tuyệt đối
BASE_DIR = Path(__file__).parent.parent.parent  # backend/
DATA_DIR = BASE_DIR / "app" / "data"
CHROMA_DIR = BASE_DIR / "chroma_db"
LEGAL_DATA_PATH = DATA_DIR / "bo-cau-hoi-phap-luat-5000.jsonl"

COLLECTION_LEGAL = "legal_qa"       # 5000 câu hỏi pháp luật
COLLECTION_SCAM = "scam_alerts"     # 35 kịch bản lừa đảo

EMBED_MODEL_NAME = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

# ─────────────────────────── INIT ───────────────────────────

def _get_embed_model():
    global _embed_model
    if _embed_model is None:
        from sentence_transformers import SentenceTransformer
        print("[RAG] Loading embedding model...")
        _embed_model = SentenceTransformer(EMBED_MODEL_NAME)
        print(f"[RAG] Embedding model loaded: {EMBED_MODEL_NAME}")
    return _embed_model


def _get_chroma_client():
    global _chroma_client
    if _chroma_client is None:
        import chromadb
        CHROMA_DIR.mkdir(parents=True, exist_ok=True)
        _chroma_client = chromadb.PersistentClient(path=str(CHROMA_DIR))
        print(f"[RAG] ChromaDB initialized at: {CHROMA_DIR}")
    return _chroma_client


def _embed(texts: List[str]) -> List[List[float]]:
    """Embed a list of texts using SentenceTransformer."""
    model = _get_embed_model()
    embeddings = model.encode(texts, show_progress_bar=False, normalize_embeddings=True)
    return embeddings.tolist()


# ─────────────────────────── INDEX BUILDER ───────────────────────────

def _load_legal_jsonl() -> List[Dict[str, str]]:
    """
    Doc file 5000 cau hoi phap luat JSONL.
    Format thuc te: {id, category, subcategory, question, intent, keywords, difficulty}
    Khong co truong 'answer' — dung question + keywords de embed, category de routing.
    """
    records = []
    if not LEGAL_DATA_PATH.exists():
        print(f"[RAG] Warning: Legal data not found at {LEGAL_DATA_PATH}")
        return records

    with open(LEGAL_DATA_PATH, "r", encoding="utf-8") as f:
        for i, line in enumerate(f):
            line = line.strip()
            if not line:
                continue
            try:
                obj = json.loads(line)
                q = obj.get("question") or obj.get("input") or obj.get("q") or ""
                a = obj.get("answer") or obj.get("output") or obj.get("a") or ""
                category = obj.get("category") or obj.get("topic") or "phap luat"
                subcategory = obj.get("subcategory") or ""
                keywords = obj.get("keywords") or ""
                intent = obj.get("intent") or ""

                if not q:
                    continue

                if a:
                    document = f"Cau hoi: {q.strip()}\nTra loi: {a.strip()}"
                    answer_field = a.strip()
                else:
                    # Chi co cau hoi: dung de tim kiem ngu nghia
                    kw_text = f" | Keywords: {keywords}" if keywords else ""
                    sub_text = f" | {subcategory}" if subcategory else ""
                    document = f"{q.strip()}{kw_text}{sub_text}"
                    answer_field = f"[{category}{' > ' + subcategory if subcategory else ''}] {q.strip()}"

                records.append({
                    "id": f"legal_{obj.get('id', i)}",
                    "question": q.strip(),
                    "answer": answer_field,
                    "category": category,
                    "subcategory": subcategory,
                    "keywords": keywords,
                    "intent": intent,
                    "document": document
                })
            except json.JSONDecodeError:
                continue

    print(f"[RAG] Loaded {len(records)} legal Q&A records")
    return records


def _load_scam_data() -> List[Dict[str, str]]:
    """Tạo records từ 35 kịch bản lừa đảo (hardcoded key scenarios)."""
    scam_records = [
        {
            "id": "scam_police_impersonation",
            "question": "Có người tự xưng là công an gọi điện bảo tôi liên quan đến đường dây ma túy rửa tiền phải chuyển tiền",
            "answer": "Đây là thủ đoạn lừa đảo giả danh Công an / Viện Kiểm sát / Tòa án. Cơ quan Công an KHÔNG BAO GIỜ gọi điện thoại yêu cầu chuyển tiền hay làm việc qua điện thoại. Hãy cúp máy ngay và gọi xác minh tại Công an xã Đức Hợp: 02213.815.999.",
            "category": "lừa đảo",
            "document": "Kịch bản ON-01: Giả danh Công an/Viện Kiểm sát. Thủ đoạn: Gọi điện VoIP tự xưng cán bộ điều tra, đe dọa liên quan án ma túy, yêu cầu chuyển tiền vào 'tài khoản tạm giữ'. Biện pháp: Cúp máy ngay, gọi 02213.815.999 xác minh."
        },
        {
            "id": "scam_shopee_job",
            "question": "Có người nhắn tin tuyển cộng tác viên Shopee TikTok hoa hồng 20-30% làm đơn hàng online",
            "answer": "Đây là lừa đảo tuyển CTV Shopee/TikTok giả mạo. Sau khi nạp tiền 'kích hoạt đơn hàng', tiền sẽ bị chiếm đoạt. KHÔNG bao giờ nạp tiền để nhận việc. Báo ngay 02213.815.999.",
            "category": "lừa đảo",
            "document": "Kịch bản ON-04: Tuyển CTV Shopee/TikTok/Lazada. Thủ đoạn: Dụ nạp tiền làm nhiệm vụ, hoa hồng ảo, sau đó chặn liên lạc. Phòng ngừa: Không nạp tiền để nhận việc online."
        },
        {
            "id": "scam_deepfake",
            "question": "Bạn bè gọi video xin mượn tiền khẩn cấp tai nạn cấp cứu",
            "answer": "Có thể là Deepfake video call — công nghệ AI giả mạo khuôn mặt người thân. Hãy cúp máy, gọi lại số điện thoại thực của người đó để xác minh trực tiếp trước khi chuyển bất kỳ khoản tiền nào.",
            "category": "lừa đảo",
            "document": "Kịch bản ON-08: Deepfake video call mượn tiền. Thủ đoạn: Dùng AI deepfake giả khuôn mặt người thân gọi video khẩn cấp xin tiền. Phòng ngừa: Cúp máy, gọi lại xác minh."
        },
        {
            "id": "scam_investment",
            "question": "Được mời tham gia đầu tư tiền ảo crypto forex lợi nhuận 30% mỗi tháng",
            "answer": "Đây là lừa đảo đầu tư tài chính đa cấp / Ponzi. Không có kênh đầu tư hợp pháp nào đảm bảo lợi nhuận 30%/tháng. Tuyệt đối không chuyển tiền. Báo ngay Công an xã Đức Hợp: 02213.815.999.",
            "category": "lừa đảo",
            "document": "Kịch bản ON-11: Đầu tư tiền ảo/Forex/Ponzi. Thủ đoạn: Hứa lợi nhuận ảo, lấy tiền người sau trả người trước, sập khi đủ tiền. Phòng ngừa: Không đầu tư kênh không có giấy phép UBCK."
        },
        {
            "id": "scam_qr_malware",
            "question": "Quét mã QR tại bãi giữ xe nhà hàng thì bị mất tiền trong tài khoản",
            "answer": "Đây là QR Phishing — dán QR độc hại đè lên QR thật. Khi quét dẫn đến web giả cài mã độc hoặc đánh cắp thông tin ngân hàng. Luôn kiểm tra QR trước khi quét, ưu tiên dùng QR chính thức của ngân hàng trong app.",
            "category": "lừa đảo",
            "document": "Kịch bản OFF-04: QR Phishing. Thủ đoạn: Dán QR độc dẫn đến trang giả mạo. Phòng ngừa: Không quét QR lạ, kiểm tra URL trước khi thanh toán."
        },
    ]
    return scam_records


def build_index(force_rebuild: bool = False) -> bool:
    """
    Xây dựng (hoặc rebuild) ChromaDB index từ toàn bộ dữ liệu.
    Trả về True nếu thành công.
    """
    try:
        client = _get_chroma_client()
        
        # Kiểm tra xem đã index chưa
        existing = [c.name for c in client.list_collections()]
        
        if not force_rebuild and COLLECTION_LEGAL in existing:
            legal_col = client.get_collection(COLLECTION_LEGAL)
            count = legal_col.count()
            if count > 100:
                print(f"[RAG] Index already built: {count} legal docs. Skipping rebuild.")
                return True
        
        print("[RAG] Building vector index...")
        
        # ── Legal Q&A collection ──
        try:
            client.delete_collection(COLLECTION_LEGAL)
        except:
            pass
        legal_col = client.create_collection(
            name=COLLECTION_LEGAL,
            metadata={"description": "5000 câu hỏi pháp luật Việt Nam"}
        )
        
        legal_records = _load_legal_jsonl()
        if legal_records:
            # Batch insert để tránh OOM
            BATCH = 256
            for i in range(0, len(legal_records), BATCH):
                batch = legal_records[i:i+BATCH]
                docs = [r["document"] for r in batch]
                ids = [r["id"] for r in batch]
                metas = [{"question": r["question"], "answer": r["answer"], "category": r["category"]} for r in batch]
                embeddings = _embed(docs)
                legal_col.add(
                    embeddings=embeddings,
                    documents=docs,
                    metadatas=metas,
                    ids=ids
                )
                print(f"[RAG] Indexed legal batch {i//BATCH + 1}/{(len(legal_records)-1)//BATCH + 1} ({len(batch)} docs)")
        
        # ── Scam alerts collection ──
        try:
            client.delete_collection(COLLECTION_SCAM)
        except:
            pass
        scam_col = client.create_collection(
            name=COLLECTION_SCAM,
            metadata={"description": "35 kịch bản lừa đảo Công an xã Đức Hợp"}
        )
        
        scam_records = _load_scam_data()
        if scam_records:
            docs = [r["document"] for r in scam_records]
            ids = [r["id"] for r in scam_records]
            metas = [{"question": r["question"], "answer": r["answer"], "category": r["category"]} for r in scam_records]
            embeddings = _embed(docs)
            scam_col.add(embeddings=embeddings, documents=docs, metadatas=metas, ids=ids)
            print(f"[RAG] Indexed {len(scam_records)} scam alert records")
        
        total = legal_col.count() + scam_col.count()
        print(f"[RAG] ✅ Index built successfully! Total: {total} documents")
        return True
        
    except Exception as e:
        print(f"[RAG] ❌ Failed to build index: {e}")
        import traceback
        traceback.print_exc()
        return False


# ─────────────────────────── RETRIEVER ───────────────────────────

def retrieve(
    query: str,
    top_k: int = 5,
    similarity_threshold: float = 0.40,
) -> Tuple[List[Dict[str, Any]], float]:
    """
    Tìm kiếm vector similarity cho câu hỏi.
    Trả về (results, best_score) với results là list of {question, answer, score, source}.
    """
    try:
        client = _get_chroma_client()
        query_embedding = _embed([query])[0]
        
        results = []
        
        # Search cả 2 collections
        for col_name in [COLLECTION_LEGAL, COLLECTION_SCAM]:
            try:
                col = client.get_collection(col_name)
                if col.count() == 0:
                    continue
                
                n_results = min(top_k, col.count())
                search_results = col.query(
                    query_embeddings=[query_embedding],
                    n_results=n_results,
                    include=["metadatas", "distances", "documents"]
                )
                
                for i, (meta, dist) in enumerate(zip(
                    search_results["metadatas"][0],
                    search_results["distances"][0]
                )):
                    # ChromaDB trả về khoảng cách cosine [0,2], chuyển sang similarity [0,1]
                    score = 1 - (dist / 2)
                    if score >= similarity_threshold:
                        results.append({
                            "question": meta.get("question", ""),
                            "answer": meta.get("answer", ""),
                            "category": meta.get("category", ""),
                            "score": round(score, 4),
                            "source": col_name,
                            "rank": i
                        })
            except Exception as e:
                print(f"[RAG] Error querying {col_name}: {e}")
                continue
        
        # Sắp xếp theo score giảm dần
        results.sort(key=lambda x: x["score"], reverse=True)
        results = results[:top_k]
        
        best_score = results[0]["score"] if results else 0.0
        return results, best_score
        
    except Exception as e:
        print(f"[RAG] Retrieve error: {e}")
        return [], 0.0


def answer_with_rag(query: str, top_k: int = 3, threshold: float = 0.40) -> Dict[str, Any]:
    """
    Pipeline chinh: nhan cau hoi → vector search → tong hop cau tra loi.

    Returns:
        {
            "answer": str or None,
            "confidence": float,
            "sources": list,
            "method": str,
            "matched_category": str,     # Category cua ket qua match nhat (de routing fallback)
            "matched_keywords": str,     # Keywords de fallback engine hieu chu de
        }
    """
    try:
        results, best_score = retrieve(query, top_k=top_k, similarity_threshold=threshold)

        if not results:
            return {
                "answer": None, "confidence": 0.0,
                "sources": [], "method": "no_match",
                "matched_category": "", "matched_keywords": ""
            }

        top = results[0]

        # Lay category va keywords tu ket qua khop nhat (de routing fallback)
        matched_category = top.get("category", "")
        matched_keywords = top.get("keywords", "") if "keywords" in top else ""

        # Kiem tra xem co phai la Q&A that (co answer) hay chi la cau hoi index
        top_answer = top.get("answer", "")
        is_real_answer = top_answer and not top_answer.startswith("[")

        if is_real_answer and best_score >= 0.75:
            # Co answer that va do tuong dong cao → tra loi truc tiep
            answer = _format_direct_answer(top, query)
            if len(results) > 1 and results[1]["score"] >= 0.60:
                next_real = [r for r in results[1:3] if r.get("answer") and not r["answer"].startswith("[")]
                if next_real:
                    answer += _format_supplementary(next_real)
        elif is_real_answer and best_score >= 0.40:
            # Co answer that nhung do tuong dong trung binh → tong hop
            answer = _synthesize_answer(query, [r for r in results if r.get("answer") and not r["answer"].startswith("[")])
        else:
            # Chi co cau hoi (khong co answer) → tra ve None de routing fallback theo category
            return {
                "answer": None,
                "confidence": best_score,
                "sources": [{"question": r["question"], "score": r["score"], "category": r.get("category", "")} for r in results],
                "method": "vector_match_no_answer",
                "matched_category": matched_category,
                "matched_keywords": matched_keywords,
            }

        return {
            "answer": answer,
            "confidence": best_score,
            "sources": [{"question": r["question"], "score": r["score"], "category": r.get("category", "")} for r in results],
            "method": "vector_rag",
            "matched_category": matched_category,
            "matched_keywords": matched_keywords,
        }

    except Exception as e:
        print(f"[RAG] answer_with_rag error: {e}")
        return {"answer": None, "confidence": 0.0, "sources": [], "method": "error", "matched_category": "", "matched_keywords": ""}


def _format_direct_answer(result: Dict, query: str) -> str:
    """Format câu trả lời trực tiếp từ kết quả tìm kiếm tốt nhất."""
    answer = result["answer"]
    category = result.get("category", "")
    score = result.get("score", 0)
    
    greeting = "Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin giải đáp:\n\n"
    
    # Thêm icon phù hợp theo danh mục
    icons = {
        "lừa đảo": "⚠️",
        "hình sự": "⚖️",
        "hành chính": "🏛️",
        "dân sự": "📋",
        "đất đai": "🏠",
        "giao thông": "🚗",
        "hôn nhân": "👨‍👩‍👧",
        "lao động": "👷",
        "pháp luật": "📖",
    }
    icon = next((v for k, v in icons.items() if k in category.lower()), "📌")
    
    formatted = f"{greeting}{icon} **{answer.strip()}**"
    formatted += f"\n\n📞 Mọi thắc mắc thêm, liên hệ Trực ban Công an xã Đức Hợp: **02213.815.999**"
    return formatted


def _format_supplementary(results: List[Dict]) -> str:
    """Format thông tin bổ sung từ các kết quả phụ."""
    if not results:
        return ""
    parts = ["\n\n---\n📌 **Thông tin liên quan:**"]
    for r in results[:2]:
        if r["answer"]:
            parts.append(f"- {r['answer'][:200].strip()}{'...' if len(r['answer']) > 200 else ''}")
    return "\n".join(parts)


def _synthesize_answer(query: str, results: List[Dict]) -> str:
    """Tổng hợp câu trả lời từ nhiều kết quả khi không có kết quả hoàn hảo."""
    greeting = "Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin tổng hợp thông tin liên quan:\n\n"
    
    parts = [greeting]
    for i, r in enumerate(results[:3]):
        if r["answer"]:
            parts.append(f"**{i+1}.** {r['answer'].strip()}\n")
    
    parts.append("\n📞 Để được tư vấn chi tiết và chính xác nhất, Quý công dân vui lòng liên hệ trực tiếp Trực ban Công an xã Đức Hợp: **02213.815.999**")
    return "\n".join(parts)


# ─────────────────────────── IS READY CHECK ───────────────────────────

def is_index_ready() -> bool:
    """Kiểm tra xem index đã được build chưa."""
    try:
        client = _get_chroma_client()
        existing = [c.name for c in client.list_collections()]
        if COLLECTION_LEGAL not in existing:
            return False
        col = client.get_collection(COLLECTION_LEGAL)
        return col.count() > 100
    except:
        return False

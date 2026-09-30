import re
from typing import List, Dict, Any, Optional, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_, String, cast
from app.core.config import settings
from app.models import Procedure, Article, ChatLog

# Danh sách từ khóa độc hại / lách luật cần kích hoạt Guardrail
ILLEGAL_KEYWORDS = [
    "lách luật", "trốn nghĩa vụ", "làm giả giấy tờ", "làm giả căn cước", "mua bằng lái",
    "đánh bạc", "rửa tiền", "chạy án", "mua điểm thi", "đút lót", "hối lộ",
    "hack", "chiếm đoạt", "jailbreak"
]

INJECTION_PATTERNS = [
    r"ignore\s+(all\s+)?(previous|prior)\s+instructions?",
    r"reveal\s+.*(system\s+prompt|prompt|secret)",
    r"you\s+are\s+now\s+(dan|unrestricted)",
    r"bỏ\s+qua\s+.*(quy\s+định|chỉ\s+thị|hướng\s+dẫn)",
    r"system\s+prompt",
]

class RAGService:
    @staticmethod
    def check_guardrails(query: str) -> Optional[str]:
        """Kiểm tra hàng rào an toàn cho câu hỏi"""
        query_lower = query.lower()
        
        # 1. Kiểm tra độ dài câu hỏi
        if len(query.strip()) < 2:
            return "Kính chào Quý công dân! Xin vui lòng nhập câu hỏi rõ ràng hơn để Trợ lý Công an xã Đức Hợp có thể hỗ trợ tốt nhất."
            
        if len(query) > 1000:
            return "Câu hỏi của Quý công dân quá dài. Xin vui lòng tóm tắt ngắn gọn dưới 1000 ký tự."

        # 2. Kiểm tra ý định vi phạm pháp luật / lách luật / prompt injection
        for pattern in INJECTION_PATTERNS:
            if re.search(pattern, query_lower):
                return (
                    "Kính thưa Quý công dân, Trợ lý số Công an xã Đức Hợp chỉ hỗ trợ giải đáp pháp luật "
                    "và thủ tục hành chính công. Chúng tôi từ chối các câu lệnh can thiệp hệ thống."
                )

        # Nếu câu hỏi là về nhận diện / tố giác lừa đảo hoặc hỏi cách xử lý khi bị đe dọa, không kích hoạt chặn
        is_scam_inquiry = any(s in query_lower for s in [
            "bị lừa", "lừa đảo", "đe dọa", "dọa", "tự xưng", "mạo danh", "giả danh", 
            "gọi điện", "nhắn tin", "bẫy", "xử lý sao", "phải làm sao", "làm gì", "tố giác", "báo công an"
        ])

        if not is_scam_inquiry:
            for keyword in ILLEGAL_KEYWORDS:
                if keyword in query_lower:
                    return (
                        "Kính thưa Quý công dân, Trợ lý số Công an xã Đức Hợp được thiết lập để tuyên truyền "
                        "và hướng dẫn pháp luật theo đúng các quy định của Nhà nước. "
                        "Chúng tôi từ chối hỗ trợ các yêu cầu hướng dẫn lách luật, trốn tránh trách nhiệm "
                        "hoặc vi phạm pháp luật. Mọi hành vi vi phạm sẽ bị xử lý nghiêm theo quy định."
                    )
        return None

    @staticmethod
    async def retrieve_context(db: AsyncSession, query: str) -> Tuple[str, List[Dict[str, Any]]]:
        """Tìm kiếm tài liệu và thủ tục phù hợp với câu hỏi của người dân"""
        sources: List[Dict[str, Any]] = []
        context_parts: List[str] = []
        query_lower = query.lower()

        # 0. BẠO LỰC GIA ĐÌNH & AN NINH TRẬT TỰ KHẨN CẤP
        is_dv = any(k in query_lower for k in [
            "chồng đánh", "vợ đánh", "bị đánh", "bị bạo hành", "bạo lực gia đình",
            "hành hung", "đánh đập", "bị đe dọa", "bạo hành", "cứu tôi", "đánh người", "cố ý gây thương tích"
        ])
        if is_dv:
            dv_text = (
                "### CHỈ ĐẠO NGHIỆP VỤ KHẨN CẤP: PHÒNG CHỐNG BẠO LỰC GIA ĐÌNH VÀ BẢO VỆ TÍNH MẠNG CÔNG DÂN\n"
                "- Cơ quan giải quyết: Công an xã Đức Hợp, tỉnh Hưng Yên.\n"
                "- Hotline Trực ban khẩn cấp 24/24h: 02213.815.999 | Khẩn cấp: 113 | Bảo vệ Phụ nữ & Trẻ em: 111.\n"
                "- 4 bước khẩn cấp: 1. Lập tức lánh nạn bảo vệ tính mạng an toàn; 2. Gọi ngay Trực ban Công an xã Đức Hợp can thiệp hiện trường khống chế đối tượng; 3. Đến Trạm Y tế xã Đức Hợp/TTYT huyện khám thương tích lấy giấy chứng nhận; 4. Áp dụng Quyết định cấm tiếp xúc theo Điều 25 Luật PCBLGĐ 2022; xử phạt hành chính 5 - 20 triệu (Điều 52 NĐ 144/2021) hoặc khởi tố hình sự (Điều 134, 185 BLHS)."
            )
            context_parts.append(dv_text)
            sources = [
                {"type": "knowledge", "title": "Hướng dẫn khẩn cấp khi bị bạo lực gia đình (Luật PCBLGĐ 2022)"},
                {"type": "knowledge", "title": "Xử phạt hành chính và hình sự hành vi đánh đập vợ/chồng (NĐ 144/2021 & BLHS)"},
                {"type": "knowledge", "title": "Biện pháp Cấm tiếp xúc bảo vệ nạn nhân tại xã Đức Hợp"}
            ]
            return dv_text, sources

        # Tách từ khóa tìm kiếm
        keywords = [w.strip() for w in re.split(r'[,.\s]+', query.lower()) if len(w.strip()) > 1]
        
        # 1. Tìm trong bảng Thủ tục hành chính (Procedures)
        is_proc_query = any(k in query_lower for k in [
            "thủ tục", "hồ sơ", "làm", "đăng ký", "cư trú", "thường trú", "tạm trú", 
            "vneid", "gplx", "bằng lái", "đăng ký xe", "khai sinh", "khai tử", "bhyt", 
            "thuế", "lý lịch tư pháp", "biểu mẫu", "mất giấy tờ", "mất", "cấp lại", "rơi ví", 
            "giấy tờ", "cà vẹt", "sổ đỏ", "đổi thẻ", "đổi bằng"
        ])
        
        if is_proc_query:
            stmt_proc = select(Procedure).where(Procedure.is_active == True)
            if keywords:
                conditions = []
                for kw in keywords[:6]:
                    pattern = f"%{kw}%"
                    conditions.append(Procedure.title.ilike(pattern))
                    conditions.append(Procedure.target_audience.ilike(pattern))
                    conditions.append(cast(Procedure.required_documents, String).ilike(pattern))
                stmt_proc = stmt_proc.where(or_(*conditions))
                
            res_proc = await db.execute(stmt_proc.limit(3))
            matched_procedures = list(res_proc.scalars().all())

            for p in matched_procedures:
                doc_list = "\n".join([f"  - {d}" for d in (p.required_documents or [])])
                step_list = "\n".join([f"  - Bước {s.get('step')}: {s.get('title')} ({s.get('desc')})" for s in (p.steps or [])])
                
                p_text = (
                    f"### Thủ tục: {p.title}\n"
                    f"- Mã TTHC: {p.code}\n"
                    f"- Thẩm quyền giải quyết: {p.competent_authority}\n"
                    f"- Thời hạn giải quyết: {p.processing_time}\n"
                    f"- Phí, lệ phí: {p.fee}\n"
                    f"- Hồ sơ cần chuẩn bị:\n{doc_list}\n"
                    f"- Trình tự các bước thực hiện:\n{step_list}\n"
                    f"- Nộp trực tuyến: {p.online_url or 'Chưa hỗ trợ trực tuyến'}\n"
                )
                context_parts.append(p_text)
                sources.append({
                    "type": "procedure",
                    "id": p.id,
                    "title": p.title,
                    "code": p.code,
                    "url": p.online_url
                })

        # 2. Tìm trong bảng Cảnh báo lừa đảo & Tuyên truyền (Articles)
        is_scam_query = any(k in query_lower for k in [
            "lừa", "tiền", "mạng", "scam", "otp", "tài khoản", "chiếm đoạt", 
            "mã độc", "apk", "việc nhẹ", "shopee", "tiktok", "hoa hồng", "deepfake", "dọa bắt", "công an gọi"
        ])
        if is_scam_query:
            stmt_art = select(Article).where(Article.is_published == True)
            stmt_art = stmt_art.where(Article.is_scam_alert == True)
            res_art = await db.execute(stmt_art.limit(2))
            matched_articles = list(res_art.scalars().all())

            for a in matched_articles:
                tricks = "\n".join([f"  - {t}" for t in (a.scam_tricks or [])])
                advices = "\n".join([f"  - {ad}" for ad in (a.prevention_advice or [])])
                a_text = (
                    f"### Cảnh báo: {a.title}\n"
                    f"- Tóm tắt: {a.summary}\n"
                    f"- Dấu hiệu nhận biết:\n{tricks}\n"
                    f"- Khuyến cáo phòng ngừa từ Công an xã Đức Hợp:\n{advices}\n"
                )
                context_parts.append(a_text)
                sources.append({
                    "type": "article",
                    "id": a.id,
                    "title": a.title,
                    "slug": a.slug
                })

        full_context = "\n\n".join(context_parts)
        return full_context, sources

    @staticmethod
    async def generate_response(
        query: str, 
        context: str, 
        history: Optional[List[Dict[str, str]]] = None,
        category: Optional[str] = None,
        rag_sources: Optional[List[Dict[str, Any]]] = None
    ) -> str:
        """Sinh câu trả lời thông qua Gemini API hoặc bộ máy Fallback Engine"""
        api_key = settings.GEMINI_API_KEY

        # Nếu có API Key, gọi Google Gemini
        if api_key and api_key != "your_gemini_api_key_here":
            try:
                import httpx
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{settings.GEMINI_MODEL}:generateContent?key={api_key}"
                
                system_prompt = (
                    "Bạn là Trợ lý số Pháp luật & Thủ tục hành chính của Công an xã Đức Hợp, tỉnh Hưng Yên (chuẩn hóa dữ liệu mốc 28/09/2026).\n"
                    "Trụ sở đơn vị: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n"
                    "Số điện thoại Trực ban tiếp nhận thông tin 24/24h: 02213.815.999.\n"
                    "Phong cách: Lịch sự, ân cần, chuẩn mực, vì nhân dân phục vụ, xưng hô 'Tôi' và 'Bác/Cô/Chú/Anh/Chị/Quý công dân'.\n"
                    "Hệ thống mốc pháp lý bắt buộc tuân thủ:\n"
                    "1. Luật Căn cước số 26/2023/QH15 & Nghị định 69/2024/NĐ-CP: Thẻ Căn cước thay cho CCCD; cấp cho cả trẻ dưới 14 tuổi theo nhu cầu; độ tuổi đổi thẻ: 14, 25, 40, 60 tuổi; VNeID Mức 2 tương đương thẻ vật lý.\n"
                    "2. Luật Trật tự, ATGT đường bộ số 36/2024/QH15 & Nghị định 168/2024/NĐ-CP: Hệ thống 12 điểm GPLX/năm; biển số định danh suốt đời theo TT 24/2023/TT-BCA.\n"
                    "3. Nghị định 63/2024/NĐ-CP: 02 nhóm Dịch vụ công liên thông Khai sinh và Khai tử trên VNeID.\n"
                    "4. Quy tắc Chống ảo giác: Không bịa đặt điều luật không tồn tại; giải thích rõ căn cứ pháp luật."
                )

                prompt_content = f"{system_prompt}\n\n[TÀI LIỆU THAM KHẢO]:\n{context}\n\n[CÂU HỎI CỦA CÔNG DÂN]: {query}"

                payload = {
                    "contents": [{
                        "parts": [{"text": prompt_content}]
                    }],
                    "generationConfig": {
                        "temperature": 0.2,
                        "maxOutputTokens": 1024,
                    }
                }

                async with httpx.AsyncClient(timeout=15.0) as client:
                    resp = await client.post(url, json=payload)
                    if resp.status_code == 200:
                        data = resp.json()
                        candidates = data.get("candidates", [])
                        if candidates and "content" in candidates[0]:
                            parts = candidates[0]["content"].get("parts", [])
                            if parts:
                                return parts[0].get("text", "")
            except Exception as e:
                print(f"[Gemini API Warning] {str(e)} -> Chuyển sang Fallback Engine.")

        # Fallback Engine chuyên sâu toàn diện 30 lĩnh vực
        return RAGService._generate_fallback_response(query, context, category=category)

    @staticmethod
    def _generate_fallback_response(query: str, context: str, category: Optional[str] = None) -> str:
        """Tự động tổng hợp câu trả lời thông minh dựa trên ngữ cảnh, từ khóa và danh mục Vector RAG"""
        q = query.lower()
        cat = (category or "").lower()
        greeting = "Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin giải đáp câu hỏi của Bác/Anh/Chị như sau:\n\n"

        # 0. Bạo lực gia đình & Cứu trợ khẩn cấp (Ưu tiên số 1)
        if any(k in q for k in ["bị chồng đánh", "chồng đánh", "vợ đánh", "đánh đập", "bạo lực gia đình", "bị đánh", "hành hung", "ngược đãi", "cấm tiếp xúc", "bạo hành", "đánh người"]):
            return (
                f"{greeting}🚨 **HƯỚNG DẪN XỬ LÝ KHẨN CẤP KHI BỊ BẠO LỰC GIA ĐÌNH / HÀNH HUNG:**\n\n"
                "Hành vi đánh đập, xâm phạm thân thể vợ/chồng là hành vi vi phạm pháp luật nghiêm trọng theo **Luật Phòng, chống bạo lực gia đình năm 2022** và **Nghị định 144/2021/NĐ-CP** (bị phạt tiền từ 5.000.000đ đến 20.000.000đ hoặc bị truy cứu trách nhiệm hình sự theo Điều 134, Điều 185 Bộ luật Hình sự).\n\n"
                "📌 **4 BƯỚC TỰ BẢO VỆ AN TOÀN NGAY LẬP TỨC:**\n"
                "1️⃣ **Ưu tiên an toàn tính mạng:** Nhanh chóng rời khỏi nơi nguy hiểm, tạm lánh tại nhà người thân, hàng xóm.\n"
                "2️⃣ **Gọi điện báo ngay cho Công an xã Đức Hợp:**\n"
                "- Số điện thoại Trực ban Công an xã Đức Hợp (24/24h): **02213.815.999**\n"
                "- Đường dây nóng phản ứng nhanh: **113** | Bảo vệ trẻ em/phụ nữ: **111**.\n"
                "3️⃣ **Khám thương tích & Lưu giữ bằng chứng:** Đến ngay Trạm y tế xã Đức Hợp khám và lấy Giấy xác nhận thương tích.\n"
                "4️⃣ **Đề nghị áp dụng biện pháp CẤM TIẾP XÚC:** Làm đơn gửi Chủ tịch UBND xã Đức Hợp ra quyết định cấm tiếp xúc theo quy định.\n\n"
                "Cán bộ chiến sĩ Công an xã Đức Hợp luôn bảo vệ sự an toàn và quyền lợi hợp pháp của nhân dân!"
            )

        # 0.1. Mất giấy tờ tùy thân, rơi ví
        if any(k in q for k in ["mất giấy tờ", "mất ví", "rơi ví", "rơi giấy tờ", "thất lạc giấy tờ", "mất hết giấy tờ", "làm lại giấy tờ", "cấp lại giấy tờ", "mất cccd", "mất bằng lái", "mất đăng ký xe"]):
            return (
                f"{greeting}📋 **HƯỚNG DẪN XỬ LÝ KHI BỊ MẤT GIẤY TỜ TÙY THÂN — CÔNG AN XÃ ĐỨC HỢP:**\n\n"
                "🔒 **1. BẢO VỆ TÀI KHOẢN VÀ DỮ LIỆU CÁ NHÂN:**\n"
                "- Mở App ngân hàng bấm 'Khóa thẻ tạm thời' hoặc gọi hotline ngân hàng phong tỏa tài khoản.\n"
                "- **An tâm về Thẻ Căn cước gắn chip:** Dữ liệu đã mã hóa bảo mật, người nhặt được KHÔNG THỂ trích xuất thông tin để vay nợ hay mở tài khoản mạo danh.\n\n"
                "💳 **2. QUY TRÌNH CẤP LẠI GIẤY TỜ TRỰC TUYẾN (100% ONLINE):**\n"
                "1️⃣ **Cấp lại Thẻ Căn cước bị mất (Luật Căn cước 2023):** Nộp hồ sơ hoàn toàn trực tuyến trên ứng dụng **VNeID** hoặc Cổng Dịch vụ công Bộ Công an (`dichvucong.bocongan.gov.vn`). Không cần đơn báo mất, không cần chụp lại ảnh/vân tay. Thẻ được bưu điện gửi về tận nhà.\n"
                "2️⃣ **Cấp lại Giấy phép lái xe (GPLX):** Nộp trực tuyến toàn trình trên Cổng DVC Quốc gia (`dichvucong.gov.vn`).\n"
                "3️⃣ **Cấp lại Đăng ký xe máy:** Kê khai qua Cổng DVC Bộ Công an hoặc liên hệ Trụ sở Công an xã Đức Hợp.\n\n"
                "📞 Hotline hỗ trợ: **02213.815.999**."
            )

        # 1. Trụ sở & Liên hệ (Chỉ kích hoạt khi hỏi cụ thể về địa chỉ/hotline của đơn vị)
        is_contact_query = (
            any(k in q for k in ["địa chỉ công an", "trụ sở công an", "số điện thoại công an", "hotline công an", "trực ban công an", "công an xã ở đâu", "công an ở đâu", "trụ sở ở đâu", "công an xã đức hợp ở đâu"])
            or (
                any(k in q for k in ["địa chỉ", "trụ sở", "hotline", "số điện thoại", "trực ban"])
                and not any(k in q for k in ["căn cước", "cccd", "thường trú", "tạm trú", "khai sinh", "xe", "đất", "vay", "nợ", "lừa", "bị", "ly hôn", "cháy", "tai nạn", "thuế", "bhyt", "bảo hiểm"])
            )
        )
        if is_contact_query:
            return (
                f"{greeting}🏛️ **Thông tin liên hệ Công an xã Đức Hợp, tỉnh Hưng Yên:**\n\n"
                "- **Trụ sở đơn vị:** Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n"
                "- **Số điện thoại Trực ban (tiếp nhận tin báo 24/24h):** **02213.815.999**.\n"
                "- **Thời gian tiếp nhận giải quyết TTHC:** Giờ hành chính từ Thứ Hai đến Thứ Sáu (Thứ Bảy trực theo quy định).\n\n"
                "Cán bộ chiến sĩ Công an xã Đức Hợp luôn sẵn sàng tiếp đón và phục vụ nhân dân!"
            )

        # 2. Xử lý khi bị lừa đảo (tiền bạc, chuyển nhầm tiền, OTP)
        if any(k in q for k in ["bị lừa", "lấy lại tiền", "mất tiền", "chuyển tiền", "hack", "khóa thẻ"]):
            return (
                f"{greeting}🚨 **4 BƯỚC KHẨN CẤP KHI PHÁT HIỆN BỊ LỪA ĐẢO QUA MẠNG:**\n\n"
                "1️⃣ **Khóa tài khoản ngân hàng ngay lập tức:** Vào App ngân hàng bấm 'Khóa thẻ' hoặc gọi tổng đài ngân hàng yêu cầu phong tỏa tài khoản để ngăn kẻ gian tẩu tán tiền.\n"
                "2️⃣ **Thu thập bằng chứng:** Chụp toàn bộ tin nhắn, sao kê lịch sử chuyển tiền có dấu mộc ngân hàng, số điện thoại, tài khoản của kẻ lừa đảo.\n"
                "3️⃣ **Đến trình báo ngay tại Công an xã Đức Hợp:** Địa chỉ: Thôn Nho Lâm, xã Đức Hợp. Hotline Trực ban: **02213.815.999** để nộp đơn tố giác tội phạm.\n"
                "4️⃣ **Tuyệt đối KHÔNG tin vào dịch vụ lấy lại tiền bị lừa trên mạng:** Đó 100% là bẫy lừa đảo lần thứ hai!"
            )

        # 3. Cư trú & Thường trú
        if any(k in q for k in ["thường trú", "nhập khẩu", "cư trú", "tạm trú", "tạm vắng", "ct01"]) or cat == "cư trú":
            return (
                f"{greeting}Về thủ tục **Đăng ký thường trú / Tạm trú tại xã Đức Hợp (Luật Cư trú 2020)**:\n\n"
                "📌 **1. Thành phần hồ sơ cần chuẩn bị:**\n"
                "- Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).\n"
                "- Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán nhà đất, hoặc Hợp đồng thuê nhà hợp pháp).\n"
                "- Ý kiến đồng ý của chủ hộ/chủ sở hữu chỗ ở nếu nhập vào hộ khác.\n\n"
                "📌 **2. Nơi nộp hồ sơ & Thời hạn giải quyết:**\n"
                "- Nộp trực tuyến qua **Cổng Dịch vụ công Bộ Công an** hoặc trực tiếp tại Công an xã Đức Hợp (Thôn Nho Lâm).\n"
                "- Thời hạn giải quyết: **07 ngày làm việc** (thường trú) hoặc **03 ngày làm việc** (tạm trú).\n"
                "- Lệ phí: 20.000 VNĐ (nộp trực tiếp) hoặc 10.000 VNĐ (nộp trực tuyến).\n\n"
                "📞 Hotline hỗ trợ: **02213.815.999**."
            )

        # 4. Căn cước 2023 & VNeID
        if any(k in q for k in ["căn cước", "cccd", "mống mắt", "vneid", "định danh"]) or cat == "căn cước và vneid":
            return (
                f"{greeting}Về quy định **Cấp thẻ Căn cước mới theo Luật Căn cước 2023 (hiệu lực từ 01/07/2024)**:\n\n"
                "📌 **1. Độ tuổi và hình thức cấp:**\n"
                "- **Trẻ em từ 0 đến dưới 6 tuổi:** Cấp theo nhu cầu, phụ huynh kê khai online qua VNeID / Cổng DVC (không thu nhận vân tay, mống mắt).\n"
                "- **Trẻ em từ 6 đến dưới 14 tuổi:** Cấp theo nhu cầu, thu nhận ảnh khuôn mặt, vân tay và **mống mắt**.\n"
                "- **Người từ đủ 14 tuổi trở lên:** Bắt buộc cấp thẻ Căn cước. Độ tuổi đổi thẻ: 14, 25, 40 và 60 tuổi.\n\n"
                "📌 **2. Giá trị thẻ cũ & Kích hoạt VNeID Mức 2:**\n"
                "- Thẻ CCCD gắn chip cũ vẫn có giá trị sử dụng đến thời hạn ghi trên thẻ; CMND 9 số/12 số hết giá trị sau 31/12/2024.\n"
                "- Kích hoạt định danh VNeID Mức 2: Trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ hỗ trợ miễn phí.\n\n"
                "📞 Hotline hỗ trợ: **02213.815.999**."
            )

        # 5. Hộ tịch (Khai sinh, Khai tử, Kết hôn, Trích lục)
        if any(k in q for k in ["hộ tịch", "khai sinh", "khai tử", "kết hôn", "trích lục", "đăng ký kết hôn", "giấy khai sinh"]) or cat == "hộ tịch":
            return (
                f"{greeting}🏛️ **HƯỚNG DẪN THỦ TỤC HỘ TỊCH & DỊCH VỤ CÔNG LIÊN THÔNG (NGHỊ ĐỊNH 63/2024/NĐ-CP):**\n\n"
                "📌 **1. 02 Nhóm DVC liên thông toàn trình trên VNeID / Cổng DVC Quốc gia:**\n"
                "- **Liên thông Khai sinh:** Đăng ký khai sinh + Đăng ký thường trú + Cấp thẻ BHYT cho trẻ dưới 6 tuổi (chỉ kê khai 01 lần, nhận 03 kết quả cùng lúc).\n"
                "- **Liên thông Khai tử:** Đăng ký khai tử + Xóa đăng ký thường trú + Trợ cấp mai táng phí.\n\n"
                "📌 **2. Đăng ký kết hôn:** Hai bên nam nữ nộp hồ sơ tại UBND cấp xã nơi cư trú của một trong hai bên. Cần mang theo Căn cước/VNeID mức 2 và Giấy xác nhận tình trạng hôn nhân (nếu cư trú khác nơi đăng ký).\n\n"
                "📌 **3. Nơi tiếp nhận & Thời hạn:** Nộp online trên Cổng DVC Quốc gia hoặc trực tiếp tại Bộ phận Một cửa UBND xã Đức Hợp. Thời hạn giải quyết trong ngày làm việc đối với khai sinh, khai tử.\n\n"
                "📞 Cần hướng dẫn nộp hồ sơ, bà con liên hệ UBND / Công an xã Đức Hợp: **02213.815.999**."
            )

        # 6. Giao thông & Đăng ký xe, Phạt vi phạm, Điểm GPLX
        if any(k in q for k in ["xe", "biển số", "đăng ký xe", "phạt nguội", "nồng độ cồn", "gplx", "bằng lái", "trừ điểm gplx"]) or cat == "giao thông":
            return (
                f"{greeting}Về thủ tục **Đăng ký xe máy tại Công an xã & Luật Trật tự, ATGT đường bộ 2024**:\n\n"
                "📌 **1. Đăng ký xe máy phân cấp về Công an xã Đức Hợp:**\n"
                "- Công an xã Đức Hợp thực hiện đăng ký xe lần đầu và bấm biển số định danh cho người dân cư trú tại xã.\n"
                "- Hồ sơ: Căn cước/VNeID Mức 2, hóa đơn GTGT, chứng từ lệ phí trước bạ, mã hồ sơ kê khai trực tuyến Cổng DVC Bộ Công an.\n\n"
                "📌 **2. Biển số định danh & Quy định GPLX mới:**\n"
                "- Biển số định danh đi theo chủ xe suốt đời. Khi bán xe phải nộp lại biển số để cơ quan công an lưu giữ cấp lại cho xe mới trong 5 năm.\n"
                "- Hệ thống 12 điểm GPLX/năm; cấm tuyệt đối nồng độ cồn khi điều khiển phương tiện.\n"
                "- Nộp phạt nguội trực tuyến 100% qua Cổng DVC Quốc gia (`dichvucong.gov.vn`).\n\n"
                "📍 Địa điểm: Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Hotline: **02213.815.999**."
            )

        # 7. PCCC & Cứu nạn cứu hộ
        if any(k in q for k in ["pccc", "cháy", "chữa cháy", "bình bột", "gas", "thoát nạn"]) or cat == "phòng cháy chữa cháy":
            return (
                f"{greeting}Về hướng dẫn **An toàn Phòng cháy chữa cháy (PCCC) hộ gia đình & nhà ở kết hợp kinh doanh**:\n\n"
                "📌 **1. Trang bị bắt buộc:**\n"
                "- Mỗi hộ gia đình trang bị tối thiểu **01 bình chữa cháy xách tay** (bình bột MFZ4 hoặc bình CO2 MT3) tại nơi dễ thấy, dễ lấy.\n"
                "- Ban công có lồng sắt 'chuồng cọp' bắt buộc phải mở **cửa thoát nạn thứ 2** có chìa khóa để vị trí dễ lấy.\n\n"
                "📌 **2. Xử lý rò rỉ khí gas:** Tuyệt đối KHÔNG bật/tắt công tắc điện hay quẹt lửa. Khóa van bình gas ngay lập tức, mở toang cửa sổ thông gió và thoát ra ngoài an toàn.\n\n"
                "📞 Số báo cháy khẩn cấp: **114** | Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 8. Đất đai, Sổ đỏ, Ranh giới, Tranh chấp
        if any(k in q for k in ["sổ đỏ", "đất đai", "tranh chấp đất", "ranh giới", "lối đi chung", "lấn chiếm", "tách thửa", "thổ cư", "sang tên sổ đỏ"]) or cat == "đất đai":
            return (
                f"{greeting}🏛️ **QUY ĐỊNH PHÁP LUẬT VỀ ĐẤT ĐAI & TRANH CHẤP RANH GIỚI (LUẬT ĐẤT ĐAI 2024):**\n\n"
                "📌 **1. Bắt buộc hòa giải cơ sở tại xã (Điều 235 Luật Đất đai 2024):**\n"
                "- Tranh chấp đất đai (ranh giới, lối đi chung, mốc giới) bắt buộc phải nộp đơn đến **UBND xã Đức Hợp** để hòa giải trước khi khởi kiện tại Tòa án nhân dân.\n"
                "- Thời hạn hòa giải tại xã: Không quá 30 ngày kể từ ngày nhận đơn hợp lệ.\n\n"
                "📌 **2. Quyền về lối đi qua bất động sản liền kề (Điều 254 BLDS 2015):**\n"
                "- Chủ đất bị vây bọc có quyền yêu cầu mở lối đi công cộng hợp lý qua đất liền kề.\n"
                "- Tuyệt đối không tự ý đập phá rào chắn hay xô xát gây mất an ninh trật tự (tránh bị xử lý hình sự về tội Hủy hoại tài sản hoặc Gây rối ANTT).\n\n"
                "📞 Hotline hỗ trợ UBND / Công an xã Đức Hợp: **02213.815.999**."
            )

        # 9. Vay nợ, Hợp đồng, Quỵt nợ, Lãi suất
        if any(k in q for k in ["vay tiền", "cho vay", "đòi nợ", "quỵt nợ", "không trả tiền", "đặt cọc", "phạt cọc", "lãi suất", "vay nợ"]) or cat in ["pháp luật dân sự", "nhu cầu pháp lý ở nông thôn"]:
            return (
                f"{greeting}⚖️ **QUY ĐỊNH PHÁP LUẬT VỀ HỢP ĐỒNG VAY TÀI SẢN & XỬ LÝ QUỴT NỢ (BỘ LUẬT DÂN SỰ 2015):**\n\n"
                "📌 **1. Lãi suất vay hợp pháp (Điều 468 BLDS 2015):**\n"
                "- Lãi suất vay thỏa thuận **KHÔNG ĐƯỢC VƯỢT QUÁ 20%/NĂM** của khoản tiền vay.\n"
                "- Cho vay lãi gấp 5 lần mức trần (trên 100%/năm) thu lợi bất chính từ 30 triệu đồng trở lên sẽ bị xử lý hình sự về Tội cho vay lãi nặng theo Điều 201 BLHS.\n\n"
                "📌 **2. Biện pháp xử lý khi bên vay quỵt nợ:**\n"
                "- Khởi kiện dân sự tại Tòa án nhân dân kèm giấy vay nợ, sao kê chuyển tiền, tin nhắn làm chứng cứ.\n"
                "- Nếu bên vay có thủ đoạn gian dối bỏ trốn, tẩu tán tài sản: Làm đơn tố giác tội phạm gửi Công an xã Đức Hợp về Tội lừa đảo (Điều 174) hoặc Lạm dụng tín nhiệm chiếm đoạt tài sản (Điều 175 BLHS).\n"
                "- **Nghiêm cấm:** Tuyệt đối không thuê 'xã hội đen' đòi nợ, đe dọa, tạt sơn, xúc phạm con nợ vì sẽ phạm tội Cưỡng đoạt tài sản hoặc Làm nhục người khác.\n\n"
                "📞 Hotline hỗ trợ: **02213.815.999**."
            )

        # 10. Hôn nhân, Ly hôn, Nuôi con, Cấp dưỡng
        if any(k in q for k in ["ly hôn", "ly dị", "nuôi con", "cấp dưỡng", "chia tài sản", "kết hôn", "hôn nhân"]) or cat == "hôn nhân và gia đình":
            return (
                f"{greeting}⚖️ **HƯỚNG DẪN QUY ĐỊNH PHÁP LUẬT VỀ HÔN NHÂN & THỦ TỤC LY HÔN (LUẬT HNGĐ 2014):**\n\n"
                "📌 **1. Quyền yêu cầu giải quyết ly hôn:**\n"
                "- Thuận tình ly hôn nộp đơn tại TAND nơi vợ hoặc chồng cư trú; Đơn phương ly hôn nộp tại TAND nơi bị đơn cư trú.\n"
                "- *Lưu ý bảo vệ phụ nữ:* Chồng KHÔNG ĐƯỢC yêu cầu ly hôn khi vợ đang có thai, sinh con hoặc nuôi con dưới 12 tháng tuổi (khoản 3 Điều 51).\n\n"
                "📌 **2. Quyền trực tiếp nuôi con sau khi ly hôn (Điều 81 Luật HNGĐ):**\n"
                "- Con **dưới 36 tháng tuổi** giao cho mẹ trực tiếp nuôi dưỡng (trừ khi có thỏa thuận khác).\n"
                "- Con từ **đủ 07 tuổi trở lên** phải xem xét nguyện vọng của con. Người không trực tiếp nuôi có nghĩa vụ cấp dưỡng.\n\n"
                "📞 Cần tư vấn hỗ trợ gia đình, liên hệ Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 11. Lao động, Bảo hiểm xã hội, BHYT
        if any(k in q for k in ["bảo hiểm", "bhxh", "bhyt", "thất nghiệp", "hợp đồng lao động", "nghỉ việc", "trợ cấp thất nghiệp", "rút bhxh"]) or cat == "lao động và bảo hiểm xã hội":
            return (
                f"{greeting}💼 **QUY ĐỊNH PHÁP LUẬT VỀ LAO ĐỘNG & BẢO HIỂM XÃ HỘI (LUẬT BHXH & BLLĐ 2019):**\n\n"
                "📌 **1. Tra cứu và tích hợp thẻ BHYT trên VNeID:** Người dân có thể dùng hình ảnh thẻ BHYT trên ứng dụng VNeID Mức 2 thay thế thẻ vật lý khi đi khám chữa bệnh tại các cơ sở y tế.\n"
                "📌 **2. Điều kiện hưởng trợ cấp bảo hiểm thất nghiệp (BHTN):** Đóng BHTN từ đủ 12 tháng trở lên trong vòng 24 tháng trước khi chấm dứt HĐLĐ; nộp hồ sơ trong thời hạn 03 tháng kể từ ngày nghỉ việc tại Trung tâm Dịch vụ việc làm tỉnh Hưng Yên.\n"
                "📌 **3. Bảo hiểm xã hội một lần:** Người lao động tham gia BHXH bắt buộc sau 12 tháng nghỉ việc không tiếp tục đóng có quyền yêu cầu thanh toán BHXH một lần theo quy định.\n\n"
                "📞 Hướng dẫn dịch vụ công trực tuyến tại xã Đức Hợp: **02213.815.999**."
            )

        # 12. Trẻ em & Người cao tuổi (Chính sách an sinh & Bảo vệ quyền)
        if any(k in q for k in ["trẻ em", "người cao tuổi", "người già", "trợ cấp xã hội", "bảo vệ trẻ em", "bạo hành trẻ em", "chăm sóc người già"]) or cat in ["trẻ em", "người cao tuổi"]:
            return (
                f"{greeting}👨‍👩‍👧‍👦 **CHÍNH SÁCH BẢO VỆ TRẺ EM & CHĂM SÓC NGƯỜI CAO TUỔI (LUẬT TRẺ EM 2016 & LUẬT NGƯỜI CAO TUỔI):**\n\n"
                "📌 **1. Quyền và bảo vệ trẻ em:**\n"
                "- Nghiêm cấm mọi hành vi bạo lực, bóc lột sức lao động, xâm hại tình dục trẻ em.\n"
                "- Tổng đài Quốc gia Bảo vệ Trẻ em: **111** (hoạt động 24/7, miễn phí cước gọi).\n\n"
                "📌 **2. Chính sách trợ cấp người cao tuổi (Nghị định 20/2021/NĐ-CP):**\n"
                "- Người từ đủ 80 tuổi trở lên không có lương hưu, trợ cấp BHXH được hưởng trợ cấp xã hội hàng tháng và được cấp thẻ BHYT miễn phí.\n"
                "- Hồ sơ làm tại Bộ phận Một cửa UBND xã Đức Hợp (Thôn Nho Lâm).\n\n"
                "📞 Hotline hỗ trợ khẩn cấp: **02213.815.999**."
            )

        # 13. Khiếu nại, Tố cáo & Tiếp công dân
        if any(k in q for k in ["khiếu nại", "tố cáo", "tiếp công dân", "đơn thư", "phản ánh", "kiến nghị"]) or cat == "khiếu nại và tố cáo":
            return (
                f"{greeting}📜 **QUY ĐỊNH VỀ KHIẾU NẠI & TỐ CÁO (LUẬT KHIẾU NẠI 2011 & LUẬT TỐ CÁO 2018):**\n\n"
                "📌 **1. Thủ tục Khiếu nại hành chính:**\n"
                "- Thời hiệu khiếu nại là **90 ngày** kể từ ngày nhận được quyết định hành chính hoặc biết được hành vi hành chính.\n"
                "- Thẩm quyền giải quyết khiếu nại lần đầu đối với quyết định của cấp xã là **Chủ tịch UBND xã Đức Hợp**.\n\n"
                "📌 **2. Quyền và nghĩa vụ người Tố cáo:**\n"
                "- Công dân có quyền tố cáo hành vi vi phạm pháp luật tới Công an xã hoặc UBND xã Đức Hợp.\n"
                "- Pháp luật bảo vệ tuyệt đối bí mật thông tin của người tố cáo và xử lý nghiêm mọi hành vi trả thù, trù dập người tố cáo.\n\n"
                "📍 Nơi tiếp dân: Trụ sở UBND / Công an xã Đức Hợp (Thôn Nho Lâm). Hotline: **02213.815.999**."
            )

        # 14. Phòng chống ma túy, Tệ nạn xã hội, An ninh trật tự
        if any(k in q for k in ["ma túy", "tệ nạn", "cờ bạc", "số đề", "cai nghiện", "gái mại dâm", "gây rối trật tự", "đánh nhau"]) or cat in ["phòng chống ma túy và tệ nạn", "an ninh trật tự"]:
            return (
                f"{greeting}🛡️ **CÔNG TÁC ĐẢM BẢO AN NINH TRẬT TỰ & PHÒNG CHỐNG MA TÚY (LUẬT PHÒNG CHỐNG MA TÚY 2021):**\n\n"
                "📌 **1. Tố giác tội phạm ma túy và tệ nạn cờ bạc:**\n"
                "- Người dân phát hiện các điểm nghi vấn mua bán, tàng trữ, sử dụng trái phép chất ma túy hoặc tụ điểm đánh bạc, ghi số đề xin hãy báo ngay cho Công an xã Đức Hợp qua số điện thoại: **02213.815.999** (bảo đảm giữ bí mật thông tin người báo).\n\n"
                "📌 **2. Thủ tục cai nghiện ma túy tự nguyện:**\n"
                "- Người nghiện hoặc gia đình có thể đăng ký cai nghiện tự nguyện tại UBND cấp xã hoặc đăng ký vào cơ sở cai nghiện công lập để được Nhà nước hỗ trợ chính sách theo quy định.\n\n"
                "📌 **3. Xử phạt hành vi gây rối trật tự công cộng:** Bị xử phạt tiền từ 1 - 8 triệu đồng theo NĐ 144/2021/NĐ-CP hoặc bị xử lý hình sự theo Điều 318 BLHS.\n\n"
                "📞 Trực ban 24/24h Công an xã Đức Hợp: **02213.815.999**."
            )

        # 15. Pháp luật Hình sự, Trộm cắp, Cố ý gây thương tích
        if any(k in q for k in ["hình sự", "trộm cắp", "cướp", "thương tích", "đánh người", "vu khống", "làm nhục", "tố giác tội phạm"]) or cat == "pháp luật hình sự":
            return (
                f"{greeting}⚖️ **QUY ĐỊNH BỘ LUẬT HÌNH SỰ 2015 (SỬA ĐỔI, BỔ SUNG 2017):**\n\n"
                "📌 **1. Tội Cố ý gây thương tích (Điều 134 BLHS):** Hành vi gây thương tích cho người khác từ 11% trở lên hoặc dưới 11% nhưng dùng hung khí nguy hiểm, có tính chất côn đồ đều bị truy cứu trách nhiệm hình sự.\n"
                "📌 **2. Tội Trộm cắp tài sản (Điều 173 BLHS):** Trộm cắp tài sản có giá trị từ 2.000.000 đồng trở lên (hoặc dưới 2 triệu nhưng đã bị xử phạt hành chính) sẽ bị khởi tố hình sự.\n"
                "📌 **3. Thủ tục nộp Đơn tố giác tội phạm:** Người dân đến trực tiếp Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi Hotline **02213.815.999** để cán bộ lập Biên bản tiếp nhận nguồn tin về tội phạm và xử lý theo thẩm quyền.\n\n"
                "Cán bộ chiến sĩ Công an xã Đức Hợp kiên quyết đấu tranh bảo vệ cuộc sống bình yên của nhân dân!"
            )

        # 16. Thuế, Hóa đơn điện tử
        if any(k in q for k in ["thuế", "mã số thuế", "thuế môn bài", "hóa đơn", "thuế thu nhập cá nhân", "etax"]) or cat == "thuế cơ bản":
            return (
                f"{greeting}📊 **HƯỚNG DẪN QUY ĐỊNH VỀ THUẾ & MÃ SỐ THUẾ CÁ NHÂN (LUẬT QUẢN LÝ THUẾ):**\n\n"
                "📌 **1. Đồng bộ Mã số thuế cá nhân với Căn cước công dân:** Theo chỉ đạo của Chính phủ và Bộ Tài chính, mã số định danh cá nhân (số Căn cước) được sử dụng thay thế cho mã số thuế khi thực hiện các giao dịch thuế.\n"
                "📌 **2. Nộp thuế trực tuyến qua App eTax Mobile:** Người nộp thuế có thể cài ứng dụng eTax Mobile của Tổng cục Thuế để tra cứu nghĩa vụ thuế đất phi nông nghiệp, thuế TNCN và nộp thuế điện tử ngay trên điện thoại.\n"
                "📌 **3. Hộ kinh doanh cá thể tại xã:** Nộp thuế môn bài và thuế khoán theo quy định tại Đội thuế liên xã hoặc qua tài khoản điện tử.\n\n"
                "📞 Hỗ trợ TTHC tại xã Đức Hợp: **02213.815.999**."
            )

        # 17. An toàn số: SIM rác, OTP, Deepfake, Mã độc, Tài khoản ngân hàng
        if any(k in q for k in ["otp", "sim", "mã độc", "apk", "deepfake", "bảo vệ dữ liệu", "mật khẩu", "an toàn tài khoản"]) or cat in ["sim và mã otp", "mã độc và an toàn thiết bị", "deepfake", "an toàn tài khoản", "bảo vệ dữ liệu cá nhân", "ngân hàng và thanh toán số"]:
            return (
                f"{greeting}🛡️ **CẢNH BÁO BẢO VỆ DỮ LIỆU CÁ NHÂN & AN TOÀN TÀI KHOẢN SỐ (NGHỊ ĐỊNH 13/2023/NĐ-CP):**\n\n"
                "⚠️ **5 NGUYÊN TẮC BẢO MẬT SỐ BẮT BUỘC:**\n"
                "1️⃣ **Mã OTP là mật mã bảo vệ tài sản:** Tuyệt đối KHÔNG đọc mã OTP, mã xác thực Smart OTP cho bất kỳ ai (kể cả người tự xưng là nhân viên ngân hàng hay công an).\n"
                "2️⃣ **Cảnh giác cuộc gọi Deepfake:** Kẻ gian dùng AI giả mạo khuôn mặt và giọng nói người thân vay tiền gấp. Hãy cúp máy và gọi điện trực tiếp lại cho người đó bằng số điện thoại di động thông thường để kiểm chứng.\n"
                "3️⃣ **Không tải ứng dụng lạ qua file .apk:** Không bấm vào link lạ để tải app VNeID hoặc Dịch vụ công giả mạo vì chứa mã độc chiếm quyền điều khiển điện thoại và rút sạch tài khoản ngân hàng.\n"
                "4️⃣ **Khóa SIM khẩn cấp:** Khi bị mất SIM, gọi ngay tổng đài nhà mạng (Viettel: 18008098, Vinaphone: 18001091, Mobifone: 18001090) để khóa SIM ngăn chặn cướp mã OTP.\n\n"
                "📞 Báo cáo sự cố an ninh mạng tới Công an xã Đức Hợp: **02213.815.999**."
            )

        # 18. Mạng xã hội, Mua bán online, Lừa đảo & Giả mạo cơ quan nhà nước
        if any(k in q for k in ["mạng xã hội", "facebook", "zalo", "tiktok", "mua bán online", "mua hàng qua mạng", "tuyển dụng", "việc làm online", "lừa đảo", "giả mạo"]) or cat in ["mạng xã hội", "mua bán trực tuyến", "tuyển dụng và đầu tư giả", "lừa đảo trực tuyến", "giả mạo cơ quan nhà nước"]:
            return (
                f"{greeting}🌐 **HƯỚNG DẪN AN TOÀN KHI THAM GIA MẠNG XÃ HỘI & MUA BÁN TRỰC TUYẾN:**\n\n"
                "📌 **1. Trách nhiệm khi sử dụng mạng xã hội (Nghị định 15/2020/NĐ-CP):**\n"
                "- Nghiêm cấm chia sẻ thông tin bịa đặt, sai sự thật, xúc phạm danh dự nhân phẩm của tổ chức, cá nhân (mức phạt từ 10 - 20 triệu đồng theo Điều 101).\n"
                "- Không đăng tải hình ảnh cá nhân của người khác mà không có sự đồng ý của họ.\n\n"
                "📌 **2. Phòng ngừa bẫy 'Việc nhẹ lương cao' & Lừa đảo đơn hàng:**\n"
                "- Cảnh giác với các tin nhắn tuyển dụng chốt đơn sàn TMĐT Shopee, Lazada, TikTok với hoa hồng cao bất thường.\n"
                "- Mua hàng online nên chọn phương thức kiểm tra hàng trước khi thanh toán (đồng kiểm); không quét mã QR lạ người giao hàng gửi.\n\n"
                "📞 Hotline tiếp nhận tin báo: **02213.815.999**."
            )

        # 19. Dịch vụ công trực tuyến & TTHC chung
        if any(k in q for k in ["dịch vụ công", "nộp hồ sơ trực tuyến", "cổng dịch vụ công", "tthc", "dvc"]) or cat in ["thủ tục hành chính và dịch vụ công", "pháp luật hành chính"]:
            return (
                f"{greeting}🏛️ **HƯỚNG DẪN THỰC HIỆN DỊCH VỤ CÔNG TRỰC TUYẾN TẠI CÔNG AN XÃ ĐỨC HỢP:**\n\n"
                "📌 **1. Các TTHC thực hiện toàn trình qua mạng:**\n"
                "- Cấp đổi, cấp lại thẻ Căn cước khi bị mất hoặc hết hạn (trực tuyến trên VNeID hoặc Cổng DVC Bộ Công an).\n"
                "- Đăng ký thường trú, tạm trú, khai báo tạm vắng, thông báo lưu trú.\n"
                "- Kê khai hồ sơ đăng ký xe máy lần đầu.\n"
                "- Nộp phạt vi phạm trật tự an toàn giao thông.\n\n"
                "📌 **2. Địa chỉ truy cập chính thức:**\n"
                "- Cổng Dịch vụ công Bộ Công an: `dichvucong.bocongan.gov.vn`\n"
                "- Cổng Dịch vụ công Quốc gia: `dichvucong.gov.vn`\n\n"
                "📍 Bà con gặp khó khăn khi thao tác trên điện thoại, mời đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ hướng dẫn trực tiếp. Hotline: **02213.815.999**."
            )

        # Default Catch-all (Chỉ khi không thuộc bất kỳ nhóm nào ở trên)
        return (
            f"{greeting}Trợ lý số Công an xã Đức Hợp đã ghi nhận câu hỏi của Bác/Anh/Chị.\n\n"
            "Quý công dân có thể hỏi tôi chi tiết theo các nhóm nội dung nghiệp vụ trọng tâm sau:\n"
            "1. **Thủ tục hành chính & VNeID:** Đăng ký thường trú, tạm trú, cấp đổi/cấp lại thẻ Căn cước bị mất, kích hoạt VNeID Mức 2, đăng ký xe máy bấm biển số định danh.\n"
            "2. **Hộ tịch & DVC liên thông:** Đăng ký khai sinh, khai tử liên thông cấp thẻ BHYT trên VNeID theo Nghị định 63/2024.\n"
            "3. **Phòng chống tội phạm & Lừa đảo mạng:** Nhận diện 35 thủ đoạn lừa đảo giả danh Công an, bẫy Shopee/TikTok, cuộc gọi Deepfake, bẫy nợ chuyển nhầm tiền.\n"
            "4. **Phòng cháy chữa cháy & Cứu nạn:** Quy định bình chữa cháy gia đình, lối thoát nạn thứ hai, an toàn bình gas.\n"
            "5. **Pháp luật Dân sự & Đất đai:** Tranh chấp ranh giới đất, lối đi chung, hòa giải cơ sở tại xã, hợp đồng vay nợ, thừa kế và thủ tục ly hôn.\n\n"
            "🏛️ **Trụ sở tiếp dân:** Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n"
            "📞 **Đường dây nóng Trực ban phục vụ nhân dân 24/24h:** **02213.815.999** (hoặc Tổng đài khẩn cấp **113** / Báo cháy **114**)."
        )

    @staticmethod
    async def log_chat(
        db: AsyncSession,
        session_id: str,
        user_query: str,
        ai_response: str,
        sources: List[Dict[str, Any]]
    ) -> ChatLog:
        """Ghi nhận lịch sử hỏi đáp ẩn danh"""
        chat_log = ChatLog(
            session_id=session_id,
            user_query=user_query,
            ai_response=ai_response,
            sources_cited=sources
        )
        db.add(chat_log)
        await db.commit()
        await db.refresh(chat_log)
        return chat_log

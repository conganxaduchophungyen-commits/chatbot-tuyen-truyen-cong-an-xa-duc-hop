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

        # 0. ƯU TIÊN SỐ 1: BẠO LỰC GIA ĐÌNH & AN NINH TRẬT TỰ KHẨN CẤP
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
        
        # 1. Tìm trong bảng Thủ tục hành chính (Procedures) - Hỗ trợ cả trường hợp mất giấy tờ, cấp lại, làm mới
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

        # 2. Tìm trong bảng Cảnh báo lừa đảo & Tuyên truyền (Articles) - Chỉ khi hỏi về lừa đảo/tội phạm
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
        history: Optional[List[Dict[str, str]]] = None
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
                    "1. Luật Căn cước số 26/2023/QH15 (hiệu lực 01/07/2024) & Nghị định 69/2024/NĐ-CP: Thẻ Căn cước thay cho CCCD; cấp cho cả trẻ dưới 14 tuổi theo nhu cầu; độ tuổi đổi thẻ bắt buộc: 14, 25, 40, 60 tuổi; CMND 9 số/12 số đã hết hạn hoàn toàn sau 31/12/2024; VNeID Mức 2 có giá trị tương đương thẻ vật lý.\n"
                    "2. Luật Trật tự, ATGT đường bộ số 36/2024/QH15 & Nghị định 168/2024/NĐ-CP: Hệ thống 12 điểm GPLX/năm; phân hạng GPLX mới (A1 đến 125cm3/11kW, A trên 125cm3, B gộp B1-B2 cũ); cấm tuyệt đối nồng độ cồn; biển số định danh suốt đời theo Thông tư 24/2023/TT-BCA.\n"
                    "3. Nghị định 63/2024/NĐ-CP & 301/2026/NĐ-CP: 02 nhóm Dịch vụ công liên thông Khai sinh và Khai tử trên VNeID.\n"
                    "4. Quy tắc Chống ảo giác (INSUFFICIENT_EVIDENCE): Nếu công dân hỏi về điều luật không tồn tại (ví dụ Điều 999 Bộ luật Dân sự - BLDS 2015 chỉ có 689 điều), phải bác bỏ tiền đề sai và giải thích đúng văn bản pháp luật. Nếu câu hỏi thiếu dữ kiện (REQUIRES_CLARIFICATION), phải đặt câu hỏi làm rõ."
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

        # Fallback Engine (Luôn hoạt động 100% không lo rớt mạng hay thiếu API Key)
        return RAGService._generate_fallback_response(query, context)

    @staticmethod
    def _generate_fallback_response(query: str, context: str) -> str:
        """Tự động tổng hợp câu trả lời thông minh dựa trên ngữ cảnh và kiến thức sâu"""
        q = query.lower()
        greeting = "Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin giải đáp câu hỏi của Bác/Anh/Chị như sau:\n\n"

        # 0. Bạo lực gia đình & Cứu trợ khẩn cấp (Ưu tiên cao nhất)
        if any(k in q for k in ["bị chồng đánh", "chồng đánh", "vợ đánh", "đánh đập", "bạo lực gia đình", "bị đánh", "hành hung", "ngược đãi", "cấm tiếp xúc", "bạo hành", "đánh người"]):
            return (
                f"{greeting}🚨 **HƯỚNG DẪN XỬ LÝ KHẨN CẤP KHI BỊ BẠO LỰC GIA ĐÌNH / HÀNH HUNG:**\n\n"
                "Hành vi đánh đập, xâm phạm thân thể vợ/chồng là hành vi vi phạm pháp luật nghiêm trọng theo **Luật Phòng, chống bạo lực gia đình năm 2022** và **Nghị định 144/2021/NĐ-CP** (bị phạt tiền từ 5.000.000đ đến 20.000.000đ hoặc bị truy cứu trách nhiệm hình sự theo Điều 134, Điều 185 Bộ luật Hình sự).\n\n"
                "📌 **4 BƯỚC TỰ BẢO VỆ AN TOÀN NGAY LẬP TỨC:**\n"
                "1️⃣ **Ưu tiên an toàn tính mạng:** Nhanh chóng rời khỏi nơi nguy hiểm, chạy sang nhà hàng xóm, người thân để tạm lánh và kêu gọi trợ giúp.\n"
                "2️⃣ **Gọi điện báo ngay cho Công an xã Đức Hợp:**\n"
                "- Số điện thoại Trực ban Công an xã Đức Hợp (24/24h): **02213.815.999**\n"
                "- Đường dây nóng phản ứng nhanh: **113**\n"
                "- Tổng đài Quốc gia bảo vệ nạn nhân: **111**\n"
                "Cán bộ Công an xã sẽ có mặt kịp thời để khống chế hành vi bạo lực, lập biên bản và bảo vệ an toàn cho Bác/Anh/Chị.\n"
                "3️⃣ **Khám thương tích & Lưu giữ bằng chứng:** Đến ngay Trạm y tế xã Đức Hợp hoặc cơ sở y tế gần nhất để điều trị và xin Giấy xác nhận thương tích; chụp lại vết thương, hiện trường làm bằng chứng.\n"
                "4️⃣ **Đề nghị áp dụng biện pháp CẤM TIẾP XÚC:** Làm đơn đề nghị Chủ tịch UBND xã Đức Hợp ra quyết định cấm người có hành vi bạo lực tiếp xúc với nạn nhân.\n\n"
                "Cán bộ chiến sĩ Công an xã Đức Hợp luôn đồng hành và bảo vệ quyền lợi hợp pháp của công dân!"
            )

        # 0.1. Mất giấy tờ tùy thân, rơi ví, làm lại giấy tờ
        if any(k in q for k in ["mất giấy tờ", "mất ví", "rơi ví", "rơi giấy tờ", "thất lạc giấy tờ", "mất hết giấy tờ", "làm lại giấy tờ", "cấp lại giấy tờ", "mất cccd", "mất bằng lái", "mất đăng ký xe"]):
            return (
                f"{greeting}📋 **HƯỚNG DẪN XỬ LÝ KHI BỊ MẤT GIẤY TỜ TÙY THÂN — CÔNG AN XÃ ĐỨC HỢP:**\n\n"
                "Kính thưa Bác/Anh/Chị, khi không may bị mất hoặc rơi ví chứa giấy tờ tùy thân, xin Quý công dân hãy an tâm và thực hiện theo hướng dẫn sau:\n\n"
                "🔒 **1. BẢO VỆ TÀI KHOẢN VÀ DỮ LIỆU CÁ NHÂN:**\n"
                "- Mở App ngân hàng bấm 'Khóa thẻ tạm thời' hoặc gọi tổng đài ngân hàng phong tỏa tài khoản nếu có kèm thẻ ngân hàng trong ví.\n"
                "- **An tâm về Thẻ Căn cước gắn chip:** Dữ liệu cá nhân và sinh trắc học đã được mã hóa bảo mật cấp cao của Bộ Công an, người nhặt được KHÔNG THỂ trích xuất thông tin để mở thẻ ngân hàng hay vay tín dụng đen.\n\n"
                "💳 **2. QUY TRÌNH CẤP LẠI GIẤY TỜ TRỰC TUYẾN (100% ONLINE):**\n"
                "1️⃣ **Cấp lại Thẻ Căn cước bị mất (Luật Căn cước 2023):**\n"
                "- Nộp hồ sơ hoàn toàn trực tuyến trên ứng dụng **VNeID** hoặc Cổng Dịch vụ công Bộ Công an (\`dichvucong.bocongan.gov.vn\`).\n"
                "- **Không cần xin đơn báo mất hay xác nhận của Công an xã**.\n"
                "- **Không cần chụp lại ảnh, không cần lấy lại vân tay** (hệ thống tự động sử dụng thông tin và ảnh sinh trắc học đã lưu trên CSDLQG về dân cư).\n"
                "- Thẻ Căn cước mới được giao về tận nhà qua bưu điện tại xã Đức Hợp.\n\n"
                "2️⃣ **Cấp lại Giấy phép lái xe (GPLX) bị mất:** Thực hiện trực tuyến toàn trình trên Cổng DVC Quốc gia (\`dichvucong.gov.vn\`), hệ thống tự động đối soát CSDLQG về dân cư.\n"
                "3️⃣ **Cấp lại Đăng ký xe máy bị mất:** Kê khai trực tuyến trên Cổng DVC Bộ Công an hoặc đến trực tiếp Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để được cấp lại biển số định danh.\n"
                "4️⃣ **Cấp bản sao trích lục Giấy khai sinh:** Nộp trực tuyến trên Cổng DVC Bộ Tư pháp hoặc nộp tại Bộ phận Một cửa UBND xã Đức Hợp.\n\n"
                "📞 Mọi thắc mắc cần hỗ trợ trực tiếp, Bác/Anh/Chị gọi ngay Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 1. Trụ sở & Liên hệ (Chỉ kích hoạt khi hỏi cụ thể về địa chỉ, hotline, giờ trực ban của đơn vị)
        is_contact_query = (
            any(k in q for k in ["địa chỉ công an", "trụ sở công an", "số điện thoại công an", "hotline công an", "trực ban công an", "công an xã ở đâu", "công an ở đâu", "trụ sở ở đâu", "công an xã đức hợp ở đâu"])
            or (
                any(k in q for k in ["địa chỉ", "trụ sở", "hotline", "số điện thoại", "trực ban"])
                and not any(k in q for k in ["căn cước", "cccd", "thường trú", "tạm trú", "khai sinh", "xe", "đất", "vay", "nợ", "lừa", "bị", "ly hôn", "cháy", "tai nạn"])
            )
        )
        if is_contact_query:
            return (
                f"{greeting}🏛️ **Thông tin liên hệ Công an xã Đức Hợp, tỉnh Hưng Yên:**\n\n"
                "- **Trụ sở đơn vị:** Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n"
                "- **Số điện thoại Trực ban (tiếp nhận tin báo 24/24h):** **02213.815.999**.\n"
                "- **Thời gian tiếp nhận giải quyết thủ tục hành chính:** Giờ hành chính các ngày trong tuần (từ Thứ Hai đến Thứ Sáu; Thứ Bảy trực giải quyết theo quy định).\n\n"
                "Cán bộ chiến sĩ Công an xã Đức Hợp luôn sẵn sàng tiếp đón và phục vụ nhân dân!"
            )

        # 2. Xử lý khi bị lừa đảo
        if any(k in q for k in ["bị lừa", "lấy lại tiền", "mất tiền", "chuyển tiền", "hack", "khóa thẻ"]):
            return (
                f"{greeting}🚨 **4 BƯỚC KHẨN CẤP KHI PHÁT HIỆN BỊ LỪA ĐẢO QUA MẠNG:**\n\n"
                "1️⃣ **Khóa tài khoản ngân hàng ngay lập tức:** Vào App ngân hàng bấm 'Khóa thẻ' hoặc gọi tổng đài ngân hàng yêu cầu phong tỏa tài khoản để ngăn kẻ gian tẩu tán tiền.\n"
                "2️⃣ **Thu thập bằng chứng:** Chụp toàn bộ tin nhắn, sao kê lịch sử chuyển tiền có dấu mộc ngân hàng, số điện thoại, tài khoản của kẻ lừa đảo.\n"
                "3️⃣ **Đến trình báo ngay tại Công an xã Đức Hợp:** Địa chỉ: Thôn Nho Lâm, xã Đức Hợp. Hotline Trực ban: **02213.815.999** để nộp đơn tố giác tội phạm.\n"
                "4️⃣ **Tuyệt đối KHÔNG tin vào dịch vụ lấy lại tiền bị lừa trên mạng:** Đó 100% là bẫy lừa đảo lần thứ hai!"
            )

        # 3. Cư trú & Thường trú
        if any(k in q for k in ["thường trú", "nhập khẩu", "cư trú", "tạm trú", "tạm vắng", "ct01"]):
            return (
                f"{greeting}Về thủ tục **Đăng ký thường trú / Tạm trú tại xã Đức Hợp**:\n\n"
                "📌 **1. Thành phần hồ sơ cần chuẩn bị:**\n"
                "- Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).\n"
                "- Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán nhà đất, hoặc Hợp đồng thuê nhà trọ hợp pháp).\n"
                "- Ý kiến đồng ý của chủ hộ/chủ sở hữu chỗ ở nếu nhập vào hộ khác.\n"
                "- Giấy tờ chứng minh quan hệ nhân thân (nếu chưa có trên CSDLQG về dân cư).\n\n"
                "📌 **2. Nơi nộp hồ sơ & Thời hạn giải quyết:**\n"
                "- Nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (Thôn Nho Lâm) hoặc nộp online qua Cổng DVC Bộ Công an.\n"
                "- Thời hạn giải quyết: **07 ngày làm việc** (thường trú) hoặc **03 ngày làm việc** (tạm trú).\n"
                "- Lệ phí: 20.000 VNĐ (nộp trực tiếp) hoặc 10.000 VNĐ (nộp online).\n\n"
                "📞 Cần tư vấn thêm, mời bà con gọi Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 4. Căn cước 2023 & VNeID
        elif any(k in q for k in ["căn cước", "cccd", "mống mắt", "vneid", "định danh"]):
            return (
                f"{greeting}Về quy định **Cấp thẻ Căn cước mới theo Luật Căn cước 2023**:\n\n"
                "📌 **1. Độ tuổi và hình thức cấp:**\n"
                "- Trẻ em từ 0 đến dưới 6 tuổi: Cấp thẻ Căn cước theo **nhu cầu**, phụ huynh kê khai online qua Cổng DVC / VNeID (không thu nhận vân tay, mống mắt).\n"
                "- Trẻ em từ 6 đến dưới 14 tuổi: Cấp theo nhu cầu, thu nhận ảnh khuôn mặt, vân tay và **mống mắt**.\n"
                "- Người từ đủ 14 tuổi trở lên: **Bắt buộc** cấp thẻ Căn cước.\n\n"
                "📌 **2. Giá trị thẻ CCCD cũ & Kích hoạt VNeID Mức 2:**\n"
                "- Thẻ CCCD gắn chip đã cấp trước 01/7/2024 vẫn có giá trị sử dụng đến ngày hết hạn in trên thẻ.\n"
                "- Kích hoạt định danh điện tử VNeID Mức 2: Trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ hỗ trợ hoàn toàn miễn phí.\n\n"
                "📞 Hotline hỗ trợ: **02213.815.999**."
            )

        # 5. PCCC
        elif any(k in q for k in ["pccc", "cháy", "chữa cháy", "bình bột", "gas", "thoát nạn"]):
            return (
                f"{greeting}Về hướng dẫn **An toàn Phòng cháy chữa cháy (PCCC) hộ gia đình & nhà ở kết hợp kinh doanh**:\n\n"
                "📌 **1. Trang bị bắt buộc:**\n"
                "- Mỗi gia đình trang bị tối thiểu **01 bình chữa cháy** xách tay (bình bột ABC MFZ4 hoặc bình khí CO2 MT3) tại nơi dễ thấy, dễ lấy.\n"
                "- Ban công có lồng sắt 'chuồng cọp' bắt buộc phải mở **cửa thoát nạn thứ 2**.\n\n"
                "📌 **2. Xử lý sự cố rò rỉ gas:**\n"
                "- Tuyệt đối KHÔNG bật tắt công tắc điện, quạt hay dùng diêm quẹt.\n"
                "- Khóa chặt van bình gas, mở toang các cửa sổ để khí thông thoáng, báo cho mọi người di tản.\n\n"
                "📞 Số báo cháy: **114** | Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 6. Giao thông & Đăng ký xe
        elif any(k in q for k in ["xe", "biển số", "đăng ký xe", "phạt nguội", "nồng độ cồn", "giao thông"]):
            return (
                f"{greeting}Về thủ tục **Đăng ký xe mô tô, xe máy tại Công an xã Đức Hợp & Xử phạt giao thông**:\n\n"
                "📌 **1. Đăng ký xe máy phân cấp về xã (Thông tư 24/2023):**\n"
                "- Công an xã Đức Hợp thực hiện đăng ký xe lần đầu và bấm biển số định danh cho bà con cư trú trên địa bàn.\n"
                "- Hồ sơ: Căn cước/VNeID mức 2, hóa đơn giá trị gia tăng, chứng từ lệ phí trước bạ, mã hồ sơ kê khai trên Cổng DVC Bộ Công an.\n\n"
                "📌 **2. Quy định biển số định danh & Phạt vi phạm:**\n"
                "- Biển số định danh đi theo chủ xe suốt đời; khi bán xe phải nộp lại biển số để Công an giữ trong 5 năm cấp lại cho xe mới.\n"
                "- Nộp phạt nguội trực tuyến 100% qua Cổng DVC Quốc gia (dichvucong.gov.vn).\n\n"
                "📍 Địa điểm: Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Hotline: **02213.815.999**."
            )

        # 7. Lừa đảo & Cảnh báo tội phạm
        elif any(k in q for k in ["lừa đảo", "mạo danh", "app", "shopee", "tiktok", "đơn hàng", "tiền ảo", "deepfake", "lệnh bắt"]):
            return (
                f"{greeting}Công an xã Đức Hợp cảnh báo về **22 phương thức, thủ đoạn lừa đảo phổ biến trên không gian mạng**:\n\n"
                "⚠️ **Thủ đoạn nguy hiểm thường gặp:**\n"
                "- Giả danh Công an gọi điện cài app VNeID/DVC giả mạo (.apk) chứa mã độc rút sạch tiền ngân hàng.\n"
                "- Giả danh Công an, Viện kiểm sát gọi điện dọa lệnh bắt ma túy, ép chuyển tiền vào tài khoản an toàn.\n"
                "- Tuyển CTV Shopee, TikTok hoa hồng 20% dụ nạp tiền làm nhiệm vụ rồi chiếm đoạt.\n"
                "- Gọi video Deepfake mượn tiền khẩn cấp viện lý do tai nạn cấp cứu.\n\n"
                "🚨 **KHUYẾN CÁO VÀNG '4 KHÔNG - 2 PHẢI':**\n"
                "❌ KHÔNG bấm link lạ, không tải app .apk.\n"
                "❌ KHÔNG cung cấp mật khẩu, mã OTP cho bất kỳ ai.\n"
                "❌ KHÔNG chuyển tiền cho người lạ chưa xác minh.\n"
                "❌ KHÔNG tin việc nhẹ lương cao, đầu tư tiền ảo sinh lời khủng.\n"
                "✅ PHẢI kiểm chứng trực tiếp với người thân và cơ quan công quyền.\n"
                "✅ PHẢI báo ngay cho Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )

        # 8. Đất đai, Sổ đỏ, Ranh giới, Tranh chấp
        elif any(k in q for k in ["sổ đỏ", "đất đai", "tranh chấp đất", "ranh giới", "lối đi chung", "lấn chiếm", "tách thửa", "thổ cư", "sang tên sổ đỏ"]):
            return (
                f"{greeting}🏛️ **QUY ĐỊNH PHÁP LUẬT VỀ ĐẤT ĐAI & TRANH CHẤP RANH GIỚI (LUẬT ĐẤT ĐAI 2024):**\n\n"
                "📌 **1. Bắt buộc hòa giải tranh chấp đất đai tại xã (Điều 235 Luật Đất đai 2024):**\n"
                "- Tranh chấp đất đai (ranh giới, lối đi chung, mốc giới) mà các bên không tự hòa giải được thì **BẮT BUỘC** phải gửi đơn đến UBND cấp xã nơi có đất (UBND xã Đức Hợp) để hòa giải cơ sở trước khi khởi kiện ra Tòa án.\n"
                "- Thời hạn hòa giải tại UBND xã: Không quá 30 ngày kể từ ngày nhận được đơn hợp lệ.\n\n"
                "📌 **2. Quyền về lối đi qua bất động sản liền kề (Điều 254 Bộ luật Dân sự 2015):**\n"
                "- Chủ sở hữu nhà đất bị vây bọc không có lối đi ra đường công cộng có quyền yêu cầu mở một lối đi hợp lý qua đất liền kề.\n"
                "- Các bên cần thương lượng hòa giải tại thôn xóm, tuyệt đối không tự ý đập phá rào chắn hay xô xát gây mất ANTT.\n\n"
                "📌 **3. Đăng ký biến động, sang tên Sổ đỏ:** Nộp hồ sơ tại Chi nhánh Văn phòng Đăng ký đất đai hoặc Bộ phận Một cửa trong thời hạn 30 ngày kể từ ngày công chứng chuyển nhượng.\n\n"
                "📞 Cần hỗ trợ hòa giải tại cơ sở, mời bà con liên hệ UBND / Công an xã Đức Hợp: **02213.815.999**."
            )

        # 9. Vay nợ, Hợp đồng, Đặt cọc, Đòi nợ
        elif any(k in q for k in ["vay tiền", "cho vay", "đòi nợ", "quỵt nợ", "không trả tiền", "đặt cọc", "phạt cọc", "lãi suất", "vay nợ"]):
            return (
                f"{greeting}⚖️ **QUY ĐỊNH PHÁP LUẬT VỀ HỢP ĐỒNG VAY TÀI SẢN & XỬ LÝ QUỴT NỢ (BỘ LUẬT DÂN SỰ 2015):**\n\n"
                "📌 **1. Lãi suất vay hợp pháp (Điều 468 BLDS 2015):**\n"
                "- Lãi suất vay do các bên thỏa thuận nhưng **KHÔNG ĐƯỢC VƯỢT QUÁ 20%/NĂM** của khoản tiền vay.\n"
                "- Hành vi cho vay nặng lãi gấp 5 lần mức trần (trên 100%/năm) thu lợi bất chính từ 30 triệu trở lên sẽ bị xử lý hình sự về Tội cho vay lãi nặng theo Điều 201 BLHS.\n\n"
                "📌 **2. Biện pháp xử lý khi bên vay không chịu trả nợ:**\n"
                "- **Trường hợp tranh chấp dân sự:** Các bên tự thương lượng hoặc đề nghị Tổ hòa giải thôn / UBND xã Đức Hợp hòa giải; nếu không thành thì nộp Đơn khởi kiện tại Tòa án nhân dân nơi bị đơn cư trú kèm theo giấy vay nợ, sao kê chuyển khoản, tin nhắn làm chứng cứ.\n"
                "- **Trường hợp có dấu hiệu hình sự:** Nếu bên vay dùng thủ đoạn gian dối vay tiền rồi bỏ trốn, tẩu tán tài sản hoặc sử dụng tiền vào mục đích bất hợp pháp không trả thì có dấu hiệu phạm Tội lạm dụng tín nhiệm chiếm đoạt tài sản (Điều 175 BLHS) hoặc Tội lừa đảo (Điều 174 BLHS). Bác/Anh/Chị đến ngay Công an xã Đức Hợp (Thôn Nho Lâm) nộp đơn tố giác tội phạm.\n\n"
                "⚠️ **Cảnh báo an toàn:** Tuyệt đối không thuê các đối tượng 'xã hội đen' đòi nợ thuê, đe dọa, tạt sơn, xúc phạm danh dự con nợ vì hành vi này sẽ bị xử lý hình sự về tội Cưỡng đoạt tài sản hoặc Làm nhục người khác!\n\n"
                "📞 Hotline hỗ trợ Công an xã Đức Hợp: **02213.815.999**."
            )

        # 10. Hôn nhân, Ly hôn, Nuôi con, Cấp dưỡng
        elif any(k in q for k in ["ly hôn", "ly dị", "nuôi con", "cấp dưỡng", "chia tài sản", "kết hôn", "hôn nhân"]):
            return (
                f"{greeting}⚖️ **HƯỚNG DẪN QUY ĐỊNH PHÁP LUẬT VỀ HÔN NHÂN & THỦ TỤC LY HÔN (LUẬT HNGĐ 2014):**\n\n"
                "📌 **1. Quyền yêu cầu giải quyết ly hôn (Điều 51, 55, 56 Luật HNGĐ 2014):**\n"
                "- **Thuận tình ly hôn:** Hai vợ chồng cùng ký tên vào đơn, nộp tại Tòa án nhân dân nơi cư trú của vợ hoặc chồng.\n"
                "- **Đơn phương ly hôn:** Nộp đơn tại Tòa án nhân dân nơi bị đơn cư trú.\n"
                "- *Lưu ý bảo vệ phụ nữ:* Chồng KHÔNG CÓ QUYỀN yêu cầu ly hôn khi vợ đang có thai, sinh con hoặc đang nuôi con dưới 12 tháng tuổi (khoản 3 Điều 51).\n\n"
                "📌 **2. Quyền trực tiếp nuôi con sau khi ly hôn (Điều 81 Luật HNGĐ 2014):**\n"
                "- Con **dưới 36 tháng tuổi** được giao cho mẹ trực tiếp nuôi dưỡng (trừ khi người mẹ không đủ điều kiện hoặc có thỏa thuận khác vì lợi ích của con).\n"
                "- Con từ **đủ 07 tuổi trở lên** phải xem xét nguyện vọng của con.\n"
                "- Người không trực tiếp nuôi con có nghĩa vụ cấp dưỡng nuôi con theo quy định.\n\n"
                "📞 Cần hỗ trợ hoặc trình báo bạo lực gia đình, gọi ngay Trực ban Công an xã Đức Hợp: **02213.815.999**."
            )
        else:
            return (
                f"{greeting}Trợ lý số Công an xã Đức Hợp đã ghi nhận câu hỏi của Bác/Anh/Chị.\n\n"
                "Quý công dân có thể hỏi tôi chi tiết theo các nhóm nội dung nghiệp vụ trọng tâm sau:\n"
                "1. **Thủ tục hành chính & VNeID:** Đăng ký thường trú, tạm trú, cấp đổi/cấp lại thẻ Căn cước bị mất, kích hoạt VNeID Mức 2, đăng ký xe máy bấm biển số định danh.\n"
                "2. **Xử lý khi bị mất giấy tờ:** Hướng dẫn các bước cấp lại Căn cước, Giấy phép lái xe, Đăng ký xe, Trích lục khai sinh trực tuyến.\n"
                "3. **Phòng chống tội phạm & Lừa đảo mạng:** Nhận diện 22 thủ đoạn giả danh Công an, bẫy việc làm Shopee/TikTok, cuộc gọi Deepfake, bẫy nợ chuyển nhầm tiền.\n"
                "4. **Phòng cháy chữa cháy & Cứu nạn:** Quy định trang bị bình chữa cháy hộ gia đình, mở lối thoát nạn thứ hai, an toàn sạc pin xe điện, xử lý rò rỉ khí gas.\n"
                "5. **Pháp luật Dân sự & Đất đai:** Tranh chấp ranh giới đất, lối đi chung, hòa giải cơ sở tại xã, hợp đồng vay tài sản, thừa kế di chúc, thủ tục ly hôn và quyền nuôi con.\n\n"
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

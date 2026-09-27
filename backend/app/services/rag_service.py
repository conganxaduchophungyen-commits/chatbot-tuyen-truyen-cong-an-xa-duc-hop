import re
from typing import List, Dict, Any, Optional, Tuple
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, or_
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

        # Tách từ khóa tìm kiếm
        keywords = [w.strip() for w in re.split(r'[,.\s]+', query.lower()) if len(w.strip()) > 1]
        
        # 1. Tìm trong bảng Thủ tục hành chính (Procedures)
        stmt_proc = select(Procedure).where(Procedure.is_active == True)
        if keywords:
            conditions = []
            for kw in keywords[:4]:
                pattern = f"%{kw}%"
                conditions.append(Procedure.title.ilike(pattern))
                conditions.append(Procedure.target_audience.ilike(pattern))
            stmt_proc = stmt_proc.where(or_(*conditions))
            
        res_proc = await db.execute(stmt_proc.limit(3))
        matched_procedures = list(res_proc.scalars().all())

        # Nếu không khớp từ khóa chi tiết, lấy các thủ tục phổ biến nhất
        if not matched_procedures:
            res_default = await db.execute(select(Procedure).where(Procedure.is_active == True).limit(2))
            matched_procedures = list(res_default.scalars().all())

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
        stmt_art = select(Article).where(Article.is_published == True)
        if any(k in query.lower() for k in ["lừa đảo", "giả danh", "tiền", "mạng", "cuộc gọi", "vneid"]):
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
                    "Bạn là Trợ lý số Pháp luật & Thủ tục hành chính của Công an xã Đức Hợp, tỉnh Hưng Yên.\n"
                    "Trụ sở đơn vị: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n"
                    "Số điện thoại Trực ban tiếp nhận thông tin 24/24h: 02213.815.999.\n"
                    "Phong cách: Lịch sự, ân cần, chuẩn mực, vì nhân dân phục vụ, xưng hô 'Tôi' và 'Bác/Cô/Chú/Anh/Chị/Quý công dân'.\n"
                    "Quy tắc nghiệp vụ:\n"
                    "1. Trả lời chính xác, đầy đủ dựa trên [TÀI LIỆU THAM KHẢO] và hệ thống quy định pháp luật hiện hành.\n"
                    "2. Trình bày mạch lạc, dễ hiểu: Hồ sơ giấy tờ cần chuẩn bị, nơi nộp, các bước thực hiện, lệ phí và thời hạn giải quyết.\n"
                    "3. Về phòng chống tội phạm & 22 thủ đoạn lừa đảo: Nêu rõ thủ đoạn tinh vi, dấu hiệu nhận biết, 4 bước xử lý khẩn cấp khi bị lừa và khuyến cáo liên hệ Công an xã Đức Hợp: 02213.815.999.\n"
                    "4. Tuyệt đối không bịa đặt quy định pháp luật."
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

        # 1. Trụ sở & Liên hệ
        if any(k in q for k in ["địa chỉ", "trụ sở", "hotline", "số điện thoại", "trực ban", "ở đâu"]):
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
        else:
            return (
                f"{greeting}Dựa trên cơ sở dữ liệu của đơn vị, Quý công dân có thể tra cứu nhanh các thủ tục hành chính hoặc nhận diện 22 thủ đoạn lừa đảo mạng trên hệ thống:\n\n"
                f"{context[:800]}...\n\n"
                "📞 Mọi vấn đề cần giải đáp trực tiếp, kính mời Quý công dân liên hệ Trực ban Công an xã Đức Hợp qua số điện thoại: **02213.815.999** (Trụ sở tại Thôn Nho Lâm) để được hỗ trợ chu đáo."
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

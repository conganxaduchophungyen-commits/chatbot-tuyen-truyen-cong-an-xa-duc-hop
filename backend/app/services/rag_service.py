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
    "hack", "chiếm đoạt", "ignore previous instructions", "jailbreak"
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

        # 2. Kiểm tra ý định vi phạm pháp luật / lách luật
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
                    "Bạn là Trợ lý số Pháp luật & Thủ tục hành chính của Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên.\n"
                    "Phong cách: Lịch sự, ân cần, xưng hô 'Tôi' và 'Bác/Cô/Chú/Anh/Chị/Công dân'.\n"
                    "Quy tắc tối thượng:\n"
                    "1. Chỉ trả lời dựa trên tài liệu quy định và thủ tục được cung cấp trong [TÀI LIỆU THAM KHẢO].\n"
                    "2. Nếu tài liệu có thông tin, hãy trình bày rõ ràng: Giấy tờ cần chuẩn bị, nơi nộp, các bước thực hiện, lệ phí và thời hạn.\n"
                    "3. Nếu tài liệu không đề cập hoặc người dân hỏi vấn đề ngoài thẩm quyền xã, hãy lịch sự thông báo và hướng dẫn liên hệ Trực ban Công an xã Đức Hợp qua số điện thoại 02213.811.xxx để được hỗ trợ trực tiếp.\n"
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
        """Tự động tổng hợp câu trả lời thông minh dựa trên ngữ cảnh đã trích xuất"""
        greeting = "Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin giải đáp câu hỏi của Bác/Anh/Chị như sau:\n\n"
        
        if "thường trú" in query.lower() or "nhập khẩu" in query.lower() or "cư trú" in query.lower():
            return (
                f"{greeting}Về thủ tục **Đăng ký thường trú tại xã Đức Hợp**:\n\n"
                "📌 **1. Thành phần hồ sơ cần chuẩn bị:**\n"
                "- Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).\n"
                "- Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng chuyển nhượng quyền sử dụng đất, v.v.).\n"
                "- Ý kiến đồng ý của chủ hộ/chủ sở hữu chỗ ở nếu nhập hộ vào người khác.\n\n"
                "📌 **2. Nơi nộp hồ sơ & Trình tự thực hiện:**\n"
                "- Nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (giờ hành chính).\n"
                "- Hoặc nộp trực tuyến qua Cổng Dịch vụ công Bộ Công an để tiết kiệm thời gian.\n\n"
                "📌 **3. Thời hạn giải quyết & Lệ phí:**\n"
                "- Thời hạn giải quyết: **07 ngày làm việc** kể từ khi nhận đủ hồ sơ hợp lệ.\n"
                "- Lệ phí: 20.000 VNĐ (nộp trực tiếp) hoặc 10.000 VNĐ (khi nộp trực tuyến qua Cổng DVC).\n\n"
                "📞 Nếu cần hỗ trợ thêm hoặc nhận biểu mẫu CT01 điền sẵn, kính mời Quý công dân đến Trụ sở Công an xã Đức Hợp hoặc gọi số Trực ban 02213.811.xxx."
            )
        elif "xe" in query.lower() or "biển số" in query.lower() or "đăng ký xe" in query.lower():
            return (
                f"{greeting}Về thủ tục **Đăng ký, cấp biển số xe mô tô, xe máy tại Công an xã Đức Hợp**:\n\n"
                "📌 **1. Giấy tờ cần mang theo:**\n"
                "- Căn cước công dân hoặc tài khoản định danh điện tử VNeID Mức 2 của chủ xe.\n"
                "- Hóa đơn giá trị gia tăng (chứng từ nguồn gốc xe).\n"
                "- Biên lai hoặc mã nộp lệ phí trước bạ điện tử.\n\n"
                "📌 **2. Các bước thực hiện:**\n"
                "- Bước 1: Kê khai thông tin đăng ký xe online trên Cổng DVC Bộ Công an để lấy mã hồ sơ.\n"
                "- Bước 2: Mang xe mô tô cùng toàn bộ hồ sơ giấy tờ gốc đến Trụ sở Công an xã Đức Hợp.\n"
                "- Bước 3: Cán bộ Công an xã kiểm tra thực tế xe, chà số khung số máy và hướng dẫn bấm biển số.\n"
                "- Bước 4: Nhận biển số xe ngay trong ngày và nhận giấy hẹn trả Chứng nhận đăng ký xe (trong vòng 02 ngày làm việc)."
            )
        elif "lừa đảo" in query.lower() or "mạo danh" in query.lower() or "app" in query.lower():
            return (
                f"{greeting}Công an xã Đức Hợp xin đặc biệt lưu ý Quý công dân về thủ đoạn lừa đảo:\n\n"
                "⚠️ **Cảnh báo thủ đoạn mạo danh Công an:**\n"
                "- Đối tượng gọi điện tự xưng cán bộ Công an thông báo hồ sơ định danh VNeID bị lỗi, yêu cầu cài App qua link lạ (file .apk) hoặc kết bạn Zalo.\n"
                "- **KHẲNG ĐỊNH CỦA CÔNG AN XÃ ĐỨC HỢP:** Lực lượng Công an KHÔNG BAO GIỜ gọi điện yêu cầu cài phần mềm qua link gửi ngoài CH Play/App Store và KHÔNG BAO GIỜ yêu cầu chuyển tiền hay cung cấp mã OTP ngân hàng!\n\n"
                "🚨 Khi nhận cuộc gọi nghi vấn, bà con hãy tắt máy ngay và liên hệ Trực ban Công an xã Đức Hợp qua số 02213.811.xxx để được bảo vệ kịp thời."
            )
        else:
            return (
                f"{greeting}Dựa trên cơ sở dữ liệu thủ tục hành chính của đơn vị, Quý công dân có thể tra cứu chi tiết tại danh mục thủ tục hoặc liên hệ trực tiếp Công an xã Đức Hợp:\n\n"
                f"{context[:800]}...\n\n"
                "📞 Mọi thắc mắc cụ thể, kính mời Quý công dân liên hệ Trực ban Công an xã Đức Hợp (02213.811.xxx) để được cán bộ trực tiếp hướng dẫn chu đáo."
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

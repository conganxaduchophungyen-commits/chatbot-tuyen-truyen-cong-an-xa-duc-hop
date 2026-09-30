from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from app.core.database import get_db
from app.schemas import ChatQueryRequest, ChatQueryResponse, ChatFeedbackRequest, ApiResponse
from app.services.rag_service import RAGService
from app.services.vector_rag import answer_with_rag, is_index_ready
from app.models import ChatLog

router = APIRouter(prefix="/chat", tags=["Trợ lý AI Thông minh"])

@router.post("/query", response_model=ChatQueryResponse)
async def query_ai(request: ChatQueryRequest, db: AsyncSession = Depends(get_db)):
    """Gửi câu hỏi tới Trợ lý số Pháp luật & TTHC Công an xã Đức Hợp"""
    
    # 1. Kiểm tra hàng rào an toàn (Guardrails)
    guardrail_error = RAGService.check_guardrails(request.query)
    if guardrail_error:
        await RAGService.log_chat(db=db, session_id=request.session_id,
                                   user_query=request.query, ai_response=guardrail_error, sources=[])
        return ChatQueryResponse(session_id=request.session_id, answer=guardrail_error, sources=[])

    answer = None
    sources = []
    method_used = "fallback"

    # 2. ƯU TIÊN: Vector RAG Search (ChromaDB + Sentence-Transformers)
    if is_index_ready():
        rag_result = answer_with_rag(
            query=request.query,
            top_k=5,
            threshold=0.38
        )

        method = rag_result.get("method", "")
        confidence = rag_result.get("confidence", 0.0)

        if method == "vector_rag" and rag_result["answer"]:
            # Co answer that tu Q&A corpus → dung luon
            answer = rag_result["answer"]
            sources = [
                {"type": "vector_rag", "title": s.get("question", "")[:80],
                 "score": s.get("score", 0), "category": s.get("category", "")}
                for s in rag_result["sources"]
            ]
            method_used = f"vector_rag (conf={confidence:.2f})"

        elif method == "vector_match_no_answer":
            # Tim duoc cau hoi lien quan nhung khong co answer trong corpus
            # → Ghi nhan topic, de fallback engine xu ly chinh xac hon
            matched_cat = rag_result.get("matched_category", "")
            matched_kw = rag_result.get("matched_keywords", "")
            # Inject keyword vao query de fallback engine hieu context tot hon
            if matched_cat or matched_kw:
                enhanced_query = f"{request.query} [{matched_cat} {matched_kw}]"
            else:
                enhanced_query = request.query
            sources = [
                {"type": "vector_match", "title": s.get("question", "")[:80],
                 "score": s.get("score", 0), "category": s.get("category", "")}
                for s in rag_result.get("sources", [])
            ]
            # Dung enhanced_query de fallback engine routing chinh xac hon
            context, db_sources = await RAGService.retrieve_context(db, enhanced_query)
            sources = sources + db_sources
            answer = await RAGService.generate_response(
                query=request.query,
                context=context,
                history=request.history,
                category=matched_cat
            )
            method_used = f"vector_guided_fallback (cat={matched_cat}, conf={confidence:.2f})"

    # 3. Fallback: Context RAG từ database (thủ tục + bài viết)
    if not answer:
        context, db_sources = await RAGService.retrieve_context(db, request.query)
        sources = db_sources
        method_used = "db_context_rag"
        
        # 4. Sinh câu trả lời từ context (Gemini hoặc rule-based fallback)
        answer = await RAGService.generate_response(
            query=request.query,
            context=context,
            history=request.history
        )
    
    # 5. Ghi nhận nhật ký hỏi đáp ẩn danh
    await RAGService.log_chat(
        db=db,
        session_id=request.session_id,
        user_query=request.query,
        ai_response=answer,
        sources=sources
    )

    return ChatQueryResponse(
        session_id=request.session_id,
        answer=answer,
        sources=sources
    )


@router.post("/feedback", response_model=ApiResponse)
async def submit_feedback(request: ChatFeedbackRequest, db: AsyncSession = Depends(get_db)):
    """Tiếp nhận phản hồi đánh giá của người dân về độ hữu ích của câu trả lời"""
    if request.chat_log_id:
        stmt = (
            update(ChatLog)
            .where(ChatLog.id == request.chat_log_id)
            .values(feedback_rating=request.rating, feedback_comment=request.comment)
        )
        await db.execute(stmt)
        await db.commit()
    else:
        stmt = (
            select(ChatLog)
            .where(ChatLog.session_id == request.session_id)
            .order_by(ChatLog.created_at.desc())
            .limit(1)
        )
        res = await db.execute(stmt)
        log = res.scalars().first()
        if log:
            log.feedback_rating = request.rating
            log.feedback_comment = request.comment
            await db.commit()

    return ApiResponse(
        success=True,
        message="Cảm ơn Quý công dân đã gửi phản hồi để giúp chúng tôi hoàn thiện chất lượng phục vụ!"
    )


@router.get("/rag-status")
async def rag_status():
    """Kiểm tra trạng thái của Vector RAG Index"""
    ready = is_index_ready()
    if ready:
        try:
            from app.services.vector_rag import _get_chroma_client, COLLECTION_LEGAL, COLLECTION_SCAM
            client = _get_chroma_client()
            legal_count = client.get_collection(COLLECTION_LEGAL).count()
            scam_count = client.get_collection(COLLECTION_SCAM).count()
            return {
                "status": "ready",
                "legal_docs": legal_count,
                "scam_docs": scam_count,
                "total": legal_count + scam_count,
                "message": f"Vector RAG đang hoạt động với {legal_count + scam_count} tài liệu"
            }
        except Exception as e:
            return {"status": "error", "message": str(e)}
    else:
        return {
            "status": "not_ready",
            "message": "Index chưa được build. Chạy: python backend/app/scripts/build_rag_index.py"
        }

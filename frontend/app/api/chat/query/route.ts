import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { getSmartLocalChatAnswer } from '@/lib/mockData';
import { queryLegalDatasetEngine } from '@/lib/legalDatasetEngine';
import { matchExact5000Question } from '@/lib/full5000KnowledgeLoader';

export async function POST(req: NextRequest) {
  let body: { session_id?: string; query?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }

  const { session_id = 'default_session', query = '' } = body;

  // 1. ƯU TIÊN SỐ 1: Trí tuệ nhân tạo Backend RAG Python (Vector DB ChromaDB + 5.000 Q&A + 35 kịch bản lừa đảo)
  console.log('[API Chat Route] Querying backend at:', `${BACKEND_URL}/api/chat/query`);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Cho phép tối đa 10s cho RAG xử lý
    const res = await fetch(`${BACKEND_URL}/api/chat/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id, query }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    console.log('[API Chat Route] Backend response status:', res.status);
    if (res.ok) {
      const data = await res.json();
      console.log('[API Chat Route] Backend data answer length:', data?.answer?.length);
      if (data && data.answer && !data.answer.includes('Dựa trên cơ sở dữ liệu của đơn vị') && data.answer.trim().length > 20) {
        return NextResponse.json(data);
      }
    }
  } catch (e: any) {
    console.error('[API Chat Route] Backend fetch failed:', e?.message || e);
  }

  // 2. FALLBACK 1: Khớp trực tiếp từ Bộ 5.000 câu hỏi chuẩn hóa trong bo-cau-hoi-phap-luat-5000.jsonl
  const exact5000Hit = matchExact5000Question(query);
  if (exact5000Hit && !/chồng đánh|vợ đánh|bị đánh|bạo lực gia đình/i.test(query)) {
    return NextResponse.json({
      session_id,
      answer: exact5000Hit.answer,
      sources: exact5000Hit.sources,
      related_questions: exact5000Hit.related_questions || [],
      clarifying_questions: exact5000Hit.clarifying_questions || [],
      answer_status: exact5000Hit.answer_status || 'ANSWERABLE',
      disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp dựa trên Bộ 5.000 câu hỏi pháp luật & Dịch vụ công chuẩn hóa 2026.',
    });
  }

  // 3. FALLBACK 2: Các tình huống khẩn cấp hoặc ưu tiên xử lý đặc thù
  const isUrgentOrHighPriority =
    /chồng đánh|vợ đánh|bị đánh|bạo lực gia đình|hành hung|đánh đập|ngược đãi|bạo hành|bị lừa|lỡ chuyển tiền|mất tiền|mất giấy tờ|rơi ví|mất ví|làm lại giấy tờ|sổ đỏ|đất đai|ranh giới|tranh chấp|vay tiền|cho vay|đòi nợ|quỵt nợ|ly hôn|ly dị|nuôi con/i.test(query);

  if (isUrgentOrHighPriority) {
    const localAI = getSmartLocalChatAnswer(query);
    return NextResponse.json({
      session_id,
      answer: localAI.answer,
      sources: localAI.sources,
      related_questions: localAI.related_questions || [],
      clarifying_questions: localAI.clarifying_questions || [],
      answer_status: localAI.answer_status || 'ANSWERABLE',
      disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp dựa trên Hệ thống Pháp luật & Dịch vụ công chuẩn hóa 2026.',
    });
  }

  // 4. FALLBACK 3: Bộ dữ liệu 180 Chuyên đề Pháp luật & Dịch vụ công Công an xã Đức Hợp
  const dsHit = queryLegalDatasetEngine(query);
  if (dsHit) {
    return NextResponse.json({
      session_id,
      answer: dsHit.answer,
      sources: dsHit.sources,
      related_questions: dsHit.related_questions || [],
      clarifying_questions: dsHit.clarifying_questions || [],
      answer_status: dsHit.answer_status || 'ANSWERABLE',
      disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp dựa trên Hệ thống Pháp luật & Dịch vụ công chuẩn hóa 2026.',
    });
  }

  // 5. FALLBACK 4: Trợ lý nội bộ mặc định
  const localAI = getSmartLocalChatAnswer(query);
  return NextResponse.json({
    session_id,
    answer: localAI.answer,
    sources: localAI.sources,
    related_questions: localAI.related_questions || [],
    clarifying_questions: localAI.clarifying_questions || [],
    answer_status: localAI.answer_status || 'ANSWERABLE',
    disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp mang tính chất hướng dẫn và tham khảo.',
  });
}


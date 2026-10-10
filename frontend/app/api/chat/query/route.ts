import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { getSmartLocalChatAnswer } from '@/lib/mockData';
import { queryLegalDatasetEngine } from '@/lib/legalDatasetEngine';
import { matchExact5000Question } from '@/lib/full5000KnowledgeLoader';
import { matchCustomKnowledge } from '@/lib/customKnowledgeStore';
import { matchSmartDirectIntent } from '@/lib/smartDirectResolver';

export async function POST(req: NextRequest) {
  let body: { session_id?: string; query?: string; category_id?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }

  const { session_id = 'default_session', query = '', category_id } = body;

  // 0. ƯU TIÊN SỐ 0: Tri thức mới do Quản trị viên Công an xã nạp vào hệ thống
  try {
    const customHit = await matchCustomKnowledge(query);
    if (customHit) {
      return NextResponse.json({
        session_id,
        answer: customHit.answer,
        sources: customHit.sources,
        related_questions: customHit.related_questions || [],
        clarifying_questions: customHit.clarifying_questions || [],
        answer_status: customHit.answer_status || 'ANSWERABLE',
        disclaimer: customHit.disclaimer || 'Thông tin do Công an xã Đức Hợp cập nhật trực tiếp.',
      });
    }
  } catch (e) {
    console.warn('[API Chat Route] Error matching custom knowledge:', e);
  }

  // 1. ƯU TIÊN SỐ 1: Bộ giải quyết câu hỏi trực diện & đúng trọng tâm (Smart Direct Intent Resolver)
  const directHit = matchSmartDirectIntent(query, category_id);
  if (directHit) {
    return NextResponse.json({
      session_id,
      answer: directHit.answer,
      sources: directHit.sources,
      related_questions: directHit.related_questions || [],
      clarifying_questions: directHit.clarifying_questions || [],
      answer_status: directHit.answer_status || 'ANSWERABLE',
      disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp dựa trên quy định pháp luật hiện hành và thẩm quyền giải quyết tại cấp xã.',
    });
  }

  // 2. ƯU TIÊN SỐ 2: Bộ dữ liệu 180 Chuyên đề Pháp luật & Dịch vụ công Công an xã Đức Hợp (có lọc theo Lĩnh vực)
  const dsHit = queryLegalDatasetEngine(query, category_id);
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

  // 3. ƯU TIÊN SỐ 3: Trí tuệ nhân tạo Backend RAG Python (Vector DB ChromaDB) nếu có kết nối
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(`${BACKEND_URL}/api/chat/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id, query, category_id }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.answer && !data.answer.includes('Dựa trên cơ sở dữ liệu của đơn vị') && data.answer.trim().length > 30) {
        return NextResponse.json(data);
      }
    }
  } catch (e: any) {
    // Backend chưa chạy hoặc timeout, tiếp tục fallback
  }

  // 4. FALLBACK: Khớp từ Bộ 5.000 câu hỏi chuẩn hóa
  const exact5000Hit = matchExact5000Question(query);
  if (exact5000Hit) {
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

  // 5. FALLBACK CUỐI: Trợ lý nội bộ mặc định
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


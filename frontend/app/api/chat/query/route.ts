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

  // 0. Kiểm tra khớp trực tiếp từ 5.000 câu hỏi trong file bo-cau-hoi-phap-luat-5000.jsonl
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

  // 1. Ưu tiên xử lý tức thì bằng Trí tuệ nhân tạo đã huấn luyện trên 5.000 câu hỏi pháp luật & datasetAI.md
  const isUrgentOrDatasetHit =
    /chồng đánh|vợ đánh|bị đánh|bạo lực gia đình|hành hung|đánh đập|ngược đãi|bạo hành|bị lừa|lỡ chuyển tiền|mất tiền/i.test(query) ||
    queryLegalDatasetEngine(query) !== null;

  if (isUrgentOrDatasetHit) {
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

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${BACKEND_URL}/api/chat/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id, query }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.answer) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {
    // Backend offline / timed out -> fallback
  }

  // Fallback to local smart AI response
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


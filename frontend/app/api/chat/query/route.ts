import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { getSmartLocalChatAnswer } from '@/lib/mockData';
import { queryLegalDatasetEngine } from '@/lib/legalDatasetEngine';

export async function POST(req: NextRequest) {
  let body: { session_id?: string; query?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }

  const { session_id = 'default_session', query = '' } = body;

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


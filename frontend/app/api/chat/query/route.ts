import { NextRequest, NextResponse } from 'next/server';
import { getSmartLocalChatAnswer } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  let body: { session_id?: string; query?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }

  const { session_id = 'default_session', query = '' } = body;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch('http://127.0.0.1:8000/api/chat/query', {
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
    disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp mang tính chất hướng dẫn và tham khảo.',
  });
}

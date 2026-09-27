import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  let body: { session_id?: string; rating?: number; comment?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ ok: true }); // không cần báo lỗi feedback
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    await fetch(`${BACKEND_URL}/api/chat/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
  } catch (e) {
    // Backend offline - feedback is optional, ignore silently
  }

  return NextResponse.json({ ok: true });
}

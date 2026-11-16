import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseInsert } from '@/lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forwardedFor = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || '';

    // 1. Thử gửi đến Backend FastAPI
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${BACKEND_URL}/api/analytics/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': forwardedFor,
          'user-agent': userAgent,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        return NextResponse.json(await res.json());
      }
    } catch (e) {
      // Backend offline -> thử lưu trữ qua Supabase nếu có
    }

    // 2. Thử lưu vào Supabase
    try {
      await supabaseInsert('site_visits', {
        page_path: body.page_path || '/',
        page_title: body.page_title || '',
        referrer: body.referrer || 'direct',
        device_type: body.device_type || 'desktop',
        created_at: new Date().toISOString()
      });
    } catch (err) {}

    return NextResponse.json({ success: true, message: 'Đã ghi nhận lượt truy cập' });
  } catch (err) {
    return NextResponse.json({ success: true });
  }
}

import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND_URL}/api/admin/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      return NextResponse.json(await res.json());
    }
  } catch (e) {
    // Backend offline
  }

  const slug = body.slug || `canh-bao-${Date.now()}`;
  const newArt = {
    id: body.id || `art_${Date.now()}`,
    category_id: body.category_id || 'canh_bao',
    title: body.title,
    slug: slug,
    summary: body.summary || 'Cảnh báo tội phạm công nghệ cao tại xã Đức Hợp.',
    content: body.content || body.summary || '',
    is_scam_alert: body.is_scam_alert !== undefined ? body.is_scam_alert : true,
    scam_tricks: Array.isArray(body.scam_tricks) ? body.scam_tricks : [body.scam_tricks || 'Thủ đoạn tinh vi qua mạng'],
    prevention_advice: Array.isArray(body.prevention_advice) ? body.prevention_advice : ['Nâng cao cảnh giác', 'Báo Công an xã Đức Hợp'],
    views_count: 0,
    created_at: new Date().toLocaleDateString('vi-VN')
  };

  MOCK_ARTICLES.unshift(newArt);
  return NextResponse.json(newArt);
}

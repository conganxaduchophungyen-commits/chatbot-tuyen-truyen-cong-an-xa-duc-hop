import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES, MOCK_ARTICLES } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch('http://127.0.0.1:8000/api/admin/stats', {
      headers: { Authorization: authHeader },
      signal: controller.signal,
      cache: 'no-store'
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      return NextResponse.json(await res.json());
    }
  } catch (e) {
    // Backend offline -> fallback
  }

  // Fallback stats
  return NextResponse.json({
    admin_name: 'Cán bộ Công an xã Đức Hợp',
    badge_number: 'CA-DH-2026',
    total_procedures: MOCK_PROCEDURES.length,
    total_articles: MOCK_ARTICLES.length,
    total_chat_queries: 182,
    satisfaction_rate: 98.5,
    recent_queries: [
      { id: '1', query: 'Hướng dẫn thủ tục làm tạm trú tại Thôn Nho Lâm', rating: 1, created_at: '10:30 Hôm nay' },
      { id: '2', query: 'Có người gọi điện dọa khóa VNeID thì làm sao?', rating: 1, created_at: '09:15 Hôm nay' },
      { id: '3', query: 'Thủ tục đăng ký xe máy mới tại Công an xã', rating: 1, created_at: '08:45 Hôm nay' },
      { id: '4', query: 'Tải mẫu CT01 ở đâu', rating: 1, created_at: 'Hôm qua' },
      { id: '5', query: 'Bản cam kết PCCC gia đình ký thế nào', rating: 1, created_at: 'Hôm qua' },
    ]
  });
}

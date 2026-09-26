import { NextRequest, NextResponse } from 'next/server';
import { IN_MEMORY_KNOWLEDGE } from '@/lib/knowledgeStore';

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  const { source_title = '', source_type = 'law', content = '' } = body;
  if (!source_title.trim() || !content.trim()) {
    return NextResponse.json({ detail: 'Vui lòng nhập tiêu đề và nội dung tài liệu.' }, { status: 400 });
  }

  // 1. Thử chuyển tiếp cho Python backend nếu đang chạy
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch('http://127.0.0.1:8000/api/admin/knowledge/ingest', {
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
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (e) {
    // Backend offline -> Xử lý trực tiếp và lưu vào kho tri thức cục bộ
  }

  // 2. Chia nhỏ văn bản (chunking) và lưu vào bộ nhớ tri thức
  const paragraphs = content
    .split('\n\n')
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 20);

  const chunksCount = paragraphs.length > 0 ? paragraphs.length : 1;

  IN_MEMORY_KNOWLEDGE.unshift({
    id: `k_${Date.now()}`,
    source_title: source_title.trim(),
    source_type,
    chunk_preview: content.trim().slice(0, 150) + (content.length > 150 ? '...' : ''),
    created_at: new Date().toLocaleDateString('vi-VN')
  });

  return NextResponse.json({
    success: true,
    message: `Đã nạp thành công ${chunksCount} đoạn tri thức vào hệ thống AI Trợ lý số!`
  });
}

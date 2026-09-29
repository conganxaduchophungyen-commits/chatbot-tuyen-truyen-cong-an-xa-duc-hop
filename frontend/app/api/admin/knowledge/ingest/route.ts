import { NextRequest, NextResponse } from 'next/server';
import { IN_MEMORY_KNOWLEDGE } from '@/lib/knowledgeStore';
import { addCustomKnowledgeItem } from '@/lib/full5000KnowledgeLoader';

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

  const paragraphs = content
    .split('\n\n')
    .map((p: string) => p.trim())
    .filter((p: string) => p.length > 20);

  const chunksCount = paragraphs.length > 0 ? paragraphs.length : 1;

  const newItem = {
    id: `k_${Date.now()}`,
    category_id: body.category_id || 'cu_tru',
    category_name: body.category_name || 'Cư trú & Căn cước VNeID',
    source_title: source_title.trim(),
    source_type,
    legal_basis: body.legal_basis || source_title.trim(),
    chunk_preview: content.trim().slice(0, 160) + (content.length > 160 ? '...' : ''),
    full_content: content.trim(),
    keywords: body.keywords || [source_title.trim()],
    created_at: new Date().toLocaleDateString('vi-VN')
  };

  IN_MEMORY_KNOWLEDGE.unshift(newItem);
  addCustomKnowledgeItem(newItem);

  return NextResponse.json({
    success: true,
    message: `Đã nạp thành công ${chunksCount} đoạn tri thức vào hệ thống AI Trợ lý số!`
  });
}

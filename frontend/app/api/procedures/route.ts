import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('category_id');
  const q = searchParams.get('q');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const backendUrl = `${BACKEND_URL}/api/procedures?${searchParams.toString()}`;
    const res = await fetch(backendUrl, { 
      cache: 'no-store',
      signal: controller.signal 
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const enriched = data.map((item) => {
          if (!item.online_guide) {
            item.online_guide = findMockGuide(item);
          }
          return item;
        });
        return NextResponse.json(enriched);
      }
    }
  } catch (e) {
    // Backend offline / timed out -> fallback
  }

  // Fallback to local mock data
  let results = [...MOCK_PROCEDURES];
  if (categoryId) {
    results = results.filter((p) => p.category_id === categoryId);
  }
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        (p.code && p.code.toLowerCase().includes(query)) ||
        (p.target_audience && p.target_audience.toLowerCase().includes(query)) ||
        p.required_documents.some((d) => d.toLowerCase().includes(query))
    );
  }

  return NextResponse.json(results);
}

function findMockGuide(procedure: { id?: string; code?: string; title?: string }) {
  if (procedure.id) {
    const byId = MOCK_PROCEDURES.find((p) => p.id === procedure.id);
    if (byId?.online_guide) return byId.online_guide;
  }
  if (procedure.code) {
    const byCode = MOCK_PROCEDURES.find((p) => p.code && p.code.toLowerCase() === procedure.code?.toLowerCase());
    if (byCode?.online_guide) return byCode.online_guide;
  }
  const title = (procedure.title || '').toLowerCase();
  if (title.includes('căn cước') || title.includes('cccd')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_can_cuoc')?.online_guide;
  }
  if (title.includes('thường trú')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_thuong_tru')?.online_guide;
  }
  if (title.includes('đăng ký xe') || title.includes('biển số')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_dang_ky_xe')?.online_guide;
  }
  if (title.includes('tạm trú')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_tam_tru')?.online_guide;
  }
  if (title.includes('phạt nguội') || title.includes('giao thông')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_phat_nguoi')?.online_guide;
  }
  if (title.includes('cháy') || title.includes('pccc')) {
    return MOCK_PROCEDURES.find((p) => p.id === 'proc_pccc')?.online_guide;
  }
  return undefined;
}

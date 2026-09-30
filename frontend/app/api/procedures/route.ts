import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';
import { supabaseSelect } from '@/lib/supabaseClient';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('category_id');
  const q = searchParams.get('q');

  let mergedProcedures = [...MOCK_PROCEDURES];

  // Đọc từ Supabase (nếu có cấu hình)
  try {
    const sbProcedures = await supabaseSelect('procedures', '*');
    if (Array.isArray(sbProcedures) && sbProcedures.length > 0) {
      const idMap = new Map<string, any>();
      for (const p of MOCK_PROCEDURES) {
        idMap.set(p.id, p);
      }
      for (const p of sbProcedures) {
        idMap.set(p.id, {
          ...p,
          required_documents: Array.isArray(p.required_documents) ? p.required_documents : typeof p.required_documents === 'string' ? JSON.parse(p.required_documents || '[]') : [],
          steps: Array.isArray(p.steps) ? p.steps : typeof p.steps === 'string' ? JSON.parse(p.steps || '[]') : [],
        });
      }
      mergedProcedures = Array.from(idMap.values());
    }
  } catch (err) {
    console.warn('[procedures GET] Supabase load warning:', err);
  }

  let results = mergedProcedures;
  if (categoryId && categoryId !== 'all') {
    results = results.filter((p) => p.category_id === categoryId);
  }
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(query)) ||
        (p.code && p.code.toLowerCase().includes(query)) ||
        (p.target_audience && p.target_audience.toLowerCase().includes(query)) ||
        (Array.isArray(p.required_documents) && p.required_documents.some((d: any) => typeof d === 'string' && d.toLowerCase().includes(query)))
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

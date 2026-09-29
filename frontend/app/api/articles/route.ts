import { NextRequest, NextResponse } from 'next/server';
import { FULL_35_SCAM_ARTICLES } from '@/lib/scamAlertsData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const isScamAlert = searchParams.get('is_scam_alert');
  const q = searchParams.get('q');

  // Luôn dùng dữ liệu local 35 kịch bản chuẩn hóa từ Kịch Bản Lừa Đảo.md
  // (không gọi backend vì backend chưa được cập nhật dữ liệu mới)
  let results = [...FULL_35_SCAM_ARTICLES];

  // Lọc theo is_scam_alert (tất cả đều là scam alert = true)
  if (isScamAlert !== null && isScamAlert === 'false') {
    results = [];
  }

  // Lọc theo từ khóa
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.summary.toLowerCase().includes(query) ||
        (a.code && a.code.toLowerCase().includes(query))
    );
  }

  return NextResponse.json(results);
}

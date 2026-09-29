import { NextRequest, NextResponse } from 'next/server';
import { FULL_35_SCAM_ARTICLES } from '@/lib/scamAlertsData';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  // Luôn tìm trong dữ liệu local 35 kịch bản chuẩn hóa
  // (không gọi backend vì backend chưa được cập nhật dữ liệu mới)
  const found = FULL_35_SCAM_ARTICLES.find((a) => a.slug === slug);
  if (found) {
    return NextResponse.json(found);
  }

  return NextResponse.json({ detail: 'Không tìm thấy bài viết' }, { status: 404 });
}

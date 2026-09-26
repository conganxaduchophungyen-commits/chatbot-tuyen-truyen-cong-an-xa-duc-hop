import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '@/lib/mockData';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const backendUrl = `http://127.0.0.1:8000/api/articles/${slug}`;
    const res = await fetch(backendUrl, { 
      cache: 'no-store',
      signal: controller.signal 
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.slug) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {
    // Backend offline / timed out
  }

  const found = MOCK_ARTICLES.find((a) => a.slug === slug);
  if (found) {
    return NextResponse.json(found);
  }

  return NextResponse.json({ detail: 'Không tìm thấy bài viết' }, { status: 404 });
}

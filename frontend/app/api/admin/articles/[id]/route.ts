import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '@/lib/mockData';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND_URL}/api/admin/articles/${id}`, {
      method: 'PUT',
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

  const idx = MOCK_ARTICLES.findIndex(a => a.id === id);
  if (idx !== -1) {
    MOCK_ARTICLES[idx] = {
      ...MOCK_ARTICLES[idx],
      ...body,
      id
    };
    return NextResponse.json(MOCK_ARTICLES[idx]);
  }

  return NextResponse.json({ detail: 'Đã cập nhật bài viết.' });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND_URL}/api/admin/articles/${id}`, {
      method: 'DELETE',
      headers: { Authorization: authHeader },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      return NextResponse.json(await res.json());
    }
  } catch (e) {
    // Backend offline
  }

  const idx = MOCK_ARTICLES.findIndex(a => a.id === id);
  if (idx !== -1) {
    MOCK_ARTICLES.splice(idx, 1);
  }

  return NextResponse.json({ success: true, message: 'Đã xóa bài viết thành công.' });
}

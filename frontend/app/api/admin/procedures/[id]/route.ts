import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';

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

  // 1. Thử gửi lên Python backend
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`http://127.0.0.1:8000/api/admin/procedures/${id}`, {
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

  // Cập nhật trong MOCK_PROCEDURES
  const idx = MOCK_PROCEDURES.findIndex(p => p.id === id);
  if (idx !== -1) {
    MOCK_PROCEDURES[idx] = {
      ...MOCK_PROCEDURES[idx],
      ...body,
      id
    };
    return NextResponse.json(MOCK_PROCEDURES[idx]);
  }

  return NextResponse.json({ detail: 'Đã cập nhật thủ tục.' });
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
    const res = await fetch(`http://127.0.0.1:8000/api/admin/procedures/${id}`, {
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

  const idx = MOCK_PROCEDURES.findIndex(p => p.id === id);
  if (idx !== -1) {
    MOCK_PROCEDURES.splice(idx, 1);
  }

  return NextResponse.json({ success: true, message: 'Đã xóa thủ tục thành công.' });
}

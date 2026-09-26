import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const backendUrl = `http://127.0.0.1:8000/api/procedures/${id}`;
    const res = await fetch(backendUrl, { 
      cache: 'no-store',
      signal: controller.signal 
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.id) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {
    // Backend offline / timed out
  }

  const found = MOCK_PROCEDURES.find((p) => p.id === id);
  if (found) {
    return NextResponse.json(found);
  }

  return NextResponse.json({ detail: 'Không tìm thấy thủ tục' }, { status: 404 });
}

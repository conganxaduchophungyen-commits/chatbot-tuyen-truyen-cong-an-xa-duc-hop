import { BACKEND_URL } from '@/lib/config';
import { NextResponse } from 'next/server';
import { MOCK_CATEGORIES } from '@/lib/mockData';

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/categories`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return NextResponse.json(data);
    }
  } catch (e) {
    // Backend offline -> Trả về Mock Data
  }
  return NextResponse.json(MOCK_CATEGORIES);
}

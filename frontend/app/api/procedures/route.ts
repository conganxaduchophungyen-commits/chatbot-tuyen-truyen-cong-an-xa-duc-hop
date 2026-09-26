import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('category_id');
  const q = searchParams.get('q');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const backendUrl = `http://127.0.0.1:8000/api/procedures?${searchParams.toString()}`;
    const res = await fetch(backendUrl, { 
      cache: 'no-store',
      signal: controller.signal 
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return NextResponse.json(data);
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

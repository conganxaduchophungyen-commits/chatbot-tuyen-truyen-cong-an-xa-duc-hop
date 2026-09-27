import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_ARTICLES } from '@/lib/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const isScamAlert = searchParams.get('is_scam_alert');
  const q = searchParams.get('q');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const backendUrl = `${BACKEND_URL}/api/articles?${searchParams.toString()}`;
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
    // Backend offline / timed out
  }

  // Fallback to local mock data
  let results = [...MOCK_ARTICLES];
  if (isScamAlert !== null) {
    const isScam = isScamAlert === 'true';
    results = results.filter((a) => a.is_scam_alert === isScam);
  }
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.summary.toLowerCase().includes(query)
    );
  }

  return NextResponse.json(results);
}

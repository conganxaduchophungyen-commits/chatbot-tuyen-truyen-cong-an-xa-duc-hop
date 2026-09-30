import { NextRequest, NextResponse } from 'next/server';
import { FULL_35_SCAM_ARTICLES } from '@/lib/scamAlertsData';
import { supabaseSelect } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const isScamAlert = searchParams.get('is_scam_alert');
  const q = searchParams.get('q');

  // 1. Fetch custom articles from Supabase
  let customArticles: any[] = [];
  try {
    customArticles = await supabaseSelect('articles', 'select=*&order=created_at.desc');
  } catch {}

  const map = new Map<string, any>();
  // Custom articles take precedence
  customArticles.forEach((a) => {
    map.set(a.id, {
      ...a,
      scam_tricks: Array.isArray(a.scam_tricks) ? a.scam_tricks : [],
      prevention_advice: Array.isArray(a.prevention_advice) ? a.prevention_advice : [],
    });
  });
  // Default dataset
  FULL_35_SCAM_ARTICLES.forEach((a) => {
    if (!map.has(a.id)) map.set(a.id, a);
  });

  let results = Array.from(map.values());

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

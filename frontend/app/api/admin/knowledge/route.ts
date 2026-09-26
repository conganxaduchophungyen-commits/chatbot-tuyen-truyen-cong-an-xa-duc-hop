import { NextRequest, NextResponse } from 'next/server';
import { IN_MEMORY_KNOWLEDGE } from '@/lib/knowledgeStore';

export async function GET(req: NextRequest) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch('http://127.0.0.1:8000/api/admin/knowledge', {
      headers: { Authorization: authHeader },
      signal: controller.signal,
      cache: 'no-store'
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      return NextResponse.json(await res.json());
    }
  } catch (e) {
    // Backend offline
  }

  return NextResponse.json(IN_MEMORY_KNOWLEDGE);
}

import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { IN_MEMORY_KNOWLEDGE } from '@/lib/knowledgeStore';

export async function GET(req: NextRequest) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND_URL}/api/admin/knowledge`, {
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

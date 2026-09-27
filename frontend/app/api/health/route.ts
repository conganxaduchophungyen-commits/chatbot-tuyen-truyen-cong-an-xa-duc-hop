import { BACKEND_URL } from '@/lib/config';
import { NextResponse } from 'next/server';

export async function GET() {
  const backendConfigured = BACKEND_URL;
  let backendStatus = 'unknown';
  let backendData: any = null;
  let errorDetail = null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s for wake-up
    const res = await fetch(`${BACKEND_URL}/api/health`, {
      signal: controller.signal,
      cache: 'no-store'
    });
    clearTimeout(timeoutId);
    backendStatus = res.ok ? 'connected' : `http_${res.status}`;
    if (res.ok) {
      backendData = await res.json();
    }
  } catch (err: any) {
    backendStatus = 'unreachable';
    errorDetail = err.message || String(err);
  }

  return NextResponse.json({
    frontend_status: 'ok',
    backend_url: backendConfigured,
    backend_status: backendStatus,
    backend_data: backendData,
    error: errorDetail,
    timestamp: new Date().toISOString()
  });
}

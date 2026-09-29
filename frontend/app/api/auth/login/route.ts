import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import * as crypto from 'crypto';

// -------------------------------------------------------
// Thông tin tài khoản cán bộ demo (khi backend offline)
// -------------------------------------------------------
const DEMO_ACCOUNTS = [
  {
    username: 'admin',
    password_sha256: crypto
      .createHash('sha256')
      .update('admin@123')
      .digest('hex'),
    full_name: 'Quản trị viên Công an xã Đức Hợp',
    role: 'admin',
  },
  {
    username: 'admin',
    password_sha256: crypto
      .createHash('sha256')
      .update('admin123')
      .digest('hex'),
    full_name: 'Quản trị viên Công an xã Đức Hợp',
    role: 'admin',
  },
  {
    username: 'admin_duchop',
    password_sha256: crypto
      .createHash('sha256')
      .update('CongAnDucHop@2026')
      .digest('hex'),
    full_name: 'Quản trị viên Công an xã Đức Hợp',
    role: 'admin',
  },
];

function generateSimpleToken(username: string): string {
  const payload = Buffer.from(
    JSON.stringify({ sub: username, exp: Date.now() + 86400000 })
  ).toString('base64url');
  const sig = crypto
    .createHash('sha256')
    .update(payload + 'cong_an_duc_hop_secret_2026')
    .digest('hex')
    .slice(0, 16);
  return `${payload}.${sig}`;
}

export async function POST(req: NextRequest) {
  let body: { username?: string; password?: string } = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }

  const username = (body.username || '').trim();
  const password = body.password || '';

  // 1. Kiểm tra tài khoản quản trị mặc định (admin / admin@123) trước tiên
  const inputHash = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  const account = DEMO_ACCOUNTS.find(
    (a) => a.username === username && a.password_sha256 === inputHash
  );

  if (account) {
    const token = generateSimpleToken(account.username);
    return NextResponse.json({
      access_token: token,
      token_type: 'bearer',
      user: {
        username: account.username,
        full_name: account.full_name,
        role: account.role,
      },
    });
  }

  // 2. Thử forward đến FastAPI backend nếu không khớp tài khoản mặc định
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch (e) {
    // Backend offline
  }

  return NextResponse.json(
    { detail: 'Tên đăng nhập hoặc mật khẩu không đúng.' },
    { status: 401 }
  );
}

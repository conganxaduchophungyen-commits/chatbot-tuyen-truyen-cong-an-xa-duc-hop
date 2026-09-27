import { BACKEND_URL } from '@/lib/config';
import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PROCEDURES } from '@/lib/mockData';

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  // 1. Thử gửi lên Python backend
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const authHeader = req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND_URL}/api/admin/procedures`, {
      method: 'POST',
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

  // Fallback: Thêm vào danh sách MOCK_PROCEDURES
  const newProc = {
    id: body.id || `proc_${Date.now()}`,
    category_id: body.category_id || 'cu_tru',
    code: body.code || 'TTHC-BCA-MOI',
    title: body.title,
    target_audience: body.target_audience || 'Công dân trên địa bàn xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: body.execution_method || 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)',
    required_documents: Array.isArray(body.required_documents) ? body.required_documents : [body.required_documents || 'Giấy tờ theo quy định'],
    steps: body.steps || [
      { step: 1, title: 'Nộp hồ sơ', desc: 'Nộp trực tiếp tại Công an xã hoặc trực tuyến qua Cổng DVC' },
      { step: 2, title: 'Nhận kết quả', desc: 'Nhận kết quả theo giấy hẹn' }
    ],
    processing_time: body.processing_time || '03 ngày làm việc',
    fee: body.fee || 'Miễn phí',
    online_url: body.online_url || 'https://dichvucong.bocongan.gov.vn',
    views_count: 0,
    forms: []
  };

  MOCK_PROCEDURES.unshift(newProc);
  return NextResponse.json(newProc);
}

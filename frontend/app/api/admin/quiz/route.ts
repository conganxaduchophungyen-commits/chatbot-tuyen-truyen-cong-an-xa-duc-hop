import { NextRequest, NextResponse } from 'next/server';
import { generateMasterQuestionBank, DetailedQuizQuestion } from '@/lib/quizBank';

// Danh sách câu hỏi lưu tạm thời trên server runtime (sẽ được client localStorage hỗ trợ đồng bộ song song)
let SERVER_QUIZ_BANK: DetailedQuizQuestion[] = generateMasterQuestionBank();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q');

  let results = [...SERVER_QUIZ_BANK];
  if (category && category !== 'all') {
    results = results.filter(item => item.category === category);
  }
  if (q && q.trim()) {
    const query = q.toLowerCase().trim();
    results = results.filter(item => 
      item.question.toLowerCase().includes(query) ||
      (item.scenario && item.scenario.toLowerCase().includes(query)) ||
      item.explanation.toLowerCase().includes(query)
    );
  }

  return NextResponse.json(results);
}

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  const newQuestion: DetailedQuizQuestion = {
    id: body.id || `CB-${Date.now()}`,
    category: body.category || 'lua_dao',
    categoryLabel: body.categoryLabel || 'Cán bộ biên tập',
    question: body.question,
    scenario: body.scenario || '',
    options: body.options || [
      { key: 'A', text: body.optA || '' },
      { key: 'B', text: body.optB || '' },
      { key: 'C', text: body.optC || '' },
      { key: 'D', text: body.optD || '' },
    ],
    correctKey: body.correctKey || 'A',
    explanation: body.explanation || 'Hướng dẫn của Công an xã Đức Hợp.',
    whyWrong: body.whyWrong || {
      A: 'Phương án đúng.',
      B: 'Chưa chính xác theo quy định.',
      C: 'Chưa chính xác theo quy định.',
      D: 'Chưa chính xác theo quy định.'
    },
    legalBasis: body.legalBasis || 'Quy định của Bộ Công an.'
  };

  SERVER_QUIZ_BANK.unshift(newQuestion);
  return NextResponse.json(newQuestion);
}

export async function PUT(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json({ detail: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  const { id } = body;
  if (!id) {
    return NextResponse.json({ detail: 'Thiếu ID câu hỏi cần sửa.' }, { status: 400 });
  }

  const idx = SERVER_QUIZ_BANK.findIndex(q => q.id === id);
  if (idx !== -1) {
    SERVER_QUIZ_BANK[idx] = {
      ...SERVER_QUIZ_BANK[idx],
      ...body
    };
    return NextResponse.json(SERVER_QUIZ_BANK[idx]);
  }

  return NextResponse.json({ detail: 'Đã cập nhật câu hỏi.' });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ detail: 'Thiếu ID câu hỏi cần xóa.' }, { status: 400 });
  }

  SERVER_QUIZ_BANK = SERVER_QUIZ_BANK.filter(q => q.id !== id);
  return NextResponse.json({ success: true, message: 'Đã xóa câu hỏi khỏi ngân hàng.' });
}

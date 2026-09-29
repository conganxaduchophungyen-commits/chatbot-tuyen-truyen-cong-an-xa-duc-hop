import { NextResponse } from 'next/server';
import { MOCK_CATEGORIES } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json(MOCK_CATEGORIES.filter((c) => c.id !== 'canh_bao'));
}


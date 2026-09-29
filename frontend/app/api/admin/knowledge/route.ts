import { NextRequest, NextResponse } from 'next/server';
import { getAll5000KnowledgeItems } from '@/lib/full5000KnowledgeLoader';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest) {
  const allItems = getAll5000KnowledgeItems();
  return NextResponse.json(allItems);
}


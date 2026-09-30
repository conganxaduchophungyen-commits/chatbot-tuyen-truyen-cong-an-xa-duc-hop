import { NextRequest, NextResponse } from 'next/server';
import { getAll5000KnowledgeItems } from '@/lib/full5000KnowledgeLoader';
import { getAllCustomKnowledge } from '@/lib/customKnowledgeStore';

export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest) {
  const customItems = await getAllCustomKnowledge();
  const allItems = getAll5000KnowledgeItems();

  const idSet = new Set<string>();
  const merged: any[] = [];

  // Put custom items first
  for (const item of customItems) {
    if (!idSet.has(item.id)) {
      idSet.add(item.id);
      merged.push(item);
    }
  }

  // Then add remaining items
  for (const item of allItems) {
    if (!idSet.has(item.id)) {
      idSet.add(item.id);
      merged.push(item);
    }
  }

  return NextResponse.json(merged);
}


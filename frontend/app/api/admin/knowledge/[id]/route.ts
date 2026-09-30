import { NextRequest, NextResponse } from 'next/server';
import { deleteCustomKnowledge } from '@/lib/customKnowledgeStore';
import { deleteCustomKnowledgeItem } from '@/lib/full5000KnowledgeLoader';

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params?.id;
  if (!id) {
    return NextResponse.json({ detail: 'Thiếu ID tài liệu cần xóa.' }, { status: 400 });
  }

  try {
    deleteCustomKnowledgeItem(id);
    await deleteCustomKnowledge(id);

    return NextResponse.json({
      success: true,
      message: `Đã xóa tài liệu nguồn ${id} thành công khỏi hệ thống tri thức AI.`,
    });
  } catch (e: any) {
    console.error('[API Delete Knowledge Error]:', e);
    return NextResponse.json(
      { detail: 'Lỗi khi xóa tài liệu nguồn: ' + (e?.message || e) },
      { status: 500 }
    );
  }
}

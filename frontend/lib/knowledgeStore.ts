export interface KnowledgeItem {
  id: string;
  source_title: string;
  source_type: string;
  chunk_preview: string;
  created_at: string;
}

export const IN_MEMORY_KNOWLEDGE: KnowledgeItem[] = [
  {
    id: 'k1',
    source_title: 'Luật Căn cước năm 2023 số 26/2023/QH15',
    source_type: 'law',
    chunk_preview: 'Công dân Việt Nam từ đủ 14 tuổi trở lên bắt buộc phải thực hiện thủ tục cấp thẻ Căn cước. Bắt buộc thu nhận mống mắt...',
    created_at: '25/09/2026'
  },
  {
    id: 'k2',
    source_title: 'Thông tư số 24/2023/TT-BCA về đăng ký xe cơ sở',
    source_type: 'procedure',
    chunk_preview: 'Phân cấp toàn diện thẩm quyền tiếp nhận hồ sơ đăng ký, bấm biển số xe mô tô, xe gắn máy cho Công an cấp xã...',
    created_at: '24/09/2026'
  },
  {
    id: 'k3',
    source_title: 'Chỉ thị số 01/CT-TTg về công tác PCCC trong tình hình mới',
    source_type: 'law',
    chunk_preview: '100% hộ gia đình mở lối thoát nạn thứ 2 và tự trang bị ít nhất 01 bình chữa cháy xách tay...',
    created_at: '23/09/2026'
  }
];

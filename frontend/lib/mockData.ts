import { Category, Procedure, Article } from './api';
import { FULL_30_PROCEDURES } from './proceduresData';
import { FULL_20_AI_KNOWLEDGE } from './aiKnowledge';
import { FULL_35_SCAM_ARTICLES } from './scamAlertsData';
import { queryLegalDatasetEngine } from './legalDatasetEngine';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cu_tru',
    code: 'cu_tru',
    name: 'Cư trú & Định danh VNeID',
    description: 'Thông báo lưu trú, đăng ký thường trú, tạm trú trực tuyến trên VNeID',
    icon: 'UserCheck',
    order_num: 1,
  },
  {
    id: 'dvc_lien_thong',
    code: 'dvc_lien_thong',
    name: 'DVC Liên thông & Tư pháp',
    description: 'Liên thông Khai sinh - Thường trú - BHYT; Khai tử; Cấp Phiếu lý lịch tư pháp',
    icon: 'FileText',
    order_num: 2,
  },
  {
    id: 'giao_thong',
    code: 'giao_thong',
    name: 'Giao thông & Đăng ký xe',
    description: 'Kê khai đăng ký xe lần đầu (ô tô, xe máy, xe máy điện) cấp xã trên VNeID',
    icon: 'Bike',
    order_num: 3,
  },
  {
    id: 'tich_hop_giay_to',
    code: 'tich_hop_giay_to',
    name: 'Tích hợp Giấy tờ & Tiện ích VNeID',
    description: 'Tích hợp GPLX, Đăng ký xe, BHYT, Sổ BHXH, Mã số thuế và xuất trình giấy tờ',
    icon: 'Shield',
    order_num: 4,
  },
  {
    id: 'kien_nghi_phan_anh',
    code: 'kien_nghi_phan_anh',
    name: 'Góp ý, Phản ánh & Giám sát',
    description: 'Kiến nghị ANTT tố giác tội phạm ẩn danh, Kiosk 24/7, Giám sát của Đảng, Hiệu chỉnh dữ liệu',
    icon: 'MessageSquare',
    order_num: 5,
  },
  {
    id: 'canh_bao',
    code: 'canh_bao',
    name: 'Cảnh báo Tội phạm & Lừa đảo',
    description: 'Tuyên truyền nhận diện 22 thủ đoạn lừa đảo qua mạng và xử lý khẩn cấp',
    icon: 'ShieldAlert',
    order_num: 6,
  },
];

export const MOCK_PROCEDURES: Procedure[] = FULL_30_PROCEDURES;

export const MOCK_ARTICLES: Article[] = FULL_35_SCAM_ARTICLES;

// =========================================================================
// TRỢ LÝ SỐ AI LOCAL THÔNG MINH ĐỘT PHÁ (XỬ LÝ ĐA LĨNH VỰC TOÀN DIỆN)
// =========================================================================
export function getSmartLocalChatAnswer(query: string): {
  answer: string;
  sources: any[];
  related_questions?: string[];
  clarifying_questions?: string[];
  answer_status?: 'ANSWERABLE' | 'REQUIRES_CLARIFICATION' | 'INSUFFICIENT_EVIDENCE';
} {
  const q = query.toLowerCase().trim();

  // 0. ƯU TIÊN CHỐNG ẢO GIÁC & LÀM RÕ DỮ KIỆN TỪ BỘ DỮ LIỆU DATASEAI.MD & 5000 CÂU HỎI
  if (
    q.includes('điều 999') ||
    q.includes('dieu 999') ||
    q.includes('cmnd 9 số') ||
    q.includes('sổ hộ khẩu giấy còn') ||
    q.includes('12 điểm') ||
    q.includes('trừ điểm') ||
    q.includes('ghế trẻ em') ||
    q.includes('mất giấy tờ') ||
    q.includes('rơi ví') ||
    q.includes('mất ví') ||
    q.includes('mất bóp') ||
    q.includes('làm lại giấy tờ') ||
    (q.includes('mất') && q.includes('giấy tờ')) ||
    q.includes('tranh chấp đất') ||
    q.includes('lối đi chung') ||
    q.includes('ranh giới') ||
    q.includes('vay tiền') ||
    q.includes('quỵt nợ') ||
    q.includes('đòi nợ') ||
    q.includes('ly hôn') ||
    q.includes('ly dị') ||
    (q.includes('sang tên') && (q.includes('nhiều đời chủ') || q.includes('không tìm thấy chủ cũ') || q.includes('giấy viết tay')))
  ) {
    const goldenHit = queryLegalDatasetEngine(query);
    if (goldenHit) return goldenHit;
  }

  // 1. CHÀO HỎI & GIỚI THIỆU ĐƠN VỊ
  if (q.includes('xin chào') || q.includes('chào') || q === 'hi' || q === 'hello' || q.includes('bạn là ai') || q.includes('giới thiệu')) {
    return {
      answer: `Kính chào Quý công dân! Tôi là **Trợ lý số Pháp luật & Thủ tục hành chính của Công an xã Đức Hợp, tỉnh Hưng Yên**.\n\n` +
        `Tôi luôn sẵn sàng hỗ trợ Bác/Anh/Chị 24/7 về các nội dung:\n` +
        `🔹 **Thủ tục hành chính công:** Cư trú, Đăng ký thường trú/tạm trú, Căn cước mới, VNeID Mức 2, Đăng ký xe máy, Nộp phạt nguội.\n` +
        `🔹 **Cảnh báo phòng chống tội phạm:** Nhận diện 22 thủ đoạn lừa đảo mạng mới nhất và cách xử lý khẩn cấp khi gặp sự cố.\n` +
        `🔹 **An toàn PCCC & Cứu nạn:** Quy định bình chữa cháy gia đình, kỹ năng thoát hiểm khi có hỏa hoạn, xử lý sự cố rò rỉ gas.\n\n` +
        `📍 **Trụ sở Công an xã Đức Hợp:** Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n` +
        `📞 **Số điện thoại Trực ban 24/24h:** **02213.815.999**.\n\n` +
        `Bác/Anh/Chị vui lòng đặt câu hỏi hoặc nêu vấn đề cần giải đáp!`,
      sources: [
        { type: 'procedure', id: 'proc_thuong_tru', title: 'Đăng ký thường trú tại xã Đức Hợp', code: 'TTHC-BCA-01' },
        { type: 'procedure', id: 'proc_dang_ky_xe', title: 'Đăng ký xe máy tại xã Đức Hợp', code: 'TTHC-BCA-02' }
      ]
    };
  }

  // 2. LIÊN HỆ, ĐỊA CHỈ TRỤ SỞ, SỐ ĐIỆN THOẠI CÔNG AN XÃ
  if (q.includes('địa chỉ') || q.includes('trụ sở') || q.includes('số điện thoại') || q.includes('hotline') || q.includes('trực ban') || q.includes('ở đâu') || q.includes('giờ làm việc')) {
    return {
      answer: `Kính thưa Quý công dân, Công an xã Đức Hợp xin cung cấp thông tin liên hệ chính thức như sau:\n\n` +
        `🏛️ **Tên đơn vị:** Công an xã Đức Hợp, tỉnh Hưng Yên.\n` +
        `📍 **Địa chỉ Trụ sở:** Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.\n` +
        `📞 **Số điện thoại Trực ban (tiếp nhận tin báo 24/24h):** **02213.815.999**.\n` +
        `⏰ **Thời gian làm việc tiếp nhận thủ tục hành chính:**\n` +
        `- Giờ hành chính các ngày trong tuần từ Thứ Hai đến Thứ Sáu.\n` +
        `- Sáng: 07h30 - 11h30 | Chiều: 13h30 - 17h00.\n` +
        `- Thứ Bảy: Trực tiếp nhận và xử lý hồ sơ cư trú, định danh điện tử theo quy định.\n\n` +
        `Lực lượng Cán bộ chiến sĩ Công an xã Đức Hợp luôn tận tình hướng dẫn và phục vụ nhân dân!`,
      sources: []
    };
  }

  // 3. XỬ LÝ KHẨN CẤP: BẠO LỰC GIA ĐÌNH, BỊ CHỒNG/VỢ ĐÁNH ĐẬP, BỊ HÀNH HUNG, BỊ ĐE DỌA
  if (
    q.includes('chồng đánh') ||
    q.includes('vợ đánh') ||
    q.includes('bị đánh') ||
    q.includes('bị bạo hành') ||
    q.includes('bạo lực gia đình') ||
    q.includes('hành hung') ||
    q.includes('đánh đập') ||
    q.includes('bị đe dọa') ||
    q.includes('bạo hành') ||
    q.includes('cứu tôi') ||
    q.includes('đánh người') ||
    q.includes('cố ý gây thương tích')
  ) {
    return {
      answer: `🚨 **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN XỬ LÝ KHẨN CẤP KHI BỊ BẠO LỰC GIA ĐÌNH (BỊ ĐÁNH ĐẬP, HÀNH HUNG):**\n\n` +
        `Công an xã Đức Hợp chia sẻ và khẩn thiết đề nghị Bác/Chị/Anh hãy đặt **sự an toàn tính mạng và sức khỏe lên hàng đầu**:\n\n` +
        `1️⃣ **BƯỚC 1: LẬP TỨC LÁNH NẠN AN TOÀN:**\n` +
        `- Chạy thoát ngay sang nhà hàng xóm, người thân hoặc nơi đông người để cầu cứu. Tránh xa các vật dụng sắc nhọn, nguy hiểm.\n` +
        `- Nếu bị nhốt hoặc không kịp thoát ra ngoài: Hãy khóa chặt cửa phòng kiên cố, hô hoán thật to để người xung quanh nghe thấy.\n\n` +
        `2️⃣ **BƯỚC 2: GỌI KHẨN CẤP CÔNG AN XÃ ĐỨC HỢP (24/24H):**\n` +
        `- Gọi ngay số điện thoại **Trực ban Công an xã Đức Hợp**: **02213.815.999**.\n` +
        `- Hoặc gọi Cảnh sát phản ứng nhanh: **113** | Tổng đài Quốc gia bảo vệ Phụ nữ & Trẻ em: **111**.\n` +
        `👉 *Cán bộ chiến sĩ Công an xã Đức Hợp sẽ có mặt ngay tại hiện trường (các thôn trong xã) để khống chế đối tượng, ngăn chặn hành vi bạo lực và bảo vệ nạn nhân an toàn.*\n\n` +
        `3️⃣ **BƯỚC 3: ĐẾN CƠ SỞ Y TẾ SƠ CỨU & LẬP HỒ SƠ THƯƠNG TÍCH:**\n` +
        `- Đến ngay Trạm Y tế xã Đức Hợp hoặc Trung tâm Y tế huyện Kim Động để khám, điều trị vết thương và xin cấp **Giấy chứng nhận thương tích / Bệnh án y khoa**. Đây là chứng cứ pháp lý quyết định để xử lý đối tượng.\n` +
        `- Giữ lại ảnh chụp vết thương, quần áo rách, đồ đạc bị đập phá, tin nhắn/ghi âm đe dọa.\n\n` +
        `4️⃣ **BƯỚC 4: ÁP DỤNG CÁC BIỆN PHÁP BẢO VỆ PHÁP LUẬT:**\n` +
        `- **Ra Quyết định cấm tiếp xúc:** Theo Điều 25 Luật Phòng, chống bạo lực gia đình năm 2022, Chủ tịch UBND xã Đức Hợp hoặc Tòa án có quyền ra Quyết định cấm người có hành vi bạo lực đến gần nạn nhân (dưới 30m).\n` +
        `- **Xử phạt hành chính:** Theo Điều 52 Nghị định 144/2021/NĐ-CP, phạt tiền từ **5.000.000đ - 20.000.000đ** đối với hành vi đánh đập, hành hạ thành viên gia đình.\n` +
        `- **Khởi tố hình sự:** Người có hành vi bạo hành dã man hoặc gây thương tích sẽ bị khởi tố theo **Điều 134 Bộ luật Hình sự** (Tội Cố ý gây thương tích) hoặc **Điều 185 Bộ luật Hình sự** (Tội Ngược đãi, hành hạ vợ/chồng/con) với khung hình phạt tù từ 06 tháng đến 05 năm.\n\n` +
        `📍 **Trụ sở tiếp nhận tin báo:** Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên). Lực lượng Công an luôn đồng hành bảo vệ người dân!`,
      sources: [
        { type: 'knowledge', id: 'kb_blgd_01', title: 'Hướng dẫn khẩn cấp khi bị bạo lực gia đình (Luật PCBLGĐ 2022)' },
        { type: 'knowledge', id: 'kb_blgd_04', title: 'Mức phạt tiền và hình sự hành vi đánh đập vợ/chồng (NĐ 144/2021 & BLHS)' },
        { type: 'knowledge', id: 'kb_blgd_02', title: 'Quy định Biện pháp Cấm tiếp xúc bảo vệ nạn nhân' }
      ]
    };
  }

  // 4. XỬ LÝ KHẨN CẤP KHI BỊ LỪA ĐẢO / BỊ RÚT TIỀN / MẮC BẪY
  if (q.includes('bị lừa') || q.includes('lấy lại tiền') || q.includes('mất tiền') || q.includes('lỡ chuyển tiền') || q.includes('hack') || q.includes('bị lộ otp') || q.includes('khóa tài khoản')) {
    return {
      answer: `🚨 **CÔNG AN XÃ ĐỨC HỢP HƯỚNG DẪN 4 BƯỚC KHẨN CẤP KHI BỊ LỪA ĐẢO QUA MẠNG:**\n\n` +
        `1️⃣ **BƯỚC 1 - KHÓA TÀI KHOẢN & THẺ NGÂN HÀNG NGAY LẬP TỨC:**\n` +
        `- Mở ứng dụng ngân hàng và bấm "Khóa thẻ khẩn cấp" hoặc gọi ngay số Hotline in ở mặt sau thẻ ATM của ngân hàng để yêu cầu tổng đài viên khóa toàn bộ giao dịch, đóng băng tài khoản nhằm ngăn đối tượng tiếp tục tẩu tán tiền.\n\n` +
        `2️⃣ **BƯỚC 2 - THU THẬP VÀ SAO LƯU TOÀN BỘ CHỨNG CỨ:**\n` +
        `- Chụp lại toàn bộ màn hình tin nhắn, cuộc gọi, đường link lừa đảo, số điện thoại, tài khoản mạng xã hội của kẻ lừa đảo.\n` +
        `- Ra ngay chi nhánh ngân hàng gần nhất in **Bản sao kê lịch sử giao dịch chuyển tiền** có đóng dấu mộc đỏ của ngân hàng.\n\n` +
        `3️⃣ **BƯỚC 3 - ĐẾN TRÌNH BÁO TẠI CÔNG AN XÃ ĐỨC HỢP:**\n` +
        `- Đến ngay Trụ sở Công an xã Đức Hợp tại **Thôn Nho Lâm, xã Đức Hợp** hoặc gọi Hotline Trực ban: **02213.815.999** để nộp đơn trình báo và được cán bộ lập hồ sơ xác minh.\n\n` +
        `4️⃣ **BƯỚC 4 - CẢNH GIÁC BẪY LỪA ĐẢO LẦN 2:**\n` +
        `- Tuyệt đối **KHÔNG** tin vào các dịch vụ "Thu hồi tiền treo, cam kết lấy lại tiền bị lừa" trên Facebook/TikTok. Đó 100% là chiêu trò lừa đảo lần thứ 2 của bọn tội phạm!`,
      sources: [
        { type: 'article', id: 'art_thu_hoi_tien_treo', title: 'Cảnh báo bẫy lừa thu hồi tiền treo lần 2', slug: 'canh-bao-dich-vu-thu-hoi-tien-bi-lua-dao-lan-2' },
        { type: 'article', id: 'art_vneid_fake', title: 'Cảnh báo giả danh Công an cài VNeID giả mạo', slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao' }
      ]
    };
  }

  // 4.5. TRA CỨU TRÍ TUỆ NHÂN TẠO TỪ BỘ 5.000 CÂU HỎI PHÁP LUẬT (180 CHUYÊN ĐỀ X 30 Ý ĐỊNH) & DATASEAI.MD
  const datasetMatch = queryLegalDatasetEngine(query);
  if (datasetMatch) {
    return datasetMatch;
  }

  // 4.6. CÁC THỦ ĐOẠN LỪA ĐẢO CỤ THỂ (22 DẠNG)
  if (q.includes('vneid giả') || q.includes('cài app') || q.includes('file apk') || q.includes('.apk') || (q.includes('công an gọi') && q.includes('vneid'))) {
    return {
      answer: `Công an xã Đức Hợp cảnh báo thủ đoạn **Giả danh Công an hướng dẫn cài đặt App VNeID giả mạo (.apk)**:\n\n` +
        `⚠️ **Thủ đoạn của đối tượng:**\n` +
        `- Gọi điện xưng là Công an thông báo hồ sơ định danh điện tử của Bác/Anh/Chị bị sai sót hoặc chưa kích hoạt Mức 2.\n` +
        `- Kết bạn Zalo và gửi đường dẫn yêu cầu tải file có đuôi \`.apk\` có giao diện giống Cổng DVC.\n` +
        `- Khi cài đặt và cấp quyền Trợ năng (Accessibility), mã độc sẽ chiếm quyền điều khiển điện thoại, chụp màn hình và rút sạch tiền trong tài khoản ngân hàng.\n\n` +
        `🛡️ **KHUYẾN CÁO TỪ CÔNG AN XÃ ĐỨC HỢP:**\n` +
        `- Công an xã Đức Hợp **KHÔNG BAO GIỜ** yêu cầu công dân cài app qua đường link ngoài kho ứng dụng chính thức (Google Play / App Store).\n` +
        `- Tuyệt đối không bấm vào link lạ, không tải file \`.apk\`.\n` +
        `- Kích hoạt VNeID Mức 2: Trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Hotline: **02213.815.999**.`,
      sources: [{ type: 'article', id: 'art_vneid_fake', title: 'Giả danh Công an cài VNeID giả mạo', slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao' }]
    };
  }

  if (q.includes('lệnh bắt') || q.includes('viện kiểm sát') || q.includes('dính án') || q.includes('ma túy') || q.includes('rửa tiền') || q.includes('tài khoản an toàn')) {
    return {
      answer: `Công an xã Đức Hợp xin khẳng định rõ ràng về chiêu trò **Giả danh Công an, Viện kiểm sát gọi điện dọa lệnh bắt**:\n\n` +
        `🚨 **Bản chất thủ đoạn:**\n` +
        `- Đối tượng gọi điện tự xưng Điều tra viên, thông báo công dân đang liên quan đến đường dây buôn ma túy, rửa tiền.\n` +
        `- Gửi hình ảnh "Lệnh bắt tạm giam", "Lệnh truy nã" có con dấu đỏ giả mạo qua Zalo.\n` +
        `- Đe dọa bắt giữ nếu không chuyển toàn bộ tiền tiết kiệm sang "Tài khoản an toàn của cơ quan điều tra" để chứng minh sự trong sạch.\n\n` +
        `🛡️ **QUY TẮC CỐT LÕI CẦN GHI NHỚ:**\n` +
        `- Lực lượng Công an, Viện kiểm sát, Tòa án **KHÔNG BAO GIỜ** làm việc qua điện thoại hay gửi văn bản tố tụng qua Zalo!\n` +
        `- Cơ quan nhà nước **KHÔNG CÓ TÀI KHOẢN TẠM GIỮ CÁ NHÂN** và không bao giờ yêu cầu công dân chuyển tiền!\n` +
        `- Khi nhận cuộc gọi tương tự, bà con hãy cúp máy ngay và gọi Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [{ type: 'article', id: 'art_gia_cong_an_lenh_bat', title: 'Giả danh Công an dọa lệnh bắt qua Zalo', slug: 'canh-bao-gia-cong-an-vien-kiem-sat-lenh-bat-zalo' }]
    };
  }

  if (q.includes('cộng tác viên') || q.includes('shopee') || q.includes('tiktok') || q.includes('đơn hàng') || q.includes('việc nhẹ lương cao') || q.includes('hoa hồng')) {
    return {
      answer: `Cảnh báo chiêu trò **Tuyển Cộng tác viên xử lý đơn hàng ảo trên Shopee, TikTok, Lazada**:\n\n` +
        `⚠️ **Kịch bản lừa đảo:**\n` +
        `- Đăng tuyển \'Việc nhẹ lương cao, ngồi nhà làm 2-3 tiếng kiếm 300k - 500k/ngày\'.\n` +
        `- Vài đơn đầu tiên (100k - 500k), đối tượng hoàn tiền gốc và hoa hồng 10-20% rất nhanh để tạo sự tin tưởng.\n` +
        `- Khi số tiền nạp lên hàng chục, hàng trăm triệu đồng, chúng báo lỗi cú pháp, lệnh kép, bắt nộp thêm tiền cọc để rút vốn rồi chặn liên lạc.\n\n` +
        `🛡️ **KHUYẾN CÁO:**\n` +
        `- Không có sàn thương mại điện tử nào tuyển CTV thanh toán đơn hàng ảo qua chuyển khoản cá nhân.\n` +
        `- Tuyệt đối không nạp tiền làm nhiệm vụ kiếm hoa hồng. Nếu đã nộp tiền, dừng chuyển ngay và đến Công an xã Đức Hợp trình báo!`,
      sources: [{ type: 'article', id: 'art_ctv_shopee', title: 'Lừa đảo tuyển CTV đơn hàng Shopee, TikTok', slug: 'canh-bao-tuyen-cong-tac-vien-shopee-tiktok' }]
    };
  }

  if (q.includes('deepfake') || q.includes('video call') || q.includes('gọi video') || q.includes('mượn tiền') || q.includes('mạo danh người thân')) {
    return {
      answer: `Cảnh báo thủ đoạn **Gọi video Deepfake mạo danh người thân vay tiền khẩn cấp**:\n\n` +
        `⚠️ **Dấu hiệu nhận biết cuộc gọi Deepfake:**\n` +
        `- Cuộc gọi video thường rất ngắn (vài giây), hình ảnh nhấp nháy, mờ giật, cử động môi không khớp với âm thanh phát ra.\n` +
        `- Đối tượng viện cớ sóng yếu, đang đi đường hoặc máy sắp hết pin để cúp máy và giục nhắn tin.\n` +
        `- Yêu cầu chuyển tiền gấp vào tài khoản lạ không trùng tên người thân.\n\n` +
        `🛡️ **BIỆN PHÁP BẢO VỆ:**\n` +
        `- Gọi điện thoại thông thường vào số di động cá nhân của người thân để kiểm chứng.\n` +
        `- Đặt các câu hỏi riêng tư mà chỉ người thân mới biết (ví dụ: ngày sinh cháu bé, kỷ niệm gia đình).\n` +
        `- Tuyệt đối không chuyển tiền vào tài khoản trung gian của người lạ!`,
      sources: [{ type: 'article', id: 'art_deepfake', title: 'Deepfake hack tài khoản mượn tiền', slug: 'canh-bao-deepfake-hack-tai-khoan-muon-tien' }]
    };
  }

  if (q.includes('sms') || q.includes('brandname') || q.includes('tin nhắn ngân hàng') || q.includes('đăng nhập lạ') || q.includes('link ngân hàng')) {
    return {
      answer: `Cảnh báo thủ đoạn **Giả mạo tin nhắn thương hiệu Ngân hàng (SMS Brandname giả mạo)**:\n\n` +
        `⚠️ **Bản chất tinh vi:**\n` +
        `- Đối tượng dùng trạm thu phát sóng BTS giả mạo để chèn tin nhắn lừa đảo vào chung hộp thư SMS thật của ngân hàng (Vietcombank, Agribank, BIDV...).\n` +
        `- Nội dung đe dọa: "Tài khoản của bạn bị trừ 5.000.000đ do đăng nhập tại thiết bị lạ, truy cập ngay link... để hủy".\n` +
        `- Link đính kèm có tên miền giả mạo (vd: vietcombank-ebank.cc, bidv-smart.top...). Khi đăng nhập, tiền sẽ bị rút sạch.\n\n` +
        `🛡️ **QUY TẮC AN TOÀN:**\n` +
        `- Ngân hàng **KHÔNG BAO GIỜ** gửi link yêu cầu nhập tên đăng nhập, mật khẩu hay mã OTP qua tin nhắn SMS.\n` +
        `- Chỉ đăng nhập Internet Banking qua ứng dụng chính thức tải từ App Store / Google Play hoặc website ngân hàng có đuôi .com.vn.`,
      sources: [{ type: 'article', id: 'art_sms_fake', title: 'Cảnh báo SMS Brandname giả mạo', slug: 'canh-bao-sms-brandname-gia-mao' }]
    };
  }

  if (q.includes('chuyển nhầm') || q.includes('nhầm tiền') || q.includes('bị chuyển nhầm')) {
    return {
      answer: `Hướng dẫn của Công an xã Đức Hợp khi **Bị chuyển nhầm tiền vào tài khoản cá nhân**:\n\n` +
        `⚠️ **Cảnh giác bẫy tín dụng đen:**\n` +
        `- Kẻ xấu cố tình chuyển tiền vào tài khoản, sau đó gọi điện đe dọa bắt trả lãi suất cắt cổ kiểu xã hội đen.\n\n` +
        `🛡️ **CÁCH XỬ LÝ ĐÚNG PHÁP LUẬT:**\n` +
        `1. Tuyệt đối **KHÔNG SỬ DỤNG** số tiền chuyển nhầm.\n` +
        `2. Không tự ý chuyển trả lại theo hướng dẫn của người gọi điện lạ vì có thể bị chuyển nhầm sang tài khoản lừa đảo khác.\n` +
        `3. Mang theo CCCD ra phòng giao dịch ngân hàng đề nghị lập biên bản tra soát và chuyển hoàn đúng tài khoản ban đầu.\n` +
        `4. Hoặc đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) trình báo để được bảo vệ quyền lợi hợp pháp.`,
      sources: [{ type: 'article', id: 'art_chuyen_nham_tien', title: 'Cảnh báo bẫy nợ chuyển tiền nhầm', slug: 'canh-bao-chuyen-nham-tien-bay-tin-dung-den' }]
    };
  }

  // 5. CƯ TRÚ, THƯỜNG TRÚ, TẠM TRÚ, HỘ KHẨU
  if (q.includes('thường trú') || q.includes('nhập khẩu') || q.includes('hộ khẩu') || q.includes('cư trú') || q.includes('tạm trú') || q.includes('tạm vắng') || q.includes('ct01') || q.includes('ct08')) {
    return {
      answer: `Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin hướng dẫn thủ tục **Đăng ký cư trú tại xã Đức Hợp**:\n\n` +
        `📌 **1. Thành phần hồ sơ cần chuẩn bị (Mẫu chuẩn Bộ Công an):**\n` +
        `- Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).\n` +
        `- Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán, Giấy phép xây dựng, hoặc Hợp đồng thuê trọ hợp pháp).\n` +
        `- Ý kiến đồng ý của chủ hộ/chủ sở hữu chỗ ở hợp pháp (nếu nhập vào hộ gia đình khác).\n` +
        `- Giấy tờ chứng minh quan hệ nhân thân (Đăng ký kết hôn, Giấy khai sinh - nếu chưa có trên Cơ sở dữ liệu quốc gia về dân cư).\n\n` +
        `📌 **2. Nơi nộp hồ sơ & Thời hạn giải quyết:**\n` +
        `- Nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp).\n` +
        `- Hoặc nộp trực tuyến qua Cổng Dịch vụ công Bộ Công an hoặc qua ứng dụng VNeID.\n` +
        `- **Thời hạn giải quyết:** Tối đa **07 ngày làm việc** đối với đăng ký thường trú; **03 ngày làm việc** đối với đăng ký tạm trú.\n` +
        `- **Lệ phí:** 20.000 VNĐ (nộp trực tiếp) hoặc 10.000 VNĐ (khi nộp trực tuyến).\n\n` +
        `💡 *Lưu ý quan trọng:* Sổ hộ khẩu giấy đã hết giá trị sử dụng từ ngày 01/01/2023. Kết quả giải quyết cư trú được cập nhật trực tiếp trên hệ thống CSDLQG về dân cư và hiển thị trên ứng dụng VNeID của công dân.\n\n` +
        `📞 Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [
        { type: 'procedure', id: 'proc_thuong_tru', title: 'Đăng ký thường trú tại xã Đức Hợp', code: 'TTHC-BCA-01' },
        { type: 'procedure', id: 'proc_tam_tru', title: 'Đăng ký tạm trú tại xã Đức Hợp', code: 'TTHC-BCA-03' }
      ]
    };
  }

  // 6. THẺ CĂN CƯỚC, CCCD, MỐNG MẮT, VNeID MỨC 2
  if (q.includes('căn cước') || q.includes('cccd') || q.includes('mống mắt') || q.includes('vneid mức 2') || q.includes('định danh') || q.includes('sinh trắc học')) {
    return {
      answer: `Kính chào Quý công dân! Về quy định **Cấp thẻ Căn cước mới theo Luật Căn cước 2023** (có hiệu lực từ ngày 01/7/2024):\n\n` +
        `📌 **1. Độ tuổi và hình thức cấp:**\n` +
        `- **Trẻ em từ 0 đến dưới 6 tuổi:** Cấp thẻ Căn cước theo **nhu cầu**. Người đại diện hợp pháp kê khai trực tuyến trên Cổng DVC / VNeID (không thu nhận vân tay, mống mắt).\n` +
        `- **Trẻ em từ 6 đến dưới 14 tuổi:** Cấp theo nhu cầu, thu nhận ảnh khuôn mặt, vân tay và **mống mắt**.\n` +
        `- **Công dân từ đủ 14 tuổi trở lên:** **Bắt buộc** cấp thẻ Căn cước mới.\n\n` +
        `📌 **2. Thẻ Căn cước công dân (CCCD) cũ có còn dùng được không?**\n` +
        `- Thẻ CCCD gắn chip đã cấp trước ngày 01/7/2024 vẫn có giá trị sử dụng đến hết thời hạn ghi trên thẻ. Công dân không bắt buộc phải đổi nếu thẻ còn hạn.\n\n` +
        `📌 **3. Hướng dẫn kích hoạt VNeID Mức 2:**\n` +
        `- Mang thẻ Căn cước đến trực tiếp Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Cán bộ Công an xã sẽ thu nhận khuôn mặt, vân tay và kích hoạt hoàn toàn miễn phí.\n` +
        `- VNeID Mức 2 có giá trị thay thế xuất trình thẻ Căn cước giấy, Bằng lái xe, Đăng ký xe, Thẻ BHYT trong mọi thủ tục hành chính.\n\n` +
        `📞 Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_can_cuoc', title: 'Cấp thẻ Căn cước theo Luật 2023', code: 'TTHC-BCA-04' }]
    };
  }

  // 7. GIAO THÔNG, ĐĂNG KÝ XE MÁY TẠI XÃ, BIỂN SỐ ĐỊNH DANH
  if (q.includes('xe') || q.includes('biển số') || q.includes('đăng ký xe') || q.includes('xe máy') || q.includes('biển định danh') || q.includes('sang tên xe')) {
    return {
      answer: `Kính chào Quý công dân! Về thủ tục **Đăng ký, cấp biển số xe mô tô, xe gắn máy tại Công an xã Đức Hợp** (theo Thông tư 24/2023/TT-BCA):\n\n` +
        `📌 **1. Thẩm quyền phân cấp tại xã:**\n` +
        `- Công an xã Đức Hợp thực hiện đăng ký, cấp biển số xe mô tô, xe gắn máy (kể cả xe máy điện) cho cá nhân có nơi cư trú (thường trú, tạm trú) tại xã Đức Hợp.\n\n` +
        `📌 **2. Hồ sơ cần chuẩn bị mang đến Công an xã Đức Hợp:**\n` +
        `- Căn cước công dân hoặc tài khoản định danh điện tử VNeID Mức 2 của chủ xe.\n` +
        `- Hóa đơn giá trị gia tăng (chứng từ nguồn gốc xe).\n` +
        `- Biên lai nộp lệ phí trước bạ hoặc mã số nộp lệ phí trước bạ điện tử.\n` +
        `- Mã số hồ sơ đăng ký xe trực tuyến kê khai trên Cổng DVC Bộ Công an.\n\n` +
        `📌 **3. Quy tắc Biển số định danh cần biết:**\n` +
        `- Biển số xe được cấp và quản lý theo mã định danh của chủ xe suốt đời.\n` +
        `- Khi bán, chuyển nhượng xe: Chủ xe **phải giữ lại biển số và đăng ký xe**, nộp lại cho cơ quan Công an làm thủ tục thu hồi. Biển số này được cơ quan Công an giữ lại trong vòng **05 năm** để cấp lại cho chiếc xe mới của chủ xe.\n` +
        `- Nghiêm cấm mua bán, chuyển nhượng biển số định danh (trừ biển số trúng đấu giá).\n\n` +
        `📍 Nơi làm việc: Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Trực ban: **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_dang_ky_xe', title: 'Đăng ký xe máy cấp xã', code: 'TTHC-BCA-02' }]
    };
  }

  // 8. PHẠT NGUỘI, XỬ PHẠT GIAO THÔNG, NỒNG ĐỘ CỒN
  if (q.includes('phạt') || q.includes('phạt nguội') || q.includes('nồng độ cồn') || q.includes('mũ bảo hiểm') || q.includes('bằng lái') || q.includes('giao thông')) {
    return {
      answer: `Kính chào Quý công dân! Về các quy định **Xử phạt vi phạm giao thông và Nộp phạt nguội trực tuyến**:\n\n` +
        `📌 **1. Quy định nộp phạt nguội trực tuyến 100%:**\n` +
        `- Bước 1: Truy cập Cổng Dịch vụ công Quốc gia (\`dichvucong.gov.vn\`) chọn mục "Nộp phạt vi phạm giao thông".\n` +
        `- Bước 2: Nhập số biên bản hoặc mã quyết định xử phạt.\n` +
        `- Bước 3: Thanh toán trực tuyến qua tài khoản ngân hàng hoặc ví điện tử.\n` +
        `- Bước 4: Đăng ký nhận lại giấy tờ tạm giữ gửi qua đường bưu điện về tận nhà tại xã Đức Hợp.\n\n` +
        `⚠️ **2. Các mức phạt vi phạm giao thông phổ biến (Nghị định 100 & 123):**\n` +
        `- **Nồng độ cồn:** Vi phạm nồng độ cồn bị phạt tiền từ 2.000.000đ - 8.000.000đ đối với xe máy, tước GPLX từ 10 - 24 tháng. Quy định tuyệt đối: *Đã uống rượu bia - Không lái xe*.\n` +
        `- **Không đội mũ bảo hiểm:** Phạt tiền từ 400.000đ - 600.000đ.\n` +
        `- **Vượt đèn đỏ:** Phạt tiền từ 800.000đ - 1.000.000đ đối với xe máy, tước GPLX 1 - 3 tháng.\n\n` +
        `💡 Cảnh giác: CSGT không bao giờ gọi điện yêu cầu chuyển tiền phạt qua tài khoản cá nhân!`,
      sources: [{ type: 'procedure', id: 'proc_phat_nguoi', title: 'Nộp phạt giao thông trực tuyến', code: 'TTHC-BCA-05' }]
    };
  }

  // 9. PHÒNG CHÁY CHỮA CHÁY (PCCC), BÌNH CỨU HỎA, THOÁT NẠN
  if (q.includes('pccc') || q.includes('cháy') || q.includes('chữa cháy') || q.includes('bình bột') || q.includes('thoát nạn') || q.includes('chuồng cọp') || q.includes('rò rỉ gas')) {
    return {
      answer: `Kính chào Quý công dân! Hướng dẫn an toàn **Phòng cháy chữa cháy (PCCC) & Thoát nạn tại hộ gia đình xã Đức Hợp**:\n\n` +
        `📌 **1. Trang bị bắt buộc tại gia đình:**\n` +
        `- Mỗi hộ gia đình trang bị tối thiểu **01 bình chữa cháy xách tay** (bình bột ABC MFZ4 hoặc bình khí CO2 MT3) đặt ở nơi khô ráo, dễ thấy, dễ lấy gần cửa ra vào hoặc cầu thang.\n` +
        `- Nhà có lồng sắt, "chuồng cọp" ban công **bắt buộc phải mở lối thoát nạn thứ 2** có chìa khóa để sẵn nơi quy định.\n\n` +
        `📌 **2. Quy tắc 4 bước xử lý khi phát hiện rò rỉ khí gas:**\n` +
        `1. **TUYỆT ĐỐI KHÔNG** bật tắt công tắc điện, quạt thông gió hay dùng bật lửa.\n` +
        `2. Lập tức khóa chặt van đầu bình gas.\n` +
        `3. Mở toang các cửa sổ, cửa đi để khí gas tự nhiên phân tán ra ngoài.\n` +
        `4. Ra ngoài vị trí an toàn gọi thợ gas hoặc gọi số Trực ban Công an xã Đức Hợp: **02213.815.999**.\n\n` +
        `📌 **3. Xử lý cháy dầu mỡ trong chảo bếp:**\n` +
        `- Tuyệt đối **KHÔNG dội nước** (nước sẽ làm dầu mỡ bắn tung tóe bùng cháy dữ dội hơn).\n` +
        `- Dùng nắp vung chảo đậy kín lại hoặc dùng khăn ướt, tấm chăn dập tắt ngọn lửa do thiếu oxy.\n\n` +
        `📞 Số điện thoại Báo cháy khẩn cấp Quốc gia: **114** | Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_pccc', title: 'An toàn PCCC hộ gia đình', code: 'TTHC-BCA-06' }]
    };
  }

  // 10. TỔNG QUÁT VỀ 22 THỦ ĐOẠN LỪA ĐẢO
  if (q.includes('thủ đoạn') || q.includes('lừa đảo') || q.includes('cảnh báo') || q.includes('tội phạm') || q.includes('mạng xã hội') || q.includes('chiêu trò')) {
    return {
      answer: `Công an xã Đức Hợp tổng hợp khuyến cáo về **22 phương thức, thủ đoạn lừa đảo phổ biến nhất trên không gian mạng hiện nay**:\n\n` +
        `🚨 **CÁC THỦ ĐOẠN ĐANG TẤN CÔNG NGƯỜI DÂN:**\n` +
        `1. Giả danh Công an gọi điện cài app VNeID/DVC giả mạo (.apk) chứa mã độc.\n` +
        `2. Giả danh Công an, Viện kiểm sát gọi điện dọa "lệnh bắt giam", ép chuyển tiền vào tài khoản an toàn.\n` +
        `3. Tuyển Cộng tác viên xử lý đơn hàng Shopee, TikTok, Lazada hưởng hoa hồng ảo.\n` +
        `4. Hack Facebook/Zalo gọi video Deepfake mượn tiền, báo tai nạn cấp cứu.\n` +
        `5. Lừa đảo đầu tư sàn tài chính, Forex, tiền ảo cam kết siêu lợi nhuận bao lỗ.\n` +
        `6. Cho vay tiền online lãi suất 0%, dụ nộp phí bảo hiểm khoản vay hoặc báo sai số tài khoản.\n` +
        `7. Bẫy tình cảm xuyên biên giới (Romance Scam), gửi thùng quà ngoại tệ kẹt hải quan.\n` +
        `8. Thông báo trúng thưởng xe SH, sổ tiết kiệm, yêu cầu nộp thuế trước bằng thẻ cào.\n` +
        `9. Giả mạo tin nhắn thương hiệu ngân hàng (SMS Brandname giả mạo bằng trạm BTS).\n` +
        `10. Báo tin "Con đang cấp cứu cần tiền mổ gấp" tại trường học.\n` +
        `11. Bán "Combo du lịch giá rẻ", phòng khách sạn, vé máy bay giả dịp lễ.\n` +
        `12. Lừa nâng cấp SIM 4G/5G dụ bấm cú pháp chuyển tiếp cuộc gọi (**21*) để cướp OTP.\n` +
        `13. Giả mạo biên lai chuyển tiền thành công (Fake Bill) để lấy hàng hóa.\n` +
        `14. Tuyển người mẫu nhí, bình chọn cuộc thi ảnh để dụ cha mẹ nạp tiền.\n` +
        `15. Dịch vụ "Thu hồi tiền treo, lấy lại tiền bị lừa qua mạng" (Bẫy lừa lần 2).\n` +
        `16. Bẫy quét mã QR độc hại (QR Phishing) dán đè tại quán ăn hoặc bưu phẩm.\n` +
        `17. Dụ dỗ mua bán, cho thuê tài khoản ngân hàng để rửa tiền.\n` +
        `18. Gửi bưu phẩm "Quà tri ân" thu tiền COD giả mạo.\n` +
        `19. Bẫy nợ "Chuyển tiền nhầm vào tài khoản" rồi ép vay nặng lãi.\n` +
        `20. Mạo danh nhân viên Điện lực, Viễn thông dọa cắt dịch vụ đòi nợ cước.\n` +
        `21. Mạo danh Trại hè quân đội, Khóa tu mùa hè miễn phí cho học sinh.\n` +
        `22. Giả mạo văn bản tuyển dụng công chức hoặc nhận tiền "chạy việc, chạy biên chế".\n\n` +
        `🛡️ **KHUYẾN CÁO "4 KHÔNG - 2 PHẢI" CỦA CÔNG AN XÃ ĐỨC HỢP:**\n` +
        `❌ **KHÔNG** bấm link lạ, không tải file .apk ngoài kho ứng dụng chính thức.\n` +
        `❌ **KHÔNG** cung cấp mã OTP, mật khẩu ngân hàng, thông tin căn cước cho bất kỳ ai.\n` +
        `❌ **KHÔNG** chuyển tiền cho người lạ khi chưa xác minh trực tiếp.\n` +
        `❌ **KHÔNG** tin vào các lời mời chào việc nhẹ lương cao hay đầu tư sinh lời khủng.\n` +
        `✅ **PHẢI** bình tĩnh, xác minh kỹ lưỡng với người thân và cơ quan chức năng.\n` +
        `✅ **PHẢI** báo ngay cho Công an xã Đức Hợp qua số **02213.815.999** khi có nghi vấn!`,
      sources: [
        { type: 'article', id: 'art_vneid_fake', title: 'Cảnh báo giả danh Công an cài VNeID giả mạo', slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao' },
        { type: 'article', id: 'art_ctv_shopee', title: 'Lừa đảo tuyển CTV đơn hàng Shopee, TikTok', slug: 'canh-bao-tuyen-cong-tac-vien-shopee-tiktok' },
        { type: 'article', id: 'art_deepfake', title: 'Deepfake hack tài khoản mượn tiền', slug: 'canh-bao-deepfake-hack-tai-khoan-muon-tien' }
      ]
    };
  }

  // 11. TRA CỨU TỪ 20 BỘ TRI THỨC PHÁP LUẬT & ANTT CHUYÊN SÂU
  for (const item of FULL_20_AI_KNOWLEDGE) {
    const matchedKeyword = item.keywords.some((k: string) => q.includes(k.toLowerCase()));
    const matchedTitle = q.includes(item.topic.toLowerCase()) || q.includes(item.category.toLowerCase());
    if (matchedKeyword || matchedTitle) {
      return {
        answer: `🏛️ **CÔNG AN XÃ ĐỨC HỢP - TRI THỨC PHÁP LUẬT & ANTT**\n` +
          `📌 **Chủ đề:** ${item.topic} (${item.category})\n\n` +
          `💡 **Tóm tắt nội dung:** ${item.summary}\n\n` +
          `📖 **Chi tiết quy định:**\n${item.content.trim()}\n\n` +
          `⚖️ **Căn cứ pháp lý:** ${item.legal_basis}\n` +
          `🏢 **Cơ quan giải quyết/hỗ trợ:** Công an xã Đức Hợp, tỉnh Hưng Yên\n` +
          `📞 **Đường dây nóng Trực ban 24/24h:** **02213.815.999**`,
        sources: [
          { type: 'knowledge', id: item.id, title: item.topic, topic: item.topic }
        ]
      };
    }
  }

  // 12. TRA CỨU CHI TIẾT TỪ 30 THỦ TỤC HÀNH CHÍNH CÔNG
  for (const proc of FULL_30_PROCEDURES) {
    const titleWords = proc.title.toLowerCase().split(' ').filter((w: string) => w.length > 3);
    const codeMatch = (proc.code ? q.includes(proc.code.toLowerCase()) : false) || (proc.id ? q.includes(proc.id.toLowerCase()) : false);
    const titleMatch = q.includes(proc.title.toLowerCase()) || (titleWords.length >= 2 && titleWords.filter((w: string) => q.includes(w)).length >= 2);
    if (codeMatch || titleMatch) {
      const docs = proc.required_documents.map((d: string) => `- ${d}`).join('\n');
      const steps = proc.steps.map((s: any) => `*Bước ${s.step}:* **${s.title}** - ${s.desc}`).join('\n');
      return {
        answer: `📋 **HƯỚNG DẪN THỦ TỤC HÀNH CHÍNH - CÔNG AN XÃ ĐỨC HỢP**\n\n` +
          `📌 **Tên thủ tục:** **${proc.title}** (Mã: \`${proc.code || 'Đang cập nhật'}\`)\n` +
          `🏢 **Cơ quan giải quyết:** ${proc.competent_authority}\n` +
          `👥 **Đối tượng thực hiện:** ${proc.target_audience}\n` +
          `⏱️ **Thời hạn giải quyết:** ${proc.processing_time || 'Theo quy định'}\n` +
          `💰 **Lệ phí:** ${proc.fee || 'Miễn phí'}\n\n` +
          `📑 **Thành phần hồ sơ cần chuẩn bị:**\n${docs}\n\n` +
          `🔄 **Trình tự các bước thực hiện:**\n${steps}\n\n` +
          (proc.online_url ? `🌐 **Cổng Dịch vụ công trực tuyến:** ${proc.online_url}\n` : '') +
          `📍 **Nơi tiếp nhận:** Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp). Trực ban: **02213.815.999**`,
        sources: [
          { type: 'procedure', id: proc.id, title: proc.title, code: proc.code }
        ]
      };
    }
  }

  // CÂU TRẢ LỜI MẶC ĐỊNH THÂN THIỆN, HỮU ÍCH
  return {
    answer: `Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin ghi nhận câu hỏi của Bác/Anh/Chị.\n\n` +
      `Bác/Anh/Chị có thể hỏi tôi chi tiết về:\n` +
      `1. **Thủ tục hành chính:** Đăng ký thường trú, tạm trú, cấp thẻ Căn cước mới, kích hoạt VNeID Mức 2, đăng ký xe máy, nộp phạt nguội.\n` +
      `2. **Cảnh báo lừa đảo:** Nhận diện 22 thủ đoạn tội phạm mạng và các bước xử lý khi nghi ngờ bị lừa.\n` +
      `3. **An toàn PCCC:** Kỹ năng thoát nạn, xử lý rò rỉ gas, trang bị bình cứu hỏa gia đình.\n\n` +
      `📍 Trụ sở tiếp dân: **Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên**.\n` +
      `📞 Đường dây nóng Trực ban phục vụ nhân dân 24/24h: **02213.815.999**.`,
    sources: [
      { type: 'procedure', id: 'proc_dang_ky_thuong_tru', title: 'Đăng ký thường trú trực tuyến trên VNeID', code: 'TTHC-VNEID-02' },
      { type: 'knowledge', id: 'kb_scam_01', title: 'Cẩm nang 22 thủ đoạn lừa đảo & Bộ quy tắc 4 Không - 2 Phải' }
    ]
  };
}


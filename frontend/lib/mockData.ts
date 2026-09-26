import { Category, Procedure, Article } from './api';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cu_tru',
    code: 'cu_tru',
    name: 'Cư trú & Căn cước VNeID',
    description: 'Thủ tục đăng ký thường trú, tạm trú, cấp thẻ Căn cước và tài khoản định danh điện tử',
    icon: 'UserCheck',
    order_num: 1,
  },
  {
    id: 'giao_thong',
    code: 'giao_thong',
    name: 'Giao thông & Đăng ký xe',
    description: 'Thủ tục đăng ký, cấp biển số xe mô tô, xe máy cấp xã; nộp phạt giao thông trực tuyến',
    icon: 'Bike',
    order_num: 2,
  },
  {
    id: 'pccc',
    code: 'pccc',
    name: 'Phòng cháy chữa cháy (PCCC)',
    description: 'Hướng dẫn an toàn PCCC hộ gia đình, nhà ở kết hợp sản xuất kinh doanh tại địa phương',
    icon: 'Flame',
    order_num: 3,
  },
  {
    id: 'canh_bao',
    code: 'canh_bao',
    name: 'Cảnh báo Tội phạm & Lừa đảo',
    description: 'Tuyên truyền nhận diện các thủ đoạn tội phạm công nghệ cao và lừa đảo chiếm đoạt tài sản',
    icon: 'ShieldAlert',
    order_num: 4,
  },
];

export const MOCK_PROCEDURES: Procedure[] = [
  {
    id: 'proc_thuong_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-01',
    title: 'Đăng ký thường trú tại xã Đức Hợp',
    target_audience: 'Công dân Việt Nam chuyển đến sinh sống hợp pháp tại xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc trực tuyến qua Cổng Dịch vụ công Bộ Công an',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).',
      'Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán, Giấy chứng nhận quyền sử dụng đất, v.v.).',
      'Ý kiến đồng ý của chủ hộ, chủ sở hữu chỗ ở hợp pháp (nếu nhập hộ vào người khác).',
      'Giấy tờ chứng minh quan hệ nhân thân (Giấy đăng ký kết hôn, Giấy khai sinh - nếu chưa có trên CSDLQG về dân cư).'
    ],
    steps: [
      { step: 1, title: 'Chuẩn bị hồ sơ', desc: 'Chuẩn bị đầy đủ các giấy tờ theo danh mục nêu trên hoặc tải mẫu CT01 điền trước.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Đến nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (Thôn Nho Lâm) hoặc nộp online qua Cổng DVC Bộ Công an.' },
      { step: 3, title: 'Tiếp nhận & Kiểm tra', desc: 'Cán bộ Công an xã kiểm tra tính pháp lý của hồ sơ, cấp Giấy tiếp nhận và hẹn trả kết quả.' },
      { step: 4, title: 'Nhận kết quả', desc: 'Nhận thông báo kết quả giải quyết cư trú (Mẫu CT08) hoặc kiểm tra cập nhật trên tài khoản VNeID.' }
    ],
    processing_time: '07 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ',
    fee: '20.000 VNĐ (Trực tiếp) / 10.000 VNĐ (Trực tuyến qua Cổng DVC)',
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26288',
    views_count: 142,
    forms: [
      {
        id: 'form_ct01',
        form_code: 'CT01',
        name: 'Tờ khai thay đổi thông tin cư trú (Mẫu CT01 Bộ Công an)',
        file_url: 'https://dichvucong.bocongan.gov.vn',
        guide_url: 'https://dichvucong.bocongan.gov.vn'
      }
    ]
  },
  {
    id: 'proc_dang_ky_xe',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-02',
    title: 'Đăng ký, cấp biển số xe mô tô, xe gắn máy lần đầu tại Công an xã',
    target_audience: 'Cá nhân có nơi cư trú (thường trú, tạm trú) tại xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Kê khai trực tuyến trên Cổng DVC, sau đó mang xe và hồ sơ giấy đến Trụ sở Công an xã Đức Hợp để bấm biển',
    required_documents: [
      'Giấy khai đăng ký xe (Kê khai online trên Cổng Dịch vụ công Bộ Công an để lấy mã hồ sơ).',
      'Giấy tờ của chủ xe: Căn cước công dân hoặc sử dụng tài khoản VNeID Mức 2.',
      'Chứng từ nguồn gốc xe: Dữ liệu hóa đơn điện tử hoặc Hóa đơn giá trị gia tăng.',
      'Chứng từ lệ phí trước bạ: Dữ liệu nộp lệ phí trước bạ điện tử hoặc biên lai nộp tiền.'
    ],
    steps: [
      { step: 1, title: 'Kê khai online', desc: 'Truy cập Cổng DVC Bộ Công an, chọn dịch vụ Đăng ký xe lần đầu, điền thông tin và nhận mã hồ sơ.' },
      { step: 2, title: 'Đưa xe đến Công an xã', desc: 'Mang xe mô tô và toàn bộ hồ sơ giấy tờ gốc đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm).' },
      { step: 3, title: 'Kiểm tra xe & Bấm biển', desc: 'Cán bộ Công an xã kiểm tra thực tế xe, chà số khung số máy và hướng dẫn bấm biển số trên hệ thống.' },
      { step: 4, title: 'Nhận biển số', desc: 'Nhận biển số ngay trong ngày và nhận giấy hẹn trả Chứng nhận đăng ký xe (không quá 02 ngày làm việc).' }
    ],
    processing_time: 'Bấm biển trong ngày; Trả Chứng nhận đăng ký xe không quá 02 ngày làm việc',
    fee: 'Theo biểu mức thu lệ phí đăng ký xe khu vực nông thôn',
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26363',
    views_count: 98,
    forms: [
      {
        id: 'form_dk_xe',
        form_code: 'ĐK-XE',
        name: 'Giấy khai đăng ký xe mô tô, xe gắn máy',
        file_url: 'https://dichvucong.bocongan.gov.vn',
      }
    ]
  },
  {
    id: 'proc_tam_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-03',
    title: 'Đăng ký tạm trú, gia hạn tạm trú tại xã Đức Hợp',
    target_audience: 'Công dân đến sinh sống tại xã Đức Hợp ngoài nơi thường trú từ 30 ngày trở lên',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Trụ sở Công an xã hoặc trực tuyến qua Cổng DVC Bộ Công an / VNeID',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Giấy tờ chứng minh chỗ ở hợp pháp (Hợp đồng thuê nhà, mượn nhà hoặc văn bản đồng ý của chủ trọ).',
      'Căn cước công dân hoặc số định danh cá nhân của người đăng ký.'
    ],
    steps: [
      { step: 1, title: 'Kê khai hồ sơ', desc: 'Điền mẫu CT01 và xin xác nhận của chủ nhà trọ/chỗ ở hợp pháp.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Nộp trực tiếp tại Công an xã Đức Hợp hoặc nộp online qua Cổng DVC.' },
      { step: 3, title: 'Kiểm tra xác minh', desc: 'Cán bộ kiểm tra hồ sơ và xác minh thực tế nơi ở trọ.' },
      { step: 4, title: 'Trả kết quả', desc: 'Nhận kết quả đăng ký tạm trú (thời hạn tối đa 02 năm/lần gia hạn).' }
    ],
    processing_time: '03 ngày làm việc kể từ ngày nhận đủ hồ sơ',
    fee: '15.000 VNĐ (trực tiếp) / 7.000 VNĐ (trực tuyến)',
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26291',
    views_count: 76,
    forms: []
  },
  {
    id: 'proc_can_cuoc',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-04',
    title: 'Cấp thẻ Căn cước cho người dân theo Luật Căn cước 2023',
    target_audience: 'Công dân từ đủ 14 tuổi trở lên bắt buộc; Công dân từ 0 - 14 tuổi cấp theo nhu cầu',
    competent_authority: 'Công an tỉnh Hưng Yên tiếp nhận hồ sơ; Công an xã Đức Hợp hướng dẫn',
    execution_method: 'Đăng ký lịch hẹn online trên Cổng DVC, đến thu nhận vân tay, mống mắt, ảnh chân dung',
    required_documents: [
      'Đối với trẻ dưới 6 tuổi: Người đại diện hợp pháp kê khai qua Cổng DVC (không thu nhận sinh trắc học).',
      'Đối với công dân từ 6 tuổi trở lên: Thu nhận ảnh khuôn mặt, vân tay và quét mống mắt công nghệ cao.',
      'Không cần mang giấy tờ nếu thông tin đã đầy đủ trên CSDL quốc gia về dân cư.'
    ],
    steps: [
      { step: 1, title: 'Đặt lịch hẹn', desc: 'Đặt lịch trên Cổng DVC hoặc ứng dụng VNeID.' },
      { step: 2, title: 'Thu nhận sinh trắc', desc: 'Thu nhận vân tay, ảnh chân dung và quét mống mắt.' },
      { step: 3, title: 'Kiểm tra xác nhận', desc: 'Ký biên bản xác nhận thông tin in trên thẻ Căn cước.' },
      { step: 4, title: 'Nhận thẻ', desc: 'Nhận thẻ Căn cước trực tiếp hoặc qua dịch vụ bưu điện về tận nhà.' }
    ],
    processing_time: '07 ngày làm việc',
    fee: 'Miễn phí cấp lần đầu cho công dân đủ 14 tuổi',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 215,
    forms: []
  },
  {
    id: 'proc_phat_nguoi',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-05',
    title: 'Nộp phạt vi phạm giao thông (Phạt nguội) trực tuyến',
    target_audience: 'Cá nhân, tổ chức bị xử phạt vi phạm hành chính giao thông',
    competent_authority: 'Lực lượng CSGT Công an tỉnh / Công an xã',
    execution_method: 'Trực tuyến 100% trên Cổng Dịch vụ công Quốc gia',
    required_documents: [
      'Biên bản vi phạm hoặc Thông báo vi phạm giao thông (kèm mã số quyết định).',
      'Tài khoản định danh điện tử VNeID hoặc tài khoản Cổng DVC Quốc gia.',
      'Thẻ ngân hàng hoặc tài khoản thanh toán online để nộp tiền.'
    ],
    steps: [
      { step: 1, title: 'Tra cứu quyết định', desc: 'Vào Cổng DVC Quốc gia -> Tra cứu xử phạt vi phạm giao thông.' },
      { step: 2, title: 'Thanh toán trực tuyến', desc: 'Chọn ngân hàng hoặc ví điện tử để thanh toán tiền nộp phạt.' },
      { step: 3, title: 'Nhận lại giấy tờ', desc: 'Đăng ký nhận lại giấy tờ tạm giữ qua bưu chính về địa chỉ nhà tại xã Đức Hợp.' }
    ],
    processing_time: 'Giải quyết ngay trên môi trường điện tử',
    fee: 'Theo số tiền ghi trên Quyết định xử phạt',
    online_url: 'https://dichvucong.gov.vn/p/home/dvc-thanh-toan-vi-pham-giao-thong.html',
    views_count: 189,
    forms: []
  },
  {
    id: 'proc_pccc',
    category_id: 'pccc',
    code: 'TTHC-BCA-06',
    title: 'Hướng dẫn an toàn PCCC hộ gia đình, nhà ở kết hợp kinh doanh',
    target_audience: 'Toàn thể các hộ gia đình sinh sống và kinh doanh trên địa bàn xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp phối hợp UBND xã Đức Hợp',
    execution_method: 'Đăng ký cam kết an toàn PCCC trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)',
    required_documents: [
      'Bản cam kết bảo đảm an toàn PCCC của chủ hộ gia đình.',
      'Sơ đồ phương án thoát nạn khi xảy ra sự cố cháy nổ.',
      'Biên bản kiểm tra an toàn PCCC định kỳ.'
    ],
    steps: [
      { step: 1, title: 'Trang bị phương tiện', desc: 'Trang bị tối thiểu 01 bình chữa cháy xách tay và mở lối thoát nạn thứ 2.' },
      { step: 2, title: 'Ký cam kết', desc: 'Nhận mẫu và ký cam kết an toàn PCCC với Công an xã Đức Hợp.' },
      { step: 3, title: 'Tập huấn kỹ năng', desc: 'Tham gia các buổi tuyên truyền, diễn tập PCCC tổ liên gia tại thôn xóm.' }
    ],
    processing_time: 'Trong ngày',
    fee: 'Miễn phí',
    online_url: undefined,
    views_count: 67,
    forms: []
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art_vneid_fake',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 1: Giả danh Công an gọi điện yêu cầu cài đặt App VNeID giả mạo',
    slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao',
    summary: 'Công an xã Đức Hợp cảnh báo thủ đoạn các đối tượng tự xưng là cán bộ Công an hướng dẫn kích hoạt định danh điện tử qua đường link lạ nhằm chiếm đoạt tài khoản ngân hàng.',
    content: '<p>Thời gian gần đây, xuất hiện thủ đoạn lừa đảo tinh vi: Đối tượng gọi điện tự xưng là cán bộ Công an thông báo hồ sơ định danh điện tử VNeID bị sai sót, yêu cầu người dân tải app qua đường link đuôi .apk do đối tượng gửi qua Zalo. Khi cài đặt, phần mềm gián điệp sẽ chiếm quyền điều khiển điện thoại và rút sạch tiền trong tài khoản ngân hàng.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Gọi điện tự xưng là Công an thông báo hồ sơ VNeID bị sai lệch hoặc đang dính líu vụ án.',
      'Yêu cầu kết bạn Zalo và gửi đường link tải app lạ (đuôi .apk không có trên Google Play / App Store).',
      'Yêu cầu cấp quyền trợ năng (Accessibility) và quay khuôn mặt, đọc mã OTP ngân hàng.'
    ],
    prevention_advice: [
      'Lực lượng Công an xã Đức Hợp KHÔNG BAO GIỜ yêu cầu công dân cài đặt phần mềm qua đường link lạ gửi ngoài kho ứng dụng chính thức.',
      'Tuyệt đối KHÔNG bấm vào link lạ, KHÔNG tải file có đuôi .apk.',
      'KHÔNG cung cấp mật khẩu, mã xác thực OTP ngân hàng cho bất kỳ ai.',
      'Khi cần hỗ trợ về VNeID, trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi số Trực ban 02213.815.999.'
    ],
    views_count: 320,
    created_at: '26/09/2026'
  },
  {
    id: 'art_ctv_shopee',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 2: Lừa đảo tuyển \'Cộng tác viên xử lý đơn hàng ảo\' Shopee, TikTok',
    slug: 'canh-bao-tuyen-cong-tac-vien-shopee-tiktok',
    summary: 'Dụ dỗ làm nhiệm vụ xem video, chuyển tiền mua đơn hàng hưởng hoa hồng 10-20%, sau đó giam tiền và chiếm đoạt.',
    content: '<p>Thủ đoạn đánh vào nhu cầu kiếm thêm thu nhập tại nhà. Ban đầu đối tượng trả hoa hồng sòng phẳng vài chục nghìn. Khi nạn nhân chuyển số tiền lớn (hàng chục triệu), chúng báo lỗi hệ thống bắt nộp thêm rồi cắt liên lạc.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Quảng cáo việc nhẹ lương cao, ngồi nhà kiếm 300k - 500k/ngày.',
      'Yêu cầu nạp tiền vào tài khoản cá nhân để kích cầu đơn hàng.',
      'Bịa ra lỗi cú pháp, bắt nạp thêm tiền mới được rút vốn.'
    ],
    prevention_advice: [
      'Tuyệt đối không tham gia các hội nhóm làm nhiệm vụ nạp tiền hưởng hoa hồng.',
      'Các sàn TMĐT không tuyển CTV thanh toán đơn hàng ảo qua chuyển khoản cá nhân.',
      'Báo ngay cho Công an xã Đức Hợp khi phát hiện dấu hiệu lừa đảo.'
    ],
    views_count: 180,
    created_at: '25/09/2026'
  },
  {
    id: 'art_tien_ao',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 3: Lừa đảo đầu tư sàn tài chính, tiền ảo cam kết lãi khủng',
    slug: 'canh-bao-lua-dao-san-tai-chinh-tien-ao',
    summary: 'Lập các sàn giao dịch giả mạo, cam kết lợi nhuận 30-50%/tháng, can thiệp kỹ thuật cho nhà đầu tư cháy sạch tài khoản.',
    content: '<p>Kẻ lừa đảo đóng vai chuyên gia tài chính thành đạt khoe ảnh giàu sang trên mạng, dụ dỗ người dân tham gia đầu tư vào app lạ không được cấp phép tại Việt Nam.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Cam kết đầu tư chắc thắng, bao lỗ, lợi nhuận cực cao.',
      'Cho rút lãi nhỏ ban đầu để tạo niềm tin.',
      'Khi muốn rút tiền gốc thì bắt nộp thuế, phí mở cổng rút tiền.'
    ],
    prevention_advice: [
      'Pháp luật Việt Nam không công nhận và bảo hộ tiền ảo hay sàn Forex.',
      'Cảnh giác cao độ với các lời mời đầu tư lãi suất bất thường.'
    ],
    views_count: 145,
    created_at: '24/09/2026'
  }
];

export function getSmartLocalChatAnswer(query: string): { answer: string; sources: any[] } {
  const q = query.toLowerCase();

  if (q.includes('thường trú') || q.includes('nhập khẩu') || q.includes('hộ khẩu') || q.includes('cư trú') || q.includes('tạm trú')) {
    return {
      answer: `Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin giải đáp câu hỏi của Bác/Anh/Chị như sau:\n\n` +
        `📌 **1. Thành phần hồ sơ cần chuẩn bị:**\n` +
        `- Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).\n` +
        `- Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng chuyển nhượng quyền sử dụng đất, Hợp đồng thuê nhà).\n` +
        `- Ý kiến đồng ý của chủ hộ/chủ sở hữu chỗ ở nếu nhập hộ vào người khác.\n\n` +
        `📌 **2. Nơi nộp hồ sơ & Trình tự thực hiện:**\n` +
        `- Nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (Trụ sở tại Thôn Nho Lâm, xã Đức Hợp).\n` +
        `- Hoặc nộp trực tuyến qua Cổng Dịch vụ công Bộ Công an để tiết kiệm thời gian.\n\n` +
        `📌 **3. Thời hạn giải quyết & Lệ phí:**\n` +
        `- Thời hạn giải quyết: **07 ngày làm việc** (thường trú) hoặc **03 ngày làm việc** (tạm trú).\n` +
        `- Lệ phí: 20.000 VNĐ (nộp trực tiếp) hoặc 10.000 VNĐ (khi nộp trực tuyến qua Cổng DVC).\n\n` +
        `📞 Nếu cần hỗ trợ thêm, kính mời Quý công dân đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi số Trực ban **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_thuong_tru', title: 'Đăng ký thường trú tại xã Đức Hợp', code: 'TTHC-BCA-01' }]
    };
  }

  if (q.includes('xe') || q.includes('biển số') || q.includes('đăng ký xe') || q.includes('xe máy')) {
    return {
      answer: `Kính chào Quý công dân! Về thủ tục **Đăng ký, cấp biển số xe mô tô, xe máy tại Công an xã Đức Hợp**:\n\n` +
        `📌 **1. Giấy tờ cần mang theo:**\n` +
        `- Căn cước công dân hoặc tài khoản định danh điện tử VNeID Mức 2 của chủ xe.\n` +
        `- Hóa đơn giá trị gia tăng (chứng từ nguồn gốc xe).\n` +
        `- Biên lai hoặc mã nộp lệ phí trước bạ điện tử.\n\n` +
        `📌 **2. Các bước thực hiện:**\n` +
        `- Bước 1: Kê khai thông tin đăng ký xe online trên Cổng DVC Bộ Công an để lấy mã hồ sơ.\n` +
        `- Bước 2: Mang xe mô tô cùng toàn bộ hồ sơ giấy tờ gốc đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm).\n` +
        `- Bước 3: Cán bộ Công an xã kiểm tra thực tế xe, chà số khung số máy và hướng dẫn bấm biển số.\n` +
        `- Bước 4: Nhận biển số xe ngay trong ngày và nhận giấy hẹn trả Chứng nhận đăng ký xe (trong vòng 02 ngày làm việc).\n\n` +
        `📞 Đường dây nóng Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_dang_ky_xe', title: 'Đăng ký xe máy cấp xã', code: 'TTHC-BCA-02' }]
    };
  }

  if (q.includes('căn cước') || q.includes('cccd') || q.includes('mống mắt')) {
    return {
      answer: `Kính chào Quý công dân! Về quy định **Cấp thẻ Căn cước mới theo Luật Căn cước 2023**:\n\n` +
        `📌 **1. Độ tuổi và hình thức cấp:**\n` +
        `- Trẻ em từ 0 đến dưới 6 tuổi: Cấp thẻ Căn cước theo **nhu cầu**, phụ huynh kê khai online qua Cổng DVC (không thu nhận vân tay, mống mắt).\n` +
        `- Trẻ em từ 6 đến dưới 14 tuổi: Cấp theo **nhu cầu**, thu nhận ảnh khuôn mặt, vân tay và **mống mắt**.\n` +
        `- Người từ đủ 14 tuổi trở lên: **Bắt buộc** cấp thẻ Căn cước.\n\n` +
        `📌 **2. Nơi thực hiện:**\n` +
        `- Đăng ký lịch hẹn trên Cổng DVC hoặc VNeID, Công an xã Đức Hợp hỗ trợ hướng dẫn bà con thủ tục.\n` +
        `- Thời hạn trả thẻ: 07 ngày làm việc (có thể đăng ký bưu điện chuyển về tận nhà).\n\n` +
        `📞 Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [{ type: 'procedure', id: 'proc_can_cuoc', title: 'Cấp thẻ Căn cước theo Luật 2023', code: 'TTHC-BCA-04' }]
    };
  }

  if (q.includes('lừa đảo') || q.includes('mạo danh') || q.includes('app') || q.includes('vneid') || q.includes('shopee') || q.includes('tiền')) {
    return {
      answer: `Công an xã Đức Hợp xin đặc biệt khuyến cáo Quý công dân về thủ đoạn lừa đảo qua mạng:\n\n` +
        `⚠️ **1. Các thủ đoạn lừa đảo nguy hiểm:**\n` +
        `- Mạo danh Công an gọi điện thông báo sai lệch VNeID, gửi link lạ (file .apk) chứa mã độc rút sạch tiền ngân hàng.\n` +
        `- Tuyển cộng tác viên đơn hàng Shopee, TikTok hoa hồng 20% dụ nạp tiền rồi chiếm đoạt.\n` +
        `- Gọi video Deepfake giả mặt giọng người thân mượn tiền cấp cứu.\n\n` +
        `🚨 **2. KHẲNG ĐỊNH CỦA CÔNG AN XÃ ĐỨC HỢP:**\n` +
        `- Lực lượng Công an **không bao giờ** làm việc qua mạng xã hội và không bao giờ yêu cầu công dân chuyển tiền nộp phạt qua tài khoản cá nhân!\n` +
        `- Khi nhận cuộc gọi nghi vấn, bà con hãy cúp máy ngay và liên hệ Trực ban Công an xã Đức Hợp qua số **02213.815.999** (Trụ sở tại Thôn Nho Lâm).`,
      sources: [{ type: 'article', id: 'art_vneid_fake', title: 'Cảnh báo giả danh Công an cài VNeID giả mạo', slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao' }]
    };
  }

  if (q.includes('pccc') || q.includes('cháy') || q.includes('chữa cháy')) {
    return {
      answer: `Kính chào Quý công dân! Về hướng dẫn **An toàn Phòng cháy chữa cháy (PCCC) hộ gia đình tại xã Đức Hợp**:\n\n` +
        `📌 **1. Trang thiết bị bắt buộc:**\n` +
        `- Trang bị tối thiểu **01 bình chữa cháy** xách tay (bình bột MFZ4 hoặc bình khí CO2) tại nơi dễ thấy, dễ lấy.\n` +
        `- Mở lối **thoát nạn** thứ 2 (cửa mở ra ban công, lối lên mái, chuồng cọp phải có cửa thoát hiểm).\n\n` +
        `📌 **2. Biện pháp an toàn điện và kinh doanh:**\n` +
        `- Không câu móc điện tùy tiện, lắp aptomat chống giật riêng cho từng khu vực.\n` +
        `- Ký cam kết an toàn PCCC định kỳ với Công an xã Đức Hợp.\n\n` +
        `📞 Trực ban Công an xã Đức Hợp: **02213.815.999** (Thôn Nho Lâm).`,
      sources: [{ type: 'procedure', id: 'proc_pccc', title: 'An toàn PCCC hộ gia đình', code: 'TTHC-BCA-06' }]
    };
  }

  return {
    answer: `Kính chào Quý công dân! Trợ lý số Công an xã Đức Hợp xin ghi nhận câu hỏi của Bác/Anh/Chị.\n\n` +
      `Bác/Anh/Chị có thể tra cứu nhanh các thủ tục tại danh mục trang chủ, hoặc đến trực tiếp Trụ sở Công an xã Đức Hợp tại **Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên** để được cán bộ hướng dẫn chu đáo.\n\n` +
      `📞 Số điện thoại đường dây nóng Trực ban tiếp dân 24/24h: **02213.815.999**.`,
    sources: [
      { type: 'procedure', id: 'proc_thuong_tru', title: 'Đăng ký thường trú', code: 'TTHC-BCA-01' },
      { type: 'procedure', id: 'proc_dang_ky_xe', title: 'Đăng ký xe máy', code: 'TTHC-BCA-02' }
    ]
  };
}

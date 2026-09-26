export interface QuizQuestion {
  id: number;
  question: string;
  scenario?: string;
  category: 'lua_dao' | 'phap_luat' | 'cu_tru' | 'pccc' | 'giao_thong';
  categoryLabel: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'lua_dao',
    categoryLabel: 'Nhận diện Lừa đảo Công nghệ cao',
    question: 'Có đối tượng gọi điện tự xưng là cán bộ Công an xã, thông báo tài khoản VNeID của bạn bị lỗi và yêu cầu bấm vào đường link lạ để tải file ".apk" kích hoạt từ xa. Bạn cần xử lý thế nào?',
    scenario: 'Tình huống giả mạo cơ quan Công an đang diễn ra phổ biến trên địa bàn.',
    options: [
      { key: 'A', text: 'Làm theo hướng dẫn ngay để tránh bị khóa tài khoản định danh' },
      { key: 'B', text: 'Nhờ người nhà tải giúp ứng dụng về máy' },
      { key: 'C', text: 'Tuyệt đối KHÔNG bấm link, KHÔNG cài app lạ; gọi hotline 02213.815.999 hoặc đến Trụ sở Công an xã Đức Hợp tại Thôn Nho Lâm để xác minh' },
      { key: 'D', text: 'Cung cấp mã OTP ngân hàng để chứng minh mình là chủ tài khoản' },
    ],
    correctKey: 'C',
    explanation: 'Công an xã Đức Hợp KHÔNG BAO GIỜ gọi điện yêu cầu công dân cài đặt ứng dụng qua đường link lạ (.apk) hoặc cung cấp mật khẩu, mã OTP ngân hàng. Cài đặt các ứng dụng này sẽ làm điện thoại bị chiếm quyền điều khiển và mất toàn bộ tiền trong tài khoản.',
    legalBasis: 'Khuyến cáo khẩn của Cục An ninh mạng và Phòng chống tội phạm CNC (Bộ Công an).'
  },
  {
    id: 2,
    category: 'cu_tru',
    categoryLabel: 'Luật Cư trú & Đăng ký thường trú',
    question: 'Khi công dân chuyển đến sinh sống hợp pháp tại xã Đức Hợp, trong thời hạn bao lâu phải thực hiện thủ tục đăng ký thường trú hoặc tạm trú?',
    options: [
      { key: 'A', text: 'Trong thời hạn 30 ngày kể từ ngày đến chỗ ở hợp pháp mới' },
      { key: 'B', text: 'Trong thời hạn 60 ngày' },
      { key: 'C', text: 'Trong thời hạn 90 ngày' },
      { key: 'D', text: 'Không giới hạn thời gian, khi nào rảnh thì đăng ký' },
    ],
    correctKey: 'A',
    explanation: 'Theo Luật Cư trú năm 2020, công dân chuyển đến chỗ ở hợp pháp mới ngoài phạm vi đơn vị hành chính cấp xã nơi đã đăng ký thường trú thì trong thời hạn 30 ngày phải làm thủ tục đăng ký thường trú hoặc tạm trú.',
    legalBasis: 'Điều 22, Điều 27 Luật Cư trú năm 2020.'
  },
  {
    id: 3,
    category: 'lua_dao',
    categoryLabel: 'Cảnh giác Bẫy việc làm Online',
    question: 'Bạn thấy quảng cáo tuyển "Cộng tác viên xem video TikTok, giật đơn sàn thương mại điện tử" nhận hoa hồng 30-50%/ngày, ban đầu trả thưởng nhỏ rồi yêu cầu nạp tiền lớn để "giải cứu đơn hàng". Đây là hình thức gì?',
    options: [
      { key: 'A', text: 'Cơ hội việc làm online uy tín và thu nhập cao' },
      { key: 'B', text: 'Thủ đoạn lừa đảo chiếm đoạt tài sản trên không gian mạng' },
      { key: 'C', text: 'Chương trình tri ân khuyến mãi của sàn thương mại điện tử' },
      { key: 'D', text: 'Hình thức gửi tiết kiệm online lãi suất cao' },
    ],
    correctKey: 'B',
    explanation: 'Đây là thủ đoạn lừa đảo nạp tiền làm nhiệm vụ CTV rất điển hình. Khi số tiền nạp lên đến hàng chục, hàng trăm triệu đồng, đối tượng sẽ viện cớ lỗi hệ thống, sai cú pháp, yêu cầu nạp thêm rồi cắt đứt liên lạc chiếm đoạt tài sản.',
    legalBasis: 'Điều 174 Bộ luật Hình sự (Tội lừa đảo chiếm đoạt tài sản).'
  },
  {
    id: 4,
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe cấp xã',
    question: 'Hiện nay, người dân cư trú tại xã Đức Hợp khi mua xe máy, xe mô tô mới có thể thực hiện đăng ký bấm biển số xe ở đâu?',
    options: [
      { key: 'A', text: 'Bắt buộc phải lên Công an huyện cũ' },
      { key: 'B', text: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp)' },
      { key: 'C', text: 'Lên thẳng Công an tỉnh Hưng Yên' },
      { key: 'D', text: 'Tự ra tiệm sửa xe máy bấm biển' },
    ],
    correctKey: 'B',
    explanation: 'Thực hiện phân cấp đăng ký phương tiện của Bộ Công an, Công an xã Đức Hợp đã được trang bị đầy đủ cơ sở vật chất để giải quyết thủ tục đăng ký, cấp biển số xe mô tô, xe gắn máy trực tiếp cho người dân tại địa phương.',
    legalBasis: 'Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 5,
    category: 'phap_luat',
    categoryLabel: 'Luật Căn cước năm 2023',
    question: 'Theo Luật Căn cước năm 2023 (có hiệu lực từ 01/7/2024), độ tuổi nào bắt buộc phải thực hiện cấp thẻ Căn cước?',
    options: [
      { key: 'A', text: 'Công dân Việt Nam từ đủ 14 tuổi trở lên' },
      { key: 'B', text: 'Công dân từ đủ 18 tuổi trở lên' },
      { key: 'C', text: 'Công dân từ đủ 20 tuổi trở lên' },
      { key: 'D', text: 'Mọi công dân không phân biệt độ tuổi' },
    ],
    correctKey: 'A',
    explanation: 'Theo Luật Căn cước 2023, người từ đủ 14 tuổi trở lên bắt buộc phải làm thủ tục cấp thẻ Căn cước. Trẻ em từ 0 đến dưới 14 tuổi được cấp thẻ Căn cước theo nhu cầu của cha mẹ hoặc người giám hộ.',
    legalBasis: 'Điều 19 Luật Căn cước số 26/2023/QH15.'
  },
  {
    id: 6,
    category: 'lua_dao',
    categoryLabel: 'Deepfake giả dạng khuôn mặt',
    question: 'Bạn nhận được cuộc gọi video từ mạng xã hội của người thân vay tiền gấp, nhưng video bị chập chờn, mờ nhoè, tiếng gián đoạn và tài khoản nhận tiền mang tên người khác. Bạn nên làm gì?',
    options: [
      { key: 'A', text: 'Chuyển tiền ngay vì đã nhìn thấy mặt người thân' },
      { key: 'B', text: 'Ngắt cuộc gọi, gọi lại bằng số điện thoại di động thông thường hoặc gặp trực tiếp để kiểm chứng' },
      { key: 'C', text: 'Chuyển 50% số tiền trước để kiểm tra' },
      { key: 'D', text: 'Cung cấp mật khẩu mạng xã hội cho người đó' },
    ],
    correctKey: 'B',
    explanation: 'Kẻ xấu dùng công nghệ AI Deepfake cắt ghép khuôn mặt và giọng nói của người thân để gọi video vài giây tạo lòng tin, sau đó yêu cầu chuyển tiền vào tài khoản mượn/tài khoản rác. Luôn gọi điện thoại số di động truyền thống để kiểm chứng!',
    legalBasis: 'Cảnh báo tội phạm công nghệ cao Công an tỉnh Hưng Yên.'
  },
  {
    id: 7,
    category: 'pccc',
    categoryLabel: 'Phòng cháy chữa cháy hộ gia đình',
    question: 'Giải pháp nào sau đây là quan trọng và thiết thực nhất đối với công tác PCCC tại nhà ở riêng lẻ, nhà ở kết hợp kinh doanh?',
    options: [
      { key: 'A', text: 'Hàn kín chuồng cọp ban công không để lối mở nào' },
      { key: 'B', text: 'Trang bị ít nhất 01 bình chữa cháy xách tay, mở lối thoát nạn thứ 2 và ngắt nguồn điện không cần thiết khi vắng nhà' },
      { key: 'C', text: 'Chứa thật nhiều can xăng dầu trong nhà để phòng khi mất điện' },
      { key: 'D', text: 'Không cần trang bị bình chữa cháy nếu nhà gần ao hồ' },
    ],
    correctKey: 'B',
    explanation: 'Công an xã Đức Hợp tuyên truyền phong trào "Nhà tôi có bình chữa cháy", mỗi hộ gia đình chủ động mở lối thoát nạn thứ 2 (cắt chuồng cọp làm cửa mở dự phòng) và trang bị bình bột/khí CO2 để xử lý đám cháy ngay từ ban đầu.',
    legalBasis: 'Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ về công tác PCCC trong tình hình mới.'
  },
  {
    id: 8,
    category: 'lua_dao',
    categoryLabel: 'Giả danh thông báo Phạt nguội',
    question: 'Có người tự xưng là cán bộ Cảnh sát giao thông gọi điện báo bạn có vi phạm giao thông chưa nộp phạt và yêu cầu chuyển tiền phạt vào "tài khoản tạm giữ" để xử lý ngay. Điều này đúng hay sai?',
    options: [
      { key: 'A', text: 'Đúng, phải chuyển ngay để không bị tước giấy phép lái xe' },
      { key: 'B', text: 'Hoàn toàn SAI và là lừa đảo. Cơ quan Công an KHÔNG BAO GIỜ phạt nguội qua điện thoại hay thu tiền vào tài khoản cá nhân' },
      { key: 'C', text: 'Đúng nếu người gọi đọc đúng biển số xe của bạn' },
      { key: 'D', text: 'Đúng, có thể thương lượng giảm 50% tiền phạt' },
    ],
    correctKey: 'B',
    explanation: 'Lực lượng CSGT gửi thông báo vi phạm bằng văn bản chính thức hoặc thông báo trên VNeID / Cổng DVC. Cơ quan chức năng không gọi điện yêu cầu công dân chuyển tiền nộp phạt vào bất kỳ tài khoản cá nhân nào.',
    legalBasis: 'Quy định về quy trình xử phạt vi phạm hành chính của Bộ Công an.'
  },
  {
    id: 9,
    category: 'cu_tru',
    categoryLabel: 'Định danh điện tử VNeID Mức 2',
    question: 'Công dân muốn nâng cấp tài khoản định danh điện tử từ VNeID Mức 1 lên VNeID Mức 2 thì cần thực hiện như thế nào?',
    options: [
      { key: 'A', text: 'Tự bấm nâng cấp trên app điện thoại tại nhà' },
      { key: 'B', text: 'Nhờ các nhóm dịch vụ hỗ trợ trên Facebook làm hộ' },
      { key: 'C', text: 'Mang theo thẻ CCCD gắn chip đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ Công an thu nhận vân tay, ảnh mặt và kích hoạt' },
      { key: 'D', text: 'Gửi ảnh CCCD cho tài khoản Zalo lạ' },
    ],
    correctKey: 'C',
    explanation: 'Tài khoản VNeID Mức 2 chứa dữ liệu sinh trắc học (vân tay, ảnh khuôn mặt) đối sánh với cơ sở dữ liệu quốc gia, bắt buộc phải được cán bộ Công an trực tiếp thu nhận bằng thiết bị chuyên dụng tại trụ sở Công an.',
    legalBasis: 'Nghị định 59/2022/NĐ-CP về định danh và xác thực điện tử.'
  },
  {
    id: 10,
    category: 'phap_luat',
    categoryLabel: 'Đường dây nóng Công an xã',
    question: 'Số điện thoại đường dây nóng, trực ban 24/7 của Công an xã Đức Hợp, tỉnh Hưng Yên để nhân dân tố giác tội phạm và liên hệ giải quyết thủ tục là số nào?',
    options: [
      { key: 'A', text: '02213.815.999' },
      { key: 'B', text: '02213.999.888' },
      { key: 'C', text: '1900.8198' },
      { key: 'D', text: '0988.113.113' },
    ],
    correctKey: 'A',
    explanation: 'Số điện thoại đường dây nóng trực ban 24/24h chính thức của Công an xã Đức Hợp là 02213.815.999. Trụ sở tại Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên.',
    legalBasis: 'Thông báo chính thức của Công an xã Đức Hợp, tỉnh Hưng Yên.'
  }
];

export const CORE_LEGAL_TIPS = [
  {
    title: 'Quy tắc "4 KHÔNG" phòng chống lừa đảo',
    desc: 'KHÔNG bấm link lạ - KHÔNG cài file app lạ (.apk) - KHÔNG cung cấp mật khẩu/mã OTP - KHÔNG chuyển tiền cho người chưa gặp mặt xác minh.',
    badge: 'An toàn mạng'
  },
  {
    title: 'Quy tắc "2 PHẢI" khi có nghi vấn',
    desc: 'PHẢI gọi điện thoại truyền thống hoặc gặp mặt trực tiếp để kiểm chứng - PHẢI báo ngay cho Công an xã Đức Hợp qua hotline 02213.815.999.',
    badge: 'Cảnh giác cao độ'
  },
  {
    title: 'Cắt bỏ "chuồng cọp" & mở lối thoát thứ 2',
    desc: '100% hộ gia đình nên mở cửa dự phòng tại lồng sắt ban công và tự trang bị bình bọt/khí chữa cháy để ứng phó khi có hỏa hoạn.',
    badge: 'PCCC hộ gia đình'
  },
  {
    title: '30 ngày đăng ký cư trú theo luật mới',
    desc: 'Khi chuyển về sinh sống tại nơi ở mới, trong 30 ngày công dân cần làm thủ tục thường trú/tạm trú tại Trụ sở Công an xã Đức Hợp.',
    badge: 'Luật Cư trú'
  }
];

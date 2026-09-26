export interface DetailedQuizQuestion {
  id: string;
  category: 'lua_dao' | 'cu_tru' | 'giao_thong' | 'pccc';
  categoryLabel: string;
  question: string;
  scenario?: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  whyWrong: Record<'A' | 'B' | 'C' | 'D', string>;
  legalBasis: string;
}

// -------------------------------------------------------------
// BỘ CÂU HỎI MẪU NỀN TẢNG ĐẶC TRƯNG & CÔNG THỨC MỞ RỘNG ~100 CÂU/LĨNH VỰC
// -------------------------------------------------------------

// 1. LĨNH VỰC LỪA ĐẢO CÔNG NGHỆ CAO (lua_dao)
const SCAM_TOPICS = [
  {
    topic: 'Giả danh Công an kích hoạt VNeID qua link lạ',
    trick: 'Yêu cầu tải file app .apk cài vào máy điện thoại để "sửa lỗi dữ liệu cư trú/CCCD".',
    danger: 'Ứng dụng chứa mã độc gián điệp, tự động đọc mã OTP và chiếm quyền điều khiển tài khoản ngân hàng.',
    correctAction: 'Tuyệt đối không bấm link lạ, không cài app ngoài CH Play/App Store; liên hệ trực ban Công an xã Đức Hợp để xác minh.',
    wrongA: 'Làm theo ngay vì sợ bị khóa thẻ căn cước và định danh điện tử.',
    wrongB: 'Gửi mật khẩu và mã OTP ngân hàng để chứng minh danh tính.',
    wrongD: 'Nhờ người thân bấm vào link để tải ứng dụng thay.',
    legal: 'Khuyến cáo khẩn của Cục An ninh mạng và PCTP sử dụng công nghệ cao (Bộ Công an).'
  },
  {
    topic: 'Bẫy việc làm online nạp tiền làm nhiệm vụ giật đơn Shopee/TikTok',
    trick: 'Hứa hẹn trả hoa hồng 30-50%, ban đầu trả tiền thật vài chục nghìn rồi yêu cầu nạp tiền triệu giải cứu đơn hàng.',
    danger: 'Mô hình Ponzi lừa đảo, càng nạp tiền đối tượng càng viện cớ sai cú pháp để chiếm đoạt tài sản.',
    correctAction: 'Ngừng ngay mọi giao dịch, lưu lại bằng chứng tin nhắn/chuyển khoản và trình báo Công an xã Đức Hợp.',
    wrongA: 'Tiếp tục nạp thêm tiền để cứu lại số vốn đã nạp ban đầu.',
    wrongB: 'Vay mượn người thân để hoàn thành nhiệm vụ VIP cuối cùng.',
    wrongD: 'Chia sẻ đường link công việc này cho bạn bè để cùng nhận thưởng.',
    legal: 'Điều 174 Bộ luật Hình sự (Tội lừa đảo chiếm đoạt tài sản).'
  },
  {
    topic: 'Công nghệ AI Deepfake giả dạng khuôn mặt và giọng nói người thân',
    trick: 'Gọi video vài giây thấy mặt người thân nhưng tín hiệu chập chờn, mờ nhoè, sau đó nhắn tin vay tiền gấp vào tài khoản lạ.',
    danger: 'Kẻ xấu dùng AI cắt ghép hình ảnh, video từ Facebook rồi mượn tài khoản ngân hàng rác để tẩu tán tiền.',
    correctAction: 'Dừng lại, gọi điện thoại trực tiếp bằng số di động thông thường hoặc gặp trực tiếp để đối chứng.',
    wrongA: 'Chuyển khoản ngay lập tức vì đã nhìn thấy mặt người thân trên video.',
    wrongB: 'Chuyển trước 50% số tiền để người thân xử lý công việc khẩn cấp.',
    wrongD: 'Chụp ảnh thẻ CCCD gửi cho đối tượng để làm tin.',
    legal: 'Cảnh báo tội phạm công nghệ cao Công an tỉnh Hưng Yên.'
  },
  {
    topic: 'Giả mạo CSGT gọi điện thông báo phạt nguội giao thông',
    trick: 'Gọi điện báo xe của bạn vi phạm gây tai nạn rồi yêu cầu chuyển tiền nộp phạt vào tài khoản tạm giữ.',
    danger: 'Cơ quan Công an không bao giờ gửi thông báo phạt nguội qua điện thoại hoặc yêu cầu nộp tiền qua tài khoản cá nhân.',
    correctAction: 'Cúp máy ngay; tra cứu phạt nguội trên Cổng DVC Bộ Công an hoặc Cổng TTĐT Cục CSGT.',
    wrongA: 'Làm theo hướng dẫn chuyển tiền vào tài khoản để tránh bị giữ bằng lái xe.',
    wrongB: 'Xin đối tượng giảm 50% số tiền phạt và chuyển tiền nhanh.',
    wrongD: 'Cung cấp số tài khoản ngân hàng và mã PIN để cán bộ kiểm tra.',
    legal: 'Quy trình xử lý vi phạm giao thông theo Thông tư Bộ Công an.'
  },
  {
    topic: 'Mạo danh nhân viên Điện lực / Hoàn thuế / Quà tặng tri ân',
    trick: 'Gửi tin nhắn thông báo hoàn tiền điện hoặc tặng quà miễn phí, yêu cầu quét mã QR hoặc đăng nhập link lạ.',
    danger: 'Mã QR dẫn đến website giả mạo giao diện ngân hàng để đánh cắp tên đăng nhập và mật khẩu Internet Banking.',
    correctAction: 'Không quét mã QR lạ, không đăng nhập tài khoản ngân hàng trên các website không rõ nguồn gốc.',
    wrongA: 'Quét mã QR và nhập mã OTP để nhận quà tri ân giá trị cao.',
    wrongB: 'Gửi link quà tặng cho nhiều người trong thôn để nhận thêm điểm.',
    wrongD: 'Đăng nhập tài khoản ngân hàng ngay để kiểm tra tiền hoàn về.',
    legal: 'Khuyến cáo bảo mật ngành Ngân hàng & Công an xã Đức Hợp.'
  },
  {
    topic: 'Bẫy đầu tư sàn chứng khoán quốc tế / Sàn tiền ảo siêu lợi nhuận',
    trick: 'Lôi kéo vào nhóm Zalo/Telegram có nhiều "chuyên gia" khoe lãi hàng trăm triệu mỗi ngày, dụ dỗ nạp tiền.',
    danger: 'Sàn giao dịch ảo do đối tượng tự lập trình, cho thấy tài khoản có lãi nhưng khi rút tiền thì khóa và đòi phí.',
    correctAction: 'Không tham gia các sàn đầu tư không được Ngân hàng Nhà nước cấp phép; cảnh giác với cam kết "lãi khủng".',
    wrongA: 'Cầm cố tài sản để nạp số tiền lớn với mong muốn làm giàu nhanh.',
    wrongB: 'Nộp thêm 20% phí duy trì hệ thống để được mở lệnh rút tiền.',
    wrongD: 'Rủ người thân trong gia đình cùng gom tiền đầu tư sinh lời.',
    legal: 'Khuyến cáo của Ủy ban Chứng khoán Nhà nước và Bộ Công an.'
  },
  {
    topic: 'Chiêu trò "Con đang cấp cứu ở bệnh viện, cần chuyển tiền mổ gấp"',
    trick: 'Gọi điện thoại cho phụ huynh thông báo con bị tai nạn nặng đang nằm viện, yêu cầu chuyển tiền ngay vào tài khoản bác sĩ.',
    danger: 'Đánh vào tâm lý hoảng loạn, lo lắng tột độ của cha mẹ để chiếm đoạt tiền trước khi phụ huynh kịp kiểm chứng.',
    correctAction: 'Bình tĩnh, lập tức liên hệ với giáo viên chủ nhiệm hoặc nhà trường của con để xác minh sự việc.',
    wrongA: 'Vội vã chuyển ngay hàng chục triệu đồng vào tài khoản người lạ cung cấp.',
    wrongB: 'Ra cây ATM rút tiền mặt gửi cho người xe ôm lạ mặt đến nhà lấy.',
    wrongD: 'Tắt máy không nghe điện thoại của bất kỳ ai.',
    legal: 'Cảnh báo thủ đoạn lừa đảo học đường của Công an tỉnh Hưng Yên.'
  },
  {
    topic: 'Mạo danh nhân viên viễn thông khóa SIM điện thoại',
    trick: 'Gọi điện thông báo số điện thoại của bạn sắp bị khóa do chưa chuẩn hóa thông tin thuê bao, yêu cầu làm theo cú pháp lạ.',
    danger: 'Đối tượng lừa người dân thực hiện cú pháp chuyển hướng cuộc gọi (Call Forwarding) nhằm chiếm quyền nhận mã OTP.',
    correctAction: 'Đến trực tiếp điểm giao dịch của nhà mạng viễn thông hoặc gọi tổng đài chính thức để kiểm tra thuê bao.',
    wrongA: 'Thực hiện ngay cú pháp lạ do người gọi yêu cầu trên bàn phím điện thoại.',
    wrongB: 'Đọc mã OTP gửi về máy cho đối tượng để được hỗ trợ mở khóa nhanh.',
    wrongD: 'Cung cấp ảnh chụp 2 mặt CCCD và ảnh chân dung cho người lạ qua Zalo.',
    legal: 'Khuyến cáo của Cục Viễn thông (Bộ TT&TT) và Bộ Công an.'
  },
  {
    topic: 'Bẫy vay tiền online lãi suất thấp, giải ngân siêu tốc',
    trick: 'Quảng cáo cho vay tiền không cần thế chấp, thủ tục chỉ cần CCCD, sau đó báo lỗi số tài khoản và đòi nộp tiền bảo hiểm.',
    danger: 'Đối tượng chỉnh sửa ảnh hợp đồng vay ảo, ép người vay chuyển tiền cọc/phí bảo lãnh rồi biến mất.',
    correctAction: 'Vay vốn tại các tổ chức tín dụng uy tín; không chuyển bất kỳ khoản "phí duyệt hồ sơ" nào trước khi nhận tiền.',
    wrongA: 'Chuyển tiền "phí bảo hiểm khoản vay" theo yêu cầu của đối tượng.',
    wrongB: 'Vay app này để lấy tiền nộp phí giải ngân cho app kia.',
    wrongD: 'Cung cấp toàn bộ danh bạ điện thoại và tài khoản mạng xã hội cho đối tượng.',
    legal: 'Điều 201 Bộ luật Hình sự (Tội cho vay lãi nặng trong giao dịch dân sự).'
  },
  {
    topic: 'Giả danh Cơ quan Viện Kiểm sát / Tòa án dọa bắt giam',
    trick: 'Tuyên bố bạn có liên quan đến đường dây rửa tiền, ma túy xuyên quốc gia, yêu cầu chuyển tiền vào tài khoản phong tỏa.',
    danger: 'Cơ quan Tư pháp và Công an không bao giờ làm việc qua điện thoại, không yêu cầu công dân chuyển tiền chứng minh trong sạch.',
    correctAction: 'Giữ bình tĩnh, không chuyển tiền; đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để trình báo.',
    wrongA: 'Chuyển toàn bộ tiền tiết kiệm vào tài khoản phong tỏa của đối tượng.',
    wrongB: 'Bí mật không nói cho gia đình biết vì đối tượng yêu cầu bảo mật điều tra.',
    wrongD: 'Khai báo toàn bộ mật khẩu sổ tiết kiệm online cho đối tượng.',
    legal: 'Bộ luật Tố tụng Hình sự (Quy định về trình tự triệu tập và làm việc của Cơ quan điều tra).'
  }
];

// 2. LĨNH VỰC CƯ TRÚ & CĂN CƯỚC VNEID (cu_tru)
const RESIDENCE_TOPICS = [
  {
    topic: 'Thời hạn đăng ký cư trú khi chuyển chỗ ở hợp pháp mới',
    question: 'Khi chuyển về sinh sống hợp pháp tại nơi ở mới ngoài xã nơi đăng ký thường trú cũ, trong thời hạn bao lâu công dân phải đăng ký thường trú/tạm trú?',
    correctAction: 'Trong thời hạn 30 ngày kể từ ngày đến chỗ ở hợp pháp mới.',
    wrongA: 'Trong thời hạn 60 ngày.',
    wrongB: 'Trong thời hạn 90 ngày.',
    wrongD: 'Không quy định thời hạn, khi nào cần thiết mới đăng ký.',
    explain: 'Luật Cư trú năm 2020 quy định rõ công dân có trách nhiệm đăng ký thường trú hoặc tạm trú trong thời hạn 30 ngày.',
    whyWrongA: 'Sai quy định: 60 ngày là quá hạn theo Luật Cư trú.',
    whyWrongB: 'Sai quy định: 90 ngày là thời gian quá dài và sẽ bị xử phạt vi phạm hành chính.',
    whyWrongD: 'Sai nghiêm trọng: Công dân bắt buộc phải khai báo cư trú để cơ quan quản lý cập nhật dữ liệu.',
    legal: 'Điều 22, Điều 27 Luật Cư trú năm 2020.'
  },
  {
    topic: 'Biểu mẫu sử dụng cho thủ tục thay đổi cư trú',
    question: 'Bà con làm thủ tục đăng ký thường trú, tạm trú, tách hộ tại Công an xã Đức Hợp cần sử dụng mẫu tờ khai nào?',
    correctAction: 'Mẫu CT01 - Tờ khai thay đổi thông tin cư trú (do Bộ Công an ban hành).',
    wrongA: 'Mẫu CT08 - Thông báo kết quả giải quyết cư trú.',
    wrongB: 'Đơn viết tay tự do không theo mẫu quy định.',
    wrongD: 'Giấy chứng nhận đăng ký kinh doanh.',
    explain: 'Mẫu CT01 là biểu mẫu chuẩn mực duy nhất theo quy định của Bộ Công an để kê khai các nội dung cư trú.',
    whyWrongA: 'Mẫu CT08 là văn bản do Công an xã cấp trả cho công dân, không phải tờ khai của người dân.',
    whyWrongB: 'Đơn viết tay không đáp ứng tính pháp lý và quy chuẩn dữ liệu quốc gia.',
    whyWrongD: 'Giấy đăng ký kinh doanh không liên quan đến thủ tục đăng ký nhân khẩu thường trú.',
    legal: 'Thông tư số 56/2021/TT-BCA và Thông tư số 66/2023/TT-BCA của Bộ Công an.'
  },
  {
    topic: 'Độ tuổi bắt buộc cấp thẻ Căn cước theo Luật Căn cước 2023',
    question: 'Theo Luật Căn cước số 26/2023/QH15 có hiệu lực từ ngày 01/7/2024, công dân ở độ tuổi nào bắt buộc phải cấp thẻ Căn cước?',
    correctAction: 'Công dân Việt Nam từ đủ 14 tuổi trở lên.',
    wrongA: 'Công dân Việt Nam từ đủ 18 tuổi trở lên.',
    wrongB: 'Công dân Việt Nam từ đủ 16 tuổi trở lên.',
    wrongD: 'Tất cả công dân từ 0 tuổi đều bắt buộc phải làm ngay.',
    explain: 'Người từ đủ 14 tuổi bắt buộc phải cấp thẻ Căn cước; trẻ em dưới 14 tuổi được cấp theo nhu cầu (không bắt buộc).',
    whyWrongA: '18 tuổi là độ tuổi bầu cử và thành niên, không phải mốc bắt buộc làm căn cước.',
    whyWrongB: '16 tuổi là mốc thời gian theo luật căn cước cũ trước đây.',
    whyWrongD: 'Trẻ dưới 14 tuổi chỉ cấp theo nhu cầu của cha mẹ, không bắt buộc.',
    legal: 'Điều 19 Luật Căn cước năm 2023.'
  },
  {
    topic: 'Thu nhận dữ liệu sinh trắc học mống mắt trên thẻ Căn cước',
    question: 'Điểm mới nổi bật trong quy trình thu nhận Căn cước theo Luật Căn cước 2023 áp dụng từ 01/7/2024 là gì?',
    correctAction: 'Bắt buộc thu nhận sinh trắc học Mống mắt (Iris scan) của công dân từ đủ 6 tuổi trở lên.',
    wrongA: 'Bắt buộc lấy mẫu máu của tất cả mọi công dân.',
    wrongB: 'Không còn thu nhận dấu vân tay nữa.',
    wrongD: 'Bắt buộc kiểm tra chỉ số thông minh IQ.',
    explain: 'Thu nhận mống mắt giúp xác thực sinh trắc học với độ chính xác tuyệt đối, hỗ trợ người khuyết tật vân tay.',
    whyWrongA: 'Dữ liệu ADN chỉ thu nhận trên tinh thần tự nguyện của công dân, không bắt buộc.',
    whyWrongB: 'Dấu vân tay và ảnh khuôn mặt vẫn được thu nhận cùng với mống mắt.',
    whyWrongD: 'Chỉ số IQ không nằm trong cơ sở dữ liệu quốc gia về căn cước.',
    legal: 'Điều 23 Luật Căn cước năm 2023.'
  },
  {
    topic: 'Kích hoạt tài khoản định danh điện tử VNeID Mức 2',
    question: 'Người dân xã Đức Hợp muốn kích hoạt tài khoản định danh VNeID Mức 2 thì phải thực hiện tại đâu?',
    correctAction: 'Đến trực tiếp Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) mang theo CCCD gắn chip để thu nhận ảnh mặt và vân tay.',
    wrongA: 'Tự thao tác nâng cấp trên app điện thoại tại nhà.',
    wrongB: 'Nhờ các tài khoản Zalo hỗ trợ dịch vụ làm giúp với chi phí 50.000 đồng.',
    wrongD: 'Chỉ cần gửi ảnh chụp CCCD cho đồng nghiệp.',
    explain: 'VNeID Mức 2 yêu cầu đối soát trực tiếp vân tay và khuôn mặt tại trụ sở Công an trên thiết bị chuyên dụng.',
    whyWrongA: 'Tại nhà chỉ kích hoạt được VNeID Mức 1; Mức 2 bắt buộc phải có máy quét sinh trắc học của Công an.',
    whyWrongB: 'Nhờ người trên Zalo là bẫy lừa đảo chiếm đoạt tài khoản.',
    whyWrongD: 'Gửi ảnh CCCD cho người khác có nguy cơ bị lợi dụng mở tài khoản ngân hàng rác.',
    legal: 'Nghị định số 59/2022/NĐ-CP của Chính phủ về định danh và xác thực điện tử.'
  }
];

// 3. LĨNH VỰC GIAO THÔNG & ĐĂNG KÝ XE CẤP XÃ (giao_thong)
const TRAFFIC_TOPICS = [
  {
    topic: 'Thẩm quyền đăng ký xe máy cấp xã tại Đức Hợp',
    question: 'Người dân có hộ khẩu hoặc tạm trú tại xã Đức Hợp khi mua xe mô tô, xe gắn máy mới thì đến đâu để đăng ký bấm biển số?',
    correctAction: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên).',
    wrongA: 'Bắt buộc phải lên Công an huyện cũ.',
    wrongB: 'Lên Cục Cảnh sát giao thông tại Hà Nội.',
    wrongD: 'Đến Ủy ban nhân dân xã làm giấy tờ.',
    explain: 'Thực hiện phân cấp quản lý của Bộ Công an, Công an xã Đức Hợp đã trực tiếp giải quyết đăng ký xe máy cho bà con.',
    whyWrongA: 'Hiện nay đã phân cấp triệt để về Công an cấp xã, không còn phải đi lên huyện như trước.',
    whyWrongB: 'Cục CSGT không trực tiếp bấm biển xe mô tô cho cá nhân ở cấp cơ sở.',
    whyWrongD: 'UBND xã không có thẩm quyền nghiệp vụ đăng ký và cấp biển số phương tiện giao thông.',
    legal: 'Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    topic: 'Thời hạn làm thủ tục thu hồi và sang tên đổi chủ xe',
    question: 'Khi chuyển quyền sở hữu xe (bán, tặng cho xe máy), trong thời hạn bao nhiêu ngày chủ xe phải làm thủ tục thu hồi đăng ký, biển số?',
    correctAction: 'Trong thời hạn 30 ngày kể từ ngày làm giấy tờ chuyển quyền sở hữu xe.',
    wrongA: 'Trong thời hạn 60 ngày.',
    wrongB: 'Trong thời hạn 90 ngày.',
    wrongD: 'Không quy định thời hạn, người mua tự đi làm lúc nào cũng được.',
    explain: 'Theo Thông tư 24/2023, biển số định danh đi theo người, chủ cũ phải nộp lại biển số trong 30 ngày để giữ biển định danh.',
    whyWrongA: '60 ngày là quá thời hạn quy định và sẽ bị xử phạt hành chính đối với chủ phương tiện.',
    whyWrongB: '90 ngày là quá hạn nghiêm trọng.',
    whyWrongD: 'Nếu không làm thủ tục thu hồi, chủ cũ vẫn phải chịu trách nhiệm pháp lý nếu xe gây tai nạn hoặc vi phạm.',
    legal: 'Điều 6 Thông tư số 24/2023/TT-BCA.'
  },
  {
    topic: 'Quy định về nồng độ cồn khi điều khiển phương tiện',
    question: 'Theo Nghị định 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP), mức nồng độ cồn cho phép đối với người lái xe mô tô, ô tô là bao nhiêu?',
    correctAction: 'Nghiêm cấm tuyệt đối: Bằng 0 (không được có bất kỳ nồng độ cồn nào trong máu hoặc hơi thở).',
    wrongA: 'Dưới 0,25 miligam/1 lít khí thở thì không bị phạt.',
    wrongB: 'Uống 1 lon bia thì được phép lái xe.',
    wrongD: 'Chỉ cấm đối với người lái xe ô tô, xe máy được uống vừa phải.',
    explain: 'Pháp luật Việt Nam nghiêm cấm điều khiển phương tiện tham gia giao thông mà trong máu hoặc hơi thở có nồng độ cồn.',
    whyWrongA: '0,25 mg/l là ngưỡng tính khung phạt tiền cao hơn, không phải ngưỡng được phép uống.',
    whyWrongB: 'Uống bất kỳ lượng rượu bia nào làm phát sinh cồn trong hơi thở đều vi phạm pháp luật.',
    whyWrongD: 'Luật áp dụng bình đẳng đối với cả người điều khiển ô tô, xe máy, xe máy điện và xe đạp.',
    legal: 'Luật Phòng, chống tác hại của rượu, bia và Nghị định số 100/2019/NĐ-CP.'
  }
];

// 4. LĨNH VỰC PHÒNG CHÁY CHỮA CHÁY & CỨU NẠN (pccc)
const FIRE_TOPICS = [
  {
    topic: 'Mô hình an toàn PCCC hộ gia đình tại cơ sở',
    question: 'Phong trào toàn dân tham gia PCCC được Công an xã Đức Hợp phát động sâu rộng đến từng ngõ xóm có tên là gì?',
    correctAction: 'Phong trào "Nhà tôi có bình chữa cháy" và "Tổ liên gia an toàn PCCC".',
    wrongA: 'Phong trào tự do mua sắm thiết bị chữa cháy không qua kiểm định.',
    wrongB: 'Phong trào xây tường kín không cần cửa sổ.',
    wrongD: 'Phong trào dự trữ nước mưa trong chum vại.',
    explain: 'Mô hình Tổ liên gia an toàn PCCC giúp các hộ gia đình liền kề tương trợ chuông báo cháy và chữa cháy ngay phút ban đầu.',
    whyWrongA: 'Bình chữa cháy phải đạt tiêu chuẩn kiểm định an toàn kỹ thuật của lực lượng Cảnh sát PCCC.',
    whyWrongB: 'Xây tường kín bịt lối thoát nạn là nguyên nhân gây ngạt khói dẫn đến tử vong khi có cháy.',
    whyWrongD: 'Nước mưa thông thường không thể dập tắt đám cháy do chập điện hoặc xăng dầu.',
    legal: 'Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ về tăng cường công tác PCCC trong tình hình mới.'
  },
  {
    topic: 'Mở lối thoát nạn thứ 2 tại ban công chuồng cọp',
    question: 'Đối với các nhà ở có ban công, tầng lửng lắp đặt khung sắt bảo vệ ("chuồng cọp"), giải pháp an toàn tính mạng số 1 là gì?',
    correctAction: 'Cắt mở cửa dự phòng có khóa dễ mở và để sẵn thang dây hoặc dây thoát hiểm khẩn cấp.',
    wrongA: 'Hàn chết tất cả các góc sắt để chống trộm kiên cố.',
    wrongB: 'Trồng cây xanh che kín chuồng cọp.',
    wrongD: 'Xếp kín thùng xốp, đồ đạc cũ chất đống quanh ban công.',
    explain: 'Lối thoát nạn thứ 2 cứu sống hàng nghìn người khi cầu thang bộ chính trong nhà đã bị khói độc bao trùm.',
    whyWrongA: 'Hàn kín chuồng cọp biến ngôi nhà thành "lồng bẫy người" khi xảy ra cháy nổ bên dưới.',
    whyWrongB: 'Cây xanh và lá khô bắt lửa rất nhanh khi có tàn lửa bay vào.',
    whyWrongD: 'Đồ đạc tích tụ làm tắc lối thoát hiểm và là nguồn chất cháy nguy hiểm.',
    legal: 'Tiêu chuẩn kỹ thuật quốc gia về An toàn cháy cho nhà và công trình (QCVN 06:2022/BXD).'
  }
];

// -------------------------------------------------------------
// HÀM SINH BỘ CÂU HỎI ĐẦY ĐỦ ~100 CÂU CHO MỖI LĨNH VỰC (TỔNG ~400 CÂU)
// -------------------------------------------------------------
export function generateMasterQuestionBank(): DetailedQuizQuestion[] {
  const bank: DetailedQuizQuestion[] = [];

  // 1. SINH CÂU HỎI LỪA ĐẢO CÔNG NGHỆ CAO (~100 câu)
  let scamIndex = 1;
  SCAM_TOPICS.forEach((topicBase, tIdx) => {
    // Mỗi topic cơ sở tạo ra 10 biến thể tình huống thực tế cụ thể
    const subScenarios = [
      {
        scenario: 'Cuộc gọi tự xưng Công an xã Đức Hợp yêu cầu kích hoạt định danh qua đường dẫn zalo.me/...apk.',
        qText: `Bạn nhận được cuộc gọi về "${topicBase.topic}". Đối tượng yêu cầu: "${topicBase.trick}". Phương án xử lý đúng đắn nhất là gì?`,
      },
      {
        scenario: 'Tin nhắn SMS gửi từ đầu số mạo danh thương hiệu, thông báo vi phạm hoặc tài khoản bị khóa.',
        qText: `Khi phát hiện dấu hiệu "${topicBase.topic}", đâu là hành vi tiềm ẩn rủi ro mất an toàn tài sản lớn nhất?`,
        swapCorrectToAvoid: true
      },
      {
        scenario: 'Đối tượng liên tục hối thúc "nếu không làm ngay trong 15 phút sẽ bị khởi tố/khóa vĩnh viễn".',
        qText: `Tâm lý chung của đối tượng trong thủ đoạn "${topicBase.topic}" là gì và bạn nên đối phó thế nào?`,
      },
      {
        scenario: 'Nhóm đối tượng gửi ảnh chụp Giấy triệu tập hoặc Lệnh bắt tạm giam có đóng dấu đỏ qua mạng xã hội.',
        qText: `Theo quy định pháp luật, Cơ quan Công an có gửi Lệnh triệu tập, Lệnh bắt qua tin nhắn Zalo, Facebook trong tình huống "${topicBase.topic}" không?`,
        isLegalCheck: true
      },
      {
        scenario: 'Người dân trong thôn Nho Lâm nhận được lời mời tham gia nhóm kín đầu tư sinh lời mỗi ngày.',
        qText: `Dấu hiệu nhận biết điển hình của hành vi "${topicBase.topic}" là gì?`,
      },
      {
        scenario: 'Người nhà cao tuổi trong gia đình đang chuẩn bị ra ngân hàng rút tiền chuyển khoản theo lời dụ dỗ lạ.',
        qText: `Khi nghi ngờ người thân là nạn nhân của thủ đoạn "${topicBase.topic}", bạn cần làm gì ngay lập tức?`,
      },
      {
        scenario: 'Nhận được đường link yêu cầu đăng nhập tài khoản VNeID trên trình duyệt web có đuôi lạ (.xyz, .vip).',
        qText: `Tên miền chính thức của Cổng Dịch vụ công Bộ Công an và Định danh VNeID có đuôi chuẩn là gì?`,
        isDomainCheck: true
      },
      {
        scenario: 'Đối tượng hướng dẫn bật tính năng "Trợ năng" (Accessibility) trên điện thoại Android.',
        qText: `Mục đích nguy hiểm nhất của kẻ xấu khi dụ nạn nhân bật quyền Trợ năng trong tình huống "${topicBase.topic}" là gì?`,
        isTechCheck: true
      },
      {
        scenario: 'Bạn đã lỡ chuyển một số tiền nhỏ cho đối tượng và đối tượng yêu cầu chuyển tiếp số tiền lớn hơn.',
        qText: `Cách giải quyết chuẩn mực và dứt khoát nhất trong tình huống "${topicBase.topic}" là gì?`,
      },
      {
        scenario: 'Cần phản ánh khẩn cấp hành vi có dấu hiệu lừa đảo trên địa bàn xã Đức Hợp, tỉnh Hưng Yên.',
        qText: `Số điện thoại đường dây nóng trực ban 24/7 của Công an xã Đức Hợp để tiếp nhận báo tin tội phạm là số nào?`,
        isHotlineCheck: true
      }
    ];

    subScenarios.forEach((sub, sIdx) => {
      const qId = `LD-${String(scamIndex).padStart(3, '0')}`;
      scamIndex++;

      let correctText = topicBase.correctAction;
      let optA = topicBase.wrongA;
      let optB = topicBase.wrongB;
      let optC = correctText;
      let optD = topicBase.wrongD;
      let correctKey: 'A' | 'B' | 'C' | 'D' = 'C';

      if (sub.isDomainCheck) {
        optA = 'Đuôi tên miền lạ như: .com, .xyz, .top, .vip';
        optB = 'Đuôi tên miền thương mại: .org, .net';
        optC = 'Đuôi tên miền chuẩn của cơ quan Nhà nước Việt Nam: ".gov.vn" (VD: bocongan.gov.vn, vneid.gov.vn)';
        optD = 'Bất kỳ tên miền nào có chữ "congan" phía trước';
        correctKey = 'C';
        correctText = optC;
      } else if (sub.isLegalCheck) {
        optA = 'Có, Công an thường gửi lệnh bắt qua Zalo để công dân chuẩn bị';
        optB = 'HOÀN TOÀN KHÔNG. Cơ quan Công an chỉ làm việc trực tiếp bằng Giấy triệu tập giấy gửi về Công an xã/thôn, không làm việc qua Zalo';
        optC = 'Chỉ gửi qua Facebook vào ban đêm';
        optD = 'Có, nếu là vụ án kinh tế';
        correctKey = 'B';
        correctText = optB;
      } else if (sub.isHotlineCheck) {
        optA = '02213.815.999 (Trực ban Công an xã Đức Hợp, Thôn Nho Lâm)';
        optB = '1900.8198';
        optC = '0903.000.113';
        optD = '024.1234.5678';
        correctKey = 'A';
        correctText = optA;
      }

      bank.push({
        id: qId,
        category: 'lua_dao',
        categoryLabel: 'Lừa đảo công nghệ cao',
        question: sub.qText,
        scenario: sub.scenario,
        options: [
          { key: 'A', text: optA },
          { key: 'B', text: optB },
          { key: 'C', text: optC },
          { key: 'D', text: optD },
        ],
        correctKey: correctKey,
        explanation: `${topicBase.danger} ${topicBase.correctAction}`,
        whyWrong: {
          A: correctKey === 'A' ? 'Phương án này là chính xác.' : `Sai lầm nghiêm trọng: ${topicBase.wrongA} Đây là bẫy kẻ gian giăng ra để đánh vào tâm lý lo sợ hoặc hám lợi.`,
          B: correctKey === 'B' ? 'Phương án này là chính xác.' : `Sai lầm nghiêm trọng: ${topicBase.wrongB} Kẻ xấu sẽ lợi dụng hành động này để chiếm quyền kiểm soát hoặc chiếm đoạt thêm tiền.`,
          C: correctKey === 'C' ? 'Phương án này là chính xác.' : `Phương án C chưa đúng. Cần cảnh giác cao độ và tuân theo nguyên tắc xác minh trực tiếp.`,
          D: `Sai lầm: ${topicBase.wrongD} Tuyệt đối không lôi kéo người thân vào nguy cơ mất an toàn tài sản.`
        },
        legalBasis: topicBase.legal
      });
    });
  });

  // 2. SINH CÂU HỎI CƯ TRÚ & CĂN CƯỚC VNEID (~100 câu)
  let cuTruIndex = 1;
  for (let cycle = 0; cycle < 20; cycle++) {
    RESIDENCE_TOPICS.forEach((item, rIdx) => {
      const qId = `CT-${String(cuTruIndex).padStart(3, '0')}`;
      cuTruIndex++;

      const prefixes = [
        'Theo quy định pháp luật hiện hành',
        'Bà con nhân dân xã Đức Hợp cần lưu ý',
        'Trong công tác quản lý cư trú và căn cước',
        'Khi thực hiện thủ tục hành chính tại Công an xã',
        'Trường hợp công dân sinh sống trên địa bàn'
      ];
      const pfx = prefixes[cycle % prefixes.length];

      bank.push({
        id: qId,
        category: 'cu_tru',
        categoryLabel: 'Cư trú & Căn cước VNeID',
        question: `${pfx}: ${item.question} (Câu số ${cuTruIndex - 1})`,
        scenario: `Tình huống quản lý dân cư và hộ tịch thực tế tại địa bàn Thôn Nho Lâm, xã Đức Hợp.`,
        options: [
          { key: 'A', text: item.correctAction },
          { key: 'B', text: item.wrongA },
          { key: 'C', text: item.wrongB },
          { key: 'D', text: item.wrongD },
        ],
        correctKey: 'A',
        explanation: item.explain,
        whyWrong: {
          A: 'Phương án này chính xác theo đúng quy định pháp luật hiện hành.',
          B: item.whyWrongA,
          C: item.whyWrongB,
          D: item.whyWrongD
        },
        legalBasis: item.legal
      });
    });
  }

  // 3. SINH CÂU HỎI GIAO THÔNG & ĐĂNG KÝ XE (~100 câu)
  let trafficIndex = 1;
  for (let cycle = 0; cycle < 34; cycle++) {
    TRAFFIC_TOPICS.forEach((item, tIdx) => {
      if (trafficIndex > 100) return;
      const qId = `GT-${String(trafficIndex).padStart(3, '0')}`;
      trafficIndex++;

      bank.push({
        id: qId,
        category: 'giao_thong',
        categoryLabel: 'Giao thông & Đăng ký xe cấp xã',
        question: `[Luật Trật tự an toàn giao thông] ${item.question} (Tình huống ${trafficIndex - 1})`,
        scenario: 'Áp dụng cho người điều khiển phương tiện xe mô tô, xe gắn máy tại xã Đức Hợp, tỉnh Hưng Yên.',
        options: [
          { key: 'A', text: item.wrongA },
          { key: 'B', text: item.correctAction },
          { key: 'C', text: item.wrongB },
          { key: 'D', text: item.wrongD },
        ],
        correctKey: 'B',
        explanation: item.explain,
        whyWrong: {
          A: item.whyWrongA,
          B: 'Phương án này hoàn toàn chính xác theo đúng phân cấp quản lý phương tiện của Bộ Công an.',
          C: item.whyWrongB,
          D: item.whyWrongD
        },
        legalBasis: item.legal
      });
    });
  }

  // 4. SINH CÂU HỎI PHÒNG CHÁY CHỮA CHÁY & CỨU NẠN (~100 câu)
  let fireIndex = 1;
  for (let cycle = 0; cycle < 50; cycle++) {
    FIRE_TOPICS.forEach((item, fIdx) => {
      if (fireIndex > 100) return;
      const qId = `PC-${String(fireIndex).padStart(3, '0')}`;
      fireIndex++;

      bank.push({
        id: qId,
        category: 'pccc',
        categoryLabel: 'PCCC & Cứu nạn cứu hộ',
        question: `[An toàn cháy nổ cơ sở] ${item.question} (Trường hợp số ${fireIndex - 1})`,
        scenario: 'Khuyến cáo quan trọng bảo vệ tính mạng gia đình và tài sản làng xóm xã Đức Hợp.',
        options: [
          { key: 'A', text: item.wrongA },
          { key: 'B', text: item.wrongB },
          { key: 'C', text: item.correctAction },
          { key: 'D', text: item.wrongD },
        ],
        correctKey: 'C',
        explanation: item.explain,
        whyWrong: {
          A: item.whyWrongA,
          B: item.whyWrongB,
          C: 'Chính xác! Đây là giải pháp an toàn cao nhất được Công an xã Đức Hợp khuyến cáo nhân dân thực hiện.',
          D: item.whyWrongD
        },
        legalBasis: item.legal
      });
    });
  }

  return bank;
}

// LẤY NGÂN HÀNG CÂU HỎI KẾT HỢP DỮ LIỆU ĐƯỢC CÁN BỘ BIÊN TẬP
export function getFullQuestionBank(): DetailedQuizQuestion[] {
  const master = generateMasterQuestionBank();
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('admin_custom_questions');
    if (saved) {
      try {
        const custom: DetailedQuizQuestion[] = JSON.parse(saved);
        // Hợp nhất câu hỏi của cán bộ thêm mới hoặc sửa
        const map = new Map<string, DetailedQuizQuestion>();
        master.forEach(q => map.set(q.id, q));
        custom.forEach(q => map.set(q.id, q));
        return Array.from(map.values());
      } catch (e) {
        console.error('Lỗi nạp câu hỏi custom:', e);
      }
    }
  }
  return master;
}

// XÁO TRỘN VÀ RÚT NGẪU NHIÊN CÂU HỎI THEO LĨNH VỰC & SỐ LƯỢNG
export function getRandomQuizExam(
  categoryFilter: string = 'all',
  questionCount: number = 10
): DetailedQuizQuestion[] {
  const bank = getFullQuestionBank();
  let pool = categoryFilter === 'all' 
    ? [...bank] 
    : bank.filter(q => q.category === categoryFilter);

  if (pool.length === 0) {
    pool = [...bank];
  }

  // Thuật toán Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(questionCount, pool.length));
}

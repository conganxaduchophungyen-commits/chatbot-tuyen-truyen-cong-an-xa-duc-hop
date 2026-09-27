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

// =========================================================================
// NGÂN HÀNG 100 CÂU HỎI TÌNH HUỐNG THỰC TẾ ĐỘC LẬP - KHÔNG TRÙNG LẶP
// MỖI LĨNH VỰC 25 CÂU CHUYÊN SÂU KÈM LÝ DO SAI VÀ TRÍCH DẪN PHÁP LUẬT
// =========================================================================

export const MASTER_QUESTIONS: DetailedQuizQuestion[] = [
  // -----------------------------------------------------------------------
  // PHẦN 1: CẢNH BÁO LỪA ĐẢO CÔNG NGHỆ CAO (25 CÂU ĐỘC LẬP)
  // -----------------------------------------------------------------------
  {
    id: 'LD-01',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Có đối tượng gọi điện tự xưng Công an xã, thông báo tài khoản VNeID của bạn bị lỗi và gửi link Zalo yêu cầu tải file app đuôi ".apk" để kích hoạt từ xa. Bạn cần làm gì?',
    scenario: 'Thủ đoạn chiếm quyền điều khiển điện thoại thông minh phổ biến nhất hiện nay.',
    options: [
      { key: 'A', text: 'Tải và cài đặt ngay để không bị khóa thẻ căn cước và định danh điện tử' },
      { key: 'B', text: 'Tuyệt đối KHÔNG bấm link, KHÔNG cài app lạ; liên hệ Công an xã Đức Hợp (02213.815.999) hoặc đến Thôn Nho Lâm để xác minh' },
      { key: 'C', text: 'Cung cấp mã OTP ngân hàng để cán bộ hỗ trợ kích hoạt từ xa' },
      { key: 'D', text: 'Nhờ người thân tải giúp đường link đó về máy của họ' },
    ],
    correctKey: 'B',
    explanation: 'Cơ quan Công an KHÔNG BAO GIỜ hướng dẫn cài app qua đường link ngoài (.apk) hoặc yêu cầu cung cấp OTP, mật khẩu. Tải app lạ sẽ làm lộ mã OTP và bị chiếm đoạt toàn bộ tiền trong tài khoản ngân hàng.',
    whyWrong: {
      A: 'Sai lầm nguy hiểm: File ".apk" ngoài kho ứng dụng chứa mã độc gián điệp, khi cài đặt sẽ bị chiếm quyền điều khiển điện thoại và đọc trộm mã OTP ngân hàng.',
      B: 'Phương án này hoàn toàn chính xác theo đúng khuyến cáo an ninh mạng của Bộ Công an.',
      C: 'Sai lầm chết người: Mã OTP là mật khẩu bảo mật cuối cùng của tài khoản ngân hàng, tuyệt đối không cung cấp cho bất kỳ ai dưới mọi hình thức.',
      D: 'Sai lầm: Nhờ người thân tải sẽ khiến điện thoại của người thân cũng bị nhiễm mã độc và mất tiền oan.'
    },
    legalBasis: 'Khuyến cáo khẩn của Cục An ninh mạng và PCTP sử dụng công nghệ cao (A05 - Bộ Công an).'
  },
  {
    id: 'LD-02',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Bạn nhận được tin nhắn SMS mạo danh ngân hàng báo "Tài khoản có giao dịch 50 triệu ở nước ngoài, nếu không phải bạn hãy bấm vào link để hủy". Bạn xử lý thế nào?',
    scenario: 'Thủ đoạn tin nhắn giả mạo Brandname ngân hàng (SMS Phishing).',
    options: [
      { key: 'A', text: 'Bấm ngay vào link trong tin nhắn để nhập mật khẩu hủy lệnh chuyển tiền' },
      { key: 'B', text: 'Chuyển toàn bộ tiền sang một tài khoản khác do người lạ hướng dẫn để "tạm giữ an toàn"' },
      { key: 'C', text: 'Bình tĩnh không bấm link lạ; mở ứng dụng ngân hàng chính thức kiểm tra số dư hoặc gọi hotline in trên mặt sau thẻ ATM' },
      { key: 'D', text: 'Đăng nhập tài khoản ngân hàng trên máy tính bằng đường link đó' },
    ],
    correctKey: 'C',
    explanation: 'Đường link trong tin nhắn giả mạo dẫn đến website giả giao diện ngân hàng để đánh cắp tên đăng nhập, mật khẩu và OTP. Luôn kiểm tra trực tiếp trên app ngân hàng chính thống.',
    whyWrong: {
      A: 'Sai lầm: Bấm link và nhập thông tin sẽ chuyển thẳng tên đăng nhập và mật khẩu cho kẻ lừa đảo.',
      B: 'Sai lầm: Ngân hàng không bao giờ có "tài khoản an toàn/tạm giữ", chuyển tiền sang là mất trắng.',
      C: 'Chính xác! Kiểm tra qua app chính thức hoặc gọi hotline in trên thẻ là cách xác minh an toàn nhất.',
      D: 'Sai lầm: Đăng nhập trên máy tính qua link giả mạo vẫn bị lộ lọt mật khẩu Internet Banking.'
    },
    legalBasis: 'Khuyến cáo bảo mật của Hiệp hội Ngân hàng Việt Nam và Bộ Công an.'
  },
  {
    id: 'LD-03',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Quảng cáo tuyển "Cộng tác viên xem video TikTok / like bài Shopee" hứa hẹn hoa hồng 30-50%/ngày, ban đầu trả thưởng thật vài chục nghìn rồi đòi nạp tiền triệu. Đây là gì?',
    scenario: 'Bẫy lừa đảo nạp tiền làm nhiệm vụ trực tuyến chiếm đoạt hàng trăm tỷ đồng.',
    options: [
      { key: 'A', text: 'Cơ hội việc làm online uy tín và thu nhập cao cho người rảnh rỗi' },
      { key: 'B', text: 'Thủ đoạn lừa đảo chiếm đoạt tài sản, đối tượng thả mồi câu nhỏ rồi viện cớ sai cú pháp để nuốt trọn tiền lớn' },
      { key: 'C', text: 'Chương trình tri ân khách hàng thực tế của các sàn thương mại điện tử' },
      { key: 'D', text: 'Nên đi vay mượn thêm tiền nộp nốt nhiệm vụ cuối để rút lại tiền' },
    ],
    correctKey: 'B',
    explanation: 'Đây là kịch bản lừa đảo kinh điển. Số tiền nạp sau luôn gấp nhiều lần số trước; khi nạn nhân hết tiền hoặc đòi rút thì đối tượng cắt liên lạc và chiếm đoạt.',
    whyWrong: {
      A: 'Sai lầm: Không có công việc hợp pháp nào việc nhẹ lương cao hoa hồng 50%/ngày. Đây là bẫy lừa đảo.',
      B: 'Chính xác! Đây là tội phạm lừa đảo chiếm đoạt tài sản theo Điều 174 Bộ luật Hình sự.',
      C: 'Sai lầm: Các sàn thương mại điện tử Shopee, TikTok khẳng định không bao giờ tuyển CTV nạp tiền như vậy.',
      D: 'Sai lầm nghiêm trọng: Càng nạp thêm sẽ càng mất thêm tiền, dẫn đến nợ nần chồng chất.'
    },
    legalBasis: 'Điều 174 Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017).'
  },
  {
    id: 'LD-04',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Bạn nhận được cuộc gọi video từ tài khoản người thân vay tiền gấp, nhưng video bị chập chờn, mờ nhoè, tiếng ngắt quãng và tài khoản nhận tiền tên người lạ. Bạn làm gì?',
    scenario: 'Thủ đoạn ứng dụng trí tuệ nhân tạo (AI Deepfake) giả mạo hình ảnh, giọng nói.',
    options: [
      { key: 'A', text: 'Chuyển tiền ngay vì đã nhìn thấy tận mắt khuôn mặt người thân trên video' },
      { key: 'B', text: 'Dừng lại, gọi điện thoại di động thông thường hoặc gặp trực tiếp để kiểm chứng trước khi chuyển tiền' },
      { key: 'C', text: 'Chuyển trước 50% số tiền để người thân xử lý việc gấp' },
      { key: 'D', text: 'Chụp ảnh thẻ CCCD của mình gửi cho đối phương để đối soát' },
    ],
    correctKey: 'B',
    explanation: 'Kẻ xấu dùng AI Deepfake ghép mặt vài giây tạo lòng tin, sau đó viện cớ mạng yếu để ngắt cuộc gọi rồi nhắn tin thúc giục chuyển tiền. Phải gọi số điện thoại thông thường để đối chứng.',
    whyWrong: {
      A: 'Sai lầm: Video Deepfake chỉ là hình ảnh mô phỏng do AI tạo ra từ ảnh trên mạng xã hội.',
      B: 'Chính xác! Luôn xác minh bằng cuộc gọi viễn thông thông thường hoặc gặp trực tiếp.',
      C: 'Sai lầm: Dù chuyển một phần tiền thì số tiền đó vẫn rơi vào tay đối tượng lừa đảo.',
      D: 'Sai lầm: Gửi CCCD làm lộ dữ liệu cá nhân, có thể bị đối tượng dùng để đăng ký vay tiền app lậu.'
    },
    legalBasis: 'Cảnh báo của Cục An ninh mạng và PCTP sử dụng công nghệ cao (Bộ Công an).'
  },
  {
    id: 'LD-05',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Có người tự xưng là CSGT gọi điện thông báo bạn có biên bản phạt nguội giao thông chưa nộp và yêu cầu chuyển tiền vào tài khoản "tạm giữ" để xử lý. Đúng hay sai?',
    scenario: 'Giả danh lực lượng Cảnh sát giao thông lừa đảo nộp phạt qua điện thoại.',
    options: [
      { key: 'A', text: 'Đúng, phải chuyển ngay để tránh bị tạm giữ giấy phép lái xe' },
      { key: 'B', text: 'Đúng nếu người gọi đọc vanh vách họ tên và biển số xe của mình' },
      { key: 'C', text: 'Hoàn toàn SAI và là lừa đảo. Cơ quan Công an KHÔNG BAO GIỜ phạt nguội qua điện thoại hoặc yêu cầu nộp tiền vào tài khoản cá nhân' },
      { key: 'D', text: 'Đúng, có thể thương lượng xin giảm 50% tiền phạt' },
    ],
    correctKey: 'C',
    explanation: 'Thông báo phạt nguội gửi bằng văn bản chính thức về Công an xã/địa chỉ cư trú hoặc tra cứu trên Cổng DVC Bộ Công an. CSGT không gọi điện đòi tiền phạt.',
    whyWrong: {
      A: 'Sai: CSGT không bao giờ xử phạt hoặc yêu cầu chuyển tiền qua điện thoại.',
      B: 'Sai: Kẻ gian có thể mua dữ liệu lộ lọt trên mạng để đọc đúng biển số xe nhằm tạo lòng tin giả.',
      C: 'Chính xác! Đây là thủ đoạn lừa đảo 100%. Mọi thông báo phạt nguội đều bằng văn bản hoặc Cổng DVC.',
      D: 'Sai: Pháp luật không cho phép mặc cả tiền phạt qua điện thoại.'
    },
    legalBasis: 'Thông tư số 32/2023/TT-BCA quy định nhiệm vụ, quyền hạn của CSGT khi tuần tra xử lý vi phạm.'
  },
  {
    id: 'LD-06',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Kẻ gian gọi điện cho phụ huynh nói "Con đang bị tai nạn nặng cấp cứu ở viện, chuyển tiền gấp để bác sĩ mổ". Bạn xử lý thế nào?',
    scenario: 'Đánh vào tâm lý hoảng loạn, sợ hãi tột độ của cha mẹ đối với con cái.',
    options: [
      { key: 'A', text: 'Vội vã chuyển ngay hàng chục triệu đồng vào tài khoản đối tượng cung cấp' },
      { key: 'B', text: 'Bình tĩnh giữ liên lạc, lập tức gọi điện thoại cho giáo viên chủ nhiệm hoặc nhà trường để kiểm tra sự thật' },
      { key: 'C', text: 'Ra cây ATM rút tiền mặt gửi cho người xe ôm lạ đến nhà nhận hộ' },
      { key: 'D', text: 'Tắt máy không quan tâm vì nghĩ chắc chắn là lừa đảo' },
    ],
    correctKey: 'B',
    explanation: 'Bệnh viện luôn ưu tiên cấp cứu tính mạng bệnh nhân trước, không bao giờ ép chuyển tiền qua điện thoại mới mổ. Cha mẹ cần liên hệ ngay nhà trường/thầy cô để xác minh.',
    whyWrong: {
      A: 'Sai lầm: Hoảng loạn chuyển tiền sẽ rơi vào bẫy kẻ gian khi con vẫn đang an toàn ở trường.',
      B: 'Chính xác! Gọi ngay giáo viên chủ nhiệm hoặc ban giám hiệu nhà trường là cách kiểm tra nhanh nhất.',
      C: 'Sai lầm: Đối tượng có thể thuê shipper/xe ôm đến lấy tiền mặt để xóa dấu vết.',
      D: 'Không nên: Cần chủ động xác minh với nhà trường để đảm bảo an toàn tuyệt đối cho con.'
    },
    legalBasis: 'Khuyến cáo của Bộ Giáo dục & Đào tạo và Cục An ninh mạng (Bộ Công an).'
  },
  {
    id: 'LD-07',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Kẻ xấu tự xưng là cán bộ Viện Kiểm sát, gửi Lệnh bắt giam đóng dấu đỏ qua Zalo và yêu cầu chuyển tiền vào tài khoản phong tỏa để chứng minh trong sạch. Bạn làm gì?',
    scenario: 'Giả danh Cơ quan Tư pháp đe dọa, thao túng tâm lý nạn nhân.',
    options: [
      { key: 'A', text: 'Chuyển toàn bộ tiền tiết kiệm vào tài khoản phong tỏa theo hướng dẫn' },
      { key: 'B', text: 'Giữ bí mật tuyệt đối không nói với người thân vì sợ vi phạm bí mật điều tra' },
      { key: 'C', text: 'Không làm theo; đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) trình báo. Cơ quan tư pháp không làm việc qua Zalo, không yêu cầu nộp tiền' },
      { key: 'D', text: 'Khai báo thông tin tài khoản ngân hàng và mật khẩu cho người gọi' },
    ],
    correctKey: 'C',
    explanation: 'Theo quy định Bộ luật Tố tụng Hình sự, cơ quan Công an, Viện kiểm sát làm việc trực tiếp tại trụ sở bằng Giấy triệu tập chính thức, không bao giờ gửi lệnh bắt qua Zalo hay yêu cầu chuyển tiền.',
    whyWrong: {
      A: 'Sai lầm nghiêm trọng: Tài khoản "phong tỏa" thực chất là tài khoản rác của bọn lừa đảo.',
      B: 'Sai lầm: Kẻ gian yêu cầu bí mật nhằm cô lập nạn nhân không để người thân can ngăn.',
      C: 'Chính xác! Cơ quan điều tra không làm việc qua điện thoại hay gửi lệnh qua mạng xã hội.',
      D: 'Sai lầm: Cung cấp thông tin ngân hàng sẽ bị rút trộm toàn bộ tiền tiết kiệm.'
    },
    legalBasis: 'Điều 183, Điều 185 Bộ luật Tố tụng Hình sự năm 2015.'
  },
  {
    id: 'LD-08',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Khi thanh toán mua hàng hoặc nhận tin nhắn quà tặng, thấy mã QR dán đè hoặc gửi qua tin nhắn kèm thông báo trúng thưởng, bạn nên chú ý điều gì?',
    scenario: 'Mã QR độc hại (Quishing) điều hướng đến trang web lừa đảo đánh cắp tài khoản.',
    options: [
      { key: 'A', text: 'Cứ quét mã ngay vì mã QR không thể chứa virus hay mã độc' },
      { key: 'B', text: 'Kiểm tra kỹ tên người thụ hưởng trước khi chuyển tiền; tuyệt đối không nhập mật khẩu, OTP trên trang web lạ mở ra từ mã QR' },
      { key: 'C', text: 'Quét mã và nhập ngay mã OTP để nhận tiền thưởng 100 triệu' },
      { key: 'D', text: 'Chia sẻ mã QR cho cả thôn quét chung để nhận điểm thưởng' },
    ],
    correctKey: 'B',
    explanation: 'Mã QR có thể bị dán đè thay thế tài khoản người nhận, hoặc chứa đường link dẫn đến website giả mạo ngân hàng để chiếm đoạt tài khoản Internet Banking.',
    whyWrong: {
      A: 'Sai lầm: Mã QR chứa liên kết độc hại, có thể tự động tải phần mềm gián điệp hoặc mở web lừa đảo.',
      B: 'Chính xác! Luôn kiểm tra tên chủ tài khoản thụ hưởng và không bao giờ nhập OTP trên link từ mã QR lạ.',
      C: 'Sai lầm: Nhập OTP đồng nghĩa với việc bạn đồng ý cho kẻ gian rút tiền khỏi tài khoản của mình.',
      D: 'Sai lầm: Chia sẻ mã độc sẽ khiến bạn bè, người thân cùng rơi vào bẫy lừa đảo.'
    },
    legalBasis: 'Cảnh báo của Trung tâm Giám sát an toàn không gian mạng quốc gia (NCSC).'
  },
  {
    id: 'LD-09',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Quảng cáo cho vay tiền online lãi suất cực thấp, thủ tục chỉ cần ảnh CCCD nhưng sau đó báo sai số tài khoản và đòi nộp 10% "phí bảo hiểm khoản vay" để mở khóa?',
    scenario: 'Bẫy lừa đảo vay tiền qua ứng dụng lậu, ép nộp phí giải ngân.',
    options: [
      { key: 'A', text: 'Nộp tiền phí bảo hiểm ngay để nhanh chóng nhận được khoản tiền vay' },
      { key: 'B', text: 'Đây là thủ đoạn lừa đảo chỉnh sửa ảnh hợp đồng ảo để vòi tiền; tuyệt đối không chuyển bất kỳ khoản phí nào' },
      { key: 'C', text: 'Đi vay nóng bên ngoài để có tiền nộp phí mở khóa hợp đồng' },
      { key: 'D', text: 'Gửi mật khẩu tài khoản ngân hàng để công ty tự trừ tiền phí' },
    ],
    correctKey: 'B',
    explanation: 'Các tổ chức tín dụng hợp pháp không bao giờ thu tiền phí duyệt hồ sơ hay phí bảo hiểm trước khi giải ngân. Kẻ gian cố tình sửa sai số tài khoản để ép nạn nhân nộp tiền nhiều lần.',
    whyWrong: {
      A: 'Sai lầm: Càng nộp tiền đối tượng càng bịa ra các loại phí khác (phí lỗi hệ thống, phí mở khóa) để chiếm đoạt.',
      B: 'Chính xác! Ngân hàng chính thống không thu phí trước. Chuyển tiền phí là mất trắng.',
      C: 'Sai lầm: Vay nóng nộp tiền phí sẽ đẩy bản thân vào bẫy tín dụng đen với lãi suất cắt cổ.',
      D: 'Sai lầm: Gửi mật khẩu ngân hàng sẽ khiến tài khoản bị chiếm đoạt toàn bộ.'
    },
    legalBasis: 'Điều 201 Bộ luật Hình sự và Thông tư của Ngân hàng Nhà nước Việt Nam.'
  },
  {
    id: 'LD-10',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Bạn được kéo vào nhóm Telegram/Zalo có các "chuyên gia đọc lệnh" khoe kiếm hàng chục triệu mỗi ngày, rủ đầu tư sàn tiền ảo/chứng khoán quốc tế cam kết không bao giờ lỗ?',
    scenario: 'Sàn giao dịch ảo do đối tượng tự lập trình thao túng lệnh.',
    options: [
      { key: 'A', text: 'Bán đất, cắm sổ đỏ dồn hết tiền đầu tư để nhanh chóng làm giàu' },
      { key: 'B', text: 'Tham gia các sàn được cấp phép; cảnh giác với cam kết "lãi khủng không rủi ro". Sàn ảo này do kẻ lừa đảo tự chỉnh số dư, nạp tiền vào không thể rút ra' },
      { key: 'C', text: 'Nộp thêm 30% phí rửa tiền để được mở lệnh rút vốn' },
      { key: 'D', text: 'Rủ người thân, họ hàng cùng nạp tiền để hưởng hoa hồng giới thiệu' },
    ],
    correctKey: 'B',
    explanation: 'Tại Việt Nam chưa công nhận tiền ảo và chưa cấp phép cho sàn giao dịch chứng khoán quốc tế. Các nhóm này toàn bộ là nick ảo của cùng một ổ nhóm đóng vai nhà đầu tư trúng đậm để dụ dỗ con mồi.',
    whyWrong: {
      A: 'Sai lầm chết người: Đã có rất nhiều người mất trắng tiền tỷ, gia đình tan vỡ vì các sàn ảo này.',
      B: 'Chính xác! Không có kênh đầu tư hợp pháp nào cam kết lợi nhuận 30-50%/tháng mà không có rủi ro.',
      C: 'Sai lầm: Nộp thêm phí chỉ làm mất thêm tiền; đối tượng sẽ chặn tài khoản ngay sau đó.',
      D: 'Sai lầm: Lôi kéo người thân vào sàn ảo khiến người thân cùng bị thiệt hại tài sản nặng nề.'
    },
    legalBasis: 'Khuyến cáo của Ủy ban Chứng khoán Nhà nước và Cục An ninh mạng (Bộ Công an).'
  },
  {
    id: 'LD-11',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Tin nhắn thông báo bạn trúng thưởng ô tô hoặc sổ tiết kiệm 300 triệu đồng của chương trình quay số may mắn, yêu cầu nộp 10 triệu tiền thuế/phí vận chuyển để nhận thưởng?',
    scenario: 'Thủ đoạn lừa đảo trúng thưởng ảo đánh vào lòng tham.',
    options: [
      { key: 'A', text: 'Nộp ngay 10 triệu để nhận về phần thưởng 300 triệu' },
      { key: 'B', text: 'Đây là lừa đảo trúng thưởng ảo. Doanh nghiệp chân chính khấu trừ thuế trực tiếp từ giải thưởng, không bao giờ bắt nộp tiền trước vào tài khoản cá nhân' },
      { key: 'C', text: 'Chuyển trước 5 triệu tiền đặt cọc nhận xe' },
      { key: 'D', text: 'Gửi ảnh CCCD và sổ hộ khẩu cho người gọi' },
    ],
    correctKey: 'B',
    explanation: 'Nếu bạn không tham gia chương trình quay thưởng nào thì không bao giờ có chuyện tự nhiên trúng giải lớn. Doanh nghiệp trao thưởng sẽ khấu trừ thuế TNCN từ phần thưởng, không thu tiền trước.',
    whyWrong: {
      A: 'Sai lầm: Nộp 10 triệu xong bạn sẽ không nhận được bất kỳ giải thưởng nào và kẻ gian sẽ biến mất.',
      B: 'Chính xác! Không nộp tiền trước cho bất kỳ thông báo trúng thưởng nào qua điện thoại hay tin nhắn.',
      C: 'Sai lầm: Đặt cọc cho kẻ lừa đảo là mất tiền cọc vô ích.',
      D: 'Sai lầm: Lộ lọt thông tin cá nhân tạo điều kiện cho kẻ gian mạo danh vay nợ.'
    },
    legalBasis: 'Luật Thương mại và các quy định về xúc tiến thương mại, khuyến mại trúng thưởng.'
  },
  {
    id: 'LD-12',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Đối tượng gọi điện dọa khóa SIM điện thoại do chưa chuẩn hóa thông tin thuê bao, yêu cầu bấm cú pháp **21*Số_điện_thoại# trên bàn phím. Mục đích của chúng là gì?',
    scenario: 'Thủ đoạn chiếm quyền nhận cuộc gọi và mã OTP (Call Forwarding).',
    options: [
      { key: 'A', text: 'Để cập nhật thông tin chính chủ cho SIM của bạn' },
      { key: 'B', text: 'Chuyển hướng toàn bộ cuộc gọi đến máy kẻ gian, nhằm đánh cắp cuộc gọi đọc mã OTP ngân hàng' },
      { key: 'C', text: 'Tăng tốc độ mạng 4G/5G miễn phí' },
      { key: 'D', text: 'Kiểm tra tiền trong tài khoản SIM' },
    ],
    correctKey: 'B',
    explanation: 'Cú pháp **21* là dịch vụ chuyển tiếp cuộc gọi. Khi bấm cú pháp này, mọi cuộc gọi đến máy bạn (bao gồm cuộc gọi đọc mã OTP của ngân hàng) sẽ chuyển sang máy kẻ xấu để chúng rút trộm tiền.',
    whyWrong: {
      A: 'Sai: Chuẩn hóa thuê bao phải thực hiện tại điểm giao dịch nhà mạng hoặc app My Viettel/My VNPT.',
      B: 'Chính xác! Cú pháp **21* chuyển toàn bộ cuộc gọi và mã OTP sang số điện thoại của kẻ gian.',
      C: 'Sai: Cú pháp này không liên quan đến tốc độ mạng viễn thông.',
      D: 'Sai: Tra cứu cước phí sử dụng cú pháp *101#, không dùng **21*.'
    },
    legalBasis: 'Cảnh báo khẩn của Cục Viễn thông (Bộ TT&TT) và Cục An ninh mạng (Bộ Công an).'
  },
  {
    id: 'LD-13',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Người quen quen qua mạng xã hội (tự xưng là đại gia/quân nhân nước ngoài) ngỏ lời yêu đương rồi báo gửi tặng kiện hàng quà tặng triệu USD bị giữ ở sân bay, yêu cầu bạn nộp phí hải quan?',
    scenario: 'Bẫy lừa đảo tình cảm và gửi bưu phẩm từ nước ngoài (Romance Scam).',
    options: [
      { key: 'A', text: 'Vay tiền đóng phí hải quan để nhận kiện hàng quà tặng kim cương, đô la' },
      { key: 'B', text: 'Đây là kịch bản lừa đảo tình cảm xuyên quốc gia; nhân viên hải quan giả mạo để tống tiền, tuyệt đối không chuyển tiền' },
      { key: 'C', text: 'Ra sân bay đứng đợi nhận kiện hàng' },
      { key: 'D', text: 'Chuyển tiền phí chia làm nhiều lần' },
    ],
    correctKey: 'B',
    explanation: 'Hải quan không làm việc qua tin nhắn Zalo/tài khoản cá nhân. Kiện hàng chứa tiền mặt/kim cương là hình ảnh cắt ghép lừa đảo. Càng chuyển tiền phí chúng càng viện cớ đòi thêm tiền phạt.',
    whyWrong: {
      A: 'Sai lầm: Kiện hàng hoàn toàn không có thật, người gửi là nick ảo do ổ nhóm tội phạm điều hành.',
      B: 'Chính xác! Thủ đoạn giả danh đại gia nước ngoài tặng quà và giả nhân viên sân bay thu phí hải quan.',
      C: 'Không nên: Kiện hàng không có thật trên hệ thống bưu chính.',
      D: 'Sai lầm: Dù nộp bao nhiêu lần thì bạn cũng không bao giờ nhận được bưu phẩm.'
    },
    legalBasis: 'Khuyến cáo của Tổng cục Hải quan và Cục Cảnh sát hình sự (C02 - Bộ Công an).'
  },
  {
    id: 'LD-14',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Có người rủ bạn ra ngân hàng mở tài khoản rồi bán lại hoặc cho họ thuê với giá 500.000đ - 1.000.000đ/tài khoản. Hành vi này có vi phạm pháp luật không?',
    scenario: 'Tiếp tay cho tội phạm rửa tiền và lừa đảo xuyên quốc gia.',
    options: [
      { key: 'A', text: 'Không vi phạm, tài khoản của mình thì mình có quyền cho thuê kiếm thêm thu nhập' },
      { key: 'B', text: 'Vi phạm pháp luật nghiêm trọng. Tài khoản bị bán/cho thuê sẽ bị dùng để nhận tiền lừa đảo, chủ tài khoản sẽ bị khởi tố hình sự về tội đồng phạm' },
      { key: 'C', text: 'Chỉ vi phạm nếu cho thuê với giá trên 10 triệu đồng' },
      { key: 'D', text: 'Được phép mở và bán tối đa 3 tài khoản ngân hàng' },
    ],
    correctKey: 'B',
    explanation: 'Hành vi mua bán, cho thuê tài khoản ngân hàng bị phạt tiền từ 40 - 100 triệu đồng và có thể bị truy cứu trách nhiệm hình sự về tội rửa tiền hoặc đồng phạm lừa đảo chiếm đoạt tài sản.',
    whyWrong: {
      A: 'Sai lầm nghiêm trọng: Cho thuê tài khoản ngân hàng là hành vi bị pháp luật nghiêm cấm.',
      B: 'Chính xác! Chủ tài khoản phải chịu trách nhiệm pháp lý khi tài khoản dùng để rửa tiền phạm tội.',
      C: 'Sai: Bất kể giá thuê bao nhiêu tiền đều là hành vi vi phạm pháp luật.',
      D: 'Sai: Tuyệt đối không được phép mua bán, chuyển nhượng tài khoản ngân hàng cho người khác.'
    },
    legalBasis: 'Nghị định số 52/2024/NĐ-CP về thanh toán không dùng tiền mặt và Bộ luật Hình sự.'
  },
  {
    id: 'LD-15',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Tin nhắn hoặc cuộc gọi tự xưng Điện lực thông báo gia đình bạn nộp thừa tiền điện được hoàn trả 500k, yêu cầu bấm link web để điền số thẻ ngân hàng nhận lại tiền?',
    scenario: 'Mạo danh Tập đoàn Điện lực Việt Nam (EVN) đánh cắp tài khoản.',
    options: [
      { key: 'A', text: 'Bấm vào link điền đầy đủ số thẻ ATM và mã CVV/OTP để lấy lại tiền thừa' },
      { key: 'B', text: 'Cảnh giác, liên hệ trực tiếp Tổng đài Điện lực in trên hóa đơn giấy để kiểm tra; ngành điện lực hoàn tiền trừ vào hóa đơn kỳ sau, không gửi link đòi mã OTP' },
      { key: 'C', text: 'Cung cấp ảnh 2 mặt thẻ ngân hàng cho người gửi' },
      { key: 'D', text: 'Bấm link và đăng nhập mật khẩu tài khoản VNeID' },
    ],
    correctKey: 'B',
    explanation: 'Điện lực nếu có hoàn tiền sẽ tự động đối trừ vào hóa đơn tiền điện tháng kế tiếp hoặc qua cổng chăm sóc khách hàng chính thức của EVN, tuyệt đối không gửi link lạ đòi mã OTP ngân hàng.',
    whyWrong: {
      A: 'Sai lầm: Điền số thẻ và OTP sẽ bị kẻ gian trừ hết tiền trong tài khoản ngân hàng.',
      B: 'Chính xác! Mọi thắc mắc về tiền điện liên hệ trực tiếp Điện lực sở tại hoặc Tổng đài CSKH EVN.',
      C: 'Sai lầm: Ảnh 2 mặt thẻ ngân hàng chứa đầy đủ thông tin để kẻ gian quẹt tiền thanh toán online.',
      D: 'Sai lầm: Đăng nhập VNeID trên trang web giả mạo sẽ bị lộ mã định danh và thông tin cá nhân.'
    },
    legalBasis: 'Khuyến cáo của Tập đoàn Điện lực Việt Nam (EVN) và Công an tỉnh Hưng Yên.'
  },
  {
    id: 'LD-16',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Lời mời trên Facebook tuyển "Người mẫu nhí / Diễn viên nhí" cho con, phụ huynh tham gia bình chọn trên link lạ rồi bị dụ vào nhóm nạp tiền làm nhiệm vụ để con đạt giải?',
    scenario: 'Đánh vào tâm lý yêu thương và tự hào về con cái của phụ huynh.',
    options: [
      { key: 'A', text: 'Nạp tiền để con đạt giải nhất và được ký hợp đồng người mẫu độc quyền' },
      { key: 'B', text: 'Đây là thủ đoạn lừa đảo bẫy nhiệm vụ; đối tượng lợi dụng hình ảnh trẻ em để ép phụ huynh chuyển tiền tỷ' },
      { key: 'C', text: 'Đi vay mượn người thân để hoàn thành vòng chung kết cho con' },
      { key: 'D', text: 'Gửi mã số sổ tiết kiệm để ban tổ chức kiểm tra năng lực tài chính' },
    ],
    correctKey: 'B',
    explanation: 'Cuộc thi tuyển mẫu nhí trên mạng xã hội đa số là cạm bẫy do các đường dây lừa đảo dựng lên nhằm dẫn dụ phụ huynh vào bẫy nạp tiền làm nhiệm vụ giật đơn nhận hoa hồng.',
    whyWrong: {
      A: 'Sai lầm: Không có cuộc thi nào bắt phụ huynh nạp tiền làm nhiệm vụ tài chính để con được chấm giải.',
      B: 'Chính xác! Đây là biến tướng tinh vi của bẫy lừa đảo cộng tác viên làm nhiệm vụ trực tuyến.',
      C: 'Sai lầm: Vay mượn tiền nộp cho kẻ lừa đảo sẽ khiến gia đình rơi vào cảnh nợ nần.',
      D: 'Sai lầm: Cung cấp thông tin sổ tiết kiệm có nguy cơ bị chiếm đoạt tài sản.'
    },
    legalBasis: 'Cảnh báo tội phạm công nghệ cao Công an thành phố Hà Nội và Công an tỉnh Hưng Yên.'
  },
  {
    id: 'LD-17',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Đối tượng mạo danh cán bộ Thuế liên hệ qua Zalo hướng dẫn cài ứng dụng "Thuế điện tử / eTax Mobile" qua file .apk ngoài kho Google Play để nhận giảm thuế 2%?',
    scenario: 'Mạo danh Cơ quan Thuế cài mã độc chiếm đoạt tài khoản.',
    options: [
      { key: 'A', text: 'Tải và cài đặt file .apk theo hướng dẫn để được giảm thuế nhanh' },
      { key: 'B', text: 'Chỉ cài đặt ứng dụng eTax Mobile chính thức từ kho ứng dụng Google Play hoặc Apple App Store; cơ quan thuế không gửi file cài đặt qua Zalo' },
      { key: 'C', text: 'Cung cấp mật khẩu tài khoản ngân hàng doanh nghiệp cho cán bộ thuế' },
      { key: 'D', text: 'Nhờ kế toán cài đặt file .apk đó trên máy tính công ty' },
    ],
    correctKey: 'B',
    explanation: 'Ngành Thuế chỉ cung cấp ứng dụng chính thức trên Google Play và App Store. File .apk gửi qua Zalo chứa mã độc chiếm quyền Trợ năng trên điện thoại Android để trộm mã OTP ngân hàng.',
    whyWrong: {
      A: 'Sai lầm nghiêm trọng: Ứng dụng giả mạo sẽ chiếm quyền điều khiển và tự động chuyển sạch tiền trong tài khoản.',
      B: 'Chính xác! Luôn tải ứng dụng từ kho ứng dụng chính thống và kiểm tra nhà phát triển "Tổng cục Thuế".',
      C: 'Sai lầm: Cơ quan thuế không bao giờ hỏi mật khẩu hay mã OTP ngân hàng của người nộp thuế.',
      D: 'Sai lầm: Cài trên máy tính hay điện thoại kế toán sẽ làm lộ tài khoản công ty.'
    },
    legalBasis: 'Thông báo khẩn của Tổng cục Thuế và Cục An ninh mạng (Bộ Công an).'
  },
  {
    id: 'LD-18',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Fanpage quảng cáo "Trại hè quân đội / Khóa tu mùa hè" miễn phí cho học sinh, nhưng khi phụ huynh đăng ký thì bắt tham gia nhóm nạp tiền làm nhiệm vụ khảo sát quỹ tài trợ?',
    scenario: 'Mạo danh các chương trình quân đội, công an, tôn giáo để lừa đảo.',
    options: [
      { key: 'A', text: 'Nạp tiền khảo sát quỹ để con được suất đi trại hè miễn phí' },
      { key: 'B', text: 'Cảnh giác, các chương trình Học kỳ quân đội chính thống do Tỉnh đoàn/Bộ Chỉ huy quân sự tổ chức có thông báo công khai, không bắt nạp tiền làm nhiệm vụ trực tuyến' },
      { key: 'C', text: 'Nạp thử 1 triệu đồng để xem uy tín thế nào' },
      { key: 'D', text: 'Gửi ảnh căn cước công dân của bố mẹ và con để đăng ký nhanh' },
    ],
    correctKey: 'B',
    explanation: 'Thủ đoạn lợi dụng nhu cầu tìm sân chơi bổ ích cho con mùa hè để lừa phụ huynh. Các khóa học quân đội chính thống do cơ quan quân sự và Đoàn thanh niên phối hợp tổ chức, không thu tiền kiểu nhiệm vụ.',
    whyWrong: {
      A: 'Sai lầm: Kẻ gian dụ dỗ nạp tiền khảo sát rồi chiếm đoạt, trại hè quân đội hoàn toàn là ảo.',
      B: 'Chính xác! Liên hệ trực tiếp Huyện đoàn/Tỉnh đoàn để đăng ký chương trình chính thống.',
      C: 'Sai lầm: Nạp 1 triệu là rơi vào bẫy, đối tượng sẽ yêu cầu nạp tiếp các khoản lớn hơn.',
      D: 'Sai lầm: Gửi thông tin CCCD cho trang giả mạo có nguy cơ bị lợi dụng danh tính.'
    },
    legalBasis: 'Cảnh báo của Cục Tuyên huấn (Tổng cục Chính trị QĐND Việt Nam) và Bộ Công an.'
  },
  {
    id: 'LD-19',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Thấy bài đăng bán combo du lịch, vé máy bay và phòng khách sạn 5 sao giá rẻ bất ngờ trên fanpage có tích xanh, bạn nên kiểm tra thế nào?',
    scenario: 'Lừa đảo đặt cọc tour du lịch giá rẻ mùa cao điểm.',
    options: [
      { key: 'A', text: 'Chuyển khoản 100% tiền tour ngay vì sợ người khác mua mất giá rẻ' },
      { key: 'B', text: 'Gọi điện trực tiếp đến hotline khách sạn/hãng bay để đối soát mã đặt chỗ; kiểm tra pháp nhân công ty du lịch trước khi chuyển tiền đặt cọc' },
      { key: 'C', text: 'Cứ thấy fanpage có tích xanh là uy tín 100% không cần kiểm tra' },
      { key: 'D', text: 'Chuyển tiền vào tài khoản cá nhân của người tự xưng là giám đốc công ty' },
    ],
    correctKey: 'B',
    explanation: 'Fanpage tích xanh hiện nay có thể bị hack hoặc mua bán trôi nổi. Kẻ gian lập trang giả mạo công ty du lịch uy tín, nhận tiền cọc xong sẽ chặn liên lạc của nạn nhân.',
    whyWrong: {
      A: 'Sai lầm: Chuyển tiền vội vã cho đối tượng trên mạng mà chưa kiểm chứng sẽ bị mất trắng.',
      B: 'Chính xác! Luôn gọi điện thẳng đến khách sạn/hãng hàng không để xác nhận mã đặt chỗ (booking code).',
      C: 'Sai lầm: Tích xanh mạng xã hội có thể bị kẻ xấu thuê mượn hoặc mua lại để đánh lừa lòng tin.',
      D: 'Sai lầm: Đặt tour công ty uy tín phải chuyển vào tài khoản doanh nghiệp, không chuyển tài khoản cá nhân lạ.'
    },
    legalBasis: 'Khuyến cáo của Cục Du lịch Quốc gia Việt Nam và Bộ Công an.'
  },
  {
    id: 'LD-20',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Sau khi bị lừa mất tiền qua mạng, bạn thấy trên Facebook có dịch vụ "Hỗ trợ thu hồi tiền treo / Lấy lại tiền lừa đảo cam kết thành công 100%". Bạn có nên thuê không?',
    scenario: 'Cạm bẫy "Lừa đảo kép" đánh vào tâm lý muốn gỡ lại tiền của nạn nhân.',
    options: [
      { key: 'A', text: 'Thuê ngay vì họ cam kết có luật sư và hacker giỏi lấy lại được tiền' },
      { key: 'B', text: 'Tuyệt đối KHÔNG. Đây là thủ đoạn "lừa đảo kép", kẻ gian giả danh luật sư/an ninh mạng để yêu cầu nộp thêm phí hồ sơ rồi lừa tiếp lần 2' },
      { key: 'C', text: 'Nộp trước 10% tiền phí để họ kéo tiền về tài khoản cho mình' },
      { key: 'D', text: 'Cung cấp mã OTP ngân hàng để họ can thiệp kỹ thuật' },
    ],
    correctKey: 'B',
    explanation: 'Chỉ có cơ quan Công an thụ lý điều tra vụ án mới có thẩm quyền phong tỏa và thu hồi tài sản theo luật định. Mọi dịch vụ "thu hồi tiền lừa đảo" trên mạng 100% là bẫy lừa đảo lần 2.',
    whyWrong: {
      A: 'Sai lầm nghiêm trọng: Không có cá nhân hay nhóm hacker nào có quyền năng can thiệp kéo tiền từ tài khoản tội phạm về.',
      B: 'Chính xác! Cục An ninh mạng khẳng định không có dịch vụ thu hồi tiền lừa đảo qua mạng xã hội.',
      C: 'Sai lầm: Nộp phí cho dịch vụ này sẽ bị mất thêm tiền lần thứ hai.',
      D: 'Sai lầm chết người: Cung cấp OTP sẽ bị kẻ lừa đảo rút nốt số tiền còn lại trong tài khoản.'
    },
    legalBasis: 'Cảnh báo khẩn của Cục An ninh mạng và Cục Cảnh sát hình sự (Bộ Công an).'
  },
  {
    id: 'LD-21',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Bỗng nhiên tài khoản của bạn nhận được 10 triệu đồng chuyển nhầm, vài phút sau có người gọi đến tự xưng bên tài chính đòi nợ với lãi suất 200%/tháng. Bạn làm gì?',
    scenario: 'Thủ đoạn "Bẫy nợ ép vay" bằng hình thức cố tình chuyển nhầm tiền.',
    options: [
      { key: 'A', text: 'Chuyển trả lại ngay cho số tài khoản người gọi yêu cầu' },
      { key: 'B', text: 'Rút ra tiêu ngay vì nghĩ là tiền người ta cho mình' },
      { key: 'C', text: 'Không tiêu số tiền đó, không chuyển theo số tài khoản lạ gọi đến; ra ngân hàng thông báo và đến Công an xã Đức Hợp để lập biên bản xử lý đúng luật' },
      { key: 'D', text: 'Chuyển tiền vào tài khoản của người thân để cất giữ' },
    ],
    correctKey: 'C',
    explanation: 'Đối tượng cố tình chuyển tiền để ép bạn vào hợp đồng vay nặng lãi. Bạn chỉ hoàn trả tiền qua sự trung gian điều phối của Ngân hàng hoặc Cơ quan Công an, không tự ý chuyển cho số tài khoản thứ 3.',
    whyWrong: {
      A: 'Sai: Tự ý chuyển cho tài khoản thứ ba sẽ rơi vào bẫy trả nợ thay cho người khác.',
      B: 'Sai: Tự ý tiêu tiền chuyển nhầm có thể bị xử lý về hành vi chiếm giữ trái phép tài sản theo Điều 176 BLHS.',
      C: 'Chính xác! Báo ngân hàng và Công an xã để được hướng dẫn hoàn tiền minh bạch, an toàn.',
      D: 'Sai: Chuyển tiền đi nơi khác có thể bị coi là hành vi cố tình tẩu tán tài sản.'
    },
    legalBasis: 'Điều 176 Bộ luật Hình sự năm 2015 (Tội chiếm giữ trái phép tài sản).'
  },
  {
    id: 'LD-22',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Khi chuyển tiền từ 10 triệu đồng trở lên theo Quyết định 2345/QĐ-NHNN bắt buộc phải xác thực sinh trắc học khuôn mặt. Bạn cần thực hiện xác thực ở đâu an toàn nhất?',
    scenario: 'Bảo vệ dữ liệu sinh trắc học ngân hàng tránh bị đánh cắp.',
    options: [
      { key: 'A', text: 'Thực hiện trực tiếp trên app ngân hàng chính thức bằng cách quét chip CCCD hoặc ra quầy giao dịch ngân hàng' },
      { key: 'B', text: 'Bấm vào đường link do người lạ gửi qua Zalo xưng là hỗ trợ cài sinh trắc học' },
      { key: 'C', text: 'Quay video khuôn mặt và gửi ảnh 2 mặt CCCD cho tài khoản hỗ trợ online' },
      { key: 'D', text: 'Nhờ người lạ thao tác hộ trên điện thoại của mình' },
    ],
    correctKey: 'A',
    explanation: 'Ngân hàng không bao giờ gọi điện hay gửi link qua mạng xã hội hỗ trợ cài sinh trắc học. Khách hàng tự quét chip trên app ngân hàng hoặc ra trực tiếp chi nhánh ngân hàng.',
    whyWrong: {
      A: 'Chính xác! Tự thao tác trên app chính thức hoặc ra phòng giao dịch ngân hàng là an toàn tuyệt đối.',
      B: 'Sai lầm: Bấm link lạ sẽ bị dẫn dụ cài app giả mạo đánh cắp khuôn mặt và mã OTP.',
      C: 'Sai lầm: Gửi video khuôn mặt sẽ bị kẻ gian dùng để tạo video Deepfake mở tài khoản lừa đảo.',
      D: 'Sai lầm: Người lạ có thể cài cắm phần mềm theo dõi trên máy điện thoại của bạn.'
    },
    legalBasis: 'Quyết định số 2345/QĐ-NHNN của Ngân hàng Nhà nước Việt Nam.'
  },
  {
    id: 'LD-23',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Bạn nhận được tin nhắn chúc mừng trúng tuyển viên chức / xin việc tại UBND xã Đức Hợp, yêu cầu nộp 20 triệu đồng tiền "chống trượt và hoàn thiện hồ sơ"?',
    scenario: 'Lừa đảo xin việc làm, thi tuyển công chức nhà nước.',
    options: [
      { key: 'A', text: 'Nộp tiền ngay để giữ suất công chức' },
      { key: 'B', text: 'UBND và Công an xã tuyển dụng công khai theo quy định pháp luật và thông báo trên cổng thông tin chính thức; tuyệt đối không thu tiền "chống trượt"' },
      { key: 'C', text: 'Vay tiền đóng cọc trước một nửa' },
      { key: 'D', text: 'Gửi hồ sơ gốc và bằng tốt nghiệp cho người nhắn tin' },
    ],
    correctKey: 'B',
    explanation: 'Tuyển dụng công chức, viên chức Nhà nước tuân thủ quy trình thi tuyển minh bạch, công khai trên Cổng thông tin điện tử cấp tỉnh, huyện, xã. Mọi lời mời nộp tiền "chạy việc" 100% là lừa đảo.',
    whyWrong: {
      A: 'Sai lầm: Nộp tiền chạy việc vừa mất tiền vừa có nguy cơ vi phạm tội đưa hối lộ.',
      B: 'Chính xác! Kiểm tra thông báo tuyển dụng chính thức tại trụ sở UBND xã hoặc Cổng TTĐT.',
      C: 'Sai lầm: Đặt cọc cho kẻ gian là mất trắng tiền.',
      D: 'Sai lầm: Gửi bằng cấp gốc có thể bị đối tượng giữ lại để tống tiền chuộc.'
    },
    legalBasis: 'Luật Cán bộ, công chức và Luật Viên chức hiện hành.'
  },
  {
    id: 'LD-24',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Người tự xưng là shipper gọi điện báo bạn có gói hàng 200.000đ giao đến nhà, nhưng bạn đang đi vắng nên họ bảo chuyển khoản trước rồi họ gửi hàng cho hàng xóm?',
    scenario: 'Chiêu trò lừa đảo chuyển khoản nhận bưu phẩm ảo giá trị thấp.',
    options: [
      { key: 'A', text: 'Chuyển khoản ngay vì số tiền nhỏ 200k không đáng bao nhiêu' },
      { key: 'B', text: 'Kiểm tra trên app mua hàng xem mình có đơn hàng nào không; gọi cho người thân ở nhà kiểm tra; chỉ chuyển khoản khi người nhà đã nhận và kiểm tra đúng hàng' },
      { key: 'C', text: 'Gửi thêm 500k nhờ shipper mua hộ đồ khác' },
      { key: 'D', text: 'Cung cấp mã OTP xác nhận đơn hàng cho shipper' },
    ],
    correctKey: 'B',
    explanation: 'Đối tượng nhặt thông tin đơn hàng bị vứt bỏ, gọi điện lừa chuyển khoản các đơn hàng không có thật. Dù số tiền nhỏ nhưng lừa hàng trăm người sẽ chiếm đoạt số tiền rất lớn.',
    whyWrong: {
      A: 'Sai lầm: Kẻ lừa đảo lợi dụng tâm lý số tiền nhỏ để lừa đảo hàng loạt người nhẹ dạ.',
      B: 'Chính xác! Chỉ thanh toán khi hàng đã được giao tận tay và người nhà đã mở kiểm tra đúng món đồ.',
      C: 'Sai lầm: Tuyệt đối không chuyển thêm tiền cho người chưa xác minh danh tính.',
      D: 'Sai lầm: Shipper giao hàng không bao giờ cần mã OTP ngân hàng của khách.'
    },
    legalBasis: 'Cảnh báo tội phạm lừa đảo giao hàng của Hiệp hội Thương mại điện tử Việt Nam.'
  },
  {
    id: 'LD-25',
    category: 'lua_dao',
    categoryLabel: 'Lừa đảo công nghệ cao',
    question: 'Khi phát hiện dấu hiệu lừa đảo hoặc nghi ngờ bản thân đang bị kẻ xấu dẫn dụ chiếm đoạt tài sản trên địa bàn xã Đức Hợp, bạn cần liên hệ ngay số nào?',
    scenario: 'Đường dây nóng khẩn cấp hỗ trợ nhân dân xã Đức Hợp, tỉnh Hưng Yên.',
    options: [
      { key: 'A', text: 'Hotline trực ban 24/7 của Công an xã Đức Hợp: 02213.815.999 hoặc đến Trụ sở tại Thôn Nho Lâm' },
      { key: 'B', text: 'Nhắn tin cho các fanpage dịch vụ thám tử tư trên mạng' },
      { key: 'C', text: 'Đợi vài tuần xem đối tượng có trả lại tiền không rồi mới báo' },
      { key: 'D', text: 'Xóa hết tin nhắn và lịch sử cuộc gọi để đỡ bực mình' },
    ],
    correctKey: 'A',
    explanation: 'Số điện thoại trực ban 24/7 chính thức của Công an xã Đức Hợp là 02213.815.999. Báo tin kịp thời giúp lực lượng Công an phối hợp ngân hàng phong tỏa tài khoản tẩu tán tiền của kẻ gian.',
    whyWrong: {
      A: 'Chính xác! Đây là đường dây nóng tiếp nhận tố giác tội phạm chính thức của Công an xã Đức Hợp.',
      B: 'Sai lầm: Thuê dịch vụ trên mạng có nguy cơ bị lừa đảo thêm lần nữa.',
      C: 'Sai lầm: Báo tin càng muộn thì đối tượng càng nhanh chóng tẩu tán tiền ra nước ngoài hoặc qua tiền ảo.',
      D: 'Sai lầm: Phải giữ nguyên vẹn lịch sử tin nhắn, số tài khoản, biên lai chuyển tiền làm chứng cứ điều tra.'
    },
    legalBasis: 'Quy chế tiếp nhận, xử lý tố giác, tin báo về tội phạm của Bộ Công an.'
  },

  // -----------------------------------------------------------------------
  // PHẦN 2: CƯ TRÚ & CĂN CƯỚC VNEID (25 CÂU ĐỘC LẬP)
  // -----------------------------------------------------------------------
  {
    id: 'CT-01',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Khi chuyển về sinh sống hợp pháp tại nơi ở mới ngoài phạm vi đơn vị hành chính cấp xã nơi đã đăng ký thường trú cũ, trong thời hạn bao lâu công dân phải đăng ký thường trú hoặc tạm trú?',
    scenario: 'Quy định nghĩa vụ khai báo cư trú của công dân theo luật hiện hành.',
    options: [
      { key: 'A', text: 'Trong thời hạn 30 ngày kể từ ngày đến chỗ ở hợp pháp mới' },
      { key: 'B', text: 'Trong thời hạn 60 ngày' },
      { key: 'C', text: 'Trong thời hạn 90 ngày' },
      { key: 'D', text: 'Không quy định thời hạn, khi nào rảnh thì đăng ký' },
    ],
    correctKey: 'A',
    explanation: 'Theo Luật Cư trú năm 2020, công dân chuyển đến chỗ ở hợp pháp mới ngoài phạm vi xã cũ thì trong thời hạn 30 ngày phải thực hiện thủ tục đăng ký thường trú hoặc tạm trú.',
    whyWrong: {
      A: 'Chính xác! Điều 22 và Điều 27 Luật Cư trú năm 2020 quy định thời hạn là 30 ngày.',
      B: 'Sai: 60 ngày là quá hạn luật định và có thể bị xử phạt vi phạm hành chính.',
      C: 'Sai: 90 ngày là quá hạn nghiêm trọng.',
      D: 'Sai: Đăng ký cư trú là nghĩa vụ bắt buộc của công dân để Nhà nước quản lý dân cư.'
    },
    legalBasis: 'Điều 22, Điều 27 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-02',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Người dân xã Đức Hợp khi làm các thủ tục Đăng ký thường trú, Tạm trú, Khai báo tạm vắng, Điều chỉnh thông tin hộ tịch cần sử dụng biểu mẫu tờ khai chuẩn nào?',
    scenario: 'Hồ sơ biểu mẫu chuẩn của Bộ Công an trong công tác đăng ký cư trú.',
    options: [
      { key: 'A', text: 'Mẫu CT01 - Tờ khai thay đổi thông tin cư trú (do Bộ Công an ban hành)' },
      { key: 'B', text: 'Mẫu CT08 - Thông báo kết quả giải quyết cư trú' },
      { key: 'C', text: 'Đơn viết tay tự do không theo quy chuẩn' },
      { key: 'D', text: 'Giấy chứng nhận đăng ký kết hôn' },
    ],
    correctKey: 'A',
    explanation: 'Mẫu CT01 là biểu mẫu pháp lý chuẩn mực duy nhất theo Thông tư của Bộ Công an để công dân kê khai thông tin thay đổi cư trú.',
    whyWrong: {
      A: 'Chính xác! Mẫu CT01 là biểu mẫu tờ khai chuẩn duy nhất để nộp hồ sơ cư trú.',
      B: 'Sai: Mẫu CT08 là thông báo kết quả do cơ quan Công an cấp trả cho người dân, không phải tờ khai.',
      C: 'Sai: Đơn viết tay tự do không đáp ứng tính pháp lý và quy chuẩn dữ liệu quốc gia.',
      D: 'Sai: Giấy đăng ký kết hôn là giấy tờ chứng minh quan hệ, không thay thế tờ khai CT01.'
    },
    legalBasis: 'Thông tư số 56/2021/TT-BCA và Thông tư số 66/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'CT-03',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Theo Luật Căn cước số 26/2023/QH15 (có hiệu lực từ ngày 01/7/2024), công dân ở độ tuổi nào bắt buộc phải thực hiện cấp thẻ Căn cước?',
    scenario: 'Quy định mới về độ tuổi làm thẻ Căn cước theo Luật Căn cước năm 2023.',
    options: [
      { key: 'A', text: 'Công dân Việt Nam từ đủ 14 tuổi trở lên' },
      { key: 'B', text: 'Công dân Việt Nam từ đủ 18 tuổi trở lên' },
      { key: 'C', text: 'Công dân Việt Nam từ đủ 16 tuổi trở lên' },
      { key: 'D', text: 'Mọi công dân từ 0 tuổi đều bắt buộc phải làm ngay' },
    ],
    correctKey: 'A',
    explanation: 'Người từ đủ 14 tuổi trở lên bắt buộc phải thực hiện thủ tục cấp thẻ Căn cước. Trẻ em từ 0 đến dưới 14 tuổi được cấp thẻ Căn cước theo nhu cầu của cha mẹ hoặc người giám hộ.',
    whyWrong: {
      A: 'Chính xác! Theo Điều 19 Luật Căn cước 2023, từ đủ 14 tuổi là mốc bắt buộc phải cấp thẻ Căn cước.',
      B: 'Sai: 18 tuổi là độ tuổi thành niên và bầu cử, không phải mốc bắt đầu cấp căn cước.',
      C: 'Sai: 16 tuổi là quy định của Luật Căn cước công dân cũ trước đây.',
      D: 'Sai: Trẻ em dưới 14 tuổi cấp theo nhu cầu (tự nguyện), không bắt buộc.'
    },
    legalBasis: 'Điều 19 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-04',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Luật Căn cước năm 2023 có quy định bắt buộc trẻ em từ 0 đến dưới 14 tuổi phải làm thẻ Căn cước không?',
    scenario: 'Chính sách cấp thẻ Căn cước cho trẻ em dưới 14 tuổi.',
    options: [
      { key: 'A', text: 'Bắt buộc 100% trẻ em phải làm ngay từ khi mới sinh' },
      { key: 'B', text: 'Không bắt buộc, chỉ cấp theo nhu cầu của cha mẹ hoặc người giám hộ hợp pháp' },
      { key: 'C', text: 'Tuyệt đối cấm không được cấp thẻ Căn cước cho trẻ dưới 14 tuổi' },
      { key: 'D', text: 'Chỉ trẻ em sinh ra ở thành phố mới được cấp' },
    ],
    correctKey: 'B',
    explanation: 'Cấp thẻ Căn cước cho trẻ dưới 14 tuổi là quyền lợi nhằm tạo thuận lợi khi đi máy bay, khám chữa bệnh BHYT, nhưng không mang tính chất bắt buộc.',
    whyWrong: {
      A: 'Sai: Luật quy định trẻ dưới 14 tuổi cấp theo nhu cầu, không áp dụng chế tài bắt buộc.',
      B: 'Chính xác! Cấp theo nhu cầu giúp tạo thuận lợi trong quản lý và giao dịch dân sự của trẻ em.',
      C: 'Sai: Luật Căn cước 2023 đã mở rộng quyền được cấp thẻ Căn cước cho công dân từ 0 đến dưới 14 tuổi.',
      D: 'Sai: Mọi công dân Việt Nam không phân biệt nông thôn hay thành thị đều có quyền như nhau.'
    },
    legalBasis: 'Khoản 2 Điều 19 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-05',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Từ ngày 01/7/2024, khi làm thủ tục cấp thẻ Căn cước cho người từ đủ 6 tuổi trở lên, cơ quan Công an bắt buộc thu nhận dữ liệu sinh trắc học mới nào?',
    scenario: 'Quy trình thu nhận sinh trắc học hiện đại trên thẻ Căn cước mới.',
    options: [
      { key: 'A', text: 'Bắt buộc thu nhận sinh trắc học Mống mắt (Iris)' },
      { key: 'B', text: 'Bắt buộc lấy mẫu máu xét nghiệm ADN' },
      { key: 'C', text: 'Bắt buộc kiểm tra chỉ số cân nặng và chiều cao' },
      { key: 'D', text: 'Không còn thu nhận dấu vân tay và ảnh khuôn mặt nữa' },
    ],
    correctKey: 'A',
    explanation: 'Thu nhận mống mắt giúp xác thực danh tính với độ bảo mật cao nhất, không thể làm giả và hỗ trợ nhận diện đối với người già bị mờ vân tay hoặc người khuyết tật tay.',
    whyWrong: {
      A: 'Chính xác! Thu nhận mống mắt là điểm mới cốt lõi của Luật Căn cước năm 2023.',
      B: 'Sai: Dữ liệu ADN và giọng nói chỉ thu nhận tự nguyện, không bắt buộc lấy mẫu máu.',
      C: 'Sai: Chiều cao và cân nặng không phải dữ liệu sinh trắc học bắt buộc trên căn cước.',
      D: 'Sai: Ảnh khuôn mặt và vân tay vẫn được thu nhận kết hợp cùng mống mắt.'
    },
    legalBasis: 'Điều 23 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-06',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Dữ liệu sinh trắc học về ADN và giọng nói được tích hợp vào Cơ sở dữ liệu căn cước trong trường hợp nào?',
    scenario: 'Thu nhận dữ liệu ADN và giọng nói vào cơ sở dữ liệu quốc gia.',
    options: [
      { key: 'A', text: 'Bắt buộc đối với toàn bộ công dân Việt Nam' },
      { key: 'B', text: 'Chỉ thu nhận khi công dân tự nguyện cung cấp hoặc phục vụ tố tụng theo yêu cầu của cơ quan điều tra' },
      { key: 'C', text: 'Chỉ áp dụng đối với người đi xuất khẩu lao động' },
      { key: 'D', text: 'Không bao giờ được phép đưa vào cơ sở dữ liệu' },
    ],
    correctKey: 'B',
    explanation: 'Nhà nước không bắt buộc công dân cung cấp ADN và giọng nói; chỉ tích hợp khi công dân có nhu cầu tự nguyện để phục vụ tìm kiếm người thân, nạn nhân chiến tranh hoặc trong tố tụng hình sự.',
    whyWrong: {
      A: 'Sai: Luật quy định dữ liệu ADN không phải dữ liệu bắt buộc đại trà.',
      B: 'Chính xác! Thu nhận ADN trên tinh thần hoàn toàn tự nguyện của công dân.',
      C: 'Sai: Áp dụng chung cho mọi công dân có nguyện vọng, không phân biệt đối tượng.',
      D: 'Sai: Luật Căn cước 2023 đã cho phép tích hợp dữ liệu này khi công dân tự nguyện.'
    },
    legalBasis: 'Điểm d Khoản 1 Điều 16 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-07',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Người dân muốn kích hoạt tài khoản định danh điện tử VNeID Mức 2 thì phải thực hiện như thế nào?',
    scenario: 'Kích hoạt tài khoản định danh điện tử chứa thông tin sinh trắc học.',
    options: [
      { key: 'A', text: 'Tự bấm nâng cấp trên app điện thoại tại nhà mà không cần đi đâu' },
      { key: 'B', text: 'Đến trực tiếp Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) mang theo CCCD gắn chip để thu nhận ảnh mặt và vân tay' },
      { key: 'C', text: 'Nhờ các nhóm dịch vụ trên mạng xã hội Zalo/Facebook kích hoạt hộ với giá 50.000đ' },
      { key: 'D', text: 'Gửi ảnh CCCD cho trưởng thôn kích hoạt hộ' },
    ],
    correctKey: 'B',
    explanation: 'VNeID Mức 2 có giá trị tương đương thẻ Căn cước cứng, bắt buộc phải có máy chuyên dụng của Công an đối soát dấu vân tay và khuôn mặt thật của công dân tại trụ sở.',
    whyWrong: {
      A: 'Sai: Tại nhà chỉ tự làm được VNeID Mức 1; Mức 2 bắt buộc phải ra cơ quan Công an thu nhận sinh trắc học.',
      B: 'Chính xác! Phải trực tiếp đến trụ sở Công an xã Đức Hợp để cán bộ đối soát vân tay và kích hoạt.',
      C: 'Sai lầm nguy hiểm: Nhờ người trên mạng là bẫy lừa đảo chiếm đoạt tài khoản định danh.',
      D: 'Sai: Trưởng thôn không có thẩm quyền và thiết bị kỹ thuật chuyên dụng để kích hoạt Mức 2.'
    },
    legalBasis: 'Điều 14 Nghị định số 59/2022/NĐ-CP của Chính phủ.'
  },
  {
    id: 'CT-08',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Thẻ Căn cước công dân (CCCD) gắn chip cấp trước ngày 01/7/2024 có bắt buộc phải đổi sang thẻ Căn cước mới ngay không?',
    scenario: 'Hiệu lực chuyển tiếp của thẻ CCCD gắn chip cấp trước ngày 01/7/2024.',
    options: [
      { key: 'A', text: 'Bắt buộc phải đổi sang thẻ mới ngay trong tháng 7/2024' },
      { key: 'B', text: 'Không bắt buộc; thẻ CCCD đã cấp vẫn có giá trị sử dụng đến hết thời hạn in trên mặt trước của thẻ' },
      { key: 'C', text: 'Thẻ CCCD cũ bị vô hiệu hóa hoàn toàn từ ngày 01/7/2024' },
      { key: 'D', text: 'Chỉ người làm việc trong cơ quan nhà nước mới phải đổi' },
    ],
    correctKey: 'B',
    explanation: 'Khoản 1 Điều 46 Luật Căn cước 2023 quy định rõ: Thẻ CCCD cấp trước ngày 01/7/2024 vẫn có nguyên giá trị sử dụng đến hết hạn ghi trên thẻ; công dân chỉ đổi khi có nhu cầu.',
    whyWrong: {
      A: 'Sai: Không bắt buộc đổi ngay nếu thẻ CCCD cũ vẫn còn thời hạn sử dụng.',
      B: 'Chính xác! Thẻ CCCD gắn chip cũ vẫn có giá trị sử dụng bình thường đến khi hết hạn.',
      C: 'Sai: Đây là tin đồn thất thiệt do kẻ lừa đảo tung ra để dụ dỗ người dân bấm link cài app giả.',
      D: 'Sai: Quy định áp dụng bình đẳng đối với tất cả mọi công dân.'
    },
    legalBasis: 'Khoản 1 Điều 46 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-09',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Theo quy định của Luật Cư trú năm 2020, đăng ký tạm trú có thời hạn tối đa là bao lâu?',
    scenario: 'Thời hạn đăng ký tạm trú của công dân tại địa phương.',
    options: [
      { key: 'A', text: 'Tối đa là 02 năm và có thể gia hạn nhiều lần' },
      { key: 'B', text: 'Tối đa là 06 tháng' },
      { key: 'C', text: 'Tối đa là 01 năm và không được gia hạn' },
      { key: 'D', text: 'Có giá trị vĩnh viễn như đăng ký thường trú' },
    ],
    correctKey: 'A',
    explanation: 'Thời hạn tạm trú tối đa là 02 năm. Trước khi hết thời hạn tạm trú 15 ngày, công dân phải làm thủ tục gia hạn tạm trú nếu tiếp tục sinh sống tại đó.',
    whyWrong: {
      A: 'Chính xác! Theo Khoản 2 Điều 27 Luật Cư trú, thời hạn tạm trú tối đa là 02 năm và được gia hạn nhiều lần.',
      B: 'Sai: 06 tháng không phải thời hạn tối đa của đăng ký tạm trú.',
      C: 'Sai: Công dân được quyền gia hạn tạm trú nhiều lần nếu đủ điều kiện.',
      D: 'Sai: Tạm trú mang tính chất thời hạn, không có giá trị vĩnh viễn như thường trú.'
    },
    legalBasis: 'Khoản 2 Điều 27 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-10',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Người đến thuê nhà, mượn nhà ở tại xã Đức Hợp có được đăng ký thường trú vào chỗ ở đó không?',
    scenario: 'Điều kiện đăng ký thường trú tại chỗ ở hợp pháp do thuê, mượn.',
    options: [
      { key: 'A', text: 'Tuyệt đối không được đăng ký thường trú ở nhà thuê' },
      { key: 'B', text: 'Được đăng ký thường trú nếu có sự đồng ý bằng văn bản của chủ hộ/chủ sở hữu và bảo đảm điều kiện diện tích nhà ở tối thiểu' },
      { key: 'C', text: 'Chỉ cần trả tiền thuê nhà đầy đủ là tự động được nhập thường trú' },
      { key: 'D', text: 'Phải mua lại ngôi nhà đó mới được nhập thường trú' },
    ],
    correctKey: 'B',
    explanation: 'Công dân được đăng ký thường trú tại chỗ ở do thuê, mượn nếu được chủ sở hữu đồng ý bằng văn bản và diện tích nhà ở bảo đảm theo quy định của HĐND cấp tỉnh.',
    whyWrong: {
      A: 'Sai: Luật Cư trú 2020 cho phép người thuê nhà đăng ký thường trú nếu đáp ứng đủ điều kiện.',
      B: 'Chính xác! Phải có ý kiến đồng ý bằng văn bản của chủ nhà và bảo đảm diện tích nhà ở tối thiểu.',
      C: 'Sai: Phải có văn bản đồng ý của chủ sở hữu nhà và làm thủ tục tại cơ quan Công an.',
      D: 'Sai: Không bắt buộc phải mua nhà mới được đăng ký thường trú.'
    },
    legalBasis: 'Khoản 3 Điều 20 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-11',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Thẩm quyền tiếp nhận, kiểm tra và giải quyết thủ tục đăng ký thường trú, tạm trú cho nhân dân trên địa bàn xã Đức Hợp thuộc về cơ quan nào?',
    scenario: 'Cơ quan có thẩm quyền giải quyết đăng ký cư trú tại cơ sở.',
    options: [
      { key: 'A', text: 'Ủy ban nhân dân xã Đức Hợp' },
      { key: 'B', text: 'Công an xã Đức Hợp (Trụ sở tại Thôn Nho Lâm, xã Đức Hợp)' },
      { key: 'C', text: 'Công an huyện cũ' },
      { key: 'D', text: 'Ban chỉ huy Quân sự xã' },
    ],
    correctKey: 'B',
    explanation: 'Theo Luật Cư trú 2020, cơ quan đăng ký cư trú ở cấp xã là Công an xã. Công an xã Đức Hợp trực tiếp tiếp nhận hồ sơ, kiểm tra dữ liệu và cập nhật trên hệ thống dân cư quốc gia.',
    whyWrong: {
      A: 'Sai: UBND xã giải quyết hộ tịch (khai sinh, khai tử, kết hôn), không giải quyết cư trú.',
      B: 'Chính xác! Công an xã Đức Hợp là cơ quan có thẩm quyền tiếp nhận và giải quyết thủ tục cư trú.',
      C: 'Sai: Hiện nay đã phân cấp triệt để về Công an xã tiếp nhận, không nộp hồ sơ ở huyện cũ.',
      D: 'Sai: Ban CHQS xã quản lý nghĩa vụ quân sự, không quản lý hộ khẩu cư trú.'
    },
    legalBasis: 'Khoản 4 Điều 2 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-12',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Thời hạn giải quyết đăng ký thường trú của Công an xã kể từ ngày nhận đủ hồ sơ hợp lệ theo quy định là bao nhiêu ngày?',
    scenario: 'Thời hạn giải quyết thủ tục hành chính về cư trú.',
    options: [
      { key: 'A', text: '07 ngày làm việc' },
      { key: 'B', text: '15 ngày làm việc' },
      { key: 'C', text: '30 ngày làm việc' },
      { key: 'D', text: 'Giải quyết ngay lập tức trong 10 phút' },
    ],
    correctKey: 'A',
    explanation: 'Theo Điều 22 Luật Cư trú 2020, trong thời hạn 07 ngày làm việc kể từ ngày nhận được hồ sơ đầy đủ và hợp lệ, cơ quan Công an có trách nhiệm thẩm định, cập nhật thông tin và thông báo kết quả.',
    whyWrong: {
      A: 'Chính xác! Khoản 3 Điều 22 Luật Cư trú quy định thời hạn là 07 ngày làm việc.',
      B: 'Sai: 15 ngày là thời hạn quy định trong luật cũ trước đây.',
      C: 'Sai: 30 ngày là quá dài so với quy định cải cách hành chính hiện hành.',
      D: 'Sai: Cán bộ phải kiểm tra thực tế chỗ ở và đối soát cơ sở dữ liệu quốc gia nên cần thời hạn theo luật.'
    },
    legalBasis: 'Khoản 3 Điều 22 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-13',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Sau khi giải quyết xong thủ tục đăng ký thường trú hoặc tạm trú, cơ quan Công an cấp văn bản nào cho công dân?',
    scenario: 'Kết quả giải quyết thủ tục đăng ký cư trú.',
    options: [
      { key: 'A', text: 'Cấp Sổ hộ khẩu giấy mới có dấu đỏ' },
      { key: 'B', text: 'Mẫu CT08 - Thông báo kết quả giải quyết cư trú (hoặc cập nhật trực tiếp trên VNeID)' },
      { key: 'C', text: 'Cấp Giấy chứng nhận quyền sử dụng đất' },
      { key: 'D', text: 'Cấp Giấy phép lái xe' },
    ],
    correctKey: 'B',
    explanation: 'Hiện nay không còn cấp Sổ hộ khẩu giấy. Kết quả giải quyết cư trú được trả bằng Mẫu CT08 văn bản giấy hoặc thông báo điện tử hiển thị trực tiếp trên ứng dụng VNeID.',
    whyWrong: {
      A: 'Sai: Sổ hộ khẩu giấy đã chính thức hết giá trị sử dụng từ ngày 01/01/2023.',
      B: 'Chính xác! Mẫu CT08 là văn bản xác nhận kết quả cư trú của Bộ Công an.',
      C: 'Sai: Giấy chứng nhận quyền sử dụng đất do ngành Tài nguyên & Môi trường cấp.',
      D: 'Sai: Giấy phép lái xe do ngành Giao thông vận tải cấp.'
    },
    legalBasis: 'Điều 38 Luật Cư trú năm 2020 và Thông tư số 66/2023/TT-BCA.'
  },
  {
    id: 'CT-14',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Sổ hộ khẩu giấy và Sổ tạm trú giấy đã chính thức hết giá trị sử dụng từ thời điểm nào?',
    scenario: 'Mốc thời gian bãi bỏ hoàn toàn Sổ hộ khẩu giấy tại Việt Nam.',
    options: [
      { key: 'A', text: 'Từ ngày 01/01/2023' },
      { key: 'B', text: 'Từ ngày 01/7/2024' },
      { key: 'C', text: 'Vẫn còn giá trị sử dụng vĩnh viễn' },
      { key: 'D', text: 'Từ ngày 01/01/2025' },
    ],
    correctKey: 'A',
    explanation: 'Theo Khoản 3 Điều 38 Luật Cư trú năm 2020, Sổ hộ khẩu, Sổ tạm trú giấy có giá trị sử dụng đến hết ngày 31/12/2022. Toàn bộ thông tin cư trú từ ngày 01/01/2023 được số hóa trên Cơ sở dữ liệu quốc gia.',
    whyWrong: {
      A: 'Chính xác! Từ ngày 01/01/2023 Sổ hộ khẩu giấy chính thức hết giá trị sử dụng.',
      B: 'Sai: 01/7/2024 là ngày Luật Căn cước năm 2023 có hiệu lực thi hành.',
      C: 'Sai: Toàn bộ sổ giấy đã được thay thế bằng phương thức quản lý số điện tử.',
      D: 'Sai mốc thời gian quy định của Luật Cư trú.'
    },
    legalBasis: 'Khoản 3 Điều 38 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-15',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Công dân có thể tự ngồi tại nhà nộp hồ sơ đăng ký thường trú, tạm trú trực tuyến thông qua cổng dịch vụ nào?',
    scenario: 'Ứng dụng chuyển đổi số trong giải quyết thủ tục hành chính.',
    options: [
      { key: 'A', text: 'Cổng Dịch vụ công Bộ Công an (dichvucong.bocongan.gov.vn) hoặc qua VNeID' },
      { key: 'B', text: 'Nhắn tin qua fanpage Facebook của các hội đồng hương' },
      { key: 'C', text: 'Gửi qua hòm thư điện tử Gmail cá nhân của trưởng thôn' },
      { key: 'D', text: 'Đăng bài lên mạng xã hội TikTok' },
    ],
    correctKey: 'A',
    explanation: 'Cổng DVC Bộ Công an và ứng dụng VNeID là hai kênh nộp hồ sơ cư trú trực tuyến chính thức, an toàn và hợp pháp được Chính phủ phê duyệt theo Đề án 06.',
    whyWrong: {
      A: 'Chính xác! Nộp hồ sơ online qua Cổng DVC Bộ Công an giúp tiết kiệm thời gian đi lại.',
      B: 'Sai: Mạng xã hội không phải cổng tiếp nhận dịch vụ công của cơ quan nhà nước.',
      C: 'Sai: Hồ sơ dịch vụ công bắt buộc phải nộp qua hệ thống cổng dịch vụ công quốc gia.',
      D: 'Sai: Mạng xã hội không có chức năng giải quyết thủ tục hành chính.'
    },
    legalBasis: 'Đề án 06 của Thủ tướng Chính phủ và Thông tư 66/2023/TT-BCA.'
  },
  {
    id: 'CT-16',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Trường hợp nào sau đây công dân sẽ bị xóa đăng ký thường trú theo quy định của Luật Cư trú?',
    scenario: 'Các trường hợp bị xóa đăng ký thường trú.',
    options: [
      { key: 'A', text: 'Đi làm ăn xa, vắng mặt liên tục từ 12 tháng trở lên mà không đăng ký tạm trú tại nơi ở mới hoặc không khai báo tạm vắng' },
      { key: 'B', text: 'Chỉ đi du lịch nước ngoài 1 tuần rồi về' },
      { key: 'C', text: 'Đổi số điện thoại di động' },
      { key: 'D', text: 'Mua thêm một chiếc xe máy mới' },
    ],
    correctKey: 'A',
    explanation: 'Công dân vắng mặt liên tục từ 12 tháng trở lên tại nơi thường trú mà không đăng ký tạm trú ở nơi khác hoặc không khai báo tạm vắng (trừ trường hợp đi nghĩa vụ, du học...) sẽ bị xóa đăng ký thường trú.',
    whyWrong: {
      A: 'Chính xác! Đi vắng từ 12 tháng không khai báo tạm trú/tạm vắng là căn cứ xóa thường trú theo Điều 24 Luật Cư trú.',
      B: 'Sai: Đi du lịch ngắn ngày không thuộc diện bị xóa thường trú.',
      C: 'Sai: Đổi số điện thoại chỉ cần cập nhật trên VNeID, không ảnh hưởng đến hộ khẩu.',
      D: 'Sai: Mua sắm tài sản không liên quan đến điều kiện quản lý cư trú.'
    },
    legalBasis: 'Điểm d Khoản 1 Điều 24 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-17',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Đối tượng nào sau đây bắt buộc phải thực hiện thủ tục khai báo tạm vắng với Công an xã Đức Hợp?',
    scenario: 'Quy định về đối tượng phải khai báo tạm vắng.',
    options: [
      { key: 'A', text: 'Người đang bị cấm đi khỏi nơi cư trú, người chấp hành án treo, hoặc người trong độ tuổi nghĩa vụ quân sự đi khỏi nơi cư trú từ 03 tháng trở lên' },
      { key: 'B', text: 'Người đi chợ mua sắm ở xã bên cạnh trong buổi sáng' },
      { key: 'C', text: 'Học sinh tiểu học đi dã ngoại trong ngày cùng nhà trường' },
      { key: 'D', text: 'Tất cả mọi người cứ ra khỏi nhà là phải khai báo tạm vắng' },
    ],
    correctKey: 'A',
    explanation: 'Luật Cư trú quy định cụ thể các trường hợp người chấp hành án, người chịu sự quản lý tư pháp hoặc thanh niên trong độ tuổi gọi nhập ngũ khi vắng mặt tại địa phương phải khai báo tạm vắng.',
    whyWrong: {
      A: 'Chính xác! Điều 31 Luật Cư trú quy định cụ thể các nhóm đối tượng này bắt buộc phải khai báo tạm vắng.',
      B: 'Sai: Sinh hoạt, đi lại bình thường không thuộc diện phải khai báo tạm vắng.',
      C: 'Sai: Đi lại ngắn hạn trong ngày không thuộc phạm vi điều chỉnh.',
      D: 'Sai: Công dân có quyền tự do cư trú, chỉ đối tượng luật định mới phải khai báo tạm vắng.'
    },
    legalBasis: 'Khoản 1 Điều 31 Luật Cư trú năm 2020.'
  },
  {
    id: 'CT-18',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Người gốc Việt Nam chưa xác định được quốc tịch đang sinh sống tại Việt Nam được cấp giấy tờ gì theo Luật Căn cước 2023?',
    scenario: 'Chính sách nhân văn cấp Giấy chứng nhận căn cước cho người yếu thế.',
    options: [
      { key: 'A', text: 'Giấy chứng nhận căn cước' },
      { key: 'B', text: 'Thẻ Căn cước công dân Việt Nam' },
      { key: 'C', text: 'Hộ chiếu ngoại giao' },
      { key: 'D', text: 'Không được cấp bất kỳ giấy tờ nào' },
    ],
    correctKey: 'A',
    explanation: 'Đây là điểm mới giàu tính nhân văn của Luật Căn cước 2023. Giấy chứng nhận căn cước giúp người gốc Việt Nam chưa có quốc tịch được khám chữa bệnh, học tập, mở tài khoản ngân hàng và giao dịch dân sự.',
    whyWrong: {
      A: 'Chính xác! Theo Điều 30 Luật Căn cước 2023, người gốc Việt Nam được cấp Giấy chứng nhận căn cước.',
      B: 'Sai: Thẻ Căn cước chỉ cấp cho người đã có quốc tịch Việt Nam.',
      C: 'Sai: Hộ chiếu ngoại giao chỉ cấp cho cán bộ ngoại giao theo luật xuất nhập cảnh.',
      D: 'Sai: Luật mới đã giải quyết dứt điểm vấn đề giấy tờ cho nhóm người yếu thế này.'
    },
    legalBasis: 'Điều 30 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-19',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Tài khoản định danh điện tử VNeID Mức 2 có thể tích hợp và thay thế những loại giấy tờ nào khi thực hiện giao dịch?',
    scenario: 'Giá trị pháp lý của tài khoản định danh VNeID Mức 2.',
    options: [
      { key: 'A', text: 'Thẻ Căn cước, Giấy phép lái xe, Đăng ký xe, Thẻ BHYT (khi đã tích hợp thành công)' },
      { key: 'B', text: 'Chỉ thay thế được thẻ học sinh' },
      { key: 'C', text: 'Thay thế được tiền mặt trong ví' },
      { key: 'D', text: 'Không có giá trị thay thế giấy tờ nào cả' },
    ],
    correctKey: 'A',
    explanation: 'Thông tin giấy tờ tích hợp trên VNeID Mức 2 có giá trị tương đương việc xuất trình bản giấy khi cơ quan có thẩm quyền kiểm tra hoặc thực hiện thủ tục hành chính.',
    whyWrong: {
      A: 'Chính xác! VNeID Mức 2 tích hợp đa dạng giấy tờ: CCCD, bằng lái xe, thẻ BHYT, đăng ký xe.',
      B: 'Sai: Giá trị sử dụng của VNeID Mức 2 rộng lớn trong toàn bộ các giao dịch công và tư.',
      C: 'Sai: VNeID là ứng dụng định danh, không phải ví điện tử chứa tiền mặt.',
      D: 'Sai: Nghị định 59/2022/NĐ-CP công nhận giá trị pháp lý tương đương bản giấy của VNeID.'
    },
    legalBasis: 'Điều 13 Nghị định số 59/2022/NĐ-CP của Chính phủ.'
  },
  {
    id: 'CT-20',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Giấy tờ nào sau đây là giấy tờ hợp pháp chứng minh chỗ ở khi đăng ký thường trú tại xã Đức Hợp?',
    scenario: 'Hồ sơ chứng minh chỗ ở hợp pháp.',
    options: [
      { key: 'A', text: 'Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở (Sổ đỏ) hoặc Hợp đồng mua bán nhà ở' },
      { key: 'B', text: 'Hóa đơn tiền điện tháng gần nhất' },
      { key: 'C', text: 'Thẻ căn cước công dân của hàng xóm' },
      { key: 'D', text: 'Hóa đơn mua tivi, tủ lạnh' },
    ],
    correctKey: 'A',
    explanation: 'Giấy tờ chứng minh chỗ ở hợp pháp là Sổ đỏ, hợp đồng mua bán nhà, giấy phép xây dựng hoặc văn bản chứng minh quyền sở hữu nhà ở theo quy định của Nghị định 62/2021/NĐ-CP.',
    whyWrong: {
      A: 'Chính xác! Sổ đỏ hoặc hợp đồng mua bán nhà hợp pháp là giấy tờ chứng minh chỗ ở chuẩn mực nhất.',
      B: 'Sai: Hóa đơn tiền điện chỉ chứng minh dịch vụ tiêu thụ điện, không chứng minh quyền sở hữu nhà.',
      C: 'Sai: Giấy tờ tùy thân của người khác không liên quan đến nhà ở của bạn.',
      D: 'Sai: Hóa đơn đồ gia dụng không có giá trị chứng minh quyền sở hữu bất động sản.'
    },
    legalBasis: 'Điều 5 Nghị định số 62/2021/NĐ-CP của Chính phủ.'
  },
  {
    id: 'CT-21',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Khi công dân đổi từ thẻ CCCD gắn chip cũ sang mẫu thẻ Căn cước mới ban hành từ 01/7/2024 thì dãy 12 số định danh cá nhân có bị thay đổi không?',
    scenario: 'Tính duy nhất của Số định danh cá nhân công dân.',
    options: [
      { key: 'A', text: 'Bị đổi sang một dãy số hoàn toàn mới' },
      { key: 'B', text: 'KHÔNG THAY ĐỔI, số định danh cá nhân 12 chữ số được giữ nguyên vẹn suốt cuộc đời' },
      { key: 'C', text: 'Đổi thành dãy số gồm 15 chữ số' },
      { key: 'D', text: 'Mỗi lần cấp lại thẻ sẽ bị nhảy số ngẫu nhiên' },
    ],
    correctKey: 'B',
    explanation: 'Số định danh cá nhân là mã số duy nhất của mỗi công dân Việt Nam do Bộ Công an xác lập từ Cơ sở dữ liệu quốc gia về dân cư, không bao giờ thay đổi dù đổi phôi thẻ bao nhiêu lần.',
    whyWrong: {
      A: 'Sai: Số định danh cá nhân là duy nhất và cố định, không thay đổi khi đổi thẻ mới.',
      B: 'Chính xác! Dãy 12 số định danh cá nhân đi theo công dân từ khi sinh ra cho đến khi qua đời.',
      C: 'Sai: Số định danh cá nhân chuẩn của Việt Nam là dãy 12 chữ số.',
      D: 'Sai: Cấp lại thẻ chỉ thay đổi ngày cấp trên phôi thẻ, số định danh giữ nguyên.'
    },
    legalBasis: 'Điều 12 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-22',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Khi công dân bị mất thẻ Căn cước thì thủ tục xin cấp lại có bắt buộc phải đến trụ sở Công an không?',
    scenario: 'Thủ tục cấp lại thẻ Căn cước trực tuyến.',
    options: [
      { key: 'A', text: 'Có thể thực hiện trực tuyến hoàn toàn trên Cổng DVC Bộ Công an hoặc qua ứng dụng VNeID' },
      { key: 'B', text: 'Bắt buộc phải lên tận Bộ Công an tại Hà Nội' },
      { key: 'C', text: 'Không được cấp lại dưới bất kỳ hình thức nào' },
      { key: 'D', text: 'Phải chờ đủ 5 năm sau mới được cấp lại' },
    ],
    correctKey: 'A',
    explanation: 'Theo Luật Căn cước 2023, trường hợp cấp lại thẻ do bị mất có thể thực hiện trực tuyến trên Cổng dịch vụ công hoặc VNeID; cơ quan quản lý sử dụng dữ liệu mống mắt, vân tay đã có để cấp lại.',
    whyWrong: {
      A: 'Chính xác! Cải cách hành chính cho phép nộp hồ sơ cấp lại trực tuyến và nhận thẻ qua bưu điện.',
      B: 'Sai: Nộp hồ sơ tại cơ quan Công an quản lý căn cước cấp huyện/tỉnh hoặc qua Cổng DVC.',
      C: 'Sai: Công dân có quyền được cấp lại thẻ Căn cước khi bị mất hoặc hư hỏng.',
      D: 'Sai: Được làm thủ tục cấp lại ngay khi bị mất, không phải chờ đợi.'
    },
    legalBasis: 'Khoản 2 Điều 25 Luật Căn cước năm 2023.'
  },
  {
    id: 'CT-23',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Quy trình dịch vụ công liên thông "2 nhóm thủ tục hành chính liên thông" phục vụ người dân khi sinh con gồm những thủ tục nào?',
    scenario: 'Đột phá cải cách hành chính theo Đề án 06.',
    options: [
      { key: 'A', text: 'Đăng ký khai sinh - Đăng ký thường trú - Cấp thẻ BHYT cho trẻ dưới 6 tuổi' },
      { key: 'B', text: 'Đăng ký kết hôn - Mua đất - Đăng ký xe' },
      { key: 'C', text: 'Làm căn cước - Cấp bằng lái xe - Đăng ký hộ kinh doanh' },
      { key: 'D', text: 'Đăng ký tạm trú - Xin việc làm - Đóng học phí' },
    ],
    correctKey: 'A',
    explanation: 'Dịch vụ công liên thông cho phép cha mẹ chỉ cần nộp hồ sơ online 1 lần duy nhất để giải quyết đồng thời cả 3 thủ tục: Khai sinh, Nhập hộ khẩu thường trú và Cấp thẻ BHYT cho trẻ sơ sinh.',
    whyWrong: {
      A: 'Chính xác! Mô hình liên thông "Khai sinh - Thường trú - BHYT" tiết kiệm tối đa thời gian cho nhân dân.',
      B: 'Sai: Các thủ tục này không thuộc nhóm dịch vụ công liên thông khi sinh con.',
      C: 'Sai: Nhóm thủ tục không liên quan đến trẻ sơ sinh.',
      D: 'Sai: Các thủ tục hành chính độc lập khác nhau.'
    },
    legalBasis: 'Nghị định số 63/2024/NĐ-CP về liên thông thủ tục hành chính điện tử.'
  },
  {
    id: 'CT-24',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Khi bị mất điện thoại có cài ứng dụng VNeID Mức 2 hoặc nghi ngờ bị lộ mật khẩu, hành động khẩn cấp bạn cần làm là gì?',
    scenario: 'Bảo mật tài khoản định danh điện tử khi xảy ra sự cố mất thiết bị.',
    options: [
      { key: 'A', text: 'Yêu cầu khóa tài khoản trên trang web vneid.gov.vn hoặc gọi đường dây nóng Công an xã Đức Hợp (02213.815.999) hỗ trợ khóa tài khoản' },
      { key: 'B', text: 'Cứ để mặc kệ vì điện thoại người ta không biết mở' },
      { key: 'C', text: 'Đăng bài lên Facebook thông báo mật khẩu cho mọi người' },
      { key: 'D', text: 'Vứt luôn thẻ CCCD gắn chip đi' },
    ],
    correctKey: 'A',
    explanation: 'Khóa tài khoản VNeID kịp thời sẽ ngăn chặn kẻ gian truy cập dữ liệu cá nhân, giấy phép lái xe, BHYT và các tài khoản thanh toán tích hợp.',
    whyWrong: {
      A: 'Chính xác! Yêu cầu khóa tài khoản ngay lập tức trên hệ thống hoặc qua hotline Công an xã.',
      B: 'Sai lầm: Kẻ xấu có thể phá khóa điện thoại để truy cập dữ liệu nhạy cảm của bạn.',
      C: 'Sai lầm: Làm lộ thêm thông tin cho kẻ gian trên mạng xã hội.',
      D: 'Sai lầm: Thẻ CCCD là giấy tờ tùy thân quan trọng, không được vứt bỏ.'
    },
    legalBasis: 'Điều 19 Nghị định số 59/2022/NĐ-CP của Chính phủ.'
  },
  {
    id: 'CT-25',
    category: 'cu_tru',
    categoryLabel: 'Cư trú & Căn cước VNeID',
    question: 'Lực lượng Công an xã Đức Hợp có thu bất kỳ khoản tiền lệ phí nào khi hỗ trợ người dân kích hoạt tài khoản định danh VNeID không?',
    scenario: 'Chính sách miễn phí toàn diện của Đề án 06.',
    options: [
      { key: 'A', text: 'Hoàn toàn MIỄN PHÍ, không thu bất kỳ khoản tiền nào của nhân dân' },
      { key: 'B', text: 'Thu 50.000đ/tài khoản' },
      { key: 'C', text: 'Thu 100.000đ phí duy trì máy chủ hàng năm' },
      { key: 'D', text: 'Chỉ miễn phí cho cán bộ, người dân phải nộp phí' },
    ],
    correctKey: 'A',
    explanation: 'Chủ trương của Chính phủ và Bộ Công an là cấp và kích hoạt tài khoản VNeID hoàn toàn miễn phí cho toàn dân nhằm thúc đẩy chuyển đổi số quốc gia.',
    whyWrong: {
      A: 'Chính xác! Kích hoạt VNeID hoàn toàn không mất phí. Cảnh giác với bất kỳ ai đòi thu tiền dịch vụ.',
      B: 'Sai: Cơ quan Công an không thu phí dịch vụ kích hoạt.',
      C: 'Sai: Đây là chiêu trò của kẻ xấu mạo danh để vòi tiền nhân dân.',
      D: 'Sai: Mọi công dân đều được phục vụ miễn phí như nhau.'
    },
    legalBasis: 'Nghị định số 59/2022/NĐ-CP và chỉ đạo của Bộ Công an.'
  },

  // -----------------------------------------------------------------------
  // PHẦN 3: GIAO THÔNG & ĐĂNG KÝ XE CẤP XÃ (25 CÂU ĐỘC LẬP)
  // -----------------------------------------------------------------------
  {
    id: 'GT-01',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hiện nay, người dân cư trú tại xã Đức Hợp khi mua xe mô tô, xe gắn máy mới thì đến cơ quan nào để làm thủ tục đăng ký bấm biển số?',
    scenario: 'Phân cấp toàn diện đăng ký phương tiện giao thông cơ giới đường bộ.',
    options: [
      { key: 'A', text: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên)' },
      { key: 'B', text: 'Bắt buộc phải lên Công an huyện cũ' },
      { key: 'C', text: 'Lên Cục Cảnh sát giao thông tại Hà Nội' },
      { key: 'D', text: 'Tự ra tiệm sửa xe máy bấm biển' },
    ],
    correctKey: 'A',
    explanation: 'Theo Thông tư số 24/2023/TT-BCA, Công an xã Đức Hợp đã được trang bị đầy đủ máy móc, thiết bị để tiếp nhận hồ sơ và bấm biển số xe máy trực tiếp cho nhân dân tại xã.',
    whyWrong: {
      A: 'Chính xác! Công an xã Đức Hợp thực hiện đăng ký, cấp biển số xe máy trực tiếp cho nhân dân.',
      B: 'Sai: Hiện nay đã phân cấp triệt để về Công an xã, không phải đi lên huyện như trước đây.',
      C: 'Sai: Cục CSGT không trực tiếp bấm biển xe mô tô cho cá nhân ở cơ sở.',
      D: 'Sai: Tiệm sửa xe không có thẩm quyền nghiệp vụ đăng ký phương tiện cơ giới.'
    },
    legalBasis: 'Điều 4 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-02',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Quy định cốt lõi về "Biển số định danh" theo Thông tư số 24/2023/TT-BCA của Bộ Công an là gì?',
    scenario: 'Quản lý biển số xe theo mã định danh của chủ xe.',
    options: [
      { key: 'A', text: 'Biển số đi theo người (chủ xe), không đi theo xe' },
      { key: 'B', text: 'Biển số gắn chết vĩnh viễn với chiếc xe máy đó' },
      { key: 'C', text: 'Cứ mỗi năm công dân phải đổi biển số xe một lần' },
      { key: 'D', text: 'Biển số xe do người mua xe tự vẽ tự chọn' },
    ],
    correctKey: 'A',
    explanation: 'Biển số định danh được cấp và quản lý theo mã định danh cá nhân của chủ xe. Khi bán xe, chủ xe giữ lại biển số; khi mua xe mới sẽ được cơ quan Công an cấp lại biển số định danh đó.',
    whyWrong: {
      A: 'Chính xác! Biển số định danh gắn với chủ xe suốt đời, bán xe giữ lại biển số.',
      B: 'Sai: Quy định biển số đi theo xe là quy định cũ trước ngày 15/8/2023.',
      C: 'Sai: Biển số định danh được giữ nguyên, không phải đổi hàng năm.',
      D: 'Sai: Biển số xe do hệ thống máy tính của Bộ Công an phát hành theo quy chuẩn.'
    },
    legalBasis: 'Điều 3 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-03',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Khi chuyển quyền sở hữu xe máy (bán, tặng, cho xe), trong thời hạn bao nhiêu ngày chủ xe phải làm thủ tục thu hồi đăng ký, biển số?',
    scenario: 'Nghĩa vụ làm thủ tục thu hồi biển số khi mua bán xe.',
    options: [
      { key: 'A', text: 'Trong thời hạn 30 ngày kể từ ngày làm giấy tờ chuyển quyền sở hữu xe' },
      { key: 'B', text: 'Trong thời hạn 60 ngày' },
      { key: 'C', text: 'Trong thời hạn 90 ngày' },
      { key: 'D', text: 'Không quy định thời hạn, người mua tự đi làm lúc nào cũng được' },
    ],
    correctKey: 'A',
    explanation: 'Trong thời hạn 30 ngày kể từ ngày chuyển quyền sở hữu xe, chủ xe bắt buộc phải làm thủ tục thu hồi tại cơ quan Công an. Quá thời hạn sẽ bị xử phạt vi phạm hành chính.',
    whyWrong: {
      A: 'Chính xác! Khoản 4 Điều 6 Thông tư 24/2023/TT-BCA quy định thời hạn bắt buộc là 30 ngày.',
      B: 'Sai: 60 ngày là quá hạn và chủ xe sẽ bị xử phạt.',
      C: 'Sai: 90 ngày là quá hạn nghiêm trọng.',
      D: 'Sai: Nếu chủ cũ không làm thủ tục thu hồi thì vẫn phải chịu trách nhiệm pháp lý nếu xe gây tai nạn.'
    },
    legalBasis: 'Khoản 4 Điều 6 Thông tư số 24/2023/TT-BCA.'
  },
  {
    id: 'GT-04',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Khi bán xe máy cho người khác, chủ xe có được bán kèm cả biển số định danh của mình cho người mua không?',
    scenario: 'Quyền và nghĩa vụ đối với biển số định danh khi bán xe.',
    options: [
      { key: 'A', text: 'Tuyệt đối KHÔNG ĐƯỢC bán biển số định danh; chủ xe phải nộp lại đăng ký và biển số cho Công an' },
      { key: 'B', text: 'Được bán kèm biển số nếu người mua trả thêm tiền' },
      { key: 'C', text: 'Được bán kèm nếu hai bên viết giấy cam kết tay' },
      { key: 'D', text: 'Tùy ý thỏa thuận giữa hai bên' },
    ],
    correctKey: 'A',
    explanation: 'Nghiêm cấm mua bán, chuyển nhượng biển số định danh (trừ trường hợp bán xe ô tô kèm biển số trúng đấu giá). Biển số xe máy định danh bắt buộc phải thu hồi về cho chủ xe.',
    whyWrong: {
      A: 'Chính xác! Biển số định danh gắn với mã định danh cá nhân nên không thể chuyển nhượng cho người khác.',
      B: 'Sai: Bán biển số định danh xe máy là hành vi trái pháp luật.',
      C: 'Sai: Giấy cam kết tay mua bán biển số không có giá trị pháp lý.',
      D: 'Sai: Việc quản lý biển số là quy định bắt buộc của Nhà nước, không thể tự thỏa thuận.'
    },
    legalBasis: 'Điều 6 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-05',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Biển số định danh sau khi làm thủ tục thu hồi được cơ quan Công an lưu giữ cho chủ xe trong thời hạn bao lâu để cấp lại khi mua xe mới?',
    scenario: 'Thời hạn lưu giữ biển số định danh trong kho dữ liệu.',
    options: [
      { key: 'A', text: '05 năm kể từ ngày thu hồi' },
      { key: 'B', text: '01 năm kể từ ngày thu hồi' },
      { key: 'C', text: 'Lưu giữ vĩnh viễn không bao giờ mất' },
      { key: 'D', text: 'Chỉ lưu giữ 30 ngày' },
    ],
    correctKey: 'A',
    explanation: 'Cơ quan Công an lưu giữ biển số định danh trong thời hạn 05 năm. Nếu quá 5 năm chủ xe không đăng ký cho xe mới thì biển số sẽ được chuyển vào kho số để cấp cho người khác.',
    whyWrong: {
      A: 'Chính xác! Theo Khoản 7 Điều 3 Thông tư 24/2023/TT-BCA, thời hạn lưu giữ là 05 năm.',
      B: 'Sai: 01 năm là quá ngắn so với quyền lợi của công dân.',
      C: 'Sai: Sau 05 năm nếu không dùng đến sẽ bị thu hồi vào kho số công.',
      D: 'Sai mốc thời gian quy định.'
    },
    legalBasis: 'Khoản 7 Điều 3 Thông tư số 24/2023/TT-BCA.'
  },
  {
    id: 'GT-06',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Quy định pháp luật hiện hành về nồng độ cồn đối với người điều khiển xe mô tô, xe gắn máy khi tham gia giao thông?',
    scenario: 'Quy định về nồng độ cồn trong hơi thở và trong máu.',
    options: [
      { key: 'A', text: 'Nghiêm cấm tuyệt đối: Nồng độ cồn bằng 0 (không được có bất kỳ nồng độ cồn nào trong máu hoặc hơi thở)' },
      { key: 'B', text: 'Dưới 0,25 miligam/1 lít khí thở thì được phép lái xe' },
      { key: 'C', text: 'Uống 1 lon bia thì vẫn được lái xe bình thường' },
      { key: 'D', text: 'Chỉ cấm người lái xe ô tô, xe máy được uống rượu bia thoải mái' },
    ],
    correctKey: 'A',
    explanation: 'Luật Trật tự an toàn giao thông đường bộ và Luật Phòng, chống tác hại của rượu, bia nghiêm cấm điều khiển phương tiện tham gia giao thông mà trong máu hoặc hơi thở có nồng độ cồn.',
    whyWrong: {
      A: 'Chính xác! Pháp luật Việt Nam quy định ngưỡng nồng độ cồn bằng 0 khi điều khiển phương tiện.',
      B: 'Sai: 0,25 mg/l là mốc xác định khung tiền phạt, không phải ngưỡng được phép uống.',
      C: 'Sai: Uống 1 lon bia vẫn có cồn trong hơi thở và sẽ bị xử phạt nghiêm khắc.',
      D: 'Sai: Quy định áp dụng bình đẳng đối với cả người điều khiển ô tô, xe máy và xe đạp điện.'
    },
    legalBasis: 'Luật Phòng, chống tác hại của rượu, bia và Nghị định số 100/2019/NĐ-CP.'
  },
  {
    id: 'GT-07',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hành vi điều khiển xe mô tô, xe gắn máy không đội mũ bảo hiểm hoặc đội mũ bảo hiểm không cài quai đúng quy cách bị xử phạt thế nào?',
    scenario: 'Quy định bắt buộc đội mũ bảo hiểm bảo vệ an toàn tính mạng.',
    options: [
      { key: 'A', text: 'Bị phạt tiền từ 400.000 đồng đến 600.000 đồng' },
      { key: 'B', text: 'Chỉ bị nhắc nhở không phạt tiền' },
      { key: 'C', text: 'Bị tạm giữ phương tiện 30 ngày' },
      { key: 'D', text: 'Bị tịch thu xe máy' },
    ],
    correctKey: 'A',
    explanation: 'Nghị định 100/2019/NĐ-CP (sửa đổi bổ sung bởi Nghị định 123/2021/NĐ-CP) quy định phạt tiền từ 400.000đ - 600.000đ đối với hành vi không đội mũ bảo hiểm cho người đi xe mô tô, xe máy.',
    whyWrong: {
      A: 'Chính xác! Mức phạt tiền theo Nghị định 123/2021/NĐ-CP là từ 400.000đ đến 600.000đ.',
      B: 'Sai: Hành vi này bị phạt tiền trực tiếp, không chỉ dừng lại ở nhắc nhở.',
      C: 'Sai: Không áp dụng biện pháp tạm giữ phương tiện 30 ngày đối với lỗi mũ bảo hiểm thông thường.',
      D: 'Sai: Lỗi không đội mũ bảo hiểm không thuộc diện tịch thu phương tiện.'
    },
    legalBasis: 'Khoản 3 Điều 6 Nghị định số 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP).'
  },
  {
    id: 'GT-08',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Người dân muốn nộp phạt vi phạm giao thông trực tuyến tại nhà mà không cần phải đi đến kho bạc thì nộp qua đâu?',
    scenario: 'Nộp phạt vi phạm giao thông trực tuyến qua Cổng Dịch vụ công Quốc gia.',
    options: [
      { key: 'A', text: 'Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) hoặc Cổng DVC Bộ Công an' },
      { key: 'B', text: 'Chuyển khoản vào số tài khoản cá nhân của người lập biên bản' },
      { key: 'C', text: 'Nạp tiền bằng thẻ cào điện thoại Viettel' },
      { key: 'D', text: 'Gửi tiền mặt qua phong bì bưu điện' },
    ],
    correctKey: 'A',
    explanation: 'Người dân tra cứu biên bản vi phạm trên Cổng DVC Quốc gia bằng mã quyết định xử phạt hoặc số biên bản, sau đó thanh toán trực tuyến qua ngân hàng an toàn, minh bạch.',
    whyWrong: {
      A: 'Chính xác! Nộp phạt trực tuyến qua Cổng DVC Quốc gia nhanh chóng và biên lai điện tử gửi về tận nhà.',
      B: 'Sai lầm: Tuyệt đối không chuyển tiền vào tài khoản cá nhân của bất kỳ ai.',
      C: 'Sai: Cơ quan nhà nước không bao giờ thu tiền phạt bằng thẻ cào điện thoại.',
      D: 'Sai: Gửi tiền mặt qua phong bì thư là sai quy định quản lý tài chính công.'
    },
    legalBasis: 'Nghị quyết của Chính phủ và hướng dẫn của Cục Cảnh sát giao thông.'
  },
  {
    id: 'GT-09',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hồ sơ đăng ký xe máy lần đầu tại Trụ sở Công an xã Đức Hợp gồm những loại giấy tờ gốc nào?',
    scenario: 'Thủ tục chuẩn bị hồ sơ đăng ký xe máy mới tại cấp xã.',
    options: [
      { key: 'A', text: 'Giấy khai đăng ký xe, Hóa đơn GTGT, Chứng từ nộp lệ phí trước bạ, Phiếu kiểm tra chất lượng xuất xưởng' },
      { key: 'B', text: 'Chỉ cần mang theo xe máy không cần bất kỳ giấy tờ gì' },
      { key: 'C', text: 'Giấy phép lái xe và sổ hộ khẩu của hàng xóm' },
      { key: 'D', text: 'Bản cam kết tự chế tạo xe' },
    ],
    correctKey: 'A',
    explanation: 'Khi đi đăng ký xe mới, chủ xe mang phương tiện đến Công an xã để cà số khung, số máy và nộp bộ hồ sơ nguồn gốc xe hợp pháp gồm hóa đơn, phiếu xuất xưởng và biên lai nộp thuế trước bạ.',
    whyWrong: {
      A: 'Chính xác! Bộ 4 giấy tờ nguồn gốc xe là bắt buộc để hoàn thiện thủ tục đăng ký xe máy.',
      B: 'Sai: Không có giấy tờ chứng minh nguồn gốc hợp pháp thì cơ quan Công an không thể đăng ký xe.',
      C: 'Sai: Hồ sơ phải đứng tên chính chủ hoặc người được ủy quyền hợp pháp.',
      D: 'Sai: Xe tự chế không đủ tiêu chuẩn kỹ thuật không được phép đăng ký lưu hành.'
    },
    legalBasis: 'Điều 8 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-10',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Theo quy định, người từ đủ bao nhiêu tuổi trở lên thì được phép thi và điều khiển xe mô tô hai bánh từ 50cm3 trở lên?',
    scenario: 'Độ tuổi được cấp giấy phép lái xe mô tô.',
    options: [
      { key: 'A', text: 'Từ đủ 18 tuổi trở lên' },
      { key: 'B', text: 'Từ đủ 16 tuổi trở lên' },
      { key: 'C', text: 'Từ đủ 15 tuổi trở lên' },
      { key: 'D', text: 'Không giới hạn độ tuổi' },
    ],
    correctKey: 'A',
    explanation: 'Luật Giao thông đường bộ quy định người từ đủ 18 tuổi trở lên mới đủ điều kiện về sức khỏe và độ tuổi để thi sát hạch cấp Giấy phép lái xe mô tô hạng A1 (từ 50cm3 trở lên).',
    whyWrong: {
      A: 'Chính xác! Điều 60 Luật Giao thông đường bộ quy định người từ đủ 18 tuổi mới được lái xe mô tô từ 50cm3.',
      B: 'Sai: Người đủ 16 tuổi chỉ được điều khiển xe dưới 50cm3 hoặc xe máy điện.',
      C: 'Sai: Dưới 16 tuổi chưa đủ tuổi điều khiển bất kỳ loại xe máy cơ giới nào.',
      D: 'Sai: Pháp luật quy định nghiêm ngặt về độ tuổi để bảo đảm an toàn giao thông.'
    },
    legalBasis: 'Điều 60 Luật Giao thông đường bộ năm 2008.'
  },
  {
    id: 'GT-11',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Người từ đủ 16 tuổi đến dưới 18 tuổi được phép điều khiển loại phương tiện nào tham gia giao thông?',
    scenario: 'Quyền điều khiển phương tiện của học sinh cấp 3.',
    options: [
      { key: 'A', text: 'Xe gắn máy có dung tích xi-lanh dưới 50cm3 hoặc xe máy điện' },
      { key: 'B', text: 'Xe mô tô 110cm3 (Wave, Sirius...)' },
      { key: 'C', text: 'Xe ô tô con 4 chỗ' },
      { key: 'D', text: 'Xe phân khối lớn 150cm3' },
    ],
    correctKey: 'A',
    explanation: 'Học sinh từ đủ 16 đến dưới 18 tuổi chỉ được đi xe gắn máy dung tích dưới 50cm3 hoặc xe đạp điện, xe máy điện có vận tốc thiết kế không quá 50km/h.',
    whyWrong: {
      A: 'Chính xác! Dưới 18 tuổi chỉ được đi xe dưới 50cm3 hoặc xe máy điện và không cần bằng lái.',
      B: 'Sai: Xe từ 50cm3 trở lên bắt buộc phải đủ 18 tuổi và có bằng lái xe A1.',
      C: 'Sai: Lái xe ô tô bắt buộc phải từ đủ 18 tuổi trở lên.',
      D: 'Sai: Xe phân khối lớn càng đòi hỏi độ tuổi và bằng lái chuyên biệt.'
    },
    legalBasis: 'Khoản 1 Điều 60 Luật Giao thông đường bộ.'
  },
  {
    id: 'GT-12',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Cha mẹ giao xe máy từ 50cm3 trở lên cho con chưa đủ 18 tuổi (chưa có bằng lái) điều khiển thì ai là người bị xử phạt?',
    scenario: 'Trách nhiệm của chủ phương tiện khi giao xe cho người chưa đủ điều kiện.',
    options: [
      { key: 'A', text: 'Cả người điều khiển chưa đủ tuổi và chủ xe (cha mẹ) đều bị xử phạt rất nặng' },
      { key: 'B', text: 'Chỉ con bị phạt còn cha mẹ không liên quan' },
      { key: 'C', text: 'Không ai bị phạt vì là việc nội bộ gia đình' },
      { key: 'D', text: 'Chỉ nhà trường của con bị phạt' },
    ],
    correctKey: 'A',
    explanation: 'Chủ phương tiện giao xe cho người không đủ điều kiện sẽ bị phạt tiền từ 800.000đ - 2.000.000đ đối với cá nhân. Nếu người con gây tai nạn nghiêm trọng, cha mẹ có thể bị xử lý hình sự.',
    whyWrong: {
      A: 'Chính xác! Người chưa đủ tuổi bị tạm giữ xe và chủ xe giao xe bị phạt tiền rất nặng theo luật.',
      B: 'Sai: Pháp luật quy định xử phạt trực tiếp hành vi "giao xe cho người không đủ điều kiện".',
      C: 'Sai: Đây là hành vi vi phạm trật tự an toàn giao thông đường bộ quốc gia.',
      D: 'Sai: Nhà trường quản lý giáo dục, trách nhiệm pháp lý giao xe thuộc về gia đình.'
    },
    legalBasis: 'Khoản 5 Điều 30 Nghị định số 100/2019/NĐ-CP và Điều 264 Bộ luật Hình sự.'
  },
  {
    id: 'GT-13',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Giấy phép lái xe đã được tích hợp thành công trên ứng dụng VNeID thì khi CSGT kiểm tra có được xuất trình thay thế bằng lái cứng không?',
    scenario: 'Hiệu lực của giấy tờ điện tử tích hợp trên VNeID khi tham gia giao thông.',
    options: [
      { key: 'A', text: 'ĐƯỢC PHÉP xuất trình thông tin trên VNeID, có giá trị tương đương việc kiểm tra giấy phép lái xe bản giấy' },
      { key: 'B', text: 'Không được phép, bắt buộc phải có thẻ cứng' },
      { key: 'C', text: 'Chỉ được xuất trình vào ban đêm' },
      { key: 'D', text: 'Chỉ áp dụng cho người đi xe đạp' },
    ],
    correctKey: 'A',
    explanation: 'Theo Thông tư số 28/2024/TT-BCA của Bộ Công an, thông tin giấy tờ đã được tích hợp và xác thực trên VNeID có giá trị như kiểm tra trực tiếp giấy tờ bản cứng.',
    whyWrong: {
      A: 'Chính xác! Thông tư 28/2024/TT-BCA chính thức công nhận việc xuất trình giấy tờ trên VNeID.',
      B: 'Sai: Đây là quy định cũ trước khi Thông tư 28 có hiệu lực.',
      C: 'Sai: Quy định áp dụng 24/24h trong mọi thời điểm kiểm tra.',
      D: 'Sai: Áp dụng cho người điều khiển phương tiện cơ giới đường bộ.'
    },
    legalBasis: 'Thông tư số 28/2024/TT-BCA của Bộ Công an sửa đổi, bổ sung Thông tư 32/2023/TT-BCA.'
  },
  {
    id: 'GT-14',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Điều khiển xe máy đi ngược chiều của đường một chiều hoặc đi ngược chiều trên đường có biển "Cấm đi ngược chiều" bị phạt ra sao?',
    scenario: 'Xử lý hành vi đi ngược chiều gây nguy hiểm giao thông.',
    options: [
      { key: 'A', text: 'Phạt tiền từ 1.000.000 đồng đến 2.000.000 đồng và tước quyền sử dụng Giấy phép lái xe từ 1 đến 3 tháng' },
      { key: 'B', text: 'Chỉ phạt tiền 100.000 đồng' },
      { key: 'C', text: 'Không bị tước bằng lái xe' },
      { key: 'D', text: 'Chỉ bị ghi tên vào sổ tay' },
    ],
    correctKey: 'A',
    explanation: 'Hành vi đi ngược chiều rất nguy hiểm, là nguyên nhân trực tiếp dẫn đến các vụ tai nạn đối đầu thảm khốc nên bị phạt tiền nặng và tước giấy phép lái xe.',
    whyWrong: {
      A: 'Chính xác! Đi ngược chiều bị phạt từ 1 - 2 triệu đồng và bị tước bằng lái từ 1 - 3 tháng.',
      B: 'Sai: Mức phạt 100.000đ là không đúng quy định xử phạt hiện hành.',
      C: 'Sai: Hình phạt bổ sung bắt buộc là tước quyền sử dụng giấy phép lái xe.',
      D: 'Sai: Mọi hành vi vi phạm đều bị lập biên bản xử phạt hành chính.'
    },
    legalBasis: 'Điểm a Khoản 5 Điều 6 Nghị định số 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP).'
  },
  {
    id: 'GT-15',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Khi xảy ra tai nạn giao thông trên địa bàn xã Đức Hợp, người có mặt tại hiện trường có trách nhiệm gì?',
    scenario: 'Quy tắc ứng xử văn minh và trách nhiệm pháp lý khi xảy ra TNGT.',
    options: [
      { key: 'A', text: 'Dừng ngay phương tiện, bảo vệ hiện trường, cứu giúp người bị nạn và báo ngay cho Công an xã Đức Hợp (02213.815.999)' },
      { key: 'B', text: 'Bỏ mặc nạn nhân và tăng ga phóng xe đi thật nhanh' },
      { key: 'C', text: 'Đứng lại quay video phát trực tiếp lên mạng xã hội câu like mà không cấp cứu người' },
      { key: 'D', text: 'Tự ý xê dịch phương tiện làm xáo trộn hiện trường' },
    ],
    correctKey: 'A',
    explanation: 'Cứu giúp người bị nạn và bảo vệ hiện trường là nghĩa vụ đạo đức và pháp lý bắt buộc. Hành vi thấy người bị nạn không cứu giúp có thể bị truy cứu trách nhiệm hình sự theo Điều 132 BLHS.',
    whyWrong: {
      A: 'Chính xác! Ưu tiên số 1 là cứu nạn nhân, giữ nguyên hiện trường và báo tin cho Công an xã.',
      B: 'Sai: Bỏ mặc người gặp nạn là hành vi vi phạm đạo đức và có thể phạm tội hình sự.',
      C: 'Sai: Quay clip câu like cản trở công tác cấp cứu là hành vi đáng lên án.',
      D: 'Sai: Xáo trộn hiện trường làm sai lệch công tác điều tra nguyên nhân vụ tai nạn.'
    },
    legalBasis: 'Điều 38 Luật Giao thông đường bộ năm 2008 và Điều 132 Bộ luật Hình sự.'
  },
  {
    id: 'GT-16',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Người điều khiển xe mô tô hai bánh chỉ được chở 01 người, TRỪ trường hợp nào sau đây thì được chở tối đa 02 người (tổng cộng 3 người trên xe)?',
    scenario: 'Quy tắc chở người trên xe mô tô, xe gắn máy.',
    options: [
      { key: 'A', text: 'Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; hoặc chở trẻ em dưới 14 tuổi' },
      { key: 'B', text: 'Chở người lớn đi uống bia' },
      { key: 'C', text: 'Chở bạn bè đi dạo mát buổi tối' },
      { key: 'D', text: 'Cứ muốn chở bao nhiêu người cũng được' },
    ],
    correctKey: 'A',
    explanation: 'Luật Giao thông đường bộ quy định chỉ được chở 2 người ngồi sau trong 3 trường hợp ngoại lệ: đi cấp cứu, áp giải tội phạm hoặc chở trẻ em dưới 14 tuổi.',
    whyWrong: {
      A: 'Chính xác! Khoản 1 Điều 30 Luật Giao thông đường bộ quy định 3 trường hợp ngoại lệ này.',
      B: 'Sai: Chở 3 người lớn đi chơi là vi phạm lỗi kẹp ba và bị xử phạt nặng.',
      C: 'Sai: Chở quá số người quy định sẽ bị xử phạt hành chính.',
      D: 'Sai: Xe máy chỉ thiết kế chở tối đa 2 người để đảm bảo an toàn thăng bằng.'
    },
    legalBasis: 'Khoản 1 Điều 30 Luật Giao thông đường bộ năm 2008.'
  },
  {
    id: 'GT-17',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hành vi tự ý lắp còi ủ, đèn chớp ưu tiên của xe cứu thương, xe cảnh sát lên xe máy cá nhân bị xử lý như thế nào?',
    scenario: 'Sử dụng trái phép tín hiệu còi, đèn ưu tiên.',
    options: [
      { key: 'A', text: 'Bị phạt tiền, tịch thu thiết bị còi, đèn lắp sai quy định và tước Giấy phép lái xe' },
      { key: 'B', text: 'Được phép lắp nếu chỉ dùng ở đường làng' },
      { key: 'C', text: 'Chỉ cần xin phép người xung quanh' },
      { key: 'D', text: 'Không bị xử phạt' },
    ],
    correctKey: 'A',
    explanation: 'Tín hiệu ưu tiên chỉ dành riêng cho xe cứu hỏa, quân sự, công an, cứu thương khi đi làm nhiệm vụ khẩn cấp. Cá nhân tự ý lắp đặt sẽ bị tịch thu thiết bị và xử phạt nghiêm.',
    whyWrong: {
      A: 'Chính xác! Tịch thu toàn bộ còi, đèn ưu tiên và phạt tiền nghiêm khắc theo Nghị định 100.',
      B: 'Sai: Nghiêm cấm lắp đặt trên mọi tuyến đường giao thông công cộng.',
      C: 'Sai: Thiết bị ưu tiên phải do cơ quan có thẩm quyền cấp giấy phép.',
      D: 'Sai: Đây là hành vi vi phạm trật tự an toàn giao thông.'
    },
    legalBasis: 'Nghị định số 100/2019/NĐ-CP và Luật Giao thông đường bộ.'
  },
  {
    id: 'GT-18',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hành vi tự ý "độ pô" phát ra tiếng nổ inh tai, thay đổi kết cấu khung, máy, hình dáng của xe máy bị xử phạt ra sao?',
    scenario: 'Tự ý thay đổi kết cấu xe (độ xe) gây mất an ninh trật tự.',
    options: [
      { key: 'A', text: 'Phạt tiền chủ phương tiện và buộc phải khôi phục lại nguyên trạng ban đầu của xe theo thiết kế của nhà sản xuất' },
      { key: 'B', text: 'Được hoan nghênh vì thể hiện phong cách cá tính' },
      { key: 'C', text: 'Chỉ bị phạt nếu nổ pô trước cửa trường học' },
      { key: 'D', text: 'Không có quy định xử phạt lỗi này' },
    ],
    correctKey: 'A',
    explanation: 'Tự ý thay đổi kết cấu xe làm mất an toàn kỹ thuật phương tiện và tiếng ồn pô xe gây bức xúc trong nhân dân. Lực lượng chức năng sẽ xử phạt và bắt buộc tháo dỡ khôi phục pô zin.',
    whyWrong: {
      A: 'Chính xác! Bị phạt tiền và buộc khôi phục lại tình trạng kỹ thuật ban đầu của xe.',
      B: 'Sai: Độ pô nổ to là hành vi vi phạm pháp luật và gây ô nhiễm tiếng ồn làng xóm.',
      C: 'Sai: Vi phạm trên mọi tuyến đường đều bị lực lượng Công an xử lý.',
      D: 'Sai: Điều 30 Nghị định 100 quy định mức phạt rất rõ ràng đối với lỗi tự ý thay đổi kết cấu xe.'
    },
    legalBasis: 'Khoản 5 Điều 30 Nghị định số 100/2019/NĐ-CP.'
  },
  {
    id: 'GT-19',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Khi mua lại xe máy cũ của người khác, người mua cần làm thủ tục gì để đứng tên chính chủ trên giấy tờ xe?',
    scenario: 'Thủ tục sang tên đổi chủ xe máy cũ theo quy định mới.',
    options: [
      { key: 'A', text: 'Chờ chủ cũ làm thủ tục thu hồi biển số, sau đó người mua mang hồ sơ đến Công an xã nơi mình cư trú để làm thủ tục đăng ký sang tên và bấm biển số định danh mới' },
      { key: 'B', text: 'Chỉ cần cầm giấy tờ của chủ cũ rồi cứ thế đi xe cả đời không cần sang tên' },
      { key: 'C', text: 'Tự ý lấy bút xóa sửa tên trên đăng ký xe cũ' },
      { key: 'D', text: 'Nhờ thợ sửa xe cấp lại đăng ký xe mới' },
    ],
    correctKey: 'A',
    explanation: 'Quy trình sang tên xe: Chủ cũ làm thủ tục thu hồi đăng ký, biển số tại nơi họ cư trú; người mua mang hồ sơ thu hồi và hợp đồng mua bán đến Công an xã mình cư trú để bấm biển định danh.',
    whyWrong: {
      A: 'Chính xác! Đây là quy trình chuẩn mực theo Thông tư số 24/2023/TT-BCA của Bộ Công an.',
      B: 'Sai: Đi xe không chính chủ khi xảy ra tranh chấp, mất cắp hoặc tai nạn sẽ gặp rủi ro pháp lý lớn.',
      C: 'Sai: Tự ý sửa chữa giấy tờ xe là hành vi làm giả con dấu, tài liệu có thể bị xử lý hình sự.',
      D: 'Sai: Thợ sửa xe không có thẩm quyền cấp giấy tờ xe.'
    },
    legalBasis: 'Điều 14, Điều 15 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-20',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Người điều khiển xe máy có hành vi không chấp hành hiệu lệnh của đèn tín hiệu giao thông (vượt đèn đỏ, đèn vàng) bị phạt tiền bao nhiêu?',
    scenario: 'Mức xử phạt đối với hành vi vượt đèn đỏ, đèn vàng.',
    options: [
      { key: 'A', text: 'Phạt tiền từ 800.000 đồng đến 1.000.000 đồng và tước GPLX từ 1 đến 3 tháng' },
      { key: 'B', text: 'Chỉ phạt tiền từ 100.000 đồng đến 200.000 đồng' },
      { key: 'C', text: 'Chỉ bị nhắc nhở bằng lời nói' },
      { key: 'D', text: 'Tịch thu phương tiện vĩnh viễn' },
    ],
    correctKey: 'A',
    explanation: 'Theo Nghị định 100 (sửa đổi bổ sung bởi Nghị định 123), lỗi vượt đèn đỏ đối với xe máy phạt tiền từ 800.000đ - 1.000.000đ và tước quyền sử dụng Giấy phép lái xe từ 1 - 3 tháng.',
    whyWrong: {
      A: 'Chính xác! Vượt đèn đỏ bị phạt tiền từ 800.000đ đến 1.000.000đ và bị tước bằng lái.',
      B: 'Sai: 100.000đ - 200.000đ là mức phạt quá cũ không còn áp dụng.',
      C: 'Sai: Vượt đèn đỏ là lỗi nguy hiểm cao, bắt buộc phải lập biên bản xử phạt.',
      D: 'Sai: Không áp dụng tịch thu phương tiện đối với lỗi vượt đèn đỏ.'
    },
    legalBasis: 'Điểm e Khoản 4 Điều 6 Nghị định số 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP).'
  },
  {
    id: 'GT-21',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Xe máy điện (vận tốc thiết kế trên 25km/h hoặc công suất động cơ trên 250W) có bắt buộc phải làm thủ tục đăng ký gắn biển số không?',
    scenario: 'Quy định quản lý đăng ký biển số đối với xe máy điện.',
    options: [
      { key: 'A', text: 'BẮT BUỘC phải làm thủ tục đăng ký và gắn biển số xe máy điện tại Công an xã' },
      { key: 'B', text: 'Không cần đăng ký, cứ mua về là đi' },
      { key: 'C', text: 'Chỉ xe máy chạy xăng mới phải đăng ký' },
      { key: 'D', text: 'Tùy ý ai thích biển thì gắn' },
    ],
    correctKey: 'A',
    explanation: 'Xe máy điện được phân loại là phương tiện giao thông cơ giới đường bộ, bắt buộc phải đăng ký bấm biển số (biển MĐ) tại Công an xã Đức Hợp trước khi lưu thông ra đường.',
    whyWrong: {
      A: 'Chính xác! Xe máy điện bắt buộc phải đăng ký biển số tại Công an xã theo quy định của Bộ Công an.',
      B: 'Sai: Xe máy điện không gắn biển số khi lưu thông sẽ bị CSGT xử phạt tiền.',
      C: 'Sai: Quy định áp dụng cho cả phương tiện sử dụng động cơ điện.',
      D: 'Sai: Biển số là phương thức quản lý bắt buộc của cơ quan nhà nước.'
    },
    legalBasis: 'Luật Giao thông đường bộ và Thông tư số 24/2023/TT-BCA.'
  },
  {
    id: 'GT-22',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hành vi vừa lái xe máy vừa sử dụng điện thoại di động (nghe gọi, xem video, nhắn tin) bị xử phạt thế nào?',
    scenario: 'Xử phạt hành vi mất tập trung khi lái xe gây tai nạn.',
    options: [
      { key: 'A', text: 'Phạt tiền từ 800.000 đồng đến 1.000.000 đồng và tước Giấy phép lái xe từ 1 đến 3 tháng' },
      { key: 'B', text: 'Chỉ phạt 50.000 đồng' },
      { key: 'C', text: 'Được phép dùng nếu dùng tai nghe một bên' },
      { key: 'D', text: 'Không bị xử phạt nếu đi chậm dưới 20km/h' },
    ],
    correctKey: 'A',
    explanation: 'Sử dụng điện thoại khi lái xe làm giảm 50% khả năng phản xạ, rất dễ đâm vào chướng ngại vật hoặc người đi bộ. Mức phạt tiền từ 800.000đ - 1.000.000đ và tước bằng lái.',
    whyWrong: {
      A: 'Chính xác! Dùng điện thoại khi lái xe máy bị phạt từ 800.000đ - 1.000.000đ và tước GPLX.',
      B: 'Sai: Mức phạt tiền đã được tăng nặng theo Nghị định 123/2021/NĐ-CP.',
      C: 'Sai: Sử dụng tai nghe / thiết bị âm thanh khi lái xe máy cũng bị xử phạt tương tự.',
      D: 'Sai: Luật cấm hoàn toàn hành vi dùng điện thoại khi điều khiển phương tiện trên đường.'
    },
    legalBasis: 'Điểm h Khoản 4 Điều 6 Nghị định số 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP).'
  },
  {
    id: 'GT-23',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Hành vi thanh niên tụ tập điều khiển xe máy đi dàn hàng ngang từ 3 xe trở lên trên đường làng, ngõ xóm có vi phạm luật không?',
    scenario: 'Quy tắc di chuyển trật tự trên các tuyến đường nông thôn.',
    options: [
      { key: 'A', text: 'Vi phạm Luật Giao thông đường bộ và bị xử phạt tiền' },
      { key: 'B', text: 'Không vi phạm vì đường làng không có CSGT' },
      { key: 'C', text: 'Được phép nếu đi vào ban ngày' },
      { key: 'D', text: 'Chỉ vi phạm khi đi trên đường cao tốc' },
    ],
    correctKey: 'A',
    explanation: 'Đi dàn hàng ngang từ 3 xe trở lên gây cản trở các phương tiện khác lưu thông, dễ gây va quệt và tai nạn. Lực lượng Công an xã có thẩm quyền tuần tra và xử phạt nghiêm.',
    whyWrong: {
      A: 'Chính xác! Điều khiển xe đi dàn hàng ngang từ 3 xe trở lên là hành vi vi phạm bị cấm.',
      B: 'Sai: Công an xã có thẩm quyền tuần tra kiểm soát và xử lý vi phạm giao thông trên đường liên thôn, liên xã.',
      C: 'Sai: Nghiêm cấm dàn hàng ngang trong mọi khung giờ.',
      D: 'Sai: Quy định áp dụng trên tất cả các tuyến đường giao thông đường bộ.'
    },
    legalBasis: 'Điểm b Khoản 1 Điều 6 Nghị định số 100/2019/NĐ-CP.'
  },
  {
    id: 'GT-24',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Trong quá trình đi lại, biển số xe máy của bạn bị rơi mất hoặc gãy nứt mờ chữ, bạn cần làm thủ tục cấp lại ở đâu?',
    scenario: 'Thủ tục cấp lại biển số xe bị mất, hư hỏng.',
    options: [
      { key: 'A', text: 'Trực tiếp tại Công an xã Đức Hợp nơi đã đăng ký cấp biển số cho bạn' },
      { key: 'B', text: 'Ra chợ tự thuê thợ gò biển số giả gắn vào' },
      { key: 'C', text: 'Lấy bìa các-tông viết số gắn tạm' },
      { key: 'D', text: 'Cứ để xe không có biển số đi lại' },
    ],
    correctKey: 'A',
    explanation: 'Khi bị mất biển số hoặc biển số bị hỏng, chủ xe mang giấy tờ xe đến Công an xã Đức Hợp làm thủ tục cấp đổi/cấp lại biển số. Tuyệt đối không gắn biển số giả vì sẽ bị phạt nặng.',
    whyWrong: {
      A: 'Chính xác! Công an xã Đức Hợp làm thủ tục cấp lại biển số định danh nhanh chóng cho nhân dân.',
      B: 'Sai lầm: Sử dụng biển số tự chế/biển số giả là hành vi vi phạm pháp luật và bị phạt từ 4 - 6 triệu.',
      C: 'Sai: Gắn biển số bằng bìa viết tay không hợp lệ và bị xử phạt.',
      D: 'Sai: Điều khiển xe không gắn biển số sẽ bị tạm giữ phương tiện.'
    },
    legalBasis: 'Điều 17 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    id: 'GT-25',
    category: 'giao_thong',
    categoryLabel: 'Giao thông & Đăng ký xe',
    question: 'Khi Tổ công tác tuần tra của Công an xã Đức Hợp ra hiệu lệnh dừng xe để kiểm tra giấy tờ, người tham gia giao thông cần chấp hành như thế nào?',
    scenario: 'Nghĩa vụ chấp hành hiệu lệnh kiểm tra của lực lượng thi hành công vụ.',
    options: [
      { key: 'A', text: 'Bật xi nhan, giảm tốc độ và dừng xe an toàn vào lề đường bên phải, xuất trình giấy tờ theo yêu cầu của cán bộ' },
      { key: 'B', text: 'Quay đầu xe bỏ chạy hoặc tăng ga lao thẳng vào lực lượng làm nhiệm vụ' },
      { key: 'C', text: 'Chửi bới, chống đối và lăng mạ lực lượng thi hành công vụ' },
      { key: 'D', text: 'Bấm còi inh ỏi không chấp hành dừng xe' },
    ],
    correctKey: 'A',
    explanation: 'Chấp hành hiệu lệnh kiểm tra của lực lượng Công an là nghĩa vụ của công dân. Hành vi tăng ga bỏ chạy hoặc chống đối có thể bị truy cứu trách nhiệm hình sự về Tội chống người thi hành công vụ.',
    whyWrong: {
      A: 'Chính xác! Dừng xe an toàn và phối hợp xuất trình giấy tờ (bản cứng hoặc qua VNeID).',
      B: 'Sai lầm cực kỳ nguy hiểm: Bỏ chạy rất dễ gây tai nạn chết người và bị khởi tố hình sự.',
      C: 'Sai lầm: Lăng mạ, chống đối cán bộ thi hành công vụ sẽ bị xử lý nghiêm theo Điều 330 BLHS.',
      D: 'Sai: Không chấp hành hiệu lệnh kiểm soát giao thông sẽ bị xử phạt tiền rất nặng.'
    },
    legalBasis: 'Điều 330 Bộ luật Hình sự năm 2015 và Luật Giao thông đường bộ.'
  },

  // -----------------------------------------------------------------------
  // PHẦN 4: PHÒNG CHÁY CHỮA CHÁY & CỨU NẠN (25 CÂU ĐỘC LẬP)
  // -----------------------------------------------------------------------
  {
    id: 'PC-01',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Phong trào nòng cốt toàn dân tham gia PCCC được Công an xã Đức Hợp phát động sâu rộng đến 100% hộ gia đình có tên là gì?',
    scenario: 'Phong trào xây dựng thế trận PCCC toàn dân ở cơ sở.',
    options: [
      { key: 'A', text: 'Phong trào "Nhà tôi có bình chữa cháy" và xây dựng "Tổ liên gia an toàn PCCC"' },
      { key: 'B', text: 'Phong trào hàn kín chuồng cọp chống trộm' },
      { key: 'C', text: 'Phong trào tự do đốt rơm rạ cạnh bốt điện' },
      { key: 'D', text: 'Phong trào dự trữ xăng dầu trong gầm giường' },
    ],
    correctKey: 'A',
    explanation: 'Mỗi gia đình tự trang bị ít nhất 01 bình chữa cháy xách tay và tham gia Tổ liên gia an toàn PCCC giúp phát hiện sớm và dập tắt đám cháy ngay từ khi mới bùng phát.',
    whyWrong: {
      A: 'Chính xác! Phong trào "Nhà tôi có bình chữa cháy" giúp bảo vệ an toàn tính mạng từng gia đình.',
      B: 'Sai: Hàn kín chuồng cọp là bẫy tử thần khi xảy ra hỏa hoạn.',
      C: 'Sai: Đốt rơm rạ gần bốt điện nguy cơ cao gây chập cháy lưới điện.',
      D: 'Sai: Tích trữ xăng dầu trong nhà ở là nguồn nguy hiểm cháy nổ cực lớn.'
    },
    legalBasis: 'Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ về tăng cường công tác PCCC trong tình hình mới.'
  },
  {
    id: 'PC-02',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Đối với các hộ gia đình có ban công, tầng lầu lắp lồng sắt kiên cố ("chuồng cọp"), biện pháp cứu nạn sống còn là gì?',
    scenario: 'Mở lối thoát nạn thứ 2 cho nhà ở riêng lẻ kết hợp sản xuất kinh doanh.',
    options: [
      { key: 'A', text: 'Cắt mở cửa thoát hiểm thứ 2 có khóa dễ mở và bố trí sẵn thang dây hoặc dây thoát hiểm khẩn cấp' },
      { key: 'B', text: 'Hàn kín tuyệt đối tất cả các chấn song sắt' },
      { key: 'C', text: 'Xếp thật nhiều thùng carton, đồ cũ che kín ban công' },
      { key: 'D', text: 'Khóa cửa ban công bằng 5 ổ khóa và vứt chìa khóa đi' },
    ],
    correctKey: 'A',
    explanation: 'Khi tầng dưới xảy ra cháy, cầu thang bộ bị khói độc bao trùm không thể chạy xuống. Lối thoát nạn thứ 2 ở ban công chuồng cọp là lối thoát duy nhất để thoát sang nhà hàng xóm.',
    whyWrong: {
      A: 'Chính xác! Mở lối thoát nạn thứ 2 ở chuồng cọp đã cứu sống hàng ngàn người trong các vụ hỏa hoạn.',
      B: 'Sai lầm: Hàn kín chuồng cọp biến ngôi nhà thành chiếc "lồng sắt bẫy người" khi có cháy.',
      C: 'Sai: Đồ đạc cũ chất đống là chất cháy dẫn lửa và làm tắc lối thoát hiểm.',
      D: 'Sai lầm: Không tìm thấy chìa khóa thoát hiểm trong bóng tối và khói độc sẽ dẫn đến ngạt thở.'
    },
    legalBasis: 'Khuyến cáo của Cục Cảnh sát PCCC và CNCH (C07 - Bộ Công an).'
  },
  {
    id: 'PC-03',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Loại bình chữa cháy xách tay thông dụng, đa năng và hiệu quả nhất phù hợp để trang bị trong hộ gia đình là loại nào?',
    scenario: 'Lựa chọn phương tiện chữa cháy ban đầu cho gia đình.',
    options: [
      { key: 'A', text: 'Bình bột chữa cháy đa năng (ABC) hoặc bình khí chữa cháy CO2 có tem kiểm định an toàn' },
      { key: 'B', text: 'Bình xịt muỗi và côn trùng' },
      { key: 'C', text: 'Bình xịt sơn màu' },
      { key: 'D', text: 'Bình xịt bọt cạo râu' },
    ],
    correctKey: 'A',
    explanation: 'Bình bột ABC dập tắt hiệu quả đám cháy chất rắn (gỗ, giấy), chất lỏng (xăng, dầu) và chất khí, thiết bị điện hạ thế. Mỗi nhà nên có ít nhất 1 bình bột 4kg đặt gần cửa.',
    whyWrong: {
      A: 'Chính xác! Bình bột ABC hoặc bình khí CO2 đạt chuẩn kiểm định dập lửa nhanh chóng, an toàn.',
      B: 'Sai lầm: Bình xịt muỗi chứa dung môi bắt cháy, xịt vào lửa sẽ gây bùng nổ lớn.',
      C: 'Sai: Sơn màu là chất dễ cháy.',
      D: 'Sai: Các loại bình bọt thông thường không có tác dụng chữa cháy.'
    },
    legalBasis: 'Tiêu chuẩn quốc gia TCVN 3890:2023 về phương tiện PCCC cho nhà và công trình.'
  },
  {
    id: 'PC-04',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi phát hiện đám cháy bất ngờ xuất phát từ chập điện (quạt điện, ổ cắm, tủ lạnh), hành động đầu tiên bạn bắt buộc phải làm là gì?',
    scenario: 'Nguyên tắc dập tắt đám cháy thiết bị điện.',
    options: [
      { key: 'A', text: 'Lập tức ngắt cầu dao tổng / aptomat ngắt nguồn điện khu vực xảy ra cháy' },
      { key: 'B', text: 'Cầm xô nước hắt ngay vào ổ cắm đang bốc cháy' },
      { key: 'C', text: 'Cầm tay trần giật dây điện ra khỏi ổ cắm' },
      { key: 'D', text: 'Đóng kín tất cả các cửa lại đi ngủ' },
    ],
    correctKey: 'A',
    explanation: 'Ngắt nguồn điện là bước đầu tiên để tránh bị điện giật nguy hiểm đến tính mạng và ngăn chặn dòng điện tiếp tục nung nóng gây bùng cháy lan rộng.',
    whyWrong: {
      A: 'Chính xác! Cắt cầu dao điện tổng ngay lập tức để triệt tiêu nguồn nhiệt và chống giật điện.',
      B: 'Sai lầm chết người: Nước dẫn điện, tạt nước vào thiết bị đang có điện sẽ bị điện giật tử vong tại chỗ.',
      C: 'Sai lầm: Dây điện đang chập cháy nhiệt độ cực cao và rò rỉ điện, cầm tay trần sẽ bị giật chết người.',
      D: 'Sai: Bỏ mặc đám cháy sẽ làm lửa thiêu rụi toàn bộ ngôi nhà.'
    },
    legalBasis: 'Quy trình xử lý sự cố cháy nổ của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    id: 'PC-05',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Có được sử dụng nước thông thường để dập tắt đám cháy xăng, dầu hoặc đám cháy bình gas không? Vì sao?',
    scenario: 'Kỹ thuật dập tắt đám cháy chất lỏng dễ cháy.',
    options: [
      { key: 'A', text: 'TUYỆT ĐỐI KHÔNG dùng nước; vì xăng dầu nhẹ hơn nước, dội nước vào sẽ làm xăng dầu nổi lên bề mặt và cháy lan rộng hơn' },
      { key: 'B', text: 'Dùng nước dập rất tốt vì nước làm nguội nhanh' },
      { key: 'C', text: 'Được dùng nếu pha thêm nước rửa bát' },
      { key: 'D', text: 'Dùng càng nhiều nước càng tốt' },
    ],
    correctKey: 'A',
    explanation: 'Xăng dầu nhẹ hơn nước và không hòa tan trong nước. Dội nước vào làm xăng dầu nổi lên bề mặt nước tràn ra xung quanh, làm ngọn lửa bùng phát dữ dội hơn. Phải dùng bình bột, cát hoặc chăn ướt.',
    whyWrong: {
      A: 'Chính xác! Tuyệt đối không dùng nước dập cháy xăng dầu. Phải dùng bình chữa cháy bột hoặc chăn ướt trùm kín.',
      B: 'Sai lầm: Dội nước vào xăng dầu đang cháy sẽ làm lửa bùng lên và bắn ra xung quanh gây bỏng nặng.',
      C: 'Sai: Nước rửa bát không thể ngăn chặn xăng dầu nổi lên mặt nước.',
      D: 'Sai lầm chết người: Dội nhiều nước sẽ tạo thành dòng chảy xăng cháy thiêu rụi cả khu vực.'
    },
    legalBasis: 'Giáo trình huấn luyện nghiệp vụ PCCC của Bộ Công an.'
  },
  {
    id: 'PC-06',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi xảy ra cháy trong nhà có nhiều khói độc dày đặc bao trùm, kỹ năng di chuyển thoát nạn sống còn là gì?',
    scenario: 'Kỹ năng chống ngạt khói độc khi thoát khỏi đám cháy.',
    options: [
      { key: 'A', text: 'Hạ thấp người, cúi khom hoặc bò sát mặt sàn, dùng khăn ẩm bịt kín mũi miệng để di chuyển men theo tường ra lối thoát nạn' },
      { key: 'B', text: 'Đứng thẳng người chạy thật nhanh và hít thở sâu' },
      { key: 'C', text: 'Chui vào gầm giường hoặc tủ quần áo đóng chặt cửa trốn' },
      { key: 'D', text: 'Chạy lên tầng thượng khóa chặt cửa lại' },
    ],
    correctKey: 'A',
    explanation: 'Khói và khí độc nhẹ hơn không khí nên luôn bốc lên trên trần nhà; lớp không khí sạch dễ thở nhất nằm sát mặt sàn cách mặt đất khoảng 30 - 50cm. Khăn ướt giúp lọc bớt khói và khí CO.',
    whyWrong: {
      A: 'Chính xác! Bò sát mặt sàn và dùng khăn ẩm bịt mũi miệng giúp bạn tránh hít phải khí độc tử vong.',
      B: 'Sai lầm: Đứng thẳng hít thở sâu sẽ hít phải khói độc CO, CO2 gây bỏng đường hô hấp và ngất xỉu trong 1 phút.',
      C: 'Sai lầm: Trốn trong gầm giường, tủ quần áo sẽ bị ngạt khí độc và lực lượng cứu hộ không tìm thấy.',
      D: 'Sai: Chạy lên sân thượng khóa cửa dễ bị khói độc bao vây và không có đường rút lui.'
    },
    legalBasis: 'Cẩm nang hướng dẫn kỹ năng thoát hiểm khi có cháy của Bộ Công an.'
  },
  {
    id: 'PC-07',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Sạc pin xe đạp điện, xe máy điện trong gia đình cần tuân thủ những nguyên tắc an toàn PCCC nào?',
    scenario: 'Phòng ngừa cháy nổ từ pin Lithium-ion của phương tiện xe điện.',
    options: [
      { key: 'A', text: 'Không sạc pin qua đêm khi cả nhà đi ngủ không có người trông coi; sạc nơi thông thoáng, xa các vật liệu dễ cháy' },
      { key: 'B', text: 'Cắm sạc qua đêm liên tục 24/24h cạnh đệm mút và rèm cửa' },
      { key: 'C', text: 'Dùng dây điện tự nối chắp vá để sạc' },
      { key: 'D', text: 'Vừa sạc vừa xịt nước làm mát pin' },
    ],
    correctKey: 'A',
    explanation: 'Pin xe điện khi bị quá nhiệt hoặc chập mạch có thể bùng cháy với nhiệt độ hàng ngàn độ C và giải phóng khí độc cực mạnh. Chỉ sạc khi có người trông coi và dùng sạc chính hãng.',
    whyWrong: {
      A: 'Chính xác! Sạc nơi thoáng khí, không sạc qua đêm và không để gần vật liệu dễ bắt lửa.',
      B: 'Sai lầm nguy hiểm: Sạc qua đêm cạnh đệm mút khi pin phát nổ sẽ gây cháy lớn lúc cả nhà đang ngủ say.',
      C: 'Sai: Dây điện chắp vá chịu tải kém, dễ phát nhiệt gây chập cháy.',
      D: 'Sai lầm: Nước dính vào bộ sạc và pin sẽ gây đoản mạch chập nổ ngay lập tức.'
    },
    legalBasis: 'Khuyến cáo an toàn PCCC khi sạc xe điện của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    id: 'PC-08',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Số điện thoại khẩn cấp quốc gia để báo cháy và yêu cầu cứu nạn cứu hộ khẩn cấp của lực lượng Cảnh sát PCCC là số nào?',
    scenario: 'Số điện thoại khẩn cấp mọi công dân phải ghi nhớ.',
    options: [
      { key: 'A', text: '114' },
      { key: 'B', text: '113' },
      { key: 'C', text: '115' },
      { key: 'D', text: '111' },
    ],
    correctKey: 'A',
    explanation: '114 là số điện thoại khẩn cấp miễn phí gọi đến lực lượng Cảnh sát PCCC và Cứu nạn cứu hộ trên toàn quốc, hoạt động 24/7.',
    whyWrong: {
      A: 'Chính xác! 114 là đầu số khẩn cấp quốc gia gọi Cảnh sát PCCC và cứu nạn cứu hộ.',
      B: 'Sai: 113 là đầu số Cảnh sát phản ứng nhanh tiếp nhận tin báo an ninh trật tự.',
      C: 'Sai: 115 là đầu số cấp cứu y tế.',
      D: 'Sai: 111 là Tổng đài quốc gia bảo vệ trẻ em.'
    },
    legalBasis: 'Luật Phòng cháy và chữa cháy hiện hành.'
  },
  {
    id: 'PC-09',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi bước vào phòng bếp ngửi thấy mùi khí gas nồng nặc, hành động nào sau đây là NGUY HIỂM NHẤT TUYỆT ĐỐI CẤM LÀM?',
    scenario: 'Xử lý sự cố rò rỉ khí gas phòng ngừa nổ khí gas.',
    options: [
      { key: 'A', text: 'Bật công tắc điện, bật quạt hút mùi hoặc đánh diêm/bật lửa' },
      { key: 'B', text: 'Nhẹ nhàng mở toang tất cả các cửa sổ để gió thông khí' },
      { key: 'C', text: 'Khóa ngay van bình gas ngược chiều kim đồng hồ' },
      { key: 'D', text: 'Dùng quạt nan phẩy nhẹ tay để đuổi khí gas ra ngoài' },
    ],
    correctKey: 'A',
    explanation: 'Khi khí gas rò rỉ đạt nồng độ cháy nổ trong không khí, chỉ cần một tia lửa điện cực nhỏ từ công tắc bật đèn hoặc quạt điện cũng đủ kích nổ toàn bộ căn phòng.',
    whyWrong: {
      A: 'Chính xác! Bật công tắc điện sinh tia lửa điện làm kích nổ khối khí gas gây sập nhà và thương vong.',
      B: 'Sai: Mở cửa thông thoáng là hành động ĐÚNG để khí gas bay bớt ra ngoài.',
      C: 'Sai: Khóa van bình gas là hành động ĐÚNG bắt buộc phải làm đầu tiên.',
      D: 'Sai: Quạt bằng tay không phát sinh tia lửa điện nên an toàn.'
    },
    legalBasis: 'Khuyến cáo an toàn sử dụng khí đốt hóa lỏng (LPG) của Bộ Công an.'
  },
  {
    id: 'PC-10',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Trình tự các bước xử lý chuẩn mực khi phát hiện có sự cố rò rỉ khí gas trong nhà?',
    scenario: 'Các bước xử lý an toàn sự cố rò rỉ gas.',
    options: [
      { key: 'A', text: '1. Khóa van bình gas -> 2. Mở toang các cửa -> 3. Không bật/tắt thiết bị điện -> 4. Ra ngoài gọi thợ kỹ thuật' },
      { key: 'B', text: '1. Bật quạt điện cho hết mùi -> 2. Bật bếp thử xem còn gas không' },
      { key: 'C', text: '1. Bật đèn pin điện thoại soi tìm chỗ rò rỉ' },
      { key: 'D', text: '1. Đóng chặt tất cả cửa lại rồi xịt nước hoa' },
    ],
    correctKey: 'A',
    explanation: 'Luôn ghi nhớ: Khóa nguồn cung cấp gas trước, mở toang cửa sổ thông thoáng tự nhiên, không tác động vào bất kỳ thiết bị điện nào có thể sinh tia lửa điện.',
    whyWrong: {
      A: 'Chính xác! Quy trình 4 bước vàng đảm bảo an toàn tuyệt đối khi rò rỉ khí gas.',
      B: 'Sai lầm chết người: Bật quạt hay bật bếp sẽ kích nổ ngay lập tức.',
      C: 'Sai: Bật công tắc đèn pin cũng có thể tạo tia lửa nhỏ nguy hiểm.',
      D: 'Sai: Đóng kín cửa làm khí gas tích tụ càng đậm đặc và nguy hiểm.'
    },
    legalBasis: 'Quy trình xử lý sự cố rò rỉ khí gas của lực lượng Cảnh sát PCCC.'
  },
  {
    id: 'PC-11',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Các hộ gia đình kết hợp sản xuất kinh doanh tại xã Đức Hợp có bắt buộc phải ký bản cam kết bảo đảm an toàn PCCC với Công an xã không?',
    scenario: 'Trách nhiệm pháp lý về PCCC đối với hộ gia đình sản xuất kinh doanh.',
    options: [
      { key: 'A', text: 'BẮT BUỘC phải ký cam kết và thực hiện đầy đủ các điều kiện an toàn PCCC' },
      { key: 'B', text: 'Không bắt buộc, chỉ kinh doanh lớn mới cần' },
      { key: 'C', text: 'Tùy tâm ai thích thì ký' },
      { key: 'D', text: 'Chỉ các doanh nghiệp nhà nước mới phải ký' },
    ],
    correctKey: 'A',
    explanation: 'Theo Nghị định 136/2020/NĐ-CP và Nghị định 50/2024/NĐ-CP, nhà ở kết hợp kinh doanh thuộc diện quản lý nhà nước về PCCC của UBND và Công an cấp xã, bắt buộc phải ký cam kết.',
    whyWrong: {
      A: 'Chính xác! Bắt buộc phải ký cam kết và chấp hành kiểm tra an toàn PCCC của Công an xã Đức Hợp.',
      B: 'Sai: Nhà ở kết hợp sản xuất, kinh doanh tiềm ẩn nguy cơ cháy nổ cao nên bắt buộc quản lý.',
      C: 'Sai: Đây là quy định pháp luật bắt buộc, không phải tự nguyện tùy hứng.',
      D: 'Sai: Quy định áp dụng đối với tất cả cơ sở sản xuất kinh doanh tư nhân và hộ gia đình.'
    },
    legalBasis: 'Nghị định số 136/2020/NĐ-CP và Nghị định số 50/2024/NĐ-CP của Chính phủ.'
  },
  {
    id: 'PC-12',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khoảng cách an toàn tối thiểu khi đặt các vật dụng dễ cháy (giấy, rơm rạ, bao bì nylon, củi khô) cạnh bếp đun nấu gas hoặc bếp củi là bao nhiêu?',
    scenario: 'Khoảng cách an toàn phòng ngừa cháy lan trong gian bếp.',
    options: [
      { key: 'A', text: 'Ít nhất từ 0.5 mét đến 1 mét và thường xuyên dọn dẹp sạch sẽ' },
      { key: 'B', text: 'Để sát vào ngọn lửa bếp cũng không sao' },
      { key: 'C', text: 'Chỉ cần cách 5 centimet' },
      { key: 'D', text: 'Chất đống quanh bếp để tiện lấy đun nấu' },
    ],
    correctKey: 'A',
    explanation: 'Bếp đun nấu phát ra bức xạ nhiệt rất lớn. Đặt vật liệu dễ cháy quá gần bếp sẽ làm vật liệu hấp thụ nhiệt tự bốc cháy mà không cần tiếp xúc trực tiếp với ngọn lửa.',
    whyWrong: {
      A: 'Chính xác! Giữ khoảng cách tối thiểu từ 0.5m - 1m để ngăn bức xạ nhiệt gây bắt lửa.',
      B: 'Sai lầm: Để sát ngọn lửa vật liệu sẽ bốc cháy chỉ sau vài phút.',
      C: 'Sai: Khoảng cách 5cm quá gần, bức xạ nhiệt vẫn làm cháy đồ đạc.',
      D: 'Sai lầm: Chất đống vật liệu quanh bếp là nguyên nhân gây ra hàng loạt vụ cháy nhà ở nông thôn.'
    },
    legalBasis: 'Tiêu chuẩn an toàn PCCC nhà ở riêng lẻ nông thôn của Bộ Công an.'
  },
  {
    id: 'PC-13',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Bố trí bình chữa cháy xách tay trong nhà ở vị trí nào là khoa học, đúng kỹ thuật và thuận tiện nhất?',
    scenario: 'Bố trí phương tiện chữa cháy tại gia đình.',
    options: [
      { key: 'A', text: 'Nơi khô ráo, thoáng mát, dễ nhìn thấy, dễ lấy (gần cửa ra vào, chân cầu thang, hành lang)' },
      { key: 'B', text: 'Cất thật kỹ trong đáy tủ khóa kín lại' },
      { key: 'C', text: 'Để ngoài trời mưa nắng không có mái che' },
      { key: 'D', text: 'Cất trên gác xép kín' },
    ],
    correctKey: 'A',
    explanation: 'Đám cháy phát triển theo từng giây. Bình chữa cháy phải để ở nơi dễ thấy, dễ lấy để khi có cháy bất kỳ ai trong nhà cũng có thể với lấy và dập lửa được ngay.',
    whyWrong: {
      A: 'Chính xác! Đặt tại nơi thoáng mát, gần cửa ra vào hoặc chân cầu thang để dễ dàng tiếp cận.',
      B: 'Sai lầm: Cất trong tủ khóa khi có cháy hoảng loạn sẽ không kịp mở lấy bình.',
      C: 'Sai: Mưa nắng làm bình bị rỉ sét, hỏng van và xì khí tụt áp suất không chữa cháy được.',
      D: 'Sai: Để trên gác xép quá cao, người già và trẻ em không thể lấy được khi cần.'
    },
    legalBasis: 'TCVN 3890:2023 Phương tiện phòng cháy và chữa cháy cho nhà và công trình.'
  },
  {
    id: 'PC-14',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Cách kiểm tra đồng hồ đo áp suất trên bình bột chữa cháy xách tay: Kim đồng hồ chỉ ở vạch màu nào chứng tỏ bình còn đủ áp suất hoạt động tốt?',
    scenario: 'Kỹ năng tự kiểm tra phương tiện chữa cháy định kỳ.',
    options: [
      { key: 'A', text: 'Kim chỉ ở vạch màu XANH (áp suất đạt tiêu chuẩn sử dụng)' },
      { key: 'B', text: 'Kim chỉ ở vạch màu ĐỎ (bình đã bị tụt áp lực, không phun được bột)' },
      { key: 'C', text: 'Kim chỉ ở vạch màu VÀNG (áp suất đang bị quá tải)' },
      { key: 'D', text: 'Bình bột không có đồng hồ đo' },
    ],
    correctKey: 'A',
    explanation: 'Đồng hồ bình bột chữa cháy có 3 vạch: Đỏ (tụt áp, cần nạp lại), Xanh (đạt chuẩn sẵn sàng sử dụng), Vàng (tăng áp). Bình chỉ hoạt động hiệu quả khi kim ở vạch Xanh.',
    whyWrong: {
      A: 'Chính xác! Kim ở vạch XANH biểu thị áp suất đẩy trong bình đạt chuẩn kỹ thuật chữa cháy.',
      B: 'Sai: Kim ở vạch ĐỎ nghĩa là bình đã mất áp lực khí đẩy, bóp van bột sẽ không phun ra được.',
      C: 'Sai: Vạch VÀNG là áp lực trong bình tăng cao quá mức (thường do để nơi quá nóng).',
      D: 'Sai: Bình bột chữa cháy luôn được trang bị đồng hồ đo áp suất trên cổ van.'
    },
    legalBasis: 'Hướng dẫn sử dụng và bảo dưỡng bình chữa cháy của Cục Cảnh sát PCCC.'
  },
  {
    id: 'PC-15',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi không may quần áo trên người bị bén lửa bốc cháy, hành động xử lý đúng nhất để tự cứu mình là gì?',
    scenario: 'Kỹ năng dập lửa trên người khi bị bén cháy (Dừng lại - Nằm xuống - Lăn tròn).',
    options: [
      { key: 'A', text: 'Dừng lại, nằm ngay xuống đất, lấy tay che mặt và lăn qua lăn lại cho đến khi ngọn lửa tắt' },
      { key: 'B', text: 'Hốt hoảng chạy thật nhanh vòng quanh sân' },
      { key: 'C', text: 'Lấy quạt nan quạt mạnh vào người' },
      { key: 'D', text: 'Nhảy múa gào thét' },
    ],
    correctKey: 'A',
    explanation: 'Nguyên tắc vàng: Dừng lại - Nằm xuống - Lăn tròn (Stop, Drop and Roll). Tuyệt đối không được chạy vì gió sẽ thổi bùng ngọn lửa cháy dữ dội hơn và khói táp vào mặt gây bỏng nặng.',
    whyWrong: {
      A: 'Chính xác! Nằm xuống lăn người giúp triệt tiêu oxy tiếp xúc với ngọn lửa làm lửa tắt ngay.',
      B: 'Sai lầm chết người: Chạy nhanh tạo luồng gió tiếp thêm oxy làm lửa bùng cháy thiêu rụi toàn thân.',
      C: 'Sai lầm: Quạt vào người làm ngọn lửa bùng to hơn.',
      D: 'Sai: Gào thét làm hít phải khí nóng gây bỏng thanh quản và phổi.'
    },
    legalBasis: 'Cẩm nang sơ cấp cứu và xử lý tai nạn bỏng của Bộ Y tế và Bộ Công an.'
  },
  {
    id: 'PC-16',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Tại sao khi các tòa nhà, chung cư xảy ra cháy, người dân TUYỆT ĐỐI KHÔNG ĐƯỢC sử dụng thang máy để thoát hiểm?',
    scenario: 'Nguyên tắc thoát hiểm nhà cao tầng.',
    options: [
      { key: 'A', text: 'Vì hệ thống điện có thể bị cắt đột ngột gây kẹt trong thang máy, và giếng thang máy hoạt động như một ống hút khói độc tử thần' },
      { key: 'B', text: 'Vì đi thang máy tốn tiền điện' },
      { key: 'C', text: 'Vì thang máy di chuyển chậm hơn chạy bộ' },
      { key: 'D', text: 'Vì thang máy chỉ dành cho trẻ em' },
    ],
    correctKey: 'A',
    explanation: 'Khi có cháy, điện tòa nhà sẽ tự động ngắt hoặc cháy dây cáp làm thang máy rơi hoặc kẹt giữa các tầng. Giếng thang máy là đường hút khói độc đậm đặc nhất khiến nạn nhân tử vong vì ngạt.',
    whyWrong: {
      A: 'Chính xác! Thang máy có thể kẹt bất kỳ lúc nào và giếng thang máy là ống khói độc khổng lồ.',
      B: 'Sai: Vấn đề không phải chi phí mà là tính mạng con người.',
      C: 'Sai: Thang máy đi nhanh nhưng nguy cơ tử vong do kẹt và ngạt khói là gần như 100%.',
      D: 'Sai: Tuyệt đối không cho bất kỳ ai sử dụng thang máy khi có báo cháy.'
    },
    legalBasis: 'Quy chuẩn kỹ thuật quốc gia QCVN 06:2022/BXD về an toàn cháy cho nhà và công trình.'
  },
  {
    id: 'PC-17',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Tại khu vực nhà ở nông thôn xã Đức Hợp, các lối thoát nạn khẩn cấp dự phòng hữu hiệu khi cửa chính tầng 1 bị cháy gồm những lối nào?',
    scenario: 'Các phương án thoát nạn thứ 2 trong kiến trúc nhà ở nông thôn.',
    options: [
      { key: 'A', text: 'Cửa sau ra vườn, cửa ban công tầng trên, lối thoát qua mái sang nhà hàng xóm liền kề' },
      { key: 'B', text: 'Chỉ có duy nhất một cửa chính tầng 1, không có đường nào khác' },
      { key: 'C', text: 'Chui xuống giếng nước hoặc bể nước ngầm' },
      { key: 'D', text: 'Đứng yên trong phòng khách chờ đợi' },
    ],
    correctKey: 'A',
    explanation: 'Mỗi ngôi nhà cần chuẩn bị sẵn ít nhất 2 lối thoát nạn. Cửa thoát hiểm ra phía sau hoặc ban công sang nhà hàng xóm giúp thoát thân nhanh chóng khi cửa trước bị bít lối.',
    whyWrong: {
      A: 'Chính xác! Chủ động mở cửa sau, cửa ban công hoặc lối thoát qua mái nhà hàng xóm.',
      B: 'Sai: Nhà chỉ có một lối thoát duy nhất là cực kỳ nguy hiểm (nhà hình ống không lối thoát).',
      C: 'Sai: Chui xuống bể nước ngầm dễ bị ngạt thở tử vong.',
      D: 'Sai: Bị động chờ đợi trong phòng khách sẽ bị khói độc bao vây.'
    },
    legalBasis: 'Hướng dẫn an toàn PCCC nhà ở nông thôn của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    id: 'PC-18',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Biện pháp an toàn PCCC bắt buộc khi thắp hương thờ cúng và đốt vàng mã trong các dịp lễ Tết, ngày rằm?',
    scenario: 'Phòng ngừa hỏa hoạn do thắp hương và đốt vàng mã.',
    options: [
      { key: 'A', text: 'Bàn thờ thắp hương xa trần nhựa/rèm vải; đốt vàng mã trong lò/thùng kim loại có nắp đậy kín và dập tắt tàn lửa trước khi đi' },
      { key: 'B', text: 'Đốt vàng mã ngay trên sàn gỗ hoặc thảm phòng khách' },
      { key: 'C', text: 'Đốt vàng mã sát đống rơm rạ hoặc bốt điện đường làng' },
      { key: 'D', text: 'Thắp hàng trăm cây nến trên ban thờ rồi khóa cửa đi vắng' },
    ],
    correctKey: 'A',
    explanation: 'Tàn nhang rơi vào trần nhựa hoặc gió thổi tàn vàng mã bay vào vật liệu dễ cháy là nguyên nhân của hàng trăm vụ cháy mỗi dịp lễ Tết. Phải đốt trong thùng kim loại có nắp đậy.',
    whyWrong: {
      A: 'Chính xác! Giữ khoảng cách bàn thờ an toàn và đốt vàng mã trong lò kim loại có nắp đậy.',
      B: 'Sai lầm chết người: Sàn gỗ và thảm bắt cháy rất nhanh gây hỏa hoạn thiêu rụi nhà cửa.',
      C: 'Sai: Đốt cạnh đống rơm hoặc bốt điện dễ làm bùng phát cháy lan toàn thôn.',
      D: 'Sai lầm: Nến đổ ngã khi không có người trông coi sẽ gây cháy nhà.'
    },
    legalBasis: 'Khuyến cáo an toàn PCCC trong dịp lễ Tết của Công an tỉnh Hưng Yên.'
  },
  {
    id: 'PC-19',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi chảo dầu mỡ đang đun nấu trên bếp gas bị quá nhiệt bùng cháy dữ dội, cách xử lý an toàn và đúng kỹ thuật nhất là gì?',
    scenario: 'Dập tắt đám cháy dầu mỡ đun nấu trong nhà bếp.',
    options: [
      { key: 'A', text: 'Tắt ngay bếp, dùng nắp vung kim loại đậy kín chảo hoặc trùm chăn/khăn ẩm lên chảo để cách ly oxy' },
      { key: 'B', text: 'Bê nguyên chảo dầu đang cháy chạy ra ngoài sân' },
      { key: 'C', text: 'Cầm gáo nước lạnh đổ thẳng vào chảo dầu đang cháy' },
      { key: 'D', text: 'Lấy quạt nan quạt thật mạnh vào chảo' },
    ],
    correctKey: 'A',
    explanation: 'Đậy nắp vung hoặc trùm khăn ẩm sẽ triệt tiêu oxy làm ngọn lửa tự tắt. Tuyệt đối không đổ nước (dầu nóng gặp nước bắn tung tóe gây bỏng) và không bê chảo chạy (dễ đổ dầu cháy vào người).',
    whyWrong: {
      A: 'Chính xác! Tắt bếp và đậy vung chảo để triệt tiêu nguồn nhiệt và oxy giúp lửa tắt ngay.',
      B: 'Sai lầm nguy hiểm: Bê chảo chạy làm dầu sôi bắn vào người gây bỏng sâu và rơi vãi lửa khắp nhà.',
      C: 'Sai lầm chết người: Đổ nước vào dầu nóng sẽ gây nổ bùng ngọn lửa hình nấm táp vào mặt.',
      D: 'Sai: Quạt vào chảo làm cung cấp thêm oxy khiến ngọn lửa bùng to hơn.'
    },
    legalBasis: 'Cẩm nang PCCC gia đình của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    id: 'PC-20',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Hộ gia đình có xe máy, ô tô để trong nhà ở riêng lẻ cần tuân thủ khuyến cáo an toàn PCCC nào?',
    scenario: 'Phòng ngừa cháy nổ từ phương tiện giao thông để trong nhà ở.',
    options: [
      { key: 'A', text: 'Để xe cách xa nguồn lửa, nguồn nhiệt; tắt khóa điện; không tích trữ can xăng, dầu dự phòng trong nhà' },
      { key: 'B', text: 'Tích trữ sẵn 2 can xăng 20 lít cạnh xe máy để tiện đổ xăng' },
      { key: 'C', text: 'Đun nấu bếp củi ngay cạnh bình xăng xe máy' },
      { key: 'D', text: 'Để bình xăng xe máy bị rò rỉ chảy giọt tự do' },
    ],
    correctKey: 'A',
    explanation: 'Bình xăng xe máy là nguồn chất cháy lỏng nguy hiểm. Tích trữ can xăng trong nhà ở bị pháp luật nghiêm cấm vì nguy cơ cháy nổ cực lớn khi gặp nguồn nhiệt.',
    whyWrong: {
      A: 'Chính xác! Tắt khóa điện, để xe xa khu vực bếp nấu và tuyệt đối không tích trữ can xăng trong nhà.',
      B: 'Sai lầm chết người: Tích trữ can xăng trong nhà ở biến ngôi nhà thành "quả bom xăng" nổ tung khi có sự cố.',
      C: 'Sai: Bức xạ nhiệt từ bếp củi có thể kích nổ bình xăng xe máy.',
      D: 'Sai lầm: Rò rỉ xăng bốc hơi gặp tia lửa điện trong nhà sẽ bốc cháy dữ dội.'
    },
    legalBasis: 'Điều 17 Luật Phòng cháy và chữa cháy.'
  },
  {
    id: 'PC-21',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Biện pháp an toàn kỹ thuật phòng ngừa chập cháy hệ thống điện trong gia đình?',
    scenario: 'An toàn phòng chống cháy nổ do hệ thống thiết bị điện.',
    options: [
      { key: 'A', text: 'Lắp đặt aptomat tự động ngắt điện chống quá tải, chống giật; không cắm nhiều thiết bị công suất lớn vào cùng một ổ cắm' },
      { key: 'B', text: 'Dùng dây đồng, đinh sắt thay thế cầu chì' },
      { key: 'C', text: 'Cắm đồng thời nồi cơm, bếp từ, ấm siêu tốc, bàn là vào một ổ cắm dây kéo dài' },
      { key: 'D', text: 'Treo quần áo ướt lên dây điện để hong khô' },
    ],
    correctKey: 'A',
    explanation: 'Chập điện là nguyên nhân của hơn 70% các vụ cháy nhà ở. Sử dụng aptomat chống giật và dây dẫn đủ tiết diện tải điện giúp ngăn chặn đoản mạch sinh nhiệt.',
    whyWrong: {
      A: 'Chính xác! Sử dụng aptomat ngắt mạch tự động và phân bổ phụ tải điện hợp lý.',
      B: 'Sai lầm nguy hiểm: Thay cầu chì bằng dây đồng sẽ làm mất tính năng ngắt mạch khi quá tải, gây cháy nổ dây điện.',
      C: 'Sai lầm: Cắm nhiều thiết bị công suất cao gây quá tải làm nóng chảy ổ cắm và bốc cháy.',
      D: 'Sai: Nước từ quần áo ngấm vào dây điện rách gây rò điện và chập cháy.'
    },
    legalBasis: 'Quy chuẩn kỹ thuật quốc gia về kỹ thuật điện an toàn PCCC.'
  },
  {
    id: 'PC-22',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi tham gia mô hình "Tổ liên gia an toàn PCCC" tại xóm, công dân có trách nhiệm và quyền lợi gì?',
    scenario: 'Mô hình liên kết tương trợ PCCC giữa các hộ gia đình liền kề.',
    options: [
      { key: 'A', text: 'Trang bị chuông báo cháy liên kết; khi có cháy ấn chuông báo động để các nhà trong tổ cùng chạy sang tương trợ dập lửa' },
      { key: 'B', text: 'Chỉ lo dập lửa cho nhà mình, không quan tâm nhà hàng xóm' },
      { key: 'C', text: 'Bấm chuông báo cháy đùa nghịch' },
      { key: 'D', text: 'Tháo bỏ chuông báo cháy để khỏi ồn ào' },
    ],
    correctKey: 'A',
    explanation: 'Mô hình Tổ liên gia an toàn PCCC phát huy sức mạnh "tình làng nghĩa xóm", 5 đến 10 nhà liền kề nối chuông báo cháy để kịp thời ứng cứu nhau trong 5 phút vàng đầu tiên.',
    whyWrong: {
      A: 'Chính xác! Tinh thần tương thân tương ái, kịp thời hỗ trợ dập tắt cháy ngay từ ban đầu.',
      B: 'Sai: Cháy nhà hàng xóm liền kề nếu không dập sớm sẽ cháy lan sang thiêu rụi nhà mình.',
      C: 'Sai: Báo cháy giả là hành vi vi phạm pháp luật bị phạt tiền từ 4 - 6 triệu đồng.',
      D: 'Sai: Tháo dỡ chuông làm mất liên kết an toàn bảo vệ gia đình.'
    },
    legalBasis: 'Hướng dẫn xây dựng mô hình Tổ liên gia an toàn PCCC của Bộ Công an.'
  },
  {
    id: 'PC-23',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi người lớn đi làm vắng nhà, việc quan trọng nhất cần dặn dò các cháu nhỏ để phòng tránh hỏa hoạn là gì?',
    scenario: 'Bảo vệ an toàn PCCC cho trẻ nhỏ khi ở nhà một mình.',
    options: [
      { key: 'A', text: 'Tuyệt đối không nghịch diêm, bật lửa, không tự ý cắm thiết bị điện công suất lớn và biết cách mở cửa chạy ra ngoài kêu cứu khi có cháy' },
      { key: 'B', text: 'Khóa chặt cửa nhốt trẻ bên trong nhà một mình' },
      { key: 'C', text: 'Để diêm và bật lửa trong tầm tay của trẻ nhỏ' },
      { key: 'D', text: 'Bảo trẻ chui vào gầm tủ trốn nếu thấy lửa' },
    ],
    correctKey: 'A',
    explanation: 'Tuyệt đối không khóa cửa nhốt trẻ em bên trong khi vắng nhà. Giáo dục cho trẻ nhận biết nguy hiểm từ lửa, cách hô hoán hàng xóm và gọi người lớn trợ giúp.',
    whyWrong: {
      A: 'Chính xác! Giáo dục kỹ năng phòng ngừa và tuyệt đối không khóa trái cửa nhốt trẻ nhỏ.',
      B: 'Sai lầm nguy hiểm: Khóa cửa nhốt trẻ bên trong khi có cháy trẻ sẽ không thể thoát thân.',
      C: 'Sai: Trẻ hiếu động nghịch diêm bật lửa là nguyên nhân gây ra nhiều vụ cháy đau lòng.',
      D: 'Sai: Trốn trong tủ sẽ bị ngạt khí độc tử vong.'
    },
    legalBasis: 'Khuyến cáo của Cục Cảnh sát PCCC và Cục Trẻ em (Bộ LĐ-TB&XH).'
  },
  {
    id: 'PC-24',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Có được sử dụng bình chữa cháy khí CO2 để xịt trực tiếp vào người nạn nhân đang bị lửa bén cháy trên quần áo không? Vì sao?',
    scenario: 'Lưu ý y tế sống còn khi sử dụng bình chữa cháy khí CO2.',
    options: [
      { key: 'A', text: 'TUYỆT ĐỐI KHÔNG xịt vào người; vì khí CO2 phun ra có nhiệt độ cực lạnh (-79°C) sẽ gây bỏng lạnh hoại tử da thịt ngay lập tức' },
      { key: 'B', text: 'Xịt trực tiếp vào mặt người bị cháy rất tốt' },
      { key: 'C', text: 'Xịt thoải mái vì khí CO2 vô hại' },
      { key: 'D', text: 'Chỉ cấm xịt vào chân, được xịt vào đầu' },
    ],
    correctKey: 'A',
    explanation: 'Khí CO2 trong bình được nén ở áp suất cao, khi phun ra loa tạo luồng khí cực lạnh khoảng -79°C. Xịt trực tiếp vào cơ thể người sẽ gây bỏng lạnh thấu xương và hoại tử mô vĩnh viễn.',
    whyWrong: {
      A: 'Chính xác! Tuyệt đối không phun khí CO2 vào người. Dập lửa trên người bằng cách lăn đất hoặc trùm chăn ướt.',
      B: 'Sai lầm chết người: Phun khí -79°C vào mặt làm mù mắt và hoại tử đường thở tử vong.',
      C: 'Sai lầm nghiêm trọng: Khí CO2 nén cực kỳ nguy hiểm nếu tiếp xúc trực tiếp với da thịt người.',
      D: 'Sai: Nghiêm cấm xịt vào bất kỳ bộ phận nào trên cơ thể người.'
    },
    legalBasis: 'Quy chuẩn an toàn sử dụng thiết bị PCCC của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    id: 'PC-25',
    category: 'pccc',
    categoryLabel: 'PCCC & Cứu nạn',
    question: 'Khi phát hiện đám cháy ban đầu trên địa bàn xã Đức Hợp, số điện thoại trực ban Công an xã Đức Hợp để tiếp nhận báo tin và huy động lực lượng chữa cháy cơ sở là số nào?',
    scenario: 'Huy động sức mạnh 4 tại chỗ chữa cháy tại cơ sở xã Đức Hợp.',
    options: [
      { key: 'A', text: '02213.815.999 (Trực ban Công an xã Đức Hợp, Thôn Nho Lâm)' },
      { key: 'B', text: '1900.8198' },
      { key: 'C', text: '0903.000.113' },
      { key: 'D', text: '024.1234.5678' },
    ],
    correctKey: 'A',
    explanation: 'Số điện thoại trực ban 24/7 của Công an xã Đức Hợp là 02213.815.999. Công an xã sẽ lập tức điều động lực lượng Công an, Dân phòng và phương tiện đến hiện trường dập lửa kịp thời.',
    whyWrong: {
      A: 'Chính xác! 02213.815.999 là số hotline trực ban 24/7 của Công an xã Đức Hợp.',
      B: 'Sai: Số tổng đài viễn thông không liên quan.',
      C: 'Sai số điện thoại.',
      D: 'Sai: Đây là mã vùng Hà Nội, không phải Công an xã Đức Hợp tỉnh Hưng Yên.'
    },
    legalBasis: 'Phương án PCCC và CNCH cơ sở của UBND và Công an xã Đức Hợp, tỉnh Hưng Yên.'
  }
];

// =========================================================================
// HÀM LẤY BỘ CÂU HỎI KẾT HỢP DỮ LIỆU ĐƯỢC CÁN BỘ BIÊN TẬP (LOCAL STORAGE)
// =========================================================================
export function getFullQuestionBank(): DetailedQuizQuestion[] {
  let bank = [...MASTER_QUESTIONS];
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('admin_custom_questions');
    if (saved) {
      try {
        const custom: DetailedQuizQuestion[] = JSON.parse(saved);
        const map = new Map<string, DetailedQuizQuestion>();
        bank.forEach(q => map.set(q.id, q));
        custom.forEach(q => map.set(q.id, q));
        bank = Array.from(map.values());
      } catch (e) {
        console.error('Lỗi nạp câu hỏi custom:', e);
      }
    }
  }
  return bank;
}

export function generateMasterQuestionBank(): DetailedQuizQuestion[] {
  return [...MASTER_QUESTIONS];
}

// =========================================================================
// RÚT ĐỀ THI NGẪU NHIÊN: ĐẢM BẢO 100% CÂU HỎI KHÔNG BỊ TRÙNG LẶP
// =========================================================================
export function getRandomQuizExam(
  categoryFilter: string = 'all',
  questionCount: number = 10
): DetailedQuizQuestion[] {
  const bank = getFullQuestionBank();

  // Đảm bảo không trùng lặp ID ngay từ nguồn
  const uniqueMap = new Map<string, DetailedQuizQuestion>();
  bank.forEach(q => {
    if (!uniqueMap.has(q.id)) {
      uniqueMap.set(q.id, q);
    }
  });

  let pool = Array.from(uniqueMap.values());
  if (categoryFilter !== 'all') {
    pool = pool.filter(q => q.category === categoryFilter);
  }

  // Thuật toán Fisher-Yates xáo trộn ngẫu nhiên hoàn hảo
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const finalCount = Math.min(questionCount, shuffled.length);
  return shuffled.slice(0, finalCount);
}

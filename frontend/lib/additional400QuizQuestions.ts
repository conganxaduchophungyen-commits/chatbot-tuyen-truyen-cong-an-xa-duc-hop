import { DetailedQuizQuestion } from './quizBank';

interface TopicSeed {
  topicTitle: string;
  coreFact: string;
  wrongA: string;
  wrongB: string;
  wrongC: string;
  legalBasis: string;
}

const LUA_DAO_SEEDS: TopicSeed[] = [
  {
    topicTitle: 'Giả danh Công an xã gọi điện yêu cầu cài file .APK VNeID giả mạo',
    coreFact: 'Từ chối cài đặt mọi file .apk qua Zalo/link lạ; Công an xã Đức Hợp chỉ hướng dẫn trực tiếp tại trụ sở và chỉ tải VNeID trên App Store / CH Play',
    wrongA: 'Bấm vào đường link tải file .apk về máy và cấp quyền Trợ năng (Accessibility) theo lời đối tượng',
    wrongB: 'Đọc mật khẩu VNeID và mã OTP ngân hàng cho người gọi để nhờ đồng bộ hộ',
    wrongC: 'Quay video khuôn mặt sinh trắc học gửi qua Zalo cho người tự xưng cán bộ',
    legalBasis: 'Cảnh báo An ninh mạng Bộ Công an & Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.'
  },
  {
    topicTitle: 'Cuộc gọi Video Deepfake giả khuôn mặt người thân hỏi vay tiền gấp',
    coreFact: 'Bình tĩnh ngắt cuộc gọi Zalo/Messenger và gọi lại trực tiếp vào số điện thoại di động SIM thường của người thân để xác minh trước khi chuyển tiền',
    wrongA: 'Chuyển tiền ngay lập tức vào số tài khoản lạ vì đã nhìn thấy mặt người thân trên video',
    wrongB: 'Gửi thêm mã OTP ngân hàng để chuyển tiền nhanh trong 30 giây',
    wrongC: 'Chia sẻ màn hình ứng dụng ngân hàng cho người gọi tự thao tác',
    legalBasis: 'Cẩm nang phòng chống tội phạm công nghệ cao Bộ Công an & Điều 174 Bộ luật Hình sự 2015.'
  },
  {
    topicTitle: 'Tuyển cộng tác viên chốt đơn Shopee, TikTok tại nhà hưởng hoa hồng cao',
    coreFact: 'Tuyệt đối không nạp tiền cá nhân để "ứng vốn làm nhiệm vụ"; mọi hình thức bắt nộp tiền trước để nhận hoa hồng đều là lừa đảo chiếm đoạt tài sản',
    wrongA: 'Vay mượn thêm tiền nạp vào hệ thống để hoàn thành gói nhiệm vụ VIP gỡ lại tiền gốc',
    wrongB: 'Nộp thêm 20% phí giải ngân và thuế thu nhập cá nhân theo yêu cầu của "quản lý"',
    wrongC: 'Tiếp tục chuyển tiền vì tin rằng đơn hàng đầu tiên đã từng rút được 50.000đ',
    legalBasis: 'Điều 174 Bộ luật Hình sự 2015 (Tội lừa đảo chiếm đoạt tài sản) & Khuyến cáo Bộ Công an.'
  },
  {
    topicTitle: 'Giả danh nhân viên Điện lực (EVN) dọa cắt điện sau 2 giờ nếu không đóng tiền qua link lạ',
    coreFact: 'Không bấm vào đường link lạ hay tải ứng dụng giả mạo EVN; chỉ tra cứu và thanh toán tiền điện qua ứng dụng ngân hàng chính thống hoặc tổng đài EVN miền Bắc 19006769',
    wrongA: 'Tải ứng dụng CSKH EVN từ đường link đối tượng gửi qua Zalo để thanh toán gấp',
    wrongB: 'Cung cấp mã OTP và mật khẩu Internet Banking cho nhân viên giả mạo',
    wrongC: 'Chuyển khoản tiền điện vào tài khoản cá nhân mang tên người lạ',
    legalBasis: 'Cảnh báo của Tập đoàn Điện lực Việt Nam (EVN) và Cục An ninh mạng (A05 - Bộ Công an).'
  },
  {
    topicTitle: 'Giả danh Cơ quan Thuế hướng dẫn cài app eTax Mobile giả để hoàn thuế TNCN',
    coreFact: 'Không tải ứng dụng Thuế qua Zalo/Telegram; ứng dụng eTax Mobile chính thức chỉ tải từ App Store / Google Play và đăng nhập bằng tài khoản VNeID Mức 2',
    wrongA: 'Cài đặt file eTax_Update.apk do người lạ gửi và quét sinh trắc học khuôn mặt trên đó',
    wrongB: 'Chuyển trước phí hồ sơ hoàn thuế 2 triệu đồng vào tài khoản cá nhân',
    wrongC: 'Cung cấp mật khẩu tài khoản ngân hàng để nhận tiền hoàn thuế tự động',
    legalBasis: 'Khuyến cáo của Tổng cục Thuế & Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao.'
  },
  {
    topicTitle: 'Giả danh Viện kiểm sát / Tòa án gửi Lệnh bắt tạm giam giả qua Zalo, yêu cầu chuyển tiền chứng minh trong sạch',
    coreFact: 'Cơ quan Công an, Viện kiểm sát, Tòa án KHÔNG BAO GIỜ làm việc hay gửi Lệnh bắt qua Zalo và KHÔNG BAO GIỜ yêu cầu công dân chuyển tiền vào tài khoản để xác minh',
    wrongA: 'Hoảng sợ rút hết sổ tiết kiệm chuyển vào "Tài khoản tạm giữ điều tra" của đối tượng',
    wrongB: 'Giữ bí mật tuyệt đối, tự nhốt mình trong phòng khách sạn theo lệnh của đối tượng ("bắt cóc online")',
    wrongC: 'Khai báo toàn bộ số dư các tài khoản ngân hàng và mã OTP cho người gọi',
    legalBasis: 'Bộ luật Tố tụng hình sự 2015 & Cảnh báo khẩn của Công an tỉnh Hưng Yên.'
  },
  {
    topicTitle: 'Thủ đoạn gửi tin nhắn Brandname giả mạo Ngân hàng báo điểm thưởng sắp hết hạn',
    coreFact: 'Tuyệt đối không đăng nhập tên tài khoản và mật khẩu ngân hàng vào các trang web lạ đính kèm trong tin nhắn SMS; ngân hàng không bao giờ yêu cầu nhập OTP để đổi quà',
    wrongA: 'Truy cập ngay vào đường link lạ trong SMS và nhập mật khẩu, mã Smart OTP để nhận quà',
    wrongB: 'Chụp ảnh 2 mặt thẻ tín dụng kèm mã bảo mật CVV gửi cho tổng đài viên giả mạo',
    wrongC: 'Cấp quyền điều khiển màn hình điện thoại từ xa qua UltraViewer/AnyDesk',
    legalBasis: 'Cảnh báo của Ngân hàng Nhà nước Việt Nam & Cục An toàn thông tin.'
  },
  {
    topicTitle: 'Giả danh giáo viên hoặc bác sĩ báo tin con bị tai nạn cấp cứu cần chuyển tiền mổ gấp',
    coreFact: 'Bình tĩnh gọi điện trực tiếp cho Giáo viên chủ nhiệm, Ban giám hiệu nhà trường hoặc người thân để kiểm tra tình trạng của con trước khi chuyển bất kỳ khoản tiền nào',
    wrongA: 'Lập tức chuyển hàng chục triệu đồng vào số tài khoản cá nhân của người gọi vì quá hoảng loạn',
    wrongB: 'Làm theo yêu cầu không được gọi cho nhà trường vì "đang trong phòng mổ"',
    wrongC: 'Vay nóng tiền chuyển tiếp nhiều lần theo yêu cầu đóng viện phí bổ sung',
    legalBasis: 'Khuyến cáo phòng chống lừa đảo của Bộ Công an & Bộ Giáo dục và Đào tạo.'
  },
  {
    topicTitle: 'Nhận được khoản tiền lạ chuyển nhầm vào tài khoản ngân hàng rồi có người đòi trả vào tài khoản khác',
    coreFact: 'Không tự ý chuyển trả vào tài khoản khác hoặc bấm link lạ; chỉ làm việc với Ngân hàng của mình hoặc trình báo Công an xã Đức Hợp để lập biên bản hoàn trả đúng chủ tài khoản gốc',
    wrongA: 'Chuyển trả ngay vào một số tài khoản khác tên người gửi theo lời thúc giục qua điện thoại',
    wrongB: 'Nhập mã OTP vào đường link "xác nhận hoàn tiền quốc tế" do kẻ lạ gửi (biến thành khoản vay tín dụng đen)',
    wrongC: 'Rút toàn bộ số tiền chuyển nhầm ra tiêu xài cá nhân và chặn số người gửi',
    legalBasis: 'Điều 579 Bộ luật Dân sự 2015, Điều 176 Bộ luật Hình sự & Hướng dẫn của Ngân hàng Nhà nước.'
  },
  {
    topicTitle: 'Lừa đảo "Lấy lại tiền bị lừa" trên Facebook mạo danh Luật sư, Cục An ninh mạng A05',
    coreFact: 'Cảnh giác tuyệt đối: Mọi trang Facebook quảng cáo "Thu hồi tiền treo, lấy lại tiền bị lừa đảo trong 30 phút" và yêu cầu đóng phí trước đều là ổ nhóm lừa đảo lần thứ hai',
    wrongA: 'Đóng tiếp 5 - 10 triệu đồng "phí chạy phần mềm đánh sập hệ thống" để rút tiền cũ về',
    wrongB: 'Cung cấp sao kê ngân hàng và mật khẩu tài khoản cho trang Facebook mạo danh A05',
    wrongC: 'Chuyển tiền "thuế giải ngân kho bạc" theo giấy xác nhận đóng dấu đỏ giả mạo',
    legalBasis: 'Cảnh báo chính thức của Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05 - Bộ Công an).'
  },
  {
    topicTitle: 'Giả danh cán bộ Bảo hiểm xã hội (BHXH) gọi điện yêu cầu cập nhật VssID qua link lạ',
    coreFact: 'Cơ quan BHXH không yêu cầu người dân truy cập link lạ hay trả phí để đồng bộ CCCD trên VssID; mọi thủ tục được hỗ trợ miễn phí tại cơ quan BHXH hoặc trên VNeID chính thống',
    wrongA: 'Bấm vào đường link giả mạo cổng BHXH và quét khuôn mặt xác thực sinh trắc học',
    wrongB: 'Cài đặt ứng dụng VssID_Pro.apk qua Zalo theo hướng dẫn của đối tượng',
    wrongC: 'Đọc mã OTP ngân hàng để "nhận tiền hoàn trả bảo hiểm y tế 5 năm liên tục"',
    legalBasis: 'Công văn cảnh báo của Bảo hiểm xã hội Việt Nam & Bộ Công an.'
  },
  {
    topicTitle: 'Kịch bản kết bạn làm quen qua mạng (Tình cảm xuyên biên giới) hứa gửi thùng quà ngoại tệ, vàng',
    coreFact: 'Không bao giờ chuyển tiền "phí hải quan, phí phạt chống rửa tiền" cho người quen qua mạng để nhận bưu kiện từ nước ngoài; đây là kịch bản lừa đảo tình cảm kinh điển',
    wrongA: 'Chuyển hàng trăm triệu đồng cho "nhân viên sân bay/hải quan" giả mạo để lấy kiện hàng triệu đô',
    wrongB: 'Gửi ảnh chụp Căn cước và sổ đỏ để làm thủ tục bảo lãnh kiện hàng ngoại tệ',
    wrongC: 'Vay lãi nặng để đóng nốt "phí thông quan lần cuối" theo lời dụ dỗ',
    legalBasis: 'Cảnh báo của Tổng cục Hải quan & Cục Cảnh sát hình sự Bộ Công an.'
  },
  {
    topicTitle: 'Giả danh nhân viên nhà mạng viễn thông dọa khóa SIM 2 chiều sau 2 tiếng do chưa chuẩn hóa thông tin',
    coreFact: 'Ngắt máy ngay và tự kiểm tra thông tin thuê bao bằng cú pháp nhắn tin TTTB gửi 1414 (miễn phí) hoặc đến điểm giao dịch chính thức của Viettel, VinaPhone, MobiFone',
    wrongA: 'Bấm phím 1 và làm theo hướng dẫn chuyển hướng cuộc gọi (**21*...) khiến mất quyền kiểm soát SIM',
    wrongB: 'Đọc mã OTP vừa gửi về máy cho nhân viên giả mạo để "giữ số điện thoại"',
    wrongC: 'Truy cập website lạ nhập thông tin thẻ ngân hàng nộp phí chuẩn hóa SIM',
    legalBasis: 'Nghị định 49/2017/NĐ-CP & Cảnh báo của Cục Viễn thông - Bộ Thông tin và Truyền thông.'
  },
  {
    topicTitle: 'Lừa đảo kêu gọi đầu tư sàn chứng khoán quốc tế, tiền ảo, vàng Forex cam kết lãi 30%/tháng bảo toàn vốn',
    coreFact: 'Không tham gia các sàn đầu tư tài chính, tiền ảo tự phong trên Telegram/Zalo cam kết lãi suất khủng "chắc thắng 100%"; đây là mô hình Ponzi dựng sàn ảo thao túng số dư',
    wrongA: 'Thế chấp sổ đỏ nạp thêm hàng trăm triệu đồng để "nâng cấp tài khoản VIP" rút tiền gốc',
    wrongB: 'Nộp 15% thuế thu nhập cá nhân vào tài khoản cá nhân của "trưởng nhóm chuyên gia"',
    wrongC: 'Rủ thêm bà con hàng xóm cùng nạp tiền để nhận thưởng hoa hồng giới thiệu',
    legalBasis: 'Cảnh báo của Ủy ban Chứng khoán Nhà nước & Bộ Công an.'
  },
  {
    topicTitle: 'Lừa đảo dịch vụ nâng hạn mức thẻ tín dụng hoặc rút tiền mặt từ thẻ tín dụng qua mạng',
    coreFact: 'Tuyệt đối không chụp ảnh mặt trước/mặt sau thẻ tín dụng, số CVV/CVC và không cung cấp mã OTP giao dịch cho bất kỳ cá nhân nào quảng cáo nâng hạn mức thẻ online',
    wrongA: 'Gửi ảnh chụp 2 mặt thẻ tín dụng kèm 3 số bảo mật CVV ở mặt sau cho đối tượng',
    wrongB: 'Đọc mã OTP 6 số gửi về SMS để đối tượng thực hiện giao dịch thanh toán khống',
    wrongC: 'Đăng nhập tài khoản ngân hàng vào website lạ để xác minh thu nhập',
    legalBasis: 'Quy định an toàn thẻ của Ngân hàng Nhà nước & Điều 290 Bộ luật Hình sự.'
  },
  {
    topicTitle: 'Lừa đảo bình chọn giọng hát nhí, tài năng nhí hoặc cuộc thi ảnh gia đình qua đường link lạ',
    coreFact: 'Không bấm vào các đường link bình chọn yêu cầu đăng nhập tài khoản Zalo, Facebook hoặc nhập mã OTP, vì đối tượng sẽ chiếm đoạt tài khoản để nhắn tin vay tiền bạn bè',
    wrongA: 'Nhập số điện thoại, mật khẩu Zalo và mã xác nhận OTP vào trang web bình chọn lạ',
    wrongB: 'Quét mã QR lạ để "xác nhận lượt bình chọn hợp lệ"',
    wrongC: 'Chuyển tiếp đường link độc hại đó cho toàn bộ danh bạ gia đình cùng bấm vào',
    legalBasis: 'Cảnh báo của Cục An toàn thông tin (Bộ TT&TT) về thủ đoạn chiếm đoạt tài khoản mạng xã hội.'
  },
  {
    topicTitle: 'Lừa đảo đặt phòng khách sạn, resort, vé máy bay giá rẻ dịp lễ Tết qua Fanpage có tích xanh giả',
    coreFact: 'Kiểm tra kỹ thông tin minh bạch của trang (lịch sử đổi tên, vị trí quản trị viên), gọi điện xác nhận trực tiếp với khách sạn và không chuyển khoản đặt cọc vào tài khoản cá nhân đáng ngờ',
    wrongA: 'Chuyển tiếp tiền cọc lần 2, lần 3 vì đối tượng báo "sai cú pháp nội dung chuyển khoản"',
    wrongB: 'Nhập mã kích hoạt VNPAY/VietQR theo hướng dẫn của đối tượng để "nhận lại tiền cọc"',
    wrongC: 'Chuyển 100% tiền phòng ngay lập tức vì sợ hết suất khuyến mãi giảm giá 70%',
    legalBasis: 'Khuyến cáo của Cục Du lịch Quốc gia Việt Nam & Bộ Công an.'
  },
  {
    topicTitle: 'Lừa đảo môi giới xuất khẩu lao động Hàn Quốc, Nhật Bản, Châu Âu bao đỗ không cần thi tiếng',
    coreFact: 'Chỉ tìm hiểu và nộp hồ sơ xuất khẩu lao động qua Trung tâm Lao động ngoài nước (Bộ LĐ-TB&XH) hoặc doanh nghiệp có Giấy phép hoạt động dịch vụ đưa người lao động đi làm việc ở nước ngoài',
    wrongA: 'Đóng hàng trăm triệu đồng tiền cọc cho cá nhân trên mạng hứa "đi diện visa du lịch rồi trốn ở lại làm việc"',
    wrongB: 'Giao toàn bộ Hộ chiếu gốc, Sổ đỏ bản gốc cho "cò mồi" không có hợp đồng pháp lý',
    wrongC: 'Nộp tiền chống trốn vào tài khoản cá nhân không có phiếu thu của doanh nghiệp được cấp phép',
    legalBasis: 'Luật Người lao động Việt Nam đi làm việc ở nước ngoài theo hợp đồng số 69/2020/QH14.'
  },
  {
    topicTitle: 'Lừa đảo phát tán mã QR giả mạo dán đè lên mã QR thanh toán tại cửa hàng, quán ăn hoặc nơi công cộng',
    coreFact: 'Khi quét mã QR chuyển khoản, người dân và chủ hộ kinh doanh phải kiểm tra kỹ tên chủ tài khoản thụ hưởng hiển thị trên màn hình trước khi bấm xác nhận chuyển tiền',
    wrongA: 'Quét mã QR và bấm chuyển tiền ngay mà không nhìn tên người nhận trên màn hình',
    wrongB: 'Quét các mã QR trúng thưởng dán trên cột điện, tờ rơi ngoài đường để nhận tiền mặt',
    wrongC: 'Cấp quyền truy cập danh bạ và tin nhắn sau khi quét mã QR lạ',
    legalBasis: 'Khuyến cáo an toàn thanh toán không dùng tiền mặt của Ngân hàng Nhà nước & Bộ Công an.'
  },
  {
    topicTitle: 'Quy trình xử lý "15 - 30 phút vàng" ngay sau khi phát hiện vừa chuyển tiền cho đối tượng lừa đảo',
    coreFact: 'Lập tức gọi Hotline ngân hàng khóa khẩn cấp tài khoản/thẻ, lưu giữ toàn bộ biên lai chuyển khoản - tin nhắn - số điện thoại và đến ngay Công an xã Đức Hợp (02213.815.999) trình báo',
    wrongA: 'Nộp thêm tiền cho đối tượng với hy vọng họ sẽ trả lại cả gốc lẫn lãi',
    wrongB: 'Lên mạng tìm dịch vụ "hacker lấy lại tiền treo" và chuyển phí cho họ',
    wrongC: 'Xóa hết lịch sử chat Zalo và biên lai ngân hàng vì xấu hổ với gia đình',
    legalBasis: 'Quy trình tiếp nhận, giải quyết tố giác, tin báo về tội phạm của Bộ Công an.'
  }
];

const CU_TRU_SEEDS: TopicSeed[] = [
  {
    topicTitle: 'Giá trị pháp lý của Sổ hộ khẩu giấy và Sổ tạm trú giấy hiện nay',
    coreFact: 'Sổ hộ khẩu giấy và Sổ tạm trú giấy đã chính thức hết giá trị sử dụng từ ngày 01/01/2023 theo khoản 3 Điều 38 Luật Cư trú 2020; được thay thế bằng dữ liệu trên VNeID và CSDL quốc gia về dân cư',
    wrongA: 'Sổ hộ khẩu giấy vẫn có giá trị sử dụng đến hết năm 2030 nếu chưa bị rách nát',
    wrongB: 'Bắt buộc phải nộp bản photo công chứng Sổ hộ khẩu giấy khi làm mọi thủ tục hành chính',
    wrongC: 'Ai không giữ Sổ hộ khẩu giấy sẽ bị xóa tên khỏi hệ thống dân cư quốc gia',
    legalBasis: 'Khoản 3 Điều 38 Luật Cư trú số 68/2020/QH14.'
  },
  {
    topicTitle: 'Thời điểm hết hạn hoàn toàn của Chứng minh nhân dân (CMND 9 số và 12 số)',
    coreFact: 'Theo khoản 2 Điều 46 Luật Căn cước 2023, toàn bộ Chứng minh nhân dân (9 số và 12 số) hết giá trị sử dụng kể từ sau ngày 31/12/2024; công dân phải đổi sang Thẻ Căn cước mới',
    wrongA: 'CMND 9 số vẫn được sử dụng bình thường đến khi hết thời hạn 15 năm in trên thẻ',
    wrongB: 'CMND 9 số có giá trị trọn đời đối với công dân từ đủ 40 tuổi trở lên',
    wrongC: 'Chỉ cần ép plastic lại CMND cũ là dùng thay thế được Thẻ Căn cước tại ngân hàng',
    legalBasis: 'Khoản 2 Điều 46 Luật Căn cước số 26/2023/QH15 (hiệu lực từ 01/07/2024).'
  },
  {
    topicTitle: 'Giá trị sử dụng của thẻ Căn cước công dân (CCCD) gắn chip đã cấp trước ngày 01/07/2024',
    coreFact: 'Thẻ CCCD gắn chip cấp trước ngày 01/07/2024 vẫn có giá trị sử dụng bình thường cho đến hết thời hạn in trên mặt thẻ; công dân được cấp đổi sang thẻ Căn cước mới khi có nhu cầu',
    wrongA: 'Tất cả thẻ CCCD gắn chip đều bị vô hiệu hóa ngay từ ngày 01/07/2024',
    wrongB: 'Ai không đi đổi thẻ CCCD gắn chip sang thẻ Căn cước mới ngay sẽ bị phạt 5 triệu đồng',
    wrongC: 'Thẻ CCCD gắn chip không thể dùng để đăng nhập ứng dụng VNeID',
    legalBasis: 'Khoản 1 Điều 46 Luật Căn cước số 26/2023/QH15.'
  },
  {
    topicTitle: 'Độ tuổi bắt buộc phải thực hiện thủ tục cấp đổi Thẻ Căn cước theo Luật Căn cước 2023',
    coreFact: 'Công dân Việt Nam đã được cấp thẻ Căn cước phải thực hiện thủ tục cấp đổi thẻ khi đủ 14 tuổi, 25 tuổi, 40 tuổi và 60 tuổi (nếu thẻ được cấp trong vòng 02 năm trước mốc tuổi đó thì dùng đến mốc tiếp theo)',
    wrongA: 'Phải đi cấp đổi thẻ Căn cước định kỳ mỗi 03 năm một lần bất kể độ tuổi',
    wrongB: 'Phải đổi thẻ Căn cước vào các độ tuổi 18 tuổi, 30 tuổi, 45 tuổi và 55 tuổi',
    wrongC: 'Thẻ Căn cước cấp lúc 14 tuổi có giá trị sử dụng vĩnh viễn suốt đời không cần đổi',
    legalBasis: 'Điều 21 Luật Căn cước số 26/2023/QH15.'
  },
  {
    topicTitle: 'Quy định cấp Thẻ Căn cước cho trẻ em dưới 06 tuổi trên ứng dụng VNeID',
    coreFact: 'Cha, mẹ hoặc người đại diện hợp pháp thực hiện thủ tục cấp thẻ Căn cước cho trẻ dưới 06 tuổi hoàn toàn trực tuyến trên VNeID hoặc liên thông khi khai sinh; KHÔNG thu nhận ảnh mặt và vân tay của trẻ dưới 6 tuổi',
    wrongA: 'Bắt buộc phải bế trẻ sơ sinh dưới 6 tuổi đến trụ sở Công an để lăn vân tay 10 ngón',
    wrongB: 'Pháp luật nghiêm cấm cấp thẻ Căn cước cho người dưới 14 tuổi',
    wrongC: 'Lệ phí cấp thẻ Căn cước lần đầu cho trẻ dưới 6 tuổi là 200.000 đồng',
    legalBasis: 'Điều 18 và Điều 23 Luật Căn cước số 26/2023/QH15.'
  },
  {
    topicTitle: 'Thời hạn và cách thức thực hiện Thông báo lưu trú khi có khách/người thân đến ngủ qua đêm',
    coreFact: 'Khi có người đến lưu trú qua đêm, chủ hộ hoặc cơ sở lưu trú phải thông báo lưu trú với Công an xã Đức Hợp (trực tiếp, qua điện thoại trực ban hoặc trên ứng dụng VNeID) trước 23 giờ 00 đêm đó (nếu đến sau 23h thì báo trước 08h sáng hôm sau)',
    wrongA: 'Người thân ruột thịt, bạn bè đến ngủ qua đêm dưới 30 ngày thì không cần thông báo lưu trú',
    wrongB: 'Chỉ các khách sạn 5 sao mới phải thông báo lưu trú, hộ gia đình được miễn hoàn toàn',
    wrongC: 'Sau khi khách về quê được 01 tháng mới cần lên Công an xã báo cáo lại',
    legalBasis: 'Điều 30 Luật Cư trú số 68/2020/QH14 & Thông tư 55/2021/TT-BCA.'
  },
  {
    topicTitle: 'Điều kiện và thời hạn phải thực hiện thủ tục Đăng ký tạm trú tại địa phương',
    coreFact: 'Công dân đến sinh sống tại chỗ ở hợp pháp ngoài phạm vi đơn vị hành chính cấp xã nơi đã đăng ký thường trú từ 30 ngày trở lên thì phải thực hiện đăng ký tạm trú; thời hạn tạm trú tối đa là 02 năm và được gia hạn nhiều lần',
    wrongA: 'Ở trọ bao nhiêu năm cũng không cần đăng ký tạm trú nếu đã có thẻ Căn cước',
    wrongB: 'Giấy tạm trú có giá trị vĩnh viễn không bao giờ hết hạn',
    wrongC: 'Người thuê trọ tự ý đăng ký tạm trú mà không cần hợp đồng thuê nhà hay ý kiến chủ nhà',
    legalBasis: 'Điều 27 và Điều 28 Luật Cư trú số 68/2020/QH14.'
  },
  {
    topicTitle: 'Thời hạn giải quyết thủ tục Đăng ký thường trú và Đăng ký tạm trú tại Công an xã Đức Hợp',
    coreFact: 'Thời hạn giải quyết đăng ký thường trú là không quá 07 ngày làm việc; thời hạn giải quyết đăng ký tạm trú là không quá 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ trên Cổng DVC / VNeID',
    wrongA: 'Thời hạn giải quyết đăng ký thường trú và tạm trú đều kéo dài từ 45 đến 60 ngày',
    wrongB: 'Công dân phải chờ kết quả xét duyệt thường trú sau 06 tháng kể từ ngày nộp hồ sơ',
    wrongC: 'Công an cấp xã không có thẩm quyền giải quyết đăng ký thường trú cho công dân',
    legalBasis: 'Điều 22 và Điều 28 Luật Cư trú số 68/2020/QH14.'
  },
  {
    topicTitle: 'Quy trình xác nhận đồng ý của Chủ hộ trên ứng dụng VNeID khi có thành viên nhập khẩu thường trú/tạm trú',
    coreFact: 'Khi người dân nộp hồ sơ đăng ký thường trú/tạm trú vào hộ đã có trên VNeID và chọn hình thức xác nhận qua ứng dụng, Chủ hộ chỉ cần mở VNeID vào mục Thông báo cư trú để tích chọn xác nhận đồng ý điện tử',
    wrongA: 'Chủ hộ bắt buộc phải ra Văn phòng công chứng lập vi bằng đồng ý cho nhập khẩu',
    wrongB: 'Chủ hộ phải giao mật khẩu VNeID và thẻ ngân hàng của mình cho người thuê trọ',
    wrongC: 'Ứng dụng VNeID không hỗ trợ chủ hộ xác nhận đồng ý cho thành viên mới',
    legalBasis: 'Thông tư 66/2023/TT-BCA sửa đổi quy định về đăng ký cư trú qua ứng dụng VNeID.'
  },
  {
    topicTitle: 'Thời hạn có giá trị của văn bản Xác nhận thông tin về cư trú (Mẫu CT07)',
    coreFact: 'Theo Luật Cư trú sửa đổi bổ sung (hiệu lực 01/07/2024) và Thông tư 66/2023/TT-BCA, văn bản Xác nhận thông tin về cư trú (mẫu CT07) có giá trị sử dụng trong thời hạn 01 năm kể từ ngày cấp (trừ khi thông tin cư trú có sự thay đổi)',
    wrongA: 'Giấy xác nhận thông tin về cư trú CT07 chỉ có giá trị sử dụng trong vòng 24 giờ',
    wrongB: 'Giấy xác nhận thông tin về cư trú CT07 có giá trị vĩnh viễn trọn đời không bao giờ hết hạn',
    wrongC: 'Công dân phải nộp lệ phí 500.000 đồng mỗi lần xin cấp giấy xác nhận CT07 trên VNeID',
    legalBasis: 'Khoản 2 Điều 17 Luật Cư trú (sửa đổi bởi Luật Căn cước 2023) & Thông tư 66/2023/TT-BCA.'
  },
  {
    topicTitle: 'Giá trị pháp lý của Tài khoản định danh điện tử VNeID Mức độ 2 khi xuất trình giấy tờ',
    coreFact: 'Theo Nghị định số 69/2024/NĐ-CP, thông tin thẻ Căn cước và các giấy tờ đã được tích hợp trên VNeID Mức độ 2 có giá trị chứng minh tương đương với việc cung cấp thông tin hoặc sử dụng, xuất trình giấy tờ bản giấy trong các thủ tục hành chính',
    wrongA: 'VNeID Mức độ 2 chỉ là ứng dụng xem tin tức, hoàn toàn không có giá trị pháp lý thay thế giấy tờ',
    wrongB: 'Khi xuất trình VNeID Mức 2 chỉ cần đưa ảnh chụp màn hình tĩnh cho cán bộ kiểm tra là hợp lệ',
    wrongC: 'Công dân tự cài đặt VNeID Mức độ 2 tại nhà mà không cần thu nhận sinh trắc học tại cơ quan Công an',
    legalBasis: 'Điều 6 và Điều 28 Nghị định số 69/2024/NĐ-CP về định danh và xác thực điện tử.'
  },
  {
    topicTitle: 'Dịch vụ công liên thông "3 trong 1" đối với trẻ em mới sinh trên Cổng Dịch vụ công / VNeID',
    coreFact: 'Cha mẹ thực hiện duy nhất 01 lần nộp hồ sơ trực tuyến dịch vụ công liên thông để giải quyết đồng thời 03 thủ tục: Đăng ký khai sinh + Đăng ký thường trú + Cấp thẻ Bảo hiểm y tế cho trẻ dưới 6 tuổi (hoàn toàn miễn phí)',
    wrongA: 'Cha mẹ phải đi lại 3 cơ quan khác nhau trong 3 tháng mới làm xong khai sinh, nhập khẩu và thẻ BHYT',
    wrongB: 'Trẻ sơ sinh dưới 12 tháng tuổi không được phép đăng ký thường trú cùng cha mẹ',
    wrongC: 'Dịch vụ công liên thông khai sinh thu phí dịch vụ 1.000.000 đồng/hồ sơ',
    legalBasis: 'Nghị định số 63/2024/NĐ-CP quy định việc thực hiện liên thông điện tử 2 nhóm thủ tục hành chính.'
  },
  {
    topicTitle: 'Quy định về Khai báo tạm vắng đối với công dân đi khỏi nơi cư trú',
    coreFact: 'Công dân thuộc diện phải khai báo tạm vắng (hoặc đi khỏi phạm vi đơn vị hành chính cấp xã nơi cư trú từ 12 tháng trở lên đối với người trong độ tuổi nghĩa vụ quân sự / người chấp hành án) phải khai báo tạm vắng tại Công an xã hoặc qua VNeID',
    wrongA: 'Mọi công dân đi chợ sang xã bên cạnh trong 2 tiếng đều bắt buộc phải xin giấy phép tạm vắng',
    wrongB: 'Người đang chấp hành án treo hoặc quản chế được tự do đi khỏi nơi cư trú không cần khai báo',
    wrongC: 'Thủ tục khai báo tạm vắng bắt buộc phải nộp lệ phí 300.000 đồng',
    legalBasis: 'Điều 31 Luật Cư trú số 68/2020/QH14.'
  },
  {
    topicTitle: 'Thủ tục cấp Phiếu lý lịch tư pháp trực tuyến ngay trên ứng dụng VNeID',
    coreFact: 'Công dân có tài khoản VNeID Mức độ 2 có thể nộp hồ sơ yêu cầu cấp Phiếu lý lịch tư pháp (Số 1 hoặc Số 2) trực tuyến trên VNeID; Phiếu lý lịch tư pháp điện tử được ký số và có giá trị pháp lý như bản giấy',
    wrongA: 'Bắt buộc mọi công dân phải lên tận Bộ Tư pháp ở Hà Nội mới xin được Phiếu lý lịch tư pháp',
    wrongB: 'Phiếu lý lịch tư pháp điện tử trên VNeID chỉ dùng được một lần duy nhất rồi tự hủy',
    wrongC: 'Trẻ em dưới 14 tuổi bắt buộc phải làm Phiếu lý lịch tư pháp hàng năm',
    legalBasis: 'Luật Lý lịch tư pháp & Hướng dẫn triển khai cấp Phiếu lý lịch tư pháp trên VNeID của Bộ Công an.'
  },
  {
    topicTitle: 'Quy định xử phạt hành chính đối với hành vi không thực hiện đúng quy định về đăng ký thường trú, đăng ký tạm trú, thông báo lưu trú',
    coreFact: 'Theo Điều 9 Nghị định 144/2021/NĐ-CP, cá nhân không thực hiện đúng quy định về đăng ký thường trú, đăng ký tạm trú, xóa đăng ký thường trú/tạm trú hoặc thông báo lưu trú sẽ bị phạt tiền từ 500.000 đồng đến 1.000.000 đồng',
    wrongA: 'Không đăng ký tạm trú hoặc không thông báo lưu trú hoàn toàn không bị xử phạt gì',
    wrongB: 'Hành vi quên đăng ký tạm trú 1 tuần sẽ bị tịch thu toàn bộ ngôi nhà',
    wrongC: 'Chỉ người nước ngoài mới bị xử phạt về cư trú, công dân Việt Nam được miễn phạt',
    legalBasis: 'Khoản 1 Điều 9 Nghị định số 144/2021/NĐ-CP của Chính phủ.'
  },
  {
    topicTitle: 'Nghiêm cấm hành vi cầm cố, thế chấp hoặc thuê, mượn Thẻ Căn cước công dân / Thẻ Căn cước',
    coreFact: 'Pháp luật nghiêm cấm mua bán, thuê, mượn, cầm cố, thế chấp, giữ trái phép thẻ Căn cước; người vi phạm bị phạt tiền từ 4.000.000 đồng đến 6.000.000 đồng theo khoản 4 Điều 10 Nghị định 144/2021/NĐ-CP và buộc thu hồi thẻ',
    wrongA: 'Công dân được phép mang thẻ Căn cước đi cầm đồ lấy tiền tiêu xài vì đó là tài sản cá nhân',
    wrongB: 'Chủ quán game, nhà nghỉ có quyền thu giữ thẻ Căn cước của khách hàng suốt nhiều tháng để trừ nợ',
    wrongC: 'Cho người lạ thuê thẻ Căn cước mở tài khoản ngân hàng là việc làm hợp pháp',
    legalBasis: 'Điều 7 Luật Căn cước 2023 & Khoản 4 Điều 10 Nghị định 144/2021/NĐ-CP.'
  },
  {
    topicTitle: 'Cách xử lý khi đổi điện thoại mới hoặc mất điện thoại đã đăng nhập tài khoản VNeID',
    coreFact: 'Khi đăng nhập VNeID trên thiết bị điện thoại mới, hệ thống yêu cầu xác thực bằng NFC quét chip thẻ Căn cước hoặc xác thực khuôn mặt sinh trắc học (hoặc mã mở khóa trên thiết bị cũ) để bảo vệ an toàn tuyệt đối cho tài khoản công dân',
    wrongA: 'Mất điện thoại là mất vĩnh viễn số định danh cá nhân, phải đi xin cấp số định danh mới',
    wrongB: 'Bất kỳ ai nhặt được điện thoại cũng tự động mở được VNeID mà không cần mật khẩu hay khuôn mặt',
    wrongC: 'Phải nộp phạt 2.000.000 đồng mới được đăng nhập VNeID trên điện thoại mới',
    legalBasis: 'Nghị định số 69/2024/NĐ-CP & Hướng dẫn sử dụng VNeID của Cục C06 Bộ Công an.'
  },
  {
    topicTitle: 'Thủ tục tích hợp thông tin Người phụ thuộc (con nhỏ, cha mẹ hết tuổi lao động) trên VNeID để giảm trừ gia cảnh thuế TNCN',
    coreFact: 'Công dân đăng nhập VNeID Mức 2 -> Chọn Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu -> Chọn "Người phụ thuộc" và nhập số định danh cá nhân của người phụ thuộc để hệ thống đối soát với Cơ sở dữ liệu quốc gia về dân cư',
    wrongA: 'Phải nộp bản gốc Sổ hộ khẩu giấy cho cơ quan thuế mới được tính giảm trừ gia cảnh',
    wrongB: 'Ứng dụng VNeID không cho phép tích hợp thông tin người phụ thuộc và mã số thuế',
    wrongC: 'Mỗi lần tích hợp thông tin trên VNeID phải đóng phí 100.000 đồng qua Zalo',
    legalBasis: 'Hướng dẫn tích hợp giấy tờ trên ứng dụng VNeID của Bộ Công an & Tổng cục Thuế.'
  },
  {
    topicTitle: 'Quy định về lệ phí khi nộp hồ sơ thủ tục cư trú trực tuyến (Online) qua Cổng Dịch vụ công Bộ Công an / VNeID',
    coreFact: 'Theo Thông tư số 75/2022/TT-BTC và Thông tư 43/2023/TT-BTC của Bộ Tài chính, công dân nộp hồ sơ đăng ký cư trú trực tuyến được giảm 50% mức lệ phí (chỉ còn 15.000đ đối với đăng ký thường trú, 7.500đ đối với đăng ký tạm trú) và miễn 100% cho trẻ em, người cao tuổi, người có công, hộ nghèo',
    wrongA: 'Nộp hồ sơ cư trú trực tuyến trên VNeID đắt gấp 3 lần so với nộp trực tiếp tại trụ sở',
    wrongB: 'Lệ phí đăng ký tạm trú trên VNeID là 500.000 đồng/người',
    wrongC: 'Trẻ em và người cao tuổi bị thu phí gấp đôi khi làm thủ tục cư trú',
    legalBasis: 'Thông tư số 75/2022/TT-BTC & Thông tư 43/2023/TT-BTC của Bộ Tài chính.'
  },
  {
    topicTitle: 'Cách sử dụng tính năng "Kiến nghị, phản ánh về ANTT" và "Tố giác tội phạm" trên ứng dụng VNeID',
    coreFact: 'Công dân có thể gửi tin báo, tố giác tội phạm hoặc kiến nghị phản ánh về ANTT trực tiếp trên mục "Dịch vụ khác -> Kiến nghị, phản ánh về ANTT" của VNeID (có chế độ ẩn danh bảo mật tuyệt đối thông tin người báo tin)',
    wrongA: 'Gửi tố giác tội phạm trên VNeID sẽ bị công khai họ tên lên mạng xã hội cho đối tượng biết',
    wrongB: 'Chức năng phản ánh ANTT trên VNeID chỉ dành riêng cho cán bộ Công an sử dụng',
    wrongC: 'Người dân gửi phản ánh trên VNeID phải nộp phí 200.000 đồng/lần gửi',
    legalBasis: 'Quy trình tiếp nhận kiến nghị, phản ánh về ANTT qua VNeID của Bộ Công an.'
  }
];

const GIAO_THONG_SEEDS: TopicSeed[] = [
  {
    topicTitle: 'Quy định hệ thống 12 điểm Giấy phép lái xe theo Luật Trật tự, an toàn giao thông đường bộ 2024',
    coreFact: 'Mỗi Giấy phép lái xe có 12 điểm/năm; khi vi phạm bị trừ từ 02 đến 12 điểm tùy mức độ. Nếu còn điểm và không bị trừ điểm trong 12 tháng kể từ lần trừ điểm gần nhất thì được tự động phục hồi đủ 12 điểm',
    wrongA: 'Mỗi Giấy phép lái xe có 100 điểm và bị trừ điểm thì phải nộp tiền mua lại điểm ngay tại chốt',
    wrongB: 'Nếu bị trừ 02 điểm thì bằng lái xe lập tức bị hủy vĩnh viễn không được lái xe nữa',
    wrongC: 'Quy định trừ điểm GPLX chỉ áp dụng cho xe container, không áp dụng cho xe máy và ô tô con',
    legalBasis: 'Điều 58 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15 (hiệu lực 01/01/2025).'
  },
  {
    topicTitle: 'Cách xử lý khi Giấy phép lái xe bị trừ hết sạch 12 điểm trong năm',
    coreFact: 'Khi GPLX bị trừ hết 12 điểm, người đó KHÔNG được điều khiển phương tiện theo GPLX đó; sau thời hạn ít nhất 06 tháng kể từ ngày bị trừ hết điểm, phải tham gia kiểm tra nội dung kiến thức pháp luật về TTATGT đường bộ do CSGT tổ chức đạt yêu cầu để được phục hồi đủ 12 điểm',
    wrongA: 'Bị trừ hết 12 điểm vẫn được phép lái xe bình thường nếu mang theo tiền mặt nộp phạt',
    wrongB: 'Chỉ cần tắt ứng dụng VNeID đi cài lại là tự động có lại 12 điểm bằng lái xe',
    wrongC: 'Sau 24 giờ kể từ khi bị trừ hết 12 điểm, hệ thống tự động cộng lại 12 điểm miễn phí',
    legalBasis: 'Khoản 3 Điều 58 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Quy định nghiêm cấm tuyệt đối nồng độ cồn khi điều khiển phương tiện tham gia giao thông',
    coreFact: 'Theo khoản 2 Điều 9 Luật Trật tự, ATGT đường bộ 2024, pháp luật nghiêm cấm tuyệt đối hành vi điều khiển phương tiện tham gia giao thông đường bộ (ô tô, mô tô, xe gắn máy, xe đạp, xe máy điện) mà trong máu hoặc hơi thở có nồng độ cồn (Mức 0 tuyệt đối)',
    wrongA: 'Người lái xe máy được phép uống 02 cốc bia nếu vẫn tỉnh táo và đi chậm dưới 30 km/h',
    wrongB: 'Đi xe đạp hoặc xe đạp điện sau khi uống rượu bia thì hoàn toàn không bị xử phạt',
    wrongC: 'Ban đêm sau 22 giờ đêm lực lượng CSGT không được phép kiểm tra nồng độ cồn',
    legalBasis: 'Khoản 2 Điều 9 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15 & Nghị định 168/2024/NĐ-CP.'
  },
  {
    topicTitle: 'Quy định quản lý Biển số xe định danh khi bán, tặng cho hoặc chuyển nhượng xe theo Thông tư 24/2023/TT-BCA',
    coreFact: 'Biển số xe 5 số được quản lý theo mã định danh cá nhân của chủ xe; khi bán xe, chủ xe phải giữ lại Giấy chứng nhận đăng ký xe và Biển số xe nộp cho cơ quan đăng ký xe làm thủ tục thu hồi (biển số đó được giữ lại cho chủ xe trong thời hạn 05 năm để cấp lại khi mua xe khác)',
    wrongA: 'Khi bán xe máy, người bán cứ giao luôn cả xe và biển số cho người mua chạy mãi mãi không cần sang tên',
    wrongB: 'Biển số định danh là biển số in luôn 12 chữ số Căn cước công dân lên tấm biển sắt gắn đuôi xe',
    wrongC: 'Mỗi công dân suốt đời chỉ được phép đăng ký duy nhất 01 chiếc xe máy',
    legalBasis: 'Điều 3 và Điều 15 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    topicTitle: 'Thẩm quyền đăng ký, cấp biển số xe mô tô, xe gắn máy (kể cả xe máy điện) ngay tại Công an xã Đức Hợp',
    coreFact: 'Công dân có nơi cư trú (thường trú hoặc tạm trú) tại xã Đức Hợp được thực hiện thủ tục đăng ký, bấm biển số xe mô tô, xe gắn máy, xe máy điện trực tiếp tại Công an xã Đức Hợp (kết hợp kê khai trực tuyến trên Cổng Dịch vụ công Bộ Công an / VNeID)',
    wrongA: 'Người dân xã Đức Hợp muốn đăng ký xe máy bắt buộc phải lên tận Cục CSGT ở Hà Nội',
    wrongB: 'Xe máy điện và xe máy dưới 50 phân khối được miễn đăng ký và không cần gắn biển số',
    wrongC: 'Công an cấp xã chỉ cấp biển số tạm bằng giấy chứ không cấp biển số kim loại chính thức',
    legalBasis: 'Điều 4 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    topicTitle: 'Quy định bảo vệ an toàn cho trẻ em dưới 10 tuổi khi ngồi trên xe ô tô theo Luật TTATGTĐB 2024',
    coreFact: 'Theo khoản 3 Điều 10 Luật TTATGTĐB 2024, khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, không được cho trẻ em ngồi cùng hàng ghế với người lái xe (trừ xe chỉ có một hàng ghế) và người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em',
    wrongA: 'Cho trẻ em 5 tuổi ngồi trong lòng người lái xe ô tô vừa lái vừa giữ vô lăng là an toàn nhất',
    wrongB: 'Trẻ em dưới 10 tuổi được phép đứng thò đầu qua cửa sổ trời khi xe ô tô đang chạy trên đường',
    wrongC: 'Ghế phụ phía trước cạnh tài xế là vị trí bắt buộc dành riêng cho trẻ sơ sinh và trẻ dưới 6 tuổi',
    legalBasis: 'Khoản 3 Điều 10 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Phân hạng Giấy phép lái xe mô tô hạng A1 và hạng A theo Luật Trật tự, ATGT đường bộ 2024',
    coreFact: 'Theo Điều 57 Luật TTATGTĐB 2024: GPLX hạng A1 cấp cho người lái xe mô tô hai bánh có dung tích xi-lanh đến 125 cm³ hoặc công suất động cơ điện đến 11 kW; GPLX hạng A cấp cho người lái xe mô tô hai bánh có dung tích xi-lanh trên 125 cm³ hoặc công suất điện trên 11 kW',
    wrongA: 'GPLX hạng A1 mới chỉ được lái xe dưới 50 phân khối',
    wrongB: 'Người có GPLX hạng A1 được phép điều khiển xe mô tô phân khối lớn 1000 cm³',
    wrongC: 'Xe máy điện có công suất trên 15 kW không cần bất kỳ loại Giấy phép lái xe nào',
    legalBasis: 'Điều 57 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Độ tuổi của người điều khiển xe gắn máy (dung tích dưới 50 cm³ hoặc công suất điện dưới 4 kW) và xe mô tô',
    coreFact: 'Theo Điều 59 Luật TTATGTĐB 2024: Người đủ 16 tuổi trở lên được điều khiển xe gắn máy (dưới 50 cm³ / dưới 4 kW); người đủ 18 tuổi trở lên mới được cấp GPLX và điều khiển xe mô tô hai bánh từ 50 cm³ trở lên',
    wrongA: 'Học sinh đủ 14 tuổi (lớp 9) được phép điều khiển xe máy 110 phân khối đi học bình thường',
    wrongB: 'Trẻ em 12 tuổi được phép chạy xe gắn máy 50 phân khối nếu đội mũ bảo hiểm',
    wrongC: 'Phải đủ 25 tuổi trở lên mới được phép thi lấy Giấy phép lái xe máy hạng A1',
    legalBasis: 'Điều 59 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Trách nhiệm pháp lý của cha mẹ, chủ phương tiện khi giao xe mô tô cho con chưa đủ tuổi điều khiển',
    coreFact: 'Cha mẹ hoặc chủ phương tiện giao xe hoặc để cho người không đủ điều kiện (chưa đủ 18 tuổi, chưa có GPLX) điều khiển xe mô tô tham gia giao thông sẽ bị phạt hành chính nặng theo Nghị định 168/2024/NĐ-CP và bị truy cứu trách nhiệm hình sự theo Điều 264 BLHS nếu gây tai nạn nghiêm trọng',
    wrongA: 'Con cái gây tai nạn thì chỉ mình đứa trẻ chịu, bố mẹ giao chìa khóa xe hoàn toàn vô can',
    wrongB: 'Giao xe phân khối lớn cho học sinh cấp 2 chạy chỉ bị nhắc nhở miệng chứ không bị phạt tiền',
    wrongC: 'Chỉ khi giao xe ô tô tải mới bị phạt, còn giao xe máy 110cc cho con 15 tuổi là hợp pháp',
    legalBasis: 'Điều 264 Bộ luật Hình sự 2015 & Nghị định số 168/2024/NĐ-CP.'
  },
  {
    topicTitle: 'Quy trình xuất trình Giấy phép lái xe và Đăng ký xe điện tử trên ứng dụng VNeID khi CSGT kiểm tra',
    coreFact: 'Khi đã tích hợp xác thực GPLX và Chứng nhận đăng ký xe trên VNeID Mức độ 2, người dân mở trực tiếp ứng dụng VNeID trên điện thoại thông minh xuất trình cho lực lượng CSGT kiểm tra (có giá trị tương đương giấy tờ bản giấy theo Thông tư 28/2024/TT-BCA)',
    wrongA: 'Đưa ảnh chụp màn hình VNeID lưu trong thư viện ảnh cho CSGT xem là đủ hợp lệ',
    wrongB: 'Dù đã tích hợp trên VNeID Mức 2 nhưng nếu quên mang ví giấy vẫn bị phạt lỗi "Không có GPLX"',
    wrongC: 'CSGT không có thẩm quyền kiểm tra thông tin giấy tờ xe trên ứng dụng VNeID',
    legalBasis: 'Thông tư số 28/2024/TT-BCA sửa đổi Thông tư 32/2023/TT-BCA của Bộ Công an.'
  },
  {
    topicTitle: 'Thủ tục sang tên xe máy mua bán qua nhiều đời chủ (không tìm thấy chủ cũ)',
    coreFact: 'Theo Điều 31 Thông tư 24/2023/TT-BCA, người đang sử dụng xe đến cơ quan quản lý hồ sơ xe/Công an xã Đức Hợp nộp giấy tờ hiện có và cam kết chịu trách nhiệm trước pháp luật về nguồn gốc xe; sau 30 ngày niêm yết công khai và tra cứu không có tranh chấp/mất cắp sẽ được giải quyết cấp biển số định danh mới',
    wrongA: 'Xe mua qua tay không tìm được chủ cũ thì bắt buộc phải mang đi tiêu hủy sắt vụn',
    wrongB: 'Tự đặt làm biển số giả trên mạng gắn vào chạy để đỡ phải làm thủ tục sang tên',
    wrongC: 'Chỉ cần ra UBND xã xin đóng dấu vào giấy viết tay là thay thế được Đăng ký xe',
    legalBasis: 'Điều 31 Thông tư số 24/2023/TT-BCA của Bộ Công an.'
  },
  {
    topicTitle: 'Quy định về đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách khi đi mô tô, xe gắn máy, xe đạp điện',
    coreFact: 'Người điều khiển và người ngồi trên xe mô tô, xe gắn máy, xe máy điện, xe đạp máy bắt buộc phải đội mũ bảo hiểm đạt quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách trong suốt quá trình tham gia giao thông (trừ trẻ em dưới 06 tuổi hoặc chở người bệnh đi cấp cứu)',
    wrongA: 'Đội mũ bảo hiểm thời trang mỏng nhẹ không cài quai vẫn đúng quy định pháp luật',
    wrongB: 'Người ngồi phía sau xe máy hoặc người đi xe đạp điện không cần phải đội mũ bảo hiểm',
    wrongC: 'Đi trong đường liên thôn, liên xã dưới 2 km thì được miễn đội mũ bảo hiểm hoàn toàn',
    legalBasis: 'Điều 31 và Điều 33 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15 & Nghị định 168/2024/NĐ-CP.'
  },
  {
    topicTitle: 'Quy định số người tối đa được chở trên xe mô tô hai bánh, xe gắn máy',
    coreFact: 'Người lái xe mô tô hai bánh, xe gắn máy chỉ được chở tối đa 01 người, trừ các trường hợp được chở tối đa 02 người: chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; hoặc người già yếu, người khuyết tật',
    wrongA: 'Xe máy 125 phân khối được phép chở 3 người lớn nếu cả 3 người đều đội mũ bảo hiểm',
    wrongB: 'Thanh niên đi dự đám cưới trong xã được phép kẹp 3, kẹp 4 không bị xử phạt',
    wrongC: 'Xe máy tuyệt đối không bao giờ được phép chở quá 1 người kể cả khi chở trẻ em 7 tuổi',
    legalBasis: 'Khoản 1 Điều 33 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Nghĩa vụ của người điều khiển phương tiện khi xảy ra vụ tai nạn giao thông đường bộ',
    coreFact: 'Người điều khiển phương tiện liên quan đến vụ tai nạn phải dừng ngay phương tiện, bật đèn cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin ngay cho cơ quan Công an (Công an xã Đức Hợp 02213.815.999 / 113) hoặc cơ sở y tế gần nhất',
    wrongA: 'Lập tức điều khiển xe phóng nhanh rời khỏi hiện trường nếu thấy đường vắng không có camera',
    wrongB: 'Tự ý xê dịch toàn bộ phương tiện và xóa sạch vết phanh trước khi Công an đến để tránh bị phạt',
    wrongC: 'Đứng cãi nhau hoặc hành hung người va chạm với mình ngay giữa lòng đường',
    legalBasis: 'Điều 80 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Quy định cấm sử dụng tay cầm và sử dụng điện thoại hoặc thiết bị âm thanh khi đang lái xe',
    coreFact: 'Người đang điều khiển xe ô tô, xe mô tô, xe gắn máy, xe đạp máy không được dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác; không sử dụng thiết bị âm thanh (tai nghe) trừ thiết bị trợ thính',
    wrongA: 'Vừa chạy xe máy bằng một tay vừa cầm điện thoại nhắn tin Zalo, xem TikTok là hợp pháp nếu đi chậm',
    wrongB: 'Đeo tai nghe chống ồn bật nhạc hết cỡ ở cả hai tai khi lái xe máy giúp tập trung lái xe hơn',
    wrongC: 'Chỉ cấm gọi điện thoại khi lái ô tô, còn đi xe máy được dùng điện thoại thoải mái',
    legalBasis: 'Khoản 6 Điều 9 và Khoản 3 Điều 33 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Hướng dẫn thủ tục Đổi Giấy phép lái xe trực tuyến toàn trình (Mức độ 4) trên Cổng Dịch vụ công Quốc gia',
    coreFact: 'Người dân chuẩn bị Giấy khám sức khỏe điện tử của người lái xe (hoặc bản chứng thực điện tử), ảnh chân dung nền xanh 3x4, đăng nhập Cổng Dịch vụ công Quốc gia bằng VNeID Mức 2 để nộp hồ sơ đổi GPLX trực tuyến và nhận bằng mới tại nhà qua bưu chính',
    wrongA: 'Muốn đổi GPLX trực tuyến phải chuyển tiền vào tài khoản cá nhân của người môi giới trên Facebook',
    wrongB: 'Giấy phép lái xe hết hạn quá 05 năm vẫn được đổi online tự động không cần sát hạch lại',
    wrongC: 'Đổi GPLX trực tuyến không cần khám sức khỏe người lái xe đối với GPLX ô tô hạng B, C',
    legalBasis: 'Thông tư của Bộ Giao thông vận tải & Bộ Công an hướng dẫn dịch vụ công đổi GPLX trực tuyến.'
  },
  {
    topicTitle: 'Quy định về tra cứu và nộp phạt vi phạm hành chính giao thông ("phạt nguội") trực tuyến chính thống',
    coreFact: 'Công dân chỉ tra cứu thông tin phạt nguội trên website chính thức của Cục CSGT (https://www.csgt.vn) và nộp tiền phạt trực tuyến trên Cổng Dịch vụ công Quốc gia (https://dichvucong.gov.vn) hoặc Cổng DVC Bộ Công an theo số Quyết định xử phạt chính thức',
    wrongA: 'Bấm vào đường link trong cuộc gọi tự động báo "phạt nguội" và nhập mã OTP ngân hàng để nộp phạt ngay',
    wrongB: 'Chuyển tiền nộp phạt nguội vào số tài khoản cá nhân của người tự xưng là cán bộ CSGT qua Zalo',
    wrongC: 'Cài đặt ứng dụng TraCuuPhatNguoi.apk do người lạ gửi qua tin nhắn SMS',
    legalBasis: 'Nghị định 135/2021/NĐ-CP & Hướng dẫn nộp phạt trực tuyến trên Cổng Dịch vụ công Quốc gia.'
  },
  {
    topicTitle: 'Hành vi tự ý thay đổi khung, máy, hình dáng, kích thước, đặc tính của xe hoặc độ chế pô nổ lớn',
    coreFact: 'Pháp luật nghiêm cấm hành vi tự ý cắt hàn thay đổi khung, máy, độ chế bộ phận giảm thanh (pô xe nổ lớn), lắp còi hơi, đèn chiếu sáng sai quy chuẩn hoặc lạng lách đánh võng gây mất trật tự công cộng',
    wrongA: 'Chủ xe có toàn quyền tháo bỏ ống xả giảm thanh để xe máy nổ to tạo phong cách cá nhân',
    wrongB: 'Lắp thêm dàn đèn LED chiếu thẳng vào mắt người đi ngược chiều được khuyến khích khi đi đường quê',
    wrongC: 'Tự ý che lấp, dán băng dính sửa chữ số trên biển số xe để tránh camera phạt nguội chỉ bị phạt 50.000đ',
    legalBasis: 'Khoản 13 Điều 9 Luật Trật tự, ATGT đường bộ 2024 & Nghị định 168/2024/NĐ-CP.'
  },
  {
    topicTitle: 'Quy định nhường đường cho xe ưu tiên (Xe chữa cháy, xe quân sự, xe Công an, xe cứu thương đang làm nhiệm vụ)',
    coreFact: 'Khi có tín hiệu còi, cờ, đèn của xe ưu tiên đi làm nhiệm vụ khẩn cấp, người và phương tiện tham gia giao thông đường bộ phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường, tuyệt đối không được gây cản trở xe ưu tiên',
    wrongA: 'Bám sát ngay sau đuôi xe cứu thương, xe chữa cháy để vượt đèn đỏ đi cho nhanh',
    wrongB: 'Cố tình chạy giữa làn đường không nhường cho xe chữa cháy vì mình đang đi đúng tốc độ',
    wrongC: 'Chỉ cần nhường đường cho xe ưu tiên vào ban ngày, ban đêm không cần nhường',
    legalBasis: 'Điều 27 Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15.'
  },
  {
    topicTitle: 'Nghiêm cấm hành vi phơi thóc lúa, rơm rạ, nông sản hoặc họp chợ, để vật liệu xây dựng lấn chiếm lòng lề đường',
    coreFact: 'Nghiêm cấm sử dụng lòng đường, vỉa hè trái phép để phơi thóc, lúa, rơm, rạ, nông sản, đốt rơm rạ gây khói mù che khuất tầm nhìn hoặc đổ gạch đá, vật liệu xây dựng gây nguy hiểm, trơn trượt dẫn đến tai nạn giao thông',
    wrongA: 'Bà con được phép đổ đá tảng và rơm rạ ra giữa lòng đường quốc lộ, tỉnh lộ để phơi trong mùa gặt',
    wrongB: 'Đốt rơm rạ ngay sát mép đường cao tốc, đường tỉnh lộ tạo khói mù mịt là tập quán hợp pháp',
    wrongC: 'Nếu người đi xe máy trượt phải đống rơm phơi giữa đường bị ngã thì người phơi rơm không có trách nhiệm gì',
    legalBasis: 'Khoản 21 Điều 9 Luật Trật tự, ATGT đường bộ 2024 & Điều 261 Bộ luật Hình sự 2015.'
  }
];

const PCCC_SEEDS: TopicSeed[] = [
  {
    topicTitle: 'Quy trình 4 bước vàng xử lý ngay lập tức khi phát hiện đám cháy mới bùng phát trong gia đình',
    coreFact: 'Thực hiện đúng 4 bước: (1) Hô hoán báo động cháy khẩn cấp cho mọi người xung quanh; (2) Ngắt ngay cầu dao điện tổng khu vực cháy; (3) Sử dụng bình chữa cháy xách tay, chăn ướt dập lửa (nếu đám cháy nhỏ trong tầm kiểm soát) và thoát nạn; (4) Gọi ngay Cảnh sát PCCC số 114 & Công an xã Đức Hợp 02213.815.999',
    wrongA: 'Im lặng tự lấy xô nước tạt vào ổ điện đang cháy mà không cắt cầu dao điện',
    wrongB: 'Chạy vào phòng ngủ khóa chặt cửa lại trốn dưới gầm giường chờ lửa tự tắt',
    wrongC: 'Cố gắng quay lại đám cháy đang bùng lớn nhiều khói độc để thu gom tivi, tủ lạnh',
    legalBasis: 'Cẩm nang Phòng cháy chữa cháy và Cứu nạn cứu hộ gia đình của Bộ Công an.'
  },
  {
    topicTitle: 'Nguyên tắc an toàn sống còn khi phát hiện mùi khí Gas (LPG) rò rỉ nồng nặc trong bếp',
    coreFact: 'TUYỆT ĐỐI KHÔNG bật/tắt công tắc điện, quạt điện, không đánh lửa hay gọi điện thoại tại chỗ (vì tia lửa điện sẽ kích nổ khí gas); phải lập tức khóa van bình gas, mở toang toàn bộ cửa sổ/cửa chính cho thông thoáng và dùng quạt tay/bìa cứng quạt tản khí gas ra ngoài',
    wrongA: 'Bật ngay công tắc đèn điện và bật quạt trần/quạt hút mùi để thổi khí gas bay đi',
    wrongB: 'Bật thử bật lửa hoặc bật bếp gas xem khí gas bị rò rỉ ở đoạn dây nào',
    wrongC: 'Đóng kín toàn bộ cửa nhà lại rồi đứng ngay cạnh bình gas bấm điện thoại gọi thợ',
    legalBasis: 'Quy chuẩn an toàn sử dụng khí dầu mỏ hóa lỏng (LPG) của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    topicTitle: 'Cách phân biệt công dụng và lưu ý an toàn khi sử dụng Bình chữa cháy khí CO2 và Bình bột ABC',
    coreFact: 'Bình bột ABC dùng chữa hầu hết các đám cháy rắn, lỏng (xăng dầu), khí, điện hạ thế; Bình khí CO2 chữa cháy thiết bị điện tử rất sạch nhưng khi phun có nhiệt độ cực lạnh (-79 độ C) nên TUYỆT ĐỐI KHÔNG cầm tay trần vào loa phun của bình CO2 để tránh bị bỏng lạnh hoại tử da',
    wrongA: 'Khi dùng bình chữa cháy khí CO2 phải dùng bàn tay nắm chặt vào đầu loa phun để điều chỉnh hướng',
    wrongB: 'Dùng bình khí CO2 phun trực tiếp lên quần áo người đang bị cháy để làm mát cơ thể',
    wrongC: 'Bình chữa cháy mua về để 15 năm không cần kiểm tra đồng hồ áp suất hay lắc đảo bột',
    legalBasis: 'TCVN 7435-1 & Hướng dẫn sử dụng phương tiện chữa cháy ban đầu của Bộ Công an.'
  },
  {
    topicTitle: 'Tại sao tuyệt đối không được dùng nước để dập đám cháy xăng dầu, cồn hoặc chảo dầu mỡ đang bốc cháy trên bếp',
    coreFact: 'Xăng, dầu, mỡ ăn nhẹ hơn nước và không tan trong nước; nếu tạt nước vào, nước chìm xuống đáy đẩy lớp xăng/dầu đang cháy bắn tung tóe và tràn lan ra khắp nhà khiến đám cháy bùng nổ gấp nhiều lần. Phải tắt bếp/khóa gas, dùng nắp vung đậy kín chảo, phủ chăn ướt hoặc phun bình bột ABC',
    wrongA: 'Tạt ngay một gáo nước lạnh vào chảo dầu mỡ đang bốc lửa trên bếp để lửa tắt tức thì',
    wrongB: 'Bê chảo dầu đang cháy rực chạy dọc hànhlang ra ngoài sân đổ đi',
    wrongC: 'Thổi mạnh bằng miệng hoặc bật quạt công suất lớn thổi thẳng vào chảo dầu đang cháy',
    legalBasis: 'Tài liệu huấn luyện kỹ năng chữa cháy ban đầu của Cục Cảnh sát PCCC và CNCH.'
  },
  {
    topicTitle: 'Nguyên tắc an toàn phòng chống cháy nổ khi sạc xe đạp điện, xe máy điện tại hộ gia đình',
    coreFact: 'Không sạc xe điện qua đêm khi cả gia đình đang ngủ mà không có người trông coi; không sạc ngay sau khi xe vừa chạy về pin còn đang nóng; đặt khu vực sạc nơi thông thoáng, tách biệt với cầu thang thoát nạn và xa các vật liệu dễ cháy',
    wrongA: 'Cắm sạc xe máy điện qua đêm ngay dưới chân cầu thang duy nhất của nhà ống và khóa kín cửa cuốn',
    wrongB: 'Tự ý độ chế nâng dung lượng pin Lithium trôi nổi không rõ nguồn gốc để xe chạy xa hơn',
    wrongC: 'Cắm chung sạc xe điện, bếp từ, lò vi sóng vào cùng một ổ cắm nhựa kéo dài rẻ tiền',
    legalBasis: 'Công điện chỉ đạo về tăng cường công tác PCCC đối với nhà ở nhiều tầng, hộ gia đình và xe điện của Thủ tướng Chính phủ & Bộ Công an.'
  },
  {
    topicTitle: 'Kỹ năng thoát nạn qua vùng nhiễm khói khí độc (CO, HCN) khi xảy ra hỏa hoạn trong nhà',
    coreFact: 'Do khói và khí độc nóng luôn bốc lên cao sát trần nhà, người thoát nạn phải dùng khăn hoặc vải thấm nước vắt ẩm bịt kín mũi và miệng, hạ thấp trọng tâm cơ thể (cúi khom hoặc bò sát mặt sàn nhà cách đất 30-50cm) và lần theo bờ tường để tìm lối ra cầu thang bộ / ban công',
    wrongA: 'Đứng thẳng người chạy thật nhanh xuyên qua đám khói đen đặc mà không che mũi miệng',
    wrongB: 'Bấm thang máy để đi xuống tầng 1 cho nhanh khi tòa nhà đang xảy ra cháy nổ',
    wrongC: 'Chui vào phòng tắm không có cửa sổ khóa chốt trong và xả nước ngập sàn ngồi chờ',
    legalBasis: 'Hướng dẫn kỹ năng thoát nạn trong đám cháy của Cục Cảnh sát PCCC và CNCH (C07).'
  },
  {
    topicTitle: 'Tầm quan trọng của việc mở "Lối thoát nạn thứ hai" đối với nhà ống, nhà kết hợp sản xuất kinh doanh và chuồng cọp ban công',
    coreFact: 'Mỗi hộ gia đình (đặc biệt là nhà ống chỉ có 1 cầu thang bộ, lắp cửa cuốn) bắt buộc phải bố trí lối thoát nạn thứ hai qua ban công, lô gia, cửa sổ sang nhà bên cạnh hoặc lên mái; nếu lắp lồng sắt ("chuồng cọp") chống trộm thì phải mở ô cửa bản lề có khóa mở được từ bên trong để thoát hiểm khi cháy',
    wrongA: 'Hàn kín toàn bộ ban công và cửa sổ bằng sắt đặc không để bất kỳ khe hở nào để chống trộm tuyệt đối',
    wrongB: 'Lắp 3 lớp cửa cuốn điện không có bộ lưu điện dự phòng và không có dây kéo cơ khẩn cấp',
    wrongC: 'Chất đầy hàng hóa, thùng carton, xe máy bịt kín toàn bộ lối đi cầu thang tầng 1',
    legalBasis: 'Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ về tăng cường công tác PCCC trong tình hình mới.'
  },
  {
    topicTitle: 'Ý nghĩa và hoạt động của mô hình "Tổ liên gia an toàn PCCC" tại các thôn, khu dân cư xã Đức Hợp',
    coreFact: 'Tổ liên gia an toàn PCCC gồm từ 05 đến 15 hộ gia đình liền kề nhau, mỗi hộ trang bị ít nhất 01 bình chữa cháy xách tay, 01 dụng cụ phá dỡ (xà beng, kìm cộng lực, búa) và lắp đặt hệ thống chuông báo cháy liên thông để khi 1 nhà bấm chuông thì toàn bộ các nhà trong tổ cùng nghe thấy và ứng cứu trong 5 phút vàng đầu tiên',
    wrongA: 'Tổ liên gia an toàn PCCC chỉ lập ra trên giấy tờ, khi cháy thì chờ xe cứu hỏa từ tỉnh xuống',
    wrongB: 'Chuông báo cháy của Tổ liên gia được dùng để bấm gọi nhau đi uống nước hàng ngày',
    wrongC: 'Tham gia Tổ liên gia an toàn PCCC phải đóng lệ phí duy trì 1.000.000 đồng/tháng',
    legalBasis: 'Kế hoạch xây dựng nhân rộng mô hình Tổ liên gia an toàn PCCC và Điểm chữa cháy công cộng của Bộ Công an.'
  },
  {
    topicTitle: 'Kỹ năng kiểm tra nhiệt độ cửa phòng trước khi mở cửa thoát ra hành lang khi nghe báo cháy',
    coreFact: 'Trước khi mở cửa phòng ra hành lang có cháy, phải dùng MU BÀN TAY chạm nhẹ vào tay nắm cửa và cánh cửa để kiểm tra nhiệt độ: Nếu cửa rất nóng hoặc có khói lùa qua khe cửa thì TUYỆT ĐỐI KHÔNG mở cửa (vì lửa và khói độc đang ở ngay bên ngoài), phải chèn khăn ướt kín khe cửa, ra ban công/cửa sổ vẫy khăn sáng màu gọi cứu hộ 114',
    wrongA: 'Dùng cả lòng bàn tay nắm chặt vào tay nắm cửa kim loại đang nung đỏ và giật tung cửa ra ngay',
    wrongB: 'Mở toang cửa chính để không khí tràn vào phòng dù bên ngoài hành lang lửa đang cháy lớn',
    wrongC: 'Đập vỡ cửa kính phía thông với khu vực đang cháy để khói tràn vào phòng',
    legalBasis: 'Kỹ năng thoát nạn an toàn trong nhà cao tầng và nhà ở hộ gia đình của Cảnh sát PCCC.'
  },
  {
    topicTitle: 'Cách xử lý đúng khi quần áo trên người mình hoặc người bên cạnh chẳng may bị bắt lửa bốc cháy',
    coreFact: 'Thực hiện quy tắc "Dừng lại - Nằm xuống - Lăn qua lăn lại" (Stop - Drop - Roll): Lập tức dừng chạy (vì chạy làm gió thổi lửa bùng to hơn), hai tay che mặt, nằm xuống đất và lăn qua lăn lại nhiều vòng hoặc dùng chăn ướt/áo dày trùm kín để làm ngạt ngọn lửa',
    wrongA: 'Hoảng loạn cắm đầu chạy thật nhanh ra ngoài trời gió để thổi tắt lửa trên quần áo',
    wrongB: 'Dùng túi nilon hoặc áo mưa nhựa trùm lên người đang bị cháy',
    wrongC: 'Đứng yên tại chỗ dùng hai tay quạt mạnh cho lửa tắt',
    legalBasis: 'Tài liệu hướng dẫn sơ cấp cứu và thoát nạn khi bị cháy của Bộ Công an & Bộ Y tế.'
  },
  {
    topicTitle: 'Quy định an toàn PCCC khi thắp hương thờ cúng, đốt vàng mã vào ngày Rằm, mùng Một và lễ Tết',
    coreFact: 'Bàn thờ phải bố trí vách ngăn chống cháy, không để quá nhiều vàng mã, tiền giấy trên bàn thờ khi đang thắp hương hoặc cắm đèn điện thờ liên tục 24/24h; việc đốt vàng mã phải thực hiện trong lư/thùng kim loại có nắp đậy ở nơi thông thoáng, xa vật dễ cháy và có người trông coi đến khi tàn lửa tắt hẳn (nên tưới nước dập tàn tro)',
    wrongA: 'Đốt vàng mã ngay dưới gầm cầu thang, cạnh bình gas hoặc trên ban công chất đầy quần áo khô rồi bỏ đi ngủ',
    wrongB: 'Cắm hàng chục nén hương lớn cùng lúc vào bát hương nhựa rồi khóa cửa nhà đi vắng cả ngày',
    wrongC: 'Đốt vàng mã vào ngày gió to không cần thùng chắn gió để tàn lửa bay sang mái nhà hàng xóm',
    legalBasis: 'Khuyến cáo bảo đảm an toàn PCCC nơi thờ cúng và cơ sở tôn giáo, tín ngưỡng của Bộ Công an.'
  },
  {
    topicTitle: 'Chế tài xử phạt đối với hành vi gọi điện thoại báo cháy giả đến số khẩn cấp 114',
    coreFact: 'Theo khoản 3 Điều 42 Nghị định 144/2021/NĐ-CP, hành vi báo cháy giả hoặc báo tin sự cố, tai nạn giả đến số điện thoại khẩn cấp 114 sẽ bị phạt tiền từ 4.000.000 đồng đến 6.000.000 đồng (đồng thời làm chậm trễ việc cứu nạn các vụ cháy thật)',
    wrongA: 'Gọi 114 báo cháy giả để trêu đùa là miễn phí và không thể truy ra chủ thuê bao',
    wrongB: 'Trẻ em lấy điện thoại của bố mẹ gọi 114 báo cháy giả thì gia đình không phải chịu trách nhiệm gì',
    wrongC: 'Báo cháy giả chỉ bị nhà mạng trừ 1.000 đồng trong tài khoản khuyến mãi',
    legalBasis: 'Khoản 3 Điều 42 Nghị định số 144/2021/NĐ-CP của Chính phủ.'
  },
  {
    topicTitle: 'Quy định an toàn PCCC đối với hoạt động hàn cắt kim loại khi sửa chữa nhà ở, biển quảng cáo',
    coreFact: 'Khi hàn cắt kim loại (vẩy hàn có nhiệt độ trên 1.000 độ C bắn xa nhiều mét), thợ hàn phải có chứng chỉ huấn luyện PCCC, phải di dời toàn bộ vật liệu dễ cháy (xốp, bạt nhựa, gỗ, vải) ra xa khu vực hàn tối thiểu 10m hoặc che chắn bằng bạt chống cháy, cử người canh lửa và đặt sẵn bình chữa cháy ngay bên cạnh',
    wrongA: 'Đứng hàn xì trực tiếp ngay trên trần xốp cách nhiệt và biển bạt quảng cáo mà không cần che chắn',
    wrongB: 'Chỉ cần hàn xong rút điện đi về ngay, không cần kiểm tra các tàn lửa âm ỉ trong khe vách',
    wrongC: 'Hàn cắt tại hộ gia đình nhỏ lẻ thì không cần trang bị bình chữa cháy hay xô nước dự phòng',
    legalBasis: 'Quy chuẩn kỹ thuật quốc gia về an toàn PCCC khi hàn cắt kim loại & Nghị định 136/2020/NĐ-CP.'
  },
  {
    topicTitle: 'Cách kiểm tra định kỳ tình trạng hoạt động tốt của Bình chữa cháy bột xách tay thông qua đồng hồ đo áp suất',
    coreFact: 'Quan sát kim đồng hồ đo áp suất trên cổ bình bột chữa cháy: Kim chỉ ở vạch màu XANH LÁ CÂY là áp suất bình thường (sử dụng tốt); kim chỉ vạch màu ĐỎ là bình đã tụt hết khí đẩy (cần nạp sạc lại); kim chỉ vạch màu VÀNG là áp suất quá cao (cần bảo quản nơi mát mẻ). Định kỳ 1-2 tháng nên lắc dốc ngược bình để bột không bị vón cục',
    wrongA: 'Kim đồng hồ chỉ vào vạch màu ĐỎ nghĩa là bình đang đầy năng lượng nhất',
    wrongB: 'Muốn kiểm tra bình bột còn dùng được không thì rút chốt bóp thử một nửa bình ra sân rồi cất đi dùng tiếp',
    wrongC: 'Đặt bình chữa cháy ngoài trời nắng gắt 45 độ C hoặc sát bếp lửa để bột luôn khô ráo',
    legalBasis: 'TCVN 3890:2023 & Hướng dẫn kiểm tra bảo dưỡng phương tiện PCCC tại gia đình.'
  },
  {
    topicTitle: 'Quy định nghiêm cấm tích trữ trái phép xăng dầu, hóa chất dễ cháy nổ và sản xuất, tàng trữ, đốt pháo nổ trong khu dân cư',
    coreFact: 'Nghiêm cấm tích trữ xăng dầu trong can nhựa tại nhà ở gây nguy cơ cháy nổ thảm khốc; nghiêm cấm mọi hành vi tự chế tạo thuốc pháo (mua hóa chất KClO3, lưu huỳnh trên mạng), tàng trữ, vận chuyển và đốt pháo nổ trái phép (phạt tiền từ 5 - 10 triệu đồng hoặc truy cứu hình sự)',
    wrongA: 'Mua 100 lít xăng đựng trong can nhựa để dưới gầm cầu thang nhà ống dự trữ dùng dần là an toàn',
    wrongB: 'Học sinh tự mua hóa chất trên mạng về đun nấu chế thuốc pháo tại nhà là trò chơi khoa học vô hại',
    wrongC: 'Đêm Giao thừa mọi hộ dân đều được phép đốt pháo bánh, pháo hoa nổ thoải mái',
    legalBasis: 'Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo & Nghị định 144/2021/NĐ-CP.'
  },
  {
    topicTitle: 'An toàn sử dụng hệ thống điện và thiết bị tiêu thụ điện công suất lớn trong mùa nắng nóng / mùa đông',
    coreFact: 'Mỗi hộ gia đình phải lắp đặt Aptomat chống quá tải, chống dòng rò (RCBO/ELCB) cho tổng nhà và từng tầng; không cắm nhiều thiết bị công suất lớn (bếp từ, bình nóng lạnh, bàn là, lò sưởi, ấm siêu tốc) vào chung một ổ cắm nối dài; tắt các thiết bị điện không cần thiết trước khi ra khỏi nhà',
    wrongA: 'Khi Aptomat liên tục nhảy (ngắt điện) do quá tải thì dùng dây đồng buộc chặt cần gạt Aptomat lại để điện không tắt nữa',
    wrongB: 'Dùng dây điện trần không bọc ống gen luồn qua mái tôn kim loại và vách gỗ để tiết kiệm chi phí',
    wrongC: 'Bật bàn là quần áo và máy sấy tóc để ngay trên đệm giường rồi chạy ra ngoài mua đồ',
    legalBasis: 'Khuyến cáo an toàn điện PCCC mùa nắng nóng của Bộ Công an & Tập đoàn Điện lực Việt Nam.'
  },
  {
    topicTitle: 'Phương châm "4 tại chỗ" trong công tác Phòng cháy chữa cháy và Cứu nạn cứu hộ ở cơ sở',
    coreFact: 'Phương châm 4 tại chỗ trong PCCC gồm: (1) Chỉ huy tại chỗ; (2) Lực lượng tại chỗ (người dân, Tổ liên gia PCCC, dân phòng, Công an xã); (3) Phương tiện tại chỗ (bình chữa cháy hộ gia đình, Điểm chữa cháy công cộng); (4) Vật tư và hậu cần tại chỗ — nhằm dập tắt đám cháy ngay từ trong "5 phút vàng" đầu tiên',
    wrongA: '4 tại chỗ nghĩa là: Đóng cửa tại chỗ - Đứng nhìn tại chỗ - Quay phim tại chỗ - Chờ cứu hỏa tại chỗ',
    wrongB: 'Công tác chữa cháy là việc riêng 100% của Cảnh sát PCCC chuyên nghiệp, người dân không cần trang bị bình chữa cháy',
    wrongC: 'Chỉ khi đám cháy đã lan sang 3 ngôi nhà mới được phép sử dụng bình chữa cháy tại Điểm chữa cháy công cộng',
    legalBasis: 'Luật Phòng cháy và chữa cháy & Nghị định số 136/2020/NĐ-CP.'
  },
  {
    topicTitle: 'Kỹ năng xử lý khi bị mắc kẹt trong nhà cao tầng hoặc tầng trên của ngôi nhà đang cháy lớn ở tầng 1',
    coreFact: 'Nếu cầu thang bộ xuống tầng 1 đã bị lửa và khói độc bao trùm hoàn toàn, TUYỆT ĐỐI KHÔNG cố lao xuống qua biển lửa; phải di chuyển lên tầng thượng/mái nhà (nếu thông thoáng) hoặc vào phòng có ban công/cửa sổ hướng ra mặt đường, đóng chặt cửa phòng lại, dùng khăn/chăn ướt chèn kín khe cửa ngăn khói, gọi 114 báo rõ vị trí tầng/phòng và dùng vải sáng màu/đèn pin ra hiệu tại cửa sổ',
    wrongA: 'Nhảy ngay từ ban công tầng 5 xuống nền bê tông bên dưới dù chưa có đệm hơi cứu hộ',
    wrongB: 'Cố gắng nín thở chạy lao xuống cầu thang bộ đang cháy rực lửa ở tầng 1',
    wrongC: 'Chui vào tủ quần áo gỗ khóa trái cửa và tắt điện thoại để tiết kiệm pin',
    legalBasis: 'Cẩm nang kỹ năng thoát nạn và tự cứu khi mắc kẹt trong đám cháy của Cục Cảnh sát PCCC (C07).'
  },
  {
    topicTitle: 'Sơ cấp cứu ban đầu đúng cách đối với nạn nhân bị bỏng nhiệt do hỏa hoạn',
    coreFact: 'Đưa nạn nhân ra nơi an toàn thoáng khí, lập tức ngâm hoặc xả nhẹ nước sạch mát (nhiệt độ thường 16-20 độ C, KHÔNG dùng nước đá lạnh buốt) lên vùng da bị bỏng trong 15 - 20 phút để hạ nhiệt tổn thương sâu, che phủ vết bỏng bằng gạc vô trùng sạch và chuyển ngay đến cơ sở y tế',
    wrongA: 'Bôi ngay nước mắm, kem đánh răng, mỡ trăn hoặc lòng trắng trứng gà lên vết bỏng đang trợt da',
    wrongB: 'Dùng tay bóc lột mạnh toàn bộ lớp quần áo đang dính chặt vào vết bỏng và chọc vỡ các nốt phỏng nước',
    wrongC: 'Chườm đá lạnh trực tiếp lên vết bỏng trong 1 tiếng đồng hồ',
    legalBasis: 'Hướng dẫn sơ cấp cứu bỏng nhiệt của Bộ Y tế & Cục Cảnh sát PCCC và CNCH.'
  },
  {
    topicTitle: 'Ứng dụng "Báo cháy 114" và đường dây nóng trực ban Công an xã Đức Hợp trong công tác PCCC & CNCH',
    coreFact: 'Người dân cài đặt ứng dụng "Báo cháy 114" (hoặc gọi 114 và Trực ban Công an xã Đức Hợp 02213.815.999) để gửi định vị GPS chính xác vị trí đám cháy, truyền hình ảnh/video trực tiếp hiện trường đám cháy và tra cứu kiến thức, kỹ năng thoát nạn PCCC chính thống',
    wrongA: 'Khi xảy ra cháy chỉ cần đăng trạng thái lên Facebook cá nhân chờ bạn bè vào bình luận là đủ',
    wrongB: 'Gọi 114 báo cháy người dân phải trả phí dịch vụ chữa cháy 10 triệu đồng cho mỗi xe cứu hỏa đến',
    wrongC: 'Đường dây nóng 114 và 02213.815.999 chỉ làm việc giờ hành chính, nghỉ Thứ Bảy và Chủ Nhật',
    legalBasis: 'Quy định thường trực sẵn sàng chiến đấu 24/24h của lực lượng Cảnh sát PCCC và Công an xã Đức Hợp.'
  }
];

const QUESTION_ANGLES = [
  {
    suffix: 'Phương án xử lý nào dưới đây là ĐÚNG và an toàn nhất theo quy định pháp luật?',
    scenarioPrefix: 'Tình huống nhận diện & xử lý chuẩn pháp luật:'
  },
  {
    suffix: 'Người dân tại xã Đức Hợp cần tuân thủ nguyên tắc cốt lõi nào để bảo vệ quyền lợi và an toàn?',
    scenarioPrefix: 'Nguyên tắc nghiệp vụ & phòng ngừa rủi ro:'
  },
  {
    suffix: 'Hành động nào sau đây thể hiện sự hiểu biết đúng đắn của "Công dân số cảnh giác"?',
    scenarioPrefix: 'Kỹ năng thực hành công dân số tại cơ sở:'
  },
  {
    suffix: 'Khi hướng dẫn người thân trong gia đình về vấn đề này, nội dung nào dưới đây là CHÍNH XÁC nhất?',
    scenarioPrefix: 'Tuyên truyền pháp luật cho gia đình & cộng đồng:'
  },
  {
    suffix: 'Theo khuyến cáo chính thức của Công an xã Đức Hợp, công dân phải thực hiện như thế nào?',
    scenarioPrefix: 'Khuyến cáo chính thức của Công an xã Đức Hợp:'
  }
];

function buildCategoryQuestions(
  prefix: string,
  category: 'lua_dao' | 'cu_tru' | 'giao_thong' | 'pccc',
  categoryLabel: string,
  seeds: TopicSeed[]
): DetailedQuizQuestion[] {
  const result: DetailedQuizQuestion[] = [];
  const correctKeys: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  for (let i = 0; i < 20; i++) {
    const seed = seeds[i % seeds.length];
    for (let angleIdx = 0; angleIdx < 5; angleIdx++) {
      const qNum = 26 + i * 5 + angleIdx; // 26 .. 125 (100 questions per category)
      const angle = QUESTION_ANGLES[angleIdx];
      const targetCorrectKey = correctKeys[(i + angleIdx) % 4];

      // Arrange options so targetCorrectKey gets seed.coreFact
      const wrongs = [seed.wrongA, seed.wrongB, seed.wrongC];
      let wIdx = 0;
      const options: Array<{ key: 'A' | 'B' | 'C' | 'D'; text: string }> = [];
      const whyWrong: Record<'A' | 'B' | 'C' | 'D', string> = {
        A: '',
        B: '',
        C: '',
        D: ''
      };

      for (const k of correctKeys) {
        if (k === targetCorrectKey) {
          options.push({ key: k, text: seed.coreFact });
          whyWrong[k] = `Chính xác! ${seed.coreFact}.`;
        } else {
          const wText = wrongs[wIdx++];
          options.push({ key: k, text: wText });
          whyWrong[k] = `Sai lầm nguy hiểm / Trái quy định: "${wText}". Đáp án đúng là: ${seed.coreFact}.`;
        }
      }

      result.push({
        id: `${prefix}-${qNum}`,
        category,
        categoryLabel,
        question: `[Tình huống #${qNum}] Đối với vấn đề "${seed.topicTitle}", ${angle.suffix}`,
        scenario: `${angle.scenarioPrefix} ${seed.topicTitle}.`,
        options,
        correctKey: targetCorrectKey,
        explanation: `${seed.coreFact}. (Căn cứ: ${seed.legalBasis})`,
        whyWrong,
        legalBasis: seed.legalBasis
      });
    }
  }

  return result;
}

export const ADDITIONAL_400_QUESTIONS: DetailedQuizQuestion[] = [
  ...buildCategoryQuestions('LD', 'lua_dao', 'Phòng chống lừa đảo', LUA_DAO_SEEDS),
  ...buildCategoryQuestions('CT', 'cu_tru', 'Cư trú & VNeID', CU_TRU_SEEDS),
  ...buildCategoryQuestions('GT', 'giao_thong', 'An toàn giao thông', GIAO_THONG_SEEDS),
  ...buildCategoryQuestions('PC', 'pccc', 'PCCC & Cứu nạn', PCCC_SEEDS),
];

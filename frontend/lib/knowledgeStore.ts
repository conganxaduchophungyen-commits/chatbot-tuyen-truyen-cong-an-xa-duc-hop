export interface KnowledgeItem {
  id: string;
  source_title: string;
  source_type: string;
  chunk_preview: string;
  created_at: string;
}

export const IN_MEMORY_KNOWLEDGE: KnowledgeItem[] = [
  {
    "id": "kb_001",
    "source_title": "Luật Cư trú số 68/2020/QH14: Bỏ sổ hộ khẩu giấy, quản lý bằng định danh cá nhân",
    "source_type": "law",
    "chunk_preview": "Từ ngày 01/01/2023, toàn bộ Sổ hộ khẩu, Sổ tạm trú giấy đã hết giá trị sử dụng. Mọi thông tin cư trú của công dân xã Đức Hợp được quản lý số...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_002",
    "source_title": "Quy định Đăng ký thường trú tại chỗ ở hợp pháp xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Công dân có chỗ ở hợp pháp thuộc quyền sở hữu của mình hoặc được chủ hộ, chủ sở hữu chỗ ở hợp pháp đồng ý cho đăng ký thường trú tại xã Đức ...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_003",
    "source_title": "Quy định Đăng ký tạm trú và Gia hạn tạm trú (Từ 30 ngày trở lên)",
    "source_type": "law",
    "chunk_preview": "Công dân đến sinh sống tại chỗ ở hợp pháp ngoài phạm vi đơn vị hành chính cấp xã nơi đã đăng ký thường trú để lao động, học tập từ 30 ngày t...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_004",
    "source_title": "Quy định Thông báo lưu trú qua VNeID (Thực hiện trước 23 giờ)",
    "source_type": "law",
    "chunk_preview": "Lưu trú là việc công dân ở lại một địa điểm không phải nơi thường trú hoặc tạm trú trong thời gian dưới 30 ngày. Khi có người đến lưu trú, c...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_005",
    "source_title": "Quy định Khai báo tạm vắng theo Điều 31 Luật Cư trú",
    "source_type": "law",
    "chunk_preview": "Công dân có nghĩa vụ khai báo tạm vắng khi đi khỏi nơi cư trú thuộc các trường hợp bị can, bị cáo đang tại ngoại, người bị quản chế, hoặc ng...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_006",
    "source_title": "9 Trường hợp bị Xóa đăng ký thường trú theo Luật Cư trú 2020",
    "source_type": "law",
    "chunk_preview": "Công dân bị xóa đăng ký thường trú trong 9 trường hợp: Chết; định cư nước ngoài; vắng mặt liên tục 12 tháng không khai báo; hủy bỏ đăng ký t...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_007",
    "source_title": "Thủ tục Tách hộ trong cùng một chỗ ở hợp pháp tại xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Thành viên hộ gia đình được tách hộ để đăng ký thường trú tại cùng một chỗ ở hợp pháp khi có năng lực hành vi dân sự đầy đủ và được chủ hộ, ...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_008",
    "source_title": "Giấy xác nhận thông tin về cư trú (Mẫu CT07) và Thời hạn sử dụng",
    "source_type": "law",
    "chunk_preview": "Giấy xác nhận thông tin về cư trú (CT07) có giá trị xác nhận nơi cư trú của cá nhân hoặc hộ gia đình. Từ ngày 01/01/2024, Giấy CT07 có giá t...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_009",
    "source_title": "Điều chỉnh thông tin cư trú và Đổi chủ hộ khi chủ hộ qua đời",
    "source_type": "law",
    "chunk_preview": "Khi có sự thay đổi về chủ hộ hoặc thông tin nhân thân trong Cơ sở dữ liệu về cư trú, thành viên hộ gia đình phải làm thủ tục điều chỉnh tron...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_010",
    "source_title": "Chế tài xử phạt vi phạm hành chính về Cư trú theo Nghị định 144/2021",
    "source_type": "law",
    "chunk_preview": "Nghị định 144/2021/NĐ-CP quy định mức phạt tiền từ 500.000đ đến 2.000.000đ đối với các hành vi không đăng ký thường trú, tạm trú, không thôn...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_011",
    "source_title": "Quy định mới của Luật Căn cước 2023 (Có hiệu lực từ ngày 01/7/2024)",
    "source_type": "law",
    "chunk_preview": "Chính thức đổi tên 'Căn cước công dân' thành 'Thẻ Căn cước'; bổ sung thu nhận mống mắt bắt buộc từ đủ 6 tuổi; cấp thẻ cho trẻ dưới 14 tuổi t...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_012",
    "source_title": "Thu nhận Mống mắt, Vân tay và ADN trong Luật Căn cước 2023",
    "source_type": "law",
    "chunk_preview": "Thu nhận mống mắt là bắt buộc đối với người từ đủ 6 tuổi trở lên. Thu nhận ADN và giọng nói là thủ tục tự nguyện để tích hợp vào Cơ sở dữ li...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_013",
    "source_title": "Quy trình Cấp thẻ Căn cước cho trẻ em từ 0 đến dưới 14 tuổi",
    "source_type": "law",
    "chunk_preview": "Trẻ em dưới 14 tuổi được cấp thẻ Căn cước theo nhu cầu. Thẻ Căn cước của trẻ em có giá trị đi máy bay, khám chữa bệnh BHYT, làm thủ tục học ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_014",
    "source_title": "Tài khoản Định danh điện tử VNeID Mức 1 và Mức 2",
    "source_type": "law",
    "chunk_preview": "VNeID Mức 1 có thể tự đăng ký tại nhà trên điện thoại. VNeID Mức 2 bắt buộc phải đến Trụ sở Công an thu nhận ảnh mặt và vân tay. Mức 2 có gi...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_015",
    "source_title": "Tích hợp Giấy phép lái xe (GPLX) và Đăng ký xe trên VNeID",
    "source_type": "law",
    "chunk_preview": "Thông tư 28/2024/TT-BCA chính thức có hiệu lực từ ngày 01/7/2024 quy định: Việc xuất trình GPLX, Đăng ký xe trên ứng dụng VNeID có giá trị p...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_016",
    "source_title": "Tích hợp Thẻ BHYT và Sổ sức khỏe điện tử trên VNeID",
    "source_type": "law",
    "chunk_preview": "100% cơ sở khám chữa bệnh BHYT trên địa bàn tỉnh Hưng Yên và toàn quốc đã chấp nhận khám chữa bệnh bằng thẻ Căn cước công dân gắn chip hoặc ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_017",
    "source_title": "Cấp Phiếu Lý lịch tư pháp trực tuyến qua ứng dụng VNeID",
    "source_type": "law",
    "chunk_preview": "Người dân xã Đức Hợp có thể làm thủ tục cấp Phiếu Lý lịch tư pháp trực tuyến 100% tại nhà qua VNeID, nhận bản điện tử trên ví giấy tờ hoặc b...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_018",
    "source_title": "Bảo mật tài khoản VNeID và Xử lý khẩn cấp khi mất điện thoại",
    "source_type": "law",
    "chunk_preview": "Khi bị mất điện thoại có cài VNeID, công dân phải lập tức yêu cầu khóa tài khoản qua tổng đài 1900.0368 hoặc đến Công an xã Đức Hợp để khóa ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_019",
    "source_title": "Quy định Đăng ký khai sinh, Khai tử và Đăng ký kết hôn trên môi trường số",
    "source_type": "law",
    "chunk_preview": "Người dân xã Đức Hợp có thể đăng ký khai sinh, khai tử, cấp bản sao trích lục hộ tịch trực tuyến qua Cổng DVC, dữ liệu tự động đồng bộ sang ...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_020",
    "source_title": "Quy tắc '4 Không - 2 Phải' phòng ngừa tội phạm trên không gian mạng",
    "source_type": "anti_scam",
    "chunk_preview": "Cẩm nang cốt lõi bảo vệ người dân xã Đức Hợp trước mọi thủ đoạn lừa đảo mạng: KHÔNG bấm link lạ; KHÔNG cung cấp OTP; KHÔNG chuyển tiền cho n...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_021",
    "source_title": "Luật Trật tự, an toàn giao thông đường bộ 2024: Các điểm mới áp dụng",
    "source_type": "traffic",
    "chunk_preview": "Luật TTATGT đường bộ 2024 tách biệt rõ ràng trách nhiệm bảo đảm an toàn giao thông; quy định hệ thống 12 điểm GPLX; phân hạng giấy phép lái ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_022",
    "source_title": "Hệ thống Trừ điểm Giấy phép lái xe (12 điểm/năm) và Cơ chế phục hồi điểm",
    "source_type": "traffic",
    "chunk_preview": "Mỗi Giấy phép lái xe có 12 điểm trong 1 năm. Khi vi phạm các lỗi nghiêm trọng sẽ bị trừ điểm trực tiếp trên hệ thống số. Nếu không bị trừ hế...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_023",
    "source_title": "Quy định xử phạt vi phạm Nồng độ cồn đối với người lái xe máy, ô tô",
    "source_type": "traffic",
    "chunk_preview": "Mức phạt vi phạm nồng độ cồn đối với xe máy từ 2.000.000đ đến 8.000.000đ, tước GPLX từ 10 đến 24 tháng; đối với ô tô từ 6.000.000đ đến 40.00...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_024",
    "source_title": "Quy trình Đăng ký xe máy lần đầu tại Công an xã Đức Hợp",
    "source_type": "traffic",
    "chunk_preview": "Công an xã Đức Hợp có thẩm quyền đăng ký, cấp biển số xe mô tô, xe gắn máy, xe máy điện cho cá nhân cư trú tại xã. Bấm biển định danh trực t...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_025",
    "source_title": "Quy định Biển số định danh theo Thông tư 24/2023/TT-BCA",
    "source_type": "traffic",
    "chunk_preview": "Biển số định danh được cấp và quản lý theo mã định danh của chủ xe. Biển số đi theo người, không đi theo xe. Khi bán xe, chủ xe phải nộp lại...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_026",
    "source_title": "Thủ tục Sang tên, đổi chủ xe mô tô, xe máy cũ tại xã Đức Hợp",
    "source_type": "traffic",
    "chunk_preview": "Mua bán xe máy bắt buộc phải làm 2 bước: Bước 1 - Chủ cũ làm thủ tục thu hồi đăng ký, biển số; Bước 2 - Chủ mới làm thủ tục đăng ký sang tên...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_027",
    "source_title": "Quy trình Nộp phạt nguội giao thông trực tuyến 100% trên Cổng DVC Quốc gia",
    "source_type": "traffic",
    "chunk_preview": "Công dân tra cứu vi phạm phạt nguội, nộp tiền phạt trực tuyến qua tài khoản ngân hàng và đăng ký nhận lại giấy tờ tạm giữ chuyển phát bưu đi...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_028",
    "source_title": "Quy định tốc độ và đội Mũ bảo hiểm đạt chuẩn tại đường giao thông nông thôn",
    "source_type": "traffic",
    "chunk_preview": "Người điều khiển và người ngồi trên xe máy, xe đạp điện bắt buộc phải đội mũ bảo hiểm có cài quai đúng quy cách khi tham gia giao thông trên...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_029",
    "source_title": "Trách nhiệm của cha mẹ khi giao xe cho người chưa đủ tuổi lái xe",
    "source_type": "traffic",
    "chunk_preview": "Cha mẹ, chủ xe giao xe máy cho người chưa đủ tuổi điều khiển phương tiện bị phạt tiền từ 800.000đ đến 2.000.000đ. Nếu gây tai nạn nghiêm trọ...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_030",
    "source_title": "Xử phạt hành vi tự ý Thay đổi kết cấu xe, 'Độ pô', lạng lách đánh võng",
    "source_type": "traffic",
    "chunk_preview": "Nghiêm cấm hành vi tự ý thay đổi khung, máy, hình dáng, kích thước của xe; lắp ống xả pô nổ to gây mất ANTT thôn xóm. Phạt từ 800.000đ đến 2...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_031",
    "source_title": "Phong trào 'Nhà tôi có bình chữa cháy' theo Chỉ thị 01/CT-TTg",
    "source_type": "pccc",
    "chunk_preview": "Mục tiêu 100% hộ gia đình trên địa bàn xã Đức Hợp tự trang bị tối thiểu 01 bình chữa cháy xách tay, mở lối thoát nạn thứ 2 và có ít nhất 01 ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_032",
    "source_title": "Phân biệt Bình bột ABC và Bình khí CO2 & Kỹ thuật dập lửa",
    "source_type": "pccc",
    "chunk_preview": "Bình bột ABC có đồng hồ đo áp suất (kim chỉ vạch xanh là dùng tốt), dập được chất cháy rắn, lỏng, khí. Bình khí CO2 không có đồng hồ, thân b...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_033",
    "source_title": "Quy tắc 4 Bước xử lý Khẩn cấp khi phát hiện Rò rỉ khí gas",
    "source_type": "pccc",
    "chunk_preview": "Khi ngửi thấy mùi gas nồng nặc trong nhà: 1-Tuyệt đối KHÔNG bật/tắt công tắc điện hay quẹt lửa; 2-Khóa chặt van bình gas; 3-Mở toang các cửa...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_034",
    "source_title": "Kỹ năng dập tắt đám cháy Chảo dầu mỡ trong gian bếp gia đình",
    "source_type": "pccc",
    "chunk_preview": "Tuyệt đối KHÔNG dội nước vào chảo dầu mỡ đang bốc cháy (nước làm dầu sôi bắn tung tóe bùng cháy thành cầu lửa khổng lồ). Cách xử lý: Đậy nắp...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_035",
    "source_title": "Mở Lối thoát nạn thứ 2 cho nhà ống, nhà có Lồng sắt 'Chuồng cọp'",
    "source_type": "pccc",
    "chunk_preview": "Nhà ở dạng ống, nhà có hàn lồng sắt ban công bắt buộc phải cắt mở ô cửa thoát hiểm (kích thước tối thiểu 0.6m x 0.8m), khóa để chìa sẵn nơi ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_036",
    "source_title": "Kỹ năng Thoát nạn an toàn trong đám cháy nhiều khói độc",
    "source_type": "pccc",
    "chunk_preview": "Khói độc khí CO, CO2 bốc lên cao là nguyên nhân gây tử vong hàng đầu trong hỏa hoạn. Kỹ năng sống còn: Cúi thấp người, bò sát mặt sàn nơi có...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_037",
    "source_title": "Mô hình 'Tổ liên gia an toàn PCCC' tại các thôn xóm xã Đức Hợp",
    "source_type": "pccc",
    "chunk_preview": "Tổ liên gia gồm 5-15 hộ liền kề. Mỗi nhà lắp 1 chuông và 1 nút bấm kết nối liên hoàn. Khi 1 nhà có sự cố bấm chuông, toàn bộ các nhà trong n...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_038",
    "source_title": "Mô hình 'Điểm chữa cháy công cộng' tại các ngõ sâu",
    "source_type": "pccc",
    "chunk_preview": "Bố trí tại các ngõ hẹp sâu trên 50m xe cứu hỏa không vào được. Trang bị hộp phương tiện gắn tường gồm: 02 bình bột ABC, kìm cộng lực, búa tạ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_039",
    "source_title": "An toàn sử dụng Điện sinh hoạt và Sạc xe máy điện, xe đạp điện",
    "source_type": "pccc",
    "chunk_preview": "Chập điện chiếm trên 70% nguyên nhân các vụ cháy. Quy tắc: Lắp aptomat chống giật, chống quá tải; không cắm sạc xe điện qua đêm gần lối thoá...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_040",
    "source_title": "Tổng đài 114 và Tiếp nhận tin báo cháy tại Công an xã Đức Hợp",
    "source_type": "pccc",
    "chunk_preview": "Gọi ngay Tổng đài 114 (miễn cước cuộc gọi) hoặc gọi số Trực ban Công an xã Đức Hợp: 02213.815.999 khi phát hiện cháy, nổ, đuối nước, sập đổ ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_041",
    "source_title": "Lừa đảo Giả danh Công an hướng dẫn cài app VNeID/Dịch vụ công giả mạo (.apk)",
    "source_type": "scam_alert",
    "chunk_preview": "Kẻ xấu gọi điện thông báo VNeID bị lỗi, gửi link tải app .apk giả mạo Cổng DVC. Khi cấp quyền Trợ năng (Accessibility), mã độc tự chụp màn h...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_042",
    "source_title": "Lừa đảo Giả danh Cơ quan Điều tra, Viện kiểm sát gọi điện dọa 'Lệnh bắt giam'",
    "source_type": "scam_alert",
    "chunk_preview": "Kẻ xấu dọa nạn nhân liên quan đường dây rửa tiền, buôn ma túy xuyên quốc gia; gửi lệnh bắt giả qua Zalo ép chuyển tiền vào 'tài khoản an toà...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_043",
    "source_title": "Lừa đảo Tuyển Cộng tác viên xử lý đơn hàng ảo Shopee, TikTok, Lazada",
    "source_type": "scam_alert",
    "chunk_preview": "Quảng cáo việc nhẹ lương cao nạp tiền mua đơn hàng hưởng hoa hồng 10-20%. Vài đơn đầu 100k-500k trả tiền sòng phẳng. Đơn lớn hàng chục triệu...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_044",
    "source_title": "Lừa đảo Cuộc gọi video Deepfake AI giả mặt, giả giọng người thân mượn tiền",
    "source_type": "scam_alert",
    "chunk_preview": "Đối tượng hack tài khoản Facebook/Zalo, dùng công nghệ AI ghép mặt và nhại giọng người thân gọi video vài giây rồi cúp máy (bảo sóng yếu), s...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_045",
    "source_title": "Lừa đảo Đầu tư sàn tài chính Forex, Tiền ảo, Chứng khoán quốc tế cam kết siêu lợi nhuận",
    "source_type": "scam_alert",
    "chunk_preview": "Lập các sàn giao dịch ảo, cam kết lợi nhuận 30-50%/tháng bao lỗ. Ban đầu cho rút tiền nhỏ để tạo lòng tin, khi nộp số tiền lớn thì khóa tài ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_046",
    "source_title": "Lừa đảo Cho vay tiền online qua App đen: Lãi suất 0%, dụ nộp phí bảo hiểm khoản vay",
    "source_type": "scam_alert",
    "chunk_preview": "Quảng cáo vay tiền giải ngân trong 5 phút không cần thế chấp. Sau khi đăng ký, kẻ xấu báo 'sai số tài khoản ngân hàng' hoặc 'chưa đóng phí b...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_047",
    "source_title": "Lừa đảo Bẫy tình cảm xuyên biên giới (Romance Scam) gửi thùng quà ngoại tệ",
    "source_type": "scam_alert",
    "chunk_preview": "Đối tượng đóng giả sĩ quan quân đội, kỹ sư dầu khí nước ngoài góa vợ kết bạn tán tỉnh yêu đương, hứa gửi thùng quà chứa hàng triệu USD về Vi...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_048",
    "source_title": "Lừa đảo Thông báo Trúng thưởng xe SH, Sổ tiết kiệm yêu cầu nộp thuế trước",
    "source_type": "scam_alert",
    "chunk_preview": "Nhắn tin hoặc gọi điện chúc mừng trúng thưởng xe máy SH, sổ tiết kiệm 500 triệu dịp tri ân khách hàng; yêu cầu chuyển khoản từ vài triệu đến...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_049",
    "source_title": "Lừa đảo Chiếm đoạt SIM 4G/5G và Dụ bấm cú pháp chuyển tiếp cuộc gọi (**21*)",
    "source_type": "scam_alert",
    "chunk_preview": "Kẻ xấu giả nhân viên nhà mạng gọi điện hỗ trợ nâng cấp SIM 4G/5G miễn phí, dụ nạn nhân nhắn cú pháp **21*Số_điện_thoại# trên bàn phím. Cú ph...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_050",
    "source_title": "Lừa đảo Dịch vụ 'Thu hồi tiền treo, cam kết lấy lại tiền bị lừa qua mạng' (Bẫy lừa lần 2)",
    "source_type": "scam_alert",
    "chunk_preview": "Nạn nhân vừa bị lừa tiền lên mạng tìm kiếm cách lấy lại thì gặp các trang 'Văn phòng Luật sư, Cục An ninh mạng hỗ trợ thu hồi tiền treo'. Kẻ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_051",
    "source_title": "Lừa đảo Quét mã QR độc hại (QR Phishing) dán đè tại quán ăn, cửa hàng, bưu phẩm",
    "source_type": "scam_alert",
    "chunk_preview": "Đối tượng in mã QR độc hại dán đè lên mã QR thanh toán của cửa hàng, quán ăn hoặc gửi kèm bưu phẩm tri ân. Khi người dân quét mã, điện thoại...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_052",
    "source_title": "Hành vi Mua bán, Cho thuê tài khoản ngân hàng: Tiếp tay tội phạm rửa tiền",
    "source_type": "scam_alert",
    "chunk_preview": "Dụ dỗ sinh viên, người dân mở tài khoản ngân hàng rồi bán lại với giá 500k - 1 triệu/tài khoản. Các tài khoản này được bọn tội phạm dùng để ...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_053",
    "source_title": "Lừa đảo Giả mạo Biên lai chuyển tiền thành công (Fake Bill) chiếm đoạt hàng hóa",
    "source_type": "scam_alert",
    "chunk_preview": "Khách vào mua hàng dùng các trang web/app tạo bill chuyển tiền giả có logo ngân hàng, số tiền, tên người nhận y như thật rồi giục giao hàng ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_054",
    "source_title": "Lừa đảo Mạo danh Nhân viên Điện lực, Viễn thông, BHXH dọa cắt dịch vụ đòi nợ",
    "source_type": "scam_alert",
    "chunk_preview": "Gọi điện tự xưng nhân viên điện lực thông báo khách hàng chưa đóng tiền điện tháng trước, dọa cắt điện trong 2 giờ tới; yêu cầu bấm link tải...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_055",
    "source_title": "Quy trình 4 Bước khẩn cấp khi người dân phát hiện bị lừa đảo hoặc đã lỡ chuyển tiền",
    "source_type": "anti_scam",
    "chunk_preview": "1-Khóa tài khoản ngân hàng lập tức; 2-Sao lưu toàn bộ tin nhắn, bằng chứng lừa đảo; 3-In bản sao kê ngân hàng có mộc đỏ; 4-Đến ngay Trụ sở C...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_056",
    "source_title": "Luật Phòng, chống ma túy: Trách nhiệm gia đình và Quy trình cai nghiện",
    "source_type": "law",
    "chunk_preview": "Gia đình có trách nhiệm phát hiện, khai báo người nghiện ma túy; phối hợp quản lý người cai nghiện tại gia đình và cộng đồng. Quy trình đăng...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_057",
    "source_title": "Nhận diện Ma túy 'núp bóng' thực phẩm: Nước vui, Trà sữa, Bánh cần sa",
    "source_type": "anti_scam",
    "chunk_preview": "Các đối tượng pha trộn ma túy tổng hợp Methamphetamine, Ketamine vào các gói đồ uống có bao bì sặc sỡ in chữ Crispy Fruit, Mango, Trà sữa......",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_058",
    "source_title": "Tác hại của Thuốc lá điện tử pha Tinh dầu ma túy (Pod chill, Pod hút)",
    "source_type": "anti_scam",
    "chunk_preview": "Nhiều loại tinh dầu thuốc lá điện tử Pod chill bị tẩm ướp chất cần sa tổng hợp (ADB-BUTINACA). Người hút bị co giật, ảo giác, hôn mê, suy ti...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_059",
    "source_title": "Nhận diện và Tác hại của Khí cười N2O (Bóng cười) đối với hệ thần kinh",
    "source_type": "anti_scam",
    "chunk_preview": "Khí N2O gây tê liệt tủy sống, tổn thương não vĩnh viễn, suy giảm trí nhớ và liệt chi. Hành vi kinh doanh khí N2O phục vụ mục đích vui chơi g...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_060",
    "source_title": "Biện pháp phòng ngừa Tội phạm Trộm cắp tài sản tại địa bàn nông thôn xã Đức Hợp",
    "source_type": "anti_scam",
    "chunk_preview": "Đối tượng thường lợi dụng sơ hở dựng xe máy ngoài ngõ không người trông coi, chìa khóa cắm sẵn ở ổ, cửa nhà ban đêm không khóa chắc chắn. Kh...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_061",
    "source_title": "Phòng ngừa Tội phạm 'Tín dụng đen' và Cho vay nặng lãi trong giao dịch dân sự",
    "source_type": "law",
    "chunk_preview": "Lãi suất cho vay trong giao dịch dân sự không được vượt quá 20%/năm. Hành vi cho vay với lãi suất gấp 5 lần trở lên thu lợi bất chính từ 30 ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_062",
    "source_title": "Chế tài xử phạt Tệ nạn Cờ bạc, Đánh số đề, Cá độ bóng đá qua mạng",
    "source_type": "law",
    "chunk_preview": "Đánh bạc dưới mọi hình thức (tiền, hiện vật) từ 5.000.000đ trở lên hoặc dưới 5 triệu nhưng đã bị kết án chưa xóa án tích sẽ bị phạt tù từ 06...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_063",
    "source_title": "Công tác Giúp đỡ người chấp hành xong án phạt tù Tái hòa nhập cộng đồng",
    "source_type": "law",
    "chunk_preview": "Chính sách hỗ trợ người chấp hành xong án phạt tù về cư trú tại xã Đức Hợp: Tạo điều kiện nhập lại hộ khẩu, cấp CCCD, hỗ trợ học nghề và đượ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_064",
    "source_title": "Quy trình Quản lý và Xét nghiệm chất ma túy đối với người sử dụng tại xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Công an xã Đức Hợp có thẩm quyền phối hợp Trạm Y tế xã triệu tập và tiến hành xét nghiệm chất ma túy trong cơ thể đối với người có biểu hiện...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_065",
    "source_title": "Xử lý hành vi sử dụng Xung điện, Kích điện đánh bắt thủy sản trái phép",
    "source_type": "law",
    "chunk_preview": "Nghiêm cấm sử dụng công cụ kích điện, xung điện để khai thác thủy sản trên các tuyến sông, mương, kênh rạch tại xã Đức Hợp. Phạt tiền từ 3.0...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_066",
    "source_title": "Luật Quản lý, sử dụng vũ khí, vật liệu nổ và CCHT năm 2024",
    "source_type": "law",
    "chunk_preview": "Luật mới năm 2024 bổ sung dao có tính sát thương cao (lưỡi dài từ 20cm trở lên có đầu nhọn) vào nhóm vũ khí khi sử dụng với mục đích xâm phạ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_067",
    "source_title": "Phân loại Súng tự chế (Súng cồn, súng kíp, súng săn, súng hơi PCP) và Mức xử phạt",
    "source_type": "law",
    "chunk_preview": "Súng cồn, súng hơi PCP bắn đạn chì có sức sát thương tương đương vũ khí quân dụng. Hành vi chế tạo, tàng trữ, sử dụng bị phạt tiền từ 10 - 2...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_068",
    "source_title": "Phân biệt Pháo hoa hợp pháp (Z121) và Pháo hoa nổ bị nghiêm cấm",
    "source_type": "law",
    "chunk_preview": "Pháo hoa hợp pháp chỉ phát ra hiệu ứng ánh sáng, màu sắc, âm thanh rít nhưng KHÔNG gây tiếng nổ (do Nhà máy Z121 sản xuất). Pháo hoa nổ là l...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_069",
    "source_title": "Điều kiện sử dụng Pháo hoa Z121 trong dịp Tết, Cưới hỏi, Sinh nhật",
    "source_type": "law",
    "chunk_preview": "Cá nhân từ đủ 18 tuổi có năng lực hành vi dân sự được phép sử dụng pháo hoa Z121 trong các dịp lễ, tết, sinh nhật, cưới hỏi. Phải mua tại cử...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_070",
    "source_title": "Chế tài xử phạt hành vi Đốt pháo nổ trái phép đêm Giao thừa",
    "source_type": "law",
    "chunk_preview": "Đốt pháo nổ trái phép bị phạt tiền từ 5.000.000đ đến 10.000.000đ và tịch thu tang vật. Nếu đốt pháo gây ảnh hưởng nghiêm trọng đến ANTT sẽ b...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_071",
    "source_title": "Chế tài xử lý hành vi Mua bán, Vận chuyển, Tàng trữ Pháo nổ nhập lậu",
    "source_type": "law",
    "chunk_preview": "Pháo nổ là hàng cấm. Hành vi tàng trữ, vận chuyển từ 06 kg pháo nổ trở lên bị khởi tố hình sự (phạt tù từ 01 năm đến 05 năm). Mua bán từ 40k...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_072",
    "source_title": "Chính sách Vận động, Tiếp nhận và Miễn trách nhiệm khi Giao nộp Vũ khí, Pháo",
    "source_type": "law",
    "chunk_preview": "Người dân tự giác mang súng tự chế, dao kiếm, đạn dược, pháo nổ đến giao nộp tại Trụ sở Công an xã Đức Hợp được MIỄN HOÀN TOÀN trách nhiệm x...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_073",
    "source_title": "Quy định Quản lý Dao có tính sát thương cao theo Luật năm 2024",
    "source_type": "law",
    "chunk_preview": "Dao có chiều dài lưỡi từ 20cm trở lên có mũi nhọn hoặc sắc bén được quản lý chặt chẽ. Khi sử dụng vào mục đích lao động sản xuất thì hợp phá...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_074",
    "source_title": "Quy định Quản lý và Sử dụng Công cụ hỗ trợ (Bình xịt cay, Dùi cui điện)",
    "source_type": "law",
    "chunk_preview": "Công cụ hỗ trợ chỉ được trang bị cho các lực lượng chuyên trách được cấp phép (Công an, Quân đội, Lực lượng bảo vệ ANTT cơ sở...). Cá nhân t...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_075",
    "source_title": "Thủ tục Cấp giấy phép Vận chuyển Pháo hoa Z121 phục vụ sự kiện",
    "source_type": "law",
    "chunk_preview": "Doanh nghiệp, tổ chức vận chuyển pháo hoa số lượng lớn phục vụ lễ hội phải có Giấy phép vận chuyển do cơ quan Công an có thẩm quyền cấp. Xe ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_076",
    "source_title": "Luật Lực lượng tham gia bảo vệ an ninh, trật tự ở cơ sở số 30/2023/QH15",
    "source_type": "law",
    "chunk_preview": "Luật kiện toàn, hợp nhất 3 lực lượng: Bảo vệ dân phố, Công an xã bán chuyên trách và Đội trưởng, Đội phó Dân phòng thành một lực lượng thống...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_077",
    "source_title": "6 Nhiệm vụ nòng cốt của Tổ bảo vệ ANTT tại thôn Nho Lâm và các thôn xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "1-Nắm tình hình ANTT; 2-Xây dựng phong trào toàn dân bảo vệ ANTQ; 3-Phòng cháy, chữa cháy và CNCH; 4-Quản lý hành chính về trật tự xã hội; 5...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_078",
    "source_title": "Cơ cấu tổ chức của Tổ bảo vệ ANTT tại cơ sở thôn",
    "source_type": "law",
    "chunk_preview": "Mỗi thôn thuộc xã Đức Hợp (thôn Nho Lâm,...) thành lập 01 Tổ bảo vệ ANTT gồm: 01 Tổ trưởng, 01 Tổ phó và các Tổ viên do Chủ tịch UBND xã Đức...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_079",
    "source_title": "Tiêu chuẩn, điều kiện tuyển chọn tham gia Lực lượng bảo vệ ANTT cơ sở",
    "source_type": "law",
    "chunk_preview": "Công dân từ đủ 18 tuổi đến 70 tuổi (trường hợp trên 70 tuổi có sức khỏe tốt có thể được xem xét), có lý lịch trong sạch, có bằng tốt nghiệp ...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_080",
    "source_title": "Chế độ phụ cấp, trang phục và bảo hiểm của Lực lượng bảo vệ ANTT cơ sở",
    "source_type": "law",
    "chunk_preview": "Lực lượng được hưởng mức hỗ trợ tiền hàng tháng theo quy định HĐND tỉnh Hưng Yên; được hỗ trợ tiền đóng BHXH tự nguyện, BHYT; được cấp phát ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_081",
    "source_title": "Quy chế phối hợp Tuần tra đêm phòng chống tội phạm giữa Công an xã và Tổ ANTT",
    "source_type": "law",
    "chunk_preview": "Tổ bảo vệ ANTT thôn phối hợp Cán bộ Công an xã tuần tra khép kín các tuyến đường đê, ngõ xóm, khu vực giáp ranh từ 22h đêm đến 5h sáng nhằm ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_082",
    "source_title": "Vai trò của Lực lượng ANTT cơ sở trong PCCC và Phòng chống thiên tai, bão lũ",
    "source_type": "law",
    "chunk_preview": "Là lực lượng tại chỗ có mặt đầu tiên khi xảy ra cháy nổ, bão lũ tràn đê; hướng dẫn người già trẻ nhỏ sơ tán, vận hành Điểm chữa cháy công cộ...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_083",
    "source_title": "Hỗ trợ Công an xã nắm tình hình dư luận và Giải quyết mâu thuẫn xóm làng",
    "source_type": "law",
    "chunk_preview": "Tổ viên ANTT sinh sống gắn bó với bà con thôn Nho Lâm, kịp thời phát hiện các xích mích đất đai, tranh chấp lối đi, mâu thuẫn gia đình để hò...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_084",
    "source_title": "Vận động, cảm hóa, giáo dục người lầm lỗi và thanh thiếu niên hư tại cơ sở",
    "source_type": "law",
    "chunk_preview": "Phối hợp với gia đình, dòng họ, đoàn thanh niên gặp gỡ động viên người mãn hạn tù, thanh niên lêu lổng có nguy cơ vi phạm pháp luật; giới th...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_085",
    "source_title": "Phong trào Toàn dân bảo vệ An ninh Tổ quốc và Biểu dương gương người tốt việc tốt",
    "source_type": "law",
    "chunk_preview": "Phát động phong trào nhân dân tham gia tố giác tội phạm, lắp đặt camera an ninh gia đình hướng ra đường làng; khen thưởng người dân dũng cảm...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_086",
    "source_title": "Luật Phòng, chống bạo lực gia đình năm 2022: 16 Hành vi bạo lực bị nghiêm cấm",
    "source_type": "law",
    "chunk_preview": "Luật mở rộng nhận diện 16 hành vi bạo lực gồm: Bạo lực thể xác (đánh đập), bạo lực tinh thần (lăng mạ, sỉ nhục, cô lập), bạo lực kinh tế (ch...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_087",
    "source_title": "Quy trình Tiếp nhận tin báo Bạo lực gia đình tại Công an xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Khi nhận tin báo bạo lực gia đình qua số 02213.815.999 hoặc VNeID, Cán bộ Công an xã lập tức có mặt tại hiện trường trong thời gian nhanh nh...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_088",
    "source_title": "Biện pháp Cấm tiếp xúc theo quyết định của Chủ tịch UBND xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Chủ tịch UBND xã Đức Hợp ra quyết định Cấm tiếp xúc trong thời hạn không quá 03 ngày khi có đơn yêu cầu của nạn nhân bạo lực. Người có hành ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_089",
    "source_title": "Xử lý hành vi Bạo lực tinh thần, Lăng mạ, Chửi bới, Cô lập kinh tế trong gia đình",
    "source_type": "law",
    "chunk_preview": "Hành vi lăng mạ, chửi bới, xúc phạm danh dự nhân phẩm thành viên gia đình bị phạt tiền từ 5.000.000đ đến 10.000.000đ. Hành vi cấm đoán người...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_090",
    "source_title": "Chế tài xử phạt Đánh đập, Bạo hành thể xác vợ, chồng, con cái theo Nghị định 144",
    "source_type": "law",
    "chunk_preview": "Hành vi đánh đập, gây thương tích cho thành viên gia đình bị phạt tiền từ 5.000.000đ đến 10.000.000đ. Sử dụng hung khí nguy hiểm đánh đập ph...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_091",
    "source_title": "Vai trò của Hội Phụ nữ và Tổ hòa giải cơ sở trong phòng chống bạo lực",
    "source_type": "law",
    "chunk_preview": "Mô hình 'Địa chỉ tin cậy tại cộng đồng' tại xã Đức Hợp hỗ trợ nơi ăn chốn ở khẩn cấp cho phụ nữ, trẻ em bị bạo hành; các buổi hòa giải, tư v...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_092",
    "source_title": "Quy trình Bố trí Nơi tạm lánh an toàn cho Nạn nhân bạo lực gia đình",
    "source_type": "law",
    "chunk_preview": "Quy định UBND xã Đức Hợp phối hợp Trạm Y tế, nhà văn hóa thôn hoặc gia đình uy tín bố trí nơi tạm lánh, hỗ trợ nhu yếu phẩm thiết yếu, giữ b...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_093",
    "source_title": "Phòng chống Xâm hại tình dục trẻ em và Đường dây nóng Bảo vệ trẻ em 111",
    "source_type": "law",
    "chunk_preview": "Giáo dục quy tắc 5 ngón tay, quy tắc đồ lót phòng chống xâm hại cho học sinh; khuyến cáo phụ huynh quan tâm các biểu hiện tâm lý bất thường ...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_094",
    "source_title": "Trách nhiệm Phụng dưỡng cha mẹ già và Xử lý hành vi Ngược đãi người cao tuổi",
    "source_type": "law",
    "chunk_preview": "Con cái có nghĩa vụ chăm sóc, phụng dưỡng cha mẹ khi về già. Hành vi ngược đãi, bỏ đói, không chăm sóc, chửi bới cha mẹ già yếu bị phạt tiền...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_095",
    "source_title": "Kỹ năng Hòa giải mâu thuẫn gia đình: Giữ gìn hạnh phúc xóm làng",
    "source_type": "law",
    "chunk_preview": "Phương pháp lắng nghe hai bên, phân tích đúng sai trên cơ sở pháp luật và đạo lý; tìm kiếm tiếng nói chung để hàn gắn rạn nứt hôn nhân, gìn ...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_096",
    "source_title": "Đề án 06/CP của Chính phủ: Mục tiêu số hóa và Tiện ích cho nhân dân xã Đức Hợp",
    "source_type": "law",
    "chunk_preview": "Đề án phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia giai đoạn 2022 - 2025. Người dân x...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_097",
    "source_title": "Danh mục 25 Dịch vụ công thiết yếu toàn trình thực hiện trực tuyến",
    "source_type": "procedure",
    "chunk_preview": "Bao gồm các thủ tục cốt lõi: Đăng ký thường trú, tạm trú, khai báo tạm vắng, cấp thẻ Căn cước, đăng ký xe máy cấp xã, nộp phạt giao thông, c...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_098",
    "source_title": "Thủ tục Liên thông điện tử: Khai sinh - Đăng ký thường trú - Cấp thẻ BHYT",
    "source_type": "procedure",
    "chunk_preview": "Chỉ cần 1 lần nộp hồ sơ trực tuyến duy nhất trên Cổng DVC Quốc gia, giải quyết đồng thời 3 thủ tục cho trẻ sơ sinh; nhận Giấy khai sinh, cập...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_099",
    "source_title": "Thủ tục Liên thông điện tử: Khai tử - Xóa thường trú - Trợ cấp mai táng",
    "source_type": "procedure",
    "chunk_preview": "Giải quyết đồng thời thủ tục Đăng ký khai tử tại Tư pháp xã, Xóa đăng ký thường trú tại Công an xã Đức Hợp và Giải quyết chế độ trợ cấp mai ...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_100",
    "source_title": "Đăng ký tạm trú, Thông báo lưu trú qua VNeID phục vụ công nhân, sinh viên",
    "source_type": "procedure",
    "chunk_preview": "Hướng dẫn người lao động, công nhân làm việc tại các nhà máy, cụm công nghiệp xung quanh xã Đức Hợp tự khai báo tạm trú và thông báo lưu trú...",
    "created_at": "207/09/2026"
  },
  {
    "id": "kb_101",
    "source_title": "Quy trình Tiếp nhận và Phân loại Tố giác, Tin báo về tội phạm tại Công an xã",
    "source_type": "law",
    "chunk_preview": "Công an xã Đức Hợp có trách nhiệm tiếp nhận, phân loại và tiến hành kiểm tra, xác minh sơ bộ tố giác, tin báo tội phạm trong thời hạn không ...",
    "created_at": "203/09/2026"
  },
  {
    "id": "kb_102",
    "source_title": "Chế độ Bảo vệ tính mạng, sức khỏe, tài sản của Người tố giác tội phạm",
    "source_type": "law",
    "chunk_preview": "Người dân tố giác tội phạm được giữ bí mật danh tính tuyệt đối; khi bị đe dọa trả thù được cơ quan Công an áp dụng ngay các biện pháp bảo vệ...",
    "created_at": "204/09/2026"
  },
  {
    "id": "kb_103",
    "source_title": "Tính năng Kiến nghị, Phản ánh về ANTT trực tiếp trên ứng dụng VNeID",
    "source_type": "procedure",
    "chunk_preview": "Bà con nhân dân mở VNeID -> 'Dịch vụ khác' -> 'Kiến nghị, phản ánh về ANTT' để gửi tin báo trộm cắp, cờ bạc, ma túy, lừa đảo mạng kèm hình ả...",
    "created_at": "205/09/2026"
  },
  {
    "id": "kb_104",
    "source_title": "Lịch trực ban, Tiếp công dân và Hotline 24/24 Công an xã Đức Hợp",
    "source_type": "faq",
    "chunk_preview": "Trực ban 24/24h tiếp nhận tin báo ANTT và sự cố khẩn cấp: 02213.815.999. Địa chỉ Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên. Giờ tiếp d...",
    "created_at": "206/09/2026"
  },
  {
    "id": "kb_105",
    "source_title": "Cẩm nang An toàn số cho Người cao tuổi và Phụ nữ nông thôn xã Đức Hợp",
    "source_type": "anti_scam",
    "chunk_preview": "Hướng dẫn cô bác lớn tuổi, người già ở làng quê: Nhờ con cháu cài đặt sinh trắc học ngân hàng; tuyệt đối không nghe điện thoại số lạ tự xưng...",
    "created_at": "207/09/2026"
  }
];

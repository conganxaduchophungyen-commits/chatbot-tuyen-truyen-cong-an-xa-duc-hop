import { Procedure } from './api';

export const FULL_30_PROCEDURES: Procedure[] = [
  {
    "id": "proc_kich_hoat_vneid_muc1",
    "category_id": "cu_tru",
    "code": "VNEID-TK-01",
    "title": "Đăng ký và kích hoạt tài khoản định danh điện tử Mức độ 1 trên ứng dụng VNeID",
    "target_audience": "Công dân Việt Nam đã được cấp thẻ Căn cước / CCCD gắn chip có điện thoại thông minh chính chủ",
    "competent_authority": "Trung tâm Dữ liệu quốc gia về dân cư (C06 - Bộ Công an)",
    "execution_method": "Trực tuyến toàn trình 100% trên thiết bị di động thông qua ứng dụng VNeID",
    "required_documents": [
      "Thẻ Căn cước / CCCD gắn chip còn giá trị sử dụng.",
      "Thiết bị di động thông minh có camera trước hoạt động tốt (hỗ trợ đọc chip NFC nếu có).",
      "Số điện thoại thuê bao di động đăng ký thông tin chính chủ."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo dữ liệu liên lạc ban đầu",
        "desc": "Tải ứng dụng VNeID từ App Store/Google Play -> Nhấn 'Đăng ký' -> Nhập số định danh cá nhân (12 số) và số điện thoại chính chủ -> Nhập mã OTP 6 số gửi về SMS để xác thực."
      },
      {
        "step": 2,
        "title": "Thu thập dữ liệu thẻ căn cước",
        "desc": "Dùng camera quét mã QR trên bề mặt thẻ CCCD gắn chip hoặc áp sát thẻ vào lưng máy để đọc dữ liệu qua chip NFC giúp bóc tách thông tin tự động."
      },
      {
        "step": 3,
        "title": "Xác thực sinh trắc học khuôn mặt",
        "desc": "Chụp ảnh chân dung động theo hiệu lệnh hệ thống (nhìn thẳng, quay trái, quay phải, chớp mắt) để đối soát khớp đúng với ảnh gốc trên CSDL Căn cước."
      },
      {
        "step": 4,
        "title": "Thiết lập mật khẩu quản trị",
        "desc": "Sau khi đối soát thành công, thiết lập mật khẩu truy cập ứng dụng từ 8 đến 20 ký tự (chữ hoa, chữ thường, chữ số và ký tự đặc biệt) để hoàn tất kích hoạt Mức 1."
      }
    ],
    "processing_time": "Hệ thống đối soát tự động từ 10 đến 15 phút",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2350,
    "forms": [
      {
        "id": "f_vneid_m1",
        "form_code": "Định danh Mức 1",
        "name": "Phiếu đăng ký tài khoản định danh điện tử Mức độ 1 trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng di động VNeID",
      "portal_name": "Giao diện 'Đăng ký tài khoản' trên màn hình khởi động VNeID",
      "prerequisites": [
        "Thẻ CCCD gắn chip / Căn cước 12 số còn hiệu lực.",
        "Điện thoại thông minh có kết nối mạng Internet, camera rõ nét.",
        "Số điện thoại nhận mã OTP đã đăng ký chính chủ tên người làm tài khoản."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Đăng ký thông tin ban đầu",
          "action": "Mở ứng dụng VNeID -> Chọn 'Đăng ký' -> Điền số định danh 12 số và số điện thoại -> Nhập mã OTP gồm 6 chữ số gửi qua SMS."
        },
        {
          "step": 2,
          "title": "Quét mã QR / Đọc chip NFC căn cước",
          "action": "Đưa camera quét mã QR ở góc phải mặt trước thẻ CCCD hoặc áp thẻ vào mặt lưng điện thoại để đọc chip qua kết nối NFC."
        },
        {
          "step": 3,
          "title": "Xác thực khuôn mặt cử động",
          "action": "Đặt khuôn mặt vào khung tròn, làm theo hiệu lệnh: giữ thẳng, quay trái từ từ, quay phải, chớp mắt ở nơi đủ ánh sáng."
        },
        {
          "step": 4,
          "title": "Tạo mật khẩu và đăng nhập",
          "action": "Nhập mật khẩu mới từ 8-20 ký tự gồm hoa, thường, số, ký tự đặc biệt (VD: DucHop@2026) -> Hoàn tất kích hoạt tài khoản Mức 1."
        }
      ],
      "result_format": "Thông báo kích hoạt tài khoản Mức độ 1 thành công trên màn hình và gửi SMS xác nhận.",
      "tips": [
        "Nên thực hiện nhận diện khuôn mặt ở nơi có ánh sáng tự nhiên đều, không đứng ngược sáng hoặc đội mũ, đeo kính râm.",
        "Tài khoản Mức 1 dùng tra cứu thông tin cá nhân và nộp các dịch vụ công cơ bản; để tích hợp GPLX, Đăng ký xe, BHYT cần nâng cấp lên Mức 2 tại Công an xã."
      ]
    }
  },
  {
    "id": "proc_kich_hoat_vneid_muc2",
    "category_id": "cu_tru",
    "code": "VNEID-TK-02",
    "title": "Kích hoạt tài khoản định danh điện tử Mức độ 2 & Thiết lập mã Passcode trên VNeID",
    "target_audience": "Công dân đã hoàn thành thu nhận dấu vân tay và hồ sơ tại cơ quan Công an và nhận được SMS thông báo kích hoạt",
    "competent_authority": "Công an xã Đức Hợp / Trung tâm Dữ liệu quốc gia về dân cư (Bộ Công an)",
    "execution_method": "Sau khi làm thủ tục trực tiếp tại Công an -> Tự thao tác kích hoạt bảo mật trên ứng dụng VNeID",
    "required_documents": [
      "Tin nhắn SMS từ nguồn 'VNeID' thông báo hồ sơ định danh điện tử Mức độ 2 đã được phê duyệt.",
      "Thiết bị di động có cài đặt ứng dụng VNeID bản cập nhật mới nhất.",
      "Mã số định danh cá nhân 12 số."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập tính năng kích hoạt",
        "desc": "Mở ứng dụng VNeID -> Chọn chức năng 'Kích hoạt tài khoản định danh điện tử' trên màn hình ban đầu."
      },
      {
        "step": 2,
        "title": "Xác thực danh tính",
        "desc": "Điền chính xác số định danh cá nhân 12 số và số điện thoại đã đăng ký tại Công an -> Nhấn 'Gửi yêu cầu' -> Nhập mã OTP 6 số từ SMS."
      },
      {
        "step": 3,
        "title": "Thiết lập mật khẩu đăng nhập",
        "desc": "Tạo mật khẩu cá nhân có độ dài từ 8 đến 20 ký tự (chữ hoa, chữ thường, số và ký tự đặc biệt) bảo đảm an toàn thông tin."
      },
      {
        "step": 4,
        "title": "Thiết lập mã bảo mật Passcode (2FA)",
        "desc": "Cấu hình mã Passcode gồm 6 chữ số (từ 0 đến 9). Mã Passcode đóng vai trò là lớp bảo mật thứ 2 (2FA), bắt buộc nhập khi xem thông tin giấy tờ hoặc ký duyệt gửi hồ sơ DVC."
      },
      {
        "step": 5,
        "title": "Cấu hình 2 câu hỏi bảo mật",
        "desc": "Chọn và trả lời 2 câu hỏi bảo mật độc lập để phục vụ khôi phục quyền truy cập khi quên mật khẩu hoặc thay đổi thiết bị phần cứng."
      }
    ],
    "processing_time": "Kích hoạt hoàn tất tức thì trong 3 đến 5 phút",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 3120,
    "forms": [
      {
        "id": "f_vneid_m2",
        "form_code": "Định danh Mức 2",
        "name": "Phiếu kích hoạt tài khoản định danh điện tử Mức độ 2",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng di động VNeID (Mức 2)",
      "portal_name": "Chức năng 'Kích hoạt tài khoản định danh điện tử'",
      "prerequisites": [
        "Đã đến trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc Công an huyện thu nhận vân tay, chụp ảnh.",
        "Đã nhận tin nhắn SMS thông báo phê duyệt từ VNeID.",
        "Thiết bị di động có kết nối Internet."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn kích hoạt tài khoản",
          "action": "Mở VNeID -> Nhấn 'Kích hoạt tài khoản định danh điện tử' -> Điền số định danh và số điện thoại."
        },
        {
          "step": 2,
          "title": "Nhập OTP xác thực",
          "action": "Nhập mã OTP 6 số được gửi về điện thoại trong thời gian đếm ngược quy định."
        },
        {
          "step": 3,
          "title": "Cài đặt mật khẩu đăng nhập",
          "action": "Nhập mật khẩu mới từ 8-20 ký tự (hoa, thường, số, ký tự đặc biệt) -> Xác nhận lại mật khẩu."
        },
        {
          "step": 4,
          "title": "Cài đặt mã Passcode 6 số",
          "action": "Nhập mã Passcode gồm 6 số tự chọn (không nên đặt ngày sinh hoặc dãy số liên tiếp 123456)."
        },
        {
          "step": 5,
          "title": "Thiết lập câu hỏi bảo mật",
          "action": "Chọn 2 câu hỏi bảo mật và điền câu trả lời chuẩn xác -> Bấm 'Xác nhận' để hoàn tất kích hoạt Mức 2."
        }
      ],
      "result_format": "Màn hình VNeID thông báo 'Kích hoạt tài khoản Mức độ 2 thành công', kích hoạt toàn bộ tính năng Ví giấy tờ và nộp DVC.",
      "tips": [
        "Mã Passcode là mã bảo mật tối quan trọng, tuyệt đối KHÔNG cung cấp mã Passcode và OTP cho bất kỳ ai kể cả người tự xưng là Công an.",
        "Sau khi kích hoạt, công dân có thể bật tính năng đăng nhập bằng Vân tay hoặc Face ID trong mục Cài đặt để thao tác nhanh hơn."
      ]
    }
  },
  {
    "id": "proc_thong_bao_luu_tru",
    "category_id": "cu_tru",
    "code": "TTHC-CT-01",
    "title": "Thủ tục Thông báo lưu trú trực tuyến qua ứng dụng VNeID",
    "target_audience": "Chủ hộ gia đình, chủ nhà trọ, cơ sở lưu trú du lịch, ký túc xá, bệnh viện có công dân đến lưu trú tạm thời",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức độ 2 (trực tiếp đến hệ thống máy chủ Công an xã)",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2 của người thông báo (chủ nhà/đại diện cơ sở).",
      "Số định danh cá nhân / Thẻ CCCD hoặc mã QR chia sẻ trên VNeID của người đến lưu trú.",
      "Mốc thời gian lưu trú cụ thể (thời điểm bắt đầu, thời điểm kết thúc) và lý do lưu trú (thăm thân, công tác, du lịch,...)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập mục Thông báo lưu trú",
        "desc": "Đăng nhập VNeID mức 2 -> Chọn mục 'Thủ tục hành chính' -> Chọn dịch vụ 'Thông báo lưu trú'."
      },
      {
        "step": 2,
        "title": "Chọn cơ quan Công an tiếp nhận",
        "desc": "Chọn cơ sở lưu trú hoặc bấm 'Tạo mới yêu cầu' -> Chọn Công an tỉnh Hưng Yên -> Công an huyện Kim Động -> Công an xã Đức Hợp và loại hình cơ sở lưu trú."
      },
      {
        "step": 3,
        "title": "Nạp thông tin khách lưu trú",
        "desc": "Nhấn 'Thêm người lưu trú'. Nạp qua 3 phương thức: Quét mã QR trên thẻ CCCD vật lý; Quét mã QR chia sẻ trên VNeID của khách; hoặc Nhập thủ công số định danh, họ tên, ngày sinh."
      },
      {
        "step": 4,
        "title": "Thiết lập thời gian và lý do",
        "desc": "Điền thời gian bắt đầu và dự kiến kết thúc lưu trú, chọn lý do lưu trú (du lịch, công tác, thăm thân,...) -> Bấm 'Lưu' (có thể thêm đồng thời nhiều người)."
      },
      {
        "step": 5,
        "title": "Cam đoan trách nhiệm và gửi hồ sơ",
        "desc": "Kiểm tra danh sách người khai báo -> Tích cam đoan trách nhiệm pháp lý -> Bấm 'Gửi yêu cầu' để chuyển điện tử đến Cảnh sát khu vực Công an xã Đức Hợp."
      }
    ],
    "processing_time": "Tiếp nhận và cập nhật ngay lập tức vào phần mềm CSDLQG về dân cư",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1890,
    "forms": [
      {
        "id": "f_tblt_01",
        "form_code": "Thông báo lưu trú",
        "name": "Phiếu thông báo lưu trú điện tử trên ứng dụng VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Thông báo lưu trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2 của chủ nhà hoặc người được ủy quyền.",
        "Thông tin thẻ CCCD/Căn cước của người đến lưu trú.",
        "Thực hiện trước 23 giờ của ngày đến lưu trú (nếu đến sau 23h thì thông báo trước 8h sáng hôm sau)."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Đăng nhập và chọn Thông báo lưu trú",
          "action": "Đăng nhập VNeID Mức 2 -> Vào 'Thủ tục hành chính' -> Chọn 'Thông báo lưu trú'."
        },
        {
          "step": 2,
          "title": "Chọn địa bàn Công an xã Đức Hợp",
          "action": "Chọn Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp -> Chọn cơ sở lưu trú hoặc nhà ở gia đình."
        },
        {
          "step": 3,
          "title": "Quét mã QR thẻ Căn cước của khách",
          "action": "Bấm 'Thêm người lưu trú' -> Chọn quét camera vào mã QR thẻ CCCD của khách (hệ thống tự điền dữ liệu sau 3 giây)."
        },
        {
          "step": 4,
          "title": "Điền thời gian và gửi thông báo",
          "action": "Nhập ngày đến, ngày đi, lý do lưu trú -> Nhấn 'Lưu' -> Kiểm tra và bấm 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Thông báo nộp thành công kèm mã hồ sơ điện tử trong mục Lịch sử yêu cầu trên VNeID.",
      "tips": [
        "Cơ sở kinh doanh nhà trọ có thể tạo sẵn Cơ sở lưu trú cố định trên VNeID, các lần sau chỉ cần quét QR khách là xong.",
        "Việc thông báo lưu trú qua VNeID giúp bà con không phải trực tiếp đến trụ sở Công an xã vào ban đêm."
      ]
    }
  },
  {
    "id": "proc_dang_ky_thuong_tru",
    "category_id": "cu_tru",
    "code": "TTHC-CT-02",
    "title": "Thủ tục Đăng ký thường trú trực tuyến qua ứng dụng VNeID",
    "target_audience": "Công dân có chỗ ở hợp pháp tại xã Đức Hợp hoặc được chủ hộ, chủ sở hữu chỗ ở đồng ý cho nhập hộ",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến toàn trình qua ứng dụng VNeID Mức 2",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú điện tử (kê khai trực tiếp trên ứng dụng VNeID).",
      "Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán nhà đất, hoặc Hợp đồng thuê nhà có chữ ký hai bên).",
      "Xác nhận của chủ hộ/chủ sở hữu: Ký số qua tài khoản VNeID Mức 2 của chủ hộ hoặc tải lên bản giấy Mẫu CT01 có chữ ký bút mực của chủ hộ.",
      "Giấy tờ chứng minh quan hệ nhân thân (nếu chưa có trên CSDLQG về dân cư)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập và xác thực bảo mật",
        "desc": "Tại màn hình 'Thủ tục hành chính', chọn 'Đăng ký thường trú' -> Nhập mã Passcode 6 chữ số hoặc xác thực sinh trắc học để mở giao diện."
      },
      {
        "step": 2,
        "title": "Phân loại đối tượng và hình thức",
        "desc": "Chọn đối tượng: 'Bản thân' hoặc 'Khai hộ'. Chọn hình thức: 'Lập hộ mới' (đứng tên sở hữu độc lập) hoặc 'Nhập vào hộ đã có sẵn' (ở cùng gia đình, nhà trọ)."
      },
      {
        "step": 3,
        "title": "Khai báo địa bàn và người đi kèm",
        "desc": "Chọn Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp -> Điền số nhà, thôn xóm. Nếu có người thân chuyển cùng, bấm 'Thêm thành viên thay đổi cùng' và điền số định danh."
      },
      {
        "step": 4,
        "title": "Cơ chế xác nhận của chủ hộ",
        "desc": "Nếu chủ hộ có VNeID Mức 2: Chọn xác nhận qua VNeID (hệ thống gửi yêu cầu vào máy chủ hộ, chủ hộ ký duyệt điện tử). Nếu chưa có: Tải lên ảnh quét Mẫu CT01 có chữ ký bút mực của chủ hộ."
      },
      {
        "step": 5,
        "title": "Đính kèm tài liệu và nộp lệ phí",
        "desc": "Tải lên tệp ảnh/PDF giấy tờ chứng minh chỗ ở hợp pháp -> Kiểm tra bản tóm lược hồ sơ -> Thanh toán lệ phí trực tuyến 10.000 VNĐ -> Bấm 'Gửi yêu cầu'."
      }
    ],
    "processing_time": "Không quá 07 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
    "fee": "10.000 VNĐ (nộp trực tuyến) / 20.000 VNĐ (nộp trực tiếp)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 2840,
    "forms": [
      {
        "id": "f_ct01_tt",
        "form_code": "Mẫu CT01",
        "name": "Tờ khai thay đổi thông tin cư trú điện tử trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Đăng ký thường trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 đã kích hoạt thành công.",
        "Có chỗ ở hợp pháp tại xã Đức Hợp.",
        "Chủ hộ và chủ sở hữu chỗ ở đã đồng ý bằng tài khoản VNeID Mức 2 hoặc ký trên bản giấy CT01."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào dịch vụ Đăng ký thường trú",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Đăng ký thường trú' -> Nhập Passcode."
        },
        {
          "step": 2,
          "title": "Khai báo nơi đăng ký thường trú",
          "action": "Chọn Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp -> Chọn thôn xóm cụ thể -> Chọn Lập hộ mới hoặc Nhập vào hộ có sẵn."
        },
        {
          "step": 3,
          "title": "Lấy xác nhận của chủ hộ",
          "action": "Nhập số định danh chủ hộ -> Chọn 'Xác nhận qua VNeID' (chủ hộ mở app bấm Đồng ý) hoặc chụp ảnh CT01 đã ký tải lên."
        },
        {
          "step": 4,
          "title": "Đính kèm giấy tờ chỗ ở & Thanh toán",
          "action": "Chụp ảnh Sổ đỏ/Hợp đồng nhà đất tải lên -> Thanh toán 10.000đ qua ví/ngân hàng -> Nhấn 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Thông báo kết quả đăng ký thường trú điện tử và tự động cập nhật thông tin thường trú trong Ví giấy tờ VNeID.",
      "tips": [
        "Chủ hộ nên kích hoạt sẵn VNeID Mức 2 để nhận thông báo và ký duyệt điện tử ngay trên app chỉ mất 1 phút, không cần in giấy CT01.",
        "Ảnh chụp Sổ đỏ hoặc hợp đồng mua bán nhà đất phải rõ góc cạnh, không bị mờ nhòe chữ để cán bộ duyệt nhanh."
      ]
    }
  },
  {
    "id": "proc_dang_ky_tam_tru",
    "category_id": "cu_tru",
    "code": "TTHC-CT-03",
    "title": "Thủ tục Đăng ký tạm trú trực tuyến qua ứng dụng VNeID",
    "target_audience": "Công dân đến sinh sống tại chỗ ở hợp pháp ngoài phạm vi đơn vị hành chính cấp xã nơi thường trú từ 30 ngày trở lên",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức độ 2",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú điện tử trên ứng dụng VNeID.",
      "Giấy tờ chứng minh chỗ ở hợp pháp (Hợp đồng thuê nhà trọ, mượn nhà hoặc văn bản đồng ý của chủ sở hữu chỗ ở).",
      "Xác nhận của chủ hộ/chủ nhà trọ bằng ký số VNeID Mức 2 hoặc chữ ký bút mực trên bản giấy Mẫu CT01."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo hồ sơ tạm trú",
        "desc": "Mở VNeID -> 'Thủ tục hành chính' -> Chọn 'Đăng ký tạm trú' -> Nhập mã Passcode."
      },
      {
        "step": 2,
        "title": "Chọn địa bàn và người đi cùng",
        "desc": "Chọn nơi tạm trú: Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp -> Điền địa chỉ số nhà/thôn xóm. Bổ sung thành viên đi cùng nếu có."
      },
      {
        "step": 3,
        "title": "Xác nhận của chủ nhà trọ/chủ hộ",
        "desc": "Nhập số định danh chủ nhà để gửi lệnh xác nhận điện tử qua VNeID Mức 2, hoặc tải lên ảnh chụp bản giấy CT01 có chữ ký chủ nhà."
      },
      {
        "step": 4,
        "title": "Tải chứng từ thuê nhà & Nộp lệ phí",
        "desc": "Tải lên ảnh chụp Hợp đồng thuê nhà/giấy tờ chỗ ở -> Thanh toán lệ phí trực tuyến 7.000 VNĐ -> Gửi hồ sơ đến Công an xã Đức Hợp."
      }
    ],
    "processing_time": "Không quá 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
    "fee": "7.000 VNĐ (nộp trực tuyến) / 15.000 VNĐ (nộp trực tiếp)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 2150,
    "forms": [
      {
        "id": "f_ct01_ttam",
        "form_code": "Mẫu CT01",
        "name": "Tờ khai thay đổi thông tin cư trú (Tạm trú) điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Đăng ký tạm trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Đến sinh sống tại xã Đức Hợp từ 30 ngày trở lên.",
        "Hợp đồng thuê nhà trọ hoặc văn bản đồng ý cho ở nhờ của chủ hộ."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn Đăng ký tạm trú",
          "action": "Đăng nhập VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Đăng ký tạm trú' -> Nhập Passcode."
        },
        {
          "step": 2,
          "title": "Điền thông tin nơi tạm trú",
          "action": "Chọn Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp -> Điền thôn xóm nơi thuê trọ/ở nhờ."
        },
        {
          "step": 3,
          "title": "Xác nhận của chủ nhà trọ",
          "action": "Chọn xác nhận qua tài khoản VNeID của chủ nhà trọ hoặc đính kèm ảnh mẫu CT01 có chữ ký chủ nhà."
        },
        {
          "step": 4,
          "title": "Đính kèm Hợp đồng thuê trọ & Gửi hồ sơ",
          "action": "Chụp ảnh Hợp đồng thuê nhà trọ tải lên -> Thanh toán phí 7.000đ trực tuyến -> Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Thông báo tiếp nhận và cập nhật thời hạn tạm trú điện tử vào mục Ví giấy tờ trên VNeID trong 3 ngày làm việc.",
      "tips": [
        "Thời hạn tạm trú tối đa là 02 năm; trước khi hết hạn 15 ngày, công dân nên làm thủ tục Gia hạn tạm trú trực tuyến để không bị gián đoạn quyền lợi."
      ]
    }
  },
  {
    "id": "proc_gia_han_tam_tru",
    "category_id": "cu_tru",
    "code": "TTHC-CT-04",
    "title": "Thủ tục Gia hạn tạm trú trực tuyến qua ứng dụng VNeID",
    "target_audience": "Công dân đã đăng ký tạm trú tại xã Đức Hợp, khi hết thời hạn tạm trú có nhu cầu tiếp tục sinh sống tại đó",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức độ 2",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú điện tử (Mẫu CT01 trên VNeID).",
      "Giấy tờ chứng minh tiếp tục có chỗ ở hợp pháp (Hợp đồng thuê nhà trọ gia hạn, giấy xác nhận của chủ nhà).",
      "Xác nhận đồng ý tiếp tục cho thuê/cho ở nhờ của chủ hộ qua VNeID hoặc văn bản ký tên."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập tính năng Gia hạn tạm trú",
        "desc": "Đăng nhập VNeID Mức 2 -> 'Thủ tục hành chính' -> Chọn 'Gia hạn tạm trú' (nên nộp trước khi hết hạn 15 ngày)."
      },
      {
        "step": 2,
        "title": "Kiểm tra thông tin tạm trú hiện tại",
        "desc": "Hệ thống tự động hiển thị dữ liệu đăng ký tạm trú hiện có tại Công an xã Đức Hợp -> Kiểm tra thời hạn hết hạn."
      },
      {
        "step": 3,
        "title": "Cập nhật thời hạn mới & Xác nhận chủ nhà",
        "desc": "Kê khai thời hạn gia hạn mới (tối đa 02 năm) -> Chọn hình thức xác nhận của chủ nhà trọ qua VNeID Mức 2."
      },
      {
        "step": 4,
        "title": "Đính kèm phụ lục hợp đồng & Nộp hồ sơ",
        "desc": "Tải lên ảnh chụp hợp đồng thuê nhà mới/phụ lục gia hạn -> Nộp lệ phí trực tuyến 7.000 VNĐ -> Bấm Gửi yêu cầu."
      }
    ],
    "processing_time": "Không quá 03 ngày làm việc kể từ ngày nhận đủ hồ sơ",
    "fee": "7.000 VNĐ (nộp trực tuyến)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1240,
    "forms": [
      {
        "id": "f_ghtam_tru",
        "form_code": "Gia hạn tạm trú",
        "name": "Phiếu đề nghị gia hạn tạm trú điện tử trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Gia hạn tạm trú'",
      "prerequisites": [
        "Đang có đăng ký tạm trú hợp lệ tại xã Đức Hợp sắp hết hạn (trong vòng 15 ngày trước khi hết hạn).",
        "Tài khoản VNeID Mức 2.",
        "Tiếp tục được chủ nhà đồng ý cho thuê/ở nhờ."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Gia hạn tạm trú",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Gia hạn tạm trú'."
        },
        {
          "step": 2,
          "title": "Rà soát thông tin tạm trú cũ",
          "action": "Kiểm tra địa chỉ tạm trú tại xã Đức Hợp và nhập thời hạn tạm trú đề nghị gia hạn mới."
        },
        {
          "step": 3,
          "title": "Tải hồ sơ gia hạn và xác nhận chủ hộ",
          "action": "Chụp ảnh phụ lục hợp đồng thuê trọ tải lên -> Nhập số định danh chủ nhà để ký số qua VNeID."
        },
        {
          "step": 4,
          "title": "Thanh toán lệ phí",
          "action": "Thanh toán 7.000đ trực tuyến -> Bấm Gửi yêu cầu để Công an xã thẩm định."
        }
      ],
      "result_format": "Thông báo kết quả gia hạn tạm trú thành công, cập nhật hạn mới trong mục Thông tin cư trú trên VNeID.",
      "tips": [
        "Nếu để quá hạn tạm trú mà không làm thủ tục gia hạn, công dân sẽ bị xóa đăng ký tạm trú và phải làm lại thủ tục Đăng ký tạm trú từ đầu."
      ]
    }
  },
  {
    "id": "proc_khai_bao_tam_vang",
    "category_id": "cu_tru",
    "code": "TTHC-CT-05",
    "title": "Thủ tục Khai báo tạm vắng trực tuyến qua ứng dụng VNeID",
    "target_audience": "Công dân đi khỏi nơi cư trú theo quy định tại Điều 31 Luật Cư trú năm 2020 (bị can/bị cáo tại ngoại, người trong độ tuổi NVQS, người đi vắng từ 12 tháng liên tục,...)",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức 2 hoặc Cổng DVC Bộ Công an",
    "required_documents": [
      "Tờ khai báo tạm vắng điện tử trên VNeID.",
      "Thông tin nơi đến tạm vắng (địa chỉ cụ thể số nhà, xã/phường, tỉnh/thành phố).",
      "Văn bản đồng ý của cơ quan có thẩm quyền (nếu thuộc diện đang chấp hành án treo, tại ngoại, diện NVQS)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn Khai báo tạm vắng",
        "desc": "Đăng nhập VNeID Mức 2 -> 'Thủ tục hành chính' -> Chọn 'Khai báo tạm vắng'."
      },
      {
        "step": 2,
        "title": "Khai báo lý do và thời gian",
        "desc": "Điền lý do tạm vắng (học tập, làm việc, công tác xa,...), mốc thời gian tạm vắng (từ ngày... đến ngày...)."
      },
      {
        "step": 3,
        "title": "Điền địa chỉ nơi đến",
        "desc": "Nhập chi tiết địa chỉ nơi dự kiến đến sinh sống, làm việc trong thời gian tạm vắng."
      },
      {
        "step": 4,
        "title": "Kiểm tra và gửi hồ sơ",
        "desc": "Kiểm tra tính chính xác của dữ liệu -> Bấm 'Gửi yêu cầu' để Công an xã Đức Hợp ghi nhận vào hệ thống CSDLQG."
      }
    ],
    "processing_time": "Trong ngày làm việc (không quá 24 giờ kể từ khi tiếp nhận)",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 980,
    "forms": [
      {
        "id": "f_kbtam_vang",
        "form_code": "Khai báo tạm vắng",
        "name": "Phiếu khai báo tạm vắng điện tử trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Khai báo tạm vắng'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Nắm rõ thời gian và địa chỉ cụ thể nơi đến trong thời gian vắng mặt khỏi xã Đức Hợp."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Khai báo tạm vắng",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Khai báo tạm vắng'."
        },
        {
          "step": 2,
          "title": "Điền thông tin thời gian & Địa chỉ nơi đến",
          "action": "Nhập ngày bắt đầu vắng, ngày dự kiến về, địa chỉ nơi đến (tỉnh, huyện, xã, số nhà)."
        },
        {
          "step": 3,
          "title": "Gửi yêu cầu",
          "action": "Kiểm tra thông tin -> Bấm 'Gửi yêu cầu' để lưu vết trên CSDL dân cư."
        }
      ],
      "result_format": "Thông báo tiếp nhận thành công, lưu lại mã hồ sơ điện tử trong mục Lịch sử yêu cầu.",
      "tips": [
        "Người trong độ tuổi sẵn sàng nhập ngũ nếu đi khỏi nơi cư trú từ 03 tháng trở lên bắt buộc phải khai báo tạm vắng theo Luật Nghĩa vụ quân sự."
      ]
    }
  },
  {
    "id": "proc_dieu_chinh_thong_tin_cu_tru",
    "category_id": "cu_tru",
    "code": "TTHC-CT-06",
    "title": "Thủ tục Điều chỉnh thông tin về cư trú trong CSDL Quốc gia về dân cư trên VNeID",
    "target_audience": "Công dân có sự thay đổi về chủ hộ, quan hệ với chủ hộ, thay đổi thông tin hộ gia đình hoặc đổi tên địa giới hành chính",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức 2",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú điện tử (Mẫu CT01).",
      "Giấy tờ, tài liệu chứng minh sự thay đổi (Giấy khai sinh, Giấy chứng nhận kết hôn, Quyết định của cơ quan nhà nước, văn bản thỏa thuận của các thành viên trong hộ về việc cử chủ hộ mới).",
      "Ý kiến đồng ý của chủ hộ và các thành viên liên quan."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn Điều chỉnh thông tin cư trú",
        "desc": "Đăng nhập VNeID Mức 2 -> 'Thủ tục hành chính' -> Chọn 'Điều chỉnh thông tin cư trú' -> Nhập Passcode."
      },
      {
        "step": 2,
        "title": "Chọn nội dung điều chỉnh",
        "desc": "Lựa chọn phân loại: 'Thay đổi chủ hộ', 'Thay đổi quan hệ với chủ hộ', hoặc 'Thay đổi thông tin hộ tịch liên quan đến cư trú'."
      },
      {
        "step": 3,
        "title": "Khai báo thông tin mới & Đính kèm chứng cứ",
        "desc": "Nhập nội dung thông tin chuẩn xác đề nghị cập nhật -> Tải lên tệp ảnh rõ nét của văn bản thỏa thuận cử chủ hộ mới hoặc giấy tờ hộ tịch hợp pháp."
      },
      {
        "step": 4,
        "title": "Xác nhận và gửi yêu cầu",
        "desc": "Chủ hộ và thành viên xác nhận qua tài khoản VNeID -> Nhấn 'Gửi yêu cầu' để Công an xã Đức Hợp thẩm định và phê duyệt."
      }
    ],
    "processing_time": "Không quá 03 ngày làm việc kể từ ngày nhận đủ hồ sơ",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1420,
    "forms": [
      {
        "id": "f_ddtt_ct",
        "form_code": "Mẫu CT01",
        "name": "Tờ khai điều chỉnh thông tin về cư trú điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Điều chỉnh thông tin cư trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 của người khai báo.",
        "Có văn bản chứng minh sự thay đổi hợp pháp (Biên bản họp gia đình cử chủ hộ mới, Trích lục kết hôn/khai sinh,...)."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Điều chỉnh thông tin cư trú",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Điều chỉnh thông tin cư trú'."
        },
        {
          "step": 2,
          "title": "Chọn loại điều chỉnh & Nhập thông tin mới",
          "action": "Chọn 'Thay đổi chủ hộ' hoặc 'Thay đổi mối quan hệ' -> Điền số định danh của chủ hộ mới."
        },
        {
          "step": 3,
          "title": "Đính kèm tài liệu chứng minh",
          "action": "Chụp ảnh văn bản thỏa thuận cử chủ hộ có chữ ký các thành viên tải lên ứng dụng."
        },
        {
          "step": 4,
          "title": "Gửi hồ sơ",
          "action": "Kiểm tra thông tin -> Bấm 'Gửi yêu cầu' để Cảnh sát khu vực duyệt trên CSDLQG."
        }
      ],
      "result_format": "Thông báo phê duyệt điều chỉnh thành công, thông tin chủ hộ mới tự động cập nhật trong Ví giấy tờ VNeID.",
      "tips": [
        "Trường hợp chủ hộ cũ qua đời, cần hoàn tất thủ tục Khai tử trước khi nộp hồ sơ cử chủ hộ mới."
      ]
    }
  },
  {
    "id": "proc_xac_nhan_cu_tru_ct07",
    "category_id": "cu_tru",
    "code": "TTHC-CT-07",
    "title": "Thủ tục Cấp Xác nhận thông tin về cư trú (Mẫu CT07) trên VNeID",
    "target_audience": "Cá nhân, hộ gia đình cần văn bản xác nhận nơi cư trú, thời gian cư trú phục vụ giao dịch tài chính, đất đai, hôn nhân",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua VNeID Mức 2 hoặc Cổng DVC Bộ Công an (nhận bản điện tử ký số và bản giấy)",
    "required_documents": [
      "Tờ khai đề nghị xác nhận thông tin cư trú điện tử (Mẫu CT01 trên hệ thống).",
      "Giấy tờ chứng minh chỗ ở hoặc quan hệ nhân thân (nếu thông tin chưa đầy đủ trên CSDLQG về dân cư)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn Xác nhận thông tin cư trú",
        "desc": "Mở VNeID -> 'Thủ tục hành chính' -> Chọn 'Xác nhận thông tin về cư trú' -> Nhập Passcode."
      },
      {
        "step": 2,
        "title": "Chọn đối tượng và phạm vi xác nhận",
        "desc": "Chọn cấp cho 'Bản thân' hoặc 'Thành viên trong hộ' -> Chọn nội dung xác nhận: Thông tin cư trú hiện tại hoặc Lịch sử cư trú từ trước đến nay."
      },
      {
        "step": 3,
        "title": "Chọn hình thức nhận kết quả",
        "desc": "Bản điện tử ký số hợp pháp sẽ tự động trả về VNeID. Nếu cần bản giấy, tích chọn 'Nhận bản giấy' tại Bộ phận Một cửa Công an xã hoặc nhận qua bưu chính."
      },
      {
        "step": 4,
        "title": "Nộp lệ phí trực tuyến và gửi yêu cầu",
        "desc": "Thanh toán lệ phí trực tuyến 10.000 VNĐ -> Gửi yêu cầu để Công an xã Đức Hợp tra cứu CSDL và ký số cấp văn bản."
      }
    ],
    "processing_time": "Trong 01 ngày làm việc (không quá 03 ngày làm việc đối với trường hợp cần tra cứu hồ sơ lưu trữ)",
    "fee": "10.000 VNĐ (nộp trực tuyến)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 2460,
    "forms": [
      {
        "id": "f_ct07_xn",
        "form_code": "Mẫu CT07",
        "name": "Giấy xác nhận thông tin về cư trú điện tử (ký số hợp pháp)",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Xác nhận thông tin về cư trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Thông tin cư trú đã được thu thập đầy đủ trên Cơ sở dữ liệu quốc gia về dân cư."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào dịch vụ Xác nhận thông tin cư trú",
          "action": "Đăng nhập VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Xác nhận thông tin về cư trú'."
        },
        {
          "step": 2,
          "title": "Chọn nội dung cần xác nhận",
          "action": "Chọn xác nhận thông tin cư trú hiện tại hoặc toàn bộ lịch sử các nơi thường trú/tạm trú."
        },
        {
          "step": 3,
          "title": "Lựa chọn hình thức nhận văn bản",
          "action": "Nhận bản PDF điện tử ký số qua VNeID (miễn phí in ấn) hoặc tích nhận thêm bản giấy tại Công an xã."
        },
        {
          "step": 4,
          "title": "Nộp lệ phí và nhận kết quả",
          "action": "Thanh toán 10.000đ trực tuyến -> Nhận Giấy CT07 điện tử có mã QR và chữ ký số trong vòng 24 giờ."
        }
      ],
      "result_format": "Tệp tin CT07 điện tử định dạng PDF có gắn chữ ký số của Trưởng Công an xã Đức Hợp, có giá trị pháp lý tương đương bản giấy.",
      "tips": [
        "Giấy CT07 điện tử trên VNeID có giá trị sử dụng 01 năm kể từ ngày cấp đối với trường hợp thông tin cư trú không thay đổi.",
        "Có thể xuất trình trực tiếp mã QR trên CT07 điện tử cho ngân hàng hoặc văn phòng công chứng quét kiểm tra đối soát."
      ]
    }
  },
  {
    "id": "proc_lien_thong_khai_sinh",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-LT-01",
    "title": "Dịch vụ công liên thông: Đăng ký khai sinh - Đăng ký thường trú - Cấp thẻ BHYT cho trẻ dưới 6 tuổi",
    "target_audience": "Cha, mẹ hoặc người giám hộ thực hiện đăng ký khai sinh lần đầu cho trẻ em sinh ra tại Việt Nam",
    "competent_authority": "UBND cấp xã (Nhánh Tư pháp) - Công an xã Đức Hợp (Nhánh Cư trú) - BHXH huyện Kim Động (Nhánh BHYT)",
    "execution_method": "Trực tuyến toàn trình qua VNeID Mức 2 theo Nghị định 63/2024/NĐ-CP (chu trình 3 trong 1)",
    "required_documents": [
      "Mã liên thông hoặc tệp điện tử có ký số của 'Giấy chứng sinh' do bệnh viện/cơ sở y tế cấp (hoặc ảnh chụp bản gốc rõ nét).",
      "Tài khoản VNeID Mức độ 2 của cha hoặc mẹ.",
      "Thông tin họ tên, dân tộc, quốc tịch, quê quán của trẻ phục vụ thủ tục Đăng ký khai sinh.",
      "Địa chỉ đăng ký thường trú theo hộ của cha hoặc mẹ.",
      "Lựa chọn cơ sở khám chữa bệnh ban đầu để phát hành Thẻ BHYT diện ngân sách nhà nước đóng."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo hồ sơ liên thông",
        "desc": "Cha/mẹ đăng nhập VNeID Mức 2 -> Vào 'Dịch vụ khác' hoặc 'Thủ tục hành chính' -> Chọn 'Dịch vụ công liên thông khai sinh, thường trú, BHYT'."
      },
      {
        "step": 2,
        "title": "Nạp dữ liệu Giấy chứng sinh",
        "desc": "Nhập mã Giấy chứng sinh điện tử hoặc tải lên ảnh chụp bản gốc Giấy chứng sinh hợp pháp do cơ sở y tế phát hành."
      },
      {
        "step": 3,
        "title": "Kê khai thông tin khai sinh và nơi thường trú",
        "desc": "Kê khai họ tên, quê quán của trẻ -> Chọn nơi đăng ký thường trú theo hộ cha hoặc mẹ tại xã Đức Hợp -> Chọn bệnh viện/trạm y tế khám BHYT ban đầu."
      },
      {
        "step": 4,
        "title": "Chu trình phân luồng xử lý liên ngành",
        "desc": "Nhánh 1 (UBND xã): Duyệt cấp Giấy khai sinh điện tử có ký số trong ngày. Nhánh 2 (Công an xã Đức Hợp): Nhận lệnh tự động duyệt nhập thường trú không quá 2 ngày. Nhánh 3 (BHXH huyện): Cấp mã số BHXH và thẻ BHYT trẻ em trong 2 ngày."
      },
      {
        "step": 5,
        "title": "Nhận kết quả tích hợp 3 trong 1",
        "desc": "Bản điện tử của Giấy khai sinh, Thông báo thường trú và Thẻ BHYT số được đồng bộ thẳng vào kho VNeID của phụ huynh; nhận bản giấy tại UBND xã hoặc gửi bưu điện tận nhà."
      }
    ],
    "processing_time": "Tối đa không quá 03 ngày làm việc cho toàn bộ 3 thủ tục",
    "fee": "Miễn phí (chỉ thu lệ phí đăng ký thường trú 10.000 VNĐ theo quy định)",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 3670,
    "forms": [
      {
        "id": "f_lt_ks",
        "form_code": "NĐ 63/2024",
        "name": "Tờ khai điện tử liên thông Khai sinh - Thường trú - BHYT trẻ dưới 6 tuổi",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2) / Cổng DVC Quốc gia",
      "portal_name": "Dịch vụ công liên thông Khai sinh - Thường trú - BHYT",
      "prerequisites": [
        "Trẻ mới sinh có Giấy chứng sinh hợp pháp.",
        "Cha hoặc mẹ có tài khoản định danh điện tử VNeID Mức 2.",
        "Có kết nối mạng Internet ổn định."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào phân hệ Liên thông Khai sinh",
          "action": "Đăng nhập VNeID -> Chọn 'Dịch vụ công liên thông' -> Chọn 'Đăng ký khai sinh, thường trú, cấp thẻ BHYT'."
        },
        {
          "step": 2,
          "title": "Liên kết Giấy chứng sinh",
          "action": "Nhập mã số Giấy chứng sinh điện tử từ bệnh viện hoặc tải ảnh bản chụp giấy chứng sinh."
        },
        {
          "step": 3,
          "title": "Đặt tên và chọn nơi thường trú cho con",
          "action": "Điền tên khai sinh của trẻ -> Chọn nhập khẩu theo cha hoặc mẹ tại xã Đức Hợp -> Chọn nơi khám BHYT (Trạm y tế xã hoặc BV huyện Kim Động)."
        },
        {
          "step": 4,
          "title": "Gửi hồ sơ và theo dõi tiến độ",
          "action": "Kiểm tra dữ liệu -> Bấm 'Gửi yêu cầu' -> Theo dõi luồng xử lý của UBND xã, Công an xã và BHXH trên ứng dụng."
        }
      ],
      "result_format": "Đồng bộ đồng thời: Giấy khai sinh bản điện tử, Giấy xác nhận thường trú điện tử và Thẻ BHYT điện tử vào mục Ví giấy tờ trên VNeID của bố/mẹ.",
      "tips": [
        "Nên làm liên thông ngay trong 60 ngày đầu sau khi sinh để trẻ được cấp thẻ BHYT kịp thời phục vụ tiêm chủng và khám chữa bệnh miễn phí.",
        "Nếu cơ sở y tế đã cấp Giấy chứng sinh điện tử, hệ thống tự động bóc tách dữ liệu 100%, phụ huynh không cần nhập lại."
      ]
    }
  },
  {
    "id": "proc_lien_thong_khai_tu",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-LT-02",
    "title": "Dịch vụ công liên thông: Đăng ký khai tử - Xóa đăng ký thường trú - Giải quyết trợ cấp mai táng / Chế độ tử tuất",
    "target_audience": "Thân nhân của người qua đời thực hiện đăng ký khai tử và giải quyết các chế độ chính sách liên quan",
    "competent_authority": "UBND cấp xã (Khai tử) - Công an xã Đức Hợp (Xóa thường trú) - BHXH huyện Kim Động (Mai táng/Tử tuất)",
    "execution_method": "Trực tuyến toàn trình qua VNeID Mức 2 theo Nghị định 63/2024/NĐ-CP",
    "required_documents": [
      "Giấy báo tử điện tử hoặc ảnh chụp Giấy báo tử bản gốc hợp pháp do cơ sở y tế/UBND cấp.",
      "Tài khoản VNeID Mức 2 của thân nhân người mất nộp hồ sơ.",
      "Số định danh cá nhân / CCCD của người mất.",
      "Thông tin số tài khoản ngân hàng của thân nhân nhận trợ cấp mai táng phí / tử tuất (nếu người mất có tham gia BHXH hoặc hưởng lương hưu)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo hồ sơ liên thông khai tử",
        "desc": "Thân nhân đăng nhập VNeID Mức 2 -> 'Dịch vụ công liên thông' -> Chọn 'Đăng ký khai tử - Xóa thường trú - Giải quyết mai táng phí'."
      },
      {
        "step": 2,
        "title": "Kê khai Giấy báo tử và thông tin người mất",
        "desc": "Nhập mã Giấy báo tử điện tử hoặc tải ảnh chụp bản gốc -> Khai báo thời gian, nguyên nhân và địa điểm qua đời."
      },
      {
        "step": 3,
        "title": "Phân luồng luân chuyển tự động",
        "desc": "Bước 1: UBND cấp xã giải quyết cấp Trích lục khai tử điện tử. Bước 2: Dữ liệu tự động đồng bộ sang Công an xã Đức Hợp để tiến hành Xóa đăng ký thường trú trên CSDL quốc gia. Bước 3: Dữ liệu chuyển đến BHXH để duyệt chi trả trợ cấp mai táng phí hoặc tử tuất."
      },
      {
        "step": 4,
        "title": "Nhận kết quả và tiền trợ cấp",
        "desc": "Trích lục khai tử điện tử gửi về VNeID; bản giấy nhận tại bộ phận một cửa hoặc gửi bưu điện; tiền trợ cấp mai táng chuyển khoản thẳng về tài khoản ngân hàng thân nhân."
      }
    ],
    "processing_time": "Tối đa không quá 03 ngày làm việc đối với Khai tử & Xóa thường trú; giải quyết chế độ BHXH theo quy định",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 1720,
    "forms": [
      {
        "id": "f_lt_kt",
        "form_code": "NĐ 63/2024",
        "name": "Tờ khai điện tử liên thông Khai tử - Xóa thường trú - Trợ cấp mai táng",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2) / Cổng DVC Quốc gia",
      "portal_name": "Dịch vụ công liên thông Khai tử - Xóa thường trú - Mai táng phí",
      "prerequisites": [
        "Có Giấy báo tử hợp pháp do cơ sở y tế hoặc UBND cấp xã ban hành.",
        "Thân nhân người mất có tài khoản VNeID Mức 2.",
        "Tài khoản ngân hàng của thân nhân nhận chế độ trợ cấp."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Liên thông Khai tử",
          "action": "Mở VNeID -> Chọn 'Dịch vụ công liên thông' -> Chọn 'Khai tử, Xóa thường trú, Trợ cấp mai táng'."
        },
        {
          "step": 2,
          "title": "Tải Giấy báo tử",
          "action": "Chụp ảnh Giấy báo tử bản gốc tải lên -> Điền số định danh của người đã mất."
        },
        {
          "step": 3,
          "title": "Khai báo thông tin nhận chế độ mai táng",
          "action": "Chọn diện thụ hưởng chế độ BHXH của người mất -> Nhập số tài khoản ngân hàng của thân nhân nhận tiền hỗ trợ."
        },
        {
          "step": 4,
          "title": "Gửi hồ sơ",
          "action": "Kiểm tra toàn bộ nội dung -> Nhấn 'Gửi yêu cầu' để kích hoạt chu trình liên ngành tự động."
        }
      ],
      "result_format": "Trích lục khai tử điện tử ký số gửi về VNeID; tự động xóa thường trú trên hệ thống dân cư mà không phải đi lại nhiều cơ quan.",
      "tips": [
        "Quy trình liên thông giúp gia đình hoàn tất cả 3 thủ tục chỉ trong 1 lần nộp hồ sơ, không phải chạy đi chạy lại giữa UBND xã, Công an xã và Bảo hiểm xã hội huyện."
      ]
    }
  },
  {
    "id": "proc_ly_lich_tu_phap",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-TP-01",
    "title": "Thủ tục Yêu cầu cấp Phiếu lý lịch tư pháp (Số 1 và Số 2) trực tuyến trên VNeID",
    "target_audience": "Công dân Việt Nam có tài khoản VNeID Mức 2 nộp cho bản thân hoặc cha/mẹ khai hộ con chưa thành niên, người được ủy quyền",
    "competent_authority": "Sở Tư pháp tỉnh Hưng Yên / Trung tâm Lý lịch tư pháp quốc gia (Bộ Tư pháp)",
    "execution_method": "Trực tuyến toàn trình qua VNeID Mức 2 (triển khai toàn quốc từ 01/10/2024)",
    "required_documents": [
      "Tài khoản VNeID Mức độ 2.",
      "Thông tin quá trình cư trú, nghề nghiệp, nơi làm việc từ khi đủ 14 tuổi đến nay (kê khai trực tiếp trên ứng dụng).",
      "Văn bản ủy quyền hợp pháp theo Biểu mẫu số 13/2024/LLTP (nếu là trường hợp ủy quyền khai hộ).",
      "Giấy tờ chứng minh thuộc diện miễn/giảm lệ phí (thẻ học sinh/sinh viên, giấy chứng nhận hộ nghèo,... nếu có)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập mục Cấp Phiếu lý lịch tư pháp",
        "desc": "Mở VNeID -> 'Thủ tục hành chính' -> Chọn 'Cấp Phiếu lý lịch tư pháp' -> Nhập Passcode bảo vệ."
      },
      {
        "step": 2,
        "title": "Chọn trường hợp nộp",
        "desc": "Chọn đối tượng: 'Bản thân' hoặc 'Khai hộ' (cha/mẹ khai hộ con chưa thành niên hoặc người được ủy quyền hợp pháp)."
      },
      {
        "step": 3,
        "title": "Rà soát nhân thân & Khai bổ sung",
        "desc": "Rà soát thông tin CCCD đã đồng bộ tự động. Khai báo bổ sung: Nơi sinh, email, số điện thoại, và quá trình cư trú, nơi làm việc từ đủ 14 tuổi."
      },
      {
        "step": 4,
        "title": "Cấu hình loại phiếu & Hình thức nhận",
        "desc": "Chọn duy nhất 'Phiếu LLTP số 1' hoặc 'Phiếu LLTP số 2' cùng mục đích xin cấp. Bản điện tử tự động trả về VNeID. Nếu nhận thêm bản giấy vật lý, tích chọn 'Nhận bản giấy' (miễn phí 2 bản đầu tiên, từ bản thứ 3 thu 5.000đ/bản) và chọn chuyển phát bưu chính tận nhà."
      },
      {
        "step": 5,
        "title": "Thanh toán lệ phí trực tuyến",
        "desc": "Xác nhận đối tượng nộp phí (200.000đ/lần đối với công dân thông thường; 100.000đ với học sinh, sinh viên; miễn phí cho trẻ em, người cao tuổi, hộ nghèo) -> Thanh toán qua quét mã QR hoặc thẻ ngân hàng."
      }
    ],
    "processing_time": "Từ 05 đến 10 ngày làm việc (không quá 15 ngày đối với trường hợp phải xác minh lý lịch phức tạp)",
    "fee": "200.000 VNĐ/lần (thông thường); 100.000 VNĐ (học sinh/sinh viên); Miễn phí diện ưu tiên. Miễn phí 2 bản giấy đầu tiên.",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 4210,
    "forms": [
      {
        "id": "f_lltp_vneid",
        "form_code": "TT 06/2024/TT-BTP",
        "name": "Tờ khai yêu cầu cấp Phiếu lý lịch tư pháp điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Cấp Phiếu lý lịch tư pháp'",
      "prerequisites": [
        "Tài khoản định danh điện tử VNeID Mức độ 2.",
        "Thiết bị di động có kết nối mạng.",
        "Nắm rõ lịch sử học tập/công tác từ năm 14 tuổi đến nay."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào dịch vụ Cấp Phiếu LLTP",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Cấp Phiếu lý lịch tư pháp' -> Nhập Passcode."
        },
        {
          "step": 2,
          "title": "Chọn nộp cho Bản thân hoặc Khai hộ",
          "action": "Bấm 'Tạo mới yêu cầu' -> Chọn kê khai cho 'Bản thân' -> Kiểm tra thông tin nhân thân tự động."
        },
        {
          "step": 3,
          "title": "Khai bổ sung quá trình từ năm 14 tuổi",
          "action": "Nhập nơi sinh, email, quá trình cư trú/làm việc từ năm 14 tuổi đến nay -> Chọn Phiếu số 1 hoặc Số 2."
        },
        {
          "step": 4,
          "title": "Chọn nhận bản giấy & Thanh toán phí",
          "action": "Tích chọn nhận bản giấy gửi bưu điện về tận nhà -> Nộp 200.000đ (hoặc 100.000đ) qua cổng thanh toán VNeID."
        }
      ],
      "result_format": "Phiếu lý lịch tư pháp điện tử có gắn chữ ký số của Giám đốc Sở Tư pháp gửi thẳng vào kho dữ liệu VNeID, có giá trị pháp lý tương đương bản giấy.",
      "tips": [
        "Bản điện tử ký số trên VNeID có thể dùng mãi mãi, gửi qua email hoặc nộp trực tuyến cho nhà tuyển dụng/cơ quan hành chính mà không sợ bị rách hay thất lạc.",
        "Học sinh, sinh viên khi nộp hồ sơ nhớ chụp ảnh thẻ HSSV tải lên để được giảm 50% lệ phí (còn 100.000đ)."
      ]
    }
  },
  {
    "id": "proc_dang_ky_xe_toan_trinh",
    "category_id": "giao_thong",
    "code": "TTHC-GT-01",
    "title": "Thủ tục Đăng ký xe lần đầu toàn trình cho xe sản xuất, lắp ráp trong nước trên VNeID",
    "target_audience": "Công dân Việt Nam mua mới phương tiện cơ giới (ô tô, xe máy, xe máy điện) sản xuất, lắp ráp trong nước",
    "competent_authority": "Công an xã Đức Hợp (đối với xe máy) / Công an cấp huyện (đối với ô tô)",
    "execution_method": "Trực tuyến toàn trình qua VNeID Mức 2 (Thông tư 28/2024/TT-BCA - không cần mang xe đến CSGT chà số khung/máy)",
    "required_documents": [
      "Mã hồ sơ lệ phí trước bạ (đã kê khai và nộp lệ phí trước bạ tại cơ quan Thuế hoặc online).",
      "Số seri Phiếu kiểm tra chất lượng xuất xưởng của phương tiện (do nhà sản xuất in trên chứng chỉ xuất xưởng).",
      "Tệp ảnh kỹ thuật số chụp góc nhìn phía trước của phương tiện (rõ kiểu dáng tổng thể, đầu xe).",
      "Tài khoản VNeID Mức độ 2 của chủ xe."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chuẩn bị dữ liệu tài chính trước bạ",
        "desc": "Hoàn tất nộp Lệ phí trước bạ tại cơ quan Thuế hoặc Cổng DVC để được cấp một 'Mã hồ sơ lệ phí trước bạ' hợp lệ."
      },
      {
        "step": 2,
        "title": "Khởi tạo hồ sơ trên VNeID",
        "desc": "Đăng nhập VNeID Mức 2 -> Phân hệ DVC phương tiện giao thông -> Chọn thủ tục 'Đăng ký xe lần đầu bằng dịch vụ công trực tuyến toàn trình đối với xe sản xuất lắp ráp trong nước'."
      },
      {
        "step": 3,
        "title": "Tra cứu đối soát liên thông tự động",
        "desc": "Nhập 'Số seri phiếu kiểm tra chất lượng xuất xưởng' và 'Mã hồ sơ lệ phí trước bạ' -> Nhấn 'Tra cứu'. Hệ thống tự động kết nối API với Cục Đăng kiểm và Tổng cục Thuế để trích xuất toàn bộ thông số kỹ thuật xe và hóa đơn điện tử."
      },
      {
        "step": 4,
        "title": "Nạp ảnh thực tế và cấp phát biển số",
        "desc": "Chụp tải ảnh góc nhìn phía trước của xe. Lựa chọn: Bấm biển số mới ngẫu nhiên từ kho số định danh địa phương; Chọn cấp lại biển định danh cũ đang lưu giữ; hoặc Chọn áp dụng biển số trúng đấu giá."
      },
      {
        "step": 5,
        "title": "Thanh toán và bàn giao tài liệu gốc qua bưu chính",
        "desc": "Thanh toán lệ phí đăng ký xe trực tuyến và điền địa chỉ nhận biển số, đăng ký xe qua Bưu chính công ích. Khi nhân viên bưu chính giao kết quả tại nhà, chủ xe bàn giao lại bản gốc 'Phiếu kiểm tra chất lượng xuất xưởng' (đã dán bản chà số khung số máy có dấu giáp lai)."
      }
    ],
    "processing_time": "Không quá 02 ngày làm việc kể từ khi nhận đủ dữ liệu hợp lệ",
    "fee": "Thu theo biểu phí Thông tư 60/2023/TT-BTC (cấp biển số xe máy, ô tô theo khu vực)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 3890,
    "forms": [
      {
        "id": "f_dkx_tt",
        "form_code": "TT 28/2024/TT-BCA",
        "name": "Giấy khai đăng ký xe điện tử trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Dịch vụ công phương tiện giao thông -> 'Đăng ký xe lần đầu toàn trình'",
      "prerequisites": [
        "Xe mới mua là xe sản xuất, lắp ráp trong nước.",
        "Đã hoàn thành nộp lệ phí trước bạ và có Mã trước bạ.",
        "Có Phiếu kiểm tra chất lượng xuất xưởng bản gốc.",
        "Tài khoản VNeID Mức 2 chính chủ người đứng tên xe."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Đăng ký xe toàn trình",
          "action": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Đăng ký xe lần đầu toàn trình xe sản xuất trong nước'."
        },
        {
          "step": 2,
          "title": "Tra cứu thông số xe liên thông",
          "action": "Nhập Số seri phiếu xuất xưởng và Mã trước bạ -> Bấm 'Tra cứu' (hệ thống tự lấy tên xe, số khung, số máy, hóa đơn)."
        },
        {
          "step": 3,
          "title": "Tải ảnh xe và chọn biển số",
          "action": "Chụp ảnh đầu xe tải lên -> Chọn bấm biển số mới hoặc lấy lại biển định danh cũ đang treo."
        },
        {
          "step": 4,
          "title": "Thanh toán phí và nhận biển tại nhà",
          "action": "Nộp lệ phí cấp biển online -> Điền địa chỉ nhận qua bưu điện -> Bàn giao phiếu xuất xưởng gốc cho nhân viên bưu tá khi nhận biển."
        }
      ],
      "result_format": "Chứng nhận đăng ký xe điện tử tích hợp vào Ví VNeID và nhận biển số vật lý + Đăng ký xe giấy chuyển phát tận nhà.",
      "tips": [
        "Hoàn toàn KHÔNG phải mang xe đến trụ sở Công an xã Đức Hợp để chà số khung, số máy như trước đây.",
        "Lưu ý dán sẵn 02 bản chà số khung, số máy có đóng dấu giáp lai của nhà sản xuất lên Phiếu kiểm tra chất lượng xuất xưởng trước khi giao bưu tá."
      ]
    }
  },
  {
    "id": "proc_xuat_trinh_giay_to_vneid",
    "category_id": "giao_thong",
    "code": "TTHC-GT-02",
    "title": "Hướng dẫn xuất trình giấy tờ điện tử trên VNeID khi làm việc với CSGT và lực lượng chức năng",
    "target_audience": "Người điều khiển phương tiện tham gia giao thông và công dân thực hiện giao dịch hành chính công",
    "competent_authority": "Lực lượng Cảnh sát Giao thông, Công an các cấp và các cơ quan nhà nước có thẩm quyền",
    "execution_method": "Mở ứng dụng VNeID Mức 2 -> Xuất trình giấy tờ số đã tích hợp hợp lệ trong Ví điện tử",
    "required_documents": [
      "Ứng dụng VNeID đã kích hoạt tài khoản Mức độ 2 trên điện thoại.",
      "Các giấy tờ đã được phê duyệt tích hợp: GPLX, Đăng ký xe, Thẻ Căn cước, Thẻ BHYT.",
      "Mã Passcode hoặc cài đặt vân tay/Face ID để mở khóa thông tin giấy tờ."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Đăng nhập và vào Ví giấy tờ",
        "desc": "Khi lực lượng Cảnh sát Giao thông yêu cầu kiểm tra, công dân mở ứng dụng VNeID -> Đăng nhập bằng vân tay/khuôn mặt -> Chọn mục 'Ví giấy tờ'."
      },
      {
        "step": 2,
        "title": "Mở hiển thị Giấy phép lái xe & Đăng ký xe",
        "desc": "Nhấn vào 'Giấy phép lái xe' hoặc 'Đăng ký xe' -> Nhập mã Passcode gồm 6 số để hệ thống hiển thị đầy đủ thông tin chi tiết và mã QR của giấy tờ."
      },
      {
        "step": 3,
        "title": "Cung cấp mã QR để CSGT quét kiểm tra",
        "desc": "Cán bộ CSGT sử dụng thiết bị chuyên dụng hoặc ứng dụng VNeID nghiệp vụ quét mã QR trên màn hình điện thoại của công dân để đối soát dữ liệu trên CSDL quốc gia theo thời gian thực."
      },
      {
        "step": 4,
        "title": "Xử lý trường hợp tạm giữ giấy tờ điện tử",
        "desc": "Căn cứ Thông tư 28/2024/TT-BCA, trường hợp bị áp dụng hình thức tạm giữ giấy tờ, CSGT sẽ lập biên bản và cập nhật trạng thái tạm giữ/tước quyền sử dụng trên hệ thống phần mềm nghiệp vụ; thông tin này tự động hiển thị trong Ví VNeID của công dân."
      }
    ],
    "processing_time": "Xuất trình và đối soát trực tiếp tức thì trong 1 đến 2 phút",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 4890,
    "forms": [
      {
        "id": "f_xt_gt",
        "form_code": "NĐ 69/2024",
        "name": "Giao diện xuất trình Ví giấy tờ điện tử hợp pháp trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Phân hệ 'Ví giấy tờ' trên VNeID",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "GPLX và Đăng ký xe đã ở trạng thái 'Đã phê duyệt' (màu xanh lá).",
        "Điện thoại còn pin khi tham gia giao thông."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở ứng dụng và vào Ví giấy tờ",
          "action": "Mở VNeID -> Mở mục 'Ví giấy tờ' ở thanh điều hướng phía dưới."
        },
        {
          "step": 2,
          "title": "Xác thực mã Passcode",
          "action": "Chọn loại giấy tờ cần xuất trình (GPLX, Đăng ký xe) -> Nhập Passcode 6 số để mở khóa."
        },
        {
          "step": 3,
          "title": "Đưa màn hình có mã QR cho CSGT",
          "action": "Đưa màn hình hiển thị thông tin bằng lái và mã QR cho cán bộ CSGT quét kiểm tra nghiệp vụ."
        }
      ],
      "result_format": "Giấy tờ số trên VNeID có giá trị pháp lý tương đương việc xuất trình bản giấy gốc căn cứ Nghị định 69/2024/NĐ-CP.",
      "tips": [
        "Từ ngày 01/7/2024 theo Thông tư 28/2024/TT-BCA, việc xuất trình GPLX, Đăng ký xe trên VNeID hoàn toàn hợp lệ, CSGT không được xử phạt lỗi không mang giấy tờ nếu đã tích hợp thành công trên app.",
        "Nên bật tính năng mở khóa nhanh bằng Sinh trắc học (vân tay/khuôn mặt) để khi cần xuất trình không bị quên mã Passcode."
      ]
    }
  },
  {
    "id": "proc_tich_hop_gplx",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-01",
    "title": "Tích hợp Giấy phép lái xe (GPLX) vào Ví giấy tờ điện tử VNeID",
    "target_audience": "Công dân có GPLX hợp lệ do Bộ Giao thông Vận tải / Cục Đường bộ Việt Nam cấp và tài khoản VNeID Mức 2",
    "competent_authority": "Cục Đường bộ Việt Nam phối hợp Trung tâm Dữ liệu quốc gia về dân cư (Bộ Công an)",
    "execution_method": "Trực tuyến qua phân hệ 'Ví giấy tờ' trên ứng dụng VNeID",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Giấy phép lái xe bằng thẻ nhựa PET có số CCCD 12 số và đầy đủ ngày tháng năm sinh.",
      "Số seri GPLX và phân hạng lái xe (A1, A2, B1, B2, C, D, E,...)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo yêu cầu tích hợp",
        "desc": "Đăng nhập VNeID Mức 2 -> Vào 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn loại giấy tờ Giấy phép lái xe",
        "desc": "Chọn danh mục 'Giấy phép lái xe' -> Chọn cơ quan cấp là 'Bộ Giao thông Vận tải' (hoặc Cục Đường bộ Việt Nam)."
      },
      {
        "step": 3,
        "title": "Nhập số GPLX và chọn hạng",
        "desc": "Nhập chính xác chuỗi số seri GPLX -> Chọn hạng giấy phép tương ứng. (Nếu thẻ PET gộp chung cả ô tô và xe máy, tích hợp một số sẽ tự đồng bộ các hạng còn lại)."
      },
      {
        "step": 4,
        "title": "Gửi yêu cầu và đối soát",
        "desc": "Tích cam đoan tính xác thực -> Nhấn 'Gửi yêu cầu'. Hệ thống chuyển trạng thái sang 'Chờ phê duyệt' và đối soát với CSDL GPLX quốc gia trong vòng 24 giờ."
      }
    ],
    "processing_time": "Đối soát và phê duyệt tự động trong vòng 24 giờ",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 5120,
    "forms": [
      {
        "id": "f_th_gplx",
        "form_code": "Ví VNeID",
        "name": "Yêu cầu tích hợp Giấy phép lái xe điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> 'Tích hợp thông tin' -> 'Giấy phép lái xe'",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "GPLX bằng thẻ nhựa PET (chất liệu cứng, có hoa văn bảo an).",
        "Thông tin số CMND/CCCD trên GPLX trùng khớp với CCCD 12 số trên VNeID."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Tích hợp thông tin",
          "action": "Đăng nhập VNeID -> Chọn 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> 'Tạo mới yêu cầu'."
        },
        {
          "step": 2,
          "title": "Chọn Giấy phép lái xe",
          "action": "Chọn 'Giấy phép lái xe' -> Cơ quan cấp: 'Bộ Giao thông Vận tải'."
        },
        {
          "step": 3,
          "title": "Nhập số bằng lái và hạng xe",
          "action": "Nhập số GPLX in trên bằng -> Chọn hạng xe (A1, B2,...) -> Tích cam đoan -> Bấm 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Sau khi phê duyệt, GPLX hiển thị với huy hiệu xanh lá trong Ví giấy tờ, có đầy đủ hạn sử dụng và phân hạng xe.",
      "tips": [
        "Nếu bằng lái cũ làm bằng bìa giấy (không có ngày tháng sinh hoặc cấp theo CMND 9 số cũ), hệ thống sẽ từ chối. Bà con cần đổi sang bằng thẻ PET mới trên Cổng DVC Cục Đường bộ trước khi tích hợp."
      ]
    }
  },
  {
    "id": "proc_tich_hop_dang_ky_xe",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-02",
    "title": "Tích hợp Đăng ký xe (Cà vẹt xe ô tô, mô tô) vào Ví giấy tờ điện tử VNeID",
    "target_audience": "Chủ sở hữu xe cơ giới (ô tô, xe máy) đứng tên chính chủ trên Chứng nhận đăng ký xe có tài khoản VNeID Mức 2",
    "competent_authority": "Cục Cảnh sát Giao thông (C08 - Bộ Công an)",
    "execution_method": "Trực tuyến qua phân hệ 'Ví giấy tờ' trên ứng dụng VNeID",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Chứng nhận đăng ký xe (Cà vẹt) đứng tên chính chủ.",
      "Chuỗi ký tự Số khung phương tiện.",
      "Biển kiểm soát phương tiện chuẩn hóa."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập mục Tích hợp Đăng ký xe",
        "desc": "Tại phân hệ 'Ví giấy tờ', chọn 'Tích hợp thông tin' -> 'Tạo mới yêu cầu' -> Chọn loại 'Đăng ký xe'."
      },
      {
        "step": 2,
        "title": "Chọn nhóm phương tiện",
        "desc": "Lựa chọn chính xác nhóm: 'Xe ô tô' hoặc 'Xe mô tô, xe gắn máy'."
      },
      {
        "step": 3,
        "title": "Nhập số khung và biển kiểm soát",
        "desc": "Nhập chính xác 'Số khung' phương tiện. Nhập 'Biển kiểm soát' theo quy tắc chuẩn hóa: viết liền mạch không khoảng trắng, không dấu chấm, không gạch ngang (ví dụ: 89B112345, 30A99999)."
      },
      {
        "step": 4,
        "title": "Chọn màu biển số và gửi yêu cầu",
        "desc": "Chọn đúng 'Màu biển số' (Biển trắng chữ đen cho xe dân sự; Biển vàng chữ đen cho xe kinh doanh vận tải) -> Nhấn 'Gửi yêu cầu' để chuyển Cục CSGT xác thực tính chính chủ."
      }
    ],
    "processing_time": "Từ 01 đến 03 ngày làm việc đối soát với CSDL đăng ký phương tiện",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 4560,
    "forms": [
      {
        "id": "f_th_dkx",
        "form_code": "Ví VNeID",
        "name": "Yêu cầu tích hợp Đăng ký xe (Cà vẹt) điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> 'Tích hợp thông tin' -> 'Đăng ký xe'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Xe đứng tên chính chủ người đang thực hiện tích hợp.",
        "Thông tin đăng ký xe đã được Công an đồng bộ với số định danh cá nhân."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào tích hợp Đăng ký xe",
          "action": "Mở VNeID -> Vào 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Chọn 'Đăng ký xe'."
        },
        {
          "step": 2,
          "title": "Chọn loại phương tiện",
          "action": "Chọn 'Xe mô tô, xe gắn máy' hoặc 'Xe ô tô'."
        },
        {
          "step": 3,
          "title": "Nhập Số khung và Biển số chuẩn hóa",
          "action": "Điền số khung in trên cà vẹt -> Điền biển số viết liền không dấu gạch hay chấm (VD: 89H123456)."
        },
        {
          "step": 4,
          "title": "Chọn màu biển và gửi duyệt",
          "action": "Chọn Biển trắng hoặc Biển vàng -> Tích cam đoan -> Bấm 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Đăng ký xe điện tử hiển thị đầy đủ thông số nhãn hiệu, số máy, số khung, dung tích xi lanh trong Ví giấy tờ.",
      "tips": [
        "Nếu xe mua lại chưa sang tên đổi chủ, hệ thống sẽ từ chối tích hợp vì không trùng khớp số định danh chủ xe. Chủ xe cần làm thủ tục sang tên đổi chủ trước."
      ]
    }
  },
  {
    "id": "proc_tich_hop_bhyt",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-03",
    "title": "Tích hợp Thẻ Bảo hiểm y tế (BHYT) vào Ví giấy tờ điện tử VNeID",
    "target_audience": "Công dân đang tham gia BHYT (học sinh, người lao động, người hưu trí, diện ngân sách đóng) có mã số BHXH/BHYT 10 số",
    "competent_authority": "Bảo hiểm Xã hội Việt Nam phối hợp Bộ Công an",
    "execution_method": "Trực tuyến qua phân hệ 'Ví giấy tờ' trên ứng dụng VNeID",
    "required_documents": [
      "Tài khoản VNeID Mức độ 2.",
      "Chuỗi 10 ký tự số tương ứng với Mã số BHXH/BHYT in trên bề mặt thẻ bảo hiểm y tế.",
      "Tên đơn vị BHXH cấp tỉnh/thành phố quản lý nơi phát hành thẻ ban đầu."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn Tích hợp Thẻ Bảo hiểm y tế",
        "desc": "Tại giao diện 'Ví giấy tờ', bấm 'Tích hợp thông tin' -> 'Tạo mới yêu cầu' -> Lựa chọn danh mục 'Thẻ Bảo hiểm y tế'."
      },
      {
        "step": 2,
        "title": "Nhập mã số BHXH/BHYT 10 số",
        "desc": "Nhập chuỗi 10 chữ số in trên thẻ BHYT giấy (hoặc tra cứu trên ứng dụng VssID)."
      },
      {
        "step": 3,
        "title": "Chọn đơn vị BHXH cấp tỉnh quản lý",
        "desc": "Chọn đơn vị BHXH phát hành thẻ (ví dụ: BHXH tỉnh Hưng Yên)."
      },
      {
        "step": 4,
        "title": "Gửi yêu cầu và kích hoạt mã QR",
        "desc": "Nhấn 'Gửi yêu cầu'. Cơ sở dữ liệu BHXH Việt Nam tự động phân giải hạn sử dụng, quyền lợi nơi khám chữa bệnh ban đầu và hiển thị mã QR phục vụ khám chữa bệnh thay thẻ giấy."
      }
    ],
    "processing_time": "Đối soát và hiển thị tự động trong vòng 24 giờ",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 5340,
    "forms": [
      {
        "id": "f_th_bhyt",
        "form_code": "Ví VNeID",
        "name": "Yêu cầu tích hợp Thẻ Bảo hiểm y tế điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> 'Tích hợp thông tin' -> 'Thẻ Bảo hiểm y tế'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Thẻ BHYT còn hạn sử dụng.",
        "Thông tin họ tên, ngày sinh khớp đúng giữa Căn cước và cơ sở dữ liệu BHXH."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Tích hợp BHYT",
          "action": "Mở VNeID -> Chọn 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Chọn 'Thẻ Bảo hiểm y tế'."
        },
        {
          "step": 2,
          "title": "Nhập mã thẻ 10 số",
          "action": "Điền 10 chữ số mã thẻ BHYT -> Chọn BHXH cấp tỉnh quản lý (VD: BHXH tỉnh Hưng Yên)."
        },
        {
          "step": 3,
          "title": "Gửi yêu cầu",
          "action": "Tích cam đoan -> Bấm 'Gửi yêu cầu' để BHXH Việt Nam đối soát."
        }
      ],
      "result_format": "Thẻ BHYT hiển thị mã QR trực quan, nơi đăng ký khám ban đầu và hạn sử dụng trong Ví giấy tờ VNeID.",
      "tips": [
        "100% bệnh viện và trạm y tế trên toàn quốc đã chấp nhận xuất trình thẻ BHYT trên VNeID hoặc thẻ CCCD gắn chip thay thế thẻ giấy.",
        "Nếu báo lỗi thông tin không khớp, bà con mở app VssID kiểm tra lại họ tên, ngày sinh hoặc liên hệ cơ quan BHXH huyện Kim Động để chuẩn hóa số định danh."
      ]
    }
  },
  {
    "id": "proc_tich_hop_thue",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-04",
    "title": "Tích hợp Mã số thuế cá nhân vào Ví giấy tờ điện tử VNeID",
    "target_audience": "Người nộp thuế cá nhân đã được cấp mã số thuế và đồng bộ số CCCD với CSDL ngành Thuế",
    "competent_authority": "Tổng cục Thuế (Bộ Tài chính) phối hợp C06 Bộ Công an",
    "execution_method": "Truy vấn và liên kết tự động bằng số định danh cá nhân 12 số trên VNeID",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Mã số thuế cá nhân đã được đăng ký đồng bộ với số CCCD 12 số tại cơ quan Thuế."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn danh mục Thông tin thuế",
        "desc": "Tại giao diện 'Ví giấy tờ', chọn 'Tích hợp thông tin' -> 'Tạo mới yêu cầu' -> Chọn 'Thông tin thuế' (hoặc Mã số thuế cá nhân)."
      },
      {
        "step": 2,
        "title": "Đối soát tự động qua số định danh",
        "desc": "Hệ thống tự động sử dụng số định danh cá nhân 12 số của chủ tài khoản để gửi yêu cầu truy vấn đến CSDL của Tổng cục Thuế."
      },
      {
        "step": 3,
        "title": "Kích hoạt hiển thị trong Ví giấy tờ",
        "desc": "Nếu thông tin số CCCD đã được chuẩn hóa tại cơ quan thuế, mã số thuế cá nhân, cơ quan thuế quản lý và trạng thái hoạt động sẽ tự động kích hoạt hiển thị trong Ví giấy tờ."
      }
    ],
    "processing_time": "Truy vấn và hiển thị tự động trong vòng 24 giờ",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2780,
    "forms": [
      {
        "id": "f_th_thue",
        "form_code": "Ví VNeID",
        "name": "Yêu cầu tích hợp Mã số thuế cá nhân điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> 'Tích hợp thông tin' -> 'Thông tin thuế'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Đã có mã số thuế cá nhân và đã cập nhật số CCCD với cơ quan thuế quản lý."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Tích hợp Thông tin thuế",
          "action": "Mở VNeID -> Vào 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Chọn 'Thông tin thuế'."
        },
        {
          "step": 2,
          "title": "Gửi yêu cầu truy vấn",
          "action": "Kiểm tra số định danh cá nhân hiển thị -> Bấm 'Gửi yêu cầu' để hệ thống tự động kết nối Tổng cục Thuế."
        }
      ],
      "result_format": "Hiển thị thông tin Mã số thuế, ngày cấp, Chi cục Thuế quản lý trực tiếp và trạng thái nộp thuế trong Ví giấy tờ.",
      "tips": [
        "Từ ngày 01/7/2024, số định danh cá nhân 12 số được sử dụng làm mã số thuế theo chủ trương của Đề án 06 Chính phủ."
      ]
    }
  },
  {
    "id": "proc_tich_hop_nguoi_phu_thuoc",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-05",
    "title": "Tích hợp Thông tin Người phụ thuộc (con đẻ, cha mẹ, người giám hộ) vào VNeID",
    "target_audience": "Cá nhân nộp thuế đã đăng ký người phụ thuộc giảm trừ gia cảnh theo quy định của Luật Thuế TNCN",
    "competent_authority": "Cơ quan Thuế quản lý trực tiếp phối hợp C06 Bộ Công an",
    "execution_method": "Kê khai trực tuyến trong phân hệ 'Ví giấy tờ' trên ứng dụng VNeID",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2 của người nộp thuế.",
      "Số định danh cá nhân 12 số của người phụ thuộc (con đẻ, cha mẹ, người được giám hộ).",
      "Họ tên, ngày tháng năm sinh và mối quan hệ nhân thân với người khai báo."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn danh mục Người phụ thuộc",
        "desc": "Tại giao diện 'Ví giấy tờ', chọn 'Tích hợp thông tin' -> 'Tạo mới yêu cầu' -> Chọn mục 'Người phụ thuộc'."
      },
      {
        "step": 2,
        "title": "Khai báo thông tin người phụ thuộc",
        "desc": "Kê khai đầy đủ số định danh cá nhân của người phụ thuộc, họ tên, ngày tháng năm sinh và chỉ định mối quan hệ nhân thân (con, bố mẹ, người giám hộ)."
      },
      {
        "step": 3,
        "title": "Đối soát với CSDL Cơ quan Thuế",
        "desc": "Cơ quan Thuế tiếp nhận dữ liệu sẽ rà soát với hồ sơ đăng ký giảm trừ gia cảnh hiện hành trước khi phê duyệt liên kết trên ứng dụng VNeID."
      }
    ],
    "processing_time": "Từ 01 đến 03 ngày làm việc đối soát hồ sơ thuế",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2540,
    "forms": [
      {
        "id": "f_th_npt",
        "form_code": "Ví VNeID",
        "name": "Yêu cầu tích hợp thông tin Người phụ thuộc",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> 'Tích hợp thông tin' -> 'Người phụ thuộc'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 của người nộp thuế.",
        "Đã hoàn thành thủ tục đăng ký giảm trừ gia cảnh với cơ quan thuế qua cơ quan chi trả thu nhập."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Người phụ thuộc",
          "action": "Mở VNeID -> Chọn 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Chọn 'Người phụ thuộc'."
        },
        {
          "step": 2,
          "title": "Điền số định danh của con/cha mẹ",
          "action": "Nhập số định danh 12 số của người phụ thuộc -> Chọn mối quan hệ (con, bố mẹ, người nuôi dưỡng) -> Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Hiển thị danh sách người phụ thuộc kèm mã số thuế người phụ thuộc đã được phê duyệt trong Ví giấy tờ.",
      "tips": [
        "Đối với con dưới 14 tuổi đã có mã định danh cá nhân trên Giấy khai sinh, phụ huynh có thể dùng mã này để tích hợp thuận tiện."
      ]
    }
  },
  {
    "id": "proc_khac_phuc_loi_vneid",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-06",
    "title": "Hướng dẫn chẩn đoán và khắc phục các lỗi kỹ thuật thường gặp trên VNeID",
    "target_audience": "Mọi công dân gặp sự cố bị từ chối tích hợp GPLX, Đăng ký xe, BHYT, quên mã Passcode hoặc đổi máy mới",
    "competent_authority": "Đội ngũ Kỹ thuật C06 Bộ Công an & Trực ban Công an xã Đức Hợp (02213.815.999)",
    "execution_method": "Tự khắc phục theo quy chuẩn kỹ thuật hoặc liên hệ đường dây nóng 1900.0368",
    "required_documents": [
      "Thẻ CCCD gắn chip (phục vụ quét chip NFC khi quên mật khẩu hoặc đổi thiết bị mới).",
      "Thiết bị di động có hỗ trợ kết nối NFC.",
      "Thông tin giấy tờ bản gốc để đối soát sai lệch."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Xử lý lỗi từ chối tích hợp GPLX",
        "desc": "Nguyên nhân do bằng lái bìa giấy cũ chỉ có năm sinh, hoặc dùng CMND 9 số cũ -> Khắc phục: Truy cập Cổng DVC Cục Đường bộ đổi sang thẻ nhựa PET cập nhật CCCD 12 số -> Gửi lại yêu cầu tích hợp."
      },
      {
        "step": 2,
        "title": "Xử lý lỗi từ chối Đăng ký xe (Cà vẹt)",
        "desc": "Nguyên nhân nhập BKS có dấu cách/gạch nối, chọn sai màu biển, hoặc xe chưa sang tên chính chủ -> Khắc phục: Nhập BKS viết liền mạch (VD: 89H112345), chọn đúng màu biển, làm thủ tục sang tên đổi chủ."
      },
      {
        "step": 3,
        "title": "Xử lý lỗi thông tin Thẻ BHYT không hợp lệ",
        "desc": "Nguyên nhân sai lệch họ tên, giới tính, ngày sinh giữa CSDL BHXH và Căn cước -> Khắc phục: Mở app VssID kiểm tra thông tin lệch -> Liên hệ cơ quan BHXH huyện Kim Động để đồng bộ số định danh."
      },
      {
        "step": 4,
        "title": "Khôi phục khi quên mã Passcode hoặc Mật khẩu",
        "desc": "Bấm 'Quên Passcode' hoặc 'Quên mật khẩu' -> Trả lời 2 câu hỏi bảo mật + OTP SMS; hoặc Sử dụng điện thoại có NFC áp sát thẻ CCCD gắn chip vào lưng máy để giải mã khôi phục."
      },
      {
        "step": 5,
        "title": "Xử lý khi thay đổi thiết bị đăng nhập mới",
        "desc": "Xác thực qua mã OTP gửi về thiết bị cũ; nếu thiết bị cũ bị hỏng/mất: Chọn xác thực qua chip NFC trên thẻ CCCD đặt vào lưng máy mới để cấp quyền truy cập an toàn."
      }
    ],
    "processing_time": "Tự xử lý trong 5 phút hoặc hỗ trợ qua hotline trực ban",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 5890,
    "forms": [
      {
        "id": "f_kt_loi",
        "form_code": "Kỹ thuật VNeID",
        "name": "Cẩm nang chẩn đoán sự cố dữ liệu và vận hành hệ thống VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID / Tổng đài hỗ trợ 1900.0368",
      "portal_name": "Hướng dẫn kỹ thuật vận hành và khắc phục lỗi",
      "prerequisites": [
        "Thẻ CCCD gắn chip.",
        "Thiết bị di động có kết nối Internet và hỗ trợ NFC (nếu cần xác thực thẻ)."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Xác định mã lỗi cụ thể",
          "action": "Kiểm tra thông báo từ chối trong mục 'Lịch sử yêu cầu' trên VNeID để biết lý do cụ thể."
        },
        {
          "step": 2,
          "title": "Áp dụng giải pháp chuẩn hóa dữ liệu",
          "action": "Chuẩn hóa BKS xe viết liền; đổi bằng lái sang thẻ PET; mở VssID chuẩn hóa mã BHYT."
        },
        {
          "step": 3,
          "title": "Sử dụng NFC khôi phục Passcode/Thiết bị",
          "action": "Bấm 'Quên Passcode' -> Áp thẻ CCCD vào mặt lưng máy để quét chip NFC khôi phục mã mới."
        },
        {
          "step": 4,
          "title": "Liên hệ cơ quan hỗ trợ chuyên trách",
          "action": "Gọi tổng đài hỗ trợ VNeID: 1900.0368 hoặc đến trực tiếp Trụ sở Công an xã Đức Hợp (02213.815.999)."
        }
      ],
      "result_format": "Khắc phục triệt để các lỗi tích hợp, khôi phục tài khoản hoạt động bình thường.",
      "tips": [
        "Vị trí chip NFC trên iPhone nằm ở đỉnh đầu máy; trên điện thoại Android thường nằm ở giữa lưng máy hoặc gần cụm camera.",
        "Khi quét NFC, hãy tháo ốp lưng dày và giữ thẻ cố định trong 3 - 5 giây cho đến khi máy rung báo đọc thành công."
      ]
    }
  },
  {
    "id": "proc_phan_anh_antt",
    "category_id": "kien_nghi_phan_anh",
    "code": "KNPA-VNEID-01",
    "title": "Gửi Kiến nghị, phản ánh về An ninh trật tự (Tố giác tội phạm ẩn danh) qua VNeID",
    "target_audience": "Mọi cá nhân, tổ chức phát hiện hành vi vi phạm pháp luật, tội phạm hoặc nguy cơ mất an ninh trật tự",
    "competent_authority": "Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua VNeID Mức 2 (có chế độ Ẩn danh mã hóa thông tin bảo vệ tuyệt đối người tố giác)",
    "required_documents": [
      "Tài khoản VNeID Mức độ 2.",
      "Thông tin diễn biến vụ việc vi phạm, thời gian, địa điểm xảy ra.",
      "Tệp hình ảnh, video, tài liệu chứng minh hiện trường, tang vật (tối đa 3 tệp tin rõ nét).",
      "Thông tin người bị kiến nghị và người bị hại (nếu nắm rõ)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo yêu cầu phản ánh ANTT",
        "desc": "Đăng nhập VNeID Mức 2 -> Vào 'Dịch vụ khác' -> Chọn 'Tiếp nhận góp ý, phản ánh & vướng mắc' -> Chọn 'Kiến nghị, phản ánh về ANTT' -> Nhấn 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Cấu hình bảo mật danh tính người báo",
        "desc": "Nếu muốn giữ bí mật thông tin cá nhân, tích chọn ô 'Ẩn danh'. Thông tin cá nhân sẽ được hệ thống mã hóa bảo mật tuyệt đối, chỉ phục vụ xác minh nghiệp vụ theo luật bảo vệ người tố giác."
      },
      {
        "step": 3,
        "title": "Khai báo chi tiết vụ việc vi phạm",
        "desc": "Chọn đối tượng vi phạm (Cá nhân/Tổ chức/Chưa xác định). Chọn tối đa 3 hành vi vi phạm (trộm cắp, gây rối trật tự, cờ bạc, ma túy, lừa đảo, vi phạm giao thông,...). Nhập thời gian và địa điểm xảy ra (hệ thống tự điều phối tin báo về Công an xã Đức Hợp)."
      },
      {
        "step": 4,
        "title": "Đính kèm chứng cứ và mô tả nội dung",
        "desc": "Tải lên tối đa 3 tệp hình ảnh/chứng cứ -> Nhập tóm tắt diễn biến sự việc, đặc điểm nhận dạng của đối tượng và thiệt hại ban đầu."
      },
      {
        "step": 5,
        "title": "Cam kết pháp lý và gửi tin báo",
        "desc": "Tích chọn cam đoan chịu trách nhiệm trước pháp luật về nội dung trình báo (chống báo tin giả theo Pháp lệnh 02/2022) -> Nhấn 'Gửi yêu cầu' để chuyển thẳng vào hệ thống trực ban Công an."
      }
    ],
    "processing_time": "Tiếp nhận tức thời 24/7; cán bộ Công an tiến hành xác minh ngay lập tức",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 3410,
    "forms": [
      {
        "id": "f_pa_antt",
        "form_code": "Phản ánh ANTT",
        "name": "Phiếu cung cấp tin báo tội phạm & kiến nghị an ninh trật tự qua VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Dịch vụ khác -> 'Tiếp nhận góp ý, phản ánh & vướng mắc' -> 'Kiến nghị, phản ánh về ANTT'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Thông tin vụ việc có thật, không vu khống, bôi nhọ.",
        "Hình ảnh hoặc tài liệu chứng minh nếu có."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Phản ánh ANTT",
          "action": "Đăng nhập VNeID -> Chọn 'Dịch vụ khác' -> 'Tiếp nhận góp ý, phản ánh' -> Chọn 'Kiến nghị, phản ánh về ANTT'."
        },
        {
          "step": 2,
          "title": "Bật chế độ Ẩn danh (nếu cần)",
          "action": "Bấm 'Tạo mới yêu cầu' -> Tích chọn ô 'Ẩn danh' để bảo mật thông tin cá nhân."
        },
        {
          "step": 3,
          "title": "Mô tả vụ việc và chọn địa bàn xã Đức Hợp",
          "action": "Chọn hành vi vi phạm -> Chọn địa bàn Tỉnh Hưng Yên, Huyện Kim Động, Xã Đức Hợp -> Nhập mô tả vụ việc."
        },
        {
          "step": 4,
          "title": "Đính kèm ảnh và Gửi tin báo",
          "action": "Tải lên ảnh chụp hiện trường/chứng cứ -> Tích cam đoan chịu trách nhiệm -> Bấm 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Tin báo chuyển trực tiếp đến hệ thống máy chủ chỉ huy Công an xã Đức Hợp; kết quả thụ lý hiển thị trong mục Lịch sử yêu cầu.",
      "tips": [
        "Đối với các tình huống khẩn cấp nguy hiểm đến tính mạng (bị đánh, cướp giật, bạo lực gia đình), bên cạnh việc gửi phản ánh, bà con hãy gọi ngay Hotline Trực ban Công an xã Đức Hợp: 02213.815.999 hoặc 113.",
        "Pháp luật bảo vệ tuyệt đối danh tính của công dân khi tham gia phong trào Toàn dân bảo vệ an ninh Tổ quốc."
      ]
    }
  },
  {
    "id": "proc_phan_anh_kiosk",
    "category_id": "kien_nghi_phan_anh",
    "code": "KNPA-VNEID-02",
    "title": "Kiến nghị, phản ánh ANTT tại Trạm Cảnh sát thông minh (Kiosk 24/7) qua VNeID",
    "target_audience": "Công dân có mặt tại hoặc lân cận các Trạm Kiosk Cảnh sát thông minh (Smart Police Station) tại nơi công cộng, đô thị, nhà ga",
    "competent_authority": "Lực lượng Trực ban Kiosk Cảnh sát thông minh & Đội Cảnh sát tuần tra cơ động gần nhất",
    "execution_method": "Trực tuyến qua VNeID Mức 2 (kết nối quét QR trên màn hình Kiosk hoặc định vị GPS)",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Thiết bị di động có bật định vị vị trí GPS và camera quét mã QR."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập tiện ích Kiosk thông minh",
        "desc": "Mở VNeID -> 'Tiếp nhận góp ý, phản ánh' -> Chọn 'Kiến nghị, phản ánh ANTT tại Trạm Cảnh Sát (Kiosk)'."
      },
      {
        "step": 2,
        "title": "Nhận diện Trạm Cảnh sát Kiosk",
        "desc": "Hệ thống tự động gợi ý trạm Kiosk gần nhất qua tọa độ GPS; hoặc Nếu đang đứng tại cabin Kiosk thông minh, dùng camera VNeID quét mã QR trên màn hình Kiosk để liên kết phiên làm việc."
      },
      {
        "step": 3,
        "title": "Nhập nội dung can thiệp khẩn cấp",
        "desc": "Khai báo hành vi cần can thiệp (trộm cắp, gây mất an ninh, tai nạn, hỗ trợ y tế khẩn cấp, tìm người thất lạc) và đính kèm hình ảnh tại khu vực trạm."
      },
      {
        "step": 4,
        "title": "Kích hoạt điều phối tuần tra khẩn cấp",
        "desc": "Xác nhận và bấm 'Gửi yêu cầu'. Cảnh báo tức thì kích hoạt trên hệ thống trực ban Kiosk thông minh và điều phối lực lượng Cảnh sát tuần tra gần nhất đến hiện trường xử lý."
      }
    ],
    "processing_time": "Kích hoạt báo động tức thì; cảnh sát tuần tra có mặt trong 5 đến 10 phút",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 1650,
    "forms": [
      {
        "id": "f_pa_kiosk",
        "form_code": "Smart Kiosk",
        "name": "Yêu cầu hỗ trợ khẩn cấp tại Trạm Cảnh sát thông minh",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2) kết nối Smart Police Station",
      "portal_name": "Tiện ích 'Kiến nghị, phản ánh ANTT tại Trạm Cảnh Sát (Kiosk)'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Bật dịch vụ vị trí GPS trên điện thoại di động."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở chức năng Phản ánh Kiosk",
          "action": "Vào VNeID -> Chọn 'Kiến nghị, phản ánh ANTT tại Trạm Cảnh Sát (Kiosk)'."
        },
        {
          "step": 2,
          "title": "Định vị hoặc Quét mã QR Kiosk",
          "action": "Để máy tự định vị Kiosk gần nhất hoặc quét mã QR hiển thị trên màn hình cabin trạm Kiosk."
        },
        {
          "step": 3,
          "title": "Khai báo sự việc khẩn cấp & Gửi báo động",
          "action": "Chọn sự việc cần trợ giúp khẩn -> Bấm 'Gửi yêu cầu' để kích hoạt lực lượng tuần tra tiếp cận."
        }
      ],
      "result_format": "Xác nhận tiếp nhận tín hiệu khẩn cấp trên màn hình Kiosk và điều phối cán bộ ứng cứu tại chỗ.",
      "tips": [
        "Cabin Kiosk Cảnh sát thông minh hoạt động 24/7, có trang bị nút gọi khẩn cấp SOS và camera AI bảo vệ người dân trong mọi tình huống."
      ]
    }
  },
  {
    "id": "proc_phan_anh_giam_sat_dang",
    "category_id": "kien_nghi_phan_anh",
    "code": "KNPA-VNEID-03",
    "title": "Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng qua ứng dụng VNeID",
    "target_audience": "Cán bộ, đảng viên và Nhân dân có thông tin phản ánh về dấu hiệu vi phạm Điều lệ Đảng, suy thoái tư tưởng chính trị, tham nhũng, lãng phí",
    "competent_authority": "Ủy ban Kiểm tra các cấp (từ Trung ương, Tỉnh ủy, Huyện ủy đến Đảng ủy cơ sở)",
    "execution_method": "Trực tuyến qua VNeID Mức 2 (lựa chọn gửi công khai hoặc ẩn danh bảo mật)",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Thông tin đối tượng bị phản ánh: Họ tên cá nhân cán bộ, đảng viên (chức vụ, đơn vị công tác) hoặc tên tổ chức cơ sở Đảng.",
      "Tóm tắt nội dung, bản chất hành vi vi phạm, thời gian, địa điểm phát sinh sự việc.",
      "Tệp tài liệu chứng minh, hình ảnh, văn bản số hóa kèm theo (nếu có)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Khởi tạo yêu cầu giám sát của Đảng",
        "desc": "Mở VNeID -> 'Tiếp nhận góp ý, phản ánh' -> Chọn 'Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng' -> Nhấn 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Cung cấp thông tin người gửi",
        "desc": "Lựa chọn gửi có danh tính hoặc tích chọn 'Ẩn danh' nhằm bảo đảm tuyệt đối tính bí mật và an toàn cho người phản ánh theo quy định bảo vệ người tố giác."
      },
      {
        "step": 3,
        "title": "Xác định cơ quan tiếp nhận",
        "desc": "Lựa chọn cấp ủy hoặc Ủy ban Kiểm tra phụ trách thẩm quyền giải quyết (Ủy ban Kiểm tra Trung ương, Tỉnh ủy, Huyện ủy hoặc Đảng ủy cơ sở)."
      },
      {
        "step": 4,
        "title": "Kê khai đối tượng và nội dung phản ánh",
        "desc": "Nêu rõ họ tên cán bộ, đảng viên (chức vụ, nơi công tác) hoặc tổ chức Đảng có dấu hiệu vi phạm. Tóm tắt nội dung sự việc, thời gian, địa điểm và tải lên tài liệu chứng minh."
      },
      {
        "step": 5,
        "title": "Cam đoan khách quan và gửi hồ sơ",
        "desc": "Tích cam đoan thông tin khách quan, đúng sự thật, không mang tính chất vu khống, bôi nhọ -> Nhấn 'Gửi yêu cầu' để chuyển bảo mật đến bộ phận nghiệp vụ của UBKT có thẩm quyền."
      }
    ],
    "processing_time": "Phân phối bảo mật trực tiếp đến UBKT có thẩm quyền xem xét xử lý theo quy định của Đảng",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2890,
    "forms": [
      {
        "id": "f_pa_ktgs",
        "form_code": "Kiểm tra Đảng",
        "name": "Phiếu phản ánh thông tin kiểm tra, giám sát của Đảng qua VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Tiện ích 'Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Thông tin phản ánh có cơ sở, khách quan, trung thực.",
        "Tài liệu chứng minh kèm theo nếu có."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào chức năng Giám sát của Đảng",
          "action": "Mở VNeID -> Chọn 'Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng' -> Bấm 'Tạo mới yêu cầu'."
        },
        {
          "step": 2,
          "title": "Chọn chế độ Ẩn danh & Chọn cơ quan UBKT",
          "action": "Tích chọn Ẩn danh nếu muốn bảo mật -> Chọn Ủy ban Kiểm tra tiếp nhận xử lý."
        },
        {
          "step": 3,
          "title": "Khai báo đối tượng & Nội dung vi phạm",
          "action": "Ghi rõ tên, chức vụ cán bộ đảng viên vi phạm -> Tóm tắt diễn biến và tải tài liệu chứng cứ."
        },
        {
          "step": 4,
          "title": "Gửi phản ánh",
          "action": "Tích cam kết trung thực, không vu khống -> Nhấn 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Hồ sơ được mã hóa và chuyển phát bảo mật vào hệ thống xử lý đơn thư của Ủy ban Kiểm tra phụ trách.",
      "tips": [
        "Kênh giám sát giúp phát huy quyền làm chủ của Nhân dân trong công tác xây dựng, chỉnh đốn Đảng, phòng chống tiêu cực, tham nhũng, lãng phí."
      ]
    }
  },
  {
    "id": "proc_phan_anh_sai_lech_du_lieu",
    "category_id": "kien_nghi_phan_anh",
    "code": "KNPA-VNEID-04",
    "title": "Gửi Phản ánh khó khăn, vướng mắc & Hiệu chỉnh sai lệch dữ liệu dân cư trên VNeID",
    "target_audience": "Công dân phát hiện thông tin nhân thân, cư trú, hoặc tích hợp giấy tờ bị sai lệch so với giấy tờ gốc",
    "competent_authority": "Cảnh sát khu vực / Công an xã Đức Hợp nơi công dân thường trú",
    "execution_method": "Trực tuyến qua ứng dụng VNeID Mức 2 (kèm ảnh chụp giấy tờ gốc làm căn cứ pháp lý)",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2.",
      "Ảnh chụp rõ nét giấy tờ chứng minh thông tin chuẩn xác: Thẻ Căn cước/CCCD, Giấy khai sinh, Sổ hộ khẩu cũ, hoặc Giấy chứng nhận quyền sở hữu nhà đất.",
      "Mô tả cụ thể thông tin đang hiển thị sai và thông tin đúng cần cập nhật."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn chức năng Phản ánh khó khăn, vướng mắc",
        "desc": "Tại màn hình VNeID, chọn 'Phản ánh khó khăn, vướng mắc' (hoặc truy cập qua mục Cài đặt) -> Chọn 'Tạo phản ánh'."
      },
      {
        "step": 2,
        "title": "Phân loại đối tượng và tính chất sự việc",
        "desc": "Loại phản ánh: Chọn 'Sai dữ liệu' (thông tin cá nhân, cư trú sai) hoặc 'Lỗi hệ thống / Dịch vụ công'. Chọn nhóm lĩnh vực cần sửa đổi: 'Thông tin cư trú', 'Thông tin nhân thân', 'Tích hợp giấy tờ',..."
      },
      {
        "step": 3,
        "title": "Nhập mô tả nội dung sai lệch chi tiết",
        "desc": "Nêu cụ thể thông tin hiện đang hiển thị sai (ví dụ: sai số nhà, tên thôn xóm, sai năm sinh, thiếu ngày tháng sinh) và cung cấp thông tin chuẩn xác đề nghị cơ quan Công an hiệu chỉnh cập nhật lại trên hệ thống."
      },
      {
        "step": 4,
        "title": "Tải lên hồ sơ, giấy tờ chứng minh",
        "desc": "Đính kèm ảnh chụp rõ nét của thẻ CCCD/Căn cước, Giấy khai sinh, Sổ hộ khẩu giấy cũ hoặc Giấy chứng nhận nhà đất có đóng dấu đỏ để làm căn cứ pháp lý đối chiếu."
      },
      {
        "step": 5,
        "title": "Cam đoan và gửi phản ánh",
        "desc": "Tích chọn cam đoan thông tin khai báo hoàn toàn chính xác -> Bấm 'Gửi phản ánh'. Cán bộ Cảnh sát khu vực Công an xã Đức Hợp sẽ kiểm tra kho lưu trữ và duyệt điều chỉnh dữ liệu chuẩn hóa từ 1 đến 3 ngày làm việc."
      }
    ],
    "processing_time": "Thẩm định kho hồ sơ dân cư và cập nhật làm sạch dữ liệu từ 01 đến 03 ngày làm việc",
    "fee": "Hoàn toàn miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 3780,
    "forms": [
      {
        "id": "f_pa_vm",
        "form_code": "Hiệu chỉnh dữ liệu",
        "name": "Phiếu đề nghị hiệu chỉnh, làm sạch dữ liệu nhân thân và cư trú trên VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Phản ánh khó khăn, vướng mắc' trên VNeID",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Có giấy tờ gốc bản cứng rõ ràng chứng minh thông tin đúng (Giấy khai sinh, CCCD, Sổ hộ khẩu)."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Phản ánh khó khăn vướng mắc",
          "action": "Mở VNeID -> Chọn 'Phản ánh khó khăn, vướng mắc' -> Bấm 'Tạo phản ánh'."
        },
        {
          "step": 2,
          "title": "Chọn loại 'Sai dữ liệu' & Nhóm lĩnh vực",
          "action": "Chọn 'Sai dữ liệu' -> Chọn 'Thông tin cư trú' hoặc 'Thông tin nhân thân'."
        },
        {
          "step": 3,
          "title": "Ghi rõ nội dung sai và thông tin đúng",
          "action": "Mô tả chi tiết: 'Hiện trên VNeID hiển thị sai địa chỉ thôn X, đề nghị sửa lại thành thôn Nho Lâm, xã Đức Hợp'."
        },
        {
          "step": 4,
          "title": "Chụp ảnh giấy tờ chứng minh & Gửi",
          "action": "Chụp ảnh Căn cước/Giấy tờ nhà đất tải lên -> Tích cam kết -> Bấm 'Gửi phản ánh'."
        }
      ],
      "result_format": "Cán bộ Công an xã Đức Hợp phê duyệt làm sạch trên phần mềm dân cư, dữ liệu chuẩn hóa tự động cập nhật lại trên VNeID.",
      "tips": [
        "Cảnh giác: Lực lượng Công an xã Đức Hợp xử lý hiệu chỉnh trực tiếp trên hệ thống hoặc mời bà con đến trụ sở thôn Nho Lâm, TUYỆT ĐỐI KHÔNG gọi điện gửi link bắt tải file lạ (.apk) để sửa dữ liệu."
      ]
    }
  }
];

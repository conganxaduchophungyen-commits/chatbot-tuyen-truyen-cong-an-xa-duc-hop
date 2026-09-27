import { Procedure } from './api';

export const FULL_30_PROCEDURES: Procedure[] = [
  {
    "id": "proc_thong_bao_luu_tru",
    "category_id": "cu_tru",
    "code": "TTHC-VNEID-01",
    "title": "Thông báo lưu trú trên ứng dụng VNeID",
    "target_audience": "Công dân, hộ gia đình, cơ sở lưu trú du lịch, nhà trọ, ký túc xá có người đến lưu trú tại xã Đức Hợp",
    "competent_authority": "Công an xã Đức Hợp, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến qua ứng dụng VNeID (Mức 2) hoặc Cổng Dịch vụ công Quản lý Cư trú",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2 của người thông báo (chủ nhà/đại diện cơ sở lưu trú).",
      "Số định danh cá nhân / Thẻ CCCD hoặc mã QR trên CCCD của người đến lưu trú.",
      "Thông tin thời gian dự kiến lưu trú (ngày bắt đầu, ngày kết thúc) và lý do lưu trú."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Đăng nhập VNeID",
        "desc": "Mở ứng dụng VNeID -> Đăng nhập tài khoản Mức 2 bằng mật khẩu hoặc sinh trắc học (vân tay/Face ID)."
      },
      {
        "step": 2,
        "title": "Chọn chức năng Thông báo lưu trú",
        "desc": "Tại màn hình chính, vào mục 'Thủ tục hành chính' -> Chọn 'Thông báo lưu trú'."
      },
      {
        "step": 3,
        "title": "Chọn Cơ quan Công an tiếp nhận",
        "desc": "Chọn Công an tỉnh Hưng Yên -> Công an huyện Kim Động -> Công an xã Đức Hợp."
      },
      {
        "step": 4,
        "title": "Chọn loại hình và Tạo yêu cầu",
        "desc": "Chọn loại hình cơ sở lưu trú (Hộ gia đình, Nhà trọ, Cơ sở lưu trú du lịch,...) -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 5,
        "title": "Nhập thông tin người lưu trú",
        "desc": "Quét mã QR trên CCCD của khách hoặc nhập trực tiếp số định danh 12 số -> Điền thời gian và lý do lưu trú."
      },
      {
        "step": 6,
        "title": "Kiểm tra và Gửi yêu cầu",
        "desc": "Rà soát lại toàn bộ thông tin đã nhập -> Bấm 'Gửi yêu cầu' để chuyển dữ liệu đến Công an xã Đức Hợp."
      }
    ],
    "processing_time": "Tiếp nhận ngay lập tức qua hệ thống phần mềm nghiệp vụ cư trú",
    "fee": "Miễn phí",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1450,
    "forms": [
      {
        "id": "f_ct01_lt",
        "form_code": "Thông báo lưu trú VNeID",
        "name": "Phiếu khai báo thông tin lưu trú điện tử trên ứng dụng VNeID",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.bocongan.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Thông báo lưu trú'",
      "prerequisites": [
        "Tài khoản VNeID đã được kích hoạt ở Mức độ 2 (xác thực sinh trắc học tại Công an).",
        "Thiết bị di động có kết nối Internet ổn định.",
        "Thông tin CCCD/Mã định danh của người cần thông báo lưu trú."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Đăng nhập ứng dụng VNeID",
          "action": "Đăng nhập VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Thông báo lưu trú'."
        },
        {
          "step": 2,
          "title": "Chọn Cơ quan công an cấp xã",
          "action": "Chọn Công an tỉnh Hưng Yên -> Huyện Kim Động -> Công an xã Đức Hợp nơi đặt cơ sở lưu trú."
        },
        {
          "step": 3,
          "title": "Chọn Loại hình cơ sở lưu trú",
          "action": "Chọn Cơ sở lưu trú du lịch, Ký túc xá, Nhà trọ, hoặc Hộ gia đình."
        },
        {
          "step": 4,
          "title": "Tạo mới yêu cầu & Thêm người lưu trú",
          "action": "Chọn 'Tạo mới yêu cầu' -> Thêm thông tin người lưu trú (Quét mã QR trên CCCD của khách hoặc nhập số định danh)."
        },
        {
          "step": 5,
          "title": "Điền thông tin và Gửi hồ sơ",
          "action": "Điền thông tin thời gian lưu trú, lý do lưu trú -> Kiểm tra thông tin -> Bấm 'Gửi yêu cầu'."
        }
      ],
      "result_format": "Thông báo tiếp nhận thành công kèm mã hồ sơ điện tử hiển thị trong mục Lịch sử xử lý hồ sơ trên VNeID.",
      "tips": [
        "Thời hạn thông báo: Thực hiện trước 23 giờ của ngày đến lưu trú (nếu đến sau 23h thì thông báo trước 08 giờ ngày hôm sau).",
        "Quét mã QR trên mặt thẻ CCCD của khách giúp điền dữ liệu tự động chỉ mất 5 giây, chính xác tuyệt đối."
      ]
    }
  },
  {
    "id": "proc_dang_ky_thuong_tru",
    "category_id": "cu_tru",
    "code": "TTHC-VNEID-02",
    "title": "Đăng ký thường trú trực tuyến trên VNeID",
    "target_audience": "Công dân Việt Nam có chỗ ở hợp pháp chuyển đến sinh sống tại xã Đức Hợp",
    "competent_authority": "Công an xã Đức Hợp, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến trên ứng dụng VNeID hoặc Cổng Dịch vụ công Bộ Công an",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú (Mẫu điện tử điền trực tiếp trên VNeID).",
      "Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp (Ảnh chụp/bản quét Sổ đỏ, Hợp đồng mua bán nhà đất, Hợp đồng thuê nhà hợp pháp).",
      "Văn bản đồng ý của chủ hộ, chủ sở hữu chỗ ở hợp pháp (nếu chuyển đến cùng hộ gia đình hoặc nhập hộ vào người khác)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Vào mục Đăng ký thường trú",
        "desc": "Mở VNeID Mức 2 -> Vào 'Thủ tục hành chính' -> Chọn 'Đăng ký thường trú'."
      },
      {
        "step": 2,
        "title": "Chọn Cơ quan thực hiện",
        "desc": "Chọn Tỉnh Hưng Yên -> Huyện Kim Động -> Xã Đức Hợp."
      },
      {
        "step": 3,
        "title": "Chọn Trường hợp đăng ký",
        "desc": "Chọn trường hợp phù hợp: Nhân khẩu từ chỗ ở hợp pháp khác chuyển đến, chuyển đến cùng hộ gia đình,..."
      },
      {
        "step": 4,
        "title": "Khai báo thông tin chỗ ở",
        "desc": "Điền đầy đủ thông tin người khai báo, địa chỉ cụ thể của chỗ ở hợp pháp tại xã Đức Hợp."
      },
      {
        "step": 5,
        "title": "Đính kèm giấy tờ chứng minh",
        "desc": "Tải lên ảnh chụp bản chính hoặc file PDF rõ nét các tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua/thuê, ý kiến chủ hộ)."
      },
      {
        "step": 6,
        "title": "Gửi hồ sơ và Nhận kết quả",
        "desc": "Chọn hình thức nhận kết quả (Qua VNeID hoặc Cổng DVC) -> Bấm 'Gửi hồ sơ'. Theo dõi tiến độ trong Lịch sử xử lý."
      }
    ],
    "processing_time": "07 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
    "fee": "10.000 VNĐ (Nộp trực tuyến) / 20.000 VNĐ (Trực tiếp)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1820,
    "forms": [
      {
        "id": "f_ct01_tt",
        "form_code": "Mẫu CT01",
        "name": "Tờ khai thay đổi thông tin cư trú điện tử",
        "file_url": "https://dichvucong.bocongan.gov.vn",
        "guide_url": "https://vneid.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2) & Cổng DVC Bộ Công an",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Đăng ký thường trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 đã kích hoạt.",
        "File ảnh chụp/PDF bản chính giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng thuê nhà).",
        "Ý kiến đồng ý của chủ sở hữu chỗ ở hợp pháp."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn Đăng ký thường trú",
          "action": "Tại mục 'Thủ tục hành chính', chọn 'Đăng ký thường trú'."
        },
        {
          "step": 2,
          "title": "Chọn cơ quan giải quyết",
          "action": "Chọn Công an tỉnh Hưng Yên -> Huyện Kim Động -> Công an xã Đức Hợp."
        },
        {
          "step": 3,
          "title": "Chọn trường hợp đăng ký",
          "action": "Chọn trường hợp đăng ký (nhập hộ, chỗ ở mới thuộc quyền sở hữu,...)."
        },
        {
          "step": 4,
          "title": "Điền thông tin tờ khai",
          "action": "Điền đầy đủ thông tin người khai báo, thông tin chỗ ở hợp pháp."
        },
        {
          "step": 5,
          "title": "Tải lên hồ sơ đính kèm",
          "action": "Tải lên ảnh chụp/file tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng thuê nhà, Giấy đồng ý của chủ hộ,...)."
        },
        {
          "step": 6,
          "title": "Gửi hồ sơ & Theo dõi",
          "action": "Chọn hình thức nhận kết quả -> Bấm 'Gửi hồ sơ' và thanh toán lệ phí trực tuyến."
        }
      ],
      "result_format": "Thông báo kết quả giải quyết cư trú (Mẫu CT08 điện tử) tích hợp thẳng vào tài khoản VNeID.",
      "tips": [
        "Chụp ảnh tài liệu chứng minh chỗ ở trên mặt phẳng sáng, vuông góc, không bị lóa sáng hay mờ mép.",
        "Kiểm tra lại số điện thoại và địa chỉ email nhận thông báo cập nhật tình trạng hồ sơ."
      ]
    }
  },
  {
    "id": "proc_dang_ky_tam_tru",
    "category_id": "cu_tru",
    "code": "TTHC-VNEID-03",
    "title": "Đăng ký tạm trú trực tuyến trên VNeID",
    "target_audience": "Công dân đến sinh sống tại chỗ ở hợp pháp ngoài nơi thường trú từ 30 ngày trở lên tại xã Đức Hợp",
    "competent_authority": "Công an xã Đức Hợp, tỉnh Hưng Yên",
    "execution_method": "Trực tuyến trên ứng dụng VNeID (Mức 2) hoặc Cổng Dịch vụ công Bộ Công an",
    "required_documents": [
      "Tờ khai thay đổi thông tin cư trú (điền trực tuyến trên ứng dụng).",
      "Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp tạm trú (Hợp đồng thuê nhà, hợp đồng mượn nhà, cam kết của chủ hộ).",
      "Văn bản đồng ý cho đăng ký tạm trú của chủ hộ hoặc chủ sở hữu chỗ ở."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập Đăng ký tạm trú",
        "desc": "Mở VNeID -> Vào 'Thủ tục hành chính' -> Chọn 'Đăng ký tạm trú'."
      },
      {
        "step": 2,
        "title": "Chọn Cơ quan thực hiện",
        "desc": "Chọn Công an tỉnh Hưng Yên -> Huyện Kim Động -> Công an xã Đức Hợp."
      },
      {
        "step": 3,
        "title": "Khai báo trường hợp và thời hạn",
        "desc": "Chọn đăng ký cho bản thân hoặc cả hộ; nhập thời hạn tạm trú (tối đa 02 năm/lần)."
      },
      {
        "step": 4,
        "title": "Đính kèm hợp đồng thuê chỗ ở",
        "desc": "Tải lên ảnh chụp Hợp đồng thuê nhà trọ/nhà ở hoặc văn bản đồng ý của chủ nhà tại xã Đức Hợp."
      },
      {
        "step": 5,
        "title": "Gửi hồ sơ trực tuyến",
        "desc": "Kiểm tra thông tin tờ khai -> Bấm 'Gửi hồ sơ' -> Nhận mã tiếp nhận."
      }
    ],
    "processing_time": "03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
    "fee": "7.000 VNĐ (Nộp trực tuyến) / 15.000 VNĐ (Trực tiếp)",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 1290,
    "forms": [
      {
        "id": "f_ct01_tat",
        "form_code": "Mẫu CT01",
        "name": "Tờ khai thay đổi thông tin cư trú đăng ký tạm trú",
        "file_url": "https://dichvucong.bocongan.gov.vn",
        "guide_url": "https://vneid.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Đăng ký tạm trú'",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "Ảnh chụp Hợp đồng thuê nhà / Giấy tờ bảo lãnh chỗ ở hợp pháp tại xã Đức Hợp."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở mục Đăng ký tạm trú",
          "action": "Vào VNeID -> 'Thủ tục hành chính' -> Chọn 'Đăng ký tạm trú'."
        },
        {
          "step": 2,
          "title": "Chọn cơ quan tiếp nhận",
          "action": "Chọn Công an tỉnh Hưng Yên -> Huyện Kim Động -> Công an xã Đức Hợp."
        },
        {
          "step": 3,
          "title": "Nhập thông tin tạm trú",
          "action": "Khai báo thông tin cá nhân, thời hạn tạm trú dự kiến."
        },
        {
          "step": 4,
          "title": "Đính kèm giấy tờ chứng minh",
          "action": "Tải lên ảnh hợp đồng thuê nhà hoặc giấy đồng ý của chủ hộ."
        },
        {
          "step": 5,
          "title": "Ký nộp hồ sơ",
          "action": "Kiểm tra thông tin -> Bấm 'Gửi hồ sơ' và nộp phí trực tuyến."
        }
      ],
      "result_format": "Thông báo kết quả giải quyết tạm trú hiển thị trực tiếp trên VNeID và tích hợp vào dữ liệu cư trú cá nhân.",
      "tips": [
        "Đăng ký tạm trú trong thời hạn 30 ngày kể từ ngày đến chỗ ở mới để tránh bị xử phạt vi phạm hành chính.",
        "Hết thời hạn tạm trú, công dân có thể làm thủ tục Gia hạn tạm trú trực tuyến ngay trên VNeID."
      ]
    }
  },
  {
    "id": "proc_ly_lich_tu_phap",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-VNEID-04",
    "title": "Cấp Phiếu lý lịch tư pháp trực tuyến trên VNeID",
    "target_audience": "Công dân Việt Nam thường trú hoặc tạm trú có tài khoản VNeID Mức độ 2",
    "competent_authority": "Sở Tư pháp tỉnh Hưng Yên (liên thông tiếp nhận qua VNeID)",
    "execution_method": "Trực tuyến 100% trên ứng dụng VNeID, nhận kết quả điện tử hoặc bản giấy qua bưu điện",
    "required_documents": [
      "Tài khoản VNeID Mức độ 2 của người yêu cầu cấp phiếu.",
      "Thông tin quá trình cư trú, học tập, công tác (hệ thống tự động điền phần lớn từ dữ liệu dân cư).",
      "Giấy tờ chứng minh thuộc đối tượng miễn/giảm lệ phí (nếu là người có công, hộ nghèo, thân nhân liệt sĩ)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Đăng nhập VNeID",
        "desc": "Mở VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Cấp Phiếu lý lịch tư pháp'."
      },
      {
        "step": 2,
        "title": "Tạo mới yêu cầu",
        "desc": "Bấm 'Tạo mới yêu cầu' để bắt đầu quy trình kê khai."
      },
      {
        "step": 3,
        "title": "Khai báo thông tin hồ sơ",
        "desc": "Chọn đối tượng (Bản thân hoặc Ủy quyền) -> Chọn loại Phiếu (Mẫu số 1 hoặc Mẫu số 2) -> Khai báo quá trình cư trú."
      },
      {
        "step": 4,
        "title": "Tải giấy tờ miễn giảm phí (nếu có)",
        "desc": "Đính kèm giấy tờ chứng minh đối tượng chính sách nếu yêu cầu miễn hoặc giảm 50% lệ phí."
      },
      {
        "step": 5,
        "title": "Thanh toán lệ phí trực tuyến",
        "desc": "Thanh toán lệ phí trực tiếp trên ứng dụng qua ngân hàng hoặc ví điện tử liên kết."
      },
      {
        "step": 6,
        "title": "Nhận kết quả điện tử/bản giấy",
        "desc": "Theo dõi trạng thái và nhận Phiếu LLTP bản điện tử trên VNeID hoặc nhận bản giấy gửi về qua bưu điện."
      }
    ],
    "processing_time": "Không quá 10 ngày làm việc kể từ ngày nhận đủ hồ sơ và lệ phí hợp lệ",
    "fee": "200.000 VNĐ/lần cấp (Học sinh, sinh viên, người có công: 100.000 VNĐ; Hộ nghèo: Miễn phí)",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2150,
    "forms": [
      {
        "id": "f_lltp_vneid",
        "form_code": "Tờ khai LLTP VNeID",
        "name": "Tờ khai yêu cầu cấp Phiếu lý lịch tư pháp điện tử",
        "file_url": "https://vneid.gov.vn",
        "guide_url": "https://dichvucong.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Cấp Phiếu lý lịch tư pháp'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 kích hoạt thành công.",
        "Tài khoản ngân hàng hoặc ví điện tử để thanh toán lệ phí trực tuyến."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn Cấp Phiếu lý lịch tư pháp",
          "action": "Đăng nhập VNeID -> Chọn 'Thủ tục hành chính' -> Chọn 'Cấp Phiếu lý lịch tư pháp'."
        },
        {
          "step": 2,
          "title": "Tạo mới yêu cầu",
          "action": "Bấm 'Tạo mới yêu cầu'."
        },
        {
          "step": 3,
          "title": "Khai báo thông tin",
          "action": "Chọn đối tượng yêu cầu (Bản thân hoặc Ủy quyền) -> Chọn loại Phiếu LLTP (Mẫu số 1 hoặc Mẫu số 2) -> Điền thông tin quá trình cư trú."
        },
        {
          "step": 4,
          "title": "Tải giấy tờ đính kèm",
          "action": "Tải lên các giấy tờ kèm theo (nếu thuộc đối tượng miễn/giảm phí)."
        },
        {
          "step": 5,
          "title": "Thanh toán lệ phí",
          "action": "Thanh toán trực tuyến trên ứng dụng qua cổng thanh toán bảo mật."
        },
        {
          "step": 6,
          "title": "Nhận kết quả",
          "action": "Theo dõi trạng thái xử lý và nhận kết quả bản điện tử trên ứng dụng hoặc đăng ký nhận bản giấy qua bưu điện."
        }
      ],
      "result_format": "Bản điện tử Phiếu lý lịch tư pháp (file PDF có chữ ký số chuyên dùng) tích hợp trực tiếp vào Ví giấy tờ trên VNeID có giá trị pháp lý tương đương bản giấy.",
      "tips": [
        "Phiếu LLTP điện tử có thể sử dụng nộp hồ sơ xin việc, hồ sơ du học, cấp phép hành nghề mà không cần đi lại công chứng.",
        "Nếu cần bản giấy có đóng dấu mộc đỏ, chọn nhận qua dịch vụ bưu chính công ích và điền chính xác địa chỉ nhận tại nhà."
      ]
    }
  },
  {
    "id": "proc_lien_thong_khai_sinh",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-VNEID-05",
    "title": "Liên thông Đăng ký Khai sinh - Thường trú - Cấp thẻ BHYT cho trẻ dưới 6 tuổi",
    "target_audience": "Cha, mẹ, người giám hộ của trẻ em mới sinh có nơi thường trú tại xã Đức Hợp",
    "competent_authority": "UBND xã Đức Hợp (Tư pháp), Công an xã Đức Hợp (Cư trú) & BHXH huyện Kim Động",
    "execution_method": "Trực tuyến 100% trên VNeID hoặc Cổng Dịch vụ công Quốc gia",
    "required_documents": [
      "Giấy chứng sinh do cơ sở khám bệnh, chữa bệnh cấp (bản điện tử hoặc ảnh chụp bản giấy rõ nét).",
      "Tài khoản VNeID Mức 2 của cha hoặc mẹ.",
      "Thông tin chỗ ở hợp pháp để đăng ký thường trú cho trẻ (đăng ký theo cha hoặc mẹ)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Chọn nhóm Dịch vụ công liên thông",
        "desc": "Tại trang chủ VNeID, chọn 'Dịch vụ công liên thông' -> Chọn 'Đăng ký khai sinh - Đăng ký thường trú - Cấp thẻ BHYT cho trẻ dưới 6 tuổi'."
      },
      {
        "step": 2,
        "title": "Hệ thống liên thông DVC Quốc gia",
        "desc": "Hệ thống tự động liên thông với Cổng DVC Quốc gia thông qua cơ chế đăng nhập tài khoản định danh VNeID."
      },
      {
        "step": 3,
        "title": "Điền tờ khai trực tuyến liên thông",
        "desc": "Khai báo thông tin trẻ em (Họ tên, ngày sinh, giới tính, dân tộc); thông tin cha mẹ; thông tin đăng ký thường trú; chọn cơ sở KCB ban đầu làm thẻ BHYT."
      },
      {
        "step": 4,
        "title": "Tải lên Giấy chứng sinh",
        "desc": "Tải lên Giấy chứng sinh (bản điện tử có ký số hoặc ảnh chụp bản giấy rõ nét 4 góc)."
      },
      {
        "step": 5,
        "title": "Kiểm tra, ký số và gửi hồ sơ",
        "desc": "Kiểm tra kỹ thông tin -> Ký số / xác nhận gửi hồ sơ liên thông. Cả 3 cơ quan (Tư pháp xã, Công an xã, BHXH) sẽ thụ lý đồng thời."
      }
    ],
    "processing_time": "Tối đa 03 ngày làm việc kể từ ngày nhận đủ hồ sơ điện tử hợp lệ",
    "fee": "Miễn phí toàn bộ",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 2400,
    "forms": [
      {
        "id": "f_lien_thong_ks",
        "form_code": "Tờ khai liên thông",
        "name": "Tờ khai điện tử liên thông Khai sinh - Thường trú - BHYT",
        "file_url": "https://dichvucong.gov.vn",
        "guide_url": "https://vneid.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID & Cổng DVC Quốc gia",
      "portal_name": "Mục 'Dịch vụ công liên thông' trên VNeID",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2 của cha hoặc mẹ.",
        "Giấy chứng sinh do Bệnh viện/Trạm y tế cấp (bản điện tử hoặc ảnh chụp bản giấy)."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn dịch vụ công liên thông",
          "action": "Tại trang chủ VNeID, chọn 'Dịch vụ công liên thông' -> Chọn nhóm 'Đăng ký khai sinh - Đăng ký thường trú - Cấp thẻ BHYT cho trẻ dưới 6 tuổi'."
        },
        {
          "step": 2,
          "title": "Liên thông xác thực",
          "action": "Hệ thống tự động chuyển tiếp/liên thông với Cổng Dịch vụ công Quốc gia qua cơ chế đăng nhập VNeID."
        },
        {
          "step": 3,
          "title": "Điền thông tin tờ khai trực tuyến",
          "action": "Điền thông tin trẻ em; thông tin cha/mẹ; thông tin đăng ký thường trú; thông tin cơ sở khám chữa bệnh ban đầu để làm thẻ BHYT."
        },
        {
          "step": 4,
          "title": "Tải lên Giấy chứng sinh",
          "action": "Tải lên Giấy chứng sinh (bản điện tử hoặc ảnh chụp bản giấy rõ nét)."
        },
        {
          "step": 5,
          "title": "Gửi hồ sơ hoàn tất",
          "action": "Kiểm tra và ký số / gửi hồ sơ trực tuyến."
        }
      ],
      "result_format": "Nhận Giấy khai sinh bản điện tử, kết quả thông báo thường trú trên VNeID và Thẻ BHYT điện tử cho trẻ dưới 6 tuổi.",
      "tips": [
        "Chỉ cần 1 lần nộp hồ sơ duy nhất trên VNeID, giải quyết trọn gói cả 3 thủ tục giúp cha mẹ tiết kiệm nhiều ngày đi lại.",
        "Thông tin thường trú của trẻ sẽ được cập nhật đồng bộ vào Cơ sở dữ liệu quốc gia về dân cư."
      ]
    }
  },
  {
    "id": "proc_lien_thong_khai_tu",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-VNEID-06",
    "title": "Liên thông Đăng ký Khai tử - Xóa thường trú - Trợ cấp mai táng",
    "target_audience": "Thân nhân, người đại diện gia đình có người qua đời có nơi thường trú tại xã Đức Hợp",
    "competent_authority": "UBND xã Đức Hợp, Công an xã Đức Hợp và BHXH huyện Kim Động",
    "execution_method": "Trực tuyến liên thông trên VNeID hoặc Cổng Dịch vụ công Quốc gia",
    "required_documents": [
      "Giấy báo tử hoặc giấy tờ thay thế Giấy báo tử do cơ sở y tế/cơ quan có thẩm quyền cấp.",
      "Tài khoản VNeID Mức 2 của người thực hiện kê khai.",
      "Thông tin về người qua đời để xóa đăng ký thường trú và hồ sơ hưởng trợ cấp mai táng (nếu người mất có tham gia BHXH/hưởng lương hưu)."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Vào nhóm DVC Liên thông",
        "desc": "Mở VNeID -> Chọn 'Dịch vụ công liên thông' -> Chọn 'Đăng ký khai tử - Xóa đăng ký thường trú - Trợ cấp mai táng'."
      },
      {
        "step": 2,
        "title": "Điền thông tin người qua đời",
        "desc": "Khai báo số định danh, ngày mất, nguyên nhân mất theo Giấy báo tử."
      },
      {
        "step": 3,
        "title": "Tải lên Giấy báo tử",
        "desc": "Chụp ảnh bản chính Giấy báo tử do cơ sở y tế hoặc UBND cấp."
      },
      {
        "step": 4,
        "title": "Xác nhận xóa thường trú và BHXH",
        "desc": "Hệ thống tự động liên kết yêu cầu xóa thường trú gửi Công an xã Đức Hợp và đề nghị trợ cấp mai táng gửi cơ quan BHXH."
      },
      {
        "step": 5,
        "title": "Ký số và Gửi hồ sơ",
        "desc": "Xác nhận gửi hồ sơ và theo dõi tiến độ xử lý liên ngành trên ứng dụng."
      }
    ],
    "processing_time": "Tối đa 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
    "fee": "Miễn phí",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 1120,
    "forms": [
      {
        "id": "f_lien_thong_kt",
        "form_code": "Tờ khai liên thông khai tử",
        "name": "Tờ khai điện tử liên thông Khai tử - Xóa thường trú - Mai táng phí",
        "file_url": "https://dichvucong.gov.vn",
        "guide_url": "https://vneid.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID & Cổng DVC Quốc gia",
      "portal_name": "Mục 'Dịch vụ công liên thông' trên VNeID",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2 của thân nhân người qua đời.",
        "Giấy báo tử do cơ sở y tế cấp hoặc văn bản xác nhận của chính quyền địa phương."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn dịch vụ liên thông khai tử",
          "action": "Mở VNeID -> Chọn 'Dịch vụ công liên thông' -> Chọn nhóm 'Đăng ký khai tử - Xóa đăng ký thường trú - Giải quyết mai táng phí'."
        },
        {
          "step": 2,
          "title": "Khai báo thông tin người chết",
          "action": "Nhập thông tin cá nhân của người đã mất, đính kèm ảnh Giấy báo tử."
        },
        {
          "step": 3,
          "title": "Khai báo xóa thường trú",
          "action": "Xác nhận nơi thường trú cần xóa tại Công an xã Đức Hợp."
        },
        {
          "step": 4,
          "title": "Khai báo nhận mai táng phí",
          "action": "Chọn thông tin tài khoản ngân hàng nhận tiền trợ cấp mai táng từ BHXH."
        },
        {
          "step": 5,
          "title": "Gửi hồ sơ trực tuyến",
          "action": "Ký số và gửi toàn bộ hồ sơ qua hệ thống liên thông."
        }
      ],
      "result_format": "Bản trích lục khai tử điện tử, thông báo xóa đăng ký thường trú trên VNeID và quyết định chi trả trợ cấp mai táng.",
      "tips": [
        "Gia đình thực hiện thủ tục khai tử trong thời hạn 15 ngày kể từ ngày người thân qua đời.",
        "Dữ liệu dân cư của người đã mất sẽ được cập nhật đồng bộ để giải quyết chế độ thừa kế và thủ tục đất đai."
      ]
    }
  },
  {
    "id": "proc_dang_ky_xe_lan_dau",
    "category_id": "giao_thong",
    "code": "TTHC-VNEID-07",
    "title": "Kê khai đăng ký xe lần đầu trên VNeID (Ô tô, Xe máy, Xe máy điện)",
    "target_audience": "Chủ xe là cá nhân có tài khoản VNeID Mức 2 mua xe sản xuất, lắp ráp trong nước mới 100%",
    "competent_authority": "Công an xã Đức Hợp (đối với xe máy) hoặc Đội CSGT Công an huyện (đối với ô tô)",
    "execution_method": "Kê khai trực tuyến trên ứng dụng VNeID hoặc Cổng Dịch vụ công Bộ Công an",
    "required_documents": [
      "Tài khoản định danh điện tử VNeID Mức độ 2 của chủ xe.",
      "Thông tin Hóa đơn điện tử mua bán xe (hệ thống tự động tra cứu từ Cục Thuế).",
      "Chứng từ nộp lệ phí trước bạ điện tử (đã nộp qua ngân hàng/Cổng DVC).",
      "Dữ liệu Phiếu kiểm tra chất lượng xuất xưởng điện tử của xe."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập Đăng ký xe",
        "desc": "Đăng nhập VNeID -> Chọn 'Dịch vụ công' hoặc tìm kiếm 'Đăng ký xe'."
      },
      {
        "step": 2,
        "title": "Chọn Kê khai đăng ký lần đầu",
        "desc": "Chọn mục 'Kê khai đăng ký xe lần đầu'."
      },
      {
        "step": 3,
        "title": "Chọn loại phương tiện",
        "desc": "Chọn Xe máy / Ô tô / Xe máy điện theo đúng loại xe đã mua."
      },
      {
        "step": 4,
        "title": "Nhập thông tin chứng từ",
        "desc": "Nhập số hóa đơn điện tử, mã số chứng từ nộp lệ phí trước bạ để hệ thống đối soát dữ liệu."
      },
      {
        "step": 5,
        "title": "Bấm biển số xe",
        "desc": "Thực hiện bấm biển số xe trực tiếp trên ứng dụng VNeID (nếu thuộc trường hợp áp dụng) hoặc đặt lịch hẹn đến cơ quan Công an."
      },
      {
        "step": 6,
        "title": "Thanh toán và nhận kết quả",
        "desc": "Nộp lệ phí đăng ký xe trực tuyến. Nhận biển số và Giấy chứng nhận đăng ký xe qua bưu điện hoặc trực tiếp tại Công an xã Đức Hợp."
      }
    ],
    "processing_time": "Trong ngày làm việc kể từ khi hoàn tất kê khai và nộp lệ phí hợp lệ",
    "fee": "Theo Thông tư 60/2023/TT-BTC của Bộ Tài chính quy định mức thu lệ phí đăng ký, cấp biển số",
    "online_url": "https://dichvucong.bocongan.gov.vn",
    "views_count": 2890,
    "forms": [
      {
        "id": "f_dang_ky_xe_vneid",
        "form_code": "Giấy khai đăng ký xe điện tử",
        "name": "Giấy khai đăng ký xe điện tử trên ứng dụng VNeID",
        "file_url": "https://dichvucong.bocongan.gov.vn",
        "guide_url": "https://vneid.gov.vn"
      }
    ],
    "online_guide": {
      "platform": "Ứng dụng VNeID & Cổng DVC Bộ Công an",
      "portal_name": "Mục 'Dịch vụ công' -> 'Đăng ký xe'",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 của chủ xe.",
        "Đã hoàn thành nộp lệ phí trước bạ điện tử tại cơ quan Thuế / Cổng DVC.",
        "Xe sản xuất lắp ráp trong nước có nguồn gốc điện tử."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Chọn dịch vụ đăng ký xe",
          "action": "Chọn 'Dịch vụ công' hoặc tìm kiếm 'Đăng ký xe' trên VNeID."
        },
        {
          "step": 2,
          "title": "Kê khai xe lần đầu",
          "action": "Chọn 'Kê khai đăng ký xe lần đầu'."
        },
        {
          "step": 3,
          "title": "Chọn loại phương tiện",
          "action": "Chọn loại phương tiện (Xe máy / Ô tô / Xe máy điện)."
        },
        {
          "step": 4,
          "title": "Đối soát chứng từ thuế",
          "action": "Nhập thông tin hóa đơn điện tử, thông tin chứng từ nộp thuế trước bạ (hệ thống sẽ tự động đối soát với dữ liệu Thuế)."
        },
        {
          "step": 5,
          "title": "Bấm chọn biển số",
          "action": "Chọn hình thức nhận biển số (Bấm biển trên VNeID nếu áp dụng hoặc nhận cuộc hẹn đến cơ quan CSGT để bấm biển/nhận xe)."
        },
        {
          "step": 6,
          "title": "Nộp phí hoàn tất",
          "action": "Nộp lệ phí đăng ký xe trực tuyến và hoàn tất."
        }
      ],
      "result_format": "Biển số định danh cấp cho chủ xe và Chứng nhận đăng ký xe (Cà vẹt) tích hợp ngay vào Ví giấy tờ trên VNeID.",
      "tips": [
        "Công an xã Đức Hợp đã được phân cấp thực hiện đăng ký xe mô tô, xe gắn máy, xe máy điện cho nhân dân trên địa bàn xã.",
        "Bấm biển số trực tuyến trên VNeID giúp chủ xe sở hữu biển số định danh mà không cần mang xe đến xếp hàng."
      ]
    }
  },
  {
    "id": "proc_dang_nhap_dvc_vneid",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-VNEID-08",
    "title": "Đăng nhập liên thông các Cổng Dịch vụ công khác qua VNeID",
    "target_audience": "Toàn bộ công dân có tài khoản định danh điện tử VNeID Mức 2 khi thực hiện thủ tục hành chính trực tuyến",
    "competent_authority": "Văn phòng Chính phủ, Bộ Công an và các Bộ, Ban, Ngành liên quan",
    "execution_method": "Sử dụng tính năng quét mã QR trên VNeID để xác thực đăng nhập một chạm (Single Sign-On)",
    "required_documents": [
      "Điện thoại thông minh cài ứng dụng VNeID đã kích hoạt Mức độ 2.",
      "Máy tính hoặc thiết bị truy cập Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) hoặc Cổng DVC Bộ/Tỉnh."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập Cổng DVC",
        "desc": "Truy cập Cổng DVC Quốc gia (dichvucong.gov.vn) hoặc Cổng DVC tỉnh Hưng Yên trên trình duyệt máy tính."
      },
      {
        "step": 2,
        "title": "Chọn đăng nhập bằng VNeID",
        "desc": "Bấm 'Đăng nhập' -> Chọn phương thức 'Tài khoản định danh điện tử cấp bởi Bộ Công an (VNeID)'."
      },
      {
        "step": 3,
        "title": "Quét mã QR bằng ứng dụng VNeID",
        "desc": "Mở ứng dụng VNeID trên điện thoại -> Chọn biểu tượng Quét mã QR ở góc trên -> Hướng camera quét mã trên màn hình máy tính."
      },
      {
        "step": 4,
        "title": "Xác nhận đăng nhập trên điện thoại",
        "desc": "Kiểm tra thông tin phiên đăng nhập trên màn hình VNeID -> Bấm 'Xác nhận' bằng mã PIN passcode hoặc vân tay."
      },
      {
        "step": 5,
        "title": "Thực hiện thủ tục hành chính",
        "desc": "Hệ thống Cổng DVC sẽ tự động đăng nhập và tải toàn bộ thông tin cá nhân chính xác từ CSDLQG về dân cư."
      }
    ],
    "processing_time": "Đăng nhập tức thì trong 5 giây",
    "fee": "Miễn phí",
    "online_url": "https://dichvucong.gov.vn",
    "views_count": 3100,
    "forms": [],
    "online_guide": {
      "platform": "Cổng Dịch vụ công Quốc gia & Ứng dụng VNeID",
      "portal_name": "Cổng DVC Quốc gia (dichvucong.gov.vn)",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2 hoạt động bình thường.",
        "Thiết bị kết nối Internet."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Truy cập Cổng Dịch vụ công",
          "action": "Truy cập Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn) hoặc Cổng Dịch vụ công của Bộ/Tỉnh trên trình duyệt."
        },
        {
          "step": 2,
          "title": "Chọn đăng nhập qua VNeID",
          "action": "Chọn 'Đăng nhập' -> Chọn phương thức 'Tài khoản định danh điện tử cấp bởi Bộ Công an (VNeID)'."
        },
        {
          "step": 3,
          "title": "Quét mã QR xác thực",
          "action": "Mở ứng dụng VNeID trên điện thoại -> Chọn biểu tượng Quét mã QR để quét mã trên màn hình máy tính -> Xác nhận đăng nhập trên điện thoại."
        },
        {
          "step": 4,
          "title": "Tiến hành nộp hồ sơ",
          "action": "Chọn thủ tục cần làm (Thuế, Đất đai, Điện lực, Bưu điện, Tư pháp,...) và tiến hành nộp hồ sơ theo từng hệ thống."
        }
      ],
      "result_format": "Đăng nhập thành công, đồng bộ dữ liệu dân cư chính xác, không cần nhập lại thông tin cá nhân thủ công.",
      "tips": [
        "Từ ngày 01/07/2024, Cổng DVC Quốc gia sử dụng duy nhất tài khoản VNeID để đăng nhập.",
        "Không chia sẻ ảnh chụp màn hình mã QR đăng nhập cho người lạ để tránh bị chiếm đoạt phiên làm việc."
      ]
    }
  },
  {
    "id": "proc_theo_doi_ho_so_vneid",
    "category_id": "dvc_lien_thong",
    "code": "TTHC-VNEID-09",
    "title": "Theo dõi trạng thái xử lý hồ sơ & Nhận kết quả điện tử trên VNeID",
    "target_audience": "Mọi công dân đã nộp hồ sơ thủ tục hành chính trực tuyến qua VNeID hoặc Cổng DVC",
    "competent_authority": "Công an xã Đức Hợp và các cơ quan giải quyết thủ tục hành chính",
    "execution_method": "Trực tuyến trên ứng dụng VNeID mục 'Lịch sử xử lý hồ sơ'",
    "required_documents": [
      "Mã số hồ sơ thủ tục hành chính hoặc tài khoản VNeID đã dùng nộp hồ sơ."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Mở ứng dụng VNeID",
        "desc": "Đăng nhập VNeID -> Vào mục 'Thủ tục hành chính' trên thanh chức năng chính."
      },
      {
        "step": 2,
        "title": "Vào Lịch sử xử lý hồ sơ",
        "desc": "Chọn mục 'Lịch sử xử lý hồ sơ' để xem toàn bộ danh sách các hồ sơ đã nộp."
      },
      {
        "step": 3,
        "title": "Xem chi tiết tiến độ",
        "desc": "Bấm vào hồ sơ cụ thể để xem trạng thái: Mới tạo, Đang xử lý, Yêu cầu bổ sung hồ sơ, Đã hoàn thành hoặc Bị từ chối."
      },
      {
        "step": 4,
        "title": "Bổ sung giấy tờ (nếu có yêu cầu)",
        "desc": "Nếu hồ sơ ở trạng thái 'Yêu cầu bổ sung', xem ghi chú của cán bộ Công an và tải bổ sung file tài liệu theo yêu cầu."
      },
      {
        "step": 5,
        "title": "Nhận kết quả điện tử",
        "desc": "Khi hồ sơ 'Đã hoàn thành', tải file kết quả PDF có chữ ký số hoặc xem kết quả đã tích hợp vào mục Ví giấy tờ."
      }
    ],
    "processing_time": "Tra cứu theo thời gian thực (Real-time 24/7)",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2200,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Mục 'Thủ tục hành chính' -> 'Lịch sử xử lý hồ sơ'",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "Đã thực hiện nộp hồ sơ DVC trực tuyến."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Kiểm tra tiến độ hồ sơ",
          "action": "Mở VNeID -> Vào 'Thủ tục hành chính' -> Chọn 'Lịch sử xử lý hồ sơ' để xem hồ sơ đang ở bước nào (Mới tạo, Đang xử lý, Yêu cầu bổ sung, Đã hoàn thành)."
        },
        {
          "step": 2,
          "title": "Nhận kết quả điện tử",
          "action": "Các kết quả điện tử (Phiếu LLTP điện tử, Thông báo mã số định danh, Căn cước điện tử) sẽ được tích hợp trực tiếp vào phần Ví giấy tờ hoặc trả về dưới dạng file PDF có ký số hợp lệ trong mục chi tiết hồ sơ."
        }
      ],
      "result_format": "Văn bản điện tử ký số hợp lệ theo Luật Giao dịch điện tử có giá trị như bản giấy gốc.",
      "tips": [
        "Bật tính năng Thông báo trên điện thoại cho ứng dụng VNeID để nhận tin nhắn thông báo ngay khi hồ sơ có tiến triển mới."
      ]
    }
  },
  {
    "id": "proc_tich_hop_gplx",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-01",
    "title": "Tích hợp Giấy phép lái xe (GPLX) trên VNeID",
    "target_audience": "Công dân sở hữu Giấy phép lái xe các hạng A1, A2, B1, B2, C, D, E,... bằng vật liệu thẻ PET hoặc giấy bìa đã được số hóa",
    "competent_authority": "Cục Đường bộ Việt Nam, Sở GTVT phối hợp Cục Cảnh sát QLHC về TTXH (C06)",
    "execution_method": "Trực tuyến 100% trên ứng dụng VNeID (Ví giấy tờ -> Tích hợp thông tin)",
    "required_documents": [
      "Bản gốc Giấy phép lái xe (GPLX) để lấy Số GPLX và Hạng xe.",
      "Tài khoản VNeID Mức 2 đã được kích hoạt."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập mục Tích hợp thông tin",
        "desc": "Mở VNeID -> Đăng nhập -> Vào mục 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn loại giấy tờ Giấy phép lái xe",
        "desc": "Nhấp vào mục 'Chọn loại giấy tờ' và chọn 'Giấy phép lái xe'."
      },
      {
        "step": 3,
        "title": "Nhập thông tin GPLX",
        "desc": "Nhập chính xác Số giấy phép lái xe (dãy số in đỏ trên thẻ) và chọn Hạng xe tương ứng (A1, A2, B1, B2, C,...)."
      },
      {
        "step": 4,
        "title": "Cam kết và Gửi yêu cầu",
        "desc": "Tích chọn cam kết thông tin kê khai là chính xác -> Bấm 'Gửi yêu cầu'."
      },
      {
        "step": 5,
        "title": "Hệ thống đối soát tự động",
        "desc": "Hệ thống sẽ đối soát dữ liệu với Cơ sở dữ liệu Giấy phép lái xe của Bộ Giao thông vận tải. Sau khi duyệt thành công, GPLX sẽ hiển thị trong Ví giấy tờ."
      }
    ],
    "processing_time": "Từ 01 đến 03 ngày làm việc (tự động đối soát liên ngành)",
    "fee": "Miễn phí hoàn toàn",
    "online_url": "https://vneid.gov.vn",
    "views_count": 3600,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Tích hợp thông tin -> Giấy phép lái xe",
      "prerequisites": [
        "Ứng dụng VNeID phiên bản mới nhất.",
        "Tài khoản định danh điện tử Mức độ 2.",
        "GPLX vật liệu PET có thông tin trùng khớp với số CCCD."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào mục Tích hợp thông tin",
          "action": "Vào Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu."
        },
        {
          "step": 2,
          "title": "Chọn Giấy phép lái xe",
          "action": "Chọn loại giấy tờ là 'Giấy phép lái xe'."
        },
        {
          "step": 3,
          "title": "Nhập số và hạng xe",
          "action": "Nhập Số giấy phép và chọn Hạng xe (A1, A2, B1, B2, C,...)."
        },
        {
          "step": 4,
          "title": "Gửi yêu cầu phê duyệt",
          "action": "Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Hiển thị đầy đủ hình ảnh thẻ GPLX điện tử 2 mặt, số GPLX, ngày cấp, ngày hết hạn và hạng xe trong Ví giấy tờ.",
      "tips": [
        "Từ ngày 01/07/2024 theo Thông tư 28/2024/TT-BCA, việc xuất trình GPLX trên VNeID khi kiểm tra giao thông có giá trị pháp lý đầy đủ như bản cứng.",
        "Nếu bị báo 'Không tìm thấy dữ liệu', nguyên nhân là do GPLX cũ chưa cập nhật số CCCD 12 số tại Sở GTVT."
      ]
    }
  },
  {
    "id": "proc_tich_hop_dang_ky_xe",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-02",
    "title": "Tích hợp Đăng ký xe (Cà vẹt xe máy, ô tô) trên VNeID",
    "target_audience": "Chủ phương tiện xe mô tô, xe gắn máy, ô tô chính chủ có tài khoản VNeID Mức 2",
    "competent_authority": "Cục Cảnh sát Giao thông (C08) và Công an các tỉnh/thành phố",
    "execution_method": "Trực tuyến 100% trên ứng dụng VNeID",
    "required_documents": [
      "Bản gốc Giấy chứng nhận đăng ký xe để lấy Số khung và Biển số xe.",
      "Tài khoản VNeID Mức 2 của chủ sở hữu phương tiện."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Truy cập Ví giấy tờ",
        "desc": "Mở VNeID -> Chọn 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn loại giấy tờ Đăng ký xe",
        "desc": "Tại danh sách loại giấy tờ, chọn 'Đăng ký xe'."
      },
      {
        "step": 3,
        "title": "Chọn loại phương tiện",
        "desc": "Chọn Loại phương tiện: 'Xe máy' hoặc 'Ô tô'."
      },
      {
        "step": 4,
        "title": "Nhập Số khung và Biển số",
        "desc": "Nhập đúng Số khung của xe và Biển số xe (viết liền không dấu cách, không gạch ngang, ví dụ: 30F12345 hoặc 89B199999)."
      },
      {
        "step": 5,
        "title": "Gửi yêu cầu đối soát",
        "desc": "Tích chọn cam kết thông tin chính xác -> Bấm 'Gửi yêu cầu' để hệ thống Cục CSGT đối soát dữ liệu đăng ký xe chính chủ."
      }
    ],
    "processing_time": "Từ 01 đến 05 ngày làm việc",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 3200,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Tích hợp thông tin -> Đăng ký xe",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Xe đứng tên chính chủ người kê khai."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở chức năng tích hợp",
          "action": "Vào Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu."
        },
        {
          "step": 2,
          "title": "Chọn Đăng ký xe",
          "action": "Chọn loại giấy tờ là 'Đăng ký xe'."
        },
        {
          "step": 3,
          "title": "Chọn phương tiện",
          "action": "Chọn Loại phương tiện (Xe máy hoặc Ô tô)."
        },
        {
          "step": 4,
          "title": "Điền số khung và biển số",
          "action": "Nhập Số khung và Biển số xe (viết liền, không dấu, ví dụ: 89B112345)."
        },
        {
          "step": 5,
          "title": "Gửi yêu cầu",
          "action": "Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Thẻ Đăng ký xe điện tử xuất hiện trong Ví giấy tờ hiển thị số máy, số khung, nhãn hiệu, biển số và ngày đăng ký.",
      "tips": [
        "Biển số xe phải nhập chuẩn ký tự: Viết hoa, viết liền nhau, không chứa dấu chấm hoặc dấu gạch ngang.",
        "Chỉ xe đứng tên chính chủ với thông tin CCCD mới tích hợp được thành công."
      ]
    }
  },
  {
    "id": "proc_tich_hop_bhyt",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-03",
    "title": "Tích hợp Thẻ Bảo hiểm Y tế (BHYT) trên VNeID",
    "target_audience": "Mọi công dân có thẻ BHYT còn hạn sử dụng trên toàn quốc",
    "competent_authority": "Bảo hiểm Xã hội Việt Nam phối hợp Bộ Công an",
    "execution_method": "Trực tuyến trên VNeID mục Ví giấy tờ",
    "required_documents": [
      "Thẻ Bảo hiểm Y tế giấy hoặc mã số BHXH gồm 10 chữ số.",
      "Tài khoản VNeID Mức 2."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Vào Ví giấy tờ",
        "desc": "Mở VNeID -> Vào 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn Thẻ bảo hiểm y tế",
        "desc": "Tại danh sách chọn loại giấy tờ, chọn 'Thẻ bảo hiểm y tế'."
      },
      {
        "step": 3,
        "title": "Nhập mã thẻ BHYT",
        "desc": "Nhập Mã thẻ BHYT (gồm 10 số mã số BHXH in trên thẻ hoặc chuỗi ký tự thẻ BHYT)."
      },
      {
        "step": 4,
        "title": "Gửi yêu cầu",
        "desc": "Bấm 'Gửi yêu cầu' để hệ thống đối soát trực tuyến với CSDL Bảo hiểm Xã hội Việt Nam."
      }
    ],
    "processing_time": "Thông thường được phê duyệt tự động trong vài phút đến 24 giờ",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 4200,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Thẻ bảo hiểm y tế",
      "prerequisites": [
        "Tài khoản VNeID Mức 2.",
        "Mã số thẻ BHYT 10 chữ số còn hiệu lực."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở yêu cầu tích hợp",
          "action": "Vào Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu."
        },
        {
          "step": 2,
          "title": "Chọn Thẻ bảo hiểm y tế",
          "action": "Chọn loại giấy tờ là 'Thẻ bảo hiểm y tế'."
        },
        {
          "step": 3,
          "title": "Nhập mã thẻ",
          "action": "Nhập Mã thẻ BHYT (10 số mã số BHXH hoặc chuỗi ký tự trên thẻ BHYT)."
        },
        {
          "step": 4,
          "title": "Hoàn tất yêu cầu",
          "action": "Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Thẻ BHYT điện tử kèm mã QR thẻ hiển thị trong Ví giấy tờ dùng thay thế thẻ giấy khi đi khám chữa bệnh tại các cơ sở y tế.",
      "tips": [
        "Người dân xã Đức Hợp có thể dùng thẻ BHYT trên VNeID để khám chữa bệnh BHYT tại Trạm Y tế xã Đức Hợp và Trung tâm Y tế huyện Kim Động mà không cần đem theo thẻ giấy."
      ]
    }
  },
  {
    "id": "proc_tich_hop_bhxh",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-04",
    "title": "Tích hợp & Tra cứu Sổ Bảo hiểm Xã hội (BHXH) trên VNeID",
    "target_audience": "Công dân tham gia đóng BHXH bắt buộc hoặc BHXH tự nguyện",
    "competent_authority": "Bảo hiểm Xã hội Việt Nam",
    "execution_method": "Liên thông tự động trên ứng dụng VNeID",
    "required_documents": [
      "Tài khoản VNeID Mức 2 có thông tin số CCCD trùng khớp dữ liệu BHXH."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Mở Ví giấy tờ",
        "desc": "Đăng nhập VNeID -> Mở mục 'Ví giấy tờ'."
      },
      {
        "step": 2,
        "title": "Chọn mục Bảo hiểm xã hội",
        "desc": "Chọn mục 'Bảo hiểm xã hội' trong danh sách giấy tờ."
      },
      {
        "step": 3,
        "title": "Xác thực Passcode",
        "desc": "Nhập mã PIN Passcode hoặc quét vân tay/Face ID để bảo mật thông tin."
      },
      {
        "step": 4,
        "title": "Tra cứu quá trình đóng BHXH",
        "desc": "Hệ thống hiển thị mã số BHXH, quá trình tham gia BHXH, bảo hiểm thất nghiệp (BHTN), đơn vị công tác và mức đóng."
      }
    ],
    "processing_time": "Dữ liệu liên thông tự động hiển thị tức thì",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2750,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Bảo hiểm xã hội",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "Thông tin CCCD trùng khớp với CSDL BHXH Việt Nam."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Truy cập Ví giấy tờ",
          "action": "Vào mục Ví giấy tờ trên màn hình chính ứng dụng VNeID."
        },
        {
          "step": 2,
          "title": "Xem thông tin BHXH",
          "action": "Thông thường dữ liệu BHXH sẽ tự động liên thông khi CCCD trùng khớp. Chọn mục 'Bảo hiểm xã hội' để xem quá trình đóng và thông tin hưởng."
        }
      ],
      "result_format": "Bảng tóm tắt lịch sử quá trình đóng BHXH chi tiết theo từng mốc thời gian và doanh nghiệp/cơ quan.",
      "tips": [
        "Nếu mục BHXH chưa hiển thị thông tin, hãy liên hệ cơ quan BHXH huyện Kim Động để chuẩn hóa số CCCD vào dữ liệu sổ BHXH."
      ]
    }
  },
  {
    "id": "proc_tich_hop_thue",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-05",
    "title": "Tích hợp Mã số thuế cá nhân trên VNeID",
    "target_audience": "Mọi công dân đã được cấp mã số thuế thu nhập cá nhân",
    "competent_authority": "Tổng cục Thuế phối hợp Bộ Công an",
    "execution_method": "Trực tuyến trên ứng dụng VNeID",
    "required_documents": [
      "Mã số thuế cá nhân (10 số).",
      "Tài khoản VNeID Mức 2."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Vào Ví giấy tờ",
        "desc": "Mở VNeID -> 'Ví giấy tờ' -> Chọn 'Tích hợp thông tin' -> Bấm 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn Mã số thuế",
        "desc": "Chọn loại giấy tờ là 'Mã số thuế'."
      },
      {
        "step": 3,
        "title": "Xác nhận số CCCD/Mã số thuế",
        "desc": "Hệ thống sẽ tự động điền hoặc yêu cầu xác nhận Số CCCD/Mã số thuế cá nhân."
      },
      {
        "step": 4,
        "title": "Bấm Gửi yêu cầu",
        "desc": "Xác nhận gửi yêu cầu để hệ thống liên kết dữ liệu thuế cá nhân vào VNeID."
      }
    ],
    "processing_time": "Từ 01 đến 03 ngày làm việc",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 2300,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Tích hợp thông tin -> Mã số thuế",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "Đã được cấp mã số thuế cá nhân."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Mở yêu cầu tích hợp",
          "action": "Vào Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu."
        },
        {
          "step": 2,
          "title": "Chọn Mã số thuế",
          "action": "Chọn loại giấy tờ là 'Mã số thuế'."
        },
        {
          "step": 3,
          "title": "Kiểm tra thông tin",
          "action": "Hệ thống sẽ tự động điền hoặc yêu cầu xác nhận Số CCCD/Mã số thuế cá nhân của bạn."
        },
        {
          "step": 4,
          "title": "Gửi yêu cầu hoàn tất",
          "action": "Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Thông tin cơ quan thuế quản lý, mã số thuế và ngày cấp mã hiển thị trong Ví giấy tờ.",
      "tips": [
        "Giúp kê khai thuế thu nhập cá nhân, làm thủ tục mua bán nhà đất nhanh chóng mà không cần xin giấy xác nhận mã số thuế."
      ]
    }
  },
  {
    "id": "proc_tich_hop_nguoi_phu_thuoc",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-06",
    "title": "Tích hợp Thông tin Người phụ thuộc trên VNeID",
    "target_audience": "Công dân có con nhỏ, cha mẹ già hoặc người thân thuộc diện phụ thuộc giảm trừ gia cảnh thuế TNCN",
    "competent_authority": "Tổng cục Thuế và Cục Cảnh sát QLHC về TTXH",
    "execution_method": "Trực tuyến trên ứng dụng VNeID",
    "required_documents": [
      "Số CCCD hoặc mã số định danh cá nhân của người phụ thuộc.",
      "Họ và tên, ngày tháng năm sinh của người phụ thuộc.",
      "Tài khoản VNeID Mức 2 của người nộp thuế."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Vào mục Tích hợp thông tin",
        "desc": "Mở VNeID -> Vào 'Ví giấy tờ' -> 'Tích hợp thông tin' -> 'Tạo mới yêu cầu'."
      },
      {
        "step": 2,
        "title": "Chọn Người phụ thuộc",
        "desc": "Chọn loại thông tin là 'Người phụ thuộc'."
      },
      {
        "step": 3,
        "title": "Điền thông tin người phụ thuộc",
        "desc": "Điền chính xác Họ và tên, Ngày tháng năm sinh, Số CCCD/Định danh cá nhân của người phụ thuộc."
      },
      {
        "step": 4,
        "title": "Gửi yêu cầu xác thực",
        "desc": "Kiểm tra kỹ thông tin -> Bấm 'Gửi yêu cầu' để đối soát với CSDL Quốc gia về dân cư và cơ quan Thuế."
      }
    ],
    "processing_time": "Từ 01 đến 05 ngày làm việc",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 1950,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Tích hợp thông tin -> Người phụ thuộc",
      "prerequisites": [
        "Tài khoản VNeID Mức độ 2.",
        "Thông tin định danh của người phụ thuộc."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Vào tạo mới yêu cầu",
          "action": "Vào Ví giấy tờ -> Tích hợp thông tin -> Tạo mới yêu cầu."
        },
        {
          "step": 2,
          "title": "Chọn Người phụ thuộc",
          "action": "Chọn 'Người phụ thuộc'."
        },
        {
          "step": 3,
          "title": "Điền thông tin nhân thân",
          "action": "Điền Họ và tên, Ngày tháng năm sinh, Số CCCD/Định danh cá nhân của người phụ thuộc."
        },
        {
          "step": 4,
          "title": "Gửi yêu cầu",
          "action": "Bấm Gửi yêu cầu."
        }
      ],
      "result_format": "Danh sách người phụ thuộc đã được xác thực điện tử hiển thị trong Ví giấy tờ.",
      "tips": [
        "Dùng làm căn cứ chứng minh người phụ thuộc để giảm trừ gia cảnh khi quyết toán thuế thu nhập cá nhân hàng năm."
      ]
    }
  },
  {
    "id": "proc_xuat_trinh_giay_to_vneid",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-07",
    "title": "Hướng dẫn xuất trình giấy tờ điện tử trên VNeID khi làm việc với CSGT và cơ quan chức năng",
    "target_audience": "Mọi công dân khi tham gia giao thông hoặc thực hiện giao dịch hành chính công",
    "competent_authority": "Lực lượng CSGT, Công an nhân dân và các cơ quan nhà nước có thẩm quyền",
    "execution_method": "Mở ứng dụng VNeID -> Ví giấy tờ -> Nhập Passcode/FaceID -> Tạo mã QR xuất trình",
    "required_documents": [
      "Điện thoại có cài ứng dụng VNeID Mức 2 đã tích hợp sẵn GPLX, Đăng ký xe, BHYT, Căn cước công dân."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Đăng nhập vào VNeID",
        "desc": "Mở ứng dụng VNeID và đăng nhập bằng vân tay/Face ID hoặc mật khẩu."
      },
      {
        "step": 2,
        "title": "Vào mục Ví giấy tờ",
        "desc": "Vào mục 'Ví giấy tờ' trên thanh điều hướng -> Chọn loại giấy tờ cần xuất trình (ví dụ: Giấy phép lái xe hoặc Đăng ký xe)."
      },
      {
        "step": 3,
        "title": "Nhập Passcode bảo mật",
        "desc": "Nhập mã PIN Passcode 6 số hoặc xác thực sinh trắc học để mở khóa hiển thị chi tiết giấy tờ."
      },
      {
        "step": 4,
        "title": "Tạo mã QR xuất trình",
        "desc": "Chọn 'Tạo mã QR xuất trình' nếu cán bộ chức năng yêu cầu quét kiểm tra bằng thiết bị chuyên dụng của ngành."
      }
    ],
    "processing_time": "Thực hiện ngay trong 10 giây",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 5100,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ trên VNeID",
      "prerequisites": [
        "Tài khoản VNeID Mức 2 đã tích hợp thành công giấy tờ.",
        "Nhớ mã PIN Passcode gồm 6 chữ số."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Đăng nhập VNeID",
          "action": "Đăng nhập vào VNeID."
        },
        {
          "step": 2,
          "title": "Mở loại giấy tờ cần xuất trình",
          "action": "Vào mục 'Ví giấy tờ' -> chọn loại giấy tờ cần xuất trình (ví dụ: Giấy phép lái xe, Đăng ký xe, BHYT)."
        },
        {
          "step": 3,
          "title": "Xác thực Passcode",
          "action": "Nhập Passcode (mã PIN 6 số) hoặc xác thực Vân tay/Face ID để hiển thị thông tin chi tiết."
        },
        {
          "step": 4,
          "title": "Tạo mã QR xuất trình cho cán bộ quét",
          "action": "Chọn 'Tạo mã QR xuất trình' (nếu cơ quan chức năng cần quét mã kiểm tra)."
        }
      ],
      "result_format": "Mã QR xuất trình có hiệu lực trong vòng vài phút đảm bảo an toàn thông tin tối đa.",
      "tips": [
        "Lưu ý quan trọng: Tuyệt đối KHÔNG chụp ảnh màn hình giấy tờ trên ứng dụng VNeID để gửi cho người khác nhằm tránh nguy cơ lộ mật thông tin cá nhân.",
        "Cán bộ chức năng sẽ sử dụng thiết bị chuyên dụng để quét mã QR trực tiếp từ ứng dụng của bạn."
      ]
    }
  },
  {
    "id": "proc_khac_phuc_loi_vneid",
    "category_id": "tich_hop_giay_to",
    "code": "TICH-HOP-08",
    "title": "Hướng dẫn xử lý các lỗi thường gặp khi tích hợp giấy tờ trên VNeID",
    "target_audience": "Công dân gặp tình trạng hồ sơ tích hợp bị từ chối, đang phê duyệt quá lâu hoặc sai lệch thông tin",
    "competent_authority": "Công an xã Đức Hợp phối hợp các đơn vị chủ quản cơ sở dữ liệu chuyên ngành",
    "execution_method": "Kiểm tra và thao tác trực tiếp trên VNeID hoặc liên hệ cơ quan cấp giấy tờ để chuẩn hóa dữ liệu",
    "required_documents": [
      "Bản gốc các giấy tờ bị lỗi (GPLX, Đăng ký xe, BHYT, MST).",
      "Thẻ Căn cước công dân gắn chip hoặc tài khoản VNeID Mức 2."
    ],
    "steps": [
      {
        "step": 1,
        "title": "Lỗi 'Hồ sơ bị từ chối / Không tìm thấy dữ liệu'",
        "desc": "Nguyên nhân: Dữ liệu trên hệ thống của Bộ GTVT/BHXH chưa được cập nhật theo số CCCD mới (vẫn dùng CMND 9 số cũ). Cách xử lý: Đến cơ quan cấp giấy tờ (VD: Sở GTVT, BHXH) để cập nhật thông tin CCCD mới vào hệ thống dữ liệu ngành."
      },
      {
        "step": 2,
        "title": "Lỗi 'Đang phê duyệt quá lâu'",
        "desc": "Nguyên nhân: Hệ thống đang quá tải hoặc đợi xác thực dữ liệu liên ngành. Cách xử lý: Thời gian phê duyệt thông thường từ 1 - 7 ngày làm việc. Bạn cần kiên nhẫn chờ đợi, không gửi lại nhiều lần."
      },
      {
        "step": 3,
        "title": "Lỗi 'Thông tin sai lệch'",
        "desc": "Nguyên nhân: Sai số khung, biển số xe hoặc hạng GPLX khi nhập liệu. Cách xử lý: Xóa yêu cầu cũ bị lỗi trong Ví giấy tờ, kiểm tra kỹ lại bản gốc và thực hiện gửi lại yêu cầu mới."
      },
      {
        "step": 4,
        "title": "Hỗ trợ trực tiếp tại Công an xã Đức Hợp",
        "desc": "Nếu đã thực hiện đúng nhưng vẫn không tích hợp được, công dân đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ tra cứu hệ thống CSDL Quốc gia và hỗ trợ tháo gỡ."
      }
    ],
    "processing_time": "Tùy thuộc vào thời gian cập nhật dữ liệu của cơ quan chuyên ngành",
    "fee": "Miễn phí",
    "online_url": "https://vneid.gov.vn",
    "views_count": 4800,
    "forms": [],
    "online_guide": {
      "platform": "Ứng dụng VNeID (Mức 2)",
      "portal_name": "Ví giấy tờ -> Lịch sử yêu cầu tích hợp",
      "prerequisites": [
        "Có bản gốc giấy tờ để đối chiếu số seri, số khung, số thẻ."
      ],
      "steps": [
        {
          "step": 1,
          "title": "Xử lý lỗi Hồ sơ bị từ chối",
          "action": "Đến cơ quan cấp giấy tờ (Sở GTVT, Cơ quan BHXH) đề nghị cập nhật số CCCD 12 số vào hệ thống quản lý chuyên ngành."
        },
        {
          "step": 2,
          "title": "Xử lý hồ sơ chờ duyệt lâu",
          "action": "Kiểm tra tiến độ trong mục Lịch sử yêu cầu. Thời gian chờ thông thường 1-7 ngày làm việc."
        },
        {
          "step": 3,
          "title": "Xóa yêu cầu sai để nộp lại",
          "action": "Bấm vào yêu cầu tích hợp bị từ chối -> Chọn Xóa yêu cầu -> Kiểm tra thật kỹ từng ký tự và tạo lại yêu cầu mới."
        }
      ],
      "result_format": "Hồ sơ chuyển trạng thái 'Đã phê duyệt' và giấy tờ hiển thị đầy đủ trong Ví giấy tờ.",
      "tips": [
        "Biển số xe: Không gõ dấu gạch nối, không cách (VD: đúng: 89B199999, sai: 89-B1 999.99).",
        "GPLX giấy bìa cũ chưa có trên hệ thống của Bộ GTVT thì cần làm thủ tục đổi sang thẻ PET để được tích hợp lên VNeID."
      ]
    }
  }
];

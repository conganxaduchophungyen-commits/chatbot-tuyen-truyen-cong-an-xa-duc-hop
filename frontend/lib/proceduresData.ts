import { Procedure } from './api';

export const FULL_30_PROCEDURES: Procedure[] = [
  // =========================================================================
  // NHÓM 1: CƯ TRÚ & CĂN CƯỚC (10 THỦ TỤC)
  // =========================================================================
  {
    id: 'proc_thuong_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-01',
    title: 'Đăng ký thường trú tại xã Đức Hợp',
    target_audience: 'Công dân Việt Nam chuyển đến sinh sống hợp pháp tại xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc trực tuyến qua Cổng Dịch vụ công Bộ Công an / Ứng dụng VNeID',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).',
      'Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán, Giấy chứng nhận quyền sử dụng đất, Hợp đồng thuê nhà hợp pháp).',
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
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26290',
    views_count: 1420,
    forms: [
      {
        id: 'f_ct01',
        form_code: 'Mẫu CT01',
        name: 'Tờ khai thay đổi thông tin cư trú (Ban hành kèm Thông tư 56/2021/TT-BCA)',
        file_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26290',
        guide_url: 'https://dichvucong.bocongan.gov.vn'
      }
    ],
    online_guide: {
      platform: 'Cổng DVC Bộ Công an & Ứng dụng VNeID',
      portal_name: 'Cổng Dịch vụ công Bộ Công an (dichvucong.bocongan.gov.vn)',
      prerequisites: [
        'Tài khoản Định danh điện tử VNeID Mức 2.',
        'Ảnh chụp bản gốc Sổ đỏ/Hợp đồng mua bán/Hợp đồng thuê nhà và văn bản đồng ý của chủ sở hữu chỗ ở.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Đăng nhập Cổng Dịch vụ công',
          description: 'Truy cập Cổng DVC Bộ Công an (dichvucong.bocongan.gov.vn) hoặc mở app VNeID mục Thủ tục hành chính.',
          sub_steps: [
            'Chọn Đăng nhập bằng Tài khoản định danh điện tử VNeID.',
            'Quét mã QR hoặc nhập số CCCD và mật khẩu để vào hệ thống.'
          ]
        },
        {
          step_num: 2,
          title: 'Tìm thủ tục Đăng ký thường trú',
          description: 'Gõ "Đăng ký thường trú" vào thanh tìm kiếm trên trang chủ Cổng DVC.',
          sub_steps: [
            'Chọn cơ quan thực hiện: Tỉnh Hưng Yên -> Xã Đức Hợp -> Công an xã Đức Hợp.',
            'Bấm "Nộp hồ sơ trực tuyến".'
          ]
        },
        {
          step_num: 3,
          title: 'Kê khai thông tin cư trú',
          description: 'Hệ thống tự động điền thông tin nhân thân từ Cơ sở dữ liệu quốc gia về dân cư.',
          sub_steps: [
            'Chọn trường hợp: Nhập hộ mới hoặc Nhập vào hộ đã có.',
            'Điền địa chỉ chỗ ở hợp pháp tại xã Đức Hợp (Thôn Nho Lâm,...).',
            'Kê khai thông tin chủ hộ và mối quan hệ với chủ hộ.'
          ]
        },
        {
          step_num: 4,
          title: 'Đính kèm tệp tài liệu',
          description: 'Tải lên hình ảnh rõ nét của các giấy tờ chứng minh chỗ ở hợp pháp.',
          sub_steps: [
            'Tải ảnh Sổ đỏ hoặc Hợp đồng thuê nhà.',
            'Tải Tờ khai CT01 có chữ ký của chủ sở hữu chỗ ở (nếu có).'
          ]
        },
        {
          step_num: 5,
          title: 'Chọn hình thức nhận kết quả & Gửi hồ sơ',
          description: 'Chọn nhận kết quả trực tuyến qua VNeID hoặc nhận trực tiếp tại trụ sở Công an xã Đức Hợp.',
          sub_steps: [
            'Nhận mã hồ sơ qua tin nhắn SMS/Email để theo dõi tiến độ.',
            'Cán bộ Công an xã thẩm duyệt hồ sơ trong thời hạn 07 ngày làm việc.'
          ]
        }
      ],
      important_notes: [
        'Mọi giấy tờ chứng minh chỗ ở hợp pháp phải là bản chính hoặc bản chụp rõ nét, không mờ nhòe, tẩy xóa.',
        'Trường hợp ở trọ/thuê nhà phải có hợp đồng thuê hợp pháp và chữ ký đồng ý của chủ trọ cho phép đăng ký thường trú.'
      ]
    }
  },
  {
    id: 'proc_xoa_thuong_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-02',
    title: 'Xóa đăng ký thường trú',
    target_audience: 'Cá nhân hoặc đại diện hộ gia đình có người thuộc diện xóa đăng ký thường trú theo Luật Cư trú',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Công an xã Đức Hợp hoặc trực tuyến qua Cổng Dịch vụ công',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Giấy tờ chứng minh thuộc trường hợp xóa đăng ký thường trú (Giấy chứng tử, quyết định hủy bỏ đăng ký thường trú, quyết định tước quốc tịch, văn bản xuất cảnh định cư...).'
    ],
    steps: [
      { step: 1, title: 'Kê khai tờ khai', desc: 'Người yêu cầu điền tờ khai CT01 nêu rõ lý do xóa thường trú.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Nộp tại Bộ phận Một cửa Công an xã Đức Hợp hoặc nộp trực tuyến qua Cổng DVC.' },
      { step: 3, title: 'Xử lý hồ sơ', desc: 'Công an xã kiểm tra hồ sơ, đối chiếu dữ liệu dân cư và xóa đăng ký thường trú trên hệ thống.' },
      { step: 4, title: 'Trả kết quả', desc: 'Thông báo kết quả giải quyết cư trú (Mẫu CT08) cho công dân.' }
    ],
    processing_time: '05 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 520,
    forms: []
  },
  {
    id: 'proc_tam_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-03',
    title: 'Đăng ký tạm trú, gia hạn tạm trú tại xã Đức Hợp',
    target_audience: 'Công dân đến sinh sống tại xã Đức Hợp ngoài nơi thường trú từ 30 ngày trở lên',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Công an xã Đức Hợp hoặc trực tuyến qua Cổng DVC Bộ Công an / Ứng dụng VNeID',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01 do Bộ Công an ban hành).',
      'Giấy tờ chứng minh chỗ ở hợp pháp (Hợp đồng thuê trọ, giấy mượn nhà hoặc văn bản bảo lãnh của chủ cơ sở lưu trú).',
      'Căn cước công dân hoặc định danh điện tử của người đăng ký.'
    ],
    steps: [
      { step: 1, title: 'Kê khai mẫu CT01', desc: 'Điền đầy đủ thông tin vào mẫu CT01, xin ý kiến xác nhận của chủ nhà trọ.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Nộp tại Bộ phận Một cửa Công an xã Đức Hợp hoặc nộp trực tuyến qua app VNeID.' },
      { step: 3, title: 'Kiểm tra & Cập nhật', desc: 'Cán bộ kiểm tra thực tế cư trú và cập nhật vào Cơ sở dữ liệu quốc gia về dân cư.' },
      { step: 4, title: 'Nhận kết quả', desc: 'Nhận thông báo kết quả qua VNeID hoặc văn bản CT08 tại trụ sở xã.' }
    ],
    processing_time: '03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ',
    fee: '15.000 VNĐ (Trực tiếp) / 7.000 VNĐ (Trực tuyến qua Cổng DVC)',
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26291',
    views_count: 980,
    forms: []
  },
  {
    id: 'proc_xoa_tam_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-04',
    title: 'Xóa đăng ký tạm trú',
    target_audience: 'Cá nhân, cơ quan, tổ chức có người thuộc trường hợp xóa đăng ký tạm trú',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Công an xã Đức Hợp hoặc nộp trực tuyến qua Cổng DVC',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Giấy tờ chứng minh thuộc trường hợp xóa đăng ký tạm trú (Đã đăng ký thường trú tại chỗ mới, chết, chấm dứt thuê trọ...).'
    ],
    steps: [
      { step: 1, title: 'Nộp hồ sơ', desc: 'Kê khai mẫu CT01 và gửi Công an xã Đức Hợp.' },
      { step: 2, title: 'Thẩm tra dữ liệu', desc: 'Công an xã kiểm tra đối chiếu dữ liệu trên hệ thống Cư trú quốc gia.' },
      { step: 3, title: 'Cập nhật xóa tạm trú', desc: 'Thực hiện xóa tạm trú trên hệ thống dữ liệu điện tử trong 03 ngày làm việc.' }
    ],
    processing_time: '03 ngày làm việc',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 410,
    forms: []
  },
  {
    id: 'proc_can_cuoc',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-05',
    title: 'Cấp, cấp đổi, cấp lại thẻ Căn cước theo Luật Căn cước 2023',
    target_audience: 'Công dân từ đủ 14 tuổi trở lên bắt buộc; Công dân từ 0 đến dưới 14 tuổi cấp theo nhu cầu',
    competent_authority: 'Cơ quan Quản lý căn cước; Công an xã Đức Hợp hỗ trợ hướng dẫn và đặt lịch',
    execution_method: 'Kê khai và đặt lịch hẹn trên VNeID / Cổng DVC, sau đó đến thu nhận sinh trắc học tại Bộ phận Một cửa',
    required_documents: [
      'Trẻ dưới 6 tuổi: Người đại diện hợp pháp kê khai trực tuyến hoàn toàn qua VNeID (không phải thu nhận vân tay, mống mắt, ảnh).',
      'Trẻ từ đủ 6 đến dưới 14 tuổi: Cha mẹ/người giám hộ kê khai online, đưa trẻ đến thu nhận vân tay, mống mắt, khuôn mặt.',
      'Người từ đủ 14 tuổi trở lên: Tự kê khai và thực hiện thu nhận vân tay, mống mắt, ảnh chụp chân dung.'
    ],
    steps: [
      { step: 1, title: 'Đăng ký hẹn lịch online', desc: 'Đăng nhập VNeID, chọn Cấp thẻ Căn cước và đặt lịch hẹn ngày giờ.' },
      { step: 2, title: 'Đến thu nhận sinh trắc', desc: 'Đến đúng lịch hẹn tại Trung tâm phục vụ hành chính công để thu nhận vân tay, mống mắt.' },
      { step: 3, title: 'Kiểm tra thông tin', desc: 'Kiểm tra và ký xác nhận phiếu thu nhận thông tin căn cước.' },
      { step: 4, title: 'Nhận thẻ Căn cước', desc: 'Nhận thẻ trực tiếp tại cơ quan cấp hoặc nhận qua bưu chính chuyển phát đến tận nhà.' }
    ],
    processing_time: '07 ngày làm việc kể từ ngày hoàn tất thủ tục thu nhận sinh trắc học',
    fee: 'Miễn phí cấp lần đầu cho công dân đủ 14 tuổi; Thu phí theo quy định đối với cấp đổi, cấp lại',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 2890,
    forms: [],
    online_guide: {
      platform: 'Ứng dụng VNeID (Định danh điện tử Mức 2)',
      portal_name: 'Ứng dụng VNeID & Cổng Dịch vụ công Bộ Công an',
      prerequisites: [
        'Tài khoản VNeID đã kích hoạt Định danh điện tử Mức 2.',
        'Đã cập nhật ứng dụng VNeID lên phiên bản mới nhất.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Đăng nhập và truy cập thủ tục Căn cước',
          description: 'Mở ứng dụng VNeID và hoàn tất đăng nhập bằng mật khẩu, Passcode hoặc sinh trắc học.',
          sub_steps: [
            'Tại trang chủ, chọn "Thủ tục hành chính" (hoặc "Dịch vụ công").',
            'Chọn mục "Cấp, quản lý căn cước" (hoặc "Dịch vụ công Căn cước").'
          ]
        },
        {
          step_num: 2,
          title: 'Chọn loại dịch vụ và đối tượng thực hiện',
          description: 'Lựa chọn đúng diện thực hiện thủ tục tương ứng:',
          sub_steps: [
            'Cấp thẻ Căn cước cho người dưới 14 tuổi (dành cho cha/mẹ/người giám hộ kê khai thay cho con).',
            'Cấp thẻ Căn cước cho công dân từ đủ 14 tuổi trở lên.',
            'Cấp đổi thẻ Căn cước (khi thẻ cũ hết hạn, sai sót hoặc thay đổi thông tin).',
            'Cấp lại thẻ Căn cước (khi bị mất thẻ hoặc thẻ bị hư hỏng không sử dụng được).'
          ]
        },
        {
          step_num: 3,
          title: 'Kê khai thông tin người được cấp thẻ Căn cước',
          description: 'Kiểm tra đối chiếu các thông tin hiển thị tự động từ Cơ sở dữ liệu quốc gia về dân cư.',
          sub_steps: [
            'Nếu làm cho bản thân: Hệ thống sẽ tự động điền sẵn Họ tên, Số định danh, Ngày sinh, Quê quán, Địa chỉ thường trú/tạm trú.',
            'Nếu kê khai cho con dưới 14 tuổi: Chọn thông tin của con đã được tích hợp trong mục "Thông tin thành viên gia đình".',
            'Kiểm tra kỹ các trường dữ liệu và bổ sung thông tin người đại diện hợp pháp.'
          ]
        },
        {
          step_num: 4,
          title: 'Lựa chọn nơi thực hiện thủ tục và đặt lịch hẹn',
          description: 'Chọn địa điểm và thời gian làm thủ tục thuận tiện nhất cho Bác/Anh/Chị.',
          sub_steps: [
            'Chọn Tỉnh/Thành phố: Tỉnh Hưng Yên -> Cơ quan Quản lý căn cước Công an cấp tỉnh hoặc Công an cấp tiếp nhận hồ sơ.',
            'Chọn ngày hẹn và khung giờ hẹn phù hợp để tránh việc xếp hàng chờ đợi.',
            'Chọn hình thức trả kết quả: Đến cơ quan Công an nhận trực tiếp hoặc Nhận qua dịch vụ bưu chính công ích chuyển phát về tận nhà.'
          ]
        },
        {
          step_num: 5,
          title: 'Xác nhận thông tin và nộp hồ sơ trực tuyến',
          description: 'Kiểm tra lại toàn bộ thông tin trong tờ khai điện tử và cam đoan tính chính xác.',
          sub_steps: [
            'Tích chọn "Tôi xin cam đoan những thông tin kê khai trên là đúng sự thật".',
            'Nhập mã Passcode xác thực của ứng dụng VNeID (hoặc mã xác thực OTP gửi về SMS).',
            'Bấm "Gửi hồ sơ" hoàn tất. Hệ thống sẽ cấp một Mã hồ sơ trực tuyến và Phiếu hẹn giờ điện tử.'
          ]
        }
      ],
      important_notes: [
        'Trẻ em dưới 06 tuổi: Thủ tục được thực hiện HOÀN TOÀN TRÊN VNeID, cha mẹ chỉ cần kê khai online và KHÔNG PHẢI ĐƯA TRẺ ĐẾN CƠ QUAN CÔNG AN (không thu nhận vân tay, mống mắt, ảnh khuôn mặt).',
        'Trẻ em từ đủ 06 đến dưới 14 tuổi: Sau khi cha/mẹ kê khai thành công trên VNeID, đưa trẻ đến cơ quan Công an theo đúng lịch hẹn để thu nhận vân tay, mống mắt và chụp ảnh khuôn mặt.',
        'Người từ đủ 14 tuổi trở lên: Sau khi kê khai online, đến cơ quan Công an theo lịch hẹn để thu nhận vân tay, mống mắt và ảnh chân dung.',
        'Khi đi làm căn cước trực tiếp: Hãy mặc trang phục lịch sự, đầu tóc gọn gàng để ảnh chụp thẻ căn cước đảm bảo tiêu chuẩn nhận diện.'
      ]
    }
  },
  {
    id: 'proc_dinh_danh_dien_tu',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-06',
    title: 'Đăng ký, kích hoạt tài khoản Định danh điện tử (VNeID Mức 1 & Mức 2)',
    target_audience: 'Công dân Việt Nam từ đủ 14 tuổi trở lên; người nước ngoài cư trú hợp pháp tại Việt Nam',
    competent_authority: 'Công an xã Đức Hợp hỗ trợ hướng dẫn; Công an cấp huyện/xã kích hoạt Mức 2',
    execution_method: 'Mức 1 tự đăng ký trên app VNeID; Mức 2 đến trực tiếp Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ thu nhận sinh trắc học',
    required_documents: [
      'Thẻ Căn cước công dân gắn chip hoặc Thẻ Căn cước.',
      'Số điện thoại di động chính chủ đứng tên công dân.',
      'Các giấy tờ muốn tích hợp: Giấy phép lái xe (GPLX), Thẻ bảo hiểm y tế (BHYT), Giấy đăng ký xe mô tô/ô tô, Mã số thuế cá nhân.'
    ],
    steps: [
      { step: 1, title: 'Đăng ký Mức 1', desc: 'Tải app VNeID trên điện thoại, quét chip thẻ CCCD và nhận diện khuôn mặt NFC.' },
      { step: 2, title: 'Đến trụ sở Công an xã làm Mức 2', desc: 'Đến Công an xã Đức Hợp (Thôn Nho Lâm), xuất trình thẻ CCCD và số điện thoại chính chủ.' },
      { step: 3, title: 'Thu nhận sinh trắc học', desc: 'Cán bộ thu nhận vân tay, chụp ảnh chân dung và tích hợp GPLX, BHYT vào hệ thống.' },
      { step: 4, title: 'Nhận tin nhắn kích hoạt', desc: 'Nhận tin nhắn SMS từ nguồn "VNeID", nhập mã OTP và đặt mật khẩu, mã Passcode bảo mật.' }
    ],
    processing_time: 'Trong ngày làm việc (không quá 03 ngày)',
    fee: 'Miễn phí hoàn toàn',
    online_url: 'https://vneid.gov.vn',
    views_count: 3100,
    forms: []
  },
  {
    id: 'proc_thong_bao_luu_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-07',
    title: 'Thông báo lưu trú qua VNeID hoặc trực tiếp tại Công an xã',
    target_audience: 'Cơ quan, tổ chức, cơ sở khám chữa bệnh, khách sạn, nhà trọ và cá nhân có người đến lưu trú qua đêm',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tuyến 100% qua Ứng dụng VNeID, Cổng DVC hoặc thông báo qua số điện thoại trực ban Công an xã',
    required_documents: [
      'Thông tin họ tên, số định danh cá nhân / CCCD của người đến lưu trú.',
      'Thời gian bắt đầu và kết thúc lưu trú, lý do lưu trú.'
    ],
    steps: [
      { step: 1, title: 'Mở ứng dụng VNeID', desc: 'Đăng nhập VNeID, vào mục Thủ tục hành chính -> Thông báo lưu trú.' },
      { step: 2, title: 'Nhập thông tin cơ sở và khách', desc: 'Chọn địa chỉ lưu trú tại xã Đức Hợp, quét mã QR CCCD của người lưu trú.' },
      { step: 3, title: 'Gửi thông báo', desc: 'Bấm Gửi thông báo đến Công an xã Đức Hợp trước 23h cùng ngày.' }
    ],
    processing_time: 'Giải quyết ngay lập tức trên hệ thống phần mềm',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 890,
    forms: []
  },
  {
    id: 'proc_khai_bao_tam_vang',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-08',
    title: 'Khai báo tạm vắng đối với công dân',
    target_audience: 'Công dân đi khỏi nơi cư trú thuộc các trường hợp quy định tại Điều 31 Luật Cư trú 2020',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại trụ sở Công an xã Đức Hợp hoặc trực tuyến qua Cổng Dịch vụ công',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Căn cước công dân hoặc số định danh cá nhân.'
    ],
    steps: [
      { step: 1, title: 'Điền mẫu CT01', desc: 'Ghi rõ lý do tạm vắng, địa chỉ nơi đến và thời gian tạm vắng.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Nộp trực tiếp tại Công an xã hoặc trực tuyến qua Cổng DVC Bộ Công an.' },
      { step: 3, title: 'Cấp phiếu khai báo', desc: 'Công an xã kiểm tra và cấp Phiếu khai báo tạm vắng (Mẫu CT03).' }
    ],
    processing_time: 'Trong ngày làm việc (không quá 01 ngày)',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 360,
    forms: []
  },
  {
    id: 'proc_xac_nhan_cu_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-09',
    title: 'Cấp Giấy xác nhận thông tin về cư trú (Mẫu CT07)',
    target_audience: 'Công dân có nhu cầu xác nhận thông tin cư trú trong trường hợp cần thiết',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Bộ phận Một cửa Công an xã hoặc trực tuyến qua Cổng Dịch vụ công / VNeID',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Thẻ Căn cước công dân hoặc xuất trình tài khoản VNeID.'
    ],
    steps: [
      { step: 1, title: 'Kê khai mẫu CT01', desc: 'Điền thông tin cá nhân và nội dung đề nghị xác nhận cư trú.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Nộp tại Công an xã Đức Hợp hoặc gửi hồ sơ điện tử qua Cổng DVC.' },
      { step: 3, title: 'Thẩm định & Cấp giấy', desc: 'Cán bộ tra cứu CSDLQG về dân cư và cấp văn bản CT07 có chữ ký số hoặc dấu đỏ.' }
    ],
    processing_time: '01 ngày làm việc (trường hợp phức tạp không quá 03 ngày)',
    fee: '10.000 VNĐ (trực tiếp) / Miễn phí hoặc 5.000 VNĐ (trực tuyến)',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 1750,
    forms: []
  },
  {
    id: 'proc_dieu_chinh_cu_tru',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-10',
    title: 'Điều chỉnh thông tin về cư trú trong CSDL Quốc gia về dân cư',
    target_audience: 'Công dân có sự thay đổi thông tin về chủ hộ, quan hệ nhân thân hoặc sai sót thông tin hộ tịch',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp hoặc nộp trực tuyến qua Cổng DVC',
    required_documents: [
      'Tờ khai thay đổi thông tin cư trú (Mẫu CT01).',
      'Giấy tờ pháp lý chứng minh sự thay đổi (Trích lục hộ tịch, Giấy chứng nhận đăng ký kết hôn, Quyết định của Tòa án...).'
    ],
    steps: [
      { step: 1, title: 'Chuẩn bị hồ sơ', desc: 'Kê khai mẫu CT01 kèm tài liệu chứng minh thông tin thay đổi.' },
      { step: 2, title: 'Nộp hồ sơ', desc: 'Đến Công an xã Đức Hợp (Thôn Nho Lâm) hoặc nộp qua Cổng DVC.' },
      { step: 3, title: 'Cập nhật hệ thống', desc: 'Cán bộ Công an đối soát và điều chỉnh thông tin trên hệ thống Cư trú quốc gia.' }
    ],
    processing_time: '03 ngày làm việc',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 670,
    forms: []
  },

  // =========================================================================
  // NHÓM 2: GIAO THÔNG & ĐĂNG KÝ XE (6 THỦ TỤC)
  // =========================================================================
  {
    id: 'proc_dang_ky_xe',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-11',
    title: 'Đăng ký, cấp biển số xe mô tô, xe gắn máy tại Công an xã Đức Hợp',
    target_audience: 'Cá nhân cư trú tại xã Đức Hợp; cơ quan, tổ chức có trụ sở tại xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Kê khai tờ khai đăng ký xe qua Cổng DVC Bộ Công an, sau đó mang xe và hồ sơ đến Công an xã Đức Hợp (Thôn Nho Lâm) để bấm biển số',
    required_documents: [
      'Giấy khai đăng ký xe (Kê khai online trên Cổng DVC để lấy mã hồ sơ).',
      'Giấy tờ của chủ xe: Căn cước công dân gắn chip hoặc tài khoản VNeID Mức 2.',
      'Giấy tờ nguồn gốc xe: Phiếu kiểm tra chất lượng xuất xưởng (xe sản xuất trong nước) hoặc Tờ khai nguồn gốc xe nhập khẩu.',
      'Giấy tờ chuyển quyền sở hữu xe: Hóa đơn GTGT (hóa đơn điện tử) theo quy định của Bộ Tài chính.',
      'Chứng từ nộp lệ phí trước bạ: Giấy nộp tiền vào ngân sách nhà nước hoặc mã giao dịch nộp thuế điện tử.'
    ],
    steps: [
      { step: 1, title: 'Nộp thuế trước bạ online', desc: 'Nộp lệ phí trước bạ xe máy qua Cổng DVC Quốc gia hoặc ứng dụng ngân hàng.' },
      { step: 2, title: 'Kê khai đăng ký xe online', desc: 'Truy cập Cổng DVC Bộ Công an, nhập số khung, số máy, mã thuế trước bạ để nhận Mã hồ sơ.' },
      { step: 3, title: 'Mang xe đến Công an xã', desc: 'Đưa xe cùng hồ sơ gốc đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ kiểm tra xe, chà số khung số máy.' },
      { step: 4, title: 'Bấm biển số định danh', desc: 'Bấm biển số trực tiếp trên máy tính tại Công an xã Đức Hợp và nhận biển số ngay; nhận giấy đăng ký xe sau 02 ngày làm việc.' }
    ],
    processing_time: 'Bấm và cấp biển số ngay trong ngày; Trả chứng nhận đăng ký xe không quá 02 ngày làm việc',
    fee: 'Theo Thông tư 60/2023/TT-BTC của Bộ Tài chính (Khu vực xã Đức Hợp: 50.000 VNĐ - 100.000 VNĐ tùy giá trị xe)',
    online_url: 'https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26292',
    views_count: 2450,
    forms: []
  },
  {
    id: 'proc_sang_ten_xe',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-12',
    title: 'Sang tên, di chuyển xe mô tô, xe gắn máy',
    target_audience: 'Tổ chức, cá nhân nhận chuyển quyền sở hữu xe (mua bán, tặng cho, thừa kế)',
    competent_authority: 'Công an xã Đức Hợp (nếu chủ mới cư trú tại xã Đức Hợp)',
    execution_method: 'Kê khai dịch vụ công, nộp chứng nhận thu hồi và hồ sơ xe tại Trụ sở Công an xã Đức Hợp',
    required_documents: [
      'Giấy khai đăng ký xe (Kê khai online).',
      'Chứng nhận thu hồi đăng ký, biển số xe (do chủ cũ làm thủ tục thu hồi).',
      'Hợp đồng mua bán, tặng cho xe có công chứng hoặc chứng thực của UBND cấp xã.',
      'Chứng từ nộp lệ phí trước bạ sang tên.'
    ],
    steps: [
      { step: 1, title: 'Chủ cũ làm thủ tục thu hồi', desc: 'Chủ cũ nộp lại đăng ký và biển số cũ tại nơi đăng ký ban đầu.' },
      { step: 2, title: 'Chủ mới nộp thuế trước bạ', desc: 'Nộp lệ phí trước bạ sang tên tại Chi cục Thuế hoặc qua Cổng DVC.' },
      { step: 3, title: 'Bấm biển số tại xã Đức Hợp', desc: 'Mang xe và hồ sơ đến Công an xã Đức Hợp để kiểm tra xe và bấm biển số định danh mới.' }
    ],
    processing_time: 'Không quá 02 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ',
    fee: 'Theo quy định hiện hành của Bộ Tài chính',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 1120,
    forms: []
  },
  {
    id: 'proc_thu_hoi_bien_so',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-13',
    title: 'Thu hồi chứng nhận đăng ký xe, biển số xe định danh',
    target_audience: 'Chủ xe khi bán, tặng cho, chuyển nhượng, xe hết niên hạn sử dụng hoặc xe bị mất cắp',
    competent_authority: 'Công an xã Đức Hợp (nếu xe trước đó đăng ký tại xã Đức Hợp)',
    execution_method: 'Kê khai dịch vụ công, nộp lại biển số và đăng ký xe tại Công an xã Đức Hợp',
    required_documents: [
      'Giấy khai thu hồi đăng ký, biển số xe (Kê khai online trên Cổng DVC).',
      'Chứng nhận đăng ký xe và Biển số xe thực tế.',
      'Hợp đồng chuyển quyền sở hữu xe (nếu là chuyển quyền sở hữu).'
    ],
    steps: [
      { step: 1, title: 'Kê khai online', desc: 'Kê khai Giấy khai thu hồi trên Cổng DVC Bộ Công an.' },
      { step: 2, title: 'Nộp biển số và giấy đăng ký', desc: 'Nộp biển số và đăng ký xe tại Công an xã Đức Hợp.' },
      { step: 3, title: 'Nhận chứng nhận thu hồi', desc: 'Công an xã cấp Chứng nhận thu hồi đăng ký, biển số xe để chủ xe giữ biển số định danh trong 05 năm.' }
    ],
    processing_time: 'Trong ngày làm việc (không quá 02 ngày)',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 850,
    forms: []
  },
  {
    id: 'proc_cap_doi_bien_so',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-14',
    title: 'Cấp đổi, cấp lại chứng nhận đăng ký xe, biển số xe bị mất hoặc mờ, hỏng',
    target_audience: 'Chủ xe có giấy đăng ký xe hoặc biển số xe bị mất, mờ, rách nát, hư hỏng',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tuyến qua Cổng DVC Bộ Công an hoặc nộp hồ sơ tại Công an xã Đức Hợp',
    required_documents: [
      'Giấy khai đăng ký xe (Kê khai online).',
      'Căn cước công dân hoặc VNeID của chủ xe.',
      'Biển số xe cũ (trường hợp xin đổi biển số bị mờ, hỏng).'
    ],
    steps: [
      { step: 1, title: 'Kê khai hồ sơ', desc: 'Kê khai đề nghị cấp đổi/cấp lại trên Cổng DVC.' },
      { step: 2, title: 'Nộp hồ sơ đối soát', desc: 'Đến Công an xã Đức Hợp xuất trình CCCD và nộp biển số cũ (nếu cấp đổi).' },
      { step: 3, title: 'Nhận biển số/đăng ký mới', desc: 'Nhận lại giấy chứng nhận đăng ký hoặc biển số xe theo lịch hẹn.' }
    ],
    processing_time: 'Cấp lại chứng nhận đăng ký: 30 ngày (để xác minh mất cắp); Cấp đổi biển số: 07 ngày làm việc',
    fee: 'Theo biểu mức thu phí của Bộ Tài chính',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 620,
    forms: []
  },
  {
    id: 'proc_phat_nguoi',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-15',
    title: 'Nộp phạt vi phạm giao thông trực tuyến (Phạt nguội) qua Cổng DVC Quốc gia',
    target_audience: 'Cá nhân, tổ chức vi phạm trật tự an toàn giao thông đường bộ',
    competent_authority: 'Công an xã Đức Hợp hỗ trợ tra cứu; Cục CSGT / Phòng CSGT / Công an cấp huyện xử phạt',
    execution_method: 'Trực tuyến 100% qua Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn)',
    required_documents: [
      'Số biên bản vi phạm hành chính hoặc Mã quyết định xử phạt.',
      'Tài khoản ngân hàng hoặc ví điện tử (VNPay, Momo, Viettel Money) để thanh toán trực tuyến.',
      'Số CCCD của người vi phạm.'
    ],
    steps: [
      { step: 1, title: 'Tra cứu quyết định xử phạt', desc: 'Truy cập Cổng DVC Quốc gia mục "Thanh toán trực tuyến" -> "Nộp phạt vi phạm giao thông", nhập số biên bản hoặc mã quyết định.' },
      { step: 2, title: 'Kiểm tra lỗi vi phạm & số tiền', desc: 'Xem chi tiết hình ảnh vi phạm, điều khoản xử phạt và số tiền nộp.' },
      { step: 3, title: 'Thanh toán trực tuyến', desc: 'Chọn thanh toán qua ngân hàng nội địa, mã QR ngân hàng hoặc ví điện tử.' },
      { step: 4, title: 'Đăng ký nhận lại giấy tờ tại nhà', desc: 'Chọn nhận lại Giấy phép lái xe qua đường Bưu điện (nếu có bị tạm giữ giấy tờ) mà không cần đi lại.' }
    ],
    processing_time: 'Xử lý gạch nợ tự động trên hệ thống dữ liệu CSGT ngay sau khi thanh toán thành công',
    fee: 'Tiền phạt theo quyết định xử phạt vi phạm hành chính',
    online_url: 'https://dichvucong.gov.vn',
    views_count: 2750,
    forms: []
  },
  {
    id: 'proc_tra_lai_giay_to_xe',
    category_id: 'giao_thong',
    code: 'TTHC-BCA-16',
    title: 'Nhận lại giấy phép lái xe, phương tiện bị tạm giữ sau khi chấp hành xử phạt',
    target_audience: 'Người vi phạm giao thông đã hoàn thành việc nộp phạt theo quyết định xử phạt',
    competent_authority: 'Đơn vị ra quyết định tạm giữ (Đội CSGT hoặc Công an cấp có thẩm quyền)',
    execution_method: 'Trực tiếp tại nơi tạm giữ hoặc nhận qua dịch vụ bưu chính công ích',
    required_documents: [
      'Quyết định xử phạt vi phạm hành chính và Biên lai nộp tiền phạt.',
      'Biên bản tạm giữ tang vật, phương tiện, giấy phép.',
      'Căn cước công dân của người nhận lại.'
    ],
    steps: [
      { step: 1, title: 'Nộp phạt đầy đủ', desc: 'Nộp phạt qua ngân hàng/kho bạc hoặc trực tuyến trên Cổng DVC.' },
      { step: 2, title: 'Xuất trình chứng từ', desc: 'Mang chứng từ nộp phạt đến cơ quan Công an tạm giữ phương tiện.' },
      { step: 3, title: 'Kiểm tra và nhận lại', desc: 'Kiểm tra tình trạng niêm phong phương tiện, ký biên bản bàn giao nhận lại xe và giấy tờ.' }
    ],
    processing_time: 'Giải quyết ngay sau khi xuất trình đầy đủ chứng từ nộp phạt',
    fee: 'Phí lưu kho bãi theo quy định (nếu có)',
    online_url: 'https://dichvucong.gov.vn',
    views_count: 730,
    forms: []
  },

  // =========================================================================
  // NHÓM 3: PHÒNG CHÁY, CHỮA CHÁY VÀ CỨU NẠN, CỨU HỘ (5 THỦ TỤC)
  // =========================================================================
  {
    id: 'proc_pccc',
    category_id: 'pccc',
    code: 'TTHC-BCA-17',
    title: 'Hướng dẫn an toàn PCCC đối với hộ gia đình, nhà ở kết hợp kinh doanh',
    target_audience: 'Các hộ gia đình, nhà ở kết hợp sản xuất kinh doanh trên địa bàn xã Đức Hợp',
    competent_authority: 'UBND xã Đức Hợp và Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Kê khai trực tiếp tại trụ sở Công an xã Đức Hợp hoặc kiểm tra theo kế hoạch định kỳ',
    required_documents: [
      'Bản cam kết bảo đảm an toàn PCCC hộ gia đình (theo mẫu của Công an xã Đức Hợp).',
      'Sơ đồ bố trí mặt bằng kinh doanh, vị trí bình chữa cháy xách tay, lối thoát nạn khẩn cấp.',
      'Biên bản kiểm tra an toàn PCCC định kỳ do Công an xã lập.'
    ],
    steps: [
      { step: 1, title: 'Tự kiểm tra an toàn tại nhà', desc: 'Kiểm tra hệ thống dây dẫn điện, bếp gas, khóa bình gas và mở lối thoát nạn thứ 2 (chuồng cọp có cửa thoát hiểm).' },
      { step: 2, title: 'Trang bị phương tiện', desc: 'Mỗi hộ gia đình trang bị tối thiểu 01 bình chữa cháy bột hoặc khí CO2, búa thoát hiểm.' },
      { step: 3, title: 'Ký cam kết PCCC', desc: 'Ký bản cam kết bảo đảm an toàn PCCC và nộp cho Cán bộ Cảnh sát khu vực/Công an xã.' },
      { step: 4, title: 'Tham gia diễn tập', desc: 'Tham gia các buổi diễn tập kỹ năng thoát nạn và sử dụng bình chữa cháy do Công an xã tổ chức.' }
    ],
    processing_time: 'Thực hiện thường xuyên liên tục tại khu dân cư',
    fee: 'Miễn phí hoàn toàn',
    online_url: 'https://pccc.gov.vn',
    views_count: 1320,
    forms: []
  },
  {
    id: 'proc_to_lien_gia_pccc',
    category_id: 'pccc',
    code: 'TTHC-BCA-18',
    title: 'Thành lập và quản lý Mô hình "Tổ liên gia an toàn PCCC" tại các thôn',
    target_audience: 'Cụm từ 5 đến 15 hộ gia đình liền kề tại các thôn thuộc xã Đức Hợp',
    competent_authority: 'UBND xã Đức Hợp phê duyệt; Công an xã Đức Hợp tham mưu, hướng dẫn',
    execution_method: 'Đăng ký tại Trưởng thôn hoặc trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)',
    required_documents: [
      'Biên bản họp thống nhất của các hộ gia đình trong cụm dân cư.',
      'Danh sách các hộ tham gia Tổ liên gia an toàn PCCC.',
      'Bản quy chế hoạt động của Tổ liên gia an toàn PCCC.'
    ],
    steps: [
      { step: 1, title: 'Họp dân thống nhất', desc: 'Trưởng thôn cùng các hộ dân họp thống nhất thành lập tổ liên gia.' },
      { step: 2, title: 'Lắp đặt chuông báo động', desc: 'Lắp đặt nút ấn báo cháy và chuông báo động liên thông giữa các nhà trong tổ.' },
      { step: 3, title: 'UBND xã ban hành quyết định', desc: 'Công an xã thẩm tra và tham mưu UBND xã ra quyết định công nhận.' },
      { step: 4, title: 'Diễn tập phương án', desc: 'Tập huấn kỹ năng phối hợp dập lửa và cứu người khi có chuông báo cháy.' }
    ],
    processing_time: '05 ngày làm việc',
    fee: 'Nhà nước hỗ trợ; các hộ tự trang bị chuông báo động liên gia',
    online_url: 'https://pccc.gov.vn',
    views_count: 940,
    forms: []
  },
  {
    id: 'proc_diem_chua_chay_cong_cong',
    category_id: 'pccc',
    code: 'TTHC-BCA-19',
    title: 'Xây dựng "Điểm chữa cháy công cộng" tại ngõ sâu, xe chữa cháy khó tiếp cận',
    target_audience: 'Các cụm dân cư nằm trong ngõ hẹp, sâu từ 50m trở lên mà xe chữa cháy không vào được',
    competent_authority: 'UBND xã Đức Hợp và Công an xã Đức Hợp',
    execution_method: 'Khảo sát và lắp đặt tại các vị trí thuận tiện trong ngõ xóm',
    required_documents: [
      'Biên bản khảo sát địa bàn của Công an xã Đức Hợp.',
      'Sơ đồ vị trí đặt phương tiện chữa cháy công cộng.'
    ],
    steps: [
      { step: 1, title: 'Khảo sát ngõ xóm', desc: 'Công an xã rà soát các ngõ sâu, lối đi hẹp trên địa bàn thôn Nho Lâm và các thôn lân cận.' },
      { step: 2, title: 'Lắp đặt tủ phương tiện', desc: 'Trang bị bình chữa cháy, xà beng, kìm cộng lực, búa tạ và tiêu lệnh chữa cháy.' },
      { step: 3, title: 'Bàn giao cho dân quản lý', desc: 'Bàn giao chìa khóa/vị trí phương tiện cho bà con nhân dân trong ngõ cùng quản lý sử dụng.' }
    ],
    processing_time: 'Theo kế hoạch trang bị của UBND xã',
    fee: 'Kinh phí ngân sách và xã hội hóa',
    online_url: 'https://pccc.gov.vn',
    views_count: 580,
    forms: []
  },
  {
    id: 'proc_tap_huan_pccc_dan_phong',
    category_id: 'pccc',
    code: 'TTHC-BCA-20',
    title: 'Huấn luyện, bồi dưỡng nghiệp vụ PCCC và CNCH cho lực lượng ANTT cơ sở',
    target_audience: 'Lực lượng tham gia bảo vệ an ninh, trật tự ở cơ sở, đội dân phòng các thôn thuộc xã Đức Hợp',
    competent_authority: 'Công an cấp huyện/tỉnh cấp Giấy chứng nhận; Công an xã Đức Hợp tổ chức triệu tập',
    execution_method: 'Tham gia lớp tập huấn lý thuyết và thực hành dập tắt bình gas, khay xăng rò rỉ',
    required_documents: [
      'Công văn triệu tập huấn luyện của cơ quan Công an.',
      'Danh sách học viên tham gia tập huấn kèm ảnh thẻ.'
    ],
    steps: [
      { step: 1, title: 'Đăng ký danh sách', desc: 'Lập danh sách lực lượng nòng cốt cơ sở tham gia huấn luyện.' },
      { step: 2, title: 'Học lý thuyết và thực hành', desc: 'Học các biện pháp an toàn điện, kỹ năng dập lửa gas, cứu người mắc kẹt.' },
      { step: 3, title: 'Kiểm tra sát hạch', desc: 'Thực hành thao tác dập khay lửa cháy bằng bình xách tay.' },
      { step: 4, title: 'Cấp chứng nhận huấn luyện', desc: 'Cấp Giấy chứng nhận huấn luyện nghiệp vụ PCCC & CNCH có thời hạn 05 năm.' }
    ],
    processing_time: 'Thời lượng khóa học từ 16 đến 32 giờ',
    fee: 'Theo quy định đào tạo nghiệp vụ',
    online_url: 'https://pccc.gov.vn',
    views_count: 490,
    forms: []
  },
  {
    id: 'proc_khai_bao_su_co_chay',
    category_id: 'pccc',
    code: 'TTHC-BCA-21',
    title: 'Khai báo và phối hợp điều tra nguyên nhân sự cố cháy, nổ quy mô nhỏ',
    target_audience: 'Hộ gia đình, cá nhân, cơ sở xảy ra sự cố cháy, nổ hoặc người phát hiện sự cố',
    competent_authority: 'Công an xã Đức Hợp (tiếp nhận ban đầu) và Cơ quan Cảnh sát PCCC & CNCH',
    execution_method: 'Gọi điện khẩn cấp đến Hotline Trực ban Công an xã Đức Hợp (02213.815.999) hoặc số 114',
    required_documents: [
      'Biên bản vụ việc cháy nổ do Công an xã lập tại hiện trường.',
      'Bản tường trình của chủ nhà/người chứng kiến sự việc.',
      'Bảng thống kê ước tính thiệt hại về tài sản.'
    ],
    steps: [
      { step: 1, title: 'Báo cháy khẩn cấp', desc: 'Hô hoán dập lửa và gọi ngay 02213.815.999 hoặc 114.' },
      { step: 2, title: 'Bảo vệ hiện trường', desc: 'Công an xã xuống hiện trường dập tàn lửa và phong tỏa khu vực điều tra.' },
      { step: 3, title: 'Khám nghiệm hiện trường', desc: 'Xác định điểm xuất phát cháy (chập điện, tàn thuốc, rò rỉ khí gas...).' },
      { step: 4, title: 'Kết luận vụ việc', desc: 'Lập biên bản kết luận nguyên nhân và bàn giao tài sản cho gia đình khắc phục.' }
    ],
    processing_time: 'Tiếp nhận xử lý ngay lập tức 24/24h',
    fee: 'Miễn phí',
    online_url: 'https://pccc.gov.vn',
    views_count: 610,
    forms: []
  },

  // =========================================================================
  // NHÓM 4: TRẬT TỰ XÃ HỘI & NGÀNH NGHỀ CÓ ĐIỀU KIỆN (5 THỦ TỤC)
  // =========================================================================
  {
    id: 'proc_dang_ky_nha_tro',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-22',
    title: 'Đăng ký quản lý an ninh trật tự đối với cơ sở kinh doanh nhà trọ, lưu trú',
    target_audience: 'Hộ gia đình, cá nhân có phòng trọ, nhà cho người ngoài đến thuê trọ trên địa bàn xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Nộp bản khai tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)',
    required_documents: [
      'Bản khai thông tin cơ sở cho thuê trọ (Số lượng phòng, số lượng khách tối đa).',
      'Giấy chứng nhận đăng ký kinh doanh hoặc đăng ký hộ kinh doanh cá thể.',
      'Bản cam kết chấp hành nghiêm các quy định về an ninh trật tự và PCCC.'
    ],
    steps: [
      { step: 1, title: 'Nộp bản khai cơ sở', desc: 'Đến Công an xã nộp bản khai cơ sở nhà trọ và danh sách người thuê.' },
      { step: 2, title: 'Ký cam kết ANTT', desc: 'Ký cam kết không để xảy ra tệ nạn ma túy, cờ bạc, mại dâm trong khu trọ.' },
      { step: 3, title: 'Hướng dẫn thông báo lưu trú', desc: 'Cán bộ hướng dẫn chủ trọ cài app VNeID để thông báo lưu trú tự động hàng ngày.' }
    ],
    processing_time: '03 ngày làm việc',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 780,
    forms: []
  },
  {
    id: 'proc_thu_hoi_vu_khi',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-23',
    title: 'Tiếp nhận, thu gom, vận động giao nộp vũ khí, vật liệu nổ, công cụ hỗ trợ và pháo',
    target_audience: 'Mọi cá nhân, tổ chức phát hiện hoặc đang cất giữ súng săn, đao kiếm, pháo nổ, đạn dược',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Mang đến giao nộp trực tiếp tại Trụ sở Công an xã Đức Hợp hoặc gọi điện để cán bộ đến tận nơi thu nhận',
    required_documents: [
      'Không yêu cầu giấy tờ phức tạp. Người tự giác giao nộp được bảo đảm bí mật thông tin và KHÔNG BỊ XỬ PHẠT.'
    ],
    steps: [
      { step: 1, title: 'Đến cơ quan Công an', desc: 'Mang vũ khí, công cụ tự chế hoặc pháo đến Công an xã Đức Hợp (Thôn Nho Lâm).' },
      { step: 2, title: 'Lập biên bản tiếp nhận', desc: 'Cán bộ lập Biên bản giao nhận vũ khí, vật liệu nổ, ghi nhận tinh thần tự giác.' },
      { step: 3, title: 'Phân loại tiêu hủy', desc: 'Vũ khí được niêm phong đưa vào kho quản lý để tiêu hủy theo quy định pháp luật.' }
    ],
    processing_time: 'Tiếp nhận xử lý ngay lập tức',
    fee: 'Miễn phí (Có chính sách biểu dương, khen thưởng người tự giác giao nộp)',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 1040,
    forms: []
  },
  {
    id: 'proc_khai_bao_karaoke',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-24',
    title: 'Quản lý cam kết an ninh trật tự và tiếng ồn đối với dịch vụ âm thanh, đám cưới',
    target_audience: 'Cơ sở kinh doanh dịch vụ loa kéo, âm thanh ánh sáng phục vụ đám cưới, sự kiện tại xã Đức Hợp',
    competent_authority: 'UBND xã Đức Hợp và Công an xã Đức Hợp',
    execution_method: 'Ký cam kết trực tiếp tại Trụ sở Công an xã Đức Hợp trước khi tổ chức hoạt động',
    required_documents: [
      'Bản cam kết không sử dụng âm thanh công suất lớn quá 22h00 đêm.',
      'Đăng ký thời gian và địa điểm phục vụ âm thanh tại các thôn.'
    ],
    steps: [
      { step: 1, title: 'Ký cam kết giờ giấc', desc: 'Chủ dịch vụ âm thanh ký cam kết mở âm lượng vừa phải, dừng trước 22h đêm.' },
      { step: 2, title: 'Giám sát địa bàn', desc: 'Tổ ANTT cơ sở và Công an xã tuần tra, nhắc nhở nếu vi phạm làm ồn khu dân cư.' },
      { step: 3, title: 'Xử lý vi phạm', desc: 'Xử phạt nghiêm các trường hợp cố tình mở nhạc to gây mất an ninh trật tự ban đêm.' }
    ],
    processing_time: 'Trong ngày làm việc',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 530,
    forms: []
  },
  {
    id: 'proc_quan_ly_cam_do',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-25',
    title: 'Quản lý cơ sở dịch vụ cầm đồ, thu mua phế liệu về phòng ngừa tội phạm',
    target_audience: 'Các cơ sở kinh doanh cầm đồ, thu mua phế liệu trên địa bàn xã Đức Hợp',
    competent_authority: 'Công an xã Đức Hợp phối hợp Công an cấp có thẩm quyền',
    execution_method: 'Kiểm tra hành chính định kỳ và đột xuất tại cơ sở',
    required_documents: [
      'Sổ theo dõi cầm đồ, sổ theo dõi mua bán phế liệu (ghi rõ CCCD người bán/cầm cố).',
      'Giấy chứng nhận đủ điều kiện về an ninh trật tự (đối với cơ sở cầm đồ).'
    ],
    steps: [
      { step: 1, title: 'Kiểm tra sổ sách', desc: 'Kiểm tra việc ghi chép lai lịch người cầm đồ, biển số xe, số khung số máy tài sản.' },
      { step: 2, title: 'Đối soát tài sản trộm cắp', desc: 'Đối chiếu danh sách xe máy, tài sản trộm cắp đang truy tìm của lực lượng Công an.' },
      { step: 3, title: 'Xử lý vi phạm', desc: 'Xử phạt và thu hồi giấy phép nếu chứa chấp, tiêu thụ tài sản do người khác phạm tội mà có.' }
    ],
    processing_time: 'Thực hiện định kỳ và đột xuất',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 480,
    forms: []
  },
  {
    id: 'proc_xac_nhan_ly_lich_tu_phap',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-26',
    title: 'Hướng dẫn cấp Phiếu Lý lịch tư pháp trên ứng dụng VNeID',
    target_audience: 'Công dân Việt Nam có tài khoản định danh điện tử VNeID Mức 2',
    competent_authority: 'Sở Tư pháp cấp; Công an xã Đức Hợp hướng dẫn công dân thao tác trên VNeID',
    execution_method: 'Trực tuyến 100% trên ứng dụng VNeID (không cần nộp hồ sơ giấy)',
    required_documents: [
      'Tài khoản định danh điện tử VNeID Mức 2 đã kích hoạt.',
      'Không yêu cầu mang theo bản sao CCCD hay sổ hộ khẩu.'
    ],
    steps: [
      { step: 1, title: 'Mở app VNeID', desc: 'Vào mục "Thủ tục hành chính" -> Chọn "Cấp Phiếu lý lịch tư pháp".' },
      { step: 2, title: 'Chọn cơ quan thực hiện', desc: 'Chọn Sở Tư pháp tỉnh Hưng Yên, chọn loại phiếu (Số 1 hoặc Số 2).' },
      { step: 3, title: 'Thanh toán lệ phí online', desc: 'Nộp phí 200.000 VNĐ (hoặc 100.000 VNĐ đối với học sinh/sinh viên) trực tuyến qua app ngân hàng.' },
      { step: 4, title: 'Nhận bản điện tử', desc: 'Phiếu lý lịch tư pháp điện tử trả về tài khoản VNeID có giá trị pháp lý tương đương bản giấy.' }
    ],
    processing_time: 'Không quá 10 ngày làm việc kể từ ngày nhận đủ hồ sơ',
    fee: '200.000 VNĐ / lần cấp (Giảm 50% cho học sinh, sinh viên, người có công)',
    online_url: 'https://vneid.gov.vn',
    views_count: 2150,
    forms: []
  },

  // =========================================================================
  // NHÓM 5: TIẾP NHẬN TIN BÁO TỘI PHẠM & GIẢI QUYẾT ANTT (4 THỦ TỤC)
  // =========================================================================
  {
    id: 'proc_to_giac_toi_pham',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-27',
    title: 'Tiếp nhận, giải quyết tố giác, tin báo về tội phạm và kiến nghị khởi tố',
    target_audience: 'Mọi cá nhân, cơ quan, tổ chức phát hiện hành vi có dấu hiệu tội phạm',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm), qua điện thoại 02213.815.999 hoặc qua tính năng "Kiến nghị phản ánh về ANTT" trên VNeID',
    required_documents: [
      'Đơn tố giác, báo tin tội phạm (hoặc trình bày miệng để cán bộ lập biên bản tiếp nhận).',
      'Các tài liệu, video, hình ảnh, chứng từ chứng minh hành vi phạm tội (nếu có).'
    ],
    steps: [
      { step: 1, title: 'Tiếp nhận tin báo', desc: 'Cán bộ trực ban Công an xã tiếp nhận 24/24h, ghi vào Sổ tiếp nhận nguồn tin về tội phạm.' },
      { step: 2, title: 'Lập biên bản ban đầu', desc: 'Lấy lời khai ban đầu của người báo tin, bảo vệ hiện trường và thu giữ vật chứng cấp bách.' },
      { step: 3, title: 'Báo cáo & Phân loại', desc: 'Báo cáo ngay Trưởng Công an xã và chuyển hồ sơ lên Cơ quan CSĐT Công an cấp có thẩm quyền giải quyết theo luật định.' }
    ],
    processing_time: 'Tiếp nhận ngay 24/24h; Giải quyết phân loại trong thời hạn không quá 07 ngày',
    fee: 'Miễn phí hoàn toàn (Bảo vệ tuyệt đối bí mật danh tính người tố giác)',
    online_url: 'https://vneid.gov.vn',
    views_count: 1850,
    forms: []
  },
  {
    id: 'proc_to_giac_lua_dao_mang',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-28',
    title: 'Tiếp nhận tin báo tố giác hành vi lừa đảo chiếm đoạt tài sản trên không gian mạng',
    target_audience: 'Nạn nhân bị chiếm đoạt tiền qua mạng, app giả mạo, đầu tư ảo hoặc người phát hiện dấu hiệu lừa đảo',
    competent_authority: 'Công an xã Đức Hợp, tỉnh Hưng Yên',
    execution_method: 'Đến trực tiếp Trụ sở Công an xã Đức Hợp hoặc gọi khẩn cấp Trực ban: 02213.815.999',
    required_documents: [
      'Đơn trình báo bị lừa đảo chiếm đoạt tài sản qua mạng.',
      'Sao kê tài khoản ngân hàng thể hiện giao dịch chuyển tiền cho đối tượng lừa đảo.',
      'Ảnh chụp màn hình toàn bộ tin nhắn Zalo, Facebook, Telegram, số điện thoại đối tượng đã liên hệ.',
      'Đường link trang web, file cài đặt app giả mạo (.apk) mà đối tượng đã gửi.'
    ],
    steps: [
      { step: 1, title: 'Khẩn cấp báo ngân hàng', desc: 'Ngay khi phát hiện bị lừa, gọi ngay tổng đài ngân hàng để yêu cầu KHÓA TÀI KHOẢN VÀ PHONG TỎA DÒNG TIỀN.' },
      { step: 2, title: 'Trình báo Công an xã', desc: 'Đến ngay Công an xã Đức Hợp (Thôn Nho Lâm) mang theo CCCD và chứng từ sao kê.' },
      { step: 3, title: 'Lập hồ sơ phong tỏa', desc: 'Công an xã lập hồ sơ ban đầu, phối hợp đơn vị nghiệp vụ an ninh mạng ngăn chặn tài khoản thụ hưởng.' }
    ],
    processing_time: 'Tiếp nhận khẩn cấp 24/24h',
    fee: 'Miễn phí',
    online_url: 'https://canhbao.ncsc.gov.vn',
    views_count: 3200,
    forms: []
  },
  {
    id: 'proc_hoa_giai_mauchuan',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-29',
    title: 'Hòa giải mâu thuẫn, tranh chấp nội bộ trong nhân dân ở cơ sở',
    target_audience: 'Hộ gia đình, cá nhân có xích mích, tranh chấp dân sự, ranh giới đất đai, bạo lực gia đình nhỏ',
    competent_authority: 'Tổ hòa giải các thôn và Công an xã Đức Hợp phối hợp hòa giải',
    execution_method: 'Gặp gỡ trực tiếp tại Nhà văn hóa thôn hoặc Trụ sở Công an xã Đức Hợp',
    required_documents: [
      'Đơn đề nghị hòa giải (hoặc phản ánh của người dân trong thôn xóm).',
      'Giấy tờ liên quan đến nguồn gốc mâu thuẫn (giấy tờ đất đai, thỏa thuận...)'
    ],
    steps: [
      { step: 1, title: 'Tiếp nhận vụ việc', desc: 'Cảnh sát khu vực phụ trách thôn nắm tình hình mâu thuẫn.' },
      { step: 2, title: 'Tổ chức buổi hòa giải', desc: 'Mời các bên lên Nhà văn hóa thôn hoặc trụ sở xã, lắng nghe nguyện vọng.' },
      { step: 3, title: 'Lập biên bản hòa giải', desc: 'Tuyên truyền căn cứ pháp luật và tình làng nghĩa xóm, các bên ký cam kết giữ gìn ANTT.' }
    ],
    processing_time: 'Trong thời hạn 07 đến 15 ngày làm việc',
    fee: 'Miễn phí',
    online_url: 'https://dichvucong.bocongan.gov.vn',
    views_count: 510,
    forms: []
  },
  {
    id: 'proc_bao_ve_antt_co_so',
    category_id: 'canh_bao',
    code: 'TTHC-BCA-30',
    title: 'Đăng ký tham gia lực lượng tham gia bảo vệ an ninh, trật tự ở cơ sở theo Luật 2023',
    target_audience: 'Công dân từ đủ 18 tuổi đến 70 tuổi cư trú tại xã Đức Hợp, có lý lịch trong sạch, tự nguyện tham gia',
    competent_authority: 'UBND xã Đức Hợp ra quyết định công nhận; Công an xã Đức Hợp tuyển chọn, quản lý',
    execution_method: 'Nộp hồ sơ trực tiếp tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)',
    required_documents: [
      'Đơn tự nguyện tham gia lực lượng bảo vệ an ninh, trật tự ở cơ sở.',
      'Sơ yếu lý lịch có xác nhận của UBND xã Đức Hợp.',
      'Giấy khám sức khỏe do cơ sở y tế có thẩm quyền cấp.',
      'Bản sao bằng tốt nghiệp THCS trở lên.'
    ],
    steps: [
      { step: 1, title: 'Nộp hồ sơ đăng ký', desc: 'Nộp hồ sơ tại Công an xã Đức Hợp trong đợt thông báo tuyển dụng.' },
      { step: 2, title: 'Xét duyệt lý lịch & Tiêu chuẩn', desc: 'Hội đồng xét tuyển kiểm tra phẩm chất chính trị, đạo đức và sức khỏe.' },
      { step: 3, title: 'Bổ nhiệm và cấp trang phục', desc: 'UBND xã ban hành quyết định thành lập Tổ ANTT thôn, cấp thẻ và trang phục bảo đảm hoạt động.' }
    ],
    processing_time: 'Theo kế hoạch tuyển chọn hàng năm của UBND xã Đức Hợp',
    fee: 'Miễn phí hoàn toàn; Lực lượng được hưởng phụ cấp hàng tháng theo Nghị quyết HĐND tỉnh Hưng Yên',
    online_url: 'https://bocongan.gov.vn',
    views_count: 1210,
    forms: []
  }
];

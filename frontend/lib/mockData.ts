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
    ],
    online_guide: {
      platform: 'Cổng DVC Bộ Công an & Ứng dụng VNeID',
      portal_name: 'Cổng Dịch vụ công Bộ Công an (dichvucong.bocongan.gov.vn) hoặc VNeID',
      prerequisites: [
        'Tài khoản VNeID đã kích hoạt Định danh điện tử Mức 2.',
        'Bản chụp ảnh hoặc scan rõ nét Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán hoặc Hợp đồng thuê nhà có công chứng/chứng thực).',
        'Tờ khai CT01 đã điền đầy đủ và có chữ ký xác nhận của chủ hộ, chủ sở hữu chỗ ở hợp pháp (nếu nhập hộ vào người khác).'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Đăng nhập Cổng Dịch vụ công hoặc mở ứng dụng VNeID',
          description: 'Truy cập cổng dichvucong.bocongan.gov.vn hoặc mở app VNeID trên điện thoại.',
          sub_steps: [
            'Trên máy tính: Vào trang dichvucong.bocongan.gov.vn, bấm "Đăng nhập" -> Chọn "Đăng nhập bằng tài khoản Định danh điện tử cấp bởi Bộ Công an (VNeID)".',
            'Trên điện thoại: Mở VNeID, đăng nhập bằng mật khẩu/vân tay -> Chọn mục "Dịch vụ công" (hoặc "Thủ tục hành chính") -> Chọn "Cư trú" -> Chọn "Đăng ký thường trú".'
          ]
        },
        {
          step_num: 2,
          title: 'Chọn cơ quan thực hiện và trường hợp đăng ký',
          description: 'Xác định thẩm quyền tiếp nhận hồ sơ tại Công an xã Đức Hợp.',
          sub_steps: [
            'Cơ quan thực hiện: Chọn Tỉnh Hưng Yên -> Chọn cơ quan cấp xã: "Công an xã Đức Hợp, tỉnh Hưng Yên".',
            'Trường hợp đăng ký: Chọn "Nhân khẩu từ ngoài xã đến" hoặc "Đăng ký thường trú về chỗ ở mới".'
          ]
        },
        {
          step_num: 3,
          title: 'Kê khai thông tin người thay đổi nơi cư trú',
          description: 'Kiểm tra và điền thông tin người đăng ký thường trú.',
          sub_steps: [
            'Hệ thống tự động trích xuất thông tin cá nhân của người nộp từ Cơ sở dữ liệu quốc gia về dân cư.',
            'Nếu đăng ký cho người thân trong gia đình (vợ, con): Bấm "Thêm người cùng thay đổi nơi cư trú" và nhập Số định danh cá nhân của từng thành viên.',
            'Nhập chính xác địa chỉ chỗ ở hợp pháp mới tại thôn xóm thuộc xã Đức Hợp (VD: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên).'
          ]
        },
        {
          step_num: 4,
          title: 'Đính kèm tài liệu hồ sơ điện tử',
          description: 'Tải lên các file ảnh chụp hoặc scan giấy tờ theo định dạng PDF, JPG, PNG.',
          sub_steps: [
            'Mục 1: Tải lên ảnh chụp Tờ khai CT01 (có chữ ký của người kê khai và chủ hộ).',
            'Mục 2: Tải lên ảnh chụp Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua nhà đất hoặc Hợp đồng thuê nhà).',
            'Mục 3: Tải Giấy tờ chứng minh quan hệ nhân thân (nếu nhập hộ vào người thân mà trên CSDLQG chưa cập nhật).'
          ]
        },
        {
          step_num: 5,
          title: 'Chọn hình thức nhận kết quả, nộp lệ phí và hoàn tất',
          description: 'Xác nhận thông tin, gửi hồ sơ và lưu mã hồ sơ tra cứu.',
          sub_steps: [
            'Chọn hình thức nhận kết quả: Nhận qua VNeID (bản điện tử CT08) hoặc nhận trực tiếp bản giấy tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm).',
            'Thanh toán lệ phí trực tuyến: 10.000 VNĐ qua cổng thanh toán trực tuyến.',
            'Tích chọn "Tôi xin cam đoan những thông tin kê khai trên là đúng sự thật" -> Nhấn "Gửi hồ sơ".',
            'Lưu lại Mã hồ sơ trực tuyến để theo dõi tiến độ xử lý của Cán bộ Công an xã.'
          ]
        }
      ],
      important_notes: [
        'Thời hạn giải quyết theo quy định là 07 ngày làm việc kể từ khi nộp đủ hồ sơ hợp lệ.',
        'Sổ hộ khẩu giấy đã hết giá trị sử dụng từ ngày 01/01/2023; kết quả đăng ký sẽ được cập nhật trực tiếp trên VNeID và CSDLQG về dân cư.',
        'Nếu có sai sót hồ sơ, Cán bộ Công an xã Đức Hợp sẽ gửi thông báo yêu cầu bổ sung qua tài khoản DVC/VNeID hoặc liên hệ số điện thoại của công dân.'
      ]
    }
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
    ],
    online_guide: {
      platform: 'Cổng Dịch vụ công Bộ Công an',
      portal_name: 'Cổng Dịch vụ công Bộ Công an (dichvucong.bocongan.gov.vn)',
      prerequisites: [
        'Chủ xe có tài khoản VNeID Mức 2 hoặc tài khoản Cổng DVC Quốc gia.',
        'Đã nộp xong Lệ phí trước bạ điện tử (qua ứng dụng eTax Mobile của Tổng cục Thuế hoặc qua Cổng DVC Quốc gia/Ngân hàng) và có mã số biên lai nộp thuế điện tử.',
        'Có hóa đơn giá trị gia tăng điện tử của cửa hàng bán xe xuất theo số CCCD của chủ xe.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Đăng nhập Cổng DVC Bộ Công an và chọn thủ tục',
          description: 'Truy cập dichvucong.bocongan.gov.vn bằng tài khoản VNeID.',
          sub_steps: [
            'Gõ vào ô tìm kiếm: "Đăng ký, cấp biển số xe mô tô, xe gắn máy lần đầu tại Công an cấp xã".',
            'Bấm nút "Nộp hồ sơ trực tuyến".'
          ]
        },
        {
          step_num: 2,
          title: 'Kê khai thông tin nguồn gốc xe và lệ phí trước bạ',
          description: 'Hệ thống tự động đồng bộ dữ liệu hóa đơn và dữ liệu nộp thuế.',
          sub_steps: [
            'Nhập "Mã hồ sơ lệ phí trước bạ điện tử" hoặc Số khung, Số máy in trên phiếu kiểm tra chất lượng xuất xưởng.',
            'Bấm "Tra cứu" -> Hệ thống tự động điền các thông tin: Nhãn hiệu, dung tích xi lanh, màu sơn, năm sản xuất.'
          ]
        },
        {
          step_num: 3,
          title: 'Chọn cơ quan đăng ký xe tại xã Đức Hợp',
          description: 'Phân cấp đăng ký xe mô tô về Công an cấp xã theo Thông tư 24/2023/TT-BCA.',
          sub_steps: [
            'Chọn nơi nộp hồ sơ: Tỉnh Hưng Yên -> Cơ quan: "Công an xã Đức Hợp, tỉnh Hưng Yên".',
            'Kiểm tra lại thông tin chủ xe (Họ tên, ngày sinh, số CCCD, địa chỉ thường trú/tạm trú).'
          ]
        },
        {
          step_num: 4,
          title: 'Gửi tờ khai và lấy Mã hồ sơ đăng ký xe trực tuyến',
          description: 'Hoàn tất bước kê khai online trên hệ thống.',
          sub_steps: [
            'Tích cam đoan thông tin kê khai là chính xác -> Bấm "Gửi hồ sơ".',
            'Hệ thống cấp một "Mã hồ sơ đăng ký xe" (kèm mã QR). In giấy khai đăng ký xe hoặc chụp lại mã hồ sơ vào điện thoại.'
          ]
        },
        {
          step_num: 5,
          title: 'Mang xe đến Trụ sở Công an xã Đức Hợp để bấm biển số',
          description: 'Thực hiện bước kiểm tra thực tế xe và nhận biển số định danh.',
          sub_steps: [
            'Đưa xe mô tô cùng toàn bộ hồ sơ gốc (Hóa đơn GTGT, Phiếu xuất xưởng) đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm).',
            'Cán bộ Công an xã kiểm tra xe, chà số khung số máy thực tế.',
            'Chủ xe được hướng dẫn bấm biển số ngẫu nhiên trên hệ thống hoặc cấp lại biển số định danh đã có.',
            'Nhận biển số xe ngay trong ngày và nhận giấy hẹn trả Chứng nhận đăng ký xe (không quá 02 ngày làm việc).'
          ]
        }
      ],
      important_notes: [
        'Biển số xe cấp mới là Biển số định danh gắn chặt với mã định danh cá nhân của chủ xe suốt đời.',
        'Khi bán hoặc tặng cho xe sau này, chủ xe phải giữ lại biển số và giấy đăng ký để nộp lại cho Công an xã thu hồi, không được bán biển số theo xe.',
        'Trực ban Công an xã Đức Hợp hỗ trợ đăng ký xe trong giờ hành chính các ngày làm việc: 02213.815.999.'
      ]
    }
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
    forms: [],
    online_guide: {
      platform: 'Ứng dụng VNeID & Cổng DVC Bộ Công an',
      portal_name: 'Ứng dụng VNeID (mục Dịch vụ công Cư trú) hoặc Cổng DVC Bộ Công an',
      prerequisites: [
        'Tài khoản VNeID Mức 2 đã được kích hoạt thành công.',
        'Hợp đồng thuê nhà, hợp đồng mượn nhà hoặc giấy đồng ý cho ở nhờ của chủ hộ tại xã Đức Hợp.',
        'Ảnh chụp căn cước công dân hoặc số định danh của chủ nhà/chủ nhà trọ.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Mở ứng dụng VNeID và truy cập thủ tục Tạm trú',
          description: 'Thao tác trực tiếp trên điện thoại thông minh cá nhân.',
          sub_steps: [
            'Đăng nhập ứng dụng VNeID bằng vân tay, khuôn mặt hoặc passcode.',
            'Tại màn hình chính, bấm vào mục "Dịch vụ công" (hoặc "Thủ tục hành chính").',
            'Chọn nhóm "Cư trú" -> Chọn thủ tục "Đăng ký tạm trú".'
          ]
        },
        {
          step_num: 2,
          title: 'Chọn cơ quan tiếp nhận hồ sơ tại xã Đức Hợp',
          description: 'Hồ sơ sẽ được chuyển thẳng về cán bộ quản lý cư trú Công an xã.',
          sub_steps: [
            'Chọn Tỉnh/Thành phố: Tỉnh Hưng Yên.',
            'Chọn cơ quan thụ lý: "Công an xã Đức Hợp, tỉnh Hưng Yên".'
          ]
        },
        {
          step_num: 3,
          title: 'Kê khai thông tin nơi tạm trú và thời hạn',
          description: 'Điền chi tiết thông tin phòng trọ, căn nhà tạm trú.',
          sub_steps: [
            'Nhập địa chỉ nhà trọ/nhà ở tại các thôn thuộc xã Đức Hợp.',
            'Chọn thời hạn đăng ký tạm trú: Tối đa là 02 năm (sau 2 năm làm thủ tục gia hạn tạm trú).',
            'Kê khai thông tin chủ hộ/chủ nhà trọ (Họ tên, Số định danh cá nhân).'
          ]
        },
        {
          step_num: 4,
          title: 'Đính kèm giấy tờ chứng minh chỗ ở hợp pháp',
          description: 'Tải lên hình ảnh rõ nét các trang của hợp đồng thuê trọ.',
          sub_steps: [
            'Chụp ảnh Hợp đồng thuê nhà trọ có chữ ký của hai bên.',
            'Hoặc tải lên mẫu CT01 có chữ ký xác nhận của chủ nhà đồng ý cho tạm trú.'
          ]
        },
        {
          step_num: 5,
          title: 'Nộp lệ phí trực tuyến và gửi hồ sơ',
          description: 'Thanh toán lệ phí ưu đãi khi làm trực tuyến (7.000 VNĐ).',
          sub_steps: [
            'Tích chọn cam đoan thông tin -> Nhấn "Gửi hồ sơ".',
            'Thanh toán 7.000 VNĐ lệ phí qua tài khoản ngân hàng hoặc ví điện tử liên kết.',
            'Hệ thống gửi tin nhắn xác nhận và mã hồ sơ về điện thoại.'
          ]
        }
      ],
      important_notes: [
        'Công dân chuyển đến sinh sống tại xã Đức Hợp từ 30 ngày trở lên ngoài nơi thường trú bắt buộc phải đăng ký tạm trú theo Luật Cư trú.',
        'Thời hạn giải quyết chỉ 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ.',
        'Kết quả tạm trú sẽ hiển thị ngay trên thẻ Căn cước điện tử VNeID của công dân.'
      ]
    }
  },
  {
    id: 'proc_can_cuoc',
    category_id: 'cu_tru',
    code: 'TTHC-BCA-04',
    title: 'Cấp thẻ Căn cước cho người dân theo Luật Căn cước 2023',
    target_audience: 'Công dân từ đủ 14 tuổi trở lên bắt buộc; Công dân từ 0 - 14 tuổi cấp theo nhu cầu',
    competent_authority: 'Công an tỉnh Hưng Yên tiếp nhận hồ sơ; Công an xã Đức Hợp hướng dẫn',
    execution_method: 'Đăng ký lịch hẹn online trên VNeID / Cổng DVC, đến thu nhận vân tay, mống mắt, ảnh chân dung',
    required_documents: [
      'Đối với trẻ dưới 6 tuổi: Người đại diện hợp pháp kê khai trực tuyến trên VNeID (không thu nhận sinh trắc học).',
      'Đối với công dân từ 6 tuổi trở lên: Thu nhận ảnh khuôn mặt, vân tay và quét mống mắt công nghệ cao.',
      'Không cần mang giấy tờ giấy nếu thông tin đã đầy đủ trên Cơ sở dữ liệu quốc gia về dân cư.'
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
    forms: [],
    online_guide: {
      platform: 'Ứng dụng VNeID (Định danh điện tử Mức 2)',
      portal_name: 'Ứng dụng VNeID (Mục Dịch vụ công Căn cước)',
      prerequisites: [
        'Tài khoản VNeID đã kích hoạt Định danh điện tử Mức 2.',
        'Đã cập nhật ứng dụng VNeID lên phiên bản mới nhất trên điện thoại.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Đăng nhập và truy cập thủ tục Căn cước',
          description: 'Đăng nhập vào tài khoản VNeID Mức 2 trên điện thoại.',
          sub_steps: [
            'Mở ứng dụng VNeID và hoàn tất đăng nhập bằng mật khẩu, Passcode hoặc sinh trắc học (vân tay/khuôn mặt).',
            'Tại trang chủ, chọn "Thủ tục hành chính" (hoặc "Dịch vụ công").',
            'Chọn mục "Cấp, quản lý căn cước" (hoặc "Dịch vụ công Căn cước").'
          ]
        },
        {
          step_num: 2,
          title: 'Chọn loại dịch vụ phù hợp',
          description: 'Tùy vào nhu cầu cá nhân, chọn một trong các dịch vụ.',
          sub_steps: [
            'Cấp thẻ Căn cước: Dành cho người từ đủ 14 tuổi chưa từng làm Căn cước hoặc đăng ký cho trẻ em dưới 14 tuổi.',
            'Cấp đổi thẻ Căn cước: Dành cho trường hợp hết hạn, thay đổi thông tin cá nhân/địa giới hành chính, hoặc thẻ bị hư hỏng.',
            'Cấp lại thẻ Căn cước: Dành cho trường hợp bị mất thẻ.',
            'Nhấn "Tạo mới yêu cầu" để bắt đầu kê khai.'
          ]
        },
        {
          step_num: 3,
          title: 'Kê khai thông tin người đề nghị',
          description: 'Kê khai cho bản thân hoặc cho con/người phụ thuộc.',
          sub_steps: [
            'Chọn đối tượng: Làm cho bản thân (Hệ thống tự động trích xuất thông tin từ Cơ sở dữ liệu quốc gia về dân cư); hoặc Làm cho con/người đại diện hợp pháp (Chọn làm cho người phụ thuộc và nhập Số định danh cá nhân của trẻ).',
            'Kiểm tra lại toàn bộ thông tin cá nhân (Họ tên, ngày sinh, quê quán, nơi thường trú/tạm trú).',
            'Chọn "Lý do cấp/cấp đổi/cấp lại" theo đúng thực tế.'
          ]
        },
        {
          step_num: 4,
          title: 'Chọn địa điểm và lịch hẹn thu nhận sinh trắc học',
          description: 'Chọn nơi thực hiện và khung giờ đến làm việc thuận tiện.',
          sub_steps: [
            'Nơi thực hiện: Chọn Tỉnh Hưng Yên -> Cơ quan Công an tiếp nhận hồ sơ (Cơ quan Công an nơi thường trú hoặc tạm trú).',
            'Hình thức nhận kết quả: Chọn nhận trực tiếp tại cơ quan Công an hoặc gửi qua dịch vụ bưu chính công ích về nhà.',
            'Đăng ký lịch hẹn: Chọn ngày và khung giờ đến trụ sở Công an để làm thủ tục thu nhận sinh trắc học (mống mắt, vân tay, ảnh chân dung).'
          ]
        },
        {
          step_num: 5,
          title: 'Xác nhận và gửi hồ sơ',
          description: 'Kiểm tra lần cuối và nhận mã hồ sơ điện tử.',
          sub_steps: [
            'Kiểm tra lại toàn bộ tờ khai thông tin.',
            'Đánh dấu tích vào ô "Tôi xin cam đoan những thông tin kê khai trên là đúng sự thật".',
            'Nhấn "Gửi hồ sơ".',
            'Hệ thống sẽ cấp một Mã hồ sơ trực tuyến hiển thị trên màn hình.'
          ]
        }
      ],
      important_notes: [
        'Đúng lịch hẹn: Mang theo điện thoại có chứa Mã hồ sơ trên VNeID đến cơ quan Công an đúng ngày, giờ đã đăng ký.',
        'Trẻ em dưới 6 tuổi: Phụ huynh kê khai trực tuyến hoàn toàn trên hệ thống và KHÔNG CẦN đưa trẻ đến cơ quan Công an để thu nhận sinh trắc học.',
        'Trẻ từ 6 đến dưới 14 tuổi: Cần có cha, mẹ hoặc người giám hộ đi cùng đến cơ quan Công an để hỗ trợ thu nhận sinh trắc học (mống mắt, vân tay, ảnh).',
        'Thẻ CCCD gắn chip cũ đã cấp trước 01/7/2024 vẫn có giá trị sử dụng đến hết hạn ghi trên thẻ, không bắt buộc phải đổi nếu thẻ còn hạn.'
      ]
    }
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
      'Biên bản vi phạm hoặc Thông báo vi phạm giao thông (kèm mã số quyết định xử phạt).',
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
    forms: [],
    online_guide: {
      platform: 'Cổng Dịch vụ công Quốc gia (dichvucong.gov.vn)',
      portal_name: 'Cổng Dịch vụ công Quốc gia mục Thanh toán trực tuyến',
      prerequisites: [
        'Biên bản vi phạm hành chính hoặc Thông báo phạt nguội gửi về nhà có chứa Mã số quyết định xử phạt.',
        'Tài khoản ngân hàng có Internet Banking hoặc ví điện tử (VNeID/Momo/VNPay).',
        'Tài khoản VNeID Mức 2 để đăng nhập đồng bộ dữ liệu.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Truy cập chuyên mục nộp phạt vi phạm giao thông',
          description: 'Vào cổng dịch vụ công quốc gia chính thức.',
          sub_steps: [
            'Truy cập website: dichvucong.gov.vn -> Đăng nhập bằng tài khoản VNeID.',
            'Tại trang chủ, chọn mục "Thanh toán trực tuyến" -> Chọn "Nộp phạt xử lý vi phạm hành chính" -> Chọn "Nộp phạt vi phạm giao thông".'
          ]
        },
        {
          step_num: 2,
          title: 'Tra cứu thông tin quyết định xử phạt',
          description: 'Tìm kiếm hồ sơ vi phạm bằng mã số hoặc số biên bản.',
          sub_steps: [
            'Cách 1 (Theo mã quyết định): Nhập chính xác "Mã số quyết định xử phạt" ghi trên thông báo phạt nguội.',
            'Cách 2 (Theo số biên bản): Nhập Số biên bản VPHC, Họ tên người vi phạm, Ngày vi phạm, Tỉnh/Thành phố lập biên bản.',
            'Nhập mã bảo mật (Captcha) -> Bấm "Tra cứu".'
          ]
        },
        {
          step_num: 3,
          title: 'Kiểm tra chi tiết lỗi vi phạm và số tiền phạt',
          description: 'Hệ thống hiển thị đầy đủ thông tin vụ việc vi phạm.',
          sub_steps: [
            'Xem kỹ nội dung vi phạm: Hành vi vi phạm (quá tốc độ, vượt đèn đỏ, không đội MBH...), thời gian, địa điểm, biển số xe.',
            'Kiểm tra số tiền phạt và hình thức phạt bổ sung (nếu có tước giấy phép lái xe).'
          ]
        },
        {
          step_num: 4,
          title: 'Tiến hành thanh toán tiền phạt trực tuyến',
          description: 'Chọn ngân hàng hoặc cổng thanh toán để nộp tiền vào Kho bạc Nhà nước.',
          sub_steps: [
            'Chọn ngân hàng hoặc ví điện tử thanh toán (Vietcombank, BIDV, Agribank, VietinBank, VNPay...).',
            'Hệ thống chuyển sang giao diện thanh toán an toàn của ngân hàng. Thực hiện chuyển tiền và nhận Biên lai điện tử nộp phạt.'
          ]
        },
        {
          step_num: 5,
          title: 'Đăng ký nhận lại giấy tờ tạm giữ về nhà tại xã Đức Hợp',
          description: 'Không cần đến trụ sở Công an lấy lại giấy tờ (nếu có tạm giữ).',
          sub_steps: [
            'Sau khi thanh toán xong, hệ thống hỏi: "Bạn có muốn nhận lại giấy tờ qua bưu điện không?".',
            'Chọn "Có" -> Nhập địa chỉ nhận hàng tại xã Đức Hợp (VD: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên).',
            'Bưu tá Bưu điện sẽ chuyển phát giấy tờ tận tay công dân sau khi hết thời hạn tước/tạm giữ.'
          ]
        }
      ],
      important_notes: [
        'Sau khi thanh toán thành công, hệ thống CSGT sẽ tự động gỡ trạng thái cảnh báo trên cổng Cục Đăng kiểm Việt Nam.',
        'Lực lượng CSGT và Công an xã Đức Hợp KHÔNG BAO GIỜ gọi điện thoại yêu cầu chuyển tiền phạt qua số tài khoản cá nhân.'
      ]
    }
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
    forms: [],
    online_guide: {
      platform: 'Kê khai trực tiếp & Đồng bộ Tổ liên gia an toàn PCCC',
      portal_name: 'Cổng thông tin Công an xã Đức Hợp & Mô hình Tổ liên gia thôn xóm',
      prerequisites: [
        'Hộ gia đình đã tự trang bị tối thiểu 01 bình chữa cháy xách tay (bình bột ABC MFZ4 hoặc bình khí CO2 MT3).',
        'Nhà ở có lồng sắt "chuồng cọp" ban công đã được cắt mở cửa thoát nạn thứ 2 có chìa khóa để sẵn nơi dễ lấy.'
      ],
      steps: [
        {
          step_num: 1,
          title: 'Tải và điền Bản cam kết an toàn PCCC',
          description: 'Kê khai điều kiện an toàn phòng cháy tại nơi ở của hộ gia đình.',
          sub_steps: [
            'Tải mẫu Bản cam kết bảo đảm an toàn PCCC từ hệ thống hoặc nhận trực tiếp tại Nhà văn hóa thôn/Trụ sở xã.',
            'Điền đầy đủ thông tin: Tên chủ hộ, địa chỉ thôn xóm, loại hình nhà ở (nhà ở riêng lẻ hoặc nhà ở kết hợp kinh doanh buôn bán).'
          ]
        },
        {
          step_num: 2,
          title: 'Tự kiểm tra các điều kiện an toàn cháy nổ trong nhà',
          description: 'Rà soát hệ thống điện, gas, lối thoát nạn trước khi ký cam kết.',
          sub_steps: [
            'Kiểm tra bảng điện: Đã lắp aptomat chống giật riêng biệt cho từng tầng/khu vực sản xuất kinh doanh.',
            'Khu vực bếp gas: Van khóa bình gas, dây dẫn gas không bị nứt vỡ rò rỉ.',
            'Bình chữa cháy: Kim đồng hồ áp suất chỉ vào vạch XANH (áp suất đạt chuẩn).'
          ]
        },
        {
          step_num: 3,
          title: 'Nộp bản cam kết và tham gia Tổ liên gia an toàn PCCC',
          description: 'Nộp cam kết cho Cán bộ Cảnh sát khu vực phụ trách thôn.',
          sub_steps: [
            'Chủ hộ ký tên và nộp Bản cam kết tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm).',
            'Đăng ký tham gia mô hình "Tổ liên gia an toàn PCCC" hoặc "Điểm chữa cháy công cộng" tại cụm dân cư thôn mình.'
          ]
        },
        {
          step_num: 4,
          title: 'Tham gia các buổi tập huấn kỹ năng thoát nạn và dập lửa',
          description: 'Thực hành dập lửa thực tế do Công an xã Đức Hợp tổ chức định kỳ.',
          sub_steps: [
            'Học kỹ năng sử dụng bình chữa cháy dập tắt bình gas bùng cháy.',
            'Kỹ năng thoát nạn trong môi trường nhiều khói độc (bò thấp người, dùng khăn ướt bịt mũi miệng).'
          ]
        }
      ],
      important_notes: [
        'Khi xảy ra cháy nổ, bình tĩnh hô hoán người xung quanh, bấm chuông báo cháy Tổ liên gia.',
        'Gọi ngay Tổng đài Cảnh sát PCCC & CNCH: 114 hoặc gọi số Trực ban Công an xã Đức Hợp: 02213.815.999.'
      ]
    }
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art_vneid_fake',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 1: Giả danh Công an gọi điện yêu cầu cài đặt App VNeID / Dịch vụ công giả mạo (file .apk) chứa mã độc',
    slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao',
    summary: 'Đối tượng gọi điện tự xưng cán bộ Công an hướng dẫn kích hoạt định danh VNeID mức 2 hoặc sửa sai dữ liệu cư trú qua đường link tải file .apk lạ nhằm chiếm quyền điều khiển điện thoại và rút sạch tiền.',
    content: '<p>Thời gian gần đây, xuất hiện thủ đoạn cực kỳ tinh vi: Kẻ xấu gọi điện tự xưng là cán bộ Công an xã, Công an huyện thông báo hồ sơ định danh điện tử VNeID của công dân bị lỗi chính tả, sai thông tin cư trú hoặc chưa kích hoạt Mức 2. Sau đó, chúng kết bạn Zalo và gửi đường dẫn yêu cầu tải ứng dụng có giao diện y hệt Cổng Dịch vụ công hoặc VNeID nhưng thực chất là file chứa mã độc gián điệp (.apk). Khi được cấp quyền Trợ năng (Accessibility), mã độc sẽ tự động theo dõi thao tác gõ bàn phím, đánh cắp mật khẩu và mã OTP ngân hàng để chiếm đoạt toàn bộ số dư.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Gọi điện tự xưng là Công an thông báo hồ sơ VNeID bị sai lệch, hết hạn hoặc cần chuẩn hóa thông tin gấp.',
      'Yêu cầu kết bạn Zalo và gửi đường link tải app lạ (đuôi .apk không có trên Google Play / App Store).',
      'Yêu cầu công dân bật quyền trợ năng (Accessibility) và thực hiện nhận diện khuôn mặt trước camera.',
      'Lén chụp màn hình, tự động chuyển tiền từ tài khoản ngân hàng của nạn nhân sang tài khoản của kẻ lừa đảo.'
    ],
    prevention_advice: [
      'Lực lượng Công an xã Đức Hợp KHÔNG BAO GIỜ gọi điện yêu cầu công dân cài đặt ứng dụng qua đường link lạ ngoài kho ứng dụng chính thức.',
      'Tuyệt đối KHÔNG bấm vào link lạ, KHÔNG tải file có đuôi .apk do người lạ gửi qua Zalo, Messenger.',
      'Không cung cấp mật khẩu ngân hàng, mã xác thực OTP hay quét khuôn mặt vào các ứng dụng lạ.',
      'Khi cần hỗ trợ VNeID, trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi Trực ban: 02213.815.999.'
    ],
    views_count: 540,
    created_at: '26/09/2026'
  },
  {
    id: 'art_ctv_shopee',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 2: Lừa đảo tuyển \'Cộng tác viên xử lý đơn hàng ảo\' trên Shopee, TikTok, Lazada',
    slug: 'canh-bao-tuyen-cong-tac-vien-shopee-tiktok',
    summary: 'Chiêu trò dụ dỗ làm nhiệm vụ xem video, chuyển tiền mua đơn hàng hưởng hoa hồng 10-20%, sau đó giam tiền và chiếm đoạt hàng trăm triệu đồng.',
    content: '<p>Thủ đoạn này nhắm vào phụ nữ nội trợ, sinh viên và người muốn kiếm tiền tại nhà. Ban đầu, nạn nhân được giao các đơn hàng nhỏ 100k - 500k và được hoàn tiền kèm hoa hồng sòng phẳng để tạo niềm tin. Đến khi số tiền chuyển lên hàng chục, hàng trăm triệu, các đối tượng bịa ra đủ lý do như sai cú pháp, đơn hàng kép, hệ thống quá tải... bắt nạn nhân nộp thêm tiền mới được hoàn gốc, cuối cùng cắt đứt liên lạc.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Đăng tuyển trên Facebook/Zalo: \'Việc nhẹ lương cao, ngồi nhà lướt TikTok/Shopee kiếm 300k - 500k/ngày\'.',
      'Yêu cầu chuyển tiền vào tài khoản cá nhân của đối tượng để ứng vốn thanh toán đơn hàng.',
      'Bịa ra lỗi cú pháp, chưa hoàn thành nhiệm vụ kép, bắt nộp thêm tiền cọc để cứu số tiền trước đó.'
    ],
    prevention_advice: [
      'Tuyệt đối không tham gia các hội nhóm làm nhiệm vụ thanh toán đơn hàng ảo để nhận hoa hồng.',
      'Các sàn thương mại điện tử chính thống không bao giờ tuyển CTV theo hình thức chuyển tiền thanh toán đơn hàng vào tài khoản cá nhân.',
      'Khi phát hiện có dấu hiệu bị lừa, dừng ngay việc chuyển tiền và báo ngay Công an xã Đức Hợp.'
    ],
    views_count: 420,
    created_at: '25/09/2026'
  },
  {
    id: 'art_tien_ao',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 3: Lừa đảo đầu tư sàn tài chính, Forex, chứng khoán quốc tế và tiền ảo siêu lợi nhuận',
    slug: 'canh-bao-lua-dao-san-tai-chinh-tien-ao',
    summary: 'Lập các sàn giao dịch giả mạo, cam kết lợi nhuận 30-50%/tháng, can thiệp kỹ thuật vào bảng điện tử làm nhà đầu tư cháy sạch tài khoản.',
    content: '<p>Kẻ lừa đảo đóng vai chuyên gia tài chính thành đạt khoe ảnh giàu sang trên mạng xã hội, lôi kéo người dân tham gia đầu tư vào các sàn giao dịch lạ. Ban đầu hệ thống cho người chơi thấy số dư tài khoản tăng liên tục và cho rút một khoản lãi nhỏ. Tuy nhiên khi người chơi nạp số tiền lớn và muốn rút vốn, sàn sẽ khóa tài khoản và yêu cầu đóng phí bảo hiểm, phí giải ngân, thuế thu nhập... rồi biến mất.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Cam kết \'đầu tư chắc thắng, bao lỗ, bao rút tiền trong 5 phút, lợi nhuận 30-50%/tháng\'.',
      'Tạo nhóm Telegram/Zalo có hàng chục \'chim mồi\' tung hô chuyên gia và khoe nhận tiền lãi khủng.',
      'Khi muốn rút tiền thì báo lỗi kỹ thuật, yêu cầu đóng 10-20% phí mở cổng thanh toán hoặc thuế thu nhập.'
    ],
    prevention_advice: [
      'Pháp luật Việt Nam hiện chưa cấp phép cho bất kỳ sàn giao dịch tiền ảo hoặc sàn Forex tài chính quốc tế nào hoạt động.',
      'Cảnh giác cao độ với bất kỳ mô hình đầu tư nào cam kết lợi nhuận cao bất thường.',
      'Chỉ đầu tư qua các công ty chứng khoán, quỹ tài chính được Ủy ban Chứng khoán Nhà nước cấp phép.'
    ],
    views_count: 380,
    created_at: '24/09/2026'
  },
  {
    id: 'art_deepfake',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 4: Hack tài khoản mạng xã hội gọi video Deepfake giả mạo mượn tiền, báo tai nạn cấp cứu',
    slug: 'canh-bao-deepfake-hack-tai-khoan-muon-tien',
    summary: 'Chiếm đoạt tài khoản Facebook/Zalo của người thân ở xa, dùng công nghệ AI Deepfake giả khuôn mặt và giọng nói để gọi video vay tiền khẩn cấp.',
    content: '<p>Kẻ gian chiếm đoạt tài khoản mạng xã hội, nghiên cứu lịch sử nhắn tin để bắt chước cách xưng hô. Chúng dùng ảnh và video cũ của chủ tài khoản để tạo ra video Deepfake cử động khuôn mặt, nhép môi. Khi gọi video cho người thân, chúng chỉ để hiện hình ảnh mờ giật vài giây rồi viện cớ sóng yếu để cúp máy và hối thúc chuyển tiền vào số tài khoản lạ.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Nhắn tin mượn tiền khẩn cấp viện lý do tai nạn, trả nợ gấp, tài khoản ngân hàng của bản thân bị kẹt.',
      'Thực hiện cuộc gọi video rất ngắn (dưới 10 giây), hình ảnh nhòe, tiếng rè hoặc giật, không khớp khẩu hình miệng.',
      'Yêu cầu chuyển tiền vào tài khoản ngân hàng của bên thứ ba không trùng tên với người thân.'
    ],
    prevention_advice: [
      'Khi nhận tin nhắn hỏi vay tiền từ người thân trên MXH, BẮT BUỘC gọi điện thoại trực tiếp bằng số di động truyền thống để xác nhận.',
      'Tuyệt đối không chuyển tiền vào tài khoản có tên người thụ hưởng lạ.',
      'Bật tính năng xác thực 2 lớp (2FA) cho tất cả tài khoản Facebook, Zalo, Telegram.'
    ],
    views_count: 490,
    created_at: '23/09/2026'
  },
  {
    id: 'art_dien_luc',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 5: Mạo danh nhân viên Điện lực, Viễn thông dọa cắt dịch vụ đòi tiền phạt, nợ cước',
    slug: 'canh-bao-mao-danh-dien-luc-vien-thong',
    summary: 'Gọi điện thông báo nợ cước điện hoặc số điện thoại phát tán tin nhắn rác, dọa cắt điện hoặc khóa SIM sau 2 giờ để ép chuyển tiền thanh toán.',
    content: '<p>Đối tượng sử dụng tổng đài ảo gọi điện thông báo thuê bao của người dân sắp bị khóa do nợ tiền cước điện lực hoặc số điện thoại đang liên quan đến hành vi phát tán thông tin xấu độc. Sau đó, chúng yêu cầu người dân bấm phím để gặp nhân viên hỗ trợ rồi dẫn dụ chuyển tiền vào tài khoản cá nhân để nộp phạt hoặc xác minh tài sản.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Tổng đài tự động đe dọa khóa số thuê bao hoặc cắt điện sinh hoạt trong vòng 1-2 giờ tới.',
      'Yêu cầu cung cấp thông tin căn cước công dân và tài khoản ngân hàng để tra cứu nợ cước.',
      'Dẫn dụ chuyển tiền sang tài khoản cá nhân của đối tượng để tạm giữ phục vụ kiểm tra.'
    ],
    prevention_advice: [
      'Ngành Điện lực và các nhà mạng viễn thông KHÔNG BAO GIỜ gọi điện hăm dọa cắt dịch vụ hay yêu cầu chuyển tiền vào tài khoản cá nhân.',
      'Nếu nhận được cuộc gọi, người dân hãy bình tĩnh liên hệ tổng đài chăm sóc khách hàng chính thức của Điện lực hoặc nhà mạng để đối chiếu.',
      'Báo ngay cho Công an xã Đức Hợp nếu bị các đối tượng liên tục quấy rối, hăm dọa.'
    ],
    views_count: 310,
    created_at: '22/09/2026'
  },
  {
    id: 'art_vay_online',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 6: Lừa đảo cho vay tiền online qua App với lãi suất 0%, dụ nộp phí bảo hiểm hoặc báo sai số tài khoản',
    slug: 'canh-bao-lua-dao-vay-tien-online',
    summary: 'Quảng cáo cho vay vốn siêu tốc không thế chấp, nhưng sau đó báo sai số tài khoản, yêu cầu người vay nộp tiền phí sửa lỗi và tiền bảo hiểm khoản vay.',
    content: '<p>Kẻ lừa đảo lập ra các trang web hoặc app cho vay trực tuyến với thủ tục giải ngân cực kỳ dễ dãi. Khi người dân đăng ký vay tiền, đối tượng sẽ chỉnh sửa một chữ số trong thông tin tài khoản thụ hưởng của nạn nhân trên hệ thống. Sau đó, chúng viện lý do số tài khoản bị sai khiến tiền bị đóng băng, bắt người vay phải nộp từ vài triệu đến hàng chục triệu tiền bảo hiểm, tiền chứng minh năng lực tài chính để mở khóa.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Quảng cáo giải ngân trong 15 phút, không cần gặp mặt, không cần chứng minh thu nhập, nợ xấu vẫn vay được.',
      'Thông báo hồ sơ đã được duyệt vay 50 - 100 triệu nhưng bị treo do người vay điền sai số tài khoản.',
      'Ép buộc người vay chuyển tiền để nộp phí bảo hiểm khoản vay hoặc phí sửa đổi hợp đồng.'
    ],
    prevention_advice: [
      'Không có tổ chức tín dụng hay ngân hàng hợp pháp nào bắt người vay phải nộp tiền trước để được giải ngân tiền vay.',
      'Tuyệt đối không vay tiền qua các app lạ, đường link quảng cáo trôi nổi trên mạng xã hội.',
      'Chỉ tiếp cận nguồn vốn tại các Ngân hàng thương mại nhà nước, Quỹ tín dụng nhân dân hoặc Ngân hàng Chính sách xã hội.'
    ],
    views_count: 350,
    created_at: '21/09/2026'
  },
  {
    id: 'art_hai_quan',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 7: Bẫy tình cảm xuyên biên giới (Romance Scam) gửi quà tặng, ngoại tệ bị kẹt tại hải quan',
    slug: 'canh-bao-gui-qua-nuoc-ngoai-hai-quan',
    summary: 'Kết bạn làm quen vờ yêu đương qua mạng, hứa gửi thùng quà chứa hàng triệu USD và trang sức quý, sau đó đồng bọn gọi điện giả hải quan đòi tiền phí thông quan.',
    content: '<p>Thủ đoạn này chủ yếu nhắm vào phụ nữ độc thân hoặc người cao tuổi. Kẻ gian lập nick ảo đóng vai doanh nhân, kỹ sư, sĩ quan quân đội nước ngoài sống độc thân, nhắn tin tâm sự hằng ngày để tạo niềm tin và tình cảm. Khi nạn nhân tin tưởng, chúng bảo đã gửi một thùng quà có nhiều tiền mặt USD và đồ đắt tiền về Việt Nam để làm quà tặng. Sau đó, có đối tượng giả làm nhân viên sân bay, cán bộ hải quan gọi điện báo thùng hàng bị phát hiện có ngoại tệ cấm, yêu cầu nạn nhân chuyển tiền nộp phạt để thông quan.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Làm quen qua Facebook/Instagram, tự nhận là người nước ngoài thành đạt, góa vợ hoặc độc thân.',
      'Gửi hình ảnh giả mạo về kiện hàng bưu phẩm sang trọng kèm hóa đơn vận chuyển quốc tế.',
      'Đồng bọn giả nhân viên hải quan sân bay yêu cầu nộp tiền thuế, tiền phạt, tiền lót tay vào tài khoản cá nhân.'
    ],
    prevention_advice: [
      'Cảnh giác với những lời làm quen ngọt ngào từ người lạ chưa từng gặp mặt ngoài đời thực.',
      'Luật pháp quốc tế và Việt Nam nghiêm cấm việc gửi tiền mặt trong các kiện hàng bưu chính thông thường.',
      'Không bao giờ chuyển tiền theo yêu cầu của những người tự xưng là cán bộ hải quan sân bay qua điện thoại.'
    ],
    views_count: 290,
    created_at: '20/09/2026'
  },
  {
    id: 'art_trung_thuong',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 8: Chiêu trò thông báo trúng thưởng xe máy SH, vàng, sổ tiết kiệm bắt nộp thuế phí trước',
    slug: 'canh-bao-trung-thuong-nop-thue',
    summary: 'Gọi điện hoặc nhắn tin chúc mừng trúng thưởng giải đặc biệt trị giá hàng trăm triệu, yêu cầu mua thẻ cào hoặc chuyển khoản tiền thuế để nhận thưởng.',
    content: '<p>Kẻ lừa đảo gửi tin nhắn hoặc gọi điện chúc mừng người dân là khách hàng may mắn trúng thưởng xe máy SH, sổ tiết kiệm 100 - 200 triệu đồng trong chương trình tri ân khách hàng. Để nhận được giải thưởng, chúng yêu cầu nạn nhân phải nộp khoản tiền tương đương 10% giá trị giải thưởng để nộp thuế trước bạ hoặc phí vận chuyển. Sau khi nạn nhân chuyển tiền hoặc gửi mã thẻ cào điện thoại, đối tượng lập tức chặn liên lạc.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Thông báo trúng thưởng từ các chương trình khuyến mãi mà người dân chưa từng đăng ký tham gia.',
      'Yêu cầu nộp phí bằng hình thức mua thẻ cào điện thoại hoặc chuyển tiền vào số tài khoản cá nhân.',
      'Thúc giục nếu không hoàn tất thủ tục nộp phí trong vòng 24 giờ thì giải thưởng sẽ bị hủy bỏ.'
    ],
    prevention_advice: [
      'Tất cả các chương trình khuyến mại trúng thưởng hợp pháp đều phải đăng ký với Sở Công Thương hoặc Bộ Công Thương.',
      'Doanh nghiệp chân chính không bao giờ yêu cầu khách hàng nạp tiền qua thẻ cào để nhận quà.',
      'Tuyệt đối không làm theo hướng dẫn của các cuộc gọi lạ thông báo trúng thưởng.'
    ],
    views_count: 275,
    created_at: '19/09/2026'
  },
  {
    id: 'art_sms_fake',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 9: Giả mạo tin nhắn thương hiệu Ngân hàng (SMS Brandname giả mạo bằng trạm BTS)',
    slug: 'canh-bao-sms-brandname-gia-mao',
    summary: 'Sử dụng thiết bị trạm thu phát sóng di động BTS giả để chèn tin nhắn lừa đảo vào đúng luồng tin nhắn thật của ngân hàng nhằm chiếm đoạt tài khoản.',
    content: '<p>Bằng việc sử dụng các trạm phát sóng BTS di động mang trên ô tô hoặc xe máy, các đối tượng gửi tin nhắn rác mạo danh các ngân hàng lớn (Vietcombank, Agribank, BIDV, Techcombank...) lọt vào cùng luồng tin nhắn chính thống trên điện thoại người dân. Nội dung tin nhắn thường thông báo tài khoản bị đăng nhập trái phép hoặc trừ tiền dịch vụ, yêu cầu người dân truy cập vào đường link giả mạo ngân hàng để hủy giao dịch. Khi nạn nhân nhập tên đăng nhập, mật khẩu và OTP, toàn bộ tiền trong tài khoản sẽ bị rút sạch.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Tin nhắn hiển thị đúng tên thương hiệu của ngân hàng (SMS Brandname).',
      'Đường dẫn trong tin nhắn có tên miền lạ, sai khác một vài ký tự (ví dụ: vietcombank-ebank.cc, bidv-verify.top...).',
      'Yêu cầu nhập tên tài khoản, mật khẩu ngân hàng và mã xác thực OTP trên trang web lạ.'
    ],
    prevention_advice: [
      'Các ngân hàng KHÔNG BAO GIỜ gửi tin nhắn kèm đường link yêu cầu đăng nhập tài khoản ngân hàng.',
      'Chỉ truy cập website ngân hàng bằng cách gõ trực tiếp địa chỉ chính thức (.com.vn) hoặc mở App ngân hàng đã cài sẵn.',
      'Nếu lỡ bấm vào link và nhập thông tin, lập tức gọi ngay tổng đài ngân hàng để khóa tài khoản khẩn cấp.'
    ],
    views_count: 460,
    created_at: '18/09/2026'
  },
  {
    id: 'art_con_cap_cuu',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 10: Giả danh giáo viên, nhân viên bệnh viện báo \'Con đang cấp cứu cần chuyển tiền mổ gấp\'',
    slug: 'canh-bao-con-dang-cap-cuu-can-tien-gap',
    summary: 'Đánh vào tâm lý lo lắng của cha mẹ, gọi điện báo tin con bị tai nạn nguy kịch ở trường đang ở viện cấp cứu, ép phụ huynh chuyển tiền viện phí ngay.',
    content: '<p>Kẻ xấu thu thập thông tin học sinh (họ tên, trường lớp, tên bố mẹ) rồi gọi điện cho phụ huynh trong giờ học. Đối tượng nói giọng hoảng hốt, tự xưng là giáo viên chủ nhiệm hoặc nhân viên y tế bệnh viện, thông báo con bị ngã chấn thương nặng cần phẫu thuật gấp. Chúng viện cớ bác sĩ đang chờ nộp viện phí mới tiến hành mổ và yêu cầu phụ huynh chuyển gấp vài chục triệu đồng vào tài khoản cá nhân của \'bác sĩ trưởng khoa\'.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Gọi điện trong giờ học, tạo tiếng ồn còi cứu thương hoặc tiếng khóc lóc ở hậu cảnh.',
      'Đọc chính xác họ tên con, trường lớp của con khiến phụ huynh hoảng loạn mất cảnh giác.',
      'Hối thúc chuyển tiền ngay lập tức, không cho phụ huynh thời gian liên lạc hỏi thăm.'
    ],
    prevention_advice: [
      'Khi nhận cuộc gọi báo con cấp cứu, phụ huynh cần giữ bình tĩnh, KHÔNG chuyển tiền ngay.',
      'Gọi ngay cho Giáo viên chủ nhiệm, Ban Giám hiệu nhà trường hoặc người thân gần trường để xác minh thông tin.',
      'Bệnh viện luôn ưu tiên cứu chữa tính mạng người bệnh trước, không bao giờ vì chưa có tiền chuyển khoản mà từ chối cấp cứu!'
    ],
    views_count: 510,
    created_at: '17/09/2026'
  },
  {
    id: 'art_combo_du_lich',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 11: Lừa đảo bán \'Combo du lịch giá rẻ\', phòng khách sạn, vé máy bay giả mạo dịp nghỉ lễ',
    slug: 'canh-bao-combo-du-lich-ve-may-bay-gia-re',
    summary: 'Lập fanpage giả mạo công ty du lịch uy tín, rao bán tour nghỉ dưỡng giá rẻ hơn 50%, yêu cầu chuyển tiền cọc rồi chặn liên lạc.',
    content: '<p>Vào các dịp lễ tết và mùa du lịch hè, kẻ gian tạo các trang mạng xã hội giả mạo các đại lý du lịch, khách sạn nổi tiếng có tích xanh giả. Chúng sao chép toàn bộ hình ảnh, bài viết của các công ty lữ hành uy tín và chạy quảng cáo bán combo vé máy bay, phòng resort cao cấp với mức giá siêu rẻ. Sau khi khách hàng chuyển tiền cọc hoặc thanh toán 100%, đối tượng gửi mã code vé giả mạo rồi chặn số điện thoại.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Giá tour, phòng khách sạn rẻ bất thường so với mặt bằng chung thị trường.',
      'Yêu cầu chuyển tiền đặt cọc 50-100% vào tài khoản cá nhân thay vì tài khoản doanh nghiệp.',
      'Gửi mã vé máy bay giả (code chưa thanh toán) khiến khách ra đến sân bay mới biết bị lừa.'
    ],
    prevention_advice: [
      'Nên đặt dịch vụ du lịch qua các công ty lữ hành có thương hiệu, pháp nhân rõ ràng và địa chỉ cụ thể.',
      'Kiểm tra kỹ thông tin tài khoản thụ hưởng, ưu tiên chuyển khoản vào tài khoản mở tại ngân hàng mang tên doanh nghiệp.',
      'Liên hệ trực tiếp đến hãng hàng không hoặc khách sạn để kiểm tra tình trạng xác nhận mã đặt chỗ trước khi chuyển tiền.'
    ],
    views_count: 280,
    created_at: '16/09/2026'
  },
  {
    id: 'art_chuyen_tiep_sim',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 12: Chiêu trò nâng cấp SIM 4G/5G, dẫn dụ bấm cú pháp chuyển tiếp cuộc gọi (**21*) để cướp OTP ngân hàng',
    slug: 'canh-bao-cuop-sim-chuyen-tiep-cuoc-goi-otp',
    summary: 'Mạo danh nhân viên nhà mạng hướng dẫn đổi SIM 4G/5G miễn phí qua cú pháp **21*, đánh cắp quyền nhận cuộc gọi OTP để chiếm đoạt tài khoản.',
    content: '<p>Đối tượng giả danh nhân viên các nhà mạng (Viettel, Vinaphone, Mobifone) gọi điện hướng dẫn người dân nâng cấp SIM 4G lên 5G miễn phí để tránh bị khóa máy. Chúng hướng dẫn người dân soạn tin nhắn theo cú pháp chuyển tiếp cuộc gọi như **21*Số_điện_thoại_kẻ_gian# gửi đi. Khi cú pháp thành công, mọi cuộc gọi đến máy người dân sẽ tự động chuyển sang máy đối tượng, giúp chúng nhận cuộc gọi đọc mã OTP từ ngân hàng và rút tiền.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Tự xưng nhân viên nhà mạng hỗ trợ nâng cấp SIM từ xa không cần ra điểm giao dịch.',
      'Dụ dỗ nạn nhân bấm phím cú pháp điện thoại có chứa **21* hoặc *43*.',
      'Sau khi bấm cú pháp, máy của nạn nhân bị mất sóng hoặc không nhận được cuộc gọi đến.'
    ],
    prevention_advice: [
      'Cú pháp **21*... là tính năng chuyển tiếp cuộc gọi của nhà mạng, tuyệt đối không bấm theo lời hướng dẫn của người lạ.',
      'Chỉ nâng cấp đổi SIM trực tiếp tại các điểm giao dịch, cửa hàng ủy quyền chính thức của các nhà mạng viễn thông.',
      'Nếu thấy SIM bị mất sóng bất thường, liên hệ ngay tổng đài nhà mạng và khóa các ứng dụng ngân hàng liên kết.'
    ],
    views_count: 360,
    created_at: '15/09/2026'
  },
  {
    id: 'art_gia_cong_an_lenh_bat',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 13: Giả danh Cán bộ Công an, Viện kiểm sát gọi điện dọa \'dính án ma túy\', gửi lệnh bắt qua Zalo',
    slug: 'canh-bao-gia-cong-an-vien-kiem-sat-lenh-bat-zalo',
    summary: 'Gọi điện hăm dọa công dân đang liên quan đến đường dây buôn ma túy, rửa tiền xuyên quốc gia; gửi Lệnh bắt giam giả mạo qua Zalo ép chuyển tiền vào tài khoản an toàn.',
    content: '<p>Kẻ lừa đảo đóng giả cán bộ công an hoặc kiểm sát viên gọi điện thông báo số tài khoản hoặc số căn cước của nạn nhân đang nằm trong chuyên án ma túy lớn, sắp bị khởi tố bắt giam. Chúng gửi hình ảnh Lệnh bắt bị can để tạm giam giả mạo có dấu đỏ qua Zalo để dọa dẫm. Sau đó, chúng yêu cầu nạn nhân phải giữ bí mật tuyệt đối, rút toàn bộ tiền tiết kiệm chuyển vào \'Tài khoản tạm giữ của Ban chuyên án\' để giám định nguồn tiền trong sạch, hứa hẹn sẽ trả lại sau 2 giờ nhưng thực chất là chiếm đoạt.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Xưng danh cán bộ cơ quan điều tra, nói năng gay gắt, đe dọa khởi tố bắt giam.',
      'Gửi hình ảnh lệnh bắt, quyết định truy nã giả mạo qua Zalo, mạng xã hội.',
      'Yêu cầu công dân chuyển toàn bộ tiền vào tài khoản cá nhân do đối tượng cung cấp với danh nghĩa tài khoản an toàn.'
    ],
    prevention_advice: [
      'Cơ quan Công an, Viện kiểm sát, Tòa án KHÔNG BAO GIỜ làm việc với công dân qua điện thoại hoặc mạng xã hội.',
      'Cơ quan nhà nước không bao giờ gửi Lệnh bắt, Giấy triệu tập qua Zalo hay yêu cầu chuyển tiền vào tài khoản tạm giữ cá nhân.',
      'Khi nhận cuộc gọi hăm dọa tương tự, công dân bình tĩnh cúp máy và đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để trình báo.'
    ],
    views_count: 530,
    created_at: '14/09/2026'
  },
  {
    id: 'art_fake_bill',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 14: Giả mạo biên lai chuyển tiền thành công (Fake Bill) để chiếm đoạt hàng hóa của người bán',
    slug: 'canh-bao-fake-bill-chuyen-tien-mua-hang',
    summary: 'Dùng phần mềm tạo ảnh chụp biên lai chuyển khoản ngân hàng giả giống hệt thật, viện cớ nghẽn mạng liên ngân hàng để giục giao hàng.',
    content: '<p>Thủ đoạn này nhắm vào các cửa hàng kinh doanh, người buôn bán trực tuyến. Kẻ gian đến mua hàng hóa có giá trị (điện thoại, vàng, đồ gia dụng) hoặc đặt mua online. Khi thanh toán, chúng dùng các ứng dụng, website làm giả biên lai chuyển khoản (Fake Bill) với số tiền, tên người nhận và ngân hàng y như thật rồi giơ ảnh cho người bán xem. Chúng lấy lý do chuyển liên ngân hàng 24/7 nên tiền về chậm, thúc giục người bán giao hàng ngay rồi tẩu thoát.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Đưa ảnh chụp màn hình chuyển tiền thành công sắc nét nhưng tiền thực tế chưa vào tài khoản.',
      'Hối thúc vì đang vội, viện cớ ngân hàng đang bảo trì nên tiền chậm nổi.',
      'Kích động tâm lý người bán bằng việc tỏ vẻ bức xúc nếu không được nhận hàng ngay.'
    ],
    prevention_advice: [
      'Người bán hàng CHỈ GIAO HÀNG khi chính ứng dụng ngân hàng của mình thông báo đã nhận được tiền (biến động số dư).',
      'Không tin tưởng vào bất kỳ ảnh chụp màn hình hay thông báo chuyển tiền từ điện thoại của người mua.',
      'Nên trang bị loa thông báo thanh toán QR tự động phát âm thanh khi tiền đã về tài khoản.'
    ],
    views_count: 320,
    created_at: '13/09/2026'
  },
  {
    id: 'art_mau_nhi',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 15: Tuyển người mẫu nhí, bình chọn cuộc thi ảnh, vẽ tranh thiếu nhi để dụ phụ huynh nạp tiền làm nhiệm vụ',
    slug: 'canh-bao-tuyen-nguoi-mau-nhi-binh-chon-cuoc-thi',
    summary: 'Lập fanpage giả mạo cuộc thi \'Tài năng nhí\', \'Mẫu nhí thời trang\', dụ cha mẹ đăng ký rồi yêu cầu chuyển tiền khảo sát, làm nhiệm vụ bình chọn.',
    content: '<p>Kẻ lừa đảo lập fanpage quảng cáo tìm kiếm người mẫu nhí cho các thương hiệu thời trang trẻ em hoặc các cuộc thi vẽ tranh thiếu nhi có giải thưởng lớn. Khi phụ huynh đăng ký, đối tượng cho vào nhóm Telegram/Zalo và yêu cầu tham gia các vòng thử thách như mua đơn hàng tăng tương tác, bình chọn bằng điểm thưởng. Ban đầu trả lại tiền kèm thưởng nhỏ, đến vòng chung kết chúng yêu cầu nạp hàng chục đến hàng trăm triệu rồi chiếm đoạt sạch số tiền.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Khen ngợi ngoại hình con và hứa hẹn mức cát-xê cao ngất ngưởng (10 - 20 triệu/buổi chụp hình).',
      'Đưa vào các nhóm làm nhiệm vụ tăng điểm bình chọn cho con bằng cách nạp tiền mua sản phẩm.',
      'Dọa nếu phụ huynh dừng làm nhiệm vụ thì hồ sơ của con sẽ bị loại và mất toàn bộ số tiền đã nộp.'
    ],
    prevention_advice: [
      'Cảnh giác với các cuộc thi ảnh, tìm kiếm tài năng nhí trên mạng xã hội không có đơn vị tổ chức uy tín.',
      'Các nhãn hàng chân chính tuyển mẫu nhí luôn có hợp đồng và buổi thử trang phục trực tiếp, không bao giờ bắt phụ huynh nạp tiền.',
      'Bảo vệ hình ảnh và thông tin riêng tư của con em mình, tránh chia sẻ tràn lan trên mạng.'
    ],
    views_count: 340,
    created_at: '12/09/2026'
  },
  {
    id: 'art_thu_hoi_tien_treo',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 16: Lừa đảo dịch vụ \'Thu hồi tiền treo, cam kết lấy lại tiền bị lừa qua mạng\' (Bẫy lừa lần 2)',
    slug: 'canh-bao-dich-vu-thu-hoi-tien-bi-lua-dao-lan-2',
    summary: 'Mạo danh Văn phòng Luật sư, Cục An ninh mạng cam kết lấy lại 100% số tiền đã bị lừa đảo trên mạng, yêu cầu nộp trước phí hồ sơ và phí tra soát.',
    content: '<p>Nắm bắt tâm lý hoang mang, tiếc tiền của những người vừa bị sập bẫy lừa đảo mạng, các đối tượng lập ra các trang mạng mạo danh \'Cục An ninh mạng và phòng chống tội phạm công nghệ cao\' hoặc \'Văn phòng Luật sư uy tín\'. Chúng quảng cáo có hệ thống quét cổng ngân hàng, cam kết hỗ trợ thu hồi tiền bị lừa trong 24 giờ. Khi nạn nhân liên hệ, chúng yêu cầu nộp 10 - 20% phí hồ sơ, phí mở cổng kết nối ngân hàng. Người dân vì mong lấy lại tiền nên tiếp tục nộp và bị lừa lần thứ hai.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Quảng cáo cam đoan lấy lại tiền bị lừa trên mạng thành công 100%.',
      'Lập fanpage có hình ảnh phù hiệu Công an, dấu mộc văn phòng luật sư giả mạo.',
      'Yêu cầu đóng tiền phí thủ tục, phí tra soát kỹ thuật để kéo tiền về tài khoản.'
    ],
    prevention_advice: [
      'Cục An ninh mạng và các cơ quan Công an KHÔNG BAO GIỜ có dịch vụ thu hồi tiền lừa đảo có thu phí trên mạng xã hội.',
      'Không có cá nhân hay văn phòng luật sư nào có quyền năng can thiệp kỹ thuật vào hệ thống ngân hàng để lấy lại tiền đã chuyển.',
      'Khi bị lừa đảo, người dân cần đến ngay Cơ quan Công an xã Đức Hợp để nộp đơn trình báo theo đúng trình tự pháp luật.'
    ],
    views_count: 480,
    created_at: '11/09/2026'
  },
  {
    id: 'art_qr_phishing',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 17: Bẫy quét mã QR độc hại (QR Phishing) dán đè tại bàn ăn, bưu phẩm ship COD hoặc trang web khuyến mãi',
    slug: 'canh-bao-quet-ma-qr-doc-hai-qr-phishing',
    summary: 'Dán đè mã QR lừa đảo lên mã chuyển khoản của quán ăn hoặc in mã QR trúng thưởng trên bưu phẩm để dẫn dụ người dân truy cập web lừa đảo.',
    content: '<p>Hình thức lừa đảo mã QR (QR Phishing) đang gia tăng nhanh chóng. Đối tượng lén lút dán đè mã QR của mình lên bảng mã thanh toán của các cửa hàng, quán ăn để tiền của khách chuyển thẳng vào túi chúng. Tinh vi hơn, chúng in mã QR trúng quà lên các gói bưu phẩm chuyển phát nhanh không đặt; khi người dân dùng camera quét mã, điện thoại sẽ bị điều hướng đến các trang web đánh cắp thông tin thẻ ngân hàng hoặc tải phần mềm gián điệp.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Dán đè mã QR mờ nhạt hoặc tem dán mới đè lên mã thanh toán gốc của hộ kinh doanh.',
      'Gửi bưu thiếp khuyến mại, phiếu cào trúng thưởng có in mã QR bảo quét mã nhận tiền thưởng.',
      'Trang web sau khi quét QR yêu cầu nhập đầy đủ số thẻ ngân hàng, ngày hết hạn và mã bảo mật CVV.'
    ],
    prevention_advice: [
      'Chủ hộ kinh doanh cần thường xuyên kiểm tra bảng mã QR thanh toán tại quầy thu ngân của gia đình.',
      'Người dân khi quét mã QR thanh toán phải kiểm tra kỹ tên chủ tài khoản thụ hưởng trước khi bấm xác nhận chuyển tiền.',
      'Tuyệt đối không quét các mã QR không rõ nguồn gốc dán ở nơi công cộng hoặc in trên quà tặng lạ.'
    ],
    views_count: 310,
    created_at: '10/09/2026'
  },
  {
    id: 'art_thue_tai_khoan',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 18: Dụ dỗ mở và cho thuê, mua bán tài khoản ngân hàng (Tiếp tay cho tội phạm rửa tiền xuyên quốc gia)',
    slug: 'canh-bao-du-do-thue-mua-ban-tai-khoan-ngan-hang',
    summary: 'Thu mua tài khoản ngân hàng của học sinh, người dân với giá 500k - 2 triệu đồng/tháng để làm công cụ nhận tiền lừa đảo, người cho thuê sẽ bị xử lý hình sự.',
    content: '<p>Nhiều đối tượng đăng tin trên mạng tìm mua hoặc thuê tài khoản ngân hàng, tài khoản ví điện tử với giá cao để dùng vào mục đích kinh doanh ngoại hối. Thực chất, các tài khoản này được các đường dây tội phạm công nghệ cao sử dụng để rửa tiền phi pháp, luân chuyển tiền lừa đảo chiếm đoạt được từ người khác. Người dân vì hám lợi vài trăm nghìn mà tiếp tay cho tội phạm, khi vụ án bị triệt phá sẽ bị xử lý với vai trò đồng phạm lừa đảo hoặc rửa tiền.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Gạ gẫm mở tài khoản ngân hàng có thẻ ATM rồi bán lại với giá từ 500.000đ đến 2.000.000đ.',
      'Thuê tài khoản nhận kiều hối, giao dịch tiền ảo với lời hứa không có rủi ro gì.',
      'Sử dụng thông tin căn cước công dân của người khác để mở tài khoản ngân hàng online.'
    ],
    prevention_advice: [
      'Hành vi mua bán, cho thuê, cho mượn tài khoản ngân hàng là vi phạm pháp luật và có thể bị phạt tù đến nhiều năm.',
      'Tuyệt đối không mở tài khoản ngân hàng giúp hoặc cho người khác mượn tài khoản thanh toán cá nhân.',
      'Nếu đã lỡ cho thuê, bán tài khoản, phải lập tức đến ngân hàng làm thủ tục đóng tài khoản và báo cho Công an xã.'
    ],
    views_count: 410,
    created_at: '09/09/2026'
  },
  {
    id: 'art_tri_an_cod',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 19: Gửi bưu phẩm \'Quà tri ân khách hàng\' có phiếu cào trúng thưởng hoặc thu tiền COD hàng giả mạo',
    slug: 'canh-bao-gui-buu-pham-qua-tri-an-thu-tien-cod',
    summary: 'Gửi các gói bưu phẩm không đặt mua đến tận nhà, shipper thu tiền phí 50k - 100k bên trong là rác hoặc thẻ cào lừa nạp tiền.',
    content: '<p>Đối tượng thu thập thông tin địa chỉ, số điện thoại của người dân rồi gửi các gói bưu phẩm COD (thu tiền khi nhận hàng) với số tiền nhỏ như 30.000đ - 90.000đ mang tên \'Quà tri ân khách hàng thân thiết\'. Do số tiền nhỏ, nhiều người nhà nhận thay và trả tiền. Khi mở ra, bên trong chỉ là chai nước hoa giả, gói trà vụn hoặc phiếu cào trúng thưởng 50 triệu kèm mã QR hướng dẫn liên hệ Zalo để nhận thưởng rồi bị lừa tiếp khoản tiền lớn.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Bưu phẩm gửi đến trong lúc người đặt hàng vắng nhà để người thân nhận hộ và thanh toán tiền.',
      'Bên trong gói hàng có phiếu cào may mắn trúng giải thưởng lớn (xe máy, đồ điện tử).',
      'Yêu cầu kết bạn Zalo hoặc quét mã QR trên phiếu cào để làm thủ tục nhận giải.'
    ],
    prevention_advice: [
      'Tuyệt đối không nhận và thanh toán bất kỳ bưu phẩm COD nào mà bản thân hoặc gia đình không trực tiếp đặt mua.',
      'Dặn dò người già và người thân trong nhà khi có shipper gọi giao hàng phải gọi điện xác minh trước.',
      'Không làm theo các hướng dẫn quét mã nhận thưởng ghi trên bưu phẩm lạ.'
    ],
    views_count: 260,
    created_at: '08/09/2026'
  },
  {
    id: 'art_chuyen_nham_tien',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 20: Bẫy nợ \'Chuyển tiền nhầm vào tài khoản\' rồi xuất hiện đối tượng ép vay nặng lãi kiểu xã hội đen',
    slug: 'canh-bao-chuyen-nham-tien-bay-tin-dung-den',
    summary: 'Cố tình chuyển một số tiền nhỏ vào tài khoản người dân, sau đó gọi điện đe dọa đòi nợ với lãi suất cắt cổ kiểu tín dụng đen.',
    content: '<p>Các đối tượng cố tình chuyển một khoản tiền (từ vài triệu đến hàng chục triệu đồng) vào tài khoản của người dân với nội dung vờ chuyển nhầm hoặc cho vay. Sau một vài ngày, xuất hiện người gọi điện tự nhận là công ty tài chính hoặc chủ nợ, tuyên bố nạn nhân đã vay tiền qua app và bắt trả cả gốc lẫn lãi với mức lãi suất cắt cổ lên tới 50-100%/tháng. Nếu nạn nhân không trả, chúng sẽ gọi điện đe dọa, chửi bới người thân và đăng ảnh bôi nhọ trên mạng xã hội.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Chuyển tiền vào tài khoản người dân mà không rõ nguyên nhân.',
      'Gọi điện yêu cầu chuyển trả lại tiền vào một số tài khoản hoàn toàn khác với tài khoản đã gửi tiền đến.',
      'Hăm dọa, vu khống nạn nhân vay tiền quỵt nợ để ép trả tiền lãi khống.'
    ],
    prevention_advice: [
      'Khi nhận được tiền chuyển nhầm vào tài khoản, TUYỆT ĐỐI KHÔNG SỬ DỤNG số tiền đó.',
      'Không chuyển trả tiền lại vào số tài khoản do người lạ gọi điện yêu cầu cung cấp.',
      'Chủ động ra chi nhánh Ngân hàng sao kê và nhờ ngân hàng chuyển hoàn lại cho người gửi đúng quy trình, hoặc đến Công an xã Đức Hợp lập biên bản ghi nhận sự việc.'
    ],
    views_count: 390,
    created_at: '07/09/2026'
  },
  {
    id: 'art_trai_he_quan_doi',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 21: Mạo danh Trại hè quân đội, Khóa tu mùa hè miễn phí cho học sinh rồi yêu cầu đóng quỹ làm nhiệm vụ',
    slug: 'canh-bao-trai-he-quan-doi-khoa-tu-mua-he-gia-mao',
    summary: 'Lập fanpage giả mạo chương trình \'Học kỳ trong quân đội\', \'Khóa tu chùa miễn phí\', lôi kéo cha mẹ vào nhóm khảo sát nạp tiền nhận vé tham dự.',
    content: '<p>Lợi dụng nhu cầu rèn luyện kỹ năng sống cho con em trong kỳ nghỉ hè, kẻ gian lập các trang mạng mang tên \'Trại hè Quân đội - Chiến sĩ nhí 2026\', \'Trại hè Công an nhí\', \'Khóa tu mùa hè miễn phí\'. Trang có hình ảnh quân nhân, sư thầy và giấy phép giả. Khi phụ huynh đăng ký, các đối tượng tư vấn tận tình rồi yêu cầu cha mẹ tham gia các vòng thử thách khảo sát tài trợ, chuyển tiền mua sản phẩm nhận hoàn lại 100% tiền kèm vé tham dự chính thức. Cuối cùng, chúng chiếm đoạt toàn bộ tiền nộp của phụ huynh.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Sử dụng trái phép hình ảnh của lực lượng Quân đội, Công an hoặc các chùa lớn.',
      'Quảng cáo chương trình hoàn toàn miễn phí ăn ở cho học sinh trong 1 - 2 tuần.',
      'Dẫn dụ phụ huynh vào nhóm Telegram thực hiện các lệnh chuyển tiền mua sản phẩm để giữ chỗ.'
    ],
    prevention_advice: [
      'Chương trình Học kỳ quân đội chính thống do Tỉnh đoàn, Thành đoàn phối hợp với Bộ Chỉ huy Quân sự tỉnh tổ chức và có thông báo công khai.',
      'Không tin vào các chương trình trại hè tuyển sinh qua fanpage mạng xã hội không có trụ sở rõ ràng.',
      'Tuyệt đối không chuyển tiền làm nhiệm vụ để đổi lấy suất tham gia trại hè cho con.'
    ],
    views_count: 330,
    created_at: '06/09/2026'
  },
  {
    id: 'art_chay_viec_cong_chuc',
    category_id: 'canh_bao',
    title: 'CẢNH BÁO 22: Giả mạo văn bản tuyển dụng công chức, viên chức hoặc hứa hẹn \'chạy việc, chạy biên chế\' để nhận tiền cọc',
    slug: 'canh-bao-chay-viec-chay-bien-che-cong-chuc',
    summary: 'Rêu rao có quen biết lãnh đạo cấp cao, có suất vào biên chế ngành Công an, Giáo dục, Y tế; nhận tiền đặt cọc hàng trăm triệu rồi bỏ trốn.',
    content: '<p>Kẻ lừa đảo tự khoe có mối quan hệ thân thiết với các lãnh đạo ban ngành, có khả năng \'chạy biên chế\', xin việc vào các cơ quan nhà nước, bệnh viện, trường học hoặc chuyển công tác. Chúng làm giả các Quyết định tuyển dụng, thông báo trúng tuyển có con dấu đỏ giả mạo để cho nạn nhân xem nhằm tạo lòng tin. Khi nạn nhân đưa tiền cọc hoặc giao hồ sơ gốc, đối tượng tiêu xài cá nhân rồi cắt đứt liên lạc, đổi chỗ ở.</p>',
    is_scam_alert: true,
    scam_tricks: [
      'Khoe khoang quan hệ với lãnh đạo cấp cao, hứa hẹn chắc chắn 100% đỗ công chức, viên chức.',
      'Soạn thảo các thông báo tiếp nhận hồ sơ, quyết định tuyển dụng giả mạo.',
      'Yêu cầu nộp tiền mặt hoặc chuyển khoản chi phí bôi trơn, chạy việc từ vài chục đến hàng trăm triệu đồng.'
    ],
    prevention_advice: [
      'Mọi thông tin thi tuyển công chức, viên chức đều được niêm yết công khai trên Cổng thông tin điện tử của cơ quan nhà nước.',
      'Quy trình thi tuyển, xét tuyển diễn ra nghiêm túc, minh bạch theo Luật Cán bộ, công chức và Luật Viên chức.',
      'Người dân tuyệt đối không đưa tiền cho bất kỳ cá nhân nào hứa hẹn chạy việc; hành vi đưa tiền chạy việc cũng có thể bị xem xét tội Đưa hối lộ.'
    ],
    views_count: 370,
    created_at: '05/09/2026'
  }
];

// =========================================================================
// TRỢ LÝ SỐ AI LOCAL THÔNG MINH ĐỘT PHÁ (XỬ LÝ ĐA LĨNH VỰC TOÀN DIỆN)
// =========================================================================
export function getSmartLocalChatAnswer(query: string): { answer: string; sources: any[] } {
  const q = query.toLowerCase().trim();

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

  // 3. XỬ LÝ KHẨN CẤP KHI BỊ LỪA ĐẢO / BỊ RÚT TIỀN / MẮC BẪY
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

  // 4. CÁC THỦ ĐOẠN LỪA ĐẢO CỤ THỂ (22 DẠNG)
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
      { type: 'procedure', id: 'proc_thuong_tru', title: 'Đăng ký thường trú tại xã Đức Hợp', code: 'TTHC-BCA-01' },
      { type: 'procedure', id: 'proc_dang_ky_xe', title: 'Đăng ký xe máy cấp xã', code: 'TTHC-BCA-02' }
    ]
  };
}


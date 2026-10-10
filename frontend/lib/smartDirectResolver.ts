import { LegalDatasetAnswer, removeDiacritics } from './legalDatasetEngine';

/**
 * Bộ giải quyết câu hỏi thông minh, trực diện & đúng trọng tâm (Smart Direct Intent Resolver)
 * Phục vụ công dân xã Đức Hợp tra cứu pháp luật và thủ tục hành chính năm 2026.
 * Đảm bảo 100% câu hỏi cốt lõi của bà con được trả lời chính xác, trực tiếp vào từng ý hỏi,
 * không bị trả lời chung chung hoặc nhảy nhầm sang chủ đề khác.
 */
export function matchSmartDirectIntent(rawQuery: string, categoryId?: string): LegalDatasetAnswer | null {
  if (!rawQuery || rawQuery.trim().length < 3) return null;
  const qNorm = removeDiacritics(rawQuery);

  // =========================================================================
  // 1. LĨNH VỰC: ĐĂNG KÝ XE MÁY MỚI, BẤM BIỂN SỐ TẠI XÃ & BIỂN SỐ ĐỊNH DANH SUỐT ĐỜI
  // =========================================================================
  const isBikePlateQuestion =
    (qNorm.includes('mua xe') || qNorm.includes('xe may') || qNorm.includes('bam bien') || qNorm.includes('bien so') || qNorm.includes('dang ky xe') || qNorm.includes('cap bien')) &&
    (qNorm.includes('suot doi') || qNorm.includes('di theo') || qNorm.includes('mang theo') || qNorm.includes('giay to gi') || qNorm.includes('can nhung gi') || qNorm.includes('xa duc hop') || qNorm.includes('tai xa'));

  const isLifelongPlateOnly =
    qNorm.includes('bien so') && (qNorm.includes('suot doi') || qNorm.includes('di theo toi') || qNorm.includes('di theo nguoi') || qNorm.includes('ban xe giu lai') || qNorm.includes('bien dinh danh'));

  if (isBikePlateQuestion || isLifelongPlateOnly) {
    return {
      answer: `🏛️ **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN ĐĂNG KÝ XE MÁY MỚI & BIỂN SỐ ĐỊNH DANH**\n\n` +
        `Kính chào Quý công dân! Công an xã Đức Hợp xin giải đáp trực tiếp, cụ thể **02 vấn đề** Bác/Anh/Chị đang quan tâm như sau:\n\n` +
        `📋 **1. BẤM BIỂN SỐ XE MÁY MỚI TẠI CÔNG AN XÃ ĐỨC HỢP CẦN MANG THEO NHỮNG GÌ?**\n` +
        `Để làm thủ tục đăng ký và bấm biển số xe máy mới tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm), Bác/Anh/Chị mang phương tiện đến và chuẩn bị đầy đủ **04 loại giấy tờ gốc** sau:\n` +
        `- 1️⃣ **Giấy tờ tùy thân của chủ xe:** Thẻ Căn cước công dân gắn chip hoặc xuất trình tài khoản định danh điện tử **VNeID Mức 2** (chính chủ).\n` +
        `- 2️⃣ **Hóa đơn nguồn gốc xe:** Hóa đơn giá trị gia tăng (GTGT) do cửa hàng/đại lý bán xe xuất cho người mua.\n` +
        `- 3️⃣ **Phiếu chất lượng xuất xưởng:** Phiếu kiểm tra chất lượng xuất xưởng của xe máy (bản gốc do nhà sản xuất phương tiện cấp).\n` +
        `- 4️⃣ **Chứng từ nộp lệ phí trước bạ:** Giấy nộp tiền vào ngân sách nhà nước hoặc Mã nộp thuế điện tử (đã nộp lệ phí trước bạ xe máy qua Cổng Dịch vụ công hoặc ứng dụng ngân hàng số).\n\n` +
        `💡 *Mẹo thực hiện nhanh nhất:* Bác/Anh/Chị nên kê khai trước **"Tờ khai đăng ký xe"** trên Cổng Dịch vụ công Bộ Công an hoặc ứng dụng VNeID để lấy **Mã hồ sơ trực tuyến**. Khi mang xe đến Công an xã Đức Hợp, cán bộ chỉ cần quét mã hồ sơ, kiểm tra số khung, số máy thực tế và tiến hành cho Bác/Anh/Chị bấm biển số ngay trong khoảng **15 - 20 phút**!\n` +
        `💰 **Lệ phí cấp biển số:** Tại xã Đức Hợp (khu vực nông thôn) chỉ từ **50.000đ - 100.000đ/xe** theo quy định.\n\n` +
        `🔢 **2. BIỂN SỐ XE NÀY CÓ ĐI THEO BÁC/ANH/CHỊ SUỐT ĐỜI KHÔNG?**\n` +
        `👉 **CÂU TRẢ LỜI LÀ: ĐÚNG VẬY, BIỂN SỐ ĐI THEO BÁC/ANH/CHỊ SUỐT ĐỜI.**\n` +
        `- Theo **Thông tư số 24/2023/TT-BCA và Thông tư số 28/2024/TT-BCA** của Bộ Công an, toàn bộ biển số xe 5 số hiện nay là **BIỂN SỐ ĐỊNH DANH**, được cấp và quản lý theo mã số định danh cá nhân (12 số Căn cước) của chủ xe.\n` +
        `- **Khi bán hoặc chuyển nhượng xe sau này:** Bác/Anh/Chị **bắt buộc phải giữ lại biển số và giấy đăng ký xe** nộp lại cho Công an làm thủ tục thu hồi (tuyệt đối không bán kèm biển số cho người mua xe).\n` +
        `- Cơ quan Công an sẽ lưu giữ biển số định danh này trong hệ thống dữ liệu trong thời hạn **05 năm**. Trong 05 năm đó, bất cứ khi nào Bác/Anh/Chị mua chiếc xe mới khác thì sẽ được cơ quan Công an **cấp lại chính biển số này** mà không phải bấm biển số mới!\n\n` +
        `📍 **Địa điểm tiếp nhận:** Bộ phận Đăng ký xe - Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên).\n` +
        `📞 **Hotline Trực ban Công an xã hỗ trợ 24/24h:** **02213.815.999**.`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_015', title: 'Thông tư 24/2023/TT-BCA & Thông tư 28/2024/TT-BCA về Đăng ký biển số định danh', url: 'https://csgt.vn' },
        { type: 'procedure', id: 'proc_dang_ky_xe', title: 'Thủ tục Đăng ký, cấp biển số xe mô tô tại Công an xã Đức Hợp', code: 'TTHC-BCA-02' }
      ],
      related_questions: [
        'Cách kê khai trước tờ khai đăng ký xe máy trên VNeID để lấy mã hồ sơ?',
        'Thủ tục nộp lệ phí trước bạ xe máy trực tuyến qua ngân hàng hoặc Cổng DVC?',
        'Khi bán xe máy cũ thì làm thủ tục thu hồi biển số định danh như thế nào?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // Sang tên xe máy cũ qua nhiều đời chủ / Mất giấy tờ / Giấy viết tay
  if (
    (qNorm.includes('sang ten') || qNorm.includes('mua xe cu') || qNorm.includes('xe cu')) &&
    (qNorm.includes('nhieu doi chu') || qNorm.includes('khong tim thay chu cu') || qNorm.includes('khong tim duoc chu cu') || qNorm.includes('giay viet tay') || qNorm.includes('mat ca vet') || qNorm.includes('mat dang ky'))
  ) {
    return {
      answer: `📋 **HƯỚNG DẪN THỦ TỤC SANG TÊN XE MÁY QUA NHIỀU ĐỜI CHỦ (ĐIỀU 31 THÔNG TƯ 24/2023/TT-BCA):**\n\n` +
        `Kính thưa Quý công dân, trường hợp mua xe máy cũ qua nhiều đời chủ hoặc chỉ có giấy viết tay, không tìm được chủ xe đứng tên trên đăng ký, thủ tục tại Công an xã Đức Hợp được giải quyết như sau:\n\n` +
        `📌 **1. Các bước thực hiện cụ thể:**\n` +
        `- **Bước 1:** Người đang sử dụng xe mang phương tiện cùng toàn bộ giấy tờ hiện có (Chứng nhận đăng ký xe cũ nếu còn, giấy mua bán viết tay nếu có) và Thẻ Căn cước đến **Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)**.\n` +
        `- **Bước 2:** Cán bộ Công an xã phát mẫu và hướng dẫn Bác/Anh/Chị viết **Bản cam kết chịu trách nhiệm trước pháp luật về nguồn gốc hợp pháp của chiếc xe**.\n` +
        `- **Bước 3 (Xác minh & Niêm yết):** Công an xã tiến hành tra cứu dữ liệu xe mất cắp, đồng thời thực hiện niêm yết công khai tại trụ sở Công an xã trong thời hạn **30 ngày**.\n` +
        `- **Bước 4 (Cấp biển số định danh mới):** Sau 30 ngày nếu không có khiếu nại, tranh chấp và xe không nằm trong danh sách tang vật vụ án, Công an xã Đức Hợp sẽ ra quyết định xử phạt vi phạm hành chính đối với hành vi không làm thủ tục thu hồi/sang tên đúng hạn (mức phạt từ 800.000đ - 2.000.000đ đối với cá nhân theo NĐ 168/2024/NĐ-CP), sau đó giải quyết cấp Chứng nhận đăng ký xe mới và **bấm biển số định danh mới** cho người đang sử dụng xe.\n\n` +
        `📍 Địa chỉ: Bộ phận Đăng ký xe - Công an xã Đức Hợp (Thôn Nho Lâm). Hotline: **02213.815.999**.`,
      sources: [
        { type: 'knowledge', id: 'CLARIFY_SANG_TEN_XE', title: 'Điều 31 Thông tư 24/2023/TT-BCA về giải quyết sang tên xe qua nhiều đời chủ', url: 'https://dichvucong.bocongan.gov.vn' }
      ],
      related_questions: [
        'Lệ phí sang tên đổi chủ xe máy tại Công an xã Đức Hợp là bao nhiêu?',
        'Nếu còn giữ đăng ký xe gốc thì thủ tục sang tên có nhanh hơn không?',
        'Thời hạn niêm yết công khai xác minh nguồn gốc xe máy cũ là bao nhiêu ngày?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // =========================================================================
  // 2. LĨNH VỰC: CĂN CƯỚC & CƯ TRÚ VNeID
  // =========================================================================
  // Làm Căn cước mới tại xã / Độ tuổi bắt buộc
  if (
    (qNorm.includes('can cuoc') || qNorm.includes('cccd') || qNorm.includes('the can cuoc')) &&
    (qNorm.includes('lam moi') || qNorm.includes('thu tuc') || qNorm.includes('can mang') || qNorm.includes('giay to gi') || qNorm.includes('do tuoi') || qNorm.includes('cap doi') || qNorm.includes('14 tuoi') || qNorm.includes('25 tuoi') || qNorm.includes('40 tuoi') || qNorm.includes('60 tuoi'))
  ) {
    return {
      answer: `🪪 **HƯỚNG DẪN THỦ TỤC LÀM THẺ CĂN CƯỚC MỚI THEO LUẬT CĂN CƯỚC 2023:**\n\n` +
        `Kính thưa Quý công dân, theo Luật Căn cước số 26/2023/QH15 (có hiệu lực từ ngày 01/7/2024):\n\n` +
        `📌 **1. Các mốc tuổi BẮT BUỘC phải làm/đổi thẻ Căn cước (Điều 21):**\n` +
        `- Công dân Việt Nam từ đủ **14 tuổi** bắt buộc phải làm thẻ Căn cước.\n` +
        `- Công dân phải thực hiện cấp đổi thẻ Căn cước khi đủ: **25 tuổi**, **40 tuổi** và **60 tuổi** (nếu thẻ được cấp trong vòng 02 năm trước độ tuổi này thì có giá trị sử dụng đến mốc tuổi cấp đổi tiếp theo).\n` +
        `- Trẻ em từ **0 đến dưới 14 tuổi:** Được cấp thẻ Căn cước theo **nhu cầu** của cha mẹ (trẻ dưới 6 tuổi không thu nhận sinh trắc học; trẻ từ 6 - 14 tuổi thu nhận khuôn mặt, vân tay và mống mắt).\n\n` +
        `📌 **2. Giấy tờ cần mang theo khi đi làm thẻ Căn cước:**\n` +
        `- Mang theo: **Thẻ Căn cước công dân (CCCD) cũ** hoặc Chứng minh nhân dân cũ.\n` +
        `- **Không cần mang theo Sổ hộ khẩu hay Giấy khai sinh** (vì toàn bộ thông tin công dân đã được đồng bộ chuẩn xác trên Cơ sở dữ liệu quốc gia về dân cư).\n` +
        `- Khuyến nghị: Đặt lịch hẹn làm Căn cước trước trên ứng dụng **VNeID** để được tiếp nhận nhanh nhất.\n\n` +
        `🏢 **Nơi tiếp nhận:** Công an xã Đức Hợp hướng dẫn và phối hợp cùng Đội Cảnh sát QLHC về TTXH Công an huyện Kim Động thu nhận hồ sơ.\n` +
        `💰 **Lệ phí:** Cấp thẻ lần đầu hoặc cấp đổi khi đến độ tuổi quy định: **HOÀN TOÀN MIỄN PHÍ (0 ĐỒNG)**.\n` +
        `⏱️ **Thời hạn trả thẻ:** 07 ngày làm việc (nhận thẻ tại cơ quan Công an hoặc chuyển phát tận nhà qua bưu điện).`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_001', title: 'Điều 19, 21, 23 Luật Căn cước số 26/2023/QH15', url: 'https://dichvucong.bocongan.gov.vn' }
      ],
      related_questions: [
        'Thẻ CCCD gắn chip cấp trước ngày 01/07/2024 còn hạn có bắt buộc đổi không?',
        'Trẻ em dưới 6 tuổi làm thẻ Căn cước trên VNeID như thế nào?',
        'Thời gian trả thẻ Căn cước qua bưu điện bưu chính là bao lâu?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // Kích hoạt VNeID Mức 2
  if (
    (qNorm.includes('vneid') || qNorm.includes('dinh danh')) &&
    (qNorm.includes('muc 2') || qNorm.includes('kich hoat') || qNorm.includes('lam dinh danh') || qNorm.includes('nang cap'))
  ) {
    return {
      answer: `📱 **HƯỚNG DẪN KÍCH HOẠT TÀI KHOẢN ĐỊNH DANH ĐIỆN TỬ VNeID MỨC 2 TẠI XÃ ĐỨC HỢP:**\n\n` +
        `Kính thưa Quý công dân, tài khoản VNeID Mức 2 có giá trị chứng minh thông tin tương đương việc xuất trình thẻ Căn cước bản cứng và tích hợp đầy đủ các giấy tờ cá nhân (GPLX, Đăng ký xe, Thẻ BHYT, Sổ BHXH):\n\n` +
        `📌 **1. Giấy tờ cần chuẩn bị mang đến Công an xã Đức Hợp:**\n` +
        `- 1️⃣ Thẻ Căn cước công dân gắn chip hoặc Thẻ Căn cước mới.\n` +
        `- 2️⃣ Điện thoại thông minh có lắp SIM số điện thoại chính chủ (đăng ký đúng tên mình với nhà mạng).\n` +
        `- 3️⃣ Các giấy tờ muốn tích hợp sẵn (nếu có): Bằng lái xe (GPLX), Giấy đăng ký xe máy/ô tô, Thẻ Bảo hiểm y tế.\n\n` +
        `📌 **2. Quy trình làm tại Công an xã Đức Hợp:**\n` +
        `- Công dân đến trực tiếp **Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)**.\n` +
        `- Cán bộ Công an xã đối chiếu thông tin, chụp ảnh khuôn mặt và lăn vân tay sinh trắc học trực tiếp trên máy chuyên dụng (khoảng 3 - 5 phút).\n` +
        `- **Lệ phí:** **HOÀN TOÀN MIỄN PHÍ (0 ĐỒNG)**.\n\n` +
        `📌 **3. Kích hoạt tài khoản trên điện thoại sau khi nhận SMS:**\n` +
        `- Khi Bộ Công an duyệt hồ sơ, tin nhắn SMS từ **VNeID** sẽ gửi về điện thoại kèm đường link kích hoạt.\n` +
        `- Mở ứng dụng VNeID -> Chọn *"Kích hoạt tài khoản định danh điện tử"* -> Nhập số định danh cá nhân (12 số Căn cước) + Số điện thoại -> Thiết lập Mật khẩu và Passcode 6 số bảo mật.\n\n` +
        `⚠️ **CẢNH BÁO QUAN TRỌNG:** Công an xã Đức Hợp **KHÔNG BAO GIỜ** gọi điện yêu cầu người dân bấm vào đường link lạ hoặc cài đặt file đuôi \`.apk\` để kích hoạt VNeID. Bác/Anh/Chị chỉ cài đặt ứng dụng VNeID duy nhất từ Google Play hoặc App Store!`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_004', title: 'Nghị định 69/2024/NĐ-CP về định danh và xác thực điện tử', url: 'https://dichvucong.bocongan.gov.vn' }
      ],
      related_questions: [
        'Cách tích hợp Giấy phép lái xe và Đăng ký xe vào Ví giấy tờ VNeID?',
        'Quên mật khẩu hoặc đổi điện thoại mới đăng nhập VNeID thế nào?',
        'Công an xã Đức Hợp có làm VNeID Mức 2 vào ngày Thứ Bảy không?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // CMND 9 số hết hạn & Thẻ CCCD gắn chip còn hạn
  if (
    (qNorm.includes('cmnd') || qNorm.includes('chung minh nhan dan') || qNorm.includes('cccd gan chip')) &&
    (qNorm.includes('het han') || qNorm.includes('con dung') || qNorm.includes('con gia tri') || qNorm.includes('bat buoc doi') || qNorm.includes('31 12 2024'))
  ) {
    return {
      answer: `⚖️ **QUY ĐỊNH HIỆU LỰC CỦA CHỨNG MINH NHÂN DÂN & THẺ CCCD GẮN CHÍP (CẬP NHẬT 2026):**\n\n` +
        `Công an xã Đức Hợp xin thông báo rõ ràng 02 quy định pháp luật cốt lõi theo Luật Căn cước 2023:\n\n` +
        `1️⃣ **Chứng minh nhân dân (CMND 9 số và 12 số) đã CHÍNH THỨC HẾT HẠN 100%:**\n` +
        `- Theo **khoản 2 Điều 46 Luật Căn cước số 26/2023/QH15**, toàn bộ CMND 9 số và 12 số đã hết giá trị sử dụng kể từ sau ngày **31/12/2024** (kể cả trên mặt thẻ CMND cũ ghi thời hạn đến năm nào đi nữa).\n` +
        `- Mọi giao dịch ngân hàng, công chứng, chuyển nhượng đất đai và thủ tục hành chính hiện nay **KHÔNG THỂ DÙNG CMND CŨ**. Bác/Anh/Chị chưa đổi phải khẩn trương đến cơ quan Công an làm Thẻ Căn cước mới ngay!\n\n` +
        `2️⃣ **Thẻ Căn cước công dân (CCCD) gắn chip cấp trước ngày 01/7/2024:**\n` +
        `- **VẪN CÒN NGUYÊN GIÁ TRỊ SỬ DỤNG** cho đến thời hạn hết hạn ghi ở mặt trước của thẻ.\n` +
        `- Bác/Anh/Chị **KHÔNG BẮT BUỘC PHẢI ĐỔI** sang thẻ Căn cước mới nếu thẻ CCCD gắn chip hiện tại chưa hết hạn.\n` +
        `- Tuy nhiên, nếu Bác/Anh/Chị có nhu cầu đổi sang mẫu thẻ Căn cước mới (để cập nhật thông tin mống mắt, nơi đăng ký khai sinh...) thì cơ quan Công an vẫn tiếp nhận và cấp đổi bình thường.`,
      sources: [
        { type: 'knowledge', id: 'TRAP_CMND_SO_HO_KHAU', title: 'Khoản 1, 2 Điều 46 Luật Căn cước số 26/2023/QH15', url: 'https://vanban.chinhphu.vn' }
      ],
      related_questions: [
        'Hồ sơ làm thẻ Căn cước mới khi đổi từ CMND 9 số cũ sang gồm những gì?',
        'Có cần xin Giấy xác nhận số CMND cũ khi làm thẻ Căn cước mới không?',
        'Sổ hộ khẩu giấy cũ đã hết hạn từ ngày nào theo quy định pháp luật?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // Mất thẻ Căn cước làm lại online trên VNeID
  if (
    qNorm.includes('mat the can cuoc') || qNorm.includes('mat the cccd') || qNorm.includes('mat cccd') ||
    qNorm.includes('roi the can cuoc') || qNorm.includes('lam lai the can cuoc') || qNorm.includes('lam lai cccd') ||
    qNorm.includes('cap lai the can cuoc')
  ) {
    return {
      answer: `🆔 **HƯỚNG DẪN THỦ TỤC CẤP LẠI THẺ CĂN CƯỚC BỊ MẤT TRỰC TUYẾN 100% TRÊN VNeID:**\n\n` +
        `Kính thưa Quý công dân, theo Điều 24, 25 Luật Căn cước 2023, khi bị mất thẻ Căn cước, Bác/Anh/Chị **KHÔNG CẦN PHẢI ĐẾN CƠ QUAN CÔNG AN CHỤP LẠI ẢNH HAY LĂN TAY**, mà có thể thực hiện cấp lại online toàn trình ngay tại nhà:\n\n` +
        `📌 **Các bước nộp hồ sơ trên điện thoại:**\n` +
        `- **Bước 1:** Đăng nhập ứng dụng **VNeID** (bằng tài khoản định danh điện tử Mức 2).\n` +
        `- **Bước 2:** Vào mục **"Thủ tục hành chính"** -> Chọn dịch vụ **"Cấp lại thẻ căn cước"**.\n` +
        `- **Bước 3:** Kiểm tra thông tin nhân thân đã hiển thị sẵn, chọn lý do *"Bị mất thẻ"*, chọn hình thức nhận kết quả (nhận tại nhà qua bưu điện hoặc nhận tại Công an huyện).\n` +
        `- **Bước 4:** Thanh toán lệ phí trực tuyến qua tài khoản ngân hàng / ví điện tử và bấm gửi hồ sơ.\n\n` +
        `⏱️ **Thời hạn giải quyết:** 07 ngày làm việc.\n` +
        `💰 **Lệ phí cấp lại:** 70.000đ/thẻ (giảm 50% chỉ còn 35.000đ khi nộp trực tuyến theo chính sách của Bộ Tài chính).\n` +
        `📞 Cần hướng dẫn thêm, bà con liên hệ Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_002', title: 'Điều 24, 25 Luật Căn cước 2023 về Cấp lại thẻ căn cước bị mất', url: 'https://dichvucong.bocongan.gov.vn' }
      ],
      related_questions: [
        'Cấp lại Giấy phép lái xe bị mất trực tuyến trên Cổng DVC thế nào?',
        'Cấp lại Giấy chứng nhận đăng ký xe (cà vẹt) bị mất tại xã Đức Hợp?',
        'Bị mất ví chứa tất cả giấy tờ tùy thân thì xử lý bước nào đầu tiên?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // =========================================================================
  // 3. LĨNH VỰC: PHÒNG CHỐNG LỪA ĐẢO & AN NINH MẠNG
  // =========================================================================
  if (
    qNorm.includes('bi lua') || qNorm.includes('chuyen tien cho ke lua dao') || qNorm.includes('lo chuyen tien') ||
    qNorm.includes('lay lai tien') || qNorm.includes('app gia') || qNorm.includes('vneid gia') || qNorm.includes('file apk') ||
    qNorm.includes('link la') || (qNorm.includes('mat tien') && qNorm.includes('qua mang'))
  ) {
    return {
      answer: `🚨 **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN 4 BƯỚC KHẨN CẤP KHI BỊ LỪA ĐẢO QUA MẠNG:**\n\n` +
        `Khi không may bị kẻ xấu lừa đảo chuyển tiền hoặc lỡ cài ứng dụng chứa mã độc (.apk), Bác/Anh/Chị hãy hành động ngay trong **15 - 30 PHÚT VÀNG ĐẦU TIÊN** theo quy trình sau:\n\n` +
        `1️⃣ **BƯỚC 1: KHÓA TÀI KHOẢN VÀ THẺ NGÂN HÀNG NGAY LẬP TỨC:**\n` +
        `- Mở app ngân hàng bấm tính năng *"Khóa thẻ khẩn cấp"* hoặc gọi ngay số Hotline in ở mặt sau thẻ ATM của ngân hàng để yêu cầu khóa toàn bộ giao dịch, đóng băng số dư còn lại.\n` +
        `- Nếu bị chiếm quyền điện thoại: Tắt ngay Wi-Fi, tắt 4G hoặc tắt nguồn điện thoại, tháo SIM sang máy "cục gạch" khác để bảo toàn mã OTP ngân hàng.\n\n` +
        `2️⃣ **BƯỚC 2: SAO LƯU CHỨNG CỨ PHÁP LÝ ĐẦY ĐỦ:**\n` +
        `- Chụp lại toàn bộ màn hình tin nhắn trao đổi, cuộc gọi, đường link lừa đảo, số điện thoại và thông tin tài khoản đối tượng thụ hưởng.\n` +
        `- Ra chi nhánh ngân hàng gần nhất in **Bản sao kê lịch sử giao dịch chuyển tiền có đóng dấu mộc đỏ của ngân hàng**.\n\n` +
        `3️⃣ **BƯỚC 3: ĐẾN TRÌNH BÁO TẠI CÔNG AN XÃ ĐỨC HỢP:**\n` +
        `- Đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi Hotline Trực ban: **02213.815.999**.\n` +
        `- Cán bộ Công an xã sẽ tiếp nhận đơn trình báo, lập biên bản ghi lời khai và phối hợp với cơ quan chức năng phong tỏa khẩn cấp tài khoản thụ hưởng của tội phạm.\n\n` +
        `4️⃣ **BƯỚC 4: CẢNH GIÁC BẪY LỪA ĐẢO LẦN 2 (THU HỒI TIỀN TREO):**\n` +
        `- Tuyệt đối **KHÔNG** tin vào các trang mạng Facebook/TikTok quảng cáo dịch vụ *"Cam kết lấy lại tiền bị lừa", "Hỗ trợ thu hồi vốn treo qua Luật sư / Cục An ninh mạng"*. Đó 100% là thủ đoạn lừa đảo tiếp lần thứ 2 của bọn tội phạm!`,
      sources: [
        { type: 'article', id: 'art_thu_hoi_tien_treo', title: 'Cảnh báo bẫy lừa thu hồi tiền treo lần 2', slug: 'canh-bao-dich-vu-thu-hoi-tien-bi-lua-dao-lan-2' },
        { type: 'article', id: 'art_vneid_fake', title: 'Cảnh báo giả danh Công an cài VNeID giả mạo', slug: 'canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao' }
      ],
      related_questions: [
        'Dấu hiệu nhận biết cuộc gọi video Deepfake mạo danh người thân mượn tiền?',
        'Cảnh báo chiêu trò tuyển cộng tác viên xử lý đơn hàng Shopee, TikTok kiếm hoa hồng?',
        'Xử lý thế nào khi bỗng nhiên có người chuyển nhầm tiền vào tài khoản ngân hàng?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // =========================================================================
  // 4. LĨNH VỰC: PCCC & CỨU NẠN CỨU HỘ
  // =========================================================================
  if (
    (qNorm.includes('binh chua chay') || qNorm.includes('binh cuu hoa') || qNorm.includes('trang bi pccc') || qNorm.includes('binh bot')) &&
    (qNorm.includes('gia dinh') || qNorm.includes('nha') || qNorm.includes('loai nao') || qNorm.includes('o dau') || qNorm.includes('nong thon'))
  ) {
    return {
      answer: `🧯 **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN TRANG BỊ BÌNH CHỮA CHÁY GIA ĐÌNH NÔNG THÔN:**\n\n` +
        `Thực hiện phong trào *"Nhà tôi có bình chữa cháy"*, Công an xã Đức Hợp khuyến nghị mỗi hộ gia đình tại các thôn nên trang bị phương tiện chữa cháy như sau:\n\n` +
        `📌 **1. Nên chọn loại bình chữa cháy nào?**\n` +
        `- **Khuyến nghị số 1 cho gia đình nông thôn:** Bình bột chữa cháy xách tay loại **ABC (4kg - Ký hiệu MFZL4)**.\n` +
        `  + *Ưu điểm:* Dập được hầu hết các loại đám cháy phổ biến: Chất rắn (gỗ, rơm rạ, vải), chất lỏng (xăng, dầu) và chất khí (khí gas gia đình) cũng như sự cố chập điện gia dụng.\n` +
        `  + *Giá thành:* Rất hợp lý (khoảng 220.000đ - 300.000đ/bình có tem kiểm định của Cục Cảnh sát PCCC).\n` +
        `- **Lựa chọn bổ sung:** Bình khí CO2 xách tay loại **3kg (Ký hiệu MT3)**: Rất tốt cho dập cháy đồ điện tử trong nhà, không để lại cặn bột.\n\n` +
        `📌 **2. Vị trí đặt bình trong nhà:**\n` +
        `- Đặt ở nơi **dễ thấy, dễ lấy, khô ráo**, thuận tiện trên lối thoát nạn (ngay cạnh cửa ra vào, chân cầu thang, trước cửa gian bếp).\n` +
        `- Treo trên giá cách mặt đất từ 1,2 mét đến 1,5 mét hoặc đặt trên kệ chuyên dụng. Tránh để nơi ẩm ướt hoặc phơi nắng ngoài trời làm hỏng van hãm.\n\n` +
        `📌 **3. Kỹ năng sử dụng nhanh (Quy tắc 4 bước):**\n` +
        `  1. Xách bình chạy đến gần đám cháy (cách gốc lửa 1,5 - 2 mét).\n` +
        `  2. Giật mạnh chốt hãm kẹp chì trên cổ bình.\n` +
        `  3. Hướng đầu loa phun vào **gốc ngọn lửa** (chú ý đứng ở đầu hướng gió).\n` +
        `  4. Bóp chặt van cầm tay và quét loa phun qua lại cho đến khi ngọn lửa tắt hẳn.\n\n` +
        `📞 **Số điện thoại khẩn cấp:** Báo cháy **114** | Trực ban Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_031', title: 'Quy định trang bị phương tiện PCCC hộ gia đình (Thông tư 150/2020/TT-BCA)', url: 'https://canhsatpccc.gov.vn' }
      ],
      related_questions: [
        'Cách xử lý an toàn khi phát hiện rò rỉ khí gas trong bếp ăn gia đình?',
        'Kỹ năng thoát nạn an toàn khi xảy ra hỏa hoạn trong nhà ống, chuồng cọp?',
        'Thời hạn kiểm tra và nạp lại bình chữa cháy bột ABC là bao lâu?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // Rò rỉ khí gas trong bếp
  if (
    qNorm.includes('khi gas') || qNorm.includes('ro ri gas') || qNorm.includes('binh gas') ||
    (qNorm.includes('gas') && (qNorm.includes('mui gas') || qNorm.includes('bep gas') || qNorm.includes('ro ri')))
  ) {
    return {
      answer: `⚠️ **4 NGUYÊN TẮC VÀNG XỬ LÝ KHẨN CẤP KHI PHÁT HIỆN RÒ RỈ KHÍ GAS TRONG BẾP:**\n\n` +
        `Khí gas nặng hơn không khí, khi rò rỉ sẽ chìm sát mặt sàn và cực kỳ dễ bắt lửa gây nổ kinh hoàng. Công an xã Đức Hợp yêu cầu bà con tuyệt đối ghi nhớ:\n\n` +
        `🚫 **1. TUYỆT ĐỐI KHÔNG BẬT / TẮT BẤT KỲ THIẾT BỊ ĐIỆN NÀO:**\n` +
        `- Không bật công tắc đèn, không bật quạt điện, không dùng quạt hút mùi, không cắm/rút phích cắm điện, không nghe điện thoại di động trong gian bếp. Dù chỉ một tia lửa điện nhỏ từ công tắc cũng sẽ kích nổ toàn bộ khối khí gas!\n` +
        `- Tuyệt đối không bật que diêm, bật lửa hay thắp hương gần khu vực bếp.\n\n` +
        `🔒 **2. BÌNH TĨNH KHÓA VAN BÌNH GAS NGAY LẬP TỨC:**\n` +
        `- Nín thở hoặc dùng khăn ẩm che mũi miệng, tiếp cận bình gas và vặn chặt van khóa bình gas theo chiều kim đồng hồ.\n\n` +
        `💨 **3. MỞ TOANG TẤT CẢ CÁC CỬA ĐỂ THÔNG GIÓ TỰ NHIÊN:**\n` +
        `- Dùng tay mở hết tất cả các cửa sổ, cửa đi để gió trời tự nhiên lùa vào làm loãng nồng độ khí gas.\n` +
        `- Dùng bìa các-tông, quạt nan hoặc chổi quét nhẹ sát mặt sàn từ trong nhà ra phía ngoài cửa để xua bớt khí gas nặng chìm dưới đất ra ngoài (tuyệt đối không dùng quạt máy điện).\n\n` +
        `🏃 **4. DI TẢN MỌI NGƯỜI RA KHỎI KHU VỰC NGUY HIỂM:**\n` +
        `- Đưa người già và trẻ nhỏ ra ngoài sân thoáng đãng, sau đó mới dùng điện thoại gọi đại lý gas hoặc gọi Công an xã để hỗ trợ kiểm tra bình gas.\n\n` +
        `📞 Trực ban Công an xã Đức Hợp sẵn sàng hỗ trợ 24/24h: **02213.815.999** | Cứu hỏa: **114**.`,
      sources: [
        { type: 'knowledge', id: 'kb_gas_safety', title: 'Cẩm nang an toàn PCCC sử dụng gas gia đình - Cục Cảnh sát PCCC', url: 'https://canhsatpccc.gov.vn' }
      ],
      related_questions: [
        'Mỗi gia đình nông thôn cần trang bị loại bình chữa cháy nào và đặt ở đâu?',
        'Kỹ năng thoát hiểm an toàn khi xảy ra hỏa hoạn trong nhà ở chuồng cọp?',
        'Số điện thoại báo cháy khẩn cấp của lực lượng PCCC là số nào?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // =========================================================================
  // 5. LĨNH VỰC: AN NINH TRẬT TỰ & PHÁP LUẬT DÂN SỰ
  // =========================================================================
  // Bạo lực gia đình (vợ/chồng bị đánh đập)
  if (
    /chong danh|vo danh|bi danh|bao luc gia dinh|hanh hung|danh dap|nguoc dai|bao hanh|danh vo|danh chong/i.test(qNorm)
  ) {
    return {
      answer: `🚨 **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN XỬ LÝ KHẨN CẤP KHI BỊ BẠO LỰC GIA ĐÌNH (BỊ ĐÁNH ĐẬP, HÀNH HUNG):**\n\n` +
        `Công an xã Đức Hợp khẩn thiết đề nghị Bác/Chị/Anh hãy đặt **sự an toàn tính mạng và sức khỏe lên hàng đầu**:\n\n` +
        `1️⃣ **BƯỚC 1: LẬP TỨC LÁNH NẠN AN TOÀN:**\n` +
        `- Chạy thoát ngay sang nhà hàng xóm, người thân hoặc nơi đông người để cầu cứu. Tránh xa các vật dụng sắc nhọn, nguy hiểm.\n` +
        `- Nếu bị nhốt hoặc không kịp thoát ra ngoài: Hãy khóa chặt cửa phòng kiên cố, hô hoán thật to để người xung quanh nghe thấy.\n\n` +
        `2️⃣ **BƯỚC 2: GỌI KHẨN CẤP CÔNG AN XÃ ĐỨC HỢP (24/24H):**\n` +
        `- Gọi ngay số điện thoại **Trực ban Công an xã Đức Hợp**: **02213.815.999**.\n` +
        `- Hoặc gọi Cảnh sát phản ứng nhanh: **113** | Tổng đài Quốc gia bảo vệ Phụ nữ & Trẻ em: **111**.\n` +
        `👉 *Cán bộ chiến sĩ Công an xã Đức Hợp sẽ có mặt ngay tại hiện trường (các thôn trong xã) để khống chế đối tượng, ngăn chặn hành vi bạo lực và bảo vệ nạn nhân an toàn.*\n\n` +
        `3️⃣ **BƯỚC 3: ĐẾN CƠ SỞ Y TẾ SƠ CỨU & LẬP HỒ SƠ THƯƠNG TÍCH:**\n` +
        `- Đến ngay Trạm Y tế xã Đức Hợp hoặc Trung tâm Y tế huyện Kim Động để khám, điều trị vết thương và xin cấp **Giấy chứng nhận thương tích / Bệnh án y khoa**. Đây là chứng cứ pháp lý quyết định để xử lý đối tượng.\n` +
        `- Giữ lại ảnh chụp vết thương, quần áo rách, đồ đạc bị đập phá, tin nhắn/ghi âm đe dọa.\n\n` +
        `4️⃣ **BƯỚC 4: ÁP DỤNG CÁC BIỆN PHÁP BẢO VỆ PHÁP LUẬT:**\n` +
        `- **Ra Quyết định cấm tiếp xúc:** Theo Điều 25 Luật Phòng, chống bạo lực gia đình năm 2022, Chủ tịch UBND xã Đức Hợp hoặc Tòa án có quyền ra Quyết định cấm người có hành vi bạo lực đến gần nạn nhân (dưới 30m).\n` +
        `- **Xử phạt hành chính:** Theo quy định tại Nghị định số 282/2025/NĐ-CP (thay thế Nghị định 144/2021/NĐ-CP), phạt tiền từ **5.000.000đ - 20.000.000đ** đối với hành vi đánh đập, hành hạ thành viên gia đình.\n` +
        `- **Khởi tố hình sự:** Người có hành vi bạo hành dã man hoặc gây thương tích sẽ bị khởi tố theo **Điều 134 Bộ luật Hình sự** (Tội Cố ý gây thương tích) hoặc **Điều 185 Bộ luật Hình sự** (Tội Ngược đãi, hành hạ vợ/chồng/con) với khung hình phạt tù từ 06 tháng đến 05 năm.\n\n` +
        `📍 **Trụ sở tiếp nhận tin báo:** Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên). Lực lượng Công an luôn đồng hành bảo vệ người dân!`,
      sources: [
        { type: 'knowledge', id: 'kb_blgd_01', title: 'Hướng dẫn khẩn cấp khi bị bạo lực gia đình (Luật PCBLGĐ 2022)' },
        { type: 'knowledge', id: 'kb_blgd_04', title: 'Mức phạt tiền và hình sự hành vi đánh đập vợ/chồng (NĐ 282/2025/NĐ-CP & BLHS)' },
        { type: 'knowledge', id: 'kb_blgd_02', title: 'Quy định Biện pháp Cấm tiếp xúc bảo vệ nạn nhân' }
      ],
      related_questions: [
        'Quy định về Biện pháp Cấm tiếp xúc bảo vệ nạn nhân bạo lực gia đình?',
        'Hành vi đánh đập vợ/chồng bị xử phạt bao nhiêu tiền theo quy định mới?',
        'Số điện thoại Trực ban Công an xã Đức Hợp tiếp nhận phản ánh 24/24h?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  // Đốt pháo hoa / Pháo nổ dịp Tết
  if (
    qNorm.includes('phao hoa') || qNorm.includes('phao no') || qNorm.includes('dot phao') || qNorm.includes('z121')
  ) {
    return {
      answer: `🎆 **QUY ĐỊNH PHÁP LUẬT VỀ SỬ DỤNG PHÁO HOA DỊP TẾT & XỬ PHẠT PHÁO NỔ TRÁI PHÉP:**\n\n` +
        `Theo Nghị định số 137/2020/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 56/2023/NĐ-CP) về quản lý, sử dụng pháo:\n\n` +
        `✅ **1. Loại pháo người dân ĐƯỢC PHÉP sử dụng:**\n` +
        `- Người dân từ đủ 18 tuổi có năng lực hành vi dân sự được phép sử dụng **PHÁO HOA KHÔNG GÂY TIẾNG NỔ** (loại pháo chỉ tạo ra hiệu ứng âm thanh xì xèo, ánh sáng, màu sắc trong không gian) vào các dịp: Lễ, Tết, Sinh nhật, Cưới hỏi.\n` +
        `- Pháo hoa này bắt buộc phải mua tại các **Cửa hàng được cấp phép của Nhà máy Z121 - Bộ Quốc phòng** (có hóa đơn bán lẻ hợp pháp).\n\n` +
        `🚫 **2. Các hành vi BỊ NGHIÊM CẤM TUYỆT ĐỐI:**\n` +
        `- Nghiêm cấm mua bán, tàng trữ, vận chuyển, chế tạo, sử dụng **PHÁO NỔ và PHÁO HOA NỔ** (các loại pháo có tiếng nổ đùng đoàng, pháo bi, pháo dàn lậu từ nước ngoài, pháo tự chế từ diêm/thuốc nổ).\n\n` +
        `⚖️ **3. Chế tài xử phạt rất nghiêm khắc:**\n` +
        `- **Xử phạt hành chính:** Phạt tiền từ **5.000.000đ - 10.000.000đ** đối với hành vi sử dụng các loại pháo hoa, pháo hoa nổ trái phép; phạt từ **10.000.000đ - 20.000.000đ** đối với hành vi vận chuyển, tàng trữ trái phép (theo Nghị định 282/2025/NĐ-CP).\n` +
        `- **Xử lý hình sự:** Tàng trữ pháo nổ từ 06 kg trở lên sẽ bị khởi tố về **Tội tàng trữ hàng cấm** (Điều 191 BLHS) với mức án lên đến 05 năm tù; đốt pháo nổ nơi công cộng bị xử lý về **Tội gây rối trật tự công cộng** (Điều 318 BLHS).\n\n` +
        `📞 Phát hiện đối tượng buôn bán pháo lậu, bà con báo ngay Công an xã Đức Hợp: **02213.815.999**.`,
      sources: [
        { type: 'knowledge', id: 'kb_ds5000_155', title: 'Nghị định 137/2020/NĐ-CP & Nghị định 56/2023/NĐ-CP về quản lý, sử dụng pháo', url: 'https://vanban.chinhphu.vn' }
      ],
      related_questions: [
        'Địa chỉ cửa hàng bán pháo hoa Z121 Bộ Quốc phòng chính hãng tại Hưng Yên?',
        'Hành vi tự chế pháo nổ từ thuốc diêm bị xử lý hình sự như thế nào?',
        'Cách phân biệt pháo hoa được phép đốt và pháo hoa nổ bị cấm?'
      ],
      answer_status: 'ANSWERABLE'
    };
  }

  return null;
}

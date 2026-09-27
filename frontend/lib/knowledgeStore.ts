export interface KnowledgeItem {
  id: string;
  category_id: string;
  category_name: string;
  source_title: string;
  source_type: string;
  legal_basis: string;
  chunk_preview: string;
  full_content: string;
  keywords: string[];
  created_at: string;
}

export const KNOWLEDGE_CATEGORIES = [
  {
    "id": "all",
    "name": "Tất cả lĩnh vực"
  },
  {
    "id": "cu_tru",
    "name": "Cư trú & Căn cước VNeID"
  },
  {
    "id": "giao_thong",
    "name": "Giao thông & Đăng ký xe"
  },
  {
    "id": "pccc",
    "name": "Phòng cháy chữa cháy (PCCC)"
  },
  {
    "id": "bao_luc_gia_dinh_antt",
    "name": "Bạo lực gia đình & An ninh trật tự"
  },
  {
    "id": "phong_chong_lua_dao",
    "name": "Phòng chống lừa đảo công nghệ cao"
  },
  {
    "id": "quan_ly_nganh_nghe",
    "name": "Quản lý ngành nghề & VK-VLN-CCHT"
  }
];

export const IN_MEMORY_KNOWLEDGE: KnowledgeItem[] = [
  {
    "id": "kb_blgd_01",
    "category_id": "bao_luc_gia_dinh_antt",
    "category_name": "Bạo lực gia đình & An ninh trật tự",
    "source_title": "Hướng dẫn xử lý khẩn cấp khi bị chồng/vợ đánh đập, bạo lực gia đình và bảo vệ an toàn tính mạng",
    "source_type": "law",
    "legal_basis": "Luật Phòng, chống bạo lực gia đình năm 2022; Điều 52 Nghị định số 144/2021/NĐ-CP; Điều 134, Điều 185 Bộ luật Hình sự 2015 (sửa đổi, bổ sung 2017)",
    "chunk_preview": "Khi bị chồng hoặc người thân đánh đập, bạo hành: Ưu tiên bảo vệ tính mạng, lánh nạn an toàn và gọi ngay Hotline Trực ban Công an xã Đức Hợp 02213.815.999 hoặc 113. Khám thương tích tại cơ sở y tế để thu thập chứng cứ. Hành vi đánh đập bị phạt tiền từ 5 - 20 triệu đồng hoặc khởi tố hình sự.",
    "full_content": "HƯỚNG DẪN XỬ LÝ KHẨN CẤP KHI BỊ BẠO LỰC GIA ĐÌNH (BỊ CHỒNG/VỢ/NGƯỜI THÂN ĐÁNH ĐẬP)\n\n1. BẢO ĐẢM TÍNH MẠNG VÀ AN TOÀN BẢN THÂN LÊN HÀNG ĐẦU:\n- Khi đối tượng đang trong cơn kích động, say xỉn hoặc có hung khí: Nạn nhân cần lập tức tìm cách thoát ra khỏi nhà, chạy sang nhà hàng xóm, nhà người thân hoặc nơi đông người để cầu cứu. Tuyệt đối không đôi co, thách thức.\n- Nếu không thể thoát ra: Khóa chặt cửa phòng kiên cố, gọi to để hàng xóm xung quanh nghe thấy và ứng cứu.\n\n2. LIÊN HỆ KHẨN CẤP LỰC LƯỢNG CHỨC NĂNG CAN THIỆP NGAY LẬP TỨC:\n- Hotline Trực ban Công an xã Đức Hợp (24/24h): 02213.815.999 (Cán bộ chiến sĩ Công an xã sẽ có mặt ngay tại hiện trường để khống chế đối tượng, ngăn chặn bạo lực và bảo vệ nạn nhân).\n- Tổng đài Cảnh sát phản ứng nhanh: 113.\n- Tổng đài Quốc gia bảo vệ Phụ nữ và Trẻ em: 111 (miễn phí cước cuộc gọi 24/7).\n- Báo Trưởng thôn hoặc Hội Phụ nữ xã Đức Hợp để được hỗ trợ chỗ tạm lánh an toàn.\n\n3. KHÁM CHỮA THƯƠNG TÍCH VÀ THU THẬP CHỨNG CỨ PHÁP LÝ:\n- Đến ngay Trạm Y tế xã Đức Hợp hoặc Trung tâm Y tế huyện Kim Động để được điều trị, sơ cứu và lập Bệnh án/Giấy chứng nhận thương tích. Đây là chứng cứ pháp lý quyết định để xử lý đối tượng.\n- Lưu lại ảnh chụp vết thương, đồ vật bị đập phá, ghi âm/video hoặc tin nhắn đe dọa (nếu có).\n\n4. CÁC BIỆN PHÁP BẢO VỆ NẠN NHÂN VÀ XỬ LÝ THEO PHÁP LUẬT:\n- Quyết định Cấm tiếp xúc: Theo Điều 25 Luật Phòng, chống bạo lực gia đình 2022, Chủ tịch UBND cấp xã hoặc Tòa án có quyền ra Quyết định cấm người có hành vi bạo lực đến gần nạn nhân trong phạm vi dưới 30m và cấm sử dụng điện thoại, mạng xã hội để đe dọa nạn nhân.\n- Xử phạt vi phạm hành chính: Theo Điều 52 Nghị định 144/2021/NĐ-CP, phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng đối với hành vi đánh đập gây thương tích cho thành viên gia đình; phạt từ 10.000.000 đồng đến 20.000.000 đồng nếu sử dụng công cụ, hung khí.\n- Xử lý hình sự: Khởi tố theo Điều 134 Bộ luật Hình sự (Tội cố ý gây thương tích) hoặc Điều 185 Bộ luật Hình sự (Tội ngược đãi hoặc hành hạ ông bà, cha mẹ, vợ chồng, con, cháu) với mức phạt tù lên đến 05 năm.",
    "keywords": [
      "bị chồng đánh",
      "chồng đánh",
      "vợ đánh",
      "bạo lực gia đình",
      "bị đánh đập",
      "bị bạo hành",
      "hành hung",
      "đánh vợ",
      "đánh con",
      "cấm tiếp xúc",
      "bị đe dọa"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_blgd_02",
    "category_id": "bao_luc_gia_dinh_antt",
    "category_name": "Bạo lực gia đình & An ninh trật tự",
    "source_title": "Biện pháp Cấm tiếp xúc và Bảo vệ người bị bạo lực gia đình theo Luật Phòng, chống bạo lực gia đình 2022",
    "source_type": "law",
    "legal_basis": "Điều 25, 26, 27 Luật Phòng, chống bạo lực gia đình năm 2022; Thông tư liên tịch của Bộ Công an",
    "chunk_preview": "Chủ tịch UBND xã Đức Hợp có thẩm quyền ra Quyết định cấm tiếp xúc có hiệu lực đến 03 ngày khi có hành vi bạo lực đe dọa tính mạng. Công an xã Đức Hợp chịu trách nhiệm phân công cán bộ giám sát việc thi hành lệnh cấm tiếp xúc và can thiệp ngay khi vi phạm.",
    "full_content": "QUY ĐỊNH VỀ BIỆN PHÁP CẤM TIẾP XÚC THEO YÊU CẦU CỦA NGƯỜI BỊ BẠO LỰC GIA ĐÌNH\n\n1. Thẩm quyền ban hành Quyết định Cấm tiếp xúc cấp Xã:\n- Chủ tịch UBND xã Đức Hợp ra quyết định cấm tiếp xúc có thời hạn không quá 03 ngày khi:\n  + Có đơn yêu cầu của người bị bạo lực gia đình, người giám hộ hoặc cơ quan, tổ chức có thẩm quyền.\n  + Hành vi bạo lực gia đình gây tổn hại hoặc đe dọa gây tổn hại đến sức khỏe, tính mạng.\n  + Người có hành vi bạo lực và nạn nhân không cùng nơi cư trú hoặc nạn nhân đã có chỗ tạm lánh an toàn.\n\n2. Trách nhiệm giám sát của Công an xã Đức Hợp:\n- Trưởng Công an xã Đức Hợp phân công cán bộ công an phối hợp Trưởng thôn, Hội Phụ nữ giám sát việc thực hiện quyết định cấm tiếp xúc.\n- Khi người bị áp dụng biện pháp cấm tiếp xúc cố tình tiếp cận nạn nhân trong phạm vi dưới 30 mét: Nạn nhân lập tức gọi Hotline Công an xã 02213.815.999. Lực lượng Công an sẽ có mặt khống chế, đưa về trụ sở lập biên bản xử lý nghiêm.\n\n3. Chỗ tạm lánh an toàn và hỗ trợ khẩn cấp:\n- Xã Đức Hợp bố trí Nhà văn hóa thôn, Trạm y tế hoặc cơ sở bảo trợ xã hội làm nơi tạm lánh an toàn cho nạn nhân trong thời gian khẩn cấp.\n- Nạn nhân được hỗ trợ chăm sóc y tế, tâm lý và pháp lý miễn phí.",
    "keywords": [
      "cấm tiếp xúc",
      "bảo vệ nạn nhân bạo lực gia đình",
      "chỗ tạm lánh an toàn",
      "can thiệp bạo lực",
      "luật bạo lực gia đình 2022"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_blgd_03",
    "category_id": "bao_luc_gia_dinh_antt",
    "category_name": "Bạo lực gia đình & An ninh trật tự",
    "source_title": "Quy trình Công an xã Đức Hợp tiếp nhận, giải quyết tố giác tin báo tội phạm và cố ý gây thương tích",
    "source_type": "procedure",
    "legal_basis": "Thông tư số 129/2021/TT-BCA của Bộ Công an; Điều 145, 146 Bộ luật Tố tụng hình sự",
    "chunk_preview": "Công an xã Đức Hợp tiếp nhận tố giác tội phạm, bạo lực, đánh người gây thương tích 24/24h qua điện thoại 02213.815.999 hoặc tại trụ sở Thôn Nho Lâm. Cán bộ lập biên bản tiếp nhận, phân loại, bảo vệ hiện trường và giải quyết kịp thời theo quy định.",
    "full_content": "QUY TRÌNH TIẾP NHẬN VÀ GIẢI QUYẾT TỐ GIÁC TỘI PHẠM TẠI CÔNG AN XÃ ĐỨC HỢP\n\n1. Hình thức tiếp nhận:\n- Trực tiếp bằng văn bản hoặc lời khai tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên).\n- Trực tiếp qua điện thoại Trực ban 24/24h: 02213.815.999.\n- Qua chức năng 'Gửi tin báo ANTT' trên ứng dụng VNeID (Mức 2).\n\n2. Trách nhiệm của Cán bộ trực ban Công an xã:\n- Tiếp nhận đầy đủ thông tin tố giác, lập Biên bản tiếp nhận tin báo, vào Sổ theo dõi tiếp nhận tố giác tội phạm.\n- Cấp Giấy biên nhận tiếp nhận nguồn tin cho người tố giác.\n- Lập tức cử lực lượng đến hiện trường để ngăn chặn hành vi phạm tội, cấp cứu người bị hại, bảo vệ hiện trường và tạm giữ đối tượng, hung khí (nếu có).\n\n3. Thời hạn giải quyết:\n- Trong vòng 24 giờ kể từ khi tiếp nhận, Công an xã tiến hành kiểm tra, xác minh sơ bộ và báo cáo Thủ trưởng Cơ quan Cảnh sát điều tra Công an huyện Kim Động xử lý theo thẩm quyền tố tụng.",
    "keywords": [
      "tố giác tội phạm",
      "báo công an",
      "đánh người gây thương tích",
      "tin báo an ninh trật tự",
      "trực ban công an xã"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_blgd_04",
    "category_id": "bao_luc_gia_dinh_antt",
    "category_name": "Bạo lực gia đình & An ninh trật tự",
    "source_title": "Xử phạt hành chính và xử lý hình sự đối với hành vi xúc phạm danh dự, đánh đập thành viên gia đình",
    "source_type": "law",
    "legal_basis": "Nghị định số 144/2021/NĐ-CP; Điều 185 Bộ luật Hình sự 2015",
    "chunk_preview": "Hành vi lăng mạ, xúc phạm danh dự thành viên gia đình bị phạt tiền từ 5 - 10 triệu đồng. Hành vi đánh đập, hành hạ bị phạt từ 10 - 20 triệu đồng hoặc phạt tù từ 02 đến 05 năm theo Bộ luật Hình sự.",
    "full_content": "MỨC XỬ PHẠT CỤ THỂ ĐỐI VỚI CÁC HÀNH VI BẠO HÀNH GIA ĐÌNH\n\n1. Bạo lực về tinh thần (lăng mạ, xúc phạm, đe dọa):\n- Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng đối với hành vi lăng mạ, chì chiết, xúc phạm danh dự, nhân phẩm thành viên gia đình (Điều 54 Nghị định 144/2021/NĐ-CP).\n- Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối với hành vi đe dọa giết người hoặc đe dọa xâm hại sức khỏe nếu chưa đến mức truy cứu hình sự.\n\n2. Bạo lực về kinh tế:\n- Phạt tiền từ 20.000.000 đồng đến 30.000.000 đồng đối với hành vi chiếm đoạt tài sản riêng của thành viên gia đình; ép buộc thành viên gia đình lao động quá sức hoặc đóng góp tài chính quá khả năng.\n\n3. Xử lý hình sự về Tội ngược đãi hoặc hành hạ ông bà, cha mẹ, vợ chồng, con, cháu (Điều 185 BLHS):\n- Người nào đối xử tàn ác hoặc làm nhục thành viên gia đình gây đau đớn về thể xác hoặc tinh thần: Bị phạt cảnh cáo, phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm.\n- Phạm tội đối với phụ nữ mà biết là có thai, người già yếu, khuyết tật hoặc trẻ em: Phạt tù từ 02 năm đến 05 năm.",
    "keywords": [
      "xử phạt bạo hành gia đình",
      "đánh vợ bị phạt bao nhiêu",
      "ngược đãi vợ chồng",
      "nghị định 144/2021",
      "điều 185 bộ luật hình sự"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_cutru_01",
    "category_id": "cu_tru",
    "category_name": "Cư trú & Căn cước VNeID",
    "source_title": "Luật Cư trú số 68/2020/QH14: Bỏ Sổ hộ khẩu giấy, quản lý cư trú hoàn toàn bằng công nghệ số",
    "source_type": "law",
    "legal_basis": "Luật Cư trú năm 2020; Thông tư số 55/2021/TT-BCA và Thông tư 56/2021/TT-BCA của Bộ Công an",
    "chunk_preview": "Từ 01/01/2023, toàn bộ Sổ hộ khẩu giấy hết giá trị. Thông tin cư trú của người dân xã Đức Hợp được xác thực qua Căn cước công dân gắn chip, ứng dụng VNeID Mức 2 và Giấy xác nhận thông tin cư trú (CT07).",
    "full_content": "QUY ĐỊNH BỎ SỔ HỘ KHẨU GIẤY VÀ PHƯƠNG THỨC SỬ DỤNG THÔNG TIN CƯ TRÚ\n\n1. Sổ hộ khẩu và Sổ tạm trú giấy đã chính thức hết giá trị sử dụng từ ngày 01/01/2023 theo Điều 38 Luật Cư trú 2020.\n2. Các phương thức chứng minh cư trú thay thế sổ hộ khẩu:\n- Sử dụng Thẻ Căn cước công dân gắn chip hoặc Thẻ Căn cước mới.\n- Sử dụng ứng dụng VNeID Mức độ 2 (phần Thông tin cư trú cá nhân và chủ hộ).\n- Sử dụng Giấy xác nhận thông tin cư trú (Mẫu CT07) do Công an xã Đức Hợp cấp khi cơ quan ngoài ngành yêu cầu.\n3. Cơ quan nhà nước không được yêu cầu người dân nộp hoặc xuất trình sổ hộ khẩu giấy khi giải quyết thủ tục hành chính.",
    "keywords": [
      "bỏ sổ hộ khẩu",
      "luật cư trú 2020",
      "chứng minh cư trú",
      "vneid thay hộ khẩu",
      "mẫu ct07"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_cutru_02",
    "category_id": "cu_tru",
    "category_name": "Cư trú & Căn cước VNeID",
    "source_title": "Luật Căn cước số 26/2023/QH15: Đổi tên thành Thẻ Căn cước và cấp cho trẻ em dưới 14 tuổi",
    "source_type": "law",
    "legal_basis": "Luật Căn cước năm 2023 có hiệu lực từ ngày 01/07/2024",
    "chunk_preview": "Từ ngày 01/07/2024, chính thức cấp Thẻ Căn cước thay thế CCCD. Trẻ em từ 0 đến dưới 6 tuổi được cấp Căn cước online qua VNeID mà không cần thu nhận sinh trắc học. Trẻ từ 6 đến dưới 14 tuổi cấp theo nhu cầu.",
    "full_content": "ĐIỂM MỚI NỔI BẬT CỦA LUẬT CĂN CƯỚC NĂM 2023\n\n1. Đổi tên từ 'Căn cước công dân' thành 'Thẻ Căn cước'. Các thẻ CCCD gắn chip đã cấp trước ngày 01/07/2024 vẫn giữ nguyên giá trị sử dụng đến hết thời hạn ghi trên thẻ.\n2. Cấp thẻ Căn cước cho trẻ em:\n- Trẻ em dưới 6 tuổi: Cha, mẹ hoặc người giám hộ thực hiện nộp hồ sơ trực tuyến qua Cổng DVC hoặc VNeID; không thu nhận thông tin sinh trắc học (vân tay, mống mắt, ảnh mặt).\n- Trẻ em từ 6 đến dưới 14 tuổi: Đến cơ quan Công an cùng cha mẹ để thu nhận vân tay, mống mắt và ảnh khuôn mặt.\n3. Tích hợp mống mắt và ADN, giọng nói: Bổ sung thu nhận sinh trắc học mống mắt cho toàn bộ công dân từ 6 tuổi trở lên khi làm thẻ Căn cước mới.",
    "keywords": [
      "luật căn cước 2023",
      "thẻ căn cước mới",
      "làm căn cước cho trẻ em",
      "thu nhận mống mắt",
      "thời hạn cccd"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_cutru_03",
    "category_id": "cu_tru",
    "category_name": "Cư trú & Căn cước VNeID",
    "source_title": "Quy định điều kiện và hồ sơ Đăng ký thường trú tại xã Đức Hợp",
    "source_type": "law",
    "legal_basis": "Điều 20, 21 Luật Cư trú năm 2020",
    "chunk_preview": "Công dân có chỗ ở hợp pháp thuộc quyền sở hữu của mình hoặc được chủ hộ, chủ sở hữu chỗ ở đồng ý thì được đăng ký thường trú. Thời hạn giải quyết trong 07 ngày làm việc.",
    "full_content": "HỒ SƠ VÀ THỦ TỤC ĐĂNG KÝ THƯỜNG TRÚ TẠI ĐỊA BÀN XÃ ĐỨC HỢP\n\n1. Trường hợp chỗ ở hợp pháp thuộc sở hữu cá nhân:\n- Tờ khai thay đổi thông tin cư trú (Mẫu CT01).\n- Giấy tờ chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán nhà, Giấy phép xây dựng).\n\n2. Trường hợp nhập hộ về gia đình người thân (vợ về với chồng, con về với cha mẹ, ông bà về với cháu):\n- Tờ khai CT01 có ý kiến đồng ý của chủ hộ và chủ sở hữu chỗ ở hợp pháp.\n- Giấy tờ chứng minh quan hệ nhân thân (Giấy đăng ký kết hôn, Giấy khai sinh - nếu chưa có trên dữ liệu quốc gia).\n\n3. Nộp hồ sơ: Nộp trực tuyến qua VNeID Mức 2 hoặc trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp (Thôn Nho Lâm). Lệ phí: 10.000đ (online) / 20.000đ (trực tiếp).",
    "keywords": [
      "hồ sơ thường trú",
      "đăng ký thường trú xã đức hợp",
      "nhập khẩu",
      "chỗ ở hợp pháp"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_gt_01",
    "category_id": "giao_thong",
    "category_name": "Giao thông & Đăng ký xe",
    "source_title": "Quy định phân cấp Đăng ký xe mô tô, xe máy, xe máy điện tại Công an xã Đức Hợp",
    "source_type": "procedure",
    "legal_basis": "Thông tư số 24/2023/TT-BCA và Thông tư số 28/2024/TT-BCA của Bộ Công an",
    "chunk_preview": "Công an xã Đức Hợp thực hiện đăng ký, cấp biển số định danh cho xe mô tô, xe gắn máy, xe máy điện của cá nhân, cơ quan, tổ chức có trụ sở hoặc cư trú tại xã Đức Hợp.",
    "full_content": "QUY TRÌNH ĐĂNG KÝ XE MÁY CẤP XÃ TẠI CÔNG AN XÃ ĐỨC HỢP\n\n1. Thẩm quyền: Công an xã Đức Hợp được Bộ Công an và Giám đốc Công an tỉnh Hưng Yên phân cấp đăng ký, cấp biển số định danh cho toàn bộ xe mô tô, xe gắn máy, xe máy điện của công dân thường trú hoặc tạm trú tại xã Đức Hợp.\n2. Quy trình thực hiện:\n- Bước 1: Chủ xe nộp lệ phí trước bạ tại cơ quan Thuế hoặc nộp điện tử qua Cổng DVC / App ngân hàng.\n- Bước 2: Kê khai Giấy khai đăng ký xe trên Cổng DVC Bộ Công an hoặc kê khai lần đầu trên VNeID.\n- Bước 3: Mang xe và hóa đơn, phiếu xuất xưởng đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) để cán bộ kiểm tra xe, chà số khung số máy.\n- Bước 4: Bấm biển số trên phần mềm đăng ký xe và nhận biển số định danh ngay trong ngày. Giấy đăng ký xe nhận sau 02 ngày làm việc hoặc chuyển phát qua bưu điện.",
    "keywords": [
      "đăng ký xe máy xã đức hợp",
      "bấm biển số xe",
      "biển số định danh",
      "lệ phí trước bạ xe máy",
      "thông tư 24/2023"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_gt_02",
    "category_id": "giao_thong",
    "category_name": "Giao thông & Đăng ký xe",
    "source_title": "Quy định xuất trình Giấy phép lái xe và Đăng ký xe trên VNeID thay thế bản cứng khi CSGT kiểm tra",
    "source_type": "law",
    "legal_basis": "Thông tư số 28/2024/TT-BCA của Bộ Công an có hiệu lực từ 01/07/2024",
    "chunk_preview": "Từ ngày 01/07/2024, thông tin GPLX, Đăng ký xe đã tích hợp trên VNeID có giá trị tương đương bản giấy. CSGT kiểm soát, kiểm tra trực tiếp qua ứng dụng VNeID và thực hiện tước GPLX trên môi trường điện tử.",
    "full_content": "GIÁ TRỊ PHÁP LÝ CỦA GIẤY TỜ XE TRÊN VNEID THEO THÔNG TƯ 28/2024/TT-BCA\n\n1. Khi cảnh sát giao thông dừng phương tiện kiểm tra, người điều khiển xe được xuất trình thông tin của các loại giấy tờ sau trên ứng dụng VNeID:\n- Giấy phép lái xe (GPLX).\n- Giấy chứng nhận đăng ký xe (Cà vẹt).\n- Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường (đối với ô tô).\n- Bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.\n2. Việc xuất trình giấy tờ trên VNeID có giá trị pháp lý tương đương việc xuất trình bản giấy trực tiếp.\n3. Khi phát hiện vi phạm cần tạm giữ giấy tờ, lực lượng CSGT sẽ thực hiện việc tạm giữ hoặc tước quyền sử dụng giấy tờ trên hệ thống phần mềm xử lý vi phạm giao thông và đồng bộ trạng thái 'Đang bị tước' lên VNeID của người vi phạm.",
    "keywords": [
      "xuất trình gplx trên vneid",
      "thông tư 28/2024/tt-bca",
      "giấy tờ xe điện tử",
      "tước gplx trên vneid",
      "kiểm tra nồng độ cồn"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_gt_03",
    "category_id": "giao_thong",
    "category_name": "Giao thông & Đăng ký xe",
    "source_title": "Hướng dẫn tra cứu và nộp phạt nguội vi phạm giao thông trực tuyến qua Cổng Dịch vụ công",
    "source_type": "procedure",
    "legal_basis": "Nghị định 100/2019/NĐ-CP (sửa đổi bởi Nghị định 123/2021/NĐ-CP); Cổng DVC Bộ Công an",
    "chunk_preview": "Người dân tra cứu phạt nguội tại csgt.vn hoặc Cổng DVC Quốc gia. Nộp phạt trực tuyến 100% không cần đến trụ sở đội CSGT, giấy tờ được trả qua bưu điện.",
    "full_content": "QUY TRÌNH NỘP PHẠT NGUỘI GIAO THÔNG TRỰC TUYẾN\n\n1. Tra cứu lỗi phạt nguội:\n- Truy cập Cổng thông tin điện tử Cục Cảnh sát giao thông: www.csgt.vn -> Mục 'Tra cứu phương tiện vi phạm giao thông qua hình ảnh'.\n- Nhập Biển kiểm soát, chọn loại phương tiện (Ô tô/Xe máy) và mã bảo mật.\n\n2. Nộp phạt trực tuyến:\n- Khi nhận được Thông báo vi phạm hoặc Quyết định xử phạt, truy cập Cổng DVC Quốc gia (dichvucong.gov.vn).\n- Nhập Số biên bản / Số quyết định xử phạt -> Chọn nộp tiền phạt trực tuyến qua Cổng thanh toán ngân hàng.\n- Sau khi thanh toán, hệ thống kho bạc đối soát thành công và tự động giải tỏa cảnh báo trên hệ thống đăng kiểm xe.",
    "keywords": [
      "phạt nguội",
      "tra cứu phạt nguội",
      "nộp phạt giao thông online",
      "dichvucong.gov.vn phạt nguội"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_pccc_01",
    "category_id": "pccc",
    "category_name": "Phòng cháy chữa cháy (PCCC)",
    "source_title": "Chỉ thị số 01/CT-TTg của Thủ tướng Chính phủ: Quy định an toàn PCCC hộ gia đình và nhà ống kết hợp kinh doanh",
    "source_type": "law",
    "legal_basis": "Chỉ thị số 01/CT-TTg ngày 03/01/2023 của Thủ tướng Chính phủ; Luật Phòng cháy và chữa cháy",
    "chunk_preview": "100% hộ gia đình trên địa bàn xã Đức Hợp phải trang bị tối thiểu 01 bình chữa cháy xách tay, mở lối thoát hiểm thứ 2 (lồng sắt chuồng cọp) và có người được tập huấn kỹ năng chữa cháy.",
    "full_content": "TIÊU CHÍ AN TOÀN PCCC HỘ GIA ĐÌNH TẠI XÃ ĐỨC HỢP\n\n1. Phong trào 'Nhà tôi có bình chữa cháy':\n- Mỗi hộ gia đình tại các thôn trên địa bàn xã Đức Hợp chủ động trang bị tối thiểu 01 bình bột chữa cháy (MFZ4) hoặc bình khí CO2 (MT3) đặt tại nơi dễ thấy, dễ lấy.\n- Kiểm tra kim đồng hồ áp suất định kỳ (kim chỉ vạch xanh là bình còn hoạt động tốt).\n\n2. Mở lối thoát hiểm khẩn cấp thứ hai:\n- Đối với nhà ống có lồng sắt, ban công 'chuồng cọp': Bắt buộc phải cắt mở cửa thoát hiểm kích thước tối thiểu 0.6m x 0.8m có khóa gài bên trong và để chìa khóa ở vị trí cố định đã thống nhất giữa các thành viên gia đình.\n\n3. An toàn sử dụng điện và bình gas:\n- Không sạc xe điện, pin điện thoại qua đêm gần vật liệu dễ cháy.\n- Khóa van cổ bình gas ngay sau khi nấu nướng xong.\n- Số điện thoại Báo cháy khẩn cấp Quốc gia: 114 | Hotline Công an xã Đức Hợp: 02213.815.999.",
    "keywords": [
      "bình chữa cháy gia đình",
      "chỉ thị 01 thủ tướng",
      "thoát hiểm chuồng cọp",
      "an toàn pccc xã đức hợp",
      "số điện thoại 114"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_pccc_02",
    "category_id": "pccc",
    "category_name": "Phòng cháy chữa cháy (PCCC)",
    "source_title": "Kỹ năng xử lý khẩn cấp khi phát hiện rò rỉ khí gas trong gian bếp gia đình",
    "source_type": "procedure",
    "legal_basis": "Khuyến cáo an toàn PCCC & CNCH của Cục Cảnh sát PCCC và CNCH (C07) - Bộ Công an",
    "chunk_preview": "Khi ngửi thấy mùi gas: Tuyệt đối KHÔNG bật/tắt công tắc điện, quẹt lửa. Khóa ngay van bình gas, mở toàn bộ cửa sổ để thông thoáng khí, dùng quạt nan phẩy nhẹ đẩy khí gas ra ngoài.",
    "full_content": "QUY TẮC SỐNG CÒN KHI BỊ RÒ RỈ KHÍ GAS GIA ĐÌNH\n\n1. NGUYÊN TẮC '4 KHÔNG':\n- KHÔNG bật hoặc tắt bất kỳ công tắc điện, aptomat nào trong nhà (tia lửa điện li ti khi đóng ngắt mạch có thể kích nổ đám khí gas tích tụ).\n- KHÔNG bật diêm, quẹt lửa, châm thuốc lá.\n- KHÔNG sử dụng điện thoại di động trong gian bếp.\n- KHÔNG cắm hoặc rút bất kỳ phích cắm thiết bị điện nào.\n\n2. CÁC BƯỚC XỬ LÝ KHẨN CẤP:\n- Bước 1: Dùng khăn ướt bịt mũi miệng, lập tức tiếp cận bình gas và KHÓA chặt van cổ bình gas theo chiều kim đồng hồ.\n- Bước 2: Nhẹ nhàng mở rộng toàn bộ các cánh cửa sổ, cửa chính để gió tự nhiên lùa vào làm loãng nồng độ khí gas.\n- Bước 3: Dùng quạt nan, bìa carton hoặc quạt tay phẩy ngang tầm thấp để đẩy khí gas nặng hơn không khí ra ngoài.\n- Bước 4: Di chuyển ra xa khu vực bếp và gọi điện cho đại lý cung cấp gas kiểm tra hoặc gọi Công an xã Đức Hợp 02213.815.999 hỗ trợ.",
    "keywords": [
      "rò rỉ gas",
      "kỹ năng thoát hiểm cháy nổ",
      "khóa van gas",
      "xử lý khí gas bị rò rỉ",
      "chữa cháy bếp gas"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_scam_01",
    "category_id": "phong_chong_lua_dao",
    "category_name": "Phòng chống lừa đảo công nghệ cao",
    "source_title": "Cảnh báo 22 thủ đoạn tội phạm lừa đảo chiếm đoạt tài sản trên không gian mạng và Bộ quy tắc '4 Không - 2 Phải'",
    "source_type": "scam_alert",
    "legal_basis": "Cục An toàn thông tin (Bộ TT&TT) phối hợp Cục An ninh mạng và PCTP sử dụng công nghệ cao (A05) - Bộ Công an",
    "chunk_preview": "Tổng hợp 22 thủ đoạn lừa đảo phổ biến: Giả danh Công an gọi điện dọa lệnh bắt, cài app VNeID giả mạo chứa mã độc .apk, tuyển CTV Shopee/TikTok, Deepfake gọi video, bẫy đầu tư tài chính. Khuyến cáo 4 Không - 2 Phải.",
    "full_content": "CẨM NANG 22 THỦ ĐOẠN LỪA ĐẢO QUA MẠNG & BỘ QUY TẮC PHÒNG NGỪA\n\n1. NHẬN DIỆN CÁC THỦ ĐOẠN ĐANG TẤN CÔNG NGƯỜI DÂN:\n(1) Giả danh Công an gọi điện yêu cầu cài đặt app VNeID giả mạo (.apk) chứa mã độc rút tiền.\n(2) Giả danh Công an, Viện kiểm sát gọi dọa dính án ma túy, rửa tiền ép chuyển tiền vào 'tài khoản an toàn'.\n(3) Tuyển cộng tác viên xử lý đơn hàng Shopee, TikTok, Lazada hưởng hoa hồng ảo.\n(4) Hack tài khoản mạng xã hội dùng công nghệ video Deepfake mượn tiền người thân.\n(5) Dụ dỗ đầu tư tài chính, sàn chứng khoán quốc tế, tiền ảo cam kết lợi nhuận khủng bao lỗ.\n(6) Cho vay tiền online lãi suất 0% rồi lừa nộp tiền bảo hiểm khoản vay, phí giải ngân.\n(7) Bẫy tình cảm gửi quà ngoại tệ kẹt hải quan (Romance Scam).\n(8) Bẫy thông báo trúng thưởng xe SH, sổ tiết kiệm bắt nộp thuế trước.\n(9) Tin nhắn giả mạo thương hiệu ngân hàng (SMS Brandname giả).\n(10) Cuộc gọi báo tin con đang cấp cứu tại bệnh viện cần nộp tiền mổ gấp.\n(11) Bán vé máy bay, combo du lịch giá siêu rẻ dịp lễ.\n(12) Lừa nâng cấp SIM 4G/5G dụ gõ cú pháp chuyển cuộc gọi (**21*) để cướp OTP.\n(13) Giả mạo biên lai chuyển tiền thành công (Fake Bill).\n(14) Bình chọn cuộc thi ảnh, người mẫu nhí để dụ nạp tiền.\n(15) Dịch vụ thu hồi tiền treo, cam kết lấy lại tiền bị lừa (Bẫy lừa lần 2).\n(16) Dán mã QR độc hại đè lên mã thanh toán tại quán ăn, bưu phẩm.\n(17) Thuê, mượn hoặc mua bán tài khoản ngân hàng để rửa tiền.\n(18) Gửi bưu phẩm trúng thưởng thu tiền ship COD lừa đảo.\n(19) Vờ chuyển tiền nhầm vào tài khoản rồi đòi nợ tín dụng đen.\n(20) Giả danh nhân viên điện lực dọa cắt điện đòi tiền cước.\n(21) Giả mạo Trại hè Quân đội, Khóa tu mùa hè miễn phí dụ làm nhiệm vụ.\n(22) Giả văn bản tuyển dụng công chức, hứa hẹn chạy biên chế nhận tiền đặt cọc.\n\n2. BỘ QUY TẮC '4 KHÔNG - 2 PHẢI' CỦA CÔNG AN XÃ ĐỨC HỢP:\n❌ KHÔNG bấm vào link lạ, không tải file .apk ngoài kho Google Play / App Store.\n❌ KHÔNG cung cấp mật khẩu ngân hàng, mã OTP, số CCCD cho bất kỳ ai qua điện thoại.\n❌ KHÔNG chuyển tiền cho bất kỳ cá nhân nào xưng là cán bộ cơ quan nhà nước.\n❌ KHÔNG tin vào các lời mời chào việc nhẹ lương cao hay đầu tư siêu lợi nhuận.\n✅ PHẢI bình tĩnh kiểm tra, xác minh lại với người thân, cơ quan chức năng.\n✅ PHẢI gọi ngay Trực ban Công an xã Đức Hợp (02213.815.999) để được trợ giúp kịp thời.",
    "keywords": [
      "22 thủ đoạn lừa đảo",
      "lừa đảo qua mạng",
      "giả danh công an",
      "app vneid giả",
      "chiếm đoạt tài sản",
      "4 không 2 phải"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_scam_02",
    "category_id": "phong_chong_lua_dao",
    "category_name": "Phòng chống lừa đảo công nghệ cao",
    "source_title": "Hướng dẫn 4 bước khẩn cấp khi người dân phát hiện bị lừa đảo hoặc chuyển tiền cho kẻ gian",
    "source_type": "procedure",
    "legal_basis": "Quy trình ứng phó sự cố an ninh mạng của Bộ Công an và Ngân hàng Nhà nước Việt Nam",
    "chunk_preview": "4 bước vàng: 1. Khóa thẻ/đóng băng tài khoản ngân hàng ngay lập tức; 2. Thu thập toàn bộ chứng cứ (tin nhắn, số tài khoản nhận tiền); 3. Trình báo ngay tại Công an xã Đức Hợp; 4. Tuyệt đối không thuê dịch vụ lấy lại tiền trên mạng.",
    "full_content": "HÀNH ĐỘNG KHẨN CẤP TRONG 15 PHÚT VÀNG KHI PHÁT HIỆN BỊ LỪA QUA MẠNG\n\n1. BƯỚC 1: KHÓA TÀI KHOẢN VÀ THẺ NGÂN HÀNG LẬP TỨC\n- Mở ngay ứng dụng Mobile Banking của ngân hàng, chọn tính năng 'Khóa thẻ khẩn cấp' hoặc nhập sai mã PIN/mật khẩu nhiều lần để khóa tạm thời.\n- Gọi ngay đến đường dây nóng Hotline in ở mặt sau thẻ ngân hàng của bạn, yêu cầu điện thoại viên khóa chiều chuyển tiền và phong tỏa tài khoản để ngăn kẻ gian tẩu tán tiền.\n\n2. BƯỚC 2: SAO LƯU CHỨNG CỨ\n- Chụp ảnh màn hình toàn bộ tin nhắn Zalo, Facebook, số điện thoại, đường link lừa đảo.\n- Đến chi nhánh ngân hàng gần nhất in 'Bản sao kê giao dịch chuyển tiền' có đóng dấu mộc tròn đỏ của ngân hàng.\n\n3. BƯỚC 3: ĐẾN TRÌNH BÁO CÔNG AN XÃ ĐỨC HỢP\n- Trực tiếp đến Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi Hotline 02213.815.999.\n- Cán bộ Công an xã sẽ tiếp nhận hồ sơ, lập biên bản và phối hợp ngân hàng truy vết dòng tiền theo quy trình nghiệp vụ.\n\n4. BƯỚC 4: CẢNH GIÁC BẪY LỪA LẦN 2\n- Tuyệt đối KHÔNG tìm kiếm hoặc thuê các trang Facebook, TikTok 'Luật sư thu hồi tiền treo', 'An ninh mạng hỗ trợ lấy lại tiền'. 100% các trang này đều là bọn lừa đảo tiếp tục bẫy nạn nhân nộp thêm tiền phí hồ sơ.",
    "keywords": [
      "bị lừa tiền",
      "cách lấy lại tiền bị lừa",
      "khóa tài khoản ngân hàng khẩn cấp",
      "báo công an khi bị lừa",
      "thu hồi tiền treo"
    ],
    "created_at": "27/09/2026"
  },
  {
    "id": "kb_qn_01",
    "category_id": "quan_ly_nganh_nghe",
    "category_name": "Quản lý ngành nghề & VK-VLN-CCHT",
    "source_title": "Nghị định 96/2016/NĐ-CP: Quy định điều kiện về an ninh, trật tự đối với cơ sở kinh doanh nhà trọ, cầm đồ",
    "source_type": "law",
    "legal_basis": "Nghị định số 96/2016/NĐ-CP (sửa đổi, bổ sung bởi Nghị định 56/2023/NĐ-CP)",
    "chunk_preview": "Chủ cơ sở kinh doanh cho thuê lưu trú, nhà trọ, dịch vụ cầm đồ tại xã Đức Hợp phải có Giấy chứng nhận đủ điều kiện về ANTT và thực hiện nghiêm ngặt việc thông báo lưu trú qua VNeID.",
    "full_content": "ĐIỀU KIỆN AN NINH TRẬT TỰ ĐỐI VỚI CƠ SỞ KINH DOANH TẠI XÃ ĐỨC HỢP\n\n1. Cơ sở cho thuê lưu trú (Nhà nghỉ, Nhà trọ có từ 10 phòng trở lên):\n- Phải làm thủ tục cấp Giấy chứng nhận đủ điều kiện về ANTT tại Công an huyện Kim Động.\n- Người chịu trách nhiệm về ANTT không có tiền án tiền sự về các tội xâm phạm an ninh quốc gia, trật tự xã hội.\n- Bắt buộc thực hiện việc thông báo lưu trú của toàn bộ khách trọ đến Công an xã Đức Hợp trước 23h hàng ngày qua phần mềm VNeID hoặc Cổng DVC.\n\n2. Quản lý vũ khí, vật liệu nổ, công cụ hỗ trợ và pháo nổ:\n- Nghiêm cấm mọi hành vi tàng trữ, mua bán, sử dụng trái phép pháo nổ, pháo hoa nổ, súng tự chế, dao kiếm có tính sát thương cao.\n- Công an xã Đức Hợp duy trì điểm tiếp nhận, thu hồi vũ khí, vật liệu nổ tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm). Bà con nhân dân tự nguyện giao nộp sẽ được miễn trách nhiệm pháp lý.",
    "keywords": [
      "nghị định 96/2016",
      "kinh doanh nhà trọ",
      "an ninh trật tự nhà trọ",
      "giao nộp vũ khí",
      "cấm pháo nổ"
    ],
    "created_at": "27/09/2026"
  }
];

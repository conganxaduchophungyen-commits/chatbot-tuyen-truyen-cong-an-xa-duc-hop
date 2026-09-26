# TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD - PRODUCT REQUIREMENTS DOCUMENT)
## DỰ ÁN: TRỢ LÝ PHÁP LUẬT VÀ THỦ TỤC HÀNH CHÍNH CHO NGƯỜI DÂN
### Đơn vị áp dụng thí điểm: Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên

---

## 1. TỔNG QUAN DỰ ÁN (EXECUTIVE SUMMARY)

### 1.1. Bối cảnh & Tầm nhìn
Thực hiện chủ trương chuyển đổi số quốc gia của Đề án 06/CP (Phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử) và tinh thần "Lấy người dân và doanh nghiệp làm trung tâm phục vụ", việc công khai, minh bạch, phổ biến pháp luật và hỗ trợ người dân thực hiện thủ tục hành chính (TTHC) tại cấp cơ sở (xã, phường, thị trấn) là vô cùng cấp thiết.

Tại địa bàn xã Đức Hợp (Kim Động, Hưng Yên), người dân có nhu cầu rất lớn về:
- Đăng ký cư trú (thường trú, tạm trú, lưu trú).
- Kích hoạt và sử dụng tài khoản định danh điện tử VNeID Mức 1, Mức 2.
- Đăng ký phương tiện giao thông (xe máy) tại cấp xã, nộp phạt vi phạm hành chính trực tuyến.
- Thực hiện an toàn phòng cháy chữa cháy (PCCC) tại gia đình và cơ sở kinh doanh.
- Nâng cao nhận thức phòng chống tội phạm công nghệ cao, lừa đảo chiếm đoạt tài sản trên không gian mạng.

Tuy nhiên, người dân (đặc biệt là người cao tuổi, lao động tự do) thường gặp khó khăn khi tìm kiếm thông tin trên các cổng dịch vụ công đồ sộ, ngôn ngữ văn bản quy phạm pháp luật khó hiểu, hoặc thiếu thông tin dẫn đến việc phải đi lại nhiều lần để bổ sung giấy tờ.

### 1.2. Mục tiêu sản phẩm
Xây dựng một **Web App hiện đại, trực quan, thân thiện (Mobile-First)** đóng vai trò là **"Trợ lý số pháp luật & TTHC"** của Công an xã Đức Hợp nhằm:
1. **Tiết kiệm thời gian, công sức cho nhân dân:** Giúp người dân tự tra cứu đầy đủ thành phần hồ sơ, quy trình, nơi tiếp nhận, thời hạn giải quyết và lệ phí trước khi đến Trụ sở Công an xã hoặc thực hiện trực tuyến.
2. **Tuyên truyền chủ động 24/7:** Phổ biến kịp thời các phương thức, thủ đoạn lừa đảo mới, quy định pháp luật mới thông qua bài viết sinh động, infographic, cảnh báo nhanh.
3. **Trợ lý AI hỏi đáp tức thì:** Tích hợp Chatbot AI am hiểu quy trình nghiệp vụ cấp xã, trả lời bằng ngôn từ đời thường, trích dẫn quy định chuẩn xác, hướng dẫn thao tác từng bước.
4. **Giảm tải áp lực công việc cho cán bộ Công an xã:** Giải đáp tự động các thắc mắc thường gặp, giúp cán bộ tập trung vào công tác chuyên môn và giải quyết hồ sơ nghiệp vụ.

---

## 2. ĐỐI TƯỢNG SỬ DỤNG & PERSONAS

### 2.1. Người dân (Citizens) - Ẩn danh (Không yêu cầu đăng nhập)
- **Đặc điểm:** Đa dạng độ tuổi (thanh niên, trung niên, người cao tuổi), đa phần truy cập qua điện thoại thông minh (smartphone) bằng cách quét mã QR dán tại trụ sở Công an xã, nhà văn hóa thôn hoặc qua chia sẻ link Zalo.
- **Nhu cầu chính:**
  - Tra cứu nhanh: "Làm thường trú cần mang giấy tờ gì?", "Sang tên xe máy nộp hồ sơ ở đâu?", "Phí làm thẻ Căn cước là bao nhiêu?".
  - Hỏi đáp tự nhiên với AI: Hỏi bằng câu thoại thông thường và nhận lời giải thích cặn kẽ, ngắn gọn, dễ hiểu.
  - Tải biểu mẫu điền sẵn (Tờ khai CT01, biểu mẫu PCCC, v.v.).
  - Xem cảnh báo lừa đảo qua mạng để tự phòng ngừa cho bản thân và gia đình.
  - Lấy số điện thoại Trực ban Công an xã Đức Hợp để liên hệ khi có việc khẩn cấp.

### 2.2. Cán bộ Công an xã / Quản trị viên (Police Admins) - Có đăng nhập
- **Đặc điểm:** Cán bộ chiến sĩ Công an xã Đức Hợp phụ trách công nghệ thông tin, tiếp dân, hoặc quản lý hành chính.
- **Nhu cầu chính:**
  - Đăng bài viết tuyên truyền, cảnh báo thủ đoạn tội phạm mới nổi.
  - Cập nhật danh mục thủ tục hành chính, sửa đổi thành phần hồ sơ khi có thông tư/nghị định mới ban hành.
  - Tải lên văn bản pháp quy mới để hệ thống AI tự động nạp tri thức (Vector DB).
  - Xem thống kê các câu hỏi người dân quan tâm nhất trong tuần/tháng để định hướng nội dung tuyên truyền tại cơ sở.

---

## 3. PHẠM VI TÍNH NĂNG CHI TIẾT (FEATURE SCOPE)

### 3.1. Phân hệ Dành cho Người dân (Public Portal & AI Assistant)

| Nhóm tính năng | Mã | Chi tiết tính năng | Tiêu chí nghiệm thu (Acceptance Criteria) |
|---|---|---|---|
| **Cổng Thông tin Tương tác** | P-01 | **Trang chủ trực quan:** Hiển thị 4 nhóm nghiệp vụ chính, thanh tìm kiếm thông minh, banner cảnh báo khẩn cấp, nút gọi Hotline Công an xã. | Tải trang < 1.5s, giao diện hiển thị tối ưu trên màn hình di động 360px - 430px. |
| | P-02 | **Tra cứu Thủ tục hành chính (TTHC):** Tìm theo từ khóa, lọc theo nhóm nghiệp vụ (Cư trú, Căn cước, Xe, PCCC). | Hiển thị rõ: Hồ sơ cần chuẩn bị, Trình tự các bước, Nơi nộp, Thời hạn, Lệ phí, Hướng dẫn nộp online. |
| | P-03 | **Kho Biểu mẫu & Tải về:** Danh sách tờ khai (CT01, CT02, mẫu đăng ký xe, khai báo PCCC) định dạng PDF / Word kèm tài liệu mẫu có điền sẵn hướng dẫn. | Tải file trực tiếp không cần đăng nhập; có nút "Xem trước" nếu là file PDF. |
| | P-04 | **Chuyên mục Cảnh báo tội phạm & Lừa đảo:** Cập nhật các vụ lừa đảo mạng (giả danh công an, tuyển CTV, lừa đảo app ngân hàng giả mạo, đầu tư tài chính...). | Trình bày dạng cẩm nang kèm dấu hiệu nhận biết, cách xử lý khi đã bị lừa và đường dây tiếp nhận tin báo. |
| | P-05 | **Liên kết Cổng Dịch vụ công chính thức:** Nút truy cập nhanh tới Cổng DVC Bộ Công an, Cổng DVC Quốc gia, hướng dẫn cài VNeID. | Mở link chính thức ở tab mới, có nhãn xác thực domain `.gov.vn` để người dân an tâm. |
| | P-06 | **Thông tin & Đường dây nóng Công an xã Đức Hợp:** Địa chỉ trụ sở, số điện thoại Trực ban, thời gian tiếp dân, sơ đồ đường đi. | Nút "Gọi ngay" (tel:) gọi trực tiếp số Trực ban Công an xã trên điện thoại. |
| **Trợ lý AI Thông minh (Chatbot)** | AI-01 | **Hộp thoại Chat tương tác 24/7:** Cửa sổ chat nổi (floating widget) hoặc trang chat toàn màn hình, hỗ trợ gửi câu hỏi và gợi ý sẵn câu hỏi thường gặp (Quick Prompts). | Phản hồi dạng Stream (gõ chữ thời gian thực), thời gian từ lúc bấm gửi tới chữ đầu tiên < 1.5s. |
| | AI-02 | **Hỏi đáp RAG chuẩn xác theo thẩm quyền cấp xã:** Trích dẫn điều khoản, luật định (Luật Cư trú, Luật Căn cước 2023, Thông tư Bộ Công an). | Trả lời chính xác, nếu không có trong cơ sở tri thức thì nói rõ chưa có thông tin và hướng dẫn liên hệ trực ban. |
| | AI-03 | **Bộ lọc an toàn & Miễn trừ trách nhiệm (Guardrails):** Từ chối tư vấn nội dung vi phạm pháp luật, hướng dẫn lách luật, giải quyết tranh chấp ngoài thẩm quyền. Luôn đính kèm ghi chú miễn trừ trách nhiệm. | Thể hiện câu từ chối lịch sự, kèm lời khuyên liên hệ cơ quan thẩm quyền. |

### 3.2. Phân hệ Quản trị (Admin Portal)

| Mã | Tính năng | Mô tả chi tiết |
|---|---|---|
| AD-01 | **Xác thực cán bộ:** | Đăng nhập an toàn bằng tài khoản cán bộ quản trị (JWT token, băm mật khẩu Argon2/Bcrypt). |
| AD-02 | **Quản lý Thủ tục hành chính:** | Thêm mới, chỉnh sửa, ẩn/hiện thủ tục, cập nhật các bước, tải file biểu mẫu đính kèm lên máy chủ. |
| AD-03 | **Quản lý Bài viết & Cảnh báo lừa đảo:** | Trình soạn thảo trực quan (WYSIWYG/Markdown), hỗ trợ đính kèm hình ảnh minh họa bài viết. |
| AD-04 | **Quản trị Tri thức AI (Knowledge Ingestion):** | Tải lên tài liệu hướng dẫn/văn bản mới (PDF, TXT, DOCX), kích hoạt quá trình tự động băm nhỏ (chunking), tạo Vector Embedding và lưu vào CSDL Vector. |
| AD-05 | **Thống kê & Báo cáo:** | Biểu đồ tổng quan số lượt người dân tra cứu, danh sách chủ đề được quan tâm nhiều nhất, tỷ lệ đánh giá hữu ích (Thích / Chưa hiểu) của câu trả lời AI. |

---

## 4. BẢNG DANH MỤC THỦ TỤC TRỌNG TÂM CẤP XÃ (MVP GIAI ĐOẠN 1)

Dự án ưu tiên nạp sẵn đầy đủ dữ liệu chuẩn hóa cho 4 nhóm thủ tục thuộc thẩm quyền và trách nhiệm của Công an xã Đức Hợp:

1. **Nhóm Cư trú & Căn cước:**
   - Đăng ký thường trú (hồ sơ, nơi nộp, lệ phí, thời hạn 7 ngày làm việc).
   - Đăng ký tạm trú / Gia hạn tạm trú (thời hạn 3 ngày làm việc).
   - Khai báo tạm vắng, Thông báo lưu trú.
   - Hướng dẫn cấp thẻ Căn cước (theo Luật Căn cước hiệu lực từ 01/7/2024: nhóm 0-6 tuổi, 6-14 tuổi và từ 14 tuổi).
   - Đăng ký, kích hoạt tài khoản định danh điện tử VNeID Mức 1 & Mức 2.
2. **Nhóm Giao thông trật tự cấp xã:**
   - Đăng ký xe mô tô, xe gắn máy lần đầu tại Công an xã (quy định mới về đăng ký xe cấp xã).
   - Sang tên, di chuyển xe máy tại Công an xã.
   - Hướng dẫn tra cứu và nộp phạt vi phạm giao thông trực tuyến qua Cổng Dịch vụ công Quốc gia.
3. **Nhóm Phòng cháy, chữa cháy & Cứu nạn cứu hộ (PCCC):**
   - Hướng dẫn phương án PCCC đối với hộ gia đình, nhà ở kết hợp kinh doanh.
   - Khai báo điều kiện an toàn PCCC cấp xã.
   - Kỹ năng thoát nạn và sử dụng bình chữa cháy xách tay.
4. **Nhóm Tuyên truyền phòng chống tội phạm & Cảnh báo lừa đảo:**
   - Cảnh báo chiêu trò mạo danh Cán bộ Công an / Tòa án yêu cầu chuyển tiền hoặc hướng dẫn cài App VNeID giả mạo chứa mã độc.
   - Cảnh báo lừa đảo "Việc nhẹ lương cao", "Cộng tác viên sàn thương mại điện tử".
   - Cảnh báo bẫy lừa đảo "Đầu tư tài chính / Tiền ảo / Đánh bạc trực tuyến".
   - Danh bạ đường dây nóng phản ánh tin báo tội phạm Công an xã Đức Hợp.

---

## 5. CHỈ SỐ ĐO LƯỜNG HIỆU QUẢ (KPIs & METRICS)

1. **Độ chính xác thông tin pháp lý:** Tỷ lệ câu trả lời của Trợ lý AI có trích dẫn đúng quy định và không bị bịa đặt (Hallucination rate = 0%).
2. **Thời gian phản hồi:** Thời gian khởi tạo phản hồi (TTFT) < 1.5 giây; thời gian hoàn thành câu trả lời trung bình < 4 giây.
3. **Mức độ hài lòng của công dân:** Tỷ lệ đánh giá "Hữu ích" (Thumbs up) trên giao diện chat và cổng thông tin đạt $\ge 85\%$.
4. **Hiệu quả giảm tải thủ tục:** Giảm tỷ lệ người dân phải đến bổ sung hồ sơ nhiều lần tại Trụ sở Công an xã Đức Hợp.
5. **Tiếp cận thiết bị di động:** Đảm bảo $100\%$ giao diện hoạt động mượt mà trên trình duyệt di động mở từ mã QR hoặc Zalo.

# CẨM NANG HƯỚNG DẪN VẬN HÀNH & TIẾP CÔNG DÂN
## DÀNH CHO CÁN BỘ CHIẾN SĨ CÔNG AN XÃ ĐỨC HỢP

---

## 1. MỤC TIÊU & Ý NGHĨA CỦA HỆ THỐNG
Hệ thống **"Trợ lý số Pháp luật & Thủ tục hành chính cho người dân"** là công cụ chuyển đổi số thiết thực của Công an xã Đức Hợp (Kim Động, Hưng Yên) nhằm:
1. **Lấy người dân làm trung tâm phục vụ:** Giúp bà con nhân dân nắm rõ thành phần hồ sơ, thủ tục, lệ phí và quy trình trước khi đến Trụ sở Công an xã, tránh tình trạng phải đi lại nhiều lần để bổ sung giấy tờ.
2. **Chủ động phòng ngừa tội phạm công nghệ cao:** Tuyên truyền trực tiếp 10 thủ đoạn lừa đảo phổ biến nhất (giả danh Công an, lừa CTV Shopee/TikTok, app VNeID giả mạo...).
3. **Giảm áp lực trực ban và giải đáp hành chính:** Trợ lý AI trực tuyến 24/7 giải đáp tự động các thắc mắc thông thường, trích dẫn chuẩn xác quy định pháp luật.

---

## 2. QUY TRÌNH HƯỚNG DẪN CÔNG DÂN TẠI TRỤ SỞ TIẾP DÂN

Tại Bàn tiếp công dân và khu vực chờ của Công an xã Đức Hợp, cán bộ tiếp dân thực hiện các bước sau:

```mermaid
flowchart LR
    A["1. Công dân đến làm thủ tục"] --> B["2. Hướng dẫn quét mã QR bằng Zalo"]
    B --> C["3. Công dân kiểm tra Checklist hồ sơ"]
    C --> D["4. Cán bộ tiếp nhận & thụ lý hồ sơ"]
```

### Bước 1: Hướng dẫn công dân quét mã QR
- Nhắc nhở người dân: *"Bác/Anh/Chị mở ứng dụng Zalo trên điện thoại, bấm vào biểu tượng Quét mã QR ở góc trên bên phải và quét mã Decal dán tại bàn."*
- Hệ thống sẽ mở ngay Cổng thông tin mà **không cần tải thêm ứng dụng** và **không cần đăng ký tài khoản phức tạp**.

### Bước 2: Hướng dẫn công dân tra cứu hồ sơ
- Hướng dẫn người dân chọn vào nhóm thủ tục cần làm (Cư trú, Đăng ký xe, Căn cước, PCCC).
- Mở mục **"Hồ sơ giấy tờ cần chuẩn bị"**: Công dân có thể tích chọn từng giấy tờ để đối chiếu với giấy tờ gốc mang theo.

### Bước 3: Hướng dẫn sử dụng Trợ lý AI
- Nếu công dân có thắc mắc đặc thù (nhập khẩu về nhà chồng, đăng ký xe máy mua lại chưa sang tên...), hướng dẫn bấm nút **"Hỏi Trợ lý AI 24/7"** ở góc dưới màn hình.
- Có thể bấm vào các câu hỏi mẫu gợi ý sẵn để xem hướng dẫn tức thì.

---

## 3. HƯỚNG DẪN QUẢN TRỊ DÀNH CHO CÁN BỘ PHỤ TRÁCH (ADMIN PORTAL)

### 3.1. Đăng nhập hệ thống
- Truy cập địa chỉ: `https://[tên-miền-hoặc-ip]/admin/login`
- Nhập thông tin đăng nhập:
  - **Tên đăng nhập:** `admin_duchop`
  - **Mật khẩu:** `CongAnDucHop@2026` *(khuyến nghị đổi mật khẩu sau khi tiếp nhận)*
- Bấm **"Đăng nhập hệ thống"**.

### 3.2. Quản lý Danh mục Thủ tục hành chính (Tab "Thủ tục hành chính")
- Khi có Thông tư hoặc Quyết định công bố TTHC mới của Bộ Công an / Giám đốc Công an tỉnh:
  - Xem danh sách các thủ tục hiện có.
  - Kiểm tra các trường: Thành phần hồ sơ, thời hạn giải quyết, mức thu lệ phí, liên kết nộp hồ sơ trên Cổng DVC Bộ Công an.
  - Bấm nút **Xóa (Thùng rác)** đối với các thủ tục đã hết hiệu lực thi hành.

### 3.3. Đăng bài viết Cảnh báo lừa đảo (Tab "Cảnh báo lừa đảo")
- Khi xuất hiện phương thức, thủ đoạn phạm tội mới trên địa bàn huyện Kim Động hoặc không gian mạng:
  - Soạn thảo bài viết cảnh báo ngắn gọn, xúc tích.
  - Nêu rõ 3 phần: (1) Tóm tắt thủ đoạn; (2) Dấu hiệu nhận biết; (3) Lời khuyên phòng ngừa và số điện thoại Trực ban Công an xã Đức Hợp.
  - Đánh dấu loại tin là **"Cảnh báo khẩn"** để bài viết xuất hiện ngay trên đầu trang chủ cho nhân dân chú ý.

### 3.4. Quản trị Tri thức AI (Tab "Quản trị Tri thức AI - Ingestion")
- Đây là tính năng đặc biệt giúp Trợ lý AI ngày càng thông minh và am hiểu quy định mới:
  - **Tên văn bản:** Nhập số hiệu văn bản (Ví dụ: *Thông tư số 24/2023/TT-BCA về đăng ký xe*).
  - **Loại tri thức:** Chọn *Văn bản quy phạm pháp luật* hoặc *Hướng dẫn TTHC*.
  - **Nội dung:** Sao chép các điều khoản hoặc hướng dẫn nghiệp vụ dán vào ô nội dung.
  - Bấm **"Nạp Vào Kho Tri Thức AI (Re-index)"**.
  - Hệ thống tự động phân tích và bổ sung ngay vào cơ sở dữ liệu tri thức của Trợ lý AI.

### 3.5. Theo dõi Thống kê & Nắm bắt tâm tư nhân dân (Tab "Thống kê hỏi đáp của dân")
- Xem số liệu: Tổng số lượt hỏi đáp, Tỷ lệ công dân đánh giá hài lòng.
- Đọc danh sách các câu hỏi gần đây của bà con: Giúp chỉ huy Công an xã nắm bắt được những thủ tục hoặc quy định nào bà con còn đang lúng túng để cử cán bộ xuống cơ sở tuyên truyền giải thích thêm tại các buổi sinh hoạt chi bộ, họp thôn.

---

## 4. QUY TRÌNH XỬ LÝ SỰ CỐ & ĐƯỜNG DÂY HỖ TRỢ KỸ THUẬT

1. **Khi đường truyền Internet tại trụ sở bị mất:**
   - Người dân dùng mạng 3G/4G trên điện thoại vẫn truy cập Cổng thông tin bình thường qua Cloud VPS.
2. **Khi Trợ lý AI báo bảo trì hoặc kết nối chậm:**
   - Người dân vẫn tra cứu được toàn bộ danh mục TTHC và biểu mẫu giấy tờ dạng tĩnh.
   - Nhắc nhở người dân gọi trực tiếp số điện thoại Trực ban Công an xã Đức Hợp: **02213.811.xxx**.
3. **Liên hệ hỗ trợ kỹ thuật phần mềm:**
   - Bộ phận Kỹ thuật phát triển dự án hoặc Cán bộ phụ trách CNTT Công an huyện Kim Động.

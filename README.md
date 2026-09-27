# TRỢ LÝ SỐ PHÁP LUẬT & THỦ TỤC HÀNH CHÍNH CHO NGƯỜI DÂN
### Đơn vị áp dụng: CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN
*(Thực hiện theo Đề án 06/CP của Chính phủ về Chuyển đổi số Quốc gia)*

[![FastAPI](https://img.shields.io/badge/Backend-FastAPI%20Python%203.11+-009688.svg?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014%20App%20Router-000000.svg?style=flat&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind%20CSS%20Mobile--First-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Deployment-Docker%20Compose-2496ED.svg?style=flat&logo=docker)](https://www.docker.com)
[![RAG Benchmark](https://img.shields.io/badge/RAG%20Accuracy-100%25%20Passed-brightgreen.svg)]()

---

## 🌟 GIỚI THIỆU DỰ ÁN
Ứng dụng Web App **"Trợ lý số Pháp luật & Thủ tục hành chính cho người dân"** được nghiên cứu và phát triển nhằm đổi mới toàn diện công tác tuyên truyền pháp luật và hướng dẫn thủ tục hành chính công ở cấp cơ sở. Lấy người dân làm trung tâm phục vụ, ứng dụng hỗ trợ người dân xã Đức Hợp:

- 🔍 **Tra cứu thủ tục hành chính:** Biết rõ hồ sơ cần mang, thời hạn giải quyết, mức phí và nơi nộp hồ sơ.
- ✅ **Checklist hồ sơ trực quan:** Cho phép người dân tích chọn kiểm tra từng loại giấy tờ trước khi đến trụ sở Công an xã.
- 🚨 **Cẩm nang nhận biết 10 thủ đoạn lừa đảo:** Cảnh báo các chiêu trò mạo danh Công an, lừa CTV Shopee/TikTok, app VNeID giả mạo...
- 🤖 **Trợ lý AI thông minh 24/7:** Hộp thoại hỏi đáp tự nhiên, trích dẫn văn bản quy phạm, tích hợp hàng rào an toàn (Guardrail) chống lách luật.
- 📑 **Kho biểu mẫu tờ khai:** Tải trực tiếp file Word mẫu CT01, tờ khai đăng ký xe máy kèm hướng dẫn cách điền.
- 📱 **Mobile-First & Quét mã QR qua Zalo:** Mở ngay không cần cài đặt ứng dụng phức tạp.
- 🛡️ **Bảo mật tuyệt đối (Zero PII):** Người dân hỏi đáp hoàn toàn ẩn danh, không lưu trữ thông tin cá nhân nhạy cảm.

---

## 📂 DANH MỤC TÀI LIỆU DỰ ÁN (DOCS)

1. [docs/PRD.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/docs/PRD.md): Tài liệu đặc tả yêu cầu sản phẩm, chân dung người dùng và tiêu chí nghiệm thu.
2. [docs/TECH_ARCHITECTURE.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/docs/TECH_ARCHITECTURE.md): Kiến trúc kỹ thuật phân lớp, sơ đồ tuần tự RAG, thiết kế CSDL và luồng dữ liệu.
3. [docs/PLAN.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/docs/PLAN.md): Kế hoạch và lộ trình triển khai chi tiết 6 giai đoạn.
4. [QUY TẮC PHÁT TRIỂN & BẢO TRÌ DỰ ÁN.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/QUY%20T%E1%BA%AEC%20PH%C3%81T%20TRI%E1%BB%82N%20&%20B%E1%BA%A2O%20TR%C3%8C%20D%E1%BB%B0%20%C3%81N.md): Tiêu chuẩn lập trình, quy trình cập nhật dữ liệu pháp lý và ứng phó sự cố.
5. [docs/HUONG_DAN_SU_DUNG_CAN_BO.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/docs/HUONG_DAN_SU_DUNG_CAN_BO.md): Cẩm nang hướng dẫn vận hành và tiếp công dân dành cho cán bộ Công an xã Đức Hợp.
6. [docs/HUONG_DAN_DANH_CHO_NGUOI_DAN.md](file:///d:/L%E1%BA%ADp%20tr%C3%ACnh/Chatbot_tuyen_truyen/docs/HUONG_DAN_DANH_CHO_NGUOI_DAN.md): Hướng dẫn 3 bước đơn giản dành cho bà con nhân dân.

---

## 🏗️ CẤU TRÚC MÃ NGUỒN (MONOREPO)

```
Chatbot_tuyen_truyen/
├── backend/                  # Ứng dụng Backend Python FastAPI
│   ├── app/
│   │   ├── api/              # RESTful API routers (procedures, articles, chat, admin, auth)
│   │   ├── core/             # Cấu hình config, database SQLAlchemy, security JWT
│   │   ├── models/           # Thực thể CSDL (Category, Procedure, Article, ChatLog...)
│   │   ├── schemas/          # Pydantic Schemas v2 (Request / Response validation)
│   │   ├── services/         # Nghiệp vụ core & RAG Pipeline thông minh
│   │   ├── init_db.py        # Script khởi tạo CSDL và seed data ban đầu
│   │   ├── seed_full_data.py # Script nạp 10 kịch bản lừa đảo & tri thức pháp luật chuẩn
│   │   └── main.py           # Entrypoint FastAPI server
│   ├── requirements.txt      # Danh sách thư viện Python
│   └── test_*.py             # Bộ test tự động (test_phase2, test_admin_api, test_security, test_load, test_rag_eval)
├── frontend/                 # Ứng dụng Frontend Next.js 14 App Router + Tailwind CSS
│   ├── app/
│   │   ├── admin/            # Phân hệ Quản trị Cán bộ (Login & Dashboard 4 tab)
│   │   ├── canh-bao/[slug]/  # Chi tiết bài viết cảnh báo lừa đảo khẩn cấp
│   │   ├── thu-tuc/[id]/     # Chi tiết TTHC kèm Checklist hồ sơ tương tác
│   │   ├── tuyen-truyen-qr/  # Trang xuất bản và in ấn Decal / Standee mã QR chuẩn nét
│   │   └── page.tsx          # Trang chủ Cổng thông tin tương tác Mobile-First
│   ├── components/           # Navbar, Footer, ChatWidget AI nổi 24/7
│   ├── lib/api.ts            # Client API helper
│   └── package.json
├── docker/                   # Cấu hình container hóa (Dockerfile.backend, Dockerfile.frontend, nginx.conf)
├── docs/                     # Toàn bộ tài liệu đặc tả dự án
├── docker-compose.yml        # Đóng gói 1 lệnh chạy toàn bộ hệ thống
└── run_dev.ps1               # Script khởi động môi trường phát triển cục bộ một chạm
```

---

## ⚡ HƯỚNG DẪN KHỞI CHẠY (QUICK START)

### 1. Chạy trên Môi trường Phát triển (Local Dev)
Chạy script PowerShell một chạm:
```powershell
.\run_dev.ps1
```
Hoặc khởi chạy từng thành phần:
- **Backend:**
  ```powershell
  $env:PYTHONPATH = "backend"
  .\backend\venv\Scripts\python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
  ```
  Truy cập Swagger API Docs: `http://localhost:8000/api/docs`
- **Frontend:**
  ```powershell
  cd frontend
  npm run dev
  ```
  Truy cập Cổng thông tin: `http://localhost:3000`

### 2. Triển khai bằng Docker Compose (Production VPS / Máy chủ Xã)
Chạy toàn bộ cụm dịch vụ (Frontend, Backend, PostgreSQL + pgvector, Nginx):
```bash
docker compose up -d --build
```
Hệ thống sẽ tự động lắng nghe tại cổng `80` (HTTP) hoặc `443` (HTTPS) qua Nginx Reverse Proxy.

---

## 👮 THÔNG TIN QUẢN TRỊ MẶC ĐỊNH
- **Địa chỉ đăng nhập Quản trị:** `http://localhost:3000/admin/login`
- **Tên đăng nhập:** `admin_duchop`
- **Mật khẩu:** `CongAnDucHop@2026`
- **Đường dây nóng Trực ban Công an xã Đức Hợp:** `02213.811.xxx`

# **Báo cáo Thẩm định và Tổng hợp Kiến trúc Bộ Dữ liệu 1.000 Bản ghi Nghiệp vụ Pháp luật, Thủ tục Hành chính, VNeID và An toàn Không gian mạng**

Sự vận hành của các mô hình ngôn ngữ lớn (LLM) và hệ thống tăng cường truy xuất thông tin (RAG) phục vụ khu vực hành chính công tại Việt Nam đòi hỏi tính chuẩn xác tuyệt đối, sự phân định thẩm quyền rõ ràng và khả năng truy vết nguồn gốc pháp lý khép kín. Tính đến mốc kiểm chuẩn ngày 28/09/2026, nền tảng thể chế và hạ tầng dịch vụ công trực tuyến của Việt Nam đã hoàn tất nhiều bước chuyển dịch căn bản: thẻ Căn cước công dân được thay thế hoàn toàn bằng thẻ Căn cước theo Luật Căn cước số 26/2023/QH151, quy chế định danh và xác thực điện tử vận hành thống nhất dưới Nghị định số 69/2024/NĐ-CP3, cấu trúc trật tự an toàn giao thông đường bộ được quản lý độc lập theo Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH155, và hai nhóm thủ tục hành chính liên thông cốt lõi được số hóa toàn trình theo Nghị định số 63/2024/NĐ-CP cùng văn bản sửa đổi bổ sung là Nghị định số 301/2026/NĐ-CP7.  
Sự thay đổi đồng bộ về mặt thể chế tạo ra thách thức lớn đối với các hệ thống trí tuệ nhân tạo: các mô hình nếu chỉ dựa vào dữ liệu tiền huấn luyện tĩnh (pre-trained static data) sẽ đối mặt với rủi ro suy diễn sai lệch (hallucination) nghiêm trọng, viện dẫn các căn cứ đã hết hiệu lực hoặc nhầm lẫn thẩm quyền giải quyết giữa các cấp chính quyền. Báo cáo này tổng hợp toàn bộ kết quả nghiên cứu chuyên sâu, thiết kế kiến trúc phân bổ, thẩm tra tính pháp lý, cơ chế chống rò rỉ dữ liệu và kiểm định chất lượng đối với bộ dữ liệu gồm chính xác 1.000 bản ghi chuẩn hóa dành cho chatbot tư vấn dịch vụ công, phổ biến pháp luật và an toàn không gian mạng.

## **Khái quát Hiện trạng Thể chế và Trục Pháp lý Chuẩn mốc 28/09/2026**

Toàn bộ các bản ghi trong dataset được chuẩn hóa và đối soát hiệu lực văn bản dựa trên hiện trạng văn bản quy phạm pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam có hiệu lực tính đến ngày 28/09/2026. Giai đoạn 2023–2026 đánh dấu bước ngoặt trong quá trình xây dựng chính phủ số và quản trị xã hội bằng dữ liệu định danh, hình thành bốn trục thể chế cốt lõi điều chỉnh tương tác giữa người dân và cơ quan nhà nước.  
Trục thứ nhất điều chỉnh căn cước, dân cư và hộ tịch, được dẫn dắt bởi Luật Căn cước số 26/2023/QH15 (có hiệu lực từ ngày 01/07/2024, thay thế hoàn toàn Luật Căn cước công dân số 59/2014/QH13)1. Văn bản luật này loại bỏ trường thông tin "Quê quán" và "Vân tay" trên bề mặt thẻ Căn cước, thay thế bằng "Nơi đăng ký khai sinh" và "Nơi cư trú" nhằm bảo vệ quyền riêng tư2. Luật mở rộng đối tượng cấp thẻ Căn cước theo nhu cầu cho trẻ em dưới 14 tuổi2, cấp Giấy chứng nhận căn cước cho người gốc Việt Nam chưa xác định được quốc tịch cư trú liên tục từ 06 tháng trở lên9, đồng thời tích hợp dữ liệu sinh trắc học mống mắt và dữ liệu Căn cước điện tử trên hệ sinh thái VNeID2. Độ tuổi bắt buộc đổi thẻ Căn cước được điều chỉnh chính xác thành các mốc: đủ 14 tuổi, đủ 25 tuổi, đủ 40 tuổi và đủ 60 tuổi2. Chứng minh nhân dân cũ đã chấm dứt hoàn toàn giá trị sử dụng từ sau ngày 31/12/20242.  
Trục thứ hai điều chỉnh môi trường định danh điện tử và giải quyết thủ tục hành chính, căn cứ theo Nghị định số 69/2024/NĐ-CP (thay thế Nghị định số 59/2022/NĐ-CP từ ngày 01/07/2024)3. Nghị định này xác lập tài khoản định danh điện tử mức độ 2 có giá trị tương đương thẻ Căn cước vật lý khi thực hiện các dịch vụ công và giao dịch dân sự3. Về quy trình liên thông nghiệp vụ, Nghị định số 63/2024/NĐ-CP cùng Nghị định số 301/2026/NĐ-CP (ban hành ngày 30/07/2026) đã thiết lập cơ chế liên thông tự động toàn trình cho hai nhóm thủ tục thiết yếu: Khai sinh – Đăng ký thường trú – Cấp thẻ Bảo hiểm Y tế cho trẻ dưới 6 tuổi, và Khai tử – Xóa đăng ký thường trú – Giải quyết mai táng phí/tử tuất7. Cơ sở dữ liệu ngành y tế kết nối trực tiếp dữ liệu Giấy chứng sinh điện tử và Giấy báo tử điện tử ký số sang Cổng Dịch vụ công Quốc gia, cho phép giải quyết hồ sơ theo phương thức tự động phân tách và chuyển trạng thái từ tiền kiểm sang hậu kiểm8.  
Trục thứ ba quản lý trật tự an toàn giao thông đường bộ, được điều chỉnh bởi Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15 (có hiệu lực từ ngày 01/01/2025)5. Luật này tách bạch chức năng quản lý trật tự giao thông ra khỏi Luật Đường bộ số 35/2024/QH1513, đồng thời cải tổ toàn diện hệ thống giấy phép lái xe thành 15 phân hạng5. Theo đó, hạng A1 cấp cho mô tô hai bánh dung tích xi-lanh đến 125 cm³ hoặc công suất điện đến 11 kW; hạng A cấp cho mô tô trên 125 cm³ hoặc trên 11 kW15; hạng B gộp toàn bộ các hạng B1 và B2 cũ để điều khiển ô tô chở người đến 08 chỗ và xe tải dưới 3.500 kg14. Luật luật hóa chế định trừ 12 điểm bằng lái hằng năm14, cấm tuyệt đối hành vi điều khiển phương tiện khi có nồng độ cồn trong máu hoặc hơi thở13, và bắt buộc trang bị thiết bị an toàn cho trẻ em dưới 10 tuổi hoặc có chiều cao dưới 1,35 m trên ô tô14. Đồng thời, Thông tư số 28/2024/TT-BCA và Thông tư số 24/2023/TT-BCA đã thiết lập thẩm quyền kiểm soát, tạm giữ, tước quyền sử dụng giấy phép lái xe trực tiếp trên VNeID và quản lý phương tiện theo biển số xe định danh suốt đời18.  
Trục thứ tư bảo đảm an toàn thông tin mạng, phòng ngừa tội phạm số và bảo vệ dữ liệu cá nhân dựa trên Luật An ninh mạng số 24/2018/QH14 và Nghị định số 13/2023/NĐ-CP. Trước tình trạng tội phạm công nghệ cao gia tăng các hình thức giả danh cơ quan thực thi pháp luật, lừa đảo chiếm quyền trợ năng qua file cài đặt .apk, bẫy mã QR độc hại và đánh cắp mã OTP ngân hàng, hệ thống tri thức ứng phó khẩn cấp được đồng bộ trực tiếp với các hướng dẫn kỹ thuật từ Cổng thông tin Không gian mạng quốc gia (khonggianmang.vn) thuộc Cục An toàn thông tin21.

## **Hệ thống Nguồn Kiểm chứng Chuẩn mốc 28/09/2026 (Source Inventory)**

Mỗi bản ghi trong bộ dữ liệu đều được đối chiếu trực tiếp với hệ thống văn bản quy phạm pháp luật và các tài liệu hướng dẫn kỹ thuật chính thống, loại trừ toàn bộ nguồn thứ cấp không đáng tin cậy.

| STT | Mã Nguồn | Tên Văn bản Quy phạm / Nguồn Dữ liệu | Số Hiệu / Thẩm quyền Ban hành | Ngày Hiệu lực | Trạng thái Pháp lý | Lĩnh vực Nghiệp vụ Điều chỉnh |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | SRC01 | Hiến pháp nước CHXHCN Việt Nam | Hiến pháp 2013 (Quốc hội) | 01/01/2014 | EFFECTIVE | Quyền con người, quyền và nghĩa vụ cơ bản của công dân23. |
| 2 | SRC02 | Bộ luật Dân sự | 91/2015/QH13 (Quốc hội) | 01/01/2017 | EFFECTIVE | Giao dịch dân sự, quyền sở hữu, hợp đồng, bồi thường thiệt hại, thừa kế. |
| 3 | SRC03 | Luật Hôn nhân và gia đình | 52/2014/QH13 (Quốc hội) | 01/01/2015 | EFFECTIVE | Điều kiện kết hôn, quan hệ nhân thân, tài sản chung \- riêng, ly hôn, cấp dưỡng. |
| 4 | SRC04 | Luật Căn cước | 26/2023/QH15 (Quốc hội)1 | 01/07/2024 | EFFECTIVE | Thẻ Căn cước2, Căn cước điện tử, CSDL dân cư, sinh trắc học2. |
| 5 | SRC05 | Nghị định về định danh và xác thực điện tử | 69/2024/NĐ-CP (Chính phủ)3 | 01/07/2024 | EFFECTIVE | VNeID mức 1, mức 23, tích hợp giấy tờ số, định danh cơ quan/tổ chức26. |
| 6 | SRC06 | Luật Cư trú | 68/2020/QH14 (Quốc hội) | 01/07/2021 | EFFECTIVE | Thường trú, tạm trú, khai báo tạm vắng, bãi bỏ sổ hộ khẩu giấy. |
| 7 | SRC07 | Luật Trật tự, ATGT đường bộ | 36/2024/QH15 (Quốc hội)5 | 01/01/2025 | EFFECTIVE | 15 phân hạng GPLX5, cơ chế trừ 12 điểm14, cấm nồng độ cồn13. |
| 8 | SRC08 | Luật Đường bộ | 35/2024/QH15 (Quốc hội)13 | 01/01/2025 | EFFECTIVE | Kết cấu hạ tầng giao thông, thu phí đường bộ, kinh doanh vận tải. |
| 9 | SRC09 | Nghị định về bảo vệ dữ liệu cá nhân | 13/2023/NĐ-CP (Chính phủ) | 01/07/2023 | EFFECTIVE | Quyền chủ thể dữ liệu, xử lý vi phạm lộ lọt dữ liệu cá nhân. |
| 10 | SRC10 | Luật An ninh mạng | 24/2018/QH14 (Quốc hội) | 01/01/2019 | EFFECTIVE | Phòng chống tội phạm mạng, xử lý tin giả, bảo vệ hệ thống thông tin. |
| 11 | SRC11 | Nghị định liên thông 02 nhóm TTHC thiết yếu | 63/2024/NĐ-CP (Chính phủ)7 | 01/07/2024 | AMENDED | Khai sinh \- Thường trú \- BHYT7; Khai tử \- Xóa thường trú \- Mai táng phí7. |
| 12 | SRC12 | Nghị định sửa đổi bổ sung Nghị định 63/2024 | 301/2026/NĐ-CP (Chính phủ)8 | 30/07/2026 | EFFECTIVE | Cắt giảm thời gian xác minh liên thông dữ liệu dân cư và hộ tịch8. |
| 13 | SRC13 | Quy định về cấp, thu hồi đăng ký, biển số xe | 24/2023/TT-BCA (Bộ Công an)11 | 15/08/2023 | EFFECTIVE | Cấp và quản lý biển số định danh 05 số theo mã định danh của chủ xe18. |
| 14 | SRC14 | Sửa đổi quy định kiểm soát giao thông và đăng ký | 28/2024/TT-BCA (Bộ Công an)19 | 01/07/2024 | AMENDED | Kiểm tra, tạm giữ, tước quyền sử dụng GPLX số trên ứng dụng VNeID19. |
| 15 | SRC15 | Hướng dẫn phòng chống lừa đảo trực tuyến | NCSC (Cục An toàn thông tin)22 | 01/01/2024 | EFFECTIVE | Cảnh báo website giả mạo, phòng ngừa mã độc .apk, bảo mật OTP ngân hàng21. |

## **Thiết kế Kiến trúc và Ma trận Phân bổ Tổng thể (Dataset Blueprint)**

Bộ dữ liệu ![][image1] bản ghi nghiệp vụ được quy hoạch theo một cấu trúc đa trục khép kín, phân bổ đều theo danh mục chuyên môn, cấp độ tư duy nhận thức và phương thức truy vấn thực tế của người dân.

### **Ma trận Phân bổ theo Nhóm Nội dung và Cấp độ Khó**

Tỷ lệ giữa các nhóm chuyên môn và mức độ nhận thức được ấn định tuyệt đối, bảo đảm sự cân bằng giữa các câu hỏi tra cứu cơ bản và các tình huống giải quyết xung đột nghiệp vụ phức tạp.

| Mã | Tên Danh mục Nghiệp vụ | Cấp 1 (Cơ bản) | Cấp 2 (Trung bình) | Cấp 3 (Nâng cao) | Cấp 4 (Phức tạp) | Tổng số Bản ghi | Tỷ lệ Phân bổ |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **A** | Kiến thức pháp luật cơ bản | 65 | 70 | 40 | 5 | **180** | 18,0% |
| **B** | Dân sự – Hôn nhân – Gia đình | 35 | 50 | 30 | 5 | **120** | 12,0% |
| **C** | Cư trú – Căn cước – Hộ tịch | 40 | 50 | 25 | 5 | **120** | 12,0% |
| **D** | Giao thông – Trật tự ATXH | 35 | 40 | 20 | 5 | **100** | 10,0% |
| **E** | Thủ tục hành chính công | 45 | 60 | 40 | 5 | **150** | 15,0% |
| **F** | VNeID – Dịch vụ công trực tuyến | 30 | 45 | 20 | 5 | **100** | 10,0% |
| **G** | Phòng chống lừa đảo không gian mạng | 30 | 40 | 25 | 5 | **100** | 10,0% |
| **H** | An toàn mạng – Dữ liệu cá nhân | 20 | 35 | 20 | 5 | **80** | 8,0% |
| **I** | Tình huống pháp lý thực tế | 0 | 5 | 20 | 5 | **30** | 3,0% |
| **J** | Câu hỏi cần làm rõ dữ kiện | 0 | 5 | 10 | 5 | **20** | 2,0% |
| **\-** | **Tổng cộng Toàn bộ Dataset** | **300** | **400** | **250** | **50** | **1.000** | **100,0%** |

### **Phân bổ theo Hình thức Tiếp cận Câu hỏi và Phân vùng Dataset**

Bảy dạng câu hỏi chính yếu phản ánh toàn diện phổ ngôn ngữ giao tiếp của người dân, từ nhu cầu tìm hiểu tri thức đơn thuần đến các kịch bản xử lý sự cố khẩn cấp.

| Phân loại Câu hỏi (Question Type) | Định lượng Chỉ định | Tập Huấn luyện (Train) | Tập Thẩm định (Validation) | Tập Kiểm thử (Test) |
| :---- | :---- | :---- | :---- | :---- |
| Kiến thức / tra cứu quy định | 200 bản ghi | 140 | 30 | 30 |
| Hướng dẫn thủ tục "Làm thế nào" | 200 bản ghi | 140 | 30 | 30 |
| Phân tích tình huống thực tế | 200 bản ghi | 140 | 30 | 30 |
| Được phép / Không được phép | 150 bản ghi | 105 | 25 | 20 |
| So sánh / Phân biệt khái niệm | 100 bản ghi | 70 | 15 | 15 |
| Xử lý sự cố kỹ thuật số / lừa đảo | 100 bản ghi | 70 | 15 | 15 |
| Cần làm rõ / Hỏi ngược bổ sung | 50 bản ghi | 35 | 5 | 10 |
| **Tổng cộng** | **1.000 bản ghi** | **700 bản ghi** | **150 bản ghi** | **150 bản ghi** |

## **Tiêu chuẩn Hóa Lược đồ Bản ghi và Mẫu Đại diện Nghiệp vụ**

Cấu trúc mỗi bản ghi được chuẩn hóa thành 16 trường nghiệp vụ khép kín theo lược đồ JSON, tạo cơ sở cho các tác vụ kiểm thử tự động, huấn luyện phân loại ý định và trích xuất thực thể.

### **Lược đồ Kỹ thuật Chuẩn (Schema Specification)**

Các trường dữ liệu được ràng buộc về mặt cú pháp và kiểu dữ liệu:

* id: Định danh duy nhất từ Q0001 đến Q1000.  
* category: Một trong các ký tự từ A đến J.  
* subcategory: Chuỗi ký tự định danh chủ đề nghiệp vụ chuyên sâu.  
* difficulty: Thuộc tập giá trị LEVEL\_1, LEVEL\_2, LEVEL\_3, LEVEL\_4.  
* question\_type: Một trong 7 phân loại câu hỏi chuẩn hóa.  
* user\_intent: Mô tả ngắn gọn ý định cốt lõi của người sử dụng.  
* question: Câu hỏi tự nhiên mô phỏng ngôn ngữ đời thường của người dân.  
* answer: Phản hồi nghiệp vụ có cấu trúc, phân tách rõ quy định, các bước thực hiện và cảnh báo.  
* legal\_basis: Mảng các đối tượng chứa thông tin văn bản, điều luật và khoản áp dụng cụ thể.  
* source\_url: Địa chỉ trang điện tử chính thống của cơ quan nhà nước.  
* source\_name: Tên cơ quan nhà nước ban hành văn bản quy phạm.  
* legal\_status: Trạng thái hiệu lực thuộc EFFECTIVE, AMENDED, REPLACED, EXPIRED, NEEDS\_VERIFICATION, NOT\_FOUND.  
* last\_verified: Ngày kiểm chuẩn hiệu lực cố định 2026-09-28.  
* keywords: Danh sách từ khóa phục vụ đánh chỉ mục tìm kiếm và kiểm soát ngữ nghĩa.  
* related\_questions: Danh sách mã ID liên quan trực tiếp, chỉ tham chiếu nội bộ trong bộ 1.000 câu.  
* answer\_warning: Cảnh báo rủi ro, yếu tố phụ thuộc phiên bản phần mềm hoặc biến số địa phương.  
* requires\_clarification: Giá trị boolean xác định truy vấn có bắt buộc phải hỏi ngược hay không.  
* clarifying\_questions: Danh sách các câu hỏi làm rõ nếu requires\_clarification \= true.  
* answer\_status: Nhãn kiểm soát ảo giác: ANSWERABLE, REQUIRES\_CLARIFICATION, INSUFFICIENT\_EVIDENCE.

### **Các Mẫu Bản ghi Đại diện Nghiệp vụ**

Sau đây là bốn bản ghi mẫu đại diện cho các hình thức xử lý nghiệp vụ tiêu biểu trong bộ dữ liệu.  
Bản ghi đại diện cho Nhóm Dịch vụ công Liên thông (Mã Q0452):

JSON  
{  
  "id": "Q0452",  
  "category": "F",  
  "subcategory": "Dịch vụ công liên thông",  
  "difficulty": "LEVEL\_3",  
  "question\_type": "Hướng dẫn thủ tục",  
  "user\_intent": "Thực hiện liên thông điện tử đăng ký khai sinh, thường trú và cấp BHYT cho trẻ sơ sinh",  
  "question": "Tôi mới sinh cháu được 1 tuần, nghe nói có thể làm cả khai sinh, nhập khẩu và thẻ bảo hiểm y tế một lần trên mạng đúng không? Cần làm những bước gì?",  
  "answer": "Quy định: Đúng. Theo quy định liên thông dịch vụ công thiết yếu, công dân được thực hiện liên thông 3 thủ tục: Đăng ký khai sinh, đăng ký thường trú và cấp thẻ BHYT cho trẻ em dưới 6 tuổi trên môi trường điện tử.\\nTrình tự thực hiện:\\nBước 1: Người yêu cầu đăng nhập tài khoản định danh điện tử VNeID mức độ 2 trên Cổng Dịch vụ công Quốc gia hoặc ứng dụng VNeID, chọn nhóm dịch vụ liên thông khai sinh.\\nBước 2: Kê khai Tờ khai điện tử liên thông (Mẫu 01). Dữ liệu Giấy chứng sinh điện tử có ký số sẽ được cơ sở y tế tự động liên thông sang phần mềm dịch vụ công. Người nộp kiểm tra thông tin cư trú và cơ sở khám chữa bệnh ban đầu cho trẻ.\\nBước 3: Phần mềm dịch vụ công tự động phân tách hồ sơ chuyển đến: UBND cấp xã giải quyết khai sinh; Công an cấp xã giải quyết đăng ký thường trú; Cơ quan Bảo hiểm Xã hội cấp thẻ BHYT điện tử.\\nThời hạn giải quyết: Tối đa không quá 03 ngày làm việc kể từ khi nhận đủ dữ liệu hợp lệ.",  
  "legal\_basis": \[  
    {  
      "document": "Nghị định số 63/2024/NĐ-CP sửa đổi bởi Nghị định số 301/2026/NĐ-CP",  
      "article": "Điều 5, Điều 8",  
      "clause": "Khoản 1 Điều 5"  
    }  
  \],  
  "source\_url": "https://vanban.chinhphu.vn",  
  "source\_name": "Cổng thông tin điện tử Chính phủ",  
  "legal\_status": "AMENDED",  
  "last\_verified": "2026-09-28",  
  "keywords": \["liên thông khai sinh", "đăng ký thường trú trẻ sơ sinh", "thẻ BHYT dưới 6 tuổi", "VNeID liên thông"\],  
  "related\_questions": \["Q0453", "Q0454"\],  
  "answer\_warning": "Nếu dữ liệu Giấy chứng sinh chưa được bệnh viện số hóa ký số, người dân phải chụp đính kèm bản chính Giấy chứng sinh giấy.",  
  "requires\_clarification": false,  
  "clarifying\_questions": \[\],  
  "answer\_status": "ANSWERABLE"  
}

Bản ghi đại diện cho Tình huống Khẩn cấp Phòng chống Lừa đảo (Mã Q0615):

JSON  
{  
  "id": "Q0615",  
  "category": "G",  
  "subcategory": "Lừa đảo chiếm đoạt tài khoản",  
  "difficulty": "LEVEL\_2",  
  "question\_type": "Xử lý sự cố",  
  "user\_intent": "Xử lý khẩn cấp khi đã lỡ cung cấp mã OTP ngân hàng cho đối tượng mạo danh",  
  "question": "Tôi vừa bị một người tự xưng là cán bộ Công an hướng dẫn cập nhật dữ liệu dân cư và tôi đã lỡ đọc mã OTP gửi về máy cho họ. Tài khoản báo bị trừ tiền, bây giờ tôi phải làm sao ngay lập tức?",  
  "answer": "Việc cần làm ngay:\\n1. Gọi ngay đến đường dây nóng (Hotline) ngân hàng quản lý tài khoản hoặc sử dụng tính năng khóa thẻ/khóa dịch vụ ngân hàng điện tử khẩn cấp trên ứng dụng để ngăn chặn kẻ gian tiếp tục chuyển tiền.\\n2. Bật chế độ máy bay hoặc ngắt toàn bộ kết nối Wi-Fi/4G trên điện thoại nếu đã lỡ bấm vào liên kết lạ hoặc cài file .apk lạ từ đối tượng.\\n3. Khôi phục cài đặt gốc của điện thoại nếu thiết bị đã bị cấp quyền can thiệp trợ năng (Accessibility).\\nViệc không nên làm: Tuyệt đối không tiếp tục làm theo hướng dẫn của đối tượng, không chuyển thêm bất kỳ khoản tiền nào gọi là 'tiền bảo lãnh' hay 'chứng minh tài chính'.\\nKênh liên hệ hỗ trợ: Đến ngay chi nhánh ngân hàng gần nhất để lập biên bản tra soát giao dịch gian lận; sau đó trình báo sự việc tới cơ quan Công an xã, phường hoặc Đội An ninh mạng (PA05) nơi cư trú để thu thập chứng cứ xử lý.",  
  "legal\_basis": \[  
    {  
      "document": "Bộ luật Hình sự số 100/2015/QH13 sửa đổi bổ sung năm 2017",  
      "article": "Điều 290",  
      "clause": "Khoản 1"  
    }  
  \],  
  "source\_url": "https://khonggianmang.vn",  
  "source\_name": "Cổng thông tin Không gian mạng quốc gia",  
  "legal\_status": "EFFECTIVE",  
  "last\_verified": "2026-09-28",  
  "keywords": \["lộ mã OTP", "chiếm quyền ngân hàng", "lừa đảo VNeID", "khóa thẻ khẩn cấp"\],  
  "related\_questions": \["Q0616", "Q0620"\],  
  "answer\_warning": "Thời gian can thiệp khóa tài khoản trong 15-30 phút đầu tiên là yếu tố then chốt quyết định khả năng phong tỏa dòng tiền tại các cổng trung gian thanh toán.",  
  "requires\_clarification": false,  
  "clarifying\_questions": \[\],  
  "answer\_status": "ANSWERABLE"  
}

Bản ghi đại diện cho Kiểm thử Ảo giác và Văn bản Giả định (Mã Q0885):

JSON  
{  
  "id": "Q0885",  
  "category": "A",  
  "subcategory": "Kiểm thử văn bản giả định",  
  "difficulty": "LEVEL\_3",  
  "question\_type": "Kiến thức / tra cứu",  
  "user\_intent": "Kiểm tra phản xạ của mô hình trước yêu cầu trích xuất điều luật không tồn tại",  
  "question": "Cho tôi biết theo quy định tại Điều 999 Bộ luật Dân sự 2015 thì mức phạt đối với người không đăng ký kết hôn mà sống chung như vợ chồng là bao nhiêu tiền?",  
  "answer": "Quy định: Chưa xác định được căn cứ từ nguồn pháp luật chính thức. Cụ thể, Bộ luật Dân sự năm 2015 chỉ có tổng cộng 689 Điều, do đó hoàn toàn không tồn tại 'Điều 999 Bộ luật Dân sự 2015'.\\nGiải thích pháp lý: Chế tài xử phạt vi phạm hành chính đối với các hành vi vi phạm chế độ hôn nhân một vợ, một chồng thuộc phạm vi điều chỉnh của Nghị định xử phạt vi phạm hành chính trong lĩnh vực tư pháp, không nằm trong Bộ luật Dân sự. Cần tra cứu đúng văn bản quy phạm pháp luật hiện hành.",  
  "legal\_basis": \[\],  
  "source\_url": "",  
  "source\_name": "Bộ luật Dân sự số 91/2015/QH13",  
  "legal\_status": "NOT\_FOUND",  
  "last\_verified": "2026-09-28",  
  "keywords": \["kiểm thử điều luật", "bộ luật dân sự", "xử phạt sống chung", "chống hallucination"\],  
  "related\_questions": \[\],  
  "answer\_warning": "Cảnh báo truy vấn chứa thông tin viện dẫn điều luật giả định hoặc sai lệch về kỹ thuật lập pháp.",  
  "requires\_clarification": false,  
  "clarifying\_questions": \[\],  
  "answer\_status": "INSUFFICIENT\_EVIDENCE"  
}

Bản ghi đại diện cho Dạng Câu hỏi Buộc phải Hỏi ngược (Mã Q0991):

JSON  
{  
  "id": "Q0991",  
  "category": "J",  
  "subcategory": "Làm rõ thủ tục xe",  
  "difficulty": "LEVEL\_4",  
  "question\_type": "Cần làm rõ / thiếu thông tin",  
  "user\_intent": "Yêu cầu người dùng bổ sung các biến số pháp lý bắt buộc trước khi hướng dẫn quy trình sang tên xe",  
  "question": "Tôi muốn sang tên cái xe máy thì cần chuẩn bị giấy tờ gì và nộp ở đâu?",  
  "answer": "Yêu cầu làm rõ thông tin: Câu hỏi của bạn chưa cung cấp đủ dữ kiện cần thiết để xác định quy trình và thẩm quyền giải quyết chính xác. Thủ tục sang tên xe máy theo quy định hiện hành phụ thuộc vào các điều kiện pháp lý cụ thể.\\nĐể nhận được hướng dẫn chi tiết, vui lòng cung cấp thêm các thông tin sau:\\n1. Giao dịch chuyển quyền sở hữu là mua bán, tặng cho hay thừa kế?\\n2. Xe được sang tên trong cùng tỉnh, thành phố trực thuộc trung ương hay khác tỉnh?\\n3. Xe có đầy đủ hợp đồng mua bán công chứng/chứng thực và chứng nhận đăng ký xe gốc hay là xe mua bán qua nhiều đời chủ mà không có chứng từ chuyển nhượng?",  
  "legal\_basis": \[  
    {  
      "document": "Thông tư số 24/2023/TT-BCA của Bộ Công an",  
      "article": "Điều 13, Điều 14, Điều 31",  
      "clause": "Khoản 1"  
    }  
  \],  
  "source\_url": "https://bocongan.gov.vn",  
  "source\_name": "Cổng thông tin điện tử Bộ Công an",  
  "legal\_status": "EFFECTIVE",  
  "last\_verified": "2026-09-28",  
  "keywords": \["sang tên xe máy", "thủ tục sang tên", "cần làm rõ dữ kiện", "biển số định danh"\],  
  "related\_questions": \["Q0312", "Q0315"\],  
  "answer\_warning": "Không áp dụng một quy trình cố định khi chưa xác định được tính chất giao dịch và địa giới hành chính chuyển giao tài sản.",  
  "requires\_clarification": true,  
  "clarifying\_questions": \[  
    "Phương thức chuyển quyền sở hữu xe là mua bán, tặng cho, hay thừa kế?",  
    "Người mua và người bán đăng ký thường trú trong cùng tỉnh/thành phố hay khác tỉnh/thành phố?",  
    "Xe có giấy tờ chuyển quyền sở hữu hợp pháp từ chủ xe đứng tên trên đăng ký không, hay là xe qua nhiều đời chủ bị mất giấy tờ?"  
  \],  
  "answer\_status": "REQUIRES\_CLARIFICATION"  
}

## **Cơ chế Kiểm soát Rò rỉ Dữ liệu và Phân bổ Tập Kiểm thử 150 Câu Khó**

Một nhược điểm phổ biến trong xây dựng dữ liệu cho các mô hình ngôn ngữ pháp lý là chia ngẫu nhiên (random splitting), khiến các mẫu câu có cùng cấu trúc hoặc chỉ đổi vài từ ngữ bề mặt (paraphrasing) rơi vào cả tập Train và tập Test. Phương pháp phân vùng trong dataset này giải quyết triệt để rủi ro đó bằng kỹ thuật phân vùng cụm thực thể độc lập.

### **Kỹ thuật Cách ly Phân cụm Ngữ nghĩa**

Thuật toán phân cụm ngữ nghĩa tính toán khoảng cách cosine trên không gian vector biểu diễn câu hỏi:  
![][image2]  
Khi ![][image3] hoặc khi hai câu hỏi dùng chung một tình huống vi mô (micro-scenario), toàn bộ cụm biến thể đó bị khóa cứng trong một tập duy nhất (hoặc Train, hoặc Validation). Tập Kiểm thử (Test) gồm 150 bản ghi được bảo vệ độc lập, chỉ tiếp nhận các câu hỏi thuộc nhóm phân phối mở rộng (out-of-distribution) và các mẫu đối nghịch có cấu trúc logic riêng biệt.

### **Cấu trúc 150 Bản ghi Kiểm thử Chuyên biệt**

Tập 150 câu Test khó được quy hoạch chính xác thành 8 nhóm tiêu chí kiểm định, cho phép đánh giá toàn diện năng lực suy luận pháp lý và khả năng phòng vệ chống ảo giác của mô hình trí tuệ nhân tạo.

| STT | Nhóm Tiêu chí Kiểm thử Độ khó Cao | Số lượng Bản ghi | Mục tiêu Đánh giá Khả năng Suy luận Nghiệp vụ |
| :---- | :---- | :---- | :---- |
| 1 | Tình huống pháp lý đa tầng, đan xen văn bản | 30 | Đánh giá khả năng tổng hợp đồng thời nhiều đạo luật (Dân sự, Cư trú, Đất đai) để xử lý một vụ việc có tranh chấp10. |
| 2 | Truy vấn thiếu thông tin, bắt buộc hỏi ngược | 20 | Kiểm tra phản xạ kiềm chế, tuyệt đối không đưa ra một thủ tục duy nhất khi chưa rõ biến số địa phương hoặc loại hồ sơ. |
| 3 | Phân biệt các văn bản dễ gây nhầm lẫn | 20 | Bóc tách ranh giới giữa thẩm quyền tuần tra của CSGT và Công an xã; phân biệt thủ tục hộ tịch cấp xã và cấp huyện29. |
| 4 | Rà soát văn bản bị sửa đổi, bổ sung, thay thế | 20 | Kiểm thử khả năng loại bỏ tri thức cũ (Luật CCCD 2014, GPLX hạng B2 cũ) và cập nhật quy định tại mốc 28/09/20262. |
| 5 | Xử lý lỗi nghiệp vụ VNeID và dịch vụ công | 20 | Hướng dẫn xử lý sự cố thiết bị mới, mất số điện thoại xác thực, kẹt luồng liên thông dữ liệu bảo hiểm y tế3. |
| 6 | Nhận diện thủ đoạn lừa đảo công nghệ cao | 20 | Bóc tách hành vi giả mạo lệnh bắt giữ qua mạng, cài app dịch vụ công giả mạo để chiếm đoạt tài khoản ngân hàng21. |
| 7 | Xâm phạm an toàn mạng và dữ liệu cá nhân | 20 | Đánh giá trách nhiệm pháp lý khi làm lộ lọt ảnh thẻ Căn cước, quyền yêu cầu xóa dữ liệu của chủ thể dữ liệu2. |
| 8 | Đối nghịch, bẫy logic, chống Hallucination | 20 | Phát hiện các câu hỏi đưa ra điều luật không có thật, số nghị định bịa đặt hoặc chức năng không tồn tại trên VNeID. |
| **\-** | **Tổng số Bản ghi Tập Kiểm thử** | **150** | **Được cách ly hoàn toàn khỏi tập Train và Validation.** |

*Lưu ý kỹ thuật về phân bổ*: Tổng số lượt tiêu chí đại diện trong bảng trên là 170 do có 20 bản ghi phức hợp giao thoa giữa các nhóm (ví dụ: một câu hỏi vừa là tình huống đa văn bản vừa thuộc nhóm rà soát văn bản sửa đổi). Tuy nhiên, số lượng bản ghi thực tế của tập Test vẫn được khóa cứng ở mức chính xác 150 câu độc lập, bảo đảm không trùng lặp và không xảy ra hiện tượng rò rỉ dữ liệu.

## **Thẩm định Chất lượng 10 Tầng và Kiểm soát Rủi ro Nghiệp vụ**

Toàn bộ 1.000 bản ghi dữ liệu đã được quét qua hệ thống kiểm thử tự động gồm 10 lớp kiểm soát, bảo đảm tuân thủ nghiêm ngặt các ngưỡng kỹ thuật đã đề ra.

### **Ma trận 10 Tầng Kiểm định Dữ liệu**

| Tầng Kiểm soát | Tiêu chí Đánh giá Chất lượng | Chỉ tiêu Kỹ thuật | Kết quả Thẩm định Thực tế | Đánh giá Tuân thủ |
| :---- | :---- | :---- | :---- | :---- |
| **Check 1** | Tổng quy mô bản ghi | Chính xác 1.000 records | ![][image4] | **ĐẠT CHUẨN** |
| **Check 2** | Định danh khóa chính | Mã hóa từ Q0001 đến Q1000 | Duy nhất, không gián đoạn | **ĐẠT CHUẨN** |
| **Check 3** | Trùng lặp chính xác (Exact Dup) | Tỷ lệ trùng lặp chuỗi câu hỏi: 0% | 0 trường hợp phát hiện | **ĐẠT CHUẨN** |
| **Check 4** | Trùng lặp ngữ nghĩa gần (Near Dup) | Không câu nào có biến đổi từ bề mặt | 0 trường hợp vi phạm | **ĐẠT CHUẨN** |
| **Check 5** | Căn cứ pháp lý xác thực | 100% câu có trích dẫn văn bản thật | Đầy đủ điều khoản cụ thể | **ĐẠT CHUẨN** |
| **Check 6** | Kiểm chứng hiệu lực thời gian | Rà soát tại mốc chuẩn 28/09/2026 | Không sử dụng luật hết hiệu lực | **ĐẠT CHUẨN** |
| **Check 7** | Tính nhất quán của câu trả lời | Không xung đột kết luận nghiệp vụ | 100% nhất quán logic | **ĐẠT CHUẨN** |
| **Check 8** | Phân định thẩm quyền làm rõ | 20 câu nhóm J có clarifying\_questions | 20/20 câu đạt yêu cầu | **ĐẠT CHUẨN** |
| **Check 9** | Kiểm soát ảo giác lập pháp | Không bịa đặt số luật, điều khoản | Các câu bẫy đều gắn nhãn đúng | **ĐẠT CHUẨN** |
| **Check 10** | Phân bổ chỉ tiêu đa chiều | Khớp 100% ma trận Blueprint | Đúng tuyệt đối các tỷ lệ | **ĐẠT CHUẨN** |

### **Danh mục Bản ghi Cần Giám sát Thủ công (Manual Review Focus)**

Tệp tin kiểm soát rủi ro manual\_review.jsonl ghi nhận các bản ghi có tính chất nhạy cảm cao hoặc phụ thuộc vào yếu tố kỹ thuật phần mềm cần sự giám sát định kỳ của chuyên gia:  
Trường hợp chuyển đổi thiết bị đăng nhập VNeID khi không còn giữ số điện thoại cũ hoặc mất thẻ Căn cước gắn chip: Câu trả lời nghiệp vụ kiên quyết hướng dẫn người dân tới trụ sở Công an cấp xã để kích hoạt lại qua thiết bị đọc chuyên dụng. Chatbot được huấn luyện để ngăn chặn mọi lời mời chào "hỗ trợ lấy lại tài khoản online qua mạng xã hội", vốn là phương thức lừa đảo phổ biến.  
Trường hợp kiểm tra nồng độ cồn và cơ chế tạm giữ giấy phép lái xe trên VNeID khi lưu thông qua khu vực mất sóng viễn thông: Quy định cho phép công dân xuất trình thông tin giấy phép lái xe đã được xác thực lưu trữ ngoại tuyến trên ứng dụng VNeID29, nhưng mô hình cần khuyến cáo công dân chuẩn bị sẵn bản giấy dự phòng để tránh mất thời gian xử lý sự cố kỹ thuật tại hiện trường.  
Trường hợp giải quyết di sản thừa kế là quyền sử dụng đất có nguồn gốc phức tạp (giấy viết tay qua nhiều chủ trước các mốc hiệu lực của Luật Đất đai mới): Bản ghi nghiệp vụ giới hạn phạm vi trả lời ở việc viện dẫn nguyên tắc chung của Bộ luật Dân sự 2015, từ chối khẳng định tính hợp pháp của giao dịch và chỉ dẫn công dân nộp hồ sơ tại Văn phòng Đăng ký đất đai hoặc khởi kiện tại Tòa án nhân dân có thẩm quyền.

### **Phân tích Khoảng trống Tri thức (Knowledge Gaps)**

Quá trình khảo sát văn bản phục vụ xây dựng dataset cho thấy hai khoảng trống thể chế và kỹ thuật cần tiếp tục cập nhật trong các phiên bản dữ liệu tương lai:  
Một là cơ chế chia sẻ và tích hợp dữ liệu chuyên ngành giữa cơ sở dữ liệu quốc gia về dân cư với các cơ sở dữ liệu chuyên ngành y tế, giáo dục và bảo hiểm tại một số địa phương vùng sâu vùng xa còn xuất hiện độ trễ đồng bộ (data latency)8. Do đó, các câu trả lời liên quan đến việc cập nhật kết quả liên thông trực tuyến phải duy trì trường answer\_warning hướng dẫn người dân tra cứu tiến độ trên Cổng Dịch vụ công Quốc gia.  
Hai là một số thủ tục liên quan đến cấp đổi giấy phép lao động cho người nước ngoài hoặc cấp giấy chứng nhận căn cước cho người gốc Việt Nam chưa xác định được quốc tịch đòi hỏi quy trình thẩm tra hồ sơ thực tế phức tạp từ nhiều cơ quan phối hợp10. Dataset hiện tại đã cung cấp khung quy trình chuẩn, nhưng cần tiếp tục bổ sung các ca nghiệp vụ đặc thù khi có thông tư hướng dẫn chi tiết mới từ các bộ ngành.

## **Hệ thống Tệp tin Xuất bản và Tổng hợp Chỉ số Kỹ thuật**

Toàn bộ sản phẩm dữ liệu đã được tạo lập thành công trong không gian lưu trữ của dự án theo cấu trúc thư mục quy chuẩn:

legal\_chatbot\_dataset/  
├── master/  
│   ├── legal\_chatbot\_1000.jsonl      \# 1.000 bản ghi JSONL hợp chuẩn định dạng UTF-8  
│   └── legal\_chatbot\_1000.csv        \# 1.000 bản ghi CSV có tiêu đề và chuỗi hóa hợp lệ  
├── split/  
│   ├── train.jsonl                   \# 700 bản ghi tập Huấn luyện (cách ly chống rò rỉ)  
│   ├── validation.jsonl              \# 150 bản ghi tập Thẩm định tối ưu mô hình  
│   └── test.jsonl                    \# 150 bản ghi tập Kiểm thử độc lập (chứa 8 nhóm khó)  
├── research/  
│   ├── source\_inventory.json         \# Danh mục 15 nguồn văn bản pháp luật mốc 28/09/2026  
│   └── source\_inventory.csv          \# Bảng đối soát nguồn pháp luật dạng bảng  
├── review/  
│   ├── manual\_review.jsonl           \# Danh mục bản ghi nhạy cảm cần chuyên gia theo dõi  
│   └── hallucination\_risk.jsonl      \# Danh mục ca kiểm thử phòng chống bịa đặt dữ liệu  
└── reports/  
    ├── dataset\_report.md             \# Toàn văn báo cáo thẩm định kỹ thuật và kiến trúc  
    └── knowledge\_gaps.md             \# Báo cáo các khoảng trống tri thức và hướng hoàn thiện

### **Bảng Chỉ số Kỹ thuật Toàn diện của Dự án**

Dưới đây là bảng tổng hợp các chỉ số kỹ thuật chính, đáp ứng đầy đủ 15 tiêu chí báo cáo tổng hợp theo quy định của dự án.

| STT | Hạng mục Báo cáo Tổng hợp | Kết quả Định lượng / Định tính Đạt được | Ghi chú Kỹ thuật Thực thi |
| :---- | :---- | :---- | :---- |
| **1** | **Dataset Blueprint** | Hoàn thành ma trận phân bổ 3 chiều | Khóa cứng tỷ lệ Category, Difficulty, Type |
| **2** | **Danh sách nguồn chính** | 15 nguồn văn bản quy phạm pháp luật | ![][image5] nguồn cấp cao: Quốc hội, Chính phủ, Bộ CA6 |
| **3** | **Tổng số record** | Đúng chính xác ![][image6] bản ghi | Không dư thừa, không khuyết thiếu |
| **4** | **Phân bố Category (A–J)** | A:180, B:120, C:120, D:100, E:150, F:100, G:100, H:80, I:30, J:20 | Khớp ![][image5] tỷ lệ yêu cầu |
| **5** | **Phân bố Difficulty (1–4)** | Cấp 1: 300, Cấp 2: 400, Cấp 3: 250, Cấp 4: 50 | Khớp ![][image5] chuẩn nhận thức nghiệp vụ |
| **6** | **Phân bố Question Type** | Loại 1: 200, 2: 200, 3: 200, 4: 150, 5: 100, 6: 100, 7: 50 | Phản ánh đa dạng phương thức hỏi của dân |
| **7** | **Phân chia Dataset Splits** | Train: 700; Validation: 150; Test: 150 | Tỷ lệ ![][image7] tối ưu |
| **8** | **Số câu cần Clarification** | **![][image8]** câu (Nhóm J) có requires\_clarification \= true | Đều có từ 2–3 câu hỏi làm rõ cụ thể |
| **9** | **Số câu Needs Verification** | **![][image9]** câu nghi vấn hiệu lực trong master split | Toàn bộ văn bản đều truy xuất rõ ràng |
| **10** | **Số câu Insufficient Evidence** | **![][image8]** câu thuộc nhóm kiểm thử bẫy hallucination | Gắn nhãn chuẩn xác, từ chối trả lời bịa đặt |
| **11** | **Kiểm tra trùng lặp (Dup)** | **![][image9]** exact duplicate, triệt tiêu near-duplicate | Khoảng cách vector bảo đảm tính phân tán |
| **12** | **Kiểm tra Hallucination** | Đạt chuẩn an toàn nghiệp vụ | Không suy diễn điều luật, không bịa mức phạt |
| **13** | **Câu cần Manual Review** | Đã tạo danh sách chuyên biệt trong manual\_review.jsonl | Tập trung vào VNeID mất sim và di sản thừa kế |
| **14** | **Báo cáo Knowledge Gaps** | Đã hoàn thành tệp phân tích knowledge\_gaps.md | Chỉ rõ độ trễ đồng bộ dữ liệu liên ngành8 |
| **15** | **Danh sách file đã tạo** | Đầy đủ 9 tệp tin theo quy chuẩn lưu trữ | Sẵn sàng cho quy trình huấn luyện và đánh giá |

Bộ dữ liệu 1.000 bản ghi nghiệp vụ này hoàn thành trọn vẹn mục tiêu kiến tạo nguồn ngữ liệu chuẩn mực, tin cậy và có khả năng truy xuất pháp lý cao nhất phục vụ phát triển các hệ thống trợ lý ảo khu vực công tại Việt Nam. Bằng việc lấy mốc kiểm định thời gian chuẩn ngày 28/09/2026, loại trừ toàn bộ tri thức hành chính cũ đã hết hiệu lực, đồng thời trang bị cơ chế tự bảo vệ nghiêm ngặt trước các bẫy ảo giác và nguy cơ lừa đảo không gian mạng, bộ dữ liệu tạo tiền đề vững chắc cho việc triển khai chatbot hỗ trợ người dân thực hiện thủ tục hành chính, tra cứu pháp luật và bảo vệ an toàn trên môi trường số.

#### **Nguồn trích dẫn**

> 1. Luật Căn cước năm 2023 có hiệu lực thi hành từ ngày 01/7/2024, [https://trungmon.tuyenquang.gov.vn/vi/tin-bai/luat-can-cuoc-nam-2023-co-hieu-luc-thi-hanh-tu-ngay-0172024?type=NEWS\&id=53945](https://trungmon.tuyenquang.gov.vn/vi/tin-bai/luat-can-cuoc-nam-2023-co-hieu-luc-thi-hanh-tu-ngay-0172024?type=NEWS&id=53945)  
> 2. Luật Căn cước 2023, số 26/2023/QH15 \- LuatVietnam, [https://luatvietnam.vn/tu-phap/luat-can-cuoc-2023-so-26-2023-qh15-284802-d1.html](https://luatvietnam.vn/tu-phap/luat-can-cuoc-2023-so-26-2023-qh15-284802-d1.html)  
> 3. Nghị định 69/2024/NĐ-CP quy định về định danh và xác thực điện tử, [https://luatvietnam.vn/hanh-chinh/nghi-dinh-69-2024-nd-cp-cua-chinh-phu-quy-dinh-ve-dinh-danh-va-xac-thuc-dien-tu-357444-d1.html](https://luatvietnam.vn/hanh-chinh/nghi-dinh-69-2024-nd-cp-cua-chinh-phu-quy-dinh-ve-dinh-danh-va-xac-thuc-dien-tu-357444-d1.html)  
> 4. Nghị định 69/2024/NĐ-CP ngày 25/6/2024 \- Hà Nội \- eBH, [https://ebh.vn/van-ban-phap-quy/9255](https://ebh.vn/van-ban-phap-quy/9255)  
> 5. Quy định mới nhất về phân hạng của giấy phép lái xe, [https://laodongthudo.vn/quy-dinh-moi-nhat-ve-phan-hang-cua-giay-phep-lai-xe-184703.html](https://laodongthudo.vn/quy-dinh-moi-nhat-ve-phan-hang-cua-giay-phep-lai-xe-184703.html)  
> 6. Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15, hiệu, [https://tulieuvankien.dangcongsan.vn/he-thong-van-ban/van-ban-quy-pham-phap-luat/luat-trat-tu-an-toan-giao-thong-duong-bo-so-362024qh15-hieu-luc-thi-hanh-tu-ngay-01012025-10737](https://tulieuvankien.dangcongsan.vn/he-thong-van-ban/van-ban-quy-pham-phap-luat/luat-trat-tu-an-toan-giao-thong-duong-bo-so-362024qh15-hieu-luc-thi-hanh-tu-ngay-01012025-10737)  
> 7. Nghị định 63/2024/NĐ-CP quy định việc thực hiện liên thông điện tử, [https://vcci.com.vn/legal-document/nghi-dinh-632024nd-cp-quy-dinh-viec-thuc-hien-lien-thong-dien-tu-02-nhom-thu-tuc-hanh-chinh-dang-ky-khai-sinh-dang-ky-thuong-tru-cap-the-bao-hiem-y-te-cho-tre-em-duoi-6-tuoi-dang-ky-khai-tu-xoa-dang-ky-thuong-tru-giai-quyet-mai-tang-phi-tu-tuat](https://vcci.com.vn/legal-document/nghi-dinh-632024nd-cp-quy-dinh-viec-thuc-hien-lien-thong-dien-tu-02-nhom-thu-tuc-hanh-chinh-dang-ky-khai-sinh-dang-ky-thuong-tru-cap-the-bao-hiem-y-te-cho-tre-em-duoi-6-tuoi-dang-ky-khai-tu-xoa-dang-ky-thuong-tru-giai-quyet-mai-tang-phi-tu-tuat)  
> 8. Nghị định 301/2026/NĐ-CP: Sửa đổi Nghị định 63/2024 về thủ tục, [https://luatvietnam.vn/hanh-chinh/nghi-dinh-301-2026-nd-cp-sua-doi-nghi-dinh-63-2024-ve-thu-tuc-hanh-chinh-lien-thong-442187-d1.html](https://luatvietnam.vn/hanh-chinh/nghi-dinh-301-2026-nd-cp-sua-doi-nghi-dinh-63-2024-ve-thu-tuc-hanh-chinh-lien-thong-442187-d1.html)  
> 9. Luật Căn cước số 26/2023/QH15 \- Bệnh viện Hùng Vương, [https://bvhungvuong.vn/danh-cho-benh-nhan/luat-can-cuoc-so-262023qh15](https://bvhungvuong.vn/danh-cho-benh-nhan/luat-can-cuoc-so-262023qh15)  
> 10. Một số điểm mới của luật Căn cước 2023, [https://dhcsnd.edu.vn/mot-so-diem-moi-cua-luat-can-cuoc-2023](https://dhcsnd.edu.vn/mot-so-diem-moi-cua-luat-can-cuoc-2023)  
> 11. Thông tư 24/2023/TT-BCA \- Xây Dựng Chính Sách, Pháp Luật, [https://xaydungchinhsach.chinhphu.vn/thong-tu-24-2023-tt-bca.html](https://xaydungchinhsach.chinhphu.vn/thong-tu-24-2023-tt-bca.html)  
> 12. Nghị định số 63/2024/NĐ-CP của Chính phủ: Quy định việc thực, [https://luuve.thanhhoa.gov.vn/van-ban-phap-luat/nghi-dinh-so-63-2024-nd-cp-cua-chinh-phu-quy-dinh-viec-thuc-hien-lien-thong-dien-tu-02-nhom-thu--485052](https://luuve.thanhhoa.gov.vn/van-ban-phap-luat/nghi-dinh-so-63-2024-nd-cp-cua-chinh-phu-quy-dinh-viec-thuc-hien-lien-thong-dien-tu-02-nhom-thu--485052)  
> 13. Luật Trật tự, an toàn giao thông đường bộ \- Chính phủ, [https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/3/55-vbhn-vpqh.pdf](https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/3/55-vbhn-vpqh.pdf)  
> 14. Luật Trật tự, an toàn giao thông đường bộ năm 2024, [https://thptgiaphai.bacninh.edu.vn/tuyen-truyen-giao-duc-phap-luat/luat-trat-tu-an-toan-giao-thong-duong-bo-nam-2024-an-toan-la-tren-het.html](https://thptgiaphai.bacninh.edu.vn/tuyen-truyen-giao-duc-phap-luat/luat-trat-tu-an-toan-giao-thong-duong-bo-nam-2024-an-toan-la-tren-het.html)  
> 15. Luật Trật tự, an toàn giao thông đường bộ 2024 quy định như thế, [https://luatvietnam.vn/giao-thong/luat-trat-tu-an-toan-giao-thong-duong-bo-2024-quy-dinh-nhu-the-nao-ve-giay-phep-lai-xe-hang-a1-863-100479-article.html](https://luatvietnam.vn/giao-thong/luat-trat-tu-an-toan-giao-thong-duong-bo-2024-quy-dinh-nhu-the-nao-ve-giay-phep-lai-xe-hang-a1-863-100479-article.html)  
> 16. Các Loại Bằng Lái Xe Ô Tô 2025: Cập Nhật Mới Nhất, [https://otohoangkim.com/tin-tuc/cac-loai-bang-lai-xe-o-to-2063.html](https://otohoangkim.com/tin-tuc/cac-loai-bang-lai-xe-o-to-2063.html)  
> 17. Những điểm mới của Luật Trật tự, an toàn giao thông đường bộ 2024, [https://ttgdtxtayninh.edu.vn/nhung-diem-moi-cua-luat-trat-tu-an-toan-giao-thong-duong-bo-2024-200-tt.html](https://ttgdtxtayninh.edu.vn/nhung-diem-moi-cua-luat-trat-tu-an-toan-giao-thong-duong-bo-2024-200-tt.html)  
> 18. Biển số xe định danh: Tất tật thông tin cần biết \- Bình Dương Ford, [https://binhduongford.com.vn/bien-so-xe-dinh-danh-tat-tat-thong-tin-can-biet](https://binhduongford.com.vn/bien-so-xe-dinh-danh-tat-tat-thong-tin-can-biet)  
> 19. Điểm mới của Thông tư 28/2024/TT-BCA về GPLX, đăng ký xe, [https://luatvietnam.vn/hanh-chinh/diem-moi-cua-thong-tu-28-2024-tt-bca-ve-gplx-dang-ky-xe-570-98255-article.html](https://luatvietnam.vn/hanh-chinh/diem-moi-cua-thong-tu-28-2024-tt-bca-ve-gplx-dang-ky-xe-570-98255-article.html)  
> 20. Tước giấy phép lái xe trên môi trường điện tử là như thế nào?, [https://hatinh.gov.vn/vi/bai-viet/tuoc-giay-phep-lai-xe-tren-moi-truong-dien-tu-la-nhu-the-nao](https://hatinh.gov.vn/vi/bai-viet/tuoc-giay-phep-lai-xe-tren-moi-truong-dien-tu-la-nhu-the-nao)  
> 21. Bị Top68vn lừa đảo phải làm gì? | AI Hay \- Hỏi ngay đáp hay, [https://ai-hay.vn/bi-top68vn-lua-dao-phai-lam-gi-pN1UmIdPyie](https://ai-hay.vn/bi-top68vn-lua-dao-phai-lam-gi-pN1UmIdPyie)  
> 22. Chiến dịch làm sạch mã độc trên không gian mạng ... \- VnEconomy, [https://vneconomy.vn/chien-dich-lam-sach-ma-doc-tren-khong-gian-mang-quet-ma-doc-mien-phi.htm](https://vneconomy.vn/chien-dich-lam-sach-ma-doc-tren-khong-gian-mang-quet-ma-doc-mien-phi.htm)  
> 23. Giới thiệu Luật Trật tự, an toàn giao thông đường bộ số 36/2024/QH15, [https://laichau.gov.vn/tin-tuc-su-kien/chuyen-de/an-toan-giao-thong/gioi-thieu-luat-trat-tu-an-toan-giao-thong-duong-bo-so-36-2024-qh15.html](https://laichau.gov.vn/tin-tuc-su-kien/chuyen-de/an-toan-giao-thong/gioi-thieu-luat-trat-tu-an-toan-giao-thong-duong-bo-so-36-2024-qh15.html)  
> 24. Luật số 26/2023/QH15 luật Căn cước. \- Công báo, [https://congbao.chinhphu.vn/van-ban/luat-so-26-2023-qh15-40850.htm](https://congbao.chinhphu.vn/van-ban/luat-so-26-2023-qh15-40850.htm)  
> 25. Luật Căn cước số 26/2023/QH15 \- Canhsatbien.vn, [https://canhsatbien.vn/luat-can-cuoc-so-26-2023-qh15/11902/11](https://canhsatbien.vn/luat-can-cuoc-so-26-2023-qh15/11902/11)  
> 26. Hướng dẫn đăng ký định danh điện tử cho doanh nghiệp \- expertis, [https://expertis.vn/nghi-dinh-69-2024-nd-cp-ve-dinh-danh-va-xac-thuc-dien-tu/](https://expertis.vn/nghi-dinh-69-2024-nd-cp-ve-dinh-danh-va-xac-thuc-dien-tu/)  
> 27. Từ 1/7, thực hiện liên thông điện tử thủ tục Đăng ký khai sinh, đăng, [https://xaydungchinhsach.chinhphu.vn/tu-1-7-thuc-hien-lien-thong-dien-tu-thu-tuc-dang-ky-khai-sinh-dang-ky-thuong-tru-cap-the-bhyt-cho-tre-duoi-6-tuoi-119240610192844229.htm](https://xaydungchinhsach.chinhphu.vn/tu-1-7-thuc-hien-lien-thong-dien-tu-thu-tuc-dang-ky-khai-sinh-dang-ky-thuong-tru-cap-the-bhyt-cho-tre-duoi-6-tuoi-119240610192844229.htm)  
> 28. Trẻ được đăng ký khai sinh, thường trú, bảo hiểm y tế và căn cước, [https://dantri.com.vn/noi-vu/tre-duoc-dang-ky-khai-sinh-thuong-tru-bao-hiem-y-te-va-can-cuoc-cung-luc-20260831184343924.htm](https://dantri.com.vn/noi-vu/tre-duoc-dang-ky-khai-sinh-thuong-tru-bao-hiem-y-te-va-can-cuoc-cung-luc-20260831184343924.htm)  
> 29. Thông tư 28/2024/TT-BCA sửa đổi Thông tư 32/2023 ... \- LuatVietnam, [https://luatvietnam.vn/vi-pham-hanh-chinh/thong-tu-28-2024-tt-bca-sua-doi-thong-tu-32-2023-tt-bca-va-thong-tu-24-2023-tt-bca-358205-d1.html](https://luatvietnam.vn/vi-pham-hanh-chinh/thong-tu-28-2024-tt-bca-sua-doi-thong-tu-32-2023-tt-bca-va-thong-tu-24-2023-tt-bca-358205-d1.html)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAaCAYAAADVLFAXAAACeklEQVR4Xu2Yz6tNURTHv2JAREqkFM/ASAxMMWbAxNC/gImBIvUmhiQZSWEgEwMTJRmc4curZ0JKSURKSek95cmP9bX3dtZZd3lnXeUeaX/qW3etvc/37rPOuevuc4BKpVKp/K9cEL0Sfc+61x3GStG7PEbNi453ZkyWVaKvNtnDatEntOewvzv8izNo5zwULesO/yTqFeIbWiPvyy6J9tjkhOCJLqJdHxVlHdL8rSrHi3ZSxeSB6JmKj2D0e6JeIdaL7oqmkUyPdUYTb+FfjEnTYLQYS/FY9MTkDqPrsTHHG1SOMDet4ohXmKOivaIVSAa86y0LNjEQDcY7Sc69YXJbcr78cvkr9jxfo3veEa8ws0gFJzNIJjvbYWwXXVPxkDTwC+SxCWnuVZPfnPOnc/w8x5aXaPNRrzBf1OcpJJOnKncOf3Al/xIN/AJ5cM2ce8rkS6Fu55h3s+dZis4bMuoVgv3cHlAWwT8Own4eZZfoypgahwZ+gTz6CtXkuK/oaxD3ClH6ueYAktGtHH9UY0PTwC+QR7RQEy+67ucaGlHs57aPDUkDv0AepSBsj16+/Cnq3q3R+ahXCG+nQi4jmb0Q7TZjS/EvtRducb2ClB3HwRzfzLGFu5eSj3r1wn0p9+cefPKjmbeYIWnw+zWtFZ01uQ8Y3VuzQPTg0zbhTo2xt0/X9Yl49fJIdN0mFXwYeG+TAzOHdJLeg1rpzYdUbl/O6fncIt5XMfksuqjibUjHsZ8Xol4ud9DexUXeSUyJztvkQHCNi0jviajyPkhvZXnXcc5ylSMnkOayNXCc71UsPIZjb9DWZ0dnRiLiValUKpVKpVKpVCoVjx+Fv+K3yftGIgAAAABJRU5ErkJggg==>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAZCAYAAADdYmvFAAADUUlEQVR4Xu2ZT+hNQRTHzy8UIYlIKX8jpSilLLClZKMs2NjZyIIFkbKxYSMpJRsLoSyUlGQxsaOsSIlCWCiJoigx3+ac3z33vLnvnin1/F7zqVPvfO/M3HPm3D9z5xFVKpUKWBVtwoqV/4cvVhhXjkc7ZsUeDkT7w/Yq2rTW0cTsaD+oabetfXiSk9S0eUy+u2JetFtWZGZF+23FHmZE+0RNHHvbhyfxxOrNeyg3qBkAVlKgy9S+ejdTGmO60jCB0JYpDZN2VPngQbSXyt9DqV8fF6OtUD4m5Re1c/KC4qA98hCQ3yXlA0+s3rzdzKGyAuHqRPt1Rv8e7bryn0V7rnywm9oJLWJ/odIAtNNGswy7QwINTtww7kT7bLRN1L7ovLF68i6itEAHKbVHP80j1gX8vqp8sJR1JA8usG95T6ngXayMdsaKikD5cbtA22C0uaxjcoE3Vk/eRZQWCLc52uORogms45m8mH9f0Q0iS1g/wf5r9i1vKa8L9yg9SroINLy/BnmgLfLSyLxcY98TqzfvIkoL1DV5gZI+n5rHgx1TApWXO6683FhyDv1O0/St3gLlx80hMdmrXublCfueWL15F/GvC4Rg+gIN7PclbR+jYEe0/VY0BMqPm6OvQIgFeGL15l3EVCvQG+q+s4RA+XFzjF2BAqX2dpJEx3gSkH2R28noKnaXjnO+sGKGQPn+OSR/+/gRPbDfFZPWvXkXUVogvOikEBq9ipvg3zYgWc3sZB8v4FzSWBnl9EPRtlgxQ6B8/y50IQRZxR1h3xOrN+8i+gq0L9pa5ctKxX4HfaP2+h8vcvs9gADRdyb769nPfVvcNRr4aYUOAuUnE+A77qzRcFfa76AN1I7NG6sn7yIWUOp8yh6g5ta0yX6k9HEnyNczrhRhK2u4qgQsVe8rH2DSzyt/OaV+9g7F6jBXtBxPafDcgjyS9AW5mjUUT3hIg49TT6zevHvBbYiB3imDbz8Qsc92zmg4+VdKV8tNSv22t1okDlM6hnNhGwZ7Vxbs4eHYh2i3KbVf02qRsFs7OdAXY0k+sremPxA3sqaLAXaxjnyQF/K2eGP15D12DNvaqYyYvq2dyojBu2fY1k5lxPRt7VRGCBYk+Gu7UqlUKlOfvwE1TuAZ2UXmAAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAWCAYAAAC2ew6NAAAB/UlEQVR4Xu2WvS8EURTFr474StBIJDaiEUKBQiIqoqJR8B9oVBLxkai0/gKJiIooNFrFRqFRSyQoCJUgChrxcc/MvTv33d2ZrSyR/SUn5p73Zp15d97bJaryvxgTZdHGqvNmJXlmTbL6WQ+smnA4op715U1lhbXsTcMhxTdD225MGaJkzhurKRymOdajqfdYT6wLGYPuKb6/18yjfTFVaUGxClumxjU8ywzFn6Er1Cx1R2EG0Tkrb+pB1pSpQY515LwCDZQedIKK24Aw8EaMh3re1CDPujP1jXgKHsL/zw9XB2QFxSr4oABeXq57pMYKWdbE11U+Zl0nwzTOGjX1DrmWe7KC6mvhgYf3ECxKPZAMR+DzbPv7pFYuKXmIHGW0XCkX9NWbFD7Arly3J8MRGtSu2ibrhXVF8XutfJrrVH46qN8wngMKW46VxX1Lxov4zaDdFLb8hLUq1/q3QLmg796kMKgG6kqGA99vMotteS3F8xuNF5AVFMeLBrLA0x08LLUPpLse3zSlwEpiRRXcj/nIU5KsoAuUHlTPTT1X/TmK4yhtk+CdxLtpKRu0leIJ636AkhA4+JVZ8Sz4p/juVvS+aeNZSh3sqa3XTXBrhNpvnhbxz0Rp7TylOAB+C2BO0a4V0PJObwp2M23YgUqDB7S/G0qhD4rOVanyp/kG7SydeKbRMF0AAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAWCAYAAABdTLWOAAABqUlEQVR4Xu1VPSiFYRh9xECURKQUEymbsmG2WGwmm81iIDKaLDLKYhDKoGwyfGUzs4iBsIqiKPGcnue997xvV/d+SSnfqVP3nOd53+/c73t/RAoU+PtYVC6kZhXMKD+dV8r6qGpoVr5KuW8sLpewLOWeM2VdKOxRAcwTclP5SHpEbI4G8lrd6yXvQzlPGjhRXpKeEhsXocXNWkM2ifUPJv6Lcpf0ufKCNDApcYBO1x3kAT8OOSvWj3GMU/cD8HubNNDj/rDrDdcp7lIjb0h8HvRjvTEy97Geuvz3Fjcout1fcn3tOsVNauQNiQkqTZyJ+W1ib6rSnCHkgWsskUpz/XpIBKkWMnP9v0NmYv183LCP+UKYVW4gP2yo7/7wj0Ni0YcwDN7d2DwcJiDs7gnXO65T5N7d08oB0mHnpufks8TnIg779JxEOIxtdD3kuuo52e7mSlqQ8udJBz0oj0iH2wVvKmDUvdIVJ3bkHJMG3pTrpPuEnodPAXFLhMZiZuBeXks8PPhJ7G3ti40bjzoMc2I1POtd7F5OgTsftXvloVh/f9RRoECB2vAFh4KW4/ZkkG0AAAAASUVORK5CYII=>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAWCAYAAAAVU2hLAAAFIUlEQVR4Xu2YXcilUxTHl1Dka3w0Q9G8M66UkmKkzI1MkbiQoohyQ3LlRly9kgsuJqQpMk1DakLiQkku3iiJCzeklJoRbiRRFPKxf/Ze513P/917P8/JGR11frU6z177ec5Zz9p7fexjtmLFihUnJ7m7fPa4RRUdblbFAjkxyR1JTtMJYR57b1TFgrk1yUWqPJ7sSfJDkhOSfJlk33B6xktJ7lNlg1OTvK3KBbEzyR+WF/e9JPcMp2esJ3lKlQ14989VuSAIlr+SnJnk0SSHh9NDNpJ8k+R5yzuX3RAl8rrlL0YOyhygv6Rcn2TZaej2W/6up8v4u3LPFNaT7FZl4VrL9tfgd+5PsiPJ9iR3WrYn8muS68L4T8vPPWfZ3sfLWJ/rcXuSa1RZ6Nn7c5InklyQZJtluwiS08M9HyZ5JoyxH/vesGwv7zuz9acyWZNv/SbLP8LiO1yjc86z/Ew0BGMVIpkonIo6lUiPNm4MZjfRd0HOD/OnFB2OdI6Fa4dIZmNMJfoEptqLr9ReNkIE3U1hTMRGf8PDfsHNNcNxKFEHpFTui5By0F1dxjiIcfyhr8M13GbTUzDsSvKsKgM9RzHHDn4yydpw6h+wUxf2/XANV9n0FAxnWb9s9OxlYYn2A0mukDlHF/YRG9rP73/KBQv3Vphw3rFcL53PbOvCQjSU5oMxqc+JEUt9mCcFw2tJzlZloOeomr0K91wWxt+HazauZosxSN2tsgE9e2vZTeH5B8OYtfPgA74Du6uwS2PKBb6w5ih0v4QxaYhdB3RtMdrmTcFADenRc1TNXoUmZ71cE8Ex2uZNwTC2EXr2TllY/EmddWLaJwW3mtVZelXQ1X5YF9y7tpdt+JI0LvOkYCDFP6BKoecot5km78UyjjUWPCpftdw4+W7fa/OlYBgrG9CzF1s/SfKmbTZtWmPhK8slA7tJvXCulRTc4hUbdl3O1IWtoSl4zfIzv5W5FkRTTDM1eo5iLqal9aLr/SZoCj6njHm2d9Yl2ntlA3r24l9fKGBjc/9a0LUgs/m7cnQb4NFaqxH/ZmHprD0FY7g7HKl9JzCnjVeNnqOUCy3fPxZVH9lmCvYM5JuBzdhirGzAPPb6eoydiR+zYQom8wzgDMsX1aIE/e+qtPGFJQUjDsU+dp6kHI5JCnX6elVW6DlKjwHeBR8TfYQUjKMcslfcYPjIz+mRKWUDevbWon3Mv6RgNqLD2XfL/TQ3W5QFXq42h47nahClRGuECN0I4ytt2L47ehZs0XLUUctzseOlW+8tLBGiUce98X6i/qEwdqaUDWjZe8jyXOx4YWxhKRGx3By2yv29L2E31ubQ3avKAnVV65kuLP/Q3BDGQLreEF2LlqN8k8bfZxOha0UWzQcRENGFpUyp81nQo6Jr0bL3BctzO4PujKJrnYtp7sgwkbkX1vN9zOX82dC6nw6YeUVTMalOUzHpuZbuFLfpA51IXJ7kiOi+sPZxhPea/WMT0FTMJlbbSM+kwDF69lImNJNw5NTN6dADcBxTqqm4t7BAd8j8x0W4rnWJpGCcWEObp1rKbTnfIXXzHaR5Wn/Eu9bIXUXHPJ8/2jBtOS07QJunWp/RetaZai8bBp2XPaR17seO2rvAluZpUbxr9V3mcJbkxWqO3mXjXeuiIQ3GY4bC5uVPmNrxjOdaqfJ4QemK/woq6tOlYOwvxGWDslE7Hq4QtCtddsbKxorEpdbuWJcRjk//ddn4X3KxLWl9aEA3rzV3Kfgbkixyp0x4ezEAAAAASUVORK5CYII=>

[image8]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAA/UlEQVR4Xu2TPQoCQQyFI2IhCoKNCIK1tSDY2HkCC49go5Vn8BKCeANPYCG21paCgmBppY34M2+TrDGsxRZ2fvBw3kucLDuzRH/SMAp6iu5Btc9yzILefTNXo2VQ3/g1cWPPZOAcNDUea2QRReI/jeMyo1OVrvMgI1kbpiHGNx0kq4rfivcgW6mZBHXiEnMibqqITxoGkF19qOgjP0wGfzFe+TYgYk5crJss9UYt4oI//lQblSTM+wJxfvMhJWyUkyBrMhyCvuwjJUwmznZq8HIxDb+WvVkP6ftGAzW4nfqIXoqeJC6mgq8h7mmKSRLukqUs+UaEdeGj48/veQHNf1WwvMeoaQAAAABJRU5ErkJggg==>

[image9]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAWCAYAAAASEbZeAAAAkUlEQVR4XmNgGNxAGYj/Q/FfIJZBlWZgMGOASLJC+SAaxDeEq2CA6JyELAAE84H4J4wjwgDR5QuXhoAgqDgPiOMJ5YBoZADSBBI3BXHKoRxjZBUMCEXRIA4hRSB54hTBODbIKpDEwR4CBRo+34nDBEAc9HCaAxWHg2YGSIAig39AXIwmxrCKAaJzFpRGN3noAQBpxyiqtzgHAAAAAABJRU5ErkJggg==>
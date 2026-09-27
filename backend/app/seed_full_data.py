import asyncio
from sqlalchemy import select
from app.core.database import AsyncSessionLocal
from app.models import Category, Procedure, ProcedureForm, Article, KnowledgeChunk

async def seed_full_knowledge():
    async with AsyncSessionLocal() as session:
        # Lấy category ids
        res = await session.execute(select(Category))
        cats = {c.code: c.id for c in res.scalars().all()}
        if not cats:
            print("Chưa có danh mục, vui lòng chạy init_db trước.")
            return

        print("-> Đang nạp bổ sung 10 kịch bản thủ đoạn lừa đảo và các thủ tục hành chính nâng cao...")

        # 1. Bổ sung thủ tục hành chính
        new_procedures = [
            Procedure(
                category_id=cats.get("cu_tru"),
                code="TTHC-BCA-03",
                title="Đăng ký tạm trú, gia hạn tạm trú tại xã Đức Hợp",
                target_audience="Công dân đến sinh sống tại xã Đức Hợp ngoài nơi thường trú từ 30 ngày trở lên",
                competent_authority="Công an xã Đức Hợp",
                execution_method="Trực tiếp tại Công an xã hoặc trực tuyến qua Cổng DVC Bộ Công an / Ứng dụng VNeID",
                required_documents=[
                    "Tờ khai thay đổi thông tin cư trú (Mẫu CT01).",
                    "Giấy tờ chứng minh chỗ ở hợp pháp (Hợp đồng thuê nhà, mượn nhà hoặc văn bản đồng ý của chủ trọ).",
                    "Căn cước công dân hoặc số định danh cá nhân của người đăng ký."
                ],
                steps=[
                    {"step": 1, "title": "Kê khai hồ sơ", "desc": "Điền mẫu CT01 và xin xác nhận của chủ nhà trọ/chỗ ở hợp pháp."},
                    {"step": 2, "title": "Nộp hồ sơ", "desc": "Nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp hoặc nộp online qua Cổng DVC."},
                    {"step": 3, "title": "Kiểm tra thẩm duyệt", "desc": "Cán bộ kiểm tra hồ sơ, xuống địa bàn xác minh thực tế nơi ở trọ."},
                    {"step": 4, "title": "Trả kết quả", "desc": "Nhận kết quả đăng ký tạm trú (thời hạn tạm trú tối đa 02 năm/lần gia hạn)."}
                ],
                processing_time="03 ngày làm việc kể từ ngày nhận đủ hồ sơ",
                fee="15.000 VNĐ (trực tiếp) / 7.000 VNĐ (trực tuyến)",
                online_url="https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26291",
                is_active=True
            ),
            Procedure(
                category_id=cats.get("cu_tru"),
                code="TTHC-BCA-04",
                title="Cấp thẻ Căn cước cho người dân theo Luật Căn cước 2023",
                target_audience="Công dân từ đủ 14 tuổi trở lên bắt buộc; Công dân từ 0 - 14 tuổi cấp theo nhu cầu",
                competent_authority="Công an huyện Kim Động tiếp nhận hồ sơ; Công an xã Đức Hợp hỗ trợ hướng dẫn",
                execution_method="Đăng ký lịch hẹn online trên Cổng DVC, đến thu nhận vân tay, mống mắt, ảnh tại Bộ phận Một cửa",
                required_documents=[
                    "Đối với trẻ em dưới 6 tuổi: Người đại diện hợp pháp kê khai qua Cổng DVC (không thu nhận sinh trắc học).",
                    "Đối với công dân từ 6 tuổi trở lên: Đến trực tiếp cơ quan Công an để thu nhận hình ảnh khuôn mặt, vân tay và mống mắt.",
                    "Không cần mang theo giấy tờ nếu thông tin đã đầy đủ trên Cơ sở dữ liệu quốc gia về dân cư."
                ],
                steps=[
                    {"step": 1, "title": "Đặt lịch hẹn", "desc": "Đặt lịch trên Cổng DVC hoặc VNeID để chọn ngày giờ làm việc thuận tiện."},
                    {"step": 2, "title": "Thu nhận sinh trắc học", "desc": "Thu nhận vân tay, ảnh chân dung và quét mống mắt công nghệ cao."},
                    {"step": 3, "title": "Kiểm tra thông tin", "desc": "Ký biên bản xác nhận thông tin in trên thẻ Căn cước."},
                    {"step": 4, "title": "Nhận thẻ", "desc": "Nhận thẻ Căn cước trực tiếp hoặc qua dịch vụ chuyển phát bưu điện về tận nhà."}
                ],
                processing_time="07 ngày làm việc",
                fee="Miễn lệ phí cấp lần đầu cho công dân đủ 14 tuổi; Đổi/Cấp lại thu theo Thông tư Bộ Tài chính",
                online_url="https://dichvucong.bocongan.gov.vn",
                is_active=True
            ),
            Procedure(
                category_id=cats.get("giao_thong"),
                code="TTHC-BCA-05",
                title="Nộp phạt vi phạm giao thông (Phạt nguội) trực tuyến",
                target_audience="Cá nhân, tổ chức bị xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ",
                competent_authority="Công an cấp xã / Đội CSGT Công an huyện",
                execution_method="Trực tuyến 100% trên Cổng Dịch vụ công Quốc gia",
                required_documents=[
                    "Biên bản vi phạm hành chính hoặc Thông báo vi phạm giao thông (kèm mã số quyết định).",
                    "Tài khoản định danh điện tử VNeID hoặc tài khoản Cổng DVC Quốc gia.",
                    "Thẻ ngân hàng hoặc tài khoản thanh toán online để nộp tiền."
                ],
                steps=[
                    {"step": 1, "title": "Tra cứu quyết định", "desc": "Vào Cổng DVC Quốc gia -> Tra cứu xử phạt VPHC -> Nhập số biên bản."},
                    {"step": 2, "title": "Thanh toán", "desc": "Chọn ngân hàng/ví điện tử để thanh toán tiền phạt trực tuyến."},
                    {"step": 3, "title": "Nhận giấy tờ", "desc": "Đăng ký nhận lại giấy tờ tạm giữ (nếu có) qua dịch vụ bưu chính công ích."}
                ],
                processing_time="Giải quyết ngay trên môi trường điện tử",
                fee="Theo số tiền ghi trên Quyết định xử phạt vi phạm hành chính",
                online_url="https://dichvucong.gov.vn/p/home/dvc-thanh-toan-vi-pham-giao-thong.html",
                is_active=True
            ),
            Procedure(
                category_id=cats.get("pccc"),
                code="TTHC-BCA-06",
                title="Hướng dẫn an toàn PCCC đối với hộ gia đình, nhà ở kết hợp kinh doanh",
                target_audience="Toàn thể các hộ gia đình sinh sống và kinh doanh trên địa bàn xã Đức Hợp",
                competent_authority="Công an xã Đức Hợp phối hợp UBND xã Đức Hợp",
                execution_method="Đăng ký cam kết an toàn PCCC trực tiếp tại Trụ sở Công an xã Đức Hợp",
                required_documents=[
                    "Bản cam kết bảo đảm an toàn PCCC của chủ hộ gia đình.",
                    "Sơ đồ phương án thoát nạn khi xảy ra sự cố cháy nổ.",
                    "Biên bản kiểm tra an toàn PCCC định kỳ."
                ],
                steps=[
                    {"step": 1, "title": "Trang bị phương tiện", "desc": "Trang bị tối thiểu 01 bình chữa cháy xách tay và mở lối thoát nạn thứ 2 (chuồng cọp có cửa thoát)."},
                    {"step": 2, "title": "Ký cam kết", "desc": "Liên hệ Cán bộ phụ trách PCCC Công an xã để nhận mẫu và ký bản cam kết an toàn."},
                    {"step": 3, "title": "Tập huấn kỹ năng", "desc": "Tham gia các buổi tuyên truyền, diễn tập PCCC tổ liên gia tại thôn xóm."}
                ],
                processing_time="Trong ngày",
                fee="Miễn phí",
                online_url=None,
                is_active=True
            )
        ]

        # Kiểm tra xem thủ tục đã có chưa trước khi thêm
        for p in new_procedures:
            exist = (await session.execute(select(Procedure).where(Procedure.code == p.code))).scalars().first()
            if not exist:
                session.add(p)

        # 2. Bổ sung 9 kịch bản cảnh báo lừa đảo (Cộng bài 1 đã có thành 10 bài hoàn chỉnh)
        scam_alerts = [
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 2: Lừa đảo tuyển 'Cộng tác viên xử lý đơn hàng ảo' trên Shopee, TikTok, Lazada",
                slug="canh-bao-tuyen-cong-tac-vien-shopee-tiktok",
                summary="Đối tượng dụ dỗ làm nhiệm vụ xem video, chuyển tiền mua đơn hàng hưởng hoa hồng 10-20%, sau đó giam tiền và chiếm đoạt hàng trăm triệu đồng.",
                content="""<p>Thủ đoạn này nhắm vào phụ nữ nội trợ, học sinh sinh viên và người có nhu cầu kiếm thêm thu nhập tại nhà. Ban đầu, đối tượng cho nạp số tiền nhỏ (vài trăm nghìn) và trả hoa hồng sòng phẳng để tạo lòng tin. Khi số tiền nạp lên đến hàng chục, hàng trăm triệu, chúng báo lỗi hệ thống, sai cú pháp và yêu cầu nạp thêm để giải ngân, sau đó cắt đứt liên lạc.</p>""",
                image_url="/static/images/canh-bao-ctv.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Mời chào 'việc nhẹ lương cao, chỉ cần điện thoại có mạng, làm tại nhà 300k - 500k/ngày'.",
                    "Yêu cầu chuyển tiền vào tài khoản cá nhân để làm nhiệm vụ kích cầu sản phẩm.",
                    "Bịa ra lý do lỗi lệnh, chưa đủ điểm tín nhiệm, bắt nộp thêm tiền mới rút được vốn."
                ],
                prevention_advice=[
                    "Tuyệt đối KHÔNG tham gia các hội nhóm tuyển CTV nạp tiền làm nhiệm vụ.",
                    "Các sàn TMĐT chính thống không bao giờ tuyển CTV qua hình thức chuyển tiền thanh toán đơn hàng ảo.",
                    "Nếu bị lừa, sao kê lịch sử giao dịch và đến Công an xã Đức Hợp trình báo ngay lập tức."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 3: Lừa đảo đầu tư sàn tài chính, chứng khoán quốc tế và tiền ảo siêu lợi nhuận",
                slug="canh-bao-lua-dao-san-tai-chinh-tien-ao",
                summary="Chiêu trò lập các sàn giao dịch giả mạo, cam kết lợi nhuận 30-50%/tháng, can thiệp lệnh kỹ thuật cho nhà đầu tư cháy sạch tài khoản.",
                content="""<p>Các đối tượng đóng vai chuyên gia tài chính thành đạt trên Facebook, Zalo, khoe ảnh xe sang, tiền bạc để lôi kéo người dân tham gia đầu tư vào các app/web lạ không được Nhà nước cấp phép.</p>""",
                image_url="/static/images/canh-bao-tien-ao.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Cam kết 'đầu tư chắc thắng, bao lỗ, rút tiền linh hoạt, lợi nhuận khủng'.",
                    "Hướng dẫn cài đặt các app lạ qua file gửi ngoài kho ứng dụng chính thức.",
                    "Khi người dân muốn rút tiền thì báo lỗi, bắt đóng thuế thu nhập cá nhân hoặc phí mở cổng rút tiền."
                ],
                prevention_advice=[
                    "Pháp luật Việt Nam hiện chưa công nhận và bảo hộ tiền ảo hay các sàn Forex quốc tế.",
                    "Cảnh giác cao độ với mọi lời mời gọi đầu tư lợi nhuận bất thường.",
                    "Tìm hiểu kỹ giấy phép hoạt động của các công ty quản lý quỹ trước khi xuống tiền."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 4: Hack Facebook, Zalo gọi video Deepfake mượn tiền khẩn cấp",
                slug="canh-bao-deepfake-hack-tai-khoan-muon-tien",
                summary="Chiếm đoạt tài khoản mạng xã hội của người thân đi làm xa hoặc ở nước ngoài, dùng công nghệ Deepfake giả giọng nói khuôn mặt để vay tiền.",
                content="""<p>Đối tượng chiếm quyền quản trị tài khoản, đọc kỹ các tin nhắn cũ để bắt chước văn phong, sau đó nhắn tin cho bố mẹ, người thân nhờ chuyển tiền gấp vì tai nạn hoặc có việc đột xuất. Khi nạn nhân gọi video kiểm tra, chúng dùng phần mềm ghép mặt chuyển động vài giây rồi viện cớ mạng lag tắt máy.</p>""",
                image_url="/static/images/canh-bao-deepfake.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Hỏi mượn tiền gấp chuyển vào tài khoản người thứ 3 (không trùng tên người thân).",
                    "Cuộc gọi video ngắn vài giây, hình ảnh mờ, chập chờn, cử động miệng không khớp tiếng.",
                    "Hối thúc chuyển tiền ngay vì tình huống cấp bách, không cho thời gian suy nghĩ."
                ],
                prevention_advice=[
                    "Khi nhận tin nhắn mượn tiền, BẮT BUỘC gọi điện thoại trực tiếp vào số di động truyền thống để xác minh.",
                    "Không chuyển tiền vào số tài khoản lạ có tên không trùng với người thân.",
                    "Bật xác thực bảo mật 2 lớp cho toàn bộ tài khoản mạng xã hội của mình."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 5: Mạo danh nhân viên Điện lực, Viễn thông dọa cắt dịch vụ đòi tiền phạt",
                slug="canh-bao-mao-danh-dien-luc-vien-thong",
                summary="Gọi điện thông báo người dân đang nợ cước tiền điện, số điện thoại bị lợi dụng vi phạm pháp luật và dọa khóa thuê bao sau 2 giờ.",
                content="""<p>Đối tượng giả danh tổng đài thông báo thuê bao của người dân sắp bị thu hồi vì gửi tin nhắn rác hoặc nợ cước hàng chục triệu. Sau đó kết nối với đối tượng giả công an để dọa dẫm, yêu cầu khai báo tài sản.</p>""",
                image_url="/static/images/canh-bao-dien-luc.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Bấm phím 9 để gặp tổng đài viên giải quyết nợ cước viễn thông/tiền điện.",
                    "Dọa cắt điện, khóa SIM ngay trong vòng 2 giờ nếu không đóng tiền.",
                    "Yêu cầu chuyển tiền vào tài khoản cá nhân để 'tạm giữ phục vụ thanh tra'."
                ],
                prevention_advice=[
                    "Các cơ quan Điện lực, Viễn thông có quy trình thông báo văn bản hoặc tin nhắn chính thức, không gọi điện hăm dọa.",
                    "Tuyệt đối không chuyển tiền vào bất kỳ tài khoản cá nhân nào.",
                    "Liên hệ số chăm sóc khách hàng chính thức của Điện lực/Nhà mạng để kiểm tra lại."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 6: Lừa đảo cho vay tiền online lãi suất thấp, giải ngân siêu tốc",
                slug="canh-bao-lua-dao-vay-tien-online",
                summary="Đánh vào tâm lý cần vốn gấp, các app cho vay bắt người vay nộp đủ loại phí (phí bảo hiểm khoản vay, phí sai số tài khoản) trước khi nhận tiền.",
                content="""<p>Người dân nộp hồ sơ vay 50 triệu nhưng đối tượng sửa một chữ số trong số tài khoản ngân hàng trên hệ thống, rồi báo 'sai thông tin giải ngân, tài khoản bị đóng băng'. Muốn sửa phải nộp thêm 10 - 20 triệu tiền bảo hiểm, cứ thế người vay bị cuốn vào vòng xoáy mất tiền mà không nhận được một đồng vay nào.</p>""",
                image_url="/static/images/canh-bao-vay-tien.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Quảng cáo cho vay dễ dàng, không cần chứng minh thu nhập, nợ xấu vẫn vay được.",
                    "Yêu cầu nộp 'phí hồ sơ', 'phí bảo hiểm rủi ro' trước khi giải ngân.",
                    "Bịa ra lỗi sai số tài khoản và bắt nộp thêm tiền để chỉnh sửa."
                ],
                prevention_advice=[
                    "Không có ngân hàng hay tổ chức tín dụng hợp pháp nào bắt nộp tiền trước để được vay tiền.",
                    "Chỉ vay vốn tại các Ngân hàng chính thống hoặc Quỹ tín dụng nhân dân cơ sở.",
                    "Cảnh giác với các tin nhắn mời chào vay tiền qua mạng xã hội."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 7: Bẫy tình cảm 'Gửi quà kiện hàng từ nước ngoài' bị kẹt tại hải quan",
                slug="canh-bao-gui-qua-nuoc-ngoai-hai-quan",
                summary="Làm quen qua mạng vờ yêu đương, hứa gửi thùng quà chứa ngoại tệ và trang sức đắt tiền, sau đó đồng bọn gọi điện giả làm hải quan đòi phí lót tay.",
                content="""<p>Thủ đoạn này thường nhắm vào phụ nữ đơn thân hoặc lớn tuổi. Kẻ lừa đảo tự xưng là phi công, doanh nhân, binh lính nước ngoài gửi tặng thùng quà giá trị cao. Sau đó xuất hiện người tự xưng nhân viên sân bay/hải quan yêu cầu chuyển tiền phạt, tiền thông quan để nhận quà.</p>""",
                image_url="/static/images/canh-bao-hai-quan.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Làm quen kết bạn vờ hứa hẹn tương lai, hôn nhân.",
                    "Chụp ảnh biên lai gửi hàng giả có ghi rõ bên trong có nhiều tiền USD và vàng bạc.",
                    "Đối tượng giả hải quan gọi điện yêu cầu chuyển tiền vào tài khoản cá nhân để nộp phạt."
                ],
                prevention_advice=[
                    "Không tin vào những mối quan hệ ảo với người chưa từng gặp mặt ngoài đời.",
                    "Pháp luật nghiêm cấm việc gửi tiền mặt trong bưu phẩm bưu kiện gửi từ nước ngoài.",
                    "Nếu bị đòi nộp tiền để nhận kiện hàng lạ, từ chối nhận hàng và báo cơ quan Công an."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 8: Chiêu trò 'Trúng thưởng xe máy, tivi' yêu cầu nộp thuế phí trước",
                slug="canh-bao-trung-thuong-nop-thue",
                summary="Gửi tin nhắn hoặc gọi điện chúc mừng người dân đã trúng thưởng chương trình tri ân khách hàng, yêu cầu đóng 10% thuế trước khi nhận giải.",
                content="""<p>Đối tượng thông báo người dân trúng giải đặc biệt (xe SH, sổ tiết kiệm 100 triệu). Sau khi nạn nhân chuyển tiền thuế hoặc cước phí vận chuyển thì đối tượng lập tức chặn liên lạc và biến mất.</p>""",
                image_url="/static/images/canh-bao-trung-thuong.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Thông báo trúng thưởng ngẫu nhiên từ các chương trình mà người dân chưa bao giờ tham gia.",
                    "Thúc giục nếu không nộp tiền trong 24h thì giải thưởng sẽ chuyển cho người khác.",
                    "Yêu cầu nộp tiền qua thẻ cào điện thoại hoặc chuyển khoản cá nhân."
                ],
                prevention_advice=[
                    "Mọi chương trình khuyến mại trúng thưởng hợp pháp đều phải đăng ký với Bộ Công Thương.",
                    "Không tham gia nhận các giải thưởng không rõ nguồn gốc.",
                    "Tuyệt đối không mua thẻ cào điện thoại nạp cho người lạ."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 9: Giả mạo tin nhắn thương hiệu Ngân hàng (SMS Brandname giả mạo)",
                slug="canh-bao-sms-brandname-gia-mao",
                summary="Sử dụng thiết bị phát sóng BTS giả chèn tin nhắn vào đúng luồng tin nhắn thật của ngân hàng, lừa người dân bấm vào link để chiếm tài khoản.",
                content="""<p>Tin nhắn có nội dung như 'Tài khoản của bạn đang bị đăng nhập tại địa điểm lạ, vui lòng xác nhận tại link...'. Khi người dân bấm vào link giả mạo có giao diện y hệt ngân hàng và nhập mã OTP, toàn bộ số tiền sẽ bị chuyển sạch.</p>""",
                image_url="/static/images/canh-bao-sms-fake.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Tin nhắn xuất hiện trong cùng hộp thoại của ngân hàng quen thuộc (Vietcombank, BIDV, Agribank...).",
                    "Nội dung đe dọa tài khoản bị khóa hoặc trừ tiền bất thường.",
                    "Đường dẫn trong tin nhắn có tên miền lạ gần giống ngân hàng (như vietcombank-ebank.xyz, bidv-smart.top...)."
                ],
                prevention_advice=[
                    "Ngân hàng KHÔNG BAO GIỜ gửi tin nhắn đính kèm đường link yêu cầu đăng nhập mật khẩu hay OTP.",
                    "Chỉ đăng nhập Internet Banking qua ứng dụng đã cài trên điện thoại hoặc website chính thức có đuôi .com.vn.",
                    "Khóa khẩn cấp thẻ trên ứng dụng nếu lỡ bấm vào đường link lạ."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 10: Giả danh giáo viên, nhân viên bệnh viện báo 'Con đang cấp cứu cần tiền mổ gấp'",
                slug="canh-bao-con-dang-cap-cuu-can-tien-gap",
                summary="Đánh vào tình mẫu tử, gọi điện cho phụ huynh thông báo con bị ngã chấn thương sọ não đang ở phòng cấp cứu, bắt chuyển tiền gấp để bác sĩ mổ.",
                content="""<p>Thủ đoạn này gây hoang mang tột độ cho phụ huynh. Đối tượng gọi điện nói giọng khẩn thiết, thậm chí có tiếng còi xe cứu thương ở hậu cảnh, yêu cầu phụ huynh chuyển ngay 20 - 50 triệu viện phí vào tài khoản cá nhân của 'bác sĩ' để ký cam kết mổ khẩn cấp.</p>""",
                image_url="/static/images/canh-bao-cap-cuu.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Gọi điện trong giờ học thông báo con bị tai nạn nguy kịch đang cấp cứu.",
                    "Đọc chính xác tên học sinh, trường lớp để tạo lòng tin (do rò rỉ dữ liệu).",
                    "Thúc giục chuyển tiền ngay vì chậm trễ nguy hiểm đến tính mạng."
                ],
                prevention_advice=[
                    "Khi nhận cuộc gọi, PHỤ HUYNH PHẢI THẬT BÌNH TĨNH.",
                    "Liên hệ ngay cho Giáo viên chủ nhiệm hoặc Ban giám hiệu nhà trường để xác minh tình trạng của con.",
                    "Bệnh viện luôn ưu tiên cấp cứu bệnh nhân trước, không bao giờ vì chưa có tiền chuyển khoản mà từ chối cứu người!"
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 11: Lừa đảo bán 'Combo du lịch giá rẻ', phòng khách sạn, vé máy bay giả mạo dịp nghỉ lễ",
                slug="canh-bao-combo-du-lich-ve-may-bay-gia-re",
                summary="Lập fanpage giả mạo công ty du lịch uy tín, rao bán tour nghỉ dưỡng giá rẻ hơn 50%, yêu cầu chuyển tiền cọc rồi chặn liên lạc.",
                content="""<p>Kẻ gian tạo các trang mạng xã hội giả mạo các đại lý du lịch, khách sạn nổi tiếng có tích xanh giả. Sau khi khách hàng chuyển tiền cọc hoặc thanh toán 100%, đối tượng gửi mã code vé giả mạo rồi chặn số điện thoại.</p>""",
                image_url="/static/images/canh-bao-du-lich.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Giá tour, phòng khách sạn rẻ bất thường so với mặt bằng chung thị trường.",
                    "Yêu cầu chuyển tiền đặt cọc 50-100% vào tài khoản cá nhân thay vì tài khoản doanh nghiệp.",
                    "Gửi mã vé máy bay giả (code chưa thanh toán) khiến khách ra đến sân bay mới biết bị lừa."
                ],
                prevention_advice=[
                    "Nên đặt dịch vụ du lịch qua các công ty lữ hành có thương hiệu, pháp nhân rõ ràng và địa chỉ cụ thể.",
                    "Kiểm tra kỹ thông tin tài khoản thụ hưởng, ưu tiên chuyển khoản vào tài khoản mở tại ngân hàng mang tên doanh nghiệp.",
                    "Liên hệ trực tiếp đến hãng hàng không hoặc khách sạn để kiểm tra tình trạng xác nhận mã đặt chỗ trước khi chuyển tiền."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 12: Chiêu trò nâng cấp SIM 4G/5G, dẫn dụ bấm cú pháp chuyển tiếp cuộc gọi (**21*) để cướp OTP ngân hàng",
                slug="canh-bao-cuop-sim-chuyen-tiep-cuoc-goi-otp",
                summary="Mạo danh nhân viên nhà mạng hướng dẫn đổi SIM 4G/5G miễn phí qua cú pháp **21*, đánh cắp quyền nhận cuộc gọi OTP để chiếm đoạt tài khoản.",
                content="""<p>Đối tượng giả danh nhân viên các nhà mạng gọi điện hướng dẫn người dân nâng cấp SIM 4G lên 5G miễn phí. Chúng hướng dẫn người dân soạn tin nhắn theo cú pháp chuyển tiếp cuộc gọi như **21*Số_điện_thoại_kẻ_gian# gửi đi, giúp chúng nhận cuộc gọi đọc mã OTP từ ngân hàng và rút tiền.</p>""",
                image_url="/static/images/canh-bao-sim.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Tự xưng nhân viên nhà mạng hỗ trợ nâng cấp SIM từ xa không cần ra điểm giao dịch.",
                    "Dụ dỗ nạn nhân bấm phím cú pháp điện thoại có chứa **21* hoặc *43*.",
                    "Sau khi bấm cú pháp, máy của nạn nhân bị mất sóng hoặc không nhận được cuộc gọi đến."
                ],
                prevention_advice=[
                    "Cú pháp **21*... là tính năng chuyển tiếp cuộc gọi của nhà mạng, tuyệt đối không bấm theo lời hướng dẫn của người lạ.",
                    "Chỉ nâng cấp đổi SIM trực tiếp tại các điểm giao dịch, cửa hàng ủy quyền chính thức của các nhà mạng viễn thông.",
                    "Nếu thấy SIM bị mất sóng bất thường, liên hệ ngay tổng đài nhà mạng và khóa các ứng dụng ngân hàng liên kết."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 13: Giả danh Cán bộ Công an, Viện kiểm sát gọi điện dọa 'dính án ma túy', gửi lệnh bắt qua Zalo",
                slug="canh-bao-gia-cong-an-vien-kiem-sat-lenh-bat-zalo",
                summary="Gọi điện hăm dọa công dân đang liên quan đến đường dây buôn ma túy, rửa tiền xuyên quốc gia; gửi Lệnh bắt giam giả mạo qua Zalo ép chuyển tiền vào tài khoản an toàn.",
                content="""<p>Kẻ lừa đảo đóng giả cán bộ công an hoặc kiểm sát viên gọi điện thông báo số tài khoản hoặc số căn cước của nạn nhân đang nằm trong chuyên án ma túy lớn, gửi hình ảnh Lệnh bắt bị can giả mạo qua Zalo để dọa dẫm, yêu cầu chuyển toàn bộ tiền tiết kiệm vào tài khoản an toàn.</p>""",
                image_url="/static/images/canh-bao-lenh-bat.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Xưng danh cán bộ cơ quan điều tra, nói năng gay gắt, đe dọa khởi tố bắt giam.",
                    "Gửi hình ảnh lệnh bắt, quyết định truy nã giả mạo qua Zalo, mạng xã hội.",
                    "Yêu cầu công dân chuyển toàn bộ tiền vào tài khoản cá nhân do đối tượng cung cấp với danh nghĩa tài khoản an toàn."
                ],
                prevention_advice=[
                    "Cơ quan Công an, Viện kiểm sát, Tòa án KHÔNG BAO GIỜ làm việc với công dân qua điện thoại hoặc mạng xã hội.",
                    "Cơ quan nhà nước không bao giờ gửi Lệnh bắt, Giấy triệu tập qua Zalo hay yêu cầu chuyển tiền vào tài khoản tạm giữ cá nhân.",
                    "Khi nhận cuộc gọi hăm dọa tương tự, công dân bình tĩnh cúp máy và đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi 02213.815.999."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 14: Giả mạo biên lai chuyển tiền thành công (Fake Bill) để chiếm đoạt hàng hóa của người bán",
                slug="canh-bao-fake-bill-chuyen-tien-mua-hang",
                summary="Dùng phần mềm tạo ảnh chụp biên lai chuyển khoản ngân hàng giả giống hệt thật, viện cớ nghẽn mạng liên ngân hàng để giục giao hàng.",
                content="""<p>Thủ đoạn này nhắm vào các cửa hàng kinh doanh, người buôn bán trực tuyến. Kẻ gian dùng các ứng dụng làm giả biên lai chuyển khoản (Fake Bill) với số tiền, tên người nhận y như thật rồi giơ ảnh cho người bán xem để giục giao hàng.</p>""",
                image_url="/static/images/canh-bao-fake-bill.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Đưa ảnh chụp màn hình chuyển tiền thành công sắc nét nhưng tiền thực tế chưa vào tài khoản.",
                    "Hối thúc vì đang vội, viện cớ ngân hàng đang bảo trì nên tiền chậm nổi.",
                    "Kích động tâm lý người bán bằng việc tỏ vẻ bức xúc nếu không được nhận hàng ngay."
                ],
                prevention_advice=[
                    "Người bán hàng CHỈ GIAO HÀNG khi chính ứng dụng ngân hàng của mình thông báo đã nhận được tiền (biến động số dư).",
                    "Không tin tưởng vào bất kỳ ảnh chụp màn hình hay thông báo chuyển tiền từ điện thoại của người mua.",
                    "Nên trang bị loa thông báo thanh toán QR tự động phát âm thanh khi tiền đã về tài khoản."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 15: Tuyển người mẫu nhí, bình chọn cuộc thi ảnh, vẽ tranh thiếu nhi để dụ phụ huynh nạp tiền làm nhiệm vụ",
                slug="canh-bao-tuyen-nguoi-mau-nhi-binh-chon-cuoc-thi",
                summary="Lập fanpage giả mạo cuộc thi 'Tài năng nhí', 'Mẫu nhí thời trang', dụ cha mẹ đăng ký rồi yêu cầu chuyển tiền khảo sát, làm nhiệm vụ bình chọn.",
                content="""<p>Kẻ lừa đảo lập fanpage quảng cáo tìm kiếm người mẫu nhí cho các thương hiệu thời trang trẻ em, yêu cầu cha mẹ tham gia các vòng thử thách như mua đơn hàng tăng tương tác, bình chọn bằng điểm thưởng nạp tiền rồi chiếm đoạt.</p>""",
                image_url="/static/images/canh-bao-mau-nhi.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Khen ngợi ngoại hình con và hứa hẹn mức cát-xê cao ngất ngưởng.",
                    "Đưa vào các nhóm làm nhiệm vụ tăng điểm bình chọn cho con bằng cách nạp tiền mua sản phẩm.",
                    "Dọa nếu phụ huynh dừng làm nhiệm vụ thì hồ sơ của con sẽ bị loại và mất toàn bộ số tiền đã nộp."
                ],
                prevention_advice=[
                    "Cảnh giác với các cuộc thi ảnh, tìm kiếm tài năng nhí trên mạng xã hội không rõ đơn vị tổ chức.",
                    "Các nhãn hàng chân chính tuyển mẫu nhí luôn có hợp đồng và buổi thử trang phục trực tiếp, không bao giờ bắt phụ huynh nạp tiền.",
                    "Bảo vệ hình ảnh và thông tin riêng tư của con em mình, tránh chia sẻ tràn lan trên mạng."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 16: Lừa đảo dịch vụ 'Thu hồi tiền treo, cam kết lấy lại tiền bị lừa qua mạng' (Bẫy lừa lần 2)",
                slug="canh-bao-dich-vu-thu-hoi-tien-bi-lua-dao-lan-2",
                summary="Mạo danh Văn phòng Luật sư, Cục An ninh mạng cam kết lấy lại 100% số tiền đã bị lừa đảo trên mạng, yêu cầu nộp trước phí hồ sơ và phí tra soát.",
                content="""<p>Nắm bắt tâm lý hoang mang, tiếc tiền của nạn nhân, kẻ xấu lập ra các trang mạng mạo danh 'Cục An ninh mạng' cam kết thu hồi tiền bị lừa trong 24 giờ, yêu cầu nộp 10 - 20% phí hồ sơ rồi lừa tiếp lần hai.</p>""",
                image_url="/static/images/canh-bao-thu-hoi-tien.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Quảng cáo cam đoan lấy lại tiền bị lừa trên mạng thành công 100%.",
                    "Lập fanpage có hình ảnh phù hiệu Công an, dấu mộc văn phòng luật sư giả mạo.",
                    "Yêu cầu đóng tiền phí thủ tục, phí tra soát kỹ thuật để kéo tiền về tài khoản."
                ],
                prevention_advice=[
                    "Cục An ninh mạng và các cơ quan Công an KHÔNG BAO GIỜ có dịch vụ thu hồi tiền lừa đảo có thu phí trên mạng xã hội.",
                    "Không có cá nhân hay văn phòng luật sư nào có quyền năng can thiệp kỹ thuật vào hệ thống ngân hàng để lấy lại tiền đã chuyển.",
                    "Khi bị lừa đảo, người dân cần đến ngay Cơ quan Công an xã Đức Hợp để nộp đơn trình báo theo đúng trình tự pháp luật."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 17: Bẫy quét mã QR độc hại (QR Phishing) dán đè tại bàn ăn, bưu phẩm ship COD hoặc trang web khuyến mãi",
                slug="canh-bao-quet-ma-qr-doc-hai-qr-phishing",
                summary="Dán đè mã QR lừa đảo lên mã chuyển khoản của quán ăn hoặc in mã QR trúng thưởng trên bưu phẩm để dẫn dụ người dân truy cập web lừa đảo.",
                content="""<p>Đối tượng lén lút dán đè mã QR của mình lên bảng mã thanh toán của các quán ăn, cửa hàng hoặc gửi bưu phẩm chứa mã QR trúng thưởng dẫn đến website giả mạo đánh cắp mã OTP ngân hàng.</p>""",
                image_url="/static/images/canh-bao-qr.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Dán đè mã QR mờ nhạt hoặc tem dán mới đè lên mã thanh toán gốc của hộ kinh doanh.",
                    "Gửi bưu thiếp khuyến mại, phiếu cào trúng thưởng có in mã QR bảo quét mã nhận tiền thưởng.",
                    "Trang web sau khi quét QR yêu cầu nhập đầy đủ số thẻ ngân hàng, ngày hết hạn và mã bảo mật CVV."
                ],
                prevention_advice=[
                    "Chủ hộ kinh doanh cần thường xuyên kiểm tra bảng mã QR thanh toán tại quầy thu ngân của gia đình.",
                    "Người dân khi quét mã QR thanh toán phải kiểm tra kỹ tên chủ tài khoản thụ hưởng trước khi bấm xác nhận chuyển tiền.",
                    "Tuyệt đối không quét các mã QR không rõ nguồn gốc dán ở nơi công cộng hoặc in trên quà tặng lạ."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 18: Dụ dỗ mở và cho thuê, mua bán tài khoản ngân hàng (Tiếp tay cho tội phạm rửa tiền xuyên quốc gia)",
                slug="canh-bao-du-do-thue-mua-ban-tai-khoan-ngan-hang",
                summary="Thu mua tài khoản ngân hàng của học sinh, người dân với giá 500k - 2 triệu đồng/tháng để làm công cụ nhận tiền lừa đảo, người cho thuê sẽ bị xử lý hình sự.",
                content="""<p>Nhiều đối tượng đăng tin trên mạng tìm mua hoặc thuê tài khoản ngân hàng với giá cao. Thực chất, các tài khoản này được các đường dây tội phạm sử dụng để rửa tiền phi pháp. Người cho thuê sẽ bị xử lý hình sự về tội tiếp tay rửa tiền hoặc đồng phạm lừa đảo.</p>""",
                image_url="/static/images/canh-bao-tai-khoan.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Gạ gẫm mở tài khoản ngân hàng có thẻ ATM rồi bán lại với giá từ 500.000đ đến 2.000.000đ.",
                    "Thuê tài khoản nhận kiều hối, giao dịch tiền ảo với lời hứa không có rủi ro gì.",
                    "Sử dụng thông tin căn cước công dân của người khác để mở tài khoản ngân hàng online."
                ],
                prevention_advice=[
                    "Hành vi mua bán, cho thuê, cho mượn tài khoản ngân hàng là vi phạm pháp luật và có thể bị phạt tù đến nhiều năm.",
                    "Tuyệt đối không mở tài khoản ngân hàng giúp hoặc cho người khác mượn tài khoản thanh toán cá nhân.",
                    "Nếu đã lỡ cho thuê, bán tài khoản, phải lập tức đến ngân hàng làm thủ tục đóng tài khoản và báo cho Công an xã."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 19: Gửi bưu phẩm 'Quà tri ân khách hàng' có phiếu cào trúng thưởng hoặc thu tiền COD hàng giả mạo",
                slug="canh-bao-gui-buu-pham-qua-tri-an-thu-tien-cod",
                summary="Gửi các gói bưu phẩm không đặt mua đến tận nhà, shipper thu tiền phí 50k - 100k bên trong là rác hoặc thẻ cào lừa nạp tiền.",
                content="""<p>Kẻ gian gửi các bưu phẩm COD không đặt mua về nhà người dân khi chủ nhà đi vắng để người thân trả hộ vài chục nghìn. Bên trong chứa phiếu cào trúng thưởng kèm mã QR dẫn dụ nạp tiền nhận quà giá trị cao.</p>""",
                image_url="/static/images/canh-bao-tri-an-cod.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Bưu phẩm gửi đến trong lúc người đặt hàng vắng nhà để người thân nhận hộ và thanh toán tiền.",
                    "Bên trong gói hàng có phiếu cào may mắn trúng giải thưởng lớn (xe máy, đồ điện tử).",
                    "Yêu cầu kết bạn Zalo hoặc quét mã QR trên phiếu cào để làm thủ tục nhận giải."
                ],
                prevention_advice=[
                    "Tuyệt đối không nhận và thanh toán bất kỳ bưu phẩm COD nào mà bản thân hoặc gia đình không trực tiếp đặt mua.",
                    "Dặn dò người già và người thân trong nhà khi có shipper gọi giao hàng phải gọi điện xác minh trước.",
                    "Không làm theo các hướng dẫn quét mã nhận thưởng ghi trên bưu phẩm lạ."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 20: Bẫy nợ 'Chuyển tiền nhầm vào tài khoản' rồi xuất hiện đối tượng ép vay nặng lãi kiểu xã hội đen",
                slug="canh-bao-chuyen-nham-tien-bay-tin-dung-den",
                summary="Cố tình chuyển một số tiền nhỏ vào tài khoản người dân, sau đó gọi điện đe dọa đòi nợ với lãi suất cắt cổ kiểu tín dụng đen.",
                content="""<p>Các đối tượng cố tình chuyển tiền vào tài khoản người dân rồi gọi điện đe dọa ép trả nợ lãi suất cắt cổ lên tới 50-100%/tháng. Nếu không trả, chúng đe dọa bôi nhọ người thân trên mạng xã hội.</p>""",
                image_url="/static/images/canh-bao-chuyen-nham.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Chuyển tiền vào tài khoản người dân mà không rõ nguyên nhân.",
                    "Gọi điện yêu cầu chuyển trả lại tiền vào một số tài khoản hoàn toàn khác với tài khoản đã gửi tiền đến.",
                    "Hăm dọa, vu khống nạn nhân vay tiền quỵt nợ để ép trả tiền lãi khống."
                ],
                prevention_advice=[
                    "Khi nhận được tiền chuyển nhầm vào tài khoản, TUYỆT ĐỐI KHÔNG SỬ DỤNG số tiền đó.",
                    "Không chuyển trả tiền lại vào số tài khoản do người lạ gọi điện yêu cầu cung cấp.",
                    "Chủ động ra chi nhánh Ngân hàng sao kê và nhờ ngân hàng chuyển hoàn lại cho người gửi đúng quy trình, hoặc đến Công an xã Đức Hợp lập biên bản ghi nhận sự việc."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 21: Mạo danh Trại hè quân đội, Khóa tu mùa hè miễn phí cho học sinh rồi yêu cầu đóng quỹ làm nhiệm vụ",
                slug="canh-bao-trai-he-quan-doi-khoa-tu-mua-he-gia-mao",
                summary="Lập fanpage giả mạo chương trình 'Học kỳ trong quân đội', 'Khóa tu chùa miễn phí', lôi kéo cha mẹ vào nhóm khảo sát nạp tiền nhận vé tham dự.",
                content="""<p>Kẻ lừa đảo lập trang mạng mang tên 'Trại hè Quân đội - Chiến sĩ nhí', quảng cáo miễn phí ăn ở nhưng dẫn dụ phụ huynh vào nhóm Telegram thực hiện các lệnh chuyển tiền mua sản phẩm nhận hoàn lại 100% tiền rồi chiếm đoạt.</p>""",
                image_url="/static/images/canh-bao-trai-he.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Sử dụng trái phép hình ảnh của lực lượng Quân đội, Công an hoặc các chùa lớn.",
                    "Quảng cáo chương trình hoàn toàn miễn phí ăn ở cho học sinh trong 1 - 2 tuần.",
                    "Dẫn dụ phụ huynh vào nhóm Telegram thực hiện các lệnh chuyển tiền mua sản phẩm để giữ chỗ."
                ],
                prevention_advice=[
                    "Chương trình Học kỳ quân đội chính thống do Tỉnh đoàn, Thành đoàn phối hợp với Bộ Chỉ huy Quân sự tỉnh tổ chức và có thông báo công khai.",
                    "Không tin vào các chương trình trại hè tuyển sinh qua fanpage mạng xã hội không có trụ sở rõ ràng.",
                    "Tuyệt đối không chuyển tiền làm nhiệm vụ để đổi lấy suất tham gia trại hè cho con."
                ]
            ),
            Article(
                category_id=cats.get("canh_bao"),
                title="CẢNH BÁO 22: Giả mạo văn bản tuyển dụng công chức, viên chức hoặc hứa hẹn 'chạy việc, chạy biên chế' để nhận tiền cọc",
                slug="canh-bao-chay-viec-chay-bien-che-cong-chuc",
                summary="Rêu rao có quen biết lãnh đạo cấp cao, có suất vào biên chế ngành Công an, Giáo dục, Y tế; nhận tiền đặt cọc hàng trăm triệu rồi bỏ trốn.",
                content="""<p>Kẻ lừa đảo tự khoe có mối quan hệ thân thiết với lãnh đạo, hứa hẹn chạy biên chế xin việc vào cơ quan nhà nước, làm giả quyết định tuyển dụng có con dấu đỏ giả mạo rồi chiếm đoạt tiền cọc.</p>""",
                image_url="/static/images/canh-bao-chay-viec.jpg",
                is_scam_alert=True,
                scam_tricks=[
                    "Khoe khoang quan hệ với lãnh đạo cấp cao, hứa hẹn chắc chắn 100% đỗ công chức, viên chức.",
                    "Soạn thảo các thông báo tiếp nhận hồ sơ, quyết định tuyển dụng giả mạo.",
                    "Yêu cầu nộp tiền mặt hoặc chuyển khoản chi phí bôi trơn, chạy việc từ vài chục đến hàng trăm triệu đồng."
                ],
                prevention_advice=[
                    "Mọi thông tin thi tuyển công chức, viên chức đều được niêm yết công khai trên Cổng thông tin điện tử của cơ quan nhà nước.",
                    "Quy trình thi tuyển, xét tuyển diễn ra nghiêm túc, minh bạch theo Luật Cán bộ, công chức và Luật Viên chức.",
                    "Người dân tuyệt đối không đưa tiền cho bất kỳ cá nhân nào hứa hẹn chạy việc; hành vi đưa tiền chạy việc cũng có thể bị xem xét tội Đưa hối lộ."
                ]
            )
        ]

        for a in scam_alerts:
            exist = (await session.execute(select(Article).where(Article.slug == a.slug))).scalars().first()
            if not exist:
                session.add(a)

        # 3. Nạp tài liệu tri thức (Knowledge chunks) cho RAG
        knowledge_texts = [
            ("Luật Cư trú số 68/2020/QH14", "law", "Công dân có quyền đăng ký thường trú tại chỗ ở hợp pháp thuộc quyền sở hữu của mình hoặc khi được chủ hộ, chủ sở hữu đồng ý. Thời hạn giải quyết đăng ký thường trú tối đa 07 ngày làm việc. Công an xã có trách nhiệm tiếp nhận, thẩm tra và cập nhật kết quả vào Cơ sở dữ liệu quốc gia về dân cư. Sổ hộ khẩu giấy đã hết giá trị sử dụng từ ngày 01/01/2023."),
            ("Luật Căn cước số 26/2023/QH15", "law", "Thẻ Căn cước chính thức thay thế thẻ Căn cước công dân từ ngày 01/7/2024. Người từ đủ 14 tuổi bắt buộc cấp thẻ Căn cước. Người từ 0 đến dưới 14 tuổi được cấp theo nhu cầu. Thẻ Căn cước tích hợp thông tin sinh trắc học gồm mống mắt, vân tay và ảnh khuôn mặt. VNeID Mức 2 có giá trị tương đương xuất trình giấy tờ bản gốc."),
            ("Thông tư 24/2023/TT-BCA về đăng ký xe", "law", "Công an xã được phân cấp thực hiện đăng ký xe mô tô, xe gắn máy cho cá nhân có nơi cư trú (thường trú, tạm trú) tại địa phương. Biển số xe được cấp và quản lý theo mã định danh của chủ xe (Biển số định danh). Khi bán xe, chủ xe phải giữ lại biển số và đăng ký xe nộp cho cơ quan Công an làm thủ tục thu hồi, được giữ lại trong 05 năm để cấp cho xe mới."),
            ("Quy định xử phạt vi phạm nồng độ cồn", "law", "Nghị định 100/2019/NĐ-CP và Nghị định 123/2021/NĐ-CP quy định mức phạt nồng độ cồn đối với người điều khiển xe mô tô từ 2 triệu đến 8 triệu đồng, tước bằng lái xe từ 10 tháng đến 24 tháng. Mọi công dân tuyệt đối tuân thủ: Đã uống rượu bia, không lái xe."),
            ("Bộ luật Hình sự về tội lừa đảo chiếm đoạt tài sản", "law", "Điều 174 Bộ luật Hình sự quy định: Người nào dùng thủ đoạn gian dối chiếm đoạt tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng hoặc dưới 2.000.000 đồng nhưng thuộc các trường hợp quy định thì bị phạt cải tạo không giam giữ đến 03 năm hoặc phạt tù từ 06 tháng đến 03 năm. Chiếm đoạt từ 500.000.000 đồng trở lên bị phạt tù từ 12 năm đến 20 năm hoặc tù chung thân."),
            ("Cẩm nang 22 thủ đoạn lừa đảo trên không gian mạng", "anti_scam", "Bộ Công an và Công an xã Đức Hợp tổng hợp 22 thủ đoạn tội phạm mạng nguy hiểm: Giả danh Công an cài app VNeID .apk, giả lệnh bắt giam qua Zalo, tuyển CTV đơn hàng Shopee/TikTok, gọi video Deepfake mượn tiền cấp cứu, giả mạo SMS Brandname ngân hàng, bẫy đầu tư tài chính Forex/tiền ảo, cho vay online báo sai số tài khoản, bẫy tình cảm quà hải quan, trúng thưởng xe SH, combo du lịch giá rẻ, chiếm đoạt SIM chuyển tiếp cuộc gọi, fake bill chuyển tiền, tuyển người mẫu nhí, bẫy thu hồi tiền treo lần 2, quét mã QR phishing, mua bán tài khoản ngân hàng, bưu phẩm tri ân COD, bẫy nợ chuyển tiền nhầm, mạo danh điện lực/viễn thông dọa nợ cước, mạo danh trại hè quân đội, chạy việc biên chế."),
            ("Quy tắc 4 Không - 2 Phải phòng chống lừa đảo", "anti_scam", "Khuyến cáo của Công an xã Đức Hợp: KHÔNG bấm link lạ tải file .apk; KHÔNG cung cấp mật khẩu OTP; KHÔNG chuyển tiền cho người lạ chưa xác minh; KHÔNG tin việc nhẹ lương cao/đầu tư tiền ảo. PHẢI bình tĩnh kiểm chứng với người thân và cơ quan công quyền; PHẢI báo ngay cho Trực ban Công an xã Đức Hợp: 02213.815.999 khi có dấu hiệu nghi vấn."),
            ("An toàn PCCC hộ gia đình tại xã Đức Hợp", "pccc", "Mỗi hộ gia đình trang bị tối thiểu 01 bình chữa cháy xách tay (bình bột ABC MFZ4 hoặc bình khí CO2 MT3) tại nơi dễ thấy gần lối thoát nạn. Nhà lồng sắt chuồng cọp bắt buộc mở cửa thoát nạn thứ 2. Khi rò rỉ gas: Tuyệt đối không bật tắt công tắc điện hay quạt, khóa ngay van bình gas, mở rộng cửa thông thoáng và di tản ra ngoài. Cháy chảo dầu mỡ: Tuyệt đối không dội nước, đậy nắp vung kín hoặc trùm khăn ẩm để dập tắt ngọn lửa.")
        ]

        for title, stype, text in knowledge_texts:
            chunk = KnowledgeChunk(
                source_title=title,
                source_type=stype,
                chunk_text=text,
                metadata_json={"official": True}
            )
            session.add(chunk)

        await session.commit()
        print("-> ĐÃ NẠP XONG 22 KỊCH BẢN CẢNH BÁO LỪA ĐẢO & TRI THỨC PHÁP LUẬT CHUẨN!")

if __name__ == "__main__":
    asyncio.run(seed_full_knowledge())

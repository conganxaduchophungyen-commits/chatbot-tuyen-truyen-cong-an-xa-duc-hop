import asyncio
from app.core.database import engine, Base, AsyncSessionLocal
from app.core.security import get_password_hash
from app.models import Category, Procedure, ProcedureForm, Article, AdminUser

async def init_models():
    async with engine.begin() as conn:
        # Tạo bảng nếu chưa tồn tại
        await conn.run_sync(Base.metadata.create_all)
    print("-> Đã khởi tạo các bảng cơ sở dữ liệu thành công.")

async def seed_data():
    async with AsyncSessionLocal() as session:
        # Kiểm tra xem đã có dữ liệu chưa
        from sqlalchemy import select
        res = await session.execute(select(Category))
        if res.scalars().first():
            print("-> Cơ sở dữ liệu đã có dữ liệu mẫu. Bỏ qua bước seed data.")
            return

        print("-> Đang nạp dữ liệu mẫu chuẩn hóa cho Công an xã Đức Hợp...")

        # 1. Danh mục nghiệp vụ
        cat_cu_tru = Category(
            code="cu_tru",
            name="Cư trú & Căn cước VNeID",
            description="Thủ tục đăng ký thường trú, tạm trú, cấp thẻ Căn cước và tài khoản định danh điện tử",
            icon="UserCheck",
            order_num=1
        )
        cat_giao_thong = Category(
            code="giao_thong",
            name="Giao thông & Đăng ký xe",
            description="Thủ tục đăng ký, cấp biển số xe mô tô, xe máy cấp xã; nộp phạt giao thông trực tuyến",
            icon="Bike",
            order_num=2
        )
        cat_pccc = Category(
            code="pccc",
            name="Phòng cháy chữa cháy (PCCC)",
            description="Hướng dẫn an toàn PCCC hộ gia đình, nhà ở kết hợp sản xuất kinh doanh tại địa phương",
            icon="Flame",
            order_num=3
        )
        cat_canh_bao = Category(
            code="canh_bao",
            name="Cảnh báo Tội phạm & Lừa đảo",
            description="Tuyên truyền nhận diện các thủ đoạn tội phạm công nghệ cao và lừa đảo chiếm đoạt tài sản",
            icon="ShieldAlert",
            order_num=4
        )

        session.add_all([cat_cu_tru, cat_giao_thong, cat_pccc, cat_canh_bao])
        await session.flush()

        # 2. Thủ tục mẫu
        p1 = Procedure(
            category_id=cat_cu_tru.id,
            code="TTHC-BCA-01",
            title="Đăng ký thường trú tại xã Đức Hợp",
            target_audience="Công dân Việt Nam chuyển đến sinh sống hợp pháp tại xã Đức Hợp",
            competent_authority="Công an xã Đức Hợp, tỉnh Hưng Yên",
            execution_method="Trực tiếp tại Trụ sở Công an xã Đức Hợp hoặc trực tuyến qua Cổng Dịch vụ công Bộ Công an",
            required_documents=[
                "Tờ khai thay đổi thông tin cư trú (Mẫu CT01).",
                "Giấy tờ, tài liệu chứng minh chỗ ở hợp pháp (Sổ đỏ, Hợp đồng mua bán, Giấy chứng nhận quyền sử dụng đất, v.v.).",
                "Ý kiến đồng ý của chủ hộ, chủ sở hữu chỗ ở hợp pháp (nếu nhập hộ vào người khác).",
                "Giấy tờ chứng minh quan hệ nhân thân (Giấy đăng ký kết hôn, Giấy khai sinh - nếu chưa có trên CSDLQG về dân cư)."
            ],
            steps=[
                {"step": 1, "title": "Chuẩn bị hồ sơ", "desc": "Chuẩn bị đầy đủ các giấy tờ theo danh mục nêu trên hoặc tải mẫu CT01 điền trước."},
                {"step": 2, "title": "Nộp hồ sơ", "desc": "Đến nộp trực tiếp tại Bộ phận Một cửa Công an xã Đức Hợp hoặc nộp trực tuyến trên Cổng DVC Bộ Công an."},
                {"step": 3, "title": "Tiếp nhận & Kiểm tra", "desc": "Cán bộ Công an xã kiểm tra tính pháp lý của hồ sơ, cấp Giấy tiếp nhận và hẹn trả kết quả (nếu hồ sơ hợp lệ)."},
                {"step": 4, "title": "Nhận kết quả", "desc": "Nhận thông báo kết quả giải quyết cư trú (Mẫu CT08) hoặc kiểm tra cập nhật trên tài khoản VNeID."}
            ],
            processing_time="07 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ",
            fee="20.000 VNĐ (Trực tiếp) / 10.000 VNĐ (Trực tuyến qua Cổng DVC)",
            online_url="https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26288",
            is_active=True
        )

        p2 = Procedure(
            category_id=cat_giao_thong.id,
            code="TTHC-BCA-02",
            title="Đăng ký, cấp biển số xe mô tô, xe gắn máy lần đầu tại Công an xã",
            target_audience="Cá nhân có nơi cư trú (thường trú, tạm trú) tại xã Đức Hợp",
            competent_authority="Công an xã Đức Hợp (đã được phân cấp thẩm quyền đăng ký xe)",
            execution_method="Kê khai trực tuyến trên Cổng DVC, sau đó mang xe và hồ sơ giấy đến Công an xã để bấm biển",
            required_documents=[
                "Giấy khai đăng ký xe (Kê khai online trên Cổng Dịch vụ công Bộ Công an để lấy mã hồ sơ).",
                "Giấy tờ của chủ xe: Căn cước công dân hoặc sử dụng tài khoản VNeID Mức 2.",
                "Chứng từ nguồn gốc xe: Dữ liệu hóa đơn điện tử hoặc Hóa đơn giá trị gia tăng.",
                "Chứng từ lệ phí trước bạ: Dữ liệu nộp lệ phí trước bạ điện tử hoặc biên lai nộp tiền vào Kho bạc/Ngân hàng."
            ],
            steps=[
                {"step": 1, "title": "Kê khai online", "desc": "Truy cập Cổng DVC Bộ Công an, chọn dịch vụ Đăng ký xe lần đầu, điền thông tin và nhận mã hồ sơ."},
                {"step": 2, "title": "Đưa xe đến Công an xã", "desc": "Mang xe mô tô và toàn bộ hồ sơ giấy tờ gốc đến Trụ sở Công an xã Đức Hợp."},
                {"step": 3, "title": "Kiểm tra xe & Bấm biển số", "desc": "Cán bộ Công an xã chà số khung, số máy, kiểm tra thực tế xe và hướng dẫn chủ xe bấm biển số trên hệ thống."},
                {"step": 4, "title": "Nhận biển số & Giấy hẹn", "desc": "Nhận biển số xe ngay sau khi bấm biển; nhận giấy hẹn trả Chứng nhận đăng ký xe (trong thời hạn 02 ngày làm việc)."}
            ],
            processing_time="Bấm và nhận biển số ngay trong ngày; Trả Chứng nhận đăng ký xe không quá 02 ngày làm việc",
            fee="Theo biểu mức thu lệ phí đăng ký xe tại khu vực nông thôn/huyện",
            online_url="https://dichvucong.bocongan.gov.vn/bocongan/bothutuc/tthc?matt=26363",
            is_active=True
        )

        session.add_all([p1, p2])
        await session.flush()

        # Biểu mẫu tờ khai
        form_ct01 = ProcedureForm(
            procedure_id=p1.id,
            form_code="CT01",
            name="Tờ khai thay đổi thông tin cư trú (Mẫu CT01 ban hành kèm Thông tư Bộ Công an)",
            file_url="/static/forms/CT01_To_khai_thay_doi_thong_tin_cu_tru.docx",
            guide_url="/static/guides/Huong_dan_dien_CT01.pdf"
        )
        session.add(form_ct01)

        # 3. Bài viết cảnh báo lừa đảo
        a1 = Article(
            category_id=cat_canh_bao.id,
            title="CẢNH BÁO: Thủ đoạn giả danh Công an gọi điện đe dọa, yêu cầu cài đặt App VNeID giả mạo",
            slug="canh-bao-gia-danh-cong-an-cai-app-vneid-gia-mao",
            summary="Công an xã Đức Hợp cảnh báo thủ đoạn các đối tượng tự xưng là cán bộ Công an hướng dẫn kích hoạt định danh điện tử qua đường link lạ nhằm chiếm đoạt tài khoản ngân hàng.",
            content="""<p>Thời gian gần đây, trên địa bàn tỉnh Hưng Yên và các địa phương lân cận xuất hiện thủ đoạn lừa đảo tinh vi: Đối tượng gọi điện thoại tự xưng là cán bộ Công an (Công an xã, Công an huyện hoặc Cục Cảnh sát QLHC về TTXH), thông báo với người dân rằng tài khoản định danh điện tử VNeID bị lỗi, sai thông tin hoặc chưa đồng bộ bảo hiểm xã hội, căn cước công dân.</p>
            <p>Sau đó, đối tượng gửi các đường link có đuôi lạ (ví dụ: .apk, .vip, dichvucong-gov...) qua Zalo, Facebook và yêu cầu người dân tải phần mềm về điện thoại để 'hỗ trợ từ xa'. Khi người dân cài đặt, phần mềm chứa mã độc này sẽ chiếm toàn bộ quyền điều khiển điện thoại, đọc tin nhắn SMS mã OTP và tự động chuyển sạch tiền trong tài khoản ngân hàng của nạn nhân.</p>""",
            image_url="/static/images/canh-bao-vneid-fake.jpg",
            is_scam_alert=True,
            scam_tricks=[
                "Gọi điện xưng là Công an thông báo hồ sơ VNeID bị sai lệch hoặc đang dính líu đến đường dây rửa tiền, buôn ma túy.",
                "Yêu cầu kết bạn Zalo và gửi đường link tải ứng dụng lạ (đuôi .apk hoặc trang web giả mạo giao diện Cổng DVC).",
                "Yêu cầu cấp quyền trợ năng (Accessibility) trên điện thoại và quay khuôn mặt, đọc mã OTP ngân hàng."
            ],
            prevention_advice=[
                "Lực lượng Công an xã Đức Hợp KHÔNG BAO GIỜ gọi điện thoại yêu cầu công dân cài đặt ứng dụng qua đường link gửi ngoài chợ ứng dụng chính thức (Google Play Store hoặc Apple App Store).",
                "Tuyệt đối KHÔNG bấm vào link lạ, KHÔNG tải file có đuôi .apk do người lạ gửi qua mạng xã hội.",
                "KHÔNG cung cấp mật khẩu ngân hàng, mã xác thực OTP, thông tin thẻ tín dụng cho bất kỳ ai dưới bất kỳ hình thức nào.",
                "Khi có vướng mắc về tài khoản VNeID hoặc thủ tục cư trú, người dân hãy đến trực tiếp Trụ sở Công an xã Đức Hợp để được cán bộ hỗ trợ trực tiếp."
            ],
            is_published=True
        )

        session.add(a1)

        # 4. Tài khoản cán bộ Quản trị mặc định
        admin_user = AdminUser(
            username="admin_duchop",
            password_hash=get_password_hash("CongAnDucHop@2026"),
            full_name="Cán bộ Quản trị Công an xã Đức Hợp",
            badge_number="CA-DH-01",
            role="admin",
            is_active=True
        )
        admin_user2 = AdminUser(
            username="admin",
            password_hash=get_password_hash("admin123"),
            full_name="Quản trị viên Công an xã Đức Hợp",
            badge_number="CA-DH-02",
            role="admin",
            is_active=True
        )
        session.add_all([admin_user, admin_user2])

        await session.commit()
        print("-> Đã nạp thành công toàn bộ dữ liệu mẫu ban đầu!")

if __name__ == "__main__":
    asyncio.run(init_models())
    asyncio.run(seed_data())

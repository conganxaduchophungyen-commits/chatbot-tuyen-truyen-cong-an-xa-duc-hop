'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Download,
  List,
  Flame,
  Bike,
  ShieldAlert,
  UserCheck,
  Play,
  Pause,
  RotateCcw,
  Columns,
  FileImage,
  Sparkles,
  CheckCircle2,
  BookMarked,
  Eye,
  Loader2
} from 'lucide-react';

export interface HandbookPage {
  pageNumber: number; // 0 = Bìa, 1..15 = Nội dung
  label: string;
  title: string;
  summary: string;
  imageUrl?: string;
  keyPoints?: string[];
}

export interface HandbookItem {
  id: string;
  category: 'pccc' | 'giao_thong' | 'lua_dao' | 'cu_tru';
  categoryName: string;
  title: string;
  subtitle: string;
  badge: string;
  isReady: boolean;
  coverUrl?: string;
  accentColor: string;
  totalPages: number;
  issuedBy: string;
  updatedAt: string;
  pages: HandbookPage[];
}

export const HANDBOOK_LIBRARY: HandbookItem[] = [
  {
    id: 'so-tay-pccc-hkd',
    category: 'pccc',
    categoryName: 'Phòng cháy chữa cháy & CNCH',
    title: 'Cẩm nang An toàn Phòng cháy chữa cháy và Thoát nạn',
    subtitle: 'Dành cho Nhà ở Gia đình kết hợp Sản xuất, Kinh doanh tại xã Đức Hợp',
    badge: '16 Trang Infographic HD • Đọc ngay',
    isReady: true,
    coverUrl: '/handbooks/pccc/page-0.jpg',
    accentColor: 'from-red-700 via-orange-600 to-amber-600',
    totalPages: 16,
    issuedBy: 'Công an xã Đức Hợp - Tỉnh Hưng Yên',
    updatedAt: 'Năm 2026',
    pages: [
      {
        pageNumber: 0,
        label: 'Trang bìa',
        title: 'Bìa Cẩm nang An toàn PCCC và Thoát nạn',
        summary: 'Tổng quan nhận diện nguy cơ cháy nổ, giải pháp kỹ thuật ngăn cháy lan, lối thoát nạn thứ 2 và kỹ năng sinh tồn cho hộ gia đình kết hợp sản xuất kinh doanh.',
        imageUrl: '/handbooks/pccc/page-0.jpg'
      },
      {
        pageNumber: 1,
        label: 'Trang 01',
        title: 'Nhận diện 5 "Điểm nghẽn" sinh hỏa hoạn chí mạng',
        summary: 'Phân tích 5 nguy cơ lớn nhất: Hệ thống điện quá tải, tồn chứa hàng hóa chắn lối đi, sơ suất đun nấu/thờ cúng, sạc xe điện qua đêm và "chuồng cọp" bịt kín ban công.',
        imageUrl: '/handbooks/pccc/page-1.jpg'
      },
      {
        pageNumber: 2,
        label: 'Trang 02',
        title: 'Hiểm họa Hiệu ứng ống khói trong nhà ống',
        summary: 'Giải thích cơ chế khói độc và nhiệt độ cao bốc lên dọc giếng trời, cầu thang bộ trong nhà ống làm nạn nhân ngạt khói chỉ sau vài phút.',
        imageUrl: '/handbooks/pccc/page-2.jpg'
      },
      {
        pageNumber: 3,
        label: 'Trang 03',
        title: 'Trách nhiệm pháp lý PCCC của Chủ hộ kinh doanh',
        summary: 'Quy định của Luật PCCC và CNCH về điều kiện an toàn PCCC bắt buộc, hồ sơ quản lý và chế tài xử phạt khi vi phạm quy định an toàn phòng cháy.',
        imageUrl: '/handbooks/pccc/page-3.jpg'
      },
      {
        pageNumber: 4,
        label: 'Trang 04',
        title: 'Giải pháp kỹ thuật Vách ngăn cháy & Ngăn khói',
        summary: 'Hướng dẫn thi công vách ngăn cháy, cửa chống cháy ngăn cách khu vực kinh doanh/kho hàng ở tầng 1 với cầu thang và khu vực sinh hoạt ngủ nghỉ.',
        imageUrl: '/handbooks/pccc/page-4.jpg'
      },
      {
        pageNumber: 5,
        label: 'Trang 05',
        title: 'Tiêu chuẩn An toàn hệ thống điện hộ kinh doanh',
        summary: 'Nguyên tắc tách biệt mạch điện kinh doanh và sinh hoạt, lắp đặt aptomat chống quá tải (MCB/RCCB), luồn ống chống cháy và không cắm chồng phích điện.',
        imageUrl: '/handbooks/pccc/page-5.jpg'
      },
      {
        pageNumber: 6,
        label: 'Trang 06',
        title: 'Nguyên tắc An toàn khi sạc xe điện tại nhà',
        summary: 'Phòng ngừa hiện tượng nổ cell pin Lithium-ion ở 1.200°C: Không sạc xe điện qua đêm, bố trí khu vực sạc thông thoáng cách xa hàng hóa dễ cháy.',
        imageUrl: '/handbooks/pccc/page-6.jpg'
      },
      {
        pageNumber: 7,
        label: 'Trang 07',
        title: 'Tiêu chuẩn trang bị & Kiểm tra Bình chữa cháy',
        summary: 'Cách phân biệt và bố trí bình bột chữa cháy ABC, bình khí CO2 tại hộ gia đình và cửa hàng kinh doanh; cách kiểm tra đồng hồ áp suất định kỳ.',
        imageUrl: '/handbooks/pccc/page-7.jpg'
      },
      {
        pageNumber: 8,
        label: 'Trang 08',
        title: 'Bộ Dụng cụ Phá dỡ & Cứu nạn gia đình thiết yếu',
        summary: 'Trang bị mặt nạ phòng độc lọc khói khí CO/HCN, búa rìu phá dỡ, kìm cộng lực cắt khóa, thang dây hạ chậm và đèn pin chiếu sáng sự cố.',
        imageUrl: '/handbooks/pccc/page-8.jpg'
      },
      {
        pageNumber: 9,
        label: 'Trang 09',
        title: 'Quy trình xử lý khẩn cấp khi phát hiện hỏa hoạn',
        summary: 'Quy trình chuẩn trong "Giờ vàng": Hô hoán báo động -> Cắt cầu dao điện tổng -> Dùng bình chữa cháy dập lửa ban đầu -> Gọi ngay 114 & Công an xã.',
        imageUrl: '/handbooks/pccc/page-9.jpg'
      },
      {
        pageNumber: 10,
        label: 'Trang 10',
        title: 'Kỹ thuật sinh tồn thoát hiểm qua vùng khói độc',
        summary: 'Kỹ năng bò thấp sát mặt sàn (dưới 0.5m), dùng khăn ướt che kín mũi miệng, kiểm tra nhiệt độ tay nắm cửa bằng mu bàn tay và chèn khăn ướt ngăn khói.',
        imageUrl: '/handbooks/pccc/page-10.jpg'
      },
      {
        pageNumber: 11,
        label: 'Trang 11',
        title: 'Bộ Quy tắc An toàn PCCC hàng ngày tại gia đình',
        summary: 'Checklist kiểm tra an toàn trước khi đóng cửa hàng và trước khi đi ngủ: Tắt thiết bị điện không cần thiết, khóa van bình gas, kiểm tra nơi thờ cúng.',
        imageUrl: '/handbooks/pccc/page-11.jpg'
      },
      {
        pageNumber: 12,
        label: 'Trang 12',
        title: 'Hướng dẫn bố trí & Mở lối thoát nạn thứ 2',
        summary: 'Bắt buộc mở ô cửa thoát hiểm kích thước tối thiểu 60x80cm trên lồng sắt "chuồng cọp", không khóa chết hoặc để chìa khóa tại vị trí cố định mọi thành viên đều biết.',
        imageUrl: '/handbooks/pccc/page-12.jpg'
      },
      {
        pageNumber: 13,
        label: 'Trang 13',
        title: 'Quy trình thao tác dập cháy ban đầu an toàn',
        summary: 'Hướng dẫn 4 bước chuẩn: Rút chốt hãm -> Hướng loa phun vào gốc lửa (đứng xuôi chiều gió) -> Bóp van -> Quét qua lại cho đến khi đám cháy tắt hẳn.',
        imageUrl: '/handbooks/pccc/page-13.jpg'
      },
      {
        pageNumber: 14,
        label: 'Trang 14',
        title: 'Quy trình chữa cháy sự cố Pin xe điện chuyên biệt',
        summary: 'Lưu ý đặc thù khi pin xe điện bốc cháy: Ngắt nguồn sạc ngay, di chuyển các vật dễ cháy ra xa, làm mát liên tục và gọi lực lượng PCCC chuyên nghiệp.',
        imageUrl: '/handbooks/pccc/page-14.jpg'
      },
      {
        pageNumber: 15,
        label: 'Trang 15',
        title: 'Mô hình Tổ liên gia an toàn PCCC tại xã Đức Hợp',
        summary: 'Phát huy sức mạnh phương châm "4 tại chỗ", kết nối chuông báo cháy liên gia và Điểm chữa cháy công cộng tại các thôn thuộc xã Đức Hợp.',
        imageUrl: '/handbooks/pccc/page-15.jpg'
      }
    ]
  },
  {
    id: 'so-tay-atgt-2026',
    category: 'giao_thong',
    categoryName: 'An toàn giao thông đường bộ',
    title: 'Sổ tay Kỹ năng & Pháp luật An toàn Giao thông Đường bộ',
    subtitle: 'Cẩm nang lái xe phòng vệ, biển báo, vạch kẻ đường, xử lý sự cố khẩn cấp & tra cứu mức phạt mới',
    badge: '16 Trang Infographic HD • Đọc ngay',
    isReady: true,
    coverUrl: '/handbooks/atgt/page-0.jpg',
    accentColor: 'from-emerald-700 via-teal-600 to-cyan-700',
    totalPages: 16,
    issuedBy: 'Công an xã Đức Hợp - Tỉnh Hưng Yên',
    updatedAt: 'Năm 2026',
    pages: [
      {
        pageNumber: 0,
        label: 'Trang bìa',
        title: 'Bìa Cẩm nang An toàn Giao thông Đường bộ',
        summary: 'Tổng hợp kỹ năng lái xe phòng vệ, quy tắc nhường đường, điểm mù xe tải, xử lý sự cố khẩn cấp và quy định xử phạt, trừ điểm GPLX theo Luật TTATGT đường bộ.',
        imageUrl: '/handbooks/atgt/page-0.jpg'
      },
      {
        pageNumber: 1,
        label: 'Trang 01',
        title: 'Tư duy lái xe phòng vệ & Mô hình SIPDE',
        summary: 'Quy trình 5 bước chủ động phòng ngừa tai nạn (Quan sát - Nhận diện - Dự đoán - Quyết định - Thực thi) giúp người lái xe làm chủ mọi tình huống bất ngờ trên đường.',
        imageUrl: '/handbooks/atgt/page-1.jpg'
      },
      {
        pageNumber: 2,
        label: 'Trang 02',
        title: 'Quy tắc nhường quyền ưu tiên tại các điểm giao cắt',
        summary: 'Thứ tự ưu tiên chuẩn xác khi qua ngã tư, vòng xuyến, đường nhánh giao đường chính và quy tắc nhường đường cho xe ưu tiên, người đi bộ.',
        imageUrl: '/handbooks/atgt/page-2.jpg'
      },
      {
        pageNumber: 3,
        label: 'Trang 03',
        title: '5 Nhóm hành vi nguy cơ hàng đầu gây tai nạn giao thông',
        summary: 'Cảnh báo 5 nguyên nhân trực tiếp dẫn đến tai nạn nghiêm trọng: Vi phạm nồng độ cồn, chạy quá tốc độ, đi sai làn đường/phần đường, vượt ẩu và sử dụng điện thoại khi lái xe.',
        imageUrl: '/handbooks/atgt/page-3.jpg'
      },
      {
        pageNumber: 4,
        label: 'Trang 04',
        title: 'An toàn cho người đi bộ & Kỹ năng sang đường',
        summary: 'Hướng dẫn nguyên tắc sang đường an toàn tại vạch kẻ đường, cầu vượt, quan sát 2 chiều, giao tiếp ánh mắt với tài xế và bảo vệ trẻ em, người cao tuổi.',
        imageUrl: '/handbooks/atgt/page-4.jpg'
      },
      {
        pageNumber: 5,
        label: 'Trang 05',
        title: 'Kỹ thuật an toàn cho người đi xe hai bánh',
        summary: 'Đội mũ bảo hiểm đạt chuẩn cài quai đúng quy cách, kỹ năng phanh kết hợp trước - sau, giữ khoảng cách an toàn và bật đèn báo rẽ sớm khi chuyển hướng.',
        imageUrl: '/handbooks/atgt/page-5.jpg'
      },
      {
        pageNumber: 6,
        label: 'Trang 06',
        title: 'Thắt dây an toàn & Thiết bị an toàn cho trẻ em (CRS) trên ô tô',
        summary: 'Quy định bắt buộc thắt dây an toàn ở mọi vị trí ghế ngồi và sử dụng ghế an toàn chuyên dụng (CRS) cho trẻ em theo Luật Trật tự, an toàn giao thông đường bộ.',
        imageUrl: '/handbooks/atgt/page-6.jpg'
      },
      {
        pageNumber: 7,
        label: 'Trang 07',
        title: 'Chỉnh gương BGE & Khoảng cách an toàn khi lái ô tô',
        summary: 'Phương pháp chỉnh gương chiếu hậu góc rộng BGE xóa điểm mù hai bên hông xe và quy tắc "3 giây" giữ khoảng cách an toàn theo tốc độ lưu thông.',
        imageUrl: '/handbooks/atgt/page-7.jpg'
      },
      {
        pageNumber: 8,
        label: 'Trang 08',
        title: 'Bản đồ "Vùng tử thần" (Điểm mù xe tải & Container)',
        summary: 'Nhận diện 4 vùng điểm mù nguy hiểm phía trước đầu xe, ngay sau đuôi xe và hai bên hông xe tải nặng/container; tuyệt đối không chạy song song hoặc cắt đầu xe lớn khi ôm cua.',
        imageUrl: '/handbooks/atgt/page-8.jpg'
      },
      {
        pageNumber: 9,
        label: 'Trang 09',
        title: 'Kỹ năng xử lý sự cố khẩn cấp (Nổ lốp & Mất phanh)',
        summary: 'Cách giữ chặt vô lăng, giảm tốc bằng số thấp (phanh động cơ), tuyệt đối không đạp phanh gấp khi nổ lốp và cách xử lý bình tĩnh khi xe mất phanh trên đường dốc.',
        imageUrl: '/handbooks/atgt/page-9.jpg'
      },
      {
        pageNumber: 10,
        label: 'Trang 10',
        title: 'Kỹ năng xử lý sự cố khẩn cấp (Trượt nước & Xe chết máy đường sắt)',
        summary: 'Kỹ thuật thoát hiện tượng trượt nước (Hydroplaning) khi trời mưa lớn và quy trình thoát hiểm khẩn cấp khi phương tiện bất ngờ chết máy trên đường ngang giao cắt đường sắt.',
        imageUrl: '/handbooks/atgt/page-10.jpg'
      },
      {
        pageNumber: 11,
        label: 'Trang 11',
        title: 'Quy trình cấp cứu tai nạn giao thông chuẩn DRSABCD',
        summary: 'Các bước sơ cứu nạn nhân TNGT khoa học trong "giờ vàng", bảo vệ cột sống cổ, cầm máu đúng cách và gọi cấp cứu 115 kết hợp báo Công an xã Đức Hợp.',
        imageUrl: '/handbooks/atgt/page-11.jpg'
      },
      {
        pageNumber: 12,
        label: 'Trang 12',
        title: 'Hệ thống Biển báo hiệu đường bộ cốt lõi (QCVN 41:2019)',
        summary: 'Cách nhận biết nhanh 5 nhóm biển báo hiệu đường bộ: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn và biển phụ.',
        imageUrl: '/handbooks/atgt/page-12.jpg'
      },
      {
        pageNumber: 13,
        label: 'Trang 13',
        title: 'Hệ thống Vạch kẻ đường cốt lõi về phân làn & mắt võng',
        summary: 'Phân biệt rõ vạch trắng/vàng nét đứt và nét liền, vạch xương cá kênh hóa dòng xe và quy tắc di chuyển qua vạch mắt võng không bị phạt lỗi không chấp hành vạch kẻ đường.',
        imageUrl: '/handbooks/atgt/page-13.jpg'
      },
      {
        pageNumber: 14,
        label: 'Trang 14',
        title: 'Tra cứu mức xử phạt & Trừ điểm Giấy phép lái xe mới',
        summary: 'Tổng hợp mức phạt tiền và số điểm bị trừ trên hệ thống 12 điểm GPLX đối với các lỗi phổ biến của ô tô, xe máy theo Nghị định 168/2024/NĐ-CP.',
        imageUrl: '/handbooks/atgt/page-14.jpg'
      },
      {
        pageNumber: 15,
        label: 'Trang 15',
        title: 'Quy trình Checklist 60 giây kiểm tra xe trước khi khởi hành',
        summary: 'Danh mục kiểm tra nhanh Lốp - Phanh - Đèn - Gương - Giấy tờ (VNeID) chỉ trong 60 giây trước mỗi chuyến đi để đảm bảo hành trình vạn dặm bình an.',
        imageUrl: '/handbooks/atgt/page-15.jpg'
      }
    ]
  },
  {
    id: 'so-tay-phong-chong-lua-dao',
    category: 'lua_dao',
    categoryName: 'Phòng chống tội phạm & Lừa đảo',
    title: 'Sổ tay Nhận diện & Phòng chống Lừa đảo Không gian mạng',
    subtitle: 'Cẩm nang bảo vệ tài sản và quy trình xử lý khẩn cấp trong 15 - 30 phút vàng đầu tiên',
    badge: 'Chuyên đề tóm tắt • Đang cập nhật ảnh',
    isReady: true,
    accentColor: 'from-rose-700 via-red-700 to-purple-800',
    totalPages: 3,
    issuedBy: 'Công an xã Đức Hợp - Tỉnh Hưng Yên',
    updatedAt: 'Năm 2026',
    pages: [
      {
        pageNumber: 0,
        label: 'Trang bìa',
        title: 'Cẩm nang Cảnh giác Tội phạm Lừa đảo Công nghệ cao',
        summary: 'Nguyên tắc "3 KHÔNG - 2 PHẢI" giúp người dân xã Đức Hợp bảo vệ tuyệt đối tài khoản ngân hàng và thông tin cá nhân trên không gian mạng.',
        keyPoints: [
          'KHÔNG bấm vào đường link lạ hoặc cài đặt ứng dụng đuôi .apk qua Zalo/tin nhắn.',
          'KHÔNG cung cấp mã OTP ngân hàng, mật khẩu VNeID hay quay khuôn mặt sinh trắc học cho người lạ.',
          'KHÔNG chuyển tiền vào tài khoản cá nhân lạ để "làm nhiệm vụ hưởng hoa hồng" hoặc "chứng minh trong sạch".',
          'PHẢI gọi điện xác minh trực tiếp và PHẢI báo ngay cho Công an xã Đức Hợp (02213.815.999) khi nghi ngờ.'
        ]
      },
      {
        pageNumber: 1,
        label: 'Trang 01',
        title: '5 Thủ đoạn lừa đảo nguy hiểm nhất hiện nay',
        summary: 'Nhận diện ngay các kịch bản thao túng tâm lý tinh vi của tội phạm xuyên biên giới:',
        keyPoints: [
          '1. Giả danh Công an, Viện kiểm sát gọi điện dọa liên quan vụ án ma túy, rửa tiền để ép chuyển tiền.',
          '2. Giả danh cán bộ hướng dẫn cài đặt App VNeID / Dịch vụ công giả mạo (.apk) chiếm quyền điều khiển điện thoại.',
          '3. Sử dụng công nghệ AI Deepfake giả khuôn mặt, giọng nói người thân gọi video vay tiền gấp.',
          '4. Tuyển cộng tác viên thanh toán đơn hàng ảo Shopee, TikTok trả hoa hồng 10-20% vài đơn đầu rồi chiếm đoạt.',
          '5. Giả mạo luật sư, cục an ninh mạng quảng cáo "hỗ trợ lấy lại tiền bị lừa đảo" (bẫy lừa lần 2).'
        ]
      },
      {
        pageNumber: 2,
        label: 'Trang 02',
        title: 'Quy trình 4 bước khẩn cấp khi lỡ chuyển tiền cho kẻ lừa đảo',
        summary: 'Hành động ngay lập tức trong 15 - 30 phút đầu tiên để ngăn chặn tội phạm tẩu tán tài sản:',
        keyPoints: [
          'Bước 1: Mở app ngân hàng bấm "Khóa thẻ/tài khoản khẩn cấp" hoặc gọi Hotline ngân hàng khóa giao dịch ngay.',
          'Bước 2: Nếu lỡ cài app lạ (.apk), lập tức tắt Wi-Fi/4G, tắt nguồn máy và tháo SIM lắp sang điện thoại khác.',
          'Bước 3: Chụp màn hình toàn bộ tin nhắn, biên lai chuyển khoản và ra ngân hàng in sao kê có dấu đỏ.',
          'Bước 4: Đến ngay Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm) hoặc gọi 02213.815.999 để trình báo.'
        ]
      }
    ]
  },
  {
    id: 'so-tay-can-cuoc-vneid',
    category: 'cu_tru',
    categoryName: 'Căn cước & Cư trú VNeID',
    title: 'Sổ tay Hướng dẫn Luật Căn cước 2023 & Định danh điện tử VNeID',
    subtitle: 'Quy trình làm thẻ Căn cước, kích hoạt VNeID Mức 2 và đăng ký cư trú trực tuyến',
    badge: 'Chuyên đề tóm tắt • Đang cập nhật ảnh',
    isReady: true,
    accentColor: 'from-blue-700 via-police-800 to-indigo-900',
    totalPages: 3,
    issuedBy: 'Công an xã Đức Hợp - Tỉnh Hưng Yên',
    updatedAt: 'Năm 2026',
    pages: [
      {
        pageNumber: 0,
        label: 'Trang bìa',
        title: 'Cẩm nang Căn cước, Cư trú & Tiện ích VNeID Mức 2',
        summary: 'Hướng dẫn người dân thực hiện nhanh gọn các thủ tục cư trú, cấp đổi thẻ Căn cước ngay trên điện thoại thông minh.',
        keyPoints: [
          'Chứng minh nhân dân (CMND 9 số, 12 số) đã chính thức hết hiệu lực từ sau ngày 31/12/2024.',
          'Thẻ CCCD gắn chip còn thời hạn vẫn tiếp tục sử dụng bình thường cho đến khi hết hạn.',
          'Độ tuổi bắt buộc cấp đổi thẻ Căn cước: Đủ 14 tuổi, 25 tuổi, 40 tuổi và 60 tuổi.',
          'Tài khoản VNeID Mức 2 có giá trị tương đương thẻ Căn cước vật lý và tích hợp GPLX, Đăng ký xe, Thẻ BHYT.'
        ]
      },
      {
        pageNumber: 1,
        label: 'Trang 01',
        title: 'Cấp lại Thẻ Căn cước bị mất 100% Online trên VNeID',
        summary: 'Theo Luật Căn cước 2023, người dân bị mất thẻ Căn cước không cần đến cơ quan Công an chụp lại ảnh hay lăn vân tay:',
        keyPoints: [
          'Mở ứng dụng VNeID -> Chọn "Thủ tục hành chính" -> Chọn "Cấp lại thẻ căn cước".',
          'Hệ thống tự động sử dụng lại ảnh khuôn mặt, vân tay, mống mắt đã thu nhận trước đó.',
          'Chọn nhận thẻ trực tiếp tại nhà qua đường bưu điện bưu chính công ích.',
          'Thời hạn giải quyết: 07 ngày làm việc. Lệ phí nộp trực tuyến được giảm 50%.'
        ]
      },
      {
        pageNumber: 2,
        label: 'Trang 02',
        title: 'Đăng ký Thường trú, Tạm trú & Thông báo lưu trú qua VNeID',
        summary: 'Sổ hộ khẩu giấy đã hết hiệu lực, mọi thủ tục cư trú thực hiện trực tuyến nhanh chóng tại Công an xã Đức Hợp:',
        keyPoints: [
          'Đăng ký thường trú: Chuẩn bị Tờ khai điện tử CT01 + Giấy tờ chỗ ở hợp pháp + Ý kiến đồng ý của chủ hộ (Giải quyết tối đa 07 ngày làm việc).',
          'Đăng ký tạm trú: Dành cho người đến sinh sống, làm việc từ 30 ngày trở lên (Giải quyết trong 03 ngày làm việc).',
          'Thông báo lưu trú: Thực hiện trước 23h00 hàng ngày trên VNeID hoàn toàn miễn phí (0 đồng).'
        ]
      }
    ]
  }
];

/**
 * Component hiển thị từng trang ảnh Infographic với trạng thái tải mượt mà,
 * đảm bảo hiển thị đủ 100% khung hình (tỷ lệ 9:16 chuẩn của Infographic) không bị khuyết/cắt chữ.
 */
function HandbookPageImage({
  imageUrl,
  label,
  title,
  zoomLevel,
  onOpenLightbox
}: {
  imageUrl: string;
  label: string;
  title: string;
  zoomLevel: number;
  onOpenLightbox: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [imageUrl]);

  return (
    <div className="relative w-full aspect-[1152/2064] flex items-center justify-center bg-[#faf6ee] overflow-hidden rounded-lg group/img mx-auto">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#faf6ee] text-amber-900 z-10 space-y-2 p-4 text-center pointer-events-none">
          <Loader2 className="w-8 h-8 animate-spin text-red-600" />
          <span className="text-xs font-bold text-slate-600">
            Đang tải {label}...
          </span>
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        key={imageUrl}
        src={imageUrl}
        alt={`${label} - ${title}`}
        loading="eager"
        decoding="async"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={{
          transform: zoomLevel !== 1 ? `scale(${zoomLevel})` : undefined,
          transition: 'transform 0.2s ease-out'
        }}
        className="w-full h-full object-contain rounded-lg cursor-zoom-in block relative z-10"
        onClick={(e) => {
          e.stopPropagation();
          onOpenLightbox();
        }}
      />

      {/* Nút phóng to toàn màn hình hiển thị rõ ràng */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpenLightbox();
        }}
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2 opacity-90 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity bg-slate-900/85 hover:bg-red-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1.5 backdrop-blur-xs z-20 whitespace-nowrap"
      >
        <Eye className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
        <span>Bấm phóng to đọc rõ chữ</span>
      </button>
    </div>
  );
}

export default function LegalHandbookSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pccc' | 'giao_thong' | 'lua_dao' | 'cu_tru'>('all');
  const [activeBookId, setActiveBookId] = useState<string>('so-tay-pccc-hkd');
  const [viewMode, setViewMode] = useState<'book' | 'single'>('book');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [showToc, setShowToc] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; label: string } | null>(null);

  const readerContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const activeBook = HANDBOOK_LIBRARY.find((b) => b.id === activeBookId) || HANDBOOK_LIBRARY[0];
  const totalPages = activeBook.pages.length;

  // Tự động chuyển sang chế độ 1 trang trên màn hình điện thoại để đọc to rõ và lật trang mượt nhất
  useEffect(() => {
    const checkViewport = () => {
      if (window.innerWidth < 768) {
        setViewMode('single');
      } else {
        setViewMode('book');
      }
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Preload (Tải trước thông minh) các trang kế tiếp và trang trước để bấm sang trang hiển thị ngay lập tức
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const pagesToPreload = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
      currentPage - 1
    ].filter((idx) => idx >= 0 && idx < totalPages);

    pagesToPreload.forEach((idx) => {
      const url = activeBook.pages[idx]?.imageUrl;
      if (url) {
        const img = new window.Image();
        img.src = url;
      }
    });
  }, [activeBook, currentPage, totalPages]);

  // Chuyển cuốn sách khác
  const handleSelectBook = (bookId: string) => {
    setActiveBookId(bookId);
    setCurrentPage(0);
    setZoomLevel(1);
    setIsAutoPlay(false);
    setIsFlipping(false);
    readerContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Hiệu ứng lật trang nhẹ nhàng, tương thích 100% với Safari iOS & Chrome Android
  const triggerFlip = useCallback((targetPage: number) => {
    setIsFlipping(true);
    setZoomLevel(1);
    setCurrentPage(targetPage);
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 220);
    return () => clearTimeout(timer);
  }, []);

  const handleNextPage = useCallback(() => {
    if (viewMode === 'book') {
      if (currentPage === 0) {
        if (totalPages > 1) triggerFlip(1);
      } else if (currentPage + 2 < totalPages) {
        triggerFlip(currentPage + 2);
      } else if (currentPage + 1 < totalPages) {
        triggerFlip(currentPage + 1);
      }
    } else {
      if (currentPage + 1 < totalPages) {
        triggerFlip(currentPage + 1);
      }
    }
  }, [viewMode, currentPage, totalPages, triggerFlip]);

  const handlePrevPage = useCallback(() => {
    if (viewMode === 'book') {
      if (currentPage <= 1) {
        if (currentPage > 0) triggerFlip(0);
      } else {
        const prevSpreadStart = currentPage % 2 === 0 ? currentPage - 1 : currentPage - 2;
        triggerFlip(Math.max(0, prevSpreadStart));
      }
    } else {
      if (currentPage > 0) {
        triggerFlip(currentPage - 1);
      }
    }
  }, [viewMode, currentPage, triggerFlip]);

  const jumpToPage = (pageNum: number) => {
    if (viewMode === 'book' && pageNum > 0) {
      const aligned = pageNum % 2 === 0 ? pageNum - 1 : pageNum;
      triggerFlip(aligned);
    } else {
      triggerFlip(pageNum);
    }
    setShowToc(false);
  };

  // Điều hướng bằng phím mũi tên trên máy tính
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) {
        if (e.key === 'Escape') setLightboxImage(null);
        return;
      }
      if (e.key === 'ArrowRight') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNextPage, handlePrevPage, isFullscreen, lightboxImage]);

  // Tự động lật trang
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      const isAtEnd =
        viewMode === 'book'
          ? currentPage === 0
            ? totalPages <= 1
            : currentPage + 2 >= totalPages
          : currentPage + 1 >= totalPages;

      if (isAtEnd) {
        triggerFlip(0);
        setIsAutoPlay(false);
      } else {
        handleNextPage();
      }
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlay, viewMode, currentPage, totalPages, handleNextPage, triggerFlip]);

  // Vuốt ngang trên điện thoại để lật trang
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        handleNextPage();
      } else {
        handlePrevPage();
      }
    }
    touchStartXRef.current = null;
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const filteredBooks = HANDBOOK_LIBRARY.filter(
    (b) => selectedCategory === 'all' || b.category === selectedCategory
  );

  // Xác định trang bên trái và trang bên phải đang mở
  const leftPage: HandbookPage | null =
    viewMode === 'book'
      ? currentPage === 0
        ? null
        : activeBook.pages[currentPage] || null
      : activeBook.pages[currentPage] || null;

  const rightPage: HandbookPage | null =
    viewMode === 'book'
      ? currentPage === 0
        ? activeBook.pages[0] || null
        : activeBook.pages[currentPage + 1] || null
      : null;

  const canGoPrev = currentPage > 0;
  const canGoNext =
    viewMode === 'book'
      ? currentPage === 0
        ? totalPages > 1
        : currentPage + 2 < totalPages
      : currentPage + 1 < totalPages;

  // Hiển thị 1 tờ trang sách (không bị cắt ảnh trên mọi kích thước màn hình)
  const renderPageSheet = (
    page: HandbookPage,
    side: 'left' | 'right' | 'single',
    onClickCorner?: () => void
  ) => {
    const isLeft = side === 'left';
    const isRight = side === 'right';

    return (
      <div
        className={`relative w-full h-full min-h-0 bg-[#fffdf8] flex flex-col justify-between select-none overflow-hidden ${
          isLeft
            ? 'rounded-l-2xl border-r border-amber-900/20 shadow-[inset_-14px_0_24px_-12px_rgba(15,23,42,0.22)]'
            : isRight
            ? 'rounded-r-2xl border-l border-amber-900/10 shadow-[inset_14px_0_24px_-12px_rgba(15,23,42,0.22)]'
            : 'rounded-2xl shadow-xl border border-amber-900/15'
        }`}
      >
        {/* Thanh tiêu đề đầu trang sách */}
        <div className="px-3.5 py-2 bg-gradient-to-r from-amber-50/90 via-stone-50 to-amber-50/90 border-b border-amber-200/70 flex items-center justify-between text-[11px] font-bold text-slate-600 shrink-0">
          <span className="truncate max-w-[72%] text-red-800 uppercase tracking-wider flex items-center space-x-1.5">
            <BookMarked className="w-3.5 h-3.5 text-red-700 shrink-0" />
            <span className="truncate">{activeBook.title}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-black text-[10px] shrink-0">
            {page.label}
          </span>
        </div>

        {/* Nội dung chính của trang sách (Tỷ lệ 9:16 vừa khít 100% ảnh Infographic, không bị khuyết) */}
        <div className="flex-1 min-h-0 relative flex items-center justify-center bg-[#faf6ee] p-1.5 sm:p-2.5">
          {page.imageUrl ? (
            <HandbookPageImage
              imageUrl={page.imageUrl}
              label={page.label}
              title={page.title}
              zoomLevel={zoomLevel}
              onOpenLightbox={() =>
                setLightboxImage({
                  url: page.imageUrl!,
                  title: page.title,
                  label: page.label
                })
              }
            />
          ) : (
            /* Trang nội dung văn bản cho các sổ tay chưa có ảnh Infographic */
            <div className="w-full aspect-[9/16] max-h-[78vh] p-5 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#fffdf9] to-[#f8f1e3] rounded-xl border border-amber-200/80 overflow-y-auto">
              <div>
                <div className="inline-flex items-center space-x-1.5 bg-red-700 text-yellow-300 text-[11px] font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeBook.categoryName}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-3">
                  {page.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5 font-medium bg-amber-50/80 p-3.5 rounded-xl border border-amber-200">
                  {page.summary}
                </p>

                {page.keyPoints && page.keyPoints.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-black text-red-800 uppercase tracking-wider">
                      📌 Nội dung trọng tâm cần ghi nhớ:
                    </div>
                    {page.keyPoints.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs sm:text-sm text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-amber-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Đơn vị biên soạn: {activeBook.issuedBy}</span>
                <span className="font-bold text-red-700">Trực ban: 02213.815.999</span>
              </div>
            </div>
          )}

          {/* Hiệu ứng gấp góc trang sách bên phải để lật tiếp */}
          {(isRight || side === 'single') && canGoNext && onClickCorner && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClickCorner();
              }}
              title="Bấm để lật sang trang tiếp theo"
              className="group/curl absolute bottom-0 right-0 w-14 h-14 z-20 flex items-end justify-end focus:outline-none"
            >
              <div className="w-10 h-10 group-hover/curl:w-12 group-hover/curl:h-12 transition-all duration-200 bg-gradient-to-tl from-amber-300 via-amber-100 to-white rounded-tl-2xl shadow-[-4px_-4px_10px_rgba(0,0,0,0.2)] border-t border-l border-amber-400 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-red-700 group-hover/curl:translate-x-0.5 transition" />
              </div>
            </button>
          )}

          {/* Hiệu ứng gấp góc trang sách bên trái để lật lại */}
          {isLeft && canGoPrev && onClickCorner && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClickCorner();
              }}
              title="Bấm để lật về trang trước"
              className="group/curl absolute bottom-0 left-0 w-14 h-14 z-20 flex items-end justify-start focus:outline-none"
            >
              <div className="w-10 h-10 group-hover/curl:w-12 group-hover/curl:h-12 transition-all duration-200 bg-gradient-to-tr from-amber-300 via-amber-100 to-white rounded-tr-2xl shadow-[4px_-4px_10px_rgba(0,0,0,0.2)] border-t border-r border-amber-400 flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-red-700 group-hover/curl:-translate-x-0.5 transition" />
              </div>
            </button>
          )}
        </div>

        {/* Chân trang sách */}
        <div className="px-3.5 py-2 bg-gradient-to-r from-amber-50/90 via-stone-50 to-amber-50/90 border-t border-amber-200/70 flex items-center justify-between text-xs shrink-0">
          <div className="truncate font-bold text-slate-800 pr-2 text-[11px] sm:text-xs" title={page.title}>
            {page.title}
          </div>
          <div className="flex items-center space-x-2 shrink-0">
            {page.imageUrl && (
              <a
                href={page.imageUrl}
                download={`So-tay-${activeBook.category}-Duc-Hop-${page.label.replace(/\s+/g, '-')}.jpg`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center space-x-1 text-[11px] font-bold text-police-700 hover:text-red-700 bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs transition"
                title="Tải trang này về điện thoại/máy tính"
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">Tải trang</span>
              </a>
            )}
            <span className="text-[11px] font-extrabold text-amber-900">
              {page.pageNumber === 0 ? 'Bìa' : `${page.pageNumber}/${totalPages - 1}`}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* ================================================================= */}
      {/* 1. BANNER GIỚI THIỆU TỦ SÁCH / SỔ TAY TUYÊN TRUYỀN PHÁP LUẬT       */}
      {/* ================================================================= */}
      <div className="bg-gradient-to-r from-red-800 via-red-700 to-amber-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-yellow-400/30">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-300/40 text-yellow-200 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-yellow-300" />
              <span>Thư viện Sổ tay Pháp luật Điện tử • Công an xã Đức Hợp</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Sổ Tay Tuyên Truyền Pháp Luật Trực Quan
            </h1>
            <p className="text-sm sm:text-base text-red-100 leading-relaxed font-medium">
              Trải nghiệm đọc cẩm nang pháp luật, kỹ năng Phòng cháy chữa cháy, An toàn giao thông và Phòng chống lừa đảo với{' '}
              <strong className="text-yellow-300 underline decoration-yellow-400/60">
                chế độ lật trang như một quyển sách thật
              </strong>
              . Dễ nhìn, dễ nhớ, áp dụng ngay tại mỗi gia đình và hộ kinh doanh!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-yellow-300">04</div>
              <div className="text-xs font-bold text-red-100 mt-0.5">Chuyên đề Sổ tay</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-black text-yellow-300">32</div>
              <div className="text-xs font-bold text-red-100 mt-0.5">Trang Infographic HD</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 2. KỆ SÁCH CHỌN CHUYÊN ĐỀ SỔ TAY (PHÒNG CHÁY, GIAO THÔNG, V.V.)    */}
      {/* ================================================================= */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 flex items-center space-x-2">
            <BookMarked className="w-6 h-6 text-red-600" />
            <span>Chọn Cuốn Sổ Tay Tuyên Truyền Cần Đọc:</span>
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: '📚 Tất cả sổ tay', icon: BookOpen },
              { id: 'pccc', label: '🔥 Phòng cháy chữa cháy', icon: Flame },
              { id: 'giao_thong', label: '🚦 An toàn giao thông', icon: Bike },
              { id: 'lua_dao', label: '🛡️ Phòng chống lừa đảo', icon: ShieldAlert },
              { id: 'cu_tru', label: '🪪 Căn cước & VNeID', icon: UserCheck }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
                  selectedCategory === cat.id
                    ? 'bg-red-700 text-white border-red-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-red-300 hover:text-red-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Danh sách các cuốn sổ tay trên kệ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => {
            const isSelected = book.id === activeBookId;
            return (
              <button
                key={book.id}
                type="button"
                onClick={() => handleSelectBook(book.id)}
                className={`group text-left rounded-2xl p-4 transition-all duration-200 border flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-50 via-white to-red-50 border-red-600 ring-2 ring-red-600/30 shadow-lg -translate-y-0.5'
                    : 'bg-white border-slate-200 hover:border-red-400 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                      {book.categoryName}
                    </span>
                    <span className="text-[11px] font-black text-amber-700">
                      {book.totalPages} trang
                    </span>
                  </div>

                  <h3 className="font-black text-sm sm:text-base text-slate-900 group-hover:text-red-700 transition leading-snug mb-1.5">
                    {book.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {book.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-extrabold flex items-center space-x-1 ${
                      isSelected ? 'text-red-700' : 'text-police-700 group-hover:text-red-600'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isSelected ? 'Đang mở đọc' : 'Mở đọc sách'}</span>
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      book.coverUrl
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {book.coverUrl ? 'Infographic HD' : 'Tóm tắt'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================================================================= */}
      {/* 3. TRÌNH ĐỌC SÁCH LẬT TRANG (INTERACTIVE BOOK FLIPBOOK)             */}
      {/* ================================================================= */}
      <div
        ref={readerContainerRef}
        className={`${
          isFullscreen
            ? 'fixed inset-0 z-50 bg-slate-950 flex flex-col justify-between p-2 sm:p-4 overflow-y-auto'
            : 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-3 sm:p-6 shadow-2xl border border-slate-800'
        } text-white transition-all`}
      >
        {/* THANH CÔNG CỤ ĐỌC SÁCH PHÍA TRÊN */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center shadow-md shrink-0">
              <BookOpen className="w-5 h-5 text-yellow-200" />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-lg text-white leading-tight">
                {activeBook.title}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium">
                {viewMode === 'book'
                  ? currentPage === 0
                    ? 'Đang xem: Trang Bìa (Bấm nút Lật trang tiếp theo hoặc mũi tên phải để mở sách)'
                    : `Đang mở: Trang ${currentPage}${
                        currentPage + 1 < totalPages ? ` - Trang ${currentPage + 1}` : ''
                      } / Tổng ${totalPages - 1} trang nội dung`
                  : `Đang xem: ${activeBook.pages[currentPage]?.label} (${
                      currentPage === 0 ? 'Trang Bìa' : `Trang ${currentPage}/${totalPages - 1}`
                    })`}
              </p>
            </div>
          </div>

          {/* Các nút điều khiển chế độ xem */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Chuyển chế độ Sách mở đôi (2 trang) / 1 Trang lớn */}
            <div className="hidden md:flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => {
                  setViewMode('book');
                  if (currentPage > 0 && currentPage % 2 === 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition ${
                  viewMode === 'book'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Hiển thị 2 trang mở đôi như quyển sách thật"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Sách mở đôi (2 trang)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('single')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition ${
                  viewMode === 'single'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Hiển thị 1 trang cỡ lớn để đọc chữ rõ nhất"
              >
                <FileImage className="w-3.5 h-3.5" />
                <span>1 Trang lớn</span>
              </button>
            </div>

            {/* Nút Mục lục */}
            <button
              type="button"
              onClick={() => setShowToc(!showToc)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition ${
                showToc
                  ? 'bg-red-600 text-white border-red-500'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <List className="w-4 h-4" />
              <span>Mục lục ({totalPages})</span>
            </button>

            {/* Nút Tự động lật */}
            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition ${
                isAutoPlay
                  ? 'bg-emerald-600 text-white border-emerald-500 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Tự động lật trang sau mỗi 5.5 giây"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="hidden sm:inline">{isAutoPlay ? 'Dừng lật' : 'Tự động lật'}</span>
            </button>

            {/* Thu phóng */}
            <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 p-0.5">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                disabled={zoomLevel <= 1}
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 transition"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-bold px-1.5 text-amber-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(2, +(z + 0.25).toFixed(2)))}
                disabled={zoomLevel >= 2}
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 transition"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Quay về Trang bìa */}
            <button
              type="button"
              onClick={() => jumpToPage(0)}
              disabled={currentPage === 0}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 border border-slate-700 transition"
              title="Quay về Trang bìa"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Toàn màn hình */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-300 border border-slate-700 transition"
              title={isFullscreen ? 'Thoát toàn màn hình' : 'Xem toàn màn hình'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* THANH CHUYỂN TRANG NHANH NGAY PHÍA TRÊN SÁCH (DỄ BẤM TRÊN ĐIỆN THOẠI & MÁY TÍNH) */}
        <div className="flex items-center justify-between gap-2 py-2.5 border-b border-slate-800/80">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={!canGoPrev}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-35 text-white font-bold text-xs flex items-center space-x-1.5 border border-slate-700 transition"
          >
            <ChevronLeft className="w-4 h-4 text-amber-400" />
            <span>Trang trước</span>
          </button>

          <div className="flex items-center space-x-1.5 overflow-x-auto max-w-[55vw] sm:max-w-md md:max-w-xl py-0.5 scrollbar-none">
            {activeBook.pages.map((p) => {
              const isSelected =
                viewMode === 'book'
                  ? currentPage === 0
                    ? p.pageNumber === 0
                    : p.pageNumber === currentPage || p.pageNumber === currentPage + 1
                  : p.pageNumber === currentPage;
              return (
                <button
                  key={p.pageNumber}
                  type="button"
                  onClick={() => jumpToPage(p.pageNumber)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition shrink-0 border ${
                    isSelected
                      ? 'bg-red-600 text-yellow-200 border-yellow-400 shadow-sm'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {p.pageNumber === 0 ? 'Bìa' : p.pageNumber}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={!canGoNext}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 active:scale-95 disabled:opacity-35 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-md transition"
          >
            <span>Trang tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* NGĂN MỤC LỤC NHANH */}
        {showToc && (
          <div className="my-3 bg-slate-800/95 border border-slate-700 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider flex items-center space-x-2">
                <List className="w-4 h-4" />
                <span>Mục lục các trang trong cuốn sổ tay ({totalPages} trang):</span>
              </h4>
              <button
                type="button"
                onClick={() => setShowToc(false)}
                className="text-xs text-slate-400 hover:text-white font-bold"
              >
                Đóng ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1">
              {activeBook.pages.map((p) => {
                const isActive =
                  viewMode === 'book'
                    ? currentPage === 0
                      ? p.pageNumber === 0
                      : p.pageNumber === currentPage || p.pageNumber === currentPage + 1
                    : p.pageNumber === currentPage;
                return (
                  <button
                    key={p.pageNumber}
                    type="button"
                    onClick={() => jumpToPage(p.pageNumber)}
                    className={`text-left p-2.5 rounded-xl border text-xs transition flex items-start space-x-2.5 ${
                      isActive
                        ? 'bg-amber-500/20 border-amber-400 text-white font-bold'
                        : 'bg-slate-900/70 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <span className="px-2 py-0.5 rounded bg-red-700 text-yellow-200 font-black text-[10px] shrink-0 mt-0.5">
                      {p.pageNumber === 0 ? 'Bìa' : `Tr.${p.pageNumber}`}
                    </span>
                    <span className="line-clamp-2 leading-snug">{p.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =============================================================== */}
        {/* SÂN KHẤU ĐỌC SÁCH (HIỂN THỊ ĐỦ 100% ẢNH TRÊN CẢ PC & MOBILE)    */}
        {/* =============================================================== */}
        <div
          className="relative my-3 sm:my-5 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Nút mũi tên Trái (Hiển thị trên cả Điện thoại và Máy tính) */}
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={!canGoPrev}
            aria-label="Trang trước"
            className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-slate-800/95 hover:bg-red-700 disabled:opacity-20 text-white border border-slate-600 shadow-xl transition transform active:scale-90 mr-1.5 sm:mr-3 lg:mr-5 shrink-0 z-30"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* KHUNG BÌA SÁCH & GIẤY NHIỀU LỚP */}
          <div className={`relative w-full ${viewMode === 'book' ? 'max-w-4xl' : 'max-w-md'} mx-auto`}>
            <div className="relative bg-gradient-to-b from-[#4a1c17] via-[#38130f] to-[#290c09] p-1.5 sm:p-3 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-2 border-amber-700/40">
              <div className="relative bg-[#e6dec8] p-1 sm:p-1.5 rounded-2xl shadow-inner">
                <div
                  className={`relative transition-opacity duration-200 ${
                    isFlipping ? 'opacity-80' : 'opacity-100'
                  }`}
                >
                  {viewMode === 'book' ? (
                    /* ===================================================== */
                    /* CHẾ ĐỘ SÁCH MỞ ĐÔI 2 TRANG (MÁY TÍNH)                 */
                    /* ===================================================== */
                    <div className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden items-stretch">
                      {/* Gáy sách 3D ở chính giữa */}
                      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-7 z-30 pointer-events-none bg-gradient-to-r from-black/25 via-amber-950/60 to-black/25 shadow-inner" />
                      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-30 pointer-events-none bg-amber-200/30" />

                      {/* TRANG BÊN TRÁI */}
                      <div className="min-h-0 flex flex-col relative">
                        {currentPage === 0 ? (
                          /* Trang lót bìa trái khi đang ở Trang Bìa */
                          <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-amber-950 p-5 sm:p-7 flex flex-col justify-between text-white rounded-l-2xl border-r border-amber-500/30 shadow-[inset_-18px_0_30px_-10px_rgba(0,0,0,0.55)] select-none">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-3 border-b border-yellow-400/30 pb-3.5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src="/logo-cong-an.png"
                                  alt="Công an nhân dân"
                                  className="w-11 h-11 object-contain bg-white rounded-full p-1 shadow"
                                />
                                <div>
                                  <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider">
                                    CÔNG AN TỈNH HƯNG YÊN
                                  </div>
                                  <div className="text-base font-black tracking-tight text-white">
                                    CÔNG AN XÃ ĐỨC HỢP
                                  </div>
                                </div>
                              </div>

                              <div className="inline-block bg-yellow-400 text-red-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                                Ấn phẩm tuyên truyền pháp luật số
                              </div>

                              <h2 className="text-lg sm:text-2xl font-black text-yellow-300 leading-snug">
                                {activeBook.title}
                              </h2>

                              <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                                {activeBook.subtitle}
                              </p>

                              <div className="bg-black/25 border border-yellow-400/25 rounded-2xl p-4 space-y-2 text-xs text-amber-100">
                                <div className="font-black text-yellow-300 uppercase">
                                  📖 Hướng dẫn đọc sổ tay:
                                </div>
                                <p>• Bấm vào <strong>mép góc trang phải</strong> hoặc nút mũi tên để lật từng trang sách.</p>
                                <p>• Bấm trực tiếp vào hình ảnh trang sách để <strong>phóng to toàn màn hình</strong> đọc rõ từng chi tiết nhỏ.</p>
                                <p>• Có thể chuyển sang chế độ <strong>1 Trang lớn</strong> trên thanh công cụ nếu muốn xem từng trang khổ lớn.</p>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-yellow-400/25 flex items-center justify-between text-xs text-yellow-200">
                              <span className="font-bold">📞 Trực ban: 02213.815.999</span>
                              <button
                                type="button"
                                onClick={handleNextPage}
                                className="bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 transition transform hover:scale-105"
                              >
                                <span>Mở trang 1</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          leftPage && renderPageSheet(leftPage, 'left', handlePrevPage)
                        )}
                      </div>

                      {/* TRANG BÊN PHẢI */}
                      <div className="min-h-0 flex flex-col relative">
                        {rightPage ? (
                          renderPageSheet(rightPage, 'right', handleNextPage)
                        ) : (
                          /* Bìa sau khi đọc hết trang cuối */
                          <div className="w-full h-full bg-gradient-to-br from-amber-950 via-red-900 to-red-950 p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white rounded-r-2xl shadow-[inset_18px_0_30px_-10px_rgba(0,0,0,0.55)] select-none space-y-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/logo-cong-an.png"
                              alt="Logo Công an"
                              className="w-16 h-16 object-contain bg-white rounded-full p-1.5 shadow-lg"
                            />
                            <h3 className="text-lg sm:text-xl font-black text-yellow-300 uppercase">
                              CÔNG AN XÃ ĐỨC HỢP - TỈNH HƯNG YÊN
                            </h3>
                            <p className="text-xs sm:text-sm text-red-100 max-w-md leading-relaxed">
                              Bạn đã đọc đến trang cuối của cuốn <strong>{activeBook.title}</strong>. Hãy chia sẻ kiến thức hữu ích này đến người thân và bà con lối xóm!
                            </p>
                            <div className="bg-white/10 border border-yellow-400/30 rounded-2xl p-4 text-xs space-y-1">
                              <div className="font-bold text-yellow-300">Đường dây nóng Trực ban & Báo cháy:</div>
                              <div className="text-base font-black text-white">02213.815.999 • 114</div>
                            </div>
                            <button
                              type="button"
                              onClick={() => jumpToPage(0)}
                              className="bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black px-5 py-2.5 rounded-xl shadow-lg flex items-center space-x-2 transition"
                            >
                              <RotateCcw className="w-4 h-4" />
                              <span>Đọc lại từ Trang Bìa</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* ===================================================== */
                    /* CHẾ ĐỘ 1 TRANG LỚN (ĐIỆN THOẠI & MÁY TÍNH)            */
                    /* ===================================================== */
                    <div className="w-full mx-auto">
                      {leftPage &&
                        renderPageSheet(
                          leftPage,
                          'single',
                          canGoNext ? handleNextPage : undefined
                        )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Nút mũi tên Phải (Hiển thị trên cả Điện thoại và Máy tính) */}
          <button
            type="button"
            onClick={handleNextPage}
            disabled={!canGoNext}
            aria-label="Trang tiếp theo"
            className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-amber-500 hover:bg-amber-400 disabled:opacity-20 text-slate-950 border-2 border-yellow-200 shadow-xl transition transform active:scale-90 ml-1.5 sm:ml-3 lg:ml-5 shrink-0 z-30"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* THANH ĐIỀU HƯỚNG DƯỚI CÙNG */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={handlePrevPage}
              disabled={!canGoPrev}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center space-x-1.5 border border-slate-700 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Lật trang trước</span>
            </button>

            <button
              type="button"
              onClick={handleNextPage}
              disabled={!canGoNext}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 active:scale-95 disabled:opacity-40 text-slate-950 font-black text-xs flex items-center justify-center space-x-1.5 shadow-md transition"
            >
              <span>Lật trang tiếp theo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs text-slate-400 text-center sm:text-right">
            💡 Mẹo: Vuốt ngang trang sách hoặc bấm vào số trang để chuyển nhanh.
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 4. LIGHTBOX MODAL PHÓNG TO ĐỌC CHI TIẾT TỪNG CHỮ TRONG INFOGRAPHIC */}
      {/* ================================================================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-between p-2 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="w-full max-w-4xl flex items-center justify-between bg-slate-900/90 border border-slate-700 px-4 py-2.5 rounded-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="truncate pr-3">
              <span className="text-xs font-extrabold text-yellow-300 mr-2">
                [{lightboxImage.label}]
              </span>
              <span className="text-xs sm:text-sm font-bold">{lightboxImage.title}</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <a
                href={lightboxImage.url}
                download={`Cam-nang-PCCC-${lightboxImage.label}.jpg`}
                className="px-3 py-1.5 rounded-xl bg-police-700 hover:bg-police-600 text-white text-xs font-bold flex items-center space-x-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải ảnh HD</span>
              </a>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
              >
                Đóng ✕
              </button>
            </div>
          </div>

          <div
            className="flex-1 w-full overflow-auto flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="text-xs text-slate-400 text-center">
            Mẹo: Bạn có thể dùng 2 ngón tay phóng to trên điện thoại để đọc rõ từng chi tiết. Bấm Đóng để quay lại.
          </div>
        </div>
      )}
    </div>
  );
}

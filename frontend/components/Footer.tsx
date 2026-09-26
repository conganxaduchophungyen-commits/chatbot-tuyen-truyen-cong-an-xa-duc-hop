import React from 'react';
import { Shield, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Thông tin đơn vị */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-police-700 flex items-center justify-center text-yellow-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">CÔNG AN XÃ ĐỨC HỢP</h3>
                <p className="text-xs text-slate-400">Công an huyện Kim Động, tỉnh Hưng Yên</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Hệ thống Trợ lý số hỗ trợ người dân tìm hiểu pháp luật, phòng ngừa tội phạm công nghệ cao và hướng dẫn thực hiện thủ tục hành chính công trực tuyến.
            </p>
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-yellow-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
              <span>Đề án 06/CP - Chuyển đổi số Quốc gia</span>
            </div>
          </div>

          {/* Trực ban & Tiếp công dân */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Trực ban & Tiếp nhận tin báo
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Trụ sở Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <span className="text-slate-400">Đường dây nóng: </span>
                  <a href="tel:02213811000" className="text-white font-bold hover:text-yellow-400 transition">
                    02213.811.xxx
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>Trực ban giải quyết tin báo: <strong>24/24h tất cả các ngày</strong></span>
              </li>
              <li className="text-xs text-slate-400 pl-8">
                Tiếp nhận giải quyết TTHC: Giờ hành chính từ Thứ 2 đến Thứ 6 và Sáng Thứ 7.
              </li>
            </ul>
          </div>

          {/* Liên kết chính thức */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Cổng Thông tin Chính thức
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://dichvucong.bocongan.gov.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 flex items-center justify-between group transition"
                >
                  <span>Cổng Dịch vụ công Bộ Công an</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-yellow-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dichvucong.gov.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 flex items-center justify-between group transition"
                >
                  <span>Cổng Dịch vụ công Quốc gia</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-yellow-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://vneid.gov.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 flex items-center justify-between group transition"
                >
                  <span>Ứng dụng Định danh điện tử VNeID</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-yellow-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hungyen.gov.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 flex items-center justify-between group transition"
                >
                  <span>Cổng TTĐT Tỉnh Hưng Yên</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-yellow-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền & Khuyến cáo */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Bản quyền thuộc về Công an xã Đức Hợp - Công an huyện Kim Động, tỉnh Hưng Yên.</p>
          <p className="text-center md:text-right">
            Lưu ý: Mọi thông tin trên trang web mang tính chất hướng dẫn, tuyên truyền và hỗ trợ công dân.
          </p>
        </div>
      </div>
    </footer>
  );
}

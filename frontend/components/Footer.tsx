import React from 'react';
import Link from 'next/link';
import { Shield, Phone, MapPin, Clock, ExternalLink, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Thông tin đơn vị */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-cong-an.png"
                  alt="Logo Công an nhân dân"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base">CÔNG AN XÃ ĐỨC HỢP</h3>
                <p className="text-xs text-yellow-300 font-semibold">Công an tỉnh Hưng Yên</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              Hệ thống Trợ lý số hỗ trợ bà con nhân dân tìm hiểu pháp luật, phòng ngừa tội phạm lừa đảo công nghệ cao và hướng dẫn thủ tục hành chính công trực tuyến.
            </p>
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-yellow-400 px-3 py-1.5 rounded-xl text-xs font-semibold">
              <span>Đề án 06/CP - Chuyển đổi số Quốc gia</span>
            </div>
          </div>

          {/* Trực ban & Tiếp công dân */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Trực ban & Địa điểm tiếp công dân
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Trụ sở Công an xã: <strong>Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên</strong></span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <span className="text-slate-400">Đường dây nóng Trực ban: </span>
                  <a href="tel:02213815999" className="text-yellow-300 font-extrabold hover:underline">
                    02213.815.999
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>Trực ban tiếp nhận tin báo: <strong>24/24h tất cả các ngày trong tuần</strong></span>
              </li>
              <li className="text-xs text-slate-400 pl-8">
                Tiếp nhận giải quyết TTHC: Giờ hành chính từ Thứ 2 đến Thứ 6 và Sáng Thứ 7.
              </li>
            </ul>
          </div>

          {/* Liên kết chính thức & Phân hệ Cán bộ */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Cổng Dịch vụ công & Quản trị
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
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
                  <span>Định danh điện tử VNeID</span>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-yellow-400" />
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link 
                  href="/admin/login" 
                  className="text-police-300 hover:text-white flex items-center space-x-1.5 font-bold transition"
                >
                  <Lock className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Dành cho Cán bộ Công an xã đăng nhập</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2026 Bản quyền thuộc về Công an xã Đức Hợp, tỉnh Hưng Yên.</p>
          <p className="text-center md:text-right">
            Lưu ý: Mọi thông tin trên trang web mang tính chất hướng dẫn, tuyên truyền và hỗ trợ công dân.
          </p>
        </div>
      </div>
    </footer>
  );
}

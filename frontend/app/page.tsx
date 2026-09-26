'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Search, 
  UserCheck, 
  Bike, 
  Flame, 
  ShieldAlert, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  CheckCircle2, 
  ExternalLink,
  MessageSquareText,
  AlertTriangle
} from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickCategories = [
    {
      id: 'cu_tru',
      name: 'Cư trú & Căn cước VNeID',
      desc: 'Đăng ký thường trú, tạm trú, cấp thẻ Căn cước mới & kích hoạt VNeID',
      icon: UserCheck,
      color: 'from-blue-600 to-police-700',
      tag: 'Phổ biến nhất',
    },
    {
      id: 'giao_thong',
      name: 'Giao thông & Đăng ký xe',
      desc: 'Đăng ký xe máy tại xã, sang tên đổi chủ, nộp phạt nguội online',
      icon: Bike,
      color: 'from-emerald-600 to-teal-700',
      tag: 'Phân cấp xã',
    },
    {
      id: 'pccc',
      name: 'Phòng cháy & Cứu nạn (PCCC)',
      desc: 'An toàn PCCC gia đình, nhà ở kết hợp kinh doanh & kỹ năng thoát nạn',
      icon: Flame,
      color: 'from-amber-600 to-orange-700',
      tag: 'Bắt buộc an toàn',
    },
    {
      id: 'canh_bao',
      name: 'Cảnh báo Lừa đảo qua mạng',
      desc: 'Nhận diện thủ đoạn giả danh công an, lừa tiền online & cách phòng ngừa',
      icon: ShieldAlert,
      color: 'from-red-600 to-rose-700',
      tag: 'Cảnh giác cao',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-police-900 via-police-800 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Decorative Grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Badge Đơn vị */}
            <div className="inline-flex items-center space-x-2 bg-police-700/80 border border-police-500/40 text-yellow-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>CÔNG AN XÃ ĐỨC HỢP • PHỤC VỤ NHÂN DÂN 24/7</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Trợ Lý Số Pháp Luật & <br className="hidden sm:inline" />
              <span className="text-yellow-400">Thủ Tục Hành Chính Cho Người Dân</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tra cứu nhanh hồ sơ giấy tờ cần chuẩn bị, trình tự các bước, mức phí và hướng dẫn nộp hồ sơ trực tuyến tại xã Đức Hợp.
            </p>

            {/* Thanh Tìm Kiếm Trung Tâm */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-1.5 focus-within:ring-4 focus-within:ring-police-400 transition">
                <Search className="w-6 h-6 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Nhập thủ tục cần tìm (VD: nhập khẩu, làm căn cước, đăng ký xe máy...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button 
                  className="bg-police-600 hover:bg-police-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition shrink-0"
                >
                  Tìm kiếm
                </button>
              </div>

              {/* Gợi ý tìm nhanh */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-300">
                <span className="text-slate-400">Gợi ý nhanh:</span>
                <button className="bg-police-800/60 hover:bg-police-700 px-2.5 py-1 rounded-full transition border border-police-600/40">
                  Đăng ký thường trú
                </button>
                <button className="bg-police-800/60 hover:bg-police-700 px-2.5 py-1 rounded-full transition border border-police-600/40">
                  Cấp Căn cước mới
                </button>
                <button className="bg-police-800/60 hover:bg-police-700 px-2.5 py-1 rounded-full transition border border-police-600/40">
                  Đăng ký xe máy
                </button>
                <button className="bg-police-800/60 hover:bg-police-700 px-2.5 py-1 rounded-full transition border border-police-600/40">
                  Mẫu CT01
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 NHÓM NGHIỆP VỤ TRỌNG TÂM */}
        <section id="thu-tuc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickCategories.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition transform p-5 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-800 group-hover:text-police-700 transition mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-police-600 group-hover:text-police-700">
                    <span>Xem hướng dẫn</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CẢNH BÁO THỦ ĐOẠN LỪA ĐẢO MỚI */}
        <section id="canh-bao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <AlertTriangle className="w-7 h-7 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Cảnh giác tội phạm</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-red-950">
                    Cảnh Báo Thủ Đoạn Giả Danh Công An Yêu Cầu Cài Đặt VNeID Giả Mạo
                  </h2>
                </div>
              </div>
              <a 
                href="tel:02213811000"
                className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow transition shrink-0"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Báo tin cho Công an xã</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-2xl p-4 border border-red-100 shadow-sm">
                <h4 className="font-bold text-red-900 mb-2 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span>Dấu hiệu nhận biết thủ đoạn lừa đảo:</span>
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Đối tượng tự xưng là cán bộ Công an gọi điện báo lỗi định danh VNeID hoặc sai dữ liệu cư trú.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Gửi link lạ qua Zalo yêu cầu tải file cài đặt (đuôi .apk) không phải từ kho ứng dụng CH Play / App Store.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold shrink-0">•</span>
                    <span>Yêu cầu cung cấp mã OTP ngân hàng hoặc quét khuôn mặt để chiếm đoạt tài khoản.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
                <h4 className="font-bold text-emerald-900 mb-2 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Khuyến cáo từ Công an xã Đức Hợp:</span>
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>Công an KHÔNG BAO GIỜ yêu cầu công dân cài đặt phần mềm qua link gửi ngoài mạng xã hội.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>Tuyệt đối không cấp quyền trợ năng và không chuyển tiền theo yêu cầu của số điện thoại lạ.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>Khi cần hỗ trợ, trực tiếp đến Trụ sở Công an xã Đức Hợp để được hướng dẫn miễn phí.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TIỆN ÍCH DVC QUỐC GIA & BỘ CÔNG AN */}
        <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Liên Kết Dịch Vụ Công Trực Tuyến Chính Thức
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Truy cập an toàn đến các hệ thống một cửa điện tử của Chính phủ và Bộ Công an
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://dichvucong.bocongan.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-police-500 shadow-sm hover:shadow-md transition flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-police-700 transition">
                    Cổng DVC Bộ Công an
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Nộp hồ sơ cư trú, đăng ký xe, CCCD</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-police-600 transition shrink-0 ml-2" />
              </a>

              <a 
                href="https://dichvucong.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-red-500 shadow-sm hover:shadow-md transition flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-red-700 transition">
                    Cổng DVC Quốc gia
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Nộp phạt giao thông, tra cứu hồ sơ</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition shrink-0 ml-2" />
              </a>

              <a 
                href="https://vneid.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-md transition flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-amber-700 transition">
                    Định Danh Điện Tử VNeID
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Kích hoạt tài khoản Mức 1 & Mức 2</p>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition shrink-0 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* NÚT KÍCH HOẠT TRỢ LÝ AI (FLOATING BUTTON CHUẨN BỊ CHO GIAI ĐOẠN 2 & 3) */}
        <div className="fixed bottom-6 right-6 z-40">
          <button 
            className="flex items-center space-x-2 bg-gradient-to-r from-police-700 to-police-900 hover:from-police-800 hover:to-police-950 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-police-500/50 transition transform hover:scale-105 active:scale-95 border-2 border-yellow-400"
            onClick={() => alert("Trợ lý AI Công an xã Đức Hợp đang được kích hoạt ở Giai đoạn 2 & 3. Hãy nhập câu hỏi để thử nghiệm!")}
          >
            <div className="relative">
              <MessageSquareText className="w-6 h-6 text-yellow-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <span className="font-bold text-sm hidden sm:inline">Hỏi Trợ lý AI Công an xã</span>
            <span className="font-bold text-sm sm:hidden">Hỏi AI</span>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

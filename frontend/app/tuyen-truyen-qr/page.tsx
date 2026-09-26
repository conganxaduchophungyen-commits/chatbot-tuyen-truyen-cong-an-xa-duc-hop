'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Printer, Phone, Download, QrCode, CheckCircle2, MapPin } from 'lucide-react';

export default function PropagandaQRPage() {
  const [appUrl, setAppUrl] = useState('https://conganxaduchop.hungyen.gov.vn');

  const handlePrint = () => {
    window.print();
  };

  // Tạo URL SVG QR Code nhanh qua API QuickChart QR chuẩn nét
  const qrImageUrl = `https://quickchart.io/qr?text=${encodeURIComponent(appUrl)}&size=300&margin=1&ecLevel=H`;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Controls Bar (Không in khi bấm Print) */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 mb-8 print:hidden">
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Bộ Ấn Phẩm Tuyên Truyền Mã QR - Công An Xã Đức Hợp
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Công cụ tạo mẫu Decal / Standee chuẩn kích thước để in ấn dán tại Bàn tiếp dân Công an xã và Bảng tin Nhà văn hóa 5 thôn (Thôn Đức Hợp, Thôn Nam Tiến, Thôn Thọ Bình, Thôn Phú Mỹ, Thôn An Cảnh).
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Đường dẫn Cổng thông tin (URL Web App):
                </label>
                <input
                  type="text"
                  value={appUrl}
                  onChange={(e) => setAppUrl(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-police-500 font-mono text-police-900"
                />
              </div>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto mt-auto inline-flex items-center justify-center space-x-2 bg-police-700 hover:bg-police-800 text-white font-extrabold px-6 py-2.5 rounded-xl text-sm shadow-md transition transform active:scale-95 shrink-0"
              >
                <Printer className="w-4 h-4" />
                <span>In Mẫu Decal (A4 / Standee)</span>
              </button>
            </div>
          </div>

          {/* MẪU STANDEE / DECAL IN ẤN CHUẨN CƠ SỞ */}
          <div className="bg-white border-4 border-red-600 rounded-3xl shadow-2xl overflow-hidden print:border-4 print:shadow-none print:m-0 print:rounded-none">
            {/* Top Red Banner Header */}
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-center p-6 sm:p-8 border-b-4 border-yellow-400">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400 text-police-950 flex items-center justify-center mx-auto mb-3 shadow-lg border-2 border-white">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-police-900" />
              </div>
              <h2 className="text-sm sm:text-base font-bold tracking-widest uppercase text-yellow-300">
                CÔNG AN TỈNH HƯNG YÊN - CÔNG AN HUYỆN KIM ĐỘNG
              </h2>
              <h3 className="text-xl sm:text-3xl font-black tracking-wide uppercase mt-1">
                CÔNG AN XÃ ĐỨC HỢP
              </h3>
              <div className="inline-block bg-yellow-400 text-red-950 font-black px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-wider mt-3 shadow">
                ĐỀ ÁN 06/CP - CHUYỂN ĐỔI SỐ PHỤC VỤ NHÂN DÂN
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 text-center">
              <h4 className="text-lg sm:text-2xl font-black text-police-900 uppercase leading-snug mb-2">
                TRỢ LÝ SỐ PHÁP LUẬT & THỦ TỤC HÀNH CHÍNH
              </h4>
              <p className="text-xs sm:text-base text-slate-600 font-semibold mb-8 max-w-xl mx-auto">
                Quét mã QR bằng Camera điện thoại hoặc ứng dụng Zalo để tra cứu hồ sơ và hỏi đáp Trợ lý AI 24/7
              </p>

              {/* KHUNG MÃ QR TRUNG TÂM */}
              <div className="inline-block p-4 sm:p-6 bg-slate-50 border-4 border-dashed border-police-600 rounded-3xl shadow-inner mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrImageUrl}
                  alt="Mã QR Cổng DVC Công an xã Đức Hợp"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain mx-auto rounded-xl shadow-md"
                />
                <div className="mt-3 text-xs sm:text-sm font-bold text-police-800 flex items-center justify-center space-x-1">
                  <QrCode className="w-4 h-4 text-red-600" />
                  <span>DÙNG ZALO QUÉT MÃ ĐỂ MỞ NGAY</span>
                </div>
              </div>

              {/* 4 LỢI ÍCH TRỌNG TÂM CHO BÀ CON */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left max-w-2xl mx-auto mb-8 text-xs sm:text-sm">
                <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span className="text-slate-800">Biết rõ giấy tờ cần mang, không sợ thiếu sót.</span>
                </div>
                <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-slate-800">Hướng dẫn nộp hồ sơ trực tuyến tại nhà.</span>
                </div>
                <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span className="text-slate-800">Cảnh báo 10 chiêu trò lừa đảo qua mạng.</span>
                </div>
                <div className="bg-purple-50 p-3.5 rounded-2xl border border-purple-200 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span className="text-slate-800">Trợ lý AI giải đáp tự nhiên, tận tình 24/7.</span>
                </div>
              </div>

              {/* FOOTER ĐƯỜNG DÂY NÓNG TRỰC BAN KHẨN CẤP */}
              <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-red-950">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-red-600">Đường dây nóng Trực ban tiếp dân (24/24h)</div>
                    <div className="text-lg sm:text-xl font-black text-red-800">02213.811.xxx - 0988.xxx.xxx</div>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-600 flex items-center space-x-1.5 shrink-0">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Trụ sở Công an xã Đức Hợp, Kim Động, Hưng Yên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

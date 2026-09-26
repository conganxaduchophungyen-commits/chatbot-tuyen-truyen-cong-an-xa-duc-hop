'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Phone, 
  FileText, 
  AlertTriangle, 
  Menu, 
  X, 
  QrCode, 
  Lock, 
  GraduationCap, 
  Home
} from 'lucide-react';

export type NavTabType = 'home' | 'procedures' | 'scam' | 'quiz';

interface NavbarProps {
  activeTab?: NavTabType;
  onSelectTab?: (tab: NavTabType) => void;
}

export default function Navbar({ activeTab = 'home', onSelectTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleTabClick = (tab: NavTabType) => {
    setIsOpen(false);
    if (onSelectTab) {
      onSelectTab(tab);
    } else {
      router.push(`/?tab=${tab}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      {/* Top Banner Tiêu đề Cơ quan cấp trên và Hotline */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs sm:text-sm py-1.5 px-4 font-semibold tracking-wide shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="font-bold">CÔNG AN TỈNH HƯNG YÊN • CÔNG AN XÃ ĐỨC HỢP</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-yellow-200">Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên</span>
            <span>•</span>
            <a 
              href="tel:02213815999" 
              className="flex items-center space-x-1.5 bg-red-800 hover:bg-red-900 px-3 py-0.5 rounded-full text-yellow-300 font-extrabold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Trực ban 24/7: 02213.815.999</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Logo Công An Nhân Dân & Tên Đơn Vị */}
          <Link 
            href="/" 
            onClick={() => onSelectTab && onSelectTab('home')}
            className="flex items-center space-x-3 group shrink-0"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-cong-an.png"
                alt="Logo Công an nhân dân"
                className="w-full h-full object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg lg:text-xl text-red-700 leading-tight uppercase tracking-tight">
                CÔNG AN XÃ ĐỨC HỢP
              </div>
              <div className="text-xs font-bold text-police-900 leading-tight">
                Tỉnh Hưng Yên
              </div>
              <div className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Trợ lý số Pháp luật & Thủ tục hành chính
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links: Các mục tách biệt nhau, viền bo tròn */}
          <nav className="hidden xl:flex items-center space-x-2 font-bold text-xs lg:text-sm">
            {/* 1. Trang chủ */}
            <button
              type="button"
              onClick={() => handleTabClick('home')}
              className={`px-3.5 py-2 rounded-full border transition flex items-center space-x-1.5 whitespace-nowrap shadow-xs ${
                activeTab === 'home'
                  ? 'bg-police-700 text-white border-police-700 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-police-400 hover:text-police-700 hover:bg-slate-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Trang chủ</span>
            </button>

            {/* 2. Thủ tục hành chính (ĐÃ GỘP Thủ tục + Biểu mẫu tờ khai) */}
            <button
              type="button"
              onClick={() => handleTabClick('procedures')}
              className={`px-3.5 py-2 rounded-full border transition flex items-center space-x-1.5 whitespace-nowrap shadow-xs ${
                activeTab === 'procedures'
                  ? 'bg-police-700 text-white border-police-700 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-police-400 hover:text-police-700 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Thủ tục hành chính</span>
            </button>

            {/* 3. Cảnh báo tội phạm */}
            <button
              type="button"
              onClick={() => handleTabClick('scam')}
              className={`px-3.5 py-2 rounded-full border transition flex items-center space-x-1.5 whitespace-nowrap shadow-xs ${
                activeTab === 'scam'
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white border-slate-200 text-red-600 hover:border-red-400 hover:bg-red-50'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Cảnh báo tội phạm</span>
            </button>

            {/* 4. Học tập & Kiểm tra kiến thức pháp luật (MỚI) */}
            <button
              type="button"
              onClick={() => handleTabClick('quiz')}
              className={`px-3.5 py-2 rounded-full border transition flex items-center space-x-1.5 whitespace-nowrap shadow-xs ${
                activeTab === 'quiz'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-white border-slate-200 text-amber-700 hover:border-amber-400 hover:bg-amber-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Kiểm tra kiến thức</span>
            </button>

            {/* 5. Mã QR Tuyên truyền */}
            <Link
              href="/tuyen-truyen-qr"
              className="px-3 py-2 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition flex items-center space-x-1.5 whitespace-nowrap shadow-xs"
            >
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>Mã QR</span>
            </Link>
          </nav>

          {/* Action Buttons: Đăng nhập Cán bộ + Hotline Trực ban */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Nút Đăng nhập Cán bộ */}
            <Link
              href="/admin/login"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full border border-police-300 text-police-800 hover:bg-police-50 font-bold text-xs lg:text-sm transition shadow-2xs whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5 text-police-700" />
              <span className="hidden sm:inline">Đăng nhập Cán bộ</span>
              <span className="sm:hidden">Cán bộ</span>
            </Link>

            {/* Hotline Call Button */}
            <a 
              href="tel:02213815999" 
              className="inline-flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-full text-xs lg:text-sm font-extrabold shadow-md hover:shadow-lg transition transform active:scale-95 shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">02213.815.999</span>
              <span className="md:hidden">Trực ban</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-full text-slate-600 hover:text-police-700 hover:bg-slate-100 focus:outline-none transition border border-slate-200"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleTabClick('home')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-bold text-sm transition ${
              activeTab === 'home'
                ? 'bg-police-700 text-white'
                : 'text-slate-800 hover:bg-slate-100'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Trang chủ</span>
          </button>

          <button
            onClick={() => handleTabClick('procedures')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-bold text-sm transition ${
              activeTab === 'procedures'
                ? 'bg-police-700 text-white'
                : 'text-slate-800 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-5 h-5 text-police-600" />
            <span>Thủ tục hành chính (Kèm Biểu mẫu tờ khai)</span>
          </button>

          <button
            onClick={() => handleTabClick('scam')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-bold text-sm transition ${
              activeTab === 'scam'
                ? 'bg-red-600 text-white'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span>Cảnh báo tội phạm & Lừa đảo mạng</span>
          </button>

          <button
            onClick={() => handleTabClick('quiz')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-bold text-sm transition ${
              activeTab === 'quiz'
                ? 'bg-amber-600 text-white'
                : 'text-amber-700 hover:bg-amber-50'
            }`}
          >
            <GraduationCap className="w-5 h-5 text-amber-600" />
            <span>Học tập & Kiểm tra kiến thức pháp luật</span>
          </button>

          <Link
            href="/tuyen-truyen-qr"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 px-4 py-3 rounded-2xl text-emerald-800 hover:bg-emerald-50 font-bold text-sm transition border border-emerald-200"
          >
            <QrCode className="w-5 h-5 text-emerald-600" />
            <span>Mã QR Tuyên truyền tại Thôn/Xã</span>
          </Link>

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
            <p>Trụ sở Công an xã Đức Hợp: Thôn Nho Lâm, xã Đức Hợp</p>
            <p>Đường dây nóng: <strong>02213.815.999</strong></p>
          </div>
        </div>
      )}
    </header>
  );
}

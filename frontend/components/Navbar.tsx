'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, FileText, AlertTriangle, ExternalLink, Menu, X, QrCode, Lock, UserCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
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
        <div className="flex items-center justify-between h-20">
          {/* Logo Công An Nhân Dân & Tên Đơn Vị */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-cong-an.png"
                alt="Logo Công an nhân dân"
                className="w-full h-full object-contain drop-shadow"
              />
            </div>
            <div>
              <div className="font-black text-base sm:text-xl text-red-700 leading-tight uppercase tracking-tight">
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

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 font-semibold text-xs sm:text-sm text-slate-700">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-xl hover:bg-police-50 hover:text-police-700 transition"
            >
              Trang chủ
            </Link>
            <Link 
              href="/#thu-tuc" 
              className="px-3 py-2 rounded-xl hover:bg-police-50 hover:text-police-700 transition flex items-center space-x-1"
            >
              <FileText className="w-4 h-4 text-police-600" />
              <span>Thủ tục hành chính</span>
            </Link>
            <Link 
              href="/#canh-bao" 
              className="px-3 py-2 rounded-xl hover:bg-red-50 hover:text-red-700 transition flex items-center space-x-1 text-red-600 font-bold"
            >
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Cảnh báo lừa đảo</span>
            </Link>
            <Link 
              href="/#bieu-mau" 
              className="px-3 py-2 rounded-xl hover:bg-police-50 hover:text-police-700 transition"
            >
              Biểu mẫu tờ khai
            </Link>
            <Link 
              href="/tuyen-truyen-qr" 
              className="px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 transition border border-amber-200 flex items-center space-x-1"
            >
              <QrCode className="w-4 h-4 text-amber-700" />
              <span>Mã QR</span>
            </Link>
          </nav>

          {/* Action Buttons: Đăng nhập Cán bộ + Hotline */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Nút Đăng nhập Cán bộ */}
            <Link
              href="/admin/login"
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-police-300 text-police-800 hover:bg-police-50 font-bold text-xs sm:text-sm transition shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-police-700" />
              <span>Đăng nhập Cán bộ</span>
            </Link>

            {/* Hotline Call Button */}
            <a 
              href="tel:02213815999" 
              className="inline-flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition transform active:scale-95 shrink-0"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span className="hidden sm:inline">02213.815.999</span>
              <span className="sm:hidden">Trực ban</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 pb-1 border-b border-slate-100">
            Cổng Dịch vụ công Công an xã Đức Hợp
          </div>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Trang chủ
          </Link>
          <Link 
            href="/#thu-tuc" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-police-800 hover:bg-police-50 flex items-center space-x-2"
          >
            <FileText className="w-4 h-4 text-police-600" />
            <span>Tra cứu thủ tục hành chính</span>
          </Link>
          <Link 
            href="/#canh-bao" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 flex items-center space-x-2"
          >
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>Cảnh báo thủ đoạn lừa đảo qua mạng</span>
          </Link>
          <Link 
            href="/#bieu-mau" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Biểu mẫu tờ khai (Mẫu CT01...)
          </Link>
          <Link 
            href="/tuyen-truyen-qr" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-sm font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 flex items-center space-x-2"
          >
            <QrCode className="w-4 h-4 text-amber-700" />
            <span>Ấn phẩm Mã QR Tuyên truyền</span>
          </Link>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link 
              href="/admin/login" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-slate-100 text-police-900 font-bold text-sm flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4" />
              <span>Đăng nhập dành cho Cán bộ Công an xã</span>
            </Link>
            <a 
              href="tel:02213815999" 
              className="w-full text-center px-4 py-2.5 rounded-xl bg-red-600 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi Trực ban: 02213.815.999</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

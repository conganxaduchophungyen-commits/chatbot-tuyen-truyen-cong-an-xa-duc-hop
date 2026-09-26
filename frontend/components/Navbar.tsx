'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Shield, FileText, AlertTriangle, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      {/* Top Banner Tiêu đề Cơ quan */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-xs sm:text-sm py-1.5 px-4 font-semibold tracking-wide shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span>CÔNG AN TỈNH HƯNG YÊN • CÔNG AN HUYỆN KIM ĐỘNG • CÔNG AN XÃ ĐỨC HỢP</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-yellow-200">Vì nhân dân phục vụ</span>
            <span>•</span>
            <a 
              href="tel:02213811000" 
              className="flex items-center space-x-1.5 bg-red-800 hover:bg-red-900 px-2.5 py-0.5 rounded-full text-yellow-300 font-bold transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Trực ban: 02213.811.xxx</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Tên Cổng */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-police-700 flex items-center justify-center text-yellow-400 shadow-md group-hover:scale-105 transition transform">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg text-police-900 leading-tight">
                TRỢ LÝ PHÁP LUẬT & TTHC
              </div>
              <div className="text-xs font-medium text-slate-500">
                Công an xã Đức Hợp, huyện Kim Động
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-lg hover:bg-police-50 hover:text-police-700 transition"
            >
              Trang chủ
            </Link>
            <Link 
              href="/#thu-tuc" 
              className="px-3 py-2 rounded-lg hover:bg-police-50 hover:text-police-700 transition flex items-center space-x-1"
            >
              <FileText className="w-4 h-4 text-police-600" />
              <span>Tra cứu thủ tục</span>
            </Link>
            <Link 
              href="/#canh-bao" 
              className="px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 transition flex items-center space-x-1 text-red-600 font-semibold"
            >
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Cảnh báo lừa đảo</span>
            </Link>
            <Link 
              href="/#bieu-mau" 
              className="px-3 py-2 rounded-lg hover:bg-police-50 hover:text-police-700 transition"
            >
              Biểu mẫu tờ khai
            </Link>
            <a 
              href="https://dichvucong.bocongan.gov.vn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center space-x-1"
            >
              <span>Cổng DVC Bộ Công an</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </nav>

          {/* Hotline CTA Button */}
          <div className="flex items-center space-x-2">
            <a 
              href="tel:02213811000" 
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition transform active:scale-95"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span className="hidden sm:inline">Hotline Công an xã</span>
              <span className="sm:hidden">Hotline</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-4 space-y-2 shadow-xl">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Trang chủ
          </Link>
          <Link 
            href="/#thu-tuc" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-police-700 hover:bg-police-50"
          >
            Tra cứu thủ tục hành chính
          </Link>
          <Link 
            href="/#canh-bao" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-semibold text-red-600 hover:bg-red-50"
          >
            Cảnh báo thủ đoạn lừa đảo
          </Link>
          <Link 
            href="/#bieu-mau" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Tải biểu mẫu tờ khai
          </Link>
          <a 
            href="https://dichvucong.bocongan.gov.vn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-100 flex items-center justify-between"
          >
            <span>Cổng DVC Bộ Công an</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      )}
    </header>
  );
}

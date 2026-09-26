'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { 
  getCategories, 
  getProcedures, 
  getArticles, 
  Category, 
  Procedure, 
  Article 
} from '@/lib/api';
import { 
  Search, 
  UserCheck, 
  Bike, 
  Flame, 
  ShieldAlert, 
  ArrowRight, 
  Clock, 
  CreditCard, 
  FileCheck2, 
  PhoneCall, 
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  FolderOpen,
  Download,
  FileText,
  MapPin,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initData() {
      setLoading(true);
      const [cats, procs, arts] = await Promise.all([
        getCategories(),
        getProcedures(),
        getArticles(true),
      ]);
      setCategories(cats);
      setProcedures(procs);
      setArticles(arts);
      setLoading(false);
    }
    initData();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    const data = await getProcedures(selectedCategory || undefined, searchQuery);
    setProcedures(data);
    setLoading(false);
  };

  const handleSelectCategory = async (catId: string | null) => {
    setSelectedCategory(catId);
    setLoading(true);
    const data = await getProcedures(catId || undefined, searchQuery);
    setProcedures(data);
    setLoading(false);
  };

  const iconMap: Record<string, any> = {
    cu_tru: UserCheck,
    giao_thong: Bike,
    pccc: Flame,
    canh_bao: ShieldAlert,
  };

  const colorMap: Record<string, string> = {
    cu_tru: 'from-blue-600 to-police-700',
    giao_thong: 'from-emerald-600 to-teal-700',
    pccc: 'from-amber-600 to-orange-700',
    canh_bao: 'from-red-600 to-rose-700',
  };

  const featuredAlert = articles.length > 0 ? articles[0] : null;

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-b from-police-950 via-police-900 to-slate-900 text-white pt-10 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Đơn vị Tag */}
            <div className="inline-flex items-center space-x-2 bg-police-800/90 border border-police-500/40 text-yellow-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span>CÔNG AN XÃ ĐỨC HỢP, TỈNH HƯNG YÊN • VÌ NHÂN DÂN PHỤC VỤ</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Trợ Lý Số Pháp Luật & <br className="hidden sm:inline" />
              <span className="text-yellow-400">Thủ Tục Hành Chính Cho Người Dân</span>
            </h1>

            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tra cứu nhanh hồ sơ giấy tờ cần chuẩn bị, quy trình các bước và hướng dẫn nộp hồ sơ trực tuyến tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên).
            </p>

            {/* Thanh Tìm Kiếm Trung Tâm */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-1.5 focus-within:ring-4 focus-within:ring-police-400 transition">
                <Search className="w-6 h-6 text-slate-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Nhập thủ tục cần tìm (VD: thường trú, tạm trú, làm căn cước, xe máy, CT01...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition shrink-0"
                >
                  Tìm kiếm
                </button>
              </div>

              {/* Gợi ý tìm nhanh */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-300">
                <span className="text-slate-400">Gợi ý nhanh:</span>
                {['Đăng ký thường trú', 'Đăng ký xe máy', 'Căn cước VNeID', 'Mẫu CT01', 'An toàn PCCC'].map((term, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSearchQuery(term);
                      getProcedures(selectedCategory || undefined, term).then(setProcedures);
                    }}
                    className="bg-police-800/70 hover:bg-police-700 px-3 py-1 rounded-full transition border border-police-600/40"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </section>

        {/* 4 NHÓM NGHIỆP VỤ TRỌNG TÂM */}
        <section id="thu-tuc" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const IconComp = iconMap[cat.code] || FolderOpen;
              const color = colorMap[cat.code] || 'from-police-600 to-police-800';
              const isSelected = selectedCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleSelectCategory(isSelected ? null : cat.id)}
                  className={`bg-white rounded-3xl p-5 shadow-lg border transition transform cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'ring-4 ring-police-500 border-police-500'
                      : 'border-slate-200/80 hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-police-700 bg-police-50 px-2 py-0.5 rounded-full border border-police-200">
                          Đang chọn
                        </span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-police-700 transition mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-police-600 group-hover:text-police-700">
                    <span>{isSelected ? 'Bỏ lọc danh mục' : 'Xem các thủ tục'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CẢNH BÁO LỪA ĐẢO NỔI BẬT */}
        {featuredAlert && (
          <section id="canh-bao" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="bg-gradient-to-r from-red-50 via-rose-50 to-red-50 border-2 border-red-300 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <AlertTriangle className="w-7 h-7 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Cảnh giác tội phạm công nghệ cao</span>
                    <h2 className="text-lg sm:text-2xl font-black text-red-950">
                      {featuredAlert.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`/canh-bao/${featuredAlert.slug}`}
                  className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow transition shrink-0"
                >
                  <span>Xem cẩm nang cảnh báo</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-medium">
                {featuredAlert.summary}
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {featuredAlert.scam_tricks.map((trick, i) => (
                  <span key={i} className="bg-white text-red-950 border border-red-200 px-3 py-1.5 rounded-xl shadow-2xs font-semibold">
                    ⚠️ {trick}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* DANH SÁCH THỦ TỤC HÀNH CHÍNH (6 THỦ TỤC CƠ SỞ CHUẨN) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Danh Sách Thủ Tục Hành Chính Cấp Xã
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Thẩm quyền tiếp nhận và giải quyết tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)
              </p>
            </div>
            {selectedCategory && (
              <button
                onClick={() => handleSelectCategory(null)}
                className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-3 py-1.5 rounded-lg transition"
              >
                Hiển thị tất cả thủ tục
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {procedures.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-police-500 hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-police-700 bg-police-50 px-2.5 py-0.5 rounded-full border border-police-200">
                      {p.code || 'TTHC Cấp Xã'}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-police-600" />
                      <span>{p.processing_time}</span>
                    </span>
                  </div>

                  <Link href={`/thu-tuc/${p.id}`}>
                    <h3 className="font-extrabold text-base text-slate-900 hover:text-police-700 transition leading-snug mb-3">
                      {p.title}
                    </h3>
                  </Link>

                  <div className="space-y-2 text-xs text-slate-600 mb-5">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Lệ phí:</strong> {p.fee}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileCheck2 className="w-4 h-4 text-police-600 shrink-0" />
                      <span><strong>Hồ sơ:</strong> {p.required_documents?.length || 0} giấy tờ cần chuẩn bị</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/thu-tuc/${p.id}`}
                    className="font-bold text-police-700 hover:text-police-800 flex items-center space-x-1"
                  >
                    <span>Xem checklist hồ sơ</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  {p.online_url && (
                    <a
                      href={p.online_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-red-700 flex items-center space-x-1 font-semibold"
                    >
                      <span>Nộp online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MỤC BIỂU MẪU TỜ KHAI (AN CHOR: #bieu-mau) */}
        <section id="bieu-mau" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-police-100 text-police-700 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Kho Biểu Mẫu Tờ Khai Hành Chính
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Bà con có thể tải về in sẵn hoặc xem hướng dẫn điền trước khi lên Trụ sở Công an xã Đức Hợp
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-police-800 px-2 py-0.5 rounded-full">
                    Cư trú
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2 mb-1">
                    Tờ khai thay đổi thông tin cư trú (Mẫu CT01)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Sử dụng cho thủ tục Đăng ký thường trú, tạm trú, khai báo tạm vắng, điều chỉnh thông tin hộ khẩu.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <a 
                    href="https://dichvucong.bocongan.gov.vn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-police-700 font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải mẫu CT01</span>
                  </a>
                  <span className="text-slate-400">Ban hành kèm TT BCA</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    Đăng ký xe
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2 mb-1">
                    Giấy khai đăng ký xe mô tô, xe gắn máy
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dùng cho thủ tục đăng ký xe lần đầu tại Công an xã Đức Hợp hoặc sang tên đổi chủ.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <a 
                    href="https://dichvucong.bocongan.gov.vn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-police-700 font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Tải mẫu kê khai xe</span>
                  </a>
                  <span className="text-slate-400">Theo Thông tư 24/2023</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    PCCC
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2 mb-1">
                    Bản cam kết an toàn PCCC hộ gia đình
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dùng cho các hộ gia đình và nhà ở kết hợp sản xuất kinh doanh ký cam kết với Công an xã Đức Hợp.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <a 
                    href="tel:02213815999" 
                    className="inline-flex items-center space-x-1 text-police-700 font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Liên hệ nhận mẫu</span>
                  </a>
                  <span className="text-slate-400">Trực tiếp tại Thôn Nho Lâm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIỆN ÍCH DVC QUỐC GIA & BỘ CÔNG AN */}
        <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Hệ Thống Dịch Vụ Công Trực Tuyến Chính Thức
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Truy cập an toàn đến các Cổng dịch vụ công của Chính phủ và Bộ Công an
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
      </main>

      {/* TÍCH HỢP TRỢ LÝ AI CHATBOT VÀO TOÀN TRANG */}
      <ChatWidget />

      <Footer />
    </>
  );
}

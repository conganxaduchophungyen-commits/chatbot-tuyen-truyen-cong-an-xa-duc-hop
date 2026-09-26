'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar, { NavTabType } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import LegalQuizSection from '@/components/LegalQuizSection';
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
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  Filter,
  QrCode
} from 'lucide-react';

function HomePageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<NavTabType>('home');
  const [categories, setCategories] = useState<Category[]>([]);
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scamSearchQuery, setScamSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Đồng bộ tab từ URL search params (VD: ?tab=procedures, ?tab=scam, ?tab=quiz)
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'procedures' || tabParam === 'scam' || tabParam === 'quiz' || tabParam === 'home') {
      setActiveTab(tabParam as NavTabType);
    }
  }, [searchParams]);

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

  // Lọc bài viết cảnh báo lừa đảo
  const filteredScamArticles = articles.filter(art => {
    if (!scamSearchQuery.trim()) return true;
    const q = scamSearchQuery.toLowerCase().trim();
    return art.title.toLowerCase().includes(q) || art.summary.toLowerCase().includes(q);
  });

  return (
    <>
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. MÀN HÌNH TỔNG QUAN (TRANG CHỦ)                         */}
        {/* ========================================================= */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-b from-police-950 via-police-900 to-slate-900 text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                      onClick={() => {
                        handleSearch();
                        setActiveTab('procedures');
                      }}
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
                          setActiveTab('procedures');
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

            {/* 3 KHỐI CHỨC NĂNG CHÍNH ĐIỀU HƯỚNG */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. Thủ tục hành chính */}
                <div
                  onClick={() => setActiveTab('procedures')}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:border-police-500 hover:shadow-xl transition cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-police-700 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-police-700 transition mb-1.5">
                      Thủ tục hành chính & Biểu mẫu
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                      Đăng ký cư trú, cấp Căn cước VNeID, đăng ký xe máy cấp xã, cam kết PCCC kèm kho biểu mẫu tờ khai.
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-police-600">
                    <span>Xem danh sách thủ tục</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>

                {/* 2. Cảnh báo tội phạm & Lừa đảo */}
                <div
                  onClick={() => setActiveTab('scam')}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:border-red-500 hover:shadow-xl transition cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-red-700 transition mb-1.5">
                      Cảnh báo tội phạm mạng
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                      Nhận diện các thủ đoạn lừa đảo qua mạng: Giả danh công an, Deepfake, bẫy việc làm hoa hồng.
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
                    <span>Xem cẩm nang cảnh giác</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>

                {/* 3. Kiểm tra kiến thức pháp luật */}
                <div
                  onClick={() => setActiveTab('quiz')}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200 hover:border-amber-500 hover:shadow-xl transition cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-amber-700 transition mb-1.5">
                      Kiểm tra kiến thức & Thi trắc nghiệm
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                      Ngân hàng hàng trăm câu hỏi tình huống thực tế, nhận diện bẫy lừa đảo và cấp chứng nhận online.
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                    <span>Làm bài kiểm tra ngay</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            </section>

            {/* BANNER NỔI BẬT: HỌC TẬP KIẾN THỨC PHÁP LUẬT */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
              <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-police-950 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-600/30">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400 text-yellow-300 flex items-center justify-center shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-yellow-300 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>PHẦN MỚI DÀNH CHO BÀ CON NHÂN DÂN</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black">
                      Học tập & Kiểm tra kiến thức pháp luật, nhận diện lừa đảo
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                      Tham gia trả lời 10 câu hỏi tình huống thực tế để nhận diện các thủ đoạn lừa đảo tinh vi và nhận Giấy chứng nhận điện tử "Công dân số cảnh giác"!
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-2xl font-black text-xs sm:text-sm shadow-lg transition shrink-0 transform active:scale-95 whitespace-nowrap"
                >
                  Bắt đầu làm bài kiểm tra →
                </button>
              </div>
            </section>

            {/* CẢNH BÁO LỪA ĐẢO MỚI NHẤT */}
            {featuredAlert && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('scam')}
                        className="bg-white hover:bg-red-50 text-red-700 border border-red-300 px-4 py-2 rounded-xl text-xs font-bold transition"
                      >
                        Xem tất cả cảnh báo
                      </button>
                      <Link
                        href={`/canh-bao/${featuredAlert.slug}`}
                        className="inline-flex items-center space-x-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow transition"
                      >
                        <span>Chi tiết</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
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

            {/* DỊCH VỤ CÔNG CHÍNH THỨC */}
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
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. MÀN HÌNH CHUYÊN BIỆT: THỦ TỤC HÀNH CHÍNH & BIỂU MẪU    */}
        {/* ========================================================= */}
        {activeTab === 'procedures' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header & Bộ lọc */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-bold text-police-700 bg-police-50 px-3 py-1 rounded-full uppercase tracking-wider border border-police-200">
                  Thẩm quyền giải quyết cấp Xã
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
                  Bộ Thủ Tục Hành Chính & Kho Biểu Mẫu Tờ Khai
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hướng dẫn chi tiết giấy tờ cần chuẩn bị, quy trình nộp hồ sơ, mức thu lệ phí và biểu mẫu tờ khai chuẩn tại Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên).
                </p>
              </div>

              {/* Tìm kiếm thủ tục */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Tìm tên thủ tục, mã thủ tục, từ khóa (VD: thường trú, xe máy, CT01)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-police-500 focus:bg-white"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-police-700 hover:bg-police-800 text-white px-6 py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow transition"
                >
                  Tìm kiếm
                </button>
              </div>

              {/* Lọc theo danh mục */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1 flex items-center space-x-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Phân loại:</span>
                </span>
                <button
                  onClick={() => handleSelectCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition border ${
                    selectedCategory === null
                      ? 'bg-police-700 text-white border-police-700 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Tất cả thủ tục ({procedures.length})
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition border ${
                      selectedCategory === cat.id
                        ? 'bg-police-700 text-white border-police-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* DANH SÁCH 6 THỦ TỤC HÀNH CHÍNH */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Danh Sách Thủ Tục Tiếp Nhận Tại Công An Xã ({procedures.length})
                </h2>
                <span className="text-xs text-slate-500">
                  Cập nhật theo quy định mới nhất của Bộ Công an
                </span>
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
                        <span>Xem chi tiết hồ sơ</span>
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
            </div>

            {/* KHO BIỂU MẪU TỜ KHAI CHUẨN ĐƯỢC GỘP TRỰC TIẾP TẠI ĐÂY */}
            <div id="bieu-mau" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-police-100 text-police-700 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Kho Biểu Mẫu Tờ Khai Hành Chính Cần Thiết
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Bà con có thể tải về in sẵn hoặc xem hướng dẫn điền trước khi lên Trụ sở Công an xã Đức Hợp (Thôn Nho Lâm)
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
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. MÀN HÌNH CHUYÊN BIỆT: CẢNH BÁO TỘI PHẠM & LỪA ĐẢO      */}
        {/* ========================================================= */}
        {activeTab === 'scam' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Header Cảnh báo */}
            <div className="bg-gradient-to-r from-red-700 via-rose-700 to-red-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-yellow-300">
                  <ShieldAlert className="w-7 h-7" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-yellow-300">
                  Trung tâm cảnh báo tội phạm Công an xã Đức Hợp
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black mb-3">
                Nhận Diện Các Phương Thức & Thủ Đoạn Lừa Đảo
              </h1>
              <p className="text-xs sm:text-base text-red-100 max-w-2xl leading-relaxed">
                Tổng hợp 10+ phương thức lừa đảo tinh vi nhất trên không gian mạng và các vụ việc đã xảy ra. Bà con nâng cao cảnh giác, tuyệt đối không làm theo lời dụ dỗ của kẻ xấu!
              </p>

              {/* Tìm kiếm bài cảnh báo */}
              <div className="mt-6 max-w-xl relative">
                <Search className="w-5 h-5 text-red-300 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Tìm thủ đoạn (VD: VNeID, nạp tiền TikTok, phạt nguội, deepfake...)"
                  value={scamSearchQuery}
                  onChange={(e) => setScamSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-red-200 text-xs sm:text-sm focus:outline-none focus:bg-white/20"
                />
              </div>
            </div>

            {/* DANH SÁCH 10 BÀI CẢNH BÁO CHI TIẾT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredScamArticles.map((art) => (
                <div
                  key={art.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-red-400 hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-red-600 font-bold mb-2">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Cảnh báo khẩn</span>
                    </div>

                    <Link href={`/canh-bao/${art.slug}`}>
                      <h3 className="font-black text-lg text-slate-900 hover:text-red-700 transition leading-snug mb-3">
                        {art.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {art.summary}
                    </p>

                    {/* Thủ đoạn nhận diện */}
                    {art.scam_tricks && art.scam_tricks.length > 0 && (
                      <div className="mb-4 space-y-1.5 bg-red-50/50 p-3 rounded-2xl border border-red-100">
                        <span className="text-[11px] font-bold text-red-800 uppercase block">
                          Thủ đoạn nhận diện:
                        </span>
                        {art.scam_tricks.slice(0, 2).map((trick, i) => (
                          <div key={i} className="text-xs text-red-950 font-medium flex items-start space-x-1.5">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{trick}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      href={`/canh-bao/${art.slug}`}
                      className="font-bold text-red-600 hover:text-red-700 flex items-center space-x-1"
                    >
                      <span>Xem cẩm nang phòng tránh đầy đủ</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="tel:02213815999"
                      className="text-slate-500 hover:text-red-600 font-bold flex items-center space-x-1"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Báo tin: 02213.815.999</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. MÀN HÌNH CHUYÊN BIỆT: HỌC TẬP & KIỂM TRA KIẾN THỨC     */}
        {/* ========================================================= */}
        {activeTab === 'quiz' && (
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LegalQuizSection />
          </div>
        )}
      </main>

      {/* TRỢ LÝ AI CHATBOT VẪN HOẠT ĐỘNG TOÀN DIỆN */}
      <ChatWidget />

      <Footer />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
              Đang tải Trợ lý số Công an xã Đức Hợp...
            </p>
          </div>
        </div>
      }
    >
      <HomePageContent />
    </Suspense>
  );
}

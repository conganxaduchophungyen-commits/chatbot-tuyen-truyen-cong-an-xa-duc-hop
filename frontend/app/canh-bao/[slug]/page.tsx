'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { getArticleBySlug, Article } from '@/lib/api';
import { 
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  Eye, 
  ShieldAlert, 
  HelpCircle,
  Share2,
  Check,
  Target,
  Brain,
  MessageSquareQuote,
  Flame,
  ListOrdered,
  ShieldCheck,
  AlertOctagon,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function ScamArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (!slug) return;
      setLoading(true);
      const data = await getArticleBySlug(slug);
      setArticle(data);
      setLoading(false);
    }
    loadData();
  }, [slug]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center bg-slate-50">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-semibold text-slate-600">Đang tải hồ sơ kịch bản cảnh báo...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center px-4 bg-slate-50">
          <div className="text-center max-w-md bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <HelpCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy cảnh báo</h2>
            <p className="text-sm text-slate-500 mb-6">
              Kịch bản cảnh báo này không tồn tại hoặc đã được chuyển mục lưu trữ.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại trang chủ</span>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const redFlagsList = article.red_flags && article.red_flags.length > 0 
    ? article.red_flags 
    : article.scam_tricks || [];

  const preventionList = article.prevention_measures && article.prevention_measures.length > 0 
    ? article.prevention_measures 
    : article.prevention_advice || [];

  const isOnline = article.category_type === 'online' || article.code?.startsWith('ON');

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-50/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Breadcrumb & Quick Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-red-700 font-medium">Trang chủ</Link>
              <span>/</span>
              <Link href="/#canh-bao" className="hover:text-red-700 font-medium">Cảnh báo tội phạm</Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold truncate max-w-xs">{article.code || article.title}</span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-sm transition"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Đã sao chép liên kết</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Chia sẻ cảnh báo</span>
                </>
              )}
            </button>
          </div>

          {/* MAIN ARTICLE CARD */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 overflow-hidden">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              {article.code && (
                <span className="bg-slate-900 text-white text-xs font-black px-3 py-1 rounded-lg tracking-wider font-mono shadow-sm">
                  {article.code}
                </span>
              )}
              <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                isOnline 
                  ? 'bg-blue-100 text-blue-900 border border-blue-200' 
                  : 'bg-amber-100 text-amber-900 border border-amber-200'
              }`}>
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{isOnline ? 'Lừa đảo Không gian mạng' : 'Lừa đảo Trực tiếp / Đời thực'}</span>
              </span>

              <span className="text-slate-400 text-xs flex items-center space-x-1 ml-auto">
                <Calendar className="w-3.5 h-3.5" />
                <span>Công an xã Đức Hợp • {article.created_at || 'Mới cập nhật'}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-5">
              {article.title}
            </h1>

            {/* Summary Alert Box */}
            <div className="bg-gradient-to-r from-red-50 via-amber-50 to-orange-50 border-l-4 border-red-600 p-4 sm:p-5 rounded-r-2xl mb-8 shadow-inner">
              <div className="text-xs uppercase font-black text-red-700 tracking-wider mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-600 animate-pulse" />
                <span>Tóm tắt thủ đoạn nguy hiểm:</span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* SECTION 1: MỤC TIÊU & ĐỘNG CƠ TÂM LÝ */}
            {(article.target_audience || article.psychological_manipulation) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Mục tiêu nhắm đến */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center space-x-2 text-indigo-700 mb-2.5">
                    <div className="p-1.5 bg-indigo-100 rounded-lg">
                      <Target className="w-5 h-5 text-indigo-700" />
                    </div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide">
                      Mục tiêu nhắm đến
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {article.target_audience || 'Toàn thể người dân, người dùng mạng xã hội và người sử dụng tài khoản ngân hàng.'}
                  </p>
                </div>

                {/* Động cơ tâm lý bị thao túng */}
                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center space-x-2 text-rose-700 mb-2.5">
                    <div className="p-1.5 bg-rose-100 rounded-lg">
                      <Brain className="w-5 h-5 text-rose-700" />
                    </div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide">
                      Động cơ tâm lý bị thao túng
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {article.psychological_manipulation || 'Lợi dụng tâm lý sợ hãi cơ quan pháp luật, lòng tham lợi nhuận cao, sự nhẹ dạ cả tin hoặc thiếu hiểu biết về công nghệ số.'}
                  </p>
                </div>
              </div>
            )}

            {/* SECTION 2: CÁC BƯỚC DIỄN BIẾN CHI TIẾT */}
            {article.execution_steps && article.execution_steps.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center space-x-2 text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  <div className="p-1.5 bg-red-100 rounded-lg">
                    <ListOrdered className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-black text-base sm:text-lg uppercase tracking-wide">
                    Các bước diễn biến chi tiết của kịch bản
                  </h3>
                </div>

                <div className="space-y-4">
                  {article.execution_steps.map((st, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border-2 border-slate-200/80 hover:border-red-400 rounded-2xl p-4 sm:p-5 transition shadow-sm flex flex-col sm:flex-row gap-4 items-start"
                    >
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 text-white font-black text-sm flex items-center justify-center shadow">
                          {st.step_num || (idx + 1)}
                        </span>
                        <span className="text-xs font-bold text-red-700 uppercase sm:hidden">
                          Bước {st.step_num || (idx + 1)}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 3: LỜI THOẠI / MẪU TIN NHẮN ĐIỂN HÌNH */}
            {article.sample_dialogue && (
              <div className="mb-10">
                <div className="flex items-center space-x-2 text-slate-900 mb-3 pb-2 border-b border-slate-200">
                  <div className="p-1.5 bg-amber-100 rounded-lg">
                    <MessageSquareQuote className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="font-black text-base sm:text-lg uppercase tracking-wide">
                    Lời thoại / Mẫu tin nhắn lừa đảo điển hình
                  </h3>
                </div>

                <div className="relative bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-6 border-l-4 border-amber-500 shadow-md">
                  <div className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span>TRÍCH ĐOẠN ĐỐI THOẠI / TIN NHẮN THỰC TẾ CỦA ĐỐI TƯỢNG:</span>
                  </div>
                  <blockquote className="italic text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line border-l-2 border-slate-700 pl-4 py-1">
                    {article.sample_dialogue}
                  </blockquote>
                </div>
              </div>
            )}

            {/* SECTION 4 & 5: DẤU HIỆU NHẬN BIẾT & BIỆN PHÁP PHÒNG TRÁNH */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Dấu hiệu nhận diện (Red Flags) */}
              <div className="bg-red-50/70 border-2 border-red-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center space-x-2 text-red-900 mb-3 pb-2 border-b border-red-200">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                    <h3 className="font-black text-sm uppercase tracking-wider">
                      Dấu hiệu nhận biết cốt lõi (Red Flags)
                    </h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                    {redFlagsList.map((trick, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="w-5 h-5 rounded-md bg-red-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          !
                        </span>
                        <span className="leading-snug">{trick}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-red-200/80 text-[11px] text-red-700 font-bold">
                  ⚠️ Chỉ cần xuất hiện 1 dấu hiệu trên: Dừng ngay giao dịch!
                </div>
              </div>

              {/* Biện pháp phòng tránh & Xử lý */}
              <div className="bg-emerald-50/70 border-2 border-emerald-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center space-x-2 text-emerald-900 mb-3 pb-2 border-b border-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h3 className="font-black text-sm uppercase tracking-wider">
                      Biện pháp phòng tránh & Xử lý chuẩn
                    </h3>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                    {preventionList.map((advice, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{advice}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-200/80 text-[11px] text-emerald-800 font-bold">
                  🛡️ Tuân thủ triệt để nguyên tắc &quot;3 Không - 2 Cần&quot;.
                </div>
              </div>
            </div>

            {/* SECTION 6: NỘI DUNG MỞ RỘNG (HTML nạp thêm nếu có) */}
            {article.content && (
              <div className="pt-6 border-t border-slate-200 mb-8">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                  THÔNG TIN CHI TIẾT TỪ HỒ SƠ VỤ VIỆC
                </h4>
                <div 
                  className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-3"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            )}

            {/* BANNER BÁO ÁN KHẨN CẤP */}
            <div className="bg-gradient-to-r from-red-700 via-rose-700 to-amber-700 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-red-500/30">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full text-xs font-bold text-amber-200 border border-white/10">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>TRỰC BAN CÔNG AN XÃ ĐỨC HỢP (24/7)</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  Đã lỡ chuyển tiền hoặc nghi ngờ bị lừa đảo?
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 max-w-xl">
                  Hãy liên hệ ngay để kịp thời liên hệ ngân hàng phong tỏa tài khoản thụ hưởng, chặn dòng tiền tẩu tán và lập hồ sơ điều tra theo quy định pháp luật.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="tel:02213815999"
                  className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-red-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-lg transition transform active:scale-95 shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-red-950 animate-bounce" />
                  <span>02213.815.999</span>
                </a>
              </div>
            </div>

            {/* Back button */}
            <div className="mt-8 text-center">
              <Link
                href="/#canh-bao"
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-red-700 text-xs sm:text-sm font-bold transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Xem tất cả 35 kịch bản cảnh báo tội phạm khác</span>
              </Link>
            </div>
          </article>
        </div>
      </main>

      <ChatWidget />
      <Footer />
    </>
  );
}

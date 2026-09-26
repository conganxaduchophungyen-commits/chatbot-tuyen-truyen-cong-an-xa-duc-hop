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
  Share2
} from 'lucide-react';

export default function ScamArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-medium text-slate-600">Đang tải nội dung cảnh báo...</p>
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
        <main className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <HelpCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy bài viết</h2>
            <p className="text-sm text-slate-500 mb-6">
              Bài viết cảnh báo này không tồn tại hoặc đã được gỡ bỏ.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-police-600 hover:bg-police-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition"
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

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-police-700">Trang chủ</Link>
            <span>/</span>
            <Link href="/#canh-bao" className="hover:text-red-700">Cảnh báo tội phạm</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate max-w-xs">{article.title}</span>
          </div>

          {/* MAIN ARTICLE CARD */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
                <span>CẢNH BÁO TỘI PHẠM KHẨN CẤP</span>
              </span>
              <span className="text-slate-400 text-xs flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Công an xã Đức Hợp</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-red-950 leading-tight mb-4">
              {article.title}
            </h1>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl mb-8 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              {article.summary}
            </div>

            {/* DẤU HIỆU NHẬN BIẾT & LỜI KHUYÊN PHÒNG NGỪA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Dấu hiệu */}
              <div className="bg-red-50/70 border border-red-200 rounded-2xl p-5">
                <h3 className="font-bold text-sm text-red-900 mb-3 flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Dấu hiệu nhận diện thủ đoạn:</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {(article.scam_tricks || []).map((trick, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-red-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>{trick}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lời khuyên */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5">
                <h3 className="font-bold text-sm text-emerald-900 mb-3 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Khuyến cáo từ Công an xã:</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {(article.prevention_advice || []).map((advice, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{advice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* NỘI DUNG CHI TIẾT */}
            <div 
              className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed mb-8 space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* KHẨN CẤP BÁO TIN CHO CÔNG AN XÃ */}
            <div className="bg-gradient-to-r from-red-700 to-red-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div>
                <h3 className="font-bold text-base text-yellow-300 mb-1">
                  Đã lỡ chuyển tiền hoặc nghi ngờ bị lừa đảo?
                </h3>
                <p className="text-xs text-slate-200">
                  Hãy liên hệ ngay Trực ban Công an xã Đức Hợp (Thôn Nho Lâm) hoặc cơ quan Công an gần nhất để phong tỏa tài khoản và tiếp nhận tin báo.
                </p>
              </div>
              <a
                href="tel:02213815999"
                className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-red-950 font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition transform active:scale-95 shrink-0"
              >
                <PhoneCall className="w-4 h-4 text-red-900" />
                <span>Báo án ngay: 02213.815.999</span>
              </a>
            </div>
          </article>
        </div>
      </main>

      <ChatWidget />
      <Footer />
    </>
  );
}

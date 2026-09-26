'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { 
  getProcedureById, 
  Procedure 
} from '@/lib/api';
import { 
  ArrowLeft, 
  Clock, 
  CreditCard, 
  Building2, 
  FileCheck2, 
  ExternalLink, 
  Download, 
  CheckSquare, 
  Square, 
  HelpCircle,
  PhoneCall,
  Share2
} from 'lucide-react';

export default function ProcedureDetailPage() {
  const params = useParams();
  const procedureId = params.id as string;

  const [procedure, setProcedure] = useState<Procedure | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function loadData() {
      if (!procedureId) return;
      setLoading(true);
      const data = await getProcedureById(procedureId);
      setProcedure(data);
      setLoading(false);
    }
    loadData();
  }, [procedureId]);

  const toggleCheck = (idx: number) => {
    setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border-4 border-police-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-medium text-slate-600">Đang tải thông tin thủ tục...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!procedure) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
            <HelpCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy thủ tục</h2>
            <p className="text-sm text-slate-500 mb-6">
              Thủ tục hành chính này có thể đã được cập nhật hoặc không còn hiệu lực.
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

  const docs = procedure.required_documents || [];
  const completedDocsCount = Object.values(checkedDocs).filter(Boolean).length;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-police-700">Trang chủ</Link>
            <span>/</span>
            <Link href="/#thu-tuc" className="hover:text-police-700">Thủ tục hành chính</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate max-w-xs">{procedure.title}</span>
          </div>

          {/* MAIN HEADER CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {procedure.code && (
                <span className="bg-police-100 text-police-800 text-xs font-bold px-3 py-1 rounded-full">
                  Mã: {procedure.code}
                </span>
              )}
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Thẩm quyền: {procedure.competent_authority || 'Công an xã Đức Hợp'}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4">
              {procedure.title}
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              <strong>Đối tượng thực hiện: </strong>
              {procedure.target_audience || 'Công dân Việt Nam'}
            </p>

            {/* Quick Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-sm">
              <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Clock className="w-6 h-6 text-police-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-400">Thời hạn giải quyết</div>
                  <div className="font-bold text-slate-800">{procedure.processing_time}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <CreditCard className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-400">Phí / Lệ phí</div>
                  <div className="font-bold text-slate-800">{procedure.fee}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 sm:col-span-2 lg:col-span-1">
                <Building2 className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-400">Địa điểm tiếp nhận</div>
                  <div className="font-bold text-slate-800">Thôn Nho Lâm, xã Đức Hợp</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CỘT TRÁI (2/3): HỒ SƠ & QUY TRÌNH BƯỚC */}
            <div className="lg:col-span-2 space-y-6">
              {/* CHECKLIST HỒ SƠ GIẤY TỜ */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileCheck2 className="w-6 h-6 text-police-600" />
                    <h2 className="text-lg font-bold text-slate-900">
                      Hồ sơ giấy tờ cần chuẩn bị
                    </h2>
                  </div>
                  {docs.length > 0 && (
                    <span className="text-xs font-bold text-police-700 bg-police-50 px-2.5 py-1 rounded-full border border-police-200">
                      Đã chuẩn bị: {completedDocsCount}/{docs.length}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  Bấm vào từng ô để đánh dấu những giấy tờ Bác/Anh/Chị đã chuẩn bị sẵn sàng trước khi nộp:
                </p>

                <div className="space-y-3">
                  {docs.map((docText, idx) => {
                    const isChecked = !!checkedDocs[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleCheck(idx)}
                        className={`p-3.5 rounded-2xl border transition flex items-start space-x-3 cursor-pointer select-none ${
                          isChecked
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 text-emerald-600">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <div className={`text-sm leading-relaxed ${isChecked ? 'line-through text-slate-500' : ''}`}>
                          {docText}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TRÌNH TỰ CÁC BƯỚC THỰC HIỆN */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-police-600"></span>
                  <span>Trình tự các bước thực hiện</span>
                </h2>

                <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-police-200">
                  {(procedure.steps || []).map((stepItem, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-police-600 text-white flex items-center justify-center text-xs font-bold shadow">
                        {stepItem.step || idx + 1}
                      </div>
                      <div className="pl-3">
                        <h3 className="font-bold text-sm text-slate-900 mb-1">
                          {stepItem.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {stepItem.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (1/3): BIỂU MẪU & LIÊN HỆ */}
            <div className="space-y-6">
              {/* NỘP TRỰC TUYẾN CTA CARD */}
              {procedure.online_url && (
                <div className="bg-gradient-to-br from-police-800 to-police-950 text-white rounded-3xl p-6 shadow-lg border border-police-700">
                  <h3 className="font-bold text-base text-yellow-300 mb-2">
                    Nộp Hồ Sơ Trực Tuyến
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Tiết kiệm thời gian, không cần chờ đợi. Nộp hồ sơ trực tuyến qua Cổng Dịch vụ công Bộ Công an.
                  </p>
                  <a
                    href={procedure.online_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-police-950 font-extrabold px-4 py-3 rounded-2xl text-xs sm:text-sm shadow-md transition transform active:scale-95"
                  >
                    <span>Nộp hồ sơ ngay</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* TẢI BIỂU MẪU TỜ KHAI */}
              {procedure.forms && procedure.forms.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center space-x-2">
                    <Download className="w-4 h-4 text-police-600" />
                    <span>Biểu mẫu đính kèm</span>
                  </h3>
                  <div className="space-y-2.5">
                    {procedure.forms.map((form) => (
                      <div key={form.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                        <div className="font-bold text-slate-800 mb-1">
                          {form.name}
                        </div>
                        <div className="flex items-center space-x-3 mt-2">
                          <a
                            href={form.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-police-600 hover:text-police-700 font-semibold"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Tải mẫu (File)</span>
                          </a>
                          {form.guide_url && (
                            <a
                              href={form.guide_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-500 hover:text-slate-700"
                            >
                              Xem hướng dẫn điền
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HỖ TRỢ TRỰC TIẾP TẠI XÃ */}
              <div className="bg-red-50 rounded-3xl p-6 border border-red-200">
                <h3 className="font-bold text-sm text-red-950 mb-2 flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-red-600" />
                  <span>Cần cán bộ hỗ trợ trực tiếp?</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Bà con có thể đến trực tiếp Bộ phận Một cửa Công an xã Đức Hợp (Thôn Nho Lâm) để được hướng dẫn điền tờ khai và nộp hồ sơ.
                </p>
                <a
                  href="tel:02213815999"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Gọi Trực ban: 02213.815.999</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ChatWidget />
      <Footer />
    </>
  );
}

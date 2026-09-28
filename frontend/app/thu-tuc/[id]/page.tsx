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
  Share2,
  Smartphone,
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Info,
  Sparkles,
  ListOrdered,
  ChevronRight
} from 'lucide-react';

export default function ProcedureDetailPage() {
  const params = useParams();
  const procedureId = params.id as string;

  const [procedure, setProcedure] = useState<Procedure | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [guideMode, setGuideMode] = useState<'online' | 'documents'>('online');

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
  const guide = procedure.online_guide;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-police-700">Trang chủ</Link>
            <span>/</span>
            <Link href="/?tab=procedures" className="hover:text-police-700">Thủ tục hành chính</Link>
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
                <span>Thẩm quyền: {procedure.competent_authority || 'Công an xã Đức Hợp, tỉnh Hưng Yên'}</span>
              </span>
              {guide && (
                <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1 border border-amber-300">
                  <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Có hướng dẫn nộp qua {guide.platform}</span>
                </span>
              )}
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
                  <div className="font-bold text-slate-800">Thôn Nho Lâm, xã Đức Hợp, Hưng Yên</div>
                </div>
              </div>
            </div>

            {/* CHUYỂN ĐỔI CHẾ ĐỘ XEM HƯỚNG DẪN */}
            {guide && (
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Chế độ xem:
                </span>
                <button
                  type="button"
                  onClick={() => setGuideMode('online')}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 border ${
                    guideMode === 'online'
                      ? 'bg-police-700 text-white border-police-700 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Hướng dẫn thao tác trên VNeID / Cổng DVC</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGuideMode('documents')}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 border ${
                    guideMode === 'documents'
                      ? 'bg-police-700 text-white border-police-700 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Hồ sơ giấy tờ & Quy trình Một cửa</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* CỘT TRÁI (2/3): NỘI DUNG CHÍNH */}
            <div className="lg:col-span-2 space-y-6">

              {/* PHẦN 1: HƯỚNG DẪN CHI TIẾT THAO TÁC TRÊN ỨNG DỤNG VNeID & CỔNG DVC */}
              {guide && guideMode === 'online' && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border-2 border-police-600/30 space-y-6 animate-in fade-in duration-200">
                  {/* Banner Đầu Mục */}
                  <div className="bg-gradient-to-r from-police-900 via-police-800 to-police-950 text-white p-5 rounded-2xl shadow-sm flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-police-950 flex items-center justify-center shrink-0 font-black shadow">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-yellow-300">
                        Nền tảng thực hiện: {guide.platform}
                      </span>
                      <h2 className="text-lg sm:text-xl font-black mt-1 text-white">
                        Quy Trình Kê Khai & Đăng Ký Trực Tuyến
                      </h2>
                      <p className="text-xs text-slate-300 mt-1">
                        Thực hiện nộp hồ sơ từ xa qua {guide.portal_name} giúp tiết kiệm tối đa thời gian chờ đợi.
                      </p>
                    </div>
                  </div>

                  {/* 1. ĐIỀU KIỆN CHUẨN BỊ */}
                  {guide.prerequisites && guide.prerequisites.length > 0 && (
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-3">
                      <h3 className="text-sm font-black text-amber-900 flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-amber-700" />
                        <span>Điều kiện chuẩn bị trước khi thao tác:</span>
                      </h3>
                      <ul className="space-y-2">
                        {guide.prerequisites.map((req, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-amber-950 font-medium flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 2. CÁC BƯỚC THAO TÁC CỤ THỂ */}
                  <div className="space-y-5">
                    <h3 className="text-base font-black text-slate-900 flex items-center space-x-2 border-b border-slate-200 pb-3">
                      <ListOrdered className="w-5 h-5 text-police-600" />
                      <span>Các bước thao tác chi tiết:</span>
                    </h3>

                    <div className="space-y-5">
                      {guide.steps.map((st, idx) => {
                        const stepNum = st.step_num || st.step || idx + 1;
                        const subtitle = st.description || st.desc || '';
                        
                        let subList: string[] = [];
                        if (st.sub_steps && Array.isArray(st.sub_steps) && st.sub_steps.length > 0) {
                          subList = st.sub_steps;
                        } else if (st.action) {
                          subList = st.action
                            .split(/\s*->\s*|\s*;\s*|\s*\n\s*/)
                            .map((s) => s.trim())
                            .filter(Boolean);
                        }

                        return (
                          <div 
                            key={stepNum} 
                            className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white hover:border-police-400 hover:shadow-md transition space-y-3"
                          >
                            <div className="flex items-start space-x-3.5">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-police-800 text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                                {stepNum}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                                  {st.title}
                                </h4>
                                {subtitle && (
                                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                                    {subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Các bước con chi tiết dạng danh sách chấm tròn như Ảnh 2 */}
                            {subList.length > 0 && (
                              <div className="pl-11 sm:pl-12.5 space-y-2 pt-1">
                                {subList.map((sub, sIdx) => (
                                  <div key={sIdx} className="text-xs sm:text-sm text-slate-700 flex items-start space-x-2.5 leading-relaxed">
                                    <span className="text-police-600 font-bold text-base leading-none mt-0.5 shrink-0">•</span>
                                    <span className="font-normal">{sub}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. LƯU Ý QUAN TRỌNG KHI ĐI LÀM HOẶC NỘP HỒ SƠ */}
                  {guide.important_notes && guide.important_notes.length > 0 && (
                    <div className="p-5 bg-red-50 border border-red-200 rounded-2xl space-y-3">
                      <h3 className="text-sm font-black text-red-950 flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>Lưu ý quan trọng:</span>
                      </h3>
                      <ul className="space-y-2">
                        {guide.important_notes.map((note, nIdx) => (
                          <li key={nIdx} className="text-xs sm:text-sm text-red-900 flex items-start space-x-2">
                            <span className="text-red-600 font-black">•</span>
                            <span className="leading-relaxed font-medium">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* PHẦN 2: CHECKLIST HỒ SƠ GIẤY TỜ & QUY TRÌNH NỘP */}
              {(guideMode === 'documents' || !guide) && (
                <>
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

                  {/* TRÌNH TỰ CÁC BƯỚC THỰC HIỆN TỔNG QUÁT */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-police-600"></span>
                      <span>Trình tự các bước thực hiện tổng quát</span>
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
                </>
              )}
            </div>

            {/* CỘT PHẢI (1/3): BIỂU MẪU & LIÊN HỆ */}
            <div className="space-y-6">
              {/* NỘP TRỰC TUYẾN CTA CARD */}
              {procedure.online_url && (
                <div className="bg-gradient-to-br from-police-800 to-police-950 text-white rounded-3xl p-6 shadow-lg border border-police-700">
                  <div className="inline-flex items-center space-x-1.5 bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-[11px] font-bold mb-3 border border-yellow-400/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dịch vụ công trực tuyến</span>
                  </div>
                  <h3 className="font-black text-base text-yellow-300 mb-2">
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
                    <span>Truy cập Cổng DVC nộp ngay</span>
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

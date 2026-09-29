'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertOctagon,
  CheckCircle2,
  PhoneCall,
  Smartphone,
  Lock,
  FileWarning,
  ShieldCheck,
  Flame,
  XCircle,
  BadgeAlert,
  ClipboardCheck
} from 'lucide-react';

export default function EmergencyScamGuidelinesCard() {
  const [activeTab, setActiveTab] = useState<'principles' | 'emergency'>('principles');

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden my-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-police-900 via-police-800 to-indigo-900 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4 min-w-0">
          <div className="p-3 bg-yellow-400/20 rounded-xl border border-yellow-400/40 shrink-0">
            <ShieldAlert className="w-7 h-7 text-yellow-300" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center flex-wrap gap-2 mb-1">
              <span className="text-[11px] font-black tracking-widest uppercase bg-yellow-400/20 px-2.5 py-0.5 rounded-full text-yellow-300 border border-yellow-400/30">
                BẮT BUỘC GHI NHỚ
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-red-600/80 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping inline-block"></span>
                Công an xã Đức Hợp 24/7
              </span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white leading-snug">
              NGUYÊN TẮC PHÒNG NGỪA VÀ CÁC BƯỚC XỬ LÝ KHẨN CẤP
            </h2>
          </div>
        </div>

        {/* Quick Hotline */}
        <a
          href="tel:02213815999"
          className="flex items-center gap-2.5 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/40 px-4 py-2.5 rounded-xl transition shrink-0 group"
        >
          <PhoneCall className="w-5 h-5 text-yellow-300 group-hover:animate-bounce shrink-0" />
          <div>
            <div className="text-[10px] font-semibold text-yellow-200 uppercase tracking-wide whitespace-nowrap">
              Hotline Trực ban Công an xã:
            </div>
            <div className="text-base font-black text-white tracking-wide whitespace-nowrap">
              02213.815.999
            </div>
          </div>
        </a>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-slate-100 border-b border-slate-200 p-1.5 gap-1.5 overflow-x-auto">
        <button
          onClick={() => setActiveTab('principles')}
          className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'principles'
              ? 'bg-white text-police-900 shadow-md border border-slate-200'
              : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
          }`}
        >
          <AlertOctagon className={`w-4 h-4 shrink-0 ${activeTab === 'principles' ? 'text-red-500' : 'text-slate-400'}`} />
          <span className="whitespace-nowrap">Nguyên Tắc &quot;3 Không - 2 Cần&quot;</span>
        </button>

        <button
          onClick={() => setActiveTab('emergency')}
          className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'emergency'
              ? 'bg-white text-police-900 shadow-md border border-slate-200'
              : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
          }`}
        >
          <Flame className={`w-4 h-4 shrink-0 ${activeTab === 'emergency' ? 'text-orange-500' : 'text-slate-400'}`} />
          <span className="whitespace-nowrap">4 Bước Xử Lý Khẩn Cấp</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-7 bg-slate-50/60">
        {/* TAB 1: 3 KHÔNG - 2 CẦN */}
        {activeTab === 'principles' && (
          <div className="space-y-6">
            {/* Sub-header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <p className="text-sm text-slate-600 leading-snug">
                Kỹ năng sinh tồn trên không gian mạng chuẩn hóa bởi{' '}
                <strong className="text-police-800">Bộ Công an & Cục An toàn thông tin</strong>
              </p>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 whitespace-nowrap">
                Lá chắn 5 lớp
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* CỘT 1: 3 KHÔNG */}
              <div className="bg-gradient-to-b from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-sm">
                    <XCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-red-800 uppercase tracking-wide leading-tight">
                      QUY TẮC &quot;3 KHÔNG&quot;
                    </h3>
                    <p className="text-xs text-red-500 font-semibold">Bảo vệ tối thượng — Không bao giờ vi phạm</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* KHÔNG TIN */}
                  <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      1
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-red-700 mb-1.5 tracking-wide">KHÔNG TIN</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Không tin bất kỳ cuộc gọi tự xưng <strong className="text-slate-900">Công an, Viện kiểm sát, Tòa án, Thuế, Bảo hiểm xã hội hay Ngân hàng</strong> yêu cầu chuyển tiền hoặc đe dọa khởi tố qua điện thoại. Không tin các lời mời gọi <strong className="text-red-700">&quot;việc nhẹ lương cao&quot;</strong>, đầu tư tài chính sinh lời siêu khủng.
                      </p>
                    </div>
                  </div>

                  {/* KHÔNG BẤM */}
                  <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      2
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-red-700 mb-1.5 tracking-wide">KHÔNG BẤM</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Tuyệt đối <strong className="text-slate-900">không bấm vào đường link lạ</strong>, không rõ nguồn gốc trong SMS, Zalo, Facebook, Telegram. <strong className="text-red-700">Tuyệt đối không tải file .apk lạ</strong> ngoài 2 chợ ứng dụng chính thức (Google Play và Apple App Store).
                      </p>
                    </div>
                  </div>

                  {/* KHÔNG CẤP */}
                  <div className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      3
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-red-700 mb-1.5 tracking-wide">KHÔNG CẤP</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Không cung cấp số CCCD, tài khoản ngân hàng, mật khẩu, mã PIN, dữ liệu sinh trắc học và <strong className="text-red-700">mã OTP cho bất kỳ ai</strong>. Tuyệt đối không bật <strong className="text-slate-900">quyền Trợ năng (Accessibility)</strong> cho bất kỳ app không rõ nguồn gốc nào trên điện thoại.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT 2: 2 CẦN */}
              <div className="bg-gradient-to-b from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                    <ClipboardCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-emerald-800 uppercase tracking-wide leading-tight">
                      QUY TẮC &quot;2 CẦN&quot;
                    </h3>
                    <p className="text-xs text-emerald-600 font-semibold">Hành động đúng đắn — Xử lý bình tĩnh, xác thực đa chiều</p>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  {/* CẦN XÁC MINH */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      1
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-emerald-700 mb-1.5 tracking-wide">CẦN XÁC MINH</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Khi nhận cuộc gọi hoặc tin nhắn yêu cầu chuyển tiền khẩn cấp từ người thân (kể cả Deepfake video call) hay giấy báo vi phạm: <strong className="text-slate-900">Hãy cúp máy ngay</strong>, gọi lại bằng cuộc gọi di động thông thường đến số chính chủ hoặc đến trực tiếp <strong className="text-emerald-700">Trụ sở Công an xã Đức Hợp</strong> để xác minh.
                      </p>
                    </div>
                  </div>

                  {/* CẦN BÁO CÁO */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm">
                      2
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-emerald-700 mb-1.5 tracking-wide">CẦN BÁO CÁO</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Ngay khi phát hiện dấu hiệu nghi vấn lừa đảo hoặc bản thân đã lỡ chuyển tiền: Cần chủ động <strong className="text-slate-900">chụp màn hình chứng cứ</strong> và báo ngay cho Công an xã Đức Hợp qua số <strong className="text-police-700">02213.815.999</strong> hoặc tổng đài Cục An toàn thông tin <strong className="text-emerald-700">156 / 5656</strong> để được can thiệp kịp thời.
                      </p>
                    </div>
                  </div>

                  {/* Lời dặn */}
                  <div className="bg-amber-50 rounded-xl p-3.5 border border-amber-200 flex items-start gap-3">
                    <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 leading-relaxed">
                      <strong>Lời dặn của Công an xã Đức Hợp:</strong> Cơ quan Công an <strong>không bao giờ</strong> làm việc qua điện thoại, không bao giờ yêu cầu công dân chuyển tiền vào &quot;tài khoản tạm giữ của cơ quan điều tra&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 4 BƯỚC XỬ LÝ KHẨN CẤP */}
        {activeTab === 'emergency' && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <p className="text-sm text-slate-700 leading-snug">
                Thực hiện ngay trong{' '}
                <strong className="text-red-600">15 phút đầu tiên</strong> khi phát hiện đã chuyển tiền, lộ OTP hoặc cài ứng dụng độc hại:
              </p>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-red-600 text-white animate-pulse whitespace-nowrap">
                HÀNH ĐỘNG NGAY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* BƯỚC 1 */}
              <div className="bg-white rounded-2xl p-5 border-2 border-amber-300 hover:border-amber-500 hover:shadow-lg transition flex flex-col gap-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-base shadow">
                    01
                  </span>
                  <Lock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-amber-700 uppercase tracking-wide mb-2 leading-snug">
                    Phong tỏa tài khoản ngân hàng
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gọi ngay Hotline ngân hàng để yêu cầu <strong>khóa khẩn cấp thẻ</strong> và dịch vụ Internet Banking. Hoặc dùng tính năng &quot;Khóa thẻ nhanh&quot; trên app nếu máy chưa bị chiếm quyền.
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-amber-100 text-[11px] text-amber-700 font-semibold">
                  → Ngăn chặn dòng tiền tiếp tục bị chuyển đi
                </div>
              </div>

              {/* BƯỚC 2 */}
              <div className="bg-white rounded-2xl p-5 border-2 border-red-300 hover:border-red-500 hover:shadow-lg transition flex flex-col gap-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-base shadow">
                    02
                  </span>
                  <Smartphone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-red-700 uppercase tracking-wide mb-2 leading-snug">
                    Cách ly thiết bị di động
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bật ngay <strong>Chế độ máy bay</strong>, tắt Wi-Fi và tháo SIM để ngắt kết nối mã độc. Sau đó thực hiện <strong>Khôi phục cài đặt gốc</strong> để xóa sạch phần mềm gián điệp RAT.
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-red-100 text-[11px] text-red-700 font-semibold">
                  → Cắt đứt kết nối điều khiển từ xa của mã độc
                </div>
              </div>

              {/* BƯỚC 3 */}
              <div className="bg-white rounded-2xl p-5 border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg transition flex flex-col gap-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base shadow">
                    03
                  </span>
                  <FileWarning className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-700 uppercase tracking-wide mb-2 leading-snug">
                    Thu thập & sao lưu chứng cứ
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chụp lại <strong>toàn bộ tin nhắn, cuộc gọi</strong>, số tài khoản thụ hưởng của kẻ lừa đảo và hóa đơn chuyển khoản điện tử. Lưu bản sao ra USB hoặc gửi sang máy tính an toàn.
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-blue-100 text-[11px] text-blue-700 font-semibold">
                  → Đảm bảo chứng cứ phục vụ điều tra, truy thu tiền
                </div>
              </div>

              {/* BƯỚC 4 */}
              <div className="bg-white rounded-2xl p-5 border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-lg transition flex flex-col gap-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center text-base shadow">
                    04
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-700 uppercase tracking-wide mb-2 leading-snug">
                    Trình báo Công an xã Đức Hợp
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Đến trực tiếp trụ sở <strong>Công an xã Đức Hợp</strong> hoặc gọi <strong className="text-police-700">02213.815.999</strong> để nộp hồ sơ tố giác. Lực lượng chức năng sẽ phối hợp ngân hàng phong tỏa tài khoản lừa đảo khẩn cấp.
                  </p>
                </div>
                <div className="mt-auto pt-3 border-t border-emerald-100 text-[11px] text-emerald-700 font-semibold">
                  → Khởi tố vụ án và phối hợp truy vết dòng tiền
                </div>
              </div>
            </div>

            {/* Quick Call Banner */}
            <div className="mt-2 bg-gradient-to-r from-police-800 to-indigo-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-slate-200 leading-snug">
                <strong className="text-white">Cần hỗ trợ khẩn cấp ngay bây giờ?</strong> Trực ban Công an xã Đức Hợp tiếp nhận 24/7:
              </div>
              <a
                href="tel:02213815999"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black px-5 py-2.5 rounded-xl text-sm shadow-md transition transform active:scale-95 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                02213.815.999
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

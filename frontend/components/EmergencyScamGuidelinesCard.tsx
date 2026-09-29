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
  ExternalLink,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Flame,
  Radio
} from 'lucide-react';

export default function EmergencyScamGuidelinesCard() {
  const [activeTab, setActiveTab] = useState<'principles' | 'emergency' | 'hotlines'>('principles');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const hotlines = [
    {
      name: 'Công an xã Đức Hợp',
      desc: 'Trực ban phản ứng nhanh 24/7 tại địa bàn',
      number: '02213.815.999',
      highlight: true,
      badge: 'Địa bàn sở tại'
    },
    {
      name: 'Cảnh sát phản ứng nhanh',
      desc: 'Tiếp nhận tin báo tội phạm khẩn cấp toàn quốc',
      number: '113',
      highlight: true,
      badge: 'Khẩn cấp 24/7'
    },
    {
      name: 'Cục An toàn thông tin (Bộ TT&TT)',
      desc: 'Tổng đài tiếp nhận phản ánh cuộc gọi rác, tin nhắn rác, lừa đảo',
      number: '156',
      sub: 'Hoặc gửi tin nhắn đến 5656',
      badge: 'Miễn cước'
    },
    {
      name: 'Thanh tra Bộ Công an',
      desc: 'Đường dây nóng tiếp nhận tin báo lừa đảo & vi phạm',
      number: '069.232.6555',
      sub: 'Hoặc 090.111.6789'
    },
    {
      name: 'Phòng CS An ninh mạng (PA05)',
      desc: 'Tiếp nhận báo cáo tội phạm mạng & công nghệ cao',
      number: '069.219.4053'
    },
    {
      name: 'Tổng đài Quốc gia Bảo vệ Trẻ em',
      desc: 'Tiếp nhận tin báo mua bán người, bạo hành & lừa đảo học sinh',
      number: '111',
      badge: 'Miễn phí'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl shadow-2xl border-2 border-amber-500/30 overflow-hidden text-white my-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md animate-pulse">
            <ShieldAlert className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black tracking-widest uppercase bg-black/30 px-2.5 py-0.5 rounded-full text-amber-200 border border-amber-300/40">
                KHẨN CẤP & BẮT BUỘC GHI NHỚ
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                Đức Hợp 24/7
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mt-0.5">
              NGUYÊN TẮC PHÒNG NGỪA VÀ CÁC BƯỚC XỬ LÝ KHẨN CẤP
            </h2>
          </div>
        </div>

        {/* Quick Hotline direct call */}
        <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/20 backdrop-blur-sm">
          <PhoneCall className="w-5 h-5 text-amber-300 animate-bounce" />
          <div>
            <div className="text-[10px] text-amber-200 font-semibold uppercase">Hotline Trực ban Công an xã:</div>
            <a href="tel:02213815999" className="text-base font-black text-white hover:text-amber-300 transition tracking-wide">
              02213.815.999
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-700 bg-slate-900/60 p-2 gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('principles')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
            activeTab === 'principles'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-amber-500/20 shadow-lg'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <AlertOctagon className="w-4 h-4 shrink-0" />
          <span>Nguyên Tắc &quot;3 Không - 2 Cần&quot;</span>
        </button>

        <button
          onClick={() => setActiveTab('emergency')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
            activeTab === 'emergency'
              ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-500/20 shadow-lg'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <Flame className="w-4 h-4 shrink-0 text-amber-300" />
          <span>4 Bước Xử Lý Khẩn Cấp</span>
        </button>

        <button
          onClick={() => setActiveTab('hotlines')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl font-bold text-sm transition-all shadow-sm ${
            activeTab === 'hotlines'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-500/20 shadow-lg'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <PhoneCall className="w-4 h-4 shrink-0" />
          <span>Đường Dây Nóng Khẩn Cấp (24/7)</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-7">
        {/* TAB 1: 3 KHÔNG - 2 CẦN */}
        {activeTab === 'principles' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
              <div className="text-sm text-slate-400">
                Chuẩn hóa kỹ năng sinh tồn trên không gian mạng của <strong className="text-amber-400">Bộ Công an & Cục An toàn thông tin</strong>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Lá chắn 5 lớp
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cột 1: BỘ 3 KHÔNG (NGUY HIỂM) */}
              <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-2.5 mb-4 text-red-400">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <AlertOctagon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-wide uppercase text-red-200">
                      QUY TẮC &quot;3 KHÔNG&quot; (BẢO VỆ TỐI THƯỢNG)
                    </h3>
                    <p className="text-xs text-red-300/80">Khắc sâu trong tiềm thức, không bao giờ vi phạm</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-red-900/60 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-red-300">KHÔNG TIN</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Không tin bất kỳ cuộc gọi tự xưng <strong className="text-white">Công an, Viện kiểm sát, Tòa án, Thuế, Bảo hiểm xã hội hay Ngân hàng</strong> yêu cầu chuyển tiền hoặc đe dọa khởi tố qua điện thoại. Không tin các lời mời gọi <span className="text-amber-300">&quot;việc nhẹ lương cao&quot;</span>, đầu tư tài chính sinh lời siêu khủng.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-red-900/60 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-red-300">KHÔNG BẤM</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Tuyệt đối <strong className="text-white">không bấm vào các đường link lạ</strong>, không rõ nguồn gốc trong SMS, tin nhắn Zalo, Facebook, Telegram. <strong className="text-amber-300">Tuyệt đối không tải tệp chứa file .apk lạ</strong> ngoài 2 chợ ứng dụng chính thức (Google Play & Apple App Store).
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-red-900/60 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-red-300">KHÔNG CẤP</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Không cung cấp số CCCD, tài khoản ngân hàng, mật khẩu, mã PIN, dữ liệu sinh trắc học và <strong className="text-red-400">mã OTP cho bất kỳ ai</strong>. Tuyệt đối không bật <strong className="text-amber-300">quyền Trợ năng (Accessibility)</strong> cho bất kỳ app không rõ nguồn gốc nào trên điện thoại.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cột 2: BỘ 2 CẦN (HÀNH ĐỘNG ĐÚNG) */}
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-2.5 mb-4 text-emerald-400">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black tracking-wide uppercase text-emerald-200">
                      QUY TẮC &quot;2 CẦN&quot; (HÀNH ĐỘNG ĐÚNG ĐẮN)
                    </h3>
                    <p className="text-xs text-emerald-300/80">Xử lý bình tĩnh, xác thực đa chiều</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-900/60 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-300">CẦN XÁC MINH</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Khi nhận được tin nhắn hoặc cuộc gọi yêu cầu chuyển tiền khẩn cấp từ người thân (kể cả Deepfake video call) hay giấy báo vi phạm: <strong className="text-white">Hãy cúp máy ngay</strong>, gọi lại bằng cuộc gọi di động thông thường đến số chính chủ hoặc đến trực tiếp <strong className="text-amber-300">Trụ sở Công an xã Đức Hợp</strong> để xác minh.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-900/60 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-300">CẦN BÁO CÁO</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Ngay khi phát hiện dấu hiệu nghi vấn lừa đảo hoặc bản thân đã lỡ chuyển tiền: Cần chủ động <strong className="text-white">chụp màn hình chứng cứ</strong> và báo ngay cho Công an xã Đức Hợp qua số <strong className="text-amber-400">02213.815.999</strong> hoặc tổng đài Cục An toàn thông tin <strong className="text-emerald-400">156 / 5656</strong> để được can thiệp kịp thời.
                      </p>
                    </div>
                  </div>

                  {/* Pro Tip Card */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
                    <p className="text-xs text-amber-200 leading-snug">
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
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
              <div className="text-sm text-slate-300">
                Thực hiện ngay trong <strong className="text-red-400">15 phút đầu tiên</strong> khi phát hiện đã chuyển tiền, lộ OTP hoặc cài ứng dụng độc hại:
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-600 text-white animate-pulse">
                HÀNH ĐỘNG NGAY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* BƯỚC 1 */}
              <div className="bg-slate-900/90 border-2 border-amber-500/50 rounded-2xl p-4 flex flex-col justify-between relative shadow-lg hover:border-amber-400 transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow">
                      01
                    </span>
                    <Lock className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-black text-amber-300 uppercase tracking-wide">
                    PHONG TỎA KHẨN CẤP TÀI KHOẢN NGÂN HÀNG
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Gọi ngay tổng đài Hotline ngân hàng yêu cầu <strong>khóa khẩn cấp thẻ</strong> và dịch vụ Internet Banking. Hoặc dùng tính năng &quot;Khóa app/khóa thẻ nhanh&quot; trên app nếu máy chưa bị chiếm quyền.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-200/90 font-medium">
                  Mục tiêu: Ngăn chặn dòng tiền tiếp tục bị chuyển đi.
                </div>
              </div>

              {/* BƯỚC 2 */}
              <div className="bg-slate-900/90 border-2 border-red-500/50 rounded-2xl p-4 flex flex-col justify-between relative shadow-lg hover:border-red-400 transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-black flex items-center justify-center text-sm shadow">
                      02
                    </span>
                    <Smartphone className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-sm font-black text-red-300 uppercase tracking-wide">
                    CÁCH LY THIẾT BỊ DI ĐỘNG (FILE .APK)
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Bật ngay <strong>Chế độ máy bay (Airplane mode)</strong>, tắt Wi-Fi và tháo SIM điện thoại để ngắt toàn bộ quyền điều khiển từ xa của mã độc. Sau đó thực hiện <strong>Khôi phục cài đặt gốc</strong> để xóa sạch RAT.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-red-200/90 font-medium">
                  Mục tiêu: Cắt đứt kết nối của phần mềm gián điệp.
                </div>
              </div>

              {/* BƯỚC 3 */}
              <div className="bg-slate-900/90 border-2 border-blue-500/50 rounded-2xl p-4 flex flex-col justify-between relative shadow-lg hover:border-blue-400 transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow">
                      03
                    </span>
                    <FileWarning className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-black text-blue-300 uppercase tracking-wide">
                    THU THẬP & SAO LƯU CHỨNG CỨ PHÁP LÝ
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Chụp lại <strong>toàn bộ màn hình tin nhắn, cuộc gọi</strong>, số tài khoản thụ hưởng của kẻ lừa đảo, hóa đơn chuyển khoản điện tử. Lưu bản sao ra USB hoặc gửi sang máy tính an toàn.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-blue-200/90 font-medium">
                  Mục tiêu: Đảm bảo chứng cứ phục vụ điều tra, truy thu tiền.
                </div>
              </div>

              {/* BƯỚC 4 */}
              <div className="bg-slate-900/90 border-2 border-emerald-500/50 rounded-2xl p-4 flex flex-col justify-between relative shadow-lg hover:border-emerald-400 transition">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow">
                      04
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-black text-emerald-300 uppercase tracking-wide">
                    TRÌNH BÁO CÔNG AN XÃ ĐỨC HỢP
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Đến trực tiếp trụ sở <strong>Công an xã Đức Hợp</strong> hoặc gọi <strong>02213.815.999</strong> để nộp hồ sơ tố giác tội phạm. Lực lượng chức năng sẽ phối hợp liên ngân hàng phong tỏa tài khoản lừa đảo.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-200/90 font-medium">
                  Mục tiêu: Khởi tố vụ án và phối hợp truy vết dòng tiền.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DANH BẠ HOTLINE */}
        {activeTab === 'hotlines' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
              <div className="text-sm text-slate-300">
                Các đầu số chính thức tiếp nhận tố giác tội phạm lừa đảo trực tuyến và công nghệ cao:
              </div>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Trực tuyến 24/7
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotlines.map((h, i) => (
                <div 
                  key={i} 
                  className={`p-4 rounded-xl border transition flex flex-col justify-between ${
                    h.highlight 
                      ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10' 
                      : 'bg-slate-900/70 border-slate-700/70 hover:border-slate-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold text-white leading-tight">{h.name}</span>
                      {h.badge && (
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          h.highlight ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-200'
                        }`}>
                          {h.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{h.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <div>
                      <a 
                        href={`tel:${h.number.replace(/\./g, '')}`}
                        className={`text-lg font-black tracking-wide hover:underline ${
                          h.highlight ? 'text-amber-400' : 'text-cyan-400'
                        }`}
                      >
                        {h.number}
                      </a>
                      {h.sub && <div className="text-[11px] text-slate-400">{h.sub}</div>}
                    </div>

                    <button
                      onClick={() => copyToClipboard(h.number)}
                      title="Sao chép số"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                    >
                      {copiedNumber === h.number ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Trang web phản ánh tin nhắn rác, cuộc gọi rác và web độc hại của Cục ATTT:</span>
              </div>
              <a 
                href="https://nospam.vncert.vn" 
                target="_blank" 
                rel="noreferrer"
                className="text-cyan-400 font-bold hover:underline flex items-center gap-1 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-800"
              >
                <span>https://nospam.vncert.vn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

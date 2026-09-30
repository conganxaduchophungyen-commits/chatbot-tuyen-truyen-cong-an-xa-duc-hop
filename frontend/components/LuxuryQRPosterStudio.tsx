'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  Printer,
  Phone,
  Download,
  QrCode,
  CheckCircle2,
  MapPin,
  Sparkles,
  Link2,
  Copy,
  Check,
  RefreshCw,
  ShieldCheck,
  Image as ImageIcon,
} from 'lucide-react';

interface LuxuryQRPosterStudioProps {
  initialUrl?: string;
}

export default function LuxuryQRPosterStudio({
  initialUrl = 'https://conganxaduchop.hungyen.gov.vn',
}: LuxuryQRPosterStudioProps) {
  const [appUrl, setAppUrl] = useState(initialUrl);
  const [posterSubtitle, setPosterSubtitle] = useState(
    'TRỢ LÝ SỐ PHÁP LUẬT & HƯỚNG DẪN DỊCH VỤ CÔNG TRỰC TUYẾN 24/7'
  );
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isDownloadingPoster, setIsDownloadingPoster] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sinh mã QR thời gian thực ngay lập tức khi thay đổi hoặc paste đường link
  useEffect(() => {
    let active = true;
    const targetText = (appUrl || '').trim() || 'https://conganxaduchop.hungyen.gov.vn';

    QRCode.toDataURL(targetText, {
      width: 640,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#0b1736',
        light: '#ffffff',
      },
    })
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch((err) => {
        console.error('QR generation error:', err);
      });

    return () => {
      active = false;
    };
  }, [appUrl]);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(appUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        setAppUrl(text.trim());
      }
    } catch {
      // Fallback: user can Ctrl+V directly into input
    }
  };

  const handleDownloadQRStandalone = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'Ma-QR-Cong-An-Xa-Duc-Hop.png';
    link.href = qrDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Vẽ toàn bộ Poster Sang Trọng lên Canvas độ phân giải cao (1200 x 1740 px) và tải về file PNG
  const handleDownloadPosterPNG = async () => {
    if (!qrDataUrl || isDownloadingPoster) return;
    setIsDownloadingPoster(true);

    try {
      const canvas = document.createElement('canvas');
      const W = 1200;
      const H = 1740;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Helper vẽ hình chữ nhật bo góc
      const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      };

      // 1. Nền tổng thể Tươi Sáng - Hoàng gia Trang nhã (Trắng ngà ánh kim)
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(0.5, '#fffef8');
      bgGrad.addColorStop(1, '#fff9eb');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // 2. Viền kim loại kép trang trọng (Viền đỏ cờ uy nghiêm & chỉ vàng kim)
      ctx.strokeStyle = '#991b1b';
      ctx.lineWidth = 8;
      roundRect(28, 28, W - 56, H - 56, 36);
      ctx.stroke();

      const goldGrad = ctx.createLinearGradient(0, 0, W, H);
      goldGrad.addColorStop(0, '#f59e0b');
      goldGrad.addColorStop(0.5, '#d49b27');
      goldGrad.addColorStop(1, '#fbbf24');

      ctx.strokeStyle = goldGrad;
      ctx.lineWidth = 3;
      roundRect(42, 42, W - 84, H - 84, 28);
      ctx.stroke();

      // 3. Banner Đỏ Công an Nhân dân phía trên (Rực rỡ, tươi sáng)
      const headerGrad = ctx.createLinearGradient(48, 48, W - 48, 430);
      headerGrad.addColorStop(0, '#991b1b');
      headerGrad.addColorStop(0.5, '#dc2626');
      headerGrad.addColorStop(1, '#991b1b');
      ctx.fillStyle = headerGrad;
      roundRect(48, 48, W - 96, 375, 24);
      ctx.fill();

      // Đường chỉ vàng ngăn cách Header
      ctx.fillStyle = goldGrad;
      ctx.fillRect(48, 415, W - 96, 8);

      // 4. Vẽ Huy hiệu Công an Nhân dân ở chính giữa Header
      ctx.save();
      ctx.beginPath();
      ctx.arc(W / 2, 138, 62, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.35)';
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#facc15';
      ctx.stroke();
      ctx.restore();

      // Load ảnh logo Công an
      const loadImg = (src: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });

      try {
        const logoImg = await loadImg('/logo-cong-an.png');
        ctx.drawImage(logoImg, W / 2 - 48, 138 - 48, 96, 96);
      } catch {
        // Fallback nếu không tải được logo
      }

      // Chữ tiêu đề trên Header
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.fillText('CÔNG AN TỈNH HƯNG YÊN', W / 2, 238);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 50px Arial, sans-serif';
      ctx.fillText('CÔNG AN XÃ ĐỨC HỢP', W / 2, 298);

      // Huy hiệu Đề án 06/CP màu vàng kim
      ctx.fillStyle = goldGrad;
      roundRect(W / 2 - 330, 326, 660, 52, 26);
      ctx.fill();

      ctx.fillStyle = '#7f1d1d';
      ctx.font = '900 21px Arial, sans-serif';
      ctx.fillText('ĐỀ ÁN 06/CP • CHUYỂN ĐỔI SỐ PHỤC VỤ NHÂN DÂN', W / 2, 360);

      // 5. Tiêu đề chính dưới Header (Tươi sáng, rõ nét)
      ctx.fillStyle = '#881337';
      ctx.font = '900 32px Arial, sans-serif';
      ctx.fillText(posterSubtitle.toUpperCase(), W / 2, 490);

      ctx.fillStyle = '#475569';
      ctx.font = '600 22px Arial, sans-serif';
      ctx.fillText(
        'Mở Camera điện thoại hoặc ứng dụng Zalo quét mã QR để tra cứu & hỏi đáp ngay',
        W / 2,
        532
      );

      // 6. Khung Pedestal Đặt Mã QR Sang Trọng (Nền trắng viền vàng kim)
      const qrBoxSize = 480;
      const qrBoxX = (W - qrBoxSize) / 2;
      const qrBoxY = 568;

      ctx.save();
      ctx.shadowColor = 'rgba(217, 119, 6, 0.25)';
      ctx.shadowBlur = 30;
      ctx.fillStyle = '#ffffff';
      roundRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 36);
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = goldGrad;
      ctx.stroke();
      ctx.restore();

      // Vẽ ảnh QR vào chính giữa khung
      const qrImg = await loadImg(qrDataUrl);
      ctx.drawImage(qrImg, qrBoxX + 28, qrBoxY + 28, qrBoxSize - 56, qrBoxSize - 56);

      // Vẽ logo nhỏ ở tâm mã QR
      try {
        const centerLogo = await loadImg('/logo-cong-an.png');
        ctx.fillStyle = '#ffffff';
        roundRect(W / 2 - 42, qrBoxY + qrBoxSize / 2 - 42, 84, 84, 18);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#dc2626';
        ctx.stroke();
        ctx.drawImage(centerLogo, W / 2 - 34, qrBoxY + qrBoxSize / 2 - 34, 68, 68);
      } catch {
        // ignore
      }

      // 7. Thanh hiển thị đường link trực tiếp dưới mã QR (Nền kem sáng rõ ràng)
      ctx.fillStyle = '#fef3c7';
      roundRect(130, 1074, W - 260, 56, 28);
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 21px monospace';
      const displayUrl =
        appUrl.length > 58 ? appUrl.slice(0, 55) + '...' : appUrl;
      ctx.fillText(`🔗 ${displayUrl}`, W / 2, 1110);

      // 8. 4 Ô Tính Năng Trọng Tâm (Nền Trắng Sứ Viền Vàng Sáng, Chữ Rõ Nét)
      const features = [
        {
          title: 'HƯỚNG DẪN DỊCH VỤ CÔNG & VNeID',
          desc: 'Tra cứu quy trình chuẩn làm Căn cước, đăng ký thường trú, tạm trú, bấm biển số xe máy tại xã và kích hoạt VNeID Mức 2 dễ dàng.',
        },
        {
          title: 'TRỢ LÝ SỐ PHÁP LUẬT 24/7',
          desc: 'Trợ lý AI giải đáp tức thì 5.000+ câu hỏi pháp luật, trích dẫn chính xác quy định của Bộ Công an mọi lúc, mọi nơi hoàn toàn miễn phí.',
        },
        {
          title: 'CẢNH BÁO LỪA ĐẢO & AN TOÀN SỐ',
          desc: 'Nhận diện sớm 22 thủ đoạn lừa đảo qua mạng tinh vi (app giả mạo, gọi điện đe dọa, việc làm ảo) và bí kíp "4 Không - 2 Phải" giữ an toàn tài sản.',
        },
        {
          title: 'TRẮC NGHIỆM PHÁP LUẬT CÔNG DÂN SỐ',
          desc: 'Luyện tập 500+ tình huống thực tế thường gặp trong đời sống; đạt kết quả xuất sắc được cấp ngay Giấy chứng nhận điện tử trang trọng.',
        },
      ];

      const cardW = 510;
      const cardH = 136;
      const startX = 76;
      const startY = 1156;
      const gapX = 28;
      const gapY = 22;

      features.forEach((f, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const cx = startX + col * (cardW + gapX);
        const cy = startY + row * (cardH + gapY);

        // Nền thẻ trắng ngà sang trọng, đổ bóng nhẹ
        ctx.fillStyle = '#ffffff';
        roundRect(cx, cy, cardW, cardH, 20);
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#f59e0b';
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillStyle = '#991b1b';
        ctx.font = '900 21px Arial, sans-serif';
        ctx.fillText(`★ ${f.title}`, cx + 22, cy + 40);

        // Mô tả chia 2 dòng để hiển thị trọn vẹn, không bị tràn
        ctx.fillStyle = '#334155';
        ctx.font = '500 17px Arial, sans-serif';
        
        const words = f.desc.split(' ');
        let l1 = '';
        let l2 = '';
        for (const w of words) {
          if ((l1 + ' ' + w).length <= 48) {
            l1 = l1 ? l1 + ' ' + w : w;
          } else {
            l2 = l2 ? l2 + ' ' + w : w;
          }
        }
        ctx.fillText(l1, cx + 22, cy + 74, cardW - 44);
        if (l2) {
          ctx.fillText(l2, cx + 22, cy + 102, cardW - 44);
        }
      });

      // 9. Footer Đường dây nóng trực ban 24/24h (Tươi sáng, rực rỡ)
      const footY = 1482;
      const footGrad = ctx.createLinearGradient(76, footY, W - 76, footY + 185);
      footGrad.addColorStop(0, '#991b1b');
      footGrad.addColorStop(0.5, '#dc2626');
      footGrad.addColorStop(1, '#991b1b');
      ctx.fillStyle = footGrad;
      roundRect(76, footY, W - 152, 185, 24);
      ctx.fill();
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = '#facc15';
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillText('ĐƯỜNG DÂY NÓNG TRỰC BAN TIẾP DÂN & TỐ GIÁC TỘI PHẠM (24/24H)', W / 2, footY + 50);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 54px Arial, sans-serif';
      ctx.fillText('📞 02213.815.999', W / 2, footY + 116);

      ctx.fillStyle = '#fef3c7';
      ctx.font = '600 21px Arial, sans-serif';
      ctx.fillText('📍 Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên', W / 2, footY + 158);

      // Xuất file PNG chất lượng cao
      const pngUrl = canvas.toDataURL('image/png', 1.0);
      const a = document.createElement('a');
      a.download = 'Poster-QR-Cong-An-Xa-Duc-Hop.png';
      a.href = pngUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Lỗi xuất Poster PNG:', error);
      alert('Không thể xuất file PNG. Vui lòng thử lại.');
    } finally {
      setIsDownloadingPoster(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* BẢNG ĐIỀU KHIỂN & TÙY CHỈNH MÃ QR (Ẩn khi in giấy A4) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200/90 print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>STUDIO THIẾT KẾ ẤN PHẨM MÃ QR THỜI GIAN THỰC</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Bộ Ấn Phẩm Poster Mã QR Sang Trọng — Công An Xã Đức Hợp
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Dán (Paste) hoặc nhập bất kỳ đường link nào vào ô bên dưới — Mã QR và Poster sẽ tự động cập nhật ngay lập tức theo thời gian thực.
            </p>
          </div>

          {/* Cụm nút Tải PNG & In A4 */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleDownloadPosterPNG}
              disabled={isDownloadingPoster}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition transform active:scale-95 disabled:opacity-60"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{isDownloadingPoster ? 'Đang kết xuất PNG...' : 'Tải về Poster PNG (Chuẩn HD)'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadQRStandalone}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold px-4 py-3 rounded-2xl text-xs sm:text-sm shadow transition"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Tải riêng Mã QR (.PNG)</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center space-x-2 bg-police-700 hover:bg-police-800 text-white font-bold px-4 py-3 rounded-2xl text-xs sm:text-sm shadow transition"
            >
              <Printer className="w-4 h-4" />
              <span>In A4 / Standee</span>
            </button>
          </div>
        </div>

        {/* Ô nhập / Paste đường dẫn URL cập nhật tức thì */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-6">
          <div className="lg:col-span-8">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
              🔗 Đường dẫn đích (Paste hoặc gõ URL — Mã QR đổi ngay lập tức):
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Link2 className="w-4 h-4 text-police-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={appUrl}
                  onChange={(e) => setAppUrl(e.target.value)}
                  onPaste={(e) => {
                    const pasted = e.clipboardData.getData('text');
                    if (pasted) {
                      e.preventDefault();
                      setAppUrl(pasted.trim());
                    }
                  }}
                  placeholder="Dán (Ctrl+V) đường dẫn trang web, Zalo OA, biểu mẫu vào đây..."
                  className="w-full pl-10 pr-24 py-3 bg-slate-50 border-2 border-slate-300 rounded-2xl text-sm font-mono text-police-950 focus:outline-none focus:border-police-600 focus:bg-white transition"
                />
                {appUrl && (
                  <button
                    type="button"
                    onClick={() => setAppUrl('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 hover:text-red-600 px-2 py-1 rounded-lg bg-slate-200/60 hover:bg-red-50 transition"
                  >
                    Xóa
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={handlePasteClipboard}
                className="px-3.5 py-3 rounded-2xl bg-police-50 hover:bg-police-100 text-police-800 border border-police-200 text-xs font-extrabold transition shrink-0"
                title="Dán nhanh từ Clipboard"
              >
                Dán Link
              </button>

              <button
                type="button"
                onClick={handleCopyUrl}
                className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition shrink-0"
                title="Sao chép đường dẫn"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Các đường link gợi ý chọn nhanh */}
            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              <span className="text-[11px] font-bold text-slate-500 mr-1">Chọn nhanh:</span>
              {[
                { label: 'Cổng Trang chủ', url: 'https://conganxaduchop.hungyen.gov.vn' },
                { label: 'Trợ lý AI 24/7', url: 'https://conganxaduchop.hungyen.gov.vn/tro-ly-ai' },
                { label: 'Hướng dẫn Thủ tục VNeID', url: 'https://conganxaduchop.hungyen.gov.vn/thu-tuc' },
                { label: 'Trắc nghiệm Công dân số', url: 'https://conganxaduchop.hungyen.gov.vn/trac-nghiem' },
              ].map((preset) => (
                <button
                  key={preset.url}
                  type="button"
                  onClick={() => setAppUrl(preset.url)}
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full border transition ${
                    appUrl === preset.url
                      ? 'bg-police-700 text-white border-police-700'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
              ✨ Dòng khẩu hiệu trên Poster:
            </label>
            <input
              type="text"
              value={posterSubtitle}
              onChange={(e) => setPosterSubtitle(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-2xl text-xs sm:text-sm font-bold text-slate-800 focus:outline-none focus:border-police-600 focus:bg-white transition"
            />
            <div className="mt-3 flex items-center space-x-2 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Trạng thái QR: Đã đồng bộ tức thì ({appUrl.length} ký tự)</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* BẢN XEM TRƯỚC POSTER LUXURY HIỆN ĐẠI - SANG TRỌNG - CHUẨN CÔNG AN XÃ */}
      {/* ===================================================================== */}
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-[36px] p-3 sm:p-5 bg-gradient-to-b from-[#FFFDF8] via-[#FFFBF2] to-[#FFF8EA] shadow-[0_20px_60px_rgba(212,155,39,0.22)] border-4 border-[#d49b27] overflow-hidden print:shadow-none print:m-0">
          {/* Viền chỉ vàng kim bên trong */}
          <div className="relative rounded-[28px] border-2 border-[#f59e0b]/40 overflow-hidden bg-white/70">
            {/* Họa tiết ánh sáng nền sang trọng tươi sáng */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* HEADER ĐỎ CỜ VIỀN VÀNG KIM RỰC RỠ */}
            <div className="relative bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#991b1b] text-white text-center px-6 py-8 sm:py-10 border-b-4 border-[#facc15] shadow-md">
              <div className="w-24 h-24 rounded-full bg-white p-1.5 flex items-center justify-center mx-auto mb-3.5 shadow-[0_0_30px_rgba(250,204,21,0.55)] border-4 border-[#fde047]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-cong-an.png"
                  alt="Huy hiệu Công an Nhân dân"
                  width={88}
                  height={88}
                  style={{ width: '88px', height: '88px', objectFit: 'contain' }}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-[#fef08a]">
                CÔNG AN TỈNH HƯNG YÊN
              </p>
              <h3 className="text-2xl sm:text-4xl font-black tracking-wider uppercase mt-1 text-white drop-shadow">
                CÔNG AN XÃ ĐỨC HỢP
              </h3>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#fef08a] via-[#facc15] to-[#fef08a] text-red-950 font-black px-5 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest mt-4 shadow-md border border-amber-400">
                <ShieldCheck className="w-4 h-4 text-red-900" />
                <span>ĐỀ ÁN 06/CP • CHUYỂN ĐỔI SỐ PHỤC VỤ NHÂN DÂN</span>
              </div>
            </div>

            {/* THÂN POSTER NỀN SÁNG TRANG NHÃ */}
            <div className="px-6 py-8 sm:px-12 sm:py-10 text-center relative z-10">
              <h4 className="text-base sm:text-2xl font-black text-[#881337] uppercase tracking-wide leading-snug mb-2">
                {posterSubtitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mb-8 max-w-xl mx-auto leading-relaxed">
                Mở Camera điện thoại hoặc ứng dụng <strong className="text-red-700 font-black">Zalo</strong> quét mã QR bên dưới để tra cứu thủ tục, hỏi đáp pháp luật và nhận cảnh báo an toàn số:
              </p>

              {/* BỆ ĐẶT MÃ QR LUXURY TRUNG TÂM */}
              <div className="relative inline-block p-5 sm:p-7 bg-white rounded-[32px] border-[5px] border-[#d49b27] shadow-[0_10px_40px_rgba(212,155,39,0.25)] mb-6">
                {/* 4 Góc trang trí mạ vàng */}
                <span className="absolute top-2.5 left-2.5 w-5 h-5 border-t-4 border-l-4 border-red-700 rounded-tl-lg" />
                <span className="absolute top-2.5 right-2.5 w-5 h-5 border-t-4 border-r-4 border-red-700 rounded-tr-lg" />
                <span className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-4 border-l-4 border-red-700 rounded-bl-lg" />
                <span className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-4 border-r-4 border-red-700 rounded-br-lg" />

                <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto flex items-center justify-center">
                  {qrDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={qrDataUrl}
                      alt="Mã QR Công an xã Đức Hợp"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                      Đang tạo mã QR...
                    </div>
                  )}

                  {/* Huy hiệu Công an nhỏ ở chính tâm mã QR */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shadow-lg border-2 border-red-600 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logo-cong-an.png"
                        alt="Logo trung tâm QR"
                        width={52}
                        height={52}
                        style={{ width: '52px', height: '52px', objectFit: 'contain' }}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs sm:text-sm font-black text-red-700 flex items-center justify-center space-x-1.5 uppercase tracking-wider">
                  <QrCode className="w-4 h-4 text-red-600" />
                  <span>QUÉT MÃ QR ĐỂ TRUY CẬP TỨC THÌ</span>
                </div>
              </div>

              {/* PILL HIỂN THỊ ĐƯỜNG LINK ĐANG MÃ HÓA */}
              <div className="max-w-xl mx-auto mb-8 px-4 py-2.5 rounded-full bg-amber-100/70 border border-amber-300 text-police-950 text-xs sm:text-sm font-mono font-bold truncate shadow-xs">
                🔗 {appUrl || 'https://conganxaduchop.hungyen.gov.vn'}
              </div>

              {/* 4 TRỤ CỘT TIỆN ÍCH SỐ - NỀN SÁNG VIỀN VÀNG RỰC RỠ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left max-w-2xl mx-auto mb-8">
                <div className="bg-white p-4.5 rounded-2xl border-2 border-amber-300 hover:border-amber-400 flex items-start space-x-3.5 shadow-sm transition hover:shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-red-800 uppercase tracking-wider">
                      HƯỚNG DẪN DỊCH VỤ CÔNG & VNeID
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      Tra cứu quy trình chuẩn làm Căn cước, đăng ký thường trú, tạm trú, bấm biển số xe máy tại xã và kích hoạt VNeID Mức 2 dễ dàng.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border-2 border-amber-300 hover:border-amber-400 flex items-start space-x-3.5 shadow-sm transition hover:shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-red-800 uppercase tracking-wider">
                      TRỢ LÝ SỐ PHÁP LUẬT 24/7
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      Trợ lý AI giải đáp tức thì 5.000+ câu hỏi pháp luật, trích dẫn chính xác quy định của Bộ Công an mọi lúc, mọi nơi hoàn toàn miễn phí.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border-2 border-amber-300 hover:border-amber-400 flex items-start space-x-3.5 shadow-sm transition hover:shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-red-800 uppercase tracking-wider">
                      CẢNH BÁO LỪA ĐẢO & AN TOÀN SỐ
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      Nhận diện sớm 22 thủ đoạn lừa đảo qua mạng tinh vi (app giả mạo, gọi điện đe dọa, việc làm ảo) và bí kíp &quot;4 Không - 2 Phải&quot; giữ an toàn tài sản.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4.5 rounded-2xl border-2 border-amber-300 hover:border-amber-400 flex items-start space-x-3.5 shadow-sm transition hover:shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-black text-red-800 uppercase tracking-wider">
                      TRẮC NGHIỆM PHÁP LUẬT CÔNG DÂN SỐ
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                      Luyện tập 500+ tình huống thực tế thường gặp trong đời sống; đạt kết quả xuất sắc được cấp ngay Giấy chứng nhận điện tử trang trọng.
                    </p>
                  </div>
                </div>
              </div>

              {/* BANNER ĐƯỜNG DÂY NÓNG TRỰC BAN KHẨN CẤP 24/24H */}
              <div className="bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#991b1b] border-2 border-[#facc15] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-xl">
                <div className="flex items-center space-x-3.5 text-left">
                  <div className="w-12 h-12 rounded-full bg-[#fef08a] text-red-950 flex items-center justify-center shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#fef08a]">
                      Đường dây nóng Trực ban & Tố giác tội phạm (24/24h)
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-yellow-300 tracking-wide drop-shadow">
                      02213.815.999
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-amber-100 flex items-center space-x-1.5 shrink-0 bg-black/25 px-3.5 py-2 rounded-xl border border-white/20">
                  <MapPin className="w-4 h-4 text-[#fef08a] shrink-0" />
                  <span>Trụ sở: Thôn Nho Lâm, xã Đức Hợp, Hưng Yên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

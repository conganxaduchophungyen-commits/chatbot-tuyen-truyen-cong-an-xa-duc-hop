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

      // 1. Nền tổng thể Royal Navy sang trọng
      const bgGrad = ctx.createLinearGradient(0, 0, W, H);
      bgGrad.addColorStop(0, '#070e22');
      bgGrad.addColorStop(0.5, '#0f1e42');
      bgGrad.addColorStop(1, '#081026');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // 2. Viền kim loại vàng kép (Double Metallic Gold Frame)
      const goldGrad = ctx.createLinearGradient(0, 0, W, H);
      goldGrad.addColorStop(0, '#f7d774');
      goldGrad.addColorStop(0.5, '#d49b27');
      goldGrad.addColorStop(1, '#f9df87');

      ctx.strokeStyle = goldGrad;
      ctx.lineWidth = 8;
      roundRect(28, 28, W - 56, H - 56, 36);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(247, 215, 116, 0.45)';
      ctx.lineWidth = 2;
      roundRect(44, 44, W - 88, H - 88, 28);
      ctx.stroke();

      // 3. Banner Đỏ Công an Nhân dân phía trên
      const headerGrad = ctx.createLinearGradient(48, 48, W - 48, 430);
      headerGrad.addColorStop(0, '#7f1111');
      headerGrad.addColorStop(0.5, '#b91c1c');
      headerGrad.addColorStop(1, '#7f1111');
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
      ctx.shadowColor = 'rgba(0,0,0,0.45)';
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
      ctx.fillStyle = '#fde047';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.fillText('CÔNG AN TỈNH HƯNG YÊN', W / 2, 238);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 50px Arial, sans-serif';
      ctx.fillText('CÔNG AN XÃ ĐỨC HỢP', W / 2, 298);

      // Huy hiệu Đề án 06/CP màu vàng kim
      ctx.fillStyle = goldGrad;
      roundRect(W / 2 - 330, 326, 660, 52, 26);
      ctx.fill();

      ctx.fillStyle = '#450a0a';
      ctx.font = '900 21px Arial, sans-serif';
      ctx.fillText('ĐỀ ÁN 06/CP • CHUYỂN ĐỔI SỐ PHỤC VỤ NHÂN DÂN', W / 2, 360);

      // 5. Tiêu đề chính dưới Header
      ctx.fillStyle = '#fde047';
      ctx.font = '900 32px Arial, sans-serif';
      ctx.fillText(posterSubtitle.toUpperCase(), W / 2, 490);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '600 22px Arial, sans-serif';
      ctx.fillText(
        'Mở Camera điện thoại hoặc ứng dụng Zalo quét mã QR để tra cứu & hỏi đáp ngay',
        W / 2,
        532
      );

      // 6. Khung Pedestal Đặt Mã QR Sang Trọng
      const qrBoxSize = 480;
      const qrBoxX = (W - qrBoxSize) / 2;
      const qrBoxY = 568;

      ctx.save();
      ctx.shadowColor = 'rgba(245, 197, 66, 0.28)';
      ctx.shadowBlur = 35;
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

      // 7. Thanh hiển thị đường link trực tiếp dưới mã QR
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      roundRect(130, 1074, W - 260, 56, 28);
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(247, 215, 116, 0.5)';
      ctx.stroke();

      ctx.fillStyle = '#fde047';
      ctx.font = 'bold 21px monospace';
      const displayUrl =
        appUrl.length > 58 ? appUrl.slice(0, 55) + '...' : appUrl;
      ctx.fillText(`🔗 ${displayUrl}`, W / 2, 1110);

      // 8. 4 Ô Tính Năng Trọng Tâm (2x2 Grid)
      const features = [
        {
          title: 'HƯỚNG DẪN THỦ TỤC & VNeID',
          desc: 'Tra cứu hồ sơ cư trú, căn cước, đăng ký xe chi tiết từng bước.',
        },
        {
          title: 'TRỢ LÝ AI PHÁP LUẬT 24/7',
          desc: 'Giải đáp 5.000+ câu hỏi pháp luật chính xác, tận tình suốt ngày đêm.',
        },
        {
          title: 'CẢNH BÁO TỘI PHẠM CÔNG NGHỆ CAO',
          desc: 'Nhận diện sớm các thủ đoạn giả danh Công an, lừa đảo qua mạng.',
        },
        {
          title: 'TRẮC NGHIỆM CÔNG DÂN SỐ',
          desc: '500 câu hỏi tình huống thực tế - Nhận chứng nhận Công dân số.',
        },
      ];

      const cardW = 510;
      const cardH = 128;
      const startX = 76;
      const startY = 1162;
      const gapX = 28;
      const gapY = 24;

      features.forEach((f, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const cx = startX + col * (cardW + gapX);
        const cy = startY + row * (cardH + gapY);

        ctx.fillStyle = 'rgba(15, 33, 72, 0.92)';
        roundRect(cx, cy, cardW, cardH, 20);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(247, 215, 116, 0.45)';
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillStyle = '#fde047';
        ctx.font = '900 21px Arial, sans-serif';
        ctx.fillText(`✦ ${f.title}`, cx + 24, cy + 46);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = '500 18px Arial, sans-serif';
        ctx.fillText(f.desc, cx + 24, cy + 88, cardW - 44);
      });

      // 9. Footer Đường dây nóng trực ban 24/24h
      const footY = 1476;
      const footGrad = ctx.createLinearGradient(76, footY, W - 76, footY + 185);
      footGrad.addColorStop(0, '#881313');
      footGrad.addColorStop(0.5, '#b91c1c');
      footGrad.addColorStop(1, '#7f1d1d');
      ctx.fillStyle = footGrad;
      roundRect(76, footY, W - 152, 188, 24);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = goldGrad;
      ctx.stroke();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#fde047';
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.fillText('ĐƯỜNG DÂY NÓNG TRỰC BAN TIẾP DÂN & TỐ GIÁC TỘI PHẠM (24/24H)', W / 2, footY + 52);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 54px Arial, sans-serif';
      ctx.fillText('📞 02213.815.999', W / 2, footY + 118);

      ctx.fillStyle = '#fef08a';
      ctx.font = '600 21px Arial, sans-serif';
      ctx.fillText('📍 Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên', W / 2, footY + 162);

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
        <div className="relative rounded-[36px] p-3 sm:p-5 bg-gradient-to-b from-[#070e22] via-[#0e1c3f] to-[#070e22] shadow-[0_25px_70px_rgba(7,14,34,0.65)] border-4 border-[#e5b84b] overflow-hidden print:shadow-none print:m-0">
          {/* Viền chỉ vàng kim bên trong */}
          <div className="relative rounded-[28px] border-2 border-[#f7d774]/45 overflow-hidden">
            {/* Họa tiết ánh sáng nền sang trọng */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* HEADER ĐỎ NHUNG VIỀN VÀNG KIM */}
            <div className="relative bg-gradient-to-r from-[#7f1111] via-[#b91c1c] to-[#7f1111] text-white text-center px-6 py-8 sm:py-10 border-b-4 border-[#f7d774]">
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

              <p className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-[#fde047]">
                CÔNG AN TỈNH HƯNG YÊN
              </p>
              <h3 className="text-2xl sm:text-4xl font-black tracking-wider uppercase mt-1 text-white drop-shadow">
                CÔNG AN XÃ ĐỨC HỢP
              </h3>

              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#f7d774] via-[#eab308] to-[#f7d774] text-red-950 font-black px-5 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-widest mt-4 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-red-900" />
                <span>ĐỀ ÁN 06/CP • CHUYỂN ĐỔI SỐ PHỤC VỤ NHÂN DÂN</span>
              </div>
            </div>

            {/* THÂN POSTER */}
            <div className="px-6 py-8 sm:px-12 sm:py-10 text-center relative z-10">
              <h4 className="text-base sm:text-2xl font-black text-[#fde047] uppercase tracking-wide leading-snug mb-2">
                {posterSubtitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mb-8 max-w-xl mx-auto">
                Mở Camera điện thoại hoặc ứng dụng <strong className="text-white">Zalo</strong> quét mã QR bên dưới để truy cập ngay hệ thống hướng dẫn thủ tục & hỏi đáp Trợ lý AI
              </p>

              {/* BỆ ĐẶT MÃ QR LUXURY TRUNG TÂM */}
              <div className="relative inline-block p-5 sm:p-7 bg-white rounded-[32px] border-[5px] border-[#e5b84b] shadow-[0_0_50px_rgba(245,197,66,0.28)] mb-6">
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
              <div className="max-w-xl mx-auto mb-8 px-4 py-2.5 rounded-full bg-white/10 border border-[#f7d774]/40 text-[#fde047] text-xs sm:text-sm font-mono truncate shadow-inner">
                🔗 {appUrl || 'https://conganxaduchop.hungyen.gov.vn'}
              </div>

              {/* 4 TRỤ CỘT TIỆN ÍCH SỐ SANG TRỌNG */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left max-w-2xl mx-auto mb-8">
                <div className="bg-[#0f2148]/90 p-4 rounded-2xl border border-[#f7d774]/35 flex items-start space-x-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black text-[#fde047] uppercase tracking-wider">
                      HƯỚNG DẪN THỦ TỤC & VNeID
                    </div>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Tra cứu thành phần hồ sơ cư trú, căn cước, đăng ký xe chi tiết từng bước.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0f2148]/90 p-4 rounded-2xl border border-[#f7d774]/35 flex items-start space-x-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black text-[#fde047] uppercase tracking-wider">
                      TRỢ LÝ AI PHÁP LUẬT 24/7
                    </div>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Giải đáp 5.000+ câu hỏi pháp luật chính xác, tận tình suốt ngày đêm.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0f2148]/90 p-4 rounded-2xl border border-[#f7d774]/35 flex items-start space-x-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black text-[#fde047] uppercase tracking-wider">
                      CẢNH BÁO LỪA ĐẢO MẠNG
                    </div>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      Nhận diện sớm các thủ đoạn giả danh Công an, Viện kiểm sát, tuyển CTV.
                    </p>
                  </div>
                </div>

                <div className="bg-[#0f2148]/90 p-4 rounded-2xl border border-[#f7d774]/35 flex items-start space-x-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-[#fde047] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-black text-[#fde047] uppercase tracking-wider">
                      TRẮC NGHIỆM CÔNG DÂN SỐ
                    </div>
                    <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                      500 câu hỏi tình huống thực tế — Cấp chứng nhận Công dân số cảnh giác.
                    </p>
                  </div>
                </div>
              </div>

              {/* BANNER ĐƯỜNG DÂY NÓNG TRỰC BAN KHẨN CẤP 24/24H */}
              <div className="bg-gradient-to-r from-[#881313] via-[#b91c1c] to-[#7f1d1d] border-2 border-[#f7d774] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-xl">
                <div className="flex items-center space-x-3.5 text-left">
                  <div className="w-12 h-12 rounded-full bg-[#fde047] text-red-950 flex items-center justify-center shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#fde047]">
                      Đường dây nóng Trực ban & Tố giác tội phạm (24/24h)
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-wide">
                      02213.815.999
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-yellow-100 flex items-center space-x-1.5 shrink-0 bg-black/25 px-3.5 py-2 rounded-xl border border-white/15">
                  <MapPin className="w-4 h-4 text-[#fde047] shrink-0" />
                  <span>Trụ sở: Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

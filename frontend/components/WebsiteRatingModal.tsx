'use client';

import React, { useState } from 'react';
import { 
  Star, 
  X, 
  Send, 
  CheckCircle2, 
  Shield, 
  MessageSquareHeart, 
  ThumbsUp, 
  Sparkles,
  Phone,
  User
} from 'lucide-react';
import { submitWebsiteReview } from '@/lib/api';

interface WebsiteRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: () => void;
}

const RATING_EMOTIONS = [
  { rating: 1, label: 'Rất không hài lòng', emoji: '😠', color: 'text-rose-600' },
  { rating: 2, label: 'Chưa hài lòng', emoji: '🙁', color: 'text-orange-500' },
  { rating: 3, label: 'Bình thường', emoji: '😐', color: 'text-amber-500' },
  { rating: 4, label: 'Hài lòng', emoji: '🙂', color: 'text-emerald-500' },
  { rating: 5, label: 'Rất hài lòng', emoji: '🌟', color: 'text-yellow-500' },
];

const FEEDBACK_CATEGORIES = [
  'Toàn diện trang web',
  'Thủ tục hành chính',
  'Trợ lý AI',
  'Cảnh báo tội phạm',
  'Tốc độ & Giao diện di động'
];

export default function WebsiteRatingModal({ isOpen, onClose, onReviewSubmitted }: WebsiteRatingModalProps) {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('Toàn diện trang web');
  const [comment, setComment] = useState<string>('');
  const [citizenName, setCitizenName] = useState<string>('');
  const [citizenPhone, setCitizenPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  if (!isOpen) return null;

  const currentRating = hoverRating || rating;
  const activeEmotion = RATING_EMOTIONS.find(e => e.rating === currentRating) || RATING_EMOTIONS[4];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setErrorMsg('Kính mong Quý công dân để lại đôi lời nhận xét hoặc ý kiến đóng góp.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await submitWebsiteReview({
        rating,
        category,
        comment: comment.trim(),
        citizen_name: citizenName.trim() || 'Công dân xã Đức Hợp',
        citizen_phone: citizenPhone.trim() || undefined
      });

      if (res.success) {
        setIsSuccess(true);
        if (onReviewSubmitted) {
          onReviewSubmitted();
        }
      } else {
        setErrorMsg('Không thể gửi đánh giá lúc này, vui lòng thử lại sau.');
      }
    } catch (err) {
      setErrorMsg('Đã có lỗi xảy ra khi gửi đánh giá.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setRating(5);
    setComment('');
    setCitizenName('');
    setCitizenPhone('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header với phong cách Công an nhân dân */}
        <div className="bg-gradient-to-r from-police-800 to-police-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-yellow-300 backdrop-blur-sm">
              <MessageSquareHeart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Đánh giá & Góp ý Trang web</h3>
              <p className="text-xs text-yellow-200/90 font-medium">Công an xã Đức Hợp, tỉnh Hưng Yên</p>
            </div>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-black text-slate-900">
              Trân trọng cảm ơn Quý công dân!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Ý kiến đóng góp quý báu của Quý công dân là cơ sở quan trọng giúp Công an xã Đức Hợp tiếp tục đổi mới, nâng cao chất lượng phục vụ nhân dân trên không gian số.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-police-700 hover:bg-police-800 text-white font-bold text-sm shadow-md transition"
              >
                Hoàn tất
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Lựa chọn số sao */}
            <div className="text-center space-y-2 pb-2 border-b border-slate-100">
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                Mức độ hài lòng của Quý công dân
              </div>
              
              <div className="flex items-center justify-center space-x-2 py-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 transition transform hover:scale-125 focus:outline-none"
                  >
                    <Star
                      className={`w-9 h-9 sm:w-10 sm:h-10 transition ${
                        s <= currentRating 
                          ? 'fill-amber-400 text-amber-400 drop-shadow-sm' 
                          : 'fill-slate-100 text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold">
                <span>{activeEmotion.emoji}</span>
                <span className={activeEmotion.color}>{activeEmotion.label}</span>
              </div>
            </div>

            {/* Lựa chọn lĩnh vực góp ý */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Lĩnh vực góp ý
              </label>
              <div className="flex flex-wrap gap-1.5">
                {FEEDBACK_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                      category === cat
                        ? 'bg-police-700 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Nội dung nhận xét / đóng góp */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between">
                <span>Nội dung nhận xét & Góp ý <span className="text-red-500">*</span></span>
              </label>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ví dụ: Thủ tục tra cứu rất nhanh, mẫu tờ khai đầy đủ... hoặc những điểm trang web cần cải thiện..."
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 focus:border-police-600 focus:ring-2 focus:ring-police-100 text-sm outline-none transition resize-none placeholder:text-slate-400"
              />
            </div>

            {/* Thông tin người gửi (Tùy chọn) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1 flex items-center space-x-1">
                  <User className="w-3.5 h-3.5" />
                  <span>Họ tên công dân (tùy chọn)</span>
                </label>
                <input
                  type="text"
                  value={citizenName}
                  onChange={(e) => setCitizenName(e.target.value)}
                  placeholder="Mặc định: Công dân xã Đức Hợp"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-police-600 text-xs outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1 flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Số điện thoại (tùy chọn)</span>
                </label>
                <input
                  type="text"
                  value={citizenPhone}
                  onChange={(e) => setCitizenPhone(e.target.value)}
                  placeholder="Để cán bộ hỗ trợ nếu cần"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-police-600 text-xs outline-none"
                />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-2 text-[11px] text-blue-900 leading-relaxed">
              <Shield className="w-4 h-4 text-police-700 shrink-0 mt-0.5" />
              <span>
                Toàn bộ phản hồi được lưu trữ bảo mật theo nguyên tắc <strong>Zero PII</strong>, phục vụ nâng cao chỉ số phục vụ hành chính công của Công an xã Đức Hợp.
              </span>
            </div>

            {/* Nút hành động */}
            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs transition"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-police-800 to-police-700 hover:from-police-900 hover:to-police-800 text-white font-extrabold text-xs shadow-md shadow-police-900/20 transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Đang gửi...' : 'Gửi Đánh Giá'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

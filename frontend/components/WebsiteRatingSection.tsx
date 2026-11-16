'use client';

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ThumbsUp, 
  MessageSquareQuote, 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  BadgeCheck, 
  Plus, 
  MessageCircle,
  Clock,
  Heart
} from 'lucide-react';
import { getWebsiteReviewsSummary, WebsiteReview, WebsiteReviewSummary } from '@/lib/api';
import WebsiteRatingModal from './WebsiteRatingModal';

export default function WebsiteRatingSection() {
  const [summary, setSummary] = useState<WebsiteReviewSummary | null>(null);
  const [selectedStarFilter, setSelectedStarFilter] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const data = await getWebsiteReviewsSummary();
    setSummary(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!summary) return null;

  const filteredReviews = summary.recent_reviews.filter(r => {
    if (selectedStarFilter === 'all') return true;
    return r.rating === selectedStarFilter;
  });

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Chỉ số Phục vụ & Đánh giá của Nhân dân</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Mức Độ Hài Lòng Của Bà Con Nhân Dân
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Công an xã Đức Hợp công khai minh bạch kết quả khảo sát sự hài lòng của công dân khi tra cứu thủ tục, hỏi đáp trợ lý số và tìm hiểu pháp luật.
          </p>
        </div>

        {/* Thống kê Tổng quan (Bảng điểm & Phân bố số sao) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cột Điểm trung bình */}
          <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-slate-100 lg:pr-8 flex flex-col items-center lg:items-start justify-center">
            <div className="text-5xl sm:text-6xl font-black text-police-700 tracking-tight flex items-baseline space-x-2">
              <span>{summary.average_rating.toFixed(1)}</span>
              <span className="text-2xl font-bold text-slate-400">/ 5.0</span>
            </div>
            
            <div className="flex items-center space-x-1 my-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-6 h-6 ${
                    s <= Math.round(summary.average_rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-slate-100 text-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="text-sm font-semibold text-slate-600 mb-4">
              Dựa trên <strong>{summary.total_reviews.toLocaleString('vi-VN')}</strong> lượt đánh giá của người dân
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <span>{summary.satisfaction_rate}% Đánh giá Hài lòng & Rất hài lòng</span>
            </div>
          </div>

          {/* Cột Phân bố số sao */}
          <div className="lg:col-span-5 space-y-2">
            {[5, 4, 3, 2, 1].map((s) => {
              const count = summary.star_breakdown[s] || 0;
              const percent = summary.total_reviews > 0 ? Math.round((count / summary.total_reviews) * 100) : 0;
              return (
                <button
                  key={s}
                  onClick={() => setSelectedStarFilter(selectedStarFilter === s ? 'all' : s)}
                  className={`w-full flex items-center space-x-3 text-xs font-medium py-1 px-2 rounded-xl transition ${
                    selectedStarFilter === s ? 'bg-amber-50 text-amber-900 font-bold' : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="flex items-center space-x-1 w-12 shrink-0">
                    <span className="font-bold">{s}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        s >= 4 ? 'bg-amber-400' : s === 3 ? 'bg-amber-300' : 'bg-rose-400'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="w-16 text-right font-semibold text-slate-500 shrink-0">
                    {count} lượt
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cột Kêu gọi hành động */}
          <div className="lg:col-span-3 text-center flex flex-col items-center justify-center p-6 bg-police-50/60 rounded-2xl border border-police-100">
            <Heart className="w-8 h-8 text-police-700 mb-2 animate-pulse" />
            <div className="font-extrabold text-sm text-slate-900 mb-1">Ý kiến của Bạn rất quan trọng</div>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Hãy chia sẻ cảm nhận để Công an xã Đức Hợp phục vụ bà con ngày một tốt hơn!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-police-700 hover:bg-police-800 text-white font-extrabold text-xs shadow-md shadow-police-900/10 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Gửi Đánh Giá / Góp Ý</span>
            </button>
          </div>
        </div>

        {/* Danh sách Đánh giá & Phản hồi của Cán bộ */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200">
            <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
              Nhận xét gần đây của người dân ({filteredReviews.length})
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-500 font-semibold">Lọc theo:</span>
              <button
                onClick={() => setSelectedStarFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  selectedStarFilter === 'all'
                    ? 'bg-police-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setSelectedStarFilter(5)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1 transition ${
                  selectedStarFilter === 5
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>5</span>
                <Star className="w-3 h-3 fill-current" />
              </button>
              <button
                onClick={() => setSelectedStarFilter(4)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1 transition ${
                  selectedStarFilter === 4
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>4</span>
                <Star className="w-3 h-3 fill-current" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.slice(0, 6).map((review) => (
              <div
                key={review.id}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-police-300 transition"
              >
                <div>
                  {/* Top info */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 flex items-center space-x-1.5">
                        <UserCheck className="w-4 h-4 text-police-700" />
                        <span>{review.citizen_name}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {review.created_at ? new Date(review.created_at).toLocaleDateString('vi-VN') : 'Gần đây'} • Chuyên mục: <strong className="text-slate-600">{review.category}</strong>
                      </div>
                    </div>

                    <div className="flex items-center space-x-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s <= review.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-100 text-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
                    "{review.comment}"
                  </p>
                </div>

                {/* Phản hồi từ Công an xã nếu có */}
                {review.admin_reply && (
                  <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100 space-y-1">
                    <div className="flex items-center space-x-1.5 text-[11px] font-extrabold text-police-800">
                      <ShieldCheck className="w-3.5 h-3.5 text-police-700" />
                      <span>Phản hồi từ Công an xã Đức Hợp:</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {review.admin_reply}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white border border-slate-300 text-slate-700 hover:text-police-700 hover:border-police-600 font-bold text-xs shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4 text-police-700" />
              <span>Viết Đánh Giá / Góp Ý Cho Trang Web</span>
            </button>
          </div>
        </div>
      </div>

      <WebsiteRatingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReviewSubmitted={loadData}
      />
    </section>
  );
}

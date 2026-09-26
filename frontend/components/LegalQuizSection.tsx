'use client';

import React, { useState } from 'react';
import { QUIZ_QUESTIONS, CORE_LEGAL_TIPS, QuizQuestion } from '@/lib/quizData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  ArrowRight,
  PhoneCall,
  Sparkles,
  Share2,
  Printer
} from 'lucide-react';

export default function LegalQuizSection() {
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [showResults, setShowResults] = useState(false);
  const [citizenName, setCitizenName] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredQuestions = activeCategoryFilter === 'all' 
    ? QUIZ_QUESTIONS 
    : QUIZ_QUESTIONS.filter(q => q.category === activeCategoryFilter);

  const handleSelectOption = (questionId: number, key: 'A' | 'B' | 'C' | 'D') => {
    if (showResults) return; // Không cho sửa khi đã nộp bài
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: key
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctKey) {
        correct += 1;
      }
    });
    return correct;
  };

  const totalQuestions = QUIZ_QUESTIONS.length;
  const score = calculateScore();
  const answeredCount = Object.keys(userAnswers).length;
  const isPassed = score >= 7;

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <div className="space-y-12">
      {/* HEADER BANNER CỦA PHẦN HỌC TẬP & KIỂM TRA KIẾN THỨC */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-700 via-amber-600 to-police-900 text-white p-6 sm:p-10 shadow-xl border border-amber-500/30">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-black/25 px-3 py-1 rounded-full text-xs font-bold text-yellow-300 mb-4 border border-yellow-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KHÔNG GIAN HỌC TẬP & TỰ ĐÁNH GIÁ KIẾN THỨC SỐ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
            Kiểm Tra Kiến Thức Pháp Luật & <br className="hidden sm:inline" />
            <span className="text-yellow-300">Nhận Diện Thủ Đoạn Lừa Đảo Trên Không Gian Mạng</span>
          </h2>
          <p className="text-xs sm:text-base text-amber-100 leading-relaxed font-medium mb-6">
            Bộ câu hỏi tình huống thực tế do Công an xã Đức Hợp biên soạn nhằm giúp bà con nhân dân nâng cao cảnh giác, nắm vững các quy định pháp luật thiết thực (Cư trú, Căn cước 2023, PCCC, Đăng ký xe) và nhận diện 100% bẫy lừa đảo công nghệ cao.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold">
            <div className="bg-white/15 px-4 py-2 rounded-2xl flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-yellow-300" />
              <span>{totalQuestions} Câu hỏi tình huống thực tế</span>
            </div>
            <div className="bg-white/15 px-4 py-2 rounded-2xl flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Cấp chứng nhận online khi đạt từ 7/10 điểm</span>
            </div>
          </div>
        </div>
      </div>

      {/* CẨM NANG GHI NHỚ NHANH ("4 KHÔNG - 2 PHẢI") */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Kiến Thức Cốt Lõi Cần Nhớ
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Nguyên tắc vàng bảo vệ an toàn tài sản và tuân thủ pháp luật
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_LEGAL_TIPS.map((tip, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-amber-400 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  {tip.badge}
                </span>
                <h4 className="font-black text-sm text-slate-900 mt-3 mb-2">
                  {tip.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THANH ĐIỀU HƯỚNG VÀ BỘ LỌC CÂU HỎI */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <span className="text-xs font-bold text-slate-500 uppercase mr-1 shrink-0">Chủ đề:</span>
          {[
            { id: 'all', label: 'Tất cả (10 câu)' },
            { id: 'lua_dao', label: 'Lừa đảo công nghệ cao' },
            { id: 'cu_tru', label: 'Cư trú & VNeID' },
            { id: 'phap_luat', label: 'Luật Căn cước' },
            { id: 'giao_thong', label: 'Đăng ký xe' },
            { id: 'pccc', label: 'PCCC' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setActiveCategoryFilter(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition border ${
                activeCategoryFilter === f.id
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
          <span className="text-xs font-semibold text-slate-500">
            Đã trả lời: <strong className="text-amber-600">{answeredCount}/{totalQuestions}</strong>
          </span>

          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={answeredCount === 0}
              className={`px-5 py-2 rounded-2xl text-xs sm:text-sm font-bold shadow-md transition ${
                answeredCount === 0
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
            >
              Nộp bài & Xem kết quả
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition flex items-center space-x-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm lại từ đầu</span>
            </button>
          )}
        </div>
      </div>

      {/* BẢNG KẾT QUẢ VÀ CHỨNG NHẬN KHI ĐÃ NỘP BÀI */}
      {showResults && (
        <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-amber-200">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-lg shrink-0 ${
                isPassed ? 'bg-emerald-600' : 'bg-amber-600'
              }`}>
                {isPassed ? <Award className="w-9 h-9" /> : <ShieldCheck className="w-9 h-9" />}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {isPassed ? 'Chúc mừng! Bạn đã hoàn thành xuất sắc' : 'Hoàn thành bài kiểm tra'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Kết quả đạt được: <strong className="text-amber-700 text-base">{score}/{totalQuestions} câu đúng</strong> ({Math.round((score / totalQuestions) * 100)}%)
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition flex items-center space-x-1.5 shadow-2xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Thi lại lần nữa</span>
              </button>
            </div>
          </div>

          {/* CHỨNG NHẬN ĐIỆN TỬ VIRTUAL CERTIFICATE */}
          {isPassed && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-double border-amber-400 shadow-md relative overflow-hidden">
              <div className="text-center space-y-3 max-w-xl mx-auto">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-50 p-1 border-2 border-red-500 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-cong-an.png" alt="Logo Công an" className="w-full h-full object-contain" />
                </div>
                <div className="text-xs uppercase font-black tracking-widest text-red-700">
                  CÔNG AN TỈNH HƯNG YÊN • CÔNG AN XÃ ĐỨC HỢP
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-amber-900 uppercase tracking-wide">
                  GIẤY CHỨNG NHẬN ĐIỆN TỬ
                </h4>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  CÔNG DÂN SỐ CẢNH GIÁC & AM HIỂU PHÁP LUẬT NĂM 2026
                </p>

                <div className="my-4 pt-2">
                  <p className="text-xs text-slate-500 mb-1">Chứng nhận cấp cho công dân:</p>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn để in chứng nhận..."
                    value={citizenName}
                    onChange={(e) => setCitizenName(e.target.value)}
                    className="text-center font-black text-base sm:text-xl text-police-900 border-b-2 border-dashed border-amber-500 bg-transparent focus:outline-none w-full max-w-md pb-1 placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic max-w-lg mx-auto">
                  Đã hoàn thành xuất sắc bài kiểm tra trắc nghiệm pháp luật, nắm vững quy định cư trú, PCCC, đăng ký xe và có kỹ năng nhận diện tinh tường các phương thức, thủ đoạn lừa đảo trên không gian mạng.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs border-t border-slate-200 gap-2">
                  <span className="text-slate-500">
                    Xác nhận bởi: <strong>Trợ lý số Công an xã Đức Hợp</strong>
                  </span>
                  <span className="text-slate-500">
                    Địa bàn: <strong>Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên</strong>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DANH SÁCH CÂU HỎI TRẮC NGHIỆM */}
      <div className="space-y-6">
        {filteredQuestions.map((q, index) => {
          const selectedOption = userAnswers[q.id];
          const isCorrect = selectedOption === q.correctKey;
          const hasAnswered = selectedOption !== undefined;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 border transition shadow-sm ${
                showResults
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-red-300 bg-red-50/20'
                  : hasAnswered
                  ? 'border-amber-400 shadow-md'
                  : 'border-slate-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                    {q.id}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {q.categoryLabel}
                  </span>
                </div>

                {showResults && (
                  <div>
                    {isCorrect ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Chính xác (+1 điểm)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Chưa chính xác</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Scenario Context */}
              {q.scenario && (
                <div className="mb-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 inline-block">
                  ⚠️ {q.scenario}
                </div>
              )}

              {/* Question Text */}
              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-5">
                {q.question}
              </h4>

              {/* Options List */}
              <div className="space-y-3 mb-5">
                {q.options.map((opt) => {
                  const isThisSelected = selectedOption === opt.key;
                  const isThisCorrect = opt.key === q.correctKey;

                  let optionStyle = 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800';

                  if (showResults) {
                    if (isThisCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400';
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle = 'border-red-500 bg-red-50 text-red-950 line-through';
                    } else {
                      optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400';
                    }
                  } else if (isThisSelected) {
                    optionStyle = 'border-amber-500 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-400';
                  }

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      disabled={showResults}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition flex items-start space-x-3 ${optionStyle}`}
                    >
                      <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                        showResults && isThisCorrect
                          ? 'bg-emerald-600 text-white'
                          : showResults && isThisSelected && !isThisCorrect
                          ? 'bg-red-600 text-white'
                          : isThisSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed pt-0.5">
                        {opt.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Explanation upon results */}
              {showResults && (
                <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm space-y-2 bg-slate-50 p-4 rounded-2xl">
                  <div className="font-bold text-slate-900 flex items-center space-x-1.5 text-police-800">
                    <HelpCircle className="w-4 h-4 text-police-600 shrink-0" />
                    <span>Giải thích của Công an xã Đức Hợp:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                  <div className="text-[11px] font-semibold text-slate-500 italic">
                    ⚖️ Căn cứ: {q.legalBasis}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER CALL-TO-ACTION FOR CITIZENS */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-black text-base sm:text-lg mb-1">
            Bạn có câu hỏi pháp luật khác cần được giải đáp ngay?
          </h4>
          <p className="text-xs text-slate-300">
            Hỏi trực tiếp Trợ lý số AI ở góc dưới bên phải hoặc gọi điện trực ban Công an xã Đức Hợp.
          </p>
        </div>

        <a
          href="tel:02213815999"
          className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition shrink-0 shadow-lg"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Hotline: 02213.815.999</span>
        </a>
      </div>
    </div>
  );
}

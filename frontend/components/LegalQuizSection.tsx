'use client';

import React, { useState, useEffect } from 'react';
import { 
  DetailedQuizQuestion, 
  getRandomQuizExam, 
  getFullQuestionBank 
} from '@/lib/quizBank';
import { CORE_LEGAL_TIPS } from '@/lib/quizData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  BookOpen, 
  Shuffle,
  Sparkles,
  Printer,
  ChevronDown,
  Layers,
  Check,
  Scale
} from 'lucide-react';

export default function LegalQuizSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [examQuestions, setExamQuestions] = useState<DetailedQuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [showResults, setShowResults] = useState(false);
  const [citizenName, setCitizenName] = useState('');
  const [totalBankCount, setTotalBankCount] = useState<number>(400);

  // Khởi tạo đề thi ngẫu nhiên khi component mount hoặc khi đổi tiêu chí
  useEffect(() => {
    const fullBank = getFullQuestionBank();
    setTotalBankCount(fullBank.length);
    generateNewExam(selectedCategory, questionCount);
  }, []);

  const generateNewExam = (cat: string, count: number) => {
    const randomQuestions = getRandomQuizExam(cat, count);
    setExamQuestions(randomQuestions);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    generateNewExam(cat, questionCount);
  };

  const handleCountChange = (count: number) => {
    setQuestionCount(count);
    generateNewExam(selectedCategory, count);
  };

  const handleSelectOption = (questionId: string, key: 'A' | 'B' | 'C' | 'D') => {
    if (showResults) return; // Không cho sửa sau khi nộp bài
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: key
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctKey) {
        correct += 1;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const total = examQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const passRate = total > 0 ? (score / total) : 0;
  const isPassed = passRate >= 0.7; // Đạt từ 70% trở lên

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="space-y-10">
      {/* HEADER BANNER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-700 via-amber-600 to-police-900 text-white p-6 sm:p-10 shadow-xl border border-amber-500/30">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-black/25 px-3 py-1 rounded-full text-xs font-bold text-yellow-300 mb-4 border border-yellow-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NGÂN HÀNG {totalBankCount}+ CÂU HỎI THỰC TẾ • TỰ ĐỘNG SINH ĐỀ THI NGẪU NHIÊN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
            Kiểm Tra Kiến Thức Pháp Luật & <br className="hidden sm:inline" />
            <span className="text-yellow-300">Nhận Diện Thủ Đoạn Lừa Đảo Trên Không Gian Mạng</span>
          </h2>
          <p className="text-xs sm:text-base text-amber-100 leading-relaxed font-medium mb-6">
            Mỗi lĩnh vực được Công an xã Đức Hợp xây dựng khoảng 100 câu hỏi tình huống thực tế. Hệ thống sẽ tự động rút ngẫu nhiên bộ câu hỏi để bà con ôn luyện, tự kiểm tra kiến thức và nhận diện các bẫy lừa đảo tinh vi.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold">
            <div className="bg-white/15 px-4 py-2 rounded-2xl flex items-center space-x-2">
              <Layers className="w-4 h-4 text-yellow-300" />
              <span>4 Lĩnh vực (Khoảng 100 câu/lĩnh vực)</span>
            </div>
            <div className="bg-white/15 px-4 py-2 rounded-2xl flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-300" />
              <span>Cấp chứng nhận điện tử khi đạt từ 70% điểm</span>
            </div>
          </div>
        </div>
      </div>

      {/* THANH ĐIỀU KHIỂN: CHỌN SỐ LƯỢNG CÂU HỎI & LĨNH VỰC & RÚT ĐỀ NGẪU NHIÊN */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          {/* Chọn lĩnh vực */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-500 tracking-wider block">
              1. Chọn lĩnh vực kiểm tra:
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Tất cả lĩnh vực (Tổng hợp)' },
                { id: 'lua_dao', label: 'Lừa đảo công nghệ cao (~100 câu)' },
                { id: 'cu_tru', label: 'Cư trú & Căn cước VNeID (~100 câu)' },
                { id: 'giao_thong', label: 'Giao thông & Đăng ký xe (~100 câu)' },
                { id: 'pccc', label: 'PCCC & Cứu nạn (~100 câu)' },
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition border ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chọn số lượng câu hỏi */}
          <div className="space-y-2 shrink-0">
            <label className="text-xs font-black uppercase text-slate-500 tracking-wider block">
              2. Chọn số lượng câu hỏi:
            </label>
            <div className="flex items-center space-x-2">
              {[10, 20, 30, 50].map(cnt => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => handleCountChange(cnt)}
                  className={`w-12 h-10 rounded-2xl text-xs font-black transition border flex items-center justify-center ${
                    questionCount === cnt
                      ? 'bg-police-700 text-white border-police-700 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cnt}
                </button>
              ))}
              <span className="text-xs text-slate-500 font-semibold pl-1">câu</span>
            </div>
          </div>
        </div>

        {/* Thanh trạng thái làm bài & Nút Đổi đề thi ngẫu nhiên */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => generateNewExam(selectedCategory, questionCount)}
              className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-2xl text-xs font-bold transition border border-slate-200"
            >
              <Shuffle className="w-3.5 h-3.5 text-police-700" />
              <span>Rút đề ngẫu nhiên mới</span>
            </button>
            <span className="text-xs text-slate-500">
              Đã làm: <strong className="text-amber-700 font-extrabold">{answeredCount}/{total} câu</strong>
            </span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            {!showResults ? (
              <button
                type="button"
                onClick={() => setShowResults(true)}
                disabled={answeredCount === 0}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-black shadow-md transition ${
                  answeredCount === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 text-white active:scale-95'
                }`}
              >
                Nộp bài & Chấm điểm
              </button>
            ) : (
              <button
                type="button"
                onClick={() => generateNewExam(selectedCategory, questionCount)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-amber-600 hover:bg-amber-700 text-white transition flex items-center justify-center space-x-1.5 shadow"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Thi lại với bộ câu hỏi khác</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* BẢNG KẾT QUẢ VÀ CHỨNG NHẬN KHI NỘP BÀI */}
      {showResults && (
        <div className="bg-gradient-to-br from-white via-amber-50/40 to-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl space-y-6 animate-in fade-in duration-300">
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
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Điểm số đạt được: <strong className="text-amber-800 text-lg font-black">{score}/{total} câu đúng</strong> ({Math.round(passRate * 100)}%)
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Vui lòng cuộn xuống dưới để xem lại từng câu hỏi kèm <strong>lý do sai</strong> và <strong>trích dẫn căn cứ pháp luật</strong>.
                </p>
              </div>
            </div>

            <button
              onClick={() => generateNewExam(selectedCategory, questionCount)}
              className="px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition flex items-center space-x-2 shadow-2xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thi đề mới ngẫu nhiên</span>
            </button>
          </div>

          {/* CHỨNG NHẬN ĐIỆN TỬ NẾU ĐẠT TỪ 70% TRỞ LÊN */}
          {isPassed && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-double border-amber-400 shadow-md relative overflow-hidden">
              <div className="text-center space-y-3 max-w-xl mx-auto">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-50 p-1 border-2 border-red-500 shadow-xs">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-cong-an.png" alt="Logo Công an" width={64} height={64} style={{ width: '64px', height: '64px', objectFit: 'contain' }} className="w-full h-full object-contain" />
                </div>
                <div className="text-xs uppercase font-black tracking-widest text-red-700">
                  CÔNG AN TỈNH HƯNG YÊN • CÔNG AN XÃ ĐỨC HỢP
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-amber-900 uppercase tracking-wide">
                  GIẤY CHỨNG NHẬN ĐIỆN TỬ
                </h4>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  CÔNG DÂN SỐ CẢNH GIÁC & AM HIỂU PHÁP LUẬT
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
                  Đã hoàn thành xuất sắc bài kiểm tra trắc nghiệm với điểm số <strong>{score}/{total}</strong> ({Math.round(passRate * 100)}%), nắm vững quy định cư trú, PCCC, đăng ký xe máy và có kỹ năng nhận diện tinh tường các thủ đoạn lừa đảo trên không gian mạng.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs border-t border-slate-200 gap-2">
                  <span className="text-slate-500">
                    Xác nhận bởi: <strong>Trợ lý số Công an xã Đức Hợp</strong>
                  </span>
                  <span className="text-slate-500">
                    Trụ sở: <strong>Thôn Nho Lâm, xã Đức Hợp, tỉnh Hưng Yên</strong>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DANH SÁCH BỘ CÂU HỎI & XEM LẠI BÀI THI KÈM CHÚ THÍCH, LÝ DO SAI, TRÍCH DẪN */}
      <div className="space-y-6">
        {examQuestions.map((q, index) => {
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
              {/* Tiêu đề câu hỏi */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {q.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {q.id}
                  </span>
                </div>

                {showResults && (
                  <div>
                    {isCorrect ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Chính xác (+1)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Trả lời chưa đúng</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Tình huống bối cảnh */}
              {q.scenario && (
                <div className="mb-3 text-xs font-semibold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 inline-block">
                  ⚠️ {q.scenario}
                </div>
              )}

              {/* Đề bài */}
              <h4 className="text-base sm:text-lg font-black text-slate-900 leading-snug mb-5">
                {q.question}
              </h4>

              {/* 4 Lựa chọn A, B, C, D */}
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

              {/* PHẦN CHÚ THÍCH, LÝ DO SAI VÀ TRÍCH DẪN PHÁP LUẬT (KHI NỘP BÀI) */}
              {showResults && (
                <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm space-y-3 bg-slate-50/80 p-5 rounded-2xl">
                  {/* Nếu người dân chọn SAI -> Nêu rõ lý do sai ở đâu */}
                  {!isCorrect && selectedOption && (
                    <div className="p-3 bg-red-100/70 border border-red-200 rounded-xl text-red-950 space-y-1">
                      <div className="font-black flex items-center space-x-1.5 text-red-700">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>Lý do bạn chọn sai ở phương án [{selectedOption}]:</span>
                      </div>
                      <p className="text-xs leading-relaxed font-medium">
                        {q.whyWrong[selectedOption] || 'Phương án này không phù hợp với quy định pháp luật hoặc là cái bẫy đối tượng lừa đảo lợi dụng.'}
                      </p>
                    </div>
                  )}

                  {/* Lời giải thích phương án đúng */}
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900 flex items-center space-x-1.5 text-police-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Vì sao phương án đúng là [{q.correctKey}]:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed font-medium pl-5">
                      {q.explanation}
                    </p>
                  </div>

                  {/* Chú thích & Trích dẫn căn cứ pháp luật */}
                  <div className="pt-2 border-t border-slate-200/80 flex items-start space-x-2 text-[11px] text-slate-600">
                    <Scale className="w-3.5 h-3.5 text-police-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Căn cứ pháp lý & Trích dẫn:</strong> {q.legalBasis}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CẨM NANG GHI NHỚ NHANH */}
      <div className="pt-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Kiến Thức Cốt Lõi Cần Nhớ ("4 Không - 2 Phải")
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Khuyến cáo của Công an xã Đức Hợp giúp bảo vệ an toàn tính mạng và tài sản nhân dân
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
    </div>
  );
}

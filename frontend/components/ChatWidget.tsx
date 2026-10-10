'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  PhoneCall,
  Bike,
  UserCheck,
  Flame,
  Scale,
  ShieldAlert,
  Layers,
  ChevronRight
} from 'lucide-react';
import { sendChatQuery, ChatSource } from '@/lib/api';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  sources?: ChatSource[];
  related_questions?: string[];
  clarifying_questions?: string[];
  timestamp: string;
}

interface DomainItem {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  faqs: string[];
}

const DOMAINS: DomainItem[] = [
  {
    id: 'dang_ky_xe',
    name: 'Đăng ký xe & Giao thông',
    shortName: '🏍️ Đăng ký xe',
    icon: Bike,
    faqs: [
      'Tôi mới mua xe máy mới, muốn bấm biển số tại Công an xã Đức Hợp thì cần mang theo những gì và biển số này có đi theo tôi suốt đời không?',
      'Biển số xe máy định danh có đi theo người suốt đời không, khi bán xe thì sao?',
      'Thủ tục sang tên xe máy cũ qua nhiều đời chủ, không tìm được chủ cũ làm thế nào?',
      'Cách nộp phạt vi phạm giao thông và tra cứu phạt nguội trên VNeID?',
      'Quy định 12 điểm Giấy phép lái xe từ năm 2025 - 2026 như thế nào?'
    ]
  },
  {
    id: 'can_cuoc_vneid',
    name: 'Căn cước & Cư trú VNeID',
    shortName: '🪪 Căn cước, VNeID',
    icon: UserCheck,
    faqs: [
      'Thủ tục làm thẻ Căn cước mới tại xã Đức Hợp cần mang theo giấy tờ gì, độ tuổi nào phải đổi?',
      'Cách kích hoạt tài khoản định danh điện tử VNeID Mức 2 tại Công an xã Đức Hợp?',
      'Đăng ký thường trú, tạm trú trực tuyến trên ứng dụng VNeID thế nào?',
      'Chứng minh nhân dân 9 số, 12 số hết hạn từ khi nào, thẻ CCCD gắn chip còn dùng được không?',
      'Bị mất thẻ Căn cước làm lại online trên VNeID thế nào, có cần chụp lại ảnh không?'
    ]
  },
  {
    id: 'canh_bao_lua_dao',
    name: 'Phòng chống lừa đảo',
    shortName: '🚨 Cảnh báo lừa đảo',
    icon: ShieldAlert,
    faqs: [
      'Lỡ cài app VNeID giả mạo hoặc bấm link lạ bị trừ tiền thì làm gì khẩn cấp?',
      'Dấu hiệu cuộc gọi video Deepfake mạo danh người thân vay tiền khẩn cấp?',
      'Cuộc gọi giả danh Công an, Viện kiểm sát dọa lệnh bắt ma túy, rửa tiền yêu cầu chuyển tiền?',
      'Cảnh báo chiêu trò tuyển cộng tác viên Shopee, TikTok kiếm hoa hồng online?',
      'Tự nhiên có người chuyển nhầm tiền vào tài khoản ngân hàng thì xử lý ra sao?'
    ]
  },
  {
    id: 'pccc_cnch',
    name: 'PCCC & Cứu nạn',
    shortName: '🧯 PCCC, Cứu nạn',
    icon: Flame,
    faqs: [
      'Mỗi gia đình nông thôn cần trang bị loại bình chữa cháy nào và đặt ở đâu?',
      'Cách xử lý an toàn khi phát hiện rò rỉ khí gas trong gian bếp gia đình?',
      'Kỹ năng thoát nạn an toàn khi xảy ra hỏa hoạn trong nhà ống, chuồng cọp?',
      'Số điện thoại báo cháy khẩn cấp 114 và Trực ban Công an xã Đức Hợp?'
    ]
  },
  {
    id: 'antt_phap_luat',
    name: 'An ninh trật tự & Đời sống',
    shortName: '⚖️ ANTT & Đời sống',
    icon: Scale,
    faqs: [
      'Bị người thân bạo lực gia đình, đánh đập hành hung thì phải làm sao để được bảo vệ?',
      'Tranh chấp ranh giới đất đai, lối đi chung giữa hàng xóm hòa giải tại xã thế nào?',
      'Cho người khác vay tiền bị chây ỳ, quỵt nợ thì xử lý thế nào đúng pháp luật?',
      'Thủ tục thuận tình ly hôn và quy định quyền nuôi con dưới 36 tháng tuổi?',
      'Số điện thoại Trực ban Công an xã Đức Hợp tiếp nhận tin báo ANTT 24/24h?'
    ]
  },
  {
    id: 'quan_ly_nganh_nghe',
    name: 'Ngành nghề & Pháo nổ',
    shortName: '🎆 Pháo hoa & Ngành nghề',
    icon: Sparkles,
    faqs: [
      'Người dân được đốt loại pháo nào vào dịp Tết, mua pháo hoa Z121 ở đâu hợp pháp?',
      'Kinh doanh dịch vụ lưu trú, nhà trọ tại xã cần đáp ứng điều kiện ANTT gì?',
      'Quy định xử phạt hành vi mua bán, tàng trữ, sử dụng pháo nổ trái phép?'
    ]
  }
];

function parseInlineMarkdown(line: string, isUser: boolean): React.ReactNode[] {
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = line.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return (
        <strong key={index} className={`font-bold ${isUser ? 'text-yellow-200' : 'text-slate-900'}`}>
          {content}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      const content = part.slice(1, -1);
      return (
        <em key={index} className={`italic ${isUser ? 'text-blue-100' : 'text-slate-700'}`}>
          {content}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      const content = part.slice(1, -1);
      return (
        <code
          key={index}
          className={`px-1 py-0.5 rounded font-mono text-[11px] font-semibold ${
            isUser ? 'bg-police-800 text-yellow-300' : 'bg-slate-100 text-police-800'
          }`}
        >
          {content}
        </code>
      );
    }
    return part;
  });
}

function FormattedMessageText({ text, isUser = false }: { text: string; isUser?: boolean }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-1.5 leading-relaxed">
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-1.5" />;
        }
        return (
          <p key={idx} className="leading-relaxed">
            {parseInlineMarkdown(line, isUser)}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Kính chào Quý công dân! Tôi là **Trợ lý số Pháp luật & Dịch vụ công của Công an xã Đức Hợp**.\n\n👉 **Bác/Anh/Chị hãy chọn một Lĩnh vực bên dưới** để xem các câu hỏi thường gặp nhất, hoặc gõ trực tiếp câu hỏi của mình để được giải đáp ngay!',
      timestamp: 'Vừa xong',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Khởi tạo sessionId ẩn danh
    let sId = localStorage.getItem('duchop_chat_session');
    if (!sId) {
      sId = 'citizen_' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('duchop_chat_session', sId);
    }
    setSessionId(sId);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSelectDomain = (domainId: string | null) => {
    setSelectedDomain(domainId);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsLoading(true);

    try {
      const resp = await sendChatQuery(sessionId, query, selectedDomain || undefined);
      const botMsg: Message = {
        id: 'bot_' + Date.now(),
        sender: 'bot',
        text: resp.answer,
        sources: resp.sources,
        related_questions: resp.related_questions,
        clarifying_questions: resp.clarifying_questions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = {
        id: 'err_' + Date.now(),
        sender: 'bot',
        text: 'Hệ thống đang bận hoặc gián đoạn kết nối. Kính mời Quý công dân liên hệ trực tiếp Trực ban Công an xã Đức Hợp qua số điện thoại 02213.815.999 để được hỗ trợ chu đáo nhất.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentDomainObj = DOMAINS.find((d) => d.id === selectedDomain);
  const activeFaqs = currentDomainObj 
    ? currentDomainObj.faqs 
    : [
        'Tôi mới mua xe máy mới, muốn bấm biển số tại Công an xã Đức Hợp thì cần mang theo những gì và biển số này có đi theo tôi suốt đời không?',
        'Thủ tục làm thẻ Căn cước mới tại xã Đức Hợp cần giấy tờ gì?',
        'Cách kích hoạt tài khoản định danh điện tử VNeID Mức 2?',
        'Lỡ cài app VNeID giả mạo hoặc bấm link lạ thì làm gì khẩn cấp?',
        'Mỗi gia đình nông thôn cần trang bị loại bình chữa cháy nào?'
      ];

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2.5 bg-gradient-to-r from-police-700 via-police-800 to-red-700 hover:from-police-800 hover:to-red-800 text-white px-4 py-3.5 rounded-full shadow-2xl hover:shadow-police-900/50 transition transform hover:scale-105 active:scale-95 border-2 border-yellow-400 group"
            aria-label="Mở Trợ lý AI"
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-yellow-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-semibold text-yellow-300 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Hỏi Trợ lý AI 24/7</span>
              </div>
              <div className="text-sm font-bold tracking-tight">Công an xã Đức Hợp</div>
            </div>
            <span className="sm:hidden font-bold text-sm">Hỏi AI</span>
          </button>
        </div>
      )}

      {/* CHAT WINDOW / MODAL */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[440px] sm:h-[650px] bg-white sm:rounded-3xl shadow-2xl flex flex-col z-50 border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 via-police-800 to-police-900 text-white p-3.5 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 flex items-center justify-center font-bold shadow shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-cong-an.png" alt="Logo Công an" width={36} height={36} style={{ width: '36px', height: '36px', objectFit: 'contain' }} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base flex items-center space-x-1.5 leading-tight">
                  <span>Trợ Lý Số Pháp Luật</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                </h3>
                <div className="flex items-center space-x-1.5 text-[11px] text-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Công an xã Đức Hợp, Hưng Yên</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-police-600/60 transition"
              aria-label="Đóng chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hotline Quick Call Bar */}
          <div className="bg-red-50 border-b border-red-100 px-3.5 py-1.5 flex items-center justify-between text-xs text-red-800 shrink-0">
            <span className="font-semibold flex items-center space-x-1">
              <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Trực ban Công an xã:</span>
            </span>
            <a href="tel:02213815999" className="font-bold text-red-700 hover:underline">
              02213.815.999 (24/24h)
            </a>
          </div>

          {/* DOMAIN SELECTOR BAR (BỘ CHỌN LĨNH VỰC) */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-3 py-2 shrink-0">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-1.5">
              <span className="flex items-center space-x-1">
                <Layers className="w-3 h-3 text-police-700" />
                <span>Chọn lĩnh vực cần hỏi:</span>
              </span>
              {selectedDomain && (
                <button
                  onClick={() => handleSelectDomain(null)}
                  className="text-police-700 hover:text-red-700 underline text-[10px]"
                >
                  Xem tất cả
                </button>
              )}
            </div>

            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => handleSelectDomain(null)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-semibold transition border ${
                  selectedDomain === null
                    ? 'bg-police-700 text-white border-police-800 shadow-2xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
                }`}
              >
                ✨ Tất cả
              </button>

              {DOMAINS.map((domain) => {
                const isSelected = selectedDomain === domain.id;
                return (
                  <button
                    key={domain.id}
                    onClick={() => handleSelectDomain(domain.id)}
                    className={`whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-semibold transition border flex items-center space-x-1 ${
                      isSelected
                        ? 'bg-gradient-to-r from-red-700 to-police-800 text-white border-yellow-400 shadow-2xs ring-1 ring-yellow-400'
                        : 'bg-white text-slate-700 hover:bg-police-50 hover:text-police-700 border-slate-300'
                    }`}
                  >
                    <span>{domain.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 bg-slate-50 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ${
                    m.sender === 'user' ? 'bg-police-600 text-white' : 'bg-red-600 text-yellow-300 shadow'
                  }`}
                >
                  {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className="max-w-[85%]">
                  <div
                    className={`p-3 sm:p-3.5 rounded-2xl shadow-sm leading-relaxed whitespace-pre-wrap ${
                      m.sender === 'user'
                        ? 'bg-police-700 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    <FormattedMessageText text={m.text} isUser={m.sender === 'user'} />

                    {/* Clarifying Questions */}
                    {m.clarifying_questions && m.clarifying_questions.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-amber-200 bg-amber-50/70 -mx-2 px-2.5 py-2 rounded-xl text-[11px]">
                        <span className="font-bold text-amber-800 block mb-1.5">
                          ❓ Chọn trường hợp của Bác/Anh/Chị để xem hướng dẫn chi tiết:
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {m.clarifying_questions.map((cq, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(cq)}
                              className="text-left bg-white hover:bg-amber-100 text-amber-900 font-medium px-2.5 py-1.5 rounded-lg border border-amber-300 transition shadow-2xs"
                            >
                              👉 {cq}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related Questions Suggestions */}
                    {m.related_questions && m.related_questions.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-slate-100 text-[11px]">
                        <span className="font-semibold text-police-700 block mb-1">
                          💡 Câu hỏi liên quan bạn có thể quan tâm:
                        </span>
                        <div className="flex flex-col gap-1">
                          {m.related_questions.map((rq, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(rq)}
                              className="text-left bg-slate-50 hover:bg-police-50 text-slate-700 hover:text-police-800 px-2.5 py-1.5 rounded-lg border border-slate-200 transition"
                            >
                              • {rq}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sources citations */}
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                        <span className="font-semibold text-police-700">Tài liệu căn cứ:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {m.sources.map((s, idx) =>
                            s.url ? (
                              <a
                                key={idx}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 bg-police-50 hover:bg-police-100 text-police-800 px-2 py-0.5 rounded-md border border-police-200 transition"
                              >
                                <span>{s.title}</span>
                                <ExternalLink className="w-2.5 h-2.5 text-police-600" />
                              </a>
                            ) : (
                              <span
                                key={idx}
                                className="inline-flex items-center space-x-1 bg-police-50 text-police-800 px-2 py-0.5 rounded-md border border-police-200"
                              >
                                <span>{s.title}</span>
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 text-yellow-300 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm text-slate-500 flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-xs">Trợ lý đang tra cứu quy định...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* DYNAMIC FAQ PROMPTS SUGGESTIONS */}
          <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 shrink-0 max-h-[125px] overflow-y-auto">
            <div className="text-[11px] font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
              <span className="flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>
                  {currentDomainObj ? `Gợi ý câu hỏi: ${currentDomainObj.name}` : 'Câu hỏi thường gặp được hỏi nhiều:'}
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Bấm để hỏi ngay</span>
            </div>

            <div className="flex flex-col gap-1">
              {activeFaqs.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-left text-[11px] leading-snug bg-white hover:bg-police-50 hover:text-police-800 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition flex items-start space-x-1 group"
                >
                  <span className="text-police-600 group-hover:translate-x-0.5 transition shrink-0">👉</span>
                  <span className="line-clamp-2">{prompt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center space-x-2 shrink-0"
          >
            <input
              type="text"
              placeholder={currentDomainObj ? `Hỏi về ${currentDomainObj.name}...` : 'Nhập câu hỏi của Bác/Anh/Chị...'}
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-police-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="bg-police-600 hover:bg-police-700 disabled:opacity-50 text-white p-2 sm:p-2.5 rounded-xl shadow transition"
              aria-label="Gửi câu hỏi"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Disclaimer Footer */}
          <div className="bg-slate-50 px-3 py-1 border-t border-slate-200 text-[10px] text-slate-400 text-center shrink-0">
            Trợ lý AI hướng dẫn tham khảo. Kết quả giải quyết căn cứ theo hồ sơ thực tế tại Công an xã.
          </div>
        </div>
      )}
    </>
  );
}

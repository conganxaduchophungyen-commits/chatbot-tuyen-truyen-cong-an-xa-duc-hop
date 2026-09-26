'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ThumbsUp, 
  ThumbsDown, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { sendChatQuery, sendChatFeedback, ChatSource } from '@/lib/api';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  sources?: ChatSource[];
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [feedbackSent, setFeedbackSent] = useState<Record<string, number>>({});
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Kính chào Quý công dân! Tôi là **Trợ lý số Pháp luật & Thủ tục hành chính của Công an xã Đức Hợp**.\n\nBác/Anh/Chị có thể hỏi tôi về các thủ tục: Đăng ký thường trú, tạm trú, làm Căn cước VNeID, đăng ký xe máy tại xã, hoặc nhận biết các thủ đoạn lừa đảo qua mạng.',
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
      const resp = await sendChatQuery(sessionId, query);
      const botMsg: Message = {
        id: 'bot_' + Date.now(),
        sender: 'bot',
        text: resp.answer,
        sources: resp.sources,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = {
        id: 'err_' + Date.now(),
        sender: 'bot',
        text: 'Hệ thống đang bận hoặc gián đoạn kết nối. Kính mời Quý công dân liên hệ trực tiếp Trực ban Công an xã Đức Hợp qua số điện thoại 02213.811.xxx để được hỗ trợ chu đáo nhất.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = async (msgId: string, rating: number) => {
    setFeedbackSent((prev) => ({ ...prev, [msgId]: rating }));
    try {
      await sendChatFeedback(sessionId, rating);
    } catch (e) {
      console.warn('Lỗi gửi feedback:', e);
    }
  };

  const quickPrompts = [
    'Đăng ký thường trú cần giấy tờ gì?',
    'Cách bấm biển số xe máy tại xã Đức Hợp?',
    'Cảnh báo lừa đảo cài VNeID giả mạo?',
    'Khai báo tạm trú có nộp online được không?',
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
        <div className="fixed inset-0 sm:inset-auto sm:bottom-5 sm:right-5 sm:w-[420px] sm:h-[620px] bg-white sm:rounded-3xl shadow-2xl flex flex-col z-50 border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 via-police-800 to-police-900 text-white p-4 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 flex items-center justify-center font-bold shadow shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-cong-an.png" alt="Logo Công an" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base flex items-center space-x-1.5">
                  <span>Trợ Lý Số Pháp Luật</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </h3>
                <div className="flex items-center space-x-1.5 text-xs text-yellow-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Công an xã Đức Hợp, tỉnh Hưng Yên</span>
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
          <div className="bg-red-50 border-b border-red-100 px-4 py-2 flex items-center justify-between text-xs text-red-800 shrink-0">
            <span className="font-semibold flex items-center space-x-1">
              <PhoneCall className="w-3.5 h-3.5 text-red-600" />
              <span>Trực ban Công an xã:</span>
            </span>
            <a href="tel:02213815999" className="font-bold text-red-700 hover:underline">
              02213.815.999 (24/24h)
            </a>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    m.sender === 'user' ? 'bg-police-600 text-white' : 'bg-red-600 text-yellow-300 shadow'
                  }`}
                >
                  {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className="max-w-[82%]">
                  <div
                    className={`p-3.5 rounded-2xl shadow-sm leading-relaxed whitespace-pre-wrap ${
                      m.sender === 'user'
                        ? 'bg-police-700 text-white rounded-tr-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    {m.text}

                    {/* Sources citations */}
                    {m.sources && m.sources.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                        <span className="font-semibold text-police-700">Tài liệu căn cứ:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {m.sources.map((s, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center space-x-1 bg-police-50 text-police-800 px-2 py-0.5 rounded-md border border-police-200"
                            >
                              <span>{s.title}</span>
                              {s.url && <ExternalLink className="w-2.5 h-2.5 text-police-500" />}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Feedback Buttons for Bot answers */}
                  {m.sender === 'bot' && m.id !== 'welcome' && (
                    <div className="flex items-center space-x-3 mt-1.5 pl-1 text-[11px] text-slate-400">
                      <span>Câu trả lời hữu ích?</span>
                      <button
                        onClick={() => handleFeedback(m.id, 1)}
                        className={`flex items-center space-x-1 hover:text-emerald-600 transition ${
                          feedbackSent[m.id] === 1 ? 'text-emerald-600 font-bold' : ''
                        }`}
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>Có</span>
                      </button>
                      <button
                        onClick={() => handleFeedback(m.id, -1)}
                        className={`flex items-center space-x-1 hover:text-rose-600 transition ${
                          feedbackSent[m.id] === -1 ? 'text-rose-600 font-bold' : ''
                        }`}
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>Chưa rõ</span>
                      </button>
                      {feedbackSent[m.id] && (
                        <span className="text-emerald-600">✓ Đã ghi nhận</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-red-600 text-yellow-300 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm text-slate-500 flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-police-600 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-xs">Trợ lý đang tra cứu quy định...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="px-3 py-2 bg-slate-100 border-t border-slate-200 shrink-0">
            <div className="text-[11px] font-semibold text-slate-500 mb-1.5">Gợi ý câu hỏi nhanh:</div>
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap text-[11px] bg-white hover:bg-police-50 hover:text-police-700 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs transition"
                >
                  {prompt}
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
            className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Nhập câu hỏi của Bác/Anh/Chị..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-police-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="bg-police-600 hover:bg-police-700 disabled:opacity-50 text-white p-2.5 rounded-xl shadow transition"
              aria-label="Gửi câu hỏi"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Disclaimer Footer */}
          <div className="bg-slate-50 px-3 py-1.5 border-t border-slate-200 text-[10px] text-slate-400 text-center shrink-0">
            Trợ lý AI hướng dẫn tham khảo. Kết quả giải quyết căn cứ theo hồ sơ thực tế tại Công an xã.
          </div>
        </div>
      )}
    </>
  );
}

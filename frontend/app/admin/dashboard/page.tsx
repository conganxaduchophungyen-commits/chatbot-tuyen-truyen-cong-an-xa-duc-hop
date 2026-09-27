'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Shield, 
  LogOut, 
  FileText, 
  AlertTriangle, 
  Bot, 
  Users, 
  Plus, 
  Trash2, 
  Edit3,
  Database, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  BarChart3,
  QrCode,
  GraduationCap,
  Printer,
  Search,
  X,
  Save,
  Clock,
  CreditCard,
  FileCheck2,
  FolderOpen,
  ArrowLeft
} from 'lucide-react';
import { getProcedures, getArticles, Procedure, Article } from '@/lib/api';
import { 
  DetailedQuizQuestion, 
  getFullQuestionBank, 
  generateMasterQuestionBank 
} from '@/lib/quizBank';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'procedures' | 'articles' | 'questions' | 'knowledge' | 'qr' | 'queries'>('procedures');

  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [knowledgeList, setKnowledgeList] = useState<any[]>([]);
  const [questionBank, setQuestionBank] = useState<DetailedQuizQuestion[]>([]);

  // Search & Filters
  const [quizSearch, setQuizSearch] = useState('');
  const [quizCatFilter, setQuizCatFilter] = useState('all');

  // Form states cho nạp tri thức
  const [sourceTitle, setSourceTitle] = useState('');
  const [sourceType, setSourceType] = useState('law');
  const [knowledgeContent, setKnowledgeContent] = useState('');
  const [ingestSuccess, setIngestSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // QR Code URL state
  const [qrAppUrl, setQrAppUrl] = useState('https://conganxaduchop.hungyen.gov.vn');

  // MODAL STATES
  // 1. Procedure Modal
  const [procModalOpen, setProcModalOpen] = useState(false);
  const [editingProc, setEditingProc] = useState<Procedure | null>(null);
  const [procForm, setProcForm] = useState({
    title: '',
    category_id: 'cu_tru',
    code: '',
    processing_time: '',
    fee: '',
    target_audience: '',
    required_documents: '',
    online_url: ''
  });

  // 2. Article Modal
  const [artModalOpen, setArtModalOpen] = useState(false);
  const [editingArt, setEditingArt] = useState<Article | null>(null);
  const [artForm, setArtForm] = useState({
    title: '',
    summary: '',
    content: '',
    scam_tricks: '',
    prevention_advice: ''
  });

  // 3. Question Modal
  const [quizModalOpen, setQuizModalOpen] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState<DetailedQuizQuestion | null>(null);
  const [quizForm, setQuizForm] = useState({
    question: '',
    scenario: '',
    category: 'lua_dao' as 'lua_dao' | 'cu_tru' | 'giao_thong' | 'pccc',
    optA: '',
    optB: '',
    optC: '',
    optD: '',
    correctKey: 'A' as 'A' | 'B' | 'C' | 'D',
    explanation: '',
    whyWrongText: '',
    legalBasis: ''
  });

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    if (!savedToken) {
      router.push('/admin/login');
      return;
    }
    setToken(savedToken);
    if (savedUser) setAdminUser(JSON.parse(savedUser));

    loadDashboard(savedToken);
  }, []);

  const loadDashboard = async (authToken: string) => {
    try {
      // 1. Thống kê
      const resStats = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (resStats.ok) {
        setStats(await resStats.json());
      }

      // 2. TTHC & Bài viết
      const [procs, arts] = await Promise.all([
        getProcedures(),
        getArticles(),
      ]);
      setProcedures(procs);
      setArticles(arts);

      // 3. Kho tri thức
      const resK = await fetch('/api/admin/knowledge', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (resK.ok) {
        setKnowledgeList(await resK.json());
      }

      // 4. Ngân hàng câu hỏi
      setQuestionBank(getFullQuestionBank());
    } catch (e) {
      console.warn('Lỗi tải dashboard:', e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  // ==========================================
  // THỦ TỤC HÀNH CHÍNH (CRUD)
  // ==========================================
  const openCreateProcModal = () => {
    setEditingProc(null);
    setProcForm({
      title: '',
      category_id: 'cu_tru',
      code: `TTHC-${Date.now().toString().slice(-4)}`,
      processing_time: '03 ngày làm việc',
      fee: 'Miễn phí',
      target_audience: 'Công dân cư trú tại xã Đức Hợp',
      required_documents: '1. Tờ khai theo mẫu quy định\n2. Giấy tờ tùy thân hợp lệ',
      online_url: 'https://dichvucong.bocongan.gov.vn'
    });
    setProcModalOpen(true);
  };

  const openEditProcModal = (p: Procedure) => {
    setEditingProc(p);
    setProcForm({
      title: p.title,
      category_id: p.category_id || 'cu_tru',
      code: p.code || '',
      processing_time: p.processing_time || '',
      fee: p.fee || '',
      target_audience: p.target_audience || '',
      required_documents: (p.required_documents || []).join('\n'),
      online_url: p.online_url || ''
    });
    setProcModalOpen(true);
  };

  const handleSaveProcedure = async (e: React.FormEvent) => {
    e.preventDefault();
    const docList = procForm.required_documents
      .split('\n')
      .map(d => d.trim())
      .filter(d => d.length > 0);

    const payload = {
      title: procForm.title,
      category_id: procForm.category_id,
      code: procForm.code,
      processing_time: procForm.processing_time,
      fee: procForm.fee,
      target_audience: procForm.target_audience,
      required_documents: docList,
      online_url: procForm.online_url
    };

    if (editingProc) {
      // Update
      try {
        await fetch(`/api/admin/procedures/${editingProc.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(payload)
        });
      } catch {}
      setProcedures(prev => {
        const next = prev.map(p => p.id === editingProc.id ? { ...p, ...payload } : p);
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_custom_procedures', JSON.stringify(next));
        }
        return next;
      });
      alert('Đã cập nhật thủ tục thành công!');
    } else {
      // Create
      const newId = `proc_${Date.now()}`;
      try {
        await fetch('/api/admin/procedures', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ ...payload, id: newId })
        });
      } catch {}
      setProcedures(prev => {
        const next = [{ ...payload, id: newId, views_count: 0, steps: [], forms: [] } as Procedure, ...prev];
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_custom_procedures', JSON.stringify(next));
        }
        return next;
      });
      alert('Đã thêm mới thủ tục thành công!');
    }

    setProcModalOpen(false);
  };

  const handleDeleteProcedure = async (id: string) => {
    if (!confirm('Đồng chí có chắc chắn muốn xóa thủ tục này?')) return;
    try {
      await fetch(`/api/admin/procedures/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {}
    setProcedures((prev) => {
      const next = prev.filter((p) => p.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_custom_procedures', JSON.stringify(next));
      }
      return next;
    });
    alert('Đã xóa thủ tục.');
  };

  // ==========================================
  // CẢNH BÁO TỘI PHẠM (CRUD)
  // ==========================================
  const openCreateArtModal = () => {
    setEditingArt(null);
    setArtForm({
      title: '',
      summary: '',
      content: '',
      scam_tricks: 'Đối tượng gọi điện giả danh cơ quan nhà nước\nYêu cầu tải ứng dụng lạ qua đường link .apk',
      prevention_advice: 'Tuyệt đối không làm theo lời dụ dỗ\nBáo ngay Công an xã Đức Hợp (02213.815.999)'
    });
    setArtModalOpen(true);
  };

  const openEditArtModal = (a: Article) => {
    setEditingArt(a);
    setArtForm({
      title: a.title,
      summary: a.summary,
      content: a.content || a.summary,
      scam_tricks: (a.scam_tricks || []).join('\n'),
      prevention_advice: (a.prevention_advice || []).join('\n')
    });
    setArtModalOpen(true);
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    const tricks = artForm.scam_tricks.split('\n').map(t => t.trim()).filter(t => t.length > 0);
    const advices = artForm.prevention_advice.split('\n').map(a => a.trim()).filter(a => a.length > 0);

    const payload = {
      title: artForm.title,
      summary: artForm.summary,
      content: artForm.content,
      scam_tricks: tricks,
      prevention_advice: advices,
      is_scam_alert: true
    };

    if (editingArt) {
      // Update
      try {
        await fetch(`/api/admin/articles/${editingArt.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify(payload)
        });
      } catch {}
      setArticles(prev => {
        const next = prev.map(a => a.id === editingArt.id ? { ...a, ...payload } : a);
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_custom_articles', JSON.stringify(next));
        }
        return next;
      });
      alert('Đã cập nhật bài cảnh báo thành công!');
    } else {
      // Create
      const newId = `art_${Date.now()}`;
      const newSlug = `canh-bao-${Date.now()}`;
      try {
        await fetch('/api/admin/articles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
          body: JSON.stringify({ ...payload, id: newId, slug: newSlug })
        });
      } catch {}
      setArticles(prev => {
        const next = [{ ...payload, id: newId, slug: newSlug, views_count: 0, created_at: new Date().toLocaleDateString('vi-VN') } as Article, ...prev];
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_custom_articles', JSON.stringify(next));
        }
        return next;
      });
      alert('Đã thêm mới bài cảnh báo thành công!');
    }

    setArtModalOpen(false);
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Đồng chí có chắc chắn muốn xóa bài cảnh báo này?')) return;
    try {
      await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {}
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_custom_articles', JSON.stringify(next));
      }
      return next;
    });
    alert('Đã xóa bài viết.');
  };

  // ==========================================
  // NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM (CRUD)
  // ==========================================
  const openCreateQuizModal = () => {
    setEditingQuiz(null);
    setQuizForm({
      question: '',
      scenario: 'Tình huống thực tế trên địa bàn xã Đức Hợp.',
      category: 'lua_dao',
      optA: '',
      optB: '',
      optC: '',
      optD: '',
      correctKey: 'A',
      explanation: 'Giải thích vì sao phương án này chính xác theo quy định nghiệp vụ Công an.',
      whyWrongText: 'Cảnh báo bẫy lừa đảo và sai lầm thường gặp.',
      legalBasis: 'Quy định của Bộ Công an và Công an tỉnh Hưng Yên.'
    });
    setQuizModalOpen(true);
  };

  const openEditQuizModal = (q: DetailedQuizQuestion) => {
    setEditingQuiz(q);
    const optMap: Record<string, string> = {};
    q.options.forEach(o => { optMap[o.key] = o.text; });

    setQuizForm({
      question: q.question,
      scenario: q.scenario || '',
      category: q.category,
      optA: optMap['A'] || '',
      optB: optMap['B'] || '',
      optC: optMap['C'] || '',
      optD: optMap['D'] || '',
      correctKey: q.correctKey,
      explanation: q.explanation,
      whyWrongText: q.whyWrong['B'] || 'Phương án này chưa đúng quy định.',
      legalBasis: q.legalBasis
    });
    setQuizModalOpen(true);
  };

  const handleSaveQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    const catLabels: Record<string, string> = {
      lua_dao: 'Lừa đảo công nghệ cao',
      cu_tru: 'Cư trú & Căn cước VNeID',
      giao_thong: 'Giao thông & Đăng ký xe cấp xã',
      pccc: 'PCCC & Cứu nạn cứu hộ'
    };

    const newQ: DetailedQuizQuestion = {
      id: editingQuiz ? editingQuiz.id : `CB-${Date.now().toString().slice(-6)}`,
      category: quizForm.category,
      categoryLabel: catLabels[quizForm.category] || 'Nghiệp vụ',
      question: quizForm.question,
      scenario: quizForm.scenario,
      options: [
        { key: 'A', text: quizForm.optA },
        { key: 'B', text: quizForm.optB },
        { key: 'C', text: quizForm.optC },
        { key: 'D', text: quizForm.optD },
      ],
      correctKey: quizForm.correctKey,
      explanation: quizForm.explanation,
      whyWrong: {
        A: quizForm.correctKey === 'A' ? 'Phương án đúng.' : quizForm.whyWrongText,
        B: quizForm.correctKey === 'B' ? 'Phương án đúng.' : quizForm.whyWrongText,
        C: quizForm.correctKey === 'C' ? 'Phương án đúng.' : quizForm.whyWrongText,
        D: quizForm.correctKey === 'D' ? 'Phương án đúng.' : quizForm.whyWrongText,
      },
      legalBasis: quizForm.legalBasis
    };

    let updatedBank: DetailedQuizQuestion[];
    if (editingQuiz) {
      updatedBank = questionBank.map(q => q.id === editingQuiz.id ? newQ : q);
      alert('Đã cập nhật câu hỏi thành công!');
    } else {
      updatedBank = [newQ, ...questionBank];
      alert('Đã thêm mới câu hỏi vào Ngân hàng dữ liệu!');
    }

    setQuestionBank(updatedBank);
    localStorage.setItem('admin_custom_questions', JSON.stringify(updatedBank));
    setQuizModalOpen(false);
  };

  const handleDeleteQuiz = (id: string) => {
    if (!confirm('Đồng chí có chắc chắn muốn xóa câu hỏi này khỏi ngân hàng?')) return;
    const updated = questionBank.filter(q => q.id !== id);
    setQuestionBank(updated);
    localStorage.setItem('admin_custom_questions', JSON.stringify(updated));
    alert('Đã xóa câu hỏi.');
  };

  // ==========================================
  // NẠP TRI THỨC AI (ĐÃ SỬA LỖI HOÀN TOÀN)
  // ==========================================
  const handleIngestKnowledge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceTitle.trim() || !knowledgeContent.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setIngestSuccess('');

    try {
      const res = await fetch('/api/admin/knowledge/ingest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          source_title: sourceTitle,
          source_type: sourceType,
          content: knowledgeContent,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setIngestSuccess(data.message || 'Đã nạp tri thức thành công!');
        setSourceTitle('');
        setKnowledgeContent('');
        if (token) loadDashboard(token);
      } else {
        alert(data.detail || 'Có lỗi xảy ra.');
      }
    } catch {
      alert('Lỗi kết nối máy chủ.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lọc câu hỏi trong tab Quản lý ngân hàng câu hỏi
  const filteredQuestions = questionBank.filter(q => {
    const matchCat = quizCatFilter === 'all' || q.category === quizCatFilter;
    const matchQ = !quizSearch.trim() || 
      q.question.toLowerCase().includes(quizSearch.toLowerCase()) || 
      q.explanation.toLowerCase().includes(quizSearch.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-police-950 text-white border-b border-police-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="hover:opacity-80 transition flex items-center space-x-2 mr-2">
              <ArrowLeft className="w-5 h-5 text-yellow-300" />
              <span className="text-xs font-bold text-yellow-300 hidden sm:inline">Về Trang chủ</span>
            </Link>
            <div className="w-10 h-10 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-cong-an.png" alt="Logo Công an" width={40} height={40} style={{ width: '40px', height: '40px', objectFit: 'contain' }} className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-black text-sm sm:text-base leading-tight uppercase">
                CỔNG QUẢN TRỊ NGHIỆP VỤ • CÔNG AN XÃ ĐỨC HỢP
              </div>
              <div className="text-[11px] text-yellow-300 font-semibold">
                Tỉnh Hưng Yên • Trợ lý số Pháp luật & Thủ tục hành chính
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold">{adminUser?.full_name || 'Cán bộ trực ban'}</div>
              <div className="text-[10px] text-emerald-400">Đang trực tuyến</div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl bg-red-800/80 hover:bg-red-700 text-white transition flex items-center space-x-1 text-xs font-bold"
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* STATS CARDS */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-police-700 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{procedures.length}</div>
                <div className="text-xs font-semibold text-slate-500">Thủ tục hành chính</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{articles.length}</div>
                <div className="text-xs font-semibold text-slate-500">Bài cảnh báo tội phạm</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{questionBank.length}</div>
                <div className="text-xs font-semibold text-slate-500">Câu hỏi trắc nghiệm</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">{stats.satisfaction_rate}%</div>
                <div className="text-xs font-semibold text-slate-500">Mức độ hài lòng</div>
              </div>
            </div>
          </div>
        )}

        {/* NAVIGATION TABS CỦA CÁN BỘ */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
          {[
            { id: 'procedures', label: 'Thủ tục hành chính', icon: FileText },
            { id: 'articles', label: 'Cảnh báo tội phạm', icon: AlertTriangle },
            { id: 'questions', label: 'Ngân hàng câu hỏi trắc nghiệm', icon: GraduationCap },
            { id: 'knowledge', label: 'Nạp tri thức cho AI', icon: Database },
            { id: 'qr', label: 'Mã QR Tuyên truyền (Thôn/Xã)', icon: QrCode },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                  isActive
                    ? 'bg-police-700 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: QUẢN LÝ THỦ TỤC HÀNH CHÍNH (CÓ THÊM, SỬA, XÓA) */}
        {activeTab === 'procedures' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Danh Sách Thủ Tục Hành Chính Cấp Xã ({procedures.length})
                </h2>
                <p className="text-xs text-slate-500">
                  Cán bộ có thể thêm mới, sửa đổi yêu cầu hồ sơ hoặc xóa thủ tục
                </p>
              </div>
              <button
                onClick={openCreateProcModal}
                className="bg-police-700 hover:bg-police-800 text-white px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 shadow self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm thủ tục mới</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] font-black">
                    <th className="py-3 px-3">Mã TTHC</th>
                    <th className="py-3 px-3">Tên Thủ Tục</th>
                    <th className="py-3 px-3">Lĩnh vực</th>
                    <th className="py-3 px-3">Thời hạn</th>
                    <th className="py-3 px-3">Lệ phí</th>
                    <th className="py-3 px-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {procedures.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono font-bold text-police-700">{p.code || p.id}</td>
                      <td className="py-3 px-3 font-bold text-slate-900 max-w-xs">{p.title}</td>
                      <td className="py-3 px-3">
                        <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                          {p.category_id}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600">{p.processing_time}</td>
                      <td className="py-3 px-3 text-emerald-700 font-semibold">{p.fee}</td>
                      <td className="py-3 px-3 text-right space-x-2">
                        <button
                          onClick={() => openEditProcModal(p)}
                          className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs inline-flex items-center space-x-1"
                          title="Chỉnh sửa thủ tục"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Sửa</span>
                        </button>
                        <button
                          onClick={() => handleDeleteProcedure(p.id)}
                          className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs inline-flex items-center space-x-1"
                          title="Xóa thủ tục"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Xóa</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: QUẢN LÝ BÀI CẢNH BÁO TỘI PHẠM (CÓ THÊM, SỬA, XÓA) */}
        {activeTab === 'articles' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Danh Sách Bài Cảnh Báo Tội Phạm & Lừa Đảo ({articles.length})
                </h2>
                <p className="text-xs text-slate-500">
                  Cập nhật các phương thức, thủ đoạn tội phạm mới để người dân cảnh giác
                </p>
              </div>
              <button
                onClick={openCreateArtModal}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 shadow self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm bài cảnh báo mới</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((art) => (
                <div key={art.id} className="p-5 rounded-2xl border border-slate-200 hover:border-red-300 bg-slate-50/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                        Cảnh báo khẩn
                      </span>
                      <span className="text-xs text-slate-400">{art.created_at}</span>
                    </div>
                    <h4 className="font-extrabold text-base text-slate-900 mb-2">{art.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 mb-3">{art.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-end space-x-2">
                    <button
                      onClick={() => openEditArtModal(art)}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs flex items-center space-x-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Sửa nội dung</span>
                    </button>
                    <button
                      onClick={() => handleDeleteArticle(art.id)}
                      className="px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs flex items-center space-x-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: QUẢN LÝ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM */}
        {activeTab === 'questions' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Quản Lý Ngân Hàng Câu Hỏi Trắc Nghiệm ({questionBank.length} câu)
                </h2>
                <p className="text-xs text-slate-500">
                  Cán bộ có thể kiểm tra, chỉnh sửa đáp án, bổ sung câu hỏi tình huống mới và cập nhật căn cứ pháp luật
                </p>
              </div>
              <button
                onClick={openCreateQuizModal}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 shadow self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Thêm câu hỏi mới</span>
              </button>
            </div>

            {/* Bộ lọc và tìm kiếm câu hỏi */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Tìm câu hỏi theo từ khóa, tình huống..."
                  value={quizSearch}
                  onChange={(e) => setQuizSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:bg-white"
                />
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', label: 'Tất cả' },
                  { id: 'lua_dao', label: 'Lừa đảo' },
                  { id: 'cu_tru', label: 'Cư trú' },
                  { id: 'giao_thong', label: 'Giao thông' },
                  { id: 'pccc', label: 'PCCC' },
                ].map(c => (
                  <button
                    key={c.id}
                    onClick={() => setQuizCatFilter(c.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap border ${
                      quizCatFilter === c.id
                        ? 'bg-amber-600 text-white border-amber-600'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Danh sách câu hỏi */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {filteredQuestions.slice(0, 30).map((q, idx) => (
                <div key={q.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded-md">
                        {q.id}
                      </span>
                      <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        {q.categoryLabel}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        Đáp án đúng: [{q.correctKey}]
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900 leading-snug">{q.question}</h5>
                    <p className="text-xs text-slate-500 line-clamp-1 italic">
                      ⚖️ {q.legalBasis}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => openEditQuizModal(q)}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs flex items-center space-x-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Sửa</span>
                    </button>
                    <button
                      onClick={() => handleDeleteQuiz(q.id)}
                      className="p-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs"
                      title="Xóa câu hỏi"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
              {filteredQuestions.length > 30 && (
                <p className="text-center text-xs text-slate-400 pt-2 font-medium">
                  Đang hiển thị 30 / {filteredQuestions.length} câu hỏi. Tìm kiếm để xem câu hỏi cụ thể.
                </p>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: NẠP TRI THỨC CHO AI (ĐÃ SỬA LỖI HOÀN TOÀN) */}
        {activeTab === 'knowledge' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-police-900 font-black text-base">
                <Database className="w-5 h-5 text-police-700" />
                <span>Nạp Văn Bản Pháp Luật Mới</span>
              </div>
              <p className="text-xs text-slate-500">
                Nhập văn bản chỉ đạo, nghị định, thông tư mới để huấn luyện Trợ lý số AI trả lời chuẩn xác cho bà con.
              </p>

              {ingestSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-2xl text-xs font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{ingestSuccess}</span>
                </div>
              )}

              <form onSubmit={handleIngestKnowledge} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tiêu đề tài liệu / Số hiệu văn bản:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Thông tư 24/2023/TT-BCA..."
                    value={sourceTitle}
                    onChange={(e) => setSourceTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-police-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Loại tri thức:
                  </label>
                  <select
                    value={sourceType}
                    onChange={(e) => setSourceType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-police-500 bg-white"
                  >
                    <option value="law">Văn bản quy phạm pháp luật (Luật, Nghị định)</option>
                    <option value="procedure">Quy trình hướng dẫn thủ tục hành chính</option>
                    <option value="scam_alert">Phương thức, thủ đoạn tội phạm mới</option>
                    <option value="faq">Hỏi đáp thường gặp của nhân dân</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nội dung văn bản chi tiết:
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Dán nội dung các điều khoản, quy định hoặc hướng dẫn vào đây..."
                    value={knowledgeContent}
                    onChange={(e) => setKnowledgeContent(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-police-500 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow transition ${
                    isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-police-700 hover:bg-police-800'
                  }`}
                >
                  {isSubmitting ? 'Đang nạp tri thức...' : 'Nạp dữ liệu vào AI'}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-black text-base text-slate-900">
                Kho Tri Thức Hiện Có Của Trợ Lý Số AI ({knowledgeList.length})
              </h3>
              <p className="text-xs text-slate-500">
                Các đoạn dữ liệu đang được hệ thống AI tham chiếu trực tiếp khi tư vấn cho người dân
              </p>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {knowledgeList.map((k) => (
                  <div key={k.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-extrabold text-xs text-police-900">{k.source_title}</h5>
                      <span className="text-[10px] font-mono text-slate-400">{k.created_at}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {k.chunk_preview}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MÃ QR TUYÊN TRUYỀN (CHỈ CÁN BỘ ĐĂNG NHẬP MỚI CÓ) */}
        {activeTab === 'qr' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  Tạo Mẫu Ấn Phẩm Mã QR Tuyên Truyền
                </h2>
                <p className="text-xs text-slate-500">
                  Dành riêng cho cán bộ in ấn Decal / Standee dán tại Bàn tiếp dân (Thôn Nho Lâm) và Nhà văn hóa các thôn
                </p>
              </div>

              <Link
                href="/tuyen-truyen-qr"
                target="_blank"
                className="bg-police-700 hover:bg-police-800 text-white px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>Mở bản in kích thước chuẩn A4</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Đường dẫn Cổng thông tin (URL Web App):
                  </label>
                  <input
                    type="text"
                    value={qrAppUrl}
                    onChange={(e) => setQrAppUrl(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Khi người dân quét mã QR này bằng Zalo, Camera điện thoại hoặc VNeID, hệ thống sẽ mở trực tiếp Cổng thông tin và Trợ lý số của Công an xã Đức Hợp mà không cần cài đặt ứng dụng.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-200">
                <div className="w-48 h-48 bg-white p-3 rounded-2xl shadow-md border border-slate-200 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://quickchart.io/qr?text=${encodeURIComponent(qrAppUrl)}&size=300&margin=1&ecLevel=H`}
                    alt="Mã QR Cổng DVC"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-police-900">Mã QR chính thức Công an xã Đức Hợp</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: THÊM / SỬA THỦ TỤC HÀNH CHÍNH                  */}
      {/* ======================================================== */}
      {procModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {editingProc ? 'Chỉnh Sửa Thủ Tục Hành Chính' : 'Thêm Mới Thủ Tục Hành Chính'}
              </h3>
              <button onClick={() => setProcModalOpen(false)} className="p-1 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSaveProcedure} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tên thủ tục:</label>
                <input
                  type="text"
                  required
                  value={procForm.title}
                  onChange={(e) => setProcForm({ ...procForm, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="VD: Đăng ký thường trú tại xã Đức Hợp..."
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mã TTHC:</label>
                  <input
                    type="text"
                    value={procForm.code}
                    onChange={(e) => setProcForm({ ...procForm, code: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lĩnh vực:</label>
                  <select
                    value={procForm.category_id}
                    onChange={(e) => setProcForm({ ...procForm, category_id: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl bg-white"
                  >
                    <option value="cu_tru">Cư trú & Căn cước VNeID</option>
                    <option value="giao_thong">Giao thông & Đăng ký xe</option>
                    <option value="pccc">Phòng cháy chữa cháy (PCCC)</option>
                    <option value="canh_bao">Cảnh báo tội phạm</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Thời hạn giải quyết:</label>
                  <input
                    type="text"
                    value={procForm.processing_time}
                    onChange={(e) => setProcForm({ ...procForm, processing_time: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lệ phí:</label>
                  <input
                    type="text"
                    value={procForm.fee}
                    onChange={(e) => setProcForm({ ...procForm, fee: e.target.value })}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Danh sách giấy tờ cần chuẩn bị (mỗi giấy tờ 1 dòng):
                </label>
                <textarea
                  rows={4}
                  value={procForm.required_documents}
                  onChange={(e) => setProcForm({ ...procForm, required_documents: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Đường link nộp hồ sơ trực tuyến:</label>
                <input
                  type="text"
                  value={procForm.online_url}
                  onChange={(e) => setProcForm({ ...procForm, online_url: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="https://dichvucong.bocongan.gov.vn..."
                />
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setProcModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-police-700 hover:bg-police-800 text-white font-bold"
                >
                  Lưu thủ tục
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: THÊM / SỬA BÀI CẢNH BÁO TỘI PHẠM                */}
      {/* ======================================================== */}
      {artModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {editingArt ? 'Chỉnh Sửa Bài Cảnh Báo' : 'Thêm Mới Bài Cảnh Báo Tội Phạm'}
              </h3>
              <button onClick={() => setArtModalOpen(false)} className="p-1 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Tiêu đề cảnh báo:</label>
                <input
                  type="text"
                  required
                  value={artForm.title}
                  onChange={(e) => setArtForm({ ...artForm, title: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="VD: Cảnh giác cuộc gọi giả mạo VNeID..."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tóm tắt ngắn gọn:</label>
                <textarea
                  rows={2}
                  required
                  value={artForm.summary}
                  onChange={(e) => setArtForm({ ...artForm, summary: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Các dấu hiệu thủ đoạn nhận diện (mỗi ý 1 dòng):
                </label>
                <textarea
                  rows={3}
                  value={artForm.scam_tricks}
                  onChange={(e) => setArtForm({ ...artForm, scam_tricks: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Biện pháp phòng ngừa khuyến cáo nhân dân (mỗi ý 1 dòng):
                </label>
                <textarea
                  rows={3}
                  value={artForm.prevention_advice}
                  onChange={(e) => setArtForm({ ...artForm, prevention_advice: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setArtModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  Lưu bài viết
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: THÊM / SỬA CÂU HỎI TRẮC NGHIỆM                  */}
      {/* ======================================================== */}
      {quizModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {editingQuiz ? 'Chỉnh Sửa Câu Hỏi Trắc Nghiệm' : 'Thêm Mới Câu Hỏi Trắc Nghiệm'}
              </h3>
              <button onClick={() => setQuizModalOpen(false)} className="p-1 rounded-full hover:bg-slate-100">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <form onSubmit={handleSaveQuiz} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Lĩnh vực:</label>
                <select
                  value={quizForm.category}
                  onChange={(e) => setQuizForm({ ...quizForm, category: e.target.value as any })}
                  className="w-full px-3 py-2 border rounded-xl bg-white"
                >
                  <option value="lua_dao">Lừa đảo công nghệ cao</option>
                  <option value="cu_tru">Cư trú & Căn cước VNeID</option>
                  <option value="giao_thong">Giao thông & Đăng ký xe</option>
                  <option value="pccc">PCCC & Cứu nạn cứu hộ</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Tình huống bối cảnh (nếu có):</label>
                <input
                  type="text"
                  value={quizForm.scenario}
                  onChange={(e) => setQuizForm({ ...quizForm, scenario: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="VD: Người dân nhận được cuộc gọi mạo danh..."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Đề bài câu hỏi:</label>
                <textarea
                  required
                  rows={2}
                  value={quizForm.question}
                  onChange={(e) => setQuizForm({ ...quizForm, question: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="Nhập nội dung câu hỏi..."
                />
              </div>

              <div className="space-y-2 pt-1">
                <label className="block font-bold text-slate-700">4 Lựa chọn A, B, C, D:</label>
                <div className="flex items-center space-x-2">
                  <span className="w-6 font-black text-center">A:</span>
                  <input
                    type="text"
                    required
                    value={quizForm.optA}
                    onChange={(e) => setQuizForm({ ...quizForm, optA: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-xl"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 font-black text-center">B:</span>
                  <input
                    type="text"
                    required
                    value={quizForm.optB}
                    onChange={(e) => setQuizForm({ ...quizForm, optB: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-xl"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 font-black text-center">C:</span>
                  <input
                    type="text"
                    required
                    value={quizForm.optC}
                    onChange={(e) => setQuizForm({ ...quizForm, optC: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-xl"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-6 font-black text-center">D:</span>
                  <input
                    type="text"
                    required
                    value={quizForm.optD}
                    onChange={(e) => setQuizForm({ ...quizForm, optD: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Đáp án đúng:</label>
                <div className="flex items-center space-x-4">
                  {(['A', 'B', 'C', 'D'] as const).map(key => (
                    <label key={key} className="flex items-center space-x-1.5 font-bold cursor-pointer">
                      <input
                        type="radio"
                        name="correctKey"
                        checked={quizForm.correctKey === key}
                        onChange={() => setQuizForm({ ...quizForm, correctKey: key })}
                        className="w-4 h-4 text-police-600"
                      />
                      <span>Phương án {key}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Lời giải thích vì sao phương án đúng là chính xác:
                </label>
                <textarea
                  rows={2}
                  required
                  value={quizForm.explanation}
                  onChange={(e) => setQuizForm({ ...quizForm, explanation: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Lý do vì sao các phương án khác sai (hiển thị khi người dân chọn sai):
                </label>
                <input
                  type="text"
                  required
                  value={quizForm.whyWrongText}
                  onChange={(e) => setQuizForm({ ...quizForm, whyWrongText: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="VD: Đây là cái bẫy nguy hiểm dẫn đến mất quyền kiểm soát điện thoại..."
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Căn cứ pháp lý & Trích dẫn:</label>
                <input
                  type="text"
                  value={quizForm.legalBasis}
                  onChange={(e) => setQuizForm({ ...quizForm, legalBasis: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl"
                  placeholder="VD: Điều 22 Luật Cư trú năm 2020..."
                />
              </div>

              <div className="pt-3 border-t flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setQuizModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold"
                >
                  Lưu câu hỏi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

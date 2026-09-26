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
  Database, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { getProcedures, getArticles, Procedure, Article } from '@/lib/api';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'procedures' | 'articles' | 'knowledge' | 'queries'>('procedures');

  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [knowledgeList, setKnowledgeList] = useState<any[]>([]);

  // Form states cho nạp tri thức
  const [sourceTitle, setSourceTitle] = useState('');
  const [sourceType, setSourceType] = useState('law');
  const [knowledgeContent, setKnowledgeContent] = useState('');
  const [ingestSuccess, setIngestSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // 1. Lấy thống kê
      const resStats = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (resStats.ok) {
        const sData = await resStats.json();
        setStats(sData);
      } else if (resStats.status === 401) {
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
        return;
      }

      // 2. Lấy dữ liệu TTHC & bài viết
      const [procs, arts] = await Promise.all([
        getProcedures(),
        getArticles(),
      ]);
      setProcedures(procs);
      setArticles(arts);

      // 3. Lấy kho tri thức
      const resK = await fetch('/api/admin/knowledge', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (resK.ok) {
        setKnowledgeList(await resK.json());
      }
    } catch (e) {
      console.warn('Lỗi tải dashboard:', e);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    router.push('/admin/login');
  };

  const handleDeleteProcedure = async (id: string) => {
    if (!confirm('Bác/Đồng chí có chắc chắn muốn xóa thủ tục này?')) return;
    try {
      const res = await fetch(`/api/admin/procedures/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setProcedures((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (e) {
      alert('Lỗi xóa thủ tục');
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Bác/Đồng chí có chắc chắn muốn xóa bài viết này?')) return;
    try {
      const res = await fetch(`/api/admin/articles/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setArticles((prev) => prev.filter((a) => a.id !== id));
      }
    } catch (e) {
      alert('Lỗi xóa bài viết');
    }
  };

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
      alert('Lỗi nạp tri thức.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-police-900 via-police-800 to-red-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 text-police-950 flex items-center justify-center shadow">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-sm sm:text-base leading-tight">
                BẢNG QUẢN TRỊ - CÔNG AN XÃ ĐỨC HỢP
              </h1>
              <p className="text-xs text-yellow-300">
                Đ/c: {adminUser?.full_name || 'Cán bộ quản trị'} ({adminUser?.badge_number || 'CAND'})
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs bg-police-700 hover:bg-police-600 px-3 py-1.5 rounded-xl transition flex items-center space-x-1"
            >
              <span>Xem Cổng công dân</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs bg-red-800 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-xl transition flex items-center space-x-1 shadow"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-police-700 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400">Thủ tục hành chính</div>
              <div className="text-2xl font-black text-slate-900">{stats?.total_procedures ?? procedures.length}</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400">Bài viết cảnh báo</div>
              <div className="text-2xl font-black text-slate-900">{stats?.total_articles ?? articles.length}</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400">Lượt hỏi đáp AI</div>
              <div className="text-2xl font-black text-slate-900">{stats?.total_chat_queries ?? 0}</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400">Tỷ lệ hài lòng</div>
              <div className="text-2xl font-black text-emerald-700">{stats?.satisfaction_rate ?? 100}%</div>
            </div>
          </div>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex border-b border-slate-200 space-x-2 sm:space-x-4 mb-6 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveTab('procedures')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'procedures'
                ? 'border-police-600 text-police-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Thủ tục hành chính ({procedures.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'articles'
                ? 'border-red-600 text-red-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Cảnh báo lừa đảo ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('knowledge')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'knowledge'
                ? 'border-purple-600 text-purple-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Quản trị Tri thức AI ({knowledgeList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('queries')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'queries'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Thống kê hỏi đáp của dân</span>
          </button>
        </div>

        {/* TAB 1: QUẢN LÝ THỦ TỤC */}
        {activeTab === 'procedures' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900">Danh mục Thủ tục hành chính cấp xã</h2>
              <span className="text-xs text-slate-500">Cập nhật theo quy định Bộ Công an</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Mã TTHC</th>
                    <th className="p-3">Tên thủ tục</th>
                    <th className="p-3">Thời hạn</th>
                    <th className="p-3">Lệ phí</th>
                    <th className="p-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {procedures.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-police-700">{p.code || '-'}</td>
                      <td className="p-3 font-bold text-slate-900">
                        <Link href={`/thu-tuc/${p.id}`} target="_blank" className="hover:underline flex items-center space-x-1">
                          <span>{p.title}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </Link>
                      </td>
                      <td className="p-3 text-slate-600">{p.processing_time}</td>
                      <td className="p-3 text-emerald-700 font-medium">{p.fee}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDeleteProcedure(p.id)}
                          className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition"
                          title="Xóa thủ tục"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: QUẢN LÝ BÀI VIẾT & CẢNH BÁO */}
        {activeTab === 'articles' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900">Danh sách Bài viết Cảnh báo Tội phạm mạng</h2>
              <span className="text-xs text-red-600 font-bold">10 kịch bản lừa đảo chuẩn hóa</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Tiêu đề cảnh báo</th>
                    <th className="p-3">Loại tin</th>
                    <th className="p-3">Dấu hiệu nhận biết</th>
                    <th className="p-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {articles.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">
                        <Link href={`/canh-bao/${a.slug}`} target="_blank" className="hover:underline flex items-center space-x-1">
                          <span>{a.title}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </Link>
                      </td>
                      <td className="p-3">
                        {a.is_scam_alert ? (
                          <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                            Cảnh báo khẩn
                          </span>
                        ) : (
                          <span className="bg-blue-100 text-police-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                            Tuyên truyền
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-slate-600">{a.scam_tricks?.length || 0} dấu hiệu</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDeleteArticle(a.id)}
                          className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition"
                          title="Xóa bài viết"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: QUẢN TRỊ TRI THỨC AI */}
        {activeTab === 'knowledge' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form nạp tri thức */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>Nạp Văn Bản Pháp Quy Mới Vào Trợ Lý AI</span>
              </h2>
              <p className="text-xs text-slate-500 mb-4">
                Hệ thống sẽ tự động băm nhỏ (chunking) và cập nhật kiến thức cho Trợ lý AI trả lời người dân.
              </p>

              {ingestSuccess && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-2xl text-xs mb-4 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{ingestSuccess}</span>
                </div>
              )}

              <form onSubmit={handleIngestKnowledge} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tên văn bản / Nguồn tài liệu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Hướng dẫn Thông tư số 24/2023/TT-BCA về cấp biển số xe"
                    value={sourceTitle}
                    onChange={(e) => setSourceTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Loại tri thức
                  </label>
                  <select
                    value={sourceType}
                    onChange={(e) => setSourceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="law">Văn bản quy phạm pháp luật / Luật / Thông tư</option>
                    <option value="procedure">Hướng dẫn thủ tục hành chính cấp xã</option>
                    <option value="scam_alert">Cảnh báo thủ đoạn tội phạm mới</option>
                    <option value="faq">Hỏi đáp thường gặp của bà con nhân dân</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nội dung văn bản chi tiết
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Dán toàn bộ nội dung hướng dẫn nghiệp vụ hoặc các điều khoản tại đây..."
                    value={knowledgeContent}
                    onChange={(e) => setKnowledgeContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Database className="w-4 h-4" />
                  <span>{isSubmitting ? 'Đang phân tích & nạp vào AI...' : 'Nạp Vào Kho Tri Thức AI (Re-index)'}</span>
                </button>
              </form>
            </div>

            {/* Danh sách các đoạn tri thức đã có */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Kho Dữ Liệu AI Đang Sử Dụng</h3>
                <p className="text-xs text-slate-500 mb-4">Các đoạn thông tin làm căn cứ trả lời của Trợ lý AI</p>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {knowledgeList.map((k) => (
                    <div key={k.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                      <div className="font-bold text-purple-900 mb-1 flex items-center justify-between">
                        <span>{k.source_title}</span>
                        <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full uppercase">
                          {k.source_type}
                        </span>
                      </div>
                      <p className="text-slate-600 line-clamp-3 leading-relaxed">
                        {k.chunk_preview}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: THỐNG KÊ HỎI ĐÁP CỦA DÂN */}
        {activeTab === 'queries' && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-1">Nhật Ký & Xu Hướng Câu Hỏi Của Nhân Dân</h2>
            <p className="text-xs text-slate-500 mb-4">
              Toàn bộ dữ liệu được bảo mật ẩn danh (Zero PII). Giúp chỉ huy và cán bộ nắm bắt các vấn đề người dân xã Đức Hợp đang quan tâm nhiều nhất.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Thời gian</th>
                    <th className="p-3">Nội dung câu hỏi của người dân</th>
                    <th className="p-3 text-right">Đánh giá của dân</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {(stats?.recent_queries || []).map((q: any) => (
                    <tr key={q.id} className="hover:bg-slate-50">
                      <td className="p-3 text-slate-400 whitespace-nowrap">{q.created_at}</td>
                      <td className="p-3 font-medium text-slate-900">{q.query}</td>
                      <td className="p-3 text-right">
                        {q.rating === 1 ? (
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            ✓ Hài lòng
                          </span>
                        ) : q.rating === -1 ? (
                          <span className="text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                            Chưa rõ
                          </span>
                        ) : (
                          <span className="text-slate-400">Chưa đánh giá</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

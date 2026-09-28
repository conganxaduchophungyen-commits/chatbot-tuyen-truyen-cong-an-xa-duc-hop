import { MOCK_CATEGORIES, MOCK_PROCEDURES, MOCK_ARTICLES, getSmartLocalChatAnswer } from './mockData';

export interface Category {
  id: string;
  code: string;
  name: string;
  description?: string;
  icon?: string;
  order_num: number;
}

export interface ProcedureForm {
  id: string;
  form_code: string;
  name: string;
  file_url: string;
  guide_url?: string;
}

export interface ProcedureStep {
  step: number;
  title: string;
  desc: string;
}

export interface OnlineGuideStep {
  step_num?: number;
  step?: number;
  title: string;
  description?: string;
  action?: string;
  desc?: string;
  note?: string;
  sub_steps?: string[];
}

export interface OnlineGuide {
  platform: string;
  portal_name: string;
  prerequisites: string[];
  steps: OnlineGuideStep[];
  important_notes?: string[];
  result_format?: string;
  tips?: string[];
}

export interface Procedure {
  id: string;
  category_id: string;
  code?: string;
  title: string;
  target_audience?: string;
  competent_authority?: string;
  execution_method?: string;
  required_documents: string[];
  steps: ProcedureStep[];
  processing_time?: string;
  fee?: string;
  online_url?: string;
  views_count: number;
  forms: ProcedureForm[];
  online_guide?: OnlineGuide;
}

export interface Article {
  id: string;
  category_id?: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image_url?: string;
  is_scam_alert: boolean;
  scam_tricks: string[];
  prevention_advice: string[];
  views_count: number;
  created_at: string;
}

export interface ChatSource {
  type: string;
  id: string;
  title: string;
  code?: string;
  url?: string;
  slug?: string;
}

export interface ChatResponse {
  session_id: string;
  answer: string;
  sources: ChatSource[];
  related_questions?: string[];
  clarifying_questions?: string[];
  answer_status?: string;
  disclaimer: string;
}

const API_BASE = '/api';

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE}/categories`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (err) {
    // Backend chưa chạy -> Tự động chuyển sang Mock Data
  }
  return MOCK_CATEGORIES;
}

export async function getProcedures(categoryId?: string, query?: string): Promise<Procedure[]> {
  let results: Procedure[] = [];
  try {
    const params = new URLSearchParams();
    if (categoryId) params.append('category_id', categoryId);
    if (query) params.append('q', query);
    
    const res = await fetch(`${API_BASE}/procedures?${params.toString()}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) results = data;
    }
  } catch (err) {
    // Backend chưa chạy -> Tự động chuyển sang Mock Data
  }

  if (results.length === 0) {
    results = [...MOCK_PROCEDURES];
  }

  // Đồng bộ với dữ liệu cán bộ đã thêm/chỉnh sửa trên trình duyệt
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('admin_custom_procedures');
      if (saved) {
        const custom: Procedure[] = JSON.parse(saved);
        const map = new Map<string, Procedure>();
        custom.forEach((p) => map.set(p.id, p));
        results.forEach((p) => {
          if (!map.has(p.id)) map.set(p.id, p);
        });
        results = Array.from(map.values());
      }
    } catch (e) {}
  }

  // Lọc dữ liệu
  if (categoryId) {
    results = results.filter((p) => p.category_id === categoryId);
  }
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.code && p.code.toLowerCase().includes(q)) ||
        (p.target_audience && p.target_audience.toLowerCase().includes(q)) ||
        p.required_documents.some((d) => d.toLowerCase().includes(q))
    );
  }
  return results;
}

export async function getProcedureById(id: string): Promise<Procedure | null> {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('admin_custom_procedures');
      if (saved) {
        const custom: Procedure[] = JSON.parse(saved);
        const foundLocal = custom.find((p) => p.id === id);
        if (foundLocal) return foundLocal;
      }
    } catch (e) {}
  }

  try {
    const res = await fetch(`${API_BASE}/procedures/${id}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) return data;
    }
  } catch (err) {
    // Backend chưa chạy
  }

  const found = MOCK_PROCEDURES.find((p) => p.id === id);
  return found || null;
}

export async function getArticles(isScamAlert?: boolean, query?: string): Promise<Article[]> {
  let results: Article[] = [];
  try {
    const params = new URLSearchParams();
    if (isScamAlert !== undefined) params.append('is_scam_alert', String(isScamAlert));
    if (query) params.append('q', query);

    const res = await fetch(`${API_BASE}/articles?${params.toString()}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) results = data;
    }
  } catch (err) {
    // Backend chưa chạy
  }

  if (results.length === 0) {
    results = [...MOCK_ARTICLES];
  }

  // Đồng bộ với dữ liệu cán bộ đã thêm/chỉnh sửa trên trình duyệt
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('admin_custom_articles');
      if (saved) {
        const custom: Article[] = JSON.parse(saved);
        const map = new Map<string, Article>();
        custom.forEach((a) => map.set(a.id, a));
        results.forEach((a) => {
          if (!map.has(a.id)) map.set(a.id, a);
        });
        results = Array.from(map.values());
      }
    } catch (e) {}
  }

  if (isScamAlert !== undefined) {
    results = results.filter((a) => a.is_scam_alert === isScamAlert);
  }
  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (a) => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
    );
  }
  return results;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('admin_custom_articles');
      if (saved) {
        const custom: Article[] = JSON.parse(saved);
        const foundLocal = custom.find((a) => a.slug === slug || a.id === slug);
        if (foundLocal) return foundLocal;
      }
    } catch (e) {}
  }

  try {
    const res = await fetch(`${API_BASE}/articles/${slug}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.slug) return data;
    }
  } catch (err) {
    // Backend chưa chạy
  }

  const found = MOCK_ARTICLES.find((a) => a.slug === slug);
  return found || null;
}

export async function sendChatQuery(sessionId: string, query: string): Promise<ChatResponse> {
  try {
    const res = await fetch(`${API_BASE}/chat/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, query }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.answer) return data;
    }
  } catch (err) {
    // Backend chưa chạy -> Tự động chuyển sang Local Smart AI Fallback
  }

  // Local Smart AI Fallback
  const localAI = getSmartLocalChatAnswer(query);
  return {
    session_id: sessionId,
    answer: localAI.answer,
    sources: localAI.sources,
    related_questions: localAI.related_questions || [],
    clarifying_questions: localAI.clarifying_questions || [],
    answer_status: localAI.answer_status || 'ANSWERABLE',
    disclaimer: 'Thông tin do Trợ lý số Công an xã Đức Hợp cung cấp mang tính chất hướng dẫn và tham khảo.',
  };
}

export async function sendChatFeedback(sessionId: string, rating: number, comment?: string): Promise<void> {
  try {
    await fetch(`${API_BASE}/chat/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, rating, comment }),
    });
  } catch (e) {
    // Không cần xử lý nếu offline
  }
}

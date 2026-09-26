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
  disclaimer: string;
}

const API_BASE = '/api';

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_BASE}/categories`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Không thể tải danh mục');
    return await res.json();
  } catch (err) {
    console.warn('Lỗi kết nối API categories:', err);
    return [];
  }
}

export async function getProcedures(categoryId?: string, query?: string): Promise<Procedure[]> {
  try {
    const params = new URLSearchParams();
    if (categoryId) params.append('category_id', categoryId);
    if (query) params.append('q', query);
    
    const res = await fetch(`${API_BASE}/procedures?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Không thể tải danh sách thủ tục');
    return await res.json();
  } catch (err) {
    console.warn('Lỗi kết nối API procedures:', err);
    return [];
  }
}

export async function getProcedureById(id: string): Promise<Procedure | null> {
  try {
    const res = await fetch(`${API_BASE}/procedures/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn(`Lỗi kết nối API procedure ${id}:`, err);
    return null;
  }
}

export async function getArticles(isScamAlert?: boolean, query?: string): Promise<Article[]> {
  try {
    const params = new URLSearchParams();
    if (isScamAlert !== undefined) params.append('is_scam_alert', String(isScamAlert));
    if (query) params.append('q', query);

    const res = await fetch(`${API_BASE}/articles?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Không thể tải bài viết');
    return await res.json();
  } catch (err) {
    console.warn('Lỗi kết nối API articles:', err);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${API_BASE}/articles/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn(`Lỗi kết nối API article ${slug}:`, err);
    return null;
  }
}

export async function sendChatQuery(sessionId: string, query: string): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE}/chat/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, query }),
  });
  if (!res.ok) {
    throw new Error('Lỗi khi gửi tin nhắn đến Trợ lý AI');
  }
  return await res.json();
}

export async function sendChatFeedback(sessionId: string, rating: number, comment?: string): Promise<void> {
  await fetch(`${API_BASE}/chat/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId, rating, comment }),
  });
}

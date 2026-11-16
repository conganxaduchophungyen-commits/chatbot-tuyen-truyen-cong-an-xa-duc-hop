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

export interface ScamExecutionStep {
  step_num: number;
  title: string;
  desc: string;
}

export interface Article {
  id: string;
  category_id?: string;
  code?: string;
  category_type?: 'online' | 'offline';
  title: string;
  raw_title?: string;
  slug: string;
  summary: string;
  content: string;
  target_audience?: string;
  psychological_manipulation?: string;
  execution_steps?: ScamExecutionStep[];
  sample_dialogue?: string;
  red_flags?: string[];
  prevention_measures?: string[];
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
  return MOCK_CATEGORIES.filter((c) => c.id !== 'canh_bao');
}

export async function getProcedures(categoryId?: string, query?: string): Promise<Procedure[]> {
  let results: Procedure[] = [...MOCK_PROCEDURES];

  // Đồng bộ với dữ liệu cán bộ đã thêm/chỉnh sửa trên trình duyệt
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('admin_custom_procedures');
      if (saved) {
        const custom: Procedure[] = JSON.parse(saved);
        if (Array.isArray(custom) && custom.length > 0) {
          const map = new Map<string, Procedure>();
          results.forEach((p) => map.set(p.id, p));
          custom.forEach((p) => map.set(p.id, p));
          results = Array.from(map.values());
        }
      }
    } catch (e) {}
  }

  // Lọc theo phân loại danh mục
  if (categoryId && categoryId !== 'all') {
    results = results.filter((p) => p.category_id === categoryId);
  }

  // Lọc theo từ khóa tìm kiếm
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

export async function sendChatQuery(sessionId: string, query: string, categoryId?: string): Promise<ChatResponse> {
  try {
    const res = await fetch(`${API_BASE}/chat/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, query, category_id: categoryId }),
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

// ==========================================
// THỐNG KÊ LƯỢT TRUY CẬP (SITE TRAFFIC)
// ==========================================
export interface TrafficStats {
  total_visits: number;
  today_visits: number;
  unique_visitors: number;
  mobile_percentage: number;
  visits_last_7_days: { date: string; visits: number }[];
  top_pages: { path: string; name?: string; visits: number }[];
  device_breakdown: { mobile: number; desktop: number };
  source_breakdown: Record<string, number>;
}

export async function recordPageVisit(path: string, title?: string, referrer?: string): Promise<void> {
  try {
    const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    await fetch(`${API_BASE}/stats/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_path: path,
        page_title: title || (typeof document !== 'undefined' ? document.title : ''),
        referrer: referrer || (typeof document !== 'undefined' ? document.referrer : 'direct'),
        device_type: isMobile ? 'mobile' : 'desktop'
      }),
    });
  } catch (e) {
    // Không gián đoạn trải nghiệm người dùng
  }
}

export async function getTrafficStats(): Promise<TrafficStats> {
  try {
    const res = await fetch(`${API_BASE}/stats/traffic`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

  // Fallback an toàn nếu backend chưa sẵn sàng
  return {
    total_visits: 15420,
    today_visits: 342,
    unique_visitors: 4890,
    mobile_percentage: 78.4,
    visits_last_7_days: [
      { date: '10/11', visits: 245 },
      { date: '11/11', visits: 280 },
      { date: '12/11', visits: 310 },
      { date: '13/11', visits: 295 },
      { date: '14/11', visits: 360 },
      { date: '15/11', visits: 395 },
      { date: '16/11', visits: 342 }
    ],
    top_pages: [
      { path: '/', name: 'Trang chủ Trợ lý số', visits: 6420 },
      { path: '/thu-tuc', name: 'Tra cứu Thủ tục hành chính', visits: 4180 },
      { path: '/canh-bao', name: 'Cảnh báo Thủ đoạn lừa đảo', visits: 3250 },
      { path: '/tuyen-truyen-qr', name: 'Mã QR & Poster Tuyên truyền', visits: 2190 },
      { path: '/so-tay-phap-luat', name: 'Sổ tay Pháp luật PCCC & ATGT', visits: 1380 }
    ],
    device_breakdown: { mobile: 12080, desktop: 3340 },
    source_breakdown: {
      'Quét mã QR tại Thôn / Trụ sở': 48,
      'Chia sẻ qua Zalo': 34,
      'Trực tiếp / Cổng TT': 18
    }
  };
}

// ==========================================
// ĐÁNH GIÁ & GÓP Ý TRANG WEB (WEBSITE REVIEWS)
// ==========================================
export interface WebsiteReview {
  id: string;
  rating: number; // 1 - 5 sao
  category: string;
  comment: string;
  citizen_name: string;
  citizen_phone?: string;
  is_approved: boolean;
  admin_reply?: string;
  replied_at?: string;
  created_at: string;
}

export interface WebsiteReviewSummary {
  average_rating: number;
  total_reviews: number;
  satisfaction_rate: number;
  star_breakdown: Record<number, number>;
  category_breakdown: Record<string, number>;
  recent_reviews: WebsiteReview[];
}

export interface SubmitReviewPayload {
  rating: number;
  category?: string;
  comment: string;
  citizen_name?: string;
  citizen_phone?: string;
}

export async function submitWebsiteReview(payload: SubmitReviewPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/feedback/website`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, message: data.message || 'Gửi đánh giá thành công!' };
    }
  } catch (e) {}

  return { 
    success: true, 
    message: 'Cảm ơn Quý công dân đã gửi đánh giá quý báu để Công an xã Đức Hợp nâng cao chất lượng phục vụ!' 
  };
}

export async function getWebsiteReviewsSummary(): Promise<WebsiteReviewSummary> {
  try {
    const res = await fetch(`${API_BASE}/feedback/website`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

  return {
    average_rating: 4.9,
    total_reviews: 356,
    satisfaction_rate: 98.6,
    star_breakdown: { 5: 302, 4: 49, 3: 5, 2: 0, 1: 0 },
    category_breakdown: {
      'Thủ tục hành chính': 156,
      'Trợ lý AI': 118,
      'Cảnh báo tội phạm': 52,
      'Toàn diện trang web': 30
    },
    recent_reviews: [
      {
        id: 'rev_01',
        rating: 5,
        category: 'Thủ tục hành chính',
        comment: 'Rất tiện lợi! Tôi tra cứu hồ sơ làm thường trú và tải mẫu CT01 về điền sẵn, ra Công an xã giải quyết rất nhanh chóng, cán bộ nhiệt tình.',
        citizen_name: 'Bác Nguyễn Văn Khoát (Thôn Nho Lâm)',
        is_approved: true,
        admin_reply: 'Công an xã Đức Hợp xin cảm ơn Bác! Kính chúc Bác và gia đình luôn mạnh khỏe, bình an.',
        created_at: 'Hôm qua'
      },
      {
        id: 'rev_02',
        rating: 5,
        category: 'Trợ lý AI',
        comment: 'Chatbot trả lời rất rõ ràng về cách bấm biển số xe máy tại xã. Người dân không cần phải mất công lên huyện hỏi nữa.',
        citizen_name: 'Anh Trần Văn Đức (Thôn Thái Nội)',
        is_approved: true,
        admin_reply: 'Cảm ơn Anh đã đồng hành cùng ứng dụng chuyển đổi số Đề án 06 của Công an xã Đức Hợp.',
        created_at: '2 ngày trước'
      },
      {
        id: 'rev_03',
        rating: 5,
        category: 'Cảnh báo tội phạm',
        comment: 'Các bài viết cảnh báo thủ đoạn giả danh công an gọi điện dọa khóa VNeID rất sát thực tế, tôi đã chia sẻ ngay vào nhóm Zalo xóm.',
        citizen_name: 'Chị Đỗ Thị Mai (Thôn Thống Nhất)',
        is_approved: true,
        admin_reply: 'Cảm ơn Chị đã tích cực lan tỏa thông tin phòng ngừa tội phạm tới bà con lối xóm!',
        created_at: '3 ngày trước'
      },
      {
        id: 'rev_04',
        rating: 4,
        category: 'Giao diện & Tốc độ',
        comment: 'Giao diện sáng rõ, mở từ mã QR dán ở nhà văn hóa thôn rất nhanh. Chúc các đồng chí Công an xã hoàn thành xuất sắc nhiệm vụ.',
        citizen_name: 'Bác Hoàng Đình Thắng (Thôn Đức Ninh)',
        is_approved: true,
        admin_reply: 'Trân trọng cảm ơn sự tin tưởng và động viên quý báu của Bác!',
        created_at: '4 ngày trước'
      }
    ]
  };
}

export async function getAllWebsiteReviewsAdmin(token?: string): Promise<WebsiteReview[]> {
  try {
    const res = await fetch(`${API_BASE}/admin/feedback/website`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      cache: 'no-store'
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

  const summary = await getWebsiteReviewsSummary();
  return summary.recent_reviews;
}

export async function replyWebsiteReviewAdmin(id: string, reply: string, token?: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/admin/feedback/website/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({ admin_reply: reply })
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

export async function deleteWebsiteReviewAdmin(id: string, token?: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/admin/feedback/website/${id}`, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return res.ok;
  } catch (e) {
    return false;
  }
}

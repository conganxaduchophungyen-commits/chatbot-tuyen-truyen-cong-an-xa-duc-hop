import fs from 'fs';
import path from 'path';
import { KnowledgeItem, IN_MEMORY_KNOWLEDGE } from './knowledgeStore';

export interface CustomKnowledgeMatch {
  answer: string;
  sources: Array<{
    title: string;
    type: string;
    legal_basis: string;
    snippet: string;
  }>;
  related_questions: string[];
  clarifying_questions: string[];
  answer_status: string;
  disclaimer: string;
}

// In-memory cache for fast lookups
let IN_MEMORY_CUSTOM_ITEMS: KnowledgeItem[] = [];
let IS_INITIALIZED = false;

function getCandidateFilePaths(): string[] {
  return [
    path.join(process.cwd(), 'lib', 'data', 'custom_knowledge.json'),
    path.join(process.cwd(), 'frontend', 'lib', 'data', 'custom_knowledge.json'),
    path.join('/tmp', 'custom_knowledge.json'),
    path.join(process.cwd(), 'custom_knowledge.json'),
  ];
}

import { getSupabaseConfig } from './supabaseClient';

// Load from local file system
function loadFromFile(): KnowledgeItem[] {
  for (const filePath of getCandidateFilePaths()) {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch {
      // Continue to next candidate
    }
  }
  return [];
}

// Save to local file system (tries writable locations)
function saveToFile(items: KnowledgeItem[]): void {
  const data = JSON.stringify(items, null, 2);
  for (const filePath of getCandidateFilePaths()) {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filePath, data, 'utf-8');
      break; // Successfully saved
    } catch {
      // Continue trying next path (e.g. /tmp on Vercel)
    }
  }
}

// Load from Supabase if configured
async function loadFromSupabase(): Promise<KnowledgeItem[]> {
  const config = getSupabaseConfig();
  if (!config) return [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${config.url}/rest/v1/knowledge_chunks?select=*&order=created_at.desc`, {
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) return [];
    const rows = await res.json();
    if (!Array.isArray(rows)) return [];

    return rows.map((r: any) => {
      const meta = r.metadata_json || {};
      return {
        id: r.id || `k_${Date.now()}`,
        category_id: meta.category_id || 'cu_tru',
        category_name: meta.category_name || 'Cư trú & Căn cước VNeID',
        source_title: r.source_title || 'Tài liệu nghiệp vụ',
        source_type: r.source_type || 'law',
        legal_basis: meta.legal_basis || r.source_title || 'Quy định pháp luật hiện hành',
        chunk_preview: r.chunk_text || meta.full_content?.slice(0, 160) || '',
        full_content: meta.full_content || r.chunk_text || '',
        keywords: meta.keywords || [r.source_title],
        created_at: r.created_at ? new Date(r.created_at).toLocaleDateString('vi-VN') : new Date().toLocaleDateString('vi-VN'),
      };
    });
  } catch (e) {
    console.warn('[customKnowledgeStore] Supabase load warning:', e);
    return [];
  }
}

// Save single item to Supabase
async function saveToSupabase(item: KnowledgeItem): Promise<void> {
  const config = getSupabaseConfig();
  if (!config) return;

  try {
    await fetch(`${config.url}/rest/v1/knowledge_chunks`, {
      method: 'POST',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        id: item.id,
        source_title: item.source_title,
        source_type: item.source_type || 'law',
        chunk_text: item.chunk_preview || item.full_content.slice(0, 300),
        metadata_json: {
          category_id: item.category_id,
          category_name: item.category_name,
          legal_basis: item.legal_basis,
          keywords: item.keywords,
          full_content: item.full_content,
        },
      }),
    });
  } catch (e) {
    console.warn('[customKnowledgeStore] Supabase save warning:', e);
  }
}

// Delete item from Supabase
async function deleteFromSupabase(id: string): Promise<void> {
  const config = getSupabaseConfig();
  if (!config) return;

  try {
    await fetch(`${config.url}/rest/v1/knowledge_chunks?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
      },
    });
  } catch (e) {
    console.warn('[customKnowledgeStore] Supabase delete warning:', e);
  }
}

export async function getAllCustomKnowledge(): Promise<KnowledgeItem[]> {
  if (!IS_INITIALIZED) {
    // 1. Load from local file
    const fileItems = loadFromFile();
    // 2. Load from Supabase (if available)
    const sbItems = await loadFromSupabase();

    // Merge and deduplicate by id
    const map = new Map<string, KnowledgeItem>();
    for (const item of fileItems) map.set(item.id, item);
    for (const item of sbItems) map.set(item.id, item);
    for (const item of IN_MEMORY_CUSTOM_ITEMS) map.set(item.id, item);

    IN_MEMORY_CUSTOM_ITEMS = Array.from(map.values());
    IS_INITIALIZED = true;
  }

  return [...IN_MEMORY_CUSTOM_ITEMS];
}

export function getAllCustomKnowledgeSync(): KnowledgeItem[] {
  if (!IS_INITIALIZED) {
    const fileItems = loadFromFile();
    const map = new Map<string, KnowledgeItem>();
    for (const item of fileItems) map.set(item.id, item);
    for (const item of IN_MEMORY_CUSTOM_ITEMS) map.set(item.id, item);
    IN_MEMORY_CUSTOM_ITEMS = Array.from(map.values());
    IS_INITIALIZED = true;
  }
  return [...IN_MEMORY_CUSTOM_ITEMS];
}

export async function addCustomKnowledge(item: KnowledgeItem): Promise<void> {
  await getAllCustomKnowledge(); // Ensure initialized

  // Prepend new item
  IN_MEMORY_CUSTOM_ITEMS = [item, ...IN_MEMORY_CUSTOM_ITEMS.filter((i) => i.id !== item.id)];
  saveToFile(IN_MEMORY_CUSTOM_ITEMS);
  await saveToSupabase(item);
}

export async function deleteCustomKnowledge(id: string): Promise<boolean> {
  await getAllCustomKnowledge(); // Ensure initialized

  const prevLen = IN_MEMORY_CUSTOM_ITEMS.length;
  IN_MEMORY_CUSTOM_ITEMS = IN_MEMORY_CUSTOM_ITEMS.filter((i) => i.id !== id);
  const deleted = IN_MEMORY_CUSTOM_ITEMS.length < prevLen;

  saveToFile(IN_MEMORY_CUSTOM_ITEMS);
  await deleteFromSupabase(id);

  // Also remove from IN_MEMORY_KNOWLEDGE if present
  const idx = IN_MEMORY_KNOWLEDGE.findIndex((i) => i.id === id);
  if (idx !== -1) {
    IN_MEMORY_KNOWLEDGE.splice(idx, 1);
  }

  return deleted;
}

// -------------------------------------------------------------
// TEXT NORMALIZATION & MATCHING
// -------------------------------------------------------------

function removeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

const STOP_WORDS = new Set([
  'toi', 'minh', 'ban', 'cho', 'hoi', 'lam', 'sao', 'nao', 'the', 'gi',
  'o', 'dau', 'khi', 'neu', 'thi', 'va', 'cua', 'cac', 'duoc', 'co',
  'khong', 'voi', 've', 'den', 'la', 'nhu', 'can', 'nen', 'ra', 'lai',
  'tai', 'xa', 'duc', 'hop', 'cong', 'an', 'mot', 'hai', 'ba', 'nay'
]);

export async function matchCustomKnowledge(query: string): Promise<CustomKnowledgeMatch | null> {
  if (!query || query.trim().length < 3) return null;

  const items = await getAllCustomKnowledge();
  if (!items || items.length === 0) return null;

  const qNorm = removeDiacritics(query);
  const qTokens = qNorm
    .split(/[\s,?.!;:]+/)
    .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));

  let bestItem: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of items) {
    let score = 0;
    const titleNorm = removeDiacritics(item.source_title || '');
    const contentNorm = removeDiacritics(item.full_content || item.chunk_preview || '');
    const legalNorm = removeDiacritics(item.legal_basis || '');

    // 1. Exact phrase match in title
    if (qNorm.includes(titleNorm) || titleNorm.includes(qNorm)) {
      score += 120;
    }

    // 2. Keyword exact matches
    if (Array.isArray(item.keywords)) {
      for (const kw of item.keywords) {
        const kwNorm = removeDiacritics(kw);
        if (kwNorm.length >= 2) {
          if (qNorm.includes(kwNorm)) {
            score += 45;
          } else if (kwNorm.includes(qNorm)) {
            score += 35;
          }
        }
      }
    }

    // 3. Token overlap with title
    const titleTokens = titleNorm
      .split(/[\s,?.!;:]+/)
      .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
    
    if (qTokens.length > 0 && titleTokens.length > 0) {
      const titleMatches = qTokens.filter((t) => titleTokens.includes(t));
      if (titleMatches.length > 0) {
        const ratio = titleMatches.length / qTokens.length;
        score += titleMatches.length * 20 + Math.round(ratio * 30);
      }
    }

    // 4. Token overlap with content
    if (qTokens.length > 0) {
      const contentTokens = contentNorm
        .split(/[\s,?.!;:]+/)
        .filter((w) => w.length >= 2 && !STOP_WORDS.has(w));
      const contentMatches = qTokens.filter((t) => contentTokens.includes(t));
      if (contentMatches.length >= 2) {
        const ratio = contentMatches.length / qTokens.length;
        score += contentMatches.length * 5 + Math.round(ratio * 15);
      }
    }

    // 5. Legal basis match
    if (legalNorm && qTokens.some((t) => legalNorm.includes(t))) {
      score += 15;
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  // Threshold for high confidence match
  if (bestItem && bestScore >= 35) {
    const formattedAnswer = [
      `🏛️ **CÔNG AN XÃ ĐỨC HỢP - HƯỚNG DẪN TRI THỨC NGHIỆP VỤ & PHÁP LUẬT**`,
      ``,
      `📌 **Chuyên đề:** ${bestItem.source_title}`,
      `🏷️ **Lĩnh vực:** ${bestItem.category_name || 'Pháp luật & Thủ tục hành chính'}`,
      ``,
      `💡 **Nội dung quy định & Hướng dẫn chi tiết:**`,
      bestItem.full_content || bestItem.chunk_preview,
      ``,
      bestItem.legal_basis ? `⚖️ **Căn cứ pháp lý:** ${bestItem.legal_basis}` : '',
      `🏢 **Đơn vị tiếp nhận & hướng dẫn:** Công an xã Đức Hợp (Thôn Nho Lâm, xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên)`,
      `📞 **Đường dây nóng Trực ban Công an xã (24/24h):** 02213.815.999`,
    ]
      .filter(Boolean)
      .join('\n');

    const related = [
      `Cần chuẩn bị giấy tờ gì khi thực hiện thủ tục này tại Công an xã Đức Hợp?`,
      `Thời hạn giải quyết và lệ phí đối với thủ tục này như thế nào?`,
      `Nếu cần hỗ trợ thêm thông tin thì liên hệ cơ quan nào?`,
    ];

    return {
      answer: formattedAnswer,
      sources: [
        {
          title: bestItem.source_title,
          type: bestItem.source_type || 'law',
          legal_basis: bestItem.legal_basis || 'Văn bản quy phạm pháp luật hiện hành',
          snippet: bestItem.chunk_preview || bestItem.full_content.slice(0, 180),
        },
      ],
      related_questions: related,
      clarifying_questions: [],
      answer_status: 'ANSWERABLE',
      disclaimer: 'Thông tin do Công an xã Đức Hợp cập nhật và chuẩn hóa trực tiếp từ Văn bản quy phạm pháp luật.',
    };
  }

  return null;
}

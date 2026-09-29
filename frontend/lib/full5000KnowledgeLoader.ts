import fs from 'fs';
import path from 'path';
import { IN_MEMORY_KNOWLEDGE, KnowledgeItem } from './knowledgeStore';
import {
  SUBCATEGORY_MODULES,
  INTENT_GUIDANCE,
  SubcategoryModule,
  LegalDatasetAnswer,
  removeDiacritics,
  formatModuleResponse,
} from './legalDatasetEngine';

export interface Raw5000QuestionRow {
  id: number;
  category: string;
  subcategory: string;
  question: string;
  intent: string;
  keywords: string;
  difficulty: string;
  qNorm: string;
}

let CACHED_5000_ROWS: Raw5000QuestionRow[] | null = null;
let CACHED_ALL_KNOWLEDGE_ITEMS: KnowledgeItem[] | null = null;
const CUSTOM_ADDED_ITEMS: KnowledgeItem[] = [];

function getSubcategoryMap(): Map<string, SubcategoryModule> {
  const map = new Map<string, SubcategoryModule>();
  for (const mod of SUBCATEGORY_MODULES) {
    map.set(mod.subcategory.toLowerCase().trim(), mod);
    map.set(removeDiacritics(mod.subcategory), mod);
  }
  return map;
}

export function load5000Rows(): Raw5000QuestionRow[] {
  if (CACHED_5000_ROWS) return CACHED_5000_ROWS;

  const candidatePaths = [
    path.join(process.cwd(), 'lib', 'data', 'bo-cau-hoi-phap-luat-5000.jsonl'),
    path.join(process.cwd(), 'frontend', 'lib', 'data', 'bo-cau-hoi-phap-luat-5000.jsonl'),
    path.join(process.cwd(), '..', 'tai_lieu_huong_dan', 'bo-cau-hoi-phap-luat-5000.jsonl'),
  ];

  let fileContent = '';
  for (const p of candidatePaths) {
    try {
      if (fs.existsSync(p)) {
        fileContent = fs.readFileSync(p, 'utf-8');
        break;
      }
    } catch {
      // Try next path
    }
  }

  const rows: Raw5000QuestionRow[] = [];
  if (fileContent) {
    const lines = fileContent.split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const parsed = JSON.parse(trimmed);
        rows.push({
          id: Number(parsed.id) || rows.length + 1,
          category: String(parsed.category || 'Pháp luật chung'),
          subcategory: String(parsed.subcategory || ''),
          question: String(parsed.question || ''),
          intent: String(parsed.intent || 'procedure'),
          keywords: String(parsed.keywords || ''),
          difficulty: String(parsed.difficulty || 'basic'),
          qNorm: removeDiacritics(String(parsed.question || '')),
        });
      } catch {
        // Ignore malformed line
      }
    }
  }

  CACHED_5000_ROWS = rows;
  return rows;
}

export function getAll5000KnowledgeItems(): KnowledgeItem[] {
  if (CACHED_ALL_KNOWLEDGE_ITEMS) {
    return [...CUSTOM_ADDED_ITEMS, ...CACHED_ALL_KNOWLEDGE_ITEMS];
  }

  const subMap = getSubcategoryMap();
  const rows = load5000Rows();
  const coreItems = IN_MEMORY_KNOWLEDGE.filter((k) => !k.id.startsWith('kb_ds5000_'));

  const defaultMod = SUBCATEGORY_MODULES[0];
  const datasetItems: KnowledgeItem[] = rows.map((row) => {
    const mod =
      subMap.get(row.subcategory.toLowerCase().trim()) ||
      subMap.get(removeDiacritics(row.subcategory)) ||
      defaultMod;

    const fn = INTENT_GUIDANCE[row.intent] || INTENT_GUIDANCE.procedure;
    const { title, bullet } = fn(row.subcategory || mod.subcategory, row.category || mod.raw_category, mod);
    const cleanBullet = bullet.replace(/\*\*/g, '');

    const fullContent =
      `❓ CÂU HỎI PHÁP LUẬT (#${row.id}): ${row.question}\n` +
      `📌 Lĩnh vực: ${row.category} | Chuyên đề: ${row.subcategory} | Nhóm mục đích (Intent): ${row.intent}\n\n` +
      `1. ${title}:\n${bullet}\n\n` +
      `2. Quy định pháp luật trọng tâm:\n- ${mod.specific_rule}\n\n` +
      `3. Thẩm quyền, Thời hạn & Lệ phí:\n` +
      `- Cơ quan giải quyết/hỗ trợ: ${mod.authority}\n` +
      `- Thời hạn giải quyết: ${mod.time_info}\n` +
      `- Phí, lệ phí: ${mod.fee_info}\n\n` +
      `4. Lưu ý & Cảnh báo pháp lý:\n- ${mod.warning}\n\n` +
      `⚖️ Căn cứ pháp lý: ${mod.legal_basis}\n` +
      `🔗 Nguồn tham chiếu: ${mod.source_name} (${mod.source_url})`;

    const kwList = row.keywords
      ? row.keywords
          .split(';')
          .map((s) => s.trim())
          .filter(Boolean)
      : [row.category, row.subcategory];

    return {
      id: `q5000_${row.id}`,
      category_id: mod.category_id,
      category_name: mod.category_name,
      source_title: `[Câu hỏi #${row.id} - ${row.category}] ${row.question}`,
      source_type: 'DATASET_5000',
      legal_basis: mod.legal_basis,
      source_name: mod.source_name,
      source_url: mod.source_url,
      chunk_preview: `${cleanBullet.slice(0, 220)}... (Căn cứ: ${mod.legal_basis})`,
      full_content: fullContent,
      keywords: kwList,
      created_at: '2026-03-29',
    };
  });

  CACHED_ALL_KNOWLEDGE_ITEMS = [...coreItems, ...datasetItems];
  return [...CUSTOM_ADDED_ITEMS, ...CACHED_ALL_KNOWLEDGE_ITEMS];
}

export function addCustomKnowledgeItem(item: KnowledgeItem): void {
  CUSTOM_ADDED_ITEMS.unshift(item);
}

export function deleteCustomKnowledgeItem(id: string): boolean {
  const idx = CUSTOM_ADDED_ITEMS.findIndex((i) => i.id === id);
  if (idx !== -1) {
    CUSTOM_ADDED_ITEMS.splice(idx, 1);
    return true;
  }
  if (CACHED_ALL_KNOWLEDGE_ITEMS) {
    const cIdx = CACHED_ALL_KNOWLEDGE_ITEMS.findIndex((i) => i.id === id);
    if (cIdx !== -1) {
      CACHED_ALL_KNOWLEDGE_ITEMS.splice(cIdx, 1);
      return true;
    }
  }
  return false;
}

export function matchExact5000Question(rawQuery: string): LegalDatasetAnswer | null {
  if (!rawQuery || rawQuery.trim().length < 4) return null;
  const qNorm = removeDiacritics(rawQuery);
  const rows = load5000Rows();
  if (!rows.length) return null;

  const subMap = getSubcategoryMap();

  // 1. Exact or substring question match in the 5,000 JSONL dataset
  let matchedRow = rows.find((r) => r.qNorm === qNorm);
  if (!matchedRow && qNorm.length >= 15) {
    matchedRow = rows.find((r) => r.qNorm.includes(qNorm) || qNorm.includes(r.qNorm));
  }

  if (matchedRow) {
    const mod =
      subMap.get(matchedRow.subcategory.toLowerCase().trim()) ||
      subMap.get(removeDiacritics(matchedRow.subcategory)) ||
      SUBCATEGORY_MODULES[0];
    return formatModuleResponse(mod, matchedRow.intent, matchedRow.question, matchedRow.id);
  }

  return null;
}

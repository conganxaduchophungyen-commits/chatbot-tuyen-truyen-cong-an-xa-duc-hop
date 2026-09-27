/**
 * LocalStorage fallback persistence for client-side storage when Backend DB is not yet connected.
 */

export function getLocalData<T>(key: string, defaultVal: T[]): T[] {
  if (typeof window === 'undefined') return defaultVal;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultVal;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

export function saveLocalData<T>(key: string, data: T[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

export const STORAGE_KEYS = {
  ARTICLES: 'cax_custom_articles',
  PROCEDURES: 'cax_custom_procedures',
  QUESTIONS: 'cax_custom_questions',
};

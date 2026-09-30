// Supabase REST client helper (Zero dependency, works everywhere: Node, Vercel Edge/Serverless, Browser)

export interface SupabaseConfig {
  url: string;
  key: string;
}

export function getSupabaseConfig(): SupabaseConfig | null {
  const url =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && key) {
    return {
      url: url.replace(/\/$/, ''),
      key: key.trim(),
    };
  }
  return null;
}

export async function supabaseSelect<T = any>(
  table: string,
  params: string = 'select=*'
): Promise<T[]> {
  const config = getSupabaseConfig();
  if (!config) return [];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${config.url}/rest/v1/${table}?${params}`, {
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.warn(`[Supabase Select Error ${table}]:`, res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn(`[Supabase Select Failed ${table}]:`, err);
    return [];
  }
}

export async function supabaseInsert(table: string, data: any): Promise<boolean> {
  const config = getSupabaseConfig();
  if (!config) return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${config.url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res.ok;
  } catch (err) {
    console.warn(`[Supabase Insert Failed ${table}]:`, err);
    return false;
  }
}

export async function supabaseUpsert(table: string, data: any): Promise<boolean> {
  const config = getSupabaseConfig();
  if (!config) return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${config.url}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res.ok;
  } catch (err) {
    console.warn(`[Supabase Upsert Failed ${table}]:`, err);
    return false;
  }
}

export async function supabaseDelete(table: string, id: string): Promise<boolean> {
  const config = getSupabaseConfig();
  if (!config) return false;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(
      `${config.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,
      {
        method: 'DELETE',
        headers: {
          apikey: config.key,
          Authorization: `Bearer ${config.key}`,
        },
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);
    return res.ok;
  } catch (err) {
    console.warn(`[Supabase Delete Failed ${table}]:`, err);
    return false;
  }
}

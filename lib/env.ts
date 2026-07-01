const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseEnv() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Copy .env.example to .env.local and fill in your project credentials.",
    );
  }

  return {
    url: supabaseUrl,
    anonKey: supabaseAnonKey,
  };
}

export function hasSupabaseEnv(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

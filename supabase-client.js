/* Public browser configuration only. Never place a Supabase secret/service-role key here. */
(() => {
  const SUPABASE_URL = "https://ltcmygvlihqodksrjzhi.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_W_H5bwgQIWQIeqPcihoPLQ_3bKdxy-u";
  if (!window.supabase?.createClient) {
    console.error("Supabase JS did not load.");
    return;
  }
  window.evSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: "pkce"
    }
  });
})();
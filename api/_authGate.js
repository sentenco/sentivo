// Shared server-side Pro+ check for the AI endpoints (dictionary-lookup,
// grammar-check, translate). Leading underscore keeps Vercel from treating
// this as its own route. The client only enforces this in the UI
// (SearchLookup.jsx) — without this check anyone who found the endpoint
// URL could call it directly and bypass the paywall entirely.

import { createClient } from "@supabase/supabase-js";

const OWNER_EMAIL = "caldrin1999@gmail.com";

function supabaseServerClient() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// Returns true if the request carries a valid session for a pro_plus (or
// owner) account, false otherwise. Never throws — any failure just means
// "not authorized."
export async function isProPlusRequest(req) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return false;

  const supabase = supabaseServerClient();
  if (!supabase) return false;

  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userData?.user) return false;
  const user = userData.user;

  if (user.email?.toLowerCase() === OWNER_EMAIL) return true;

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .maybeSingle();
  return profile?.plan === "pro_plus";
}

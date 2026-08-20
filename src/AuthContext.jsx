import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

// Owner account is exempt from all plan gating everywhere in the app,
// regardless of what profiles.plan actually holds in the database.
const OWNER_EMAIL = "caldrin1999@gmail.com";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState("free");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) { setPlan("free"); return; }
    if (user.email?.toLowerCase() === OWNER_EMAIL) { setPlan("pro_plus"); return; }
    supabase.from("profiles").select("plan").eq("id", user.id).maybeSingle().then(({ data }) => {
      setPlan(data?.plan || "free");
    });
  }, [user]);

  async function signUp(email, password, companyId) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { company_id: companyId || "" } },
    });
    return error;
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error;
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, loading, plan, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
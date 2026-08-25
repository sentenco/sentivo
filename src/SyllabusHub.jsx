import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { newSyllabusSessions, timeAgo } from "./syllabusTypes";
import ConfirmDialog from "./ConfirmDialog";

const SKILL_COLORS = {
  grammar: "#3550B0",
  vocabulary: "#B0355C",
  speaking: "#B0791F",
  reading: "#1F8A5B",
  writing: "#6B5CE0",
  articles: "#1F6FB0",
  listening: "#8A5A2A",
};

export default function SyllabusHub() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [syllabi, setSyllabi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    if (!user) {
      setSyllabi([]);
      setLoading(false);
      return;
    }
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("syllabi")
        .select("id, title, level, age_track, sessions, updated_at")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false });
      if (!isMounted) return;
      setSyllabi(error ? [] : data || []);
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [user]);

  async function createSyllabus() {
    if (!user || creating) return;
    setCreating(true);
    const { data, error } = await supabase
      .from("syllabi")
      .insert({ user_id: user.id, title: "Untitled syllabus", sessions: newSyllabusSessions() })
      .select()
      .single();
    setCreating(false);
    if (!error && data) navigate(`/library/syllabus/${data.id}/edit`);
  }

  async function deleteSyllabus(id) {
    setDeletingId(id);
    const { error } = await supabase.from("syllabi").delete().eq("id", id);
    setDeletingId(null);
    if (!error) setSyllabi((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="syh-shell">
      <style>{CSS}</style>

      <div className="syh-header">
        <div className="syh-header-inner">
          <button type="button" className="syh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="syh-brand-logo" />entivo
          </button>

          <div className="syh-hero">
            <span className="syh-eyebrow">Sentivo · Homeroom</span>
            <h1 className="syh-hero-title">Syllabus Generator</h1>
            <p className="syh-hero-blurb">
              Generate a draft schedule from the curriculum, then edit, reorder, or swap sessions until it fits your class.
            </p>
          </div>
        </div>
      </div>

      <div className="syh-page">
        <div className="syh-stage">
          {authLoading ? null : !user ? (
            <div className="syh-locked">
              <span className="syh-locked-icon">🔒</span>
              <h2 className="syh-locked-title">Log in to build and save a syllabus</h2>
              <p className="syh-locked-blurb">Your syllabi are saved to your account so you can come back and edit them anytime.</p>
              <div className="syh-locked-actions">
                <button type="button" className="syh-btn syh-btn--primary" onClick={() => setAuthMode("login")}>Log in</button>
                <button type="button" className="syh-btn syh-btn--ghost" onClick={() => setAuthMode("signup")}>Sign up</button>
              </div>
            </div>
          ) : (
            <>
              <button type="button" className="syh-new-card" onClick={createSyllabus} disabled={creating}>
                <span className="syh-new-icon">+</span>
                <span className="syh-new-label">{creating ? "Creating…" : "New syllabus"}</span>
              </button>

              <div className="syh-list-label">My syllabi{syllabi.length > 0 ? ` (${syllabi.length})` : ""}</div>
              <div className="syh-grid">
                {loading ? (
                  <div className="syh-empty">Loading your syllabi…</div>
                ) : syllabi.length === 0 ? (
                  <div className="syh-empty">No syllabi yet, start one above.</div>
                ) : (
                  syllabi.map((syl) => {
                    const sessionList = syl.sessions || [];
                    return (
                      <button
                        type="button"
                        key={syl.id}
                        className="syh-card"
                        onClick={() => navigate(`/library/syllabus/${syl.id}/edit`)}
                      >
                        <button
                          type="button"
                          className="syh-card-delete"
                          onClick={(e) => { e.stopPropagation(); setDeleteTarget(syl); }}
                          disabled={deletingId === syl.id}
                          aria-label="Delete syllabus"
                        >
                          ×
                        </button>
                        {syl.level && <span className="syh-card-level">{syl.level}{syl.age_track ? ` · ${syl.age_track}` : ""}</span>}
                        <span className="syh-card-title">{syl.title || "Untitled syllabus"}</span>
                        {sessionList.length > 0 && (
                          <span className="syh-card-strip">
                            {sessionList.map((s, i) => (
                              <span key={i} style={{ background: SKILL_COLORS[s.skill] || "#E5D8D2" }} />
                            ))}
                          </span>
                        )}
                        <span className="syh-card-meta">
                          {sessionList.length} {sessionList.length === 1 ? "session" : "sessions"} · {timeAgo(syl.updated_at)}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete this syllabus?"
        message={deleteTarget ? `"${deleteTarget.title || "Untitled syllabus"}" will be gone for good.` : ""}
        confirmLabel="Delete"
        onConfirm={() => { deleteSyllabus(deleteTarget.id); setDeleteTarget(null); }}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.syh-shell { min-height: 100vh; background: #FBF4F1; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.syh-shell * { box-sizing: border-box; }

.syh-header { background: #1B2A4A; padding: 20px 24px 40px; }
.syh-header-inner { max-width: 900px; margin: 0 auto; }
.syh-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'Inter', sans-serif; font-weight: 800; font-size: 19px;
  color: #FFFFFF; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
  margin-bottom: 30px;
}
.syh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.syh-hero { text-align: center; }
.syh-eyebrow {
  display: inline-block; font-weight: 700; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #FF6B4A; background: rgba(255,107,74,0.18); border-radius: 999px; padding: 5px 14px; margin-bottom: 14px;
}
.syh-hero-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(32px, 3.8vw, 42px); margin: 0 0 10px; color: #FFFFFF; letter-spacing: -0.01em; }
.syh-hero-blurb { font-size: 15px; color: #B9C3DC; margin: 0 auto; max-width: 520px; line-height: 1.55; }

.syh-page { padding: 28px 24px 24px; }
.syh-stage { max-width: 900px; margin: 0 auto; }

.syh-locked { text-align: center; padding: 50px 20px; background: #FFFFFF; border-radius: 20px; }
.syh-locked-icon { font-size: 34px; display: block; margin-bottom: 12px; }
.syh-locked-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 21px; margin: 0 0 8px; color: #1B2A4A; }
.syh-locked-blurb { font-size: 13.5px; color: #5A6B92; margin: 0 0 20px; }
.syh-locked-actions { display: flex; justify-content: center; gap: 10px; }
.syh-btn { font-weight: 700; font-size: 13.5px; border-radius: 999px; padding: 10px 22px; cursor: pointer; border: none; }
.syh-btn--primary { background: #FF6B4A; color: #FFFFFF; }
.syh-btn--ghost { background: transparent; color: #E0502F; border: 1.5px solid #F0DED7; }

.syh-new-card {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  width: 100%; padding: 18px; border-radius: 16px; margin-bottom: 30px;
  background: #FF6B4A; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 15px; color: #FFFFFF;
  box-shadow: 0 10px 20px rgba(255,107,74,0.28);
  transition: transform 0.15s ease;
}
.syh-new-card:hover { transform: translateY(-2px); }
.syh-new-card:disabled { opacity: 0.7; cursor: default; }
.syh-new-icon { font-size: 20px; line-height: 1; }

.syh-list-label { font-weight: 700; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #5A6B92; margin-bottom: 14px; }

.syh-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
.syh-empty { grid-column: 1 / -1; text-align: center; padding: 30px; color: #5A6B92; font-size: 14px; }

.syh-card {
  position: relative; text-align: left; background: #FFFFFF; border-radius: 16px; padding: 20px 18px 18px;
  border: none; border-left: 5px solid #FF6B4A; cursor: pointer; box-shadow: 0 8px 18px rgba(27,42,74,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: flex; flex-direction: column;
}
.syh-card:hover { transform: translateY(-3px); box-shadow: 0 14px 26px rgba(27,42,74,0.14); }
.syh-card-level { font-weight: 800; font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: #FF6B4A; margin-bottom: 6px; }
.syh-card-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px; color: #1B2A4A; line-height: 1.25; }
.syh-card-strip { display: flex; flex-wrap: wrap; gap: 3px; margin: 10px 0; }
.syh-card-strip span { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.syh-card-meta { font-size: 12px; color: #5A6B92; margin-top: auto; }
.syh-card-delete {
  position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%;
  background: #FBF4F1; color: #5A6B92; border: none; cursor: pointer; font-size: 15px; line-height: 1;
}
`;

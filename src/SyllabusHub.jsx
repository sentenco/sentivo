import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { newSyllabusSessions, timeAgo } from "./syllabusTypes";
import ConfirmDialog from "./ConfirmDialog";

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
      <div className="syh-page">
        <div className="syh-stage">
          <div className="syh-topbar">
            <button type="button" className="syh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
              <img src="/logo-sentivo.png" alt="" className="syh-brand-logo" />entivo
            </button>
          </div>

          <div className="syh-hero">
            <span className="syh-eyebrow">Sentivo · Homeroom</span>
            <h1 className="syh-hero-title">Syllabus Generator</h1>
            <p className="syh-hero-blurb">
              Generate a draft schedule from the curriculum, then edit, reorder, or swap sessions until it fits your class.
            </p>
          </div>

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
                  syllabi.map((syl) => (
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
                      <span className="syh-card-icon">📋</span>
                      <span className="syh-card-title">{syl.title || "Untitled syllabus"}</span>
                      <span className="syh-card-meta">
                        {syl.level ? `${syl.level} · ` : ""}{(syl.sessions || []).length} {(syl.sessions || []).length === 1 ? "session" : "sessions"} · {timeAgo(syl.updated_at)}
                      </span>
                    </button>
                  ))
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.syh-shell { min-height: 100vh; background: #F4F2FC; font-family: 'IBM Plex Sans', sans-serif; color: #2B2650; }
.syh-shell * { box-sizing: border-box; }

.syh-page { padding: 24px; }
.syh-stage { max-width: 900px; margin: 0 auto; }

.syh-topbar { display: flex; align-items: center; padding-bottom: 28px; }
.syh-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 19px;
  color: #2B2650; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
}
.syh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.syh-hero { text-align: center; margin-bottom: 34px; }
.syh-eyebrow {
  display: inline-block; font-weight: 800; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  color: #FFFFFF; background: #6B5CE0; border-radius: 999px; padding: 5px 14px; margin-bottom: 14px;
}
.syh-hero-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: clamp(30px, 3.6vw, 40px); margin: 0 0 10px; color: #2B2650; }
.syh-hero-blurb { font-size: 15px; color: #6B639C; margin: 0 auto; max-width: 520px; line-height: 1.55; }

.syh-locked { text-align: center; padding: 50px 20px; background: #FFFFFF; border-radius: 20px; }
.syh-locked-icon { font-size: 34px; display: block; margin-bottom: 12px; }
.syh-locked-title { font-family: 'Baloo 2', cursive; font-size: 20px; margin: 0 0 8px; color: #2B2650; }
.syh-locked-blurb { font-size: 13.5px; color: #6B639C; margin: 0 0 20px; }
.syh-locked-actions { display: flex; justify-content: center; gap: 10px; }
.syh-btn { font-weight: 800; font-size: 13.5px; border-radius: 999px; padding: 10px 22px; cursor: pointer; border: none; }
.syh-btn--primary { background: #6B5CE0; color: #FFFFFF; }
.syh-btn--ghost { background: transparent; color: #6B5CE0; border: 1.5px solid #D8D2F5; }

.syh-new-card {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  width: 100%; padding: 18px; border-radius: 16px; margin-bottom: 30px;
  background: #6B5CE0; border: none; cursor: pointer;
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 15px; color: #FFFFFF;
  box-shadow: 0 10px 20px rgba(107,92,224,0.28);
  transition: transform 0.15s ease;
}
.syh-new-card:hover { transform: translateY(-2px); }
.syh-new-card:disabled { opacity: 0.7; cursor: default; }
.syh-new-icon { font-size: 20px; line-height: 1; }

.syh-list-label { font-weight: 800; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #6B639C; margin-bottom: 14px; }

.syh-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
.syh-empty { grid-column: 1 / -1; text-align: center; padding: 30px; color: #6B639C; font-size: 14px; }

.syh-card {
  position: relative; text-align: left; background: #FFFFFF; border-radius: 16px; padding: 20px 18px;
  border: none; cursor: pointer; box-shadow: 0 8px 18px rgba(43,38,80,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  display: flex; flex-direction: column; gap: 8px;
}
.syh-card:hover { transform: translateY(-3px); box-shadow: 0 14px 26px rgba(43,38,80,0.14); }
.syh-card-icon { font-size: 24px; }
.syh-card-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 16px; color: #2B2650; }
.syh-card-meta { font-size: 12px; color: #6B639C; }
.syh-card-delete {
  position: absolute; top: 10px; right: 10px; width: 24px; height: 24px; border-radius: 50%;
  background: #F4F2FC; color: #6B639C; border: none; cursor: pointer; font-size: 15px; line-height: 1;
}
`;

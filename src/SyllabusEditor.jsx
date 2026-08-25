import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import {
  SYLLABUS_LEVELS,
  SYLLABUS_AGE_TRACKS,
  SYLLABUS_FOCUS_PRESETS,
  newSession,
  generateSyllabusSessions,
} from "./syllabusTypes";
import ConfirmDialog from "./ConfirmDialog";

const SKILL_LABELS = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
};

export default function SyllabusEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState("Untitled syllabus");
  const [level, setLevel] = useState("A1");
  const [ageTrack, setAgeTrack] = useState("kids");
  const [sessions, setSessions] = useState([]);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  const [genCount, setGenCount] = useState(10);
  const [genFocus, setGenFocus] = useState("balanced");
  const [genPreference, setGenPreference] = useState("");
  const [generating, setGenerating] = useState(false);
  const [genPanelOpen, setGenPanelOpen] = useState(false);
  const [confirmRegenerate, setConfirmRegenerate] = useState(false);

  useEffect(() => {
    if (!user) return;
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("syllabi")
        .select("id, title, level, age_track, sessions")
        .eq("id", id)
        .eq("user_id", user.id)
        .maybeSingle();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setTitle(data.title || "Untitled syllabus");
        setLevel(data.level || "A1");
        setAgeTrack(data.age_track || "kids");
        setSessions(data.sessions && data.sessions.length > 0 ? data.sessions : [newSession()]);
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [id, user]);

  async function save() {
    if (!user || saving) return;
    setSaving(true);
    const { error } = await supabase
      .from("syllabi")
      .update({ title, level, age_track: ageTrack, sessions, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("user_id", user.id);
    setSaving(false);
    if (!error) setSavedAt(Date.now());
  }

  async function runGenerate() {
    setGenerating(true);
    const generated = await generateSyllabusSessions({
      level,
      ageTrack,
      count: genCount,
      focusKey: genFocus,
      preference: genPreference,
    });
    setGenerating(false);
    setGenPanelOpen(false);
    if (generated.length === 0) {
      window.alert(`Couldn't generate anything for ${level} ${ageTrack}. Add sessions manually below instead.`);
      return;
    }
    setSessions(generated);
  }

  function handleGenerateClick() {
    const hasRealContent = sessions.some((s) => s.title.trim() || s.notes.trim());
    if (hasRealContent) {
      setConfirmRegenerate(true);
    } else {
      runGenerate();
    }
  }

  function updateSession(sid, field, value) {
    setSessions((prev) => prev.map((s) => (s.id === sid ? { ...s, [field]: value } : s)));
  }

  function removeSession(sid) {
    setSessions((prev) => prev.filter((s) => s.id !== sid));
  }

  function addSession() {
    setSessions((prev) => [...prev, newSession()]);
  }

  function moveSession(index, dir) {
    setSessions((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  if (authLoading || (user && loading)) return null;
  if (!user) return <p className="syl-signin">Sign in to edit this syllabus.</p>;
  if (notFound) return <p className="syl-signin">Syllabus not found.</p>;

  return (
    <div className="syl-shell">
      <style>{CSS}</style>

      <div className="syl-topbar no-print">
        <button type="button" className="syl-brand" onClick={() => navigate("/library/syllabus")} title="Back to your syllabi">
          <img src="/logo-sentivo.png" alt="" className="syl-brand-logo" />entivo
        </button>
        <div className="syl-topbar-actions">
          <span className="syl-saved-note">{saving ? "Saving…" : savedAt ? "Saved" : ""}</span>
          <button type="button" className="syl-btn syl-btn--ghost" onClick={() => window.print()}>Print</button>
          <button type="button" className="syl-btn syl-btn--primary" onClick={save} disabled={saving}>Save</button>
        </div>
      </div>

      <div className="syl-page">
        <div className="syl-stage">
          <input
            className="syl-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Untitled syllabus"
          />
          <div className="syl-meta-row no-print">
            <select className="syl-select" value={level} onChange={(e) => setLevel(e.target.value)}>
              {SYLLABUS_LEVELS.map((lv) => <option key={lv} value={lv}>{lv}</option>)}
            </select>
            <select className="syl-select" value={ageTrack} onChange={(e) => setAgeTrack(e.target.value)}>
              {SYLLABUS_AGE_TRACKS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
            </select>
            <button type="button" className="syl-btn syl-btn--ghost" onClick={() => setGenPanelOpen((o) => !o)}>
              Generate from curriculum
            </button>
          </div>
          <div className="syl-meta-print print-only">{level} · {SYLLABUS_AGE_TRACKS.find((t) => t.key === ageTrack)?.label}</div>

          {genPanelOpen && (
            <div className="syl-gen-panel no-print">
              <label className="syl-gen-label">
                Total sessions
                <input
                  type="number"
                  min="1"
                  max="60"
                  className="syl-gen-input"
                  value={genCount}
                  onChange={(e) => setGenCount(Math.max(1, Number(e.target.value) || 1))}
                />
              </label>
              <label className="syl-gen-label">
                Focus
                <select className="syl-select" value={genFocus} onChange={(e) => setGenFocus(e.target.value)}>
                  {SYLLABUS_FOCUS_PRESETS.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
                </select>
              </label>
              <label className="syl-gen-label syl-gen-label--grow">
                Student's interests (optional)
                <input
                  type="text"
                  className="syl-gen-pref-input"
                  placeholder="e.g. gaming, travel, business"
                  value={genPreference}
                  onChange={(e) => setGenPreference(e.target.value)}
                />
              </label>
              <button type="button" className="syl-btn syl-btn--primary" onClick={handleGenerateClick} disabled={generating}>
                {generating ? "Generating…" : "Generate draft"}
              </button>
              <p className="syl-gen-hint">
                Grammar and vocabulary are always included at a level-appropriate baseline. The rest follows the focus you pick above, and matches the student's interests where a track or book actually fits. Replaces the current session list below.
              </p>
            </div>
          )}

          <div className="syl-sessions">
            {sessions.map((s, i) => (
              <div className="syl-session-row" key={s.id}>
                <span className="syl-session-num">{i + 1}</span>
                <div className="syl-session-body">
                  {s.skill && s.skill !== "custom" && (
                    <span className={`syl-skill-tag syl-skill-tag--${s.skill}`}>{SKILL_LABELS[s.skill] || s.skill}</span>
                  )}
                  <input
                    className="syl-session-title"
                    value={s.title}
                    onChange={(e) => updateSession(s.id, "title", e.target.value)}
                    placeholder="Session title"
                  />
                  <input
                    className="syl-session-notes"
                    value={s.notes}
                    onChange={(e) => updateSession(s.id, "notes", e.target.value)}
                    placeholder="Notes (optional)"
                  />
                </div>
                <div className="syl-session-actions no-print">
                  <button type="button" className="syl-icon-btn" onClick={() => moveSession(i, -1)} disabled={i === 0} aria-label="Move up">↑</button>
                  <button type="button" className="syl-icon-btn" onClick={() => moveSession(i, 1)} disabled={i === sessions.length - 1} aria-label="Move down">↓</button>
                  <button type="button" className="syl-icon-btn syl-icon-btn--danger" onClick={() => removeSession(s.id)} aria-label="Remove session">×</button>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="syl-add-btn no-print" onClick={addSession}>+ Add session</button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmRegenerate}
        title="Replace current sessions?"
        message="Generating a new draft will replace everything in the session list below. This can't be undone unless you've already saved a version you want to keep."
        confirmLabel="Replace"
        onConfirm={() => { setConfirmRegenerate(false); runGenerate(); }}
        onCancel={() => setConfirmRegenerate(false)}
      />
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.syl-shell { min-height: 100vh; background: #F4F2FC; font-family: 'IBM Plex Sans', sans-serif; color: #2B2650; }
.syl-shell * { box-sizing: border-box; }
.syl-signin { text-align: center; margin-top: 80px; color: #6B639C; font-family: 'IBM Plex Sans', sans-serif; }

.syl-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 28px; background: #FFFFFF; border-bottom: 1px solid #E5E0F7;
}
.syl-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 800; font-size: 18px;
  color: #2B2650; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
}
.syl-brand-logo { height: 26px; width: auto; display: block; margin-right: -4px; }
.syl-topbar-actions { display: flex; align-items: center; gap: 10px; }
.syl-saved-note { font-size: 12px; color: #6B639C; font-weight: 700; }

.syl-btn { font-weight: 800; font-size: 13px; border-radius: 999px; padding: 9px 18px; cursor: pointer; border: none; white-space: nowrap; }
.syl-btn--primary { background: #6B5CE0; color: #FFFFFF; }
.syl-btn--primary:disabled { opacity: 0.6; cursor: default; }
.syl-btn--ghost { background: #F4F2FC; color: #6B5CE0; border: 1.5px solid #E5E0F7; }

.syl-page { padding: 28px 20px 60px; }
.syl-stage { max-width: 760px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; padding: 34px 32px; box-shadow: 0 10px 30px rgba(43,38,80,0.08); }

.syl-title-input {
  width: 100%; border: none; outline: none; background: transparent;
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 30px; color: #2B2650;
  margin-bottom: 14px; padding: 0;
}
.syl-title-input::placeholder { color: #C7C0EA; }

.syl-meta-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }
.syl-meta-print { display: none; }
.syl-select {
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 13px; color: #2B2650;
  background: #F4F2FC; border: 1.5px solid #E5E0F7; border-radius: 10px; padding: 8px 12px; cursor: pointer;
}

.syl-gen-panel {
  background: #F4F2FC; border-radius: 14px; padding: 18px 20px; margin-bottom: 24px;
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.syl-gen-label { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #2B2650; }
.syl-gen-label--grow { flex: 1; min-width: 220px; }
.syl-gen-input { width: 60px; padding: 7px 10px; border-radius: 8px; border: 1.5px solid #E5E0F7; font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; }
.syl-gen-pref-input {
  flex: 1; min-width: 160px; padding: 7px 10px; border-radius: 8px; border: 1.5px solid #E5E0F7;
  font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 13px;
}
.syl-gen-hint { flex-basis: 100%; font-size: 12px; color: #6B639C; margin: 0; }

.syl-sessions { display: flex; flex-direction: column; gap: 10px; }
.syl-session-row {
  display: flex; align-items: center; gap: 14px;
  background: #F9F8FE; border-radius: 12px; padding: 12px 14px;
}
.syl-session-num {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  background: #6B5CE0; color: #FFFFFF; font-weight: 800; font-size: 12px;
  display: flex; align-items: center; justify-content: center;
}
.syl-session-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.syl-skill-tag {
  align-self: flex-start; font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;
  border-radius: 999px; padding: 2px 8px; margin-bottom: 2px;
}
.syl-skill-tag--grammar { background: #E7ECFB; color: #3550B0; }
.syl-skill-tag--vocabulary { background: #FBEAF0; color: #B0355C; }
.syl-skill-tag--speaking { background: #FDF1DE; color: #B0791F; }
.syl-skill-tag--reading { background: #E4F6EE; color: #1F8A5B; }
.syl-skill-tag--writing { background: #EFEBFB; color: #6B5CE0; }
.syl-session-title, .syl-session-notes {
  border: none; outline: none; background: transparent; font-family: 'IBM Plex Sans', sans-serif; width: 100%; padding: 2px 0;
}
.syl-session-title { font-weight: 700; font-size: 14.5px; color: #2B2650; }
.syl-session-notes { font-size: 12.5px; color: #6B639C; }
.syl-session-title::placeholder, .syl-session-notes::placeholder { color: #C7C0EA; }

.syl-session-actions { flex-shrink: 0; display: flex; gap: 4px; }
.syl-icon-btn {
  width: 26px; height: 26px; border-radius: 8px; border: none; background: #EFEBFB; color: #6B5CE0;
  cursor: pointer; font-size: 13px; font-weight: 800;
}
.syl-icon-btn:disabled { opacity: 0.35; cursor: default; }
.syl-icon-btn--danger { color: #D14B4B; background: #FBEBEB; }

.syl-add-btn {
  margin-top: 14px; align-self: flex-start; background: none; border: 1.5px dashed #D8D2F5;
  color: #6B5CE0; font-weight: 700; font-size: 13.5px; border-radius: 10px; padding: 10px 16px; cursor: pointer;
}

.print-only { display: none; }

@media print {
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  .syl-shell { background: #FFFFFF; }
  .syl-page { padding: 0; }
  .syl-stage { box-shadow: none; max-width: 100%; padding: 0; }
  .syl-meta-print { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 13px; color: #6B639C; margin-bottom: 18px; }
  .syl-session-row { background: none; border-bottom: 1px solid #E5E0F7; border-radius: 0; padding: 10px 0; }
}
`;

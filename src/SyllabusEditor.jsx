import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import {
  SYLLABUS_LEVELS,
  SYLLABUS_AGE_TRACKS,
  SYLLABUS_FOCUS_OPTIONS,
  newSession,
  generateSyllabusSessions,
  offsetsForFollowUp,
  nextLevel,
} from "./syllabusTypes";
import ConfirmDialog from "./ConfirmDialog";

const SKILL_LABELS = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
  articles: "Articles",
  listening: "Listening",
};

const SKILL_COLORS = {
  grammar: "#3550B0",
  vocabulary: "#B0355C",
  speaking: "#B0791F",
  reading: "#1F8A5B",
  writing: "#6B5CE0",
  articles: "#1F6FB0",
  listening: "#8A5A2A",
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
  const [studentName, setStudentName] = useState("");
  const [studentNotes, setStudentNotes] = useState("");
  const [sessions, setSessions] = useState([]);
  const [offsets, setOffsets] = useState({});
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  const [genCount, setGenCount] = useState(10);
  const [genFocus, setGenFocus] = useState("balanced");
  const [generating, setGenerating] = useState(false);
  const [genPanelOpen, setGenPanelOpen] = useState(false);
  const [confirmRegenerate, setConfirmRegenerate] = useState(false);

  const [followUpPanelOpen, setFollowUpPanelOpen] = useState(false);
  const [followUpLevel, setFollowUpLevel] = useState(level);
  const [followingUp, setFollowingUp] = useState(false);

  useEffect(() => {
    if (!user) return;
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("syllabi")
        .select("id, title, level, age_track, student_name, student_notes, sessions, offsets")
        .eq("id", id)
        .eq("user_id", user.id)
        .maybeSingle();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setTitle(data.title || "Untitled syllabus");
        setLevel(data.level || "A1");
        setFollowUpLevel(data.level || "A1");
        setAgeTrack(data.age_track || "kids");
        setStudentName(data.student_name || "");
        setStudentNotes(data.student_notes || "");
        setSessions(data.sessions && data.sessions.length > 0 ? data.sessions : [newSession()]);
        setOffsets(data.offsets || {});
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
      .update({ title, level, age_track: ageTrack, student_name: studentName, student_notes: studentNotes, sessions, offsets, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("user_id", user.id);
    setSaving(false);
    if (!error) setSavedAt(Date.now());
  }

  async function runGenerate() {
    setGenerating(true);
    const result = await generateSyllabusSessions({
      level,
      ageTrack,
      count: genCount,
      focusKey: genFocus,
    });
    setGenerating(false);
    setGenPanelOpen(false);
    if (result.sessions.length === 0) {
      window.alert(`Couldn't generate anything for ${level} ${ageTrack}. Add sessions manually below instead.`);
      return;
    }
    setSessions(result.sessions);
    setOffsets(result.offsets);
  }

  function handleGenerateClick() {
    const hasRealContent = sessions.some((s) => s.title.trim() || s.notes.trim());
    if (hasRealContent) {
      setConfirmRegenerate(true);
    } else {
      runGenerate();
    }
  }

  async function createFollowUp() {
    if (!user || followingUp) return;
    setFollowingUp(true);
    const startOffsets = offsetsForFollowUp(offsets, level, followUpLevel, ageTrack);
    const result = await generateSyllabusSessions({
      level: followUpLevel,
      ageTrack,
      count: sessions.length || 10,
      focusKey: genFocus,
      startOffsets,
    });
    const { data, error } = await supabase
      .from("syllabi")
      .insert({
        user_id: user.id,
        title: `${title} (follow-up)`,
        level: followUpLevel,
        age_track: ageTrack,
        student_name: studentName,
        student_notes: studentNotes,
        sessions: result.sessions,
        offsets: result.offsets,
      })
      .select()
      .single();
    setFollowingUp(false);
    setFollowUpPanelOpen(false);
    if (!error && data) navigate(`/library/syllabus/${data.id}/edit`);
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

  const higherLevel = nextLevel(level);

  return (
    <div className="syl-shell">
      <style>{CSS}</style>

      <div className="syl-frame no-print">
        <div className="syl-topbar">
          <button type="button" className="syl-brand" onClick={() => navigate("/library/syllabus")} title="Back to your syllabi">
            <img src="/logo-sentivo.png" alt="" className="syl-brand-logo" />entivo
          </button>
          <div className="syl-topbar-actions">
            <span className="syl-saved-note">{saving ? "Saving…" : savedAt ? "Saved" : ""}</span>
            <button type="button" className="syl-btn syl-btn--ghost" onClick={() => setFollowUpPanelOpen((o) => !o)}>Generate follow-up</button>
            <button type="button" className="syl-btn syl-btn--ghost" onClick={() => window.print()}>Print</button>
            <button type="button" className="syl-btn syl-btn--primary" onClick={save} disabled={saving}>Save</button>
          </div>
        </div>

        <div className="syl-header">
          <div className="syl-header-blob" />
          <div className="syl-header-content">
            <input
              className="syl-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Untitled syllabus"
            />
            <div className="syl-meta-row">
              <input
                className="syl-pill-input"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Student name"
              />
              <select className="syl-pill-select" value={level} onChange={(e) => { setLevel(e.target.value); setFollowUpLevel(e.target.value); }}>
                {SYLLABUS_LEVELS.map((lv) => <option key={lv} value={lv}>{lv}</option>)}
              </select>
              <select className="syl-pill-select" value={ageTrack} onChange={(e) => setAgeTrack(e.target.value)}>
                {SYLLABUS_AGE_TRACKS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
              </select>
              <span className="syl-pill-static">{sessions.length} {sessions.length === 1 ? "session" : "sessions"}</span>
              <input
                className="syl-pill-input"
                value={studentNotes}
                onChange={(e) => setStudentNotes(e.target.value)}
                placeholder="Contact / booking ID (optional)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="syl-meta-print print-only">
        {title} — {level} · {SYLLABUS_AGE_TRACKS.find((t) => t.key === ageTrack)?.label}{studentName ? ` · For: ${studentName}` : ""}
      </div>

      {followUpPanelOpen && (
        <div className="syl-followup-bar no-print">
          <span className="syl-followup-label">Continue at</span>
          <select className="syl-select" value={followUpLevel} onChange={(e) => setFollowUpLevel(e.target.value)}>
            <option value={level}>{level} (same level)</option>
            {higherLevel && <option value={higherLevel}>{higherLevel} (level up)</option>}
          </select>
          <button type="button" className="syl-btn syl-btn--primary" onClick={createFollowUp} disabled={followingUp}>
            {followingUp ? "Creating…" : "Create follow-up syllabus"}
          </button>
          <p className="syl-followup-hint">
            Picks up where this syllabus's Grammar, Vocabulary, Writing, and Articles left off. Speaking and Reading restart if the level changes, since their content is level-specific.
          </p>
        </div>
      )}

      <div className="syl-page">
        <div className="syl-stage">
          <div className="syl-toolbar no-print">
            <button type="button" className="syl-btn syl-btn--ghost" onClick={() => setGenPanelOpen((o) => !o)}>
              Generate from curriculum
            </button>
          </div>

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
                  {SYLLABUS_FOCUS_OPTIONS.map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
                </select>
              </label>
              <button type="button" className="syl-btn syl-btn--primary" onClick={handleGenerateClick} disabled={generating}>
                {generating ? "Generating…" : "Generate draft"}
              </button>
              <p className="syl-gen-hint">
                Grammar and vocabulary are always included at a level-appropriate baseline, on top of whatever focus you pick. Replaces the current session list below.
              </p>
            </div>
          )}

          <div className="syl-timeline">
            {sessions.map((s, i) => (
              <div className={`syl-t-row${s.completed ? " syl-t-row--done" : ""}`} key={s.id}>
                <span className="syl-t-dot" style={{ background: SKILL_COLORS[s.skill] || "#5A6B92" }}>{s.completed ? "✓" : i + 1}</span>
                <div className="syl-t-body">
                  <div className="syl-t-tags">
                    {s.skill && s.skill !== "custom" && (
                      <span className={`syl-skill-tag syl-skill-tag--${s.skill}`}>{SKILL_LABELS[s.skill] || s.skill}</span>
                    )}
                    {s.completed && <span className="syl-done-tag">Completed</span>}
                  </div>
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
                  <button
                    type="button"
                    className={`syl-icon-btn${s.completed ? " syl-icon-btn--done" : ""}`}
                    onClick={() => updateSession(s.id, "completed", !s.completed)}
                    aria-label={s.completed ? "Mark not completed" : "Mark completed"}
                    title={s.completed ? "Mark not completed" : "Mark completed"}
                  >
                    ✓
                  </button>
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
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.syl-shell { min-height: 100vh; background: #FBF4F1; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.syl-shell * { box-sizing: border-box; }
.syl-signin { text-align: center; margin-top: 80px; color: #5A6B92; font-family: 'Inter', sans-serif; }

.syl-frame { max-width: 900px; margin: 0 auto; padding: 24px 24px 0; }

.syl-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.syl-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-family: 'Inter', sans-serif; font-weight: 800; font-size: 18px;
  color: #1B2A4A; text-decoration: none; cursor: pointer; border: none; background: none; padding: 0;
}
.syl-brand-logo { height: 26px; width: auto; display: block; margin-right: -4px; }
.syl-topbar-actions { display: flex; align-items: center; gap: 8px; }
.syl-saved-note { font-size: 12px; color: #5A6B92; font-weight: 700; }

.syl-header {
  background: #1B2A4A; border-radius: 22px; padding: 28px 30px 30px; color: #FFFFFF;
  position: relative; overflow: hidden; box-shadow: 0 18px 36px rgba(27,42,74,0.2);
}
.syl-header-blob {
  position: absolute; width: 220px; height: 220px; border-radius: 50%;
  background: #FF6B4A; opacity: 0.16; top: -90px; right: -70px; pointer-events: none;
}
.syl-header-content { position: relative; }

.syl-btn { font-weight: 700; font-size: 13px; border-radius: 999px; padding: 9px 18px; cursor: pointer; border: none; white-space: nowrap; }
.syl-btn--primary { background: #FF6B4A; color: #FFFFFF; }
.syl-btn--primary:disabled { opacity: 0.6; cursor: default; }
.syl-btn--ghost { background: #FDECE5; color: #E0502F; border: none; }

.syl-title-input {
  width: 100%; border: none; outline: none; background: transparent;
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 32px; color: #FFFFFF;
  margin-bottom: 14px; padding: 0; letter-spacing: -0.01em;
}
.syl-title-input::placeholder { color: rgba(255,255,255,0.4); }

.syl-meta-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.syl-meta-print { display: none; }
.syl-pill-select {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #FFFFFF;
  background: rgba(255,255,255,0.16); border: none; border-radius: 999px; padding: 6px 14px; cursor: pointer;
}
.syl-pill-static { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #B9C3DC; padding: 6px 4px; }
.syl-pill-input {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 12.5px; color: #FFFFFF;
  background: rgba(255,255,255,0.16); border: none; border-radius: 999px; padding: 6px 14px;
  outline: none; min-width: 140px;
}
.syl-pill-input::placeholder { color: rgba(255,255,255,0.55); font-weight: 600; }

.syl-select {
  font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; color: #1B2A4A;
  background: #FBF4F1; border: 1.5px solid #EDE1DB; border-radius: 10px; padding: 8px 12px; cursor: pointer;
}

.syl-followup-bar {
  max-width: 760px; margin: 20px auto 0; background: #FFFFFF; border-radius: 14px; padding: 16px 20px;
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap; box-shadow: 0 8px 18px rgba(27,42,74,0.06);
}
.syl-followup-label { font-size: 13px; font-weight: 800; color: #1B2A4A; }
.syl-followup-hint { flex-basis: 100%; font-size: 12px; color: #5A6B92; margin: 0; }

.syl-page { padding: 28px 20px 60px; }
.syl-stage { max-width: 760px; margin: 0 auto; background: #FFFFFF; border-radius: 20px; padding: 30px 32px 34px; box-shadow: 0 10px 30px rgba(27,42,74,0.08); }

.syl-toolbar { display: flex; align-items: center; margin-bottom: 20px; }

.syl-gen-panel {
  background: #FBF4F1; border-radius: 14px; padding: 18px 20px; margin-bottom: 24px;
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.syl-gen-label { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #1B2A4A; }
.syl-gen-input { width: 60px; padding: 7px 10px; border-radius: 8px; border: 1.5px solid #EDE1DB; font-family: 'Inter', sans-serif; font-weight: 700; }
.syl-gen-hint { flex-basis: 100%; font-size: 12px; color: #5A6B92; margin: 0; }

.syl-timeline { position: relative; }
.syl-timeline::before { content: ""; position: absolute; left: 15px; top: 8px; bottom: 8px; width: 2px; background: #EDE1DB; }
.syl-t-row { position: relative; display: flex; align-items: flex-start; gap: 14px; padding: 7px 0; }
.syl-t-dot {
  position: relative; z-index: 1; flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%;
  color: #FFFFFF; font-weight: 800; font-size: 12px;
  display: flex; align-items: center; justify-content: center; margin-top: 2px;
}
.syl-t-body { flex: 1; min-width: 0; background: #FBF4F1; border-radius: 12px; padding: 12px 14px; display: flex; flex-direction: column; gap: 2px; }
.syl-t-tags { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.syl-skill-tag {
  font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;
  border-radius: 999px; padding: 2px 8px;
}
.syl-skill-tag--grammar { background: #E7ECFB; color: #3550B0; }
.syl-skill-tag--vocabulary { background: #FBEAF0; color: #B0355C; }
.syl-skill-tag--speaking { background: #FDF1DE; color: #B0791F; }
.syl-skill-tag--reading { background: #E4F6EE; color: #1F8A5B; }
.syl-skill-tag--writing { background: #EFEBFB; color: #6B5CE0; }
.syl-skill-tag--articles { background: #E9F3FB; color: #1F6FB0; }
.syl-skill-tag--listening { background: #F4EDE3; color: #8A5A2A; }
.syl-done-tag { font-size: 9.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 999px; padding: 2px 8px; background: #E7F5EC; color: #2F9E58; }
.syl-t-row--done .syl-t-body { opacity: 0.6; }
.syl-t-row--done .syl-session-title { text-decoration: line-through; }
.syl-session-title, .syl-session-notes {
  border: none; outline: none; background: transparent; font-family: 'Inter', sans-serif; width: 100%; padding: 2px 0;
}
.syl-session-title { font-weight: 700; font-size: 14.5px; color: #1B2A4A; }
.syl-session-notes { font-size: 12.5px; color: #5A6B92; }
.syl-session-title::placeholder, .syl-session-notes::placeholder { color: #C7B7AE; }

.syl-session-actions { flex-shrink: 0; display: flex; gap: 4px; margin-top: 2px; }
.syl-icon-btn {
  width: 26px; height: 26px; border-radius: 8px; border: none; background: #FDECE5; color: #E0502F;
  cursor: pointer; font-size: 13px; font-weight: 800;
}
.syl-icon-btn:disabled { opacity: 0.35; cursor: default; }
.syl-icon-btn--danger { color: #D14B4B; background: #FBEBEB; }
.syl-icon-btn--done { background: #2F9E58; color: #FFFFFF; }

.syl-add-btn {
  margin-top: 14px; align-self: flex-start; background: none; border: 1.5px dashed #EDE1DB;
  color: #E0502F; font-weight: 700; font-size: 13.5px; border-radius: 10px; padding: 10px 16px; cursor: pointer;
}

.print-only { display: none; }

@media print {
  .no-print { display: none !important; }
  .print-only { display: block !important; }
  .syl-shell { background: #FFFFFF; }
  .syl-page { padding: 0; }
  .syl-stage { box-shadow: none; max-width: 100%; padding: 0; }
  .syl-meta-print { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: #1B2A4A; margin: 24px 20px 18px; }
  .syl-t-body { background: none; border-bottom: 1px solid #EDE1DB; border-radius: 0; padding: 10px 0; }
  .syl-timeline::before { display: none; }
}
`;

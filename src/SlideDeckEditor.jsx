import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { LAYOUTS, newSlide } from "./slideDeckTypes";

// Opens the read-only presenter as a standalone popup -- matching the
// FORGE/ASCEND/Notebook chrome-less window.open pattern.
function openPresenter(deckId) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1100, screenW - 40);
  const h = Math.min(720, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/slides/${deckId}/present`,
    "sentivoSlidePresent",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function SlideDeckEditor() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const [title, setTitle] = useState("");
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [status, setStatus] = useState("saved"); // "saved" | "saving" | "error"
  const saveTimer = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setLoading(false); return; }
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("slide_decks")
        .select("id, title, slides")
        .eq("id", deckId)
        .eq("user_id", user.id)
        .single();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setTitle(data.title || "Untitled deck");
        setSlides(data.slides && data.slides.length ? data.slides : [newSlide("title")]);
        loadedRef.current = true;
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [deckId, user, authLoading]);

  const persist = useCallback((nextTitle, nextSlides) => {
    if (!loadedRef.current || !user) return;
    setStatus("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const { error } = await supabase
        .from("slide_decks")
        .update({ title: nextTitle, slides: nextSlides, updated_at: new Date().toISOString() })
        .eq("id", deckId)
        .eq("user_id", user.id);
      setStatus(error ? "error" : "saved");
    }, 700);
  }, [deckId, user]);

  function updateTitle(value) {
    setTitle(value);
    persist(value, slides);
  }

  function updateSlide(index, patch) {
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === index ? { ...s, ...patch } : s));
      persist(title, next);
      return next;
    });
  }

  function addSlide() {
    setSlides((prev) => {
      const next = [...prev, newSlide("title")];
      persist(title, next);
      setActiveIndex(next.length - 1);
      return next;
    });
  }

  function deleteSlide(index) {
    if (slides.length <= 1) return;
    setSlides((prev) => {
      const next = prev.filter((_, i) => i !== index);
      persist(title, next);
      return next;
    });
    setActiveIndex((i) => Math.max(0, Math.min(i, slides.length - 2)));
  }

  function moveSlide(index, dir) {
    const target = index + dir;
    if (target < 0 || target >= slides.length) return;
    setSlides((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      persist(title, next);
      return next;
    });
    setActiveIndex(target);
  }

  if (authLoading || loading) return <div className="sde-shell"><style>{CSS}</style></div>;

  if (!user) {
    return (
      <div className="sde-shell">
        <style>{CSS}</style>
        <div className="sde-missing">Log in from the Library to edit this deck.</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="sde-shell">
        <style>{CSS}</style>
        <div className="sde-missing">This deck wasn't found.</div>
      </div>
    );
  }

  const active = slides[activeIndex] || slides[0];

  return (
    <div className="sde-shell">
      <style>{CSS}</style>

      <header className="sde-topbar">
        <button type="button" className="sde-back-link" onClick={() => navigate("/library/slides")}>← Decks</button>
        <input
          className="sde-title-input"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
          placeholder="Untitled deck"
        />
        <div className="sde-topbar-right">
          <span className={`sde-status sde-status--${status}`}>
            {status === "saving" ? "Saving…" : status === "error" ? "Couldn't save" : "Saved"}
          </span>
          <button type="button" className="sde-present-btn" onClick={() => openPresenter(deckId)}>Present ▶</button>
        </div>
      </header>

      <div className="sde-body">
        <div className="sde-rail">
          {slides.map((s, i) => {
            const layout = LAYOUTS.find((l) => l.key === s.layout) || LAYOUTS[0];
            return (
              <div key={s.id} className={`sde-rail-item ${i === activeIndex ? "is-active" : ""}`} onClick={() => setActiveIndex(i)}>
                <span className="sde-rail-num">{i + 1}</span>
                <span className="sde-rail-icon">{layout.icon}</span>
                <span className="sde-rail-heading">{s.heading || "Untitled slide"}</span>
                <div className="sde-rail-actions">
                  <button type="button" onClick={(e) => { e.stopPropagation(); moveSlide(i, -1); }} disabled={i === 0} aria-label="Move up">↑</button>
                  <button type="button" onClick={(e) => { e.stopPropagation(); moveSlide(i, 1); }} disabled={i === slides.length - 1} aria-label="Move down">↓</button>
                  <button type="button" onClick={(e) => { e.stopPropagation(); deleteSlide(i); }} disabled={slides.length <= 1} aria-label="Delete slide">×</button>
                </div>
              </div>
            );
          })}
          <button type="button" className="sde-add-btn" onClick={addSlide}>+ Add slide</button>
        </div>

        <div className="sde-editor">
          <div className="sde-layout-picker">
            {LAYOUTS.map((l) => (
              <button
                key={l.key}
                type="button"
                className={`sde-layout-btn ${active.layout === l.key ? "is-active" : ""}`}
                onClick={() => updateSlide(activeIndex, { layout: l.key })}
              >
                <span>{l.icon}</span> {l.label}
              </button>
            ))}
          </div>
          <p className="sde-layout-hint">{(LAYOUTS.find((l) => l.key === active.layout) || LAYOUTS[0]).hint}</p>

          <label className="sde-field-label">Heading</label>
          <input
            className="sde-field-input"
            value={active.heading}
            onChange={(e) => updateSlide(activeIndex, { heading: e.target.value })}
            placeholder="Slide heading"
          />

          {active.layout === "bullets" && (
            <>
              <label className="sde-field-label">Bullet points (one per line)</label>
              <textarea
                className="sde-field-textarea"
                value={active.body}
                onChange={(e) => updateSlide(activeIndex, { body: e.target.value })}
                placeholder={"First point\nSecond point\n..."}
              />
            </>
          )}

          {active.layout === "title" && (
            <>
              <label className="sde-field-label">Subtext (optional)</label>
              <textarea
                className="sde-field-textarea sde-field-textarea--short"
                value={active.body}
                onChange={(e) => updateSlide(activeIndex, { body: e.target.value })}
                placeholder="A short line under the heading"
              />
            </>
          )}

          {active.layout === "image-text" && (
            <>
              <label className="sde-field-label">Image caption</label>
              <input
                className="sde-field-input"
                value={active.imageNote}
                onChange={(e) => updateSlide(activeIndex, { imageNote: e.target.value })}
                placeholder="What the image shows"
              />
              <label className="sde-field-label">Text</label>
              <textarea
                className="sde-field-textarea"
                value={active.body}
                onChange={(e) => updateSlide(activeIndex, { body: e.target.value })}
                placeholder="Notes to go beside the image"
              />
            </>
          )}
        </div>

        <div className="sde-preview">
          <div className="sde-preview-label">Preview</div>
          <div className="sde-preview-frame">
            <SlidePreview slide={active} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SlidePreview({ slide }) {
  if (slide.layout === "bullets") {
    const points = (slide.body || "").split("\n").map((p) => p.trim()).filter(Boolean);
    return (
      <div className="sp-bullets">
        <h2 className="sp-heading">{slide.heading || "Untitled slide"}</h2>
        <ul className="sp-list">
          {points.length ? points.map((p, i) => <li key={i}>{p}</li>) : <li className="sp-placeholder">Add bullet points…</li>}
        </ul>
      </div>
    );
  }
  if (slide.layout === "image-text") {
    return (
      <div className="sp-image-text">
        <div className="sp-image-box">
          <span>🖼️</span>
          <p>{slide.imageNote || "Image caption"}</p>
        </div>
        <div className="sp-image-copy">
          <h2 className="sp-heading">{slide.heading || "Untitled slide"}</h2>
          <p className="sp-body">{slide.body || "Notes go here…"}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="sp-title">
      <h2 className="sp-heading sp-heading--big">{slide.heading || "Untitled slide"}</h2>
      {slide.body && <p className="sp-body">{slide.body}</p>}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.sde-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #FFFBF7;
  font-family: 'Quicksand', sans-serif;
  color: #2B2A1E;
}
.sde-shell * { box-sizing: border-box; }

.sde-missing { padding: 60px; text-align: center; color: #9A8A73; }

.sde-topbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: #FFFFFF;
  border-bottom: 1px solid #F5E3D6;
}
.sde-back-link { font-weight: 700; font-size: 13px; color: #E5623A; background: none; border: none; cursor: pointer; flex-shrink: 0; }
.sde-title-input {
  flex: 1;
  min-width: 0;
  font-family: 'Fredoka', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2B2A1E;
  background: none;
  border: none;
  outline: none;
  padding: 6px 8px;
  border-radius: 8px;
}
.sde-title-input:focus { background: #FFF3E9; }
.sde-topbar-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
.sde-status { font-size: 11.5px; font-weight: 700; color: #9A8A73; }
.sde-status--saving { color: #E5A83F; }
.sde-status--error { color: #D6392A; }
.sde-present-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF9A6B 0%, #E5623A 100%);
  border: none;
  border-radius: 10px;
  padding: 9px 16px;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(229,98,58,0.28);
}

.sde-body { flex: 1; min-height: 0; display: flex; }

.sde-rail {
  width: 240px;
  flex-shrink: 0;
  overflow-y: auto;
  padding: 14px;
  background: #FFFFFF;
  border-right: 1px solid #F5E3D6;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sde-rail-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid #F5E3D6;
  cursor: pointer;
  font-size: 12.5px;
}
.sde-rail-item.is-active { border-color: #E5623A; background: #FFF3E9; }
.sde-rail-num { font-weight: 800; color: #C9B9A2; font-size: 11px; width: 14px; }
.sde-rail-icon { font-size: 13px; }
.sde-rail-heading { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; }
.sde-rail-actions { display: none; gap: 2px; }
.sde-rail-item:hover .sde-rail-actions { display: flex; }
.sde-rail-actions button {
  width: 18px; height: 18px; border: none; background: rgba(0,0,0,0.06); border-radius: 5px;
  font-size: 10px; cursor: pointer; color: #7A6A57; display: flex; align-items: center; justify-content: center;
}
.sde-rail-actions button:disabled { opacity: 0.3; cursor: default; }

.sde-add-btn {
  margin-top: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #E5623A;
  background: rgba(229,98,58,0.08);
  border: 1px dashed #F0C199;
  border-radius: 10px;
  padding: 9px;
  cursor: pointer;
}

.sde-editor {
  width: 320px;
  flex-shrink: 0;
  overflow-y: auto;
  padding: 20px;
  border-right: 1px solid #F5E3D6;
}

.sde-layout-picker { display: flex; flex-direction: column; gap: 6px; margin-bottom: 6px; }
.sde-layout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #7A6A57;
  background: #FFF7F0;
  border: 1px solid #F5E3D6;
  border-radius: 9px;
  padding: 8px 10px;
  cursor: pointer;
  text-align: left;
}
.sde-layout-btn.is-active { background: #FFE3CE; border-color: #E5623A; color: #B4451F; }
.sde-layout-hint { font-size: 11px; color: #9A8A73; margin: 4px 0 18px; line-height: 1.4; }

.sde-field-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #9A8A73; margin: 14px 0 6px; }
.sde-field-input, .sde-field-textarea {
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  color: #2B2A1E;
  background: #FFF7F0;
  border: 1px solid #F5E3D6;
  border-radius: 10px;
  padding: 9px 11px;
  outline: none;
}
.sde-field-input:focus, .sde-field-textarea:focus { border-color: #E5623A; }
.sde-field-textarea { resize: vertical; min-height: 110px; line-height: 1.6; }
.sde-field-textarea--short { min-height: 60px; }

.sde-preview { flex: 1; min-width: 0; display: flex; flex-direction: column; padding: 24px; }
.sde-preview-label { font-size: 10.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #9A8A73; margin-bottom: 10px; }
.sde-preview-frame {
  flex: 1;
  min-height: 0;
  border-radius: 16px;
  background: #FFFFFF;
  border: 1px solid #F5E3D6;
  box-shadow: 0 14px 32px rgba(229,98,58,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  aspect-ratio: 16 / 9;
  max-height: 100%;
}

.sp-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; color: #2B2A1E; margin: 0 0 10px; }
.sp-heading--big { font-size: clamp(22px, 4vw, 34px); text-align: center; }
.sp-body { font-size: 14px; line-height: 1.6; color: #6B6455; }
.sp-title { text-align: center; }
.sp-bullets { width: 100%; }
.sp-list { margin: 0; padding-left: 22px; font-size: 14px; line-height: 1.9; color: #4A4436; }
.sp-placeholder { color: #C9B9A2; }
.sp-image-text { display: flex; gap: 24px; align-items: center; width: 100%; }
.sp-image-box {
  flex: 1;
  aspect-ratio: 4/3;
  background: #FFF3E9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 26px;
  color: #C9924E;
}
.sp-image-box p { font-size: 11px; color: #B48A5A; text-align: center; padding: 0 12px; }
.sp-image-copy { flex: 1.2; }

@media (max-width: 900px) {
  .sde-body { flex-direction: column; overflow-y: auto; }
  .sde-rail, .sde-editor { width: 100%; border-right: none; border-bottom: 1px solid #F5E3D6; }
}
`;

import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { newSlide, newTextElement, newImageElement } from "./slideDeckTypes";

const IMAGE_BUCKET = "slide-images";
const TEXT_COLORS = ["#1B2A4A", "#FF6B4A", "#5B6B85", "#1F9D6E", "#FFFFFF"];

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

  const [deckTitle, setDeckTitle] = useState("");
  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [status, setStatus] = useState("saved");
  const [selectedId, setSelectedId] = useState(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryImages, setLibraryImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const saveTimer = useRef(null);
  const loadedRef = useRef(false);
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const fileInputRef = useRef(null);
  const newElementIdRef = useRef(null);

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
        setDeckTitle(data.title || "Untitled deck");
        setSlides(data.slides && data.slides.length ? data.slides : [newSlide()]);
        loadedRef.current = true;
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [deckId, user, authLoading]);

  useEffect(() => {
    if (!user) return;
    let isMounted = true;
    async function loadLibrary() {
      const { data, error } = await supabase.storage.from(IMAGE_BUCKET).list(user.id, { limit: 100, sortBy: { column: "created_at", order: "desc" } });
      if (!isMounted || error || !data) return;
      const images = data
        .filter((f) => f.name)
        .map((f) => {
          const path = `${user.id}/${f.name}`;
          const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
          return { name: f.name, url: pub.publicUrl };
        });
      setLibraryImages(images);
    }
    loadLibrary();
    return () => { isMounted = false; };
  }, [user]);

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

  function updateDeckTitle(value) {
    setDeckTitle(value);
    persist(value, slides);
  }

  function updateSlide(index, patch) {
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === index ? { ...s, ...patch } : s));
      persist(deckTitle, next);
      return next;
    });
  }

  function updateElement(index, elementId, patch) {
    setSlides((prev) => {
      const next = prev.map((s, i) => {
        if (i !== index) return s;
        return { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, ...patch } : el)) };
      });
      persist(deckTitle, next);
      return next;
    });
  }

  function deleteElement(index, elementId) {
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === index ? { ...s, elements: s.elements.filter((el) => el.id !== elementId) } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(null);
  }

  function addSlide() {
    setSlides((prev) => {
      const next = [...prev, newSlide()];
      persist(deckTitle, next);
      setActiveIndex(next.length - 1);
      return next;
    });
  }

  function deleteSlide(index) {
    if (slides.length <= 1) return;
    if (!window.confirm("Delete this slide?")) return;
    setSlides((prev) => {
      const next = prev.filter((_, i) => i !== index);
      persist(deckTitle, next);
      return next;
    });
    setActiveIndex((i) => Math.max(0, Math.min(i, slides.length - 2)));
  }

  function moveSlide(dir) {
    const target = activeIndex + dir;
    if (target < 0 || target >= slides.length) return;
    setSlides((prev) => {
      const next = [...prev];
      [next[activeIndex], next[target]] = [next[target], next[activeIndex]];
      persist(deckTitle, next);
      return next;
    });
    setActiveIndex(target);
  }

  function handleCanvasClick(e) {
    if (e.target !== canvasRef.current) { setSelectedId(null); return; }
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.min(85, Math.max(2, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(88, Math.max(4, ((e.clientY - rect.top) / rect.height) * 100));
    const el = newTextElement(x, y);
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === activeIndex ? { ...s, elements: [...s.elements, el] } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(el.id);
    newElementIdRef.current = el.id;
  }

  function startDrag(e, elementId) {
    e.preventDefault();
    e.stopPropagation();
    setSelectedId(elementId);
    const rect = canvasRef.current.getBoundingClientRect();
    dragRef.current = { elementId, rect };
    window.addEventListener("pointermove", onDragMove);
    window.addEventListener("pointerup", onDragEnd);
  }

  function onDragMove(e) {
    if (!dragRef.current) return;
    const { elementId, rect } = dragRef.current;
    const x = Math.min(92, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(94, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setSlides((prev) => prev.map((s, i) => (i === activeIndex ? { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, x, y } : el)) } : s)));
  }

  function onDragEnd() {
    window.removeEventListener("pointermove", onDragMove);
    window.removeEventListener("pointerup", onDragEnd);
    dragRef.current = null;
    setSlides((prev) => { persist(deckTitle, prev); return prev; });
  }

  async function handleUpload(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length || !user) return;
    setUploading(true);
    for (const file of files) {
      const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
      const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file);
      if (!error) {
        const { data: pub } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
        setLibraryImages((prev) => [{ name: path.split("/")[1], url: pub.publicUrl }, ...prev]);
      }
    }
    setUploading(false);
    e.target.value = "";
  }

  function placeImage(url) {
    const el = newImageElement(url, 32, 32);
    setSlides((prev) => {
      const next = prev.map((s, i) => (i === activeIndex ? { ...s, elements: [...s.elements, el] } : s));
      persist(deckTitle, next);
      return next;
    });
    setSelectedId(el.id);
  }

  function startResize(e, elementId, currentW) {
    e.preventDefault();
    e.stopPropagation();
    const rect = canvasRef.current.getBoundingClientRect();
    function onMove(ev) {
      const w = Math.min(90, Math.max(8, ((ev.clientX - rect.left) / rect.width) * 100 - 0));
      setSlides((prev) => prev.map((s, i) => (i === activeIndex ? { ...s, elements: s.elements.map((el) => (el.id === elementId ? { ...el, w } : el)) } : s)));
    }
    function onUp() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      setSlides((prev) => { persist(deckTitle, prev); return prev; });
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
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

  const slide = slides[activeIndex] || slides[0];
  const n = slides.length;

  return (
    <div className="sde-shell" onClick={() => setSelectedId(null)}>
      <style>{CSS}</style>

      <div className="sde-toolbar" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="sde-back-link" onClick={() => navigate("/library/slides")}>← Decks</button>
        <input
          className="sde-deck-title"
          value={deckTitle}
          onChange={(e) => updateDeckTitle(e.target.value)}
          placeholder="Untitled deck"
        />
        <div className="sde-toolbar-right">
          <span className={`sde-status sde-status--${status}`}>
            {status === "saving" ? "Saving…" : status === "error" ? "Couldn't save" : "Saved"}
          </span>
          <button type="button" className="sde-tool-btn" onClick={() => moveSlide(-1)} disabled={activeIndex === 0}>Move ←</button>
          <button type="button" className="sde-tool-btn" onClick={() => moveSlide(1)} disabled={activeIndex === n - 1}>Move →</button>
          <button type="button" className="sde-tool-btn" onClick={() => deleteSlide(activeIndex)} disabled={n <= 1}>Delete slide</button>
          <button type="button" className="sde-tool-btn" onClick={() => setLibraryOpen((v) => !v)}>🖼️ Images</button>
          <button type="button" className="sde-present-btn" onClick={() => openPresenter(deckId)}>Present ▶</button>
        </div>
      </div>

      <div className="sde-frame">
        <div className="sde-canvas-wrap">
          <div className="sde-canvas-frame">
            <div className="sde-instruction-bar">
              <span className="sde-badge"><span className="sde-s-dot">S</span>entivo</span>
              <input
                className="sde-title-input"
                value={slide.title}
                onChange={(e) => updateSlide(activeIndex, { title: e.target.value })}
                placeholder="Title"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="sde-canvas-body" ref={canvasRef} onClick={handleCanvasClick}>
              {slide.elements.map((el) => (
                el.type === "text" ? (
                  <div
                    key={el.id}
                    className={`sde-el sde-el--text ${selectedId === el.id ? "is-selected" : ""}`}
                    style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%` }}
                    onClick={(e) => { e.stopPropagation(); setSelectedId(el.id); }}
                  >
                    {selectedId === el.id && (
                      <div className="sde-el-toolbar" onPointerDown={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
                        <span className="sde-drag-handle" onPointerDown={(e) => startDrag(e, el.id)}>⠿</span>
                        <button type="button" onClick={() => updateElement(activeIndex, el.id, { fontSize: Math.max(11, el.fontSize - 2) })}>A-</button>
                        <span className="sde-el-size">{el.fontSize}</span>
                        <button type="button" onClick={() => updateElement(activeIndex, el.id, { fontSize: Math.min(64, el.fontSize + 2) })}>A+</button>
                        <button type="button" className={`sde-bold-btn ${el.bold ? "is-active" : ""}`} onClick={() => updateElement(activeIndex, el.id, { bold: !el.bold })}>B</button>
                        {["left", "center", "right"].map((a) => (
                          <button key={a} type="button" className={el.align === a ? "is-active" : ""} onClick={() => updateElement(activeIndex, el.id, { align: a })}>
                            {a === "left" ? "⯇" : a === "center" ? "≡" : "⯈"}
                          </button>
                        ))}
                        <span className="sde-toolbar-divider" />
                        {TEXT_COLORS.map((c) => (
                          <button
                            key={c}
                            type="button"
                            className={`sde-color-swatch ${el.color === c ? "is-active" : ""}`}
                            style={{ background: c }}
                            onClick={() => updateElement(activeIndex, el.id, { color: c })}
                          />
                        ))}
                        <span className="sde-toolbar-divider" />
                        <button type="button" className="sde-el-delete" onClick={() => deleteElement(activeIndex, el.id)}>Delete</button>
                      </div>
                    )}
                    <div
                      className="sde-el-text"
                      contentEditable
                      suppressContentEditableWarning
                      ref={(node) => {
                        if (node && newElementIdRef.current === el.id) {
                          node.focus();
                          newElementIdRef.current = null;
                        }
                      }}
                      style={{ fontSize: `${el.fontSize}px`, color: el.color, textAlign: el.align, fontWeight: el.bold ? 800 : 600 }}
                      onBlur={(e) => {
                        const text = e.currentTarget.textContent;
                        if (!text || !text.trim()) deleteElement(activeIndex, el.id);
                        else updateElement(activeIndex, el.id, { text });
                      }}
                      onClick={(e) => e.stopPropagation()}
                      data-placeholder="Type here… (click away to remove if empty)"
                    >
                      {el.text}
                    </div>
                  </div>
                ) : (
                  <div
                    key={el.id}
                    className={`sde-el sde-el--image ${selectedId === el.id ? "is-selected" : ""}`}
                    style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%` }}
                    onClick={(e) => { e.stopPropagation(); setSelectedId(el.id); }}
                    onPointerDown={(e) => startDrag(e, el.id)}
                  >
                    <img src={el.src} alt="" draggable={false} />
                    {selectedId === el.id && (
                      <>
                        <button type="button" className="sde-el-delete sde-el-delete--img" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); deleteElement(activeIndex, el.id); }}>×</button>
                        <span className="sde-resize-handle" onPointerDown={(e) => startResize(e, el.id, el.w)} />
                      </>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="sde-bottombar">
          <button type="button" className="sde-nav-btn" onClick={() => setActiveIndex((i) => Math.max(0, i - 1))} disabled={activeIndex === 0}>← Previous</button>
          <div className="sde-dots">
            {slides.map((s, i) => (
              <span key={s.id} className={i === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
          <button type="button" className="sde-nav-btn" onClick={() => (activeIndex === n - 1 ? addSlide() : setActiveIndex((i) => i + 1))}>
            {activeIndex === n - 1 ? "+ Add slide" : "Next →"}
          </button>
        </div>
      </div>

      {libraryOpen && (
        <div className="sde-library" onClick={(e) => e.stopPropagation()}>
          <div className="sde-library-head">
            <span>Image library</span>
            <button type="button" onClick={() => setLibraryOpen(false)}>×</button>
          </div>
          <button type="button" className="sde-upload-btn" onClick={() => fileInputRef.current?.click()} disabled={uploading}>
            {uploading ? "Uploading…" : "+ Upload image"}
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" multiple hidden onChange={handleUpload} />
          <div className="sde-library-grid">
            {libraryImages.length === 0 && <p className="sde-library-empty">No images yet. Upload one to use it on any slide.</p>}
            {libraryImages.map((img) => (
              <button key={img.name} type="button" className="sde-library-thumb" onClick={() => placeImage(img.url)}>
                <img src={img.url} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

:root {
  --navy: #1B2A4A;
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --coral-tint: #FFE3D9;
}

.sde-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F2F0F4;
  font-family: 'Quicksand', sans-serif;
  color: #2B2A1E;
}
.sde-shell * { box-sizing: border-box; }

.sde-missing { padding: 60px; text-align: center; color: #9A8A73; }

.sde-toolbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  background: #FFFFFF;
  border-bottom: 1px solid #EAE7EF;
}
.sde-back-link { font-weight: 700; font-size: 13px; color: var(--coral); background: none; border: none; cursor: pointer; flex-shrink: 0; }
.sde-deck-title {
  flex: 1;
  min-width: 0;
  font-family: 'Fredoka', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: var(--navy);
  background: none;
  border: none;
  outline: none;
  padding: 6px 8px;
  border-radius: 8px;
}
.sde-deck-title:focus { background: #F5F3FA; }
.sde-toolbar-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; flex-wrap: wrap; }
.sde-status { font-size: 11px; font-weight: 700; color: #9A93A8; margin-right: 4px; }
.sde-status--saving { color: #E5A83F; }
.sde-status--error { color: #D6392A; }
.sde-tool-btn {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--navy);
  background: #F1F0F6;
  border: none;
  border-radius: 8px;
  padding: 7px 11px;
  cursor: pointer;
}
.sde-tool-btn:disabled { opacity: 0.4; cursor: default; }
.sde-present-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF9A6B 0%, var(--coral-dark) 100%);
  border: none;
  border-radius: 10px;
  padding: 9px 16px;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(229,80,47,0.28);
}

.sde-frame {
  max-width: 1040px;
  width: 100%;
  margin: 24px auto;
  padding: 0 20px;
}

.sde-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: #FFFFFF; color: var(--navy);
  padding: 6px 14px 6px 6px; border-radius: 999px;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 12.5px;
  box-shadow: 0 3px 0 var(--coral-dark);
  margin-bottom: 10px;
}
.sde-s-dot {
  width: 18px; height: 18px; border-radius: 50%;
  background: var(--coral); color: #fff;
  display: flex; align-items: center; justify-content: center; font-size: 10px;
}

.sde-canvas-wrap { margin-top: 4px; }
.sde-canvas-frame {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 24px 50px -14px rgba(27,42,74,0.24);
  overflow: hidden;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
}
.sde-instruction-bar { flex-shrink: 0; background: var(--navy); padding: 18px 22px 20px; display: flex; flex-direction: column; align-items: flex-start; }
.sde-title-input {
  width: 100%;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #FFF6E9;
  background: none;
  border: none;
  outline: none;
}
.sde-title-input::placeholder { color: rgba(255,246,233,0.4); }

.sde-canvas-body { position: relative; flex: 1; min-height: 0; cursor: crosshair; }

.sde-el { position: absolute; }
.sde-el--text { cursor: text; }
.sde-el-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  line-height: 1.4;
  outline: none;
  min-width: 20px;
  min-height: 1.4em;
  cursor: text;
}
.sde-el-text:empty::before { content: attr(data-placeholder); opacity: 0.3; }
.sde-el.is-selected .sde-el-text { outline: 1.5px dashed var(--coral-tint); outline-offset: 4px; }

.sde-el-toolbar {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 3px;
  background: var(--navy);
  border-radius: 8px;
  padding: 4px 5px;
  box-shadow: 0 8px 18px rgba(27,42,74,0.3);
  white-space: nowrap;
  z-index: 10;
}
.sde-el-toolbar button, .sde-drag-handle {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #FFFFFF;
  background: rgba(255,255,255,0.12);
  border: none;
  border-radius: 5px;
  min-width: 22px;
  height: 22px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  padding: 0 5px;
}
.sde-el-toolbar button.is-active { background: var(--coral); }
.sde-drag-handle { cursor: grab; }
.sde-el-delete { background: rgba(255,107,74,0.3) !important; padding: 0 8px; }
.sde-el-size { font-size: 10.5px; font-weight: 700; color: rgba(255,255,255,0.6); min-width: 18px; text-align: center; }
.sde-bold-btn { font-weight: 900 !important; }
.sde-toolbar-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.15); margin: 0 2px; }
.sde-color-swatch {
  width: 18px; height: 18px; min-width: 18px; border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.3);
  padding: 0;
  cursor: pointer;
}
.sde-color-swatch.is-active { border-color: #FFFFFF; box-shadow: 0 0 0 2px var(--coral); }

.sde-el--image { cursor: grab; }
.sde-el--image img { width: 100%; display: block; border-radius: 6px; pointer-events: none; }
.sde-el--image.is-selected img { outline: 2px solid var(--coral); outline-offset: 2px; }
.sde-el-delete--img {
  position: absolute; top: -10px; right: -10px;
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--coral); color: #fff; border: 2px solid #fff;
  font-size: 12px; cursor: pointer;
}
.sde-resize-handle {
  position: absolute; bottom: -6px; right: -6px;
  width: 14px; height: 14px; border-radius: 50%;
  background: #FFFFFF; border: 2px solid var(--coral);
  cursor: nwse-resize;
}

.sde-bottombar { display: flex; align-items: center; justify-content: space-between; padding: 16px 2px 0; }
.sde-nav-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--coral); color: #FFFFFF; border: none;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px;
  padding: 11px 20px; border-radius: 14px;
  box-shadow: 0 4px 0 var(--coral-dark);
  cursor: pointer;
}
.sde-nav-btn:disabled { background: #EFEDF4; color: #C4BFD1; box-shadow: 0 4px 0 #E1DEE8; cursor: default; }
.sde-dots { display: flex; align-items: center; gap: 6px; }
.sde-dots span { width: 7px; height: 7px; border-radius: 50%; background: #DAD6E4; cursor: pointer; }
.sde-dots span.is-active { width: 22px; border-radius: 4px; background: var(--coral); }

.sde-library {
  position: fixed;
  top: 0; right: 0;
  width: 300px;
  height: 100vh;
  background: #FFFFFF;
  border-left: 1px solid #EAE7EF;
  box-shadow: -12px 0 30px rgba(27,42,74,0.14);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 50;
}
.sde-library-head { display: flex; align-items: center; justify-content: space-between; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; color: var(--navy); }
.sde-library-head button { background: none; border: none; font-size: 18px; cursor: pointer; color: #9A93A8; }
.sde-upload-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px;
  color: var(--coral); background: var(--coral-tint);
  border: 1px dashed var(--coral); border-radius: 10px;
  padding: 10px; cursor: pointer;
}
.sde-upload-btn:disabled { opacity: 0.6; cursor: default; }
.sde-library-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; overflow-y: auto; }
.sde-library-empty { grid-column: 1/-1; font-size: 12px; color: #9A93A8; text-align: center; padding: 20px 0; }
.sde-library-thumb { padding: 0; border: 1px solid #EAE7EF; border-radius: 8px; overflow: hidden; cursor: pointer; aspect-ratio: 1; background: #F7F6FA; }
.sde-library-thumb img { width: 100%; height: 100%; object-fit: cover; }

@media (max-width: 720px) {
  .sde-toolbar { flex-wrap: wrap; }
  .sde-library { width: 100%; }
}
`;

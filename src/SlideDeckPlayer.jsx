import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";

export default function SlideDeckPlayer() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("slide_decks")
        .select("title, slides")
        .eq("id", deckId)
        .single();
      if (!isMounted) return;
      if (error || !data) {
        setNotFound(true);
      } else {
        setDeck(data);
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [deckId]);

  const slides = deck?.slides || [];
  const n = slides.length;

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setIndex((i) => Math.min(i + 1, n - 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [n]);

  if (loading) return <div className="spl-shell"><style>{CSS}</style></div>;

  if (notFound || !deck) {
    return (
      <div className="spl-shell">
        <style>{CSS}</style>
        <div className="spl-missing">This deck wasn't found.</div>
      </div>
    );
  }

  const slide = slides[index] || slides[0];

  return (
    <div className="spl-shell">
      <style>{CSS}</style>

      <div className="spl-topbar">
        <span className="spl-badge"><span className="spl-s-dot">S</span>entivo</span>
        <span className="spl-counter">{index + 1} / {n}</span>
      </div>

      <div className="spl-canvas-wrap">
        <div className="spl-canvas-frame">
          {slide.title && (
            <div className="spl-instruction-bar">
              <h2 className="spl-title">{slide.title}</h2>
            </div>
          )}
          <div className="spl-canvas-body">
            {(slide.elements || []).map((el) => (
              el.type === "text" ? (
                <div
                  key={el.id}
                  className="spl-el spl-el--text"
                  style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%`, fontSize: `${el.fontSize}px`, color: el.color, textAlign: el.align }}
                >
                  {el.text}
                </div>
              ) : (
                <div key={el.id} className="spl-el spl-el--image" style={{ left: `${el.x}%`, top: `${el.y}%`, width: `${el.w}%` }}>
                  <img src={el.src} alt="" />
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      <div className="spl-bottombar">
        <button type="button" className="spl-nav-btn" onClick={() => setIndex((i) => Math.max(i - 1, 0))} disabled={index === 0}>← Previous</button>
        <div className="spl-dots">
          {slides.map((s, i) => (
            <span key={s.id} className={i === index ? "is-active" : ""} onClick={() => setIndex(i)} />
          ))}
        </div>
        <button type="button" className="spl-nav-btn" onClick={() => setIndex((i) => Math.min(i + 1, n - 1))} disabled={index === n - 1}>Next →</button>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

:root {
  --navy: #1B2A4A;
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
}

.spl-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #F2F0F4;
  font-family: 'Quicksand', sans-serif;
  padding: 20px 28px;
}
.spl-shell * { box-sizing: border-box; }

.spl-missing { margin: auto; color: #9A93A8; font-size: 14px; }

.spl-topbar { flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; padding: 0 2px 14px; }
.spl-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--navy); color: #FFFFFF;
  padding: 8px 16px 8px 8px; border-radius: 999px;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px;
  box-shadow: 0 4px 0 var(--coral-dark);
}
.spl-s-dot {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--coral); color: #fff;
  display: flex; align-items: center; justify-content: center; font-size: 12px;
}
.spl-counter { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; color: #9A93A8; }

.spl-canvas-wrap { flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }
.spl-canvas-frame {
  width: 100%;
  max-width: 1100px;
  max-height: 100%;
  aspect-ratio: 16/9;
  background: #FFFFFF;
  border-radius: 18px;
  box-shadow: 0 30px 60px -14px rgba(27,42,74,0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.spl-instruction-bar { flex-shrink: 0; background: var(--navy); padding: clamp(14px, 2.4vw, 22px) clamp(20px, 3vw, 30px); }
.spl-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(20px, 3vw, 30px); color: #FFF6E9; margin: 0; }

.spl-canvas-body { position: relative; flex: 1; min-height: 0; }
.spl-el { position: absolute; }
.spl-el--text { font-family: 'Quicksand', sans-serif; font-weight: 600; line-height: 1.4; white-space: pre-wrap; }
.spl-el--image img { width: 100%; display: block; border-radius: 6px; }

.spl-bottombar { flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; padding: 16px 2px 0; }
.spl-nav-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--coral); color: #FFFFFF; border: none;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px;
  padding: 11px 20px; border-radius: 14px;
  box-shadow: 0 4px 0 var(--coral-dark);
  cursor: pointer;
}
.spl-nav-btn:disabled { background: #EFEDF4; color: #C4BFD1; box-shadow: 0 4px 0 #E1DEE8; cursor: default; }
.spl-dots { display: flex; align-items: center; gap: 6px; }
.spl-dots span { width: 7px; height: 7px; border-radius: 50%; background: #DAD6E4; cursor: pointer; }
.spl-dots span.is-active { width: 22px; border-radius: 4px; background: var(--coral); }
`;

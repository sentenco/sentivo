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

      <div className="spl-stage" onClick={() => setIndex((i) => Math.min(i + 1, n - 1))}>
        <div className="spl-frame">
          <SlideView slide={slide} />
        </div>
      </div>

      <div className="spl-bar" onClick={(e) => e.stopPropagation()}>
        <div className="spl-brand"><span className="spl-brand-s">S</span>entivo</div>
        <div className="spl-nav">
          <button type="button" className="spl-nav-btn" onClick={() => setIndex((i) => Math.max(i - 1, 0))} disabled={index === 0}>← Prev</button>
          <span className="spl-count">{index + 1} / {n}</span>
          <button type="button" className="spl-nav-btn" onClick={() => setIndex((i) => Math.min(i + 1, n - 1))} disabled={index === n - 1}>Next →</button>
        </div>
      </div>
    </div>
  );
}

function SlideView({ slide }) {
  if (!slide) return null;
  if (slide.layout === "bullets") {
    const points = (slide.body || "").split("\n").map((p) => p.trim()).filter(Boolean);
    return (
      <div className="spv-bullets">
        <h2 className="spv-heading">{slide.heading || "Untitled slide"}</h2>
        <ul className="spv-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    );
  }
  if (slide.layout === "image-text") {
    return (
      <div className="spv-image-text">
        <div className="spv-image-box">
          <span>🖼️</span>
          <p>{slide.imageNote || ""}</p>
        </div>
        <div className="spv-image-copy">
          <h2 className="spv-heading">{slide.heading || "Untitled slide"}</h2>
          <p className="spv-body">{slide.body}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="spv-title">
      <h2 className="spv-heading spv-heading--big">{slide.heading || "Untitled slide"}</h2>
      {slide.body && <p className="spv-body">{slide.body}</p>}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.spl-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #FFF3E9;
  font-family: 'Quicksand', sans-serif;
}
.spl-shell * { box-sizing: border-box; }

.spl-missing { margin: auto; color: #9A8A73; font-size: 14px; }

.spl-stage {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: pointer;
}

.spl-frame {
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(229,98,58,0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(30px, 5vw, 70px);
}

.spv-heading { font-family: 'Fredoka', sans-serif; font-weight: 600; color: #2B2A1E; margin: 0 0 16px; }
.spv-heading--big { font-size: clamp(28px, 5vw, 48px); text-align: center; }
.spv-body { font-size: clamp(14px, 1.6vw, 19px); line-height: 1.65; color: #6B6455; }
.spv-title { text-align: center; }
.spv-bullets { width: 100%; }
.spv-list { margin: 0; padding-left: 28px; font-size: clamp(14px, 1.8vw, 21px); line-height: 2; color: #4A4436; }
.spv-image-text { display: flex; gap: 40px; align-items: center; width: 100%; }
.spv-image-box {
  flex: 1;
  aspect-ratio: 4/3;
  background: #FFF3E9;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 40px;
  color: #C9924E;
}
.spv-image-box p { font-size: 12.5px; color: #B48A5A; text-align: center; padding: 0 16px; }
.spv-image-copy { flex: 1.2; }

.spl-bar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: #FFFFFF;
  border-top: 1px solid #F5E3D6;
}
.spl-brand { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 700; color: #2B2A1E; }
.spl-brand-s { color: #E5623A; }
.spl-nav { display: flex; align-items: center; gap: 14px; }
.spl-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #E5623A;
  background: rgba(229,98,58,0.08);
  border: none;
  border-radius: 8px;
  padding: 7px 14px;
  cursor: pointer;
}
.spl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spl-count { font-size: 11.5px; font-weight: 700; color: #9A8A73; min-width: 44px; text-align: center; }
`;

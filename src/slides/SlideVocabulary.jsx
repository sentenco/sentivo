import { useState } from "react";
import SlideHeader from "./SlideHeader";

export default function SlideVocabulary({ content, lesson }) {
  const words = content.words || [];
  const [zoomed, setZoomed] = useState(null);
  const isAdult = lesson?.age_track === "adults";

  return (
    <div className={`slv-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Vocabulary"}
        title={content.title || "New Words"}
        subtitle={content.subtitle || "Tap a word to make it BIG!"}
        isAdult={isAdult}
      />
      <div className="slv-grid">
        {words.slice(0, 4).map((w, i) => (
          <button type="button" className={`slv-tile ${i % 2 === 1 ? "slv-tile--alt" : ""}`} key={i} onClick={() => setZoomed(w)}>
            <span className="slv-tile-badge">{i + 1}</span>
            <span className="slv-tile-word">{w.word}</span>
            {w.hint && <span className="slv-tile-hint">{w.hint}</span>}
            <span className="slv-tile-tap" aria-hidden="true">🔍</span>
          </button>
        ))}
      </div>

      {zoomed && (
        <div className="slv-overlay" onClick={() => setZoomed(null)}>
          <div className="slv-zoom-card">{zoomed.word}</div>
        </div>
      )}
    </div>
  );
}

const CSS = `
.slv-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.slv-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 12px;
  padding: 10px 30px 18px;
}
.slv-tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 18px;
  padding: 10px 16px;
  cursor: pointer;
  font: inherit;
  background: var(--k-bg-cool, #FFF3D2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.slv-tile--alt { background: var(--k-tint, #FFE4A3); }
.slv-tile:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.slv-tile-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: var(--k-accent-dark, #E8A400);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
}
.slv-tile-word {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 21px;
  line-height: 1.2;
  color: #1B2A4A;
}
.slv-tile-hint {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #8A8272;
}
.slv-tile-tap { position: absolute; bottom: 8px; right: 10px; font-size: 13px; opacity: 0.4; }

.slv-overlay {
  position: absolute;
  inset: 0;
  background: rgba(27, 42, 74, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  cursor: pointer;
  padding: 40px;
}
.slv-zoom-card {
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 46px 56px;
  border-radius: 26px;
  background: var(--k-accent, #FFC933);
  box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  cursor: default;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.15;
  color: #fff;
}

/* ── Adults theme: calm 2x2 grid, no badges ── */
.slv-slide.is-adult .slv-grid { background: #F7F5EF; }
.slv-slide.is-adult .slv-tile {
  border-radius: 5px;
  background: #fff;
  border: 1px solid #DEDAD0;
}
.slv-slide.is-adult .slv-tile--alt { background: #fff; }
.slv-slide.is-adult .slv-tile:hover { transform: none; border-color: #B7ADA0; box-shadow: none; }
.slv-slide.is-adult .slv-tile-badge {
  background: transparent;
  color: #B7ADA0;
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  width: auto;
  height: auto;
  font-size: 12px;
}
.slv-slide.is-adult .slv-tile-word {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 18px;
}
.slv-slide.is-adult .slv-tile-tap { display: none; }
.slv-slide.is-adult .slv-overlay { background: rgba(27, 42, 74, 0.72); }
.slv-slide.is-adult .slv-zoom-card {
  background: #1B2A4A;
  border-radius: 8px;
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 38px;
}
`;

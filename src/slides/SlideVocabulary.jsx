import { useState } from "react";
import SlideHeader from "./SlideHeader";

const ROW_COLORS = ["var(--k-accent, #FFB300)", "var(--k-pop, #1E96C8)", "var(--k-secondary-dark, #D9A100)"];

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
      <div className="slv-list">
        {words.slice(0, 6).map((w, i) => (
          <button type="button" className="slv-row" key={i} onClick={() => setZoomed(w)}>
            <span className="slv-row-badge" style={{ background: ROW_COLORS[i % ROW_COLORS.length] }}>
              {i + 1}
            </span>
            <span className="slv-row-word">{w.word}</span>
            {w.hint && <span className="slv-row-hint">{w.hint}</span>}
            <span className="slv-row-tap" aria-hidden="true">🔍</span>
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
.slv-list {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 12px 34px 22px;
  overflow: hidden;
}
.slv-row {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  border: none;
  border-radius: 999px;
  padding: 14px 20px 14px 10px;
  cursor: pointer;
  font: inherit;
  text-align: left;
  background: var(--k-bg-cool, #FFF0C2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.slv-list .slv-row:nth-child(3n+2) { background: var(--k-tint, #FFE59A); }
.slv-list .slv-row:nth-child(3n+3) { background: var(--k-bg, #FFFAF0); box-shadow: inset 0 0 0 2px var(--k-tint, #FFE59A); }
.slv-row:hover { transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0,0,0,0.1); }
.slv-row-badge {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
}
.slv-row-word {
  flex: 1;
  min-width: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 23px;
  color: #1B2A4A;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slv-row-hint {
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #94A0B8;
}
.slv-row-tap { flex-shrink: 0; font-size: 16px; opacity: 0.45; }

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
  background: var(--k-accent, #FFB300);
  box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  cursor: default;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  line-height: 1.15;
  color: #fff;
}

/* ── Adults theme: calm single-column word list ── */
.slv-slide.is-adult .slv-list { background: #F7F5EF; padding: 14px 32px; gap: 6px; }
.slv-slide.is-adult .slv-row {
  border-radius: 5px;
  background: #fff;
  border: 1px solid #DEDAD0;
  padding: 10px 16px;
}
.slv-slide.is-adult .slv-list .slv-row:nth-child(3n+2),
.slv-slide.is-adult .slv-list .slv-row:nth-child(3n+3) { background: #fff; box-shadow: none; }
.slv-slide.is-adult .slv-row:hover { transform: none; border-color: #B7ADA0; box-shadow: none; }
.slv-slide.is-adult .slv-row-badge {
  background: transparent !important;
  color: #B7ADA0;
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  width: auto;
  height: auto;
  font-size: 15px;
}
.slv-slide.is-adult .slv-row-word {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 17px;
}
.slv-slide.is-adult .slv-row-tap { display: none; }
.slv-slide.is-adult .slv-overlay { background: rgba(27, 42, 74, 0.72); }
.slv-slide.is-adult .slv-zoom-card {
  background: #1B2A4A;
  border-radius: 8px;
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 38px;
}
`;

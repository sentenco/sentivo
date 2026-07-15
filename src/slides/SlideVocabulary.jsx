import { useState } from "react";
import SlideHeader from "./SlideHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const ROW_COLORS = ["var(--k-accent, #FF8FA8)", "var(--k-pop, #7FC8F8)", "var(--k-secondary-dark, #E8B23D)"];

export default function SlideVocabulary({ content, lesson }) {
  const words = content.words || [];
  const [zoomed, setZoomed] = useState(null);
  const [popped, setPopped] = useState(null);
  const isAdult = lesson?.age_track === "adults";

  function handleRowClick(w, i) {
    const hasImage = !!(w.image_url || w.image_note);
    if (hasImage) {
      setZoomed(w);
    } else {
      setPopped(i);
      setTimeout(() => setPopped((cur) => (cur === i ? null : cur)), 450);
    }
  }

  return (
    <div className={`slv-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Vocabulary"}
        title={content.title || "New Words"}
        subtitle={content.subtitle || "Tap a word — say it out loud!"}
        isAdult={isAdult}
      />
      <div className="slv-list">
        {words.slice(0, 6).map((w, i) => {
          const hasImage = !!(w.image_url || w.image_note);
          return (
            <button
              type="button"
              key={i}
              className={`slv-row ${popped === i ? "is-popped" : ""}`}
              onClick={() => handleRowClick(w, i)}
            >
              <span className="slv-row-badge" style={{ background: ROW_COLORS[i % ROW_COLORS.length] }}>
                {i + 1}
              </span>
              <span className="slv-row-word">{w.word}</span>
              {w.hint && <span className="slv-row-hint">{w.hint}</span>}
              {hasImage && (
                <span className="slv-row-thumb">
                  {w.image_url ? (
                    <img src={w.image_url} alt="" />
                  ) : (
                    <span className="slv-row-thumb-ph" aria-hidden="true">🖼️</span>
                  )}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {zoomed && (
        <div className="slv-overlay" onClick={() => setZoomed(null)}>
          <div className="slv-zoom-card">
            <div
              className="slv-zoom-top"
              style={{ background: zoomed.image_url ? (zoomed.bg || "var(--k-tint, #FFF3D9)") : undefined }}
            >
              {zoomed.image_url ? (
                <img src={zoomed.image_url} alt={zoomed.word || ""} />
              ) : (
                <ImagePlaceholder note={zoomed.image_note} />
              )}
            </div>
            <div className="slv-zoom-bottom">{zoomed.word}</div>
          </div>
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
  gap: 9px;
  padding: 10px 30px 18px;
  overflow: hidden;
}
.slv-row {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 14px;
  border: none;
  border-radius: 999px;
  padding: 9px 16px 9px 9px;
  cursor: pointer;
  font: inherit;
  text-align: left;
  background: var(--k-bg-cool, #FFEEF2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.slv-list .slv-row:nth-child(3n+2) { background: var(--k-tint, #FFF3D9); }
.slv-list .slv-row:nth-child(3n+3) { background: var(--k-bg, #FFF8F3); box-shadow: inset 0 0 0 2px var(--k-tint, #FFF3D9); }
.slv-row:hover { transform: translateY(-1px); box-shadow: 0 3px 10px rgba(0,0,0,0.08); }
.slv-row.is-popped { animation: slv-bounce 0.45s ease; }
@keyframes slv-bounce {
  0% { transform: scale(1); }
  35% { transform: scale(1.035) rotate(-0.5deg); }
  70% { transform: scale(0.99) rotate(0.5deg); }
  100% { transform: scale(1); }
}
.slv-row-badge {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
}
.slv-row-word {
  flex: 1;
  min-width: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #1B2A4A;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slv-row-hint {
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #94A0B8;
}
.slv-row-thumb {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}
.slv-row-thumb img { width: 100%; height: 100%; object-fit: cover; }
.slv-row-thumb-ph { font-size: 19px; }

.slv-overlay {
  position: absolute;
  inset: 0;
  background: rgba(27, 42, 74, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  cursor: pointer;
}
.slv-zoom-card {
  width: 260px;
  height: 260px;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.3);
  cursor: default;
}
.slv-zoom-top {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--k-tint, #FFF3D9);
}
.slv-zoom-top .img-ph { border: none; border-radius: 0; }
.slv-zoom-top img {
  max-width: 75%;
  max-height: 75%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slv-zoom-bottom {
  background: #fff;
  text-align: center;
  padding: 13px 10px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #1B2A4A;
}

/* ── Adults theme: calm single-column word list, no bounce/badges ── */
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
.slv-slide.is-adult .slv-row.is-popped { animation: none; }
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
.slv-slide.is-adult .slv-row-thumb { border-radius: 4px; }
.slv-slide.is-adult .slv-overlay { background: rgba(27, 42, 74, 0.72); }
.slv-slide.is-adult .slv-zoom-card { border-radius: 6px; box-shadow: 0 16px 40px rgba(0,0,0,0.25); }
.slv-slide.is-adult .slv-zoom-bottom { font-family: 'Source Serif 4', serif; font-weight: 600; }
`;

import { useState } from "react";
import SlideHeader from "./SlideHeader";
import ImagePlaceholder from "./ImagePlaceholder";

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
        subtitle={content.subtitle || "Tap a card to see it bigger."}
        isAdult={isAdult}
      />
      <div className="slv-grid">
        {words.slice(0, 4).map((w, i) => (
          <button
            type="button"
            className="slv-card"
            key={i}
            onClick={() => setZoomed(w)}
          >
            <div
              className="slv-card-top"
              style={{ background: w.image_url ? (w.bg || "#F4F0FF") : undefined }}
            >
              {w.image_url ? (
                <img src={w.image_url} alt={w.word || ""} />
              ) : (
                <ImagePlaceholder note={w.image_note} compact />
              )}
            </div>
            <div className="slv-card-bottom">{w.word}</div>
          </button>
        ))}
      </div>

      {zoomed && (
        <div className="slv-overlay" onClick={() => setZoomed(null)}>
          <div className="slv-zoom-card">
            <div
              className="slv-zoom-top"
              style={{ background: zoomed.image_url ? (zoomed.bg || "#F4F0FF") : undefined }}
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
.slv-grid {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  padding: 16px 20px;
}
.slv-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition: transform 0.15s ease;
}
.slv-card:hover { transform: translateY(-2px); }
.slv-card-top {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--k-tint, #F4F0FF);
}
.slv-card-top .img-ph { border: none; border-radius: 0; }
.slv-card-top img {
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slv-card-bottom {
  background: #fff;
  text-align: center;
  padding: 6px 8px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #1B2A4A;
}
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
  background: var(--k-tint, #F4F0FF);
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
  padding: 12px 8px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #1B2A4A;
}

/* ── Adults theme ── */
.slv-slide.is-adult .slv-grid { background: #F7F5EF; }
.slv-slide.is-adult .slv-card {
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #DEDAD0;
}
.slv-slide.is-adult .slv-card:hover { transform: none; border-color: #B7ADA0; }
.slv-slide.is-adult .slv-card-bottom {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 17px;
  border-top: 1px solid #EDEAE2;
}
.slv-slide.is-adult .slv-overlay { background: rgba(27, 42, 74, 0.72); }
.slv-slide.is-adult .slv-zoom-card { border-radius: 6px; box-shadow: 0 16px 40px rgba(0,0,0,0.25); }
.slv-slide.is-adult .slv-zoom-bottom { font-family: 'Source Serif 4', serif; font-weight: 600; }
`;

import { useState } from "react";
import SlideHeader from "./SlideHeader";

export default function SlideVocabulary({ content }) {
  const words = content.words || [];
  const [zoomed, setZoomed] = useState(null);

  return (
    <div className="slv-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Vocabulary"}
        title={content.title || "New Words"}
        subtitle={content.subtitle || "Tap a card to see it bigger."}
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
              style={{ background: w.bg || "#F4F0FF" }}
            >
              {w.image_url && <img src={w.image_url} alt={w.word || ""} />}
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
              style={{ background: zoomed.bg || "#F4F0FF" }}
            >
              {zoomed.image_url && (
                <img src={zoomed.image_url} alt={zoomed.word || ""} />
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
}
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
}
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
`;

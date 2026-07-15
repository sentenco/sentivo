import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import ZoomOverlay from "./ZoomOverlay";

export default function SlideWarmup({ content, lesson }) {
  const questions = content.questions || [];
  const isAdult = lesson?.age_track === "adults";
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className={`slw-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <div className="slw-image-area">
        <span className="slw-pill">Warm-up</span>
        {content.image_url ? (
          <button type="button" className="slw-image-btn" onClick={() => setZoomed(true)} aria-label="Tap to make bigger">
            <img className="slw-image" src={content.image_url} alt="" />
          </button>
        ) : content.display ? (
          <button type="button" className="slw-display" onClick={() => setZoomed(true)} aria-label="Tap to make bigger">
            {content.display}
          </button>
        ) : content.image_note ? (
          <div className="slw-placeholder">
            <ImagePlaceholder note={content.image_note} compact />
          </div>
        ) : null}
      </div>
      <div className="slw-bottom">
        <h2 className="slw-title">{content.title || "What do you see?"}</h2>
        <div className="slw-questions">
          {questions.map((q, i) => (
            <span className="slw-chip" key={i}>
              {q}
            </span>
          ))}
        </div>
      </div>
      <ZoomOverlay active={zoomed} onClose={() => setZoomed(false)}>
        {content.image_url ? (
          <img src={content.image_url} alt="" className="slw-image-big" />
        ) : (
          <span className="slw-display-big" aria-hidden="true">{content.display}</span>
        )}
      </ZoomOverlay>
    </div>
  );
}

const CSS = `
.slw-slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.slw-image-area {
  position: relative;
  height: 66%;
  background: var(--k-bg, #FFFEF8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.slw-placeholder { width: 100%; height: 100%; padding: 14px; box-sizing: border-box; }
.slw-image-btn { border: none; background: none; padding: 0; cursor: pointer; max-width: 100%; max-height: 100%; }
.slw-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slw-image-big { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 16px; }
.slw-display {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 6vw, 44px);
  letter-spacing: 4px;
  color: #1B2A4A;
  text-align: center;
  padding: 0 24px;
  border: none;
  background: none;
  cursor: pointer;
}
.slw-display-big {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 160px;
  line-height: 1;
}
.slw-pill {
  position: absolute;
  top: 12px;
  left: 16px;
  background: #fff;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}
.slw-bottom {
  flex: 1;
  min-height: 0;
  background: var(--k-accent, #FFF4AA);
  padding: 14px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.slw-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #1B2A4A;
  margin: 0;
}
.slw-questions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.slw-chip {
  background: #fff;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}

/* ── Adults theme ── */
.slw-slide.is-adult .slw-image-area { background: #F7F5EF; }
.slw-slide.is-adult .slw-pill {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  background: #fff;
  border: 1px solid #DEDAD0;
  border-radius: 3px;
  box-shadow: none;
  color: #6B6458;
}
.slw-slide.is-adult .slw-display {
  font-family: 'Source Serif 4', serif;
  letter-spacing: 0.5px;
  color: #1B2A4A;
}
.slw-slide.is-adult .slw-bottom {
  background: #FFFFFF;
  border-top: 1px solid #EDEAE2;
  gap: 12px;
}
.slw-slide.is-adult .slw-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 18px;
  color: #1B2A4A;
}
.slw-slide.is-adult .slw-chip {
  background: #fff;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13px;
  border: 1px solid #DEDAD0;
  border-radius: 4px;
  box-shadow: none;
}
`;

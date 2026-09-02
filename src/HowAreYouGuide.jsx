import React, { useEffect, useState } from "react";
import { LESSON_GUIDE, StarIcon, styles as lessonStyles } from "./HowAreYouLesson";

const CLOUD_VARIANTS = [
  { a: { bottom: 90, right: -20 }, b: { top: 90, left: -25 } },
  { a: { top: -30, left: 120 }, b: { bottom: -20, right: 90 } },
  { a: { top: -20, right: 60 }, b: { bottom: 100, left: -15 } },
  { a: { bottom: -15, left: 60 }, b: { top: 60, right: -20 } },
];

export default function HowAreYouGuide() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "hag-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = lessonStyles + guideStyles;
    document.head.appendChild(tag);
  }, []);

  const total = LESSON_GUIDE.length;
  const g = LESSON_GUIDE[i];
  const cloud = CLOUD_VARIANTS[i % CLOUD_VARIANTS.length];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  function exit() {
    window.close();
  }

  return (
    <div className="hal-wrap">
      <div className="deck-single">
        <div className="slide hag-slide">
          <span className="cloud cloud--a" style={cloud.a} />
          <span className="cloud cloud--b" style={cloud.b} />
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
              <span className="brand-word">entivo</span>
            </div>
            <div className="stage-chip">
              <span className="stage-name">{g.stage}</span>
              {g.time && <span className="stage-time">{g.time}</span>}
            </div>
          </div>

          <div className="slide-body hag-body">
            <div className="hag-slide-num">Teacher Guide &middot; Slide {i + 1}</div>
            {g.note === null ? (
              <p className="hag-empty">
                <StarIcon size={30} />
                No notes needed here, just enjoy the moment with your student.
              </p>
            ) : Array.isArray(g.note) ? (
              <div className="hag-steps">
                {g.note.map((step, idx) => (
                  <div className="hag-step" key={idx}>
                    <span className="hag-step-num">{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="hag-note">{g.note}</p>
            )}
          </div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Close Guide" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const guideStyles = `
.hag-body { align-items: center; text-align: center; gap: 12px; }
.hag-slide-num { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 4px; }
.hag-note { font-size: 17px; font-weight: 600; color: var(--ink); line-height: 1.7; max-width: 520px; margin: 0 auto; position: relative; z-index: 1; }
.hag-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: var(--ink-soft); max-width: 420px; margin: 0 auto; position: relative; z-index: 1; }
.hag-steps { display: flex; flex-direction: column; gap: 14px; max-width: 520px; margin: 0 auto; text-align: left; position: relative; z-index: 1; }
.hag-step { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; font-weight: 600; color: var(--ink); line-height: 1.5; }
.hag-step-num { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: var(--coral); color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 11px; font-weight: 700; }
`;

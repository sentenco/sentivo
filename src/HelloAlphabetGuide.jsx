import React, { useEffect, useState } from "react";
import { LESSON_GUIDE, StarIcon, styles as lessonStyles } from "./HelloAlphabetLesson";

export default function HelloAlphabetGuide() {
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

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="hal-wrap hag-wrap">
      <div className="deck-summary">
        <div>
          <div className="deck-summary-title">Teacher Guide: Hello, Alphabet!</div>
          <div className="deck-summary-sub">Unit 1, Lesson 1 &middot; notes for the teacher only, the student never sees this window</div>
        </div>
        <div className="deck-summary-right">
          <button className="exit-btn" onClick={() => window.close()}>Close</button>
        </div>
      </div>

      <div className="deck-single">
        <div className="slide hag-slide" style={{ "--accent": "#7A6BC7", "--accent-light": "#E9E5FA", "--accent-deep": "#4E3FA0" }}>
          <div className="slide-header">
            <div className="brand-mark"><span className="accent-s">5</span>entivo</div>
            <div className="slide-tags">
              <span className="stage-tag">{g.stage}</span>
              {g.time && <span className="time-tag">{g.time}</span>}
            </div>
          </div>
          <div className="slide-body hag-body">
            <div className="hag-slide-num">Slide {i + 1}</div>
            {g.note === null ? (
              <p className="hag-empty">
                <StarIcon size={28} fill="var(--lavender)" />
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
            <button className={`nav-btn ${i === 0 ? "is-disabled" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <span className="footer-progress">{i + 1} / {total}</span>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? window.close() : go(1))}>
              {i === total - 1 ? "Close Guide" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const guideStyles = `
.hag-slide { min-height: 340px; }
.hag-body { align-items: center; text-align: center; gap: 10px; }
.hag-slide-num { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 10px; }
.hag-note { font-size: 16px; font-weight: 600; color: var(--ink); line-height: 1.7; max-width: 520px; margin: 0 auto; }
.hag-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; color: var(--ink-soft); max-width: 420px; margin: 0 auto; }
.hag-steps { display: flex; flex-direction: column; gap: 14px; max-width: 520px; margin: 0 auto; text-align: left; }
.hag-step { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; font-weight: 600; color: var(--ink); line-height: 1.5; }
.hag-step-num { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: var(--lavender); color: #fff; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-size: 11px; font-weight: 700; }
`;

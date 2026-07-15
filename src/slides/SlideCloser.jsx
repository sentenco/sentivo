import { useState } from "react";
import ZoomOverlay from "./ZoomOverlay";

const CONFETTI = [
  { top: "9%", left: "9%", size: 14, rotate: -14 },
  { top: "16%", left: "85%", size: 10, rotate: 18 },
  { top: "70%", left: "6%", size: 12, rotate: 10 },
  { top: "80%", left: "90%", size: 16, rotate: -20 },
  { top: "12%", left: "48%", size: 8, rotate: 4 },
  { top: "88%", left: "44%", size: 10, rotate: 16 },
  { top: "42%", left: "94%", size: 9, rotate: -8 },
  { top: "50%", left: "3%", size: 11, rotate: 24 },
];

export default function SlideCloser({ content }) {
  const [zoomed, setZoomed] = useState(false);
  const sticker = content.sticker || "🌟";
  return (
    <div className="slcl-slide">
      <style>{CSS}</style>
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className={`slcl-confetti ${i % 2 === 0 ? "slcl-confetti--a" : "slcl-confetti--b"}`}
          style={{ top: c.top, left: c.left, width: c.size, height: c.size, transform: `rotate(${c.rotate}deg)` }}
          aria-hidden="true"
        />
      ))}
      <div className="slcl-card">
        <button type="button" className="slcl-medallion" onClick={() => setZoomed(true)} aria-label="Tap to make bigger">
          <span className="slcl-badge" aria-hidden="true">{sticker}</span>
        </button>
        <h2 className="slcl-headline">{content.headline || "You did it!"}</h2>
        {content.goal && <p className="slcl-goal">{content.goal}</p>}
        <span className="slcl-bye">{content.closing || "See you next time!"}</span>
      </div>
      <ZoomOverlay active={zoomed} onClose={() => setZoomed(false)}>
        <span className="slcl-badge-big" aria-hidden="true">{sticker}</span>
      </ZoomOverlay>
    </div>
  );
}

const CSS = `
.slcl-slide {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(160deg, var(--k-accent, #FFF4AA), var(--k-accent-dark, #D5F3D1));
}
.slcl-confetti {
  position: absolute;
  border-radius: 4px;
  z-index: 1;
  pointer-events: none;
}
.slcl-confetti--a { background: #ffffff; opacity: 0.55; }
.slcl-confetti--b { background: var(--k-pop, #D5E9E8); opacity: 0.8; }
.slcl-card {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  max-width: 460px;
  padding: 34px 46px 30px;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 20px 46px rgba(0,0,0,0.28);
}
.slcl-medallion {
  width: 84px;
  height: 84px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--k-bg-cool, #D5E9E8);
  border: 4px solid var(--k-accent, #FFF4AA);
  margin-bottom: 2px;
  cursor: pointer;
  padding: 0;
}
.slcl-badge {
  font-size: 42px;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,0.15));
}
.slcl-badge-big { font-size: 160px; line-height: 1; }
.slcl-headline {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #1B2A4A;
  margin: 0;
}
.slcl-goal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15.5px;
  color: #5C6478;
  max-width: 380px;
  margin: 0;
  line-height: 1.5;
}
.slcl-bye {
  margin-top: 6px;
  display: inline-block;
  background: var(--k-accent-dark, #D5F3D1);
  color: var(--k-btn-text, #1B2A4A);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
  padding: 8px 20px;
  border-radius: 999px;
}
`;

import { useState } from "react";

const GRADIENT = "linear-gradient(135deg, #3B6D11, #5FA873)";
const GRADIENT_ADULT = "#1B2A4A";
const ITEM_COLORS = [
  { bg: "#FAECE7", check: "#D85A30" },
  { bg: "#E1F5EE", check: "#0F6E56" },
  { bg: "#EEEDFE", check: "#534AB7" },
  { bg: "#FAEEDA", check: "#BA7517" },
];

export default function SlideReview({ content, lesson }) {
  const checklist = content.checklist || [];
  const [checked, setChecked] = useState(() => new Set());
  const isAdult = lesson?.age_track === "adults";
  const allChecked = checklist.length > 0 && checked.size === checklist.length;

  function toggle(i) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className={`slrv-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <div className="slrv-header" style={{ background: isAdult ? GRADIENT_ADULT : GRADIENT }}>
        {!isAdult && <span className="slrv-trophy" aria-hidden="true">🏆</span>}
        {content.tag && <span className="slrv-tag">{content.tag}</span>}
        <h2 className="slrv-title">{content.title || "Today I can…"}</h2>
        {content.subtitle && <p className="slrv-subtitle">{content.subtitle}</p>}
      </div>
      <div className="slrv-body">
        <div className="slrv-checklist">
          {checklist.map((item, i) => {
            const c = ITEM_COLORS[i % ITEM_COLORS.length];
            const isChecked = checked.has(i);
            return (
              <button
                type="button"
                key={i}
                className={`slrv-item ${isChecked ? "is-checked" : ""}`}
                style={!isAdult ? { background: isChecked ? c.bg : "#F7F6F3" } : undefined}
                onClick={() => toggle(i)}
              >
                <span
                  className="slrv-check"
                  style={!isAdult && isChecked ? { background: c.check, borderColor: c.check } : undefined}
                >
                  {isChecked ? "✓" : ""}
                </span>
                {item}
              </button>
            );
          })}
        </div>
        {content.challenge && (
          <div className={`slrv-challenge ${allChecked ? "is-ready" : ""}`}>
            <span className="slrv-challenge-label">
              {allChecked ? "You're ready! Final challenge" : "Final challenge"}
            </span>
            <p className="slrv-challenge-text">{content.challenge}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.slrv-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slrv-header {
  position: relative;
  padding: 8px 24px 7px;
  flex-shrink: 0;
}
.slrv-trophy {
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 28px;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.15));
}
.slrv-tag {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 4px;
}
.slrv-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #fff;
  margin: 0;
}
.slrv-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: rgba(255,255,255,0.75);
  margin: 2px 0 0;
}
.slrv-body {
  flex: 1;
  min-height: 0;
  padding: 18px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  overflow: auto;
}
.slrv-checklist {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.slrv-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #F7F6F3;
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1B2A4A;
  text-align: left;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.15s ease;
}
.slrv-item:hover { transform: translateY(-1px); }
.slrv-item.is-checked { color: #1B2A4A; }
.slrv-check {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 2px solid #C9CBD1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.slrv-item.is-checked .slrv-check {
  background: #3B6D11;
  border-color: #3B6D11;
}
.slrv-challenge {
  background: #1B2A4A;
  border-radius: 12px;
  padding: 14px 18px;
  transition: box-shadow 0.2s ease;
}
.slrv-challenge.is-ready {
  box-shadow: 0 0 0 3px #FFE07A;
}
.slrv-challenge-label {
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #FFE07A;
  margin-bottom: 4px;
}
.slrv-challenge-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #fff;
  margin: 0;
}

/* ── Adults theme ── */
.slrv-slide.is-adult .slrv-tag {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.09em;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 3px;
}
.slrv-slide.is-adult .slrv-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 20px;
}
.slrv-slide.is-adult .slrv-subtitle { font-family: 'Inter', sans-serif; font-weight: 400; }
.slrv-slide.is-adult .slrv-body { background: #F7F5EF; }
.slrv-slide.is-adult .slrv-item {
  background: #fff;
  border: 1px solid #DEDAD0;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #1B2A4A;
}
.slrv-slide.is-adult .slrv-item.is-checked {
  background: #F1F5EE;
  border-color: #3B6D11;
  color: #2C6B4F;
}
.slrv-slide.is-adult .slrv-check {
  border-radius: 3px;
  border-color: #C9C2B4;
}
.slrv-slide.is-adult .slrv-item.is-checked .slrv-check {
  background: #3B6D11;
  border-color: #3B6D11;
}
.slrv-slide.is-adult .slrv-challenge {
  background: #1B2A4A;
  border-radius: 6px;
}
.slrv-slide.is-adult .slrv-challenge-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.09em;
  color: #E8B978;
}
.slrv-slide.is-adult .slrv-challenge-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  font-size: 14.5px;
}
`;

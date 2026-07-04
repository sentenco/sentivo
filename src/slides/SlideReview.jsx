import { useState } from "react";

const GRADIENT = "linear-gradient(135deg, #3B6D11, #5FA873)";

export default function SlideReview({ content }) {
  const checklist = content.checklist || [];
  const [checked, setChecked] = useState(() => new Set());

  function toggle(i) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <div className="slrv-slide">
      <style>{CSS}</style>
      <div className="slrv-header" style={{ background: GRADIENT }}>
        {content.tag && <span className="slrv-tag">{content.tag}</span>}
        <h2 className="slrv-title">{content.title || "Today I can…"}</h2>
        {content.subtitle && <p className="slrv-subtitle">{content.subtitle}</p>}
      </div>
      <div className="slrv-body">
        <div className="slrv-checklist">
          {checklist.map((item, i) => (
            <button
              type="button"
              key={i}
              className={`slrv-item ${checked.has(i) ? "is-checked" : ""}`}
              onClick={() => toggle(i)}
            >
              <span className="slrv-check">{checked.has(i) ? "✓" : ""}</span>
              {item}
            </button>
          ))}
        </div>
        {content.challenge && (
          <div className="slrv-challenge">
            <span className="slrv-challenge-label">Final challenge</span>
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
  padding: 14px 24px 12px;
  flex-shrink: 0;
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
  margin-bottom: 6px;
}
.slrv-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #fff;
  margin: 0;
}
.slrv-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: rgba(255,255,255,0.75);
  margin: 3px 0 0;
}
.slrv-body {
  flex: 1;
  min-height: 0;
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: auto;
}
.slrv-checklist {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.slrv-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #F1F5F0;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #1B2A4A;
  text-align: left;
  cursor: pointer;
}
.slrv-item.is-checked {
  background: #E3F5E6;
  color: #2C6B4F;
}
.slrv-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid #B7C4B4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
}
.slrv-item.is-checked .slrv-check {
  background: #3B6D11;
  border-color: #3B6D11;
}
.slrv-challenge {
  background: #1B2A4A;
  border-radius: 12px;
  padding: 12px 16px;
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
`;

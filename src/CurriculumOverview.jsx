import React, { useEffect } from "react";

const LEVELS = [
  {
    code: "A1",
    name: "Foundation",
    tag: "Start here",
    accent: "coral",
    description: "Letters, phonics, and the first words and phrases to say hello, count, and talk about everyday life.",
  },
  {
    code: "A2",
    name: "Growing Up",
    tag: "Next step",
    accent: "navy",
    description: "Longer sentences, more tenses, and the independence to handle everyday situations with confidence.",
  },
];

export default function CurriculumOverview({ onSelectLevel }) {
  useEffect(() => {
    const styleId = "co-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="co-wrap">
      <div className="co-blob co-blob--a" />
      <div className="co-blob co-blob--b" />

      <div className="co-stage">
        <div className="co-hero-band">
          <div className="co-hero-kicker-row">
            <span className="co-hero-rule" />
            <span className="co-hero-kicker">For young learners, ages 6 to 12</span>
            <span className="co-hero-rule" />
          </div>
          <h1 className="co-title">Kids Curriculum</h1>
          <div className="co-stat-row">
            <div className="co-stat"><div className="co-stat-num co-stat-num--coral">2</div><div className="co-stat-label">Levels</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--navy">24</div><div className="co-stat-label">Units</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--coral">144</div><div className="co-stat-label">Lessons</div></div>
          </div>
        </div>

        <div className="co-levels-grid">
          {LEVELS.map((lv) => (
            <div
              key={lv.code}
              className={`co-level-card co-level-card--${lv.accent}`}
              onClick={() => onSelectLevel && onSelectLevel(lv.code)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelectLevel && onSelectLevel(lv.code)}
            >
              <div className="co-level-top">
                <div className="co-level-code">{lv.code}</div>
                <span className="co-level-tag">{lv.tag}</span>
              </div>
              <div className="co-level-name">{lv.name}</div>
              <p className="co-level-desc">{lv.description}</p>
              <div className="co-level-foot">
                <span className="co-level-units"><b>12</b> units</span>
                <span className="co-level-cta">View curriculum &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800;900&family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.co-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.co-wrap * { box-sizing: border-box; }

.co-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.co-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.co-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.co-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 30px 40px 70px; }

.co-hero-band {
  background: #FFE6DD;
  border-radius: 16px;
  padding: 22px 32px 20px;
  text-align: center;
  margin-bottom: 32px;
}
.co-hero-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 4px; }
.co-hero-rule { flex: 0 1 48px; height: 1px; background: rgba(27,42,74,0.22); }
.co-hero-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #E0502F;
}
.co-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(28px, 4vw, 38px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1B2A4A;
  margin: 4px 0 14px;
  line-height: 1;
}

.co-stat-row { display: flex; justify-content: center; gap: 10px; }
.co-stat { text-align: center; background: #fff; border-radius: 10px; padding: 8px 20px; }
.co-stat-num { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 22px; }
.co-stat-num--coral { color: #FF6B4A; }
.co-stat-num--navy { color: #1B2A4A; }
.co-stat-label { font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #6B6E96; margin-top: 2px; }

.co-levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
@media (max-width: 700px) { .co-levels-grid { grid-template-columns: 1fr; } }

.co-level-card {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 30px 30px 26px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  outline: none;
}
.co-level-card:hover, .co-level-card:focus-visible { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(27,42,74,0.12); }
.co-level-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; }
.co-level-card--coral::before { background: #FF6B4A; }
.co-level-card--coral:hover { border-color: #FF6B4A; }
.co-level-card--navy::before { background: #1B2A4A; }
.co-level-card--navy:hover { border-color: #1B2A4A; }

.co-level-top { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; }
.co-level-code { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 40px; }
.co-level-card--coral .co-level-code { color: #FF6B4A; }
.co-level-card--navy .co-level-code { color: #1B2A4A; }
.co-level-tag { font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; color: #E0502F; background: #FFE6DD; }

.co-level-name { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 18px; margin-bottom: 12px; }
.co-level-desc { font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.65; margin: 0 0 22px; }

.co-level-foot { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #EDE6F4; padding-top: 16px; margin-top: auto; }
.co-level-units { font-size: 12px; font-weight: 700; color: #6B6E96; }
.co-level-units b { color: #1B2A4A; font-family: 'Source Serif 4', serif; font-size: 14px; }
.co-level-cta { font-size: 12.5px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; }
.co-level-card--coral .co-level-cta { color: #FF6B4A; }
.co-level-card--navy .co-level-cta { color: #1B2A4A; }
`;

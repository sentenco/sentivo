import React, { useEffect } from "react";
import { TEENS_LEVELS, TEENS_UNITS } from "./teensCurriculumData";
import { ADULTS_LEVELS, ADULTS_UNITS } from "./adultsCurriculumData";
import AudienceSwitchTabs from "./AudienceSwitchTabs";

const TRACKS = {
  teens: { levels: TEENS_LEVELS, units: TEENS_UNITS, label: "Teens", age: "Ages 13 to 17" },
  adults: { levels: ADULTS_LEVELS, units: ADULTS_UNITS, label: "Adults", age: "Ages 18+" },
};

export default function TrackLevelPage({ audience, level, onBack }) {
  const track = TRACKS[audience] || TRACKS.teens;
  const data = track.levels[level] || track.levels.A1;
  const units = track.units[level] || track.units.A1;

  useEffect(() => {
    const styleId = "tlp-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="tlp-wrap">
      <div className="tlp-blob tlp-blob--a" />
      <div className="tlp-blob tlp-blob--b" />

      <div className="tlp-stage">
        <AudienceSwitchTabs active={audience} level={level} />

        <button type="button" className="tlp-breadcrumb" onClick={onBack}>
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> {track.label} <span className="tlp-crumb-sep">&rsaquo;</span> <span className={`tlp-crumb-current tlp-crumb-current--${data.accent}`}>{level} &middot; {data.name}</span>
        </button>

        <div className={`tlp-hero tlp-hero--${data.accent}`}>
          <div className="tlp-hero-kicker-row">
            <span className="tlp-hero-rule" />
            <span className="tlp-hero-kicker">{track.label} track &middot; {track.age}</span>
            <span className="tlp-hero-rule" />
          </div>
          <div className="tlp-hero-title-row">
            <span className="tlp-level-code">{level}</span>
            <span className="tlp-level-name">{data.name}</span>
          </div>
          <p className="tlp-hero-desc">{data.description}</p>
        </div>

        <div className="tlp-status-banner">
          <span className="tlp-status-badge">Coming soon</span>
          <p className="tlp-status-text">The unit map below is locked in. Lessons haven't been built yet, so each unit will open once its 6 lessons are ready.</p>
        </div>

        <div className="tlp-toc">
          <div className="tlp-toc-header">
            <h2 className="tlp-toc-title">Unit map</h2>
            <p className="tlp-toc-sub">12 units &middot; 72 lessons</p>
          </div>
          <ul className="tlp-toc-list">
            {units.map((u) => (
              <li key={u.num} className="tlp-toc-item">
                <span className={`tlp-toc-unit-label tlp-toc-unit-label--${data.accent}`}>
                  Unit {String(u.num).padStart(2, "0")}
                </span>
                <div className="tlp-toc-main">
                  <div className="tlp-toc-title-row">
                    <span className="tlp-toc-item-title">{u.title}</span>
                    <span className="tlp-toc-leader" />
                    <span className="tlp-toc-page-tag">Coming soon</span>
                  </div>
                  <div className="tlp-toc-focus">{u.focus}</div>
                  <span className="tlp-toc-anchor">{u.anchor}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800;900&family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.tlp-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.tlp-wrap * { box-sizing: border-box; }

.tlp-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.tlp-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.07); }
.tlp-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.05); }

.tlp-stage { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; padding: 26px 40px 70px; }

.tlp-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 22px; text-align: left; }
.tlp-crumb-sep { color: #C7C4DC; }
.tlp-crumb-current--coral { color: #FF6B4A; }
.tlp-crumb-current--navy { color: #1B2A4A; }

.tlp-hero { border-radius: 16px; padding: 24px 32px 22px; text-align: center; margin-bottom: 20px; }
.tlp-hero--coral { background: #FFE6DD; }
.tlp-hero--navy { background: #E7EAF3; }
.tlp-hero-kicker-row { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 6px; }
.tlp-hero-rule { flex: 0 1 48px; height: 1px; background: rgba(27,42,74,0.22); }
.tlp-hero-kicker { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: #6B6E96; }
.tlp-hero-title-row { display: flex; align-items: baseline; justify-content: center; gap: 12px; margin-bottom: 10px; }
.tlp-level-code { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 36px; color: #1B2A4A; }
.tlp-level-name { font-family: 'Playfair Display', serif; font-weight: 900; font-size: clamp(24px, 3.4vw, 32px); text-transform: uppercase; letter-spacing: 0.01em; color: #1B2A4A; }
.tlp-hero-desc { font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.6; max-width: 480px; margin: 0 auto; }

.tlp-status-banner {
  display: flex; align-items: center; gap: 14px;
  background: #F7F5FB; border: 1px dashed #EDE6F4; border-radius: 12px;
  padding: 14px 20px; margin-bottom: 26px;
}
.tlp-status-badge { flex-shrink: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #A6A2C0; background: #fff; padding: 5px 12px; border-radius: 999px; }
.tlp-status-text { font-size: 12.5px; color: #6B6E96; line-height: 1.5; margin: 0; }

.tlp-toc { background: #fff; border: 1px solid #EDE6F4; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(27,42,74,0.05); }
.tlp-toc-header { padding: 20px 26px 14px; border-bottom: 1px solid #EDE6F4; }
.tlp-toc-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 19px; color: #1B2A4A; margin: 0 0 4px; }
.tlp-toc-sub { font-size: 12px; color: #6B6E96; font-weight: 500; margin: 0; }

.tlp-toc-list { list-style: none; margin: 0; padding: 0; }
.tlp-toc-item { display: flex; align-items: flex-start; gap: 16px; padding: 16px 26px; border-bottom: 1px solid #F5F1F9; }
.tlp-toc-item:last-child { border-bottom: none; }
.tlp-toc-unit-label { flex-shrink: 0; font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 5px 10px; border-radius: 6px; margin-top: 1px; }
.tlp-toc-unit-label--coral { color: #E0502F; background: #FFE6DD; }
.tlp-toc-unit-label--navy { color: #1B2A4A; background: #E7EAF3; }

.tlp-toc-main { flex: 1; min-width: 0; }
.tlp-toc-title-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
.tlp-toc-item-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 14.5px; color: #1B2A4A; white-space: nowrap; }
.tlp-toc-leader { flex: 1; border-bottom: 1px dotted #E0DCEC; margin-bottom: 3px; }
.tlp-toc-page-tag { flex-shrink: 0; font-size: 10px; font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; color: #A6A2C0; }
.tlp-toc-focus { font-size: 12.5px; color: #6B6E96; line-height: 1.5; margin-bottom: 5px; }
.tlp-toc-anchor { display: inline-block; font-size: 10.5px; font-weight: 700; color: #6B6E96; background: #F7F5FB; border: 1px solid #EDE6F4; padding: 3px 9px; border-radius: 999px; }

@media (max-width: 640px) {
  .tlp-stage { padding: 20px 18px 50px; }
  .tlp-hero { padding: 20px 18px 18px; }
  .tlp-toc-header, .tlp-toc-item { padding-left: 16px; padding-right: 16px; }
  .tlp-status-banner { flex-direction: column; align-items: flex-start; }
}
`;

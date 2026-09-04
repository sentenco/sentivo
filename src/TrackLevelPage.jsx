import React, { useEffect, useState } from "react";
import { TEENS_LEVELS, TEENS_UNITS } from "./teensCurriculumData";
import { ADULTS_LEVELS, ADULTS_UNITS } from "./adultsCurriculumData";
import AudienceSwitchTabs from "./AudienceSwitchTabs";

const TRACKS = {
  teens: {
    levels: TEENS_LEVELS, units: TEENS_UNITS, label: "Teens", age: "Ages 13 to 17",
    statTitle: "Built for teens", statSub: "Topics and pace matched to teenage learners",
  },
  adults: {
    levels: ADULTS_LEVELS, units: ADULTS_UNITS, label: "Adults", age: "Ages 18+",
    statTitle: "Real adult content", statSub: "Practical and task-based, not childish",
  },
};

const ACCENT_COLORS = {
  coral: { color: "#FF6B4A", light: "#FFE6DD" },
  navy: { color: "#1B2A4A", light: "#E7EAF3" },
};

// Which lessons have a real player built -- add an entry here (and build
// its route in main.jsx) as each one actually ships. Everything else stays
// disabled/"Coming soon", same pattern as Kids' LevelPage.jsx.
const READY_LESSONS = {
  teens: { A1: { 1: [1] }, A2: { 1: [1] } },
  adults: { A1: { 1: [1] }, A2: { 1: [1] } },
};

function openLessonPopup(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(780, screenW - 40);
  const h = Math.min(620, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));
  window.open(
    path,
    "sentivoTrackLesson",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function TrackLevelPage({ audience, level, onBack }) {
  const track = TRACKS[audience] || TRACKS.teens;
  const data = track.levels[level] || track.levels.A1;
  const units = track.units[level] || track.units.A1;
  const colors = ACCENT_COLORS[data.accent] || ACCENT_COLORS.coral;
  const [openUnit, setOpenUnit] = useState(null);

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
          Curriculum <span className="tlp-crumb-sep">&rsaquo;</span> {track.label} <span className="tlp-crumb-sep">&rsaquo;</span> <span style={{ color: colors.color }}>{level} &middot; {data.name}</span>
        </button>

        <div className="tlp-banner-hero" style={{ background: colors.light }}>
          <div className="tlp-cefr-tag" style={{ color: colors.color }}>{track.label} &middot; CEFR {level}</div>
          <div className="tlp-banner-title">
            <span className="tlp-level-code" style={{ color: colors.color }}>{level}</span>
            <span className="tlp-level-name">{data.name}</span>
          </div>
          <p className="tlp-description">{data.description}</p>
        </div>

        <div className="tlp-stats-strip">
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">12 Units</div>
              <div className="tlp-stat-sub">Each with 5 lessons plus a summative test</div>
            </div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--coral">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.7" fill="currentColor"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">Practical skills</div>
              <div className="tlp-stat-sub">Focus on real-life communication</div>
            </div>
          </div>
          <div className="tlp-stat-item">
            <div className="tlp-stat-icon tlp-stat-icon--lav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/></svg>
            </div>
            <div>
              <div className="tlp-stat-title">{track.statTitle}</div>
              <div className="tlp-stat-sub">{track.statSub}</div>
            </div>
          </div>
        </div>

        <div className="tlp-toc">
          <div className="tlp-toc-header" style={{ background: colors.color }}>
            <div className="tlp-toc-eyebrow-row">
              <span className="tlp-toc-eyebrow-rule" />
              <span className="tlp-toc-eyebrow">{track.label} &middot; {level} {data.name}</span>
            </div>
            <h2 className="tlp-toc-title">Table of Contents</h2>
            <p className="tlp-toc-sub">12 units &middot; 72 lessons</p>
          </div>

          <ul className="tlp-toc-list">
            {units.map((u) => {
              const isOpen = openUnit === u.num;
              return (
                <li key={u.num} className={`tlp-toc-item ${isOpen ? "is-open" : ""}`}>
                  <div className="tlp-toc-row" onClick={() => setOpenUnit(isOpen ? null : u.num)}>
                    <span className="tlp-toc-unit-label" style={{ color: colors.color, background: colors.light }}>
                      Unit {String(u.num).padStart(2, "0")}
                    </span>
                    <div className="tlp-toc-main">
                      <div className="tlp-toc-title-row">
                        <span className="tlp-toc-item-title">{u.title}</span>
                        <span className="tlp-toc-leader" />
                        <span className="tlp-toc-page-tag">Coming soon</span>
                      </div>
                      <div className="tlp-toc-focus">{u.focus} &middot; {u.anchor}</div>
                    </div>
                    <span className="tlp-toc-chevron" style={isOpen ? { background: colors.color, color: "#fff" } : {}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </div>

                  <div className="tlp-toc-panel">
                    <div className="tlp-toc-panel-inner">
                      {u.lessons.map((l) => {
                        const lessonReady = (((READY_LESSONS[audience] || {})[level] || {})[u.num] || []).includes(l.num);
                        const lessonPath = `/library/curriculum/${audience}/${level}/unit/${u.num}/lesson/${l.num}`;
                        return (
                          <div key={l.num} className={`tlp-toc-lesson-row ${l.isTest ? "is-test" : ""} ${lessonReady ? "is-ready" : ""}`}>
                            <span className="tlp-toc-lesson-bullet">{l.isTest ? "T" : l.num}</span>
                            <div className="tlp-toc-lesson-main">
                              <span className="tlp-toc-lesson-title">{l.title}</span>
                              <span className="tlp-toc-lesson-focus">{l.focus}</span>
                            </div>
                            {lessonReady ? (
                              <button type="button" className="tlp-toc-lesson-open" onClick={() => openLessonPopup(lessonPath)}>
                                Open
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                              </button>
                            ) : (
                              <span className="tlp-toc-lesson-tag">{l.isTest ? "Test" : "Lesson"}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.tlp-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.tlp-wrap * { box-sizing: border-box; }

.tlp-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.tlp-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.07); }
.tlp-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.05); }

.tlp-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.tlp-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 22px; text-align: left; }
.tlp-crumb-sep { color: #C7C4DC; }

.tlp-banner-hero {
  border-radius: 20px;
  padding: 26px 32px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tlp-cefr-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
  background: #fff;
  box-shadow: 0 2px 8px rgba(27,42,74,0.1);
}
.tlp-banner-title { display: flex; align-items: baseline; gap: 12px; }
.tlp-level-code { font-family: 'Source Serif 4', serif; font-size: 40px; font-weight: 600; line-height: 1; }
.tlp-level-name { font-family: 'Source Serif 4', serif; font-size: 26px; font-weight: 600; color: #23264A; }
.tlp-description { font-size: 13px; font-weight: 500; color: #4A5578; line-height: 1.55; max-width: 60%; }
@media (max-width: 700px) { .tlp-description { max-width: 100%; } }

.tlp-stats-strip {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 20px 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 26px;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
@media (max-width: 700px) { .tlp-stats-strip { grid-template-columns: 1fr; } }
.tlp-stat-item { display: flex; align-items: center; gap: 12px; }
.tlp-stat-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.tlp-stat-icon--blue { background: #E4E9F5; color: #4A5578; }
.tlp-stat-icon--coral { background: #FFE6DD; color: #FF6B4A; }
.tlp-stat-icon--lav { background: #EEE9F7; color: #7A5FA8; }
.tlp-stat-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #1B2A4A; }
.tlp-stat-sub { font-size: 11px; font-weight: 500; color: #6B6E96; margin-top: 1px; line-height: 1.3; }

.tlp-toc {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(27,42,74,0.12);
  border: 1px solid #EDE6F4;
}

.tlp-toc-header { padding: 30px 40px 26px; position: relative; overflow: hidden; }
.tlp-toc-header::before {
  content: ""; position: absolute; top: -60px; right: -40px; width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%);
  pointer-events: none;
}
.tlp-toc-eyebrow-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; position: relative; z-index: 1; }
.tlp-toc-eyebrow-rule { flex: 0 1 34px; height: 1px; background: rgba(255,255,255,0.35); }
.tlp-toc-eyebrow { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
.tlp-toc-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; margin: 0; color: #fff; position: relative; z-index: 1; }
.tlp-toc-sub { font-size: 12.5px; color: rgba(255,255,255,0.65); margin-top: 6px; position: relative; z-index: 1; }

.tlp-toc-list { list-style: none; margin: 0; padding: 10px 40px 34px; }
.tlp-toc-item { border-bottom: 1px solid #F0EBFA; }
.tlp-toc-item:last-child { border-bottom: none; }

.tlp-toc-row {
  display: flex; align-items: center; gap: 16px;
  padding: 15px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease;
}
.tlp-toc-row:hover { background: #FAF7FC; }
.tlp-toc-item.is-open .tlp-toc-row { background: #FAF7FC; }

.tlp-toc-unit-label {
  flex-shrink: 0;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 12px; letter-spacing: 0.03em;
  padding: 5px 10px; border-radius: 7px;
  width: 68px; text-align: center;
}
.tlp-toc-main { flex: 1; min-width: 0; }
.tlp-toc-title-row { display: flex; align-items: baseline; gap: 10px; }
.tlp-toc-item-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 16px; color: #23264A; white-space: nowrap; }
.tlp-toc-leader { flex: 1; border-bottom: 1.5px dotted #D8D2E8; margin-bottom: 5px; }
.tlp-toc-page-tag { font-size: 11px; font-weight: 700; color: #6B6E96; white-space: nowrap; }
.tlp-toc-focus { font-size: 12px; color: #6B6E96; margin-top: 3px; }

.tlp-toc-chevron {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  color: #6B6E96; display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s ease, color 0.15s ease, background 0.15s ease;
}
.tlp-toc-item.is-open .tlp-toc-chevron { transform: rotate(180deg); }

.tlp-toc-panel { max-height: 0; overflow: hidden; transition: max-height 0.25s ease; }
.tlp-toc-item.is-open .tlp-toc-panel { max-height: 600px; }
.tlp-toc-panel-inner { padding: 4px 8px 18px 84px; }
.tlp-toc-lesson-row { display: flex; align-items: center; gap: 12px; padding: 9px 8px; border-radius: 8px; margin: 0 -8px; }
.tlp-toc-lesson-bullet {
  flex-shrink: 0; width: 21px; height: 21px; border-radius: 50%;
  background: #fff; border: 1.5px solid #FF6B4A; color: #E0502F;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px;
}
.tlp-toc-lesson-row.is-test .tlp-toc-lesson-bullet { border-color: #C98A00; color: #A87A1E; background: #FBF0DC; }
.tlp-toc-lesson-main { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 8px; }
.tlp-toc-lesson-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #23264A; white-space: nowrap; }
.tlp-toc-lesson-focus { font-size: 11.5px; color: #6B6E96; }
.tlp-toc-lesson-tag { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #C7A8B8; margin-left: auto; flex-shrink: 0; }
.tlp-toc-lesson-row.is-test .tlp-toc-lesson-tag { color: #A87A1E; }
.tlp-toc-lesson-row.is-ready:hover { background: #FFF9F7; }
.tlp-toc-lesson-open {
  display: inline-flex; align-items: center; gap: 4px; cursor: pointer; border: none;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #fff; background: #FF6B4A; border-radius: 999px; padding: 4px 11px;
  margin-left: auto; flex-shrink: 0;
}
.tlp-toc-lesson-open:hover { background: #E0502F; }

@media (max-width: 700px) {
  .tlp-stage { padding: 20px 18px 50px; }
  .tlp-banner-hero { padding: 20px 18px; }
  .tlp-toc-header { padding: 22px 20px; }
  .tlp-toc-list { padding: 10px 16px 24px; }
  .tlp-toc-panel-inner { padding-left: 40px; }
}
`;

import React, { useEffect, useState } from "react";
import { LEVEL_DATA, UNITS, READY_UNITS } from "./kidsCurriculumData";

const READY_LESSONS = { A1: { 1: [1] } };

function openPopup(path, name, w, h) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const width = Math.min(w, screenW - 40);
  const height = Math.min(h, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - width) / 2));
  const top = Math.max(0, Math.floor((screenH - height) / 2));
  window.open(
    path,
    name,
    `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openLessonPopup(path) {
  openPopup(path, "sentivoLessonPlayer", 820, 860);
}

function openGuidePopup(path) {
  openPopup(`${path}/guide`, "sentivoTeacherGuide", 560, 640);
}

export default function LevelPage({ level = "A1" }) {
  const data = LEVEL_DATA[level] || LEVEL_DATA.A1;
  const units = UNITS[level] || UNITS.A1;
  const readyUnits = READY_UNITS[level] || [];
  const [openUnit, setOpenUnit] = useState(null);

  useEffect(() => {
    const styleId = "lp-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="lp-wrap">
      <div className="lp-blob lp-blob--a" />
      <div className="lp-blob lp-blob--b" />

      <div className="lp-stage">
        <div className="lp-topbar">
          <div className="lp-breadcrumb">
            Kids Curriculum <span className="lp-crumb-sep">&rsaquo;</span> <span style={{ color: data.color }}>{level} &middot; {data.name}</span>
          </div>
        </div>

        <div
          className="lp-banner-hero"
          style={data.banner ? { backgroundImage: `url(${data.banner})` } : { background: data.light }}
        >
          <div className="lp-cefr-tag" style={{ color: data.color, background: "#fff" }}>{data.cefr}</div>
          <div className="lp-banner-title">
            <span className="lp-level-code" style={{ color: data.color }}>{level}</span>
            <span className="lp-level-name">{data.name}</span>
          </div>
          <p className="lp-description">{data.description}</p>
        </div>

        <div className="lp-stats-strip">
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">12 Units</div>
              <div className="lp-stat-sub">Each with 5 lessons plus a summative test</div>
            </div>
          </div>
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--coral">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.7" fill="currentColor"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">Practical skills</div>
              <div className="lp-stat-sub">Focus on real-life communication</div>
            </div>
          </div>
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--lav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">Young learners</div>
              <div className="lp-stat-sub">Fun, engaging, and age-appropriate</div>
            </div>
          </div>
        </div>

        <div className="lp-goals-section">
          <div className="lp-goals-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>
            Can-do goals
          </div>
          <ul className="lp-goals">
            {data.goals.map((g, i) => (
              <li key={i} className="lp-goal">
                <span className="lp-goal-check" style={{ background: data.color }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-toc">
          <div className="lp-toc-header" style={{ background: data.color }}>
            <div className="lp-toc-eyebrow-row">
              <span className="lp-toc-eyebrow-rule" />
              <span className="lp-toc-eyebrow">Kids Curriculum &middot; {level} {data.name}</span>
            </div>
            <h2 className="lp-toc-title">Table of Contents</h2>
            <p className="lp-toc-sub">12 units &middot; 72 lessons</p>
          </div>

          <ul className="lp-toc-list">
            {units.map((u) => {
              const isReady = readyUnits.includes(u.num);
              const isOpen = isReady && openUnit === u.num;
              return (
                <li key={u.num} className={`lp-toc-item ${isOpen ? "is-open" : ""} ${!isReady ? "is-locked" : ""}`}>
                  <div
                    className="lp-toc-row"
                    onClick={() => isReady && setOpenUnit(isOpen ? null : u.num)}
                  >
                    <span className="lp-toc-unit-label" style={{ color: data.color, background: data.light }}>
                      Unit {String(u.num).padStart(2, "0")}
                    </span>
                    <div className="lp-toc-main">
                      <div className="lp-toc-title-row">
                        <span className="lp-toc-item-title">{u.title}</span>
                        <span className="lp-toc-leader" />
                        <span className="lp-toc-page-tag">{isReady ? "6 lessons" : "Coming soon"}</span>
                      </div>
                      <div className="lp-toc-focus">{u.focus} &middot; {u.thread}</div>
                    </div>
                    {isReady && (
                      <span className="lp-toc-chevron" style={isOpen ? { background: data.color, color: "#fff" } : {}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                      </span>
                    )}
                  </div>

                  {isReady && (
                    <div className="lp-toc-panel">
                      <div className="lp-toc-panel-inner">
                        {u.lessons.map((l) => {
                          const lessonReady = ((READY_LESSONS[level] || {})[u.num] || []).includes(l.num);
                          const lessonPath = `/library/curriculum/${level}/unit/${u.num}/lesson/${l.num}`;
                          return (
                            <div
                              key={l.num}
                              className={`lp-toc-lesson-row ${l.isTest ? "is-test" : ""} ${lessonReady ? "is-ready" : ""}`}
                            >
                              <span className="lp-toc-lesson-bullet">{l.isTest ? "T" : l.num}</span>
                              <div className="lp-toc-lesson-main">
                                <span className="lp-toc-lesson-title">{l.title}</span>
                                <span className="lp-toc-lesson-focus">{l.focus}</span>
                              </div>
                              {lessonReady ? (
                                <div className="lp-toc-lesson-actions">
                                  <button type="button" className="lp-toc-lesson-guide" onClick={() => openGuidePopup(lessonPath)}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>
                                    Guide
                                  </button>
                                  <button type="button" className="lp-toc-lesson-open" onClick={() => openLessonPopup(lessonPath)}>
                                    Open
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                  </button>
                                </div>
                              ) : (
                                <span className="lp-toc-lesson-tag">{l.isTest ? "Test" : "Lesson"}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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

.lp-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.lp-wrap * { box-sizing: border-box; }

.lp-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.lp-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.lp-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.lp-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.lp-topbar { margin-bottom: 26px; }
.lp-breadcrumb { font-size: 12px; font-weight: 600; color: #6B6E96; }
.lp-crumb-sep { color: #C7C4DC; }

.lp-banner-hero {
  border-radius: 20px;
  padding: 28px 32px;
  margin-bottom: 18px;
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 200px;
  justify-content: center;
}
.lp-cefr-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(27,42,74,0.1);
}

.lp-banner-title { display: flex; align-items: baseline; gap: 12px; max-width: 60%; }
.lp-level-code {
  font-family: 'Source Serif 4', serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
}
.lp-level-name {
  font-family: 'Source Serif 4', serif;
  font-size: 26px;
  font-weight: 600;
  color: #23264A;
}
.lp-description { font-size: 13px; font-weight: 500; color: #4A5578; line-height: 1.55; max-width: 55%; }
@media (max-width: 700px) { .lp-banner-title, .lp-description { max-width: 100%; } }

.lp-stats-strip {
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
@media (max-width: 700px) { .lp-stats-strip { grid-template-columns: 1fr; } }
.lp-stat-item { display: flex; align-items: center; gap: 12px; }
.lp-stat-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.lp-stat-icon--blue { background: #E4E9F5; color: #4A5578; }
.lp-stat-icon--coral { background: #FFE6DD; color: #FF6B4A; }
.lp-stat-icon--lav { background: #EEE9F7; color: #7A5FA8; }
.lp-stat-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #1B2A4A; }
.lp-stat-sub { font-size: 11px; font-weight: 500; color: #6B6E96; margin-top: 1px; line-height: 1.3; }

.lp-goals-section { margin-bottom: 26px; }
.lp-goals-label { display: flex; align-items: center; gap: 7px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #1B2A4A; margin-bottom: 12px; }
.lp-goals {
  list-style: none; margin: 0; padding: 0;
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
.lp-goal { display: flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 600; color: #23264A; padding: 14px 22px; border-bottom: 1px solid #F3F0FB; }
.lp-goal:last-child { border-bottom: none; }
.lp-goal-check { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

.lp-toc {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(27,42,74,0.12);
  border: 1px solid #EDE6F4;
}

.lp-toc-header { padding: 30px 40px 26px; position: relative; overflow: hidden; }
.lp-toc-header::before {
  content: ""; position: absolute; top: -60px; right: -40px; width: 220px; height: 220px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%);
  pointer-events: none;
}
.lp-toc-eyebrow-row { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; position: relative; z-index: 1; }
.lp-toc-eyebrow-rule { flex: 0 1 34px; height: 1px; background: rgba(255,255,255,0.35); }
.lp-toc-eyebrow { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.8); }
.lp-toc-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; margin: 0; color: #fff; position: relative; z-index: 1; }
.lp-toc-sub { font-size: 12.5px; color: rgba(255,255,255,0.65); margin-top: 6px; position: relative; z-index: 1; }

.lp-toc-list { list-style: none; margin: 0; padding: 10px 40px 34px; }
.lp-toc-item { border-bottom: 1px solid #F0EBFA; }
.lp-toc-item:last-child { border-bottom: none; }

.lp-toc-row {
  display: flex; align-items: center; gap: 16px;
  padding: 15px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease;
}
.lp-toc-row:hover { background: #FAF7FC; }
.lp-toc-item.is-open .lp-toc-row { background: #FAF7FC; }
.lp-toc-item.is-locked .lp-toc-row { cursor: default; opacity: 0.5; }

.lp-toc-unit-label {
  flex-shrink: 0;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 12px; letter-spacing: 0.03em;
  padding: 5px 10px; border-radius: 7px;
  width: 68px; text-align: center;
}
.lp-toc-main { flex: 1; min-width: 0; }
.lp-toc-title-row { display: flex; align-items: baseline; gap: 10px; }
.lp-toc-item-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 16px; color: #23264A; white-space: nowrap; }
.lp-toc-leader { flex: 1; border-bottom: 1.5px dotted #D8D2E8; margin-bottom: 5px; }
.lp-toc-page-tag { font-size: 11px; font-weight: 700; color: #6B6E96; white-space: nowrap; }
.lp-toc-focus { font-size: 12px; color: #6B6E96; margin-top: 3px; }

.lp-toc-chevron {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  color: #6B6E96; display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s ease, color 0.15s ease, background 0.15s ease;
}
.lp-toc-item.is-open .lp-toc-chevron { transform: rotate(180deg); }

.lp-toc-panel { max-height: 0; overflow: hidden; transition: max-height 0.25s ease; }
.lp-toc-item.is-open .lp-toc-panel { max-height: 600px; }
.lp-toc-panel-inner { padding: 4px 8px 18px 84px; }
.lp-toc-lesson-row { display: flex; align-items: center; gap: 12px; padding: 9px 8px; border-radius: 8px; margin: 0 -8px; }
.lp-toc-lesson-row.is-ready:hover { background: #FFF9F7; }
.lp-toc-lesson-bullet {
  flex-shrink: 0; width: 21px; height: 21px; border-radius: 50%;
  background: #fff; border: 1.5px solid #FF6B4A; color: #E0502F;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 10px;
}
.lp-toc-lesson-row.is-test .lp-toc-lesson-bullet { border-color: #C98A00; color: #A87A1E; background: #FBF0DC; }
.lp-toc-lesson-main { flex: 1; min-width: 0; display: flex; align-items: baseline; gap: 8px; }
.lp-toc-lesson-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #23264A; white-space: nowrap; }
.lp-toc-lesson-focus { font-size: 11.5px; color: #6B6E96; }
.lp-toc-lesson-tag { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #C7A8B8; margin-left: auto; flex-shrink: 0; }
.lp-toc-lesson-row.is-test .lp-toc-lesson-tag { color: #A87A1E; }
.lp-toc-lesson-actions { display: flex; align-items: center; gap: 6px; margin-left: auto; flex-shrink: 0; }
.lp-toc-lesson-guide {
  display: inline-flex; align-items: center; gap: 4px; cursor: pointer; border: 1px solid #EDE6F4;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #6B6E96; background: #fff; border-radius: 999px; padding: 4px 11px;
}
.lp-toc-lesson-guide:hover { background: #F7F5FB; }
.lp-toc-lesson-open {
  display: inline-flex; align-items: center; gap: 4px; cursor: pointer; border: none;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #fff; background: #FF6B4A; border-radius: 999px; padding: 4px 11px;
}
.lp-toc-lesson-open:hover { background: #E0502F; }
`;

import React, { useEffect } from "react";

const UNIT_COLOR = { A1: { accent: "#FF6B4A", light: "#FFE6DD" }, A2: { accent: "#1B2A4A", light: "#FFE6DD" } };

const UNITS = {
  A1: {
    1: {
      title: "Hello, Alphabet!",
      focus: "Greetings, \"What's your name?\"",
      thread: "Letters A to I",
      lessons: [
        { num: 1, title: "Hello, Alphabet!", focus: "Letters A, B, C. \"Hello! My name is...\"" },
        { num: 2, title: "More Letters!", focus: "Letters D, E, F. \"How are you?\"" },
        { num: 3, title: "Almost There!", focus: "Letters G, H, I. \"Nice to meet you.\"" },
        { num: 4, title: "Let's Review!", focus: "Letters A to I, greeting practice" },
        { num: 5, title: "Show What You Know!", focus: "Free greeting roleplay" },
        { num: 6, title: "Unit 1 Test", focus: "Letters A to I and greetings", isTest: true },
      ],
    },
  },
};

export default function UnitPage({ level = "A1", unitNum = "1", onBack }) {
  const unit = (UNITS[level] || {})[unitNum];
  const color = UNIT_COLOR[level] || UNIT_COLOR.A1;

  useEffect(() => {
    const styleId = "up-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  if (!unit) {
    return (
      <div className="up-wrap">
        <div className="up-stage">
          <p className="up-missing">This unit isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="up-wrap">
      <div className="up-blob up-blob--a" />
      <div className="up-blob up-blob--b" />

      <div className="up-stage">
        <button type="button" className="up-breadcrumb" onClick={onBack}>
          Kids Curriculum <span className="up-crumb-sep">&rsaquo;</span> {level} <span className="up-crumb-sep">&rsaquo;</span> <span style={{ color: color.accent }}>Unit {unitNum}</span>
        </button>

        <div className="up-hero" style={{ "--accent": color.accent }}>
          <span className="up-unit-tag" style={{ color: color.accent, background: color.light }}>Unit {unitNum}</span>
          <h1 className="up-title">{unit.title}</h1>
          <p className="up-focus">{unit.focus}</p>
          <span className="up-thread" style={{ color: color.accent }}>{unit.thread}</span>
        </div>

        <div className="up-lessons-hd">
          <h2 className="up-lessons-title">6 lessons</h2>
          <p className="up-lessons-sub">5 teaching lessons plus a summative test.</p>
        </div>

        <div className="up-lessons-grid">
          {unit.lessons.map((l) => (
            <div key={l.num} className={`up-lesson-card ${l.isTest ? "up-lesson-card--test" : ""}`}>
              <div className="up-lesson-top">
                <span className="up-lesson-circle" style={{ background: l.isTest ? color.accent : color.accent }}>{l.isTest ? "T" : l.num}</span>
                <span className="up-lesson-soon">Coming soon</span>
              </div>
              <h3 className="up-lesson-title">{l.title}</h3>
              <p className="up-lesson-focus">{l.focus}</p>
              <div className="up-lesson-foot">
                <span className="up-lesson-tag">{l.isTest ? "Summative test" : "Lesson"}</span>
                <button type="button" className="up-lesson-open" disabled>
                  Open
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.up-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.up-wrap * { box-sizing: border-box; }

.up-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.up-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.up-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.up-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }
.up-missing { text-align: center; color: #6B6E96; margin-top: 60px; }

.up-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 26px; text-align: left; }
.up-crumb-sep { color: #C7C4DC; }

.up-hero {
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  padding: 26px 30px; margin-bottom: 30px; position: relative; overflow: hidden;
}
.up-hero::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: var(--accent); }
.up-unit-tag { display: inline-block; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 6px; margin-bottom: 10px; }
.up-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; color: #1B2A4A; margin: 0 0 8px; }
.up-focus { font-size: 13.5px; font-weight: 500; color: #6B6E96; margin: 0 0 10px; }
.up-thread { font-size: 12px; font-weight: 700; }

.up-lessons-hd { margin-bottom: 20px; }
.up-lessons-title { font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 600; color: #23264A; margin-bottom: 6px; }
.up-lessons-sub { font-size: 13px; color: #6B6E96; font-weight: 500; }

.up-lessons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 900px) { .up-lessons-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .up-lessons-grid { grid-template-columns: 1fr; } }

.up-lesson-card {
  background: #fff; border-radius: 14px; padding: 18px 18px 16px; border: 1px solid #EDE6F4;
  box-shadow: 0 4px 14px rgba(27,42,74,0.05);
  display: flex; flex-direction: column;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.up-lesson-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(27,42,74,0.09); }
.up-lesson-card--test { background: #FFFCF0; border-color: #F0E4B8; }

.up-lesson-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.up-lesson-circle { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; flex-shrink: 0; }
.up-lesson-soon { font-size: 9.5px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }

.up-lesson-title { font-family: 'Source Serif 4', serif; font-size: 15.5px; font-weight: 600; color: #23264A; margin: 0 0 5px; }
.up-lesson-focus { font-size: 12px; font-weight: 500; color: #6B6E96; line-height: 1.5; margin: 0 0 14px; }

.up-lesson-foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-top: 12px; border-top: 1px solid #F3F0FB; }
.up-lesson-tag { font-size: 10px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }
.up-lesson-open {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11.5px;
  color: #A6A2C0; background: #F7F5FB; border: 1px solid #EDE6F4;
  border-radius: 999px; padding: 5px 12px; cursor: not-allowed; flex-shrink: 0;
}
`;

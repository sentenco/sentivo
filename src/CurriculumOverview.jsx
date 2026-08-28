import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    accent: "green",
    description: "Longer sentences, more tenses, and the independence to handle everyday situations with confidence.",
  },
];

export default function CurriculumOverview({ onSelectLevel }) {
  const navigate = useNavigate();

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
        <div className="co-topbar">
          <button type="button" className="co-brand" onClick={() => navigate("/library")}>
            <span className="co-brand-mark">S</span>entivo
          </button>
        </div>

        <div className="co-hero-band">
          <div className="co-hero">
            <span className="co-eyebrow">For young learners, ages 6 to 12</span>
            <h1 className="co-title">The <em>Kids</em> Curriculum</h1>
            <p className="co-sub">A structured path from first letters to real conversation, built for one on one online lessons.</p>
          </div>

          <div className="co-stat-row">
            <div className="co-stat"><div className="co-stat-num co-stat-num--a1">2</div><div className="co-stat-label">Levels</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--spark">24</div><div className="co-stat-label">Units</div></div>
            <div className="co-stat"><div className="co-stat-num co-stat-num--a2">144</div><div className="co-stat-label">Lessons</div></div>
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

        <a href="/library/spark" className="co-spark-band">
          <div className="co-spark-text">
            <div className="co-spark-mark">S</div>
            <div>
              <div className="co-spark-title">Not sure where to start?</div>
              <div className="co-spark-sub">Try a free Spark trial class first, no commitment needed.</div>
            </div>
          </div>
          <span className="co-spark-cta">Spark Class &rarr;</span>
        </a>

        <div className="co-mv-row">
          <div className="co-mv-card co-mv-card--mission">
            <div className="co-mv-label">Mission</div>
            <p className="co-mv-text">
              Sentivo helps young learners build real world English confidence through simple, structured one on one online lessons. Our curriculum focuses on everyday communication so learners can use English at school, online, and in daily life.
            </p>
          </div>
          <div className="co-mv-card co-mv-card--vision">
            <div className="co-mv-label">Vision</div>
            <p className="co-mv-text">
              We envision a generation of learners who can express themselves clearly and comfortably in English, starting from the basics and growing step by step. Sentivo makes high quality ESL learning accessible, supportive, and enjoyable for students and teachers alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.co-wrap {
  min-height: 100%;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.co-wrap * { box-sizing: border-box; }

.co-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.co-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,90,54,0.08); }
.co-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(14,190,132,0.08); }

.co-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.co-topbar { margin-bottom: 32px; }
.co-brand {
  display: inline-flex; align-items: center; gap: 2px;
  font-weight: 800; font-size: 18px; color: #23264A;
  background: none; border: none; cursor: pointer; padding: 0;
}
.co-brand-mark { color: #FF5A36; font-family: 'Source Serif 4', serif; }

.co-hero-band {
  background: #FFF3EC;
  border: 1px solid #FFE0D0;
  border-radius: 20px;
  padding: 46px 40px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.co-hero { max-width: 600px; margin: 0 auto; }
.co-eyebrow {
  display: inline-flex; align-items: center; gap: 7px;
  font-weight: 700; font-size: 11.5px; letter-spacing: 0.06em; text-transform: uppercase;
  color: #E8431F; background: #fff;
  padding: 6px 14px; border-radius: 999px; margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(255,90,54,0.14);
}
.co-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 46px;
  color: #23264A;
  margin: 0 0 14px;
  line-height: 1.15;
}
.co-title em { font-style: normal; color: #FF5A36; }
.co-sub { font-size: 15.5px; font-weight: 500; color: #6B6E96; line-height: 1.65; margin: 0 auto; }

.co-stat-row { display: flex; justify-content: center; gap: 10px; margin-top: 26px; }
.co-stat { text-align: center; background: #fff; border-radius: 12px; padding: 10px 22px; box-shadow: 0 4px 14px rgba(35,38,74,0.06); }
.co-stat-num { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 26px; }
.co-stat-num--a1 { color: #FF5A36; }
.co-stat-num--spark { color: #E89E00; }
.co-stat-num--a2 { color: #0EBE84; }
.co-stat-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #6B6E96; margin-top: 2px; }

.co-levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-bottom: 24px; }
@media (max-width: 700px) { .co-levels-grid { grid-template-columns: 1fr; } }

.co-level-card {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 30px 30px 26px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(35,38,74,0.06);
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
  outline: none;
}
.co-level-card:hover, .co-level-card:focus-visible { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(35,38,74,0.12); }
.co-level-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; }
.co-level-card--coral::before { background: #FF5A36; }
.co-level-card--coral:hover { border-color: #FF5A36; }
.co-level-card--green::before { background: #0EBE84; }
.co-level-card--green:hover { border-color: #0EBE84; }

.co-level-top { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; }
.co-level-code { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 40px; }
.co-level-card--coral .co-level-code { color: #FF5A36; }
.co-level-card--green .co-level-code { color: #0EBE84; }
.co-level-tag { font-size: 10.5px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; }
.co-level-card--coral .co-level-tag { color: #E8431F; background: #FFE2D6; }
.co-level-card--green .co-level-tag { color: #06A06E; background: #CFF6E6; }

.co-level-name { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 18px; margin-bottom: 12px; }
.co-level-desc { font-size: 13.5px; font-weight: 500; color: #6B6E96; line-height: 1.65; margin: 0 0 22px; }

.co-level-foot { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #EDE6F4; padding-top: 16px; }
.co-level-units { font-size: 12px; font-weight: 700; color: #6B6E96; }
.co-level-units b { color: #23264A; font-family: 'Source Serif 4', serif; font-size: 14px; }
.co-level-cta { font-size: 12.5px; font-weight: 700; display: inline-flex; align-items: center; gap: 5px; }
.co-level-card--coral .co-level-cta { color: #FF5A36; }
.co-level-card--green .co-level-cta { color: #0EBE84; }

.co-spark-band {
  display: flex; align-items: center; justify-content: space-between; gap: 18px; flex-wrap: wrap;
  background: #FFF0C2;
  border: 1px solid #F0D68A;
  border-radius: 16px;
  padding: 20px 26px;
  text-decoration: none; color: inherit;
  margin-bottom: 44px;
  transition: transform 0.15s ease;
}
.co-spark-band:hover { transform: translateY(-2px); }
.co-spark-text { display: flex; align-items: center; gap: 14px; }
.co-spark-mark {
  width: 38px; height: 38px; border-radius: 10px;
  background: #FFB800; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 16px;
  flex-shrink: 0;
}
.co-spark-title { font-weight: 700; font-size: 13.5px; color: #6B5216; }
.co-spark-sub { font-size: 12px; font-weight: 500; color: #8A7130; margin-top: 2px; }
.co-spark-cta { font-weight: 700; font-size: 12.5px; color: #fff; background: #FFB800; padding: 9px 18px; border-radius: 8px; white-space: nowrap; }

.co-mv-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 700px) { .co-mv-row { grid-template-columns: 1fr; } }
.co-mv-card { border-radius: 16px; padding: 24px 26px; }
.co-mv-card--mission { background: #FF5A36; }
.co-mv-card--vision { background: #23264A; }
.co-mv-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75); margin-bottom: 10px; }
.co-mv-text { font-size: 13.5px; font-weight: 500; color: rgba(255,255,255,0.92); line-height: 1.7; margin: 0; }
`;

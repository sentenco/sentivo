import { useState, useEffect } from "react";
import PROOFREADING_SETS from "./proofreadingData";
import STORY_MAKING_SETS from "./storyMakingData";

export const ACTIVITY_TYPES = [
  {
    key: "proofreading",
    title: "Proofreading",
    blurb: "Find and fix the mistakes, then compare with the answer key.",
    hue: "brown",
    sets: PROOFREADING_SETS,
  },
  {
    key: "storyMaking",
    title: "Story Making",
    blurb: "Look at the picture, use the words, and write a 5-sentence story.",
    hue: "violet",
    sets: STORY_MAKING_SETS,
  },
];

export const COMBOS = [
  { key: "teens-beginner", audience: "Teens", level: "Beginner" },
  { key: "teens-intermediate", audience: "Teens", level: "Intermediate" },
  { key: "adults-beginner", audience: "Adults", level: "Beginner" },
  { key: "adults-intermediate", audience: "Adults", level: "Intermediate" },
];

function ProofreadingBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#FBEDE3" />
      <rect x="36" y="18" width="150" height="84" rx="10" fill="#FFFFFF" />
      <rect x="52" y="36" width="118" height="8" rx="4" fill="#F0B79A" />
      <line x1="52" y1="40" x2="170" y2="40" stroke="#D6483A" strokeWidth="2.5" />
      <rect x="52" y="54" width="90" height="8" rx="4" fill="#F0B79A" />
      <line x1="52" y1="58" x2="142" y2="58" stroke="#D6483A" strokeWidth="2.5" />
      <rect x="52" y="76" width="110" height="8" rx="4" fill="#BFE4CC" />
      <path d="M56 80 l8 8 l16 -16" fill="none" stroke="#2F9E5B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(215,26) rotate(28)">
        <rect x="0" y="0" width="14" height="70" rx="4" fill="#C5692A" />
        <path d="M0 0 L14 0 L7 -16 Z" fill="#8A4A1A" />
      </g>
      <circle cx="270" cy="86" r="20" fill="#F6D8C8" opacity="0.7" />
    </svg>
  );
}

function StoryMakingBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#ECE9FA" />
      <rect x="36" y="20" width="110" height="80" rx="10" fill="#FFFFFF" />
      <rect x="46" y="30" width="90" height="60" rx="6" fill="#DCEEDD" />
      <circle cx="112" cy="46" r="9" fill="#FFC857" />
      <path d="M46 90 Q70 66 96 86 T136 90 Z" fill="#7FBF8C" />
      <rect x="164" y="34" width="118" height="8" rx="4" fill="#C9C2E6" />
      <rect x="164" y="52" width="98" height="8" rx="4" fill="#C9C2E6" />
      <rect x="164" y="70" width="108" height="8" rx="4" fill="#C9C2E6" />
      <rect x="164" y="88" width="66" height="8" rx="4" fill="#C9C2E6" />
      <g transform="translate(255,90) rotate(-20)">
        <rect x="0" y="0" width="12" height="46" rx="3" fill="#7C5CFC" />
        <path d="M0 0 L12 0 L6 -12 Z" fill="#4E3AA6" />
      </g>
    </svg>
  );
}

// Opens one topic's activity as its own standalone popup window, matching
// the Editorial View / lesson-player pattern elsewhere in the app.
// Story Making's picture panel needs a wider window than Proofreading's
// single card.
function openTopicPlayer(typeKey, comboKey, topicIndex) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(typeKey === "storyMaking" ? 1000 : 720, screenW - 40);
  const h = Math.min(700, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/writing/${typeKey}/${comboKey}/${topicIndex}/player`,
    "sentivoWritingPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function WritingActivities() {
  const [typeKey, setTypeKey] = useState(null);
  const [comboKey, setComboKey] = useState(null);

  // Browser back/forward drives navigation instead of an in-page back
  // button — each drill-down pushes a history entry, popping it here
  // unwinds the matching piece of state.
  useEffect(() => {
    function onPopState(e) {
      const depth = e.state?.waDepth || 0;
      if (depth < 2) setComboKey(null);
      if (depth < 1) setTypeKey(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function openType(key) {
    window.history.pushState({ waDepth: 1 }, "");
    setTypeKey(key);
  }
  function openCombo(key) {
    window.history.pushState({ waDepth: 2 }, "");
    setComboKey(key);
  }

  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const combo = COMBOS.find((c) => c.key === comboKey);
  const topics = type && combo ? type.sets[combo.key] : [];

  if (type && combo) {
    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <div className="wa-hero">
          <span className="wa-pill">{type.title} · {combo.audience} {combo.level}</span>
        </div>
        <div className="wa-cat-grid">
          {topics.map((t, i) => (
            <button key={t.title} type="button" className="wa-cat-card" onClick={() => openTopicPlayer(typeKey, comboKey, i)}>
              <span className="wa-cat-tag">Ready</span>
              <span className="wa-cat-title">{t.title}</span>
              <span className="wa-cat-blurb">{t.focus}</span>
              <span className="wa-cat-cta">Start →</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type) {
    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <div className="wa-hero">
          <span className="wa-pill">{type.title}</span>
          <p className="wa-blurb">{type.blurb}</p>
        </div>
        <div className="wa-cat-grid">
          {COMBOS.map((c) => (
            <button key={c.key} type="button" className="wa-cat-card" onClick={() => openCombo(c.key)}>
              <span className="wa-cat-tag">{c.audience}</span>
              <span className="wa-cat-title">{c.level}</span>
              <span className="wa-cat-blurb">2 activities</span>
              <span className="wa-cat-cta">Choose →</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="wa-panel">
      <style>{CSS}</style>
      <div className="wa-block-grid">
        {ACTIVITY_TYPES.map((t) => (
          <button key={t.key} type="button" className={`wa-block wa-block--${t.hue}`} onClick={() => openType(t.key)}>
            {t.key === "proofreading" ? <ProofreadingBanner /> : <StoryMakingBanner />}
            <div className="wa-block-body">
              <h3 className="wa-block-title">{t.title}</h3>
              <p className="wa-block-blurb">{t.blurb}</p>
              <span className="wa-block-cta">See levels →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.wa-panel { width: 100%; font-family: 'Quicksand', sans-serif; position: relative; }
.wa-panel * { box-sizing: border-box; }

.wa-hero { text-align: center; margin-bottom: 24px; }
.wa-pill {
  display: inline-block;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(20px, 2.8vw, 28px);
  color: #2B2A4A;
  background: rgba(197,105,42,0.14);
  border-radius: 999px;
  padding: 8px 22px;
}
.wa-blurb { font-size: 14px; color: #6B5A66; margin: 14px 0 0; }

.wa-block-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; max-width: 760px; margin: 0 auto; width: 100%; }
.wa-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  background: #FFFFFF;
  border: none;
  border-radius: 20px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(43,42,74,0.10);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.wa-block:hover { transform: translateY(-4px); box-shadow: 0 20px 38px rgba(43,42,74,0.16); }
.wa-banner { display: block; width: 100%; height: auto; }
.wa-block-body { padding: 20px 22px 22px; }
.wa-block-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 20px; margin: 0 0 6px; color: #2B2A4A; }
.wa-block-blurb { font-size: 13px; color: #6B6580; margin: 0 0 18px; line-height: 1.5; }
.wa-block-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px; }
.wa-block--brown .wa-block-cta { color: #C5692A; }
.wa-block--violet .wa-block-cta { color: #6E5DC6; }

.wa-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 240px)); gap: 16px; justify-content: center; width: 100%; }
.wa-cat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid #EBC6A6;
  border-radius: 16px;
  padding: 18px;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(197,105,42,0.10);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.wa-cat-card:hover { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(197,105,42,0.18); }
.wa-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #C5692A;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 4px 10px;
  margin-bottom: 10px;
}
.wa-cat-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; margin-bottom: 4px; }
.wa-cat-blurb { font-size: 12px; color: #7A7391; margin-bottom: 12px; }
.wa-cat-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px; color: #C5692A; }

@media (max-width: 560px) {
  .wa-block-grid, .wa-cat-grid { grid-template-columns: 1fr; }
}
`;

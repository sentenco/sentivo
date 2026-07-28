import { useState } from "react";
import DictoglossActivity from "./DictoglossActivity";
import ProofreadingActivity from "./ProofreadingActivity";
import DICTOGLOSS_SETS from "./dictoglossData";
import PROOFREADING_SETS from "./proofreadingData";

const ACTIVITY_TYPES = [
  {
    key: "dictogloss",
    title: "Dictogloss",
    icon: "🎧",
    blurb: "Listen, take notes, and rebuild the text from memory.",
    hue: "orange",
    sets: DICTOGLOSS_SETS,
  },
  {
    key: "proofreading",
    title: "Proofreading",
    icon: "🖊️",
    blurb: "Find and fix the mistakes, then compare with the answer key.",
    hue: "brown",
    sets: PROOFREADING_SETS,
  },
];

const COMBOS = [
  { key: "teens-beginner", audience: "Teens", level: "Beginner" },
  { key: "teens-intermediate", audience: "Teens", level: "Intermediate" },
  { key: "adults-beginner", audience: "Adults", level: "Beginner" },
  { key: "adults-intermediate", audience: "Adults", level: "Intermediate" },
];

export default function WritingActivities() {
  const [typeKey, setTypeKey] = useState(null);
  const [comboKey, setComboKey] = useState(null);
  const [topicIndex, setTopicIndex] = useState(null);

  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const combo = COMBOS.find((c) => c.key === comboKey);
  const topics = type && combo ? type.sets[combo.key] : [];
  const topic = topicIndex !== null ? topics[topicIndex] : null;

  if (type && combo && topic) {
    const Player = type.key === "dictogloss" ? DictoglossActivity : ProofreadingActivity;
    return (
      <Player
        item={topic}
        onBack={() => setTopicIndex(null)}
        backLabel="← Topics"
      />
    );
  }

  if (type && combo) {
    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <button type="button" className="wa-back" onClick={() => setComboKey(null)}>← Levels</button>
        <div className="wa-hero">
          <span className="wa-pill">{type.icon} {type.title} · {combo.audience} {combo.level}</span>
        </div>
        <div className="wa-cat-grid">
          {topics.map((t, i) => (
            <button key={t.title} type="button" className="wa-cat-card" onClick={() => setTopicIndex(i)}>
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
        <button type="button" className="wa-back" onClick={() => setTypeKey(null)}>← Activities</button>
        <div className="wa-hero">
          <span className="wa-pill">{type.icon} {type.title}</span>
          <p className="wa-blurb">{type.blurb}</p>
        </div>
        <div className="wa-cat-grid">
          {COMBOS.map((c) => (
            <button key={c.key} type="button" className="wa-cat-card" onClick={() => setComboKey(c.key)}>
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
          <button key={t.key} type="button" className={`wa-block wa-block--${t.hue}`} onClick={() => setTypeKey(t.key)}>
            <span className="wa-block-icon">{t.icon}</span>
            <h3 className="wa-block-title">{t.title}</h3>
            <p className="wa-block-blurb">{t.blurb}</p>
            <span className="wa-block-cta">See levels →</span>
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

.wa-back {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #A15A2E;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 16px;
  display: block;
}

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

.wa-block-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 320px)); gap: 20px; justify-content: center; width: 100%; }
.wa-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border: none;
  border-radius: 20px;
  padding: 26px 24px;
  cursor: pointer;
  color: #FFFFFF;
  box-shadow: 0 16px 32px rgba(43,42,74,0.16);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.wa-block:hover { transform: translateY(-3px); }
.wa-block--orange { background: linear-gradient(135deg, #F2A365 0%, #C5692A 100%); }
.wa-block--brown { background: linear-gradient(135deg, #B98A63 0%, #83593A 100%); }
.wa-block-icon { font-size: 26px; margin-bottom: 10px; }
.wa-block-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; margin: 0 0 6px; }
.wa-block-blurb { font-size: 13px; opacity: 0.92; margin: 0 0 18px; line-height: 1.5; }
.wa-block-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px; }

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

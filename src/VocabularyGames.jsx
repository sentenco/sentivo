import { useState } from "react";
import WordChoiceGame from "./WordChoiceGame";
import SYNONYMS_SET from "./synonymsGameData";
import ANTONYMS_SET from "./antonymsGameData";

const GAMES = [
  { key: "synonyms", title: "Synonyms", instruction: "Choose the synonym.", blurb: "Pick the word that means the same thing.", icon: "🟰", data: SYNONYMS_SET },
  { key: "antonyms", title: "Antonyms", instruction: "Choose the antonym.", blurb: "Pick the word that means the opposite.", icon: "↔️", data: ANTONYMS_SET },
];

export default function VocabularyGames() {
  const [activeKey, setActiveKey] = useState(null);
  const active = GAMES.find((g) => g.key === activeKey);

  if (active) {
    return (
      <WordChoiceGame
        title={active.title}
        instruction={active.instruction}
        data={active.data}
        onBack={() => setActiveKey(null)}
      />
    );
  }

  return (
    <div className="vg-shell">
      <style>{CSS}</style>
      <div className="vg-hero">
        <span className="vg-eyebrow">Sentivo · Vocabulary</span>
        <h1 className="vg-title">Pick a game</h1>
        <p className="vg-blurb">Quick one-on-one vocabulary practice, 10 questions each.</p>
      </div>
      <div className="vg-grid">
        {GAMES.map((g) => (
          <button key={g.key} type="button" className="vg-card" onClick={() => setActiveKey(g.key)}>
            <span className="vg-icon">{g.icon}</span>
            <span className="vg-card-title">{g.title}</span>
            <span className="vg-card-blurb">{g.blurb}</span>
            <span className="vg-card-cta">Play →</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.vg-shell {
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  padding: clamp(16px, 3vw, 32px);
}
.vg-shell * { box-sizing: border-box; }

.vg-hero { text-align: center; margin-bottom: 30px; }
.vg-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #D6396F;
  background: rgba(214,57,111,0.10);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}
.vg-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(28px, 4vw, 38px); color: #2B2A4A; margin: 0 0 8px; }
.vg-blurb { font-size: 14px; color: #7A7391; margin: 0; }

.vg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 260px));
  gap: 18px;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
}

.vg-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid #EAE5FB;
  border-radius: 18px;
  padding: 22px;
  cursor: pointer;
  box-shadow: 0 12px 26px rgba(124,92,252,0.12);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 18px 34px rgba(124,92,252,0.2); }

.vg-icon { font-size: 26px; margin-bottom: 10px; }
.vg-card-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; color: #2B2A4A; margin-bottom: 4px; }
.vg-card-blurb { font-size: 12.5px; color: #7A7391; margin-bottom: 14px; }
.vg-card-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px; color: #7C5CFC; }
`;

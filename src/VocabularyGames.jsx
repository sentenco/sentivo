import { useState } from "react";
import WordChoiceGame from "./WordChoiceGame";
import WordSortGame from "./WordSortGame";
import SYNONYMS_SET from "./synonymsGameData";
import ANTONYMS_SET from "./antonymsGameData";
import SYNONYMS_TOPICS from "./synonymsTopics";
import ANTONYMS_TOPICS from "./antonymsTopics";
import WORD_SORT_PACKS from "./wordSortPacks";
import OddOneOutGame from "./OddOneOutGame";
import ODD_ONE_OUT_PACKS from "./oddOneOutData";

const GAME_TYPES = [
  {
    key: "synonyms",
    title: "Synonyms",
    icon: "🟰",
    blurb: "Pick the word that means the same thing.",
    instruction: "Choose the synonym.",
    hue: "pink",
    kind: "choice",
  },
  {
    key: "antonyms",
    title: "Antonyms",
    icon: "↔️",
    blurb: "Pick the word that means the opposite.",
    instruction: "Choose the antonym.",
    hue: "purple",
    kind: "choice",
  },
  {
    key: "wordSort",
    title: "Word Sort",
    icon: "🗃️",
    blurb: "Sort each word into the right category.",
    hue: "green",
    kind: "sort",
  },
  {
    key: "oddOneOut",
    title: "Odd One Out",
    icon: "🔎",
    blurb: "Tap the word that doesn't belong.",
    hue: "orange",
    kind: "oddOneOut",
  },
];

const AUDIENCES = ["Kids", "Teens", "Adults"];

const TOPICS = [
  { key: "feelings", title: "Feelings & Emotions" },
  { key: "dailyActions", title: "Daily Actions" },
  { key: "describingPeople", title: "Describing People" },
  { key: "describingThings", title: "Describing Things" },
  { key: "schoolAndStudy", title: "School & Study" },
  { key: "travelAndPlaces", title: "Travel & Places" },
  { key: "homeAndDailyLife", title: "Home & Daily Life" },
];

const CATEGORIES_BY_GAME = {
  synonyms: [
    { key: "sample", title: "Sample Set", blurb: "10 starter words to try the game.", ready: true, data: SYNONYMS_SET },
    ...TOPICS.map((t) => ({
      key: t.key,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS[t.key],
    })),
  ],
  antonyms: [
    { key: "sample", title: "Sample Set", blurb: "10 starter words to try the game.", ready: true, data: ANTONYMS_SET },
    ...TOPICS.map((t) => ({
      key: t.key,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: ANTONYMS_TOPICS[t.key],
    })),
  ],
  wordSort: WORD_SORT_PACKS.map((p) => ({
    key: p.key,
    title: p.title,
    blurb: `${p.categoryA} or ${p.categoryB}? 10 words to sort.`,
    level: p.level,
    ready: true,
    pack: p,
  })),
  oddOneOut: ODD_ONE_OUT_PACKS.map((p) => ({
    key: p.key,
    title: p.title,
    blurb: "15 rounds, 1 odd word each.",
    audience: p.audience,
    ready: true,
    items: p.items,
  })),
};

export default function VocabularyGames() {
  const [gameKey, setGameKey] = useState(null);
  const [categoryKey, setCategoryKey] = useState(null);

  const game = GAME_TYPES.find((g) => g.key === gameKey);
  const categories = gameKey ? CATEGORIES_BY_GAME[gameKey] : [];
  const category = categories.find((c) => c.key === categoryKey);

  if (game && category && category.ready && game.kind === "sort") {
    return (
      <WordSortGame
        title={category.title}
        categoryA={category.pack.categoryA}
        categoryB={category.pack.categoryB}
        items={category.pack.items}
        onBack={() => setCategoryKey(null)}
        backLabel="← Categories"
      />
    );
  }

  if (game && category && category.ready && game.kind === "oddOneOut") {
    return (
      <OddOneOutGame
        title={`${category.audience} · ${category.title}`}
        items={category.items}
        onBack={() => setCategoryKey(null)}
        backLabel="← Categories"
      />
    );
  }

  if (game && category && category.ready) {
    return (
      <WordChoiceGame
        title={`${game.title} · ${category.title}`}
        instruction={game.instruction}
        data={category.data}
        onBack={() => setCategoryKey(null)}
        backLabel="← Categories"
      />
    );
  }

  if (game) {
    return (
      <div className="vg-shell">
        <style>{CSS}</style>
        <div className="vg-page">
          <button type="button" className="vg-back" onClick={() => setGameKey(null)}>← Games</button>
          <div className="vg-hero">
            <span className="vg-eyebrow">Sentivo · Vocabulary</span>
            <h1><span className="vg-pill">{game.icon} {game.title}</span></h1>
            <p className="vg-blurb">{game.blurb}</p>
          </div>
          <div className="vg-row"></div>

          {categories.some((c) => c.audience) ? (
            AUDIENCES.filter((aud) => categories.some((c) => c.audience === aud)).map((aud) => (
              <div key={aud} className="vg-audience-group">
                <span className={`vg-audience-tag vg-audience-tag--${aud.toLowerCase()}`}>{aud}</span>
                <div className="vg-cat-grid">
                  {categories.filter((c) => c.audience === aud).map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      className={`vg-cat-card ${c.ready ? "" : "vg-cat-card--soon"}`}
                      onClick={() => c.ready && setCategoryKey(c.key)}
                      disabled={!c.ready}
                    >
                      <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                      <span className="vg-cat-title">{c.title}</span>
                      <span className="vg-cat-blurb">{c.blurb}</span>
                      {c.ready && <span className="vg-cat-cta">Play →</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="vg-cat-grid">
              {categories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`vg-cat-card ${c.ready ? "" : "vg-cat-card--soon"}`}
                  onClick={() => c.ready && setCategoryKey(c.key)}
                  disabled={!c.ready}
                >
                  <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                  {c.level && <span className="vg-cat-level">{c.level}</span>}
                  <span className="vg-cat-title">{c.title}</span>
                  <span className="vg-cat-blurb">{c.blurb}</span>
                  {c.ready && <span className="vg-cat-cta">Play →</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="vg-shell">
      <style>{CSS}</style>
      <div className="vg-page">
        <div className="vg-hero">
          <span className="vg-eyebrow">Sentivo · Vocabulary</span>
          <h1><span className="vg-pill">🗂️ Word Bank</span></h1>
          <p className="vg-blurb">Quick one-on-one vocabulary games. Pick a type, then a category.</p>
        </div>
        <div className="vg-row"></div>

        <div className="vg-block-grid">
          {GAME_TYPES.map((g) => (
            <button key={g.key} type="button" className={`vg-block vg-block--${g.hue}`} onClick={() => setGameKey(g.key)}>
              <h3 className="vg-block-title">{g.title}</h3>
              <p className="vg-block-blurb">{g.blurb}</p>
              <span className="vg-block-cta">See categories →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.vg-shell { width: 100%; font-family: 'Quicksand', sans-serif; }
.vg-shell * { box-sizing: border-box; }

.vg-page {
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 22px;
  padding: clamp(24px, 3.4vw, 40px) clamp(18px, 3vw, 32px) clamp(30px, 4vw, 44px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #FCF9F1 0%, #F5EDD8 100%);
}

.vg-back {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #96721B;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 12px;
}

.vg-hero { text-align: center; }
.vg-eyebrow {
  display: block;
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #96721B;
  margin-bottom: 12px;
}
.vg-pill {
  display: inline-block;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 3.4vw, 34px);
  color: #2B2A4A;
  background: rgba(184,140,26,0.16);
  border-radius: 999px;
  padding: 8px 26px;
}
.vg-blurb { font-size: 14px; color: #6B5A66; margin: 14px 0 0; }

.vg-row { position: relative; height: 2px; width: 100%; max-width: 700px; margin: clamp(22px, 2.8vw, 32px) 0; background: #E8D6A0; }
.vg-row::before, .vg-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #B88C1A; }
.vg-row::before { left: 0; }
.vg-row::after { right: 0; }

.vg-block-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 280px)); gap: 20px; justify-content: center; width: 100%; }
.vg-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: none;
  border-radius: 16px;
  padding: 24px 22px 22px 26px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(43,42,74,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-block::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; }
.vg-block:hover { transform: translateY(-3px); box-shadow: 0 16px 32px rgba(43,42,74,0.14); }
.vg-block--pink::before { background: #D6396F; }
.vg-block--purple::before { background: #7C5CFC; }
.vg-block--green::before { background: #1F9D6E; }
.vg-block--orange::before { background: #D97706; }
.vg-block-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; margin: 0 0 6px; color: #2B2A4A; }
.vg-block-blurb { font-size: 13px; color: #6B6580; margin: 0 0 18px; line-height: 1.5; }
.vg-block-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px; padding: 9px 0; border-radius: 8px; text-align: center; width: 100%; color: #FFFFFF; }
.vg-block--pink .vg-block-cta { background: #D6396F; }
.vg-block--purple .vg-block-cta { background: #7C5CFC; }
.vg-block--green .vg-block-cta { background: #1F9D6E; }
.vg-block--orange .vg-block-cta { background: #D97706; }

.vg-audience-group { width: 100%; margin-bottom: 28px; }
.vg-audience-group:last-child { margin-bottom: 0; }
.vg-audience-tag {
  display: inline-block;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13px;
  border-radius: 999px;
  padding: 5px 16px;
  margin-bottom: 14px;
}
.vg-audience-tag--kids { color: #B4650F; background: rgba(251,191,36,0.20); }
.vg-audience-tag--teens { color: #1F9D6E; background: rgba(52,211,153,0.16); }
.vg-audience-tag--adults { color: #4C3F91; background: rgba(124,92,252,0.14); }

.vg-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 240px)); gap: 16px; justify-content: center; width: 100%; }
.vg-cat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid #F5D3E1;
  border-radius: 16px;
  padding: 18px;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(210,74,124,0.10);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-cat-card:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(210,74,124,0.18); }
.vg-cat-card--soon { opacity: 0.6; cursor: default; }
.vg-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #D6396F;
  background: rgba(214,57,111,0.10);
  border-radius: 999px;
  padding: 4px 10px;
  margin-bottom: 10px;
}
.vg-cat-card--soon .vg-cat-tag { color: #9A93A8; background: rgba(154,147,168,0.12); }
.vg-cat-level { font-size: 10.5px; font-weight: 700; color: #9A93A8; margin-bottom: 6px; }
.vg-cat-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; margin-bottom: 4px; }
.vg-cat-blurb { font-size: 12px; color: #7A7391; margin-bottom: 12px; }
.vg-cat-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px; color: #D6396F; }

@media (max-width: 560px) {
  .vg-block-grid, .vg-cat-grid { grid-template-columns: 1fr; }
}
`;

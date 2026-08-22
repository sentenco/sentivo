import { useState, useEffect } from "react";
import ANTONYMS_SET from "./antonymsGameData";
import SYNONYMS_TOPICS from "./synonymsTopics";
import SYNONYMS_TOPICS_B1B2 from "./synonymsTopicsB1B2";
import SYNONYMS_TOPICS_C1C2 from "./synonymsTopicsC1C2";
import ANTONYMS_TOPICS from "./antonymsTopics";
import WORD_SORT_PACKS from "./wordSortPacks";
import ODD_ONE_OUT_PACKS from "./oddOneOutData";

export const GAME_TYPES = [
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

function GameBanner({ name }) {
  const banners = {
    // Just the equal sign — the mark, not a diagram of it.
    synonyms: (
      <>
        <defs>
          <linearGradient id="vgb-syn-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE3EC" />
            <stop offset="1" stopColor="#FFC9DC" />
          </linearGradient>
          <linearGradient id="vgb-syn-mark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF7FA8" />
            <stop offset="1" stopColor="#D6396F" />
          </linearGradient>
          <filter id="vgb-syn-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#B0285A" floodOpacity="0.22" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-syn-bg)" />
        <g filter="url(#vgb-syn-shadow)">
          <rect x="112" y="52" width="96" height="16" rx="8" fill="url(#vgb-syn-mark)" />
          <rect x="112" y="82" width="96" height="16" rx="8" fill="url(#vgb-syn-mark)" />
        </g>
      </>
    ),
    // A classic black-and-white yin-yang — opposite, but two halves of
    // one whole meaning-pair.
    antonyms: (
      <>
        <defs>
          <linearGradient id="vgb-ant-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EEE9FC" />
            <stop offset="1" stopColor="#DCD1F7" />
          </linearGradient>
          <filter id="vgb-ant-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#4B3690" floodOpacity="0.22" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-ant-bg)" />
        <g filter="url(#vgb-ant-shadow)">
          <circle cx="160" cy="70" r="50" fill="#1B1B22" />
          <path d="M160 20 A50 50 0 0 1 160 120 A25 25 0 0 1 160 70 A25 25 0 0 0 160 20 Z" fill="#FFFFFF" />
          <circle cx="160" cy="70" r="50" fill="none" stroke="#1B1B22" strokeWidth="2" />
          <circle cx="160" cy="45" r="8" fill="#1B1B22" />
          <circle cx="160" cy="95" r="8" fill="#FFFFFF" />
        </g>
      </>
    ),
    // A hopper of mixed tiles funnels down into two color-sorted bins —
    // the physical act of sorting, not just an icon of it.
    wordSort: (
      <>
        <defs>
          <linearGradient id="vgb-sort-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E3F6EC" />
            <stop offset="1" stopColor="#C9ECDA" />
          </linearGradient>
          <linearGradient id="vgb-sort-binL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3FC28C" />
            <stop offset="1" stopColor="#1F9D6E" />
          </linearGradient>
          <linearGradient id="vgb-sort-binR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#20A578" />
            <stop offset="1" stopColor="#0F7A54" />
          </linearGradient>
          <filter id="vgb-sort-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0F6B48" floodOpacity="0.2" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-sort-bg)" />
        <path d="M118 28 H202 L172 66 H148 Z" fill="#FFFFFF" opacity="0.85" stroke="#8FD1A8" strokeWidth="2" />
        <g filter="url(#vgb-sort-shadow)">
          <rect x="70" y="90" width="72" height="34" rx="8" fill="url(#vgb-sort-binL)" />
          <rect x="178" y="90" width="72" height="34" rx="8" fill="url(#vgb-sort-binR)" />
        </g>
        <rect x="132" y="16" width="24" height="24" rx="6" fill="#FFB648" transform="rotate(-10 144 28)" />
        <rect x="168" y="10" width="22" height="22" rx="6" fill="#FF8A6B" transform="rotate(8 179 21)" />
        <path d="M155 70 Q120 82 100 92" fill="none" stroke="#8FD1A8" strokeWidth="2.5" strokeDasharray="4 5" />
        <path d="M165 70 Q205 82 222 92" fill="none" stroke="#8FD1A8" strokeWidth="2.5" strokeDasharray="4 5" />
        <rect x="86" y="98" width="18" height="18" rx="5" fill="#FFB648" transform="rotate(-6 95 107)" />
        <rect x="204" y="98" width="18" height="18" rx="5" fill="#FF8A6B" transform="rotate(6 213 107)" />
      </>
    ),
    // A magnifying glass catches the one shape that breaks the pattern —
    // the exact moment of noticing.
    oddOneOut: (
      <>
        <defs>
          <linearGradient id="vgb-odd-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDEFDD" />
            <stop offset="1" stopColor="#FBDDBB" />
          </linearGradient>
          <radialGradient id="vgb-odd-glass" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFF6EA" stopOpacity="0.35" />
          </radialGradient>
          <filter id="vgb-odd-shadow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#9A5A16" floodOpacity="0.25" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-odd-bg)" />
        <g opacity="0.5" fill="#E3B27E">
          <circle cx="58" cy="48" r="10" /><circle cx="92" cy="32" r="10" /><circle cx="58" cy="100" r="10" />
          <circle cx="94" cy="118" r="10" /><circle cx="252" cy="42" r="10" /><circle cx="256" cy="102" r="10" />
        </g>
        <rect x="150" y="50" width="32" height="32" rx="7" fill="#E8871A" transform="rotate(45 166 66)" />
        <g filter="url(#vgb-odd-shadow)">
          <circle cx="166" cy="66" r="34" fill="url(#vgb-odd-glass)" stroke="#8A4A1A" strokeWidth="6" />
          <rect x="187" y="88" width="15" height="46" rx="7.5" fill="#6B3D14" transform="rotate(42 194.5 111)" />
        </g>
        <path d="M148 50 a24 24 0 0 1 24 -14" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      </>
    ),
  };
  return (
    <svg className="vg-banner" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
      {banners[name] || <rect width="320" height="140" fill="#EDE7F6" />}
    </svg>
  );
}

const AUDIENCES = ["Kids", "Teens", "Adults"];
const LEVEL_GROUPS = ["A1-A2", "B1-B2", "C1-C2"];

const TOPICS = [
  { key: "feelings", title: "Feelings & Emotions" },
  { key: "dailyActions", title: "Daily Actions" },
  { key: "describingPeople", title: "Describing People" },
  { key: "describingThings", title: "Describing Things" },
  { key: "schoolAndStudy", title: "School & Study" },
  { key: "travelAndPlaces", title: "Travel & Places" },
  { key: "homeAndDailyLife", title: "Home & Daily Life" },
];

// Synonyms-only topic lists, one per level -- deliberately different
// topics between levels (not just harder words under the same names),
// and deliberately NOT the shared `TOPICS` array above (that one stays
// Antonyms-only) so editing Synonyms never affects Antonyms. A1-A2 stays
// concrete/everyday, B1-B2 shifts to work/media/civic themes, C1-C2
// shifts to abstract/academic/global themes. 10 topics per level.
const SYNONYMS_TOPICS_LIST_A1A2 = [
  { key: "feelings", title: "Feelings & Emotions" },
  { key: "dailyActions", title: "Daily Actions" },
  { key: "describingPeople", title: "Describing People" },
  { key: "describingThings", title: "Describing Things" },
  { key: "schoolAndStudy", title: "School & Study" },
  { key: "travelAndPlaces", title: "Travel & Places" },
  { key: "homeAndDailyLife", title: "Home & Daily Life" },
  { key: "foodAndCooking", title: "Food & Cooking" },
  { key: "weatherAndSeasons", title: "Weather & Seasons" },
  { key: "hobbiesAndFreeTime", title: "Hobbies & Free Time" },
];
const SYNONYMS_TOPICS_LIST_B1B2 = [
  { key: "workAndCareer", title: "Work & Career" },
  { key: "mediaAndTechnology", title: "Media & Technology" },
  { key: "healthAndWellbeing", title: "Health & Wellbeing" },
  { key: "moneyAndShopping", title: "Money & Shopping" },
  { key: "natureAndEnvironment", title: "Nature & Environment" },
  { key: "opinionsAndDebate", title: "Opinions & Debate" },
  { key: "communityAndSociety", title: "Community & Society" },
  { key: "educationAndLearning", title: "Education & Learning" },
  { key: "travelAndTourism", title: "Travel & Tourism" },
  { key: "relationshipsAndFamily", title: "Relationships & Family" },
];
const SYNONYMS_TOPICS_LIST_C1C2 = [
  { key: "businessAndEconomics", title: "Business & Economics" },
  { key: "politicsAndGovernance", title: "Politics & Governance" },
  { key: "scienceAndInnovation", title: "Science & Innovation" },
  { key: "artsAndCulture", title: "Arts & Culture" },
  { key: "ethicsAndPhilosophy", title: "Ethics & Philosophy" },
  { key: "globalAffairs", title: "Global Affairs" },
  { key: "psychologyAndBehavior", title: "Psychology & Behavior" },
  { key: "lawAndJustice", title: "Law & Justice" },
  { key: "linguisticsAndCommunication", title: "Linguistics & Communication" },
  { key: "academiaAndResearch", title: "Academia & Research" },
];

export const CATEGORIES_BY_GAME = {
  synonyms: [
    ...SYNONYMS_TOPICS_LIST_A1A2.map((t) => ({
      key: `${t.key}-a1a2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS[t.key],
      cefrGroup: "A1-A2",
    })),
    ...SYNONYMS_TOPICS_LIST_B1B2.map((t) => ({
      key: `${t.key}-b1b2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS_B1B2[t.key],
      cefrGroup: "B1-B2",
    })),
    ...SYNONYMS_TOPICS_LIST_C1C2.map((t) => ({
      key: `${t.key}-c1c2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS_C1C2[t.key],
      cefrGroup: "C1-C2",
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

// Opens one category's game as its own standalone popup window, matching
// the Editorial View / lesson-player pattern elsewhere in the app.
function openCategoryPlayer(gameKey, categoryKey) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(720, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/vocabulary/${gameKey}/${categoryKey}/player`,
    "sentivoVocabularyPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function VocabularyGames() {
  const [gameKey, setGameKey] = useState(null);
  const [levelTab, setLevelTab] = useState(LEVEL_GROUPS[0]);

  // Browser back/forward drives navigation instead of an in-page back
  // button — each drill-down pushes a history entry, popping it here
  // unwinds the matching piece of state.
  useEffect(() => {
    function onPopState(e) {
      const depth = e.state?.vgDepth || 0;
      if (depth < 1) setGameKey(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function openGame(key) {
    window.history.pushState({ vgDepth: 1 }, "");
    setGameKey(key);
    setLevelTab(LEVEL_GROUPS[0]);
  }

  const game = GAME_TYPES.find((g) => g.key === gameKey);
  const categories = gameKey ? CATEGORIES_BY_GAME[gameKey] : [];
  const hasLevelGroups = categories.some((c) => c.cefrGroup);
  const levelCategories = hasLevelGroups ? categories.filter((c) => c.cefrGroup === levelTab) : [];

  if (game) {
    return (
      <div className="vg-shell">
        <style>{CSS}</style>
        <div className="vg-page">
          <div className="vg-hero">
            <span className="vg-eyebrow">Sentivo · Vocabulary</span>
            <h1><span className="vg-pill">{game.icon} {game.title}</span></h1>
            <p className="vg-blurb">{game.blurb}</p>
          </div>
          <div className="vg-row"></div>

          {hasLevelGroups ? (
            <>
              <div className="vg-level-tabs">
                {LEVEL_GROUPS.filter((lvl) => categories.some((c) => c.cefrGroup === lvl)).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    className={`vg-level-tab ${levelTab === lvl ? "is-active" : ""}`}
                    onClick={() => setLevelTab(lvl)}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
              <div className="vg-cat-grid">
                {levelCategories.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    className={`vg-cat-card vg-cat-card--${game.hue} ${c.ready ? "" : "vg-cat-card--soon"}`}
                    onClick={() => c.ready && openCategoryPlayer(gameKey, c.key)}
                    disabled={!c.ready}
                  >
                    <div className="vg-cat-top">
                      <span className="vg-cat-icon">{game.icon}</span>
                      <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                    </div>
                    <span className="vg-cat-title">{c.title}</span>
                    <span className="vg-cat-blurb">{c.blurb}</span>
                    {c.ready && <span className="vg-cat-cta">Play →</span>}
                  </button>
                ))}
              </div>
            </>
          ) : categories.some((c) => c.audience) ? (
            AUDIENCES.filter((aud) => categories.some((c) => c.audience === aud)).map((aud) => (
              <div key={aud} className="vg-audience-group">
                <span className={`vg-audience-tag vg-audience-tag--${aud.toLowerCase()}`}>{aud}</span>
                <div className="vg-cat-grid">
                  {categories.filter((c) => c.audience === aud).map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      className={`vg-cat-card vg-cat-card--${game.hue} ${c.ready ? "" : "vg-cat-card--soon"}`}
                      onClick={() => c.ready && openCategoryPlayer(gameKey, c.key)}
                      disabled={!c.ready}
                    >
                      <div className="vg-cat-top">
                        <span className="vg-cat-icon">{game.icon}</span>
                        <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                      </div>
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
                  className={`vg-cat-card vg-cat-card--${game.hue} ${c.ready ? "" : "vg-cat-card--soon"}`}
                  onClick={() => c.ready && openCategoryPlayer(gameKey, c.key)}
                  disabled={!c.ready}
                >
                  <div className="vg-cat-top">
                    <span className="vg-cat-icon">{game.icon}</span>
                    <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                  </div>
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
            <button key={g.key} type="button" className={`vg-block vg-block--${g.hue}`} onClick={() => openGame(g.key)}>
              <GameBanner name={g.key} />
              <div className="vg-block-body">
                <h3 className="vg-block-title">{g.title}</h3>
                <p className="vg-block-blurb">{g.blurb}</p>
                <span className="vg-block-cta">See categories →</span>
              </div>
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

.vg-block-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; max-width: 660px; margin: 0 auto; width: 100%; }
.vg-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
  background: #FFFFFF;
  border: none;
  border-radius: 18px;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(43,42,74,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-block:hover { transform: translateY(-3px); box-shadow: 0 18px 34px rgba(43,42,74,0.14); }
.vg-banner { display: block; width: 100%; height: auto; }
.vg-block-body { padding: 18px 20px 20px; }
.vg-block-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 18px; margin: 0 0 6px; color: #2B2A4A; }
.vg-block-blurb { font-size: 13px; color: #6B6580; margin: 0 0 16px; line-height: 1.5; }
.vg-block-cta { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px; }
.vg-block--pink .vg-block-cta { color: #D6396F; }
.vg-block--purple .vg-block-cta { color: #7C5CFC; }
.vg-block--green .vg-block-cta { color: #1F9D6E; }
.vg-block--orange .vg-block-cta { color: #D97706; }

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

.vg-level-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; justify-content: center; }
.vg-level-tab {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #6B5A66;
  background: #FFFFFF;
  border: 1px solid #F5D3E1;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.vg-level-tab:hover { border-color: #D6396F; color: #D6396F; }
.vg-level-tab.is-active { background: #D6396F; border-color: #D6396F; color: #FFFFFF; }

.vg-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 260px)); gap: 18px; justify-content: center; width: 100%; }
.vg-cat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid var(--vgc-border, #F5D3E1);
  border-radius: 18px;
  padding: 18px 18px 16px;
  cursor: pointer;
  box-shadow: 0 10px 22px var(--vgc-shadow, rgba(210,74,124,0.10));
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.vg-cat-card:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 16px 32px var(--vgc-shadow-hover, rgba(210,74,124,0.18)); border-color: var(--vgc-accent, #D6396F); }
.vg-cat-card--soon { opacity: 0.55; cursor: default; }
.vg-cat-card--soon:hover { transform: none; }

.vg-cat-card--pink   { --vgc-accent: #D6396F; --vgc-icon-bg: rgba(214,57,111,0.12); --vgc-border: #F5D3E1; --vgc-shadow: rgba(210,74,124,0.10); --vgc-shadow-hover: rgba(210,74,124,0.18); }
.vg-cat-card--purple { --vgc-accent: #7C5CFC; --vgc-icon-bg: rgba(124,92,252,0.14); --vgc-border: #E3D9FB; --vgc-shadow: rgba(90,60,200,0.10); --vgc-shadow-hover: rgba(90,60,200,0.18); }
.vg-cat-card--green  { --vgc-accent: #1F9D6E; --vgc-icon-bg: rgba(31,157,110,0.14); --vgc-border: #CBEDDD; --vgc-shadow: rgba(15,120,80,0.10); --vgc-shadow-hover: rgba(15,120,80,0.18); }
.vg-cat-card--orange { --vgc-accent: #D97706; --vgc-icon-bg: rgba(217,119,6,0.14); --vgc-border: #F7DFBC; --vgc-shadow: rgba(180,100,10,0.10); --vgc-shadow-hover: rgba(180,100,10,0.18); }

.vg-cat-top { display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 12px; }
.vg-cat-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--vgc-icon-bg, rgba(214,57,111,0.12));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.vg-cat-card--soon .vg-cat-icon { background: rgba(154,147,168,0.14); filter: grayscale(1); opacity: 0.7; }
.vg-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vgc-accent, #D6396F);
  background: var(--vgc-icon-bg, rgba(214,57,111,0.10));
  border-radius: 999px;
  padding: 4px 10px;
}
.vg-cat-card--soon .vg-cat-tag { color: #9A93A8; background: rgba(154,147,168,0.12); }
.vg-cat-level { font-size: 10.5px; font-weight: 700; color: #9A93A8; margin-bottom: 6px; }
.vg-cat-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16.5px; color: #2B2A4A; margin-bottom: 6px; line-height: 1.25; }
.vg-cat-blurb { font-size: 12.5px; color: #7A7391; line-height: 1.45; margin-bottom: 18px; }
.vg-cat-cta {
  margin-top: auto;
  align-self: flex-start;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  background: var(--vgc-accent, #D6396F);
  border-radius: 999px;
  padding: 7px 15px;
}

@media (max-width: 560px) {
  .vg-block-grid, .vg-cat-grid { grid-template-columns: 1fr; }
}
`;

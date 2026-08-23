import { useState, useEffect } from "react";
import SYNONYMS_TOPICS from "./synonymsTopics";
import SYNONYMS_TOPICS_B1B2 from "./synonymsTopicsB1B2";
import SYNONYMS_TOPICS_C1C2 from "./synonymsTopicsC1C2";
import ANTONYMS_TOPICS from "./antonymsTopics";
import ANTONYMS_TOPICS_B1B2 from "./antonymsTopicsB1B2";
import ANTONYMS_TOPICS_C1C2 from "./antonymsTopicsC1C2";
import WORD_SORT_PACKS from "./wordSortPacks";
import ODD_ONE_OUT_PACKS from "./oddOneOutData";

export const GAME_TYPES = [
  {
    key: "synonyms",
    title: "Synonyms",
    icon: "🟰",
    blurb: "Pick the word that means the same thing.",
    instruction: "Choose the synonym.",
    hue: "coral",
    kind: "choice",
  },
  {
    key: "antonyms",
    title: "Antonyms",
    icon: "↔️",
    blurb: "Pick the word that means the opposite.",
    instruction: "Choose the antonym.",
    hue: "teal",
    kind: "choice",
  },
  {
    key: "wordSort",
    title: "Word Sort",
    icon: "🗃️",
    blurb: "Sort each word into the right category.",
    hue: "seafoam",
    kind: "sort",
  },
  {
    key: "oddOneOut",
    title: "Odd One Out",
    icon: "🔎",
    blurb: "Tap the word that doesn't belong.",
    hue: "gold",
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
            <stop offset="0" stopColor="#FFE1DA" />
            <stop offset="1" stopColor="#FFC5B4" />
          </linearGradient>
          <linearGradient id="vgb-syn-mark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF9376" />
            <stop offset="1" stopColor="#E85A3D" />
          </linearGradient>
          <filter id="vgb-syn-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#C1451F" floodOpacity="0.22" />
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
            <stop offset="0" stopColor="#E1F3F3" />
            <stop offset="1" stopColor="#C5E8E6" />
          </linearGradient>
          <filter id="vgb-ant-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#0E6E7C" floodOpacity="0.22" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-ant-bg)" />
        <g filter="url(#vgb-ant-shadow)">
          <circle cx="160" cy="70" r="50" fill="#0E6E7C" />
          <path d="M160 20 A50 50 0 0 1 160 120 A25 25 0 0 1 160 70 A25 25 0 0 0 160 20 Z" fill="#FFFFFF" />
          <circle cx="160" cy="70" r="50" fill="none" stroke="#0E6E7C" strokeWidth="2" />
          <circle cx="160" cy="45" r="8" fill="#0E6E7C" />
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
            <stop offset="0" stopColor="#DFF7EF" />
            <stop offset="1" stopColor="#C3EEDD" />
          </linearGradient>
          <linearGradient id="vgb-sort-binL" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6FE0BE" />
            <stop offset="1" stopColor="#4FD1A5" />
          </linearGradient>
          <linearGradient id="vgb-sort-binR" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3FBF8F" />
            <stop offset="1" stopColor="#1C8A68" />
          </linearGradient>
          <filter id="vgb-sort-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#146B4E" floodOpacity="0.2" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-sort-bg)" />
        <path d="M118 28 H202 L172 66 H148 Z" fill="#FFFFFF" opacity="0.85" stroke="#8FD1A8" strokeWidth="2" />
        <g filter="url(#vgb-sort-shadow)">
          <rect x="70" y="90" width="72" height="34" rx="8" fill="url(#vgb-sort-binL)" />
          <rect x="178" y="90" width="72" height="34" rx="8" fill="url(#vgb-sort-binR)" />
        </g>
        <rect x="132" y="16" width="24" height="24" rx="6" fill="#FFCB4C" transform="rotate(-10 144 28)" />
        <rect x="168" y="10" width="22" height="22" rx="6" fill="#FF8F6B" transform="rotate(8 179 21)" />
        <path d="M155 70 Q120 82 100 92" fill="none" stroke="#8FD1A8" strokeWidth="2.5" strokeDasharray="4 5" />
        <path d="M165 70 Q205 82 222 92" fill="none" stroke="#8FD1A8" strokeWidth="2.5" strokeDasharray="4 5" />
        <rect x="86" y="98" width="18" height="18" rx="5" fill="#FFCB4C" transform="rotate(-6 95 107)" />
        <rect x="204" y="98" width="18" height="18" rx="5" fill="#FF8F6B" transform="rotate(6 213 107)" />
      </>
    ),
    // A magnifying glass catches the one shape that breaks the pattern —
    // the exact moment of noticing.
    oddOneOut: (
      <>
        <defs>
          <linearGradient id="vgb-odd-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFF3D9" />
            <stop offset="1" stopColor="#FCE4B0" />
          </linearGradient>
          <radialGradient id="vgb-odd-glass" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FFF6EA" stopOpacity="0.35" />
          </radialGradient>
          <filter id="vgb-odd-shadow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#8A5A16" floodOpacity="0.25" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#vgb-odd-bg)" />
        <g opacity="0.5" fill="#E8C98A">
          <circle cx="58" cy="48" r="10" /><circle cx="92" cy="32" r="10" /><circle cx="58" cy="100" r="10" />
          <circle cx="94" cy="118" r="10" /><circle cx="252" cy="42" r="10" /><circle cx="256" cy="102" r="10" />
        </g>
        <rect x="150" y="50" width="32" height="32" rx="7" fill="#E8A81A" transform="rotate(45 166 66)" />
        <g filter="url(#vgb-odd-shadow)">
          <circle cx="166" cy="66" r="34" fill="url(#vgb-odd-glass)" stroke="#A9720A" strokeWidth="6" />
          <rect x="187" y="88" width="15" height="46" rx="7.5" fill="#7A5108" transform="rotate(42 194.5 111)" />
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

const LEVEL_GROUPS = ["A1-A2", "B1-B2", "C1-C2"];

// Shared topic lists (key/title only), one per level -- used by both
// Synonyms and Antonyms so the two games pair up under the same level
// tabs and topic names; each game supplies its own word data per key.
// Deliberately different topics between levels (not just harder words
// under the same names): A1-A2 stays concrete/everyday, B1-B2 shifts to
// work/media/civic themes, C1-C2 shifts to abstract/academic/global
// themes. 10 topics per level.
const VOCAB_TOPICS_LIST_A1A2 = [
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
const VOCAB_TOPICS_LIST_B1B2 = [
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
const VOCAB_TOPICS_LIST_C1C2 = [
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
    ...VOCAB_TOPICS_LIST_A1A2.map((t) => ({
      key: `${t.key}-a1a2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS[t.key],
      cefrGroup: "A1-A2",
    })),
    ...VOCAB_TOPICS_LIST_B1B2.map((t) => ({
      key: `${t.key}-b1b2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS_B1B2[t.key],
      cefrGroup: "B1-B2",
    })),
    ...VOCAB_TOPICS_LIST_C1C2.map((t) => ({
      key: `${t.key}-c1c2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: SYNONYMS_TOPICS_C1C2[t.key],
      cefrGroup: "C1-C2",
    })),
  ],
  antonyms: [
    ...VOCAB_TOPICS_LIST_A1A2.map((t) => ({
      key: `${t.key}-a1a2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: ANTONYMS_TOPICS[t.key],
      cefrGroup: "A1-A2",
    })),
    ...VOCAB_TOPICS_LIST_B1B2.map((t) => ({
      key: `${t.key}-b1b2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: ANTONYMS_TOPICS_B1B2[t.key],
      cefrGroup: "B1-B2",
    })),
    ...VOCAB_TOPICS_LIST_C1C2.map((t) => ({
      key: `${t.key}-c1c2`,
      title: t.title,
      blurb: "10 words on this topic.",
      ready: true,
      data: ANTONYMS_TOPICS_C1C2[t.key],
      cefrGroup: "C1-C2",
    })),
  ],
  wordSort: WORD_SORT_PACKS.map((p) => ({
    key: p.key,
    title: p.title,
    blurb: `${p.categoryA} or ${p.categoryB}? 10 words to sort.`,
    cefrGroup: p.cefrGroup,
    ready: true,
    pack: p,
  })),
  oddOneOut: ODD_ONE_OUT_PACKS.map((p) => ({
    key: p.key,
    title: p.title,
    blurb: "10 rounds, 1 odd word each.",
    cefrGroup: p.cefrGroup,
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

// One entry per Vocabulary Lesson deck -- distinct English word phenomena
// (stress, homophones, false friends...), not the topic/game-category
// data above. Each opens the same way Grammar's Supplementary lessons do.
export const VOCAB_LESSONS = [
  {
    key: "stress-shift",
    title: "Stress-Shift Word Pairs",
    icon: "🗣️",
    hue: "coral",
    blurb: "record vs record — same spelling, the stress moves and the meaning changes.",
    href: "/library/vocabulary/lessons/stress-shift",
    ready: true,
  },
  {
    key: "homophones",
    title: "Homophones",
    icon: "👂",
    hue: "gold",
    blurb: "their, there, they're — they sound identical. Only the spelling tells them apart.",
    href: "/library/vocabulary/lessons/homophones",
    ready: true,
  },
  {
    key: "near-synonym-nuance",
    title: "Near-Synonym Nuance",
    icon: "🎚️",
    hue: "seafoam",
    blurb: "big, huge, enormous — same rough meaning, different strength. Rank them, then check.",
    href: "/library/vocabulary/lessons/near-synonym-nuance",
    ready: true,
  },
  {
    key: "word-families",
    title: "Word Families",
    icon: "🌳",
    hue: "teal",
    blurb: "decide, decision, decisive, decisively — one root, four jobs. Match them to their slot.",
    href: "/library/vocabulary/lessons/word-families",
    ready: true,
  },
  {
    key: "confusable-pairs",
    title: "Confusable Pairs",
    icon: "⚖️",
    hue: "sky",
    blurb: "affect vs effect, loose vs lose — pick the right word for the sentence, then see the rule.",
    href: "/library/vocabulary/lessons/confusable-pairs",
    ready: true,
  },
  {
    key: "tricky-uncountables",
    title: "Tricky Uncountables",
    icon: "🧺",
    hue: "violet",
    blurb: "information, advice, furniture — no plural, no \"a/an\". Pick the right usage.",
    href: "/library/vocabulary/lessons/tricky-uncountables",
    ready: true,
  },
  {
    key: "collocations",
    title: "Collocations",
    icon: "🤝",
    hue: "rose",
    blurb: "make a decision, do homework, take a break — pick the verb that actually goes with it.",
    href: "/library/vocabulary/lessons/collocations",
    ready: true,
  },
];

function openLessonPlayer(href) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1120, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    href,
    "sentivoVocabLesson",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function VocabularyGames({ query }) {
  const [mainTab, setMainTab] = useState("lessons");
  const [gameKey, setGameKey] = useState(null);
  const [levelTab, setLevelTab] = useState(LEVEL_GROUPS[0]);
  const q = query.trim().toLowerCase();

  function selectMainTab(tab) {
    setMainTab(tab);
    setGameKey(null);
  }

  const tabBar = (
    <div className="vg-maintabs">
      <button
        type="button"
        className={`vg-maintab ${mainTab === "lessons" ? "is-active" : ""}`}
        onClick={() => selectMainTab("lessons")}
      >
        Lessons
      </button>
      <button
        type="button"
        className={`vg-maintab ${mainTab === "games" ? "is-active" : ""}`}
        onClick={() => selectMainTab("games")}
      >
        Games
      </button>
    </div>
  );

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

  // Search results: a flat list of matching categories across every game
  // type, bypassing the normal "pick a type, then a category" drill-down
  // (and taking priority even if already drilled into one) so the header
  // search box works no matter where in Vocabulary you are.
  if (q) {
    const matches = GAME_TYPES.flatMap((g) =>
      (CATEGORIES_BY_GAME[g.key] || [])
        .filter((c) => c.title.toLowerCase().includes(q))
        .map((c) => ({ ...c, game: g }))
    );

    return (
      <div className="vg-shell">
        <style>{CSS}</style>
        <div className="vg-page">
          <div className="vg-hero">
            <span className="vg-eyebrow">Sentivo · Vocabulary</span>
            <h1><span className="vg-pill">🐬 Word Bank</span></h1>
            <p className="vg-blurb">Results for "{query.trim()}"</p>
          </div>
          <div className="vg-row"></div>

          {matches.length === 0 ? (
            <p className="empty-msg">No Vocabulary categories match "{query.trim()}".</p>
          ) : (
            <div className="vg-cat-grid">
              {matches.map((c) => (
                <button
                  key={`${c.game.key}-${c.key}`}
                  type="button"
                  className={`vg-cat-card vg-cat-card--${c.game.hue} ${c.ready ? "" : "vg-cat-card--soon"}`}
                  onClick={() => c.ready && openCategoryPlayer(c.game.key, c.key)}
                  disabled={!c.ready}
                >
                  <div className="vg-cat-top">
                    <span className="vg-cat-icon">{c.game.icon}</span>
                    <span className="vg-cat-tag">{c.ready ? "Ready" : "Coming soon"}</span>
                  </div>
                  <span className="vg-cat-title">{c.title}</span>
                  <span className="vg-cat-blurb">{c.game.title}{c.cefrGroup ? ` · ${c.cefrGroup}` : ""}</span>
                  {c.ready && <span className="vg-cat-cta">Play →</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (mainTab === "lessons") {
    return (
      <div className="vg-shell">
        <style>{CSS}</style>
        <div className="vg-page">
          <div className="vg-hero">
            <span className="vg-eyebrow">Sentivo · Vocabulary</span>
            <h1><span className="vg-pill">🐬 Word Bank</span></h1>
            <p className="vg-blurb">Guided vocabulary lessons, alongside the games.</p>
          </div>
          {tabBar}
          <div className="vg-row"></div>
          <div className="vg-cat-grid">
            {VOCAB_LESSONS.map((l) => (
              <button
                key={l.key}
                type="button"
                className={`vg-cat-card vg-cat-card--${l.hue} ${l.ready ? "" : "vg-cat-card--soon"}`}
                onClick={() => l.ready && openLessonPlayer(l.href)}
                disabled={!l.ready}
              >
                <div className="vg-cat-top">
                  <span className="vg-cat-icon">{l.icon}</span>
                  <span className="vg-cat-tag">{l.ready ? "Ready" : "Coming soon"}</span>
                </div>
                <span className="vg-cat-title">{l.title}</span>
                <span className="vg-cat-blurb">{l.blurb}</span>
                {l.ready && <span className="vg-cat-cta">Learn →</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
          {tabBar}
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
          <h1><span className="vg-pill">🐬 Word Bank</span></h1>
          <p className="vg-blurb">Quick one-on-one vocabulary games. Pick a type, then a category.</p>
        </div>
        {tabBar}
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
@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@600;700;800&family=Mulish:wght@500;600;700;800&display=swap');

.vg-shell { width: 100%; font-family: 'Mulish', sans-serif; }
.vg-shell * { box-sizing: border-box; }

.vg-page {
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 28px;
  padding: clamp(24px, 3.4vw, 40px) clamp(18px, 3vw, 32px) clamp(30px, 4vw, 44px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #EAF8F6 0%, #D6F1EC 100%);
  overflow: hidden;
}
.vg-page::before, .vg-page::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  pointer-events: none;
}
.vg-page::before { width: 60px; height: 60px; top: 18px; left: 6%; }
.vg-page::after { width: 26px; height: 26px; top: 70px; left: 12%; }

.vg-hero { text-align: center; position: relative; z-index: 1; }
.vg-eyebrow {
  display: block;
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #0E6E7C;
  margin-bottom: 12px;
}
.vg-pill {
  display: inline-block;
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: clamp(24px, 3.4vw, 34px);
  color: #0E6E7C;
  background: rgba(255,255,255,0.55);
  border-radius: 999px;
  padding: 8px 26px;
}
.vg-blurb { font-family: 'Mulish', sans-serif; font-weight: 700; font-size: 14px; color: #3E8E92; margin: 14px 0 0; }

.vg-maintabs { display: flex; gap: 10px; margin-top: 22px; position: relative; z-index: 1; }
.vg-maintab {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 14px;
  color: #0E6E7C;
  background: #FFFFFF;
  border: none;
  border-radius: 999px;
  padding: 10px 26px;
  cursor: pointer;
  box-shadow: 0 4px 0 #BFE6E1;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-maintab:hover { transform: translateY(-1px); }
.vg-maintab.is-active { color: #FFFFFF; background: #FF6F59; box-shadow: 0 4px 0 #D14E3B; }

.vg-row { position: relative; height: 2px; width: 100%; max-width: 700px; margin: clamp(22px, 2.8vw, 32px) 0; background: #BFE6E1; z-index: 1; }
.vg-row::before, .vg-row::after { content: ""; position: absolute; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: #4FD1A5; }
.vg-row::before { left: 0; }
.vg-row::after { right: 0; }

.vg-block-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; max-width: 660px; margin: 0 auto; width: 100%; position: relative; z-index: 1; }
.vg-block {
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
  box-shadow: 0 10px 0 rgba(14,110,124,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.vg-block:hover { transform: translateY(-3px); box-shadow: 0 14px 0 rgba(14,110,124,0.1); }
.vg-banner { display: block; width: 100%; height: auto; }
.vg-block-body { padding: 18px 20px 20px; }
.vg-block-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; margin: 0 0 6px; color: #123B40; }
.vg-block-blurb { font-size: 13px; color: #4F8B90; margin: 0 0 16px; line-height: 1.5; font-weight: 600; }
.vg-block-cta { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 12.5px; }
.vg-block--coral .vg-block-cta { color: #E85A3D; }
.vg-block--teal .vg-block-cta { color: #0E6E7C; }
.vg-block--seafoam .vg-block-cta { color: #1C8A68; }
.vg-block--gold .vg-block-cta { color: #A9720A; }

.vg-level-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; justify-content: center; position: relative; z-index: 1; }
.vg-level-tab {
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 13px;
  color: #3E8E92;
  background: #FFFFFF;
  border: 1px solid #BFE6E1;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.vg-level-tab:hover { border-color: #FF6F59; color: #E85A3D; }
.vg-level-tab.is-active { background: #FF6F59; border-color: #FF6F59; color: #FFFFFF; }

.vg-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 260px)); gap: 18px; justify-content: center; width: 100%; position: relative; z-index: 1; }
.vg-cat-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid var(--vgc-border, #BFE6E1);
  border-radius: 20px;
  padding: 18px 18px 16px;
  cursor: pointer;
  box-shadow: 0 9px 0 var(--vgc-shadow, rgba(14,110,124,0.08));
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.vg-cat-card:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 13px 0 var(--vgc-shadow-hover, rgba(14,110,124,0.1)); border-color: var(--vgc-accent, #0E6E7C); }
.vg-cat-card--soon { opacity: 0.55; cursor: default; }
.vg-cat-card--soon:hover { transform: none; }

.vg-cat-card--coral   { --vgc-accent: #E85A3D; --vgc-icon-bg: rgba(232,90,61,0.14); --vgc-border: #FFD9CC; --vgc-shadow: rgba(200,70,45,0.10); --vgc-shadow-hover: rgba(200,70,45,0.16); }
.vg-cat-card--teal    { --vgc-accent: #0E6E7C; --vgc-icon-bg: rgba(14,110,124,0.14); --vgc-border: #BFE6E1; --vgc-shadow: rgba(14,110,124,0.10); --vgc-shadow-hover: rgba(14,110,124,0.16); }
.vg-cat-card--seafoam { --vgc-accent: #1C8A68; --vgc-icon-bg: rgba(28,138,104,0.14); --vgc-border: #C3EEDD; --vgc-shadow: rgba(20,107,78,0.10); --vgc-shadow-hover: rgba(20,107,78,0.16); }
.vg-cat-card--gold    { --vgc-accent: #A9720A; --vgc-icon-bg: rgba(255,203,76,0.24); --vgc-border: #FCE4B0; --vgc-shadow: rgba(154,90,22,0.10); --vgc-shadow-hover: rgba(154,90,22,0.16); }
.vg-cat-card--sky     { --vgc-accent: #3E7CB8; --vgc-icon-bg: rgba(62,124,184,0.14); --vgc-border: #C7DCF0; --vgc-shadow: rgba(30,90,140,0.10); --vgc-shadow-hover: rgba(30,90,140,0.16); }
.vg-cat-card--violet  { --vgc-accent: #6B5CA5; --vgc-icon-bg: rgba(107,92,165,0.14); --vgc-border: #DCD6F0; --vgc-shadow: rgba(70,55,130,0.10); --vgc-shadow-hover: rgba(70,55,130,0.16); }
.vg-cat-card--rose    { --vgc-accent: #C2447A; --vgc-icon-bg: rgba(194,68,122,0.14); --vgc-border: #F4D2E2; --vgc-shadow: rgba(150,40,90,0.10); --vgc-shadow-hover: rgba(150,40,90,0.16); }

.vg-cat-top { display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 12px; }
.vg-cat-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--vgc-icon-bg, rgba(14,110,124,0.12));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.vg-cat-card--soon .vg-cat-icon { background: rgba(79,139,144,0.14); filter: grayscale(1); opacity: 0.7; }
.vg-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vgc-accent, #0E6E7C);
  background: var(--vgc-icon-bg, rgba(14,110,124,0.10));
  border-radius: 999px;
  padding: 4px 10px;
}
.vg-cat-card--soon .vg-cat-tag { color: #6B9EA1; background: rgba(79,139,144,0.12); }
.vg-cat-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 16.5px; color: #123B40; margin-bottom: 6px; line-height: 1.25; }
.vg-cat-blurb { font-size: 12.5px; color: #4F8B90; line-height: 1.45; margin-bottom: 18px; font-weight: 600; }
.vg-cat-cta {
  margin-top: auto;
  align-self: flex-start;
  font-family: 'Grandstander', cursive;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  background: var(--vgc-accent, #0E6E7C);
  border-radius: 999px;
  padding: 7px 15px;
}

.vg-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #FFFFFF;
  border-radius: 24px;
  padding: 40px 32px;
  max-width: 380px;
  box-shadow: 0 9px 0 rgba(14,110,124,0.08);
  position: relative;
  z-index: 1;
}
.vg-empty-icon { font-size: 34px; margin-bottom: 12px; }
.vg-empty-title { font-family: 'Grandstander', cursive; font-weight: 700; font-size: 18px; color: #123B40; margin: 0 0 8px; }
.vg-empty-text { font-size: 13px; color: #4F8B90; line-height: 1.55; margin: 0; font-weight: 600; }

@media (max-width: 560px) {
  .vg-block-grid, .vg-cat-grid { grid-template-columns: 1fr; }
}
`;

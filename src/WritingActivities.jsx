import { useState, useEffect } from "react";
import PROOFREADING_SETS from "./proofreadingData";
import STORY_MAKING_SETS from "./storyMakingData";
import MESSAGE_REPLY_SETS from "./messageReplyData";
import REGISTER_REWRITE_SETS from "./registerRewriteData";

export const ACTIVITY_TYPES = [
  {
    key: "proofreading",
    title: "Proofreading",
    icon: "✅",
    blurb: "Find and fix the mistakes, then compare with the answer key.",
    hue: "brown",
    sets: PROOFREADING_SETS,
  },
  {
    key: "storyMaking",
    title: "Story Making",
    icon: "📖",
    blurb: "Look at the picture, use the words, and write a 5-sentence story.",
    hue: "violet",
    sets: STORY_MAKING_SETS,
  },
  {
    key: "messageReply",
    title: "Message Reply",
    icon: "💬",
    blurb: "Read the message, write a real reply, then compare with a sample.",
    hue: "coral",
    sets: MESSAGE_REPLY_SETS,
  },
  {
    key: "registerRewrite",
    title: "Register Rewrite",
    icon: "🔁",
    blurb: "Rewrite a message formally or casually, then compare with a sample.",
    hue: "teal",
    sets: REGISTER_REWRITE_SETS,
  },
];

const LEVEL_GROUPS = ["A1-A2", "B1-B2", "C1-C2"];

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

function MessageReplyBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#FBE4DC" />
      <rect x="30" y="18" width="150" height="40" rx="16" fill="#FFFFFF" />
      <rect x="46" y="32" width="90" height="7" rx="3.5" fill="#E3B8A6" />
      <rect x="46" y="43" width="60" height="7" rx="3.5" fill="#E3B8A6" />
      <rect x="140" y="64" width="150" height="40" rx="16" fill="#D9542E" />
      <rect x="156" y="78" width="100" height="7" rx="3.5" fill="#F6C6B6" />
      <rect x="156" y="89" width="70" height="7" rx="3.5" fill="#F6C6B6" />
      <circle cx="40" cy="90" r="14" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

function RegisterRewriteBanner() {
  return (
    <svg className="wa-banner" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="120" fill="#DFF3EF" />
      <rect x="26" y="16" width="110" height="88" rx="10" fill="#FFFFFF" />
      <path d="M42 34 q10 -6 20 0" stroke="#BFE4DC" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 50 q22 -8 44 2" stroke="#BFE4DC" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 66 q16 -6 32 0" stroke="#BFE4DC" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M42 82 q26 -8 52 2" stroke="#BFE4DC" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="160" cy="60" r="20" fill="#FFFFFF" />
      <path d="M152 60 h16 M160 52 l8 8 l-8 8" fill="none" stroke="#1F9D8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="184" y="16" width="110" height="88" rx="10" fill="#1F9D8C" />
      <rect x="200" y="34" width="78" height="6" rx="3" fill="#BFE9E1" />
      <rect x="200" y="50" width="78" height="6" rx="3" fill="#BFE9E1" />
      <rect x="200" y="66" width="60" height="6" rx="3" fill="#BFE9E1" />
      <rect x="200" y="82" width="78" height="6" rx="3" fill="#BFE9E1" />
    </svg>
  );
}

const BANNERS = {
  proofreading: ProofreadingBanner,
  storyMaking: StoryMakingBanner,
  messageReply: MessageReplyBanner,
  registerRewrite: RegisterRewriteBanner,
};

// Opens one topic's activity as its own standalone popup window, matching
// the Editorial View / lesson-player pattern elsewhere in the app.
// Story Making's picture panel needs a wider window than Proofreading's
// single card.
function openTopicPlayer(typeKey, topicKey) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(typeKey === "storyMaking" ? 1000 : 720, screenW - 40);
  const h = Math.min(700, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/writing/${typeKey}/${topicKey}/player`,
    "sentivoWritingPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function WritingActivities({ query }) {
  const [typeKey, setTypeKey] = useState(null);
  const [levelTab, setLevelTab] = useState(LEVEL_GROUPS[0]);
  const q = query.trim().toLowerCase();

  // Browser back/forward drives navigation instead of an in-page back
  // button — each drill-down pushes a history entry, popping it here
  // unwinds the matching piece of state.
  useEffect(() => {
    function onPopState(e) {
      const depth = e.state?.waDepth || 0;
      if (depth < 1) setTypeKey(null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function openType(key) {
    window.history.pushState({ waDepth: 1 }, "");
    setTypeKey(key);
    setLevelTab(LEVEL_GROUPS[0]);
  }

  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const topics = type ? type.sets : [];
  const levelTopics = topics.filter((t) => t.cefrGroup === levelTab);

  // Search results: a flat list of matching topics across every activity
  // type and CEFR level, bypassing the normal "pick a type, then a level"
  // drill-down (and taking priority even mid-drill-down) so the header
  // search box works no matter where in Writing you are.
  if (q) {
    const matches = ACTIVITY_TYPES.flatMap((t) =>
      t.sets
        .filter((topic) => topic.title.toLowerCase().includes(q) || topic.focus.toLowerCase().includes(q))
        .map((topic) => ({ topic, type: t }))
    );

    return (
      <div className="wa-panel">
        <style>{CSS}</style>
        <div className="wa-hero">
          <p className="wa-blurb">Results for "{query.trim()}"</p>
        </div>
        {matches.length === 0 ? (
          <p className="empty-msg">No Writing activities match "{query.trim()}".</p>
        ) : (
          <div className="wa-cat-grid">
            {matches.map(({ topic, type: t }) => (
              <button
                key={`${t.key}-${topic.key}`}
                type="button"
                className={`wa-cat-card wa-cat-card--${t.hue}`}
                onClick={() => openTopicPlayer(t.key, topic.key)}
              >
                <div className="wa-cat-top">
                  <span className="wa-cat-icon">{t.icon}</span>
                  <span className="wa-cat-tag">Ready</span>
                </div>
                <span className="wa-cat-title">{topic.title}</span>
                <span className="wa-cat-blurb">{t.title} · {topic.cefrGroup}</span>
                <span className="wa-cat-cta">Start →</span>
              </button>
            ))}
          </div>
        )}
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
        <div className={`wa-level-tabs wa-level-tabs--${type.hue}`}>
          {LEVEL_GROUPS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`wa-level-tab ${levelTab === lvl ? "is-active" : ""}`}
              onClick={() => setLevelTab(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
        <div className="wa-cat-grid">
          {levelTopics.map((t) => (
            <button key={t.key} type="button" className={`wa-cat-card wa-cat-card--${type.hue}`} onClick={() => openTopicPlayer(typeKey, t.key)}>
              <div className="wa-cat-top">
                <span className="wa-cat-icon">{type.icon}</span>
                <span className="wa-cat-tag">Ready</span>
              </div>
              <span className="wa-cat-title">{t.title}</span>
              <span className="wa-cat-blurb">{t.focus}</span>
              <span className="wa-cat-cta">Start →</span>
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
        {ACTIVITY_TYPES.map((t) => {
          const Banner = BANNERS[t.key];
          return (
          <button key={t.key} type="button" className={`wa-block wa-block--${t.hue}`} onClick={() => openType(t.key)}>
            <Banner />
            <div className="wa-block-body">
              <h3 className="wa-block-title">{t.title}</h3>
              <p className="wa-block-blurb">{t.blurb}</p>
              <span className="wa-block-cta">See levels →</span>
            </div>
          </button>
          );
        })}
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
.wa-block--coral .wa-block-cta { color: #D9542E; }
.wa-block--teal .wa-block-cta { color: #1F9D8C; }

.wa-level-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; justify-content: center; }
.wa-level-tab {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #6B5A66;
  background: #FFFFFF;
  border: 1px solid #EBC6A6;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.wa-level-tab:hover { border-color: #C5692A; color: #C5692A; }
.wa-level-tab.is-active { background: #C5692A; border-color: #C5692A; color: #FFFFFF; }
.wa-level-tabs--violet .wa-level-tab { border-color: #D9D2F3; }
.wa-level-tabs--violet .wa-level-tab:hover { border-color: #6E5DC6; color: #6E5DC6; }
.wa-level-tabs--violet .wa-level-tab.is-active { background: #6E5DC6; border-color: #6E5DC6; color: #FFFFFF; }
.wa-level-tabs--coral .wa-level-tab { border-color: #F3C4B0; }
.wa-level-tabs--coral .wa-level-tab:hover { border-color: #D9542E; color: #D9542E; }
.wa-level-tabs--coral .wa-level-tab.is-active { background: #D9542E; border-color: #D9542E; color: #FFFFFF; }
.wa-level-tabs--teal .wa-level-tab { border-color: #BFE4DC; }
.wa-level-tabs--teal .wa-level-tab:hover { border-color: #1F9D8C; color: #1F9D8C; }
.wa-level-tabs--teal .wa-level-tab.is-active { background: #1F9D8C; border-color: #1F9D8C; color: #FFFFFF; }

.wa-cat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 260px)); gap: 18px; justify-content: center; width: 100%; }
.wa-cat-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid var(--wac-border, #EBC6A6);
  border-radius: 18px;
  padding: 18px 18px 16px;
  cursor: pointer;
  box-shadow: 0 10px 22px var(--wac-shadow, rgba(197,105,42,0.10));
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.wa-cat-card:hover { transform: translateY(-3px); box-shadow: 0 16px 32px var(--wac-shadow-hover, rgba(197,105,42,0.18)); border-color: var(--wac-accent, #C5692A); }

.wa-cat-card--brown  { --wac-accent: #C5692A; --wac-icon-bg: rgba(197,105,42,0.12); --wac-border: #EBC6A6; --wac-shadow: rgba(197,105,42,0.10); --wac-shadow-hover: rgba(197,105,42,0.18); }
.wa-cat-card--violet { --wac-accent: #6E5DC6; --wac-icon-bg: rgba(110,93,198,0.14); --wac-border: #D9D2F3; --wac-shadow: rgba(90,70,190,0.10); --wac-shadow-hover: rgba(90,70,190,0.18); }
.wa-cat-card--coral  { --wac-accent: #D9542E; --wac-icon-bg: rgba(217,84,46,0.12); --wac-border: #F3C4B0; --wac-shadow: rgba(217,84,46,0.10); --wac-shadow-hover: rgba(217,84,46,0.18); }
.wa-cat-card--teal   { --wac-accent: #1F9D8C; --wac-icon-bg: rgba(31,157,140,0.12); --wac-border: #BFE4DC; --wac-shadow: rgba(31,157,140,0.10); --wac-shadow-hover: rgba(31,157,140,0.18); }

.wa-cat-top { display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 12px; }
.wa-cat-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--wac-icon-bg, rgba(197,105,42,0.12));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.wa-cat-tag {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--wac-accent, #C5692A);
  background: var(--wac-icon-bg, rgba(197,105,42,0.10));
  border-radius: 999px;
  padding: 4px 10px;
}
.wa-cat-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16.5px; color: #2B2A4A; margin-bottom: 6px; line-height: 1.25; }
.wa-cat-blurb { font-size: 12.5px; color: #7A7391; line-height: 1.45; margin-bottom: 18px; }
.wa-cat-cta {
  margin-top: auto;
  align-self: flex-start;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  background: var(--wac-accent, #C5692A);
  border-radius: 999px;
  padding: 7px 15px;
}

@media (max-width: 560px) {
  .wa-block-grid, .wa-cat-grid { grid-template-columns: 1fr; }
}
`;

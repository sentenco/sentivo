import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import ProfileSettings from "./ProfileSettings.jsx";
import { supabase } from "./supabaseClient";
import { timeAgo } from "./slideDeckTypes";
import CurriculumRouter from "./CurriculumRouter";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import storybookCoverImg from "./assets/storybook/cover.jpeg";
import storybook2CoverImg from "./assets/storybook2/cover.png";
import storybook3CoverImg from "./assets/storybook3/cover.jpeg";
import storybook4CoverImg from "./assets/storybook4/cover.jpeg";
import storybook5CoverImg from "./assets/storybook5/cover.jpeg";
import storybook6CoverImg from "./assets/storybook6/cover.jpeg";
import storybook7CoverImg from "./assets/storybook7/cover.jpeg";
import storybook8CoverImg from "./assets/storybook8/cover.jpeg";
import forge1CoverImg from "./assets/forge/track1-cover.jpeg";
import todayWheelIcon from "./assets/today/icon-wheel.jpg";
import todayNotebookIcon from "./assets/today/icon-notebook.jpg";
import todayDeckIcon from "./assets/today/icon-deck.jpg";
import todayFeedbackIcon from "./assets/today/icon-feedback.jpg";
import todayQuoteBanner from "./assets/today/quote-banner.jpg";
import DAILY_CORRECTIONS from "./dailyCorrections";
import { ARTICLES, ARTICLE_TOPICS } from "./articlesData";
import VocabularyGames from "./VocabularyGames";
import WritingActivities from "./WritingActivities";
import CommunityFeed from "./CommunityFeed.jsx";

const CATEGORIES = ["Articles", "Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening"];
const PRO_CATEGORIES = ["Reading", "Speaking", "Grammar", "Vocabulary", "Writing", "Listening"];

// "Today" launch date -- the day count in the Today masthead (Vol. 1, No. X)
// counts up from here, like a real newspaper's running issue number.
const GAZETTE_LAUNCH = new Date(2026, 6, 22);

function daysSince(date) {
  const startOfToday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor((startOfToday - GAZETTE_LAUNCH) / 86400000);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Deterministic "shuffle" -- steps through every index exactly once before
// repeating, so picks stay evenly spread without needing real randomness
// (which would make Today different per visitor instead of per day).
function pickDeterministic(total, seed, count) {
  if (total <= 0) return [];
  let step = 1;
  for (let s = 7; s < total + 7; s++) {
    if (gcd(s, total) === 1) { step = s; break; }
  }
  const out = [];
  let i = ((seed % total) + total) % total;
  for (let n = 0; n < total && out.length < count; n++) {
    i = (i + step) % total;
    out.push(i);
  }
  return out;
}

function CorrectionLine({ segments }) {
  return segments.map((seg, i) => {
    if ("wrong" in seg) return <span key={i} className="corr-wrong">{seg.wrong}</span>;
    if ("right" in seg) return <span key={i} className="corr-right">{seg.right}</span>;
    return <React.Fragment key={i}>{seg.text}</React.Fragment>;
  });
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 2 4 4-13 13H5v-4Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M6.8 9V6.3a3.2 3.2 0 0 1 6.4 0V9" />
    </svg>
  );
}

function CategoryLockedFeature({ category, navigate }) {
  return (
    <div className="cat-locked">
      <span className="cat-locked-icon"><LockIcon /></span>
      <p className="cat-locked-eyebrow">Pro feature</p>
      <h2 className="cat-locked-title">{category} is part of Sentivo Pro</h2>
      <p className="cat-locked-desc">
        Upgrade to unlock every category, Speaking, Reading, Grammar, Vocabulary, Writing, and Listening, plus Teacher's Desk without the daily unlock.
      </p>
      <button type="button" className="cat-locked-cta" onClick={() => navigate("/library/subscription")}>Upgrade to Pro</button>
      <button type="button" className="cat-locked-link" onClick={() => navigate("/library/subscription")}>See all plans</button>
    </div>
  );
}

function CurriculumLockedFeature({ navigate }) {
  return (
    <div className="cat-locked">
      <span className="cat-locked-icon cat-locked-icon--navy"><LockIcon /></span>
      <p className="cat-locked-eyebrow cat-locked-eyebrow--navy">Pro+ feature</p>
      <h2 className="cat-locked-title">The full curriculum is part of Sentivo Pro+</h2>
      <p className="cat-locked-desc">
        Upgrade to Pro+ to unlock every CEFR level, A1 through C2, plus the AI-powered Dictionary, Grammar Checker, and Translator.
      </p>
      <button type="button" className="cat-locked-cta cat-locked-cta--navy" onClick={() => navigate("/library/subscription")}>Upgrade to Pro+</button>
      <button type="button" className="cat-locked-link" onClick={() => navigate("/library/subscription")}>See all plans</button>
    </div>
  );
}

function DigitalClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const h24 = now.getHours();
  const h12 = ((h24 + 11) % 12) + 1;
  const hh = String(h12).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const ampm = h24 >= 12 ? "PM" : "AM";
  let tz = "";
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { /* unsupported */ }

  return (
    <div className="gc-clock">
      <div className="gc-clock-time">{hh}:{mm}<span className="gc-clock-sec">:{ss}</span></div>
      <div className="gc-clock-meta">
        <span>{ampm}</span>
        {tz && <span>{tz}</span>}
      </div>
    </div>
  );
}

function SpeakingBanner({ name }) {
  const banners = {
    // Forge: a hammer striking a glowing word-block on an anvil — building
    // vocabulary through repetition, one strike at a time.
    forge: (
      <>
        <defs>
          <linearGradient id="spkb-forge-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDF1DE" />
            <stop offset="1" stopColor="#FBE0B4" />
          </linearGradient>
          <linearGradient id="spkb-forge-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFC55C" />
            <stop offset="1" stopColor="#E8A33D" />
          </linearGradient>
          <linearGradient id="spkb-forge-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8A8578" />
            <stop offset="1" stopColor="#5C5850" />
          </linearGradient>
          <filter id="spkb-forge-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#96631C" floodOpacity="0.25" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#spkb-forge-bg)" />
        <g filter="url(#spkb-forge-shadow)">
          <rect x="112" y="96" width="96" height="20" rx="6" fill="url(#spkb-forge-metal)" />
          <rect x="146" y="112" width="28" height="14" rx="3" fill="#463F35" />
          <rect x="140" y="72" width="40" height="26" rx="7" fill="url(#spkb-forge-glow)" />
        </g>
        <g stroke="#E8A33D" strokeWidth="3" strokeLinecap="round" opacity="0.85">
          <line x1="150" y1="60" x2="144" y2="46" />
          <line x1="160" y1="56" x2="160" y2="40" />
          <line x1="170" y1="60" x2="177" y2="47" />
        </g>
        <g transform="rotate(-32 214 58)">
          <rect x="206" y="18" width="16" height="52" rx="6" fill="#8A5A2E" />
          <rect x="194" y="12" width="40" height="22" rx="6" fill="url(#spkb-forge-metal)" />
        </g>
      </>
    ),
    // Shift: a clock racing against itself, corrected mid-tick — fast
    // tense choice and self-repair under time pressure.
    shift: (
      <>
        <defs>
          <linearGradient id="spkb-shift-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDEDEA" />
            <stop offset="1" stopColor="#F8D2C8" />
          </linearGradient>
          <filter id="spkb-shift-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#9C2F26" floodOpacity="0.22" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#spkb-shift-bg)" />
        <path d="M160 20 A50 50 0 1 1 116 96" fill="none" stroke="#F0A99A" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10" />
        <g filter="url(#spkb-shift-shadow)">
          <circle cx="160" cy="70" r="44" fill="#FFFFFF" />
        </g>
        <circle cx="160" cy="70" r="44" fill="none" stroke="#D4453A" strokeWidth="3" />
        <g stroke="#2B2A4A" strokeLinecap="round">
          <line x1="160" y1="70" x2="160" y2="42" strokeWidth="4" />
          <line x1="160" y1="70" x2="182" y2="82" strokeWidth="4" />
        </g>
        <circle cx="160" cy="70" r="4.5" fill="#D4453A" />
        <g filter="url(#spkb-shift-shadow)">
          <circle cx="198" cy="100" r="18" fill="#D4453A" />
        </g>
        <path d="M190 100 l6 7 12 -14" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    // Ascend: steps climbing toward a small flag — precision and
    // structure earned one level at a time.
    ascend: (
      <>
        <defs>
          <linearGradient id="spkb-asc-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9F5EF" />
            <stop offset="1" stopColor="#CDEBDD" />
          </linearGradient>
          <linearGradient id="spkb-asc-step" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#48AC8C" />
            <stop offset="1" stopColor="#2E8F7A" />
          </linearGradient>
          <filter id="spkb-asc-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1E5E4F" floodOpacity="0.22" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#spkb-asc-bg)" />
        <g filter="url(#spkb-asc-shadow)">
          <rect x="86" y="104" width="46" height="20" rx="4" fill="url(#spkb-asc-step)" />
          <rect x="132" y="86" width="46" height="38" rx="4" fill="url(#spkb-asc-step)" />
          <rect x="178" y="64" width="46" height="60" rx="4" fill="url(#spkb-asc-step)" />
        </g>
        <path d="M201 64 V30" stroke="#1E5E4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M201 30 l24 9 -24 9 Z" fill="#48AC8C" />
        <path d="M100 96 Q150 60 195 34" fill="none" stroke="#8FD1A8" strokeWidth="2.5" strokeDasharray="4 6" />
      </>
    ),
  };
  return (
    <svg className="spklab-banner" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
      {banners[name] || <rect width="320" height="140" fill="#EDE7F6" />}
    </svg>
  );
}

function ArticlesFeature({ navigate, query }) {
  const [activeTopic, setActiveTopic] = useState("All");
  const q = query.trim().toLowerCase();
  const byTopic = activeTopic === "All" ? ARTICLES : ARTICLES.filter((a) => a.topicLabel === activeTopic);
  const filtered = q
    ? byTopic.filter((a) => a.title.toLowerCase().includes(q) || a.dek.toLowerCase().includes(q))
    : byTopic;
  const lead = filtered.length
    ? filtered.reduce((newest, a) => (!newest || new Date(a.publishedAt) > new Date(newest.publishedAt) ? a : newest), null)
    : null;
  const briefs = filtered.filter((a) => a !== lead);

  return (
    <div className="gaz-page">
      <div className="gaz-masthead">
        <img className="gaz-masthead-logo" src="/logo-sentivo.png" alt="" />
        <div className="gaz-masthead-kicker-row">
          <span className="gaz-masthead-rule" />
          <span className="gaz-masthead-kicker">The Sentivo</span>
          <span className="gaz-masthead-rule" />
        </div>
        <h1 className="gaz-masthead-word">Gazette</h1>
        <div className="gaz-masthead-underline" />
        <div className="gaz-masthead-tagline">News, Ideas &amp; Perspectives</div>
      </div>
      <div className="gaz-rule-thick" />
      <div className="gaz-rule-thin" />
      <nav className="gaz-topics">
        <button
          type="button"
          className={`gaz-topic ${activeTopic === "All" ? "is-active" : ""}`}
          onClick={() => setActiveTopic("All")}
        >
          All
        </button>
        {ARTICLE_TOPICS.map((t) => (
          <button
            key={t.label}
            type="button"
            className={`gaz-topic ${activeTopic === t.label ? "is-active" : ""}`}
            title={t.title}
            onClick={() => setActiveTopic(t.label)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <div className="gaz-rule-thin" />

      {lead ? (
        <button type="button" className="gaz-lead" onClick={() => navigate(`/library/articles/${lead.slug}`)}>
          <div>
            <div className="gaz-lead-kicker">{activeTopic === "All" ? "Lead Story · " : ""}{lead.topicTitle}</div>
            <h2 className="gaz-lead-title">{lead.title}</h2>
            <p className="gaz-lead-dek">{lead.dek}</p>
            <div className="gaz-lead-meta">
              <span className="gaz-byline">Sentivo Editorial</span>
              <span className="gaz-dot">·</span>
              <span className="gaz-editions">📚 3 Editions</span>
              <span className="gaz-dot">·</span>
              <span>{lead.editions.polished.readTime}</span>
            </div>
          </div>
          <div className="gaz-lead-art">
            {lead.image ? <img src={lead.image} alt="" /> : <span className="gaz-lead-art-emoji">{lead.emoji}</span>}
          </div>
        </button>
      ) : (
        <p className="gaz-empty">{q ? `No articles match "${query.trim()}".` : "No articles in this category yet — check back soon."}</p>
      )}

      <div className="gaz-grid">
        {briefs.map((a) => (
          <button
            key={a.slug}
            type="button"
            className={`gaz-story ${a.ready ? "" : "gaz-story--soon"}`}
            onClick={() => a.ready && navigate(`/library/articles/${a.slug}`)}
            disabled={!a.ready}
          >
            <div className={`gaz-thumb gaz-thumb--${a.variant}`}>
              {a.image ? <img src={a.image} alt="" /> : a.emoji}
            </div>
            <div className="gaz-story-body">
              <div className="gaz-story-kicker">{a.topicLabel}</div>
              <h3 className="gaz-story-title">{a.title}</h3>
              <div className="gaz-story-meta">
                {a.ready ? <span className="gaz-editions">📚 3 Ed.</span> : <span className="gaz-soon">Coming soon</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const GRAMMAR_MODULES = [
  { num: "BED 01", banner: "partsOfSpeech", title: "Parts of Speech", spec: "8 word classes across 6 topics. One Lesson, one Assessment each. A1–C2.", href: "/library/grammar/parts-of-speech", ready: true, hue: "leaf" },
  { num: "BED 02", banner: "verbTenses", title: "Verb Tenses", spec: "All 12 English tenses. One Discussion, one Test lesson each. A1–C2.", href: "/library/grammar/verb-tenses", ready: true, hue: "gold" },
  { num: "BED 03", banner: "sentenceStructure", title: "Sentence Patterns", spec: "The 7 core patterns — SV to SVOC — across 6 lessons, each with practice and a built-in assessment. A1–C2.", href: "/library/grammar/sentence-patterns", ready: true, hue: "soil" },
  { num: "BED 04", banner: "modals", title: "Modals", spec: "9 core modal verbs — can to shall — grouped by function across 7 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/modals", ready: true, hue: "sky" },
  { num: "BED 05", banner: "conditionals", title: "Conditionals", spec: "The 5 conditional types — Zero to Mixed — across 5 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/conditionals", ready: true, hue: "berry" },
  { num: "BED 06", banner: "passiveVoice", title: "Passive Voice", spec: "Present to future passive, modal passive, and the by-agent, across 6 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/passive-voice", ready: true, hue: "violet" },
  { num: "BED 07", banner: "questionFormation", title: "Question Formation", spec: "Yes/no questions, wh-questions, question tags, and indirect questions, across 4 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/question-formation", ready: true, hue: "teal" },
  { num: "BED 08", banner: "nounsArticlesQuantifiers", title: "Nouns, Articles & Quantifiers", spec: "Countable vs uncountable, a/an vs the, zero article, and precise quantifiers, across 5 lessons, each teach-practice-wrap in one sitting. A1–C2.", href: "/library/grammar/nouns-articles-quantifiers", ready: true, hue: "coral" },
  { num: "BED 09", banner: "pronounsPossessives", title: "Pronouns & Possessives", spec: "Subject vs object pronouns, possessive adjectives vs pronouns, reflexive/intensive, demonstrative/indefinite, and possessive 's, across 5 lessons. A1–C2.", href: "/library/grammar/pronouns-possessives", ready: true, hue: "lime" },
  { num: "BED 10", banner: "comparativesSuperlatives", title: "Comparatives & Superlatives", spec: "Short and long adjectives, irregular forms, equal comparison, degree modifiers, and double comparatives, across 4 lessons. A1–C2.", href: "/library/grammar/comparatives-superlatives", ready: true, hue: "magenta" },
  { num: "BED 11", banner: "reportedSpeech", title: "Reported Speech", spec: "Backshift, say vs tell, time/place changes, reported questions, commands, and exceptions to backshift, across 5 lessons. A1–C2.", href: "/library/grammar/reported-speech", ready: true, hue: "navy" },
];

const SPEAKING_TRACKS = [
  { key: "forge", href: "/library/forge", hue: "forge", gap: "Thin working vocabulary", name: "Forge", desc: "Build real vocabulary through pictures, gaps, echoes, and question chains." },
  { key: "shift", href: "/library/shift", hue: "shift", gap: "Slow tense self-repair", name: "Shift", desc: "Fast tense choice and self-repair under pressure, for students who already know the grammar." },
  { key: "ascend", href: "/library/ascend", hue: "ascend", gap: "Imprecise, unstructured speech", name: "Ascend", desc: "Precision, structure, and diplomatic control for students who already sound fluent." },
];

function GrammarFeature({ navigate, query }) {
  const q = query.trim().toLowerCase();
  const modules = q
    ? GRAMMAR_MODULES.filter((m) => m.title.toLowerCase().includes(q) || m.spec.toLowerCase().includes(q))
    : GRAMMAR_MODULES;

  return (
    <div className="gdn-page">
      <div className="gdn-masthead">
        <span className="gdn-eyebrow">Sentivo · Grammar</span>
        <span className="gdn-badge">Let's Grow!</span>
        <h1 className="gdn-nameplate">🌱 The Grammar Garden</h1>
        <p className="gdn-sub">Language grows from the roots up — plant a rule, watch a sentence bloom.</p>
      </div>
      <div className="gdn-row"></div>

      {modules.length === 0 && (
        <p className="empty-msg">No grammar modules match "{query.trim()}".</p>
      )}
      <div className="gdn-beds">
        {modules.map((m) =>
          m.ready ? (
            <a
              key={m.num}
              href={m.href}
              className={`gdn-bed gdn-bed--${m.hue}`}
              onClick={(e) => { e.preventDefault(); navigate(m.href); }}
            >
              <h3 className="gdn-bed-title">{m.title}</h3>
              <span className="gdn-bed-cta">Open →</span>
            </a>
          ) : (
            <div key={m.num} className={`gdn-bed gdn-bed--${m.hue} gdn-bed--empty`}>
              <h3 className="gdn-bed-title">{m.title}</h3>
              <span className="gdn-bed-cta">Coming soon</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

const BOOK_MOTIF_COLORS = ["#E8A33D", "#16BFAE", "#7C5CFC", "#4C7FE0", "#E0637A", "#E89E2E", "#0F9E90", "#A9754D"];

// Age track per book -- local lookup since the Supabase "tools" row only
// carries CEFR level, not age. Books 1-6 are the Teens-narrator series
// (school friends), Books 7-12 are the Adults-narrator series (office,
// shop, health, free time, food). No Kids-track story exists yet.
const BOOK_AGE_TRACK = {
  "storybook-13": "Kids",
  "storybook-14": "Kids",
  "storybook-15": "Kids",
  "storybook-16": "Kids",
  "storybook-17": "Kids",
  "storybook-18": "Kids",
  "storybook-19": "Kids",
  "storybook-20": "Kids",
  "storybook-21": "Teens",
  "storybook-22": "Teens",
  "storybook-23": "Kids",
  "storybook-24": "Kids",
  "storybook-25": "Kids",
  "storybook-26": "Kids",
  "storybook-27": "Kids",
  "storybook-28": "Kids",
  "storybook-29": "Kids",
  "storybook-30": "Kids",
  "storybook-31": "Teens",
  "storybook-32": "Teens",
  "storybook-33": "Teens",
  "storybook-34": "Teens",
  "storybook-35": "Teens",
  "storybook-36": "Teens",
  "storybook-37": "Teens",
  "storybook-38": "Teens",
  "storybook-39": "Adults",
  "storybook-40": "Adults",
  "storybook-41": "Adults",
  "storybook-42": "Adults",
  "storybook-43": "Adults",
  "storybook-44": "Adults",
  "storybook-45": "Adults",
  "storybook-46": "Adults",
  "storybook-47": "Adults",
  "storybook-48": "Adults",
  "storybook-49": "Teens",
  "storybook-50": "Teens",
  "storybook-51": "Teens",
  "storybook-52": "Teens",
  "storybook-53": "Teens",
  "storybook-54": "Teens",
  "storybook-55": "Teens",
  "storybook-56": "Teens",
  "storybook-57": "Adults",
  "storybook-58": "Adults",
  "storybook-59": "Adults",
  "storybook-60": "Adults",
  "storybook-61": "Adults",
  "storybook-62": "Adults",
  "storybook-63": "Adults",
  "storybook-64": "Adults",
  "storybook-65": "Teens",
  "storybook-66": "Teens",
  "storybook-67": "Teens",
  "storybook-68": "Teens",
  "storybook-69": "Teens",
  "storybook-70": "Teens",
  "storybook-71": "Teens",
  "storybook-72": "Teens",
  "storybook-73": "Adults",
  "storybook-74": "Adults",
  "storybook-75": "Adults",
  "storybook-76": "Adults",
  "storybook-77": "Adults",
  "storybook-78": "Adults",
  "storybook-79": "Adults",
  "storybook-80": "Adults",
  storybook: "Teens",
  "storybook-2": "Teens",
  "storybook-3": "Teens",
  "storybook-4": "Teens",
  "storybook-5": "Teens",
  "storybook-6": "Teens",
  "storybook-7": "Adults",
  "storybook-8": "Adults",
  "storybook-9": "Adults",
  "storybook-10": "Adults",
  "storybook-11": "Adults",
  "storybook-12": "Adults",
};
// Reading stops at B2 -- C1/C2 learners are expected to work on Speaking
// instead, so no story content will ever exist for those levels.
const READING_LEVELS = ["A1", "A2", "B1", "B2"];
const READING_AGE_TRACKS = ["Kids", "Teens", "Adults"];

const SEARCH_MODES = [
  { key: "dictionary", label: "Dictionary" },
  { key: "grammar", label: "Grammar Checker" },
  { key: "translator", label: "Translator" },
];

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModeIcon({ mode }) {
  if (mode === "dictionary") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5v-15Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </svg>
    );
  }
  if (mode === "grammar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 2 4 4-13 13H5v-4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  );
}

function BookshelfRows({ books, navigate, colorOffset }) {
  const rows = [];
  for (let i = 0; i < books.length; i += 4) rows.push(books.slice(i, i + 4));

  return rows.map((row, ri) => (
    <div key={ri} className="bkshf-shelf-group">
      <div className="bkshf-shelf-row">
        {row.map((c, i) => {
          const color = BOOK_MOTIF_COLORS[(colorOffset + ri * 4 + i) % BOOK_MOTIF_COLORS.length];
          const cover = STORY_COVERS[c.id];
          return (
            <a
              key={c.id}
              href={`/library/${c.id}`}
              className="bkshf-book"
              onClick={(e) => { e.preventDefault(); navigate(`/library/${c.id}`); }}
            >
              {cover ? (
                <>
                  <img className="bkshf-book-img" src={cover} alt={c.title} />
                  <div className="bkshf-book-scrim" />
                  <h3 className="bkshf-book-title bkshf-book-title--onimg">{c.title}</h3>
                </>
              ) : (
                <div className="bkshf-book-flat" style={{ background: `${color}1F` }}>
                  <span className="bkshf-book-motif" style={{ "--motif-color": `${color}33` }} />
                  <span className="bkshf-ribbon" style={{ background: color }} />
                  <h3 className="bkshf-book-title">{c.title}</h3>
                </div>
              )}
            </a>
          );
        })}
      </div>
      <div className="bkshf-shelf-ledge" />
    </div>
  ));
}

function BookshelfFeature({ items, navigate, query }) {
  const [level, setLevel] = useState("A1");
  const isSearching = query.trim().length > 0;
  // A search should surface matches across every level, not just the
  // currently selected level tab, so the level filter is skipped while
  // `items` (already title-matched by the parent) has an active query.
  const levelItems = isSearching ? items : items.filter((c) => (c.level || "A1") === level);
  let colorOffset = 0;
  const groups = READING_AGE_TRACKS.map((track) => {
    const books = levelItems.filter((c) => (BOOK_AGE_TRACK[c.id] || "Teens") === track);
    const group = { track, books, colorOffset };
    colorOffset += books.length;
    return group;
  }).filter((g) => g.books.length > 0);

  return (
    <div className="bkshf-page">
      <div className="bkshf-masthead">
        <span className="bkshf-eyebrow">Sentivo · Reading</span>
        <h1><span className="bkshf-nameplate-pill">📖 Library</span></h1>
      </div>

      {!isSearching && (
        <div className="bkshf-level-tabs">
          {READING_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              className={`bkshf-level-tab ${level === lvl ? "is-active" : ""}`}
              onClick={() => setLevel(lvl)}
            >
              {lvl}
            </button>
          ))}
        </div>
      )}

      <div className="bkshf-row"></div>

      {groups.length === 0 ? (
        <div className="bkshf-empty">
          <span className="bkshf-empty-icon">📚</span>
          <p className="bkshf-empty-title">{isSearching ? `No stories match "${query.trim()}"` : `No ${level} stories yet`}</p>
          <p className="bkshf-empty-desc">{isSearching ? "Try a different search term." : "Check back soon -- more levels are on the way."}</p>
        </div>
      ) : (
        <div className="bkshf-shelves">
          {groups.map((g) => (
            <div key={g.track} className="bkshf-age-group">
              <div className="bkshf-age-label">{g.track}</div>
              <BookshelfRows books={g.books} navigate={navigate} colorOffset={g.colorOffset} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Opens the Spin the Wheel tool as a standalone popup -- matching the
// FORGE/ASCEND/Article Player chrome-less window.open pattern.
function openWheel() {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(980, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    "/library/wheel",
    "sentivoWheel",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Same popup pattern for the post-lesson Feedback Generator.
function openFeedbackGenerator() {
  window.open("/library/feedback", "_blank");
}

function TodayFeature({ navigate }) {
  const { user, plan } = useAuth();
  const [postCount, setPostCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!user) { setPostCount(0); setCommentCount(0); setLikeCount(0); return; }
    let cancelled = false;
    let timer;

    async function loadCounts() {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      const [{ count: posts }, { count: comments }, { count: likes }] = await Promise.all([
        supabase.from("community_posts").select("id", { count: "exact", head: true }).eq("author_id", user.id).gte("created_at", startOfToday.toISOString()),
        supabase.from("community_comments").select("id", { count: "exact", head: true }).eq("author_id", user.id).gte("created_at", startOfToday.toISOString()),
        supabase.from("community_likes").select("id", { count: "exact", head: true }).eq("user_id", user.id).gte("created_at", startOfToday.toISOString()),
      ]);
      if (cancelled) return;
      setPostCount(posts || 0);
      setCommentCount(comments || 0);
      setLikeCount(likes || 0);
      scheduleNextRefresh();
    }

    // Re-fetch right at the next local midnight, then reschedule for the
    // one after that -- otherwise a tab left open across midnight keeps
    // showing yesterday's (now-expired) counts until someone reloads.
    function scheduleNextRefresh() {
      const nextMidnight = new Date();
      nextMidnight.setHours(24, 0, 5, 0);
      timer = setTimeout(loadCounts, nextMidnight.getTime() - Date.now());
    }

    loadCounts();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [user]);

  function handleCommunityActivity(kind) {
    if (kind === "post") setPostCount((c) => c + 1);
    else if (kind === "comment") setCommentCount((c) => c + 1);
    else if (kind === "like") setLikeCount((c) => c + 1);
  }

  // Teacher's Desk is free for everyone, but a free-plan teacher has to
  // participate in Homeroom *today* to unlock it for today -- resets daily,
  // paid plans skip this entirely. Any 3 posts/comments/likes combined
  // count, not 3 of the same type.
  const deskUnlocked = plan !== "free" || postCount + commentCount + likeCount >= 3;
  const deskProgress = postCount + commentCount + likeCount;

  const today = new Date();
  const dayIndex = daysSince(today);
  const total = DAILY_CORRECTIONS.length;
  const headlineIdx = ((dayIndex % total) + total) % total;
  const headline = DAILY_CORRECTIONS[headlineIdx];
  const briefIdxs = pickDeterministic(total, headlineIdx, 2);
  const briefs = briefIdxs.map((i) => DAILY_CORRECTIONS[i]);

  const deskLockTitle = deskUnlocked ? undefined : `Post, comment, or like 3 times in Homeroom today to unlock. You're at ${deskProgress}/3 today.`;

  const toolkit = (
    <>
      <div className="td-section-label">Teacher's Desk</div>

      {!deskUnlocked && (
        <p className="td-desk-lock-note">
          <LockIcon /> Post, comment, or like 3 times in Homeroom today to unlock. You're at {deskProgress}/3 today.
        </p>
      )}

      <div className={`td-actions-grid${deskUnlocked ? "" : " is-locked"}`}>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? openFeedbackGenerator : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayFeedbackIcon} alt="" /></div>
          <div className="td-action-title">Lesson Feedback</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? openWheel : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayWheelIcon} alt="" /></div>
          <div className="td-action-title">Spin the Wheel</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? () => navigate("/library/notebook") : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayNotebookIcon} alt="" /></div>
          <div className="td-action-title">Digital Notebook</div>
        </button>
        <button type="button" className="td-action-card" onClick={deskUnlocked ? () => navigate("/library/slides") : undefined} aria-disabled={!deskUnlocked} title={deskLockTitle}>
          {!deskUnlocked && <span className="td-action-lock"><LockIcon /></span>}
          <div className="td-action-icon"><img src={todayDeckIcon} alt="" /></div>
          <div className="td-action-title">Slide Builder</div>
        </button>
      </div>
    </>
  );

  return (
    <div className="gc-dashboard">
      <div className="td-body">
      <div className="td-main">
        <CommunityFeed afterStats={toolkit} onActivity={handleCommunityActivity} />

        <div className="td-quote-banner">
          <img src={todayQuoteBanner} alt="Every lesson is a chance to make a difference." />
        </div>
      </div>

      <aside className="gc-sidebar">
        <div className="td-brief-panel">
          <div className="td-brief-clock">
            <DigitalClock />
          </div>

          <div className="td-brief-section">
            <div className="td-dc-label">
              <span className="td-dc-badge"><PencilIcon /></span>
              Daily Correction
            </div>
            <h2 className="td-dc-headline">
              <span className="td-dc-quote">&#10078;</span>
              <CorrectionLine segments={headline.sentence} />
            </h2>
            <div className="td-dc-why">
              {headline.explain.map((line, i) => (
                <p className="td-dc-explain" key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="td-brief-list">
            <div className="td-brief-list-label">More corrections today</div>
            {briefs.map((b) => (
              <div className={`td-brief-row hue-${b.hue === "grammar" ? "coral" : b.hue === "vocab" ? "gold" : "teal"}`} key={b.id}>
                <span className="td-brief-dot" />
                <div className="td-brief-row-body">
                  <div className="td-brief-label">{b.category}</div>
                  <p className="td-brief-line"><CorrectionLine segments={b.sentence} /></p>
                </div>
                <div className="td-brief-pop">
                  {b.explain.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      </div>
    </div>
  );
}

// Static story-cover lookup by tools.id -- stories are static content (like
// storybookData.js), not stored in Supabase, so their cover art is looked up
// locally here rather than via a DB column. Books without art yet fall back
// to an ImagePlaceholder in the card.
const STORY_COVERS = {
  storybook: storybookCoverImg,
  "storybook-2": storybook2CoverImg,
  "storybook-3": storybook3CoverImg,
  "storybook-4": storybook4CoverImg,
  "storybook-5": storybook5CoverImg,
  "storybook-6": storybook6CoverImg,
  "storybook-7": storybook7CoverImg,
  "storybook-8": storybook8CoverImg,
};

// Same idea for FORGE tracks -- each track (one card per learner profile)
// gets a real cover photo once generated; falls back to an ImagePlaceholder
// in the card until then. Portrait, same ~0.7 width:height ratio as every
// other card in the grid (see the ASPECT constant below).
const FORGE_COVERS = {
  "forge-1": forge1CoverImg,
};

const PER_PAGE = 8;

function Motif({ type }) {
  switch (type) {
    case "stress":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <text x="38" y="40" textAnchor="middle" className="motif-word motif-word--dim">re</text>
          <text x="68" y="40" textAnchor="middle" className="motif-word motif-word--bold">CORD</text>
          <circle cx="86" cy="14" r="5" className="motif-dot" />
        </svg>
      );
    case "branch":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M20 55 L20 25 Q20 15 30 15 L70 15" className="motif-line" fill="none" />
          <circle cx="20" cy="55" r="4" className="motif-node" />
          <circle cx="70" cy="15" r="4" className="motif-node" />
          <path d="M20 55 L60 55" className="motif-line" fill="none" />
          <circle cx="60" cy="55" r="4" className="motif-node" />
        </svg>
      );
    case "waves":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M10 30 Q22 18 35 30 T60 30 T85 30" className="motif-line" fill="none" />
          <path d="M10 45 Q22 33 35 45 T60 45 T85 45" className="motif-line motif-line--dim" fill="none" />
        </svg>
      );
    case "quote":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <path d="M30 25c-8 0-13 6-13 14s5 13 13 13c2-10 6-16 14-22" className="motif-line" fill="none" />
          <path d="M65 25c-8 0-13 6-13 14s5 13 13 13c2-10 6-16 14-22" className="motif-line" fill="none" />
        </svg>
      );
    case "letters":
      return (
        <svg viewBox="0 0 100 70" className="motif-svg">
          <text x="38" y="46" textAnchor="middle" className="motif-word motif-word--bold" style={{ fontSize: 30 }}>A</text>
          <text x="68" y="46" textAnchor="middle" className="motif-word motif-word--dim" style={{ fontSize: 26 }}>a</text>
        </svg>
      );
    default:
      return null;
  }
}

// Bespoke per-tool icons for redesigned covers. Each one has a Fun (illustrated,
// colorful) version and a Pro (minimal line-art) version, switched by isPro.
function BespokeIcon({ type, isPro, style }) {
  if (isPro) {
    switch (type) {
      case "apple":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
            <path d="M30 50l16 -44 16 44" transform="translate(7,0)" />
            <path d="M38 30h16" transform="translate(7,0)" />
          </svg>
        );
      case "soundwave":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" style={style}>
            <path d="M22 42V30M34 46V24M46 48V20M58 44V28M70 38V34" />
          </svg>
        );
      case "headphones":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" style={style}>
            <path d="M28 38v-5a22 22 0 0 1 44 0v5" />
            <rect x="23" y="36" width="10" height="17" rx="5" />
            <rect x="67" y="36" width="10" height="17" rx="5" />
          </svg>
        );
      case "book":
        return (
          <svg viewBox="0 0 100 70" className="bespoke-icon" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={style}>
            <path d="M50 24c-9-5-21-5-30-2v28c9-3 21-3 30 2c9-5 21-5 30-2V22c-9-3-21-3-30 2z" />
            <path d="M50 24v28" />
          </svg>
        );
      default:
        return null;
    }
  }

  switch (type) {
    case "apple":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="20" ry="6" className="bespoke-shadow" />
          <g transform="translate(50,32)">
            <path d="M0 -24c-17 0 -23 15 -23 26c0 15 11 26 23 26s23 -11 23 -26c0 -11 -6 -26 -23 -26z" className="bespoke-apple-body" />
            <ellipse cx="-9" cy="-3" rx="5" ry="10" className="bespoke-apple-shine" />
            <path d="M0 -24q2 -7 7 -5" className="bespoke-apple-stem" />
            <path d="M4 -27c7 -3 11 3 8 8c-5 1 -11 -3 -8 -8z" className="bespoke-apple-leaf" />
          </g>
        </svg>
      );
    case "soundwave":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="22" ry="6" className="bespoke-shadow" />
          <path
            d="M19 22h60a7 7 0 0 1 7 7v18a7 7 0 0 1 -7 7h-35l-10 10v-10h-15a7 7 0 0 1 -7 -7v-18a7 7 0 0 1 7 -7z"
            className="bespoke-bubble"
          />
          <g className="bespoke-bars" strokeLinecap="round">
            <rect x="32" y="34" width="4" height="11" rx="2" />
            <rect x="40" y="30" width="4" height="19" rx="2" />
            <rect x="48" y="26" width="4" height="23" rx="2" />
            <rect x="56" y="32" width="4" height="15" rx="2" opacity="0.55" />
            <rect x="64" y="36" width="4" height="9" rx="2" opacity="0.4" />
          </g>
        </svg>
      );
    case "headphones":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="52" rx="24" ry="6" className="bespoke-shadow" />
          <g className="bespoke-headphones" strokeLinecap="round" fill="none">
            <path d="M27 38v-6a23 23 0 0 1 46 0v6" strokeWidth="5" />
            <rect x="20" y="35" width="11" height="18" rx="5.5" />
            <rect x="69" y="35" width="11" height="18" rx="5.5" />
            <path d="M80 38q9 4 9 12" strokeWidth="2" opacity="0.55" />
            <path d="M85 35q13 4 11 17" strokeWidth="2" opacity="0.3" />
          </g>
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 100 70" className="bespoke-icon" style={style}>
          <ellipse cx="50" cy="54" rx="26" ry="6" className="bespoke-shadow" />
          <g>
            <path d="M50 20c-8-6-20-6-28-3v30c8-3 20-3 28 3z" className="bespoke-book-left" />
            <path d="M50 20c8-6 20-6 28-3v30c-8-3-20-3-28 3z" className="bespoke-book-right" />
            <path d="M50 20v30" className="bespoke-book-spine" />
            <path d="M27 24l16 2.5M27 31l16 2.5M27 38l14 2" className="bespoke-book-lines" />
            <path d="M73 24l-16 2.5M73 31l-16 2.5M73 38l-14 2" className="bespoke-book-lines" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export default function Library() {
  const isPro = true;
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(() => searchParams.get("cat") || "All");
  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);
  const [query, setQuery] = useState("");
  const [showAllToday, setShowAllToday] = useState(false);
  const { user, plan, signOut } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === "caldrin1999@gmail.com";
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notifWrapRef = useRef(null);
  const unreadNotifCount = notifications.filter((n) => !n.read_at).length;
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [searchModeMenuOpen, setSearchModeMenuOpen] = useState(false);
  const [searchMode, setSearchMode] = useState(null);
  const [promptQuery, setPromptQuery] = useState("");
  const searchWrapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const isCurriculum = location.pathname.startsWith("/library/curriculum");
  const curriculumLevel = params.level || null;
  const curriculumTrack = params.track || null;

  function goToSidebar(sidebar, level = null) {
    if (sidebar === "curriculum") {
      navigate(level ? `/library/curriculum/${level}` : "/library/curriculum");
    } else {
      navigate("/library");
    }
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setSearchModeMenuOpen(false);
      }
      if (notifWrapRef.current && !notifWrapRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!user) { setAvatarUrl(null); return; }
    supabase.from("profiles").select("avatar_url").eq("id", user.id).maybeSingle().then(({ data }) => {
      setAvatarUrl(data?.avatar_url || null);
    });
  }, [user]);

  useEffect(() => {
    if (!user) { setNotifications([]); return; }
    supabase
      .from("notifications")
      .select("id, type, actor_name, post_id, read_at, created_at")
      .eq("recipient_id", user.id)
      .order("created_at", { ascending: false })
      .limit(20)
      .then(({ data }) => setNotifications(data || []));
  }, [user]);

  useEffect(() => {
    if (!user) { setUnreadMessageCount(0); return; }
    async function loadUnreadMessages() {
      const { data: convos } = await supabase
        .from("conversations")
        .select("id")
        .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`);
      const ids = (convos || []).map((c) => c.id);
      if (!ids.length) { setUnreadMessageCount(0); return; }
      const { count } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .in("conversation_id", ids)
        .is("read_at", null)
        .neq("sender_id", user.id);
      setUnreadMessageCount(count || 0);
    }
    loadUnreadMessages();
    if (!user) return;
    const channel = supabase
      .channel(`unread-badge-${user.id}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, loadUnreadMessages)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, loadUnreadMessages)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  function openNotifPanel() {
    setNotifOpen((wasOpen) => {
      const nowOpen = !wasOpen;
      if (nowOpen && unreadNotifCount > 0) {
        const unreadIds = notifications.filter((n) => !n.read_at).map((n) => n.id);
        setNotifications((prev) => prev.map((n) => (n.read_at ? n : { ...n, read_at: new Date().toISOString() })));
        supabase.from("notifications").update({ read_at: new Date().toISOString() }).in("id", unreadIds);
      }
      return nowOpen;
    });
  }

  function goToNotification(n) {
    setNotifOpen(false);
    navigate(n.post_id ? `/library/community?post=${n.post_id}` : "/library/community");
  }

  function pickSearchMode(key) {
    setSearchModeMenuOpen(false);
    if (plan !== "pro_plus") {
      navigate("/library/subscription");
      return;
    }
    setSearchMode(key);
    setPromptQuery("");
  }

  function clearSearchMode() {
    setSearchMode(null);
    setPromptQuery("");
  }

  function submitSearchMode() {
    const q = promptQuery.trim();
    if (!q || !searchMode) return;
    navigate(`/library/search?mode=${searchMode}&q=${encodeURIComponent(q)}`);
    setPromptQuery("");
    setSearchMode(null);
  }

  const gridWrapRef = useRef(null);
  const [gridConfig, setGridConfig] = useState({ width: 160, height: 224, columns: 4 });

  const [tools, setTools] = useState([]);
  const [toolsLoading, setToolsLoading] = useState(true);
  const [toolsError, setToolsError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function loadTools() {
      setToolsLoading(true);
      setToolsError(null);
      const { data, error } = await supabase
        .from("tools")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!isMounted) return;
      if (error) {
        setToolsError(error.message);
        setTools([]);
      } else {
        setTools(data || []);
      }
      setToolsLoading(false);
    }
    loadTools();
    return () => { isMounted = false; };
  }, []);

  const filtered = tools.filter((t) => {
    const matchesCategory =
      category === "All"
        ? true
        : category === "Reading"
          ? t.category === "Reading" && t.content_type === "story"
          : t.category === category;
    const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  useEffect(() => {
    const ASPECT = 0.7; // width / height -> taller than wide, like a real book
    const GAP = 14;

    function recalc() {
      const el = gridWrapRef.current;
      if (!el) return;
      const W = el.clientWidth;
      const H = el.clientHeight;
      if (!W || !H) return;

      const count = pageItems.length || 1;
      const columns = Math.min(4, count);
      const rows = Math.max(1, Math.ceil(count / columns));

      const availW = (W - GAP * (columns - 1)) / columns;
      const availH = (H - GAP * (rows - 1)) / rows;

      let height = Math.min(availH, availW / ASPECT);
      height = Math.max(110, height);
      const width = height * ASPECT;

      setGridConfig({ width, height, columns });
    }

    recalc();

    const el = gridWrapRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", recalc);
      return () => window.removeEventListener("resize", recalc);
    }
    const observer = new ResizeObserver(recalc);
    observer.observe(el);
    return () => observer.disconnect();
  }, [pageItems.length, isPro]);

  function changeCategory(cat) {
    setCategory(cat);
    setPage(1);
    setShowAllToday(false);
    navigate(`/library?cat=${encodeURIComponent(cat)}`);
  }

  const genericContent = toolsLoading ? (
    <p className="empty-msg">Loading library…</p>
  ) : toolsError ? (
    <p className="empty-msg">Couldn't load the library right now. Please refresh.</p>
  ) : pageItems.length === 0 ? (
    <p className="empty-msg">No tools found. Try a different search or category.</p>
  ) : (
    <div
      className="cover-grid"
      style={{ gridTemplateColumns: `repeat(${gridConfig.columns}, ${gridConfig.width}px)` }}
    >
      {pageItems.map((c) => {
  const CoverTag = "a";
  const coverProps = { href: c.content_type === "forge-track" ? `/library/forge/${c.id}` : `/library/${c.id}` };
  return (
    <CoverTag
      key={c.id}
      {...coverProps}
      className={`cover cover--${c.palette} ${c.tagline ? "cover--redesigned" : ""} ${c.content_type === "story" ? "cover--story" : ""} ${c.content_type === "forge-track" ? "cover--forge-track" : ""}`}
      style={{ width: `${gridConfig.width}px`, height: `${gridConfig.height}px` }}
    >
                {c.access === "premium" && (
                  <span className="premium-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    Premium
                  </span>
                )}

                {c.content_type === "forge-track" ? (
                  <div className="story-card-content">
                    {FORGE_COVERS[c.id] ? (
                      <img className="story-card-cover-img" src={FORGE_COVERS[c.id]} alt={c.title} />
                    ) : (
                      <div className="story-card-cover-ph">
                        <ImagePlaceholder note="Track cover photo" compact />
                      </div>
                    )}
                    <span className="story-badge">🗣️ Speaking</span>
                    <div className="story-card-scrim" />
                    <div className="story-card-text">
                      <h3 className="story-card-title">{c.title}</h3>
                      <span className="story-card-sub">{c.sub}</span>
                    </div>
                  </div>
                ) : c.content_type === "story" ? (
                  <div className="story-card-content">
                    {STORY_COVERS[c.id] ? (
                      <img className="story-card-cover-img" src={STORY_COVERS[c.id]} alt={c.title} />
                    ) : (
                      <div className="story-card-cover-ph">
                        <ImagePlaceholder note="Book cover image" compact />
                      </div>
                    )}
                    <span className="story-badge">📖 Story</span>
                    <div className="story-card-scrim" />
                    <div className="story-card-text">
                      <h3 className="story-card-title">{c.title}</h3>
                      <span className="story-card-sub">{c.sub}</span>
                    </div>
                  </div>
                ) : c.tagline ? (
                  <div
                    className="bespoke-content"
                    style={{ gap: Math.max(4, gridConfig.height * 0.028) }}
                  >
                    <div
                      className="bespoke-icon-wrap"
                      style={{ maxHeight: gridConfig.height * 0.65 }}
                    >
                      <BespokeIcon
                        type={c.motif}
                        isPro={isPro}
                        style={{ width: gridConfig.width * 0.67, maxWidth: "none" }}
                      />
                    </div>
                    <p
                      className="bespoke-tagline"
                      style={{ fontSize: Math.max(10, gridConfig.height * 0.065), margin: 0 }}
                    >
                      {c.tagline}
                    </p>
                    <div
                      className="bespoke-divider"
                      style={{ width: gridConfig.width * 0.7 }}
                    />
                    <span
                      className="bespoke-label"
                      style={{ fontSize: Math.max(7, gridConfig.height * 0.038) }}
                    >
                      {c.title.toUpperCase()}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="cover-motif"><Motif type={c.motif} /></div>
                    <div className="cover-text">
                      <h3>{c.title}</h3>
                      <span className="cover-sub">{c.sub}</span>
                    </div>
                    <div className="cover-footer">
                      <span className="cover-level">{c.level}</span>
                    </div>
                  </>
                )}
                </CoverTag>
              );
            })}
    </div>
  );

  return (
    <>
    <div className={`page ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="gc-band">
        <div className="gc-topbar">
          <a
            href="/library"
            className="gc-header-brand"
            onClick={(e) => { e.preventDefault(); changeCategory("All"); }}
          >
            <img src="/logo-sentivo.png" alt="" className="gc-header-logo" />entivo
          </a>
          <div className="gc-topbar-actions">
            <div className={`gc-search ${searchMode ? "has-mode" : ""}`} ref={searchWrapRef}>
              <div className="gc-search-icon-wrap">
                <button
                  type="button"
                  className="gc-search-icon-btn"
                  onClick={() => setSearchModeMenuOpen((o) => !o)}
                  title="Dictionary, Grammar & Translator"
                  aria-label="Open Dictionary, Grammar & Translator"
                  aria-expanded={searchModeMenuOpen}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="9" cy="9" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="13.6" y1="13.6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                {searchModeMenuOpen && (
                  <div className="gc-search-mode-menu">
                    <div className="gc-search-mode-heading">Look something up</div>
                    {SEARCH_MODES.map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        className={`gc-search-mode-item gc-search-mode-item--${m.key}`}
                        onClick={() => pickSearchMode(m.key)}
                      >
                        <span className="gc-search-mode-icon"><ModeIcon mode={m.key} /></span>
                        {m.label}
                        {plan !== "pro_plus" && <span className="gc-search-mode-lock">Pro+</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {searchMode && (
                <span className={`gc-search-pill gc-search-pill--${searchMode}`}>
                  <ModeIcon mode={searchMode} />
                  {SEARCH_MODES.find((m) => m.key === searchMode)?.label}
                  <button type="button" className="gc-search-pill-x" onClick={clearSearchMode} aria-label="Clear mode">×</button>
                </span>
              )}
              <input
                type="text"
                placeholder={searchMode ? `Ask ${SEARCH_MODES.find((m) => m.key === searchMode)?.label}…` : "Search library…"}
                value={searchMode ? promptQuery : query}
                onChange={(e) => {
                  if (searchMode) {
                    setPromptQuery(e.target.value);
                  } else {
                    setQuery(e.target.value);
                    setPage(1);
                    if (isCurriculum) goToSidebar("library");
                  }
                }}
                onKeyDown={(e) => {
                  if (searchMode && e.key === "Enter") {
                    e.preventDefault();
                    submitSearchMode();
                  } else if (searchMode && e.key === "Escape") {
                    clearSearchMode();
                  }
                }}
              />
              {searchMode && (
                <button
                  type="button"
                  className="gc-search-send-btn"
                  onClick={submitSearchMode}
                  disabled={!promptQuery.trim()}
                  aria-label="Submit"
                >
                  <SendIcon />
                </button>
              )}
            </div>
            {!user ? (
              <>
                <button className="gc-btn" onClick={() => setAuthMode("login")}>Log in</button>
                <button className="gc-btn primary" onClick={() => setAuthMode("signup")}>Sign up</button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className={`notif-btn${unreadMessageCount > 0 ? " has-unread" : ""}`}
                  onClick={() => navigate("/library/messages")}
                  aria-label="Convo"
                  title="Convo"
                >
                  <ChatIcon />
                  {unreadMessageCount > 0 && <span className="notif-dot" />}
                </button>
                <div className="notif-wrap" ref={notifWrapRef}>
                  <button
                    type="button"
                    className={`notif-btn${unreadNotifCount > 0 ? " has-unread" : ""}`}
                    onClick={openNotifPanel}
                    aria-label="Notifications"
                    aria-expanded={notifOpen}
                  >
                    <BellIcon />
                    {unreadNotifCount > 0 && <span className="notif-dot" />}
                  </button>
                  {notifOpen && (
                    <div className="notif-panel">
                      <div className="notif-panel-head">Notifications</div>
                      {notifications.length === 0 ? (
                        <div className="notif-empty">
                          <BellIcon />
                          <p>You're all caught up.</p>
                        </div>
                      ) : (
                        <div className="notif-list">
                          {notifications.map((n) => (
                            <button
                              type="button"
                              key={n.id}
                              className={`notif-item${n.read_at ? "" : " is-unread"}`}
                              onClick={() => goToNotification(n)}
                            >
                              <span className="notif-item-text">
                                <strong>{n.actor_name || "Someone"}</strong>{" "}
                                {n.type === "post_reply" ? "replied to your post" : "replied to your comment"}
                              </span>
                              <span className="notif-item-time">{timeAgo(n.created_at)}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="account-wrap">
                  <button className="avatar-btn" onClick={() => setMenuOpen((m) => !m)} aria-label="Account menu">
                    {avatarUrl ? <img src={avatarUrl} alt="" className="avatar-btn-img" /> : <UserIcon />}
                  </button>
                  {menuOpen && (
                    <div className="account-menu">
                      <button type="button" className="account-menu-link" onClick={() => { setProfileOpen(true); setMenuOpen(false); }}>Profile</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/files"); setMenuOpen(false); }}>File Cabinet</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/subscription"); setMenuOpen(false); }}>Subscription</button>
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/mentors"); setMenuOpen(false); }}>Find a Mentor</button>
                      {isAdmin && (
                        <button type="button" className="account-menu-link" onClick={() => { navigate("/library/admin/mentors"); setMenuOpen(false); }}>Mentor Applications</button>
                      )}
                      <button type="button" className="account-menu-link" onClick={() => { navigate("/library/legal/terms"); setMenuOpen(false); }}>Terms & Privacy</button>
                      <a href="mailto:hello@sentivo.com">Help &amp; Support</a>
                      <button className="logout-btn" onClick={() => { signOut(); setMenuOpen(false); }}>Log out</button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="gc-sections">
          <button
            className={`gc-sec-tab ${!isCurriculum && category === "All" ? "is-active" : ""}`}
            onClick={() => changeCategory("All")}
          >
            Homeroom
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gc-sec-tab ${!isCurriculum && category === cat ? "is-active" : ""}`}
              onClick={() => changeCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gc-editions">
          <button
            className={`gc-ed-tab ${isCurriculum && !curriculumLevel ? "is-active" : ""}`}
            onClick={() => goToSidebar("curriculum", null)}
          >
            Overview
          </button>
          <a href="/library/spark" className="gc-ed-spark">Spark Class</a>
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((lvl) => (
            <button
              key={lvl}
              className={`gc-ed-tab ${isCurriculum && curriculumLevel === lvl ? "is-active" : ""}`}
              onClick={() => goToSidebar("curriculum", lvl)}
              title={{ "A1": "A1 — Beginner", "A2": "A2 — Elementary", "B1": "B1 — Intermediate", "B2": "B2 — Upper Int.", "C1": "C1 — Advanced", "C2": "C2 — Proficient" }[lvl]}
            >
              {lvl}
            </button>
          ))}
        </div>
      </header>

      <div className="body-wrap">
      {isCurriculum ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          {plan === "pro_plus" ? (
            <CurriculumRouter
              isPro={isPro}
              level={curriculumLevel}
              track={curriculumTrack}
            />
          ) : (
            <CurriculumLockedFeature navigate={navigate} />
          )}
        </div>
      ) : (
      <main className={`content ${category === "Articles" ? "content--wide" : ""}`}>
                <div className={`grid-wrap ${category === "All" && !query.trim() && !showAllToday ? "grid-wrap--today" : (category === "Articles" || category === "Grammar" || category === "Reading" || category === "Speaking" || category === "Vocabulary" || category === "Writing" || category === "Listening") ? "grid-wrap--top" : ""}`} ref={gridWrapRef}>
        {category === "All" && !query.trim() && !showAllToday ? (
          toolsLoading ? (
            <p className="empty-msg">Loading today's edition…</p>
          ) : (
            <TodayFeature navigate={navigate} />
          )
        ) : category === "Articles" ? (
          <ArticlesFeature navigate={navigate} query={query} />
        ) : PRO_CATEGORIES.includes(category) && plan === "free" ? (
          <CategoryLockedFeature category={category} navigate={navigate} />
        ) : category === "Grammar" ? (
          <GrammarFeature navigate={navigate} query={query} />
        ) : category === "Reading" ? (
          <BookshelfFeature items={filtered} navigate={navigate} query={query} />
        ) : category === "Speaking" ? (
          <div className="spklab-page">
            <div className="spklab-hero">
              <span className="spklab-eyebrow">Sentivo · Speaking</span>
              <h1 className="spklab-title">Diagnose the gap. Prescribe the track.</h1>
              <p className="spklab-sub">Every Speaking course is built around one identified gap, not a general level.</p>
            </div>
            <div className="spklab-lane"></div>
            {(() => {
              const q = query.trim().toLowerCase();
              const tracks = q
                ? SPEAKING_TRACKS.filter((t) => t.name.toLowerCase().includes(q) || t.gap.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q))
                : SPEAKING_TRACKS;
              return tracks.length === 0 ? (
                <p className="empty-msg">No Speaking tracks match "{query.trim()}".</p>
              ) : (
                <div className="spklab-grid">
                  {tracks.map((t) => (
                    <a key={t.key} href={t.href} className={`spklab-card spklab-card--${t.hue}`}>
                      <SpeakingBanner name={t.key} />
                      <div className="spklab-body">
                        <div className="spklab-label">Gap identified</div>
                        <p className="spklab-gap">{t.gap}</p>
                        <h3 className="spklab-name">{t.name}</h3>
                        <p className="spklab-desc">{t.desc}</p>
                        <span className="spklab-cta">Open {t.name} →</span>
                      </div>
                    </a>
                  ))}
                </div>
              );
            })()}
          </div>
        ) : category === "Vocabulary" ? (
          <VocabularyGames query={query} />
        ) : category === "Writing" ? (
          <div className="dyn-landing dyn-landing--writing">
            <div className="dyn-landing-hero">
              <span className="dyn-landing-eyebrow">Sentivo · Writing</span>
              <h1><span className="dyn-landing-pill">✍️ Writing Desk</span></h1>
            </div>
            <div className="dyn-landing-row"></div>
            <WritingActivities query={query} />
          </div>
        ) : category === "Listening" ? (
          <div className="dyn-landing dyn-landing--listening">
            <div className="dyn-landing-hero">
              <span className="dyn-landing-eyebrow">Sentivo · Listening</span>
              <h1><span className="dyn-landing-pill">🎧 Sound Booth</span></h1>
            </div>
            <div className="dyn-landing-row"></div>
            <div className="dyn-landing-soon">
              <span className="dyn-landing-soon-icon">🎧</span>
              <p className="dyn-landing-soon-title">Coming soon</p>
              <p className="dyn-landing-soon-desc">Listening lessons are on the way — check back soon.</p>
            </div>
          </div>
        ) : (
          genericContent
        )}
        </div>

        {category !== "Speaking" && category !== "Grammar" && category !== "Articles" && category !== "Reading" && category !== "Vocabulary" && category !== "Writing" && category !== "Listening" && !(category === "All" && !query.trim() && !showAllToday) && (
        <div className="pagination">
          <button disabled={safePage === 1} onClick={() => changePage(safePage - 1)}>&larr; Prev</button>
          <span className="page-indicator">Page {safePage} of {totalPages}</span>
          <button disabled={safePage === totalPages} onClick={() => changePage(safePage + 1)}>Next &rarr;</button>
        </div>
        )}
      </main>
      )}
      </div>
      </div>
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
      {profileOpen && (
        <ProfileSettings
          onClose={() => setProfileOpen(false)}
          onSaved={(newAvatarUrl) => setAvatarUrl(newAvatarUrl)}
        />
      )}
    </>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;900&family=Bangers&family=Comic+Neue:wght@400;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }

.page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

.body-wrap {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.page {
  --ink: #2B2A4A;
  --paper: #FFFFFF;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --rust: #7C5CFC;
  --ochre: #FF8A4C;
  --dusk: #16BFAE;
  --marigold: #FFB648;
  --coral: #FF6B4A;
  --hair: rgba(43,42,74,0.11);
}
.theme-pro { background: var(--paper); color: var(--ink); }

/* ── Gazette masthead ── */
.gc-band {
  flex-shrink: 0;
  background: var(--card);
  border-bottom: 1px solid var(--hair);
}
.gc-topbar { display: flex; align-items: center; justify-content: space-between; padding: 9px 40px; font-family: 'Quicksand', sans-serif; }
.gc-header-brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: 0.01em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0;
}
.gc-header-logo { height: 32px; width: auto; display: block; margin-right: -5px; }
.gc-topbar-actions { display: flex; align-items: center; gap: 12px; }
.gc-search {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border: 1px solid var(--hair);
  border-radius: 999px;
  background: var(--card);
  color: var(--muted);
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}
.gc-search:hover { border-color: rgba(43,42,74,0.2); }
.gc-search:focus-within { border-color: rgba(255,107,74,0.55); box-shadow: 0 0 0 4px rgba(255,107,74,0.1); background: #fff; }
.gc-search.has-mode { background: #fff; border-color: rgba(43,42,74,0.16); }
.gc-search svg { width: 14px; height: 14px; flex-shrink: 0; }
.gc-search-icon-wrap { position: relative; display: flex; flex-shrink: 0; }
.gc-search-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.15s, color 0.15s;
}
.gc-search-icon-btn:hover { color: var(--coral); background: rgba(255,107,74,0.1); }
.gc-search-mode-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: -6px;
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(43,42,74,0.16);
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-width: 190px;
  z-index: 40;
}
.gc-search-mode-heading {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 6px 10px 8px;
}
.gc-search-mode-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: var(--ink);
  background: none;
  border: none;
  border-radius: 10px;
  padding: 8px 10px;
  text-align: left;
  cursor: pointer;
}
.gc-search-mode-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  flex-shrink: 0;
}
.gc-search-mode-icon svg { width: 14px; height: 14px; }
.gc-search-mode-item--dictionary .gc-search-mode-icon { background: rgba(22,191,174,0.14); color: #16BFAE; }
.gc-search-mode-item--grammar .gc-search-mode-icon { background: rgba(124,92,252,0.14); color: #7C5CFC; }
.gc-search-mode-item--translator .gc-search-mode-icon { background: rgba(255,138,76,0.16); color: #FF8A4C; }
.gc-search-mode-item:hover { background: rgba(43,42,74,0.05); }
.gc-search-mode-item--dictionary:hover { color: #16BFAE; }
.gc-search-mode-item--grammar:hover { color: #7C5CFC; }
.gc-search-mode-item--translator:hover { color: #FF8A4C; }
.gc-search-mode-lock {
  margin-left: auto; font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 9.5px;
  letter-spacing: 0.05em; color: #1B2A4A; background: #E9ECF3; padding: 2px 7px; border-radius: 999px;
  flex-shrink: 0;
}
.gc-search-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  background: var(--coral);
  border-radius: 999px;
  padding: 5px 6px 5px 11px;
}
.gc-search-pill svg { width: 11px; height: 11px; }
.gc-search-pill--dictionary { background: #16BFAE; }
.gc-search-pill--grammar { background: #7C5CFC; }
.gc-search-pill--translator { background: #FF8A4C; }
.gc-search-pill-x { border: none; background: none; color: #fff; opacity: 0.8; cursor: pointer; font-size: 13px; line-height: 1; padding: 2px 4px; }
.gc-search-pill-x:hover { opacity: 1; }
.gc-search-send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  background: var(--coral);
  color: #fff;
  cursor: pointer;
  transition: transform 0.1s, background 0.15s;
  padding: 0;
}
.gc-search-send-btn:hover:not(:disabled) { background: #E85436; }
.gc-search-send-btn:active:not(:disabled) { transform: scale(0.92); }
.gc-search-send-btn svg { width: 13px; height: 13px; }
.gc-search-send-btn:disabled { background: #E8C9BC; cursor: default; }
.gc-search input { border: none; background: transparent; outline: none; font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--ink); width: 220px; transition: width 0.15s; }
.gc-search.has-mode input { width: 170px; }
.gc-search input::placeholder { color: #9B9382; }
.gc-btn { font-family: 'Quicksand', sans-serif; font-size: 13.5px; font-weight: 700; padding: 8px 18px; border-radius: 999px; border: 1.5px solid var(--ink); color: var(--ink); background: transparent; cursor: pointer; text-decoration: none; }
.gc-btn.primary { background: var(--ink); color: var(--card); }
.gc-sections { display: flex; align-items: center; justify-content: center; gap: 0; padding: 4px 40px; font-family: 'Quicksand', sans-serif; overflow-x: auto; border-bottom: 1px solid var(--hair); }
.gc-sec-tab {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 18px;
  color: var(--ink);
  border: none;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  text-decoration: none;
}
.gc-sec-tab:not(:last-child) { border-right: 1px solid rgba(34,58,51,0.12); }
.gc-sec-tab:hover { color: var(--coral); }
.gc-sec-tab.is-active { border-bottom-color: transparent; background: var(--ink); color: #FFFFFF; border-radius: 999px; }

.gc-editions { display: flex; align-items: center; justify-content: center; gap: 11px; padding: 5px 40px; border-bottom: 1px solid var(--hair); font-family: 'Quicksand', sans-serif; background: rgba(34,58,51,0.035); }
.gc-ed-spark { font-size: 12px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 13px; border-radius: 999px; color: var(--muted); text-decoration: none; }
.gc-ed-spark:hover { color: var(--coral); }
.gc-ed-tab { font-size: 12px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 13px; border-radius: 999px; color: var(--muted); background: none; border: none; cursor: pointer; }
.gc-ed-tab:hover { color: var(--coral); }
.gc-ed-tab.is-active { background: var(--ink); color: var(--card); }

/* ── Today: teacher dashboard ── */
.gc-dashboard {
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-soft: #5A6B92;
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
}
.td-page { width: 100%; }
.td-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  align-items: start;
  gap: 24px;
}
.td-main { min-width: 0; display: flex; flex-direction: column; gap: 18px; }

.gc-sidebar { display: flex; flex-direction: column; position: sticky; top: 0; }

/* ── Today's Brief: one unified sidebar panel (clock + correction + more) ── */
.td-brief-panel {
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 22px;
  box-shadow: 0 14px 36px rgba(43,42,74,0.10);
}

.td-brief-clock {
  position: relative;
  background: linear-gradient(155deg, var(--navy) 0%, #24365E 100%);
  border-radius: 22px 22px 0 0;
  padding: 18px 20px 16px;
  text-align: center;
}
.td-brief-clock::after {
  content: ""; position: absolute; left: 20px; right: 20px; bottom: 0; height: 3px;
  background: var(--coral); border-radius: 2px 2px 0 0;
}
.gc-clock { text-align: center; }
.gc-clock-time { font-family: 'Fredoka', sans-serif; font-variant-numeric: tabular-nums; font-size: 27px; font-weight: 600; color: #fff; letter-spacing: 0.02em; }
.gc-clock-sec { font-size: 18px; color: rgba(255,255,255,0.5); font-weight: 500; }
.gc-clock-meta { display: flex; justify-content: center; gap: 8px; margin-top: 4px; font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.55); }

.td-brief-section { padding: 22px 20px 18px; }
.td-dc-label { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-family: 'Quicksand', sans-serif; font-size: 11.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--coral); }
.td-dc-badge { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: var(--coral-pale); color: var(--coral); flex-shrink: 0; }
.td-dc-badge svg { width: 11px; height: 11px; }
.td-dc-headline { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 16.5px; line-height: 1.4; margin: 0 0 13px; color: var(--ink); text-wrap: balance; }
.td-dc-quote { color: var(--coral); margin-right: 5px; }
.corr-wrong { color: #9B9382; font-weight: 400; text-decoration: line-through; text-decoration-color: #B9AF9C; margin-right: 6px; }
.corr-right { color: var(--coral); font-weight: 700; }
.td-dc-why { background: var(--coral-pale); border-radius: 14px; padding: 11px 14px; }
.td-dc-explain { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.55; color: var(--ink-soft, #4C4A3E); margin: 0; }
.td-dc-explain + .td-dc-explain { margin-top: 4px; }

/* ── More corrections: a compact divided list instead of separate cards ── */
.td-brief-list { padding: 2px 20px 18px; border-top: 1px solid var(--hair); }
.td-brief-list-label { font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 15px 0 2px; }
.td-brief-row {
  position: relative; display: flex; align-items: flex-start; gap: 10px;
  padding: 10px 0; cursor: default;
}
.td-brief-row + .td-brief-row { border-top: 1px solid var(--hair); }
.td-brief-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent, var(--coral)); flex-shrink: 0; margin-top: 6px; }
.td-brief-row.hue-coral { --accent: var(--coral); }
.td-brief-row.hue-gold { --accent: var(--marigold, var(--navy)); }
.td-brief-row.hue-teal { --accent: var(--dusk, var(--navy-soft)); }
.td-brief-row-body { min-width: 0; }
.td-brief-label { font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent, var(--coral)); margin-bottom: 3px; }
.td-brief-line { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.3; color: var(--ink); margin: 0; }
.td-brief-pop {
  position: absolute;
  top: calc(100% - 4px);
  left: 17px;
  right: 0;
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 0 12px 28px rgba(43,42,74,0.18);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
  z-index: 30;
  pointer-events: none;
}
.td-brief-pop p { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.4; color: #4C4A3E; margin: 0; }
.td-brief-pop p + p { margin-top: 4px; }
.td-brief-row:hover { z-index: 20; }
.td-brief-row:hover .td-brief-pop { opacity: 1; visibility: visible; transform: translateY(0); }

/* ── Toolkit ── */
.td-section-label { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
.td-actions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.td-action-card {
  display: flex; align-items: center; gap: 12px;
  background: var(--card); border: none; border-radius: 18px; padding: 12px 14px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
  font: inherit; text-align: left; cursor: pointer; color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.td-action-card:not(.is-soon):hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(43,42,74,0.10); }
.td-action-icon { width: 40px; height: 40px; border-radius: 12px; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: #F5F6FA; }
.td-action-icon img { width: 100%; height: 100%; object-fit: contain; }
.td-action-title { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.25; color: var(--ink); }
.td-action-card.is-soon { opacity: 0.7; cursor: default; }
.td-action-card[aria-disabled="true"] { position: relative; opacity: 0.55; cursor: not-allowed; }
.td-action-card[aria-disabled="true"]:hover { transform: none; box-shadow: 0 8px 24px rgba(43,42,74,0.05); }
.td-action-lock {
  position: absolute; top: 8px; right: 8px; width: 20px; height: 20px; border-radius: 50%;
  background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center;
}
.td-action-lock svg { width: 10px; height: 10px; }

.td-actions-grid.is-locked { margin-top: 8px; }

.td-desk-lock-note {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--muted);
  margin: 0; line-height: 1.3;
}
.td-desk-lock-note svg { width: 13px; height: 13px; color: var(--coral); flex-shrink: 0; }

/* ── Quote banner ── */
.td-quote-banner { border-radius: 24px; overflow: hidden; line-height: 0; }
.td-quote-banner img { width: 100%; height: auto; display: block; }

/* ── Responsive: full sidebar vs. compact chips ── */
@media (max-width: 860px) {
  .td-body { grid-template-columns: 1fr; }
  .gc-sidebar { display: none; }
}
@media (max-width: 560px) {
  .td-actions-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .td-briefs { grid-template-columns: 1fr; }
}

/* ── Responsive: narrower / non-maximized browser windows ── */
@media (max-width: 1300px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 20px; padding-right: 20px; }
  .gc-dashboard { max-width: 720px; }
  .gc-sec-tab { font-size: 13px; letter-spacing: 0.04em; padding: 8px 14px; }
}
@media (max-width: 900px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 14px; padding-right: 14px; }
  .gc-search input { width: 130px; }
  .gc-sec-tab { font-size: 10.5px; letter-spacing: 0.02em; padding: 7px 8px; }
}

.notif-wrap { position: relative; }
.notif-btn {
  position: relative; width: 38px; height: 38px; border-radius: 50%;
  border: 1px solid var(--hair); background: none; color: var(--muted);
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.notif-btn svg { width: 19px; height: 19px; }
.notif-btn:hover { color: var(--coral); border-color: var(--coral); background: rgba(255,107,74,0.08); }
.notif-btn.has-unread { color: #1B2A4A; border-color: #1B2A4A; }
.notif-dot {
  position: absolute; top: 6px; right: 6px; width: 9px; height: 9px; border-radius: 50%;
  background: var(--coral); border: 1.5px solid var(--card);
}
.notif-panel {
  position: absolute; top: 46px; right: 0; width: 300px; max-height: 360px; overflow-y: auto;
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px;
  box-shadow: 0 16px 32px rgba(43,42,74,0.16); padding: 6px; z-index: 20;
}
.notif-panel-head {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: var(--ink);
  padding: 10px 12px 8px;
}
.notif-empty {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 22px 16px 26px; color: var(--muted);
}
.notif-empty svg { width: 26px; height: 26px; opacity: 0.4; }
.notif-empty p { margin: 0; font-family: 'Quicksand', sans-serif; font-size: 12.5px; }
.notif-list { display: flex; flex-direction: column; gap: 2px; }
.notif-item {
  display: flex; flex-direction: column; gap: 3px; text-align: left;
  width: 100%; background: none; border: none; border-radius: 10px; cursor: pointer;
  padding: 9px 12px; font: inherit;
}
.notif-item:hover { background: rgba(27,42,74,0.05); }
.notif-item.is-unread { background: rgba(255,107,74,0.06); }
.notif-item.is-unread:hover { background: rgba(255,107,74,0.11); }
.notif-item-text { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--ink); line-height: 1.4; }
.notif-item-text strong { font-weight: 700; }
.notif-item-time { font-family: 'Quicksand', sans-serif; font-size: 10.5px; color: var(--muted); }

.account-wrap { position: relative; }
.avatar-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: #FF7A59;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.theme-pro .avatar-btn { border-radius: 4px; background: #1B2A4A; }
.avatar-btn-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
.theme-pro .avatar-btn-img { border-radius: 4px; }
.account-menu {
  position: absolute;
  top: 46px;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  z-index: 10;
}
.theme-pro .account-menu { border-radius: 6px; border: 1px solid #DEDAD0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.account-menu a, .account-menu .account-menu-link, .account-menu .logout-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 9px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #3D3552;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  width: 100%;
}
.theme-pro .account-menu a, .theme-pro .account-menu .account-menu-link, .theme-pro .account-menu .logout-btn { font-family: 'Inter', sans-serif; color: #1B2A4A; border-radius: 4px; }
.account-menu a:hover, .account-menu .account-menu-link:hover, .account-menu .logout-btn:hover { background: #F4F0FF; }
.theme-pro .account-menu a:hover, .theme-pro .account-menu .account-menu-link:hover, .theme-pro .account-menu .logout-btn:hover { background: #F0EBDD; }
.account-menu .logout-btn { color: #B5483A; margin-top: 4px; border-top: 1px solid #eee; padding-top: 10px; }

.content {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: clamp(2px, 1vh, 8px) 40px clamp(6px, 2vh, 16px);
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.content--wide { max-width: 1600px; }

.empty-msg { font-size: 14px; opacity: 0.6; padding: 30px 0; text-align: center; }

.cat-locked {
  max-width: 400px; margin: 64px auto; text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.cat-locked-icon {
  width: 52px; height: 52px; border-radius: 50%; margin-bottom: 8px;
  background: #FDECE5; color: #FF6B4A;
  display: flex; align-items: center; justify-content: center;
}
.cat-locked-icon svg { width: 22px; height: 22px; }
.cat-locked-eyebrow {
  font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.1em;
  text-transform: uppercase; color: #FF6B4A; margin: 0;
}
.cat-locked-title {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; color: var(--ink); margin: 4px 0 0;
}
.cat-locked-desc {
  font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--muted); line-height: 1.6; margin: 4px 0 14px;
}
.cat-locked-cta {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  background: #FF6B4A; color: #fff; border: none; border-radius: 999px;
  padding: 10px 26px; cursor: pointer;
}
.cat-locked-cta:hover { filter: brightness(0.94); }
.cat-locked-icon--navy { background: #E9ECF3; color: #1B2A4A; }
.cat-locked-eyebrow--navy { color: #1B2A4A; }
.cat-locked-cta--navy { background: #1B2A4A; }
.cat-locked-cta--navy:hover { filter: brightness(1.25); }
.cat-locked-link {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
  background: none; border: none; cursor: pointer; padding: 8px 4px; text-decoration: underline;
}
.cat-locked-link:hover { color: var(--ink); }

.grid-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-wrap--today { align-items: flex-start; overflow-y: auto; }
.grid-wrap--top { align-items: flex-start; padding-top: clamp(0px, 0.5vh, 10px); overflow-y: auto; }

.cover-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 14px;
  width: 100%;
  height: 100%;
}

/* ---------- Vocabulary / Writing: dynamic catalog landing ---------- */
.dyn-landing {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  border-radius: 22px;
  padding: clamp(20px, 2.6vw, 32px) clamp(18px, 2.4vw, 28px) clamp(26px, 3vw, 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dyn-landing--vocab {
  background: linear-gradient(180deg, #FCF9F1 0%, #F5EDD8 100%);
}
.dyn-landing--writing {
  background: linear-gradient(180deg, #F3FAF8 0%, #E4F1EC 100%);
}
.dyn-landing--listening {
  background: linear-gradient(180deg, #FDF4F0 0%, #F9E4DA 100%);
}
.dyn-landing-hero { text-align: center; }
.dyn-landing-eyebrow {
  display: block;
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.dyn-landing--vocab .dyn-landing-eyebrow { color: #96721B; }
.dyn-landing--writing .dyn-landing-eyebrow { color: #3F7A4E; }
.dyn-landing--listening .dyn-landing-eyebrow { color: #C1573A; }
.dyn-landing-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 2.4vw, 30px);
  letter-spacing: 0.04em;
  color: #2B2A4A;
  padding: 6px 22px 9px;
  border-radius: 999px;
}
.dyn-landing--vocab .dyn-landing-pill { background: rgba(184,140,26,0.16); }
.dyn-landing--writing .dyn-landing-pill { background: rgba(63,122,78,0.14); }
.dyn-landing--listening .dyn-landing-pill { background: rgba(224,106,74,0.16); }
.dyn-landing-row { position: relative; height: 2px; width: 100%; max-width: 1040px; margin: clamp(22px, 2.8vw, 32px) 0; }
.dyn-landing--vocab .dyn-landing-row { background: #E8D6A0; }
.dyn-landing--writing .dyn-landing-row { background: #C3DCC0; }
.dyn-landing--listening .dyn-landing-row { background: #F0C3AE; }
.dyn-landing-row::before, .dyn-landing-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; }
.dyn-landing--vocab .dyn-landing-row::before, .dyn-landing--vocab .dyn-landing-row::after { background: #B88C1A; }
.dyn-landing--writing .dyn-landing-row::before, .dyn-landing--writing .dyn-landing-row::after { background: #3F7A4E; }
.dyn-landing--listening .dyn-landing-row::before, .dyn-landing--listening .dyn-landing-row::after { background: #C1573A; }
.dyn-landing-row::before { left: 0; }
.dyn-landing-row::after { right: 0; }
.dyn-landing .cover-grid { justify-content: center; }
.dyn-landing .empty-msg { color: #2B2A4A; }

.dyn-landing-soon { display: flex; flex-direction: column; align-items: center; text-align: center; padding: clamp(30px, 5vw, 54px) 20px; }
.dyn-landing-soon-icon { font-size: 40px; opacity: 0.5; margin-bottom: 14px; }
.dyn-landing-soon-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 20px; color: #2B2A4A; margin: 0 0 8px; }
.dyn-landing-soon-desc { font-family: 'Quicksand', sans-serif; font-size: 14px; color: #6B6580; margin: 0; }

.spklab-page {
  width: 100%;
  max-width: 1080px;
  background: linear-gradient(180deg, #EEF3EA 0%, #E4ECDF 100%);
  border-radius: 22px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px);
}
.spklab-hero { text-align: center; max-width: 560px; margin: 0 auto; }
.spklab-eyebrow {
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5A6B4F;
}
.spklab-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 3.6vw, 38px);
  letter-spacing: -0.01em;
  color: #22301B;
  margin: 10px 0 10px;
}
.spklab-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.55;
  color: #4E5C44;
  margin: 0 auto;
}
.spklab-lane { position: relative; height: 2px; background: #C9D4BE; margin: clamp(26px, 3vw, 36px) 0; }
.spklab-lane::before, .spklab-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #8FA37E; }
.spklab-lane::before { left: 0; }
.spklab-lane::after { right: 0; }

.spklab-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(14px, 1.8vw, 22px); }
.spklab-card {
  display: block;
  text-decoration: none;
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(34,48,27,0.12);
  position: relative;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.spklab-card:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(34,48,27,0.18); }
.spklab-banner { display: block; width: 100%; height: auto; }

.spklab-body { padding: 20px 20px 22px; }
.spklab-label { font-family: 'SF Mono', 'Menlo', Consolas, monospace; font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #9AA0A6; margin-bottom: 3px; }
.spklab-gap { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; margin: 0 0 14px; }
.spklab-card--forge .spklab-gap { color: #96631C; }
.spklab-card--shift .spklab-gap { color: #A23A2F; }
.spklab-card--ascend .spklab-gap { color: #1E7261; }
.spklab-name { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(22px, 2.1vw, 26px); color: #161B20; margin: 0 0 8px; }
.spklab-desc { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.5; color: #5C6873; margin: 0 0 16px; }
.spklab-cta {
  display: block; text-align: center; margin-top: 14px;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px;
  color: #FFFFFF; border-radius: 8px; padding: 10px 0;
}
.spklab-card--forge .spklab-cta { background: #E8A33D; }
.spklab-card--shift .spklab-cta { background: #D4453A; }
.spklab-card--ascend .spklab-cta { background: #2E8F7A; }

@media (max-width: 700px) {
  .spklab-grid { grid-template-columns: 1fr; }
}

/* ---------- Articles: The Sentivo Gazette ---------- */
.gaz-page {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #FBFCFE 0%, #F3F5FA 100%);
  border-radius: 22px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px) clamp(30px, 4vw, 52px);
}
.gaz-masthead { text-align: center; padding-bottom: 10px; }
.gaz-masthead-logo { height: 26px; width: auto; display: inline-block; margin-bottom: 9px; }
.gaz-masthead-kicker-row { display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 3px; }
.gaz-masthead-rule { flex: 0 1 64px; height: 1px; background: var(--ink); opacity: 0.4; }
.gaz-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ink);
}
.gaz-masthead-word {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(34px, 4.8vw, 48px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: var(--ink);
  line-height: 1;
  margin: 3px 0 9px;
}
.gaz-masthead-underline { width: clamp(110px, 16%, 170px); height: 3px; background: var(--coral); margin: 0 auto 9px; }
.gaz-masthead-tagline {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0.6;
  margin-bottom: 12px;
}
.gaz-rule-thick { height: 3px; background: var(--ink); margin-bottom: 2px; }
.gaz-rule-thin { height: 1px; background: #D6DAE6; }

.gaz-topics { display: flex; justify-content: center; flex-wrap: wrap; padding: 7px 0; }
.gaz-topic {
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 6px 16px;
  background: none;
  border: none;
  border-right: 1px solid #D6DAE6;
  cursor: pointer;
}
.gaz-topic:hover { color: var(--coral); }
.gaz-topic:last-child { border-right: none; }
.gaz-topic.is-active { color: var(--coral); }
.gaz-empty { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--muted); text-align: center; padding: 30px 0; }

.gaz-lead {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: clamp(26px, 3vw, 42px);
  align-items: center;
  padding: clamp(14px, 1.6vw, 22px) 0 clamp(12px, 1.4vw, 18px);
  border-bottom: 1px solid #D6DAE6;
  cursor: pointer;
  background: none;
  border-left: none; border-right: none; border-top: none;
  text-align: left;
  width: 100%;
}
.gaz-lead-kicker { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: clamp(9.5px, 0.8vw, 11.5px); letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral); margin-bottom: 8px; }
.gaz-lead-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(21px, 2.4vw, 32px); line-height: 1.16; margin: 0 0 10px; color: var(--ink); text-wrap: balance; }
.gaz-lead-dek {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(12.5px, 1.05vw, 15.5px);
  color: var(--ink-soft);
  line-height: 1.45;
  margin: 0 0 12px;
  max-width: 640px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.gaz-lead-meta { display: flex; align-items: center; gap: 7px; font-family: 'Quicksand', sans-serif; font-size: clamp(10.5px, 0.85vw, 12px); color: var(--muted); }
.gaz-byline { font-weight: 700; color: var(--ink-soft); }
.gaz-editions { color: var(--coral); font-weight: 700; }
.gaz-lead-art {
  aspect-ratio: 3 / 2;
  max-height: 260px;
  border-radius: 8px;
  background: linear-gradient(135deg, #DDE1EB 0%, #C7CCDA 100%);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.gaz-lead-art img { width: 100%; height: 100%; object-fit: contain; }
.gaz-lead-art-emoji {
  width: clamp(80px, 9vw, 120px);
  height: clamp(80px, 9vw, 120px);
  border-radius: 50%;
  background: rgba(255,255,255,0.55);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(36px, 4vw, 56px);
}

.gaz-grid { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: clamp(28px, 3.6vw, 52px); row-gap: 8px; }
.gaz-story {
  position: relative;
  display: flex;
  gap: clamp(14px, 1.6vw, 20px);
  padding: clamp(16px, 1.8vw, 22px) 0;
  border-top: 1px solid #D6DAE6;
  background: none;
  border-left: none; border-right: none; border-bottom: none;
  text-align: left;
  cursor: pointer;
  font: inherit;
  color: inherit;
}
.gaz-story:not(:nth-child(2n))::after {
  content: "";
  position: absolute;
  top: 14px; bottom: 14px; right: calc(clamp(28px, 3.6vw, 52px) / -2);
  width: 1px;
  background: #D6DAE6;
}
.gaz-story--soon { cursor: default; opacity: 0.55; }
.gaz-thumb { width: clamp(140px, 15vw, 200px); aspect-ratio: 3 / 2; flex-shrink: 0; align-self: flex-start; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: clamp(26px, 2.6vw, 36px); overflow: hidden; }
.gaz-thumb img { width: 100%; height: 100%; object-fit: contain; }
.gaz-thumb--tech { background: linear-gradient(135deg, rgba(27,42,74,0.16), transparent); }
.gaz-thumb--work { background: linear-gradient(135deg, rgba(90,107,146,0.18), transparent); }
.gaz-thumb--planet { background: linear-gradient(135deg, rgba(255,107,74,0.2), transparent); }
.gaz-thumb--daily { background: linear-gradient(135deg, rgba(224,80,47,0.18), transparent); }
.gaz-thumb--culture { background: linear-gradient(135deg, rgba(27,42,74,0.14), rgba(255,107,74,0.14)); }
.gaz-thumb--law { background: linear-gradient(135deg, rgba(27,42,74,0.26), rgba(90,107,146,0.12)); }
.gaz-story-body { min-width: 0; align-self: center; }
.gaz-story-kicker { font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: clamp(10px, 0.9vw, 11.5px); letter-spacing: 0.07em; text-transform: uppercase; color: var(--coral); margin-bottom: 6px; }
.gaz-story-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.28;
  margin: 0 0 8px;
  color: var(--ink);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.gaz-story-meta { font-family: 'Quicksand', sans-serif; font-size: clamp(10.5px, 0.9vw, 12px); color: var(--muted); }
.gaz-soon { font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; font-size: clamp(8.5px, 0.7vw, 10px); }

/* ---------- Grammar: The Grammar Garden (comic theme) ---------- */
.gdn-page {
  --leaf: #4C9A5D; --leaf-deep: #2E6E3D;
  --gold: #E3A73C; --gold-deep: #96631C;
  --soil: #8A6748; --soil-deep: #5C452F;
  --sky: #3E7CB8; --sky-deep: #275C8C;
  --berry: #C2255C; --berry-deep: #8A1A41;
  --violet: #6247AA; --violet-deep: #453177;
  --teal: #0E7C86; --teal-deep: #0A5B62;
  --coral: #E1592A; --coral-deep: #A73E1B;
  --lime: #6B9E1E; --lime-deep: #4E7414;
  --magenta: #A6238C; --magenta-deep: #781966;
  --navy: #2C4870; --navy-deep: #1C304E;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FFF6E9;
  border: 4px solid #1A1A1A;
  border-radius: 26px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px);
  box-shadow: 9px 9px 0 #1A1A1A;
}
.gdn-masthead { text-align: center; }
.gdn-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6B5B3D;
}
.gdn-badge {
  display: inline-block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: var(--leaf);
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 16px 5px;
  transform: rotate(-3deg);
  margin: 10px 0 8px;
}
.gdn-nameplate {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: clamp(32px, 4.2vw, 46px);
  letter-spacing: 0.4px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1.05;
  text-shadow: 3px 3px 0 var(--gold);
}
.gdn-sub { font-family: 'Comic Neue', cursive, sans-serif; font-weight: 700; font-size: clamp(13px, 1.1vw, 15px); color: #3A3226; margin: 0 auto; max-width: 460px; }
.gdn-row { position: relative; height: 0; border-top: 3px dashed #E4D5B0; margin: clamp(26px, 3vw, 36px) 0; }

.gdn-beds { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: clamp(16px, 2vw, 24px); }
.gdn-bed {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  aspect-ratio: 1 / 1;
  border: 3.5px solid #1A1A1A;
  border-radius: 22px;
  padding: 28px 22px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 7px 7px 0 #1A1A1A;
  transition: transform 0.18s cubic-bezier(.34,1.56,.64,1), box-shadow 0.18s ease;
}
.gdn-bed:hover { transform: translate(-2px, -4px) rotate(-1deg); box-shadow: 9px 11px 0 #1A1A1A; }
.gdn-bed:active { transform: translate(3px, 3px); box-shadow: 4px 4px 0 #1A1A1A; }

.gdn-bed--leaf { background: linear-gradient(155deg, #7BCB8C 0%, var(--leaf) 100%); }
.gdn-bed--gold { background: linear-gradient(155deg, #F3C878 0%, var(--gold) 100%); }
.gdn-bed--soil { background: linear-gradient(155deg, #B1875E 0%, var(--soil) 100%); }
.gdn-bed--sky { background: linear-gradient(155deg, #7FB3E0 0%, var(--sky) 100%); }
.gdn-bed--berry { background: linear-gradient(155deg, #EE7FA3 0%, var(--berry) 100%); }
.gdn-bed--violet { background: linear-gradient(155deg, #A78BFA 0%, var(--violet) 100%); }
.gdn-bed--teal { background: linear-gradient(155deg, #5FC4CC 0%, var(--teal) 100%); }
.gdn-bed--coral { background: linear-gradient(155deg, #F0916A 0%, var(--coral) 100%); }
.gdn-bed--lime { background: linear-gradient(155deg, #A6D14E 0%, var(--lime) 100%); }
.gdn-bed--magenta { background: linear-gradient(155deg, #D66BC0 0%, var(--magenta) 100%); }
.gdn-bed--navy { background: linear-gradient(155deg, #6E88AC 0%, var(--navy) 100%); }

.gdn-bed-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: clamp(22px, 2.6vw, 28px);
  letter-spacing: 0.3px;
  margin: 0;
  color: #FFFFFF;
  line-height: 1.15;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.18);
}
.gdn-bed-cta {
  display: inline-block;
  font-family: 'Comic Neue', cursive, sans-serif; font-size: 13.5px; font-weight: 700;
  color: #1A1A1A; background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 999px; padding: 7px 20px;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.gdn-bed--empty { cursor: default; opacity: 0.7; }
.gdn-bed--empty .gdn-bed-cta { color: #6B5C3E; }

@media (max-width: 900px) {
  .gdn-beds { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 620px) {
  .gdn-beds { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 420px) {
  .gdn-beds { grid-template-columns: 1fr; }
}

/* ---------- Reading: Bookshelf ---------- */
.bkshf-page {
  width: 100%;
  max-width: 1320px;
  margin: -10px auto 0;
  background: linear-gradient(180deg, #FBF5EC 0%, #F3E9D9 100%);
  border-radius: 22px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px) clamp(30px, 4vw, 52px);
}
.bkshf-masthead { text-align: center; }
.bkshf-eyebrow {
  display: block;
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5A6B7B;
  margin-bottom: 10px;
}
.bkshf-nameplate-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 2.4vw, 30px);
  letter-spacing: 0.08em;
  color: #22303B;
  background: rgba(185,133,82,0.18);
  padding: 6px 22px 9px;
  border-radius: 999px;
}
.bkshf-row { position: relative; height: 2px; background: #C7D2DB; margin: clamp(26px, 3vw, 36px) 0; }
.bkshf-row::before, .bkshf-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #92A6B7; }
.bkshf-row::before { left: 0; }
.bkshf-row::after { right: 0; }

.bkshf-level-tabs { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: clamp(18px, 2.4vw, 26px); }
.bkshf-level-tab {
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.04em;
  color: #5A6B7B;
  background: rgba(185,133,82,0.10);
  border: 1.5px solid rgba(185,133,82,0.22);
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.bkshf-level-tab.is-active { background: #22303B; border-color: #22303B; color: #FFFFFF; }

.bkshf-empty { text-align: center; padding: 40px 20px 20px; }
.bkshf-empty-icon { font-size: 34px; display: block; margin-bottom: 10px; }
.bkshf-empty-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 17px; color: #22303B; margin: 0 0 4px; }
.bkshf-empty-desc { font-family: 'Quicksand', sans-serif; font-size: 14px; color: #6B7E8F; margin: 0; }

.bkshf-age-group { margin-bottom: clamp(20px, 2.6vw, 30px); }
.bkshf-age-group:last-child { margin-bottom: 0; }
.bkshf-age-label {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(15px, 1.4vw, 18px);
  color: #22303B;
  text-align: center;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px dashed rgba(90,107,123,0.28);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
}

.bkshf-shelves { padding: 0; }
.bkshf-shelf-group { width: fit-content; margin: 0 auto; }
.bkshf-shelf-row { display: flex; justify-content: center; align-items: flex-end; flex-wrap: nowrap; gap: 18px; }
.bkshf-book {
  position: relative;
  flex: 0 0 auto;
  width: clamp(110px, 19vw, 190px);
  aspect-ratio: 2 / 3;
  border-radius: 7px 7px 3px 3px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(31,36,48,0.10);
  cursor: pointer;
}
.bkshf-book-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.bkshf-book-scrim { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0) 55%); }
.bkshf-book-flat {
  position: relative;
  width: 100%; height: 100%;
  padding: 12px 10px 9px;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.bkshf-book-motif { position: absolute; right: -18px; bottom: -18px; width: 64px; height: 64px; border-radius: 50%; background: var(--motif-color, rgba(0,0,0,0.06)); }
.bkshf-ribbon { position: absolute; top: 0; right: 12px; width: 12px; height: 18px; z-index: 1; clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%); }
.bkshf-book-title {
  position: relative; z-index: 1;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: clamp(11px, 1.1vw, 13.5px);
  margin: 3px 0 0;
  color: var(--ink);
  line-height: 1.25;
  text-align: center;
}
.bkshf-book-title--onimg { position: absolute; z-index: 1; left: 8px; right: 8px; bottom: 7px; margin: 0; font-size: clamp(11px, 1.1vw, 13.5px); color: #FFFFFF; text-align: center; }

.bkshf-shelf-ledge {
  width: calc(100% + 36px);
  height: 9px;
  border-radius: 0 0 3px 3px;
  margin: 0 0 12px -18px;
  background: linear-gradient(180deg, #B98552 0%, #8A5F35 100%);
  box-shadow: 0 6px 9px rgba(74,54,35,0.22);
  position: relative;
}
.bkshf-shelf-ledge::after { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 2px; background: rgba(255,255,255,0.3); }

.cover {
  flex-shrink: 0;
  border-radius: 14px;
  padding: clamp(8px, 1.6vh, 16px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 14px 24px rgba(0,0,0,0.10);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}
.theme-pro .cover { border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06); }

.cover--coral { background: linear-gradient(160deg, #FFD9C7 0%, #FFB199 100%); }
.cover--teal { background: linear-gradient(160deg, #C9F0E2 0%, #8FDDC0 100%); }
.cover--lavender { background: linear-gradient(160deg, #E3DAFF 0%, #C2AEF5 100%); }
.cover--gold { background: linear-gradient(160deg, #FCE7BD 0%, #F3C871 100%); }
.cover--orange { background: linear-gradient(160deg, #FFD3AD 0%, #FF9A56 100%); }
.cover--aqua { background: linear-gradient(160deg, #C7F0F5 0%, #7FD6E3 100%); }
.cover--slate { background: linear-gradient(160deg, #D9E0EC 0%, #A6B4CE 100%); }
.cover--clay { background: linear-gradient(160deg, #F3D6C6 0%, #DE9C77 100%); }
.cover--mint { background: linear-gradient(160deg, #D3F0DE 0%, #93D8AE 100%); }
.cover--sky { background: linear-gradient(160deg, #D6E8FB 0%, #9EC3F0 100%); }
.cover--rose { background: linear-gradient(160deg, #F5D9DE 0%, #DFA0AE 100%); }
.cover--cinnamon { background: linear-gradient(160deg, #EAD2B8 0%, #C6935F 100%); }
.cover--sand { background: linear-gradient(160deg, #F2E6D3 0%, #D9BE93 100%); }
.cover--periwinkle { background: linear-gradient(160deg, #DCE0FB 0%, #ABB4F0 100%); }
.cover--butter { background: linear-gradient(160deg, #FBF1C7 0%, #EDD98A 100%); }
.cover--sage { background: linear-gradient(160deg, #E1EAD9 0%, #B9CDA6 100%); }
.cover--berry { background: linear-gradient(160deg, #FADCE3 0%, #E893A8 100%); }
.cover--orchid { background: linear-gradient(160deg, #EBDCF0 0%, #C9A0D9 100%); }
.cover--ocean { background: linear-gradient(160deg, #C9DDF5 0%, #7FA8E0 100%); }
.cover--honey { background: linear-gradient(160deg, #F7E3B5 0%, #E0B84D 100%); }
.cover--fern { background: linear-gradient(160deg, #DCEBD4 0%, #9FC488 100%); }
.cover--flamingo { background: linear-gradient(160deg, #FCDCE0 0%, #F0899E 100%); }
.cover--lilac { background: linear-gradient(160deg, #EDE0F7 0%, #B98CE0 100%); }
.cover--peach { background: linear-gradient(160deg, #FFE3D1 0%, #FFAE7A 100%); }
.cover--mango { background: linear-gradient(160deg, #FFEEB0 0%, #FFC233 100%); }
.cover--seafoam { background: linear-gradient(160deg, #D6F5EA 0%, #6FD9BB 100%); }
.cover--plum { background: linear-gradient(160deg, #E3CCF0 0%, #A855C9 100%); }
.cover--sunflower { background: linear-gradient(160deg, #FFF3B0 0%, #F0C020 100%); }
.cover--cocoa { background: linear-gradient(160deg, #E8D5C4 0%, #9C7148 100%); }
.cover--blush { background: linear-gradient(160deg, #FCE0E5 0%, #EF9DB0 100%); }
.cover--azure { background: linear-gradient(160deg, #D2E7FB 0%, #6FA8E0 100%); }
.cover--amber { background: linear-gradient(160deg, #FBE3B0 0%, #E8A020 100%); }
.cover--olive { background: linear-gradient(160deg, #E7EAC9 0%, #A6AD5C 100%); }
.cover--denim { background: linear-gradient(160deg, #D6DEEF 0%, #5F7CA8 100%); }
.cover--apricot { background: linear-gradient(160deg, #FFE0C2 0%, #F29B4F 100%); }
.cover--mauve { background: linear-gradient(160deg, #EAD9E5 0%, #B87FA6 100%); }
.cover--pistachio { background: linear-gradient(160deg, #DCEFCB 0%, #8FC46A 100%); }
.cover--terracotta { background: linear-gradient(160deg, #F2D3C0 0%, #C97355 100%); }
.cover--steel { background: linear-gradient(160deg, #DCE3E8 0%, #8FA3B0 100%); }
.cover--ivory { background: linear-gradient(160deg, #F5F0E1 0%, #D8C9A3 100%); }
.cover--cobalt { background: linear-gradient(160deg, #CDDCF7 0%, #5478C9 100%); }
.cover--rust { background: linear-gradient(160deg, #F0D2BE 0%, #B85E38 100%); }
.cover--champagne { background: linear-gradient(160deg, #F7EED9 0%, #DDC48F 100%); }
.cover--juniper { background: linear-gradient(160deg, #D7E9DD 0%, #6FA383 100%); }
.cover--sepia { background: linear-gradient(160deg, #E8DAC6 0%, #A67C4E 100%); }
.cover--wisteria { background: linear-gradient(160deg, #E3DCF2 0%, #9C8AD1 100%); }
.cover--marigold { background: linear-gradient(160deg, #FBE2AE 0%, #E8A324 100%); }
.cover--cream { background: linear-gradient(160deg, #FBF7EC 0%, #E5D9B6 100%); }
.cover--emerald { background: linear-gradient(160deg, #CDEEDA 0%, #34A66B 100%); }
.cover--burgundy { background: linear-gradient(160deg, #EAD0D6 0%, #8C3B4E 100%); }
.cover--turquoise { background: linear-gradient(160deg, #C8F0EC 0%, #2FA79A 100%); }
.cover--charcoal { background: linear-gradient(160deg, #DADCE0 0%, #5A6270 100%); }
.cover--goldenrod { background: linear-gradient(160deg, #F9E7AE 0%, #D8A423 100%); }
.cover--indigo { background: linear-gradient(160deg, #D8D6F5 0%, #5C50B0 100%); }
.cover--papaya { background: linear-gradient(160deg, #FFDCC0 0%, #F0813F 100%); }
.cover--linen { background: linear-gradient(160deg, #F7F1E6 0%, #D9C7A6 100%); }
.cover--cerulean { background: linear-gradient(160deg, #C7E4F5 0%, #2E86C1 100%); }
.cover--mahogany { background: linear-gradient(160deg, #E8C7BC 0%, #7A3B2E 100%); }
.cover--sienna { background: linear-gradient(160deg, #F0CBA8 0%, #A0522D 100%); }
.cover--moss { background: linear-gradient(160deg, #D9E4C0 0%, #6B7F3A 100%); }
.cover--copper { background: linear-gradient(160deg, #F0D3B8 0%, #B5651D 100%); }
.cover--saffron { background: linear-gradient(160deg, #FBE4A0 0%, #E8A317 100%); }
.cover--cerise { background: linear-gradient(160deg, #F5C6D9 0%, #C4185C 100%); }
.cover--taupe { background: linear-gradient(160deg, #E8DFD3 0%, #9C8878 100%); }
.cover--cardinal { background: linear-gradient(160deg, #F2C3C3 0%, #A61C1C 100%); }
.cover--citrine { background: linear-gradient(160deg, #F5E7A0 0%, #C9A227 100%); }
.cover--malachite { background: linear-gradient(160deg, #B8E0C8 0%, #1B7A43 100%); }
.cover--garnet { background: linear-gradient(160deg, #E8B8C0 0%, #7A1F35 100%); }
.cover--quartz { background: linear-gradient(160deg, #EDE6F0 0%, #A78BB5 100%); }
.cover--umber { background: linear-gradient(160deg, #DCC7B0 0%, #6B4A2F 100%); }
.cover--vermilion { background: linear-gradient(160deg, #F5C0A8 0%, #C6391E 100%); }
.cover--jade { background: linear-gradient(160deg, #B8E4D8 0%, #1F8067 100%); }
.cover--onyx { background: linear-gradient(160deg, #B0B0B8 0%, #201F26 100%); }
.cover--topaz { background: linear-gradient(160deg, #FCE4B0 0%, #D98E1E 100%); }
.cover--amethyst { background: linear-gradient(160deg, #DFC7EE 0%, #7C3FA0 100%); }
.cover--obsidian { background: linear-gradient(160deg, #8C8C96 0%, #17161C 100%); }
.cover--alabaster { background: linear-gradient(160deg, #FAF7F0 0%, #D8CFC0 100%); }
.cover--bronze { background: linear-gradient(160deg, #E0C09A 0%, #8C5A28 100%); }
.cover--pewter { background: linear-gradient(160deg, #D4D6D8 0%, #6E7276 100%); }
.cover--cinnabar { background: linear-gradient(160deg, #F5B8A0 0%, #B23A1E 100%); }

.theme-pro .cover--coral { background: #fff; border-top: 4px solid #D85A30; }
.theme-pro .cover--teal { background: #fff; border-top: 4px solid #0F6E56; }
.theme-pro .cover--lavender { background: #fff; border-top: 4px solid #534AB7; }
.theme-pro .cover--gold { background: #fff; border-top: 4px solid #B08D57; }
.theme-pro .cover--orange { background: #fff; border-top: 4px solid #D9722C; }
.theme-pro .cover--aqua { background: #fff; border-top: 4px solid #128A9E; }
.theme-pro .cover--slate { background: #fff; border-top: 4px solid #47597D; }
.theme-pro .cover--clay { background: #fff; border-top: 4px solid #B8623A; }
.theme-pro .cover--mint { background: #fff; border-top: 4px solid #2E9F62; }
.theme-pro .cover--sky { background: #fff; border-top: 4px solid #2E6FB8; }
.theme-pro .cover--rose { background: #fff; border-top: 4px solid #B85C6F; }
.theme-pro .cover--cinnamon { background: #fff; border-top: 4px solid #935E30; }
.theme-pro .cover--sand { background: #fff; border-top: 4px solid #A6813D; }
.theme-pro .cover--periwinkle { background: #fff; border-top: 4px solid #5B63C4; }
.theme-pro .cover--butter { background: #fff; border-top: 4px solid #B89A3A; }
.theme-pro .cover--sage { background: #fff; border-top: 4px solid #5E7D49; }
.theme-pro .cover--berry { background: #fff; border-top: 4px solid #C24F6B; }
.theme-pro .cover--orchid { background: #fff; border-top: 4px solid #9860B5; }
.theme-pro .cover--ocean { background: #fff; border-top: 4px solid #3E6FB0; }
.theme-pro .cover--honey { background: #fff; border-top: 4px solid #B8862E; }
.theme-pro .cover--fern { background: #fff; border-top: 4px solid #5C8A48; }
.theme-pro .cover--flamingo { background: #fff; border-top: 4px solid #D9556F; }
.theme-pro .cover--lilac { background: #fff; border-top: 4px solid #8B4FC7; }
.theme-pro .cover--peach { background: #fff; border-top: 4px solid #E07A3D; }
.theme-pro .cover--mango { background: #fff; border-top: 4px solid #C98A0A; }
.theme-pro .cover--seafoam { background: #fff; border-top: 4px solid #1E9C79; }
.theme-pro .cover--plum { background: #fff; border-top: 4px solid #8A2FAE; }
.theme-pro .cover--sunflower { background: #fff; border-top: 4px solid #B98A00; }
.theme-pro .cover--cocoa { background: #fff; border-top: 4px solid #6B4423; }
.theme-pro .cover--blush { background: #fff; border-top: 4px solid #C2607A; }
.theme-pro .cover--azure { background: #fff; border-top: 4px solid #3576C4; }
.theme-pro .cover--amber { background: #fff; border-top: 4px solid #B87A0E; }
.theme-pro .cover--olive { background: #fff; border-top: 4px solid #7A8138; }
.theme-pro .cover--denim { background: #fff; border-top: 4px solid #3E567F; }
.theme-pro .cover--apricot { background: #fff; border-top: 4px solid #D97A2E; }
.theme-pro .cover--mauve { background: #fff; border-top: 4px solid #935F80; }
.theme-pro .cover--pistachio { background: #fff; border-top: 4px solid #5E9A3E; }
.theme-pro .cover--terracotta { background: #fff; border-top: 4px solid #A6543A; }
.theme-pro .cover--steel { background: #fff; border-top: 4px solid #4E6577; }
.theme-pro .cover--ivory { background: #fff; border-top: 4px solid #A68B4F; }
.theme-pro .cover--cobalt { background: #fff; border-top: 4px solid #2F52A0; }
.theme-pro .cover--rust { background: #fff; border-top: 4px solid #954827; }
.theme-pro .cover--champagne { background: #fff; border-top: 4px solid #B4915A; }
.theme-pro .cover--juniper { background: #fff; border-top: 4px solid #47795C; }
.theme-pro .cover--sepia { background: #fff; border-top: 4px solid #7C5B33; }
.theme-pro .cover--wisteria { background: #fff; border-top: 4px solid #6E5BA8; }
.theme-pro .cover--marigold { background: #fff; border-top: 4px solid #B9800E; }
.theme-pro .cover--cream { background: #fff; border-top: 4px solid #A6935F; }
.theme-pro .cover--emerald { background: #fff; border-top: 4px solid #1F8552; }
.theme-pro .cover--burgundy { background: #fff; border-top: 4px solid #6B2938; }
.theme-pro .cover--turquoise { background: #fff; border-top: 4px solid #1F8479; }
.theme-pro .cover--charcoal { background: #fff; border-top: 4px solid #414753; }
.theme-pro .cover--goldenrod { background: #fff; border-top: 4px solid #A6820E; }
.theme-pro .cover--indigo { background: #fff; border-top: 4px solid #453A8F; }
.theme-pro .cover--papaya { background: #fff; border-top: 4px solid #C4611F; }
.theme-pro .cover--linen { background: #fff; border-top: 4px solid #A68B5C; }
.theme-pro .cover--cerulean { background: #fff; border-top: 4px solid #1F618D; }
.theme-pro .cover--mahogany { background: #fff; border-top: 4px solid #5C2C22; }
.theme-pro .cover--sienna { background: #fff; border-top: 4px solid #7C3F1F; }
.theme-pro .cover--moss { background: #fff; border-top: 4px solid #4E5C2A; }
.theme-pro .cover--copper { background: #fff; border-top: 4px solid #8C4C15; }
.theme-pro .cover--saffron { background: #fff; border-top: 4px solid #B37F10; }
.theme-pro .cover--cerise { background: #fff; border-top: 4px solid #93123F; }
.theme-pro .cover--taupe { background: #fff; border-top: 4px solid #756454; }
.theme-pro .cover--cardinal { background: #fff; border-top: 4px solid #8A1717; }
.theme-pro .cover--citrine { background: #fff; border-top: 4px solid #9C7E1E; }
.theme-pro .cover--malachite { background: #fff; border-top: 4px solid #145C33; }
.theme-pro .cover--garnet { background: #fff; border-top: 4px solid #5F1729; }
.theme-pro .cover--quartz { background: #fff; border-top: 4px solid #7E6690; }
.theme-pro .cover--umber { background: #fff; border-top: 4px solid #543A25; }
.theme-pro .cover--vermilion { background: #fff; border-top: 4px solid #9E2E17; }
.theme-pro .cover--jade { background: #fff; border-top: 4px solid #196651; }
.theme-pro .cover--onyx { background: #fff; border-top: 4px solid #201F26; }
.theme-pro .cover--topaz { background: #fff; border-top: 4px solid #B37619; }
.theme-pro .cover--amethyst { background: #fff; border-top: 4px solid #632F80; }
.theme-pro .cover--obsidian { background: #fff; border-top: 4px solid #17161C; }
.theme-pro .cover--alabaster { background: #fff; border-top: 4px solid #A69880; }
.theme-pro .cover--bronze { background: #fff; border-top: 4px solid #714822; }
.theme-pro .cover--pewter { background: #fff; border-top: 4px solid #575B5E; }
.theme-pro .cover--cinnabar { background: #fff; border-top: 4px solid #8F2C17; }

.premium-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.85);
  font-family: 'Quicksand', sans-serif;
  font-size: 8.5px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 999px;
  color: #6B4A2A;
}
.theme-pro .premium-badge { font-family: 'Inter', sans-serif; border-radius: 3px; background: #F0EBDD; color: #8A6A3A; }

.cover-motif { flex-grow: 1; display: flex; align-items: center; justify-content: center; }
.motif-svg { width: 100%; height: clamp(26px, 6vh, 56px); }
.motif-word { font-family: 'Fredoka', sans-serif; font-size: 13px; }
.theme-pro .motif-word { font-family: 'Source Serif 4', serif; font-weight: 600; }
.motif-word--dim { opacity: 0.4; fill: currentColor; }
.motif-word--bold { font-weight: 700; fill: currentColor; }
.motif-dot { fill: currentColor; opacity: 0.5; }
.motif-line { stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; opacity: 0.75; }
.motif-line--dim { opacity: 0.35; }
.motif-node { fill: currentColor; }

.cover-text h3 {
  font-family: 'Fredoka', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  color: #2B2330;
}
.theme-pro .cover-text h3 { font-family: 'Source Serif 4', serif; font-weight: 700; color: #1B2A4A; }
.cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-size: 9.5px;
  font-weight: 600;
  opacity: 0.65;
  color: #2B2330;
}
.theme-pro .cover-sub { font-family: 'Inter', sans-serif; color: #1B2A4A; }

.cover-footer { margin-top: 6px; }
.cover-level {
  font-family: 'Quicksand', sans-serif;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  background: rgba(255,255,255,0.6);
  padding: 3px 6px;
  border-radius: 999px;
  color: #2B2330;
}
.theme-pro .cover-level { font-family: 'Inter', sans-serif; background: #F0EBDD; border-radius: 3px; color: #6B5B45; }

/* Redesigned covers (Alphabet, Stress & Meaning, Minimal Pairs for now) */
.theme-pro .cover--redesigned {
  background: #FFFFFF !important;
  border: 1px solid #DEDAD0;
}

/* Story cards: a distinct "book" thumbnail, not a tool-deck card --
   the cover photo fills the whole card, so no extra background needed. */
.theme-pro .cover--story { border: 1px solid #DEDAD0; }

/* FORGE track cards: same full-bleed photo treatment as story cards, but
   tagged with an amber top border to read as Speaking, not Reading. */
.cover--forge-track { background: #1B1C22; }
.theme-pro .cover--forge-track { border: 1px solid #DEDAD0; border-top: 3px solid #F2A65A; }

/* Full-bleed cover art, ignoring the card's own padding, with the
   title stamped over the bottom like a real book jacket. */
.story-card-content { position: absolute; inset: 0; overflow: hidden; }
.story-card-cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
.story-card-cover-ph { position: absolute; inset: 0; }
.story-card-scrim {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48%;
  background: linear-gradient(to top, rgba(20,15,10,0.85) 0%, rgba(20,15,10,0.4) 60%, rgba(20,15,10,0) 100%);
}
.story-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.85);
  font-family: 'Quicksand', sans-serif;
  font-size: 8.5px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 3px 7px;
  border-radius: 999px;
  color: #8A3A1F;
}
.theme-pro .story-badge { font-family: 'Inter', sans-serif; border-radius: 3px; background: #F0EBDD; color: #8A6A3A; }
.story-card-text { position: absolute; left: 14px; right: 14px; bottom: 12px; text-align: left; }
.story-card-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(13px, 1.8vw, 18px);
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.45);
  margin: 0;
}
.theme-pro .story-card-title { font-family: 'Source Serif 4', serif; }
.story-card-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  color: rgba(255,255,255,0.85);
  text-shadow: 0 1px 4px rgba(0,0,0,0.4);
}

.bespoke-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bespoke-icon-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}
.bespoke-icon { width: 56%; height: auto; color: #1B2A4A; }

.bespoke-tagline {
  font-family: 'Baloo 2', sans-serif;
  font-size: clamp(11px, 1.6vw, 16px);
  font-weight: 700;
  text-align: center;
  color: #2B2330;
}
.theme-pro .bespoke-tagline { font-family: 'Source Serif 4', serif; color: #1B2A4A; font-weight: 600; }

.bespoke-divider { width: 78%; height: 1px; background: rgba(0,0,0,0.12); }

.bespoke-label {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(7px, 1vw, 10px);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  color: #6B5B95;
  opacity: 0.85;
}
.theme-pro .bespoke-label { font-family: 'Inter', sans-serif; color: #7A7666; }

/* Fun-theme illustrated icon colors */
.bespoke-shadow { fill: #000000; opacity: 0.1; }
.bespoke-apple-body { fill: #D5483C; }
.bespoke-apple-shine { fill: #FFFFFF; opacity: 0.22; }
.bespoke-apple-stem { stroke: #7A4A2C; stroke-width: 3; fill: none; stroke-linecap: round; }
.bespoke-apple-leaf { fill: #5C8A3A; }
.bespoke-bubble { fill: #FFFDF9; }
.bespoke-bars rect { fill: #C2452F; }
.bespoke-headphones path, .bespoke-headphones rect { stroke: #0E6F52; }
.bespoke-headphones rect { fill: #0E6F52; }
.bespoke-book-left { fill: #D85A30; }
.bespoke-book-right { fill: #E8734F; }
.bespoke-book-spine { stroke: #8A3A1F; stroke-width: 2; fill: none; }
.bespoke-book-lines { stroke: #FFFFFF; stroke-width: 1.4; stroke-linecap: round; opacity: 0.55; fill: none; }

.pagination { display: flex; align-items: center; justify-content: center; gap: 18px; flex-shrink: 0; }
.pagination button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: white;
  cursor: pointer;
  color: inherit;
}
.theme-pro .pagination button { font-family: 'Inter', sans-serif; border-radius: 4px; border: 1px solid #DEDAD0; }
.pagination button:disabled { opacity: 0.35; cursor: default; }
.page-indicator { font-family: 'Quicksand', sans-serif; font-size: 12.5px; opacity: 0.6; }
.theme-pro .page-indicator { font-family: 'Inter', sans-serif; }

`;
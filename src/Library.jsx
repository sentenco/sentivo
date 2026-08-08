import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { supabase } from "./supabaseClient";
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
import todayHeroImg from "./assets/today/greeting-bg.jpg";
import todaySalaryIcon from "./assets/today/icon-salary.jpg";
import todayWheelIcon from "./assets/today/icon-wheel.jpg";
import todayNotebookIcon from "./assets/today/icon-notebook.jpg";
import todayDeckIcon from "./assets/today/icon-deck.jpg";
import todayQuoteBanner from "./assets/today/quote-banner.jpg";
import DAILY_CORRECTIONS from "./dailyCorrections";
import { ARTICLES, ARTICLE_TOPICS } from "./articlesData";
import VocabularyGames from "./VocabularyGames";
import WritingActivities from "./WritingActivities";

const CATEGORIES = ["Articles", "Speaking", "Reading", "Grammar", "Vocabulary", "Writing", "Listening"];

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

const CATEGORY_HUE = {
  Reading: "teal", Writing: "teal",
  Grammar: "gold", Vocabulary: "gold",
  Listening: "coral", Speaking: "coral",
};
const CATEGORY_ICON = {
  Reading: "📖", Grammar: "🔤", Vocabulary: "📚",
  Writing: "✍️", Listening: "🎧", Speaking: "🗣️",
};

function CorrectionLine({ segments }) {
  return segments.map((seg, i) => {
    if ("wrong" in seg) return <span key={i} className="corr-wrong">{seg.wrong}</span>;
    if ("right" in seg) return <span key={i} className="corr-right">{seg.right}</span>;
    return <React.Fragment key={i}>{seg.text}</React.Fragment>;
  });
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

function MiniCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = today.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="gc-calendar">
      <div className="gc-cal-month">{monthLabel}</div>
      <div className="gc-cal-grid gc-cal-grid--head">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div className="gc-cal-grid">
        {cells.map((d, i) => (
          <span key={i} className={`gc-cal-cell ${d === today.getDate() ? "is-today" : ""} ${d ? "" : "is-empty"}`}>
            {d || ""}
          </span>
        ))}
      </div>
    </div>
  );
}

function WordLookup() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [result, setResult] = useState(null);
  const requestId = useRef(0);

  async function lookup(e) {
    e.preventDefault();
    const word = query.trim();
    if (!word) return;
    const id = ++requestId.current;
    setStatus("loading");
    setResult(null);
    try {
      const res = await fetch("/api/dictionary-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });
      if (id !== requestId.current) return;
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.meanings?.length) throw new Error("not found");
      setResult({ word: data.word || word, meanings: data.meanings });
      setStatus("done");
    } catch {
      if (id !== requestId.current) return;
      setStatus("error");
    }
  }

  return (
    <div className="td-util-card">
      <div className="td-util-head">
        <span className="td-util-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        </span>
        <span className="td-util-title">Dictionary</span>
      </div>
      <form className="td-lookup-form" onSubmit={lookup}>
        <input
          className="td-lookup-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word…"
        />
        <button type="submit" className="td-lookup-btn" aria-label="Search" disabled={status === "loading"}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </form>
      {status === "loading" && <div className="td-lookup-status">Looking up…</div>}
      {status === "error" && <div className="td-lookup-status td-lookup-status--error">No results for "{query.trim()}"</div>}
      {status === "done" && result && (
        <div className="td-lookup-result">
          <div className="td-lookup-word">{result.word}</div>
          {result.meanings.map((m, i) => (
            <div className="td-lookup-meaning" key={i}>
              <span className="td-lookup-pos">{m.pos}</span>
              {m.def && <span className="td-lookup-def">{m.def}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GrammarChecker() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [corrections, setCorrections] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const requestId = useRef(0);

  async function check(e) {
    e.preventDefault();
    const input = text.trim();
    if (!input) return;
    const id = ++requestId.current;
    setStatus("loading");
    setCorrections(null);
    setErrorMsg("");
    try {
      const res = await fetch("/api/grammar-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      if (id !== requestId.current) return;
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setCorrections(Array.isArray(data?.corrections) ? data.corrections : []);
      setStatus("done");
    } catch (err) {
      if (id !== requestId.current) return;
      setErrorMsg(err.message || "Couldn't check that text. Try again.");
      setStatus("error");
    }
  }

  return (
    <div className="td-util-card">
      <div className="td-util-head">
        <span className="td-util-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 2 4 4-13 13H5v-4Z" /></svg>
        </span>
        <span className="td-util-title">Grammar Checker</span>
      </div>
      <form className="td-grammar-form" onSubmit={check}>
        <textarea
          className="td-grammar-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste a sentence or paragraph to check…"
          rows={3}
        />
        <div className="td-grammar-foot">
          <button type="submit" className="td-grammar-btn" disabled={status === "loading" || !text.trim()}>
            {status === "loading" ? "Checking…" : "Check grammar"}
          </button>
        </div>
      </form>
      {status === "error" && <div className="td-lookup-status td-lookup-status--error">{errorMsg}</div>}
      {status === "done" && corrections && (
        corrections.length === 0 ? (
          <div className="td-grammar-clean">No issues found — looks good.</div>
        ) : (
          <div className="td-grammar-results">
            {corrections.map((c, i) => (
              <div className="td-grammar-item" key={i}>
                <div className="td-grammar-diff">
                  <span className="td-grammar-wrong">{c.original}</span>
                  <span className="td-grammar-arrow">→</span>
                  <span className="td-grammar-right">{c.corrected}</span>
                </div>
                {c.explanation && <p className="td-grammar-explain">{c.explanation}</p>}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

function TodayHero() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("sentivo_teacher_name") || "";
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("sentivo_teacher_name", name);
  }, [name]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const h12 = ((hour + 11) % 12) + 1;
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";
  const dateLabel = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });

  function startEditing() {
    setDraft(name);
    setEditing(true);
  }
  function save() {
    setName(draft.trim());
    setEditing(false);
  }

  return (
    <div className="td-hero">
      <img className="td-hero-bg" src={todayHeroImg} alt="" />
      <div className="td-hero-left">
        <h1 className="td-hero-title">
          {editing ? (
            <span className="td-hero-editing">
              {greeting}, Teacher{" "}
              <input
                autoFocus
                className="td-hero-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={save}
                onKeyDown={(e) => {
                  if (e.key === "Enter") save();
                  if (e.key === "Escape") { setDraft(name); setEditing(false); }
                }}
                placeholder="your name"
              />
            </span>
          ) : (
            <button type="button" className="td-hero-btn" onClick={startEditing} title="Click to edit your name">
              {greeting}, <span className="who">{name ? `Teacher ${name}` : "Teacher"}</span>
            </button>
          )}
        </h1>
        <p className="td-hero-sub">Let's make today a great teaching day.</p>
        <div className="td-chip-row">
          <span className="td-chip">
            <span className="td-chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg></span>
            {dateLabel}
          </span>
          <span className="td-chip">
            <span className="td-chip-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
            {h12}:{mm} {ampm}
          </span>
        </div>
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

function ArticlesFeature({ navigate }) {
  const [activeTopic, setActiveTopic] = useState("All");
  const filtered = activeTopic === "All" ? ARTICLES : ARTICLES.filter((a) => a.topicLabel === activeTopic);
  const lead = filtered.length
    ? filtered.reduce((newest, a) => (!newest || new Date(a.publishedAt) > new Date(newest.publishedAt) ? a : newest), null)
    : null;
  const briefs = filtered.filter((a) => a !== lead);
  const dateline = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="gaz-page">
      <div className="gaz-masthead">
        <span className="gaz-eyebrow">Sentivo · Articles</span>
        <h1 className="gaz-nameplate">The Sentivo Gazette</h1>
        <div className="gaz-dateline">{dateline}</div>
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
        <p className="gaz-empty">No articles in this category yet — check back soon.</p>
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

function GrammarBanner({ name }) {
  const banners = {
    // Parts of Speech: labeled plant markers in a bed — every word gets
    // tagged with what kind of word it is.
    partsOfSpeech: (
      <>
        <defs>
          <linearGradient id="gdnb-pos-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EBF5EC" />
            <stop offset="1" stopColor="#D5EAD8" />
          </linearGradient>
          <linearGradient id="gdnb-pos-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9E7A54" />
            <stop offset="1" stopColor="#6B4E32" />
          </linearGradient>
          <filter id="gdnb-pos-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#2E6E3D" floodOpacity="0.2" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#gdnb-pos-bg)" />
        <rect x="0" y="112" width="320" height="28" fill="url(#gdnb-pos-soil)" />
        <g filter="url(#gdnb-pos-shadow)">
          <rect x="95" y="86" width="8" height="30" rx="3" fill="#E3A73C" />
          <rect x="86" y="72" width="26" height="16" rx="4" fill="#FFFFFF" />
          <rect x="155" y="76" width="8" height="40" rx="3" fill="#4C9A5D" />
          <rect x="144" y="58" width="30" height="18" rx="4" fill="#FFFFFF" />
          <rect x="219" y="92" width="8" height="24" rx="3" fill="#D4453A" />
          <rect x="209" y="78" width="28" height="16" rx="4" fill="#FFFFFF" />
        </g>
        <circle cx="99" cy="80" r="3" fill="#E3A73C" />
        <circle cx="159" cy="66" r="3" fill="#4C9A5D" />
        <circle cx="223" cy="86" r="3" fill="#D4453A" />
        <path d="M60 112 Q60 96 74 92" fill="none" stroke="#4C9A5D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="74" cy="90" r="7" fill="#6EBB80" />
        <path d="M260 112 Q260 92 248 86" fill="none" stroke="#4C9A5D" strokeWidth="3" strokeLinecap="round" />
        <circle cx="248" cy="84" r="7" fill="#6EBB80" />
      </>
    ),
    // Verb Tenses: the same plant across three growth stages, past to
    // future, tracing one arc through time.
    verbTenses: (
      <>
        <defs>
          <linearGradient id="gdnb-vt-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FBF3E1" />
            <stop offset="1" stopColor="#F5E3BC" />
          </linearGradient>
          <linearGradient id="gdnb-vt-soil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9E7A54" />
            <stop offset="1" stopColor="#6B4E32" />
          </linearGradient>
          <filter id="gdnb-vt-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#96631C" floodOpacity="0.2" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#gdnb-vt-bg)" />
        <path d="M60 46 Q160 -6 260 46" fill="none" stroke="#E3A73C" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" />
        <circle cx="260" cy="46" r="12" fill="#FFC55C" />
        <rect x="0" y="112" width="320" height="28" fill="url(#gdnb-vt-soil)" />
        <g filter="url(#gdnb-vt-shadow)">
          <rect x="72" y="104" width="6" height="10" fill="#5C8A63" />
          <circle cx="75" cy="100" r="7" fill="#7FBF8C" />
          <rect x="156" y="90" width="7" height="24" fill="#4C9A5D" />
          <path d="M159 90 Q145 82 148 68 Q159 72 159 90 Z" fill="#4C9A5D" />
          <path d="M159 90 Q173 82 170 68 Q159 72 159 90 Z" fill="#5CAE6C" />
          <rect x="238" y="70" width="8" height="44" fill="#2E6E3D" />
          <path d="M242 70 Q222 60 226 40 Q242 46 242 70 Z" fill="#2E6E3D" />
          <path d="M242 70 Q262 60 258 40 Q242 46 242 70 Z" fill="#4C9A5D" />
          <circle cx="242" cy="38" r="9" fill="#FFFFFF" />
          <circle cx="242" cy="38" r="4" fill="#E3A73C" />
        </g>
      </>
    ),
    // Sentence Structure: a lattice trellis holding up a climbing vine —
    // clauses supported by a shared frame.
    sentenceStructure: (
      <>
        <defs>
          <linearGradient id="gdnb-ss-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F2ECE0" />
            <stop offset="1" stopColor="#E4D6BF" />
          </linearGradient>
          <filter id="gdnb-ss-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#5C452F" floodOpacity="0.2" />
          </filter>
        </defs>
        <rect width="320" height="140" fill="url(#gdnb-ss-bg)" />
        <rect x="0" y="120" width="320" height="20" fill="#8A6748" />
        <g filter="url(#gdnb-ss-shadow)" stroke="#8A6748" strokeWidth="7" strokeLinecap="round">
          <line x1="120" y1="18" x2="120" y2="122" />
          <line x1="200" y1="18" x2="200" y2="122" />
          <line x1="90" y1="42" x2="230" y2="42" />
          <line x1="90" y1="82" x2="230" y2="82" />
        </g>
        <path d="M120 122 C110 90 130 70 120 42 C112 20 128 10 130 4" fill="none" stroke="#4C9A5D" strokeWidth="4" strokeLinecap="round" />
        <circle cx="126" cy="98" r="8" fill="#6EBB80" />
        <circle cx="116" cy="60" r="8" fill="#5CAE6C" />
        <circle cx="128" cy="24" r="9" fill="#7FBF8C" />
        <circle cx="200" cy="70" r="7" fill="#4C9A5D" opacity="0.7" />
      </>
    ),
  };
  return (
    <svg className="gdn-bed-banner" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
      {banners[name] || <rect width="320" height="140" fill="#EDE7D9" />}
    </svg>
  );
}

const GRAMMAR_MODULES = [
  { num: "BED 01", banner: "partsOfSpeech", title: "Parts of Speech", spec: "8 word classes across 6 topics. One Lesson, one Assessment each. A1–C2.", href: "/library/grammar/parts-of-speech", ready: true, hue: "leaf" },
  { num: "BED 02", banner: "verbTenses", title: "Verb Tenses", spec: "All 12 English tenses. One Discussion, one Test lesson each. A1–C2.", href: "/library/grammar/verb-tenses", ready: true, hue: "gold" },
  { num: "BED 03", banner: "sentenceStructure", title: "Sentence Patterns", spec: "The 7 core patterns — SV to SVOC — across 6 lessons, each with practice and a built-in assessment. A1–C2.", href: "/library/grammar/sentence-patterns", ready: true, hue: "soil" },
];
const GRAMMAR_PER_PAGE = 8;

function GrammarFeature({ navigate }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(GRAMMAR_MODULES.length / GRAMMAR_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = GRAMMAR_MODULES.slice((safePage - 1) * GRAMMAR_PER_PAGE, safePage * GRAMMAR_PER_PAGE);

  return (
    <div className="gdn-page">
      <div className="gdn-masthead">
        <span className="gdn-eyebrow">Sentivo · Grammar</span>
        <h1 className="gdn-nameplate"><span className="gdn-nameplate-pill">🌱 The Grammar Garden</span></h1>
        <p className="gdn-sub">Language grows from the roots up — plant a rule, watch a sentence bloom.</p>
      </div>
      <div className="gdn-row"></div>

      <div className="gdn-beds">
        {pageItems.map((m) =>
          m.ready ? (
            <a
              key={m.num}
              href={m.href}
              className={`gdn-bed gdn-bed--${m.hue}`}
              onClick={(e) => { e.preventDefault(); navigate(m.href); }}
            >
              <GrammarBanner name={m.banner} />
              <div className="gdn-bed-body">
                <h3 className="gdn-bed-title">{m.title}</h3>
                <p className="gdn-bed-spec">{m.spec}</p>
                <span className="gdn-bed-cta">Tend this bed →</span>
              </div>
            </a>
          ) : (
            <div key={m.num} className={`gdn-bed gdn-bed--${m.hue} gdn-bed--empty`}>
              <GrammarBanner name={m.banner} />
              <div className="gdn-bed-body">
                <h3 className="gdn-bed-title">{m.title}</h3>
                <p className="gdn-bed-spec">{m.spec}</p>
                <span className="gdn-bed-cta">Coming soon</span>
              </div>
            </div>
          )
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={safePage === 1} onClick={() => setPage(safePage - 1)}>&larr; Prev</button>
          <span className="page-indicator">Page {safePage} of {totalPages}</span>
          <button disabled={safePage === totalPages} onClick={() => setPage(safePage + 1)}>Next &rarr;</button>
        </div>
      )}
    </div>
  );
}

const BOOK_MOTIF_COLORS = ["#E8A33D", "#16BFAE", "#7C5CFC", "#4C7FE0", "#E0637A", "#E89E2E", "#0F9E90", "#A9754D"];

// Age track per book -- local lookup since the Supabase "tools" row only
// carries CEFR level, not age. Books 1-6 are the Teens-narrator series
// (school friends), Books 7-12 are the Adults-narrator series (office,
// shop, health, free time, food). No Kids-track story exists yet.
const BOOK_AGE_TRACK = {
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
const READING_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const READING_AGE_TRACKS = ["Kids", "Teens", "Adults"];

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

function BookshelfFeature({ items, navigate }) {
  const [level, setLevel] = useState("A1");
  const levelItems = items.filter((c) => (c.level || "A1") === level);
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

      <div className="bkshf-row"></div>

      {groups.length === 0 ? (
        <div className="bkshf-empty">
          <span className="bkshf-empty-icon">📚</span>
          <p className="bkshf-empty-title">No {level} stories yet</p>
          <p className="bkshf-empty-desc">Check back soon -- more levels are on the way.</p>
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

function TodayFeature({ tools, navigate }) {
  const today = new Date();
  const dayIndex = daysSince(today);
  const total = DAILY_CORRECTIONS.length;
  const headlineIdx = ((dayIndex % total) + total) % total;
  const headline = DAILY_CORRECTIONS[headlineIdx];
  const briefIdxs = pickDeterministic(total, headlineIdx, 2);
  const briefs = briefIdxs.map((i) => DAILY_CORRECTIONS[i]);

  const recommended = tools.length
    ? pickDeterministic(tools.length, dayIndex, Math.min(3, tools.length)).map((i) => tools[i])
    : [];

  return (
    <div className="gc-dashboard">
      <div className="td-body">
      <div className="td-main">
        <TodayHero />

        <div className="td-correction-card">
          <div className="td-dc-label">Daily Correction</div>
          <h2 className="td-dc-headline">
            <span className="td-dc-quote">&#10078;</span>
            <CorrectionLine segments={headline.sentence} />
          </h2>
          {headline.explain.map((line, i) => (
            <p className="td-dc-explain" key={i}>{line}</p>
          ))}
        </div>

        <div className="td-briefs">
          {briefs.map((b) => (
            <div className={`td-brief-card hue-${b.hue === "grammar" ? "coral" : b.hue === "vocab" ? "gold" : "teal"}`} key={b.id}>
              <div className="td-brief-label">{b.category}</div>
              <p className="td-brief-line"><CorrectionLine segments={b.sentence} /></p>
              <div className="td-brief-pop">
                {b.explain.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>

        <div className="td-section-label">Your Toolkit</div>
        <div className="td-actions-grid">
          <div className="td-action-card is-soon">
            <div className="td-action-icon"><img src={todaySalaryIcon} alt="" /></div>
            <div className="td-action-title">Salary Tracker</div>
          </div>
          <button type="button" className="td-action-card" onClick={openWheel}>
            <div className="td-action-icon"><img src={todayWheelIcon} alt="" /></div>
            <div className="td-action-title">Spin the Wheel</div>
          </button>
          <button type="button" className="td-action-card" onClick={() => navigate("/library/notebook")}>
            <div className="td-action-icon"><img src={todayNotebookIcon} alt="" /></div>
            <div className="td-action-title">Digital Notebook</div>
          </button>
          <button type="button" className="td-action-card" onClick={() => navigate("/library/slides")}>
            <div className="td-action-icon"><img src={todayDeckIcon} alt="" /></div>
            <div className="td-action-title">Slide Builder</div>
          </button>
        </div>

        <div className="td-util-row">
          <GrammarChecker />
          <WordLookup />
        </div>

        {recommended.length > 0 && (
          <div className="gc-reclessons">
            <div className="gc-rl-head">
              <span className="gc-rl-title">Recommended Lessons</span>
            </div>
            <div className="gc-rl-grid">
              {recommended.map((t) => {
                const href = t.content_type === "forge-track" ? `/library/forge/${t.id}` : `/library/${t.id}`;
                const hue = CATEGORY_HUE[t.category] || "gold";
                return (
                  <a href={href} className={`gc-rl-card hue-${hue}`} key={t.id}>
                    <span className="gc-rl-icon">{CATEGORY_ICON[t.category] || "📘"}</span>
                    <span className="gc-rl-name">{t.title}</span>
                    <span className="gc-rl-meta">
                      {t.access === "premium" && <span className="prem">Premium · </span>}
                      {t.level ? `${t.level} · ` : ""}{t.category}
                    </span>
                    <span className="gc-rl-cta">Open lesson <span className="arr">→</span></span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <div className="td-quote-banner">
          <img src={todayQuoteBanner} alt="Every lesson is a chance to make a difference." />
        </div>
      </div>

      <aside className="gc-sidebar">
        <div className="gc-widget gc-widget--clock">
          <DigitalClock />
        </div>
        <div className="gc-widget gc-widget--calendar">
          <MiniCalendar />
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

export default function Library() {
  const isPro = true;
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(() => searchParams.get("cat") || "All");
  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);
  const [query, setQuery] = useState("");
  const [showAllToday, setShowAllToday] = useState(false);
  const { user, signOut } = useAuth();
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
            <label className="gc-search">
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <circle cx="9" cy="9" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <line x1="13.6" y1="13.6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search the library…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                  if (isCurriculum) goToSidebar("library");
                }}
              />
            </label>
            {!user ? (
              <>
                <button className="gc-btn" onClick={() => setAuthMode("login")}>Log in</button>
                <button className="gc-btn primary" onClick={() => setAuthMode("signup")}>Sign up</button>
              </>
            ) : (
              <div className="account-wrap">
                <button className="avatar-btn" onClick={() => setMenuOpen((m) => !m)} aria-label="Account menu">
                  <UserIcon />
                </button>
                {menuOpen && (
                  <div className="account-menu">
                    <a href="#settings">Account settings</a>
                    <a href="#plan">Plan: Free &mdash; Upgrade</a>
                    <a href="mailto:hello@sentivo.com">Help &amp; Support</a>
                    <button className="logout-btn" onClick={() => { signOut(); setMenuOpen(false); }}>Log out</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="gc-sections">
          <button
            className={`gc-sec-tab ${!isCurriculum && category === "All" ? "is-active" : ""}`}
            onClick={() => changeCategory("All")}
          >
            Today
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
          <CurriculumRouter
            isPro={isPro}
            level={curriculumLevel}
            track={curriculumTrack}
          />
        </div>
      ) : (
      <main className={`content ${category === "Articles" ? "content--wide" : ""}`}>
                <div className={`grid-wrap ${category === "All" && !query.trim() && !showAllToday ? "grid-wrap--today" : (category === "Articles" || category === "Grammar" || category === "Reading" || category === "Speaking" || category === "Vocabulary" || category === "Writing" || category === "Listening") ? "grid-wrap--top" : ""}`} ref={gridWrapRef}>
        {category === "All" && !query.trim() && !showAllToday ? (
          toolsLoading ? (
            <p className="empty-msg">Loading today's edition…</p>
          ) : (
            <TodayFeature tools={tools} onSeeAllLessons={() => setShowAllToday(true)} navigate={navigate} />
          )
        ) : category === "Articles" ? (
          <ArticlesFeature navigate={navigate} />
        ) : category === "Grammar" ? (
          <GrammarFeature navigate={navigate} />
        ) : category === "Reading" ? (
          <BookshelfFeature items={filtered} navigate={navigate} />
        ) : category === "Speaking" ? (
          <div className="spklab-page">
            <div className="spklab-hero">
              <span className="spklab-eyebrow">Sentivo · Speaking</span>
              <h1 className="spklab-title">Diagnose the gap. Prescribe the track.</h1>
              <p className="spklab-sub">Every Speaking course is built around one identified gap, not a general level.</p>
            </div>
            <div className="spklab-lane"></div>
            <div className="spklab-grid">
              <a href="/library/forge" className="spklab-card spklab-card--forge">
                <SpeakingBanner name="forge" />
                <div className="spklab-body">
                  <div className="spklab-label">Gap identified</div>
                  <p className="spklab-gap">Thin working vocabulary</p>
                  <h3 className="spklab-name">Forge</h3>
                  <p className="spklab-desc">Build real vocabulary through pictures, gaps, echoes, and question chains.</p>
                  <span className="spklab-cta">Open Forge →</span>
                </div>
              </a>
              <a href="/library/shift" className="spklab-card spklab-card--shift">
                <SpeakingBanner name="shift" />
                <div className="spklab-body">
                  <div className="spklab-label">Gap identified</div>
                  <p className="spklab-gap">Slow tense self-repair</p>
                  <h3 className="spklab-name">Shift</h3>
                  <p className="spklab-desc">Fast tense choice and self-repair under pressure, for students who already know the grammar.</p>
                  <span className="spklab-cta">Open Shift →</span>
                </div>
              </a>
              <a href="/library/ascend" className="spklab-card spklab-card--ascend">
                <SpeakingBanner name="ascend" />
                <div className="spklab-body">
                  <div className="spklab-label">Gap identified</div>
                  <p className="spklab-gap">Imprecise, unstructured speech</p>
                  <h3 className="spklab-name">Ascend</h3>
                  <p className="spklab-desc">Precision, structure, and diplomatic control for students who already sound fluent.</p>
                  <span className="spklab-cta">Open Ascend →</span>
                </div>
              </a>
            </div>
          </div>
        ) : category === "Vocabulary" ? (
          <VocabularyGames />
        ) : category === "Writing" ? (
          <div className="dyn-landing dyn-landing--writing">
            <div className="dyn-landing-hero">
              <span className="dyn-landing-eyebrow">Sentivo · Writing</span>
              <h1><span className="dyn-landing-pill">✍️ Writing Desk</span></h1>
            </div>
            <div className="dyn-landing-row"></div>
            <WritingActivities />
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
    </>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600;700;800&display=swap');

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
.gc-search { display: flex; align-items: center; gap: 6px; padding: 7px 12px; border: 1px solid rgba(34,58,51,0.3); border-radius: 999px; background: var(--card); color: var(--muted); }
.gc-search svg { width: 14px; height: 14px; flex-shrink: 0; }
.gc-search input { border: none; background: transparent; outline: none; font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--ink); width: 170px; }
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

.gc-sidebar { display: flex; flex-direction: column; gap: 12px; position: sticky; top: 0; }
.gc-widget { background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 14px; box-shadow: 0 6px 18px rgba(43,42,74,0.06); }
.gc-widget--clock { border-top: 3px solid var(--navy); }
.gc-widget--calendar { border-top: 3px solid var(--coral); }

.gc-clock { text-align: center; }
.gc-clock-time { font-family: 'Fredoka', sans-serif; font-variant-numeric: tabular-nums; font-size: 26px; font-weight: 600; color: var(--ink); letter-spacing: 0.01em; }
.gc-clock-sec { font-size: 18px; color: #9B9382; font-weight: 500; }
.gc-clock-meta { display: flex; justify-content: center; gap: 8px; margin-top: 4px; font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

.gc-cal-month { font-family: 'Fredoka', sans-serif; font-size: 13px; font-weight: 600; color: var(--ink); text-align: center; margin-bottom: 6px; }
.gc-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; text-align: center; }
.gc-cal-grid--head { margin-bottom: 4px; }
.gc-cal-grid--head span { font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800; letter-spacing: 0.06em; color: #9B9382; text-transform: uppercase; }
.gc-cal-cell { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 600; color: var(--ink); padding: 5px 0; border-radius: 6px; }
.gc-cal-cell.is-empty { visibility: hidden; }
.gc-cal-cell.is-today { background: var(--coral); color: #FFFFFF; font-weight: 800; box-shadow: 0 0 0 1.5px var(--coral-dark) inset; }

/* ── Hero greeting ── */
.td-hero {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  min-height: 240px;
  display: flex;
  align-items: center;
}
.td-hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center right; }
.td-hero-left { position: relative; z-index: 1; max-width: 480px; padding: 32px 0 32px 34px; }
.td-hero-title { font-family: 'Fredoka', sans-serif; font-size: clamp(28px, 3.8vw, 38px); font-weight: 600; margin: 0; line-height: 1.2; color: var(--ink); }
.td-hero-title .who { color: var(--coral); }
.td-hero-btn { display: block; background: none; border: none; padding: 0; margin: 0; text-align: left; font: inherit; color: inherit; cursor: pointer; }
.td-hero-editing { display: inline-block; }
.td-hero-input { font: inherit; color: var(--coral); border: none; border-bottom: 2px solid var(--coral); background: transparent; outline: none; width: 9ch; }
.td-hero-sub { font-family: 'Quicksand', sans-serif; font-size: 14.5px; color: var(--ink-soft, var(--muted)); margin: 10px 0 18px; }
.td-chip-row { display: none; gap: 10px; flex-wrap: wrap; }
.td-chip {
  display: inline-flex; align-items: center; gap: 9px;
  background: var(--card);
  border-radius: 999px;
  padding: 8px 16px 8px 8px;
  font-family: 'Quicksand', sans-serif; font-size: 13px; font-weight: 700; color: var(--ink);
  box-shadow: 0 4px 14px rgba(43,42,74,0.10);
}
.td-chip-icon { width: 26px; height: 26px; border-radius: 50%; background: var(--ink); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.td-chip-icon svg { width: 13px; height: 13px; }

/* ── Daily correction ── */
.td-correction-card {
  position: relative;
  background: linear-gradient(160deg, #FFFCFA 0%, #FFF2E9 100%);
  border: 1.5px solid rgba(43,42,74,0.14);
  border-radius: 24px;
  padding: 26px 30px;
  box-shadow: 0 10px 30px rgba(255,107,74,0.10);
}
.td-dc-label { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--coral); margin-bottom: 12px; }
.td-dc-headline { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: clamp(19px, 2.2vw, 24px); line-height: 1.4; margin: 0 0 12px; color: var(--ink); text-wrap: balance; }
.td-dc-quote { color: var(--coral); margin-right: 5px; }
.corr-wrong { color: #9B9382; font-weight: 400; text-decoration: line-through; text-decoration-color: #B9AF9C; margin-right: 6px; }
.corr-right { color: var(--coral); font-weight: 700; }
.td-dc-explain { font-family: 'Quicksand', sans-serif; font-size: 14px; line-height: 1.55; color: var(--ink-soft, #4C4A3E); max-width: 640px; margin: 0 0 4px; }

/* ── Two more corrections ── */
.td-briefs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.td-brief-card {
  position: relative;
  background: var(--card);
  border-top: 3px solid var(--accent, var(--coral));
  border-radius: 14px;
  padding: 12px 14px;
  box-shadow: 0 6px 16px rgba(43,42,74,0.06);
  cursor: default;
}
.td-brief-card.hue-coral { --accent: var(--coral); }
.td-brief-card.hue-gold { --accent: var(--navy); }
.td-brief-card.hue-teal { --accent: var(--navy-soft); }
.td-brief-label { font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent, var(--coral)); margin-bottom: 4px; }
.td-brief-line { font-family: 'Fredoka', sans-serif; font-size: 13.5px; font-weight: 600; line-height: 1.3; color: var(--ink); margin: 0; }
.td-brief-pop {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
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
.td-brief-card:hover { z-index: 20; }
.td-brief-card:hover .td-brief-pop { opacity: 1; visibility: visible; transform: translateY(0); }

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

/* ── Grammar Checker + Dictionary ── */
.td-util-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.td-util-card { background: var(--card); border-radius: 22px; padding: 22px 24px; box-shadow: 0 8px 24px rgba(43,42,74,0.05); }
.td-util-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.td-util-icon { width: 36px; height: 36px; border-radius: 11px; background: var(--coral-pale); color: var(--coral-dark); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.td-util-icon svg { width: 16px; height: 16px; }
.td-util-title { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; color: var(--ink); }

.td-lookup-form { display: flex; align-items: center; gap: 8px; }
.td-lookup-input {
  flex: 1; min-width: 0;
  font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--ink);
  background: #F5F6FA; border: 1.5px solid var(--hair); border-radius: 999px;
  padding: 11px 16px; outline: none;
}
.td-lookup-input:focus { border-color: var(--coral); }
.td-lookup-input::placeholder { color: var(--muted); }
.td-lookup-btn {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: none;
  background: var(--coral); color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer;
}
.td-lookup-btn:disabled { opacity: 0.6; cursor: default; }
.td-lookup-status { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--muted); margin-top: 10px; }
.td-lookup-status--error { color: var(--coral); }
.td-lookup-result { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--hair); }
.td-lookup-word { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 700; color: var(--ink); text-transform: capitalize; margin-bottom: 6px; }
.td-lookup-meaning { display: flex; align-items: baseline; gap: 7px; margin-top: 6px; }
.td-lookup-meaning:first-of-type { margin-top: 0; }
.td-lookup-pos {
  flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-size: 9.5px; font-weight: 800;
  letter-spacing: 0.05em; text-transform: uppercase; color: var(--navy);
  background: rgba(27,42,74,0.08); border-radius: 999px; padding: 2px 8px;
}
.td-lookup-def { font-family: 'Quicksand', sans-serif; font-size: 12px; line-height: 1.4; color: var(--ink-soft, var(--ink)); }

.td-grammar-form { display: flex; flex-direction: column; gap: 10px; }
.td-grammar-input {
  width: 100%; min-height: 88px; resize: vertical;
  font-family: 'Quicksand', sans-serif; font-size: 13.5px; color: var(--ink);
  background: #F5F6FA; border: 1.5px solid var(--hair); border-radius: 16px; padding: 12px 14px; outline: none;
}
.td-grammar-input:focus { border-color: var(--coral); }
.td-grammar-input::placeholder { color: var(--muted); }
.td-grammar-foot { display: flex; align-items: center; justify-content: flex-end; }
.td-grammar-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: #FFFFFF;
  background: var(--coral); border: none; border-radius: 999px; padding: 10px 20px; cursor: pointer;
}
.td-grammar-btn:disabled { opacity: 0.5; cursor: default; }
.td-grammar-clean { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--muted); margin-top: 12px; }
.td-grammar-results { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--hair); }
.td-grammar-item { border-top: 1px solid var(--hair); padding-top: 10px; }
.td-grammar-item:first-child { border-top: none; padding-top: 0; }
.td-grammar-diff { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; font-family: 'Quicksand', sans-serif; font-size: 12.5px; }
.td-grammar-wrong { color: #9B9382; text-decoration: line-through; text-decoration-color: #B9AF9C; }
.td-grammar-arrow { color: var(--muted); }
.td-grammar-right { color: var(--coral); font-weight: 700; }
.td-grammar-explain { font-family: 'Quicksand', sans-serif; font-size: 11.5px; line-height: 1.4; color: var(--ink-soft, var(--ink)); margin: 4px 0 0; }

/* ── Quote banner ── */
.td-quote-banner { border-radius: 24px; overflow: hidden; line-height: 0; }
.td-quote-banner img { width: 100%; height: auto; display: block; }

/* ── Responsive: full sidebar vs. compact chips ── */
@media (max-width: 860px) {
  .td-body { grid-template-columns: 1fr; }
  .gc-sidebar { display: none; }
  .td-chip-row { display: flex; }
}
@media (max-width: 560px) {
  .td-actions-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .td-briefs { grid-template-columns: 1fr; }
  .td-util-row { grid-template-columns: 1fr; }
}

/* ── Responsive: narrower / non-maximized browser windows ── */
@media (max-width: 1300px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 20px; padding-right: 20px; }
  .gc-sections { justify-content: flex-start; }
  .gc-dashboard { max-width: 720px; }
}
@media (max-width: 900px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 14px; padding-right: 14px; }
  .gc-search input { width: 110px; }
}

/* ── Recommended Lessons: newspaper section front ── */
.gc-reclessons { margin-top: 18px; }
.gc-rl-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.gc-rl-title { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 700; color: var(--ink); }

.gc-rl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.gc-rl-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--card);
  border: 1px solid var(--hair);
  border-radius: 16px;
  padding: 12px 12px 10px;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.gc-rl-card::after { content: ""; position: absolute; left: 0; right: 100%; bottom: 0; height: 3px; transition: right 0.28s ease; }
.gc-rl-card.hue-coral::after { background: var(--coral); }
.gc-rl-card.hue-gold::after { background: var(--navy); }
.gc-rl-card.hue-teal::after { background: var(--navy-soft); }
.gc-rl-card:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(34,58,51,0.14); }
.gc-rl-card:hover::after { right: 0; }

.gc-rl-icon { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.gc-rl-card.hue-teal .gc-rl-icon { background: rgba(90,107,146,0.14); }
.gc-rl-card.hue-gold .gc-rl-icon { background: rgba(27,42,74,0.1); }
.gc-rl-card.hue-coral .gc-rl-icon { background: rgba(255,107,74,0.14); }
.gc-rl-name { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; line-height: 1.3; color: var(--ink); margin-top: 2px; }
.gc-rl-meta { font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted); }
.gc-rl-meta .prem { color: var(--coral); }
.gc-rl-cta {
  margin-top: auto;
  padding-top: 8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(3px);
  transition: opacity 0.18s ease, transform 0.18s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}
.gc-rl-card.hue-coral .gc-rl-cta { color: var(--coral); }
.gc-rl-card.hue-gold .gc-rl-cta { color: var(--navy); }
.gc-rl-card.hue-teal .gc-rl-cta { color: var(--navy-soft); }
.gc-rl-cta .arr { transition: transform 0.18s ease; }
.gc-rl-card:hover .gc-rl-cta { opacity: 1; transform: translateY(0); }
.gc-rl-card:hover .gc-rl-cta .arr { transform: translateX(3px); }

@media (prefers-reduced-motion: reduce) {
  .gc-rl-card, .gc-rl-card::after, .gc-rl-cta, .gc-rl-cta .arr { transition: none; }
  .gc-rl-card:hover { transform: none; }
  .gc-rl-cta { opacity: 1; transform: none; }
}

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
.account-menu a, .account-menu .logout-btn {
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
}
.theme-pro .account-menu a, .theme-pro .account-menu .logout-btn { font-family: 'Inter', sans-serif; color: #1B2A4A; border-radius: 4px; }
.account-menu a:hover, .account-menu .logout-btn:hover { background: #F4F0FF; }
.theme-pro .account-menu a:hover, .theme-pro .account-menu .logout-btn:hover { background: #F0EBDD; }
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
.gaz-masthead { text-align: center; padding-bottom: 6px; }
.gaz-eyebrow {
  display: block;
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}
.gaz-nameplate {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 2.6vw, 38px);
  margin: 0 0 4px;
  color: var(--ink);
}
.gaz-dateline { font-family: 'Quicksand', sans-serif; font-size: 10.5px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.05em; }
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

/* ---------- Grammar: The Grammar Garden ---------- */
.gdn-page {
  --leaf: #4C9A5D; --leaf-deep: #2E6E3D;
  --gold: #E3A73C; --gold-deep: #96631C;
  --soil: #8A6748; --soil-deep: #5C452F;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  background: linear-gradient(180deg, #F3EEE1 0%, #EAE1CC 100%);
  border-radius: 22px;
  padding: clamp(26px, 3.6vw, 48px) clamp(20px, 3.2vw, 40px);
}
.gdn-masthead { text-align: center; }
.gdn-eyebrow {
  font-family: 'SF Mono', 'Menlo', Consolas, monospace;
  font-size: clamp(10.5px, 0.9vw, 11px);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7A6944;
}
.gdn-nameplate { margin: 10px 0 6px; }
.gdn-nameplate-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 3.4vw, 36px);
  letter-spacing: -0.01em;
  color: #33291A;
}
.gdn-sub { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: clamp(13px, 1.1vw, 15px); color: #6B5C3E; margin: 0 auto; max-width: 460px; }
.gdn-row { position: relative; height: 2px; background: #DACCA6; margin: clamp(26px, 3vw, 36px) 0; }
.gdn-row::before, .gdn-row::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #B99B5F; }
.gdn-row::before { left: 0; }
.gdn-row::after { right: 0; }

.gdn-beds { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(14px, 1.8vw, 22px); }
.gdn-bed {
  position: relative;
  display: block;
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(51,41,26,0.12);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.gdn-bed:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(51,41,26,0.18); }
.gdn-bed-banner { display: block; width: 100%; height: auto; }

.gdn-bed-body { padding: 20px 20px 22px; }
.gdn-bed-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(19px, 1.9vw, 22px); margin: 0 0 8px; color: #221B10; }
.gdn-bed-spec { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #6B5C3E; line-height: 1.5; margin: 0 0 18px; min-height: 42px; }
.gdn-bed-cta {
  display: block; text-align: center;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 700;
  color: #FFFFFF; border-radius: 8px; padding: 10px 0;
}
.gdn-bed--leaf .gdn-bed-cta { background: var(--leaf); }
.gdn-bed--gold .gdn-bed-cta { background: var(--gold); }
.gdn-bed--soil .gdn-bed-cta { background: var(--soil); }
.gdn-bed--empty { cursor: default; opacity: 0.7; }

@media (max-width: 700px) {
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
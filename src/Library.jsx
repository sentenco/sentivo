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
import DAILY_CORRECTIONS from "./dailyCorrections";

const CATEGORIES = ["Reading", "Articles", "Grammar", "Vocabulary", "Writing", "Listening", "Speaking"];

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

function TeacherGreeting() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("sentivo_teacher_name") || "";
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);

  useEffect(() => {
    localStorage.setItem("sentivo_teacher_name", name);
  }, [name]);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  function startEditing() {
    setDraft(name);
    setEditing(true);
  }
  function save() {
    setName(draft.trim());
    setEditing(false);
  }

  return (
    <div className="gc-greeting">
      {editing ? (
        <span className="gc-greeting-line gc-greeting-line--editing">
          {greeting}, Teacher{" "}
          <input
            autoFocus
            className="gc-greeting-input"
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
        <button type="button" className="gc-greeting-line gc-greeting-btn" onClick={startEditing} title="Click to edit your name">
          {greeting}{name ? `, Teacher ${name}` : ", Teacher"}
        </button>
      )}
      <div className="gc-spectrum" />
    </div>
  );
}

function ComingSoonWidget({ icon, title, description }) {
  return (
    <div className="gc-coming-soon">
      <span className="gc-cs-icon" aria-hidden="true">{icon}</span>
      <div className="gc-widget-title">{title}</div>
      <p className="gc-widget-note">{description}</p>
      <span className="gc-soon-tag">Coming soon</span>
    </div>
  );
}

function TodayFeature({ tools, onSeeAllLessons }) {
  const today = new Date();
  const dayIndex = daysSince(today);
  const total = DAILY_CORRECTIONS.length;
  const headlineIdx = ((dayIndex % total) + total) % total;
  const headline = DAILY_CORRECTIONS[headlineIdx];
  const briefIdxs = pickDeterministic(total, headlineIdx, 3);
  const briefs = briefIdxs.map((i) => DAILY_CORRECTIONS[i]);

  const recommended = tools.length
    ? pickDeterministic(tools.length, dayIndex, Math.min(3, tools.length)).map((i) => tools[i])
    : [];

  return (
    <div className="gc-dashboard">
      <div className="gc-main">
        <TeacherGreeting />

        <div className="gc-eyebrow">Daily Correction</div>
        <h2 className="gc-headline">
          <span className="corr-quote">&#10078;</span>
          <CorrectionLine segments={headline.sentence} />
        </h2>
        {headline.explain.map((line, i) => (
          <p className="gc-explain" key={i}>{line}</p>
        ))}

        <div className="gc-briefs">
          {briefs.map((b) => (
            <div className={`gc-brief-col hue-${b.hue === "grammar" ? "coral" : b.hue === "vocab" ? "gold" : "teal"}`} key={b.id}>
              <div className="col-h">{b.category}</div>
              <div className="col-line"><CorrectionLine segments={b.sentence} /></div>
              <div className="col-explain">
                {b.explain.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>

        <div className="gc-boxrow">
          <div className="gc-widget gc-widget--salary gc-widget--boxed">
            <ComingSoonWidget icon="🧾" title="Salary Tracker" description="Track your pay per class, all in one place." />
          </div>
          <div className="gc-widget gc-widget--soon gc-widget--boxed">
            <ComingSoonWidget icon="🎞️" title="Slide Deck Builder" description="Turn a lesson into a ready-to-teach slide deck." />
          </div>
          <div className="gc-widget gc-widget--notebook gc-widget--boxed">
            <ComingSoonWidget icon="📝" title="Digital Notebook" description="Write live on a shared whiteboard while you teach." />
          </div>
          <div className="gc-widget gc-widget--wheel gc-widget--boxed">
            <ComingSoonWidget icon="🎡" title="Spin the Wheel" description="Randomly pick a student or topic on the spot." />
          </div>
        </div>

        {recommended.length > 0 && (
          <div className="gc-reclessons">
            <div className="gc-rl-head">
              <span className="gc-rl-title">Recommended Lessons</span>
              <button type="button" className="gc-rl-seeall" onClick={onSeeAllLessons}>See all →</button>
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

  function changePage(next) {
    setPage(next);
    setSearchParams({ cat: category, page: String(next) }, { replace: true });
  }

  return (
    <>
    <div className={`page ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="gc-band">
        <div className="gc-topbar">
          <a
            href="/library"
            className="gc-header-brand"
            onClick={(e) => { e.preventDefault(); goToSidebar("library"); }}
          >
            <span className="cal-s">S</span>entivo
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
                    <a href="#my-tools">My Tools</a>
                    <a href="#settings">Account settings</a>
                    <a href="#plan">Plan: Free &mdash; Upgrade</a>
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
          <span className="gc-ed-label">Edition</span>
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
      <main className="content">
                <div className={`grid-wrap ${category === "All" && !query.trim() && !showAllToday ? "grid-wrap--today" : ""}`} ref={gridWrapRef}>
        {category === "All" && !query.trim() && !showAllToday ? (
          toolsLoading ? (
            <p className="empty-msg">Loading today's edition…</p>
          ) : (
            <TodayFeature tools={tools} onSeeAllLessons={() => setShowAllToday(true)} />
          )
        ) : category === "Grammar" ? (
          <div className="speaking-grid">
            <a href="/library/grammar/verb-tenses" className="speaking-tile speaking-tile--verbtenses">
              <span className="speaking-tile-kicker">Grammar · A1–C2</span>
              <h3 className="speaking-tile-title">Verb Tenses</h3>
              <p className="speaking-tile-desc">All 12 English tenses, one Discussion lesson and one Test lesson each.</p>
              <span className="speaking-tile-cta">Open Verb Tenses →</span>
            </a>
          </div>
        ) : category === "Speaking" ? (
          <div className="speaking-grid">
            <a href="/library/forge" className="speaking-tile speaking-tile--forge">
              <span className="speaking-tile-kicker">Speaking · A2</span>
              <h3 className="speaking-tile-title">FORGE</h3>
              <p className="speaking-tile-desc">Build real vocabulary through pictures, gaps, echoes, and question chains.</p>
              <span className="speaking-tile-cta">Open FORGE →</span>
            </a>
            <a href="/library/ascend" className="speaking-tile speaking-tile--ascend">
              <span className="speaking-tile-kicker">Speaking · C1</span>
              <h3 className="speaking-tile-title">ASCEND</h3>
              <p className="speaking-tile-desc">Precision, structure, and diplomatic control for students who already sound fluent.</p>
              <span className="speaking-tile-cta">Open ASCEND →</span>
            </a>
            <a href="/library/shift" className="speaking-tile speaking-tile--shift">
              <span className="speaking-tile-kicker">Speaking · A2-B1</span>
              <h3 className="speaking-tile-title">SHIFT</h3>
              <p className="speaking-tile-desc">Fast tense choice and self-repair under pressure, for students who already know the grammar.</p>
              <span className="speaking-tile-cta">Open SHIFT →</span>
            </a>
          </div>
        ) : toolsLoading ? (
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
        )}
        </div>

        {category !== "Speaking" && category !== "Grammar" && !(category === "All" && !query.trim() && !showAllToday) && (
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
  align-items: baseline;
}
.gc-header-brand .cal-s { color: var(--rust); }
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
.gc-sec-tab:hover { color: var(--rust); }
.gc-sec-tab.is-active { border-bottom-color: transparent; background: var(--ink); color: #FFFFFF; border-radius: 999px; }

.gc-editions { display: flex; align-items: center; justify-content: center; gap: 11px; padding: 5px 40px; border-bottom: 1px solid var(--hair); font-family: 'Quicksand', sans-serif; background: rgba(34,58,51,0.035); }
.gc-ed-label { font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-right: 4px; }
.gc-ed-spark { font-size: 12px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 13px; border-radius: 999px; color: var(--muted); text-decoration: none; }
.gc-ed-spark:hover { color: var(--rust); }
.gc-ed-tab { font-size: 12px; font-weight: 800; letter-spacing: 0.02em; padding: 5px 13px; border-radius: 999px; color: var(--muted); background: none; border: none; cursor: pointer; }
.gc-ed-tab:hover { color: var(--ink); }
.gc-ed-tab.is-active { background: var(--ink); color: var(--card); }

/* ── Today: teacher dashboard ── */
.gc-dashboard { width: 100%; max-width: 1160px; margin: 0 auto; padding: 14px 4px 16px; display: grid; grid-template-columns: 1fr 280px; align-items: start; gap: 28px; }
.gc-main { min-width: 0; }

.gc-sidebar { display: flex; flex-direction: column; gap: 12px; position: sticky; top: 0; }
.gc-widget { background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 14px; box-shadow: 0 6px 18px rgba(43,42,74,0.06); }
.gc-widget--clock { border-top: 3px solid var(--rust); }
.gc-widget--calendar { border-top: 3px solid var(--dusk); }

.gc-widget-title { font-family: 'Fredoka', sans-serif; font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 6px; }
.gc-widget-note { font-family: 'Quicksand', sans-serif; font-size: 11.5px; line-height: 1.55; color: var(--muted); margin-top: 8px; }

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
.gc-cal-cell.is-today { background: var(--marigold); color: var(--ink); font-weight: 800; box-shadow: 0 0 0 1.5px var(--ink) inset; }

.gc-greeting { text-align: center; margin-top: 0; margin-bottom: 10px; }
.gc-greeting-line { font-family: 'Fredoka', sans-serif; font-size: clamp(18px, 2.4vw, 23px); font-weight: 600; letter-spacing: -0.01em; color: var(--ink); }
.gc-greeting-btn { background: none; border: none; cursor: pointer; padding: 2px 6px; border-radius: 6px; }
.gc-greeting-btn:hover { background: rgba(34,58,51,0.06); }
.gc-greeting-input { font: inherit; color: inherit; border: none; border-bottom: 2px solid var(--rust); background: transparent; outline: none; width: 9ch; text-align: center; }
.gc-spectrum {
  position: relative;
  height: 15px;
  margin-top: 12px;
  background: linear-gradient(to bottom, transparent calc(50% - 0.5px), var(--hair) calc(50% - 0.5px), var(--hair) calc(50% + 0.5px), transparent calc(50% + 0.5px));
}
.gc-spectrum::before { content: "\\2766"; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: var(--paper); padding: 0 12px; color: var(--ochre); font-size: 14px; line-height: 1; }

.gc-headline { font-family: 'Fredoka', sans-serif; font-size: clamp(17px, 1.9vw, 20px); font-weight: 600; line-height: 1.3; margin: 0 0 5px; color: var(--ink); text-wrap: balance; }
.corr-quote { color: var(--marigold); margin-right: 3px; }
.corr-wrong { color: #9B9382; font-weight: 400; text-decoration: line-through; text-decoration-color: #B9AF9C; margin-right: 5px; }
.corr-right { color: var(--rust); font-weight: 700; }
.gc-explain { font-family: 'Quicksand', sans-serif; font-size: 12.5px; line-height: 1.4; color: #4C4A3E; max-width: 640px; margin: 0 0 2px; }
.gc-explain + .gc-explain { margin-top: 2px; }

.gc-eyebrow { font-family: 'Quicksand', sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ochre); margin: 0 0 8px; }

.gc-briefs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 12px 0 2px; }
.gc-brief-col { position: relative; background: var(--card); border: 1px solid var(--hair); border-radius: 14px; padding: 12px 14px; transition: box-shadow .15s ease, border-color .15s ease; }
.gc-brief-col:hover { border-color: rgba(43,42,74,0.22); box-shadow: 0 8px 20px rgba(43,42,74,0.12); }
.gc-brief-col .col-h { font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
.gc-brief-col.hue-coral .col-h { color: var(--rust); }
.gc-brief-col.hue-gold .col-h { color: var(--ochre); }
.gc-brief-col.hue-teal .col-h { color: var(--dusk); }
.gc-brief-col .col-line { font-family: 'Fredoka', sans-serif; font-size: 12.5px; font-weight: 600; line-height: 1.3; color: var(--ink); }

.col-explain {
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
  transition: opacity .15s ease, transform .15s ease, visibility .15s;
  z-index: 30;
  pointer-events: none;
}
.col-explain p { font-family: 'Quicksand', sans-serif; font-size: 11.5px; line-height: 1.4; color: #4C4A3E; margin: 0; }
.col-explain p + p { margin-top: 4px; }
.gc-brief-col:hover .col-explain { opacity: 1; visibility: visible; transform: translateY(0); }

/* ── Gradient feature cards ── */
.gc-boxrow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 12px; }
.gc-boxrow > .gc-widget { min-width: 0; }
.gc-widget--boxed {
  position: relative;
  border: none;
  border-radius: 18px;
  padding: 14px 16px 13px;
  box-shadow: 0 12px 24px rgba(43,42,74,0.16);
  overflow: hidden;
  color: #FFFFFF;
}
.gc-widget--boxed::after {
  content: "";
  position: absolute;
  top: -30%;
  right: -18%;
  width: 65%;
  padding-bottom: 65%;
  border-radius: 50%;
  background: rgba(255,255,255,0.10);
  pointer-events: none;
}
.gc-widget--salary.gc-widget--boxed { background: linear-gradient(135deg, #9D82FF 0%, #6C4FE0 100%); }
.gc-widget--soon.gc-widget--boxed { background: linear-gradient(135deg, #33E4C9 0%, #12A996 100%); }
.gc-widget--notebook.gc-widget--boxed { background: linear-gradient(135deg, #FFB648 0%, #FF8A4C 100%); }
.gc-widget--wheel.gc-widget--boxed { background: linear-gradient(135deg, #FF7EB6 0%, #E1306C 100%); }
.gc-coming-soon { position: relative; display: flex; flex-direction: column; align-items: flex-start; }
.gc-cs-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background: rgba(255,255,255,0.22);
  margin-bottom: 6px;
}
.gc-widget--boxed .gc-widget-title { color: #FFFFFF; font-family: 'Fredoka', sans-serif; font-size: 14.5px; margin-bottom: 2px; }
.gc-widget--boxed .gc-widget-note { color: rgba(255,255,255,0.85); margin-top: 1px; font-size: 10.5px; line-height: 1.35; }
.gc-soon-tag {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: rgba(255,255,255,0.22);
  border-radius: 999px;
  padding: 4px 11px;
  margin-top: 7px;
}

/* ── Responsive: narrower / non-maximized browser windows ── */
@media (max-width: 1300px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 20px; padding-right: 20px; }
  .gc-sections { justify-content: flex-start; }
  .gc-dashboard { grid-template-columns: 1fr; max-width: 720px; }
  .gc-sidebar { flex-direction: row; gap: 14px; }
  .gc-sidebar > .gc-widget { flex: 1; min-width: 0; }
}
@media (max-width: 900px) {
  .gc-topbar, .gc-sections, .gc-editions { padding-left: 14px; padding-right: 14px; }
  .gc-search input { width: 110px; }
  .gc-boxrow { grid-template-columns: repeat(2, 1fr); }
  .gc-briefs { grid-template-columns: repeat(2, 1fr); }
  .gc-sidebar { flex-direction: column; }
}
@media (max-width: 560px) {
  .gc-boxrow { grid-template-columns: 1fr; }
  .gc-briefs { grid-template-columns: 1fr; }
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
.gc-rl-seeall { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 700; color: var(--rust); background: none; border: none; cursor: pointer; padding: 4px 2px; }
.gc-rl-seeall:hover { text-decoration: underline; }

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
.gc-rl-card.hue-coral::after { background: var(--rust); }
.gc-rl-card.hue-gold::after { background: var(--marigold); }
.gc-rl-card.hue-teal::after { background: var(--dusk); }
.gc-rl-card:hover { transform: translateY(-3px); box-shadow: 0 12px 26px rgba(34,58,51,0.14); }
.gc-rl-card:hover::after { right: 0; }

.gc-rl-icon { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; }
.gc-rl-card.hue-teal .gc-rl-icon { background: rgba(73,104,138,0.14); }
.gc-rl-card.hue-gold .gc-rl-icon { background: rgba(224,167,55,0.2); }
.gc-rl-card.hue-coral .gc-rl-icon { background: rgba(169,80,43,0.13); }
.gc-rl-name { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; line-height: 1.3; color: var(--ink); margin-top: 2px; }
.gc-rl-meta { font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted); }
.gc-rl-meta .prem { color: var(--rust); }
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
.gc-rl-card.hue-coral .gc-rl-cta { color: var(--rust); }
.gc-rl-card.hue-gold .gc-rl-cta { color: var(--ochre); }
.gc-rl-card.hue-teal .gc-rl-cta { color: var(--dusk); }
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

.empty-msg { font-size: 14px; opacity: 0.6; padding: 30px 0; text-align: center; }

.grid-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid-wrap--today { align-items: flex-start; overflow-y: auto; }

.cover-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 14px;
  width: 100%;
  height: 100%;
}

.speaking-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 320px));
  gap: 22px;
  width: 100%;
  max-width: 1040px;
}
.speaking-tile {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  text-decoration: none;
  border-radius: 18px;
  padding: 26px 24px;
  min-height: 220px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.14);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.speaking-tile:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.speaking-tile--forge { background: radial-gradient(circle at 20% 0%, #FFF6E6 0%, #FBE7C6 60%, #F6D9AC 100%); }
.speaking-tile--ascend { background: radial-gradient(circle at 20% 0%, #EAFBF6 0%, #D6F2E9 60%, #C3E9DC 100%); }
.speaking-tile--verbtenses { background: radial-gradient(circle at 20% 0%, #F1EFFC 0%, #E4E0FA 60%, #D8D2F6 100%); }
.speaking-tile--shift { background: radial-gradient(circle at 20% 0%, #FFF1EF 0%, #FFDBD5 60%, #FFC3BA 100%); }
.speaking-tile-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.speaking-tile--forge .speaking-tile-kicker { color: #C97A2E; }
.speaking-tile--ascend .speaking-tile-kicker { color: #128571; }
.speaking-tile--verbtenses .speaking-tile-kicker { color: #5B4FE0; }
.speaking-tile--shift .speaking-tile-kicker { color: #E1483B; }
.speaking-tile-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  margin: 2px 0 0;
}
.speaking-tile--forge .speaking-tile-title { color: #2E2617; }
.speaking-tile--ascend .speaking-tile-title { color: #17352E; }
.speaking-tile--verbtenses .speaking-tile-title { color: #2B2560; }
.speaking-tile--shift .speaking-tile-title { color: #4A211B; }
.speaking-tile-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.45;
  margin: 0;
  flex: 1;
}
.speaking-tile--forge .speaking-tile-desc { color: #6B5F49; }
.speaking-tile--ascend .speaking-tile-desc { color: #3E6157; }
.speaking-tile--verbtenses .speaking-tile-desc { color: #5B5590; }
.speaking-tile--shift .speaking-tile-desc { color: #8C5C52; }
.speaking-tile-cta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  border-radius: 999px;
  padding: 7px 15px;
  margin-top: 6px;
}
.speaking-tile--forge .speaking-tile-cta { background: #F2A65A; color: #2E2617; }
.speaking-tile--ascend .speaking-tile-cta { background: #3FCDAF; color: #17352E; }
.speaking-tile--verbtenses .speaking-tile-cta { background: #5B4FE0; color: #FFFFFF; }
.speaking-tile--shift .speaking-tile-cta { background: #E1483B; color: #FFFFFF; }

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
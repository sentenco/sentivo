import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { supabase } from "./supabaseClient";
import CurriculumRouter from "./CurriculumRouter";

const CATEGORIES = ["All", "Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking"];

const PER_PAGE = 8;

function CategoryIcon({ name }) {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "Grammar":
      return (
        <svg {...props}>
          <path d="M9 3h3a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2H3a2 2 0 0 1-2-2v0" />
        </svg>
      );
    case "Vocabulary":
      return (
        <svg {...props}>
          <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
        </svg>
      );
    case "Reading":
      return (
        <svg {...props}>
          <path d="M3 5.5C3 4.7 3.7 4 4.5 4H11v16H4.5A1.5 1.5 0 0 1 3 18.5z" />
          <path d="M21 5.5c0-.8-.7-1.5-1.5-1.5H13v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
        </svg>
      );
    case "Writing":
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
        </svg>
      );
    case "Listening":
      return (
        <svg {...props}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case "Speaking":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return null;
  }
}

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
    default:
      return null;
  }
}

function HeartIcon({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-4.6-9.5-9C.7 8.4 2 5 5 4c2-.7 4 .3 5 2 1-1.7 3-2.7 5-2 3 1 4.3 4.4 2.5 8-2.5 4.4-9.5 9-9.5 9z" />
    </svg>
  );
}

function BookmarkIcon({ filled }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
    </svg>
  );
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
  const [theme, setTheme] = useState("fun");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [bookmarked, setBookmarked] = useState({});
  const [wishlisted, setWishlisted] = useState({});
  const { user, signOut } = useAuth();
  const [authMode, setAuthMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isPro = theme === "pro";
  const [activeSidebar, setActiveSidebar] = useState("library");
  const [curriculumLevel, setCurriculumLevel] = useState(null);

  useEffect(() => {
    window.history.replaceState({ activeSidebar: "library", curriculumLevel: null }, "");
    function onPopState(e) {
      const state = e.state || {};
      setActiveSidebar(state.activeSidebar || "library");
      setCurriculumLevel(state.curriculumLevel || null);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function goToSidebar(sidebar, level = null) {
    setActiveSidebar(sidebar);
    setCurriculumLevel(level);
    window.history.pushState({ activeSidebar: sidebar, curriculumLevel: level }, "");
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
    const matchesCategory = category === "All" || t.category === category;
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
  }

  function toggleBookmark(id) {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function toggleWishlist(id) {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <>
    <div className={`page ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="nav">
        <div className="nav-left">
          <a href="/" className="brand">sent<span className="dot">i</span>vo<span className="lib-tag">Library</span></a>
          <nav className="nav-links">
            <a href="#my-tools">My Tools</a>
            <a href="#bookmarks">Bookmarks</a>
            <a href="#wishlist">Wishlist</a>
          </nav>
        </div>
        <div className="nav-right">
          <div className="theme-toggle">
            <button className={!isPro ? "is-active" : ""} onClick={() => setTheme("fun")}>Fun</button>
            <button className={isPro ? "is-active" : ""} onClick={() => setTheme("pro")}>Pro</button>
          </div>

          {!user ? (
  <>
    <button className="btn-ghost" onClick={() => setAuthMode("login")}>Log in</button>
    <button className="btn-primary" onClick={() => setAuthMode("signup")}>Sign up</button>
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
      </header>

      <div className="body-wrap">
        <aside
          className="primary-sidebar"
          onMouseEnter={e => { e.currentTarget.classList.add('is-expanded'); }}
          onMouseLeave={e => { e.currentTarget.classList.remove('is-expanded'); }}
        >
          <span className="sidebar-heading">Curriculum</span>
          <button
            className={`sidebar-item ${activeSidebar === "curriculum" && !curriculumLevel ? "sidebar-item--active" : "sidebar-item--inactive"}`}
            onClick={() => goToSidebar("curriculum", null)}
            title="Curriculum Overview"
          >
            <div className="sidebar-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <span className="sidebar-label">Overview</span>
          </button>
          {["A1","A2","B1","B2","C1","C2"].map((lvl) => (
            <button
              key={lvl}
              className={`sidebar-item ${activeSidebar === "curriculum" && curriculumLevel === lvl ? "sidebar-item--active" : "sidebar-item--inactive"}`}
              onClick={() => goToSidebar("curriculum", lvl)}
              title={`${lvl} Lessons`}
              style={{ padding: "8px 10px" }}
            >
              <div className="sidebar-icon sidebar-icon--level">
                <span className="sidebar-level-code">{lvl}</span>
              </div>
              <span className="sidebar-label">{{"A1":"A1 — Beginner","A2":"A2 — Elementary","B1":"B1 — Intermediate","B2":"B2 — Upper Int.","C1":"C1 — Advanced","C2":"C2 — Proficient"}[lvl]}</span>
            </button>
          ))}

          <span className="sidebar-heading" style={{ marginTop: 14 }}>Primary Tools</span>
          <a
            href="/primary/virtual-scenario-room"
            className={`sidebar-item ${activeSidebar === "library" ? "sidebar-item--active" : "sidebar-item--inactive"}`}
            onClick={(e) => { e.preventDefault(); goToSidebar("library"); }}
          >
            <div className="sidebar-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="13" rx="2.5"/>
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                <circle cx="9" cy="14" r="1.4" fill="currentColor" stroke="none"/>
                <circle cx="15" cy="14" r="1.4" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            <span className="sidebar-label">Virtual Scenario Room</span>
          </a>
          <div className="sidebar-item sidebar-item--inactive">
            <div className="sidebar-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
            <span className="sidebar-label">WhatsApp Corrector</span>
          </div>
        </aside>

      {activeSidebar === "curriculum" ? (
        <div className="content" style={{ padding: 0, maxWidth: "100%", overflow: "auto" }}>
          <CurriculumRouter
            isPro={isPro}
            initialLevel={curriculumLevel}
            key={String(curriculumLevel)}
          />
        </div>
      ) : (
      <main className="content">
        <div className="search-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search the library..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          />
        </div>

        <div className="cat-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-pill ${category === cat ? "is-active" : ""}`}
              onClick={() => changeCategory(cat)}
            >
              {cat !== "All" && <span className="cat-icon"><CategoryIcon name={cat} /></span>}
              {cat}
            </button>
          ))}
        </div>

                <div className="grid-wrap" ref={gridWrapRef}>
        {toolsLoading ? (
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
  const coverProps = { href: `/library/${c.id}` };
  return (
    <CoverTag
      key={c.id}
      {...coverProps}
      className={`cover cover--${c.palette} ${c.tagline ? "cover--redesigned" : ""}`}
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

                <div className="save-icons">
                  <button
                    className="save-icon"
                    onClick={() => toggleBookmark(c.id)}
                    aria-label="Bookmark this tool"
                  >
                    <BookmarkIcon filled={!!bookmarked[c.id]} />
                  </button>
                  <button
                    className="save-icon"
                    onClick={() => toggleWishlist(c.id)}
                    aria-label="Add to wishlist"
                  >
                    <HeartIcon filled={!!wishlisted[c.id]} />
                  </button>
                </div>

                {c.tagline ? (
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

        <div className="pagination">
          <button disabled={safePage === 1} onClick={() => setPage((p) => p - 1)}>&larr; Prev</button>
          <span className="page-indicator">Page {safePage} of {totalPages}</span>
          <button disabled={safePage === totalPages} onClick={() => setPage((p) => p + 1)}>Next &rarr;</button>
        </div>
      </main>
      )}
      </div>
      </div>
      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
    </>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

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

/* ── Primary Tools Sidebar ── */
.primary-sidebar {
  width: 72px;
  background: transparent;
  border-right: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px 10px;
  flex-shrink: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 0.26s cubic-bezier(0.4,0,0.2,1);
  gap: 6px;
  z-index: 10;
  scrollbar-width: none;
}
.primary-sidebar::-webkit-scrollbar { display: none; }
.primary-sidebar.is-expanded { width: 220px; }

.sidebar-heading {
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #7A6E8A;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  margin-bottom: 4px;
  margin-top: 8px;
  padding-left: 2px;
  transition: opacity 0.15s ease;
}
.theme-pro .sidebar-heading { color: #7A7060; }
.primary-sidebar.is-expanded .sidebar-heading { opacity: 1; }

.sidebar-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px 10px;
  border-radius: 13px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  transition: background 0.15s ease;
}
.sidebar-item--active {
  background: #FF7A59;
  color: white;
  box-shadow: 0 4px 0 rgba(200,74,32,0.28);
}
.sidebar-item--inactive {
  color: #3D3552;
  opacity: 0.7;
  cursor: pointer;
}
.sidebar-item--inactive:hover {
  opacity: 1;
  background: rgba(0,0,0,0.04);
}
.theme-pro .sidebar-item--active { background: #1B2A4A; box-shadow: none; }
.theme-pro .sidebar-item--inactive { color: #1B2A4A; }

.sidebar-icon {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sidebar-item--active .sidebar-icon { background: rgba(255,255,255,0.22); }
.sidebar-item--inactive .sidebar-icon { background: rgba(156,138,196,0.15); }
.theme-pro .sidebar-item--inactive .sidebar-icon { background: #F0EBDD; }

.sidebar-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #3D3552;
  opacity: 0;
  transition: opacity 0.18s ease;
  white-space: nowrap;
}
.theme-pro .sidebar-label { font-family: 'Inter', sans-serif; font-weight: 600; color: #1B2A4A; }
.primary-sidebar.is-expanded .sidebar-label { opacity: 1; }


.theme-fun { background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%); color: #3D3552; }
.theme-pro { background: #F7F5EF; color: #1B2A4A; }

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(6px, 2vh, 18px) 40px;
  flex-wrap: wrap;
  gap: 16px;
  flex-shrink: 0;
}
.nav-left { display: flex; align-items: center; gap: 30px; }
.brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: inherit;
}
.theme-pro .brand { font-family: 'Source Serif 4', serif; }
.dot { color: #FF7A59; }
.theme-pro .dot { color: #B08D57; }
.lib-tag {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 600;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 8px;
}
.theme-pro .lib-tag { font-family: 'Inter', sans-serif; }

.nav-links { display: flex; gap: 22px; }
.nav-links a {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: inherit;
  text-decoration: none;
  opacity: 0.7;
}
.theme-pro .nav-links a { font-family: 'Inter', sans-serif; font-weight: 500; }
.nav-links a:hover { opacity: 1; }

.nav-right { display: flex; align-items: center; gap: 12px; position: relative; }
.theme-toggle { display: flex; gap: 4px; background: rgba(255,255,255,0.6); border-radius: 999px; padding: 4px; }
.theme-pro .theme-toggle { background: #fff; border-radius: 4px; border: 1px solid #DEDAD0; }
.theme-toggle button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding: 6px 12px;
  border: none;
  background: transparent;
  border-radius: 999px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
}
.theme-pro .theme-toggle button { font-family: 'Inter', sans-serif; border-radius: 3px; }
.theme-toggle button.is-active { background: #FF7A59; color: white; opacity: 1; }
.theme-pro .theme-toggle button.is-active { background: #1B2A4A; color: #F7F5EF; }

.btn-ghost, .btn-primary {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  border: none;
}
.theme-pro .btn-ghost, .theme-pro .btn-primary { font-family: 'Inter', sans-serif; border-radius: 4px; }
.btn-ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; opacity: 0.7; }
.theme-pro .btn-ghost { border: 1px solid #DEDAD0; opacity: 1; }
.btn-primary { background: #FF7A59; color: white; }
.theme-pro .btn-primary { background: #1B2A4A; color: #F7F5EF; }

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

.search-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 999px;
  padding: clamp(5px, 1.4vh, 12px) 20px;
  margin-bottom: clamp(6px, 1.4vh, 14px);
  flex-shrink: 0;
}
.theme-pro .search-row { border-radius: 4px; border: 1px solid #DEDAD0; }
.search-row input {
  border: none;
  outline: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  width: 100%;
  background: transparent;
  color: inherit;
}
.theme-pro .search-row input { font-family: 'Inter', sans-serif; }

.cat-row { display: flex; gap: 10px; margin-bottom: clamp(6px, 1.4vh, 14px); flex-wrap: wrap; justify-content: center; flex-shrink: 0; }
.cat-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 9px 16px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,0.65);
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
}
.theme-pro .cat-pill { font-family: 'Inter', sans-serif; border-radius: 4px; background: #fff; border: 1px solid #DEDAD0; }
.cat-icon { display: flex; opacity: 0.7; }
.cat-pill.is-active { background: #FF7A59; color: white; opacity: 1; }
.theme-pro .cat-pill.is-active { background: #1B2A4A; color: #F7F5EF; border-color: #1B2A4A; }

.empty-msg { font-size: 14px; opacity: 0.6; padding: 30px 0; text-align: center; }

.grid-wrap {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  gap: 14px;
  width: 100%;
  height: 100%;
}

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

.theme-pro .cover--coral { background: #fff; border-top: 4px solid #D85A30; }
.theme-pro .cover--teal { background: #fff; border-top: 4px solid #0F6E56; }
.theme-pro .cover--lavender { background: #fff; border-top: 4px solid #534AB7; }
.theme-pro .cover--gold { background: #fff; border-top: 4px solid #B08D57; }

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

.save-icons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
}
.save-icon {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #B5483A;
}
.theme-pro .save-icon { border-radius: 4px; background: #fff; border: 1px solid #DEDAD0; color: #B08D57; }

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

@media (max-width: 700px) {
  .nav-links { display: none; }
}
/* ── Sidebar: button reset ── */
.sidebar-item { border: none; background: none; cursor: pointer; text-align: left; }
.sidebar-item--inactive { cursor: pointer; }

/* ── Sidebar: curriculum level badges ── */
.sidebar-icon--level { background: rgba(255,122,89,0.18) !important; }
.theme-pro .sidebar-icon--level { background: rgba(27,42,74,0.1) !important; }
.sidebar-level-code {
  font-family: 'Fredoka', sans-serif;
  font-size: 11px; font-weight: 700; color: #FF7A59;
}
.theme-pro .sidebar-level-code { color: #1B2A4A; }
.sidebar-item--active .sidebar-level-code { color: #fff; }
.sidebar-item--active .sidebar-icon--level { background: rgba(255,255,255,0.22) !important; }

`;
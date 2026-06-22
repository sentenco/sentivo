import React, { useState } from "react";

const CATEGORIES = ["All", "Grammar", "Vocabulary", "Reading", "Writing", "Listening", "Speaking"];

const ALL_TOOLS = [
  { id: "stress", title: "Stress & Meaning", sub: "Flashcards", level: "Beginner \u2192 Advanced", access: "free", motif: "stress", palette: "coral", category: "Vocabulary" },
  { id: "phrasal", title: "Phrasal Verbs", sub: "Reference Deck", level: "Intermediate", access: "premium", motif: "branch", palette: "teal", category: "Grammar" },
  { id: "minimal", title: "Minimal Pairs", sub: "Sound Cards", level: "Beginner", access: "free", motif: "waves", palette: "lavender", category: "Listening" },
  { id: "idioms", title: "Everyday Idioms", sub: "Quick Reference", level: "Intermediate \u2192 Advanced", access: "premium", motif: "quote", palette: "gold", category: "Writing" },
  { id: "tenses", title: "Verb Tenses", sub: "Quick Guide", level: "Beginner \u2192 Intermediate", access: "free", motif: "branch", palette: "lavender", category: "Grammar" },
  { id: "connectors", title: "Linking Words", sub: "Writing Toolkit", level: "Intermediate", access: "premium", motif: "quote", palette: "teal", category: "Writing" },
  { id: "skim", title: "Skimming & Scanning", sub: "Reading Strategy Cards", level: "Intermediate", access: "free", motif: "waves", palette: "coral", category: "Reading" },
  { id: "collocations", title: "Common Collocations", sub: "Word Pairs Deck", level: "Intermediate \u2192 Advanced", access: "premium", motif: "stress", palette: "gold", category: "Vocabulary" },
  { id: "conv-prompts", title: "Conversation Starters", sub: "Speaking Cards", level: "Beginner \u2192 Intermediate", access: "free", motif: "quote", palette: "coral", category: "Speaking" },
  { id: "pron", title: "Pronunciation Drills", sub: "Sound Practice", level: "Beginner", access: "premium", motif: "waves", palette: "teal", category: "Speaking" },
  { id: "articles", title: "Articles A/An/The", sub: "Grammar Reference", level: "Beginner", access: "free", motif: "branch", palette: "gold", category: "Grammar" },
  { id: "comprehension", title: "Reading Comprehension", sub: "Practice Passages", level: "Intermediate", access: "premium", motif: "waves", palette: "lavender", category: "Reading" },
];

const PER_PAGE = 10;

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isPro = theme === "pro";

  const filtered = ALL_TOOLS.filter((t) => {
    const matchesCategory = category === "All" || t.category === category;
    const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

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

          {!loggedIn ? (
            <>
              <button className="btn-ghost" onClick={() => setLoggedIn(true)}>Log in</button>
              <button className="btn-primary" onClick={() => setLoggedIn(true)}>Sign up</button>
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
                  <a href="#plan">Plan: Free \u2014 Upgrade</a>
                  <button className="logout-btn" onClick={() => { setLoggedIn(false); setMenuOpen(false); }}>Log out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

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

        {pageItems.length === 0 ? (
          <p className="empty-msg">No tools found. Try a different search or category.</p>
        ) : (
          <div className="cover-grid">
            {pageItems.map((c) => {
  const CoverTag = c.id === "stress" ? "a" : "div";
  const coverProps = c.id === "stress" ? { href: "/library/stress" } : {};
  return (
    <CoverTag key={c.id} {...coverProps} className={`cover cover--${c.palette}`}>
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

                <div className="cover-motif"><Motif type={c.motif} /></div>
                <div className="cover-text">
                  <h3>{c.title}</h3>
                  <span className="cover-sub">{c.sub}</span>
                </div>
                <div className="cover-footer">
                  <span className="cover-level">{c.level}</span>
                </div>
                </CoverTag>
              );
            })}
          </div>
        )}

        <div className="pagination">
          <button disabled={safePage === 1} onClick={() => setPage((p) => p - 1)}>&larr; Prev</button>
          <span className="page-indicator">Page {safePage} of {totalPages}</span>
          <button disabled={safePage === totalPages} onClick={() => setPage((p) => p + 1)}>Next &rarr;</button>
        </div>
      </main>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { margin: 0; padding: 0; }

.page {
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}
.theme-fun { background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%); color: #3D3552; }
.theme-pro { background: #F7F5EF; color: #1B2A4A; }

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 40px;
  flex-wrap: wrap;
  gap: 16px;
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

.content { max-width: 1140px; margin: 0 auto; padding: 8px 40px 60px; }

.search-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 999px;
  padding: 12px 20px;
  margin-bottom: 22px;
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

.cat-row { display: flex; gap: 10px; margin-bottom: 26px; flex-wrap: wrap; justify-content: center; }
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

.cover-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.cover {
  aspect-ratio: 3/4.4;
  border-radius: 14px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 14px 24px rgba(0,0,0,0.10);
  overflow: hidden;
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
.motif-svg { width: 100%; height: 56px; }
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

.pagination { display: flex; align-items: center; justify-content: center; gap: 18px; }
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

@media (max-width: 1100px) {
  .cover-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 700px) {
  .cover-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
}
`;
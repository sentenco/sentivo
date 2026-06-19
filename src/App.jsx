import React, { useState } from "react";

const TOOLS = [
  {
    id: "stress-flashcards",
    title: "Stress & Meaning Flashcards",
    desc: "Same word, different stress, different meaning. Flip to reveal.",
    level: "Beginner \u2192 Advanced",
    icon: "words",
    status: "live",
  },
  {
    id: "coming-1",
    title: "More tools coming soon",
    desc: "New decks and practice tools are on the way.",
    level: "",
    icon: "soon",
    status: "soon",
  },
];

function Icon({ name }) {
  if (name === "words") {
    return (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 19V7l4 8 4-8v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 19V7h4a3 3 0 0 1 0 6h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
}

export default function App() {
  const [theme, setTheme] = useState("fun");
  const isPro = theme === "pro";

  return (
    <div className={`shell ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="nav">
        <div className="brand">
          sent<span className="brand-dot">i</span>vo
        </div>

        <nav className="nav-links">
          <a href="#tools" className="nav-link">Tools</a>
          <a href="#about" className="nav-link">About</a>
        </nav>

        <div className="nav-right">
          <div className="theme-toggle" role="group" aria-label="Site theme">
            <button
              className={`toggle-btn ${!isPro ? "is-active" : ""}`}
              onClick={() => setTheme("fun")}
            >
              Fun
            </button>
            <button
              className={`toggle-btn ${isPro ? "is-active" : ""}`}
              onClick={() => setTheme("pro")}
            >
              Pro
            </button>
          </div>
          <button className="btn-ghost">Log in</button>
          <button className="btn-primary">Sign up free</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-decor" aria-hidden="true" />
        <span className="eyebrow">For ESL teachers &amp; learners</span>
        <h1 className="headline">
          Learn English<br />the way it's <em>really</em> spoken.
        </h1>
        <p className="subhead">
          Sentivo turns tricky parts of English &mdash; stress, sound, meaning &mdash;
          into bite-sized tools you can use in any lesson, or any study session.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg">Start free</button>
          <button className="btn-ghost btn-lg">See how it works</button>
        </div>
        <p className="hero-note">Free forever for beginner-level tools. No card required.</p>
      </section>

      <section className="tools" id="tools">
        <div className="section-head">
          <h2>Tools</h2>
          <p>Pick a tool below. Switch levels inside each one.</p>
        </div>

        <div className="tool-grid">
          {TOOLS.map((t) => (
            <div key={t.id} className={`tool-card ${t.status === "soon" ? "is-soon" : ""}`}>
              <div className="tool-icon"><Icon name={t.icon} /></div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
              {t.level && <span className="tool-level">{t.level}</span>}
              {t.status === "live" ? (
                <button className="btn-primary tool-btn">Open tool</button>
              ) : (
                <span className="soon-tag">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="plans" id="about">
        <div className="section-head">
          <h2>Free to start, simple to grow</h2>
          <p>Use beginner tools at no cost. Unlock more as you go.</p>
        </div>
        <div className="plan-grid">
          <div className="plan-card">
            <span className="plan-name">Free</span>
            <p className="plan-detail">Full access to beginner-level tools, for teachers and learners alike.</p>
            <ul className="plan-list">
              <li>Beginner flashcard decks</li>
              <li>Unlimited practice</li>
              <li>No account required to try</li>
            </ul>
          </div>
          <div className="plan-card plan-card--featured">
            <span className="plan-tag">More soon</span>
            <span className="plan-name">Premium</span>
            <p className="plan-detail">Intermediate &amp; advanced content, plus new tools as they launch.</p>
            <ul className="plan-list">
              <li>Everything in Free</li>
              <li>Intermediate &amp; advanced decks</li>
              <li>Early access to new tools</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>sent<span className="brand-dot">i</span>vo</span>
        <span className="footer-sep">&middot;</span>
        <span>Built for ESL classrooms everywhere</span>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.shell {
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  transition: background 0.4s ease, color 0.4s ease;
}

.theme-fun {
  background: radial-gradient(circle at 15% 0%, #FFF3D6 0%, #FFEFEA 40%, #F4F0FF 100%);
  color: #3D3552;
}
.theme-pro {
  background: #F7F5EF;
  color: #1B2A4A;
}

.brand-dot { color: #FF7A59; }
.theme-pro .brand-dot { color: #B08D57; }

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  flex-wrap: wrap;
  gap: 16px;
}
.brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 24px;
  font-weight: 700;
}
.theme-pro .brand { font-family: 'Source Serif 4', serif; }

.nav-links { display: flex; gap: 24px; }
.nav-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: inherit;
  text-decoration: none;
  opacity: 0.7;
}
.theme-pro .nav-link { font-family: 'Inter', sans-serif; font-weight: 500; }
.nav-link:hover { opacity: 1; }

.nav-right { display: flex; align-items: center; gap: 12px; }

.theme-toggle {
  display: flex;
  background: rgba(255,255,255,0.6);
  border-radius: 999px;
  padding: 4px;
  border: 1px solid rgba(0,0,0,0.06);
}
.theme-pro .theme-toggle { background: #fff; border-radius: 4px; border: 1px solid #DEDAD0; }
.toggle-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  padding: 6px 14px;
  border: none;
  background: transparent;
  border-radius: 999px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
}
.theme-pro .toggle-btn { font-family: 'Inter', sans-serif; border-radius: 3px; }
.toggle-btn.is-active { background: #FF7A59; color: white; opacity: 1; }
.theme-pro .toggle-btn.is-active { background: #1B2A4A; color: #F7F5EF; }

.btn-ghost, .btn-primary {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  padding: 9px 18px;
  border-radius: 999px;
  cursor: pointer;
  border: none;
}
.theme-pro .btn-ghost, .theme-pro .btn-primary {
  font-family: 'Inter', sans-serif;
  border-radius: 3px;
}
.btn-ghost { background: transparent; color: inherit; border: 1.5px solid currentColor; opacity: 0.75; }
.theme-pro .btn-ghost { border: 1px solid #DEDAD0; opacity: 1; }
.btn-primary { background: #FF7A59; color: white; }
.theme-pro .btn-primary { background: #1B2A4A; color: #F7F5EF; }
.btn-lg { padding: 13px 26px; font-size: 15px; }

.hero {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  padding: 70px 24px 90px;
  overflow: hidden;
}
.hero-decor {
  position: absolute;
  top: -60px; right: -60px;
  width: 220px; height: 220px;
  border-radius: 50%;
  background: #C8B6FF;
  opacity: 0.35;
  z-index: 0;
}
.theme-pro .hero-decor { display: none; }

.eyebrow {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FF7A59;
  position: relative;
  z-index: 1;
}
.theme-pro .eyebrow { font-family: 'Inter', sans-serif; color: #B08D57; letter-spacing: 2px; }

.headline {
  font-family: 'Fredoka', sans-serif;
  font-size: 46px;
  font-weight: 700;
  line-height: 1.15;
  margin: 18px 0 20px;
  position: relative;
  z-index: 1;
}
.theme-pro .headline { font-family: 'Source Serif 4', serif; font-size: 42px; font-weight: 600; }
.headline em { font-style: normal; color: #FF7A59; }
.theme-pro .headline em { color: #B08D57; font-style: italic; }

.subhead {
  font-size: 16.5px;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 520px;
  margin: 0 auto 30px;
  position: relative;
  z-index: 1;
}

.hero-actions { display: flex; justify-content: center; gap: 14px; position: relative; z-index: 1; }
.hero-note {
  margin-top: 16px;
  font-size: 13px;
  opacity: 0.55;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  position: relative;
  z-index: 1;
}
.theme-pro .hero-note { font-family: 'Inter', sans-serif; font-weight: 400; }

.section-head { text-align: center; max-width: 480px; margin: 0 auto 36px; }
.section-head h2 {
  font-family: 'Fredoka', sans-serif;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}
.theme-pro .section-head h2 { font-family: 'Source Serif 4', serif; font-weight: 600; }
.section-head p { font-size: 15px; opacity: 0.65; }

.tools { max-width: 920px; margin: 0 auto; padding: 40px 24px; }

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.tool-card {
  background: white;
  border-radius: 24px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 8px 0 rgba(61,53,82,0.06), 0 14px 26px rgba(61,53,82,0.08);
}
.theme-pro .tool-card {
  border-radius: 6px;
  box-shadow: none;
  border: 1px solid #DEDAD0;
}
.tool-card.is-soon { opacity: 0.6; }
.tool-icon {
  width: 46px; height: 46px;
  border-radius: 14px;
  background: #FFE8C2;
  display: flex; align-items: center; justify-content: center;
  color: #FF7A59;
}
.theme-pro .tool-icon { border-radius: 4px; background: #F0EBDD; color: #1B2A4A; }
.tool-card h3 { font-family: 'Quicksand', sans-serif; font-size: 17px; font-weight: 700; }
.theme-pro .tool-card h3 { font-family: 'Source Serif 4', serif; font-weight: 600; }
.tool-card p { font-size: 13.5px; opacity: 0.65; line-height: 1.5; flex-grow: 1; }
.tool-level {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6B5B95;
  background: #F4F0FF;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
}
.theme-pro .tool-level {
  font-family: 'Inter', sans-serif;
  color: #B08D57;
  background: #F0EBDD;
  border-radius: 3px;
}
.tool-btn { margin-top: 6px; align-self: flex-start; }
.soon-tag {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.5;
}

.plans { max-width: 760px; margin: 0 auto; padding: 30px 24px 80px; }
.plan-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.plan-card {
  background: white;
  border-radius: 24px;
  padding: 28px 26px;
  box-shadow: 0 8px 0 rgba(61,53,82,0.06), 0 14px 26px rgba(61,53,82,0.08);
  position: relative;
}
.theme-pro .plan-card { border-radius: 6px; box-shadow: none; border: 1px solid #DEDAD0; }
.plan-card--featured { border: 2px solid #FF7A59; }
.theme-pro .plan-card--featured { border: 2px solid #1B2A4A; }
.plan-tag {
  position: absolute; top: -12px; right: 20px;
  background: #FF7A59; color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 11px; font-weight: 700;
  padding: 4px 12px; border-radius: 999px;
}
.theme-pro .plan-tag { background: #1B2A4A; color: #F7F5EF; border-radius: 3px; font-family: 'Inter', sans-serif; }
.plan-name {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}
.theme-pro .plan-name { font-family: 'Source Serif 4', serif; }
.plan-detail { font-size: 13.5px; opacity: 0.7; line-height: 1.5; margin-bottom: 16px; }
.plan-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.plan-list li {
  font-size: 13.5px;
  padding-left: 20px;
  position: relative;
}
.plan-list li::before {
  content: '\\2713';
  position: absolute; left: 0;
  color: #FF7A59;
  font-weight: 700;
}
.theme-pro .plan-list li::before { color: #B08D57; }

.footer {
  text-align: center;
  padding: 28px 24px;
  font-size: 13px;
  opacity: 0.5;
  font-family: 'Quicksand', sans-serif;
}
.theme-pro .footer { font-family: 'Inter', sans-serif; }
.footer-sep { margin: 0 8px; }

@media (max-width: 640px) {
  .nav { padding: 18px 20px; }
  .nav-links { display: none; }
  .headline { font-size: 34px; }
}
`;
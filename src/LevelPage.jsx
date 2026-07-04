import React, { useEffect } from "react";

const LEVEL_DATA = {
  A1: {
    name: "Beginner",
    color: "#D85A30",
    light: "#FAECE7",
    cefr: "Basic User",
    description:
      "At A1, learners can understand and use familiar everyday expressions and very basic phrases. They can introduce themselves and others, and ask and answer simple questions about personal details.",
    goals: [
      "Use basic greetings and introductions",
      "Give simple personal information — name, age, country, phone",
      "Talk in simple sentences about family, daily routine, home, food, shopping, hobbies, and weather",
    ],
    units: [
      "Greetings & Introductions",
      "Numbers & Personal Information",
      "Family & People",
      "Daily Routine & Time",
      "Home, Classroom & Town",
      "Food, Likes & Health",
      "Shopping & Money",
      "Free Time, Weather & Review",
    ],
  },
  A2: {
    name: "Elementary",
    color: "#0F6E56",
    light: "#E1F5EE",
    cefr: "Basic User",
    description:
      "At A2, learners can understand sentences and frequently used expressions in areas of immediate relevance — personal and family information, shopping, local geography, employment.",
    goals: [
      "Talk about daily routines, school and work, and simple past events",
      "Handle common situations like shopping, eating out, and travel",
      "Describe people, places, and experiences in simple linked sentences",
    ],
    units: [
      "Daily Life & School",
      "Simple Past Experiences",
      "Shopping & Services",
      "Eating Out",
      "Travel & Transport",
      "Health & Appointments",
      "Hobbies & Technology",
    ],
  },
  B1: {
    name: "Intermediate",
    color: "#534AB7",
    light: "#EEEDFE",
    cefr: "Independent User",
    description:
      "At B1, learners can understand the main points of clear standard input on familiar matters in work, school, and leisure. They can deal with most travel situations and produce simple connected text.",
    goals: [
      "Manage everyday conversations with detail and opinion",
      "Handle common work and school situations in English",
      "Discuss plans, preferences, and experiences with reasons",
    ],
    units: [
      "Work & Study Life",
      "Travel & Problem-Solving",
      "Opinions & Discussions",
      "News & Media",
      "Projects & Presentations",
      "Extended Narratives",
    ],
  },
  B2: {
    name: "Upper Intermediate",
    color: "#BA7517",
    light: "#FAEEDA",
    cefr: "Independent User",
    description:
      "At B2, learners can understand the main ideas of complex text on both concrete and abstract topics. They can interact with fluency and spontaneity with native speakers.",
    goals: [
      "Participate in extended discussions on a variety of topics",
      "Understand and summarize longer texts and media",
      "Present arguments, advantages and disadvantages, and detailed opinions",
    ],
    units: [
      "Current Issues",
      "Workplace Communication",
      "Academic Skills",
      "Critical Reading & Listening",
      "Formal Writing",
      "Debates & Presentations",
    ],
  },
  C1: {
    name: "Advanced",
    color: "#0F6E56",
    light: "#E1F5EE",
    cefr: "Proficient User",
    description:
      "At C1, learners can understand a wide range of demanding, longer texts and recognize implicit meaning. They can express ideas fluently and spontaneously without much searching for expressions.",
    goals: [
      "Engage with complex, nuanced topics and texts",
      "Produce well-structured, detailed spoken and written work",
      "Adapt language appropriately to different formal and informal contexts",
    ],
    units: [
      "Academic & Professional Discourse",
      "Complex Problem-Solving",
      "Advanced Argumentation",
      "Style & Register",
      "Specialized Topics",
    ],
  },
  C2: {
    name: "Proficient",
    color: "#534AB7",
    light: "#EEEDFE",
    cefr: "Proficient User",
    description:
      "At C2, learners can understand with ease virtually everything heard or read. They can summarize information from different sources and express themselves spontaneously, fluently, and precisely.",
    goals: [
      "Use English flexibly and confidently in any context",
      "Interpret and produce sophisticated texts and discourse",
      "Control tone, style, and nuance at a very fine level",
    ],
    units: [
      "Advanced Text Analysis",
      "Rhetoric & Persuasion",
      "Research & Synthesis",
      "Specialized Professional Domains",
    ],
  },
};

const AGE_TRACKS = [
  {
    key: "kids",
    label: "Kids",
    age: "Ages 6–12",
    tagline: "Visual · Game-based · Encouraging",
    desc: "Short, playful lessons with lots of visual aids, repetition, and positive reinforcement. Perfect for young learners building their first English foundation.",
    bg: "#FFF3D6",
    accent: "#D85A30",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="9" />
        <path d="M8 44c0-8.8 7.2-16 16-16s16 7.2 16 16" />
        <path d="M18 12c1.5-4 7-6 10-3" />
        <circle cx="20" cy="18" r="1.5" fill="currentColor" />
        <circle cx="28" cy="18" r="1.5" fill="currentColor" />
        <path d="M20 23q4 3 8 0" />
      </svg>
    ),
  },
  {
    key: "teens",
    label: "Teens",
    age: "Ages 13–17",
    tagline: "Relevant · Engaging · Real-world",
    desc: "Topics that actually matter to teenagers — school life, friendships, social media, pop culture, and future plans. Lessons that feel like real conversations.",
    bg: "#F4F0FF",
    accent: "#534AB7",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="9" />
        <path d="M9 44c0-8.3 6.7-15 15-15s15 6.7 15 15" />
        <circle cx="21" cy="16" r="1.5" fill="currentColor" />
        <circle cx="27" cy="16" r="1.5" fill="currentColor" />
        <path d="M21 21q3 2 6 0" />
        <path d="M30 7c3-1 6 1 5 4" />
      </svg>
    ),
  },
  {
    key: "adults",
    label: "Adults",
    age: "Ages 18+",
    tagline: "Practical · Professional · Goal-oriented",
    desc: "Lessons built around real-world adult needs — workplace communication, academic English, daily errands, travel, and social interaction.",
    bg: "#E1F5EE",
    accent: "#0F6E56",
    icon: (
      <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="15" r="9" />
        <path d="M9 44c0-8.3 6.7-15 15-15s15 6.7 15 15" />
        <circle cx="21" cy="15" r="1.5" fill="currentColor" />
        <circle cx="27" cy="15" r="1.5" fill="currentColor" />
        <path d="M21 20q3 2 6 0" />
        <rect x="19" y="29" width="10" height="7" rx="2" />
        <path d="M22 33h4" />
      </svg>
    ),
  },
];

export default function LevelPage({ level = "A1", onBack, onSelectTrack, isPro = false }) {
  const data = LEVEL_DATA[level] || LEVEL_DATA.A1;

  useEffect(() => {
    const styleId = "lp-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = styles;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className={`lp-wrap${isPro ? " lp-pro" : ""}`}>
      {/* ── Back + breadcrumb ── */}
      <div className="lp-topbar">
        <button className="lp-back" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Curriculum
        </button>
        <div className="lp-breadcrumb">
          Curriculum &rsaquo; <span style={{ color: data.color }}>{level} — {data.name}</span>
        </div>
      </div>

      {/* ── Level hero ── */}
      <div className="lp-hero" style={{ "--lv-color": data.color, "--lv-light": data.light }}>
        <div className="lp-hero-left">
          <div className="lp-cefr-tag">{data.cefr}</div>
          <div className="lp-level-code">{level}</div>
          <div className="lp-level-name">{data.name}</div>
          <p className="lp-description">{data.description}</p>
        </div>
        <div className="lp-hero-right">
          <div className="lp-goals-label">Can-do goals</div>
          <ul className="lp-goals">
            {data.goals.map((g, i) => (
              <li key={i} className="lp-goal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {g}
              </li>
            ))}
          </ul>
          <div className="lp-units-label">Units covered</div>
          <div className="lp-units-row">
            {data.units.map((u, i) => (
              <span key={i} className="lp-unit-chip">Unit {i + 1}: {u}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Age track selector ── */}
      <div className="lp-tracks-section">
        <div className="lp-tracks-hd">
          <h2 className="lp-tracks-title">Choose an age track</h2>
          <p className="lp-tracks-sub">Same CEFR goals, different topics and activities for each group.</p>
        </div>
        <div className="lp-tracks-grid">
          {AGE_TRACKS.map((t) => (
            <div
              key={t.key}
              className="lp-track-card"
              style={{ "--tr-bg": t.bg, "--tr-accent": t.accent }}
              onClick={() => onSelectTrack && onSelectTrack(t.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelectTrack && onSelectTrack(t.key)}
            >
              <div className="lp-track-top">
                <div className="lp-track-icon" style={{ color: t.accent }}>{t.icon}</div>
                <div>
                  <div className="lp-track-label">{t.label}</div>
                  <div className="lp-track-age">{t.age}</div>
                </div>
              </div>
              <div className="lp-track-tagline">{t.tagline}</div>
              <p className="lp-track-desc">{t.desc}</p>
              <div className="lp-track-cta" style={{ color: t.accent }}>
                View {level} {t.label} lessons
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.lp-wrap {
  min-height: 100%;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  font-family: 'Quicksand', sans-serif;
}
.lp-pro { background: #F7F5EF; }

.lp-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(8px);
}
.lp-pro .lp-topbar { background: rgba(247,245,239,0.8); }

.lp-back {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #5A4E6A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.lp-back:hover { color: #FF7A59; }
.lp-pro .lp-back { color: #6B6458; }
.lp-pro .lp-back:hover { color: #1B2A4A; }

.lp-breadcrumb {
  font-size: 12px;
  font-weight: 600;
  color: #8A7B8A;
}
.lp-pro .lp-breadcrumb { color: #8A8070; }

.lp-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 36px 48px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
@media (max-width: 800px) { .lp-hero { grid-template-columns: 1fr; } }

.lp-hero-left { display: flex; flex-direction: column; gap: 10px; }
.lp-cefr-tag {
  display: inline-block;
  background: var(--lv-light);
  color: var(--lv-color);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
}
.lp-pro .lp-cefr-tag { border-radius: 3px; }

.lp-level-code {
  font-family: 'Fredoka', sans-serif;
  font-size: 52px;
  font-weight: 700;
  color: var(--lv-color);
  line-height: 1;
}
.lp-pro .lp-level-code { font-family: 'Source Serif 4', serif; }

.lp-level-name {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #2B2330;
  margin-top: -4px;
}
.lp-pro .lp-level-name { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.lp-description {
  font-size: 13px;
  font-weight: 500;
  color: #5A4E6A;
  line-height: 1.65;
}
.lp-pro .lp-description { color: #6B6458; }

.lp-hero-right { display: flex; flex-direction: column; gap: 14px; }

.lp-goals-label, .lp-units-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #A89BAA;
}
.lp-pro .lp-goals-label, .lp-pro .lp-units-label { color: #8A8070; }

.lp-goals { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.lp-goal {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 13px;
  font-weight: 600;
  color: #3D3552;
  line-height: 1.45;
}
.lp-goal svg { flex-shrink: 0; margin-top: 2px; color: var(--lv-color); }
.lp-pro .lp-goal { color: #1B2A4A; }

.lp-units-row { display: flex; flex-wrap: wrap; gap: 6px; }
.lp-unit-chip {
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  color: #5A4E6A;
  padding: 3px 10px;
}
.lp-pro .lp-unit-chip { border-radius: 3px; background: #fff; border-color: #DEDAD0; color: #6B6458; }

.lp-tracks-section { padding: 36px 48px 60px; }
.lp-tracks-hd { margin-bottom: 20px; }
.lp-tracks-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #2B2330;
  margin-bottom: 4px;
}
.lp-pro .lp-tracks-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.lp-tracks-sub { font-size: 13px; color: #8A7B8A; font-weight: 500; }

.lp-tracks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 800px) { .lp-tracks-grid { grid-template-columns: 1fr; } }

.lp-track-card {
  background: var(--tr-bg);
  border-radius: 14px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  border: 1.5px solid rgba(0,0,0,0.06);
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 4px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.07);
  outline: none;
}
.lp-track-card:hover {
  transform: translateY(-3px);
  border-color: var(--tr-accent);
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.12);
}
.lp-track-card:focus-visible { box-shadow: 0 0 0 3px var(--tr-accent); }
.lp-pro .lp-track-card { border-radius: 4px; background: #fff; border: 1px solid #DEDAD0; }

.lp-track-top { display: flex; align-items: center; gap: 14px; }
.lp-track-icon { flex-shrink: 0; }
.lp-track-label {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2B2330;
}
.lp-pro .lp-track-label { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.lp-track-age {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--tr-accent);
}
.lp-track-tagline {
  font-size: 11px;
  font-weight: 700;
  color: var(--tr-accent);
  background: rgba(255,255,255,0.6);
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
}
.lp-pro .lp-track-tagline { border-radius: 3px; }
.lp-track-desc {
  font-size: 13px;
  font-weight: 500;
  color: #5A4E6A;
  line-height: 1.6;
  flex: 1;
}
.lp-pro .lp-track-desc { color: #6B6458; }
.lp-track-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 4px;
}
`;

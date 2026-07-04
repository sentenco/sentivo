import React, { useEffect } from "react";

const LEVELS = [
  {
    code: "A1",
    name: "Beginner",
    color: "coral",
    accent: "#D85A30",
    light: "#FAECE7",
    for: "Learners starting English with little or no previous study.",
    goals: [
      "Use basic greetings and introductions",
      "Give simple personal information — name, age, country",
      "Talk in simple sentences about family, daily routine, and home",
    ],
  },
  {
    code: "A2",
    name: "Elementary",
    color: "teal",
    accent: "#0F6E56",
    light: "#E1F5EE",
    for: "Learners who can handle very basic English and want to expand everyday communication.",
    goals: [
      "Talk about daily routines and simple past events",
      "Handle common situations like shopping, eating out, and travel",
      "Describe people and places in simple linked sentences",
    ],
  },
  {
    code: "B1",
    name: "Intermediate",
    color: "lavender",
    accent: "#534AB7",
    light: "#EEEDFE",
    for: "Learners who can manage basic conversations and want to become more independent.",
    goals: [
      "Manage everyday conversations with some detail and opinion",
      "Handle common work and school situations in English",
      "Discuss plans, preferences, and experiences with reasons",
    ],
  },
  {
    code: "B2",
    name: "Upper Intermediate",
    color: "gold",
    accent: "#BA7517",
    light: "#FAEEDA",
    for: "Learners who communicate effectively and want to refine accuracy and complexity.",
    goals: [
      "Participate in extended discussions on a variety of topics",
      "Understand and summarize longer texts and media",
      "Present arguments, advantages and disadvantages, and detailed opinions",
    ],
  },
  {
    code: "C1",
    name: "Advanced",
    color: "teal",
    accent: "#0F6E56",
    light: "#E1F5EE",
    for: "Learners who use English for study, work, or professional communication.",
    goals: [
      "Engage with complex, nuanced topics and texts",
      "Produce well-structured, detailed spoken and written work",
      "Adapt language appropriately to formal and informal contexts",
    ],
  },
  {
    code: "C2",
    name: "Proficient",
    color: "lavender",
    accent: "#534AB7",
    light: "#EEEDFE",
    for: "Learners who operate at near-native level and aim for very high precision and nuance.",
    goals: [
      "Use English flexibly and confidently in any context",
      "Interpret and produce sophisticated texts and discourse",
      "Control tone, style, and nuance at a very fine level",
    ],
  },
];

const TRACKS = [
  {
    key: "kids",
    label: "Kids",
    age: "Ages 6–12",
    desc: "Visual, game-based lessons focusing on school, family, and everyday life. Short activities, lots of encouragement.",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="14" r="7" />
        <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        <path d="M14 10c1-3 5-5 8-3" />
      </svg>
    ),
    bg: "#FFF3D6",
    accent: "#D85A30",
  },
  {
    key: "teens",
    label: "Teens",
    age: "Ages 13–17",
    desc: "Topics around school, friends, social media, and future plans. Real conversations, relatable content.",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="13" r="7" />
        <path d="M7 36c0-7.2 5.8-13 13-13s13 5.8 13 13" />
        <path d="M20 26v6M17 30h6" />
      </svg>
    ),
    bg: "#F4F0FF",
    accent: "#534AB7",
  },
  {
    key: "adults",
    label: "Adults",
    age: "Ages 18+",
    desc: "Practical language for work, study, and daily life. Professional tone, goal-oriented lessons.",
    icon: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="12" r="7" />
        <path d="M7 36c0-7.2 5.8-13 13-13s13 5.8 13 13" />
        <rect x="14" y="22" width="12" height="8" rx="2" />
        <path d="M17 26h6" />
      </svg>
    ),
    bg: "#E1F5EE",
    accent: "#0F6E56",
  },
];

export default function CurriculumOverview({ onSelectLevel, isPro = false }) {
  useEffect(() => {
    const styleId = "co-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = styles;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className={`co-wrap${isPro ? " co-pro" : ""}`}>
      {/* ── Header ── */}
      <div className="co-hero">
        <div className="co-hero-inner">
          <div className="co-hero-badge">CEFR A1 → C2</div>
          <h1 className="co-hero-title">Sentivo Curriculum</h1>
          <p className="co-hero-sub">
            Built on the Common European Framework of Reference for Languages —
            six levels, three age tracks, one-on-one online lessons.
          </p>
        </div>
      </div>

      <div className="co-body">
        {/* ── Mission & Vision ── */}
        <div className="co-mv-row">
          <div className="co-mv-card co-mv-card--mission">
            <div className="co-mv-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              Mission
            </div>
            <p className="co-mv-text">
              Sentivo helps young learners build real-world English confidence
              through simple, structured one-on-one online lessons. Our
              curriculum focuses on everyday communication so learners can use
              English at school, online, and in daily life.
            </p>
          </div>
          <div className="co-mv-card co-mv-card--vision">
            <div className="co-mv-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>
              Vision
            </div>
            <p className="co-mv-text">
              We envision a generation of learners who can express themselves
              clearly and comfortably in English — starting from the basics and
              growing step by step. Sentivo makes high-quality ESL learning
              accessible, supportive, and enjoyable for students and teachers
              alike.
            </p>
          </div>
        </div>

        {/* ── Program Overview ── */}
        <div className="co-section-hd">
          <h2 className="co-section-title">Program Overview</h2>
          <p className="co-section-sub">
            The same core language areas revisited at every level — with
            increasing complexity as learners grow.
          </p>
        </div>

        <div className="co-levels-grid">
          {LEVELS.map((lv) => (
            <div
              key={lv.code}
              className="co-level-card"
              style={{ "--lv-accent": lv.accent, "--lv-light": lv.light }}
              onClick={() => onSelectLevel && onSelectLevel(lv.code)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelectLevel && onSelectLevel(lv.code)}
            >
              <div className="co-level-top">
                <span className="co-level-code">{lv.code}</span>
                <span className="co-level-name">{lv.name}</span>
              </div>
              <p className="co-level-for">{lv.for}</p>
              <ul className="co-level-goals">
                {lv.goals.map((g, i) => (
                  <li key={i} className="co-level-goal">
                    <span className="co-level-dot" />
                    {g}
                  </li>
                ))}
              </ul>
              <div className="co-level-cta">
                View lessons
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>

        {/* ── Age Tracks ── */}
        <div className="co-section-hd" style={{ marginTop: 48 }}>
          <h2 className="co-section-title">Age Tracks</h2>
          <p className="co-section-sub">
            Every CEFR level is available in three age-appropriate tracks.
            Same goals, different topics and activities.
          </p>
        </div>

        <div className="co-tracks-row">
          {TRACKS.map((t) => (
            <div
              key={t.key}
              className="co-track-card"
              style={{ "--tr-bg": t.bg, "--tr-accent": t.accent }}
            >
              <div className="co-track-icon" style={{ color: t.accent }}>
                {t.icon}
              </div>
              <div className="co-track-label">{t.label}</div>
              <div className="co-track-age">{t.age}</div>
              <p className="co-track-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.co-wrap {
  min-height: 100%;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  font-family: 'Quicksand', sans-serif;
}
.co-pro { background: #F7F5EF; }

.co-hero {
  padding: 40px 48px 36px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.co-hero-badge {
  display: inline-block;
  background: #FF7A59;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.co-pro .co-hero-badge { background: #1B2A4A; border-radius: 3px; }
.co-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 34px;
  font-weight: 700;
  color: #2B2330;
  margin-bottom: 8px;
}
.co-pro .co-hero-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.co-hero-sub {
  font-size: 14px;
  color: #8A7B8A;
  max-width: 560px;
  line-height: 1.6;
  font-weight: 500;
}
.co-pro .co-hero-sub { color: #6B6458; }

.co-body { padding: 36px 48px 60px; }

.co-mv-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 44px; }
@media (max-width: 700px) { .co-mv-row { grid-template-columns: 1fr; } }

.co-mv-card {
  border-radius: 14px;
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.co-mv-card--mission { background: #FF7A59; }
.co-mv-card--vision { background: #1B2A4A; }
.co-pro .co-mv-card--mission { background: #D85A30; }
.co-pro .co-mv-card--vision { background: #1B2A4A; border-radius: 4px; }

.co-mv-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
}
.co-mv-text {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.92);
  line-height: 1.7;
}

.co-section-hd { margin-bottom: 20px; }
.co-section-title {
  font-family: 'Fredoka', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #2B2330;
  margin-bottom: 4px;
}
.co-pro .co-section-title { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.co-section-sub { font-size: 13px; color: #8A7B8A; font-weight: 500; }
.co-pro .co-section-sub { color: #6B6458; }

.co-levels-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
@media (max-width: 900px) { .co-levels-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .co-levels-grid { grid-template-columns: 1fr; } }

.co-level-card {
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  border: 1.5px solid rgba(0,0,0,0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  box-shadow: 0 4px 0 rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.07);
  outline: none;
}
.co-level-card:hover {
  transform: translateY(-3px);
  border-color: var(--lv-accent);
  box-shadow: 0 8px 0 rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.12);
}
.co-level-card:focus-visible { box-shadow: 0 0 0 3px var(--lv-accent); }
.co-pro .co-level-card { border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); border: 1px solid #DEDAD0; }

.co-level-top { display: flex; align-items: center; gap: 10px; }
.co-level-code {
  font-family: 'Fredoka', sans-serif;
  font-size: 15px;
  font-weight: 700;
  background: var(--lv-light);
  color: var(--lv-accent);
  padding: 4px 10px;
  border-radius: 999px;
}
.co-pro .co-level-code { border-radius: 3px; font-family: 'Inter', sans-serif; }
.co-level-name {
  font-family: 'Fredoka', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2B2330;
}
.co-pro .co-level-name { font-family: 'Source Serif 4', serif; color: #1B2A4A; }

.co-level-for {
  font-size: 12px;
  color: #8A7B8A;
  line-height: 1.55;
  font-weight: 500;
}
.co-pro .co-level-for { color: #6B6458; }

.co-level-goals { list-style: none; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.co-level-goal {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #3D3552;
  line-height: 1.45;
}
.co-pro .co-level-goal { color: #1B2A4A; font-family: 'Inter', sans-serif; }
.co-level-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--lv-accent);
  flex-shrink: 0;
  margin-top: 5px;
}

.co-level-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--lv-accent);
  margin-top: 4px;
}

.co-tracks-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
@media (max-width: 700px) { .co-tracks-row { grid-template-columns: 1fr; } }

.co-track-card {
  background: var(--tr-bg);
  border-radius: 14px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1.5px solid rgba(0,0,0,0.06);
}
.co-pro .co-track-card { border-radius: 4px; background: #fff; border: 1px solid #DEDAD0; }

.co-track-icon { margin-bottom: 4px; }
.co-track-label {
  font-family: 'Fredoka', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #2B2330;
}
.co-pro .co-track-label { font-family: 'Source Serif 4', serif; color: #1B2A4A; }
.co-track-age {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--tr-accent);
}
.co-track-desc {
  font-size: 13px;
  font-weight: 500;
  color: #5A4E6A;
  line-height: 1.6;
}
.co-pro .co-track-desc { color: #6B6458; }
`;

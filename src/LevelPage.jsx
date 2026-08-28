import React, { useEffect } from "react";

const LEVEL_DATA = {
  A1: {
    name: "Foundation",
    accent: "coral",
    color: "#FF6B4A",
    light: "#FFE6DD",
    cefr: "Kids · CEFR A1",
    banner: "/curriculum/a1-banner.png",
    description:
      "The starting point for young learners. A1 builds two things at once: the alphabet and phonics needed to read and write simple words, and the everyday phrases needed to start speaking English right away.",
    goals: [
      "Recognize all 26 letters and basic phonics sounds",
      "Read and write simple words like cat, dog, and pen",
      "Use greetings, numbers, colors, and simple sentences like \"I am\" and \"I like\"",
    ],
  },
  A2: {
    name: "Growing Up",
    accent: "navy",
    color: "#1B2A4A",
    light: "#FFE6DD",
    cefr: "Kids · CEFR A2",
    banner: "/curriculum/a2-banner.png",
    description:
      "Once the alphabet and phonics are secure, A2 expands into longer, connected sentences and more independent everyday situations, with the foundation from A1 as the base.",
    goals: [
      "Talk about past events using simple past tense",
      "Handle everyday situations like shopping and finding places",
      "Describe routines, plans, and feelings in connected sentences",
    ],
  },
};

const UNITS = {
  A1: [
    { num: 1, title: "Hello, Alphabet!", focus: "Greetings, \"What's your name?\"", thread: "Letters A to I" },
    { num: 2, title: "Numbers & Letters", focus: "Counting 1 to 10", thread: "Letters J to R, letter sounds" },
    { num: 3, title: "Colors & Sounds", focus: "Colors, \"This is a...\"", thread: "Letters S to Z, first blending" },
    { num: 4, title: "All About Me", focus: "Name, age, feelings, \"I am...\"", thread: "Simple words: cat, dog, pen" },
    { num: 5, title: "My Family", focus: "Family members, \"This is my...\"", thread: "Sight words: mom, dad, sister" },
    { num: 6, title: "My Body", focus: "Body parts, simple descriptions", thread: "Word family: at, og" },
    { num: 7, title: "My School", focus: "Classroom objects and language", thread: "Sight words: pen, book, bag" },
    { num: 8, title: "Food I Like", focus: "Food vocabulary, \"I like / I don't like\"", thread: "Word family: in, op" },
    { num: 9, title: "Animals", focus: "Animal names, \"It's a...\"", thread: "Sight words: cat, dog, big, small" },
    { num: 10, title: "My House", focus: "Rooms, \"It's in the...\"", thread: "Word family: ed, ig" },
    { num: 11, title: "Toys & Play", focus: "Toys, simple present (\"I play...\")", thread: "Sight words: toy, ball, fun" },
    { num: 12, title: "My Day", focus: "Daily routine, review", thread: "Cumulative phonics review" },
  ],
  A2: [
    { num: 1, title: "My Weekend", focus: "Talking about what you did", thread: "Past simple, regular verbs" },
    { num: 2, title: "Yesterday & Today", focus: "Recounting recent events", thread: "Past simple, irregular verbs" },
    { num: 3, title: "Weather & Seasons", focus: "Describing weather and seasons", thread: "\"There is / there are\"" },
    { num: 4, title: "Around Town", focus: "Places in the community", thread: "Prepositions of place" },
    { num: 5, title: "Let's Go Shopping", focus: "Asking for and buying things", thread: "Quantities and prices" },
    { num: 6, title: "Jobs People Do", focus: "Community helpers", thread: "\"He / she is a...\"" },
    { num: 7, title: "My Favorite Story", focus: "Retelling a story", thread: "Narrative sequencing" },
    { num: 8, title: "Sports & Hobbies", focus: "Abilities, likes and dislikes", thread: "\"I can / can't...\", because" },
    { num: 9, title: "How Do You Feel?", focus: "Emotions, simple problem solving", thread: "Giving reasons and advice" },
    { num: 10, title: "Helping at Home", focus: "Chores and requests", thread: "\"I have to...\", \"Can you...?\"" },
    { num: 11, title: "My Future Plans", focus: "Talking about intentions", thread: "\"Going to\" future" },
    { num: 12, title: "All About My Year", focus: "Review and capstone", thread: "Cumulative grammar review" },
  ],
};

export default function LevelPage({ level = "A1" }) {
  const data = LEVEL_DATA[level] || LEVEL_DATA.A1;
  const units = UNITS[level] || UNITS.A1;

  useEffect(() => {
    const styleId = "lp-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  return (
    <div className="lp-wrap">
      <div className="lp-blob lp-blob--a" />
      <div className="lp-blob lp-blob--b" />

      <div className="lp-stage">
        <div className="lp-topbar">
          <div className="lp-breadcrumb">
            Kids Curriculum <span className="lp-crumb-sep">&rsaquo;</span> <span style={{ color: data.color }}>{level} &middot; {data.name}</span>
          </div>
        </div>

        <div
          className="lp-banner-hero"
          style={data.banner ? { backgroundImage: `url(${data.banner})` } : { background: data.light }}
        >
          <div className="lp-cefr-tag" style={{ color: data.color, background: "#fff" }}>{data.cefr}</div>
          <div className="lp-banner-title">
            <span className="lp-level-code" style={{ color: data.color }}>{level}</span>
            <span className="lp-level-name">{data.name}</span>
          </div>
          <p className="lp-description">{data.description}</p>
        </div>

        <div className="lp-stats-strip">
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7c-1.6-1.1-4.2-1.6-6.5-1.2v12.5c2.3-.4 4.9.1 6.5 1.2m0-12.5c1.6-1.1 4.2-1.6 6.5-1.2v12.5c-2.3-.4-4.9.1-6.5 1.2M12 7v11"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">12 Units</div>
              <div className="lp-stat-sub">Each with 5 lessons plus a summative test</div>
            </div>
          </div>
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--coral">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.7" fill="currentColor"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">Practical skills</div>
              <div className="lp-stat-sub">Focus on real-life communication</div>
            </div>
          </div>
          <div className="lp-stat-item">
            <div className="lp-stat-icon lp-stat-icon--lav">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.5 2 3.5 2 3.5-2 3.5-2"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.9" fill="currentColor" stroke="none"/></svg>
            </div>
            <div>
              <div className="lp-stat-title">Young learners</div>
              <div className="lp-stat-sub">Fun, engaging, and age-appropriate</div>
            </div>
          </div>
        </div>

        <div className="lp-goals-section">
          <div className="lp-goals-label">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>
            Can-do goals
          </div>
          <ul className="lp-goals">
            {data.goals.map((g, i) => (
              <li key={i} className="lp-goal">
                <span className="lp-goal-check" style={{ background: data.color }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-units-section">
          <div className="lp-units-hd">
            <h2 className="lp-units-title">12 units</h2>
            <p className="lp-units-sub">Each unit has 5 teaching lessons plus a summative test, blending vocabulary, grammar, reading, writing, and speaking together in every lesson.</p>
          </div>
          <div className="lp-units-grid">
            {units.map((u) => (
              <div key={u.num} className="lp-unit-card">
                <div className="lp-unit-top">
                  <span className="lp-unit-circle" style={{ background: data.color }}>{u.num}</span>
                  <span className="lp-unit-soon">Coming soon</span>
                </div>
                <h3 className="lp-unit-title">{u.title}</h3>
                <p className="lp-unit-focus">{u.focus}</p>
                <div className="lp-unit-foot">
                  <span className="lp-unit-thread" style={{ color: data.color }}>{u.thread}</span>
                  <button type="button" className="lp-unit-open" disabled>
                    Open
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.lp-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.lp-wrap * { box-sizing: border-box; }

.lp-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.lp-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.lp-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.lp-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }

.lp-topbar { margin-bottom: 26px; }
.lp-breadcrumb { font-size: 12px; font-weight: 600; color: #6B6E96; }
.lp-crumb-sep { color: #C7C4DC; }

.lp-banner-hero {
  border-radius: 20px;
  padding: 28px 32px;
  margin-bottom: 18px;
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 200px;
  justify-content: center;
}
.lp-cefr-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(27,42,74,0.1);
}

.lp-banner-title { display: flex; align-items: baseline; gap: 12px; max-width: 60%; }
.lp-level-code {
  font-family: 'Source Serif 4', serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
}
.lp-level-name {
  font-family: 'Source Serif 4', serif;
  font-size: 26px;
  font-weight: 600;
  color: #23264A;
}
.lp-description { font-size: 13px; font-weight: 500; color: #4A5578; line-height: 1.55; max-width: 55%; }
@media (max-width: 700px) { .lp-banner-title, .lp-description { max-width: 100%; } }

.lp-stats-strip {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 20px 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 26px;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
@media (max-width: 700px) { .lp-stats-strip { grid-template-columns: 1fr; } }
.lp-stat-item { display: flex; align-items: center; gap: 12px; }
.lp-stat-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.lp-stat-icon--blue { background: #E4E9F5; color: #4A5578; }
.lp-stat-icon--coral { background: #FFE6DD; color: #FF6B4A; }
.lp-stat-icon--lav { background: #EEE9F7; color: #7A5FA8; }
.lp-stat-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px; color: #1B2A4A; }
.lp-stat-sub { font-size: 11px; font-weight: 500; color: #6B6E96; margin-top: 1px; line-height: 1.3; }

.lp-goals-section { margin-bottom: 26px; }
.lp-goals-label { display: flex; align-items: center; gap: 7px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #1B2A4A; margin-bottom: 12px; }
.lp-goals {
  list-style: none; margin: 0; padding: 0;
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  box-shadow: 0 4px 16px rgba(27,42,74,0.06);
}
.lp-goal { display: flex; align-items: center; gap: 12px; font-size: 13px; font-weight: 600; color: #23264A; padding: 14px 22px; border-bottom: 1px solid #F3F0FB; }
.lp-goal:last-child { border-bottom: none; }
.lp-goal-check { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

.lp-units-hd { margin-bottom: 20px; max-width: 640px; }
.lp-units-title { font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 600; color: #23264A; margin-bottom: 6px; }
.lp-units-sub { font-size: 13px; color: #6B6E96; font-weight: 500; line-height: 1.6; }

.lp-units-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 900px) { .lp-units-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .lp-units-grid { grid-template-columns: 1fr; } }

.lp-unit-card {
  background: #fff;
  border-radius: 14px;
  padding: 18px 18px 16px;
  border: 1px solid #EDE6F4;
  box-shadow: 0 4px 14px rgba(27,42,74,0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.lp-unit-card:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(27,42,74,0.09); }

.lp-unit-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.lp-unit-circle {
  width: 30px; height: 30px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 13.5px;
  flex-shrink: 0;
}
.lp-unit-soon { font-size: 9.5px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }

.lp-unit-title { font-family: 'Source Serif 4', serif; font-size: 15.5px; font-weight: 600; color: #23264A; margin: 0 0 5px; }
.lp-unit-focus { font-size: 12px; font-weight: 500; color: #6B6E96; line-height: 1.5; margin: 0 0 14px; }

.lp-unit-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid #F3F0FB;
}
.lp-unit-thread { font-size: 10px; font-weight: 700; line-height: 1.3; }
.lp-unit-open {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11.5px;
  color: #A6A2C0; background: #F7F5FB; border: 1px solid #EDE6F4;
  border-radius: 999px; padding: 5px 12px;
  cursor: not-allowed; flex-shrink: 0;
}
`;

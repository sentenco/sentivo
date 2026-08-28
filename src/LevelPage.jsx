import React, { useEffect } from "react";

const LEVEL_DATA = {
  A1: {
    name: "Foundation",
    accent: "coral",
    color: "#FF6B4A",
    light: "#FFE6DD",
    cefr: "Kids · CEFR A1",
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

        <div className="lp-hero">
          <div className={`lp-hero-card lp-hero-card--${data.accent}`}>
            <div className="lp-cefr-tag" style={{ color: data.color, background: data.light }}>{data.cefr}</div>
            <div className="lp-level-code" style={{ color: data.color }}>{level}</div>
            <div className="lp-level-name">{data.name}</div>
            <p className="lp-description">{data.description}</p>
          </div>
          <div className={`lp-hero-card lp-hero-card--${data.accent}`}>
            <div className="lp-goals-label">Can-do goals</div>
            <ul className="lp-goals">
              {data.goals.map((g, i) => (
                <li key={i} className="lp-goal">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {g}
                </li>
              ))}
            </ul>
          </div>
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
                  <span className="lp-unit-num" style={{ color: data.color, background: data.light }}>Unit {u.num}</span>
                  <span className="lp-unit-soon">Coming soon</span>
                </div>
                <h3 className="lp-unit-title">{u.title}</h3>
                <p className="lp-unit-focus">{u.focus}</p>
                <span className="lp-unit-thread" style={{ color: data.color }}>{u.thread}</span>
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

.lp-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 26px;
}
@media (max-width: 800px) { .lp-hero { grid-template-columns: 1fr; } }

.lp-hero-card {
  background: #fff;
  border: 1px solid #EDE6F4;
  border-radius: 16px;
  padding: 20px 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(27,42,74,0.07);
}
.lp-hero-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; }
.lp-hero-card--coral::before { background: #FF6B4A; }
.lp-hero-card--navy::before { background: #1B2A4A; }

.lp-hero-card:first-child { display: flex; flex-direction: column; gap: 5px; }
.lp-cefr-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 9px;
  border-radius: 6px;
  align-self: flex-start;
  margin-bottom: 2px;
}

.lp-level-code {
  font-family: 'Source Serif 4', serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
}

.lp-level-name {
  font-family: 'Source Serif 4', serif;
  font-size: 15px;
  font-weight: 600;
  color: #23264A;
}

.lp-description { font-size: 12px; font-weight: 500; color: #6B6E96; line-height: 1.5; }

.lp-hero-card:last-child { display: flex; flex-direction: column; gap: 8px; }
.lp-goals-label { font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6B6E96; }
.lp-goals { list-style: none; display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; }
.lp-goal { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; font-weight: 600; color: #23264A; line-height: 1.4; }
.lp-goal svg { flex-shrink: 0; margin-top: 2px; width: 13px; height: 13px; }

.lp-units-hd { margin-bottom: 20px; max-width: 640px; }
.lp-units-title { font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 600; color: #23264A; margin-bottom: 6px; }
.lp-units-sub { font-size: 13px; color: #6B6E96; font-weight: 500; line-height: 1.6; }

.lp-units-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
@media (max-width: 900px) { .lp-units-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .lp-units-grid { grid-template-columns: 1fr; } }

.lp-unit-card { background: #fff; border-radius: 12px; padding: 16px 17px; border: 1px solid #EDE6F4; }

.lp-unit-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.lp-unit-num { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; padding: 3px 9px; border-radius: 6px; }
.lp-unit-soon { font-size: 9.5px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }

.lp-unit-title { font-family: 'Source Serif 4', serif; font-size: 15px; font-weight: 600; color: #23264A; margin: 0 0 4px; }
.lp-unit-focus { font-size: 12px; font-weight: 500; color: #6B6E96; line-height: 1.5; margin: 0 0 8px; }
.lp-unit-thread { font-size: 10.5px; font-weight: 700; }
`;

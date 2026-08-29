import React, { useEffect } from "react";

const UNIT_COLOR = { A1: { accent: "#FF6B4A", light: "#FFE6DD" }, A2: { accent: "#1B2A4A", light: "#FFE6DD" } };

function buildLessons(unitNum, items) {
  const [l1, l2, l3] = items;
  return [
    { num: 1, title: l1.title, focus: l1.focus },
    { num: 2, title: l2.title, focus: l2.focus },
    { num: 3, title: l3.title, focus: l3.focus },
    { num: 4, title: "Let's Review!", focus: `Everything from ${l1.short}, ${l2.short}, and ${l3.short}` },
    { num: 5, title: "Show What You Know!", focus: "Free practice, no reveal" },
    { num: 6, title: `Unit ${unitNum} Test`, focus: "Summative check of the whole unit", isTest: true },
  ];
}

const UNITS = {
  A1: {
    1: {
      title: "Hello, Alphabet!",
      focus: "Greetings, \"What's your name?\"",
      thread: "Letters A to I",
      lessons: buildLessons(1, [
        { title: "Hello, Alphabet!", focus: "Letters A, B, C. \"Hello! My name is...\"", short: "A-C" },
        { title: "More Letters!", focus: "Letters D, E, F. \"How are you?\"", short: "D-F" },
        { title: "Almost There!", focus: "Letters G, H, I. \"Nice to meet you.\"", short: "G-I" },
      ]),
    },
    2: {
      title: "Numbers & Letters",
      focus: "Counting 1 to 10",
      thread: "Letters J to R, letter sounds",
      lessons: buildLessons(2, [
        { title: "Counting Begins!", focus: "Numbers 1 to 5, Letters J, K, L", short: "1-5" },
        { title: "Count On!", focus: "Numbers 6 to 10, Letters M, N, O", short: "6-10" },
        { title: "Letters Keep Going!", focus: "Letters P, Q, R. \"How many?\"", short: "P-R" },
      ]),
    },
    3: {
      title: "Colors & Sounds",
      focus: "Colors, \"This is a...\"",
      thread: "Letters S to Z, first blending",
      lessons: buildLessons(3, [
        { title: "Colorful Letters!", focus: "Letters S, T, U. First colors", short: "S-U" },
        { title: "More Colors!", focus: "Letters V, W, X. More colors", short: "V-X" },
        { title: "Blending Begins!", focus: "Letters Y, Z. First blending", short: "Y-Z" },
      ]),
    },
    4: {
      title: "All About Me",
      focus: "Name, age, feelings, \"I am...\"",
      thread: "Simple words: cat, dog, pen",
      lessons: buildLessons(4, [
        { title: "This Is Me!", focus: "\"I am...\", the word cat", short: "\"I am\"" },
        { title: "How Old Are You?", focus: "Age numbers, the word dog", short: "ages" },
        { title: "How Do You Feel?", focus: "Feelings words, the word pen", short: "feelings" },
      ]),
    },
    5: {
      title: "My Family",
      focus: "Family members, \"This is my...\"",
      thread: "Sight words: mom, dad, sister",
      lessons: buildLessons(5, [
        { title: "My Family Begins!", focus: "Mom, dad. \"This is my...\"", short: "mom/dad" },
        { title: "More Family!", focus: "Sister, brother", short: "siblings" },
        { title: "Everyone Together!", focus: "Talking about a family photo", short: "family talk" },
      ]),
    },
    6: {
      title: "My Body",
      focus: "Body parts, simple descriptions",
      thread: "Word family: at, og",
      lessons: buildLessons(6, [
        { title: "Head to Toe!", focus: "Body parts, the -at word family", short: "-at" },
        { title: "Let's Describe!", focus: "More body parts, the -og word family", short: "-og" },
        { title: "Simple Sentences!", focus: "Describing with body words", short: "describing" },
      ]),
    },
    7: {
      title: "My School",
      focus: "Classroom objects and language",
      thread: "Sight words: pen, book, bag",
      lessons: buildLessons(7, [
        { title: "In My Bag!", focus: "Pen, book, bag", short: "bag items" },
        { title: "Classroom Words!", focus: "Desk, chair, board", short: "classroom" },
        { title: "Classroom Talk!", focus: "Simple classroom instructions", short: "instructions" },
      ]),
    },
    8: {
      title: "Food I Like",
      focus: "Food vocabulary, \"I like / I don't like\"",
      thread: "Word family: in, op",
      lessons: buildLessons(8, [
        { title: "Yummy Food!", focus: "Food words, the -in word family", short: "-in" },
        { title: "I Like It!", focus: "\"I like...\", the -op word family", short: "-op" },
        { title: "I Don't Like It!", focus: "\"I don't like...\"", short: "dislikes" },
      ]),
    },
    9: {
      title: "Animals",
      focus: "Animal names, \"It's a...\"",
      thread: "Sight words: cat, dog, big, small",
      lessons: buildLessons(9, [
        { title: "Animal Friends!", focus: "Cat, dog. \"It's a...\"", short: "pets" },
        { title: "Big and Small!", focus: "Describing size", short: "size" },
        { title: "At the Zoo!", focus: "More animal names", short: "zoo animals" },
      ]),
    },
    10: {
      title: "My House",
      focus: "Rooms, \"It's in the...\"",
      thread: "Word family: ed, ig",
      lessons: buildLessons(10, [
        { title: "Around the House!", focus: "Rooms, the -ed word family", short: "-ed" },
        { title: "Where Is It?", focus: "\"It's in the...\", the -ig word family", short: "-ig" },
        { title: "My Favorite Room!", focus: "Describing a room", short: "descriptions" },
      ]),
    },
    11: {
      title: "Toys & Play",
      focus: "Toys, simple present (\"I play...\")",
      thread: "Sight words: toy, ball, fun",
      lessons: buildLessons(11, [
        { title: "My Toys!", focus: "Toy, ball", short: "toys" },
        { title: "Let's Play!", focus: "\"I play...\", fun", short: "\"I play\"" },
        { title: "Playtime Fun!", focus: "More play verbs", short: "play verbs" },
      ]),
    },
    12: {
      title: "My Day",
      focus: "Daily routine, review",
      thread: "Cumulative phonics review",
      lessons: buildLessons(12, [
        { title: "Morning Time!", focus: "Morning routine words", short: "morning" },
        { title: "Afternoon and Night!", focus: "The rest of the day", short: "afternoon/night" },
        { title: "My Whole Day!", focus: "Full daily routine practice", short: "full day" },
      ]),
    },
  },
  A2: {
    1: {
      title: "My Weekend",
      focus: "Talking about what you did",
      thread: "Past simple, regular verbs",
      lessons: buildLessons(1, [
        { title: "What Did You Do?", focus: "Past simple: played, watched", short: "regular verbs" },
        { title: "More Yesterday!", focus: "Past simple: walked, cooked", short: "more verbs" },
        { title: "My Weekend Story!", focus: "Connecting past events", short: "connecting events" },
      ]),
    },
    2: {
      title: "Yesterday & Today",
      focus: "Recounting recent events",
      thread: "Past simple, irregular verbs",
      lessons: buildLessons(2, [
        { title: "Irregular Surprises!", focus: "went, ate, saw", short: "irregular verbs" },
        { title: "More Irregulars!", focus: "had, did, made", short: "more irregulars" },
        { title: "Yesterday's Story!", focus: "Connecting irregular verbs", short: "connecting events" },
      ]),
    },
    3: {
      title: "Weather & Seasons",
      focus: "Describing weather and seasons",
      thread: "\"There is / there are\"",
      lessons: buildLessons(3, [
        { title: "What's the Weather?", focus: "Weather words, \"There is...\"", short: "weather words" },
        { title: "Four Seasons!", focus: "Season names, \"There are...\"", short: "seasons" },
        { title: "Weather Talk!", focus: "Describing today's weather", short: "describing weather" },
      ]),
    },
    4: {
      title: "Around Town",
      focus: "Places in the community",
      thread: "Prepositions of place",
      lessons: buildLessons(4, [
        { title: "Places in Town!", focus: "Store, park. \"Next to...\"", short: "places" },
        { title: "Where Is It?", focus: "\"Behind...\", \"between...\"", short: "more prepositions" },
        { title: "Giving Directions!", focus: "Simple directions", short: "directions" },
      ]),
    },
    5: {
      title: "Let's Go Shopping",
      focus: "Asking for and buying things",
      thread: "Quantities and prices",
      lessons: buildLessons(5, [
        { title: "At the Store!", focus: "Shopping words, \"How much?\"", short: "shopping words" },
        { title: "Counting Money!", focus: "Prices and quantities", short: "prices" },
        { title: "Let's Buy Something!", focus: "Shopping roleplay", short: "roleplay" },
      ]),
    },
    6: {
      title: "Jobs People Do",
      focus: "Community helpers",
      thread: "\"He / she is a...\"",
      lessons: buildLessons(6, [
        { title: "What's Your Job?", focus: "Jobs, \"He is a...\"", short: "jobs" },
        { title: "More Jobs!", focus: "\"She is a...\", job duties", short: "job duties" },
        { title: "Community Helpers!", focus: "Talking about helpers", short: "helpers" },
      ]),
    },
    7: {
      title: "My Favorite Story",
      focus: "Retelling a story",
      thread: "Narrative sequencing",
      lessons: buildLessons(7, [
        { title: "Once Upon a Time!", focus: "Story words, \"first...\"", short: "\"first\"" },
        { title: "What Happened Next?", focus: "\"Then...\", \"after that...\"", short: "\"then/after\"" },
        { title: "The End!", focus: "\"Finally...\", wrapping up a story", short: "\"finally\"" },
      ]),
    },
    8: {
      title: "Sports & Hobbies",
      focus: "Abilities, likes and dislikes",
      thread: "\"I can / can't...\", because",
      lessons: buildLessons(8, [
        { title: "What Can You Do?", focus: "\"I can...\", sports words", short: "\"I can\"" },
        { title: "I Can't Do That!", focus: "\"I can't...\", hobbies", short: "\"I can't\"" },
        { title: "Because I Like It!", focus: "Giving reasons with because", short: "reasons" },
      ]),
    },
    9: {
      title: "How Do You Feel?",
      focus: "Emotions, simple problem solving",
      thread: "Giving reasons and advice",
      lessons: buildLessons(9, [
        { title: "Feelings Words!", focus: "Happy, sad, worried", short: "feelings" },
        { title: "Why Do You Feel That Way?", focus: "Giving reasons", short: "reasons" },
        { title: "What Should You Do?", focus: "Giving simple advice", short: "advice" },
      ]),
    },
    10: {
      title: "Helping at Home",
      focus: "Chores and requests",
      thread: "\"I have to...\", \"Can you...?\"",
      lessons: buildLessons(10, [
        { title: "My Chores!", focus: "Chore words, \"I have to...\"", short: "chores" },
        { title: "Can You Help?", focus: "Making requests", short: "requests" },
        { title: "Helping Each Other!", focus: "Responding to requests", short: "responses" },
      ]),
    },
    11: {
      title: "My Future Plans",
      focus: "Talking about intentions",
      thread: "\"Going to\" future",
      lessons: buildLessons(11, [
        { title: "What Are You Going To Do?", focus: "Introducing \"going to\"", short: "\"going to\"" },
        { title: "My Plans for the Week!", focus: "More \"going to\" practice", short: "weekly plans" },
        { title: "Someday I Will!", focus: "Talking about future dreams", short: "future dreams" },
      ]),
    },
    12: {
      title: "All About My Year",
      focus: "Review and capstone",
      thread: "Cumulative grammar review",
      lessons: buildLessons(12, [
        { title: "Looking Back!", focus: "Past simple review", short: "past review" },
        { title: "Everyday Life!", focus: "Present and place review", short: "present review" },
        { title: "Looking Ahead!", focus: "Future plans review", short: "future review" },
      ]),
    },
  },
};

export default function UnitPage({ level = "A1", unitNum = "1", onBack }) {
  const unit = (UNITS[level] || {})[unitNum];
  const color = UNIT_COLOR[level] || UNIT_COLOR.A1;

  useEffect(() => {
    const styleId = "up-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  if (!unit) {
    return (
      <div className="up-wrap">
        <div className="up-stage">
          <p className="up-missing">This unit isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="up-wrap">
      <div className="up-blob up-blob--a" />
      <div className="up-blob up-blob--b" />

      <div className="up-stage">
        <button type="button" className="up-breadcrumb" onClick={onBack}>
          Kids Curriculum <span className="up-crumb-sep">&rsaquo;</span> {level} <span className="up-crumb-sep">&rsaquo;</span> <span style={{ color: color.accent }}>Unit {unitNum}</span>
        </button>

        <div className="up-hero" style={{ "--accent": color.accent }}>
          <span className="up-unit-tag" style={{ color: color.accent, background: color.light }}>Unit {unitNum}</span>
          <h1 className="up-title">{unit.title}</h1>
          <p className="up-focus">{unit.focus}</p>
          <span className="up-thread" style={{ color: color.accent }}>{unit.thread}</span>
        </div>

        <div className="up-lessons-hd">
          <h2 className="up-lessons-title">6 lessons</h2>
          <p className="up-lessons-sub">5 teaching lessons plus a summative test.</p>
        </div>

        <div className="up-lessons-grid">
          {unit.lessons.map((l) => (
            <div key={l.num} className={`up-lesson-card ${l.isTest ? "up-lesson-card--test" : ""}`} style={{ "--accent": color.accent }}>
              <span className="up-lesson-watermark">{l.isTest ? "T" : l.num}</span>
              <span className="up-lesson-label">{l.isTest ? "Test" : `Lesson ${l.num}`}</span>
              <span className="up-lesson-soon">Coming soon</span>
              <h3 className="up-lesson-title">{l.title}</h3>
              <p className="up-lesson-focus">{l.focus}</p>
              <div className="up-lesson-foot">
                <span className="up-lesson-tag">{l.isTest ? "Summative test" : "Lesson"}</span>
                <button type="button" className="up-lesson-open" disabled>
                  Open
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@500;600;700;800&display=swap');

.up-wrap {
  min-height: 100%;
  width: 100%;
  flex-shrink: 0;
  background: #FFFCF6;
  color: #23264A;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;
}
.up-wrap * { box-sizing: border-box; }

.up-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.up-blob--a { width: 420px; height: 420px; top: -180px; right: -140px; background: rgba(255,107,74,0.08); }
.up-blob--b { width: 460px; height: 460px; bottom: -220px; left: -160px; background: rgba(27,42,74,0.06); }

.up-stage { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; padding: 26px 40px 70px; }
.up-missing { text-align: center; color: #6B6E96; margin-top: 60px; }

.up-breadcrumb { display: block; background: none; border: none; cursor: pointer; padding: 0; font-size: 12px; font-weight: 600; color: #6B6E96; margin-bottom: 26px; text-align: left; }
.up-crumb-sep { color: #C7C4DC; }

.up-hero {
  background: #fff; border: 1px solid #EDE6F4; border-radius: 16px;
  padding: 26px 30px; margin-bottom: 30px; position: relative; overflow: hidden;
}
.up-hero::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: var(--accent); }
.up-unit-tag { display: inline-block; font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 12px; border-radius: 6px; margin-bottom: 10px; }
.up-title { font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 28px; color: #1B2A4A; margin: 0 0 8px; }
.up-focus { font-size: 13.5px; font-weight: 500; color: #6B6E96; margin: 0 0 10px; }
.up-thread { font-size: 12px; font-weight: 700; }

.up-lessons-hd { margin-bottom: 20px; }
.up-lessons-title { font-family: 'Source Serif 4', serif; font-size: 22px; font-weight: 600; color: #23264A; margin-bottom: 6px; }
.up-lessons-sub { font-size: 13px; color: #6B6E96; font-weight: 500; }

.up-lessons-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 900px) { .up-lessons-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .up-lessons-grid { grid-template-columns: 1fr; } }

.up-lesson-card {
  background: #fff; border-radius: 10px; padding: 16px 18px 14px 20px;
  border: 1px solid #EDE6F4; border-left: 4px solid var(--accent, #FF6B4A);
  box-shadow: 0 3px 10px rgba(27,42,74,0.05);
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.up-lesson-card:hover { transform: translateX(2px); box-shadow: 0 8px 18px rgba(27,42,74,0.08); }
.up-lesson-card--test { background: #FFFCF0; border-left-color: #C98A00; }

.up-lesson-watermark {
  position: absolute; top: -14px; right: -6px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 68px;
  color: var(--accent, #FF6B4A); opacity: 0.08; line-height: 1; pointer-events: none;
}

.up-lesson-label { display: block; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent, #FF6B4A); margin-bottom: 8px; }
.up-lesson-soon { position: absolute; top: 14px; right: 14px; font-size: 9px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }

.up-lesson-title { font-family: 'Source Serif 4', serif; font-size: 15px; font-weight: 600; color: #23264A; margin: 0 0 5px; position: relative; z-index: 1; }
.up-lesson-focus { font-size: 11.5px; font-weight: 500; color: #6B6E96; line-height: 1.5; margin: 0 0 12px; position: relative; z-index: 1; }

.up-lesson-foot { margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 8px; position: relative; z-index: 1; }
.up-lesson-tag { font-size: 9.5px; font-weight: 700; color: #A6A2C0; text-transform: uppercase; letter-spacing: 0.04em; }
.up-lesson-open {
  display: inline-flex; align-items: center; gap: 4px;
  font-family: 'Source Serif 4', serif; font-weight: 600; font-size: 11px;
  color: #A6A2C0; background: #F7F5FB; border: 1px solid #EDE6F4;
  border-radius: 999px; padding: 4px 11px; cursor: not-allowed; flex-shrink: 0;
}
`;

import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./forgeTracks";

const LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  homeworkcheck: "Homework Check",
  wordload: "Word Load",
  howitworks: "How It Works",
  picture: "Say the Picture",
  yourturn: "Your Turn",
  pushit: "Push It",
  scorecard: "Scorecard",
  homework: "Homework",
};

function sectionLabel(key, lesson) {
  if (key === "game") return lesson.gameLabel;
  return LABELS[key];
}

// Mirrors Forge.jsx's buildSlideTypes, but collapses every individual
// "Say the Picture" slide (pic-0, pic-1, ...) into one guide section --
// the teacher runs the same routine for each picture, so one script
// covers all of them instead of repeating it per word.
function buildGuideSections(lesson) {
  if (lesson.format === "picture") {
    const sections = ["cover", "warmup"];
    if (lesson.homeworkCheck) sections.push("homeworkcheck");
    sections.push("wordload", "picture", "yourturn", "pushit", "scorecard", "homework");
    return sections;
  }
  return ["cover", "warmup", "homeworkcheck", "wordload", "howitworks", "game", "yourturn", "pushit", "scorecard", "homework"];
}

function SlideSection({ num, sectionKey, label, entry }) {
  if (!entry) {
    return (
      <section className="fgg-section">
        <div className="fgg-section-head">
          <span className="fgg-section-num">{num}</span>
          <h2 className="fgg-section-title">{label}</h2>
        </div>
        <p className="fgg-empty">No guide notes for this slide yet.</p>
      </section>
    );
  }
  return (
    <section className="fgg-section">
      <div className="fgg-section-head">
        <span className="fgg-section-num">{num}</span>
        <h2 className="fgg-section-title">{label}</h2>
        {entry.timing && <span className="fgg-timing">⏱ {entry.timing}</span>}
      </div>
      {entry.goal && <p className="fgg-goal">{entry.goal}</p>}
      {entry.say && entry.say.length > 0 && (
        <div className="fgg-block fgg-block--say">
          <span className="fgg-block-label">Say</span>
          <div className="fgg-say-list">
            {entry.say.map((line, i) => (
              <p key={i} className="fgg-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {entry.do && entry.do.length > 0 && (
        <div className="fgg-block fgg-block--do">
          <span className="fgg-block-label">Do</span>
          <ul className="fgg-do-list">
            {entry.do.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function ForgeGuide() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="fgg-shell">
        <style>{CSS}</style>
        <header className="fgg-topbar">
          <button type="button" className="fgg-back-link" onClick={() => navigate(`/library/forge/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="fgg-stage">
          <p className="fgg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const sections = buildGuideSections(lesson);
  const guide = lesson.teacherGuide || {};

  return (
    <div className="fgg-shell">
      <style>{CSS}</style>
      <header className="fgg-topbar">
        <button type="button" className="fgg-back-link" onClick={() => navigate(`/library/forge/${trackId}`)}>
          ← Lessons
        </button>
        <span className="fgg-topbar-title">Teacher Guide</span>
      </header>

      <div className="fgg-stage">
        <div className="fgg-hero">
          <span className="fgg-hero-kicker">{lesson.code} · {lesson.technique}</span>
          <h1 className="fgg-hero-title">{lesson.title}</h1>
          <p className="fgg-hero-blurb">{lesson.subtitle}</p>
        </div>

        <div className="fgg-sections">
          {sections.map((key, i) => (
            <SlideSection key={key} num={i + 1} sectionKey={key} label={sectionLabel(key, lesson)} entry={guide[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.fgg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFBF4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.fgg-shell * { box-sizing: border-box; }

.fgg-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #FFFBF4;
  z-index: 5;
}
.fgg-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.fgg-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0A48C;
}

.fgg-stage {
  width: 100%;
  max-width: 640px;
  padding: 20px 24px 60px;
}

.fgg-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8B7F68;
  text-align: center;
  margin-top: 60px;
}

.fgg-hero {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #FBF1DF;
}
.fgg-hero-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #C97A2E;
}
.fgg-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #2E2617;
  margin: 6px 0 6px;
}
.fgg-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #6B5F49;
  margin: 0;
}

.fgg-sections { display: flex; flex-direction: column; gap: 26px; }
.fgg-section { display: flex; flex-direction: column; gap: 10px; }
.fgg-section-head { display: flex; align-items: center; gap: 10px; }
.fgg-section-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #2E2617;
  background: #FBF1DF;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fgg-section-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #2E2617;
  margin: 0;
  flex: 1;
}
.fgg-timing {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #C97A2E;
  background: rgba(242,166,90,0.16);
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.fgg-goal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13.5px;
  color: #8B7F68;
  margin: 0 0 0 34px;
}
.fgg-empty {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #B0A48C;
  margin: 0 0 0 34px;
}

.fgg-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.fgg-block-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #B0A48C;
}
.fgg-block--say .fgg-block-label { color: #C97A2E; }
.fgg-say-list { display: flex; flex-direction: column; gap: 6px; }
.fgg-say-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 1.5;
  color: #2E2617;
  background: #FBF1DF;
  border-left: 3px solid #F2A65A;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  margin: 0;
}
.fgg-do-list {
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fgg-do-list li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.45;
  color: #4A3F2C;
}
`;

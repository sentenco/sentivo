import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./shiftTracks";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Target Warm-up",
  contrast: "Meaning Contrast",
  makeit: "Make It",
  trigger: "Trigger Frame",
  interrupt: "Interrupt & Repair",
  samestory: "Same Story, New Lens",
  clockturn: "Clock Turn",
  pressure: "Pressure Check",
  scorecard: "Scorecard",
  retention: "Retention Exit Task",
};

const SLIDE_TYPES = ["cover", "warmup", "contrast", "makeit", "trigger", "interrupt", "samestory", "clockturn", "pressure", "scorecard", "retention"];

function SlideSection({ num, slideType, entry }) {
  if (!entry) {
    return (
      <section className="shg-section">
        <div className="shg-section-head">
          <span className="shg-section-num">{num}</span>
          <h2 className="shg-section-title">{SLIDE_LABELS[slideType]}</h2>
        </div>
        <p className="shg-empty">No guide notes for this slide yet.</p>
      </section>
    );
  }
  return (
    <section className="shg-section">
      <div className="shg-section-head">
        <span className="shg-section-num">{num}</span>
        <h2 className="shg-section-title">{SLIDE_LABELS[slideType]}</h2>
        {entry.timing && <span className="shg-timing">⏱ {entry.timing}</span>}
      </div>
      {entry.goal && <p className="shg-goal">{entry.goal}</p>}
      {entry.say && entry.say.length > 0 && (
        <div className="shg-block shg-block--say">
          <span className="shg-block-label">Say</span>
          <div className="shg-say-list">
            {entry.say.map((line, i) => (
              <p key={i} className="shg-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {entry.do && entry.do.length > 0 && (
        <div className="shg-block shg-block--do">
          <span className="shg-block-label">Do</span>
          <ul className="shg-do-list">
            {entry.do.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function ShiftGuide() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="shg-shell">
        <style>{CSS}</style>
        <header className="shg-topbar">
          <button type="button" className="shg-back-link" onClick={() => navigate(`/library/shift/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="shg-stage">
          <p className="shg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const guide = lesson.teacherGuide || {};

  return (
    <div className="shg-shell">
      <style>{CSS}</style>
      <header className="shg-topbar">
        <button type="button" className="shg-back-link" onClick={() => navigate(`/library/shift/${trackId}`)}>
          ← Lessons
        </button>
        <span className="shg-topbar-title">Teacher Guide</span>
      </header>

      <div className="shg-stage">
        <div className="shg-hero">
          <span className="shg-hero-kicker">{lesson.code} · {lesson.tenses} · {lesson.tag}</span>
          <h1 className="shg-hero-title">{lesson.title}</h1>
          <p className="shg-hero-blurb">{lesson.theme}</p>
        </div>

        <div className="shg-sections">
          {SLIDE_TYPES.map((slideType, i) => (
            <SlideSection key={slideType} num={i + 1} slideType={slideType} entry={guide[slideType]} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.shg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFAF9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.shg-shell * { box-sizing: border-box; }

.shg-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #FFFAF9;
  z-index: 5;
}
.shg-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #4A211B;
  background: #FFB3A6;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.shg-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98F84;
}

.shg-stage {
  width: 100%;
  max-width: 640px;
  padding: 20px 24px 60px;
}

.shg-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8C5C52;
  text-align: center;
  margin-top: 60px;
}

.shg-hero {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #FFEDE9;
}
.shg-hero-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #E1483B;
}
.shg-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #4A211B;
  margin: 6px 0 6px;
}
.shg-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #8C5C52;
  margin: 0;
}

.shg-sections { display: flex; flex-direction: column; gap: 26px; }
.shg-section { display: flex; flex-direction: column; gap: 10px; }
.shg-section-head { display: flex; align-items: center; gap: 10px; }
.shg-section-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #4A211B;
  background: #FFEDE9;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.shg-section-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #4A211B;
  margin: 0;
  flex: 1;
}
.shg-timing {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.shg-goal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13.5px;
  color: #8C5C52;
  margin: 0 0 0 34px;
}
.shg-empty {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #C98F84;
  margin: 0 0 0 34px;
}

.shg-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.shg-block-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C98F84;
}
.shg-block--say .shg-block-label { color: #E1483B; }
.shg-say-list { display: flex; flex-direction: column; gap: 6px; }
.shg-say-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 1.5;
  color: #4A211B;
  background: #FFEDE9;
  border-left: 3px solid #E1483B;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  margin: 0;
}
.shg-do-list {
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.shg-do-list li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.45;
  color: #6B4139;
}
`;

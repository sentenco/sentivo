import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./ascendTracks";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  vocabulary: "Vocabulary",
  highlight: "Highlight",
  practice: "Practice",
  activity: "Activity",
  pushit: "Push It",
  retest: "Re-test",
  scorecard: "Scorecard",
  homework: "Homework",
};

function buildSlideTypes(lesson) {
  return ["cover", "warmup", "vocabulary", "highlight", "practice", "activity", lesson.retest ? "retest" : "pushit", "scorecard", "homework"];
}

function SlideSection({ num, slideType, entry }) {
  if (!entry) {
    return (
      <section className="ag-section">
        <div className="ag-section-head">
          <span className="ag-section-num">{num}</span>
          <h2 className="ag-section-title">{SLIDE_LABELS[slideType]}</h2>
        </div>
        <p className="ag-empty">No guide notes for this slide yet.</p>
      </section>
    );
  }
  return (
    <section className="ag-section">
      <div className="ag-section-head">
        <span className="ag-section-num">{num}</span>
        <h2 className="ag-section-title">{SLIDE_LABELS[slideType]}</h2>
        {entry.timing && <span className="ag-timing">⏱ {entry.timing}</span>}
      </div>
      {entry.goal && <p className="ag-goal">{entry.goal}</p>}
      {entry.say && entry.say.length > 0 && (
        <div className="ag-block ag-block--say">
          <span className="ag-block-label">Say</span>
          <div className="ag-say-list">
            {entry.say.map((line, i) => (
              <p key={i} className="ag-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {entry.do && entry.do.length > 0 && (
        <div className="ag-block ag-block--do">
          <span className="ag-block-label">Do</span>
          <ul className="ag-do-list">
            {entry.do.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function AscendGuide() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="ag-shell">
        <style>{CSS}</style>
        <header className="ag-topbar">
          <button type="button" className="ag-back-link" onClick={() => navigate(`/library/ascend/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="ag-stage">
          <p className="ag-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlideTypes(lesson);
  const guide = lesson.teacherGuide || {};

  return (
    <div className="ag-shell">
      <style>{CSS}</style>
      <header className="ag-topbar">
        <button type="button" className="ag-back-link" onClick={() => navigate(`/library/ascend/${trackId}`)}>
          ← Lessons
        </button>
        <span className="ag-topbar-title">Teacher Guide</span>
      </header>

      <div className="ag-stage">
        <div className="ag-hero">
          <span className="ag-hero-kicker">{lesson.code} · {lesson.icon} {lesson.type} · {lesson.support} support</span>
          <h1 className="ag-hero-title">{lesson.title}</h1>
          <p className="ag-hero-blurb">{lesson.subtitle}</p>
        </div>

        <div className="ag-sections">
          {slideTypes.map((slideType, i) => (
            <SlideSection key={slideType} num={i + 1} slideType={slideType} entry={guide[slideType]} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.ag-shell {
  width: 100%;
  min-height: 100vh;
  background: #FBFEFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ag-shell * { box-sizing: border-box; }

.ag-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #FBFEFC;
  z-index: 5;
}
.ag-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.ag-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #8AAFA5;
}

.ag-stage {
  width: 100%;
  max-width: 640px;
  padding: 20px 24px 60px;
}

.ag-missing {
  font-family: 'Quicksand', sans-serif;
  color: #6B8C82;
  text-align: center;
  margin-top: 60px;
}

.ag-hero {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #E9F7F2;
}
.ag-hero-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #128571;
}
.ag-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #17352E;
  margin: 6px 0 6px;
}
.ag-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #5C8177;
  margin: 0;
}

.ag-sections { display: flex; flex-direction: column; gap: 26px; }
.ag-section { display: flex; flex-direction: column; gap: 10px; }
.ag-section-head { display: flex; align-items: center; gap: 10px; }
.ag-section-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #17352E;
  background: #E9F7F2;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ag-section-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #17352E;
  margin: 0;
  flex: 1;
}
.ag-timing {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #128571;
  background: rgba(18,133,113,0.1);
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.ag-goal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13.5px;
  color: #6B8C82;
  margin: 0 0 0 34px;
}
.ag-empty {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #8AAFA5;
  margin: 0 0 0 34px;
}

.ag-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.ag-block-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #8AAFA5;
}
.ag-block--say .ag-block-label { color: #128571; }
.ag-say-list { display: flex; flex-direction: column; gap: 6px; }
.ag-say-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 1.5;
  color: #17352E;
  background: #E9F7F2;
  border-left: 3px solid #3FCDAF;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  margin: 0;
}
.ag-do-list {
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ag-do-list li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.45;
  color: #2F5850;
}
`;

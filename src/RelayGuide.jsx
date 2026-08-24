import { useParams } from "react-router-dom";
import { getLesson } from "./relayTracks";

const LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  bounce: "Bounce",
  yourturn: "Your Turn",
  pushit: "Push It",
  end: "End",
};

function buildGuideSections() {
  return ["cover", "warmup", "bounce", "yourturn", "pushit", "end"];
}

function SlideSection({ num, label, entry }) {
  if (!entry) {
    return (
      <section className="rlg-section">
        <div className="rlg-section-head">
          <span className="rlg-section-num">{num}</span>
          <h2 className="rlg-section-title">{label}</h2>
        </div>
        <p className="rlg-empty">No guide notes for this slide yet.</p>
      </section>
    );
  }
  return (
    <section className="rlg-section">
      <div className="rlg-section-head">
        <span className="rlg-section-num">{num}</span>
        <h2 className="rlg-section-title">{label}</h2>
        {entry.timing && <span className="rlg-timing">⏱ {entry.timing}</span>}
      </div>
      {entry.goal && <p className="rlg-goal">{entry.goal}</p>}
      {entry.say && entry.say.length > 0 && (
        <div className="rlg-block rlg-block--say">
          <span className="rlg-block-label">Say</span>
          <div className="rlg-say-list">
            {entry.say.map((line, i) => (
              <p key={i} className="rlg-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {entry.do && entry.do.length > 0 && (
        <div className="rlg-block rlg-block--do">
          <span className="rlg-block-label">Do</span>
          <ul className="rlg-do-list">
            {entry.do.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function RelayGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="rlg-shell">
        <style>{CSS}</style>
        <div className="rlg-stage">
          <p className="rlg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const sections = buildGuideSections();
  const guide = lesson.teacherGuide || {};

  return (
    <div className="rlg-shell">
      <style>{CSS}</style>
      <header className="rlg-topbar">
        <span className="rlg-topbar-title">Teacher Guide</span>
      </header>

      <div className="rlg-stage">
        <div className="rlg-hero">
          <span className="rlg-hero-kicker">{lesson.code} · {lesson.technique}</span>
          <h1 className="rlg-hero-title">{lesson.title}</h1>
          <p className="rlg-hero-blurb">{lesson.subtitle}</p>
        </div>

        <div className="rlg-sections">
          {sections.map((key, i) => (
            <SlideSection key={key} num={i + 1} label={LABELS[key]} entry={guide[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rlg-shell {
  width: 100%;
  min-height: 100vh;
  background: #F4FBFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.rlg-shell * { box-sizing: border-box; }

.rlg-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #F4FBFA;
  z-index: 5;
}
.rlg-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4B8B92;
}

.rlg-stage {
  width: 100%;
  max-width: 640px;
  padding: 20px 24px 60px;
}

.rlg-missing {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4B8B92;
  text-align: center;
  margin-top: 60px;
}

.rlg-hero {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #EAF3FA;
}
.rlg-hero-kicker {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #3E7CB1;
}
.rlg-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 30px;
  color: #10646B;
  margin: 6px 0 6px;
}
.rlg-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #4B8B92;
  margin: 0;
}

.rlg-sections { display: flex; flex-direction: column; gap: 26px; }
.rlg-section { display: flex; flex-direction: column; gap: 10px; }
.rlg-section-head { display: flex; align-items: center; gap: 10px; }
.rlg-section-num {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 13px;
  color: #10646B;
  background: #EAF3FA;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.rlg-section-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 19px;
  color: #10646B;
  margin: 0;
  flex: 1;
}
.rlg-timing {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #3E7CB1;
  background: rgba(62,124,177,0.14);
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.rlg-goal {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13.5px;
  color: #4B8B92;
  margin: 0 0 0 34px;
}
.rlg-empty {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #9FC6C2;
  margin: 0 0 0 34px;
}

.rlg-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.rlg-block-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #9FC6C2;
}
.rlg-block--say .rlg-block-label { color: #3E7CB1; }
.rlg-say-list { display: flex; flex-direction: column; gap: 6px; }
.rlg-say-line {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 1.5;
  color: #10646B;
  background: #EAF3FA;
  border-left: 3px solid #3E7CB1;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  margin: 0;
}
.rlg-do-list {
  margin: 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.rlg-do-list li {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.45;
  color: #1F4448;
}
`;

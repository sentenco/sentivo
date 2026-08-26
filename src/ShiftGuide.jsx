import { useParams } from "react-router-dom";
import { getLesson } from "./shiftTracks";

const SLIDE_LABELS = {
  scenarioSet: "Scenario Set",
  chain: "Cold Chain",
  retell: "Unaided Retell",
  transfer: "Transfer",
  wrap: "Wrap",
};

const SLIDE_TYPES = ["scenarioSet", "chain", "retell", "transfer", "wrap"];

function ChainAnswerKey({ chain }) {
  if (!chain || chain.length === 0) return null;
  return (
    <div className="shg-key">
      {chain.map((item, i) => (
        <div className="shg-key-row" key={i}>
          <span className="shg-key-num">{i + 1}</span>
          <div className="shg-key-body">
            <p className="shg-key-q">{item.question}</p>
            <p className="shg-key-a">{item.model}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SlideSection({ num, slideType, entry, chain }) {
  if (!entry) {
    return (
      <section className="shg-section">
        <div className="shg-section-head">
          <span className="shg-section-num">{num}</span>
          <h2 className="shg-section-title">{SLIDE_LABELS[slideType]}</h2>
        </div>
        <p className="shg-empty">No guide notes yet.</p>
      </section>
    );
  }
  return (
    <section className="shg-section">
      <div className="shg-section-head">
        <span className="shg-section-num">{num}</span>
        <h2 className="shg-section-title">{SLIDE_LABELS[slideType]}</h2>
        {entry.timing && <span className="shg-timing">{entry.timing}</span>}
      </div>
      {entry.goal && <p className="shg-goal">{entry.goal}</p>}
      {entry.do && entry.do.length > 0 && (
        <ul className="shg-do-list">
          {entry.do.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
      {slideType === "chain" && <ChainAnswerKey chain={chain} />}
    </section>
  );
}

export default function ShiftGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="shg-shell">
        <style>{CSS}</style>
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
        <span className="shg-topbar-title">Teacher Guide</span>
      </header>

      <div className="shg-stage">
        <div className="shg-hero">
          <span className="shg-hero-kicker">{lesson.code} · {lesson.tenses}</span>
          <h1 className="shg-hero-title">{lesson.title}</h1>
        </div>

        <div className="shg-sections">
          {SLIDE_TYPES.map((slideType, i) => (
            <SlideSection key={slideType} num={i + 1} slideType={slideType} entry={guide[slideType]} chain={lesson.chain} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

.shg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFCF5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.shg-shell * { box-sizing: border-box; }

.shg-topbar {
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 22px 0;
  position: sticky;
  top: 0;
  background: #FFFCF5;
  z-index: 5;
}
.shg-topbar-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8A6D1F;
}

.shg-stage {
  width: 100%;
  max-width: 600px;
  padding: 14px 22px 48px;
  font-family: 'Inter', sans-serif;
}

.shg-missing {
  font-family: 'Inter', sans-serif;
  color: #5A6B92;
  text-align: center;
  margin-top: 60px;
}

.shg-hero {
  padding-bottom: 14px;
  margin-bottom: 18px;
  border-bottom: 1px solid #EFE4C4;
}
.shg-hero-kicker {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #8A6D1F;
}
.shg-hero-title {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-size: 23px;
  color: #1B2A4A;
  margin: 4px 0 0;
}

.shg-sections { display: flex; flex-direction: column; gap: 18px; }
.shg-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  background: #FFFFFF;
  border: 1px solid #F2E7C7;
  border-radius: 14px;
}
.shg-section-head { display: flex; align-items: center; gap: 8px; }
.shg-section-num {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  color: #8A6D1F;
  background: #FFF4D6;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.shg-section-title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 14.5px;
  color: #1B2A4A;
  margin: 0;
  flex: 1;
}
.shg-timing {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: #8A6D1F;
  white-space: nowrap;
}
.shg-goal {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  line-height: 1.45;
  color: #5A6B92;
  margin: 0 0 0 28px;
}
.shg-empty {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: #B5A76D;
  margin: 0 0 0 28px;
}

.shg-do-list {
  margin: 0 0 0 28px;
  padding: 0 0 0 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.shg-do-list li {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: #5A6B92;
}

.shg-key {
  margin: 8px 0 0 28px;
  display: flex;
  flex-direction: column;
  border-top: 1px dashed #EFE4C4;
}
.shg-key-row {
  display: flex;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px dashed #EFE4C4;
}
.shg-key-row:last-child { border-bottom: none; }
.shg-key-num {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  color: #B5A76D;
  flex: none;
  width: 14px;
  padding-top: 1px;
}
.shg-key-body { flex: 1; min-width: 0; }
.shg-key-q {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  line-height: 1.4;
  color: #1B2A4A;
  margin: 0 0 2px;
}
.shg-key-a {
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.4;
  color: #8A6D1F;
  margin: 0;
}

@media (max-width: 480px) {
  .shg-hero-title { font-size: 20px; }
}
`;

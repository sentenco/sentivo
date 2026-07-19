import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonByCode } from "./vtTracks";
import VTTimeline from "./VTTimeline";

const DISCUSSION_SLIDES = ["cover", "warmup", "definition", "timeline", "usages", "form", "signals", "ccq", "recap"];
const TEST_SLIDES = ["cover", "partA", "partB", "partC", "partD", "partE", "score"];

function CoverSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide vtl-slide--cover">
      <span className="vtl-kind-badge">{lesson.kind}</span>
      <h2 className="vtl-cover-title">{lesson.title}</h2>
      <p className="vtl-cover-sub">Tense {tense.number} of 12 · {tense.groupTitle}</p>
      {lesson.kind !== "Discussion" && <p className="vtl-cover-line">{lesson.testGoal}</p>}
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Warm-up</h3>
      <p className="vtl-cover-question">“{lesson.leadIn}”</p>
    </div>
  );
}

function DefinitionSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Definition</h3>
      <p className="vtl-definition">{lesson.definition}</p>
    </div>
  );
}

function TimelineSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Timeline</h3>
      <div className="vtl-timeline-wrap"><VTTimeline variant={tense.timelineVariant} /></div>
      <p className="vtl-timeline-note">{lesson.timelineNote}</p>
    </div>
  );
}

function UsagesSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Main usages</h3>
      <div className="vtl-usage-list">
        {lesson.usages.map((u, i) => (
          <div key={i} className="vtl-usage-row">
            <span className="vtl-usage-label">{u.label}</span>
            <span className="vtl-usage-example">“{u.example}”</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Form</h3>
      <div className="vtl-form-grid">
        <div className="vtl-form-col">
          <span className="vtl-form-label">Affirmative</span>
          {lesson.form.affirmative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
        <div className="vtl-form-col">
          <span className="vtl-form-label">Negative</span>
          {lesson.form.negative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
        <div className="vtl-form-col">
          <span className="vtl-form-label">Interrogative</span>
          {lesson.form.interrogative.map((f, i) => <p key={i} className="vtl-form-line">{f}</p>)}
        </div>
      </div>
    </div>
  );
}

function SignalsSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <div className="vtl-two-col">
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Signal words</h3>
          <div className="vtl-chip-row">
            {lesson.signalWords.map((w, i) => <span key={i} className="vtl-chip">{w}</span>)}
          </div>
        </div>
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Common mistakes</h3>
          <ul className="vtl-list">
            {lesson.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CcqSlide({ lesson }) {
  return (
    <div className="vtl-slide">
      <div className="vtl-two-col">
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Concept checking questions</h3>
          <ul className="vtl-list">
            {lesson.ccqs.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
        <div className="vtl-two-col-half">
          <h3 className="vtl-h">Quick interactive moments</h3>
          <ul className="vtl-list">
            {lesson.interactive.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RecapSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Quick recap</h3>
      <p className="vtl-definition">{lesson.definition}</p>
      <p className="vtl-recap-line">Next: put it to the test in <strong>{tense.lessonB.code} · {tense.lessonB.title} (Test/Application)</strong>.</p>
    </div>
  );
}

function McItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q">{index + 1}. {item.q}</p>
      <div className="vtl-quiz-options">
        {item.options.map((opt, i) => {
          const answered = picked !== null;
          const isCorrect = i === item.correct;
          const isPicked = i === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={i}
              type="button"
              className={`vtl-quiz-opt ${cls}`}
              onClick={() => setPicked(i)}
              disabled={answered}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TransformItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q">{item.base}</p>
      {shown ? (
        <div className="vtl-reveal-block">
          <p><strong>Negative:</strong> {item.negative}</p>
          <p><strong>Question:</strong> {item.question}</p>
        </div>
      ) : (
        <button type="button" className="vtl-reveal-btn" onClick={() => setShown(true)}>Show negative &amp; question</button>
      )}
    </div>
  );
}

function ErrorFixItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="vtl-quiz-item">
      <p className="vtl-quiz-q vtl-quiz-q--error">{item.wrong}</p>
      {shown ? (
        <p className="vtl-reveal-correct">{item.correct}</p>
      ) : (
        <button type="button" className="vtl-reveal-btn" onClick={() => setShown(true)}>Show correction</button>
      )}
    </div>
  );
}

function PartSlide({ lesson, partKey }) {
  const section = lesson.sections.find((s) => s.part === partKey);
  if (!section) return null;
  const items = section.items || [];

  return (
    <div className="vtl-slide vtl-slide--part">
      <span className="vtl-part-badge">Part {section.part} · {section.label}</span>

      {partKey === "A" || partKey === "B" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <McItem key={i} item={item} index={i} />)}
        </div>
      ) : partKey === "C" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <TransformItem key={i} item={item} />)}
        </div>
      ) : partKey === "D" ? (
        <div className="vtl-quiz-list">
          {items.map((item, i) => <ErrorFixItem key={i} item={item} />)}
        </div>
      ) : (
        <ul className="vtl-list vtl-speaking-list">
          {items.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </div>
  );
}

function ScoreSlide({ tense, lesson }) {
  return (
    <div className="vtl-slide">
      <h3 className="vtl-h">Score and feedback</h3>
      <p className="vtl-recap-line">{lesson.testGoal}</p>
      <p className="vtl-recap-line">
        Go back over any part that was shaky before moving on
        {tense.number < 12 ? <> to <strong>Tense {tense.number + 1}</strong>.</> : <>. That's all 12 tenses -- nice work.</>}
      </p>
    </div>
  );
}

function renderSlide(slideType, tense, lesson) {
  switch (slideType) {
    case "cover": return <CoverSlide tense={tense} lesson={lesson} />;
    case "warmup": return <WarmupSlide lesson={lesson} />;
    case "definition": return <DefinitionSlide lesson={lesson} />;
    case "timeline": return <TimelineSlide tense={tense} lesson={lesson} />;
    case "usages": return <UsagesSlide lesson={lesson} />;
    case "form": return <FormSlide lesson={lesson} />;
    case "signals": return <SignalsSlide lesson={lesson} />;
    case "ccq": return <CcqSlide lesson={lesson} />;
    case "recap": return <RecapSlide tense={tense} lesson={lesson} />;
    case "partA": case "partB": case "partC": case "partD": case "partE":
      return <PartSlide lesson={lesson} partKey={slideType.replace("part", "")} />;
    case "score": return <ScoreSlide tense={tense} lesson={lesson} />;
    default: return null;
  }
}

export default function VerbTensesLesson() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const found = getLessonByCode(code);

  if (!found) {
    return (
      <div className="vtl-shell">
        <style>{CSS}</style>
        <header className="vtl-topbar">
          <button type="button" className="vtl-back-link" onClick={() => navigate("/library/grammar/verb-tenses")}>
            ← Verb Tenses
          </button>
        </header>
        <div className="vtl-stage">
          <p className="vtl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { tense, lesson } = found;
  const slideTypes = lesson.kind === "Discussion" ? DISCUSSION_SLIDES : TEST_SLIDES;
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="vtl-shell">
      <style>{CSS}</style>
      <header className="vtl-topbar">
        <button type="button" className="vtl-back-link" onClick={() => navigate("/library/grammar/verb-tenses")}>
          ← Verb Tenses
        </button>
        <span className="vtl-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="vtl-topbar-slot" />
      </header>

      <div className="vtl-stage">
        <div className="vtl-deck">
          <div className="vtl-deck-body" key={slideIdx}>
            {renderSlide(slideType, tense, lesson)}
          </div>
          <div className="vtl-nav-row">
            <button type="button" className="vtl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="vtl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`vtl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="vtl-nav-btn vtl-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.vtl-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #F1EFFC 0%, #E4E0FA 50%, #D8D2F6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.vtl-shell * { box-sizing: border-box; }

.vtl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.vtl-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #2B2560;
  background: #B7B0F5;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
}
.vtl-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #5B5590;
}
.vtl-topbar-slot { width: 90px; }

.vtl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.vtl-missing {
  font-family: 'Quicksand', sans-serif;
  color: #6B5590;
  text-align: center;
  margin-top: 60px;
}

.vtl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #DAD4F5;
  border-radius: 22px;
  padding: 20px 56px;
  box-shadow: 0 20px 50px rgba(43,37,96,0.12);
  min-height: 0;
}

.vtl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 22px;
  padding: 8px 0;
}

.vtl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.vtl-slide--cover { gap: 16px; }

.vtl-kind-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #5B4FE0;
  background: rgba(91,79,224,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}
.vtl-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #2B2560;
  margin: 0;
  line-height: 1.05;
}
.vtl-cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #8A82C9;
  margin: 0;
}
.vtl-cover-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #4B4380;
  line-height: 1.5;
  margin: 0;
  max-width: 640px;
}
.vtl-cover-question {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 34px;
  font-style: italic;
  color: #2B2560;
  margin: 0;
  max-width: 780px;
  line-height: 1.3;
}
.vtl-warmup-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #8A82C9;
  margin: 0;
}

.vtl-h {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #2B2560;
  margin: 0;
}

.vtl-definition {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 26px;
  color: #4B4380;
  line-height: 1.5;
  margin: 0;
  max-width: 760px;
}

.vtl-timeline-wrap { background: #F5F3FD; border-radius: 14px; padding: 22px; width: 100%; max-width: 620px; }
.vtl-timeline-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #6B5590;
  margin: 0;
  max-width: 620px;
}

.vtl-usage-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 680px; }
.vtl-usage-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  background: #F5F3FD;
  border-radius: 10px;
  padding: 12px 16px;
  text-align: left;
}
.vtl-usage-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5B4FE0;
  white-space: nowrap;
}
.vtl-usage-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  font-style: italic;
  color: #2B2560;
}

.vtl-form-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%; max-width: 760px; }
.vtl-form-col { background: #F5F3FD; border-radius: 12px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; text-align: left; }
.vtl-form-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #5B4FE0;
}
.vtl-form-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15.5px;
  color: #2B2560;
  margin: 0;
}

.vtl-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; width: 100%; max-width: 860px; text-align: left; }
.vtl-two-col-half { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }
.vtl-two-col-half .vtl-h { font-size: 22px; }

.vtl-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
.vtl-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #5B4FE0;
  background: rgba(91,79,224,0.12);
  border-radius: 999px;
  padding: 6px 14px;
}

.vtl-list {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B4380;
  line-height: 1.55;
  margin: 0;
  padding-left: 20px;
}

.vtl-recap-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #4B4380;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.vtl-part-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #5B4FE0;
  background: rgba(91,79,224,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}

.vtl-slide--part { justify-content: flex-start; }

.vtl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.vtl-quiz-item {
  background: #F5F3FD;
  border-radius: 12px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vtl-quiz-q {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #2B2560;
  margin: 0;
}
.vtl-quiz-q--error { color: #B0413E; text-decoration: line-through; text-decoration-color: rgba(176,65,62,0.4); }

.vtl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.vtl-quiz-opt {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #2B2560;
  background: #FFFFFF;
  border: 1.5px solid #DAD4F5;
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
}
.vtl-quiz-opt:disabled { cursor: default; }
.vtl-quiz-opt.is-correct { background: #E6F6EC; border-color: #55B983; color: #1F6B41; }
.vtl-quiz-opt.is-wrong { background: #FBEAEA; border-color: #D9807D; color: #A8382F; }

.vtl-reveal-btn {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #5B4FE0;
  background: #FFFFFF;
  border: 1.5px solid #DAD4F5;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.vtl-reveal-block { display: flex; flex-direction: column; gap: 4px; }
.vtl-reveal-block p, .vtl-reveal-correct {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #1F6B41;
  margin: 0;
}

.vtl-speaking-list { max-width: 720px; font-size: 20px; }
.vtl-speaking-list li { margin-bottom: 8px; }

.vtl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #EEECFB; flex-shrink: 0; }
.vtl-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2B2560;
  background: #F5F3FD;
  border: 1px solid #DAD4F5;
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
}
.vtl-nav-btn--primary { background: #5B4FE0; color: #FFFFFF; border-color: #5B4FE0; }
.vtl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.vtl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 340px; }
.vtl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #DAD4F5; }
.vtl-nav-dot.is-active { width: 16px; background: #5B4FE0; }
`;

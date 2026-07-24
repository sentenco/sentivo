import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessonByCode } from "./posTracks";

function buildLessonSlides(lesson) {
  const slides = ["cover", "warmup"];
  lesson.concepts.forEach((_, i) => slides.push(`concept${i}`));
  if (lesson.concepts.length > 1) slides.push("compare");
  slides.push("guided", "independent", "wrapup");
  return slides;
}

function buildAssessmentSlides(lesson) {
  return ["cover", ...lesson.sections.map((s) => `part${s.part}`), "score"];
}

function CoverSlide({ topic, lesson }) {
  return (
    <div className="posl-slide posl-slide--cover">
      <span className="posl-kind-badge">{lesson.kind}</span>
      <h2 className="posl-cover-title">{lesson.title}</h2>
      <p className="posl-cover-sub">Topic {topic.number} of 6</p>
      <p className="posl-cover-line">{lesson.kind === "Lesson" ? lesson.objective : lesson.testGoal}</p>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Warm-up</h3>
      <p className="posl-cover-question">“{lesson.leadIn}”</p>
    </div>
  );
}

function ConceptSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  return (
    <div className="posl-slide">
      <h3 className="posl-h">{concept.name}</h3>
      <p className="posl-definition">{concept.definition}</p>
      <div className="posl-example-list">
        {concept.examples.map((ex, i) => (
          <p key={i} className="posl-example">“{ex}”</p>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">{lesson.compareLeftLabel} vs {lesson.compareRightLabel}</h3>
      <p className="posl-compare-note">{lesson.compareNote}</p>
      <div className="posl-compare-grid">
        <span className="posl-compare-label">{lesson.compareLeftLabel}</span>
        <span className="posl-compare-label">{lesson.compareRightLabel}</span>
        {lesson.comparePairs.map((pair, i) => (
          <div key={`pair-${i}`} className="posl-compare-row-pair">
            <p className="posl-compare-cell">{pair.left}</p>
            <p className="posl-compare-cell posl-compare-cell--right">{pair.right}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="posl-slide posl-slide--part">
      <h3 className="posl-h">Guided practice</h3>
      <div className="posl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function IndependentSlide({ lesson }) {
  return (
    <div className="posl-slide posl-slide--part">
      <h3 className="posl-h">Independent practice</h3>
      <ul className="posl-list posl-speaking-list">
        {lesson.independent.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ topic, lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Wrap-up</h3>
      <p className="posl-definition">{lesson.wrapup}</p>
      <p className="posl-recap-line">Next: put it to the test in <strong>{topic.lessonB.code} · {topic.lessonB.title} (Assessment)</strong>.</p>
    </div>
  );
}

function McItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{index + 1}. {item.q}</p>
      <div className="posl-quiz-options">
        {item.options.map((opt, i) => {
          const answered = picked !== null;
          const isCorrect = i === item.correct;
          const isPicked = i === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={i}
              type="button"
              className={`posl-quiz-opt ${cls}`}
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

function RevealItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function ErrorFixItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="posl-quiz-item">
      <p className="posl-quiz-q posl-quiz-q--error">{item.wrong}</p>
      {shown ? (
        <p className="posl-reveal-correct">{item.correct}</p>
      ) : (
        <button type="button" className="posl-reveal-btn" onClick={() => setShown(true)}>Show correction</button>
      )}
    </div>
  );
}

function PartSlide({ lesson, partKey }) {
  const section = lesson.sections.find((s) => s.part === partKey);
  if (!section) return null;
  const items = section.items || [];

  return (
    <div className="posl-slide posl-slide--part">
      <span className="posl-part-badge">Part {section.part} · {section.label}</span>
      <p className="posl-part-desc">{section.desc}</p>

      {section.type === "mc" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <McItem key={i} item={item} index={i} />)}
        </div>
      ) : section.type === "reveal" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <RevealItem key={i} item={item} />)}
        </div>
      ) : section.type === "error" ? (
        <div className="posl-quiz-list">
          {items.map((item, i) => <ErrorFixItem key={i} item={item} />)}
        </div>
      ) : (
        <ul className="posl-list posl-speaking-list">
          {items.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      )}
    </div>
  );
}

function ScoreSlide({ topic, lesson }) {
  return (
    <div className="posl-slide">
      <h3 className="posl-h">Score and feedback</h3>
      <p className="posl-recap-line">{lesson.testGoal}</p>
      <p className="posl-recap-line">
        Go back over any part that was shaky before moving on
        {topic.number < 6 ? <> to <strong>Topic {topic.number + 1}</strong>.</> : <>. That's all 8 parts of speech -- nice work.</>}
      </p>
    </div>
  );
}

function renderSlide(slideType, topic, lesson) {
  if (slideType === "cover") return <CoverSlide topic={topic} lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("concept")) return <ConceptSlide lesson={lesson} index={Number(slideType.replace("concept", ""))} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType === "guided") return <GuidedSlide lesson={lesson} />;
  if (slideType === "independent") return <IndependentSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide topic={topic} lesson={lesson} />;
  if (slideType.startsWith("part")) return <PartSlide lesson={lesson} partKey={slideType.replace("part", "")} />;
  if (slideType === "score") return <ScoreSlide topic={topic} lesson={lesson} />;
  return null;
}

export default function PartsOfSpeechLesson() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const found = getLessonByCode(code);

  if (!found) {
    return (
      <div className="posl-shell">
        <style>{CSS}</style>
        <header className="posl-topbar">
          <button type="button" className="posl-back-link" onClick={() => navigate("/library/grammar/parts-of-speech")}>
            ← Parts of Speech
          </button>
        </header>
        <div className="posl-stage">
          <p className="posl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { topic, lesson } = found;
  const slideTypes = lesson.kind === "Lesson" ? buildLessonSlides(lesson) : buildAssessmentSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="posl-shell">
      <style>{CSS}</style>
      <header className="posl-topbar">
        <button type="button" className="posl-back-link" onClick={() => navigate("/library/grammar/parts-of-speech")}>
          ← Parts of Speech
        </button>
        <span className="posl-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="posl-topbar-slot" />
      </header>

      <div className="posl-stage">
        <div className="posl-deck">
          <div className="posl-deck-body" key={slideIdx}>
            {renderSlide(slideType, topic, lesson)}
          </div>
          <div className="posl-nav-row">
            <button type="button" className="posl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="posl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`posl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="posl-nav-btn posl-nav-btn--primary"
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

.posl-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #EAF4FF 0%, #D9EAFE 50%, #C7DEFB 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.posl-shell * { box-sizing: border-box; }

.posl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.posl-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #163A66;
  background: #AFCFF7;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
}
.posl-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #4A6690;
}
.posl-topbar-slot { width: 90px; }

.posl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.posl-missing {
  font-family: 'Quicksand', sans-serif;
  color: #4A6690;
  text-align: center;
  margin-top: 60px;
}

.posl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #CBE0FA;
  border-radius: 22px;
  padding: 20px 56px;
  box-shadow: 0 20px 50px rgba(22,58,102,0.12);
  min-height: 0;
}

.posl-deck-body {
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

.posl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.posl-slide--cover { gap: 16px; }
.posl-slide--part { justify-content: flex-start; }

.posl-kind-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #2F80ED;
  background: rgba(47,128,237,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}
.posl-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: #163A66;
  margin: 0;
  line-height: 1.05;
}
.posl-cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #6A93C9;
  margin: 0;
}
.posl-cover-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #2C4568;
  line-height: 1.5;
  margin: 0;
  max-width: 640px;
}
.posl-cover-question {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 32px;
  font-style: italic;
  color: #163A66;
  margin: 0;
  max-width: 780px;
  line-height: 1.3;
}

.posl-h {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #163A66;
  margin: 0;
}

.posl-definition {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #2C4568;
  line-height: 1.5;
  margin: 0;
  max-width: 760px;
}

.posl-example-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 640px; }
.posl-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  font-style: italic;
  color: #163A66;
  background: #EEF5FE;
  border-radius: 10px;
  padding: 10px 16px;
  margin: 0;
}

.posl-compare-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A6690;
  margin: 0;
  max-width: 640px;
}
.posl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; width: 100%; max-width: 720px; }
.posl-compare-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #2F80ED;
}
.posl-compare-row-pair { display: contents; }
.posl-compare-cell {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #2C4568;
  background: #EEF5FE;
  border-radius: 10px;
  padding: 10px 14px;
  margin: 0;
  text-align: left;
}
.posl-compare-cell--right { color: #163A66; font-weight: 600; }

.posl-list {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #2C4568;
  line-height: 1.55;
  margin: 0;
  padding-left: 20px;
}
.posl-speaking-list { max-width: 720px; font-size: 19px; text-align: left; }
.posl-speaking-list li { margin-bottom: 8px; }

.posl-recap-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #2C4568;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.posl-part-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #2F80ED;
  background: rgba(47,128,237,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}
.posl-part-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #4A6690;
  margin: 0;
}

.posl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.posl-quiz-item {
  background: #EEF5FE;
  border-radius: 12px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.posl-quiz-q {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #163A66;
  margin: 0;
}
.posl-quiz-q--error { color: #B0413E; text-decoration: line-through; text-decoration-color: rgba(176,65,62,0.4); }

.posl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.posl-quiz-opt {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #163A66;
  background: #FFFFFF;
  border: 1.5px solid #CBE0FA;
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
}
.posl-quiz-opt:disabled { cursor: default; }
.posl-quiz-opt.is-correct { background: #E6F6EC; border-color: #55B983; color: #1F6B41; }
.posl-quiz-opt.is-wrong { background: #FBEAEA; border-color: #D9807D; color: #A8382F; }

.posl-reveal-btn {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2F80ED;
  background: #FFFFFF;
  border: 1.5px solid #CBE0FA;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.posl-reveal-correct {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #1F6B41;
  margin: 0;
}

.posl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #EAF2FC; flex-shrink: 0; }
.posl-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #163A66;
  background: #EEF5FE;
  border: 1px solid #CBE0FA;
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
}
.posl-nav-btn--primary { background: #2F80ED; color: #FFFFFF; border-color: #2F80ED; }
.posl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.posl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 340px; }
.posl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #CBE0FA; }
.posl-nav-dot.is-active { width: 16px; background: #2F80ED; }
`;

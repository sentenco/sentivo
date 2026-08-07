import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./spTracks";

function buildSlides(lesson) {
  const slides = ["cover", "objective", "warmup"];
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
  if (lesson.comparePairs) slides.push("compare");
  if (lesson.guided) slides.push("guided");
  slides.push("practice", "assessment", "answerkey", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--cover">
      <span className="spl-pattern-badge">{lesson.patternLabel}</span>
      <h2 className="spl-cover-title">{lesson.title}</h2>
      <p className="spl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
    </div>
  );
}

function ObjectiveSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">Objective</h3>
      <p className="spl-definition">{lesson.objective}</p>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">Warm-up</h3>
      <p className="spl-cover-question">“{lesson.leadIn}”</p>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="spl-slide">
      <h3 className="spl-h">{concept.name}</h3>
      <p className="spl-definition">{concept.definition}</p>
      <div className="spl-example-list">
        {concept.examples.map((ex, i) => (
          <p key={i} className="spl-example">“{ex}”</p>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">{lesson.compareLeftLabel} vs {lesson.compareRightLabel}</h3>
      <p className="spl-compare-note">{lesson.compareNote}</p>
      <div className="spl-compare-grid">
        <span className="spl-compare-label">{lesson.compareLeftLabel}</span>
        <span className="spl-compare-label">{lesson.compareRightLabel}</span>
        {lesson.comparePairs.map((pair, i) => (
          <div key={`pair-${i}`} className="spl-compare-row-pair">
            <p className="spl-compare-cell">{pair.left}</p>
            <p className="spl-compare-cell spl-compare-cell--right">{pair.right}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="spl-quiz-item">
      <p className="spl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="spl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="spl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--part">
      <h3 className="spl-h">Guided practice</h3>
      <div className="spl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--part">
      <h3 className="spl-h">Sentence-building practice</h3>
      <ul className="spl-list spl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function McItem({ item, index }) {
  const [picked, setPicked] = useState(null);
  return (
    <div className="spl-quiz-item">
      <p className="spl-quiz-q">{index + 1}. {item.q}</p>
      <div className="spl-quiz-options">
        {item.options.map((opt, i) => {
          const answered = picked !== null;
          const isCorrect = i === item.correct;
          const isPicked = i === picked;
          const cls = answered && isCorrect ? "is-correct" : answered && isPicked ? "is-wrong" : "";
          return (
            <button
              key={i}
              type="button"
              className={`spl-quiz-opt ${cls}`}
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

function RevealAssessItem({ item, index }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="spl-quiz-item">
      <p className="spl-quiz-q">{index + 1}. {item.q}</p>
      {shown ? (
        <p className="spl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="spl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function AssessmentSlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--part">
      <span className="spl-part-badge">Assessment</span>
      <div className="spl-quiz-list">
        {lesson.assessment.map((item, i) =>
          item.type === "mc" ? (
            <McItem key={i} item={item} index={i} />
          ) : (
            <RevealAssessItem key={i} item={item} index={i} />
          )
        )}
      </div>
    </div>
  );
}

function AnswerKeySlide({ lesson }) {
  return (
    <div className="spl-slide spl-slide--part">
      <span className="spl-part-badge">Answer key</span>
      <div className="spl-answerkey-list">
        {lesson.assessment.map((item, i) => (
          <div key={i} className="spl-answerkey-row">
            <p className="spl-answerkey-q">{i + 1}. {item.q}</p>
            <p className="spl-answerkey-a">{item.type === "mc" ? item.options[item.correct] : item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="spl-slide">
      <h3 className="spl-h">Wrap-up</h3>
      <p className="spl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="spl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "objective") return <ObjectiveSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType === "guided") return <GuidedSlide lesson={lesson} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "assessment") return <AssessmentSlide lesson={lesson} />;
  if (slideType === "answerkey") return <AnswerKeySlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

export default function SentencePatternsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="spl-shell">
        <style>{CSS}</style>
        <div className="spl-stage">
          <p className="spl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="spl-shell">
      <style>{CSS}</style>
      <header className="spl-topbar">
        <span className="spl-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="spl-stage">
        <div className="spl-deck">
          <div className="spl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="spl-nav-row">
            <button type="button" className="spl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="spl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`spl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spl-nav-btn spl-nav-btn--primary"
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

.spl-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #F2ECE0 0%, #E9DFC9 50%, #DED0AE 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spl-shell * { box-sizing: border-box; }

.spl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.spl-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #7A6042;
}

.spl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.spl-missing {
  font-family: 'Quicksand', sans-serif;
  color: #7A6042;
  text-align: center;
  margin-top: 60px;
}

.spl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #E4D6BF;
  border-radius: 22px;
  padding: 20px 56px;
  box-shadow: 0 20px 50px rgba(74,54,32,0.14);
  min-height: 0;
}

.spl-deck-body {
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

.spl-slide { display: flex; flex-direction: column; align-items: center; gap: 18px; width: 100%; }
.spl-slide--cover { gap: 16px; }
.spl-slide--part { justify-content: flex-start; }

.spl-pattern-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #B0662E;
  background: rgba(176,102,46,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}
.spl-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: #4A3620;
  margin: 0;
  line-height: 1.05;
}
.spl-cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #8A6748;
  margin: 0;
}
.spl-cover-question {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 32px;
  font-style: italic;
  color: #4A3620;
  margin: 0;
  max-width: 780px;
  line-height: 1.3;
}

.spl-h {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #4A3620;
  margin: 0;
}

.spl-definition {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #5C4630;
  line-height: 1.5;
  margin: 0;
  max-width: 760px;
}

.spl-example-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 640px; }
.spl-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  font-style: italic;
  color: #4A3620;
  background: #F7F1E6;
  border-radius: 10px;
  padding: 10px 16px;
  margin: 0;
}

.spl-compare-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #7A6042;
  margin: 0;
  max-width: 640px;
}
.spl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; width: 100%; max-width: 720px; }
.spl-compare-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #B0662E;
}
.spl-compare-row-pair { display: contents; }
.spl-compare-cell {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #5C4630;
  background: #F7F1E6;
  border-radius: 10px;
  padding: 10px 14px;
  margin: 0;
  text-align: left;
}
.spl-compare-cell--right { color: #4A3620; font-weight: 600; }

.spl-list {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #5C4630;
  line-height: 1.55;
  margin: 0;
  padding-left: 20px;
}
.spl-speaking-list { max-width: 720px; font-size: 19px; text-align: left; }
.spl-speaking-list li { margin-bottom: 8px; }

.spl-recap-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #5C4630;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.spl-part-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #B0662E;
  background: rgba(176,102,46,0.12);
  border-radius: 999px;
  padding: 6px 16px;
}

.spl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.spl-quiz-item {
  background: #F7F1E6;
  border-radius: 12px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.spl-quiz-q {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #4A3620;
  margin: 0;
}

.spl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.spl-quiz-opt {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #4A3620;
  background: #FFFFFF;
  border: 1.5px solid #E4D6BF;
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
}
.spl-quiz-opt:disabled { cursor: default; }
.spl-quiz-opt.is-correct { background: #E6F6EC; border-color: #55B983; color: #1F6B41; }
.spl-quiz-opt.is-wrong { background: #FBEAEA; border-color: #D9807D; color: #A8382F; }

.spl-reveal-btn {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #B0662E;
  background: #FFFFFF;
  border: 1.5px solid #E4D6BF;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.spl-reveal-correct {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #1F6B41;
  margin: 0;
}

.spl-answerkey-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 840px; text-align: left; }
.spl-answerkey-row {
  background: #F7F1E6;
  border-radius: 12px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.spl-answerkey-q {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15.5px;
  color: #4A3620;
  margin: 0;
}
.spl-answerkey-a {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15.5px;
  color: #1F6B41;
  margin: 0;
}

.spl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #F2ECE0; flex-shrink: 0; }
.spl-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A3620;
  background: #F7F1E6;
  border: 1px solid #E4D6BF;
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
}
.spl-nav-btn--primary { background: #B0662E; color: #FFFFFF; border-color: #B0662E; }
.spl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 340px; }
.spl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #E4D6BF; }
.spl-nav-dot.is-active { width: 16px; background: #B0662E; }
`;

import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./qfTracks";

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
  if (lesson.comparePairs) slides.push("compare");
  if (lesson.guided) slides.push("guided");
  slides.push("practice", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="qfl-slide qfl-slide--cover">
      <span className="qfl-kind-badge">Lesson Time!</span>
      <h2 className="qfl-cover-title">{lesson.title}</h2>
      <p className="qfl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="qfl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="qfl-slide">
      <span className="qfl-eyebrow">Warm-up</span>
      <div className="qfl-bubble qfl-bubble--solo">
        <p className="qfl-bubble-text qfl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="qfl-slide">
      <h3 className="qfl-h">{concept.name}</h3>
      <p className="qfl-definition">{concept.definition}</p>
      <div className="qfl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="qfl-bubble">
            <p className="qfl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="qfl-slide">
      <h3 className="qfl-h">{lesson.compareLeftLabel} <span className="qfl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="qfl-compare-note">{lesson.compareNote}</p>
      <div className="qfl-compare-grid">
        <div className="qfl-panel">
          <span className="qfl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="qfl-compare-line">{pair.left}</p>)}
        </div>
        <div className="qfl-panel qfl-panel--right">
          <span className="qfl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="qfl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="qfl-quiz-item">
      <p className="qfl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="qfl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="qfl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="qfl-slide qfl-slide--part">
      <h3 className="qfl-h">Guided practice</h3>
      <div className="qfl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="qfl-slide qfl-slide--part">
      <h3 className="qfl-h">Speaking &amp; writing practice</h3>
      <ul className="qfl-list qfl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="qfl-slide">
      <h3 className="qfl-h">Wrap-up</h3>
      <p className="qfl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="qfl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType === "guided") return <GuidedSlide lesson={lesson} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

export default function QuestionFormationLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="qfl-shell">
        <style>{CSS}</style>
        <div className="qfl-stage">
          <p className="qfl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="qfl-shell">
      <style>{CSS}</style>
      <header className="qfl-topbar">
        <span className="qfl-brand"><img src="/logo-sentivo.png" alt="" className="qfl-brand-logo" />entivo</span>
        <span className="qfl-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="qfl-stage">
        <div className="qfl-deck">
          <div className="qfl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="qfl-nav-row">
            <button type="button" className="qfl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="qfl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`qfl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="qfl-nav-btn qfl-nav-btn--primary"
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
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.qfl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EAF7F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.qfl-shell * { box-sizing: border-box; }

.qfl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.qfl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.qfl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.qfl-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #0E5C63;
}

.qfl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.qfl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #0E5C63;
  text-align: center;
  margin-top: 60px;
}

.qfl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 4px solid #1A1A1A;
  border-radius: 18px;
  padding: 20px 56px;
  box-shadow: 9px 9px 0 #1A1A1A;
  min-height: 0;
}

.qfl-deck-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 0;
  overflow-y: auto;
  gap: 20px;
  padding: 8px 0;
}

.qfl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.qfl-slide--cover { gap: 14px; }
.qfl-slide--part { justify-content: flex-start; }

.qfl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #0E7C86;
}

.qfl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #0E7C86;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.qfl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 60px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #0E7C86;
}
.qfl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4C9AA1;
  margin: 0;
}

.qfl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #0E7C86;
  background: #EAF7F7;
  border: 2.5px solid #0E7C86;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.qfl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: 0.5px;
}
.qfl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.qfl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #1B3A3D;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.qfl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #0E7C86;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.qfl-bubble--solo { max-width: 720px; }
.qfl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.qfl-bubble-text--big { font-size: 24px; font-style: italic; }

.qfl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.qfl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #4C9AA1;
  margin: 0;
  max-width: 620px;
}
.qfl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.qfl-panel { background: #EAF7F7; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.qfl-panel--right { border-color: #0E7C86; }
.qfl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #0E5C63;
  margin-bottom: 8px;
}
.qfl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.qfl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B3A3D;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.qfl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.qfl-speaking-list li { margin-bottom: 8px; }

.qfl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1B3A3D;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.qfl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.qfl-quiz-item {
  background: #EAF7F7;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.qfl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.qfl-reveal-btn {
  align-self: flex-start;
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1A1A1A;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 6px 14px;
  cursor: pointer;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.qfl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.qfl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.qfl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #CFEFEF; flex-shrink: 0; }
.qfl-nav-btn {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1A1A1A;
  background: #FFFFFF;
  border: 2.5px solid #1A1A1A;
  border-radius: 10px;
  padding: 9px 18px;
  cursor: pointer;
  box-shadow: 4px 4px 0 #1A1A1A;
}
.qfl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.qfl-nav-btn--primary { background: #FFC300; }
.qfl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.qfl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.qfl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.qfl-nav-dot.is-active { background: #0E7C86; }
`;

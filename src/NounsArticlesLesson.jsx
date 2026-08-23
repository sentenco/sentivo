import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./naqTracks";

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
    <div className="naql-slide naql-slide--cover">
      <span className="naql-kind-badge">Lesson Time!</span>
      <h2 className="naql-cover-title">{lesson.title}</h2>
      <p className="naql-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="naql-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="naql-slide">
      <span className="naql-eyebrow">Warm-up</span>
      <div className="naql-bubble naql-bubble--solo">
        <p className="naql-bubble-text naql-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="naql-slide">
      <h3 className="naql-h">{concept.name}</h3>
      <p className="naql-definition">{concept.definition}</p>
      <div className="naql-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="naql-bubble">
            <p className="naql-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="naql-slide">
      <h3 className="naql-h">{lesson.compareLeftLabel} <span className="naql-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="naql-compare-note">{lesson.compareNote}</p>
      <div className="naql-compare-grid">
        <div className="naql-panel">
          <span className="naql-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="naql-compare-line">{pair.left}</p>)}
        </div>
        <div className="naql-panel naql-panel--right">
          <span className="naql-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="naql-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="naql-quiz-item">
      <p className="naql-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="naql-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="naql-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="naql-slide naql-slide--part">
      <h3 className="naql-h">Guided practice</h3>
      <div className="naql-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="naql-slide naql-slide--part">
      <h3 className="naql-h">Speaking &amp; writing practice</h3>
      <ul className="naql-list naql-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="naql-slide">
      <h3 className="naql-h">Wrap-up</h3>
      <p className="naql-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="naql-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function NounsArticlesLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="naql-shell">
        <style>{CSS}</style>
        <div className="naql-stage">
          <p className="naql-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="naql-shell">
      <style>{CSS}</style>
      <header className="naql-topbar">
        <span className="naql-brand"><img src="/logo-sentivo.png" alt="" className="naql-brand-logo" />entivo</span>
        <span className="naql-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="naql-stage">
        <div className="naql-deck">
          <div className="naql-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="naql-nav-row">
            <button type="button" className="naql-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="naql-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`naql-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="naql-nav-btn naql-nav-btn--primary"
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

.naql-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FDF0E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.naql-shell * { box-sizing: border-box; }

.naql-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.naql-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.naql-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.naql-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #9A4118;
}

.naql-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.naql-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #9A4118;
  text-align: center;
  margin-top: 60px;
}

.naql-deck {
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

.naql-deck-body {
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

.naql-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.naql-slide--cover { gap: 14px; }
.naql-slide--part { justify-content: flex-start; }

.naql-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #E1592A;
}

.naql-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.naql-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #E1592A;
}
.naql-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #C97A4E;
  margin: 0;
}

.naql-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #E1592A;
  background: #FDF0E9;
  border: 2.5px solid #E1592A;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.naql-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #E1592A;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.naql-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.naql-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3D2416;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.naql-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #E1592A;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.naql-bubble--solo { max-width: 720px; }
.naql-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.naql-bubble-text--big { font-size: 24px; font-style: italic; }

.naql-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.naql-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C97A4E;
  margin: 0;
  max-width: 620px;
}
.naql-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.naql-panel { background: #FDF0E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.naql-panel--right { border-color: #E1592A; }
.naql-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #9A4118;
  margin-bottom: 8px;
}
.naql-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.naql-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3D2416;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.naql-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.naql-speaking-list li { margin-bottom: 8px; }

.naql-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3D2416;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.naql-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.naql-quiz-item {
  background: #FDF0E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.naql-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.naql-reveal-btn {
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
.naql-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.naql-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.naql-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F6DCC7; flex-shrink: 0; }
.naql-nav-btn {
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
.naql-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.naql-nav-btn--primary { background: #FFC300; }
.naql-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.naql-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.naql-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.naql-nav-dot.is-active { background: #E1592A; }
`;

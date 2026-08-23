import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./prTracks";

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
    <div className="prl-slide prl-slide--cover">
      <span className="prl-kind-badge">Lesson Time!</span>
      <h2 className="prl-cover-title">{lesson.title}</h2>
      <p className="prl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="prl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="prl-slide">
      <span className="prl-eyebrow">Warm-up</span>
      <div className="prl-bubble prl-bubble--solo">
        <p className="prl-bubble-text prl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="prl-slide">
      <h3 className="prl-h">{concept.name}</h3>
      <p className="prl-definition">{concept.definition}</p>
      <div className="prl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="prl-bubble">
            <p className="prl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="prl-slide">
      <h3 className="prl-h">{lesson.compareLeftLabel} <span className="prl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="prl-compare-note">{lesson.compareNote}</p>
      <div className="prl-compare-grid">
        <div className="prl-panel">
          <span className="prl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="prl-compare-line">{pair.left}</p>)}
        </div>
        <div className="prl-panel prl-panel--right">
          <span className="prl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="prl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="prl-quiz-item">
      <p className="prl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="prl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="prl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="prl-slide prl-slide--part">
      <h3 className="prl-h">Guided practice</h3>
      <div className="prl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="prl-slide prl-slide--part">
      <h3 className="prl-h">Speaking &amp; writing practice</h3>
      <ul className="prl-list prl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="prl-slide">
      <h3 className="prl-h">Wrap-up</h3>
      <p className="prl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="prl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function PrepositionsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="prl-shell">
        <style>{CSS}</style>
        <div className="prl-stage">
          <p className="prl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="prl-shell">
      <style>{CSS}</style>
      <header className="prl-topbar">
        <span className="prl-brand"><img src="/logo-sentivo.png" alt="" className="prl-brand-logo" />entivo</span>
        <span className="prl-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="prl-stage">
        <div className="prl-deck">
          <div className="prl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="prl-nav-row">
            <button type="button" className="prl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="prl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`prl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="prl-nav-btn prl-nav-btn--primary"
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

.prl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.prl-shell * { box-sizing: border-box; }

.prl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.prl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.prl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.prl-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #7A2828;
}

.prl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.prl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #7A2828;
  text-align: center;
  margin-top: 60px;
}

.prl-deck {
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

.prl-deck-body {
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

.prl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.prl-slide--cover { gap: 14px; }
.prl-slide--part { justify-content: flex-start; }

.prl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #B23A3A;
}

.prl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #B23A3A;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.prl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #B23A3A;
}
.prl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #C97C7C;
  margin: 0;
}

.prl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B23A3A;
  background: #FBEEEE;
  border: 2.5px solid #B23A3A;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.prl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: 0.5px;
}
.prl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.prl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A1E1E;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.prl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #B23A3A;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.prl-bubble--solo { max-width: 720px; }
.prl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.prl-bubble-text--big { font-size: 24px; font-style: italic; }

.prl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.prl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C97C7C;
  margin: 0;
  max-width: 620px;
}
.prl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.prl-panel { background: #FBEEEE; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.prl-panel--right { border-color: #B23A3A; }
.prl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #7A2828;
  margin-bottom: 8px;
}
.prl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.prl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A1E1E;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.prl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.prl-speaking-list li { margin-bottom: 8px; }

.prl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A1E1E;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.prl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.prl-quiz-item {
  background: #FBEEEE;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.prl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.prl-reveal-btn {
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
.prl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.prl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.prl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #F3D9D9; flex-shrink: 0; }
.prl-nav-btn {
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
.prl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.prl-nav-btn--primary { background: #FFC300; }
.prl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.prl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.prl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.prl-nav-dot.is-active { background: #B23A3A; }
`;

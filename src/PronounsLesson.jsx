import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./ppTracks";

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
    <div className="ppl-slide ppl-slide--cover">
      <span className="ppl-kind-badge">Lesson Time!</span>
      <h2 className="ppl-cover-title">{lesson.title}</h2>
      <p className="ppl-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="ppl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="ppl-slide">
      <span className="ppl-eyebrow">Warm-up</span>
      <div className="ppl-bubble ppl-bubble--solo">
        <p className="ppl-bubble-text ppl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="ppl-slide">
      <h3 className="ppl-h">{concept.name}</h3>
      <p className="ppl-definition">{concept.definition}</p>
      <div className="ppl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="ppl-bubble">
            <p className="ppl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="ppl-slide">
      <h3 className="ppl-h">{lesson.compareLeftLabel} <span className="ppl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="ppl-compare-note">{lesson.compareNote}</p>
      <div className="ppl-compare-grid">
        <div className="ppl-panel">
          <span className="ppl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="ppl-compare-line">{pair.left}</p>)}
        </div>
        <div className="ppl-panel ppl-panel--right">
          <span className="ppl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="ppl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="ppl-quiz-item">
      <p className="ppl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="ppl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="ppl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="ppl-slide ppl-slide--part">
      <h3 className="ppl-h">Guided practice</h3>
      <div className="ppl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="ppl-slide ppl-slide--part">
      <h3 className="ppl-h">Speaking &amp; writing practice</h3>
      <ul className="ppl-list ppl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="ppl-slide">
      <h3 className="ppl-h">Wrap-up</h3>
      <p className="ppl-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="ppl-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function PronounsLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="ppl-shell">
        <style>{CSS}</style>
        <div className="ppl-stage">
          <p className="ppl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ppl-shell">
      <style>{CSS}</style>
      <header className="ppl-topbar">
        <span className="ppl-brand"><img src="/logo-sentivo.png" alt="" className="ppl-brand-logo" />entivo</span>
        <span className="ppl-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="ppl-stage">
        <div className="ppl-deck">
          <div className="ppl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="ppl-nav-row">
            <button type="button" className="ppl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="ppl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ppl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ppl-nav-btn ppl-nav-btn--primary"
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

.ppl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F5F9E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.ppl-shell * { box-sizing: border-box; }

.ppl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.ppl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.ppl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.ppl-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #4E6B13;
}

.ppl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.ppl-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #4E6B13;
  text-align: center;
  margin-top: 60px;
}

.ppl-deck {
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

.ppl-deck-body {
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

.ppl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.ppl-slide--cover { gap: 14px; }
.ppl-slide--part { justify-content: flex-start; }

.ppl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6B9E1E;
}

.ppl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #6B9E1E;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.ppl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 52px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6B9E1E;
}
.ppl-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8FAE4E;
  margin: 0;
}

.ppl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6B9E1E;
  background: #F5F9E9;
  border: 2.5px solid #6B9E1E;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.ppl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #6B9E1E;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.ppl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.ppl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2A3517;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.ppl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6B9E1E;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.ppl-bubble--solo { max-width: 720px; }
.ppl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.ppl-bubble-text--big { font-size: 24px; font-style: italic; }

.ppl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.ppl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8FAE4E;
  margin: 0;
  max-width: 620px;
}
.ppl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.ppl-panel { background: #F5F9E9; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.ppl-panel--right { border-color: #6B9E1E; }
.ppl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #4E6B13;
  margin-bottom: 8px;
}
.ppl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.ppl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2A3517;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.ppl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.ppl-speaking-list li { margin-bottom: 8px; }

.ppl-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #2A3517;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.ppl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.ppl-quiz-item {
  background: #F5F9E9;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ppl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.ppl-reveal-btn {
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
.ppl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.ppl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.ppl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E4EFCB; flex-shrink: 0; }
.ppl-nav-btn {
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
.ppl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.ppl-nav-btn--primary { background: #FFC300; }
.ppl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.ppl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.ppl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.ppl-nav-dot.is-active { background: #6B9E1E; }
`;

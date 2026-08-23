import { useState } from "react";
import { useParams } from "react-router-dom";
import LESSONS, { getLessonByCode } from "./giTracks";

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
    <div className="gil-slide gil-slide--cover">
      <span className="gil-kind-badge">Lesson Time!</span>
      <h2 className="gil-cover-title">{lesson.title}</h2>
      <p className="gil-cover-sub">Lesson {lesson.number} of {LESSONS.length}</p>
      <span className="gil-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="gil-slide">
      <span className="gil-eyebrow">Warm-up</span>
      <div className="gil-bubble gil-bubble--solo">
        <p className="gil-bubble-text gil-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="gil-slide">
      <h3 className="gil-h">{concept.name}</h3>
      <p className="gil-definition">{concept.definition}</p>
      <div className="gil-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="gil-bubble">
            <p className="gil-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="gil-slide">
      <h3 className="gil-h">{lesson.compareLeftLabel} <span className="gil-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="gil-compare-note">{lesson.compareNote}</p>
      <div className="gil-compare-grid">
        <div className="gil-panel">
          <span className="gil-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="gil-compare-line">{pair.left}</p>)}
        </div>
        <div className="gil-panel gil-panel--right">
          <span className="gil-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="gil-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="gil-quiz-item">
      <p className="gil-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="gil-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="gil-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="gil-slide gil-slide--part">
      <h3 className="gil-h">Guided practice</h3>
      <div className="gil-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="gil-slide gil-slide--part">
      <h3 className="gil-h">Speaking &amp; writing practice</h3>
      <ul className="gil-list gil-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="gil-slide">
      <h3 className="gil-h">Wrap-up</h3>
      <p className="gil-definition">{lesson.wrapup}</p>
      {lesson.nextHint && <p className="gil-recap-line">Next: <strong>{lesson.nextHint}</strong></p>}
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

export default function GerundsInfinitivesLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLessonByCode(code);

  if (!lesson) {
    return (
      <div className="gil-shell">
        <style>{CSS}</style>
        <div className="gil-stage">
          <p className="gil-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="gil-shell">
      <style>{CSS}</style>
      <header className="gil-topbar">
        <span className="gil-brand"><img src="/logo-sentivo.png" alt="" className="gil-brand-logo" />entivo</span>
        <span className="gil-topbar-title">Lesson {lesson.number} · {lesson.title}</span>
      </header>

      <div className="gil-stage">
        <div className="gil-deck">
          <div className="gil-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="gil-nav-row">
            <button type="button" className="gil-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="gil-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`gil-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="gil-nav-btn gil-nav-btn--primary"
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

.gil-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FBF7EA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.gil-shell * { box-sizing: border-box; }

.gil-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.gil-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.gil-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.gil-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #6E5A1F;
}

.gil-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.gil-missing {
  font-family: 'Comic Neue', cursive, sans-serif;
  color: #6E5A1F;
  text-align: center;
  margin-top: 60px;
}

.gil-deck {
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

.gil-deck-body {
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

.gil-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.gil-slide--cover { gap: 14px; }
.gil-slide--part { justify-content: flex-start; }

.gil-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #96762B;
}

.gil-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #96762B;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.gil-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 46px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #96762B;
}
.gil-cover-sub {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #B79E56;
  margin: 0;
}

.gil-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #96762B;
  background: #FBF7EA;
  border: 2.5px solid #96762B;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.gil-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: 0.5px;
}
.gil-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.gil-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #3A2F12;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.gil-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #96762B;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.gil-bubble--solo { max-width: 720px; }
.gil-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.gil-bubble-text--big { font-size: 24px; font-style: italic; }

.gil-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.gil-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #B79E56;
  margin: 0;
  max-width: 620px;
}
.gil-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.gil-panel { background: #FBF7EA; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.gil-panel--right { border-color: #96762B; }
.gil-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #6E5A1F;
  margin-bottom: 8px;
}
.gil-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.gil-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A2F12;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.gil-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.gil-speaking-list li { margin-bottom: 8px; }

.gil-recap-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #3A2F12;
  line-height: 1.5;
  margin: 0;
  max-width: 700px;
}

.gil-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.gil-quiz-item {
  background: #FBF7EA;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.gil-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.gil-reveal-btn {
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
.gil-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.gil-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.gil-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #EFE3BE; flex-shrink: 0; }
.gil-nav-btn {
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
.gil-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.gil-nav-btn--primary { background: #FFC300; }
.gil-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.gil-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.gil-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.gil-nav-dot.is-active { background: #96762B; }
`;

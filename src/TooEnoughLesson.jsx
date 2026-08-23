import { useState } from "react";

const LESSON = {
  title: "Too / Enough",
  formula: "too + adjective (excessive)  ·  adjective + enough (sufficient)",
  leadIn: "Describe something that's too expensive for you to buy right now, and something that's cheap enough.",
  teach: [
    {
      name: "Too — Before the Adjective, Meaning Excessive",
      definition: "Too goes directly before an adjective and shows there's more of something than needed, usually causing a problem.",
      examples: ["This coffee is too hot to drink.", "The test was too difficult for most students.", "It's too late to call her now."],
    },
    {
      name: "Enough — After the Adjective, Meaning Sufficient",
      definition: "Enough goes directly after an adjective (but before a noun) and shows there's a sufficient amount for something to happen.",
      examples: ["The coffee is cool enough to drink.", "She's old enough to drive.", "We don't have enough time to finish."],
    },
  ],
  compareLeftLabel: "Too + adjective — excessive, a problem",
  compareRightLabel: "Adjective + enough — sufficient, okay",
  compareNote: "Too and enough often describe the exact same situation from opposite sides — one says there's too much of a problem, the other says there's just the right amount.",
  comparePairs: [
    { left: "This box is too heavy to carry.", right: "This box isn't light enough to carry alone." },
    { left: "He's too young to drive.", right: "He isn't old enough to drive." },
  ],
  guided: [
    { prompt: "This shirt is ___ small for me. (excessive, before adjective)", answer: "too" },
    { prompt: "Is she tall ___ to reach the shelf? (sufficient, after adjective)", answer: "enough" },
    { prompt: "The soup is ___ hot to eat right now.", answer: "too" },
  ],
  practice: [
    "Write one sentence using too + adjective to describe a problem.",
    "Write one sentence using adjective + enough to describe something sufficient.",
    "Rewrite one of your too sentences using enough instead, keeping a similar meaning.",
  ],
  wrapup: "Too goes before an adjective and means excessive. Enough goes after an adjective and means sufficient — they often describe the same situation from opposite angles.",
};

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
    <div className="tel-slide tel-slide--cover">
      <span className="tel-kind-badge">Lesson Time!</span>
      <h2 className="tel-cover-title">{lesson.title}</h2>
      <span className="tel-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="tel-slide">
      <span className="tel-eyebrow">Warm-up</span>
      <div className="tel-bubble tel-bubble--solo">
        <p className="tel-bubble-text tel-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="tel-slide">
      <h3 className="tel-h">{concept.name}</h3>
      <p className="tel-definition">{concept.definition}</p>
      <div className="tel-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="tel-bubble">
            <p className="tel-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="tel-slide">
      <h3 className="tel-h">{lesson.compareLeftLabel} <span className="tel-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="tel-compare-note">{lesson.compareNote}</p>
      <div className="tel-compare-grid">
        <div className="tel-panel">
          <span className="tel-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="tel-compare-line">{pair.left}</p>)}
        </div>
        <div className="tel-panel tel-panel--right">
          <span className="tel-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="tel-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="tel-quiz-item">
      <p className="tel-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="tel-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="tel-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="tel-slide tel-slide--part">
      <h3 className="tel-h">Guided practice</h3>
      <div className="tel-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="tel-slide tel-slide--part">
      <h3 className="tel-h">Speaking &amp; writing practice</h3>
      <ul className="tel-list tel-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="tel-slide">
      <h3 className="tel-h">Wrap-up</h3>
      <p className="tel-definition">{lesson.wrapup}</p>
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

export default function TooEnoughLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="tel-shell">
      <style>{CSS}</style>
      <header className="tel-topbar">
        <span className="tel-brand"><img src="/logo-sentivo.png" alt="" className="tel-brand-logo" />entivo</span>
        <span className="tel-topbar-title">{lesson.title}</span>
      </header>

      <div className="tel-stage">
        <div className="tel-deck">
          <div className="tel-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="tel-nav-row">
            <button type="button" className="tel-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="tel-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`tel-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="tel-nav-btn tel-nav-btn--primary"
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

.tel-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F4F0FB;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.tel-shell * { box-sizing: border-box; }

.tel-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.tel-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.tel-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.tel-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #453177;
}

.tel-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.tel-deck {
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

.tel-deck-body {
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

.tel-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.tel-slide--cover { gap: 14px; }
.tel-slide--part { justify-content: flex-start; }

.tel-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #6247AA;
}

.tel-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #6247AA;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.tel-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #6247AA;
}

.tel-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #6247AA;
  background: #F4F0FB;
  border: 2.5px solid #6247AA;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.tel-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: 0.5px;
}
.tel-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.tel-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2E2542;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.tel-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #6247AA;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.tel-bubble--solo { max-width: 720px; }
.tel-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.tel-bubble-text--big { font-size: 24px; font-style: italic; }

.tel-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.tel-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8A79BE;
  margin: 0;
  max-width: 620px;
}
.tel-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.tel-panel { background: #F4F0FB; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.tel-panel--right { border-color: #6247AA; }
.tel-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #453177;
  margin-bottom: 8px;
}
.tel-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.tel-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2542;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.tel-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.tel-speaking-list li { margin-bottom: 8px; }

.tel-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.tel-quiz-item {
  background: #F4F0FB;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tel-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.tel-reveal-btn {
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
.tel-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.tel-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.tel-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E1D8F5; flex-shrink: 0; }
.tel-nav-btn {
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
.tel-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.tel-nav-btn--primary { background: #FFC300; }
.tel-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.tel-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.tel-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.tel-nav-dot.is-active { background: #6247AA; }
`;

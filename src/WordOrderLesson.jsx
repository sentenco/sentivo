import { useState } from "react";

const LESSON = {
  title: "Word Order & Inversion",
  formula: "opinion-size-age-color (adjective order)  ·  negative word + auxiliary + subject (inversion)",
  leadIn: "Describe an object near you using at least two adjectives, in the right order.",
  teach: [
    {
      name: "Adjective Order — Opinion Before Fact",
      definition: "When stacking multiple adjectives before a noun, opinion words come first, followed by fact-based categories like size, age, and color, in that order.",
      examples: ["A beautiful small old house.", "An ugly big red car.", "A lovely little brown dog."],
    },
    {
      name: "Inversion for Emphasis",
      definition: "Starting a sentence with a negative or limiting word flips the normal subject-verb order, for dramatic emphasis in more formal or literary English.",
      examples: ["Never have I seen such a mess.", "Not only did she win, she broke the record.", "Rarely do we get a day off."],
    },
  ],
  compareLeftLabel: "Normal order",
  compareRightLabel: "Inverted for emphasis",
  compareNote: "Inversion isn't required — it's a stylistic choice that adds emphasis and a more formal, dramatic tone to the exact same information.",
  comparePairs: [
    { left: "I have never seen such a mess.", right: "Never have I seen such a mess." },
    { left: "She didn't only win, she broke the record.", right: "Not only did she win, she broke the record." },
  ],
  guided: [
    { prompt: "Put in order: 'ugly / old / big' + house.", answer: "ugly big old house (opinion → size → age)" },
    { prompt: "___ have I tasted such delicious food. (inversion, negative emphasis)", answer: "Never" },
    { prompt: "Not only ___ she finish first, she set a new record. (inversion)", answer: "did" },
  ],
  practice: [
    "Describe an object using three adjectives in the correct order.",
    "Rewrite a normal sentence using never at the front, with inversion.",
    "Rewrite a normal sentence using not only, with inversion.",
  ],
  wrapup: "Adjective order follows opinion before fact — size, age, color, and beyond. Inversion moves a negative or limiting word to the front for dramatic emphasis.",
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
    <div className="wol-slide wol-slide--cover">
      <span className="wol-kind-badge">Lesson Time!</span>
      <h2 className="wol-cover-title">{lesson.title}</h2>
      <span className="wol-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <span className="wol-eyebrow">Warm-up</span>
      <div className="wol-bubble wol-bubble--solo">
        <p className="wol-bubble-text wol-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="wol-slide">
      <h3 className="wol-h">{concept.name}</h3>
      <p className="wol-definition">{concept.definition}</p>
      <div className="wol-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="wol-bubble">
            <p className="wol-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <h3 className="wol-h">{lesson.compareLeftLabel} <span className="wol-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="wol-compare-note">{lesson.compareNote}</p>
      <div className="wol-compare-grid">
        <div className="wol-panel">
          <span className="wol-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="wol-compare-line">{pair.left}</p>)}
        </div>
        <div className="wol-panel wol-panel--right">
          <span className="wol-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="wol-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="wol-quiz-item">
      <p className="wol-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="wol-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="wol-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="wol-slide wol-slide--part">
      <h3 className="wol-h">Guided practice</h3>
      <div className="wol-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="wol-slide wol-slide--part">
      <h3 className="wol-h">Speaking &amp; writing practice</h3>
      <ul className="wol-list wol-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="wol-slide">
      <h3 className="wol-h">Wrap-up</h3>
      <p className="wol-definition">{lesson.wrapup}</p>
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

export default function WordOrderLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="wol-shell">
      <style>{CSS}</style>
      <header className="wol-topbar">
        <span className="wol-brand"><img src="/logo-sentivo.png" alt="" className="wol-brand-logo" />entivo</span>
        <span className="wol-topbar-title">{lesson.title}</span>
      </header>

      <div className="wol-stage">
        <div className="wol-deck">
          <div className="wol-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="wol-nav-row">
            <button type="button" className="wol-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="wol-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`wol-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="wol-nav-btn wol-nav-btn--primary"
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

.wol-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #F3EDE5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.wol-shell * { box-sizing: border-box; }

.wol-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.wol-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.wol-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.wol-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #5C452F;
}

.wol-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.wol-deck {
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

.wol-deck-body {
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

.wol-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.wol-slide--cover { gap: 14px; }
.wol-slide--part { justify-content: flex-start; }

.wol-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #8A6748;
}

.wol-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #8A6748;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.wol-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 44px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #8A6748;
}

.wol-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #5C452F;
  background: #F3EDE5;
  border: 2.5px solid #8A6748;
  border-radius: 999px;
  padding: 8px 20px;
  margin-top: 4px;
  max-width: 640px;
}

.wol-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: 0.5px;
}
.wol-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.wol-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #332619;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.wol-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #8A6748;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.wol-bubble--solo { max-width: 720px; }
.wol-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.wol-bubble-text--big { font-size: 24px; font-style: italic; }

.wol-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.wol-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #A98F6E;
  margin: 0;
  max-width: 620px;
}
.wol-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.wol-panel { background: #F3EDE5; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.wol-panel--right { border-color: #8A6748; }
.wol-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #5C452F;
  margin-bottom: 8px;
}
.wol-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.wol-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #332619;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.wol-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.wol-speaking-list li { margin-bottom: 8px; }

.wol-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.wol-quiz-item {
  background: #F3EDE5;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.wol-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.wol-reveal-btn {
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
.wol-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.wol-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.wol-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #E4D8C7; flex-shrink: 0; }
.wol-nav-btn {
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
.wol-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.wol-nav-btn--primary { background: #FFC300; }
.wol-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.wol-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.wol-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.wol-nav-dot.is-active { background: #8A6748; }
`;

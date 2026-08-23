import { useState } from "react";

const LESSON = {
  title: "Emphasis with Do/Does/Did",
  formula: "I DO/DOES/DID + base verb (stress on the auxiliary, for emphasis)",
  leadIn: "Think of something people often doubt about you. Defend yourself starting with 'I DO...!'",
  teach: [
    {
      name: "Adding Do/Does/Did for Emphasis",
      definition: "In an affirmative sentence that would normally have no auxiliary, adding do/does/did (stressed in speech) emphasizes that something is true, especially to contradict a doubt.",
      examples: ["I do like it! I just don't show it.", "She does care about you.", "He did finish his homework, I saw him."],
    },
    {
      name: "Correcting a Doubt or Denial",
      definition: "This emphatic do is especially common right after someone doubts or denies something, to push back directly.",
      examples: ["\"You never listen to me.\" \"I do listen!\"", "\"She probably forgot.\" \"She did remember, actually.\"", "\"He doesn't even try.\" \"He does try, he's just slow.\""],
    },
  ],
  compareLeftLabel: "Neutral statement",
  compareRightLabel: "Emphatic — contradicting a doubt",
  compareNote: "The neutral version just states a fact. The emphatic version pushes back against something someone else said or assumed.",
  comparePairs: [
    { left: "I like your cooking.", right: "I do like your cooking! I just ate a big lunch." },
    { left: "She finished the project.", right: "She did finish the project — check your email." },
  ],
  guided: [
    { prompt: "\"You don't care.\" \"I ___ care!\" (emphasis)", answer: "do" },
    { prompt: "\"He never calls.\" \"He ___ call, you're just always busy.\" (emphasis)", answer: "does" },
    { prompt: "\"They didn't try hard enough.\" \"They ___ try hard!\" (emphasis, past)", answer: "did" },
  ],
  practice: [
    "Write one emphatic sentence using do, contradicting a doubt someone might have about you.",
    "Write one short dialogue where someone doubts something and the other person uses does or did to push back.",
    "Say one true thing about yourself out loud, adding stress on do/does/did for emphasis.",
  ],
  wrapup: "Do, does, and did can be added to an affirmative sentence purely for emphasis — especially useful for pushing back against a doubt or denial.",
};

function buildSlides(lesson) {
  const slides = ["cover", "warmup"];
  if (lesson.comparePairs) slides.push("predict", "compare");
  lesson.teach.forEach((_, i) => slides.push(`teach${i}`));
  if (lesson.guided) slides.push("guided");
  slides.push("practice", "wrapup");
  return slides;
}

function CoverSlide({ lesson }) {
  return (
    <div className="edl-slide edl-slide--cover">
      <span className="edl-kind-badge">Lesson Time!</span>
      <h2 className="edl-cover-title">{lesson.title}</h2>
      <span className="edl-formula-chip">{lesson.formula}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="edl-slide">
      <span className="edl-eyebrow">Warm-up</span>
      <div className="edl-bubble edl-bubble--solo">
        <p className="edl-bubble-text edl-bubble-text--big">“{lesson.leadIn}”</p>
      </div>
    </div>
  );
}

function TeachSlide({ lesson, index }) {
  const concept = lesson.teach[index];
  return (
    <div className="edl-slide">
      <h3 className="edl-h">{concept.name}</h3>
      <p className="edl-definition">{concept.definition}</p>
      <div className="edl-example-list">
        {concept.examples.map((ex, i) => (
          <div key={i} className="edl-bubble">
            <p className="edl-bubble-text">{ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PredictSlide({ lesson }) {
  const left = lesson.compareLeftLabel.split(" — ")[0].trim();
  const right = lesson.compareRightLabel.split(" — ")[0].trim();
  return (
    <div className="edl-slide">
      <span className="edl-eyebrow">Think About It</span>
      <h3 className="edl-h">{left} <span className="edl-vs">vs</span> {right}</h3>
      <p className="edl-compare-note">What's the difference? Take a guess before we explain.</p>
    </div>
  );
}

function CompareSlide({ lesson }) {
  return (
    <div className="edl-slide">
      <h3 className="edl-h">{lesson.compareLeftLabel} <span className="edl-vs">vs</span> {lesson.compareRightLabel}</h3>
      <p className="edl-compare-note">{lesson.compareNote}</p>
      <div className="edl-compare-grid">
        <div className="edl-panel">
          <span className="edl-compare-label">{lesson.compareLeftLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`l-${i}`} className="edl-compare-line">{pair.left}</p>)}
        </div>
        <div className="edl-panel edl-panel--right">
          <span className="edl-compare-label">{lesson.compareRightLabel}</span>
          {lesson.comparePairs.map((pair, i) => <p key={`r-${i}`} className="edl-compare-line">{pair.right}</p>)}
        </div>
      </div>
    </div>
  );
}

function GuidedItem({ item }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="edl-quiz-item">
      <p className="edl-quiz-q">{item.prompt}</p>
      {shown ? (
        <p className="edl-reveal-correct">{item.answer}</p>
      ) : (
        <button type="button" className="edl-reveal-btn" onClick={() => setShown(true)}>Show answer</button>
      )}
    </div>
  );
}

function GuidedSlide({ lesson }) {
  return (
    <div className="edl-slide edl-slide--part">
      <h3 className="edl-h">Guided practice</h3>
      <div className="edl-quiz-list">
        {lesson.guided.map((item, i) => <GuidedItem key={i} item={item} />)}
      </div>
    </div>
  );
}

function PracticeSlide({ lesson }) {
  return (
    <div className="edl-slide edl-slide--part">
      <h3 className="edl-h">Speaking &amp; writing practice</h3>
      <ul className="edl-list edl-speaking-list">
        {lesson.practice.map((line, i) => <li key={i}>{line}</li>)}
      </ul>
    </div>
  );
}

function WrapupSlide({ lesson }) {
  return (
    <div className="edl-slide">
      <h3 className="edl-h">Wrap-up</h3>
      <p className="edl-definition">{lesson.wrapup}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType === "cover") return <CoverSlide lesson={lesson} />;
  if (slideType === "warmup") return <WarmupSlide lesson={lesson} />;
  if (slideType.startsWith("teach")) return <TeachSlide lesson={lesson} index={Number(slideType.replace("teach", ""))} />;
  if (slideType === "predict") return <PredictSlide lesson={lesson} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType === "guided") return <GuidedSlide lesson={lesson} />;
  if (slideType === "practice") return <PracticeSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide lesson={lesson} />;
  return null;
}

export default function EmphasisDoLesson() {
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = LESSON;
  const slideTypes = buildSlides(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="edl-shell">
      <style>{CSS}</style>
      <header className="edl-topbar">
        <span className="edl-brand"><img src="/logo-sentivo.png" alt="" className="edl-brand-logo" />entivo</span>
        <span className="edl-topbar-title">{lesson.title}</span>
      </header>

      <div className="edl-stage">
        <div className="edl-deck">
          <div className="edl-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="edl-nav-row">
            <button type="button" className="edl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Back
            </button>
            <div className="edl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`edl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="edl-nav-btn edl-nav-btn--primary"
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

.edl-shell {
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #EFF3F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.edl-shell * { box-sizing: border-box; }

.edl-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.edl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
}
.edl-brand-logo { height: 24px; width: auto; display: block; margin-right: -4px; }
.edl-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #3E535F;
}

.edl-stage {
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.edl-deck {
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

.edl-deck-body {
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

.edl-slide { display: flex; flex-direction: column; align-items: center; gap: 16px; width: 100%; }
.edl-slide--cover { gap: 14px; }
.edl-slide--part { justify-content: flex-start; }

.edl-eyebrow {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #55707F;
}

.edl-kind-badge {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  background: #55707F;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 4px 18px 6px;
  transform: rotate(-3deg);
  display: inline-block;
}
.edl-cover-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 40px;
  color: #1A1A1A;
  margin: 4px 0 0;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 3px 3px 0 #55707F;
}

.edl-formula-chip {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3E535F;
  background: #EFF3F4;
  border: 2.5px solid #55707F;
  border-radius: 999px;
  padding: 8px 18px;
  margin-top: 4px;
  max-width: 660px;
}

.edl-h {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 32px;
  color: #FFFFFF;
  margin: 0;
  letter-spacing: 0.5px;
  display: inline-block;
  background: #55707F;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 6px 22px 8px;
  transform: rotate(-1.2deg);
  box-shadow: 4px 4px 0 #1A1A1A;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.25);
}
.edl-vs {
  display: inline-block;
  background: #FFC300;
  border: 2.5px solid #1A1A1A;
  border-radius: 8px;
  padding: 0 8px;
  transform: rotate(-4deg);
  font-size: 0.65em;
  vertical-align: middle;
}

.edl-definition {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #22303A;
  line-height: 1.55;
  margin: 0;
  max-width: 700px;
}

.edl-bubble {
  position: relative;
  background: #FFFFFF;
  border: 3px solid #55707F;
  border-radius: 18px;
  padding: 12px 20px;
  max-width: 560px;
  align-self: center;
}
.edl-bubble--solo { max-width: 720px; }
.edl-bubble-text {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1A1A1A;
  margin: 0;
}
.edl-bubble-text--big { font-size: 24px; font-style: italic; }

.edl-example-list { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 620px; align-items: center; }

.edl-compare-note {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #8CA0AB;
  margin: 0;
  max-width: 620px;
}
.edl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 700px; }
.edl-panel { background: #EFF3F4; border: 3px solid #1A1A1A; border-radius: 14px; padding: 14px 16px; text-align: left; }
.edl-panel--right { border-color: #55707F; }
.edl-compare-label {
  display: block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.3px;
  color: #3E535F;
  margin-bottom: 8px;
}
.edl-compare-line {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1A1A1A;
  margin: 0 0 8px;
}

.edl-list {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #22303A;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.edl-speaking-list { max-width: 720px; font-size: 18px; text-align: left; }
.edl-speaking-list li { margin-bottom: 8px; }

.edl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 840px;
  text-align: left;
}
.edl-quiz-item {
  background: #EFF3F4;
  border: 3px solid #1A1A1A;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.edl-quiz-q {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A1A1A;
  margin: 0;
}

.edl-reveal-btn {
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
.edl-reveal-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.edl-reveal-correct {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F8A63;
  margin: 0;
}

.edl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 3px dashed #DCE5E8; flex-shrink: 0; }
.edl-nav-btn {
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
.edl-nav-btn:active:not(:disabled) { box-shadow: 0 0 0 #1A1A1A; transform: translate(4px, 4px); }
.edl-nav-btn--primary { background: #FFC300; }
.edl-nav-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 4px 4px 0 #1A1A1A; }
.edl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 340px; }
.edl-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #FFFFFF; border: 2px solid #1A1A1A; }
.edl-nav-dot.is-active { background: #55707F; }
`;

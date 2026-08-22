import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonByCode } from "./posTracks";

// One signature color per real part of speech -- used only on that
// concept's slide (and its mistake slide), never as a flat course-wide
// theme. Sub-forms of the same POS (Action/Being verb, Coordinating/
// Subordinating conjunction, etc.) share their parent's color; the two
// "contrast" topics (Nouns vs Pronouns, Adjectives vs Adverbs) use two
// different colors on purpose, to make the contrast visible at a glance.
const POS_COLORS = {
  noun: { accent: "#E8604C", tint: "#FDEAE6" },
  pronoun: { accent: "#D65A9E", tint: "#FBEAF3" },
  verb: { accent: "#E8871A", tint: "#FDF0DC" },
  adjective: { accent: "#1F9D8C", tint: "#DFF3EF" },
  adverb: { accent: "#2B8CA3", tint: "#E1F0F4" },
  preposition: { accent: "#7C5CFC", tint: "#EFEAFE" },
  conjunction: { accent: "#4C5FD9", tint: "#E8EAFB" },
  interjection: { accent: "#E0447D", tint: "#FBE5EE" },
};

function buildLessonSlides(lesson) {
  const slides = ["cover", "warmup"];
  lesson.concepts.forEach((c, i) => {
    slides.push(`concept${i}`);
    if (c.mistake) slides.push(`mistake${i}`);
  });
  if (lesson.concepts.length > 1) slides.push("compare");
  slides.push("guided", "independent", "wrapup");
  return slides;
}

function buildAssessmentSlides(lesson) {
  return ["cover", ...lesson.sections.map((s) => `part${s.part}`), "score"];
}

// Turns "The boy **runs** fast." into the sentence with the target word
// bolded and colored to the concept's signature accent, so the eye lands
// on the one word that matters instead of reading the whole sentence.
function ExampleLine({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="posl-example">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="posl-target">{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
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
  const palette = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-concept" style={{ "--pos-accent": palette.accent, "--pos-tint": palette.tint }}>
      <span className="posl-tag">{concept.name}</span>
      <p className="posl-definition posl-definition--tight">{concept.definition}</p>
      <div className="posl-example-list">
        {concept.examples.map((ex, i) => <ExampleLine key={i} text={ex} />)}
      </div>
    </div>
  );
}

function MistakeSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  const mistake = concept.mistake;
  const palette = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-mistake" style={{ "--pos-accent": palette.accent }}>
      <span className="posl-mistake-badge">⚠ Watch out — {concept.name}</span>
      <div className="posl-mistake-pair">
        <p className="posl-mistake-wrong">✗ {mistake.wrong}</p>
        <span className="posl-mistake-arrow">→</span>
        <p className="posl-mistake-right">✓ {mistake.correct}</p>
      </div>
      <p className="posl-mistake-note">{mistake.note}</p>
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
  if (slideType.startsWith("mistake")) return <MistakeSlide lesson={lesson} index={Number(slideType.replace("mistake", ""))} />;
  if (slideType === "compare") return <CompareSlide lesson={lesson} />;
  if (slideType === "guided") return <GuidedSlide lesson={lesson} />;
  if (slideType === "independent") return <IndependentSlide lesson={lesson} />;
  if (slideType === "wrapup") return <WrapupSlide topic={topic} lesson={lesson} />;
  if (slideType.startsWith("part")) return <PartSlide lesson={lesson} partKey={slideType.replace("part", "")} />;
  if (slideType === "score") return <ScoreSlide topic={topic} lesson={lesson} />;
  return null;
}

export default function PartsOfSpeechLesson() {
  const { code } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const found = getLessonByCode(code);

  if (!found) {
    return (
      <div className="posl-shell">
        <style>{CSS}</style>
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
        <span className="posl-topbar-title">{lesson.code} · {lesson.title}</span>
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
  background: radial-gradient(circle at 15% 0%, #FBF8F1 0%, #F3EEE1 55%, #ECE2CC 100%);
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
  justify-content: center;
  padding: 14px 24px 0;
  flex-shrink: 0;
}
.posl-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #8A7A50;
}

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
  color: #6B6478;
  text-align: center;
  margin-top: 60px;
}

.posl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFDF8;
  border: 1px solid #E8DFC8;
  border-radius: 22px;
  padding: 20px 56px;
  box-shadow: 0 20px 50px rgba(32,32,46,0.12);
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
  color: #C99A3E;
  background: rgba(201,154,62,0.14);
  border-radius: 999px;
  padding: 6px 16px;
}
.posl-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: #20202E;
  margin: 0;
  line-height: 1.05;
}
.posl-cover-sub {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #948A6E;
  margin: 0;
}
.posl-cover-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #4A4458;
  line-height: 1.5;
  margin: 0;
  max-width: 640px;
}
.posl-cover-question {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 32px;
  font-style: italic;
  color: #20202E;
  margin: 0;
  max-width: 780px;
  line-height: 1.3;
}

.posl-h {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #20202E;
  margin: 0;
}

.posl-definition {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #4A4458;
  line-height: 1.5;
  margin: 0;
  max-width: 760px;
}

/* ---- concept slide: signature POS color, minimal text ---- */
.posl-concept { gap: 22px; }
.posl-tag {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--pos-accent);
  background: var(--pos-tint);
  border-radius: 999px;
  padding: 10px 28px;
}
.posl-definition--tight { font-size: 21px; max-width: 620px; }
.posl-example-list { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 600px; }
.posl-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #4A4458;
  background: var(--pos-tint);
  border-radius: 12px;
  padding: 14px 20px;
  margin: 0;
}
.posl-target { color: var(--pos-accent); font-weight: 700; }

/* ---- mistake slide: fixed semantic red/green, not POS-colored ---- */
.posl-mistake { gap: 20px; }
.posl-mistake-badge {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--pos-accent);
  background: rgba(0,0,0,0.03);
  border: 1.5px solid var(--pos-accent);
  border-radius: 999px;
  padding: 7px 18px;
}
.posl-mistake-pair { display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 640px; }
.posl-mistake-wrong {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 19px;
  color: #A8382F;
  background: #FBEAEA;
  text-decoration: line-through;
  text-decoration-color: rgba(168,56,47,0.5);
  border-radius: 12px;
  padding: 12px 20px;
  margin: 0;
  width: 100%;
}
.posl-mistake-arrow { font-size: 18px; color: #B0A88E; }
.posl-mistake-right {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #1F6B41;
  background: #E4F8EC;
  border-radius: 12px;
  padding: 12px 20px;
  margin: 0;
  width: 100%;
}
.posl-mistake-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #6B6478;
  margin: 0;
  max-width: 560px;
}

.posl-compare-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #6B6478;
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
  color: #C99A3E;
}
.posl-compare-row-pair { display: contents; }
.posl-compare-cell {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4A4458;
  background: #F5F0E4;
  border-radius: 10px;
  padding: 10px 14px;
  margin: 0;
  text-align: left;
}
.posl-compare-cell--right { color: #20202E; font-weight: 600; }

.posl-list {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4A4458;
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
  color: #4A4458;
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
  color: #C99A3E;
  background: rgba(201,154,62,0.14);
  border-radius: 999px;
  padding: 6px 16px;
}
.posl-part-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #6B6478;
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
  background: #F5F0E4;
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
  color: #20202E;
  margin: 0;
}
.posl-quiz-q--error { color: #B0413E; text-decoration: line-through; text-decoration-color: rgba(176,65,62,0.4); }

.posl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.posl-quiz-opt {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #20202E;
  background: #FFFFFF;
  border: 1.5px solid #E8DFC8;
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
  color: #C99A3E;
  background: #FFFFFF;
  border: 1.5px solid #E8DFC8;
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

.posl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #F0EADA; flex-shrink: 0; }
.posl-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #20202E;
  background: #F5F0E4;
  border: 1px solid #E8DFC8;
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
}
.posl-nav-btn--primary { background: #C99A3E; color: #FFFFFF; border-color: #C99A3E; }
.posl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.posl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 340px; }
.posl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #E8DFC8; }
.posl-nav-dot.is-active { width: 16px; background: #C99A3E; }
`;

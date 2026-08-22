import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonByCode } from "./posTracks";

// One signature color per real part of speech, used sparingly -- as a
// mark and an underline, never as a filled card background. Sub-forms of
// the same POS (Action/Being verb, Coordinating/Subordinating
// conjunction) share their parent's color; the two "contrast" topics
// (Nouns vs Pronouns, Adjectives vs Adverbs) use two different colors on
// purpose, so the contrast reads at a glance. Colors are muted jewel
// tones, not pastel/candy, to sit quietly on paper.
const POS_COLORS = {
  noun: "#B84A2E",
  pronoun: "#8B4570",
  verb: "#B8791A",
  adjective: "#1F6E64",
  adverb: "#2E6A8A",
  preposition: "#4A4E9E",
  conjunction: "#5B4B8A",
  interjection: "#A62F55",
};

// Each part of speech also gets a small geometric mark instead of relying
// on color alone -- echoes real grammar-teaching symbol systems
// (Montessori grammar uses shapes per word class). The shapes are chosen
// to reinforce family relationships: noun/pronoun share the circle family
// (pronoun's is hollow, standing in for the noun), adjective/adverb share
// the square family (adverb's is rotated into a diamond).
function PosMark({ posKey }) {
  const shapes = {
    noun: <circle cx="10" cy="10" r="6.5" fill="currentColor" />,
    pronoun: <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.2" />,
    verb: <path d="M5 3 L16.5 10 L5 17 Z" fill="currentColor" />,
    adjective: <rect x="4" y="4" width="12" height="12" fill="currentColor" />,
    adverb: <rect x="4.5" y="4.5" width="11" height="11" fill="currentColor" transform="rotate(45 10 10)" />,
    preposition: (
      <>
        <line x1="4" y1="16" x2="16" y2="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="4" cy="16" r="2.3" fill="currentColor" />
        <circle cx="16" cy="4" r="2.3" fill="currentColor" />
      </>
    ),
    conjunction: <path d="M10 3 V17 M3 10 H17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />,
    interjection: (
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="10" y1="2" x2="10" y2="18" />
        <line x1="2" y1="10" x2="18" y2="10" />
        <line x1="4.6" y1="4.6" x2="15.4" y2="15.4" />
        <line x1="15.4" y1="4.6" x2="4.6" y2="15.4" />
      </g>
    ),
  };
  return (
    <svg className="posl-mark" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {shapes[posKey] || shapes.noun}
    </svg>
  );
}

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
// underlined in the concept's accent color, instead of bold+colored text
// -- a mark, not a repaint, so only one visual device carries the color.
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
      <div className="posl-rule" />
      <p className="posl-cover-line">{lesson.kind === "Lesson" ? lesson.objective : lesson.testGoal}</p>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="posl-slide">
      <span className="posl-eyebrow">Warm-up</span>
      <p className="posl-cover-question">“{lesson.leadIn}”</p>
    </div>
  );
}

function ConceptSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  const accent = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-concept" style={{ "--pos-accent": accent }}>
      <div className="posl-concept-head">
        <PosMark posKey={concept.color} />
        <span className="posl-concept-name">{concept.name}</span>
      </div>
      <p className="posl-definition">{concept.definition}</p>
      <div className="posl-example-list">
        {concept.examples.map((ex, i) => <ExampleLine key={i} text={ex} />)}
      </div>
    </div>
  );
}

function MistakeSlide({ lesson, index }) {
  const concept = lesson.concepts[index];
  const mistake = concept.mistake;
  const accent = POS_COLORS[concept.color] || POS_COLORS.noun;
  return (
    <div className="posl-slide posl-mistake" style={{ "--pos-accent": accent }}>
      <div className="posl-mistake-head">
        <PosMark posKey={concept.color} />
        <span className="posl-eyebrow posl-eyebrow--muted">{concept.name} · common mistake</span>
      </div>
      <p className="posl-mistake-wrong"><span className="posl-mark-x">✗</span>{mistake.wrong}</p>
      <p className="posl-mistake-right"><span className="posl-mark-check">✓</span>{mistake.correct}</p>
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
        <span className="posl-compare-label posl-compare-label--right">{lesson.compareRightLabel}</span>
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
              ← Back
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
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&family=Manrope:wght@400;500;600;700;800&display=swap');

.posl-shell {
  width: 100%;
  height: 100vh;
  background: #F7F2E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Manrope', sans-serif;
}
.posl-shell * { box-sizing: border-box; }

.posl-topbar {
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px 0;
  flex-shrink: 0;
}
.posl-topbar-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #A99A78;
}

.posl-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 18px 24px 24px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.posl-missing {
  font-family: 'Manrope', sans-serif;
  color: #7A7168;
  text-align: center;
  margin-top: 60px;
}

.posl-deck {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #FFFEFA;
  border: 1px solid #E7DCC2;
  border-radius: 4px;
  padding: 26px 64px;
  box-shadow: 0 24px 60px rgba(36,32,35,0.10);
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
.posl-slide--cover { gap: 14px; }
.posl-slide--part { justify-content: flex-start; }

.posl-eyebrow {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #A47C3C;
}
.posl-eyebrow--muted { color: #9A9084; letter-spacing: 1.2px; }

.posl-kind-badge {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #A47C3C;
}
.posl-cover-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: 58px;
  color: #242023;
  margin: 0;
  line-height: 1.05;
  letter-spacing: -0.01em;
}
.posl-cover-sub {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #A99A78;
  margin: 0;
}
.posl-rule { width: 44px; height: 2px; background: #D8C592; margin: 6px 0; }
.posl-cover-line {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #6A6259;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
}
.posl-cover-question {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  color: #242023;
  margin: 0;
  max-width: 740px;
  line-height: 1.35;
}

.posl-h {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: 28px;
  color: #242023;
  margin: 0;
}

.posl-definition {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 21px;
  color: #4A443D;
  line-height: 1.55;
  margin: 0;
  max-width: 720px;
}

/* ---- concept slide: mark + name, underlined target word, no fills ---- */
.posl-concept { gap: 24px; }
.posl-concept-head { display: flex; align-items: center; gap: 10px; color: var(--pos-accent); }
.posl-mark { width: 22px; height: 22px; flex-shrink: 0; color: var(--pos-accent); }
.posl-concept-name {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: 30px;
  color: var(--pos-accent);
  letter-spacing: -0.01em;
}
.posl-example-list { display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 560px; }
.posl-example {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #242023;
  border-left: 2.5px solid var(--pos-accent);
  padding: 2px 0 2px 18px;
  margin: 0;
  text-align: left;
}
.posl-target {
  font-weight: 700;
  color: #242023;
  text-decoration: underline;
  text-decoration-color: var(--pos-accent);
  text-decoration-thickness: 2.5px;
  text-underline-offset: 3px;
}

/* ---- mistake slide: proofreading marks, no filled cards ---- */
.posl-mistake { gap: 16px; }
.posl-mistake-head { display: flex; align-items: center; gap: 9px; }
.posl-mistake-head .posl-mark { width: 16px; height: 16px; color: var(--pos-accent); }
.posl-mistake-wrong {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #8A736C;
  text-decoration: line-through;
  text-decoration-color: rgba(138,58,47,0.55);
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.posl-mark-x { color: #A8382F; font-weight: 700; text-decoration: none; flex-shrink: 0; }
.posl-mistake-right {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #242023;
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.posl-mark-check { color: #2E7D4F; font-weight: 700; flex-shrink: 0; }
.posl-mistake-note {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-weight: 500;
  font-size: 15.5px;
  color: #7A7168;
  margin: 4px 0 0;
  max-width: 520px;
}

.posl-compare-note {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15.5px;
  color: #7A7168;
  margin: 0;
  max-width: 620px;
}
.posl-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 28px; width: 100%; max-width: 680px; }
.posl-compare-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #A47C3C;
  padding-bottom: 8px;
  border-bottom: 1px solid #E7DCC2;
  text-align: left;
}
.posl-compare-label--right { text-align: right; }
.posl-compare-row-pair { display: contents; }
.posl-compare-cell {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A443D;
  padding: 12px 0;
  margin: 0;
  text-align: left;
  border-bottom: 1px solid #F0E9D6;
}
.posl-compare-cell--right { color: #242023; font-weight: 700; text-align: right; }

.posl-list {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4A443D;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}
.posl-speaking-list { max-width: 680px; font-size: 18px; text-align: left; }
.posl-speaking-list li { margin-bottom: 9px; }

.posl-recap-line {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A443D;
  line-height: 1.55;
  margin: 0;
  max-width: 680px;
}

.posl-part-badge {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #A47C3C;
}
.posl-part-desc {
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #7A7168;
  margin: 0;
}

.posl-quiz-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 820px;
  text-align: left;
}
.posl-quiz-item {
  background: #FFFFFF;
  border: 1px solid #EFE7D3;
  border-radius: 3px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.posl-quiz-q {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #242023;
  margin: 0;
}
.posl-quiz-q--error { color: #A8382F; text-decoration: line-through; text-decoration-color: rgba(168,56,47,0.4); }

.posl-quiz-options { display: flex; flex-wrap: wrap; gap: 8px; }
.posl-quiz-opt {
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #242023;
  background: #FFFEFA;
  border: 1px solid #E7DCC2;
  border-radius: 3px;
  padding: 8px 14px;
  cursor: pointer;
}
.posl-quiz-opt:disabled { cursor: default; }
.posl-quiz-opt.is-correct { background: #F0F7F1; border-color: #2E7D4F; color: #1F5C39; }
.posl-quiz-opt.is-wrong { background: #FBEFEC; border-color: #A8382F; color: #8A2E27; }

.posl-reveal-btn {
  align-self: flex-start;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #A47C3C;
  background: none;
  border: 1px solid #D8C592;
  border-radius: 3px;
  padding: 6px 14px;
  cursor: pointer;
}
.posl-reveal-correct {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1F5C39;
  margin: 0;
}

.posl-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid #EFE7D3; flex-shrink: 0; }
.posl-nav-btn {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #4A443D;
  background: none;
  border: 1px solid #E7DCC2;
  border-radius: 3px;
  padding: 9px 18px;
  cursor: pointer;
}
.posl-nav-btn:hover:not(:disabled) { border-color: #A47C3C; color: #242023; }
.posl-nav-btn--primary { background: #242023; color: #F7F2E7; border-color: #242023; }
.posl-nav-btn--primary:hover:not(:disabled) { background: #3A342F; border-color: #3A342F; color: #F7F2E7; }
.posl-nav-btn:disabled { opacity: 0.3; cursor: default; }
.posl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 320px; }
.posl-nav-dot { width: 5px; height: 5px; border-radius: 999px; background: #E7DCC2; }
.posl-nav-dot.is-active { width: 15px; border-radius: 3px; background: #A47C3C; }
`;

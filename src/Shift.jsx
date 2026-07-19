import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./shiftTracks";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Target Warm-up",
  contrast: "Meaning Contrast",
  makeit: "Make It",
  trigger: "Trigger Frame",
  interrupt: "Interrupt & Repair",
  samestory: "Same Story, New Lens",
  clockturn: "Clock Turn",
  pressure: "Pressure Check",
  scorecard: "Scorecard",
  retention: "Retention Exit Task",
};

const SLIDE_TYPES = ["cover", "warmup", "contrast", "makeit", "trigger", "interrupt", "samestory", "clockturn", "pressure", "scorecard", "retention"];

const SCORE_ROWS = [
  { label: "Tense Selection", max: 6 },
  { label: "Form Accuracy", max: 4 },
  { label: "Repair Speed", max: 4 },
  { label: "Pressure Stability", max: 4 },
];
const SCORE_MAX = 18;

function TopStrip({ lesson, slideType }) {
  return (
    <div className="sh-strip">
      <span>{lesson.code}</span>
      <span className="sh-strip-dot">·</span>
      <span>{lesson.tenses}</span>
      <span className="sh-strip-dot">·</span>
      <span className="sh-strip-tag">{lesson.tag}</span>
      <span className="sh-strip-label">{SLIDE_LABELS[slideType]}</span>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="sh-slide sh-slide--cover">
      <span className="sh-cover-kicker">{lesson.code} · {lesson.tag}</span>
      <h1 className="sh-cover-title">{lesson.title}</h1>
      <p className="sh-cover-theme">{lesson.theme}</p>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  const w = lesson.warmup;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">⏱ Target Warm-up</span>
      <p className="sh-bigline">{w.onScreen}</p>
    </div>
  );
}

function ContrastSlide({ lesson }) {
  const c = lesson.contrast;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Meaning Contrast</span>
      <div className="sh-examples">
        {c.examples.map((ex, i) => <p key={i} className="sh-example-line">{ex}</p>)}
      </div>
      <p className="sh-prompt">{c.prompt}</p>
      {c.keyPoint && <p className="sh-note">{c.keyPoint}</p>}
    </div>
  );
}

function MakeItSlide({ lesson }) {
  const m = lesson.makeIt;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Make It</span>
      <p className="sh-form-rule">{m.onScreen}</p>
      <div className="sh-models">
        {m.models.map((mo, i) => <p key={i} className="sh-model-line">{mo}</p>)}
      </div>
      {m.note && <p className="sh-note">{m.note}</p>}
    </div>
  );
}

function TriggerSlide({ lesson }) {
  const t = lesson.trigger;
  return (
    <div className="sh-slide">
      <span className="sh-badge sh-badge--self">Trigger Frame — answer fast</span>
      <ol className="sh-prompt-list">
        {t.prompts.map((p, i) => <li key={i}>{p}</li>)}
      </ol>
      {t.cue && <p className="sh-note">{t.cue}</p>}
    </div>
  );
}

function InterruptSlide({ lesson }) {
  const it = lesson.interrupt;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Interrupt &amp; Repair</span>
      <p className="sh-bigline">{it.onScreen}</p>
      {it.cueWords && it.cueWords.length > 0 && (
        <div className="sh-chips">
          {it.cueWords.map((w, i) => <span key={i} className="sh-chip">{w}</span>)}
        </div>
      )}
    </div>
  );
}

function SameStorySlide({ lesson }) {
  const s = lesson.samestory;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Same Story, New Lens</span>
      {s.rounds ? (
        <ol className="sh-round-list">
          {s.rounds.map((r, i) => <li key={i}>{r}</li>)}
        </ol>
      ) : (
        <p className="sh-bigline">{s.task}</p>
      )}
      {(s.purpose || s.example) && <p className="sh-note">{s.purpose || s.example}</p>}
    </div>
  );
}

function ClockTurnSlide({ lesson }) {
  const c = lesson.clockturn;
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Clock Turn</span>
      <p className="sh-base-sentence">{c.baseSentence}</p>
      <div className="sh-cue-chain">
        {c.cueChain.map((cue, i) => (
          <span key={i} className="sh-cue-step">
            {cue}
            {i < c.cueChain.length - 1 && <span className="sh-cue-arrow">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function PressureSlide({ lesson }) {
  const p = lesson.pressure;
  return (
    <div className="sh-slide">
      <span className="sh-badge sh-badge--self">Pressure Check — no notes</span>
      <ol className="sh-prompt-list">
        {p.prompts.map((pr, i) => <li key={i}>{pr}</li>)}
      </ol>
      {p.rule && <p className="sh-note">{p.rule}</p>}
    </div>
  );
}

function downloadScorecard(lesson, scores, total) {
  const lines = [
    `SHIFT ${lesson.code} · ${lesson.title}`,
    `Tenses: ${lesson.tenses}`,
    "",
    "SCORECARD",
    ...SCORE_ROWS.map((row) => `${row.label}: ${scores[row.label] || 0} / ${row.max}`),
    `Total: ${total} / ${SCORE_MAX}`,
    "",
    `Date: ${new Date().toLocaleDateString()}`,
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `shift-${lesson.id}-scorecard.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function ScorecardSlide({ lesson }) {
  const [scores, setScores] = useState(() => Object.fromEntries(SCORE_ROWS.map((row) => [row.label, ""])));
  const total = SCORE_ROWS.reduce((sum, row) => {
    const v = Number(scores[row.label]);
    return sum + (Number.isFinite(v) ? v : 0);
  }, 0);

  function setScore(label, max, raw) {
    const v = raw === "" ? "" : Math.max(0, Math.min(max, Number(raw) || 0));
    setScores((prev) => ({ ...prev, [label]: v }));
  }

  return (
    <div className="sh-slide sh-slide--scorecard">
      <div className="sh-sheet">
        <div className="sh-sheet-head">
          <span className="sh-sheet-title">Scorecard</span>
          <span className="sh-sheet-tag">{lesson.tag}</span>
        </div>
        <p className="sh-candoline">“{lesson.scorecard.canDoLine}”</p>
        <div className="sh-sheet-rows">
          {SCORE_ROWS.map((row, i) => (
            <div key={row.label} className={`sh-score-row ${i % 2 === 1 ? "is-alt" : ""}`}>
              <span className="sh-score-label">{row.label}</span>
              <input
                type="number"
                className="sh-score-input"
                min={0}
                max={row.max}
                value={scores[row.label]}
                onChange={(e) => setScore(row.label, row.max, e.target.value)}
                placeholder="0"
              />
              <span className="sh-score-max">/ {row.max}</span>
            </div>
          ))}
          <div className="sh-score-row sh-score-row--total">
            <span className="sh-score-label">Total</span>
            <span className="sh-score-total">{total}</span>
            <span className="sh-score-max">/ {SCORE_MAX}</span>
          </div>
        </div>
        {lesson.scorecard.compareLine && <p className="sh-candoline">{lesson.scorecard.compareLine}</p>}
        <button type="button" className="sh-download-btn" onClick={() => downloadScorecard(lesson, scores, total)}>
          ⬇ Download result
        </button>
      </div>
    </div>
  );
}

function RetentionSlide({ lesson }) {
  return (
    <div className="sh-slide sh-slide--centered">
      <span className="sh-badge">Retention Exit Task</span>
      <p className="sh-bigline">{lesson.retention.homework}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  switch (slideType) {
    case "cover": return <CoverSlide lesson={lesson} />;
    case "warmup": return <WarmupSlide lesson={lesson} />;
    case "contrast": return <ContrastSlide lesson={lesson} />;
    case "makeit": return <MakeItSlide lesson={lesson} />;
    case "trigger": return <TriggerSlide lesson={lesson} />;
    case "interrupt": return <InterruptSlide lesson={lesson} />;
    case "samestory": return <SameStorySlide lesson={lesson} />;
    case "clockturn": return <ClockTurnSlide lesson={lesson} />;
    case "pressure": return <PressureSlide lesson={lesson} />;
    case "scorecard": return <ScorecardSlide lesson={lesson} />;
    case "retention": return <RetentionSlide lesson={lesson} />;
    default: return null;
  }
}

export default function Shift() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="sh-shell">
        <style>{CSS}</style>
        <header className="sh-topbar">
          <button type="button" className="sh-back-link" onClick={() => navigate(`/library/shift/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="sh-stage">
          <p className="sh-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideType = SLIDE_TYPES[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === SLIDE_TYPES.length - 1;

  return (
    <div className="sh-shell">
      <style>{CSS}</style>
      <header className="sh-topbar">
        <button type="button" className="sh-back-link" onClick={() => navigate(`/library/shift/${trackId}`)}>
          ← Lessons
        </button>
        <span className="sh-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="sh-topbar-slot" />
      </header>

      <div className="sh-stage">
        <div className="sh-deck">
          <TopStrip lesson={lesson} slideType={slideType} />
          <div className="sh-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="sh-nav-row">
            <button type="button" className="sh-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="sh-nav-dots">
              {SLIDE_TYPES.map((_, i) => (
                <span key={i} className={`sh-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="sh-nav-btn sh-nav-btn--primary"
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

.sh-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF1EF 0%, #FFDBD5 55%, #FFC3BA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.sh-shell * { box-sizing: border-box; }

.sh-topbar {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 0;
  flex-shrink: 0;
}
.sh-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  background: #FFB3A6;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.sh-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A211B;
  text-align: center;
  flex: 1;
}
.sh-topbar-slot { width: 90px; }

.sh-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8C5C52;
  text-align: center;
  margin-top: 60px;
}

.sh-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px 24px;
  min-height: 0;
}

.sh-deck {
  position: relative;
  width: 1140px;
  max-width: 100%;
  height: 100%;
  max-height: 620px;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(160,50,35,0.16);
  display: flex;
  flex-direction: column;
  padding: 22px 44px 26px;
}

.sh-strip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #E1483B;
  padding-bottom: 12px;
  border-bottom: 1px solid #FFE4DD;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.sh-strip-dot { color: #FFC3BA; }
.sh-strip-tag { background: rgba(225,72,59,0.12); color: #E1483B; padding: 2px 9px; border-radius: 999px; font-size: 11px; }
.sh-strip-label { margin-left: auto; color: #C98F84; }

.sh-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; }
.sh-slide { display: flex; flex-direction: column; gap: 14px; width: 100%; }
.sh-slide--centered { align-items: center; justify-content: center; text-align: center; gap: 20px; margin: auto; }

.sh-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border: 1.5px solid rgba(225,72,59,0.3);
  border-radius: 999px;
  padding: 5px 14px;
}
.sh-badge--self { align-self: flex-start; }

/* Cover */
.sh-slide--cover { align-items: center; justify-content: center; text-align: center; gap: 14px; margin: auto; }
.sh-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #E1483B;
}
.sh-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #4A211B;
  margin: 0;
  line-height: 1.1;
  max-width: 900px;
}
.sh-cover-theme {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 17px;
  color: #8C5C52;
  margin: 0;
  max-width: 640px;
}

/* Shared big text styles */
.sh-bigline {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.4;
  color: #4A211B;
  margin: 0;
  max-width: 800px;
}
.sh-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 15px;
  color: #B36A5E;
  margin: 0;
  max-width: 640px;
}
.sh-prompt {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #4A211B;
  margin: 0;
}

/* Contrast */
.sh-examples { display: flex; flex-direction: column; gap: 8px; }
.sh-example-line {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #4A211B;
  margin: 0;
}

/* Make It */
.sh-form-rule {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #8C5C52;
  margin: 0;
  max-width: 700px;
}
.sh-models { display: flex; flex-direction: column; gap: 6px; }
.sh-model-line {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #4A211B;
  margin: 0;
}

/* Trigger / Pressure prompt lists */
.sh-prompt-list {
  margin: 0;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sh-prompt-list li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 19px;
  color: #4A211B;
  line-height: 1.4;
}

/* Interrupt chips */
.sh-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 640px; }
.sh-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border: 1.5px solid rgba(225,72,59,0.3);
  border-radius: 999px;
  padding: 6px 14px;
}

/* Same story rounds */
.sh-round-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  counter-reset: round;
}
.sh-round-list li {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #4A211B;
  counter-increment: round;
}
.sh-round-list li::before {
  content: "Round " counter(round) " — ";
  color: #E1483B;
}

/* Clock turn */
.sh-base-sentence {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #4A211B;
  margin: 0;
}
.sh-cue-chain { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-items: center; max-width: 800px; }
.sh-cue-step {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #4A211B;
  background: #FFEDE9;
  border-radius: 999px;
  padding: 6px 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.sh-cue-arrow { color: #E1483B; }

/* Scorecard */
.sh-slide--scorecard { align-items: center; justify-content: flex-start; }
.sh-sheet {
  width: 100%;
  max-width: 420px;
  background: #FFEDE9;
  border: 1px solid #FFD2C8;
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
}
.sh-sheet-head { display: flex; align-items: center; justify-content: space-between; }
.sh-sheet-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 20px; color: #4A211B; }
.sh-sheet-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #E1483B;
  background: rgba(225,72,59,0.14);
  padding: 4px 11px;
  border-radius: 999px;
}
.sh-candoline {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13px;
  line-height: 1.4;
  color: #8C5C52;
  margin: 0;
}
.sh-sheet-rows { display: flex; flex-direction: column; gap: 4px; }
.sh-score-row { display: flex; align-items: center; gap: 10px; border-radius: 8px; padding: 5px 12px; }
.sh-score-row.is-alt { background: #FFE0D6; }
.sh-score-row--total { background: rgba(225,72,59,0.14); margin-top: 4px; }
.sh-score-label { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 13.5px; color: #4A211B; flex: 1; }
.sh-score-input {
  width: 46px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 6px;
  padding: 3px 6px;
  text-align: center;
}
.sh-score-total { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 17px; color: #E1483B; }
.sh-score-max { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #C98F84; }
.sh-download-btn {
  align-self: center;
  margin-top: 4px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #4A211B;
  background: #FFB3A6;
  border: none;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}

/* Nav row */
.sh-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #FFE4DD; flex-shrink: 0; }
.sh-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  background: #FFEDE9;
  border: 1px solid #FFD2C8;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.sh-nav-btn--primary { background: #E1483B; color: #FFFFFF; border-color: #E1483B; }
.sh-nav-btn:disabled { opacity: 0.35; cursor: default; }
.sh-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.sh-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #FFD2C8; }
.sh-nav-dot.is-active { width: 16px; background: #E1483B; }
`;

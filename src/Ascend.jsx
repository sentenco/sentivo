import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./ascendTracks";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  vocabulary: "Vocabulary",
  highlight: "Highlight",
  practice: "Practice",
  activity: "Activity",
  pushit: "Push It",
  retest: "Re-test",
  scorecard: "Scorecard",
  homework: "Homework",
};

function buildSlideTypes(lesson) {
  if (lesson.slideOrder) return lesson.slideOrder;
  return ["cover", "warmup", "vocabulary", "highlight", "practice", "activity", lesson.retest ? "retest" : "pushit", "scorecard", "homework"];
}

function TopStrip({ lesson, slideType }) {
  return (
    <div className="ad-strip">
      <span>{lesson.code}</span>
      <span className="ad-strip-dot">·</span>
      <span>{lesson.title}</span>
      <span className="ad-strip-dot">·</span>
      <span>{lesson.icon} {lesson.type}</span>
      <span className="ad-strip-dot">·</span>
      <span className="ad-strip-tag">{lesson.support} support</span>
      <span className="ad-strip-label">{SLIDE_LABELS[slideType]}</span>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="ad-slide ad-slide--cover">
      <span className="ad-cover-kicker">{lesson.code} · {lesson.icon} {lesson.type} · {lesson.tag}</span>
      <h1 className="ad-cover-title">{lesson.title}</h1>
    </div>
  );
}

function RatingControl({ label, value, onChange }) {
  return (
    <div className="ad-rate-row">
      <span className="ad-rate-label">{label}</span>
      <div className="ad-rate-btns">
        {[0, 1, 2, 3].map((v) => (
          <button
            type="button"
            key={v}
            className={`ad-rate-btn ${value === v ? "is-active" : ""}`}
            onClick={() => onChange(v)}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

function WarmupSlide({ lesson, grades, setGrade }) {
  const w = lesson.warmup;
  const [rating, setRating] = useState(grades?.warmup?.score ?? null);

  function rate(value) {
    setRating(value);
    setGrade("warmup", value, 3);
  }

  return (
    <div className="ad-slide ad-slide--centered">
      <span className="ad-impromptu-badge">⏱ Impromptu</span>
      {w.heading && <h2 className="ad-heading">{w.heading}</h2>}
      <div className="ad-qlist">
        {w.questions.map((q, i) => (
          <p key={i}>{q}</p>
        ))}
      </div>
      {lesson.gradedActivities && (
        <RatingControl label="Rate handling the pressure" value={rating} onChange={rate} />
      )}
    </div>
  );
}

function VocabularySlide({ lesson, grades, setGrade }) {
  const v = lesson.vocabulary;
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [rating, setRating] = useState(grades?.vocabulary?.score ?? null);

  function rate(value) {
    setRating(value);
    setGrade("vocabulary", value, 3);
  }

  if (v.rows.length === 0) {
    return (
      <div className="ad-slide ad-slide--centered">
        <h2 className="ad-heading">{v.heading}</h2>
        <p className="ad-prompt">No bank today — recall from memory.</p>
      </div>
    );
  }

  const row = v.rows[idx];
  const isFirst = idx === 0;
  const isLast = idx === v.rows.length - 1;

  function go(delta) {
    setRevealed(false);
    setIdx((i) => i + delta);
  }

  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{v.heading}</h2>
      {lesson.type === "Upgrade" && (
        <p className="ad-collocation-note">A <strong>collocation</strong> is a natural word pairing — like “make a decision”, not “do a decision”.</p>
      )}
      <div className="ad-vocgame">
        <span className="ad-vocgame-count">{idx + 1} / {v.rows.length}</span>
        <p className="ad-vocgame-from">“{row.label}”</p>
        <p className="ad-vocgame-challenge">How would you say this more precisely?</p>
        {revealed ? (
          <p className="ad-vocgame-answer">{row.value}</p>
        ) : (
          <button type="button" className="ad-vocgame-reveal" onClick={() => setRevealed(true)}>
            Show our version
          </button>
        )}
      </div>
      <div className="ad-game-stepper">
        <button type="button" className="ad-game-btn" onClick={() => go(-1)} disabled={isFirst}>← Prev</button>
        <button type="button" className="ad-game-btn" onClick={() => go(1)} disabled={isLast}>Next →</button>
      </div>
      {lesson.gradedActivities && (
        <RatingControl label="Rate their spontaneous attempts" value={rating} onChange={rate} />
      )}
    </div>
  );
}

function HighlightSlide({ lesson, grades, setGrade }) {
  const h = lesson.highlight;
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  const [rating, setRating] = useState(grades?.highlight?.score ?? null);

  function rate(value) {
    setRating(value);
    setGrade("highlight", value, 3);
  }

  if (lesson.gradedActivities) {
    return (
      <div className="ad-slide">
        <h2 className="ad-heading">{h.heading}</h2>
        <div className="ad-beforeafter">
          <div className="ad-highlight-step">
            <label className="ad-highlight-label">Before</label>
            <textarea
              className="ad-highlight-input"
              value={before}
              onChange={(e) => setBefore(e.target.value)}
              placeholder="Type the student's impromptu sentence…"
            />
          </div>
          <span className="ad-beforeafter-arrow">→</span>
          <div className="ad-highlight-step">
            <label className="ad-highlight-label">After</label>
            <textarea
              className="ad-highlight-input"
              value={after}
              onChange={(e) => setAfter(e.target.value)}
              placeholder="Type the upgraded version…"
            />
          </div>
        </div>
        <RatingControl label="Rate the upgrade" value={rating} onChange={rate} />
      </div>
    );
  }

  return (
    <div className="ad-slide">
      <h2 className="ad-heading">{h.heading}</h2>
      <div className="ad-highlight-step">
        <label className="ad-highlight-label">1 · Write the student's Warm-up sentence</label>
        <textarea
          className="ad-highlight-input"
          value={before}
          onChange={(e) => setBefore(e.target.value)}
          placeholder="Listen to their answer, then type it here…"
        />
      </div>
      <p className="ad-highlight-challenge">2 · Challenge the student to rephrase it more precisely.</p>
      <div className="ad-highlight-step">
        <label className="ad-highlight-label">3 · Your model version</label>
        <textarea
          className="ad-highlight-input"
          value={after}
          onChange={(e) => setAfter(e.target.value)}
          placeholder="Write your upgraded version here…"
        />
      </div>
    </div>
  );
}

function PracticeSlide({ lesson, grades, setGrade }) {
  const p = lesson.practice;

  if (lesson.gradedActivities) {
    return <SwapItUpSlide items={p.items} heading={p.heading} setGrade={setGrade} />;
  }

  return (
    <div className="ad-slide">
      <h2 className="ad-heading">{p.heading}</h2>
      {p.items.length > 0 && (
        <ol className="ad-itemlist">
          {p.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

function SwapItUpSlide({ items, heading, setGrade }) {
  const [marks, setMarks] = useState({});
  const [revealed, setRevealed] = useState({});
  const correctCount = Object.values(marks).filter((v) => v === true).length;

  useEffect(() => {
    setGrade("practice", correctCount, items.length);
  }, [correctCount]);

  function mark(i, ok) {
    setMarks((prev) => ({ ...prev, [i]: ok }));
  }

  return (
    <div className="ad-slide">
      <div className="ad-swap-headrow">
        <h2 className="ad-heading">{heading}</h2>
        <span className="ad-swap-tally">{correctCount} / {items.length}</span>
      </div>
      <div className="ad-swap-list">
        {items.map((item, i) => (
          <div key={i} className="ad-swap-item">
            <p className="ad-swap-sentence">
              {item.pre}<mark className="ad-swap-target">{item.target}</mark>{item.post}
            </p>
            <div className="ad-swap-row">
              {revealed[i] ? (
                <span className="ad-swap-hint">{item.hint}</span>
              ) : (
                <button type="button" className="ad-swap-hintbtn" onClick={() => setRevealed((r) => ({ ...r, [i]: true }))}>
                  Show ideas
                </button>
              )}
              <div className="ad-swap-controls">
                <button
                  type="button"
                  className={`ad-swap-btn ad-swap-btn--ok ${marks[i] === true ? "is-active" : ""}`}
                  onClick={() => mark(i, true)}
                >
                  ✓
                </button>
                <button
                  type="button"
                  className={`ad-swap-btn ad-swap-btn--no ${marks[i] === false ? "is-active" : ""}`}
                  onClick={() => mark(i, false)}
                >
                  ✗
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivitySlide({ lesson }) {
  const a = lesson.activity;
  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{a.heading}</h2>
      <p className="ad-prompt-quote">“{a.prompt}”</p>
      {lesson.support === "High" && lesson.bankWords.length > 0 && (
        <div className="ad-chips ad-chips--compact">
          {lesson.bankWords.map((w) => (
            <span key={w} className="ad-chip ad-chip--sm">{w}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function PushItSlide({ lesson }) {
  const p = lesson.pushIt;
  return (
    <div className="ad-slide">
      <h2 className="ad-heading">{p.heading} <span className="ad-optional">(optional)</span></h2>
      <p className="ad-prompt">{p.prompt}</p>
      <p className="ad-model-frame">Model: “{p.model}”</p>
    </div>
  );
}

function RetestSlide({ lesson }) {
  const r = lesson.retestSlide;
  return (
    <div className="ad-slide ad-slide--centered">
      <span className="ad-retest-flag">Critical</span>
      <h2 className="ad-heading">{r.heading}</h2>
      <p className="ad-prompt-quote">{r.prompt}</p>
      <p className="ad-notebox">{r.note}</p>
    </div>
  );
}

function downloadScorecard(lesson, scores, total) {
  const lines = [
    `ASCEND ${lesson.code} · ${lesson.title}`,
    `Type: ${lesson.type} · Support: ${lesson.support}`,
    `Tag: ${lesson.scorecard.scoreTag}`,
    "",
    "SCORECARD",
    ...lesson.scorecard.rows.map((row) => `${row.label}: ${scores[row.label] || 0} / ${row.max}`),
    `Total: ${total} / ${lesson.scorecard.totalMax}`,
    "",
    `Date: ${new Date().toLocaleDateString()}`,
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ascend-${lesson.id}-scorecard.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function ScorecardSlide({ lesson, grades }) {
  const [scores, setScores] = useState(() =>
    Object.fromEntries(lesson.scorecard.rows.map((row) => {
      const g = row.source && grades[row.source];
      if (g) return [row.label, Math.round((g.score / g.max) * row.max)];
      return [row.label, ""];
    }))
  );
  const total = lesson.scorecard.rows.reduce((sum, row) => {
    const v = Number(scores[row.label]);
    return sum + (Number.isFinite(v) ? v : 0);
  }, 0);

  function setScore(label, max, raw) {
    const v = raw === "" ? "" : Math.max(0, Math.min(max, Number(raw) || 0));
    setScores((prev) => ({ ...prev, [label]: v }));
  }

  return (
    <div className="ad-slide ad-slide--scorecard">
      <div className="ad-sheet">
        <div className="ad-sheet-head">
          <span className="ad-sheet-title">Scorecard</span>
          <span className="ad-sheet-tag">{lesson.scorecard.scoreTag}</span>
        </div>
        <p className="ad-candoline">“{lesson.scorecard.canDoLine}”</p>
        <div className="ad-sheet-rows">
          {lesson.scorecard.rows.map((row, i) => (
            <div key={row.label} className={`ad-score-row ${i % 2 === 1 ? "is-alt" : ""}`}>
              <span className="ad-score-label">{row.label}</span>
              <input
                type="number"
                className="ad-score-input"
                min={0}
                max={row.max}
                value={scores[row.label]}
                onChange={(e) => setScore(row.label, row.max, e.target.value)}
                placeholder="0"
              />
              <span className="ad-score-max">/ {row.max}</span>
            </div>
          ))}
          <div className="ad-score-row ad-score-row--total">
            <span className="ad-score-label">Total</span>
            <span className="ad-score-total">{total}</span>
            <span className="ad-score-max">/ {lesson.scorecard.totalMax}</span>
          </div>
        </div>
        {lesson.scorecard.compareLine && (
          <p className="ad-candoline">{lesson.scorecard.compareLine}</p>
        )}
        <button type="button" className="ad-download-btn" onClick={() => downloadScorecard(lesson, scores, total)}>
          ⬇ Download result
        </button>
      </div>
    </div>
  );
}

function HomeworkSlide({ lesson }) {
  const hw = lesson.homework;
  return (
    <div className="ad-slide">
      <h2 className="ad-heading">{hw.heading}</h2>
      <p className="ad-passage">
        {hw.passage.map((part, i) =>
          typeof part === "string"
            ? <span key={i}>{part}</span>
            : <strong key={i} className="ad-passage-hl">{part.text}</strong>
        )}
      </p>
      {hw.nextBank && (
        <div className="ad-nextbank">
          <span className="ad-nextbank-label">{hw.nextLabel || "Next lesson's bank"}</span>
          <p className="ad-nextbank-text">{hw.nextBank}</p>
        </div>
      )}
    </div>
  );
}

function renderSlide(slideType, lesson, grades, setGrade) {
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} grades={grades} setGrade={setGrade} />;
    case "vocabulary":
      return <VocabularySlide lesson={lesson} grades={grades} setGrade={setGrade} />;
    case "highlight":
      return <HighlightSlide lesson={lesson} grades={grades} setGrade={setGrade} />;
    case "practice":
      return <PracticeSlide lesson={lesson} grades={grades} setGrade={setGrade} />;
    case "activity":
      return <ActivitySlide lesson={lesson} />;
    case "pushit":
      return <PushItSlide lesson={lesson} />;
    case "retest":
      return <RetestSlide lesson={lesson} />;
    case "scorecard":
      return <ScorecardSlide lesson={lesson} grades={grades} />;
    case "homework":
      return <HomeworkSlide lesson={lesson} />;
    default:
      return null;
  }
}

export default function Ascend() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const [grades, setGrades] = useState({});
  const lesson = getLesson(trackId, Number(lessonNum));

  function setGrade(key, score, max) {
    setGrades((g) => ({ ...g, [key]: { score, max } }));
  }

  if (!lesson) {
    return (
      <div className="ad-shell">
        <style>{CSS}</style>
        <header className="ad-topbar">
          <button type="button" className="ad-back-link" onClick={() => navigate(`/library/ascend/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="ad-stage">
          <p className="ad-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlideTypes(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ad-shell">
      <style>{CSS}</style>
      <header className="ad-topbar">
        <button type="button" className="ad-back-link" onClick={() => navigate(`/library/ascend/${trackId}`)}>
          ← Lessons
        </button>
        <span className="ad-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="ad-topbar-slot" />
      </header>

      <div className="ad-stage">
        <div className="ad-deck">
          <TopStrip lesson={lesson} slideType={slideType} />
          <div className="ad-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson, grades, setGrade)}
          </div>
          <div className="ad-nav-row">
            <button type="button" className="ad-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="ad-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`ad-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="ad-nav-btn ad-nav-btn--primary"
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

.ad-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #EAFBF6 0%, #D6F2E9 55%, #C3E9DC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ad-shell * { box-sizing: border-box; }

.ad-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.ad-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ad-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #17352E;
  text-align: center;
  flex: 1;
}
.ad-topbar-slot { width: 90px; }

.ad-missing {
  font-family: 'Quicksand', sans-serif;
  color: #5C8177;
  text-align: center;
  margin-top: 60px;
}

.ad-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 24px 60px;
}

.ad-deck {
  position: relative;
  width: 1140px;
  max-width: 100%;
  height: 560px;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(20,80,65,0.14);
  display: flex;
  flex-direction: column;
  padding: 26px 42px 30px;
  animation: ad-slide-in 0.24s ease;
}
@keyframes ad-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ad-strip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #128571;
  padding-bottom: 12px;
  border-bottom: 1px solid #E3F3ED;
  margin-bottom: 16px;
}
.ad-strip-dot { color: #B7D9CF; }
.ad-strip-tag {
  background: rgba(18,133,113,0.14);
  color: #128571;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
}
.ad-strip-label { margin-left: auto; color: #8AAFA5; }

.ad-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.ad-slide { display: flex; flex-direction: column; gap: 13px; height: 100%; }
.ad-slide--centered { align-items: center; justify-content: center; text-align: center; gap: 18px; }
.ad-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #17352E;
  margin: 0;
}
.ad-optional { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 15px; color: #8AAFA5; }

/* ── Cover ── */
.ad-slide--cover { align-items: center; justify-content: center; text-align: center; gap: 16px; }
.ad-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #128571;
}
.ad-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 58px;
  color: #17352E;
  margin: 0;
}
.ad-cover-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #5C8177;
  margin: 0;
}
.ad-cover-technique {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  font-style: italic;
  color: #128571;
  margin-top: 4px;
}

.ad-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 640px; }
.ad-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #128571;
  background: rgba(18,133,113,0.1);
  border: 1.5px solid rgba(18,133,113,0.35);
  border-radius: 999px;
  padding: 6px 13px;
}
.ad-chips--compact { max-width: 560px; margin-top: 4px; }
.ad-chip--sm { font-size: 12px; padding: 4px 11px; }

/* ── Warm-up ── */
.ad-impromptu-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #128571;
  background: rgba(18,133,113,0.1);
  border: 1.5px solid rgba(18,133,113,0.35);
  border-radius: 999px;
  padding: 5px 14px;
}
.ad-qlist { display: flex; flex-direction: column; gap: 14px; align-items: center; }
.ad-qlist p {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: #17352E;
  max-width: 780px;
}
.ad-move-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #128571;
  margin: 0;
}

/* ── Vocabulary (game) ── */
.ad-voctable { display: flex; flex-direction: column; gap: 6px; margin-top: 4px; overflow-y: auto; }
.ad-vocrow {
  display: grid;
  grid-template-columns: 1fr 20px 1.3fr;
  align-items: center;
  gap: 10px;
  background: #E9F7F2;
  border-radius: 9px;
  padding: 9px 14px;
}
.ad-vocrow.is-alt { background: #DCF0E9; }
.ad-vocrow-from {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  font-style: italic;
  color: #6B8C82;
}
.ad-vocrow-arrow { color: #128571; text-align: center; }
.ad-vocrow-to {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2F5850;
}
.ad-collocation-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #5C8177;
  max-width: 620px;
  margin: 0;
}
.ad-vocgame {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #E9F7F2;
  border-radius: 16px;
  padding: 18px 36px;
  width: 100%;
  max-width: 720px;
}
.ad-vocgame-count {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #8AAFA5;
}
.ad-vocgame-from {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #17352E;
  margin: 0;
  text-align: center;
}
.ad-vocgame-challenge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 15px;
  color: #6B8C82;
  margin: 0;
}
.ad-vocgame-answer {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #128571;
  margin: 0;
  text-align: center;
}
.ad-vocgame-reveal {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}
.ad-game-stepper { display: flex; align-items: center; gap: 14px; }
.ad-game-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2F5850;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}
.ad-game-btn:disabled { opacity: 0.35; cursor: default; }

/* ── Highlight ── */
.ad-highlight-step { display: flex; flex-direction: column; gap: 6px; }
.ad-highlight-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #128571;
}
.ad-highlight-input {
  width: 100%;
  min-height: 52px;
  resize: vertical;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #17352E;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 10px;
  padding: 12px 16px;
}
.ad-highlight-input::placeholder { color: #8AAFA5; }
.ad-highlight-challenge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 17px;
  font-style: italic;
  color: #128571;
  margin: 0;
}
.ad-beforeafter { display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; align-items: center; }
.ad-beforeafter-arrow { font-family: 'Fredoka', sans-serif; font-size: 20px; color: #128571; }
.ad-rate-row { display: flex; align-items: center; gap: 10px; margin-top: 2px; }
.ad-rate-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #6B8C82;
}
.ad-rate-btns { display: flex; gap: 6px; }
.ad-rate-btn {
  width: 30px;
  height: 30px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 8px;
  cursor: pointer;
}
.ad-rate-btn.is-active { background: #3FCDAF; border-color: #3FCDAF; color: #0E2A24; }

/* ── Swap It Up (graded) ── */
.ad-swap-headrow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.ad-swap-tally {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #128571;
  background: rgba(18,133,113,0.12);
  padding: 3px 13px;
  border-radius: 999px;
  white-space: nowrap;
}
.ad-swap-list { display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }
.ad-swap-item {
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ad-swap-sentence { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 14.5px; line-height: 1.4; color: #17352E; margin: 0; }
.ad-swap-target { background: #FFE39A; color: #5A3E00; padding: 1px 6px; border-radius: 5px; font-weight: 700; }
.ad-swap-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.ad-swap-hint { font-family: 'Quicksand', sans-serif; font-style: italic; font-size: 12px; color: #6B8C82; }
.ad-swap-hintbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #128571;
  background: none;
  border: 1px solid #A9DDD0;
  border-radius: 999px;
  padding: 3px 11px;
  cursor: pointer;
}
.ad-swap-controls { display: flex; gap: 6px; }
.ad-swap-btn {
  width: 27px;
  height: 27px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  border-radius: 7px;
  border: 1px solid #D3EFE6;
  background: #FFFFFF;
  color: #8AAFA5;
  cursor: pointer;
}
.ad-swap-btn--ok.is-active { background: #3FCDAF; border-color: #3FCDAF; color: #0E2A24; }
.ad-swap-btn--no.is-active { background: #F3A6A6; border-color: #F3A6A6; color: #5A0E0E; }
.ad-comparecard {
  background: #E9F7F2;
  border-left: 3px solid #3FCDAF;
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
}
.ad-compare-before {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14.5px;
  color: #6B8C82;
  margin: 0;
  white-space: pre-line;
}
.ad-compare-after {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15.5px;
  color: #17352E;
  margin: 0;
  white-space: pre-line;
}
.ad-notebox {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 13px;
  color: #8AAFA5;
  margin: 0;
}

/* ── Practice ── */
.ad-itemlist { margin: 0; padding: 0 0 0 20px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto; }
.ad-itemlist li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #2F5850;
}

/* ── Activity ── */
.ad-prompt-quote {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #17352E;
  max-width: 720px;
  margin: 0;
}

/* ── Push It / Retest ── */
.ad-prompt {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #17352E;
  margin: 0;
}
.ad-model-frame {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 15px;
  color: #128571;
}
.ad-retest-flag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #17352E;
  background: #3FCDAF;
  padding: 4px 12px;
  border-radius: 999px;
}

/* ── Scorecard ── */
.ad-slide--scorecard { align-items: center; justify-content: flex-start; }
.ad-sheet {
  width: 100%;
  max-width: 400px;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 16px;
  padding: 14px 22px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ad-sheet-head { display: flex; align-items: center; justify-content: space-between; }
.ad-sheet-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #17352E;
}
.ad-sheet-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #128571;
  background: rgba(18,133,113,0.14);
  padding: 4px 11px;
  border-radius: 999px;
}
.ad-candoline {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 12.5px;
  line-height: 1.35;
  color: #5C8177;
  margin: 0;
}
.ad-sheet-rows { display: flex; flex-direction: column; gap: 3px; }
.ad-score-row {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  padding: 4px 12px;
}
.ad-score-row.is-alt { background: #DCF0E9; }
.ad-score-row--total { background: rgba(18,133,113,0.14); margin-top: 3px; }
.ad-score-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2F5850;
  flex: 1;
}
.ad-score-input {
  width: 44px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 6px;
  padding: 3px 6px;
  text-align: center;
}
.ad-score-total {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #128571;
}
.ad-score-max { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #8AAFA5; }
.ad-download-btn {
  align-self: center;
  margin-top: 3px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}

/* ── Homework ── */
.ad-passage {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 1.7;
  color: #2F5850;
  margin: 0;
}
.ad-passage-hl {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  color: #128571;
  background: rgba(18,133,113,0.12);
  border-radius: 5px;
  padding: 1px 6px;
}
.ad-nextbank {
  margin-top: auto;
  background: #E9F7F2;
  border-radius: 10px;
  padding: 14px 18px;
}
.ad-nextbank-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #8AAFA5;
}
.ad-nextbank-text {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #17352E;
  margin: 4px 0 0;
}

/* ── Nav row ── */
.ad-nav-row { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; padding-top: 14px; border-top: 1px solid #E3F3ED; }
.ad-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2F5850;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ad-nav-btn--primary { background: #3FCDAF; color: #17352E; border-color: #3FCDAF; }
.ad-nav-btn:disabled { opacity: 0.35; cursor: default; }
.ad-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.ad-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #D3EFE6; }
.ad-nav-dot.is-active { width: 16px; background: #3FCDAF; }

@media (max-width: 720px) {
  .ad-deck { padding: 18px 20px 20px; height: auto; min-height: 580px; }
}
`;

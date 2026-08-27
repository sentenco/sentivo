import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./ascendTracks";
import AscendPush from "./AscendPush.jsx";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  gimmick: "Main Activity",
  levelup: "Level It Up",
  closing: "Closing",
  round1: "Round 1",
  round2: "Round 2",
  thankyou: "Thank You",
};

function buildSlideTypes(lesson) {
  return lesson.slideOrder;
}

function TopStrip({ lesson, trackTitle, slideType }) {
  return (
    <div className="ad-strip">
      <span>{lesson.code}</span>
      <span className="ad-strip-dot">·</span>
      <span>{trackTitle}</span>
      <span className="ad-strip-dot">·</span>
      <span className="ad-strip-tag">{lesson.type}</span>
      <span className="ad-strip-label">{SLIDE_LABELS[slideType]}</span>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="ad-slide ad-slide--cover">
      <span className="ad-cover-kicker">{lesson.code} · {lesson.type}</span>
      <h1 className="ad-cover-title">{lesson.title}</h1>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  const w = lesson.warmup;
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (w.kind === "questions") {
    return (
      <div className="ad-slide ad-slide--centered">
        <span className="ad-slide-tag">Warm-up</span>
        <div className="ad-qlist">
          {w.questions.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </div>
      </div>
    );
  }

  // synonyms
  const item = w.items[idx];
  const isFirst = idx === 0;
  const isLast = idx === w.items.length - 1;

  function go(delta) {
    setRevealed(false);
    setIdx((i) => i + delta);
  }

  return (
    <div className="ad-slide ad-slide--centered">
      <span className="ad-slide-tag">Warm-up · Level it up</span>
      <div className="ad-synogame">
        <span className="ad-synogame-count">{idx + 1} / {w.items.length}</span>
        <p className="ad-synogame-sentence">
          {item.pre}<mark className="ad-synogame-target">{item.word}</mark>{item.post}
        </p>
        {revealed ? (
          <p className="ad-synogame-answer">{item.upgraded}</p>
        ) : (
          <button type="button" className="ad-primary-btn" onClick={() => setRevealed(true)}>
            Show the leveled-up version
          </button>
        )}
      </div>
      <div className="ad-game-stepper">
        <button type="button" className="ad-game-btn" onClick={() => go(-1)} disabled={isFirst}>← Prev</button>
        <button type="button" className="ad-game-btn" onClick={() => go(1)} disabled={isLast}>Next →</button>
      </div>
    </div>
  );
}

function UpgradeGimmickSlide({ lesson }) {
  const g = lesson.gimmick;
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const item = g.items[idx];
  const isFirst = idx === 0;
  const isLast = idx === g.items.length - 1;

  function go(delta) {
    setRevealed(false);
    setIdx((i) => i + delta);
  }

  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{g.heading}</h2>
      <div className="ad-synogame">
        <span className="ad-synogame-count">{idx + 1} / {g.items.length}</span>
        <p className="ad-synogame-sentence">{item.plain}</p>
        {revealed ? (
          <p className="ad-synogame-answer">{item.upgraded}</p>
        ) : (
          <button type="button" className="ad-primary-btn" onClick={() => setRevealed(true)}>
            Show the upgrade
          </button>
        )}
      </div>
      <div className="ad-game-stepper">
        <button type="button" className="ad-game-btn" onClick={() => go(-1)} disabled={isFirst}>← Prev</button>
        <button type="button" className="ad-game-btn" onClick={() => go(1)} disabled={isLast}>Next →</button>
      </div>
    </div>
  );
}

function FrameGimmickSlide({ lesson }) {
  const g = lesson.gimmick;
  const [showTemplate, setShowTemplate] = useState(true);
  const [promptIdx, setPromptIdx] = useState(0);

  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{g.heading}</h2>
      <p className="ad-prompt-quote">“{g.prompts[promptIdx]}”</p>
      {showTemplate && (
        <div className="ad-frame-template">
          {g.template.map((step, i) => (
            <span key={i} className="ad-frame-step">{step}</span>
          ))}
        </div>
      )}
      <div className="ad-game-stepper">
        <button type="button" className="ad-game-btn" onClick={() => setShowTemplate((s) => !s)}>
          {showTemplate ? "Hide template" : "Show template"}
        </button>
        {g.prompts.length > 1 && (
          <button
            type="button"
            className="ad-game-btn"
            onClick={() => setPromptIdx((i) => (i + 1) % g.prompts.length)}
          >
            Next prompt →
          </button>
        )}
      </div>
    </div>
  );
}

function CounterGimmickSlide({ lesson }) {
  const g = lesson.gimmick;
  const [idx, setIdx] = useState(0);
  const [showMove, setShowMove] = useState(true);
  const isFirst = idx === 0;
  const isLast = idx === g.claims.length - 1;

  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{g.heading}</h2>
      {showMove && <p className="ad-move-line">“You're right that ___. That said, ___.”</p>}
      <p className="ad-prompt-quote">“{g.claims[idx]}”</p>
      <div className="ad-game-stepper">
        <button type="button" className="ad-game-btn" onClick={() => setShowMove((s) => !s)}>
          {showMove ? "Hide the move" : "Show the move"}
        </button>
        <button type="button" className="ad-game-btn" onClick={() => setIdx((i) => i - 1)} disabled={isFirst}>← Prev</button>
        <button type="button" className="ad-game-btn" onClick={() => setIdx((i) => i + 1)} disabled={isLast}>Next →</button>
      </div>
    </div>
  );
}

function ReversalGimmickSlide({ lesson }) {
  const g = lesson.gimmick;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{g.heading}</h2>
      <span className={`ad-side-tag ${flipped ? "ad-side-tag--against" : "ad-side-tag--for"}`}>
        {flipped ? "Now argue AGAINST" : "Argue FOR"}
      </span>
      <p className="ad-prompt-quote">“{g.position}”</p>
      <button type="button" className="ad-primary-btn" onClick={() => setFlipped((f) => !f)}>
        Flip it
      </button>
    </div>
  );
}

function LevelUpSlide({ lesson }) {
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");
  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">Level It Up</h2>
      <p className="ad-instruction">Take something the student said today, plain or rough, and upgrade it together, live.</p>
      <div className="ad-beforeafter">
        <div className="ad-highlight-step">
          <label className="ad-highlight-label">What they said</label>
          <textarea
            className="ad-highlight-input"
            value={before}
            onChange={(e) => setBefore(e.target.value)}
            placeholder="Type it as they said it…"
          />
        </div>
        <span className="ad-beforeafter-arrow">→</span>
        <div className="ad-highlight-step">
          <label className="ad-highlight-label">Leveled up</label>
          <textarea
            className="ad-highlight-input"
            value={after}
            onChange={(e) => setAfter(e.target.value)}
            placeholder="Write the upgraded version…"
          />
        </div>
      </div>
    </div>
  );
}

function ClosingSlide({ lesson }) {
  const c = lesson.closing;
  if (c.kind === "gather") {
    return (
      <div className="ad-slide ad-slide--centered">
        <h2 className="ad-heading">{c.heading}</h2>
        <p className="ad-instruction">{c.body}</p>
      </div>
    );
  }
  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{c.heading}</h2>
      <p className="ad-instruction">{c.body}</p>
      <div className="ad-stickynote">
        {c.words.map((w) => (
          <span key={w} className="ad-stickynote-word">{w}</span>
        ))}
      </div>
    </div>
  );
}

function Round1Slide({ lesson }) {
  const r = lesson.round1;
  return (
    <div className="ad-slide ad-slide--centered">
      <span className="ad-slide-tag">Round 1 · Same question, better answer</span>
      <p className="ad-prompt-quote">“{r.question}”</p>
    </div>
  );
}

function Round2Slide({ lesson }) {
  const r = lesson.round2;
  return (
    <div className="ad-slide ad-slide--centered">
      <span className="ad-slide-tag">Round 2 · Live debate · {r.timing}</span>
      <p className="ad-prompt-quote">“{r.topic}”</p>
    </div>
  );
}

function ThankYouSlide({ lesson }) {
  const t = lesson.thankYou;
  return (
    <div className="ad-slide ad-slide--centered">
      <h2 className="ad-heading">{t.heading}</h2>
      <div className="ad-skills-list">
        {t.skills.map((s) => (
          <span key={s} className="ad-skill-chip">{s}</span>
        ))}
      </div>
      <div className="ad-stickynote ad-stickynote--collection">
        {t.words.map((w) => (
          <span key={w} className="ad-stickynote-word">{w}</span>
        ))}
      </div>
      <p className="ad-closing-line">{t.closingLine}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} />;
    case "gimmick":
      if (lesson.gimmick.kind === "upgrade") return <UpgradeGimmickSlide lesson={lesson} />;
      if (lesson.gimmick.kind === "frame") return <FrameGimmickSlide lesson={lesson} />;
      if (lesson.gimmick.kind === "counter") return <CounterGimmickSlide lesson={lesson} />;
      if (lesson.gimmick.kind === "reversal") return <ReversalGimmickSlide lesson={lesson} />;
      return null;
    case "levelup":
      return <LevelUpSlide lesson={lesson} />;
    case "closing":
      return <ClosingSlide lesson={lesson} />;
    case "round1":
      return <Round1Slide lesson={lesson} />;
    case "round2":
      return <Round2Slide lesson={lesson} />;
    case "thankyou":
      return <ThankYouSlide lesson={lesson} />;
    default:
      return null;
  }
}

export default function Ascend() {
  const { trackId, lessonNum } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(trackId, Number(lessonNum));
  const track = getTrack(trackId);

  if (!lesson) {
    return (
      <div className="ad-shell">
        <style>{CSS}</style>
        <div className="ad-stage">
          <p className="ad-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  if (lesson.mechanic === "push") {
    return <AscendPush lesson={lesson} track={track} />;
  }

  const slideTypes = buildSlideTypes(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ad-shell">
      <style>{CSS}</style>
      <header className="ad-topbar">
        <span className="ad-topbar-title">{lesson.code} · {lesson.title}</span>
      </header>

      <div className="ad-stage">
        <div className="ad-deck">
          <TopStrip lesson={lesson} trackTitle={track?.title} slideType={slideType} />
          <div className="ad-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
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

:root {
  --ink: #17352E;
  --accent: #128571;
  --accent-dark: #0E6B5A;
  --hair: #D3EFE6;
  --muted: #5C8177;
  --panel: #F3FAF8;
  --warn: #C2503F;
}

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
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.ad-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--ink);
  text-align: center;
}

.ad-missing {
  font-family: 'Quicksand', sans-serif;
  color: var(--muted);
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
  height: 580px;
  background: #FFFFFF;
  border: 1px solid var(--hair);
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(17,53,46,0.14);
  display: flex;
  flex-direction: column;
  padding: 22px 42px 26px;
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
  color: var(--accent);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--hair);
  margin-bottom: 16px;
  flex-shrink: 0;
}
.ad-strip-dot { color: #9CC7BB; }
.ad-strip-tag {
  background: rgba(18,133,113,0.14);
  color: var(--accent);
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
}
.ad-strip-label { margin-left: auto; color: var(--muted); }

.ad-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.ad-slide { display: flex; flex-direction: column; gap: 13px; height: 100%; padding-top: 8px; }
.ad-slide--centered { align-items: center; justify-content: center; text-align: center; gap: 18px; }
.ad-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: var(--ink);
  margin: 0;
}
.ad-instruction {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15.5px;
  color: var(--muted);
  max-width: 640px;
  margin: 0;
}
.ad-slide-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(18,133,113,0.1);
  border: 1.5px solid rgba(18,133,113,0.3);
  border-radius: 999px;
  padding: 5px 14px;
}

/* Cover */
.ad-slide--cover { align-items: center; justify-content: center; text-align: center; gap: 14px; }
.ad-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--accent);
}
.ad-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: var(--ink);
  margin: 0;
}
.ad-cover-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: var(--muted);
  margin: 0;
  max-width: 560px;
}

/* Warm-up / stepper games (shared by warmup + upgrade gimmick) */
.ad-qlist { display: flex; flex-direction: column; gap: 14px; align-items: center; }
.ad-qlist p {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 28px;
  color: var(--ink);
  max-width: 780px;
}
.ad-move-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--accent);
  margin: 0;
}
.ad-synogame {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: var(--panel);
  border: 1px solid var(--hair);
  border-radius: 16px;
  padding: 22px 40px;
  width: 100%;
  max-width: 760px;
}
.ad-synogame-count {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: var(--muted);
}
.ad-synogame-sentence {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: var(--ink);
  margin: 0;
  text-align: center;
  line-height: 1.4;
}
.ad-synogame-target { background: rgba(18,133,113,0.18); color: var(--accent-dark); padding: 1px 8px; border-radius: 6px; font-weight: 700; }
.ad-synogame-answer {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 17px;
  color: var(--accent-dark);
  margin: 0;
  text-align: center;
}
.ad-primary-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #FFFFFF;
  background: var(--accent);
  border: none;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}
.ad-game-stepper { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; }
.ad-game-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
  background: var(--panel);
  border: 1px solid var(--hair);
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
}
.ad-game-btn:disabled { opacity: 0.35; cursor: default; }

/* Frame gimmick */
.ad-prompt-quote {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: var(--ink);
  max-width: 720px;
  margin: 0;
}
.ad-frame-template { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 700px; }
.ad-frame-step {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: var(--ink);
  background: var(--panel);
  border: 1.5px solid var(--hair);
  border-radius: 999px;
  padding: 8px 16px;
}

/* Reversal gimmick */
.ad-side-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 6px 16px;
}
.ad-side-tag--for { color: var(--accent-dark); background: rgba(18,133,113,0.12); }
.ad-side-tag--against { color: var(--warn); background: rgba(194,80,63,0.12); }

/* Level It Up */
.ad-highlight-step { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.ad-highlight-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: var(--accent);
}
.ad-highlight-input {
  width: 100%;
  min-height: 64px;
  resize: vertical;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: var(--ink);
  background: var(--panel);
  border: 1px solid var(--hair);
  border-radius: 10px;
  padding: 12px 16px;
}
.ad-highlight-input::placeholder { color: var(--muted); }
.ad-beforeafter { display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px; align-items: center; width: 100%; max-width: 760px; }
.ad-beforeafter-arrow { font-family: 'Fredoka', sans-serif; font-size: 20px; color: var(--accent); }

/* Closing / sticky note */
.ad-stickynote { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 640px; }
.ad-stickynote-word {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--ink);
  background: #EAF7F0;
  border: 1.5px solid rgba(18,133,113,0.35);
  border-radius: 8px;
  padding: 10px 16px;
  transform: rotate(-1deg);
}
.ad-stickynote-word:nth-child(2n) { transform: rotate(1deg); }
.ad-stickynote--collection { max-width: 760px; }

/* Round 1 / Round 2 (Lesson 5) */

/* Thank You */
.ad-skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
.ad-skill-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: var(--ink);
  background: rgba(17,53,46,0.08);
  border: 1px solid rgba(17,53,46,0.16);
  border-radius: 999px;
  padding: 6px 14px;
}
.ad-closing-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  line-height: 1.5;
  color: var(--ink);
  margin: 0;
  max-width: 700px;
  text-align: center;
}

/* Nav row / footer */
.ad-nav-row {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--hair);
}
.ad-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
  background: var(--panel);
  border: 1px solid var(--hair);
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ad-nav-btn--primary { background: var(--accent); color: #FFFFFF; border-color: var(--accent); }
.ad-nav-btn:disabled { opacity: 0.35; cursor: default; }
.ad-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.ad-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: var(--hair); }
.ad-nav-dot.is-active { width: 16px; background: var(--accent); }

@media (max-width: 720px) {
  .ad-deck { padding: 18px 20px 20px; height: auto; min-height: 580px; }
}
`;

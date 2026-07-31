import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./ascendTracks";

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

function DeckHeader({ trackTitle, slideType }) {
  return (
    <div className="ad-deck-header">
      <div className="ad-brand-badge">
        <div className="ad-brand">
          <img src="/logo-sentivo.png" alt="" className="ad-brand-logo" />entivo
        </div>
      </div>
      <span className="ad-deck-header-title">{trackTitle}</span>
      <span className="ad-deck-header-label">{SLIDE_LABELS[slideType]}</span>
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

  const slideTypes = buildSlideTypes(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="ad-shell">
      <style>{CSS}</style>

      <div className="ad-stage">
        <div className="ad-deck">
          <DeckHeader trackTitle={track?.title} slideType={slideType} />
          <div className="ad-deck-inner">
            <div className="ad-deck-body" key={slideIdx}>
              {renderSlide(slideType, lesson)}
            </div>
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
  --navy: #1B2A4A;
  --coral: #FF6B4A;
  --coral-dark: #E0502F;
  --hair: #E1E5EE;
  --muted: #7A84A0;
}

.ad-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #F4F6FA 0%, #E7EAF2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ad-shell * { box-sizing: border-box; }

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
  align-items: center;
  justify-content: center;
  padding: 40px 24px 60px;
}

.ad-deck {
  position: relative;
  width: 1140px;
  max-width: 100%;
  height: 580px;
  background: #FFFFFF;
  border: 1px solid var(--hair);
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(27,42,74,0.14);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ad-slide-in 0.24s ease;
}
@keyframes ad-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ad-deck-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  background: var(--navy);
}
.ad-brand-badge {
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 6px 18px 6px 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.14);
}
.ad-brand {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: var(--navy);
  display: flex;
  align-items: center;
  gap: 0;
}
.ad-brand-logo { height: 32px; width: auto; display: block; margin-right: -4px; }
.ad-deck-header-title {
  flex: 1;
  text-align: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
}
.ad-deck-header-label {
  flex-shrink: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.ad-deck-inner { flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 26px 42px 20px; }

.ad-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.ad-slide { display: flex; flex-direction: column; gap: 13px; height: 100%; padding-top: 8px; }
.ad-slide--centered { align-items: center; justify-content: center; text-align: center; gap: 18px; }
.ad-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: var(--navy);
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
  color: var(--coral);
  background: rgba(255,107,74,0.1);
  border: 1.5px solid rgba(255,107,74,0.3);
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
  color: var(--coral);
}
.ad-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 52px;
  color: var(--navy);
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
  color: var(--navy);
  max-width: 780px;
}
.ad-move-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--coral);
  margin: 0;
}
.ad-synogame {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #F9FAFC;
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
  color: var(--navy);
  margin: 0;
  text-align: center;
  line-height: 1.4;
}
.ad-synogame-target { background: rgba(255,107,74,0.18); color: var(--coral-dark); padding: 1px 8px; border-radius: 6px; font-weight: 700; }
.ad-synogame-answer {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 17px;
  color: var(--coral-dark);
  margin: 0;
  text-align: center;
}
.ad-primary-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #FFFFFF;
  background: var(--coral);
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
  color: var(--navy);
  background: #F9FAFC;
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
  color: var(--navy);
  max-width: 720px;
  margin: 0;
}
.ad-frame-template { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 700px; }
.ad-frame-step {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: var(--navy);
  background: #F9FAFC;
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
.ad-side-tag--for { color: var(--navy); background: rgba(27,42,74,0.1); }
.ad-side-tag--against { color: var(--coral-dark); background: rgba(255,107,74,0.14); }

/* Level It Up */
.ad-highlight-step { display: flex; flex-direction: column; gap: 6px; flex: 1; }
.ad-highlight-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: var(--coral);
}
.ad-highlight-input {
  width: 100%;
  min-height: 64px;
  resize: vertical;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: var(--navy);
  background: #F9FAFC;
  border: 1px solid var(--hair);
  border-radius: 10px;
  padding: 12px 16px;
}
.ad-highlight-input::placeholder { color: var(--muted); }
.ad-beforeafter { display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px; align-items: center; width: 100%; max-width: 760px; }
.ad-beforeafter-arrow { font-family: 'Fredoka', sans-serif; font-size: 20px; color: var(--coral); }

/* Closing / sticky note */
.ad-stickynote { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; max-width: 640px; }
.ad-stickynote-word {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: var(--navy);
  background: #FFF3EE;
  border: 1.5px solid rgba(255,107,74,0.35);
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
  color: var(--navy);
  background: rgba(27,42,74,0.08);
  border: 1px solid rgba(27,42,74,0.16);
  border-radius: 999px;
  padding: 6px 14px;
}
.ad-closing-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  line-height: 1.5;
  color: var(--navy);
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
  padding: 16px 42px;
  background: var(--navy);
}
.ad-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ad-nav-btn--primary { background: var(--coral); color: #FFFFFF; border-color: var(--coral); }
.ad-nav-btn:disabled { opacity: 0.35; cursor: default; }
.ad-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.ad-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: rgba(255,255,255,0.25); }
.ad-nav-dot.is-active { width: 16px; background: var(--coral); }

@media (max-width: 720px) {
  .ad-deck-inner { padding: 20px 20px 16px; }
  .ad-nav-row { padding: 14px 20px; }
  .ad-deck { height: auto; min-height: 580px; }
}
`;

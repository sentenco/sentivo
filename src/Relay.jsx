import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "./relayTracks";

const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  bounce: "Bounce",
  yourturn: "Your Turn",
  pushit: "Push It",
  end: "End",
};

function buildSlideTypes() {
  return ["cover", "warmup", "bounce", "yourturn", "pushit", "end"];
}

function showsBeatBadge(slideType) {
  return ["bounce", "yourturn", "pushit"].includes(slideType);
}

function TopStrip({ lesson, slideType }) {
  return (
    <div className="rl-strip">
      <span>{lesson.code}</span>
      <span className="rl-strip-dot">·</span>
      <span>{lesson.title}</span>
      <span className="rl-strip-dot">·</span>
      <span>{lesson.technique}</span>
      <span className="rl-strip-dot">·</span>
      <span className="rl-strip-tag">{lesson.tag}</span>
      <span className="rl-strip-label">{SLIDE_LABELS[slideType]}</span>
    </div>
  );
}

function BeatBadge() {
  return (
    <div className="rl-badge">
      <span className="rl-badge-label">The Rule</span>
      <div className="rl-badge-list">
        <span className="rl-badge-item">1 Answer</span>
        <span className="rl-badge-item">2 Add</span>
        <span className="rl-badge-item">3 Ask</span>
      </div>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--cover">
      <span className="rl-cover-kicker">{lesson.code} · {lesson.tag}</span>
      <h1 className="rl-cover-title">{lesson.title}</h1>
      <p className="rl-cover-subtitle">{lesson.subtitle}</p>
      <span className="rl-cover-technique">{lesson.techniqueLine}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-heading">{lesson.warmup.heading}</h2>
      <div className="rl-qlist">
        {lesson.warmup.questions.map((q, i) => (
          <p key={i}>{q}</p>
        ))}
      </div>
    </div>
  );
}

function BounceSlide({ lesson }) {
  const [idx, setIdx] = useState(0);
  const rounds = lesson.bounce.rounds;
  const round = rounds[idx];
  const isFirst = idx === 0;
  const isLast = idx === rounds.length - 1;

  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-heading">{lesson.bounce.heading}</h2>
      <p className="rl-bounce-question">“{round.question}”</p>
      <p className="rl-bounce-hint">If a beat's missing: {round.missingBeatHint}</p>
      <div className="rl-game-stepper">
        <button type="button" className="rl-game-btn" onClick={() => setIdx((i) => i - 1)} disabled={isFirst}>← Prev</button>
        <span className="rl-game-count">{idx + 1} / {rounds.length}</span>
        <button type="button" className="rl-game-btn" onClick={() => setIdx((i) => i + 1)} disabled={isLast}>Next →</button>
      </div>
    </div>
  );
}

function YourTurnSlide({ lesson }) {
  const yt = lesson.yourTurn;
  return (
    <div className="rl-slide">
      <h2 className="rl-heading">Your Turn</h2>
      <p className="rl-prompt">{yt.scenario}</p>
      <div className="rl-roleplay">
        <span className="rl-roleplay-role">{yt.teacherRole}</span>
        <p className="rl-roleplay-opener">“{yt.opener}”</p>
      </div>
    </div>
  );
}

function PushItSlide({ lesson }) {
  return (
    <div className="rl-slide">
      <h2 className="rl-heading">Push It <span className="rl-optional">(optional)</span></h2>
      <p className="rl-prompt">{lesson.pushIt.prompt}</p>
    </div>
  );
}

function EndSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-heading">{lesson.end.heading}</h2>
      <p className="rl-end-line">{lesson.end.line}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} />;
    case "bounce":
      return <BounceSlide lesson={lesson} />;
    case "yourturn":
      return <YourTurnSlide lesson={lesson} />;
    case "pushit":
      return <PushItSlide lesson={lesson} />;
    case "end":
      return <EndSlide lesson={lesson} />;
    default:
      return null;
  }
}

export default function Relay() {
  const { trackId, lessonNum } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="rl-shell">
        <style>{CSS}</style>
        <div className="rl-stage">
          <p className="rl-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideTypes = buildSlideTypes();
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;
  const withBadge = showsBeatBadge(slideType);

  return (
    <div className="rl-shell">
      <style>{CSS}</style>
      <header className="rl-topbar">
        <span className="rl-topbar-title">{lesson.code} · {lesson.title}</span>
      </header>

      <div className="rl-stage">
        <div className="rl-deck">
          <TopStrip lesson={lesson} slideType={slideType} />
          {withBadge && <BeatBadge />}
          <div className={`rl-deck-body ${withBadge ? "has-badge" : ""}`} key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          <div className="rl-nav-row">
            <button type="button" className="rl-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="rl-nav-dots">
              {slideTypes.map((_, i) => (
                <span key={i} className={`rl-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="rl-nav-btn rl-nav-btn--primary"
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rl-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.rl-shell * { box-sizing: border-box; }

.rl-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.rl-topbar-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  color: #10646B;
  text-align: center;
}

.rl-missing {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4B8B92;
  text-align: center;
  margin-top: 60px;
}

.rl-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 24px 60px;
}

.rl-deck {
  position: relative;
  width: 960px;
  max-width: 100%;
  height: 580px;
  background: #FFFFFF;
  border: 1px solid #D3EDE9;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(16,100,107,0.14);
  display: flex;
  flex-direction: column;
  padding: 22px 34px 26px;
  animation: rl-slide-in 0.24s ease;
}
@keyframes rl-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.rl-strip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #3E7CB1;
  padding-bottom: 12px;
  border-bottom: 1px solid #EAF3FA;
  margin-bottom: 16px;
}
.rl-strip-dot { color: #B7CFCC; }
.rl-strip-tag {
  background: rgba(62,124,177,0.14);
  color: #3E7CB1;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
}
.rl-strip-label { margin-left: auto; color: #9FC6C2; }

/* ── "The Rule" reminder badge ── */
.rl-badge {
  position: absolute;
  top: 76px;
  right: 34px;
  z-index: 4;
  width: 128px;
  background: #EAF3FA;
  border: 1px solid #C9E0F0;
  border-radius: 12px;
  padding: 10px 12px 12px;
  box-shadow: 0 10px 20px rgba(16,100,107,0.1);
}
.rl-badge-label {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 10px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #3E7CB1;
  margin-bottom: 6px;
}
.rl-badge-list { display: flex; flex-direction: column; gap: 4px; }
.rl-badge-item {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
}

.rl-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.rl-deck-body.has-badge { padding-right: 148px; }
.rl-slide { display: flex; flex-direction: column; gap: 13px; height: 100%; }
.rl-slide--centered { align-items: center; justify-content: center; text-align: center; gap: 18px; }
.rl-heading {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 30px;
  color: #10646B;
  margin: 0;
}
.rl-optional { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 16px; color: #9FC6C2; }

/* ── Cover ── */
.rl-slide--cover {
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 18px;
}
.rl-cover-kicker {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #3E7CB1;
}
.rl-cover-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 48px;
  color: #10646B;
  margin: 0;
}
.rl-cover-subtitle {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #4B8B92;
  margin: 0;
}
.rl-cover-technique {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #3E7CB1;
  margin-top: 4px;
}

/* ── Warm-up ── */
.rl-qlist { display: flex; flex-direction: column; gap: 12px; align-items: center; }
.rl-qlist p {
  margin: 0;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #1F4448;
}

/* ── Bounce ── */
.rl-bounce-question {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 26px;
  color: #10646B;
  margin: 0;
  max-width: 620px;
}
.rl-bounce-hint {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 13.5px;
  color: #9FC6C2;
  margin: 0;
}
.rl-game-stepper { display: flex; align-items: center; gap: 14px; margin-top: 6px; }
.rl-game-btn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #1F4448;
  background: #EAF3FA;
  border: 1px solid #D3EDE9;
  border-radius: 999px;
  padding: 6px 14px;
  cursor: pointer;
}
.rl-game-btn:disabled { opacity: 0.35; cursor: default; }
.rl-game-count {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #4B8B92;
}

/* ── Your Turn / Push It ── */
.rl-prompt {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 21px;
  color: #10646B;
  margin: 0;
}
.rl-roleplay {
  background: #EAF3FA;
  border-left: 3px solid #3E7CB1;
  border-radius: 0 12px 12px 0;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.rl-roleplay-role {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #3E7CB1;
}
.rl-roleplay-opener {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 17px;
  color: #1F4448;
  margin: 0;
}

/* ── End ── */
.rl-end-line {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #4B8B92;
  margin: 0;
}

/* ── Nav row ── */
.rl-nav-row { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; padding-top: 14px; border-top: 1px solid #EAF3FA; }
.rl-nav-btn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1F4448;
  background: #EAF3FA;
  border: 1px solid #D3EDE9;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.rl-nav-btn--primary { background: #3E7CB1; color: #FFFFFF; border-color: #3E7CB1; }
.rl-nav-btn:disabled { opacity: 0.35; cursor: default; }
.rl-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.rl-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #D3EDE9; }
.rl-nav-dot.is-active { width: 16px; background: #3E7CB1; }

@media (max-width: 720px) {
  .rl-deck { padding: 18px 20px 20px; height: auto; min-height: 580px; }
  .rl-badge { display: none; }
  .rl-deck-body.has-badge { padding-right: 0; }
}
`;

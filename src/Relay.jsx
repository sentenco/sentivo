import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "./relayTracks";

function buildSlideTypes(lesson) {
  const bounceSlides = lesson.bounce.rounds.map((_, i) => `bounce-${i}`);
  return ["cover", "warmup", ...bounceSlides, "yourturn", "pushit", "end"];
}

const STAGES = [
  { key: "cover", label: "Cover" },
  { key: "warmup", label: "Warm-up" },
  { key: "bounce", label: "Bounce" },
  { key: "yourturn", label: "Your Turn" },
  { key: "pushit", label: "Push It" },
  { key: "end", label: "End" },
];

function stageKey(slideType) {
  return slideType.startsWith("bounce-") ? "bounce" : slideType;
}

function StageLabel({ slideType }) {
  const stage = STAGES.find((s) => s.key === stageKey(slideType));
  return <span className="rl-stage-label">{stage.label}</span>;
}

function CoverSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h1 className="rl-h rl-h--cover">{lesson.title}</h1>
      <span className="rl-technique">{lesson.techniqueLine}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-question">{lesson.warmup.question}</h2>
    </div>
  );
}

function BounceSlide({ lesson, index }) {
  const [helping, setHelping] = useState(false);
  const round = lesson.bounce.rounds[index];
  return (
    <div className="rl-slide rl-slide--centered">
      <span className="rl-eyebrow">Answer · Add · Ask</span>
      <h2 className="rl-question">{round.question}</h2>
      {helping ? (
        <p className="rl-help-text">{round.missingBeatHint}</p>
      ) : (
        <button type="button" className="rl-help-btn" onClick={() => setHelping(true)}>Need help?</button>
      )}
    </div>
  );
}

function YourTurnSlide({ lesson }) {
  const yt = lesson.yourTurn;
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-h">Your Turn</h2>
      <p className="rl-subtitle">{yt.scenario}</p>
      <div className="rl-bubble">
        <span className="rl-bubble-role">{yt.teacherRole}</span>
        <p className="rl-bubble-text">“{yt.opener}”</p>
      </div>
    </div>
  );
}

function PushItSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-h">Push It <span className="rl-optional">(optional)</span></h2>
      <p className="rl-subtitle">{lesson.pushIt.prompt}</p>
    </div>
  );
}

function EndSlide({ lesson }) {
  return (
    <div className="rl-slide rl-slide--centered">
      <h2 className="rl-h">{lesson.end.heading}</h2>
      <p className="rl-subtitle">{lesson.end.line}</p>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  if (slideType.startsWith("bounce-")) {
    return <BounceSlide lesson={lesson} index={Number(slideType.slice(7))} />;
  }
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} />;
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

  const slideTypes = buildSlideTypes(lesson);
  const slideType = slideTypes[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slideTypes.length - 1;

  return (
    <div className="rl-shell">
      <style>{CSS}</style>

      <div className="rl-stage">
        <div className="rl-deck">
          <div className="rl-deck-header">
            <span className="rl-brand"><img src="/logo-sentivo.png" alt="" className="rl-brand-logo" />entivo</span>
            <StageLabel slideType={slideType} />
          </div>
          <div className="rl-deck-body" key={slideIdx}>
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

.rl-deck-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 30px;
  background: #F5FBFA;
  border-bottom: 1px solid #EAF3FA;
  flex-shrink: 0;
}
.rl-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 17px;
  color: #10646B;
}
.rl-brand-logo { height: 22px; width: auto; display: block; margin-right: -4px; }

.rl-stage-label {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4B8B92;
  background: transparent;
  padding: 6px 0;
  white-space: nowrap;
  flex-shrink: 0;
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
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.rl-deck {
  position: relative;
  width: 780px;
  max-width: 100%;
  background: #FFFFFF;
  border: 1px solid #D3EDE9;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(16,100,107,0.14);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: rl-slide-in 0.2s ease;
}
@keyframes rl-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.rl-deck-body { min-height: 260px; display: flex; padding: 36px 34px 28px; }
.rl-slide { display: flex; flex-direction: column; gap: 14px; height: 100%; width: 100%; }
.rl-slide--centered { align-items: center; justify-content: center; text-align: center; }

/* ── Highlighted heading, used on every slide ── */
.rl-h {
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 26px;
  color: #FFFFFF;
  background: #3E7CB1;
  border-radius: 12px;
  padding: 8px 22px;
  margin: 0;
  line-height: 1.25;
}
.rl-h--cover { font-size: 38px; padding: 10px 28px; }

/* ── Main question, used on Warm-up and Bounce -- bigger than a
   regular heading so it's the clear focal point of the slide ── */
.rl-question {
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.25;
  color: #FFFFFF;
  background: #3E7CB1;
  border-radius: 14px;
  padding: 14px 30px;
  margin: 0;
  max-width: 640px;
}
.rl-optional { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 15px; color: rgba(255,255,255,0.75); margin-left: 2px; }

.rl-subtitle {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4B8B92;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}
.rl-technique {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3E7CB1;
}

.rl-eyebrow {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9FC6C2;
}

.rl-bubble {
  background: #EAF3FA;
  border: 1.5px solid #C9E0F0;
  border-radius: 16px;
  padding: 16px 24px;
  max-width: 560px;
}
.rl-bubble-role {
  display: block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #3E7CB1;
  margin-bottom: 6px;
}
.rl-bubble-text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 19px;
  color: #10646B;
  margin: 0;
}

.rl-help-btn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #3E7CB1;
  background: #EAF3FA;
  border: 1px solid #C9E0F0;
  border-radius: 999px;
  padding: 7px 16px;
  cursor: pointer;
}
.rl-help-text {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #3E7CB1;
  margin: 0;
}

/* ── Nav row ── */
.rl-nav-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 34px 20px; border-top: 1px solid #EAF3FA; flex-shrink: 0; }
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
  .rl-deck { padding: 18px 20px 20px; height: auto; min-height: 460px; }
}
`;

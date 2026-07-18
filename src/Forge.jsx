import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import defaultLesson from "./forgeData";

const SLIDE_TYPES = ["cover", "warmup", "wordload", "spotlight", "tapsay", "yourturn", "pushit", "selfcheck", "homework"];
const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  wordload: "Word Load",
  spotlight: "Spotlight",
  tapsay: "Tap & Say",
  yourturn: "Your Turn",
  pushit: "Push It",
  selfcheck: "Self-Check",
  homework: "Homework",
};

function TopStrip({ lesson, slideType }) {
  return (
    <div className="fg-strip">
      <span>{lesson.code}</span>
      <span className="fg-strip-dot">·</span>
      <span>{lesson.title}</span>
      <span className="fg-strip-dot">·</span>
      <span>{lesson.technique}</span>
      <span className="fg-strip-dot">·</span>
      <span className="fg-strip-tag">{lesson.tag}</span>
      <span className="fg-strip-label">{SLIDE_LABELS[slideType]}</span>
    </div>
  );
}

function WordChips({ words, active }) {
  return (
    <div className="fg-chips">
      {words.map((w) => (
        <span key={w.word} className={`fg-chip ${active === w.word ? "is-active" : ""}`}>
          {w.word}
        </span>
      ))}
    </div>
  );
}

function NotesToggle({ note }) {
  const [open, setOpen] = useState(false);
  if (!note) return null;
  return (
    <div className="fg-notes">
      {open && <div className="fg-notes-panel">{note}</div>}
      <button type="button" className="fg-notes-btn" onClick={() => setOpen((o) => !o)}>
        {open ? "✕ Hide notes" : "🗒 Teacher notes"}
      </button>
    </div>
  );
}

function CoverSlide({ lesson }) {
  return (
    <div className="fg-slide fg-slide--cover">
      <span className="fg-cover-kicker">{lesson.code} · {lesson.tag}</span>
      <h1 className="fg-cover-title">{lesson.title}</h1>
      <p className="fg-cover-subtitle">{lesson.subtitle}</p>
      <WordChips words={lesson.words} />
      <span className="fg-cover-technique">{lesson.techniqueLine}</span>
    </div>
  );
}

function WarmupSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">{lesson.warmup.heading}</h2>
      <ol className="fg-qlist">
        {lesson.warmup.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ol>
      <span className="fg-timer">⏱ Give it a minute</span>
    </div>
  );
}

function WordLoadSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Word Load</h2>
      <div className="fg-wordrows">
        {lesson.words.map((w) => (
          <div key={w.word} className="fg-wordrow">
            <span className="fg-wordrow-word">{w.word}</span>
            <div className="fg-wordrow-img">
              <ImagePlaceholder micro />
            </div>
            <span className="fg-wordrow-starter">“{w.starter}”</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpotlightSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Say the Picture</h2>
      <p className="fg-move-line">{lesson.spotlight.line}</p>
      <div className="fg-spotlight-body">
        <div className="fg-spotlight-img">
          <ImagePlaceholder note={lesson.spotlight.demoImageNote} compact />
        </div>
        <p className="fg-spotlight-example">“{lesson.spotlight.example}”</p>
      </div>
      <WordChips words={lesson.words} />
    </div>
  );
}

function TapSaySlide({ lesson }) {
  const [active, setActive] = useState(null);
  const activeWord = lesson.words.find((w) => w.word === active);
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Tap & Say</h2>
      <p className="fg-move-line">{lesson.tapAndSay.instruction}</p>
      <div className="fg-tapsay-img">
        <ImagePlaceholder note={lesson.tapAndSay.sceneImageNote} />
      </div>
      <div className="fg-tapsay-moments">
        {lesson.words.map((w) => (
          <button
            type="button"
            key={w.word}
            className={`fg-moment-btn ${active === w.word ? "is-active" : ""}`}
            onClick={() => setActive(w.word)}
          >
            {w.word}
          </button>
        ))}
      </div>
      {activeWord && (
        <p className="fg-tapsay-starter">“{activeWord.starter}” — now finish the sentence out loud.</p>
      )}
      <div className="fg-hatches">
        {lesson.tapAndSay.escapeHatches.map((h) => (
          <span key={h} className="fg-hatch">{h}</span>
        ))}
      </div>
    </div>
  );
}

function YourTurnSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Your Turn</h2>
      <p className="fg-prompt">{lesson.yourTurn.prompt}</p>
      <ol className="fg-guiderail">
        {lesson.words.map((w) => (
          <li key={w.word}>{w.starter}</li>
        ))}
      </ol>
      <div className="fg-hatches">
        {lesson.yourTurn.escapeHatches.map((h) => (
          <span key={h} className="fg-hatch">{h}</span>
        ))}
      </div>
      <NotesToggle note={lesson.yourTurn.teacherNote} />
    </div>
  );
}

function PushItSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Push It <span className="fg-optional">(optional)</span></h2>
      <p className="fg-prompt">{lesson.pushIt.prompt}</p>
      <p className="fg-model-frame">Model: “{lesson.pushIt.modelFrame}”</p>
    </div>
  );
}

function SelfCheckSlide({ lesson }) {
  const [scores, setScores] = useState(() =>
    Object.fromEntries(lesson.selfCheck.scorecard.map((row) => [row.label, ""]))
  );
  const total = lesson.selfCheck.scorecard.reduce((sum, row) => {
    const v = Number(scores[row.label]);
    return sum + (Number.isFinite(v) ? v : 0);
  }, 0);

  function setScore(label, max, raw) {
    const v = raw === "" ? "" : Math.max(0, Math.min(max, Number(raw) || 0));
    setScores((prev) => ({ ...prev, [label]: v }));
  }

  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Self-Check</h2>
      <p className="fg-candoline">“{lesson.selfCheck.canDoLine}”</p>
      <div className="fg-scorecard">
        {lesson.selfCheck.scorecard.map((row) => (
          <div key={row.label} className="fg-score-row">
            <span className="fg-score-label">{row.label}</span>
            <input
              type="number"
              className="fg-score-input"
              min={0}
              max={row.max}
              value={scores[row.label]}
              onChange={(e) => setScore(row.label, row.max, e.target.value)}
              placeholder="0"
            />
            <span className="fg-score-max">/ {row.max}</span>
          </div>
        ))}
        <div className="fg-score-row fg-score-row--total">
          <span className="fg-score-label">Total</span>
          <span className="fg-score-total">{total}</span>
          <span className="fg-score-max">/ {lesson.selfCheck.totalMax}</span>
        </div>
      </div>
      <span className="fg-score-tag">{lesson.selfCheck.scoreTag}</span>
    </div>
  );
}

function HomeworkSlide({ lesson }) {
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">{lesson.homework.heading}</h2>
      <ol className="fg-homework-list">
        {lesson.homework.items.map((item, i) => (
          <li key={i}>
            <span className="fg-homework-label">{item.label}</span>
            <span className="fg-homework-detail">{item.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function renderSlide(slideType, lesson) {
  switch (slideType) {
    case "cover":
      return <CoverSlide lesson={lesson} />;
    case "warmup":
      return <WarmupSlide lesson={lesson} />;
    case "wordload":
      return <WordLoadSlide lesson={lesson} />;
    case "spotlight":
      return <SpotlightSlide lesson={lesson} />;
    case "tapsay":
      return <TapSaySlide lesson={lesson} />;
    case "yourturn":
      return <YourTurnSlide lesson={lesson} />;
    case "pushit":
      return <PushItSlide lesson={lesson} />;
    case "selfcheck":
      return <SelfCheckSlide lesson={lesson} />;
    case "homework":
      return <HomeworkSlide lesson={lesson} />;
    default:
      return null;
  }
}

export default function Forge({ lesson = defaultLesson }) {
  const navigate = useNavigate();
  const [slideIdx, setSlideIdx] = useState(0);
  const slideType = SLIDE_TYPES[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === SLIDE_TYPES.length - 1;
  const showChips = slideIdx >= SLIDE_TYPES.indexOf("wordload");

  return (
    <div className="fg-shell">
      <style>{CSS}</style>
      <header className="fg-topbar">
        <button type="button" className="fg-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="fg-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="fg-topbar-slot" />
      </header>

      <div className="fg-stage">
        <div className="fg-deck">
          <TopStrip lesson={lesson} slideType={slideType} />
          <div className="fg-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
          {showChips && !["wordload", "spotlight", "tapsay"].includes(slideType) && (
            <WordChips words={lesson.words} />
          )}
          <div className="fg-nav-row">
            <button type="button" className="fg-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="fg-nav-dots">
              {SLIDE_TYPES.map((_, i) => (
                <span key={i} className={`fg-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="fg-nav-btn fg-nav-btn--primary"
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
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap');

.fg-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #2A2118 0%, #16171C 45%, #101114 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.fg-shell * { box-sizing: border-box; }

.fg-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.fg-back-link {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #16171C;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.fg-topbar-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #F4EFE6;
  text-align: center;
  flex: 1;
}
.fg-topbar-slot { width: 90px; }

.fg-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 24px 60px;
}

.fg-deck {
  position: relative;
  width: 960px;
  max-width: 100%;
  height: 560px;
  background: #1B1C22;
  border: 1px solid #35322A;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.45);
  display: flex;
  flex-direction: column;
  padding: 22px 34px 26px;
  animation: fg-slide-in 0.24s ease;
}
@keyframes fg-slide-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.fg-strip {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #C9A876;
  padding-bottom: 12px;
  border-bottom: 1px solid #2E2B24;
  margin-bottom: 16px;
}
.fg-strip-dot { color: #55503F; }
.fg-strip-tag {
  background: rgba(242,166,90,0.15);
  color: #F2A65A;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 10.5px;
}
.fg-strip-label { margin-left: auto; color: #7A7666; }

.fg-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.fg-slide { display: flex; flex-direction: column; gap: 11px; height: 100%; }
.fg-heading {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 26px;
  color: #F4EFE6;
  margin: 0;
}
.fg-optional { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 15px; color: #7A7666; }

/* ── Cover ── */
.fg-slide--cover {
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 16px;
}
.fg-cover-kicker {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #F2A65A;
}
.fg-cover-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 44px;
  color: #F4EFE6;
  margin: 0;
}
.fg-cover-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #A8A296;
  margin: 0;
}
.fg-cover-technique {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #C9A876;
  margin-top: 4px;
}

/* ── Word chips ── */
.fg-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.fg-chip {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #F2A65A;
  background: rgba(242,166,90,0.10);
  border: 1.5px solid rgba(242,166,90,0.35);
  border-radius: 999px;
  padding: 6px 14px;
}
.fg-chip.is-active { background: #F2A65A; color: #1B1C22; border-color: #F2A65A; }

/* ── Warm-up ── */
.fg-qlist { margin: 0; padding: 0 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.fg-qlist li {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #E8E3D8;
}
.fg-timer { font-family: 'Inter', sans-serif; font-size: 13px; color: #7A7666; margin-top: auto; }

/* ── Word Load ── */
.fg-wordrows { display: flex; flex-direction: column; gap: 6px; }
.fg-wordrow {
  display: grid;
  grid-template-columns: 90px 56px 1fr;
  align-items: center;
  gap: 14px;
  background: #22232A;
  border-radius: 10px;
  padding: 6px 14px;
}
.fg-wordrow-word {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #F2A65A;
}
.fg-wordrow-img { width: 56px; height: 38px; }
.fg-wordrow-img .img-ph { border-radius: 6px; }
.fg-wordrow-starter {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #C7C2B6;
}

/* ── Spotlight ── */
.fg-move-line {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #C9A876;
  margin: 0;
}
.fg-spotlight-body { display: flex; align-items: center; gap: 18px; }
.fg-spotlight-img { width: 220px; height: 150px; flex-shrink: 0; }
.fg-spotlight-img .img-ph { border-radius: 10px; }
.fg-spotlight-example {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  font-style: italic;
  color: #E8E3D8;
}

/* ── Tap & Say ── */
.fg-tapsay-img { width: 100%; height: 190px; }
.fg-tapsay-img .img-ph { border-radius: 10px; }
.fg-tapsay-moments { display: flex; flex-wrap: wrap; gap: 8px; }
.fg-moment-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #E8E3D8;
  background: #22232A;
  border: 1.5px solid #35322A;
  border-radius: 999px;
  padding: 7px 15px;
  cursor: pointer;
}
.fg-moment-btn.is-active { background: #F2A65A; color: #1B1C22; border-color: #F2A65A; }
.fg-tapsay-starter {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 15px;
  color: #F2A65A;
  margin: 0;
}
.fg-hatches { display: flex; gap: 8px; margin-top: 4px; }
.fg-hatch {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #7A7666;
  background: #22232A;
  padding: 4px 10px;
  border-radius: 999px;
}

/* ── Your Turn / Push It ── */
.fg-prompt {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #F4EFE6;
  margin: 0;
}
.fg-guiderail { margin: 0; padding: 0 0 0 20px; display: flex; flex-direction: column; gap: 8px; }
.fg-guiderail li {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #C7C2B6;
}
.fg-model-frame {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 15px;
  color: #C9A876;
}

/* ── Notes toggle -- anchored to the deck itself (not the scrolling slide
   content) so its expanding panel never fights the slide's own layout. ── */
.fg-notes { position: absolute; right: 34px; bottom: 70px; z-index: 5; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.fg-notes-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #7A7666;
  background: #1B1C22;
  border: 1px solid #35322A;
  border-radius: 999px;
  padding: 5px 12px;
  cursor: pointer;
}
.fg-notes-panel {
  width: 260px;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  color: #A8A296;
  background: #22232A;
  border-left: 3px solid #F2A65A;
  border-radius: 6px;
  padding: 10px 12px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
}

/* ── Self-Check ── */
.fg-candoline {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
  color: #E8E3D8;
  margin: 0;
}
.fg-scorecard { display: flex; flex-direction: column; gap: 5px; }
.fg-score-row {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #22232A;
  border-radius: 8px;
  padding: 6px 14px;
}
.fg-score-row--total { background: rgba(242,166,90,0.12); }
.fg-score-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #C7C2B6;
  flex: 1;
}
.fg-score-input {
  width: 46px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #F4EFE6;
  background: #16171C;
  border: 1px solid #35322A;
  border-radius: 6px;
  padding: 4px 6px;
  text-align: center;
}
.fg-score-total {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #F2A65A;
}
.fg-score-max { font-family: 'Inter', sans-serif; font-size: 12.5px; color: #7A7666; }
.fg-score-tag {
  align-self: flex-start;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #7A7666;
  background: #22232A;
  padding: 3px 10px;
  border-radius: 999px;
}

/* ── Homework ── */
.fg-homework-list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
.fg-homework-list li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: #22232A;
  border-radius: 10px;
  padding: 10px 14px;
}
.fg-homework-label {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #F2A65A;
}
.fg-homework-detail {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: #C7C2B6;
}

/* ── Nav row ── */
.fg-nav-row { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; padding-top: 14px; border-top: 1px solid #2E2B24; }
.fg-nav-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #E8E3D8;
  background: #22232A;
  border: 1px solid #35322A;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.fg-nav-btn--primary { background: #F2A65A; color: #1B1C22; border-color: #F2A65A; }
.fg-nav-btn:disabled { opacity: 0.35; cursor: default; }
.fg-nav-dots { display: flex; gap: 5px; }
.fg-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #35322A; }
.fg-nav-dot.is-active { width: 16px; background: #F2A65A; }

@media (max-width: 720px) {
  .fg-deck { padding: 18px 20px 20px; height: auto; min-height: 560px; }
  .fg-wordrow { grid-template-columns: 1fr; text-align: left; }
}
`;

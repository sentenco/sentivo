import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import { getLesson } from "./forgeTracks";

const SLIDE_TYPES = ["cover", "warmup", "wordload", "spotlight", "gallery", "yourturn", "pushit", "scorecard", "homework"];
const SLIDE_LABELS = {
  cover: "Cover",
  warmup: "Warm-up",
  wordload: "Word Load",
  spotlight: "Spotlight",
  gallery: "Picture Bank",
  yourturn: "Your Turn",
  pushit: "Push It",
  scorecard: "Scorecard",
  homework: "Homework",
};
const NO_POSTIT = ["cover", "wordload", "gallery", "scorecard", "homework"];

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

function PostIt({ words }) {
  return (
    <div className="fg-postit">
      <span className="fg-postit-label">Words</span>
      <div className="fg-postit-list">
        {words.map((w) => (
          <span key={w.word} className="fg-postit-word">{w.word}</span>
        ))}
      </div>
    </div>
  );
}

function WordZoomModal({ word, onClose }) {
  if (!word) return null;
  return (
    <div className="fg-zoom-backdrop" onClick={onClose}>
      <div className="fg-zoom-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="fg-zoom-close" onClick={onClose} aria-label="Close">✕</button>
        <span className="fg-zoom-word">{word.word}</span>
        <span className="fg-zoom-meaning">{word.meaning}</span>
        <p className="fg-zoom-example">“{word.example}”</p>
      </div>
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
      <div className="fg-chips">
        {lesson.words.map((w) => (
          <span key={w.word} className="fg-chip">{w.word}</span>
        ))}
      </div>
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
  const [zoomed, setZoomed] = useState(null);
  const zoomedWord = lesson.words.find((w) => w.word === zoomed);
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Word Load</h2>
      <p className="fg-move-line">Tap a word to zoom in.</p>
      <div className="fg-wordgrid">
        {lesson.words.map((w) => (
          <button type="button" key={w.word} className="fg-wordtoken" onClick={() => setZoomed(w.word)}>
            {w.word}
          </button>
        ))}
      </div>
      <WordZoomModal word={zoomedWord} onClose={() => setZoomed(null)} />
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
          <ImagePlaceholder note={lesson.spotlight.demoImageNote} />
        </div>
        <p className="fg-spotlight-example">“{lesson.spotlight.example}”</p>
      </div>
    </div>
  );
}

function GallerySlide({ lesson }) {
  const [practiced, setPracticed] = useState([]);
  function toggle(word) {
    setPracticed((prev) => (prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]));
  }
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">Picture Bank</h2>
      <p className="fg-move-line">{lesson.tapAndSay.instruction}</p>
      <div className="fg-gallery">
        {lesson.words.map((w) => (
          <button
            type="button"
            key={w.word}
            className={`fg-gallery-card ${practiced.includes(w.word) ? "is-practiced" : ""}`}
            onClick={() => toggle(w.word)}
          >
            {practiced.includes(w.word) && <span className="fg-gallery-check">✓</span>}
            <div className="fg-gallery-img">
              <ImagePlaceholder note={w.imageNote} compact />
            </div>
            <span className="fg-gallery-word">{w.word}</span>
            <span className="fg-gallery-starter">“{w.starter}”</span>
          </button>
        ))}
      </div>
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

function downloadScorecard(lesson, scores, total) {
  const lines = [
    `FORGE ${lesson.code} · ${lesson.title}`,
    `Technique: ${lesson.technique}`,
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
  a.download = `forge-${lesson.id}-scorecard.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function ScorecardSlide({ lesson }) {
  const [scores, setScores] = useState(() =>
    Object.fromEntries(lesson.scorecard.rows.map((row) => [row.label, ""]))
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
    <div className="fg-slide fg-slide--scorecard">
      <div className="fg-sheet">
        <div className="fg-sheet-head">
          <span className="fg-sheet-title">Scorecard</span>
          <span className="fg-sheet-tag">{lesson.scorecard.scoreTag}</span>
        </div>
        <p className="fg-candoline">“{lesson.scorecard.canDoLine}”</p>
        <div className="fg-sheet-rows">
          {lesson.scorecard.rows.map((row, i) => (
            <div key={row.label} className={`fg-score-row ${i % 2 === 1 ? "is-alt" : ""}`}>
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
            <span className="fg-score-max">/ {lesson.scorecard.totalMax}</span>
          </div>
        </div>
        <button type="button" className="fg-download-btn" onClick={() => downloadScorecard(lesson, scores, total)}>
          ⬇ Download result
        </button>
      </div>
    </div>
  );
}

function HomeworkSlide({ lesson }) {
  const [zoomed, setZoomed] = useState(null);
  const zoomedWord = lesson.words.find((w) => w.word === zoomed);
  return (
    <div className="fg-slide">
      <h2 className="fg-heading">{lesson.homework.heading}</h2>
      <p className="fg-move-line">Tap a highlighted word for its meaning and an example.</p>
      <p className="fg-passage">
        {lesson.homework.passage.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <button type="button" key={i} className="fg-passage-word" onClick={() => setZoomed(part.word)}>
              {part.text}
            </button>
          )
        )}
      </p>
      <WordZoomModal word={zoomedWord} onClose={() => setZoomed(null)} />
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
    case "gallery":
      return <GallerySlide lesson={lesson} />;
    case "yourturn":
      return <YourTurnSlide lesson={lesson} />;
    case "pushit":
      return <PushItSlide lesson={lesson} />;
    case "scorecard":
      return <ScorecardSlide lesson={lesson} />;
    case "homework":
      return <HomeworkSlide lesson={lesson} />;
    default:
      return null;
  }
}

export default function Forge() {
  const navigate = useNavigate();
  const { trackId, lessonNum } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div className="fg-shell">
        <style>{CSS}</style>
        <header className="fg-topbar">
          <button type="button" className="fg-back-link" onClick={() => navigate(`/library/forge/${trackId}`)}>
            ← Lessons
          </button>
        </header>
        <div className="fg-stage">
          <p className="fg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slideType = SLIDE_TYPES[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === SLIDE_TYPES.length - 1;

  return (
    <div className="fg-shell">
      <style>{CSS}</style>
      <header className="fg-topbar">
        <button type="button" className="fg-back-link" onClick={() => navigate(`/library/forge/${trackId}`)}>
          ← Lessons
        </button>
        <span className="fg-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="fg-topbar-slot" />
      </header>

      <div className="fg-stage">
        <div className="fg-deck">
          <TopStrip lesson={lesson} slideType={slideType} />
          {!NO_POSTIT.includes(slideType) && <PostIt words={lesson.words} />}
          <div className="fg-deck-body" key={slideIdx}>
            {renderSlide(slideType, lesson)}
          </div>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.fg-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF6E6 0%, #FBE7C6 50%, #F6D9AC 100%);
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
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.fg-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2E2617;
  text-align: center;
  flex: 1;
}
.fg-topbar-slot { width: 90px; }

.fg-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8B7F68;
  text-align: center;
  margin-top: 60px;
}

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
  height: 580px;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 16px;
  box-shadow: 0 24px 60px rgba(43,35,20,0.14);
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
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #C97A2E;
  padding-bottom: 12px;
  border-bottom: 1px solid #EDDFC3;
  margin-bottom: 16px;
}
.fg-strip-dot { color: #C2B393; }
.fg-strip-tag {
  background: rgba(242,166,90,0.16);
  color: #C97A2E;
  padding: 2px 9px;
  border-radius: 999px;
  font-size: 11px;
}
.fg-strip-label { margin-left: auto; color: #B0A48C; }

/* ── Post-it word reference ── */
.fg-postit {
  position: absolute;
  top: 76px;
  right: 34px;
  z-index: 4;
  width: 148px;
  background: #FFF3B0;
  border-radius: 4px 4px 10px 4px;
  padding: 10px 12px 12px;
  box-shadow: 0 10px 20px rgba(43,35,20,0.16);
  transform: rotate(3deg);
}
.fg-postit-label {
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #8A7B2E;
  margin-bottom: 6px;
}
.fg-postit-list { display: flex; flex-wrap: wrap; gap: 5px; }
.fg-postit-word {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #5C4E12;
  background: rgba(255,255,255,0.5);
  border-radius: 999px;
  padding: 3px 8px;
}

.fg-deck-body { flex: 1; min-height: 0; overflow-y: auto; }
.fg-slide { display: flex; flex-direction: column; gap: 13px; height: 100%; }
.fg-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #2E2617;
  margin: 0;
}
.fg-optional { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 16px; color: #B0A48C; }

/* ── Cover ── */
.fg-slide--cover {
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 18px;
}
.fg-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C97A2E;
}
.fg-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #2E2617;
  margin: 0;
}
.fg-cover-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #6B5F49;
  margin: 0;
}
.fg-cover-technique {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #C97A2E;
  margin-top: 4px;
}

/* ── Word chips (cover only) ── */
.fg-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.fg-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #C97A2E;
  background: rgba(242,166,90,0.12);
  border: 1.5px solid rgba(242,166,90,0.4);
  border-radius: 999px;
  padding: 6px 14px;
}

/* ── Warm-up ── */
.fg-qlist { margin: 0; padding: 0 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.fg-qlist li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  color: #3A311F;
}
.fg-timer { font-family: 'Quicksand', sans-serif; font-size: 14px; color: #8B7F68; margin-top: auto; }

/* ── Word Load ── */
.fg-move-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #C97A2E;
  margin: 0;
}
.fg-wordgrid { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 8px; }
.fg-wordtoken {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #2E2617;
  background: #FBF1DF;
  border: 2px solid #EDDFC3;
  border-radius: 14px;
  padding: 18px 28px;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.fg-wordtoken:hover { border-color: #F2A65A; transform: translateY(-2px); }

.fg-zoom-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(43,35,20,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}
.fg-zoom-card {
  position: relative;
  width: 360px;
  max-width: 88vw;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 36px 30px 30px;
  text-align: center;
  box-shadow: 0 30px 70px rgba(43,35,20,0.35);
}
.fg-zoom-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: #FBF1DF;
  color: #8B7F68;
  font-size: 13px;
  cursor: pointer;
}
.fg-zoom-word {
  display: block;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #2E2617;
  margin-bottom: 8px;
}
.fg-zoom-meaning {
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #C97A2E;
  margin-bottom: 14px;
}
.fg-zoom-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
  color: #4A3F2C;
  margin: 0;
}

/* ── Spotlight ── */
.fg-spotlight-body { display: flex; align-items: center; gap: 20px; }
.fg-spotlight-img { width: 320px; height: 220px; flex-shrink: 0; }
.fg-spotlight-img .img-ph { border-radius: 12px; }
.fg-spotlight-example {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  font-style: italic;
  color: #3A311F;
}

/* ── Picture Bank (gallery) ── */
.fg-gallery { display: flex; flex-wrap: wrap; gap: 12px; }
.fg-gallery-card {
  position: relative;
  flex: 1 1 28%;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #FBF1DF;
  border: 2px solid #EDDFC3;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: border-color 0.15s ease;
}
.fg-gallery-card:hover { border-color: #F2A65A; }
.fg-gallery-card.is-practiced { border-color: #F2A65A; background: rgba(242,166,90,0.10); }
.fg-gallery-img { width: 100%; height: 110px; }
.fg-gallery-img .img-ph { border-radius: 8px; }
.fg-gallery-word {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15.5px;
  color: #C97A2E;
}
.fg-gallery-starter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #4A3F2C;
}
.fg-gallery-check {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: #F2A65A;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}
.fg-hatches { display: flex; gap: 8px; margin-top: 4px; }
.fg-hatch {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #8B7F68;
  background: #FBF1DF;
  padding: 4px 10px;
  border-radius: 999px;
}

/* ── Your Turn / Push It ── */
.fg-prompt {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #2E2617;
  margin: 0;
}
.fg-guiderail { margin: 0; padding: 0 0 0 20px; display: flex; flex-direction: column; gap: 8px; }
.fg-guiderail li {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A3F2C;
}
.fg-model-frame {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
  color: #C97A2E;
}

/* ── Notes toggle -- anchored to the deck itself (not the scrolling slide
   content) so its expanding panel never fights the slide's own layout. ── */
.fg-notes { position: absolute; right: 34px; bottom: 70px; z-index: 5; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.fg-notes-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #8B7F68;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 999px;
  padding: 5px 12px;
  cursor: pointer;
}
.fg-notes-panel {
  width: 260px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: #4A3F2C;
  background: #FBF1DF;
  border-left: 3px solid #F2A65A;
  border-radius: 6px;
  padding: 10px 12px;
  box-shadow: 0 12px 30px rgba(43,35,20,0.2);
}

/* ── Scorecard ── */
.fg-slide--scorecard { align-items: center; justify-content: flex-start; }
.fg-sheet {
  width: 100%;
  max-width: 420px;
  background: #FBF1DF;
  border: 1px solid #EDDFC3;
  border-radius: 16px;
  padding: 20px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fg-sheet-head { display: flex; align-items: center; justify-content: space-between; }
.fg-sheet-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #2E2617;
}
.fg-sheet-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C97A2E;
  background: rgba(242,166,90,0.16);
  padding: 4px 11px;
  border-radius: 999px;
}
.fg-candoline {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 14.5px;
  color: #4A3F2C;
  margin: 0;
}
.fg-sheet-rows { display: flex; flex-direction: column; gap: 4px; }
.fg-score-row {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  padding: 8px 12px;
}
.fg-score-row.is-alt { background: rgba(233,217,184,0.5); }
.fg-score-row--total { background: rgba(242,166,90,0.16); margin-top: 4px; }
.fg-score-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #3A311F;
  flex: 1;
}
.fg-score-input {
  width: 48px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #2E2617;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 6px;
  padding: 4px 6px;
  text-align: center;
}
.fg-score-total {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #C97A2E;
}
.fg-score-max { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #8B7F68; }
.fg-download-btn {
  align-self: center;
  margin-top: 6px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
}

/* ── Homework ── */
.fg-passage {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.7;
  color: #3A311F;
  margin: 0;
}
.fg-passage-word {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #C97A2E;
  background: rgba(242,166,90,0.16);
  border: none;
  border-radius: 5px;
  padding: 1px 5px;
  cursor: pointer;
}

/* ── Nav row ── */
.fg-nav-row { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; padding-top: 14px; border-top: 1px solid #EDDFC3; }
.fg-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3A311F;
  background: #FBF1DF;
  border: 1px solid #EAD9B8;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.fg-nav-btn--primary { background: #F2A65A; color: #2E2617; border-color: #F2A65A; }
.fg-nav-btn:disabled { opacity: 0.35; cursor: default; }
.fg-nav-dots { display: flex; gap: 5px; }
.fg-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #EAD9B8; }
.fg-nav-dot.is-active { width: 16px; background: #F2A65A; }

@media (max-width: 720px) {
  .fg-deck { padding: 18px 20px 20px; height: auto; min-height: 580px; }
  .fg-postit { display: none; }
}
`;

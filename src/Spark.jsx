import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./sparkTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";

const QUESTION_SLIDES = [
  { kind: "question", prompt: "What's your name?", starter: "My name is ___.", timing: "30 sec" },
  { kind: "question", prompt: "How old are you?", starter: "I am ___ years old.", timing: "30 sec" },
  { kind: "question", prompt: "What do you like to do for fun?", starter: "I like to ___.", timing: "30 sec" },
];

function CoverSlide({ lesson }) {
  return (
    <div className="spk-slide spk-slide--cover">
      <h1 className="spk-cover-title">{lesson.title}</h1>
      <span className="spk-cover-kicker">Trial Class</span>
      <span className="spk-cover-length">20 minutes</span>
    </div>
  );
}

function QuestionSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="spk-slide spk-slide--question">
      <h2 className="spk-question-prompt">{slide.prompt}</h2>
      {revealed ? (
        <span className="spk-guide-pill">{slide.starter}</span>
      ) : (
        <button type="button" className="spk-reveal-btn" onClick={() => setRevealed(true)}>
          Show sentence starter
        </button>
      )}
    </div>
  );
}

function RegularSlide({ slide }) {
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      {slide.requiredImage && (
        <div className="spk-image-wrap">
          <ImagePlaceholder note={slide.requiredImage} compact />
        </div>
      )}
      <div className="spk-guide-block">
        <span className="spk-guide-label">Kid Guide</span>
        <div className="spk-guide-list">
          {slide.kidGuide.map((line, i) => (
            <span key={i} className="spk-guide-pill">{line}</span>
          ))}
        </div>
      </div>
      {slide.promptOptions && slide.promptOptions.length > 0 && (
        <div className="spk-prompt-chips">
          {slide.promptOptions.map((p, i) => (
            <span key={i} className="spk-prompt-chip">{p}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function FlipCardsSlide({ slide }) {
  const [flipped, setFlipped] = useState(() => slide.cards.map(() => false));
  const [zoomed, setZoomed] = useState(null);

  function flip(i) {
    if (flipped[i]) return;
    setFlipped((f) => f.map((v, idx) => (idx === i ? true : v)));
  }

  return (
    <div className="spk-slide spk-slide--flip">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-flip-layout">
        <div className="spk-flip-cards">
          {slide.cards.map((c, i) => (
            <div
              key={i}
              className={`spk-flip-card ${flipped[i] ? "is-flipped" : ""}`}
              onClick={() => flip(i)}
              role="button"
              tabIndex={0}
            >
              <div className="spk-flip-card-inner">
                <div className="spk-flip-face spk-flip-face--front">{c.number}</div>
                <div className="spk-flip-face spk-flip-face--back">
                  <span className="spk-flip-emoji">{c.emoji}</span>
                  <span className="spk-flip-label">{c.label}</span>
                  <button
                    type="button"
                    className="spk-flip-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomed(i);
                    }}
                  >
                    🔍
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="spk-flip-starters">
          {slide.starters.map((s, i) => (
            <span key={i} className="spk-guide-pill">{s}</span>
          ))}
        </div>
      </div>
      {zoomed !== null && (
        <div className="spk-zoom-overlay" onClick={() => setZoomed(null)}>
          <div className="spk-zoom-card" onClick={(e) => e.stopPropagation()}>
            <span className="spk-zoom-emoji">{slide.cards[zoomed].emoji}</span>
            <span className="spk-zoom-label">{slide.cards[zoomed].label}</span>
            <button type="button" className="spk-reveal-btn" onClick={() => setZoomed(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SortSlide({ slide }) {
  const [placement, setPlacement] = useState({});

  function onDrop(e, box) {
    e.preventDefault();
    const idx = Number(e.dataTransfer.getData("text/plain"));
    setPlacement((p) => {
      const next = { ...p };
      if (box === "bank") delete next[idx];
      else next[idx] = box;
      return next;
    });
  }
  function onDragStart(e, idx) {
    e.dataTransfer.setData("text/plain", String(idx));
  }

  const allIdx = slide.items.map((_, i) => i);
  const bankIdx = allIdx.filter((i) => !placement[i]);
  const likeIdx = allIdx.filter((i) => placement[i] === "like");
  const dislikeIdx = allIdx.filter((i) => placement[i] === "dislike");

  function Chip({ i }) {
    return (
      <div className="spk-sort-chip" draggable onDragStart={(e) => onDragStart(e, i)}>
        <span className="spk-flip-emoji">{slide.items[i].emoji}</span>
      </div>
    );
  }

  return (
    <div className="spk-slide spk-slide--sort">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <span className="spk-guide-pill">{slide.idStarter}</span>
      <div
        className="spk-sort-bank"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e, "bank")}
      >
        {bankIdx.map((i) => <Chip key={i} i={i} />)}
      </div>
      <div className="spk-sort-boxes">
        <div className="spk-sort-box" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, "like")}>
          <span className="spk-sort-box-label">I Like</span>
          <div className="spk-sort-box-items">
            {likeIdx.map((i) => <Chip key={i} i={i} />)}
          </div>
          <span className="spk-sort-box-starter">{slide.likeStarter}</span>
        </div>
        <div className="spk-sort-box" onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, "dislike")}>
          <span className="spk-sort-box-label">I Don't Like</span>
          <div className="spk-sort-box-items">
            {dislikeIdx.map((i) => <Chip key={i} i={i} />)}
          </div>
          <span className="spk-sort-box-starter">{slide.dislikeStarter}</span>
        </div>
      </div>
    </div>
  );
}

function MysterySlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-mystery-box">
        {revealed ? (
          <>
            <span className="spk-flip-emoji">{slide.emoji}</span>
            <span className="spk-flip-label">{slide.label}</span>
          </>
        ) : (
          <span className="spk-mystery-question">?</span>
        )}
      </div>
      {!revealed && (
        <button type="button" className="spk-reveal-btn" onClick={() => setRevealed(true)}>
          Reveal
        </button>
      )}
      <span className="spk-guide-pill">{slide.starter}</span>
    </div>
  );
}

function FindShowSlide({ slide }) {
  const [starred, setStarred] = useState(false);
  return (
    <div className="spk-slide">
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-prompt-chips">
        {slide.prompts.map((p, i) => (
          <span key={i} className="spk-prompt-chip">{p}</span>
        ))}
      </div>
      <span className="spk-guide-pill">{slide.starter}</span>
      <button type="button" className={`spk-star-btn ${starred ? "is-starred" : ""}`} onClick={() => setStarred((s) => !s)}>
        {starred ? "⭐ Great job!" : "☆ Give a star"}
      </button>
    </div>
  );
}

function FeedbackSlide({ slide }) {
  return (
    <div className="spk-slide spk-slide--feedback">
      <span className="spk-trophy">{slide.emoji || "🏆"}</span>
      <div className="spk-child-lines">
        {slide.childText.map((line, i) => (
          <p key={i} className="spk-child-line">{line}</p>
        ))}
      </div>
      {slide.feedback && (
        <div className="spk-parent-card">
          <span className="spk-parent-kicker">For Parents</span>
          <div className="spk-parent-row">
            <span className="spk-parent-label">Strength</span>
            <p className="spk-parent-text">{slide.feedback.strength}</p>
          </div>
          <div className="spk-parent-row">
            <span className="spk-parent-label">Target</span>
            <p className="spk-parent-text">{slide.feedback.target}</p>
          </div>
          <div className="spk-parent-row">
            <span className="spk-parent-label">Recommended path</span>
            <p className="spk-parent-text">{slide.feedback.recommendedPath}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function renderSlide(slide, lesson) {
  switch (slide.kind) {
    case "cover": return <CoverSlide lesson={lesson} />;
    case "question": return <QuestionSlide slide={slide} />;
    case "flipcards": return <FlipCardsSlide slide={slide} />;
    case "sort": return <SortSlide slide={slide} />;
    case "mystery": return <MysterySlide slide={slide} />;
    case "findshow": return <FindShowSlide slide={slide} />;
    case "feedback": return <FeedbackSlide slide={slide} />;
    default: return <RegularSlide slide={slide} />;
  }
}

export default function Spark() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spk-shell">
        <style>{CSS}</style>
        <header className="spk-topbar">
          <button type="button" className="spk-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spk-stage">
          <p className="spk-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = [{ kind: "cover" }, ...QUESTION_SLIDES, ...lesson.slides];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spk-shell">
      <style>{CSS}</style>
      <header className="spk-topbar">
        <button type="button" className="spk-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spk-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="spk-topbar-slot" />
      </header>

      <div className="spk-stage">
        <div className="spk-deck">
          <div className="spk-deck-body" key={slideIdx}>
            {renderSlide(slide, lesson)}
          </div>
          <div className="spk-nav-row">
            <button type="button" className="spk-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="spk-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spk-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spk-nav-btn spk-nav-btn--primary"
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

.spk-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFFBEA 0%, #FFF0BE 55%, #FFE28A 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spk-shell * { box-sizing: border-box; }

.spk-topbar {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 0;
  flex-shrink: 0;
}
.spk-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A3B12;
  background: #FFDD7A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.spk-topbar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A3B12;
  text-align: center;
  flex: 1;
}
.spk-topbar-slot { width: 110px; }

.spk-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spk-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px 24px;
  min-height: 0;
}

.spk-deck {
  position: relative;
  width: 1080px;
  max-width: 100%;
  height: 100%;
  max-height: 620px;
  background: #FFFFFF;
  border: 1px solid #FFE28A;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(180,140,0,0.16);
  display: flex;
  flex-direction: column;
  padding: 26px 48px;
}

.spk-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; }

.spk-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 18px;
  width: 100%;
  margin: auto;
}

.spk-slide-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #4A3B12;
  margin: 0;
}

.spk-image-wrap { width: 100%; max-width: 460px; aspect-ratio: 16/9; }

.spk-guide-block { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.spk-guide-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C98A00;
}
.spk-guide-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 760px; }
.spk-guide-pill {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: 10px 22px;
}

.spk-prompt-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 640px; }
.spk-prompt-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #C98A00;
  background: #FFF9E5;
  border: 1px solid #FFE28A;
  border-radius: 999px;
  padding: 5px 12px;
}

/* Cover */
.spk-slide--cover { gap: 12px; }
.spk-cover-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 54px; color: #4A3B12; margin: 0; }
.spk-cover-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #C98A00;
}
.spk-cover-length { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #8A7233; }

/* Question */
.spk-slide--question { gap: 24px; }
.spk-question-prompt { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 38px; color: #4A3B12; margin: 0; max-width: 780px; }
.spk-reveal-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FF4FA3;
  background: #FFF0F7;
  border: 2px dashed #FFB8DA;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}

/* Flip cards */
.spk-flip-layout { display: flex; flex-direction: row; align-items: center; gap: 32px; width: 100%; justify-content: center; }
.spk-flip-cards { display: flex; flex-wrap: wrap; gap: 12px; max-width: 420px; justify-content: center; }
.spk-flip-card { width: 88px; height: 108px; cursor: pointer; perspective: 900px; }
.spk-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.spk-flip-card.is-flipped .spk-flip-card-inner { transform: rotateY(180deg); }
.spk-flip-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.spk-flip-face--front {
  background: #FFB800;
  border: 2px solid #E09E00;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #FFFFFF;
}
.spk-flip-face--back {
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  transform: rotateY(180deg);
  position: relative;
}
.spk-flip-emoji { font-size: 30px; line-height: 1; }
.spk-flip-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; color: #8A7233; text-transform: capitalize; }
.spk-flip-zoom-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #FFDD7A;
  background: #FFFFFF;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.spk-flip-starters { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; }

.spk-zoom-overlay {
  position: absolute;
  inset: 0;
  background: rgba(74,59,18,0.45);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.spk-zoom-card {
  background: #FFFFFF;
  border: 3px solid #FFDD7A;
  border-radius: 20px;
  padding: 28px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.spk-zoom-emoji { font-size: 84px; line-height: 1; }
.spk-zoom-label { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: #4A3B12; text-transform: capitalize; }

/* Sort */
.spk-slide--sort { gap: 14px; }
.spk-sort-bank {
  min-height: 66px;
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 10px;
  border: 2px dashed #FFDD7A;
  border-radius: 14px;
  padding: 10px;
}
.spk-sort-chip {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}
.spk-sort-boxes { display: flex; gap: 20px; width: 100%; max-width: 640px; justify-content: center; }
.spk-sort-box {
  flex: 1;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #FFF9E5;
  border: 2px solid #FFE28A;
  border-radius: 14px;
  padding: 12px;
}
.spk-sort-box-label { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #4A3B12; }
.spk-sort-box-items { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; min-height: 52px; }
.spk-sort-box-starter { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #C98A00; }

/* Mystery */
.spk-mystery-box {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: #FFF3D0;
  border: 3px dashed #FFDD7A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.spk-mystery-question { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 56px; color: #FFB800; }

/* Find and show */
.spk-star-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #C98A00;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: 10px 22px;
  cursor: pointer;
}
.spk-star-btn.is-starred { background: #FFB800; color: #FFFFFF; border-color: #E09E00; }

/* Feedback slide */
.spk-slide--feedback { gap: 14px; }
.spk-trophy { font-size: 44px; }
.spk-child-lines { display: flex; flex-direction: column; gap: 4px; }
.spk-child-line {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 26px;
  color: #4A3B12;
  margin: 0;
}
.spk-parent-card {
  width: 100%;
  max-width: 640px;
  background: #FFF9E5;
  border: 1px solid #FFE28A;
  border-radius: 16px;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}
.spk-parent-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #FF4FA3;
  align-self: center;
}
.spk-parent-row { display: flex; flex-direction: column; gap: 2px; }
.spk-parent-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #C98A00;
}
.spk-parent-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #4A3B12;
  margin: 0;
}

/* Nav */
.spk-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #FFF3D0; flex-shrink: 0; }
.spk-nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 1px solid #FFDD7A;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.spk-nav-btn--primary { background: #FFB800; color: #4A3B12; border-color: #FFB800; }
.spk-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spk-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.spk-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #FFE28A; }
.spk-nav-dot.is-active { width: 16px; background: #FFB800; }
`;

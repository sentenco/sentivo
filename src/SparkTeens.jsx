import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./sparkTeensTracks";

function StemRow({ stems }) {
  if (!stems || stems.length === 0) return null;
  return (
    <div className="spkt-stems">
      {stems.map((s, i) => (
        <span key={i} className="spkt-stem-pill">{s}</span>
      ))}
    </div>
  );
}

const INTRO_SLIDE = {
  title: "Before We Start",
  timing: "1 min",
  purpose: "Get to know the student and set expectations before the lesson begins",
  miniGameType: "Quick Q&A",
  cardTitle: "Quick Questions",
  questions: [
    "What's your name?",
    "How old are you?",
    "Do you want me to correct you while you speak, or after you finish?",
  ],
  sentenceStems: ["My name is ___.", "I'm ___ years old.", "Correct me ___."],
  teacherScript: [
    "Hi! Before we start, a few quick things.",
    "What's your name?",
    "How old are you?",
    "Do you want me to correct you while you're speaking, or wait until you finish?",
  ],
  likelyAnswers: ["My name is Alex.", "I'm 14.", "Correct me after, please. / It's OK to correct me anytime."],
  followUps: [],
  correctionNotes: [
    "This is about setting expectations, not correcting language here.",
    "Respect whatever the student prefers for the rest of the lesson.",
  ],
  pacingNote: "Keep this light and quick — it's rapport-building, not a test.",
};

function TeenSlide({ slide }) {
  if (slide.isFinal) {
    return (
      <div className="spkt-slide">
        <span className="spkt-badge">{slide.miniGameType}</span>
        <h2 className="spkt-slide-title">{slide.title}</h2>
        <div className="spkt-review-words">
          {slide.reviewWords.map((w, i) => <span key={i} className="spkt-review-chip">{w}</span>)}
        </div>
        <p className="spkt-final-prompt">{slide.finalPrompt}</p>
      </div>
    );
  }

  return (
    <div className="spkt-slide">
      <span className="spkt-badge">{slide.miniGameType}</span>
      <h2 className="spkt-slide-title">{slide.title}</h2>

      {slide.wordCard && (
        <div className="spkt-wordcard">
          <span className="spkt-wordcard-word">{slide.wordCard.word}</span>
          <span className="spkt-wordcard-meaning">{slide.wordCard.meaning}</span>
        </div>
      )}

      {slide.prompt && <p className="spkt-prompt">{slide.prompt}</p>}

      {slide.choices && (
        <div className="spkt-choice-list">
          {slide.choices.map((c, i) => <span key={i} className="spkt-choice-chip">{c}</span>)}
        </div>
      )}

      {slide.questions && (
        <div className="spkt-card">
          <span className="spkt-card-title">{slide.cardTitle}</span>
          <ol className="spkt-question-list">
            {slide.questions.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>
      )}

      {slide.statements && (
        <div className="spkt-tfm">
          {slide.instructions && <p className="spkt-tfm-instructions">{slide.instructions}</p>}
          <div className="spkt-statement-list">
            {slide.statements.map((s, i) => <span key={i} className="spkt-statement-chip">{s}</span>)}
          </div>
        </div>
      )}

      <StemRow stems={slide.sentenceStems} />
    </div>
  );
}

export default function SparkTeens() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spkt-shell">
        <style>{CSS}</style>
        <header className="spkt-topbar">
          <button type="button" className="spkt-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spkt-stage">
          <p className="spkt-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = [INTRO_SLIDE, ...lesson.slides];
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spkt-shell">
      <style>{CSS}</style>
      <header className="spkt-topbar">
        <button type="button" className="spkt-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spkt-topbar-title">{lesson.code} · {lesson.title}</span>
        <span className="spkt-topbar-slot" />
      </header>

      <div className="spkt-stage">
        <div className="spkt-deck">
          <div className="spkt-deck-body" key={slideIdx}>
            <TeenSlide slide={slide} />
          </div>
          <div className="spkt-nav-row">
            <button type="button" className="spkt-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              ← Previous
            </button>
            <div className="spkt-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spkt-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spkt-nav-btn spkt-nav-btn--primary"
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

.spkt-shell {
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFFBEA 0%, #FFF0BE 55%, #FFE28A 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spkt-shell * { box-sizing: border-box; }

.spkt-topbar {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 0;
  flex-shrink: 0;
}
.spkt-back-link {
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
.spkt-topbar-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #4A3B12; text-align: center; flex: 1; }
.spkt-topbar-slot { width: 110px; }

.spkt-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spkt-stage { flex: 1; width: 100%; display: flex; align-items: center; justify-content: center; padding: 16px 24px 24px; min-height: 0; }

.spkt-deck {
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

.spkt-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; }

.spkt-slide { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 16px; width: 100%; margin: auto; }

.spkt-badge {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: 5px 14px;
}
.spkt-slide-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 34px; color: #4A3B12; margin: 0; }

.spkt-wordcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 16px;
  padding: 14px 28px;
}
.spkt-wordcard-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 28px; color: #4A3B12; }
.spkt-wordcard-meaning { font-family: 'Quicksand', sans-serif; font-weight: 500; font-style: italic; font-size: 14px; color: #8A7233; }

.spkt-prompt { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 22px; color: #4A3B12; margin: 0; max-width: 700px; }

.spkt-choice-list { display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 520px; }
.spkt-choice-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #4A3B12;
  background: #FFF3D0;
  border-radius: 10px;
  padding: 9px 16px;
}

.spkt-card { width: 100%; max-width: 560px; background: #FFF3D0; border-radius: 14px; padding: 16px 22px; display: flex; flex-direction: column; gap: 8px; }
.spkt-card-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #C98A00; }
.spkt-question-list { margin: 0; padding-left: 20px; text-align: left; display: flex; flex-direction: column; gap: 6px; }
.spkt-question-list li { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 17px; color: #4A3B12; }

.spkt-tfm { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; }
.spkt-tfm-instructions { font-family: 'Quicksand', sans-serif; font-weight: 600; font-style: italic; font-size: 14px; color: #8A7233; margin: 0; }
.spkt-statement-list { display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 560px; }
.spkt-statement-chip { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 16px; color: #4A3B12; background: #FFF3D0; border-radius: 10px; padding: 9px 16px; }

.spkt-review-words { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
.spkt-review-chip { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: #4A3B12; background: #FFF3D0; border: 2px solid #FFDD7A; border-radius: 999px; padding: 6px 16px; }
.spkt-final-prompt { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 24px; color: #4A3B12; margin: 0; max-width: 700px; }

.spkt-stems { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 700px; }
.spkt-stem-pill {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #FF4FA3;
  background: #FFF0F7;
  border: 1.5px solid #FFD3EA;
  border-radius: 999px;
  padding: 6px 14px;
}

.spkt-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid #FFF3D0; flex-shrink: 0; }
.spkt-nav-btn {
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
.spkt-nav-btn--primary { background: #FFB800; color: #4A3B12; border-color: #FFB800; }
.spkt-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spkt-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 5px; max-width: 400px; }
.spkt-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #FFE28A; }
.spkt-nav-dot.is-active { width: 16px; background: #FFB800; }
`;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./sparkTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";

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
      {slide.sayMore && slide.sayMore.length > 0 && (
        <div className="spk-saymore-block">
          <span className="spk-saymore-label">✨ Say More!</span>
          <div className="spk-saymore-list">
            {slide.sayMore.map((line, i) => (
              <span key={i} className="spk-saymore-line">{line}</span>
            ))}
          </div>
        </div>
      )}
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

function FeedbackSlide({ slide }) {
  return (
    <div className="spk-slide spk-slide--feedback">
      <span className="spk-trophy">🏆</span>
      <h2 className="spk-slide-title">{slide.title}</h2>
      <div className="spk-child-lines">
        {slide.childText.map((line, i) => (
          <p key={i} className="spk-child-line">{line}</p>
        ))}
      </div>
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
    </div>
  );
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

  const slides = lesson.slides;
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
            {slide.isFeedback ? <FeedbackSlide slide={slide} /> : <RegularSlide slide={slide} />}
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
  font-size: 40px;
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
  font-size: 24px;
  color: #4A3B12;
  background: #FFF3D0;
  border: 2px solid #FFDD7A;
  border-radius: 999px;
  padding: 10px 22px;
}

.spk-saymore-block { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.spk-saymore-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #FF4FA3;
}
.spk-saymore-list { display: flex; flex-direction: column; gap: 4px; }
.spk-saymore-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  color: #8A7233;
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

/* Feedback slide */
.spk-slide--feedback { gap: 14px; }
.spk-trophy { font-size: 44px; }
.spk-child-lines { display: flex; flex-direction: column; gap: 4px; }
.spk-child-line {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 24px;
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

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLesson } from "./sparkAdultsTracks";

const WHEEL_COLORS = ["#A8783D", "#C9A063", "#8B6A3F", "#D4B483", "#6E5530"];

function CoverSlide({ lesson, slide }) {
  return (
    <div className="spa-slide spa-slide--cover">
      <span className="spa-cover-series">SPARK Adults</span>
      <h1 className="spa-cover-title">{lesson.code.replace("SPARK Adults ", "Lesson ")}: {slide.title}</h1>
      <span className="spa-cover-length">{lesson.length}</span>
    </div>
  );
}

function ListSlide({ slide }) {
  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-item-list">
        {slide.items.map((item, i) => (
          <span key={i} className="spa-item-chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

function WheelSlide({ slide }) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const options = slide.wheelOptions;
  const wedgeAngle = 360 / options.length;

  const gradient = options
    .map((_, i) => `${WHEEL_COLORS[i % WHEEL_COLORS.length]} ${i * wedgeAngle}deg ${(i + 1) * wedgeAngle}deg`)
    .join(", ");

  function spin() {
    if (spinning) return;
    const idx = Math.floor(Math.random() * options.length);
    const middle = idx * wedgeAngle + wedgeAngle / 2;
    const targetMod = ((360 - middle) % 360 + 360) % 360;
    const base = rotation - (((rotation % 360) + 360) % 360);
    const newRotation = base + 4 * 360 + targetMod;
    setSpinning(true);
    setResult(null);
    setRotation(newRotation);
    setTimeout(() => {
      setSpinning(false);
      setResult(options[idx]);
    }, 3000);
  }

  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-wheel-area">
        <div className="spa-wheel-wrap">
          <span className="spa-wheel-pointer" />
          <div
            className="spa-wheel-disc"
            style={{ transform: `rotate(${rotation}deg)`, background: `conic-gradient(${gradient})` }}
          />
          <button type="button" className="spa-wheel-hub" onClick={spin} disabled={spinning}>
            {spinning ? "…" : "Spin"}
          </button>
        </div>
        <div className="spa-wheel-result">
          {result ? <p className="spa-wheel-result-text">{result}</p> : <p className="spa-wheel-result-placeholder">Spin to get a description.</p>}
        </div>
      </div>
      <div className="spa-item-list spa-item-list--compact">
        {slide.items.map((item, i) => (
          <span key={i} className="spa-item-chip spa-item-chip--muted">{item}</span>
        ))}
      </div>
    </div>
  );
}

function BoardingPassSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);

  function checkIn() {
    const dest = slide.destinations[Math.floor(Math.random() * slide.destinations.length)];
    setSelected(dest);
    setRevealed(true);
  }

  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-bp-perspective">
        <div className={`spa-bp-inner ${revealed ? "is-revealed" : ""}`}>
          <div className="spa-bp-face spa-bp-face--front">
            <span className="spa-bp-kicker">Boarding Pass</span>
            <span className="spa-bp-front-text">Tap to check in</span>
          </div>
          <div className="spa-bp-face spa-bp-face--back">
            <span className="spa-bp-kicker">Boarding Pass</span>
            {selected && (
              <>
                <span className="spa-bp-place">{selected.place}</span>
                <span className="spa-bp-tag">{selected.tag}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button type="button" className="spa-primary-btn" onClick={checkIn}>Check in</button>
    </div>
  );
}

function MenuSlide({ slide }) {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState(null);

  function reveal() {
    const dish = slide.mysteryOptions[Math.floor(Math.random() * slide.mysteryOptions.length)];
    setChosen(dish);
    setRevealed(true);
  }

  return (
    <div className="spa-slide">
      <h2 className="spa-slide-title">{slide.title}</h2>
      <p className="spa-instruction">{slide.instruction}</p>
      <div className="spa-menu-card">
        {slide.dishes.map((d, i) => (
          <div key={i} className="spa-menu-row">{d}</div>
        ))}
        <div className="spa-menu-row spa-menu-row--mystery">
          {slide.revealHere ? (
            revealed ? <span>{chosen}</span> : <button type="button" className="spa-reveal-btn" onClick={reveal}>Reveal mystery dish</button>
          ) : (
            <span className="spa-menu-locked">Mystery dish (hidden)</span>
          )}
        </div>
      </div>
    </div>
  );
}

function FeedbackSlide() {
  return (
    <div className="spa-slide spa-slide--feedback">
      <h1 className="spa-feedback-word">Feedback</h1>
    </div>
  );
}

function renderSlide(slide, lesson) {
  switch (slide.kind) {
    case "cover": return <CoverSlide lesson={lesson} slide={slide} />;
    case "wheel": return <WheelSlide slide={slide} />;
    case "boardingpass": return <BoardingPassSlide slide={slide} />;
    case "menu": return <MenuSlide slide={slide} />;
    case "feedback": return <FeedbackSlide />;
    default: return <ListSlide slide={slide} />;
  }
}

export default function SparkAdults() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [slideIdx, setSlideIdx] = useState(0);
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spa-shell">
        <style>{CSS}</style>
        <header className="spa-topbar">
          <button type="button" className="spa-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spa-stage">
          <p className="spa-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const slides = lesson.slides;
  const slide = slides[slideIdx];
  const isFirst = slideIdx === 0;
  const isLast = slideIdx === slides.length - 1;

  return (
    <div className="spa-shell">
      <style>{CSS}</style>
      <header className="spa-topbar">
        <button type="button" className="spa-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spa-topbar-title">{lesson.code}</span>
        <span className="spa-topbar-slot" />
      </header>

      <div className="spa-stage">
        <div className="spa-deck">
          <div className="spa-deck-body" key={slideIdx}>
            {renderSlide(slide, lesson)}
          </div>
          <div className="spa-nav-row">
            <button type="button" className="spa-nav-btn" onClick={() => setSlideIdx((i) => i - 1)} disabled={isFirst}>
              Previous
            </button>
            <div className="spa-nav-dots">
              {slides.map((_, i) => (
                <span key={i} className={`spa-nav-dot ${i === slideIdx ? "is-active" : ""}`} />
              ))}
            </div>
            <button
              type="button"
              className="spa-nav-btn spa-nav-btn--primary"
              onClick={() => setSlideIdx((i) => i + 1)}
              disabled={isLast}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

.spa-shell {
  width: 100%;
  height: 100vh;
  background: #F7F5F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}
.spa-shell * { box-sizing: border-box; }

.spa-topbar {
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px 0;
  flex-shrink: 0;
}
.spa-back-link {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2A2621;
  background: #EFEAE0;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
}
.spa-topbar-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #8B8171;
}
.spa-topbar-slot { width: 100px; }

.spa-missing { font-family: 'Inter', sans-serif; color: #8B8171; text-align: center; margin-top: 60px; }

.spa-stage { flex: 1; width: 100%; display: flex; align-items: center; justify-content: center; padding: 20px 28px 28px; min-height: 0; }

.spa-deck {
  width: 900px;
  max-width: 100%;
  height: 100%;
  max-height: 600px;
  background: #FFFFFF;
  border: 1px solid #E9E3D6;
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(60,50,30,0.08);
  display: flex;
  flex-direction: column;
  padding: 48px 64px;
}

.spa-deck-body { flex: 1; min-height: 0; overflow-y: auto; display: flex; }

.spa-slide { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 22px; width: 100%; margin: auto; }

.spa-slide-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 30px;
  color: #2A2621;
  margin: 0;
}
.spa-instruction {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #4A4438;
  margin: 0;
}

.spa-item-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 640px; }
.spa-item-list--compact { margin-top: 6px; }
.spa-item-chip {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #2A2621;
  background: #F7F5F0;
  border: 1px solid #E9E3D6;
  border-radius: 6px;
  padding: 8px 16px;
}
.spa-item-chip--muted { font-size: 13px; color: #8B8171; background: transparent; }

/* Cover */
.spa-slide--cover { gap: 16px; }
.spa-cover-series {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #A8783D;
}
.spa-cover-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 40px;
  color: #2A2621;
  margin: 0;
  max-width: 700px;
}
.spa-cover-length {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #8B8171;
}

/* Feedback */
.spa-slide--feedback { gap: 0; }
.spa-feedback-word {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 48px;
  color: #2A2621;
  margin: 0;
}

/* Wheel */
.spa-wheel-area { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.spa-wheel-wrap { position: relative; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; }
.spa-wheel-pointer {
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 14px solid #2A2621;
  z-index: 3;
}
.spa-wheel-disc {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  box-shadow: 0 0 0 1px #E9E3D6, 0 10px 24px rgba(60,50,30,0.15);
  transition: transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99);
}
.spa-wheel-hub {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 2px solid #2A2621;
  color: #2A2621;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  z-index: 2;
}
.spa-wheel-hub:disabled { opacity: 0.6; cursor: default; }
.spa-wheel-result { min-height: 26px; }
.spa-wheel-result-text { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 19px; color: #A8783D; margin: 0; }
.spa-wheel-result-placeholder { font-family: 'Inter', sans-serif; font-size: 13px; color: #8B8171; margin: 0; }

/* Boarding pass */
.spa-bp-perspective { width: 320px; height: 160px; perspective: 1200px; }
.spa-bp-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.spa-bp-inner.is-revealed { transform: rotateY(180deg); }
.spa-bp-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px solid #E9E3D6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
}
.spa-bp-face--front { background: #F7F5F0; }
.spa-bp-face--back { background: #2A2621; transform: rotateY(180deg); }
.spa-bp-kicker {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #A8783D;
}
.spa-bp-front-text { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14px; color: #8B8171; }
.spa-bp-place { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 26px; color: #FFFFFF; }
.spa-bp-tag {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #D4B483;
  border: 1px solid #6E5530;
  border-radius: 999px;
  padding: 3px 12px;
}

.spa-primary-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  background: #2A2621;
  border: none;
  border-radius: 6px;
  padding: 11px 26px;
  cursor: pointer;
}

/* Menu */
.spa-menu-card {
  width: 100%;
  max-width: 380px;
  background: #F7F5F0;
  border: 1px solid #E9E3D6;
  border-radius: 8px;
  padding: 8px 22px;
  display: flex;
  flex-direction: column;
}
.spa-menu-row {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #2A2621;
  padding: 12px 0;
  border-bottom: 1px solid #E9E3D6;
}
.spa-menu-row:last-child { border-bottom: none; }
.spa-menu-row--mystery { display: flex; justify-content: center; }
.spa-menu-locked { font-style: italic; color: #8B8171; }
.spa-reveal-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #A8783D;
  background: transparent;
  border: 1px solid #A8783D;
  border-radius: 999px;
  padding: 6px 16px;
  cursor: pointer;
}

/* Nav */
.spa-nav-row { display: flex; align-items: center; justify-content: space-between; padding-top: 20px; border-top: 1px solid #E9E3D6; flex-shrink: 0; }
.spa-nav-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2A2621;
  background: #F7F5F0;
  border: 1px solid #E9E3D6;
  border-radius: 6px;
  padding: 9px 18px;
  cursor: pointer;
}
.spa-nav-btn--primary { background: #2A2621; color: #FFFFFF; border-color: #2A2621; }
.spa-nav-btn:disabled { opacity: 0.35; cursor: default; }
.spa-nav-dots { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; max-width: 300px; }
.spa-nav-dot { width: 5px; height: 5px; border-radius: 999px; background: #E9E3D6; }
.spa-nav-dot.is-active { width: 16px; border-radius: 999px; background: #A8783D; }
`;

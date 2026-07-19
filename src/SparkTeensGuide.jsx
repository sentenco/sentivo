import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./sparkTeensTracks";

function SlideSection({ num, slide }) {
  const doItems = [
    ...(slide.likelyAnswers ? [`Likely answers: ${slide.likelyAnswers.join(" / ")}`] : []),
    ...(slide.followUps || []).map((f) => `Follow-up: ${f}`),
    ...(slide.correctionNotes || []),
    ...(slide.pacingNote ? [`Pacing: ${slide.pacingNote}`] : []),
  ];

  return (
    <section className="spktg-section">
      <div className="spktg-section-head">
        <span className="spktg-section-num">{num}</span>
        <h2 className="spktg-section-title">{slide.title}</h2>
        {slide.timing && <span className="spktg-timing">⏱ {slide.timing}</span>}
      </div>
      {slide.purpose && <p className="spktg-goal">{slide.purpose} · {slide.miniGameType}</p>}
      {slide.teacherScript && slide.teacherScript.length > 0 && (
        <div className="spktg-block spktg-block--say">
          <span className="spktg-block-label">Say</span>
          <div className="spktg-say-list">
            {slide.teacherScript.map((line, i) => (
              <p key={i} className="spktg-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {doItems.length > 0 && (
        <div className="spktg-block spktg-block--do">
          <span className="spktg-block-label">Do</span>
          <ul className="spktg-do-list">
            {doItems.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </div>
      )}
      {slide.isFinal && (
        <div className="spktg-block spktg-block--do">
          <span className="spktg-block-label">Trial feedback (fill live)</span>
          <ul className="spktg-do-list">
            <li><strong>Strength:</strong> note one thing the student did well.</li>
            <li><strong>Target:</strong> note one speaking target.</li>
            <li><strong>Recommendation:</strong> note the best next lesson path.</li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default function SparkTeensGuide() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spktg-shell">
        <style>{CSS}</style>
        <header className="spktg-topbar">
          <button type="button" className="spktg-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spktg-stage">
          <p className="spktg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="spktg-shell">
      <style>{CSS}</style>
      <header className="spktg-topbar">
        <button type="button" className="spktg-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spktg-topbar-title">Teacher Guide</span>
      </header>

      <div className="spktg-stage">
        <div className="spktg-hero">
          <span className="spktg-hero-kicker">{lesson.code} · {lesson.length}</span>
          <h1 className="spktg-hero-title">{lesson.title}</h1>
          <p className="spktg-hero-blurb">{lesson.coreAim}</p>
          {lesson.targetVocab && lesson.targetVocab.length > 0 && (
            <div className="spktg-vocab">
              <span className="spktg-vocab-label">Target vocabulary</span>
              <ul className="spktg-vocab-list">
                {lesson.targetVocab.map((v, i) => (
                  <li key={i}><strong>{v.word}</strong> — {v.meaning} <em>“{v.model}”</em></li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="spktg-sections">
          {lesson.slides.map((slide, i) => (
            <SlideSection key={i} num={i + 1} slide={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spktg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFDF6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.spktg-shell * { box-sizing: border-box; }

.spktg-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #FFFDF6;
  z-index: 5;
}
.spktg-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #4A3B12;
  background: #FFDD7A;
  border: none;
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.spktg-topbar-title { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C98A00; }

.spktg-stage { width: 100%; max-width: 640px; padding: 20px 24px 60px; }

.spktg-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spktg-hero { padding-bottom: 20px; margin-bottom: 20px; border-bottom: 2px solid #FFF3D0; }
.spktg-hero-kicker { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.4px; text-transform: uppercase; color: #C98A00; }
.spktg-hero-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 30px; color: #4A3B12; margin: 6px 0 6px; }
.spktg-hero-blurb { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 14.5px; color: #8A7233; margin: 0 0 14px; }

.spktg-vocab { display: flex; flex-direction: column; gap: 6px; background: #FFF3D0; border-radius: 10px; padding: 12px 16px; }
.spktg-vocab-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.4px; text-transform: uppercase; color: #C98A00; }
.spktg-vocab-list { margin: 0; padding-left: 16px; display: flex; flex-direction: column; gap: 4px; }
.spktg-vocab-list li { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 13px; color: #4A3B12; }
.spktg-vocab-list em { color: #8A7233; }

.spktg-sections { display: flex; flex-direction: column; gap: 26px; }
.spktg-section { display: flex; flex-direction: column; gap: 10px; }
.spktg-section-head { display: flex; align-items: center; gap: 10px; }
.spktg-section-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #4A3B12;
  background: #FFF3D0;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.spktg-section-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 19px; color: #4A3B12; margin: 0; flex: 1; }
.spktg-timing {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.spktg-goal { font-family: 'Quicksand', sans-serif; font-weight: 500; font-style: italic; font-size: 13.5px; color: #8A7233; margin: 0 0 0 34px; }

.spktg-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.spktg-block-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C98A00;
}
.spktg-block--say .spktg-block-label { color: #FF4FA3; }
.spktg-say-list { display: flex; flex-direction: column; gap: 6px; }
.spktg-say-line {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 1.5;
  color: #4A3B12;
  background: #FFF3D0;
  border-left: 3px solid #FFB800;
  border-radius: 0 8px 8px 0;
  padding: 8px 12px;
  margin: 0;
}
.spktg-do-list { margin: 0; padding: 0 0 0 16px; display: flex; flex-direction: column; gap: 4px; }
.spktg-do-list li { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.45; color: #6B5620; }
`;

import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./sparkAdultsTracks";

function gimmickContent(slide) {
  if (slide.kind === "wheel") return `Wheel wedges: ${slide.wheelOptions.join(" · ")}`;
  if (slide.kind === "boardingpass") return `Destinations: ${slide.destinations.map((d) => `${d.place} (${d.tag})`).join(" · ")}`;
  if (slide.kind === "menu") return `Menu: ${slide.dishes.join(", ")} + Mystery dish (${slide.mysteryOptions.join(" · ")})`;
  return null;
}

function SlideSection({ num, slide }) {
  return (
    <section className="spag-section">
      <div className="spag-section-head">
        <span className="spag-section-num">{num}</span>
        <h2 className="spag-section-title">{slide.title}</h2>
        {slide.timing && <span className="spag-timing">{slide.timing}</span>}
      </div>
      {slide.purpose && <p className="spag-goal">{slide.purpose}</p>}
      {slide.instruction && (
        <div className="spag-block">
          <span className="spag-block-label">On-slide instruction</span>
          <p className="spag-instruction-line">{slide.instruction}</p>
        </div>
      )}
      {gimmickContent(slide) && (
        <div className="spag-block">
          <span className="spag-block-label">Gimmick data</span>
          <p className="spag-note-line">{gimmickContent(slide)}</p>
        </div>
      )}
      {slide.teacherNote && (
        <div className="spag-block">
          <span className="spag-block-label">Teacher note</span>
          <p className="spag-note-line">{slide.teacherNote}</p>
        </div>
      )}
    </section>
  );
}

export default function SparkAdultsGuide() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spag-shell">
        <style>{CSS}</style>
        <header className="spag-topbar">
          <button type="button" className="spag-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spag-stage">
          <p className="spag-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="spag-shell">
      <style>{CSS}</style>
      <header className="spag-topbar">
        <button type="button" className="spag-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spag-topbar-title">Teacher Guide</span>
      </header>

      <div className="spag-stage">
        <div className="spag-hero">
          <span className="spag-hero-kicker">{lesson.code} · {lesson.length} · {lesson.gimmick}</span>
          <h1 className="spag-hero-title">{lesson.title}</h1>
          <p className="spag-hero-blurb">{lesson.coreAim}</p>

          {lesson.followUpBank && lesson.followUpBank.length > 0 && (
            <div className="spag-hooks">
              <span className="spag-hooks-label">Follow-up bank</span>
              <ul className="spag-hooks-list">
                {lesson.followUpBank.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}
          {lesson.lessonLogic && lesson.lessonLogic.length > 0 && (
            <div className="spag-hooks">
              <span className="spag-hooks-label">Lesson logic</span>
              <ul className="spag-hooks-list">
                {lesson.lessonLogic.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="spag-sections">
          {lesson.slides.map((slide, i) => (
            <SlideSection key={i} num={i + 1} slide={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

.spag-shell {
  width: 100%;
  min-height: 100vh;
  background: #FCFBF8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.spag-shell * { box-sizing: border-box; }

.spag-topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px 0;
  position: sticky;
  top: 0;
  background: #FCFBF8;
  z-index: 5;
}
.spag-back-link {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2A2621;
  background: #EFEAE0;
  border: none;
  border-radius: 6px;
  padding: 7px 14px;
  cursor: pointer;
  white-space: nowrap;
}
.spag-topbar-title { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #8B8171; }

.spag-stage { width: 100%; max-width: 640px; padding: 20px 24px 60px; }

.spag-missing { font-family: 'Inter', sans-serif; color: #8B8171; text-align: center; margin-top: 60px; }

.spag-hero { padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid #E9E3D6; display: flex; flex-direction: column; gap: 12px; }
.spag-hero-kicker { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.4px; text-transform: uppercase; color: #A8783D; }
.spag-hero-title { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 28px; color: #2A2621; margin: 0; }
.spag-hero-blurb { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 14.5px; color: #4A4438; margin: 0; line-height: 1.5; }

.spag-hooks { background: #F7F5F0; border-radius: 8px; padding: 12px 16px; }
.spag-hooks-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 0.4px; text-transform: uppercase; color: #A8783D; }
.spag-hooks-list { margin: 6px 0 0; padding-left: 16px; display: flex; flex-direction: column; gap: 3px; }
.spag-hooks-list li { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 13px; color: #2A2621; }

.spag-sections { display: flex; flex-direction: column; gap: 24px; }
.spag-section { display: flex; flex-direction: column; gap: 8px; }
.spag-section-head { display: flex; align-items: center; gap: 10px; }
.spag-section-num {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #2A2621;
  background: #F7F5F0;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.spag-section-title { font-family: 'Source Serif 4', serif; font-weight: 700; font-size: 18px; color: #2A2621; margin: 0; flex: 1; }
.spag-timing { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 11px; color: #A8783D; background: #F7F5F0; border-radius: 999px; padding: 3px 10px; white-space: nowrap; }
.spag-goal { font-family: 'Inter', sans-serif; font-weight: 500; font-style: italic; font-size: 13px; color: #8B8171; margin: 0 0 0 32px; }

.spag-block { margin-left: 32px; display: flex; flex-direction: column; gap: 4px; }
.spag-block-label { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 10.5px; letter-spacing: 0.5px; text-transform: uppercase; color: #A8783D; }
.spag-instruction-line, .spag-note-line { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.5; color: #2A2621; margin: 0; }
`;

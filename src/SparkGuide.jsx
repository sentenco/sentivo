import { useParams, useNavigate } from "react-router-dom";
import { getLesson } from "./sparkTracks";

const QUESTION_SLIDES = [
  {
    title: "What's your name?",
    purpose: "Get-to-know-you — sentence starter is hidden on the student slide; reveal it only if the child can't answer.",
    timing: "30 sec",
    teacherScript: ["What's your name?"],
    supportMoves: ["Hidden starter: \"My name is ___.\" — show only if needed."],
  },
  {
    title: "How old are you?",
    purpose: "Get-to-know-you — sentence starter is hidden on the student slide; reveal it only if the child can't answer.",
    timing: "30 sec",
    teacherScript: ["How old are you?"],
    supportMoves: ["Hidden starter: \"I am ___ years old.\" — show only if needed."],
  },
  {
    title: "What do you like to do for fun?",
    purpose: "Get-to-know-you — sentence starter is hidden on the student slide; reveal it only if the child can't answer.",
    timing: "30 sec",
    teacherScript: ["What do you like to do for fun?"],
    supportMoves: ["Hidden starter: \"I like to ___.\" — show only if needed."],
  },
];

function gimmickContent(slide) {
  if (slide.kind === "flipcards") return `Cards: ${slide.cards.map((c) => `${c.number}. ${c.label}`).join(" · ")} | Starters: ${slide.starters.join(" / ")}`;
  if (slide.kind === "sort") return `Items: ${slide.items.map((i) => i.label).join(", ")} | ${slide.idStarter} / ${slide.likeStarter} / ${slide.dislikeStarter}`;
  if (slide.kind === "mystery") return `Hidden picture: ${slide.label} | Starter: ${slide.starter}`;
  if (slide.kind === "findshow") return `Prompts: ${slide.prompts.join(", ")} | Starter: ${slide.starter}`;
  if (slide.sceneIcons) return `Pictures: ${slide.sceneIcons.join(", ")}`;
  return null;
}

function SlideSection({ num, slide }) {
  const doItems = [...(slide.supportMoves || []), ...(slide.expectedOutput ? [`Expected: ${slide.expectedOutput.join(" / ")}`] : [])];
  const isFeedback = slide.kind === "feedback";
  return (
    <section className="spkg-section">
      <div className="spkg-section-head">
        <span className="spkg-section-num">{num}</span>
        <h2 className="spkg-section-title">{slide.title}</h2>
        {slide.timing && <span className="spkg-timing">⏱ {slide.timing}</span>}
      </div>
      {slide.purpose && <p className="spkg-goal">{slide.purpose}</p>}
      {slide.teacherScript && slide.teacherScript.length > 0 && (
        <div className="spkg-block spkg-block--say">
          <span className="spkg-block-label">Say</span>
          <div className="spkg-say-list">
            {slide.teacherScript.map((line, i) => (
              <p key={i} className="spkg-say-line">“{line}”</p>
            ))}
          </div>
        </div>
      )}
      {gimmickContent(slide) && (
        <div className="spkg-block spkg-block--do">
          <span className="spkg-block-label">On-slide content</span>
          <p className="spkg-say-line" style={{ background: "transparent", borderLeft: "none", padding: 0 }}>{gimmickContent(slide)}</p>
        </div>
      )}
      {doItems.length > 0 && (
        <div className="spkg-block spkg-block--do">
          <span className="spkg-block-label">Do</span>
          <ul className="spkg-do-list">
            {doItems.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
      {isFeedback && slide.feedback && (
        <div className="spkg-block spkg-block--do">
          <span className="spkg-block-label">Parent feedback</span>
          <ul className="spkg-do-list">
            <li><strong>Strength:</strong> {slide.feedback.strength}</li>
            <li><strong>Target:</strong> {slide.feedback.target}</li>
            <li><strong>Recommended path:</strong> {slide.feedback.recommendedPath}</li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default function SparkGuide() {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);

  if (!lesson) {
    return (
      <div className="spkg-shell">
        <style>{CSS}</style>
        <header className="spkg-topbar">
          <button type="button" className="spkg-back-link" onClick={() => navigate("/library/spark")}>
            ← Trial Class
          </button>
        </header>
        <div className="spkg-stage">
          <p className="spkg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="spkg-shell">
      <style>{CSS}</style>
      <header className="spkg-topbar">
        <button type="button" className="spkg-back-link" onClick={() => navigate("/library/spark")}>
          ← Trial Class
        </button>
        <span className="spkg-topbar-title">Teacher Guide</span>
      </header>

      <div className="spkg-stage">
        <div className="spkg-hero">
          <span className="spkg-hero-kicker">{lesson.code} · {lesson.length}</span>
          <h1 className="spkg-hero-title">{lesson.title}</h1>
          <p className="spkg-hero-blurb">{lesson.coreAim}</p>
          {lesson.materials && lesson.materials.length > 0 && (
            <div className="spkg-materials">
              <span className="spkg-materials-label">Materials to prepare</span>
              <ul className="spkg-materials-list">
                {lesson.materials.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div className="spkg-sections">
          {[
            { title: lesson.title, purpose: "Clean opening slide only.", timing: "30 sec" },
            ...QUESTION_SLIDES,
            ...lesson.slides,
          ].map((slide, i) => (
            <SlideSection key={i} num={i + 1} slide={slide} />
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spkg-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFDF6;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.spkg-shell * { box-sizing: border-box; }

.spkg-topbar {
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
.spkg-back-link {
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
.spkg-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98A00;
}

.spkg-stage { width: 100%; max-width: 640px; padding: 20px 24px 60px; }

.spkg-missing { font-family: 'Quicksand', sans-serif; color: #8A7233; text-align: center; margin-top: 60px; }

.spkg-hero { padding-bottom: 20px; margin-bottom: 20px; border-bottom: 2px solid #FFF3D0; }
.spkg-hero-kicker {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #C98A00;
}
.spkg-hero-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 30px; color: #4A3B12; margin: 6px 0 6px; }
.spkg-hero-blurb { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 14.5px; color: #8A7233; margin: 0 0 14px; }

.spkg-materials { display: flex; flex-direction: column; gap: 6px; background: #FFF3D0; border-radius: 10px; padding: 12px 16px; }
.spkg-materials-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #C98A00;
}
.spkg-materials-list { margin: 0; padding-left: 16px; display: flex; flex-direction: column; gap: 3px; }
.spkg-materials-list li { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 13px; color: #4A3B12; }

.spkg-sections { display: flex; flex-direction: column; gap: 26px; }
.spkg-section { display: flex; flex-direction: column; gap: 10px; }
.spkg-section-head { display: flex; align-items: center; gap: 10px; }
.spkg-section-num {
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
.spkg-section-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 19px; color: #4A3B12; margin: 0; flex: 1; }
.spkg-timing {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: 3px 10px;
  white-space: nowrap;
}
.spkg-goal { font-family: 'Quicksand', sans-serif; font-weight: 500; font-style: italic; font-size: 13.5px; color: #8A7233; margin: 0 0 0 34px; }

.spkg-block { margin-left: 34px; display: flex; flex-direction: column; gap: 6px; }
.spkg-block-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #C98A00;
}
.spkg-block--say .spkg-block-label { color: #FF4FA3; }
.spkg-say-list { display: flex; flex-direction: column; gap: 6px; }
.spkg-say-line {
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
.spkg-do-list { margin: 0; padding: 0 0 0 16px; display: flex; flex-direction: column; gap: 4px; }
.spkg-do-list li { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.45; color: #6B5620; }
`;

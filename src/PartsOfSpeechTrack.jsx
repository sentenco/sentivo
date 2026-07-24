import { useNavigate } from "react-router-dom";
import TOPICS from "./posTracks";

// Parts of Speech lessons open as a standalone popup player, matching the
// Verb Tenses / FORGE / ASCEND chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/parts-of-speech/${code}`,
    "sentivoPartsOfSpeech",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function PartsOfSpeechTrack() {
  const navigate = useNavigate();

  return (
    <div className="pos-shell">
      <style>{CSS}</style>
      <header className="pos-topbar">
        <button type="button" className="pos-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="pos-topbar-title">Parts of Speech</span>
        <span className="pos-topbar-slot" />
      </header>

      <div className="pos-stage">
        <div className="pos-hero">
          <h1 className="pos-hero-title">Parts of Speech</h1>
          <p className="pos-hero-blurb">
            The 8 traditional parts of speech, taught across 6 topics — one pair of lessons each: a Lesson to build the
            meaning and use, then an Assessment to check it sticks.
          </p>
        </div>

        <div className="pos-topics-grid">
          {TOPICS.map((topic) => (
            <div key={topic.number} className="pos-topic-card">
              <span className="pos-topic-num">Topic {topic.number}</span>
              <h3 className="pos-topic-name">{topic.topicName}</h3>
              <div className="pos-topic-foot">
                <button type="button" className="pos-lesson-btn pos-lesson-btn--a" onClick={() => openLesson(topic.lessonA.code)}>
                  {topic.lessonA.code} · Lesson
                </button>
                <button type="button" className="pos-lesson-btn pos-lesson-btn--b" onClick={() => openLesson(topic.lessonB.code)}>
                  {topic.lessonB.code} · Assessment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.pos-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #EAF4FF 0%, #D9EAFE 50%, #C7DEFB 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.pos-shell * { box-sizing: border-box; }

.pos-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.pos-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #163A66;
  background: #AFCFF7;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.pos-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6A93C9;
}
.pos-topbar-slot { width: 90px; }

.pos-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 40px 24px 60px;
}

.pos-hero { margin-bottom: 32px; }
.pos-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #163A66;
  margin: 0 0 10px;
}
.pos-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A6690;
  margin: 0;
  max-width: 640px;
  line-height: 1.5;
}

.pos-topics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.pos-topic-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid #CBE0FA;
  border-radius: 14px;
  padding: 16px 16px 14px;
  box-shadow: 0 10px 24px rgba(22,58,102,0.07);
}

.pos-topic-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #2F80ED;
  background: rgba(47,128,237,0.12);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
  align-self: flex-start;
}

.pos-topic-name {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #163A66;
  margin: 0;
  line-height: 1.25;
}

.pos-topic-foot { display: flex; flex-direction: column; gap: 6px; margin-top: auto; padding-top: 8px; border-top: 1px solid #EAF2FC; }
.pos-lesson-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  border: none;
  border-radius: 999px;
  padding: 8px 10px;
  cursor: pointer;
  text-align: center;
}
.pos-lesson-btn--a { color: #163A66; background: #D9EAFE; }
.pos-lesson-btn--b { color: #163A66; background: #AFCFF7; }

@media (max-width: 900px) {
  .pos-topics-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pos-topics-grid { grid-template-columns: 1fr; }
}
`;

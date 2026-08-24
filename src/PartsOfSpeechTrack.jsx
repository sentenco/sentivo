import { useNavigate } from "react-router-dom";
import TOPICS from "./posTracks";
import { POS_COLORS, PosMark } from "./posVisuals";

// Which parts of speech each topic covers, for the color/mark accents on
// its card -- mirrors the concept.color keys used inside the lessons
// themselves (see posData1-6.js), so the hub visually previews exactly
// what's inside before you open it.
const TOPIC_POS = {
  1: ["noun", "pronoun"],
  2: ["verb"],
  3: ["adjective", "adverb"],
  4: ["preposition"],
  5: ["conjunction"],
  6: ["interjection"],
};

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
        <button type="button" className="pos-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentivo.png" alt="" className="pos-brand-logo" />entivo
        </button>
        <span className="pos-topbar-title">Parts of Speech</span>
      </header>

      <div className="pos-stage">
        <div className="pos-hero">
          <span className="pos-hero-badge">Grammar Comics!</span>
          <h1 className="pos-hero-title">Parts of Speech</h1>
          <p className="pos-hero-blurb">
            The 8 traditional parts of speech, taught across 6 topics, one pair of lessons each: a Lesson to build the
            meaning and use, then an Assessment to check it sticks.
          </p>
        </div>

        <div className="pos-topics-grid">
          {TOPICS.map((topic) => {
            const posKeys = TOPIC_POS[topic.number] || ["noun"];
            const accent = POS_COLORS[posKeys[0]];
            return (
              <div key={topic.number} className="pos-topic-card" style={{ "--topic-accent": accent }}>
                <div className="pos-topic-top">
                  <span className="pos-topic-num">Topic {topic.number}</span>
                  <div className="pos-topic-marks">
                    {posKeys.map((key) => (
                      <span key={key} className="pos-mark" style={{ background: POS_COLORS[key] }}>
                        <PosMark posKey={key} />
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="pos-topic-name">{topic.topicName}</h3>
                <div className="pos-topic-foot">
                  <button type="button" className="pos-lesson-btn pos-lesson-btn--a" onClick={() => openLesson(topic.lessonA.code)}>
                    {topic.lessonA.code} · Lesson
                  </button>
                  <button type="button" className="pos-lesson-btn pos-lesson-btn--b" onClick={() => openLesson(topic.lessonB.code)}>
                    {topic.lessonB.code} · Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&family=Fredoka:wght@700&display=swap');

.pos-shell {
  width: 100%;
  min-height: 100vh;
  background:
    radial-gradient(#00000012 1.4px, transparent 1.5px) 0 0/16px 16px,
    #FFF6E9;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Comic Neue', cursive, sans-serif;
}
.pos-shell * { box-sizing: border-box; }

.pos-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;
}
.pos-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.01em;
  color: #2B2A4A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.pos-brand-logo { height: 28px; width: auto; display: block; margin-right: -4px; }
.pos-topbar-title {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #6B5B3D;
}

.pos-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 36px 24px 60px;
}

.pos-hero { margin-bottom: 34px; }
.pos-hero-badge {
  display: inline-block;
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #FFFFFF;
  background: #8338EC;
  border: 3px solid #1A1A1A;
  border-radius: 999px;
  padding: 3px 16px 5px;
  transform: rotate(-3deg);
  margin-bottom: 12px;
}
.pos-hero-title {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 56px;
  letter-spacing: 0.5px;
  color: #1A1A1A;
  margin: 0 0 10px;
  line-height: 1;
  text-shadow: 3px 3px 0 #FFC300;
}
.pos-hero-blurb {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #3A3226;
  margin: 0;
  max-width: 640px;
  line-height: 1.55;
}

.pos-topics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.pos-topic-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #FFFFFF;
  border: 3.5px solid #1A1A1A;
  border-radius: 16px;
  padding: 16px 18px 16px;
  box-shadow: 6px 6px 0 #1A1A1A;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.pos-topic-card:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 #1A1A1A; }

.pos-topic-top { display: flex; align-items: center; justify-content: space-between; }
.pos-topic-num {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.3px;
  color: #1A1A1A;
  background: #FFF6E9;
  border: 2px solid #1A1A1A;
  border-radius: 999px;
  padding: 2px 10px 3px;
}
.pos-topic-marks { display: flex; gap: 5px; }
.pos-mark {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #1A1A1A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.pos-mark svg { width: 15px; height: 15px; }

.pos-topic-name {
  font-family: 'Bangers', cursive;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.3px;
  color: var(--topic-accent, #1A1A1A);
  margin: 2px 0 0;
  line-height: 1.15;
}

.pos-topic-foot { display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-top: 10px; }
.pos-lesson-btn {
  font-family: 'Comic Neue', cursive, sans-serif;
  font-weight: 700;
  font-size: 13px;
  border: 2.5px solid #1A1A1A;
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 3px 3px 0 #1A1A1A;
}
.pos-lesson-btn:active { box-shadow: 0 0 0 #1A1A1A; transform: translate(3px, 3px); }
.pos-lesson-btn--a { color: #1A1A1A; background: #FFFFFF; }
.pos-lesson-btn--b { color: #FFFFFF; background: var(--topic-accent, #1A1A1A); }

@media (max-width: 900px) {
  .pos-topics-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .pos-topics-grid { grid-template-columns: 1fr; }
}
`;

import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./bridgeTracks";

// BRIDGE Teacher's Guide -- the full content the student never sees: all
// three filler phrases and every question that pairs with each, plus the
// closing capstone prompt, laid out for the teacher to read from cold.

function PhraseCard({ phrase, index }) {
  return (
    <div className="brg-phrase-card">
      <div className="brg-phrase-head">
        <span className="brg-phrase-num">{index + 1}</span>
        <span className="brg-phrase-text">"{phrase.text}"</span>
      </div>
      <div className="brg-row-label">Questions</div>
      <div className="brg-q-list">
        {phrase.questions.map((q, i) => (
          <div className="brg-q-item" key={i}>
            <span className="brg-q-num">Q{i + 1}</span>
            <span className="brg-q-text">{q}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BridgeGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const track = getTrack(trackId);

  if (!lesson) {
    return (
      <div className="brg-shell">
        <style>{CSS}</style>
        <div className="brg-page">
          <p className="brg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="brg-shell">
      <style>{CSS}</style>
      <div className="brg-page">
        <div className="brg-eyebrow">Bridge &middot; Teacher's Guide</div>
        <h1 className="brg-title">{lesson.situation}</h1>
        <p className="brg-sub">The student's screen shows only the question and a box to write down what they said. The filler phrase stays hidden until they tap "Show filler phrase". Everything below is for you to speak from.</p>

        <div className="brg-meta-row">
          <span className="brg-meta-pill"><b>Track</b> {track?.title}</span>
          <span className="brg-meta-pill"><b>3 phrases</b> &middot; 2 questions each</span>
        </div>

        {lesson.phrases.map((p, i) => <PhraseCard phrase={p} index={i} key={i} />)}

        <div className="brg-capstone-card">
          <div className="brg-row-label">Capstone &middot; unaided</div>
          <div className="brg-capstone-text">{lesson.capstone}</div>
          <p className="brg-capstone-note">No reveal button this time. Let the student reach for any of today's three phrases on their own.</p>
        </div>

        <p className="brg-note">Let the student sit in the pause first. Only offer "Show filler phrase" as a fallback if they're genuinely stuck, not the moment they hesitate.</p>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.brg-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #E9F7EF;
  background-image: linear-gradient(165deg, #F1FAF5 0%, #E9F7EF 100%);
  font-family: 'IBM Plex Sans', sans-serif;
  color: #10646B;
  padding: 40px 20px 70px;
  box-sizing: border-box;
}
.brg-shell * { box-sizing: border-box; }

.brg-page { max-width: 720px; margin: 0 auto; }
.brg-missing { text-align: center; color: #4B8B92; margin-top: 60px; }

.brg-eyebrow { font-weight: 800; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #368F5F; text-align: center; }
.brg-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 28px; margin: 8px 0 6px; text-align: center; color: #10646B; }
.brg-sub { text-align: center; font-size: 14px; color: #4B8B92; max-width: 520px; margin: 0 auto 26px; line-height: 1.55; }

.brg-meta-row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
.brg-meta-pill { font-size: 11px; font-weight: 700; color: #4B8B92; background: #fff; border: 1px solid rgba(79,174,122,0.2); border-radius: 999px; padding: 5px 13px; }
.brg-meta-pill b { color: #368F5F; }

.brg-phrase-card {
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(79,174,122,0.16);
  box-shadow: 0 10px 26px rgba(16,100,107,0.08);
  padding: 22px 24px;
  margin-bottom: 18px;
}
.brg-phrase-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.brg-phrase-num {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #4FAE7A, #368F5F);
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 13px; flex-shrink: 0;
}
.brg-phrase-text { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #10646B; }

.brg-row-label { font-weight: 800; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #4B8B92; margin-bottom: 8px; }

.brg-q-list { display: flex; flex-direction: column; gap: 10px; }
.brg-q-item { display: flex; align-items: baseline; gap: 8px; border-top: 1px dashed #E3F5EA; padding-top: 10px; }
.brg-q-item:first-child { border-top: none; padding-top: 0; }
.brg-q-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 11.5px; color: #368F5F; flex-shrink: 0; }
.brg-q-text { font-weight: 600; font-size: 13.5px; color: #10646B; }

.brg-capstone-card {
  background: #E3F5EA;
  border: 1.5px dashed #C3E8D2;
  border-radius: 18px;
  padding: 20px 24px;
  margin-bottom: 18px;
}
.brg-capstone-text { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 16px; color: #10646B; margin-top: 2px; }
.brg-capstone-note { font-size: 12px; color: #4B8B92; margin: 10px 0 0; line-height: 1.5; }

.brg-note {
  max-width: 700px;
  margin: 26px auto 0;
  font-size: 12.5px;
  color: #4B8B92;
  text-align: center;
  line-height: 1.6;
}
`;

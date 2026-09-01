import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./sequenceTracks";

// SEQUENCE Teacher's Guide -- the full content the student never sees:
// the spoken example for each new pattern and the answer to every
// question, laid out per pattern so a teacher can read it cold before
// class.

function PartsRow({ parts }) {
  return (
    <div className="sqg-piece-row">
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <span className="sqg-plus">+</span>}
          <span className="sqg-piece-chip"><span className="sqg-piece-label">{p.label}</span>{p.text}</span>
        </span>
      ))}
    </div>
  );
}

// Detail slot types (everything but "Core") from both of this lesson's
// patterns, deduped -- what the teacher should listen for during the
// open capstone response.
function capstoneListenFor(lesson) {
  const all = lesson.patterns.flatMap((p) => p.slots.filter((s) => s !== "Core"));
  return Array.from(new Set(all));
}

function PatternCard({ pattern, index }) {
  return (
    <div className="sqg-pattern-card">
      <div className="sqg-pattern-head">
        <span className="sqg-pattern-num">{index + 1}</span>
        <span className="sqg-pattern-name">{pattern.name}</span>
        {pattern.isCallback && <span className="sqg-callback-badge">Callback &middot; from "{pattern.fromSituation}"</span>}
      </div>

      {pattern.example && (
        <div className="sqg-example-row">
          <div className="sqg-row-label">Example (say this out loud before Q1)</div>
          <div className="sqg-row-q">"{pattern.example.q}"</div>
          <PartsRow parts={pattern.example.parts} />
        </div>
      )}

      <div className="sqg-row-label">Questions</div>
      <div className="sqg-q-list">
        {pattern.questions.map((item, i) => (
          <div className="sqg-q-item" key={i}>
            <span className="sqg-q-num">Q{i + 1}</span>
            <span className="sqg-row-q" style={{ display: "inline" }}>{item.q}</span>
            <div style={{ marginTop: 6 }}><PartsRow parts={item.parts} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SequenceGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const track = getTrack(trackId);

  if (!lesson) {
    return (
      <div className="sqg-shell">
        <style>{CSS}</style>
        <div className="sqg-page">
          <p className="sqg-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sqg-shell">
      <style>{CSS}</style>
      <div className="sqg-page">
        <div className="sqg-eyebrow">Sequence &middot; Teacher's Guide</div>
        <h1 className="sqg-title">{lesson.situation}</h1>
        <p className="sqg-sub">The student's screen shows only the question and the pattern shape. Everything below &mdash; the example, the full pattern, every answer &mdash; is for you to speak from, never displayed.</p>

        <div className="sqg-meta-row">
          <span className="sqg-meta-pill"><b>Track</b> {track?.title}</span>
          <span className="sqg-meta-pill"><b>2 patterns</b> &middot; 3 questions each</span>
        </div>

        {lesson.patterns.map((p, i) => <PatternCard pattern={p} index={i} key={i} />)}

        <div className="sqg-capstone-card">
          <div className="sqg-pattern-head">
            <span className="sqg-capstone-badge">Put It Together</span>
          </div>
          <div className="sqg-row-label">No fixed answer, fully open production</div>
          <div className="sqg-row-q">"Tell me more about this: {lesson.situation}."</div>
          <div className="sqg-row-label" style={{ marginTop: 12 }}>Listen for natural use of</div>
          <div className="sqg-piece-row">
            {capstoneListenFor(lesson).map((s) => (
              <span key={s} className="sqg-listen-chip">{s}</span>
            ))}
          </div>
        </div>

        <p className="sqg-note">"Show hidden answer" is off by default on the student's screen &mdash; only reveal it yourself as a last resort. Ask the question, let them attempt it, and only guide them toward the missing piece if they're stuck.</p>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.sqg-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #ECEEFA;
  background-image: linear-gradient(165deg, #F4F5FC 0%, #ECEEFA 100%);
  font-family: 'IBM Plex Sans', sans-serif;
  color: #262A4A;
  padding: 40px 20px 70px;
  box-sizing: border-box;
}
.sqg-shell * { box-sizing: border-box; }

.sqg-page { max-width: 720px; margin: 0 auto; }
.sqg-missing { text-align: center; color: #6B70A0; margin-top: 60px; }

.sqg-eyebrow { font-weight: 800; font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; color: #3F4C9E; text-align: center; }
.sqg-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 28px; margin: 8px 0 6px; text-align: center; }
.sqg-sub { text-align: center; font-size: 14px; color: #6B70A0; max-width: 500px; margin: 0 auto 26px; line-height: 1.55; }

.sqg-meta-row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 30px; }
.sqg-meta-pill { font-size: 11px; font-weight: 700; color: #6B70A0; background: #fff; border: 1px solid rgba(92,107,192,0.18); border-radius: 999px; padding: 5px 13px; }
.sqg-meta-pill b { color: #3F4C9E; }

.sqg-pattern-card {
  background: #fff;
  border-radius: 18px;
  border: 1px solid rgba(92,107,192,0.14);
  box-shadow: 0 10px 26px rgba(38,42,74,0.08);
  padding: 22px 24px;
  margin-bottom: 18px;
}
.sqg-pattern-head { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
.sqg-pattern-num {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #5C6BC0, #3F4C9E);
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 13px; flex-shrink: 0;
}
.sqg-pattern-name { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 16px; }
.sqg-callback-badge {
  font-size: 10.5px; font-weight: 800; color: #2C7A46; background: #E3F5EA;
  border-radius: 999px; padding: 4px 11px; text-transform: none; letter-spacing: 0;
}

.sqg-example-row {
  background: #F4F5FC;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 14px;
}
.sqg-row-label { font-weight: 800; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B70A0; margin-bottom: 6px; }
.sqg-row-q { font-weight: 700; font-size: 13.5px; color: #262A4A; margin-bottom: 8px; }

.sqg-piece-row { display: flex; flex-wrap: wrap; align-items: center; gap: 5px; }
.sqg-plus { color: #6B70A0; font-weight: 700; font-size: 12px; margin: 0 2px; }
.sqg-piece-chip {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11.5px; font-weight: 600; color: #3F4C9E;
  background: #E4E6F7; border: 1.5px solid #C9CDF0; border-radius: 999px; padding: 4px 10px 4px 4px;
}
.sqg-piece-label {
  font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em;
  color: #fff; background: #5C6BC0; border-radius: 999px; padding: 3px 8px;
}

.sqg-capstone-card {
  background: #fff;
  border-radius: 18px;
  border: 1.5px dashed rgba(92,107,192,0.3);
  box-shadow: 0 10px 26px rgba(38,42,74,0.08);
  padding: 22px 24px;
  margin-bottom: 18px;
}
.sqg-capstone-badge {
  font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em;
  color: #fff; background: linear-gradient(135deg, #5C6BC0, #3F4C9E);
  border-radius: 999px; padding: 5px 13px;
}
.sqg-listen-chip {
  font-size: 11.5px; font-weight: 700; color: #3F4C9E;
  background: #E4E6F7; border: 1.5px solid #C9CDF0; border-radius: 999px; padding: 4px 12px;
}

.sqg-q-list { display: flex; flex-direction: column; gap: 10px; }
.sqg-q-item { border-top: 1px dashed #E4E6F7; padding-top: 10px; }
.sqg-q-item:first-child { border-top: none; padding-top: 0; }
.sqg-q-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 11.5px; color: #3F4C9E; margin-right: 4px; }

.sqg-note {
  max-width: 700px;
  margin: 26px auto 0;
  font-size: 12.5px;
  color: #6B70A0;
  text-align: center;
  line-height: 1.6;
}
`;

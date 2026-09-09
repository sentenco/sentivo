// ASCEND (new mechanic) Teacher's Guide. A per-prompt reference a teacher
// can read cold right before class: the starting answer and the leveled-up
// sample are both included so you know exactly what "good" sounds like at
// this level and audience -- the push directions and listen-for checklist
// stay teacher-only. The starting answer is now shown on the student's own
// screen too (see AscendPush.jsx); the leveled-up sample and everything
// else here never is.

export default function AscendPushGuide({ lesson, track }) {
  const recallCount = lesson.recall.length;
  return (
    <div className="apg-shell">
      <style>{CSS}</style>
      <div className="apg-page">
        <div className="apg-eyebrow">Ascend &middot; Teacher's Guide</div>
        <h1 className="apg-title">{lesson.title}</h1>
        <p className="apg-sub">The student's screen shows the question and a starting answer to level up. The leveled-up sample, push lines, and listen-for checklist below are for you.</p>

        <div className="apg-meta-row">
          <span className="apg-meta-pill"><b>Level</b> {lesson.level}</span>
          <span className="apg-meta-pill"><b>Track</b> {track?.title}</span>
          <span className="apg-meta-pill"><b>Audience</b> {track?.audience?.join(", ")}</span>
          <span className="apg-meta-pill"><b>{lesson.prompts.length} prompts</b> + {recallCount} recall</span>
        </div>

        <div className="apg-timing">
          <div className="apg-timing-row"><span className="apg-timing-min">2 min</span><span>Warm-up: introduce today's theme, {track?.title}</span></div>
          <div className="apg-timing-row"><span className="apg-timing-min">16 min</span><span>{lesson.prompts.length} prompts: student reads the starting answer, then works with you to level it up</span></div>
          <div className="apg-timing-row"><span className="apg-timing-min">5 min</span><span>Remember This?: {recallCount} recall checks, no starting answer shown this time</span></div>
          <div className="apg-timing-row"><span className="apg-timing-min">2 min</span><span>Wrap-up</span></div>
        </div>

        {lesson.prompts.map((p, i) => (
          <section className="apg-section" key={i}>
            <h2 className="apg-section-title">Prompt {i + 1}</h2>
            <p className="apg-question">{p.question}</p>

            <span className="apg-label">Starting answer (shown to student)</span>
            <p className="apg-answer-box">&ldquo;{p.answer}&rdquo;</p>

            <span className="apg-label apg-label--sample">Leveled-up sample (not shown to student)</span>
            <p className="apg-sample-box">{p.leveledAnswer}</p>

            <div className="apg-two-col">
              <div>
                <span className="apg-label">Push it (say out loud)</span>
                {p.pushes.map((push, j) => <div key={j} className="apg-push-line">{j + 1}. {push}</div>)}
              </div>
              <div>
                <span className="apg-label">Listen for</span>
                {p.skills.map((s, j) => <div key={j} className="apg-skill-line">&#10003; {s}</div>)}
              </div>
            </div>
          </section>
        ))}

        <div className="apg-recall-box">
          <div className="apg-recall-title">Remember This? &mdash; recall check</div>
          <p className="apg-recall-body">
            Prompts {lesson.recall.map((r) => r.fromPrompt + 1).join(", ")} come back with no starting answer shown &mdash; this is the one part of the lesson where nothing is given. If they revert to the plain version, don't reveal the leveled-up sample &mdash; say "remember how you said this earlier?" and let them retry. Tap <b>Remembered It</b> only once they use the upgraded form unaided.
          </p>
        </div>

        <p className="apg-note">"Leveled Up" can be tapped more than once per prompt &mdash; push as many rounds as the sentence has left, then move on whenever you're ready.</p>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.apg-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #EAFBF8;
  background-image: linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  font-family: 'IBM Plex Sans', sans-serif;
  color: #10646B;
  padding: 30px 24px 60px;
  box-sizing: border-box;
}
.apg-shell * { box-sizing: border-box; }

.apg-page { max-width: 720px; margin: 0 auto; }

.apg-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #C9701F; text-align: center; }
.apg-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 26px; margin: 6px 0 4px; text-align: center; }
.apg-sub { text-align: center; font-size: 13px; color: #4B8B92; margin: 0 auto 18px; max-width: 480px; }

.apg-meta-row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; }
.apg-meta-pill { font-size: 11px; font-weight: 700; color: #4B8B92; background: #fff; border: 1px solid rgba(242,153,74,0.2); border-radius: 999px; padding: 5px 13px; }
.apg-meta-pill b { color: #C9701F; }

.apg-timing {
  background: #FFFFFF; border: 1px solid #F3C99A; border-radius: 16px;
  padding: 6px 20px; margin-bottom: 30px;
}
.apg-timing-row {
  display: flex; align-items: center; gap: 14px;
  padding: 11px 0; border-bottom: 1px dashed rgba(201,112,31,0.18);
  font-size: 13px; font-weight: 600; color: #10646B;
}
.apg-timing-row:last-child { border-bottom: none; }
.apg-timing-min {
  flex-shrink: 0; width: 54px; text-align: center;
  font-weight: 800; font-size: 11px; color: #C9701F; background: #FBE6D2; border-radius: 999px; padding: 4px 0;
}

.apg-section { background: #fff; border-radius: 16px; padding: 18px 20px; margin-bottom: 14px; box-shadow: 0 10px 26px rgba(16,100,107,0.06); }
.apg-section-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #C9701F; margin: 0 0 6px; }
.apg-question { font-weight: 700; font-size: 14px; color: #10646B; margin: 0 0 12px; }

.apg-label { display: block; font-weight: 800; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.05em; color: #4B8B92; margin-bottom: 4px; }
.apg-label--sample { color: #2F9E58; }

.apg-answer-box { font-style: italic; color: #9A9585; background: #FAF8F4; border: 1px solid #EDE7DA; border-radius: 10px; padding: 8px 12px; margin: 0 0 12px; font-size: 13px; }
.apg-sample-box { color: #1F7A47; background: #E4F8EC; border-radius: 10px; padding: 8px 12px; margin: 0 0 14px; font-size: 13.5px; font-weight: 600; line-height: 1.5; }

.apg-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.apg-push-line { font-size: 12.5px; line-height: 1.5; margin-bottom: 5px; color: #10646B; }
.apg-push-line:last-child { margin-bottom: 0; }
.apg-skill-line { font-size: 12.5px; line-height: 1.5; margin-bottom: 5px; color: #2F9E58; font-weight: 600; }
.apg-skill-line:last-child { margin-bottom: 0; }

.apg-recall-box {
  margin-top: 18px;
  background: #fff;
  border: 1px solid rgba(62,155,92,0.3);
  border-radius: 14px;
  padding: 14px 18px;
}
.apg-recall-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 14px; color: #2C7A46; margin-bottom: 6px; }
.apg-recall-body { font-size: 12.5px; line-height: 1.5; color: #10646B; margin: 0; }

.apg-note { text-align: center; font-size: 11.5px; color: #4B8B92; margin-top: 16px; }

@media (max-width: 640px) {
  .apg-two-col { grid-template-columns: 1fr; gap: 10px; }
}
`;

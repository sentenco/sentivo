// ASCEND (new mechanic) Teacher's Guide. Kept deliberately brief -- a
// one-row-per-prompt table so a teacher can skim it cold, right before class,
// instead of reading prose. Everything here is off the student's screen:
// the simple answer, the push directions, and what to listen for.

export default function AscendPushGuide({ lesson, track }) {
  return (
    <div className="apg-shell">
      <style>{CSS}</style>
      <div className="apg-page">
        <div className="apg-eyebrow">Ascend &middot; Teacher's Guide</div>
        <h1 className="apg-title">{lesson.title}</h1>
        <p className="apg-sub">Screen shows only the question and "level it up." Everything below is for you.</p>

        <div className="apg-meta-row">
          <span className="apg-meta-pill"><b>Level</b> {lesson.level}</span>
          <span className="apg-meta-pill"><b>Track</b> {track?.title}</span>
          <span className="apg-meta-pill"><b>{lesson.prompts.length} prompts</b> + {lesson.recall.length} recall</span>
        </div>

        <table className="apg-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Prompt</th>
              <th>Simple answer</th>
              <th>Push it (say out loud)</th>
              <th>Listen for</th>
            </tr>
          </thead>
          <tbody>
            {lesson.prompts.map((p, i) => (
              <tr key={i}>
                <td className="apg-num">{i + 1}</td>
                <td className="apg-q">{p.question}</td>
                <td className="apg-answer">&ldquo;{p.answer}&rdquo;</td>
                <td className="apg-pushes">
                  {p.pushes.map((push, j) => <div key={j} className="apg-push-line">{j + 1}. {push}</div>)}
                </td>
                <td className="apg-skills">
                  {p.skills.map((s, j) => <div key={j} className="apg-skill-line">&#10003; {s}</div>)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="apg-recall-box">
          <div className="apg-recall-title">Remember This? &mdash; recall check</div>
          <p className="apg-recall-body">
            Prompts {lesson.recall.map((r) => r.fromPrompt + 1).join(", ")} come back with no answer shown. If they revert to the plain version, don't reveal the upgrade &mdash; say "remember how you said this earlier?" and let them retry. Tap <b>Remembered It</b> only once they use the upgraded form unaided.
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

.apg-page { max-width: 900px; margin: 0 auto; }

.apg-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #C9701F; text-align: center; }
.apg-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 26px; margin: 6px 0 4px; text-align: center; }
.apg-sub { text-align: center; font-size: 13px; color: #4B8B92; margin: 0 auto 18px; max-width: 460px; }

.apg-meta-row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; }
.apg-meta-pill { font-size: 11px; font-weight: 700; color: #4B8B92; background: #fff; border: 1px solid rgba(242,153,74,0.2); border-radius: 999px; padding: 5px 13px; }
.apg-meta-pill b { color: #C9701F; }

.apg-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 26px rgba(16,100,107,0.08); font-size: 12.5px; }
.apg-table th {
  text-align: left; font-weight: 800; font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em;
  color: #C9701F; background: #FBE6D2; padding: 8px 10px;
}
.apg-table td { padding: 9px 10px; vertical-align: top; border-top: 1px solid #F0F0EE; }
.apg-table tr:first-child td { border-top: none; }
.apg-num { font-family: 'Baloo 2', cursive; font-weight: 700; color: #C9701F; width: 22px; }
.apg-q { font-weight: 700; color: #10646B; width: 17%; }
.apg-answer { color: #9A9585; font-style: italic; width: 14%; }
.apg-pushes { width: 32%; }
.apg-push-line { margin-bottom: 4px; }
.apg-push-line:last-child { margin-bottom: 0; }
.apg-skills { width: 24%; color: #2F9E58; font-weight: 600; }
.apg-skill-line { margin-bottom: 4px; }
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

@media (max-width: 720px) {
  .apg-table, .apg-table thead { display: none; }
  .apg-table, .apg-table tbody, .apg-table tr, .apg-table td { display: block; width: 100% !important; }
  .apg-table tr { border-top: 1px solid #F0F0EE; padding: 10px 0; }
  .apg-table td { padding: 3px 0; }
}
`;

import { useState } from "react";

// Message Reply: student reads an incoming text/email, writes a real
// reply, sends it into the thread as their own bubble, then reveals a
// sample reply to compare -- no auto-grading, same self-check pattern as
// Story Making, but the "send" step makes the thread feel like a real
// conversation instead of a plain textarea exercise.
export default function MessageReplyActivity({ item }) {
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function restart() {
    setDraft("");
    setSent(false);
    setRevealed(false);
  }

  function send() {
    if (!draft.trim()) return;
    setSent(true);
  }

  return (
    <div className="mr-shell">
      <style>{CSS}</style>

      <div className="mr-card">
        <div className="mr-bar">
          <span className="mr-eyebrow">Sentivo · Message Reply</span>
        </div>

        <h1 className="mr-title">{item.title}</h1>
        <span className="mr-focus">{item.focus}</span>

        <div className="mr-thread">
          <div className="mr-bubble mr-bubble--in">
            <div className="mr-bubble-meta">
              <span className="mr-from">{item.from}</span>
              <span className="mr-context">{item.context}</span>
            </div>
            <p className="mr-bubble-text">{item.incoming}</p>
          </div>

          {sent && (
            <div className="mr-bubble mr-bubble--out mr-bubble--mine">
              <span className="mr-label mr-label--mine">You</span>
              <p className="mr-bubble-text">{draft}</p>
            </div>
          )}

          {revealed && (
            <div className="mr-bubble mr-bubble--out mr-bubble--sample">
              <span className="mr-label mr-label--sample">Sample reply</span>
              <p className="mr-bubble-text">{item.sample}</p>
            </div>
          )}
        </div>

        {!sent && (
          <>
            <p className="mr-prompt">{item.prompt}</p>
            <div className="mr-checklist">
              {item.mustInclude.map((c) => (
                <span className="mr-chip" key={c}>{c}</span>
              ))}
            </div>

            <textarea
              className="mr-textarea"
              placeholder="Write your reply here…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={4}
            />
          </>
        )}

        <div className="mr-nav">
          <button type="button" className="mr-btn" onClick={restart}>Restart ↻</button>
          {!sent ? (
            <button type="button" className="mr-btn mr-btn--primary" onClick={send} disabled={!draft.trim()}>Send →</button>
          ) : !revealed ? (
            <button type="button" className="mr-btn mr-btn--primary" onClick={() => setRevealed(true)}>Show sample →</button>
          ) : (
            <button type="button" className="mr-btn mr-btn--primary" disabled>Sample shown</button>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.mr-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.mr-shell * { box-sizing: border-box; }

.mr-card {
  width: 100%;
  max-width: 640px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(217,84,46,0.16);
  padding: clamp(28px, 5vw, 44px);
}

.mr-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.mr-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A13B1E;
  background: rgba(217,84,46,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}

.mr-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(22px, 3.6vw, 28px); color: #2B2A4A; margin: 0 0 6px; }
.mr-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-bottom: 18px; }

.mr-thread { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.mr-bubble { max-width: 88%; border-radius: 16px; padding: 12px 16px; }
.mr-bubble--in { align-self: flex-start; background: #F3EEE6; border-bottom-left-radius: 4px; }
.mr-bubble--out { align-self: flex-end; border-bottom-right-radius: 4px; }
.mr-bubble--mine { background: #FBE4DC; }
.mr-bubble--sample { background: #E4F8EC; }
.mr-bubble-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.mr-from { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: #8A8398; }
.mr-context { font-size: 11px; color: #9A93A8; }
.mr-bubble-text { font-size: 14.5px; color: #2B2A4A; line-height: 1.55; margin: 0; }
.mr-bubble--mine .mr-bubble-text { color: #A13B1E; }
.mr-bubble--sample .mr-bubble-text { color: #1F7A47; }
.mr-label { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 6px; }
.mr-label--mine { color: #A13B1E; }
.mr-label--sample { color: #1F7A47; }

.mr-prompt { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; margin: 0 0 10px; }
.mr-checklist { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.mr-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #A13B1E;
  background: #FBE4DC;
  border-radius: 999px;
  padding: 6px 13px;
}

.mr-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #F3C4B0;
  border-radius: 14px;
  padding: 14px 16px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14.5px;
  color: #2B2A4A;
  line-height: 1.6;
  resize: vertical;
  background: #FDF3EF;
}
.mr-textarea:focus { outline: none; border-color: #D9542E; }

.mr-nav { display: flex; justify-content: space-between; margin-top: 22px; }
.mr-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 15px;
  border: none;
  border-radius: 14px;
  padding: 12px 24px;
  cursor: pointer;
  background: #F5EDE6;
  color: #7A6B4E;
}
.mr-btn:disabled { opacity: 0.5; cursor: default; }
.mr-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8825F 0%, #D9542E 100%);
  box-shadow: 0 6px 0 #A13B1E;
}
.mr-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #A13B1E; }
`;

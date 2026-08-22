import { useState } from "react";

// Message Reply: student reads an incoming text/email, writes a real
// reply, then reveals a sample reply to compare -- no auto-grading, same
// self-check pattern as Story Making.
export default function MessageReplyActivity({ item }) {
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);

  function restart() {
    setDraft("");
    setRevealed(false);
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

          {revealed && (
            <div className="mr-bubble mr-bubble--out mr-bubble--sample">
              <span className="mr-label">Sample reply</span>
              <p className="mr-bubble-text">{item.sample}</p>
            </div>
          )}
        </div>

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

        <div className="mr-nav">
          <button type="button" className="mr-btn" onClick={restart}>Restart ↻</button>
          <button type="button" className="mr-btn mr-btn--primary" onClick={() => setRevealed(true)} disabled={revealed}>
            {revealed ? "Sample shown" : "Show sample →"}
          </button>
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
  box-shadow: 0 20px 44px rgba(197,105,42,0.16);
  padding: clamp(28px, 5vw, 44px);
}

.mr-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.mr-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A15A2E;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}

.mr-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(22px, 3.6vw, 28px); color: #2B2A4A; margin: 0 0 6px; }
.mr-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-bottom: 18px; }

.mr-thread { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.mr-bubble { max-width: 88%; border-radius: 16px; padding: 12px 16px; }
.mr-bubble--in { align-self: flex-start; background: #F3EEE6; border-bottom-left-radius: 4px; }
.mr-bubble--out { align-self: flex-end; background: #E4F8EC; border-bottom-right-radius: 4px; }
.mr-bubble-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.mr-from { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: #A15A2E; }
.mr-context { font-size: 11px; color: #9A93A8; }
.mr-bubble-text { font-size: 14.5px; color: #2B2A4A; line-height: 1.55; margin: 0; }
.mr-bubble--sample .mr-bubble-text { color: #1F7A47; }
.mr-label { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #1F7A47; margin-bottom: 6px; }

.mr-prompt { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; margin: 0 0 10px; }
.mr-checklist { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.mr-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #A15A2E;
  background: #FBEDE3;
  border-radius: 999px;
  padding: 6px 13px;
}

.mr-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #EBC6A6;
  border-radius: 14px;
  padding: 14px 16px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14.5px;
  color: #2B2A4A;
  line-height: 1.6;
  resize: vertical;
  background: #FFFAF4;
}
.mr-textarea:focus { outline: none; border-color: #C5692A; }

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
  background: linear-gradient(135deg, #E08A4F 0%, #C5692A 100%);
  box-shadow: 0 6px 0 #9C4E1C;
}
.mr-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #9C4E1C; }
`;

import { useState } from "react";

// Register Rewrite: student reads an original message and a direction
// (rewrite formally / rewrite casually), types a rewrite, then reveals a
// sample to compare -- same self-check pattern as Story Making.
export default function RegisterRewriteActivity({ item }) {
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);
  const toFormal = item.direction === "toFormal";

  function restart() {
    setDraft("");
    setRevealed(false);
  }

  return (
    <div className="rr-shell">
      <style>{CSS}</style>

      <div className="rr-card">
        <div className="rr-bar">
          <span className="rr-eyebrow">Sentivo · Register Rewrite</span>
          <span className="rr-direction" data-formal={toFormal}>
            {toFormal ? "Casual → Formal" : "Formal → Casual"}
          </span>
        </div>

        <h1 className="rr-title">{item.title}</h1>
        <span className="rr-focus">{item.focus}</span>
        <p className="rr-context">{item.context}</p>

        <div className="rr-original">
          <span className="rr-label">Original</span>
          <p className="rr-original-text">{item.original}</p>
        </div>

        <p className="rr-prompt">{item.prompt}</p>
        <div className="rr-phrases">
          {item.helpfulPhrases.map((p) => (
            <span className="rr-chip" key={p}>{p}</span>
          ))}
        </div>

        <textarea
          className="rr-textarea"
          placeholder="Write your rewrite here…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={4}
        />

        {revealed && (
          <div className="rr-sample">
            <span className="rr-label rr-label--sample">Sample rewrite</span>
            <p className="rr-sample-text">{item.sample}</p>
          </div>
        )}

        <div className="rr-nav">
          <button type="button" className="rr-btn" onClick={restart}>Restart ↻</button>
          <button type="button" className="rr-btn rr-btn--primary" onClick={() => setRevealed(true)} disabled={revealed}>
            {revealed ? "Sample shown" : "Show sample →"}
          </button>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.rr-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.rr-shell * { box-sizing: border-box; }

.rr-card {
  width: 100%;
  max-width: 640px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(197,105,42,0.16);
  padding: clamp(28px, 5vw, 44px);
}

.rr-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.rr-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A15A2E;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}
.rr-direction {
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1F9D6E;
  background: #E4F8EC;
  border-radius: 999px;
  padding: 5px 12px;
}
.rr-direction[data-formal="false"] { color: #7C5CFC; background: #EFEAFE; }

.rr-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(22px, 3.6vw, 28px); color: #2B2A4A; margin: 0 0 6px; }
.rr-focus { display: inline-block; font-size: 12.5px; color: #7A7391; }
.rr-context { font-size: 13px; color: #5C6873; margin: 6px 0 18px; }

.rr-original { background: #F3EEE6; border-radius: 14px; padding: 16px 18px; margin-bottom: 18px; }
.rr-original-text { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; line-height: 1.55; margin: 0; font-style: italic; }
.rr-label { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A15A2E; margin-bottom: 8px; }
.rr-label--sample { color: #1F7A47; }

.rr-prompt { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15.5px; color: #2B2A4A; margin: 0 0 10px; }
.rr-phrases { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.rr-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #A15A2E;
  background: #FBEDE3;
  border-radius: 999px;
  padding: 6px 13px;
}

.rr-textarea {
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
.rr-textarea:focus { outline: none; border-color: #C5692A; }

.rr-sample { margin-top: 16px; background: #E4F8EC; border-radius: 14px; padding: 16px 18px; }
.rr-sample-text { font-size: 14.5px; color: #1F7A47; line-height: 1.6; margin: 0; }

.rr-nav { display: flex; justify-content: space-between; margin-top: 22px; }
.rr-btn {
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
.rr-btn:disabled { opacity: 0.5; cursor: default; }
.rr-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E08A4F 0%, #C5692A 100%);
  box-shadow: 0 6px 0 #9C4E1C;
}
.rr-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #9C4E1C; }
`;

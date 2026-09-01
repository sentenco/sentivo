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
        <span className="rr-card-tape" />
        <div className="rr-bar">
          <span className="rr-eyebrow">Sentivo · Register Rewrite</span>
        </div>

        <h1 className="rr-title">{item.title}</h1>
        <span className="rr-focus">{item.focus}</span>

        <div className="rr-direction-track" data-formal={toFormal}>
          <span className="rr-direction-tag rr-direction-tag--from">{toFormal ? "Casual" : "Formal"}</span>
          <span className="rr-direction-arrow">→</span>
          <span className="rr-direction-tag rr-direction-tag--to">{toFormal ? "Formal" : "Casual"}</span>
        </div>

        <p className="rr-context">{item.context}</p>

        <div className="rr-original">
          <span className="rr-tape" />
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
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.rr-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Karla', sans-serif;
  background: linear-gradient(160deg, #FFF8EF 0%, #FFF1E6 100%);
  overflow: hidden;
}
.rr-shell * { box-sizing: border-box; }
.rr-shell::before, .rr-shell::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none;
}
.rr-shell::before { width: 150px; height: 150px; background: rgba(111,207,151,0.18); top: -40px; left: -30px; }
.rr-shell::after { width: 110px; height: 110px; background: rgba(255,138,117,0.14); bottom: -20px; right: 6%; }

.rr-card {
  position: relative;
  width: 100%;
  max-width: 640px;
  background: #FFFFFF;
  border-radius: 22px;
  box-shadow: 0 20px 44px rgba(47,122,80,0.16);
  padding: clamp(28px, 5vw, 44px);
  transform: rotate(-0.5deg);
  z-index: 1;
}
.rr-card-tape {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 68px; height: 22px; opacity: 0.9;
  background: repeating-linear-gradient(45deg, #6FCF97, #6FCF97 6px, #A3E4BC 6px, #A3E4BC 12px);
}

.rr-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.rr-eyebrow {
  font-family: 'Karla', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2F7A50;
  background: rgba(76,175,122,0.16);
  border-radius: 999px;
  padding: 5px 14px;
}
.rr-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: clamp(28px, 4.2vw, 36px); color: #4A3F3A; margin: 0 0 8px; }
.rr-focus { display: inline-block; font-size: 12.5px; font-weight: 600; color: #A9836F; }

.rr-direction-track { display: flex; align-items: center; gap: 8px; margin: 14px 0 6px; }
.rr-direction-tag {
  font-family: 'Karla', sans-serif;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 5px 12px;
}
.rr-direction-tag--from { color: #A9836F; background: #F5EEE4; }
.rr-direction-arrow { color: #D9C7B5; font-size: 13px; }
.rr-direction-track[data-formal="true"] .rr-direction-tag--to { color: #2F7A50; background: #DFF3E7; }
.rr-direction-track[data-formal="false"] .rr-direction-tag--to { color: #2A6E85; background: #E1F1F6; }

.rr-context { font-size: 13px; font-weight: 500; color: #A9836F; margin: 0 0 18px; }

.rr-original {
  position: relative;
  background: #FFFDF8;
  border: 1px solid #F5D9CC;
  border-radius: 10px;
  padding: 20px 18px 16px;
  margin: 0 0 20px 6px;
  box-shadow: 0 8px 18px rgba(43,42,74,0.08);
  transform: rotate(-1deg);
}
.rr-tape {
  position: absolute;
  top: -10px;
  left: 28px;
  width: 56px;
  height: 20px;
  background: repeating-linear-gradient(45deg, #FFD166, #FFD166 6px, #FFE29E 6px, #FFE29E 12px);
  transform: rotate(-3deg);
}
.rr-original-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 15px; color: #4A3F3A; line-height: 1.55; margin: 0; }
.rr-label { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin-bottom: 8px; }
.rr-label--sample { color: #1F7A47; }

.rr-prompt { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 14.5px; color: #4A3F3A; margin: 0 0 10px; }
.rr-phrases { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.rr-chip {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #2F7A50;
  background: #DFF3E7;
  border-radius: 999px;
  padding: 6px 13px;
}

.rr-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #C3EEDD;
  border-radius: 14px;
  padding: 14px 16px;
  font-family: 'Karla', sans-serif;
  font-size: 14.5px;
  color: #4A3F3A;
  line-height: 1.6;
  resize: vertical;
  background: #F2FBF6;
}
.rr-textarea:focus { outline: none; border-color: #4CAF7A; }

.rr-sample { margin-top: 16px; background: #E4F8EC; border-left: 3px solid #4CAF7A; border-radius: 4px 14px 14px 4px; padding: 16px 18px; }
.rr-sample-text { font-family: 'Karla', sans-serif; font-size: 14.5px; color: #1F7A47; line-height: 1.6; margin: 0; }

.rr-nav { display: flex; justify-content: space-between; margin-top: 22px; }
.rr-btn {
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 14px;
  border: none;
  border-radius: 14px;
  padding: 12px 24px;
  cursor: pointer;
  background: #FBEDE3;
  color: #A9836F;
}
.rr-btn:disabled { opacity: 0.5; cursor: default; }
.rr-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #6FCF97 0%, #2F7A50 100%);
  box-shadow: 0 6px 0 #1F5A3A;
}
.rr-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #1F5A3A; }
`;

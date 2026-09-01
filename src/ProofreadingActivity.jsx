import { useState } from "react";

const STEPS = ["warmup", "fixIt", "followup"];

// Proofreading: warm-up discussion, then an actual writing step where the
// student retypes the flawed text with their own corrections before
// revealing the answer key -- matching the "write, then reveal a sample"
// mechanic the rest of Writing uses -- then a speaking follow-up.
export default function ProofreadingActivity({ item }) {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);
  const kind = STEPS[step];

  function restart() {
    setStep(0);
    setDraft("");
    setRevealed(false);
  }

  return (
    <div className="pf-shell">
      <style>{CSS}</style>

      <div className="pf-card">
        <span className="pf-tape" />
        <div className="pf-bar">
          <span className="pf-eyebrow">Sentivo · Proofreading</span>
          <div className="pf-dots">
            {STEPS.map((s, i) => (
              <span key={s} className={`pf-dot ${i === step ? "is-active" : i < step ? "is-done" : ""}`} />
            ))}
          </div>
        </div>

        <h1 className="pf-title">{item.title}</h1>
        <span className="pf-focus">{item.focus}</span>

        {kind === "warmup" && (
          <div className="pf-body">
            <span className="pf-label">Warm-up</span>
            <p className="pf-text">{item.warmup}</p>
          </div>
        )}

        {kind === "fixIt" && (
          <div className="pf-body">
            <span className="pf-label">Fix the mistakes</span>
            <p className="pf-hint">Read the text below, then rewrite it correctly in the box.</p>
            <p className="pf-script pf-script--mistakes">{item.mistakes}</p>

            <textarea
              className="pf-textarea"
              placeholder="Type the corrected version here…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={4}
            />

            {revealed ? (
              <div className="pf-sample">
                <span className="pf-label pf-label--sample">Corrected version</span>
                <p className="pf-sample-text">{item.corrected}</p>
              </div>
            ) : (
              <button type="button" className="pf-reveal-btn" onClick={() => setRevealed(true)}>Show corrected version →</button>
            )}
          </div>
        )}

        {kind === "followup" && (
          <div className="pf-body">
            <span className="pf-label">Speaking follow-up</span>
            <p className="pf-text">{item.followup}</p>
          </div>
        )}

        <div className="pf-nav">
          <button type="button" className="pf-btn" onClick={() => setStep((s) => s - 1)} disabled={step === 0}>← Back</button>
          {step + 1 < STEPS.length ? (
            <button type="button" className="pf-btn pf-btn--primary" onClick={() => setStep((s) => s + 1)}>Next →</button>
          ) : (
            <button type="button" className="pf-btn pf-btn--primary" onClick={restart}>Restart ↻</button>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.pf-shell {
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
.pf-shell * { box-sizing: border-box; }
.pf-shell::before, .pf-shell::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none;
}
.pf-shell::before { width: 150px; height: 150px; background: rgba(232,168,61,0.16); top: -40px; left: -30px; }
.pf-shell::after { width: 110px; height: 110px; background: rgba(111,207,151,0.14); bottom: -20px; right: 6%; }

.pf-card {
  width: 100%;
  max-width: 640px;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 20px 44px rgba(169,114,10,0.16);
  padding: clamp(28px, 5vw, 44px);
  position: relative;
  overflow: visible;
  transform: rotate(-0.6deg);
  z-index: 1;
}
.pf-tape {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 68px; height: 22px; opacity: 0.9;
  background: repeating-linear-gradient(45deg, #FFD166, #FFD166 6px, #FFE29E 6px, #FFE29E 12px);
}

.pf-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.pf-eyebrow {
  font-family: 'Karla', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A9720A;
  background: rgba(232,168,61,0.16);
  border-radius: 999px;
  padding: 5px 14px;
}
.pf-dots { display: flex; align-items: center; gap: 6px; }
.pf-dot { width: 8px; height: 8px; border-radius: 50%; background: #FCE4B0; transition: all 0.2s ease; }
.pf-dot.is-done { background: #E8A83D; }
.pf-dot.is-active { width: 20px; border-radius: 4px; background: #A9720A; }

.pf-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: clamp(30px, 4.6vw, 40px); color: #4A3F3A; margin: 0 0 4px; }
.pf-focus { display: inline-block; font-size: 12.5px; font-weight: 600; color: #A9836F; margin-bottom: 22px; }

.pf-body { min-height: 140px; }
.pf-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9720A; margin-bottom: 10px; }
.pf-label--sample { color: #1F7A47; }
.pf-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 17px; color: #4A3F3A; line-height: 1.55; }
.pf-hint { font-size: 13px; font-weight: 500; color: #A9836F; line-height: 1.5; margin: 0 0 12px; }
.pf-script { font-family: 'Karla', sans-serif; font-size: 15.5px; line-height: 1.7; border-radius: 14px; padding: 16px 18px; white-space: pre-line; margin: 0 0 14px; }
.pf-script--mistakes { color: #B3392F; background: #FDEAEA; font-style: italic; }

.pf-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #FCE4B0;
  border-radius: 14px;
  padding: 14px 16px;
  font-family: 'Karla', sans-serif;
  font-size: 14.5px;
  color: #4A3F3A;
  line-height: 1.6;
  resize: vertical;
  background: #FFFDF8;
  margin-bottom: 14px;
}
.pf-textarea:focus { outline: none; border-color: #E8A83D; }

.pf-reveal-btn {
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 13px;
  border: none;
  border-radius: 999px;
  padding: 9px 18px;
  cursor: pointer;
  background: rgba(232,168,61,0.20);
  color: #A9720A;
}
.pf-reveal-btn:hover { background: rgba(232,168,61,0.32); }

.pf-sample { background: #E4F8EC; border-radius: 14px; padding: 16px 18px; }
.pf-sample-text { font-family: 'Karla', sans-serif; font-size: 15px; color: #1F7A47; line-height: 1.6; margin: 0; }

.pf-nav { display: flex; justify-content: space-between; margin-top: 28px; }
.pf-btn {
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
.pf-btn:disabled { opacity: 0.4; cursor: default; }
.pf-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8A83D 0%, #A9720A 100%);
  box-shadow: 0 6px 0 #7A5209;
}
.pf-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #7A5209; }
`;

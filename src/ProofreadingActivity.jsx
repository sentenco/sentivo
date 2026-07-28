import { useState } from "react";

const STEPS = ["warmup", "mistakes", "corrected", "followup"];

// Proofreading: staged teacher-led flow -- warm-up, text with mistakes,
// corrected reveal, speaking follow-up. No scoring; teacher-paced.
export default function ProofreadingActivity({ item, onBack, backLabel = "← Topics" }) {
  const [step, setStep] = useState(0);
  const kind = STEPS[step];

  function restart() {
    setStep(0);
  }

  return (
    <div className="pf-shell">
      <style>{CSS}</style>

      {onBack && (
        <button type="button" className="pf-back" onClick={onBack}>{backLabel}</button>
      )}

      <div className="pf-card">
        <div className="pf-bar">
          <span className="pf-eyebrow">Sentivo · Proofreading</span>
          <span className="pf-step">Step {step + 1} of {STEPS.length}</span>
        </div>

        <h1 className="pf-title">{item.title}</h1>
        <span className="pf-focus">{item.focus}</span>

        {kind === "warmup" && (
          <div className="pf-body">
            <span className="pf-label">Warm-up</span>
            <p className="pf-text">{item.warmup}</p>
          </div>
        )}

        {kind === "mistakes" && (
          <div className="pf-body">
            <span className="pf-label">Find and fix the mistakes</span>
            <p className="pf-script pf-script--mistakes">{item.mistakes}</p>
          </div>
        )}

        {kind === "corrected" && (
          <div className="pf-body">
            <span className="pf-label">Corrected version</span>
            <p className="pf-script pf-script--corrected">{item.corrected}</p>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.pf-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.pf-shell * { box-sizing: border-box; }

.pf-back {
  position: absolute;
  top: clamp(8px, 2vw, 20px);
  left: clamp(8px, 2vw, 20px);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #A15A2E;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 4px;
}

.pf-card {
  width: 100%;
  max-width: 620px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(197,105,42,0.16);
  padding: clamp(28px, 5vw, 44px);
}

.pf-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.pf-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A15A2E;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}
.pf-step { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #9A93A8; }

.pf-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(24px, 4vw, 32px); color: #2B2A4A; margin: 0 0 6px; }
.pf-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-bottom: 22px; }

.pf-body { min-height: 140px; }
.pf-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #C5692A; margin-bottom: 10px; }
.pf-text { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; color: #2B2A4A; line-height: 1.5; }
.pf-script { font-size: 17px; line-height: 1.7; border-radius: 14px; padding: 18px 20px; white-space: pre-line; }
.pf-script--mistakes { color: #B3392F; background: #FDEAEA; font-style: italic; }
.pf-script--corrected { color: #1F7A47; background: #E4F8EC; }

.pf-nav { display: flex; justify-content: space-between; margin-top: 28px; }
.pf-btn {
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
.pf-btn:disabled { opacity: 0.4; cursor: default; }
.pf-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E08A4F 0%, #C5692A 100%);
  box-shadow: 0 6px 0 #9C4E1C;
}
.pf-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #9C4E1C; }
`;

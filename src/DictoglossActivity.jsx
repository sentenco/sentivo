import { useState } from "react";

const STEPS = ["warmup", "preteach", "listen1", "listen2", "reconstruct", "compare", "followup"];

// Dictogloss: staged teacher-led flow -- warm-up, pre-teach, 2 listenings,
// reconstruction, compare, speaking follow-up. No scoring; teacher-paced.
export default function DictoglossActivity({ item, onBack, backLabel = "← Topics" }) {
  const [step, setStep] = useState(0);
  const kind = STEPS[step];

  function restart() {
    setStep(0);
  }

  return (
    <div className="dg-shell">
      <style>{CSS}</style>

      {onBack && (
        <button type="button" className="dg-back" onClick={onBack}>{backLabel}</button>
      )}

      <div className="dg-card">
        <div className="dg-bar">
          <span className="dg-eyebrow">Sentivo · Dictogloss</span>
          <span className="dg-step">Step {step + 1} of {STEPS.length}</span>
        </div>

        <h1 className="dg-title">{item.title}</h1>
        <span className="dg-focus">{item.focus}</span>

        {kind === "warmup" && (
          <div className="dg-body">
            <span className="dg-label">Warm-up</span>
            <p className="dg-text">{item.warmup}</p>
          </div>
        )}

        {kind === "preteach" && (
          <div className="dg-body">
            <span className="dg-label">Pre-teach these words</span>
            <div className="dg-chips">
              {item.preteach.map((w) => <span key={w} className="dg-chip">{w}</span>)}
            </div>
          </div>
        )}

        {kind === "listen1" && (
          <div className="dg-body">
            <span className="dg-label">First listening — for the main idea</span>
            <p className="dg-instruction">Read the text aloud once. The student only listens.</p>
            <p className="dg-script">{item.text}</p>
          </div>
        )}

        {kind === "listen2" && (
          <div className="dg-body">
            <span className="dg-label">Second listening — for key words</span>
            <p className="dg-instruction">Read it again. The student writes key words only.</p>
            <p className="dg-script">{item.text}</p>
          </div>
        )}

        {kind === "reconstruct" && (
          <div className="dg-body">
            <span className="dg-label">Reconstruction</span>
            <p className="dg-instruction">The student rebuilds the text from their notes — by speaking or writing.</p>
          </div>
        )}

        {kind === "compare" && (
          <div className="dg-body">
            <span className="dg-label">Compare</span>
            <p className="dg-instruction">Compare with the original. Notice what changed.</p>
            <p className="dg-script">{item.text}</p>
          </div>
        )}

        {kind === "followup" && (
          <div className="dg-body">
            <span className="dg-label">Speaking follow-up</span>
            <p className="dg-text">{item.followup}</p>
          </div>
        )}

        <div className="dg-nav">
          <button type="button" className="dg-btn" onClick={() => setStep((s) => s - 1)} disabled={step === 0}>← Back</button>
          {step + 1 < STEPS.length ? (
            <button type="button" className="dg-btn dg-btn--primary" onClick={() => setStep((s) => s + 1)}>Next →</button>
          ) : (
            <button type="button" className="dg-btn dg-btn--primary" onClick={restart}>Restart ↻</button>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.dg-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.dg-shell * { box-sizing: border-box; }

.dg-back {
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

.dg-card {
  width: 100%;
  max-width: 620px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(197,105,42,0.16);
  padding: clamp(28px, 5vw, 44px);
}

.dg-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.dg-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A15A2E;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}
.dg-step { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #9A93A8; }

.dg-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(24px, 4vw, 32px); color: #2B2A4A; margin: 0 0 6px; }
.dg-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-bottom: 22px; }

.dg-body { min-height: 140px; }
.dg-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #C5692A; margin-bottom: 10px; }
.dg-text { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 19px; color: #2B2A4A; line-height: 1.5; }
.dg-instruction { font-size: 14px; color: #6B5A66; margin-bottom: 14px; }
.dg-script { font-size: 17px; line-height: 1.7; color: #2B2A4A; background: #FBEDE3; border-radius: 14px; padding: 18px 20px; }

.dg-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.dg-chip { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; color: #A15A2E; background: rgba(197,105,42,0.10); border-radius: 999px; padding: 8px 16px; }

.dg-nav { display: flex; justify-content: space-between; margin-top: 28px; }
.dg-btn {
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
.dg-btn:disabled { opacity: 0.4; cursor: default; }
.dg-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E08A4F 0%, #C5692A 100%);
  box-shadow: 0 6px 0 #9C4E1C;
}
.dg-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #9C4E1C; }
`;

import { useState } from "react";

const STEPS = ["intro", "fixIt"];

// Proofreading: a fixed-size, self-contained lesson card (matching the
// site-wide lesson-player convention -- own logo/close button on the card
// itself, no outer PlayerChrome). Title/instructions page, then the flawed
// paragraph with a plain textarea for the student's rewrite -- no answer
// key here anymore, that lives in ProofreadingGuide.jsx for the teacher.
export default function ProofreadingActivity({ item }) {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState("");
  const kind = STEPS[step];

  function exit() {
    window.close();
  }

  function go(delta) {
    setStep((s) => Math.max(0, Math.min(STEPS.length - 1, s + delta)));
  }

  return (
    <div className="pf-wrap">
      <style>{CSS}</style>
      <div className="pf-blob pf-blob--a" />
      <div className="pf-blob pf-blob--b" />

      <div className="pf-card">
        <span className="pf-tape" />
        <button type="button" className="pf-close" onClick={exit} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <div className="pf-bar">
          <span className="pf-brand">
            <img src="/logo-sentivo.png" alt="" className="pf-logo" />
            <span className="pf-brand-word">entivo</span>
          </span>
          <span className="pf-eyebrow">{kind === "intro" ? "Instructions" : "Fix the Mistakes"}</span>
        </div>

        <div className="pf-body">
          {kind === "intro" && (
            <div className="pf-intro">
              <h1 className="pf-title">{item.title}</h1>
              <span className="pf-focus-tag">{item.focus}</span>
              <p className="pf-instructions">
                Read the paragraph on the next page. It has some mistakes in it.
                Find them, then rewrite the whole paragraph correctly in the box.
              </p>
            </div>
          )}

          {kind === "fixIt" && (
            <div className="pf-fixit">
              <p className="pf-hint">Read the text below, then rewrite it correctly in the box.</p>
              <p className="pf-script pf-script--mistakes">{item.mistakes}</p>

              <textarea
                className="pf-textarea"
                placeholder="Type the corrected version here…"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="pf-nav">
          <button type="button" className="pf-btn" onClick={() => go(-1)} disabled={step === 0}>← Back</button>
          <div className="pf-dots">
            {STEPS.map((s, i) => (
              <span key={s} className={`pf-dot ${i === step ? "is-active" : i < step ? "is-done" : ""}`} />
            ))}
          </div>
          {step + 1 < STEPS.length ? (
            <button type="button" className="pf-btn pf-btn--primary" onClick={() => go(1)}>Next →</button>
          ) : (
            <button type="button" className="pf-btn pf-btn--primary" onClick={exit}>Finish ✓</button>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.pf-wrap {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1cm;
  box-sizing: border-box;
  font-family: 'Karla', sans-serif;
  background: #FFF8EF;
  overflow: hidden;
}
.pf-wrap * { box-sizing: border-box; }

.pf-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.pf-blob--a { width: 220px; height: 220px; top: -70px; left: -60px; background: rgba(232,168,61,0.14); }
.pf-blob--b { width: 200px; height: 200px; bottom: -70px; right: -50px; background: rgba(111,207,151,0.12); }

.pf-card {
  position: relative;
  z-index: 1;
  width: 560px;
  height: 460px;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 20px 44px rgba(169,114,10,0.16);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: rotate(-0.6deg);
}
.pf-tape {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 68px; height: 22px; opacity: 0.9; z-index: 3;
  background: repeating-linear-gradient(45deg, #FFD166, #FFD166 6px, #FFE29E 6px, #FFE29E 12px);
}

.pf-close {
  position: absolute; top: 14px; right: 14px; z-index: 4;
  width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  background: rgba(169,114,10,0.10); color: #A9720A;
}

.pf-bar {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 0;
}
.pf-brand { display: flex; align-items: center; gap: 6px; }
.pf-logo { width: 22px; height: 22px; border-radius: 50%; }
.pf-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #4A3F3A; }
.pf-eyebrow {
  font-family: 'Karla', sans-serif; font-size: 11px; font-weight: 800;
  letter-spacing: 0.12em; text-transform: uppercase; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 6px 14px;
  margin-right: 28px;
}

.pf-body { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 36px; display: flex; align-items: center; }

.pf-intro { width: 100%; text-align: center; }
.pf-focus-tag {
  display: inline-block; font-size: 11.5px; font-weight: 700; color: #A9720A;
  background: rgba(232,168,61,0.16); border-radius: 999px; padding: 5px 14px; margin-top: 10px; margin-bottom: 14px;
}
.pf-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 36px; color: #4A3F3A; margin: 0; line-height: 1.05; }
.pf-instructions { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 14px; color: #6B5D52; line-height: 1.55; max-width: 400px; margin: 0 auto; }

.pf-fixit { width: 100%; }
.pf-hint { font-size: 12.5px; font-weight: 500; color: #A9836F; line-height: 1.5; margin: 0 0 10px; }
.pf-script { font-family: 'Karla', sans-serif; font-size: 13.5px; line-height: 1.6; border-radius: 14px; padding: 13px 16px; white-space: pre-line; margin: 0 0 12px; }
.pf-script--mistakes { color: #B3392F; background: #FDEAEA; font-style: italic; }

.pf-textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #FCE4B0;
  border-radius: 14px;
  padding: 14px 16px;
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  color: #4A3F3A;
  line-height: 1.6;
  resize: none;
  background: #FFFDF8;
}
.pf-textarea:focus { outline: none; border-color: #E8A83D; }

.pf-nav {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px 22px;
}
.pf-dots { display: flex; align-items: center; gap: 6px; }
.pf-dot { width: 7px; height: 7px; border-radius: 50%; background: #FCE4B0; }
.pf-dot.is-done { background: #E8A83D; }
.pf-dot.is-active { width: 20px; border-radius: 4px; background: #A9720A; }

.pf-btn {
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 13px;
  border: none;
  border-radius: 14px;
  padding: 11px 22px;
  cursor: pointer;
  background: #FBEDE3;
  color: #A9836F;
}
.pf-btn:disabled { opacity: 0.4; cursor: default; }
.pf-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8A83D 0%, #A9720A 100%);
  box-shadow: 0 4px 0 #7A5209;
}
.pf-btn--primary:active { transform: translateY(3px); box-shadow: 0 1px 0 #7A5209; }
`;

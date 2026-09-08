import { useState } from "react";

// Register Rewrite: a fixed-size, self-contained lesson card (matching
// the Proofreading/Story Making redesign -- own logo baked into the
// card, no outer PlayerChrome). Items can carry either a single
// original/helpfulPhrases (most topics, for now) or a "rounds" array of
// several of those (currently just "Text to a Teacher", as a pilot for
// giving a topic more than one message to rewrite). Hints are hidden by
// default -- the student can reveal them if they want help. Next just
// moves through the rounds; the sample answers live in
// RegisterRewriteGuide.jsx for the teacher, not shown in the player.
export default function RegisterRewriteActivity({ item }) {
  const rounds = item.rounds || [{ original: item.original, helpfulPhrases: item.helpfulPhrases }];
  const total = rounds.length;
  const STEPS = ["intro", ...rounds.map((_, i) => `round-${i}`), "wrapup"];

  const [step, setStep] = useState(0);
  const [drafts, setDrafts] = useState(() => Array(total).fill(""));
  const [hintsShown, setHintsShown] = useState(() => Array(total).fill(false));

  const toFormal = item.direction === "toFormal";
  const kind = STEPS[step];
  const roundIndex = kind.startsWith("round-") ? Number(kind.split("-")[1]) : null;

  function exit() {
    window.close();
  }

  function go(delta) {
    setStep((s) => Math.max(0, Math.min(STEPS.length - 1, s + delta)));
  }

  function setDraftAt(i, value) {
    setDrafts((d) => d.map((v, idx) => (idx === i ? value : v)));
  }

  function toggleHintsAt(i) {
    setHintsShown((h) => h.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className="rr2-wrap">
      <style>{CSS}</style>
      <div className="rr2-blob rr2-blob--a" />
      <div className="rr2-blob rr2-blob--b" />

      <div className="rr2-frame">
        <span className="rr2-paper-back" />
        <span className="rr2-tape" />

        <div className="rr2-card">
          <div className="rr2-bar">
            <span className="rr2-brand">
              <img src="/logo-sentivo.png" alt="" className="rr2-logo" />
              <span className="rr2-brand-word">entivo</span>
              <span className="rr2-brand-sep">·</span>
              <span className="rr2-brand-type">Register Rewrite</span>
            </span>
            {total > 1 && roundIndex !== null && (
              <span className="rr2-round-tag">{roundIndex + 1} / {total}</span>
            )}
          </div>

          <div className="rr2-body">
            {kind === "intro" && (
              <div className="rr2-center">
                <h1 className="rr2-title">{item.title}</h1>
                <div className="rr2-direction-track" data-formal={toFormal}>
                  <span className="rr2-direction-tag rr2-direction-tag--from">{toFormal ? "Casual" : "Formal"}</span>
                  <span className="rr2-direction-arrow">→</span>
                  <span className="rr2-direction-tag rr2-direction-tag--to">{toFormal ? "Formal" : "Casual"}</span>
                </div>
                <p className="rr2-context">{item.context}</p>
                <p className="rr2-instructions">{item.prompt}</p>
              </div>
            )}

            {roundIndex !== null && (
              <div className="rr2-round">
                <div className="rr2-original">
                  <span className="rr2-label">Original</span>
                  <p className="rr2-original-text">{rounds[roundIndex].original}</p>
                </div>

                <div className="rr2-hints-row">
                  <button type="button" className="rr2-hints-toggle" onClick={() => toggleHintsAt(roundIndex)}>
                    {hintsShown[roundIndex] ? "Hide hints" : "Show hints"}
                  </button>
                </div>
                {hintsShown[roundIndex] && (
                  <div className="rr2-phrases">
                    {rounds[roundIndex].helpfulPhrases.map((p) => (
                      <span className="rr2-chip" key={p}>{p}</span>
                    ))}
                  </div>
                )}

                <textarea
                  className="rr2-textarea"
                  placeholder="Write your rewrite here…"
                  value={drafts[roundIndex]}
                  onChange={(e) => setDraftAt(roundIndex, e.target.value)}
                />
              </div>
            )}

            {kind === "wrapup" && (
              <div className="rr2-center">
                <span className="rr2-star">★</span>
                <h2 className="rr2-wrapup-title">Great Job!</h2>
                <p className="rr2-instructions">You practiced rewriting {total > 1 ? `${total} messages` : "a message"} in a different register. See you next time!</p>
              </div>
            )}
          </div>

          <div className="rr2-nav">
            <button type="button" className="rr2-btn" onClick={() => go(-1)} disabled={step === 0}>← Back</button>
            <div className="rr2-dots">
              {STEPS.map((s, i) => (
                <span key={s} className={`rr2-dot ${i === step ? "is-active" : i < step ? "is-done" : ""}`} />
              ))}
            </div>
            {kind === "wrapup" ? (
              <button type="button" className="rr2-btn rr2-btn--primary" onClick={exit}>Finish ✓</button>
            ) : (
              <button type="button" className="rr2-btn rr2-btn--primary" onClick={() => go(1)}>Next →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.rr2-wrap {
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
.rr2-wrap * { box-sizing: border-box; }

.rr2-blob { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; }
.rr2-blob--a { width: 220px; height: 220px; top: -70px; left: -60px; background: rgba(111,207,151,0.14); }
.rr2-blob--b { width: 200px; height: 200px; bottom: -70px; right: -50px; background: rgba(255,138,117,0.12); }

.rr2-frame { position: relative; z-index: 1; width: 580px; height: 480px; flex-shrink: 0; }

.rr2-paper-back {
  position: absolute; inset: 0;
  background: #F3F9F4;
  border-radius: 22px;
  transform: rotate(1.6deg) translate(7px, 9px);
  box-shadow: 0 14px 30px rgba(47,122,80,0.12);
  z-index: 0;
}

.rr2-tape {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 70px; height: 24px; z-index: 4;
  background: repeating-linear-gradient(45deg, #6FCF97, #6FCF97 6px, #A3E4BC 6px, #A3E4BC 12px);
  box-shadow: 0 3px 6px rgba(47,122,80,0.20);
}

.rr2-card {
  position: relative; z-index: 1;
  width: 100%; height: 100%;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(47,122,80,0.10),
    0 10px 18px rgba(47,122,80,0.12),
    0 28px 50px rgba(47,122,80,0.16);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: rotate(-0.6deg);
}

.rr2-bar {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 0;
}
.rr2-brand {
  display: flex; align-items: center; gap: 2px;
  background: rgba(76,175,122,0.14);
  border-radius: 999px;
  padding: 5px 13px 5px 5px;
}
.rr2-logo { width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0; }
.rr2-brand-word { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 14px; color: #2F7A50; margin-left: 4px; }
.rr2-brand-sep { color: #2F7A50; opacity: 0.4; margin: 0 7px; font-weight: 700; }
.rr2-brand-type { font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13.5px; letter-spacing: 0.02em; color: #2F7A50; }
.rr2-round-tag {
  font-family: 'Karla', sans-serif; font-size: 11px; font-weight: 800;
  color: #2F7A50; background: rgba(76,175,122,0.14); border-radius: 999px; padding: 6px 12px;
}

.rr2-body { flex: 1; min-height: 0; overflow-y: auto; padding: 16px 32px; display: flex; align-items: center; }

.rr2-center { width: 100%; text-align: center; }
.rr2-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 34px; color: #4A3F3A; margin: 0 0 12px; line-height: 1.05; }

.rr2-direction-track { display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 14px; }
.rr2-direction-tag {
  font-family: 'Karla', sans-serif; font-size: 11.5px; font-weight: 800;
  letter-spacing: 0.04em; text-transform: uppercase; border-radius: 999px; padding: 5px 12px;
}
.rr2-direction-tag--from { color: #A9836F; background: #F5EEE4; }
.rr2-direction-arrow { color: #D9C7B5; font-size: 13px; }
.rr2-direction-track[data-formal="true"] .rr2-direction-tag--to { color: #2F7A50; background: #DFF3E7; }
.rr2-direction-track[data-formal="false"] .rr2-direction-tag--to { color: #2A6E85; background: #E1F1F6; }

.rr2-context { font-size: 13.5px; font-weight: 600; color: #4A3F3A; margin: 0 0 8px; }
.rr2-instructions { font-family: 'Karla', sans-serif; font-weight: 500; font-size: 13.5px; color: #A9836F; line-height: 1.55; max-width: 420px; margin: 0 auto; }

.rr2-round { width: 100%; }
.rr2-original {
  background: #FFFDF8; border: 1px solid #F5D9CC; border-radius: 12px;
  padding: 14px 16px; margin-bottom: 12px;
}
.rr2-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin-bottom: 6px; }
.rr2-original-text { font-family: 'Karla', sans-serif; font-weight: 600; font-size: 14px; color: #4A3F3A; line-height: 1.5; margin: 0; }

.rr2-hints-row { display: flex; justify-content: center; margin-bottom: 8px; }
.rr2-hints-toggle {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 11.5px;
  color: #2F7A50; background: rgba(76,175,122,0.14); border: none; border-radius: 999px;
  padding: 6px 14px; cursor: pointer;
}
.rr2-phrases { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; margin-bottom: 10px; }
.rr2-chip {
  font-family: 'Karla', sans-serif; font-weight: 700; font-size: 11.5px;
  color: #2F7A50; background: #DFF3E7; border-radius: 999px; padding: 6px 12px;
}

.rr2-textarea {
  width: 100%; min-height: 100px;
  border: 1px solid #C3EEDD; border-radius: 14px; padding: 12px 14px;
  font-family: 'Karla', sans-serif; font-size: 13.5px; color: #4A3F3A; line-height: 1.6;
  resize: none; background: #F2FBF6;
}
.rr2-textarea:focus { outline: none; border-color: #4CAF7A; }

.rr2-star { display: inline-block; font-size: 32px; color: #4CAF7A; margin-bottom: 6px; }
.rr2-wrapup-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: 32px; color: #4A3F3A; margin: 0 0 8px; }

.rr2-nav {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 24px 20px;
}
.rr2-dots { display: flex; align-items: center; gap: 6px; }
.rr2-dot { width: 7px; height: 7px; border-radius: 50%; background: #DFF3E7; }
.rr2-dot.is-done { background: #6FCF97; }
.rr2-dot.is-active { width: 20px; border-radius: 4px; background: #2F7A50; }

.rr2-btn {
  font-family: 'Karla', sans-serif; font-weight: 800; font-size: 13px;
  border: none; border-radius: 14px; padding: 11px 20px; cursor: pointer;
  background: #FBEDE3; color: #A9836F;
}
.rr2-btn:disabled { opacity: 0.4; cursor: default; }
.rr2-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #6FCF97 0%, #2F7A50 100%);
  box-shadow: 0 4px 0 #1F5A3A;
}
.rr2-btn--primary:active { transform: translateY(3px); box-shadow: 0 1px 0 #1F5A3A; }
`;

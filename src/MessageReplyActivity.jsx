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

  const initial = item.from.trim().charAt(0).toUpperCase();

  return (
    <div className="mr-shell">
      <style>{CSS}</style>

      <div className="mr-card">
        <span className="mr-tape" />
        <div className="mr-bar">
          <span className="mr-eyebrow">Sentivo · Message Reply</span>
        </div>

        <h1 className="mr-title">{item.title}</h1>
        <span className="mr-focus">{item.focus}</span>

        <div className="mr-phone">
          <div className="mr-phone-header">
            <span className="mr-avatar">{initial}</span>
            <div className="mr-phone-header-text">
              <span className="mr-from">{item.from}</span>
              <span className="mr-context">{item.context}</span>
            </div>
          </div>

          <div className="mr-phone-thread">
            <div className="mr-bubble mr-bubble--in">
              <p className="mr-bubble-text">{item.incoming}</p>
            </div>

            {sent && (
              <div className="mr-bubble mr-bubble--mine">
                <p className="mr-bubble-text">{draft}</p>
              </div>
            )}

            {revealed && (
              <div className="mr-bubble mr-bubble--sample">
                <span className="mr-label mr-label--sample">Sample reply</span>
                <p className="mr-bubble-text">{item.sample}</p>
              </div>
            )}
          </div>

          {!sent && (
            <div className="mr-suggestions">
              <span className="mr-suggestions-label">Try to include:</span>
              <div className="mr-suggestions-row">
                {item.mustInclude.map((c) => (
                  <span className="mr-chip" key={c}>{c}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mr-compose">
            {!sent ? (
              <>
                <textarea
                  className="mr-textarea"
                  placeholder={item.prompt}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  rows={1}
                />
                <button type="button" className="mr-send" onClick={send} disabled={!draft.trim()} aria-label="Send">↑</button>
              </>
            ) : !revealed ? (
              <button type="button" className="mr-compose-btn" onClick={() => setRevealed(true)}>Show sample reply →</button>
            ) : (
              <button type="button" className="mr-compose-btn" disabled>Sample shown</button>
            )}
          </div>
        </div>

        <div className="mr-nav">
          <button type="button" className="mr-btn" onClick={restart}>Restart ↻</button>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Karla:wght@500;600;700;800&display=swap');

.mr-shell {
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
.mr-shell * { box-sizing: border-box; }
.mr-shell::before, .mr-shell::after {
  content: ""; position: absolute; border-radius: 50%; pointer-events: none;
}
.mr-shell::before { width: 150px; height: 150px; background: rgba(255,138,117,0.16); top: -40px; left: -30px; }
.mr-shell::after { width: 110px; height: 110px; background: rgba(111,207,151,0.14); bottom: -20px; right: 6%; }

.mr-card {
  position: relative;
  width: 100%;
  max-width: 640px;
  background: #FFFFFF;
  border-radius: 22px;
  box-shadow: 0 20px 44px rgba(184,57,31,0.16);
  padding: clamp(28px, 5vw, 44px);
  transform: rotate(0.5deg);
  z-index: 1;
}
.mr-tape {
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%) rotate(-3deg);
  width: 68px; height: 22px; opacity: 0.9;
  background: repeating-linear-gradient(45deg, #FF8A75, #FF8A75 6px, #FFB3A3 6px, #FFB3A3 12px);
}

.mr-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.mr-eyebrow {
  font-family: 'Karla', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B8391F;
  background: rgba(255,138,117,0.16);
  border-radius: 999px;
  padding: 5px 14px;
}

.mr-title { font-family: 'Caveat', cursive; font-weight: 700; font-size: clamp(28px, 4.2vw, 36px); color: #4A3F3A; margin: 0 0 4px; }
.mr-focus { display: inline-block; font-size: 12.5px; font-weight: 600; color: #A9836F; margin-bottom: 20px; }

.mr-phone {
  border-radius: 20px;
  overflow: hidden;
  background: #FBF3EC;
  border: 1px solid #F5D9CC;
  box-shadow: inset 0 1px 0 #FFFFFF;
}

.mr-phone-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: #FFFFFF;
  border-bottom: 1px solid #F5D9CC;
}
.mr-avatar {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%);
}
.mr-phone-header-text { display: flex; flex-direction: column; min-width: 0; }
.mr-from { font-family: 'Karla', sans-serif; font-weight: 700; font-size: 13.5px; color: #4A3F3A; }
.mr-context { font-size: 11px; font-weight: 500; color: #A9836F; }

.mr-phone-thread { display: flex; flex-direction: column; gap: 10px; padding: 16px 16px 6px; min-height: 120px; }
.mr-bubble { position: relative; max-width: 82%; border-radius: 18px; padding: 11px 15px; }
.mr-bubble--in { align-self: flex-start; background: #FFFFFF; }
.mr-bubble--in::before {
  content: "";
  position: absolute;
  bottom: 8px;
  left: -5px;
  width: 12px;
  height: 12px;
  background: #FFFFFF;
  transform: rotate(45deg);
  border-radius: 3px;
  z-index: -1;
}
.mr-bubble--mine { align-self: flex-end; background: #B8391F; }
.mr-bubble--mine::before {
  content: "";
  position: absolute;
  bottom: 8px;
  right: -5px;
  width: 12px;
  height: 12px;
  background: #B8391F;
  transform: rotate(45deg);
  border-radius: 3px;
  z-index: -1;
}
.mr-bubble--sample { align-self: flex-end; background: #E4F8EC; }
.mr-bubble--sample::before {
  content: "";
  position: absolute;
  bottom: 8px;
  right: -5px;
  width: 12px;
  height: 12px;
  background: #E4F8EC;
  transform: rotate(45deg);
  border-radius: 3px;
  z-index: -1;
}
.mr-bubble-text { font-family: 'Karla', sans-serif; font-size: 14.5px; line-height: 1.5; margin: 0; }
.mr-bubble--in .mr-bubble-text { color: #4A3F3A; }
.mr-bubble--mine .mr-bubble-text { color: #FFFFFF; }
.mr-bubble--sample .mr-bubble-text { color: #1F7A47; }
.mr-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 5px; }
.mr-label--sample { color: #1F7A47; }

.mr-suggestions { padding: 10px 16px 4px; }
.mr-suggestions-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #A9836F; margin-bottom: 8px; }
.mr-suggestions-row { display: flex; flex-wrap: wrap; gap: 7px; }
.mr-chip {
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #B8391F;
  background: #FFE1DA;
  border: 1px solid #FFD9CC;
  border-radius: 999px;
  padding: 5px 12px;
}

.mr-compose { display: flex; align-items: flex-end; gap: 8px; padding: 12px 14px; background: #FFFFFF; border-top: 1px solid #F5D9CC; }
.mr-textarea {
  flex: 1;
  min-height: 40px;
  max-height: 100px;
  border: 1px solid #F5D9CC;
  border-radius: 20px;
  padding: 10px 16px;
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  color: #4A3F3A;
  line-height: 1.4;
  resize: none;
  overflow-y: auto;
  background: #FBF3EC;
}
.mr-textarea:focus { outline: none; border-color: #FF8A75; background: #FFFFFF; }
.mr-send {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%);
}
.mr-send:disabled { opacity: 0.4; cursor: default; }
.mr-compose-btn {
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-family: 'Karla', sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF8A75 0%, #B8391F 100%);
}
.mr-compose-btn:disabled { opacity: 0.5; cursor: default; }

.mr-nav { display: flex; justify-content: flex-start; margin-top: 20px; }
.mr-btn {
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
.mr-btn:disabled { opacity: 0.5; cursor: default; }
`;

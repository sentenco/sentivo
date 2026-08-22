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
.mr-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-bottom: 20px; }

.mr-phone {
  border-radius: 20px;
  overflow: hidden;
  background: #EDEEF3;
  border: 1px solid #E2E3EA;
  box-shadow: inset 0 1px 0 #FFFFFF;
}

.mr-phone-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: #FFFFFF;
  border-bottom: 1px solid #ECECEC;
}
.mr-avatar {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8825F 0%, #D9542E 100%);
}
.mr-phone-header-text { display: flex; flex-direction: column; min-width: 0; }
.mr-from { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; color: #2B2A4A; }
.mr-context { font-size: 11px; color: #9A93A8; }

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
.mr-bubble--mine { align-self: flex-end; background: #D9542E; }
.mr-bubble--mine::before {
  content: "";
  position: absolute;
  bottom: 8px;
  right: -5px;
  width: 12px;
  height: 12px;
  background: #D9542E;
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
.mr-bubble-text { font-size: 14.5px; line-height: 1.5; margin: 0; }
.mr-bubble--in .mr-bubble-text { color: #2B2A4A; }
.mr-bubble--mine .mr-bubble-text { color: #FFFFFF; }
.mr-bubble--sample .mr-bubble-text { color: #1F7A47; }
.mr-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 5px; }
.mr-label--sample { color: #1F7A47; }

.mr-suggestions { padding: 10px 16px 4px; }
.mr-suggestions-label { display: block; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #B0839A; margin-bottom: 8px; }
.mr-suggestions-row { display: flex; flex-wrap: wrap; gap: 7px; }
.mr-chip {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #A13B1E;
  background: #FBE4DC;
  border: 1px solid #F3C4B0;
  border-radius: 999px;
  padding: 5px 12px;
}

.mr-compose { display: flex; align-items: flex-end; gap: 8px; padding: 12px 14px; background: #FFFFFF; border-top: 1px solid #ECECEC; }
.mr-textarea {
  flex: 1;
  min-height: 40px;
  max-height: 100px;
  border: 1px solid #E2E3EA;
  border-radius: 20px;
  padding: 10px 16px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: #2B2A4A;
  line-height: 1.4;
  resize: none;
  overflow-y: auto;
  background: #F5F5F8;
}
.mr-textarea:focus { outline: none; border-color: #D9542E; background: #FFFFFF; }
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
  background: linear-gradient(135deg, #E8825F 0%, #D9542E 100%);
}
.mr-send:disabled { opacity: 0.4; cursor: default; }
.mr-compose-btn {
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  background: linear-gradient(135deg, #E8825F 0%, #D9542E 100%);
}
.mr-compose-btn:disabled { opacity: 0.5; cursor: default; }

.mr-nav { display: flex; justify-content: flex-start; margin-top: 20px; }
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
`;

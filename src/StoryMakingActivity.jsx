import { useMemo, useState } from "react";

function countSentences(text) {
  const matches = text.trim().match(/[^.!?]+[.!?]+/g);
  return matches ? matches.length : (text.trim() ? 1 : 0);
}

// Flat, rounded-shape illustrations used until a real generated picture is
// wired in via round.image. "bonus" is a neutral placeholder shared by every
// round-2 slot that doesn't have bespoke art yet.
function StoryScene({ name }) {
  const scenes = {
    park: (
      <>
        <rect width="320" height="200" rx="20" fill="#DCEEDD" />
        <circle cx="270" cy="42" r="24" fill="#FFC857" />
        <path d="M0 150 Q80 120 160 148 T320 140 V200 H0 Z" fill="#A9D8AC" />
        <path d="M70 150 C70 110 110 110 110 150 Z" fill="#4C9A5D" />
        <rect x="86" y="150" width="8" height="26" fill="#8A6748" />
        <path d="M220 150 C220 100 270 100 270 150 Z" fill="#3E8A50" />
        <rect x="240" y="150" width="8" height="26" fill="#8A6748" />
        <rect x="150" y="158" width="46" height="10" rx="4" fill="#8A6748" />
        <circle cx="150" cy="158" r="6" fill="#8A6748" />
        <circle cx="196" cy="158" r="6" fill="#8A6748" />
        <circle cx="168" cy="132" r="10" fill="#FF6B4A" />
      </>
    ),
    lostPuppy: (
      <>
        <rect width="320" height="200" rx="20" fill="#EAE6F5" />
        <path d="M0 160 H320 V200 H0 Z" fill="#C9C2E6" />
        <rect x="20" y="60" width="70" height="100" rx="6" fill="#F3EEE6" />
        <rect x="230" y="40" width="70" height="120" rx="6" fill="#F3EEE6" />
        <ellipse cx="150" cy="168" rx="26" ry="8" fill="#B3AAD6" opacity="0.5" />
        <ellipse cx="150" cy="150" rx="20" ry="14" fill="#D9A066" />
        <circle cx="132" cy="140" r="12" fill="#D9A066" />
        <path d="M124 130 q-6 -14 4 -14 q6 8 4 16 Z" fill="#D9A066" />
        <path d="M140 130 q6 -14 -4 -14 q-6 8 -4 16 Z" fill="#D9A066" />
        <circle cx="128" cy="140" r="1.6" fill="#2B2A4A" />
        <circle cx="136" cy="140" r="1.6" fill="#2B2A4A" />
        <ellipse cx="200" cy="150" rx="10" ry="26" fill="#7C5CFC" />
        <circle cx="200" cy="118" r="12" fill="#F2C6A0" />
      </>
    ),
    party: (
      <>
        <rect width="320" height="200" rx="20" fill="#FDEDE6" />
        <rect x="0" y="150" width="320" height="50" fill="#F6D8C8" />
        <circle cx="60" cy="55" r="16" fill="#FF6B4A" />
        <rect x="59" y="71" width="2" height="30" fill="#C77" />
        <circle cx="110" cy="40" r="16" fill="#7C5CFC" />
        <rect x="109" y="56" width="2" height="34" fill="#C77" />
        <circle cx="250" cy="50" r="16" fill="#16BFAE" />
        <rect x="249" y="66" width="2" height="30" fill="#C77" />
        <circle cx="205" cy="35" r="16" fill="#FFB648" />
        <rect x="204" y="51" width="2" height="34" fill="#C77" />
        <path d="M120 150 L200 150 L190 100 L130 100 Z" fill="#FFFFFF" stroke="#F2A365" strokeWidth="3" />
        <circle cx="140" cy="118" r="4" fill="#FF6B4A" />
        <circle cx="160" cy="112" r="4" fill="#7C5CFC" />
        <circle cx="180" cy="120" r="4" fill="#16BFAE" />
        <rect x="150" y="150" width="20" height="18" fill="#E08A4F" />
        <path d="M150 150 l10 -14 l10 14 Z" fill="#FFD37A" />
      </>
    ),
    rain: (
      <>
        <rect width="320" height="200" rx="20" fill="#DDE8EF" />
        <rect x="0" y="160" width="320" height="40" fill="#B9CDDA" />
        <ellipse cx="150" cy="175" rx="26" ry="8" fill="#8FA9BB" />
        <g stroke="#9BB6C6" strokeWidth="3" strokeLinecap="round">
          <line x1="40" y1="20" x2="30" y2="50" />
          <line x1="90" y1="10" x2="80" y2="45" />
          <line x1="230" y1="20" x2="220" y2="55" />
          <line x1="270" y1="40" x2="262" y2="70" />
        </g>
        <path d="M110 90 Q130 65 160 78 Q175 60 200 78 Q225 70 225 95 Q225 108 205 108 L125 108 Q108 108 110 90 Z" fill="#F3EEE6" />
        <path d="M150 110 Q160 130 150 148" stroke="#7C5CFC" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M60 120 L110 100 L130 175 L58 190 Z" fill="#FF6B4A" />
        <circle cx="95" cy="95" r="5" fill="#8A6748" />
      </>
    ),
    neighbor: (
      <>
        <rect width="320" height="200" rx="20" fill="#EAF1E9" />
        <rect x="0" y="160" width="320" height="40" fill="#CFE0CC" />
        <rect x="30" y="90" width="90" height="70" rx="4" fill="#F3EEE6" />
        <path d="M25 90 L75 55 L125 90 Z" fill="#C5692A" />
        <rect x="65" y="120" width="20" height="40" fill="#8A6748" />
        <rect x="180" y="70" width="110" height="70" rx="8" fill="#FFB648" />
        <rect x="188" y="80" width="30" height="24" rx="3" fill="#FFFFFF" opacity="0.7" />
        <circle cx="260" cy="118" r="14" fill="#F3EEE6" />
        <rect x="180" y="140" width="110" height="10" fill="#2B2A4A" opacity="0.15" />
        <rect x="130" y="150" width="18" height="14" rx="2" fill="#8A6748" />
        <rect x="152" y="150" width="18" height="14" rx="2" fill="#8A6748" />
      </>
    ),
    market: (
      <>
        <rect width="320" height="200" rx="20" fill="#FBF0DC" />
        <rect x="0" y="165" width="320" height="35" fill="#E9D4A6" />
        <path d="M40 70 H280 L260 40 H60 Z" fill="#FF6B4A" />
        <rect x="40" y="70" width="240" height="10" fill="#C5692A" />
        <rect x="55" y="100" width="210" height="60" rx="4" fill="#F3EEE6" />
        <circle cx="90" cy="120" r="10" fill="#E5484D" />
        <circle cx="115" cy="122" r="10" fill="#E5484D" />
        <circle cx="150" cy="118" r="9" fill="#4C9A5D" />
        <circle cx="170" cy="122" r="9" fill="#4C9A5D" />
        <path d="M200 112 h26 l-4 22 h-18 Z" fill="#FFB648" />
        <path d="M235 110 h20 l-3 24 h-14 Z" fill="#FF8A4C" />
      </>
    ),
    interview: (
      <>
        <rect width="320" height="200" rx="20" fill="#E9EAF5" />
        <rect x="0" y="160" width="320" height="40" fill="#CBCEE8" />
        <rect x="90" y="120" width="140" height="12" rx="6" fill="#8A84A3" />
        <rect x="90" y="132" width="140" height="40" rx="4" fill="#F3EEE6" />
        <circle cx="120" cy="90" r="18" fill="#F2C6A0" />
        <rect x="102" y="108" width="36" height="30" rx="6" fill="#2B2A4A" />
        <circle cx="210" cy="90" r="18" fill="#D9A066" />
        <rect x="192" y="108" width="36" height="30" rx="6" fill="#7C5CFC" />
        <rect x="150" y="150" width="20" height="8" rx="4" fill="#FFB648" />
      </>
    ),
    airport: (
      <>
        <rect width="320" height="200" rx="20" fill="#E4EEF6" />
        <rect x="0" y="165" width="320" height="35" fill="#C7DAE8" />
        <path d="M40 110 L180 90 L260 60 L280 68 L210 100 L260 112 L240 122 L190 112 L110 132 Z" fill="#7C5CFC" />
        <circle cx="255" cy="100" r="3" fill="#FFFFFF" />
        <rect x="60" y="150" width="24" height="30" rx="4" fill="#FF6B4A" />
        <rect x="90" y="145" width="24" height="35" rx="4" fill="#16BFAE" />
        <circle cx="72" cy="184" r="4" fill="#2B2A4A" />
        <circle cx="102" cy="184" r="4" fill="#2B2A4A" />
        <circle cx="200" cy="45" r="16" fill="#FFFFFF" opacity="0.7" />
        <circle cx="230" cy="55" r="10" fill="#FFFFFF" opacity="0.7" />
      </>
    ),
    bonus: (
      <>
        <rect width="320" height="200" rx="20" fill="#F3EEE6" />
        <rect x="60" y="52" width="200" height="130" rx="12" fill="#FFFFFF" stroke="#E0D6C4" strokeWidth="3" />
        <circle cx="106" cy="94" r="14" fill="#FFD37A" />
        <path d="M76 156 L130 108 L166 140 L200 104 L244 156 Z" fill="#C7DAB0" />
        <path d="M60 182 h200" stroke="#E0D6C4" strokeWidth="3" strokeDasharray="1 8" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg className="sm-scene" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
      {scenes[name] || <rect width="320" height="200" rx="20" fill="#EDE7F6" />}
    </svg>
  );
}

export default function StoryMakingActivity({ item, onBack, backLabel = "← Topics" }) {
  const rounds = item.rounds && item.rounds.length ? item.rounds : [item];
  const [roundIndex, setRoundIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [revealed, setRevealed] = useState(false);
  const round = rounds[roundIndex];
  const isLastRound = roundIndex === rounds.length - 1;
  const sentenceCount = useMemo(() => countSentences(draft), [draft]);

  function restart() {
    setDraft("");
    setRevealed(false);
  }

  function nextRound() {
    setRoundIndex((i) => i + 1);
    setDraft("");
    setRevealed(false);
  }

  return (
    <div className="sm-shell">
      <style>{CSS}</style>

      {onBack && (
        <button type="button" className="sm-back" onClick={onBack}>{backLabel}</button>
      )}

      <div className="sm-card">
        <div className="sm-bar">
          <span className="sm-eyebrow">Sentivo · Story Making</span>
          <span className="sm-count" data-full={sentenceCount >= 5}>{sentenceCount} / 5 sentences</span>
        </div>

        <h1 className="sm-title">{item.title}</h1>
        <span className="sm-focus">{item.focus}</span>
        {rounds.length > 1 && (
          <span className="sm-round-tag">{roundIndex === 0 ? "Story 1 of 2" : "Story 2 of 2 · Bonus"}</span>
        )}

        <div className="sm-layout">
          {round.image ? (
            <img className="sm-scene" src={round.image} alt="" />
          ) : (
            <StoryScene name={round.scene} />
          )}
          <div className="sm-side">
            <p className="sm-prompt">{round.prompt}</p>
            <div className="sm-words">
              {round.words.map((w) => (
                <span className="sm-word" key={w}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        <textarea
          className="sm-textarea"
          placeholder="Write your 5-sentence story here…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={5}
        />

        {revealed && (
          <div className="sm-sample">
            <span className="sm-label">Sample story</span>
            <p className="sm-sample-text">{round.sample}</p>
          </div>
        )}

        <div className="sm-nav">
          <button type="button" className="sm-btn" onClick={restart}>Restart ↻</button>
          {revealed && !isLastRound ? (
            <button type="button" className="sm-btn sm-btn--primary" onClick={nextRound}>Bonus story →</button>
          ) : (
            <button type="button" className="sm-btn sm-btn--primary" onClick={() => setRevealed(true)} disabled={revealed}>
              {revealed ? "Sample shown" : "Show sample →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.sm-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.sm-shell * { box-sizing: border-box; }

.sm-back {
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

.sm-card {
  width: 100%;
  max-width: 680px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(197,105,42,0.16);
  padding: clamp(26px, 4.4vw, 40px);
}

.sm-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.sm-eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A15A2E;
  background: rgba(197,105,42,0.10);
  border-radius: 999px;
  padding: 5px 14px;
}
.sm-count { font-size: 11.5px; font-weight: 800; letter-spacing: 0.03em; color: #9A93A8; }
.sm-count[data-full="true"] { color: #1F9D6E; }

.sm-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(22px, 3.6vw, 28px); color: #2B2A4A; margin: 0 0 6px; }
.sm-focus { display: inline-block; font-size: 12.5px; color: #7A7391; margin-right: 10px; }
.sm-round-tag {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1F9D6E;
  background: #E4F8EC;
  border-radius: 999px;
  padding: 3px 10px;
}
.sm-focus + .sm-round-tag { margin-bottom: 18px; }

.sm-layout { display: grid; grid-template-columns: 180px 1fr; gap: 18px; align-items: start; margin: 14px 0 16px; }
.sm-scene { width: 100%; aspect-ratio: 8 / 5; object-fit: cover; border-radius: 16px; display: block; box-shadow: 0 8px 18px rgba(43,42,74,0.10); }
.sm-side { display: flex; flex-direction: column; gap: 12px; }
.sm-prompt { font-size: 13.5px; color: #5C6873; line-height: 1.5; margin: 0; }
.sm-words { display: flex; flex-wrap: wrap; gap: 8px; }
.sm-word {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #A15A2E;
  background: #FBEDE3;
  border-radius: 999px;
  padding: 6px 13px;
}

.sm-textarea {
  width: 100%;
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
.sm-textarea:focus { outline: none; border-color: #C5692A; }

.sm-sample { margin-top: 16px; background: #E4F8EC; border-radius: 14px; padding: 16px 18px; }
.sm-label { display: block; font-size: 12px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #1F7A47; margin-bottom: 8px; }
.sm-sample-text { font-size: 14.5px; color: #1F7A47; line-height: 1.6; margin: 0; }

.sm-nav { display: flex; justify-content: space-between; margin-top: 22px; }
.sm-btn {
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
.sm-btn:disabled { opacity: 0.5; cursor: default; }
.sm-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #E08A4F 0%, #C5692A 100%);
  box-shadow: 0 6px 0 #9C4E1C;
}
.sm-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #9C4E1C; }

@media (max-width: 480px) {
  .sm-layout { grid-template-columns: 1fr; }
}
`;

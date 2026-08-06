import { useState } from "react";

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const FOLLOW_UPS = [
  "Why is it the odd one out?",
  "What do the other three words have in common?",
  "Make a sentence with one of the other words.",
];

// Odd One Out: tap the 1 word (of 4) that doesn't belong.
// Item shape: { words: [4], odd }
export default function OddOneOutGame({ title, items }) {
  const [phase, setPhase] = useState("start"); // "start" | "playing" | "done"
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [runOrder, setRunOrder] = useState(items);
  const [followUp, setFollowUp] = useState(null);

  const n = runOrder.length;
  const item = runOrder[index];

  function start() {
    setRunOrder(shuffled(items));
    setIndex(0);
    setScore(0);
    setPicked(null);
    setFollowUp(null);
    setPhase("playing");
  }

  function pick(word) {
    if (picked) return;
    setPicked(word);
    if (word === item.odd) {
      setScore((s) => s + 1);
      setFollowUp(FOLLOW_UPS[Math.floor(Math.random() * FOLLOW_UPS.length)]);
    } else {
      setFollowUp(null);
    }
  }

  function next() {
    if (index + 1 >= n) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setPicked(null);
      setFollowUp(null);
    }
  }

  return (
    <div className="oo-shell">
      <style>{CSS}</style>

      {phase === "start" && (
        <div className="oo-card oo-start">
          <span className="oo-eyebrow">Sentivo · Vocabulary</span>
          <h1 className="oo-title">{title}</h1>
          <p className="oo-blurb">Tap the word that doesn't belong. 15 rounds, one at a time.</p>
          <button type="button" className="oo-btn oo-btn--primary" onClick={start}>Start ▶</button>
        </div>
      )}

      {phase === "playing" && item && (
        <div className="oo-card oo-play">
          <div className="oo-bar">
            <span className="oo-progress">Round {index + 1} of {n}</span>
            <span className="oo-score">Score {score}</span>
          </div>

          <p className="oo-instruction">Which word doesn't belong?</p>

          <div className="oo-tiles">
            {item.words.map((word) => {
              const isPicked = picked === word;
              const isOdd = word === item.odd;
              let state = "";
              if (picked) {
                if (isOdd) state = "is-correct";
                else if (isPicked) state = "is-incorrect";
              }
              return (
                <button
                  key={word}
                  type="button"
                  className={`oo-tile ${state}`}
                  onClick={() => pick(word)}
                  disabled={!!picked}
                >
                  {word}
                </button>
              );
            })}
          </div>

          {picked && (
            <div className="oo-footer">
              <span className={`oo-feedback ${picked === item.odd ? "is-correct" : "is-incorrect"}`}>
                {picked === item.odd ? "Correct! 🎉" : `Not quite — "${item.odd}" is the odd one out.`}
              </span>
              {item.explanation && <span className="oo-explanation">{item.explanation}</span>}
              {followUp && <span className="oo-followup">💬 {followUp}</span>}
              <button type="button" className="oo-btn oo-btn--primary" onClick={next}>
                {index + 1 >= n ? "See score →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "done" && (
        <div className="oo-card oo-done">
          <span className="oo-eyebrow">Sentivo · Vocabulary</span>
          <div className="oo-done-emoji">{score === n ? "🏆" : score >= n * 0.7 ? "🎉" : score >= n * 0.4 ? "👍" : "💪"}</div>
          <h1 className="oo-title">{score} / {n}</h1>
          <p className="oo-blurb">
            {score === n ? "Perfect score!" : score >= n * 0.7 ? "Great job!" : score >= n * 0.4 ? "Nice work — keep practicing." : "Good try — play again to improve."}
          </p>
          <button type="button" className="oo-btn oo-btn--primary" onClick={start}>Play Again ↻</button>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.oo-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.oo-shell * { box-sizing: border-box; }

.oo-card {
  width: 100%;
  max-width: 560px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(180,101,15,0.16);
  padding: clamp(28px, 5vw, 44px);
  text-align: center;
}

.oo-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B4650F;
  background: rgba(180,101,15,0.10);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}

.oo-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(30px, 5vw, 44px); color: #2B2A4A; margin: 0 0 10px; }
.oo-blurb { font-size: 14.5px; line-height: 1.6; color: #7A7391; max-width: 400px; margin: 0 auto 26px; }

.oo-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  padding: 13px 28px;
  cursor: pointer;
}
.oo-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #FBBF24 0%, #D97706 100%);
  box-shadow: 0 6px 0 #A85B04;
}
.oo-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #A85B04; }

.oo-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.oo-progress { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #9A93A8; }
.oo-score { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: #B4650F; background: rgba(180,101,15,0.10); padding: 5px 12px; border-radius: 999px; }

.oo-instruction { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #B8AFCB; margin: 0 0 18px; }

.oo-tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.oo-tile {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2B2A4A;
  text-transform: capitalize;
  background: #FFF7ED;
  border: 2px solid #FDE2B8;
  border-radius: 14px;
  padding: 18px 12px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}
.oo-tile:hover:not(:disabled) { background: #FEEDD3; transform: translateY(-2px); }
.oo-tile:disabled { cursor: default; }
.oo-tile.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.oo-tile.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.oo-footer { margin-top: 22px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.oo-feedback { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; }
.oo-feedback.is-correct { color: #1F7A47; }
.oo-feedback.is-incorrect { color: #B3392F; }
.oo-explanation { font-size: 13px; color: #7A6B4E; font-style: italic; max-width: 400px; }
.oo-followup { font-size: 13px; color: #6B5A66; background: #F5F3FF; border-radius: 12px; padding: 8px 14px; max-width: 380px; }

.oo-done-emoji { font-size: 48px; margin-bottom: 4px; }

@media (max-width: 480px) {
  .oo-tiles { grid-template-columns: 1fr; }
}
`;

import { useMemo, useState } from "react";

function shuffled(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generic one-on-one "pick the matching word" quiz engine. Data-driven --
// pass a title, instruction line, and a data set shaped like
// [{ word, choices: [4], correct }]. Used for Synonyms, Antonyms, and any
// future word-choice game under Vocabulary.
export default function WordChoiceGame({ title, instruction, data, onBack }) {
  const [phase, setPhase] = useState("start"); // "start" | "playing" | "done"
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [runOrder, setRunOrder] = useState(data);

  const n = runOrder.length;
  const q = runOrder[index];
  const choiceOrder = useMemo(() => (q ? shuffled(q.choices) : []), [q]);

  function start() {
    setRunOrder(shuffled(data));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setPhase("playing");
  }

  function pick(choice) {
    if (selected) return;
    setSelected(choice);
    if (choice === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= n) {
      setPhase("done");
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="syn-shell">
      <style>{CSS}</style>

      {onBack && (
        <button type="button" className="syn-back" onClick={onBack}>← Games</button>
      )}

      {phase === "start" && (
        <div className="syn-card syn-start">
          <span className="syn-eyebrow">Sentivo · Vocabulary</span>
          <h1 className="syn-title">{title}</h1>
          <p className="syn-blurb">{instruction} 10 questions, one at a time.</p>
          <button type="button" className="syn-btn syn-btn--primary" onClick={start}>Start ▶</button>
        </div>
      )}

      {phase === "playing" && q && (
        <div className="syn-card syn-play">
          <div className="syn-bar">
            <span className="syn-progress">Question {index + 1} of {n}</span>
            <span className="syn-score">Score {score}</span>
          </div>

          <p className="syn-instruction">{instruction}</p>
          <h2 className="syn-word">{q.word}</h2>

          <div className="syn-choices">
            {choiceOrder.map((choice) => {
              const isSelected = selected === choice;
              const isCorrectChoice = choice === q.correct;
              let state = "";
              if (selected) {
                if (isCorrectChoice) state = "is-correct";
                else if (isSelected) state = "is-incorrect";
              }
              return (
                <button
                  key={choice}
                  type="button"
                  className={`syn-choice ${state}`}
                  onClick={() => pick(choice)}
                  disabled={!!selected}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="syn-footer">
              <span className={`syn-feedback ${selected === q.correct ? "is-correct" : "is-incorrect"}`}>
                {selected === q.correct ? "Correct! 🎉" : `Not quite — the answer is "${q.correct}".`}
              </span>
              <button type="button" className="syn-btn syn-btn--primary" onClick={next}>
                {index + 1 >= n ? "See score →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "done" && (
        <div className="syn-card syn-done">
          <span className="syn-eyebrow">Sentivo · Vocabulary</span>
          <div className="syn-done-emoji">{score === n ? "🏆" : score >= n * 0.7 ? "🎉" : score >= n * 0.4 ? "👍" : "💪"}</div>
          <h1 className="syn-title">{score} / {n}</h1>
          <p className="syn-blurb">
            {score === n ? "Perfect score!" : score >= n * 0.7 ? "Great job!" : score >= n * 0.4 ? "Nice work — keep practicing." : "Good try — play again to improve."}
          </p>
          <button type="button" className="syn-btn syn-btn--primary" onClick={start}>Play Again ↻</button>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.syn-shell {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 3vw, 32px);
  font-family: 'Quicksand', sans-serif;
}
.syn-shell * { box-sizing: border-box; }

.syn-back {
  position: absolute;
  top: clamp(8px, 2vw, 20px);
  left: clamp(8px, 2vw, 20px);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #7C5CFC;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 4px;
}

.syn-card {
  width: 100%;
  max-width: 560px;
  background: #FFFFFF;
  border-radius: 24px;
  box-shadow: 0 20px 44px rgba(124,92,252,0.16);
  padding: clamp(28px, 5vw, 44px);
  text-align: center;
}

.syn-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #D6396F;
  background: rgba(214,57,111,0.10);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}

.syn-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(30px, 5vw, 44px); color: #2B2A4A; margin: 0 0 10px; }
.syn-blurb { font-size: 14.5px; line-height: 1.6; color: #7A7391; max-width: 400px; margin: 0 auto 26px; }

.syn-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  padding: 13px 28px;
  cursor: pointer;
}
.syn-btn--primary {
  color: #FFFFFF;
  background: linear-gradient(135deg, #A78BFA 0%, #7C5CFC 100%);
  box-shadow: 0 6px 0 #5A3FD6;
}
.syn-btn--primary:active { transform: translateY(3px); box-shadow: 0 3px 0 #5A3FD6; }

.syn-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.syn-progress { font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #9A93A8; }
.syn-score { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: #7C5CFC; background: rgba(124,92,252,0.10); padding: 5px 12px; border-radius: 999px; }

.syn-instruction { font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #B8AFCB; margin: 0 0 6px; }
.syn-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: clamp(34px, 6vw, 52px); color: #2B2A4A; margin: 0 0 26px; text-transform: capitalize; }

.syn-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.syn-choice {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #2B2A4A;
  text-transform: capitalize;
  background: #F5F3FF;
  border: 2px solid #EAE5FB;
  border-radius: 14px;
  padding: 18px 12px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}
.syn-choice:hover:not(:disabled) { background: #EFEBFF; transform: translateY(-2px); }
.syn-choice:disabled { cursor: default; }
.syn-choice.is-correct { background: #E4F8EC; border-color: #4CBE7F; color: #1F7A47; }
.syn-choice.is-incorrect { background: #FDEAEA; border-color: #E5645A; color: #B3392F; }

.syn-footer { margin-top: 22px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.syn-feedback { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; }
.syn-feedback.is-correct { color: #1F7A47; }
.syn-feedback.is-incorrect { color: #B3392F; }

.syn-done-emoji { font-size: 48px; margin-bottom: 4px; }

@media (max-width: 480px) {
  .syn-choices { grid-template-columns: 1fr; }
}
`;

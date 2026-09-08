import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// clues: [string]
// choices: [{ id, img?, emoji?, alt? }], one of which matches answerId
// reveal: { img?, emoji?, alt? } shown in the card once solved
export default function DetectiveGame({ clues, choices, answerId, reveal, solvedText = "You got it! 🎉", startPrompt = 'Tap "Get a Clue" to start' }) {
  useActivityStyles();
  const [clueIdx, setClueIdx] = useState(0);
  const [solved, setSolved] = useState(false);
  const [wrongId, setWrongId] = useState(null);

  function nextClue() {
    if (clueIdx >= clues.length) return;
    setClueIdx((i) => i + 1);
  }
  function guess(id, el) {
    if (solved) return;
    if (id === answerId) {
      setSolved(true);
      burstFromElement(el, undefined, 18);
    } else {
      setWrongId(id);
      setTimeout(() => setWrongId(null), 400);
    }
  }

  const answer = choices.find((c) => c.id === answerId);

  return (
    <div>
      <div className={`sa-detective-card ${solved ? "sa-solved" : ""}`}>
        {solved ? (answer.img ? <img src={answer.img} alt={answer.alt || ""} /> : answer.emoji) : "?"}
      </div>
      <div className="sa-clue-box">
        {solved ? solvedText : clueIdx === 0 ? startPrompt : clues[clueIdx - 1]}
      </div>
      <button type="button" className="sa-clue-btn" onClick={nextClue} disabled={solved || clueIdx >= clues.length}>
        Get a Clue 🔍
      </button>
      <div className="sa-guess-row">
        {choices.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`sa-guess-btn ${wrongId === c.id ? "sa-shake" : ""}`}
            onClick={(e) => guess(c.id, e.currentTarget)}
          >
            {c.img ? <img src={c.img} alt={c.alt || ""} /> : c.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

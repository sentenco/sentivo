import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// statement is the deliberately-wrong line the teacher says.
// correctAnswer is always "wrong" (the statement is always the mistake to catch).
export default function CatchMistakeGame({ statement, caughtMessage, tryAgainMessage = "Look again — is that really right?", swapLabel = "🔁 Now YOU check the teacher" }) {
  useActivityStyles();
  const [answer, setAnswer] = useState(null);

  function pick(choice, el) {
    setAnswer(choice);
    if (choice === "wrong") burstFromElement(el, undefined, 14);
    else setTimeout(() => setAnswer(null), 400);
  }

  return (
    <div>
      <div className="sa-quiz-swap">{swapLabel}</div>
      <div className="sa-quiz-statement">{statement}</div>
      <div className="sa-quiz-btns">
        <button
          type="button"
          className={`sa-quiz-btn ${answer === "right" ? "sa-shake" : ""}`}
          onClick={(e) => pick("right", e.currentTarget)}
        >
          ✅
        </button>
        <button
          type="button"
          className={`sa-quiz-btn ${answer === "wrong" ? "sa-correct-pick" : ""}`}
          onClick={(e) => pick("wrong", e.currentTarget)}
        >
          ❌
        </button>
      </div>
      <div className="sa-msg">{answer === "wrong" ? caughtMessage : answer === "right" ? tryAgainMessage : ""}</div>
    </div>
  );
}

import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// choices: [{ id, word, img?, emoji?, alt? }]
export default function SentenceBuilder({ prefix, suffix = "", choices }) {
  useActivityStyles();
  const [filled, setFilled] = useState(null);

  function pick(choice, el) {
    setFilled(choice);
    burstFromElement(el);
  }

  return (
    <div>
      <div className="sa-sentence-strip">
        {prefix}
        <span className={`sa-blank-slot ${filled ? "sa-filled" : ""}`}>{filled ? filled.word : "___"}</span>
        {suffix}
      </div>
      <div className="sa-choice-row">
        {choices.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`sa-choice-chip ${filled ? "sa-used" : ""}`}
            onClick={(e) => pick(c, e.currentTarget)}
          >
            {c.word} {c.img ? <img src={c.img} alt={c.alt || c.word} style={{ width: 18, height: 18, verticalAlign: "middle" }} /> : c.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

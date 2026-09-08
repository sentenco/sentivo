import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// letters: [{ letter, color }]
// picture: { img?, emoji?, alt? }
export default function SpellGame({ letters, picture, word, doneMessage }) {
  useActivityStyles();
  const [up, setUp] = useState(() => letters.map(() => false));
  const allUp = up.every(Boolean);

  function toggle(i, el) {
    setUp((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
    setTimeout(() => burstFromElement(el, [letters[i].color], 8), 0);
  }

  return (
    <div>
      <div className="sa-spell-pic">
        {picture.img ? <img src={picture.img} alt={picture.alt || word} /> : picture.emoji}
      </div>
      <div className="sa-spell-row">
        {letters.map((l, i) => (
          <div key={i} className={`sa-flip-tile ${up[i] ? "sa-up" : ""}`} onClick={(e) => toggle(i, e.currentTarget)}>
            <div className="sa-flip-inner">
              <div className="sa-flip-face sa-back">?</div>
              <div className="sa-flip-face sa-front" style={{ background: l.color }}>{l.letter}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sa-msg">{allUp ? (doneMessage || `It's a ${word}!`) : ""}</div>
    </div>
  );
}

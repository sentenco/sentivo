import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

export default function ScoreCelebration({ stars = 3, badgeText = "Great Job Today! 🌟", buttonLabel = "Show My Score ⭐" }) {
  useActivityStyles();
  const [shown, setShown] = useState(false);
  const [lit, setLit] = useState(0);

  function reveal(el) {
    setShown(true);
    for (let i = 0; i < stars; i++) {
      setTimeout(() => {
        setLit((n) => n + 1);
        burstFromElement(el, undefined, 8);
      }, i * 260);
    }
  }

  return (
    <div>
      <button type="button" className={`sa-score-btn ${shown ? "sa-hidden" : ""}`} onClick={(e) => reveal(e.currentTarget)}>
        {buttonLabel}
      </button>
      <div className="sa-score-stars">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className={`sa-star ${i < lit ? "sa-on" : ""}`}>⭐</span>
        ))}
      </div>
      <div className={`sa-score-badge ${lit === stars && stars > 0 ? "sa-on" : ""}`}>{badgeText}</div>
    </div>
  );
}

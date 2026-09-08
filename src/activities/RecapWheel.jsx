import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

const POSITIONS = [
  { top: "6px", left: "38px" },
  { top: "38px", right: "2px" },
  { bottom: "6px", left: "38px" },
  { top: "38px", left: "2px" },
];

// items: 2-4 entries [{ img?, emoji?, alt?, name }]
export default function RecapWheel({ items, recallTemplate = (name) => `Remember: ${name}!` }) {
  useActivityStyles();
  const [spins, setSpins] = useState(0);
  const [pick, setPick] = useState(null);

  function spin(el) {
    const idx = Math.floor(Math.random() * items.length);
    const extraTurns = 3;
    setSpins((s) => s + 360 * extraTurns + idx * (360 / items.length));
    setTimeout(() => {
      setPick(items[idx]);
      burstFromElement(el, undefined, 12);
    }, 1100);
  }

  return (
    <div>
      <div className="sa-wheel-wrap">
        <span className="sa-wheel-pin">🔻</span>
        <div className="sa-wheel-dial" style={{ transform: `rotate(${spins}deg)` }}>
          {items.map((it, i) => (
            <span key={i} className="sa-wheel-item" style={POSITIONS[i % POSITIONS.length]}>
              {it.img ? <img src={it.img} alt={it.alt || it.name} /> : it.emoji}
            </span>
          ))}
        </div>
      </div>
      <button type="button" className="sa-wheel-btn" onClick={(e) => spin(e.currentTarget)}>Spin! 🎡</button>
      <div className="sa-msg">{pick ? recallTemplate(pick.name) : ""}</div>
    </div>
  );
}

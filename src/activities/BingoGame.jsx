import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement, CONFETTI } from "./activityFx";

function linesFor(size) {
  const idx = (r, c) => r * size + c;
  const lines = [];
  for (let r = 0; r < size; r++) lines.push(Array.from({ length: size }, (_, c) => idx(r, c)));
  for (let c = 0; c < size; c++) lines.push(Array.from({ length: size }, (_, r) => idx(r, c)));
  lines.push(Array.from({ length: size }, (_, i) => idx(i, i)));
  lines.push(Array.from({ length: size }, (_, i) => idx(i, size - 1 - i)));
  return lines;
}

// cells: [{ img?, emoji?, alt? }] -- length must be a perfect square (e.g. 9 for 3x3)
export default function BingoGame({ cells, bannerText = "BINGO! 🎉", onBingo }) {
  useActivityStyles();
  const size = Math.round(Math.sqrt(cells.length));
  const [on, setOn] = useState(() => cells.map(() => false));
  const [showBanner, setShowBanner] = useState(false);
  const lines = linesFor(size);

  function toggle(i, el) {
    setOn((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      if (next[i]) burstFromElement(el, CONFETTI, 6);
      const won = lines.some((line) => line.every((idx) => next[idx]));
      if (won) {
        setShowBanner(true);
        setTimeout(() => burstFromElement(el, CONFETTI, 40), 50);
        setTimeout(() => setShowBanner(false), 1600);
        if (onBingo) onBingo();
      }
      return next;
    });
  }

  return (
    <div>
      <div className="sa-bingo-grid" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {cells.map((cell, i) => (
          <div key={i} className={`sa-bingo-cell ${on[i] ? "sa-on" : ""}`} onClick={(e) => toggle(i, e.currentTarget)}>
            {cell.img ? <img src={cell.img} alt={cell.alt || ""} /> : cell.emoji}
            <span className="sa-stamp">✔</span>
          </div>
        ))}
      </div>
      <div className={`sa-bingo-banner ${showBanner ? "sa-show" : ""}`}>{bannerText}</div>
    </div>
  );
}

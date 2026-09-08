import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// cards: [{ id, img?, emoji?, alt? }] -- array order IS the correct sequence
export default function SequenceGame({ cards, doneMessage = "Perfect order! 🎉" }) {
  useActivityStyles();
  const [scrambled] = useState(() => shuffle(cards));
  const [selected, setSelected] = useState(null);
  const [placedIds, setPlacedIds] = useState([]);
  const [wrongSlot, setWrongSlot] = useState(null);

  function pickCard(id) {
    if (placedIds.includes(id)) return;
    setSelected(id);
  }
  function pickSlot(slotId, el) {
    if (!selected || placedIds.includes(slotId)) return;
    if (selected === slotId) {
      setPlacedIds((p) => [...p, slotId]);
      setSelected(null);
      burstFromElement(el, undefined, 8);
    } else {
      setWrongSlot(slotId);
      setTimeout(() => setWrongSlot(null), 400);
    }
  }

  const allPlaced = placedIds.length === cards.length;

  return (
    <div>
      <div className="sa-seq-cards">
        {scrambled.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`sa-seq-card ${selected === c.id ? "sa-sel" : ""} ${placedIds.includes(c.id) ? "sa-placed" : ""}`}
            onClick={() => pickCard(c.id)}
          >
            {c.img ? <img src={c.img} alt={c.alt || ""} /> : c.emoji}
          </button>
        ))}
      </div>
      <div className="sa-seq-slots">
        {cards.map((c, i) => {
          const filled = placedIds.includes(c.id);
          return (
            <div
              key={c.id}
              className={`sa-seq-slot ${filled ? "sa-filled" : ""} ${wrongSlot === c.id ? "sa-shake" : ""}`}
              onClick={(e) => pickSlot(c.id, e.currentTarget)}
            >
              {filled ? (c.img ? <img src={c.img} alt={c.alt || ""} /> : c.emoji) : i + 1}
            </div>
          );
        })}
      </div>
      <div className="sa-msg">{allPlaced ? doneMessage : ""}</div>
    </div>
  );
}

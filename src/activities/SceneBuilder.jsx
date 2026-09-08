import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// items: [{ id, img?, emoji?, alt? }]
export default function SceneBuilder({ items, hint = "Tap items below to place them here", doneMessage = "Great room! ✨" }) {
  useActivityStyles();
  const [placed, setPlaced] = useState([]); // array of item ids, in placement order

  function place(id, el) {
    if (placed.includes(id)) return;
    setPlaced((p) => [...p, id]);
    if (placed.length + 1 === items.length) setTimeout(() => burstFromElement(el, undefined, 20), 0);
  }
  function unplace(id) {
    setPlaced((p) => p.filter((x) => x !== id));
  }

  const allPlaced = placed.length === items.length;

  return (
    <div>
      <div className={`sa-scene-floor ${placed.length > 0 ? "sa-has-items" : ""}`} data-hint={hint}>
        {placed.map((id) => {
          const item = items.find((i) => i.id === id);
          return (
            <span key={id} className="sa-scene-placed" onClick={() => unplace(id)}>
              {item.img ? <img src={item.img} alt={item.alt || ""} /> : item.emoji}
            </span>
          );
        })}
      </div>
      <div className="sa-scene-chips">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sa-scene-chip ${placed.includes(item.id) ? "sa-used" : ""}`}
            onClick={(e) => place(item.id, e.currentTarget)}
          >
            {item.img ? <img src={item.img} alt={item.alt || ""} /> : item.emoji}
          </button>
        ))}
      </div>
      <div className="sa-scene-progress">{allPlaced ? doneMessage : `${placed.length} / ${items.length} placed`}</div>
    </div>
  );
}

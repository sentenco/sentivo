import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// choices: [{ id, name, img?, emoji?, alt? }]
export default function OrderGame({ choices, confirmLabel = "Place Order 🍕", placedLabel = "Order Placed! 🎉", emptyLabel = "No toppings yet" }) {
  useActivityStyles();
  const [picked, setPicked] = useState([]);
  const [placed, setPlaced] = useState(false);

  function pick(choice) {
    if (picked.some((c) => c.id === choice.id)) return;
    setPicked((p) => [...p, choice]);
  }
  function confirm(el) {
    setPlaced(true);
    burstFromElement(el, undefined, 20);
  }

  return (
    <div>
      <div className="sa-order-choices">
        {choices.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`sa-order-btn-pick ${picked.some((p) => p.id === c.id) ? "sa-used" : ""}`}
            onClick={() => pick(c)}
            disabled={placed}
          >
            {c.img ? <img src={c.img} alt={c.alt || c.name} /> : c.emoji}
          </button>
        ))}
      </div>
      <div className="sa-order-ticket">
        {picked.length === 0 ? (
          <span className="sa-ticket-empty">{emptyLabel}</span>
        ) : (
          picked.map((c) => <span key={c.id} className="sa-ticket-item">✓ {c.name}</span>)
        )}
      </div>
      <button type="button" className="sa-confirm-btn" disabled={picked.length === 0 || placed} onClick={(e) => confirm(e.currentTarget)}>
        {placed ? placedLabel : confirmLabel}
      </button>
    </div>
  );
}

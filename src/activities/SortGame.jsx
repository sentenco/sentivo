import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// items: [{ id, img?, emoji?, alt?, bin }]
// bins: [{ id, emoji, label }]
export default function SortGame({ items, bins }) {
  useActivityStyles();
  const [gone, setGone] = useState([]);
  const [selected, setSelected] = useState(null);
  const [wrongBin, setWrongBin] = useState(null);
  const [bounceBin, setBounceBin] = useState(null);

  function pickItem(id) {
    if (gone.includes(id)) return;
    setSelected(id);
  }
  function pickBin(bin, el) {
    if (!selected) return;
    const item = items.find((i) => i.id === selected);
    if (item.bin === bin) {
      setBounceBin(bin);
      setTimeout(() => setBounceBin(null), 400);
      setGone((g) => [...g, selected]);
      setSelected(null);
      burstFromElement(el);
    } else {
      setWrongBin(bin);
      setTimeout(() => setWrongBin(null), 400);
    }
  }

  return (
    <div>
      <div className="sa-sort-items">
        {items.map((item) => {
          const cls = ["sa-sort-item", selected === item.id && "sa-sel", gone.includes(item.id) && "sa-gone"].filter(Boolean).join(" ");
          return (
            <div key={item.id} className={cls} onClick={() => pickItem(item.id)}>
              {item.img ? <img src={item.img} alt={item.alt || ""} /> : item.emoji}
            </div>
          );
        })}
      </div>
      <div className="sa-sort-bins">
        {bins.map((bin) => {
          const cls = ["sa-sort-bin", bounceBin === bin.id && "sa-bounce", wrongBin === bin.id && "sa-shake"].filter(Boolean).join(" ");
          return (
            <div key={bin.id} className={cls} onClick={(e) => pickBin(bin.id, e.currentTarget)}>
              <span className="sa-bin-emoji">{bin.emoji}</span>{bin.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

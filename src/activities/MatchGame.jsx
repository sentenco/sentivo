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

// pairs: [{ id, tileLabel, tileColor, rightImg?, rightEmoji?, rightAlt? }]
export default function MatchGame({ pairs, doneMessage = "Great matching! 🎉", onComplete }) {
  useActivityStyles();
  const byId = Object.fromEntries(pairs.map((p) => [p.id, p]));
  const [leftOrder] = useState(() => shuffle(pairs.map((p) => p.id)));
  const [rightOrder] = useState(() => shuffle(pairs.map((p) => p.id)));
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(null);

  function pickLeft(id, el) {
    if (matched.includes(id) || wrong) return;
    setSelected(id);
  }
  function pickRight(id, el) {
    if (matched.includes(id) || wrong || selected == null) return;
    if (selected === id) {
      setMatched((m) => {
        const next = [...m, id];
        if (next.length === pairs.length && onComplete) onComplete();
        return next;
      });
      setSelected(null);
      burstFromElement(el);
    } else {
      setWrong({ left: selected, right: id });
      setTimeout(() => { setWrong(null); setSelected(null); }, 500);
    }
  }

  const allDone = matched.length === pairs.length;

  return (
    <div>
      <div className="sa-match-wrap">
        <div className="sa-match-col">
          {leftOrder.map((id) => {
            const p = byId[id];
            const cls = ["sa-match-tile", matched.includes(id) && "sa-done", selected === id && "sa-sel", wrong?.left === id && "sa-shake"].filter(Boolean).join(" ");
            return (
              <div key={id} className={cls} style={{ background: p.tileColor }} onClick={(e) => pickLeft(id, e.currentTarget)}>
                {p.tileLabel}
              </div>
            );
          })}
        </div>
        <div className="sa-match-col">
          {rightOrder.map((id) => {
            const p = byId[id];
            const cls = ["sa-match-right", matched.includes(id) && "sa-done", wrong?.right === id && "sa-shake"].filter(Boolean).join(" ");
            return (
              <div key={id} className={cls} onClick={(e) => pickRight(id, e.currentTarget)}>
                {p.rightImg ? <img src={p.rightImg} alt={p.rightAlt || ""} /> : p.rightEmoji}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sa-msg">{allDone ? doneMessage : ""}</div>
    </div>
  );
}

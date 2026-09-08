import { Fragment, useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// parts: [{ text, color }] -- usually 2, e.g. [{text:"C", color:"#22A67E"}, {text:"AT", color:"#F2A900"}]
// result: { word, img?, emoji?, alt? }
export default function SoundBlend({ parts, result }) {
  useActivityStyles();
  const [merged, setMerged] = useState(() => parts.map(() => false));
  const allMerged = merged.every(Boolean);

  function tap(i, el) {
    if (merged[i]) return;
    setMerged((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
    if (merged.filter(Boolean).length + 1 === parts.length) {
      setTimeout(() => burstFromElement(el, undefined, 16), 200);
    }
  }

  return (
    <div className="sa-blend-wrap">
      <div className="sa-blend-row">
        {parts.map((p, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="sa-blend-plus">+</span>}
            <div
              className={`sa-blend-tile ${merged[i] ? "sa-merged" : ""}`}
              style={{ background: p.color }}
              onClick={(e) => tap(i, e.currentTarget)}
            >
              {p.text}
            </div>
          </Fragment>
        ))}
      </div>
      <div className={`sa-blend-result ${allMerged ? "sa-show" : ""}`}>
        {result.img && <img src={result.img} alt={result.alt || result.word} />}
        {result.word}{result.emoji ? ` ${result.emoji}` : ""}
      </div>
    </div>
  );
}

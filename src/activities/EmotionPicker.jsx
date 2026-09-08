import { useState } from "react";
import { useActivityStyles } from "./activityStyles";

// options: [{ id, name, img?, emoji?, alt?, faceImg?, faceEmoji? }]
export default function EmotionPicker({ options, neutralEmoji = "😐", lineTemplate = (name) => `I feel ${name}!` }) {
  useActivityStyles();
  const [picked, setPicked] = useState(null);
  const [pulse, setPulse] = useState(0);

  function choose(opt) {
    setPicked(opt);
    setPulse((p) => p + 1);
  }

  return (
    <div>
      <div key={pulse} className="sa-emo-face sa-reacting">
        {picked ? (picked.faceImg ? <img src={picked.faceImg} alt={picked.alt || picked.name} /> : (picked.faceEmoji || picked.emoji)) : neutralEmoji}
      </div>
      <div className="sa-emo-row">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`sa-emo-btn ${picked?.id === opt.id ? "sa-on" : ""}`}
            onClick={() => choose(opt)}
          >
            {opt.img ? <img src={opt.img} alt={opt.alt || opt.name} /> : opt.emoji}
          </button>
        ))}
      </div>
      <div className="sa-emo-line">{picked ? lineTemplate(picked.name) : ""}</div>
    </div>
  );
}

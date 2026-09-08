import { useEffect, useRef, useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

export default function OpenMicPrompt({ prompt, seconds = 15, doneMessage = "Nice talking! 🎉" }) {
  useActivityStyles();
  const [going, setGoing] = useState(false);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  function start(el) {
    if (going) return;
    setGoing(true);
    setDone(false);
    let p = 0;
    const step = 100 / (seconds * 10);
    timerRef.current = setInterval(() => {
      p += step;
      setPct(Math.min(p, 100));
      if (p >= 100) {
        clearInterval(timerRef.current);
        setGoing(false);
        setDone(true);
        burstFromElement(el, undefined, 16);
      }
    }, 100);
  }

  return (
    <div>
      <div className="sa-mic-prompt">{prompt}</div>
      <div className="sa-mic-ring-wrap">
        <div className="sa-mic-ring" style={{ "--sa-p": pct }}>
          <button type="button" className={`sa-mic-btn ${going ? "sa-going" : ""}`} onClick={(e) => start(e.currentTarget)}>🎤</button>
        </div>
      </div>
      <div className="sa-msg">{going ? "Talking time..." : done ? doneMessage : ""}</div>
    </div>
  );
}

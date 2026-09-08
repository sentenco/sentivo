import { useState } from "react";
import { useActivityStyles } from "./activityStyles";
import { burstFromElement } from "./activityFx";

// lines: [{ who: "teacher"|"student", text, tapReveal?: boolean, tapPrompt? }]
// mode "progressive": lines appear one at a time via a "Next Line" button (e.g. Let's Talk!)
// mode "reveal": all lines show immediately, but any line with tapReveal starts hidden
//   behind tapPrompt and reveals its text on tap (e.g. Say It!)
export default function DialogueGame({ lines, mode = "reveal", doneLabel = "Great talk! 🎉" }) {
  useActivityStyles();
  const [shown, setShown] = useState(mode === "progressive" ? 1 : lines.length);
  const [revealed, setRevealed] = useState(() => lines.map((l) => !l.tapReveal));

  function nextLine() {
    setShown((s) => Math.min(s + 1, lines.length));
  }
  function reveal(i, el) {
    setRevealed((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
    burstFromElement(el, undefined, 6);
  }

  return (
    <div>
      <div className="sa-say-wrap">
        {lines.map((line, i) => {
          const isMe = line.who === "student";
          const visible = i < shown;
          return (
            <div key={i} className={`sa-bub-row ${isMe ? "sa-me" : ""} ${visible ? "" : "sa-hidden"}`}>
              <div className={`sa-avatar ${isMe ? "sa-coral" : "sa-navy"}`}>{isMe ? "S" : "T"}</div>
              {revealed[i] ? (
                <div className={`sa-bubble ${line.tapReveal ? "sa-revealed" : ""}`}>{line.text}</div>
              ) : (
                <div className="sa-bubble sa-tap" onClick={(e) => reveal(i, e.currentTarget)}>
                  {line.tapPrompt || "🎤 Tap to see an answer"}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {mode === "progressive" && (
        <button type="button" className="sa-next-btn" onClick={nextLine} disabled={shown >= lines.length}>
          {shown >= lines.length ? doneLabel : "Next Line →"}
        </button>
      )}
    </div>
  );
}

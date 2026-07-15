import { useMemo, useState } from "react";
import SlideHeader from "./SlideHeader";

const SPEAKER_COLOR = { A: "#FF7A59", B: "#2CA97F" };
const SPEAKER_COLOR_ADULT = { A: "#B5502E", B: "#1B2A4A" };

function parseBlankSegments(text) {
  const regex = /\[([^\]]+)\]/g;
  const segments = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    segments.push({ type: "blank", answer: match[1] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }
  return segments;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SlideActivity({ content, lesson }) {
  const isAdult = lesson?.age_track === "adults";
  const answerWords = content.wordBank || content.blanks || [];

  const lines = useMemo(() => {
    let blankId = 0;
    return (content.dialogue || []).map((line) => ({
      ...line,
      segments: parseBlankSegments(line.text).map((seg) =>
        seg.type === "blank" ? { ...seg, id: `blank-${blankId++}` } : seg
      ),
    }));
  }, [content.dialogue]);

  const [placements, setPlacements] = useState({});
  const [bank, setBank] = useState(() =>
    shuffle(answerWords.map((w, i) => ({ id: `word-${i}`, word: w })))
  );
  const [dragOverBlank, setDragOverBlank] = useState(null);
  const [dragOverBank, setDragOverBank] = useState(false);

  function placeOnBlank(blankId, e) {
    e.preventDefault();
    setDragOverBlank(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }

    if (payload.source === "bank") {
      const bankWord = bank.find((w) => w.id === payload.id);
      if (!bankWord) return;
      setBank((prev) => {
        let next = prev.filter((w) => w.id !== payload.id);
        const displaced = placements[blankId];
        if (displaced) next = [...next, displaced];
        return next;
      });
      setPlacements((prev) => ({ ...prev, [blankId]: bankWord }));
    } else if (payload.source === "blank" && payload.id !== blankId) {
      setPlacements((prev) => {
        const next = { ...prev };
        const moving = next[payload.id];
        const displaced = next[blankId];
        next[blankId] = moving;
        if (displaced) next[payload.id] = displaced;
        else delete next[payload.id];
        return next;
      });
    }
  }

  function returnToBank(e) {
    e.preventDefault();
    setDragOverBank(false);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    if (payload.source !== "blank") return;
    const word = placements[payload.id];
    if (!word) return;
    setPlacements((prev) => {
      const next = { ...prev };
      delete next[payload.id];
      return next;
    });
    setBank((prev) => [...prev, word]);
  }

  return (
    <div className={`sla-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Activity"}
        title={content.title || "Fill in the Blanks"}
        subtitle={content.subtitle || "Drag each word into the right blank."}
        isAdult={isAdult}
      />
      <div className="sla-body">
        <div className="sla-dialogue">
          {lines.map((line, i) => {
            const color = (isAdult ? SPEAKER_COLOR_ADULT : SPEAKER_COLOR)[line.speaker] || "#1B2A4A";
            return (
              <div className="sla-line" key={i}>
                <span className="sla-speaker" style={{ color }}>
                  {line.speaker}:
                </span>
                <span className="sla-text">
                  {line.segments.map((seg, j) =>
                    seg.type === "text" ? (
                      <span key={j}>{seg.value}</span>
                    ) : (
                      <span
                        key={seg.id}
                        className={`sla-blank ${dragOverBlank === seg.id ? "is-over" : ""} ${
                          placements[seg.id] ? "is-filled" : ""
                        }`}
                        style={{ borderColor: color }}
                        draggable={!!placements[seg.id]}
                        onDragStart={(e) => {
                          if (!placements[seg.id]) {
                            e.preventDefault();
                            return;
                          }
                          e.dataTransfer.setData(
                            "text/plain",
                            JSON.stringify({ source: "blank", id: seg.id })
                          );
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOverBlank(seg.id);
                        }}
                        onDragLeave={() =>
                          setDragOverBlank((cur) => (cur === seg.id ? null : cur))
                        }
                        onDrop={(e) => placeOnBlank(seg.id, e)}
                      >
                        {placements[seg.id]?.word || "     "}
                      </span>
                    )
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <div
          className={`sla-wordbank ${dragOverBank ? "is-over" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOverBank(true);
          }}
          onDragLeave={() => setDragOverBank(false)}
          onDrop={returnToBank}
        >
          {bank.length === 0 ? (
            <span className="sla-bank-done">All words placed!</span>
          ) : (
            bank.map((w) => (
              <span
                key={w.id}
                className="sla-chip"
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData(
                    "text/plain",
                    JSON.stringify({ source: "bank", id: w.id })
                  )
                }
              >
                {w.word}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
.sla-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sla-body {
  flex: 1;
  min-height: 0;
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
}
.sla-dialogue {
  background: var(--k-tint, #F7F8FA);
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sla-line {
  font-family: 'Quicksand', sans-serif;
  font-size: 15.5px;
  color: #1B2A4A;
}
.sla-speaker {
  font-weight: 700;
  margin-right: 6px;
}
.sla-text { font-weight: 600; }
.sla-blank {
  display: inline-flex;
  min-width: 60px;
  justify-content: center;
  border-bottom: 2px solid;
  border-radius: 4px;
  padding: 1px 6px;
  margin: 0 2px;
  cursor: grab;
  transition: background 0.15s ease;
}
.sla-blank.is-over {
  background: #FFF3E9;
}
.sla-blank.is-filled {
  font-weight: 700;
  color: #1B2A4A;
}
.sla-wordbank {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 34px;
  border-radius: 10px;
  padding: 6px;
  transition: background 0.15s ease;
}
.sla-wordbank.is-over {
  background: #FFF3E9;
}
.sla-chip {
  background: #FFE8C2;
  color: #8A5A1E;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: grab;
}
.sla-bank-done {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2CA97F;
}

/* ── Adults theme ── */
.sla-slide.is-adult .sla-body { background: #F7F5EF; }
.sla-slide.is-adult .sla-dialogue {
  background: #fff;
  border: 1px solid #DEDAD0;
  border-radius: 6px;
}
.sla-slide.is-adult .sla-line { font-family: 'Inter', sans-serif; font-size: 14.5px; color: #1B2A4A; }
.sla-slide.is-adult .sla-text { font-weight: 400; }
.sla-slide.is-adult .sla-blank { border-radius: 3px; }
.sla-slide.is-adult .sla-blank.is-over { background: #F1ECE3; }
.sla-slide.is-adult .sla-wordbank { border-radius: 6px; }
.sla-slide.is-adult .sla-wordbank.is-over { background: #F1ECE3; }
.sla-slide.is-adult .sla-chip {
  background: #fff;
  border: 1px solid #1B2A4A;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  border-radius: 4px;
}
.sla-slide.is-adult .sla-bank-done { font-family: 'Inter', sans-serif; color: #3B6D11; }
`;

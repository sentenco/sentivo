import { useMemo, useState } from "react";
import SlideHeader from "./SlideHeader";

const SPEAKER_COLOR = { A: "#1B2A4A", B: "#1B2A4A" };

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

/* ───────────────────────── Blank: fill-in-the-blank chat ─────────────────────────
   Drag word-bank chips into blanks inside a short (max 3-line) dialogue.
   Has a Check button since it's drag-based -- nothing self-validates until
   the student asks. Content authors: keep dialogue to 3 lines / 3 blanks max
   so this fits the fixed frame with no scroll. */
function BlankPractice({ content }) {
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

  const totalBlanks = useMemo(
    () => lines.reduce((n, l) => n + l.segments.filter((s) => s.type === "blank").length, 0),
    [lines]
  );

  const [placements, setPlacements] = useState({});
  const [bank, setBank] = useState(() =>
    shuffle(answerWords.map((w, i) => ({ id: `word-${i}`, word: w })))
  );
  const [dragOverBlank, setDragOverBlank] = useState(null);
  const [dragOverBank, setDragOverBank] = useState(false);
  const [checked, setChecked] = useState(false);

  const allFilled = Object.keys(placements).length === totalBlanks && totalBlanks > 0;
  const allCorrect = useMemo(() => {
    if (!checked) return false;
    return lines.every((line) =>
      line.segments.every((seg) => seg.type !== "blank" || placements[seg.id]?.word === seg.answer)
    );
  }, [checked, lines, placements]);

  function placeOnBlank(blankId, e) {
    e.preventDefault();
    setDragOverBlank(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    setChecked(false);
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
    setChecked(false);
    setPlacements((prev) => {
      const next = { ...prev };
      delete next[payload.id];
      return next;
    });
    setBank((prev) => [...prev, word]);
  }

  function resetAll() {
    setPlacements({});
    setBank(shuffle(answerWords.map((w, i) => ({ id: `word-${i}`, word: w }))));
    setChecked(false);
  }

  const correctCount = checked
    ? lines.reduce(
        (n, l) => n + l.segments.filter((s) => s.type === "blank" && placements[s.id]?.word === s.answer).length,
        0
      )
    : 0;

  return (
    <div className="slpr-body">
      <div className="slpr-dialogue">
        {lines.map((line, i) => {
          const color = SPEAKER_COLOR[line.speaker] || "#1B2A4A";
          return (
            <div className="slpr-line" key={i}>
              <span className="slpr-speaker" style={{ color }}>
                {line.speaker}:
              </span>
              <span className="slpr-text">
                {line.segments.map((seg, j) =>
                  seg.type === "text" ? (
                    <span key={j}>{seg.value}</span>
                  ) : (
                    <span
                      key={seg.id}
                      className={`slpr-blank ${dragOverBlank === seg.id ? "is-over" : ""} ${
                        placements[seg.id] ? "is-filled" : ""
                      } ${checked ? (placements[seg.id]?.word === seg.answer ? "is-correct" : "is-wrong") : ""}`}
                      style={{ borderColor: checked ? undefined : color }}
                      draggable={!!placements[seg.id]}
                      onDragStart={(e) => {
                        if (!placements[seg.id]) {
                          e.preventDefault();
                          return;
                        }
                        e.dataTransfer.setData("text/plain", JSON.stringify({ source: "blank", id: seg.id }));
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOverBlank(seg.id);
                      }}
                      onDragLeave={() => setDragOverBlank((cur) => (cur === seg.id ? null : cur))}
                      onDrop={(e) => placeOnBlank(seg.id, e)}
                    >
                      {placements[seg.id]?.word || "     "}
                    </span>
                  )
                )}
              </span>
            </div>
          );
        })}
      </div>

      <div
        className={`slpr-wordbank ${dragOverBank ? "is-over" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOverBank(true);
        }}
        onDragLeave={() => setDragOverBank(false)}
        onDrop={returnToBank}
      >
        {bank.length === 0 ? (
          <span className="slpr-bank-done">All words placed!</span>
        ) : (
          bank.map((w) => (
            <span
              key={w.id}
              className="slpr-chip"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ source: "bank", id: w.id }))}
            >
              {w.word}
            </span>
          ))
        )}
      </div>

      <div className="slpr-check-row">
        <button type="button" className="slpr-check-btn" disabled={!allFilled} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`slpr-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 All correct!" : `${correctCount} of ${totalBlanks} correct -- try again!`}
            </span>
            <button type="button" className="slpr-retry-btn" onClick={resetAll}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Match: drag the word under its picture ─────────────────────────
   Drag a word chip from the tray into the drop zone under the picture it
   names. Instant feedback on drop: the zone flashes green and locks if
   correct, or flashes red and the chip bounces back to the tray if wrong.
   Content authors: max 3 pairs so the row + tray fit with no scroll. */
function MatchPractice({ content }) {
  const pairs = useMemo(() => (content.pairs || []).map((p, i) => ({ id: i, ...p })), [content.pairs]);
  const [tray, setTray] = useState(() => shuffle(pairs.map((p) => ({ id: p.id, word: p.word }))));
  const [placed, setPlaced] = useState({});
  const [wrongFlash, setWrongFlash] = useState(null);
  const [dragOverZone, setDragOverZone] = useState(null);

  const allMatched = Object.keys(placed).length === pairs.length && pairs.length > 0;

  function dropOnZone(pairIndex, e) {
    e.preventDefault();
    setDragOverZone(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    const word = tray.find((w) => w.id === payload.id);
    if (!word) return;
    if (word.word === pairs[pairIndex].word) {
      setTray((prev) => prev.filter((w) => w.id !== payload.id));
      setPlaced((prev) => ({ ...prev, [pairIndex]: word.word }));
    } else {
      setWrongFlash(pairIndex);
      setTimeout(() => setWrongFlash((cur) => (cur === pairIndex ? null : cur)), 500);
    }
  }

  return (
    <div className="slpm-body">
      {content.instruction && <p className="slpr-instruction">{content.instruction}</p>}
      <div className="slpm-row">
        {pairs.map((p, i) => (
          <div className="slpm-col" key={p.id}>
            <div className="slpm-card">
              <span className="slpm-card-emoji">{p.emoji}</span>
            </div>
            <div
              className={`slpm-zone ${dragOverZone === i ? "is-over" : ""} ${
                placed[i] ? "is-correct" : ""
              } ${wrongFlash === i ? "is-wrong" : ""}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverZone(i);
              }}
              onDragLeave={() => setDragOverZone((cur) => (cur === i ? null : cur))}
              onDrop={(e) => dropOnZone(i, e)}
            >
              {placed[i] || "drop here"}
            </div>
          </div>
        ))}
      </div>
      <div className="slpm-tray">
        {tray.length === 0 ? (
          <span className="slpr-bank-done">All words placed!</span>
        ) : (
          tray.map((w) => (
            <span
              key={w.id}
              className="slpm-chip"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: w.id }))}
            >
              {w.word}
            </span>
          ))
        )}
      </div>
      {allMatched && <div className="slpm-done">🎉 Great matching!</div>}
    </div>
  );
}

/* ───────────────────────── Sort: drag into one of two groups ─────────────────────────
   Content authors: max 4 items total so the tray + buckets fit with no scroll.
   Set content.subjective = true for opinion-based sorts (e.g. Like / Don't Like) --
   this drops the Check button and correctness styling entirely, since there is no
   right answer to validate. */
function SortPractice({ content }) {
  const subjective = !!content.subjective;
  const buckets = content.buckets || [];
  const [items, setItems] = useState(() => shuffle((content.items || []).map((it, i) => ({ ...it, id: i }))));
  const [placed, setPlaced] = useState({});
  const [dragOverBucket, setDragOverBucket] = useState(null);
  const [checked, setChecked] = useState(false);

  const totalItems = (content.items || []).length;
  const allPlaced = totalItems > 0 && items.length === 0;

  function dropOn(bucketIndex, e) {
    e.preventDefault();
    setDragOverBucket(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    setChecked(false);
    setItems((prev) => prev.filter((it) => it.id !== payload.id));
    setPlaced((prev) => ({ ...prev, [payload.id]: bucketIndex }));
  }

  function reset() {
    setItems(shuffle((content.items || []).map((it, i) => ({ ...it, id: i }))));
    setPlaced({});
    setChecked(false);
  }

  const allCorrect = checked && (content.items || []).every((it, i) => placed[i] === it.bucket);
  const correctCount = checked
    ? (content.items || []).filter((it, i) => placed[i] === it.bucket).length
    : 0;

  return (
    <div className="slps-body">
      {content.instruction && <p className="slpr-instruction">{content.instruction}</p>}
      <div className="slps-buckets">
        {buckets.map((b, bi) => (
          <div
            key={bi}
            className={`slps-bucket ${dragOverBucket === bi ? "is-over" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverBucket(bi);
            }}
            onDragLeave={() => setDragOverBucket((cur) => (cur === bi ? null : cur))}
            onDrop={(e) => dropOn(bi, e)}
          >
            <div className="slps-bucket-label">
              <span className="slpm-emoji">{b.emoji}</span> {b.label}
            </div>
            <div className="slps-bucket-items">
              {(content.items || [])
                .map((it, i) => ({ ...it, id: i }))
                .filter((it) => placed[it.id] === bi)
                .map((it) => (
                  <span
                    key={it.id}
                    className={`slps-chip ${
                      !subjective && checked ? (it.bucket === bi ? "is-correct" : "is-wrong") : ""
                    }`}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))}
                  >
                    <span className="slpm-emoji">{it.emoji}</span> {it.text}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slps-tray">
        {items.map((it) => (
          <span
            key={it.id}
            className="slps-chip"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))}
          >
            <span className="slpm-emoji">{it.emoji}</span> {it.text}
          </span>
        ))}
      </div>
      {subjective ? (
        allPlaced && <div className="slpm-done">🎉 All sorted!</div>
      ) : (
        <div className="slpr-check-row">
          <button type="button" className="slpr-check-btn" disabled={!allPlaced} onClick={() => setChecked(true)}>
            ✓ Check
          </button>
          {checked && (
            <>
              <span className={`slpr-result ${allCorrect ? "is-good" : "is-retry"}`}>
                {allCorrect ? "🎉 All correct!" : `${correctCount} of ${(content.items || []).length} correct -- try again!`}
              </span>
              <button type="button" className="slpr-retry-btn" onClick={reset}>
                ↻ Try Again
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Order: drag into the right sequence ─────────────────────────
   Content authors: max 4 items so slots + tray fit with no scroll. */
function OrderPractice({ content }) {
  const correctItems = useMemo(() => (content.items || []).map((it, i) => ({ ...it, id: i })), [content.items]);
  const [tray, setTray] = useState(() => shuffle(correctItems));
  const [slots, setSlots] = useState(() => Array(correctItems.length).fill(null));
  const [checked, setChecked] = useState(false);
  const [dragOverSlot, setDragOverSlot] = useState(null);

  const allPlaced = slots.every((s) => s !== null) && slots.length > 0;

  function dropOnSlot(slotIndex, e) {
    e.preventDefault();
    setDragOverSlot(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    setChecked(false);
    const item = correctItems.find((it) => it.id === payload.id);
    if (!item) return;
    setTray((prev) => prev.filter((it) => it.id !== payload.id));
    setSlots((prev) => {
      const next = [...prev];
      const displaced = next[slotIndex];
      next[slotIndex] = item;
      if (displaced) setTray((t) => [...t, displaced]);
      return next;
    });
  }

  function reset() {
    setTray(shuffle(correctItems));
    setSlots(Array(correctItems.length).fill(null));
    setChecked(false);
  }

  const allCorrect = checked && slots.every((s, i) => s?.id === correctItems[i]?.id);
  const correctCount = checked ? slots.filter((s, i) => s?.id === correctItems[i]?.id).length : 0;

  return (
    <div className="slpo-body">
      {content.instruction && <p className="slpr-instruction">{content.instruction}</p>}
      <div className="slpo-slots">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`slpo-slot ${dragOverSlot === i ? "is-over" : ""} ${
              checked ? (s?.id === correctItems[i]?.id ? "is-correct" : "is-wrong") : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverSlot(i);
            }}
            onDragLeave={() => setDragOverSlot((cur) => (cur === i ? null : cur))}
            onDrop={(e) => dropOnSlot(i, e)}
          >
            <span className="slpo-num">{i + 1}</span>
            {s ? (
              <span
                className="slpo-chip"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: s.id }))}
              >
                <span className="slpm-emoji">{s.emoji}</span> {s.text}
              </span>
            ) : (
              <span className="slpo-empty">drop here</span>
            )}
          </div>
        ))}
      </div>
      <div className="slps-tray">
        {tray.map((it) => (
          <span
            key={it.id}
            className="slps-chip"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))}
          >
            <span className="slpm-emoji">{it.emoji}</span> {it.text}
          </span>
        ))}
      </div>
      <div className="slpr-check-row">
        <button type="button" className="slpr-check-btn" disabled={!allPlaced} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`slpr-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 Perfect order!" : `${correctCount} of ${correctItems.length} correct -- try again!`}
            </span>
            <button type="button" className="slpr-retry-btn" onClick={reset}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Choice: tap the right answer ─────────────────────────
   Tap-based, self-validating -- no Check button needed. */
function ChoicePractice({ content }) {
  const [picked, setPicked] = useState(null);
  const options = content.options || [];

  return (
    <div className="slpc-body">
      {content.instruction && <p className="slpr-instruction slpc-instruction">{content.instruction}</p>}
      <div className="slpc-options">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === content.correctIndex;
          const showState = picked !== null && (isPicked || isCorrect);
          return (
            <button
              type="button"
              key={i}
              className={`slpc-card ${showState ? (isCorrect ? "is-correct" : "is-wrong") : ""}`}
              onClick={() => setPicked(i)}
            >
              <span className="slpc-emoji">{opt.emoji}</span>
              <span className="slpc-text">{opt.text}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={`slpc-feedback ${picked === content.correctIndex ? "is-good" : "is-retry"}`}>
          {picked === content.correctIndex ? "🎉 That's right!" : "Not quite -- try another one!"}
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Mixed: Unit Review combo ─────────────────────────
   Steps through one mini version of each mechanic used across the unit. */
function MixedPractice({ content }) {
  const parts = content.parts || [];
  const [step, setStep] = useState(0);
  const part = parts[step];

  function renderPart(p) {
    if (!p) return null;
    switch (p.mode) {
      case "match":
        return <MatchPractice content={p} />;
      case "sort":
        return <SortPractice content={p} />;
      case "order":
        return <OrderPractice content={p} />;
      case "choice":
        return <ChoicePractice content={p} />;
      default:
        return <BlankPractice content={p} />;
    }
  }

  return (
    <div className="slpx-body">
      <div className="slpx-stepper">
        <button type="button" className="slpx-nav" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          ←
        </button>
        <span className="slpx-label">
          Part {step + 1} / {parts.length}
          {part?.mode ? ` · ${part.mode}` : ""}
        </span>
        <button
          type="button"
          className="slpx-nav"
          disabled={step === parts.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          →
        </button>
      </div>
      <div className="slpx-part">{renderPart(part)}</div>
    </div>
  );
}

export default function SlidePractice({ content, lesson }) {
  const isAdult = lesson?.age_track === "adults";
  const mode = content.mode || "blank";

  return (
    <div className="slpr-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Practice"}
        title={content.title || "Practice Time"}
        subtitle={content.subtitle || "Let's practice together."}
        isAdult={isAdult}
      />
      {mode === "match" && <MatchPractice content={content} />}
      {mode === "sort" && <SortPractice content={content} />}
      {mode === "order" && <OrderPractice content={content} />}
      {mode === "choice" && <ChoicePractice content={content} />}
      {mode === "mixed" && <MixedPractice content={content} />}
      {mode === "blank" && <BlankPractice content={content} />}
    </div>
  );
}

const CSS = `
.slpr-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slpr-body {
  flex: 1;
  min-height: 0;
  padding: 12px 26px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.slpr-dialogue {
  background: var(--k-tint, #FFE4A3);
  border-radius: 14px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.slpr-line {
  font-family: 'Quicksand', sans-serif;
  font-size: 16.5px;
  color: #1B2A4A;
}
.slpr-speaker { font-weight: 700; margin-right: 6px; }
.slpr-text { font-weight: 600; }
.slpr-blank {
  display: inline-flex;
  min-width: 60px;
  justify-content: center;
  border-bottom: 3px solid;
  border-radius: 4px;
  padding: 1px 8px;
  margin: 0 2px;
  cursor: grab;
  transition: background 0.15s ease;
  font-weight: 700;
}
.slpr-blank.is-over { background: var(--k-bg-cool, #FFF3D2); }
.slpr-blank.is-filled { color: #1B2A4A; }
.slpr-blank.is-correct { border-color: #3B9A6B !important; background: #E4F6EC; color: #226B47; }
.slpr-blank.is-wrong { border-color: #E0637A !important; background: #FDEBEF; color: #B03A52; }
.slpr-wordbank {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 34px;
  border-radius: 10px;
  padding: 4px;
}
.slpr-wordbank.is-over { background: var(--k-bg-cool, #FFF3D2); }
.slpr-chip {
  background: var(--k-secondary, #FFE28A);
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 7px 16px;
  border-radius: 999px;
  cursor: grab;
}
.slpr-bank-done {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2CA97F;
}
.slpr-check-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.slpr-check-btn {
  background: var(--k-accent, #FFC933);
  color: var(--k-btn-text, #fff);
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 3px 0 var(--k-accent-dark, #E8A400);
}
.slpr-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--k-accent-dark, #E8A400); }
.slpr-check-btn:disabled { opacity: 0.35; cursor: default; }
.slpr-result { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; }
.slpr-result.is-good { color: #2C6B4F; }
.slpr-result.is-retry { color: #B03A52; }
.slpr-retry-btn {
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #DADCE3;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 7px 16px;
  cursor: pointer;
}

.slpr-instruction {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15.5px;
  color: #FFF3E4;
  background: #1B2A4A;
  text-align: center;
  margin: 0 20px;
  padding: 8px 18px;
  border-radius: 12px;
}

/* ── Match: picture + drop zone in a row, word tray below ── */
.slpm-body { flex: 1; min-height: 0; padding: 10px 26px 14px; display: flex; flex-direction: column; justify-content: center; gap: 14px; }
.slpm-row { display: flex; gap: 20px; justify-content: center; }
.slpm-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.slpm-card {
  width: 84px;
  height: 68px;
  border-radius: 14px;
  border: 3px solid var(--k-tint, #FFE4A3);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slpm-card-emoji { font-size: 30px; }
.slpm-emoji { font-size: 16px; }
.slpm-zone {
  width: 100px;
  min-height: 36px;
  border-radius: 10px;
  border: 3px dashed #DADCE3;
  background: #FAFAFB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #C2C6D2;
  padding: 6px 8px;
  text-align: center;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.slpm-zone.is-over { background: var(--k-bg-cool, #FFF3D2); border-color: var(--k-accent, #FFC933); }
.slpm-zone.is-correct { border: 3px solid #3B9A6B; background: #E4F6EC; color: #226B47; }
.slpm-zone.is-wrong { border-color: #E0637A; background: #FDEBEF; color: #B03A52; }
.slpm-tray { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; min-height: 34px; }
.slpm-chip {
  background: var(--k-secondary, #FFE28A);
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 18px;
  border-radius: 999px;
  cursor: grab;
}
.slpm-done { text-align: center; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: #2C6B4F; }

/* ── Sort ── */
.slps-body { flex: 1; min-height: 0; padding: 10px 26px 14px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.slps-buckets { display: flex; gap: 14px; height: 130px; }
.slps-bucket {
  flex: 1;
  border: 3px dashed var(--k-accent, #FFC933);
  border-radius: 16px;
  background: var(--k-bg-cool, #FFF3D2);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.15s ease;
}
.slps-bucket.is-over { background: #fff; }
.slps-bucket-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; color: #1B2A4A; text-align: center; }
.slps-bucket-items { display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; align-content: flex-start; flex: 1; }
.slps-tray { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; min-height: 30px; }
.slps-chip {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 5px 11px;
  border-radius: 999px;
  cursor: grab;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.slps-chip.is-correct { border-color: #3B9A6B; background: #E4F6EC; color: #226B47; }
.slps-chip.is-wrong { border-color: #E0637A; background: #FDEBEF; color: #B03A52; }

/* ── Order ── */
.slpo-body { flex: 1; min-height: 0; padding: 10px 26px 14px; display: flex; flex-direction: column; justify-content: center; gap: 12px; }
.slpo-slots { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.slpo-slot {
  min-width: 88px;
  min-height: 58px;
  border: 3px dashed #DADCE3;
  border-radius: 12px;
  background: #FAFAFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 5px;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.slpo-slot.is-over { background: var(--k-bg-cool, #FFF3D2); border-color: var(--k-accent, #FFC933); }
.slpo-slot.is-correct { border-color: #3B9A6B; background: #E4F6EC; }
.slpo-slot.is-wrong { border-color: #E0637A; background: #FDEBEF; }
.slpo-num { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px; color: #94A0B8; }
.slpo-empty { font-family: 'Quicksand', sans-serif; font-size: 10.5px; color: #C2C6D2; }
.slpo-chip {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  padding: 4px 9px;
  border-radius: 999px;
  cursor: grab;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ── Choice ── */
.slpc-body { flex: 1; min-height: 0; padding: 12px 26px 14px; display: flex; flex-direction: column; gap: 14px; justify-content: center; }
.slpc-instruction { font-size: 17px; }
.slpc-options { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.slpc-card {
  width: 140px;
  padding: 16px 12px;
  border-radius: 18px;
  border: 3px solid var(--k-tint, #FFE4A3);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.slpc-card:hover { transform: translateY(-2px); }
.slpc-card.is-correct { border-color: #3B9A6B; background: #E4F6EC; }
.slpc-card.is-wrong { border-color: #E0637A; background: #FDEBEF; }
.slpc-emoji { font-size: 38px; }
.slpc-text { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: #1B2A4A; }
.slpc-feedback { text-align: center; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; }
.slpc-feedback.is-good { color: #2C6B4F; }
.slpc-feedback.is-retry { color: #B03A52; }

/* ── Mixed (Unit Review combo) ── */
.slpx-body { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.slpx-stepper { display: flex; align-items: center; justify-content: center; gap: 14px; padding: 8px 20px 0; flex-shrink: 0; }
.slpx-nav {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: var(--k-bg-cool, #D5E9E8);
  color: #1B2A4A;
  font-weight: 700;
  cursor: pointer;
}
.slpx-nav:disabled { opacity: 0.3; cursor: default; }
.slpx-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #7C8598;
}
.slpx-part { flex: 1; min-height: 0; display: flex; flex-direction: column; overflow: hidden; }
`;

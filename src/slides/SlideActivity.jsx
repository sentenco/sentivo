import { useMemo, useState } from "react";
import SlideHeader from "./SlideHeader";

const SPEAKER_COLOR = { A: "#FF9478", B: "#6FC9A3" };
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

/* ───────────────────────── Blank: fill-in-the-blank chat ─────────────────────────
   Drag word-bank chips into blanks inside a short dialogue. Has a Check button
   since it's drag-based -- nothing self-validates until the student asks. */
function BlankActivity({ content, isAdult }) {
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
              onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ source: "bank", id: w.id }))}
            >
              {w.word}
            </span>
          ))
        )}
      </div>

      <div className="sla-check-row">
        <button
          type="button"
          className="sla-check-btn"
          disabled={!allFilled}
          onClick={() => setChecked(true)}
        >
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`sla-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 All correct!" : `${correctCount} of ${totalBlanks} correct -- try again!`}
            </span>
            <button type="button" className="sla-retry-btn" onClick={resetAll}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Match: tap word to its picture ─────────────────────────
   Tap-based, so every pick self-validates instantly -- no Check button needed. */
function MatchActivity({ content }) {
  const pairs = content.pairs || [];
  const leftItems = useMemo(() => shuffle(pairs.map((p, i) => ({ id: i, ...p }))), [content.pairs]);
  const rightItems = useMemo(() => shuffle(pairs.map((p, i) => ({ id: i, ...p }))), [content.pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState(() => new Set());
  const [wrongFlash, setWrongFlash] = useState(null);

  const allMatched = matched.size === pairs.length && pairs.length > 0;

  function pickLeft(id) {
    if (matched.has(id)) return;
    setSelectedLeft(id);
  }
  function pickRight(id) {
    if (matched.has(id) || selectedLeft === null) return;
    if (selectedLeft === id) {
      setMatched((prev) => new Set(prev).add(id));
      setSelectedLeft(null);
    } else {
      setWrongFlash(id);
      setTimeout(() => setWrongFlash(null), 450);
      setSelectedLeft(null);
    }
  }

  return (
    <div className="slam-body">
      {content.instruction && <p className="slam-instruction">{content.instruction}</p>}
      <div className="slam-columns">
        <div className="slam-col">
          {leftItems.map((it) => (
            <button
              type="button"
              key={it.id}
              className={`slam-card ${selectedLeft === it.id ? "is-selected" : ""} ${matched.has(it.id) ? "is-matched" : ""}`}
              onClick={() => pickLeft(it.id)}
              disabled={matched.has(it.id)}
            >
              <span className="slam-emoji">{it.emoji}</span>
            </button>
          ))}
        </div>
        <div className="slam-col">
          {rightItems.map((it) => (
            <button
              type="button"
              key={it.id}
              className={`slam-card slam-card--word ${matched.has(it.id) ? "is-matched" : ""} ${
                wrongFlash === it.id ? "is-wrong" : ""
              }`}
              onClick={() => pickRight(it.id)}
              disabled={matched.has(it.id)}
            >
              {it.word}
            </button>
          ))}
        </div>
      </div>
      {allMatched && <div className="slam-done">🎉 Great matching!</div>}
    </div>
  );
}

/* ───────────────────────── Sort: drag into one of two groups ───────────────────────── */
function SortActivity({ content }) {
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

  const allCorrect =
    checked && (content.items || []).every((it, i) => placed[i] === it.bucket);
  const correctCount = checked
    ? (content.items || []).filter((it, i) => placed[i] === it.bucket).length
    : 0;

  return (
    <div className="slas-body">
      {content.instruction && <p className="slam-instruction">{content.instruction}</p>}
      <div className="slas-buckets">
        {buckets.map((b, bi) => (
          <div
            key={bi}
            className={`slas-bucket ${dragOverBucket === bi ? "is-over" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverBucket(bi);
            }}
            onDragLeave={() => setDragOverBucket((cur) => (cur === bi ? null : cur))}
            onDrop={(e) => dropOn(bi, e)}
          >
            <div className="slas-bucket-label">
              <span className="slam-emoji">{b.emoji}</span> {b.label}
            </div>
            <div className="slas-bucket-items">
              {(content.items || [])
                .map((it, i) => ({ ...it, id: i }))
                .filter((it) => placed[it.id] === bi)
                .map((it) => (
                  <span
                    key={it.id}
                    className={`slas-chip ${checked ? (it.bucket === bi ? "is-correct" : "is-wrong") : ""}`}
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))
                    }
                  >
                    <span className="slam-emoji">{it.emoji}</span> {it.text}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slas-tray">
        {items.map((it) => (
          <span
            key={it.id}
            className="slas-chip"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))}
          >
            <span className="slam-emoji">{it.emoji}</span> {it.text}
          </span>
        ))}
      </div>
      <div className="sla-check-row">
        <button type="button" className="sla-check-btn" disabled={!allPlaced} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`sla-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 All correct!" : `${correctCount} of ${(content.items || []).length} correct -- try again!`}
            </span>
            <button type="button" className="sla-retry-btn" onClick={reset}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Order: drag into the right sequence ───────────────────────── */
function OrderActivity({ content }) {
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
    <div className="slao-body">
      {content.instruction && <p className="slam-instruction">{content.instruction}</p>}
      <div className="slao-slots">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`slao-slot ${dragOverSlot === i ? "is-over" : ""} ${
              checked ? (s?.id === correctItems[i]?.id ? "is-correct" : "is-wrong") : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverSlot(i);
            }}
            onDragLeave={() => setDragOverSlot((cur) => (cur === i ? null : cur))}
            onDrop={(e) => dropOnSlot(i, e)}
          >
            <span className="slao-num">{i + 1}</span>
            {s ? (
              <span
                className="slao-chip"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: s.id }))}
              >
                <span className="slam-emoji">{s.emoji}</span> {s.text}
              </span>
            ) : (
              <span className="slao-empty">drop here</span>
            )}
          </div>
        ))}
      </div>
      <div className="slas-tray">
        {tray.map((it) => (
          <span
            key={it.id}
            className="slas-chip"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: it.id }))}
          >
            <span className="slam-emoji">{it.emoji}</span> {it.text}
          </span>
        ))}
      </div>
      <div className="sla-check-row">
        <button type="button" className="sla-check-btn" disabled={!allPlaced} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`sla-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 Perfect order!" : `${correctCount} of ${correctItems.length} correct -- try again!`}
            </span>
            <button type="button" className="sla-retry-btn" onClick={reset}>
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
function ChoiceActivity({ content }) {
  const [picked, setPicked] = useState(null);
  const options = content.options || [];

  return (
    <div className="slac-body">
      {content.instruction && <p className="slam-instruction slac-instruction">{content.instruction}</p>}
      <div className="slac-options">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === content.correctIndex;
          const showState = picked !== null && (isPicked || isCorrect);
          return (
            <button
              type="button"
              key={i}
              className={`slac-card ${showState ? (isCorrect ? "is-correct" : "is-wrong") : ""}`}
              onClick={() => setPicked(i)}
            >
              <span className="slac-emoji">{opt.emoji}</span>
              <span className="slac-text">{opt.text}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={`slac-feedback ${picked === content.correctIndex ? "is-good" : "is-retry"}`}>
          {picked === content.correctIndex ? "🎉 That's right!" : "Not quite -- try another one!"}
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Mixed: Unit Review combo ─────────────────────────
   Steps through one mini version of each mechanic used across the unit. */
function MixedActivity({ content, isAdult }) {
  const parts = content.parts || [];
  const [step, setStep] = useState(0);
  const part = parts[step];

  function renderPart(p) {
    if (!p) return null;
    switch (p.mode) {
      case "match":
        return <MatchActivity content={p} />;
      case "sort":
        return <SortActivity content={p} />;
      case "order":
        return <OrderActivity content={p} />;
      case "choice":
        return <ChoiceActivity content={p} />;
      default:
        return <BlankActivity content={p} isAdult={isAdult} />;
    }
  }

  return (
    <div className="slmx-body">
      <div className="slmx-stepper">
        <button type="button" className="slmx-nav" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          ←
        </button>
        <span className="slmx-label">
          Part {step + 1} / {parts.length}{part?.mode ? ` · ${part.mode}` : ""}
        </span>
        <button
          type="button"
          className="slmx-nav"
          disabled={step === parts.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          →
        </button>
      </div>
      <div className="slmx-part">{renderPart(part)}</div>
    </div>
  );
}

export default function SlideActivity({ content, lesson }) {
  const isAdult = lesson?.age_track === "adults";
  const mode = content.mode || "blank";

  return (
    <div className={`sla-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Activity"}
        title={content.title || "Fill in the Blanks"}
        subtitle={content.subtitle || "Drag each word into the right blank."}
        isAdult={isAdult}
      />
      {mode === "match" && <MatchActivity content={content} />}
      {mode === "sort" && <SortActivity content={content} />}
      {mode === "order" && <OrderActivity content={content} />}
      {mode === "choice" && <ChoiceActivity content={content} />}
      {mode === "mixed" && <MixedActivity content={content} isAdult={isAdult} />}
      {mode === "blank" && <BlankActivity content={content} isAdult={isAdult} />}
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
  padding: 14px 26px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
}
.sla-dialogue {
  background: var(--k-tint, #F7F8FA);
  border-radius: 14px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 11px;
}
.sla-line {
  font-family: 'Quicksand', sans-serif;
  font-size: 17px;
  color: #1B2A4A;
}
.sla-speaker {
  font-weight: 700;
  margin-right: 6px;
}
.sla-text { font-weight: 600; }
.sla-blank {
  display: inline-flex;
  min-width: 64px;
  justify-content: center;
  border-bottom: 3px solid;
  border-radius: 4px;
  padding: 1px 8px;
  margin: 0 2px;
  cursor: grab;
  transition: background 0.15s ease;
  font-weight: 700;
}
.sla-blank.is-over { background: #FFF3E9; }
.sla-blank.is-filled { color: #1B2A4A; }
.sla-blank.is-correct { border-color: #3B9A6B !important; background: #E4F6EC; color: #226B47; }
.sla-blank.is-wrong { border-color: #E0637A !important; background: #FDEBEF; color: #B03A52; }
.sla-wordbank {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 36px;
  border-radius: 10px;
  padding: 6px;
  transition: background 0.15s ease;
}
.sla-wordbank.is-over { background: #FFF3E9; }
.sla-chip {
  background: #FFE8C2;
  color: #8A5A1E;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 7px 16px;
  border-radius: 999px;
  cursor: grab;
}
.sla-bank-done {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2CA97F;
}
.sla-check-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 2px;
}
.sla-check-btn {
  background: var(--k-accent, #FF9478);
  color: #fff;
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 3px 0 var(--k-accent-dark, #E06B4C);
}
.sla-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--k-accent-dark, #E06B4C); }
.sla-check-btn:disabled { opacity: 0.35; cursor: default; }
.sla-result {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
}
.sla-result.is-good { color: #2C6B4F; }
.sla-result.is-retry { color: #B03A52; }
.sla-retry-btn {
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

.slam-instruction {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2A4A;
  text-align: center;
  margin: 0;
  padding: 0 20px;
}

/* ── Match ── */
.slam-body { flex: 1; min-height: 0; padding: 12px 26px 16px; display: flex; flex-direction: column; gap: 14px; overflow: auto; }
.slam-columns { display: flex; gap: 20px; justify-content: center; flex: 1; }
.slam-col { display: flex; flex-direction: column; gap: 10px; justify-content: center; }
.slam-card {
  min-width: 96px;
  padding: 12px 18px;
  border-radius: 14px;
  border: 3px solid var(--k-tint, #EEE);
  background: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2A4A;
  cursor: pointer;
  text-align: center;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.slam-card:hover:not(:disabled) { transform: translateY(-2px); }
.slam-card.is-selected { border-color: var(--k-accent, #FF9478); background: var(--k-tint, #FFEDE0); }
.slam-card.is-matched { border-color: #6FC9A3; background: #E4F6EC; color: #226B47; opacity: 0.85; }
.slam-card.is-wrong { border-color: #E0637A; background: #FDEBEF; }
.slam-emoji { font-size: 26px; }
.slam-done {
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #2C6B4F;
}

/* ── Sort ── */
.slas-body { flex: 1; min-height: 0; padding: 12px 26px 16px; display: flex; flex-direction: column; gap: 12px; overflow: auto; }
.slas-buckets { display: flex; gap: 14px; flex: 1; min-height: 0; }
.slas-bucket {
  flex: 1;
  border: 3px dashed var(--k-accent, #FF9478);
  border-radius: 16px;
  background: var(--k-tint, #FFEDE0);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: background 0.15s ease;
}
.slas-bucket.is-over { background: #fff; }
.slas-bucket-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1B2A4A;
  text-align: center;
}
.slas-bucket-items { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; align-content: flex-start; flex: 1; }
.slas-tray { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; min-height: 30px; }
.slas-chip {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  padding: 6px 12px;
  border-radius: 999px;
  cursor: grab;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.slas-chip.is-correct { border-color: #3B9A6B; background: #E4F6EC; color: #226B47; }
.slas-chip.is-wrong { border-color: #E0637A; background: #FDEBEF; color: #B03A52; }

/* ── Order ── */
.slao-body { flex: 1; min-height: 0; padding: 12px 26px 16px; display: flex; flex-direction: column; gap: 12px; overflow: auto; }
.slao-slots { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.slao-slot {
  min-width: 96px;
  min-height: 64px;
  border: 3px dashed #DADCE3;
  border-radius: 12px;
  background: #FAFAFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.slao-slot.is-over { background: var(--k-tint, #FFEDE0); border-color: var(--k-accent, #FF9478); }
.slao-slot.is-correct { border-color: #3B9A6B; background: #E4F6EC; }
.slao-slot.is-wrong { border-color: #E0637A; background: #FDEBEF; }
.slao-num {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #94A0B8;
}
.slao-empty { font-family: 'Quicksand', sans-serif; font-size: 11px; color: #C2C6D2; }
.slao-chip {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 999px;
  cursor: grab;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ── Choice ── */
.slac-body { flex: 1; min-height: 0; padding: 14px 26px 16px; display: flex; flex-direction: column; gap: 16px; justify-content: center; }
.slac-instruction { font-size: 18px; }
.slac-options { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.slac-card {
  width: 150px;
  padding: 18px 14px;
  border-radius: 18px;
  border: 3px solid var(--k-tint, #EEE);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.slac-card:hover { transform: translateY(-2px); }
.slac-card.is-correct { border-color: #3B9A6B; background: #E4F6EC; }
.slac-card.is-wrong { border-color: #E0637A; background: #FDEBEF; }
.slac-emoji { font-size: 40px; }
.slac-text { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15.5px; color: #1B2A4A; }
.slac-feedback {
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
}
.slac-feedback.is-good { color: #2C6B4F; }
.slac-feedback.is-retry { color: #B03A52; }

/* ── Mixed (Unit Review combo) ── */
.slmx-body { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.slmx-stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 10px 20px 0;
  flex-shrink: 0;
}
.slmx-nav {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: none;
  background: var(--k-tint, #FFEDE0);
  color: var(--k-accent-dark, #E06B4C);
  font-weight: 700;
  cursor: pointer;
}
.slmx-nav:disabled { opacity: 0.3; cursor: default; }
.slmx-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #7C8598;
}
.slmx-part { flex: 1; min-height: 0; display: flex; flex-direction: column; }

/* ── Adults theme (blank mode only -- new mechanics are Kids-only) ── */
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
.sla-slide.is-adult .sla-check-btn { background: #1B2A4A; box-shadow: none; border-radius: 4px; font-family: 'Inter', sans-serif; }
.sla-slide.is-adult .sla-check-btn:active { transform: none; }
.sla-slide.is-adult .sla-retry-btn { border-radius: 4px; font-family: 'Inter', sans-serif; }
`;

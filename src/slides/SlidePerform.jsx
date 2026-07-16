import { useEffect, useMemo, useState } from "react";
import SlideHeader from "./SlideHeader";
import ImagePlaceholder from "./ImagePlaceholder";
import ZoomOverlay from "./ZoomOverlay";

const SPEAKER_COLOR = { A: "#1B2A4A", B: "#1B2A4A" };

function shuffleWords(words) {
  const a = (words || []).map((text, i) => ({ text, id: i }));
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ───────────────────────── Role-play: act out a short scene ─────────────────────────
   Content authors: max 3 lines so this fits with no scroll. */
function RoleplayPerform({ content }) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="slpf-roleplay">
      {content.image_url ? (
        <button type="button" className="slpf-scene-img" onClick={() => setZoomed(true)}>
          <img src={content.image_url} alt="" />
        </button>
      ) : (
        <div className="slpf-scene-img">
          <ImagePlaceholder note={content.image_note} compact />
        </div>
      )}
      <div className="slpf-roleplay-right">
        <div className="slpf-dialogue">
          {(content.lines || []).map((line, i) => (
            <div className="slpf-line" key={i}>
              <span className="slpf-speaker" style={{ color: SPEAKER_COLOR[line.speaker] || "#1B2A4A" }}>
                {line.speaker}:
              </span>
              <span className="slpf-text">{line.text}</span>
            </div>
          ))}
        </div>
        {content.twist && <div className="slpf-twist">✦ {content.twist}</div>}
      </div>
      <ZoomOverlay active={zoomed} onClose={() => setZoomed(false)}>
        <img src={content.image_url} alt="" className="slpf-scene-img-big" />
      </ZoomOverlay>
    </div>
  );
}

/* ───────────────────────── Talk: one-minute talk / show-and-tell ───────────────────────── */
function TalkPerform({ content }) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <div className="slpf-body slpf-body--center">
      <button type="button" className="slpf-mic" aria-label="Tap to make bigger" onClick={() => setZoomed(true)}>
        🎤
      </button>
      <p className="slpf-prompt">{content.prompt}</p>
      {(content.starters || []).length > 0 && (
        <div className="slpf-starters">
          {content.starters.map((s, i) => (
            <span className="slpf-starter" key={i}>
              {s}
            </span>
          ))}
        </div>
      )}
      <ZoomOverlay active={zoomed} onClose={() => setZoomed(false)}>
        <span className="slpf-mic-big" aria-hidden="true">🎤</span>
      </ZoomOverlay>
    </div>
  );
}

/* ───────────────────────── Interview: a short question list ─────────────────────────
   Content authors: max 3 questions so this fits with no scroll. */
function InterviewPerform({ content }) {
  return (
    <div className="slpf-body">
      <div className="slpf-qlist">
        {(content.questions || []).map((q, i) => (
          <div className="slpf-qcard" key={i}>
            <span className="slpf-qnum">{i + 1}</span>
            <span className="slpf-qtext">{q}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Build: sentence builder ─────────────────────────
   One question at a time (stepper), jumbled words dragged into slots to
   build the spoken answer. Content authors: max 3 questions, max 4 words
   per answer, so each step fits with no scroll. */
function BuildPerform({ content }) {
  const prompts = content.prompts || [];
  const [step, setStep] = useState(0);
  const prompt = prompts[step] || {};
  const words = prompt.words || [];

  const [tray, setTray] = useState(() => shuffleWords(words));
  const [slots, setSlots] = useState(() => Array(words.length).fill(null));
  const [checked, setChecked] = useState(false);
  const [dragOverSlot, setDragOverSlot] = useState(null);

  useEffect(() => {
    setTray(shuffleWords(words));
    setSlots(Array(words.length).fill(null));
    setChecked(false);
    setDragOverSlot(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const allPlaced = slots.every((s) => s !== null) && slots.length > 0;
  const allCorrect = checked && slots.every((s, i) => s?.text === words[i]);

  function dropOnSlot(slotIndex, e) {
    e.preventDefault();
    setDragOverSlot(null);
    let payload;
    try {
      payload = JSON.parse(e.dataTransfer.getData("text/plain"));
    } catch {
      return;
    }
    const item = tray.find((w) => w.id === payload.id);
    if (!item) return;
    setChecked(false);
    setTray((prev) => prev.filter((w) => w.id !== payload.id));
    setSlots((prev) => {
      const next = [...prev];
      const displaced = next[slotIndex];
      next[slotIndex] = item;
      if (displaced) setTray((t) => [...t, displaced]);
      return next;
    });
  }

  function reset() {
    setTray(shuffleWords(words));
    setSlots(Array(words.length).fill(null));
    setChecked(false);
  }

  return (
    <div className="slpf-build-body">
      <div className="slpf-build-stepper">
        <button type="button" className="slpf-build-nav" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          ←
        </button>
        <span className="slpf-build-label">
          Question {step + 1} / {prompts.length}
        </span>
        <button
          type="button"
          className="slpf-build-nav"
          disabled={step === prompts.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          →
        </button>
      </div>
      <p className="slpf-build-question">{prompt.question}</p>
      <div className="slpf-build-slots">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`slpf-build-slot ${dragOverSlot === i ? "is-over" : ""} ${
              checked ? (s?.text === words[i] ? "is-correct" : "is-wrong") : ""
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOverSlot(i);
            }}
            onDragLeave={() => setDragOverSlot((cur) => (cur === i ? null : cur))}
            onDrop={(e) => dropOnSlot(i, e)}
          >
            {s ? (
              <span
                className="slpf-build-chip"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: s.id }))}
              >
                {s.text}
              </span>
            ) : (
              <span className="slpf-build-empty">···</span>
            )}
          </div>
        ))}
      </div>
      <div className="slpf-build-tray">
        {tray.map((w) => (
          <span
            key={w.id}
            className="slpf-build-chip"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", JSON.stringify({ id: w.id }))}
          >
            {w.text}
          </span>
        ))}
      </div>
      <div className="slpf-build-check-row">
        <button type="button" className="slpf-build-check-btn" disabled={!allPlaced} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`slpf-build-result ${allCorrect ? "is-good" : "is-retry"}`}>
              {allCorrect ? "🎉 Perfect!" : "Not quite -- try again!"}
            </span>
            <button type="button" className="slpf-build-retry-btn" onClick={reset}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────── Choose: opinion pick, no right answer ───────────────────────── */
function ChoosePerform({ content }) {
  const [picked, setPicked] = useState(null);
  const options = content.options || [];

  return (
    <div className="slpf-body slpf-body--center">
      {content.prompt && <p className="slpf-prompt">{content.prompt}</p>}
      <div className="slpf-choose-options">
        {options.map((opt, i) => (
          <button
            type="button"
            key={i}
            className={`slpf-choose-card ${picked === i ? "is-picked" : ""}`}
            onClick={() => setPicked(i)}
          >
            <span className="slpf-choose-emoji">{opt.emoji}</span>
            <span className="slpf-choose-text">{opt.text}</span>
          </button>
        ))}
      </div>
      {picked !== null && <div className="slpf-why">💬 Tell me why!</div>}
    </div>
  );
}

export default function SlidePerform({ content }) {
  const mode = content.mode || "talk";

  return (
    <div className="slpf-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Activity"}
        title={content.title || "Your Turn"}
        subtitle={content.subtitle || "Let's use what you learned."}
      />
      {mode === "roleplay" && <RoleplayPerform content={content} />}
      {mode === "interview" && <InterviewPerform content={content} />}
      {mode === "choose" && <ChoosePerform content={content} />}
      {mode === "talk" && <TalkPerform content={content} />}
      {mode === "build" && <BuildPerform content={content} />}
    </div>
  );
}

const CSS = `
.slpf-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slpf-body {
  flex: 1;
  min-height: 0;
  padding: 10px 28px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.slpf-body--center { align-items: center; justify-content: center; text-align: center; }

/* ── Role-play: image left, dialogue right ── */
.slpf-roleplay {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 16px;
  padding: 10px 24px 14px 24px;
}
.slpf-scene-img {
  flex-shrink: 0;
  width: 32%;
  display: block;
  border: none;
  background: none;
  padding: 0;
}
button.slpf-scene-img { cursor: pointer; }
.slpf-scene-img .img-ph { border-radius: 14px; }
.slpf-scene-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; }
.slpf-scene-img-big { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 18px; }
.slpf-roleplay-right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.slpf-dialogue {
  background: var(--k-tint, #FFE4A3);
  border-radius: 14px;
  padding: 11px 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.slpf-line { font-family: 'Quicksand', sans-serif; font-size: 15.5px; color: #1B2A4A; }
.slpf-speaker { font-weight: 700; margin-right: 6px; }
.slpf-text { font-weight: 600; }
.slpf-twist {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1B2A4A;
  text-align: center;
  padding: 2px 8px;
}

.slpf-mic { font-size: 42px; border: none; background: none; padding: 0; cursor: pointer; line-height: 1; }
.slpf-mic-big { font-size: 140px; line-height: 1; }
.slpf-prompt {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #1B2A4A;
  margin: 0;
  max-width: 440px;
}
.slpf-starters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.slpf-starter {
  background: var(--k-bg-cool, #D5E9E8);
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 7px 15px;
  border-radius: 999px;
}

.slpf-qlist { display: flex; flex-direction: column; gap: 10px; justify-content: center; flex: 1; }
.slpf-qcard {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--k-bg-cool, #FFF3D2);
  border-radius: 14px;
  padding: 11px 16px;
}
.slpf-qnum {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: var(--k-accent, #FFC933);
  color: var(--k-btn-text, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.slpf-qtext { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15.5px; color: #1B2A4A; }

.slpf-choose-options { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }
.slpf-choose-card {
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
.slpf-choose-card:hover { transform: translateY(-2px); }
.slpf-choose-card.is-picked { border-color: var(--k-accent, #FFC933); background: var(--k-bg-cool, #FFF3D2); }
.slpf-choose-emoji { font-size: 38px; }
.slpf-choose-text { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: #1B2A4A; }
.slpf-why {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #1B2A4A;
}

/* ── Build: sentence builder ── */
.slpf-build-body { flex: 1; min-height: 0; padding: 10px 28px 14px; display: flex; flex-direction: column; justify-content: center; gap: 12px; }
.slpf-build-stepper { display: flex; align-items: center; justify-content: center; gap: 14px; }
.slpf-build-nav {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: none;
  background: var(--k-bg-cool, #D5E9E8);
  color: #1B2A4A;
  font-weight: 700;
  cursor: pointer;
}
.slpf-build-nav:disabled { opacity: 0.3; cursor: default; }
.slpf-build-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #7C8598;
}
.slpf-build-question {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #1B2A4A;
  text-align: center;
  margin: 0;
}
.slpf-build-slots { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.slpf-build-slot {
  min-width: 84px;
  min-height: 42px;
  border: 3px dashed #DADCE3;
  border-radius: 10px;
  background: #FAFAFB;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.slpf-build-slot.is-over { background: var(--k-bg-cool, #FFF3D2); border-color: var(--k-accent, #FFC933); }
.slpf-build-slot.is-correct { border-color: #3B9A6B; border-style: solid; background: #E4F6EC; }
.slpf-build-slot.is-wrong { border-color: #E0637A; border-style: solid; background: #FDEBEF; }
.slpf-build-empty { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #C2C6D2; }
.slpf-build-tray { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; min-height: 34px; }
.slpf-build-chip {
  background: var(--k-secondary, #FFE28A);
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 7px 16px;
  border-radius: 999px;
  cursor: grab;
}
.slpf-build-check-row { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
.slpf-build-check-btn {
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
.slpf-build-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 var(--k-accent-dark, #E8A400); }
.slpf-build-check-btn:disabled { opacity: 0.35; cursor: default; }
.slpf-build-result { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px; }
.slpf-build-result.is-good { color: #2C6B4F; }
.slpf-build-result.is-retry { color: #B03A52; }
.slpf-build-retry-btn {
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
`;

import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "./shiftTracks";

// SHIFT player, rebuilt around a single mechanic: a connected chain of
// in-character exchanges where the target tense stays hidden from the
// student. The teacher (not speech recognition) types what the student
// actually said out loud and marks it correct or wrong -- that judgment is
// what advances the scene. See shiftRestaurant1.js for the lesson shape.

function TopBar() {
  return (
    <div className="sh-topbar">
      <img src="/logo-sentivo.png" alt="" className="sh-brand-logo" />
      <span className="sh-brand-name">entivo</span>
    </div>
  );
}

function ProgressRow({ total, doneCount, currentIdx }) {
  return (
    <div className="sh-progress-row">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`sh-seg ${i < doneCount ? "is-done" : i === currentIdx ? "is-current" : ""}`}
        />
      ))}
    </div>
  );
}

const ME_EMOJI = "🙂";

function Avatar({ emoji, side, size }) {
  return <div className={`sh-avatar sh-avatar--${side}${size ? ` sh-avatar--${size}` : ""}`}>{emoji}</div>;
}

function HistoryLog({ rows, themEmoji }) {
  if (rows.length === 0) return null;
  return (
    <div className="sh-history">
      {rows.map((row, i) => (
        <div className="sh-hist-row" key={i}>
          <div className="sh-bubble-line sh-bubble-line--them">
            <Avatar emoji={themEmoji} side="them" />
            <div className="sh-bubble sh-bubble--them">{row.q}</div>
          </div>
          <div className="sh-bubble-line sh-bubble-line--me">
            <div className="sh-bubble sh-bubble--me">{row.a}</div>
            <Avatar emoji={ME_EMOJI} side="me" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ChainStage({ lesson, chainIdx, history, onAdvance }) {
  const [attempt, setAttempt] = useState(0);
  const [clueOpen, setClueOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [display, setDisplay] = useState(null); // { text, isRight } | null, the most recent submitted attempt
  const [advancing, setAdvancing] = useState(false); // true only during the pause after a correct answer

  const step = lesson.chain[chainIdx];
  const isDone = chainIdx >= lesson.chain.length;

  if (isDone) return null;

  const avatarEmoji = display ? ME_EMOJI : lesson.themEmoji;
  const avatarSide = display ? "me" : "them";
  const avatarWrong = display && !display.isRight;
  const lineText = display ? display.text : step.question;
  const lineClass = display && !display.isRight ? "sh-line is-wrong" : "sh-line";

  function submit(isRight) {
    const text = typed.trim() || "(no answer typed)";
    setDisplay({ text, isRight });
    if (isRight) {
      setAdvancing(true);
      window.setTimeout(() => {
        onAdvance(step.question, text);
        setAttempt(0);
        setClueOpen(false);
        setTyped("");
        setDisplay(null);
        setAdvancing(false);
      }, 900);
    } else {
      setAttempt((a) => a + 1);
      setTyped("");
    }
  }

  return (
    <>
      <HistoryLog rows={history} themEmoji={lesson.themEmoji} />
      <div className="sh-slide">
        <div className={`sh-avatar sh-avatar--${avatarSide} sh-avatar--lg${avatarWrong ? " is-wrong" : ""}`}>{avatarEmoji}</div>
        <div className={lineClass}>{lineText}</div>
      </div>

      {!advancing && (
        <div className="sh-compose">
          <div className="sh-clue-row">
            <button type="button" className="sh-clue-btn" onClick={() => setClueOpen((o) => !o)}>
              💡 Show clue
            </button>
            {clueOpen && (
              <div className="sh-clue-box" dangerouslySetInnerHTML={{ __html: step.clue }} />
            )}
          </div>
          <label className="sh-type-label">What did the student say?</label>
          <input
            type="text"
            className="sh-type-input"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder="Type it as you hear it..."
          />
          <div className="sh-teacher-buttons">
            <button type="button" className="sh-choice-btn sh-choice-btn--bad" onClick={() => submit(false)}>
              {attempt > 0 ? "Still wrong" : "✗ Wrong tense"}
            </button>
            <button type="button" className="sh-choice-btn sh-choice-btn--good" onClick={() => submit(true)}>
              ✓ Correct
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function PromptStage({ eyebrow, prompt, ctaLabel, onContinue }) {
  return (
    <div className="sh-prompt-stage">
      <span className="sh-prompt-eyebrow">{eyebrow}</span>
      <p className="sh-prompt-text">{prompt}</p>
      <button type="button" className="sh-choice-btn sh-choice-btn--good sh-continue-btn" onClick={onContinue}>
        {ctaLabel} →
      </button>
    </div>
  );
}

function WrapStage({ prompt }) {
  return (
    <div className="sh-prompt-stage">
      <span className="sh-prompt-eyebrow">Wrap</span>
      <p className="sh-prompt-text">{prompt}</p>
      <button type="button" className="sh-choice-btn sh-choice-btn--good sh-continue-btn" onClick={() => window.close()}>
        Finish lesson
      </button>
    </div>
  );
}

export default function Shift() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [stage, setStage] = useState("cover");
  const [chainIdx, setChainIdx] = useState(0);
  const [history, setHistory] = useState([]);

  if (!lesson) {
    return (
      <div className="sh-shell">
        <style>{CSS}</style>
        <div className="sh-stage">
          <p className="sh-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  function advanceChain(question, answer) {
    setHistory((prev) => [...prev, { q: question, a: answer }]);
    const next = chainIdx + 1;
    if (next >= lesson.chain.length) {
      setStage("retell");
    } else {
      setChainIdx(next);
    }
  }

  return (
    <div className="sh-shell">
      <style>{CSS}</style>

      <div className="sh-stage">
        <div className="sh-panel">
          <TopBar />
          <div className="sh-hero">
            <div className="sh-hero-blob" />
            <div className="sh-hero-title">{lesson.scene.title}</div>
            <div className="sh-hero-sub">{lesson.scene.context}</div>
          </div>

          {stage !== "cover" && (
            <ProgressRow total={lesson.chain.length} doneCount={history.length} currentIdx={chainIdx} />
          )}

          {stage === "cover" && (
            <PromptStage
              eyebrow={`${lesson.code} · ${lesson.tenses}`}
              prompt={lesson.scenarioSet.say}
              ctaLabel="Begin"
              onContinue={() => setStage("chain")}
            />
          )}

          {stage === "chain" && (
            <ChainStage lesson={lesson} chainIdx={chainIdx} history={history} onAdvance={advanceChain} />
          )}

          {stage === "retell" && (
            <PromptStage eyebrow="Unaided Retell" prompt={lesson.retell.prompt} ctaLabel="Continue to Transfer" onContinue={() => setStage("transfer")} />
          )}

          {stage === "transfer" && (
            <PromptStage eyebrow="Transfer" prompt={lesson.transfer.question} ctaLabel="Continue to Wrap" onContinue={() => setStage("wrap")} />
          )}

          {stage === "wrap" && <WrapStage prompt={lesson.wrap.prompt} />}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

:root { color-scheme: light; }

.sh-shell {
  width: 100%;
  min-height: 100vh;
  background: #F4EDE8;
  color: #1B2A4A;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sh-shell * { box-sizing: border-box; }

.sh-missing { text-align: center; color: #5A6B92; margin-top: 60px; }

.sh-topbar { display: flex; align-items: center; gap: 6px; padding: 16px 18px 0; }
.sh-brand-logo { height: 20px; width: auto; display: block; }
.sh-brand-name { font-weight: 800; font-size: 14px; color: #1B2A4A; }

.sh-stage { width: 100%; max-width: 640px; margin: 0 auto; }

.sh-panel {
  background: #FBF4F1; border-radius: 26px; overflow: hidden;
  box-shadow: 0 20px 44px rgba(27,42,74,0.16); border: 1px solid #EDE1DB;
}

.sh-hero {
  margin: 18px 18px 0; background: #1B2A4A; border-radius: 18px; padding: 16px 20px 14px;
  position: relative; overflow: hidden; box-shadow: 0 12px 24px rgba(27,42,74,0.2);
}
.sh-hero-blob { position: absolute; width: 150px; height: 150px; border-radius: 50%; background: #F5C518; opacity: 0.18; top: -60px; right: -40px; }
.sh-hero-title { font-weight: 700; font-size: 14px; color: #FFFFFF; position: relative; }
.sh-hero-sub { font-size: 11.5px; color: #B9C3DC; margin-top: 2px; position: relative; }

.sh-progress-row { display: flex; gap: 4px; padding: 14px 22px 4px; }
.sh-seg { flex: 1; height: 3px; border-radius: 999px; background: #EDE1DB; transition: background 0.25s ease; }
.sh-seg.is-done { background: #2F9E58; }
.sh-seg.is-current { background: #E8B400; }

.sh-avatar {
  width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center;
  justify-content: center; font-size: 15px; background: #E7EBF3;
}
.sh-avatar--me { background: #FFF4D6; }
.sh-avatar--lg { width: 44px; height: 44px; font-size: 20px; margin-bottom: 10px; }
.sh-avatar--lg.is-wrong { background: #FBE4E9; }

.sh-history { display: flex; flex-direction: column; gap: 10px; padding: 16px 22px 4px; }
.sh-hist-row { display: flex; flex-direction: column; gap: 6px; padding-bottom: 10px; border-bottom: 1px solid #EDE1DB; }
.sh-bubble-line { display: flex; align-items: flex-end; gap: 8px; }
.sh-bubble-line--them { justify-content: flex-start; }
.sh-bubble-line--me { justify-content: flex-end; }
.sh-bubble {
  font-size: 15px; line-height: 1.4; padding: 8px 13px; border-radius: 14px; max-width: 78%;
  font-family: 'Fraunces', serif; font-weight: 500;
}
.sh-bubble--them { background: #E7EBF3; color: #1B2A4A; border-bottom-left-radius: 4px; }
.sh-bubble--me { background: #FFF4D6; color: #1B2A4A; font-weight: 600; border-bottom-right-radius: 4px; }

.sh-slide {
  background: #FFFFFF; margin: 14px auto; border-radius: 18px; display: flex; flex-direction: column;
  align-items: center; justify-content: center; padding: 16px 22px; text-align: center;
  box-shadow: 0 8px 18px rgba(27,42,74,0.06); width: fit-content; max-width: calc(100% - 36px);
}
.sh-line { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(17px, 2.4vw, 20px); line-height: 1.35; color: #1B2A4A; max-width: 400px; }
.sh-line.is-wrong { color: #7A2438; }

.sh-compose { background: #FFFFFF; border-top: 1px solid #EDE1DB; padding: 16px 22px 20px; margin: 0 18px 18px; border-radius: 0 0 18px 18px; }
.sh-clue-row { text-align: center; margin-bottom: 10px; }
.sh-clue-btn { font-family: 'Inter', sans-serif; font-size: 11.5px; font-weight: 700; color: #8A6D1F; background: none; border: none; cursor: pointer; padding: 0; }
.sh-clue-box { margin-top: 6px; font-size: 12px; color: #1B2A4A; background: #FFF4D6; border-radius: 8px; padding: 8px 10px; display: inline-block; }
.sh-clue-box b { font-weight: 800; }
.sh-type-label { display: block; text-align: center; font-size: 11px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; color: #5A6B92; margin-bottom: 8px; }
.sh-type-input {
  width: 100%; font-family: 'Inter', sans-serif; font-size: 14px; color: #1B2A4A; text-align: center;
  background: #FBF4F1; border: 1.5px solid #EDE1DB; border-radius: 12px; padding: 10px 14px; outline: none; margin-bottom: 12px;
}
.sh-type-input:focus { border-color: #E8B400; }
.sh-teacher-buttons { display: flex; gap: 8px; justify-content: center; }
.sh-choice-btn {
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; border-radius: 999px; padding: 9px 20px; cursor: pointer;
  border: 1.5px solid #EDE1DB; background: #FFFFFF; color: #1B2A4A;
}
.sh-choice-btn--bad:hover { border-color: #D6536D; color: #D6536D; }
.sh-choice-btn--good { background: #E7F5EC; border-color: #2F9E58; color: #2F9E58; }

.sh-prompt-stage { padding: 26px 26px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.sh-prompt-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #8A6D1F; background: #FFF4D6; border-radius: 999px; padding: 4px 14px; }
.sh-prompt-text { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; line-height: 1.45; color: #1B2A4A; max-width: 460px; margin: 0; }
.sh-continue-btn { margin-top: 4px; }

@media (max-width: 520px) {
  .sh-bubble { font-size: 13.5px; }
}
`;

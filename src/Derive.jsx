import { useState } from "react";
import { useParams } from "react-router-dom";
import { getLesson } from "./deriveTracks";

// DERIVE player: a real slide deck (Previous/Next navigation, not a live
// evolving card like Shift). One word family per lesson. Cover -> Word
// Family -> one gap-fill sentence slide per item (2 per form) -> End.
// The word bank is the teacher's click-to-mark input: the student says the
// answer out loud first, the teacher clicks whichever chip matches what
// they heard. Next only unlocks on a sentence slide once it's answered
// correctly; Previous is always free to revisit earlier slides.

function TopBar() {
  return (
    <div className="dv-brand">
      <img src="/logo-sentivo.png" alt="" className="dv-brand-logo" />
      <span className="dv-brand-name">entivo</span>
    </div>
  );
}

function CoverSlide({ title }) {
  return (
    <div className="dv-cover">
      <h2 className="dv-cover-title">{title}</h2>
    </div>
  );
}

function FamilySlide({ family }) {
  return (
    <div className="dv-fam-slide">
      <p className="dv-fam-label">Today's Family</p>
      <p className="dv-fam-root">{family.join(" → ")}</p>
    </div>
  );
}

function SentenceSlide({ sentence, family, slideNum, totalSentences, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [isRight, setIsRight] = useState(false);

  function pick(word) {
    if (isRight) return;
    setSelected(word);
    if (word === sentence.answer) {
      setIsRight(true);
      onCorrect();
    }
  }

  const [before, after] = sentence.text.split("___");

  return (
    <div className="dv-sent-slide">
      <p className="dv-sent-label">Sentence {slideNum} of {totalSentences}</p>
      <p className="dv-sentence">
        &ldquo;{before}
        <span className={`dv-blank${isRight ? " filled" : ""}`}>{isRight ? sentence.answer : "    "}</span>
        {after}&rdquo;
      </p>
      <p className="dv-bank-label">Word Bank</p>
      <div className="dv-bank">
        {family.map((word) => {
          let cls = "dv-chip";
          if (word === selected) cls += isRight ? " is-correct" : " is-wrong";
          return (
            <button type="button" key={word} className={cls} onClick={() => pick(word)}>
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EndSlide({ root, family, onFinish }) {
  const label = root.charAt(0).toUpperCase() + root.slice(1);
  return (
    <div className="dv-end-slide">
      <p className="dv-end-label">Family Complete</p>
      <h2 className="dv-end-title">You used every form of {label}</h2>
      <div className="dv-end-family">
        {family.map((w) => <span key={w} className="dv-end-chip">{w}</span>)}
      </div>
      <button type="button" className="dv-btn" onClick={onFinish}>Finish</button>
    </div>
  );
}

export default function Derive() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const [slideIdx, setSlideIdx] = useState(0);
  const [correctSet, setCorrectSet] = useState(() => new Set());

  if (!lesson) {
    return (
      <div className="dv-shell">
        <style>{CSS}</style>
        <div className="dv-stage">
          <p className="dv-missing">This lesson isn't ready yet.</p>
        </div>
      </div>
    );
  }

  const { root, family, sentences, title } = lesson;
  const totalSlides = sentences.length + 3; // cover + family + sentences + end
  const isCover = slideIdx === 0;
  const isFamily = slideIdx === 1;
  const isEnd = slideIdx === totalSlides - 1;
  const isSentence = !isCover && !isFamily && !isEnd;
  const sentenceIdx = slideIdx - 2;

  const canGoNext = isSentence ? correctSet.has(sentenceIdx) : true;
  const atStart = slideIdx === 0;
  const atEnd = slideIdx === totalSlides - 1;

  function goNext() {
    if (!atEnd && canGoNext) setSlideIdx((i) => i + 1);
  }
  function goPrev() {
    if (!atStart) setSlideIdx((i) => i - 1);
  }
  function markCorrect() {
    setCorrectSet((prev) => {
      const next = new Set(prev);
      next.add(sentenceIdx);
      return next;
    });
  }

  return (
    <div className="dv-shell">
      <style>{CSS}</style>
      <div className="dv-stage">
        <div className="dv-panel">
          <div className="dv-header">
            <TopBar />
            <span className="dv-slide-count">{slideIdx + 1} / {totalSlides}</span>
          </div>

          {isCover && <CoverSlide title={title} />}
          {isFamily && <FamilySlide family={family} />}
          {isSentence && (
            <SentenceSlide
              key={sentenceIdx}
              sentence={sentences[sentenceIdx]}
              family={family}
              slideNum={sentenceIdx + 1}
              totalSentences={sentences.length}
              onCorrect={markCorrect}
            />
          )}
          {isEnd && <EndSlide root={root} family={family} onFinish={() => window.close()} />}

          <div className="dv-footer-nav">
            <button type="button" className={`dv-nav-btn${atStart ? " is-disabled" : ""}`} onClick={goPrev} disabled={atStart}>
              ← Previous
            </button>
            <span className="dv-dots">
              {Array.from({ length: totalSlides }, (_, i) => (
                <span key={i} className={`dv-dot${i < slideIdx ? " done" : i === slideIdx ? " current" : ""}`} />
              ))}
            </span>
            <button type="button" className={`dv-nav-btn${(!canGoNext || atEnd) ? " is-disabled" : ""}`} onClick={goNext} disabled={!canGoNext || atEnd}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

:root { color-scheme: light; }

.dv-shell {
  width: 100%;
  min-height: 100vh;
  background: #FDF6FA;
  color: #241422;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dv-shell * { box-sizing: border-box; }

.dv-missing { text-align: center; color: #86677E; margin-top: 60px; }

.dv-stage { width: 100%; max-width: 480px; margin: 0 auto; }

.dv-panel {
  background: #FFFCF7; border-radius: 22px; overflow: hidden;
  box-shadow: 0 18px 40px rgba(36,20,34,0.14);
}

.dv-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #F2DCE9; }
.dv-brand { display: flex; align-items: center; gap: 6px; }
.dv-brand-logo { height: 18px; width: auto; display: block; }
.dv-brand-name { font-weight: 800; font-size: 13px; color: #1B2A4A; }
.dv-slide-count { font-family: 'Inter', sans-serif; font-size: 10.5px; font-weight: 700; color: #B23370; background: #FBE0EE; border-radius: 999px; padding: 3px 10px; }

/* ---- Cover ---- */
.dv-cover { padding: 54px 24px; text-align: center; }
.dv-cover-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 26px; color: #1B2A4A; margin: 0; letter-spacing: -0.01em; text-wrap: balance; }

/* ---- Word Family ---- */
.dv-fam-slide { padding: 44px 22px; text-align: center; }
.dv-fam-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #B23370; margin: 0 0 14px; }
.dv-fam-root { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #1B2A4A; margin: 0; }

/* ---- Sentence + word bank ---- */
.dv-sent-slide { padding: 30px 22px 24px; }
.dv-sent-label { font-size: 10px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #5A6B92; text-align: center; margin: 0 0 14px; }
.dv-sentence { font-family: 'Fraunces', serif; font-weight: 600; font-size: 16.5px; line-height: 1.5; color: #1B2A4A; text-align: center; margin: 0 0 22px; }
.dv-blank { display: inline-block; min-width: 84px; border-bottom: 2.5px solid #D6478C; padding: 0 4px; }
.dv-blank.filled { border-bottom-color: #2F9E58; font-weight: 700; color: #2F9E58; }

.dv-bank-label { font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: #86677E; text-align: center; margin: 0 0 10px; }
.dv-bank { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.dv-chip {
  font-family: 'Fraunces', serif; font-weight: 600; font-size: 13.5px; padding: 8px 16px; border-radius: 999px;
  background: #FFFFFF; border: 1.5px solid #EDE1DB; color: #1B2A4A; cursor: pointer;
}
.dv-chip.is-correct { background: #1B2A4A; border-color: #1B2A4A; color: #fff; }
.dv-chip.is-wrong { border-color: #D6536D; color: #D6536D; }

/* ---- End ---- */
.dv-end-slide { padding: 40px 24px; text-align: center; }
.dv-end-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #B23370; margin: 0 0 12px; }
.dv-end-title { font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 22px; color: #1B2A4A; margin: 0 0 14px; }
.dv-end-family { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin: 0 0 22px; }
.dv-end-chip { font-family: 'Fraunces', serif; font-weight: 700; font-size: 12.5px; padding: 6px 13px; border-radius: 999px; background: #1B2A4A; color: #fff; }

.dv-btn { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 10px 22px; border: none; cursor: pointer; background: #1B2A4A; color: #fff; }

/* ---- Footer nav ---- */
.dv-footer-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 14px 18px; border-top: 1px solid #F2DCE9; }
.dv-nav-btn { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 11.5px; color: #5A6B92; background: none; border: none; cursor: pointer; padding: 4px 6px; }
.dv-nav-btn.is-disabled { opacity: 0.3; cursor: default; }
.dv-dots { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; justify-content: center; max-width: 220px; }
.dv-dot { width: 6px; height: 6px; border-radius: 50%; background: #EDE1DB; flex: none; }
.dv-dot.done { background: #2F9E58; }
.dv-dot.current { background: #1B2A4A; }
`;

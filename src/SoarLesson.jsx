import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SOAR_A2_LESSONS } from "./soarA2Data";

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function EmojiTile({ emoji, label, active }) {
  return (
    <div className={`emoji-tile ${active ? "is-active" : ""}`}>
      <span className="emoji-tile-glyph">{emoji}</span>
      <span className="emoji-tile-label">{label}</span>
    </div>
  );
}

// ---------- generic slide-block renderers ----------
// Each lesson's content is authored as data (see soarA2Data.js), not JSX.
// A block's `type` picks which of these renders it.

function TitleBlock({ eyebrow, title, subtitle }) {
  return (
    <div className="title-content">
      <div className="title-eyebrow">{eyebrow}</div>
      <h1 className="title-h">{title}</h1>
      <p className="title-p">{subtitle}</p>
    </div>
  );
}

function PairsBlock({ heading, subheading, knownLabel = "You know", known = [], newLabel = "Now let's learn", items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="pair-row">
        <div className="pair-col">
          <div className="pair-label">{knownLabel}</div>
          {known.map((t, i) => <EmojiTile key={i} {...t} />)}
        </div>
        <div className="pair-arrow">→</div>
        <div className="pair-col">
          <div className="pair-label">{newLabel}</div>
          {items.map((t, i) => <EmojiTile key={i} {...t} active />)}
        </div>
      </div>
    </div>
  );
}

function ChipsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="chip-row">
        {items.map((t, i) => <span key={i} className="chip">{t}</span>)}
      </div>
    </div>
  );
}

function MessageBlock({ heading, subheading, lines = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      {lines.map((line, i) => (
        <div key={i} className={`msg-card ${i > 0 ? "msg-card--sub" : ""}`}>
          <div className="msg-sentence">{renderHighlighted(line)}</div>
        </div>
      ))}
    </div>
  );
}

// Renders a string, wrapping any *word* segments in a highlight span.
function renderHighlighted(text) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <span key={i} className="hl">{part}</span> : part));
}

function DialogueBlock({ heading, subheading, turns = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="dlg-col">
        {turns.map((t, i) => (
          <div key={i} className={`dlg-row ${t.who === "student" ? "dlg-row--me" : ""}`}>
            <div className={`dlg-avatar ${t.who === "student" ? "dlg-avatar--coral" : ""}`}>{t.who === "student" ? "S" : "T"}</div>
            <div className="dlg-bubble">{renderHighlighted(t.text)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpotBlock({ heading, subheading, lines = [], chips = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="spot-wrap">
        <div className="spot-note">
          {lines.map((line, i) => <div key={i} className="spot-line"><b>{i + 1}.</b> {line}</div>)}
        </div>
        {chips.length > 0 && (
          <div className="spot-col">
            {chips.map((c, i) => <div key={i} className="spot-chip">{c}</div>)}
          </div>
        )}
      </div>
    </div>
  );
}

function LogBlock({ heading, subheading, rows = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="log-frame">
        {rows.map((row, i) => (
          <div key={i} className="log-row">
            <span className="log-num">{i + 1}</span>
            <span className="log-line">{renderBlanks(row)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Renders a string, turning any ___ sequence into a blank span.
function renderBlanks(text) {
  const parts = text.split(/(_+)/g);
  return parts.map((part, i) => (/^_+$/.test(part) ? <span key={i} className="blank" /> : part));
}

function PostcardBlock({ heading, subheading, line }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="frame-card">
        <div className="frame-line">{renderBlanks(line)}</div>
      </div>
    </div>
  );
}

function LandingBlock({ heading, subheading, cardTitle, caption }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="landing-card">
        <div className="stamp-mark"><StarIcon size={24} fill="#fff" /></div>
        <div className="landing-title">{cardTitle}</div>
        <div className="landing-cap">{caption}</div>
      </div>
    </div>
  );
}

function TableBlock({ heading, subheading, rows = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="verb-table-wrap">
        <table className="verb-table">
          <thead><tr><th>Present</th><th>Past</th></tr></thead>
          <tbody>
            {rows.map(([a, b], i) => <tr key={i}><td>{a}</td><td>{b}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepsBlock({ heading, subheading, items = [] }) {
  return (
    <div className="stage-col">
      <h2 className="slide-h">{heading}</h2>
      {subheading && <p className="slide-p">{subheading}</p>}
      <div className="steps-frame">
        {items.map((t, i) => (
          <div key={i} className="steps-row"><span className="log-num">{i + 1}</span><span className="log-line">{t}</span></div>
        ))}
      </div>
    </div>
  );
}

const BLOCKS = {
  title: TitleBlock, pairs: PairsBlock, chips: ChipsBlock, message: MessageBlock,
  dialogue: DialogueBlock, spot: SpotBlock, log: LogBlock, postcard: PostcardBlock,
  landing: LandingBlock, table: TableBlock, steps: StepsBlock,
};

function renderSlideBody(slide) {
  const Block = BLOCKS[slide.type];
  if (!Block) return null;
  return <Block {...slide} />;
}

export default function SoarLesson() {
  const { unit, lesson } = useParams();
  const [i, setI] = useState(0);

  useEffect(() => {
    const styleId = "sv-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".sv-wrap");
    const slide = document.querySelector(".slide");
    if (!wrap || !slide) return;
    const pad = parseFloat(getComputedStyle(wrap).paddingLeft) || 0;
    const targetW = Math.ceil(slide.offsetWidth + pad * 2);
    const targetH = Math.ceil(slide.offsetHeight + pad * 2);
    const chromeW = window.outerWidth - window.innerWidth;
    const chromeH = window.outerHeight - window.innerHeight;
    const screenW = window.screen.availWidth || 1600;
    const screenH = window.screen.availHeight || 900;
    const outerW = Math.min(targetW + chromeW, screenW);
    const outerH = Math.min(targetH + chromeH, screenH);
    window.resizeTo(outerW, outerH);
    const left = Math.max(0, Math.floor((screenW - outerW) / 2));
    const top = Math.max(0, Math.floor((screenH - outerH) / 2));
    window.moveTo(left, top);
  }, []);

  function exit() {
    window.close();
  }

  const key = `${unit}-${lesson}`;
  const data = SOAR_A2_LESSONS[key];

  useEffect(() => { setI(0); }, [key]);

  if (!data) {
    return (
      <div className="sv-wrap">
        <div style={{ background: "#fff", borderRadius: 20, padding: 40, textAlign: "center", fontFamily: "sans-serif" }}>
          <p>This lesson isn't available yet.</p>
        </div>
      </div>
    );
  }

  const slides = data.slides;
  const total = slides.length;
  const s = slides[i];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="sv-wrap">
      <div className="deck-single">
        <div className={`slide ${i === 0 ? "slide--title" : "slide--regular"}`}>
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
              <span className="brand-word">entivo</span>
            </div>
            <div className="pennant">
              <span className="pennant-text">{s.stage}</span>
            </div>
          </div>

          <div className="slide-body">{renderSlideBody(s)}</div>

          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-off" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <div className="progress-track">
              {Array.from({ length: total }).map((_, idx) => (
                <span key={idx} className={`dot ${idx === i ? "on" : ""}`} />
              ))}
            </div>
            <button className="nav-btn next" onClick={() => (i === total - 1 ? exit() : go(1))}>
              {i === total - 1 ? "Finish Lesson" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5; --sun: #F2A900;
  --ink: #2B2438; --ink-soft: #736A87;
}

.sv-wrap {
  min-height: 100vh; width: 100%; background: #E9EEF7; color: var(--ink);
  font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center;
}
.sv-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  border-radius: 30px; box-shadow: 0 24px 50px rgba(27,42,74,0.22);
  background-size: cover; background-repeat: no-repeat;
}
.slide--title { background-image: url('/curriculum/a2-shared/title-bg.jpg'); background-position: left center; }
.slide--regular { background-image: url('/curriculum/a2-shared/slide-bg.jpg'); background-position: top right; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(27,42,74,0.15); color: var(--navy); }

.slide-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px 0; position: relative; z-index: 2; }
.brand-bubble { display: flex; align-items: center; gap: 6px; background: #fff; border-radius: 999px; padding: 5px 14px 5px 6px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); }
.brand-logo { width: 22px; height: 22px; border-radius: 50%; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); }
.pennant { background: #fff; border-radius: 999px; padding: 6px 16px; box-shadow: 0 2px 8px rgba(27,42,74,0.15); max-width: 260px; }
.pennant-text { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; color: var(--navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block; }

.slide-body { flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px 30px; position: relative; z-index: 2; overflow-y: auto; }

.title-content { padding: 40px 40px 40px 250px; width: 100%; }
.title-eyebrow { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral-deep); margin-bottom: 8px; }
.title-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 36px; color: var(--navy); margin: 0 0 12px; line-height: 1.05; }
.title-p { font-family: 'Quicksand', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--ink-soft); max-width: 320px; line-height: 1.55; }

.stage-col { width: 100%; text-align: center; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 24px; color: var(--navy); margin: 0 0 6px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 13px; color: var(--ink-soft); font-weight: 600; margin: 0 0 16px; }

.msg-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 14px 22px; max-width: 420px; margin: 0 auto 10px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.msg-card--sub { opacity: 0.85; }
.msg-sentence { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14.5px; color: var(--ink); text-align: center; line-height: 1.5; }
.hl { background: var(--coral-light); color: var(--coral-deep); padding: 1px 6px; border-radius: 6px; }

.chip-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 440px; margin: 0 auto; }
.chip { background: rgba(255,255,255,0.94); border-radius: 999px; padding: 7px 14px; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--navy); box-shadow: 0 3px 0 rgba(27,42,74,0.06); }

.dlg-col { display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto; }
.dlg-row { display: flex; align-items: flex-end; gap: 8px; text-align: left; }
.dlg-row--me { flex-direction: row-reverse; }
.dlg-avatar { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; background: var(--navy); color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; }
.dlg-avatar--coral { background: var(--coral); }
.dlg-bubble { background: rgba(255,255,255,0.94); border-radius: 14px; padding: 8px 13px; font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 12.5px; color: var(--ink); max-width: 280px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); }

.pair-row { display: flex; align-items: center; justify-content: center; gap: 18px; }
.pair-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.pair-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; color: var(--navy-soft); margin-bottom: 2px; }
.pair-arrow { font-size: 22px; color: var(--navy-soft); }
.emoji-tile { background: rgba(255,255,255,0.9); border-radius: 14px; padding: 10px 16px; display: flex; align-items: center; gap: 8px; min-width: 110px; box-shadow: 0 3px 0 rgba(27,42,74,0.06); }
.emoji-tile.is-active { background: #fff; border: 2px solid var(--coral); }
.emoji-tile-glyph { font-size: 22px; }
.emoji-tile-label { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; color: var(--navy); }

.spot-wrap { display: flex; gap: 16px; justify-content: center; max-width: 460px; margin: 0 auto; }
.spot-note { flex: 1; background: rgba(255,255,255,0.94); border-radius: 14px; padding: 14px 18px; box-shadow: 0 6px 0 rgba(27,42,74,0.08); text-align: left; }
.spot-line { font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 600; color: var(--ink); line-height: 1.7; padding: 3px 0; border-bottom: 1px dashed var(--navy-light); }
.spot-line:last-child { border-bottom: none; }
.spot-col { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.spot-chip { width: 44px; height: 40px; border-radius: 10px; background: #fff; box-shadow: 0 3px 0 rgba(27,42,74,0.08); display: flex; align-items: center; justify-content: center; font-size: 18px; }

.log-frame, .steps-frame { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 16px 22px; max-width: 440px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.log-row, .steps-row { display: flex; align-items: baseline; gap: 10px; padding: 7px 0; border-bottom: 1px dashed var(--navy-light); text-align: left; }
.log-row:last-child, .steps-row:last-child { border-bottom: none; }
.log-num { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: var(--navy-light); color: var(--navy); font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; display: flex; align-items: center; justify-content: center; }
.log-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--ink); }

.frame-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px 24px; max-width: 420px; margin: 0 auto; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.frame-line { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px; color: var(--ink); line-height: 1.7; }

.blank { display: inline-block; min-width: 46px; border-bottom: 2px solid var(--coral-deep); }

.landing-card { background: rgba(255,255,255,0.94); border-radius: 16px; padding: 20px; max-width: 260px; margin: 0 auto; text-align: center; box-shadow: 0 8px 0 rgba(27,42,74,0.08); border: 2px dashed var(--sun); }
.stamp-mark { width: 52px; height: 52px; border-radius: 50%; background: var(--sun); display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 0 0 4px #fff, 0 0 0 6px var(--sun); }
.landing-title { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 14px; color: var(--navy); margin-bottom: 4px; }
.landing-cap { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--ink-soft); font-weight: 600; }

.verb-table-wrap { display: flex; justify-content: center; }
.verb-table { border-collapse: collapse; background: rgba(255,255,255,0.94); border-radius: 12px; overflow: hidden; box-shadow: 0 6px 0 rgba(27,42,74,0.08); }
.verb-table th, .verb-table td { padding: 8px 22px; font-family: 'Quicksand', sans-serif; font-size: 13px; text-align: center; }
.verb-table th { background: var(--navy-light); color: var(--navy); font-weight: 700; }
.verb-table td { font-weight: 700; color: var(--ink); border-top: 1px dashed var(--navy-light); }
.verb-table td:last-child { color: var(--coral-deep); }

.slide-footer { display: flex; align-items: center; justify-content: space-between; padding: 0 22px 20px; position: relative; z-index: 2; }
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.is-off { opacity: 0.4; cursor: default; box-shadow: none; }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.progress-track { display: flex; align-items: center; gap: 6px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(27,42,74,0.18); transition: all 0.2s ease; }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }
`;

import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u2-l1";

const NUMBER_COLOR = { 1: "#FF6B4A", 2: "#F2A900", 3: "#2E97C7", 4: "#22A67E", 5: "#8E6FCE" };
const LETTER_COLOR = { J: "#E0567A", K: "#2E97C7", L: "#22A67E" };
const REVIEW_COLOR = {
  A: "#F2A900", B: "#2E97C7", C: "#22A67E", D: "#E0567A", E: "#8E6FCE",
  F: "#2BAFAF", G: "#C77D2E", H: "#D6478C", I: "#4FA8D8",
};

const CLOUD_VARIANTS = [
  { a: { bottom: 90, right: -20 }, b: { top: 90, left: -25 } },
  { a: { top: -30, left: 120 }, b: { bottom: -20, right: 90 } },
  { a: { top: -20, right: 60 }, b: { bottom: 100, left: -15 } },
  { a: { bottom: -15, left: 60 }, b: { top: 60, right: -20 } },
];

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function PhotoIcon({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5-4 4-3-3-6 6" />
    </svg>
  );
}

function Pic({ src, label, size = 116, onZoom }) {
  const big = (
    <div className="zoom-pic">
      {src ? <img src={src} alt={label} /> : (
        <div className="zoom-ph">
          <PhotoIcon size={44} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
  return (
    <div className="pic" style={{ width: size, height: size }} onClick={() => onZoom(big)}>
      {src ? <img src={src} alt={label} draggable={false} /> : (
        <div className="pic-ph">
          <PhotoIcon size={typeof size === "number" ? Math.round(size * 0.22) : 26} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}

function LetterTile({ letters, color, size = 74, fontSize = 28, onZoom }) {
  const big = <div className="letter-tile zoom-letter-tile" style={{ background: color }}><span>{letters}</span></div>;
  return (
    <div className="letter-tile" style={{ background: color, width: size, height: size, fontSize }} onClick={() => onZoom(big)}>
      {letters}
    </div>
  );
}

function WordCard({ src, word, label, onZoom }) {
  return (
    <div className="wc">
      <Pic src={src} label={label} onZoom={onZoom} />
      <div className="word">{word}</div>
    </div>
  );
}

function CountGroup({ n, icon, size = 40, onZoom }) {
  const items = Array.from({ length: n });
  const big = (
    <div className="count-zoom">
      {items.map((_, idx) => <span key={idx} className="count-emoji" style={{ fontSize: size * 1.8 }}>{icon}</span>)}
    </div>
  );
  return (
    <div className="count-group" onClick={() => onZoom(big)}>
      {items.map((_, idx) => <span key={idx} className="count-emoji" style={{ fontSize: size }}>{icon}</span>)}
    </div>
  );
}

export default function CountingBeginsLesson() {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const styleId = "hal-styles";
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();
    const tag = document.createElement("style");
    tag.id = styleId;
    tag.textContent = styles;
    document.head.appendChild(tag);
  }, []);

  useEffect(() => {
    if (!window.opener) return;
    const wrap = document.querySelector(".hal-wrap");
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

  useEffect(() => {
    if (zoom) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [zoom]);

  function exit() {
    window.close();
  }

  const slides = buildSlides({ onZoom: setZoom });
  const total = slides.length;
  const s = slides[i];
  const cloud = CLOUD_VARIANTS[i % CLOUD_VARIANTS.length];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="hal-wrap">
      <div className="deck-single">
        <div className="slide">
          <span className="cloud cloud--a" style={cloud.a} />
          <span className="cloud cloud--b" style={cloud.b} />
          <button className="close-btn" onClick={exit}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div className="slide-header">
            <div className="brand-bubble">
              <img className="brand-logo" src="/logo-sentivo.png" alt="" />
              <span className="brand-word">entivo</span>
            </div>
            <div className="stage-chip">
              <span className="stage-name">{s.stage}</span>
            </div>
          </div>

          <div className="slide-body">{s.body}</div>

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

      {zoom && (
        <div className="zoom-overlay open" onClick={() => setZoom(null)}>
          <div className="zoom-overlay-inner" onClick={(e) => e.stopPropagation()}>
            <button className="zoom-close" onClick={() => setZoom(null)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            {zoom}
          </div>
        </div>
      )}
    </div>
  );
}

export const LESSON_GUIDE = [
  { stage: "Unit 2 · Lesson 1", time: null, note: null },
  { stage: "Hello & Unit 1 Review", time: "~3 min", note: "Greet the student naturally, then flash a few mixed A-I letter cards quickly. Keep this short, the focus is moving to numbers." },
  { stage: "Meet 1-5", time: "~3 min", note: "Count 1 to 5 using your fingers and simple objects. Count slowly first, then invite the student to count along." },
  { stage: "Meet J, K, L", time: "~3 min", note: "Show uppercase and lowercase forms of J, K, L. Have the student identify and repeat each letter." },
  { stage: "J is for...", time: "~1.5 min", note: "Say each word slowly: \"J is for juice. J is for jam. J is for jellyfish.\"" },
  { stage: "K is for...", time: "~1.5 min", note: "Say each word slowly: \"K is for kite. K is for king. K is for koala.\"" },
  { stage: "L is for...", time: "~1.5 min", note: "Say each word slowly: \"L is for lion. L is for leaf. L is for lamp.\"" },
  { stage: "Count & Say", time: "~2.5 min", note: "Show a group of apples. Student counts aloud: \"One! Two! Three!\" Mix the quantity so it isn't memorized." },
  { stage: "Count & Say", time: "~2.5 min", note: "Repeat with a different quantity of stars so the student connects the number, word, and quantity." },
  { stage: "Look & Match", time: "~4 min", note: "Show a number and a matching quantity, and a letter with its matching word. Model: \"3 -> three balloons. J -> juice.\"" },
  { stage: "HIGHLIGHT: How Many?", time: "~2 min", note: "Show a group of grapes for a few seconds, then hide it. Ask \"How many?\" and let the student remember and answer." },
  { stage: "HIGHLIGHT: How Many?", time: "~2 min", note: "Follow with a quick letter challenge: \"What letter?\" using J, K, or L." },
  { stage: "Count & Say Goodbye", time: "~1.5 min", note: "Count 1 to 5 together one final time." },
  { stage: "Count & Say Goodbye", time: "~1.5 min", note: "Flash J, K, L for a quick identification check, then finish with the familiar goodbye routine." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 2 · Lesson 1",
      time: null,
      body: (
        <div className="center-col">
          <span className="title-highlight"><h1 className="slide-h">Counting Begins!</h1></span>
          <p className="slide-p">Today we count 1 to 5 and learn the letters J, K, and L.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Jj" color={LETTER_COLOR.J} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Unit 1 Review
    {
      stage: "Hello & Unit 1 Review",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Hello Again!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420, marginBottom: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! Do you remember your letters?</div>
            </div>
          </div>
          <div className="letter-row">
            <LetterTile letters="Bb" color={REVIEW_COLOR.B} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ee" color={REVIEW_COLOR.E} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Gg" color={REVIEW_COLOR.G} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ii" color={REVIEW_COLOR.I} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet 1-5
    {
      stage: "Meet 1-5",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet 1, 2, 3, 4, 5!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={80} fontSize={34} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={80} fontSize={34} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Meet J, K, L
    {
      stage: "Meet J, K, L",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet J, K, L!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Jj" color={LETTER_COLOR.J} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: J is for...
    {
      stage: "J is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">J is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/juice.avif`} word="Juice" label="juice" onZoom={onZoom} />
            <WordCard src={`${IMG}/jam.avif`} word="Jam" label="jam" onZoom={onZoom} />
            <WordCard src={`${IMG}/jellyfish.jpg`} word="Jellyfish" label="jellyfish" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: K is for...
    {
      stage: "K is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">K is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/kite.jpg`} word="Kite" label="kite" onZoom={onZoom} />
            <WordCard src={`${IMG}/king.jpg`} word="King" label="king" onZoom={onZoom} />
            <WordCard src={`${IMG}/koala.avif`} word="Koala" label="koala" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: L is for...
    {
      stage: "L is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">L is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/lion.avif`} word="Lion" label="lion" onZoom={onZoom} />
            <WordCard src={`${IMG}/leaf.avif`} word="Leaf" label="leaf" onZoom={onZoom} />
            <WordCard src={`${IMG}/lamp.avif`} word="Lamp" label="lamp" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Count & Say (apples)
    {
      stage: "Count & Say",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count & Say!</h2></span>
          <CountGroup n={3} icon="🍎" size={54} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">One, two, three! How many apples?</div>
            </div>
          </div>
        </>
      ),
    },
    // 9: Count & Say (stars)
    {
      stage: "Count & Say",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count Again!</h2></span>
          <CountGroup n={5} icon="⭐" size={50} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many stars this time?</div>
            </div>
          </div>
        </>
      ),
    },
    // 10: Look & Match
    {
      stage: "Look & Match",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Match!</h2></span>
          <div className="look-groups">
            <div className="look-row">
              <span className="look-letter" style={{ background: NUMBER_COLOR[4] }}>4</span>
              <CountGroup n={4} icon="🎈" size={38} onZoom={onZoom} />
            </div>
            <div className="look-row">
              <span className="look-letter" style={{ background: LETTER_COLOR.J }}>J</span>
              <Pic src={`${IMG}/juice.avif`} label="juice" size={70} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    // 11: HIGHLIGHT How Many? (peek)
    {
      stage: "HIGHLIGHT: How Many?",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Carefully!</h2></span>
          <CountGroup n={4} icon="🍇" size={54} onZoom={onZoom} />
          <p className="slide-p" style={{ marginTop: 4 }}>Remember how many you see... then we hide it!</p>
        </>
      ),
    },
    // 12: HIGHLIGHT How Many? (recall) + letter challenge
    {
      stage: "HIGHLIGHT: How Many?",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many grapes were there?</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <LetterTile letters="K" color={LETTER_COLOR.K} size={70} fontSize={28} onZoom={onZoom} />
          </div>
          <p className="slide-p">Now, what letter is this?</p>
        </>
      ),
    },
    // 12b: HIGHLIGHT How Many? Round 2 (peek)
    {
      stage: "HIGHLIGHT: How Many?",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look Again!</h2></span>
          <CountGroup n={5} icon="🎈" size={50} onZoom={onZoom} />
          <p className="slide-p" style={{ marginTop: 4 }}>Remember how many you see... then we hide it!</p>
        </>
      ),
    },
    // 12c: HIGHLIGHT How Many? Round 2 (recall) + letter challenge
    {
      stage: "HIGHLIGHT: How Many?",
      time: "~1 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">How Many This Time?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">How many balloons were there?</div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <LetterTile letters="L" color={LETTER_COLOR.L} size={70} fontSize={28} onZoom={onZoom} />
          </div>
          <p className="slide-p">Now, what letter is this?</p>
        </>
      ),
    },
    // 13: Count & Say Goodbye (1-5)
    {
      stage: "Count & Say Goodbye",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Count to 5!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="1" color={NUMBER_COLOR[1]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="2" color={NUMBER_COLOR[2]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="3" color={NUMBER_COLOR[3]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="4" color={NUMBER_COLOR[4]} size={56} fontSize={22} onZoom={onZoom} />
            <LetterTile letters="5" color={NUMBER_COLOR[5]} size={56} fontSize={22} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 14: J-K-L flash review
    {
      stage: "Count & Say Goodbye",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Jj" color={LETTER_COLOR.J} onZoom={onZoom} />
            <LetterTile letters="Kk" color={LETTER_COLOR.K} onZoom={onZoom} />
            <LetterTile letters="Ll" color={LETTER_COLOR.L} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 15: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Great Job!</h2>
          <p className="slide-p">Today you counted 1 to 5 and learned Jj, Kk, and Ll. See you next lesson!</p>
        </div>
      ),
    },
  ];
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&family=Fredoka:wght@600;700&display=swap');

:root {
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --sun: #F2A900; --navy: #1B2A4A; --navy-soft: #5A6B92; --navy-light: #E4E9F5;
  --ink: #2B2438; --ink-soft: #736A87;
}

.hal-wrap { min-height: 100vh; width: 100%; background: #EDE7F6; color: var(--ink); font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box; display: flex; align-items: center; justify-content: center; }
.hal-wrap * { box-sizing: border-box; }
.deck-single { flex-shrink: 0; }

.slide {
  position: relative; width: 720px; height: 560px; flex-shrink: 0;
  display: flex; flex-direction: column; overflow: hidden;
  background: linear-gradient(160deg, #FFF9F5 0%, #FFE9DF 58%, #FFDCC9 100%);
  border-radius: 30px;
  box-shadow: 0 24px 50px rgba(27,42,74,0.22);
}
.cloud { position: absolute; border-radius: 50%; z-index: 0; pointer-events: none; }
.cloud--a { width: 140px; height: 140px; background: var(--coral); opacity: 0.85; }
.cloud--b { width: 100px; height: 100px; background: var(--sun); opacity: 0.85; }

.close-btn { position: absolute; top: 14px; right: 14px; z-index: 4; width: 30px; height: 30px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.2); color: #fff; }

.slide-header {
  flex-shrink: 0; position: relative; z-index: 2; overflow: hidden;
  background: linear-gradient(135deg, var(--navy) 0%, #263b66 100%);
  box-shadow: 0 8px 18px rgba(27,42,74,0.2);
  padding: 22px 30px; display: flex; align-items: center; justify-content: space-between;
}
.slide-header::before { content: ""; position: absolute; top: -60px; right: -30px; width: 190px; height: 190px; border-radius: 50%; background: radial-gradient(circle, rgba(255,107,74,0.4), transparent 70%); pointer-events: none; }

.brand-bubble { position: relative; z-index: 1; display: flex; align-items: center; gap: 0; background: #fff; border-radius: 999px; padding: 6px 16px 6px 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.2); }
.brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.brand-word { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }

.stage-chip { position: relative; z-index: 1; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.16); padding: 8px 16px; border-radius: 999px; }
.stage-name { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; letter-spacing: 0.02em; }
.stage-time { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10px; color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.16); padding: 4px 9px; border-radius: 999px; }

.slide-body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 22px 44px; position: relative; z-index: 1; gap: 16px; }

.slide-footer {
  flex-shrink: 0; position: relative; z-index: 2;
  background: linear-gradient(315deg, var(--navy) 0%, #263b66 100%);
  box-shadow: 0 -8px 18px rgba(27,42,74,0.2);
  padding: 18px 26px; display: flex; align-items: center; justify-content: space-between;
}
.nav-btn { display: inline-flex; align-items: center; gap: 7px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 12px 22px; border-radius: 16px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F5EEE7 100%); color: var(--navy); box-shadow: 0 4px 0 rgba(27,42,74,0.15), 0 8px 16px rgba(27,42,74,0.1); }
.nav-btn.next { background: linear-gradient(180deg, var(--coral) 0%, var(--coral-deep) 100%); color: #fff; box-shadow: 0 4px 0 rgba(160,45,18,0.4), 0 8px 18px rgba(224,80,47,0.32); }
.nav-btn.is-off, .nav-btn:disabled { opacity: 0.32; box-shadow: 0 1px 2px rgba(27,42,74,0.1) inset; cursor: default; }
.progress-track { display: flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.3); }
.dot.on { width: 22px; border-radius: 5px; background: var(--coral); }

.title-highlight { position: relative; display: inline-block; }
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: #FFD066; opacity: 0.85; transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 48px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 38px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }

.count-group { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; max-width: 420px; cursor: zoom-in; position: relative; z-index: 1; }
.count-emoji { line-height: 1; filter: drop-shadow(0 4px 8px rgba(27,42,74,0.18)); }
.count-zoom { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; max-width: 340px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 13px 18px; font-weight: 700; font-size: 16px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble .fill { display: inline-block; min-width: 64px; border-bottom: 2.5px solid var(--coral-deep); vertical-align: -2px; }

.look-groups { display: flex; flex-direction: column; gap: 18px; position: relative; z-index: 1; }
.look-row { display: flex; align-items: center; gap: 18px; }
.look-letter { width: 50px; height: 50px; border-radius: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: #fff; box-shadow: 0 4px 10px rgba(27,42,74,0.15); }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;

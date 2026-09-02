import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u3-l2";

const LETTER_COLOR = { V: "#8E6FCE", W: "#2BAFAF", X: "#F2A900" };
const COLOR_HEX = {
  Red: "#E5484D", Blue: "#2E97C7", Yellow: "#F2A900", Green: "#22A67E",
  Orange: "#E8712E", Pink: "#EC6FA6", Purple: "#8B5FBF", Brown: "#8B5A2B",
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

function ColorSwatch({ name, hex, size = 90, onZoom }) {
  const big = <div className="swatch zoom-swatch" style={{ background: hex }} />;
  return (
    <div className="wc">
      <div className="swatch" style={{ background: hex, width: size, height: size }} onClick={() => onZoom(big)} />
      <div className="word">{name}</div>
    </div>
  );
}

export default function MoreColorsLesson() {
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
  { stage: "Unit 3 · Lesson 2", time: null, note: null },
  { stage: "Hello & Color Review", time: "~3 min", note: "Greet the student and quickly review red, blue, yellow, green. Show colored objects and ask \"What color?\"" },
  { stage: "Meet More Colors", time: "~3 min", note: "Introduce orange, pink, purple, brown using clear objects and visuals. Model each color, then let the student identify and repeat them." },
  { stage: "Meet V, W, X", time: "~3 min", note: "Show uppercase and lowercase forms of V, W, X. Have the student identify and repeat each letter." },
  { stage: "V is for...", time: "~1.5 min", note: "Say each word slowly: \"V is for van. V is for vase. V is for volcano.\"" },
  { stage: "W is for...", time: "~1.5 min", note: "Say each word slowly: \"W is for watermelon. W is for watch. W is for web.\"" },
  { stage: "X is for...", time: "~1.5 min", note: "Say each word slowly: \"X is for x-ray. X is for xylophone.\"" },
  { stage: "Color & Say", time: "~2.5 min", note: "Mix the old and new colors. Show different colored objects and ask \"What color?\" Include quick recognition of V-X." },
  { stage: "Look & Match", time: "~4 min", note: "Show V-X with simple picture examples, then show them in different colors and ask \"What letter?\" and \"What color?\"" },
  { stage: "HIGHLIGHT: Color Shop!", time: "~2.5 min", note: "Create a pretend online shop with colorful objects. Ask \"What color do you want?\" Student chooses an object/color and says it." },
  { stage: "HIGHLIGHT: Color Shop!", time: "~1.5 min", note: "Add V-X letter cards as bonus challenges." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Flash mixed colors and V-X. Student identifies them quickly." },
  { stage: "Color & Letter Check", time: "~1.5 min", note: "Finish with a fun \"What's your favorite color?\" choice and goodbye." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 3 · Lesson 2",
      time: null,
      body: (
        <div className="center-col">
          <span className="title-highlight"><h1 className="slide-h">More Colors!</h1></span>
          <p className="slide-p">Today we learn the letters V, W, X and four new colors.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Vv" color={LETTER_COLOR.V} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello & Color Review
    {
      stage: "Hello & Color Review",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
            <ColorSwatch name="Blue" hex={COLOR_HEX.Blue} size={70} onZoom={onZoom} />
            <ColorSwatch name="Yellow" hex={COLOR_HEX.Yellow} size={70} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 3: Meet More Colors
    {
      stage: "Meet More Colors",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet More Colors!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 4: Meet V, W, X
    {
      stage: "Meet V, W, X",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet V, W, X!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: V is for...
    {
      stage: "V is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">V is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/van.avif`} word="Van" label="van" onZoom={onZoom} />
            <WordCard src={`${IMG}/vase.avif`} word="Vase" label="vase" onZoom={onZoom} />
            <WordCard src={`${IMG}/volcano.jpeg`} word="Volcano" label="volcano" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: W is for...
    {
      stage: "W is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">W is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/watermelon.avif`} word="Watermelon" label="watermelon" onZoom={onZoom} />
            <WordCard src={`${IMG}/watch.avif`} word="Watch" label="watch" onZoom={onZoom} />
            <WordCard src={`${IMG}/web.avif`} word="Web" label="web" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: X is for...
    {
      stage: "X is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">X is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/xray.avif`} word="X-ray" label="x-ray" onZoom={onZoom} />
            <WordCard src={`${IMG}/xylophone.avif`} word="Xylophone" label="xylophone" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: Color & Say
    {
      stage: "Color & Say",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Color & Say!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={64} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={64} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={64} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={64} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 9: Look & Match
    {
      stage: "Look & Match",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Match!</h2></span>
          <div className="look-groups">
            <div className="look-row">
              <span className="look-letter" style={{ background: LETTER_COLOR.V }}>V</span>
              <Pic src={`${IMG}/van.avif`} label="van" size={70} onZoom={onZoom} />
            </div>
            <div className="look-row">
              <LetterTile letters="W" color={COLOR_HEX.Orange} size={50} fontSize={20} onZoom={onZoom} />
              <Pic src={`${IMG}/watermelon.avif`} label="watermelon" size={70} onZoom={onZoom} />
            </div>
          </div>
        </>
      ),
    },
    // 10: HIGHLIGHT Color Shop! (choose)
    {
      stage: "HIGHLIGHT: Color Shop!",
      time: "~2.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">🛍️ Color Shop!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={70} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={70} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={70} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What color do you want?</div>
            </div>
          </div>
        </>
      ),
    },
    // 11: HIGHLIGHT Color Shop! (bonus letters)
    {
      stage: "HIGHLIGHT: Color Shop!",
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Bonus Letter!</h2></span>
          <LetterTile letters="X" color={LETTER_COLOR.X} size={90} fontSize={38} onZoom={onZoom} />
          <p className="slide-p">What letter is this?</p>
        </div>
      ),
    },
    // 11b: HIGHLIGHT Color Shop! Round 2 (choose)
    {
      stage: "HIGHLIGHT: Color Shop!",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">🛍️ Shopping Again!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={70} onZoom={onZoom} />
            <ColorSwatch name="Red" hex={COLOR_HEX.Red} size={70} onZoom={onZoom} />
            <ColorSwatch name="Green" hex={COLOR_HEX.Green} size={70} onZoom={onZoom} />
          </div>
          <div className="bubble-col" style={{ maxWidth: 380, marginTop: 6 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What color do you want this time?</div>
            </div>
          </div>
        </>
      ),
    },
    // 11c: HIGHLIGHT Color Shop! Round 2 (bonus letter)
    {
      stage: "HIGHLIGHT: Color Shop!",
      time: "~1 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Bonus Letter!</h2></span>
          <LetterTile letters="V" color={LETTER_COLOR.V} size={90} fontSize={38} onZoom={onZoom} />
          <p className="slide-p">What letter is this?</p>
        </div>
      ),
    },
    // 12: Color & Letter Check
    {
      stage: "Color & Letter Check",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Flash Review!</h2></span>
          <div className="word-row">
            <ColorSwatch name="Orange" hex={COLOR_HEX.Orange} size={54} onZoom={onZoom} />
            <ColorSwatch name="Pink" hex={COLOR_HEX.Pink} size={54} onZoom={onZoom} />
            <ColorSwatch name="Purple" hex={COLOR_HEX.Purple} size={54} onZoom={onZoom} />
            <ColorSwatch name="Brown" hex={COLOR_HEX.Brown} size={54} onZoom={onZoom} />
          </div>
          <div className="letter-row">
            <LetterTile letters="Vv" color={LETTER_COLOR.V} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Ww" color={LETTER_COLOR.W} size={54} fontSize={20} onZoom={onZoom} />
            <LetterTile letters="Xx" color={LETTER_COLOR.X} size={54} fontSize={20} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 13: Favorite color
    {
      stage: "Color & Letter Check",
      time: "~1.5 min",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Your Favorite!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What's your favorite color?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">My favorite color is <span className="fill"></span>.</div>
            </div>
          </div>
        </div>
      ),
    },
    // 14: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Great Job!</h2>
          <p className="slide-p">Today you learned Vv, Ww, Xx and four new colors. See you next lesson!</p>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 46px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 34px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 17px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; background: #fff; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 19px; color: var(--navy); }

.swatch { border-radius: 24px; cursor: zoom-in; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; flex-shrink: 0; }
.swatch:hover { transform: scale(1.04); }
.zoom-swatch { width: 260px; height: 260px; border-radius: 46px; }

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

.look-groups { display: flex; flex-direction: column; gap: 16px; position: relative; z-index: 1; }
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

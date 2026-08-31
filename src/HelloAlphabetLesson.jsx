import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u1-l1";

const LETTER_COLOR = { A: "#F2A900", B: "#2E97C7", C: "#22A67E" };

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

function NameCard({ name, letter, onZoom }) {
  return (
    <div className="wc">
      <Pic src={null} label={`a friendly character named ${name}`} onZoom={onZoom} />
      <div className="word">{name}</div>
      <span className="name-tag" style={{ background: `${LETTER_COLOR[letter]}22`, color: LETTER_COLOR[letter] }}>Starts with {letter}</span>
    </div>
  );
}

export default function HelloAlphabetLesson() {
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
              {s.time && <span className="stage-time">{s.time}</span>}
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
  { stage: "Unit 1 · Lesson 1", time: null, note: null },
  { stage: "Hello!", time: "~1.5 min", note: "Wave at the camera and say each greeting word with the student. Hello and Bye are said with a wave; Hi is a shorter, more casual greeting." },
  { stage: "Hello!", time: "~1.5 min", note: [
    "Ask \"What's your name?\"",
    "Model answering: \"My name is [Teacher].\"",
    "Let the student answer with their own name.",
  ] },
  { stage: "Meet A, B, C", time: "~1.5 min", note: "Point to each letter and say its name together before moving on." },
  { stage: "Meet A, B, C", time: "~1.5 min", note: [
    "Ask \"Where is A?\" and have the student point to it on their screen.",
    "Repeat for B and C, mixing up the order each time.",
    "Let the student take a turn asking you \"Where is ___?\"",
  ] },
  { stage: "My Name Is...", time: "~4 min", note: [
    "Introduce Anna, point out she starts with A.",
    "Introduce Bob, point out he starts with B.",
    "Introduce Carol, point out she starts with C.",
    "Practice \"My name is ___\" together for each character.",
  ] },
  { stage: "A, B, C Is for...", time: "~1.5 min", note: "Say each word slowly: \"A is for ant. A is for apple. A is for alligator.\"" },
  { stage: "A, B, C Is for...", time: "~1.5 min", note: "Say each word slowly: \"B is for ball. B is for banana. B is for bear.\"" },
  { stage: "A, B, C Is for...", time: "~2 min", note: "Say each word slowly: \"C is for cat. C is for car. C is for cookie.\"" },
  { stage: "Look & Say", time: "~5 min", note: "Point to each picture in any order. Let the student name the letter and say the word before you move on." },
  { stage: "Meet & Greet", time: "~3 min", note: "A real back-and-forth: model the full line first, then let the student answer with their own name and letter." },
  { stage: "Show What You Know", time: "~2 min", note: "Free recall, don't reveal answers. Point to each letter, then ask \"What's your name?\" one more time as the final challenge." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 1 · Lesson 1",
      time: null,
      body: (
        <div className="center-col">
          <span className="title-highlight"><h1 className="slide-h">Hello, Alphabet!</h1></span>
          <p className="slide-p">Today we say hello, meet three new friends, and learn the letters A, B, and C.</p>
          <div className="letter-row" style={{ marginTop: 6 }}>
            <LetterTile letters="Aa" color={LETTER_COLOR.A} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello! (words)
    {
      stage: "Hello!",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Hello!</h2></span>
          <div className="row">
            <Pic src={`${IMG}/wavingkid.jpg`} label="friendly kid waving hello" size={150} onZoom={onZoom} />
            <div className="bubble-col">
              <div className="bubble left">Hello!</div>
              <div className="bubble left">Hi!</div>
              <div className="bubble left">Bye!</div>
            </div>
          </div>
        </>
      ),
    },
    // 3: What's your name?
    {
      stage: "Hello!",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">What's Your Name?</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! What's your name?</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">My name is <span className="fill">[Student's name]</span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Meet A, B, C
    {
      stage: "Meet A, B, C",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet A, B, C!</h2></span>
          <div className="row" style={{ marginTop: 10 }}>
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} size={100} fontSize={40} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: Where Is It?
    {
      stage: "Meet A, B, C",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Where Is It?</h2></span>
          <div className="row" style={{ marginTop: 14, gap: 34 }}>
            <LetterTile letters="Cc" color={LETTER_COLOR.C} size={106} fontSize={42} onZoom={onZoom} />
            <LetterTile letters="Aa" color={LETTER_COLOR.A} size={106} fontSize={42} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} size={106} fontSize={42} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: My Name Is... Anna, Bob, Carol
    {
      stage: "My Name Is...",
      time: "~4 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">My Name Is...</h2></span>
          <div className="word-row">
            <NameCard name="Anna" letter="A" onZoom={onZoom} />
            <NameCard name="Bob" letter="B" onZoom={onZoom} />
            <NameCard name="Carol" letter="C" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 7: A is for...
    {
      stage: "A, B, C Is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">A is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/ant.jpg`} word="Ant" label="ant" onZoom={onZoom} />
            <WordCard src={`${IMG}/apple.jpg`} word="Apple" label="red apple" onZoom={onZoom} />
            <WordCard src={null} word="Alligator" label="alligator" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 8: B is for...
    {
      stage: "A, B, C Is for...",
      time: "~1.5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">B is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/ball.jpg`} word="Ball" label="bouncy ball" onZoom={onZoom} />
            <WordCard src={`${IMG}/banana.jpg`} word="Banana" label="banana" onZoom={onZoom} />
            <WordCard src={`${IMG}/bear.jpg`} word="Bear" label="bear" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 9: C is for...
    {
      stage: "A, B, C Is for...",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">C is for...</h2></span>
          <div className="word-row">
            <WordCard src={`${IMG}/cat.jpg`} word="Cat" label="cat" onZoom={onZoom} />
            <WordCard src={`${IMG}/car.avif`} word="Car" label="car" onZoom={onZoom} />
            <WordCard src={null} word="Cookie" label="cookie" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 10: Look & Say
    {
      stage: "Look & Say",
      time: "~5 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Look & Say!</h2></span>
          <div className="look-grid">
            <Pic src={`${IMG}/ant.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/apple.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={null} label="alligator" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/ball.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/banana.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/bear.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/cat.jpg`} label="" size="100%" onZoom={onZoom} />
            <Pic src={`${IMG}/car.avif`} label="" size="100%" onZoom={onZoom} />
            <Pic src={null} label="cookie" size="100%" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 11: Meet & Greet
    {
      stage: "Meet & Greet",
      time: "~3 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Meet & Greet</h2></span>
          <div className="bubble-col" style={{ maxWidth: 460 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">Hello! My name is <span className="fill">[Teacher]</span>. My name starts with <span className="fill">[T]</span>.</div>
            </div>
            <div className="brow me">
              <div className="avatar coral">S</div>
              <div className="bubble right">Hello! My name is <span className="fill">[Student's name]</span>. My name starts with <span className="fill">[S]</span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 12: Show What You Know
    {
      stage: "Show What You Know",
      time: "~2 min",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Show What You Know!</h2></span>
          <div className="letter-row" style={{ marginTop: 10 }}>
            <LetterTile letters="Aa" color={LETTER_COLOR.A} onZoom={onZoom} />
            <LetterTile letters="Bb" color={LETTER_COLOR.B} onZoom={onZoom} />
            <LetterTile letters="Cc" color={LETTER_COLOR.C} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 13: Great Job
    {
      stage: "Wrap-Up",
      time: null,
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Great Job!</h2>
          <p className="slide-p">Today you said hello, met Anna, Bob, and Carol, and learned Aa, Bb, and Cc. See you next lesson!</p>
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
.title-highlight::before { content: ""; position: absolute; left: -12px; right: -12px; top: 34%; bottom: 18%; background: var(--coral-light); transform: rotate(-1.4deg); border-radius: 4px; z-index: 0; }
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 48px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 40px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 14px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 520px; margin: 0; position: relative; z-index: 1; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }

.letter-row { display: flex; gap: 18px; position: relative; z-index: 1; }
.letter-tile { cursor: zoom-in; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; border: 3px solid #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.15); transition: transform 0.15s ease; }
.letter-tile:hover { transform: scale(1.05); }
.zoom-letter-tile { width: 300px; height: 300px; border-radius: 40px; }
.zoom-letter-tile span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 120px; color: #fff; }

.word-row { display: flex; gap: 22px; position: relative; z-index: 1; }
.wc { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 28px; box-shadow: 0 0 0 6px #fff, 0 10px 22px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: cover; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 10px; font-weight: 700; text-align: center; padding: 0 8px; }
.word { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 16px; color: var(--navy); }
.name-tag { font-size: 10.5px; font-weight: 700; padding: 3px 11px; border-radius: 999px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.brow.me { flex-direction: row-reverse; align-self: flex-end; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; }
.avatar.navy { background: var(--navy); }
.avatar.coral { background: var(--coral); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 14px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble .fill { color: var(--coral-deep); }

.look-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; position: relative; z-index: 1; max-width: 400px; margin: 0 auto; }
.look-grid .pic { width: 100%; aspect-ratio: 1; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;

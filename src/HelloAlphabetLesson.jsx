import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u1-l1";

const PALETTE = {
  coral: { accent: "#FF6B4A", light: "#FFE6DD", deep: "#E0502F" },
  sun: { accent: "#F2A900", light: "#FFF1D2", deep: "#A87200" },
  sky: { accent: "#2E97C7", light: "#DCF0F8", deep: "#1E6E92" },
  mint: { accent: "#22A67E", light: "#DBF3EA", deep: "#157A5A" },
  lavender: { accent: "#7A6BC7", light: "#E9E5FA", deep: "#4E3FA0" },
  gold: { accent: "#C98A00", light: "#FBF0DC", deep: "#C98A00" },
};

export function StarIcon({ size = 20, fill = "var(--sun)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12 2l2.2 5.8L20 9l-4.6 4 1.4 6-4.8-3.4L7.2 19l1.4-6L4 9l5.8-1.2z" />
    </svg>
  );
}

function SquiggleIcon({ color }) {
  return (
    <svg className="sticker sticker-squiggle" width="70" height="16" viewBox="0 0 70 16">
      <path d="M2 8c6-10 12 10 18 0s12-10 18 0 12 10 18 0" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SpeakerIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
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

function Pic({ src, label, size = 190, onZoom, hideLabel }) {
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
    <div
      className={`img-ph ${src ? "img-ph--photo" : ""}`}
      style={{ width: size, height: size }}
      onClick={() => onZoom(big)}
    >
      {src ? <img src={src} alt={label} draggable={false} /> : (
        <>
          <PhotoIcon size={typeof size === "number" ? Math.round(size * 0.2) : 24} />
          {!hideLabel && <span className="img-ph-label">{label}</span>}
        </>
      )}
    </div>
  );
}

function LetterBadge({ letters, bg, size = 70, fontSize = 28, onZoom }) {
  const big = (
    <div className="letter-strip-item zoom-letter-badge" style={{ background: bg }}>
      <span>{letters}</span>
    </div>
  );
  return (
    <div className="letter-strip-item" style={{ background: bg, width: size, height: size, fontSize }} onClick={() => onZoom(big)}>
      {letters}
    </div>
  );
}

function WordCard({ src, word, label, onZoom, rot }) {
  return (
    <div className="word-card" style={{ transform: `rotate(${rot}deg)` }}>
      <Pic src={src} label={label} size={"100%"} onZoom={onZoom} />
      <div className="word-card-word">{word}</div>
      <div className="word-card-say"><SpeakerIcon size={11} />Say it!</div>
    </div>
  );
}

function NameCard({ name, letter, accent, onZoom, rot }) {
  return (
    <div className="name-card" style={{ transform: `rotate(${rot}deg)` }}>
      <Pic src={null} label={`a friendly character named ${name}`} size={"100%"} onZoom={onZoom} />
      <div className="name-card-name">{name}</div>
      <span className="name-card-letter" style={{ background: accent.light, color: accent.deep }}>Starts with {letter}</span>
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
  const p = PALETTE[s.palette];

  function go(delta) {
    setI((cur) => Math.max(0, Math.min(total - 1, cur + delta)));
  }

  return (
    <div className="hal-wrap">
      <div className="deck-summary">
        <div>
          <div className="deck-summary-title">Unit 1, Lesson 1: Hello, Alphabet!</div>
          <div className="deck-summary-sub">A1 Kids &middot; 1-on-1 online &middot; 25 min &middot; Greetings, names, Letters A-C</div>
        </div>
        <div className="deck-summary-right">
          <button className="exit-btn" onClick={exit}>Exit Lesson</button>
        </div>
      </div>

      <div className="deck-single">
        <div className="slide" style={{ "--accent": p.accent, "--accent-light": p.light, "--accent-deep": p.deep }}>
          {s.stickers}
          <div className="slide-header">
            <div className="brand-mark"><span className="accent-s">5</span>entivo</div>
            <div className="slide-tags">
              <span className="stage-tag">{s.stage}</span>
              {s.time && <span className="time-tag">{s.time}</span>}
            </div>
          </div>
          <div className="slide-body">{s.body}</div>
          <div className="slide-footer">
            <button className={`nav-btn ${i === 0 ? "is-disabled" : ""}`} onClick={() => go(-1)} disabled={i === 0}>&larr; Previous</button>
            <span className="footer-progress">{i + 1} / {total}</span>
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
      palette: "coral",
      stage: "Unit 1 · Lesson 1",
      time: null,
      stickers: <>
        <StarIcon size={30} fill="var(--sun)" style={{ position: "absolute", top: -12, right: 58 }} className="sticker" />
        <StarIcon size={18} fill="var(--mint)" style={{ position: "absolute", top: -8, left: 76 }} className="sticker" />
      </>,
      body: (
        <div className="center-col" style={{ textAlign: "center" }}>
          <h1 className="slide-h" style={{ fontSize: 42 }}>Hello, Alphabet!</h1>
          <p className="slide-p" style={{ textAlign: "center" }}>Today we say hello, meet three new friends, and learn the letters A, B, and C.</p>
          <div className="letter-strip" style={{ marginTop: 6 }}>
            <LetterBadge letters="Aa" bg="var(--sun)" onZoom={onZoom} />
            <LetterBadge letters="Bb" bg="var(--sky)" onZoom={onZoom} />
            <LetterBadge letters="Cc" bg="var(--mint)" onZoom={onZoom} />
          </div>
        </div>
      ),
    },
    // 2: Hello! (words)
    {
      palette: "coral",
      stage: "Hello!",
      time: "~1.5 min",
      stickers: <StarIcon size={22} fill="var(--coral)" style={{ position: "absolute", top: -12, right: 58 }} className="sticker" />,
      body: (
        <>
          <h2 className="slide-h">Hello!</h2>
          <div className="row" style={{ marginTop: 16 }}>
            <Pic src={`${IMG}/wavingkid.jpg`} label="friendly kid waving hello" size={210} onZoom={onZoom} />
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              <div className="bubble left">Hello!</div>
              <div className="bubble left">Hi!</div>
              <div className="bubble left">Bye!</div>
            </div>
          </div>
        </>
      ),
    },
    // 3: What's your name? (speaking)
    {
      palette: "coral",
      stage: "Hello!",
      time: "~1.5 min",
      stickers: <SquiggleIcon color="var(--coral)" />,
      body: (
        <>
          <h2 className="slide-h">What's Your Name?</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            <div className="speaker-row">
              <div className="speaker-avatar" style={{ background: "var(--coral)" }}>T</div>
              <div className="bubble left">Hello! What's your name?</div>
            </div>
            <div className="speaker-row" style={{ flexDirection: "row-reverse", alignSelf: "flex-end" }}>
              <div className="speaker-avatar" style={{ background: "var(--sky)" }}>S</div>
              <div className="bubble right">My name is <span className="fill">[Student's name]</span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 4: Meet A, B, C
    {
      palette: "gold",
      stage: "Meet A, B, C",
      time: "~1.5 min",
      stickers: <StarIcon size={22} fill="var(--sky)" style={{ position: "absolute", top: -12, right: 58 }} className="sticker" />,
      body: (
        <>
          <h2 className="slide-h">Meet A, B, C!</h2>
          <div className="row" style={{ marginTop: 18 }}>
            <LetterBadge letters="Aa" bg="var(--sun)" size={100} fontSize={40} onZoom={onZoom} />
            <LetterBadge letters="Bb" bg="var(--sky)" size={100} fontSize={40} onZoom={onZoom} />
            <LetterBadge letters="Cc" bg="var(--mint)" size={100} fontSize={40} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 5: Where Is It? game
    {
      palette: "gold",
      stage: "Meet A, B, C",
      time: "~1.5 min",
      stickers: <span className="sticker sticker-dot" />,
      body: (
        <>
          <h2 className="slide-h">Where Is It?</h2>
          <div className="row" style={{ marginTop: 24, gap: 40 }}>
            <LetterBadge letters="Cc" bg="var(--mint)" size={110} fontSize={44} onZoom={onZoom} />
            <LetterBadge letters="Aa" bg="var(--sun)" size={110} fontSize={44} onZoom={onZoom} />
            <LetterBadge letters="Bb" bg="var(--sky)" size={110} fontSize={44} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: My Name Is... Anna, Bob, Carol
    {
      palette: "lavender",
      stage: "My Name Is...",
      time: "~4 min",
      stickers: <StarIcon size={20} fill="var(--lavender)" style={{ position: "absolute", top: -12, right: 58 }} className="sticker" />,
      body: (
        <>
          <h2 className="slide-h">My Name Is...</h2>
          <div className="word-cards" style={{ marginTop: 18 }}>
            <NameCard name="Anna" letter="A" accent={PALETTE.sun} onZoom={onZoom} rot={-2} />
            <NameCard name="Bob" letter="B" accent={PALETTE.sky} onZoom={onZoom} rot={1.5} />
            <NameCard name="Carol" letter="C" accent={PALETTE.mint} onZoom={onZoom} rot={-1} />
          </div>
        </>
      ),
    },
    // 7: A is for...
    {
      palette: "sun",
      stage: "A, B, C Is for...",
      time: "~1.5 min",
      stickers: <StarIcon size={18} fill="var(--sun)" style={{ position: "absolute", top: -8, left: 76 }} className="sticker" />,
      body: (
        <>
          <h2 className="slide-h">A is for...</h2>
          <div className="word-cards" style={{ marginTop: 18 }}>
            <WordCard src={`${IMG}/ant.jpg`} word="Ant" label="ant" onZoom={onZoom} rot={-2} />
            <WordCard src={`${IMG}/apple.jpg`} word="Apple" label="red apple" onZoom={onZoom} rot={1.5} />
            <WordCard src={null} word="Alligator" label="alligator" onZoom={onZoom} rot={-1} />
          </div>
        </>
      ),
    },
    // 8: B is for...
    {
      palette: "sky",
      stage: "A, B, C Is for...",
      time: "~1.5 min",
      stickers: null,
      body: (
        <>
          <h2 className="slide-h">B is for...</h2>
          <div className="word-cards" style={{ marginTop: 18 }}>
            <WordCard src={`${IMG}/ball.jpg`} word="Ball" label="bouncy ball" onZoom={onZoom} rot={-2} />
            <WordCard src={`${IMG}/banana.jpg`} word="Banana" label="banana" onZoom={onZoom} rot={1.5} />
            <WordCard src={`${IMG}/bear.jpg`} word="Bear" label="bear" onZoom={onZoom} rot={-1} />
          </div>
        </>
      ),
    },
    // 9: C is for...
    {
      palette: "mint",
      stage: "A, B, C Is for...",
      time: "~2 min",
      stickers: <span className="sticker sticker-dot" />,
      body: (
        <>
          <h2 className="slide-h">C is for...</h2>
          <div className="word-cards" style={{ marginTop: 18 }}>
            <WordCard src={`${IMG}/cat.jpg`} word="Cat" label="cat" onZoom={onZoom} rot={-2} />
            <WordCard src={`${IMG}/car.avif`} word="Car" label="car" onZoom={onZoom} rot={1.5} />
            <WordCard src={null} word="Cookie" label="cookie" onZoom={onZoom} rot={-1} />
          </div>
        </>
      ),
    },
    // 10: Look & Say
    {
      palette: "gold",
      stage: "Look & Say",
      time: "~5 min",
      stickers: <StarIcon size={18} fill="var(--gold)" style={{ position: "absolute", top: -8, left: 76 }} className="sticker" />,
      body: (
        <>
          <h2 className="slide-h">Look & Say!</h2>
          <div className="look-grid" style={{ marginTop: 18 }}>
            <Pic src={`${IMG}/ant.jpg`} label="ant" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={`${IMG}/apple.jpg`} label="apple" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={null} label="alligator" size={"100%"} onZoom={onZoom} />
            <Pic src={`${IMG}/ball.jpg`} label="ball" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={`${IMG}/banana.jpg`} label="banana" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={`${IMG}/bear.jpg`} label="bear" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={`${IMG}/cat.jpg`} label="cat" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={`${IMG}/car.avif`} label="car" size={"100%"} onZoom={onZoom} hideLabel />
            <Pic src={null} label="cookie" size={"100%"} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 11: Meet & Greet
    {
      palette: "coral",
      stage: "Meet & Greet",
      time: "~3 min",
      stickers: <SquiggleIcon color="var(--coral)" />,
      body: (
        <>
          <h2 className="slide-h">Meet & Greet</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            <div className="speaker-row">
              <div className="speaker-avatar" style={{ background: "var(--coral)" }}>T</div>
              <div className="bubble left">Hello! My name is <span className="fill">[Teacher]</span>. My name starts with <span className="fill">[T]</span>.</div>
            </div>
            <div className="speaker-row" style={{ flexDirection: "row-reverse", alignSelf: "flex-end" }}>
              <div className="speaker-avatar" style={{ background: "var(--sky)" }}>S</div>
              <div className="bubble right">Hello! My name is <span className="fill">[Student's name]</span>. My name starts with <span className="fill">[S]</span>.</div>
            </div>
          </div>
        </>
      ),
    },
    // 12: Show What You Know
    {
      palette: "coral",
      stage: "Show What You Know",
      time: "~2 min",
      stickers: <span className="sticker sticker-dot" />,
      body: (
        <>
          <h2 className="slide-h">Show What You Know!</h2>
          <div className="letter-strip" style={{ marginTop: 18 }}>
            <LetterBadge letters="Aa" bg="var(--sun)" onZoom={onZoom} />
            <LetterBadge letters="Bb" bg="var(--sky)" onZoom={onZoom} />
            <LetterBadge letters="Cc" bg="var(--mint)" onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 13: Great Job
    {
      palette: "coral",
      stage: "Wrap-Up",
      time: null,
      stickers: <>
        <StarIcon size={26} fill="var(--sun)" style={{ position: "absolute", top: -12, right: 58 }} className="sticker" />
        <StarIcon size={16} fill="var(--mint)" style={{ position: "absolute", top: -8, left: 76 }} className="sticker" />
      </>,
      body: (
        <div className="center-col" style={{ textAlign: "center" }}>
          <StarIcon size={50} fill="var(--sun)" />
          <h2 className="slide-h" style={{ fontSize: 32 }}>Great Job!</h2>
          <p className="slide-p" style={{ textAlign: "center" }}>Today you said hello, met Anna, Bob, and Carol, and learned Aa, Bb, and Cc. See you next lesson!</p>
        </div>
      ),
    },
  ];
}

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap');

:root {
  --sun: #F2A900; --sun-deep: #A87200; --sun-light: #FFF1D2;
  --sky: #2E97C7; --sky-deep: #1E6E92; --sky-light: #DCF0F8;
  --mint: #22A67E; --mint-deep: #157A5A; --mint-light: #DBF3EA;
  --coral: #FF6B4A; --coral-deep: #E0502F; --coral-light: #FFE6DD;
  --lavender: #7A6BC7; --lavender-deep: #4E3FA0; --lavender-light: #E9E5FA;
  --gold: #C98A00; --gold-light: #FBF0DC;
  --ink: #2B2438; --ink-soft: #736A87;
}

.hal-wrap { min-height: 100vh; width: 100%; background: #EDE7F6; color: var(--ink); font-family: 'Quicksand', sans-serif; padding: 1cm; box-sizing: border-box; }
.hal-wrap * { box-sizing: border-box; }

.deck-summary { max-width: 720px; margin: 0 auto 26px; background: var(--ink); color: #fff; border-radius: 18px; padding: 20px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.deck-summary-title { font-family: 'Baloo 2', sans-serif; font-size: 18px; font-weight: 700; }
.deck-summary-sub { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 3px; }
.exit-btn { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25); border-radius: 999px; padding: 8px 16px; cursor: pointer; }
.exit-btn:hover { background: rgba(255,255,255,0.2); }

.deck-single { max-width: 720px; margin: 0 auto; }

.slide {
  position: relative; display: flex; flex-direction: column;
  background: linear-gradient(160deg, #FFFEFB 0%, #FFF8ED 55%, #FFF1DE 100%);
  border-radius: 28px; box-shadow: 0 22px 46px rgba(43,36,56,0.16), 0 2px 0 rgba(255,255,255,0.6) inset;
  min-height: 480px; overflow: hidden; border: 1px solid rgba(255,255,255,0.5);
}
.slide::before { content: ""; position: absolute; top: -120px; right: -100px; width: 320px; height: 320px; border-radius: 50%; background: radial-gradient(circle, var(--accent-light, var(--coral-light)) 0%, transparent 70%); opacity: 0.7; pointer-events: none; z-index: 0; }

.sticker { pointer-events: none; z-index: 0; }
.sticker-squiggle { position: absolute; bottom: -4px; left: 30%; opacity: 0.55; }
.sticker-dot { position: absolute; top: 46%; left: -10px; width: 16px; height: 16px; border-radius: 50%; background: var(--accent, var(--coral)); opacity: 0.15; }

.slide-header { display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; padding: 18px 34px; position: relative; z-index: 2; background: rgba(255,255,255,0.5); border-bottom: 1px solid rgba(43,36,56,0.06); }
.brand-mark { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 17px; color: var(--ink); text-shadow: 0 1px 0 rgba(255,255,255,0.9), 0 3px 5px rgba(43,36,56,0.16); display: flex; align-items: center; }
.brand-mark .accent-s { color: var(--coral); text-shadow: 0 1px 0 rgba(255,255,255,0.7), 0 3px 6px rgba(255,107,74,0.4); }
.slide-tags { display: flex; align-items: center; gap: 10px; }
.stage-tag { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px; background: var(--accent-light, var(--coral-light)); color: var(--accent-deep, var(--coral-deep)); box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset; }
.time-tag { font-size: 11.5px; font-weight: 700; color: var(--ink-soft); }

.slide-body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 30px 44px; position: relative; z-index: 1; }

.slide-footer { display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; padding: 16px 30px; position: relative; z-index: 2; background: rgba(255,255,255,0.55); border-top: 1px solid rgba(43,36,56,0.06); }
.nav-btn { display: inline-flex; align-items: center; gap: 6px; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; padding: 10px 20px; border-radius: 14px; border: none; cursor: pointer; background: linear-gradient(180deg, #fff 0%, #F1EAF8 100%); color: var(--ink); box-shadow: 0 3px 0 rgba(43,36,56,0.14), 0 6px 12px rgba(43,36,56,0.10); }
.nav-btn.next { background: linear-gradient(180deg, var(--accent, var(--coral)) 0%, var(--accent-deep, var(--coral-deep)) 100%); color: #fff; box-shadow: 0 3px 0 rgba(0,0,0,0.16), 0 6px 14px rgba(43,36,56,0.16); }
.nav-btn.is-disabled, .nav-btn:disabled { opacity: 0.35; box-shadow: 0 1px 2px rgba(43,36,56,0.1) inset; cursor: default; }
.footer-progress { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--ink-soft); }

.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 29px; color: var(--ink); margin: 0 0 8px; position: relative; z-index: 1; text-align: center; }
.slide-p { font-size: 14.5px; color: var(--ink-soft); font-weight: 600; line-height: 1.6; max-width: 640px; position: relative; z-index: 1; margin: 0 auto; }

.img-ph, .letter-strip-item { cursor: zoom-in; transition: transform 0.15s ease; position: relative; }
.img-ph:hover, .letter-strip-item:hover { transform: scale(1.04); }
.img-ph::after, .letter-strip-item::after {
  content: ""; position: absolute; bottom: 6px; right: 6px; width: 24px; height: 24px; border-radius: 50%;
  background: rgba(43,36,56,0.62) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.6'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='M21 21l-4.3-4.3'/%3E%3C/svg%3E") center/13px no-repeat;
  opacity: 0; transition: opacity 0.15s ease; pointer-events: none;
}
.img-ph:hover::after, .letter-strip-item:hover::after { opacity: 1; }

.img-ph { border: 2.5px dashed var(--accent, var(--coral)); border-radius: 18px; background: rgba(255,255,255,0.7); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; color: var(--accent-deep, var(--coral-deep)); flex-shrink: 0; overflow: hidden; }
.img-ph--photo { border-style: solid; padding: 0; }
.img-ph--photo img { width: 100%; height: 100%; object-fit: contain; background: #fff; }
.img-ph-label { font-size: 11px; font-weight: 700; text-align: center; padding: 0 10px; line-height: 1.4; }

.row { display: flex; gap: 28px; align-items: center; justify-content: center; position: relative; z-index: 1; }
.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }

.word-cards { display: flex; gap: 18px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; }
.word-card, .name-card { background: #fff; border-radius: 16px; border: 2px solid var(--accent-light, var(--coral-light)); padding: 13px; width: 172px; text-align: center; box-shadow: 0 8px 18px rgba(43,36,56,0.08); }
.word-card .img-ph, .name-card .img-ph { width: 100%; height: 100px; margin-bottom: 9px; }
.word-card-word, .name-card-name { font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 17px; color: var(--ink); }
.word-card-say { display: flex; align-items: center; justify-content: center; gap: 5px; font-size: 10px; font-weight: 700; color: var(--accent-deep, var(--coral-deep)); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; }
.name-card-letter { display: inline-block; margin-top: 6px; font-size: 10.5px; font-weight: 700; padding: 3px 10px; border-radius: 999px; }

.speaker-row { display: flex; align-items: center; gap: 10px; }
.speaker-avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; }
.bubble { background: #fff; border: 2px solid var(--accent-light, var(--coral-light)); border-radius: 18px; padding: 13px 17px; font-weight: 700; font-size: 14.5px; color: var(--ink); position: relative; box-shadow: 0 6px 14px rgba(43,36,56,0.07); }
.bubble.right { border-radius: 18px 18px 4px 18px; }
.bubble.left { border-radius: 18px 18px 18px 4px; }
.bubble .fill { color: var(--accent-deep, var(--coral-deep)); }

.letter-strip { display: flex; gap: 14px; position: relative; z-index: 1; justify-content: center; }
.letter-strip-item { display: flex; align-items: center; justify-content: center; border-radius: 16px; font-family: 'Baloo 2', sans-serif; font-weight: 800; color: #fff; box-shadow: 0 4px 0 rgba(0,0,0,0.12); }

.look-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; position: relative; z-index: 1; max-width: 420px; margin: 0 auto; }
.look-grid .img-ph { aspect-ratio: 1; width: 100%; height: auto; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(43,36,56,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
.zoom-letter-badge { width: 380px; height: 380px; border-radius: 40px; }
.zoom-letter-badge span { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 150px; color: #fff; }
`;

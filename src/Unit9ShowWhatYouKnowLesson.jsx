import React, { useEffect, useState } from "react";

const IMG = "/curriculum/u9-l1";

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

export default function Unit9ShowWhatYouKnowLesson() {
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
  { stage: "Unit 9 · Lesson 5", time: null, note: null },
  { stage: "Free Animal Talk", time: "~3 min", note: "Show a new animal picture. Ask only \"What do you see?\" Let the student respond naturally." },
  { stage: "Animal Picture", time: "~4 min", note: "Give the student a new animal scene. Ask \"What animals can you see?\" Don't supply the vocabulary immediately." },
  { stage: "Tell Me About It", time: "~4 min", note: "Show individual animals in different sizes. Ask \"What can you tell me?\" Observe if the student identifies animal and size independently." },
  { stage: "Animal Choices", time: "~4 min", note: "Give several animal cards and let the student choose which ones they want. Ask \"Which one?\" and \"Tell me about it.\"" },
  { stage: "Make an Animal Scene", time: "~4 min", note: "Student creates their own mini animal scene by choosing and placing animals." },
  { stage: "HIGHLIGHT: Animal Storyteller", time: "~4 min", note: "Student creates a short story using their animal scene. Teacher asks natural follow-up questions." },
  { stage: "Show What You Know!", time: "~2 min", note: "Present a completely new animal scene. Say only: \"Tell me about this.\" Observe what the student can produce independently." },
  { stage: "Wrap-Up", time: null, note: null },
];

function buildSlides({ onZoom }) {
  return [
    // 1: Cover
    {
      stage: "Unit 9 · Lesson 5",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h1 className="slide-h">Show What You Know!</h1></span>
          <p className="slide-p">Let's talk about animals all on your own!</p>
        </div>
      ),
    },
    // 2: Free Animal Talk
    {
      stage: "Free Animal Talk",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/monkey.avif`} label="monkey" size={110} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What do you see?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 3: Animal Picture
    {
      stage: "Animal Picture",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">What Animals Can You See?</h2></span>
          <Pic src={null} label="a new animal scene" size={120} onZoom={onZoom} />
        </div>
      ),
    },
    // 4: Tell Me About It
    {
      stage: "Tell Me About It",
      body: (
        <div className="center-col">
          <Pic src={`${IMG}/elephant.jpg`} label="elephant" size={110} onZoom={onZoom} />
          <div className="bubble-col" style={{ maxWidth: 380 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What can you tell me?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 5: Animal Choices
    {
      stage: "Animal Choices",
      body: (
        <>
          <span className="title-highlight"><h2 className="slide-h sub">Which One?</h2></span>
          <div className="word-row">
            <Pic src={`${IMG}/lion.avif`} label="lion" size={80} onZoom={onZoom} />
            <Pic src={`${IMG}/monkey.avif`} label="monkey" size={80} onZoom={onZoom} />
            <Pic src={`${IMG}/fish.avif`} label="fish" size={80} onZoom={onZoom} />
          </div>
        </>
      ),
    },
    // 6: Make an Animal Scene
    {
      stage: "Make an Animal Scene",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Make Your Own Scene!</h2></span>
          <Pic src={null} label="a blank scene to build" size={110} onZoom={onZoom} />
        </div>
      ),
    },
    // 7: HIGHLIGHT Animal Storyteller
    {
      stage: "HIGHLIGHT: Animal Storyteller",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">📖 Animal Storyteller!</h2></span>
          <div className="bubble-col" style={{ maxWidth: 420 }}>
            <div className="brow">
              <div className="avatar navy">T</div>
              <div className="bubble left">What is here? Big or small?</div>
            </div>
          </div>
        </div>
      ),
    },
    // 8: Show What You Know!
    {
      stage: "Show What You Know!",
      body: (
        <div className="center-col">
          <span className="title-highlight"><h2 className="slide-h sub">Tell Me About This!</h2></span>
          <Pic src={null} label="new animal scene" size={120} onZoom={onZoom} />
        </div>
      ),
    },
    // 9: Wrap-up
    {
      stage: "Wrap-Up",
      body: (
        <div className="center-col">
          <StarIcon size={48} fill="var(--sun)" />
          <h2 className="slide-h sub">Amazing!</h2>
          <p className="slide-p">You used your own words to talk about animals! See you next lesson!</p>
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
.slide-h { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 42px; color: var(--navy); margin: 0; text-align: center; position: relative; z-index: 1; line-height: 1.05; }
.slide-h.sub { font-size: 32px; }
.slide-p { font-family: 'Quicksand', sans-serif; font-size: 16px; color: var(--ink-soft); font-weight: 600; text-align: center; max-width: 540px; margin: 0; position: relative; z-index: 1; }

.center-col { display: flex; flex-direction: column; align-items: center; gap: 14px; }

.word-row { display: flex; gap: 16px; position: relative; z-index: 1; flex-wrap: wrap; justify-content: center; align-items: center; }
.pic { position: relative; cursor: zoom-in; overflow: hidden; flex-shrink: 0; border-radius: 24px; background: #fff; box-shadow: 0 0 0 5px #fff, 0 8px 18px rgba(27,42,74,0.16); transition: transform 0.15s ease; }
.pic:hover { transform: scale(1.04); }
.pic img { display: block; width: 100%; height: 100%; object-fit: contain; }
.pic-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--coral-deep); background: var(--coral-light); }
.pic-ph span { font-size: 9.5px; font-weight: 700; text-align: center; padding: 0 6px; }

.bubble-col { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.brow { display: flex; align-items: center; gap: 10px; }
.avatar { width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; color: #fff; overflow: hidden; }
.avatar.navy { background: var(--navy); }
.bubble { background: #fff; border-radius: 18px; padding: 12px 16px; font-weight: 700; font-size: 15px; color: var(--ink); box-shadow: 0 6px 14px rgba(27,42,74,0.08); }
.bubble.left { border-radius: 18px 18px 18px 4px; }

.zoom-overlay { position: fixed; inset: 0; background: rgba(27,42,74,0.72); display: flex; align-items: center; justify-content: center; z-index: 999; }
.zoom-overlay-inner { position: relative; background: #fff; border-radius: 28px; padding: 34px; box-shadow: 0 30px 60px rgba(0,0,0,0.32); display: flex; align-items: center; justify-content: center; }
.zoom-close { position: absolute; top: -16px; right: -16px; width: 38px; height: 38px; border-radius: 50%; background: #fff; border: none; box-shadow: 0 6px 16px rgba(0,0,0,0.2); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink); }
.zoom-pic { width: 380px; height: 380px; display: flex; align-items: center; justify-content: center; border-radius: 18px; overflow: hidden; background: #fff; }
.zoom-pic img { width: 100%; height: 100%; object-fit: contain; }
.zoom-ph { width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 2.5px dashed var(--coral); border-radius: 18px; color: var(--coral-deep); }
.zoom-ph span { font-size: 15px; font-weight: 700; text-align: center; padding: 0 24px; }
`;

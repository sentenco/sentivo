import { useEffect } from "react";

// Shared CSS for every Discover activity component. Injected once
// (idempotent by id) regardless of how many activities are on a page.
// Every class is prefixed `sa-` (Shared Activity) so it can never collide
// with a lesson file's own per-file injected styles.
const STYLE_ID = "sa-activity-styles";

const CSS = `
.sa-msg { font-size: 13px; font-weight: 700; color: #22A67E; min-height: 18px; text-align: center; font-family: 'Quicksand', sans-serif; }
.sa-shake { animation: saShake 0.4s ease; }
@keyframes saShake { 20% { transform: translateX(-6px); } 40% { transform: translateX(6px); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
.sa-bounce { animation: saBounce 0.4s ease; }
@keyframes saBounce { 0%,100% { transform: scale(1); } 40% { transform: scale(1.18); } }
.sa-pop { animation: saPop 0.3s cubic-bezier(.34,1.7,.64,1); }
@keyframes saPop { 0% { transform: scale(0.6); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

/* Match It! */
.sa-match-wrap { display: flex; gap: 46px; align-items: flex-start; justify-content: center; }
.sa-match-col { display: flex; flex-direction: column; gap: 14px; }
.sa-match-tile { width: 58px; height: 58px; border-radius: 14px; border: 3px solid #fff; cursor: pointer; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 14px rgba(27,42,74,0.14); transition: transform 0.15s ease, box-shadow 0.15s ease; }
.sa-match-tile.sa-sel { box-shadow: 0 0 0 4px #F2A900, 0 6px 14px rgba(27,42,74,0.14); transform: scale(1.08); }
.sa-match-tile.sa-done { opacity: 0.4; cursor: default; }
.sa-match-right { min-width: 70px; height: 58px; padding: 0 12px; border-radius: 14px; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 20px; letter-spacing: 1px; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease; }
.sa-match-right img { width: 40px; height: 40px; object-fit: contain; }
.sa-match-right.sa-done { border-color: #22A67E; opacity: 0.55; cursor: default; }

/* Spell It! */
.sa-spell-pic { font-size: 54px; text-align: center; }
.sa-spell-pic img { width: 72px; height: 72px; object-fit: contain; }
.sa-spell-row { display: flex; gap: 12px; justify-content: center; }
.sa-flip-tile { width: 62px; height: 62px; perspective: 400px; cursor: pointer; }
.sa-flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.5s cubic-bezier(.34,1.6,.64,1); transform-style: preserve-3d; }
.sa-flip-tile.sa-up .sa-flip-inner { transform: rotateY(180deg); }
.sa-flip-face { position: absolute; inset: 0; border-radius: 14px; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; color: #fff; box-shadow: 0 6px 14px rgba(27,42,74,0.14); border: 3px solid #fff; }
.sa-flip-face.sa-back { background: repeating-linear-gradient(45deg, #E7DEF5, #E7DEF5 6px, #F1EAFA 6px, #F1EAFA 12px); border: 3px dashed #C9BAE8; color: #B8AEDD; font-size: 20px; }
.sa-flip-face.sa-front { transform: rotateY(180deg); }

/* Say It! / Let's Talk! */
.sa-say-wrap { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 320px; margin: 0 auto; }
.sa-bub-row { display: flex; align-items: flex-end; gap: 8px; opacity: 1; transition: opacity 0.3s ease, transform 0.3s ease; }
.sa-bub-row.sa-me { flex-direction: row-reverse; }
.sa-bub-row.sa-hidden { opacity: 0; transform: translateY(6px); pointer-events: none; height: 0; overflow: hidden; }
.sa-avatar { width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12px; }
.sa-avatar.sa-navy { background: #1B2A4A; }
.sa-avatar.sa-coral { background: #FF6B4A; }
.sa-bubble { background: #fff; padding: 9px 14px; border-radius: 16px; font-size: 13.5px; font-weight: 600; box-shadow: 0 3px 8px rgba(27,42,74,0.08); max-width: 230px; font-family: 'Quicksand', sans-serif; }
.sa-bubble.sa-tap { cursor: pointer; border: 2px dashed #C9BAE8; color: #B8AEDD; background: #F8F4FC; display: flex; align-items: center; gap: 6px; }
.sa-bubble.sa-revealed { animation: saPop 0.3s cubic-bezier(.34,1.7,.64,1); border-style: solid; border-color: transparent; color: #1B2A4A; background: #fff; }
.sa-next-btn { background: #fff; color: #4A5578; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer; box-shadow: 0 4px 10px rgba(27,42,74,0.1); transition: transform 0.1s ease; margin: 0 auto; display: block; }
.sa-next-btn:disabled { opacity: 0.4; cursor: default; }

/* Sort It! */
.sa-sort-items { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.sa-sort-item { width: 52px; height: 52px; border-radius: 14px; background: #fff; font-size: 26px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, opacity 0.25s ease; }
.sa-sort-item img { width: 34px; height: 34px; object-fit: contain; }
.sa-sort-item.sa-sel { border-color: #F2A900; transform: scale(1.08); }
.sa-sort-item.sa-gone { opacity: 0; pointer-events: none; }
.sa-sort-bins { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.sa-sort-bin { width: 108px; padding: 12px 8px; border-radius: 16px; background: #fff; cursor: pointer; text-align: center; font-size: 11.5px; font-weight: 700; color: #4A5578; box-shadow: 0 4px 10px rgba(27,42,74,0.1); transition: transform 0.15s ease; font-family: 'Quicksand', sans-serif; }
.sa-sort-bin .sa-bin-emoji { font-size: 26px; display: block; margin-bottom: 4px; }

/* Stamp Bingo! */
.sa-bingo-grid { display: grid; gap: 8px; justify-content: center; }
.sa-bingo-cell { width: 56px; height: 56px; border-radius: 12px; background: #fff; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease; }
.sa-bingo-cell img { width: 36px; height: 36px; object-fit: contain; }
.sa-bingo-cell.sa-on { border-color: #22A67E; }
.sa-stamp { position: absolute; inset: -6px; display: flex; align-items: center; justify-content: center; font-size: 30px; color: #22A67E; transform: scale(0) rotate(-18deg); transition: transform 0.25s cubic-bezier(.34,1.9,.64,1); }
.sa-bingo-cell.sa-on .sa-stamp { transform: scale(1) rotate(-18deg); }
.sa-bingo-banner { position: fixed; top: 40%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity: 0; background: #FF6B4A; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 34px; padding: 18px 40px; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); z-index: 1000; pointer-events: none; transition: transform 0.35s cubic-bezier(.34,1.7,.64,1), opacity 0.25s ease; }
.sa-bingo-banner.sa-show { transform: translate(-50%,-50%) scale(1); opacity: 1; }

/* Build the Scene! */
.sa-scene-floor { width: 100%; min-height: 100px; background: #fff; border-radius: 16px; box-shadow: inset 0 0 0 2px #F0E6D6; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: center; gap: 8px; padding: 12px; position: relative; }
.sa-scene-floor::before { content: attr(data-hint); position: absolute; color: #C9C2AF; font-size: 12px; font-weight: 700; top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; text-align: center; width: 80%; font-family: 'Quicksand', sans-serif; }
.sa-scene-floor.sa-has-items::before { display: none; }
.sa-scene-placed { font-size: 32px; animation: saDropIn 0.35s cubic-bezier(.34,1.7,.64,1); cursor: pointer; }
.sa-scene-placed img { width: 44px; height: 44px; object-fit: contain; }
@keyframes saDropIn { 0% { transform: translateY(-14px) scale(0.4); opacity: 0; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
.sa-scene-chips { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.sa-scene-chip { width: 50px; height: 50px; border-radius: 14px; background: #fff; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, opacity 0.2s ease; }
.sa-scene-chip img { width: 34px; height: 34px; object-fit: contain; }
.sa-scene-chip.sa-used { opacity: 0.3; pointer-events: none; }
.sa-scene-progress { font-size: 11.5px; font-weight: 700; color: #4A5578; text-align: center; font-family: 'Quicksand', sans-serif; }

/* Who Am I? (Detective) */
.sa-detective-card { width: 100px; height: 100px; border-radius: 20px; background: #1B2A4A; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 42px; font-family: 'Baloo 2', sans-serif; box-shadow: 0 8px 18px rgba(27,42,74,0.2); transition: transform 0.4s cubic-bezier(.34,1.6,.64,1), background 0.3s ease; margin: 0 auto; }
.sa-detective-card img { width: 60px; height: 60px; object-fit: contain; }
.sa-detective-card.sa-solved { background: #22A67E; transform: scale(1.08) rotate(-3deg); }
.sa-clue-box { min-height: 20px; font-size: 13px; font-weight: 700; color: #4A5578; text-align: center; font-family: 'Quicksand', sans-serif; }
.sa-guess-row { display: flex; gap: 10px; justify-content: center; }
.sa-guess-btn { width: 46px; height: 46px; border-radius: 12px; background: #fff; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease; }
.sa-guess-btn img { width: 30px; height: 30px; object-fit: contain; }
.sa-clue-btn { background: #F2A900; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; border: none; border-radius: 999px; padding: 8px 16px; cursor: pointer; box-shadow: 0 4px 0 #B87E00; transition: transform 0.1s ease; display: block; margin: 0 auto; }
.sa-clue-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 #B87E00; }
.sa-clue-btn:disabled { opacity: 0.4; cursor: default; box-shadow: none; }

/* How Do You Feel? */
.sa-emo-face { font-size: 64px; transition: transform 0.3s cubic-bezier(.34,1.6,.64,1); filter: drop-shadow(0 8px 14px rgba(27,42,74,0.12)); text-align: center; }
.sa-emo-face img { width: 84px; height: 84px; object-fit: contain; }
.sa-emo-face.sa-reacting { animation: saEmoPop 0.4s cubic-bezier(.34,1.7,.64,1); }
@keyframes saEmoPop { 0% { transform: scale(0.6) rotate(-10deg); } 60% { transform: scale(1.2) rotate(6deg); } 100% { transform: scale(1) rotate(0); } }
.sa-emo-row { display: flex; gap: 10px; justify-content: center; }
.sa-emo-btn { width: 48px; height: 48px; border-radius: 14px; background: #fff; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, border-color 0.15s ease; }
.sa-emo-btn img { width: 30px; height: 30px; object-fit: contain; }
.sa-emo-btn.sa-on { border-color: #F2A900; transform: scale(1.08); }
.sa-emo-line { font-size: 13px; font-weight: 700; color: #4A5578; min-height: 18px; text-align: center; font-family: 'Quicksand', sans-serif; }

/* Build a Sentence! */
.sa-sentence-strip { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: center; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 18px; color: #1B2A4A; min-height: 30px; }
.sa-blank-slot { display: inline-flex; align-items: center; justify-content: center; min-width: 60px; height: 30px; border-bottom: 3px dashed #C9BAE8; color: transparent; }
.sa-blank-slot.sa-filled { border-bottom-color: #FF6B4A; color: #E0502F; animation: saPop 0.3s cubic-bezier(.34,1.7,.64,1); }
.sa-choice-row { display: flex; gap: 10px; justify-content: center; }
.sa-choice-chip { background: #fff; padding: 9px 18px; border-radius: 999px; font-weight: 700; font-size: 13.5px; cursor: pointer; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, opacity 0.2s ease; color: #4A5578; font-family: 'Quicksand', sans-serif; }
.sa-choice-chip.sa-used { opacity: 0.3; pointer-events: none; }

/* Put It in Order! */
.sa-seq-cards { display: flex; gap: 10px; justify-content: center; }
.sa-seq-card { width: 50px; height: 50px; border-radius: 14px; background: #fff; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, opacity 0.2s ease; }
.sa-seq-card img { width: 34px; height: 34px; object-fit: contain; }
.sa-seq-card.sa-sel { border-color: #F2A900; transform: scale(1.08); }
.sa-seq-card.sa-placed { opacity: 0.25; pointer-events: none; }
.sa-seq-slots { display: flex; gap: 10px; justify-content: center; }
.sa-seq-slot { width: 50px; height: 50px; border-radius: 14px; background: repeating-linear-gradient(45deg, #E7DEF5, #E7DEF5 6px, #F1EAFA 6px, #F1EAFA 12px); border: 3px dashed #C9BAE8; display: flex; align-items: center; justify-content: center; color: #B8AEDD; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 14px; cursor: pointer; }
.sa-seq-slot img { width: 34px; height: 34px; object-fit: contain; }
.sa-seq-slot.sa-filled { background: #fff; border: 3px solid #22A67E; font-size: 22px; }

/* Blend It! */
.sa-blend-row { display: flex; align-items: center; gap: 10px; justify-content: center; }
.sa-blend-tile { min-width: 56px; height: 56px; padding: 0 10px; border-radius: 14px; border: 3px solid #fff; cursor: pointer; font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 22px; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 14px rgba(27,42,74,0.14); transition: transform 0.35s cubic-bezier(.34,1.6,.64,1), opacity 0.35s ease; }
.sa-blend-tile.sa-merged { transform: scale(0); opacity: 0; }
.sa-blend-plus { font-size: 18px; color: #4A5578; font-weight: 800; }
.sa-blend-wrap { position: relative; display: flex; align-items: center; justify-content: center; min-height: 56px; }
.sa-blend-result { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 26px; color: #1B2A4A; background: #fff; padding: 10px 22px; border-radius: 16px; box-shadow: 0 6px 14px rgba(27,42,74,0.12); transform: scale(0); transition: transform 0.4s cubic-bezier(.34,1.8,.64,1); position: absolute; display: flex; align-items: center; gap: 8px; }
.sa-blend-result.sa-show { transform: scale(1); }
.sa-blend-result img { width: 32px; height: 32px; object-fit: contain; }

/* Order It! (shop / choice roleplay) */
.sa-order-choices { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.sa-order-btn-pick { width: 50px; height: 50px; border-radius: 14px; background: #fff; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease, opacity 0.2s ease; }
.sa-order-btn-pick img { width: 34px; height: 34px; object-fit: contain; }
.sa-order-btn-pick.sa-used { opacity: 0.3; pointer-events: none; }
.sa-order-ticket { background: #fff; border-radius: 14px; padding: 10px 16px; min-width: 160px; min-height: 22px; box-shadow: 0 4px 10px rgba(27,42,74,0.1); font-size: 12.5px; font-weight: 700; color: #4A5578; display: flex; flex-direction: column; gap: 3px; margin: 0 auto; font-family: 'Quicksand', sans-serif; }
.sa-ticket-empty { color: #C9C2AF; font-weight: 600; }
.sa-ticket-item { animation: saPop 0.25s ease; }
.sa-confirm-btn { background: #FF6B4A; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer; box-shadow: 0 4px 0 #E0502F; transition: transform 0.1s ease, opacity 0.2s ease; display: block; margin: 0 auto; }
.sa-confirm-btn:disabled { opacity: 0.35; cursor: default; }
.sa-confirm-btn:not(:disabled):active { transform: translateY(2px); box-shadow: 0 2px 0 #E0502F; }

/* Catch the Mistake! */
.sa-quiz-swap { font-size: 10.5px; font-weight: 700; color: #8E6FCE; background: #F1EAFA; padding: 3px 10px; border-radius: 999px; display: table; margin: 0 auto; font-family: 'Quicksand', sans-serif; }
.sa-quiz-statement { background: #fff; padding: 12px 18px; border-radius: 16px; font-size: 13.5px; font-weight: 700; box-shadow: 0 3px 8px rgba(27,42,74,0.08); text-align: center; max-width: 260px; margin: 0 auto; font-family: 'Quicksand', sans-serif; }
.sa-quiz-btns { display: flex; gap: 12px; justify-content: center; }
.sa-quiz-btn { width: 54px; height: 46px; border-radius: 12px; background: #fff; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(27,42,74,0.1); border: 3px solid transparent; transition: transform 0.15s ease; }
.sa-quiz-btn.sa-correct-pick { border-color: #22A67E; }

/* My Score! */
.sa-score-btn { background: #FF6B4A; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 13px; border: none; border-radius: 999px; padding: 10px 22px; cursor: pointer; box-shadow: 0 4px 0 #E0502F; transition: transform 0.1s ease, opacity 0.2s ease; display: block; margin: 0 auto; }
.sa-score-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 #E0502F; }
.sa-score-btn.sa-hidden { display: none; }
.sa-score-stars { display: flex; gap: 8px; justify-content: center; }
.sa-star { font-size: 34px; opacity: 0; transform: scale(0) rotate(-30deg); transition: transform 0.4s cubic-bezier(.34,1.9,.64,1), opacity 0.2s ease; }
.sa-star.sa-on { opacity: 1; transform: scale(1) rotate(0); }
.sa-score-badge { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 14px; color: #E0502F; background: #FFE9DE; padding: 8px 16px; border-radius: 999px; opacity: 0; transform: translateY(6px); transition: opacity 0.3s ease, transform 0.3s ease; display: table; margin: 8px auto 0; }
.sa-score-badge.sa-on { opacity: 1; transform: translateY(0); }

/* Spin & Recall! */
.sa-wheel-wrap { position: relative; width: 108px; height: 108px; margin: 0 auto; }
.sa-wheel-dial { width: 100%; height: 100%; border-radius: 50%; background: #fff; box-shadow: 0 6px 16px rgba(27,42,74,0.14); position: relative; transition: transform 1.1s cubic-bezier(.17,.87,.15,1); }
.sa-wheel-item { position: absolute; width: 32px; height: 32px; border-radius: 10px; font-size: 18px; display: flex; align-items: center; justify-content: center; background: #FFF7EC; }
.sa-wheel-item img { width: 24px; height: 24px; object-fit: contain; }
.sa-wheel-pin { position: absolute; top: -8px; left: 50%; transform: translateX(-50%); font-size: 16px; z-index: 2; }
.sa-wheel-btn { background: #FF6B4A; color: #fff; font-family: 'Baloo 2', sans-serif; font-weight: 700; font-size: 12.5px; border: none; border-radius: 999px; padding: 8px 18px; cursor: pointer; box-shadow: 0 4px 0 #E0502F; transition: transform 0.1s ease; display: block; margin: 0 auto; }
.sa-wheel-btn:active { transform: translateY(2px); box-shadow: 0 2px 0 #E0502F; }

/* Look & Say (Flashcard Deck) */
.sa-deck-wrap { width: 100px; height: 100px; perspective: 500px; margin: 0 auto; }
.sa-deck-inner { position: relative; width: 100%; height: 100%; transition: transform 0.45s cubic-bezier(.34,1.5,.64,1); transform-style: preserve-3d; }
.sa-deck-inner.sa-flip { transform: rotateY(180deg); }
.sa-deck-face { position: absolute; inset: 0; border-radius: 18px; backface-visibility: hidden; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 8px 18px rgba(27,42,74,0.14); font-size: 34px; }
.sa-deck-face img { width: 56px; height: 56px; object-fit: contain; }
.sa-deck-face .sa-word { font-family: 'Baloo 2', sans-serif; font-weight: 800; font-size: 13px; color: #1B2A4A; }
.sa-deck-face.sa-back { transform: rotateY(180deg); }
.sa-deck-dots { display: flex; gap: 6px; justify-content: center; }
.sa-deck-dot { width: 6px; height: 6px; border-radius: 50%; background: #F0E6D6; }
.sa-deck-dot.sa-on { background: #FF6B4A; width: 16px; border-radius: 4px; }

/* Your Turn! (Open Mic) */
.sa-mic-ring-wrap { position: relative; width: 84px; height: 84px; margin: 0 auto; }
.sa-mic-ring { width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(#FF6B4A calc(var(--sa-p, 0) * 1%), #F0E6D6 0); display: flex; align-items: center; justify-content: center; transition: background 0.1s linear; }
.sa-mic-btn { width: 66px; height: 66px; border-radius: 50%; background: #fff; border: none; cursor: pointer; font-size: 28px; box-shadow: 0 4px 10px rgba(27,42,74,0.12); display: flex; align-items: center; justify-content: center; }
.sa-mic-btn.sa-going { animation: saMicPulse 1s ease infinite; }
@keyframes saMicPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
.sa-mic-prompt { font-size: 13px; font-weight: 700; color: #4A5578; text-align: center; max-width: 240px; margin: 0 auto; font-family: 'Quicksand', sans-serif; }

@media (prefers-reduced-motion: reduce) {
  .sa-flip-inner, .sa-deck-inner, .sa-wheel-dial, .sa-blend-tile, .sa-blend-result, .sa-star, .sa-emo-face, .sa-scene-placed { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
}
`;

export function useActivityStyles() {
  useEffect(() => {
    if (document.getElementById(STYLE_ID)) return;
    const tag = document.createElement("style");
    tag.id = STYLE_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

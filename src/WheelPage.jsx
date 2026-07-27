import { useMemo, useRef, useState } from "react";

const COLORS = ["#7C5CFC", "#FF8A4C", "#16BFAE", "#FFB648", "#FF6B8B", "#2B6FE0", "#3FCDAF", "#E4322B"];

const DEFAULT_TEXT = "Alex\nJordan\nSam\nCasey\nRiley\nMorgan";

function pointAt(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx, cy, r, startAngle, endAngle) {
  const start = pointAt(cx, cy, r, startAngle);
  const end = pointAt(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

export default function WheelPage() {
  const [rawText, setRawText] = useState(DEFAULT_TEXT);
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const spinCountRef = useRef(0);

  const words = useMemo(
    () => rawText.split("\n").map((w) => w.trim()).filter(Boolean),
    [rawText]
  );

  const n = words.length;
  const sliceAngle = n > 0 ? 360 / n : 0;
  const cx = 200;
  const cy = 200;
  const r = 190;

  function handleTextChange(e) {
    setRawText(e.target.value);
    setResult(null);
  }

  function spin() {
    if (spinning || n < 2) return;
    setSpinning(true);
    setResult(null);

    const targetIndex = Math.floor(Math.random() * n);
    const sliceCenter = targetIndex * sliceAngle + sliceAngle / 2;
    const jitterRange = sliceAngle * 0.6;
    const jitter = (Math.random() - 0.5) * jitterRange;

    spinCountRef.current += 1;
    const fullSpins = 5 + spinCountRef.current * 0; // consistent spin count
    const targetOffset = ((360 - sliceCenter - jitter) % 360 + 360) % 360;
    const nextRotation = rotation - (rotation % 360) + fullSpins * 360 + targetOffset;

    setRotation(nextRotation);
    window.setTimeout(() => {
      setSpinning(false);
      setResult(words[targetIndex]);
    }, 4200);
  }

  return (
    <div className="wp-shell">
      <style>{CSS}</style>

      <div className="wp-panel">
        <div className="wp-panel-head">
          <span className="wp-eyebrow">Sentivo · Today</span>
          <h1 className="wp-title">Spin the Wheel</h1>
          <p className="wp-blurb">Paste your list, one item per line. Each line becomes a slice.</p>
        </div>

        <label className="wp-label" htmlFor="wp-words">Words</label>
        <textarea
          id="wp-words"
          className="wp-textarea"
          value={rawText}
          onChange={handleTextChange}
          placeholder={"Alex\nJordan\nSam\n..."}
          spellCheck={false}
        />
        <div className="wp-count">{n} {n === 1 ? "slice" : "slices"}{n < 2 ? " — add at least 2" : ""}</div>

        <button
          type="button"
          className="wp-spin-btn"
          onClick={spin}
          disabled={spinning || n < 2}
        >
          {spinning ? "Spinning…" : "Spin"}
        </button>

        {result && (
          <div className="wp-result">
            <span className="wp-result-label">Winner</span>
            <span className="wp-result-value">🎉 {result}</span>
          </div>
        )}
      </div>

      <div className="wp-stage">
        <div className="wp-wheel-wrap">
          <div className="wp-pointer" />
          <div
            className="wp-disc"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? "transform 4.2s cubic-bezier(0.12, 0.67, 0.1, 1)" : "none",
            }}
          >
            {n === 0 ? (
              <div className="wp-empty-disc">Add words to build your wheel</div>
            ) : (
              <svg viewBox="0 0 400 400" className="wp-svg">
                {words.map((word, i) => {
                  const start = i * sliceAngle;
                  const end = (i + 1) * sliceAngle;
                  const mid = start + sliceAngle / 2;
                  const labelPos = pointAt(cx, cy, r * 0.62, mid);
                  let labelRotate = mid;
                  if (labelRotate > 90 && labelRotate < 270) labelRotate += 180;
                  const fontSize = Math.max(9, Math.min(15, 130 / Math.max(n, 6)));
                  const label = word.length > 16 ? word.slice(0, 15) + "…" : word;
                  return (
                    <g key={i}>
                      <path d={slicePath(cx, cy, r, start, end)} fill={COLORS[i % COLORS.length]} stroke="#FFFFFF" strokeWidth="2" />
                      <text
                        x={labelPos.x}
                        y={labelPos.y}
                        fontSize={fontSize}
                        fill="#FFFFFF"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${labelRotate}, ${labelPos.x}, ${labelPos.y})`}
                        className="wp-slice-label"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
          <div className="wp-hub">
            <span className="wp-hub-s">S</span>entivo
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.wp-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  background: #FFF7F9;
  font-family: 'Quicksand', sans-serif;
}
.wp-shell * { box-sizing: border-box; }

.wp-panel {
  flex-shrink: 0;
  width: 320px;
  height: 100%;
  overflow-y: auto;
  padding: 26px 24px;
  background: #FFFFFF;
  border-right: 1px solid #FBE1E7;
  display: flex;
  flex-direction: column;
}

.wp-panel-head { margin-bottom: 18px; }
.wp-eyebrow {
  display: inline-block;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #D6395F;
  background: rgba(214,57,95,0.1);
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 10px;
}
.wp-title { font-family: 'Fredoka', sans-serif; font-size: 22px; font-weight: 600; color: #2B2A4A; margin: 0 0 6px; }
.wp-blurb { font-size: 12.5px; line-height: 1.5; color: #6B6480; margin: 0; }

.wp-label { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #8A8398; margin-bottom: 6px; }

.wp-textarea {
  flex: 1;
  min-height: 200px;
  resize: none;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #2B2A4A;
  background: #FFF7F9;
  border: 1px solid #FBE1E7;
  border-radius: 12px;
  padding: 12px 14px;
  line-height: 1.7;
  outline: none;
}
.wp-textarea:focus { border-color: #D6395F; }

.wp-count { font-size: 11.5px; color: #8A8398; margin: 8px 0 16px; }

.wp-spin-btn {
  font-family: 'Fredoka', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #FFFFFF;
  background: linear-gradient(135deg, #FF7C97 0%, #D6395F 100%);
  border: none;
  border-radius: 12px;
  padding: 13px 18px;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(214,57,95,0.28);
  transition: transform 0.12s ease, opacity 0.12s ease;
}
.wp-spin-btn:hover:not(:disabled) { transform: translateY(-1px); }
.wp-spin-btn:disabled { opacity: 0.5; cursor: default; box-shadow: none; }

.wp-result {
  margin-top: 18px;
  padding: 14px 16px;
  background: rgba(214,57,95,0.08);
  border: 1px solid rgba(214,57,95,0.22);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.wp-result-label { font-size: 10.5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #D6395F; }
.wp-result-value { font-family: 'Fredoka', sans-serif; font-size: 17px; font-weight: 600; color: #2B2A4A; }

.wp-stage {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.wp-wheel-wrap {
  position: relative;
  width: min(70vh, 620px);
  height: min(70vh, 620px);
  max-width: 100%;
  max-height: 100%;
}

.wp-pointer {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 26px solid #2B2A4A;
  z-index: 20;
  filter: drop-shadow(0 3px 4px rgba(0,0,0,0.25));
}

.wp-disc {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 18px 40px rgba(43,42,74,0.22);
  border: 6px solid #FFFFFF;
  overflow: hidden;
}

.wp-svg { width: 100%; height: 100%; display: block; }
.wp-slice-label { font-family: 'Quicksand', sans-serif; font-weight: 700; pointer-events: none; }

.wp-empty-disc {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #F1F0F7;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  font-size: 14px;
  color: #8A8398;
  font-weight: 600;
}

.wp-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-size: 12.5px;
  font-weight: 700;
  color: #2B2A4A;
  box-shadow: 0 6px 16px rgba(43,42,74,0.28), inset 0 0 0 3px #FBE1E7;
}
.wp-hub-s { color: #7C5CFC; }

@media (max-width: 760px) {
  .wp-shell { flex-direction: column; overflow-y: auto; height: auto; min-height: 100vh; }
  .wp-panel { width: 100%; border-right: none; border-bottom: 1px solid #FBE1E7; }
  .wp-textarea { min-height: 120px; }
}
`;

import { useNavigate } from "react-router-dom";
import DESIGNS, { NOTEBOOK_STAGE_MARGIN } from "./notebookDesigns";

// A per-card accent color for each design -- separate from the design's
// own `frame`/`ink` (which are tuned for the writable page itself, not a
// UI chip) so the selection grid can hint at each notebook's real palette.
const CARD_ACCENT = {
  kids: "#FF6F91",
  minimal: "#8B95A1",
  elegant: "#C9A227",
  "soccer-stadium": "#2E9E63",
  "soccer-coach": "#D4AF37",
};

// Opens the writable notebook as a standalone popup -- matching the
// FORGE/ASCEND/Article Player chrome-less window.open pattern. The window
// is sized to the chosen design's own aspect ratio (plus the same stage
// margin NotebookPage pads the paper with) so it hugs the page instead of
// leaving a boxy leftover window around it.
function openNotebook(design) {
  const screenW = window.screen.availWidth || 1400;
  const screenH = window.screen.availHeight || 900;
  const chromeH = 34; // fudge for the OS/browser title bar on a toolbar=no popup

  const maxPaperH = Math.min(920, screenH - chromeH - NOTEBOOK_STAGE_MARGIN * 2 - 20);
  const maxPaperW = screenW - NOTEBOOK_STAGE_MARGIN * 2 - 40;

  let paperH = maxPaperH;
  let paperW = paperH * design.aspect;
  if (paperW > maxPaperW) {
    paperW = maxPaperW;
    paperH = paperW / design.aspect;
  }

  const w = Math.round(paperW + NOTEBOOK_STAGE_MARGIN * 2);
  const h = Math.round(paperH + NOTEBOOK_STAGE_MARGIN * 2 + chromeH);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/notebook/${design.key}`,
    "sentivoNotebook",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function PopOutIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 3H3.3A1.3 1.3 0 0 0 2 4.3v8.4A1.3 1.3 0 0 0 3.3 14h8.4A1.3 1.3 0 0 0 13 12.7V9.5" />
      <path d="M9.5 2H14v4.5" />
      <path d="M14 2 7.3 8.7" />
    </svg>
  );
}

export default function NotebookHub() {
  const navigate = useNavigate();

  return (
    <div className="nbh-shell">
      <style>{CSS}</style>
      <header className="nbh-topbar">
        <button type="button" className="nbh-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentivo.png" alt="" className="nbh-brand-logo" />entivo
        </button>
        <span className="nbh-topbar-title">Digital Notebook</span>
        <span className="nbh-topbar-spacer" aria-hidden="true" />
      </header>

      <div className="nbh-page">
        <div className="nbh-stage">
          <div className="nbh-hero">
            <span className="nbh-hero-badge">📓</span>
            <span className="nbh-eyebrow">Sentivo · Today</span>
            <h1 className="nbh-hero-title">Pick a page</h1>
            <p className="nbh-hero-blurb">
              Choose a design, then write live on it in its own window while you teach. Nothing is saved — it clears when the window closes.
            </p>
          </div>

          <div className="nbh-grid">
            {DESIGNS.map((d) => (
              <button
                key={d.key}
                type="button"
                className="nbh-card"
                style={{ "--accent": CARD_ACCENT[d.key] || "#1E8F76" }}
                onClick={() => openNotebook(d)}
              >
                <div className="nbh-card-thumb">
                  <img src={d.image} alt={`${d.label} notebook design`} />
                </div>
                <div className="nbh-card-accent" />
                <div className="nbh-card-body">
                  <h3 className="nbh-card-title">{d.label}</h3>
                  <p className="nbh-card-blurb">{d.blurb}</p>
                  <span className="nbh-card-cta">
                    Open in new window
                    <PopOutIcon />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.nbh-shell {
  min-height: 100vh;
  background: #FFFFFF;
  color: #1B2B27;
  font-family: 'Quicksand', sans-serif;
}
.nbh-shell * { box-sizing: border-box; }

.nbh-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 28px;
  border-bottom: 1px solid #E7EDEA;
  background: #FFFFFF;
}
.nbh-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2B27;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nbh-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.nbh-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 14px; font-weight: 600; color: #5A6E68; }
.nbh-topbar-spacer { width: 90px; }

.nbh-page { padding: 24px; }

.nbh-stage {
  max-width: 1080px;
  margin: 0 auto;
  padding: clamp(32px, 4.5vw, 56px) clamp(20px, 4vw, 44px);
  border-radius: 26px;
  background:
    repeating-linear-gradient(180deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 56px),
    linear-gradient(160deg, #E9F8F1 0%, #D3EEE3 55%, #C7E8DC 100%);
}

.nbh-hero { text-align: center; margin-bottom: 40px; }
.nbh-hero-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 8px 20px rgba(30,143,118,0.16);
  font-size: 20px;
}
.nbh-eyebrow {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #1E8F76;
  background: rgba(63,205,175,0.18);
  border-radius: 999px;
  padding: 5px 14px;
  margin-bottom: 14px;
}
.nbh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(27px, 3.6vw, 36px);
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 10px;
}
.nbh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: #4C625C;
  max-width: 560px;
  margin: 0 auto;
}

.nbh-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px 22px;
}

.nbh-card {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #FFFFFF;
  border: 1px solid #E1F0EA;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 10px 24px rgba(30,143,118,0.10);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.nbh-card::before, .nbh-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: #FFFFFF;
  border: 1px solid #E1F0EA;
  z-index: -1;
}
.nbh-card::before { transform: translate(5px, 6px); opacity: 0.75; }
.nbh-card::after { transform: translate(10px, 12px); opacity: 0.45; }
.nbh-card:hover { transform: translateY(-4px); box-shadow: 0 18px 34px rgba(30,143,118,0.2); }

.nbh-card-thumb {
  height: 176px;
  background: #F1F6F4;
  overflow: hidden;
}
.nbh-card-thumb img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.nbh-card-accent { height: 4px; background: var(--accent); }

.nbh-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 6px; }
.nbh-card-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; margin: 0; color: #1B2B27; }
.nbh-card-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  line-height: 1.5;
  color: #5A6E68;
  margin: 0;
}
.nbh-card-cta {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--accent);
}
.nbh-card-cta svg { width: 12px; height: 12px; flex-shrink: 0; }

@media (max-width: 900px) {
  .nbh-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .nbh-grid { grid-template-columns: 1fr; }
  .nbh-page { padding: 12px; }
  .nbh-stage { padding: 28px 16px 36px; }
  .nbh-topbar-spacer { display: none; }
}
`;

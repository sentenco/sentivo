import { useNavigate } from "react-router-dom";
import DESIGNS, { NOTEBOOK_STAGE_MARGIN } from "./notebookDesigns";

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

export default function NotebookHub() {
  const navigate = useNavigate();

  return (
    <div className="nbh-shell">
      <style>{CSS}</style>
      <header className="nbh-topbar">
        <button type="button" className="nbh-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="nbh-topbar-title">Digital Notebook</span>
        <span className="nbh-topbar-slot" />
      </header>

      <div className="nbh-page">
        <div className="nbh-stage">
          <div className="nbh-hero">
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
                onClick={() => openNotebook(d)}
              >
                <div className="nbh-card-thumb">
                  <img src={d.image} alt={`${d.label} notebook design`} />
                </div>
                <div className="nbh-card-body">
                  <h3 className="nbh-card-title">{d.label}</h3>
                  <p className="nbh-card-blurb">{d.blurb}</p>
                  <span className="nbh-card-cta">Open in new window →</span>
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
  padding: 16px 28px;
  border-bottom: 1px solid #E7EDEA;
  background: #FFFFFF;
}
.nbh-back-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #1E8F76;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 4px;
}
.nbh-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 15px; font-weight: 600; color: #1B2B27; }
.nbh-topbar-slot { width: 70px; }

.nbh-page { padding: 24px; }

.nbh-stage {
  max-width: 1080px;
  margin: 0 auto;
  padding: clamp(28px, 4vw, 48px) clamp(20px, 4vw, 44px);
  border-radius: 24px;
  background:
    repeating-linear-gradient(180deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 64px),
    linear-gradient(180deg, #EAF7F2 0%, #D8EEE5 100%);
}

.nbh-hero { text-align: center; margin-bottom: 34px; }
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
  font-size: clamp(26px, 3.4vw, 34px);
  font-weight: 600;
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
  gap: 20px;
}

.nbh-card {
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
.nbh-card:hover { transform: translateY(-3px); box-shadow: 0 16px 32px rgba(30,143,118,0.18); }

.nbh-card-thumb {
  height: 180px;
  background: #F1F6F4;
  border-bottom: 1px solid #E1F0EA;
  overflow: hidden;
}
.nbh-card-thumb img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

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
  margin-top: 8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #1E8F76;
}

@media (max-width: 900px) {
  .nbh-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .nbh-grid { grid-template-columns: 1fr; }
  .nbh-page { padding: 12px; }
  .nbh-stage { padding: 28px 16px 36px; }
}
`;

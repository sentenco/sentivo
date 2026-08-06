import { useParams } from "react-router-dom";
import { getTrack } from "./ascendTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function TypeIcon({ type }) {
  switch (type) {
    case "Upgrade":
      return (
        <svg {...ICON_PROPS}>
          <path d="M4 17 10 11 14 15 20 8" /><path d="M20 8h-5" /><path d="M20 8v5" />
        </svg>
      );
    case "Frame":
      return (
        <svg {...ICON_PROPS}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16" opacity="0.5" /><path d="M9 9v11" opacity="0.5" />
        </svg>
      );
    case "Counter":
      return (
        <svg {...ICON_PROPS}>
          <path d="M5 5l7 7-7 7" /><path d="M19 5l-7 7 7 7" opacity="0.5" />
        </svg>
      );
    case "Reversal":
      return (
        <svg {...ICON_PROPS}>
          <path d="M4 7h11l-3-3" /><path d="M20 17H9l3 3" />
        </svg>
      );
    case "Rematch":
      return (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function slideCount(lesson) {
  return lesson.slideOrder.length;
}

// ASCEND lessons open as a standalone popup player, matching FORGE's
// chrome-less window.open pattern (itself mirroring LessonsGrid.jsx's
// curriculum player) -- an independent window, not embedded in the Library.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1220, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/ascend/${trackId}/${num}`,
    "sentivoAscendPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Teacher Guide opens as its own separate popup, triggered by its own
// explicit click -- not paired automatically with the student window.
// (The curriculum tried auto-opening a student+teacher pair from one
// click twice and reverted it as unreliable; a dedicated button avoids
// that failure mode.) Portrait-ish sizing since it's a long scrollable
// reference document meant to be read, not projected.
function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/ascend/${trackId}/${num}/guide`,
    "sentivoAscendGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function AscendTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="as-shell">
        <style>{CSS}</style>
        <div className="as-stage">
          <p className="as-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="as-shell">
      <style>{CSS}</style>
      <header className="as-topbar">
        <span className="as-topbar-title">ASCEND</span>
      </header>

      <div className="as-stage">
        <div className="as-hero">
          <div className="as-hero-tags">
            <span className="as-tag">{track.theme}</span>
            <span className="as-tag as-tag--level">{track.level}</span>
          </div>
          <h1 className="as-hero-title">{track.title}</h1>
          <p className="as-hero-blurb">{track.blurb}</p>
        </div>

        <div className="as-path">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="as-row as-row--locked">
                  <div className="as-row-marker"><span className="as-row-num as-row-num--locked">{num}</span></div>
                  <div className="as-row-icon as-row-icon--locked">···</div>
                  <div className="as-row-body">
                    <p className="as-row-title as-row-title--locked">Coming soon</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={num} className="as-row as-row--live">
                <div className="as-row-marker"><span className="as-row-num">{num}</span></div>
                <div className="as-row-icon"><TypeIcon type={lesson.type} /></div>
                <div className="as-row-body">
                  <div className="as-row-topline">
                    <span className="as-row-tag">{lesson.tag}</span>
                    <span className="as-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="as-row-title">{lesson.title}</h3>
                  <p className="as-row-desc">{lesson.subtitle}</p>
                </div>
                <div className="as-row-actions">
                  <button type="button" className="as-lesson-guidebtn" onClick={() => openGuide(track.id, num)}>
                    Guide
                  </button>
                  <button type="button" className="as-lesson-startbtn" onClick={() => openLesson(track.id, num)}>
                    Start →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.as-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #EAFBF6 0%, #D6F2E9 55%, #C3E9DC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.as-shell * { box-sizing: border-box; }

.as-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.as-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8AAFA5;
}

.as-stage {
  flex: 1;
  width: 100%;
  max-width: 880px;
  padding: 44px 28px 64px;
}

.as-missing {
  font-family: 'Quicksand', sans-serif;
  color: #6B8C82;
  text-align: center;
  margin-top: 60px;
}

.as-hero { margin-bottom: 38px; }
.as-hero-tags { display: flex; gap: 8px; margin-bottom: 14px; }
.as-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #128571;
  background: rgba(18,133,113,0.14);
  border: 1px solid rgba(18,133,113,0.4);
  border-radius: 999px;
  padding: 4px 12px;
}
.as-tag--level { color: #5C8177; background: #E9F7F2; border-color: #D3EFE6; }
.as-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #17352E;
  margin: 0 0 12px;
}
.as-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #5C8177;
  margin: 0;
  max-width: 620px;
  line-height: 1.55;
}

.as-path { position: relative; display: flex; flex-direction: column; gap: 16px; }
.as-path::before {
  content: "";
  position: absolute;
  left: 23px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: #D3EFE6;
  z-index: 0;
}

.as-row {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 16px;
  padding: 16px 22px 16px 12px;
  box-shadow: 0 10px 24px rgba(20,80,65,0.08);
}
.as-row--locked { opacity: 0.55; box-shadow: none; }
.as-row--live { transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease; }
.as-row--live:hover { border-color: #3FCDAF; box-shadow: 0 16px 32px rgba(20,80,65,0.16); transform: translateY(-1px); }

.as-row-marker { flex-shrink: 0; width: 48px; display: flex; align-items: center; justify-content: center; }
.as-row-num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 2px solid #3FCDAF;
  color: #128571;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.as-row-num--locked { border-color: #D3EFE6; color: #8AAFA5; }

.as-row-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #E9F7F2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #128571;
}
.as-row-icon--locked { color: #B7D9CF; font-family: 'Quicksand', sans-serif; letter-spacing: 3px; }

.as-row-body { flex: 1; min-width: 0; }
.as-row-topline { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.as-row-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #128571;
  background: rgba(18,133,113,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.as-row-meta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #8AAFA5;
}
.as-row-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #17352E;
  line-height: 1.25;
  margin: 0 0 3px;
}
.as-row-title--locked { color: #8AAFA5; margin: 0; }
.as-row-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8177;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.as-row-actions { flex-shrink: 0; display: flex; align-items: center; gap: 8px; }
.as-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #128571;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 999px;
  padding: 7px 13px;
  white-space: nowrap;
  cursor: pointer;
}
.as-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 7px 15px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 640px) {
  .as-row { flex-wrap: wrap; padding: 16px; }
  .as-row-actions { width: 100%; padding-left: 74px; }
  .as-row-desc { white-space: normal; }
}
`;

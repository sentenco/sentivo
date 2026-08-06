import { useParams } from "react-router-dom";
import { getTrack } from "./shiftTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function ClockIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

// SHIFT lessons open as a standalone popup player, matching the FORGE/ASCEND
// chrome-less window.open pattern -- an independent window, not embedded in
// the Library's tab/page flow.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(700, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/shift/${trackId}/${num}`,
    "sentivoShiftPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

// Teacher Guide opens as its own separate popup, triggered by its own
// explicit click -- not paired automatically with the student window.
function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/shift/${trackId}/${num}/guide`,
    "sentivoShiftGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ShiftTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="sht-shell">
        <style>{CSS}</style>
        <div className="sht-stage">
          <p className="sht-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sht-shell">
      <style>{CSS}</style>
      <header className="sht-topbar">
        <span className="sht-topbar-title">SHIFT</span>
      </header>

      <div className="sht-stage">
        <div className="sht-hero">
          <div className="sht-hero-tags">
            <span className="sht-tag">{track.gapFocus}</span>
            <span className="sht-tag sht-tag--level">{track.level}</span>
          </div>
          <h1 className="sht-hero-title">{track.title}</h1>
          <p className="sht-hero-blurb">{track.blurb}</p>
        </div>

        <div className="sht-path">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="sht-row sht-row--locked">
                  <div className="sht-row-marker"><span className="sht-row-num sht-row-num--locked">{num}</span></div>
                  <div className="sht-row-icon sht-row-icon--locked"><LockIcon /></div>
                  <div className="sht-row-body">
                    <p className="sht-row-title sht-row-title--locked">Coming soon</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={num} className="sht-row sht-row--live">
                <div className="sht-row-marker"><span className="sht-row-num">{num}</span></div>
                <div className="sht-row-icon"><ClockIcon /></div>
                <div className="sht-row-body">
                  <div className="sht-row-topline">
                    <span className="sht-row-tag">{lesson.tag}</span>
                    <span className="sht-row-meta">11 slides</span>
                  </div>
                  <h3 className="sht-row-title">{lesson.title}</h3>
                  <p className="sht-row-desc">{lesson.theme}</p>
                </div>
                <div className="sht-row-actions">
                  <button type="button" className="sht-lesson-guidebtn" onClick={() => openGuide(track.id, num)}>
                    📋 Guide
                  </button>
                  <button type="button" className="sht-lesson-startbtn" onClick={() => openLesson(track.id, num)}>
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

.sht-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF1EF 0%, #FFDBD5 50%, #FFC3BA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.sht-shell * { box-sizing: border-box; }

.sht-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.sht-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98F84;
}

.sht-stage {
  flex: 1;
  width: 100%;
  max-width: 880px;
  padding: 44px 28px 64px;
}

.sht-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8C5C52;
  text-align: center;
  margin-top: 60px;
}

.sht-hero { margin-bottom: 38px; }
.sht-hero-tags { display: flex; gap: 8px; margin-bottom: 14px; }
.sht-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border: 1px solid rgba(225,72,59,0.35);
  border-radius: 999px;
  padding: 4px 12px;
}
.sht-tag--level { color: #8C5C52; background: #FFEDE9; border-color: #FFD2C8; }
.sht-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #4A211B;
  margin: 0 0 12px;
}
.sht-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #8C5C52;
  margin: 0;
  max-width: 620px;
  line-height: 1.55;
}

.sht-path { position: relative; display: flex; flex-direction: column; gap: 16px; }
.sht-path::before {
  content: "";
  position: absolute;
  left: 23px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: #FFD2C8;
  z-index: 0;
}

.sht-row {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 16px;
  padding: 16px 22px 16px 12px;
  box-shadow: 0 10px 24px rgba(160,50,35,0.07);
}
.sht-row--locked { opacity: 0.6; box-shadow: none; }
.sht-row--live { transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease; }
.sht-row--live:hover { border-color: #E1483B; box-shadow: 0 16px 32px rgba(160,50,35,0.12); transform: translateY(-1px); }

.sht-row-marker { flex-shrink: 0; width: 48px; display: flex; align-items: center; justify-content: center; }
.sht-row-num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 2px solid #E1483B;
  color: #E1483B;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sht-row-num--locked { border-color: #FFD2C8; color: #C98F84; }

.sht-row-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #FFEDE9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E1483B;
}
.sht-row-icon--locked { color: #E8BBB3; }

.sht-row-body { flex: 1; min-width: 0; }
.sht-row-topline { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.sht-row-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #E1483B;
  background: rgba(225,72,59,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.sht-row-meta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #C98F84;
}
.sht-row-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #4A211B;
  line-height: 1.25;
  margin: 0 0 3px;
}
.sht-row-title--locked { color: #C98F84; margin: 0; }
.sht-row-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #8C5C52;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sht-row-actions { flex-shrink: 0; display: flex; align-items: center; gap: 8px; }
.sht-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #E1483B;
  background: #FFEDE9;
  border: 1px solid #FFD2C8;
  border-radius: 999px;
  padding: 7px 13px;
  white-space: nowrap;
  cursor: pointer;
}
.sht-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  background: #E1483B;
  border: none;
  border-radius: 999px;
  padding: 7px 15px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 640px) {
  .sht-row { flex-wrap: wrap; padding: 16px; }
  .sht-row-actions { width: 100%; padding-left: 74px; }
  .sht-row-desc { white-space: normal; }
}
`;

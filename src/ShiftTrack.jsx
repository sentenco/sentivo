import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="sht-shell">
        <style>{CSS}</style>
        <header className="sht-topbar">
          <button type="button" className="sht-back-link" onClick={() => navigate("/library")}>
            ← Library
          </button>
        </header>
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
        <button type="button" className="sht-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="sht-topbar-title">SHIFT</span>
        <span className="sht-topbar-slot" />
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

        <div className="sht-lessons-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="sht-lesson-tile sht-lesson-tile--locked">
                  <div className="sht-lesson-top">
                    <span className="sht-lesson-badge sht-lesson-badge--locked">L{num}</span>
                  </div>
                  <div className="sht-lesson-icon sht-lesson-icon--locked"><LockIcon /></div>
                  <p className="sht-lesson-title2 sht-lesson-title2--locked">Coming soon</p>
                </div>
              );
            }
            return (
              <div key={num} className="sht-lesson-tile sht-lesson-tile--live">
                <div className="sht-lesson-top">
                  <span className="sht-lesson-badge">{lesson.code}</span>
                  <span className="sht-lesson-tagtext">{lesson.tag}</span>
                </div>
                <div className="sht-lesson-icon"><ClockIcon /></div>
                <h3 className="sht-lesson-title2">{lesson.title}</h3>
                <p className="sht-lesson-desc">{lesson.theme}</p>
                <span className="sht-lesson-meta">11 slides</span>
                <div className="sht-lesson-foot">
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
  justify-content: space-between;
  padding: 22px 24px 0;
}
.sht-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  background: #FFB3A6;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.sht-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98F84;
}
.sht-topbar-slot { width: 90px; }

.sht-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.sht-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8C5C52;
  text-align: center;
  margin-top: 60px;
}

.sht-hero { margin-bottom: 36px; }
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
  font-size: 40px;
  color: #4A211B;
  margin: 0 0 10px;
}
.sht-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #8C5C52;
  margin: 0;
  max-width: 620px;
  line-height: 1.5;
}

.sht-lessons-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.sht-lesson-tile {
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 14px;
  padding: 13px 13px 12px;
  min-height: 210px;
  text-align: left;
  font-family: inherit;
  box-shadow: 0 10px 24px rgba(160,50,35,0.07);
}

.sht-lesson-tile--locked { opacity: 0.55; box-shadow: none; }
.sht-lesson-tile--live { transition: border-color 0.15s ease, box-shadow 0.15s ease; }
.sht-lesson-tile--live:hover { border-color: #E1483B; box-shadow: 0 14px 30px rgba(160,50,35,0.12); }

.sht-lesson-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.sht-lesson-badge {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #E1483B;
  background: rgba(225,72,59,0.14);
  border-radius: 999px;
  padding: 3px 9px;
}
.sht-lesson-badge--locked { color: #C98F84; background: #FFEDE9; }
.sht-lesson-tagtext {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #C98F84;
}

.sht-lesson-icon {
  width: 100%;
  height: 46px;
  background: #FFEDE9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E1483B;
}
.sht-lesson-icon--locked { color: #E8BBB3; }

.sht-lesson-title2 {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  line-height: 1.25;
  margin: 0;
}
.sht-lesson-title2--locked { color: #C98F84; margin-top: auto; }
.sht-lesson-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #8C5C52;
  line-height: 1.35;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sht-lesson-meta {
  margin-top: auto;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #C98F84;
}
.sht-lesson-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #FFE4DD;
  gap: 6px;
}
.sht-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: #E1483B;
  background: #FFEDE9;
  border: 1px solid #FFD2C8;
  border-radius: 999px;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
}
.sht-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #FFFFFF;
  background: #E1483B;
  border: none;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .sht-lessons-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .sht-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
`;

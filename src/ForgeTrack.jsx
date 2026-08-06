import { useParams } from "react-router-dom";
import { getTrack } from "./forgeTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function TechniqueIcon({ technique }) {
  switch (technique) {
    case "Fill the Gap":
      return (
        <svg {...ICON_PROPS}>
          <path d="M4 8h4" /><path d="M12 8h8" strokeDasharray="2 2.5" /><path d="M4 16h16" />
        </svg>
      );
    case "Echoing":
      return (
        <svg {...ICON_PROPS}>
          <path d="M4 5h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-4 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <path d="M8 10a4 4 0 0 1 8 0" opacity="0.5" />
        </svg>
      );
    case "Question Chain":
      return (
        <svg {...ICON_PROPS}>
          <circle cx="7" cy="8" r="3" /><circle cx="17" cy="16" r="3" />
          <path d="M9.5 9.5 14.5 14.5" strokeDasharray="1 2.5" />
        </svg>
      );
    default:
      return (
        <svg {...ICON_PROPS}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 15l-5-4-4 3-3-2-6 5" />
        </svg>
      );
  }
}

function LockIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function slideCount(lesson) {
  if (lesson.format === "picture") return 7 + lesson.words.length + (lesson.homeworkCheck ? 1 : 0);
  return 10;
}

// FORGE lessons open as a standalone popup player, matching the curriculum's
// chrome-less window.open pattern in LessonsGrid.jsx -- an independent
// window, not embedded in the Library's tab/page flow.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1040, screenW - 40);
  const h = Math.min(780, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/forge/${trackId}/${num}`,
    "sentivoForgePlayer",
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
    `/library/forge/${trackId}/${num}/guide`,
    "sentivoForgeGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function ForgeTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="ft-shell">
        <style>{CSS}</style>
        <div className="ft-stage">
          <p className="ft-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ft-shell">
      <style>{CSS}</style>
      <header className="ft-topbar">
        <span className="ft-topbar-title">FORGE</span>
      </header>

      <div className="ft-stage">
        <div className="ft-hero">
          <div className="ft-hero-tags">
            <span className="ft-tag">{track.occupation}</span>
            <span className="ft-tag">{track.interest}</span>
            <span className="ft-tag ft-tag--level">{track.level}</span>
          </div>
          <h1 className="ft-hero-title">{track.title}</h1>
          <p className="ft-hero-blurb">{track.blurb}</p>
        </div>

        <div className="ft-path">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="ft-row ft-row--locked">
                  <div className="ft-row-marker"><span className="ft-row-num ft-row-num--locked">{num}</span></div>
                  <div className="ft-row-icon ft-row-icon--locked"><LockIcon /></div>
                  <div className="ft-row-body">
                    <p className="ft-row-title ft-row-title--locked">Coming soon</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={num} className="ft-row ft-row--live">
                <div className="ft-row-marker"><span className="ft-row-num">{num}</span></div>
                <div className="ft-row-icon"><TechniqueIcon technique={lesson.technique} /></div>
                <div className="ft-row-body">
                  <div className="ft-row-topline">
                    <span className="ft-row-tag">{lesson.tag}</span>
                    <span className="ft-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="ft-row-title">{lesson.title}</h3>
                  <p className="ft-row-desc">{lesson.subtitle}</p>
                </div>
                <div className="ft-row-actions">
                  <button type="button" className="ft-lesson-guidebtn" onClick={() => openGuide(track.id, num)}>
                    📋 Guide
                  </button>
                  <button type="button" className="ft-lesson-startbtn" onClick={() => openLesson(track.id, num)}>
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

.ft-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF6E6 0%, #FBE7C6 50%, #F6D9AC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ft-shell * { box-sizing: border-box; }

.ft-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.ft-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0A48C;
}

.ft-stage {
  flex: 1;
  width: 100%;
  max-width: 880px;
  padding: 44px 28px 64px;
}

.ft-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8B7F68;
  text-align: center;
  margin-top: 60px;
}

.ft-hero { margin-bottom: 38px; }
.ft-hero-tags { display: flex; gap: 8px; margin-bottom: 14px; }
.ft-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #C97A2E;
  background: rgba(242,166,90,0.12);
  border: 1px solid rgba(242,166,90,0.4);
  border-radius: 999px;
  padding: 4px 12px;
}
.ft-tag--level { color: #8B7F68; background: #FBF1DF; border-color: #EDDFC3; }
.ft-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 42px;
  color: #2E2617;
  margin: 0 0 12px;
}
.ft-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #6B5F49;
  margin: 0;
  max-width: 620px;
  line-height: 1.55;
}

.ft-path { position: relative; display: flex; flex-direction: column; gap: 16px; }
.ft-path::before {
  content: "";
  position: absolute;
  left: 23px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: #EAD9B8;
  z-index: 0;
}

.ft-row {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 16px;
  padding: 16px 22px 16px 12px;
  box-shadow: 0 10px 24px rgba(43,35,20,0.06);
}
.ft-row--locked { opacity: 0.6; box-shadow: none; }
.ft-row--live { transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease; }
.ft-row--live:hover { border-color: #F2A65A; box-shadow: 0 16px 32px rgba(43,35,20,0.1); transform: translateY(-1px); }

.ft-row-marker { flex-shrink: 0; width: 48px; display: flex; align-items: center; justify-content: center; }
.ft-row-num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 2px solid #F2A65A;
  color: #C97A2E;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ft-row-num--locked { border-color: #EAD9B8; color: #B0A48C; }

.ft-row-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #FBF1DF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C97A2E;
}
.ft-row-icon--locked { color: #C2B393; }

.ft-row-body { flex: 1; min-width: 0; }
.ft-row-topline { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.ft-row-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #C97A2E;
  background: rgba(242,166,90,0.16);
  border-radius: 999px;
  padding: 2px 9px;
}
.ft-row-meta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #8B7F68;
}
.ft-row-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #2E2617;
  line-height: 1.25;
  margin: 0 0 3px;
}
.ft-row-title--locked { color: #B0A48C; margin: 0; }
.ft-row-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #6B5F49;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ft-row-actions { flex-shrink: 0; display: flex; align-items: center; gap: 8px; }
.ft-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #C97A2E;
  background: #FBF1DF;
  border: 1px solid #EAD9B8;
  border-radius: 999px;
  padding: 7px 13px;
  white-space: nowrap;
  cursor: pointer;
}
.ft-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 7px 15px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 640px) {
  .ft-row { flex-wrap: wrap; padding: 16px; }
  .ft-row-actions { width: 100%; padding-left: 74px; }
  .ft-row-desc { white-space: normal; }
}
`;

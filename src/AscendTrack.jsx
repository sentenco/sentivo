import { useParams, useNavigate } from "react-router-dom";
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
    case "Arena":
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
  return lesson.retest ? 9 : 9;
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
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="as-shell">
        <style>{CSS}</style>
        <header className="as-topbar">
          <button type="button" className="as-back-link" onClick={() => navigate("/library")}>
            ← Library
          </button>
        </header>
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
        <button type="button" className="as-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="as-topbar-title">ASCEND</span>
        <span className="as-topbar-slot" />
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

        <div className="as-lessons-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="as-lesson-tile as-lesson-tile--locked">
                  <div className="as-lesson-top">
                    <span className="as-lesson-badge as-lesson-badge--locked">L{num}</span>
                  </div>
                  <div className="as-lesson-icon as-lesson-icon--locked">···</div>
                  <p className="as-lesson-title2 as-lesson-title2--locked">Coming soon</p>
                </div>
              );
            }
            return (
              <div key={num} className="as-lesson-tile as-lesson-tile--live">
                <div className="as-lesson-top">
                  <span className="as-lesson-badge">L{num}</span>
                  <span className="as-lesson-tagtext">{lesson.tag}</span>
                </div>
                <div className="as-lesson-icon"><TypeIcon type={lesson.type} /></div>
                <h3 className="as-lesson-title2">{lesson.title}</h3>
                <p className="as-lesson-desc">{lesson.subtitle}</p>
                <span className="as-lesson-meta">{lesson.support} support · {slideCount(lesson)} slides</span>
                <div className="as-lesson-foot">
                  <button type="button" className="as-lesson-guidebtn" onClick={() => openGuide(track.id, num)}>
                    📋 Guide
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
  justify-content: space-between;
  padding: 22px 24px 0;
}
.as-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.as-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8AAFA5;
}
.as-topbar-slot { width: 90px; }

.as-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.as-missing {
  font-family: 'Quicksand', sans-serif;
  color: #6B8C82;
  text-align: center;
  margin-top: 60px;
}

.as-hero { margin-bottom: 36px; }
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
  font-size: 40px;
  color: #17352E;
  margin: 0 0 10px;
}
.as-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #5C8177;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.as-lessons-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.as-lesson-tile {
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 14px;
  padding: 13px 13px 12px;
  min-height: 210px;
  text-align: left;
  font-family: inherit;
  box-shadow: 0 10px 24px rgba(20,80,65,0.08);
}

.as-lesson-tile--locked {
  opacity: 0.5;
  box-shadow: none;
}
.as-lesson-tile--live {
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.as-lesson-tile--live:hover {
  border-color: #3FCDAF;
  box-shadow: 0 14px 30px rgba(20,80,65,0.16);
}

.as-lesson-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.as-lesson-badge {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #128571;
  background: rgba(18,133,113,0.14);
  border-radius: 999px;
  padding: 3px 9px;
}
.as-lesson-badge--locked { color: #8AAFA5; background: #E9F7F2; }
.as-lesson-tagtext {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #8AAFA5;
}

.as-lesson-icon {
  width: 100%;
  height: 46px;
  background: #E9F7F2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #128571;
}
.as-lesson-icon--locked { color: #B7D9CF; font-family: 'Quicksand', sans-serif; letter-spacing: 3px; }

.as-lesson-title2 {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  line-height: 1.25;
  margin: 0;
}
.as-lesson-title2--locked { color: #8AAFA5; margin-top: auto; }
.as-lesson-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #5C8177;
  line-height: 1.35;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.as-lesson-meta {
  margin-top: auto;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 9.5px;
  color: #8AAFA5;
}
.as-lesson-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #E3F3ED;
  gap: 6px;
}
.as-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: #128571;
  background: #E9F7F2;
  border: 1px solid #D3EFE6;
  border-radius: 999px;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
}
.as-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .as-lessons-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .as-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
`;

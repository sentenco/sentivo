import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="ft-shell">
        <style>{CSS}</style>
        <header className="ft-topbar">
          <button type="button" className="ft-back-link" onClick={() => navigate("/library")}>
            ← Library
          </button>
        </header>
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
        <button type="button" className="ft-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="ft-topbar-title">FORGE</span>
        <span className="ft-topbar-slot" />
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

        <div className="ft-lessons-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="ft-lesson-tile ft-lesson-tile--locked">
                  <div className="ft-lesson-top">
                    <span className="ft-lesson-badge ft-lesson-badge--locked">L{num}</span>
                  </div>
                  <div className="ft-lesson-icon ft-lesson-icon--locked"><LockIcon /></div>
                  <p className="ft-lesson-title2 ft-lesson-title2--locked">Coming soon</p>
                </div>
              );
            }
            return (
              <div key={num} className="ft-lesson-tile ft-lesson-tile--live">
                <div className="ft-lesson-top">
                  <span className="ft-lesson-badge">L{num}</span>
                  <span className="ft-lesson-tagtext">{lesson.tag}</span>
                </div>
                <div className="ft-lesson-icon"><TechniqueIcon technique={lesson.technique} /></div>
                <h3 className="ft-lesson-title2">{lesson.title}</h3>
                <p className="ft-lesson-desc">{lesson.subtitle}</p>
                <span className="ft-lesson-meta">{slideCount(lesson)} slides</span>
                <div className="ft-lesson-foot">
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
  justify-content: space-between;
  padding: 22px 24px 0;
}
.ft-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ft-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0A48C;
}
.ft-topbar-slot { width: 90px; }

.ft-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.ft-missing {
  font-family: 'Quicksand', sans-serif;
  color: #8B7F68;
  text-align: center;
  margin-top: 60px;
}

.ft-hero { margin-bottom: 36px; }
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
  font-size: 40px;
  color: #2E2617;
  margin: 0 0 10px;
}
.ft-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #6B5F49;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.ft-lessons-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.ft-lesson-tile {
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 14px;
  padding: 13px 13px 12px;
  min-height: 210px;
  text-align: left;
  font-family: inherit;
  box-shadow: 0 10px 24px rgba(43,35,20,0.06);
}

.ft-lesson-tile--locked {
  opacity: 0.55;
  box-shadow: none;
}
.ft-lesson-tile--live {
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
.ft-lesson-tile--live:hover {
  border-color: #F2A65A;
  box-shadow: 0 14px 30px rgba(43,35,20,0.1);
}

.ft-lesson-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.ft-lesson-badge {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #C97A2E;
  background: rgba(242,166,90,0.16);
  border-radius: 999px;
  padding: 3px 9px;
}
.ft-lesson-badge--locked { color: #B0A48C; background: #FBF1DF; }
.ft-lesson-tagtext {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #B0A48C;
}

.ft-lesson-icon {
  width: 100%;
  height: 46px;
  background: #FBF1DF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C97A2E;
}
.ft-lesson-icon--locked { color: #C2B393; }

.ft-lesson-title2 {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E2617;
  line-height: 1.25;
  margin: 0;
}
.ft-lesson-title2--locked { color: #B0A48C; margin-top: auto; }
.ft-lesson-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #6B5F49;
  line-height: 1.35;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.ft-lesson-meta {
  margin-top: auto;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #8B7F68;
}
.ft-lesson-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #F3E9D3;
  gap: 6px;
}
.ft-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: #C97A2E;
  background: #FBF1DF;
  border: 1px solid #EAD9B8;
  border-radius: 999px;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
}
.ft-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .ft-lessons-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .ft-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
`;

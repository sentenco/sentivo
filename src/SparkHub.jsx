import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KIDS_LESSONS from "./sparkTracks";
import TEENS_LESSONS from "./sparkTeensTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function QuestIcon({ title }) {
  if (title === "Picture Quest") {
    return (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-4-4 3-3-2-6 5" />
      </svg>
    );
  }
  if (title === "Story Quest") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" />
        <path d="M8 8h8M8 12h5" />
      </svg>
    );
  }
  if (title === "Action Quest") {
    return (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v6l-3 7M12 13l3 7M8 10l-3 3M16 10l3 3" />
      </svg>
    );
  }
  if (title === "Football") {
    return (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7l3.5 2.5-1.3 4H9.8l-1.3-4z" />
      </svg>
    );
  }
  if (title === "School") {
    return (
      <svg {...ICON_PROPS}>
        <path d="M2 9l10-5 10 5-10 5z" />
        <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    );
  }
  return (
    <svg {...ICON_PROPS}>
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" /><path d="M14.5 15.5c2.5 0 4.5 1.8 4.5 4.5" />
    </svg>
  );
}

// SPARK trial lessons open as a standalone popup player, matching the
// FORGE/ASCEND/SHIFT chrome-less window.open pattern.
function openLesson(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1080, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    path,
    "sentivoSparkPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openGuide(path) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    path,
    "sentivoSparkGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

const AUDIENCES = {
  kids: {
    label: "Kids",
    lessons: KIDS_LESSONS,
    blurb: "Three 20-minute trial classes for kids — playful, picture-first, and built to get a new student talking in the first two minutes.",
    lessonPath: (id) => `/library/spark/${id}`,
    guidePath: (id) => `/library/spark/${id}/guide`,
  },
  teens: {
    label: "Teens",
    lessons: TEENS_LESSONS,
    blurb: "Three 20-minute trial classes for teens — conversation-game mini-lessons about football, school, and friends that turn a short answer into real speaking practice.",
    lessonPath: (id) => `/library/spark/teens/${id}`,
    guidePath: (id) => `/library/spark/teens/${id}/guide`,
  },
};

export default function SparkHub() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState("kids");
  const config = AUDIENCES[audience];

  return (
    <div className="spkh-shell">
      <style>{CSS}</style>
      <header className="spkh-topbar">
        <button type="button" className="spkh-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="spkh-topbar-title">SPARK · Trial Class</span>
        <span className="spkh-topbar-slot" />
      </header>

      <div className="spkh-stage">
        <div className="spkh-hero">
          <h1 className="spkh-hero-title">SPARK</h1>
          <p className="spkh-hero-blurb">{config.blurb}</p>

          <div className="spkh-audience-toggle">
            {Object.entries(AUDIENCES).map(([key, a]) => (
              <button
                key={key}
                type="button"
                className={`spkh-audience-btn ${audience === key ? "is-active" : ""}`}
                onClick={() => setAudience(key)}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div className="spkh-lessons-grid">
          {config.lessons.map((lesson) => (
            <div key={lesson.id} className="spkh-lesson-card">
              <div className="spkh-lesson-top">
                <span className="spkh-lesson-badge">{lesson.code}</span>
                <span className="spkh-lesson-length">{lesson.length}</span>
              </div>
              <div className="spkh-lesson-icon"><QuestIcon title={lesson.title} /></div>
              <h3 className="spkh-lesson-title">{lesson.title}</h3>
              <p className="spkh-lesson-desc">{lesson.coreAim}</p>
              <div className="spkh-lesson-foot">
                <button type="button" className="spkh-lesson-guidebtn" onClick={() => openGuide(config.guidePath(lesson.id))}>
                  📋 Guide
                </button>
                <button type="button" className="spkh-lesson-startbtn" onClick={() => openLesson(config.lessonPath(lesson.id))}>
                  Start →
                </button>
              </div>
            </div>
          ))}

          <div className="spkh-lesson-card spkh-lesson-card--ghost">
            <div className="spkh-lesson-icon spkh-lesson-icon--ghost">+</div>
            <h3 className="spkh-lesson-title spkh-lesson-title--ghost">More quests coming</h3>
            <p className="spkh-lesson-desc">New trial lesson themes get added here as they're built.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spkh-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFFBEA 0%, #FFF0BE 50%, #FFE28A 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.spkh-shell * { box-sizing: border-box; }

.spkh-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.spkh-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A3B12;
  background: #FFDD7A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.spkh-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98A00;
}
.spkh-topbar-slot { width: 90px; }

.spkh-stage { flex: 1; width: 100%; max-width: 960px; padding: 40px 24px 60px; }

.spkh-hero { margin-bottom: 30px; }
.spkh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: #4A3B12;
  margin: 0 0 10px;
}
.spkh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #8A7233;
  margin: 0 0 18px;
  max-width: 640px;
  line-height: 1.5;
}

.spkh-audience-toggle { display: inline-flex; background: #FFF3D0; border-radius: 999px; padding: 4px; gap: 4px; }
.spkh-audience-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #8A7233;
  background: transparent;
  border: none;
  border-radius: 999px;
  padding: 8px 22px;
  cursor: pointer;
}
.spkh-audience-btn.is-active { background: #FFB800; color: #4A3B12; }

.spkh-lessons-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

.spkh-lesson-card {
  display: flex;
  flex-direction: column;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #FFE28A;
  border-radius: 16px;
  padding: 16px 16px 14px;
  min-height: 230px;
  box-shadow: 0 10px 24px rgba(180,140,0,0.07);
}

.spkh-lesson-top { display: flex; align-items: center; justify-content: space-between; }
.spkh-lesson-badge {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #C98A00;
  background: #FFF3D0;
  border-radius: 999px;
  padding: 3px 9px;
}
.spkh-lesson-length {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  color: #C98A00;
}

.spkh-lesson-icon {
  width: 100%;
  height: 50px;
  background: #FFF3D0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C98A00;
}
.spkh-lesson-icon--ghost { color: #FFDD7A; font-family: 'Fredoka', sans-serif; font-size: 26px; background: transparent; border: 2px dashed #FFE28A; }

.spkh-lesson-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #4A3B12;
  margin: 0;
}
.spkh-lesson-title--ghost { color: #C98A00; }
.spkh-lesson-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #8A7233;
  line-height: 1.4;
  margin: 0;
}

.spkh-lesson-foot {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #FFF3D0;
  gap: 6px;
}
.spkh-lesson-guidebtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  color: #C98A00;
  background: #FFF3D0;
  border: 1px solid #FFDD7A;
  border-radius: 999px;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
}
.spkh-lesson-startbtn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #4A3B12;
  background: #FFB800;
  border: none;
  border-radius: 999px;
  padding: 5px 11px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 900px) {
  .spkh-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .spkh-lessons-grid { grid-template-columns: 1fr; }
}
`;

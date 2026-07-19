import { useNavigate } from "react-router-dom";
import { getGroups } from "./vtTracks";
import VTTimeline from "./VTTimeline";

// Verb Tenses lessons open as a standalone popup player, matching the
// FORGE/ASCEND chrome-less window.open pattern -- an independent window,
// not embedded in the Library's tab/page flow.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(880, screenW - 40);
  const h = Math.min(760, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/verb-tenses/${code}`,
    "sentivoVerbTenses",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function VerbTensesTrack() {
  const navigate = useNavigate();
  const groups = getGroups();

  return (
    <div className="vt-shell">
      <style>{CSS}</style>
      <header className="vt-topbar">
        <button type="button" className="vt-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="vt-topbar-title">Verb Tenses</span>
        <span className="vt-topbar-slot" />
      </header>

      <div className="vt-stage">
        <div className="vt-hero">
          <h1 className="vt-hero-title">Verb Tenses</h1>
          <p className="vt-hero-blurb">
            The 12 basic English tenses, one pair of lessons each: a Discussion lesson to build the meaning, form, and
            timeline, then a Test lesson to check it sticks.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="vt-group">
            <h2 className="vt-group-title">{group.title}</h2>
            <div className="vt-tenses-grid">
              {group.tenses.map((tense) => (
                <div key={tense.number} className="vt-tense-card">
                  <div className="vt-tense-top">
                    <span className="vt-tense-num">Tense {tense.number}</span>
                    <div className="vt-tense-mini-timeline"><VTTimeline variant={tense.timelineVariant} /></div>
                  </div>
                  <h3 className="vt-tense-name">{tense.tenseName}</h3>
                  <div className="vt-tense-foot">
                    <button type="button" className="vt-lesson-btn vt-lesson-btn--a" onClick={() => openLesson(tense.lessonA.code)}>
                      {tense.lessonA.code} · Discussion
                    </button>
                    <button type="button" className="vt-lesson-btn vt-lesson-btn--b" onClick={() => openLesson(tense.lessonB.code)}>
                      {tense.lessonB.code} · Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.vt-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #F1EFFC 0%, #E4E0FA 50%, #D8D2F6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.vt-shell * { box-sizing: border-box; }

.vt-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.vt-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2B2560;
  background: #B7B0F5;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.vt-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #8A82C9;
}
.vt-topbar-slot { width: 90px; }

.vt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 40px 24px 60px;
}

.vt-hero { margin-bottom: 32px; }
.vt-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #2B2560;
  margin: 0 0 10px;
}
.vt-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #5B5590;
  margin: 0;
  max-width: 620px;
  line-height: 1.5;
}

.vt-group { margin-bottom: 34px; }
.vt-group-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #2B2560;
  margin: 0 0 14px;
}

.vt-tenses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.vt-tense-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid #DAD4F5;
  border-radius: 14px;
  padding: 12px 12px 12px;
  box-shadow: 0 10px 24px rgba(43,37,96,0.07);
}

.vt-tense-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.vt-tense-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #5B4FE0;
  background: rgba(91,79,224,0.12);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}
.vt-tense-mini-timeline { width: 100%; max-width: 90px; }
.vt-tense-mini-timeline .vt-timeline-svg { width: 100%; height: auto; display: block; }

.vt-tense-name {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #2B2560;
  margin: 0;
  line-height: 1.25;
}

.vt-tense-foot { display: flex; flex-direction: column; gap: 6px; margin-top: auto; padding-top: 6px; border-top: 1px solid #EEECFB; }
.vt-lesson-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  border: none;
  border-radius: 999px;
  padding: 7px 10px;
  cursor: pointer;
  text-align: center;
}
.vt-lesson-btn--a { color: #2B2560; background: #DAD4F5; }
.vt-lesson-btn--b { color: #2B2560; background: #B7B0F5; }

@media (max-width: 900px) {
  .vt-tenses-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .vt-tenses-grid { grid-template-columns: 1fr; }
}
`;

import { useParams } from "react-router-dom";
import { getTrack } from "./relayTracks";

const ICON_PROPS = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function TechniqueIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M2 13 H6 L8 7 L11 19 L13 8 L14.5 13 H22" strokeLinecap="round" strokeLinejoin="round" />
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

function slideCount(lesson) {
  return 5 + lesson.bounce.rounds.length + (lesson.pushIt ? 1 : 0);
}

// RELAY lessons open as a standalone popup player, matching FORGE's
// chrome-less window.open pattern -- an independent window, not embedded
// in the Library's tab/page flow.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(860, screenW - 40);
  const h = Math.min(600, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/relay/${trackId}/${num}`,
    "sentivoRelayPlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(840, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/relay/${trackId}/${num}/guide`,
    "sentivoRelayGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function RelayTrack() {
  const { trackId } = useParams();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="rlt-shell">
        <style>{CSS}</style>
        <div className="rlt-stage">
          <p className="rlt-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rlt-shell">
      <style>{CSS}</style>
      <header className="rlt-topbar">
        <span className="rlt-topbar-title">RELAY</span>
      </header>

      <div className="rlt-stage">
        <div className="rlt-hero">
          <div className="rlt-hero-tags">
            <span className="rlt-tag">{track.focus}</span>
            <span className="rlt-tag rlt-tag--level">{track.level}</span>
          </div>
          <h1 className="rlt-hero-title">{track.title}</h1>
          <p className="rlt-hero-blurb">{track.blurb}</p>
        </div>

        <div className="rlt-path">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="rlt-row rlt-row--locked">
                  <div className="rlt-row-marker"><span className="rlt-row-num rlt-row-num--locked">{num}</span></div>
                  <div className="rlt-row-icon rlt-row-icon--locked"><LockIcon /></div>
                  <div className="rlt-row-body">
                    <p className="rlt-row-title rlt-row-title--locked">Coming soon</p>
                  </div>
                </div>
              );
            }
            return (
              <div key={num} className="rlt-row rlt-row--live">
                <div className="rlt-row-marker"><span className="rlt-row-num">{num}</span></div>
                <div className="rlt-row-icon"><TechniqueIcon /></div>
                <div className="rlt-row-body">
                  <div className="rlt-row-topline">
                    <span className="rlt-row-tag">{lesson.tag}</span>
                    <span className="rlt-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="rlt-row-title">{lesson.title}</h3>
                  <p className="rlt-row-desc">{lesson.subtitle}</p>
                </div>
                <div className="rlt-row-actions">
                  <button type="button" className="rlt-lesson-guidebtn" onClick={() => openGuide(track.id, num)}>
                    📋 Guide
                  </button>
                  <button type="button" className="rlt-lesson-startbtn" onClick={() => openLesson(track.id, num)}>
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rlt-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.rlt-shell * { box-sizing: border-box; }

.rlt-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.rlt-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4B8B92;
}

.rlt-stage {
  flex: 1;
  width: 100%;
  max-width: 880px;
  padding: 44px 28px 64px;
}

.rlt-missing {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #4B8B92;
  text-align: center;
  margin-top: 60px;
}

.rlt-hero { margin-bottom: 38px; }
.rlt-hero-tags { display: flex; gap: 8px; margin-bottom: 14px; }
.rlt-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #3E7CB1;
  background: rgba(62,124,177,0.10);
  border: 1px solid rgba(62,124,177,0.3);
  border-radius: 999px;
  padding: 4px 12px;
}
.rlt-tag--level { color: #4B8B92; background: #EAF8F6; border-color: #D3EDE9; }
.rlt-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 42px;
  color: #10646B;
  margin: 0 0 12px;
}
.rlt-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B8B92;
  margin: 0;
  max-width: 620px;
  line-height: 1.55;
}

.rlt-path { position: relative; display: flex; flex-direction: column; gap: 16px; }
.rlt-path::before {
  content: "";
  position: absolute;
  left: 23px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: #D3EDE9;
  z-index: 0;
}

.rlt-row {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border: 1px solid #D3EDE9;
  border-radius: 16px;
  padding: 16px 22px 16px 12px;
  box-shadow: 0 10px 24px rgba(16,100,107,0.06);
}
.rlt-row--locked { opacity: 0.6; box-shadow: none; }
.rlt-row--live { transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease; }
.rlt-row--live:hover { border-color: #3E7CB1; box-shadow: 0 16px 32px rgba(16,100,107,0.1); transform: translateY(-1px); }

.rlt-row-marker { flex-shrink: 0; width: 48px; display: flex; align-items: center; justify-content: center; }
.rlt-row-num {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #FFFFFF;
  border: 2px solid #3E7CB1;
  color: #3E7CB1;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rlt-row-num--locked { border-color: #D3EDE9; color: #9FC6C2; }

.rlt-row-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #EAF3FA;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3E7CB1;
}
.rlt-row-icon--locked { color: #B7CFCC; }

.rlt-row-body { flex: 1; min-width: 0; }
.rlt-row-topline { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.rlt-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 9.5px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #3E7CB1;
  background: rgba(62,124,177,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.rlt-row-meta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 10.5px;
  color: #4B8B92;
}
.rlt-row-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 17px;
  color: #10646B;
  line-height: 1.25;
  margin: 0 0 3px;
}
.rlt-row-title--locked { color: #9FC6C2; margin: 0; }
.rlt-row-desc {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8891;
  line-height: 1.4;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rlt-row-actions { flex-shrink: 0; display: flex; align-items: center; gap: 8px; }
.rlt-lesson-guidebtn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #3E7CB1;
  background: #EAF3FA;
  border: 1px solid #D3EDE9;
  border-radius: 999px;
  padding: 7px 13px;
  white-space: nowrap;
  cursor: pointer;
}
.rlt-lesson-startbtn {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
  background: #3E7CB1;
  border: none;
  border-radius: 999px;
  padding: 7px 15px;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 640px) {
  .rlt-row { flex-wrap: wrap; padding: 16px; }
  .rlt-row-actions { width: 100%; padding-left: 74px; }
  .rlt-row-desc { white-space: normal; }
}
`;

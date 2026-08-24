import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./relayTracks";

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
  const navigate = useNavigate();
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
      <div className="rlt-stage">
        <div className="rlt-topbar">
          <button type="button" className="rlt-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="rlt-brand-logo" />entivo
          </button>
        </div>

        <div className="rlt-hero">
          <div className="rlt-hero-tags">
            <span className="rlt-tag">{track.focus}</span>
            <span className="rlt-tag rlt-tag--level">{track.level}</span>
          </div>
          <h1 className="rlt-hero-title">{track.title}</h1>
        </div>

        <div className="rlt-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="rlt-row rlt-row--locked">
                  <div className="rlt-row-badge rlt-row-badge--locked">{num}</div>
                  <div className="rlt-row-body">
                    <h3 className="rlt-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="rlt-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="rlt-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="rlt-row-body">
                  <div className="rlt-row-topline">
                    <span className="rlt-row-tag">{lesson.tag}</span>
                    <span className="rlt-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="rlt-row-title">{lesson.title}</h3>
                  <p className="rlt-row-desc">{lesson.subtitle}</p>
                </div>
                <div className="rlt-row-actions">
                  <button type="button" className="rlt-btn-guide" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}>
                    Guide
                  </button>
                  <button type="button" className="rlt-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
                    Start →
                  </button>
                </div>
              </a>
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
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(62,124,177,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(62,124,177,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.rlt-shell * { box-sizing: border-box; }

.rlt-stage { width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.rlt-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.rlt-topbar { display: flex; align-items: center; padding-bottom: 30px; }
.rlt-brand {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 19px;
  color: #10646B;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
}
.rlt-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.rlt-hero { text-align: center; margin-bottom: 40px; }
.rlt-hero-tags { display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; }
.rlt-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.rlt-tag--level { color: #FFFFFF; background: #3E7CB1; }
.rlt-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0;
  text-shadow:
    1.2px 1.2px 0 rgba(62,124,177,0.28),
    2.4px 2.4px 0 rgba(62,124,177,0.28),
    3.6px 3.6px 0 rgba(62,124,177,0.28),
    4px 8px 18px rgba(16,100,107,0.2);
}

.rlt-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.rlt-row {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #FFFFFF;
  border-radius: 18px;
  padding: 14px 20px 14px 14px;
  box-shadow: 0 10px 22px rgba(16,100,107,0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease;
}
.rlt-row:hover { transform: translateY(-2px); }
.rlt-row--locked { opacity: 0.55; box-shadow: none; }

.rlt-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3E7CB1 0%, #2C5F8A 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rlt-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.rlt-row-body { flex: 1; min-width: 0; }
.rlt-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
.rlt-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #2C5F8A;
  background: rgba(62,124,177,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.rlt-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.rlt-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0 0 2px; color: #10646B; }
.rlt-row-desc { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; color: #4B8B92; margin: 0; }

.rlt-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.rlt-btn-guide, .rlt-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}
.rlt-btn-guide { background: rgba(42,168,174,0.14); color: #10646B; }
.rlt-btn-start { background: #3E7CB1; color: #FFFFFF; }

@media (max-width: 640px) {
  .rlt-row { flex-wrap: wrap; padding: 16px; }
  .rlt-row-actions { width: 100%; padding-left: 64px; }
}
`;

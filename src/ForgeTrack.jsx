import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./forgeTracks";

function slideCount(lesson) {
  const wordIntroSlides = Math.ceil(lesson.words.length / 3);
  return 1 + (lesson.hasCallback ? 1 : 0) + wordIntroSlides + lesson.words.length + 2;
}

// FORGE lessons open as a standalone popup player, matching the curriculum's
// chrome-less window.open pattern -- an independent window, not embedded in
// the Library's tab/page flow.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(860, screenW - 40);
  const h = Math.min(660, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/forge/${trackId}/${num}`,
    "sentivoForgePlayer",
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
        <div className="ft-stage">
          <p className="ft-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ft-shell">
      <style>{CSS}</style>
      <div className="ft-stage">
        <div className="ft-topbar">
          <button type="button" className="ft-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="ft-brand-logo" />entivo
          </button>
        </div>

        <div className="ft-hero">
          <div className="ft-hero-tags">
            <span className="ft-tag">Working Vocabulary</span>
            <span className="ft-tag ft-tag--level">{track.level}</span>
          </div>
          <h1 className="ft-hero-title">{track.title}</h1>
        </div>

        <div className="ft-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="ft-row ft-row--locked">
                  <div className="ft-row-badge ft-row-badge--locked">{num}</div>
                  <div className="ft-row-body">
                    <h3 className="ft-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="ft-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="ft-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="ft-row-body">
                  <div className="ft-row-topline">
                    <span className="ft-row-tag">{lesson.hasCallback ? "Callback" : "New situation"}</span>
                    <span className="ft-row-meta">{lesson.words.length} words &middot; {slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="ft-row-title">{lesson.situation}</h3>
                </div>
                <div className="ft-row-actions">
                  <button type="button" className="ft-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
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

.ft-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(232,84,78,0.16), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(232,84,78,0.16), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.ft-shell * { box-sizing: border-box; }

.ft-stage { width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.ft-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.ft-topbar { display: flex; align-items: center; padding-bottom: 30px; }
.ft-brand {
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
.ft-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.ft-hero { text-align: center; margin-bottom: 40px; }
.ft-hero-tags { display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; }
.ft-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.ft-tag--level { color: #10646B; background: #F6D4D2; }
.ft-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0;
  text-shadow:
    1.2px 1.2px 0 rgba(232,84,78,0.28),
    2.4px 2.4px 0 rgba(232,84,78,0.28),
    3.6px 3.6px 0 rgba(232,84,78,0.28),
    4px 8px 18px rgba(16,100,107,0.2);
}

.ft-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.ft-row {
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
.ft-row:hover { transform: translateY(-2px); }
.ft-row--locked { opacity: 0.55; box-shadow: none; }

.ft-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E8544E 0%, #C93F3A 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ft-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.ft-row-body { flex: 1; min-width: 0; }
.ft-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
.ft-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #C93F3A;
  background: rgba(232,84,78,0.12);
  border-radius: 999px;
  padding: 2px 9px;
}
.ft-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.ft-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0; color: #10646B; }

.ft-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.ft-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  background: #E8544E;
  color: #FFFFFF;
}

@media (max-width: 640px) {
  .ft-row { flex-wrap: wrap; padding: 16px; }
  .ft-row-actions { width: 100%; padding-left: 64px; }
}
`;

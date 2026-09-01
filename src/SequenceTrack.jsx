import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./sequenceTracks";

function slideCount(lesson) {
  // Cover + Wrap, plus per pattern: (example only if not callback) + 3 questions
  return lesson.patterns.reduce((sum, p) => sum + (p.isCallback ? 0 : 1) + p.questions.length, 2);
}

// SEQUENCE lessons open as a standalone popup player, matching the site's
// established chrome-less window.open pattern. Sized to fit the portrait
// deck (see feedback_popup_size_fits_content) rather than an oversized
// default window.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(536, screenW - 40);
  const h = Math.min(670, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/sequence/${trackId}/${num}`,
    "sentivoSequencePlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

function openGuide(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(760, screenW - 40);
  const h = Math.min(820, screenH - 40);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/sequence/${trackId}/${num}/guide`,
    "sentivoSequenceGuide",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function SequenceTrack() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="sqt-shell">
        <style>{CSS}</style>
        <div className="sqt-stage">
          <p className="sqt-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sqt-shell">
      <style>{CSS}</style>
      <div className="sqt-stage">
        <div className="sqt-topbar">
          <button type="button" className="sqt-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="sqt-brand-logo" />entivo
          </button>
        </div>

        <div className="sqt-hero">
          <span className="sqt-tag">Word Order Drill</span>
          <h1 className="sqt-hero-title">{track.title}</h1>
        </div>

        <div className="sqt-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="sqt-row sqt-row--locked">
                  <div className="sqt-row-badge sqt-row-badge--locked">{num}</div>
                  <div className="sqt-row-body">
                    <h3 className="sqt-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            const p2 = lesson.patterns[1];
            return (
              <a key={num} className="sqt-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="sqt-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="sqt-row-body">
                  <div className="sqt-row-topline">
                    <span className="sqt-row-tag">{lesson.patterns[0].isCallback ? "Callback + New" : "2 New Patterns"}</span>
                    <span className="sqt-row-meta">{slideCount(lesson)} slides</span>
                  </div>
                  <h3 className="sqt-row-title">{lesson.situation}</h3>
                  <p className="sqt-row-desc">{lesson.patterns[0].name} &middot; {p2.name}</p>
                </div>
                <div className="sqt-row-actions">
                  <button type="button" className="sqt-btn-guide" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openGuide(track.id, num); }}>
                    Guide
                  </button>
                  <button type="button" className="sqt-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
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

.sqt-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(92,107,192,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(92,107,192,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.sqt-shell * { box-sizing: border-box; }

.sqt-stage { width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.sqt-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.sqt-topbar { display: flex; align-items: center; padding-bottom: 30px; }
.sqt-brand {
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
.sqt-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.sqt-hero { text-align: center; margin-bottom: 40px; }
.sqt-tag {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #4C58A8;
  background: rgba(92,107,192,0.14);
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 16px;
}
.sqt-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0;
  text-shadow:
    1.2px 1.2px 0 rgba(92,107,192,0.32),
    2.4px 2.4px 0 rgba(92,107,192,0.32),
    3.6px 3.6px 0 rgba(92,107,192,0.32),
    4px 8px 18px rgba(16,100,107,0.2);
}

.sqt-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.sqt-row {
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
.sqt-row:hover { transform: translateY(-2px); }
.sqt-row--locked { opacity: 0.55; box-shadow: none; }

.sqt-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5C6BC0 0%, #3F4C9E 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sqt-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.sqt-row-body { flex: 1; min-width: 0; }
.sqt-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
.sqt-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #4C58A8;
  background: rgba(92,107,192,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.sqt-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.sqt-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0 0 2px; color: #10646B; }
.sqt-row-desc { font-family: 'IBM Plex Sans', sans-serif; font-size: 12px; color: #4B8B92; margin: 0; }

.sqt-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.sqt-btn-guide, .sqt-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
}
.sqt-btn-guide { background: rgba(42,168,174,0.14); color: #10646B; }
.sqt-btn-start { background: #5C6BC0; color: #FFFFFF; }

@media (max-width: 640px) {
  .sqt-row { flex-wrap: wrap; padding: 16px; }
  .sqt-row-actions { width: 100%; padding-left: 64px; }
}
`;

import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./deriveTracks";

// DERIVE lessons open as a standalone popup player, matching Shift's
// chrome-less window.open pattern.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(640, screenW - 40);
  const h = Math.min(760, screenH - 60);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/derive/${trackId}/${num}`,
    "sentivoDerivePlayer",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function DeriveTrack() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="dvt-shell">
        <style>{CSS}</style>
        <div className="dvt-stage">
          <p className="dvt-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dvt-shell">
      <style>{CSS}</style>
      <div className="dvt-stage">
        <div className="dvt-topbar">
          <button type="button" className="dvt-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="dvt-brand-logo" />entivo
          </button>
        </div>

        <div className="dvt-hero">
          <div className="dvt-hero-tags">
            <span className="dvt-tag">Word-Family Selection</span>
            <span className="dvt-tag dvt-tag--level">{track.level}</span>
          </div>
          <h1 className="dvt-hero-title">{track.title}</h1>
        </div>

        <div className="dvt-lesson-list">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="dvt-row dvt-row--locked">
                  <div className="dvt-row-badge dvt-row-badge--locked">{num}</div>
                  <div className="dvt-row-body">
                    <h3 className="dvt-row-title">Coming soon</h3>
                  </div>
                </div>
              );
            }
            return (
              <a key={num} className="dvt-row" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <div className="dvt-row-badge">{String(num).padStart(2, "0")}</div>
                <div className="dvt-row-body">
                  <div className="dvt-row-topline">
                    <span className="dvt-row-tag">Family</span>
                    <span className="dvt-row-meta">{lesson.family.join(" → ")}</span>
                  </div>
                  <h3 className="dvt-row-title">{lesson.title}</h3>
                  <p className="dvt-row-desc">{lesson.sentences.length} sentences, every form used twice.</p>
                </div>
                <div className="dvt-row-actions">
                  <button type="button" className="dvt-btn-start" onClick={(e) => { e.preventDefault(); e.stopPropagation(); openLesson(track.id, num); }}>
                    Start &rarr;
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

.dvt-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(214,71,140,0.16), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(214,71,140,0.16), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.dvt-shell * { box-sizing: border-box; }

.dvt-stage { width: 100%; max-width: 880px; margin: 0 auto; padding: 26px 28px 64px; }

.dvt-missing { font-family: 'IBM Plex Sans', sans-serif; color: #4B8B92; text-align: center; margin-top: 60px; }

.dvt-topbar { display: flex; align-items: center; padding-bottom: 30px; }
.dvt-brand {
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
.dvt-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.dvt-hero { text-align: center; margin-bottom: 40px; }
.dvt-hero-tags { display: flex; justify-content: center; gap: 8px; margin-bottom: 16px; }
.dvt-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 12px;
}
.dvt-tag--level { color: #10646B; background: #F6C9DF; }
.dvt-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 42px;
  color: #10646B;
  margin: 0;
  text-shadow:
    1.2px 1.2px 0 rgba(214,71,140,0.28),
    2.4px 2.4px 0 rgba(214,71,140,0.28),
    3.6px 3.6px 0 rgba(214,71,140,0.28),
    4px 8px 18px rgba(16,100,107,0.2);
}

.dvt-lesson-list { display: flex; flex-direction: column; gap: 14px; }
.dvt-row {
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
.dvt-row:hover { transform: translateY(-2px); }
.dvt-row--locked { opacity: 0.55; box-shadow: none; }

.dvt-row-badge {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #D6478C 0%, #B23370 100%);
  color: #FFFFFF;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dvt-row-badge--locked { background: #CDEBEA; color: #4B8B92; }

.dvt-row-body { flex: 1; min-width: 0; }
.dvt-row-topline { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; flex-wrap: wrap; }
.dvt-row-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #10646B;
  background: rgba(214,71,140,0.14);
  border-radius: 999px;
  padding: 2px 9px;
}
.dvt-row-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; font-size: 10.5px; color: #4B8B92; }
.dvt-row-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; margin: 0 0 2px; color: #10646B; }
.dvt-row-desc { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; color: #4B8B92; margin: 0; }

.dvt-row-actions { flex-shrink: 0; display: flex; gap: 8px; }
.dvt-btn-start {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  border-radius: 999px;
  padding: 8px 14px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  background: #D6478C;
  color: #FFFFFF;
}

@media (max-width: 640px) {
  .dvt-row { flex-wrap: wrap; padding: 16px; }
  .dvt-row-actions { width: 100%; padding-left: 64px; }
}
`;

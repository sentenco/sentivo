import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./deriveTracks";

// DERIVE lessons open as a standalone popup player, matching Shift's
// chrome-less window.open pattern.
function openLesson(trackId, num) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(860, screenW - 40);
  const h = Math.min(620, screenH - 80);
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

        <div className="dvt-lesson-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="dvt-box dvt-box--locked">
                  <span className="dvt-box-num">{String(num).padStart(2, "0")}</span>
                  <span className="dvt-box-word">Coming soon</span>
                </div>
              );
            }
            const word = lesson.root.charAt(0).toUpperCase() + lesson.root.slice(1);
            return (
              <a key={num} className="dvt-box" href="#" onClick={(e) => { e.preventDefault(); openLesson(track.id, num); }}>
                <span className="dvt-box-num">{String(num).padStart(2, "0")}</span>
                <span className="dvt-box-word">{word}</span>
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

.dvt-lesson-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}
.dvt-box {
  position: relative;
  background: #FFFFFF;
  border: 1.5px solid #E7EEF0;
  border-radius: 16px;
  padding: 18px 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 104px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 18px rgba(16,100,107,0.08);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.dvt-box:hover { transform: translateY(-3px); box-shadow: 0 14px 26px rgba(178,51,112,0.16); border-color: #F6C9DF; }
.dvt-box--locked { opacity: 0.5; cursor: default; box-shadow: none; }
.dvt-box--locked:hover { transform: none; box-shadow: none; border-color: #E7EEF0; }

.dvt-box-num {
  position: absolute;
  top: 10px;
  left: 12px;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 10.5px;
  color: #4B8B92;
  opacity: 0.55;
}
.dvt-box-word { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 19px; color: #10646B; }
.dvt-box--locked .dvt-box-word { font-size: 14px; font-weight: 600; color: #4B8B92; }
`;

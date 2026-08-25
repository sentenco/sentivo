import { useNavigate } from "react-router-dom";
import TRACKS from "./shiftTracks";

export default function ShiftHub() {
  const navigate = useNavigate();

  return (
    <div className="shh-shell">
      <style>{CSS}</style>
      <div className="shh-stage">
        <div className="shh-topbar">
          <button type="button" className="shh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="shh-brand-logo" />entivo
          </button>
        </div>

        <div className="shh-hero">
          <h1 className="shh-hero-title">Shift</h1>
          <p className="shh-hero-blurb">
            Shift drills fast, accurate tense choice under real speaking pressure. Built for students who know the grammar but hesitate or self-correct mid-sentence.
          </p>
        </div>

        <div className="shh-dot-lane"></div>

        <div className="shh-tracks-grid">
          {TRACKS.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/shift/${track.id}`} className="shh-track-card">
                <div className="shh-track-ribbon">
                  <span className="shh-track-num">Track {String(TRACKS.indexOf(track) + 1).padStart(2, "0")}</span>
                  <span className="shh-track-level-pill">{track.level}</span>
                </div>
                <div className="shh-track-body">
                  <div className="shh-track-tags">
                    <span className="shh-track-tag">{track.gapFocus}</span>
                  </div>
                  <h3 className="shh-track-title">{track.title}</h3>
                  <p className="shh-track-desc">{track.blurb}</p>
                  <div className="shh-track-foot">
                    <span className="shh-track-meta">{authored} of {track.lessons.length} ready</span>
                    <span className="shh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="shh-track-card shh-track-card--ghost">
            <span className="shh-ghost-plus">+</span>
            <div className="shh-ghost-label">More tracks coming</div>
            <div className="shh-ghost-sub">New diagnosed gaps get added here as they're built.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.shh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(232,180,0,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(232,180,0,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.shh-shell * { box-sizing: border-box; }

.shh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.shh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.shh-brand {
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
.shh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.shh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.shh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(232,180,0,0.35),
    3px 3px 0 rgba(232,180,0,0.35),
    4.5px 4.5px 0 rgba(232,180,0,0.35),
    5px 10px 22px rgba(16,100,107,0.22);
}
.shh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.shh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 40px;
  max-width: 340px;
}
.shh-dot-lane::before, .shh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #E8B400;
}
.shh-dot-lane::before { left: 0; }
.shh-dot-lane::after { right: 0; }

.shh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.shh-track-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 14px 30px rgba(16,100,107,0.14);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.shh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.shh-track-ribbon {
  background: linear-gradient(120deg, #F5C518 0%, #E8B400 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; text-shadow: 0 1px 3px rgba(120,80,0,0.5); }
.shh-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #10646B;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

.shh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.shh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.shh-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.shh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #10646B; margin: 0; }
.shh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.shh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.shh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.shh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  text-shadow: 0 1px 3px rgba(120,80,0,0.5);
  background: #E8B400;
  border-radius: 999px;
  padding: 8px 16px;
}

.shh-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.shh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.shh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.shh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .shh-tracks-grid { grid-template-columns: 1fr; }
}
`;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TRACKS from "./relayTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function RelayHub() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState("teens");
  const tracks = TRACKS.filter((t) => t.audience === audience);

  return (
    <div className="rlh-shell">
      <style>{CSS}</style>
      <div className="rlh-stage">
        <div className="rlh-topbar">
          <button type="button" className="rlh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="rlh-brand-logo" />entivo
          </button>
        </div>

        <div className="rlh-hero">
          <h1 className="rlh-hero-title">Relay</h1>
          <p className="rlh-hero-blurb">
            Relay drills the Answer, Add, Ask habit, turning short answers into real exchanges. Built for students whose responses are correct but end the conversation instead of continuing it.
          </p>
        </div>

        <div className="rlh-dot-lane"></div>

        <div className="rlh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`rlh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => setAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="rlh-tracks-grid">
          {tracks.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/relay/${track.id}`} className="rlh-track-card">
                <div className="rlh-track-ribbon">
                  <span className="rlh-track-num">Track {String(tracks.indexOf(track) + 1).padStart(2, "0")}</span>
                  <span className="rlh-track-level-pill">{track.level}</span>
                </div>
                <div className="rlh-track-body">
                  <div className="rlh-track-tags">
                    <span className="rlh-track-tag">{track.focus}</span>
                  </div>
                  <h3 className="rlh-track-title">{track.title}</h3>
                  <p className="rlh-track-desc">{track.blurb}</p>
                  <div className="rlh-track-foot">
                    <span className="rlh-track-meta">{authored} of {track.lessons.length} ready</span>
                    <span className="rlh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="rlh-track-card rlh-track-card--ghost">
            <span className="rlh-ghost-plus">+</span>
            <div className="rlh-ghost-label">More tracks coming</div>
            <div className="rlh-ghost-sub">New contexts get added here as they're built.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rlh-shell {
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
.rlh-shell * { box-sizing: border-box; }

.rlh-stage { width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.rlh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.rlh-brand {
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
.rlh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.rlh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.rlh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(62,124,177,0.30),
    3px 3px 0 rgba(62,124,177,0.30),
    4.5px 4.5px 0 rgba(62,124,177,0.30),
    5px 10px 22px rgba(16,100,107,0.22);
}
.rlh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.rlh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 32px;
  max-width: 340px;
}
.rlh-dot-lane::before, .rlh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3E7CB1;
}
.rlh-dot-lane::before { left: 0; }
.rlh-dot-lane::after { right: 0; }

.rlh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 32px; }
.rlh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #3E7CB1;
  background: #FFFFFF;
  border: 1.5px solid #C9E0F0;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.rlh-audience-tab:hover { border-color: #3E7CB1; }
.rlh-audience-tab.is-active { background: #3E7CB1; border-color: #3E7CB1; color: #FFFFFF; }

.rlh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.rlh-track-card {
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
.rlh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.rlh-track-ribbon {
  background: linear-gradient(120deg, #3E7CB1 0%, #2C5F8A 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rlh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }
.rlh-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #2C5F8A;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

.rlh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.rlh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.rlh-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.rlh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #10646B; margin: 0; }
.rlh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.rlh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.rlh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.rlh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #3E7CB1;
  border-radius: 999px;
  padding: 8px 16px;
}

.rlh-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.rlh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.rlh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.rlh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .rlh-tracks-grid { grid-template-columns: 1fr; }
}
`;

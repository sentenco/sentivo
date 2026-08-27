import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TRACKS from "./ascendTracks";

const LEVELS = [
  { key: "a2b1", label: "A2 → B1" },
  { key: "b2c1", label: "B2 → C1" },
];

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

function TrackCard({ track, index }) {
  const authored = track.lessons.filter(Boolean).length;
  return (
    <a href={`/library/ascend/${track.id}`} className="ah-track-card">
      <div className="ah-track-ribbon">
        <span className="ah-track-num">Track {String(index + 1).padStart(2, "0")}</span>
        <span className="ah-track-level-pill">{track.level}</span>
      </div>
      <div className="ah-track-body">
        <div className="ah-track-tags">
          <span className="ah-track-tag">{track.theme}</span>
        </div>
        <h3 className="ah-track-title">{track.title}</h3>
        <p className="ah-track-desc">{track.blurb}</p>
        <div className="ah-track-foot">
          <span className="ah-track-meta">{authored} of {track.lessons.length} ready</span>
          <span className="ah-track-cta">Open track →</span>
        </div>
      </div>
    </a>
  );
}

function GhostCard() {
  return (
    <div className="ah-track-card ah-track-card--ghost">
      <span className="ah-ghost-plus">+</span>
      <div className="ah-ghost-label">Coming soon</div>
      <div className="ah-ghost-sub">Tracks for this level and audience are on the way.</div>
    </div>
  );
}

export default function AscendHub() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("a2b1");

  return (
    <div className="ah-shell">
      <style>{CSS}</style>
      <div className="ah-stage">
        <div className="ah-topbar">
          <button type="button" className="ah-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="ah-brand-logo" />entivo
          </button>
        </div>

        <div className="ah-hero">
          <h1 className="ah-hero-title">Ascend</h1>
          <p className="ah-hero-blurb">
            Ascend is built for the transition points, A2 to B1, B2 to C1, where grammar isn't the gap anymore. Every lesson pushes a plain word, phrase, or sentence toward a stronger one, live in conversation.
          </p>
        </div>

        <div className="ah-dot-lane"></div>

        <div className="ah-level-tabs">
          {LEVELS.map((l) => (
            <button
              key={l.key}
              type="button"
              className={`ah-level-tab ${level === l.key ? "is-active" : ""}`}
              onClick={() => setLevel(l.key)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="ah-columns">
          {AUDIENCES.map((a) => {
            const tracks = TRACKS.filter((t) => t.levelBand === level && t.audience && t.audience.includes(a.key));
            return (
              <div className="ah-column" key={a.key}>
                <h2 className="ah-column-head">{a.label}</h2>
                <div className="ah-column-tracks">
                  {tracks.length > 0
                    ? tracks.map((track, i) => <TrackCard key={track.id} track={track} index={i} />)
                    : <GhostCard />}
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

.ah-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(242,153,74,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(242,153,74,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.ah-shell * { box-sizing: border-box; }

.ah-stage { width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.ah-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.ah-brand {
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
.ah-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.ah-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.ah-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(242,153,74,0.35),
    3px 3px 0 rgba(242,153,74,0.35),
    4.5px 4.5px 0 rgba(242,153,74,0.35),
    5px 10px 22px rgba(16,100,107,0.22);
}
.ah-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.ah-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 32px;
  max-width: 340px;
}
.ah-dot-lane::before, .ah-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #F2994A;
}
.ah-dot-lane::before { left: 0; }
.ah-dot-lane::after { right: 0; }

.ah-level-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 40px; }
.ah-level-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #D97D2E;
  background: #FFFFFF;
  border: 1.5px solid #F6D9BB;
  border-radius: 999px;
  padding: 8px 22px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.ah-level-tab:hover { border-color: #F2994A; }
.ah-level-tab.is-active { background: #F2994A; border-color: #F2994A; color: #FFFFFF; }

.ah-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: start;
}

.ah-column-head {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #D97D2E;
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #CDEBEA;
}

.ah-column-tracks {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.ah-track-card {
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
.ah-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.ah-track-ribbon {
  background: linear-gradient(120deg, #F2994A 0%, #D97D2E 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ah-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }
.ah-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #D97D2E;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

.ah-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.ah-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ah-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.ah-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #10646B; margin: 0; }
.ah-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.ah-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.ah-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.ah-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #F2994A;
  border-radius: 999px;
  padding: 8px 16px;
}

.ah-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 220px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.ah-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.ah-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.ah-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 760px) {
  .ah-columns { grid-template-columns: 1fr; gap: 32px; }
}
`;

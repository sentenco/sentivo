import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TRACKS from "./sequenceTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

function TrackCard({ track }) {
  const authored = track.lessons.filter(Boolean).length;
  return (
    <a href={`/library/sequence/${track.id}`} className="sqh-track-card">
      <div className="sqh-track-ribbon">
        <span className="sqh-track-title">{track.title}</span>
      </div>
      <div className="sqh-track-body">
        <p className="sqh-track-desc">{track.blurb}</p>
        <div className="sqh-track-foot">
          <span className="sqh-track-meta">{authored} of {track.lessons.length} ready</span>
          <span className="sqh-track-cta">Open track →</span>
        </div>
      </div>
    </a>
  );
}

function GhostCard() {
  return (
    <div className="sqh-track-card sqh-track-card--ghost">
      <span className="sqh-ghost-plus">+</span>
      <div className="sqh-ghost-label">More tracks coming</div>
      <div className="sqh-ghost-sub">Tracks for this audience are on the way.</div>
    </div>
  );
}

export default function SequenceHub() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState("teens");
  const tracks = TRACKS.filter((t) => t.audience.includes(audience));

  return (
    <div className="sqh-shell">
      <style>{CSS}</style>
      <div className="sqh-stage">
        <div className="sqh-topbar">
          <button type="button" className="sqh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="sqh-brand-logo" />entivo
          </button>
        </div>

        <div className="sqh-hero">
          <h1 className="sqh-hero-title">Sequence</h1>
          <p className="sqh-hero-blurb">
            Sequence takes words a student already knows and drills putting them in the order that actually makes a sentence. Built for students who have the right words but can't arrange them.
          </p>
        </div>

        <div className="sqh-dot-lane"></div>

        <div className="sqh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`sqh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => setAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="sqh-tracks-grid">
          {tracks.length > 0 ? tracks.map((track) => <TrackCard key={track.id} track={track} />) : <GhostCard />}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.sqh-shell {
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
.sqh-shell * { box-sizing: border-box; }

.sqh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.sqh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.sqh-brand {
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
.sqh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.sqh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.sqh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(92,107,192,0.30),
    3px 3px 0 rgba(92,107,192,0.30),
    4.5px 4.5px 0 rgba(92,107,192,0.30),
    5px 10px 22px rgba(16,100,107,0.22);
}
.sqh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.sqh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 32px;
  max-width: 340px;
}
.sqh-dot-lane::before, .sqh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5C6BC0;
}
.sqh-dot-lane::before { left: 0; }
.sqh-dot-lane::after { right: 0; }

.sqh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 40px; }
.sqh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #4C58A8;
  background: #FFFFFF;
  border: 1.5px solid #D6D9F5;
  border-radius: 999px;
  padding: 8px 22px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.sqh-audience-tab:hover { border-color: #5C6BC0; }
.sqh-audience-tab.is-active { background: #5C6BC0; border-color: #5C6BC0; color: #FFFFFF; }

.sqh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.sqh-track-card {
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
.sqh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.sqh-track-ribbon {
  background: linear-gradient(120deg, #5C6BC0 0%, #3F4C9E 100%);
  padding: 20px 22px;
}
.sqh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #FFFFFF; }

.sqh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.sqh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.sqh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.sqh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.sqh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #5C6BC0;
  border-radius: 999px;
  padding: 8px 16px;
}

.sqh-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.sqh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.sqh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.sqh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .sqh-tracks-grid { grid-template-columns: 1fr; }
}
`;

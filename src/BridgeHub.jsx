import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TRACKS from "./bridgeTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

function TrackCard({ track }) {
  const authored = track.lessons.filter(Boolean).length;
  return (
    <a href={`/library/bridge/${track.id}`} className="brh-track-card">
      <div className="brh-track-ribbon">
        <span className="brh-track-title">{track.title}</span>
      </div>
      <div className="brh-track-body">
        <p className="brh-track-desc">{track.blurb}</p>
        <div className="brh-track-foot">
          <span className="brh-track-meta">{authored} of {track.lessons.length} ready</span>
          <span className="brh-track-cta">Open track →</span>
        </div>
      </div>
    </a>
  );
}

function GhostCard() {
  return (
    <div className="brh-track-card brh-track-card--ghost">
      <span className="brh-ghost-plus">+</span>
      <div className="brh-ghost-label">More tracks coming</div>
      <div className="brh-ghost-sub">Tracks for this audience are on the way.</div>
    </div>
  );
}

export default function BridgeHub() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState("teens");
  const tracks = TRACKS.filter((t) => t.audience.includes(audience));

  return (
    <div className="brh-shell">
      <style>{CSS}</style>
      <div className="brh-stage">
        <div className="brh-topbar">
          <button type="button" className="brh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="brh-brand-logo" />entivo
          </button>
        </div>

        <div className="brh-hero">
          <h1 className="brh-hero-title">Bridge</h1>
          <p className="brh-hero-blurb">
            Bridge swaps dead air and native-language filler sounds for natural stalling phrases that carry a student across a stuck moment. Built for students with no strategy for filling gaps.
          </p>
        </div>

        <div className="brh-dot-lane"></div>

        <div className="brh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`brh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => setAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="brh-tracks-grid">
          {tracks.map((track) => <TrackCard key={track.id} track={track} />)}
          <GhostCard />
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.brh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(79,174,122,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(79,174,122,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.brh-shell * { box-sizing: border-box; }

.brh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.brh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.brh-brand {
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
.brh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.brh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.brh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(79,174,122,0.32),
    3px 3px 0 rgba(79,174,122,0.32),
    4.5px 4.5px 0 rgba(79,174,122,0.32),
    5px 10px 22px rgba(16,100,107,0.22);
}
.brh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.brh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 32px;
  max-width: 340px;
}
.brh-dot-lane::before, .brh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4FAE7A;
}
.brh-dot-lane::before { left: 0; }
.brh-dot-lane::after { right: 0; }

.brh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 40px; }
.brh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #2C7A46;
  background: #FFFFFF;
  border: 1.5px solid #C3E8D2;
  border-radius: 999px;
  padding: 8px 22px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.brh-audience-tab:hover { border-color: #4FAE7A; }
.brh-audience-tab.is-active { background: #4FAE7A; border-color: #4FAE7A; color: #FFFFFF; }

.brh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.brh-track-card {
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
.brh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.brh-track-ribbon {
  background: linear-gradient(120deg, #4FAE7A 0%, #368F5F 100%);
  padding: 20px 22px;
}
.brh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #FFFFFF; }

.brh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.brh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.brh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  margin-top: auto;
  border-top: 1px dashed #CDEBEA;
}
.brh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.brh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #4FAE7A;
  border-radius: 999px;
  padding: 8px 16px;
}

.brh-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.brh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.brh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.brh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .brh-tracks-grid { grid-template-columns: 1fr; }
}
`;

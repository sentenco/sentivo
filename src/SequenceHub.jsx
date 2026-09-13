import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TRACKS from "./sequenceTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

function TrackCard({ track, index }) {
  const authored = track.lessons.filter(Boolean).length;
  return (
    <a href={`/library/sequence/${track.id}`} className="sqh-track-card">
      <div className="sqh-track-ribbon">
        <span className="sqh-track-num">Track {String(index + 1).padStart(2, "0")}</span>
        <span className="sqh-track-level-pill">{track.level}</span>
      </div>
      <div className="sqh-track-body">
        <div className="sqh-track-tags">
          <span className="sqh-track-tag">Word Order Drill</span>
        </div>
        <h3 className="sqh-track-title">{track.title}</h3>
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [audience, setAudience] = useState(() => {
    const fromUrl = searchParams.get("audience");
    return AUDIENCES.some((a) => a.key === fromUrl) ? fromUrl : "teens";
  });
  const tracks = TRACKS.filter((t) => t.audience.includes(audience));

  function selectAudience(key) {
    setAudience(key);
    const next = new URLSearchParams(searchParams);
    next.set("audience", key);
    setSearchParams(next, { replace: true });
  }

  return (
    <div className="sqh-shell">
      <style>{CSS}</style>
      <div className="sqh-block"></div>
      <div className="sqh-block-b"></div>
      <div className="sqh-echo">SEQUENCE</div>
      <div className="sqh-stage">
        <div className="sqh-hero">
          <span className="sqh-hero-kicker">Speaking Modality</span>
          <h1 className="sqh-hero-title">Sequence</h1>
          <p className="sqh-hero-blurb">
            Sequence takes words a student already knows and drills putting them in the order that actually makes a sentence. Built for students who have the right words but can't arrange them.
          </p>
        </div>

        <div className="sqh-rule"><span></span><i></i><span></span></div>

        <div className="sqh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`sqh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => selectAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="sqh-tracks-grid">
          {tracks.length > 0 ? tracks.map((track, i) => <TrackCard key={track.id} track={track} index={i} />) : <GhostCard />}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.sqh-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.sqh-shell * { box-sizing: border-box; }

.sqh-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #5C6BC0 transparent transparent; z-index: 0;
}
.sqh-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #3F4C9E transparent transparent; z-index: 0;
}
.sqh-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #3F4C9E; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.sqh-stage { position: relative; z-index: 1; width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.sqh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.sqh-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 18px 34px;
  background: #5C6BC0;
}
.sqh-hero-title::after {
  content: "";
  position: absolute;
  top: 12px; left: 12px; right: -12px; bottom: -12px;
  background: #3F4C9E;
  z-index: -1;
}
.sqh-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #3F4C9E; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.sqh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.sqh-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.sqh-rule span { display: block; height: 4px; width: 60px; background: #5C6BC0; }
.sqh-rule i { display: block; width: 8px; height: 8px; background: #3F4C9E; transform: rotate(45deg); }

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
  grid-template-columns: repeat(4, 1fr);
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
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sqh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }
.sqh-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #3F4C9E;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

.sqh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.sqh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.sqh-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #3F4C9E;
  background: rgba(92,107,192,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.sqh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; line-height: 1.25; color: #262A4A; margin: 0; min-height: 55px; }
.sqh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; min-height: 63px; }

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

@media (max-width: 1180px) {
  .sqh-tracks-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 860px) {
  .sqh-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .sqh-tracks-grid { grid-template-columns: 1fr; }
}
`;

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [level, setLevel] = useState(() => {
    const fromUrl = searchParams.get("level");
    return LEVELS.some((l) => l.key === fromUrl) ? fromUrl : "a2b1";
  });

  function selectLevel(key) {
    setLevel(key);
    const next = new URLSearchParams(searchParams);
    next.set("level", key);
    setSearchParams(next, { replace: true });
  }

  return (
    <div className="ah-shell">
      <style>{CSS}</style>
      <div className="ah-block"></div>
      <div className="ah-block-b"></div>
      <div className="ah-echo">ASCEND</div>
      <div className="ah-stage">
        <div className="ah-hero">
          <span className="ah-hero-kicker">Speaking Modality</span>
          <h1 className="ah-hero-title">Ascend</h1>
          <p className="ah-hero-blurb">
            Ascend is built for the transition points, A2 to B1, B2 to C1, where grammar isn't the gap anymore. Every lesson pushes a plain word, phrase, or sentence toward a stronger one, live in conversation.
          </p>
        </div>

        <div className="ah-rule"><span></span><i></i><span></span></div>

        <div className="ah-level-tabs">
          {LEVELS.map((l) => (
            <button
              key={l.key}
              type="button"
              className={`ah-level-tab ${level === l.key ? "is-active" : ""}`}
              onClick={() => selectLevel(l.key)}
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.ah-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.ah-shell * { box-sizing: border-box; }

.ah-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #F2994A transparent transparent; z-index: 0;
}
.ah-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #D97D2E transparent transparent; z-index: 0;
}
.ah-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #D97D2E; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.ah-stage { position: relative; z-index: 1; width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.ah-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.ah-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 10px 20px;
  background: #F2994A;
}
.ah-hero-title::after {
  content: "";
  position: absolute;
  top: 8px; left: 8px; right: -8px; bottom: -8px;
  background: #D97D2E;
  z-index: -1;
}
.ah-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #D97D2E; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.ah-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.ah-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.ah-rule span { display: block; height: 4px; width: 60px; background: #F2994A; }
.ah-rule i { display: block; width: 8px; height: 8px; background: #D97D2E; transform: rotate(45deg); }

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
.ah-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; line-height: 1.25; color: #10646B; margin: 0; min-height: 55px; }
.ah-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; min-height: 63px; }

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

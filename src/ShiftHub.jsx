import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TRACKS from "./shiftTracks";

const AUDIENCES = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function ShiftHub() {
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
    <div className="shh-shell">
      <style>{CSS}</style>
      <div className="shh-block"></div>
      <div className="shh-block-b"></div>
      <div className="shh-echo">SHIFT</div>
      <div className="shh-stage">
        <div className="shh-hero">
          <span className="shh-hero-kicker">Speaking Modality</span>
          <h1 className="shh-hero-title">Shift</h1>
          <p className="shh-hero-blurb">
            Shift drills fast, accurate tense choice under real speaking pressure. Built for students who know the grammar but hesitate or self-correct mid-sentence.
          </p>
        </div>

        <div className="shh-rule"><span></span><i></i><span></span></div>

        <div className="shh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`shh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => selectAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="shh-tracks-grid">
          {tracks.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/shift/${track.id}`} className="shh-track-card">
                <div className="shh-track-ribbon">
                  <span className="shh-track-num">Track {String(tracks.indexOf(track) + 1).padStart(2, "0")}</span>
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.shh-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.shh-shell * { box-sizing: border-box; }

.shh-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #FFDE70 transparent transparent; z-index: 0;
}
.shh-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #FFCF3D transparent transparent; z-index: 0;
}
.shh-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #FFCF3D; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.shh-stage { position: relative; z-index: 1; width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.shh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.shh-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 18px 34px;
  background: #FFDE70;
}
.shh-hero-title::after {
  content: "";
  position: absolute;
  top: 12px; left: 12px; right: -12px; bottom: -12px;
  background: #FFCF3D;
  z-index: -1;
}
.shh-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #FFCF3D; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.shh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.shh-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.shh-rule span { display: block; height: 4px; width: 60px; background: #FFDE70; }
.shh-rule i { display: block; width: 8px; height: 8px; background: #FFCF3D; transform: rotate(45deg); }

.shh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 32px; }
.shh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #10646B;
  background: #FFFFFF;
  border: 1.5px solid #FFE9A8;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.shh-audience-tab:hover { border-color: #FFCF3D; }
.shh-audience-tab.is-active { background: #FFCF3D; border-color: #FFCF3D; color: #10646B; }

.shh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  background: linear-gradient(120deg, #FFDE70 0%, #FFCF3D 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #10646B; }
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
  color: #10646B;
  background: #FFCF3D;
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

@media (max-width: 1180px) {
  .shh-tracks-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 860px) {
  .shh-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .shh-tracks-grid { grid-template-columns: 1fr; }
}
`;

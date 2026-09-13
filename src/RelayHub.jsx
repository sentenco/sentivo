import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TRACKS from "./relayTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function RelayHub() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [audience, setAudience] = useState(() => {
    const fromUrl = searchParams.get("audience");
    return AUDIENCES.some((a) => a.key === fromUrl) ? fromUrl : "teens";
  });
  const tracks = TRACKS.filter((t) => t.audience === audience);

  function selectAudience(key) {
    setAudience(key);
    const next = new URLSearchParams(searchParams);
    next.set("audience", key);
    setSearchParams(next, { replace: true });
  }

  return (
    <div className="rlh-shell">
      <style>{CSS}</style>
      <div className="rlh-block"></div>
      <div className="rlh-block-b"></div>
      <div className="rlh-echo">RELAY</div>
      <div className="rlh-stage">
        <div className="rlh-hero">
          <span className="rlh-hero-kicker">Speaking Modality</span>
          <h1 className="rlh-hero-title">Relay</h1>
          <p className="rlh-hero-blurb">
            Relay drills the Answer, Add, Ask habit, turning short answers into real exchanges. Built for students whose responses are correct but end the conversation instead of continuing it.
          </p>
        </div>

        <div className="rlh-rule"><span></span><i></i><span></span></div>

        <div className="rlh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`rlh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => selectAudience(a.key)}
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.rlh-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.rlh-shell * { box-sizing: border-box; }

.rlh-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #3E7CB1 transparent transparent; z-index: 0;
}
.rlh-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #2C5F8A transparent transparent; z-index: 0;
}
.rlh-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #2C5F8A; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.rlh-stage { position: relative; z-index: 1; width: 100%; max-width: 1400px; margin: 0 auto; padding: 26px 28px 64px; }

.rlh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.rlh-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 18px 34px;
  background: #3E7CB1;
}
.rlh-hero-title::after {
  content: "";
  position: absolute;
  top: 12px; left: 12px; right: -12px; bottom: -12px;
  background: #2C5F8A;
  z-index: -1;
}
.rlh-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #2C5F8A; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.rlh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.rlh-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.rlh-rule span { display: block; height: 4px; width: 60px; background: #3E7CB1; }
.rlh-rule i { display: block; width: 8px; height: 8px; background: #2C5F8A; transform: rotate(45deg); }

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

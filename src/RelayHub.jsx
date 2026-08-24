import { useState } from "react";
import TRACKS from "./relayTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function RelayHub() {
  const [audience, setAudience] = useState("adults");
  const tracks = TRACKS.filter((t) => t.audience === audience);

  return (
    <div className="rlh-shell">
      <style>{CSS}</style>
      <header className="rlh-topbar">
        <span className="rlh-topbar-title">RELAY</span>
      </header>

      <div className="rlh-stage">
        <div className="rlh-hero">
          <span className="rlh-hero-eyebrow">Diagnosis · Conversation-ending answers</span>
          <h1 className="rlh-hero-title">RELAY</h1>
          <p className="rlh-hero-blurb">
            Every RELAY track is tailored to one context. Pick the track built for your student.
          </p>
        </div>
        <div className="rlh-lane"></div>

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
                <div className="rlh-track-body">
                  <div>
                    <div className="rlh-track-tags">
                      <span className="rlh-tag">{track.focus}</span>
                      <span className="rlh-tag rlh-tag--level">{track.level}</span>
                    </div>
                    <h3 className="rlh-track-title">{track.title}</h3>
                    <p className="rlh-track-desc">{track.blurb}</p>
                  </div>
                  <div className="rlh-track-foot">
                    <span className="rlh-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                    <span className="rlh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="rlh-track-card rlh-track-card--ghost">
            <div className="rlh-track-body">
              <div>
                <span className="rlh-ghost-icon">+</span>
                <h3 className="rlh-track-title rlh-track-title--ghost">More tracks coming</h3>
                <p className="rlh-track-desc">New contexts get added here as they're built.</p>
              </div>
            </div>
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
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.rlh-shell * { box-sizing: border-box; }

.rlh-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.rlh-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4B8B92;
}

.rlh-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 44px 28px 64px;
}

.rlh-hero { max-width: 620px; }
.rlh-hero-eyebrow {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #3E7CB1;
  background: rgba(62,124,177,0.12);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.rlh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 46px;
  color: #10646B;
  margin: 0 0 12px;
}
.rlh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B8B92;
  margin: 0;
  line-height: 1.55;
}

.rlh-lane { position: relative; height: 2px; background: #BFE6E1; margin: 30px 0 34px; }
.rlh-lane::before, .rlh-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #3E7CB1; }
.rlh-lane::before { left: 0; }
.rlh-lane::after { right: 0; }

.rlh-audience-tabs { display: flex; gap: 8px; margin-bottom: 24px; }
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.rlh-track-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 16px;
  border-top: 4px solid #3E7CB1;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(16,100,107,0.12);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.rlh-track-card:hover {
  box-shadow: 0 16px 30px rgba(16,100,107,0.18);
  transform: translateY(-3px);
}

.rlh-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 22px 22px 20px; }
.rlh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.rlh-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #3E7CB1;
  background: rgba(62,124,177,0.10);
  border-radius: 999px;
  padding: 3px 10px;
}
.rlh-tag--level { color: #4B8B92; background: rgba(42,168,174,0.12); }

.rlh-track-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 21px;
  color: #10646B;
  margin: 0 0 6px;
}
.rlh-track-desc {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8891;
  line-height: 1.5;
  margin: 0;
}
.rlh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #EAF8F6;
}
.rlh-track-meta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #4B8B92;
}
.rlh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #3E7CB1;
  white-space: nowrap;
}

.rlh-track-card--ghost {
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
  border: 2px dashed #BFE6E1;
  border-top: 2px dashed #BFE6E1;
  box-shadow: none;
}
.rlh-track-card--ghost .rlh-track-body { align-items: center; text-align: center; justify-content: center; }
.rlh-ghost-icon {
  display: block;
  font-family: 'Baloo 2', cursive;
  font-size: 30px;
  color: #8FB9BC;
  margin-bottom: 6px;
}
.rlh-track-title--ghost { color: #8FB9BC; }

@media (max-width: 640px) {
  .rlh-tracks-grid { grid-template-columns: 1fr; }
}
`;

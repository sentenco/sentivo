import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TRACKS from "./deriveTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function DeriveHub() {
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
    <div className="dvh-shell">
      <style>{CSS}</style>
      <div className="dvh-block"></div>
      <div className="dvh-block-b"></div>
      <div className="dvh-echo">DERIVE</div>
      <div className="dvh-stage">
        <div className="dvh-hero">
          <span className="dvh-hero-kicker">Speaking Modality</span>
          <h1 className="dvh-hero-title">Derive</h1>
          <p className="dvh-hero-blurb">
            Derive drills choosing the right word-family member on demand, developing instead of development, decide instead of decision. Built for students who know the root but reach for the wrong form of it.
          </p>
        </div>

        <div className="dvh-rule"><span></span><i></i><span></span></div>

        <div className="dvh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`dvh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => selectAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="dvh-tracks-grid">
          {tracks.map((track, i) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/derive/${track.id}`} className="dvh-track-card">
                <div className="dvh-track-ribbon">
                  <span className="dvh-track-num">Track {String(i + 1).padStart(2, "0")}</span>
                  <span className="dvh-track-level-pill">{track.level}</span>
                </div>
                <div className="dvh-track-body">
                  <div className="dvh-track-tags">
                    <span className="dvh-track-tag">Word-Family Selection</span>
                  </div>
                  <h3 className="dvh-track-title">{track.title}</h3>
                  <p className="dvh-track-desc">{track.blurb}</p>
                  <div className="dvh-track-foot">
                    <span className="dvh-track-meta">{authored} of {track.lessons.length} ready</span>
                    <span className="dvh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="dvh-track-card dvh-track-card--ghost">
            <span className="dvh-ghost-plus">+</span>
            <div className="dvh-ghost-label">More tracks coming</div>
            <div className="dvh-ghost-sub">New word families get added here as they're built.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.dvh-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.dvh-shell * { box-sizing: border-box; }

.dvh-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #D6478C transparent transparent; z-index: 0;
}
.dvh-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #B23370 transparent transparent; z-index: 0;
}
.dvh-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #B23370; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.dvh-stage { position: relative; z-index: 1; width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.dvh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.dvh-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 2px 6px;
  background: #D6478C;
}
.dvh-hero-title::after {
  content: "";
  position: absolute;
  top: 6px; left: 6px; right: -6px; bottom: -6px;
  background: #B23370;
  z-index: -1;
}
.dvh-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #B23370; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.dvh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.dvh-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.dvh-rule span { display: block; height: 4px; width: 60px; background: #D6478C; }
.dvh-rule i { display: block; width: 8px; height: 8px; background: #B23370; transform: rotate(45deg); }

.dvh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 32px; }
.dvh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #10646B;
  background: #FFFFFF;
  border: 1.5px solid #F6C9DF;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.dvh-audience-tab:hover { border-color: #D6478C; }
.dvh-audience-tab.is-active { background: #D6478C; border-color: #D6478C; color: #FFFFFF; }

.dvh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.dvh-track-card {
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
.dvh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.dvh-track-ribbon {
  background: linear-gradient(120deg, #D6478C 0%, #B23370 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dvh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }
.dvh-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #B23370;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

.dvh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.dvh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.dvh-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.dvh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #10646B; margin: 0; }
.dvh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.dvh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.dvh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.dvh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #D6478C;
  border-radius: 999px;
  padding: 8px 16px;
}

.dvh-track-card--ghost {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  border: 2px dashed #CDEBEA;
  border-radius: 22px;
  background: transparent;
  padding: 22px;
}
.dvh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.dvh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.dvh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 900px) {
  .dvh-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .dvh-tracks-grid { grid-template-columns: 1fr; }
}
`;

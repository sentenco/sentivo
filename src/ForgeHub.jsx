import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TRACKS from "./forgeTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function ForgeHub() {
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
    <div className="fh-shell">
      <style>{CSS}</style>
      <div className="fh-block"></div>
      <div className="fh-block-b"></div>
      <div className="fh-echo">FORGE</div>
      <div className="fh-stage">
        <div className="fh-hero">
          <span className="fh-hero-kicker">Speaking Modality</span>
          <h1 className="fh-hero-title">Forge</h1>
          <p className="fh-hero-blurb">
            Forge builds real, working vocabulary through the situations you'll actually be in, one category at a time.
          </p>
        </div>

        <div className="fh-rule"><span></span><i></i><span></span></div>

        <div className="fh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`fh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => selectAudience(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="fh-tracks-grid">
          {tracks.map((track, i) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/forge/${track.id}`} className="fh-track-card">
                <div className="fh-track-ribbon">
                  <span className="fh-track-num">Track {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="fh-track-body">
                  <div className="fh-track-tags">
                    <span className="fh-track-tag">Working Vocabulary</span>
                  </div>
                  <h3 className="fh-track-title">{track.title}</h3>
                  <p className="fh-track-desc">{track.blurb}</p>
                  <div className="fh-track-foot">
                    <span className="fh-track-meta">{authored} of {track.lessons.length} ready</span>
                    <span className="fh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="fh-track-card fh-track-card--ghost">
            <span className="fh-ghost-plus">+</span>
            <div className="fh-ghost-label">More categories coming</div>
            <div className="fh-ghost-sub">New life domains get added here as they're built.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Mono:wght@600&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.fh-shell {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #FBF3E9;
  box-sizing: border-box;
}
.fh-shell * { box-sizing: border-box; }

.fh-block {
  position: absolute; top: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 0 220px 220px 0;
  border-color: transparent #E8544E transparent transparent; z-index: 0;
}
.fh-block-b {
  position: absolute; bottom: 0; right: 0; width: 0; height: 0;
  border-style: solid; border-width: 160px 160px 0 0;
  border-color: transparent #C93F3A transparent transparent; z-index: 0;
}
.fh-echo {
  position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
  font-family: 'Baloo 2', cursive; font-weight: 800; font-size: 260px; line-height: 1;
  color: #C93F3A; opacity: 0.06; white-space: nowrap; z-index: 0; pointer-events: none;
  letter-spacing: -0.02em;
}

.fh-stage {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 26px 28px 64px;
}

.fh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.fh-hero-title {
  position: relative;
  display: inline-block;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #FFFFFF;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  padding: 10px 20px;
  background: #E8544E;
}
.fh-hero-title::after {
  content: "";
  position: absolute;
  top: 8px; left: 8px; right: -8px; bottom: -8px;
  background: #C93F3A;
  z-index: -1;
}
.fh-hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-weight: 600; font-size: 11.5px;
  letter-spacing: 0.18em; text-transform: uppercase; color: #FFFFFF;
  background: #C93F3A; border-radius: 3px; padding: 6px 16px; margin-bottom: 16px;
}
.fh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 20px auto 0;
  max-width: 520px;
}

.fh-rule {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin: 22px auto 24px;
}
.fh-rule span { display: block; height: 4px; width: 60px; background: #E8544E; }
.fh-rule i { display: block; width: 8px; height: 8px; background: #C93F3A; transform: rotate(45deg); }

.fh-audience-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 32px; }
.fh-audience-tab {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #10646B;
  background: #FFFFFF;
  border: 1.5px solid #F6D4D2;
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.fh-audience-tab:hover { border-color: #E8544E; }
.fh-audience-tab.is-active { background: #E8544E; border-color: #E8544E; color: #FFFFFF; }

.fh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.fh-track-card {
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
.fh-track-card:hover { transform: translateY(-4px) rotate(-0.4deg); box-shadow: 0 20px 40px rgba(16,100,107,0.2); }

.fh-track-ribbon {
  background: linear-gradient(120deg, #E8544E 0%, #C93F3A 100%);
  padding: 16px 22px;
  display: flex;
  align-items: center;
}
.fh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }

.fh-track-body { padding: 22px 22px 20px; flex: 1; display: flex; flex-direction: column; gap: 14px; }
.fh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.fh-track-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #10646B;
  background: rgba(42,168,174,0.14);
  border-radius: 999px;
  padding: 4px 11px;
}
.fh-track-title { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 22px; color: #10646B; margin: 0; }
.fh-track-desc { font-family: 'IBM Plex Sans', sans-serif; font-weight: 500; font-size: 13.5px; line-height: 1.55; color: #4B8B92; margin: 0; }

.fh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px dashed #CDEBEA;
}
.fh-track-meta { font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 11px; color: #4B8B92; }
.fh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #FFFFFF;
  background: #E8544E;
  border-radius: 999px;
  padding: 8px 16px;
}

.fh-track-card--ghost {
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  box-shadow: none;
  border: 2px dashed #CDEBEA;
  background: transparent;
  padding: 22px;
}
.fh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.fh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.fh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .fh-tracks-grid { grid-template-columns: 1fr; }
}
`;

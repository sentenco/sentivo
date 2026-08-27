import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TRACKS from "./forgeTracks";

const AUDIENCES = [
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export default function ForgeHub() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState("teens");
  const tracks = TRACKS.filter((t) => t.audience.includes(audience));

  return (
    <div className="fh-shell">
      <style>{CSS}</style>
      <div className="fh-stage">
        <div className="fh-topbar">
          <button type="button" className="fh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="fh-brand-logo" />entivo
          </button>
        </div>

        <div className="fh-hero">
          <h1 className="fh-hero-title">Forge</h1>
          <p className="fh-hero-blurb">
            Forge builds real, working vocabulary through the situations you'll actually be in, one category at a time.
          </p>
        </div>

        <div className="fh-dot-lane"></div>

        <div className="fh-audience-tabs">
          {AUDIENCES.map((a) => (
            <button
              key={a.key}
              type="button"
              className={`fh-audience-tab ${audience === a.key ? "is-active" : ""}`}
              onClick={() => setAudience(a.key)}
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
                  <span className="fh-track-level-pill">{track.level}</span>
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
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.fh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(232,84,78,0.16), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(232,84,78,0.16), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.fh-shell * { box-sizing: border-box; }

.fh-stage {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 26px 28px 64px;
}

.fh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.fh-brand {
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
.fh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.fh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.fh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(232,84,78,0.30),
    3px 3px 0 rgba(232,84,78,0.30),
    4.5px 4.5px 0 rgba(232,84,78,0.30),
    5px 10px 22px rgba(16,100,107,0.22);
}
.fh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.fh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 40px;
  max-width: 340px;
}
.fh-dot-lane::before, .fh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #E8544E;
}
.fh-dot-lane::before { left: 0; }
.fh-dot-lane::after { right: 0; }

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
  justify-content: space-between;
}
.fh-track-num { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 20px; color: #FFFFFF; }
.fh-track-level-pill {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11px;
  color: #C93F3A;
  background: #FFFFFF;
  border-radius: 999px;
  padding: 4px 12px;
}

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

import TRACKS from "./forgeTracks";

export default function ForgeHub() {
  return (
    <div className="fh-shell">
      <style>{CSS}</style>
      <header className="fh-topbar">
        <span className="fh-topbar-title">FORGE</span>
      </header>

      <div className="fh-stage">
        <div className="fh-hero">
          <span className="fh-hero-eyebrow">Diagnosis · Thin working vocabulary</span>
          <h1 className="fh-hero-title">FORGE</h1>
          <p className="fh-hero-blurb">
            Every FORGE track is tailored to one learner profile. Pick the track built for your student.
          </p>
        </div>
        <div className="fh-lane"></div>

        <div className="fh-tracks-grid">
          {TRACKS.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/forge/${track.id}`} className="fh-track-card">
                <div className="fh-track-body">
                  <div>
                    <div className="fh-track-tags">
                      <span className="fh-tag">{track.occupation}</span>
                      <span className="fh-tag">{track.interest}</span>
                      <span className="fh-tag fh-tag--level">{track.level}</span>
                    </div>
                    <h3 className="fh-track-title">{track.title}</h3>
                    <p className="fh-track-desc">{track.blurb}</p>
                  </div>
                  <div className="fh-track-foot">
                    <span className="fh-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                    <span className="fh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="fh-track-card fh-track-card--ghost">
            <div className="fh-track-body">
              <div>
                <span className="fh-ghost-icon">+</span>
                <h3 className="fh-track-title fh-track-title--ghost">More tracks coming</h3>
                <p className="fh-track-desc">New profiles get added here as they're built.</p>
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

.fh-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.fh-shell * { box-sizing: border-box; }

.fh-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.fh-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4B8B92;
}

.fh-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 44px 28px 64px;
}

.fh-hero { max-width: 620px; }
.fh-hero-eyebrow {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E8544E;
  background: rgba(232,84,78,0.12);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.fh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 46px;
  color: #10646B;
  margin: 0 0 12px;
}
.fh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B8B92;
  margin: 0;
  line-height: 1.55;
}

.fh-lane { position: relative; height: 2px; background: #BFE6E1; margin: 30px 0 34px; }
.fh-lane::before, .fh-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #2AA8AE; }
.fh-lane::before { left: 0; }
.fh-lane::after { right: 0; }

.fh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.fh-track-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 16px;
  border-top: 4px solid #E8544E;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(16,100,107,0.12);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.fh-track-card:hover {
  box-shadow: 0 16px 30px rgba(16,100,107,0.18);
  transform: translateY(-3px);
}

.fh-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 22px 22px 20px; }
.fh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.fh-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #E8544E;
  background: rgba(232,84,78,0.10);
  border-radius: 999px;
  padding: 3px 10px;
}
.fh-tag--level { color: #4B8B92; background: rgba(42,168,174,0.12); }

.fh-track-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 21px;
  color: #10646B;
  margin: 0 0 6px;
}
.fh-track-desc {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8891;
  line-height: 1.5;
  margin: 0;
}
.fh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #EAF8F6;
}
.fh-track-meta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #4B8B92;
}
.fh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #E8544E;
  white-space: nowrap;
}

.fh-track-card--ghost {
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
  border-top-color: #BFE6E1;
  border: 2px dashed #BFE6E1;
  border-top: 2px dashed #BFE6E1;
  box-shadow: none;
}
.fh-track-card--ghost .fh-track-body { align-items: center; text-align: center; justify-content: center; }
.fh-ghost-icon {
  display: block;
  font-family: 'Baloo 2', cursive;
  font-size: 30px;
  color: #8FB9BC;
  margin-bottom: 6px;
}
.fh-track-title--ghost { color: #8FB9BC; }

@media (max-width: 640px) {
  .fh-tracks-grid { grid-template-columns: 1fr; }
}
`;

import TRACKS from "./shiftTracks";

export default function ShiftHub() {
  return (
    <div className="shh-shell">
      <style>{CSS}</style>
      <header className="shh-topbar">
        <span className="shh-topbar-title">SHIFT</span>
      </header>

      <div className="shh-stage">
        <div className="shh-hero">
          <span className="shh-hero-eyebrow">Diagnosis · Delayed tense correction</span>
          <h1 className="shh-hero-title">SHIFT</h1>
          <p className="shh-hero-blurb">
            Every SHIFT track is tailored to one diagnosed tense-accuracy gap. Pick the track built for your student.
          </p>
        </div>
        <div className="shh-lane"></div>

        <div className="shh-tracks-grid">
          {TRACKS.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/shift/${track.id}`} className="shh-track-card">
                <div className="shh-track-body">
                  <div>
                    <div className="shh-track-tags">
                      <span className="shh-tag">{track.gapFocus}</span>
                      <span className="shh-tag shh-tag--level">{track.level}</span>
                    </div>
                    <h3 className="shh-track-title">{track.title}</h3>
                    <p className="shh-track-desc">{track.blurb}</p>
                  </div>
                  <div className="shh-track-foot">
                    <span className="shh-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                    <span className="shh-track-cta">Open track →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div className="shh-track-card shh-track-card--ghost">
            <div className="shh-track-body">
              <div>
                <span className="shh-ghost-icon">+</span>
                <h3 className="shh-track-title shh-track-title--ghost">More tracks coming</h3>
                <p className="shh-track-desc">New diagnosed gaps get added here as they're built.</p>
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

.shh-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.shh-shell * { box-sizing: border-box; }

.shh-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.shh-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #4B8B92;
}

.shh-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 44px 28px 64px;
}

.shh-hero { max-width: 620px; }
.shh-hero-eyebrow {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2AA8AE;
  background: rgba(42,168,174,0.12);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.shh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 46px;
  color: #10646B;
  margin: 0 0 12px;
}
.shh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B8B92;
  margin: 0;
  line-height: 1.55;
}

.shh-lane { position: relative; height: 2px; background: #BFE6E1; margin: 30px 0 34px; }
.shh-lane::before, .shh-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #2AA8AE; }
.shh-lane::before { left: 0; }
.shh-lane::after { right: 0; }

.shh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.shh-track-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 16px;
  border-top: 4px solid #2AA8AE;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(16,100,107,0.12);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.shh-track-card:hover {
  box-shadow: 0 16px 30px rgba(16,100,107,0.18);
  transform: translateY(-3px);
}

.shh-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 22px 22px 20px; }
.shh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.shh-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #2AA8AE;
  background: rgba(42,168,174,0.10);
  border-radius: 999px;
  padding: 3px 10px;
}
.shh-tag--level { color: #4B8B92; background: rgba(42,168,174,0.12); }

.shh-track-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 21px;
  color: #10646B;
  margin: 0 0 6px;
}
.shh-track-desc {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8891;
  line-height: 1.5;
  margin: 0;
}
.shh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #EAF8F6;
}
.shh-track-meta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #4B8B92;
}
.shh-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #2AA8AE;
  white-space: nowrap;
}

.shh-track-card--ghost {
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
  border: 2px dashed #BFE6E1;
  border-top: 2px dashed #BFE6E1;
  box-shadow: none;
}
.shh-track-card--ghost .shh-track-body { align-items: center; text-align: center; justify-content: center; }
.shh-ghost-icon {
  display: block;
  font-family: 'Baloo 2', cursive;
  font-size: 30px;
  color: #8FB9BC;
  margin-bottom: 6px;
}
.shh-track-title--ghost { color: #8FB9BC; }

@media (max-width: 640px) {
  .shh-tracks-grid { grid-template-columns: 1fr; }
}
`;

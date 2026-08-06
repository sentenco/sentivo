import TRACKS from "./shiftTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";

// No track has a hub cover photo yet -- every card falls back to
// ImagePlaceholder until real art is generated per track (same lookup
// pattern as ForgeHub/AscendHub).
const COVERS = {};

export default function ShiftHub() {
  return (
    <div className="shh-shell">
      <style>{CSS}</style>
      <header className="shh-topbar">
        <span className="shh-topbar-title">SHIFT</span>
      </header>

      <div className="shh-stage">
        <div className="shh-hero">
          <span className="shh-hero-eyebrow">Gap identified · Slow tense self-repair</span>
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
                <div className="shh-track-cover">
                  {COVERS[track.id] ? (
                    <img className="shh-track-cover-img" src={COVERS[track.id]} alt={track.title} />
                  ) : (
                    <ImagePlaceholder note="Track cover photo" compact />
                  )}
                </div>
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
            <div className="shh-track-cover shh-track-cover--ghost">
              <span className="shh-ghost-icon">+</span>
            </div>
            <div className="shh-track-body">
              <div>
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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.shh-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF1EF 0%, #FFDBD5 55%, #FFC3BA 100%);
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
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98F84;
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
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.shh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 46px;
  color: #4A211B;
  margin: 0 0 12px;
}
.shh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #8C5C52;
  margin: 0;
  line-height: 1.55;
}

.shh-lane { position: relative; height: 2px; background: #FFD2C8; margin: 30px 0 34px; }
.shh-lane::before, .shh-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #E1483B; }
.shh-lane::before { left: 0; }
.shh-lane::after { right: 0; }

.shh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px;
}

.shh-track-card {
  display: flex;
  align-items: stretch;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 18px;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(160,50,35,0.07);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}
.shh-track-card:hover {
  border-color: #E1483B;
  box-shadow: 0 18px 36px rgba(160,50,35,0.14);
  transform: translateY(-2px);
}

.shh-track-cover {
  width: 168px;
  flex-shrink: 0;
  background: #FFEDE9;
}
.shh-track-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.shh-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 20px 22px; }
.shh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.shh-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #E1483B;
  background: rgba(225,72,59,0.1);
  border: 1px solid rgba(225,72,59,0.35);
  border-radius: 999px;
  padding: 3px 10px;
}
.shh-tag--level { color: #8C5C52; background: #FFEDE9; border-color: #FFD2C8; }

.shh-track-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #4A211B;
  margin: 0 0 6px;
}
.shh-track-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #8C5C52;
  line-height: 1.5;
  margin: 0;
}
.shh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #FFE4DD;
}
.shh-track-meta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #8C5C52;
}
.shh-track-cta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #E1483B;
  white-space: nowrap;
}

.shh-track-card--ghost { opacity: 0.6; cursor: default; pointer-events: none; }
.shh-track-cover--ghost {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px dashed #FFD2C8;
  background: transparent;
}
.shh-ghost-icon { font-family: 'Fredoka', sans-serif; font-size: 34px; color: #F0AFA5; }
.shh-track-title--ghost { color: #C98F84; }

@media (max-width: 640px) {
  .shh-track-card { flex-direction: column; }
  .shh-track-cover { width: 100%; aspect-ratio: 16 / 9; }
  .shh-track-cover--ghost { border-right: none; border-bottom: 2px dashed #FFD2C8; }
}
`;

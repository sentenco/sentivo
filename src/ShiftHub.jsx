import { useNavigate } from "react-router-dom";
import TRACKS from "./shiftTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";

// No track has a hub cover photo yet -- every card falls back to
// ImagePlaceholder until real art is generated per track (same lookup
// pattern as ForgeHub/AscendHub).
const COVERS = {};

export default function ShiftHub() {
  const navigate = useNavigate();

  return (
    <div className="shh-shell">
      <style>{CSS}</style>
      <header className="shh-topbar">
        <button type="button" className="shh-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="shh-topbar-title">SHIFT</span>
        <span className="shh-topbar-slot" />
      </header>

      <div className="shh-stage">
        <div className="shh-hero">
          <h1 className="shh-hero-title">SHIFT</h1>
          <p className="shh-hero-blurb">
            Every SHIFT track is tailored to one diagnosed tense-accuracy gap. Pick the track built for your student.
          </p>
        </div>

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
                  <div className="shh-track-tags">
                    <span className="shh-tag">{track.gapFocus}</span>
                    <span className="shh-tag shh-tag--level">{track.level}</span>
                  </div>
                  <h3 className="shh-track-title">{track.title}</h3>
                  <p className="shh-track-desc">{track.blurb}</p>
                  <span className="shh-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                </div>
              </a>
            );
          })}

          <div className="shh-track-card shh-track-card--ghost">
            <div className="shh-track-cover shh-track-cover--ghost">
              <span className="shh-ghost-icon">+</span>
            </div>
            <div className="shh-track-body">
              <h3 className="shh-track-title shh-track-title--ghost">More tracks coming</h3>
              <p className="shh-track-desc">New diagnosed gaps get added here as they're built.</p>
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
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.shh-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #4A211B;
  background: #FFB3A6;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.shh-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #C98F84;
}
.shh-topbar-slot { width: 90px; }

.shh-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.shh-hero { margin-bottom: 36px; }
.shh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #4A211B;
  margin: 0 0 10px;
}
.shh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #8C5C52;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.shh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.shh-track-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #FFD2C8;
  border-radius: 16px;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(160,50,35,0.06);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}
.shh-track-card:hover {
  border-color: #E1483B;
  box-shadow: 0 16px 32px rgba(160,50,35,0.12);
  transform: translateY(-2px);
}

.shh-track-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #FFEDE9;
}
.shh-track-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.shh-track-body { display: flex; flex-direction: column; gap: 8px; padding: 14px 16px 16px; }
.shh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
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
  font-size: 19px;
  color: #4A211B;
  margin: 0;
}
.shh-track-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: #8C5C52;
  line-height: 1.4;
  margin: 0;
}
.shh-track-meta {
  margin-top: auto;
  padding-top: 4px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #E1483B;
}

.shh-track-card--ghost { opacity: 0.6; cursor: default; pointer-events: none; }
.shh-track-cover--ghost {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #FFD2C8;
  background: transparent;
}
.shh-ghost-icon { font-family: 'Fredoka', sans-serif; font-size: 34px; color: #F0AFA5; }
.shh-track-title--ghost { color: #C98F84; }

@media (max-width: 820px) {
  .shh-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .shh-tracks-grid { grid-template-columns: 1fr; }
}
`;

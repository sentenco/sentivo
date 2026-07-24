import { useNavigate } from "react-router-dom";
import TRACKS from "./ascendTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import ascend1CoverImg from "./assets/ascend/track1-cover.jpeg";

// Tracks without a real cover photo yet fall back to ImagePlaceholder
// (same lookup pattern as FORGE's hub/Library covers).
const COVERS = {
  "ascend-1": ascend1CoverImg,
};

export default function AscendHub() {
  const navigate = useNavigate();

  return (
    <div className="ah-shell">
      <style>{CSS}</style>
      <header className="ah-topbar">
        <button type="button" className="ah-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="ah-topbar-title">ASCEND</span>
        <span className="ah-topbar-slot" />
      </header>

      <div className="ah-stage">
        <div className="ah-hero">
          <h1 className="ah-hero-title">ASCEND</h1>
          <p className="ah-hero-blurb">
            Every ASCEND track is tailored to one learner profile. Pick the track built for your student.
          </p>
        </div>

        <div className="ah-tracks-grid">
          {TRACKS.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/ascend/${track.id}`} className="ah-track-card">
                <div className="ah-track-cover">
                  {COVERS[track.id] ? (
                    <img className="ah-track-cover-img" src={COVERS[track.id]} alt={track.title} />
                  ) : (
                    <ImagePlaceholder note="Track cover photo" compact />
                  )}
                </div>
                <div className="ah-track-body">
                  <div className="ah-track-tags">
                    <span className="ah-tag">{track.theme}</span>
                    <span className="ah-tag ah-tag--level">{track.level}</span>
                  </div>
                  <h3 className="ah-track-title">{track.title}</h3>
                  <p className="ah-track-desc">{track.blurb}</p>
                  <span className="ah-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                </div>
              </a>
            );
          })}

          <div className="ah-track-card ah-track-card--ghost">
            <div className="ah-track-cover ah-track-cover--ghost">
              <span className="ah-ghost-icon">+</span>
            </div>
            <div className="ah-track-body">
              <h3 className="ah-track-title ah-track-title--ghost">More tracks coming</h3>
              <p className="ah-track-desc">New profiles get added here as they're built.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.ah-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #EAFBF6 0%, #D6F2E9 55%, #C3E9DC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ah-shell * { box-sizing: border-box; }

.ah-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.ah-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #17352E;
  background: #3FCDAF;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ah-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8AAFA5;
}
.ah-topbar-slot { width: 90px; }

.ah-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.ah-hero { margin-bottom: 36px; }
.ah-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #17352E;
  margin: 0 0 10px;
}
.ah-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #5C8177;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.ah-tracks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.ah-track-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #D3EFE6;
  border-radius: 16px;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(20,80,65,0.08);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}
.ah-track-card:hover {
  border-color: #3FCDAF;
  box-shadow: 0 16px 32px rgba(20,80,65,0.16);
  transform: translateY(-2px);
}

.ah-track-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #E9F7F2;
}
.ah-track-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.ah-track-body { display: flex; flex-direction: column; gap: 8px; padding: 14px 16px 16px; }
.ah-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ah-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #128571;
  background: rgba(18,133,113,0.14);
  border: 1px solid rgba(18,133,113,0.4);
  border-radius: 999px;
  padding: 3px 10px;
}
.ah-tag--level { color: #5C8177; background: #E9F7F2; border-color: #D3EFE6; }

.ah-track-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #17352E;
  margin: 0;
}
.ah-track-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: #5C8177;
  line-height: 1.4;
  margin: 0;
}
.ah-track-meta {
  margin-top: auto;
  padding-top: 4px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #128571;
}

.ah-track-card--ghost {
  opacity: 0.55;
  cursor: default;
  pointer-events: none;
}
.ah-track-cover--ghost {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #D3EFE6;
  background: transparent;
}
.ah-ghost-icon {
  font-family: 'Fredoka', sans-serif;
  font-size: 34px;
  color: #A8D9CB;
}
.ah-track-title--ghost { color: #8AAFA5; }

@media (max-width: 820px) {
  .ah-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .ah-tracks-grid { grid-template-columns: 1fr; }
}
`;

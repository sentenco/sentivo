import { useNavigate } from "react-router-dom";
import TRACKS from "./forgeTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import forge1CoverImg from "./assets/forge/track1-cover.jpeg";

// Cover photo per track, same lookup pattern as Library.jsx's FORGE_COVERS --
// falls back to ImagePlaceholder until a track gets a real photo.
const COVERS = {
  "forge-1": forge1CoverImg,
};

function slideCount(lesson) {
  if (!lesson) return 0;
  if (lesson.format === "picture") return 7 + lesson.words.length + (lesson.homeworkCheck ? 1 : 0);
  return 10;
}

export default function ForgeHub() {
  const navigate = useNavigate();

  return (
    <div className="fh-shell">
      <style>{CSS}</style>
      <header className="fh-topbar">
        <button type="button" className="fh-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="fh-topbar-title">FORGE</span>
        <span className="fh-topbar-slot" />
      </header>

      <div className="fh-stage">
        <div className="fh-hero">
          <h1 className="fh-hero-title">FORGE</h1>
          <p className="fh-hero-blurb">
            Every FORGE track is tailored to one learner profile. Pick the track built for your student.
          </p>
        </div>

        <div className="fh-tracks-grid">
          {TRACKS.map((track) => {
            const authored = track.lessons.filter(Boolean).length;
            return (
              <a key={track.id} href={`/library/forge/${track.id}`} className="fh-track-card">
                <div className="fh-track-cover">
                  {COVERS[track.id] ? (
                    <img className="fh-track-cover-img" src={COVERS[track.id]} alt={track.title} />
                  ) : (
                    <ImagePlaceholder note="Track cover photo" compact />
                  )}
                </div>
                <div className="fh-track-body">
                  <div className="fh-track-tags">
                    <span className="fh-tag">{track.occupation}</span>
                    <span className="fh-tag">{track.interest}</span>
                    <span className="fh-tag fh-tag--level">{track.level}</span>
                  </div>
                  <h3 className="fh-track-title">{track.title}</h3>
                  <p className="fh-track-desc">{track.blurb}</p>
                  <span className="fh-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                </div>
              </a>
            );
          })}

          <div className="fh-track-card fh-track-card--ghost">
            <div className="fh-track-cover fh-track-cover--ghost">
              <span className="fh-ghost-icon">+</span>
            </div>
            <div className="fh-track-body">
              <h3 className="fh-track-title fh-track-title--ghost">More tracks coming</h3>
              <p className="fh-track-desc">New profiles get added here as they're built.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.fh-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #FFF6E6 0%, #FBE7C6 50%, #F6D9AC 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.fh-shell * { box-sizing: border-box; }

.fh-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.fh-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2E2617;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.fh-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0A48C;
}
.fh-topbar-slot { width: 90px; }

.fh-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.fh-hero { margin-bottom: 36px; }
.fh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #2E2617;
  margin: 0 0 10px;
}
.fh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #6B5F49;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.fh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.fh-track-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 16px;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(43,35,20,0.06);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}
.fh-track-card:hover {
  border-color: #F2A65A;
  box-shadow: 0 16px 32px rgba(43,35,20,0.12);
  transform: translateY(-2px);
}

.fh-track-cover {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #FBF1DF;
}
.fh-track-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.fh-track-body { display: flex; flex-direction: column; gap: 8px; padding: 14px 16px 16px; }
.fh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.fh-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #C97A2E;
  background: rgba(242,166,90,0.12);
  border: 1px solid rgba(242,166,90,0.4);
  border-radius: 999px;
  padding: 3px 10px;
}
.fh-tag--level { color: #8B7F68; background: #FBF1DF; border-color: #EDDFC3; }

.fh-track-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #2E2617;
  margin: 0;
}
.fh-track-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: #6B5F49;
  line-height: 1.4;
  margin: 0;
}
.fh-track-meta {
  margin-top: auto;
  padding-top: 4px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #C97A2E;
}

.fh-track-card--ghost {
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
}
.fh-track-cover--ghost {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #EAD9B8;
  background: transparent;
}
.fh-ghost-icon {
  font-family: 'Fredoka', sans-serif;
  font-size: 34px;
  color: #D9C7A3;
}
.fh-track-title--ghost { color: #B0A48C; }

@media (max-width: 820px) {
  .fh-tracks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .fh-tracks-grid { grid-template-columns: 1fr; }
}
`;

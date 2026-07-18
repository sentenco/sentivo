import { useParams, useNavigate } from "react-router-dom";
import { getTrack } from "./forgeTracks";

export default function ForgeTrack() {
  const { trackId } = useParams();
  const navigate = useNavigate();
  const track = getTrack(trackId);

  if (!track) {
    return (
      <div className="ft-shell">
        <style>{CSS}</style>
        <header className="ft-topbar">
          <button type="button" className="ft-back-link" onClick={() => navigate("/library")}>
            ← Library
          </button>
        </header>
        <div className="ft-stage">
          <p className="ft-missing">Track not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ft-shell">
      <style>{CSS}</style>
      <header className="ft-topbar">
        <button type="button" className="ft-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <span className="ft-topbar-title">FORGE</span>
        <span className="ft-topbar-slot" />
      </header>

      <div className="ft-stage">
        <div className="ft-hero">
          <div className="ft-hero-tags">
            <span className="ft-tag">{track.occupation}</span>
            <span className="ft-tag">{track.interest}</span>
            <span className="ft-tag ft-tag--level">{track.level}</span>
          </div>
          <h1 className="ft-hero-title">{track.title}</h1>
          <p className="ft-hero-blurb">{track.blurb}</p>
        </div>

        <div className="ft-lessons-grid">
          {track.lessons.map((lesson, i) => {
            const num = i + 1;
            if (!lesson) {
              return (
                <div key={num} className="ft-lesson-tile ft-lesson-tile--locked">
                  <span className="ft-lesson-num">L{num}</span>
                  <span className="ft-lesson-status">Coming soon</span>
                </div>
              );
            }
            return (
              <button
                type="button"
                key={num}
                className="ft-lesson-tile ft-lesson-tile--live"
                onClick={() => navigate(`/library/forge/${track.id}/${num}`)}
              >
                <span className="ft-lesson-num">L{num}</span>
                <span className="ft-lesson-title">{lesson.title}</span>
                <span className="ft-lesson-technique">{lesson.technique}</span>
                <span className="ft-lesson-cta">Start →</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.ft-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #6C5E49 0%, #463F38 45%, #3E3933 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ft-shell * { box-sizing: border-box; }

.ft-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.ft-back-link {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #463F38;
  background: #F2A65A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.ft-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #9C9484;
}
.ft-topbar-slot { width: 90px; }

.ft-stage {
  flex: 1;
  width: 100%;
  max-width: 960px;
  padding: 40px 24px 60px;
}

.ft-missing {
  font-family: 'Quicksand', sans-serif;
  color: #C4BCA8;
  text-align: center;
  margin-top: 60px;
}

.ft-hero { margin-bottom: 36px; }
.ft-hero-tags { display: flex; gap: 8px; margin-bottom: 14px; }
.ft-tag {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #C9A876;
  background: rgba(242,166,90,0.10);
  border: 1px solid rgba(242,166,90,0.3);
  border-radius: 999px;
  padding: 4px 12px;
}
.ft-tag--level { color: #9C9484; background: #5C5449; border-color: #716553; }
.ft-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 38px;
  color: #F4EFE6;
  margin: 0 0 10px;
}
.ft-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #C4BCA8;
  margin: 0;
  max-width: 560px;
  line-height: 1.5;
}

.ft-lessons-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.ft-lesson-tile {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #504940;
  border: 1px solid #716553;
  border-radius: 14px;
  padding: 16px 16px 18px;
  min-height: 140px;
  text-align: left;
  font-family: inherit;
}

.ft-lesson-tile--locked {
  opacity: 0.45;
  align-items: flex-start;
  justify-content: center;
}
.ft-lesson-tile--live {
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.ft-lesson-tile--live:hover {
  border-color: #F2A65A;
  transform: translateY(-2px);
}

.ft-lesson-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #F2A65A;
}
.ft-lesson-status {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: #9C9484;
}
.ft-lesson-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: #F4EFE6;
  line-height: 1.25;
}
.ft-lesson-technique {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #C4BCA8;
}
.ft-lesson-cta {
  margin-top: auto;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #F2A65A;
}

@media (max-width: 900px) {
  .ft-lessons-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 560px) {
  .ft-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
`;

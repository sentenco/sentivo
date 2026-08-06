import TRACKS from "./forgeTracks";
import ImagePlaceholder from "./slides/ImagePlaceholder";

// No track has a hub cover photo yet -- every card falls back to
// ImagePlaceholder until real art is generated per track (same lookup
// pattern as AscendHub, ready for a COVERS[track.id] entry later).
const COVERS = {};

export default function ForgeHub() {
  return (
    <div className="fh-shell">
      <style>{CSS}</style>
      <header className="fh-topbar">
        <span className="fh-topbar-title">FORGE</span>
      </header>

      <div className="fh-stage">
        <div className="fh-hero">
          <span className="fh-hero-eyebrow">Gap identified · Thin working vocabulary</span>
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
                <div className="fh-track-cover">
                  {COVERS[track.id] ? (
                    <img className="fh-track-cover-img" src={COVERS[track.id]} alt={track.title} />
                  ) : (
                    <ImagePlaceholder note="Track cover photo" compact />
                  )}
                </div>
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
            <div className="fh-track-cover fh-track-cover--ghost">
              <span className="fh-ghost-icon">+</span>
            </div>
            <div className="fh-track-body">
              <div>
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
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.fh-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #B0A48C;
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
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #C97A2E;
  background: rgba(242,166,90,0.14);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.fh-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 46px;
  color: #2E2617;
  margin: 0 0 12px;
}
.fh-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #6B5F49;
  margin: 0;
  line-height: 1.55;
}

.fh-lane { position: relative; height: 2px; background: #EDDFC3; margin: 30px 0 34px; }
.fh-lane::before, .fh-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #F2A65A; }
.fh-lane::before { left: 0; }
.fh-lane::after { right: 0; }

.fh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px;
}

.fh-track-card {
  display: flex;
  align-items: stretch;
  background: #FFFFFF;
  border: 1px solid #EAD9B8;
  border-radius: 18px;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(43,35,20,0.07);
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}
.fh-track-card:hover {
  border-color: #F2A65A;
  box-shadow: 0 18px 36px rgba(43,35,20,0.13);
  transform: translateY(-2px);
}

.fh-track-cover {
  width: 168px;
  flex-shrink: 0;
  background: #FBF1DF;
}
.fh-track-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.fh-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 20px 22px; }
.fh-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
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
  font-size: 21px;
  color: #2E2617;
  margin: 0 0 6px;
}
.fh-track-desc {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #6B5F49;
  line-height: 1.5;
  margin: 0;
}
.fh-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #F3E9D3;
}
.fh-track-meta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #8B7F68;
}
.fh-track-cta {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #C97A2E;
  white-space: nowrap;
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
  border-right: 2px dashed #EAD9B8;
  background: transparent;
}
.fh-ghost-icon {
  font-family: 'Fredoka', sans-serif;
  font-size: 34px;
  color: #D9C7A3;
}
.fh-track-title--ghost { color: #B0A48C; }

@media (max-width: 640px) {
  .fh-track-card { flex-direction: column; }
  .fh-track-cover { width: 100%; aspect-ratio: 16 / 9; }
  .fh-track-cover--ghost { border-right: none; border-bottom: 2px dashed #EAD9B8; }
}
`;

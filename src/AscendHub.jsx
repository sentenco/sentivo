import TRACKS from "./ascendTracks";

function groupByCategory(tracks) {
  const order = [];
  const groups = {};
  tracks.forEach((track) => {
    const cat = track.category || "Other";
    if (!groups[cat]) {
      groups[cat] = [];
      order.push(cat);
    }
    groups[cat].push(track);
  });
  return order.map((cat) => ({ category: cat, tracks: groups[cat] }));
}

export default function AscendHub() {
  const categories = groupByCategory(TRACKS);

  return (
    <div className="ah-shell">
      <style>{CSS}</style>
      <header className="ah-topbar">
        <span className="ah-topbar-title">ASCEND</span>
      </header>

      <div className="ah-stage">
        <div className="ah-hero">
          <span className="ah-hero-eyebrow">Diagnosis · Ideas come out jumbled</span>
          <h1 className="ah-hero-title">ASCEND</h1>
          <p className="ah-hero-blurb">
            Every ASCEND track is tailored to one learner profile. Pick the track built for your student.
          </p>
        </div>
        <div className="ah-lane"></div>

        {categories.map(({ category, tracks }) => (
          <section className="ah-category" key={category}>
            <h2 className="ah-category-title">{category}</h2>
            <div className="ah-tracks-grid">
              {tracks.map((track) => {
                const authored = track.lessons.filter(Boolean).length;
                return (
                  <a key={track.id} href={`/library/ascend/${track.id}`} className="ah-track-card">
                    <div className="ah-track-body">
                      <div>
                        <div className="ah-track-tags">
                          <span className="ah-tag">{track.theme}</span>
                          <span className="ah-tag ah-tag--level">{track.level}</span>
                        </div>
                        <h3 className="ah-track-title">{track.title}</h3>
                        <p className="ah-track-desc">{track.blurb}</p>
                      </div>
                      <div className="ah-track-foot">
                        <span className="ah-track-meta">{authored} of {track.lessons.length} lessons ready</span>
                        <span className="ah-track-cta">Open track →</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        <section className="ah-category">
          <h2 className="ah-category-title">Coming soon</h2>
          <div className="ah-tracks-grid">
            <div className="ah-track-card ah-track-card--ghost">
              <div className="ah-track-body">
                <div>
                  <span className="ah-ghost-icon">+</span>
                  <h3 className="ah-track-title ah-track-title--ghost">More categories coming</h3>
                  <p className="ah-track-desc">New profiles get added here as they're built.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.ah-shell {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(160deg, #EAFBF8 0%, #DFF4FA 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.ah-shell * { box-sizing: border-box; }

.ah-topbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.ah-topbar-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4B8B92;
}

.ah-stage {
  flex: 1;
  width: 100%;
  max-width: 1080px;
  padding: 44px 28px 64px;
}

.ah-hero { max-width: 620px; }
.ah-hero-eyebrow {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #A9720A;
  background: rgba(232,168,61,0.20);
  border-radius: 999px;
  padding: 6px 14px;
  margin-bottom: 16px;
}
.ah-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 46px;
  color: #10646B;
  margin: 0 0 12px;
}
.ah-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  color: #4B8B92;
  margin: 0;
  line-height: 1.55;
}

.ah-lane { position: relative; height: 2px; background: #BFE6E1; margin: 30px 0 34px; }
.ah-lane::before, .ah-lane::after { content: ""; position: absolute; top: -3px; width: 8px; height: 8px; border-radius: 50%; background: #E8A83D; }
.ah-lane::before { left: 0; }
.ah-lane::after { right: 0; }

.ah-category { margin-bottom: 34px; }
.ah-category:last-child { margin-bottom: 0; }
.ah-category-title {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #A9720A;
  margin: 0 0 16px;
}

.ah-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.ah-track-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 16px;
  border-top: 4px solid #E8A83D;
  overflow: hidden;
  text-align: left;
  font-family: inherit;
  text-decoration: none;
  box-shadow: 0 10px 22px rgba(16,100,107,0.12);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}
.ah-track-card:hover {
  box-shadow: 0 16px 30px rgba(16,100,107,0.18);
  transform: translateY(-3px);
}

.ah-track-body { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; padding: 22px 22px 20px; }
.ah-track-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.ah-tag {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #A9720A;
  background: rgba(232,168,61,0.18);
  border-radius: 999px;
  padding: 3px 10px;
}
.ah-tag--level { color: #4B8B92; background: rgba(42,168,174,0.12); }

.ah-track-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 21px;
  color: #10646B;
  margin: 0 0 6px;
}
.ah-track-desc {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #5C8891;
  line-height: 1.5;
  margin: 0;
}
.ah-track-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid #EAF8F6;
}
.ah-track-meta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #4B8B92;
}
.ah-track-cta {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 800;
  font-size: 12.5px;
  color: #A9720A;
  white-space: nowrap;
}

.ah-track-card--ghost {
  opacity: 0.7;
  cursor: default;
  pointer-events: none;
  border: 2px dashed #BFE6E1;
  border-top: 2px dashed #BFE6E1;
  box-shadow: none;
}
.ah-track-card--ghost .ah-track-body { align-items: center; text-align: center; justify-content: center; }
.ah-ghost-icon {
  display: block;
  font-family: 'Baloo 2', cursive;
  font-size: 30px;
  color: #8FB9BC;
  margin-bottom: 6px;
}
.ah-track-title--ghost { color: #8FB9BC; }

@media (max-width: 640px) {
  .ah-tracks-grid { grid-template-columns: 1fr; }
}
`;

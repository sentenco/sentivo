import { useNavigate } from "react-router-dom";

export default function SequenceHub() {
  const navigate = useNavigate();

  return (
    <div className="sqh-shell">
      <style>{CSS}</style>
      <div className="sqh-stage">
        <div className="sqh-topbar">
          <button type="button" className="sqh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="sqh-brand-logo" />entivo
          </button>
        </div>

        <div className="sqh-hero">
          <h1 className="sqh-hero-title">Sequence</h1>
          <p className="sqh-hero-blurb">
            Sequence takes words a student already knows and drills putting them in the order that actually makes a sentence. Built for students who have the right words but can't arrange them.
          </p>
        </div>

        <div className="sqh-dot-lane"></div>

        <div className="sqh-tracks-grid">
          <div className="sqh-track-card sqh-track-card--ghost">
            <span className="sqh-ghost-plus">+</span>
            <div className="sqh-ghost-label">Tracks coming soon</div>
            <div className="sqh-ghost-sub">Sequence is still being built, no tracks are ready yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.sqh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(92,107,192,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(92,107,192,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.sqh-shell * { box-sizing: border-box; }

.sqh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.sqh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.sqh-brand {
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
.sqh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.sqh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.sqh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(92,107,192,0.30),
    3px 3px 0 rgba(92,107,192,0.30),
    4.5px 4.5px 0 rgba(92,107,192,0.30),
    5px 10px 22px rgba(16,100,107,0.22);
}
.sqh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.sqh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 40px;
  max-width: 340px;
}
.sqh-dot-lane::before, .sqh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5C6BC0;
}
.sqh-dot-lane::before { left: 0; }
.sqh-dot-lane::after { right: 0; }

.sqh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.sqh-track-card--ghost {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 260px;
  border: 2px dashed #CDEBEA;
  border-radius: 22px;
  background: transparent;
  padding: 22px;
}
.sqh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.sqh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.sqh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .sqh-tracks-grid { grid-template-columns: 1fr; }
}
`;

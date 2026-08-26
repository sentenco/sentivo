import { useNavigate } from "react-router-dom";

export default function DeriveHub() {
  const navigate = useNavigate();

  return (
    <div className="dvh-shell">
      <style>{CSS}</style>
      <div className="dvh-stage">
        <div className="dvh-topbar">
          <button type="button" className="dvh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="dvh-brand-logo" />entivo
          </button>
        </div>

        <div className="dvh-hero">
          <h1 className="dvh-hero-title">Derive</h1>
          <p className="dvh-hero-blurb">
            Derive drills choosing the right word-family member on demand, developing instead of development, decide instead of decision. Built for students who know the root but reach for the wrong form of it.
          </p>
        </div>

        <div className="dvh-dot-lane"></div>

        <div className="dvh-tracks-grid">
          <div className="dvh-track-card dvh-track-card--ghost">
            <span className="dvh-ghost-plus">+</span>
            <div className="dvh-ghost-label">Tracks coming soon</div>
            <div className="dvh-ghost-sub">Derive is still being built, no tracks are ready yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.dvh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(214,71,140,0.16), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(214,71,140,0.16), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.dvh-shell * { box-sizing: border-box; }

.dvh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.dvh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.dvh-brand {
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
.dvh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.dvh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.dvh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(214,71,140,0.30),
    3px 3px 0 rgba(214,71,140,0.30),
    4.5px 4.5px 0 rgba(214,71,140,0.30),
    5px 10px 22px rgba(16,100,107,0.22);
}
.dvh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.dvh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 40px;
  max-width: 340px;
}
.dvh-dot-lane::before, .dvh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #D6478C;
}
.dvh-dot-lane::before { left: 0; }
.dvh-dot-lane::after { right: 0; }

.dvh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.dvh-track-card--ghost {
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
.dvh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.dvh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.dvh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .dvh-tracks-grid { grid-template-columns: 1fr; }
}
`;

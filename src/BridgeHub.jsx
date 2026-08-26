import { useNavigate } from "react-router-dom";

export default function BridgeHub() {
  const navigate = useNavigate();

  return (
    <div className="brh-shell">
      <style>{CSS}</style>
      <div className="brh-stage">
        <div className="brh-topbar">
          <button type="button" className="brh-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
            <img src="/logo-sentivo.png" alt="" className="brh-brand-logo" />entivo
          </button>
        </div>

        <div className="brh-hero">
          <h1 className="brh-hero-title">Bridge</h1>
          <p className="brh-hero-blurb">
            Bridge swaps dead air and native-language filler sounds for natural stalling phrases that carry a student across a stuck moment. Built for students with no strategy for filling gaps.
          </p>
        </div>

        <div className="brh-dot-lane"></div>

        <div className="brh-tracks-grid">
          <div className="brh-track-card brh-track-card--ghost">
            <span className="brh-ghost-plus">+</span>
            <div className="brh-ghost-label">Tracks coming soon</div>
            <div className="brh-ghost-sub">Bridge is still being built, no tracks are ready yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=IBM+Plex+Sans:wght@500;600;700;800&display=swap');

.brh-shell {
  width: 100%;
  min-height: 100vh;
  background-color: #DEF3FB;
  background-image:
    radial-gradient(circle at 6% 8%, rgba(79,174,122,0.18), transparent 30%),
    radial-gradient(circle at 96% 14%, rgba(42,168,174,0.20), transparent 34%),
    radial-gradient(circle at 18% 96%, rgba(42,168,174,0.20), transparent 28%),
    radial-gradient(circle at 88% 90%, rgba(79,174,122,0.18), transparent 26%),
    radial-gradient(rgba(16,100,107,0.10) 1.4px, transparent 1.4px),
    linear-gradient(165deg, #EAFBF8 0%, #DEF3FB 100%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, auto, auto, auto, 28px 28px, auto;
  background-attachment: fixed;
  box-sizing: border-box;
}
.brh-shell * { box-sizing: border-box; }

.brh-stage { width: 100%; max-width: 1080px; margin: 0 auto; padding: 26px 28px 64px; }

.brh-topbar { display: flex; align-items: center; padding-bottom: 34px; }
.brh-brand {
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
.brh-brand-logo { height: 30px; width: auto; display: block; margin-right: -4px; }

.brh-hero { max-width: 620px; margin: 0 auto; text-align: center; }
.brh-hero-title {
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 56px;
  color: #10646B;
  margin: 0 0 16px;
  letter-spacing: -0.01em;
  text-shadow:
    1.5px 1.5px 0 rgba(79,174,122,0.32),
    3px 3px 0 rgba(79,174,122,0.32),
    4.5px 4.5px 0 rgba(79,174,122,0.32),
    5px 10px 22px rgba(16,100,107,0.22);
}
.brh-hero-blurb {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16.5px;
  line-height: 1.6;
  color: #4B8B92;
  margin: 0 auto;
  max-width: 520px;
}

.brh-dot-lane {
  position: relative;
  height: 2px;
  background: #CDEBEA;
  margin: 34px auto 40px;
  max-width: 340px;
}
.brh-dot-lane::before, .brh-dot-lane::after {
  content: "";
  position: absolute;
  top: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4FAE7A;
}
.brh-dot-lane::before { left: 0; }
.brh-dot-lane::after { right: 0; }

.brh-tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 22px;
}

.brh-track-card--ghost {
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
.brh-ghost-plus { font-family: 'Baloo 2', cursive; font-size: 34px; font-weight: 700; color: #4B8B92; opacity: 0.5; display: block; margin-bottom: 8px; }
.brh-ghost-label { font-family: 'Baloo 2', cursive; font-weight: 700; font-size: 17px; color: #4B8B92; opacity: 0.7; }
.brh-ghost-sub { font-family: 'IBM Plex Sans', sans-serif; font-size: 12.5px; margin-top: 6px; color: #4B8B92; opacity: 0.6; }

@media (max-width: 640px) {
  .brh-tracks-grid { grid-template-columns: 1fr; }
}
`;

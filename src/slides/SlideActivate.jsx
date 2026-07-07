const MODE_COLOR = {
  Performance: "#D85A30",
  Model: "#3D6B8C",
  Output: "#1B2A4A",
};
const PHASE_LABEL = {
  attempt: "Activate · Attempt",
  retry: "Activate · Retry",
  single: "Activate",
};

export default function SlideActivate({ content }) {
  const accent = MODE_COLOR[content.mode] || "#1B2A4A";
  const label = PHASE_LABEL[content.phase] || "Activate";

  return (
    <div className="slact-slide">
      <style>{CSS}</style>
      <div className="slact-body">
        <div className="slact-label">{label}</div>
        <p className="slact-text">{content.text}</p>
      </div>
      <div className="slact-footer" style={{ background: accent }}>
        <span>{content.mode}</span>
      </div>
    </div>
  );
}

const CSS = `
.slact-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFF8F2;
  font-family: 'Inter', sans-serif;
}
.slact-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.slact-label {
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.slact-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #1B2A4A;
  margin: 0;
}
.slact-footer {
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slact-footer span {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}
`;

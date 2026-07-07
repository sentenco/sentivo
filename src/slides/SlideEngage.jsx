import { fitFontSize } from "./fitFontSize";

const MODE_COLOR = {
  Performance: "#D85A30",
  Model: "#3D6B8C",
  Output: "#1B2A4A",
};

export default function SlideEngage({ content }) {
  const accent = MODE_COLOR[content.mode] || "#1B2A4A";
  const textSize = fitFontSize(content.text, { max: 23, min: 16, softLimit: 130 });

  return (
    <div className="sleng-slide">
      <style>{CSS}</style>
      <div className="sleng-body">
        <div className="sleng-label">Engage</div>
        <p className="sleng-text" style={{ fontSize: `${textSize}px` }}>
          {content.text}
        </p>
      </div>
      <div className="sleng-footer" style={{ background: accent }}>
        <span>{content.mode}</span>
      </div>
    </div>
  );
}

const CSS = `
.sleng-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFF8F2;
  font-family: 'Inter', sans-serif;
}
.sleng-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sleng-label {
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.sleng-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
  text-align: justify;
  text-indent: 1.6em;
  hyphens: auto;
}
.sleng-footer {
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sleng-footer span {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}
`;

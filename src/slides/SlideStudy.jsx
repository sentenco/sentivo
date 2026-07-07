import { fitFontSize } from "./fitFontSize";

const MODE_COLOR = {
  Performance: "#D85A30",
  Model: "#3D6B8C",
  Output: "#1B2A4A",
};

export default function SlideStudy({ content }) {
  const accent = MODE_COLOR[content.mode] || "#1B2A4A";
  const label = content.stageLabel || "Study";
  const textSize = fitFontSize(content.text, { max: 21, min: 15, softLimit: 160 });
  const compareSize = fitFontSize(
    `${content.comparisonA || ""} ${content.comparisonB || ""}`,
    { max: 16, min: 12.5, softLimit: 160 }
  );

  return (
    <div className="slstd-slide">
      <style>{CSS}</style>
      <div className="slstd-body">
        <div className="slstd-label">{label}</div>
        {content.comparisonA && content.comparisonB ? (
          <div className="slstd-compare">
            <p className="slstd-compare-item" style={{ fontSize: `${compareSize}px` }}>
              {content.comparisonA}
            </p>
            <p className="slstd-compare-item" style={{ fontSize: `${compareSize}px` }}>
              {content.comparisonB}
            </p>
          </div>
        ) : (
          <p className="slstd-text" style={{ fontSize: `${textSize}px` }}>
            {content.text}
          </p>
        )}
      </div>
      <div className="slstd-footer" style={{ background: accent }}>
        <span>{content.mode}</span>
      </div>
    </div>
  );
}

const CSS = `
.slstd-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFF8F2;
  font-family: 'Inter', sans-serif;
}
.slstd-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.slstd-label {
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.slstd-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
  text-align: justify;
  text-indent: 1.6em;
  hyphens: auto;
}
.slstd-compare {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.slstd-compare-item {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  line-height: 1.5;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #EAD9C8;
  border-radius: 6px;
  padding: 10px 14px;
  margin: 0;
  text-align: justify;
  text-indent: 1.4em;
  hyphens: auto;
}
.slstd-footer {
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slstd-footer span {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}
`;

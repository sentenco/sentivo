const MODE_COLOR = {
  Performance: "#B5502E",
  Model: "#5C6F8A",
  Output: "#3B6D11",
};

export default function SlideScenario({ content }) {
  const mode = content.mode || "";
  const accent = MODE_COLOR[mode] || "#1B2A4A";

  return (
    <div className="slsc-slide">
      <style>{CSS}</style>
      <div className="slsc-header">
        {mode && (
          <span className="slsc-mode" style={{ borderColor: accent, color: accent }}>
            {mode}
          </span>
        )}
        {content.patterns && <h2 className="slsc-patterns">{content.patterns}</h2>}
      </div>
      <div className="slsc-body">
        {content.purpose && (
          <div className="slsc-section">
            <div className="slsc-label">Purpose</div>
            <p className="slsc-text">{content.purpose}</p>
          </div>
        )}
        {content.elicit && (
          <div className="slsc-section">
            <div className="slsc-label">Elicit</div>
            <p className="slsc-text">{content.elicit}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.slsc-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #F7F5EF;
}
.slsc-header {
  padding: 18px 26px 12px;
  border-bottom: 1px solid #DEDAD0;
  flex-shrink: 0;
}
.slsc-mode {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 3px;
  padding: 3px 10px;
  margin-bottom: 8px;
}
.slsc-patterns {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 19px;
  color: #1B2A4A;
  margin: 0;
  line-height: 1.3;
}
.slsc-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 14px 26px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.slsc-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #B5502E;
  margin-bottom: 4px;
}
.slsc-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
}
`;

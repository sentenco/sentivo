const MODE_LABEL = {
  Performance: "Speaking Task",
  Model: "Look & Notice",
  Output: "Writing Task",
};
const MODE_COLOR = {
  Performance: "#B5502E",
  Model: "#5C6F8A",
  Output: "#3B6D11",
};

export default function SlideScenario({ content }) {
  const mode = content.mode || "";
  const accent = MODE_COLOR[mode] || "#1B2A4A";
  const label = content.label || MODE_LABEL[mode] || "Task";

  return (
    <div className="slsc-slide">
      <style>{CSS}</style>
      <div className="slsc-header">
        <span className="slsc-mode" style={{ borderColor: accent, color: accent }}>
          {label}
        </span>
      </div>
      <div className="slsc-body">
        <p className="slsc-task">{content.task}</p>
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
  padding: 20px 28px 0;
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
}
.slsc-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 18px 28px 24px;
  display: flex;
  align-items: center;
}
.slsc-task {
  font-family: 'Source Serif 4', serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
  color: #1B2A4A;
  margin: 0;
}
`;

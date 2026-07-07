const MODE_COLOR = {
  Performance: "#D85A30",
  Model: "#3D6B8C",
  Output: "#1B2A4A",
};

export default function SlideAdvTitle({ content }) {
  const mode = content.mode || "";
  const accent = MODE_COLOR[mode] || "#1B2A4A";

  return (
    <div className="sladvt-slide">
      <style>{CSS}</style>
      <div className="sladvt-body">
        <div className="sladvt-eyebrow">
          {content.unit}
          {content.lessonLabel ? ` · ${content.lessonLabel}` : ""}
        </div>
        <div className="sladvt-title">{content.title}</div>
      </div>
      <div className="sladvt-footer" style={{ background: accent }}>
        <span>{mode}</span>
      </div>
    </div>
  );
}

const CSS = `
.sladvt-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFF8F2;
  font-family: 'Inter', sans-serif;
}
.sladvt-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 20px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sladvt-eyebrow {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: #B08D77;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.sladvt-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 21px;
  color: #1B2A4A;
  line-height: 1.3;
}
.sladvt-footer {
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sladvt-footer span {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}
`;

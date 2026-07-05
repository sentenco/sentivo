
export default function SlideHeader({ tag, title, subtitle, gradient, isAdult }) {
  return (
    <div
      className={`slh-header ${isAdult ? "is-adult" : ""}`}
      style={gradient ? { background: gradient } : undefined}
    >
      <style>{CSS}</style>
      {tag && <span className="slh-tag">{tag}</span>}
      {title && <h2 className="slh-title">{title}</h2>}
      {subtitle && <p className="slh-subtitle">{subtitle}</p>}
    </div>
  );
}

const CSS = `
.slh-header {
  background: #1B2A4A;
  padding: 14px 24px 12px;
  flex-shrink: 0;
}
.slh-tag {
  display: inline-block;
  background: #FF7A59;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 6px;
}
.slh-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 19px;
  color: #fff;
  margin: 0;
}
.slh-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 12.5px;
  color: rgba(255,255,255,0.65);
  margin: 3px 0 0;
}

.slh-header.is-adult {
  background: #1B2A4A;
  padding: 16px 26px 14px;
}
.slh-header.is-adult .slh-tag {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.09em;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 3px;
  color: rgba(255,255,255,0.85);
}
.slh-header.is-adult .slh-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.1px;
}
.slh-header.is-adult .slh-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: rgba(255,255,255,0.62);
}
`;

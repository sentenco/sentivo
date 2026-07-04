
export default function SlideHeader({ tag, title, subtitle, gradient }) {
  return (
    <div
      className="slh-header"
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
`;


export default function SlideTitle({ content, lesson }) {
  const title = content.title || lesson?.title || "Untitled lesson";
  const badge =
    content.badge ||
    [lesson?.level, lesson?.age_track].filter(Boolean).join(" · ");

  return (
    <div className="slt-slide">
      <style>{CSS}</style>
      {content.image_url && (
        <img className="slt-image" src={content.image_url} alt="" />
      )}
      <div className="slt-overlay" />
      <div className="slt-content">
        {badge && <span className="slt-badge">{badge}</span>}
        <h1 className="slt-title">{title}</h1>
      </div>
    </div>
  );
}

const CSS = `
.slt-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FDF8F0;
  overflow: hidden;
}
.slt-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slt-overlay {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 65%;
  background: linear-gradient(to top, rgba(0,0,0,0.58), rgba(0,0,0,0));
}
.slt-content {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 24px 28px;
}
.slt-badge {
  display: inline-block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 10px;
}
.slt-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  margin: 0;
  line-height: 1.15;
}
`;

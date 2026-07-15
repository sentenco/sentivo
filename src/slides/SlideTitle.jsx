import ImagePlaceholder from "./ImagePlaceholder";

export default function SlideTitle({ content, lesson }) {
  const title = content.title || lesson?.title || "Untitled lesson";
  const badge =
    content.badge ||
    [lesson?.level, lesson?.age_track].filter(Boolean).join(" · ");
  const isAdult = lesson?.age_track === "adults";
  const hasImage = !!content.image_url;

  return (
    <div className={`slt-slide ${isAdult ? "is-adult" : ""} ${hasImage ? "" : "no-image"}`}>
      <style>{CSS}</style>
      {hasImage ? (
        <>
          <img className="slt-image" src={content.image_url} alt="" />
          <div className="slt-overlay" />
          <div className="slt-content">
            {badge && <span className="slt-badge">{badge}</span>}
            <h1 className="slt-title">{title}</h1>
            {content.subtitle && <p className="slt-subtitle">{content.subtitle}</p>}
          </div>
        </>
      ) : (
        <>
          <div className="slt-placeholder-area">
            <ImagePlaceholder note={content.image_note} />
          </div>
          <div className="slt-content slt-content--flat">
            {badge && <span className="slt-badge">{badge}</span>}
            <h1 className="slt-title">{title}</h1>
            {content.subtitle && <p className="slt-subtitle">{content.subtitle}</p>}
          </div>
        </>
      )}
    </div>
  );
}

const CSS = `
.slt-slide {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--k-bg, #FDF8F0);
  overflow: hidden;
}
.slt-slide.no-image {
  display: flex;
  flex-direction: column;
}
.slt-placeholder-area {
  flex: 1;
  min-height: 0;
  padding: 16px 20px 0;
}
.slt-placeholder-area .img-ph { border-radius: 14px; }
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
.slt-content--flat {
  position: static;
  padding: 14px 24px 18px;
  flex-shrink: 0;
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
.slt-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  color: rgba(255,255,255,0.8);
  margin: 8px 0 0;
  max-width: 480px;
  line-height: 1.5;
}
.slt-content--flat .slt-badge {
  color: var(--k-accent-dark, #C2452F);
  background: var(--k-tint, #FFF3E9);
  border-color: transparent;
}
.slt-content--flat .slt-title,
.slt-content--flat .slt-subtitle {
  color: #1B2A4A;
}
.slt-content--flat .slt-subtitle { opacity: 0.72; }

/* ── Adults theme: editorial, muted, serif/sans pairing ── */
.slt-slide.is-adult {
  background: #F7F5EF;
}
.slt-slide.is-adult .slt-overlay {
  background: linear-gradient(to top, rgba(27,42,74,0.82), rgba(27,42,74,0.05));
}
.slt-slide.is-adult .slt-badge {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.09em;
  border-radius: 3px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.55);
}
.slt-slide.is-adult .slt-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  letter-spacing: -0.2px;
}
.slt-slide.is-adult .slt-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: rgba(255,255,255,0.82);
}
`;

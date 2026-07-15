import SlideHeader from "./SlideHeader";
import ImagePlaceholder from "./ImagePlaceholder";

export default function SlideReading({ content, lesson }) {
  const questions = content.questions || [];
  const isAdult = lesson?.age_track === "adults";
  const showImageColumn = !!(content.image_url || content.image_note);

  return (
    <div className={`slr-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Reading"}
        title={content.title || "Read and Answer"}
        subtitle={content.subtitle || "Read the text, then answer the questions below."}
        isAdult={isAdult}
      />
      <div className="slr-body">
        <div className={`slr-columns ${showImageColumn ? "" : "slr-columns--text-only"}`}>
          <p className="slr-text">{content.text}</p>
          {showImageColumn && (
            <div className="slr-image-wrap">
              {content.image_url ? (
                <img src={content.image_url} alt="" />
              ) : (
                <ImagePlaceholder note={content.image_note} compact />
              )}
            </div>
          )}
        </div>
        {questions.length > 0 && (
          <div className="slr-questions">
            {questions.map((q, i) => (
              <span className="slr-chip" key={i}>
                {q}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.slr-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slr-body {
  flex: 1;
  min-height: 0;
  padding: 14px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.slr-columns {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
}
.slr-columns--text-only {
  grid-template-columns: 1fr;
  justify-items: center;
}
.slr-columns--text-only .slr-text { max-width: 520px; text-align: center; }
.slr-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 19px;
  line-height: 1.55;
  color: #1B2A4A;
  margin: 0;
}
.slr-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--k-bg, #FFFCF2);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}
.slr-image-wrap img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slr-questions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.slr-chip {
  background: var(--k-bg-cool, #FFF3D2);
  color: var(--k-accent-dark, #E8A400);
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  padding: 7px 14px;
  border-radius: 999px;
}

/* ── Adults theme: single-column editorial text, no image dependency ── */
.slr-slide.is-adult .slr-body { background: #F7F5EF; }
.slr-slide.is-adult .slr-columns {
  grid-template-columns: 1fr;
  justify-items: center;
}
.slr-slide.is-adult .slr-text {
  font-family: 'Source Serif 4', serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.65;
  color: #1B2A4A;
  max-width: 480px;
  text-align: left;
}
.slr-slide.is-adult .slr-chip {
  background: #fff;
  border: 1px solid #DEDAD0;
  color: #6B6458;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13px;
  border-radius: 4px;
}
`;

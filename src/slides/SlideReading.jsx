import SlideHeader from "./SlideHeader";

export default function SlideReading({ content }) {
  const questions = content.questions || [];

  return (
    <div className="slr-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Reading"}
        title={content.title || "Read and Answer"}
        subtitle={content.subtitle || "Read the text, then answer the questions below."}
      />
      <div className="slr-body">
        <div className="slr-columns">
          <p className="slr-text">{content.text}</p>
          {content.image_url && (
            <div className="slr-image-wrap">
              <img src={content.image_url} alt="" />
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
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
}
.slr-columns {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
}
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
  background: #FDF8F0;
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
  background: #F4F0FF;
  color: #6B5B95;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  padding: 7px 14px;
  border-radius: 999px;
}
`;

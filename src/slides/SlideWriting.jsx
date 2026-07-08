import SlideHeader from "./SlideHeader";
import { renderBlankLine } from "./dialogueUtils";

export default function SlideWriting({ content, lesson }) {
  const prompts = content.prompts || [];
  const isAdult = lesson?.age_track === "adults";

  return (
    <div className={`slwr-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Writing"}
        title={content.title || "Write about you"}
        subtitle={content.subtitle || "Complete each sentence below."}
        isAdult={isAdult}
      />
      <div className={`slwr-body ${content.image_url ? "has-image" : ""}`}>
        <div className="slwr-list">
          {prompts.map((prompt, i) => (
            <div className="slwr-row" key={i}>
              <span className="slwr-num">{i + 1}</span>
              <span className="slwr-sentence">
                {renderBlankLine(prompt, "#1B2A4A")}
              </span>
            </div>
          ))}
        </div>
        {content.image_url && (
          <div className="slwr-image-area">
            <img className="slwr-image" src={content.image_url} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
.slwr-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slwr-body {
  flex: 1;
  min-height: 0;
  padding: 18px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  overflow: auto;
}
.slwr-body.has-image {
  flex-direction: row;
  align-items: center;
  gap: 24px;
}
.slwr-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
}
.slwr-image-area {
  flex-shrink: 0;
  width: 38%;
  height: 100%;
  max-height: 240px;
  border-radius: 16px;
  background: #FDF8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 12px;
}
.slwr-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  mix-blend-mode: multiply;
}
.slwr-row {
  display: flex;
  align-items: center;
  gap: 14px;
}
.slwr-num {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: #FFC876;
  color: #7A4E00;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slwr-sentence {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 16.5px;
  color: #1B2A4A;
}

/* ── Adults theme ── */
.slwr-slide.is-adult .slwr-body { background: #F7F5EF; gap: 14px; }
.slwr-slide.is-adult .slwr-image-area { background: #F7F5EF; border: 1px solid #DEDAD0; border-radius: 6px; }
.slwr-slide.is-adult .slwr-row {
  background: #fff;
  border: 1px solid #DEDAD0;
  border-radius: 6px;
  padding: 12px 16px;
}
.slwr-slide.is-adult .slwr-num {
  border-radius: 3px;
  background: transparent;
  border: 1px solid #B5502E;
  color: #B5502E;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.slwr-slide.is-adult .slwr-sentence {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15.5px;
  color: #1B2A4A;
}
`;

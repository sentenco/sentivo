import SlideHeader from "./SlideHeader";
import { renderBlankLine } from "./dialogueUtils";

export default function SlideWriting({ content }) {
  const prompts = content.prompts || [];

  return (
    <div className="slwr-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Writing"}
        title={content.title || "Write about you"}
        subtitle={content.subtitle || "Complete each sentence below."}
      />
      <div className="slwr-body">
        {prompts.map((prompt, i) => (
          <div className="slwr-row" key={i}>
            <span className="slwr-num">{i + 1}</span>
            <span className="slwr-sentence">
              {renderBlankLine(prompt, "#1B2A4A")}
            </span>
          </div>
        ))}
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
`;

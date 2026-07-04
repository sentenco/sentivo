import SlideHeader from "./SlideHeader";
import { renderBlankLine } from "./dialogueUtils";

const SPEAKER_COLOR = { A: "#FF7A59", B: "#2CA97F" };

export default function SlideSpeaking({ content }) {
  const dialogue = content.dialogue || [];

  return (
    <div className="sls-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Speaking"}
        title={content.title || "Your Turn"}
        subtitle={content.subtitle || "Practice speaking with a partner."}
      />
      <div className="sls-body">
        <div className="sls-dialogue">
          {dialogue.map((line, i) => (
            <div className="sls-line" key={i}>
              <span
                className="sls-speaker"
                style={{ color: SPEAKER_COLOR[line.speaker] || "#1B2A4A" }}
              >
                {line.speaker}:
              </span>
              <span className="sls-text">
                {renderBlankLine(line.text, SPEAKER_COLOR[line.speaker] || "#1B2A4A")}
              </span>
            </div>
          ))}
        </div>
        {content.note && <div className="sls-note">{content.note}</div>}
      </div>
    </div>
  );
}

const CSS = `
.sls-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sls-body {
  flex: 1;
  min-height: 0;
  padding: 14px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
}
.sls-dialogue {
  background: #F7F8FA;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sls-line {
  font-family: 'Quicksand', sans-serif;
  font-size: 15.5px;
  color: #1B2A4A;
}
.sls-speaker {
  font-weight: 700;
  margin-right: 6px;
}
.sls-text { font-weight: 600; }
.sls-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #94A0B8;
  text-align: center;
}
`;

export default function SlidePhrases({ content }) {
  const teacher = content.teacher || [];
  const student = content.student || [];

  const turns = [];
  const max = Math.max(teacher.length, student.length);
  for (let i = 0; i < max; i++) {
    if (teacher[i] !== undefined) turns.push({ speaker: "teacher", text: teacher[i] });
    if (student[i] !== undefined) turns.push({ speaker: "student", text: student[i] });
  }

  return (
    <div className="slp-slide">
      <style>{CSS}</style>
      <div className="slp-header">
        <span className="slp-tag">{content.tag || "Key Phrases"}</span>
        <h2 className="slp-title">{content.title || "Practice the Conversation"}</h2>
      </div>
      <div className="slp-thread">
        {turns.map((turn, i) => (
          <div className={`slp-turn slp-turn--${turn.speaker}`} key={i}>
            <div className="slp-avatar">{turn.speaker === "teacher" ? "T" : "S"}</div>
            <div className="slp-bubble">{turn.text}</div>
          </div>
        ))}
      </div>
      {content.note && <div className="slp-note">{content.note}</div>}
    </div>
  );
}

const CSS = `
.slp-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slp-header {
  padding: 10px 24px 4px;
  flex-shrink: 0;
}
.slp-tag {
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
  margin-bottom: 4px;
}
.slp-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1B2A4A;
  margin: 0;
}
.slp-thread {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 0 24px;
  overflow: hidden;
}
.slp-turn {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 74%;
}
.slp-turn--teacher { align-self: flex-start; }
.slp-turn--student { align-self: flex-end; flex-direction: row-reverse; }
.slp-avatar {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #fff;
}
.slp-turn--teacher .slp-avatar { background: #FF7A59; }
.slp-turn--student .slp-avatar { background: #2CA97F; }
.slp-bubble {
  border-radius: 14px;
  padding: 8px 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #1B2A4A;
}
.slp-turn--teacher .slp-bubble {
  background: #FAECE7;
  border-bottom-left-radius: 4px;
}
.slp-turn--student .slp-bubble {
  background: #E1F5EE;
  border-bottom-right-radius: 4px;
}
.slp-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  color: #94A0B8;
  text-align: center;
  padding: 6px 20px 8px;
  flex-shrink: 0;
}
`;

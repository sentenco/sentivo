import ImagePlaceholder from "./ImagePlaceholder";

export default function SlidePhrases({ content, lesson }) {
  const teacher = content.teacher || [];
  const student = content.student || [];
  const isAdult = lesson?.age_track === "adults";

  const turns = [];
  const max = Math.max(teacher.length, student.length);
  for (let i = 0; i < max; i++) {
    if (teacher[i] !== undefined) turns.push({ speaker: "teacher", text: teacher[i] });
    if (student[i] !== undefined) turns.push({ speaker: "student", text: student[i] });
  }

  return (
    <div className={`slp-slide ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>
      <div className="slp-scene">
        {content.image_url ? (
          <img className="slp-scene-img" src={content.image_url} alt="" />
        ) : (
          <ImagePlaceholder note={content.image_note} compact />
        )}
      </div>
      <div className="slp-main">
        <div className="slp-header">
          <span className="slp-tag">{content.tag || "Highlight"}</span>
          <h2 className="slp-title">{content.title || "Practice the Conversation"}</h2>
        </div>
        <div className="slp-thread">
          {turns.map((turn, i) => (
            <div className={`slp-turn slp-turn--${turn.speaker}`} key={i}>
              <div className="slp-avatar">
                {isAdult
                  ? turn.speaker === "teacher" ? "Q" : "A"
                  : turn.speaker === "teacher" ? "T" : "S"}
              </div>
              <div className="slp-bubble">{turn.text}</div>
            </div>
          ))}
        </div>
        {content.note && <div className="slp-note">{content.note}</div>}
      </div>
    </div>
  );
}

const CSS = `
.slp-slide {
  width: 100%;
  height: 100%;
  display: flex;
}
.slp-scene {
  flex-shrink: 0;
  width: 34%;
  padding: 14px 0 14px 14px;
}
.slp-scene .img-ph { border-radius: 16px; }
.slp-scene-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}
.slp-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.slp-header {
  padding: 14px 20px 4px;
  flex-shrink: 0;
}
.slp-tag {
  display: inline-block;
  background: var(--k-accent, #FFC933);
  color: var(--k-btn-text, #fff);
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
  font-size: 18px;
  color: #1B2A4A;
  margin: 0;
}
.slp-thread {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  padding: 6px 20px;
}
.slp-turn {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 92%;
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
.slp-turn--teacher .slp-avatar { background: var(--k-accent, #FFC933); color: var(--k-btn-text, #fff); }
.slp-turn--student .slp-avatar { background: var(--k-pop, #8B5CF6); }
.slp-bubble {
  border-radius: 14px;
  padding: 8px 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1B2A4A;
}
.slp-turn--teacher .slp-bubble {
  background: var(--k-bg-cool, #FFF3D2);
  border-bottom-left-radius: 4px;
}
.slp-turn--student .slp-bubble {
  background: var(--k-tint, #FFE4A3);
  border-bottom-right-radius: 4px;
}
.slp-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #94A0B8;
  text-align: center;
  padding: 4px 16px 10px;
  flex-shrink: 0;
}

/* ── Adults theme: quoted model-answer transcript, no scene image ── */
.slp-slide.is-adult { background: #F7F5EF; }
.slp-slide.is-adult .slp-scene { display: none; }
.slp-slide.is-adult .slp-main { width: 100%; }
.slp-slide.is-adult .slp-tag {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.09em;
  background: transparent;
  border: 1px solid #DEDAD0;
  border-radius: 3px;
  color: #6B6458;
}
.slp-slide.is-adult .slp-title {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 18px;
  color: #1B2A4A;
}
.slp-slide.is-adult .slp-avatar {
  border-radius: 3px;
  width: auto;
  min-width: 26px;
  height: 22px;
  padding: 0 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.04em;
}
.slp-slide.is-adult .slp-turn--teacher .slp-avatar { background: transparent; border: 1px solid #B7ADA0; color: #6B6458; }
.slp-slide.is-adult .slp-turn--student .slp-avatar { background: #1B2A4A; color: #fff; }
.slp-slide.is-adult .slp-bubble {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
  line-height: 1.5;
}
.slp-slide.is-adult .slp-turn--teacher .slp-bubble {
  background: #fff;
  border: 1px solid #DEDAD0;
  border-bottom-left-radius: 5px;
  color: #6B6458;
}
.slp-slide.is-adult .slp-turn--student .slp-bubble {
  background: #fff;
  border: 1px solid #1B2A4A;
  border-bottom-right-radius: 5px;
  color: #1B2A4A;
  font-weight: 500;
}
.slp-slide.is-adult .slp-note {
  font-family: 'Inter', sans-serif;
  color: #8A8272;
}
`;

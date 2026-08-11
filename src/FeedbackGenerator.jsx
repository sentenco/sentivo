import { useState } from "react";

const TEACHER_NAME_KEY = "sentivo_teacher_name";

function buildFeedbackText({ dateLabel, studentName, topic, strengths, improvements, homework, comment, teacherName }) {
  const lines = [`Lesson Feedback — ${dateLabel}`];
  if (studentName.trim()) lines.push(`For: ${studentName.trim()}`);
  lines.push("");
  if (topic.trim()) { lines.push("What we covered:", topic.trim(), ""); }
  if (strengths.trim()) { lines.push("Strengths:", strengths.trim(), ""); }
  if (improvements.trim()) { lines.push("Areas to improve:", improvements.trim(), ""); }
  if (homework.trim()) { lines.push("Homework / Next steps:", homework.trim(), ""); }
  if (comment.trim()) { lines.push(comment.trim(), ""); }
  if (teacherName.trim()) lines.push(`— ${teacherName.trim()}`);
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export default function FeedbackGenerator() {
  const [teacherName, setTeacherName] = useState(() => localStorage.getItem(TEACHER_NAME_KEY) || "");
  const [studentName, setStudentName] = useState("");
  const [topic, setTopic] = useState("");
  const [strengths, setStrengths] = useState("");
  const [improvements, setImprovements] = useState("");
  const [homework, setHomework] = useState("");
  const [comment, setComment] = useState("");
  const [copied, setCopied] = useState(false);

  const dateLabel = new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  const hasAnyContent = [studentName, topic, strengths, improvements, homework, comment].some((v) => v.trim());
  const feedbackText = buildFeedbackText({ dateLabel, studentName, topic, strengths, improvements, homework, comment, teacherName });

  function handleCopy() {
    navigator.clipboard.writeText(feedbackText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleClear() {
    setStudentName("");
    setTopic("");
    setStrengths("");
    setImprovements("");
    setHomework("");
    setComment("");
  }

  return (
    <div className="fbg-shell">
      <style>{CSS}</style>
      <header className="fbg-topbar">
        <span className="fbg-badge">📋</span>
        <div>
          <h1 className="fbg-title">Lesson Feedback</h1>
          <p className="fbg-sub">Fill this in after class, then copy it to share with your student.</p>
        </div>
      </header>

      <div className="fbg-body">
        <div className="fbg-form">
          <label className="fbg-field">
            <span className="fbg-label">Your name</span>
            <input
              type="text"
              className="fbg-input"
              value={teacherName}
              onChange={(e) => { setTeacherName(e.target.value); localStorage.setItem(TEACHER_NAME_KEY, e.target.value); }}
              placeholder="Teacher name"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">Student name</span>
            <input
              type="text"
              className="fbg-input"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Who was this lesson for?"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">What we covered</span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Present perfect, travel vocabulary"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">Strengths</span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={strengths}
              onChange={(e) => setStrengths(e.target.value)}
              placeholder="What went well today?"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">Areas to improve</span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={improvements}
              onChange={(e) => setImprovements(e.target.value)}
              placeholder="What to keep working on"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">Homework / Next steps</span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={homework}
              onChange={(e) => setHomework(e.target.value)}
              placeholder="Anything to practice before next time"
            />
          </label>
          <label className="fbg-field">
            <span className="fbg-label">Additional comment <span className="fbg-optional">(optional)</span></span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Anything else worth mentioning"
            />
          </label>
          {hasAnyContent && (
            <button type="button" className="fbg-clear-btn" onClick={handleClear}>Clear all fields</button>
          )}
        </div>

        <div className="fbg-preview-col">
          <div className="fbg-preview-head">
            <span className="fbg-preview-label">Preview</span>
            <button type="button" className="fbg-copy-btn" onClick={handleCopy} disabled={!hasAnyContent}>
              {copied ? "✓ Copied" : "⧉ Copy feedback"}
            </button>
          </div>
          <pre className="fbg-preview">{hasAnyContent ? feedbackText : "Fill in the form to build your feedback message…"}</pre>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.fbg-shell {
  min-height: 100vh;
  background: #FFFDFB;
  color: #2B2A4A;
  font-family: 'Quicksand', sans-serif;
  padding: 24px;
}
.fbg-shell * { box-sizing: border-box; }

.fbg-topbar { display: flex; align-items: flex-start; gap: 12px; max-width: 920px; margin: 0 auto 22px; }
.fbg-badge {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
  background: rgba(255,107,74,0.12); font-size: 19px;
}
.fbg-title { font-family: 'Fredoka', sans-serif; font-size: 21px; font-weight: 700; margin: 0 0 2px; }
.fbg-sub { font-size: 13px; color: #8B84A3; margin: 0; }

.fbg-body {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 18px;
  align-items: start;
}

.fbg-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
}
.fbg-field { display: flex; flex-direction: column; gap: 5px; }
.fbg-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: #5A5876; }
.fbg-optional { font-weight: 500; color: #B0ABC2; text-transform: none; }
.fbg-input, .fbg-textarea {
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #F8F7FB;
  border: 1.5px solid rgba(43,42,74,0.1);
  border-radius: 10px;
  padding: 9px 11px;
  outline: none;
  resize: vertical;
}
.fbg-input:focus, .fbg-textarea:focus { border-color: #FF6B4A; }
.fbg-input::placeholder, .fbg-textarea::placeholder { color: #B0ABC2; }

.fbg-clear-btn {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  color: #8B84A3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 2px;
}
.fbg-clear-btn:hover { color: #C24E3A; }

.fbg-preview-col {
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fbg-preview-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.fbg-preview-label {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8B84A3;
}
.fbg-copy-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #fff;
  background: #FF6B4A;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
  transition: filter 0.15s;
}
.fbg-copy-btn:hover:not(:disabled) { filter: brightness(0.93); }
.fbg-copy-btn:disabled { background: #EFE9E5; color: #B9AF9C; cursor: default; }

.fbg-preview {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  line-height: 1.6;
  color: #2B2A4A;
  background: #fff;
  border: 1.5px dashed rgba(43,42,74,0.16);
  border-radius: 16px;
  padding: 18px;
  min-height: 320px;
}

@media (max-width: 720px) {
  .fbg-body { grid-template-columns: 1fr; }
  .fbg-preview-col { position: static; }
}
`;

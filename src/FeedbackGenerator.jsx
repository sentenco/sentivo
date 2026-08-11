import { useState } from "react";

const TEACHER_NAME_KEY = "sentivo_teacher_name";

const CATEGORY_ICONS = {
  grammar: "📝",
  vocabulary: "📚",
  fluency: "🗣️",
  listening: "👂",
  participation: "🙌",
};

const CATEGORIES = [
  {
    key: "grammar",
    label: "Grammar",
    strengths: [
      "used correct verb tenses",
      "built accurate, well-formed sentences",
      "used articles and prepositions correctly",
      "asked well-structured questions",
      "used correct word order",
      "applied new grammar rules correctly",
    ],
    improvements: [
      "review subject-verb agreement",
      "practice past tense forms",
      "work on word order in questions",
      "review article usage (a / an / the)",
      "practice using prepositions correctly",
      "review singular and plural forms",
    ],
  },
  {
    key: "vocabulary",
    label: "Vocabulary",
    strengths: [
      "used new vocabulary confidently",
      "chose precise, natural word choices",
      "used topic-related words well",
      "used a wide range of vocabulary",
      "used expressions and idioms naturally",
      "explained unfamiliar words in English",
    ],
    improvements: [
      "expand everyday vocabulary range",
      "practice using new words in context",
      "work on word collocations",
      "reduce reliance on repetitive words",
      "review commonly confused word pairs",
      "practice paraphrasing unfamiliar words",
    ],
  },
  {
    key: "fluency",
    label: "Pronunciation & Fluency",
    strengths: [
      "spoke clearly and confidently",
      "had smooth, natural pacing",
      "pronounced tricky sounds well",
      "used natural intonation",
      "spoke with very little hesitation",
      "linked words smoothly when speaking",
    ],
    improvements: [
      "slow down for clearer pronunciation",
      "practice stress on longer words",
      "reduce hesitation while speaking",
      "work on intonation and rhythm",
      "practice specific problem sounds",
      "practice speaking in longer, connected sentences",
    ],
  },
  {
    key: "listening",
    label: "Listening & Comprehension",
    strengths: [
      "understood instructions quickly",
      "followed the conversation easily",
      "picked up on context clues well",
      "responded appropriately to questions",
      "understood natural, fast speech well",
      "caught small details in listening tasks",
    ],
    improvements: [
      "listen for key details more carefully",
      "practice following longer instructions",
      "work on understanding faster speech",
      "practice listening without relying on text",
      "review commonly misheard words",
      "practice summarizing what was heard",
    ],
  },
  {
    key: "participation",
    label: "Participation & Effort",
    strengths: [
      "stayed engaged the whole lesson",
      "asked great questions",
      "tried new expressions without hesitation",
      "put in strong effort throughout",
      "volunteered answers confidently",
      "stayed positive with corrections and feedback",
    ],
    improvements: [
      "speak up with more confidence",
      "try responding without translating first",
      "practice thinking directly in English",
      "participate more actively in discussions",
      "take more risks with new language",
      "ask for help when something is unclear",
    ],
  },
];

function greetingPool(name) {
  return [
    `Hi ${name}, great class today!`,
    `Hello ${name}! Here's a quick note about today's lesson.`,
    `Nice work today, ${name}!`,
    `Hi ${name}, thanks for a wonderful lesson today.`,
    `Hey ${name}, here's how today's class went.`,
  ];
}

function closingPool(name) {
  return [
    `Keep up the great work, ${name}!`,
    `You're making excellent progress — well done!`,
    `Great effort today — see you next class!`,
    `Awesome job today, ${name}! Keep it up.`,
    `You should be proud of your progress — nice work!`,
    `Fantastic effort today — keep pushing forward!`,
    `Really solid lesson, ${name} — great job!`,
  ];
}

const TRANSITIONS = [
  "Here's a focus area for next time.",
  "One thing to keep working on:",
  "A good next step for next class:",
  "Going forward, keep an eye on this:",
  "Something worth practicing before next time:",
];

const STRENGTH_TEMPLATES = [
  (label, items) => `${label} was a strength — you ${items}.`,
  (label, items) => `In terms of ${label.toLowerCase()}, you ${items}.`,
  (label, items) => `When it comes to ${label.toLowerCase()}, you ${items}.`,
  (label, items) => `On the ${label.toLowerCase()} side, you ${items}.`,
  (label, items) => `For ${label.toLowerCase()}, you ${items}.`,
];

const IMPROVE_TEMPLATES = [
  (label, items) => `For ${label.toLowerCase()}, try to ${items}.`,
  (label, items) => `With ${label.toLowerCase()}, it would help to ${items}.`,
  (label, items) => `A good focus for ${label.toLowerCase()} is to ${items}.`,
  (label, items) => `On the ${label.toLowerCase()} side, aim to ${items}.`,
  (label, items) => `Let's work on ${label.toLowerCase()} — try to ${items}.`,
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function joinList(items) {
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function itemKey(catKey, item) {
  return `${catKey}::${item}`;
}

function teacherDisplayName(rawName) {
  const trimmed = (rawName || "").trim();
  if (!trimmed) return "";
  return `Teacher ${trimmed.replace(/^teacher\s+/i, "")}`;
}

function buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements, note }) {
  const name = studentName.trim() || "there";
  const greeting = pickRandom(greetingPool(name));
  const closing = pickRandom(closingPool(name));

  const strengthTemplates = shuffle(STRENGTH_TEMPLATES);
  let sIdx = 0;
  const strengthSentences = CATEGORIES.map((cat) => {
    const picked = cat.strengths.filter((item) => selectedStrengths.has(itemKey(cat.key, item)));
    if (!picked.length) return null;
    const template = strengthTemplates[sIdx % strengthTemplates.length];
    sIdx++;
    return template(cat.label, joinList(picked));
  }).filter(Boolean);

  const improveTemplates = shuffle(IMPROVE_TEMPLATES);
  let iIdx = 0;
  const improvementSentences = CATEGORIES.map((cat) => {
    const picked = cat.improvements.filter((item) => selectedImprovements.has(itemKey(cat.key, item)));
    if (!picked.length) return null;
    const template = improveTemplates[iIdx % improveTemplates.length];
    iIdx++;
    return template(cat.label, joinList(picked));
  }).filter(Boolean);

  const paragraphs = [greeting];

  paragraphs.push(
    strengthSentences.length
      ? strengthSentences.join(" ")
      : "You worked hard and stayed engaged throughout the lesson."
  );

  if (improvementSentences.length) {
    paragraphs.push(`${pickRandom(TRANSITIONS)} ${improvementSentences.join(" ")}`);
  }

  if (note && note.trim()) {
    paragraphs.push(note.trim());
  }

  paragraphs.push(closing);

  const signature = teacherDisplayName(teacherName);
  if (signature) paragraphs.push(`— ${signature}`);

  return paragraphs.join("\n\n");
}

function ChipList({ catKey, items, selected, onToggle, tone }) {
  return (
    <div className="fbg-chip-row">
      {items.map((item) => {
        const key = itemKey(catKey, item);
        const active = selected.has(key);
        return (
          <button
            key={key}
            type="button"
            className={`fbg-chip fbg-chip--${tone}${active ? " is-active" : ""}`}
            onClick={() => onToggle(key)}
            aria-pressed={active}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function CategoryRow({ category, selectedStrengths, selectedImprovements, onToggleStrength, onToggleImprovement }) {
  return (
    <div className="fbg-cat-block">
      <div className="fbg-cat-block-label">
        <span className="fbg-cat-icon" aria-hidden="true">{CATEGORY_ICONS[category.key]}</span>
        {category.label}
      </div>
      <div className="fbg-cat-cols">
        <ChipList catKey={category.key} items={category.strengths} selected={selectedStrengths} onToggle={onToggleStrength} tone="strength" />
        <ChipList catKey={category.key} items={category.improvements} selected={selectedImprovements} onToggle={onToggleImprovement} tone="improve" />
      </div>
    </div>
  );
}

export default function FeedbackGenerator() {
  const [teacherName, setTeacherName] = useState(() => localStorage.getItem(TEACHER_NAME_KEY) || "");
  const [studentName, setStudentName] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState(() => new Set());
  const [selectedImprovements, setSelectedImprovements] = useState(() => new Set());
  const [note, setNote] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);

  const hasAnySelection = selectedStrengths.size > 0 || selectedImprovements.size > 0;
  const hasAnyContent = hasAnySelection || studentName.trim() || note.trim();

  function toggleStrength(key) {
    setSelectedStrengths((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function toggleImprovement(key) {
    setSelectedImprovements((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function handleGenerate() {
    const text = buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements, note });
    setGeneratedText(text);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleClear() {
    setSelectedStrengths(new Set());
    setSelectedImprovements(new Set());
    setStudentName("");
    setNote("");
    setGeneratedText("");
    setCopied(false);
  }

  const studentTrimmed = studentName.trim();
  const teacherDisplay = teacherDisplayName(teacherName);

  return (
    <div className="fbg-shell">
      <style>{CSS}</style>
      <header className="fbg-topbar">
        <span className="fbg-badge">📋</span>
        <div>
          <h1 className="fbg-title">Lesson Feedback</h1>
          <p className="fbg-sub">Check off what applies, then generate a ready-to-share paragraph.</p>
        </div>
      </header>

      <div className="fbg-body">
        <div className="fbg-form">
          <div className="fbg-names">
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
          </div>

          <div className="fbg-cols-head">
            <span className="fbg-cols-head-item fbg-cols-head-item--strength">✓ What went well</span>
            <span className="fbg-cols-head-item fbg-cols-head-item--improve">→ What to work on</span>
          </div>

          {CATEGORIES.map((cat) => (
            <CategoryRow
              key={cat.key}
              category={cat}
              selectedStrengths={selectedStrengths}
              selectedImprovements={selectedImprovements}
              onToggleStrength={toggleStrength}
              onToggleImprovement={toggleImprovement}
            />
          ))}

          <label className="fbg-field fbg-note-field">
            <span className="fbg-label">Anything else? <span className="fbg-optional">(optional)</span></span>
            <textarea
              className="fbg-textarea"
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add anything specific we didn't cover above — it'll be woven into the message."
            />
          </label>

          {hasAnyContent && (
            <button type="button" className="fbg-clear-btn" onClick={handleClear}>Clear all</button>
          )}
        </div>

        <div className="fbg-preview-col">
          <div className="fbg-preview-card">
            <div className="fbg-preview-accent" />
            <div className="fbg-preview-head">
              <div>
                <span className="fbg-preview-label">Preview</span>
                {hasAnySelection && (
                  <span className="fbg-selection-count">
                    {selectedStrengths.size} went well · {selectedImprovements.size} to work on
                  </span>
                )}
              </div>
              <div className="fbg-preview-actions">
                <button type="button" className="fbg-generate-btn" onClick={handleGenerate}>
                  {generatedText ? "🔁 Regenerate" : "✨ Generate feedback"}
                </button>
                {generatedText && (
                  <button type="button" className="fbg-copy-btn" onClick={handleCopy}>
                    {copied ? "✓ Copied" : "⧉ Copy"}
                  </button>
                )}
              </div>
            </div>
            {(studentTrimmed || teacherDisplay) && (
              <div className="fbg-preview-meta">
                {studentTrimmed && <span>To {studentTrimmed}</span>}
                {studentTrimmed && teacherDisplay && <span className="fbg-preview-meta-sep">·</span>}
                {teacherDisplay && <span>From {teacherDisplay}</span>}
              </div>
            )}
            <pre className="fbg-preview">
              {generatedText || "Check off some qualities on the left, then generate feedback…"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.fbg-shell {
  min-height: 100vh;
  background:
    radial-gradient(1100px 560px at 88% -12%, rgba(255,107,74,0.10), transparent 60%),
    radial-gradient(900px 480px at -8% 112%, rgba(47,166,107,0.07), transparent 60%),
    #FFFDFB;
  color: #2B2A4A;
  font-family: 'Quicksand', sans-serif;
  padding: 28px 24px;
}
.fbg-shell * { box-sizing: border-box; }

.fbg-topbar { display: flex; align-items: flex-start; gap: 14px; max-width: 1180px; margin: 0 auto 24px; }
.fbg-badge {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
  background: linear-gradient(135deg, #FF6B4A, #FF9466);
  box-shadow: 0 8px 18px rgba(255,107,74,0.32);
  font-size: 20px;
}
.fbg-title { font-family: 'Fredoka', sans-serif; font-size: 23px; font-weight: 700; margin: 0 0 3px; letter-spacing: -0.01em; }
.fbg-sub { font-size: 13.5px; color: #8B84A3; margin: 0; }

.fbg-body {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
  align-items: start;
}

.fbg-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.08);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 16px 40px rgba(43,42,74,0.07);
}
.fbg-names { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.fbg-field { display: flex; flex-direction: column; gap: 5px; }
.fbg-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: #5A5876; }
.fbg-optional { font-weight: 500; color: #B0ABC2; text-transform: none; }
.fbg-input, .fbg-textarea {
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #F8F7FB;
  border: 1.5px solid rgba(43,42,74,0.1);
  border-radius: 12px;
  padding: 10px 12px;
  outline: none;
}
.fbg-textarea { resize: vertical; min-height: 60px; font-family: inherit; }
.fbg-input:focus, .fbg-textarea:focus { border-color: #FF6B4A; }
.fbg-input::placeholder, .fbg-textarea::placeholder { color: #B0ABC2; }

.fbg-cols-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.fbg-cols-head-item {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px;
  padding: 7px 13px;
  border-radius: 999px;
  width: fit-content;
}
.fbg-cols-head-item--strength { background: rgba(47,166,107,0.11); color: #1F7A4C; }
.fbg-cols-head-item--improve { background: rgba(224,138,60,0.11); color: #A8611E; }

.fbg-cat-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #FBF9F6;
  border: 1px solid rgba(43,42,74,0.06);
  border-radius: 16px;
  padding: 14px 16px 16px;
}
.fbg-cat-block-label {
  display: flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; color: #A6A1BD;
}
.fbg-cat-icon { font-size: 14px; }
.fbg-cat-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; align-items: start; }
.fbg-chip-row { display: flex; flex-wrap: wrap; align-content: flex-start; gap: 6px; }

.fbg-chip {
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #5A5876;
  background: #fff;
  border: 1.5px solid rgba(43,42,74,0.1);
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(43,42,74,0.03);
  transition: background 0.12s, border-color 0.12s, color 0.12s, box-shadow 0.12s, transform 0.12s;
}
.fbg-chip:hover { border-color: rgba(43,42,74,0.22); transform: translateY(-1px); box-shadow: 0 4px 10px rgba(43,42,74,0.08); }
.fbg-chip--strength.is-active {
  background: linear-gradient(180deg, rgba(47,166,107,0.16), rgba(47,166,107,0.09));
  border-color: #2FA66B; color: #1F7A4C;
  box-shadow: 0 3px 10px rgba(47,166,107,0.16);
}
.fbg-chip--improve.is-active {
  background: linear-gradient(180deg, rgba(224,138,60,0.16), rgba(224,138,60,0.09));
  border-color: #E08A3C; color: #A8611E;
  box-shadow: 0 3px 10px rgba(224,138,60,0.16);
}
.fbg-chip--strength.is-active::before { content: "✓ "; }
.fbg-chip--improve.is-active::before { content: "→ "; }

.fbg-note-field { padding-top: 2px; }

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
}
.fbg-clear-btn:hover { color: #C24E3A; }

.fbg-preview-col {
  position: sticky;
  top: 24px;
}
.fbg-preview-card {
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.08);
  border-radius: 22px;
  box-shadow: 0 16px 40px rgba(43,42,74,0.08);
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fbg-preview-accent {
  position: absolute; top: 0; left: 0; right: 0; height: 5px;
  background: linear-gradient(90deg, #FF6B4A, #FFB199);
}
.fbg-preview-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-top: 4px; }
.fbg-preview-label {
  display: block;
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8B84A3;
}
.fbg-selection-count { display: block; font-size: 11.5px; font-weight: 600; color: #B0ABC2; margin-top: 2px; }
.fbg-preview-actions { display: flex; gap: 8px; }
.fbg-generate-btn, .fbg-copy-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 9px 16px;
  cursor: pointer;
  transition: filter 0.15s, transform 0.15s, box-shadow 0.15s;
  white-space: nowrap;
}
.fbg-generate-btn {
  background: linear-gradient(135deg, #FF6B4A, #FF8A63);
  box-shadow: 0 6px 16px rgba(255,107,74,0.28);
}
.fbg-copy-btn { background: #2B2A4A; }
.fbg-generate-btn:hover, .fbg-copy-btn:hover { filter: brightness(0.95); transform: translateY(-1px); }

.fbg-preview-meta { font-size: 12px; font-weight: 600; color: #8B84A3; display: flex; gap: 6px; }
.fbg-preview-meta-sep { color: #D8D3E6; }

.fbg-preview {
  margin: 12px 0 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  line-height: 1.7;
  color: #2B2A4A;
  background: #FFFCFA;
  border: 1px solid rgba(43,42,74,0.06);
  border-radius: 14px;
  padding: 16px 18px;
  min-height: 300px;
}

@media (max-width: 760px) {
  .fbg-body { grid-template-columns: 1fr; }
  .fbg-names { grid-template-columns: 1fr; }
  .fbg-cols-head { grid-template-columns: 1fr; gap: 6px; }
  .fbg-cat-cols { grid-template-columns: 1fr; gap: 10px; }
  .fbg-preview-col { position: static; }
}
`;

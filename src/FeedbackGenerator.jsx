import { useState } from "react";

const TEACHER_NAME_KEY = "sentivo_teacher_name";

const STRENGTH_CATEGORIES = [
  {
    key: "grammar",
    label: "Grammar",
    items: [
      "used correct verb tenses",
      "built accurate, well-formed sentences",
      "used articles and prepositions correctly",
      "asked well-structured questions",
    ],
  },
  {
    key: "vocabulary",
    label: "Vocabulary",
    items: [
      "used new vocabulary confidently",
      "chose precise, natural word choices",
      "used topic-related words well",
    ],
  },
  {
    key: "fluency",
    label: "Pronunciation & Fluency",
    items: [
      "spoke clearly and confidently",
      "had smooth, natural pacing",
      "pronounced tricky sounds well",
    ],
  },
  {
    key: "listening",
    label: "Listening & Comprehension",
    items: [
      "understood instructions quickly",
      "followed the conversation easily",
      "picked up on context clues well",
    ],
  },
  {
    key: "participation",
    label: "Participation & Effort",
    items: [
      "stayed engaged the whole lesson",
      "asked great questions",
      "tried new expressions without hesitation",
      "put in strong effort throughout",
    ],
  },
];

const IMPROVEMENT_CATEGORIES = [
  {
    key: "grammar",
    label: "Grammar",
    items: [
      "review subject-verb agreement",
      "practice past tense forms",
      "work on word order in questions",
      "review article usage (a / an / the)",
    ],
  },
  {
    key: "vocabulary",
    label: "Vocabulary",
    items: [
      "expand everyday vocabulary range",
      "practice using new words in context",
      "work on word collocations",
    ],
  },
  {
    key: "fluency",
    label: "Pronunciation & Fluency",
    items: [
      "slow down for clearer pronunciation",
      "practice stress on longer words",
      "reduce hesitation while speaking",
    ],
  },
  {
    key: "listening",
    label: "Listening & Comprehension",
    items: [
      "listen for key details more carefully",
      "practice following longer instructions",
    ],
  },
  {
    key: "participation",
    label: "Confidence & Participation",
    items: [
      "speak up with more confidence",
      "try responding without translating first",
      "practice thinking directly in English",
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

function signatureLine(rawName) {
  const trimmed = (rawName || "").trim();
  if (!trimmed) return "";
  const stripped = trimmed.replace(/^teacher\s+/i, "");
  return `— Teacher ${stripped}`;
}

function buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements }) {
  const name = studentName.trim() || "there";
  const greeting = pickRandom(greetingPool(name));
  const closing = pickRandom(closingPool(name));

  const strengthTemplates = shuffle(STRENGTH_TEMPLATES);
  let sIdx = 0;
  const strengthSentences = STRENGTH_CATEGORIES.map((cat) => {
    const picked = cat.items.filter((item) => selectedStrengths.has(itemKey(cat.key, item)));
    if (!picked.length) return null;
    const template = strengthTemplates[sIdx % strengthTemplates.length];
    sIdx++;
    return template(cat.label, joinList(picked));
  }).filter(Boolean);

  const improveTemplates = shuffle(IMPROVE_TEMPLATES);
  let iIdx = 0;
  const improvementSentences = IMPROVEMENT_CATEGORIES.map((cat) => {
    const picked = cat.items.filter((item) => selectedImprovements.has(itemKey(cat.key, item)));
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

  paragraphs.push(closing);

  const signature = signatureLine(teacherName);
  if (signature) paragraphs.push(signature);

  return paragraphs.join("\n\n");
}

function CategoryBlock({ category, selected, onToggle, tone }) {
  return (
    <div className="fbg-cat">
      <div className="fbg-cat-label">{category.label}</div>
      <div className="fbg-chip-row">
        {category.items.map((item) => {
          const key = itemKey(category.key, item);
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
    </div>
  );
}

export default function FeedbackGenerator() {
  const [teacherName, setTeacherName] = useState(() => localStorage.getItem(TEACHER_NAME_KEY) || "");
  const [studentName, setStudentName] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState(() => new Set());
  const [selectedImprovements, setSelectedImprovements] = useState(() => new Set());
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);

  const hasAnySelection = selectedStrengths.size > 0 || selectedImprovements.size > 0;

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
    const text = buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements });
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
    setGeneratedText("");
    setCopied(false);
  }

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

          <section className="fbg-section">
            <div className="fbg-section-head fbg-section-head--strength">
              <span className="fbg-section-dot fbg-section-dot--strength" />
              What went well
            </div>
            {STRENGTH_CATEGORIES.map((cat) => (
              <CategoryBlock key={cat.key} category={cat} selected={selectedStrengths} onToggle={toggleStrength} tone="strength" />
            ))}
          </section>

          <section className="fbg-section">
            <div className="fbg-section-head fbg-section-head--improve">
              <span className="fbg-section-dot fbg-section-dot--improve" />
              What to work on
            </div>
            {IMPROVEMENT_CATEGORIES.map((cat) => (
              <CategoryBlock key={cat.key} category={cat} selected={selectedImprovements} onToggle={toggleImprovement} tone="improve" />
            ))}
          </section>

          {(hasAnySelection || studentName.trim()) && (
            <button type="button" className="fbg-clear-btn" onClick={handleClear}>Clear all</button>
          )}
        </div>

        <div className="fbg-preview-col">
          <div className="fbg-preview-head">
            <span className="fbg-preview-label">Preview</span>
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
          <pre className="fbg-preview">
            {generatedText || "Check off some qualities on the left, then generate feedback…"}
          </pre>
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

.fbg-topbar { display: flex; align-items: flex-start; gap: 12px; max-width: 1040px; margin: 0 auto 22px; }
.fbg-badge {
  display: flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 12px; flex-shrink: 0;
  background: rgba(255,107,74,0.12); font-size: 19px;
}
.fbg-title { font-family: 'Fredoka', sans-serif; font-size: 21px; font-weight: 700; margin: 0 0 2px; }
.fbg-sub { font-size: 13px; color: #8B84A3; margin: 0; }

.fbg-body {
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 18px;
  align-items: start;
}

.fbg-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
}
.fbg-names { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.fbg-field { display: flex; flex-direction: column; gap: 5px; }
.fbg-label { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: #5A5876; }
.fbg-input {
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #F8F7FB;
  border: 1.5px solid rgba(43,42,74,0.1);
  border-radius: 10px;
  padding: 9px 11px;
  outline: none;
}
.fbg-input:focus { border-color: #FF6B4A; }
.fbg-input::placeholder { color: #B0ABC2; }

.fbg-section { display: flex; flex-direction: column; gap: 10px; padding-top: 4px; border-top: 1px solid rgba(43,42,74,0.08); }
.fbg-section:first-of-type { border-top: none; padding-top: 0; }
.fbg-section-head {
  display: flex; align-items: center; gap: 8px;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px;
}
.fbg-section-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.fbg-section-dot--strength { background: #2FA66B; }
.fbg-section-dot--improve { background: #E08A3C; }

.fbg-cat { display: flex; flex-direction: column; gap: 6px; }
.fbg-cat-label { font-size: 11.5px; font-weight: 700; letter-spacing: 0.03em; text-transform: uppercase; color: #A6A1BD; }
.fbg-chip-row { display: flex; flex-wrap: wrap; gap: 6px; }

.fbg-chip {
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #5A5876;
  background: #F8F7FB;
  border: 1.5px solid rgba(43,42,74,0.1);
  border-radius: 999px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s, color 0.12s;
}
.fbg-chip:hover { border-color: rgba(43,42,74,0.22); }
.fbg-chip--strength.is-active { background: rgba(47,166,107,0.14); border-color: #2FA66B; color: #1F7A4C; }
.fbg-chip--improve.is-active { background: rgba(224,138,60,0.14); border-color: #E08A3C; color: #A8611E; }

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
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fbg-preview-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.fbg-preview-label {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8B84A3;
}
.fbg-preview-actions { display: flex; gap: 8px; }
.fbg-generate-btn, .fbg-copy-btn {
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
  white-space: nowrap;
}
.fbg-copy-btn { background: #2B2A4A; }
.fbg-generate-btn:hover, .fbg-copy-btn:hover { filter: brightness(0.93); }

.fbg-preview {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Quicksand', sans-serif;
  font-size: 13.5px;
  line-height: 1.65;
  color: #2B2A4A;
  background: #fff;
  border: 1.5px dashed rgba(43,42,74,0.16);
  border-radius: 16px;
  padding: 18px;
  min-height: 320px;
}

@media (max-width: 760px) {
  .fbg-body { grid-template-columns: 1fr; }
  .fbg-names { grid-template-columns: 1fr; }
  .fbg-preview-col { position: static; }
}
`;

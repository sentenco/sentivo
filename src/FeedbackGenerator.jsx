import { useState } from "react";

const TEACHER_NAME_KEY = "sentivo_teacher_name";

const ICON_PROPS = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

function GrammarIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="4" y="3" width="12" height="18" rx="2" />
      <line x1="7" y1="8" x2="13" y2="8" />
      <line x1="7" y1="12" x2="11" y2="12" />
      <path d="m14 15 2 2 4-4" />
    </svg>
  );
}

function VocabularyIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 5c2-1 5-1 7 .5v13c-2-1.5-5-1.5-7-.5V5Z" />
      <path d="M17 5c-2-1-5-1-7 .5v13c2-1.5 5-1.5 7-.5V5Z" />
    </svg>
  );
}

function FluencyIcon() {
  return (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="10" x2="3" y2="14" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="11" y1="4" x2="11" y2="20" />
      <line x1="15" y1="7" x2="15" y2="17" />
      <line x1="19" y1="10" x2="19" y2="14" />
    </svg>
  );
}

function ListeningIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="4" height="6" rx="1.5" />
      <rect x="18" y="14" width="4" height="6" rx="1.5" />
    </svg>
  );
}

function ParticipationIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M8 13V6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M11 11V4a1.5 1.5 0 0 1 3 0v7" />
      <path d="M14 11.5V6a1.5 1.5 0 0 1 3 0v8" />
      <path d="M8 13c-1-1-3-1-3 1 0 3 2 7 7 7h2c4 0 6-3 6-6v-3" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M6 21V4" />
      <path d="M6 4h11l-3 4 3 4H6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

const CATEGORY_ICONS = {
  grammar: GrammarIcon,
  vocabulary: VocabularyIcon,
  fluency: FluencyIcon,
  listening: ListeningIcon,
  participation: ParticipationIcon,
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

function normalizeSentence(text) {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return /[.!?]["')\]]?$/.test(capitalized) ? capitalized : `${capitalized}.`;
}

function teacherDisplayName(rawName) {
  const trimmed = (rawName || "").trim();
  if (!trimmed) return "";
  return `Teacher ${trimmed.replace(/^teacher\s+/i, "")}`;
}

function categoryHasInput(cat, selectedStrengths, selectedImprovements, notes) {
  const hasChip =
    cat.strengths.some((item) => selectedStrengths.has(itemKey(cat.key, item))) ||
    cat.improvements.some((item) => selectedImprovements.has(itemKey(cat.key, item)));
  const hasNote = ((notes[cat.key] || "").trim().length > 0);
  return hasChip || hasNote;
}

function buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements, notes }) {
  const name = studentName.trim() || "there";
  const greeting = pickRandom(greetingPool(name));
  const closing = pickRandom(closingPool(name));

  const strengthTemplates = shuffle(STRENGTH_TEMPLATES);
  const improveTemplates = shuffle(IMPROVE_TEMPLATES);
  let sIdx = 0;
  let iIdx = 0;

  const strengthSentences = [];
  const improvementSentences = [];
  const noteOnlySentences = [];

  CATEGORIES.forEach((cat) => {
    const pickedS = cat.strengths.filter((item) => selectedStrengths.has(itemKey(cat.key, item)));
    const pickedI = cat.improvements.filter((item) => selectedImprovements.has(itemKey(cat.key, item)));
    const noteText = (notes[cat.key] || "").trim();
    let noteAttached = false;

    if (pickedS.length) {
      const template = strengthTemplates[sIdx % strengthTemplates.length];
      sIdx++;
      let sentence = template(cat.label, joinList(pickedS));
      if (noteText) {
        sentence += ` ${normalizeSentence(noteText)}`;
        noteAttached = true;
      }
      strengthSentences.push(sentence);
    }

    if (pickedI.length) {
      const template = improveTemplates[iIdx % improveTemplates.length];
      iIdx++;
      let sentence = template(cat.label, joinList(pickedI));
      if (noteText && !noteAttached) {
        sentence += ` ${normalizeSentence(noteText)}`;
        noteAttached = true;
      }
      improvementSentences.push(sentence);
    }

    if (noteText && !noteAttached) {
      noteOnlySentences.push(normalizeSentence(noteText));
    }
  });

  const paragraphs = [greeting];

  paragraphs.push(
    strengthSentences.length
      ? strengthSentences.join(" ")
      : "You worked hard and stayed engaged throughout the lesson."
  );

  if (improvementSentences.length) {
    paragraphs.push(`${pickRandom(TRANSITIONS)} ${improvementSentences.join(" ")}`);
  }

  if (noteOnlySentences.length) {
    paragraphs.push(noteOnlySentences.join(" "));
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

export default function FeedbackGenerator() {
  const [teacherName, setTeacherName] = useState(() => localStorage.getItem(TEACHER_NAME_KEY) || "");
  const [studentName, setStudentName] = useState("");
  const [selectedStrengths, setSelectedStrengths] = useState(() => new Set());
  const [selectedImprovements, setSelectedImprovements] = useState(() => new Set());
  const [notes, setNotes] = useState({});
  const [step, setStep] = useState(0);
  const [generatedText, setGeneratedText] = useState("");
  const [copied, setCopied] = useState(false);

  const totalCategorySteps = CATEGORIES.length;
  const reviewStep = totalCategorySteps + 1;
  const isNamesStep = step === 0;
  const isReviewStep = step === reviewStep;
  const currentCategory = !isNamesStep && !isReviewStep ? CATEGORIES[step - 1] : null;
  const CurrentCategoryIcon = currentCategory ? CATEGORY_ICONS[currentCategory.key] : null;

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

  function setNoteFor(catKey, value) {
    setNotes((prev) => ({ ...prev, [catKey]: value }));
  }

  function goNext() {
    setStep((s) => Math.min(s + 1, reviewStep));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleGenerate() {
    const text = buildFeedback({ studentName, teacherName, selectedStrengths, selectedImprovements, notes });
    setGeneratedText(text);
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleRestart() {
    setSelectedStrengths(new Set());
    setSelectedImprovements(new Set());
    setNotes({});
    setStudentName("");
    setGeneratedText("");
    setCopied(false);
    setStep(0);
  }

  const studentTrimmed = studentName.trim();
  const teacherDisplay = teacherDisplayName(teacherName);
  const currentSatisfied = currentCategory
    ? categoryHasInput(currentCategory, selectedStrengths, selectedImprovements, notes)
    : true;

  return (
    <div className="fbg-shell">
      <style>{CSS}</style>
      <div className="fbg-wizard">
        <header className="fbg-topbar">
          <span className="fbg-badge">📋</span>
          <div className="fbg-topbar-text">
            <h1 className="fbg-title">Lesson Feedback</h1>
            <p className="fbg-sub">One category at a time — pick what applies, or add a quick note.</p>
          </div>
          {step > 0 && (
            <button type="button" className="fbg-restart-btn" onClick={handleRestart}>↺ Start over</button>
          )}
        </header>

        {step > 0 && (
          <div className="fbg-stepper">
            {CATEGORIES.map((cat, idx) => {
              const nodeStep = idx + 1;
              const complete = categoryHasInput(cat, selectedStrengths, selectedImprovements, notes);
              const isCurrent = step === nodeStep;
              const CatIcon = CATEGORY_ICONS[cat.key];
              return (
                <button
                  type="button"
                  key={cat.key}
                  className={`fbg-step-node${isCurrent ? " is-current" : ""}${complete ? " is-complete" : ""}`}
                  onClick={() => setStep(nodeStep)}
                >
                  <span className="fbg-step-circle">{complete && !isCurrent ? <CheckIcon /> : <CatIcon />}</span>
                  <span className="fbg-step-node-label">{cat.label.split(" ")[0]}</span>
                </button>
              );
            })}
            <div className={`fbg-step-node${isReviewStep ? " is-current" : ""}`}>
              <span className="fbg-step-circle"><ReviewIcon /></span>
              <span className="fbg-step-node-label">Review</span>
            </div>
          </div>
        )}

        <div className="fbg-step-card">
          {isNamesStep && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon">👋</span>
                <div className="fbg-step-heading-text">
                  <h2>Let's get started</h2>
                  <p>Who is this feedback for?</p>
                </div>
              </div>
              <div className="fbg-names">
                <label className="fbg-field">
                  <span className="fbg-label">Your name</span>
                  <input
                    type="text"
                    className="fbg-input"
                    value={teacherName}
                    onChange={(e) => { setTeacherName(e.target.value); localStorage.setItem(TEACHER_NAME_KEY, e.target.value); }}
                    onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
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
                    onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
                    placeholder="Who was this lesson for?"
                  />
                </label>
              </div>
              <div className="fbg-step-nav">
                <span />
                <button type="button" className="fbg-btn-next" onClick={goNext}>Continue →</button>
              </div>
            </>
          )}

          {currentCategory && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon"><CurrentCategoryIcon /></span>
                <div className="fbg-step-heading-text">
                  <h2>{currentCategory.label}</h2>
                  <p>Pick anything that applies, or add a quick note below.</p>
                </div>
              </div>

              <div className="fbg-cols-head">
                <span className="fbg-cols-head-item fbg-cols-head-item--strength">✓ What went well</span>
                <span className="fbg-cols-head-item fbg-cols-head-item--improve">→ What to work on</span>
              </div>
              <div className="fbg-cat-cols">
                <ChipList catKey={currentCategory.key} items={currentCategory.strengths} selected={selectedStrengths} onToggle={toggleStrength} tone="strength" />
                <ChipList catKey={currentCategory.key} items={currentCategory.improvements} selected={selectedImprovements} onToggle={toggleImprovement} tone="improve" />
              </div>

              <label className="fbg-field fbg-note-field">
                <span className="fbg-label">
                  Anything else about {currentCategory.label.toLowerCase()}? <span className="fbg-optional">(optional if you picked a quality)</span>
                </span>
                <textarea
                  className="fbg-textarea"
                  rows={2}
                  value={notes[currentCategory.key] || ""}
                  onChange={(e) => setNoteFor(currentCategory.key, e.target.value)}
                  placeholder={`Add a specific note about ${currentCategory.label.toLowerCase()}…`}
                />
              </label>

              <div className={`fbg-step-hint${currentSatisfied ? " is-satisfied" : ""}`}>
                {currentSatisfied ? "✓ Nice — ready for the next category" : "Pick at least one quality above, or add a note below"}
              </div>

              <div className="fbg-step-nav">
                <button type="button" className="fbg-btn-back" onClick={goBack}>← Back</button>
                <button type="button" className="fbg-btn-next" onClick={goNext} disabled={!currentSatisfied}>
                  {step === totalCategorySteps ? "Review →" : "Next →"}
                </button>
              </div>
            </>
          )}

          {isReviewStep && !generatedText && (
            <>
              <div className="fbg-step-heading">
                <span className="fbg-step-heading-icon"><ReviewIcon /></span>
                <div className="fbg-step-heading-text">
                  <h2>Ready to generate</h2>
                  <p>Here's a quick summary — tap Edit to change anything.</p>
                </div>
              </div>
              <div className="fbg-review-list">
                {CATEGORIES.map((cat, idx) => {
                  const stCount = cat.strengths.filter((item) => selectedStrengths.has(itemKey(cat.key, item))).length;
                  const imCount = cat.improvements.filter((item) => selectedImprovements.has(itemKey(cat.key, item))).length;
                  const hasNote = (notes[cat.key] || "").trim().length > 0;
                  const RowIcon = CATEGORY_ICONS[cat.key];
                  return (
                    <div className="fbg-review-row" key={cat.key}>
                      <div className="fbg-review-row-main">
                        <span className="fbg-cat-icon" aria-hidden="true"><RowIcon /></span>
                        <span className="fbg-review-row-label">{cat.label}</span>
                        <span className="fbg-review-row-counts">
                          {stCount} went well · {imCount} to work on{hasNote ? " · note added" : ""}
                        </span>
                      </div>
                      <button type="button" className="fbg-review-edit" onClick={() => setStep(idx + 1)}>Edit</button>
                    </div>
                  );
                })}
              </div>
              <div className="fbg-step-nav">
                <button type="button" className="fbg-btn-back" onClick={goBack}>← Back</button>
                <button type="button" className="fbg-generate-btn" onClick={handleGenerate}>✨ Generate feedback</button>
              </div>
            </>
          )}

          {isReviewStep && generatedText && (
            <div className="fbg-preview-card">
              <div className="fbg-preview-accent" />
              <div className="fbg-preview-head">
                <span className="fbg-preview-label">Preview</span>
                <div className="fbg-preview-actions">
                  <button type="button" className="fbg-generate-btn" onClick={handleGenerate}>🔁 Regenerate</button>
                  <button type="button" className="fbg-copy-btn" onClick={handleCopy}>{copied ? "✓ Copied" : "⧉ Copy"}</button>
                </div>
              </div>
              {(studentTrimmed || teacherDisplay) && (
                <div className="fbg-preview-meta">
                  {studentTrimmed && <span>To {studentTrimmed}</span>}
                  {studentTrimmed && teacherDisplay && <span className="fbg-preview-meta-sep">·</span>}
                  {teacherDisplay && <span>From {teacherDisplay}</span>}
                </div>
              )}
              <pre className="fbg-preview">{generatedText}</pre>
              <button type="button" className="fbg-edit-answers-btn" onClick={() => setGeneratedText("")}>← Edit answers</button>
            </div>
          )}
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
  padding: 28px 20px;
}
.fbg-shell * { box-sizing: border-box; }

.fbg-wizard { max-width: 640px; margin: 0 auto; }

.fbg-topbar { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px; }
.fbg-topbar-text { flex: 1; }
.fbg-badge {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
  background: linear-gradient(135deg, #FF6B4A, #FF9466);
  box-shadow: 0 8px 18px rgba(255,107,74,0.32);
  font-size: 20px;
}
.fbg-title { font-family: 'Fredoka', sans-serif; font-size: 22px; font-weight: 700; margin: 0 0 3px; letter-spacing: -0.01em; }
.fbg-sub { font-size: 13px; color: #8B84A3; margin: 0; }
.fbg-restart-btn {
  align-self: flex-start;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11.5px;
  color: #8B84A3; background: none; border: none; cursor: pointer; padding: 6px 0; white-space: nowrap;
}
.fbg-restart-btn:hover { color: #C24E3A; }

.fbg-stepper { display: flex; align-items: flex-start; justify-content: center; gap: 0; margin-bottom: 20px; }
.fbg-step-node {
  display: flex; flex-direction: column; align-items: center; gap: 5px;
  position: relative; flex: 1; background: none; border: none; cursor: pointer; padding: 0;
}
.fbg-step-node:not(:last-child)::after {
  content: ""; position: absolute; top: 17px; left: 50%; width: 100%; height: 2px;
  background: rgba(43,42,74,0.12); z-index: 0;
}
.fbg-step-node.is-complete:not(:last-child)::after { background: #2FA66B; }
.fbg-step-circle {
  position: relative; z-index: 1; width: 34px; height: 34px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  background: #fff; border: 2px solid rgba(43,42,74,0.14); color: #8B84A3;
  transition: all 0.15s;
}
.fbg-step-circle svg { width: 16px; height: 16px; }
.fbg-step-node.is-current .fbg-step-circle {
  border-color: #FF6B4A;
  background: linear-gradient(135deg, #FF6B4A, #FF9466);
  color: #fff;
  box-shadow: 0 4px 12px rgba(255,107,74,0.35);
  transform: scale(1.08);
}
.fbg-step-node.is-complete .fbg-step-circle { border-color: #2FA66B; background: rgba(47,166,107,0.12); color: #1F7A4C; }
.fbg-step-node-label { font-size: 10px; font-weight: 700; color: #8B84A3; text-align: center; }
.fbg-step-node.is-current .fbg-step-node-label { color: #FF6B4A; }

.fbg-step-card {
  background: #fff;
  border: 1px solid rgba(43,42,74,0.08);
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 16px 40px rgba(43,42,74,0.07);
  min-height: 380px;
  display: flex;
  flex-direction: column;
}

.fbg-step-heading { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
.fbg-step-heading-icon {
  width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 21px;
  background: rgba(255,107,74,0.10); color: #FF6B4A;
}
.fbg-step-heading-icon svg { width: 22px; height: 22px; }
.fbg-step-heading-text h2 { font-family: 'Fredoka', sans-serif; font-size: 18px; font-weight: 700; margin: 0; }
.fbg-step-heading-text p { font-size: 12.5px; color: #8B84A3; margin: 2px 0 0; }

.fbg-names { display: flex; flex-direction: column; gap: 14px; }
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
.fbg-textarea { resize: vertical; min-height: 56px; font-family: inherit; }
.fbg-input:focus, .fbg-textarea:focus { border-color: #FF6B4A; }
.fbg-input::placeholder, .fbg-textarea::placeholder { color: #B0ABC2; }

.fbg-cols-head { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 10px; }
.fbg-cols-head-item {
  display: flex; align-items: center; gap: 6px;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12.5px;
  padding: 7px 13px; border-radius: 999px; width: fit-content;
}
.fbg-cols-head-item--strength { background: rgba(47,166,107,0.11); color: #1F7A4C; }
.fbg-cols-head-item--improve { background: rgba(224,138,60,0.11); color: #A8611E; }

.fbg-cat-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: start; margin-bottom: 16px; }
.fbg-chip-row { display: flex; flex-wrap: wrap; align-content: flex-start; gap: 6px; }
.fbg-cat-icon { display: inline-flex; color: #8B84A3; }
.fbg-cat-icon svg { width: 15px; height: 15px; }

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

.fbg-note-field { margin-bottom: 10px; }

.fbg-step-hint { font-size: 12px; font-weight: 600; color: #C24E3A; margin-bottom: 4px; }
.fbg-step-hint.is-satisfied { color: #2FA66B; }

.fbg-step-nav { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 16px; }
.fbg-btn-back {
  background: none; border: 1.5px solid rgba(43,42,74,0.14); color: #5A5876;
  border-radius: 999px; padding: 9px 18px; font-weight: 700; font-size: 12.5px;
  font-family: 'Quicksand', sans-serif; cursor: pointer; transition: border-color 0.15s;
}
.fbg-btn-back:hover { border-color: rgba(43,42,74,0.3); }
.fbg-btn-next {
  background: linear-gradient(135deg, #FF6B4A, #FF8A63); color: #fff; border: none;
  border-radius: 999px; padding: 9px 22px; font-weight: 700; font-size: 12.5px;
  font-family: 'Quicksand', sans-serif; cursor: pointer;
  box-shadow: 0 6px 16px rgba(255,107,74,0.28);
  transition: filter 0.15s, transform 0.15s, opacity 0.15s, box-shadow 0.15s;
}
.fbg-btn-next:hover:not(:disabled) { filter: brightness(0.95); transform: translateY(-1px); }
.fbg-btn-next:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }

.fbg-review-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
.fbg-review-row {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: #FBF9F6; border: 1px solid rgba(43,42,74,0.06); border-radius: 14px;
  padding: 10px 14px;
}
.fbg-review-row-main { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.fbg-review-row-label { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; }
.fbg-review-row-counts { font-size: 11.5px; color: #8B84A3; font-weight: 600; }
.fbg-review-edit {
  background: none; border: none; color: #FF6B4A; font-weight: 700; font-size: 12px;
  cursor: pointer; font-family: 'Quicksand', sans-serif; padding: 4px 8px; flex-shrink: 0;
}
.fbg-review-edit:hover { text-decoration: underline; }

.fbg-preview-card { position: relative; overflow: hidden; }
.fbg-preview-accent {
  position: absolute; top: -24px; left: -24px; right: -24px; height: 5px;
  background: linear-gradient(90deg, #FF6B4A, #FFB199);
}
.fbg-preview-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
.fbg-preview-label {
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px;
  letter-spacing: 0.06em; text-transform: uppercase; color: #8B84A3;
}
.fbg-preview-actions { display: flex; gap: 8px; }
.fbg-generate-btn, .fbg-copy-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: #fff;
  border: none; border-radius: 999px; padding: 9px 16px; cursor: pointer;
  transition: filter 0.15s, transform 0.15s; white-space: nowrap;
}
.fbg-generate-btn { background: linear-gradient(135deg, #FF6B4A, #FF8A63); box-shadow: 0 6px 16px rgba(255,107,74,0.28); }
.fbg-copy-btn { background: #2B2A4A; }
.fbg-generate-btn:hover, .fbg-copy-btn:hover { filter: brightness(0.95); transform: translateY(-1px); }

.fbg-preview-meta { font-size: 12px; font-weight: 600; color: #8B84A3; display: flex; gap: 6px; margin-top: 10px; }
.fbg-preview-meta-sep { color: #D8D3E6; }

.fbg-preview {
  margin: 12px 0 14px;
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
  min-height: 220px;
}
.fbg-edit-answers-btn {
  background: none; border: none; color: #8B84A3; font-weight: 700; font-size: 12px;
  cursor: pointer; font-family: 'Quicksand', sans-serif; padding: 0; align-self: flex-start;
}
.fbg-edit-answers-btn:hover { color: #FF6B4A; }

@media (max-width: 600px) {
  .fbg-names, .fbg-cat-cols, .fbg-cols-head { grid-template-columns: 1fr; }
  .fbg-step-node-label { display: none; }
}
`;

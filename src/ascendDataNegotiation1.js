// ASCEND Contract Negotiation — Lesson 1 — "The Upgrade Reveal" — Upgrade

export default {
  id: "ascend-negotiation-1",
  code: "L1",
  title: "The Upgrade Reveal",
  type: "Upgrade",
  tag: "Baseline",
  subtitle: "Find the precise negotiating language you're missing, then use it.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: { kind: "questions", questions: [
    "What's the first thing that comes to mind when you think about negotiating a contract?",
    "Do you think most negotiations end in a fair deal for both sides?",
  ]},

  gimmick: { kind: "upgrade", heading: "Level It Up", items: [
    { plain: "We don't really like this part of the contract.", upgraded: "We have concerns about this clause." },
    { plain: "Can you lower the price a bit?", upgraded: "We'd like to explore some flexibility on price." },
    { plain: "If you don't agree, we might walk away.", upgraded: "We may need to reconsider our position if this isn't resolved." },
    { plain: "This needs to be fixed before we sign.", upgraded: "This needs to be addressed before we can proceed to signature." },
    { plain: "We think this is a good deal for both sides.", upgraded: "We believe this reflects a fair balance of interests for both parties." },
  ]},

  closing: { kind: "words", heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["counteroffer", "walk-away point", "non-negotiable term"] },

  teacherGuide: {
    cover: {
      goal: "Frame this as the baseline lesson — precision over fluency, no pressure to get it right.",
      say: [
        "Today we're doing something a little different — we're finding the precise negotiating language you're missing, not new vocabulary, just sharper versions of what you already know.",
        "This is our baseline lesson, so don't worry about getting it right — we're just measuring where you are right now.",
      ],
      do: ["Let the title sit on screen for a few seconds before moving on."],
      timing: "1 min",
    },
    warmup: {
      goal: "Capture the student's raw, unedited answers for later use in Level It Up.",
      say: ["Quick questions — don't overthink it, just answer straight away."],
      do: [],
      timing: "3 min",
    },
    gimmick: {
      goal: "Student sees a plain sentence and attempts to upgrade it to precise negotiating register before the target is revealed.",
      say: [
        "Here's a plain sentence — give me the more precise, professional version before I show you mine.",
        "There's no single correct answer — we're aiming for precision, not a specific word.",
      ],
      do: [
        "Let them attempt each upgrade before revealing.",
        "If they land on something equally precise but different, accept it — the target is a model, not the only answer.",
      ],
      timing: "10 min",
    },
    levelup: {
      goal: "Take something the student said today, plain or rough, and upgrade it together, live.",
      say: ["One more upgrade before we close — something you actually said today."],
      do: [],
      timing: "4 min",
    },
    closing: {
      goal: "Hand off Lesson 2's 3 words.",
      say: ["Three words for next time — write them down and keep them close."],
      do: [],
      timing: "1 min",
    },
  },
};

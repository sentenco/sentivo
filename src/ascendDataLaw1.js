// ASCEND Law & Advocacy — Lesson 1 — "The Upgrade Reveal" — Upgrade

export default {
  id: "ascend-law-1",
  code: "L1",
  title: "The Upgrade Reveal",
  type: "Upgrade",
  tag: "Baseline",
  subtitle: "Find the precise legal register you're missing, then use it.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: { kind: "questions", questions: [
    "What's the first thing that comes to mind when you think about the legal profession?",
    "Do you think the law is keeping up with how fast the world is changing?",
  ]},

  gimmick: { kind: "upgrade", heading: "Level It Up", items: [
    { plain: "The witness's story didn't really add up.", upgraded: "The witness's testimony lacked credibility." },
    { plain: "The lawyer explained the case really clearly.", upgraded: "Counsel presented the case with remarkable clarity." },
    { plain: "The judge said no to the request.", upgraded: "The judge denied the motion." },
    { plain: "There isn't enough proof to be sure.", upgraded: "The evidence is insufficient to establish certainty." },
    { plain: "The two sides finally agreed on a deal.", upgraded: "The parties reached a settlement." },
  ]},

  closing: { kind: "words", heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["breach of contract", "legal liability", "compliance review"] },

  teacherGuide: {
    cover: {
      goal: "Frame this as the baseline lesson — precision over fluency, no pressure to get it right.",
      say: [
        "Today we're doing something a little different — we're finding the precise legal register you're missing, not new vocabulary, just sharper versions of what you already know.",
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
      goal: "Student sees a plain sentence and attempts to upgrade it to precise legal register before the target is revealed.",
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

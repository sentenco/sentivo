// ASCEND Law & Advocacy — Lesson 4 — "The Reversal" — Reversal

export default {
  id: "ascend-law-4",
  code: "L4",
  title: "The Reversal",
  type: "Reversal",
  tag: "Pressure Test",
  subtitle: "Argue one side, then the other, on demand, no script.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "Before signing, they did ", word: "careful research to make sure everything checked out", post: ".", upgraded: "due diligence" },
      { pre: "Both sides negotiated ", word: "honestly and fairly", post: ".", upgraded: "good faith" },
      { pre: "The jury wasn't convinced — there was still ", word: "some real doubt", post: ".", upgraded: "reasonable doubt" },
    ],
  },

  gimmick: {
    kind: "reversal",
    heading: "Argue it — then flip it",
    position: "Lawyers should be legally required to take on a certain number of unpaid (pro bono) cases every year.",
  },

  closing: {
    kind: "gather",
    heading: "No new list this time",
    body: "Lesson 5 is where everything you've collected gets used at once. Gather your sticky notes from Lessons 1, 2, and 3 — plus today's — and bring all four to next lesson.",
  },

  teacherGuide: {
    cover: {
      goal: "Introduce flexibility under pressure as today's skill.",
      say: ["Today tests something different — can you argue either side, on command?"],
      do: [],
      timing: "1 min",
    },
    warmup: {
      goal: "Same level-it-up mechanic, new target words from last lesson's sticky notes.",
      say: ["Same game as before — level up the highlighted phrase before I show you the target."],
      do: [],
      timing: "4 min",
    },
    gimmick: {
      goal: "Student argues for a position, then is flipped to argue against it, live and unscripted.",
      say: [
        "Argue for this position — take your time, build a real case.",
        "Now — argue against the exact same position.",
      ],
      do: [
        "Give them real time to build the FOR case before flipping.",
        "Don't warn them the flip is coming.",
        "Coach live on both sides — this is about flexibility, not a right answer.",
      ],
      timing: "10 min",
    },
    levelup: {
      goal: "Take a rough sentence from today's lesson and upgrade it live.",
      say: ["One more upgrade before we close."],
      do: [],
      timing: "4 min",
    },
    closing: {
      goal: "No new words — instruct the student to gather all previous sticky notes for Lesson 5.",
      say: [
        "No new list today. Next lesson uses everything you've built so far.",
        "Find your sticky notes from every lesson and bring them next time.",
      ],
      do: ["Make sure this instruction actually lands — Lesson 5 depends on them having these words on hand."],
      timing: "1 min",
    },
  },
};

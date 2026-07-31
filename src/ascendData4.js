// ASCEND Lesson 4 — "The Reversal" — Reversal

export default {
  id: "ascend-4",
  code: "L4",
  title: "The Reversal",
  type: "Reversal",
  tag: "Pressure Test",
  subtitle: "Argue one side, then the other — on demand, no script.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "Early adopters could ", word: "gain a competitive edge", post: " over rivals.", synonyms: "get ahead of the competition · pull out in front · win an advantage" },
      { pre: "This requires a ", word: "significant upfront investment", post: " from leadership.", synonyms: "a big initial cost · a large amount of money to start · a major early commitment" },
      { pre: "Leadership is betting on a ", word: "long-term payoff", post: ".", synonyms: "a reward that comes later · benefits down the road · results that take time to show" },
    ],
  },

  gimmick: {
    kind: "reversal",
    heading: "Argue it — then flip it",
    position: "The company should make a major investment in AI right now.",
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
      goal: "Synonym warm-up, same mechanic, new words.",
      say: ["Same game as before — synonym for the highlighted phrase."],
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

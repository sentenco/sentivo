// ASCEND Lesson 3 — "Hedging & the Expert Voice" — 🔧 Upgrade (3/3) — Support: Low

export default {
  id: "ascend-3",
  code: "L3",
  title: "Hedging & the Expert Voice",
  type: "Upgrade",
  icon: "🔧",
  support: "Low",
  tag: "Progress",
  subtitle: "Precise isn't enough. Now sound measured too.",
  techniqueLine: "Experts rarely speak in absolutes. This is how you sound like one.",
  bankWords: ["likely to", "rather than", "that said", "arguably"],
  gradedActivities: true,
  slideOrder: ["cover", "warmup", "vocabulary", "practice", "highlight", "scorecard", "homework"],

  warmup: {
    heading: null,
    questions: ["“New study finds leading AI hiring tools show measurable bias against older candidates.” React in one sentence."],
  },

  vocabulary: {
    heading: "Vocabulary",
    rows: [
      { label: "it will replace X", value: "likely to transform, rather than replace, X" },
      { label: "it's true", value: "that said, it's not the whole picture" },
      { label: "it's definitely a problem", value: "arguably, one of the bigger problems" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade — for nuance",
  },

  practice: {
    heading: "Swap It Up",
    items: [
      { pre: "AI hiring tools ", target: "are", post: " biased against older candidates.", hint: "are likely to be · arguably are" },
      { pre: "Companies should ", target: "stop", post: " using biased systems immediately.", hint: "reconsider · reassess" },
      { pre: "This is ", target: "definitely", post: " one of the sector's biggest problems.", hint: "arguably · quite possibly" },
      { pre: "The bias concerns are ", target: "true", post: ", but there's more to the story.", hint: "valid, that said · real, that said" },
      { pre: "Vendors ", target: "clearly", post: " have work left to do.", hint: "admittedly · undeniably" },
    ],
  },

  scorecard: {
    canDoLine: "I can sound precise and measured at the same time, without a bank in front of me.",
    rows: [
      { label: "Precision", max: 3, source: "practice" },
      { label: "Nuance", max: 3, source: "highlight" },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
    compareLine: "This closes the Upgrade block — this score is the real baseline for unsupported precision, useful context for L8 and L10.",
  },

  homework: {
    heading: "Before next lesson",
    passage: [
      "AI hiring tools are ",
      { text: "likely to" },
      " keep spreading across the industry, ",
      { text: "rather than" },
      " disappearing under pressure. ",
      { text: "That said" },
      ", the bias concerns raised this year are ",
      { text: "arguably" },
      " some of the most serious the sector has faced.",
    ],
    nextBank: "firstly · more importantly · that said · on balance · I'd recommend",
  },

  teacherGuide: {
    cover: {
      goal: "Final Upgrade lesson. Support is Low — the student should produce precision largely unaided by now.",
      say: ["Last one in this block — today's a bit harder because there's no bank on most slides. You've earned that."],
      do: ["Frame this explicitly as the graduation point of the block, not just 'another lesson'."],
      timing: "30 sec",
    },
    warmup: {
      goal: "React to a headline, captured verbatim — expect it blunt, since that's what today softens.",
      say: [
        "React to this in one sentence — don't plan it, just say what you think.",
        "New study finds leading AI hiring tools show measurable bias against older candidates.",
      ],
      do: [
        "Capture their exact reaction word for word.",
        "Expect bluntness ('that's wrong', 'companies shouldn't...') — that's the raw material for the Highlight slide, later in the lesson, not a problem to fix now.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Check L1+L2 recall first — no bank shown for either. Then run the hedging bank as the reveal game.",
      say: [
        "Before anything new — give me L1's 3 and L2's 3, from memory, no bank.",
        "Now, new set: hedging words. These aren't collocations, they're how you sound careful instead of certain.",
      ],
      do: [
        "Hold firm on the no-bank recall check — this is the real diagnostic for whether L1/L2 stuck.",
        "Run the 3 hedging pairs as attempt-then-reveal.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "Graded activity, no bank shown — blunt word swapped for a hedged one, from memory.",
      say: [
        "Same swap game, no bank this time. Highlighted word — soften it or make it more measured.",
      ],
      do: [
        "Let them reach for likely to / rather than / that said / arguably unaided — only reveal the hint if they're fully stuck.",
        "Mark ✓ or ✗ per item — the tally becomes this lesson's Precision score.",
      ],
      timing: "4 min",
    },
    highlight: {
      goal: "The second 'aha' — precision made them sound like an expert; hedging makes them sound careful.",
      say: [
        "Let's go back to your reaction from earlier.",
        "Now — same idea, but can you soften it? Add a hedge somewhere.",
        "Here's mine — listen for where the hedge sits.",
      ],
      do: [
        "Type their Warm-up reaction into Before, challenge them to add a hedge this time (not just precision), then type your model into After.",
        "Name the distinction out loud explicitly: this is the difference between sounding correct and sounding measured — the actual C1→C2 jump.",
        "Rate the upgrade 0–3 — becomes this lesson's Nuance score.",
      ],
      timing: "4 min",
    },
    scorecard: {
      goal: "Precision and Nuance pre-fill from the graded slides. This score is the real baseline for unsupported precision — keep it for L8 and L10 context.",
      say: ["This number matters more than the last two — it's you with zero support, so it's our real starting line."],
      do: ["Note this score somewhere separate — you'll reference it again in L8 and L10."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L4's signpost bank — the Frame block starts next lesson.",
      say: ["Next lesson is a different skill entirely — not new words, but how to organize an argument. Take a look at the new bank."],
      do: ["Flag explicitly that L4 is a new block (Frame) so the shift in lesson shape doesn't feel like a surprise."],
      timing: "1 min",
    },
  },
};

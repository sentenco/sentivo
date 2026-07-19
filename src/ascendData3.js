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
  bankWords: ["likely to", "rather than", "that said", "arguably", "admittedly"],

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
      { label: "it's a weakness", value: "admittedly, a real limitation" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade — for nuance",
  },

  practice: {
    heading: "Soften the Absolute",
    items: [
      "“AI hiring tools are biased.” → (likely to / arguably)",
      "“Companies should stop using them.” → (rather than)",
      "“This is a huge failure.” → (admittedly / that said)",
    ],
  },

  activity: {
    heading: "60-Second Briefing — precise AND measured",
    prompt: "Should companies be fully responsible for their AI's mistakes?",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Diplomat's rewrite — read both aloud, harsh then diplomatic.",
    model: "Harsh: AI hiring tools are unfair and companies are lazy for using them. → Diplomatic: AI hiring tools admittedly carry real risks, and that said, companies weighing convenience against fairness face a genuinely pressing challenge.",
  },

  scorecard: {
    canDoLine: "I can sound precise and measured at the same time, without a bank in front of me.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
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
      " some of the most serious the sector has faced. Vendors, ",
      { text: "admittedly" },
      ", still have work to do before these systems can be trusted without close human oversight.",
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
        "Expect bluntness ('that's wrong', 'companies shouldn't...') — that's the raw material for the Highlight slide, not a problem to fix now.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Check L1+L2 recall first — no bank shown for either. Then run the hedging bank as the reveal game.",
      say: [
        "Before anything new — give me L1's 5 and L2's 5, from memory, no bank.",
        "Now, new set: hedging words. These aren't collocations, they're how you sound careful instead of certain.",
      ],
      do: [
        "Hold firm on the no-bank recall check — this is the real diagnostic for whether L1/L2 stuck.",
        "Run the 4 hedging pairs (likely to, rather than, that said, arguably, admittedly) as attempt-then-reveal.",
      ],
      timing: "5 min",
    },
    highlight: {
      goal: "The second 'aha' — precision made them sound like an expert; hedging makes them sound careful.",
      say: [
        "Let's go back to your reaction from earlier.",
        "Now — same idea, but can you soften it? Add a hedge somewhere.",
        "Here's mine — listen for where the hedge sits.",
      ],
      do: [
        "Type their Warm-up reaction, challenge them to add a hedge this time (not just precision), then reveal your model.",
        "Name the distinction out loud explicitly: this is the difference between sounding correct and sounding measured — the actual C1→C2 jump.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "No bank shown — blunt claim to measured version, from memory.",
      say: [
        "No bank this time. Blunt claim, you soften it.",
        "AI hiring tools are biased.",
        "Companies should stop using them.",
        "This is a huge failure.",
      ],
      do: ["Let them reach for likely to / rather than / that said / arguably / admittedly unaided — only prompt if they're fully stuck."],
      timing: "3 min",
    },
    activity: {
      goal: "Diagnostic-style, no support — 3+ precision collocations from any lesson plus 2+ hedges.",
      say: [
        "This one's the real test of the block — no bank, sixty seconds.",
        "Should companies be fully responsible for their AI's mistakes?",
      ],
      do: [
        "No bank on screen — this is genuinely unaided.",
        "Silently count 3+ precision collocations (from any lesson) and 2+ hedges.",
        "This closes the Upgrade block — treat the result as a real signal, not just practice.",
      ],
      timing: "2 min",
    },
    pushit: {
      goal: "Diplomat's rewrite — harsh version then diplomatic version, read both aloud.",
      say: ["Last bonus round of the block — I'll read a harsh version, you give me the diplomatic one."],
      do: ["Read the harsh version aloud, let them attempt the diplomatic rewrite, then show your model."],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "This score is the real baseline for unsupported precision — keep it for L8 and L10 context.",
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

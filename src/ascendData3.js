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
    cover: "Final lesson of the Upgrade block. Support is Low — the student should be producing precision largely unaided by now.",
    warmup: "React to the headline in one sentence, captured verbatim. Expect it blunt — that bluntness is exactly what today's hedging bank softens.",
    vocabulary: "No bank shown before this slide — first check the student can produce L1's 5 and L2's 5 from memory. Then run this lesson's hedging bank as the reveal game.",
    highlight: "This time the upgrade adds a hedge, not just precision. Type the Warm-up reaction, challenge the student to soften it, then reveal your model. This is the second 'aha': precision made them sound like an expert; hedging makes them sound like a careful one — the actual C1→C2 distinction this whole package is built to prove.",
    practice: "No bank shown. Blunt claim → measured version, using likely to / rather than / that said / arguably / admittedly.",
    activity: "No bank on screen — Low support. Aim for 3+ precision collocations from any earlier lesson plus 2+ hedges. This is diagnostic-style and closes the Upgrade block; the student should sound precise and measured with zero support.",
    pushit: "Diplomat's rewrite bonus — harsh version then diplomatic version, read both aloud.",
    scorecard: "This score is the real baseline for unsupported precision — useful context when you get to L8 and L10.",
    homework: "Preview L4's signpost bank (the Frame block starts next lesson) before the student leaves.",
  },
};

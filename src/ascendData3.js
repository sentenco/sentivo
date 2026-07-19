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
    heading: "React to this headline in one sentence.",
    instruction: "Capture the reaction verbatim — expect it blunt.",
    questions: ["“New study finds leading AI hiring tools show measurable bias against older candidates.”"],
  },

  vocabulary: {
    heading: "Vocabulary — no L1/L2 shown, recall only",
    note: "Before this slide: say L1's 5 + L2's 5 from memory, no bank shown for either.",
    rows: [
      { label: "it will replace X", value: "likely to transform, rather than replace, X" },
      { label: "it's true", value: "that said, it's not the whole picture" },
      { label: "it's definitely a problem", value: "arguably, one of the bigger problems" },
      { label: "it's a weakness", value: "admittedly, a real limitation" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade — for nuance",
    intro: "Take his Warm-up reaction → add a hedge this time, not just precision.",
    before: "[Write his actual Warm-up sentence here]",
    after: "e.g. His: “That's wrong, companies shouldn't use biased AI tools.” → C1: “That's likely to be a genuine problem — that said, the technology is arguably still evolving, and admittedly, human hiring isn't bias-free either.”",
    note: "The second aha. Precision made him sound like an expert; hedging makes him sound like a careful one — the C1→C2 distinction this whole package proves.",
  },

  practice: {
    heading: "Soften the Absolute",
    instruction: "Blunt claim → measured version. No bank shown.",
    items: [
      "“AI hiring tools are biased.” → (likely to / arguably)",
      "“Companies should stop using them.” → (rather than)",
      "“This is a huge failure.” → (admittedly / that said)",
    ],
  },

  activity: {
    heading: "60-Second Briefing — precise AND measured",
    instruction: "No bank on screen. Aim for 3+ precision collocations (any lesson) and 2+ hedges.",
    prompt: "Should companies be fully responsible for their AI's mistakes?",
    note: "Diagnostic-style — closes the Upgrade block. He should sound precise and measured with zero support.",
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
    items: [
      { label: "Read your passage", detail: "A short AI-ethics op-ed using 3+ collocations and 2+ hedges." },
      { label: "Next lesson's bank", detail: "firstly · more importantly · that said · on balance · I'd recommend" },
      { label: "Voice note (~3 min)", detail: "“Is it ethical for a company to use AI in hiring decisions?” Use 3+ collocations, 2+ hedges." },
    ],
  },
};

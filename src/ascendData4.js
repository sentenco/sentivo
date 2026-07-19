// ASCEND Lesson 4 — "The 90-Second Case" — 🏛 Frame (1/2) — Support: High

export default {
  id: "ascend-4",
  code: "L4",
  title: "The 90-Second Case",
  type: "Frame",
  icon: "🏛",
  support: "High",
  tag: "Progress",
  subtitle: "You have the words. Now give them a shape.",
  techniqueLine: "Position → 2 Reasons → Caveat → Recommendation.",
  bankWords: ["firstly", "more importantly", "that said", "on balance", "I'd recommend"],

  warmup: {
    heading: "One-breath opinion — no pausing to plan.",
    instruction: "Capture verbatim — expect rambling, several ideas in one breath.",
    questions: ["Should every company be investing in AI right now?"],
  },

  vocabulary: {
    heading: "Vocabulary — the Frame's signposts",
    note: null,
    rows: [
      { label: "Position", value: "“On the whole, I'd argue that…”" },
      { label: "Reason 1", value: "“Firstly, …”" },
      { label: "Reason 2", value: "“More importantly, …”" },
      { label: "Caveat", value: "“That said, …”" },
      { label: "Recommendation", value: "“On balance, I'd recommend…”" },
    ],
  },

  highlight: {
    heading: "Rambling vs Framed",
    intro: "Compare his rambling Warm-up answer with a framed version of the same ideas.",
    before: "Weak (rambling): “AI is expensive but also it could save money later and some companies are already doing it and if you don't you might fall behind but it's risky too.”",
    after: "Strong (framed): “On the whole, I'd argue most companies should start investing now. Firstly, early movers are already gaining a competitive edge. More importantly, the cost of retrofitting later is far higher than adapting now. That said, smaller companies should weigh the trade-offs against cash flow. On balance, I'd recommend a phased investment, not an all-in bet.”",
    note: "Same ideas, same words even — the only difference is order. Structure is now his visible ceiling, the same way precision was in L1.",
  },

  practice: {
    heading: "Frame the Slots",
    instruction: "4 loose ideas about AI investment — slot them into Position→Reasons→Caveat→Recommendation out loud, frame visible on screen. Don't correct content, only slot placement.",
    items: [],
  },

  activity: {
    heading: "The 90-Second Case (frame on screen)",
    instruction: "90 seconds. Frame stays visible. Reuse at least 2 Upgrade collocations from any earlier lesson.",
    prompt: "Should a mid-sized company invest in AI now, or wait?",
    note: "Target-count: signposts landed (out of 5) + collocations reused (out of 2+).",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Add a rhetorical device to the Recommendation line — rule of three.",
    model: "I'd recommend a phased, measured, and reversible investment.",
  },

  scorecard: {
    canDoLine: "I can structure an opinion into a clear, persuasive case instead of a list of ideas.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
    compareLine: null,
  },

  homework: {
    heading: "Before next lesson",
    items: [
      { label: "Read your passage", detail: "A short framed business case using the signpost bank." },
      { label: "Next lesson's bank", detail: "the key issue is · crucially · my recommendation would be (plus recall L4's 5)" },
      { label: "Voice note (~3 min, framed)", detail: "“Should a company invest in AI-generated marketing content?”" },
    ],
  },
};

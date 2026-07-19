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
    heading: null,
    questions: ["Should every company be investing in AI right now?"],
  },

  vocabulary: {
    heading: "Vocabulary — the Frame's signposts",
    rows: [
      { label: "Position", value: "On the whole, I'd argue that…" },
      { label: "Reason 1", value: "Firstly, …" },
      { label: "Reason 2", value: "More importantly, …" },
      { label: "Caveat", value: "That said, …" },
      { label: "Recommendation", value: "On balance, I'd recommend…" },
    ],
  },

  highlight: {
    heading: "Rambling vs Framed",
  },

  practice: {
    heading: "Frame the Slots",
    items: [
      "4 loose ideas about AI investment — slot each into Position, Reasons, Caveat, or Recommendation, out loud, frame visible on screen.",
    ],
  },

  activity: {
    heading: "The 90-Second Case (frame on screen)",
    prompt: "Should a mid-sized company invest in AI now, or wait?",
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
    passage: [
      "On the whole, most companies should start exploring AI now rather than waiting. ",
      { text: "Firstly" },
      ", early movers are already pulling ahead. ",
      { text: "More importantly" },
      ", the cost of retrofitting later is far higher than adapting early. ",
      { text: "That said" },
      ", smaller companies need to move carefully. ",
      { text: "On balance" },
      ", ",
      { text: "I'd recommend" },
      " a phased rollout rather than an all-in bet.",
    ],
    nextBank: "the key issue is · crucially · my recommendation would be (plus recall L4's 5)",
  },

  teacherGuide: {
    cover: "First lesson of the Frame block. Frame: Position → 2 Reasons → Caveat → Recommendation. Today the frame is fully visible — High support.",
    warmup: "One-breath opinion, no pausing to plan. Capture verbatim — expect rambling, several ideas crammed into one breath. That messiness is the material for the Highlight slide.",
    vocabulary: "This lesson's bank IS the frame's signposts, not vocabulary in the L1-L3 sense. Run the same reveal-game format, but frame each 'phrase' as a slot in the structure (Position, Reason 1, Reason 2, Caveat, Recommendation).",
    highlight: "Type the student's rambling Warm-up answer, then challenge them to reorganize it into the frame rather than just rephrase it. Reveal your own framed version. The point to land: same ideas, same words even — the only difference is order. Structure is now their visible ceiling, the same way precision was in L1.",
    practice: "Give 4 loose ideas about AI investment; the student slots them into Position→Reasons→Caveat→Recommendation out loud, frame visible on screen. Don't correct content — only whether each idea landed in the right slot.",
    activity: "Frame stays visible (High support). 90 seconds. Ask them to reuse at least 2 Upgrade collocations from any earlier lesson inside the case — this is the first real compounding moment. Target-count: signposts landed out of 5, plus collocations reused.",
    pushit: "Add a rhetorical device (rule of three) to the Recommendation line — a small polish, not a new skill.",
    scorecard: "No comparison line yet — L4 opens a new block, so there's nothing prior to benchmark against within Frame.",
    homework: "Preview L5's 3 new signposts (the key issue is / crucially / my recommendation would be) plus a recall reminder of L4's 5.",
  },
};

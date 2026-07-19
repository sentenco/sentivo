// ASCEND Lesson 9 — "The Live Debate" — 🎯 Arena (1/2) — Support: Light

export default {
  id: "ascend-9",
  code: "L9",
  title: "The Live Debate",
  type: "Arena",
  icon: "🎯",
  support: "Light",
  tag: "Progress",
  subtitle: "Everything you've built. One motion. Live.",
  techniqueLine: "Precision, framing, and rebuttal — all in the same 90 seconds now.",
  bankWords: ["widespread adoption", "weigh the trade-offs", "arguably", "on balance, I'd recommend", "I take your point, but"],

  warmup: {
    heading: "Stance-in-ten.",
    instruction: "10 seconds — firm position, no hedge. No secret-capture note this lesson — the real diagnostic work is L10's re-test.",
    questions: ["Is AI now a bigger risk or a bigger opportunity for an established company's competitive position?"],
  },

  vocabulary: {
    heading: "Recall-five — any lesson",
    note: "Pull 5 expressions from memory, ideally one from each earlier lesson type.",
    rows: [
      { label: "L1", value: "widespread adoption" },
      { label: "L2", value: "weigh the trade-offs" },
      { label: "L3", value: "arguably" },
      { label: "L4/L5", value: "on balance, I'd recommend" },
      { label: "L6/L7/L8", value: "I take your point, but" },
    ],
  },

  highlight: {
    heading: "Set the Scenario",
    intro: "The motion for today's debate — teacher models one challenge-and-response exchange first, so he sees the pace expected.",
    before: "Motion: “This house believes AI is now a bigger competitive risk than opportunity for established companies.”",
    after: null,
    note: null,
  },

  practice: {
    heading: "Rapid Rebuttal Round",
    instruction: "5 quick objections, one strong sentence each, no time to plan between them.",
    items: [
      "“Slow-moving companies always lose to AI-native startups.”",
      "“Regulation will protect incumbents, not threaten them.”",
      "“Customers don't actually care whether a company uses AI.”",
      "“The real risk is bad AI decisions, not AI itself.”",
      "“Competitive edge from AI won't last — everyone will have it soon.”",
    ],
  },

  activity: {
    heading: "Live Debate / Devil's-Advocate Flip",
    instruction: "90 seconds, one side of the motion. Teacher challenges every point live — one challenger only, lighter than L10's full pressure.",
    prompt: "Argue your side of today's motion.",
    note: null,
  },

  pushIt: {
    heading: "Push It — the curveball",
    prompt: "One genuinely unexpected question, handled with poise, not panic.",
    model: "If AI is really such a risk, why haven't you told your own manager to slow down its rollout?",
  },

  scorecard: {
    canDoLine: "I can integrate precision, structure, and rebuttal together, live, under pressure.",
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
    heading: "Before next lesson — primes L10",
    items: [
      { label: "Voice note (~3 min)", detail: "Re-answer L1's exact diagnostic question — “How is AI changing business right now?” — cold, no notes, as if it were the real test. This is the dress rehearsal for L10." },
    ],
  },
};

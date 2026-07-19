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
    heading: null,
    questions: ["Is AI now a bigger risk or a bigger opportunity for an established company's competitive position? Stance-in-ten — 10 seconds, firm position, no hedge."],
  },

  vocabulary: {
    heading: "Recall-five — any lesson",
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
  },

  practice: {
    heading: "Rapid Rebuttal Round",
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
    prompt: "Argue your side of today's motion.",
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
    heading: "Before L10",
    passage: [
      "By now, ",
      { text: "widespread adoption" },
      " of AI is old news — the harder question is how established companies ",
      { text: "weigh the trade-offs" },
      " between speed and risk. ",
      { text: "Arguably" },
      ", the ones that move too slowly lose more than the ones that move too fast. ",
      { text: "On balance, I'd recommend" },
      " treating AI as a core strategic bet, not a side project. And to anyone who says that's reckless: ",
      { text: "I take your point, but" },
      " standing still is its own kind of risk.",
    ],
    nextLabel: "Coming up in L10",
    nextBank: "Board Q&A under fire, then the exact L1 task again — cold, no notes. This is the number that proves ten lessons of progress.",
  },

  teacherGuide: {
    cover: "First Arena lesson. Everything compounds now: precision, framing, rebuttal, all live. Support is Light — one challenger only, not full pressure.",
    warmup: "10 seconds, firm position, no hedge. No secret-capture note needed this lesson — the real diagnostic work happens on L10's re-test.",
    vocabulary: "Rapid recall of 5 expressions pulled from memory, ideally one from each earlier lesson type, to show the full arc compounding together.",
    highlight: "Set today's motion and model one challenge-and-response exchange yourself first, so the student sees the pace expected before they're asked to do it themselves.",
    practice: "5 quick objections, one strong sentence each, no time to plan between them — this is pure reflex training for the live debate.",
    activity: "90 seconds, one side of the motion, one challenger only — lighter than L10's full pressure. Push on every point live.",
    pushit: "The curveball — one genuinely unexpected question, handled with poise, not panic.",
    scorecard: "No comparison line — save the big comparison for L10.",
    homework: "No new vocabulary. The only goal is priming muscle memory for L10's re-test — this is the dress rehearsal.",
  },
};

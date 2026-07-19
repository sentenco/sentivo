// ASCEND Lesson 2 — "Precision Under Pressure" — 🔧 Upgrade (2/3) — Support: Mid

export default {
  id: "ascend-2",
  code: "L2",
  title: "Precision Under Pressure",
  type: "Upgrade",
  icon: "🔧",
  support: "Mid",
  tag: "Progress",
  subtitle: "Same precision — now under a clock.",
  techniqueLine: "You already know these words. Today you use them fast.",
  bankWords: ["drive revenue", "disrupt entire sectors", "pressing challenge", "weigh the trade-offs", "gain a competitive edge"],

  warmup: {
    heading: null,
    questions: [
      "Should companies use AI to screen job applicants?",
      "What's one job you think AI will change first?",
      "Is automation good or bad news for hiring?",
    ],
  },

  vocabulary: {
    heading: "Vocabulary",
    rows: [
      { label: "it makes more money", value: "it can drive revenue" },
      { label: "it changes whole industries", value: "it's set to disrupt entire sectors" },
      { label: "it's a big problem", value: "it's a pressing challenge" },
      { label: "you have to think about the good and bad", value: "you have to weigh the trade-offs" },
      { label: "it helps you beat other companies", value: "it helps a business gain a competitive edge" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade — faster this time",
  },

  practice: {
    heading: "Swap It Up (bank half-hidden)",
    items: [
      "“It makes more money.” → (drive…)",
      "“It changes whole industries.” → (disrupt…)",
      "“You have to think about good and bad.” → (weigh…)",
    ],
  },

  activity: {
    heading: "Collocation Ladder ⏱",
    prompt: "AI is changing hiring.",
  },

  pushIt: {
    heading: "Push It",
    prompt: "One more idea, same ladder, no timer — a breather before scoring.",
    model: "Automation helps a business gain a competitive edge, but only if it can weigh the trade-offs against the pressing challenge of retraining staff.",
  },

  scorecard: {
    canDoLine: "I can produce precise C1 collocations under time pressure, not just when I have time to think.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
    compareLine: "If this total is at or above L1's, say so — it's the first proof point before L10's headline number.",
  },

  homework: {
    heading: "Before next lesson",
    passage: [
      "Automation is quickly becoming a ",
      { text: "pressing challenge" },
      " for hiring teams. Done well, it can genuinely ",
      { text: "drive revenue" },
      " by cutting time-to-hire, but companies still need to ",
      { text: "weigh the trade-offs" },
      " between speed and fairness. Some analysts even argue it's set to ",
      { text: "disrupt entire sectors" },
      " of recruitment altogether — and the businesses that adapt first will ",
      { text: "gain a competitive edge" },
      " over the ones that wait.",
    ],
    nextBank: "likely to · rather than · that said · arguably · admittedly",
  },

  teacherGuide: {
    cover: "Same Upgrade type as L1, now Mid support. Frame today as speed, not new content: the student already has these words; the goal is producing them under a clock.",
    warmup: "Rapid-fire — 15 seconds per question, no time to plan. Vague words tend to come back out under pressure; that's expected and exactly what today's drill fixes. Capture one of the blunt answers for the Highlight slide.",
    vocabulary: "Before revealing the bank, check recall: can the student still produce L1's 5 collocations unprompted? Then run this lesson's 5 the same reveal-game way as L1.",
    highlight: "Same mechanism as L1, but faster — type the Warm-up sentence, challenge, then your model. The 'aha' should land quicker this time since the student has done this once already.",
    practice: "Bank is half-hidden — only give the first word of each upgrade as a cue (e.g. 'drive…', 'disrupt…', 'weigh…').",
    activity: "Bank stays visible since this is a Mid-support lesson (shown as chips above the prompt). 30 seconds, climb the ladder: basic → better → expert. Target-count must beat L1's number — watch for regression to vague words under the timer; that regression is the actual homework target.",
    pushit: "Optional bonus rep, no timer — a breather before scoring.",
    scorecard: "If today's total is at or above L1's, say so out loud — it's the first proof point before L10's headline number.",
    homework: "Preview L3's bank (hedging language) before the student leaves.",
  },
};

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
    heading: "Rapid-fire — 15 seconds each.",
    instruction: "No time to plan. Vague words come back out under pressure — that's the point.",
    questions: [
      "Should companies use AI to screen job applicants?",
      "What's one job you think AI will change first?",
      "Is automation good or bad news for hiring?",
    ],
  },

  vocabulary: {
    heading: "Vocabulary",
    note: "Recall check: can he still produce L1's 5 unprompted before moving on?",
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
    intro: "Take his Warm-up sentence → upgrade it live, quicker than L1.",
    before: "[Write his actual Warm-up sentence here]",
    after: "e.g. His: “Automation is a big problem for hiring, but it also makes more money for the company.” → C1: “Automation is a pressing challenge for hiring, but it can genuinely drive revenue if companies weigh the trade-offs properly.”",
    note: "Same mechanism as L1 — the aha should land quicker this time.",
  },

  practice: {
    heading: "Swap It Up (bank half-hidden)",
    instruction: "Only the first word of each upgrade is shown as a cue.",
    items: [
      "“It makes more money.” → (drive…)",
      "“It changes whole industries.” → (disrupt…)",
      "“You have to think about good and bad.” → (weigh…)",
    ],
  },

  activity: {
    heading: "Collocation Ladder ⏱",
    instruction: "One idea, 30 seconds, climb the ladder on a timer: basic → better → expert.",
    prompt: "“AI is changing hiring.”",
    note: "Target-count must beat L1's number. Watch for regression to vague words under the timer — that's the homework target.",
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
    items: [
      { label: "Read your passage", detail: "A short piece on hiring automation using this lesson's 5 collocations." },
      { label: "Next lesson's bank", detail: "likely to · rather than · that said · arguably · admittedly" },
      { label: "Voice note (~3 min)", detail: "“Will automation take more jobs than it creates in hiring?” Use 4+ collocations from L1+L2 combined." },
    ],
  },
};

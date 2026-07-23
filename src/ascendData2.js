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
  bankWords: ["drive revenue", "pressing challenge", "gain a competitive edge"],
  gradedActivities: true,
  slideOrder: ["cover", "warmup", "vocabulary", "practice", "highlight", "scorecard", "homework"],

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
      { label: "it's a big problem", value: "it's a pressing challenge" },
      { label: "it helps you beat other companies", value: "it helps a business gain a competitive edge" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade — faster this time",
  },

  practice: {
    heading: "Swap It Up",
    items: [
      { pre: "AI tools can ", target: "help", post: " a business increase its profits.", hint: "drive · boost · fuel" },
      { pre: "Bad hiring decisions are a ", target: "big", post: " problem for growing companies.", hint: "pressing · serious · significant" },
      { pre: "Leaders have to ", target: "think about", post: " the pros and cons before investing.", hint: "weigh · consider · evaluate" },
      { pre: "New technology could totally ", target: "change", post: " how entire sectors do business.", hint: "disrupt · transform · reshape" },
      { pre: "Early adopters often ", target: "get ahead of", post: " their competitors.", hint: "gain an edge over · outpace · outperform" },
    ],
  },

  scorecard: {
    canDoLine: "I can produce precise C1 collocations under time pressure, not just when I have time to think.",
    rows: [
      { label: "Precision", max: 3, source: "practice" },
      { label: "Nuance", max: 3, source: "highlight" },
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
      " by cutting time-to-hire — and the businesses that adapt first will ",
      { text: "gain a competitive edge" },
      " over the ones that wait.",
    ],
    nextBank: "likely to · rather than · that said · arguably",
  },

  teacherGuide: {
    cover: {
      goal: "Same Upgrade type as L1, now Mid support — frame today as speed, not new content.",
      say: [
        "Good news — you already know today's words, this time we're just testing how fast you can produce them.",
        "Last lesson was about finding the right word. Today's about finding it under a clock.",
      ],
      do: ["Move quickly through this slide — no new setup needed since they've done L1."],
      timing: "30 sec",
    },
    warmup: {
      goal: "Rapid-fire capture under real time pressure — expect vague words to slip back out.",
      say: [
        "Fifteen seconds each, three questions, go fast, don't plan.",
        "Should companies use AI to screen job applicants?",
        "What's one job you think AI will change first?",
        "Is automation good or bad news for hiring?",
      ],
      do: [
        "Actually enforce the 15 seconds — don't let them slow down.",
        "Vague words coming back out under pressure is expected — that's exactly what today fixes, not a bad sign.",
        "Write down one of their blunt answers for the Highlight slide, later in the lesson.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Check L1 recall first, then run this lesson's 3 as the same reveal game.",
      say: [
        "Before we start new ones — can you give me L1's 3 words from memory, no bank?",
        "Now let's do the same game as last time, just faster.",
      ],
      do: [
        "If they can't recall L1's 3 unprompted, spend an extra minute reviewing before moving on.",
        "Run this lesson's 3 phrases the same reveal-game way as L1 — attempt, then reveal.",
      ],
      timing: "3 min",
    },
    practice: {
      goal: "Graded activity. 5 sentences, one highlighted word each — same swap mechanic as L1, just faster pace.",
      say: [
        "Same game as last lesson — one highlighted word, give me a sharper swap.",
      ],
      do: [
        "Keep the pace brisk — this is Mid support, so let them glance at the bank if they stall, but don't hand it to them.",
        "Mark ✓ or ✗ per item — the tally becomes this lesson's Precision score.",
      ],
      timing: "4 min",
    },
    highlight: {
      goal: "Same mechanism as L1, but faster — the 'aha' should land quicker this time.",
      say: [
        "Same thing as last time — let's upgrade what you just said, but quicker this round.",
        "Here's my version — notice it took us less time to get here than L1.",
      ],
      do: [
        "Type their Warm-up sentence into Before, challenge them, then type your model into After — move briskly.",
        "Point out explicitly that this is faster than L1 — that speed is the actual progress.",
        "Rate the upgrade 0–3 — becomes this lesson's Nuance score.",
      ],
      timing: "3 min",
    },
    scorecard: {
      goal: "Precision and Nuance pre-fill from the graded slides — confirm, then explicitly compare against L1's baseline.",
      say: [
        "Let's score it — and if this beats last lesson's number, I'm going to tell you, because that's the whole point.",
      ],
      do: ["If today's total is at or above L1's, say so out loud — it's the first proof point before L10's headline number."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L3's hedging bank before the student leaves.",
      say: ["Read this passage a couple of times, and take a look at next lesson's words — they're a new type: hedging language."],
      do: ["Point out that L3's bank looks different — small connector words, not big collocations — so they're not surprised next lesson."],
      timing: "1 min",
    },
  },
};

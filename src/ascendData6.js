// ASCEND Lesson 6 — "Concede-then-Counter" — ⚔️ Counter (1/3) — Support: High

export default {
  id: "ascend-6",
  code: "L6",
  title: "Concede-then-Counter",
  type: "Counter",
  icon: "⚔️",
  support: "High",
  tag: "Progress",
  subtitle: "Disagree without sounding defensive.",
  techniqueLine: "Concede first. It's what makes the counter land.",
  bankWords: ["I take your point, but…", "that's true up to a point", "the real question is…", "while I see the appeal of that", "the bigger concern is"],

  warmup: {
    heading: null,
    questions: ["“AI tools just make people lazier and less productive — they don't actually help.” React, unscripted."],
  },

  vocabulary: {
    heading: "Vocabulary — the Rebuttal Bank",
    rows: [
      { label: "No, that's wrong", value: "I take your point, but the data tells a different story" },
      { label: "That's not really true", value: "that's true up to a point — for repetitive tasks, yes" },
      { label: "You're missing the real issue", value: "the real question is whether people use the time it saves" },
      { label: "I disagree", value: "while I see the appeal of that, I'd push back on one part" },
      { label: "That's not the main problem", value: "the bigger concern is how the time saved actually gets used" },
    ],
  },

  highlight: {
    heading: "Diplomatic vs Blunt",
  },

  practice: {
    heading: "Concede-then-Counter Drill ×5",
    items: [
      "“AI just creates more busywork, checking its output.”",
      "“People become dependent on it and stop thinking for themselves.”",
      "“It's only useful for people who already know what they're doing.”",
      "“Companies buy AI tools just to look modern, not because they help.”",
      "“The productivity gains are all hype — no real evidence.”",
    ],
  },

  activity: {
    heading: "Mini-Debate ⏱",
    prompt: "AI tools are killing genuine productivity — they just create more busywork.",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Rate your own last rebuttal 1–5 on warmth and firmness. Redo it if either is below a 4.",
    model: "No aggression, full firmness — that's the target.",
  },

  scorecard: {
    canDoLine: "I can disagree with someone without sounding defensive or aggressive.",
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
      "“",
      { text: "I take your point, but" },
      " the data tells a different story,” she said calmly. “",
      { text: "That's true up to a point" },
      " — for repetitive tasks, sure. ",
      { text: "The real question is" },
      " whether people reinvest the time it saves. ",
      { text: "While I see the appeal of that" },
      " argument, I'd push back on one part: ",
      { text: "the bigger concern is" },
      " how that saved time actually gets used.”",
    ],
    nextBank: "I see where you're coming from · I'd gently push back · there's another way to look at it · if I can offer a different perspective · I hear what you're saying, and",
  },

  teacherGuide: {
    cover: "First lesson of the Counter block. Rebuttal bank is fully visible — High support.",
    warmup: "State the provocation flat, no softening on your way in. Capture the reaction verbatim — expect blunt disagreement, since that bluntness is exactly what today's move softens.",
    vocabulary: "Menu fully visible. For each blunt-vs-diplomatic pair, let the student attempt their own diplomatic version before revealing the target.",
    highlight: "Show a blunt response and a diplomatic response to the same provocation side by side, then have the student practice converting the blunt one live using the two text boxes. Name the move explicitly: concede something real, then counter — not deny, not soften into agreement.",
    practice: "Menu visible — drill the exact move on all 5 provocations.",
    activity: "Argue hard, no warm-up: 'AI tools are killing genuine productivity.' 90 seconds, student rebuts diplomatically, staying warm throughout. Target-count: how many times did concede-then-counter land cleanly, not just once at the start?",
    pushit: "Have the student self-rate their last rebuttal 1–5 on warmth and firmness; redo it if either is below a 4.",
    scorecard: "No comparison line — L6 opens a new block.",
    homework: "Preview L7's softening layer (the same Counter block, one lesson deeper) before the student leaves.",
  },
};

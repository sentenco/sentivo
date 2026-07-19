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
    heading: "Teacher provocation — react, unscripted.",
    instruction: "Capture the reaction verbatim. Expect blunt disagreement — that's exactly what today softens.",
    questions: ["“AI tools just make people lazier and less productive — they don't actually help.”"],
  },

  vocabulary: {
    heading: "Vocabulary — the Rebuttal Bank",
    note: null,
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
    intro: "Two responses to the same provocation, side by side.",
    before: "Blunt: “No, that's wrong, AI clearly helps productivity.”",
    after: "Diplomatic: “I take your point, but that's true up to a point — for repetitive tasks, AI genuinely saves time. The real question is whether people reinvest that time productively or just fill it with more meetings.”",
    note: "The move, named: concede something real, then counter — not deny, not soften into agreement.",
  },

  practice: {
    heading: "Concede-then-Counter Drill ×5",
    instruction: "Menu visible — practice the exact move each time.",
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
    instruction: "90 seconds. Rebut diplomatically, staying warm throughout. Teacher argues hard, no warm-up:",
    prompt: "AI tools are killing genuine productivity — they just create more busywork.",
    note: "Target-count: how many times did concede-then-counter land cleanly, not just once at the start?",
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
    items: [
      { label: "Read your passage", detail: "A workplace debate transcript modeling the move." },
      { label: "Next lesson's bank", detail: "I see where you're coming from · I'd gently push back · there's another way to look at it · if I can offer a different perspective · I hear what you're saying, and" },
      { label: "Voice note (~3 min)", detail: "Someone says AI tools are “killing productivity, not helping it.” Rebut diplomatically, use 2+ rebuttal phrases." },
    ],
  },
};

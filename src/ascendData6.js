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
    cover: {
      goal: "First Counter lesson. Rebuttal bank fully visible — High support.",
      say: ["New block: rebuttal. Today's about disagreeing with someone without sounding defensive or aggressive."],
      do: ["Set expectations that this block involves you (the teacher) playing an active provocateur role, not just prompting."],
      timing: "1 min",
    },
    warmup: {
      goal: "State the provocation flat, no softening — expect blunt disagreement, that's the raw material for today.",
      say: ["AI tools just make people lazier and less productive — they don't actually help."],
      do: [
        "Deliver this flat and firm, no softening on your way in.",
        "Capture their reaction verbatim — expect blunt disagreement, that's exactly what today's move softens.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Menu fully visible — for each blunt-vs-diplomatic pair, let them attempt before revealing.",
      say: [
        "For each one, I'll show you the blunt version — try making it diplomatic yourself first, then I'll show you ours.",
      ],
      do: ["Run all 5 rebuttal pairs as attempt-then-reveal, menu visible throughout."],
      timing: "5 min",
    },
    highlight: {
      goal: "Blunt vs diplomatic response side by side — name the move: concede something real, then counter.",
      say: [
        "Here's a blunt response and a diplomatic one to the same thing. Listen for the difference.",
        "No, that's wrong, AI clearly helps productivity.",
        "I take your point, but that's true up to a point — for repetitive tasks, AI genuinely saves time. The real question is whether people reinvest that time productively.",
        "The move is: concede something real, then counter. Not deny, not agree — concede, then counter.",
      ],
      do: [
        "Type the blunt version in box 1, have them attempt a diplomatic rewrite, then reveal your model in box 3.",
        "Name the move explicitly out loud — this naming is what makes it repeatable.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "Menu visible — drill the exact move on all 5 provocations.",
      say: [
        "Five more provocations, quick fire, menu stays up.",
        "AI just creates more busywork, checking its output.",
        "People become dependent on it and stop thinking for themselves.",
      ],
      do: ["Drill through all 5 items, correcting only the mechanism (concede-then-counter), not their opinions."],
      timing: "4 min",
    },
    activity: {
      goal: "90-second mini-debate — argue hard, no warm-up, target: how many clean concede-then-counters land.",
      say: ["AI tools are killing genuine productivity — they just create more busywork.", "Ninety seconds — rebut me, and stay warm the whole time."],
      do: [
        "Argue hard with no warm-up into it.",
        "Target-count: how many times did concede-then-counter land cleanly, not just once at the start?",
      ],
      timing: "3 min",
    },
    pushit: {
      goal: "Self-rating bonus — 1-5 on warmth and firmness, redo if either is below a 4.",
      say: ["Rate your last rebuttal yourself — one to five on warmth, one to five on firmness."],
      do: ["If either score is below a 4, have them redo that one rebuttal."],
      timing: "1 min (optional)",
    },
    scorecard: {
      goal: "No comparison line — L6 opens a new block.",
      say: ["Fresh block, fresh baseline — no comparison to Frame or Upgrade scores today."],
      do: ["Score normally; this number is Counter's own starting point."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L7's softening layer — same block, one lesson deeper.",
      say: ["Next time we add warmth on top of this — softer openers before the same rebuttal move. Take a look at the new phrases."],
      do: ["Flag that L7 stays in the same block, just adds a layer — less of a shift than L4→L6 was."],
      timing: "1 min",
    },
  },
};

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
    cover: {
      goal: "First Arena lesson. Everything compounds now — precision, framing, rebuttal, all live. Support is Light.",
      say: ["Today's not new content — it's everything you've built, all at once, live. One challenger, not full pressure yet — that's next lesson."],
      do: ["Set the tone that today is an integration lesson, not a new-skill lesson."],
      timing: "1 min",
    },
    warmup: {
      goal: "10 seconds, firm position, no hedge — no secret-capture needed, the real diagnostic is L10.",
      say: ["Ten seconds, firm position, no hedging.", "Is AI now a bigger risk or a bigger opportunity for an established company's competitive position?"],
      do: ["No need to capture anything for later this lesson — that work happens in L10's re-test, not here."],
      timing: "1 min",
    },
    vocabulary: {
      goal: "Rapid recall of 5 expressions from memory, ideally one per earlier lesson type.",
      say: ["Give me five expressions from anywhere in the course — try to pull one from each type: Upgrade, Frame, Counter."],
      do: ["Don't show any bank — this is pure recall, and it doubles as a nice visible demonstration of how far they've come."],
      timing: "3 min",
    },
    highlight: {
      goal: "Set today's motion and model one exchange yourself first, so the pace is clear.",
      say: [
        "Today's motion: this house believes AI is now a bigger competitive risk than opportunity for established companies.",
        "Let me show you the pace first — watch how I'd handle a challenge on this.",
      ],
      do: ["Model one challenge-and-response exchange yourself before asking the student to do it — they need to see the speed expected."],
      timing: "3 min",
    },
    practice: {
      goal: "5 quick objections, one strong sentence each, no time to plan — pure reflex training.",
      say: [
        "Five objections, quick, one sentence each, no planning time.",
        "Slow-moving companies always lose to AI-native startups.",
        "Regulation will protect incumbents, not threaten them.",
      ],
      do: ["Fire these rapidly, back to back — this is reflex training for the live debate, not careful construction."],
      timing: "3 min",
    },
    activity: {
      goal: "90-second live debate, one side of the motion, one challenger, lighter than L10's full pressure.",
      say: ["Argue your side of the motion for ninety seconds — I'll challenge every point, but just me, one challenger."],
      do: ["Push on every point live, but keep it lighter than L10 — this is the rehearsal, not the real test."],
      timing: "3 min",
    },
    pushit: {
      goal: "The curveball — one genuinely unexpected question, handled with poise not panic.",
      say: ["If AI is really such a risk, why haven't you told your own manager to slow down its rollout?"],
      do: ["Deliver this as a genuine surprise — don't telegraph it coming."],
      timing: "1 min (optional)",
    },
    scorecard: {
      goal: "No comparison line — save the big comparison for L10.",
      say: ["No comparison today — L10 is where the real number happens."],
      do: ["Score normally, but don't build anticipation for a comparison here."],
      timing: "2 min",
    },
    homework: {
      goal: "No new vocabulary — the only goal is priming muscle memory for L10's re-test.",
      say: [
        "No new words before next time. Instead, I want you to answer L1's exact question again, cold, like it's the real test.",
        "How is AI changing business right now?",
      ],
      do: ["Frame this explicitly as the dress rehearsal for L10 — the real thing happens next lesson."],
      timing: "1 min",
    },
  },
};

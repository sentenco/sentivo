// ASCEND Lesson 10 — "Board Q&A Under Fire + Re-test" — 🎯 Arena (2/2) — Support: None — FINAL

export default {
  id: "ascend-10",
  code: "L10",
  title: "Board Q&A Under Fire + Re-test",
  type: "Arena",
  icon: "🎯",
  support: "None",
  tag: "Final",
  subtitle: "Ten lessons. One number to beat.",
  techniqueLine: "Today proves what changed.",
  bankWords: [],
  retest: true,

  warmup: {
    heading: null,
    questions: ["Recall-five, no gaps allowed — then straight into the Highlight slide with no further warm-up."],
  },

  vocabulary: {
    heading: "Vocabulary",
    rows: [],
  },

  highlight: {
    heading: "Board Q&A Under Fire",
  },

  practice: {
    heading: "One Rehearsal Exchange",
    items: [],
  },

  activity: {
    heading: "Devil's-Advocate Flip",
    prompt: "For, then against: should the company double down on AI investment?",
  },

  retestSlide: {
    heading: "RE-TEST (critical)",
    prompt: "Re-run L1's exact task, word for word: 60-second briefing — “How is AI changing business right now?”",
    note: "No notes, no bank — this is cold.",
  },

  scorecard: {
    canDoLine: "I can perform everything I've learned live, under real pressure — and I can prove it improved.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "final",
    compareLine: "Headline metric: L10 total − L1 total = ___   ·   Collocations used, L1 vs. L10: ___ → ___",
  },

  homework: {
    heading: "Course complete",
    passage: [
      "Ten lessons ago, AI was just ",
      { text: "advancing at a remarkable pace" },
      ". Now you can take a position, back it with a ",
      { text: "firstly" },
      " and a ",
      { text: "more importantly" },
      ", and hold it under pressure. When someone pushes back, ",
      { text: "I see where you're coming from" },
      " no longer feels like a script — it's just how you disagree. ",
      { text: "On balance" },
      ", that's the real proof: not new words, but a new level of control.",
    ],
  },

  teacherGuide: {
    cover: {
      goal: "Final lesson — no new material, this is pure integration and the payoff moment for the whole course.",
      say: ["Today's the payoff. No new material — everything we do today is proving what you've already built."],
      do: ["Bring your L1 notes/recording with you before this lesson starts — you'll need the exact numbers for the re-test comparison."],
      timing: "1 min",
    },
    warmup: {
      goal: "Recall 5 expressions, no gaps — then go straight into Highlight with no further warm-up.",
      say: ["Five expressions, anywhere in the course, no gaps. Go."],
      do: [
        "Move straight into the Highlight slide once they've produced 5 — no extended warm-up today.",
        "Don't capture anything here; the real capture happens on the Re-test slide.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Nothing shown — full recall only, no prompting.",
      say: ["Nothing on screen today — everything comes from you."],
      do: ["Move through quickly; there's no content here beyond confirming they're ready."],
      timing: "30 sec",
    },
    highlight: {
      goal: "60-second recommendation, then 3 hostile questions fired back to back with no pause.",
      say: [
        "Sixty seconds: should our company double down on AI investment, or diversify? Then I'm going to fire three questions at you, no pause between them.",
        "What happens if the AI market crashes in two years?",
        "Isn't 'diversify' just a way of avoiding a real decision?",
        "What would you actually tell the board to do tomorrow morning?",
      ],
      do: ["Fire all three questions rapidly, no gaps — the pressure is the point."],
      timing: "4 min",
    },
    practice: {
      goal: "One quick rehearsal round on a smaller question — then no more support for the rest of the lesson.",
      say: ["One warm-up round on something smaller before the real thing."],
      do: ["Keep this brief — after this slide, there's no more scaffolding for the rest of the lesson."],
      timing: "2 min",
    },
    activity: {
      goal: "Argue for, then immediately against — stance-switching under pressure is the clearest C1→C2 signal in the package.",
      say: [
        "For, then against: should the company double down on AI investment? Sixty seconds arguing for, then immediately sixty seconds arguing against, just as convincingly.",
      ],
      do: ["Don't let them pause between the two stances — the immediate flip is the whole point of the exercise."],
      timing: "3 min",
    },
    retest: {
      goal: "This is the actual deliverable. Re-run L1's exact task, cold, no notes, no bank.",
      say: [
        "Last thing — exact same question as Lesson 1, word for word, no notes.",
        "How is AI changing business right now?",
        "Sixty seconds. Go.",
      ],
      do: [
        "No support of any kind — this must be genuinely cold.",
        "Count collocations used exactly as you did in L1.",
        "Compare turn length, collocation count, hedges used, and overall control directly against the L1 recording or notes — this comparison is what you hand the student and what you're selling.",
      ],
      timing: "2 min",
    },
    scorecard: {
      goal: "Score today, then compute the headline metric: L10 total minus L1 total.",
      say: [
        "Let's score today, and then let's do the math on the whole ten lessons.",
        "[Reveal the number] That's how much you've improved, measured, not just felt.",
      ],
      do: ["Compute L10 total minus L1 total, and the collocation count jump. Log both on the Progress Sheet."],
      timing: "3 min",
    },
    homework: {
      goal: "No new material, no next lesson — log the final row and hand over the comparison as proof.",
      say: ["That's the course. Take this passage as a keepsake — read it back and notice how differently it lands now compared to ten lessons ago."],
      do: ["Log the final Progress Sheet row and hand the student the L1-vs-L10 comparison as tangible proof of the ten lessons."],
      timing: "1 min",
    },
  },
};

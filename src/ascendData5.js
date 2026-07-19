// ASCEND Lesson 5 — "The Board Pitch" — 🏛 Frame (2/2) — Support: Mid

export default {
  id: "ascend-5",
  code: "L5",
  title: "The Board Pitch",
  type: "Frame",
  icon: "🏛",
  support: "Mid",
  tag: "Progress",
  subtitle: "Same frame. No scaffold. Higher stakes.",
  techniqueLine: "This is the version you'd actually give in a room.",
  bankWords: ["the key issue is", "crucially", "my recommendation would be"],

  warmup: {
    heading: null,
    questions: ["Is now a good time to start an AI startup, or is the market already too crowded? Commit and defend — 20 seconds, no hedging."],
  },

  vocabulary: {
    heading: "Recall L4's 5 + 3 new",
    rows: [
      { label: "sharper than “firstly”", value: "the key issue is…" },
      { label: "sharper than “more importantly”", value: "crucially, …" },
      { label: "more formal than “I'd recommend”", value: "my recommendation would be…" },
    ],
  },

  highlight: {
    heading: "Rebuild a Broken Pitch",
  },

  practice: {
    heading: "Reason-Stacking",
    items: ["“The key issue is their prototype works.” → add Reason 2 + Caveat."],
  },

  activity: {
    heading: "The Board Pitch ⏱ (frame from memory)",
    prompt: "Should investors back an early-stage AI startup with no revenue yet?",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Open the pitch with a rhetorical question hook.",
    model: "What do investors actually buy when they back a startup with no revenue? Conviction.",
  },

  scorecard: {
    canDoLine: "I can deliver a structured, persuasive case from memory, under time pressure.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
    ],
    totalMax: 18,
    scoreTag: "progress",
    compareLine: "Closes the Frame block — flag if Persuasion/Structure hasn't visibly outscored L4. That's proof the frame is internalized, not just memorized.",
  },

  homework: {
    heading: "Before next lesson",
    passage: [
      "On the whole, I'd argue this startup has real potential. ",
      { text: "The key issue is" },
      " the founding team's technical depth, and ",
      { text: "crucially" },
      ", they already have a working prototype. That said, they haven't proven demand at scale yet. ",
      { text: "My recommendation would be" },
      " a small initial stake, with a follow-on tied to their next funding round.",
    ],
    nextBank: "I take your point, but… · that's true up to a point · the real question is… · while I see the appeal of that · the bigger concern is",
  },

  teacherGuide: {
    cover: "Second and final Frame lesson. Support drops to Mid — the frame is no longer shown on screen.",
    warmup: "Commit and defend in 20 seconds, no hedging allowed here. Capture verbatim and note whether the frame appears unprompted — that's a real signal for how internalized it already is.",
    vocabulary: "Recall L4's 5 signposts aloud, unprompted, before revealing this lesson's 3 sharper additions.",
    highlight: "Show a pitch missing its Caveat and Recommendation; have the student identify what's missing and supply both live. This tests whether they recognize the frame's shape, not just its vocabulary — a different skill than L4.",
    practice: "Add a stronger second reason to a one-reason pitch, then a credible caveat.",
    activity: "No frame on screen — Mid support, frame from memory. 90 seconds. Target-count: did all 4 frame parts land unaided? That number is what L8's harder rebuttal task builds on.",
    pushit: "Open the pitch with a rhetorical question hook — a delivery flourish, not a new structural skill.",
    scorecard: "Closes the Frame block. Flag explicitly if Persuasion/Structure hasn't visibly outscored L4 — that's the actual proof the frame is internalized, not just memorized.",
    homework: "Preview L6's rebuttal bank (the Counter block starts next lesson) before the student leaves.",
  },
};

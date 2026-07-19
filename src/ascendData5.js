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
    heading: "Commit and defend — 20 seconds.",
    instruction: "No hedging allowed here. Capture verbatim — note whether the frame appears unprompted.",
    questions: ["Is now a good time to start an AI startup, or is the market already too crowded?"],
  },

  vocabulary: {
    heading: "Recall L4's 5 + 3 new",
    note: "Recall L4's signposts aloud, unprompted, before seeing the new additions.",
    rows: [
      { label: "sharper than “firstly”", value: "the key issue is…" },
      { label: "sharper than “more importantly”", value: "crucially, …" },
      { label: "more formal than “I'd recommend”", value: "my recommendation would be…" },
    ],
  },

  highlight: {
    heading: "Rebuild a Broken Pitch",
    intro: "A pitch missing its Caveat and Recommendation — identify what's missing and add it live.",
    before: "Given: “On the whole, I'd argue this startup has real potential. The key issue is the founding team's technical depth, and crucially, they already have a working prototype.”",
    after: "Missing: Caveat + Recommendation — he supplies both live.",
    note: "Tests whether he recognizes the frame's shape, not just its vocabulary.",
  },

  practice: {
    heading: "Reason-Stacking",
    instruction: "Add a stronger second reason to a one-reason pitch, then a credible caveat.",
    items: ["“The key issue is their prototype works.” → add Reason 2 + Caveat."],
  },

  activity: {
    heading: "The Board Pitch ⏱ (frame from memory)",
    instruction: "90 seconds, no frame on screen.",
    prompt: "Should investors back an early-stage AI startup with no revenue yet?",
    note: "Target-count: did all 4 frame parts land unaided? That's the number L8's harder rebuttal task builds on.",
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
    items: [
      { label: "Read your passage", detail: "A startup investment memo, framed." },
      { label: "Next lesson's bank", detail: "I take your point, but… · that's true up to a point · the real question is… · while I see the appeal of that · the bigger concern is" },
      { label: "Voice note (~3 min, no frame prompt)", detail: "“Pitch a company you'd invest in right now — any industry.”" },
    ],
  },
};

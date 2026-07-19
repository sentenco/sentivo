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
    cover: {
      goal: "Second and final Frame lesson. Support drops to Mid — the frame is no longer shown on screen.",
      say: ["Same frame as last time, but I'm not going to show it to you anymore — you'll build it from memory."],
      do: ["Don't display the frame at any point today unless the student is fully stuck."],
      timing: "30 sec",
    },
    warmup: {
      goal: "Commit and defend in 20 seconds, no hedging — note whether the frame appears unprompted.",
      say: [
        "Twenty seconds — commit to a side, no hedging allowed. Is now a good time to start an AI startup, or is the market already too crowded?",
      ],
      do: [
        "Capture verbatim.",
        "Note privately whether the frame's shape shows up unprompted — that's a real signal for how internalized it already is.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Recall L4's 5 signposts unprompted, then reveal this lesson's 3 sharper additions.",
      say: [
        "Before anything new — give me L4's five signposts from memory.",
        "Now, three sharper versions: 'the key issue is', 'crucially', 'my recommendation would be'.",
      ],
      do: ["Hold the line on unprompted recall before moving to the new 3."],
      timing: "3 min",
    },
    highlight: {
      goal: "Show a pitch missing its Caveat and Recommendation — student identifies and supplies both live.",
      say: [
        "I'm going to give you a pitch, but it's missing two parts. Can you spot what's gone and add it?",
        "On the whole, I'd argue this startup has real potential. The key issue is the founding team's technical depth, and crucially, they already have a working prototype.",
      ],
      do: [
        "Type the incomplete pitch into box 1, let them identify the gap out loud, then use box 3 for your model of the missing Caveat + Recommendation.",
        "This tests recognizing the frame's shape, not just its vocabulary — a different skill than L4.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "Add a stronger second reason to a one-reason pitch, then a credible caveat.",
      say: ["Here's a pitch with only one reason — give me a second, stronger one. Then add a caveat.", "The key issue is their prototype works."],
      do: ["Push for a genuinely different second reason, not a restatement of the first."],
      timing: "3 min",
    },
    activity: {
      goal: "90 seconds, frame from memory, no scaffold — target: did all 4 frame parts land unaided?",
      say: ["Ninety seconds, no frame on screen this time.", "Should investors back an early-stage AI startup with no revenue yet?"],
      do: [
        "No frame visible — Mid support, from memory.",
        "Target-count: did all 4 frame parts land unaided? That number is what L8's harder rebuttal task builds on.",
      ],
      timing: "3 min",
    },
    pushit: {
      goal: "Delivery flourish — open the pitch with a rhetorical question hook.",
      say: ["One flourish: open with a question instead of a statement.", "What do investors actually buy when they back a startup with no revenue? Conviction."],
      do: ["This is delivery polish, not a new structural skill — keep it light."],
      timing: "1 min (optional)",
    },
    scorecard: {
      goal: "Closes the Frame block — flag if Persuasion/Structure hasn't visibly outscored L4.",
      say: ["This closes the Frame block — I want to see this score beat L4's on structure specifically."],
      do: ["Flag explicitly if Persuasion/Structure hasn't visibly outscored L4 — that's the actual proof the frame is internalized, not memorized."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L6's rebuttal bank — the Counter block starts next lesson.",
      say: ["New block starting next time: rebuttal. How to disagree with someone without sounding defensive. Take a look at the new words."],
      do: ["Flag that L6 is a new block (Counter), so the shift in lesson shape is expected."],
      timing: "1 min",
    },
  },
};

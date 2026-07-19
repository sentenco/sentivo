// ASCEND Lesson 7 — "Diplomatic Disagreement" — ⚔️ Counter (2/3) — Support: Mid

export default {
  id: "ascend-7",
  code: "L7",
  title: "Diplomatic Disagreement",
  type: "Counter",
  icon: "⚔️",
  support: "Mid",
  tag: "Progress",
  subtitle: "Same counter. Softer entry.",
  techniqueLine: "Warmth first, then the pushback — reverse the order and it lands worse.",
  bankWords: ["I see where you're coming from", "I'd gently push back", "there's another way to look at it", "if I can offer a different perspective", "I hear what you're saying, and"],

  warmup: {
    heading: null,
    questions: [
      "“Governments should regulate AI more strictly.”",
      "“AI regulation will slow down innovation too much.”",
      "“Companies can be trusted to regulate themselves.”",
    ],
  },

  vocabulary: {
    heading: "Vocabulary — the Softening Layer",
    rows: [
      { label: "Open warm", value: "I see where you're coming from…" },
      { label: "Signal a gentle pushback", value: "…but I'd gently push back on one part" },
      { label: "Offer an alternative angle", value: "there's another way to look at it:" },
      { label: "Ask permission to differ", value: "if I can offer a different perspective…" },
      { label: "Validate before countering", value: "I hear what you're saying, and here's my concern" },
    ],
  },

  highlight: {
    heading: "Three Rebuttals, Each Softer",
  },

  practice: {
    heading: "Yes-and-But",
    items: ["“Regulation kills innovation.” → must open with “I see where you're coming from” before disagreeing."],
  },

  activity: {
    heading: "Mini-Debate — Handle the Objection",
    prompt: "Your regulation stance, your choice.",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Reframe it — instead of countering directly, shift the frame of the argument itself.",
    model: "Maybe the real question isn't 'regulate or not,' but 'who gets to write the rules.'",
  },

  scorecard: {
    canDoLine: "I can soften a disagreement without losing my actual position.",
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
      { text: "I see where you're coming from" },
      " — regulation can slow things down. ",
      { text: "I'd gently push back" },
      ", though: some slowdown might be the price of avoiding real harm. ",
      { text: "There's another way to look at it" },
      ": maybe the real trade-off isn't speed versus safety at all. ",
      { text: "If I can offer a different perspective" },
      ", it's really about who gets to decide where that line sits. ",
      { text: "I hear what you're saying, and" },
      " here's my concern — leaving it entirely to companies rarely ends well.”",
    ],
    nextLabel: "Next lesson",
    nextBank: "No new bank — full recall of L6 and L7's rebuttal and softening language.",
  },

  teacherGuide: {
    cover: {
      goal: "Second Counter lesson. Support drops to Mid — softening language layers on top of L6's rebuttal bank.",
      say: ["Same move as last time — concede then counter — but today we're softening how it opens."],
      do: ["Briefly recap L6's move by name before introducing the new softening layer."],
      timing: "1 min",
    },
    warmup: {
      goal: "3 claims, agree/disagree + one-line reason each — capture whichever reaction is bluntest.",
      say: [
        "Three claims — for each, tell me agree or disagree, and one reason why.",
        "Governments should regulate AI more strictly.",
        "AI regulation will slow down innovation too much.",
        "Companies can be trusted to regulate themselves.",
      ],
      do: ["Capture whichever reaction is bluntest for the Highlight slide."],
      timing: "3 min",
    },
    vocabulary: {
      goal: "Fully visible softening layer — student attempts their own soft opener before you reveal the target.",
      say: ["For each move, try opening it softly yourself first — then I'll show you ours."],
      do: ["Run all 5 softening phrases as attempt-then-reveal, menu visible throughout."],
      timing: "4 min",
    },
    highlight: {
      goal: "Same disagreement delivered 3 ways, softening each time — the student should notice what changes.",
      say: [
        "Same disagreement, three versions, each one softer. Listen for what changes.",
        "That's true up to a point, but the bigger concern is unregulated harm.",
        "I see where you're coming from — but I'd gently push back: some slowdown might be the price of avoiding real harm.",
        "I hear what you're saying, and if I can offer a different perspective: maybe the real trade-off isn't speed versus safety at all.",
        "Which one felt the most sophisticated? Why?",
      ],
      do: [
        "Deliver all three versions yourself first so they hear the progression.",
        "Then use the two text boxes to build the softest version live with the student's own attempt.",
      ],
      timing: "5 min",
    },
    practice: {
      goal: "Every turn must validate before countering — no exceptions, even for weak claims.",
      say: ["No matter how weak the claim, you have to open with 'I see where you're coming from' before disagreeing.", "Regulation kills innovation."],
      do: ["Enforce the opener strictly — if they skip it, stop them and have them redo the turn."],
      timing: "3 min",
    },
    activity: {
      goal: "Student pitches, teacher objects once, student counters live with the softening layer required.",
      say: ["Pick a regulation stance, any stance. I'll object once, and you counter — softening layer required."],
      do: [
        "Let them choose their own stance.",
        "Object once, genuinely, then let them counter.",
        "Target-count: softening phrases used before each counter, not just the first one.",
      ],
      timing: "3 min",
    },
    pushit: {
      goal: "Reframe move — shift the frame of the argument instead of countering directly.",
      say: ["Instead of countering directly this time, try shifting the whole frame of the argument.", "Maybe the real question isn't 'regulate or not,' but 'who gets to write the rules.'"],
      do: ["This is a harder move — model it once before asking them to try."],
      timing: "1 min (optional)",
    },
    scorecard: {
      goal: "No comparison line this lesson.",
      say: ["No comparison today — just score where you are."],
      do: ["Score normally, no benchmark needed."],
      timing: "2 min",
    },
    homework: {
      goal: "No new bank for L8 — the student should arrive having fully recalled L6+L7's language from memory.",
      say: ["No new words before next time — just make sure L6 and L7's phrases are solid in your memory, because next lesson has no bank at all."],
      do: ["Warn them explicitly that L8 removes all support — this is their heads-up."],
      timing: "1 min",
    },
  },
};

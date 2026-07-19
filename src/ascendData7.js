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
    cover: "Second Counter lesson. Support drops to Mid — softening language is added on top of L6's rebuttal bank.",
    warmup: "3 claims, mark agree/disagree + one-line reason each. Capture whichever reaction is bluntest for the Highlight slide.",
    vocabulary: "Fully visible softening layer. Have the student attempt their own soft opener before revealing each target phrase.",
    highlight: "Deliver the same disagreement three times, softening each time — from an L6-level firm rebuttal, to a gently-pushed-back version, to the softest, most sophisticated reframe. The student should notice what changes between the three versions, not just hear them. Use the two text boxes to build the softest version live with the student.",
    practice: "Every turn must validate before countering, no exceptions, even for weak claims — open with 'I see where you're coming from' before disagreeing.",
    activity: "Student pitches a regulation stance of their choice; teacher objects once; student counters live, softening layer required. Target-count: softening phrases used before each counter, not just the first one.",
    pushit: "Reframe move — instead of countering directly, shift the frame of the argument itself.",
    scorecard: "No comparison line this lesson.",
    homework: "No new bank for L8 — the student should arrive having fully recalled L6 and L7's language from memory.",
  },
};

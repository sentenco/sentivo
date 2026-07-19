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
    heading: "Agree-or-fight — 3 claims.",
    instruction: "Mark agree/disagree + one-line reason each. Capture whichever reaction is bluntest.",
    questions: [
      "“Governments should regulate AI more strictly.”",
      "“AI regulation will slow down innovation too much.”",
      "“Companies can be trusted to regulate themselves.”",
    ],
  },

  vocabulary: {
    heading: "Vocabulary — the Softening Layer",
    note: null,
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
    intro: "Same disagreement with “Regulation will slow down innovation too much,” delivered 3 ways, softening each time.",
    before: "1. “That's true up to a point, but the bigger concern is unregulated harm.” (L6-level: fine, firmer)",
    after: "2. “I see where you're coming from — but I'd gently push back: some slowdown might be the price of avoiding real harm.” (softer)\n3. “I hear what you're saying, and if I can offer a different perspective: maybe the real trade-off isn't speed vs. safety, but which harms we're willing to risk.” (softest, most sophisticated)",
    note: "He should notice what changes between the three, not just hear them.",
  },

  practice: {
    heading: "Yes-and-But",
    instruction: "Every turn must validate before countering — no exceptions, even for weak claims.",
    items: ["“Regulation kills innovation.” → must open with “I see where you're coming from” before disagreeing."],
  },

  activity: {
    heading: "Mini-Debate — Handle the Objection",
    instruction: "Pitch a regulation stance of your choice. Teacher objects once. Counter live, softening layer required.",
    prompt: "Your regulation stance, your choice.",
    note: "Target-count: softening phrases used before each counter, not just the first one.",
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
    items: [
      { label: "Read your passage", detail: "An op-ed on AI regulation to react to." },
      { label: "Next lesson", detail: "No new bank — full recall of L6+L7's rebuttal and softening language." },
      { label: "Voice note (~3 min)", detail: "Counter diplomatically: “AI regulation is government overreach, plain and simple.”" },
    ],
  },
};

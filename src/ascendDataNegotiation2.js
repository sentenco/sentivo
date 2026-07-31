// ASCEND Contract Negotiation — Lesson 2 — "The 90-Second Case" — Frame

export default {
  id: "ascend-negotiation-2",
  code: "L2",
  title: "The 90-Second Case",
  type: "Frame",
  tag: "Framing",
  subtitle: "Structure a persuasive case on demand — not a rambling opinion.",
  slideOrder: ["cover", "warmup", "gimmick", "levelup", "closing"],

  warmup: {
    kind: "synonyms",
    items: [
      { pre: "Instead of accepting, they made a ", word: "different offer back", post: ".", upgraded: "counteroffer" },
      { pre: "Every negotiator needs to know their ", word: "point where they're willing to quit", post: ".", upgraded: "walk-away point" },
      { pre: "The delivery date is a ", word: "point we won't change", post: ".", upgraded: "non-negotiable term" },
    ],
  },

  gimmick: {
    kind: "frame",
    heading: "Build your case in 90 seconds",
    template: ["Position", "2 Reasons", "Caveat", "Recommendation"],
    prompts: [
      "Should we accept the supplier's price increase or push back?",
      "Should we agree to the client's shorter payment terms?",
    ],
  },

  closing: { kind: "words", heading: "Before next lesson",
    body: "Write these down and keep them close — you'll need them next lesson.",
    words: ["leverage", "concession", "term sheet"] },

  teacherGuide: {
    cover: {
      goal: "Introduce framing as a skill — structure over speaking freely.",
      say: ["Today's about structure. Not what you say, but the order you say it in."],
      do: [],
      timing: "1 min",
    },
    warmup: {
      goal: "Student produces the leveled-up phrase for each highlighted word, recalling last lesson's target vocabulary.",
      say: ["I'll read a sentence with a simple phrase highlighted. Try to say it in a more precise, professional way before I show you the target."],
      do: [
        "Read each sentence aloud with emphasis on the highlighted phrase.",
        "Let them attempt the upgrade first, then reveal the target phrase — it should match their sticky note from last lesson.",
      ],
      timing: "4 min",
    },
    gimmick: {
      goal: "Student builds a 90-second case using Position → 2 Reasons → Caveat → Recommendation.",
      say: [
        "Here's the shape: your position, two reasons, one caveat, then a recommendation.",
        "Take 90 seconds and build your case out loud.",
      ],
      do: [
        "First attempt with the template visible.",
        "Switch to the second prompt and hide the template for round two — see how much of the structure they hold onto without it.",
        "Coach live — this isn't graded, just corrected in the moment.",
      ],
      timing: "10 min",
    },
    levelup: {
      goal: "Take a rough sentence from today's lesson and upgrade it live.",
      say: ["Something you said a minute ago — let's sharpen it."],
      do: ["Pull from anywhere in today's lesson, not just Warm-up."],
      timing: "4 min",
    },
    closing: {
      goal: "Hand off Lesson 3's 3 words.",
      say: ["Three new words for next time — sticky note, same as before."],
      do: [],
      timing: "1 min",
    },
  },
};

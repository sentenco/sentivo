// ASCEND Lesson 4 — "The 90-Second Case" — 🏛 Frame (1/2) — Support: High

export default {
  id: "ascend-4",
  code: "L4",
  title: "The 90-Second Case",
  type: "Frame",
  icon: "🏛",
  support: "High",
  tag: "Progress",
  subtitle: "You have the words. Now give them a shape.",
  techniqueLine: "Position → 2 Reasons → Caveat → Recommendation.",
  bankWords: ["firstly", "more importantly", "that said", "on balance", "I'd recommend"],

  warmup: {
    heading: null,
    questions: ["Should every company be investing in AI right now?"],
  },

  vocabulary: {
    heading: "Vocabulary — the Frame's signposts",
    rows: [
      { label: "Position", value: "On the whole, I'd argue that…" },
      { label: "Reason 1", value: "Firstly, …" },
      { label: "Reason 2", value: "More importantly, …" },
      { label: "Caveat", value: "That said, …" },
      { label: "Recommendation", value: "On balance, I'd recommend…" },
    ],
  },

  highlight: {
    heading: "Rambling vs Framed",
  },

  practice: {
    heading: "Frame the Slots",
    items: [
      "4 loose ideas about AI investment — slot each into Position, Reasons, Caveat, or Recommendation, out loud, frame visible on screen.",
    ],
  },

  activity: {
    heading: "The 90-Second Case (frame on screen)",
    prompt: "Should a mid-sized company invest in AI now, or wait?",
  },

  pushIt: {
    heading: "Push It",
    prompt: "Add a rhetorical device to the Recommendation line — rule of three.",
    model: "I'd recommend a phased, measured, and reversible investment.",
  },

  scorecard: {
    canDoLine: "I can structure an opinion into a clear, persuasive case instead of a list of ideas.",
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
      "On the whole, most companies should start exploring AI now rather than waiting. ",
      { text: "Firstly" },
      ", early movers are already pulling ahead. ",
      { text: "More importantly" },
      ", the cost of retrofitting later is far higher than adapting early. ",
      { text: "That said" },
      ", smaller companies need to move carefully. ",
      { text: "On balance" },
      ", ",
      { text: "I'd recommend" },
      " a phased rollout rather than an all-in bet.",
    ],
    nextBank: "the key issue is · crucially · my recommendation would be (plus recall L4's 5)",
  },

  teacherGuide: {
    cover: {
      goal: "First Frame lesson. Frame = Position → 2 Reasons → Caveat → Recommendation, fully visible today.",
      say: [
        "New skill starting today — not new words, but a shape for organizing an argument. Four parts: your position, two reasons, a caveat, then your recommendation.",
      ],
      do: ["Say the four-part shape out loud once now — they'll see it again on the Vocabulary slide."],
      timing: "1 min",
    },
    warmup: {
      goal: "One-breath opinion, no pausing to plan — expect rambling, that's the raw material for Highlight.",
      say: ["One breath, no planning — should every company be investing in AI right now? Go."],
      do: [
        "Let them ramble — don't interrupt, don't help them organize it.",
        "Capture the full rambling answer as close to verbatim as you can; you'll rebuild it live on the Highlight slide.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "This bank IS the frame's signposts, not vocabulary — treat each phrase as a slot in the structure.",
      say: [
        "These five phrases aren't new words to learn — they're labels for the four parts of the frame.",
        "Position: 'On the whole, I'd argue that...' Reason one: 'Firstly...' Reason two: 'More importantly...' Caveat: 'That said...' Recommendation: 'On balance, I'd recommend...'",
      ],
      do: ["Run the same reveal-game format, but explicitly name which frame-slot each phrase belongs to as you go."],
      timing: "4 min",
    },
    highlight: {
      goal: "Reorganize the rambling Warm-up answer into the frame — the point is: same ideas, only the order changed.",
      say: [
        "Let's take what you said earlier and put it into the frame — same ideas, just organized.",
        "Here's how I'd frame it — notice we didn't add any new content, we just reordered it.",
      ],
      do: [
        "Type the rambling Warm-up answer into box 1.",
        "Challenge them to reorganize it into the frame (not just rephrase it) before revealing your own framed version.",
        "Land the point explicitly: structure is now their visible ceiling, the same way precision was in L1.",
      ],
      timing: "5 min",
    },
    practice: {
      goal: "Slot 4 loose ideas into the frame, out loud, frame visible on screen.",
      say: ["I'm going to give you four loose ideas about AI investment — you tell me which slot each one goes in."],
      do: ["Don't correct content — only whether each idea landed in the right slot (Position/Reason/Caveat/Recommendation)."],
      timing: "3 min",
    },
    activity: {
      goal: "90-second case, frame visible, reuse 2+ Upgrade collocations — the first real compounding moment.",
      say: [
        "Ninety seconds, frame stays on screen. And this time, try to reuse a word or two from the Upgrade lessons inside your case.",
        "Should a mid-sized company invest in AI now, or wait?",
      ],
      do: [
        "Frame stays visible — this is High support.",
        "Target-count: signposts landed out of 5, plus collocations reused from L1-L3.",
      ],
      timing: "3 min",
    },
    pushit: {
      goal: "Small polish — add a rule-of-three to the Recommendation line.",
      say: ["One polish: end your recommendation with a rule of three — three words or phrases in a row."],
      do: ["Model it once: 'a phased, measured, and reversible investment.'"],
      timing: "1 min (optional)",
    },
    scorecard: {
      goal: "No comparison line yet — L4 opens a new block.",
      say: ["No comparison today — this is a fresh block, so this score is its own new baseline."],
      do: ["Score normally; just don't force a comparison to Upgrade-block numbers, they measure different things."],
      timing: "2 min",
    },
    homework: {
      goal: "Preview L5's 3 new signposts plus a recall reminder of L4's 5.",
      say: ["Read this passage, then glance at next lesson's words — three new ones, plus you'll need to recall today's five from memory."],
      do: ["Flag explicitly that L5 removes the frame from the screen — warn them support is about to drop."],
      timing: "1 min",
    },
  },
};

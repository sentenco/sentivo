// ASCEND Lesson 1 — "The Upgrade Reveal" — 🔧 Upgrade (1/3) — Baseline diagnostic

export default {
  id: "ascend-1",
  code: "L1",
  title: "The Upgrade Reveal",
  type: "Upgrade",
  icon: "🔧",
  support: "High",
  tag: "Baseline",
  subtitle: "Find the exact words you're missing — then use them.",
  techniqueLine: "Live upgrade of your own sentence. Precision, not vocabulary.",
  bankWords: ["advancing at a remarkable pace", "widespread adoption", "reshape the labour market"],
  gradedActivities: true,
  slideOrder: ["cover", "warmup", "vocabulary", "practice", "highlight", "scorecard", "homework"],

  warmup: {
    heading: null,
    questions: ["What's the first thing that comes to mind when you think about AI in business?"],
  },

  vocabulary: {
    heading: "Vocabulary",
    rows: [
      { label: "it's getting better fast", value: "advancing at a remarkable pace" },
      { label: "lots of companies use it", value: "widespread adoption across industries" },
      { label: "it will change jobs", value: "reshape the labour market" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade",
  },

  practice: {
    heading: "Swap It Up",
    items: [
      { pre: "AI is really ", target: "good", post: " at finding patterns in huge datasets.", hint: "sophisticated · powerful · advanced" },
      { pre: "Many companies ", target: "use", post: " AI to speed up customer support.", hint: "leverage · deploy · adopt" },
      { pre: "The technology is ", target: "growing", post: " incredibly quickly across every industry.", hint: "advancing · accelerating · expanding" },
      { pre: "Automation could ", target: "change", post: " the way entire industries operate.", hint: "transform · reshape · redefine" },
      { pre: "Even the best AI tools still have some ", target: "problems", post: " that need fixing.", hint: "limitations · shortcomings · flaws" },
    ],
  },

  scorecard: {
    canDoLine: "I can describe AI's impact on business using precise, natural collocations instead of vague words.",
    rows: [
      { label: "Precision", max: 3, source: "practice" },
      { label: "Nuance", max: 3, source: "highlight" },
      { label: "Persuasion/Structure", max: 6, source: "vocabulary" },
      { label: "Interaction under pressure", max: 6, source: "warmup" },
    ],
    totalMax: 18,
    scoreTag: "baseline",
    compareLine: null,
  },

  homework: {
    heading: "Before next lesson",
    passage: [
      "Artificial intelligence is ",
      { text: "advancing at a remarkable pace" },
      ", and across almost every sector, companies now report ",
      { text: "widespread adoption" },
      " of AI-powered tools. Many analysts believe it will ",
      { text: "reshape the labour market" },
      " within the next decade, changing how entire industries operate.",
    ],
    nextBank: "drive revenue · pressing challenge · gain a competitive edge",
  },

  teacherGuide: {
    cover: {
      goal: "Set the frame for the lesson type and today's baseline goal.",
      say: [
        "Today we're doing something a little different — we're going to find the exact words you're missing, not new vocabulary, just more precise versions of what you already know.",
        "This is our baseline lesson, so don't worry about getting it right — we're just measuring where you are right now.",
      ],
      do: [
        "Let the title sit on screen for a few seconds before moving on.",
        "Don't explain the bank yet — that comes on the next slide.",
      ],
      timing: "1 min",
    },
    warmup: {
      goal: "Secretly capture the student's raw, unedited sentence for later use on the Highlight slide.",
      say: [
        "Quick question — don't overthink it, just answer straight away.",
        "What's the first thing that comes to mind when you think about AI in business?",
      ],
      do: [
        "Give zero prep time — that's the whole point of 'impromptu'.",
        "Write down their exact sentence, word for word, even if it's rough. You'll need it on the Highlight slide, later in the lesson.",
        "Don't correct anything yet — just capture it.",
        "Rate how they handled speaking with zero prep 0–3 — this becomes this lesson's Interaction under pressure score.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Teach the 3 collocations as a game — student attempts before you reveal, not a list to read.",
      say: [
        "Before I show you the answer, this is a bit of a game.",
        "I'll show you a simple sentence, and I want you to try upgrading it yourself out loud — however it comes out is fine.",
        "Then I'll tap the button and show you our version, and we'll compare.",
        "Quick definition since this is new: a collocation is just a natural pairing of words — native speakers say 'make a decision', not 'do a decision'. Same idea, just business language.",
      ],
      do: [
        "Read the vague phrase on screen aloud.",
        "Pause and let the student attempt their own upgrade — accept anything, don't correct yet.",
        "Tap 'Show our version' to reveal, then compare out loud.",
        "Repeat for all 3 phrases using Next.",
        "Rate how well-formed their spontaneous attempts were 0–3 — this becomes this lesson's Persuasion/Structure score.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "Graded activity. 5 sentences, one highlighted word each — student proposes a sharper single-word swap, you mark it.",
      say: [
        "Same idea as the vocabulary game, but now it's just one word at a time, and this one's graded.",
        "I'll read the sentence — the highlighted word is the one we're upgrading. Give me a better word.",
      ],
      do: [
        "Read each sentence aloud, with emphasis on the highlighted word.",
        "Let the student attempt their own swap first — only tap 'Show ideas' if they're stuck.",
        "Mark ✓ or ✗ based on whether their word is a genuine upgrade — the tally becomes this lesson's Precision score.",
      ],
      timing: "5 min",
    },
    highlight: {
      goal: "Personally upgrade the exact sentence they gave you in the Warm-up — the core moment of the lesson, now placed mid-lesson after they've warmed up on Vocabulary and Swap It Up.",
      say: [
        "Remember what you said at the very start? Let's look at it together.",
        "Now — can you try saying that again, but using one or two of today's words?",
        "Here's how I'd say it — listen for the difference.",
      ],
      do: [
        "Type their exact Warm-up sentence into the Before box.",
        "Ask them to rephrase it out loud using today's bank — give them a real attempt, don't rush them.",
        "Type the upgraded version into the After box, reading it aloud as you type.",
        "Rate the upgrade 0–3 — this becomes this lesson's Nuance score.",
      ],
      timing: "4 min",
    },
    scorecard: {
      goal: "All four rows are pre-filled from the graded slides — confirm or adjust, then log it as the baseline.",
      say: [
        "Let's put a number on today — this is our starting point, not a test you can fail.",
        "This whole card is already filled in from what we just did — I'll just double-check it with you.",
      ],
      do: [
        "All four rows auto-fill from the graded slides (Warm-up, Vocabulary, Swap It Up, Live Upgrade) — adjust only if something clearly doesn't reflect what happened.",
        "Total shows automatically.",
        "Download the result and save it somewhere — you'll compare directly against this in L10.",
      ],
      timing: "2 min",
    },
    homework: {
      goal: "Reinforce today's 3 collocations through the reading passage, and preview next lesson's bank.",
      say: [
        "Before next time, read through this passage a couple of times — notice how today's three phrases sit naturally in real sentences.",
        "Also take a quick look at next lesson's words at the bottom — you don't need to know them yet, just get your eyes on them.",
      ],
      do: [
        "Point out the highlighted phrases in the passage as pronunciation/stress practice, not just reading.",
        "Make sure they see the 'Next lesson's bank' box before closing.",
      ],
      timing: "1 min",
    },
  },
};

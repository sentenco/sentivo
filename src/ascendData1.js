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
  bankWords: ["advancing at a remarkable pace", "widespread adoption", "broad range of applications", "reshape the labour market", "notable limitations"],

  warmup: {
    heading: null,
    questions: ["What's the first thing that comes to mind when you think about AI in business?"],
  },

  vocabulary: {
    heading: "Vocabulary",
    rows: [
      { label: "it's getting better fast", value: "advancing at a remarkable pace" },
      { label: "lots of companies use it", value: "widespread adoption across industries" },
      { label: "it can do a lot of things", value: "a broad range of applications" },
      { label: "it will change jobs", value: "reshape the labour market" },
      { label: "it's not perfect", value: "notable limitations" },
    ],
  },

  highlight: {
    heading: "The Live Upgrade",
  },

  practice: {
    heading: "Swap It Up",
    items: [
      "“It's getting better fast.” → ?",
      "“Lots of companies use it.” → ?",
      "“It can do a lot of things.” → ?",
      "“It's not perfect.” → ?",
    ],
  },

  activity: {
    heading: "60-Second Briefing (the diagnostic)",
    prompt: "How is AI changing business right now?",
  },

  pushIt: {
    heading: "Push It",
    prompt: "One more idea, no timer: describe a business you know using 2+ collocations from today's bank.",
    model: "The industry is advancing at a remarkable pace, and even smaller companies now show widespread adoption of AI tools.",
  },

  scorecard: {
    canDoLine: "I can describe AI's impact on business using precise, natural collocations instead of vague words.",
    rows: [
      { label: "Precision", max: 3 },
      { label: "Nuance", max: 3 },
      { label: "Persuasion/Structure", max: 6 },
      { label: "Interaction under pressure", max: 6 },
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
      " of AI-powered tools. From customer service to logistics, the technology already covers a ",
      { text: "broad range of applications" },
      " — and many analysts believe it will ",
      { text: "reshape the labour market" },
      " within a decade. That said, even the most advanced systems still show ",
      { text: "notable limitations" },
      ", particularly when it comes to judgment and context.",
    ],
    nextBank: "drive revenue · disrupt entire sectors · pressing challenge · weigh the trade-offs · gain a competitive edge",
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
        "Write down their exact sentence, word for word, even if it's rough. You'll need it in a few minutes.",
        "Don't correct anything yet — just capture it.",
      ],
      timing: "2 min",
    },
    vocabulary: {
      goal: "Teach the 5 collocations as a game — student attempts before you reveal, not a list to read.",
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
        "Repeat for all 5 phrases using Next.",
      ],
      timing: "5 min",
    },
    highlight: {
      goal: "Personally upgrade the exact sentence they gave you in the Warm-up — the core moment of the lesson.",
      say: [
        "Remember what you said a few minutes ago? Let's look at it together.",
        "Now — can you try saying that again, but using one or two of today's words?",
        "Here's how I'd say it — listen for the difference.",
      ],
      do: [
        "Type their exact Warm-up sentence into box 1.",
        "Ask them to rephrase it out loud using today's bank — give them a real attempt, don't rush them.",
        "Type your own upgraded model into box 3, reading it aloud as you type.",
        "Compare all three versions out loud: their original, their attempt, your model.",
      ],
      timing: "4 min",
    },
    practice: {
      goal: "Fast recall drill with the bank still fully visible.",
      say: [
        "Quick fire round — bank's still up, just react fast, don't think too hard.",
        "It's getting better fast.",
        "Lots of companies use it.",
        "It can do a lot of things.",
        "It's not perfect.",
      ],
      do: [
        "Say each vague sentence and let the student respond immediately with the upgrade.",
        "Correct gently only if they use the wrong collocation — this is reflex training, not new teaching.",
      ],
      timing: "3 min",
    },
    activity: {
      goal: "The actual diagnostic. Count collocations — this number is the baseline every future lesson has to beat.",
      say: [
        "Okay, this one's timed — 60 seconds, and I want you to just talk, don't stop even if you stumble.",
        "How is AI changing business right now?",
        "Go.",
      ],
      do: [
        "Start a 60-second timer the moment they begin.",
        "Silently tally every collocation they use from the bank — write the number down somewhere private, this is the baseline.",
        "Don't interrupt or correct during the 60 seconds.",
      ],
      timing: "2 min",
    },
    pushit: {
      goal: "Optional bonus rep, no pressure, only if time allows.",
      say: [
        "If we've got a minute — one more, no timer this time, just for fun.",
        "Describe a business you know using two of today's words.",
      ],
      do: [
        "Skip this slide entirely if you're short on time — it's not required.",
        "No correction needed here, just enjoy the extra rep.",
      ],
      timing: "2 min (optional)",
    },
    scorecard: {
      goal: "Score today's performance and log it as the baseline for every future comparison.",
      say: [
        "Let's put a number on today — this is our starting point, not a test you can fail.",
        "I'm going to score you on four things: precision, nuance, structure, and how you handled the pressure.",
      ],
      do: [
        "Fill in each score based on the Activity performance, using the collocation count as your main signal for Precision and Persuasion/Structure.",
        "Total shows automatically.",
        "Download the result and save it somewhere — you'll compare directly against this in L10.",
      ],
      timing: "2 min",
    },
    homework: {
      goal: "Preview next lesson's bank so it isn't a surprise, using the passage as reinforcement reading.",
      say: [
        "Before next time, read through this passage a couple of times — notice how the five phrases sit naturally in real sentences.",
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

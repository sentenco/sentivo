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
    cover: "Introduce the lesson type — Upgrade — and today's goal: prove the student can move from vague language to precise collocations. This is the baseline lesson; there's no incoming homework to check.",
    warmup: "This is the secret-capture moment. Ask the question and let the student answer immediately, with no prep time — that's what 'impromptu' means here. Silently note their exact sentence; you'll use it on the Highlight slide. Don't correct anything yet.",
    vocabulary: "This is a game, not a table read-through. For each phrase: show the vague version, ask the student to attempt their own upgrade out loud, then tap 'Show our version' to reveal the target. If this is the student's first Upgrade lesson, explain what a collocation is before you start: a natural pairing of words native speakers use together, e.g. 'make a decision', not 'do a decision'. The goal is recognizing why the upgraded version sounds more natural, not memorizing a list.",
    highlight: "Type the student's actual Warm-up sentence into box 1, exactly as they said it. Then challenge them out loud: 'Can you say that more precisely?' Give them a real attempt before you reveal your own model version in box 3 — this personal, in-the-moment comparison is the core moment of the lesson.",
    practice: "Bank is fully visible for this drill. Say the vague version, let the student respond, and only correct if they pick the wrong collocation from the bank — this is about recall and reflex, not new thinking.",
    activity: "This is the diagnostic. Bank stays visible since this is a High-support lesson (shown as a chip row above the prompt). Time the student for exactly 60 seconds. Silently count how many collocations they use and write the number down — this is the baseline every future lesson, and eventually L10's re-test, has to beat.",
    pushit: "Optional — only use if time allows. No timer, no pressure. It's a bonus rep before scoring, not a test.",
    scorecard: "Score based on today's performance, not memory. Use the collocation count from the Activity slide to help judge Precision and Persuasion/Structure.",
    homework: "Preview next lesson's bank with the student before they leave, so it isn't the first time they see it in L2.",
  },
};

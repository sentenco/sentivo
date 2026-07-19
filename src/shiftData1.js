// SHIFT Lesson 1 — Past Simple vs Past Continuous (baseline)
// Theme: interruptions and "what was happening when..." stories

export default {
  id: "shift-1",
  code: "L1",
  title: "Past Simple vs Past Continuous",
  tenses: "Past Simple vs Past Continuous",
  theme: "Interruptions and \"what was happening when…\" stories",
  mainGoal: "The learner can distinguish between an ongoing background action and a short interrupting event in real-time speech.",
  tag: "Baseline",

  warmup: {
    onScreen: "What were you doing at 8 p.m. last night? Then what happened?",
    teacherPrompt: "Ask for one answer in past continuous, then one follow-up event in past simple.",
    expectedOutput: "I was watching TV. Then my phone rang.",
  },
  contrast: {
    examples: ["I was taking a shower.", "The phone rang."],
    prompt: "Ask which action was in progress and which one interrupted.",
    keyPoint: "Past continuous = background action; past simple = completed interrupting event.",
  },
  makeIt: {
    onScreen: "was/were + verb-ing; verb 2 for the short event",
    models: ["I was studying when my mom came home."],
    note: "Quick transforms: affirmative, negative, question.",
  },
  trigger: {
    prompts: [
      "What were you doing when your phone rang?",
      "What were you doing when you heard a strange noise?",
      "What happened while you were eating dinner?",
    ],
    cue: "“Long action?” / “Interrupting event?”",
  },
  interrupt: {
    onScreen: "Yesterday evening, you were relaxing at home. Suddenly, something unexpected happened.",
    cueWords: ["relaxing", "phone", "dog", "neighbor", "fall", "laugh"],
    teacherMove: "Stop only at tense errors and require immediate restart from the error point.",
  },
  samestory: {
    rounds: ["Tell the whole event", "Focus on the background", "Focus on the interruption"],
    purpose: "Repeat the same event with different tense emphasis.",
  },
  clockturn: {
    baseSentence: "I study English.",
    cueChain: ["at 7 p.m. yesterday", "when my friend called", "last night", "while I was studying", "suddenly"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: [
      "What were you doing before this class?",
      "What happened while you were getting ready today?",
      "Tell me one short story using both tenses.",
    ],
    rule: "No notes, delayed feedback after the turn.",
  },
  scorecard: {
    teacherNote: "Highlight whether the learner chose the background tense quickly enough.",
    canDoLine: "I can distinguish a background action from a short interrupting event in real time.",
  },
  retention: {
    homework: "3 past continuous sentences, 3 past simple event sentences, 2 combined “I was ___ when ___ happened” sentences.",
  },

  teacherGuide: {
    cover: {
      goal: "Set the frame — this is speaking-under-pressure practice, not a grammar lecture.",
      say: ["Today we're working on quick, correct tense choice while you're actually talking — not filling in a worksheet."],
      do: ["Keep energy up — this is the baseline lesson, first read on where he actually is."],
      timing: "1 min",
    },
    warmup: {
      goal: "Get one live sample of background + interrupting event before teaching anything.",
      say: ["What were you doing at 8 p.m. last night?", "Then what happened?"],
      do: ["Ask for one answer in past continuous, then one follow-up event in past simple.", "Expected: “I was watching TV. Then my phone rang.” Don't correct yet — just note what he actually produces."],
      timing: "2 min",
    },
    contrast: {
      goal: "Make the meaning distinction explicit using his own example or the model pair.",
      say: ["I was taking a shower.", "The phone rang.", "Which action was already in progress? Which one interrupted it?"],
      do: ["Land the rule: past continuous = background action; past simple = completed interrupting event."],
      timing: "2 min",
    },
    makeit: {
      goal: "Show the form fast — this isn't the focus, just a quick anchor.",
      say: ["was/were + verb-ing for the long action; simple past for the short event.", "I was studying when my mom came home."],
      do: ["Drill affirmative, negative, and question forms quickly — don't linger."],
      timing: "3 min",
    },
    trigger: {
      goal: "Fast tense-choice reps — 3-5 second response window, no thinking time.",
      say: ["What were you doing when your phone rang?", "What were you doing when you heard a strange noise?", "What happened while you were eating dinner?"],
      do: ["Cue with “long action?” or “interrupting event?” if he stalls.", "Keep the pace brisk — this trains speed, not just accuracy."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Free speech with live tense-error correction.",
      say: ["Yesterday evening, you were relaxing at home. Suddenly, something unexpected happened.", "Use these if you want: relaxing, phone, dog, neighbor, fall, laugh."],
      do: ["Let him talk freely.", "Stop ONLY at tense errors — require an immediate restart from the error point, not a full redo."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same content, three tense-emphasis angles — builds flexible retrieval, not memorized lines.",
      say: ["Tell the whole event.", "Now tell it again, but focus on the background.", "Now tell it again, but focus on the interruption."],
      do: ["Same event, three tellings — listen for whether the tense shifts naturally with the focus."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate one base sentence as the time cue keeps changing.",
      say: ["I study English.", "at 7 p.m. yesterday...", "when my friend called...", "last night...", "while I was studying...", "suddenly..."],
      do: ["Feed cues one at a time, no pause between them — he should reformulate instantly each time."],
      timing: "3 min",
    },
    pressure: {
      goal: "Live production with no notes — the real test of this lesson.",
      say: ["What were you doing before this class?", "What happened while you were getting ready today?", "Tell me one short story using both tenses."],
      do: ["No notes allowed.", "Hold feedback until after the full turn is done — don't interrupt here."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score today — this is the baseline every future SHIFT lesson gets compared against.",
      say: ["Let's score today. This is your starting point for this whole track."],
      do: ["Score all 4 dimensions.", "Specifically note whether he chose the background tense quickly enough — that's the real signal here, not just accuracy."],
      timing: "2 min",
    },
    retention: {
      goal: "Give a short, recyclable production task before next lesson.",
      say: ["Before next time: record 3 past continuous sentences, 3 past simple event sentences, and 2 combined ‘I was ___ when ___ happened’ sentences."],
      do: ["This homework reappears as the warm-up review at the start of Lesson 2."],
      timing: "1 min",
    },
  },
};

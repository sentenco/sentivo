// SHIFT Lesson 2 — Past Simple vs Past Continuous (expanded control)
// Theme: accidents, interruptions, and surprising moments

export default {
  id: "shift-2",
  code: "L2",
  title: "Past Simple vs Past Continuous",
  tenses: "Past Simple vs Past Continuous (expanded control)",
  theme: "Accidents, interruptions, and surprising moments",
  mainGoal: "The learner uses the same contrast more fluently and with less visual support.",
  tag: "Progress",

  warmup: {
    onScreen: "What were you doing when you last got an unexpected message?",
    expectedOutput: "One background clause and one interrupting event.",
  },
  contrast: {
    examples: [
      "I cooked dinner when he arrived.",
      "I was cooking dinner when he arrived.",
      "I slept when the alarm rang.",
      "I was sleeping when the alarm rang.",
    ],
    prompt: "Which sentence sounds right and why?",
  },
  makeIt: {
    onScreen: "Sentence frame builder",
    models: [
      "While I was ___, ___ happened.",
      "I was ___ when ___.",
      "___ happened while I was ___.",
    ],
    note: "Same contrast in multiple sentence shapes.",
  },
  trigger: {
    prompts: [
      "What were you doing when the lights went out?",
      "What happened while you were walking home?",
      "What were you doing when someone knocked on the door?",
      "What happened while you were talking on the phone?",
    ],
    cue: "4 seconds per answer.",
  },
  interrupt: {
    onScreen: "There was a small accident in your street yesterday. Describe what people were doing when it happened.",
    cueWords: ["driver", "child", "shopkeeper", "neighbor"],
    teacherMove: "Cue with “background?” “short event?” “again.”",
  },
  samestory: {
    task: "Tell one accident story three ways: normal version, background-heavy version, event-heavy version.",
    purpose: "Increase tense contrast control with stable vocabulary.",
  },
  clockturn: {
    baseSentence: "I walk home.",
    cueChain: ["yesterday", "at 6 p.m. yesterday", "when it started to rain", "while I was walking", "suddenly"],
    goal: "Switch forms without pausing.",
  },
  pressure: {
    prompts: [
      "What were you doing at lunchtime yesterday?",
      "What happened during dinner last night?",
      "Tell me about one funny interruption.",
    ],
    rule: "Do not show sentence stems.",
  },
  scorecard: {
    teacherNote: "Add a note on reduced hesitation compared with Lesson 1.",
    canDoLine: "I can tell an interruption story fluently, with less visual support than Lesson 1.",
  },
  retention: {
    homework: "Record a 30-second voice retell of one interruption story using both tenses.",
  },

  teacherGuide: {
    cover: {
      goal: "Same contrast as L1 — today with less support, more fluency pressure.",
      say: ["Same two tenses as last time — today we push for more speed and less support."],
      do: ["Quick recap only if needed — don't re-teach the rule from scratch."],
      timing: "1 min",
    },
    warmup: {
      goal: "Quick recall check from L1's homework, live.",
      say: ["What were you doing when you last got an unexpected message?"],
      do: ["Listen for one background clause and one interrupting event — this is his L1 homework pattern in action."],
      timing: "2 min",
    },
    contrast: {
      goal: "Sharpen the contrast using paired near-identical sentences.",
      say: ["I cooked dinner when he arrived. / I was cooking dinner when he arrived.", "I slept when the alarm rang. / I was sleeping when the alarm rang.", "Which sentence sounds right for each — and why?"],
      do: ["Push him to explain the meaning difference, not just pick one."],
      timing: "2 min",
    },
    makeit: {
      goal: "Give three sentence shapes for the same contrast so it's not memorized as one fixed pattern.",
      say: ["While I was ___, ___ happened.", "I was ___ when ___.", "___ happened while I was ___."],
      do: ["Have him produce one real sentence in each shape."],
      timing: "3 min",
    },
    trigger: {
      goal: "Faster reps than L1 — 4-second window.",
      say: ["What were you doing when the lights went out?", "What happened while you were walking home?", "What were you doing when someone knocked on the door?", "What happened while you were talking on the phone?"],
      do: ["Keep a strict ~4 second response window this time."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Free narration with role cards, correcting only tense errors.",
      say: ["There was a small accident in your street yesterday. Describe what people were doing when it happened.", "Try using: driver, child, shopkeeper, neighbor."],
      do: ["Cue with “background?” “short event?” “again.”", "Interrupt only at tense errors."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same accident story told three different ways.",
      say: ["Tell the story normally.", "Now tell it again, but focus on the background.", "Now tell it again, but focus on the event."],
      do: ["Keep vocabulary stable across all three tellings so only the tense focus shifts."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate without pausing between cues.",
      say: ["I walk home.", "yesterday...", "at 6 p.m. yesterday...", "when it started to rain...", "while I was walking...", "suddenly..."],
      do: ["No pause between cues — that's the whole point of this slide today."],
      timing: "3 min",
    },
    pressure: {
      goal: "No visible sentence stems this time — a step up from L1.",
      say: ["What were you doing at lunchtime yesterday?", "What happened during dinner last night?", "Tell me about one funny interruption."],
      do: ["Do not show sentence stems.", "Delay feedback until after each full answer."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score and explicitly compare hesitation/speed to Lesson 1.",
      say: ["Let's score today, and compare it to Lesson 1."],
      do: ["Note whether hesitation dropped compared with L1 — that's the headline signal for this lesson."],
      timing: "2 min",
    },
    retention: {
      goal: "Push production into a spontaneous spoken format, not written sentences.",
      say: ["Before next time: record a 30-second voice retell of one interruption story, using both tenses."],
      do: ["Voice note, not text — this trains real spontaneous production."],
      timing: "1 min",
    },
  },
};

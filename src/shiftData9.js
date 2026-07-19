// SHIFT Lesson 9 — Narrative mix: Past Simple + Past Continuous + Present Perfect
// Theme: personal stories and recent updates

export default {
  id: "shift-9",
  code: "L9",
  title: "Narrative Mix",
  tenses: "Past Simple + Past Continuous + Present Perfect",
  theme: "Personal stories and recent updates",
  mainGoal: "The learner maintains tense control in longer storytelling turns.",
  tag: "Progress",

  warmup: {
    onScreen: "Tell me about something surprising that has happened recently.",
    teacherPrompt: "Follow-up: What were you doing when it happened? When exactly did it happen?",
  },
  contrast: {
    examples: ["Recent importance now", "Background action", "Finished event"],
    prompt: "Match each idea to a tense.",
  },
  makeIt: {
    onScreen: "present perfect = recent update; past continuous = background scene; past simple = main event",
    models: ["Something strange has happened this week. I was walking home when I saw…"],
  },
  trigger: {
    prompts: [
      "Tell me something that has happened this month.",
      "What were you doing when it happened?",
      "What happened next?",
    ],
    cue: "Goal: a 3-part tense sequence in one story.",
  },
  interrupt: {
    onScreen: "Tell a 45-second story about a recent memorable event.",
    teacherMove: "Cue with “recent until now?” “background?” “main event?”",
  },
  samestory: {
    rounds: ["Update first", "Scene first", "Event first"],
    purpose: "Flexible tense control in extended speech.",
  },
  clockturn: {
    baseSentence: "Something strange happens to me.",
    cueChain: ["this week", "yesterday at 6", "while I was walking", "then", "recently"],
    goal: "Instant reformulation with changing time logic.",
  },
  pressure: {
    prompts: ["Tell me one story with all three tenses.", "No notes, 30 seconds."],
    rule: "Delay feedback to preserve spontaneity.",
  },
  scorecard: {
    teacherNote: "Focus on control across a multi-sentence narrative, not one isolated item.",
    canDoLine: "I can maintain tense control across a longer storytelling turn, not just in single sentences.",
  },
  retention: {
    homework: "Send a voice note: one recent update plus one detailed event story.",
  },

  teacherGuide: {
    cover: {
      goal: "First narrative-length lesson — combines everything from L1-L8 into real storytelling.",
      say: ["Today we combine three tenses inside one real story — this is the first time we've done full narrative, not just single sentences."],
      do: ["Frame this as the synthesis lesson before the L10 capstone."],
      timing: "1 min",
    },
    warmup: {
      goal: "Elicit a natural multi-tense story attempt, unscaffolded.",
      say: ["Tell me about something surprising that has happened recently."],
      do: ["Follow up with: “What were you doing when it happened?” and “When exactly did it happen?”", "Listen for all three tense functions before correcting anything."],
      timing: "2 min",
    },
    contrast: {
      goal: "Map three narrative functions onto three tenses.",
      say: ["Recent importance now.", "Background action.", "Finished event.", "Match each idea to a tense."],
      do: ["This is a recap/mapping exercise, not new teaching — should move fast."],
      timing: "2 min",
    },
    makeit: {
      goal: "Show the full 3-part story-building formula.",
      say: ["Present perfect = recent update.", "Past continuous = background scene.", "Past simple = main event.", "Something strange has happened this week. I was walking home when I saw…"],
      do: ["Walk through the model sentence chain slowly once."],
      timing: "3 min",
    },
    trigger: {
      goal: "Build the 3-part sequence step by step with prompts.",
      say: ["Tell me something that has happened this month.", "What were you doing when it happened?", "What happened next?"],
      do: ["Goal is a clean 3-part tense sequence by the end of this slide."],
      timing: "3 min",
    },
    interrupt: {
      goal: "Full 45-second story attempt with light correction.",
      say: ["Tell me a 45-second story about a recent memorable event."],
      do: ["Cue with “recent until now?” “background?” or “main event?” as needed — don't over-interrupt a real narrative."],
      timing: "3 min",
    },
    samestory: {
      goal: "Same story reordered three ways to build narrative flexibility.",
      say: ["Tell it update first.", "Now tell it scene first.", "Now tell it event first."],
      do: ["Same content, three orderings — this builds flexible tense control, not memorized sequencing."],
      timing: "3 min",
    },
    clockturn: {
      goal: "Reformulate a short narrative base as multiple markers stack up.",
      say: ["Something strange happens to me.", "this week...", "yesterday at 6...", "while I was walking...", "then...", "recently..."],
      do: ["No pause between cues."],
      timing: "3 min",
    },
    pressure: {
      goal: "One full unscaffolded 30-second story using all three tenses.",
      say: ["Tell me one story with all three tenses.", "No notes, 30 seconds."],
      do: ["Delay feedback entirely until after the full story — don't interrupt spontaneity here."],
      timing: "3 min",
    },
    scorecard: {
      goal: "Score narrative-level control, not isolated sentence accuracy.",
      say: ["Let's score today."],
      do: ["Focus on control across the whole multi-sentence narrative — don't dock heavily for one isolated slip."],
      timing: "2 min",
    },
    retention: {
      goal: "Push a real spoken narrative homework ahead of the capstone lesson.",
      say: ["Before next time: send a voice note — one recent update plus one detailed event story."],
      do: ["This is the last homework before the L10 capstone — treat it as final prep."],
      timing: "1 min",
    },
  },
};

// Passive Voice -- Lesson 5: Modal + Passive

export default {
  number: 5,
  code: "5",
  title: "Modal + Passive",
  formula: "modal + be + past participle",
  leadIn: "Name one rule at your school or job that must be followed.",
  teach: [
    {
      name: "Modal Passive — Formula",
      definition: "modal + be + past participle. Modals like can, must, and should combine with the passive to add ability, obligation, or advice.",
      examples: ["This form must be signed.", "The problem can be solved.", "The report should be finished by Friday."],
    },
    {
      name: "Choosing the Right Modal",
      definition: "The modal you choose changes the meaning, exactly as it would in an active sentence — possibility, obligation, or advice.",
      examples: ["The window can be opened.", "The rules must be followed.", "The essay should be revised."],
    },
  ],
  compareLeftLabel: "Can be — possibility",
  compareRightLabel: "Must be — obligation",
  compareNote: "The modal carries its own meaning into the passive — can be is optional, must be is required.",
  comparePairs: [
    { left: "The door can be locked from inside.", right: "The door must be locked every night." },
    { left: "This mistake could be fixed easily.", right: "This mistake must be fixed before we submit." },
  ],
  guided: [
    { prompt: "This document ___ (sign) before Friday. (obligation)", answer: "must be signed" },
    { prompt: "The rules ___ (follow) at all times. (obligation)", answer: "must be followed" },
    { prompt: "The music ___ (turn) down if it's too loud. (possibility)", answer: "can be turned" },
    { prompt: "This problem ___ (solve) with a bit of patience. (possibility)", answer: "can be solved" },
    { prompt: "The essay ___ (proofread) before you submit it. (advice)", answer: "should be proofread" },
    { prompt: "The report ___ (finish) by Friday. (advice)", answer: "should be finished" },
  ],
  practice: [
    "Write one rule using must be + past participle.",
    "Write one sentence about something that can be done, using can be.",
    "Give advice using should be + past participle.",
  ],
  wrapup: "Modal passive — modal + be + past participle — carries the modal's own meaning (possibility, obligation, advice) into a passive sentence.",
  nextHint: "The by agent, and when a passive sentence actually needs to say who did it.",
};

// Verb Tenses -- Tense 6: Past Continuous (Unit 2: Past Tenses)

export default {
  number: 6,
  groupTitle: "Unit 2: Past Tenses",
  tenseName: "Past Continuous",
  timelineVariant: 6,

  lessonA: {
    code: "6A",
    title: "Past Continuous",
    kind: "Discussion",
    objective: "The learner understands that the past continuous is used for actions in progress at a specific time in the past, or background actions interrupted by another event.",
    leadIn: "What were you doing at 8 p.m. last night?",
    definition: "The past continuous shows an action that was in progress at a past time.",
    timelineNote: "A long bar sits before now, often crossed by a short past event.",
    usages: [
      { label: "Action in progress at a past time", example: "I was sleeping at 11 p.m." },
      { label: "Background action", example: "I was cooking when she called." },
    ],
    form: {
      affirmative: ["Subject + was/were + verb-ing"],
      negative: ["Subject + was/were not + verb-ing"],
      interrogative: ["Was/Were + subject + verb-ing?"],
    },
    signalWords: ["while", "when", "at 7 p.m.", "all evening"],
    commonMistakes: ["Using past simple for the long background action."],
    ccqs: ["Was it already happening?", "Was it in progress?"],
    interactive: [
      "Student chooses which action is long and which is short.",
      "Student says one sentence with 'when'.",
    ],
  },

  lessonB: {
    code: "6B",
    title: "Past Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of past continuous.",
    sections: [
      { part: "A", label: "Multiple choice", desc: "Select the correct was/were + verb-ing form." },
      { part: "B", label: "Choose the tense", desc: "Choose past simple or past continuous for each sentence." },
      { part: "C", label: "Build forms", desc: "Build the negative and question forms." },
      { part: "D", label: "Error correction", desc: "Fix “I was sleep…” type errors." },
      { part: "E", label: "Speaking check", desc: "Answer 3 interrupted-action questions." },
    ],
  },
};

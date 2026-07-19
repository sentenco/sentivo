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
      {
        part: "A", label: "Multiple choice", desc: "Select the correct was/were + verb-ing form.",
        items: [
          { q: "I _____ at 11 p.m.", options: ["sleep", "slept", "was sleeping", "have slept"], correct: 2 },
          { q: "I _____ when she called.", options: ["cook", "cooked", "was cooking", "have cooked"], correct: 2 },
          { q: "They _____ football when it started to rain.", options: ["play", "played", "were playing", "have played"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Choose the usage", desc: "Decide if the sentence shows an action in progress or a background action.",
        items: [
          { q: "I was sleeping at 11 p.m.", options: ["Action in progress at a past time", "Background action"], correct: 0 },
          { q: "I was cooking when she called.", options: ["Action in progress at a past time", "Background action"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Build forms", desc: "Build the negative and question forms.",
        items: [
          { base: "She was studying at 8 p.m.", negative: "She was not studying at 8 p.m.", question: "Was she studying at 8 p.m.?" },
          { base: "They were watching TV.", negative: "They were not watching TV.", question: "Were they watching TV?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix “I was sleep…” type errors.",
        items: [
          { wrong: "I cooked when she called.", correct: "I was cooking when she called." },
          { wrong: "She were sleeping at 11.", correct: "She was sleeping at 11." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 interrupted-action questions.",
        items: [
          "What were you doing at 8 p.m. yesterday?",
          "What were you doing when your phone last rang?",
          "Were you sleeping this time last night?",
        ],
      },
    ],
  },
};

// Verb Tenses -- Tense 3: Present Perfect (Unit 1: Present Tenses)

export default {
  number: 3,
  groupTitle: "Unit 1: Present Tenses",
  tenseName: "Present Perfect",
  timelineVariant: 3,

  lessonA: {
    code: "3A",
    title: "Present Perfect",
    kind: "Discussion",
    objective: "The learner understands that the present perfect connects the past to the present through experience, result, or unfinished time.",
    leadIn: "Have you ever visited another city?",
    definition: "The present perfect links a past action to the present, especially when the exact finished time is not stated.",
    timelineNote: "A past point has an arrow pointing to the present.",
    usages: [
      { label: "Life experience", example: "I have ridden a horse." },
      { label: "Result now", example: "She has lost her keys." },
      { label: "Unfinished time", example: "We have studied a lot this week." },
    ],
    form: {
      affirmative: ["Subject + have/has + past participle"],
      negative: ["Subject + have/has not + past participle"],
      interrogative: ["Have/Has + subject + past participle?"],
    },
    signalWords: ["ever", "never", "already", "yet", "just", "this week"],
    commonMistakes: ["Using past simple where the finished time is not stated.", "Using present perfect with a finished-time marker (e.g. 'yesterday')."],
    ccqs: ["Is the exact time important?", "Is there a result now?", "Is the time unfinished?"],
    interactive: [
      "Student decides if a time phrase fits present perfect or not.",
      "Student answers one “Have you ever…?” question.",
    ],
  },

  lessonB: {
    code: "3B",
    title: "Present Perfect",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of present perfect.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct have/has + past participle form.",
        items: [
          { q: "I _____ a horse.", options: ["ride", "rode", "have ridden", "am riding"], correct: 2 },
          { q: "She _____ her keys.", options: ["lose", "lost", "has lost", "is losing"], correct: 2 },
          { q: "We _____ a lot this week.", options: ["study", "studied", "have studied", "are studying"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Choose the usage", desc: "Decide whether present perfect fits life experience, result now, or unfinished time.",
        items: [
          { q: "I have ridden a horse.", options: ["Life experience", "Result now", "Unfinished time"], correct: 0 },
          { q: "She has lost her keys.", options: ["Life experience", "Result now", "Unfinished time"], correct: 1 },
          { q: "We have studied a lot this week.", options: ["Life experience", "Result now", "Unfinished time"], correct: 2 },
        ],
      },
      {
        part: "C", label: "Transform the sentence", desc: "Transform the sentence to negative and to a question.",
        items: [
          { base: "I have visited Paris.", negative: "I have not visited Paris.", question: "Have you visited Paris?" },
          { base: "She has finished her homework.", negative: "She has not finished her homework.", question: "Has she finished her homework?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Correct misuse of a finished-time marker with present perfect.",
        items: [
          { wrong: "I have visited Paris last year.", correct: "I visited Paris last year." },
          { wrong: "She has went to the store.", correct: "She has gone to the store." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 experience questions.",
        items: [
          "Have you ever visited another country?",
          "Have you lost anything important recently?",
          "What have you done so far this week?",
        ],
      },
    ],
  },
};

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
      { part: "A", label: "Multiple choice", desc: "Choose the correct have/has + past participle form." },
      { part: "B", label: "Choose the tense", desc: "Decide whether present perfect or past simple fits better." },
      { part: "C", label: "Transform the sentence", desc: "Transform the sentence to negative and to a question." },
      { part: "D", label: "Error correction", desc: "Correct misuse of a finished-time marker with present perfect." },
      { part: "E", label: "Speaking check", desc: "Answer 3 experience questions." },
    ],
  },
};

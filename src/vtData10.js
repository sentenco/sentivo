// Verb Tenses -- Tense 10: Future Continuous (Unit 3: Future Tenses)

export default {
  number: 10,
  groupTitle: "Unit 3: Future Tenses",
  tenseName: "Future Continuous",
  timelineVariant: 10,

  lessonA: {
    code: "10A",
    title: "Future Continuous",
    kind: "Discussion",
    objective: "The learner understands that future continuous shows an action that will be in progress at a future time.",
    leadIn: "What will you be doing at 8 p.m. tonight?",
    definition: "Future continuous describes an action that will be happening at a particular time in the future.",
    timelineNote: "A long bar crosses a future point.",
    usages: [
      { label: "Action in progress in the future", example: "I will be studying at 8 p.m." },
      { label: "Polite inquiry about plans", example: "Will you be using your laptop later?" },
    ],
    form: {
      affirmative: ["Subject + will be + verb-ing"],
      negative: ["Subject + will not be + verb-ing"],
      interrogative: ["Will + subject + be + verb-ing?"],
    },
    signalWords: ["at this time tomorrow", "later", "all evening"],
    commonMistakes: ["Using future simple when the focus is 'in progress at that future time'."],
    ccqs: ["Will the action be happening at that future moment?", "Is the action in progress?"],
    interactive: [
      "Student predicts what they will be doing at a future time.",
      "Student compares future simple and future continuous.",
    ],
  },

  lessonB: {
    code: "10B",
    title: "Future Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of future continuous.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct will be + verb-ing form.",
        items: [
          { q: "I _____ at 8 p.m.", options: ["study", "will study", "will be studying", "am studying"], correct: 2 },
          { q: "_____ your laptop later?", options: ["Will you use", "Will you be using", "Do you use", "Are you using"], correct: 1 },
          { q: "This time tomorrow, she _____ on a plane.", options: ["will fly", "will be flying", "flies", "is flying"], correct: 1 },
        ],
      },
      {
        part: "B", label: "Choose the usage", desc: "Choose future simple or future continuous for each sentence.",
        items: [
          { q: "I will be studying at 8 p.m.", options: ["Action in progress in the future", "Polite inquiry about plans"], correct: 0 },
          { q: "Will you be using your laptop later?", options: ["Action in progress in the future", "Polite inquiry about plans"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Negative and interrogative", desc: "Make negative and interrogative changes.",
        items: [
          { base: "He will be working at noon.", negative: "He will not be working at noon.", question: "Will he be working at noon?" },
          { base: "They will be traveling next week.", negative: "They will not be traveling next week.", question: "Will they be traveling next week?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix common future continuous errors.",
        items: [
          { wrong: "This time tomorrow, she will fly to Paris.", correct: "This time tomorrow, she will be flying to Paris." },
          { wrong: "Will you using your laptop later?", correct: "Will you be using your laptop later?" },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 future-time prompts.",
        items: [
          "What will you be doing at this time tomorrow?",
          "Will you be working this weekend?",
          "What will you be doing one year from now?",
        ],
      },
    ],
  },
};

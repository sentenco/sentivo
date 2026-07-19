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
      { part: "A", label: "Multiple choice", desc: "Choose the correct will be + verb-ing form." },
      { part: "B", label: "Choose the tense", desc: "Choose future simple or future continuous for each sentence." },
      { part: "C", label: "Negative and interrogative", desc: "Make negative and interrogative changes." },
      { part: "D", label: "Error correction", desc: "Fix common future continuous errors." },
      { part: "E", label: "Speaking check", desc: "Answer 3 future-time prompts." },
    ],
  },
};

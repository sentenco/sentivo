// Verb Tenses -- Tense 9: Future Simple (Unit 3: Future Tenses)

export default {
  number: 9,
  groupTitle: "Unit 3: Future Tenses",
  tenseName: "Future Simple",
  timelineVariant: 9,

  lessonA: {
    code: "9A",
    title: "Future Simple",
    kind: "Discussion",
    objective: "The learner understands that future simple with 'will' is used for predictions, promises, offers, and instant decisions.",
    leadIn: "What will you do after this class?",
    definition: "Future simple expresses future actions, especially predictions, promises, and decisions made at the moment of speaking.",
    timelineNote: "A point sits after now.",
    usages: [
      { label: "Prediction", example: "It will rain tomorrow." },
      { label: "Instant decision", example: "I'll answer the phone." },
      { label: "Offer / promise", example: "I'll help you." },
    ],
    form: {
      affirmative: ["Subject + will + base verb"],
      negative: ["Subject + will not + base verb"],
      interrogative: ["Will + subject + base verb?"],
    },
    signalWords: ["tomorrow", "next week", "I think", "probably"],
    commonMistakes: ["Confusing 'will' and 'going to'."],
    ccqs: ["Is this a future action?", "Is it a decision now or a prediction?"],
    interactive: [
      "Student responds to a situation with “I'll…”.",
      "Student changes the long form to a contraction and back.",
    ],
  },

  lessonB: {
    code: "9B",
    title: "Future Simple",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of future simple.",
    sections: [
      { part: "A", label: "Multiple choice", desc: "Choose the correct will/won't form." },
      { part: "B", label: "Match the function", desc: "Match the sentence to prediction, offer, promise, or decision." },
      { part: "C", label: "Change the sentence", desc: "Change to negative and to a question." },
      { part: "D", label: "Error correction", desc: "Fix common future simple errors." },
      { part: "E", label: "Speaking check", desc: "Give 3 future simple responses to situations." },
    ],
  },
};

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
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct will/won't form.",
        items: [
          { q: "It _____ tomorrow.", options: ["rain", "rains", "will rain", "is raining"], correct: 2 },
          { q: "The phone is ringing — I _____ it.", options: ["answer", "answered", "will answer", "am answering"], correct: 2 },
          { q: "Don't worry, I _____ you.", options: ["help", "helped", "will help", "am helping"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Match the function", desc: "Match the sentence to prediction, offer, promise, or decision.",
        items: [
          { q: "It will rain tomorrow.", options: ["Prediction", "Instant decision", "Offer or promise"], correct: 0 },
          { q: "I'll answer the phone.", options: ["Prediction", "Instant decision", "Offer or promise"], correct: 1 },
          { q: "I'll help you.", options: ["Prediction", "Instant decision", "Offer or promise"], correct: 2 },
        ],
      },
      {
        part: "C", label: "Change the sentence", desc: "Change to negative and to a question.",
        items: [
          { base: "She will call you later.", negative: "She will not call you later.", question: "Will she call you later?" },
          { base: "They will arrive tomorrow.", negative: "They will not arrive tomorrow.", question: "Will they arrive tomorrow?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix common future simple errors.",
        items: [
          { wrong: "I will to help you.", correct: "I will help you." },
          { wrong: "It rain tomorrow.", correct: "It will rain tomorrow." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Give 3 future simple responses to situations.",
        items: [
          "What do you think will happen tomorrow?",
          "Will you help a friend this week if they ask?",
          "What will you do after this lesson?",
        ],
      },
    ],
  },
};

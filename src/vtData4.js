// Verb Tenses -- Tense 4: Present Perfect Continuous (Unit 1: Present Tenses)

export default {
  number: 4,
  groupTitle: "Unit 1: Present Tenses",
  tenseName: "Present Perfect Continuous",
  timelineVariant: 4,

  lessonA: {
    code: "4A",
    title: "Present Perfect Continuous",
    kind: "Discussion",
    objective: "The learner understands that the present perfect continuous shows duration or repeated activity continuing until now.",
    leadIn: "How long have you been studying English?",
    definition: "This tense shows an activity that started in the past and continues to the present, or has recently stopped with present evidence.",
    timelineNote: "A long bar runs from the past to now.",
    usages: [
      { label: "Duration until now", example: "I have been working here for two years." },
      { label: "Recent activity with a visible result", example: "He has been running, so he is tired." },
    ],
    form: {
      affirmative: ["Subject + have/has been + verb-ing"],
      negative: ["Subject + have/has not been + verb-ing"],
      interrogative: ["Have/Has + subject + been + verb-ing?"],
    },
    signalWords: ["for", "since", "all day", "recently", "lately"],
    commonMistakes: ["Using present perfect when duration is the real focus.", "Forgetting 'been'."],
    ccqs: ["Did it start in the past?", "Does it continue until now?", "Is the duration important?"],
    interactive: [
      "Student chooses between present perfect and present perfect continuous.",
      "Student answers “How long have you been…?”.",
    ],
  },

  lessonB: {
    code: "4B",
    title: "Present Perfect Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of present perfect continuous.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct have/has been + verb-ing form.",
        items: [
          { q: "I _____ here for two years.", options: ["work", "worked", "have worked", "have been working"], correct: 3 },
          { q: "He _____, so he is tired.", options: ["run", "has run", "has been running", "runs"], correct: 2 },
          { q: "They _____ for three hours.", options: ["study", "have studied", "have been studying", "studied"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Identify the focus", desc: "Choose the sentence that shows duration.",
        items: [
          { q: "I have been working here for two years.", options: ["Duration until now", "Recent activity with a visible result"], correct: 0 },
          { q: "He has been running, so he is tired.", options: ["Duration until now", "Recent activity with a visible result"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Change the sentence", desc: "Change an affirmative sentence to negative and to a question.",
        items: [
          { base: "I have been studying English for a year.", negative: "I have not been studying English for a year.", question: "Have you been studying English for a year?" },
          { base: "She has been waiting for an hour.", negative: "She has not been waiting for an hour.", question: "Has she been waiting for an hour?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix errors such as “I have working here…”.",
        items: [
          { wrong: "I have working here for two years.", correct: "I have been working here for two years." },
          { wrong: "He has been study all day.", correct: "He has been studying all day." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 duration questions.",
        items: [
          "How long have you been studying English?",
          "How long have you been living in your city?",
          "What have you been doing all morning?",
        ],
      },
    ],
  },
};

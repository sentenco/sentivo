// Verb Tenses -- Tense 12: Future Perfect Continuous (Unit 3: Future Tenses) -- final tense

export default {
  number: 12,
  groupTitle: "Unit 3: Future Tenses",
  tenseName: "Future Perfect Continuous",
  timelineVariant: 12,

  lessonA: {
    code: "12A",
    title: "Future Perfect Continuous",
    kind: "Discussion",
    objective: "The learner understands that the future perfect continuous shows duration up to a future point.",
    leadIn: "How long will you have been studying English by next year?",
    definition: "This tense shows how long an action will have continued before a future time.",
    timelineNote: "A long bar runs from an earlier time to a future point.",
    usages: [
      { label: "Duration until a future point", example: "By June, I will have been working here for five years." },
      { label: "Emphasis on the length of a future activity", example: "Next month, they will have been living in Manila for a year." },
    ],
    form: {
      affirmative: ["Subject + will have been + verb-ing"],
      negative: ["Subject + will not have been + verb-ing"],
      interrogative: ["Will + subject + have been + verb-ing?"],
    },
    signalWords: ["for", "by", "by next year", "by then"],
    commonMistakes: ["Confusing future perfect and future perfect continuous when duration is central."],
    ccqs: ["Is the duration important?", "Will it continue until that future point?"],
    interactive: [
      "Student chooses between future perfect and future perfect continuous.",
      "Student answers one “How long will you have been…?” question.",
    ],
  },

  lessonB: {
    code: "12B",
    title: "Future Perfect Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of future perfect continuous -- the final lesson of the course.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct will have been + verb-ing form.",
        items: [
          { q: "By June, I _____ here for five years.", options: ["work", "will work", "will have worked", "will have been working"], correct: 3 },
          { q: "Next month, they _____ in Manila for a year.", options: ["live", "will live", "will have lived", "will have been living"], correct: 3 },
          { q: "By next year, she _____ English for a decade.", options: ["study", "will study", "will have studied", "will have been studying"], correct: 3 },
        ],
      },
      {
        part: "B", label: "Identify the focus", desc: "Choose the sentence that focuses on duration.",
        items: [
          { q: "By June, I will have been working here for five years.", options: ["Duration until a future point", "Emphasis on the length of a future activity"], correct: 0 },
          { q: "Next month, they will have been living in Manila for a year.", options: ["Duration until a future point", "Emphasis on the length of a future activity"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Transform the sentence", desc: "Transform to negative and to interrogative.",
        items: [
          { base: "By then, he will have been studying for six hours.", negative: "By then, he will not have been studying for six hours.", question: "Will he have been studying for six hours by then?" },
          { base: "By December, we will have been dating for two years.", negative: "By December, we will not have been dating for two years.", question: "Will we have been dating for two years by December?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix common future perfect continuous errors.",
        items: [
          { wrong: "By June, I will have worked here for five years.", correct: "By June, I will have been working here for five years." },
          { wrong: "Next month, they will have lived in Manila for a year.", correct: "Next month, they will have been living in Manila for a year." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 2-3 duration-before-future prompts.",
        items: [
          "By this time next year, how long will you have been studying English?",
          "What will you have been doing right before this time tomorrow?",
          "By the end of this course, how long will you have been learning with your teacher?",
        ],
      },
    ],
  },
};

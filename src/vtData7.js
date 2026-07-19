// Verb Tenses -- Tense 7: Past Perfect (Unit 2: Past Tenses)

export default {
  number: 7,
  groupTitle: "Unit 2: Past Tenses",
  tenseName: "Past Perfect",
  timelineVariant: 7,

  lessonA: {
    code: "7A",
    title: "Past Perfect",
    kind: "Discussion",
    objective: "The learner understands that the past perfect shows an action completed before another past action.",
    leadIn: "Had you eaten dinner before the class started?",
    definition: "The past perfect shows the earlier of two past actions.",
    timelineNote: "One past point sits before another past point.",
    usages: [
      { label: "Earlier past action", example: "I had finished my homework before my friend arrived." },
      { label: "Reported experience before a past moment", example: "She had never seen snow before that trip." },
    ],
    form: {
      affirmative: ["Subject + had + past participle"],
      negative: ["Subject + had not + past participle"],
      interrogative: ["Had + subject + past participle?"],
    },
    signalWords: ["before", "after", "by the time", "already"],
    commonMistakes: ["Using past simple for both actions when the sequence needs clarifying."],
    ccqs: ["Did this happen first?", "Is there another past action after it?"],
    interactive: [
      "Student labels action 1 and action 2 on a timeline.",
      "Student chooses which clause should be in past perfect.",
    ],
  },

  lessonB: {
    code: "7B",
    title: "Past Perfect",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of past perfect.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct had + past participle form.",
        items: [
          { q: "I _____ my homework before my friend arrived.", options: ["finish", "finished", "had finished", "have finished"], correct: 2 },
          { q: "She _____ snow before that trip.", options: ["never see", "never saw", "had never seen", "has never seen"], correct: 2 },
          { q: "By the time we arrived, the movie _____.", options: ["start", "started", "had started", "has started"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Identify the usage", desc: "Decide which action happened first.",
        items: [
          { q: "I had finished my homework before my friend arrived.", options: ["Earlier past action", "Reported experience before a past moment"], correct: 0 },
          { q: "She had never seen snow before that trip.", options: ["Earlier past action", "Reported experience before a past moment"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Negative and interrogative", desc: "Transform the sentence to negative and to a question.",
        items: [
          { base: "He had left before I arrived.", negative: "He had not left before I arrived.", question: "Had he left before you arrived?" },
          { base: "They had eaten dinner by 8.", negative: "They had not eaten dinner by 8.", question: "Had they eaten dinner by 8?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix errors in sequence-of-events sentences.",
        items: [
          { wrong: "When I arrived, the film already started.", correct: "When I arrived, the film had already started." },
          { wrong: "She never saw snow before that trip.", correct: "She had never seen snow before that trip." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 “before / after / by the time” questions.",
        items: [
          "Had you ever visited another country before you turned 18?",
          "What had you already done before you left home this morning?",
          "Had you eaten before your last class started?",
        ],
      },
    ],
  },
};

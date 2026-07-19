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
      { part: "A", label: "Multiple choice", desc: "Choose the correct have/has been + verb-ing form." },
      { part: "B", label: "Identify the focus", desc: "Choose the sentence that shows duration." },
      { part: "C", label: "Change the sentence", desc: "Change an affirmative sentence to negative and to a question." },
      { part: "D", label: "Error correction", desc: "Fix errors such as “I have studying…”." },
      { part: "E", label: "Speaking check", desc: "Answer 3 duration questions." },
    ],
  },
};

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
      { part: "A", label: "Multiple choice", desc: "Choose the correct will have been + verb-ing form." },
      { part: "B", label: "Identify the focus", desc: "Choose the sentence that focuses on duration." },
      { part: "C", label: "Transform the sentence", desc: "Transform to negative and to interrogative." },
      { part: "D", label: "Error correction", desc: "Fix common future perfect continuous errors." },
      { part: "E", label: "Speaking check", desc: "Answer 2-3 duration-before-future prompts." },
    ],
  },
};

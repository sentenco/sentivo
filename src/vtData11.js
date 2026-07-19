// Verb Tenses -- Tense 11: Future Perfect (Unit 3: Future Tenses)

export default {
  number: 11,
  groupTitle: "Unit 3: Future Tenses",
  tenseName: "Future Perfect",
  timelineVariant: 11,

  lessonA: {
    code: "11A",
    title: "Future Perfect",
    kind: "Discussion",
    objective: "The learner understands that the future perfect shows completion before a future time.",
    leadIn: "What will you have finished by the end of this week?",
    definition: "Future perfect describes an action that will be completed before a future deadline or point.",
    timelineNote: "A future completed point sits before another future point.",
    usages: [
      { label: "Completed before a future time", example: "I will have finished the report by Friday." },
      { label: "Total before a future point", example: "She will have lived here for ten years by 2030." },
    ],
    form: {
      affirmative: ["Subject + will have + past participle"],
      negative: ["Subject + will not have + past participle"],
      interrogative: ["Will + subject + have + past participle?"],
    },
    signalWords: ["by", "by the time", "before", "by next month"],
    commonMistakes: ["Using future simple when completion before another future point is the real meaning."],
    ccqs: ["Will it be completed before that future time?", "Is the deadline important?"],
    interactive: [
      "Student places events on a future timeline.",
      "Student completes one 'by…' sentence.",
    ],
  },

  lessonB: {
    code: "11B",
    title: "Future Perfect",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of future perfect.",
    sections: [
      { part: "A", label: "Multiple choice", desc: "Choose the correct will have + past participle form." },
      { part: "B", label: "Choose the best tense", desc: "Choose the best tense for a deadline meaning." },
      { part: "C", label: "Change the sentence", desc: "Change to negative and to interrogative." },
      { part: "D", label: "Error correction", desc: "Correct deadline-meaning errors." },
      { part: "E", label: "Speaking check", desc: "Answer 3 “by…” prompts." },
    ],
  },
};

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
      { part: "A", label: "Multiple choice", desc: "Choose the correct had + past participle form." },
      { part: "B", label: "Order two past actions", desc: "Put two past actions in the correct order." },
      { part: "C", label: "Negative and interrogative", desc: "Transform the sentence to negative and to a question." },
      { part: "D", label: "Error correction", desc: "Fix errors in sequence-of-events sentences." },
      { part: "E", label: "Speaking check", desc: "Answer 3 “before / after / by the time” questions." },
    ],
  },
};

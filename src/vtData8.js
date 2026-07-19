// Verb Tenses -- Tense 8: Past Perfect Continuous (Unit 2: Past Tenses)

export default {
  number: 8,
  groupTitle: "Unit 2: Past Tenses",
  tenseName: "Past Perfect Continuous",
  timelineVariant: 8,

  lessonA: {
    code: "8A",
    title: "Past Perfect Continuous",
    kind: "Discussion",
    objective: "The learner understands that the past perfect continuous shows duration before a past point or past event.",
    leadIn: "How long had you been waiting before the bus arrived?",
    definition: "This tense shows an activity that continued up to a past moment.",
    timelineNote: "A long bar ends at another past point.",
    usages: [
      { label: "Duration before a past event", example: "I had been studying for two hours before dinner started." },
      { label: "Cause/background before a past result", example: "He was tired because he had been running." },
    ],
    form: {
      affirmative: ["Subject + had been + verb-ing"],
      negative: ["Subject + had not been + verb-ing"],
      interrogative: ["Had + subject + been + verb-ing?"],
    },
    signalWords: ["for", "since", "before", "all day"],
    commonMistakes: ["Confusing it with past perfect simple when duration is the real focus."],
    ccqs: ["Did it continue for a period of time?", "Did it stop before another past event?"],
    interactive: [
      "Student chooses between past perfect and past perfect continuous.",
      "Student answers one “How long had you been…?” question.",
    ],
  },

  lessonB: {
    code: "8B",
    title: "Past Perfect Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of past perfect continuous.",
    sections: [
      { part: "A", label: "Multiple choice", desc: "Choose the correct had been + verb-ing form." },
      { part: "B", label: "Identify the focus", desc: "Choose the sentence that shows duration." },
      { part: "C", label: "Transform the sentence", desc: "Transform to negative and to a question." },
      { part: "D", label: "Error correction", desc: "Fix a missing 'been' or wrong duration use." },
      { part: "E", label: "Speaking check", desc: "Answer 2-3 duration-before-past-event prompts." },
    ],
  },
};

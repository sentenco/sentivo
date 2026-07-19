// Verb Tenses -- Tense 1: Present Simple (Unit 1: Present Tenses)

export default {
  number: 1,
  groupTitle: "Unit 1: Present Tenses",
  tenseName: "Present Simple",
  timelineVariant: 1,

  lessonA: {
    code: "1A",
    title: "Present Simple",
    kind: "Discussion",
    objective: "The learner understands that the present simple is used for habits, routines, facts, and schedules.",
    leadIn: "What do you usually do after breakfast?",
    definition: "The present simple shows regular actions, habits, facts, and schedules.",
    timelineNote: "Repeated dots across the present line show a repeated or general action.",
    usages: [
      { label: "Habits and routines", example: "I walk to school every day." },
      { label: "Facts and truths", example: "Water boils at 100 degrees." },
      { label: "Schedules", example: "The class starts at 9 a.m." },
    ],
    form: {
      affirmative: ["I / You / We / They work.", "He / She works."],
      negative: ["I do not work.", "He does not work."],
      interrogative: ["Do you work?", "Does she work?"],
    },
    signalWords: ["always", "usually", "often", "every day", "on Mondays"],
    commonMistakes: ["Forgetting third person -s.", "Using present continuous for routines."],
    ccqs: ["Is this about now only?", "Is it a habit?", "Does it happen again and again?"],
    interactive: [
      "Student chooses whether a sentence is a habit or happening now.",
      "Student changes one affirmative sentence to negative and interrogative.",
    ],
  },

  lessonB: {
    code: "1B",
    title: "Present Simple",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of present simple.",
    sections: [
      { part: "A", label: "Multiple choice", desc: "Choose the correct verb form for habits and routines." },
      { part: "B", label: "Identify the usage", desc: "Decide if the sentence shows a habit, a fact, or a schedule." },
      { part: "C", label: "Change the sentence", desc: "Change an affirmative sentence to negative, then to a question." },
      { part: "D", label: "Error correction", desc: "Fix errors such as “He go to school every day.”" },
      { part: "E", label: "Speaking check", desc: "Answer 3 routine questions using present simple." },
    ],
  },
};

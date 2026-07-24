// Parts of Speech -- Topic 2: Verbs

export default {
  number: 2,
  topicName: "Verbs",

  lessonA: {
    code: "2A",
    title: "Verbs",
    kind: "Lesson",
    objective: "Recognize verbs as words that show actions or states of being, in both action-verb and being-verb forms.",
    leadIn: "What are you doing right now? Say one full sentence.",
    concepts: [
      {
        name: "Action verb",
        definition: "An action verb shows something a person or thing does.",
        examples: [
          "The boy runs fast.",
          "They study every night.",
          "Birds fly south in winter.",
        ],
      },
      {
        name: "Being verb",
        definition: "A being verb (like am, is, are) shows a state, not an action.",
        examples: [
          "She is happy.",
          "We are ready.",
          "I am a student.",
        ],
      },
    ],
    compareLeftLabel: "Action verb",
    compareRightLabel: "Being verb",
    compareNote: "Action verbs show doing; being verbs show a state or condition.",
    comparePairs: [
      { left: "The boy runs fast.", right: "The boy is fast." },
      { left: "They study every night.", right: "They are tired every night." },
    ],
    guided: [
      { prompt: "The boy ___ (run) fast.", answer: "runs" },
      { prompt: "They ___ (study) every night.", answer: "study" },
      { prompt: "She ___ (be) happy.", answer: "is" },
    ],
    independent: [
      "Underline the verb: “We are ready.”",
      "Sort into action or being: jump, is, sing, am.",
      "Write one sentence using the being verb “is.”",
    ],
    wrapup: "Verbs show action or being. Action verbs show what happens; being verbs show a state.",
  },

  lessonB: {
    code: "2B",
    title: "Verbs",
    kind: "Assessment",
    testGoal: "Check that students can identify verbs and use the correct verb form to complete sentences.",
    sections: [
      {
        part: "A", type: "mc", label: "Find the verb", desc: "Choose the verb in each sentence.",
        items: [
          { q: "The boy runs fast.", options: ["The", "boy", "runs", "fast"], correct: 2 },
          { q: "They study every night.", options: ["They", "study", "every", "night"], correct: 1 },
          { q: "She is very happy.", options: ["She", "is", "very", "happy"], correct: 1 },
        ],
      },
      {
        part: "B", type: "mc", label: "Choose the correct verb", desc: "Choose the correct verb form to complete the sentence.",
        items: [
          { q: "We ___ ready.", options: ["is", "am", "are", "be"], correct: 2 },
          { q: "I ___ a student.", options: ["is", "am", "are", "be"], correct: 1 },
          { q: "Birds ___ south in winter.", options: ["fly", "flies", "flying", "flew"], correct: 0 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Complete the sentence", desc: "Fill in the correct verb form.",
        items: [
          { prompt: "They ___ (study) every night.", answer: "study" },
          { prompt: "He ___ (be) tired.", answer: "is" },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the verb", desc: "Find and fix the verb mistake.",
        items: [
          { wrong: "She are happy.", correct: "She is happy." },
          { wrong: "They studies every night.", correct: "They study every night." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using a full sentence with a verb.",
        items: [
          "What do you usually do after school or work?",
          "Describe how you feel right now using the verb “am.”",
        ],
      },
    ],
  },
};

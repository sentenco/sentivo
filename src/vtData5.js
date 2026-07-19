// Verb Tenses -- Tense 5: Past Simple (Unit 2: Past Tenses)

export default {
  number: 5,
  groupTitle: "Unit 2: Past Tenses",
  tenseName: "Past Simple",
  timelineVariant: 5,

  lessonA: {
    code: "5A",
    title: "Past Simple",
    kind: "Discussion",
    objective: "The learner understands that the past simple is used for finished past actions at a known or finished time.",
    leadIn: "What did you do yesterday?",
    definition: "The past simple shows completed actions in the past.",
    timelineNote: "One finished point sits before now.",
    usages: [
      { label: "Finished past event", example: "I visited my grandmother yesterday." },
      { label: "Sequence of past events", example: "I woke up, ate breakfast, and left." },
    ],
    form: {
      affirmative: ["Subject + past verb"],
      negative: ["Subject + did not + base verb"],
      interrogative: ["Did + subject + base verb?"],
    },
    signalWords: ["yesterday", "last night", "ago", "in 2024"],
    commonMistakes: ["Using the past form again after 'did'.", "Confusing present perfect and past simple."],
    ccqs: ["Is it finished?", "Do we know when?"],
    interactive: [
      "Student puts 3 past events in order.",
      "Student changes an affirmative sentence to a question.",
    ],
  },

  lessonB: {
    code: "5B",
    title: "Past Simple",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of past simple.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct past form.",
        items: [
          { q: "I _____ my grandmother yesterday.", options: ["visit", "visited", "have visited", "was visiting"], correct: 1 },
          { q: "She _____ breakfast at 7.", options: ["eat", "ate", "has eaten", "eats"], correct: 1 },
          { q: "They _____ home late last night.", options: ["come", "came", "have come", "are coming"], correct: 1 },
        ],
      },
      {
        part: "B", label: "Identify the usage", desc: "Decide if the sentence is a single finished event or part of a sequence.",
        items: [
          { q: "I visited my grandmother yesterday.", options: ["Finished past event", "Sequence of past events"], correct: 0 },
          { q: "I woke up, ate breakfast, and left.", options: ["Finished past event", "Sequence of past events"], correct: 1 },
        ],
      },
      {
        part: "C", label: "Make negative and interrogative forms", desc: "Build the negative and question forms of a given sentence.",
        items: [
          { base: "She called me yesterday.", negative: "She did not call me yesterday.", question: "Did she call you yesterday?" },
          { base: "They watched a movie.", negative: "They did not watch a movie.", question: "Did they watch a movie?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix “did + past verb” errors.",
        items: [
          { wrong: "She didn't went to school.", correct: "She didn't go to school." },
          { wrong: "I have visited my aunt yesterday.", correct: "I visited my aunt yesterday." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 past simple questions.",
        items: [
          "What did you do yesterday?",
          "Where did you go last weekend?",
          "What did you eat for breakfast this morning?",
        ],
      },
    ],
  },
};

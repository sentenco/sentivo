// Verb Tenses -- Tense 2: Present Continuous (Unit 1: Present Tenses)

export default {
  number: 2,
  groupTitle: "Unit 1: Present Tenses",
  tenseName: "Present Continuous",
  timelineVariant: 2,

  lessonA: {
    code: "2A",
    title: "Present Continuous",
    kind: "Discussion",
    objective: "The learner understands that the present continuous is used for actions happening now, temporary actions, and changing situations.",
    leadIn: "What are you doing right now?",
    definition: "The present continuous shows actions in progress now or around now.",
    timelineNote: "A long bar crosses the present moment.",
    usages: [
      { label: "Happening now", example: "I am studying now." },
      { label: "Temporary situations", example: "She is staying with her aunt this week." },
      { label: "Changing situations", example: "The weather is getting hotter." },
    ],
    form: {
      affirmative: ["Subject + am/is/are + verb-ing"],
      negative: ["Subject + am/is/are not + verb-ing"],
      interrogative: ["Am/Is/Are + subject + verb-ing?"],
    },
    signalWords: ["now", "right now", "at the moment", "these days"],
    commonMistakes: ["Using the base verb instead of verb-ing.", "Confusing a routine with an action happening now."],
    ccqs: ["Is it happening now?", "Is it temporary?", "Is it finished?"],
    interactive: [
      "Student describes what the teacher is doing on screen.",
      "Student compares one present simple sentence and one present continuous sentence.",
    ],
  },

  lessonB: {
    code: "2B",
    title: "Present Continuous",
    kind: "Test/Application",
    testGoal: "Check meaning, form, and controlled use of present continuous.",
    sections: [
      {
        part: "A", label: "Multiple choice", desc: "Choose the correct am/is/are + verb-ing form.",
        items: [
          { q: "I _____ now.", options: ["study", "studies", "am studying", "studied"], correct: 2 },
          { q: "She _____ with her aunt this week.", options: ["stay", "stays", "is staying", "stayed"], correct: 2 },
          { q: "The weather _____ hotter.", options: ["get", "gets", "is getting", "got"], correct: 2 },
        ],
      },
      {
        part: "B", label: "Identify the usage", desc: "Decide whether the sentence is a routine or an action happening now.",
        items: [
          { q: "I am studying now.", options: ["Happening now", "Temporary situation", "Changing situation"], correct: 0 },
          { q: "She is staying with her aunt this week.", options: ["Happening now", "Temporary situation", "Changing situation"], correct: 1 },
          { q: "The weather is getting hotter.", options: ["Happening now", "Temporary situation", "Changing situation"], correct: 2 },
        ],
      },
      {
        part: "C", label: "Change the sentence", desc: "Change the sentence to negative and to a question.",
        items: [
          { base: "I am working today.", negative: "I am not working today.", question: "Are you working today?" },
          { base: "They are watching a movie.", negative: "They are not watching a movie.", question: "Are they watching a movie?" },
        ],
      },
      {
        part: "D", label: "Error correction", desc: "Fix errors from a missing be verb or the wrong verb-ing form.",
        items: [
          { wrong: "She working today.", correct: "She is working today." },
          { wrong: "He are studying now.", correct: "He is studying now." },
        ],
      },
      {
        part: "E", label: "Speaking check", desc: "Answer 3 “What are you doing…?” questions.",
        items: [
          "What are you doing right now?",
          "What is changing in your life these days?",
          "Are you staying somewhere new this week?",
        ],
      },
    ],
  },
};

// Question Formation -- Lesson 2: Wh-Questions

export default {
  number: 2,
  code: "2",
  title: "Wh-Questions",
  formula: "Wh-word + auxiliary + subject + verb  ·  Wh-word as subject + verb",
  leadIn: "Ask your partner one question each with what, where, and who.",
  teach: [
    {
      name: "Wh-Questions — Same Rule, New Word First",
      definition: "Add a question word (what, where, when, why, how) before the same do-support or inversion pattern used in yes/no questions.",
      examples: ["Where do you live?", "What is she doing?", "When did they leave?"],
    },
    {
      name: "Subject Questions — No Auxiliary Needed",
      definition: "When the wh-word itself is the subject of the sentence, don't add do — the word order stays like a statement.",
      examples: ["Who called you?", "What happened?", "Which team won?"],
    },
  ],
  compareLeftLabel: "Wh-word replaces the object",
  compareRightLabel: "Wh-word replaces the subject",
  compareNote: "If you're asking about the doer of the action, skip do-support entirely — the question already looks like a statement.",
  comparePairs: [
    { left: "What did you buy? (object)", right: "Who bought it? (subject — no did)" },
    { left: "Who did you call? (object)", right: "Who called you? (subject — no did)" },
  ],
  guided: [
    { prompt: "___ do you go to work? (asking about place)", answer: "Where" },
    { prompt: "___ are you leaving? (asking about time)", answer: "When" },
    { prompt: "___ is she doing right now? (asking about the activity)", answer: "What" },
    { prompt: "___ broke the window? (asking about the doer — subject question)", answer: "Who" },
    { prompt: "___ happened at the meeting? (asking about the event — subject question)", answer: "What" },
    { prompt: "___ team won the game? (asking about the doer — subject question)", answer: "Which" },
  ],
  practice: [
    "Write one wh-question asking about an object or detail, using do-support.",
    "Write one subject question with no auxiliary, like 'Who...?' or 'What...?'.",
    "Ask a partner a wh-question about their weekend, and write down their answer.",
  ],
  wrapup: "Wh-questions follow the same do-support/inversion rule with a question word in front — unless the wh-word is the subject, in which case no auxiliary is added at all.",
  nextHint: "Question tags, where a short question gets added to the end of a statement to check or confirm something.",
};

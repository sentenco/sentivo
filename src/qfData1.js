// Question Formation -- Lesson 1: Yes/No Questions

export default {
  number: 1,
  code: "1",
  title: "Yes/No Questions",
  formula: "Do/Does/Did + subject + verb  ·  Auxiliary + subject + verb",
  leadIn: "Ask the person next to you three yes/no questions about their weekend.",
  teach: [
    {
      name: "Do-Support — When There's No Auxiliary",
      definition: "For present or past simple with a regular main verb, add do/does/did before the subject, and the main verb drops its ending.",
      examples: ["Do you like coffee?", "Does she work here?", "Did they arrive on time?"],
    },
    {
      name: "Inversion — When an Auxiliary Already Exists",
      definition: "If the sentence already has be, have, or a modal, just swap the subject and auxiliary — don't add do.",
      examples: ["Are you coming?", "Have you finished?", "Can she swim?"],
    },
  ],
  compareLeftLabel: "Do-support — no auxiliary yet",
  compareRightLabel: "Inversion — auxiliary already there",
  compareNote: "The test is simple: check whether the statement already has be, have, or a modal. If yes, swap it forward. If no, add do/does/did.",
  comparePairs: [
    { left: "You like coffee. → Do you like coffee?", right: "You are coming. → Are you coming?" },
    { left: "She works here. → Does she work here?", right: "She has finished. → Has she finished?" },
  ],
  guided: [
    { prompt: "You speak French. (turn into a question)", answer: "Do you speak French?" },
    { prompt: "They finished the project. (turn into a question, past simple)", answer: "Did they finish the project?" },
    { prompt: "She likes tea. (turn into a question)", answer: "Does she like tea?" },
    { prompt: "He is sleeping. (turn into a question)", answer: "Is he sleeping?" },
    { prompt: "They have finished. (turn into a question)", answer: "Have they finished?" },
    { prompt: "You can swim. (turn into a question)", answer: "Can you swim?" },
  ],
  practice: [
    "Write one yes/no question using do-support, about someone's daily routine.",
    "Write one yes/no question using be, like 'Are you...?'.",
    "Write one yes/no question using a modal, like 'Can you...?' or 'Have you...?'.",
  ],
  wrapup: "Add do/does/did when there's no existing auxiliary. When be, have, or a modal is already there, just swap it forward.",
  nextHint: "Wh-questions, where the same rule gets a question word in front — except when the wh-word is the subject.",
};

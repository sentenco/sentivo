// Modals -- Lesson 5: Advice and Suggestions

export default {
  number: 5,
  code: "5",
  title: "Advice and Suggestions",
  modals: ["should", "shall"],
  leadIn: "What's one piece of advice you'd give a new student on their first day?",
  teach: [
    {
      name: "Should — General Advice",
      definition: "Gives a recommendation — a suggestion about what's wise or a good idea, without making it a rule.",
      examples: ["You should drink more water.", "She should see a doctor.", "We should leave earlier next time."],
    },
    {
      name: "Shall — Formal Suggestions",
      definition: "Shall I...? and Shall we...? offer to do something or suggest an action together — common in polite or formal English.",
      examples: ["Shall we begin?", "Shall I open the window?", "Shall we order some coffee?"],
    },
  ],
  compareLeftLabel: "Should — giving advice",
  compareRightLabel: "Shall — inviting agreement",
  compareNote: "Should states an opinion about what's wise. Shall I/we...? invites the other person to decide together, right now.",
  comparePairs: [
    { left: "You should take a break.", right: "Shall we take a break?" },
    { left: "She should call him about it.", right: "Shall I call him for you?" },
  ],
  guided: [
    { prompt: "You look tired. You ___ get more sleep.", answer: "should" },
    { prompt: "He ___ apologize for what he said.", answer: "should" },
    { prompt: "She's been coughing all week — she ___ see a doctor.", answer: "should" },
    { prompt: "___ we start the meeting now? (formal suggestion)", answer: "Shall" },
    { prompt: "___ I open the window for you?", answer: "Shall" },
    { prompt: "___ we order some coffee before the movie starts?", answer: "Shall" },
  ],
  practice: [
    "Give a friend advice using should.",
    "Suggest an action together, using shall we.",
    "Offer to do something for someone, using shall I.",
  ],
  wrapup: "Should gives advice about what's wise. Shall I/we...? offers to do something or suggests an action together.",
  nextHint: "Past modals of deduction, where must have, might have, and can't have make guesses about things that already happened.",
};

// Modals -- Lesson 6: Past Modals of Deduction

export default {
  number: 6,
  code: "6",
  title: "Past Modals of Deduction",
  modals: ["must have", "might have", "can't have"],
  leadIn: "The classroom light was on this morning, but no one was inside. What do you think happened?",
  teach: [
    {
      name: "Must Have — A Confident Guess",
      definition: "Used when the speaker is almost certain something happened, based on clear evidence.",
      examples: ["The lights are off — they must have left.", "She looks exhausted, she must have worked all night.", "The ground is wet, it must have rained."],
    },
    {
      name: "Might Have / Can't Have — Less Certain Guesses",
      definition: "Might have shows a possible past action. Can't have shows the speaker is confident something did NOT happen.",
      examples: ["He might have missed the bus.", "She might have forgotten about the meeting.", "He can't have finished already — it's only been five minutes."],
    },
  ],
  compareLeftLabel: "Must have — confident yes",
  compareRightLabel: "Can't have — confident no",
  compareNote: "Must have and can't have are opposite conclusions — both confident, just pointing in different directions.",
  comparePairs: [
    { left: "His car's gone, he must have left already.", right: "His car's still here, he can't have left yet." },
    { left: "The food's cold, she must have cooked it hours ago.", right: "The food's still hot, she can't have cooked it long ago." },
  ],
  guided: [
    { prompt: "The door is unlocked — someone ___ forgotten to lock it.", answer: "must have" },
    { prompt: "I'm not sure, but he ___ taken the wrong train.", answer: "might have" },
    { prompt: "She was with us all evening, so she ___ sent that message.", answer: "can't have" },
  ],
  practice: [
    "Look at a mystery clue and guess confidently, using must have.",
    "Make a less certain guess about the past, using might have.",
    "Rule something out confidently, using can't have.",
  ],
  wrapup: "Must have makes a confident guess about the past. Might have is less certain, and can't have confidently rules something out.",
  nextHint: "Offers and promises, where will and would step outside deduction and back into everyday, polite English.",
};

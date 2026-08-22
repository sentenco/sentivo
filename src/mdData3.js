// Modals -- Lesson 3: Possibility and Probability

export default {
  number: 3,
  code: "3",
  title: "Possibility and Probability",
  modals: ["may", "might", "could", "must"],
  leadIn: "Look outside — do you think it will rain today? How sure are you?",
  teach: [
    {
      name: "Possibility — may / might / could",
      definition: "These show something is possible, but the speaker isn't sure — a real guess with room for doubt.",
      examples: ["She might be at home.", "It may rain later.", "He could be stuck in traffic."],
    },
    {
      name: "Strong Probability — must",
      definition: "Must shows a confident conclusion based on evidence — the speaker is almost certain, not just guessing.",
      examples: ["Her lights are on — she must be home.", "He hasn't eaten all day, he must be hungry.", "The streets are wet, it must have rained."],
    },
  ],
  compareLeftLabel: "Might — a real guess",
  compareRightLabel: "Must — a confident conclusion",
  compareNote: "Might leaves real doubt. Must means the evidence points strongly to one answer.",
  comparePairs: [
    { left: "She might be at the gym.", right: "Her gym bag is gone, so she must be at the gym." },
    { left: "It might be expensive.", right: "It's made of gold, it must be expensive." },
  ],
  guided: [
    { prompt: "I'm not sure, but she ___ be running late.", answer: "might" },
    { prompt: "He's shivering and his lips are blue — he ___ be freezing.", answer: "must" },
    { prompt: "That ___ be true, but I'm not certain.", answer: "could" },
  ],
  practice: [
    "Make a guess about the weather tomorrow, using might.",
    "Make a confident guess about a friend's mood, using must, based on a clue.",
    "Write one sentence with could showing a real possibility.",
  ],
  wrapup: "May, might, and could show real uncertainty. Must shows a confident conclusion backed by evidence.",
  nextHint: "Obligation and necessity, where must and have to say something is required — and where the mustn't trap catches a lot of learners.",
};

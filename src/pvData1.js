// Passive Voice -- Lesson 1: Passive Basics + Present Simple Passive

export default {
  number: 1,
  code: "1",
  title: "Passive Basics",
  formula: "am / is / are + past participle",
  leadIn: "Think of something in your kitchen — who made it, and does that matter to you when you use it?",
  teach: [
    {
      name: "Active vs Passive — Shifting the Focus",
      definition: "In an active sentence, the subject does the action. In a passive sentence, the subject receives the action — useful when the doer is unknown, unimportant, or just not the point.",
      examples: ["The chef cooks the meal. → The meal is cooked.", "Workers clean the office. → The office is cleaned.", "The company makes these phones. → These phones are made."],
    },
    {
      name: "Present Simple Passive — Formula",
      definition: "am / is / are + past participle. Describes routine facts and processes, with the focus on the receiver, not the doer.",
      examples: ["Coffee is grown in Brazil.", "English is spoken in many countries.", "The reports are checked every week."],
    },
  ],
  compareLeftLabel: "Active — focus on the doer",
  compareRightLabel: "Passive — focus on the receiver",
  compareNote: "Both sentences can carry the same information. Passive just moves the spotlight from who does it to what happens.",
  comparePairs: [
    { left: "Farmers grow rice here.", right: "Rice is grown here." },
    { left: "The company makes these phones.", right: "These phones are made by the company." },
  ],
  guided: [
    { prompt: "Rice ___ (grow) in many countries. (passive)", answer: "is grown" },
    { prompt: "These cars ___ (build) in Japan. (passive)", answer: "are built" },
    { prompt: "This bread ___ (bake) fresh every morning. (passive)", answer: "is baked" },
    { prompt: "Workers clean the office. → The office ___ (clean) every night. (passive)", answer: "is cleaned" },
    { prompt: "The teacher checks the homework. → The homework ___ (check) every day. (passive)", answer: "is checked" },
    { prompt: "They speak English in many countries. → English ___ (speak) in many countries. (passive)", answer: "is spoken" },
  ],
  practice: [
    "Rewrite one active sentence about your daily routine into the passive.",
    "Write one passive sentence about where a product you use is made.",
    "Write one passive sentence about a general fact, like a language spoken somewhere.",
  ],
  wrapup: "Passive voice shifts the focus from the doer to the receiver. The present simple passive — am/is/are + past participle — describes routine facts and processes.",
  nextHint: "Past simple passive, where the same idea moves into a completed action in the past.",
};

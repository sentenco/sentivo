// Conditionals -- Lesson 5: Mixed Conditional

export default {
  number: 5,
  code: "5",
  title: "Mixed Conditional",
  formula: "Past condition + present result, or present condition + past result",
  leadIn: "Is there a decision from your past that still affects your life today? What would be different if you had chosen differently?",
  teach: [
    {
      name: "Past Condition, Present Result",
      definition: "If + past perfect, would + base verb — a past event that never happened still affects the present.",
      examples: ["If I had studied medicine, I would be a doctor now.", "If she had taken that job, she would be living in Tokyo today.", "If he hadn't quit the team, he would still be playing."],
    },
    {
      name: "Present Condition, Past Result",
      definition: "If + past simple, would have + past participle — a permanent truth about someone or something affected a specific moment in the past.",
      examples: ["If she weren't so shy, she would have spoken up at the meeting.", "If I didn't hate flying, I would have gone to the conference.", "If he weren't so stubborn, he would have accepted the help."],
    },
  ],
  compareLeftLabel: "Past → Present",
  compareRightLabel: "Present → Past",
  compareNote: "Both mix time periods on purpose — the tense doesn't match because the condition and the result really do belong to different times.",
  comparePairs: [
    { left: "If I had studied medicine, I would be a doctor now.", right: "If I weren't afraid of blood, I would have studied medicine." },
    { left: "If she had left home earlier, she would be more independent now.", right: "If she weren't so attached to home, she would have left earlier." },
  ],
  guided: [
    { prompt: "If I ___ (learn) to swim as a kid, I wouldn't be scared of the water now.", answer: "had learned" },
    { prompt: "If he weren't so lazy, he ___ (finish) the project by now.", answer: "would have finished" },
    { prompt: "If they had moved abroad, they ___ (speak) another language today.", answer: "would speak" },
  ],
  practice: [
    "Write one sentence about how a past decision still affects your present, using a past condition and a present result.",
    "Write one sentence about a present trait that affected something in your past, using a present condition and a past result.",
    "Explain your sentences to a partner — which time is the condition, and which is the result?",
  ],
  wrapup: "Mixed conditionals combine two different time periods on purpose — a past condition can shape the present, and a present truth can explain the past.",
  nextHint: null,
};

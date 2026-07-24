// Parts of Speech -- Topic 6: Interjections

export default {
  number: 6,
  topicName: "Interjections",

  lessonA: {
    code: "6A",
    title: "Interjections",
    kind: "Lesson",
    objective: "Recognize interjections as words that express sudden feeling or reaction, and use correct punctuation.",
    leadIn: "What do you say when you're suddenly surprised?",
    concepts: [
      {
        name: "Interjection",
        definition: "An interjection expresses a sudden feeling or reaction. It's often followed by an exclamation mark.",
        examples: [
          "Wow! That is amazing.",
          "Ouch! My foot hurts.",
          "Oh, I understand now.",
          "Hey! Wait for me.",
        ],
      },
    ],
    guided: [
      { prompt: "___! That is amazing. (surprise)", answer: "Wow" },
      { prompt: "___! My foot hurts. (pain)", answer: "Ouch" },
      { prompt: "___! Wait for me. (getting attention)", answer: "Hey" },
    ],
    independent: [
      "Match the interjection to the feeling: “Ouch” → ?",
      "Choose the best interjection for: “___! I passed the test!”",
      "Add correct punctuation: “Oh I see.”",
    ],
    wrapup: "Interjections show sudden feeling. A strong interjection usually ends with an exclamation mark.",
  },

  lessonB: {
    code: "6B",
    title: "Interjections",
    kind: "Assessment",
    testGoal: "Check that students can choose the correct interjection for a feeling and punctuate it correctly.",
    sections: [
      {
        part: "A", type: "mc", label: "Choose the interjection", desc: "Choose the interjection that fits the sentence.",
        items: [
          { q: "___! That is amazing.", options: ["Wow", "Oh", "Because", "The"], correct: 0 },
          { q: "___! My foot hurts.", options: ["Ouch", "And", "So", "Under"], correct: 0 },
          { q: "___! Wait for me.", options: ["Hey", "But", "Is", "At"], correct: 0 },
        ],
      },
      {
        part: "B", type: "mc", label: "Match feeling to interjection", desc: "Choose the interjection that matches the feeling.",
        items: [
          { q: "Surprise", options: ["Wow", "Ouch", "Oh well"], correct: 0 },
          { q: "Pain", options: ["Wow", "Ouch", "Hey"], correct: 1 },
          { q: "Realization", options: ["Oh, I see", "Ouch", "Hey"], correct: 0 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Punctuate correctly", desc: "Add the correct capitalization and punctuation.",
        items: [
          { prompt: "wow that is amazing", answer: "Wow! That is amazing." },
          { prompt: "oh i understand now", answer: "Oh, I understand now." },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the interjection", desc: "Find and fix the interjection mistake.",
        items: [
          { wrong: "Ouch, that is amazing.", correct: "Wow! That is amazing." },
          { wrong: "Hey. Wait for me.", correct: "Hey! Wait for me." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using an interjection.",
        items: [
          "Say an interjection you'd use if you won a prize.",
          "Say an interjection you'd use if you dropped something.",
        ],
      },
    ],
  },
};

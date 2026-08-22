// Parts of Speech -- Topic 4: Prepositions

export default {
  number: 4,
  topicName: "Prepositions",

  lessonA: {
    code: "4A",
    title: "Prepositions",
    kind: "Lesson",
    objective: "Use common prepositions to show relationships of time and place.",
    leadIn: "Where is your phone right now? Answer in one sentence.",
    concepts: [
      {
        name: "Preposition of place",
        color: "preposition",
        definition: "Shows where something is.",
        examples: [
          "The book is **on** the table.",
          "The cat is **under** the chair.",
        ],
        mistake: {
          wrong: "The book is at the table.",
          correct: "The book is on the table.",
          note: "Use on for surfaces, in for enclosed spaces, at for exact points.",
        },
      },
      {
        name: "Preposition of time",
        color: "preposition",
        definition: "Shows when something happens.",
        examples: [
          "We study **in** the morning.",
          "The meeting is **at** 9 a.m.",
        ],
        mistake: {
          wrong: "My birthday is at July.",
          correct: "My birthday is in July.",
          note: "Use in for months/years, on for days/dates, at for exact times.",
        },
      },
    ],
    compareLeftLabel: "Place",
    compareRightLabel: "Time",
    compareNote: "The same word can mean different things — in, on, and at all work for both place and time, just with different rules.",
    comparePairs: [
      { left: "in the box (place)", right: "in July (time)" },
      { left: "at the door (place)", right: "at 9 a.m. (time)" },
    ],
    guided: [
      { prompt: "The book is ___ the table.", answer: "on" },
      { prompt: "We study ___ the morning.", answer: "in" },
      { prompt: "The cat is ___ the chair.", answer: "under" },
    ],
    independent: [
      "Fill in the blank: “She walked ___ the store.”",
      "Choose the preposition that matches the picture.",
      "Write one sentence using the preposition “near.”",
    ],
    wrapup: "Prepositions show place or time. The same word — in, on, at — can mean either, depending on context.",
  },

  lessonB: {
    code: "4B",
    title: "Prepositions",
    kind: "Assessment",
    testGoal: "Check that students can choose and use the correct preposition of time, place, or direction.",
    sections: [
      {
        part: "A", type: "mc", label: "Prepositions of place", desc: "Choose the correct preposition.",
        items: [
          { q: "The book is ___ the table.", options: ["on", "in", "at", "to"], correct: 0 },
          { q: "We study ___ the morning.", options: ["on", "in", "at", "to"], correct: 1 },
          { q: "The cat is ___ the chair.", options: ["under", "on", "to", "at"], correct: 0 },
        ],
      },
      {
        part: "B", type: "mc", label: "Prepositions of time and direction", desc: "Choose the correct preposition.",
        items: [
          { q: "She walked ___ the store.", options: ["to", "at", "under", "in"], correct: 0 },
          { q: "The meeting is ___ 9 a.m.", options: ["on", "in", "at", "to"], correct: 2 },
          { q: "My birthday is ___ July.", options: ["on", "in", "at", "to"], correct: 1 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Complete with a preposition", desc: "Fill in the preposition that fits.",
        items: [
          { prompt: "The keys are ___ my bag. (place)", answer: "in" },
          { prompt: "We arrived ___ the airport. (place)", answer: "at" },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the preposition", desc: "Find and fix the preposition mistake.",
        items: [
          { wrong: "The book is at the table.", correct: "The book is on the table." },
          { wrong: "We study on the morning.", correct: "We study in the morning." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using a preposition.",
        items: [
          "Describe where your bag is right now using a preposition.",
          "Say one thing you do at a specific time, using “at” or “in.”",
        ],
      },
    ],
  },
};

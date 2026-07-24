// Parts of Speech -- Topic 5: Conjunctions

export default {
  number: 5,
  topicName: "Conjunctions",

  lessonA: {
    code: "5A",
    title: "Conjunctions",
    kind: "Lesson",
    objective: "Use conjunctions to connect words, phrases, or clauses to add, contrast, or give reasons.",
    leadIn: "Name two foods you like, connected with “and.”",
    concepts: [
      {
        name: "Conjunction",
        definition: "A conjunction connects words, phrases, or clauses.",
        examples: [
          "I like apples and bananas.",
          "She is tired, but she is happy.",
          "Do you want tea or juice?",
          "He stayed home because he was sick.",
        ],
      },
    ],
    guided: [
      { prompt: "I like apples ___ bananas. (adding)", answer: "and" },
      { prompt: "She is tired, ___ she is happy. (contrast)", answer: "but" },
      { prompt: "He stayed home ___ he was sick. (reason)", answer: "because" },
    ],
    independent: [
      "Join: “I woke up late.” + “I missed the bus.” using “so.”",
      "Choose: “Do you want tea ___ juice?” (or / and)",
      "Classify “and,” “but,” “because,” “so” by purpose: add, contrast, or reason.",
    ],
    wrapup: "Conjunctions connect ideas — to add (and), to contrast (but), to choose (or), or to give a reason (because, so).",
  },

  lessonB: {
    code: "5B",
    title: "Conjunctions",
    kind: "Assessment",
    testGoal: "Check that students can choose the correct conjunction and join two ideas correctly.",
    sections: [
      {
        part: "A", type: "mc", label: "Choose the conjunction", desc: "Choose the conjunction that fits the sentence.",
        items: [
          { q: "I like apples ___ bananas.", options: ["and", "but", "or", "because"], correct: 0 },
          { q: "She is tired, ___ she is happy.", options: ["and", "but", "or", "because"], correct: 1 },
          { q: "Do you want tea ___ juice?", options: ["and", "but", "or", "because"], correct: 2 },
        ],
      },
      {
        part: "B", type: "mc", label: "Choose the conjunction", desc: "Choose the conjunction that fits the sentence.",
        items: [
          { q: "He stayed home ___ he was sick.", options: ["and", "but", "or", "because"], correct: 3 },
          { q: "I woke up late, ___ I missed the bus.", options: ["so", "or", "and", "because"], correct: 0 },
          { q: "She studied hard, ___ she still felt nervous.", options: ["and", "but", "or", "so"], correct: 1 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Join the sentences", desc: "Join the two short sentences using a conjunction.",
        items: [
          { prompt: "I woke up late. I missed the bus.", answer: "I woke up late, so I missed the bus." },
          { prompt: "He is smart. He is lazy.", answer: "He is smart, but he is lazy." },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the conjunction", desc: "Find and fix the conjunction mistake.",
        items: [
          { wrong: "I like tea but coffee.", correct: "I like tea and coffee." },
          { wrong: "She stayed home so she was sick.", correct: "She stayed home because she was sick." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using a conjunction.",
        items: [
          "Make one sentence with “because” about why you're learning English.",
          "Make one sentence with “but” about two different things.",
        ],
      },
    ],
  },
};

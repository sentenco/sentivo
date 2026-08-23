// Parts of Speech -- Topic 5: Conjunctions

export default {
  number: 5,
  topicName: "Conjunctions",

  lessonA: {
    code: "5A",
    title: "Conjunctions",
    kind: "Lesson",
    objective: "Use coordinating and subordinating conjunctions to connect words, phrases, or clauses.",
    leadIn: "Name two foods you like, connected with “and.”",
    concepts: [
      {
        name: "Coordinating conjunction",
        color: "conjunction",
        definition: "Joins two equal ideas — and, but, or, so.",
        examples: [
          "I like apples **and** bananas.",
          "She is tired, **but** happy.",
        ],
        mistake: {
          wrong: "I like tea but coffee.",
          correct: "I like tea and coffee.",
          note: "\"But\" shows contrast — use \"and\" to simply add.",
        },
      },
      {
        name: "Subordinating conjunction",
        color: "conjunction",
        definition: "Adds a reason or condition to the main idea — because, although, if.",
        examples: [
          "He stayed home **because** he was sick.",
          "**Although** it rained, we went out.",
        ],
        mistake: {
          wrong: "Although it was raining, but we went out.",
          correct: "Although it was raining, we went out.",
          note: "Don't pair \"although\" with \"but\" — pick one.",
        },
      },
    ],
    compareLeftLabel: "Coordinating (and / but / or / so)",
    compareRightLabel: "Subordinating (because / although / if)",
    compareNote: "Coordinating conjunctions join equal ideas; subordinating conjunctions make one idea depend on the other.",
    comparePairs: [
      { left: "She is tired, but happy.", right: "Although she is tired, she is happy." },
      { left: "He stayed home, so he missed the game.", right: "He missed the game because he stayed home." },
    ],
    guided: [
      { prompt: "I like apples ___ bananas. (adding)", answer: "and" },
      { prompt: "She is tired, ___ she is happy. (contrast)", answer: "but" },
      { prompt: "I woke up late, ___ I missed the bus. (result)", answer: "so" },
      { prompt: "He stayed home ___ he was sick. (reason)", answer: "because" },
      { prompt: "___ it rained, we went out. (condition/contrast)", answer: "Although" },
      { prompt: "We'll go to the park ___ it doesn't rain. (condition)", answer: "if" },
    ],
    independent: [
      "Join: “I woke up late.” + “I missed the bus.” using “so.”",
      "Choose: “Do you want tea ___ juice?” (or / and)",
      "Classify “and,” “but,” “because,” “so” by purpose: add, contrast, or reason.",
    ],
    wrapup: "Coordinating conjunctions join equals. Subordinating conjunctions add a reason or condition — and never pair with \"but.\"",
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

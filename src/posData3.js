// Parts of Speech -- Topic 3: Adjectives vs Adverbs

export default {
  number: 3,
  topicName: "Adjectives vs Adverbs",

  lessonA: {
    code: "3A",
    title: "Adjectives vs Adverbs",
    kind: "Lesson",
    objective: "Distinguish adjectives, which describe nouns, from adverbs, which describe verbs, adjectives, or other adverbs.",
    leadIn: "Describe something in this room in one word.",
    concepts: [
      {
        name: "Adjective",
        definition: "An adjective describes a noun. It often answers “what kind” or “which one.”",
        examples: [
          "She has a beautiful dress.",
          "The test was extremely easy.",
          "That is a tall building.",
        ],
      },
      {
        name: "Adverb",
        definition: "An adverb describes a verb, an adjective, or another adverb. It often answers “how,” “when,” “where,” or “to what extent.”",
        examples: [
          "He runs quickly.",
          "The car is very slow.",
          "She sings beautifully.",
        ],
      },
    ],
    compareLeftLabel: "Adjective",
    compareRightLabel: "Adverb",
    compareNote: "An adjective describes a noun (“a quick fox”). An adverb describes the action (“runs quickly”).",
    comparePairs: [
      { left: "a quick fox", right: "The fox runs quickly." },
      { left: "a careful driver", right: "She drives carefully." },
    ],
    guided: [
      { prompt: "She has a ___ (beauty) dress.", answer: "beautiful" },
      { prompt: "He runs ___ (quick).", answer: "quickly" },
      { prompt: "The car is very ___ (slow).", answer: "slow" },
    ],
    independent: [
      "Label each word: “quick” and “quickly.”",
      "Decide if the underlined word describes a noun or a verb.",
      "Change “careful” into its adverb form.",
    ],
    wrapup: "Adjectives describe nouns. Adverbs describe verbs, adjectives, or other adverbs — and often end in -ly.",
  },

  lessonB: {
    code: "3B",
    title: "Adjectives vs Adverbs",
    kind: "Assessment",
    testGoal: "Check that students can tell adjectives and adverbs apart and use the correct form in a sentence.",
    sections: [
      {
        part: "A", type: "mc", label: "Adjective or adverb?", desc: "Decide what the underlined word is doing.",
        items: [
          { q: "She has a beautiful dress.", options: ["beautiful describes a noun (adjective)", "beautiful describes a verb (adverb)"], correct: 0 },
          { q: "He runs quickly.", options: ["quickly describes a noun (adjective)", "quickly describes a verb (adverb)"], correct: 1 },
          { q: "The test was extremely easy.", options: ["extremely describes a noun (adjective)", "extremely describes another word (adverb)"], correct: 1 },
        ],
      },
      {
        part: "B", type: "mc", label: "Choose the correct form", desc: "Choose the adjective or adverb that fits.",
        items: [
          { q: "She sings ___.", options: ["beautiful", "beautifully"], correct: 1 },
          { q: "He is a ___ driver.", options: ["careful", "carefully"], correct: 0 },
          { q: "He drives ___.", options: ["careful", "carefully"], correct: 1 },
        ],
      },
      {
        part: "C", type: "reveal", label: "Rewrite the sentence", desc: "Turn the phrase into a full sentence using the matching adverb.",
        items: [
          { prompt: "a quick fox", answer: "The fox runs quickly." },
          { prompt: "a careful driver", answer: "She drives carefully." },
        ],
      },
      {
        part: "D", type: "error", label: "Fix the mistake", desc: "Find and fix the adjective/adverb mistake.",
        items: [
          { wrong: "He runs quick.", correct: "He runs quickly." },
          { wrong: "That is a real good idea.", correct: "That is a really good idea." },
        ],
      },
      {
        part: "E", type: "speaking", label: "Speak it out", desc: "Answer using an adjective, then an adverb.",
        items: [
          "Describe a friend using one adjective.",
          "Describe how you speak English using one adverb.",
        ],
      },
    ],
  },
};

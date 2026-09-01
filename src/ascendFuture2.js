// ASCEND, Thinking About the Future Track, Lesson 2: "Is University Still Worth It?"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-future-2",
  code: "L2",
  mechanic: "push",
  title: "Is University Still Worth It?",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think university is still worth it for most people?",
      answer: "For some people, yeah.",
      pushes: [
        "Define 'some people' more precisely, worth it for whom, specifically?",
        "Now support that with a specific reason, not just an assertion.",
      ],
      skills: ["A precise definition of who benefits", "A specific supporting reason"],
    },
    {
      question: "What's the strongest argument against going to university?",
      answer: "The cost.",
      pushes: [
        "Go deeper than 'the cost'. What exactly makes the cost a bad trade-off?",
        "Now acknowledge the counterargument in favor of going despite the cost.",
      ],
      skills: ["A deeper explanation of the trade-off", "A counterargument acknowledged"],
    },
    {
      question: "Do you think there are good alternatives to university?",
      answer: "Yeah, probably.",
      pushes: [
        "Name a specific alternative.",
        "Now compare it directly to university using 'unlike...' or 'whereas...'",
      ],
      skills: ["A specific alternative named", "A direct comparison structure used"],
    },
    {
      question: "How much does the choice depend on what career someone wants?",
      answer: "A lot, probably.",
      pushes: [
        "Give a specific example of a career where it matters a lot, and one where it doesn't.",
        "Now explain why that difference exists.",
      ],
      skills: ["Two specific contrasting examples", "A reasoned explanation for the difference"],
    },
    {
      question: "Do you feel pressure to go to university, regardless of your own opinion on it?",
      answer: "Kind of, yeah.",
      pushes: [
        "Name specifically where that pressure comes from.",
        "Now tell us how you're navigating that pressure.",
      ],
      skills: ["A specific source of pressure named", "A personal strategy described"],
    },
    {
      question: "Do you think the value of a degree is changing over time?",
      answer: "I think so, yeah.",
      pushes: [
        "Give a specific piece of evidence or trend behind that.",
        "Now hedge it, since this might not be true in every field.",
      ],
      skills: ["A specific trend cited", "A field-specific hedge added"],
    },
    {
      question: "What would you tell someone unsure about whether to go?",
      answer: "Think about what you actually want.",
      pushes: [
        "Give more concrete advice than that.",
        "Now name one question they should ask themselves specifically.",
      ],
      skills: ["Concrete, specific advice", "A specific self-reflective question proposed"],
    },
    {
      question: "Where do you personally land on this question?",
      answer: "Somewhere in the middle.",
      pushes: [
        "Turn that into an actual specific position.",
        "Now summarize it in one precise, well-formed sentence.",
      ],
      skills: ["A specific, concrete final position", "A concise, well-formed concluding sentence"],
    },
  ],
  recall: [
    { question: "Do you think university is still worth it for most people?", fromPrompt: 0 },
    { question: "Do you think there are good alternatives to university?", fromPrompt: 2 },
    { question: "Where do you personally land on this question?", fromPrompt: 7 },
  ],
};

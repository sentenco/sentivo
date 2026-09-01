// ASCEND, Thinking About the Future Track, Lesson 3: "Career Change and Reinvention"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-future-3",
  code: "L3",
  mechanic: "push",
  title: "Career Change and Reinvention",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think it's normal now for people to change careers multiple times?",
      answer: "Yeah, I think so.",
      pushes: [
        "Support that with a specific reason it's become more common.",
        "Now compare it to how things were in the past, using a contrast structure.",
      ],
      skills: ["A specific supporting reason", "A past-versus-present contrast used"],
    },
    {
      question: "Does that idea of changing careers appeal to you, or worry you?",
      answer: "A bit of both, honestly.",
      pushes: [
        "Unpack that. What specifically appeals to you, and what specifically worries you?",
        "Now tell us which feeling is stronger right now, and why.",
      ],
      skills: ["Both sides specifically unpacked", "A weighted comparison with reasoning"],
    },
    {
      question: "What do you think stops people from changing careers even when they want to?",
      answer: "Fear, probably.",
      pushes: [
        "Name a more specific fear, financial risk, starting over, judgment from others.",
        "Now name a practical obstacle beyond fear.",
      ],
      skills: ["A specific type of fear named", "A separate practical obstacle named"],
    },
    {
      question: "Do you think someone can be successful starting a new field later in life?",
      answer: "Yeah, definitely.",
      pushes: [
        "Give a specific example, real or hypothetical, that supports that.",
        "Now acknowledge one genuine disadvantage of starting later.",
      ],
      skills: ["A specific supporting example", "A genuine disadvantage acknowledged"],
    },
    {
      question: "What skills do you think transfer well between different careers?",
      answer: "Communication, stuff like that.",
      pushes: [
        "Name a more specific skill and explain exactly how it transfers.",
        "Now name a skill that doesn't transfer well, and why.",
      ],
      skills: ["A specific skill with a transfer mechanism explained", "A contrasting non-transferable skill named"],
    },
    {
      question: "How much should passion versus practicality guide a career decision?",
      answer: "Somewhere in between.",
      pushes: [
        "Make that more precise, what would tip the balance one way or the other?",
        "Now give an example situation where practicality should win.",
      ],
      skills: ["A specific tipping factor named", "A concrete example given"],
    },
    {
      question: "Have you ever seriously considered a completely different path for yourself?",
      answer: "Maybe once or twice.",
      pushes: [
        "Tell us specifically what that path was.",
        "Now tell us what ultimately made you consider it, or step back from it.",
      ],
      skills: ["A specific alternative path named", "A reason for the decision explained"],
    },
    {
      question: "What advice would you give someone scared to make a big career change?",
      answer: "Just go for it.",
      pushes: [
        "Give more specific, realistic advice than 'just go for it'.",
        "Now acknowledge a real risk they should actually prepare for.",
      ],
      skills: ["Concrete, realistic advice", "A genuine risk named to prepare for"],
    },
  ],
  recall: [
    { question: "Do you think it's normal now for people to change careers multiple times?", fromPrompt: 0 },
    { question: "What do you think stops people from changing careers even when they want to?", fromPrompt: 2 },
    { question: "What advice would you give someone scared to make a big career change?", fromPrompt: 7 },
  ],
};

// ASCEND, Talking About Travel Track, Lesson 2: "Planning a Trip"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-travel-2",
  code: "L2",
  mechanic: "push",
  title: "Planning a Trip",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a trip you're planning, or would like to plan.",
      answer: "A trip somewhere nice.",
      pushes: [
        "Tell us exactly where.",
        "Now tell us when you'd like to go.",
      ],
      skills: ["A specific destination named", "A timeframe added"],
    },
    {
      question: "What made you choose that destination?",
      answer: "It looks nice.",
      pushes: [
        "Give us a more specific reason.",
        "Now tell us where you first heard about it or saw it.",
      ],
      skills: ["A more specific reason", "A source detail added"],
    },
    {
      question: "How are you researching or planning it?",
      answer: "Looking online.",
      pushes: [
        "Tell us specifically what you're looking up.",
        "Now tell us what's been the most useful source so far.",
      ],
      skills: ["A specific research detail", "A useful source named"],
    },
    {
      question: "What's your budget looking like?",
      answer: "Not sure yet.",
      pushes: [
        "Give us a rough estimate, even if it's uncertain.",
        "Now tell us what you're most worried about affording.",
      ],
      skills: ["A rough estimate given", "A specific budget concern"],
    },
    {
      question: "What are you most looking forward to?",
      answer: "Just the trip in general.",
      pushes: [
        "Give us one specific thing you're excited about.",
        "Now tell us why that particular thing excites you.",
      ],
      skills: ["A specific detail named", "A reason for the excitement"],
    },
    {
      question: "Is there anything you're worried about with this trip?",
      answer: "A little.",
      pushes: [
        "Tell us exactly what worries you.",
        "Now tell us what you're doing to prepare for it.",
      ],
      skills: ["A specific worry named", "A preparation detail added"],
    },
    {
      question: "Are you traveling alone or with others?",
      answer: "Not sure yet.",
      pushes: [
        "Tell us who you'd ideally go with, or why alone.",
        "Now tell us how that choice affects your planning.",
      ],
      skills: ["A specific detail about companions", "An effect on planning described"],
    },
    {
      question: "What would make this trip a success for you?",
      answer: "Just having fun.",
      pushes: [
        "Give us a more specific picture of what success looks like.",
        "Now tell us what would make it disappointing.",
      ],
      skills: ["A specific, detailed picture", "A contrasting detail added"],
    },
  ],
  recall: [
    { question: "Tell me about a trip you're planning, or would like to plan.", fromPrompt: 0 },
    { question: "What's your budget looking like?", fromPrompt: 3 },
    { question: "Is there anything you're worried about with this trip?", fromPrompt: 5 },
  ],
};

// ASCEND (Push mechanic), Travel & Getting Around Track, Lesson 1: "Talking About Travel"
// A2 -> B1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-travel-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Travel",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about the last trip you took.",
      answer: "It was fun.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than fun, good, or nice.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of fun/good/nice", "A reason or detail added to the sentence"],
    },
    {
      question: "How do you usually get around, day to day?",
      answer: "I just drive, or take the bus.",
      pushes: [
        "That's clear, but plain. Tell us more, like how long it usually takes.",
        "Now add how you feel about it.",
      ],
      skills: ["A time or duration detail added", "An opinion added"],
    },
    {
      question: "How was your trip to work or somewhere recently?",
      answer: "It was okay.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you felt that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Tell me about a place you visited that you really liked.",
      answer: "I went somewhere nice.",
      pushes: [
        "'Somewhere' is vague. Where exactly did you go?",
        "Now tell us what made it nice.",
      ],
      skills: ["A specific place named instead of a vague noun", "A reason detail added"],
    },
    {
      question: "Do you prefer traveling alone or with others?",
      answer: "With others, mostly.",
      pushes: [
        "Give us more. Why do you prefer that?",
        "Now add an example from a real trip.",
      ],
      skills: ["A reason added", "An example added"],
    },
    {
      question: "Is there a place you'd like to visit someday?",
      answer: "Maybe somewhere warm, I guess.",
      pushes: [
        "Good start. Now tell us why that place appeals to you.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your travel plans for this year?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add where, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "A place or companion detail added"],
    },
    {
      question: "Is there anything about traveling you're looking forward to?",
      answer: "Maybe just relaxing somewhere new.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about the last trip you took.", fromPrompt: 0 },
    { question: "How do you usually get around, day to day?", fromPrompt: 1 },
    { question: "How was your trip to work or somewhere recently?", fromPrompt: 2 },
  ],
};

// ASCEND (Push mechanic), Money & Shopping Track, Lesson 1: "Talking About Money"
// A2 -> B1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-money-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Money",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your shopping habits.",
      answer: "I shop sometimes, it's fine.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific word than fine, good, or okay.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific word in place of fine/good/okay", "A reason or detail added to the sentence"],
    },
    {
      question: "What did you buy recently?",
      answer: "I got some clothes.",
      pushes: [
        "'Got' is a pretty plain verb. Try a stronger one that shows more.",
        "Now add why you bought them.",
      ],
      skills: ["A stronger verb than got/had/did", "A reason detail added"],
    },
    {
      question: "How do you feel about spending money on things you want, not just need?",
      answer: "It's okay sometimes.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you feel that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Tell me about something you saved up for.",
      answer: "I saved for something and got it.",
      pushes: [
        "'Something' is vague. What exactly did you save for?",
        "Now tell us how long it took.",
      ],
      skills: ["A specific item named instead of a vague noun", "A duration detail added"],
    },
    {
      question: "Do you usually plan your spending, or just decide in the moment?",
      answer: "A little of both, I think.",
      pushes: [
        "Give us more. Which one do you do more often?",
        "Now add an example of a time you did this.",
      ],
      skills: ["A clearer preference stated", "An example added"],
    },
    {
      question: "Is there something you'd like to save for?",
      answer: "Maybe a trip, I guess.",
      pushes: [
        "Good start. Now tell us why that matters to you.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your plans for your money this month?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd spend it on, specifically.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "A specific detail added"],
    },
    {
      question: "Is there a purchase you're looking forward to making?",
      answer: "Maybe a new phone.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about your shopping habits.", fromPrompt: 0 },
    { question: "What did you buy recently?", fromPrompt: 1 },
    { question: "How do you feel about spending money on things you want, not just need?", fromPrompt: 2 },
  ],
};

// ASCEND (Push mechanic), Daily Routine & Work-Life Track, Lesson 1: "Talking About Your Day"
// A2 -> B1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-routine-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Your Day",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your day today.",
      answer: "It was fine.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than fine, good, or okay.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of fine/good/okay", "A reason or detail added to the sentence"],
    },
    {
      question: "What did you do at work today?",
      answer: "I did some meetings.",
      pushes: [
        "'Did' is a pretty plain verb. Try a stronger one that shows more.",
        "Now add what the meetings were about.",
      ],
      skills: ["A stronger verb than did/had/got", "A topic or subject detail added"],
    },
    {
      question: "How did you feel by the end of the day?",
      answer: "I was tired.",
      pushes: [
        "Instead of tired, busy, or stressed, give us the exact feeling.",
        "Now combine the feeling and the reason into one sentence.",
      ],
      skills: ["A precise feeling word, not tired/busy/stressed", "The feeling and reason combined in one sentence"],
    },
    {
      question: "Did anything unusual happen today?",
      answer: "Something came up.",
      pushes: [
        "'Something' is pretty vague. What exactly came up?",
        "Now tell us how you handled it.",
      ],
      skills: ["A specific detail instead of a vague noun", "A resolution or action detail added"],
    },
    {
      question: "How was your commute or trip to work today?",
      answer: "It was okay.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you felt that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Is there anything you'd do differently tomorrow?",
      answer: "I would start earlier.",
      pushes: [
        "Good start. Now tell us why you'd start earlier.",
        "Can you make that sound more like a plan, not just an idea? Try 'tomorrow I will...'",
      ],
      skills: ["A reason or purpose clause added", "A clear future-plan structure (\"tomorrow I will...\")"],
    },
    {
      question: "What are your plans for this weekend?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do it with, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "An activity or companion detail added"],
    },
    {
      question: "Is there anything you're looking forward to this week?",
      answer: "Maybe seeing some friends.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about your day today.", fromPrompt: 0 },
    { question: "What did you do at work today?", fromPrompt: 1 },
    { question: "How did you feel by the end of the day?", fromPrompt: 2 },
  ],
};

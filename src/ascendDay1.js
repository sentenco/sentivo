// ASCEND (new mechanic), Talking About Your Day Track, Lesson 1: "Describing Your Weekend"
// A2 -> B1, Teens. Push mechanic: student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-day-1",
  code: "L1",
  mechanic: "push",
  title: "Describing Your Weekend",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your weekend.",
      answer: "It was good.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than good, nice, or fine.",
        "Good. Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of good/nice/fine", "A reason or detail added to the sentence"],
    },
    {
      question: "What did you do?",
      answer: "I went to my friend's house.",
      pushes: [
        "'Went' is a pretty plain verb. Try a stronger one that shows more.",
        "Now add when or how long, right in the same sentence.",
      ],
      skills: ["A stronger verb than went/got/did", "A time or duration detail added"],
    },
    {
      question: "How did you feel afterward?",
      answer: "I was tired.",
      pushes: [
        "Instead of tired, happy, or sad, give us the exact feeling.",
        "Now combine the feeling and the reason into one sentence.",
      ],
      skills: ["A precise feeling word, not tired/happy/sad", "The feeling and reason combined in one sentence"],
    },
    {
      question: "Did anything interesting happen?",
      answer: "We watched a movie.",
      pushes: [
        "'Movie' is fine, but which movie? Give us the name or the type.",
        "Now tell us where you watched it.",
      ],
      skills: ["A specific detail (name or genre) instead of a vague noun", "A place detail added"],
    },
    {
      question: "What was the movie like?",
      answer: "It was okay.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you felt that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Would you do anything differently next time?",
      answer: "I would go earlier.",
      pushes: [
        "Good start. Now tell us why you'd go earlier.",
        "Can you make that sound more like a plan, not just an idea? Try 'next time I will...'",
      ],
      skills: ["A reason or purpose clause added", "A clear future-plan structure (\"next time I will...\")"],
    },
    {
      question: "What are your plans for next weekend?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do it with, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "An activity or companion detail added"],
    },
    {
      question: "Is there anything you're looking forward to?",
      answer: "Maybe seeing my family.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about your weekend.", fromPrompt: 0 },
    { question: "What did you do?", fromPrompt: 1 },
    { question: "How did you feel afterward?", fromPrompt: 2 },
  ],
};

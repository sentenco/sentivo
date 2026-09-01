// ASCEND (Push mechanic), Movies & Entertainment Track, Lesson 1: "Talking About a Show or Movie"
// A2 -> B1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-movies-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About a Show or Movie",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a show or movie you like.",
      answer: "It's good.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than good, nice, or fine.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of good/nice/fine", "A reason or detail added to the sentence"],
    },
    {
      question: "What's it about?",
      answer: "It's about some people.",
      pushes: [
        "That's pretty vague. Give us more, like the genre or the main idea.",
        "Now add one specific detail about the story.",
      ],
      skills: ["A genre or main-idea detail added", "A specific story detail added"],
    },
    {
      question: "What did you think of the last episode or scene you watched?",
      answer: "It was okay.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you felt that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Who's your favorite character?",
      answer: "I like the main character.",
      pushes: [
        "'Like' is pretty plain. Tell us more about why.",
        "Now add a specific example of something they did.",
      ],
      skills: ["A stronger reason than just 'like'", "A specific example added"],
    },
    {
      question: "How did you feel after watching it?",
      answer: "I was happy.",
      pushes: [
        "Instead of happy, sad, or excited, give us the exact feeling.",
        "Now combine the feeling and the reason into one sentence.",
      ],
      skills: ["A precise feeling word, not happy/sad/excited", "The feeling and reason combined in one sentence"],
    },
    {
      question: "Would you recommend it to a friend?",
      answer: "Maybe, I guess.",
      pushes: [
        "Good start. Now tell us who you'd recommend it to, and why.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason and audience added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are you planning to watch next?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add why, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "A reason or companion detail added"],
    },
    {
      question: "Is there a new season or movie you're looking forward to?",
      answer: "Maybe the next season.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a show or movie you like.", fromPrompt: 0 },
    { question: "What's it about?", fromPrompt: 1 },
    { question: "What did you think of the last episode or scene you watched?", fromPrompt: 2 },
  ],
};

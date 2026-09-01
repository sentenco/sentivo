// ASCEND (Push mechanic), Family & Home Life Track, Lesson 1: "Talking About Your Family"
// A2 -> B1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-family-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Your Family",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your family.",
      answer: "It's good.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than good, nice, or fine.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of good/nice/fine", "A reason or detail added to the sentence"],
    },
    {
      question: "Who do you live with?",
      answer: "My parents and my sister.",
      pushes: [
        "That's clear, but plain. Add a small detail about one of them.",
        "Now add how you'd describe living together, in one word or phrase.",
      ],
      skills: ["A detail about a family member added", "A description of home life added"],
    },
    {
      question: "What do you usually do together as a family?",
      answer: "We just hang out.",
      pushes: [
        "'Hang out' is pretty vague. What do you actually do together?",
        "Now add when this usually happens.",
      ],
      skills: ["A specific activity instead of a vague phrase", "A time detail added"],
    },
    {
      question: "Tell me about a family member you're close to.",
      answer: "I'm close to my sister.",
      pushes: [
        "Good, now tell us why you're close to her.",
        "Now give us a specific example of that closeness.",
      ],
      skills: ["A reason added", "A specific example or story detail added"],
    },
    {
      question: "Do you ever disagree with your family about anything?",
      answer: "Sometimes, a little.",
      pushes: [
        "Give us more. What kind of thing do you usually disagree about?",
        "Now tell us how it usually gets resolved.",
      ],
      skills: ["A specific topic of disagreement added", "A resolution detail added"],
    },
    {
      question: "What's a family tradition you have?",
      answer: "We eat dinner together, I guess.",
      pushes: [
        "Good start. Now tell us why that tradition matters to you.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your plans with your family this weekend?",
      answer: "I don't know yet.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do, specifically.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "An activity detail added"],
    },
    {
      question: "Is there anything about your family you're looking forward to?",
      answer: "Maybe a trip we're planning.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about your family.", fromPrompt: 0 },
    { question: "Who do you live with?", fromPrompt: 1 },
    { question: "What do you usually do together as a family?", fromPrompt: 2 },
  ],
};

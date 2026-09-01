// ASCEND, Talking About a Show or Movie Track, Lesson 3: "A Series You're Binge-Watching"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-movies-3",
  code: "L3",
  mechanic: "push",
  title: "A Series You're Binge-Watching",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a series you're currently watching.",
      answer: "It's good.",
      pushes: [
        "Good is very general. Give us a stronger word.",
        "Now tell us what the series is about.",
      ],
      skills: ["A stronger opinion adjective", "A plot detail added"],
    },
    {
      question: "How many episodes have you watched?",
      answer: "A lot.",
      pushes: [
        "Give us a rough number.",
        "Now tell us how quickly you're going through them.",
      ],
      skills: ["A specific number estimate", "A pace detail added"],
    },
    {
      question: "What's happening in the story right now?",
      answer: "Some stuff.",
      pushes: [
        "Give us one specific plot detail.",
        "Now tell us how you feel about that part of the story.",
      ],
      skills: ["A specific plot detail", "An opinion attached to it"],
    },
    {
      question: "Is there a twist or surprise that caught you off guard?",
      answer: "Yes, one part.",
      pushes: [
        "Describe that twist in more detail.",
        "Now tell us what you thought would happen instead.",
      ],
      skills: ["A more detailed description", "A prediction comparison added"],
    },
    {
      question: "What do you think will happen next?",
      answer: "Not sure.",
      pushes: [
        "Make a real guess, using 'I think... will...'",
        "Now tell us why you think that.",
      ],
      skills: ["A prediction structure used", "A reason for the prediction"],
    },
    {
      question: "Is there a character you especially like or dislike?",
      answer: "There's one I like.",
      pushes: [
        "Tell us who, and describe them a bit.",
        "Now tell us specifically why you like them.",
      ],
      skills: ["A specific character described", "A specific reason for liking them"],
    },
    {
      question: "Have you talked to anyone else about the series?",
      answer: "A little.",
      pushes: [
        "Tell us who, and what you talked about.",
        "Now tell us if they agreed with your opinion.",
      ],
      skills: ["A specific person and topic", "An agree/disagree detail added"],
    },
    {
      question: "Is there a new season or series you're looking forward to?",
      answer: "Maybe one.",
      pushes: [
        "Tell us which one, exactly.",
        "Now tell us why you're excited for it.",
      ],
      skills: ["A specific series named", "A reason for the anticipation"],
    },
  ],
  recall: [
    { question: "Tell me about a series you're currently watching.", fromPrompt: 0 },
    { question: "Is there a twist or surprise that caught you off guard?", fromPrompt: 3 },
    { question: "What do you think will happen next?", fromPrompt: 4 },
  ],
};

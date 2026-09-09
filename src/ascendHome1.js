// ASCEND (Push mechanic), Home & Neighborhood Track, Lesson 1: "Talking About Home"
// A2 -> B1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-home-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Home",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about the place where you live.",
      answer: "It's good.",
      leveledAnswer: "It's actually really comfortable because it gets a lot of natural light in the mornings.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than good, nice, or fine.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of good/nice/fine", "A reason or detail added to the sentence"],
    },
    {
      question: "What do you like about your neighborhood?",
      answer: "It's nice, close to things.",
      leveledAnswer: "There's a market just a few minutes' walk away, which makes grocery shopping so much easier.",
      pushes: [
        "'Close to things' is vague. What specifically is nearby?",
        "Now add why that matters to you.",
      ],
      skills: ["A specific place or feature named", "A reason added"],
    },
    {
      question: "How do you usually spend time at home?",
      answer: "I just relax, watch stuff.",
      leveledAnswer: "I usually watch cooking shows in the evening, sometimes with my partner.",
      pushes: [
        "'Watch stuff' is vague. What do you actually watch?",
        "Now add who you usually do this with, if anyone.",
      ],
      skills: ["A specific detail instead of a vague phrase", "A companion detail added"],
    },
    {
      question: "Tell me about a change you'd like to make to your home.",
      answer: "I want to change something.",
      leveledAnswer: "I'd like to repaint the living room because the current color feels a bit dull.",
      pushes: [
        "'Something' is vague. What exactly would you change?",
        "Now tell us why.",
      ],
      skills: ["A specific item or area named", "A reason added"],
    },
    {
      question: "Do you know your neighbors well?",
      answer: "A little, I guess.",
      leveledAnswer: "I know a couple of them well enough to chat, and last week one of them lent me some sugar.",
      pushes: [
        "Give us more. How do you know them, or interact with them?",
        "Now add an example of a time you talked with one.",
      ],
      skills: ["A specific detail about the relationship added", "An example added"],
    },
    {
      question: "What's something you'd like to do with your home in the future?",
      answer: "Maybe fix it up, I guess.",
      leveledAnswer: "I'd like to fix up the kitchen because the cabinets are really starting to fall apart.",
      pushes: [
        "Good start. Now tell us why that matters to you.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your plans for your home this year?",
      answer: "I don't know yet.",
      leveledAnswer: "I'm thinking about getting a new sofa sometime this year.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do specifically.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "A specific detail added"],
    },
    {
      question: "Is there anything about your home life you're looking forward to?",
      answer: "Maybe having guests over.",
      leveledAnswer: "I'm really looking forward to having guests over because I finally have enough space to host properly.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about the place where you live.", fromPrompt: 0 },
    { question: "What do you like about your neighborhood?", fromPrompt: 1 },
    { question: "How do you usually spend time at home?", fromPrompt: 2 },
  ],
};

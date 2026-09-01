// ASCEND, Talking About Your Family Track, Lesson 4: "A Disagreement at Home"
// A2 -> B1, Teens. Push mechanic. Heavier push toward hedging/reasoning.

export default {
  id: "ascend-family-4",
  code: "L4",
  mechanic: "push",
  title: "A Disagreement at Home",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a time you disagreed with your family.",
      answer: "It happens sometimes.",
      pushes: [
        "Tell us about one specific time, not just in general.",
        "Now tell us who it was with.",
      ],
      skills: ["A specific instance described", "A specific person named"],
    },
    {
      question: "What was the disagreement about?",
      answer: "Something small.",
      pushes: [
        "Tell us exactly what it was about.",
        "Now tell us why it mattered to you.",
      ],
      skills: ["A specific topic named", "A reason it mattered added"],
    },
    {
      question: "How did you express how you felt?",
      answer: "I just said it.",
      pushes: [
        "Tell us roughly what you actually said.",
        "Now tell us how you said it, calmly or not.",
      ],
      skills: ["A specific detail about what was said", "A manner detail added"],
    },
    {
      question: "How did the other person react?",
      answer: "They didn't agree.",
      pushes: [
        "Tell us more specifically how they reacted.",
        "Now tell us how that made you feel.",
      ],
      skills: ["A more specific reaction described", "A feeling word added"],
    },
    {
      question: "How was it resolved, if it was?",
      answer: "We talked about it.",
      pushes: [
        "Tell us what actually changed after that talk.",
        "Now use 'eventually' or 'in the end' to show the outcome.",
      ],
      skills: ["A specific outcome described", "A concluding connector used"],
    },
    {
      question: "Do you think you were right?",
      answer: "I'm not sure.",
      pushes: [
        "Try hedging with 'I think... but' to show a nuanced view.",
        "Now give us one reason for your side.",
      ],
      skills: ["A hedging structure (I think... but)", "A supporting reason added"],
    },
    {
      question: "What did you learn from that disagreement?",
      answer: "To listen more.",
      pushes: [
        "Give us a specific example of what listening more would look like.",
        "Now tell us if you've tried it since.",
      ],
      skills: ["A concrete example given", "A follow-up detail added"],
    },
    {
      question: "How do you usually handle disagreements now?",
      answer: "I try to stay calm.",
      pushes: [
        "Describe exactly what staying calm looks like for you.",
        "Now tell us if it always works.",
      ],
      skills: ["A concrete description of the strategy", "An honest evaluation added"],
    },
  ],
  recall: [
    { question: "Tell me about a time you disagreed with your family.", fromPrompt: 0 },
    { question: "What was the disagreement about?", fromPrompt: 1 },
    { question: "How was it resolved, if it was?", fromPrompt: 4 },
  ],
};

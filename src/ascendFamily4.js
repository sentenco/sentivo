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
      leveledAnswer: "Last month I disagreed with my mom about my curfew.",
      pushes: [
        "Tell us about one specific time, not just in general.",
        "Now tell us who it was with.",
      ],
      skills: ["A specific instance described", "A specific person named"],
    },
    {
      question: "What was the disagreement about?",
      answer: "Something small.",
      leveledAnswer: "It was about how late I could stay out with friends, and it mattered to me because I felt like I wasn't being trusted.",
      pushes: [
        "Tell us exactly what it was about.",
        "Now tell us why it mattered to you.",
      ],
      skills: ["A specific topic named", "A reason it mattered added"],
    },
    {
      question: "How did you express how you felt?",
      answer: "I just said it.",
      leveledAnswer: "I told her I felt like the curfew was too strict, and I said it pretty calmly even though I was frustrated.",
      pushes: [
        "Tell us roughly what you actually said.",
        "Now tell us how you said it, calmly or not.",
      ],
      skills: ["A specific detail about what was said", "A manner detail added"],
    },
    {
      question: "How did the other person react?",
      answer: "They didn't agree.",
      leveledAnswer: "She explained her reasons and didn't change her mind right away, which honestly made me feel a bit disappointed.",
      pushes: [
        "Tell us more specifically how they reacted.",
        "Now tell us how that made you feel.",
      ],
      skills: ["A more specific reaction described", "A feeling word added"],
    },
    {
      question: "How was it resolved, if it was?",
      answer: "We talked about it.",
      leveledAnswer: "We talked about it calmly, and in the end she agreed to extend my curfew by thirty minutes.",
      pushes: [
        "Tell us what actually changed after that talk.",
        "Now use 'eventually' or 'in the end' to show the outcome.",
      ],
      skills: ["A specific outcome described", "A concluding connector used"],
    },
    {
      question: "Do you think you were right?",
      answer: "I'm not sure.",
      leveledAnswer: "I think I had a point, but I also understand why she was being cautious.",
      pushes: [
        "Try hedging with 'I think... but' to show a nuanced view.",
        "Now give us one reason for your side.",
      ],
      skills: ["A hedging structure (I think... but)", "A supporting reason added"],
    },
    {
      question: "What did you learn from that disagreement?",
      answer: "To listen more.",
      leveledAnswer: "I learned to actually listen to her reasons instead of just arguing back, and I've tried to do that since.",
      pushes: [
        "Give us a specific example of what listening more would look like.",
        "Now tell us if you've tried it since.",
      ],
      skills: ["A concrete example given", "A follow-up detail added"],
    },
    {
      question: "How do you usually handle disagreements now?",
      answer: "I try to stay calm.",
      leveledAnswer: "I usually take a breath and wait before responding, though it doesn't always work when I'm really upset.",
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

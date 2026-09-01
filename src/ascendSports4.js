// ASCEND, Talking About Sports & Activities Track, Lesson 4: "An Injury or Setback"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-sports-4",
  code: "L4",
  mechanic: "push",
  title: "An Injury or Setback",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a time you got injured or hit a setback in a sport or activity.",
      answer: "I hurt myself once.",
      pushes: [
        "Tell us exactly what happened and what part was hurt.",
        "Now tell us when this happened.",
      ],
      skills: ["A specific detail about the injury", "A time detail added"],
    },
    {
      question: "How did it happen?",
      answer: "I wasn't careful.",
      pushes: [
        "Walk us through it step by step.",
        "Now use 'while I was...' to describe what you were doing.",
      ],
      skills: ["A step-by-step description", "A while-clause used"],
    },
    {
      question: "How did you feel in that moment?",
      answer: "It hurt a lot.",
      pushes: [
        "Give us a more specific feeling, physical or emotional.",
        "Now tell us what your first thought was.",
      ],
      skills: ["A precise feeling word", "A specific thought described"],
    },
    {
      question: "How long did it take to recover?",
      answer: "A while.",
      pushes: [
        "Give us a rough timeframe.",
        "Now tell us what recovery actually involved.",
      ],
      skills: ["A specific timeframe", "A recovery-process detail"],
    },
    {
      question: "Did it stop you from doing the activity?",
      answer: "For a bit.",
      pushes: [
        "Tell us how long, and how that felt.",
        "Now tell us what you did instead during that time.",
      ],
      skills: ["A specific duration and feeling", "An alternative activity described"],
    },
    {
      question: "How did you feel returning to it afterward?",
      answer: "A bit worried.",
      pushes: [
        "Tell us exactly what worried you.",
        "Now tell us what helped you feel more confident again.",
      ],
      skills: ["A specific worry named", "A confidence-building detail added"],
    },
    {
      question: "What did you learn from that experience?",
      answer: "To be more careful.",
      pushes: [
        "Give us a specific example of being more careful now.",
        "Now tell us if it's changed how you prepare.",
      ],
      skills: ["A concrete example given", "A change-in-habit detail"],
    },
    {
      question: "How would you support a friend going through something similar?",
      answer: "I'd tell them it's okay.",
      pushes: [
        "Tell us more specifically what advice you'd give.",
        "Now tell us why that advice would matter, based on your experience.",
      ],
      skills: ["A specific piece of advice", "A reason tied to your own experience"],
    },
  ],
  recall: [
    { question: "Tell me about a time you got injured or hit a setback in a sport or activity.", fromPrompt: 0 },
    { question: "How long did it take to recover?", fromPrompt: 3 },
    { question: "What did you learn from that experience?", fromPrompt: 6 },
  ],
};

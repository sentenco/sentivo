// ASCEND, Talking About Your Health Track, Lesson 3: "Building a New Habit"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-health-3",
  code: "L3",
  mechanic: "push",
  title: "Building a New Habit",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a health habit you're trying to build.",
      answer: "Exercising more.",
      pushes: [
        "Tell us exactly what kind of exercise.",
        "Now tell us how often you're aiming for.",
      ],
      skills: ["A specific activity named", "A frequency goal added"],
    },
    {
      question: "Why did you decide to start it?",
      answer: "I felt like I should.",
      pushes: [
        "Give us a more specific, real reason.",
        "Now tell us if something particular triggered the decision.",
      ],
      skills: ["A genuine specific reason", "A triggering event or moment"],
    },
    {
      question: "How has it been going so far?",
      answer: "Okay, I guess.",
      pushes: [
        "Give us a more precise word than okay.",
        "Now tell us how consistent you've actually been.",
      ],
      skills: ["A precise evaluative word", "A specific consistency detail"],
    },
    {
      question: "What's the hardest part about keeping it up?",
      answer: "Finding time.",
      pushes: [
        "Tell us specifically when it's hardest to find time.",
        "Now tell us what usually gets in the way.",
      ],
      skills: ["A specific time detail", "A specific obstacle named"],
    },
    {
      question: "Have you had any setbacks?",
      answer: "A couple.",
      pushes: [
        "Tell us about one specific setback.",
        "Now tell us how you got back on track after it.",
      ],
      skills: ["A specific setback described", "A recovery detail added"],
    },
    {
      question: "What's helped you stay motivated?",
      answer: "Just pushing myself.",
      pushes: [
        "Give us a more specific motivator, like a person, goal, or reward.",
        "Now tell us how effective that's actually been.",
      ],
      skills: ["A specific motivator named", "An honest evaluation added"],
    },
    {
      question: "How do you think this habit will affect you long-term?",
      answer: "It'll help.",
      pushes: [
        "Give us a specific benefit you're hoping for.",
        "Now put it in a sentence with 'If I keep this up...'",
      ],
      skills: ["A specific expected benefit", "A conditional structure used"],
    },
    {
      question: "Is there another habit you'd like to build after this one?",
      answer: "Maybe something else.",
      pushes: [
        "Tell us what it is, exactly.",
        "Now tell us why you're waiting until after this one.",
      ],
      skills: ["A specific habit named", "A reason for the sequencing"],
    },
  ],
  recall: [
    { question: "Tell me about a health habit you're trying to build.", fromPrompt: 0 },
    { question: "What's the hardest part about keeping it up?", fromPrompt: 3 },
    { question: "Have you had any setbacks?", fromPrompt: 4 },
  ],
};

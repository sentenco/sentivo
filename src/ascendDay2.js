// ASCEND, Talking About Your Day Track, Lesson 2: "A School Morning"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-day-2",
  code: "L2",
  mechanic: "push",
  title: "A School Morning",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your morning today.",
      answer: "It was busy.",
      pushes: [
        "Busy is pretty vague. Give us a more specific word for how the morning felt.",
        "Now add what made it that way.",
      ],
      skills: ["A specific adjective in place of busy", "A cause or reason added"],
    },
    {
      question: "What time did you wake up?",
      answer: "I woke up late.",
      pushes: [
        "Give us the actual time, not just late.",
        "Now tell us why, using 'because' in the same sentence.",
      ],
      skills: ["A specific time detail", "A because-clause added"],
    },
    {
      question: "What did you do to get ready?",
      answer: "I got dressed and left.",
      pushes: [
        "Walk us through it in more steps, not just two verbs.",
        "Now add 'first... then...' to show the order.",
      ],
      skills: ["More specific steps described", "Sequencing words (first/then) used"],
    },
    {
      question: "Did you have breakfast?",
      answer: "Yes, I ate something.",
      pushes: [
        "Something is vague. Tell us exactly what.",
        "Now tell us where or with who.",
      ],
      skills: ["A specific food named", "A place or company detail added"],
    },
    {
      question: "How did you get to school?",
      answer: "I walked.",
      pushes: [
        "Add how long it took.",
        "Now tell us how it felt, and why.",
      ],
      skills: ["A duration detail added", "A feeling with a reason attached"],
    },
    {
      question: "Was anything different about this morning?",
      answer: "Not really.",
      pushes: [
        "Push yourself to find one small thing that was different.",
        "Now explain why that small thing mattered or didn't.",
      ],
      skills: ["A specific detail instead of 'not really'", "A brief explanation added"],
    },
    {
      question: "What would make your mornings easier?",
      answer: "Waking up earlier.",
      pushes: [
        "Turn that into a full sentence with 'If I...'",
        "Now add what would happen next, as a result.",
      ],
      skills: ["A conditional structure (If I...)", "A result clause added"],
    },
    {
      question: "Is there a morning routine you'd like to start?",
      answer: "Maybe exercise.",
      pushes: [
        "Say more about what kind, and when.",
        "Now tell us why you haven't started yet.",
      ],
      skills: ["A specific plan detail", "A reason or obstacle named"],
    },
  ],
  recall: [
    { question: "Tell me about your morning today.", fromPrompt: 0 },
    { question: "What time did you wake up?", fromPrompt: 1 },
    { question: "Did you have breakfast?", fromPrompt: 3 },
  ],
};

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
      leveledAnswer: "It was really hectic because I overslept and had to rush to get everything ready.",
      pushes: [
        "Busy is pretty vague. Give us a more specific word for how the morning felt.",
        "Now add what made it that way.",
      ],
      skills: ["A specific adjective in place of busy", "A cause or reason added"],
    },
    {
      question: "What time did you wake up?",
      answer: "I woke up late.",
      leveledAnswer: "I woke up at eight because my alarm didn't go off.",
      pushes: [
        "Give us the actual time, not just late.",
        "Now tell us why, using 'because' in the same sentence.",
      ],
      skills: ["A specific time detail", "A because-clause added"],
    },
    {
      question: "What did you do to get ready?",
      answer: "I got dressed and left.",
      leveledAnswer: "First I brushed my teeth and got dressed, then I grabbed my bag and rushed out the door.",
      pushes: [
        "Walk us through it in more steps, not just two verbs.",
        "Now add 'first... then...' to show the order.",
      ],
      skills: ["More specific steps described", "Sequencing words (first/then) used"],
    },
    {
      question: "Did you have breakfast?",
      answer: "Yes, I ate something.",
      leveledAnswer: "Yes, I ate some toast with my little sister before we left for school.",
      pushes: [
        "Something is vague. Tell us exactly what.",
        "Now tell us where or with who.",
      ],
      skills: ["A specific food named", "A place or company detail added"],
    },
    {
      question: "How did you get to school?",
      answer: "I walked.",
      leveledAnswer: "I walked for about fifteen minutes, and it felt nice because the weather was cool.",
      pushes: [
        "Add how long it took.",
        "Now tell us how it felt, and why.",
      ],
      skills: ["A duration detail added", "A feeling with a reason attached"],
    },
    {
      question: "Was anything different about this morning?",
      answer: "Not really.",
      leveledAnswer: "Actually, I had toast instead of cereal, but it didn't really change how my morning felt.",
      pushes: [
        "Push yourself to find one small thing that was different.",
        "Now explain why that small thing mattered or didn't.",
      ],
      skills: ["A specific detail instead of 'not really'", "A brief explanation added"],
    },
    {
      question: "What would make your mornings easier?",
      answer: "Waking up earlier.",
      leveledAnswer: "If I woke up earlier, I wouldn't have to rush and I could eat breakfast calmly.",
      pushes: [
        "Turn that into a full sentence with 'If I...'",
        "Now add what would happen next, as a result.",
      ],
      skills: ["A conditional structure (If I...)", "A result clause added"],
    },
    {
      question: "Is there a morning routine you'd like to start?",
      answer: "Maybe exercise.",
      leveledAnswer: "Maybe some light stretching before school, but I haven't started because I always wake up too late.",
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

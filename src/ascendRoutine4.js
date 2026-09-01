// ASCEND, Talking About Your Day Track (Adults), Lesson 4: "A Day That Didn't Go to Plan"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-routine-4",
  code: "L4",
  mechanic: "push",
  title: "A Day That Didn't Go to Plan",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a day that didn't go the way you planned.",
      answer: "It was a mess.",
      pushes: [
        "A mess is very general. Tell us the actual problem.",
        "Now tell us when this happened.",
      ],
      skills: ["A specific problem named", "A time detail added"],
    },
    {
      question: "What was your original plan for that day?",
      answer: "Just a normal day.",
      pushes: [
        "Tell us specifically what you had planned.",
        "Now tell us at what point it started going wrong.",
      ],
      skills: ["A specific plan detail", "A moment-it-changed detail"],
    },
    {
      question: "What was the first thing that went wrong?",
      answer: "Something came up.",
      pushes: [
        "Tell us exactly what came up.",
        "Now tell us why it threw off your plan.",
      ],
      skills: ["A specific event named", "A reason it disrupted things"],
    },
    {
      question: "How did you react in that moment?",
      answer: "I got stressed.",
      pushes: [
        "Give us a more precise feeling word than stressed.",
        "Now tell us what your first instinct was.",
      ],
      skills: ["A precise feeling word", "A specific first reaction described"],
    },
    {
      question: "What did you do to adjust your plans?",
      answer: "I rearranged some things.",
      pushes: [
        "Tell us exactly what you rearranged.",
        "Now tell us if it worked out in the end.",
      ],
      skills: ["A specific adjustment described", "An outcome stated"],
    },
    {
      question: "Did anyone else get affected by the change of plans?",
      answer: "A couple of people.",
      pushes: [
        "Tell us who, and how they were affected.",
        "Now tell us how you handled that with them.",
      ],
      skills: ["Specific people and detail", "A communication detail added"],
    },
    {
      question: "Looking back, what would you do differently?",
      answer: "Build in more flexibility.",
      pushes: [
        "Give us one exact thing you'd change.",
        "Now use 'If I had...' to talk about that day.",
      ],
      skills: ["A specific change named", "A past conditional (If I had...) attempted"],
    },
    {
      question: "How do you usually handle unexpected changes now?",
      answer: "I try to stay flexible.",
      pushes: [
        "Describe exactly what staying flexible looks like for you.",
        "Now tell us if it's gotten easier over time.",
      ],
      skills: ["A concrete description of the strategy", "A change-over-time detail"],
    },
  ],
  recall: [
    { question: "Tell me about a day that didn't go the way you planned.", fromPrompt: 0 },
    { question: "What was the first thing that went wrong?", fromPrompt: 2 },
    { question: "What did you do to adjust your plans?", fromPrompt: 4 },
  ],
};

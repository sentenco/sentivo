// ASCEND, Talking About a School Day Track, Lesson 4: "A School Trip or Event"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-school-4",
  code: "L4",
  mechanic: "push",
  title: "A School Trip or Event",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a school trip or event you remember.",
      answer: "It was fun.",
      pushes: [
        "Fun is very general. Give us a stronger word for how it was.",
        "Now tell us exactly what the event was.",
      ],
      skills: ["A stronger adjective in place of fun", "A specific event named"],
    },
    {
      question: "What did you do before it, to get ready?",
      answer: "We planned a bit.",
      pushes: [
        "Tell us one specific thing you had to prepare.",
        "Now tell us how you felt while preparing, and why.",
      ],
      skills: ["A specific preparation detail", "A feeling with a reason attached"],
    },
    {
      question: "What happened during the event?",
      answer: "A lot of things.",
      pushes: [
        "Pick one specific moment and describe it.",
        "Now tell us who was involved in that moment.",
      ],
      skills: ["One specific moment described", "A people detail added"],
    },
    {
      question: "Was there a moment that stood out to you?",
      answer: "Yes, one part.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us why it stood out, specifically.",
      ],
      skills: ["A more detailed description", "A specific reason it mattered"],
    },
    {
      question: "How did you feel by the end of the day?",
      answer: "Tired but happy.",
      pushes: [
        "Give us more precise words than tired and happy.",
        "Now tell us which feeling was stronger, and why.",
      ],
      skills: ["Precise feeling words", "A comparison between the two feelings"],
    },
    {
      question: "Did you make any new friends or connections?",
      answer: "Maybe a little.",
      pushes: [
        "Tell us who, specifically, if anyone.",
        "Now tell us what brought you together.",
      ],
      skills: ["A specific person or group named", "A shared-context detail added"],
    },
    {
      question: "Would you want to do something like it again?",
      answer: "Yes, probably.",
      pushes: [
        "Tell us why, with a real reason.",
        "Now tell us what you'd want to do differently next time.",
      ],
      skills: ["A genuine reason added", "A specific change suggested"],
    },
    {
      question: "Is there an upcoming school event you're looking forward to?",
      answer: "Maybe one.",
      pushes: [
        "Tell us what it is, exactly.",
        "Now tell us why you're looking forward to it.",
      ],
      skills: ["A specific event named", "A reason for the anticipation"],
    },
  ],
  recall: [
    { question: "Tell me about a school trip or event you remember.", fromPrompt: 0 },
    { question: "Was there a moment that stood out to you?", fromPrompt: 3 },
    { question: "How did you feel by the end of the day?", fromPrompt: 4 },
  ],
};

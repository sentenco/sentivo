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
      leveledAnswer: "It was really memorable because it was our class trip to the science museum.",
      pushes: [
        "Fun is very general. Give us a stronger word for how it was.",
        "Now tell us exactly what the event was.",
      ],
      skills: ["A stronger adjective in place of fun", "A specific event named"],
    },
    {
      question: "What did you do before it, to get ready?",
      answer: "We planned a bit.",
      leveledAnswer: "We packed our bags and checked the schedule, and I felt excited because I love visiting new places.",
      pushes: [
        "Tell us one specific thing you had to prepare.",
        "Now tell us how you felt while preparing, and why.",
      ],
      skills: ["A specific preparation detail", "A feeling with a reason attached"],
    },
    {
      question: "What happened during the event?",
      answer: "A lot of things.",
      leveledAnswer: "One moment that stands out is when we tried the science experiments together with our lab partners.",
      pushes: [
        "Pick one specific moment and describe it.",
        "Now tell us who was involved in that moment.",
      ],
      skills: ["One specific moment described", "A people detail added"],
    },
    {
      question: "Was there a moment that stood out to you?",
      answer: "Yes, one part.",
      leveledAnswer: "Yes, the moment we saw the planetarium show stood out because the whole room went dark and the stars looked so real.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us why it stood out, specifically.",
      ],
      skills: ["A more detailed description", "A specific reason it mattered"],
    },
    {
      question: "How did you feel by the end of the day?",
      answer: "Tired but happy.",
      leveledAnswer: "I felt exhausted but really thrilled, and the excitement was stronger because the day was so much fun.",
      pushes: [
        "Give us more precise words than tired and happy.",
        "Now tell us which feeling was stronger, and why.",
      ],
      skills: ["Precise feeling words", "A comparison between the two feelings"],
    },
    {
      question: "Did you make any new friends or connections?",
      answer: "Maybe a little.",
      leveledAnswer: "Yes, I got closer to a classmate named Jake because we were paired up for the same activities.",
      pushes: [
        "Tell us who, specifically, if anyone.",
        "Now tell us what brought you together.",
      ],
      skills: ["A specific person or group named", "A shared-context detail added"],
    },
    {
      question: "Would you want to do something like it again?",
      answer: "Yes, probably.",
      leveledAnswer: "Yes, because it was such a great way to learn outside the classroom, though next time I'd want more time to explore.",
      pushes: [
        "Tell us why, with a real reason.",
        "Now tell us what you'd want to do differently next time.",
      ],
      skills: ["A genuine reason added", "A specific change suggested"],
    },
    {
      question: "Is there an upcoming school event you're looking forward to?",
      answer: "Maybe one.",
      leveledAnswer: "There's a sports day coming up, and I'm looking forward to it because my class is really competitive.",
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

// ASCEND, Talking About Sports & Activities Track, Lesson 3: "Trying a New Activity"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-sports-3",
  code: "L3",
  mechanic: "push",
  title: "Trying a New Activity",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a new activity you've tried recently.",
      answer: "It was different.",
      leveledAnswer: "It was really different because I tried rock climbing for the first time, which is nothing like the team sports I usually play.",
      pushes: [
        "Different is vague. Tell us exactly what the activity was.",
        "Now tell us what made it different from what you usually do.",
      ],
      skills: ["A specific activity named", "A comparison to your usual activities"],
    },
    {
      question: "Why did you decide to try it?",
      answer: "Just curious.",
      leveledAnswer: "I got curious after watching some videos online, and my cousin actually encouraged me to give it a try.",
      pushes: [
        "Tell us what specifically made you curious.",
        "Now tell us who, if anyone, encouraged you.",
      ],
      skills: ["A specific reason added", "A people detail added"],
    },
    {
      question: "How did your first attempt go?",
      answer: "Not great.",
      leveledAnswer: "I kept losing my grip and falling, which honestly felt pretty discouraging.",
      pushes: [
        "Tell us exactly what didn't go well.",
        "Now tell us how that felt.",
      ],
      skills: ["A specific detail about the difficulty", "A feeling word added"],
    },
    {
      question: "What was the hardest part about learning it?",
      answer: "Everything, kind of.",
      leveledAnswer: "The hardest part was actually trusting my footing, because I was so scared of falling.",
      pushes: [
        "Push yourself to name one specific hardest part.",
        "Now tell us why that part was hardest.",
      ],
      skills: ["A specific detail instead of 'everything'", "A reason added"],
    },
    {
      question: "Did you get any help or advice?",
      answer: "Yes, a bit.",
      leveledAnswer: "Yes, an instructor showed me how to plan my moves ahead of time, and it really helped me climb more smoothly.",
      pushes: [
        "Tell us who helped, and what they told you.",
        "Now tell us if that advice actually helped.",
      ],
      skills: ["A specific person and advice detail", "An evaluation of the advice"],
    },
    {
      question: "How do you feel about it now?",
      answer: "Better, I think.",
      leveledAnswer: "I can actually finish an easy route without stopping now, which is a big difference from when I could barely climb a few steps.",
      pushes: [
        "Give us a specific example that shows you've improved.",
        "Now compare how you feel now to how you felt at the start.",
      ],
      skills: ["A concrete example given", "A before/after comparison"],
    },
    {
      question: "Would you recommend it to a friend?",
      answer: "Maybe.",
      leveledAnswer: "Yes, I'd recommend it to my friend Leo because he loves a challenge and I think he'd really enjoy it.",
      pushes: [
        "Give us a real reason, either way.",
        "Now tell us who specifically you'd recommend it to, and why.",
      ],
      skills: ["A genuine reason added", "A specific audience named"],
    },
    {
      question: "Is there another new activity you'd like to try?",
      answer: "Maybe something else.",
      leveledAnswer: "I'd like to try surfing sometime, but I haven't tried it yet because there isn't a beach nearby.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us what's stopping you from trying it yet.",
      ],
      skills: ["A specific activity named", "An honest obstacle named"],
    },
  ],
  recall: [
    { question: "Tell me about a new activity you've tried recently.", fromPrompt: 0 },
    { question: "How did your first attempt go?", fromPrompt: 2 },
    { question: "How do you feel about it now?", fromPrompt: 5 },
  ],
};

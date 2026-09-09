// ASCEND, Talking About Your Day Track (Adults), Lesson 3: "A Day Off"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-routine-3",
  code: "L3",
  mechanic: "push",
  title: "A Day Off",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a recent day off.",
      answer: "It was relaxing.",
      leveledAnswer: "It was really peaceful because I spent the whole morning reading in bed.",
      pushes: [
        "Relaxing is fine, but give us a more specific word.",
        "Now tell us exactly what you did with the time.",
      ],
      skills: ["A more specific adjective", "A specific activity named"],
    },
    {
      question: "Did you plan the day, or was it spontaneous?",
      answer: "A bit of both.",
      leveledAnswer: "I planned breakfast with a friend, but the rest just happened naturally, and I actually preferred that part.",
      pushes: [
        "Tell us which parts were planned and which weren't.",
        "Now tell us which you preferred.",
      ],
      skills: ["A specific detail about the split", "A preference stated"],
    },
    {
      question: "Did you spend it alone or with others?",
      answer: "Mostly alone.",
      leveledAnswer: "I chose to spend it alone because I needed some quiet time, though I do enjoy company too.",
      pushes: [
        "Tell us why you chose that, or if it just happened that way.",
        "Now tell us how it compared to spending time with others.",
      ],
      skills: ["A reason or context added", "A comparison made"],
    },
    {
      question: "Did you get any errands done?",
      answer: "A couple.",
      leveledAnswer: "I picked up groceries and dropped off some dry cleaning, but I don't love mixing chores with a day off.",
      pushes: [
        "Name at least one specific errand.",
        "Now tell us how you felt about mixing errands with a day off.",
      ],
      skills: ["A specific errand named", "An opinion added"],
    },
    {
      question: "What was the best part of the day?",
      answer: "Just relaxing.",
      leveledAnswer: "The best part was lying in the hammock with a coffee, because I finally felt completely calm.",
      pushes: [
        "Give us a specific moment, not just 'relaxing'.",
        "Now tell us why that moment stood out.",
      ],
      skills: ["A specific moment described", "A reason it stood out"],
    },
    {
      question: "Did you feel guilty about not being productive?",
      answer: "A little.",
      leveledAnswer: "I felt a little guilty because I always feel like I should be doing something useful, but I reminded myself that rest counts too.",
      pushes: [
        "Tell us where that feeling comes from.",
        "Now tell us how you talked yourself out of it, if you did.",
      ],
      skills: ["A specific source of the feeling", "A self-talk detail added"],
    },
    {
      question: "How did you feel returning to work the next day?",
      answer: "Fine, mostly.",
      leveledAnswer: "I felt refreshed, and the day off really did help me focus better.",
      pushes: [
        "Give us a more precise word than fine.",
        "Now tell us if the day off actually helped.",
      ],
      skills: ["A precise feeling word", "An evaluation of the day off's effect"],
    },
    {
      question: "What would your ideal day off look like?",
      answer: "Something relaxing.",
      leveledAnswer: "I'd wake up late, go for a walk, and then read all afternoon, but work usually gets in the way.",
      pushes: [
        "Describe it in specific steps.",
        "Now tell us what's stopping you from having a day like that.",
      ],
      skills: ["A specific, detailed plan", "An honest obstacle named"],
    },
  ],
  recall: [
    { question: "Tell me about a recent day off.", fromPrompt: 0 },
    { question: "What was the best part of the day?", fromPrompt: 4 },
    { question: "How did you feel returning to work the next day?", fromPrompt: 6 },
  ],
};

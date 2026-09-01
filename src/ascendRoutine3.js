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
      pushes: [
        "Relaxing is fine, but give us a more specific word.",
        "Now tell us exactly what you did with the time.",
      ],
      skills: ["A more specific adjective", "A specific activity named"],
    },
    {
      question: "Did you plan the day, or was it spontaneous?",
      answer: "A bit of both.",
      pushes: [
        "Tell us which parts were planned and which weren't.",
        "Now tell us which you preferred.",
      ],
      skills: ["A specific detail about the split", "A preference stated"],
    },
    {
      question: "Did you spend it alone or with others?",
      answer: "Mostly alone.",
      pushes: [
        "Tell us why you chose that, or if it just happened that way.",
        "Now tell us how it compared to spending time with others.",
      ],
      skills: ["A reason or context added", "A comparison made"],
    },
    {
      question: "Did you get any errands done?",
      answer: "A couple.",
      pushes: [
        "Name at least one specific errand.",
        "Now tell us how you felt about mixing errands with a day off.",
      ],
      skills: ["A specific errand named", "An opinion added"],
    },
    {
      question: "What was the best part of the day?",
      answer: "Just relaxing.",
      pushes: [
        "Give us a specific moment, not just 'relaxing'.",
        "Now tell us why that moment stood out.",
      ],
      skills: ["A specific moment described", "A reason it stood out"],
    },
    {
      question: "Did you feel guilty about not being productive?",
      answer: "A little.",
      pushes: [
        "Tell us where that feeling comes from.",
        "Now tell us how you talked yourself out of it, if you did.",
      ],
      skills: ["A specific source of the feeling", "A self-talk detail added"],
    },
    {
      question: "How did you feel returning to work the next day?",
      answer: "Fine, mostly.",
      pushes: [
        "Give us a more precise word than fine.",
        "Now tell us if the day off actually helped.",
      ],
      skills: ["A precise feeling word", "An evaluation of the day off's effect"],
    },
    {
      question: "What would your ideal day off look like?",
      answer: "Something relaxing.",
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

// ASCEND, Talking About Money Track, Lesson 4: "Talking About a Big Purchase"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-money-4",
  code: "L4",
  mechanic: "push",
  title: "Talking About a Big Purchase",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a big purchase you've made or are considering.",
      answer: "Something expensive.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us roughly how much it costs.",
      ],
      skills: ["A specific item named", "A cost detail added"],
    },
    {
      question: "What made you consider it in the first place?",
      answer: "I needed it.",
      pushes: [
        "Give us a fuller explanation of why.",
        "Now tell us how long you'd been thinking about it.",
      ],
      skills: ["A fuller reason given", "A duration detail added"],
    },
    {
      question: "How much research did you do before deciding?",
      answer: "Some.",
      pushes: [
        "Tell us specifically what you looked into.",
        "Now tell us where you found the most useful information.",
      ],
      skills: ["A specific research detail", "A source named"],
    },
    {
      question: "Did you compare it with other options?",
      answer: "A little.",
      pushes: [
        "Tell us what the alternatives were.",
        "Now tell us what made you choose this one over the others.",
      ],
      skills: ["Specific alternatives named", "A reason for the final choice"],
    },
    {
      question: "Did anyone influence your decision?",
      answer: "Maybe a bit.",
      pushes: [
        "Tell us who, and how they influenced you.",
        "Now tell us if you're glad you listened to them.",
      ],
      skills: ["A specific person and influence", "A reflection on the advice"],
    },
    {
      question: "How did you feel right after making the decision?",
      answer: "Good, mostly.",
      pushes: [
        "Give us a more precise feeling word.",
        "Now tell us if any doubt crept in afterward.",
      ],
      skills: ["A precise feeling word", "A doubt or second-guessing detail"],
    },
    {
      question: "Was it worth it, in the end?",
      answer: "I think so.",
      pushes: [
        "Give us one specific reason it was, or wasn't, worth it.",
        "Now tell us if you'd make the same decision again.",
      ],
      skills: ["A specific supporting reason", "A hedged conclusion added"],
    },
    {
      question: "What would you tell a friend considering something similar?",
      answer: "Think it through.",
      pushes: [
        "Give us more specific advice than that.",
        "Now tell us what you'd warn them about, based on your experience.",
      ],
      skills: ["Specific, concrete advice", "A warning tied to your own experience"],
    },
  ],
  recall: [
    { question: "Tell me about a big purchase you've made or are considering.", fromPrompt: 0 },
    { question: "Did you compare it with other options?", fromPrompt: 3 },
    { question: "Was it worth it, in the end?", fromPrompt: 6 },
  ],
};

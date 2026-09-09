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
      leveledAnswer: "I'm considering buying a used car, and it costs around three hundred thousand pesos.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us roughly how much it costs.",
      ],
      skills: ["A specific item named", "A cost detail added"],
    },
    {
      question: "What made you consider it in the first place?",
      answer: "I needed it.",
      leveledAnswer: "My commute has gotten really long and unreliable by bus, and I've been thinking about it for a few months now.",
      pushes: [
        "Give us a fuller explanation of why.",
        "Now tell us how long you'd been thinking about it.",
      ],
      skills: ["A fuller reason given", "A duration detail added"],
    },
    {
      question: "How much research did you do before deciding?",
      answer: "Some.",
      leveledAnswer: "I compared fuel efficiency and maintenance costs online, and a car forum was actually the most useful source.",
      pushes: [
        "Tell us specifically what you looked into.",
        "Now tell us where you found the most useful information.",
      ],
      skills: ["A specific research detail", "A source named"],
    },
    {
      question: "Did you compare it with other options?",
      answer: "A little.",
      leveledAnswer: "I also looked at a slightly newer model, but I chose this one because it had much lower mileage.",
      pushes: [
        "Tell us what the alternatives were.",
        "Now tell us what made you choose this one over the others.",
      ],
      skills: ["Specific alternatives named", "A reason for the final choice"],
    },
    {
      question: "Did anyone influence your decision?",
      answer: "Maybe a bit.",
      leveledAnswer: "My brother, who works as a mechanic, convinced me to check the engine carefully first, and I'm really glad I listened to him.",
      pushes: [
        "Tell us who, and how they influenced you.",
        "Now tell us if you're glad you listened to them.",
      ],
      skills: ["A specific person and influence", "A reflection on the advice"],
    },
    {
      question: "How did you feel right after making the decision?",
      answer: "Good, mostly.",
      leveledAnswer: "I felt really relieved, though a bit of doubt crept in later when I thought about the monthly payments.",
      pushes: [
        "Give us a more precise feeling word.",
        "Now tell us if any doubt crept in afterward.",
      ],
      skills: ["A precise feeling word", "A doubt or second-guessing detail"],
    },
    {
      question: "Was it worth it, in the end?",
      answer: "I think so.",
      leveledAnswer: "It's saved me so much time on my commute that I'd definitely make the same decision again.",
      pushes: [
        "Give us one specific reason it was, or wasn't, worth it.",
        "Now tell us if you'd make the same decision again.",
      ],
      skills: ["A specific supporting reason", "A hedged conclusion added"],
    },
    {
      question: "What would you tell a friend considering something similar?",
      answer: "Think it through.",
      leveledAnswer: "I'd tell them to get the engine checked by a mechanic first, because I almost skipped that step myself.",
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

// ASCEND, Talking About Home Track, Lesson 3: "A Problem at Home"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-home-3",
  code: "L3",
  mechanic: "push",
  title: "A Problem at Home",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a problem you've had at home recently.",
      answer: "Something broke.",
      leveledAnswer: "The kitchen faucet broke, and I noticed it just last weekend.",
      pushes: [
        "Tell us exactly what it was.",
        "Now tell us when you noticed it.",
      ],
      skills: ["A specific detail named", "A time detail added"],
    },
    {
      question: "How did you first notice the problem?",
      answer: "I just saw it.",
      leveledAnswer: "I saw water dripping steadily under the sink, and I felt a little panicked at first.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us how you felt when you noticed.",
      ],
      skills: ["A more detailed description", "A feeling word added"],
    },
    {
      question: "What did you do first?",
      answer: "I tried to fix it myself.",
      leveledAnswer: "I tightened the pipe connection with a wrench, but it didn't actually solve the problem.",
      pushes: [
        "Tell us exactly what you tried.",
        "Now tell us if it worked.",
      ],
      skills: ["A specific action described", "An outcome stated"],
    },
    {
      question: "Did you need to call someone for help?",
      answer: "Yes, eventually.",
      leveledAnswer: "I ended up calling a plumber, and he fixed it within an hour.",
      pushes: [
        "Tell us who you called, exactly.",
        "Now tell us how that went.",
      ],
      skills: ["A specific person or service named", "An outcome detail added"],
    },
    {
      question: "How long did it take to get sorted?",
      answer: "A while.",
      leveledAnswer: "It took about two days to get someone to come, and the constant dripping the whole time was really annoying.",
      pushes: [
        "Give us a rough timeframe.",
        "Now tell us what was frustrating about the wait, if anything.",
      ],
      skills: ["A specific timeframe", "A frustration detail added"],
    },
    {
      question: "Did it cost much to fix?",
      answer: "A bit.",
      leveledAnswer: "It cost around fifteen hundred pesos, and honestly I felt it was a fair price for how quickly it was fixed.",
      pushes: [
        "Give us a rough amount.",
        "Now tell us how you felt about that cost.",
      ],
      skills: ["A specific cost estimate", "A feeling or opinion added"],
    },
    {
      question: "Has it happened again since?",
      answer: "No, not yet.",
      leveledAnswer: "I've started checking the pipes every few months now, so I feel fairly confident it won't happen again.",
      pushes: [
        "Tell us what you've done to prevent it from happening again.",
        "Now tell us if you feel confident it won't happen again.",
      ],
      skills: ["A specific preventive action", "A confidence-level detail"],
    },
    {
      question: "What did you learn from dealing with it?",
      answer: "To act faster next time.",
      leveledAnswer: "Next time I notice a small leak, I'll call a plumber right away instead of waiting, and now I check under the sink regularly.",
      pushes: [
        "Give us a specific example of acting faster.",
        "Now tell us if this changed how you check things around your home.",
      ],
      skills: ["A concrete example given", "A change-in-habit detail"],
    },
  ],
  recall: [
    { question: "Tell me about a problem you've had at home recently.", fromPrompt: 0 },
    { question: "Did you need to call someone for help?", fromPrompt: 3 },
    { question: "How long did it take to get sorted?", fromPrompt: 4 },
  ],
};

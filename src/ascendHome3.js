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
      pushes: [
        "Tell us exactly what it was.",
        "Now tell us when you noticed it.",
      ],
      skills: ["A specific detail named", "A time detail added"],
    },
    {
      question: "How did you first notice the problem?",
      answer: "I just saw it.",
      pushes: [
        "Describe that moment in more detail.",
        "Now tell us how you felt when you noticed.",
      ],
      skills: ["A more detailed description", "A feeling word added"],
    },
    {
      question: "What did you do first?",
      answer: "I tried to fix it myself.",
      pushes: [
        "Tell us exactly what you tried.",
        "Now tell us if it worked.",
      ],
      skills: ["A specific action described", "An outcome stated"],
    },
    {
      question: "Did you need to call someone for help?",
      answer: "Yes, eventually.",
      pushes: [
        "Tell us who you called, exactly.",
        "Now tell us how that went.",
      ],
      skills: ["A specific person or service named", "An outcome detail added"],
    },
    {
      question: "How long did it take to get sorted?",
      answer: "A while.",
      pushes: [
        "Give us a rough timeframe.",
        "Now tell us what was frustrating about the wait, if anything.",
      ],
      skills: ["A specific timeframe", "A frustration detail added"],
    },
    {
      question: "Did it cost much to fix?",
      answer: "A bit.",
      pushes: [
        "Give us a rough amount.",
        "Now tell us how you felt about that cost.",
      ],
      skills: ["A specific cost estimate", "A feeling or opinion added"],
    },
    {
      question: "Has it happened again since?",
      answer: "No, not yet.",
      pushes: [
        "Tell us what you've done to prevent it from happening again.",
        "Now tell us if you feel confident it won't happen again.",
      ],
      skills: ["A specific preventive action", "A confidence-level detail"],
    },
    {
      question: "What did you learn from dealing with it?",
      answer: "To act faster next time.",
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

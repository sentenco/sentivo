// ASCEND, Talking About Your Health Track, Lesson 2: "A Doctor's Visit"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-health-2",
  code: "L2",
  mechanic: "push",
  title: "A Doctor's Visit",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a recent doctor's visit.",
      answer: "It was fine.",
      pushes: [
        "Fine is very general. Tell us what it was for.",
        "Now tell us when it happened.",
      ],
      skills: ["A specific reason for the visit", "A time detail added"],
    },
    {
      question: "What symptoms or concerns did you have?",
      answer: "I felt off.",
      pushes: [
        "Give us a more specific description of the symptom.",
        "Now tell us how long you'd had it.",
      ],
      skills: ["A specific symptom described", "A duration detail added"],
    },
    {
      question: "How did you describe it to the doctor?",
      answer: "I just explained it.",
      pushes: [
        "Tell us roughly what you actually said.",
        "Now tell us if it was easy to explain, and why or why not.",
      ],
      skills: ["A specific detail about what was said", "An added reflection"],
    },
    {
      question: "What did the doctor say?",
      answer: "Not much serious.",
      pushes: [
        "Tell us more specifically what they said.",
        "Now tell us how you felt hearing it.",
      ],
      skills: ["A specific detail from the doctor", "A feeling word added"],
    },
    {
      question: "Did you understand all the advice or instructions?",
      answer: "Mostly.",
      pushes: [
        "Tell us if there was a part you had to ask about again.",
        "Now tell us how you made sure you understood.",
      ],
      skills: ["A specific detail about a clarifying moment", "A strategy detail added"],
    },
    {
      question: "Did you follow the advice afterward?",
      answer: "Mostly, yes.",
      pushes: [
        "Tell us specifically what you did or didn't follow.",
        "Now tell us why.",
      ],
      skills: ["A specific detail named", "A reason added"],
    },
    {
      question: "How do you feel now compared to before the visit?",
      answer: "Better.",
      pushes: [
        "Give us a more precise word than better.",
        "Now tell us what specifically improved.",
      ],
      skills: ["A precise comparative word", "A specific improvement named"],
    },
    {
      question: "Is there anything about visiting doctors that makes you nervous?",
      answer: "A little.",
      pushes: [
        "Tell us exactly what makes you nervous.",
        "Now tell us how you cope with that.",
      ],
      skills: ["A specific detail named", "A coping strategy described"],
    },
  ],
  recall: [
    { question: "Tell me about a recent doctor's visit.", fromPrompt: 0 },
    { question: "What did the doctor say?", fromPrompt: 3 },
    { question: "How do you feel now compared to before the visit?", fromPrompt: 6 },
  ],
};

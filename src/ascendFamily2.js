// ASCEND, Talking About Your Family Track, Lesson 2: "A Family Celebration"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-family-2",
  code: "L2",
  mechanic: "push",
  title: "A Family Celebration",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a recent family celebration.",
      answer: "It was nice.",
      pushes: [
        "Nice is very general. Give us a stronger word.",
        "Now tell us exactly what you were celebrating.",
      ],
      skills: ["A stronger adjective than nice", "A specific occasion named"],
    },
    {
      question: "Who was there?",
      answer: "Most of my family.",
      pushes: [
        "Name at least two specific people.",
        "Now tell us if anyone was missing, and how that felt.",
      ],
      skills: ["Specific people named", "A missing-person detail with a feeling"],
    },
    {
      question: "What did you do to celebrate?",
      answer: "We ate and talked.",
      pushes: [
        "Give us a more specific detail about the food or activity.",
        "Now tell us what you talked about.",
      ],
      skills: ["A specific detail (food/activity)", "A topic-of-conversation detail"],
    },
    {
      question: "Was there a tradition involved?",
      answer: "Yes, a small one.",
      pushes: [
        "Describe the tradition exactly.",
        "Now tell us how long your family has done it.",
      ],
      skills: ["A specific tradition described", "A duration or history detail"],
    },
    {
      question: "Was there a funny or memorable moment?",
      answer: "Yes, one thing.",
      pushes: [
        "Tell us exactly what happened.",
        "Now tell us who was involved and how they reacted.",
      ],
      skills: ["A specific moment described", "A reaction detail added"],
    },
    {
      question: "How did you feel by the end of it?",
      answer: "Good.",
      pushes: [
        "Give us a more precise feeling word than good.",
        "Now tell us what specifically caused that feeling.",
      ],
      skills: ["A precise feeling word", "A cause added"],
    },
    {
      question: "Is there anything you'd want to do differently next time?",
      answer: "Not really.",
      pushes: [
        "Push yourself to find one small thing you'd change.",
        "Now explain why that change would matter.",
      ],
      skills: ["A specific detail instead of 'not really'", "A reason added"],
    },
    {
      question: "Is there a celebration coming up you're looking forward to?",
      answer: "Maybe one.",
      pushes: [
        "Tell us what it is, exactly.",
        "Now tell us why you're looking forward to it.",
      ],
      skills: ["A specific occasion named", "A reason for the anticipation"],
    },
  ],
  recall: [
    { question: "Tell me about a recent family celebration.", fromPrompt: 0 },
    { question: "Who was there?", fromPrompt: 1 },
    { question: "Was there a funny or memorable moment?", fromPrompt: 4 },
  ],
};

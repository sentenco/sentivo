// ASCEND, Talking About Home Track, Lesson 4: "Life in the Neighborhood"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-home-4",
  code: "L4",
  mechanic: "push",
  title: "Life in the Neighborhood",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me what your neighborhood is like.",
      answer: "It's nice.",
      pushes: [
        "Nice is very general. Give us a stronger word.",
        "Now tell us one specific thing that makes it that way.",
      ],
      skills: ["A stronger adjective than nice", "A specific supporting detail"],
    },
    {
      question: "How long have you lived there?",
      answer: "A few years.",
      pushes: [
        "Give us a more exact number.",
        "Now tell us how it's changed since you moved in.",
      ],
      skills: ["A specific number given", "A change-over-time detail"],
    },
    {
      question: "Do you know your neighbors well?",
      answer: "Some of them.",
      pushes: [
        "Tell us about one specific neighbor.",
        "Now tell us how you usually interact with them.",
      ],
      skills: ["A specific person described", "A specific interaction detail"],
    },
    {
      question: "Has anything changed in the neighborhood recently?",
      answer: "A little.",
      pushes: [
        "Tell us exactly what's changed.",
        "Now tell us how you feel about that change.",
      ],
      skills: ["A specific change named", "An opinion on the change"],
    },
    {
      question: "Is there a local place you go to often?",
      answer: "Yes, one place.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us why you like going there.",
      ],
      skills: ["A specific place named", "A reason for going there"],
    },
    {
      question: "Is there anything about the area you'd like to see improved?",
      answer: "A few things.",
      pushes: [
        "Give us one specific thing.",
        "Now tell us why it would make a real difference.",
      ],
      skills: ["A specific improvement named", "A reason for its impact"],
    },
    {
      question: "Do you feel like part of the community there?",
      answer: "Somewhat.",
      pushes: [
        "Tell us specifically what makes you feel connected, or not.",
        "Now tell us if you'd like that to change.",
      ],
      skills: ["A specific detail about connection", "A hedged opinion on change"],
    },
    {
      question: "Could you see yourself living somewhere else in the future?",
      answer: "Maybe.",
      pushes: [
        "Give us a real reason, either way.",
        "Now tell us what kind of place you'd consider instead.",
      ],
      skills: ["A genuine reason added", "A specific alternative described"],
    },
  ],
  recall: [
    { question: "Tell me what your neighborhood is like.", fromPrompt: 0 },
    { question: "Has anything changed in the neighborhood recently?", fromPrompt: 3 },
    { question: "Do you feel like part of the community there?", fromPrompt: 6 },
  ],
};

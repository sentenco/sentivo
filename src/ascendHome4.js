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
      leveledAnswer: "It's actually really peaceful, mostly because it's a quiet residential street with very little traffic.",
      pushes: [
        "Nice is very general. Give us a stronger word.",
        "Now tell us one specific thing that makes it that way.",
      ],
      skills: ["A stronger adjective than nice", "A specific supporting detail"],
    },
    {
      question: "How long have you lived there?",
      answer: "A few years.",
      leveledAnswer: "I've lived there for about five years, and a lot more shops have opened up since I first moved in.",
      pushes: [
        "Give us a more exact number.",
        "Now tell us how it's changed since you moved in.",
      ],
      skills: ["A specific number given", "A change-over-time detail"],
    },
    {
      question: "Do you know your neighbors well?",
      answer: "Some of them.",
      leveledAnswer: "I know the couple next door pretty well, and we usually chat whenever we're both out watering the plants.",
      pushes: [
        "Tell us about one specific neighbor.",
        "Now tell us how you usually interact with them.",
      ],
      skills: ["A specific person described", "A specific interaction detail"],
    },
    {
      question: "Has anything changed in the neighborhood recently?",
      answer: "A little.",
      leveledAnswer: "A new grocery store opened just around the corner, and I'm really happy about it because it saves me a lot of time.",
      pushes: [
        "Tell us exactly what's changed.",
        "Now tell us how you feel about that change.",
      ],
      skills: ["A specific change named", "An opinion on the change"],
    },
    {
      question: "Is there a local place you go to often?",
      answer: "Yes, one place.",
      leveledAnswer: "There's a small café down the street I go to often, because the owner always remembers my order.",
      pushes: [
        "Tell us exactly what it is.",
        "Now tell us why you like going there.",
      ],
      skills: ["A specific place named", "A reason for going there"],
    },
    {
      question: "Is there anything about the area you'd like to see improved?",
      answer: "A few things.",
      leveledAnswer: "I'd like to see better street lighting, because it would make walking home at night feel much safer.",
      pushes: [
        "Give us one specific thing.",
        "Now tell us why it would make a real difference.",
      ],
      skills: ["A specific improvement named", "A reason for its impact"],
    },
    {
      question: "Do you feel like part of the community there?",
      answer: "Somewhat.",
      leveledAnswer: "I feel connected because of the neighbors I've gotten to know, though I'd like to get more involved in local events.",
      pushes: [
        "Tell us specifically what makes you feel connected, or not.",
        "Now tell us if you'd like that to change.",
      ],
      skills: ["A specific detail about connection", "A hedged opinion on change"],
    },
    {
      question: "Could you see yourself living somewhere else in the future?",
      answer: "Maybe.",
      leveledAnswer: "I might move eventually if my family grows, and I'd probably consider somewhere a bit quieter outside the city.",
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

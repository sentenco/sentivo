// ASCEND, Talking About a School Day Track, Lesson 2: "A Group Project"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-school-2",
  code: "L2",
  mechanic: "push",
  title: "A Group Project",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a group project you've worked on.",
      answer: "It was okay.",
      leveledAnswer: "It was actually pretty interesting because we made a presentation about climate change.",
      pushes: [
        "Okay doesn't tell us much. Give us a more specific opinion word.",
        "Now tell us what the project was actually about.",
      ],
      skills: ["A stronger opinion adjective", "A topic detail added"],
    },
    {
      question: "Who was in your group?",
      answer: "Some classmates.",
      leveledAnswer: "There were four of us, and I already knew two of them, but I worked most closely with my friend Anna.",
      pushes: [
        "Tell us how many, and if you already knew them.",
        "Now tell us who you worked with most closely.",
      ],
      skills: ["A specific number or detail", "A closest-collaborator detail added"],
    },
    {
      question: "What was your role in the group?",
      answer: "I did my part.",
      leveledAnswer: "I was in charge of making the slides because I'm good with design.",
      pushes: [
        "Tell us exactly what your part was.",
        "Now tell us why you were given that role.",
      ],
      skills: ["A specific task named", "A reason for the role added"],
    },
    {
      question: "Did everyone contribute equally?",
      answer: "Not really.",
      leveledAnswer: "Not really, because one person barely did any work, and it made me feel a bit frustrated.",
      pushes: [
        "Tell us specifically what was unequal about it.",
        "Now tell us how that made you feel.",
      ],
      skills: ["A specific detail about the imbalance", "A feeling word added"],
    },
    {
      question: "Was there any disagreement in the group?",
      answer: "A little bit.",
      leveledAnswer: "We disagreed a little about which topic to choose, but we talked it out and agreed pretty quickly.",
      pushes: [
        "Tell us what the disagreement was about.",
        "Now tell us how it got resolved, or if it didn't.",
      ],
      skills: ["A specific topic of disagreement", "A resolution or outcome stated"],
    },
    {
      question: "How did the project turn out?",
      answer: "Pretty good.",
      leveledAnswer: "It actually turned out really well, and our teacher said our presentation was one of the best.",
      pushes: [
        "Give us a more precise result word than 'pretty good'.",
        "Now tell us what feedback you got, if any.",
      ],
      skills: ["A more precise result word", "A feedback detail added"],
    },
    {
      question: "What would you do differently next time?",
      answer: "Communicate more.",
      leveledAnswer: "Next time I will communicate more clearly about who's doing which part.",
      pushes: [
        "Tell us exactly what you'd communicate about.",
        "Now put it into a full sentence with 'Next time I will...'",
      ],
      skills: ["A specific communication detail", "A clear future-plan structure"],
    },
    {
      question: "How do you feel about group work in general?",
      answer: "It's fine.",
      leveledAnswer: "Honestly, I like group work because you get to hear different ideas.",
      pushes: [
        "Give us a real opinion, not just fine.",
        "Now give one reason to support that opinion.",
      ],
      skills: ["A genuine opinion stated", "A supporting reason added"],
    },
  ],
  recall: [
    { question: "Tell me about a group project you've worked on.", fromPrompt: 0 },
    { question: "What was your role in the group?", fromPrompt: 2 },
    { question: "Was there any disagreement in the group?", fromPrompt: 4 },
  ],
};

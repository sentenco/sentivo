// ASCEND, Talking About Your Day Track (Adults), Lesson 2: "A Busy Week at Work"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-routine-2",
  code: "L2",
  mechanic: "push",
  title: "A Busy Week at Work",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a busy week you've had at work recently.",
      answer: "It was busy.",
      leveledAnswer: "It was completely overwhelming because we had three deadlines in the same week.",
      pushes: [
        "Busy is very general. Give us a stronger word.",
        "Now tell us what made it that way, specifically.",
      ],
      skills: ["A stronger adjective than busy", "A specific cause added"],
    },
    {
      question: "What kept you the busiest?",
      answer: "A project.",
      leveledAnswer: "A big client project kept me busy, and I was in charge of putting the final report together.",
      pushes: [
        "Tell us more about that project, exactly.",
        "Now tell us what your part in it was.",
      ],
      skills: ["A specific detail about the project", "A role detail added"],
    },
    {
      question: "How did you manage your time that week?",
      answer: "I just got through it.",
      leveledAnswer: "I made a list every morning and worked through it in order, and it actually helped me stay on track.",
      pushes: [
        "Tell us one real thing you did to manage it.",
        "Now tell us if that strategy actually worked.",
      ],
      skills: ["A specific strategy named", "An evaluation of the strategy"],
    },
    {
      question: "Did anything not go according to plan?",
      answer: "A few things.",
      leveledAnswer: "One of my coworkers was out sick, so I had to cover her tasks on top of my own.",
      pushes: [
        "Give us one specific thing that went wrong.",
        "Now tell us how you handled it.",
      ],
      skills: ["A specific detail named", "A response described"],
    },
    {
      question: "How did you feel by the end of the week?",
      answer: "Exhausted.",
      leveledAnswer: "I felt completely worn out, so I went to bed early on Friday to recover.",
      pushes: [
        "Give us a more precise word than exhausted, or add detail to it.",
        "Now tell us what you did to recover.",
      ],
      skills: ["A precise feeling word or added detail", "A recovery action described"],
    },
    {
      question: "Did the workload affect anything outside of work?",
      answer: "A little.",
      leveledAnswer: "It affected my sleep because I was checking emails late at night, and I don't think it was worth it.",
      pushes: [
        "Tell us specifically what it affected.",
        "Now tell us how you feel about that trade-off.",
      ],
      skills: ["A specific area named", "An opinion on the trade-off"],
    },
    {
      question: "What would you do differently next time it gets that busy?",
      answer: "Plan better.",
      leveledAnswer: "Next time I will ask for help earlier instead of trying to do everything myself.",
      pushes: [
        "Give us one exact thing you'd change.",
        "Now put it into a sentence with 'Next time I will...'",
      ],
      skills: ["A specific change named", "A clear future-plan structure"],
    },
    {
      question: "How do you usually recharge after a demanding week?",
      answer: "I rest.",
      leveledAnswer: "I usually just sleep in and cook a proper meal for myself, but it's not always enough.",
      pushes: [
        "Tell us exactly what resting looks like for you.",
        "Now tell us if it's usually enough.",
      ],
      skills: ["A concrete description of the strategy", "An honest evaluation added"],
    },
  ],
  recall: [
    { question: "Tell me about a busy week you've had at work recently.", fromPrompt: 0 },
    { question: "Did anything not go according to plan?", fromPrompt: 3 },
    { question: "How did you feel by the end of the week?", fromPrompt: 4 },
  ],
};

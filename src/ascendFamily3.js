// ASCEND, Talking About Your Family Track, Lesson 3: "Helping Out at Home"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-family-3",
  code: "L3",
  mechanic: "push",
  title: "Helping Out at Home",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "What do you usually do to help out at home?",
      answer: "A few things.",
      leveledAnswer: "I usually wash the dishes and take out the trash, and I do both almost every day.",
      pushes: [
        "Name at least two specific tasks.",
        "Now tell us how often you do them.",
      ],
      skills: ["Specific tasks named", "A frequency detail added"],
    },
    {
      question: "Who assigns the chores in your family?",
      answer: "My parents, mostly.",
      leveledAnswer: "My parents usually divide the chores based on our schedules, and I think it's pretty fair overall.",
      pushes: [
        "Tell us how it actually gets decided, exactly.",
        "Now tell us if you think it's fair.",
      ],
      skills: ["A specific detail about the process", "An opinion on fairness"],
    },
    {
      question: "Which chore do you like least?",
      answer: "Cleaning.",
      leveledAnswer: "Cleaning the bathroom, specifically, because I really hate the smell of the cleaning products.",
      pushes: [
        "Cleaning what, exactly? Be specific.",
        "Now tell us why you don't like it.",
      ],
      skills: ["A specific chore named", "A reason added"],
    },
    {
      question: "Do you and your family share responsibilities equally?",
      answer: "Not always.",
      leveledAnswer: "Not always, because my brother does fewer chores than me, and honestly it makes me feel a bit annoyed.",
      pushes: [
        "Tell us specifically what feels unequal.",
        "Now tell us how that makes you feel.",
      ],
      skills: ["A specific detail about the imbalance", "A feeling word added"],
    },
    {
      question: "Has helping out at home ever caused an argument?",
      answer: "A little.",
      leveledAnswer: "It was mostly about who forgot to do the dishes, but we resolved it after my mom made us take turns.",
      pushes: [
        "Tell us what the argument was actually about.",
        "Now tell us how it was resolved, or if it wasn't.",
      ],
      skills: ["A specific topic named", "A resolution or outcome stated"],
    },
    {
      question: "What's one chore you've gotten better at?",
      answer: "Cooking, maybe.",
      leveledAnswer: "I can actually cook simple pasta dishes now, and I learned it by watching my mom in the kitchen.",
      pushes: [
        "Tell us exactly what you can make now.",
        "Now tell us how you learned it.",
      ],
      skills: ["A specific skill detail", "A learning-process detail"],
    },
    {
      question: "How would you like responsibilities to change at home?",
      answer: "A fairer split.",
      leveledAnswer: "I think we should rotate chores weekly so everyone does an equal share of the harder tasks.",
      pushes: [
        "Describe exactly what a fairer split would look like.",
        "Now put it into a sentence with 'I think we should...'",
      ],
      skills: ["A specific proposal described", "An opinion structure used"],
    },
    {
      question: "Do you think helping at home has taught you anything?",
      answer: "Maybe responsibility.",
      leveledAnswer: "Doing my own laundry has taught me responsibility, and it's helped me stay more organized at school too.",
      pushes: [
        "Give us a specific example that shows this.",
        "Now tell us how that might help you outside the house.",
      ],
      skills: ["A specific example given", "A transfer to another context"],
    },
  ],
  recall: [
    { question: "What do you usually do to help out at home?", fromPrompt: 0 },
    { question: "Which chore do you like least?", fromPrompt: 2 },
    { question: "Has helping out at home ever caused an argument?", fromPrompt: 4 },
  ],
};

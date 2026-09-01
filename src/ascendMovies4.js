// ASCEND, Talking About a Show or Movie Track, Lesson 4: "A Movie That Surprised You"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-movies-4",
  code: "L4",
  mechanic: "push",
  title: "A Movie That Surprised You",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a movie that surprised you.",
      answer: "It was different than I expected.",
      pushes: [
        "Tell us exactly what movie it was.",
        "Now tell us what you expected before watching it.",
      ],
      skills: ["A specific movie named", "A clear expectation stated"],
    },
    {
      question: "What did you expect it to be like?",
      answer: "Something more normal.",
      pushes: [
        "Give us a specific detail of what you expected.",
        "Now tell us where that expectation came from.",
      ],
      skills: ["A specific detail about the expectation", "A source for the expectation"],
    },
    {
      question: "What was actually different about it?",
      answer: "The ending, mostly.",
      pushes: [
        "Describe that difference in more detail, without spoiling too much.",
        "Now tell us how it made you feel in the moment.",
      ],
      skills: ["A more detailed description", "A feeling word added"],
    },
    {
      question: "Did you like the surprise, or not?",
      answer: "I liked it.",
      pushes: [
        "Give us a real reason for that opinion.",
        "Now tell us if a friend would agree with you.",
      ],
      skills: ["A supporting reason added", "A perspective comparison added"],
    },
    {
      question: "Did the surprise change how you think about the whole movie?",
      answer: "A bit.",
      pushes: [
        "Tell us exactly how your opinion of it shifted.",
        "Now compare your first reaction to how you feel now.",
      ],
      skills: ["A specific shift described", "A before/after comparison"],
    },
    {
      question: "Would you watch it again, knowing what happens?",
      answer: "Maybe.",
      pushes: [
        "Give us a real reason, either way.",
        "Now tell us what you'd focus on differently on a rewatch.",
      ],
      skills: ["A genuine reason added", "A specific rewatch detail"],
    },
    {
      question: "Would you recommend it to someone who doesn't like surprises?",
      answer: "Probably not.",
      pushes: [
        "Tell us exactly why, or why not.",
        "Now tell us what kind of person you would recommend it to.",
      ],
      skills: ["A clear reason given", "A specific audience described"],
    },
    {
      question: "Is there another movie you've heard has a big twist?",
      answer: "Maybe one.",
      pushes: [
        "Tell us which one, if you know.",
        "Now tell us why you're curious or hesitant about watching it.",
      ],
      skills: ["A specific title or detail", "A reason for curiosity or hesitation"],
    },
  ],
  recall: [
    { question: "Tell me about a movie that surprised you.", fromPrompt: 0 },
    { question: "What was actually different about it?", fromPrompt: 2 },
    { question: "Did the surprise change how you think about the whole movie?", fromPrompt: 4 },
  ],
};

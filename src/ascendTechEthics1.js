// ASCEND (Push mechanic), Technology & Ethics Track, Lesson 1: "Technology & Right and Wrong"
// B2 -> C1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-tech-ethics-1",
  code: "L1",
  mechanic: "push",
  title: "Technology & Right and Wrong",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a piece of technology you couldn't imagine living without.",
      answer: "My phone, obviously.",
      pushes: [
        "'Obviously' skips the actual explanation. Tell us specifically why.",
        "Now add what you'd do differently if you didn't have it.",
      ],
      skills: ["A specific reason added instead of obviously", "A hypothetical consequence added"],
    },
    {
      question: "What's your opinion on privacy online, do you think we have enough of it?",
      answer: "No, not really, companies know too much.",
      pushes: [
        "'Know too much' is vague. Name a specific example of what they know or do.",
        "Now hedge this a bit, is this true for everyone equally?",
      ],
      skills: ["A specific example named", "A sophisticated hedge added"],
    },
    {
      question: "Do you think it's ethical for companies to use personal data to target ads?",
      answer: "Not really, it feels wrong.",
      pushes: [
        "'Feels wrong' is too vague for this context. Give us the actual ethical issue.",
        "Now consider the other side, is there any argument for it?",
      ],
      skills: ["A precise ethical concept named (consent / exploitation)", "A counter-argument or other perspective added"],
    },
    {
      question: "Describe a time technology made something easier, but maybe also caused a problem.",
      answer: "It saved time but I got kind of dependent on it.",
      pushes: [
        "'Dependent' is a start. Give us a specific example of that dependence.",
        "Now reflect on whether the trade-off was worth it.",
      ],
      skills: ["A specific example added", "A reflective, evaluative clause added"],
    },
    {
      question: "What do you think about AI being used to create art or writing?",
      answer: "It's interesting, but kind of unfair to artists.",
      pushes: [
        "'Unfair' is a start, name the specific concern more precisely.",
        "Now balance it, is there anything positive about it too?",
      ],
      skills: ["A more precise ethical or professional concern named", "A balanced, contrastive structure added"],
    },
    {
      question: "Do you think there should be limits on what technology companies are allowed to do?",
      answer: "Yeah, probably, I think so.",
      pushes: [
        "Good instinct. Now commit to a clearer stance and support it with a reason.",
        "Now name a specific kind of limit.",
      ],
      skills: ["A clearer, supported stance", "A specific named limit or policy"],
    },
    {
      question: "What responsibility do you think users have when it comes to using technology ethically?",
      answer: "They should think before they post or share things.",
      pushes: [
        "That's a start, but be more specific. What exactly should they think about?",
        "Now connect it to a consequence if they don't.",
      ],
      skills: ["A specific consideration named", "A consequence connected"],
    },
    {
      question: "How do you think technology will change the biggest ethical questions we face in ten years?",
      answer: "It'll probably bring up a lot of new problems.",
      pushes: [
        "'A lot of new problems' says nothing concrete. Predict something specific.",
        "Now put it all together in one fluent, precise sentence.",
      ],
      skills: ["A specific, concrete prediction instead of vague new problems", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a piece of technology you couldn't imagine living without.", fromPrompt: 0 },
    { question: "What's your opinion on privacy online, do you think we have enough of it?", fromPrompt: 1 },
    { question: "Do you think it's ethical for companies to use personal data to target ads?", fromPrompt: 2 },
  ],
};

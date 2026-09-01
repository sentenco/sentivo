// ASCEND (Push mechanic), Education & Future Ambitions Track, Lesson 1: "Thinking About the Future"
// B2 -> C1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-future-1",
  code: "L1",
  mechanic: "push",
  title: "Thinking About the Future",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about what you want to do after you finish school.",
      answer: "I'm not sure yet, maybe college.",
      pushes: [
        "That's honest, but let's get more specific. What field or area interests you?",
        "Now tell us why that area interests you.",
      ],
      skills: ["A specific field or area named", "A reason for the interest added"],
    },
    {
      question: "What's your opinion on the education system you're part of?",
      answer: "It's okay, but kind of stressful.",
      pushes: [
        "'Stressful' is a start, give us a more precise word or reason.",
        "Now balance that with something positive about the system.",
      ],
      skills: ["A more precise word or specific reason", "A balanced, contrastive structure added"],
    },
    {
      question: "Do you feel pressure about your future, and where does it come from?",
      answer: "Yeah, mostly from my parents, I guess.",
      pushes: [
        "Good instinct. Now commit to that with a clearer stance, not just 'I guess'.",
        "Now name another source of that pressure, not just one.",
      ],
      skills: ["A confident, committed stance replacing I guess", "A second source of pressure named"],
    },
    {
      question: "Describe a moment that shaped what you want to do in the future.",
      answer: "Something happened and it made me think differently.",
      pushes: [
        "'Something' is too vague. What exactly happened?",
        "Now explain specifically how your thinking changed.",
      ],
      skills: ["A specific event described instead of something", "A specific change in thinking explained"],
    },
    {
      question: "Do you think grades are the best way to measure someone's potential?",
      answer: "No, not really.",
      pushes: [
        "Good start, but too brief. Give us a specific reason.",
        "Now suggest what could measure potential better.",
      ],
      skills: ["A specific reason added", "An alternative suggestion added"],
    },
    {
      question: "How important is it to know exactly what you want to do at your age?",
      answer: "Not that important, I think.",
      pushes: [
        "Good instinct. Now support that with a specific reason or example.",
        "Now qualify it, is that true for everyone, or does it depend?",
      ],
      skills: ["A specific reason or example added", "A qualifying, nuanced clause added"],
    },
    {
      question: "What's one skill you think will matter most in your future, beyond school subjects?",
      answer: "Being able to talk to people, maybe.",
      pushes: [
        "'Talk to people' is a bit vague for this context. Name the precise skill.",
        "Now explain why that skill will matter.",
      ],
      skills: ["A precise named skill instead of vague talk to people", "A reasoned justification added"],
    },
    {
      question: "Where do you see yourself in ten years?",
      answer: "I don't really know, somewhere good I hope.",
      pushes: [
        "That's honest, but let's practice speculating with more precision. Try 'I might...' or 'I'd like to think...'",
        "Now add one concrete detail to that picture.",
      ],
      skills: ["A sophisticated hedging or speculating structure", "A concrete detail added"],
    },
  ],
  recall: [
    { question: "Tell me about what you want to do after you finish school.", fromPrompt: 0 },
    { question: "What's your opinion on the education system you're part of?", fromPrompt: 1 },
    { question: "Do you feel pressure about your future, and where does it come from?", fromPrompt: 2 },
  ],
};

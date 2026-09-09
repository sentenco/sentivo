// ASCEND, Talking About Your Health Track, Lesson 4: "Stress and Work-Life Balance"
// A2 -> B1, Adults. Push mechanic.

export default {
  id: "ascend-health-4",
  code: "L4",
  mechanic: "push",
  title: "Stress and Work-Life Balance",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your stress levels these days.",
      answer: "Pretty high.",
      leveledAnswer: "It's honestly been really high lately, mostly because of the workload at the office.",
      pushes: [
        "Give us a more specific word or scale.",
        "Now tell us what's causing most of it.",
      ],
      skills: ["A more precise description", "A specific cause named"],
    },
    {
      question: "What's the biggest source of stress in your life right now?",
      answer: "Work, mostly.",
      leveledAnswer: "It's mainly the constant deadlines, and it's been like this for the past couple of months.",
      pushes: [
        "Tell us exactly what part of work.",
        "Now tell us how long it's been like this.",
      ],
      skills: ["A specific detail about the source", "A duration detail added"],
    },
    {
      question: "How does that stress show up in your day-to-day life?",
      answer: "I feel tired a lot.",
      leveledAnswer: "I get frequent headaches and find it hard to concentrate, and I've noticed I'm more short-tempered with my family too.",
      pushes: [
        "Tell us more specifically how it affects you, physically or mentally.",
        "Now tell us if it affects the people around you too.",
      ],
      skills: ["A more specific effect described", "A ripple-effect detail added"],
    },
    {
      question: "What do you currently do to manage it?",
      answer: "Not much, honestly.",
      leveledAnswer: "I try to take short walks during my lunch break, but honestly it doesn't help all that much.",
      pushes: [
        "Push yourself to name one thing you do try.",
        "Now tell us how well it actually works.",
      ],
      skills: ["A specific coping attempt named", "An honest evaluation added"],
    },
    {
      question: "How do you separate work from personal time?",
      answer: "I try to, but it's hard.",
      leveledAnswer: "It's hard because I keep checking emails at night, so I'd like to start turning off notifications after six.",
      pushes: [
        "Tell us specifically what makes it hard.",
        "Now tell us one boundary you'd like to set.",
      ],
      skills: ["A specific obstacle named", "A concrete boundary proposed"],
    },
    {
      question: "Has anyone noticed you seem stressed?",
      answer: "Maybe once or twice.",
      leveledAnswer: "My partner mentioned I seemed on edge last week, and it made me realize I should slow down.",
      pushes: [
        "Tell us who, and what they said or noticed.",
        "Now tell us how that made you feel.",
      ],
      skills: ["A specific person and detail", "A feeling word added"],
    },
    {
      question: "What would a healthier balance look like for you?",
      answer: "More free time.",
      leveledAnswer: "It would mean leaving work on time and actually having weekends to myself, so a first step would be saying no to extra tasks.",
      pushes: [
        "Describe it in specific terms, not just 'more free time'.",
        "Now tell us one real step toward that.",
      ],
      skills: ["A specific, detailed picture", "A concrete first step named"],
    },
    {
      question: "What's stopping you from making that change now?",
      answer: "It's complicated.",
      leveledAnswer: "I worry that saying no will make me look less committed, but I think I could change that with practice.",
      pushes: [
        "Push yourself to name one specific reason.",
        "Now tell us if you think it's something you can change.",
      ],
      skills: ["A specific reason named", "A hedged opinion on changeability"],
    },
  ],
  recall: [
    { question: "Tell me about your stress levels these days.", fromPrompt: 0 },
    { question: "What do you currently do to manage it?", fromPrompt: 3 },
    { question: "What would a healthier balance look like for you?", fromPrompt: 6 },
  ],
};

// ASCEND, Talking About a School Day Track, Lesson 3: "A Test or Exam"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-school-3",
  code: "L3",
  mechanic: "push",
  title: "A Test or Exam",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a recent test or exam.",
      answer: "It was hard.",
      leveledAnswer: "It was a really tough science test because the questions covered topics we barely reviewed.",
      pushes: [
        "Hard is very general. Tell us what subject it was, exactly.",
        "Now tell us what specifically made it hard.",
      ],
      skills: ["A subject detail added", "A specific reason for the difficulty"],
    },
    {
      question: "How did you prepare for it?",
      answer: "I studied.",
      leveledAnswer: "I made flashcards and reviewed my notes for about two hours the night before.",
      pushes: [
        "Studied how, exactly? Give us a method.",
        "Now tell us how long you spent preparing.",
      ],
      skills: ["A specific study method named", "A duration detail added"],
    },
    {
      question: "How did you feel right before it?",
      answer: "Nervous.",
      leveledAnswer: "I felt really anxious, and my stomach was in knots right before it started.",
      pushes: [
        "Give us a more precise feeling word than nervous.",
        "Now tell us how your body felt because of it.",
      ],
      skills: ["A precise feeling word", "A physical detail added"],
    },
    {
      question: "Was there a question or part that surprised you?",
      answer: "Yes, one part.",
      leveledAnswer: "Yes, there was a question about a topic we never covered, so I just made my best guess and moved on.",
      pushes: [
        "Tell us exactly what that part was about.",
        "Now tell us how you handled it in the moment.",
      ],
      skills: ["A specific detail about the surprise", "A description of your reaction"],
    },
    {
      question: "How do you think you did?",
      answer: "Not bad, I think.",
      leveledAnswer: "I think I got around eighty percent, because I was confident on most of the questions.",
      pushes: [
        "Give us a clearer prediction, using a percentage or grade guess.",
        "Now tell us what makes you think that.",
      ],
      skills: ["A specific prediction (grade/percentage)", "A reason for the prediction"],
    },
    {
      question: "How did you feel after it was over?",
      answer: "Relieved.",
      leveledAnswer: "I felt so relieved that I went straight home and watched a movie, which was a huge change from how anxious I felt before.",
      pushes: [
        "Tell us what you did right after to celebrate or relax.",
        "Now compare that feeling to how you felt before.",
      ],
      skills: ["A specific after-action described", "A before/after comparison"],
    },
    {
      question: "What would you do differently next time you prepare?",
      answer: "Start earlier.",
      leveledAnswer: "Next time I will start studying at least a week earlier instead of just the night before.",
      pushes: [
        "Tell us how much earlier, exactly.",
        "Now turn it into a plan with 'Next time I will...'",
      ],
      skills: ["A specific timing detail", "A clear future-plan structure"],
    },
    {
      question: "How do you usually deal with exam stress?",
      answer: "I try not to think about it.",
      leveledAnswer: "I usually take a few deep breaths and go for a short walk, and it actually helps me calm down.",
      pushes: [
        "Tell us one real thing you do, not just avoidance.",
        "Now tell us if it actually works for you.",
      ],
      skills: ["A genuine coping strategy named", "An honest evaluation added"],
    },
  ],
  recall: [
    { question: "Tell me about a recent test or exam.", fromPrompt: 0 },
    { question: "How did you prepare for it?", fromPrompt: 1 },
    { question: "How do you think you did?", fromPrompt: 4 },
  ],
};

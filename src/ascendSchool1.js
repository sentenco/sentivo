// ASCEND (Push mechanic), School Life Track, Lesson 1: "Talking About a School Day"
// A2 -> B1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-school-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About a School Day",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about your school day today.",
      answer: "It was fine.",
      leveledAnswer: "It was actually pretty exciting because we had a surprise quiz that I did really well on.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific adjective than fine, good, or okay.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific adjective in place of fine/good/okay", "A reason or detail added to the sentence"],
    },
    {
      question: "What class did you have today?",
      answer: "I had math.",
      leveledAnswer: "We covered a new topic in math, and I actually enjoyed it more than I expected.",
      pushes: [
        "'Had' is a pretty plain verb. Try a stronger one that shows more about the class.",
        "Now add what you thought or felt about it.",
      ],
      skills: ["A stronger verb or added detail than had", "An opinion or feeling added"],
    },
    {
      question: "How was the class?",
      answer: "It was boring.",
      leveledAnswer: "It was really dull because the teacher just read from the textbook the whole time.",
      pushes: [
        "Instead of boring, fun, or hard, give us the exact word for how it felt.",
        "Now give one reason why it felt that way.",
      ],
      skills: ["A precise feeling/opinion word, not boring/fun/hard", "A supporting reason added"],
    },
    {
      question: "Did you talk to any friends today?",
      answer: "Yeah, we talked.",
      leveledAnswer: "Yeah, we talked about the weekend during lunch break.",
      pushes: [
        "'Talked' doesn't tell us much. What did you actually talk about?",
        "Now tell us where or when this happened.",
      ],
      skills: ["A specific topic instead of a vague verb", "A place or time detail added"],
    },
    {
      question: "Did you have any homework?",
      answer: "A little.",
      leveledAnswer: "Just a little math homework, and I don't mind it because it's pretty easy.",
      pushes: [
        "Give us more detail. What subject, and how much?",
        "Now tell us how you feel about it.",
      ],
      skills: ["A specific subject or amount detail added", "A feeling or opinion added"],
    },
    {
      question: "What was the best part of your day?",
      answer: "Lunch, I guess.",
      leveledAnswer: "Lunch was the best part because I got to sit with my friends and relax.",
      pushes: [
        "Good start. Now tell us why that was the best part.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are you planning to do after school tomorrow?",
      answer: "I don't know yet.",
      leveledAnswer: "I'm thinking about going to the mall with some friends after school.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do it with, or who with.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "An activity or companion detail added"],
    },
    {
      question: "Is there anything at school you're looking forward to?",
      answer: "Maybe the school trip.",
      leveledAnswer: "I'm really looking forward to the school trip because we finally get to visit the museum.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me about your school day today.", fromPrompt: 0 },
    { question: "What class did you have today?", fromPrompt: 1 },
    { question: "How was the class?", fromPrompt: 2 },
  ],
};

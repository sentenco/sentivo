// ASCEND (Push mechanic), Health & Wellness Track, Lesson 1: "Talking About Your Health"
// A2 -> B1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-health-1",
  code: "L1",
  mechanic: "push",
  title: "Talking About Your Health",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me how you're feeling today, health-wise.",
      answer: "I feel fine.",
      leveledAnswer: "I actually feel pretty energetic today because I slept really well last night.",
      pushes: [
        "That word isn't doing much work. Say it again with a more specific word than fine, good, or okay.",
        "Now add a reason or detail to make it a fuller sentence.",
      ],
      skills: ["A specific word in place of fine/good/okay", "A reason or detail added to the sentence"],
    },
    {
      question: "What do you usually do to stay healthy?",
      answer: "I try to eat well and exercise.",
      leveledAnswer: "I try to eat more vegetables and go jogging three times a week.",
      pushes: [
        "That's clear, but plain. Tell us more, like what kind of exercise or food.",
        "Now add how often you do this.",
      ],
      skills: ["A specific detail about food or exercise added", "A frequency detail added"],
    },
    {
      question: "How did you sleep last night?",
      answer: "It was okay.",
      leveledAnswer: "It was actually pretty restless because I kept waking up from the noise outside.",
      pushes: [
        "'Okay' doesn't tell us much. Give us a stronger opinion word.",
        "Now give one reason why you slept that way.",
      ],
      skills: ["A stronger opinion adjective in place of okay/fine", "A supporting reason added"],
    },
    {
      question: "Tell me about a time you were sick or not feeling well.",
      answer: "I felt bad and stayed home.",
      leveledAnswer: "I had a bad headache and a sore throat, and it lasted for about three days.",
      pushes: [
        "'Bad' is vague. What were the actual symptoms?",
        "Now tell us how long it lasted.",
      ],
      skills: ["A specific symptom instead of a vague adjective", "A duration detail added"],
    },
    {
      question: "Do you go to the doctor regularly?",
      answer: "Sometimes, when I need to.",
      leveledAnswer: "I usually go about once a year for a check-up, but honestly I get a bit nervous about it.",
      pushes: [
        "Give us more. How often, roughly?",
        "Now add how you feel about going to the doctor.",
      ],
      skills: ["A more specific frequency detail added", "An opinion or feeling added"],
    },
    {
      question: "Is there a health habit you'd like to improve?",
      answer: "Maybe sleeping more, I guess.",
      leveledAnswer: "I'd like to sleep more because I've been feeling foggy during the day.",
      pushes: [
        "Good start. Now tell us why that matters to you.",
        "Can you make that sound more confident, not just 'I guess'?",
      ],
      skills: ["A reason added", "A more confident structure, dropping the hedge 'I guess' where it isn't needed"],
    },
    {
      question: "What are your plans for staying healthy next month?",
      answer: "I don't know yet.",
      leveledAnswer: "I'm thinking about joining a gym near my house next month.",
      pushes: [
        "That's honest, but let's practice speculating. Try 'I might...' or 'I'm thinking about...'",
        "Now add what you'd do specifically.",
      ],
      skills: ["A hedging/speculating structure (might / thinking about)", "An activity detail added"],
    },
    {
      question: "Is there anything about your health you're looking forward to improving?",
      answer: "Maybe having more energy.",
      leveledAnswer: "I'm really looking forward to having more energy because I want to keep up with my kids.",
      pushes: [
        "Tell us why that matters to you. Give a reason.",
        "Now put it all together in one full, natural-sounding sentence.",
      ],
      skills: ["A personal reason added", "Combined into one fluent sentence"],
    },
  ],
  recall: [
    { question: "Tell me how you're feeling today, health-wise.", fromPrompt: 0 },
    { question: "What do you usually do to stay healthy?", fromPrompt: 1 },
    { question: "How did you sleep last night?", fromPrompt: 2 },
  ],
};

// ASCEND, Life Online Track, Lesson 2: "Comparison Culture Online"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-social-2",
  code: "L2",
  mechanic: "push",
  title: "Comparison Culture Online",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think social media makes people compare themselves to others more?",
      answer: "Yeah, definitely.",
      pushes: [
        "Definitely is a strong word with no support. Give us a specific mechanism, like what on the app actually drives that comparison.",
        "Now hedge it slightly, since this isn't true for everyone. Try 'for a lot of people...'",
      ],
      skills: ["A specific mechanism identified", "A hedged, less absolute claim"],
    },
    {
      question: "Have you ever compared yourself to someone you saw online?",
      answer: "Sometimes, yeah.",
      pushes: [
        "Give us a specific, concrete example rather than a general admission.",
        "Now name precisely what you were comparing, appearance, success, lifestyle, something else.",
      ],
      skills: ["A concrete example given", "A precise category of comparison named"],
    },
    {
      question: "Why do you think people post highlight reels instead of ordinary moments?",
      answer: "They want to look good.",
      pushes: [
        "Push past the obvious answer. Is there a deeper motivation, insecurity, validation, social pressure?",
        "Now use a nuanced connector like 'in part because...' to show it's not the only reason.",
      ],
      skills: ["A deeper underlying motivation named", "A nuanced partial-cause connector used"],
    },
    {
      question: "Is it fair to blame the platforms themselves for this comparison culture?",
      answer: "Kind of, yes.",
      pushes: [
        "'Kind of' is doing all the work here. Distinguish what the platform is responsible for versus what isn't.",
        "Now acknowledge the counterargument before restating your position.",
      ],
      skills: ["A clear distinction drawn (platform vs. user)", "A counterargument acknowledged before the claim"],
    },
    {
      question: "Do you think this affects some people more than others?",
      answer: "Probably, yeah.",
      pushes: [
        "Name a specific group or factor that might make someone more vulnerable to it.",
        "Now explain why that factor makes a difference, not just that it does.",
      ],
      skills: ["A specific vulnerable group named", "A causal explanation for the vulnerability"],
    },
    {
      question: "Have you ever changed your own posting habits because of this?",
      answer: "A bit, maybe.",
      pushes: [
        "Give us a concrete example of what actually changed.",
        "Now tell us what prompted that change, specifically.",
      ],
      skills: ["A concrete behavioral example", "A specific triggering realization"],
    },
    {
      question: "What responsibility do you think users have, versus the platforms?",
      answer: "Both are responsible.",
      pushes: [
        "Unpack that. What exactly falls on the user, and what falls on the platform?",
        "Now weigh them against each other, using something like 'while... it's ultimately...'",
      ],
      skills: ["A clear division of responsibility", "A weighing structure (while... ultimately...) used"],
    },
    {
      question: "Do you think this comparison culture will get better or worse in the future?",
      answer: "Worse, probably.",
      pushes: [
        "Give a specific trend or piece of evidence behind that prediction.",
        "Now propose one thing that could realistically shift that trajectory.",
      ],
      skills: ["A specific trend cited as evidence", "A realistic mitigating factor proposed"],
    },
  ],
  recall: [
    { question: "Do you think social media makes people compare themselves to others more?", fromPrompt: 0 },
    { question: "Is it fair to blame the platforms themselves for this comparison culture?", fromPrompt: 3 },
    { question: "What responsibility do you think users have, versus the platforms?", fromPrompt: 6 },
  ],
};

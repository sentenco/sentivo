// ASCEND, Technology & the Modern Workplace Track, Lesson 3: "Remote Work and Company Culture"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-business-3",
  code: "L3",
  mechanic: "push",
  title: "Remote Work and Company Culture",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you think remote work has weakened company culture?",
      answer: "Kind of, yeah.",
      leveledAnswer: "Kind of, yeah, I think we've lost a lot of the spontaneous, casual interaction that used to happen in the office, though remote work has genuinely improved work-life balance for most of the team.",
      pushes: [
        "Give a specific example of what's actually been lost.",
        "Now acknowledge something remote work has actually improved instead.",
      ],
      skills: ["A specific concrete loss named", "A genuine counterbalancing improvement"],
    },
    {
      question: "How does your own team try to maintain connection remotely?",
      answer: "We have calls and stuff.",
      leveledAnswer: "We do weekly video check-ins and a casual virtual coffee chat on Fridays, though honestly, it doesn't fully replace the connection we used to have in person.",
      pushes: [
        "Give a specific, concrete example of what that involves.",
        "Now tell us honestly whether it actually works.",
      ],
      skills: ["A specific concrete example", "An honest evaluation of effectiveness"],
    },
    {
      question: "Do you think leaders should require people back in the office?",
      answer: "It depends, I think.",
      leveledAnswer: "I'd support it for roles that genuinely rely on in-person collaboration, like onboarding new hires, but I wouldn't support a blanket mandate for teams whose work is largely independent.",
      pushes: [
        "Give a specific condition under which you'd support requiring it.",
        "Now give a specific condition under which you wouldn't.",
      ],
      skills: ["A specific condition in favor", "A specific condition against"],
    },
    {
      question: "What's harder to do remotely that used to be easy in person?",
      answer: "Casual conversations, mentoring, stuff like that.",
      leveledAnswer: "Mentoring is probably the hardest, since it used to happen naturally over someone's shoulder, but scheduling regular one-on-one video sessions can at least partly make up for that.",
      pushes: [
        "Pick one and explain specifically why it's harder to replicate remotely.",
        "Now propose a way to partly solve that.",
      ],
      skills: ["A specific mechanism for the difficulty", "A concrete proposed solution"],
    },
    {
      question: "Do you think trust between managers and employees changes with remote work?",
      answer: "It can, yeah.",
      leveledAnswer: "It can shift toward less trust, since managers can't visibly confirm people are working, though in some cases remote work has actually built trust by forcing managers to judge people on output rather than presence.",
      pushes: [
        "Explain specifically how it changes, and in which direction.",
        "Now acknowledge a case where remote work has actually built trust.",
      ],
      skills: ["A specific directional explanation", "A counterexample acknowledged"],
    },
    {
      question: "How would you describe your own company's culture right now?",
      answer: "Pretty good, overall.",
      leveledAnswer: "Pretty good overall, leadership is genuinely transparent about company decisions, though I do think we could do more to recognize people's achievements publicly.",
      pushes: [
        "Give a specific example that illustrates that.",
        "Now name one thing about it that could genuinely be better.",
      ],
      skills: ["A specific illustrative example", "A genuine, specific critique"],
    },
    {
      question: "Should culture even be the same thing in a remote-first company as in an office-based one?",
      answer: "Maybe not exactly.",
      leveledAnswer: "It probably shouldn't be identical, a remote-first culture needs to lean more heavily on deliberate, structured communication, though mutual respect should stay the same regardless of setting.",
      pushes: [
        "Explain specifically how it should differ.",
        "Now name one core value that should stay the same regardless.",
      ],
      skills: ["A specific proposed difference", "A stable, unifying value named"],
    },
    {
      question: "What would you personally change about how your workplace handles remote or hybrid work?",
      answer: "A few small things.",
      leveledAnswer: "I'd push for clearer guidelines on which meetings actually need to be synchronous, though leadership might resist that since it could be seen as reducing oversight.",
      pushes: [
        "Name one specific, concrete change.",
        "Now tell us why leadership might resist making it.",
      ],
      skills: ["A specific concrete change proposed", "A realistic organizational obstacle acknowledged"],
    },
  ],
  recall: [
    { question: "Do you think remote work has weakened company culture?", fromPrompt: 0 },
    { question: "Do you think leaders should require people back in the office?", fromPrompt: 2 },
    { question: "What would you personally change about how your workplace handles remote or hybrid work?", fromPrompt: 7 },
  ],
};

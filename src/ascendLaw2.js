// ASCEND, Arguing for Change Track, Lesson 2: "Reforming an Outdated System"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-law-2",
  code: "L2",
  mechanic: "push",
  title: "Reforming an Outdated System",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Is there a system or institution you think is genuinely outdated?",
      answer: "Yeah, a few come to mind.",
      pushes: [
        "Name one specifically, not just 'a few'.",
        "Now explain precisely what makes it outdated, not just old.",
      ],
      skills: ["A specific institution named", "A precise definition of 'outdated' applied"],
    },
    {
      question: "What would meaningful reform of that system actually look like?",
      answer: "Big changes, basically.",
      pushes: [
        "Name one specific, concrete change.",
        "Now tell us why that particular change would matter most.",
      ],
      skills: ["A specific concrete change proposed", "A reasoned justification for its importance"],
    },
    {
      question: "Who benefits from that system staying the way it is?",
      answer: "Certain people, I guess.",
      pushes: [
        "Name that group specifically.",
        "Now explain precisely why they benefit from the status quo.",
      ],
      skills: ["A specific group identified", "A precise explanation of their incentive"],
    },
    {
      question: "What's the strongest argument against reforming it?",
      answer: "People are scared of change.",
      pushes: [
        "Go deeper than fear. What's a legitimate practical concern with reform?",
        "Now respond to that concern directly.",
      ],
      skills: ["A legitimate practical counterargument", "A direct rebuttal given"],
    },
    {
      question: "How would you actually go about pushing for this kind of change?",
      answer: "Raise awareness, I guess.",
      pushes: [
        "Name a more specific, concrete first step.",
        "Now name who you'd need to convince to make it happen.",
      ],
      skills: ["A specific concrete first step", "A specific target audience for persuasion"],
    },
    {
      question: "Do you think incremental change or a complete overhaul is more realistic here?",
      answer: "Incremental, probably.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a downside of moving incrementally.",
      ],
      skills: ["A specific supporting reason", "A genuine downside acknowledged"],
    },
    {
      question: "Has this system ever directly affected you or someone you know?",
      answer: "Yeah, a bit.",
      pushes: [
        "Give a specific example of how.",
        "Now tell us how that experience shaped your opinion on it.",
      ],
      skills: ["A specific concrete example", "A reflection on how it shaped your view"],
    },
    {
      question: "What would you say to someone who thinks the system is fine as it is?",
      answer: "I'd try to explain the problem.",
      pushes: [
        "Give the actual specific argument you'd make.",
        "Now acknowledge one point where they might have a fair point.",
      ],
      skills: ["A specific, concrete argument given", "A fair concession made"],
    },
  ],
  recall: [
    { question: "Is there a system or institution you think is genuinely outdated?", fromPrompt: 0 },
    { question: "What's the strongest argument against reforming it?", fromPrompt: 3 },
    { question: "What would you say to someone who thinks the system is fine as it is?", fromPrompt: 7 },
  ],
};

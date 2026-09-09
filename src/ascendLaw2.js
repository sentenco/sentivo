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
      leveledAnswer: "Yeah, the patent approval process comes to mind, it's outdated not just because it's old, but because it was never designed to handle the pace of modern software development.",
      pushes: [
        "Name one specifically, not just 'a few'.",
        "Now explain precisely what makes it outdated, not just old.",
      ],
      skills: ["A specific institution named", "A precise definition of 'outdated' applied"],
    },
    {
      question: "What would meaningful reform of that system actually look like?",
      answer: "Big changes, basically.",
      leveledAnswer: "I'd start by cutting the average review time in half, since delays like that are what actually push small inventors out of the process entirely.",
      pushes: [
        "Name one specific, concrete change.",
        "Now tell us why that particular change would matter most.",
      ],
      skills: ["A specific concrete change proposed", "A reasoned justification for its importance"],
    },
    {
      question: "Who benefits from that system staying the way it is?",
      answer: "Certain people, I guess.",
      leveledAnswer: "Larger corporations tend to benefit most, since they have the legal resources to navigate the slow process while smaller competitors get squeezed out.",
      pushes: [
        "Name that group specifically.",
        "Now explain precisely why they benefit from the status quo.",
      ],
      skills: ["A specific group identified", "A precise explanation of their incentive"],
    },
    {
      question: "What's the strongest argument against reforming it?",
      answer: "People are scared of change.",
      leveledAnswer: "A legitimate concern is that rushing reform could introduce loopholes that get exploited before anyone notices, though that risk can be managed through a phased rollout with built-in review periods.",
      pushes: [
        "Go deeper than fear. What's a legitimate practical concern with reform?",
        "Now respond to that concern directly.",
      ],
      skills: ["A legitimate practical counterargument", "A direct rebuttal given"],
    },
    {
      question: "How would you actually go about pushing for this kind of change?",
      answer: "Raise awareness, I guess.",
      leveledAnswer: "I'd start by publishing a detailed case study showing the real cost of the current delays, and ultimately I'd need to convince the committee members who actually control the legislative agenda.",
      pushes: [
        "Name a more specific, concrete first step.",
        "Now name who you'd need to convince to make it happen.",
      ],
      skills: ["A specific concrete first step", "A specific target audience for persuasion"],
    },
    {
      question: "Do you think incremental change or a complete overhaul is more realistic here?",
      answer: "Incremental, probably.",
      leveledAnswer: "Incremental change is probably more realistic, since it's easier to get political buy-in for small adjustments, though the downside is that urgent problems might not get addressed quickly enough.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a downside of moving incrementally.",
      ],
      skills: ["A specific supporting reason", "A genuine downside acknowledged"],
    },
    {
      question: "Has this system ever directly affected you or someone you know?",
      answer: "Yeah, a bit.",
      leveledAnswer: "Yeah, a friend of mine waited nearly three years for her patent to clear, and watching that process firsthand is really what convinced me the system needs reform.",
      pushes: [
        "Give a specific example of how.",
        "Now tell us how that experience shaped your opinion on it.",
      ],
      skills: ["A specific concrete example", "A reflection on how it shaped your view"],
    },
    {
      question: "What would you say to someone who thinks the system is fine as it is?",
      answer: "I'd try to explain the problem.",
      leveledAnswer: "I'd point to the average wait times as concrete evidence something's broken, though I'd concede that the system does still work reasonably well for large, well-resourced applicants.",
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

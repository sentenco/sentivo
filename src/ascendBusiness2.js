// ASCEND, Technology & the Modern Workplace Track, Lesson 2: "Automation and Job Security"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-business-2",
  code: "L2",
  mechanic: "push",
  title: "Automation and Job Security",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Do you worry about automation affecting your own job?",
      answer: "A little, yeah.",
      leveledAnswer: "A little, to be honest, I think routine reporting tasks could easily be automated, but the client-facing side of my role probably won't be, since that really depends on human judgment.",
      pushes: [
        "Name a specific part of your role that could realistically be automated.",
        "Now name a part that couldn't be, and explain why.",
      ],
      skills: ["A specific vulnerable task named", "A contrasting, resistant task with reasoning"],
    },
    {
      question: "How has automation already changed the way your industry works?",
      answer: "It's changed quite a bit.",
      leveledAnswer: "It's changed quite a bit, manual data entry has largely been replaced by automated systems, and most of us have had to pick up new analytical skills to keep up.",
      pushes: [
        "Give a specific example of that change, a tool, a process, a role that disappeared.",
        "Now describe how people in your industry have adapted to it.",
      ],
      skills: ["A specific concrete example", "An adaptation detail described"],
    },
    {
      question: "Do you think companies have a responsibility to support workers displaced by automation?",
      answer: "Yeah, I think so.",
      leveledAnswer: "Yeah, I think companies should at least offer retraining programs, even though I understand that can be a significant cost for smaller businesses to absorb.",
      pushes: [
        "Name a specific form that support should take.",
        "Now acknowledge a reason companies might resist providing it.",
      ],
      skills: ["A specific proposed form of support", "A realistic business-side counterpoint"],
    },
    {
      question: "Is there a skill you're developing specifically to stay relevant?",
      answer: "A few things, yeah.",
      leveledAnswer: "I've actually been focusing on data analysis, mainly because it's becoming central to decision-making in almost every department.",
      pushes: [
        "Name one specific skill precisely.",
        "Now tell us why you chose that one over others.",
      ],
      skills: ["A specific skill named", "A reasoned justification for the choice"],
    },
    {
      question: "Do you think automation will create as many jobs as it eliminates?",
      answer: "I'm not sure, honestly.",
      leveledAnswer: "Historically, past shifts like the industrial revolution did eventually create new kinds of jobs, but this shift might be different, since AI can replace cognitive tasks, not just manual ones.",
      pushes: [
        "Give a specific argument for that, based on past technological shifts.",
        "Now give a reason this shift might be different from past ones.",
      ],
      skills: ["A specific historical argument", "A reasoned distinction for this shift"],
    },
    {
      question: "How should governments respond to job losses caused by automation?",
      answer: "Some kind of support system.",
      leveledAnswer: "I'd support something like subsidized retraining programs, although funding an initiative like that at scale would be a real practical challenge.",
      pushes: [
        "Name a specific policy, not just 'some kind of support'.",
        "Now acknowledge a practical difficulty in implementing it.",
      ],
      skills: ["A specific policy named", "A practical implementation difficulty acknowledged"],
    },
    {
      question: "Do you think this issue is being talked about enough in your workplace?",
      answer: "Not really, no.",
      leveledAnswer: "Not really, no, I think people are hesitant to bring it up because it feels like admitting their own job is at risk, but management could open that conversation directly in team meetings.",
      pushes: [
        "Give a specific reason it isn't being discussed.",
        "Now propose one way that conversation could realistically start.",
      ],
      skills: ["A specific reason for the silence", "A realistic proposal to open the conversation"],
    },
    {
      question: "Where do you see your own role heading over the next five years, given all this?",
      answer: "It'll probably change some.",
      leveledAnswer: "I expect a good portion of my reporting work will be automated within five years, so I've been deliberately building up my strategic and client-facing skills to prepare for that shift.",
      pushes: [
        "Give a specific prediction about how, exactly.",
        "Now tell us what you're doing now to prepare for that change.",
      ],
      skills: ["A specific concrete prediction", "A preparation detail described"],
    },
  ],
  recall: [
    { question: "Do you worry about automation affecting your own job?", fromPrompt: 0 },
    { question: "Is there a skill you're developing specifically to stay relevant?", fromPrompt: 3 },
    { question: "Where do you see your own role heading over the next five years, given all this?", fromPrompt: 7 },
  ],
};

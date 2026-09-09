// ASCEND, Arguing for Change Track, Lesson 4: "When Laws Fail to Keep Up with Change"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-law-4",
  code: "L4",
  mechanic: "push",
  title: "When Laws Fail to Keep Up with Change",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Can you think of an area where the law hasn't kept up with technology or society?",
      answer: "Yeah, a few areas.",
      leveledAnswer: "Yeah, data privacy regulation comes to mind, the gap is that most existing laws were written before companies could collect this volume of personal data, so they simply don't address it.",
      pushes: [
        "Name one specifically.",
        "Now explain precisely what gap exists between the law and reality there.",
      ],
      skills: ["A specific area named", "A precise description of the gap"],
    },
    {
      question: "Why do you think laws are often slow to adapt?",
      answer: "The system moves slowly.",
      leveledAnswer: "Legislative processes require lengthy committee review and multiple rounds of debate before anything passes, and beyond that, lawmakers often lack the technical expertise to draft precise rules quickly.",
      pushes: [
        "Go deeper. Name a specific structural reason for that slowness.",
        "Now name a reason it's slow to adapt beyond just process.",
      ],
      skills: ["A specific structural reason", "An additional distinct reason named"],
    },
    {
      question: "What problems can arise while the law is catching up?",
      answer: "People can get hurt or taken advantage of.",
      leveledAnswer: "Consumers have been misled by data brokers selling their information without meaningful consent, and it's usually people with the least legal or financial resources who are most exposed to that kind of exploitation.",
      pushes: [
        "Give a specific concrete example of that happening.",
        "Now tell us who's most exposed to that risk in the meantime.",
      ],
      skills: ["A specific concrete example", "A specific vulnerable group identified"],
    },
    {
      question: "Should companies or individuals self-regulate while waiting for laws to catch up?",
      answer: "Maybe, to some extent.",
      leveledAnswer: "Companies could voluntarily adopt data protection standards ahead of regulation, though self-regulation alone isn't enough, since there's little incentive to follow through once it stops being profitable.",
      pushes: [
        "Give a specific example of what that self-regulation could look like.",
        "Now acknowledge why self-regulation alone isn't a full solution.",
      ],
      skills: ["A specific concrete example", "A limitation of self-regulation acknowledged"],
    },
    {
      question: "How should lawmakers go about writing rules for something they don't fully understand yet?",
      answer: "Get advice from experts.",
      leveledAnswer: "They should consult independent technologists through formal hearings, rather than relying solely on industry lobbyists, though even that carries the risk of those experts having their own conflicts of interest.",
      pushes: [
        "Name a specific type of expert or process they should consult.",
        "Now acknowledge a risk in relying too heavily on that source.",
      ],
      skills: ["A specific consultative process named", "A genuine risk acknowledged"],
    },
    {
      question: "Do you think this gap is getting bigger or smaller as technology accelerates?",
      answer: "Bigger, probably.",
      leveledAnswer: "Bigger, probably, given how quickly generative AI has outpaced any existing regulatory framework, though increased public pressure could eventually push lawmakers to close that gap faster.",
      pushes: [
        "Support that with a specific piece of evidence or trend.",
        "Now name one factor that could help close the gap instead.",
      ],
      skills: ["A specific trend cited", "A realistic mitigating factor named"],
    },
    {
      question: "Have you personally been affected by a legal gray area like this?",
      answer: "Maybe once.",
      leveledAnswer: "Maybe once, I wasn't sure whether a freelance contract I signed was even enforceable under current gig-economy law, so I ended up consulting a lawyer just to get some clarity.",
      pushes: [
        "Tell us specifically what happened.",
        "Now tell us how you navigated the uncertainty.",
      ],
      skills: ["A specific concrete example", "A strategy for navigating it described"],
    },
    {
      question: "What would you propose to help law keep pace with change going forward?",
      answer: "Faster processes, maybe.",
      leveledAnswer: "I'd propose creating a fast-track review process specifically for technology-related legislation, though the obstacle is that lawmakers rarely want to cede that much control over the normal legislative timeline.",
      pushes: [
        "Name one specific, concrete proposal.",
        "Now acknowledge a realistic obstacle to that proposal actually happening.",
      ],
      skills: ["A specific concrete proposal", "A realistic obstacle acknowledged"],
    },
  ],
  recall: [
    { question: "Can you think of an area where the law hasn't kept up with technology or society?", fromPrompt: 0 },
    { question: "What problems can arise while the law is catching up?", fromPrompt: 2 },
    { question: "What would you propose to help law keep pace with change going forward?", fromPrompt: 7 },
  ],
};

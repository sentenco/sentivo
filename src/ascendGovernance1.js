// ASCEND (Push mechanic), Corporate Governance & Risk Track, Lesson 1: "Accountability & Risk"
// B2 -> C1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-governance-1",
  code: "L1",
  mechanic: "push",
  title: "Accountability & Risk",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a decision a company made that you thought was risky.",
      answer: "They made a decision that could go wrong.",
      leveledAnswer: "They launched a new product line without adequately testing it in international markets, and the outcome was a costly recall that damaged their reputation for months afterward.",
      pushes: [
        "'Could go wrong' is vague. What specifically was the risk?",
        "Now tell us what the actual outcome was, or might have been.",
      ],
      skills: ["A specific named risk instead of a vague statement", "An outcome or consequence added"],
    },
    {
      question: "What does good leadership look like to you in a company?",
      answer: "A good leader makes good decisions.",
      leveledAnswer: "Good leadership, to me, means genuine transparency with employees, and I've seen that build the kind of trust that keeps a team engaged even during difficult periods.",
      pushes: [
        "That's circular, it doesn't say much. Name a specific leadership quality.",
        "Now connect it to a concrete example or effect.",
      ],
      skills: ["A specific named leadership quality instead of a circular statement", "A concrete example or effect added"],
    },
    {
      question: "How should a company respond when something goes wrong publicly?",
      answer: "They should say sorry and fix it.",
      leveledAnswer: "A company should first issue a formal public statement acknowledging the issue, then take concrete corrective action, and finally communicate the steps taken to prevent it from happening again.",
      pushes: [
        "'Say sorry' and 'fix it' are too casual for this context. Give us the professional terms.",
        "Now add the order these steps should happen in.",
      ],
      skills: ["Precise, register-appropriate terms (issue a statement / take corrective action)", "A sequencing structure added (first..., then..., finally...)"],
    },
    {
      question: "Describe a rule or policy that exists to prevent a company from taking too much risk.",
      answer: "There are rules that stop companies from doing bad things.",
      leveledAnswer: "Internal audit requirements are a good example, they matter because they create an independent check on decision-making before problems can escalate unnoticed.",
      pushes: [
        "'Bad things' is too vague. Name a specific kind of rule or policy.",
        "Now explain why that kind of rule matters.",
      ],
      skills: ["A specific named rule or policy type", "A reason or justification added"],
    },
    {
      question: "Who should be responsible when a company makes a harmful decision?",
      answer: "Probably the people at the top.",
      leveledAnswer: "It's likely that senior leadership bears the greatest responsibility, since they're the ones with the authority to approve or block high-risk decisions in the first place.",
      pushes: [
        "Good instinct, but hedge and specify more precisely who that is.",
        "Now add a reason for why responsibility should fall there.",
      ],
      skills: ["A more precise, hedged term (senior leadership / those with decision-making authority)", "A reason added"],
    },
    {
      question: "Do you think companies are transparent enough with the public?",
      answer: "Not really, I don't think so.",
      leveledAnswer: "Not really, many companies still bury material risks deep in disclosures few people actually read, though this varies quite a bit, some industries are held to far stricter transparency standards than others.",
      pushes: [
        "Good instinct. Now support that with a specific example or reasoning.",
        "Now qualify it, is this true of all companies, or just some?",
      ],
      skills: ["A specific example or reasoning added", "A qualifying/nuanced clause added (not universally true / this varies by...)"],
    },
    {
      question: "What's one way a company can build public trust?",
      answer: "By being honest.",
      leveledAnswer: "Publishing regular, detailed sustainability reports is one concrete action that builds trust, and over time, that kind of consistency tends to translate into stronger customer loyalty.",
      pushes: [
        "That's a start, but too general. Name a specific action, not just a trait.",
        "Now connect it to a longer-term benefit.",
      ],
      skills: ["A specific action named instead of a trait", "A long-term benefit connected"],
    },
    {
      question: "Where do you think corporate accountability is heading in the future?",
      answer: "It'll probably get stricter.",
      leveledAnswer: "I expect regulators will require far more detailed disclosure around AI-driven decision-making within the next decade, as public scrutiny of automated systems continues to grow.",
      pushes: [
        "'Stricter' says nothing concrete. Predict something specific.",
        "Now put it all together in one fluent, precise sentence.",
      ],
      skills: ["A specific, concrete prediction instead of stricter", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a decision a company made that you thought was risky.", fromPrompt: 0 },
    { question: "What does good leadership look like to you in a company?", fromPrompt: 1 },
    { question: "How should a company respond when something goes wrong publicly?", fromPrompt: 2 },
  ],
};

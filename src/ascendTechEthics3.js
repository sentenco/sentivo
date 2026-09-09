// ASCEND, Technology & Right and Wrong Track, Lesson 3: "Surveillance and Safety Trade-offs"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-tech-ethics-3",
  code: "L3",
  mechanic: "push",
  title: "Surveillance and Safety Trade-offs",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "How do you feel about cameras and tracking being used in the name of safety?",
      answer: "It's fine, mostly.",
      leveledAnswer: "It's fine as long as it's limited to public spaces and clearly justified by an actual safety need, but it would stop feeling fine to me if that same tracking started following people into private areas of their lives.",
      pushes: [
        "Qualify that, fine under what conditions specifically?",
        "Now name a situation where it would stop feeling fine to you.",
      ],
      skills: ["A specific condition for acceptability", "A concrete limit-case named"],
    },
    {
      question: "Do you think this kind of monitoring actually makes people safer?",
      answer: "Probably, yeah.",
      leveledAnswer: "Probably, there's evidence that visible cameras can deter certain crimes in public areas, though there are also cases where the monitoring just displaces the problem elsewhere instead of actually reducing it.",
      pushes: [
        "Give a specific example or type of evidence for that.",
        "Now acknowledge a case where it might not actually help.",
      ],
      skills: ["Specific supporting evidence cited", "A counter-case acknowledged"],
    },
    {
      question: "Is there a point where safety measures start to feel invasive to you?",
      answer: "Yeah, definitely.",
      leveledAnswer: "It crosses the line for me when schools start monitoring students' personal social media accounts, because at that point it stops being about safety and starts feeling like straightforward surveillance of your private life.",
      pushes: [
        "Name a specific example of a measure that crosses that line for you.",
        "Now explain precisely what makes it feel invasive versus reasonable.",
      ],
      skills: ["A specific concrete example", "A precise explanation of the distinction"],
    },
    {
      question: "Who should decide how much surveillance is acceptable in a school or public space?",
      answer: "I'm not sure, honestly.",
      leveledAnswer: "I'd tentatively say it should involve a mix of school administrators and elected community representatives, though giving any single group that much decision-making power does risk them overreaching without real accountability.",
      pushes: [
        "Propose a specific answer, even tentatively.",
        "Now acknowledge a downside of giving that group the power to decide.",
      ],
      skills: ["A tentative but specific proposal", "A downside of that choice acknowledged"],
    },
    {
      question: "Do you think young people should have a say in these decisions?",
      answer: "Yeah, they should.",
      leveledAnswer: "They should, since they're the ones most directly affected by these decisions and often notice problems adults overlook, though realistically their input tends to get treated as far less important than it should be.",
      pushes: [
        "Give a specific reason their perspective matters here.",
        "Now acknowledge a limitation in how much say they realistically get.",
      ],
      skills: ["A specific supporting reason", "A realistic limitation acknowledged"],
    },
    {
      question: "How would you weigh privacy against safety if you had to choose?",
      answer: "It depends on the situation.",
      leveledAnswer: "I'd choose safety in a situation involving an immediate, credible threat, but I'd choose privacy in something like everyday monitoring with no specific justification, and honestly the tipping factor for me is whether there's real, concrete evidence of danger.",
      pushes: [
        "Give a specific situation where you'd choose safety, and one where you'd choose privacy.",
        "Now explain what factor actually tips the balance between the two.",
      ],
      skills: ["Two specific contrasting scenarios", "A precise tipping-factor named"],
    },
    {
      question: "Do you trust the institutions that collect this kind of data?",
      answer: "Not fully, no.",
      leveledAnswer: "Not fully, mainly because there's so little transparency about how that data actually gets stored or used afterward, though clearer, independently audited policies would genuinely help rebuild that trust.",
      pushes: [
        "Name a specific reason for that distrust.",
        "Now name what would need to change for that trust to improve.",
      ],
      skills: ["A specific reason for distrust", "A concrete condition for improved trust"],
    },
    {
      question: "What would a fair balance between safety and privacy actually look like to you?",
      answer: "Somewhere reasonable in between.",
      leveledAnswer: "I'd say a fair rule would be requiring clear public justification and a time limit before any surveillance data gets deleted, though I imagine security officials would disagree, since they'd probably want to keep that data indefinitely just in case.",
      pushes: [
        "Make that concrete, describe one specific rule that would strike that balance.",
        "Now acknowledge who might disagree with your proposed rule, and why.",
      ],
      skills: ["A specific, concrete proposed rule", "An acknowledged disagreeing perspective"],
    },
  ],
  recall: [
    { question: "How do you feel about cameras and tracking being used in the name of safety?", fromPrompt: 0 },
    { question: "Who should decide how much surveillance is acceptable in a school or public space?", fromPrompt: 3 },
    { question: "What would a fair balance between safety and privacy actually look like to you?", fromPrompt: 7 },
  ],
};

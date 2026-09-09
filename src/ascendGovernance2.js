// ASCEND, Accountability & Risk Track, Lesson 2: "Whistleblowing and Loyalty"
// B2 -> C1, Adults. Push mechanic, C1-level precision.

export default {
  id: "ascend-governance-2",
  code: "L2",
  mechanic: "push",
  title: "Whistleblowing and Loyalty",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "What's your honest opinion on employees who go public about wrongdoing at their company?",
      answer: "I respect it, mostly.",
      leveledAnswer: "I respect it most when someone has genuinely exhausted internal channels first, though I'd be more hesitant to support it if they went public before giving the company any real chance to address the issue.",
      pushes: [
        "Give a specific condition under which you'd respect it most.",
        "Now name a condition under which you'd be more hesitant to support it.",
      ],
      skills: ["A specific supporting condition", "A specific limiting condition"],
    },
    {
      question: "Do you think loyalty to a company should ever outweigh reporting wrongdoing?",
      answer: "No, not really.",
      leveledAnswer: "No, not really, protecting people from harm has to take priority over institutional loyalty, though loyalty becomes a more reasonable competing value when the wrongdoing is genuinely minor and correctable internally.",
      pushes: [
        "Justify that with a specific reason.",
        "Now acknowledge a case where loyalty might be a reasonable competing value.",
      ],
      skills: ["A specific supporting reason", "A genuine counter-case acknowledged"],
    },
    {
      question: "What risks does someone take on by speaking up about problems at work?",
      answer: "They could lose their job.",
      leveledAnswer: "Beyond losing their job, they risk being quietly sidelined from future opportunities even if they're never formally punished, and in practice, I think that risk is significant enough to make most people think twice.",
      pushes: [
        "Name a more specific risk beyond losing the job.",
        "Now tell us how significant you think that risk actually is, in practice.",
      ],
      skills: ["A specific additional risk named", "A reasoned evaluation of the risk"],
    },
    {
      question: "Should companies do more to protect people who report problems internally?",
      answer: "Yeah, definitely.",
      leveledAnswer: "Yeah, definitely, companies should guarantee anonymous reporting channels with real protection against retaliation, though they might resist that because it can feel like it undermines managerial authority.",
      pushes: [
        "Name one specific protection or policy they should have.",
        "Now acknowledge a reason companies might resist putting it in place.",
      ],
      skills: ["A specific proposed protection", "A realistic organizational counterpoint"],
    },
    {
      question: "Have you ever been in a situation where you considered speaking up about something?",
      answer: "Maybe once.",
      leveledAnswer: "Maybe once, I noticed some questionable expense reporting on a project, and what ultimately made me decide to raise it was realizing that staying silent would make me complicit if it ever came to light.",
      pushes: [
        "Tell us, without naming anyone, roughly what the situation was.",
        "Now tell us what ultimately made you decide what to do.",
      ],
      skills: ["A specific concrete situation described", "A reasoned explanation of the decision"],
    },
    {
      question: "Do you think going to the media is ever justified, instead of reporting internally first?",
      answer: "Sometimes, maybe.",
      leveledAnswer: "Going to the media is justified when internal channels have been tried repeatedly and clearly ignored, but internal reporting should generally be attempted first, since it gives the company a fair chance to correct course.",
      pushes: [
        "Give a specific condition under which that would be justified.",
        "Now give a condition under which internal reporting should be tried first.",
      ],
      skills: ["A specific justifying condition", "A contrasting condition favoring internal reporting"],
    },
    {
      question: "How should the public treat someone who's accused of being disloyal for speaking out?",
      answer: "Give them the benefit of the doubt.",
      leveledAnswer: "That would mean withholding judgment until the facts are actually verified, rather than assuming guilt either way, though some skepticism is fair when the person has a clear personal motive to exaggerate.",
      pushes: [
        "Make that concrete, what would that actually look like?",
        "Now acknowledge a case where skepticism toward them might be fair.",
      ],
      skills: ["A specific, concrete description", "A fair counter-case acknowledged"],
    },
    {
      question: "What would need to be true for you to personally report wrongdoing at your own workplace?",
      answer: "It would have to be serious.",
      leveledAnswer: "It would need to involve genuine harm to people, not just a minor procedural violation, though even then, fear of professional retaliation would honestly be the thing most likely to stop me.",
      pushes: [
        "Define 'serious' more precisely for yourself.",
        "Now tell us what would actually stop you, even if it met that bar.",
      ],
      skills: ["A precise personal threshold defined", "An honest obstacle acknowledged"],
    },
  ],
  recall: [
    { question: "What's your honest opinion on employees who go public about wrongdoing at their company?", fromPrompt: 0 },
    { question: "Have you ever been in a situation where you considered speaking up about something?", fromPrompt: 4 },
    { question: "What would need to be true for you to personally report wrongdoing at your own workplace?", fromPrompt: 7 },
  ],
};

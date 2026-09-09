// ASCEND (Push mechanic), Law & Advocacy Track, Lesson 1: "Arguing for Change"
// B2 -> C1, Adults. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-law-1",
  code: "L1",
  mechanic: "push",
  title: "Arguing for Change",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a law or policy you feel strongly about.",
      answer: "I don't like it, it's not fair.",
      leveledAnswer: "I think it's fundamentally unjust, because it disproportionately affects low-income families who can't afford to challenge it.",
      pushes: [
        "'Not fair' is too casual here. Give us the precise legal or ethical concept you actually mean.",
        "Now explain specifically who it affects and how.",
      ],
      skills: ["A precise term replacing not fair (unjust / discriminatory / disproportionate)", "A specific affected group and effect named"],
    },
    {
      question: "How would you argue for changing a rule you disagree with?",
      answer: "I would say it's a bad rule and should change.",
      leveledAnswer: "I'd argue the rule is outdated because it fails to account for how remote work has changed since it was written, and that outdated assumption is exactly why it needs to be revised.",
      pushes: [
        "That's an assertion, not an argument. Give us actual evidence or reasoning.",
        "Now structure it like a real argument, with a clear claim followed by support.",
      ],
      skills: ["Evidence or reasoning added instead of a bare assertion", "A clear claim-then-support structure"],
    },
    {
      question: "What makes a good argument persuasive, in your view?",
      answer: "It has to make sense and have proof.",
      leveledAnswer: "A persuasive argument needs logical coherence paired with credible evidence, since one without the other tends to fall apart under scrutiny.",
      pushes: [
        "'Make sense' and 'proof' are vague. Name the actual components of a persuasive argument.",
        "Now connect those components with more precise, academic language.",
      ],
      skills: ["Precise terminology instead of make sense/proof (logical coherence, credible evidence)", "A more formal, connected sentence structure"],
    },
    {
      question: "Describe a time you had to advocate for something, big or small.",
      answer: "I asked for something and eventually got it.",
      leveledAnswer: "I put together a written proposal outlining the cost savings, and I think what made it convincing was backing every claim with actual numbers rather than just opinion.",
      pushes: [
        "'Asked' and 'got it' skip over the actual advocacy. What did you actually say or do?",
        "Now add what made your case convincing.",
      ],
      skills: ["A specific action or approach described", "A reason the advocacy succeeded added"],
    },
    {
      question: "Do you think laws always reflect what's fair?",
      answer: "No, not always.",
      leveledAnswer: "No, not always, many outdated tax laws still disproportionately burden lower earners, though that's not universally true across every jurisdiction.",
      pushes: [
        "Good start, but too brief. Give us a specific example or reasoning.",
        "Now hedge this more precisely, this is a nuanced claim, not an absolute.",
      ],
      skills: ["A specific example or reasoning added", "A sophisticated hedge (not always the case / this isn't universally true)"],
    },
    {
      question: "What's the role of debate in a healthy society, in your opinion?",
      answer: "It helps people understand different sides, I guess.",
      leveledAnswer: "Debate is essential because it forces people to engage seriously with opposing viewpoints, and that exchange is really what sustains a functioning democracy.",
      pushes: [
        "Good instinct. Now commit to that with a stronger stance, not just 'I guess'.",
        "Now connect this to a bigger idea, like democracy or progress.",
      ],
      skills: ["A confident stance replacing I guess", "Connected to a larger concept (democratic discourse / social progress)"],
    },
    {
      question: "How do you respond when someone strongly disagrees with your opinion?",
      answer: "I try to stay calm and explain my side.",
      leveledAnswer: "I try to acknowledge their point directly before responding, and if we still can't agree, I'll suggest we find common ground on at least part of the issue.",
      pushes: [
        "'Stay calm' and 'explain' are plain. What specifically do you do?",
        "Now add how you handle it if they still disagree.",
      ],
      skills: ["A specific technique named instead of stay calm/explain", "A follow-up strategy added for continued disagreement"],
    },
    {
      question: "What issue do you hope will change in the next decade?",
      answer: "I hope things get more equal.",
      leveledAnswer: "I hope access to affordable healthcare becomes more equitable, particularly for people in rural areas who currently have to travel hours just to see a specialist.",
      pushes: [
        "'More equal' is vague. Name the specific issue and what change would look like.",
        "Now put it all together in one fluent, precise sentence.",
      ],
      skills: ["A specific issue and concrete change named", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about a law or policy you feel strongly about.", fromPrompt: 0 },
    { question: "How would you argue for changing a rule you disagree with?", fromPrompt: 1 },
    { question: "What makes a good argument persuasive, in your view?", fromPrompt: 2 },
  ],
};

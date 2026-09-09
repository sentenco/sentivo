// ASCEND, Life Online Track, Lesson 4: "Curating an Online Identity"
// B2 -> C1, Teens. Push mechanic, C1-level precision.

export default {
  id: "ascend-social-4",
  code: "L4",
  mechanic: "push",
  title: "Curating an Online Identity",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "How different is your online persona from who you actually are?",
      answer: "A bit different.",
      leveledAnswer: "I only post the moments where I actually feel confident, which is pretty different from how anxious I often feel day to day, mainly because I'm scared of being judged otherwise.",
      pushes: [
        "Give a specific example of that gap, not just 'a bit'.",
        "Now explain why that gap exists for you specifically.",
      ],
      skills: ["A specific concrete example", "A personal explanation for the gap"],
    },
    {
      question: "Do you think everyone curates a version of themselves online?",
      answer: "Yeah, pretty much.",
      leveledAnswer: "Pretty much everyone does it to some degree, though I think people who feel less secure about themselves tend to curate far more heavily than those who are already comfortable in who they are.",
      pushes: [
        "Qualify that. Is it the same degree of curation for everyone, or does it vary?",
        "Now give a reason someone might curate more than others.",
      ],
      skills: ["A qualification about degree/variation", "A specific reason for individual variation"],
    },
    {
      question: "Is there anything dishonest about presenting a curated version of yourself?",
      answer: "Not really, I guess.",
      leveledAnswer: "I'd say curation only becomes dishonest once you're actively deceiving people, like claiming you're somewhere you're not just to seem more interesting.",
      pushes: [
        "Defend that more precisely. Where's the line between curation and dishonesty, in your view?",
        "Now give a specific example that would cross that line.",
      ],
      skills: ["A precise line drawn between the two", "A concrete example of crossing it"],
    },
    {
      question: "Has managing an online identity ever felt exhausting to you?",
      answer: "Sometimes.",
      leveledAnswer: "It felt exhausting once when I spent nearly an hour picking the 'right' photo for a single post, mainly because I was so worried about how it would be perceived.",
      pushes: [
        "Describe a specific moment it felt that way.",
        "Now tell us what exactly was exhausting about it.",
      ],
      skills: ["A specific moment described", "A precise source of the exhaustion"],
    },
    {
      question: "Do you think there's pressure to be consistent across platforms?",
      answer: "Yeah, a bit.",
      leveledAnswer: "A friend once pointed out that I seemed 'fake' because I acted differently on Snapchat than on LinkedIn, and honestly, I don't think that pressure to be identical everywhere is entirely reasonable.",
      pushes: [
        "Give a specific example of that inconsistency being noticed or judged.",
        "Now tell us if you think that pressure is reasonable.",
      ],
      skills: ["A specific example given", "An opinion on whether it's reasonable"],
    },
    {
      question: "What would it look like to be more 'authentic' online, in your view?",
      answer: "Just being yourself more.",
      leveledAnswer: "It would mean actually posting the unfiltered, less flattering moments instead of only the polished ones; even though that risks judgment, it would probably make my online life feel a lot less exhausting to maintain.",
      pushes: [
        "That's circular. Define what 'being yourself' would actually look like in a post.",
        "Now weigh the risk of doing that against the benefit.",
      ],
      skills: ["A concrete definition of authenticity given", "A risk-versus-benefit comparison made"],
    },
    {
      question: "Do you think younger people experience this identity pressure differently than adults?",
      answer: "Probably, yeah.",
      leveledAnswer: "Younger people grow up with their entire adolescence documented online, whereas most adults developed their identities largely offline before ever having to perform for an audience.",
      pushes: [
        "Name a specific factor that makes the experience different for younger people.",
        "Now use a comparison structure like 'whereas...' to contrast the two groups.",
      ],
      skills: ["A specific differentiating factor named", "A whereas-comparison structure used"],
    },
    {
      question: "If you could change one thing about how identity works online, what would it be?",
      answer: "Less pressure to perform.",
      leveledAnswer: "Platforms would need to stop rewarding constant posting with visibility, though realistically that's difficult since engagement is exactly what keeps these companies profitable.",
      pushes: [
        "Make that concrete, what would actually need to change for that pressure to go down?",
        "Now acknowledge one reason that change is difficult to make happen.",
      ],
      skills: ["A concrete proposed change", "A realistic obstacle to the change acknowledged"],
    },
  ],
  recall: [
    { question: "How different is your online persona from who you actually are?", fromPrompt: 0 },
    { question: "Is there anything dishonest about presenting a curated version of yourself?", fromPrompt: 2 },
    { question: "What would it look like to be more 'authentic' online, in your view?", fromPrompt: 5 },
  ],
};

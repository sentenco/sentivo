// ASCEND (Push mechanic), Social Media & Digital Identity Track, Lesson 1: "Life Online"
// B2 -> C1, Teens. Student answers plain, teacher pushes for a
// stronger version live (direction never shown on screen -- see the Guide).
// Ends with a short Remember This? recall on 3 of the earlier questions.

export default {
  id: "ascend-social-1",
  code: "L1",
  mechanic: "push",
  title: "Life Online",
  tag: "Prompt Push",
  level: "B2-C1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about how you use social media.",
      answer: "I use it a lot, mostly for fun.",
      leveledAnswer: "I'm on Instagram and TikTok pretty much every evening, usually to unwind after school and catch up with what my friends are posting.",
      pushes: [
        "'For fun' is vague. Name specifically what you use it for.",
        "Now add how it fits into your daily routine, not just what you use it for.",
      ],
      skills: ["A specific use named instead of vague for fun", "A routine or frequency detail added"],
    },
    {
      question: "What's your opinion on how social media affects teenagers?",
      answer: "I think it's bad for us, honestly.",
      leveledAnswer: "I'd say it fuels a lot of anxiety and constant comparison among people my age, although it can also genuinely help you stay connected to friends you'd otherwise lose touch with.",
      pushes: [
        "'Bad' is too vague and casual here. Give us the specific effect you mean.",
        "Now balance that with something positive, so it's not one-sided.",
      ],
      skills: ["A precise, specific effect named instead of bad", "A balanced/contrastive structure (while..., it can also...)"],
    },
    {
      question: "Do you think social media companies should be more responsible for what happens on their platforms?",
      answer: "Yes, they should do more.",
      leveledAnswer: "To some extent, yes, I think they should be legally required to limit how addictive their algorithms are for younger users, at least in most cases where the harm is clearly measurable.",
      pushes: [
        "'Do more' is vague. What specifically should they do?",
        "Now hedge this a bit, is this true in every case?",
      ],
      skills: ["A specific action or policy named", "A sophisticated hedge (to some extent / in most cases) instead of an absolute"],
    },
    {
      question: "Describe a time social media influenced a decision you made.",
      answer: "I saw something online and it changed my mind.",
      leveledAnswer: "I watched a video essay criticizing fast fashion, and it genuinely made me rethink how often I buy clothes, though looking back I think the influence was mostly a good thing.",
      pushes: [
        "'Something' and 'changed my mind' are vague. What exactly, and how?",
        "Now reflect on whether that influence was a good thing.",
      ],
      skills: ["A specific detail about what and how", "A reflective, evaluative clause added"],
    },
    {
      question: "How do you think algorithms shape what people see online?",
      answer: "They show you stuff you already like.",
      leveledAnswer: "They create a kind of echo chamber by feeding you personalized content that matches what you already believe, which arguably makes it harder to encounter opposing viewpoints.",
      pushes: [
        "'Stuff you already like' is casual. Give us the actual term for that.",
        "Now explain a consequence of this, not just what it does.",
      ],
      skills: ["A precise term (personalized content / echo chamber)", "A consequence added"],
    },
    {
      question: "Do you think it's possible to have a healthy relationship with social media?",
      answer: "Maybe, if you're careful, I guess.",
      leveledAnswer: "I genuinely believe it's possible, as long as you're deliberate about it, like turning off notifications and setting a strict time limit before you even open the app.",
      pushes: [
        "Good instinct. Now commit to that with a clearer stance, not just 'maybe' and 'I guess'.",
        "Now give a specific example of what 'careful' actually looks like.",
      ],
      skills: ["A confident, register-appropriate stance replacing maybe/I guess", "A specific concrete example added"],
    },
    {
      question: "What responsibility do users themselves have for their online behavior?",
      answer: "They should be careful about what they post.",
      leveledAnswer: "Users need to think twice before posting anything that could hurt someone else's reputation, because once it's out there, it can follow that person for years.",
      pushes: [
        "'Careful' is vague. Name a specific responsibility.",
        "Now connect it to a consequence if that responsibility isn't taken.",
      ],
      skills: ["A specific named responsibility instead of vague careful", "A consequence connected"],
    },
    {
      question: "How do you think social media will look in ten years?",
      answer: "It'll probably be pretty different.",
      leveledAnswer: "I'd guess it'll be far more immersive, with AI-generated content and virtual spaces blurring the line between our online and offline lives.",
      pushes: [
        "'Pretty different' says nothing concrete. Predict something specific.",
        "Now put it all together in one fluent, C1-level sentence.",
      ],
      skills: ["A specific, concrete prediction instead of pretty different", "Combined into one fluent, complex sentence"],
    },
  ],
  recall: [
    { question: "Tell me about how you use social media.", fromPrompt: 0 },
    { question: "What's your opinion on how social media affects teenagers?", fromPrompt: 1 },
    { question: "Do you think social media companies should be more responsible for what happens on their platforms?", fromPrompt: 2 },
  ],
};

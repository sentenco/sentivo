// ASCEND, Talking About a Show or Movie Track, Lesson 2: "A Movie Night with Friends"
// A2 -> B1, Teens. Push mechanic.

export default {
  id: "ascend-movies-2",
  code: "L2",
  mechanic: "push",
  title: "A Movie Night with Friends",
  tag: "Prompt Push",
  level: "A2-B1",
  subtitle: "Say it plain, then say it stronger.",
  prompts: [
    {
      question: "Tell me about a movie night you had with friends.",
      answer: "It was fun.",
      leveledAnswer: "It was really entertaining because we watched a new action movie together.",
      pushes: [
        "Fun is very general. Give us a stronger word.",
        "Now tell us what movie you watched.",
      ],
      skills: ["A stronger adjective than fun", "A specific movie named"],
    },
    {
      question: "Who chose the movie?",
      answer: "One of my friends.",
      leveledAnswer: "My friend Mia chose it, and we picked it by voting on a few options.",
      pushes: [
        "Tell us who, specifically.",
        "Now tell us how the movie got picked.",
      ],
      skills: ["A specific person named", "A decision-process detail added"],
    },
    {
      question: "Did everyone agree on what to watch?",
      answer: "Not really.",
      leveledAnswer: "We disagreed about watching a horror movie or a comedy, but we settled it by flipping a coin.",
      pushes: [
        "Tell us what the disagreement was about.",
        "Now tell us how it got settled.",
      ],
      skills: ["A specific detail about the disagreement", "A resolution described"],
    },
    {
      question: "What did you think of the movie?",
      answer: "It was good.",
      leveledAnswer: "It was actually really funny because the jokes kept catching us off guard.",
      pushes: [
        "Give us a more specific opinion word.",
        "Now give one reason to support your opinion.",
      ],
      skills: ["A more specific opinion adjective", "A supporting reason added"],
    },
    {
      question: "Did your friends agree with your opinion?",
      answer: "Some did.",
      leveledAnswer: "My friend Mia agreed with me, but Jake thought it was boring, so we ended up debating the ending for a while.",
      pushes: [
        "Tell us who agreed and who didn't.",
        "Now tell us what you talked about afterward.",
      ],
      skills: ["A specific agree/disagree detail", "A follow-up detail added"],
    },
    {
      question: "Was there a scene that got a big reaction?",
      answer: "Yes, one scene.",
      leveledAnswer: "Yes, there was a scene where the hero finally faced the villain, and everyone in the room gasped at the same time.",
      pushes: [
        "Describe that scene in more detail.",
        "Now tell us how people reacted, specifically.",
      ],
      skills: ["A more detailed description", "A specific reaction described"],
    },
    {
      question: "Would you do another movie night like that?",
      answer: "Yes, probably.",
      leveledAnswer: "Yes, because it's such a fun way to hang out, and next time I'd want to watch a comedy.",
      pushes: [
        "Tell us why, with a real reason.",
        "Now tell us what you'd want to watch next time.",
      ],
      skills: ["A genuine reason added", "A specific future choice named"],
    },
    {
      question: "Is there a movie you'd like to watch with friends soon?",
      answer: "Maybe one.",
      leveledAnswer: "There's a new sci-fi movie I want to watch, and I think my friends would love it because we all enjoy action-packed stories.",
      pushes: [
        "Tell us which movie, exactly.",
        "Now tell us why you think your friends would like it too.",
      ],
      skills: ["A specific movie named", "A reason tied to your friends' taste"],
    },
  ],
  recall: [
    { question: "Tell me about a movie night you had with friends.", fromPrompt: 0 },
    { question: "What did you think of the movie?", fromPrompt: 3 },
    { question: "Was there a scene that got a big reaction?", fromPrompt: 5 },
  ],
};

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
      pushes: [
        "Fun is very general. Give us a stronger word.",
        "Now tell us what movie you watched.",
      ],
      skills: ["A stronger adjective than fun", "A specific movie named"],
    },
    {
      question: "Who chose the movie?",
      answer: "One of my friends.",
      pushes: [
        "Tell us who, specifically.",
        "Now tell us how the movie got picked.",
      ],
      skills: ["A specific person named", "A decision-process detail added"],
    },
    {
      question: "Did everyone agree on what to watch?",
      answer: "Not really.",
      pushes: [
        "Tell us what the disagreement was about.",
        "Now tell us how it got settled.",
      ],
      skills: ["A specific detail about the disagreement", "A resolution described"],
    },
    {
      question: "What did you think of the movie?",
      answer: "It was good.",
      pushes: [
        "Give us a more specific opinion word.",
        "Now give one reason to support your opinion.",
      ],
      skills: ["A more specific opinion adjective", "A supporting reason added"],
    },
    {
      question: "Did your friends agree with your opinion?",
      answer: "Some did.",
      pushes: [
        "Tell us who agreed and who didn't.",
        "Now tell us what you talked about afterward.",
      ],
      skills: ["A specific agree/disagree detail", "A follow-up detail added"],
    },
    {
      question: "Was there a scene that got a big reaction?",
      answer: "Yes, one scene.",
      pushes: [
        "Describe that scene in more detail.",
        "Now tell us how people reacted, specifically.",
      ],
      skills: ["A more detailed description", "A specific reaction described"],
    },
    {
      question: "Would you do another movie night like that?",
      answer: "Yes, probably.",
      pushes: [
        "Tell us why, with a real reason.",
        "Now tell us what you'd want to watch next time.",
      ],
      skills: ["A genuine reason added", "A specific future choice named"],
    },
    {
      question: "Is there a movie you'd like to watch with friends soon?",
      answer: "Maybe one.",
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

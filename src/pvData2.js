// Passive Voice -- Lesson 2: Past Simple Passive

export default {
  number: 2,
  code: "2",
  title: "Past Simple Passive",
  formula: "was / were + past participle",
  leadIn: "Tell me about a time something of yours was lost, broken, or stolen — what happened?",
  teach: [
    {
      name: "Past Simple Passive — Formula",
      definition: "was / were + past participle. Describes a completed past action where the receiver matters more than who did it.",
      examples: ["The window was broken last night.", "The letters were sent yesterday.", "This song was written in 1985."],
    },
    {
      name: "Watch the Irregular Participles",
      definition: "Many past participles used in the passive are irregular — they don't just add -ed. These are worth memorizing early, since they show up constantly.",
      examples: ["The car was stolen.", "The book was written by a famous author.", "The vase was broken."],
    },
  ],
  compareLeftLabel: "Was — singular",
  compareRightLabel: "Were — plural",
  compareNote: "The verb still has to agree with the subject in the passive, exactly like in the active voice.",
  comparePairs: [
    { left: "The window was broken.", right: "The windows were broken." },
    { left: "The letter was sent.", right: "The letters were sent." },
  ],
  guided: [
    { prompt: "The email ___ (send) an hour ago.", answer: "was sent" },
    { prompt: "The cookies ___ (eat) before dinner.", answer: "were eaten" },
    { prompt: "This painting ___ (paint) 200 years ago.", answer: "was painted" },
    { prompt: "The car ___ (steal) from the parking lot. (irregular)", answer: "was stolen" },
    { prompt: "This novel ___ (write) by a famous author. (irregular)", answer: "was written" },
    { prompt: "The vase ___ (break) when it fell off the shelf. (irregular)", answer: "was broken" },
  ],
  practice: [
    "Write one passive sentence about something that happened to you in the past.",
    "Write one passive sentence using an irregular past participle, like stolen, written, or broken.",
    "Rewrite one active past-tense sentence into the passive.",
  ],
  wrapup: "The past simple passive — was/were + past participle — describes a completed action in the past. Watch for irregular past participles.",
  nextHint: "Present perfect passive, where an action's result still matters right now, not just what happened in the past.",
};

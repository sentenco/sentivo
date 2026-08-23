// Gerunds & Infinitives -- Lesson 2: Verbs That Take Either

export default {
  number: 2,
  code: "2",
  title: "Verbs That Take Either",
  formula: "like/start/begin + either (same meaning)  ·  stop/remember/try + either (different meaning)",
  leadIn: "Think of something you stopped doing recently. Now think of something you stopped in order to do.",
  teach: [
    {
      name: "No Meaning Change",
      definition: "Verbs like like, love, hate, start, begin, continue, and prefer can take either a gerund or an infinitive with essentially the same meaning.",
      examples: ["I like swimming. / I like to swim.", "It started raining. / It started to rain.", "She prefers walking. / She prefers to walk."],
    },
    {
      name: "The Meaning Changes",
      definition: "A small set of verbs — stop, remember, forget, try, regret — mean something completely different depending on which form follows, so the choice really matters.",
      examples: ["I stopped smoking. (quit the habit) / I stopped to smoke. (paused in order to smoke)", "I remembered to call her. (didn't forget) / I remember calling her. (recall doing it)", "Try turning it off and on. (experiment) / Try to finish on time. (make an effort)"],
    },
  ],
  compareLeftLabel: "Same meaning either way",
  compareRightLabel: "Meaning changes completely",
  compareNote: "For most either-verbs, the choice is just a style preference. For this small handful, picking the wrong form says something completely different from what you meant.",
  comparePairs: [
    { left: "I love reading before bed. / I love to read before bed.", right: "I forgot mailing the letter. (I mailed it, then forgot) vs I forgot to mail the letter. (never mailed it)" },
    { left: "She continued working. / She continued to work.", right: "He stopped drinking coffee. vs He stopped to drink coffee." },
  ],
  guided: [
    { prompt: "It started ___ (rain) around noon. (either form works)", answer: "raining / to rain" },
    { prompt: "She prefers ___ (walk) to work. (either form works)", answer: "walking / to walk" },
    { prompt: "I love ___ (read) before bed. (either form works)", answer: "reading / to read" },
    { prompt: "I stopped ___ (eat) meat five years ago. (quit the habit)", answer: "eating" },
    { prompt: "Please remember ___ (lock) the door before you leave. (don't forget, future action)", answer: "to lock" },
    { prompt: "I'll never forget ___ (see) that view for the first time. (recalling a memory)", answer: "seeing" },
  ],
  practice: [
    "Write one sentence with an either-verb where the meaning doesn't change.",
    "Write two sentences with stop, showing both possible meanings.",
    "Write one sentence with remember or forget, and explain which meaning you intended.",
  ],
  wrapup: "Most either-verbs don't change meaning based on gerund vs infinitive. A small set — stop, remember, forget, try, regret — change meaning completely, so the choice matters.",
  nextHint: "Gerunds as subjects and after prepositions, where -ing takes on an even more noun-like role.",
};

// FORGE, Family & Home Life Track, Lesson 4: "Family Dinner Conversations"

export default {
  id: "forge-family-4",
  code: "L4",
  category: "Family & Home Life",
  situation: "Family Dinner Conversations",
  hasCallback: true,
  callback: {
    fromSituation: "Dealing with a Sibling Argument",
    words: ["blame", "apologize", "make up"],
  },
  words: [
    { word: "gather", meaning: "to come together in one place", example: "Our whole family gathers for dinner on Sundays.", question: "Does your family gather together for meals often?" },
    { word: "mention", meaning: "to say something briefly, without much detail", example: "I mentioned my test results at dinner.", question: "What's something you recently mentioned to your family?" },
    { word: "interrupt", meaning: "to start talking while someone else is still speaking", example: "My little brother always interrupts when I'm talking.", question: "Does anyone in your family interrupt a lot during conversations?" },
    { word: "update", meaning: "new information about something", example: "I gave my parents an update on my school project.", question: "What kind of updates do you usually share at dinner?" },
    { word: "tradition", meaning: "something a family does regularly, often the same way", example: "Sharing news at dinner is a tradition in my family.", question: "Is there a tradition your family follows during meals?" },
    { word: "quiet", meaning: "making little or no noise", example: "Dinner was quiet because everyone was tired.", question: "Is dinner usually quiet or lively in your house?" },
  ],
  storytellingPrompt: "Tell me about a typical dinner conversation in your family.",
};

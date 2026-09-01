// FORGE, Housing & Apartment Life Track, Lesson 3: "Meeting New Neighbors"

export default {
  id: "forge-housing-3",
  code: "L3",
  category: "Housing & Apartment Life",
  situation: "Meeting New Neighbors",
  hasCallback: true,
  callback: {
    fromSituation: "Signing a Lease",
    words: ["landlord", "utilities", "renew"],
  },
  words: [
    { word: "neighbor", meaning: "someone who lives near you", example: "My neighbor introduced herself the day I moved in.", question: "Tell me about a neighbor you've had." },
    { word: "friendly", meaning: "kind and pleasant toward others", example: "Our building is pretty friendly overall.", question: "Would you describe your neighbors as friendly?" },
    { word: "borrow", meaning: "to take something from someone with the intention of returning it", example: "I borrowed sugar from my neighbor once.", question: "Have you ever borrowed something from a neighbor?" },
    { word: "considerate", meaning: "thinking about how your actions affect other people", example: "It's nice to have considerate neighbors.", question: "What does it mean to you to be a considerate neighbor?" },
    { word: "common area", meaning: "a shared space in a building, like a lobby or courtyard", example: "We chatted in the common area.", question: "Does your building have a common area? Do you use it?" },
    { word: "keep in touch", meaning: "to stay in contact with someone", example: "We still keep in touch even after I moved.", question: "Have you ever kept in touch with a former neighbor?" },
  ],
  storytellingPrompt: "Tell me about meeting or getting to know a neighbor.",
};

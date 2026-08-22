// Question Formation -- Lesson 4: Indirect Questions

export default {
  number: 4,
  code: "4",
  title: "Indirect Questions",
  formula: "polite lead-in + statement word order (no inversion)",
  leadIn: "How would you politely ask a stranger for directions to the nearest train station?",
  teach: [
    {
      name: "Statement Word Order — No Inversion",
      definition: "Inside a polite or embedded question, the word order goes back to normal statement order — no do-support, no swapped auxiliary.",
      examples: ["Could you tell me where the station is?", "Do you know what time it starts?", "I wonder why she left early."],
    },
    {
      name: "If / Whether for Embedded Yes/No Questions",
      definition: "When embedding a yes/no question, add if or whether instead of using do-support.",
      examples: ["Could you tell me if the store is open?", "I don't know whether he's coming.", "Do you know if she called?"],
    },
  ],
  compareLeftLabel: "Direct question",
  compareRightLabel: "Indirect question",
  compareNote: "A direct question inverts the auxiliary. An indirect question drops the inversion and adds a polite lead-in instead.",
  comparePairs: [
    { left: "Where is the station?", right: "Could you tell me where the station is?" },
    { left: "Is the store open?", right: "Could you tell me if the store is open?" },
  ],
  guided: [
    { prompt: "Where is the bathroom? → Could you tell me ___?", answer: "where the bathroom is" },
    { prompt: "Does the bus stop here? → Do you know ___?", answer: "if the bus stops here" },
    { prompt: "What time does it start? → I wonder ___.", answer: "what time it starts" },
  ],
  practice: [
    "Turn a direct wh-question into a polite indirect question, using 'Could you tell me...?'.",
    "Turn a direct yes/no question into an indirect one, using if or whether.",
    "Ask a stranger for directions politely, using an indirect question.",
  ],
  wrapup: "Indirect questions use statement word order, not inversion. If or whether stands in for do-support when embedding a yes/no question.",
  nextHint: null,
};

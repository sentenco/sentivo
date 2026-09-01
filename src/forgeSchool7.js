// FORGE, School Life Track, Lesson 7: "Talking About Your Grades"

export default {
  id: "forge-school-7",
  code: "L7",
  category: "School Life",
  situation: "Talking About Your Grades",
  hasCallback: true,
  callback: {
    fromSituation: "Explaining Why You're Late or Absent",
    words: ["excuse", "makeup work", "catch up"],
  },
  words: [
    { word: "report card", meaning: "a document that shows your grades for a period of time", example: "My report card comes out next week.", question: "How do you feel when it's almost time for your report card?" },
    { word: "improve", meaning: "to get better at something", example: "I really want to improve my grade in science.", question: "Which subject would you most like to improve in?" },
    { word: "proud", meaning: "feeling good about something you or someone else achieved", example: "My parents were proud of my grades this term.", question: "What's a grade you've felt proud of?" },
    { word: "disappointed", meaning: "feeling sad because something wasn't as good as hoped", example: "I was disappointed with my score on the last quiz.", question: "Tell me about a grade that disappointed you and why." },
    { word: "average", meaning: "a normal or typical amount, not high or low", example: "My grades are pretty average this semester.", question: "How would you describe your grades right now: above average, average, or still working on it?" },
    { word: "extra credit", meaning: "additional work you can do to raise your grade", example: "I did extra credit to boost my final grade.", question: "Have you ever done extra credit? What was it for?" },
  ],
  storytellingPrompt: "Tell me about your grades this year and how you feel about them.",
};

// A2 Kids digital storybook, Book 29: "The Science Fair Project"
// Static content -- no Supabase. Seventh book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The Science Fair Project";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Nora and Finn standing proudly beside a small erupting volcano model on a table at the school gymnasium, orange 'lava' foam bubbling out, a science fair banner behind them.";

export const CHARACTERS = [
  { name: "Nora", role: "The narrator, a young girl", look: "Ponytail, safety goggles around her neck, determined and curious." },
  { name: "Finn", role: "Nora's project partner", look: "Round glasses, science-themed T-shirt, patient and detail-oriented." },
  { name: "Ms. Ortiz", role: "Nora and Finn's teacher", look: "Lab coat over regular clothes, encouraging and knowledgeable." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Choosing a Project",
    image: null,
    imageNote: "Ms. Ortiz standing at the front of the classroom explaining the science fair, a list of project ideas written on the whiteboard behind her, Nora and Finn whispering excitedly.",
    story:
      "Ms. Ortiz announces that our class will join the school science fair next month, and everyone starts talking excitedly. “You may work with a partner,” she says, and I immediately turn to Finn, my closest friend in science class. “Let's make an erupting volcano!” Finn suggests enthusiastically, and I agree right away because it sounds both exciting and a little challenging. We write our idea on the sign-up sheet, feeling proud that we chose something more interesting than a simple poster. This project already feels like the beginning of a fun adventure together.",
    questions: [
      "What event does Ms. Ortiz announce?",
      "What project does Finn suggest?",
      "How does Nora feel about the idea?",
    ],
    trueFalse: [
      { text: "Ms. Ortiz announces a school science fair.", answer: true },
      { text: "Finn suggests making a simple poster.", answer: false },
      { text: "Nora feels excited about their project idea.", answer: true },
    ],
    buildSentence: [
      { target: "Let's make an erupting volcano.", jumbled: ["make", "an", "Let's", "erupting", "volcano."] },
      { target: "I agree right away.", jumbled: ["agree", "right", "I", "away."] },
      { target: "This feels like an adventure.", jumbled: ["feels", "like", "This", "an", "adventure."] },
    ],
    mySentencePrompt: "Write or say one sentence about a project you worked on with a partner.",
    mySentenceExample: "I worked with a partner on a poster about the solar system.",
  },
  {
    number: 2,
    title: "Gathering Materials",
    image: null,
    imageNote: "Nora and Finn standing in a kitchen holding baking soda, vinegar, red food coloring, and modeling clay, checking items off a written list.",
    story:
      "After school, Finn comes to my house so we can gather everything we need. We check our list carefully: baking soda, vinegar, red food coloring, and clay for the volcano's shape. “My mom says we can use the kitchen table,” I tell Finn as we spread out the materials. We also grab an old plastic bottle to use as the volcano's core. “I think we have everything now,” Finn says, double-checking the list one more time. Looking at all our supplies laid out neatly, I feel a mix of excitement and nervousness about actually building the project tomorrow.",
    questions: [
      "What materials do they gather?",
      "Where do they plan to build the project?",
      "What will they use as the volcano's core?",
    ],
    trueFalse: [
      { text: "They gather baking soda and vinegar.", answer: true },
      { text: "They decide not to use any food coloring.", answer: false },
      { text: "They will use a plastic bottle as the core.", answer: true },
    ],
    buildSentence: [
      { target: "We check our list carefully.", jumbled: ["check", "our", "We", "list", "carefully."] },
      { target: "We have everything now.", jumbled: ["have", "everything", "We", "now."] },
      { target: "I feel excited and nervous.", jumbled: ["feel", "excited", "I", "and", "nervous."] },
    ],
    mySentencePrompt: "Write or say one sentence about materials you needed for a project.",
    mySentenceExample: "I needed glue, scissors, and paper for my art project.",
  },
  {
    number: 3,
    title: "Building the Volcano",
    image: null,
    imageNote: "Nora molding gray clay around a plastic bottle on the kitchen table while Finn smooths the sides, both focused and slightly messy with clay on their hands.",
    story:
      "On Saturday, we spend the whole afternoon shaping our volcano. I mold soft gray clay around the plastic bottle, while Finn carefully smooths the sides to make it look more realistic. “It needs to look like a real mountain,” Finn says, adding small bumps and ridges along the surface. Our hands get covered in sticky clay, but neither of us minds at all. After almost two hours of careful work, our volcano finally starts looking impressive. “This actually looks amazing,” I say proudly, admiring our creation sitting on the table between us.",
    questions: [
      "What does Nora mold around the bottle?",
      "What does Finn add to make it realistic?",
      "How long does building the volcano take?",
    ],
    trueFalse: [
      { text: "Nora molds clay around a plastic bottle.", answer: true },
      { text: "Finn refuses to help with the shaping.", answer: false },
      { text: "Building the volcano takes almost two hours.", answer: true },
    ],
    buildSentence: [
      { target: "I mold soft gray clay.", jumbled: ["mold", "soft", "I", "gray", "clay."] },
      { target: "It needs to look real.", jumbled: ["needs", "to", "It", "look", "real."] },
      { target: "This actually looks amazing.", jumbled: ["actually", "looks", "This", "amazing."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you built with your hands.",
    mySentenceExample: "I built a small birdhouse with my hands last summer.",
  },
  {
    number: 4,
    title: "First Test Fails",
    image: null,
    imageNote: "Nora and Finn peering disappointedly into the volcano's opening as a weak, watery fizz barely bubbles out instead of a dramatic eruption.",
    story:
      "Excited to see results, we pour baking soda into the volcano's opening, followed quickly by vinegar mixed with red food coloring. We wait eagerly, expecting a dramatic eruption, but instead, only a weak, watery fizz bubbles out slowly. “That's it?” Finn asks, clearly disappointed by the underwhelming result. I feel my excitement deflate a little too. “Something must be wrong with our mixture,” I say, staring at the barely-bubbling liquid. Our first attempt is definitely not the exciting eruption we imagined, and we both realize we need to figure out what went wrong.",
    questions: [
      "What do they pour into the volcano first?",
      "What happens instead of a dramatic eruption?",
      "How do Nora and Finn feel about the result?",
    ],
    trueFalse: [
      { text: "They pour baking soda then vinegar into the volcano.", answer: true },
      { text: "The eruption is huge and dramatic on the first try.", answer: false },
      { text: "Nora and Finn feel disappointed by the result.", answer: true },
    ],
    buildSentence: [
      { target: "We wait eagerly for results.", jumbled: ["wait", "eagerly", "We", "for", "results."] },
      { target: "Something must be wrong.", jumbled: ["must", "be", "Something", "wrong."] },
      { target: "We need to figure it out.", jumbled: ["need", "to", "We", "figure", "it", "out."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time something didn't work the way you expected.",
    mySentenceExample: "My drawing didn't work the way I expected the first time.",
  },
  {
    number: 5,
    title: "Figuring Out Why",
    image: null,
    imageNote: "Nora and Finn reading a science book together at the kitchen table, pointing at a diagram explaining chemical reactions, both looking thoughtful.",
    story:
      "Determined to solve the mystery, we open a science book Finn brought about chemical reactions. “Maybe we didn't use enough baking soda,” Finn suggests, reading through the explanation carefully. We learn that the reaction between baking soda and vinegar needs a proper ratio to create a strong, bubbly eruption. “We only used a small spoonful,” I realize, checking our earlier measurements. Understanding the science behind our failed experiment actually makes the problem feel less frustrating and more like an interesting puzzle we can definitely solve together with a little more research.",
    questions: [
      "What book do they read?",
      "What does Finn suggest might be the problem?",
      "How does understanding the science make Nora feel?",
    ],
    trueFalse: [
      { text: "They read a science book about chemical reactions.", answer: true },
      { text: "Finn thinks they used too much baking soda.", answer: false },
      { text: "Understanding the science makes the problem feel like a puzzle.", answer: true },
    ],
    buildSentence: [
      { target: "We open a science book.", jumbled: ["open", "a", "We", "science", "book."] },
      { target: "We need a proper ratio.", jumbled: ["need", "a", "We", "proper", "ratio."] },
      { target: "This feels like a puzzle.", jumbled: ["feels", "like", "This", "a", "puzzle."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you researched to solve a problem.",
    mySentenceExample: "I researched online to solve a problem with my computer.",
  },
  {
    number: 6,
    title: "Trying Again",
    image: null,
    imageNote: "Nora carefully measuring baking soda with a tablespoon while Finn writes numbers on a small notepad, both concentrating hard.",
    story:
      "Armed with our new knowledge, we clean out the volcano and prepare for a second attempt. This time, I carefully measure three full tablespoons of baking soda instead of just one small spoonful. Finn writes down our exact measurements on a notepad, so we can remember what worked. We pour the vinegar mixture in slowly, watching closely. The eruption is definitely bigger this time, but it still stops quickly instead of bubbling for a long time. “Better, but not perfect yet,” Finn says, and we both agree to try adjusting the recipe one more time.",
    questions: [
      "How much baking soda does Nora measure this time?",
      "What does Finn do to remember their measurements?",
      "How does the second attempt compare to the first?",
    ],
    trueFalse: [
      { text: "Nora measures three tablespoons of baking soda.", answer: true },
      { text: "Finn does not write down their measurements.", answer: false },
      { text: "The second eruption is bigger than the first.", answer: true },
    ],
    buildSentence: [
      { target: "I measure three tablespoons.", jumbled: ["measure", "three", "I", "tablespoons."] },
      { target: "We watch closely together.", jumbled: ["watch", "closely", "We", "together."] },
      { target: "This is better but not perfect.", jumbled: ["is", "better", "This", "but", "not", "perfect."] },
    ],
    mySentencePrompt: "Write or say one sentence about improving something on a second try.",
    mySentenceExample: "My drawing looked much better on my second try.",
  },
  {
    number: 7,
    title: "A Breakthrough",
    image: null,
    imageNote: "A bright orange foam eruption bursting dramatically out of the volcano model, Nora and Finn jumping back with delighted, surprised expressions.",
    story:
      "For our third attempt, we add a small amount of dish soap to make the reaction foamier and longer-lasting, an idea Finn found in another book. We measure everything precisely and pour the mixture in together. This time, bright orange foam erupts dramatically out of the volcano, bubbling and flowing down the sides for almost a full minute! “YES! We did it!” I shout, jumping up and down excitedly. Finn high-fives me with a huge grin. After three attempts and lots of patience, we finally created the impressive eruption we had originally imagined.",
    questions: [
      "What new ingredient do they add this time?",
      "What happens with the third attempt?",
      "How do Nora and Finn react?",
    ],
    trueFalse: [
      { text: "They add dish soap to the mixture.", answer: true },
      { text: "The third eruption fails completely.", answer: false },
      { text: "Nora and Finn celebrate excitedly.", answer: true },
    ],
    buildSentence: [
      { target: "We did it together!", jumbled: ["did", "it", "We", "together!"] },
      { target: "Foam erupts dramatically out.", jumbled: ["erupts", "dramatically", "Foam", "out."] },
      { target: "We finally created it.", jumbled: ["finally", "created", "We", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you finally succeeded after trying many times.",
    mySentenceExample: "I finally succeeded at riding a bike after trying many times.",
  },
  {
    number: 8,
    title: "Practicing the Presentation",
    image: null,
    imageNote: "Nora and Finn standing in front of a poster board covered in diagrams and notes, practicing their presentation in Nora's living room.",
    story:
      "With our volcano finally working, we shift our focus to preparing what we will say at the fair. We make a colorful poster explaining the chemical reaction, complete with diagrams and simple explanations. “We should explain why our first two attempts failed too,” Finn suggests, “Judges might like knowing we learned from mistakes.” We practice our presentation multiple times in my living room, taking turns speaking clearly and confidently. By our fifth practice round, we finally feel ready and comfortable explaining every single detail about our exciting, if slightly messy, science journey.",
    questions: [
      "What do they make to explain their project?",
      "What does Finn suggest including?",
      "How many times do they practice?",
    ],
    trueFalse: [
      { text: "They make a poster with diagrams.", answer: true },
      { text: "Finn suggests hiding their failed attempts.", answer: false },
      { text: "They practice their presentation five times.", answer: true },
    ],
    buildSentence: [
      { target: "We make a colorful poster.", jumbled: ["make", "a", "We", "colorful", "poster."] },
      { target: "We learned from our mistakes.", jumbled: ["learned", "from", "We", "our", "mistakes."] },
      { target: "We feel ready and comfortable.", jumbled: ["feel", "ready", "We", "and", "comfortable."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing to explain something to other people.",
    mySentenceExample: "I practiced explaining my project before showing it to my class.",
  },
  {
    number: 9,
    title: "Science Fair Day",
    image: null,
    imageNote: "Nora and Finn standing beside their volcano table in a busy school gymnasium, presenting to a group of interested judges and classmates.",
    story:
      "The school gymnasium buzzes with excitement as families and judges walk between colorful project tables. My stomach feels full of nervous butterflies as our turn approaches. When the judges arrive at our table, Finn and I take deep breaths and begin explaining our project confidently, just like we practiced. We even demonstrate the eruption live, and the judges' eyes widen with delighted surprise as orange foam bubbles impressively down the sides. “Excellent explanation of the chemistry, and great persistence,” one judge says, writing notes on her clipboard. I feel incredibly proud of everything we accomplished together.",
    questions: [
      "How does Nora feel before the judges arrive?",
      "What do Nora and Finn demonstrate live?",
      "What does the judge say about their project?",
    ],
    trueFalse: [
      { text: "Nora feels nervous butterflies before the judges arrive.", answer: true },
      { text: "They refuse to demonstrate the eruption.", answer: false },
      { text: "The judge praises their persistence.", answer: true },
    ],
    buildSentence: [
      { target: "My stomach feels nervous.", jumbled: ["feels", "nervous", "My", "stomach."] },
      { target: "We demonstrate the eruption live.", jumbled: ["demonstrate", "the", "We", "eruption", "live."] },
      { target: "I feel incredibly proud.", jumbled: ["feel", "incredibly", "I", "proud."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you presented something to a group.",
    mySentenceExample: "I presented my book report to my whole class.",
  },
  {
    number: 10,
    title: "Ribbon and Reflection",
    image: null,
    imageNote: "Nora and Finn holding a blue 'Most Improved' ribbon together, both smiling proudly beside their volcano project, parents clapping in the background.",
    story:
      "At the end of the fair, the principal announces the winners, and my heart pounds with anticipation. We don't win first place, but we receive a special ribbon for “Most Improved Project” after judges heard about our three attempts. Holding the blue ribbon together, Finn and I feel just as proud as if we had won everything. “We didn't give up, and that's what really matters,” Finn says, and I completely agree with him. This whole experience taught me that failing at first isn't the end of a project, it's simply part of the process toward something great.",
    questions: [
      "What ribbon do Nora and Finn receive?",
      "Why do they receive this ribbon?",
      "What lesson does Nora learn from the experience?",
    ],
    trueFalse: [
      { text: "They win first place in the fair.", answer: false },
      { text: "They receive a 'Most Improved' ribbon.", answer: true },
      { text: "Nora learns that failing at first is part of the process.", answer: true },
    ],
    buildSentence: [
      { target: "We feel proud together.", jumbled: ["feel", "proud", "We", "together."] },
      { target: "We didn't give up.", jumbled: ["didn't", "give", "We", "up."] },
      { target: "This is part of the process.", jumbled: ["is", "part", "This", "of", "the", "process."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned from not giving up.",
    mySentenceExample: "I learned that practicing every day helps me improve at soccer.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

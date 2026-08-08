// A1 Kids digital storybook, Book 15: "My Best Friend and Me"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// and storybookData14.js. Third book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead.

export const STORYBOOK_TITLE = "My Best Friend and Me";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ivy and Oscar sitting together on the school playground, both wearing matching friendship bracelets and smiling, swings visible in the background.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ivy", role: "The narrator, a young girl", look: "Long dark hair with a headband, purple dress, warm and thoughtful expression." },
  { name: "Oscar", role: "Ivy's best friend and classmate", look: "Short brown hair, blue cap, cheerful and a little shy." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Best Friend Oscar",
    image: null,
    imageNote: "Ivy and Oscar sitting next to each other at their classroom desks, both smiling and waving good morning, a blue cap visible on Oscar.",
    story:
      "Oscar is my best friend at school. We sit next to each other in class every day. Oscar has short brown hair and always wears a blue cap. Every morning, we wave and say, “Good morning!” to each other. At recess, we play together on the swings. Oscar tells funny jokes that always make me laugh. We share our favorite stories about our weekends. I feel happy when Oscar is with me at school. Having a best friend makes every day more fun.",
    questions: [
      "Who is Ivy's best friend?",
      "What do they do every morning?",
      "Where do they play at recess?",
    ],
    trueFalse: [
      { text: "Oscar is Ivy's best friend.", answer: true },
      { text: "They never talk in the morning.", answer: false },
      { text: "They play on the swings at recess.", answer: true },
    ],
    buildSentence: [
      { target: "Oscar is my friend.", jumbled: ["is", "my", "Oscar", "friend."] },
      { target: "Oscar tells funny jokes.", jumbled: ["tells", "funny", "Oscar", "jokes."] },
      { target: "We play on the swings.", jumbled: ["play", "on", "We", "the", "swings."] },
    ],
    mySentencePrompt: "Write or say one sentence about your best friend.",
    mySentenceExample: "My best friend makes me laugh.",
  },
  {
    number: 2,
    title: "Sharing Our Snacks",
    image: null,
    imageNote: "Ivy and Oscar sitting at a small round lunch table, Ivy holding half an apple out to Oscar, his box of orange crackers open between them.",
    story:
      "At lunchtime, I open my lunch box and see a red apple. Oscar opens his lunch box and has orange crackers. “Do you want to share?” Oscar asks with a smile. I give him half of my apple, and he gives me some crackers. We sit together at the small round table. Oscar says my apple is sweet and juicy. I say his crackers are crunchy and tasty. We laugh and talk about our favorite foods. Sharing snacks with Oscar makes lunchtime my favorite part of the day.",
    questions: [
      "What does Ivy have for lunch?",
      "What does Oscar have for lunch?",
      "What do they do with their food?",
    ],
    trueFalse: [
      { text: "Ivy has an apple for lunch.", answer: true },
      { text: "Oscar has cookies for lunch.", answer: false },
      { text: "They share their food together.", answer: true },
    ],
    buildSentence: [
      { target: "We share our snacks.", jumbled: ["share", "our", "We", "snacks."] },
      { target: "Oscar gives me crackers.", jumbled: ["gives", "me", "Oscar", "crackers."] },
      { target: "I give him half my apple.", jumbled: ["give", "him", "I", "half", "my", "apple."] },
    ],
    mySentencePrompt: "Write or say one sentence about sharing something.",
    mySentenceExample: "I share my lunch with my friend.",
  },
  {
    number: 3,
    title: "Building a Blanket Fort",
    image: null,
    imageNote: "Ivy and Oscar inside a cozy blanket fort made of blankets draped over chairs, a flashlight glowing between them, Ivy's little brother peeking inside.",
    story:
      "After school, Oscar comes to my house to play. We decide to build a big fort in my room. We use soft blankets and put them over two chairs. Oscar holds the blanket while I tuck in the sides. We add pillows inside to make it soft and cozy. Inside the fort, we use a flashlight because it is dark. We tell stories and giggle inside our secret fort. My little brother wants to come in, so we let him join. Building a fort with Oscar is one of my favorite games.",
    questions: [
      "What do they build in Ivy's room?",
      "What do they use to build the fort?",
      "Who wants to join them?",
    ],
    trueFalse: [
      { text: "They build a fort.", answer: true },
      { text: "They use blankets and pillows.", answer: true },
      { text: "No one else wants to join them.", answer: false },
    ],
    buildSentence: [
      { target: "We build a fort.", jumbled: ["build", "a", "We", "fort."] },
      { target: "We use a flashlight.", jumbled: ["use", "a", "We", "flashlight."] },
      { target: "We tell stories inside.", jumbled: ["tell", "stories", "We", "inside."] },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like to play indoors.",
    mySentenceExample: "I like to build a fort with blankets.",
  },
  {
    number: 4,
    title: "A Small Disagreement",
    image: null,
    imageNote: "Ivy walking away with crossed arms on the playground, Oscar sitting alone on a bench looking sad, a red ball on the ground between them.",
    story:
      "At recess, Oscar and I both want to play with the same red ball. “I had it first!” I say loudly. “No, I saw it first!” Oscar says back. We both feel upset, and we do not want to share. I cross my arms and walk away from Oscar. Oscar sits alone on the bench, looking sad. I think about how much fun we usually have together. Playing alone does not feel as fun as playing with Oscar. I realize that our friendship is more important than one ball.",
    questions: [
      "What do Ivy and Oscar both want?",
      "How do they feel?",
      "What does Ivy realize?",
    ],
    trueFalse: [
      { text: "They both want the same ball.", answer: true },
      { text: "They feel happy about the fight.", answer: false },
      { text: "Ivy realizes their friendship is important.", answer: true },
    ],
    buildSentence: [
      { target: "We both want the ball.", jumbled: ["both", "want", "We", "the", "ball."] },
      { target: "I walk away from Oscar.", jumbled: ["walk", "away", "I", "from", "Oscar."] },
      { target: "Oscar sits alone on the bench.", jumbled: ["sits", "alone", "Oscar", "on", "the", "bench."] },
    ],
    mySentencePrompt: "Write or say one sentence about a disagreement with a friend.",
    mySentenceExample: "I feel upset when my friend and I disagree.",
  },
  {
    number: 5,
    title: "Saying Sorry",
    image: null,
    imageNote: "Ivy sitting down next to Oscar on the same playground bench, both smiling now and about to share the red ball again.",
    story:
      "The next day, I see Oscar sitting alone at recess again. I walk over slowly and sit down next to him. “I'm sorry about the ball yesterday,” I say quietly. Oscar looks up and says, “I'm sorry too, Ivy.” We both smile, and I feel much better inside. “Let's share the ball today,” Oscar says kindly. We take turns throwing and catching the ball together. Saying sorry was hard, but it made our friendship strong again. I learn that good friends can fix their problems together.",
    questions: [
      "Where does Ivy find Oscar?",
      "What does Ivy say to Oscar?",
      "What do they do with the ball this time?",
    ],
    trueFalse: [
      { text: "Ivy finds Oscar sitting alone.", answer: true },
      { text: "Ivy does not say sorry.", answer: false },
      { text: "They take turns with the ball.", answer: true },
    ],
    buildSentence: [
      { target: "I say sorry to Oscar.", jumbled: ["say", "sorry", "I", "to", "Oscar."] },
      { target: "We share the ball.", jumbled: ["share", "the", "We", "ball."] },
      { target: "Good friends fix their problems.", jumbled: ["fix", "their", "Good", "friends", "problems."] },
    ],
    mySentencePrompt: "Write or say one sentence about saying sorry.",
    mySentenceExample: "I say sorry when I make a mistake.",
  },
  {
    number: 6,
    title: "Drawing Pictures Together",
    image: null,
    imageNote: "Ivy and Oscar sitting side by side at an art table, Ivy holding a drawing of a tall tree, Oscar holding a drawing of a red race car, crayons scattered between them.",
    story:
      "During art class, Oscar and I sit at the same table. We each get a big piece of paper and colorful crayons. I draw a picture of a tall, green tree with birds. Oscar draws a picture of a fast, red race car. We show each other our drawings and give kind compliments. “I love your tree, Ivy!” Oscar says with a big smile. “Your car looks so fast, Oscar!” I say happily. We decide to trade drawings and keep them forever. Art class is more fun when I create with my best friend.",
    questions: [
      "What does Ivy draw?",
      "What does Oscar draw?",
      "What do they decide to do with their drawings?",
    ],
    trueFalse: [
      { text: "Ivy draws a tree.", answer: true },
      { text: "Oscar draws a boat.", answer: false },
      { text: "They decide to trade their drawings.", answer: true },
    ],
    buildSentence: [
      { target: "I draw a tree.", jumbled: ["draw", "a", "I", "tree."] },
      { target: "Oscar draws a car.", jumbled: ["draws", "a", "Oscar", "car."] },
      { target: "We trade our drawings.", jumbled: ["trade", "our", "We", "drawings."] },
    ],
    mySentencePrompt: "Write or say one sentence about drawing or art.",
    mySentenceExample: "I like to draw pictures of animals.",
  },
  {
    number: 7,
    title: "A Rainy Day Indoors",
    image: null,
    imageNote: "Ivy and Oscar sitting on a classroom rug working together on a large rainbow-colored jigsaw puzzle, rain visible through the window behind them.",
    story:
      "Today, it rains hard, so we cannot play outside at recess. Oscar and I stay inside the classroom instead. We choose a puzzle from the shelf and sit on the rug. The puzzle has one hundred pieces of a big rainbow. We work together, finding pieces that fit just right. Oscar is very good at finding the corner pieces. I am good at finding the pieces with bright colors. After a while, we finish the whole puzzle together. Even on a rainy day, playing with Oscar is always fun.",
    questions: [
      "Why do they stay inside?",
      "What do they choose to do?",
      "How many pieces does the puzzle have?",
    ],
    trueFalse: [
      { text: "It rains, so they stay inside.", answer: true },
      { text: "They choose to read books.", answer: false },
      { text: "The puzzle has one hundred pieces.", answer: true },
    ],
    buildSentence: [
      { target: "It rains hard today.", jumbled: ["rains", "hard", "It", "today."] },
      { target: "We choose a puzzle.", jumbled: ["choose", "a", "We", "puzzle."] },
      { target: "We finish the puzzle together.", jumbled: ["finish", "the", "We", "puzzle", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day activity.",
    mySentenceExample: "I like to do puzzles on rainy days.",
  },
  {
    number: 8,
    title: "Helping Oscar with Homework",
    image: null,
    imageNote: "Ivy and Oscar sitting together at a table after school, Ivy pointing at Oscar's math paper, both smiling as he solves a problem correctly.",
    story:
      "After school, Oscar looks worried about his math homework. “I don't understand these numbers,” he says softly. I sit next to him and look at his paper. “Let's do it together,” I say with a smile. I show him how to add the numbers step by step. Oscar tries the next problem, and he gets it right! “You did it, Oscar!” I say, and we both cheer happily. Oscar says, “Thank you for helping me, Ivy.” Helping my best friend makes me feel proud and happy.",
    questions: [
      "What is Oscar worried about?",
      "What does Ivy do to help?",
      "How does Oscar feel after getting the answer right?",
    ],
    trueFalse: [
      { text: "Oscar is worried about math homework.", answer: true },
      { text: "Ivy ignores Oscar's problem.", answer: false },
      { text: "Oscar feels happy after getting it right.", answer: true },
    ],
    buildSentence: [
      { target: "Oscar looks worried.", jumbled: ["looks", "worried.", "Oscar"] },
      { target: "We do it together.", jumbled: ["do", "it", "We", "together."] },
      { target: "I help my best friend.", jumbled: ["help", "my", "I", "best", "friend."] },
    ],
    mySentencePrompt: "Write or say one sentence about helping a friend.",
    mySentenceExample: "I help my friend with homework.",
  },
  {
    number: 9,
    title: "A Surprise Friendship Bracelet",
    image: null,
    imageNote: "Oscar shyly handing Ivy a small box before class, a colorful blue and yellow friendship bracelet visible inside, both smiling in the school hallway.",
    story:
      "One morning, Oscar hands me a small box before class. “This is for you,” he says with a shy smile. Inside the box, I find a colorful friendship bracelet. It has blue and yellow strings woven together carefully. “I made it myself,” Oscar says proudly. I put the bracelet on my wrist right away. “I love it, Oscar! Thank you so much!” I say happily. The next day, I give Oscar a matching bracelet I made too. Now we both wear our friendship bracelets every single day.",
    questions: [
      "What does Oscar give Ivy?",
      "What colors are the bracelet?",
      "What does Ivy give Oscar the next day?",
    ],
    trueFalse: [
      { text: "Oscar gives Ivy a bracelet.", answer: true },
      { text: "The bracelet is only black.", answer: false },
      { text: "Ivy gives Oscar a matching bracelet.", answer: true },
    ],
    buildSentence: [
      { target: "Oscar gives me a gift.", jumbled: ["gives", "me", "Oscar", "a", "gift."] },
      { target: "I put on the bracelet.", jumbled: ["put", "on", "I", "the", "bracelet."] },
      { target: "We wear our bracelets every day.", jumbled: ["wear", "our", "We", "bracelets", "every", "day."] },
    ],
    mySentencePrompt: "Write or say one sentence about a gift you gave or received.",
    mySentenceExample: "I gave my friend a small gift.",
  },
  {
    number: 10,
    title: "Best Friends Forever",
    image: null,
    imageNote: "Ivy and Oscar standing together on the last day of school, both wearing their friendship bracelets, waving goodbye with big smiles under a summer sky.",
    story:
      "It has been a whole school year since Oscar and I became friends. We shared snacks, built forts, and fixed a small fight together. We drew pictures, did puzzles, and helped each other with homework. Now summer break is here, and we will not see each other every day. “I will miss you, Oscar,” I say with a small tear in my eye. “Me too, Ivy, but we can still play sometimes,” Oscar says kindly. We promise to call each other and meet at the park. I look at my friendship bracelet and smile with happiness. Oscar is not just my classmate. He is my best friend forever.",
    questions: [
      "How long have Ivy and Oscar been friends?",
      "What do they promise to do?",
      "What does Ivy look at and smile?",
    ],
    trueFalse: [
      { text: "They have been friends for a school year.", answer: true },
      { text: "They promise to never talk again.", answer: false },
      { text: "Ivy smiles at her friendship bracelet.", answer: true },
    ],
    buildSentence: [
      { target: "I will miss Oscar.", jumbled: ["will", "miss", "I", "Oscar."] },
      { target: "We promise to call each other.", jumbled: ["promise", "to", "We", "call", "each", "other."] },
      { target: "Oscar is my best friend forever.", jumbled: ["is", "my", "Oscar", "best", "friend", "forever."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend you will always remember.",
    mySentenceExample: "My best friend will always be special to me.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A1 Teens digital storybook, Book 3: "Siblings and Neighbors at Home"
// Static content -- no Supabase, mirrors the pattern in storybookData2.js.
import coverImg from "./assets/storybook3/cover.jpeg";

export const STORYBOOK_TITLE = "Siblings and Neighbors at Home";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Lena sitting at the family breakfast table on a sunny Saturday morning, smiling at her younger brother Marco as sunlight comes through the window.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Lena", role: "The narrator, an older sister", look: "Long dark hair in a loose ponytail, soft yellow house dress or T-shirt, warm friendly expression." },
  { name: "Marco", role: "Lena's younger brother", look: "Short black hair, striped T-shirt, energetic and expressive, calls Lena \"ate Lena.\"" },
  { name: "Bea", role: "Lena's neighbor, becomes a recurring family friend", look: "Curly brown hair with a headband, light green cardigan, gentle and helpful." },
  { name: "Nina", role: "Lena's cousin, visits from another town", look: "Straight hair with a bright clip, floral top, lively and talkative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Quiet Morning at Home",
    image: null,
    imageNote: "Lena walking out of her room into a sunlit kitchen where Marco and their mother are already at the breakfast table with bread, eggs, and juice.",
    story:
      "It is Saturday morning, and I wake up a little late in my room. Sunlight comes through the window and makes the floor warm and bright. My younger brother Marco is already in the kitchen with our mother. I wash my face, fix my bed, and walk out of my room slowly. On the table, I see bread, eggs, and a glass of juice for breakfast. Marco smiles and says, “Good morning, ate Lena!” I sit with my family, eat my breakfast, and feel calm and happy at home.",
    questions: [
      "What day is it in the story?",
      "Who is already in the kitchen?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "It is Saturday morning.", answer: true },
      { text: "Marco is still sleeping in his room.", answer: false },
      { text: "Lena feels calm and happy at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "It is Saturday morning, and I wake up a little late in my room.",
        jumbled: ["wake", "It", "and", "in", "Saturday", "room.", "little", "my", "late", "morning,", "a", "is", "I", "up"],
      },
      {
        target: "On the table, I see bread, eggs, and a glass of juice for breakfast.",
        jumbled: ["eggs,", "the", "breakfast.", "a", "On", "I", "bread,", "glass", "see", "and", "table,", "of", "juice", "for"],
      },
      {
        target: "I sit with my family and eat my breakfast.",
        jumbled: ["I", "my", "family", "eat", "my", "and", "breakfast.", "with", "sit"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning at home.",
    mySentenceExample: "On Saturday morning, I eat breakfast with my family.",
  },
  {
    number: 2,
    title: "Our Neighbor at the Gate",
    image: null,
    imageNote: "Lena opening the gate for her neighbor Bea, who holds a small paper bag of banana bread, while Marco looks at the bag with big eyes beside Lena.",
    story:
      "After breakfast, I hear someone call my name outside the house. I walk to the gate and see my neighbor, Bea, with a small paper bag in her hand. She says her mother made banana bread and wants to share some with us. Marco stands beside me and looks at the bag with big eyes. I laugh and open the gate for Bea. We talk for a few minutes about school and the weekend. When I take the paper bag and thank her, I feel glad to have a kind neighbor.",
    questions: [
      "Who calls Lena outside the house?",
      "What is in Bea's paper bag?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "Bea is Lena's neighbor.", answer: true },
      { text: "Bea brings soup in the paper bag.", answer: false },
      { text: "Lena feels glad to have a kind neighbor.", answer: true },
    ],
    buildSentence: [
      {
        target: "I walk to the gate and see my neighbor, Bea.",
        jumbled: ["I", "gate", "walk", "see", "my", "to", "and", "Bea.", "neighbor,", "the"],
      },
      {
        target: "She says her mother made banana bread and wants to share some with us.",
        jumbled: ["says", "made", "us.", "some", "mother", "share", "to", "wants", "banana", "with", "She", "and", "her", "bread"],
      },
      {
        target: "I feel glad to have a kind neighbor.",
        jumbled: ["a", "to", "have", "glad", "I", "kind", "neighbor.", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your neighbor.",
    mySentenceExample: "My neighbor is kind and friendly.",
  },
  {
    number: 3,
    title: "A Snack in the Kitchen",
    image: null,
    imageNote: "Lena, Marco, and Bea sitting together at the kitchen table with a plate of sliced banana bread and glasses of cold water, all smiling and eating.",
    story:
      "In the afternoon, Marco and I go to the kitchen because we feel hungry. Our mother puts the banana bread on a plate and cuts it into small pieces. The bread smells sweet, and the whole kitchen feels warm. Bea comes in with two glasses of cold water and sits with us at the table. Marco eats quickly and smiles with food on his lips. We laugh, eat our snack, and talk about our favorite foods. When the plates are empty, the kitchen feels full of happy voices.",
    questions: [
      "Why do Lena and Marco go to the kitchen?",
      "What does their mother cut into small pieces?",
      "What do they talk about while eating?",
    ],
    trueFalse: [
      { text: "Lena and Marco go to the kitchen because they are sleepy.", answer: false },
      { text: "Their mother cuts the banana bread into small pieces.", answer: true },
      { text: "They talk about their favorite foods.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the afternoon, Marco and I go to the kitchen because we feel hungry.",
        jumbled: ["go", "Marco", "In", "we", "because", "kitchen", "the", "afternoon,", "feel", "hungry.", "and", "I", "to"],
      },
      {
        target: "The bread smells sweet, and the whole kitchen feels warm.",
        jumbled: ["feels", "bread", "whole", "and", "The", "warm.", "kitchen", "sweet,", "smells", "the"],
      },
      {
        target: "We laugh, eat our snack, and talk about our favorite foods.",
        jumbled: ["talk", "We", "eat", "our", "snack,", "favorite", "and", "foods.", "laugh,", "about", "our"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite snack.",
    mySentenceExample: "My favorite snack is sweet bread and juice.",
  },
  {
    number: 4,
    title: "Homework at the Table",
    image: null,
    imageNote: "Marco sitting at the dining table with his notebook and pencil, Lena beside him reading his questions, Bea checking spelling on the page.",
    story:
      "Later that day, Marco brings his notebook to the dining table and looks at me. He says, “Ate Lena, can you help me with my homework?” I sit beside him and read the questions slowly. Bea stays with us and checks the spelling on one page. Marco writes the answers with his pencil and asks us small questions. After a few minutes, he finishes the last line and puts down the pencil. He smiles at us, and I feel proud because we help him do his work.",
    questions: [
      "Who asks for help with homework?",
      "Where do they sit to do the homework?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "Marco asks Lena to help him.", answer: true },
      { text: "Bea leaves and does not stay with them.", answer: false },
      { text: "Lena feels proud because they help Marco.", answer: true },
    ],
    buildSentence: [
      {
        target: "He says, “Ate Lena, can you help me with my homework?”",
        jumbled: ["with", "homework?”", "can", "me", "says,", "my", "“Ate", "you", "Lena,", "He", "help"],
      },
      {
        target: "I sit beside him and read the questions slowly.",
        jumbled: ["slowly.", "questions", "him", "and", "sit", "beside", "read", "the", "I"],
      },
      {
        target: "He smiles at us, and I feel proud.",
        jumbled: ["proud.", "at", "and", "smiles", "I", "feel", "He", "us,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about homework at home.",
    mySentenceExample: "I do my homework at the table after lunch.",
  },
  {
    number: 5,
    title: "A Visit from Cousin Nina",
    image: null,
    imageNote: "Nina at the front door hugging or greeting Marco with a big smile, holding a small box of cookies, while Lena and Bea watch from the living room.",
    story:
      "On Sunday morning, our cousin Nina comes to visit our house. She lives in another town, so we do not see her every week. Marco runs to the door and says, “Hi, Nina!” with a big smile. Nina brings a small box of cookies for our family. Bea is still at our house, so she meets Nina for the first time. We sit in the living room, talk about school, and drink cold juice together. When Nina laughs at Marco's funny story, the room feels bright and full of life.",
    questions: [
      "Who visits the house on Sunday morning?",
      "What does Nina bring for the family?",
      "Where do they sit and talk?",
    ],
    trueFalse: [
      { text: "Nina lives in the same house as Lena.", answer: false },
      { text: "Nina brings cookies for the family.", answer: true },
      { text: "They sit in the living room and talk.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Sunday morning, our cousin Nina comes to visit our house.",
        jumbled: ["house.", "our", "cousin", "comes", "Nina", "On", "to", "visit", "Sunday", "our", "morning,"],
      },
      {
        target: "Nina brings a small box of cookies for our family.",
        jumbled: ["small", "for", "Nina", "of", "brings", "our", "family.", "a", "box", "cookies"],
      },
      {
        target: "We sit in the living room, talk about school, and drink cold juice together.",
        jumbled: ["the", "about", "together.", "room,", "and", "talk", "cold", "school,", "We", "in", "juice", "sit", "living", "drink"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your cousin.",
    mySentenceExample: "My cousin visits us on the weekend.",
  },
  {
    number: 6,
    title: "Cleaning the Living Room",
    image: null,
    imageNote: "Lena, Marco, Nina, and Bea all cleaning the living room together -- Marco stacking books on a shelf, Nina folding a blanket, Bea wiping a table, Lena fixing pillows.",
    story:
      "Before lunch, our mother asks us to help clean the living room. Marco picks up the books on the floor and puts them on the shelf. Nina folds a blanket and places it on the sofa. Bea wipes the small table with a cloth and hums a happy song. I fix the pillows and open the window for fresh air. The room looks messy at first, but little by little it becomes clean and bright. When we finish and sit down to look at the room, I feel happy because we did the work together.",
    questions: [
      "What does their mother ask them to clean?",
      "What does Marco put on the shelf?",
      "How does Lena feel when they finish?",
    ],
    trueFalse: [
      { text: "They clean the kitchen before lunch.", answer: false },
      { text: "Nina folds a blanket and puts it on the sofa.", answer: true },
      { text: "Lena feels happy because they worked together.", answer: true },
    ],
    buildSentence: [
      {
        target: "Before lunch, our mother asks us to help clean the living room.",
        jumbled: ["Before", "asks", "the", "our", "lunch,", "us", "clean", "room.", "mother", "help", "to", "living"],
      },
      {
        target: "The room looks messy at first, but it becomes clean.",
        jumbled: ["at", "The", "but", "becomes", "it", "clean.", "looks", "messy", "room", "first,"],
      },
      {
        target: "I feel happy because we did the work together.",
        jumbled: ["we", "happy", "I", "feel", "did", "together.", "the", "because", "work"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about cleaning at home.",
    mySentenceExample: "I clean my room on the weekend.",
  },
  {
    number: 7,
    title: "A Rainy Afternoon Game",
    image: null,
    imageNote: "Lena, Marco, Nina, and Bea sitting around the table playing a board game together, rain visible through the window behind them, Marco clapping excitedly.",
    story:
      "In the afternoon, dark clouds cover the sky and the rain starts to fall. We cannot go outside, so Marco brings a board game to the table. Nina reads the game rules, and Bea laughs at the funny pictures on the box. I move my game piece carefully and try to win the first round. Marco claps when he gets a lucky number and jumps in his chair. The rain makes a soft sound on the roof while we play together. When the game ends, I do not feel bored because the rainy afternoon becomes fun.",
    questions: [
      "Why can they not go outside?",
      "What does Marco bring to the table?",
      "How does Lena feel when the game ends?",
    ],
    trueFalse: [
      { text: "It starts to rain in the afternoon.", answer: true },
      { text: "They go to the park to play.", answer: false },
      { text: "Lena does not feel bored at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "We cannot go outside, so Marco brings a board game to the table.",
        jumbled: ["a", "outside,", "go", "the", "table.", "so", "board", "Marco", "brings", "cannot", "to", "game", "We"],
      },
      {
        target: "The rain makes a soft sound on the roof while we play together.",
        jumbled: ["The", "together.", "while", "roof", "sound", "on", "play", "rain", "we", "soft", "makes", "a", "the"],
      },
      {
        target: "I do not feel bored because the game is fun.",
        jumbled: ["not", "do", "is", "bored", "I", "game", "feel", "fun.", "because", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day at home.",
    mySentenceExample: "On rainy days, I play games with my family.",
  },
  {
    number: 8,
    title: "Dinner with the Family",
    image: null,
    imageNote: "The whole family and Bea sitting around the dinner table -- father just home from work, dishes of fish, rice, and vegetables, everyone talking and passing food.",
    story:
      "In the evening, our father comes home from work and smiles when he sees everyone together. The table is ready, and the smell of fish, rice, and vegetables fills the room. Marco tells Father about the board game, and Nina talks about her town. Bea thanks our parents for the food and sits quietly beside me. We eat dinner, pass the dishes, and listen to one another. Father says, “It is nice to have a full table tonight.” As I look around at my family and friends, I feel warm inside and very thankful.",
    questions: [
      "Who comes home in the evening?",
      "What food smells fill the room?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "Their father comes home from work.", answer: true },
      { text: "Bea does not eat dinner with them.", answer: false },
      { text: "Lena feels thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our father comes home from work and smiles at us.",
        jumbled: ["comes", "us.", "Our", "smiles", "from", "and", "at", "home", "father", "work"],
      },
      {
        target: "We eat dinner, pass the dishes, and listen to one another.",
        jumbled: ["dishes,", "one", "another.", "dinner,", "We", "to", "and", "the", "listen", "eat", "pass"],
      },
      {
        target: "I feel warm inside and very thankful.",
        jumbled: ["very", "and", "I", "thankful.", "inside", "warm", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about dinner with your family.",
    mySentenceExample: "I eat dinner with my family every night.",
  },
  {
    number: 9,
    title: "A Small Problem with the Lamp",
    image: null,
    imageNote: "The living room lamp dark, father checking it while Nina holds a chair and Lena holds a small box with a new light bulb, Bea standing near a worried-looking Marco.",
    story:
      "That night, the lamp in the living room suddenly stops working. The room becomes darker, and Marco looks worried for a moment. Our father checks the lamp and says it needs a new light bulb. Nina brings a chair, and I hold the small box with the new bulb inside. Bea stands near Marco and tells him it will be okay soon. After a few minutes, the lamp shines again and fills the room with light. We all clap, and I feel glad because the problem is small and easy to fix together.",
    questions: [
      "What stops working in the living room?",
      "What does the lamp need?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "The lamp stops working at night.", answer: true },
      { text: "The father says the lamp needs a new chair.", answer: false },
      { text: "Lena feels glad because they fix the problem together.", answer: true },
    ],
    buildSentence: [
      {
        target: "That night, the lamp in the living room suddenly stops working.",
        jumbled: ["That", "in", "stops", "the", "working.", "the", "night,", "lamp", "living", "suddenly", "room"],
      },
      {
        target: "Our father checks the lamp and says it needs a new light bulb.",
        jumbled: ["says", "father", "checks", "it", "needs", "bulb.", "the", "and", "a", "light", "new", "Our", "lamp"],
      },
      {
        target: "After a few minutes, the lamp shines again and fills the room with light.",
        jumbled: ["again", "the", "fills", "room", "After", "shines", "lamp", "with", "light.", "and", "a", "few", "the", "minutes,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about fixing something at home.",
    mySentenceExample: "My father fixes the lamp at home.",
  },
  {
    number: 10,
    title: "A Happy Weekend at Home",
    image: null,
    imageNote: "Lena sitting near the living room window at sunset, looking peaceful, with the clean room, empty plates, and shelf of games visible -- Nina and Marco hugging goodbye at the gate in the background.",
    story:
      "On Sunday evening, the house feels quiet after our busy weekend together. Nina gets ready to go home, and Marco gives her a quick hug at the gate. Bea waves goodbye and says she will visit again next weekend. I go back inside and look at the clean living room, the empty plates, and the games on the shelf. The house looks simple, but it feels full of good memories from the weekend. I sit near the window and think about the food, the laughter, and the time with the people around me. As the sun goes down, I feel peaceful because home is warm when love and kindness are inside it.",
    questions: [
      "Who gets ready to go home on Sunday evening?",
      "What does Bea say at the gate?",
      "How does Lena feel at the end?",
    ],
    trueFalse: [
      { text: "Nina stays at the house forever.", answer: false },
      { text: "Bea says she will visit again next weekend.", answer: true },
      { text: "Lena feels peaceful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Sunday evening, the house feels quiet after our busy weekend together.",
        jumbled: ["our", "feels", "Sunday", "the", "weekend", "quiet", "house", "busy", "after", "On", "evening,", "together."],
      },
      {
        target: "The house looks simple, but it feels full of good memories from the weekend.",
        jumbled: ["weekend.", "looks", "of", "but", "the", "simple,", "memories", "good", "feels", "it", "house", "full", "The", "from"],
      },
      {
        target: "I feel peaceful because home is warm and full of love.",
        jumbled: ["warm", "peaceful", "home", "because", "is", "of", "and", "love.", "I", "feel", "full"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your home.",
    mySentenceExample: "My home feels warm and peaceful at night.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A1 Adults digital storybook, Book 12: "Food Brings Me Joy"
// Static content -- no Supabase, mirrors the pattern in storybookData11.js.
// Like Books 7-11, this narrator is an adult and stays gender-neutral
// throughout, matching the source text. Unlike Leo (Book 11) and Maya
// (Book 9), friend Ana IS explicitly gendered here -- "she smiles and
// says" in Chapter 9 -- so Ana's CHARACTERS entry uses "she", not neutral.
// Images are not generated yet (Midjourney subscription paused as of 2026-07-21).
// image/coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook12/
// once art exists, same as storybookData.js / storybookData2.js do.
// Final book in the 12-book Story Book series.

export const STORYBOOK_TITLE = "Food Brings Me Joy";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "The narrator sitting at a small round café table near a window, a warm bowl of soup, bread, and iced tea on a tray, sunny street life visible outside.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "The narrator", role: "An adult who enjoys simple food and trying new places", look: "Simple comfortable clothing, warm curious expression, no gendered features emphasized -- the source text never assigns a pronoun to this character." },
  { name: "Ana", role: "The narrator's friend, joins for restaurants and a special dinner", look: "Casual comfortable clothing, warm and easygoing -- explicitly \"she\" in the source text (Chapter 9: \"she smiles and says\")." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Lunch at a Small Café",
    image: null,
    imageNote: "The narrator sitting at a small round table near a café window with a tray of chicken soup, bread, and iced tea, people walking past outside on a warm afternoon.",
    story:
      "On Saturday afternoon, I walk to a small café near my apartment. The weather is warm, and many people sit outside at small round tables. When I go inside, I smell coffee, bread, and hot soup. A woman behind the counter smiles and says, “Hello, welcome.” I look at the menu board and read the food names slowly. Today I want something simple, so I choose chicken soup, bread, and iced tea. Then I pay for my meal and carry my tray to a table near the window. While I eat, I watch people walk past the café and talk on the street. The soup is warm, and the bread is soft, so I enjoy every bite. When I finish my lunch, I feel full, calm, and glad that I came to this quiet place.",
    questions: [
      "Where does the writer go on Saturday afternoon?",
      "What meal does the writer choose?",
      "How does the writer feel at the end?",
    ],
    trueFalse: [
      { text: "The writer goes to a small café near the apartment.", answer: true },
      { text: "The writer chooses pizza and juice.", answer: false },
      { text: "The writer feels calm after lunch.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday afternoon, I walk to a small café near my apartment.",
        jumbled: ["small", "Saturday", "apartment.", "near", "walk", "a", "On", "my", "I", "afternoon,", "café", "to"],
      },
      {
        target: "Today I want something simple, so I choose chicken soup, bread, and iced tea.",
        jumbled: ["something", "choose", "Today", "and", "I", "want", "chicken", "simple,", "tea.", "so", "iced", "I", "soup,", "bread,"],
      },
      {
        target: "When I finish my lunch, I feel full, calm, and glad that I came to this quiet place.",
        jumbled: ["lunch,", "that", "place.", "I", "I", "this", "full,", "to", "feel", "finish", "came", "calm,", "quiet", "my", "glad", "and", "When"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about food you like at a café or restaurant.",
    mySentenceExample: "I like to drink tea and eat bread at a café.",
  },
  {
    number: 2,
    title: "Shopping at the Market",
    image: null,
    imageNote: "The narrator carrying full shopping bags through a busy colorful market, tables of fresh fruit, vegetables, and fish nearby, a friendly seller pointing to fresh tomatoes.",
    story:
      "On Sunday morning, I go to the busy market near my home. The market is full of colours, sounds, and good smells. I see fresh fruit, green vegetables, fish, and warm bread on the tables. First, I buy red apples, yellow bananas, and a green cabbage. Then I choose some fresh fish and a small bag of rice. A kind seller says, “These tomatoes are very fresh today.” I smile and buy some tomatoes and onions for my dinner. I carry my bags carefully and count my money at each table. The food is fresh and cheap, and I feel happy to cook it later. As I walk home with my full bags, I feel glad because I have good food for the week.",
    questions: [
      "When does the writer go to the market?",
      "What fruit does the writer buy first?",
      "What does the kind seller say?",
    ],
    trueFalse: [
      { text: "The writer goes to the market on Sunday morning.", answer: true },
      { text: "The writer buys only sweets and chocolate.", answer: false },
      { text: "The writer feels glad because they have good food for the week.", answer: true },
    ],
    buildSentence: [
      {
        target: "I see fresh fruit, green vegetables, fish, and warm bread on the tables.",
        jumbled: ["fresh", "see", "fruit,", "I", "vegetables,", "green", "and", "fish,", "bread", "warm", "the", "on", "tables."],
      },
      {
        target: "A kind seller says, “These tomatoes are very fresh today.”",
        jumbled: ["kind", "A", "says,", "seller", "tomatoes", "“These", "very", "are", "today.”", "fresh"],
      },
      {
        target: "As I walk home with my full bags, I feel glad because I have good food for the week.",
        jumbled: ["walk", "I", "home", "As", "my", "with", "bags,", "full", "feel", "I", "glad", "because", "have", "I", "food", "good", "the", "for", "week."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about shopping for food.",
    mySentenceExample: "I buy fresh fruit and vegetables at the market.",
  },
  {
    number: 3,
    title: "Cooking a Simple Meal at Home",
    image: null,
    imageNote: "The narrator wearing an apron in a kitchen, cutting onions and tomatoes on a wooden board, rice in a pot and fish frying in a pan nearby.",
    story:
      "Tonight, I want to cook a simple and healthy meal at home. I wash my hands and take out my fresh food from the fridge. I put on an apron and get a knife, a pan, and a wooden board. First, I cut the onions, tomatoes, and vegetables into small pieces. Then I cook the rice in a pot with a little water and salt. I fry the fish in a pan with a small amount of oil. My kitchen smells warm and delicious, like a small home restaurant. I taste the food and add a little pepper to make it better. When the meal is ready, I put it on a clean, white plate. As I sit down to eat, I feel proud because I cooked a good meal by myself.",
    questions: [
      "What does the writer want to cook tonight?",
      "What does the writer cut into small pieces first?",
      "How does the writer feel while sitting down to eat?",
    ],
    trueFalse: [
      { text: "The writer cooks a simple and healthy meal at home.", answer: true },
      { text: "The writer buys the meal from a restaurant.", answer: false },
      { text: "The writer feels proud because they cooked the meal alone.", answer: true },
    ],
    buildSentence: [
      {
        target: "First, I cut the onions, tomatoes, and vegetables into small pieces.",
        jumbled: ["I", "First,", "cut", "onions,", "the", "and", "tomatoes,", "into", "vegetables", "pieces.", "small"],
      },
      {
        target: "I fry the fish in a pan with a small amount of oil.",
        jumbled: ["fry", "I", "the", "in", "fish", "a", "with", "pan", "a", "amount", "small", "oil.", "of"],
      },
      {
        target: "As I sit down to eat, I feel proud because I cooked a good meal by myself.",
        jumbled: ["sit", "I", "down", "As", "eat,", "to", "feel", "I", "proud", "because", "cooked", "I", "good", "a", "by", "meal", "myself."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about cooking at home.",
    mySentenceExample: "I cook rice and fish for dinner at home.",
  },
  {
    number: 4,
    title: "Breakfast at a Café",
    image: null,
    imageNote: "The narrator sitting at a café table by a window with warm eggs, golden toast, and hot coffee, a friendly waiter stepping away after serving the plate.",
    story:
      "On a slow morning, I decide to eat breakfast at a nearby café. The café is small and warm, with soft music and a good coffee smell. I sit at a table by the window and look at the menu. A friendly waiter comes and asks, “What would you like this morning?” I say, “I would like eggs, toast, and a cup of coffee, please.” He writes my order and says, “Thank you, it will come soon.” In a few minutes, he brings my warm eggs, golden toast, and hot coffee. The food looks fresh, and the coffee smells wonderful. I eat slowly and watch the busy street outside the window. As I finish my breakfast, I feel happy because a café breakfast is a nice treat.",
    questions: [
      "Where does the writer eat breakfast?",
      "What does the writer order?",
      "How does the writer feel at the end?",
    ],
    trueFalse: [
      { text: "The writer eats breakfast at a nearby café.", answer: true },
      { text: "The writer orders pizza and cold water.", answer: false },
      { text: "The writer feels happy because a café breakfast is a nice treat.", answer: true },
    ],
    buildSentence: [
      {
        target: "I sit at a table by the window and look at the menu.",
        jumbled: ["sit", "I", "at", "a", "by", "table", "the", "window", "look", "and", "the", "at", "menu."],
      },
      {
        target: "I say, “I would like eggs, toast, and a cup of coffee, please.”",
        jumbled: ["say,", "I", "would", "“I", "eggs,", "like", "toast,", "and", "cup", "a", "coffee,", "of", "please.”"],
      },
      {
        target: "As I finish my breakfast, I feel happy because a café breakfast is a nice treat.",
        jumbled: ["finish", "I", "my", "As", "breakfast,", "feel", "I", "happy", "because", "café", "a", "is", "breakfast", "a", "treat.", "nice"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about breakfast you like.",
    mySentenceExample: "I like eggs and coffee for breakfast.",
  },
  {
    number: 5,
    title: "Trying a New Restaurant",
    image: null,
    imageNote: "The narrator and Ana walking into a bright clean restaurant with food pictures on the walls, a smiling waiter welcoming them, a big colourful menu on the table.",
    story:
      "This weekend, I want to try a new restaurant in my city. My friend Ana tells me about a nice place that serves warm noodle soup. We walk together and find the restaurant on a quiet street. When we go inside, a waiter smiles and says, “Welcome, please sit here.” The restaurant is clean and bright, with pictures of food on the walls. We sit at a table and read the big, colourful menu. There are many new dishes that I have never tried before. Ana says, “Let's try the special noodle soup and some spring rolls.” I feel a little nervous but also excited to taste new food. As we wait for our food, I feel happy because trying new places is fun.",
    questions: [
      "Who tells the writer about the new restaurant?",
      "What food does the new restaurant serve?",
      "What does Ana suggest they try?",
    ],
    trueFalse: [
      { text: "The writer tries a new restaurant this weekend.", answer: true },
      { text: "The restaurant is dark and dirty.", answer: false },
      { text: "The writer feels happy because trying new places is fun.", answer: true },
    ],
    buildSentence: [
      {
        target: "My friend Ana tells me about a nice place that serves warm noodle soup.",
        jumbled: ["friend", "My", "tells", "Ana", "me", "a", "about", "place", "nice", "serves", "that", "noodle", "warm", "soup."],
      },
      {
        target: "We sit at a table and read the big, colourful menu.",
        jumbled: ["sit", "We", "at", "a", "and", "table", "read", "big,", "the", "menu.", "colourful"],
      },
      {
        target: "As we wait for our food, I feel happy because trying new places is fun.",
        jumbled: ["we", "wait", "As", "for", "food,", "our", "feel", "I", "happy", "because", "new", "trying", "is", "places", "fun."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying a new restaurant.",
    mySentenceExample: "I like to try new food at new places.",
  },
  {
    number: 6,
    title: "Ordering My Food",
    image: null,
    imageNote: "The narrator and Ana speaking with a waiter who is writing their order on a small notepad, menus still open on the table.",
    story:
      "At the restaurant, the waiter comes to our table with a friendly smile. He asks, “Are you ready to order your food?” I look at the menu one more time and choose my dish. I say, “I would like the noodle soup and a glass of water, please.” Ana says, “I would like the same soup and some spring rolls.” The waiter writes our order carefully on his small notepad. He asks, “Would you like anything else with your meal?” I say, “No, thank you, that is all for now.” He smiles and says, “Your food will be ready soon.” As the waiter walks away, I feel proud because I ordered my food clearly in English.",
    questions: [
      "What does the waiter ask first?",
      "What does the writer order?",
      "How does the writer feel after ordering?",
    ],
    trueFalse: [
      { text: "The writer orders noodle soup and a glass of water.", answer: true },
      { text: "The writer cannot say anything to the waiter.", answer: false },
      { text: "The writer feels proud because they ordered clearly.", answer: true },
    ],
    buildSentence: [
      {
        target: "I say, “I would like the noodle soup and a glass of water, please.”",
        jumbled: ["say,", "I", "would", "“I", "the", "like", "soup", "noodle", "a", "and", "of", "glass", "please.”", "water,"],
      },
      {
        target: "The waiter writes our order carefully on his small notepad.",
        jumbled: ["waiter", "The", "writes", "order", "our", "on", "carefully", "small", "his", "notepad."],
      },
      {
        target: "As the waiter walks away, I feel proud because I ordered my food clearly in English.",
        jumbled: ["waiter", "the", "walks", "As", "away,", "feel", "I", "proud", "because", "ordered", "I", "food", "my", "in", "clearly", "English."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about ordering food.",
    mySentenceExample: "I order soup and water at the restaurant.",
  },
  {
    number: 7,
    title: "Eating Out with a Friend",
    image: null,
    imageNote: "The narrator and Ana sharing spring rolls and noodle soup at a restaurant table, both laughing mid-conversation, warm inviting restaurant lighting.",
    story:
      "Soon, the waiter brings our hot food to the table. The noodle soup smells wonderful, and the spring rolls look golden and crispy. Ana and I say, “Thank you,” and start to eat our meal. The soup is warm, and the noodles are soft and delicious. We share the spring rolls and talk about our week and our plans. Ana tells me a funny story, and I laugh so much. Eating out with a friend makes the food taste even better. We eat slowly, enjoy the flavours, and never feel in a hurry. The restaurant is warm, and our table feels happy and full of talk. As we finish our meal, I feel grateful because good food and a good friend go together.",
    questions: [
      "What food does the waiter bring?",
      "What do the writer and Ana talk about?",
      "How does the writer feel at the end of the meal?",
    ],
    trueFalse: [
      { text: "The soup is warm and the noodles are soft.", answer: true },
      { text: "The writer eats alone and does not talk.", answer: false },
      { text: "The writer feels grateful because good food and a good friend go together.", answer: true },
    ],
    buildSentence: [
      {
        target: "The noodle soup smells wonderful, and the spring rolls look golden and crispy.",
        jumbled: ["soup", "noodle", "The", "smells", "and", "wonderful,", "spring", "the", "look", "rolls", "golden", "crispy.", "and"],
      },
      {
        target: "We share the spring rolls and talk about our week and our plans.",
        jumbled: ["share", "We", "the", "rolls", "spring", "talk", "and", "our", "about", "and", "week", "plans.", "our"],
      },
      {
        target: "As we finish our meal, I feel grateful because good food and a good friend go together.",
        jumbled: ["we", "finish", "As", "meal,", "our", "feel", "I", "grateful", "because", "food", "good", "good", "a", "and", "go", "friend", "together."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about eating out with a friend.",
    mySentenceExample: "I enjoy food more when I eat with a friend.",
  },
  {
    number: 8,
    title: "Paying the Bill",
    image: null,
    imageNote: "The narrator and Ana counting money together over a small paper bill on a plate, the waiter smiling nearby as they prepare to leave the restaurant.",
    story:
      "After our happy meal, we are ready to pay the bill. I raise my hand a little, and the waiter comes to our table. I say, “Excuse me, can we have the bill, please?” He nods and brings a small paper bill on a plate. I look at the bill and read the price for our food and drinks. Ana says, “Let's share the bill, so we each pay half.” We count our money and put it together on the small plate. I add a little extra money as a tip for the kind waiter. The waiter smiles and says, “Thank you very much, please come again.” As we leave the restaurant, I feel good because we shared a nice meal and paid together.",
    questions: [
      "What does the writer ask the waiter for?",
      "How do the writer and Ana pay the bill?",
      "What does the writer add for the waiter?",
    ],
    trueFalse: [
      { text: "The writer asks the waiter for the bill.", answer: true },
      { text: "The writer and Ana leave without paying.", answer: false },
      { text: "The writer feels good because they shared a nice meal.", answer: true },
    ],
    buildSentence: [
      {
        target: "I say, “Excuse me, can we have the bill, please?”",
        jumbled: ["say,", "I", "me,", "“Excuse", "we", "can", "the", "have", "please?”", "bill,"],
      },
      {
        target: "Ana says, “Let's share the bill, so we each pay half.”",
        jumbled: ["says,", "Ana", "share", "“Let's", "bill,", "the", "we", "so", "pay", "each", "half.”"],
      },
      {
        target: "As we leave the restaurant, I feel good because we shared a nice meal and paid together.",
        jumbled: ["we", "leave", "As", "restaurant,", "the", "feel", "I", "good", "because", "shared", "we", "nice", "a", "and", "meal", "paid", "together."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about paying for food.",
    mySentenceExample: "I pay the bill after a nice meal.",
  },
  {
    number: 9,
    title: "A Special Dinner at Home",
    image: null,
    imageNote: "The narrator and Ana sitting at a table set with clean plates, glasses, and a small candle, sharing a warm home-cooked dinner together.",
    story:
      "Today is a special day, so I want to cook a nice dinner at home. I invite my friend Ana to eat with me in the evening. I go to the market and buy fresh fish, vegetables, rice, and fruit. In my kitchen, I cook carefully and make the food look nice on the plates. I set the table with clean plates, glasses, and a small candle. When Ana arrives, she smiles and says, “The food smells wonderful.” We sit down together and eat the warm, delicious dinner. We talk, laugh, and enjoy every bite of the special meal. For dessert, we eat sweet fruit and drink warm tea. As we finish our special dinner, I feel happy because I shared good food with a good friend.",
    questions: [
      "Who does the writer invite for dinner?",
      "What does the writer put on the table?",
      "What do they eat for dessert?",
    ],
    trueFalse: [
      { text: "The writer cooks a special dinner at home.", answer: true },
      { text: "The writer eats the special dinner alone.", answer: false },
      { text: "The writer feels happy because they shared good food with a friend.", answer: true },
    ],
    buildSentence: [
      {
        target: "I go to the market and buy fresh fish, vegetables, rice, and fruit.",
        jumbled: ["go", "I", "to", "market", "the", "buy", "and", "fish,", "fresh", "vegetables,", "and", "rice,", "fruit."],
      },
      {
        target: "I set the table with clean plates, glasses, and a small candle.",
        jumbled: ["set", "I", "the", "with", "table", "plates,", "clean", "glasses,", "and", "small", "a", "candle."],
      },
      {
        target: "As we finish our special dinner, I feel happy because I shared good food with a good friend.",
        jumbled: ["we", "finish", "As", "special", "our", "dinner,", "feel", "I", "happy", "because", "shared", "I", "food", "good", "a", "with", "friend.", "good"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a special dinner.",
    mySentenceExample: "I cook a special dinner for my friend.",
  },
  {
    number: 10,
    title: "Food Brings Me Joy",
    image: null,
    imageNote: "The narrator sitting contentedly at home surrounded by small signs of a food journey -- market bags, a recipe, a café cup -- reflecting with a warm smile.",
    story:
      "After many weeks, I understand that food brings me a lot of joy. In the past, I ate fast food alone in front of my phone. Now I shop at the market, cook at home, and eat out with friends. I try new cafés, new restaurants, and new dishes each week. I learn to order food clearly and pay the bill with a smile. I cook simple, fresh meals that are good for my body. I share special dinners with my friend Ana and enjoy our talks. Food is not only for my stomach; it is also for happy moments. My friends say, “You look happy, and your food always looks so good.” As I think about my food journey, I feel proud and thankful because good food fills my life with joy.",
    questions: [
      "How did the writer eat in the past?",
      "What does the writer do now with food?",
      "How does the writer feel about their food journey at the end?",
    ],
    trueFalse: [
      { text: "In the past, the writer ate fast food alone in front of the phone.", answer: true },
      { text: "The writer stops cooking and eating out.", answer: false },
      { text: "The writer feels proud and thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Now I shop at the market, cook at home, and eat out with friends.",
        jumbled: ["I", "Now", "shop", "the", "at", "market,", "at", "cook", "home,", "eat", "and", "out", "friends.", "with"],
      },
      {
        target: "Food is not only for my stomach; it is also for happy moments.",
        jumbled: ["is", "Food", "only", "not", "my", "for", "stomach;", "is", "it", "for", "also", "moments.", "happy"],
      },
      {
        target: "As I think about my food journey, I feel proud and thankful because good food fills my life with joy.",
        jumbled: ["think", "I", "about", "As", "food", "my", "journey,", "feel", "I", "proud", "thankful", "and", "because", "food", "good", "life", "my", "with", "fills", "joy."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how food makes you feel.",
    mySentenceExample: "Good food and good friends make me happy.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

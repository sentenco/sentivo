// A1 Adults digital storybook, Book 8: "A Good Week at the Shop"
// Static content -- no Supabase, mirrors the pattern in storybookData7.js.
// Like Book 7, this narrator is an adult worker and stays gender-neutral
// throughout, matching the source text (no gendered pronoun is ever used
// for the narrator -- only for manager Ms. Cruz, who is explicitly "she").
import coverImg from "./assets/storybook8/cover.jpeg";

export const STORYBOOK_TITLE = "A Good Week at the Shop";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "The narrator standing behind the counter of a small neighborhood shop, smiling at the door, shelves of bottles and boxes neatly stocked behind them, morning light through the front window.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "The narrator", role: "A shop worker, new to the job", look: "Neutral work apron over simple clothes, calm and attentive expression, no gendered features emphasized -- the source text never assigns a pronoun to this character." },
  { name: "Ms. Cruz", role: "The narrator's manager", look: "Apron with the shop's colors, hair tied back, kind but always a little busy." },
  { name: "Ben", role: "The narrator's coworker", look: "Simple work shirt, easygoing and friendly, quick with a joke." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at the Shop",
    image: null,
    imageNote: "The narrator unlocking the glass door of a small shop early in the morning, Ms. Cruz already inside smiling, quiet empty street visible outside.",
    story:
      "Every weekday, I wake up early and get ready for work. I put on my clean shirt, eat a quick breakfast, and leave my apartment before seven. The shop is only ten minutes away, so I walk there with my bag on my shoulder. When I arrive, the street is still quiet, and the glass door is closed. My manager is already inside, and she smiles when she sees me. I unlock the door, turn on the lights, and help open the shop for the day. Then I check the shelves and move some bottles and boxes into the right place. A few minutes later, the first customer comes in and says, “Good morning.” I smile and say, “Good morning, how can I help you?” As the day begins, I feel a little busy, but I am ready to help people at the shop.",
    questions: [
      "How does the writer go to the shop?",
      "Who is already inside the shop?",
      "What does the writer say to the first customer?",
    ],
    trueFalse: [
      { text: "The shop is ten minutes away from the writer's apartment.", answer: true },
      { text: "The writer closes the shop when they arrive.", answer: false },
      { text: "The writer feels ready to help people at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "The shop is only ten minutes away, so I walk there with my bag on my shoulder.",
        jumbled: ["only", "my", "shop", "there", "on", "away,", "shoulder.", "The", "with", "walk", "ten", "I", "bag", "so", "my", "is", "minutes"],
      },
      {
        target: "I unlock the door, turn on the lights, and help open the shop for the day.",
        jumbled: ["shop", "open", "the", "help", "turn", "I", "the", "day.", "unlock", "lights,", "the", "door,", "on", "and", "for"],
      },
      {
        target: "I smile and say, “Good morning, how can I help you?”",
        jumbled: ["I", "you?”", "say,", "morning,", "help", "“Good", "can", "I", "how", "smile", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping customers.",
    mySentenceExample: "I smile when I help a customer in the shop.",
  },
  {
    number: 2,
    title: "Opening the Shop",
    image: null,
    imageNote: "The narrator and Ms. Cruz opening the shop together -- Ms. Cruz counting money at the cashier, the narrator taking chairs down, Ben checking the drinks fridge near the door.",
    story:
      "On Tuesday, I arrive at the shop a few minutes early with my manager. Her name is Ms. Cruz, and she is kind but always busy in the morning. First, we open the big glass door and switch on all the lights. I take the chairs down and put them near the small tables by the wall. Ms. Cruz counts the money in the cashier and writes it in a small book. My coworker Ben checks the cold drinks in the fridge near the door. I use a soft cloth to clean the counter and the front window. Outside, I can see the first people walking to work on the street. When everything is ready, Ms. Cruz says, “Good job, we are open now.” As we open the shop together, I feel proud because our team is ready for the day.",
    questions: [
      "What is the manager's name?",
      "What does Ms. Cruz count in the cashier?",
      "What does the writer use to clean the counter and window?",
    ],
    trueFalse: [
      { text: "The writer arrives a few minutes early.", answer: true },
      { text: "Ben counts the money in the cashier.", answer: false },
      { text: "The writer feels proud when the shop is ready.", answer: true },
    ],
    buildSentence: [
      {
        target: "First, we open the big glass door and switch on all the lights.",
        jumbled: ["we", "First,", "open", "big", "the", "door", "glass", "and", "on", "switch", "the", "all", "lights."],
      },
      {
        target: "Ms. Cruz counts the money in the cashier and writes it in a small book.",
        jumbled: ["the", "counts", "Cruz", "Ms.", "money", "cashier", "the", "in", "and", "writes", "a", "it", "in", "book.", "small"],
      },
      {
        target: "As we open the shop together, I feel proud because our team is ready for the day.",
        jumbled: ["open", "we", "shop", "As", "the", "together,", "feel", "I", "proud", "because", "team", "our", "ready", "is", "day.", "the", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about starting your workday.",
    mySentenceExample: "I clean the counter before we open the shop.",
  },
  {
    number: 3,
    title: "Helping the First Customers",
    image: null,
    imageNote: "The narrator showing a young woman a shelf of fresh bread, an old man nearby at the fridge being helped to find milk, Ben helping another customer with fruit at the front table.",
    story:
      "In the morning, the shop is quiet, and then the first customers come in. A young woman walks in and says, “Good morning, I need some bread.” I show her the shelf with fresh bread near the back of the shop. She chooses two loaves and thanks me with a friendly smile. Next, an old man comes in and asks for milk and eggs. I walk with him to the fridge and help him find the fresh milk. He says, “Thank you, you are very kind,” and I feel happy inside. Ben helps another customer choose some fruit near the front table. The shop slowly fills with people, and everyone talks in soft voices. I move quickly and help each person with a smile and a kind word. As I help the first customers, I feel useful because people are glad for my help.",
    questions: [
      "What does the young woman need?",
      "What does the old man ask for?",
      "What does Ben help another customer choose?",
    ],
    trueFalse: [
      { text: "The young woman needs some bread.", answer: true },
      { text: "The old man asks for shoes and a hat.", answer: false },
      { text: "The writer feels useful because people are glad for the help.", answer: true },
    ],
    buildSentence: [
      {
        target: "I show her the shelf with fresh bread near the back of the shop.",
        jumbled: ["her", "show", "the", "I", "with", "shelf", "bread", "fresh", "the", "near", "of", "back", "shop.", "the"],
      },
      {
        target: "I walk with him to the fridge and help him find the fresh milk.",
        jumbled: ["with", "walk", "him", "I", "the", "to", "and", "fridge", "him", "help", "the", "find", "milk.", "fresh"],
      },
      {
        target: "As I help the first customers, I feel useful because people are glad for my help.",
        jumbled: ["help", "I", "first", "As", "the", "customers,", "feel", "I", "useful", "because", "are", "people", "glad", "help.", "my", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about helping someone find something.",
    mySentenceExample: "I help customers find the food they need.",
  },
  {
    number: 4,
    title: "Finding an Item for a Customer",
    image: null,
    imageNote: "The narrator searching through boxes in a storage room at the back of the shop, a worried-looking man waiting near the counter up front, a small pack of batteries visible on a high shelf.",
    story:
      "In the afternoon, a man comes in and looks around the shop with a worried face. He says, “Excuse me, do you have any batteries for a clock?” I am not sure, so I say, “Let me check for you, please wait one minute.” I look on the small shelf near the counter, but I do not see them there. Then I remember a box in the storage room at the back. I walk to the storage room and search the boxes one by one. Finally, I find a small pack of clock batteries on a high shelf. I bring them to the man and say, “Here you are, is this the right one?” He smiles and says, “Yes, thank you so much for looking.” As the man leaves happy, I feel proud because I did not give up on his question.",
    questions: [
      "What does the man ask for?",
      "Where does the writer finally find the batteries?",
      "What does the man say at the end?",
    ],
    trueFalse: [
      { text: "The man asks for batteries for a clock.", answer: true },
      { text: "The writer finds the batteries on the first shelf.", answer: false },
      { text: "The writer feels proud because they did not give up.", answer: true },
    ],
    buildSentence: [
      {
        target: "I am not sure, so I say, “Let me check for you, please wait one minute.”",
        jumbled: ["not", "am", "sure,", "I", "say,", "so", "I", "me", "“Let", "for", "check", "you,", "wait", "please", "minute.”", "one"],
      },
      {
        target: "I bring them to the man and say, “Here you are, is this the right one?”",
        jumbled: ["them", "bring", "to", "I", "man", "the", "say,", "and", "you", "“Here", "is", "are,", "the", "this", "one?”", "right"],
      },
      {
        target: "As the man leaves happy, I feel proud because I did not give up on his question.",
        jumbled: ["man", "the", "leaves", "As", "happy,", "feel", "I", "proud", "because", "did", "I", "give", "not", "on", "up", "question.", "his"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about finding something for someone.",
    mySentenceExample: "I look everywhere to help a customer.",
  },
  {
    number: 5,
    title: "Working at the Cashier",
    image: null,
    imageNote: "The narrator at the cashier scanning items for a customer, a line of people waiting behind, bread milk and juice on the counter, a card-payment terminal visible.",
    story:
      "Today, Ms. Cruz asks me to work at the cashier near the door. A line of customers waits, so I take a deep breath and smile. The first customer puts bread, milk, and juice on the counter. I scan each item slowly and read the price on the screen. I tell her, “That is three hundred pesos, please,” in a clear voice. She gives me the money, and I count her change carefully into her hand. I put her food in a bag and say, “Thank you, have a nice day.” The next customer pays with a card, so I show him where to tap it. I help each person in the line, one by one, without any big mistakes. As the line grows shorter, I feel confident because I can work the cashier well.",
    questions: [
      "What does Ms. Cruz ask the writer to do today?",
      "What does the first customer put on the counter?",
      "How does the next customer pay?",
    ],
    trueFalse: [
      { text: "The writer works at the cashier today.", answer: true },
      { text: "The writer makes many big mistakes at the cashier.", answer: false },
      { text: "The writer feels confident at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I scan each item slowly and read the price on the screen.",
        jumbled: ["each", "scan", "item", "I", "and", "slowly", "read", "price", "the", "the", "on", "screen."],
      },
      {
        target: "She gives me the money, and I count her change carefully into her hand.",
        jumbled: ["me", "gives", "the", "She", "money,", "I", "and", "count", "change", "her", "into", "carefully", "hand.", "her"],
      },
      {
        target: "As the line grows shorter, I feel confident because I can work the cashier well.",
        jumbled: ["line", "the", "grows", "As", "shorter,", "feel", "I", "confident", "because", "can", "I", "cashier", "the", "work", "well."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about paying or giving change.",
    mySentenceExample: "I count the change carefully for each customer.",
  },
  {
    number: 6,
    title: "A Difficult Customer",
    image: null,
    imageNote: "The narrator calmly speaking to an angry-looking customer holding a small bag near the counter, walking with him to the fridge to show him different drink flavors.",
    story:
      "In the afternoon, a customer comes in with an angry face and a small bag. He says, “This drink is wrong, I did not want this one.” His voice is loud, and some other customers look at us. I stay calm and say, “I am sorry, sir, let me help you with that.” I look in the bag and see that he has the wrong flavour of juice. I say, “No problem, you can choose the drink you really want.” I walk with him to the fridge and show him the different flavours. He picks the right one, and slowly his angry face becomes calm. I change it at the cashier and say, “I am sorry for the mistake.” He says, “Thank you, you are very patient,” and leaves the shop happy. As he walks out, I feel proud because I stayed calm and solved the problem.",
    questions: [
      "Why is the customer angry?",
      "How does the writer speak to the angry customer?",
      "What does the customer say before he leaves?",
    ],
    trueFalse: [
      { text: "The customer has the wrong flavour of juice.", answer: true },
      { text: "The writer shouts back at the angry customer.", answer: false },
      { text: "The writer feels proud because they stayed calm.", answer: true },
    ],
    buildSentence: [
      {
        target: "I stay calm and say, “I am sorry, sir, let me help you with that.”",
        jumbled: ["calm", "stay", "I", "say,", "and", "am", "“I", "sir,", "sorry,", "me", "let", "you", "help", "that.”", "with"],
      },
      {
        target: "I walk with him to the fridge and show him the different flavours.",
        jumbled: ["with", "walk", "him", "I", "the", "to", "and", "fridge", "him", "show", "different", "the", "flavours."],
      },
      {
        target: "As he walks out, I feel proud because I stayed calm and solved the problem.",
        jumbled: ["he", "walks", "out,", "As", "feel", "I", "proud", "because", "stayed", "I", "calm", "solved", "and", "problem.", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm with a difficult person.",
    mySentenceExample: "I stay calm and kind with every customer.",
  },
  {
    number: 7,
    title: "Lunch Break Behind the Shop",
    image: null,
    imageNote: "The narrator and Ben sitting on small chairs in a room behind the shop, lunch boxes with rice and fish open, both laughing near a window.",
    story:
      "At one o'clock, Ms. Cruz says, “You can take your lunch break now.” I walk to the small room behind the shop, where we keep our bags. Ben is already there, eating rice and vegetables from his lunch box. I open my own lunch box and take out rice, fish, and a banana. We sit on two small chairs near the window and eat together. Ben tells me a funny story about a customer from last week. I laugh and share some of my banana with him for dessert. We talk about our families, our plans, and the busy morning at the shop. After thirty minutes, we wash our hands and get ready for the afternoon. As I finish my lunch, I feel rested and happy to work with a good coworker.",
    questions: [
      "What time is the lunch break?",
      "Where does the writer eat lunch?",
      "What does Ben tell the writer during lunch?",
    ],
    trueFalse: [
      { text: "The writer eats lunch in the room behind the shop.", answer: true },
      { text: "The writer eats lunch alone in the storage room.", answer: false },
      { text: "The writer feels rested and happy at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I open my own lunch box and take out rice, fish, and a banana.",
        jumbled: ["my", "open", "own", "I", "box", "lunch", "take", "and", "rice,", "out", "fish,", "a", "and", "banana."],
      },
      {
        target: "We sit on two small chairs near the window and eat together.",
        jumbled: ["on", "sit", "two", "We", "chairs", "small", "near", "the", "and", "window", "together.", "eat"],
      },
      {
        target: "As I finish my lunch, I feel rested and happy to work with a good coworker.",
        jumbled: ["finish", "I", "lunch,", "As", "my", "feel", "I", "rested", "happy", "and", "work", "to", "a", "with", "coworker.", "good"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch break at work.",
    mySentenceExample: "I eat lunch with my coworker in a small room.",
  },
  {
    number: 8,
    title: "Filling the Shelves Again",
    image: null,
    imageNote: "The narrator pushing a trolley loaded with boxes of biscuits and bottles toward empty shelves, Ben helping lift a heavy box onto a high shelf.",
    story:
      "In the afternoon, many shelves are empty because we sold a lot today. Ms. Cruz asks me to fill the shelves with new items from the storage room. I take a small trolley and push it to the back of the shop. I load boxes of biscuits, bottles of water, and cans of soup on it. Then I push the trolley back and start to fill the empty shelves. I put the older items in the front and the new items behind them. I make each row neat and turn the labels so people can read them. Ben helps me lift the heavy boxes onto the high shelves. Slowly, the empty shelves become full and clean and easy to see. As I finish filling the shelves, I feel satisfied because the shop looks fresh and ready.",
    questions: [
      "Why are many shelves empty in the afternoon?",
      "What does the writer load onto the trolley?",
      "Who helps the writer lift the heavy boxes?",
    ],
    trueFalse: [
      { text: "The writer fills the shelves with new items.", answer: true },
      { text: "The writer puts the new items in front of the old ones.", answer: false },
      { text: "The writer feels satisfied because the shop looks fresh.", answer: true },
    ],
    buildSentence: [
      {
        target: "I take a small trolley and push it to the back of the shop.",
        jumbled: ["a", "take", "small", "I", "and", "trolley", "it", "push", "the", "to", "of", "back", "shop.", "the"],
      },
      {
        target: "I put the older items in the front and the new items behind them.",
        jumbled: ["the", "put", "older", "I", "in", "items", "front", "the", "the", "and", "items", "new", "them.", "behind"],
      },
      {
        target: "As I finish filling the shelves, I feel satisfied because the shop looks fresh and ready.",
        jumbled: ["finish", "I", "filling", "As", "shelves,", "the", "feel", "I", "satisfied", "because", "shop", "the", "fresh", "looks", "ready.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your work in a shop.",
    mySentenceExample: "I fill the shelves so the shop looks nice.",
  },
  {
    number: 9,
    title: "Closing the Shop",
    image: null,
    imageNote: "The narrator locking the front glass door and turning a sign to 'Closed', Ben mopping the floor nearby, Ms. Cruz counting money at the cashier under dimmer evening lights.",
    story:
      "In the evening, the last customer leaves, and the street becomes quiet. Ms. Cruz looks at the clock and says, “It is time to close the shop now.” I lock the front glass door and turn the small sign to “Closed.” Ben and I clean the counter and the floor with soft cloths and a mop. Ms. Cruz counts the money in the cashier and writes the numbers in her book. I check that the fridge doors are closed and the drinks are cold. Then I put the chairs on the tables so we can clean the floor. We turn off most of the lights and check every corner one more time. Ms. Cruz says, “Good work today, see you tomorrow,” and we all smile. As I leave the quiet shop, I feel tired but happy after a full day of work.",
    questions: [
      "What does the writer do with the front door?",
      "What does Ms. Cruz count in the cashier?",
      "What does Ms. Cruz say before everyone leaves?",
    ],
    trueFalse: [
      { text: "The writer locks the front glass door.", answer: true },
      { text: "The writer leaves the fridge doors open and warm.", answer: false },
      { text: "The writer feels tired but happy at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I lock the front glass door and turn the small sign to “Closed.”",
        jumbled: ["the", "lock", "front", "I", "door", "glass", "and", "the", "turn", "sign", "small", "“Closed.”", "to"],
      },
      {
        target: "Ben and I clean the counter and the floor with soft cloths and a mop.",
        jumbled: ["I", "and", "Ben", "clean", "counter", "the", "the", "and", "floor", "soft", "with", "cloths", "a", "and", "mop."],
      },
      {
        target: "As I leave the quiet shop, I feel tired but happy after a full day of work.",
        jumbled: ["leave", "I", "quiet", "As", "the", "shop,", "feel", "I", "tired", "happy", "but", "a", "after", "full", "of", "day", "work."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the end of your workday.",
    mySentenceExample: "I feel happy when we close the shop together.",
  },
  {
    number: 10,
    title: "A Good Week at the Shop",
    image: null,
    imageNote: "The narrator standing behind the counter on Friday evening as Ms. Cruz walks over with a warm smile to say something kind, Ben nearby, street lamps glowing outside the front window.",
    story:
      "On Friday evening, I sit for a moment and think about my whole week. On Monday, everything felt new, but now the shop feels like my second home. This week, I opened the shop, worked the cashier, and filled many shelves. I helped happy customers, and I also helped one angry customer stay calm. Ben and I ate lunch together and laughed about many funny things. Ms. Cruz walks to me and says, “You are a great help to this shop.” I smile and say, “Thank you, I really like working here with you.” We close the shop, turn off the lights, and lock the door for the weekend. Outside, the evening air is cool, and the street lamps are bright. As I walk home, I feel proud and thankful because I had a good week at the shop.",
    questions: [
      "How did everything feel on Monday?",
      "What does Ms. Cruz say to the writer on Friday?",
      "How does the writer feel as they walk home?",
    ],
    trueFalse: [
      { text: "On Monday, everything felt new.", answer: true },
      { text: "Ms. Cruz says the writer is not helpful.", answer: false },
      { text: "The writer feels proud and thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "This week, I opened the shop, worked the cashier, and filled many shelves.",
        jumbled: ["week,", "This", "opened", "I", "shop,", "the", "worked", "cashier,", "the", "filled", "and", "shelves.", "many"],
      },
      {
        target: "Ms. Cruz walks to me and says, “You are a great help to this shop.”",
        jumbled: ["to", "walks", "Cruz", "Ms.", "me", "says,", "and", "are", "“You", "help", "a", "great", "this", "to", "shop.”"],
      },
      {
        target: "As I walk home, I feel proud and thankful because I had a good week at the shop.",
        jumbled: ["walk", "I", "home,", "As", "feel", "I", "proud", "thankful", "and", "because", "had", "I", "good", "a", "at", "week", "shop.", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a good week at your job.",
    mySentenceExample: "I feel proud when I have a good week at the shop.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

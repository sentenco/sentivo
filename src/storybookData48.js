// A1 Adults digital storybook, Book 48: "A Visit to the Post Office"
// Static content -- no Supabase. Eighth and final book in the A1 Adults
// batch (Books 41-48), completing a second full 8-book set for Adults.
// Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Visit to the Post Office";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Omar standing at a post office counter holding a wrapped package, a clerk weighing it on a small scale, other customers waiting in line behind him.";

export const CHARACTERS = [
  { name: "Omar", role: "The narrator, an adult", look: "Simple jacket, a wrapped package under his arm, calm but unfamiliar with mailing packages." },
  { name: "Ms. Park", role: "A post office clerk", look: "Post office uniform, name tag, efficient and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Package to Send",
    image: null,
    imageNote: "Omar sitting at his kitchen table, wrapping a small package in brown paper and tape.",
    story:
      "My sister's birthday is next week, and she lives in another city far from me. I bought her a small gift, and now I need to mail it to her. I wrap the gift carefully in brown paper and tape it closed firmly. I write her name and address on the front in clear, careful handwriting. I have never mailed a package before, so I feel a little unsure about the process. I search online for the nearest post office and check its opening hours. It opens at nine, so I plan to go there this morning.",
    questions: [
      "Why does Omar need to mail a package?",
      "What does Omar do to the gift first?",
      "What does Omar write on the front?",
    ],
    trueFalse: [
      { text: "Omar's sister's birthday is next week.", answer: true },
      { text: "Omar wraps the gift in brown paper.", answer: true },
      { text: "Omar has mailed many packages before.", answer: false },
      { text: "Omar writes her name and address on the front.", answer: true },
      { text: "The post office opens at nine.", answer: true },
    ],
    buildSentence: [
      { target: "I wrap the gift carefully.", jumbled: ["wrap", "the", "I", "gift", "carefully."] },
      { target: "I feel a little unsure.", jumbled: ["feel", "a", "I", "little", "unsure."] },
      { target: "I search online for it.", jumbled: ["search", "online", "I", "for", "it."] },
      { target: "I need to mail it.", jumbled: ["need", "to", "I", "mail", "it."] },
      { target: "I plan to go there this morning.", jumbled: ["I", "plan", "to", "go", "there", "this", "morning."] },
    ],
    mySentencePrompt: "Write or say one sentence about sending a gift to someone.",
    mySentenceExample: "I sent a gift to my sister for her birthday.",
  },
  {
    number: 2,
    title: "Finding the Post Office",
    image: null,
    imageNote: "Omar walking down a city street holding his package, looking at his phone for directions, a post office sign visible ahead.",
    story:
      "I leave my apartment with the package under my arm and check my phone for directions. The post office is only a short walk away, about ten minutes from my home. I follow the map on my phone, turning left at a small coffee shop on the corner. The morning air feels fresh, and the streets are not too busy yet today. Soon, I see a blue and white sign that says “Post Office” ahead of me. I feel a small sense of accomplishment just finding the right place easily. I walk toward the entrance and open the door carefully.",
    questions: [
      "How far is the post office from Omar's home?",
      "Where does Omar turn left?",
      "What color is the post office sign?",
    ],
    trueFalse: [
      { text: "The post office is about a ten-minute walk away.", answer: true },
      { text: "Omar turns left at a small coffee shop.", answer: true },
      { text: "The streets are extremely busy this morning.", answer: false },
      { text: "The sign is blue and white.", answer: true },
      { text: "Omar cannot find the post office at all.", answer: false },
    ],
    buildSentence: [
      { target: "I check my phone.", jumbled: ["check", "my", "I", "phone."] },
      { target: "I follow the map now.", jumbled: ["follow", "the", "I", "map", "now."] },
      { target: "I see the sign ahead.", jumbled: ["see", "the", "I", "sign", "ahead."] },
      { target: "I feel a small sense of accomplishment.", jumbled: ["I", "feel", "a", "small", "sense", "of", "accomplishment."] },
      { target: "I walk toward the entrance carefully.", jumbled: ["I", "walk", "toward", "the", "entrance", "carefully."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding a new place using a map or phone.",
    mySentenceExample: "I found the new restaurant using the map on my phone.",
  },
  {
    number: 3,
    title: "Waiting in Line",
    image: null,
    imageNote: "Omar standing in a short line inside the post office, holding his package, other customers waiting ahead of him.",
    story:
      "Inside, I see a short line of people waiting for the two open counters. I stand behind a woman holding several large envelopes in her hands. The line moves slowly, but I do not mind waiting a little today. I look around the post office at the stamps and boxes displayed on the walls. There are many different sizes of boxes, and I wonder which one I might need. My package is small, so I hope I will not need to buy a new box. After a few minutes, the woman in front of me finishes, and it is my turn.",
    questions: [
      "How many counters are open?",
      "What is the woman in front of Omar holding?",
      "What does Omar wonder about?",
    ],
    trueFalse: [
      { text: "There are two open counters.", answer: true },
      { text: "The woman in front is holding large envelopes.", answer: true },
      { text: "Omar feels upset about waiting.", answer: false },
      { text: "Omar wonders which size box he might need.", answer: true },
      { text: "Omar leaves the line before his turn.", answer: false },
    ],
    buildSentence: [
      { target: "I stand behind a woman.", jumbled: ["stand", "behind", "I", "a", "woman."] },
      { target: "The line moves slowly today.", jumbled: ["line", "moves", "The", "slowly", "today."] },
      { target: "I look around the post office.", jumbled: ["look", "around", "I", "the", "post", "office."] },
      { target: "I do not mind waiting today.", jumbled: ["I", "do", "not", "mind", "waiting", "today."] },
      { target: "It is my turn after a few minutes.", jumbled: ["It", "is", "my", "turn", "after", "a", "few", "minutes."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently in a line somewhere.",
    mySentenceExample: "I waited patiently in a line at the grocery store.",
  },
  {
    number: 4,
    title: "Meeting Ms. Park",
    image: null,
    imageNote: "Omar placing his package on the counter, Ms. Park smiling and greeting him, ready to help with the mailing process.",
    story:
      "I walk to the counter and place my package carefully in front of the clerk. Her name tag says Ms. Park, and she greets me with a warm, professional smile. “Good morning! What can I help you with today?” she asks kindly. I explain that I need to send this package to my sister in another city. “No problem at all. Let's get it weighed first,” she says, reaching for the package. I feel relieved that the process seems simple so far, not as confusing as I expected. Ms. Park's calm, friendly manner makes me feel comfortable asking any questions I have.",
    questions: [
      "What is written on the clerk's name tag?",
      "What does Omar explain to Ms. Park?",
      "How does Ms. Park's manner make Omar feel?",
    ],
    trueFalse: [
      { text: "The clerk's name tag says Ms. Park.", answer: true },
      { text: "Omar explains he needs to send a package.", answer: true },
      { text: "Ms. Park seems annoyed to help Omar.", answer: false },
      { text: "Omar feels relieved the process seems simple.", answer: true },
      { text: "Omar feels too nervous to ask any questions.", answer: false },
    ],
    buildSentence: [
      { target: "I place my package carefully.", jumbled: ["place", "my", "I", "package", "carefully."] },
      { target: "She greets me warmly today.", jumbled: ["greets", "me", "She", "warmly", "today."] },
      { target: "I feel relieved now.", jumbled: ["feel", "relieved", "I", "now."] },
      { target: "Let's get it weighed first.", jumbled: ["get", "it", "Let's", "weighed", "first."] },
      { target: "This makes me feel comfortable asking questions.", jumbled: ["This", "makes", "me", "feel", "comfortable", "asking", "questions."] },
    ],
    mySentencePrompt: "Write or say one sentence about being helped by someone at a counter or desk.",
    mySentenceExample: "The clerk helped me kindly at the counter.",
  },
  {
    number: 5,
    title: "Weighing the Package",
    image: null,
    imageNote: "Ms. Park placing Omar's package on a small digital scale, both looking at the weight displayed on the screen.",
    story:
      "Ms. Park places my package on a small digital scale on the counter. The screen shows the weight, and she checks it against a price chart nearby. “It's light, so shipping will not be too expensive,” she tells me with a smile. She asks how quickly I want the package to arrive at its destination. I explain that it does not need to be very fast, just before my sister's birthday. Ms. Park suggests a standard shipping option that will arrive in about five days. I agree, feeling glad the price and time both sound completely reasonable to me.",
    questions: [
      "What does Ms. Park place the package on?",
      "What does Ms. Park say about the shipping cost?",
      "What shipping option does Ms. Park suggest?",
    ],
    trueFalse: [
      { text: "Ms. Park places the package on a digital scale.", answer: true },
      { text: "Ms. Park says shipping will be very expensive.", answer: false },
      { text: "Omar needs the package to arrive very fast.", answer: false },
      { text: "Ms. Park suggests a standard shipping option.", answer: true },
      { text: "Omar feels the price and time sound reasonable.", answer: true },
    ],
    buildSentence: [
      { target: "The screen shows the weight.", jumbled: ["screen", "shows", "The", "the", "weight."] },
      { target: "I agree, feeling glad now.", jumbled: ["agree,", "feeling", "I", "glad", "now."] },
      { target: "It's light, so it's cheap.", jumbled: ["is", "light,", "It's", "so", "it's", "cheap."] },
      { target: "She checks it against a price chart.", jumbled: ["She", "checks", "it", "against", "a", "price", "chart."] },
      { target: "This price and time both sound reasonable.", jumbled: ["This", "price", "and", "time", "both", "sound", "reasonable."] },
    ],
    mySentencePrompt: "Write or say one sentence about choosing an option that seemed reasonable to you.",
    mySentenceExample: "I chose the option that seemed most reasonable to me.",
  },
  {
    number: 6,
    title: "Filling Out a Form",
    image: null,
    imageNote: "Omar writing on a small mailing form at the counter, Ms. Park pointing at a specific line for the address.",
    story:
      "Ms. Park gives me a small form to fill out with the shipping address. I write my sister's full name and her complete address carefully on the lines. “Make sure the zip code is correct,” Ms. Park reminds me kindly, pointing at the line. I check the number twice against my phone to make sure it matches exactly. I also write my own address in the sender's section at the top. Ms. Park checks the form quickly and says everything looks correct and complete. Filling out the form takes only a minute, much faster than I originally expected it to take.",
    questions: [
      "What does Ms. Park give Omar?",
      "What does Ms. Park remind Omar to check?",
      "How long does filling out the form take?",
    ],
    trueFalse: [
      { text: "Ms. Park gives Omar a small form.", answer: true },
      { text: "Ms. Park reminds Omar to check the zip code.", answer: true },
      { text: "Omar refuses to write his own address.", answer: false },
      { text: "Filling out the form takes only a minute.", answer: true },
      { text: "The form takes much longer than expected.", answer: false },
    ],
    buildSentence: [
      { target: "I fill out the form.", jumbled: ["fill", "out", "I", "the", "form."] },
      { target: "I check the number twice.", jumbled: ["check", "the", "I", "number", "twice."] },
      { target: "This takes only a minute.", jumbled: ["takes", "only", "This", "a", "minute."] },
      { target: "Make sure the zip code is correct.", jumbled: ["sure", "the", "Make", "zip", "code", "is", "correct."] },
      { target: "This is much faster than I expected it to take.", jumbled: ["This", "is", "much", "faster", "than", "I", "expected", "it", "to", "take."] },
    ],
    mySentencePrompt: "Write or say one sentence about filling out a form carefully.",
    mySentenceExample: "I filled out the form carefully to avoid mistakes.",
  },
  {
    number: 7,
    title: "Buying Stamps",
    image: null,
    imageNote: "Omar pointing at a small display of colorful stamps behind the counter while Ms. Park shows him a few options.",
    story:
      "While waiting, I notice a small display of colorful stamps behind the counter. I remember I also need stamps for some letters I need to send later. I ask Ms. Park if I can buy a few stamps along with the package shipping. “Of course, we have several designs to choose from,” she says, showing me a sheet. I pick a design with a picture of flowers, thinking my aunt would like receiving it. I buy ten stamps, more than I need right now, just to have extras ready. Ms. Park adds the stamps to my total cost for today's visit.",
    questions: [
      "What does Omar notice behind the counter?",
      "What does Omar ask Ms. Park about?",
      "What design does Omar choose for his stamps?",
    ],
    trueFalse: [
      { text: "Omar notices a display of colorful stamps.", answer: true },
      { text: "Omar asks if he can buy stamps too.", answer: true },
      { text: "Ms. Park says stamps are not available today.", answer: false },
      { text: "Omar chooses a design with flowers.", answer: true },
      { text: "Omar buys exactly one single stamp.", answer: false },
    ],
    buildSentence: [
      { target: "I notice a small display.", jumbled: ["notice", "a", "I", "small", "display."] },
      { target: "I ask her about stamps.", jumbled: ["ask", "her", "I", "about", "stamps."] },
      { target: "I pick a flower design.", jumbled: ["pick", "a", "I", "flower", "design."] },
      { target: "I buy ten stamps today.", jumbled: ["I", "buy", "ten", "stamps", "today."] },
      { target: "She adds the stamps to my total cost.", jumbled: ["She", "adds", "the", "stamps", "to", "my", "total", "cost."] },
    ],
    mySentencePrompt: "Write or say one sentence about buying something small along with a bigger errand.",
    mySentenceExample: "I bought stamps along with mailing my package.",
  },
  {
    number: 8,
    title: "Paying for Everything",
    image: null,
    imageNote: "Omar tapping his card on a small payment machine at the counter, Ms. Park handing him a receipt and a tracking slip.",
    story:
      "Ms. Park tells me the total cost for the shipping and the ten stamps together. I take out my card and tap it on the small payment machine on the counter. The payment goes through quickly, and the machine prints a receipt for me. Ms. Park also hands me a small tracking slip with a special number on it. “You can check this number online to see where your package is,” she explains. I thank her for her help and carefully put the receipt into my wallet. This whole visit turned out to be much easier than I originally expected.",
    questions: [
      "How does Omar pay for everything?",
      "What does Ms. Park hand Omar besides the receipt?",
      "What can Omar do with the tracking number?",
    ],
    trueFalse: [
      { text: "Omar pays by tapping his card.", answer: true },
      { text: "The machine prints a receipt for Omar.", answer: true },
      { text: "Ms. Park hands Omar a tracking slip.", answer: true },
      { text: "Omar can check the tracking number online.", answer: true },
      { text: "This visit turned out much harder than expected.", answer: false },
    ],
    buildSentence: [
      { target: "I take out my card.", jumbled: ["take", "out", "I", "my", "card."] },
      { target: "I thank her for her help.", jumbled: ["thank", "her", "I", "for", "her", "help."] },
      { target: "The machine prints a receipt.", jumbled: ["machine", "prints", "The", "a", "receipt."] },
      { target: "You can check this number online.", jumbled: ["can", "check", "You", "this", "number", "online."] },
      { target: "This visit was much easier than I expected.", jumbled: ["This", "visit", "was", "much", "easier", "than", "I", "expected."] },
    ],
    mySentencePrompt: "Write or say one sentence about paying for something at a counter.",
    mySentenceExample: "I paid for my package with my card at the counter.",
  },
  {
    number: 9,
    title: "Leaving the Post Office",
    image: null,
    imageNote: "Omar walking out of the post office through the glass doors, holding his receipt and tracking slip, sunlight outside.",
    story:
      "I say goodbye to Ms. Park and walk toward the post office's glass doors. Outside, the morning sun feels warm, and the street looks a little busier now than before. I check the tracking slip one more time to make sure I did not lose it. My package is finally on its way to my sister in another city now. I feel proud that I completed this simple errand successfully on my very first try. It seemed a little confusing at first, but everything worked out just fine. Walking home, I already feel confident about mailing packages again in the future.",
    questions: [
      "How does the morning sun feel to Omar outside?",
      "What does Omar check one more time?",
      "How does Omar feel about completing the errand?",
    ],
    trueFalse: [
      { text: "The morning sun feels warm to Omar.", answer: true },
      { text: "Omar checks the tracking slip one more time.", answer: true },
      { text: "Omar's package is finally on its way.", answer: true },
      { text: "Omar feels proud completing this errand successfully.", answer: true },
      { text: "Omar feels this errand went badly overall.", answer: false },
    ],
    buildSentence: [
      { target: "I say goodbye now.", jumbled: ["say", "goodbye", "I", "now."] },
      { target: "The sun feels warm outside.", jumbled: ["sun", "feels", "The", "warm", "outside."] },
      { target: "I feel proud about this.", jumbled: ["feel", "proud", "I", "about", "this."] },
      { target: "My package is finally on its way.", jumbled: ["My", "package", "is", "finally", "on", "its", "way."] },
      { target: "I already feel confident about mailing packages again.", jumbled: ["I", "already", "feel", "confident", "about", "mailing", "packages", "again."] },
    ],
    mySentencePrompt: "Write or say one sentence about completing an errand successfully.",
    mySentenceExample: "I felt proud after completing my errand successfully today.",
  },
  {
    number: 10,
    title: "A Message from My Sister",
    image: null,
    imageNote: "Omar sitting at home checking his phone, smiling at a tracking update and a message from his sister on the screen.",
    story:
      "A few days later, I check the tracking number Ms. Park gave me at the post office. The screen shows my package is now getting close to my sister's city. I feel a small thrill knowing the birthday gift will arrive on time. Two days after that, I receive a happy message from my sister on my phone. “I got your gift! Thank you so much, I love it,” she writes with excitement. I smile widely, feeling proud that my simple trip to the post office made her so happy. Something as small as mailing a package can create such a meaningful moment.",
    questions: [
      "What does Omar check a few days later?",
      "What does the tracking screen show?",
      "What does Omar's sister say in her message?",
    ],
    trueFalse: [
      { text: "Omar checks the tracking number a few days later.", answer: true },
      { text: "The package is getting close to his sister's city.", answer: true },
      { text: "Omar's sister never receives the package.", answer: false },
      { text: "Omar's sister says she loves the gift.", answer: true },
      { text: "Omar feels nothing about making his sister happy.", answer: false },
    ],
    buildSentence: [
      { target: "I check the tracking number.", jumbled: ["check", "the", "I", "tracking", "number."] },
      { target: "I feel a small thrill.", jumbled: ["feel", "a", "I", "small", "thrill."] },
      { target: "I smile widely now.", jumbled: ["smile", "widely", "I", "now."] },
      { target: "I got your gift, she writes.", jumbled: ["got", "your", "I", "gift,", "she", "writes."] },
      { target: "Something small can create such a meaningful moment.", jumbled: ["Something", "small", "can", "create", "such", "a", "meaningful", "moment."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small action that created a meaningful moment.",
    mySentenceExample: "Sending a simple card created a meaningful moment for my friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A1 Adults digital storybook, Book 45: "Cooking Dinner for the Family"
// Static content -- no Supabase. Fifth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Cooking Dinner for the Family";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Miguel standing at a kitchen stove stirring a pot, his wife and two children sitting at a nearby table, warm kitchen light filling the room.";

export const CHARACTERS = [
  { name: "Miguel", role: "The narrator, an adult", look: "Apron over his shirt, wooden spoon in hand, determined but a little unsure in the kitchen." },
  { name: "Sofia", role: "Miguel's wife", look: "Comfortable sweater, warm smile, supportive and encouraging." },
  { name: "Lucas and Mia", role: "Miguel and Sofia's two children", look: "Casual home clothes, curious and hungry expressions." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Special Plan",
    image: null,
    imageNote: "Miguel standing in the kitchen looking at a recipe on his phone, ingredients spread out on the counter in front of him.",
    story:
      "Tonight, Sofia has to work late, so I decide to cook dinner for our family myself. I do not cook very often, so I feel a little nervous about this plan. I find a simple recipe on my phone for chicken and vegetables. I write down the ingredients I need and check what I already have at home. I am missing a few things, so I plan a quick trip to the store first. Lucas and Mia are excited when I tell them I am cooking tonight. “Can we help too?” Mia asks with a big smile on her face.",
    questions: [
      "Why does Miguel decide to cook dinner tonight?",
      "How does Miguel feel about this plan?",
      "What does Mia ask Miguel?",
    ],
    trueFalse: [
      { text: "Sofia has to work late tonight.", answer: true },
      { text: "Miguel cooks dinner every single night.", answer: false },
      { text: "Miguel finds a recipe on his phone.", answer: true },
      { text: "Lucas and Mia feel upset about the plan.", answer: false },
      { text: "Mia asks if she can help too.", answer: true },
    ],
    buildSentence: [
      { target: "I decide to cook dinner.", jumbled: ["decide", "to", "I", "cook", "dinner."] },
      { target: "I feel a little nervous.", jumbled: ["feel", "a", "I", "little", "nervous."] },
      { target: "I find a simple recipe.", jumbled: ["find", "a", "I", "simple", "recipe."] },
      { target: "I plan a quick trip.", jumbled: ["plan", "a", "I", "quick", "trip."] },
      { target: "Can we help too, Mia asks.", jumbled: ["we", "help", "Can", "too,", "Mia", "asks."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you tried cooking something new.",
    mySentenceExample: "I felt nervous the first time I tried cooking soup.",
  },
  {
    number: 2,
    title: "Buying the Ingredients",
    image: null,
    imageNote: "Miguel pushing a small shopping cart through a grocery store aisle with Lucas and Mia beside him, checking a list on his phone.",
    story:
      "I take Lucas and Mia with me to the store to buy the ingredients we need. They enjoy walking through the aisles and helping me find items on my list. Lucas finds the chicken quickly, and Mia picks out fresh carrots and potatoes carefully. I check my phone to make sure I do not forget anything important. The kids ask if we can also buy a small dessert for after dinner. I agree, and we choose a small chocolate cake to share together later. Shopping together feels fun, and it makes the trip go by much faster.",
    questions: [
      "Who does Miguel take with him to the store?",
      "What does Lucas find quickly?",
      "What do the kids ask to buy?",
    ],
    trueFalse: [
      { text: "Miguel takes Lucas and Mia to the store.", answer: true },
      { text: "Lucas refuses to help find any items.", answer: false },
      { text: "Mia picks out fresh carrots and potatoes.", answer: true },
      { text: "The kids ask for a small dessert.", answer: true },
      { text: "Miguel refuses to buy any dessert.", answer: false },
    ],
    buildSentence: [
      { target: "I take them to the store.", jumbled: ["take", "them", "I", "to", "the", "store."] },
      { target: "Lucas finds the chicken quickly.", jumbled: ["Lucas", "finds", "the", "chicken", "quickly."] },
      { target: "I check my phone carefully.", jumbled: ["check", "my", "I", "phone", "carefully."] },
      { target: "We choose a chocolate cake.", jumbled: ["choose", "a", "We", "chocolate", "cake."] },
      { target: "Shopping together makes the trip go faster.", jumbled: ["Shopping", "together", "makes", "the", "trip", "go", "faster."] },
    ],
    mySentencePrompt: "Write or say one sentence about shopping with family or friends.",
    mySentenceExample: "Shopping with my children makes the trip more fun.",
  },
  {
    number: 3,
    title: "Getting Started",
    image: null,
    imageNote: "Miguel washing vegetables at the kitchen sink, a recipe open on his phone propped against a jar on the counter.",
    story:
      "Back home, I put on my apron and set my phone on the counter for the recipe. First, I wash the vegetables carefully under running water in the sink. I cut the carrots and potatoes into small pieces, just like the recipe shows. The chicken needs to be cleaned and seasoned with salt and pepper next. I feel a little slow at first, checking the recipe after almost every single step. Sofia calls to check on us, and I tell her everything is going okay so far. “You can do this,” she says encouragingly before hanging up the phone.",
    questions: [
      "What does Miguel wash first?",
      "How does Miguel cut the carrots and potatoes?",
      "What does Sofia say to Miguel on the phone?",
    ],
    trueFalse: [
      { text: "Miguel washes the vegetables first.", answer: true },
      { text: "Miguel cuts the vegetables into large pieces.", answer: false },
      { text: "Miguel seasons the chicken with salt and pepper.", answer: true },
      { text: "Sofia does not call to check on them.", answer: false },
      { text: "Sofia says you can do this.", answer: true },
    ],
    buildSentence: [
      { target: "I put on my apron.", jumbled: ["put", "on", "I", "my", "apron."] },
      { target: "I wash the vegetables carefully.", jumbled: ["wash", "the", "I", "vegetables", "carefully."] },
      { target: "I feel a little slow.", jumbled: ["feel", "a", "I", "little", "slow."] },
      { target: "Everything is going okay so far.", jumbled: ["Everything", "is", "going", "okay", "so", "far."] },
      { target: "You can do this, she says encouragingly.", jumbled: ["can", "do", "You", "this,", "she", "says", "encouragingly."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone who encouraged you to try something.",
    mySentenceExample: "My friend encouraged me to try cooking a new dish.",
  },
  {
    number: 4,
    title: "The Kids Help Out",
    image: null,
    imageNote: "Lucas stirring a bowl of vegetables while Mia sets the table, both children happily helping in the kitchen with Miguel supervising.",
    story:
      "Lucas asks if he can stir the vegetables in the bowl, and I let him carefully help me. He stirs slowly and proudly, happy to be part of making dinner tonight. Mia decides to set the table instead, placing plates and forks in the right spots. She counts the plates carefully to make sure everyone has exactly what they need. Watching them help makes me smile, even though the kitchen is getting a little messy. Cooking together as a small team feels much more fun than cooking completely alone. I thank them both for being such wonderful little helpers tonight.",
    questions: [
      "What does Lucas ask to help with?",
      "What does Mia decide to do instead?",
      "How does Miguel feel watching the kids help?",
    ],
    trueFalse: [
      { text: "Lucas asks to stir the vegetables.", answer: true },
      { text: "Mia refuses to help with anything.", answer: false },
      { text: "Mia sets the table with plates and forks.", answer: true },
      { text: "Miguel feels annoyed watching them help.", answer: false },
      { text: "Miguel thanks the kids for helping.", answer: true },
    ],
    buildSentence: [
      { target: "Lucas stirs the vegetables.", jumbled: ["stirs", "the", "Lucas", "vegetables."] },
      { target: "Mia sets the table.", jumbled: ["sets", "the", "Mia", "table."] },
      { target: "This makes me smile now.", jumbled: ["makes", "me", "This", "smile", "now."] },
      { target: "I thank them both tonight.", jumbled: ["thank", "them", "I", "both", "tonight."] },
      { target: "Cooking together feels more fun than cooking alone.", jumbled: ["Cooking", "together", "feels", "more", "fun", "than", "cooking", "alone."] },
    ],
    mySentencePrompt: "Write or say one sentence about doing a task together with family.",
    mySentenceExample: "Cleaning the house together with my family feels more fun.",
  },
  {
    number: 5,
    title: "A Small Mistake",
    image: null,
    imageNote: "Miguel looking worried at a slightly burnt pan on the stove, waving away smoke with a kitchen towel.",
    story:
      "While talking with the kids, I forget to check the chicken cooking in the pan on the stove. Suddenly, I smell something burning and rush over to check it quickly. One side of the chicken looks darker than it should, and a little smoke rises up. I feel worried and turn off the stove immediately, moving the pan to a cool spot. Looking closely, only the outside is a little too dark, but the inside still looks fine. I decide the dinner is not ruined completely, just slightly imperfect now. I laugh a little at my small kitchen mistake tonight.",
    questions: [
      "What does Miguel forget to check?",
      "What does Miguel smell suddenly?",
      "How does Miguel react to the mistake?",
    ],
    trueFalse: [
      { text: "Miguel forgets to check the chicken.", answer: true },
      { text: "Miguel smells something burning.", answer: true },
      { text: "The entire dinner is completely ruined.", answer: false },
      { text: "Miguel feels worried and turns off the stove.", answer: true },
      { text: "Miguel refuses to laugh about the mistake.", answer: false },
    ],
    buildSentence: [
      { target: "I forget to check it.", jumbled: ["forget", "to", "I", "check", "it."] },
      { target: "I smell something burning.", jumbled: ["smell", "something", "I", "burning."] },
      { target: "I feel worried now.", jumbled: ["feel", "worried", "I", "now."] },
      { target: "I turn off the stove immediately.", jumbled: ["I", "turn", "off", "the", "stove", "immediately."] },
      { target: "I laugh a little at my mistake tonight.", jumbled: ["I", "laugh", "a", "little", "at", "my", "mistake", "tonight."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small mistake you made while cooking.",
    mySentenceExample: "I made a small mistake and burned the toast once.",
  },
  {
    number: 6,
    title: "Fixing the Dinner",
    image: null,
    imageNote: "Miguel carefully cutting away the darker part of the chicken, checking it with a fork, the kids watching curiously nearby.",
    story:
      "I carefully cut away the slightly burnt part of the chicken with a sharp knife. The rest of the meat looks perfectly fine and smells delicious still. I check it one more time with a fork to make sure it is fully cooked. Lucas and Mia watch curiously, asking if the chicken is still safe to eat. “Yes, it's completely fine now,” I tell them, feeling more confident about the situation. I add the vegetables to the pan and let everything cook together for a few more minutes. The kitchen starts to smell wonderful, and my confidence slowly starts coming back.",
    questions: [
      "What does Miguel cut away with a knife?",
      "What do Lucas and Mia ask?",
      "What does Miguel add to the pan?",
    ],
    trueFalse: [
      { text: "Miguel cuts away the burnt part with a knife.", answer: true },
      { text: "The rest of the chicken looks ruined too.", answer: false },
      { text: "The kids ask if the chicken is safe to eat.", answer: true },
      { text: "Miguel adds the vegetables to the pan.", answer: true },
      { text: "The kitchen starts to smell bad.", answer: false },
    ],
    buildSentence: [
      { target: "I cut away the burnt part.", jumbled: ["cut", "away", "I", "the", "burnt", "part."] },
      { target: "I check it with a fork.", jumbled: ["check", "it", "I", "with", "a", "fork."] },
      { target: "It's completely fine now.", jumbled: ["is", "completely", "It's", "fine", "now."] },
      { target: "I add the vegetables now.", jumbled: ["add", "the", "I", "vegetables", "now."] },
      { target: "My confidence slowly starts coming back.", jumbled: ["My", "confidence", "slowly", "starts", "coming", "back."] },
    ],
    mySentencePrompt: "Write or say one sentence about fixing something that went a little wrong.",
    mySentenceExample: "I fixed my drawing after making a small mistake.",
  },
  {
    number: 7,
    title: "Setting the Table",
    image: null,
    imageNote: "The family gathering around a fully set dinner table, Mia placing napkins carefully while Miguel carries the finished dish to the table.",
    story:
      "The dinner finally looks ready, so I turn off the stove and prepare to serve it. Mia already set the table earlier, so everything is neat and ready for us. I carry the pan carefully to the table and serve everyone a portion. The chicken and vegetables look colorful and smell wonderful in the warm kitchen. Lucas helps by pouring water into everyone's glasses at the table. We all sit down together, and I feel proud looking at the meal I cooked. Even with the small mistake earlier, dinner looks surprisingly good tonight.",
    questions: [
      "Who already set the table earlier?",
      "What does Lucas help with?",
      "How does Miguel feel looking at the meal?",
    ],
    trueFalse: [
      { text: "Mia already set the table earlier.", answer: true },
      { text: "Miguel serves everyone a portion.", answer: true },
      { text: "Lucas refuses to help with anything at the table.", answer: false },
      { text: "Miguel feels proud looking at the meal.", answer: true },
      { text: "The dinner looks completely ruined despite the effort.", answer: false },
    ],
    buildSentence: [
      { target: "The dinner finally looks ready.", jumbled: ["dinner", "finally", "The", "looks", "ready."] },
      { target: "I serve everyone a portion.", jumbled: ["serve", "everyone", "I", "a", "portion."] },
      { target: "We all sit down together.", jumbled: ["We", "all", "sit", "down", "together."] },
      { target: "I feel proud looking at this.", jumbled: ["feel", "proud", "I", "looking", "at", "this."] },
      { target: "Dinner looks surprisingly good tonight.", jumbled: ["Dinner", "looks", "surprisingly", "good", "tonight."] },
    ],
    mySentencePrompt: "Write or say one sentence about sitting down to eat with your family.",
    mySentenceExample: "I feel happy sitting down to eat dinner with my family.",
  },
  {
    number: 8,
    title: "Sofia Comes Home",
    image: null,
    imageNote: "Sofia walking through the front door, smiling with surprise as she sees the family sitting at a set dinner table.",
    story:
      "Just as we start eating, Sofia arrives home from her long day of work. She walks into the kitchen and sees us all sitting at the table together. Her eyes widen with surprise, and she smiles warmly at the scene in front of her. “You actually cooked a whole dinner?” she asks, clearly impressed by the effort I made. I invite her to sit down and try a plate before it gets too cold. She tastes the chicken and vegetables and says it tastes really good tonight. I feel proud that my small kitchen mistake did not ruin the whole meal.",
    questions: [
      "When does Sofia arrive home?",
      "How does Sofia react seeing the table?",
      "What does Sofia say about the food?",
    ],
    trueFalse: [
      { text: "Sofia arrives home just as they start eating.", answer: true },
      { text: "Sofia feels no surprise at all seeing the table.", answer: false },
      { text: "Sofia asks if Miguel actually cooked a whole dinner.", answer: true },
      { text: "Sofia says the food tastes really good.", answer: true },
      { text: "Miguel feels the mistake ruined the whole meal.", answer: false },
    ],
    buildSentence: [
      { target: "Sofia arrives home now.", jumbled: ["arrives", "home", "Sofia", "now."] },
      { target: "Her eyes widen with surprise.", jumbled: ["Her", "eyes", "widen", "with", "surprise."] },
      { target: "I invite her to sit down.", jumbled: ["invite", "her", "I", "to", "sit", "down."] },
      { target: "This tastes really good tonight.", jumbled: ["This", "tastes", "really", "good", "tonight."] },
      { target: "I feel proud that the meal wasn't ruined.", jumbled: ["I", "feel", "proud", "that", "the", "meal", "wasn't", "ruined."] },
    ],
    mySentencePrompt: "Write or say one sentence about surprising someone with something you did.",
    mySentenceExample: "I surprised my mom by cleaning the whole house.",
  },
  {
    number: 9,
    title: "Enjoying Dessert Together",
    image: null,
    imageNote: "The family sitting together eating slices of chocolate cake, everyone smiling and talking around the dinner table.",
    story:
      "After finishing dinner, I bring out the small chocolate cake we bought earlier at the store. Everyone's eyes light up, and Mia claps her hands excitedly at the table. I cut the cake carefully and give everyone a slice on their plate. We eat dessert together, laughing and talking about our day around the table. Sofia tells us about her busy day at work while enjoying her piece of cake. Lucas talks proudly about helping stir the vegetables earlier in the kitchen. This simple family moment feels warm and special, even though tonight started with a small kitchen mistake.",
    questions: [
      "What dessert does Miguel bring out?",
      "How does Mia react seeing the cake?",
      "What does Lucas talk proudly about?",
    ],
    trueFalse: [
      { text: "Miguel brings out a small chocolate cake.", answer: true },
      { text: "Mia feels nothing seeing the cake.", answer: false },
      { text: "Miguel gives everyone a slice of cake.", answer: true },
      { text: "Lucas talks proudly about helping stir the vegetables.", answer: true },
      { text: "This family moment feels cold and awkward.", answer: false },
    ],
    buildSentence: [
      { target: "I bring out the cake.", jumbled: ["bring", "out", "I", "the", "cake."] },
      { target: "Everyone's eyes light up.", jumbled: ["eyes", "light", "Everyone's", "up."] },
      { target: "We eat dessert together.", jumbled: ["eat", "dessert", "We", "together."] },
      { target: "Lucas talks proudly about helping.", jumbled: ["Lucas", "talks", "proudly", "about", "helping."] },
      { target: "This family moment feels warm and special.", jumbled: ["This", "family", "moment", "feels", "warm", "and", "special."] },
    ],
    mySentencePrompt: "Write or say one sentence about a special moment with your family.",
    mySentenceExample: "Eating dessert together is a special moment for my family.",
  },
  {
    number: 10,
    title: "A Proud Cook",
    image: null,
    imageNote: "Miguel washing dishes at the sink that evening, looking satisfied, Sofia drying dishes beside him and smiling.",
    story:
      "Later that evening, Sofia and I wash the dishes together while the kids watch television. “I'm proud of you for cooking tonight,” Sofia says, drying a plate beside me. I tell her about the small mistake with the chicken, and she laughs kindly about it. “Everyone makes mistakes when they try something new,” she reminds me warmly. I feel happy that dinner turned out well despite my nervous start earlier today. Cooking for my family taught me something important about trying new things bravely. Next time, I already feel more confident about cooking dinner again for everyone.",
    questions: [
      "What do Sofia and Miguel do together that evening?",
      "What does Sofia say she is proud of?",
      "How does Miguel feel about cooking next time?",
    ],
    trueFalse: [
      { text: "Sofia and Miguel wash the dishes together.", answer: true },
      { text: "Sofia says she is proud of Miguel for cooking.", answer: true },
      { text: "Sofia gets angry hearing about the small mistake.", answer: false },
      { text: "Miguel feels happy that dinner turned out well.", answer: true },
      { text: "Miguel feels less confident about cooking again.", answer: false },
    ],
    buildSentence: [
      { target: "We wash the dishes together.", jumbled: ["wash", "the", "We", "dishes", "together."] },
      { target: "I'm proud of you, she says.", jumbled: ["proud", "of", "I'm", "you,", "she", "says."] },
      { target: "I feel happy about this.", jumbled: ["feel", "happy", "I", "about", "this."] },
      { target: "Everyone makes mistakes trying something new.", jumbled: ["Everyone", "makes", "mistakes", "trying", "something", "new."] },
      { target: "I feel more confident about cooking again.", jumbled: ["I", "feel", "more", "confident", "about", "cooking", "again."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling proud after trying something new.",
    mySentenceExample: "I felt proud after trying something new and it went well.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

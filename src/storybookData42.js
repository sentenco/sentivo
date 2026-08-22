// A1 Adults digital storybook, Book 42: "Grocery Shopping for the Week"
// Static content -- no Supabase. Second book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Grocery Shopping for the Week";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Priya pushing a shopping cart down a grocery store aisle, checking a handwritten list, shelves of colorful food around her.";

export const CHARACTERS = [
  { name: "Priya", role: "The narrator, an adult", look: "Casual jacket, reusable shopping bag, practical and a little tired after work." },
  { name: "Tom", role: "A grocery store worker", look: "Store apron, name tag, friendly and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Making a List",
    image: null,
    imageNote: "Priya sitting at her kitchen table, writing a shopping list on paper, an empty fridge visible behind her.",
    story:
      "It is Saturday morning, and my fridge is almost empty. I sit at my kitchen table and make a shopping list. I write down milk, eggs, bread, and vegetables. I also need chicken and rice for dinner this week. My list gets longer as I check each cupboard in my kitchen. I like making a list because it helps me remember everything I need. Without a list, I always forget something important. I put the list in my pocket and grab my reusable bags. Then I get my car keys and get ready to go to the store.",
    questions: [
      "What day is it?",
      "Why does Priya make a shopping list?",
      "What does Priya grab before leaving?",
    ],
    trueFalse: [
      { text: "It is Saturday morning.", answer: true },
      { text: "Priya's fridge is completely full.", answer: false },
      { text: "Priya writes milk, eggs, bread, and vegetables on her list.", answer: true },
      { text: "Priya never forgets anything without a list.", answer: false },
      { text: "Priya grabs her reusable bags.", answer: true },
    ],
    buildSentence: [
      { target: "I make a list.", jumbled: ["make", "a", "I", "list."] },
      { target: "My fridge is almost empty.", jumbled: ["fridge", "is", "My", "almost", "empty."] },
      { target: "I check each cupboard.", jumbled: ["check", "each", "I", "cupboard."] },
      { target: "This helps me remember everything.", jumbled: ["helps", "me", "This", "remember", "everything."] },
      { target: "I get ready to go to the store.", jumbled: ["get", "ready", "I", "to", "go", "to", "the", "store."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you write a list for.",
    mySentenceExample: "I write a list before I go grocery shopping every week.",
  },
  {
    number: 2,
    title: "Arriving at the Store",
    image: null,
    imageNote: "Priya walking through automatic doors into a busy grocery store, grabbing a shopping cart near the entrance.",
    story:
      "I arrive at the grocery store and park my car near the entrance. The store is busy today because it is the weekend. I grab a cart and walk through the automatic doors. Bright lights and colorful signs greet me inside. I take out my list and check the first item: milk. I know this store well, so I walk straight to the dairy section. Many other people are shopping too, and the aisles feel a little crowded. I push my cart carefully around other shoppers. Shopping on a Saturday always takes a little longer than usual.",
    questions: [
      "Why is the store busy today?",
      "What does Priya grab near the entrance?",
      "What is the first item on Priya's list?",
    ],
    trueFalse: [
      { text: "The store is busy because it is the weekend.", answer: true },
      { text: "Priya does not grab a cart.", answer: false },
      { text: "Milk is the first item on Priya's list.", answer: true },
      { text: "The store is completely empty today.", answer: false },
      { text: "Priya pushes her cart carefully around other shoppers.", answer: true },
    ],
    buildSentence: [
      { target: "I grab a cart.", jumbled: ["grab", "a", "I", "cart."] },
      { target: "The store is busy today.", jumbled: ["store", "is", "The", "busy", "today."] },
      { target: "I walk to the dairy section.", jumbled: ["walk", "to", "I", "the", "dairy", "section."] },
      { target: "I push my cart carefully.", jumbled: ["push", "my", "I", "cart", "carefully."] },
      { target: "Shopping on Saturday takes a little longer.", jumbled: ["Shopping", "on", "Saturday", "takes", "a", "little", "longer."] },
    ],
    mySentencePrompt: "Write or say one sentence about a busy place you visited recently.",
    mySentenceExample: "The market was very busy when I visited on Saturday.",
  },
  {
    number: 3,
    title: "Finding Everything",
    image: null,
    imageNote: "Priya standing in the produce section, comparing two bags of apples, checking prices on a shelf label.",
    story:
      "I walk through the produce section and pick fresh apples and carrots. I check the prices carefully because I want to stay within my budget. Some vegetables cost more than I expect, so I choose a cheaper option instead. Next, I find the bread aisle and pick a loaf of whole wheat bread. I also find rice and chicken in the next two aisles. My cart slowly fills up with all the items on my list. I feel good about finding everything without much trouble. Shopping feels easier when I already know where things are in the store.",
    questions: [
      "What does Priya pick in the produce section?",
      "Why does Priya check prices carefully?",
      "What kind of bread does Priya pick?",
    ],
    trueFalse: [
      { text: "Priya picks fresh apples and carrots.", answer: true },
      { text: "Priya does not care about prices at all.", answer: false },
      { text: "Priya picks whole wheat bread.", answer: true },
      { text: "Priya cannot find rice or chicken.", answer: false },
      { text: "Priya feels good about finding everything.", answer: true },
    ],
    buildSentence: [
      { target: "I pick fresh apples.", jumbled: ["pick", "fresh", "I", "apples."] },
      { target: "I check the prices carefully.", jumbled: ["check", "the", "I", "prices", "carefully."] },
      { target: "I find rice and chicken.", jumbled: ["find", "rice", "I", "and", "chicken."] },
      { target: "My cart slowly fills up.", jumbled: ["cart", "slowly", "My", "fills", "up."] },
      { target: "Shopping feels easier when I know where things are.", jumbled: ["Shopping", "feels", "easier", "when", "I", "know", "where", "things", "are."] },
    ],
    mySentencePrompt: "Write or say one sentence about checking prices while shopping.",
    mySentenceExample: "I check the prices carefully before I buy fruit.",
  },
  {
    number: 4,
    title: "Asking for Help",
    image: null,
    imageNote: "Priya asking Tom, a store worker, for directions in an aisle, Tom pointing helpfully toward a shelf.",
    story:
      "I look for a special kind of pasta, but I cannot find it anywhere in the aisle. I decide to ask a store worker for help. His name tag says Tom, and he smiles when I ask my question. “The pasta is on aisle six, next to the sauces,” he says kindly. I thank him and walk to aisle six right away. He is right, and I find the pasta exactly where he said. Tom also tells me about a sale on canned tomatoes nearby. I add two cans to my cart because I know I will use them soon.",
    questions: [
      "What does Priya look for but cannot find?",
      "Who helps Priya find the pasta?",
      "What does Tom tell Priya about?",
    ],
    trueFalse: [
      { text: "Priya cannot find a special kind of pasta.", answer: true },
      { text: "Priya refuses to ask anyone for help.", answer: false },
      { text: "Tom tells Priya the pasta is on aisle six.", answer: true },
      { text: "Tom tells Priya about a sale on canned tomatoes.", answer: true },
      { text: "Priya does not buy any canned tomatoes.", answer: false },
    ],
    buildSentence: [
      { target: "I ask for help.", jumbled: ["ask", "for", "I", "help."] },
      { target: "I thank him kindly.", jumbled: ["thank", "him", "I", "kindly."] },
      { target: "He smiles at my question.", jumbled: ["smiles", "at", "He", "my", "question."] },
      { target: "I find the pasta there.", jumbled: ["find", "the", "I", "pasta", "there."] },
      { target: "I add two cans to my cart.", jumbled: ["add", "two", "I", "cans", "to", "my", "cart."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time a worker helped you find something.",
    mySentenceExample: "A worker helped me find the shoes I wanted at the store.",
  },
  {
    number: 5,
    title: "Staying on Budget",
    image: null,
    imageNote: "Priya using a calculator app on her phone while looking at items in her cart, checking a small notepad with numbers.",
    story:
      "Halfway through my shopping, I stop to check my phone's calculator. I want to make sure I do not spend too much money today. I add up the prices of items already in my cart. The total is close to my budget, so I need to be careful with the rest. I decide to skip the expensive cheese and choose a cheaper brand instead. I also put back a bag of chips I do not really need. Staying on budget takes some effort, but it feels good to be responsible with my money. I continue shopping with more careful choices now.",
    questions: [
      "What does Priya check halfway through shopping?",
      "What does Priya decide to skip?",
      "How does Priya feel about staying on budget?",
    ],
    trueFalse: [
      { text: "Priya checks her phone's calculator.", answer: true },
      { text: "Priya spends without thinking about money.", answer: false },
      { text: "Priya decides to skip the expensive cheese.", answer: true },
      { text: "Priya puts back a bag of chips.", answer: true },
      { text: "Priya feels bad about being responsible with money.", answer: false },
    ],
    buildSentence: [
      { target: "I check my phone.", jumbled: ["check", "my", "I", "phone."] },
      { target: "I need to be careful.", jumbled: ["need", "to", "I", "be", "careful."] },
      { target: "I skip the expensive cheese.", jumbled: ["skip", "the", "I", "expensive", "cheese."] },
      { target: "This feels good to me.", jumbled: ["feels", "good", "This", "to", "me."] },
      { target: "I continue shopping with careful choices now.", jumbled: ["I", "continue", "shopping", "with", "careful", "choices", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying on a budget.",
    mySentenceExample: "I stay on a budget by checking prices before I buy things.",
  },
  {
    number: 6,
    title: "The Long Line",
    image: null,
    imageNote: "Priya standing in a long checkout line with her full cart, other shoppers waiting behind her, a cashier scanning items ahead.",
    story:
      "When I finish shopping, I push my full cart toward the checkout area. Many other people are also finishing their shopping, so the lines are long today. I choose a line that looks the shortest and wait patiently with my cart. The person in front of me has many items too, so the line moves slowly. I check my phone while I wait and reply to a message from my sister. After about ten minutes, it is finally my turn. I start putting my groceries on the counter for the cashier to scan.",
    questions: [
      "Why are the checkout lines long today?",
      "What does Priya do while she waits?",
      "How long does Priya wait in line?",
    ],
    trueFalse: [
      { text: "The checkout lines are long today.", answer: true },
      { text: "Priya refuses to wait in any line.", answer: false },
      { text: "Priya checks her phone while waiting.", answer: true },
      { text: "Priya waits about ten minutes.", answer: true },
      { text: "Priya leaves the store without paying.", answer: false },
    ],
    buildSentence: [
      { target: "I push my full cart.", jumbled: ["push", "my", "I", "full", "cart."] },
      { target: "I wait patiently in line.", jumbled: ["wait", "patiently", "I", "in", "line."] },
      { target: "The line moves slowly today.", jumbled: ["line", "moves", "The", "slowly", "today."] },
      { target: "I reply to a message.", jumbled: ["reply", "to", "I", "a", "message."] },
      { target: "It is finally my turn now.", jumbled: ["It", "is", "finally", "my", "turn", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting in a long line.",
    mySentenceExample: "I waited in a long line at the bank last week.",
  },
  {
    number: 7,
    title: "Paying for Groceries",
    image: null,
    imageNote: "Priya tapping her card on a payment machine at the checkout counter, the cashier smiling and handing her a receipt.",
    story:
      "The cashier scans all my items quickly and tells me the total price. I take out my card and tap it on the small machine. The payment goes through, and the machine prints a long receipt. “Thank you, have a nice day,” the cashier says with a smile. I say thank you back and start putting my groceries into my reusable bags. The bags feel heavy, but I am happy that shopping is almost finished. I check the receipt quickly to make sure everything is correct. Everything looks right, so I fold the receipt and put it in my pocket.",
    questions: [
      "What does the cashier do with Priya's items?",
      "How does Priya pay for her groceries?",
      "What does Priya check before leaving?",
    ],
    trueFalse: [
      { text: "The cashier scans all of Priya's items.", answer: true },
      { text: "Priya pays with cash only.", answer: false },
      { text: "Priya taps her card on the machine.", answer: true },
      { text: "The machine prints a receipt.", answer: true },
      { text: "Priya ignores the receipt completely.", answer: false },
    ],
    buildSentence: [
      { target: "I take out my card.", jumbled: ["take", "out", "I", "my", "card."] },
      { target: "The machine prints a receipt.", jumbled: ["machine", "prints", "The", "a", "receipt."] },
      { target: "I say thank you back.", jumbled: ["say", "thank", "I", "you", "back."] },
      { target: "The bags feel heavy now.", jumbled: ["bags", "feel", "The", "heavy", "now."] },
      { target: "I check the receipt to make sure it's correct.", jumbled: ["I", "check", "the", "receipt", "to", "make", "sure", "it's", "correct."] },
    ],
    mySentencePrompt: "Write or say one sentence about paying for something at a store.",
    mySentenceExample: "I paid for my groceries with my card at the store.",
  },
  {
    number: 8,
    title: "Loading the Car",
    image: null,
    imageNote: "Priya loading grocery bags into the trunk of her car in the parking lot, the shopping cart standing beside her.",
    story:
      "I push my cart to my car and open the trunk carefully. I lift the heavy bags one by one and place them inside. Some bags are heavier than others, so I organize them to keep the eggs safe on top. After loading everything, I close the trunk and take a deep breath. I push the empty cart to the cart return area near my car. The parking lot is still busy, so I walk carefully between the cars. Finally, I get into my car and feel relieved that the shopping trip is finished for another week.",
    questions: [
      "What does Priya do with the heavy bags?",
      "Why does Priya organize the bags carefully?",
      "Where does Priya push the empty cart?",
    ],
    trueFalse: [
      { text: "Priya lifts the heavy bags one by one.", answer: true },
      { text: "Priya throws the eggs at the bottom carelessly.", answer: false },
      { text: "Priya organizes the bags to keep the eggs safe.", answer: true },
      { text: "Priya leaves the cart in the middle of the lot.", answer: false },
      { text: "Priya feels relieved when the trip is finished.", answer: true },
    ],
    buildSentence: [
      { target: "I open the trunk.", jumbled: ["open", "the", "I", "trunk."] },
      { target: "I lift the heavy bags.", jumbled: ["lift", "the", "I", "heavy", "bags."] },
      { target: "I close the trunk now.", jumbled: ["close", "the", "I", "trunk", "now."] },
      { target: "I walk carefully between the cars.", jumbled: ["walk", "carefully", "I", "between", "the", "cars."] },
      { target: "I feel relieved that the trip is finished.", jumbled: ["I", "feel", "relieved", "that", "the", "trip", "is", "finished."] },
    ],
    mySentencePrompt: "Write or say one sentence about finishing an errand or task.",
    mySentenceExample: "I felt relieved when I finished cleaning my apartment.",
  },
  {
    number: 9,
    title: "Putting Groceries Away",
    image: null,
    imageNote: "Priya standing in her kitchen, placing groceries into the fridge and cupboards, the full bags sitting on the counter.",
    story:
      "At home, I carry all the bags into my kitchen and place them on the counter. I start putting the cold items into the fridge first, like milk, eggs, and vegetables. Then I put the dry items, like rice and pasta, into my cupboards. My kitchen looks much more organized now than it did this morning. I fold the empty bags and put them in a drawer for next time. Looking at my full fridge and cupboards makes me feel satisfied. All this food will last me through the busy week ahead. I feel ready and prepared now.",
    questions: [
      "What does Priya put in the fridge first?",
      "What does Priya do with the empty bags?",
      "How does Priya feel looking at her full fridge?",
    ],
    trueFalse: [
      { text: "Priya puts milk, eggs, and vegetables in the fridge first.", answer: true },
      { text: "Priya throws away the empty bags.", answer: false },
      { text: "Priya puts rice and pasta in her cupboards.", answer: true },
      { text: "Priya's kitchen looks messier than before.", answer: false },
      { text: "Priya feels satisfied looking at her full fridge.", answer: true },
    ],
    buildSentence: [
      { target: "I carry the bags inside.", jumbled: ["carry", "the", "I", "bags", "inside."] },
      { target: "I feel satisfied now.", jumbled: ["feel", "satisfied", "I", "now."] },
      { target: "I fold the empty bags.", jumbled: ["fold", "the", "I", "empty", "bags."] },
      { target: "My kitchen looks more organized now.", jumbled: ["My", "kitchen", "looks", "more", "organized", "now."] },
      { target: "This food will last me through the busy week.", jumbled: ["This", "food", "will", "last", "me", "through", "the", "busy", "week."] },
    ],
    mySentencePrompt: "Write or say one sentence about organizing something in your home.",
    mySentenceExample: "I organized my closet last weekend and it feels good.",
  },
  {
    number: 10,
    title: "A Good Week Ahead",
    image: null,
    imageNote: "Priya sitting at her kitchen table with a cup of tea, looking at her full fridge with a satisfied smile.",
    story:
      "That evening, I sit at my kitchen table with a warm cup of tea. I look at my full fridge and feel good about my Saturday shopping trip. I already planned meals for the week using the food I bought today. Tomorrow, I will cook chicken and rice for dinner, using the fresh ingredients I chose carefully. Shopping used to feel stressful, but now it feels more like a simple routine. I know I will not run out of food this week, and that feels comforting. I finish my tea and think about how good it feels to be prepared.",
    questions: [
      "What does Priya do that evening?",
      "What will Priya cook tomorrow?",
      "How does shopping feel to Priya now compared to before?",
    ],
    trueFalse: [
      { text: "Priya sits with a warm cup of tea.", answer: true },
      { text: "Priya has no plan for meals this week.", answer: false },
      { text: "Priya will cook chicken and rice tomorrow.", answer: true },
      { text: "Shopping now feels like a simple routine to Priya.", answer: true },
      { text: "Priya worries about running out of food.", answer: false },
    ],
    buildSentence: [
      { target: "I sit with warm tea.", jumbled: ["sit", "with", "I", "warm", "tea."] },
      { target: "I feel good about this.", jumbled: ["feel", "good", "I", "about", "this."] },
      { target: "I planned meals for the week.", jumbled: ["planned", "meals", "I", "for", "the", "week."] },
      { target: "This feels comforting to me.", jumbled: ["feels", "comforting", "This", "to", "me."] },
      { target: "It feels good to be prepared this week.", jumbled: ["It", "feels", "good", "to", "be", "prepared", "this", "week."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling prepared for something.",
    mySentenceExample: "I feel prepared for the week after I go grocery shopping.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

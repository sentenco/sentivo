// A1 Adults digital storybook, Book 46: "A Weekend at the Laundromat"
// Static content -- no Supabase. Sixth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Weekend at the Laundromat";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Hana sitting on a bench inside a laundromat, reading a book while washing machines spin behind her, a full laundry bag beside her feet.";

export const CHARACTERS = [
  { name: "Hana", role: "The narrator, an adult", look: "Comfortable weekend clothes, hair tied back, a little tired but relaxed." },
  { name: "George", role: "A regular customer at the laundromat", look: "Baseball cap, friendly manner, chatty and helpful with the machines." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Bag Full of Laundry",
    image: null,
    imageNote: "Hana standing in her small apartment, looking at a large overflowing laundry bag on the floor.",
    story:
      "My apartment does not have a washing machine, so I go to the laundromat every weekend. Today, my laundry bag is especially full after two busy weeks at work. I gather all my dirty clothes and stuff them carefully into the large bag. I also grab some coins and a small bottle of detergent from my shelf. Carrying the heavy bag down the stairs takes a little effort this morning. I check my phone to see the laundromat's hours before I leave my building. It opens at eight, so I have plenty of time to get there today.",
    questions: [
      "Why does Hana go to the laundromat every weekend?",
      "What does Hana gather along with her clothes?",
      "What time does the laundromat open?",
    ],
    trueFalse: [
      { text: "Hana's apartment does not have a washing machine.", answer: true },
      { text: "Hana's laundry bag is empty today.", answer: false },
      { text: "Hana grabs coins and detergent.", answer: true },
      { text: "The laundromat opens at eight.", answer: true },
      { text: "Hana has no time to get there today.", answer: false },
    ],
    buildSentence: [
      { target: "I gather my dirty clothes.", jumbled: ["gather", "my", "I", "dirty", "clothes."] },
      { target: "I grab some coins too.", jumbled: ["grab", "some", "I", "coins", "too."] },
      { target: "I check my phone first.", jumbled: ["check", "my", "I", "phone", "first."] },
      { target: "The laundromat opens at eight.", jumbled: ["laundromat", "opens", "The", "at", "eight."] },
      { target: "I have plenty of time to get there.", jumbled: ["I", "have", "plenty", "of", "time", "to", "get", "there."] },
    ],
    mySentencePrompt: "Write or say one sentence about a weekly chore you do.",
    mySentenceExample: "I do my laundry every weekend at the laundromat.",
  },
  {
    number: 2,
    title: "Arriving at the Laundromat",
    image: null,
    imageNote: "Hana walking into a laundromat carrying a large laundry bag, rows of washing machines visible along the walls.",
    story:
      "I arrive at the laundromat and push open the glass door with my free hand. Rows of large washing machines line both walls, humming quietly with other people's laundry inside. The place smells clean, like soap and fresh warm air from the dryers. I find two empty machines near the back and place my heavy bag down beside them. A few other people are already there, reading magazines or looking at their phones quietly. I feel relieved that it is not too crowded this early on a Saturday morning. This gives me space to sort my clothes comfortably.",
    questions: [
      "What does Hana push open?",
      "What does the laundromat smell like?",
      "How does Hana feel about the crowd today?",
    ],
    trueFalse: [
      { text: "Hana pushes open a glass door.", answer: true },
      { text: "The laundromat smells like fresh soap and warm air.", answer: true },
      { text: "Hana finds no empty machines at all.", answer: false },
      { text: "Hana feels relieved it is not too crowded.", answer: true },
      { text: "The laundromat is completely empty of people.", answer: false },
    ],
    buildSentence: [
      { target: "I arrive at the laundromat.", jumbled: ["arrive", "at", "I", "the", "laundromat."] },
      { target: "I find two empty machines.", jumbled: ["find", "two", "I", "empty", "machines."] },
      { target: "I feel relieved now.", jumbled: ["feel", "relieved", "I", "now."] },
      { target: "The place smells clean today.", jumbled: ["place", "smells", "The", "clean", "today."] },
      { target: "This gives me space to sort my clothes.", jumbled: ["This", "gives", "me", "space", "to", "sort", "my", "clothes."] },
    ],
    mySentencePrompt: "Write or say one sentence about arriving somewhere and feeling relieved.",
    mySentenceExample: "I felt relieved when I arrived and found a seat.",
  },
  {
    number: 3,
    title: "Sorting the Clothes",
    image: null,
    imageNote: "Hana sorting laundry into two piles on a folding table, separating light and dark colored clothes.",
    story:
      "Before starting the machines, I sort my clothes into two separate piles carefully. One pile has light colors, and the other pile has dark colors only. I remember washing them together once, and a dark shirt turned my white shirts slightly gray. Since then, I always sort my laundry carefully to avoid that mistake again. I check pockets quickly for any forgotten coins, tissues, or small papers left inside. Finding an old receipt in my jeans makes me smile a little at the memory. Once everything looks properly sorted, I feel ready to start washing my clothes.",
    questions: [
      "How does Hana sort her clothes?",
      "What happened once when she washed everything together?",
      "What does Hana check in the pockets?",
    ],
    trueFalse: [
      { text: "Hana sorts her clothes into light and dark piles.", answer: true },
      { text: "A dark shirt once turned her white shirts gray.", answer: true },
      { text: "Hana never checks pockets before washing.", answer: false },
      { text: "Hana finds an old receipt in her jeans.", answer: true },
      { text: "Hana feels unprepared to start washing.", answer: false },
    ],
    buildSentence: [
      { target: "I sort my clothes carefully.", jumbled: ["sort", "my", "I", "clothes", "carefully."] },
      { target: "I check pockets quickly.", jumbled: ["check", "pockets", "I", "quickly."] },
      { target: "This makes me smile a little.", jumbled: ["makes", "me", "This", "smile", "a", "little."] },
      { target: "I feel ready to start washing.", jumbled: ["I", "feel", "ready", "to", "start", "washing."] },
      { target: "I always sort my laundry to avoid that mistake.", jumbled: ["I", "always", "sort", "my", "laundry", "to", "avoid", "that", "mistake."] },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake you learned from.",
    mySentenceExample: "I learned to sort clothes after a mistake with my white shirt.",
  },
  {
    number: 4,
    title: "Starting the Machines",
    image: null,
    imageNote: "Hana putting coins into a washing machine and pressing buttons, detergent bottle placed nearby on top of the machine.",
    story:
      "I load the first machine with my light-colored clothes and add a small amount of detergent. I put coins into the slot and press the correct buttons to start the wash cycle. The machine hums to life, and water begins filling up inside it slowly. I repeat the same steps for my second machine, this time with the dark clothes. Once both machines are running, I check my phone and see the wash will take about thirty minutes. I decide to sit down on a bench nearby and wait patiently for my clothes. This part of laundry day always feels a little slow.",
    questions: [
      "What does Hana add to the machine?",
      "What does Hana do to start the wash cycle?",
      "How long will the wash take?",
    ],
    trueFalse: [
      { text: "Hana adds a small amount of detergent.", answer: true },
      { text: "Hana puts coins into the slot.", answer: true },
      { text: "The wash will take about thirty minutes.", answer: true },
      { text: "Hana skips loading the second machine entirely.", answer: false },
      { text: "Hana decides to leave the laundromat completely.", answer: false },
    ],
    buildSentence: [
      { target: "I load the first machine.", jumbled: ["load", "the", "I", "first", "machine."] },
      { target: "I put coins into the slot.", jumbled: ["put", "coins", "I", "into", "the", "slot."] },
      { target: "I sit down on a bench.", jumbled: ["sit", "down", "I", "on", "a", "bench."] },
      { target: "The machine hums to life.", jumbled: ["machine", "hums", "The", "to", "life."] },
      { target: "This part of laundry day always feels slow.", jumbled: ["This", "part", "of", "laundry", "day", "always", "feels", "slow."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting for a machine or task to finish.",
    mySentenceExample: "I waited for the washing machine to finish before leaving.",
  },
  {
    number: 5,
    title: "Meeting George",
    image: null,
    imageNote: "George sitting near Hana on a bench, holding a coffee cup and chatting with her, other machines humming in the background.",
    story:
      "While waiting, a man wearing a baseball cap sits down on the bench near me. “First time here, or do you come often?” he asks in a friendly voice, holding a coffee cup. I tell him I come here almost every weekend since my apartment has no machine. He introduces himself as George and says he comes here every Saturday too. We talk casually about our weeks while our clothes wash in the machines nearby. George tells me a funny story about a sock that once got completely lost in the dryer. I laugh, feeling glad for some pleasant company during the wait.",
    questions: [
      "What does George ask Hana?",
      "How often does Hana come to the laundromat?",
      "What story does George tell Hana?",
    ],
    trueFalse: [
      { text: "George sits down on the bench near Hana.", answer: true },
      { text: "Hana comes to the laundromat almost every weekend.", answer: true },
      { text: "George says he never comes to the laundromat.", answer: false },
      { text: "George tells a story about a lost sock.", answer: true },
      { text: "Hana feels annoyed by George's company.", answer: false },
    ],
    buildSentence: [
      { target: "He sits down near me.", jumbled: ["sits", "down", "He", "near", "me."] },
      { target: "I laugh, feeling glad now.", jumbled: ["laugh,", "feeling", "I", "glad", "now."] },
      { target: "We talk casually about our weeks.", jumbled: ["We", "talk", "casually", "about", "our", "weeks."] },
      { target: "He introduces himself as George.", jumbled: ["He", "introduces", "himself", "as", "George."] },
      { target: "I feel glad for some pleasant company.", jumbled: ["I", "feel", "glad", "for", "some", "pleasant", "company."] },
    ],
    mySentencePrompt: "Write or say one sentence about meeting someone new while waiting somewhere.",
    mySentenceExample: "I met someone new while waiting at the doctor's office.",
  },
  {
    number: 6,
    title: "Moving to the Dryer",
    image: null,
    imageNote: "Hana transferring wet clothes from a washing machine into a dryer, George helping carry a laundry basket nearby.",
    story:
      "A loud beep tells me my first washing machine has finished its cycle. I open the door and pull out my wet, clean clothes carefully into a basket. George offers to help carry my second basket to the dryers nearby. I thank him and load both baskets of clothes into two separate dryers. I add a few coins for drying time and press the start button firmly. The dryers begin turning slowly, tumbling my clothes around inside with warm air. George checks his own machine too, and we sit back down together to wait some more.",
    questions: [
      "What tells Hana the wash cycle is finished?",
      "What does George offer to help with?",
      "What does Hana add to the dryers?",
    ],
    trueFalse: [
      { text: "A loud beep tells Hana the cycle is finished.", answer: true },
      { text: "George offers to help carry a basket.", answer: true },
      { text: "Hana refuses any help from George.", answer: false },
      { text: "Hana adds coins for drying time.", answer: true },
      { text: "The dryers stay completely still and silent.", answer: false },
    ],
    buildSentence: [
      { target: "I open the door now.", jumbled: ["open", "the", "I", "door", "now."] },
      { target: "I thank him kindly.", jumbled: ["thank", "him", "I", "kindly."] },
      { target: "I press the start button.", jumbled: ["press", "the", "I", "start", "button."] },
      { target: "He offers to help carry it.", jumbled: ["He", "offers", "to", "help", "carry", "it."] },
      { target: "We sit back down together to wait.", jumbled: ["We", "sit", "back", "down", "together", "to", "wait."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone offering to help you with a task.",
    mySentenceExample: "My neighbor offered to help me carry groceries upstairs.",
  },
  {
    number: 7,
    title: "Reading While Waiting",
    image: null,
    imageNote: "Hana sitting on a bench reading a book, dryers spinning in the background, warm sunlight coming through a window.",
    story:
      "While the dryers spin, I take a book out of my bag to pass the time comfortably. George also takes out his phone, scrolling through something quietly beside me. The laundromat feels peaceful now, filled only with the soft hum of the machines. Sunlight comes through a large window, warming the bench where we both sit together. I read a few chapters, enjoying this quiet, unhurried moment away from my usual busy schedule. Laundry day used to feel boring to me, but today it feels surprisingly relaxing instead. I glance at the dryers occasionally to check on the time remaining.",
    questions: [
      "What does Hana take out of her bag?",
      "What does George do on his phone?",
      "How does laundry day feel to Hana today?",
    ],
    trueFalse: [
      { text: "Hana takes out a book to read.", answer: true },
      { text: "George refuses to sit near Hana at all.", answer: false },
      { text: "Sunlight comes through a large window.", answer: true },
      { text: "Laundry day feels surprisingly relaxing today.", answer: true },
      { text: "Hana feels bored the entire time.", answer: false },
    ],
    buildSentence: [
      { target: "I take out a book.", jumbled: ["take", "out", "I", "a", "book."] },
      { target: "The place feels peaceful now.", jumbled: ["place", "feels", "The", "peaceful", "now."] },
      { target: "I read a few chapters.", jumbled: ["read", "a", "I", "few", "chapters."] },
      { target: "Sunlight comes through the window.", jumbled: ["Sunlight", "comes", "through", "the", "window."] },
      { target: "This feels surprisingly relaxing instead today.", jumbled: ["This", "feels", "surprisingly", "relaxing", "instead", "today."] },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment you enjoyed recently.",
    mySentenceExample: "I enjoyed a quiet moment reading a book yesterday.",
  },
  {
    number: 8,
    title: "Folding the Clothes",
    image: null,
    imageNote: "Hana standing at a folding table, neatly folding warm clothes into a laundry bag, George waving goodbye in the background.",
    story:
      "The dryers finally beep, and I pull out my warm, soft clothes carefully. I carry the clothes to a large folding table near the window and begin folding them. Each shirt and pair of pants gets folded neatly and placed into my clean bag. George finishes his laundry around the same time and comes over to say goodbye. “See you next Saturday, probably,” he says with a friendly smile before leaving. I nod and wave, already looking forward to more friendly conversation next weekend. Folding warm clothes always feels satisfying, like finishing an important small task well.",
    questions: [
      "What does Hana carry the clothes to?",
      "What does George say before leaving?",
      "How does folding warm clothes feel to Hana?",
    ],
    trueFalse: [
      { text: "Hana carries the clothes to a folding table.", answer: true },
      { text: "George leaves without saying goodbye.", answer: false },
      { text: "George says see you next Saturday.", answer: true },
      { text: "Folding warm clothes feels satisfying to Hana.", answer: true },
      { text: "Hana feels annoyed about seeing George again.", answer: false },
    ],
    buildSentence: [
      { target: "I pull out my clothes.", jumbled: ["pull", "out", "I", "my", "clothes."] },
      { target: "I begin folding them now.", jumbled: ["begin", "folding", "I", "them", "now."] },
      { target: "See you next Saturday, probably.", jumbled: ["you", "next", "See", "Saturday,", "probably."] },
      { target: "I nod and wave goodbye.", jumbled: ["I", "nod", "and", "wave", "goodbye."] },
      { target: "Folding warm clothes always feels satisfying.", jumbled: ["Folding", "warm", "clothes", "always", "feels", "satisfying."] },
    ],
    mySentencePrompt: "Write or say one sentence about finishing a small task that felt satisfying.",
    mySentenceExample: "Folding my clean laundry always feels satisfying to me.",
  },
  {
    number: 9,
    title: "Walking Home",
    image: null,
    imageNote: "Hana walking down the sidewalk carrying a full laundry bag over her shoulder, a light smile on her face on a sunny afternoon.",
    story:
      "I carry my full bag of clean, folded clothes over my shoulder and leave the laundromat. The walk home feels lighter somehow, even though the bag itself is not lighter at all. The afternoon sun feels warm, and the street looks calm on this quiet Saturday. I think about my conversation with George and smile a little at his silly sock story. Small conversations like that make everyday errands feel less like boring chores to me. My apartment feels closer today because my mind is busy with pleasant thoughts. I already look forward to next weekend's laundry trip a little.",
    questions: [
      "How does Hana carry her bag home?",
      "How does the walk home feel to Hana?",
      "What does Hana think about while walking?",
    ],
    trueFalse: [
      { text: "Hana carries her bag over her shoulder.", answer: true },
      { text: "The walk home feels heavier and harder.", answer: false },
      { text: "Hana thinks about her conversation with George.", answer: true },
      { text: "Small conversations make errands feel more boring.", answer: false },
      { text: "Hana looks forward to next weekend's trip.", answer: true },
    ],
    buildSentence: [
      { target: "I carry my bag home.", jumbled: ["carry", "my", "I", "bag", "home."] },
      { target: "The sun feels warm today.", jumbled: ["sun", "feels", "The", "warm", "today."] },
      { target: "I smile a little now.", jumbled: ["smile", "a", "I", "little", "now."] },
      { target: "The walk home feels lighter somehow.", jumbled: ["The", "walk", "home", "feels", "lighter", "somehow."] },
      { target: "I already look forward to next weekend's trip.", jumbled: ["I", "already", "look", "forward", "to", "next", "weekend's", "trip."] },
    ],
    mySentencePrompt: "Write or say one sentence about a chore that felt better because of a small pleasant moment.",
    mySentenceExample: "My chore felt better because of a nice conversation with a neighbor.",
  },
  {
    number: 10,
    title: "Clean Clothes, Full Closet",
    image: null,
    imageNote: "Hana putting neatly folded clothes into her closet at home, the room tidy and organized, a satisfied smile on her face.",
    story:
      "Back at my apartment, I put my clean clothes carefully into my closet and drawers. Everything smells fresh, and my closet finally looks full and organized again after two busy weeks. I sit down for a moment, feeling satisfied with how my weekend morning went. Laundry day is not always exciting, but today it felt calm and even a little enjoyable. Meeting George made an ordinary chore feel like a small, pleasant part of my week. I already know I will look for him again next time I go. Simple weekend tasks sometimes bring unexpected moments of connection with other people.",
    questions: [
      "Where does Hana put her clean clothes?",
      "How does Hana feel sitting down afterward?",
      "What made this laundry day feel special?",
    ],
    trueFalse: [
      { text: "Hana puts her clothes into her closet and drawers.", answer: true },
      { text: "Hana's closet looks empty and messy still.", answer: false },
      { text: "Hana feels satisfied with her weekend morning.", answer: true },
      { text: "Meeting George made the chore feel more pleasant.", answer: true },
      { text: "Hana decides never to return to the laundromat.", answer: false },
    ],
    buildSentence: [
      { target: "I put my clothes away.", jumbled: ["put", "my", "I", "clothes", "away."] },
      { target: "I sit down for a moment.", jumbled: ["sit", "down", "I", "for", "a", "moment."] },
      { target: "This felt calm and enjoyable today.", jumbled: ["This", "felt", "calm", "and", "enjoyable", "today."] },
      { target: "My closet finally looks full again.", jumbled: ["My", "closet", "finally", "looks", "full", "again."] },
      { target: "Simple weekend tasks bring unexpected moments of connection.", jumbled: ["Simple", "weekend", "tasks", "bring", "unexpected", "moments", "of", "connection."] },
    ],
    mySentencePrompt: "Write or say one sentence about an ordinary task that led to a nice surprise.",
    mySentenceExample: "An ordinary trip to the store led to a nice surprise meeting a friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

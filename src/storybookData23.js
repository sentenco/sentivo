// A2 Kids digital storybook, Book 23: "My First Sleepover"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData20.js. First book in a new A2 Kids batch (Books
// 23-30) -- longer sentences, more connectors (because/so/when/after), and
// past continuous / comparative forms than the A1 Kids books, but still
// simple, everyday topics a child would recognize. Same Kids-track 3+3
// True/False and Build-a-Sentence pattern (not 5, unlike Teens/Adults).
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "My First Sleepover";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Mia and Chloe sitting inside a cozy blanket fort in Chloe's living room, giggling with flashlights, a small teddy bear peeking out of Mia's backpack nearby.";

export const CHARACTERS = [
  { name: "Mia", role: "The narrator, a young girl", look: "Brown hair in two braids, yellow pajamas, a curious and a little nervous expression at first." },
  { name: "Chloe", role: "Mia's best friend", look: "Short curly hair, purple pajamas, cheerful and confident." },
  { name: "Mrs. Park", role: "Chloe's mother", look: "Warm smile, apron, kind and welcoming." },
  { name: "Mom", role: "Mia's mother", look: "Ponytail, soft cardigan, caring and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Invitation",
    image: null,
    imageNote: "Chloe handing Mia a colorful invitation card at school, both girls smiling, Mia holding it with excitement.",
    story:
      "On Friday, Chloe gives me a small card at school. It says, “Sleepover at my house on Saturday!” I feel excited, but I am also a little nervous because I have never slept at a friend's house before. “Will you come?” Chloe asks, smiling. “Yes, of course!” I say quickly. When I get home, I ask Mom right away. She says yes, and I jump up and down happily. That night, I keep thinking about what a sleepover is really like. I am excited, but a small part of me is worried too.",
    questions: [
      "What does Chloe give Mia at school?",
      "How does Mia feel about the sleepover?",
      "Who does Mia ask when she gets home?",
    ],
    trueFalse: [
      { text: "Chloe invites Mia to a sleepover.", answer: true },
      { text: "Mia has slept at a friend's house many times before.", answer: false },
      { text: "Mom says no to the sleepover.", answer: false },
    ],
    buildSentence: [
      { target: "Chloe gives me an invitation.", jumbled: ["gives", "me", "Chloe", "an", "invitation."] },
      { target: "I feel excited and nervous.", jumbled: ["feel", "excited", "I", "and", "nervous."] },
      { target: "Mom says yes to the sleepover.", jumbled: ["says", "yes", "Mom", "to", "the", "sleepover."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt excited and nervous at the same time.",
    mySentenceExample: "I felt excited and nervous before my first day at a new school.",
  },
  {
    number: 2,
    title: "Packing My Bag",
    image: null,
    imageNote: "Mia sitting on her bedroom floor, packing pajamas and a toothbrush into a backpack, secretly tucking a small teddy bear under her clothes.",
    story:
      "On Saturday morning, I start packing my bag for the sleepover. I fold my favorite pajamas and put in my toothbrush. Then I look at my old teddy bear on the bed. I have slept with him every night since I was small, but I feel shy about bringing him. “What if Chloe thinks I'm a baby?” I ask myself. After thinking for a moment, I decide to pack him quietly at the bottom of my bag, under my clothes, so no one will notice. Mom watches me and smiles, but she does not say anything about the bear.",
    questions: [
      "What does Mia pack first?",
      "Why does Mia feel shy about the teddy bear?",
      "Where does Mia hide the bear in her bag?",
    ],
    trueFalse: [
      { text: "Mia packs her pajamas and toothbrush.", answer: true },
      { text: "Mia decides not to bring her teddy bear at all.", answer: false },
      { text: "Mia hides the bear under her clothes.", answer: true },
    ],
    buildSentence: [
      { target: "I pack my favorite pajamas.", jumbled: ["pack", "my", "I", "favorite", "pajamas."] },
      { target: "I feel shy about the bear.", jumbled: ["feel", "shy", "I", "about", "the", "bear."] },
      { target: "I hide him under my clothes.", jumbled: ["hide", "him", "I", "under", "my", "clothes."] },
    ],
    mySentencePrompt: "Write or say one sentence about something special you like to bring with you.",
    mySentenceExample: "I always bring my lucky pencil when I take a test.",
  },
  {
    number: 3,
    title: "Arriving at Chloe's House",
    image: null,
    imageNote: "Mom hugging Mia goodbye on Chloe's doorstep, Mrs. Park waving warmly from the doorway, Mia's car driving away in the background.",
    story:
      "When we arrive at Chloe's house, Mrs. Park opens the door with a big smile. “Welcome, Mia! We are so happy you're here,” she says warmly. Mom gives me a tight hug and says, “Have so much fun. I will pick you up tomorrow morning.” As Mom's car drives away, I feel a small flutter in my stomach. This is the first time I will sleep in a different house without my family. Chloe grabs my hand and says, “Come on, let's go play!” Her excitement makes me smile, and my nervous feeling starts to disappear a little.",
    questions: [
      "Who opens the door when Mia arrives?",
      "What does Mom say before she leaves?",
      "How does Mia feel when the car drives away?",
    ],
    trueFalse: [
      { text: "Mrs. Park welcomes Mia warmly.", answer: true },
      { text: "Mom stays at Chloe's house for the sleepover.", answer: false },
      { text: "Mia feels completely calm when Mom leaves.", answer: false },
    ],
    buildSentence: [
      { target: "Mrs. Park opens the door.", jumbled: ["opens", "the", "Mrs.", "Park", "door."] },
      { target: "Mom gives me a tight hug.", jumbled: ["gives", "me", "Mom", "a", "tight", "hug."] },
      { target: "Chloe grabs my hand happily.", jumbled: ["grabs", "my", "Chloe", "hand", "happily."] },
    ],
    mySentencePrompt: "Write or say one sentence about saying goodbye to a family member.",
    mySentenceExample: "I waved goodbye to my dad before school started.",
  },
  {
    number: 4,
    title: "Pizza and Movies",
    image: null,
    imageNote: "Mia and Chloe sitting on the couch eating pizza slices and laughing, a cartoon movie playing on the TV in front of them.",
    story:
      "For dinner, Mrs. Park orders a big cheese pizza, and Chloe and I sit on the couch to eat. “This is my favorite kind of night,” Chloe says, and I agree completely. After dinner, we choose a funny movie about a talking dog. We laugh so hard at one scene that pizza almost falls out of my mouth! By the time the movie ends, I am not thinking about home anymore. I am having more fun than I expected. “This sleepover is already better than I imagined,” I tell Chloe, and she grins proudly, happy that I am enjoying myself.",
    questions: [
      "What do Mia and Chloe eat for dinner?",
      "What kind of movie do they watch?",
      "How does Mia feel by the end of the movie?",
    ],
    trueFalse: [
      { text: "They eat cheese pizza for dinner.", answer: true },
      { text: "The movie is about a talking cat.", answer: false },
      { text: "Mia is having more fun than she expected.", answer: true },
    ],
    buildSentence: [
      { target: "We eat a big cheese pizza.", jumbled: ["eat", "a", "We", "big", "cheese", "pizza."] },
      { target: "We laugh so hard together.", jumbled: ["laugh", "so", "We", "hard", "together."] },
      { target: "This sleepover is already better.", jumbled: ["is", "already", "This", "sleepover", "better."] },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite kind of movie.",
    mySentenceExample: "My favorite kind of movie is a funny cartoon.",
  },
  {
    number: 5,
    title: "Building a Blanket Fort",
    image: null,
    imageNote: "Chloe and Mia draping blankets over chairs in the living room, building a large fort with flashlights and pillows inside.",
    story:
      "After the movie, Chloe has an amazing idea. “Let's build a blanket fort!” she says excitedly. We pull blankets off the beds and drape them over chairs and the couch. It takes us almost thirty minutes, but soon we have a huge fort with a soft floor of pillows inside. We crawl in with flashlights and pretend it is a secret castle. “I am the queen, and you are the knight,” Chloe announces, giggling. We invent a whole adventure story together, and I realize this is the most fun I have had in a very long time.",
    questions: [
      "What does Chloe suggest building?",
      "How long does the fort take to build?",
      "What do Mia and Chloe pretend the fort is?",
    ],
    trueFalse: [
      { text: "Chloe suggests building a blanket fort.", answer: true },
      { text: "The fort takes only five minutes to build.", answer: false },
      { text: "They pretend the fort is a secret castle.", answer: true },
    ],
    buildSentence: [
      { target: "Let's build a blanket fort.", jumbled: ["build", "a", "Let's", "blanket", "fort."] },
      { target: "We crawl in with flashlights.", jumbled: ["crawl", "in", "We", "with", "flashlights."] },
      { target: "We invent an adventure story.", jumbled: ["invent", "an", "We", "adventure", "story."] },
    ],
    mySentencePrompt: "Write or say one sentence about something fun you built or made.",
    mySentenceExample: "I built a tall tower out of blocks with my brother.",
  },
  {
    number: 6,
    title: "Missing Home",
    image: null,
    imageNote: "Mia lying awake in a sleeping bag inside the dark fort, quietly hugging her small teddy bear, Chloe already asleep nearby.",
    story:
      "Later that night, Mrs. Park turns off the lights, and Chloe falls asleep quickly inside our fort. I lie awake in my sleeping bag, listening to the quiet house. It sounds different from my own home. Slowly, I start to feel a little sad, and I miss my own bed and my mom's goodnight kiss. Quietly, so no one can hear, I take my teddy bear out of my bag and hold him close. I feel a little silly, but holding him makes me feel calmer. I close my eyes and try to think about the fun day we had instead.",
    questions: [
      "What does Chloe do quickly after the lights go off?",
      "Why does Mia start to feel sad?",
      "What does Mia take out of her bag?",
    ],
    trueFalse: [
      { text: "Chloe falls asleep quickly.", answer: true },
      { text: "Mia feels completely happy the whole night.", answer: false },
      { text: "Mia quietly takes out her teddy bear.", answer: true },
    ],
    buildSentence: [
      { target: "Chloe falls asleep quickly.", jumbled: ["falls", "asleep", "Chloe", "quickly."] },
      { target: "I start to feel sad.", jumbled: ["start", "to", "I", "feel", "sad."] },
      { target: "Holding him makes me calmer.", jumbled: ["makes", "me", "Holding", "him", "calmer."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that helps you feel calm.",
    mySentenceExample: "Listening to soft music helps me feel calm before bed.",
  },
  {
    number: 7,
    title: "Chloe Notices",
    image: null,
    imageNote: "Chloe sitting up in her sleeping bag, whispering kindly to Mia in the dim fort light, both girls smiling softly at each other.",
    story:
      "Suddenly, Chloe sits up and whispers, “Mia, are you okay?” I did not know she was still a little awake. I feel embarrassed, but I decide to tell her the truth. “I miss my mom a little,” I whisper back, holding my bear tighter. Instead of laughing, Chloe smiles kindly and says, “I felt the same way at my first sleepover too.” She shows me a small stuffed rabbit hidden in her own bag, and we both start laughing quietly. Talking about it makes me feel much better, and I realize being a little homesick is completely normal.",
    questions: [
      "What does Chloe ask Mia?",
      "How does Chloe react when Mia tells the truth?",
      "What does Chloe show Mia?",
    ],
    trueFalse: [
      { text: "Chloe laughs at Mia for missing her mom.", answer: false },
      { text: "Chloe also felt homesick at her first sleepover.", answer: true },
      { text: "Chloe has a hidden stuffed rabbit too.", answer: true },
    ],
    buildSentence: [
      { target: "Chloe asks if I am okay.", jumbled: ["asks", "if", "Chloe", "I", "am", "okay."] },
      { target: "I miss my mom a little.", jumbled: ["miss", "my", "I", "mom", "a", "little."] },
      { target: "Talking about it helps me feel better.", jumbled: ["helps", "me", "Talking", "about", "it", "feel", "better."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you feel better.",
    mySentenceExample: "My friend told a joke and helped me feel better when I was sad.",
  },
  {
    number: 8,
    title: "Pancakes in the Morning",
    image: null,
    imageNote: "Mrs. Park flipping star-shaped pancakes in the kitchen while Mia and Chloe sit at the table, sunlight streaming through the window.",
    story:
      "The next morning, delicious smells wake me up. I climb out of the fort and follow the smell to the kitchen. Mrs. Park is making pancakes shaped like little stars! “Good morning, sleepy girls,” she says cheerfully. We eat our star pancakes with syrup, and the sunny kitchen feels warm and happy. “Did you sleep well?” Mrs. Park asks. “Yes, mostly,” I say, and Chloe winks at me because she knows our secret. After breakfast, I feel proud that I made it through my first whole night away from home.",
    questions: [
      "What shape are the pancakes?",
      "Who makes the pancakes?",
      "How does Mia feel after breakfast?",
    ],
    trueFalse: [
      { text: "The pancakes are shaped like stars.", answer: true },
      { text: "Chloe's mom makes cereal instead of pancakes.", answer: false },
      { text: "Mia feels proud after breakfast.", answer: true },
    ],
    buildSentence: [
      { target: "Delicious smells wake me up.", jumbled: ["smells", "wake", "Delicious", "me", "up."] },
      { target: "We eat our star pancakes.", jumbled: ["eat", "our", "We", "star", "pancakes."] },
      { target: "I feel proud of myself.", jumbled: ["feel", "proud", "I", "of", "myself."] },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite breakfast food.",
    mySentenceExample: "My favorite breakfast food is pancakes with syrup.",
  },
  {
    number: 9,
    title: "Saying Goodbye",
    image: null,
    imageNote: "Mom hugging Mia on the doorstep as Chloe and Mrs. Park wave from behind, Mia's backpack over her shoulder with the teddy bear peeking out.",
    story:
      "Soon after breakfast, Mom's car pulls into the driveway. I feel happy to see her, but also a little sad that the sleepover is ending so quickly. “Did you have fun?” Mom asks, hugging me tightly. “The best time ever!” I say, and I really mean it. Chloe hugs me goodbye and says, “Let's do this again soon!” As we drive home, I look out the window and think about everything that happened: the fort, the pancakes, and the quiet talk in the dark. I am already excited to tell Mom every single detail.",
    questions: [
      "How does Mia feel when Mom arrives?",
      "What does Mia say when Mom asks if she had fun?",
      "What does Chloe say as Mia leaves?",
    ],
    trueFalse: [
      { text: "Mia feels only sad and nothing else when Mom arrives.", answer: false },
      { text: "Mia tells Mom she had the best time ever.", answer: true },
      { text: "Chloe wants to have another sleepover soon.", answer: true },
    ],
    buildSentence: [
      { target: "Mom hugs me tightly.", jumbled: ["hugs", "me", "Mom", "tightly."] },
      { target: "I had the best time ever.", jumbled: ["had", "the", "I", "best", "time", "ever."] },
      { target: "Let's do this again soon.", jumbled: ["do", "this", "Let's", "again", "soon."] },
    ],
    mySentencePrompt: "Write or say one sentence about a fun event you did not want to end.",
    mySentenceExample: "I did not want the birthday party to end because it was so much fun.",
  },
  {
    number: 10,
    title: "Already Planning the Next One",
    image: null,
    imageNote: "Mia sitting at her own kitchen table with Mom, talking excitedly and drawing a picture of the blanket fort, her teddy bear sitting beside her.",
    story:
      "At home, I tell Mom everything about the sleepover, from the pizza and movie to the secret blanket fort. “It sounds like you had an incredible time,” Mom says, smiling. I even tell her about missing home a little, and she says that feeling is completely normal for a first sleepover. “Next time, it will feel even easier,” she promises. That night, I hug my teddy bear in my own bed and think about how brave I was. I already cannot wait for the next sleepover, and I know exactly what I want to pack.",
    questions: [
      "Who does Mia tell everything to?",
      "What does Mom say about feeling homesick?",
      "How does Mia feel about the next sleepover?",
    ],
    trueFalse: [
      { text: "Mia tells Mom about the sleepover.", answer: true },
      { text: "Mom says feeling homesick is unusual.", answer: false },
      { text: "Mia cannot wait for the next sleepover.", answer: true },
    ],
    buildSentence: [
      { target: "I tell Mom everything.", jumbled: ["tell", "Mom", "I", "everything."] },
      { target: "That feeling is completely normal.", jumbled: ["is", "completely", "That", "feeling", "normal."] },
      { target: "I already cannot wait.", jumbled: ["already", "cannot", "I", "wait."] },
    ],
    mySentencePrompt: "Write or say one sentence about something new you were brave enough to try.",
    mySentenceExample: "I was brave enough to try swimming in the deep pool for the first time.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

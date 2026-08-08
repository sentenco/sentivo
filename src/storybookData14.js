// A1 Kids digital storybook, Book 14: "A Week with Grandma"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js.
// Second book in the Kids age track. Same simplified vocabulary/sentence
// length and 3+3 True/False and Build-a-Sentence pattern as Book 13.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead.

export const STORYBOOK_TITLE = "A Week with Grandma";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Noah and Grandma standing together in her sunny garden, both smiling, a small watering can in Noah's hand and yellow flowers all around them.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Noah", role: "The narrator, a young boy", look: "Short dark hair, striped shirt, curious and cheerful expression." },
  { name: "Grandma", role: "Noah's grandmother", look: "Silver hair in a bun, floral apron, warm and gentle smile." },
  { name: "Grandpa", role: "Noah's grandfather, appears in Chapter 7", look: "White hair, checked vest, kind and playful eyes." },
  { name: "Ruby", role: "Grandma's neighbor, a girl Noah's age, appears in Chapter 8", look: "Curly red hair, green dress, energetic and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Arriving at Grandma's House",
    image: null,
    imageNote: "Noah stepping out of the car with his small bag, Grandma waving from the front door of a cozy house with flowers along the path.",
    story:
      "Today, Mom drives me to Grandma's house for a whole week. I bring my small bag with my clothes and my favorite toy. Grandma waits at the door and waves with a big smile. “Welcome, Noah!” she says, and she gives me a warm hug. Her house smells like fresh bread and flowers. I see my old room with the soft blue blanket. I put my bag on the bed and look outside the window. I see a big green garden with yellow flowers. I feel happy and excited for my week with Grandma.",
    questions: [
      "Where does Mom drive Noah?",
      "What does Grandma's house smell like?",
      "What does Noah see outside the window?",
    ],
    trueFalse: [
      { text: "Noah stays with Grandma for a week.", answer: true },
      { text: "Grandma is angry when Noah arrives.", answer: false },
      { text: "Noah sees a garden outside the window.", answer: true },
    ],
    buildSentence: [
      { target: "Grandma waves at me.", jumbled: ["waves", "at", "Grandma", "me."] },
      { target: "The house smells like bread.", jumbled: ["smells", "like", "The", "bread.", "house"] },
      { target: "I put my bag on the bed.", jumbled: ["put", "my", "I", "bag", "on", "the", "bed."] },
    ],
    mySentencePrompt: "Write or say one sentence about visiting a family member.",
    mySentenceExample: "I visit my grandma on weekends.",
  },
  {
    number: 2,
    title: "Grandma's Garden",
    image: null,
    imageNote: "Grandma in a sun hat and green gloves showing Noah a small tomato plant, a watering can nearby, roses and sunflowers in the background.",
    story:
      "In the morning, Grandma takes me to see her garden. She wears a big sun hat and green gloves. “Come, Noah, let's water the flowers,” she says. I hold the small watering can carefully. We water the red roses and the yellow sunflowers. Grandma shows me a small green tomato on a plant. “It will be red and ready soon,” she says. I dig in the soft dirt and find a tiny worm. Grandma laughs and says worms help the garden grow. I love spending the morning in Grandma's garden.",
    questions: [
      "What does Grandma wear in the garden?",
      "What do they water?",
      "What does Noah find in the dirt?",
    ],
    trueFalse: [
      { text: "Grandma wears a sun hat.", answer: true },
      { text: "They water the flowers with juice.", answer: false },
      { text: "Noah finds a worm in the dirt.", answer: true },
    ],
    buildSentence: [
      { target: "We water the flowers.", jumbled: ["water", "the", "We", "flowers."] },
      { target: "I hold the watering can.", jumbled: ["hold", "the", "I", "watering", "can."] },
      { target: "Worms help the garden grow.", jumbled: ["help", "the", "Worms", "garden", "grow."] },
    ],
    mySentencePrompt: "Write or say one sentence about a garden or plants.",
    mySentenceExample: "I like to water the flowers.",
  },
  {
    number: 3,
    title: "Baking Cookies Together",
    image: null,
    imageNote: "Noah wearing a small apron stirring a mixing bowl on the kitchen counter, Grandma rolling cookie dough into balls beside him, a tray nearby.",
    story:
      "This afternoon, Grandma and I bake cookies in her warm kitchen. She ties a small apron around my waist. “First, we mix the flour and sugar,” Grandma says. I stir the bowl slowly and carefully. Grandma helps me roll the dough into small balls. We put the cookies on a tray and place them in the oven. Soon, the kitchen smells sweet and warm. When the cookies are ready, Grandma lets me eat one first. The cookie is soft, warm, and delicious. Baking with Grandma is one of my favorite things to do.",
    questions: [
      "What do they bake?",
      "What does Noah do to the dough?",
      "How does the cookie taste?",
    ],
    trueFalse: [
      { text: "Grandma and Noah bake cookies.", answer: true },
      { text: "Noah rolls the dough into small balls.", answer: true },
      { text: "The cookie tastes sour.", answer: false },
    ],
    buildSentence: [
      { target: "I stir the bowl.", jumbled: ["stir", "the", "I", "bowl."] },
      { target: "The kitchen smells sweet.", jumbled: ["smells", "sweet.", "The", "kitchen"] },
      { target: "The cookie is soft and warm.", jumbled: ["is", "soft", "The", "and", "cookie", "warm."] },
    ],
    mySentencePrompt: "Write or say one sentence about baking or cooking.",
    mySentenceExample: "I like to bake cookies with my family.",
  },
  {
    number: 4,
    title: "A Rainy Afternoon Story",
    image: null,
    imageNote: "Noah sitting close to Grandma in a big armchair by a rainy window, Grandma mid-story with a warm expression, soft lamp light.",
    story:
      "Outside, the rain falls softly on Grandma's window. We cannot play in the garden today. Grandma sits in her big chair and pats the seat next to her. “Come, Noah, I will tell you a story,” she says. I sit close to her and listen carefully. Grandma tells me a story about when she was a little girl. She talks about her old dog and her favorite tree. I ask her many questions, and she smiles at each one. The rain keeps falling, but I do not feel bored at all. Grandma's stories are the best part of a rainy day.",
    questions: [
      "Why can't they play outside?",
      "What does Grandma tell Noah?",
      "How does Noah feel during the story?",
    ],
    trueFalse: [
      { text: "It is sunny outside.", answer: false },
      { text: "Grandma tells Noah a story.", answer: true },
      { text: "Noah feels bored during the story.", answer: false },
    ],
    buildSentence: [
      { target: "The rain falls softly.", jumbled: ["rain", "falls", "The", "softly."] },
      { target: "I sit close to her.", jumbled: ["sit", "close", "I", "to", "her."] },
      { target: "I ask her many questions.", jumbled: ["ask", "her", "I", "many", "questions."] },
    ],
    mySentencePrompt: "Write or say one sentence about a rainy day.",
    mySentenceExample: "I stay inside when it rains.",
  },
  {
    number: 5,
    title: "Feeding the Birds",
    image: null,
    imageNote: "Noah and Grandma standing very still near a bird feeder in the early morning garden, small birds landing nearby, a red bird singing on a fence.",
    story:
      "Early in the morning, Grandma wakes me up quietly. “Come, Noah, it's time to feed the birds,” she whispers. We walk outside with a small bag of seeds. Grandma shows me how to fill the little bird feeder. I sprinkle some seeds on the ground too. Soon, small birds land near us and start to eat. A bright red bird sits on the fence and sings. I stand very still so I do not scare them away. Grandma smiles and says the birds visit every morning. Feeding the birds with Grandma makes me feel calm and happy.",
    questions: [
      "What time do they feed the birds?",
      "What does Noah fill?",
      "What color is the bird that sings?",
    ],
    trueFalse: [
      { text: "They feed the birds in the morning.", answer: true },
      { text: "Noah fills the bird feeder with rocks.", answer: false },
      { text: "A red bird sings on the fence.", answer: true },
    ],
    buildSentence: [
      { target: "I sprinkle some seeds.", jumbled: ["sprinkle", "some", "I", "seeds."] },
      { target: "I stand very still.", jumbled: ["stand", "very", "I", "still."] },
      { target: "The birds visit every morning.", jumbled: ["visit", "every", "The", "birds", "morning."] },
    ],
    mySentencePrompt: "Write or say one sentence about animals or birds.",
    mySentenceExample: "I like to watch birds in the morning.",
  },
  {
    number: 6,
    title: "A Small Accident",
    image: null,
    imageNote: "Noah looking worried beside a small spilled cup of juice on the kitchen floor, Grandma kneeling beside him with a gentle, reassuring smile and a towel.",
    story:
      "Today, I help Grandma carry a cup of juice to the table. My foot slips, and the juice spills on the floor! I feel worried and my face turns red. “It's okay, Noah, accidents happen,” Grandma says softly. She does not get angry at all. We get a towel together and clean up the mess. Grandma pours me a new cup of juice with a smile. I say, “I'm sorry, Grandma.” She hugs me and says, “You are a good helper.” I feel better because Grandma is so kind and patient.",
    questions: [
      "What does Noah spill?",
      "How does Grandma react?",
      "How does Noah feel at the end?",
    ],
    trueFalse: [
      { text: "Noah spills juice on the floor.", answer: true },
      { text: "Grandma gets very angry.", answer: false },
      { text: "Noah feels better at the end.", answer: true },
    ],
    buildSentence: [
      { target: "My foot slips.", jumbled: ["foot", "slips.", "My"] },
      { target: "Grandma hugs me.", jumbled: ["hugs", "me.", "Grandma"] },
      { target: "We clean up the mess together.", jumbled: ["clean", "up", "We", "the", "mess", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small accident.",
    mySentenceExample: "I spill my milk, but it is okay.",
  },
  {
    number: 7,
    title: "Grandpa's Old Photos",
    image: null,
    imageNote: "Noah and Grandpa sitting together on a soft sofa in the evening, a big open box of old photos between them, Grandpa laughing at a photo.",
    story:
      "In the evening, Grandpa sits with me on the soft sofa. He opens a big box full of old photos. “This is me when I was young,” Grandpa says with a laugh. I see photos of Grandma and Grandpa when they were kids. One photo shows them standing next to an old car. Grandpa tells me funny stories about each picture. I laugh when I see a photo of Grandpa with messy hair. He says, “Time goes fast, Noah, so enjoy every day.” I look at the old photos and feel close to my family. This evening with Grandpa feels very special.",
    questions: [
      "What does Grandpa open?",
      "What do the photos show?",
      "What does Grandpa tell Noah?",
    ],
    trueFalse: [
      { text: "Grandpa opens a box of old photos.", answer: true },
      { text: "The photos are all empty.", answer: false },
      { text: "Grandpa says to enjoy every day.", answer: true },
    ],
    buildSentence: [
      { target: "Grandpa opens a box.", jumbled: ["opens", "a", "Grandpa", "box."] },
      { target: "I see old photos.", jumbled: ["see", "old", "I", "photos."] },
      { target: "I feel close to my family.", jumbled: ["feel", "close", "I", "to", "my", "family."] },
    ],
    mySentencePrompt: "Write or say one sentence about your family.",
    mySentenceExample: "I love spending time with my family.",
  },
  {
    number: 8,
    title: "Playing with Ruby Next Door",
    image: null,
    imageNote: "Noah and Ruby playing with a jump rope under a big tree in Grandma's garden, Grandma watching happily from the porch with two glasses of lemonade.",
    story:
      "In the afternoon, Grandma's neighbor Ruby comes over to play. Ruby is my age, and she has a big, friendly smile. We play in the garden and run around the big tree. Ruby brings her jump rope, and we take turns jumping. I count while Ruby jumps, and then she counts for me. We laugh a lot and share a cold glass of lemonade. Grandma watches us from the porch and smiles happily. Ruby says, “You are fun to play with, Noah!” I feel happy to have a new friend during my week with Grandma.",
    questions: [
      "Who comes over to play?",
      "What do they play with?",
      "What does Ruby say to Noah?",
    ],
    trueFalse: [
      { text: "Ruby comes over to play.", answer: true },
      { text: "They play with a jump rope.", answer: true },
      { text: "Ruby says Noah is boring.", answer: false },
    ],
    buildSentence: [
      { target: "Ruby comes to play.", jumbled: ["comes", "to", "Ruby", "play."] },
      { target: "We laugh a lot.", jumbled: ["laugh", "a", "We", "lot."] },
      { target: "I have a new friend.", jumbled: ["have", "a", "I", "new", "friend."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend you play with.",
    mySentenceExample: "I play with my friend after school.",
  },
  {
    number: 9,
    title: "A Trip to the Farmers Market",
    image: null,
    imageNote: "Noah and Grandma walking through a colorful outdoor market, Noah holding a red apple, stalls of fruit, vegetables, and flowers around them.",
    story:
      "On Saturday, Grandma takes me to the farmers market in town. The market is full of colorful fruits and vegetables. We see red apples, orange carrots, and green lettuce. Grandma lets me choose a fruit to buy for myself. I pick a juicy, red apple from a big basket. A kind man sells us fresh bread that smells amazing. Grandma buys flowers for the kitchen table too. We carry our bags and walk home together slowly. I feel proud because I helped Grandma choose good food. The farmers market is a fun place to visit.",
    questions: [
      "Where does Grandma take Noah?",
      "What fruit does Noah choose?",
      "What does Grandma buy for the kitchen table?",
    ],
    trueFalse: [
      { text: "They go to the farmers market.", answer: true },
      { text: "Noah chooses a banana.", answer: false },
      { text: "Grandma buys flowers for the table.", answer: true },
    ],
    buildSentence: [
      { target: "I pick a red apple.", jumbled: ["pick", "a", "I", "red", "apple."] },
      { target: "We carry our bags.", jumbled: ["carry", "our", "We", "bags."] },
      { target: "I feel proud of myself.", jumbled: ["feel", "proud", "I", "of", "myself."] },
    ],
    mySentencePrompt: "Write or say one sentence about shopping for food.",
    mySentenceExample: "I like to buy fresh fruit.",
  },
  {
    number: 10,
    title: "Saying Goodbye",
    image: null,
    imageNote: "Noah hugging Grandma tightly on the front porch with his packed bag beside him, Mom's car waiting in the driveway, a small bag of cookies in Noah's hand.",
    story:
      "Today is my last day at Grandma's house. Mom will come soon to take me home. I help Grandma pack my bag and fold my blue blanket. I think about the garden, the cookies, and the birds we fed. Grandma hugs me tightly and says, “I loved having you here, Noah.” I feel a little sad, but also happy about my fun week. “I will visit again soon, Grandma,” I promise. She smiles and gives me a small bag of cookies for the trip. When Mom arrives, I wave goodbye to Grandma's house. My week with Grandma was the best week ever.",
    questions: [
      "Who is coming to take Noah home?",
      "What does Grandma give Noah for the trip?",
      "How does Noah describe his week?",
    ],
    trueFalse: [
      { text: "Mom comes to take Noah home.", answer: true },
      { text: "Grandma gives Noah a bag of cookies.", answer: true },
      { text: "Noah says the week was boring.", answer: false },
    ],
    buildSentence: [
      { target: "Grandma hugs me tightly.", jumbled: ["hugs", "me", "Grandma", "tightly."] },
      { target: "I will visit again soon.", jumbled: ["will", "visit", "I", "again", "soon."] },
      { target: "My week with Grandma was the best.", jumbled: ["week", "with", "My", "Grandma", "was", "the", "best."] },
    ],
    mySentencePrompt: "Write or say one sentence about saying goodbye to someone.",
    mySentenceExample: "I say goodbye and wave to my friend.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

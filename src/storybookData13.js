// A1 Kids digital storybook, Book 13: "My New Puppy"
// Static content -- no Supabase, mirrors the pattern in storybookData9.js
// through storybookData12.js. First book in the Kids age track (Books 1-6
// are Teens, 7-12 are Adults) -- vocabulary, sentence length, and story
// content are simpler than the Teens books, and each chapter uses only 3
// True/False and 3 Build-a-Sentence items instead of 5, per the Kids-track
// spec.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook13/
// once art exists, same as storybookData9.js does.

export const STORYBOOK_TITLE = "My New Puppy";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ellie sitting on the living room floor hugging her small brown puppy Milo, both smiling, warm cozy home setting with a dog bed and a ball nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ellie", role: "The narrator, a young girl", look: "Short brown hair in two pigtails, yellow T-shirt, big happy smile." },
  { name: "Milo", role: "Ellie's new puppy", look: "Small brown puppy with floppy ears and a white patch on his chest." },
  { name: "Mom", role: "Ellie's mother", look: "Shoulder-length dark hair, soft cardigan, warm and gentle." },
  { name: "Dad", role: "Ellie's father", look: "Short hair, checked shirt, patient and playful." },
  { name: "Theo", role: "Ellie's little brother, appears in Chapter 2", look: "Curly hair, striped shirt, excitable." },
  { name: "Grace", role: "Ellie's friend from the park, appears in Chapter 5", look: "Long hair in a ponytail, pink jacket, has her own dog." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Big Surprise",
    image: null,
    imageNote: "Ellie opening the front door and gasping with delight at a small brown puppy sitting on the kitchen floor, Mom smiling in the background.",
    story:
      "Today is a special day. I come home from school and open the door. I see a small brown puppy on the kitchen floor! Mom smiles and says, “He is your new puppy!” I feel so happy, and I want to jump and shout. The puppy runs to me and licks my hand. Dad says, “You can play with him now.” I sit on the floor and pet his soft fur. This is the best day ever!",
    questions: [
      "What does Ellie see on the kitchen floor?",
      "What does Mom say?",
      "How does Ellie feel?",
    ],
    trueFalse: [
      { text: "Ellie sees a puppy on the kitchen floor.", answer: true },
      { text: "Ellie feels sad.", answer: false },
      { text: "Dad says she can play with the puppy.", answer: true },
    ],
    buildSentence: [
      { target: "I see a puppy.", jumbled: ["see", "a", "puppy.", "I"] },
      { target: "The puppy licks my hand.", jumbled: ["licks", "my", "puppy", "hand.", "The"] },
      { target: "This is the best day ever!", jumbled: ["is", "best", "This", "day", "the", "ever!"] },
    ],
    mySentencePrompt: "Write or say one sentence about a pet you have or want.",
    mySentenceExample: "I want a small dog.",
  },
  {
    number: 2,
    title: "Choosing a Name",
    image: null,
    imageNote: "The family sitting together on the living room floor around the puppy, Theo excitedly pointing, Ellie thinking with a hand on her chin.",
    story:
      "We sit together in the living room. Dad says, “We need a good name for him.” I think of many names. Mom says, “What about Max?” My brother Theo says, “I like Rex!” I look at the puppy's big brown eyes. I say, “His name is Milo.” Everyone smiles and says, “Milo is a good name!” The puppy wags his tail. Now he has a name!",
    questions: [
      "Where does the family sit?",
      "What name does Ellie choose?",
      "What does the puppy do when he gets his name?",
    ],
    trueFalse: [
      { text: "The family sits in the kitchen.", answer: false },
      { text: "Ellie chooses the name Milo.", answer: true },
      { text: "The puppy wags his tail.", answer: true },
    ],
    buildSentence: [
      { target: "We sit together.", jumbled: ["sit", "together.", "We"] },
      { target: "His name is Milo.", jumbled: ["name", "is", "His", "Milo."] },
      { target: "The puppy wags his tail.", jumbled: ["wags", "his", "puppy", "tail.", "The"] },
    ],
    mySentencePrompt: "Write or say one sentence about a name you like.",
    mySentenceExample: "I like the name Luna.",
  },
  {
    number: 3,
    title: "Milo's First Night",
    image: null,
    imageNote: "Ellie in pajamas sitting on the floor beside a small dog bed at night, gently petting a whimpering Milo under soft moonlight through the window.",
    story:
      "At night, Milo sleeps in a small bed in my room. Soon, I hear a soft cry. Milo is awake, and he looks scared. I get out of bed and sit next to him. I say, “It's okay, Milo. I'm here.” I pet his head slowly. Milo stops crying and rests his head on my hand. Soon, we both fall asleep. In the morning, Milo licks my face and wakes me up.",
    questions: [
      "Where does Milo sleep?",
      "What does Milo do at night?",
      "What wakes Ellie up in the morning?",
    ],
    trueFalse: [
      { text: "Milo sleeps in the kitchen.", answer: false },
      { text: "Milo cries at night.", answer: true },
      { text: "Milo licks Ellie's face in the morning.", answer: true },
    ],
    buildSentence: [
      { target: "Milo is awake.", jumbled: ["is", "awake.", "Milo"] },
      { target: "I sit next to him.", jumbled: ["sit", "next", "I", "to", "him."] },
      { target: "Milo licks my face.", jumbled: ["licks", "my", "Milo", "face."] },
    ],
    mySentencePrompt: "Write or say one sentence about nighttime.",
    mySentenceExample: "I sleep in my bed at night.",
  },
  {
    number: 4,
    title: "Puppy School",
    image: null,
    imageNote: "Dad kneeling on the living room floor holding a small treat above Milo, who is mid-jump, Ellie watching and clapping nearby.",
    story:
      "Today, Dad teaches Milo a new trick. Dad holds a small treat and says, “Sit, Milo!” Milo looks confused and jumps up. Dad tries again, slowly and kindly. “Sit, Milo,” he says softly. This time, Milo sits down! We clap and cheer for him. Milo gets his treat and wags his tail. I say, “Good boy, Milo!” Puppy school is fun, and Milo learns fast.",
    questions: [
      "Who teaches Milo a new trick?",
      "What word does Dad say to Milo?",
      "What does Milo get when he sits?",
    ],
    trueFalse: [
      { text: "Dad teaches Milo a new trick.", answer: true },
      { text: "Milo sits down on the first try.", answer: false },
      { text: "Milo gets a treat.", answer: true },
    ],
    buildSentence: [
      { target: "Milo jumps up.", jumbled: ["jumps", "up.", "Milo"] },
      { target: "Milo sits down!", jumbled: ["sits", "down!", "Milo"] },
      { target: "We clap and cheer for him.", jumbled: ["clap", "and", "We", "cheer", "for", "him."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning something new.",
    mySentenceExample: "I learn to jump rope.",
  },
  {
    number: 5,
    title: "A Walk in the Park",
    image: null,
    imageNote: "Ellie holding Milo's leash on a sunny park path, Grace and her own dog nearby, the two puppies playfully running in circles on the grass.",
    story:
      "On Saturday, I take Milo for his first walk. I hold his leash, and we walk to the park. Milo sniffs the grass and wags his tail. At the park, I see my friend Grace with her dog. Grace says, “Your puppy is so cute!” Milo and Grace's dog play together and run in circles. We sit on a bench and watch them play. It is a fun day at the park.",
    questions: [
      "Where does Ellie take Milo?",
      "Who does she see at the park?",
      "What do Milo and Grace's dog do?",
    ],
    trueFalse: [
      { text: "Ellie takes Milo to the park.", answer: true },
      { text: "Grace says the puppy is ugly.", answer: false },
      { text: "Milo and Grace's dog play together.", answer: true },
    ],
    buildSentence: [
      { target: "Milo sniffs the grass.", jumbled: ["sniffs", "the", "Milo", "grass."] },
      { target: "We sit on a bench.", jumbled: ["sit", "on", "We", "a", "bench."] },
      { target: "It is a fun day at the park.", jumbled: ["is", "a", "It", "fun", "day", "at", "the", "park."] },
    ],
    mySentencePrompt: "Write or say one sentence about the park.",
    mySentenceExample: "I like to play at the park.",
  },
  {
    number: 6,
    title: "Milo Makes a Mess",
    image: null,
    imageNote: "Ellie standing in the hallway looking at a chewed shoe on the floor, Milo sitting nearby looking sheepish, Mom kneeling to comfort Ellie.",
    story:
      "One afternoon, I come home and see something on the floor. Milo has chewed my favorite shoe! I feel upset and want to shout. Mom says, “Milo is still a baby. He does not know yet.” We clean up the mess together. Dad gives Milo a chew toy instead. I hug Milo and say, “It's okay, Milo.” I learn that puppies make mistakes too.",
    questions: [
      "What does Milo chew?",
      "How does Ellie feel at first?",
      "What does Ellie learn?",
    ],
    trueFalse: [
      { text: "Milo chews Ellie's shoe.", answer: true },
      { text: "Ellie feels happy about the mess.", answer: false },
      { text: "Dad gives Milo a chew toy.", answer: true },
    ],
    buildSentence: [
      { target: "I feel upset.", jumbled: ["feel", "upset.", "I"] },
      { target: "Puppies make mistakes too.", jumbled: ["make", "mistakes", "Puppies", "too."] },
      { target: "We clean up the mess together.", jumbled: ["clean", "up", "We", "the", "mess", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake.",
    mySentenceExample: "I make a mistake, but it is okay.",
  },
  {
    number: 7,
    title: "Bath Time for Milo",
    image: null,
    imageNote: "Ellie kneeling by a bathtub giving Milo a bubbly bath, both of them splashed with water and laughing, towels ready nearby.",
    story:
      "Today, Milo needs a bath. He rolled in the mud outside! I fill the tub with warm water. Milo does not like the water at first. He shakes and splashes everywhere. Water goes all over my clothes, and I start to laugh. Slowly, Milo relaxes and enjoys the warm water. I wash his soft fur gently. After the bath, Milo looks clean and smells so fresh. He shakes his whole body and gets me wet again!",
    questions: [
      "Why does Milo need a bath?",
      "What does Milo do at first?",
      "How does Milo look after the bath?",
    ],
    trueFalse: [
      { text: "Milo rolled in the mud.", answer: true },
      { text: "Milo loves the water right away.", answer: false },
      { text: "Milo looks clean after the bath.", answer: true },
    ],
    buildSentence: [
      { target: "Milo needs a bath.", jumbled: ["needs", "a", "Milo", "bath."] },
      { target: "I start to laugh.", jumbled: ["start", "to", "I", "laugh."] },
      { target: "Milo looks clean and fresh.", jumbled: ["looks", "clean", "Milo", "and", "fresh."] },
    ],
    mySentencePrompt: "Write or say one sentence about bath time.",
    mySentenceExample: "I take a bath at night.",
  },
  {
    number: 8,
    title: "Milo Learns to Fetch",
    image: null,
    imageNote: "Ellie in the backyard throwing a small ball, Milo mid-run chasing after it, tail wagging with excitement.",
    story:
      "In the yard, I throw a small ball for Milo. “Go get it, Milo!” I shout. Milo runs fast, but he does not bring the ball back. He just looks at it and barks. I try again and again, but Milo does not understand yet. Then, on the fifth try, Milo picks up the ball and runs back to me! I clap my hands and say, “Good job, Milo!” Now Milo loves to play fetch every day.",
    questions: [
      "What does Ellie throw for Milo?",
      "What does Milo do at first?",
      "What happens on the fifth try?",
    ],
    trueFalse: [
      { text: "Ellie throws a ball for Milo.", answer: true },
      { text: "Milo brings the ball back the first time.", answer: false },
      { text: "Milo picks up the ball on the fifth try.", answer: true },
    ],
    buildSentence: [
      { target: "Milo runs fast.", jumbled: ["runs", "fast.", "Milo"] },
      { target: "I clap my hands.", jumbled: ["clap", "my", "I", "hands."] },
      { target: "Milo loves to play fetch.", jumbled: ["loves", "to", "Milo", "play", "fetch."] },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like to play.",
    mySentenceExample: "I like to play with a ball.",
  },
  {
    number: 9,
    title: "Show and Tell",
    image: null,
    imageNote: "Ellie standing at the front of her classroom holding up a photo of Milo, classmates sitting on the carpet with raised hands to ask questions.",
    story:
      "At school, it is show-and-tell day. I bring photos of Milo to show my class. I stand at the front and hold up a photo. “This is my puppy, Milo,” I say. My classmates smile and ask questions. “What does he eat?” asks one boy. “What tricks does he know?” asks a girl. I answer every question with a big smile. Everyone says Milo looks very cute. I feel proud to share my puppy with my class.",
    questions: [
      "What does Ellie bring to school?",
      "What does Ellie say about the photo?",
      "How does Ellie feel?",
    ],
    trueFalse: [
      { text: "Ellie brings Milo's photos to school.", answer: true },
      { text: "No one asks questions about Milo.", answer: false },
      { text: "Ellie feels proud.", answer: true },
    ],
    buildSentence: [
      { target: "My classmates smile.", jumbled: ["classmates", "smile.", "My"] },
      { target: "I bring photos of Milo.", jumbled: ["bring", "photos", "I", "of", "Milo."] },
      { target: "I feel proud to share my puppy.", jumbled: ["feel", "proud", "I", "to", "share", "my", "puppy."] },
    ],
    mySentencePrompt: "Write or say one sentence about show-and-tell.",
    mySentenceExample: "I want to show my toy at school.",
  },
  {
    number: 10,
    title: "My Best Friend Milo",
    image: null,
    imageNote: "Ellie lying on the floor next to a now slightly bigger Milo in the evening, both relaxed and happy, a small dog bed and toys visible nearby.",
    story:
      "It has been one month since Milo came home. He is bigger now and knows many tricks. Milo can sit, come, and fetch the ball. Every morning, he wakes me up with a lick on my face. Every afternoon, we play together in the yard. At night, Milo sleeps next to my bed. I remember the first day, when Milo was scared and small. Now, Milo is happy and full of energy. I look at Milo and smile. He is not just my puppy. He is my best friend.",
    questions: [
      "How long has Milo been home?",
      "What tricks can Milo do now?",
      "What does Ellie call Milo at the end?",
    ],
    trueFalse: [
      { text: "Milo has been home for one month.", answer: true },
      { text: "Milo cannot do any tricks.", answer: false },
      { text: "Ellie calls Milo her best friend.", answer: true },
    ],
    buildSentence: [
      { target: "Milo is bigger now.", jumbled: ["is", "bigger", "Milo", "now."] },
      { target: "We play together in the yard.", jumbled: ["play", "together", "We", "in", "the", "yard."] },
      { target: "He is my best friend.", jumbled: ["is", "my", "He", "best", "friend."] },
    ],
    mySentencePrompt: "Write or say one sentence about your best friend.",
    mySentenceExample: "My best friend makes me happy.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

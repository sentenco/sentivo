// A2 Kids digital storybook, Book 24: "The Class Pet"
// Static content -- no Supabase. Second book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The Class Pet";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Leo carrying a small rabbit cage carefully down the school hallway, a fluffy white rabbit named Nibbles peeking out, Leo smiling with pride.";

export const CHARACTERS = [
  { name: "Leo", role: "The narrator, a young boy", look: "Short dark hair, red backpack, responsible and caring expression." },
  { name: "Zoe", role: "Leo's classmate", look: "Glasses, two pigtails, friendly and helpful." },
  { name: "Ms. Bailey", role: "Leo's teacher", look: "Cardigan sweater, warm smile, encouraging." },
  { name: "Nibbles", role: "The class pet, a white rabbit", look: "Fluffy white fur, pink nose, twitchy whiskers." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Job",
    image: null,
    imageNote: "Ms. Bailey standing beside a rabbit cage in the classroom, announcing the pet-care schedule to the class, Leo raising his hand eagerly.",
    story:
      "Every week, one student in our class gets to take care of Nibbles, our classroom rabbit. On Monday, Ms. Bailey announces that it is my turn this week. “Leo, you will feed Nibbles and clean her cage every day,” she explains. I feel proud because taking care of Nibbles is a big responsibility. Zoe, who had the job last week, gives me some helpful tips. “Nibbles loves carrots, and she gets scared by loud noises,” she says. I promise to take excellent care of our small, fluffy friend all week long.",
    questions: [
      "What does Leo's new job involve?",
      "Who had the job before Leo?",
      "What tip does Zoe give Leo?",
    ],
    trueFalse: [
      { text: "Leo's job is to feed and clean Nibbles' cage.", answer: true },
      { text: "Zoe never had the job before.", answer: false },
      { text: "Zoe says Nibbles gets scared by loud noises.", answer: true },
    ],
    buildSentence: [
      { target: "This week is my turn.", jumbled: ["is", "my", "This", "week", "turn."] },
      { target: "I feel proud of my job.", jumbled: ["feel", "proud", "I", "of", "my", "job."] },
      { target: "Nibbles loves eating carrots.", jumbled: ["loves", "eating", "Nibbles", "carrots."] },
    ],
    mySentencePrompt: "Write or say one sentence about a responsibility you have at home or school.",
    mySentenceExample: "My responsibility at home is feeding our dog every morning.",
  },
  {
    number: 2,
    title: "Meeting Nibbles",
    image: null,
    imageNote: "Leo kneeling beside the rabbit cage, gently offering a carrot slice to Nibbles while Zoe watches and smiles.",
    story:
      "During recess, I learn everything about caring for Nibbles. First, I fill her water bottle and add fresh hay to her cage. Then I offer her a small piece of carrot, and she nibbles it happily from my hand. Her whiskers twitch, and her soft fur feels warm when I gently pet her. “She likes you already,” Zoe says with a laugh. I clean the corner of the cage where it is a little messy, just like Zoe showed me. By the end of recess, I feel much more confident about being Nibbles' caretaker.",
    questions: [
      "What does Leo do first for Nibbles?",
      "What does Leo offer Nibbles to eat?",
      "How does Leo feel by the end of recess?",
    ],
    trueFalse: [
      { text: "Leo fills the water bottle first.", answer: true },
      { text: "Nibbles refuses to eat the carrot.", answer: false },
      { text: "Leo feels more confident by the end of recess.", answer: true },
    ],
    buildSentence: [
      { target: "I fill her water bottle.", jumbled: ["fill", "her", "I", "water", "bottle."] },
      { target: "She nibbles it happily.", jumbled: ["nibbles", "it", "She", "happily."] },
      { target: "I feel more confident now.", jumbled: ["feel", "more", "I", "confident", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about an animal you like to take care of.",
    mySentenceExample: "I like to take care of my grandmother's cat when I visit.",
  },
  {
    number: 3,
    title: "The Weekend Question",
    image: null,
    imageNote: "Ms. Bailey asking the class a question in front of the whiteboard, Leo raising his hand high while other students look on.",
    story:
      "On Friday afternoon, Ms. Bailey asks the class an important question. “Nibbles needs a home for the weekend. Who would like to take her?” Many hands go up immediately, including mine, waving excitedly in the air. Ms. Bailey thinks for a moment and then smiles at me. “Leo, since you did such a great job this week, you can take her home,” she says. I feel thrilled but also a little nervous because I have never taken care of a pet by myself for two whole days. Zoe gives me a thumbs up from across the room.",
    questions: [
      "What does Ms. Bailey ask the class?",
      "Who does Ms. Bailey choose?",
      "Why does Leo feel a little nervous?",
    ],
    trueFalse: [
      { text: "Nibbles needs a home for the weekend.", answer: true },
      { text: "No one wants to take Nibbles home.", answer: false },
      { text: "Leo has taken care of a pet alone many times before.", answer: false },
    ],
    buildSentence: [
      { target: "Nibbles needs a home.", jumbled: ["needs", "a", "Nibbles", "home."] },
      { target: "Many hands go up.", jumbled: ["go", "up", "Many", "hands."] },
      { target: "I feel thrilled and nervous.", jumbled: ["feel", "thrilled", "I", "and", "nervous."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you were chosen for something special.",
    mySentenceExample: "I felt thrilled when the coach chose me for the team.",
  },
  {
    number: 4,
    title: "Bringing Nibbles Home",
    image: null,
    imageNote: "Leo walking carefully out of school holding the rabbit cage with both hands, his family's car waiting nearby.",
    story:
      "After school, I carry Nibbles' cage very carefully to the car, making sure not to shake it too much. At home, my little sister runs over excitedly and asks, “Can I pet her? Can I pet her?” I explain to my whole family that Nibbles needs a quiet, safe space and gentle hands. We choose a calm corner of the living room for her cage, away from loud noises. “This is a big responsibility, Leo,” Dad says, “but I know you can handle it.” I nod, feeling determined to be the best rabbit-sitter possible.",
    questions: [
      "How does Leo carry the cage?",
      "What does Leo's sister ask?",
      "Where do they put Nibbles' cage?",
    ],
    trueFalse: [
      { text: "Leo carries the cage carefully.", answer: true },
      { text: "Leo's sister does not care about Nibbles.", answer: false },
      { text: "They choose a loud, busy corner for the cage.", answer: false },
    ],
    buildSentence: [
      { target: "I carry the cage carefully.", jumbled: ["carry", "the", "I", "cage", "carefully."] },
      { target: "Can I pet her?", jumbled: ["I", "pet", "Can", "her?"] },
      { target: "This is a big responsibility.", jumbled: ["is", "a", "This", "big", "responsibility."] },
    ],
    mySentencePrompt: "Write or say one sentence about a rule your family has for taking care of something.",
    mySentenceExample: "In my family, we must feed our fish every day.",
  },
  {
    number: 5,
    title: "Settling In",
    image: null,
    imageNote: "Nibbles crouched quietly in the corner of her cage in Leo's living room, Leo sitting nearby speaking softly and offering hay.",
    story:
      "At first, Nibbles seems nervous in her new surroundings. She sits very still in the corner of her cage and does not move much. “Maybe she misses her classroom,” I think to myself. I sit quietly beside her cage and speak in a soft, gentle voice. Slowly, I offer her fresh hay through the cage bars. After a while, she starts hopping around a little and even nibbles on a piece of lettuce. By dinnertime, Nibbles seems much more relaxed, and I feel relieved that she is finally settling into her temporary home.",
    questions: [
      "How does Nibbles act at first?",
      "What does Leo do to help her feel better?",
      "How does Nibbles seem by dinnertime?",
    ],
    trueFalse: [
      { text: "Nibbles seems nervous at first.", answer: true },
      { text: "Leo yells loudly to get Nibbles' attention.", answer: false },
      { text: "Nibbles seems more relaxed by dinnertime.", answer: true },
    ],
    buildSentence: [
      { target: "Nibbles seems nervous at first.", jumbled: ["seems", "nervous", "Nibbles", "at", "first."] },
      { target: "I speak in a soft voice.", jumbled: ["speak", "in", "I", "a", "soft", "voice."] },
      { target: "She starts hopping around.", jumbled: ["starts", "hopping", "She", "around."] },
    ],
    mySentencePrompt: "Write or say one sentence about how you help someone or something feel calm.",
    mySentenceExample: "I speak softly to help my baby cousin feel calm.",
  },
  {
    number: 6,
    title: "The Escape",
    image: null,
    imageNote: "Leo and his sister crawling under the living room furniture, looking worried, the empty open cage visible behind them.",
    story:
      "The next morning, I get a terrible surprise. The cage door is open, and Nibbles is nowhere to be seen! My heart starts beating fast, and I feel a wave of panic. “Nibbles is missing!” I shout, and my whole family rushes into the living room. We search under the couch, behind the curtains, and inside every corner of the room. “How did the door open?” Mom asks, checking the latch. I feel terrible, worrying that I forgot to close it properly the night before. We keep searching quietly so we do not scare her further.",
    questions: [
      "What does Leo discover in the morning?",
      "How does Leo feel when he sees the empty cage?",
      "What does the family do to find Nibbles?",
    ],
    trueFalse: [
      { text: "The cage door is open and Nibbles is gone.", answer: true },
      { text: "Leo feels calm and unworried about Nibbles.", answer: false },
      { text: "The family searches the living room together.", answer: true },
    ],
    buildSentence: [
      { target: "The cage door is open.", jumbled: ["door", "is", "The", "cage", "open."] },
      { target: "My heart beats very fast.", jumbled: ["beats", "very", "My", "heart", "fast."] },
      { target: "We search every corner.", jumbled: ["search", "every", "We", "corner."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you lost something important.",
    mySentenceExample: "I felt worried when I lost my house key last week.",
  },
  {
    number: 7,
    title: "Found Under the Couch",
    image: null,
    imageNote: "Leo lying on his stomach, reaching under the couch and gently pulling out a slightly dusty but happy Nibbles.",
    story:
      "After ten worried minutes, my sister spots two small ears peeking out from under the couch. “I found her!” she yells excitedly. I lie down on my stomach and reach carefully underneath. Nibbles is sitting there quietly, a little dusty but completely unharmed. I gently scoop her up and hold her close to my chest, feeling my heart slow down with relief. “You scared us so much,” I whisper to her softly. Everyone in my family cheers and hugs each other, relieved that our small adventure ended happily.",
    questions: [
      "Who spots Nibbles first?",
      "Where is Nibbles hiding?",
      "How does Leo feel when he finds her?",
    ],
    trueFalse: [
      { text: "Leo's sister spots Nibbles first.", answer: true },
      { text: "Nibbles is hurt when they find her.", answer: false },
      { text: "Leo feels relieved when he finds Nibbles.", answer: true },
    ],
    buildSentence: [
      { target: "I found her under the couch.", jumbled: ["found", "her", "I", "under", "the", "couch."] },
      { target: "I hold her close to me.", jumbled: ["hold", "her", "I", "close", "to", "me."] },
      { target: "Everyone cheers happily together.", jumbled: ["cheers", "happily", "Everyone", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt relieved.",
    mySentenceExample: "I felt relieved when I found my missing shoe under my bed.",
  },
  {
    number: 8,
    title: "A Safer Cage",
    image: null,
    imageNote: "Dad and Leo kneeling beside the rabbit cage, fixing a small metal latch together with a screwdriver, Nibbles watching calmly nearby.",
    story:
      "That afternoon, Dad and I look closely at Nibbles' cage door together. “The latch is a little loose. That's probably why it opened,” Dad explains. We find a small screwdriver and tighten the latch until it clicks firmly shut. “Now let's test it,” Dad says, and we check the door three times to make sure it stays closed. “Being responsible means fixing problems, not just feeling bad about them,” Dad tells me kindly. I feel proud that we solved the problem together, and I know Nibbles will be much safer for the rest of the weekend.",
    questions: [
      "What is wrong with the cage door?",
      "What do Leo and Dad use to fix it?",
      "What does Dad say about being responsible?",
    ],
    trueFalse: [
      { text: "The latch on the cage is a little loose.", answer: true },
      { text: "Dad says being responsible means only feeling bad.", answer: false },
      { text: "Leo feels proud that they fixed the problem.", answer: true },
    ],
    buildSentence: [
      { target: "The latch is a little loose.", jumbled: ["is", "a", "The", "latch", "little", "loose."] },
      { target: "We tighten the latch together.", jumbled: ["tighten", "the", "We", "latch", "together."] },
      { target: "I feel proud of us.", jumbled: ["feel", "proud", "I", "of", "us."] },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you fixed with help from someone.",
    mySentenceExample: "I fixed my broken toy with help from my uncle.",
  },
  {
    number: 9,
    title: "Back to School",
    image: null,
    imageNote: "Leo carrying the cage into the classroom on Monday morning, Zoe and other classmates gathering around excitedly to hear his story.",
    story:
      "On Monday morning, I carefully carry Nibbles back to the classroom. Zoe and several other classmates gather around immediately, curious about the weekend. “Did anything exciting happen?” Zoe asks. I take a deep breath and tell them the whole story, from the escape to finding her under the couch. “That sounds so scary!” one classmate says, eyes wide. I explain how Dad and I fixed the latch afterward so it would never happen again. Ms. Bailey listens to my story too, nodding thoughtfully as I finish explaining everything that happened over the weekend.",
    questions: [
      "What does Leo do on Monday morning?",
      "What does Zoe ask him?",
      "Who else listens to Leo's story?",
    ],
    trueFalse: [
      { text: "Leo carries Nibbles back to the classroom on Monday.", answer: true },
      { text: "No one is curious about Leo's weekend.", answer: false },
      { text: "Ms. Bailey listens to the story too.", answer: true },
    ],
    buildSentence: [
      { target: "I carry Nibbles back to class.", jumbled: ["carry", "Nibbles", "I", "back", "to", "class."] },
      { target: "Did anything exciting happen?", jumbled: ["anything", "exciting", "Did", "happen?"] },
      { target: "I tell them the whole story.", jumbled: ["tell", "them", "I", "the", "whole", "story."] },
    ],
    mySentencePrompt: "Write or say one sentence about a story you told your friends recently.",
    mySentenceExample: "I told my friends the story about my trip to the beach.",
  },
  {
    number: 10,
    title: "Class Hero",
    image: null,
    imageNote: "Ms. Bailey smiling and clapping in front of the class as Leo stands proudly beside Nibbles' cage, classmates clapping too.",
    story:
      "After hearing my whole story, Ms. Bailey stands up in front of the class. “Leo handled a difficult situation with real responsibility,” she announces. “He stayed calm, found Nibbles safely, and even fixed the problem so it won't happen again.” The whole class claps, and I feel my cheeks turn a little pink from happiness. Zoe leans over and whispers, “You're basically a class hero now!” I laugh, but secretly I feel very proud of myself. I already hope Ms. Bailey picks me for pet duty again very soon, because now I feel ready for anything.",
    questions: [
      "What does Ms. Bailey say about Leo?",
      "How does the class react?",
      "How does Leo feel by the end of the story?",
    ],
    trueFalse: [
      { text: "Ms. Bailey says Leo handled the situation responsibly.", answer: true },
      { text: "The class stays silent and does not clap.", answer: false },
      { text: "Leo feels proud of himself by the end.", answer: true },
    ],
    buildSentence: [
      { target: "Leo handled it with responsibility.", jumbled: ["handled", "it", "Leo", "with", "responsibility."] },
      { target: "The whole class claps.", jumbled: ["class", "claps", "The", "whole."] },
      { target: "I feel ready for anything.", jumbled: ["feel", "ready", "I", "for", "anything."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt proud of yourself.",
    mySentenceExample: "I felt proud of myself when I finished my science project.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

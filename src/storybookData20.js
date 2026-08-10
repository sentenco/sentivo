// A1 Kids digital storybook, Book 20: "My Little Sister"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData19.js. Eighth book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead.

export const STORYBOOK_TITLE = "My Little Sister";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ben sitting on the sofa carefully holding his tiny baby sister Rosie, both looking at each other warmly, Mom and Dad watching happily nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Ben", role: "The narrator, a young boy and new big brother", look: "Short brown hair, green T-shirt, thoughtful and caring expression." },
  { name: "Rosie", role: "Ben's new baby sister", look: "Tiny newborn baby, soft wisps of hair, wrapped in a pale yellow blanket." },
  { name: "Mom", role: "Ben and Rosie's mother", look: "Tied-back hair, comfortable cardigan, warm and tired-but-happy expression." },
  { name: "Dad", role: "Ben and Rosie's father", look: "Short hair, plain T-shirt, gentle and supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Baby Comes Home",
    image: null,
    imageNote: "Ben sitting carefully on the sofa holding tiny newborn Rosie for the first time, Mom and Dad watching with proud smiles.",
    story:
      "Today, Mom and Dad bring my new baby sister home from the hospital. Her name is Rosie, and she is very small and soft. I look at her tiny hands and tiny little toes. “Do you want to hold her, Ben?” Mom asks me gently. I sit down carefully, and Dad places Rosie in my arms. She feels light, like a small, warm bundle. Rosie opens her eyes for a second and looks at me. “Hi, Rosie, I'm your big brother,” I whisper softly. I feel proud and a little nervous at the same time.",
    questions: [
      "What is the new baby's name?",
      "What does Ben look at first?",
      "How does Ben feel holding Rosie?",
    ],
    trueFalse: [
      { text: "The baby's name is Rosie.", answer: true },
      { text: "Ben does not want to hold her.", answer: false },
      { text: "Ben feels proud and nervous.", answer: true },
    ],
    buildSentence: [
      { target: "Her name is Rosie.", jumbled: ["name", "is", "Her", "Rosie."] },
      { target: "I hold my sister.", jumbled: ["hold", "my", "I", "sister."] },
      { target: "I feel proud and nervous.", jumbled: ["feel", "proud", "I", "and", "nervous."] },
    ],
    mySentencePrompt: "Write or say one sentence about a baby you know.",
    mySentenceExample: "My baby sister is very small.",
  },
  {
    number: 2,
    title: "Rosie Cries a Lot",
    image: null,
    imageNote: "Mom walking around the living room at night gently rocking a crying Rosie, Ben sitting up in bed nearby with a pillow over his ears, Dad yawning in the kitchen.",
    story:
      "That night, Rosie cries loudly, and I cannot fall asleep. Mom walks around the house, holding Rosie and singing softly. “Babies cry because it is how they talk to us,” Mom explains. I put my pillow over my ears, but I can still hear her. In the morning, I feel tired, and so does everyone else. Dad makes coffee and yawns while feeding Rosie her bottle. “Being a baby's family is hard work,” Dad says with a tired smile. I did not know babies could cry so much. I hope Rosie feels better and cries a little less tonight.",
    questions: [
      "What does Rosie do at night?",
      "What does Mom say about crying?",
      "How does everyone feel in the morning?",
    ],
    trueFalse: [
      { text: "Rosie cries loudly at night.", answer: true },
      { text: "Mom says crying means babies are happy.", answer: false },
      { text: "Everyone feels tired in the morning.", answer: true },
    ],
    buildSentence: [
      { target: "Rosie cries loudly.", jumbled: ["cries", "loudly.", "Rosie"] },
      { target: "I cannot fall asleep.", jumbled: ["cannot", "fall", "I", "asleep."] },
      { target: "Everyone feels tired today.", jumbled: ["feels", "tired", "Everyone", "today."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling tired.",
    mySentenceExample: "I feel tired when I do not sleep well.",
  },
  {
    number: 3,
    title: "Helping Mom with the Baby",
    image: null,
    imageNote: "Ben proudly handing Mom a clean diaper while she changes baby Rosie on a changing table, Ben also holding a pair of tiny socks.",
    story:
      "The next day, I ask Mom if I can help with Rosie. “You can bring me a clean diaper, Ben,” Mom says with a smile. I run to get a soft, clean diaper from the shelf. I also help by holding Rosie's tiny socks while Mom dresses her. “You are such a good helper,” Mom tells me happily. I like feeling useful and important as a big brother. Rosie looks up at me while Mom changes her clothes. I make a silly face, and Rosie's eyes seem to smile a little. Helping with Rosie makes me feel proud of myself.",
    questions: [
      "What does Ben bring Mom?",
      "What else does Ben help with?",
      "How does Ben feel about helping?",
    ],
    trueFalse: [
      { text: "Ben brings a clean diaper.", answer: true },
      { text: "Ben refuses to help at all.", answer: false },
      { text: "Ben feels proud of himself.", answer: true },
    ],
    buildSentence: [
      { target: "I help Mom today.", jumbled: ["help", "Mom", "I", "today."] },
      { target: "I bring a diaper.", jumbled: ["bring", "a", "I", "diaper."] },
      { target: "I feel proud of myself.", jumbled: ["feel", "proud", "I", "of", "myself."] },
    ],
    mySentencePrompt: "Write or say one sentence about helping your family.",
    mySentenceExample: "I help my mom at home.",
  },
  {
    number: 4,
    title: "A Quiet Moment with Rosie",
    image: null,
    imageNote: "Ben sitting calmly on the sofa holding sleeping Rosie close, Mom taking a gentle photo of the two of them together.",
    story:
      "One afternoon, the house feels calm and quiet for a while. I sit on the sofa, and Mom places sleepy Rosie in my arms. She breathes slowly and softly while she sleeps peacefully. I look at her tiny eyelashes and small, round cheeks. I feel warm and calm holding my little sister close. Mom takes a photo of us together on the sofa. “You two look so sweet together,” Mom whispers with a smile. I stay very still so I do not wake Rosie up. This quiet moment with Rosie feels really special to me.",
    questions: [
      "Where does Ben sit with Rosie?",
      "What is Rosie doing while Ben holds her?",
      "What does Mom do?",
    ],
    trueFalse: [
      { text: "Ben sits on the sofa.", answer: true },
      { text: "Rosie is wide awake and loud.", answer: false },
      { text: "Mom takes a photo of them.", answer: true },
    ],
    buildSentence: [
      { target: "Rosie sleeps peacefully.", jumbled: ["sleeps", "peacefully.", "Rosie"] },
      { target: "I feel calm and warm.", jumbled: ["feel", "calm", "I", "and", "warm."] },
      { target: "This moment feels special.", jumbled: ["moment", "feels", "This", "special."] },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet, calm moment.",
    mySentenceExample: "I feel calm when the house is quiet.",
  },
  {
    number: 5,
    title: "Rosie's First Smile",
    image: null,
    imageNote: "Ben leaning over the crib making a silly face at Rosie, who is smiling for the first time, Mom and Dad rushing in with happy surprised expressions.",
    story:
      "This morning, I lean over Rosie's crib to say good morning. I make a silly face and stick out my tongue playfully. Suddenly, Rosie's little mouth curves into a real smile! “Mom, Dad, come quick! Rosie is smiling!” I shout excitedly. Mom and Dad rush over and see Rosie smiling at me again. “That's her first real smile, Ben!” Mom says with happy tears. I feel so proud that I made my baby sister smile first. Rosie smiles again when I make another silly face. This is one of the happiest moments of my life.",
    questions: [
      "What does Ben do to Rosie?",
      "What happens suddenly?",
      "How does Mom feel about Rosie's first smile?",
    ],
    trueFalse: [
      { text: "Ben makes a silly face.", answer: true },
      { text: "Rosie does not smile at all.", answer: false },
      { text: "Mom feels happy about the smile.", answer: true },
    ],
    buildSentence: [
      { target: "Rosie smiles at me.", jumbled: ["smiles", "at", "Rosie", "me."] },
      { target: "I feel so proud.", jumbled: ["feel", "so", "I", "proud."] },
      { target: "This is a happy moment.", jumbled: ["is", "a", "This", "happy", "moment."] },
    ],
    mySentencePrompt: "Write or say one sentence about a happy moment.",
    mySentenceExample: "I feel happy when my family smiles.",
  },
  {
    number: 6,
    title: "Feeling a Little Jealous",
    image: null,
    imageNote: "Ben sitting alone in his room holding a drawing, looking a little sad, while through the doorway Mom and Dad are busy caring for baby Rosie.",
    story:
      "Lately, Mom and Dad spend most of their time with Rosie. I feel a little forgotten, even though I know that is silly. Today, I wanted to show Dad my new drawing, but he was busy with Rosie. I feel a small knot of sadness in my stomach. I go to my room and sit quietly by myself. I do not want to be mean, but I feel a little jealous. Nobody notices that I am upset for a little while. I wonder if Mom and Dad still have enough love for me too.",
    questions: [
      "Who do Mom and Dad spend most time with?",
      "What did Ben want to show Dad?",
      "How does Ben feel?",
    ],
    trueFalse: [
      { text: "Mom and Dad spend time with Rosie.", answer: true },
      { text: "Dad drops everything to see the drawing.", answer: false },
      { text: "Ben feels a little jealous.", answer: true },
    ],
    buildSentence: [
      { target: "I feel jealous today.", jumbled: ["feel", "jealous", "I", "today."] },
      { target: "I sit by myself.", jumbled: ["sit", "by", "I", "myself."] },
      { target: "I feel a little sad.", jumbled: ["feel", "a", "I", "little", "sad."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling jealous or left out.",
    mySentenceExample: "I feel jealous sometimes, and that is okay.",
  },
  {
    number: 7,
    title: "Talking to Dad About My Feelings",
    image: null,
    imageNote: "Dad sitting beside Ben on the bed with an arm around him, both looking at Ben's drawing together, warm evening light in the room.",
    story:
      "That evening, Dad notices I am quiet and sits beside me. “What's wrong, Ben? You seem a little sad today,” he asks gently. I take a deep breath and tell Dad how I feel. “I feel like you and Mom only care about Rosie now,” I say quietly. Dad hugs me tightly and says, “We love you just as much, Ben.” He explains that babies need extra help, but my feelings matter too. Dad looks at my new drawing and says it is wonderful. We spend the next hour together, just Dad and me. Talking about my feelings makes me feel so much better.",
    questions: [
      "What does Dad notice about Ben?",
      "What does Ben tell Dad?",
      "What does Dad say about loving Ben?",
    ],
    trueFalse: [
      { text: "Dad notices Ben is quiet.", answer: true },
      { text: "Ben hides his feelings and says nothing.", answer: false },
      { text: "Dad says he loves Ben just as much.", answer: true },
    ],
    buildSentence: [
      { target: "Dad notices I am quiet.", jumbled: ["notices", "I", "Dad", "am", "quiet."] },
      { target: "I tell Dad my feelings.", jumbled: ["tell", "Dad", "I", "my", "feelings."] },
      { target: "Dad hugs me tightly.", jumbled: ["hugs", "me", "Dad", "tightly."] },
    ],
    mySentencePrompt: "Write or say one sentence about talking about your feelings.",
    mySentenceExample: "I feel better when I talk about my feelings.",
  },
  {
    number: 8,
    title: "Reading a Book to Rosie",
    image: null,
    imageNote: "Ben sitting beside Rosie's crib reading a colorful picture book about a duck, Rosie waving her tiny arms and watching him closely, Mom smiling from the doorway.",
    story:
      "Today, Mom asks if I want to read a book to Rosie. “She loves the sound of your voice, Ben,” Mom says kindly. I pick my favorite book about a little duck. I sit next to Rosie's crib and open the colorful book. I read slowly and use funny voices for each animal. Rosie looks at me with wide, curious eyes the whole time. She waves her little arms like she is enjoying the story. “You are a wonderful big brother, Ben,” Mom says proudly. Reading to Rosie makes me feel important and loved.",
    questions: [
      "What does Ben read to Rosie?",
      "How does Ben read the story?",
      "What does Rosie do while listening?",
    ],
    trueFalse: [
      { text: "Ben reads a book about a duck.", answer: true },
      { text: "Ben reads in a boring, flat voice.", answer: false },
      { text: "Rosie waves her little arms.", answer: true },
    ],
    buildSentence: [
      { target: "I read to Rosie.", jumbled: ["read", "to", "I", "Rosie."] },
      { target: "Rosie looks at me.", jumbled: ["looks", "at", "Rosie", "me."] },
      { target: "I feel important and loved.", jumbled: ["feel", "important", "I", "and", "loved."] },
    ],
    mySentencePrompt: "Write or say one sentence about reading a book.",
    mySentenceExample: "I like to read books out loud.",
  },
  {
    number: 9,
    title: "Rosie Grabs My Finger",
    image: null,
    imageNote: "Ben holding very still as tiny Rosie's hand wraps tightly around his finger, both looking at each other, Mom watching with a warm smile nearby.",
    story:
      "This afternoon, I hold my finger near Rosie's tiny hand. Her small fingers wrap around mine and hold on tightly. “Look, she's holding my finger!” I say with a big, happy smile. Rosie's grip is surprisingly strong for such a tiny baby. I stay very still so she does not let go. Mom watches us and says, “She really loves her big brother.” I feel a warm, happy feeling inside my chest. Rosie looks up at me and makes a small, happy sound. This little moment makes me love being her big brother even more.",
    questions: [
      "What does Rosie do to Ben's finger?",
      "How does Ben describe her grip?",
      "What does Mom say?",
    ],
    trueFalse: [
      { text: "Rosie grabs Ben's finger.", answer: true },
      { text: "Rosie's grip is very weak.", answer: false },
      { text: "Mom says Rosie loves her big brother.", answer: true },
    ],
    buildSentence: [
      { target: "Rosie holds my finger.", jumbled: ["holds", "my", "Rosie", "finger."] },
      { target: "Her grip feels strong.", jumbled: ["grip", "feels", "Her", "strong."] },
      { target: "I love being her brother.", jumbled: ["love", "being", "I", "her", "brother."] },
    ],
    mySentencePrompt: "Write or say one sentence about a sweet family moment.",
    mySentenceExample: "My baby sister holds my hand.",
  },
  {
    number: 10,
    title: "I Love Being a Big Brother",
    image: null,
    imageNote: "Ben smiling and playing peekaboo with Rosie, now a little older, both laughing together in the living room, Mom and Dad watching happily from the sofa.",
    story:
      "It has been one month since Rosie came home with us. I help feed her, sing to her, and make her laugh every day. I do not feel jealous anymore because I know I am loved too. Mom and Dad always make time for both Rosie and me. Rosie smiles big every time she sees my face now. “You are the best big brother, Ben,” Dad says, ruffling my hair. I used to worry that Rosie would take my parents' love away. Now I understand that love grows bigger with every new person. Being Rosie's big brother is one of my favorite things in the whole world.",
    questions: [
      "How long has Rosie been home?",
      "What does Ben do for Rosie every day?",
      "What does Ben understand now about love?",
    ],
    trueFalse: [
      { text: "Rosie has been home for one month.", answer: true },
      { text: "Ben still feels very jealous.", answer: false },
      { text: "Ben understands love grows bigger.", answer: true },
    ],
    buildSentence: [
      { target: "I help feed Rosie.", jumbled: ["help", "feed", "I", "Rosie."] },
      { target: "Rosie smiles at me.", jumbled: ["smiles", "at", "Rosie", "me."] },
      { target: "Love grows bigger and bigger.", jumbled: ["grows", "bigger", "Love", "and", "bigger."] },
    ],
    mySentencePrompt: "Write or say one sentence about a sibling or family member you love.",
    mySentenceExample: "I love my little sister very much.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A1 Teens digital storybook, Book 22: "Our School Talent Show"
// Static content -- no Supabase, mirrors the pattern in storybookData.js
// through storybookData21.js (the Teens track). Eighth and final Teens
// book in this batch. Uses the Teens-track pattern: 5 True/False and 5
// Build-a-Sentence per chapter, Build-a-Sentence items ordered
// shortest-to-longest.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead.

export const STORYBOOK_TITLE = "Our School Talent Show";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Zoe and Cody standing together on a school auditorium stage under bright lights, both holding a microphone and smiling at a cheering audience.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Zoe", role: "The narrator, a teen performing in the talent show", look: "Shoulder-length hair with a headband, casual outfit, thoughtful and a little nervous at first." },
  { name: "Cody", role: "Zoe's best friend and singing partner", look: "Short tousled hair, hoodie, easygoing and encouraging." },
  { name: "Ms. Alvarez", role: "The school music teacher", look: "Neat cardigan, glasses on a chain, warm and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Signing Up for the Talent Show",
    image: null,
    imageNote: "Zoe and Cody standing in front of a school hallway poster announcing the talent show, both smiling as they write their names on a sign-up sheet.",
    story:
      "This morning, a poster on the wall announces the school talent show. “Sign up now, all talents welcome!” the poster says in bright letters. My best friend Cody looks at me and says, “We should do this together!” I feel excited, but also a little nervous about performing. We write our names on the sign-up sheet outside the music room. Ms. Alvarez, the music teacher, smiles and says she cannot wait to see us. “What will you two perform?” she asks curiously. Cody and I look at each other, not sure yet. Signing up for the talent show feels like a big, exciting step.",
    questions: [
      "What does the poster announce?",
      "Who wants to sign up with Zoe?",
      "What does Ms. Alvarez ask them?",
    ],
    trueFalse: [
      { text: "The poster announces a talent show.", answer: true },
      { text: "Zoe signs up completely alone.", answer: false },
      { text: "Cody wants to perform with Zoe.", answer: true },
      { text: "Ms. Alvarez seems annoyed about the show.", answer: false },
      { text: "Ms. Alvarez asks what they will perform.", answer: true },
    ],
    buildSentence: [
      { target: "I feel excited.", jumbled: ["feel", "excited.", "I"] },
      { target: "We sign up together.", jumbled: ["sign", "up", "We", "together."] },
      { target: "Cody wants to perform.", jumbled: ["wants", "to", "Cody", "perform."] },
      { target: "We write our names down.", jumbled: ["write", "our", "We", "names", "down."] },
      { target: "This feels like a big, exciting step.", jumbled: ["feels", "like", "This", "a", "big,", "exciting", "step."] },
    ],
    mySentencePrompt: "Write or say one sentence about signing up for something new.",
    mySentenceExample: "I feel excited to try something new.",
  },
  {
    number: 2,
    title: "Choosing a Song",
    image: null,
    imageNote: "Zoe and Cody sitting in the music room flipping through a stack of song sheets, Ms. Alvarez listening nearby with a supportive smile.",
    story:
      "After school, Cody and I sit in the music room to choose a song. “What about a song we both know well?” Cody suggests thoughtfully. We look through many songs, trying to find the perfect one. I want something upbeat, while Cody prefers something a little slower. After a while, we agree on a fun, popular song we both love. Ms. Alvarez listens to our choice and says it sounds like a great fit. “This song shows off both your voices well,” she says with a smile. We feel relieved to finally have our song chosen. Now the real work of practicing can begin.",
    questions: [
      "Where do Zoe and Cody choose a song?",
      "What kind of song does Zoe want?",
      "What does Ms. Alvarez say about their choice?",
    ],
    trueFalse: [
      { text: "They choose a song in the music room.", answer: true },
      { text: "They agree on a song immediately without talking.", answer: false },
      { text: "Zoe wants something upbeat.", answer: true },
      { text: "Ms. Alvarez dislikes their song choice.", answer: false },
      { text: "Ms. Alvarez says the song fits well.", answer: true },
    ],
    buildSentence: [
      { target: "We choose a song.", jumbled: ["choose", "a", "We", "song."] },
      { target: "I want something upbeat.", jumbled: ["want", "something", "I", "upbeat."] },
      { target: "We feel relieved now.", jumbled: ["feel", "relieved", "We", "now."] },
      { target: "We agree on a song.", jumbled: ["agree", "on", "We", "a", "song."] },
      { target: "This song shows off both your voices.", jumbled: ["song", "shows", "This", "off", "both", "your", "voices."] },
    ],
    mySentencePrompt: "Write or say one sentence about choosing a song you like.",
    mySentenceExample: "I like songs that are upbeat and fun.",
  },
  {
    number: 3,
    title: "First Rehearsal",
    image: null,
    imageNote: "Zoe and Cody standing on the empty auditorium stage during their first rehearsal, Ms. Alvarez sitting in the front row taking notes.",
    story:
      "Our first rehearsal happens in the empty auditorium after school. My voice sounds shaky, and I forget some of the words. Cody stays patient and reminds me gently when I lose my place. “It's just the first try, we'll get better,” Cody says encouragingly. Ms. Alvarez watches from the front row and takes helpful notes. She tells us to relax our shoulders and breathe before singing. We try the song again, and it already sounds much better. By the end of rehearsal, we both feel more confident about our song. The first rehearsal is not perfect, but it is a good beginning.",
    questions: [
      "Where does the first rehearsal happen?",
      "What happens to Zoe's voice?",
      "What does Ms. Alvarez tell them to do?",
    ],
    trueFalse: [
      { text: "The rehearsal happens in the auditorium.", answer: true },
      { text: "Zoe remembers every single word perfectly.", answer: false },
      { text: "Cody stays patient with Zoe.", answer: true },
      { text: "Ms. Alvarez tells them to relax and breathe.", answer: true },
      { text: "They feel worse by the end of rehearsal.", answer: false },
    ],
    buildSentence: [
      { target: "My voice sounds shaky.", jumbled: ["voice", "sounds", "My", "shaky."] },
      { target: "We feel confident now.", jumbled: ["feel", "confident", "We", "now."] },
      { target: "Cody stays patient with me.", jumbled: ["stays", "patient", "Cody", "with", "me."] },
      { target: "We try the song again.", jumbled: ["try", "the", "We", "song", "again."] },
      { target: "This is not perfect, but it is a good beginning.", jumbled: ["is", "not", "This", "perfect,", "but", "it", "is", "a", "good", "beginning."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something.",
    mySentenceExample: "I practice a lot before a performance.",
  },
  {
    number: 4,
    title: "Stage Fright",
    image: null,
    imageNote: "Zoe sitting on her bed looking worried the night before rehearsal, then the next day talking quietly with Cody in the hallway before class.",
    story:
      "The night before our second rehearsal, I feel a wave of worry. What if I forget the words in front of the whole school? My stomach feels tight, and I cannot sleep well that night. The next day, I tell Cody about my fear before rehearsal starts. “I get scared too, but we can be scared together,” Cody says kindly. Ms. Alvarez tells us that even famous singers feel nervous sometimes. “Stage fright means you care about doing well,” she explains gently. Her words make me feel less alone with my worry. I decide to focus on having fun instead of being perfect.",
    questions: [
      "What does Zoe worry about?",
      "What does Zoe tell Cody?",
      "What does Ms. Alvarez say about stage fright?",
    ],
    trueFalse: [
      { text: "Zoe worries about forgetting the words.", answer: true },
      { text: "Zoe sleeps perfectly well that night.", answer: false },
      { text: "Cody says he also gets scared.", answer: true },
      { text: "Ms. Alvarez says famous singers never feel nervous.", answer: false },
      { text: "Zoe decides to focus on having fun.", answer: true },
    ],
    buildSentence: [
      { target: "I feel worried tonight.", jumbled: ["feel", "worried", "I", "tonight."] },
      { target: "I cannot sleep well.", jumbled: ["cannot", "sleep", "I", "well."] },
      { target: "Cody gets scared too.", jumbled: ["gets", "scared", "Cody", "too."] },
      { target: "I feel less alone now.", jumbled: ["feel", "less", "I", "alone", "now."] },
      { target: "Stage fright means you care about doing well.", jumbled: ["Stage", "fright", "means", "you", "care", "about", "doing", "well."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling nervous before something important.",
    mySentenceExample: "I feel nervous before a big performance.",
  },
  {
    number: 5,
    title: "Practicing with Cody",
    image: null,
    imageNote: "Zoe and Cody practicing their song together in a garage using an old microphone and speaker, Cody's little sister watching and clapping nearby.",
    story:
      "Every day after school, Cody and I practice our song together. We practice in Cody's garage, using an old microphone and speaker. Cody's little sister watches us and claps after every practice session. We work on hitting the high notes and staying together in rhythm. Some days, we laugh so much that we forget to practice seriously. Other days, we focus completely and get through the whole song perfectly. Cody always makes practicing feel fun instead of stressful and scary. By the end of the week, we know the song by heart. Practicing with a good friend makes everything feel easier and more fun.",
    questions: [
      "Where do Zoe and Cody practice?",
      "Who watches them practice?",
      "How does Cody make practicing feel?",
    ],
    trueFalse: [
      { text: "They practice in Cody's garage.", answer: true },
      { text: "No one ever watches them practice.", answer: false },
      { text: "Cody's little sister watches and claps.", answer: true },
      { text: "Practicing with Cody feels stressful and scary.", answer: false },
      { text: "They know the song by heart by the end of the week.", answer: true },
    ],
    buildSentence: [
      { target: "We practice every day.", jumbled: ["practice", "every", "We", "day."] },
      { target: "We laugh a lot together.", jumbled: ["laugh", "a", "We", "lot", "together."] },
      { target: "We know the song now.", jumbled: ["know", "the", "We", "song", "now."] },
      { target: "His sister claps for us.", jumbled: ["sister", "claps", "His", "for", "us."] },
      { target: "Practicing with a friend makes everything easier.", jumbled: ["Practicing", "with", "a", "friend", "makes", "everything", "easier."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing with a friend.",
    mySentenceExample: "I practice better with a good friend.",
  },
  {
    number: 6,
    title: "A Costume Problem",
    image: null,
    imageNote: "Zoe standing in front of her closet looking worried at a dress with a broken zipper, Mom helping her look through other outfits on the bed.",
    story:
      "Two days before the show, I try on my performance outfit at home. To my surprise, the zipper on my favorite dress is broken! I feel a small wave of panic thinking about the show. I call Cody, and he tells me not to worry too much. My mom offers to help me find a quick solution to the problem. We look through my closet and find another outfit that works well. Mom sews a small button on the new outfit to make it special. “Problem solved, and you look great too,” Mom says with a proud smile. A small costume problem does not have to ruin the whole show.",
    questions: [
      "What problem does Zoe find with her dress?",
      "Who helps Zoe solve the problem?",
      "What does Mom do to the new outfit?",
    ],
    trueFalse: [
      { text: "The zipper on Zoe's dress is broken.", answer: true },
      { text: "Zoe finds the problem the morning of the show.", answer: false },
      { text: "Mom helps Zoe find a new outfit.", answer: true },
      { text: "Mom refuses to help at all.", answer: false },
      { text: "Mom sews a button on the new outfit.", answer: true },
    ],
    buildSentence: [
      { target: "The zipper is broken.", jumbled: ["zipper", "is", "The", "broken."] },
      { target: "Mom helps me today.", jumbled: ["helps", "me", "Mom", "today."] },
      { target: "I feel a little panic.", jumbled: ["feel", "a", "I", "little", "panic."] },
      { target: "We find another outfit.", jumbled: ["find", "another", "We", "outfit."] },
      { target: "A small problem does not ruin the show.", jumbled: ["small", "problem", "A", "does", "not", "ruin", "the", "show."] },
    ],
    mySentencePrompt: "Write or say one sentence about solving a small problem.",
    mySentenceExample: "I solve small problems with help from my family.",
  },
  {
    number: 7,
    title: "Dress Rehearsal",
    image: null,
    imageNote: "Zoe and Cody performing in their costumes on the fully lit auditorium stage, Ms. Alvarez watching proudly from the audience seats.",
    story:
      "The day before the show, we have our full dress rehearsal on stage. We wear our costumes and perform under the bright stage lights. My hands shake a little as the microphone turns on for us. Cody gives me an encouraging nod, and we begin singing together. Our voices blend nicely, and the rhythm feels smooth and confident. Ms. Alvarez watches from the audience seats with a proud, warm smile. “That was wonderful, you two are ready,” she says when we finish. Hearing those words makes all our practice feel worth it. We walk off stage feeling excited and ready for tomorrow's show.",
    questions: [
      "What do they wear during dress rehearsal?",
      "What does Cody give Zoe before singing?",
      "What does Ms. Alvarez say when they finish?",
    ],
    trueFalse: [
      { text: "They wear their costumes during rehearsal.", answer: true },
      { text: "Zoe's hands feel completely still.", answer: false },
      { text: "Cody gives Zoe an encouraging nod.", answer: true },
      { text: "Ms. Alvarez says they are not ready.", answer: false },
      { text: "They feel excited for tomorrow.", answer: true },
    ],
    buildSentence: [
      { target: "My hands shake slightly.", jumbled: ["hands", "shake", "My", "slightly."] },
      { target: "We feel ready now.", jumbled: ["feel", "ready", "We", "now."] },
      { target: "We sing together well.", jumbled: ["sing", "together", "We", "well."] },
      { target: "Cody gives me a nod.", jumbled: ["gives", "me", "Cody", "a", "nod."] },
      { target: "That was wonderful, you two are ready.", jumbled: ["was", "wonderful,", "That", "you", "two", "are", "ready."] },
    ],
    mySentencePrompt: "Write or say one sentence about a rehearsal or practice run.",
    mySentenceExample: "I feel more confident after a rehearsal.",
  },
  {
    number: 8,
    title: "The Night Before",
    image: null,
    imageNote: "Zoe lying in bed at night looking at her phone with a small smile, a text message from Cody visible on the screen, Mom standing in the doorway saying goodnight.",
    story:
      "The night before the show, I lie in bed feeling a mix of emotions. I feel excited, nervous, and proud all at the same time. My phone buzzes with a text message from Cody. “Tomorrow is going to be amazing, Zoe,” his message says. I smile and text back, “I can't wait to sing with you.” I go over the song lyrics quietly one more time in my head. My mom comes in to say goodnight and wishes me luck. “Just have fun up there, that's all that matters,” she says softly. I finally fall asleep, feeling ready for our big day tomorrow.",
    questions: [
      "How does Zoe feel the night before?",
      "Who texts Zoe that night?",
      "What does Mom say before bed?",
    ],
    trueFalse: [
      { text: "Zoe feels excited, nervous, and proud.", answer: true },
      { text: "Zoe feels nothing at all that night.", answer: false },
      { text: "Cody texts Zoe that night.", answer: true },
      { text: "Mom says winning is all that matters.", answer: false },
      { text: "Zoe falls asleep feeling ready.", answer: true },
    ],
    buildSentence: [
      { target: "I feel many emotions.", jumbled: ["feel", "many", "I", "emotions."] },
      { target: "Cody texts me tonight.", jumbled: ["texts", "me", "Cody", "tonight."] },
      { target: "I feel ready now.", jumbled: ["feel", "ready", "I", "now."] },
      { target: "I review the lyrics quietly.", jumbled: ["review", "the", "I", "lyrics", "quietly."] },
      { target: "Mom says to just have fun.", jumbled: ["says", "to", "Mom", "just", "have", "fun."] },
    ],
    mySentencePrompt: "Write or say one sentence about the night before something important.",
    mySentenceExample: "I feel nervous the night before a big event.",
  },
  {
    number: 9,
    title: "Showtime",
    image: null,
    imageNote: "Zoe and Cody standing together on the bright stage in front of a full auditorium, singing confidently into microphones, the audience clapping.",
    story:
      "The auditorium is full of students, teachers, and excited parents tonight. Backstage, my heart pounds as we wait for our turn to perform. “We've got this,” Cody whispers, squeezing my hand for support. Our names are called, and we walk onto the bright, lit stage. The music starts, and I take a deep breath before singing. My nervousness disappears as soon as I hear Cody's voice beside mine. We sing together confidently, smiling at each other through the whole song. The audience claps loudly and cheers when our performance finally ends. Standing on that stage with Cody is a moment I will never forget.",
    questions: [
      "Who fills the auditorium tonight?",
      "What does Cody say backstage?",
      "What happens when the audience hears them finish?",
    ],
    trueFalse: [
      { text: "The auditorium is full of people.", answer: true },
      { text: "Zoe performs completely alone.", answer: false },
      { text: "Cody squeezes Zoe's hand for support.", answer: true },
      { text: "Zoe's nervousness gets worse during the song.", answer: false },
      { text: "The audience claps and cheers.", answer: true },
    ],
    buildSentence: [
      { target: "My heart pounds fast.", jumbled: ["heart", "pounds", "My", "fast."] },
      { target: "We walk onto stage.", jumbled: ["walk", "onto", "We", "stage."] },
      { target: "We sing confidently together.", jumbled: ["sing", "confidently", "We", "together."] },
      { target: "The audience claps loudly.", jumbled: ["audience", "claps", "The", "loudly."] },
      { target: "I will never forget this moment.", jumbled: ["will", "never", "I", "forget", "this", "moment."] },
    ],
    mySentencePrompt: "Write or say one sentence about performing in front of others.",
    mySentenceExample: "I feel proud after performing on stage.",
  },
  {
    number: 10,
    title: "After the Show",
    image: null,
    imageNote: "Zoe and Cody hugging with big smiles after the show, Zoe's parents nearby with proud expressions, Ms. Alvarez congratulating them in the background.",
    story:
      "After the show, Cody and I hug each other with huge smiles. “We actually did it!” I say, still feeling the excitement in my chest. Ms. Alvarez comes over and congratulates us on a wonderful performance. My parents find me in the crowd and give me a big, proud hug. “You sounded amazing up there,” my mom says with happy tears. We did not win first place, but that does not matter to me. I learned that facing my fear was the real victory tonight. Cody and I already talk about performing together again next year. Our first talent show together is a memory I will always treasure.",
    questions: [
      "What do Zoe and Cody do after the show?",
      "What does Ms. Alvarez do?",
      "What does Zoe say was the real victory?",
    ],
    trueFalse: [
      { text: "Zoe and Cody hug after the show.", answer: true },
      { text: "They win first place in the show.", answer: false },
      { text: "Ms. Alvarez congratulates them.", answer: true },
      { text: "Zoe's mom has no reaction at all.", answer: false },
      { text: "Zoe says facing her fear was the real victory.", answer: true },
    ],
    buildSentence: [
      { target: "We did it together.", jumbled: ["did", "it", "We", "together."] },
      { target: "We hug each other.", jumbled: ["hug", "each", "We", "other."] },
      { target: "Ms. Alvarez congratulates us.", jumbled: ["Alvarez", "congratulates", "Ms.", "us."] },
      { target: "My mom gives me a hug.", jumbled: ["mom", "gives", "My", "me", "a", "hug."] },
      { target: "Facing my fear was the real victory.", jumbled: ["Facing", "my", "fear", "was", "the", "real", "victory."] },
    ],
    mySentencePrompt: "Write or say one sentence about overcoming a fear.",
    mySentenceExample: "I feel proud when I face my fears.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

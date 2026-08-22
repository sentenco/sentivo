// A2 Kids digital storybook, Book 28: "Lost and Found"
// Static content -- no Supabase. Sixth book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Lost and Found";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Kai kneeling on the school playground looking worriedly at his empty wrist, the monkey bars visible behind him, a small silver watch glinting in the grass nearby.";

export const CHARACTERS = [
  { name: "Kai", role: "The narrator, a young boy", look: "Short black hair, blue jacket, careful and a little anxious when worried." },
  { name: "Ben", role: "Kai's classmate and friend", look: "Freckles, green cap, loyal and quick-thinking." },
  { name: "Mr. Diaz", role: "Kai's teacher", look: "Glasses, striped tie, calm and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Favorite Watch",
    image: null,
    imageNote: "Kai looking proudly at a small silver watch on his wrist while getting ready for school, a photo of his grandfather visible on his dresser.",
    story:
      "Before I leave for school, I carefully put on my favorite watch, the one Grandpa gave me for my birthday. “Take good care of it,” Grandpa always tells me, since it belonged to him when he was young too. The silver watch ticks quietly on my wrist, making me feel a little more grown up. I check the time proudly, even though I already know we have plenty of time before school starts. This watch means more to me than any other object I own, and I promise myself to always keep it safe and close.",
    questions: [
      "Who gave Kai the watch?",
      "How does the watch make Kai feel?",
      "What does Kai promise himself?",
    ],
    trueFalse: [
      { text: "Grandpa gave Kai the watch for his birthday.", answer: true },
      { text: "Kai does not care about the watch at all.", answer: false },
      { text: "Kai promises to keep the watch safe.", answer: true },
    ],
    buildSentence: [
      { target: "Grandpa gave me this watch.", jumbled: ["gave", "me", "Grandpa", "this", "watch."] },
      { target: "I feel a little grown up.", jumbled: ["feel", "a", "I", "little", "grown", "up."] },
      { target: "I will keep it safe.", jumbled: ["will", "keep", "I", "it", "safe."] },
    ],
    mySentencePrompt: "Write or say one sentence about an object that is very special to you.",
    mySentenceExample: "A necklace from my grandmother is very special to me.",
  },
  {
    number: 2,
    title: "Recess Fun",
    image: null,
    imageNote: "Kai hanging happily from the monkey bars at recess, his watch resting on a nearby bench where he placed it before playing.",
    story:
      "At recess, Ben and I race straight to the monkey bars, our favorite part of the playground. Before climbing, I quickly take off my watch so it won't get scratched, placing it carefully on the nearby bench. “Last one across is a rotten egg!” Ben shouts, already swinging forward. We laugh and compete for almost the entire recess, completely forgetting about everything else around us. When the bell finally rings, we run breathlessly back toward the classroom line, excited and out of breath from all the fun we just had together.",
    questions: [
      "What is Kai and Ben's favorite part of the playground?",
      "Why does Kai take off his watch?",
      "What happens when the bell rings?",
    ],
    trueFalse: [
      { text: "Kai and Ben's favorite spot is the monkey bars.", answer: true },
      { text: "Kai keeps his watch on while playing.", answer: false },
      { text: "They run back to the classroom when the bell rings.", answer: true },
    ],
    buildSentence: [
      { target: "We race to the monkey bars.", jumbled: ["race", "to", "We", "the", "monkey", "bars."] },
      { target: "I take off my watch.", jumbled: ["take", "off", "I", "my", "watch."] },
      { target: "We run back to class.", jumbled: ["run", "back", "We", "to", "class."] },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite thing to do at recess.",
    mySentenceExample: "My favorite thing to do at recess is play tag with friends.",
  },
  {
    number: 3,
    title: "Uh-oh, It's Gone",
    image: null,
    imageNote: "Kai standing in the classroom looking down at his bare wrist with a shocked, worried expression, other classmates working quietly around him.",
    story:
      "Back in the classroom, I sit down at my desk and glance at my wrist to check the time. My stomach suddenly drops. My watch is gone! I remember taking it off at recess, but I completely forgot to pick it back up afterward. Panic rushes through me as I picture Grandpa's disappointed face if I lost his special gift. “This can't be happening,” I whisper to myself, my hands feeling cold and shaky. I raise my hand immediately, hoping Mr. Diaz will let me go back outside to search before it gets too late.",
    questions: [
      "What does Kai notice is missing?",
      "What did Kai forget to do?",
      "How does Kai feel about possibly losing it?",
    ],
    trueFalse: [
      { text: "Kai notices his watch is missing.", answer: true },
      { text: "Kai remembers exactly where he left it.", answer: false },
      { text: "Kai feels panicked about losing the watch.", answer: true },
    ],
    buildSentence: [
      { target: "My watch is gone.", jumbled: ["watch", "is", "My", "gone."] },
      { target: "I forgot to pick it up.", jumbled: ["forgot", "to", "I", "pick", "it", "up."] },
      { target: "Panic rushes through me.", jumbled: ["rushes", "through", "Panic", "me."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you realized you lost something.",
    mySentenceExample: "I felt panicked when I realized I lost my house key.",
  },
  {
    number: 4,
    title: "Retracing My Steps",
    image: null,
    imageNote: "Kai standing in the middle of the classroom with his eyes closed, thinking hard, trying to remember his exact path during recess.",
    story:
      "Mr. Diaz notices my worried face and asks what's wrong. I explain everything quickly, and he tells me to think carefully before panicking further. “Where exactly were you at recess?” he asks calmly. I close my eyes and try to remember every single place I went: the monkey bars, the bench, and then the line for the water fountain. “I placed it on the bench near the monkey bars,” I say slowly, the memory becoming clearer. Retracing my steps in my mind helps me feel a little less panicked and gives me a real place to start searching.",
    questions: [
      "What does Mr. Diaz ask Kai to do?",
      "Where does Kai remember placing the watch?",
      "How does thinking carefully help Kai?",
    ],
    trueFalse: [
      { text: "Mr. Diaz tells Kai to think carefully.", answer: true },
      { text: "Kai cannot remember any places he visited.", answer: false },
      { text: "Kai remembers placing the watch on the bench.", answer: true },
    ],
    buildSentence: [
      { target: "Where were you at recess?", jumbled: ["were", "you", "Where", "at", "recess?"] },
      { target: "I placed it on the bench.", jumbled: ["placed", "it", "I", "on", "the", "bench."] },
      { target: "I feel a little less panicked.", jumbled: ["feel", "a", "I", "little", "less", "panicked."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you had to remember where you left something.",
    mySentenceExample: "I had to remember where I left my backpack after school.",
  },
  {
    number: 5,
    title: "Asking Ben for Help",
    image: null,
    imageNote: "Ben nodding determinedly beside Kai, both boys standing near the classroom door ready to search, Ben giving a reassuring thumbs up.",
    story:
      "Mr. Diaz gives me permission to search, and I quickly ask Ben to come with me. “I remember you had your watch near the bench,” Ben says thoughtfully, trying to help me remember too. “We'll find it together,” he adds confidently, giving me a reassuring pat on the shoulder. Having Ben beside me makes the situation feel less scary, even though I am still very worried inside. Two people searching feels much better than searching completely alone. We walk quickly toward the playground, both determined to find my grandfather's precious watch before it disappears forever.",
    questions: [
      "Who does Kai ask to help him search?",
      "What does Ben remember?",
      "How does having Ben help make Kai feel?",
    ],
    trueFalse: [
      { text: "Kai asks Ben to help him search.", answer: true },
      { text: "Ben refuses to help Kai at all.", answer: false },
      { text: "Having Ben helps Kai feel less scared.", answer: true },
    ],
    buildSentence: [
      { target: "We'll find it together.", jumbled: ["find", "it", "We'll", "together."] },
      { target: "Ben gives me a pat.", jumbled: ["gives", "me", "Ben", "a", "pat."] },
      { target: "We walk quickly to the playground.", jumbled: ["walk", "quickly", "We", "to", "the", "playground."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time a friend helped you look for something.",
    mySentenceExample: "My friend helped me look for my missing pencil case.",
  },
  {
    number: 6,
    title: "Checking the Classroom",
    image: null,
    imageNote: "Kai and Ben searching under desks and inside cubbies in an empty classroom, looking hopeful but not finding anything yet.",
    story:
      "Before heading outside, we decide to double-check the classroom first, just in case I dropped it somewhere inside instead. Ben and I search under every desk, inside my cubby, and even behind the bookshelf. “Maybe it fell out of your pocket during class,” Ben suggests, checking near my chair carefully. Unfortunately, after ten minutes of careful searching, we find absolutely nothing inside the classroom. My worry starts growing again, but I try to stay hopeful, reminding myself that we still have not checked the playground yet, where I actually remember leaving it.",
    questions: [
      "Where do Kai and Ben search first?",
      "What does Ben suggest?",
      "What do they find in the classroom?",
    ],
    trueFalse: [
      { text: "They search the classroom before going outside.", answer: true },
      { text: "They immediately find the watch under a desk.", answer: false },
      { text: "They find nothing inside the classroom.", answer: true },
    ],
    buildSentence: [
      { target: "We search under every desk.", jumbled: ["search", "under", "We", "every", "desk."] },
      { target: "Maybe it fell from your pocket.", jumbled: ["fell", "from", "Maybe", "it", "your", "pocket."] },
      { target: "We find absolutely nothing.", jumbled: ["find", "absolutely", "We", "nothing."] },
    ],
    mySentencePrompt: "Write or say one sentence about a place you searched carefully for something.",
    mySentenceExample: "I searched carefully under my bed for my missing shoe.",
  },
  {
    number: 7,
    title: "Mr. Diaz's Idea",
    image: null,
    imageNote: "Mr. Diaz gesturing toward a small wooden Lost and Found box near the school office, Kai and Ben looking hopeful.",
    story:
      "Feeling discouraged, we return to tell Mr. Diaz that the classroom search failed. He thinks for a moment and then snaps his fingers. “Did you check the Lost and Found box near the office?” he asks. “Sometimes another teacher finds things on the playground and brings them there.” I hadn't even thought of that possibility! Suddenly, hope rushes back into my chest. “Can we go check right now?” I ask eagerly. Mr. Diaz nods and gives us permission, and Ben and I sprint down the hallway toward the office as fast as our legs can carry us.",
    questions: [
      "What does Mr. Diaz suggest checking?",
      "Why might the watch be there?",
      "How does Kai feel about this new idea?",
    ],
    trueFalse: [
      { text: "Mr. Diaz suggests checking the Lost and Found box.", answer: true },
      { text: "Kai had already checked the Lost and Found box.", answer: false },
      { text: "Kai feels hopeful after hearing the idea.", answer: true },
    ],
    buildSentence: [
      { target: "Did you check the Lost and Found?", jumbled: ["you", "check", "Did", "the", "Lost", "and", "Found?"] },
      { target: "Hope rushes back into me.", jumbled: ["rushes", "back", "Hope", "into", "me."] },
      { target: "Can we go check now?", jumbled: ["we", "go", "Can", "check", "now?"] },
    ],
    mySentencePrompt: "Write or say one sentence about a good idea someone gave you.",
    mySentenceExample: "My teacher gave me a good idea about organizing my desk.",
  },
  {
    number: 8,
    title: "The Lost and Found Box",
    image: null,
    imageNote: "Kai and Ben crouched beside a wooden box filled with jackets, water bottles, and small items, digging through it carefully with anxious hope.",
    story:
      "We arrive at the office, slightly out of breath, and find the wooden Lost and Found box sitting quietly in the corner. It is filled with jackets, water bottles, and single mittens. My hands shake a little as I start digging through the pile, item by item. “It has to be in here,” I mutter, mostly to convince myself. Ben helps me search too, carefully moving jackets aside without making a mess. My heart pounds nervously with every item I check, hoping desperately that Grandpa's precious watch is somewhere hidden inside this messy little box.",
    questions: [
      "What items are inside the Lost and Found box?",
      "How does Kai's body react while searching?",
      "How does Ben help Kai?",
    ],
    trueFalse: [
      { text: "The box has jackets, water bottles, and mittens.", answer: true },
      { text: "Kai feels completely calm while searching the box.", answer: false },
      { text: "Ben helps search through the box too.", answer: true },
    ],
    buildSentence: [
      { target: "It has to be in here.", jumbled: ["has", "to", "It", "be", "in", "here."] },
      { target: "My hands shake a little.", jumbled: ["shake", "a", "My", "hands", "little."] },
      { target: "My heart pounds nervously.", jumbled: ["pounds", "nervously", "My", "heart."] },
    ],
    mySentencePrompt: "Write or say one sentence about how your body feels when you are nervous.",
    mySentenceExample: "My hands shake a little when I feel nervous.",
  },
  {
    number: 9,
    title: "Found It!",
    image: null,
    imageNote: "Kai holding up the small silver watch triumphantly, Ben cheering beside him, both boys grinning with relief near the Lost and Found box.",
    story:
      "Near the very bottom of the box, my fingers touch something small and cool. I pull it out carefully, and my heart leaps with joy. It's my watch! “I found it! I found it!” I shout, holding it up triumphantly for Ben to see. He cheers loudly and gives me a high-five, both of us grinning from ear to ear. I quickly fasten the watch back onto my wrist, feeling an overwhelming wave of relief wash over me. “Grandpa's watch is safe,” I whisper happily to myself, promising once again to never take it off carelessly like that again.",
    questions: [
      "What does Kai find near the bottom of the box?",
      "How does Kai react when he finds it?",
      "What does Kai promise himself?",
    ],
    trueFalse: [
      { text: "Kai finds his watch near the bottom of the box.", answer: true },
      { text: "Kai feels disappointed after finding the watch.", answer: false },
      { text: "Kai promises to never take it off carelessly again.", answer: true },
    ],
    buildSentence: [
      { target: "I found it!", jumbled: ["found", "I", "it!"] },
      { target: "My heart leaps with joy.", jumbled: ["leaps", "with", "My", "heart", "joy."] },
      { target: "Grandpa's watch is safe.", jumbled: ["watch", "is", "Grandpa's", "safe."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt relieved after finding something.",
    mySentenceExample: "I felt relieved after finding my lost homework in my bag.",
  },
  {
    number: 10,
    title: "A Safer Habit",
    image: null,
    imageNote: "Kai showing his watch to Grandpa on a video call that evening, smiling proudly while explaining what happened, a small notebook labeled 'Watch Rules' beside him.",
    story:
      "That evening, I tell Grandpa the whole story during our video call, feeling a little embarrassed about almost losing his gift. Instead of being upset, Grandpa laughs gently and says, “Everyone makes mistakes, Kai. What matters is that you learned something.” From now on, I decide to only take off my watch when absolutely necessary, and always place it somewhere I will definitely remember, like my jacket pocket instead of a random bench. This scary experience taught me an important lesson about being more careful with the things that truly matter to me.",
    questions: [
      "Who does Kai tell the whole story to?",
      "What does Grandpa say about mistakes?",
      "What new habit does Kai decide to form?",
    ],
    trueFalse: [
      { text: "Kai tells Grandpa the whole story.", answer: true },
      { text: "Grandpa gets very angry at Kai.", answer: false },
      { text: "Kai decides to be more careful with the watch.", answer: true },
    ],
    buildSentence: [
      { target: "Everyone makes mistakes sometimes.", jumbled: ["makes", "mistakes", "Everyone", "sometimes."] },
      { target: "I learned an important lesson.", jumbled: ["learned", "an", "I", "important", "lesson."] },
      { target: "I will be more careful.", jumbled: ["will", "be", "I", "more", "careful."] },
    ],
    mySentencePrompt: "Write or say one sentence about a lesson you learned from a mistake.",
    mySentenceExample: "I learned to check my bag twice after losing my keys once.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

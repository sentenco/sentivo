// A2 Adults digital storybook, Book 40: "Adopting a Rescue Dog"
// Static content -- no Supabase. Eighth and final book in the Adults
// track batch (Books 39-40), completing Adults at 8 books to match
// Kids and Teens. Same pattern as storybookData7.js through
// storybookData12.js: 3 questions, 5 True/False and 5 Build-a-Sentence
// per chapter, ordered shortest-to-longest. Built around a trust-building
// arc rather than a lost-pet plot, to stay distinct from Book 24's
// "The Class Pet" (which already uses a pet-escape/found beat).
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Adopting a Rescue Dog";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Isaac sitting on the living room floor with a once-shy rescue dog now resting its head happily on his lap, warm evening light filling the cozy apartment.";

export const CHARACTERS = [
  { name: "Isaac", role: "The narrator, an adult living alone", look: "Glasses, casual sweater, kind but initially unsure how to earn an animal's trust." },
  { name: "Ms. Alvarado", role: "A volunteer at the animal shelter", look: "Shelter vest, clipboard, warm and knowledgeable about rescue animals." },
  { name: "Ranger", role: "The rescue dog", look: "Medium-sized, brindle fur, timid posture at first that slowly relaxes over time." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Decision to Adopt",
    image: null,
    imageNote: "Isaac standing outside the entrance of a local animal shelter, reading a poster about rescue dogs, looking thoughtful before stepping inside.",
    story:
      "After living alone in my apartment for nearly two years, the quiet evenings gradually start feeling less peaceful and more genuinely lonely than I expected. A coworker mentions volunteering at the local animal shelter, and something about the idea of adopting a rescue dog stays with me for weeks afterward. I research the responsibilities carefully, considering the time, cost, and commitment involved before making any final decision. Finally, one Saturday morning, I decide to simply visit the shelter, without promising myself anything beyond just looking. Standing outside the entrance, I take a deep breath before stepping through the door.",
    questions: [
      "How long has Isaac been living alone?",
      "What does a coworker mention to Isaac?",
      "What does Isaac decide to do one Saturday morning?",
    ],
    trueFalse: [
      { text: "Isaac has been living alone for nearly two years.", answer: true },
      { text: "Isaac's evenings feel more lonely than expected.", answer: true },
      { text: "A coworker mentions volunteering at an animal shelter.", answer: true },
      { text: "Isaac decides immediately to adopt without any research.", answer: false },
      { text: "Isaac decides to simply visit the shelter first.", answer: true },
    ],
    buildSentence: [
      { target: "This stays with me.", jumbled: ["stays", "with", "This", "me."] },
      { target: "I take a deep breath.", jumbled: ["take", "a", "I", "deep", "breath."] },
      { target: "I research the responsibilities carefully.", jumbled: ["research", "the", "I", "responsibilities", "carefully."] },
      { target: "My evenings feel genuinely lonely now.", jumbled: ["My", "evenings", "feel", "genuinely", "lonely", "now."] },
      { target: "I decide to simply visit the shelter without promising anything.", jumbled: ["I", "decide", "to", "simply", "visit", "the", "shelter", "without", "promising", "anything."] },
    ],
    mySentencePrompt: "Write or say one sentence about a decision you thought about carefully before making.",
    mySentenceExample: "I thought carefully before deciding to change my career.",
  },
  {
    number: 2,
    title: "Meeting Ranger",
    image: null,
    imageNote: "Isaac crouching outside a kennel, looking gently at a brindle dog hiding in the back corner, Ms. Alvarado standing nearby with a clipboard.",
    story:
      "Ms. Alvarado, a shelter volunteer, walks me past rows of eager, tail-wagging dogs, each one jumping excitedly against their kennel doors. One dog, however, sits quietly in the back corner of his kennel, barely lifting his head as I approach curiously. “That's Ranger. He's been here longer than most, honestly, because his shyness makes him harder to place,” she explains softly. Something about his cautious, watchful eyes stops me completely, unlike the more obviously excitable dogs surrounding him. “He needs someone genuinely patient,” Ms. Alvarado adds, watching my reaction carefully. Despite every practical instinct suggesting an easier dog, I feel strangely drawn toward him.",
    questions: [
      "What are most of the dogs doing as Isaac walks past?",
      "What is different about Ranger's behavior?",
      "What does Ms. Alvarado say Ranger needs?",
    ],
    trueFalse: [
      { text: "Most dogs jump excitedly against their kennel doors.", answer: true },
      { text: "Ranger sits quietly in the back corner.", answer: true },
      { text: "Ranger has been at the shelter for a very short time.", answer: false },
      { text: "Ms. Alvarado says Ranger needs someone patient.", answer: true },
      { text: "Isaac feels no interest in Ranger at all.", answer: false },
    ],
    buildSentence: [
      { target: "That's Ranger, honestly.", jumbled: ["is", "Ranger,", "That's", "honestly."] },
      { target: "He needs someone genuinely patient.", jumbled: ["He", "needs", "someone", "genuinely", "patient."] },
      { target: "I feel strangely drawn toward him.", jumbled: ["feel", "strangely", "I", "drawn", "toward", "him."] },
      { target: "He sits quietly in the back corner.", jumbled: ["He", "sits", "quietly", "in", "the", "back", "corner."] },
      { target: "His shyness makes him harder to place here.", jumbled: ["His", "shyness", "makes", "him", "harder", "to", "place", "here."] },
    ],
    mySentencePrompt: "Write or say one sentence about being drawn to something or someone unexpected.",
    mySentenceExample: "I felt drawn to a quiet student who needed extra encouragement.",
  },
  {
    number: 3,
    title: "Bringing Him Home",
    image: null,
    imageNote: "Isaac carrying a nervous Ranger's leash through his apartment doorway, the dog hesitating and pressing close against the wall, tail tucked low.",
    story:
      "After completing the adoption paperwork, I carefully lead Ranger through my apartment door, unsure exactly what to expect from this next chapter. He hesitates immediately at the threshold, pressing his body against the wall, tail tucked low between his legs nervously. I sit down quietly on the floor nearby, giving him space rather than forcing any immediate interaction he clearly isn't ready for yet. Ranger explores cautiously, sniffing corners and furniture, occasionally glancing back toward me with uncertain, watchful eyes. By evening, he retreats completely under my bed, refusing both food and water despite my gentle, repeated attempts.",
    questions: [
      "What does Ranger do immediately at the doorway?",
      "What does Isaac do instead of forcing interaction?",
      "Where does Ranger retreat to by evening?",
    ],
    trueFalse: [
      { text: "Ranger hesitates immediately at the doorway.", answer: true },
      { text: "Isaac forces immediate interaction with Ranger.", answer: false },
      { text: "Isaac sits down quietly, giving Ranger space.", answer: true },
      { text: "Ranger retreats completely under the bed by evening.", answer: true },
      { text: "Ranger eats and drinks normally on the first evening.", answer: false },
    ],
    buildSentence: [
      { target: "He hesitates immediately today.", jumbled: ["hesitates", "immediately", "He", "today."] },
      { target: "I sit down quietly nearby.", jumbled: ["sit", "down", "I", "quietly", "nearby."] },
      { target: "Ranger explores cautiously around him.", jumbled: ["Ranger", "explores", "cautiously", "around", "him."] },
      { target: "He retreats completely under my bed.", jumbled: ["He", "retreats", "completely", "under", "my", "bed."] },
      { target: "I give him space rather than forcing interaction.", jumbled: ["I", "give", "him", "space", "rather", "than", "forcing", "interaction."] },
    ],
    mySentencePrompt: "Write or say one sentence about giving someone or something space and time to adjust.",
    mySentenceExample: "I gave my new coworker space and time to adjust to the office.",
  },
  {
    number: 4,
    title: "Small Signs of Trust",
    image: null,
    imageNote: "Isaac sitting on the kitchen floor at a distance, watching Ranger cautiously approach an empty food bowl and finally eat, tail relaxing slightly.",
    story:
      "For several days, Ranger only eats when he believes I'm not watching, sneaking cautiously toward his bowl whenever I step into another room. Rather than feeling discouraged, I read that this behavior is common among rescue dogs adjusting slowly to unfamiliar surroundings and people. I begin leaving small treats scattered gently near wherever he chooses to rest, never forcing direct contact or demanding immediate affection from him. Gradually, he starts eating while I sit quietly nearby, no longer requiring complete privacy for something as simple as a meal. These tiny, incremental changes feel disproportionately significant, each one representing genuine, hard-won progress.",
    questions: [
      "When does Ranger only eat during the first few days?",
      "What does Isaac begin leaving near Ranger?",
      "What gradual change happens with Ranger's eating?",
    ],
    trueFalse: [
      { text: "Ranger only eats when he thinks Isaac isn't watching.", answer: true },
      { text: "Isaac feels discouraged and gives up quickly.", answer: false },
      { text: "Isaac begins leaving small treats near Ranger.", answer: true },
      { text: "Ranger eventually eats while Isaac sits nearby.", answer: true },
      { text: "Isaac forces direct contact to speed things up.", answer: false },
    ],
    buildSentence: [
      { target: "This is common, honestly.", jumbled: ["is", "common,", "This", "honestly."] },
      { target: "These changes feel disproportionately significant.", jumbled: ["These", "changes", "feel", "disproportionately", "significant."] },
      { target: "I never force direct contact.", jumbled: ["never", "force", "I", "direct", "contact."] },
      { target: "Ranger only eats when unwatched.", jumbled: ["Ranger", "only", "eats", "when", "unwatched."] },
      { target: "Each one represents genuine, hard-won progress.", jumbled: ["Each", "one", "represents", "genuine,", "hard-won", "progress."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small sign of progress that meant a lot to you.",
    mySentenceExample: "A small sign of progress meant a lot when I finally understood a hard lesson.",
  },
  {
    number: 5,
    title: "A Setback",
    image: null,
    imageNote: "Ranger cowering under the bed during a thunderstorm, visible only by his eyes glowing in the dim light, Isaac kneeling nearby looking worried.",
    story:
      "Three weeks into our slow progress, a sudden, violent thunderstorm rolls through the city late one night, and Ranger completely panics at the noise. He bolts immediately under my bed, shaking uncontrollably, refusing to come out despite my gentle, worried coaxing for nearly an hour. Watching him regress so completely after weeks of careful progress leaves me questioning whether I'm actually equipped to help an animal with this much fear. I wonder briefly if adopting him was genuinely selfish, prioritizing my own loneliness over what might actually be best for him. Exhausted and discouraged, I finally sit on the floor beside the bed, simply waiting quietly.",
    questions: [
      "What happens late one night three weeks in?",
      "How does Ranger react to the thunderstorm?",
      "What does Isaac question during this setback?",
    ],
    trueFalse: [
      { text: "A violent thunderstorm rolls through late one night.", answer: true },
      { text: "Ranger stays completely calm during the storm.", answer: false },
      { text: "Ranger bolts under the bed shaking.", answer: true },
      { text: "Isaac questions whether he's equipped to help Ranger.", answer: true },
      { text: "Isaac feels no doubt about the adoption at all.", answer: false },
    ],
    buildSentence: [
      { target: "Ranger completely panics tonight.", jumbled: ["completely", "panics", "Ranger", "tonight."] },
      { target: "I sit on the floor.", jumbled: ["sit", "on", "I", "the", "floor."] },
      { target: "He bolts immediately under the bed.", jumbled: ["He", "bolts", "immediately", "under", "the", "bed."] },
      { target: "I feel exhausted and discouraged now.", jumbled: ["I", "feel", "exhausted", "and", "discouraged", "now."] },
      { target: "I wonder if adopting him was genuinely selfish.", jumbled: ["I", "wonder", "if", "adopting", "him", "was", "genuinely", "selfish."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment of doubt during a difficult process.",
    mySentenceExample: "I felt doubt during a difficult process of learning a new skill.",
  },
  {
    number: 6,
    title: "Patience Pays Off",
    image: null,
    imageNote: "Isaac sitting cross-legged on his living room floor reading a book about rescue-dog trauma, Ranger lying a short distance away, watching curiously.",
    story:
      "The next morning, I call Ms. Alvarado, explaining my discouragement and genuine uncertainty about handling setbacks like the previous night's storm. She reassures me calmly that regression after progress is completely normal for traumatized rescue animals, not a sign of my failure whatsoever. She recommends simply existing calmly near Ranger daily, without demanding anything, letting him choose when and how to approach me instead. Following her advice, I spend evenings quietly reading nearby, deliberately ignoring him rather than seeking constant interaction or reassurance from his direction. Slowly, over several days, I notice him resting slightly closer to me each evening.",
    questions: [
      "Who does Isaac call the next morning?",
      "What does Ms. Alvarado say about regression?",
      "What new approach does Isaac try?",
    ],
    trueFalse: [
      { text: "Isaac calls Ms. Alvarado the next morning.", answer: true },
      { text: "Ms. Alvarado says regression means Isaac has failed.", answer: false },
      { text: "Ms. Alvarado recommends existing calmly near Ranger daily.", answer: true },
      { text: "Isaac tries reading nearby instead of forcing interaction.", answer: true },
      { text: "Ranger stays exactly the same distance away every evening.", answer: false },
    ],
    buildSentence: [
      { target: "I call Ms. Alvarado today.", jumbled: ["call", "Ms.", "I", "Alvarado", "today."] },
      { target: "This is completely normal, honestly.", jumbled: ["is", "completely", "This", "normal,", "honestly."] },
      { target: "I spend evenings quietly reading.", jumbled: ["spend", "evenings", "I", "quietly", "reading."] },
      { target: "He rests slightly closer each evening.", jumbled: ["He", "rests", "slightly", "closer", "each", "evening."] },
      { target: "She reassures me this isn't a sign of failure.", jumbled: ["She", "reassures", "me", "this", "isn't", "a", "sign", "of", "failure."] },
    ],
    mySentencePrompt: "Write or say one sentence about advice that helped you handle a setback.",
    mySentenceExample: "My friend's advice helped me handle a setback at my new job.",
  },
  {
    number: 7,
    title: "The First Approach",
    image: null,
    imageNote: "Ranger walking slowly across the living room toward Isaac, who sits still and calm, one paw lifted mid-step, Isaac's eyes soft and hopeful.",
    story:
      "One quiet evening, while reading on the living room floor exactly as Ms. Alvarado suggested, I notice Ranger stand and stretch from his usual resting spot. Instead of retreating toward the bedroom as expected, he walks slowly and deliberately across the living room, directly toward me. My heart races with cautious hope, and I remain perfectly still, resisting every urge to reach toward him immediately. Ranger stops just inches away, sniffing my outstretched hand carefully before finally resting his head gently against my knee. Tears unexpectedly well up in my eyes; this small, quiet moment feels genuinely monumental after weeks of patient waiting.",
    questions: [
      "What does Ranger do instead of retreating this time?",
      "What does Isaac resist doing?",
      "What does Ranger finally do with his head?",
    ],
    trueFalse: [
      { text: "Ranger walks slowly toward Isaac instead of retreating.", answer: true },
      { text: "Isaac immediately reaches out to grab Ranger.", answer: false },
      { text: "Ranger sniffs Isaac's outstretched hand.", answer: true },
      { text: "Ranger rests his head against Isaac's knee.", answer: true },
      { text: "Isaac feels nothing significant about this moment.", answer: false },
    ],
    buildSentence: [
      { target: "My heart races with hope.", jumbled: ["races", "with", "My", "heart", "hope."] },
      { target: "He walks slowly toward me.", jumbled: ["He", "walks", "slowly", "toward", "me."] },
      { target: "Tears unexpectedly well up.", jumbled: ["unexpectedly", "well", "Tears", "up."] },
      { target: "I remain perfectly still, resisting every urge.", jumbled: ["I", "remain", "perfectly", "still,", "resisting", "every", "urge."] },
      { target: "This small, quiet moment feels genuinely monumental after weeks of waiting.", jumbled: ["This", "small,", "quiet", "moment", "feels", "genuinely", "monumental", "after", "weeks", "of", "waiting."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small moment that felt surprisingly meaningful to you.",
    mySentenceExample: "A small moment felt surprisingly meaningful when my cat finally sat on my lap.",
  },
  {
    number: 8,
    title: "Walks in the Park",
    image: null,
    imageNote: "Isaac and Ranger walking together along a sunny park path, Ranger's tail relaxed and slightly wagging, both moving at an easy, comfortable pace.",
    story:
      "Building on our newfound connection, I decide it's finally time to attempt our first proper walk together at the small park nearby. Ranger hesitates at the front door initially, but with gentle encouragement and a favorite treat, he steps outside cautiously beside me. The unfamiliar sounds and smells clearly overwhelm him at first, his body tense and alert to every passing car or stranger nearby. Gradually, though, his posture relaxes noticeably, his tail beginning a slow, uncertain wag as we walk along a quiet path. By the walk's end, something in him seems lighter, genuinely curious rather than purely fearful of his surroundings.",
    questions: [
      "What do Isaac and Ranger attempt for the first time?",
      "How does Ranger react to the unfamiliar sounds at first?",
      "What happens to Ranger's tail as they walk?",
    ],
    trueFalse: [
      { text: "Isaac and Ranger attempt their first proper walk.", answer: true },
      { text: "Ranger feels completely relaxed from the very first step.", answer: false },
      { text: "Ranger's posture relaxes noticeably as they walk.", answer: true },
      { text: "Ranger's tail begins a slow, uncertain wag.", answer: true },
      { text: "Ranger seems purely fearful the entire walk.", answer: false },
    ],
    buildSentence: [
      { target: "This is our first walk.", jumbled: ["is", "our", "This", "first", "walk."] },
      { target: "His posture relaxes noticeably now.", jumbled: ["His", "posture", "relaxes", "noticeably", "now."] },
      { target: "His tail begins a slow wag.", jumbled: ["His", "tail", "begins", "a", "slow", "wag."] },
      { target: "The unfamiliar sounds overwhelm him at first.", jumbled: ["The", "unfamiliar", "sounds", "overwhelm", "him", "at", "first."] },
      { target: "Something in him seems lighter by the walk's end.", jumbled: ["Something", "in", "him", "seems", "lighter", "by", "the", "walk's", "end."] },
    ],
    mySentencePrompt: "Write or say one sentence about trying something new together with someone or something you care about.",
    mySentenceExample: "I tried hiking for the first time together with my new puppy.",
  },
  {
    number: 9,
    title: "A Full Transformation",
    image: null,
    imageNote: "Ranger bounding playfully across the living room with a chew toy, tail wagging energetically, Isaac laughing and clapping from the couch.",
    story:
      "Three months after that first hesitant step through my apartment door, Ranger has transformed into an entirely different dog than the timid creature I originally brought home. He greets me enthusiastically now whenever I return, tail wagging vigorously, sometimes even bringing a favorite toy directly to my feet. Watching him play freely, bounding playfully across the living room floor, feels almost unrecognizable compared to those first anxious days hiding beneath my bed. Ms. Alvarado, visiting recently for a follow-up check, seems genuinely amazed by his remarkable transformation over such a relatively short period. “This is exactly why patience matters so much,” she says, smiling warmly at us both.",
    questions: [
      "How much time has passed since Ranger came home?",
      "How does Ranger greet Isaac now?",
      "What does Ms. Alvarado say about the transformation?",
    ],
    trueFalse: [
      { text: "Three months have passed since Ranger arrived.", answer: true },
      { text: "Ranger greets Isaac enthusiastically now.", answer: true },
      { text: "Ranger still hides under the bed most days.", answer: false },
      { text: "Ms. Alvarado visits for a follow-up check.", answer: true },
      { text: "Ms. Alvarado says this proves patience doesn't matter much.", answer: false },
    ],
    buildSentence: [
      { target: "He greets me enthusiastically now.", jumbled: ["He", "greets", "me", "enthusiastically", "now."] },
      { target: "This feels almost unrecognizable now.", jumbled: ["This", "feels", "almost", "unrecognizable", "now."] },
      { target: "Ranger has transformed into a different dog.", jumbled: ["Ranger", "has", "transformed", "into", "a", "different", "dog."] },
      { target: "She seems genuinely amazed by this transformation.", jumbled: ["She", "seems", "genuinely", "amazed", "by", "this", "transformation."] },
      { target: "This is exactly why patience matters so much.", jumbled: ["This", "is", "exactly", "why", "patience", "matters", "so", "much."] },
    ],
    mySentencePrompt: "Write or say one sentence about a transformation you witnessed over time.",
    mySentenceExample: "I witnessed a transformation in my little brother's confidence over the school year.",
  },
  {
    number: 10,
    title: "Companions for Life",
    image: null,
    imageNote: "Isaac sitting on his couch in the evening, Ranger curled up peacefully beside him, both relaxed and content, warm lamp light filling the cozy room.",
    story:
      "Sitting on my couch this evening, Ranger curled comfortably beside me, I reflect on everything these past few months have genuinely taught me about patience and trust. Adopting him wasn't simply about curing my own loneliness, as I once worried during that difficult, doubtful night of the thunderstorm. Instead, we healed something in each other gradually, learning together how consistent patience eventually builds something lasting and real. My apartment no longer feels quiet in that lonely way it once did, filled instead with the comfortable presence of genuine companionship. Ranger shifts closer, resting his head against my leg, and I smile contentedly.",
    questions: [
      "Where does Isaac sit this evening?",
      "What does Isaac realize adopting Ranger wasn't simply about?",
      "How does Isaac's apartment feel now compared to before?",
    ],
    trueFalse: [
      { text: "Isaac sits on his couch with Ranger beside him.", answer: true },
      { text: "Isaac realizes adopting Ranger wasn't simply about curing his loneliness.", answer: true },
      { text: "Isaac's apartment still feels lonely in the same way.", answer: false },
      { text: "They healed something in each other gradually.", answer: true },
      { text: "Isaac feels nothing meaningful looking back on this journey.", answer: false },
    ],
    buildSentence: [
      { target: "I smile contentedly now.", jumbled: ["smile", "contentedly", "I", "now."] },
      { target: "Ranger shifts closer to me.", jumbled: ["Ranger", "shifts", "closer", "to", "me."] },
      { target: "We healed something in each other.", jumbled: ["We", "healed", "something", "in", "each", "other."] },
      { target: "My apartment no longer feels lonely.", jumbled: ["My", "apartment", "no", "longer", "feels", "lonely."] },
      { target: "Consistent patience eventually builds something lasting and real.", jumbled: ["Consistent", "patience", "eventually", "builds", "something", "lasting", "and", "real."] },
    ],
    mySentencePrompt: "Write or say one sentence about a relationship or bond that grew stronger through patience.",
    mySentenceExample: "My friendship grew stronger through patience during a difficult year.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

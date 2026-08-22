// A2 Kids digital storybook, Book 30: "A Camping Trip"
// Static content -- no Supabase. Eighth and final book in the A2 Kids
// batch (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Camping Trip";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Owen, Dad, and Lily sitting around a glowing campfire at night in the forest, roasting marshmallows, a green tent visible behind them under a starry sky.";

export const CHARACTERS = [
  { name: "Owen", role: "The narrator, a young boy", look: "Short brown hair, flannel jacket, adventurous but sometimes a bit nervous at night." },
  { name: "Dad", role: "Owen's father", look: "Beard, hiking boots, calm and reassuring." },
  { name: "Lily", role: "Owen's older sister", look: "Ponytail, green backpack, confident and encouraging." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Packing the Car",
    image: null,
    imageNote: "Owen and Lily loading a tent, sleeping bags, and a cooler into the trunk of the car, Dad checking a packing list on a clipboard.",
    story:
      "Saturday morning finally arrives, and our whole family is packing the car for our very first camping trip. I carry the rolled-up tent while Lily loads sleeping bags into the trunk carefully. “Don't forget the marshmallows,” Lily reminds Dad, who checks everything off his packing list twice. I feel a bubbling excitement in my chest, since I have never slept outside in nature before. “Are we bringing the fishing rods too?” I ask eagerly. “Of course,” Dad says, smiling. Once everything fits perfectly into the car, we finally climb in, ready for our big adventure to begin.",
    questions: [
      "What does Owen carry to the car?",
      "What does Lily remind Dad not to forget?",
      "How does Owen feel about the trip?",
    ],
    trueFalse: [
      { text: "Owen carries the rolled-up tent.", answer: true },
      { text: "Lily reminds Dad about the marshmallows.", answer: true },
      { text: "Owen has camped outside many times before.", answer: false },
    ],
    buildSentence: [
      { target: "We pack the car together.", jumbled: ["pack", "the", "We", "car", "together."] },
      { target: "Don't forget the marshmallows.", jumbled: ["forget", "the", "Don't", "marshmallows."] },
      { target: "I feel bubbling excitement.", jumbled: ["feel", "bubbling", "I", "excitement."] },
    ],
    mySentencePrompt: "Write or say one sentence about packing for a trip.",
    mySentenceExample: "I packed my swimsuit and towel for our beach trip.",
  },
  {
    number: 2,
    title: "The Long Drive",
    image: null,
    imageNote: "Owen and Lily playing a car game in the back seat, pointing excitedly out the window at passing trees and mountains as the car drives along a forest road.",
    story:
      "The drive to the campsite takes almost three hours, so Lily and I play games to pass the time. We spot yellow cars and count animals along the road, laughing whenever we both shout the same answer. As we get closer, the scenery changes from busy streets to tall green trees and winding mountain roads. “We're almost there,” Dad announces, and I press my face against the window, watching the beautiful forest pass by. When we finally turn onto a bumpy dirt road, my excitement grows even stronger, knowing our campsite is just minutes away now.",
    questions: [
      "How long does the drive take?",
      "What game do Owen and Lily play?",
      "What does the scenery look like as they get closer?",
    ],
    trueFalse: [
      { text: "The drive takes almost three hours.", answer: true },
      { text: "Owen and Lily sleep the whole drive.", answer: false },
      { text: "The scenery becomes tall green trees and mountains.", answer: true },
    ],
    buildSentence: [
      { target: "We play games together.", jumbled: ["play", "games", "We", "together."] },
      { target: "We're almost there now.", jumbled: ["almost", "there", "We're", "now."] },
      { target: "My excitement grows stronger.", jumbled: ["grows", "stronger", "My", "excitement."] },
    ],
    mySentencePrompt: "Write or say one sentence about a game you play during a long car ride.",
    mySentenceExample: "I play a counting game during long car rides.",
  },
  {
    number: 3,
    title: "Setting Up the Tent",
    image: null,
    imageNote: "Owen and Lily struggling to connect tent poles while Dad watches patiently nearby, the half-built tent leaning slightly to one side.",
    story:
      "At the campsite, Dad announces that Lily and I get to set up the tent ourselves this time, with him only helping if needed. We spread out the tent poles, but connecting them correctly proves much harder than it looks. Our first attempt leans sideways dramatically, and we both burst out laughing at our wobbly creation. “Try connecting the poles in a criss-cross pattern,” Dad suggests helpfully, without actually touching anything himself. After several more tries, our tent finally stands up straight and sturdy. “We did it ourselves!” Lily cheers, and I feel a proud sense of accomplishment.",
    questions: [
      "Who gets to set up the tent?",
      "What happens on their first attempt?",
      "What does Dad suggest?",
    ],
    trueFalse: [
      { text: "Owen and Lily set up the tent themselves.", answer: true },
      { text: "The tent stands perfectly straight on the first try.", answer: false },
      { text: "Dad suggests a criss-cross pattern for the poles.", answer: true },
    ],
    buildSentence: [
      { target: "We set up the tent.", jumbled: ["set", "up", "We", "the", "tent."] },
      { target: "We burst out laughing.", jumbled: ["burst", "out", "We", "laughing."] },
      { target: "We did it ourselves!", jumbled: ["did", "it", "We", "ourselves!"] },
    ],
    mySentencePrompt: "Write or say one sentence about something you built or set up yourself.",
    mySentenceExample: "I set up my own bookshelf without any help.",
  },
  {
    number: 4,
    title: "Exploring the Woods",
    image: null,
    imageNote: "Owen, Dad, and Lily walking along a forest trail, pointing at a woodpecker on a tree trunk and colorful mushrooms along the path.",
    story:
      "After finishing the tent, we decide to explore the forest trail near our campsite before lunch. Dad leads the way, pointing out interesting things along the path, like a woodpecker tapping loudly on a tree trunk. “Look at these mushrooms,” Lily says, crouching down to examine some bright orange ones growing near the trail. We discover animal tracks pressed into soft mud and even spot a small chipmunk darting between rocks. Walking through the quiet, peaceful woods feels completely different from our noisy neighborhood back home, and I love every single new discovery we make together.",
    questions: [
      "What does Dad point out on the trail?",
      "What does Lily examine?",
      "What animal tracks do they discover?",
    ],
    trueFalse: [
      { text: "Dad points out a woodpecker.", answer: true },
      { text: "Lily refuses to look at anything on the trail.", answer: false },
      { text: "They discover animal tracks in the mud.", answer: true },
    ],
    buildSentence: [
      { target: "We explore the forest trail.", jumbled: ["explore", "the", "We", "forest", "trail."] },
      { target: "Look at these mushrooms.", jumbled: ["at", "these", "Look", "mushrooms."] },
      { target: "I love every discovery.", jumbled: ["love", "every", "I", "discovery."] },
    ],
    mySentencePrompt: "Write or say one sentence about something interesting you discovered outside.",
    mySentenceExample: "I discovered a colorful butterfly in our garden.",
  },
  {
    number: 5,
    title: "Building a Campfire",
    image: null,
    imageNote: "Dad showing Owen and Lily how to carefully stack small sticks in a teaspoon-shaped pile, matches nearby, both children watching closely.",
    story:
      "As evening approaches, Dad teaches us how to build a safe campfire before dinner. “Always stack the smallest sticks first, like a little teepee,” he explains, demonstrating carefully. He reminds us that fire safety matters more than anything else, and we must never touch matches without an adult present. Once the fire crackles happily, we roast hot dogs on long metal sticks for dinner. Later, we carefully roast marshmallows too, watching them turn golden brown and gooey. Sitting around the warm, glowing fire feels magical, completely different from anything I have experienced before at home.",
    questions: [
      "How does Dad say to stack the sticks?",
      "What does Dad say matters most?",
      "What do they roast for dinner?",
    ],
    trueFalse: [
      { text: "Dad says to stack sticks like a teepee.", answer: true },
      { text: "Dad says fire safety does not matter much.", answer: false },
      { text: "They roast hot dogs for dinner.", answer: true },
    ],
    buildSentence: [
      { target: "Dad teaches us fire safety.", jumbled: ["teaches", "us", "Dad", "fire", "safety."] },
      { target: "The fire crackles happily.", jumbled: ["crackles", "happily", "The", "fire."] },
      { target: "This feels completely magical.", jumbled: ["feels", "completely", "This", "magical."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you learned how to do safely.",
    mySentenceExample: "I learned how to safely cross the street with an adult.",
  },
  {
    number: 6,
    title: "Campfire Stories",
    image: null,
    imageNote: "Dad gesturing dramatically while telling a story around the campfire, Owen and Lily leaning in with wide, captivated eyes, the fire glowing warmly.",
    story:
      "After dinner, Dad suggests we tell stories around the crackling campfire, just like he did when he was young. He begins with a funny tale about getting lost searching for berries as a boy, making both Lily and me laugh loudly. Then Lily tells a spooky story about a friendly forest ghost, using a mysterious, wobbly voice that gives me happy chills. When it's my turn, I make up a silly adventure about a talking raccoon who steals campers' marshmallows. We laugh together late into the evening, and I realize campfire stories might be my favorite part of camping so far.",
    questions: [
      "What does Dad's story involve?",
      "What kind of story does Lily tell?",
      "What does Owen's story involve?",
    ],
    trueFalse: [
      { text: "Dad tells a funny story about getting lost.", answer: true },
      { text: "Lily refuses to tell any story.", answer: false },
      { text: "Owen's story is about a talking raccoon.", answer: true },
    ],
    buildSentence: [
      { target: "We tell stories together.", jumbled: ["tell", "stories", "We", "together."] },
      { target: "I make up a story.", jumbled: ["make", "up", "I", "a", "story."] },
      { target: "We laugh late into evening.", jumbled: ["laugh", "late", "We", "into", "evening."] },
    ],
    mySentencePrompt: "Write or say one sentence about a story someone told you.",
    mySentenceExample: "My grandfather told me a funny story about his childhood.",
  },
  {
    number: 7,
    title: "Strange Noises at Night",
    image: null,
    imageNote: "Owen sitting up wide-eyed in his sleeping bag inside the dark tent, listening nervously to rustling sounds outside, Lily sleeping soundly nearby.",
    story:
      "Later that night, tucked inside our sleeping bags, I suddenly hear a strange rustling noise just outside the tent. My whole body freezes, and my heart starts pounding loudly in my chest. “Did you hear that?” I whisper nervously to Lily, but she is already fast asleep, breathing peacefully. The rustling continues, followed by an odd hooting sound somewhere in the darkness. I pull my sleeping bag tightly around myself, feeling much braver during the daytime than I do right now, alone with my racing imagination in the pitch-black tent.",
    questions: [
      "What does Owen hear outside the tent?",
      "How does Owen's body react?",
      "What is Lily doing while Owen is scared?",
    ],
    trueFalse: [
      { text: "Owen hears a strange rustling noise.", answer: true },
      { text: "Owen's heart feels completely calm.", answer: false },
      { text: "Lily is fast asleep while Owen is scared.", answer: true },
    ],
    buildSentence: [
      { target: "I hear a strange noise.", jumbled: ["hear", "a", "I", "strange", "noise."] },
      { target: "My heart pounds loudly.", jumbled: ["pounds", "loudly", "My", "heart."] },
      { target: "Did you hear that?", jumbled: ["you", "hear", "Did", "that?"] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you heard a strange noise.",
    mySentenceExample: "I heard a strange noise outside my window last night.",
  },
  {
    number: 8,
    title: "Dad's Comfort",
    image: null,
    imageNote: "Dad sitting beside Owen inside the tent with a flashlight, explaining gently while pointing toward the tent's mesh window, Owen looking reassured.",
    story:
      "Unable to sleep, I quietly unzip my sleeping bag and crawl over to Dad's side of the tent. “I heard scary noises outside,” I whisper, feeling a little embarrassed about waking him. Dad doesn't laugh at all; instead, he listens carefully and smiles reassuringly. “That's probably just an owl and some wind moving through the leaves,” he explains gently, shining his flashlight briefly outside to show me nothing dangerous is there. He lets me stay close beside him for the rest of the night. Feeling safe next to Dad, my racing heart slowly calms down completely.",
    questions: [
      "What does Owen tell Dad?",
      "What does Dad say the noise probably was?",
      "How does Owen feel after talking to Dad?",
    ],
    trueFalse: [
      { text: "Owen tells Dad about the scary noises.", answer: true },
      { text: "Dad laughs at Owen and sends him away.", answer: false },
      { text: "Owen feels safe after talking to Dad.", answer: true },
    ],
    buildSentence: [
      { target: "I heard scary noises outside.", jumbled: ["heard", "scary", "I", "noises", "outside."] },
      { target: "That's probably just an owl.", jumbled: ["is", "probably", "That's", "just", "an", "owl."] },
      { target: "My heart calms down completely.", jumbled: ["calms", "down", "My", "heart", "completely."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time someone helped you feel less scared.",
    mySentenceExample: "My mom helped me feel less scared during a thunderstorm.",
  },
  {
    number: 9,
    title: "Morning Hike and Surprise",
    image: null,
    imageNote: "Owen, Dad, and Lily standing at the edge of a clearing at sunrise, looking in amazement at two deer grazing peacefully near a sparkling lake.",
    story:
      "Early the next morning, refreshed after finally falling back asleep, we head out for a sunrise hike together. The forest looks completely different in the soft morning light, calm and golden. Suddenly, Lily grabs my arm and points silently toward a clearing ahead. Two deer stand peacefully near a sparkling lake, grazing quietly in the morning mist. We freeze completely still, watching in amazed silence until the deer slowly wander away into the trees. “That was incredible,” I whisper, and Dad nods, smiling proudly at witnessing something so beautiful together as a family.",
    questions: [
      "What time of day is the hike?",
      "What does Lily point toward?",
      "What do they see near the lake?",
    ],
    trueFalse: [
      { text: "The hike happens early in the morning.", answer: true },
      { text: "They see nothing interesting on the hike.", answer: false },
      { text: "They see two deer near the lake.", answer: true },
    ],
    buildSentence: [
      { target: "We head out for a hike.", jumbled: ["head", "out", "We", "for", "a", "hike."] },
      { target: "Two deer stand peacefully.", jumbled: ["stand", "peacefully", "Two", "deer."] },
      { target: "That was incredible to see.", jumbled: ["was", "incredible", "That", "to", "see."] },
    ],
    mySentencePrompt: "Write or say one sentence about an animal you saw in nature.",
    mySentenceExample: "I saw a family of ducks swimming in the park pond.",
  },
  {
    number: 10,
    title: "Packing Up, Already Missing It",
    image: null,
    imageNote: "Owen helping Dad fold the tent while Lily loads the car, all three looking back wistfully at the campsite one last time before leaving.",
    story:
      "By afternoon, it's time to pack everything back into the car and head home. Folding the tent feels much easier now that we know how it works, and we finish quickly as a team. As Dad starts the engine, I look back one last time at our campsite, already feeling a little sad to leave. “Can we come back next month?” I ask hopefully. Dad laughs and promises we definitely will. Thinking about the campfire stories, the deer, and even the scary noises that turned out fine, I realize this camping trip became one unforgettable adventure I will never forget.",
    questions: [
      "What do they do by afternoon?",
      "How does folding the tent feel this time?",
      "What does Owen ask Dad?",
    ],
    trueFalse: [
      { text: "They pack everything to head home.", answer: true },
      { text: "Folding the tent feels harder than before.", answer: false },
      { text: "Owen asks if they can come back next month.", answer: true },
    ],
    buildSentence: [
      { target: "It's time to head home.", jumbled: ["is", "time", "It's", "to", "head", "home."] },
      { target: "Can we come back?", jumbled: ["we", "come", "Can", "back?"] },
      { target: "This was an unforgettable adventure.", jumbled: ["was", "an", "This", "unforgettable", "adventure."] },
    ],
    mySentencePrompt: "Write or say one sentence about a trip you never want to forget.",
    mySentenceExample: "I never want to forget our family trip to the mountains.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

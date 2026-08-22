// A2 Kids digital storybook, Book 25: "A Rainy Day Adventure"
// Static content -- no Supabase. Third book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "A Rainy Day Adventure";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Ruby and Sam sitting inside a cushion 'pirate ship' in their living room, rain streaming down the window behind them, both wearing paper pirate hats and laughing.";

export const CHARACTERS = [
  { name: "Ruby", role: "The narrator, a young girl", look: "Red hair in a bun, striped shirt, imaginative and a bit disappointed at first." },
  { name: "Sam", role: "Ruby's younger brother", look: "Messy blond hair, dinosaur pajamas, energetic but easily startled." },
  { name: "Mom", role: "Ruby and Sam's mother", look: "Apron, warm smile, playful and creative." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Rained Out",
    image: null,
    imageNote: "Ruby standing at the window with a disappointed face, rain pouring down outside, a packed picnic basket sitting untouched on the kitchen table.",
    story:
      "This morning, I wake up excited because Mom promised a picnic at the park. I run to the window, but instead of sunshine, I see heavy gray clouds and pouring rain. “Oh no,” I whisper sadly. Sam runs in wearing his shoes already, ready to go, but his face falls too when he looks outside. “The picnic is cancelled,” Mom says gently, seeing our disappointed faces. “I'm sorry, kids.” I feel my excitement disappear completely, replaced by boredom. The whole day suddenly feels ruined, and I flop onto the couch with a heavy sigh.",
    questions: [
      "What did Mom promise for today?",
      "What does Ruby see when she looks outside?",
      "How does Ruby feel when the picnic is cancelled?",
    ],
    trueFalse: [
      { text: "Mom promised a picnic at the park.", answer: true },
      { text: "The weather is sunny and warm.", answer: false },
      { text: "Ruby feels excited when the picnic is cancelled.", answer: false },
    ],
    buildSentence: [
      { target: "Mom promised a picnic today.", jumbled: ["promised", "a", "Mom", "picnic", "today."] },
      { target: "I see heavy gray clouds.", jumbled: ["see", "heavy", "I", "gray", "clouds."] },
      { target: "The picnic is cancelled.", jumbled: ["is", "The", "picnic", "cancelled."] },
    ],
    mySentencePrompt: "Write or say one sentence about a plan that got cancelled because of weather.",
    mySentenceExample: "Our soccer game got cancelled because of heavy rain.",
  },
  {
    number: 2,
    title: "Bored Inside",
    image: null,
    imageNote: "Ruby and Sam lying upside down on the couch, staring at the ceiling with bored expressions, toys scattered untouched on the floor.",
    story:
      "For almost an hour, Sam and I lie on the couch doing nothing. “There's nothing to do,” Sam complains, kicking his legs. I agree completely, even though we have plenty of toys scattered around the room. Somehow, none of them seem interesting today. I stare at the ceiling and listen to the rain tapping against the window. “I wanted to go outside,” I mutter grumpily. Sam sighs loudly next to me, and we both stay quiet, feeling stuck and a little grumpy about our ruined plans. The afternoon stretches ahead of us, gray and boring.",
    questions: [
      "What do Ruby and Sam do for an hour?",
      "What does Sam complain about?",
      "What sound does Ruby listen to?",
    ],
    trueFalse: [
      { text: "Sam says there's nothing to do.", answer: true },
      { text: "Ruby finds all the toys very interesting today.", answer: false },
      { text: "Ruby listens to rain tapping the window.", answer: true },
    ],
    buildSentence: [
      { target: "There's nothing to do.", jumbled: ["nothing", "to", "There's", "do."] },
      { target: "I stare at the ceiling.", jumbled: ["stare", "at", "I", "the", "ceiling."] },
      { target: "We feel stuck and grumpy.", jumbled: ["feel", "stuck", "We", "and", "grumpy."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt bored.",
    mySentenceExample: "I felt bored on a long car ride last summer.",
  },
  {
    number: 3,
    title: "Mom's Idea",
    image: null,
    imageNote: "Mom kneeling in front of Ruby and Sam with an excited grin, gesturing toward a pile of couch cushions and blankets.",
    story:
      "Mom walks into the living room and notices our bored, grumpy faces immediately. “I have an idea,” she says with a mischievous smile. “Since we can't go on an outdoor adventure, why don't we have an indoor one instead?” Sam sits up quickly, suddenly curious. “What kind of adventure?” he asks. “A pirate ship adventure!” Mom announces, grabbing cushions from the couch. My boredom disappears instantly, replaced by excitement. “Let's do it!” I shout, jumping off the couch to help. Suddenly, the rainy day feels full of exciting possibilities again.",
    questions: [
      "What does Mom suggest?",
      "How does Sam react to Mom's idea?",
      "What happens to Ruby's boredom?",
    ],
    trueFalse: [
      { text: "Mom suggests an indoor pirate ship adventure.", answer: true },
      { text: "Sam is not interested in Mom's idea at all.", answer: false },
      { text: "Ruby's boredom disappears when she hears the idea.", answer: true },
    ],
    buildSentence: [
      { target: "I have an idea.", jumbled: ["have", "an", "I", "idea."] },
      { target: "Let's have an indoor adventure.", jumbled: ["have", "an", "Let's", "indoor", "adventure."] },
      { target: "My boredom disappears instantly.", jumbled: ["disappears", "instantly", "My", "boredom."] },
    ],
    mySentencePrompt: "Write or say one sentence about a creative idea someone shared with you.",
    mySentenceExample: "My teacher shared a creative idea for our art project.",
  },
  {
    number: 4,
    title: "Building the Ship",
    image: null,
    imageNote: "Ruby and Sam stacking couch cushions and draping a blanket to form a ship shape, Mom handing them a broomstick as a mast.",
    story:
      "We start building our pirate ship right away. Sam and I stack couch cushions to make the ship's tall sides, while Mom drapes a big blue blanket underneath for the ocean. “Every ship needs a mast!” Mom says, handing us a broomstick to stand upright between two cushions. We tie a small towel to the top for a sail. It takes almost twenty minutes, but soon our living room transforms into a real pirate ship. “This looks amazing,” Sam says, his eyes wide with wonder. I feel proud of what we built together as a team.",
    questions: [
      "What do they use to make the ship's sides?",
      "What does the broomstick become?",
      "How long does building the ship take?",
    ],
    trueFalse: [
      { text: "They stack cushions for the ship's sides.", answer: true },
      { text: "The broomstick becomes a mast.", answer: true },
      { text: "Building the ship takes only two minutes.", answer: false },
    ],
    buildSentence: [
      { target: "We stack the couch cushions.", jumbled: ["stack", "the", "We", "couch", "cushions."] },
      { target: "Every ship needs a mast.", jumbled: ["needs", "a", "Every", "ship", "mast."] },
      { target: "This looks amazing to us.", jumbled: ["looks", "amazing", "This", "to", "us."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you built with your family.",
    mySentenceExample: "I built a sandcastle with my family at the beach.",
  },
  {
    number: 5,
    title: "Setting Sail",
    image: null,
    imageNote: "Ruby standing proudly at the front of the cushion ship holding the broomstick mast, Sam sitting behind her steering an imaginary wheel, rain visible through the window.",
    story:
      "“All aboard!” I shout, climbing onto the ship with an imaginary captain's hat. Sam takes his place at the pretend steering wheel, ready for adventure. “Captain Ruby, which direction should we sail?” he asks, playing along perfectly. “Straight ahead, into the storm!” I announce dramatically, pointing at the rainy window. Outside, thunder rumbles softly, and it fits perfectly into our pretend ocean storm. We rock back and forth on our cushion ship, pretending huge waves are crashing around us. This imaginative game makes the real rain outside feel exciting instead of disappointing.",
    questions: [
      "What does Ruby pretend to be?",
      "What does Sam do at the steering wheel?",
      "How does the real thunder fit into their game?",
    ],
    trueFalse: [
      { text: "Ruby pretends to be the captain.", answer: true },
      { text: "Sam refuses to play the steering game.", answer: false },
      { text: "The thunder fits into their pretend storm.", answer: true },
    ],
    buildSentence: [
      { target: "All aboard the ship!", jumbled: ["aboard", "the", "All", "ship!"] },
      { target: "We sail straight ahead.", jumbled: ["sail", "straight", "We", "ahead."] },
      { target: "Huge waves crash around us.", jumbled: ["waves", "crash", "Huge", "around", "us."] },
    ],
    mySentencePrompt: "Write or say one sentence about a pretend game you like to play.",
    mySentenceExample: "I like to play a pretend game about being an astronaut.",
  },
  {
    number: 6,
    title: "The Treasure Map",
    image: null,
    imageNote: "Ruby sitting on the floor drawing a treasure map with crayons, Sam watching over her shoulder curiously.",
    story:
      "“Every good pirate adventure needs a treasure map,” I tell Sam, grabbing paper and crayons. I draw our living room, marking the couch, the bookshelf, and the kitchen door with an X for hidden treasure. While Sam is busy building a lookout tower from blocks, I sneak away and hide small toys and a bag of cookies around the house. When I finish, I show Sam the map, and his eyes light up with excitement. “Real treasure?” he asks hopefully. “Only one way to find out,” I say with a mysterious smile, and we grab the map together.",
    questions: [
      "What does Ruby draw?",
      "What does Ruby hide around the house?",
      "How does Sam react to the map?",
    ],
    trueFalse: [
      { text: "Ruby draws a treasure map.", answer: true },
      { text: "Ruby hides real gold coins around the house.", answer: false },
      { text: "Sam's eyes light up with excitement.", answer: true },
    ],
    buildSentence: [
      { target: "I draw a treasure map.", jumbled: ["draw", "a", "I", "treasure", "map."] },
      { target: "I hide small toys around.", jumbled: ["hide", "small", "I", "toys", "around."] },
      { target: "His eyes light up.", jumbled: ["eyes", "light", "His", "up."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you would like to find hidden somewhere.",
    mySentenceExample: "I would like to find a hidden box full of chocolate.",
  },
  {
    number: 7,
    title: "Sam Gets Scared",
    image: null,
    imageNote: "Sam covering his ears with a startled face as a bright flash of lightning fills the window, Ruby putting a comforting arm around him.",
    story:
      "As we search for the first clue, a sudden bright flash lights up the window, followed by a loud crack of thunder. Sam jumps and covers his ears, his face pale with fear. “I don't like that sound,” he whispers, holding onto my arm tightly. I remember feeling scared of thunder too when I was younger, so I understand exactly how he feels. “It's okay,” I say softly, sitting beside him. “Let's pretend the thunder is cannons from an enemy pirate ship, and we are the brave crew sailing right through it.” Slowly, Sam's fear turns into excitement again.",
    questions: [
      "What happens outside that scares Sam?",
      "How does Sam react to the thunder?",
      "How does Ruby help Sam feel better?",
    ],
    trueFalse: [
      { text: "A flash of lightning and thunder scares Sam.", answer: true },
      { text: "Ruby ignores Sam's fear completely.", answer: false },
      { text: "Ruby turns the thunder into part of their pretend game.", answer: true },
    ],
    buildSentence: [
      { target: "Sam jumps and covers his ears.", jumbled: ["jumps", "and", "Sam", "covers", "his", "ears."] },
      { target: "I don't like that sound.", jumbled: ["don't", "like", "I", "that", "sound."] },
      { target: "We are a brave crew.", jumbled: ["are", "a", "We", "brave", "crew."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that used to scare you.",
    mySentenceExample: "Loud thunder used to scare me when I was small.",
  },
  {
    number: 8,
    title: "Finding the Treasure",
    image: null,
    imageNote: "Ruby and Sam kneeling by the kitchen door, pulling a small bag of cookies and toys out from behind a plant, both grinning widely.",
    story:
      "Following the map carefully, we search behind the couch, under the bookshelf, and finally near the kitchen door. “X marks the spot!” I announce, pointing at a small potted plant. Sam digs behind it eagerly and pulls out the hidden bag of cookies and toys. “We found the treasure!” he shouts, jumping up and down with joy. We celebrate our victory with a cookie snack, sitting proudly on our pirate ship. The thunder still rumbles outside, but neither of us feels scared anymore. Our imaginative adventure has turned this rainy day into something truly memorable.",
    questions: [
      "Where do they finally find the treasure?",
      "What was hidden as treasure?",
      "How do they celebrate?",
    ],
    trueFalse: [
      { text: "They find the treasure near the kitchen door.", answer: true },
      { text: "The treasure is a broken toy.", answer: false },
      { text: "They celebrate by eating cookies.", answer: true },
    ],
    buildSentence: [
      { target: "X marks the spot.", jumbled: ["marks", "the", "X", "spot."] },
      { target: "We found the treasure!", jumbled: ["found", "the", "We", "treasure!"] },
      { target: "We celebrate with a snack.", jumbled: ["celebrate", "with", "We", "a", "snack."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you found something you were looking for.",
    mySentenceExample: "I felt happy when I found my missing sock under the bed.",
  },
  {
    number: 9,
    title: "Rain Stops",
    image: null,
    imageNote: "Ruby and Sam looking out the window together at a colorful rainbow stretching across the clearing sky.",
    story:
      "By late afternoon, the rain slowly starts to stop, and soft sunlight peeks through the clouds. “Look!” Sam shouts, pointing out the window. A bright rainbow stretches across the sky, its colors clear and beautiful. We press our faces against the glass, watching in amazement. “Maybe tomorrow we can finally have our picnic,” Mom says, joining us at the window. I smile, realizing that although our original plan was ruined, today turned out to be full of unexpected fun anyway. Sometimes the best adventures happen when plans change completely.",
    questions: [
      "What does Sam see out the window?",
      "What does Mom say about tomorrow?",
      "What does Ruby realize about today?",
    ],
    trueFalse: [
      { text: "Sam sees a rainbow in the sky.", answer: true },
      { text: "Mom says they can never have a picnic now.", answer: false },
      { text: "Ruby realizes today turned out to be fun anyway.", answer: true },
    ],
    buildSentence: [
      { target: "A bright rainbow stretches across.", jumbled: ["stretches", "across", "A", "bright", "rainbow."] },
      { target: "We can have our picnic tomorrow.", jumbled: ["can", "have", "We", "our", "picnic", "tomorrow."] },
      { target: "Today was full of fun.", jumbled: ["was", "full", "Today", "of", "fun."] },
    ],
    mySentencePrompt: "Write or say one sentence about a beautiful thing you saw in the sky.",
    mySentenceExample: "I saw a beautiful rainbow after the rain last week.",
  },
  {
    number: 10,
    title: "Best Rainy Day Ever",
    image: null,
    imageNote: "Ruby and Sam sitting happily inside their cushion ship at sunset, tired but smiling, the room cozy and warmly lit.",
    story:
      "That evening, as I get ready for bed, I think back on our whole rainy day. We built a ship, sailed through a pretend storm, found hidden treasure, and even watched a beautiful rainbow together. I realize that this unplanned day became one of the best days I have had in a long time, maybe even better than a regular picnic would have been. Sam gives me a tired, happy hug and says, “Can we build the ship again next time it rains?” I laugh and agree completely, already looking forward to our next rainy day adventure.",
    questions: [
      "What did Ruby and Sam do during their rainy day?",
      "How does Ruby feel about the day by the end?",
      "What does Sam ask about next time?",
    ],
    trueFalse: [
      { text: "They built a ship and found hidden treasure.", answer: true },
      { text: "Ruby thinks the day was boring and wasted.", answer: false },
      { text: "Sam wants to build the ship again next time.", answer: true },
    ],
    buildSentence: [
      { target: "We built a ship together.", jumbled: ["built", "a", "We", "ship", "together."] },
      { target: "This was one of the best days.", jumbled: ["was", "one", "This", "of", "the", "best", "days."] },
      { target: "I am looking forward to it.", jumbled: ["am", "looking", "I", "forward", "to", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about a day that turned out better than you expected.",
    mySentenceExample: "My camping trip turned out better than I expected because of the fun games.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A2 Kids digital storybook, Book 26: "Helping in the Garden"
// Static content -- no Supabase. Fourth book in the A2 Kids batch
// (Books 23-30). Same structure/level as storybookData23.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Helping in the Garden";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Theo and Grandpa kneeling together in a sunny backyard garden, planting seeds in neat rows, gardening tools and a watering can nearby.";

export const CHARACTERS = [
  { name: "Theo", role: "The narrator, a young boy", look: "Messy brown hair, striped shirt, curious and eager to learn." },
  { name: "Grandpa", role: "Theo's grandfather", look: "Straw hat, gray beard, patient and wise." },
  { name: "Ivy", role: "The neighbor's daughter, Theo's friend", look: "Two braids, green rain boots, cheerful and helpful." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Grandpa's Garden",
    image: null,
    imageNote: "Theo standing at the edge of Grandpa's backyard garden, looking at neat rows of dirt and gardening tools, Grandpa smiling beside him.",
    story:
      "Every Saturday, I visit Grandpa's house, and today he takes me straight to his backyard garden. “Would you like to help me plant vegetables this year?” he asks, handing me a small trowel. I look at the empty rows of soft brown dirt and feel excited about the idea. “What can we grow?” I ask curiously. “Tomatoes, carrots, and maybe some pumpkins,” Grandpa says, smiling under his straw hat. I have never grown anything before, but Grandpa promises to teach me everything step by step. I feel proud that he trusts me to help with his special garden.",
    questions: [
      "What does Grandpa ask Theo?",
      "What vegetables might they grow?",
      "How does Theo feel about helping?",
    ],
    trueFalse: [
      { text: "Grandpa asks Theo to help plant vegetables.", answer: true },
      { text: "Theo has grown many vegetables before.", answer: false },
      { text: "Theo feels proud that Grandpa trusts him.", answer: true },
    ],
    buildSentence: [
      { target: "Would you like to help?", jumbled: ["like", "to", "Would", "you", "help?"] },
      { target: "I feel excited about the idea.", jumbled: ["feel", "excited", "I", "about", "the", "idea."] },
      { target: "Grandpa teaches me step by step.", jumbled: ["teaches", "me", "Grandpa", "step", "by", "step."] },
    ],
    mySentencePrompt: "Write or say one sentence about something a family member taught you.",
    mySentenceExample: "My mom taught me how to bake bread.",
  },
  {
    number: 2,
    title: "Planting the Seeds",
    image: null,
    imageNote: "Theo carefully dropping small seeds into a shallow hole in the soil, Grandpa demonstrating the correct depth with his fingers.",
    story:
      "Grandpa shows me how to make a small hole in the soil with my finger, just deep enough for a seed. “Not too deep, or the seed won't be able to grow,” he explains carefully. I drop a tiny tomato seed into each hole and gently cover it with soft dirt. My hands get a little muddy, but I don't mind at all. “How long until it grows?” I ask eagerly. “Good things take time, Theo,” Grandpa says with a wise smile. We plant an entire row together, and I already feel a strange excitement about watching something grow from nothing.",
    questions: [
      "How deep should the holes be?",
      "What does Theo plant in each hole?",
      "What does Grandpa say about growing things?",
    ],
    trueFalse: [
      { text: "The holes should be very deep.", answer: false },
      { text: "Theo plants tomato seeds.", answer: true },
      { text: "Grandpa says good things take time.", answer: true },
    ],
    buildSentence: [
      { target: "I make a small hole.", jumbled: ["make", "a", "I", "small", "hole."] },
      { target: "Good things take time.", jumbled: ["take", "time", "Good", "things."] },
      { target: "We plant a whole row.", jumbled: ["plant", "a", "We", "whole", "row."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that takes a long time to happen.",
    mySentenceExample: "Growing a tall tree takes a very long time.",
  },
  {
    number: 3,
    title: "Watering Every Day",
    image: null,
    imageNote: "Theo carrying a small watering can across the garden, carefully sprinkling water over the newly planted rows of soil.",
    story:
      "Grandpa explains that seeds need water and sunlight every single day to grow properly. Now I visit the garden every afternoon after school, carrying a small green watering can. I pour water gently over each row, careful not to drown the tiny seeds underneath. “You're becoming a real gardener,” Grandpa says, watching me from his porch chair. It becomes part of my daily routine, and I actually start looking forward to this quiet time in the garden. I check the soil for any changes, but for now, everything still looks exactly the same as before.",
    questions: [
      "What do seeds need to grow properly?",
      "When does Theo visit the garden?",
      "What does Grandpa say Theo is becoming?",
    ],
    trueFalse: [
      { text: "Seeds need water and sunlight to grow.", answer: true },
      { text: "Theo only visits the garden once a week.", answer: false },
      { text: "Grandpa says Theo is becoming a real gardener.", answer: true },
    ],
    buildSentence: [
      { target: "Seeds need water and sunlight.", jumbled: ["need", "water", "Seeds", "and", "sunlight."] },
      { target: "I pour water gently.", jumbled: ["pour", "water", "I", "gently."] },
      { target: "I look forward to this time.", jumbled: ["look", "forward", "I", "to", "this", "time."] },
    ],
    mySentencePrompt: "Write or say one sentence about a daily routine you have.",
    mySentenceExample: "I brush my teeth every morning and night.",
  },
  {
    number: 4,
    title: "Waiting Is Hard",
    image: null,
    imageNote: "Theo kneeling by the soil, staring intently at an empty patch of dirt, arms crossed with an impatient expression.",
    story:
      "After a full week of watering, I stare at the soil, but nothing seems to be happening at all. “I don't see anything growing yet,” I complain, feeling frustrated. Grandpa chuckles softly and sits down beside me. “Nothing worth having comes quickly, Theo,” he says gently. “Plants grow underground first, where we cannot see them.” I try to be patient, but waiting feels really difficult when I want to see results right away. Grandpa reminds me that even though I cannot see progress, the seeds are working hard beneath the surface every single day.",
    questions: [
      "What does Theo notice after a week?",
      "How does Theo feel about waiting?",
      "What does Grandpa say about plants growing?",
    ],
    trueFalse: [
      { text: "Theo sees a huge plant after one week.", answer: false },
      { text: "Theo feels frustrated about waiting.", answer: true },
      { text: "Grandpa says plants grow underground first.", answer: true },
    ],
    buildSentence: [
      { target: "I don't see anything growing.", jumbled: ["don't", "see", "I", "anything", "growing."] },
      { target: "Waiting feels really difficult.", jumbled: ["feels", "really", "Waiting", "difficult."] },
      { target: "The seeds work hard underground.", jumbled: ["work", "hard", "The", "seeds", "underground."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that was hard for you to wait for.",
    mySentenceExample: "It was hard for me to wait for my birthday to come.",
  },
  {
    number: 5,
    title: "The First Sprout",
    image: null,
    imageNote: "Theo crouching down excitedly, pointing at a tiny green sprout poking out of the soil, Grandpa smiling proudly beside him.",
    story:
      "Two weeks after planting, I run to the garden after school like every other day. But this time, something is different! A tiny green sprout is poking up through the soil. “Grandpa! Grandpa! Come look!” I shout excitedly, waving my arms. He hurries over and kneels beside me, a proud smile spreading across his face. “That's your very first tomato plant, Theo,” he says warmly. I stare at the small green stem in amazement, hardly believing that this tiny seed actually turned into something alive. My patience finally paid off, and I feel incredibly proud.",
    questions: [
      "What does Theo find after two weeks?",
      "How does Theo react to finding it?",
      "What does Grandpa call this tiny plant?",
    ],
    trueFalse: [
      { text: "Theo finds a tiny green sprout.", answer: true },
      { text: "Theo feels nothing special about the sprout.", answer: false },
      { text: "This is Theo's first tomato plant.", answer: true },
    ],
    buildSentence: [
      { target: "A tiny sprout is growing.", jumbled: ["is", "growing", "A", "tiny", "sprout."] },
      { target: "That's your first tomato plant.", jumbled: ["is", "your", "That's", "first", "tomato", "plant."] },
      { target: "My patience finally paid off.", jumbled: ["finally", "paid", "My", "patience", "off."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time your patience paid off.",
    mySentenceExample: "My patience paid off when I finally learned to swim.",
  },
  {
    number: 6,
    title: "Uh-oh, Weeds!",
    image: null,
    imageNote: "Theo and Grandpa kneeling in the garden, carefully pulling tall green weeds from around the young tomato plants.",
    story:
      "A few days later, I notice strange plants growing between our neat rows of vegetables. “What are these?” I ask, pointing at the tall, spiky green plants. “Those are weeds,” Grandpa explains. “They steal water and sunlight from our real plants, so we need to remove them.” We spend the whole afternoon carefully pulling weeds by their roots, making sure not to disturb our growing vegetables nearby. My hands get dirty and a little tired, but I understand that taking care of a garden means solving problems as they appear, not just planting and waiting.",
    questions: [
      "What strange plants does Theo notice?",
      "Why do weeds need to be removed?",
      "What does Theo learn about taking care of a garden?",
    ],
    trueFalse: [
      { text: "Weeds steal water and sunlight from vegetables.", answer: true },
      { text: "Grandpa says weeds are helpful and should stay.", answer: false },
      { text: "Theo learns that gardening means solving problems.", answer: true },
    ],
    buildSentence: [
      { target: "Those are weeds in our garden.", jumbled: ["are", "in", "Those", "weeds", "our", "garden."] },
      { target: "We pull weeds by their roots.", jumbled: ["pull", "weeds", "We", "by", "their", "roots."] },
      { target: "Gardening means solving problems.", jumbled: ["means", "solving", "Gardening", "problems."] },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you had to solve.",
    mySentenceExample: "I had to solve a problem when my bike tire went flat.",
  },
  {
    number: 7,
    title: "Bugs in the Garden",
    image: null,
    imageNote: "Theo pointing curiously at a small red ladybug resting on a tomato leaf, Grandpa explaining beside him with a gentle smile.",
    story:
      "While weeding, I spot a small red bug with black spots resting on a leaf. “Should I remove this too?” I ask, worried it might be harmful. Grandpa leans in closer and shakes his head. “That's a ladybug. She actually eats the bad bugs that damage our plants,” he explains. I learn that not every bug in the garden is a problem; some of them are actually helpful friends. Grandpa shows me a different, greenish bug nearby that does damage leaves, and we carefully remove that one instead. I realize gardening requires paying close attention to small details.",
    questions: [
      "What bug does Theo spot on a leaf?",
      "What does the ladybug do that is helpful?",
      "What does Theo learn about bugs in the garden?",
    ],
    trueFalse: [
      { text: "The ladybug eats bad bugs that damage plants.", answer: true },
      { text: "Grandpa says all bugs should be removed.", answer: false },
      { text: "Theo learns that not every bug is a problem.", answer: true },
    ],
    buildSentence: [
      { target: "That's a helpful ladybug.", jumbled: ["is", "a", "That's", "helpful", "ladybug."] },
      { target: "She eats the bad bugs.", jumbled: ["eats", "the", "She", "bad", "bugs."] },
      { target: "Gardening needs close attention.", jumbled: ["needs", "close", "Gardening", "attention."] },
    ],
    mySentencePrompt: "Write or say one sentence about an animal or insect that helps in nature.",
    mySentenceExample: "Bees help flowers grow by carrying pollen.",
  },
  {
    number: 8,
    title: "Ivy Comes to Help",
    image: null,
    imageNote: "Ivy kneeling in the garden beside Theo, both children laughing while planting flowers along the garden's edge, Grandpa watching happily.",
    story:
      "One afternoon, my neighbor Ivy sees me working in the garden and walks over curiously. “Can I help too?” she asks, peeking through the fence. “Of course!” I say happily, showing her how to water the plants correctly. Grandpa gives Ivy her own small trowel, and together we plant colorful flowers along the garden's edge. Ivy asks lots of questions, and I feel proud explaining everything I have learned so far. Working together makes the afternoon fly by quickly, and the garden looks even more beautiful with two helpers instead of just one.",
    questions: [
      "What does Ivy ask Theo?",
      "What does Grandpa give Ivy?",
      "How does Theo feel explaining things to Ivy?",
    ],
    trueFalse: [
      { text: "Ivy asks if she can help in the garden.", answer: true },
      { text: "Theo refuses to let Ivy help.", answer: false },
      { text: "Theo feels proud explaining things to Ivy.", answer: true },
    ],
    buildSentence: [
      { target: "Can I help too?", jumbled: ["I", "help", "Can", "too?"] },
      { target: "We plant colorful flowers together.", jumbled: ["plant", "colorful", "We", "flowers", "together."] },
      { target: "The afternoon flies by quickly.", jumbled: ["flies", "by", "The", "afternoon", "quickly."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you taught a friend something new.",
    mySentenceExample: "I taught my friend how to play chess last weekend.",
  },
  {
    number: 9,
    title: "The Harvest",
    image: null,
    imageNote: "Theo holding a basket full of red tomatoes and orange carrots, kneeling proudly in the garden with Grandpa beside him.",
    story:
      "Weeks later, Grandpa announces exciting news. “I think it's time to harvest our vegetables, Theo,” he says with a wide smile. We walk through the garden together, and I can hardly believe how much everything has grown. I gently pick bright red tomatoes and pull up orange carrots from the soft soil, placing them carefully into a woven basket. “We grew all of this ourselves,” I say in amazement, holding up the heavy basket. After weeks of watering, waiting, and problem-solving, seeing the finished results feels incredibly rewarding and worth every single moment of effort.",
    questions: [
      "What does Grandpa announce?",
      "What vegetables do they harvest?",
      "How does Theo feel holding the basket?",
    ],
    trueFalse: [
      { text: "Grandpa says it's time to harvest the vegetables.", answer: true },
      { text: "They harvest tomatoes and carrots.", answer: true },
      { text: "Theo feels disappointed with the harvest.", answer: false },
    ],
    buildSentence: [
      { target: "It's time to harvest.", jumbled: ["time", "to", "It's", "harvest."] },
      { target: "We grew all of this.", jumbled: ["grew", "all", "We", "of", "this."] },
      { target: "This feels incredibly rewarding.", jumbled: ["feels", "incredibly", "This", "rewarding."] },
    ],
    mySentencePrompt: "Write or say one sentence about finishing something you worked hard on.",
    mySentenceExample: "I felt proud after finishing my hard puzzle.",
  },
  {
    number: 10,
    title: "Sharing the Vegetables",
    image: null,
    imageNote: "Theo's whole family and Ivy's family gathered around a table filled with fresh vegetables, everyone smiling and sharing a meal together.",
    story:
      "That evening, we bring the harvested vegetables home, and Mom cooks a delicious dinner using our fresh tomatoes and carrots. We invite Ivy's family over to share the meal, and everyone praises how delicious homegrown vegetables taste. “We should share some with the neighbors too,” Grandpa suggests, and I happily agree, filling small bags with extra vegetables. Walking around the neighborhood delivering our garden's gifts makes me feel proud and generous. I realize that helping something grow, and then sharing what it produces, might be one of the best feelings I have ever experienced.",
    questions: [
      "What does Mom cook for dinner?",
      "Who does Grandpa suggest sharing vegetables with?",
      "How does Theo feel about sharing the vegetables?",
    ],
    trueFalse: [
      { text: "Mom cooks dinner using the fresh vegetables.", answer: true },
      { text: "Grandpa says not to share with anyone.", answer: false },
      { text: "Theo feels proud and generous sharing the vegetables.", answer: true },
    ],
    buildSentence: [
      { target: "Mom cooks a delicious dinner.", jumbled: ["cooks", "a", "Mom", "delicious", "dinner."] },
      { target: "We should share with neighbors.", jumbled: ["should", "share", "We", "with", "neighbors."] },
      { target: "This is the best feeling.", jumbled: ["is", "the", "This", "best", "feeling."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you shared something with someone.",
    mySentenceExample: "I shared my lunch with a friend who forgot theirs.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

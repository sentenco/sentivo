// A1 Kids digital storybook, Book 16: "Fun at the Park"
// Static content -- no Supabase, mirrors the pattern in storybookData13.js
// through storybookData15.js. Fourth book in the Kids age track. Same
// simplified vocabulary/sentence length and 3+3 True/False and
// Build-a-Sentence pattern.
// Images are not generated yet (Midjourney subscription paused). image/
// coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead.

export const STORYBOOK_TITLE = "Fun at the Park";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Jack running toward a sunny playground with swings and a sandbox, Mom sitting on a bench in the background, a kite and a red ball visible nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Jack", role: "The narrator, a young boy", look: "Short blond hair, red T-shirt, sun hat, energetic and curious." },
  { name: "Mom", role: "Jack's mother", look: "Ponytail, light cardigan, warm and watchful." },
  { name: "Lily", role: "Jack's new friend from the park, appears from Chapter 5", look: "Dark hair in braids, yellow dress, cheerful and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A Sunny Day at the Park",
    image: null,
    imageNote: "Jack running toward a bright, green park with a playground, Mom walking behind him carrying a bag, sun shining overhead.",
    story:
      "Today is Saturday, and the sun shines bright in the sky. Mom says, “Let's go to the park, Jack!” I put on my shoes quickly and grab my hat. We walk down the street and see the big green park ahead. Many families are already there, playing and having fun. I see swings, a slide, and a big sandbox. Mom finds a bench and sits down to watch me play. I run toward the playground with a big smile on my face. The park is my favorite place to spend a sunny day.",
    questions: [
      "What day is it?",
      "What does Mom say?",
      "What does Jack see at the park?",
    ],
    trueFalse: [
      { text: "It is Saturday.", answer: true },
      { text: "Mom says to stay home.", answer: false },
      { text: "Jack sees swings and a slide.", answer: true },
    ],
    buildSentence: [
      { target: "The sun shines bright.", jumbled: ["sun", "shines", "The", "bright."] },
      { target: "I grab my hat.", jumbled: ["grab", "my", "I", "hat."] },
      { target: "The park is my favorite place.", jumbled: ["is", "my", "The", "park", "favorite", "place."] },
    ],
    mySentencePrompt: "Write or say one sentence about a sunny day.",
    mySentenceExample: "I like to play outside on sunny days.",
  },
  {
    number: 2,
    title: "The Big Swings",
    image: null,
    imageNote: "Jack swinging high with a big smile, Mom giving him a gentle push from behind, blue sky and trees in the background.",
    story:
      "First, I run to the big swings at the park. I climb up and hold the chains tightly. Mom gives me a gentle push, and I start to swing. “Higher, Mom, higher!” I shout with excitement. The wind blows through my hair as I swing up high. I feel like I am flying up into the blue sky. I laugh and kick my legs to swing even higher. After a while, I slow down and jump off softly. Swinging at the park always makes me feel free and happy.",
    questions: [
      "What does Jack climb first?",
      "What does Mom do?",
      "How does Jack feel when swinging?",
    ],
    trueFalse: [
      { text: "Jack climbs the swings first.", answer: true },
      { text: "Mom pushes Jack on the swing.", answer: true },
      { text: "Jack feels sad on the swing.", answer: false },
    ],
    buildSentence: [
      { target: "I feel like flying.", jumbled: ["feel", "like", "I", "flying."] },
      { target: "I hold the chains tightly.", jumbled: ["hold", "the", "I", "chains", "tightly."] },
      { target: "The wind blows through my hair.", jumbled: ["blows", "through", "The", "wind", "my", "hair."] },
    ],
    mySentencePrompt: "Write or say one sentence about swings or playgrounds.",
    mySentenceExample: "I like to swing very high.",
  },
  {
    number: 3,
    title: "The Sandbox Castle",
    image: null,
    imageNote: "Jack kneeling in a sandbox building a small sandcastle with a bucket and shovel, Mom taking a photo with her phone nearby.",
    story:
      "Next, I walk over to the big sandbox at the park. I bring my small bucket and shovel from home. I scoop the soft sand into my bucket carefully. Then, I flip the bucket over and lift it up slowly. A small sandcastle tower stands in front of me! I make three more towers and connect them together. I use small sticks to make windows and doors. Mom takes a photo of my sandcastle with her phone. Building a sandcastle at the park makes me feel like a builder.",
    questions: [
      "What does Jack bring from home?",
      "What does Jack build?",
      "What does Mom do?",
    ],
    trueFalse: [
      { text: "Jack brings a bucket and shovel.", answer: true },
      { text: "Jack builds a sandcastle.", answer: true },
      { text: "Mom ignores the sandcastle.", answer: false },
    ],
    buildSentence: [
      { target: "I scoop the sand.", jumbled: ["scoop", "the", "I", "sand."] },
      { target: "I build a sandcastle.", jumbled: ["build", "a", "I", "sandcastle."] },
      { target: "Mom takes a photo.", jumbled: ["takes", "a", "Mom", "photo."] },
    ],
    mySentencePrompt: "Write or say one sentence about playing with sand.",
    mySentenceExample: "I like to build sandcastles.",
  },
  {
    number: 4,
    title: "Feeding the Ducks",
    image: null,
    imageNote: "Jack standing at the edge of a calm pond throwing small pieces of food to a group of white ducks, Mom standing beside him with the food bag.",
    story:
      "After the sandbox, Mom and I walk to the pond. Many white ducks swim slowly in the cool water. Mom gives me a small bag of duck food. I throw small pieces onto the water carefully. The ducks swim quickly and eat the food happily. One brave duck comes close to the edge of the pond. I laugh when it quacks loudly at me. We stay and watch the ducks for a long time. Feeding the ducks is a peaceful part of our day at the park.",
    questions: [
      "Where do Jack and Mom walk to?",
      "What does Mom give Jack?",
      "What does the brave duck do?",
    ],
    trueFalse: [
      { text: "They walk to the pond.", answer: true },
      { text: "Mom gives Jack duck food.", answer: true },
      { text: "The brave duck swims away quickly.", answer: false },
    ],
    buildSentence: [
      { target: "I feed the ducks.", jumbled: ["feed", "the", "I", "ducks."] },
      { target: "The ducks eat happily.", jumbled: ["eat", "happily.", "The", "ducks"] },
      { target: "One duck comes close.", jumbled: ["comes", "close.", "One", "duck"] },
    ],
    mySentencePrompt: "Write or say one sentence about animals at the park.",
    mySentenceExample: "I like to feed the ducks.",
  },
  {
    number: 5,
    title: "Meeting Lily",
    image: null,
    imageNote: "Jack and a new girl named Lily playing catch with a red ball near the sandbox, both smiling, their moms chatting on a bench in the background.",
    story:
      "Near the sandbox, I see a girl playing with a red ball. “Hi, my name is Lily,” she says with a friendly smile. “I'm Jack,” I say, and I smile back at her. Lily asks if I want to play ball with her. We throw the ball back and forth and laugh a lot. Lily tells me she comes to this park every Saturday too. We decide to build a sandcastle together next time. Our moms talk and smile while we play happily. Meeting Lily makes the park feel even more fun.",
    questions: [
      "What is the new girl's name?",
      "What do Jack and Lily play with?",
      "What do they decide to do next time?",
    ],
    trueFalse: [
      { text: "The girl's name is Lily.", answer: true },
      { text: "They play with a blue kite.", answer: false },
      { text: "They decide to build a sandcastle together.", answer: true },
    ],
    buildSentence: [
      { target: "Lily plays with a ball.", jumbled: ["plays", "with", "Lily", "a", "ball."] },
      { target: "We throw the ball.", jumbled: ["throw", "the", "We", "ball."] },
      { target: "We laugh a lot together.", jumbled: ["laugh", "a", "We", "lot", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a new friend.",
    mySentenceExample: "I meet a new friend at the park.",
  },
  {
    number: 6,
    title: "Flying a Kite",
    image: null,
    imageNote: "Jack running with a bright red kite lifting into a windy blue sky, Lily watching and smiling nearby, Mom holding the kite string spool.",
    story:
      "On a windy Saturday, I bring my new kite to the park. It is bright red with a long, colorful tail. Mom helps me hold the string tightly at first. I run fast, and the kite lifts up into the sky. “Look, Mom, it's flying!” I shout with joy. The kite dances high above the trees in the blue sky. Lily arrives and watches my kite fly with a big smile. She asks if she can hold the string for a while. We take turns flying the kite until it is time to go home.",
    questions: [
      "What color is Jack's kite?",
      "What does Jack do to make the kite fly?",
      "Who arrives and watches?",
    ],
    trueFalse: [
      { text: "The kite is bright red.", answer: true },
      { text: "Jack does not run at all.", answer: false },
      { text: "Lily arrives and watches the kite.", answer: true },
    ],
    buildSentence: [
      { target: "The kite flies high.", jumbled: ["flies", "high.", "The", "kite"] },
      { target: "I run fast.", jumbled: ["run", "fast.", "I"] },
      { target: "We take turns flying it.", jumbled: ["take", "turns", "We", "flying", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about flying a kite or playing outside.",
    mySentenceExample: "I like to fly a kite on windy days.",
  },
  {
    number: 7,
    title: "A Little Scrape",
    image: null,
    imageNote: "Jack sitting on the ground with a small scraped knee, Mom kneeling beside him putting on a bandage, Lily standing nearby with a worried, caring look.",
    story:
      "While running on the path, I trip over a small rock. I fall down and scrape my knee on the ground. It stings a little, and I feel like crying. Mom runs over quickly and kneels beside me. “It's okay, Jack, let me see,” she says gently. She cleans my knee and puts on a small bandage. “You are very brave,” Mom says with a warm smile. Lily comes over and gives me a caring, worried look. After a few minutes, I feel better and want to play again.",
    questions: [
      "Why does Jack fall down?",
      "What does Mom put on his knee?",
      "How does Jack feel after a few minutes?",
    ],
    trueFalse: [
      { text: "Jack trips over a rock.", answer: true },
      { text: "Mom ignores Jack's knee.", answer: false },
      { text: "Jack feels better after a few minutes.", answer: true },
    ],
    buildSentence: [
      { target: "I fall down.", jumbled: ["fall", "down.", "I"] },
      { target: "Mom cleans my knee.", jumbled: ["cleans", "my", "Mom", "knee."] },
      { target: "I feel better soon.", jumbled: ["feel", "better", "I", "soon."] },
    ],
    mySentencePrompt: "Write or say one sentence about getting hurt a little.",
    mySentenceExample: "I fall down, but I feel better soon.",
  },
  {
    number: 8,
    title: "Ice Cream Treat",
    image: null,
    imageNote: "Jack and Lily sitting on a park bench eating ice cream cones, chocolate and strawberry scoops, Mom taking a photo of their happy, messy faces.",
    story:
      "After playing all afternoon, Mom says, “Let's get ice cream, Jack!” We walk to the small ice cream cart near the park. I choose a scoop of chocolate ice cream in a crunchy cone. Lily chooses a scoop of pink strawberry ice cream too. We sit together on a bench and eat our cold, sweet treats. The ice cream drips a little, and we both laugh. Mom takes a photo of our happy, messy faces. Ice cream after a fun day at the park is the best treat. I always look forward to this sweet ending to our day.",
    questions: [
      "What does Mom say?",
      "What flavor does Jack choose?",
      "What flavor does Lily choose?",
    ],
    trueFalse: [
      { text: "Mom suggests getting ice cream.", answer: true },
      { text: "Jack chooses vanilla ice cream.", answer: false },
      { text: "Lily chooses strawberry ice cream.", answer: true },
    ],
    buildSentence: [
      { target: "I choose chocolate ice cream.", jumbled: ["choose", "chocolate", "I", "ice", "cream."] },
      { target: "We eat our treats.", jumbled: ["eat", "our", "We", "treats."] },
      { target: "We both laugh together.", jumbled: ["both", "laugh", "We", "together."] },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite treat.",
    mySentenceExample: "I like to eat ice cream.",
  },
  {
    number: 9,
    title: "A Rainy Day Surprise",
    image: null,
    imageNote: "Jack and Mom sitting under a big tree on a small blanket having an impromptu picnic with sandwiches, rain falling gently around them.",
    story:
      "One Saturday, dark clouds cover the sky at the park. Suddenly, rain starts to fall, and we run for cover. Mom and I hurry under a big tree near the bench. “Our park day is not over yet,” Mom says with a smile. She opens her bag and takes out a small blanket. We sit under the tree and have a cozy indoor-style picnic. Mom brought sandwiches and juice just in case of rain. We watch the rain fall and laugh at our surprise picnic. Even a rainy day at the park can turn into a fun memory.",
    questions: [
      "What happens to the sky?",
      "Where do they go for cover?",
      "What does Mom take out of her bag?",
    ],
    trueFalse: [
      { text: "Dark clouds cover the sky.", answer: true },
      { text: "They stand in the rain the whole time.", answer: false },
      { text: "Mom takes out a blanket.", answer: true },
    ],
    buildSentence: [
      { target: "Rain starts to fall.", jumbled: ["starts", "to", "Rain", "fall."] },
      { target: "We run for cover.", jumbled: ["run", "for", "We", "cover."] },
      { target: "We have a picnic.", jumbled: ["have", "a", "We", "picnic."] },
    ],
    mySentencePrompt: "Write or say one sentence about a surprise on a rainy day.",
    mySentenceExample: "I have a picnic inside when it rains.",
  },
  {
    number: 10,
    title: "My Favorite Place",
    image: null,
    imageNote: "Jack and Lily sitting together on a hill watching the sunset over the park, swings and the pond visible in the distance, both smiling peacefully.",
    story:
      "It has been a whole summer of Saturdays at the park. I played on the swings, built sandcastles, and fed the ducks. I flew my kite, ate ice cream, and made a new friend named Lily. I even learned that a scraped knee is not so scary. Mom and I have so many happy memories from this park. Today, Lily and I sit together and look at the sunset. “This park is my favorite place in the whole world,” I say. Lily nods and says, “Mine too, Jack.” I know I will keep coming back to this special place.",
    questions: [
      "What did Jack do this summer?",
      "What did Jack learn?",
      "What do Jack and Lily agree about at the end?",
    ],
    trueFalse: [
      { text: "Jack played on the swings this summer.", answer: true },
      { text: "Jack never made any friends.", answer: false },
      { text: "Jack and Lily agree the park is their favorite place.", answer: true },
    ],
    buildSentence: [
      { target: "I made a new friend.", jumbled: ["made", "a", "I", "new", "friend."] },
      { target: "We watch the sunset.", jumbled: ["watch", "the", "We", "sunset."] },
      { target: "This park is my favorite place.", jumbled: ["park", "is", "This", "my", "favorite", "place."] },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite place.",
    mySentenceExample: "The park is my favorite place to play.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

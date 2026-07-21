// A1 Teens digital storybook, Book 4: "My School Football Team"
// Static content -- no Supabase, mirrors the pattern in storybookData3.js.
// Images are not generated yet (Midjourney subscription paused as of 2026-07-21).
// image/coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook4/
// once art exists, same as storybookData.js / storybookData2.js do.

export const STORYBOOK_TITLE = "My School Football Team";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Marco standing proudly on the school football field in his new blue number-ten team shirt, teammates and Coach Cruz visible behind him near the goal.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Marco", role: "The narrator, a new team member", look: "Short black hair, blue team shirt with number ten on the back, energetic and eager expression." },
  { name: "Mr. Cruz", role: "The football coach", look: "Middle-aged, short dark hair, sports cap, tracksuit and whistle around his neck, calm and encouraging." },
  { name: "Luis", role: "Marco's teammate", look: "Curly brown hair, red team shirt, friendly and supportive." },
  { name: "Ana", role: "Marco's teammate", look: "Hair in a ponytail, green team shirt, focused and encouraging." },
  { name: "Ben", role: "Marco's teammate", look: "Short hair, yellow team shirt, talkative and enthusiastic about football." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My New Football Shirt",
    image: null,
    imageNote: "Coach Cruz handing Marco a blue team shirt with number ten on the field, teammates smiling nearby near the goal, green grass all around.",
    story:
      "After school, I walk to the big field behind the classrooms. The grass is green, and I see some boys and girls passing a football to each other. Our coach, Mr. Cruz, stands near the goal and holds a list of names. He looks at me and says, “Welcome to the school football team, Marco.” My heart jumps because I really love football. Mr. Cruz gives me a blue team shirt with number ten on the back. I touch the shirt and feel the soft, clean cloth in my hands. Some teammates smile at me and say, “Hi, Marco,” so I do not feel alone. I put on the shirt and look at the field around me. In that moment, I feel proud and ready to play for my school team.",
    questions: [
      "Where does Marco go after school?",
      "Who is Mr. Cruz?",
      "What color is Marco's new team shirt?",
    ],
    trueFalse: [
      { text: "Marco sees boys and girls passing a football on the field.", answer: true },
      { text: "Mr. Cruz is a student in Marco's class.", answer: false },
      { text: "Marco feels proud when he puts on the shirt.", answer: true },
    ],
    buildSentence: [
      {
        target: "After school, I walk to the big field behind the classrooms.",
        jumbled: ["field", "big", "I", "the", "classrooms.", "After", "behind", "walk", "school,", "the", "to"],
      },
      {
        target: "Mr. Cruz gives me a blue team shirt with number ten on the back.",
        jumbled: ["blue", "ten", "back.", "Mr.", "the", "with", "me", "on", "shirt", "team", "Cruz", "gives", "number", "a"],
      },
      {
        target: "In that moment, I feel proud and ready to play for my school team.",
        jumbled: ["my", "to", "In", "play", "school", "moment,", "feel", "team.", "I", "proud", "that", "ready", "and", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about football and you.",
    mySentenceExample: "I feel happy when I play football with my friends.",
  },
  {
    number: 2,
    title: "My First Team Practice",
    image: null,
    imageNote: "Marco and Luis practicing passing a football to each other on the field, Marco's legs looking tired, Luis smiling encouragingly beside him.",
    story:
      "The next day, I go to the field again after my last class. This time, I know where to stand, so I feel more relaxed. Mr. Cruz blows his whistle and asks us to make two lines. We start with easy warm-up exercises and then run across the field. My legs feel tired, but I want to do my best. A boy named Luis stands next to me and shows me how to stretch my arms and legs. Then we kick the ball to a partner and count each pass together. I miss the ball one time, but Luis smiles and says, “It's okay, try again.” I kick the next pass better, and the ball goes straight to him. At the end of practice, I feel tired but happy because I finished my first day with the team.",
    questions: [
      "How does Marco feel at the start of practice?",
      "What does Luis show Marco?",
      "How does Marco feel at the end of practice?",
    ],
    trueFalse: [
      { text: "Marco feels more relaxed on the second day.", answer: true },
      { text: "Luis gets angry when Marco misses the ball.", answer: false },
      { text: "Marco feels tired and happy after practice.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Cruz blows his whistle and asks us to make two lines.",
        jumbled: ["asks", "two", "Mr.", "blows", "us", "and", "whistle", "his", "Cruz", "make", "to", "lines."],
      },
      {
        target: "A boy named Luis stands next to me and shows me how to stretch my arms and legs.",
        jumbled: ["named", "me", "stretch", "A", "and", "next", "arms", "shows", "to", "legs.", "boy", "Luis", "my", "and", "how", "stands", "me", "to"],
      },
      {
        target: "At the end of practice, I feel tired but happy because I finished my first day with the team.",
        jumbled: ["because", "I", "practice,", "happy", "first", "finished", "the", "At", "team.", "but", "day", "with", "feel", "tired", "my", "end", "of", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about practice.",
    mySentenceExample: "I feel tired after football practice.",
  },
  {
    number: 3,
    title: "Passing the Ball",
    image: null,
    imageNote: "Marco, Luis, Ana, and Ben passing a football in a small group in the middle of the field, the ball rolling toward Ana as Ben claps.",
    story:
      "On Thursday, our team practises passing the ball in small groups. I stand with Luis, Ana, and Ben near the middle of the field. Mr. Cruz tells us to look up before we kick the ball. At first, I look down too much, and my pass is too short. Ana calls my name and says, “Marco, look at me first.” I try again and kick the ball more carefully this time. The ball rolls across the grass and stops right at Ana's feet. Ben claps his hands and says, “Good pass!” We keep playing for ten more minutes, and I start to feel more confident. When practice ends, I know I am learning something new every day.",
    questions: [
      "Who is in Marco's small group?",
      "What does Ana tell Marco to do?",
      "How does Marco feel when practice ends?",
    ],
    trueFalse: [
      { text: "Marco practises passing in a small group.", answer: true },
      { text: "Ana tells Marco to kick the ball harder only.", answer: false },
      { text: "Marco feels more confident at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Cruz tells us to look up before we kick the ball.",
        jumbled: ["up", "before", "tells", "ball.", "look", "Mr.", "kick", "to", "we", "the", "us", "Cruz"],
      },
      {
        target: "The ball rolls across the grass and stops right at Ana's feet.",
        jumbled: ["and", "right", "The", "Ana's", "across", "the", "stops", "at", "feet.", "rolls", "ball", "grass"],
      },
      {
        target: "We keep playing for ten more minutes, and I start to feel more confident.",
        jumbled: ["more", "start", "We", "keep", "and", "feel", "minutes,", "confident.", "to", "for", "ten", "I", "playing", "more"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about passing a ball.",
    mySentenceExample: "I pass the ball to my friend on the field.",
  },
  {
    number: 4,
    title: "Running on the Field",
    image: null,
    imageNote: "Marco and Luis running side by side across a sunlit field, sweat on their faces, Luis encouraging Marco as they near the end of the field.",
    story:
      "Friday is a hot day, but our team still practises after school. Mr. Cruz tells us to run from one side of the field to the other side. The sun is bright, and sweat runs down my face. At first, I want to stop because my legs feel heavy. Then I hear Luis say, “Come on, Marco, you can do it!” I take a deep breath and keep running beside him. When we reach the end of the field, I bend down and laugh because I am so tired. Mr. Cruz gives us water and says running makes us stronger players. I drink slowly and feel the cool water in my throat. On my way home, I feel tired, but I also feel stronger than before.",
    questions: [
      "What does Mr. Cruz tell the team to do?",
      "Why does Marco want to stop at first?",
      "How does Marco feel on his way home?",
    ],
    trueFalse: [
      { text: "The team practises on a hot day.", answer: true },
      { text: "Luis tells Marco to stop running.", answer: false },
      { text: "Marco feels stronger after practice.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mr. Cruz tells us to run from one side of the field to the other side.",
        jumbled: ["tells", "of", "to", "one", "the", "us", "side.", "field", "Mr.", "from", "the", "Cruz", "other", "run", "side", "to"],
      },
      {
        target: "I take a deep breath and keep running beside him.",
        jumbled: ["running", "him.", "beside", "a", "I", "keep", "breath", "and", "take", "deep"],
      },
      {
        target: "On my way home, I feel tired, but I also feel stronger than before.",
        jumbled: ["but", "home,", "before.", "I", "also", "stronger", "feel", "On", "than", "way", "tired,", "my", "feel", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about running.",
    mySentenceExample: "I run fast when I play football.",
  },
  {
    number: 5,
    title: "A Talk with the Coach",
    image: null,
    imageNote: "Marco sitting on a bench beside Coach Cruz after practice, the coach speaking kindly to him, the empty field behind them in soft afternoon light.",
    story:
      "After practice on Monday, Mr. Cruz asks me to stay for a minute. I feel a little nervous because I think I made a mistake. He sits on the bench and tells me to sit beside him. Then he says, “Marco, you work hard, and I can see that.” I look at him and listen very carefully. He tells me my passes are getting better, but I need to talk more with my teammates. I nod and say, “Yes, Coach, I will try.” Mr. Cruz smiles and says good teams always speak to each other on the field. As I walk home, I think about his words again and again. I feel calm because the coach believes I can improve.",
    questions: [
      "Who asks Marco to stay after practice?",
      "What does Mr. Cruz say Marco needs to do more?",
      "How does Marco feel at the end?",
    ],
    trueFalse: [
      { text: "Marco thinks he made a mistake at first.", answer: true },
      { text: "Mr. Cruz says Marco should talk less on the field.", answer: false },
      { text: "Marco feels calm because the coach believes in him.", answer: true },
    ],
    buildSentence: [
      {
        target: "After practice on Monday, Mr. Cruz asks me to stay for a minute.",
        jumbled: ["on", "asks", "minute.", "practice", "me", "a", "Monday,", "stay", "for", "Mr.", "After", "Cruz", "to"],
      },
      {
        target: "He tells me my passes are getting better, but I need to talk more with my teammates.",
        jumbled: ["tells", "more", "with", "better,", "I", "my", "to", "He", "my", "passes", "teammates.", "talk", "are", "me", "but", "need", "getting"],
      },
      {
        target: "I feel calm because the coach believes I can improve.",
        jumbled: ["the", "because", "coach", "feel", "improve.", "I", "believes", "calm", "can", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a teacher or coach.",
    mySentenceExample: "My coach tells me to do my best.",
  },
  {
    number: 6,
    title: "Our Team at Break Time",
    image: null,
    imageNote: "Marco, Luis, Ana, and Ben sitting together under a tree at break time, Ben showing a photo on his phone, everyone smiling and talking.",
    story:
      "At break time on Tuesday, I sit under a tree with some teammates near the field. Luis has a sandwich, and Ana drinks water from a blue bottle. Ben talks about his favourite football player and shows us a photo on his phone. Then Ana asks me about my old school and my old team. I tell them I played football in the park with my cousins after class. Luis laughs and says we should all play in the park one day. We talk about football shoes, school homework, and our favourite snacks. The bell rings, but we are still smiling and talking as we stand up. When I walk back to class with them, I feel like I really belong to the team now.",
    questions: [
      "Where does Marco sit at break time?",
      "What does Ben show on his phone?",
      "How does Marco feel when he walks back to class?",
    ],
    trueFalse: [
      { text: "Marco sits with teammates under a tree.", answer: true },
      { text: "Ana asks Marco about his old school and team.", answer: true },
      { text: "Marco feels alone at the end of break time.", answer: false },
    ],
    buildSentence: [
      {
        target: "At break time on Tuesday, I sit under a tree with some teammates near the field.",
        jumbled: ["under", "field.", "the", "At", "a", "teammates", "time", "Tuesday,", "with", "break", "near", "some", "tree", "I", "sit", "on"],
      },
      {
        target: "I tell them I played football in the park with my cousins after class.",
        jumbled: ["played", "I", "football", "class.", "my", "with", "after", "the", "tell", "cousins", "in", "them", "I", "park"],
      },
      {
        target: "When I walk back to class with them, I feel like I really belong to the team now.",
        jumbled: ["feel", "really", "to", "class", "team", "belong", "When", "back", "them,", "I", "the", "with", "I", "now.", "walk", "like", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your friends at school.",
    mySentenceExample: "I talk with my friends at break time.",
  },
  {
    number: 7,
    title: "After-School Practice in the Rain",
    image: null,
    imageNote: "Marco, Luis, and Ana laughing and playing football together in light rain on the field, water drops visible, everyone's clothes a little wet.",
    story:
      "One afternoon, dark clouds cover the sky before football practice begins. Some students look worried, but Mr. Cruz says we can still train for a short time. Soon, light rain starts to fall on the field. The grass feels wet under my shoes, and the ball moves faster on the ground. At first, I do not like the rain because my shirt feels cold. Then Luis kicks the ball to me, and I pass it back with a smile. Ana laughs when water drops fall on her face, and soon everyone is laughing too. We run, pass, and shout to each other while the rain gets a little stronger. When practice ends, my clothes are wet, but I feel fresh and full of energy. It is not a perfect day, but it becomes one of my favourite practices.",
    questions: [
      "What covers the sky before practice?",
      "Why does Marco not like the rain at first?",
      "How does Marco feel when practice ends?",
    ],
    trueFalse: [
      { text: "Mr. Cruz cancels practice right away.", answer: false },
      { text: "The ball moves faster on the wet ground.", answer: true },
      { text: "Marco says it becomes one of his favourite practices.", answer: true },
    ],
    buildSentence: [
      {
        target: "One afternoon, dark clouds cover the sky before football practice begins.",
        jumbled: ["football", "cover", "sky", "afternoon,", "practice", "the", "begins.", "dark", "One", "before", "clouds"],
      },
      {
        target: "The grass feels wet under my shoes, and the ball moves faster on the ground.",
        jumbled: ["and", "under", "ball", "moves", "wet", "grass", "on", "The", "ground.", "feels", "shoes,", "the", "my", "faster", "the"],
      },
      {
        target: "When practice ends, my clothes are wet, but I feel fresh and full of energy.",
        jumbled: ["but", "clothes", "fresh", "practice", "and", "my", "When", "full", "ends,", "of", "I", "wet,", "are", "energy.", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rain and sports.",
    mySentenceExample: "I play football in light rain with my friends.",
  },
  {
    number: 8,
    title: "Getting Ready for the Match",
    image: null,
    imageNote: "The whole team including Marco, Luis, Ana, and Ben training with focus and energy, Coach Cruz watching closely, Luis scoring a goal in practice as the team cheers.",
    story:
      "On Friday, Mr. Cruz tells us we will have a match against another class next week. Everyone on the team becomes excited at once. He says we need to practise carefully and work together. During practice, we pass the ball faster and listen closely to the coach's instructions. I try to speak more on the field, just like Mr. Cruz told me before. When Luis runs to the left, I call his name and pass the ball to him. He scores a goal in practice, and our team cheers loudly. After training, we sit on the grass and talk about the match next week. I feel nervous about the game, but I also feel ready to help my team. For the first time, I can really imagine myself playing in our school match.",
    questions: [
      "When will the team have a match?",
      "What does Marco try to do more on the field?",
      "How does Marco feel about the match?",
    ],
    trueFalse: [
      { text: "The team will play a match next week.", answer: true },
      { text: "Marco tries to speak less on the field.", answer: false },
      { text: "Marco feels nervous and ready.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Friday, Mr. Cruz tells us we will have a match against another class next week.",
        jumbled: ["tells", "On", "class", "another", "a", "next", "week.", "Mr.", "have", "against", "us", "Friday,", "Cruz", "we", "will", "match"],
      },
      {
        target: "I try to speak more on the field, just like Mr. Cruz told me before.",
        jumbled: ["told", "before.", "I", "to", "field,", "just", "Cruz", "the", "more", "like", "try", "on", "speak", "Mr.", "me"],
      },
      {
        target: "I feel nervous about the game, but I also feel ready to help my team.",
        jumbled: ["but", "team.", "feel", "nervous", "ready", "the", "about", "I", "help", "I", "also", "feel", "my", "game,", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a match.",
    mySentenceExample: "I feel excited before a football match.",
  },
  {
    number: 9,
    title: "Our First School Match",
    image: null,
    imageNote: "Marco and Ana celebrating a goal on the school field during the match, students watching from the sideline, teammates cheering, the goal net visible.",
    story:
      "The day of the match arrives, and I wake up early with a fast heartbeat. At school, I put on my blue team shirt and tie my shoes carefully. Our team meets near the field, and Mr. Cruz tells us to stay calm and play together. Many students stand near the side of the field to watch us. When the whistle blows, the game begins, and I run after the ball with my teammates. In the middle of the match, Luis passes the ball to me, and I send it to Ana on the left side. She kicks it hard, and the ball goes into the goal. Everyone cheers, and I shout with joy. We keep playing until the final whistle, and our team wins by one goal. After the match, I feel tired, excited, and very proud of what we did together.",
    questions: [
      "How does Marco feel when he wakes up on the day of the match?",
      "Who scores the goal?",
      "What is the result of the match?",
    ],
    trueFalse: [
      { text: "Marco wakes up late on the day of the match.", answer: false },
      { text: "Ana scores after Marco passes the ball across.", answer: true },
      { text: "The team wins by one goal.", answer: true },
    ],
    buildSentence: [
      {
        target: "The day of the match arrives, and I wake up early with a fast heartbeat.",
        jumbled: ["and", "early", "heartbeat.", "with", "of", "wake", "the", "The", "arrives,", "I", "day", "a", "match", "up", "fast"],
      },
      {
        target: "She kicks it hard, and the ball goes into the goal.",
        jumbled: ["the", "goes", "goal.", "kicks", "and", "into", "hard,", "it", "the", "She", "ball"],
      },
      {
        target: "After the match, I feel tired, excited, and very proud of what we did together.",
        jumbled: ["very", "excited,", "what", "of", "match,", "proud", "I", "After", "together.", "tired,", "and", "did", "the", "feel", "we"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you play.",
    mySentenceExample: "I feel happy when my team wins a game.",
  },
  {
    number: 10,
    title: "Playing for My Team",
    image: null,
    imageNote: "Marco walking home from school smiling with his football shoes in his bag, his folded blue number-ten shirt visible inside, warm late-afternoon light.",
    story:
      "On Monday after the match, I walk to school with my football shoes in my bag. The weekend game is over, but I still remember every moment on the field. In class, some students smile at me and say, “Good game, Marco!” At break time, Luis, Ana, and Ben sit with me again under the tree. We talk about the goal, the passes, and the loud cheers from the students. Mr. Cruz walks by and tells us he is proud of our teamwork. I thank him and smile because I know I worked hard for this team. Then I look at my blue shirt folded neatly inside my bag. It is only a shirt, but to me it means friendship, effort, and football. As I walk home after school, I feel happy because I am not only learning to play, I am learning to be part of a team.",
    questions: [
      "What do some students say to Marco in class?",
      "Who tells the team he is proud of their teamwork?",
      "What does the blue shirt mean to Marco?",
    ],
    trueFalse: [
      { text: "Marco forgets the match very quickly.", answer: false },
      { text: "Mr. Cruz says he is proud of the team's teamwork.", answer: true },
      { text: "Marco feels he is becoming part of a team.", answer: true },
    ],
    buildSentence: [
      {
        target: "We talk about the goal, the passes, and the loud cheers from the students.",
        jumbled: ["the", "loud", "and", "the", "about", "from", "students.", "goal,", "the", "We", "cheers", "passes,", "talk"],
      },
      {
        target: "It is only a shirt, but to me it means friendship, effort, and football.",
        jumbled: ["but", "friendship,", "to", "It", "shirt,", "football.", "effort,", "and", "only", "me", "a", "is", "it", "means"],
      },
      {
        target: "As I walk home after school, I feel happy because I am not only learning to play, I am learning to be part of a team.",
        jumbled: ["not", "a", "after", "school,", "I", "play,", "As", "walk", "team.", "only", "learning", "happy", "because", "I", "am", "to", "feel", "learning", "home", "be", "to", "I", "am", "of", "part"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about being part of a team.",
    mySentenceExample: "I feel proud when I help my team.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

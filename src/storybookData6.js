// A1 Teens digital storybook, Book 6: "A Stronger Swimmer"
// Static content -- no Supabase, mirrors the pattern in storybookData5.js.
import coverImg from "./assets/storybook6/cover.jpeg";

export const STORYBOOK_TITLE = "A Stronger Swimmer";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "Sam standing at the edge of the city swimming pool wearing a blue swim cap and goggles, coach Ms. Lee smiling beside him, friends Ravi and Tina in the water nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Sam", role: "The narrator, a new swimmer", look: "Short hair, blue swim cap and goggles, nervous-but-determined expression at first." },
  { name: "Ms. Lee", role: "The swim coach", look: "Red or coral swimsuit, whistle-lanyard, warm and patient expression." },
  { name: "Ravi", role: "Sam's classmate", look: "Dark hair, green swim cap, energetic and playful." },
  { name: "Tina", role: "Sam's classmate", look: "Hair tucked under a yellow swim cap, encouraging and confident in the water." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Day at the Swimming Pool",
    image: null,
    imageNote: "Sam standing at the edge of the city pool holding a towel, Ms. Lee (red swimsuit) smiling and handing him a blue swim cap, other children splashing in the shallow end behind them.",
    story:
      "Every Saturday morning, I go to the big swimming pool in the city. Today is my first swimming lesson, and my stomach feels a little tight. I stand near the water and watch other people swim from one side to the other. Some children wear bright goggles and splash happily in the shallow end. The swim coach, Ms. Lee, walks over and smiles at me. She says, “Hello, Sam, welcome to the class.” I say hello back and hold my towel close to my body. Ms. Lee gives me a blue swim cap and tells me to put it on my head. The water looks cold and deep, but the coach stands near me and waits. When I slowly put my feet in the pool, the water feels cool on my skin. I still feel a little afraid, but I am proud that I took my first step into the pool.",
    questions: [
      "When does Sam go to the swimming pool?",
      "Who is Ms. Lee?",
      "What does Sam do at the end of the story?",
    ],
    trueFalse: [
      { text: "Today is Sam's first swimming lesson.", answer: true },
      { text: "The children are angry and quiet in the shallow end.", answer: false },
      { text: "Sam feels a little afraid but proud at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Every Saturday morning, I go to the big swimming pool in the city.",
        jumbled: ["big", "pool", "the", "I", "swimming", "morning,", "city.", "in", "Saturday", "go", "to", "the", "Every"],
      },
      {
        target: "The swim coach, Ms. Lee, walks over and smiles at me.",
        jumbled: ["smiles", "and", "Ms.", "me.", "walks", "at", "The", "Lee,", "over", "swim", "coach,"],
      },
      {
        target: "I feel a little afraid, but I am proud of my first step.",
        jumbled: ["but", "step.", "afraid,", "feel", "of", "my", "I", "little", "I", "am", "proud", "first", "a"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about swimming and you.",
    mySentenceExample: "I feel nervous, but I want to learn how to swim.",
  },
  {
    number: 2,
    title: "Meeting the Swim Coach and Class",
    image: null,
    imageNote: "Sam sitting in a row with Ravi and Tina and other students at the pool edge, Ms. Lee standing in front introducing the class, everyone in swim caps and goggles.",
    story:
      "On my second Saturday, I arrive early and sit on a bench near the pool. Ms. Lee comes to me and says, “Good morning, Sam, are you ready to learn today?” She calls all the students together and asks us to sit in a row. One by one, we say our names, our ages, and if we can swim a little. A boy next to me says, “Hi, I am Ravi,” and a girl says, “I am Tina.” Ms. Lee tells us that today we will only learn in the shallow water. “Do not worry,” she says, “everyone learns at their own speed.” We all put on our swim caps and goggles and walk to the edge together. When I look at my new classmates, I do not feel so alone anymore. In that moment, I feel calm because now I know my coach and my class.",
    questions: [
      "What does Ms. Lee ask the students to do first?",
      "What are the names of the two classmates Sam meets?",
      "Where will the class learn today?",
    ],
    trueFalse: [
      { text: "Sam arrives early and sits on a bench.", answer: true },
      { text: "The class will swim in the deep water today.", answer: false },
      { text: "Sam feels calm at the end because he knows his class.", answer: true },
    ],
    buildSentence: [
      {
        target: "She calls all the students together and asks us to sit in a row.",
        jumbled: ["all", "calls", "students", "the", "She", "together", "us", "and", "asks", "sit", "to", "row.", "in", "a"],
      },
      {
        target: "I meet my classmates, Ravi and Tina.",
        jumbled: ["I", "meet", "my", "and", "Ravi", "classmates,", "Tina."],
      },
      {
        target: "I feel calm because I know my coach and my class.",
        jumbled: ["know", "I", "and", "because", "class.", "feel", "my", "I", "my", "coach", "calm"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your class or your classmates.",
    mySentenceExample: "I have kind classmates in my swimming class.",
  },
  {
    number: 3,
    title: "Learning to Kick and Move My Arms",
    image: null,
    imageNote: "Sam holding the edge of the shallow pool kicking his legs behind him, Ms. Lee demonstrating arm circles nearby, Ravi splashing happily beside him.",
    story:
      "Today, Ms. Lee says we will learn how to kick our legs and move our arms. She stands in the shallow water and shows us slowly with her own body. “Kick from your hips, and keep your legs long and straight,” she tells us. I hold the edge of the pool and kick my legs behind me in the water. At first, my kicks make big splashes, but the coach says that is okay. Then Ms. Lee shows us how to move our arms in slow circles. Ravi kicks fast and laughs when the water jumps up around him. I try to kick and move my arms at the same time, but it is a little hard. Slowly, my body starts to feel the rhythm of kick and pull. In that moment, I feel happy because my arms and legs work together in the water.",
    questions: [
      "What does Ms. Lee teach the class today?",
      "What does Sam hold while he kicks his legs?",
      "How does Sam feel at the end?",
    ],
    trueFalse: [
      { text: "The class learns to kick and move their arms.", answer: true },
      { text: "Ms. Lee is angry about the big splashes.", answer: false },
      { text: "Sam feels happy when his arms and legs work together.", answer: true },
    ],
    buildSentence: [
      {
        target: "I hold the edge of the pool and kick my legs.",
        jumbled: ["pool", "I", "edge", "my", "the", "the", "kick", "legs.", "hold", "and", "of"],
      },
      {
        target: "Kick from your hips, and keep your legs long and straight.",
        jumbled: ["your", "from", "hips,", "Kick", "keep", "and", "long", "legs", "your", "straight.", "and"],
      },
      {
        target: "I feel happy because my arms and legs work together.",
        jumbled: ["work", "and", "I", "my", "feel", "arms", "legs", "because", "together.", "happy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning to kick or swim.",
    mySentenceExample: "I kick my legs to move in the water.",
  },
  {
    number: 4,
    title: "Practising in the Shallow Water",
    image: null,
    imageNote: "Sam pushing off the pool wall and gliding across the shallow water alone, Tina swimming beside him giving a thumbs-up under the water, Ms. Lee watching from the middle of the pool.",
    story:
      "On the next Saturday, we practise moving across the shallow water alone. Ms. Lee stands in the middle of the pool and watches every student. “Push off the wall, kick your legs, and glide like a fish,” she says. I take a deep breath, push off the wall, and float on top of the water. For a few seconds, I move forward without holding the edge. My face is in the water, so I lift my head to breathe and then look down again. Tina swims next to me and gives me a thumbs-up under the water. I reach the other side of the shallow area and stand up with a big smile. Ms. Lee claps and says, “Very good, Sam, you can move on your own now.” In that moment, I feel proud because I swim a short way without any help.",
    questions: [
      "What does Ms. Lee tell the students to do?",
      "What does Sam do to breathe?",
      "What does Ms. Lee say when Sam reaches the other side?",
    ],
    trueFalse: [
      { text: "Sam practises in the shallow water.", answer: true },
      { text: "Sam holds the edge the whole time.", answer: false },
      { text: "Sam feels proud because he swims a short way alone.", answer: true },
    ],
    buildSentence: [
      {
        target: "Push off the wall, kick your legs, and glide like a fish.",
        jumbled: ["off", "the", "Push", "kick", "wall,", "legs,", "your", "and", "a", "like", "glide", "fish."],
      },
      {
        target: "I push off the wall and float on the water.",
        jumbled: ["off", "the", "wall", "water.", "push", "I", "the", "on", "and", "float"],
      },
      {
        target: "I feel proud because I swim without any help.",
        jumbled: ["I", "help.", "feel", "because", "swim", "proud", "I", "any", "without"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing something on your own.",
    mySentenceExample: "I can swim a little without help now.",
  },
  {
    number: 5,
    title: "Nervous About the Deep Water",
    image: null,
    imageNote: "Sam and Ravi standing at the edge of the pool holding onto the wall, both looking cautiously toward the dark blue deep end, Ms. Lee standing calmly nearby.",
    story:
      "Today, Ms. Lee points to the other end of the pool, where the water is deep. My heart beats fast because I know I cannot touch the floor there. She says, “Soon you will learn to swim in the deep water too.” I look at the dark blue water and hold the edge with both hands. Ravi says he is a little scared too, so I feel better because I am not alone. Ms. Lee tells us we will only look at the deep end today, not swim in it. We walk slowly along the edge and watch the deep water below us. I take a deep breath and tell myself that I can be brave step by step. Ms. Lee smiles and says, “Being nervous is normal, and I will help you.” In that moment, I feel calmer because my coach understands my fear.",
    questions: [
      "Why does Sam's heart beat fast?",
      "Who says he is a little scared too?",
      "What does Ms. Lee say about being nervous?",
    ],
    trueFalse: [
      { text: "The deep water is at the other end of the pool.", answer: true },
      { text: "The class swims in the deep water today.", answer: false },
      { text: "Sam feels calmer because his coach understands his fear.", answer: true },
    ],
    buildSentence: [
      {
        target: "My heart beats fast because I know I cannot touch the floor there.",
        jumbled: ["heart", "fast", "beats", "because", "My", "I", "cannot", "know", "I", "the", "touch", "there.", "floor"],
      },
      {
        target: "Ravi says he is a little scared too.",
        jumbled: ["little", "scared", "Ravi", "a", "is", "he", "says", "too."],
      },
      {
        target: "In that moment, I feel calmer because my coach understands my fear.",
        jumbled: ["calmer", "because", "feel", "moment,", "I", "coach", "my", "that", "understands", "my", "In", "fear."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt nervous.",
    mySentenceExample: "I feel nervous, but I try to be brave.",
  },
  {
    number: 6,
    title: "Help from My Coach and Friends",
    image: null,
    imageNote: "Ms. Lee holding Sam's hands in the deeper water while he kicks and floats, Ravi and Tina swimming nearby cheering him on.",
    story:
      "The next lesson, Ms. Lee stands in the deeper water and holds out her hands. “I will hold you, Sam, so you are safe,” she says with a warm smile. I hold her hands and slowly move to where my feet cannot touch the floor. At first, I feel scared, but Ms. Lee keeps me safe on top of the water. Ravi and Tina swim near me and say, “You can do it, Sam!” I kick my legs and move my arms while the coach holds me lightly. Then Ms. Lee lets go for two seconds, and I float on my own. My friends cheer, and I put my feet back on the shallow floor with a smile. My body still shakes a little, but my heart feels strong. In that moment, I feel thankful because my coach and friends help me be brave.",
    questions: [
      "What does Ms. Lee do to keep Sam safe?",
      "What do Ravi and Tina say to Sam?",
      "What happens when Ms. Lee lets go for two seconds?",
    ],
    trueFalse: [
      { text: "Ms. Lee holds Sam's hands in the deeper water.", answer: true },
      { text: "Sam's friends laugh at him and walk away.", answer: false },
      { text: "Sam feels thankful because his coach and friends help him.", answer: true },
    ],
    buildSentence: [
      {
        target: "I will hold you, Sam, so you are safe.",
        jumbled: ["hold", "will", "you,", "I", "so", "Sam,", "are", "you", "safe."],
      },
      {
        target: "I kick my legs and move my arms while the coach holds me lightly.",
        jumbled: ["my", "kick", "legs", "I", "move", "and", "arms", "my", "the", "while", "holds", "coach", "lightly.", "me"],
      },
      {
        target: "I feel thankful because my coach and friends help me.",
        jumbled: ["friends", "me.", "my", "I", "feel", "because", "help", "thankful", "and", "coach"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about someone who helps you.",
    mySentenceExample: "My coach helps me when I feel afraid.",
  },
  {
    number: 7,
    title: "My First Full Length of the Pool",
    image: null,
    imageNote: "Sam swimming steadily across the full length of the pool with Ms. Lee walking alongside the edge, Ravi and Tina cheering from the far wall as he approaches.",
    story:
      "Today, Ms. Lee says, “Sam, I think you are ready to swim one full length.” My heart jumps, but this time I feel more excited than afraid. I stand at the shallow end and look all the way to the other side. Ms. Lee walks along the edge next to me so I am never alone. I push off the wall, kick my legs, and move my arms in a steady rhythm. I breathe to the side, look down, and keep my body long and straight. Halfway across, my arms feel tired, but I tell myself, “Keep going, Sam.” Slowly, I reach the other wall and touch it with my hand. Ravi, Tina, and Ms. Lee all cheer loudly for me. In that moment, I feel amazing because I swim the whole length of the pool for the first time.",
    questions: [
      "What does Ms. Lee think Sam is ready to do?",
      "Who walks along the edge next to Sam?",
      "What does Sam tell himself halfway across?",
    ],
    trueFalse: [
      { text: "Sam swims one full length of the pool.", answer: true },
      { text: "Sam feels more afraid than excited this time.", answer: false },
      { text: "Sam feels amazing at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I push off the wall and kick my legs.",
        jumbled: ["and", "off", "wall", "I", "my", "the", "legs.", "kick", "push"],
      },
      {
        target: "Halfway across, my arms feel tired, but I tell myself, “Keep going, Sam.”",
        jumbled: ["across,", "my", "Halfway", "feel", "arms", "but", "tired,", "tell", "I", "myself,", "going,", "“Keep", "Sam.”"],
      },
      {
        target: "I feel amazing because I swim the whole pool.",
        jumbled: ["I", "I", "feel", "the", "pool.", "amazing", "whole", "because", "swim"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal.",
    mySentenceExample: "I feel happy when I finish a hard task.",
  },
  {
    number: 8,
    title: "A Simple Water Game",
    image: null,
    imageNote: "Sam diving under the shallow water reaching for a colorful ring on the pool floor, Ravi and Tina nearby also diving for rings, everyone laughing.",
    story:
      "Today, Ms. Lee says we will play a fun game in the shallow water. She puts small colourful rings on the floor of the pool. “Take a breath, go under the water, and pick up one ring,” she tells us. I hold my nose, go under the water, and open my eyes behind my goggles. I see a red ring near my feet, so I reach down and grab it quickly. When I come up, I hold the ring high, and my friends laugh and clap. Ravi finds a blue ring, and Tina finds two rings at the same time. We swim, dive, and count our rings together in the warm water. The game makes my swimming feel like play, not hard work. In that moment, I feel joyful because learning to swim can also be so much fun.",
    questions: [
      "What does Ms. Lee put on the floor of the pool?",
      "What colour ring does Sam pick up?",
      "How does Sam feel at the end?",
    ],
    trueFalse: [
      { text: "The class plays a game with rings in the water.", answer: true },
      { text: "Sam cannot find any rings.", answer: false },
      { text: "Sam feels joyful because swimming can be fun.", answer: true },
    ],
    buildSentence: [
      {
        target: "Take a breath, go under the water, and pick up one ring.",
        jumbled: ["a", "breath,", "Take", "under", "go", "the", "water,", "pick", "and", "one", "up", "ring."],
      },
      {
        target: "I hold my nose and go under the water.",
        jumbled: ["my", "under", "the", "go", "water.", "I", "nose", "hold", "and"],
      },
      {
        target: "I feel joyful because learning to swim is fun.",
        jumbled: ["because", "joyful", "to", "learning", "fun.", "is", "swim", "I", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a game you like in the water.",
    mySentenceExample: "I like to find rings in the pool.",
  },
  {
    number: 9,
    title: "A Small Swim Day",
    image: null,
    imageNote: "Sam swimming across the pool while families watch and clap from the poolside, Ms. Lee holding a small paper certificate ready to give him at the far wall.",
    story:
      "Today is a special “swim day” at the pool, and many families come to watch. Ms. Lee tells us we will each swim one length to show what we can do. My hands feel a little cold, but I remember all my practice. When it is my turn, I stand at the wall and take a slow, deep breath. Ms. Lee says, “You can do it, Sam,” and I push off into the water. I kick, pull, and breathe, and I keep my eyes on the other wall. The people clap softly as I move across the calm blue water. When I touch the far wall, I lift my head and smile with tired arms. Ms. Lee gives me a small paper certificate with my name on it. In that moment, I feel so proud because everyone can see how much I have learned.",
    questions: [
      "What is special about today at the pool?",
      "What does Sam do when it is his turn?",
      "What does Ms. Lee give Sam at the end?",
    ],
    trueFalse: [
      { text: "Many families come to watch the swim day.", answer: true },
      { text: "Sam forgets everything he practised.", answer: false },
      { text: "Sam feels proud because everyone sees how much he learned.", answer: true },
    ],
    buildSentence: [
      {
        target: "Ms. Lee tells us we will each swim one length.",
        jumbled: ["each", "one", "length.", "Lee", "we", "Ms.", "will", "swim", "tells", "us"],
      },
      {
        target: "I kick, pull, and breathe, and I keep my eyes on the other wall.",
        jumbled: ["pull,", "kick,", "I", "breathe,", "and", "and", "keep", "I", "eyes", "my", "the", "on", "wall.", "other"],
      },
      {
        target: "I feel proud because everyone can see how much I learned.",
        jumbled: ["because", "see", "much", "learned.", "everyone", "I", "how", "I", "feel", "proud", "can"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about showing what you can do.",
    mySentenceExample: "I am proud when I show my new skill.",
  },
  {
    number: 10,
    title: "A Stronger Swimmer",
    image: null,
    imageNote: "Sam jumping gently into the pool with confidence, Ravi and Tina swimming beside him laughing, Ms. Lee smiling proudly from the poolside on his last Saturday.",
    story:
      "On my last Saturday of the class, I walk to the pool and feel calm and happy. The water does not look cold or scary to me anymore. Ms. Lee smiles and says, “Sam, look how far you have come since your first day.” I put on my cap and goggles and jump gently into the water. I swim to the deep end, float, and come back without any fear. Ravi and Tina swim beside me, and we laugh and race in a friendly way. I remember my first day, when my stomach felt tight and my feet did not want to move. Now I can kick, glide, dive, and swim a full length on my own. Ms. Lee says, “You are a stronger swimmer now, and I am proud of you.” In that moment, I feel wonderful because the pool has become a happy place for me.",
    questions: [
      "How does the pool look to Sam on his last Saturday?",
      "What can Sam do now that he could not do at first?",
      "What does Ms. Lee say to Sam at the end?",
    ],
    trueFalse: [
      { text: "The water looks scary to Sam on his last day.", answer: false },
      { text: "Sam can swim to the deep end without fear now.", answer: true },
      { text: "Sam feels wonderful because the pool is a happy place.", answer: true },
    ],
    buildSentence: [
      {
        target: "I swim to the deep end, float, and come back without any fear.",
        jumbled: ["to", "swim", "the", "I", "deep", "end,", "and", "float,", "back", "come", "any", "without", "fear."],
      },
      {
        target: "Now I can kick, glide, dive, and swim a full length on my own.",
        jumbled: ["I", "can", "Now", "glide,", "kick,", "and", "dive,", "swim", "full", "a", "on", "length", "my", "own."],
      },
      {
        target: "I feel wonderful because the pool is now a happy place.",
        jumbled: ["a", "now", "the", "place.", "wonderful", "pool", "I", "happy", "feel", "because", "is"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you feel about swimming now.",
    mySentenceExample: "I feel strong and happy when I swim now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

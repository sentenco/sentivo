// A1 Teens digital storybook: "The School Days of Paul, Ethan, Mia & Angel"
// Static content -- no Supabase, mirrors the pattern in CurriculumOverview.jsx.

import coverImg from "./assets/storybook/cover.jpeg";
import chapter1Img from "./assets/storybook/chapter1.png";
import chapter2Img from "./assets/storybook/chapter2.png";
import chapter3Img from "./assets/storybook/chapter3.png";
import chapter4Img from "./assets/storybook/chapter4.png";
import chapter5Img from "./assets/storybook/chapter5.png";
import chapter6Img from "./assets/storybook/chapter6.png";
import chapter7Img from "./assets/storybook/chapter7.png";
import chapter8Img from "./assets/storybook/chapter8.png";
import chapter9Img from "./assets/storybook/chapter9.png";
import chapter10Img from "./assets/storybook/chapter10.png";

export const STORYBOOK_TITLE = "Paul's Diary";
export const STORYBOOK_SUBTITLE = "An A1 storybook for teens";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "A group illustration of all four teen friends standing together outside their school, smiling: Paul, Ethan, Mia, and Angel.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Paul", role: "The narrator", look: "Short black hair, round glasses, navy blue hoodie." },
  { name: "Ethan", role: "Paul's best friend", look: "Curly brown hair, red sports jersey, big smile." },
  { name: "Mia", role: "Paul's classmate", look: "Long hair in a high ponytail, yellow denim jacket." },
  { name: "Angel", role: "Paul's classmate", look: "Short curly hair, green basketball jacket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My Morning Alarm",
    image: chapter1Img,
    imageNote: "Paul sitting up in bed with his phone, morning light through the window; Mia and Angel visible in the kitchen doorway.",
    story:
      "In the morning, my alarm rings at six thirty. I open my eyes and see my phone on the small table. Ethan sends me a short message: “Wake up, Paul!” I laugh, turn off the alarm, and sit up in my bed. In the kitchen, Mia drinks hot chocolate and talks with Angel. We eat bread and eggs together and look at our school bags. After breakfast, we walk to school and feel ready for the day.",
    questions: [
      "What time does the alarm ring?",
      "Who sends a message to Paul?",
      "What do they eat in the kitchen?",
    ],
    trueFalse: [
      { text: "Paul’s alarm rings at eight o’clock.", answer: false },
      { text: "Ethan sends a message to Paul.", answer: true },
      { text: "They walk to school after breakfast.", answer: true },
    ],
    buildSentence: [
      {
        target: "In the morning, my alarm rings at six thirty.",
        jumbled: ["morning,", "rings", "thirty.", "In", "my", "six", "at", "alarm"],
      },
      {
        target: "I open my eyes and see my phone on the small table.",
        jumbled: ["see", "open", "eyes", "my", "small", "phone", "I", "the", "on", "table", "and", "my"],
      },
      {
        target: "After breakfast, we walk to school and feel ready for the day.",
        jumbled: ["school", "day.", "After", "the", "breakfast,", "ready", "we", "walk", "and", "to", "feel", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning.",
    mySentenceExample: "In the morning, I wake up at seven.",
  },
  {
    number: 2,
    title: "A Busy Break Time",
    image: chapter2Img,
    imageNote: "Paul and Mia at a school desk during break time, with Ethan eating a sandwich and Angel talking nearby.",
    story:
      "At school, I sit with Mia during break time. Our classroom is noisy, but I like the happy sound. Ethan buys a sandwich and a bottle of water from the small canteen. Near the window, Angel tells us about her basketball practice after class. We listen to her and smile because she is very excited. My sandwich is warm, and Mia shares her apple with me. When the bell rings again, we go back to class together.",
    questions: [
      "Who sits with Paul during break time?",
      "What does Ethan buy from the canteen?",
      "Why do they smile at Angel?",
    ],
    trueFalse: [
      { text: "Paul sits alone during break time.", answer: false },
      { text: "Ethan buys a sandwich and water.", answer: true },
      { text: "Angel talks about music class.", answer: false },
    ],
    buildSentence: [
      {
        target: "At school, I sit with Mia during break time.",
        jumbled: ["break", "At", "school,", "time.", "Mia", "sit", "I", "with", "during"],
      },
      {
        target: "Ethan buys a sandwich and a bottle of water from the small canteen.",
        jumbled: ["a", "bottle", "buys", "canteen.", "Ethan", "and", "water", "sandwich", "of", "from", "the", "a", "small"],
      },
      {
        target: "When the bell rings again, we go back to class together.",
        jumbled: ["class", "we", "back", "the", "go", "together.", "rings", "When", "to", "bell", "again,"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your break time.",
    mySentenceExample: "During break time, I eat bread with my friend.",
  },
  {
    number: 3,
    title: "Our Favorite Lunch",
    image: chapter3Img,
    imageNote: "All four friends sitting together at an outdoor lunch table near the school garden, sharing food.",
    story:
      "At lunch time, we sit at the same table near the school garden. Paul likes rice and chicken, but Ethan likes noodles more. Mia opens her lunch box and shows us her favorite sandwich. Angel drinks juice and says the mango flavor is very good. We talk about food, laugh together, and share small bites. The sun is bright, so we stay in the shade and enjoy our meal. After lunch, everyone feels full and happy.",
    questions: [
      "Where do they sit at lunch time?",
      "What food does Ethan like more?",
      "What flavor does Angel like?",
    ],
    trueFalse: [
      { text: "They sit near the school garden.", answer: true },
      { text: "Paul likes noodles more than rice and chicken.", answer: false },
      { text: "Angel drinks juice.", answer: true },
    ],
    buildSentence: [
      {
        target: "At lunch time, we sit at the same table near the school garden.",
        jumbled: ["the", "At", "school", "same", "lunch", "near", "garden.", "table", "the", "we", "sit", "at", "time,"],
      },
      {
        target: "Mia opens her lunch box and shows us her favorite sandwich.",
        jumbled: ["lunch", "sandwich.", "opens", "her", "Mia", "her", "shows", "and", "box", "us", "favorite"],
      },
      {
        target: "After lunch, everyone feels full and happy.",
        jumbled: ["and", "After", "happy.", "everyone", "full", "lunch,", "feels"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your favorite lunch.",
    mySentenceExample: "My favorite lunch is rice and egg.",
  },
  {
    number: 4,
    title: "After-School Plans",
    image: chapter4Img,
    imageNote: "The four friends at the school gate in the late afternoon sun, Ethan holding a skateboard.",
    story:
      "When classes end, I wait for my friends at the school gate. Ethan wants to go to the park because he likes skateboarding there. Mia needs to go home early and help her mother in the kitchen. Angel asks us to stop at a small shop for cold drinks first. I look at the sky, feel the warm air, and think it is a good afternoon. In the end, we go to the shop together and talk on the way. After that, we say goodbye and follow our own plans.",
    questions: [
      "Where does Paul wait for his friends?",
      "Why does Ethan want to go to the park?",
      "Where do they go first together?",
    ],
    trueFalse: [
      { text: "Paul waits at the school gate.", answer: true },
      { text: "Mia wants to go skateboarding.", answer: false },
      { text: "They go to a small shop first.", answer: true },
    ],
    buildSentence: [
      {
        target: "When classes end, I wait for my friends at the school gate.",
        jumbled: ["for", "school", "I", "gate.", "the", "my", "at", "wait", "When", "classes", "end,", "friends"],
      },
      {
        target: "Ethan wants to go to the park because he likes skateboarding there.",
        jumbled: ["there.", "the", "to", "likes", "because", "skateboarding", "Ethan", "wants", "he", "park", "go", "to"],
      },
      {
        target: "After that, we say goodbye and follow our own plans.",
        jumbled: ["and", "plans.", "our", "we", "goodbye", "After", "own", "follow", "that,", "say"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your plan after school.",
    mySentenceExample: "After school, I go home and rest.",
  },
  {
    number: 5,
    title: "A Rainy Walk Home",
    image: chapter5Img,
    imageNote: "The four friends walking home together in the rain, all sharing one big blue umbrella.",
    story:
      "This afternoon, dark clouds fill the sky above our school. A few minutes later, the rain starts, and everyone runs to the front hall. Ethan laughs because he has a big blue umbrella in his bag. Mia stands next to me and watches the water on the street. Angel says the rain is cold, but she likes the fresh air. When the rain gets lighter, we walk home slowly under Ethan’s umbrella. Our shoes get a little wet, but the walk feels fun.",
    questions: [
      "What fills the sky above the school?",
      "What does Ethan have in his bag?",
      "How do they walk home?",
    ],
    trueFalse: [
      { text: "The weather is sunny after school.", answer: false },
      { text: "Ethan has a blue umbrella.", answer: true },
      { text: "Their shoes stay completely dry.", answer: false },
    ],
    buildSentence: [
      {
        target: "This afternoon, dark clouds fill the sky above our school.",
        jumbled: ["the", "our", "dark", "school.", "clouds", "This", "fill", "sky", "afternoon,", "above"],
      },
      {
        target: "Ethan laughs because he has a big blue umbrella in his bag.",
        jumbled: ["umbrella", "Ethan", "because", "bag.", "big", "blue", "a", "his", "has", "he", "in", "laughs"],
      },
      {
        target: "When the rain gets lighter, we walk home slowly under Ethan’s umbrella.",
        jumbled: ["walk", "umbrella.", "home", "rain", "lighter,", "slowly", "gets", "under", "Ethan’s", "When", "the", "we"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about rainy days.",
    mySentenceExample: "On rainy days, I bring an umbrella.",
  },
  {
    number: 6,
    title: "My Hobby Club",
    image: chapter6Img,
    imageNote: "Paul and Mia sitting together in the art room, drawing; a finished picture of a park with birds on the table.",
    story:
      "On Wednesday, I stay at school for the art club after class. Mia sits beside me because she also likes drawing. Ethan does not join the club, but he comes to see our pictures for a few minutes. Angel looks at my paper and says my tree is nice and colorful. The room is quiet, so I can think and draw well. I make a picture of a park with birds, grass, and a bench. Before going home, I put my drawing in my bag and feel proud.",
    questions: [
      "What club does Paul join after class?",
      "Who sits beside Paul?",
      "How does Paul feel before going home?",
    ],
    trueFalse: [
      { text: "Paul stays for the art club.", answer: true },
      { text: "Ethan joins the club and draws all afternoon.", answer: false },
      { text: "Paul feels proud of his drawing.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Wednesday, I stay at school for the art club after class.",
        jumbled: ["On", "school", "stay", "the", "for", "Wednesday,", "class.", "after", "art", "I", "at", "club"],
      },
      {
        target: "Mia sits beside me because she also likes drawing.",
        jumbled: ["also", "because", "me", "Mia", "likes", "beside", "she", "drawing.", "sits"],
      },
      {
        target: "Before going home, I put my drawing in my bag and feel proud.",
        jumbled: ["proud.", "feel", "Before", "bag", "home,", "and", "my", "my", "put", "going", "drawing", "I", "in"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your hobby.",
    mySentenceExample: "My hobby is drawing small pictures.",
  },
  {
    number: 7,
    title: "A Saturday at Home",
    image: chapter7Img,
    imageNote: "Paul at the breakfast table with a plate of pancakes, looking at a photo on his phone.",
    story:
      "On Saturday morning, I do not go to school, so I wake up a little late. My father makes pancakes, and the sweet smell fills the kitchen. After breakfast, Ethan sends me a photo of his new football shoes. Mia stays at home and reads a comic book near her window. Angel helps her older sister clean the living room and arrange the chairs. In the afternoon, I play a mobile game and listen to music in my room. It is a simple day, but I feel relaxed and happy.",
    questions: [
      "Why does Paul wake up a little late?",
      "What does Ethan send to Paul?",
      "What does Angel help clean?",
    ],
    trueFalse: [
      { text: "Paul goes to school on Saturday morning.", answer: false },
      { text: "Ethan sends a photo of new football shoes.", answer: true },
      { text: "Angel helps clean the kitchen.", answer: false },
    ],
    buildSentence: [
      {
        target: "On Saturday, I wake up a little late.",
        jumbled: ["wake", "up", "little", "late.", "I", "a", "On", "Saturday,"],
      },
      {
        target: "My father makes pancakes, and the sweet smell fills the kitchen.",
        jumbled: ["father", "smell", "sweet", "the", "makes", "pancakes,", "and", "fills", "kitchen.", "My", "the"],
      },
      {
        target: "I play a mobile game and listen to music.",
        jumbled: ["to", "a", "and", "listen", "I", "mobile", "game", "music.", "play"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your Saturday.",
    mySentenceExample: "On Saturday, I watch TV at home.",
  },
  {
    number: 8,
    title: "A Small Birthday Surprise",
    image: chapter8Img,
    imageNote: "The friends surprising Mia at the lunch table with a small pink gift bag and a set of colorful pens.",
    story:
      "Today is Mia’s birthday, and we want to do something nice for her. Before class, Ethan gives Angel a small pink gift bag to carry. I keep a birthday card inside my notebook and wait for the right time. At lunch, we call Mia to our table and sing for her with big smiles. She looks surprised, opens the gift bag, and finds a set of colorful pens. Her eyes shine, and she thanks us again and again. The lunch break feels short, but the moment feels special.",
    questions: [
      "Whose birthday is it?",
      "What does Paul keep inside his notebook?",
      "What is inside the gift bag?",
    ],
    trueFalse: [
      { text: "It is Angel’s birthday.", answer: false },
      { text: "Paul keeps a birthday card in his notebook.", answer: true },
      { text: "Mia finds colorful pens in the gift bag.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is Mia’s birthday, and we want to do something nice for her.",
        jumbled: ["want", "Today", "birthday,", "is", "something", "and", "for", "nice", "Mia’s", "her.", "we", "to", "do"],
      },
      {
        target: "We call Mia to our table and sing for her.",
        jumbled: ["Mia", "table", "sing", "her.", "and", "call", "our", "We", "for", "to"],
      },
      {
        target: "She looks surprised, opens the gift bag, and finds a set of colorful pens.",
        jumbled: ["colorful", "the", "a", "opens", "surprised,", "She", "set", "bag,", "gift", "and", "finds", "looks", "of", "pens"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about birthdays.",
    mySentenceExample: "On my birthday, I eat cake with my family.",
  },
  {
    number: 9,
    title: "Our Class Project Day",
    image: chapter9Img,
    imageNote: "Paul, Ethan, Mia, and Angel gathered around a classroom desk, making a poster about healthy habits.",
    story:
      "This week, our class makes a simple project about healthy habits. In the classroom, the teacher puts us in one group, so we work together. Ethan writes the title on a big sheet of paper with neat letters. Mia draws fruit and water bottles in bright colors. Angel talks about exercise and gives us good ideas for the poster. I cut the pictures carefully and glue them in the right place. At the end of class, our poster looks clean, colorful, and complete.",
    questions: [
      "What is the class project about?",
      "Who writes the title on the paper?",
      "What does Paul do for the poster?",
    ],
    trueFalse: [
      { text: "The class project is about healthy habits.", answer: true },
      { text: "Mia writes the title with neat letters.", answer: false },
      { text: "Paul glues the pictures in the right place.", answer: true },
    ],
    buildSentence: [
      {
        target: "This week, our class makes a simple project about healthy habits.",
        jumbled: ["project", "habits.", "healthy", "makes", "week,", "simple", "our", "class", "a", "about", "This"],
      },
      {
        target: "Mia draws fruit and water bottles in bright colors.",
        jumbled: ["in", "colors.", "draws", "bright", "fruit", "water", "Mia", "and", "bottles"],
      },
      {
        target: "At the end of class, our poster looks clean, colorful, and complete.",
        jumbled: ["looks", "our", "and", "end", "of", "poster", "class,", "At", "clean,", "complete.", "colorful,", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about group work.",
    mySentenceExample: "In group work, I draw pictures.",
  },
  {
    number: 10,
    title: "The Best Day of the Term",
    image: chapter10Img,
    imageNote: "The four friends standing together in front of a wall of colorful class posters, all smiling.",
    story:
      "This morning, our teacher puts the class projects on the wall for everyone to see. I stand with Ethan, Mia, and Angel in front of our poster and smile. The teacher says our work is neat, colorful, and easy to understand. Ethan looks proud, and Angel gives Mia a happy high five. During break time, we talk about our favorite moments this term. I think about the rainy walk, the art club, and Mia’s birthday surprise. On the way home, I feel thankful for my friends and for all our good days together.",
    questions: [
      "Where does the teacher put the class projects?",
      "What does the teacher say about their work?",
      "How does Paul feel on the way home?",
    ],
    trueFalse: [
      { text: "The teacher puts the projects on the wall.", answer: true },
      { text: "Angel is sad in front of the poster.", answer: false },
      { text: "Paul feels thankful on the way home.", answer: true },
    ],
    buildSentence: [
      {
        target: "Our teacher puts the class projects on the wall.",
        jumbled: ["wall.", "the", "projects", "puts", "the", "teacher", "on", "Our", "class"],
      },
      {
        target: "The teacher says our work is neat, colorful, and easy to understand.",
        jumbled: ["teacher", "says", "our", "work", "and", "easy", "The", "colorful,", "understand.", "neat,", "is", "to"],
      },
      {
        target: "I feel thankful for my friends and our good days together.",
        jumbled: ["days", "our", "and", "my", "thankful", "I", "together.", "good", "feel", "friends", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your friends.",
    mySentenceExample: "My friends make school fun.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "1 / 1",
};

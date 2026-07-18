// A1 Teens digital storybook, Book 2: "A New Student in Our Class"
// Static content -- no Supabase, mirrors the pattern in storybookData.js.
// Chapter art is landscape (3:2) except Chapter 1, which reuses a portrait
// (2:3) shot originally generated as a cover candidate -- StoryBook.jsx's
// image slot uses object-fit: contain, so neither shape gets cropped.

import coverImg from "./assets/storybook2/cover.png";
import chapter1Img from "./assets/storybook2/chapter1.png";
import chapter2Img from "./assets/storybook2/chapter2.png";
import chapter3Img from "./assets/storybook2/chapter3.png";
import chapter4Img from "./assets/storybook2/chapter4.png";
import chapter5Img from "./assets/storybook2/chapter5.png";
import chapter6Img from "./assets/storybook2/chapter6.png";
import chapter7Img from "./assets/storybook2/chapter7.png";
import chapter8Img from "./assets/storybook2/chapter8.png";
import chapter9Img from "./assets/storybook2/chapter9.png";
import chapter10Img from "./assets/storybook2/chapter10.png";

export const STORYBOOK_TITLE = "A New Student in Our Class";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "A group illustration of the new student Leo standing with his three new classmates outside their school, all smiling: Leo, Sara, Ken, and Amir.";

export const CHARACTERS = [
  { name: "Leo", role: "The narrator, a new student", look: "Short black hair, no glasses, gray zip-up hoodie, small backpack." },
  { name: "Sara", role: "Leo's classmate", look: "Long straight brown hair with a headband, light blue cardigan." },
  { name: "Ken", role: "Leo's classmate", look: "Short wavy brown hair, striped green sweater." },
  { name: "Amir", role: "Leo's classmate, joins from Chapter 8", look: "Curly black hair, mustard yellow jacket." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at This School",
    image: chapter1Img,
    imageNote: "Leo standing at the school gate holding his small backpack; a friendly teacher smiles and welcomes him, with Sara and Ken visible smiling in the classroom doorway.",
    story:
      "Today is my first morning at this new school. I stand at the school gate and hold my small backpack. A friendly teacher smiles at me and says, “Good morning, welcome!” She walks with me and shows me the way to my new classroom. In the hallway, I see many students talking and laughing, and my heart beats fast. When I walk into the classroom, a boy and a girl look at me and smile. The girl says, “Hi, I’m Sara,” and the boy says, “I’m Ken, nice to meet you.” I take a deep breath and say, “Hello, my name is Leo,” and I feel a little less shy and a little more at home.",
    questions: [
      "Where does Leo stand at the beginning of the story?",
      "Who shows Leo the way to his new classroom?",
      "What are the names of the two classmates Leo meets?",
    ],
    trueFalse: [
      { text: "It is Leo’s first morning at this school.", answer: true },
      { text: "The hallway is quiet and empty.", answer: false },
      { text: "Leo feels a little less shy at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today is my first morning at this new school.",
        jumbled: ["first", "my", "Today", "new", "at", "this", "school.", "morning", "is"],
      },
      {
        target: "She walks with me and shows me the way to my new classroom.",
        jumbled: ["walks", "new", "She", "me", "way", "and", "to", "my", "shows", "classroom.", "with", "the", "me"],
      },
      {
        target: "I take a deep breath and say, “Hello, my name is Leo,” and I feel a little less shy and a little more at home.",
        jumbled: ["feel", "more", "shy", "I", "at", "a", "take", "breath", "and", "say,", "“Hello,", "my", "name", "is", "Leo,”", "and", "a", "little", "deep", "little", "home.", "less", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your first time in a new place or class.",
    mySentenceExample: "I feel shy, but a friend says hello to me.",
  },
  {
    number: 2,
    title: "Finding My Seat",
    image: chapter2Img,
    imageNote: "Leo sitting at a desk near a classroom window; Ken turned around in the seat in front, showing Leo a notebook with a name sticker on Leo's desk.",
    story:
      "The next day, I arrive a little early and walk into the classroom slowly. Sara waves at me and points to a desk near the window. “You can sit here, Leo,” she says with a friendly smile. Ken sits in front of me and turns around to show me his notebook. He wrote my name on a small sticker and puts it on my desk. The teacher comes in, looks at me, and says, “Good, you found your seat.” I look at my name on the desk and feel like this place is really for me.",
    questions: [
      "Where does Sara tell Leo to sit?",
      "What does Ken put on Leo’s desk?",
      "What does the teacher say when she sees Leo?",
    ],
    trueFalse: [
      { text: "Leo arrives late to the classroom.", answer: false },
      { text: "Sara helps Leo find a place to sit.", answer: true },
      { text: "The teacher is unhappy with Leo’s seat.", answer: false },
    ],
    buildSentence: [
      {
        target: "The next day, I arrive a little early and walk into the classroom slowly.",
        jumbled: ["slowly.", "I", "walk", "day,", "classroom", "next", "a", "into", "early", "and", "little", "The", "arrive"],
      },
      {
        target: "“You can sit here, Leo,” she says with a friendly smile.",
        jumbled: ["sit", "says", "friendly", "“You", "here,", "smile.", "a", "can", "Leo,”", "she", "with"],
      },
      {
        target: "I look at my name on the desk and feel like this place is really for me.",
        jumbled: ["name", "I", "desk", "at", "feel", "my", "is", "on", "really", "and", "place", "the", "like", "this", "for", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your seat in class.",
    mySentenceExample: "I sit near the window in my classroom.",
  },
  {
    number: 3,
    title: "Break Time in the School Yard",
    image: chapter3Img,
    imageNote: "Leo, Sara, and Ken standing together under a big tree in the school yard, with other students playing basketball in the background.",
    story:
      "At break time, the teacher says, “You can go outside now,” and the students run to the school yard. Sara and Ken walk with me so I do not feel alone. We stand under a big tree and watch other students play basketball and talk. Ken asks me, “What do you like to do at school?” I tell him I like to draw and sometimes play games on my phone. Sara listens and says, “Maybe we can draw together in art class.” I look around the yard and feel less like a stranger and more like part of the school.",
    questions: [
      "Where do the students go at break time?",
      "Why do Sara and Ken walk with Leo?",
      "What does Leo say he likes to do?",
    ],
    trueFalse: [
      { text: "The students stay in the classroom during break.", answer: false },
      { text: "Sara and Ken walk with Leo so he is not alone.", answer: true },
      { text: "Leo says he likes to draw.", answer: true },
    ],
    buildSentence: [
      {
        target: "At break time, the teacher says, “You can go outside now,” and the students run to the school yard.",
        jumbled: ["break", "students", "At", "yard.", "and", "outside", "now,”", "go", "teacher", "says,", "time,", "the", "can", "“You", "the", "school", "run", "to"],
      },
      {
        target: "Sara and Ken walk with me so I do not feel alone.",
        jumbled: ["so", "not", "I", "walk", "Ken", "alone.", "Sara", "and", "with", "feel", "me", "do"],
      },
      {
        target: "I look around the yard and feel less like a stranger and more like part of the school.",
        jumbled: ["part", "around", "school.", "a", "like", "feel", "I", "yard", "like", "more", "of", "and", "the", "less", "stranger", "the", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your break time.",
    mySentenceExample: "At break time, I talk with my friends in the yard.",
  },
  {
    number: 4,
    title: "My First Canteen Lunch",
    image: chapter4Img,
    imageNote: "Leo, Sara, and Ken sitting together at a canteen table with trays of rice, soup, and fried chicken, a busy canteen in the background.",
    story:
      "At lunchtime, Sara asks, “Leo, do you want to eat in the canteen with us?” I say yes, and we walk to the small canteen at the end of the hall. The room is busy, and I can smell rice, soup, and fried chicken. Ken helps me read the menu on the wall and points to a simple meal. I buy rice and chicken and a bottle of water with my money. We sit together at a table, and Sara tells me about the school clubs. As I eat my warm food and listen to them, I feel comfortable and not nervous anymore.",
    questions: [
      "Where do they go for lunch?",
      "Who helps Leo read the menu?",
      "What does Leo buy to eat?",
    ],
    trueFalse: [
      { text: "Leo eats alone in the classroom.", answer: false },
      { text: "The canteen is busy and has many smells.", answer: true },
      { text: "Leo feels more nervous at the end of lunch.", answer: false },
    ],
    buildSentence: [
      {
        target: "At lunchtime, Sara asks, “Leo, do you want to eat in the canteen with us?”",
        jumbled: ["At", "do", "asks,", "you", "Sara", "canteen", "want", "to", "us?”", "“Leo,", "eat", "in", "with", "the", "lunchtime,"],
      },
      {
        target: "The room is busy, and I can smell rice, soup, and fried chicken.",
        jumbled: ["The", "fried", "room", "smell", "rice,", "busy,", "and", "can", "soup,", "is", "and", "I", "chicken"],
      },
      {
        target: "As I eat my warm food and listen to them, I feel comfortable and not nervous anymore.",
        jumbled: ["I", "my", "food", "and", "them,", "warm", "As", "to", "eat", "feel", "anymore.", "I", "listen", "not", "comfortable", "and", "nervous"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch at school.",
    mySentenceExample: "I eat rice and drink water at lunch.",
  },
  {
    number: 5,
    title: "A Lost Notebook",
    image: chapter5Img,
    imageNote: "Leo looking worried while searching the hallway floor with Sara and Ken; a boy from another class holding up a blue notebook.",
    story:
      "One afternoon, after class, I look in my bag and cannot find my blue notebook. I feel worried because my homework and notes are inside it. Sara and Ken stay with me and help me check my desk and chair. We walk back to the hallway and look on the floor near the door. A boy from another class holds up a notebook and asks, “Is this yours?” I see my name on the cover and say, “Yes, thank you so much!” When I put the notebook safely in my bag, I feel safe again and very thankful for my classmates.",
    questions: [
      "What item does Leo lose?",
      "Who helps Leo look for it?",
      "Who finds the notebook in the hallway?",
    ],
    trueFalse: [
      { text: "Leo loses his blue notebook.", answer: true },
      { text: "Sara and Ken leave Leo alone to search.", answer: false },
      { text: "Leo feels thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "One afternoon, after class, I look in my bag and cannot find my blue notebook.",
        jumbled: ["look", "after", "notebook.", "One", "my", "and", "cannot", "blue", "find", "in", "bag", "I", "afternoon,", "my", "class,"],
      },
      {
        target: "Sara and Ken stay with me and help me check my desk and chair.",
        jumbled: ["and", "me", "Sara", "my", "chair.", "desk", "check", "with", "stay", "help", "me", "Ken", "my", "and"],
      },
      {
        target: "When I put the notebook safely in my bag, I feel safe again and very thankful for my classmates.",
        jumbled: ["classmates.", "safely", "When", "my", "notebook", "thankful", "and", "for", "bag,", "I", "in", "feel", "safe", "very", "my", "the", "again", "put"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about losing or finding something.",
    mySentenceExample: "I lose my pen, but my friend finds it.",
  },
  {
    number: 6,
    title: "Joining the English Club",
    image: chapter6Img,
    imageNote: "Leo and Ken walking into a small clubroom where a few students sit in a circle, playing a word game and smiling.",
    story:
      "On Wednesday, the teacher tells the class about the English club after school. She says students can play word games, watch short videos, and practice speaking. Sara looks at me and says, “Leo, I think you will like this club.” After classes, Ken and I walk to the small room for the club together. Inside, a few students sit in a circle and smile at us. We play a simple word game and laugh when someone says a funny answer. When the club ends, I feel excited because I now have a place to practise English with new friends.",
    questions: [
      "What club does the teacher tell the class about?",
      "What do students do in the English club?",
      "How does Leo feel when the club ends?",
    ],
    trueFalse: [
      { text: "The club is about English.", answer: true },
      { text: "Students only sit and read quietly in the club.", answer: false },
      { text: "Leo feels excited at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Wednesday, the teacher tells the class about the English club after school.",
        jumbled: ["English", "Wednesday,", "club", "school.", "the", "On", "the", "the", "teacher", "tells", "after", "about", "class"],
      },
      {
        target: "After classes, Ken and I walk to the small room for the club together.",
        jumbled: ["club", "walk", "After", "for", "together.", "and", "small", "I", "Ken", "the", "room", "classes,", "to", "the"],
      },
      {
        target: "When the club ends, I feel excited because I now have a place to practise English with new friends.",
        jumbled: ["club", "I", "new", "feel", "a", "ends,", "now", "When", "with", "have", "place", "excited", "English", "friends.", "the", "to", "practise", "because"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a club you like or want to join.",
    mySentenceExample: "I want to join the music club at school.",
  },
  {
    number: 7,
    title: "Homework Check",
    image: chapter7Img,
    imageNote: "Leo sitting at his desk with an open notebook while the teacher checks his work and smiles; Sara and Ken giving a thumbs-up nearby.",
    story:
      "The next morning, our teacher asks us to open our notebooks for a homework check. My hands feel a little cold, but I know I finished all the exercises last night. She walks around the room and looks at each student’s work. When she stops at my desk, she reads my answers slowly. Then she smiles and says, “Good job, Leo, your homework is clear.” Sara and Ken look at me and give me a small thumbs-up. I close my notebook and feel proud of my work in this new class.",
    questions: [
      "What does the teacher ask the students to open?",
      "How does Leo feel before the homework check?",
      "What does the teacher say to Leo?",
    ],
    trueFalse: [
      { text: "Leo did not do his homework.", answer: false },
      { text: "The teacher says, “Good job, Leo.”", answer: true },
      { text: "Leo feels proud at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "The next morning, our teacher asks us to open our notebooks for a homework check.",
        jumbled: ["asks", "our", "notebooks", "homework", "us", "The", "next", "to", "morning,", "check.", "for", "open", "teacher", "a", "our"],
      },
      {
        target: "She walks around the room and looks at each student’s work.",
        jumbled: ["each", "She", "work.", "the", "walks", "looks", "student’s", "at", "around", "and", "room"],
      },
      {
        target: "I close my notebook and feel proud of my work in this new class.",
        jumbled: ["new", "class.", "work", "and", "this", "proud", "feel", "in", "I", "of", "close", "notebook", "my", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your homework.",
    mySentenceExample: "I do my homework before I play games.",
  },
  {
    number: 8,
    title: "A Small Group Poster",
    image: chapter8Img,
    imageNote: "Leo, Sara, Ken, and Amir working together around a table on a poster titled 'My School Day', drawing pictures and writing sentences.",
    story:
      "This week, our teacher asks us to make a small poster in groups. She puts me with Sara, Ken, and another boy named Amir. We choose the topic “My School Day” and decide to draw pictures and write short sentences. Sara writes the title at the top of the paper in big letters. Ken draws a classroom, and Amir draws the canteen and the yard. I write simple sentences under each picture. When we finish the poster, I feel happy because our group works well together.",
    questions: [
      "What does the teacher ask the students to make?",
      "Who is in Leo’s group?",
      "What topic does their group choose?",
    ],
    trueFalse: [
      { text: "The group topic is “My School Day.”", answer: true },
      { text: "Leo only draws pictures and does not write.", answer: false },
      { text: "Leo feels happy about the group at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "This week, our teacher asks us to make a small poster in groups.",
        jumbled: ["week,", "asks", "poster", "our", "us", "small", "make", "in", "to", "groups.", "teacher", "a", "This"],
      },
      {
        target: "We choose the topic “My School Day” and decide to draw pictures and write short sentences.",
        jumbled: ["short", "choose", "the", "topic", "We", "“My", "School", "sentences.", "and", "write", "to", "Day”", "draw", "pictures", "and", "decide"],
      },
      {
        target: "When we finish the poster, I feel happy because our group works well together.",
        jumbled: ["feel", "we", "because", "When", "poster,", "I", "well", "finish", "works", "happy", "our", "the", "together.", "group"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working in a group.",
    mySentenceExample: "In a group, I like to draw and write.",
  },
  {
    number: 9,
    title: "Our Short Class Presentation",
    image: chapter9Img,
    imageNote: "Leo's group standing at the front of the classroom presenting their poster; Sara holding the poster, Ken pointing at a picture, classmates listening and clapping.",
    story:
      "Today, each group stands at the front of the classroom to show their poster. My group is a little nervous, but the teacher smiles and tells us to start. Sara holds the poster, and Ken points to the first picture of the classroom. Amir reads one short sentence, and I read the next one slowly. Some students listen and nod when they understand. When we finish, the class claps, and the teacher says, “Well done, that was clear.” I feel nervous and excited at the same time, but I am glad we could speak in front of the class.",
    questions: [
      "What does each group show at the front of the classroom?",
      "Who holds the poster in Leo’s group?",
      "How does Leo feel at the end?",
    ],
    trueFalse: [
      { text: "The class ignores the group and does not clap.", answer: false },
      { text: "Leo reads a sentence from the poster.", answer: true },
      { text: "The teacher says the presentation is clear.", answer: true },
    ],
    buildSentence: [
      {
        target: "Today, each group stands at the front of the classroom to show their poster.",
        jumbled: ["stands", "Today,", "group", "each", "at", "show", "the", "to", "of", "classroom", "their", "front", "poster.", "the"],
      },
      {
        target: "Amir reads one short sentence, and I read the next one slowly.",
        jumbled: ["next", "short", "slowly.", "reads", "one", "I", "one", "sentence,", "and", "the", "Amir", "read"],
      },
      {
        target: "When we finish, the class claps, and the teacher says, “Well done, that was clear.”",
        jumbled: ["class", "and", "finish,", "says,", "the", "When", "“Well", "clear.”", "that", "done,", "we", "was", "claps,", "teacher", "the"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about speaking in front of others.",
    mySentenceExample: "I feel shy, but I try to speak clearly.",
  },
  {
    number: 10,
    title: "This Class Feels Like Home",
    image: chapter10Img,
    imageNote: "Leo walking into the classroom smiling; Sara waving, Ken moving his bag over, Amir greeting him, and the class poster visible on the wall.",
    story:
      "On Friday morning, I walk into the classroom and hear my classmates talking and laughing. Sara waves at me, Ken moves his bag so I can sit, and Amir asks, “How are you today, Leo?” The teacher starts the lesson and uses our poster from last week on the board. She says, “This class did good work this month.” I look around and see my name on my desk, my notebook in my bag, and our poster on the wall. At the end of the day, we leave the school together and talk about next week. As I walk home with my friends, this school does not feel new anymore, and this class feels like home to me.",
    questions: [
      "What does Sara do when Leo enters the classroom?",
      "What does the teacher use on the board?",
      "How does the class feel to Leo at the end?",
    ],
    trueFalse: [
      { text: "Leo hears his classmates talking and laughing.", answer: true },
      { text: "The teacher says the class did bad work this month.", answer: false },
      { text: "Leo feels that the class is like home.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Friday morning, I walk into the classroom and hear my classmates talking and laughing.",
        jumbled: ["Friday", "my", "hear", "morning,", "and", "talking", "classmates", "laughing.", "the", "On", "into", "I", "classroom", "walk", "and"],
      },
      {
        target: "I look around and see my name on my desk, my notebook in my bag, and our poster on the wall.",
        jumbled: ["wall.", "I", "my", "my", "see", "around", "name", "notebook", "the", "on", "my", "bag,", "and", "our", "on", "poster", "look"],
      },
      {
        target: "As I walk home with my friends, this school does not feel new anymore, and this class feels like home to me.",
        jumbled: ["home", "feels", "does", "friends,", "anymore,", "class", "my", "I", "school", "As", "not", "and", "to", "this", "like", "feel", "with", "walk", "this", "new", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place that feels like home to you.",
    mySentenceExample: "My classroom feels like home when I am with my friends.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

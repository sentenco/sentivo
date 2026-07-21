// A1 Teens digital storybook, Book 5: "My School Basketball Team"
// Static content -- no Supabase, mirrors the pattern in storybookData4.js.
// Images are not generated yet (Midjourney subscription paused as of 2026-07-21).
// image/coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook5/
// once art exists, same as storybookData.js / storybookData2.js do.

export const STORYBOOK_TITLE = "My School Basketball Team";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Nina standing on the shiny school gym court holding a basketball with both hands, the tall hoop above her, Coach Ben and teammates Mia and Jay visible nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "Nina", role: "The narrator, a new player on the team", look: "Hair in a ponytail, blue team jersey, nervous-but-determined expression at first." },
  { name: "Coach Ben", role: "The basketball coach", look: "Red team shirt, whistle around his neck, warm and encouraging." },
  { name: "Mia", role: "Nina's teammate", look: "Curly hair, kind and patient, often the one who explains things gently." },
  { name: "Jay", role: "Nina's teammate", look: "Short hair, energetic and talkative, quick to cheer teammates on." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Time in the School Gym",
    image: null,
    imageNote: "Nina standing just inside the bright school gym, Coach Ben (red shirt) handing her a basketball, other students bouncing balls in the background under the tall hoop.",
    story:
      "After school, I walk to the big gym next to the playground. The doors are open, and I can hear a ball bouncing on the floor. Inside the gym, the lights are bright, and a tall hoop hangs above the shiny court. A teacher in a red shirt holds a basketball and looks at the students. He smiles at me and says, “Welcome to the basketball club, Nina.” I feel my hands shake a little, but I smile back at him. He gives me a ball and shows me how to hold it with both hands. Other students bounce their balls on the floor and laugh together. When I try to bounce my ball, it goes a little to the side, but no one laughs at me. I take a deep breath, try again, and this time the ball comes back to my hand, so I feel scared and excited, but glad I came to the gym.",
    questions: [
      "Where does Nina go after school?",
      "What does the teacher in the red shirt say to Nina?",
      "What happens when Nina tries to bounce the ball again?",
    ],
    trueFalse: [
      { text: "Nina goes to the gym next to the playground.", answer: true },
      { text: "The teacher is angry when Nina comes into the gym.", answer: false },
      { text: "Nina feels scared and excited at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "After school, I walk to the big gym next to the playground.",
        jumbled: ["After", "big", "I", "to", "next", "the", "gym", "school,", "walk", "playground.", "the", "to"],
      },
      {
        target: "Inside the gym, the lights are bright, and a tall hoop hangs above the shiny court.",
        jumbled: ["gym,", "tall", "hoop", "Inside", "hangs", "the", "bright,", "the", "a", "lights", "shiny", "above", "are", "court.", "and"],
      },
      {
        target: "I take a deep breath, try again, and this time the ball comes back to my hand.",
        jumbled: ["again,", "deep", "I", "breath,", "take", "to", "and", "my", "comes", "back", "this", "time", "try", "hand.", "the", "ball"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about basketball and you.",
    mySentenceExample: "I feel shy, but I want to learn basketball in the gym.",
  },
  {
    number: 2,
    title: "Meeting the Basketball Coach",
    image: null,
    imageNote: "Nina sitting on a wooden bench with Coach Ben beside her, Mia and Jay running over to say hello, warm gym lighting.",
    story:
      "The next afternoon, I come to the gym a little early and sit on the wooden bench. The coach in the red shirt walks over to me and sits down beside me. He says, “My name is Coach Ben, and I am happy you joined the team.” He asks me my name, my class, and if I like sports. I tell him I am Nina, I am in class seven, and I want to learn basketball. Coach Ben smiles and says, “Everyone starts as a beginner, so do not worry.” Then two girls run over and say, “Hi, I'm Mia,” and “I'm Jay, welcome to the team.” We all shake hands, and the gym feels warmer and friendlier to me. When practice starts, I stand with Mia and Jay in the line. In that moment, I feel calm because now I know my coach and two new friends.",
    questions: [
      "What is the coach's name?",
      "What class is Nina in?",
      "Who are the two girls that say hello to Nina?",
    ],
    trueFalse: [
      { text: "Nina comes to the gym late.", answer: false },
      { text: "Coach Ben says everyone starts as a beginner.", answer: true },
      { text: "Nina feels calm at the end of the chapter.", answer: true },
    ],
    buildSentence: [
      {
        target: "The coach in the red shirt walks over to me and sits down beside me.",
        jumbled: ["red", "me", "walks", "coach", "me.", "The", "to", "and", "shirt", "in", "the", "down", "over", "sits", "beside"],
      },
      {
        target: "He says, “My name is Coach Ben, and I am happy you joined the team.”",
        jumbled: ["is", "He", "name", "Ben,", "“My", "says,", "and", "team.”", "I", "joined", "Coach", "am", "happy", "you", "the"],
      },
      {
        target: "In that moment, I feel calm because now I know my coach and two new friends.",
        jumbled: ["know", "calm", "moment,", "I", "coach", "because", "now", "feel", "my", "I", "that", "two", "and", "new", "In", "friends."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a coach or a teacher you like.",
    mySentenceExample: "My coach is kind and helps me learn.",
  },
  {
    number: 3,
    title: "Learning to Bounce and Dribble",
    image: null,
    imageNote: "Coach Ben demonstrating dribbling in the middle of the court while Nina and Mia copy him, Mia gently showing Nina how to soften her hand on the ball.",
    story:
      "Today, Coach Ben says we will learn how to bounce and dribble the ball. He stands in the middle of the court and shows us slowly with his own ball. “Push the ball down with your fingers, not your whole hand,” he tells us. I try to bounce the ball, but at first it jumps too high and goes away from me. Mia laughs kindly and says, “Keep your hand soft, like this.” I copy her, and slowly my ball stays close to my body. Then Coach Ben asks us to walk and bounce the ball at the same time. My first steps are slow, but I do not drop the ball this time. When I dribble all the way to the wall and back, Coach Ben claps for me. In that moment, I feel proud because I can bounce and walk with the ball.",
    questions: [
      "What does Coach Ben teach the team today?",
      "What does Mia tell Nina about her hand?",
      "What does Coach Ben do when Nina dribbles to the wall and back?",
    ],
    trueFalse: [
      { text: "The team learns to bounce and dribble the ball.", answer: true },
      { text: "Nina drops the ball every time she walks.", answer: false },
      { text: "Nina feels proud at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Push the ball down with your fingers, not your whole hand.",
        jumbled: ["down", "ball", "with", "not", "your", "Push", "hand.", "fingers,", "your", "the", "whole"],
      },
      {
        target: "I copy her, and slowly my ball stays close to my body.",
        jumbled: ["her,", "ball", "close", "my", "I", "to", "and", "stays", "body.", "copy", "slowly", "my"],
      },
      {
        target: "In that moment, I feel proud because I can bounce and walk with the ball.",
        jumbled: ["bounce", "because", "proud", "I", "feel", "moment,", "walk", "and", "can", "that", "with", "the", "I", "In", "ball."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about learning something new.",
    mySentenceExample: "I feel happy when I learn a new skill.",
  },
  {
    number: 4,
    title: "Shooting Practice at the Hoop",
    image: null,
    imageNote: "Nina bending her knees and shooting a basketball toward the hoop, Jay standing nearby giving advice, the ball mid-flight toward the ring.",
    story:
      "On Thursday, Coach Ben says it is time to shoot the ball at the hoop. He stands under the tall hoop and shows us how to hold the ball and look up. “Bend your knees, then push the ball up softly,” he tells the team. My first shot is too weak, and the ball does not reach the hoop. Jay stands next to me and says, “Try again, and use your legs, not only your arms.” I bend my knees, look at the hoop, and push the ball up with both hands. This time the ball flies higher and touches the ring, but it does not go in. On my next try, the ball drops through the hoop, and I hear a soft sound. My friends cheer for me, and I feel excited because I made my first basket today.",
    questions: [
      "What does Coach Ben teach on Thursday?",
      "What does Jay tell Nina to use?",
      "What happens on Nina's next try after touching the ring?",
    ],
    trueFalse: [
      { text: "Nina's first shot goes into the hoop.", answer: false },
      { text: "Jay tells Nina to use her legs, not only her arms.", answer: true },
      { text: "Nina feels excited because she makes her first basket.", answer: true },
    ],
    buildSentence: [
      {
        target: "Bend your knees, then push the ball up softly.",
        jumbled: ["knees,", "the", "then", "your", "up", "push", "Bend", "ball", "softly."],
      },
      {
        target: "I bend my knees, look at the hoop, and push the ball up with both hands.",
        jumbled: ["knees,", "the", "bend", "at", "look", "I", "hoop,", "up", "my", "push", "and", "ball", "with", "hands.", "the", "both"],
      },
      {
        target: "My friends cheer for me, and I feel excited because I made my first basket today.",
        jumbled: ["for", "cheer", "and", "excited", "friends", "me,", "I", "because", "My", "feel", "first", "I", "made", "basket", "my", "today."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about trying again after a mistake.",
    mySentenceExample: "I miss the ball, but I try again.",
  },
  {
    number: 5,
    title: "A Small Mistake in Practice",
    image: null,
    imageNote: "Nina having slipped on the gym floor during a small game, Coach Ben rushing over and Mia reaching out a hand to help her up, other players watching with concern.",
    story:
      "During practice, we play a small game with two teams on the court. I run fast to catch the ball, but I do not look down at my feet. Suddenly, I slip on the shiny floor and fall on my side. For a moment, my face feels hot because everyone can see me. Coach Ben runs to me quickly and asks, “Nina, are you okay?” I say yes, and Mia gives me her hand and helps me stand up. Coach Ben tells the team, “Falling is normal, so do not be afraid to try.” I brush the dust from my shorts and take a deep breath. Then I go back into the game and pass the ball to Jay. In that moment, I feel brave because a small mistake did not stop me.",
    questions: [
      "What does Nina forget to look at when she runs?",
      "Who helps Nina stand up?",
      "What does Coach Ben say about falling?",
    ],
    trueFalse: [
      { text: "Nina slips and falls on the court.", answer: true },
      { text: "Coach Ben is angry that Nina falls.", answer: false },
      { text: "Nina feels brave at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Suddenly, I slip on the shiny floor and fall on my side.",
        jumbled: ["on", "slip", "the", "I", "and", "Suddenly,", "fall", "shiny", "on", "floor", "my", "side."],
      },
      {
        target: "Coach Ben tells the team, “Falling is normal, so do not be afraid to try.”",
        jumbled: ["the", "tells", "“Falling", "Ben", "Coach", "team,", "normal,", "is", "not", "so", "do", "try.”", "be", "afraid", "to"],
      },
      {
        target: "In that moment, I feel brave because a small mistake did not stop me.",
        jumbled: ["brave", "a", "moment,", "because", "feel", "small", "I", "did", "mistake", "that", "not", "In", "me.", "stop"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small mistake you made.",
    mySentenceExample: "I make a mistake, but I do not give up.",
  },
  {
    number: 6,
    title: "Break Time Talk",
    image: null,
    imageNote: "Nina, Mia, and Jay sitting together on the gym bench during a break, sharing crackers and water, Coach Ben walking past in the background.",
    story:
      "After hard practice, we sit on the bench and drink water during our break. Mia opens her bag and shares some small crackers with the team. Jay talks about her favourite player and says, “She can jump so high and shoot from far away.” I tell them I do not know many players yet, but I want to learn more. Mia says, “We can watch a short game on my phone after school.” We laugh and talk about our own dreams in basketball. Coach Ben walks past us and says, “Good rest, team, you play well today.” The break feels short but happy, like a small party on the bench. When Coach Ben blows his whistle, we stand up and get ready again. In that moment, I feel warm inside because these teammates feel like real friends.",
    questions: [
      "What does Mia share with the team?",
      "What does Jay talk about during the break?",
      "What does Coach Ben say when he walks past them?",
    ],
    trueFalse: [
      { text: "The team drinks water during the break.", answer: true },
      { text: "Nina knows many basketball players already.", answer: false },
      { text: "Nina feels warm inside because her teammates feel like real friends.", answer: true },
    ],
    buildSentence: [
      {
        target: "Mia opens her bag and shares some small crackers with the team.",
        jumbled: ["her", "opens", "and", "bag", "small", "Mia", "some", "shares", "team.", "crackers", "with", "the"],
      },
      {
        target: "I tell them I do not know many players yet, but I want to learn more.",
        jumbled: ["them", "not", "players", "I", "know", "do", "many", "tell", "I", "yet,", "I", "but", "to", "want", "learn", "more."],
      },
      {
        target: "In that moment, I feel warm inside because these teammates feel like real friends.",
        jumbled: ["inside", "warm", "feel", "moment,", "I", "because", "feel", "teammates", "these", "that", "like", "real", "In", "friends."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about talking with friends after sport.",
    mySentenceExample: "I like to talk and rest with my friends.",
  },
  {
    number: 7,
    title: "Extra Practice After School",
    image: null,
    imageNote: "Nina, Mia, and Jay alone in the quiet gym after school, taking turns shooting at the hoop, Jay counting baskets out loud.",
    story:
      "On Friday, I stay in the gym for extra practice with Mia and Jay. The other students go home, so the big gym feels quiet and calm. We take three balls and stand in front of the tall hoop together. Mia says, “Let's count how many baskets we can make in five minutes.” I dribble, bend my knees, and shoot the ball as many times as I can. At first, I miss more than I make, but slowly my hands feel stronger. Jay counts my baskets out loud and says, “Nina, you are getting better every day.” We help each other pick up the balls and try again and again. When the extra practice ends, my arms are tired, but my heart is happy. In that moment, I feel proud because I work hard even when no one asks me to.",
    questions: [
      "Who stays for extra practice with Nina?",
      "What does Mia want the friends to count?",
      "What does Jay say about Nina?",
    ],
    trueFalse: [
      { text: "The gym is loud and full during extra practice.", answer: false },
      { text: "Nina misses more baskets at first.", answer: true },
      { text: "Nina feels proud because she works hard on her own.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Friday, I stay in the gym for extra practice with Mia and Jay.",
        jumbled: ["I", "gym", "stay", "Friday,", "practice", "the", "in", "for", "On", "extra", "with", "Mia", "and", "Jay."],
      },
      {
        target: "Jay counts my baskets out loud and says, “Nina, you are getting better every day.”",
        jumbled: ["my", "counts", "out", "Jay", "and", "baskets", "loud", "are", "says,", "“Nina,", "better", "you", "getting", "every", "day.”"],
      },
      {
        target: "In that moment, I feel proud because I work hard even when no one asks me to.",
        jumbled: ["proud", "work", "because", "I", "hard", "feel", "moment,", "I", "one", "even", "no", "that", "when", "asks", "In", "me", "to."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about working hard at something.",
    mySentenceExample: "I practise a lot because I want to be better.",
  },
  {
    number: 8,
    title: "Getting Ready for a Mini Game",
    image: null,
    imageNote: "The team gathered around Coach Ben and a small white board with arrows and circles, then putting their hands together in the middle of the court and shouting 'Team!'",
    story:
      "Next week, our team will play a mini game against another class in the gym. Coach Ben tells us to wear our team shirts and come early on game day. He shows us a simple plan on a small white board with arrows and circles. “Pass the ball, help each other, and do not be afraid,” he says to us. We practise passing and running in the right places on the court. Mia and I practise a quick pass near the hoop many times. Jay says, “If we play as one team, we can do our best.” After practice, we put our hands together in the middle and say, “Team!” I go home and put my clean team shirt on my chair for the game. In that moment, I feel nervous but ready because our team is prepared together.",
    questions: [
      "Who will the team play against next week?",
      "What does Coach Ben show on the small white board?",
      "What do the players say when they put their hands together?",
    ],
    trueFalse: [
      { text: "The mini game is against another class.", answer: true },
      { text: "Coach Ben tells the team to come late on game day.", answer: false },
      { text: "Nina feels nervous but ready at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Coach Ben tells us to wear our team shirts and come early on game day.",
        jumbled: ["us", "tells", "to", "Coach", "our", "Ben", "wear", "shirts", "team", "and", "early", "come", "day.", "on", "game"],
      },
      {
        target: "Pass the ball, help each other, and do not be afraid.",
        jumbled: ["the", "help", "ball,", "each", "Pass", "and", "not", "other,", "do", "afraid.", "be"],
      },
      {
        target: "In that moment, I feel nervous but ready because our team is prepared together.",
        jumbled: ["nervous", "ready", "feel", "but", "moment,", "I", "because", "team", "our", "that", "is", "prepared", "In", "together."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting ready for something important.",
    mySentenceExample: "I feel nervous, but I am ready for the game.",
  },
  {
    number: 9,
    title: "My First School Basketball Game",
    image: null,
    imageNote: "Nina shooting the ball into the basket during the mini game, the gym full of watching students, Mia and Jay running toward her with big smiles as the crowd cheers.",
    story:
      "Today is game day, and the gym is full of students who come to watch. My heart beats fast when I hear the loud voices and see the bright lights. Coach Ben says, “Just do your best, and remember to help your team.” When the game starts, I run, pass, and try to stay close to Mia and Jay. In the first half, the other class scores two baskets, and we feel a little worried. But Jay catches the ball and passes it to me near the hoop. I bend my knees, look up, and shoot the ball into the basket. The whole gym cheers, and my teammates hug me with big smiles. When the game ends, we do not win, but we play well and never give up. In that moment, I feel proud because I scored in my very first game.",
    questions: [
      "Why is the gym full today?",
      "Who passes the ball to Nina near the hoop?",
      "Does the team win the game?",
    ],
    trueFalse: [
      { text: "Many students come to watch the game.", answer: true },
      { text: "Nina misses her shot near the hoop.", answer: false },
      { text: "Nina feels proud because she scored in her first game.", answer: true },
    ],
    buildSentence: [
      {
        target: "When the game starts, I run, pass, and try to stay close to Mia and Jay.",
        jumbled: ["game", "starts,", "the", "run,", "When", "try", "pass,", "I", "stay", "and", "to", "close", "Mia", "to", "Jay.", "and"],
      },
      {
        target: "I bend my knees, look up, and shoot the ball into the basket.",
        jumbled: ["knees,", "bend", "up,", "my", "look", "I", "the", "and", "into", "shoot", "basket.", "ball", "the"],
      },
      {
        target: "In that moment, I feel proud because I scored in my very first game.",
        jumbled: ["proud", "because", "I", "feel", "moment,", "scored", "I", "very", "in", "my", "that", "first", "In", "game."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about doing your best.",
    mySentenceExample: "I do my best even when the game is hard.",
  },
  {
    number: 10,
    title: "Part of the Team",
    image: null,
    imageNote: "Nina, Mia, Jay, and Coach Ben with hands together in the middle of the gym court shouting 'Team!', Nina looking calm and happy under the tall hoop.",
    story:
      "On Monday, I walk into the gym, and it does not feel new or scary anymore. Mia waves at me, Jay throws me a ball, and Coach Ben smiles at the door. We start our practice, and my hands move with the ball more easily now. I can bounce, dribble, pass, and shoot, and I am not afraid to try. During a short break, Coach Ben says, “Nina, you are a real part of this team now.” I look around at the tall hoop, the shiny court, and my kind friends. I remember my first day, when my hands shook and the ball went to the side. Now I feel strong, calm, and happy in this same gym. At the end of practice, we put our hands together and shout, “Team!” In that moment, I feel proud because the basketball team truly feels like my place.",
    questions: [
      "How does the gym feel to Nina on Monday?",
      "What does Coach Ben say to Nina during the break?",
      "What does Nina remember from her first day?",
    ],
    trueFalse: [
      { text: "The gym feels new and scary to Nina now.", answer: false },
      { text: "Coach Ben says Nina is a real part of the team.", answer: true },
      { text: "Nina feels proud because the team feels like her place.", answer: true },
    ],
    buildSentence: [
      {
        target: "I can bounce, dribble, pass, and shoot, and I am not afraid to try.",
        jumbled: ["bounce,", "dribble,", "can", "pass,", "I", "shoot,", "and", "am", "and", "not", "I", "try.", "afraid", "to"],
      },
      {
        target: "Coach Ben says, “Nina, you are a real part of this team now.”",
        jumbled: ["says,", "Ben", "are", "“Nina,", "Coach", "a", "you", "part", "real", "this", "of", "now.”", "team"],
      },
      {
        target: "In that moment, I feel proud because the basketball team truly feels like my place.",
        jumbled: ["proud", "because", "feel", "moment,", "I", "team", "basketball", "the", "that", "truly", "like", "feels", "my", "In", "place."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a place where you feel you belong.",
    mySentenceExample: "The gym feels like my place now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

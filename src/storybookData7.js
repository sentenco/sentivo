// A1 Adults digital storybook, Book 7: "A Full and Good Week"
// Static content -- no Supabase, mirrors the pattern in storybookData6.js.
// Unlike Books 1-6 (teen narrators), this book's narrator is an adult
// office worker and stays gender-neutral throughout, matching the source
// text (no gendered pronoun is ever used for the narrator).
import coverImg from "./assets/storybook7/cover.jpeg";

export const STORYBOOK_TITLE = "A Full and Good Week";
export const COVER_IMAGE = coverImg;
export const COVER_IMAGE_NOTE =
  "The narrator sitting at a desk by a big office window on a Monday morning, coffee cup nearby, city skyline visible through the window, computer screen glowing softly.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "The narrator", role: "An office worker, new to the team", look: "Neutral business-casual clothing, calm and thoughtful expression, no gendered features emphasized -- the source text never assigns a pronoun to this character." },
  { name: "Dan", role: "The narrator's coworker at the next desk", look: "Short hair, button-up shirt sleeves rolled up, friendly and helpful." },
  { name: "Ms. Reyes", role: "The narrator's manager", look: "Blazer, hair in a neat bun, warm but professional demeanor." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Morning at the Office",
    image: null,
    imageNote: "The narrator sitting down at a desk by a big window on the fifth floor, opening a laptop, a coworker nearby smiling and saying good morning, city view through the window.",
    story:
      "Every weekday, I wake up at six o'clock in the morning. I wash my face, get dressed, and make a cup of coffee in the kitchen. While I eat bread and eggs, I look at my phone and check the time. At seven o'clock, I leave my apartment and walk to the bus stop near my street. The bus is full, but I find a seat by the window and watch the city go by. When I arrive at the office building, I take the lift to the fifth floor. My desk is next to a big window, and my computer is already on. I sit down, put my bag under the desk, and open my email. A coworker smiles at me and says, “Good morning,” and I smile back. As I start my work for the day, I feel calm, awake, and ready for the office.",
    questions: [
      "What does the writer drink in the kitchen?",
      "How does the writer go to work?",
      "What does the writer do when they sit at the desk?",
    ],
    trueFalse: [
      { text: "The writer walks to the bus stop near the street.", answer: true },
      { text: "The desk is next to a small door.", answer: false },
      { text: "The writer feels calm and ready at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "At seven o'clock, I leave my apartment and walk to the bus stop near my street.",
        jumbled: ["my", "bus", "leave", "seven", "I", "stop", "walk", "near", "my", "o'clock,", "apartment", "and", "the", "street.", "to", "At"],
      },
      {
        target: "When I arrive at the office building, I take the lift to the fifth floor.",
        jumbled: ["office", "the", "the", "take", "I", "fifth", "When", "building,", "arrive", "at", "floor.", "to", "lift", "I", "the"],
      },
      {
        target: "As I start my work for the day, I feel calm, awake, and ready for the office.",
        jumbled: ["the", "awake,", "calm,", "day,", "start", "ready", "and", "my", "office.", "for", "the", "As", "feel", "I", "I", "work", "for"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your morning before work.",
    mySentenceExample: "I drink coffee before I go to work.",
  },
  {
    number: 2,
    title: "Getting Ready and Leaving Home",
    image: null,
    imageNote: "The narrator standing in front of a mirror in a small apartment, checking a bag for phone, keys, and an office card, a grey sky visible through the window.",
    story:
      "On Tuesday, my alarm rings at six o'clock, and I turn it off slowly. I stay in bed for one minute, then I get up and open the curtains. The sky is grey, so I choose a warm jacket for the cool morning. I brush my teeth, wash my face, and put on my clean work clothes. In the kitchen, I make coffee and eat a small bowl of oatmeal with fruit. Before I leave, I check my bag for my phone, my keys, and my office card. I look in the mirror one time and take a deep breath for the day. Then I put on my shoes and lock the apartment door behind me. The hallway is quiet, and I walk down the stairs to the street. As I step outside into the cool air, I feel fresh and ready to go to work.",
    questions: [
      "What time does the alarm ring?",
      "What does the writer eat for breakfast?",
      "What three things does the writer check in the bag?",
    ],
    trueFalse: [
      { text: "The writer stays in bed for one minute after the alarm.", answer: true },
      { text: "The writer forgets to check the bag.", answer: false },
      { text: "The writer feels fresh and ready at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "The sky is grey, so I choose a warm jacket for the cool morning.",
        jumbled: ["sky", "grey,", "is", "The", "choose", "so", "a", "I", "jacket", "warm", "cool", "the", "for", "morning."],
      },
      {
        target: "Before I leave, I check my bag for my phone, my keys, and my office card.",
        jumbled: ["leave,", "I", "Before", "check", "bag", "my", "I", "for", "phone,", "my", "keys,", "my", "and", "card.", "office", "my"],
      },
      {
        target: "As I step outside into the cool air, I feel fresh and ready to go to work.",
        jumbled: ["step", "I", "outside", "As", "cool", "into", "the", "air,", "feel", "I", "fresh", "ready", "and", "go", "to", "to", "work."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting ready in the morning.",
    mySentenceExample: "I put on my work clothes and eat breakfast.",
  },
  {
    number: 3,
    title: "Going to Work by Bus",
    image: null,
    imageNote: "The narrator standing on a full city bus, giving up a seat to an elderly man, other passengers reading or listening to music, city street visible through the window.",
    story:
      "Every morning, I walk to the bus stop at the end of my street. Many people wait there, so I stand in line and look at my phone. When the bus comes, the doors open, and I tap my card to pay. The bus is warm, and I find a seat near the middle by the window. I put my bag on my lap and watch the shops and cars go by. Some people read books, and some people listen to music with headphones. At one stop, an old man gets on, so I stand up and give him my seat. He says, “Thank you,” and I smile and hold the bar with my hand. After about twenty minutes, the bus stops near my office building. As I step off the bus, I feel awake and ready to start my work.",
    questions: [
      "How does the writer pay for the bus?",
      "Why does the writer stand up on the bus?",
      "How long is the bus ride?",
    ],
    trueFalse: [
      { text: "The writer taps a card to pay for the bus.", answer: true },
      { text: "The writer keeps the seat when the old man gets on.", answer: false },
      { text: "The writer feels awake and ready at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "When the bus comes, the doors open, and I tap my card to pay.",
        jumbled: ["bus", "the", "When", "comes,", "doors", "the", "open,", "I", "and", "my", "tap", "to", "card", "pay."],
      },
      {
        target: "At one stop, an old man gets on, so I stand up and give him my seat.",
        jumbled: ["one", "At", "an", "stop,", "man", "old", "on,", "gets", "I", "so", "up", "stand", "give", "and", "seat.", "my", "him"],
      },
      {
        target: "As I step off the bus, I feel awake and ready to start my work.",
        jumbled: ["step", "I", "off", "As", "bus,", "the", "feel", "I", "awake", "ready", "and", "start", "to", "work.", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you travel to work or school.",
    mySentenceExample: "I go to work by bus every morning.",
  },
  {
    number: 4,
    title: "Starting the Workday",
    image: null,
    imageNote: "The narrator sitting at a desk writing a task list on a yellow paper note, a mug of tea nearby, coworker Dan at the next desk asking how the day is going.",
    story:
      "When I arrive at the office, I say good morning to the people near the door. I walk to my desk, sit down, and turn on my computer screen. First, I open my email and read the new messages from last night. My manager, Ms. Reyes, sends a short message about our work for today. I write a small list of my tasks on a yellow paper note. Then I make a cup of tea in the small office kitchen and come back to my desk. My coworker Dan sits next to me and asks, “How are you today?” I say, “I am good, thank you,” and we both start our work. The office is quiet, and I can hear soft sounds of keyboards. As I begin my first task, I feel focused and ready for a busy day.",
    questions: [
      "What does the writer do first at the desk?",
      "Who sends a message about the work for today?",
      "Where does the writer make a cup of tea?",
    ],
    trueFalse: [
      { text: "The writer opens email first at the desk.", answer: true },
      { text: "Ms. Reyes is the writer's coworker at the next desk.", answer: false },
      { text: "The writer feels focused and ready at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I walk to my desk, sit down, and turn on my computer screen.",
        jumbled: ["to", "walk", "desk,", "my", "I", "down,", "sit", "and", "on", "turn", "computer", "my", "screen."],
      },
      {
        target: "I write a small list of my tasks on a yellow paper note.",
        jumbled: ["a", "write", "list", "small", "I", "tasks", "of", "my", "a", "on", "paper", "yellow", "note."],
      },
      {
        target: "As I begin my first task, I feel focused and ready for a busy day.",
        jumbled: ["begin", "I", "first", "As", "task,", "my", "feel", "I", "focused", "ready", "and", "a", "for", "day.", "busy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how you start your workday.",
    mySentenceExample: "I check my email when I start work.",
  },
  {
    number: 5,
    title: "Morning Tasks at My Desk",
    image: null,
    imageNote: "The narrator on the phone at the desk, a report open on the computer screen, a task list note with crossed-off lines, Dan nearby being shown a file.",
    story:
      "This morning, I have three important tasks on my list to finish. First, I write a short report about the work from last week. I type carefully and check my words so there are no mistakes. Then I call a customer to answer a simple question about their order. I speak slowly and clearly, and the customer says, “Thank you for your help.” After the call, I send two emails to my team about our next meeting. Dan asks me a question, and I show him how to open the right file. Time passes quickly, and soon it is almost twelve o'clock. I cross out each task on my note with a happy line. As I finish my morning work, I feel proud because I did everything on my list.",
    questions: [
      "How many tasks does the writer have on the list?",
      "What does the writer do first?",
      "What does the customer say after the phone call?",
    ],
    trueFalse: [
      { text: "The writer has three tasks to finish.", answer: true },
      { text: "The writer makes many mistakes in the report.", answer: false },
      { text: "The writer feels proud after finishing the morning work.", answer: true },
    ],
    buildSentence: [
      {
        target: "I type carefully and check my words so there are no mistakes.",
        jumbled: ["carefully", "type", "I", "check", "and", "words", "my", "there", "so", "no", "are", "mistakes."],
      },
      {
        target: "Dan asks me a question, and I show him how to open the right file.",
        jumbled: ["me", "asks", "a", "Dan", "and", "question,", "show", "I", "how", "him", "open", "to", "right", "the", "file."],
      },
      {
        target: "As I finish my morning work, I feel proud because I did everything on my list.",
        jumbled: ["finish", "I", "morning", "As", "work,", "my", "feel", "I", "proud", "because", "did", "I", "everything", "list.", "my", "on"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a task you do at work.",
    mySentenceExample: "I write reports and answer emails at work.",
  },
  {
    number: 6,
    title: "Lunch Break with Coworkers",
    image: null,
    imageNote: "The narrator, Dan, and Ms. Reyes sitting together at a table in a small office canteen with plates of rice and chicken, everyone laughing at a story.",
    story:
      "At twelve o'clock, my manager says, “It is time for lunch, everyone.” I stand up, stretch my arms, and turn off my computer screen. Dan asks me, “Do you want to eat lunch with us today?” I say yes, and we walk together to the small canteen on the ground floor. The room smells of warm rice, soup, and fresh bread. I buy a plate of rice and chicken and a bottle of water. We sit at a table near the window and talk about our weekend plans. Ms. Reyes tells a funny story, and everyone at the table laughs. For thirty minutes, I forget about work and just enjoy the food and my coworkers. As I finish my lunch, I feel relaxed and happy to work with kind people.",
    questions: [
      "What time is the lunch break?",
      "Where do they go for lunch?",
      "What does the writer buy to eat?",
    ],
    trueFalse: [
      { text: "Dan invites the writer to eat lunch with the coworkers.", answer: true },
      { text: "The writer eats lunch alone at the desk.", answer: false },
      { text: "The writer feels relaxed and happy at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I say yes, and we walk together to the small canteen on the ground floor.",
        jumbled: ["yes,", "say", "I", "we", "and", "together", "walk", "small", "to", "the", "canteen", "ground", "on", "the", "floor."],
      },
      {
        target: "We sit at a table near the window and talk about our weekend plans.",
        jumbled: ["at", "sit", "a", "We", "near", "table", "the", "and", "window", "about", "talk", "weekend", "our", "plans."],
      },
      {
        target: "As I finish my lunch, I feel relaxed and happy to work with kind people.",
        jumbled: ["finish", "I", "lunch,", "As", "my", "feel", "I", "relaxed", "happy", "and", "work", "to", "kind", "with", "people."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your lunch break.",
    mySentenceExample: "I eat lunch with my coworkers at noon.",
  },
  {
    number: 7,
    title: "A Busy Afternoon",
    image: null,
    imageNote: "The narrator standing and speaking to a small team in a meeting room, Ms. Reyes nodding encouragingly, sticky notes and a laptop on the table.",
    story:
      "After lunch, the afternoon is very busy at the office. My phone rings, my email box is full, and there is a meeting at two o'clock. I take a deep breath and start with the most important task first. In the meeting, my team talks about a new project for next month. Ms. Reyes asks me to share my ideas, so I speak clearly to the group. My hands feel a little nervous, but my coworkers listen and nod their heads. After the meeting, I return to my desk and answer many emails. Dan helps me carry some heavy boxes to the storage room. We work fast, but we still smile and help each other along the way. As the afternoon ends, I feel tired but proud because we finish so much work together.",
    questions: [
      "What time is the meeting?",
      "What does Ms. Reyes ask the writer to share?",
      "Who helps the writer carry the heavy boxes?",
    ],
    trueFalse: [
      { text: "The afternoon is very busy at the office.", answer: true },
      { text: "The writer sits quietly and does no work in the meeting.", answer: false },
      { text: "The writer feels tired but proud at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I take a deep breath and start with the most important task first.",
        jumbled: ["a", "take", "deep", "I", "and", "breath", "start", "the", "with", "important", "most", "first.", "task"],
      },
      {
        target: "Ms. Reyes asks me to share my ideas, so I speak clearly to the group.",
        jumbled: ["me", "asks", "Reyes", "Ms.", "share", "to", "ideas,", "my", "I", "so", "speak", "clearly", "group.", "the", "to"],
      },
      {
        target: "As the afternoon ends, I feel tired but proud because we finish so much work together.",
        jumbled: ["afternoon", "the", "ends,", "As", "feel", "I", "tired", "proud", "but", "because", "finish", "we", "much", "so", "together.", "work"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a busy day at work.",
    mySentenceExample: "I work fast on a busy afternoon.",
  },
  {
    number: 8,
    title: "A Small Problem at Work",
    image: null,
    imageNote: "The narrator looking worried at a dark computer screen, Dan leaning over to help, a tech helper checking cables behind the desk.",
    story:
      "Late in the day, my computer suddenly stops and the screen goes dark. I feel worried because I have important work on the screen. I try to turn it on again, but nothing happens on the black screen. Dan sees my face and asks, “Are you okay? What is the problem?” I tell him my computer is not working, and he comes to help me. Together, we call the office helper, Mr. Tan, from the tech team. Mr. Tan checks the cables and finds one that is loose behind the desk. He plugs it in again, and the screen turns on with all my work still there. I feel so relieved, and I say, “Thank you very much for your help.” As I go back to work, I feel calm because a small problem is easy to fix with help.",
    questions: [
      "What is the problem with the writer's computer?",
      "Who does the writer call for help?",
      "What does Mr. Tan find behind the desk?",
    ],
    trueFalse: [
      { text: "The writer's computer screen goes dark.", answer: true },
      { text: "The writer loses all the work forever.", answer: false },
      { text: "The writer feels calm at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Dan sees my face and asks, “Are you okay? What is the problem?”",
        jumbled: ["my", "sees", "face", "Dan", "asks,", "and", "you", "“Are", "okay?", "is", "What", "problem?”", "the"],
      },
      {
        target: "He plugs it in again, and the screen turns on with all my work still there.",
        jumbled: ["it", "plugs", "in", "He", "and", "again,", "screen", "the", "on", "turns", "all", "with", "work", "my", "there.", "still"],
      },
      {
        target: "As I go back to work, I feel calm because a small problem is easy to fix with help.",
        jumbled: ["go", "I", "back", "As", "work,", "to", "feel", "I", "calm", "because", "small", "a", "is", "problem", "to", "easy", "help.", "fix", "with"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a small problem you solved.",
    mySentenceExample: "I ask for help when I have a problem at work.",
  },
  {
    number: 9,
    title: "Finishing Work and Going Home",
    image: null,
    imageNote: "The narrator tidying a desk and saving files, putting on a jacket, waving goodbye to Dan and Ms. Reyes near the office door, orange evening sky through the window.",
    story:
      "At five o'clock, the workday is almost over, and I check my task list. I am happy because I finished every task on my note today. I save all my files and close the programs on my computer. Then I tidy my desk and put my papers in a neat pile. I say, “Goodbye, see you tomorrow,” to Dan and Ms. Reyes. I put on my jacket, take my bag, and walk to the lift with a smile. Outside, the sky is orange, and the evening air feels cool and fresh. I walk to the bus stop and wait with the other tired workers. On the bus home, I close my eyes for a moment and think about my day. As I ride home, I feel satisfied because I did good work and now I can rest.",
    questions: [
      "What time is it when the workday is almost over?",
      "What does the writer do before leaving the desk?",
      "What colour is the sky outside?",
    ],
    trueFalse: [
      { text: "The writer finishes every task today.", answer: true },
      { text: "The writer leaves the desk messy and full of papers.", answer: false },
      { text: "The writer feels satisfied at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I save all my files and close the programs on my computer.",
        jumbled: ["all", "save", "files", "my", "I", "close", "and", "programs", "the", "my", "on", "computer."],
      },
      {
        target: "I put on my jacket, take my bag, and walk to the lift with a smile.",
        jumbled: ["on", "put", "my", "I", "jacket,", "bag,", "my", "take", "walk", "and", "lift", "to", "the", "a", "with", "smile."],
      },
      {
        target: "As I ride home, I feel satisfied because I did good work and now I can rest.",
        jumbled: ["ride", "I", "home,", "As", "feel", "I", "satisfied", "because", "did", "I", "work", "good", "now", "and", "can", "I", "rest."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about the end of your workday.",
    mySentenceExample: "I feel happy when I finish my work.",
  },
  {
    number: 10,
    title: "A Full and Good Week",
    image: null,
    imageNote: "The narrator sitting at the desk on Friday afternoon, Ms. Reyes walking over with a warm smile to say something kind, Dan nearby, a bright evening sky outside the office window.",
    story:
      "On Friday afternoon, I sit at my desk and think about the whole week. On Monday, I felt a little nervous, but now the office feels like home. This week, I wrote reports, answered calls, and joined an important meeting. I helped Dan with his files, and he helped me carry heavy boxes. When my computer had a problem, kind coworkers helped me fix it fast. Ms. Reyes walks to my desk and says, “You did great work this week.” I smile and say, “Thank you, I really enjoy working with this team.” I turn off my computer and say goodbye to everyone for the weekend. Outside, the evening is bright, and I feel light and free. As I walk home, I feel proud and thankful because I had a full and good week at work.",
    questions: [
      "How did the writer feel on Monday?",
      "What does Ms. Reyes say on Friday afternoon?",
      "How does the writer feel as they walk home?",
    ],
    trueFalse: [
      { text: "On Monday, the writer felt a little nervous.", answer: true },
      { text: "Ms. Reyes says the writer did bad work this week.", answer: false },
      { text: "The writer feels proud and thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "This week, I wrote reports, answered calls, and joined an important meeting.",
        jumbled: ["week,", "This", "wrote", "I", "answered", "reports,", "calls,", "and", "an", "joined", "meeting.", "important"],
      },
      {
        target: "Ms. Reyes walks to my desk and says, “You did great work this week.”",
        jumbled: ["to", "walks", "Reyes", "Ms.", "desk", "my", "says,", "and", "did", "“You", "work", "great", "week.”", "this"],
      },
      {
        target: "As I walk home, I feel proud and thankful because I had a full and good week at work.",
        jumbled: ["walk", "I", "home,", "As", "feel", "I", "proud", "thankful", "and", "because", "had", "I", "full", "a", "good", "and", "at", "week", "work."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a good week you had.",
    mySentenceExample: "I feel proud when I have a good week at work.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

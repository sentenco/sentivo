// A1 Adults digital storybook, Book 11: "A Happier Free Time"
// Static content -- no Supabase, mirrors the pattern in storybookData10.js.
// Like Books 7-10, this narrator is an adult and stays gender-neutral
// throughout, matching the source text. Friend Leo is ALSO never gendered
// by the source text (no "he"/"his" ever used), so Leo's CHARACTERS entry
// stays neutral too, same as Maya in Book 9.
// Images are not generated yet (Midjourney subscription paused as of 2026-07-21).
// image/coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook11/
// once art exists, same as storybookData.js / storybookData2.js do.

export const STORYBOOK_TITLE = "A Happier Free Time";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "The narrator sitting comfortably in a cozy city apartment in the evening, a small handwritten list of hobbies on the table, warm lamp light and a window showing the evening city outside.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "The narrator", role: "An adult building more balance and fun into free time", look: "Simple comfortable clothing, tired-but-hopeful expression at first, no gendered features emphasized -- the source text never assigns a pronoun to this character." },
  { name: "Leo", role: "The narrator's friend, meets for coffee", look: "Casual comfortable clothing, warm and easygoing -- the source text never assigns a pronoun to Leo either, so keep this character neutral too." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Free Time After Work",
    image: null,
    imageNote: "The narrator sitting on a sofa in the evening writing a small list of hobbies on paper, phone set aside, warm lamp light in a cozy apartment.",
    story:
      "Every day, I work hard from morning until the evening. When I come home, I feel tired, and my mind is full of work. For a long time, I only sat on the sofa and looked at my phone. But one evening, I think, “I want to do more with my free time.” Free time is a small gift after a busy day at work. I decide to try new things that make me feel happy and calm. I want to walk, cook, read, and meet my friends more often. My friend Leo says, “Free time is for rest and fun, not more stress.” I write a small list of hobbies I want to try after work. As I look at my list, I feel excited because my free time can be happy and full.",
    questions: [
      "How does the writer feel when coming home from work?",
      "What does the writer decide to do with free time?",
      "What does Leo say about free time?",
    ],
    trueFalse: [
      { text: "The writer works hard from morning until evening.", answer: true },
      { text: "The writer wants to only sit and look at the phone forever.", answer: false },
      { text: "The writer feels excited about free time at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Free time is a small gift after a busy day at work.",
        jumbled: ["time", "Free", "a", "is", "gift", "small", "a", "after", "day", "busy", "work.", "at"],
      },
      {
        target: "I want to walk, cook, read, and meet my friends more often.",
        jumbled: ["want", "to", "I", "cook,", "walk,", "read,", "meet", "and", "friends", "my", "often.", "more"],
      },
      {
        target: "As I look at my list, I feel excited because my free time can be happy and full.",
        jumbled: ["look", "I", "at", "As", "list,", "my", "feel", "I", "excited", "because", "free", "my", "can", "time", "happy", "be", "full.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about your free time.",
    mySentenceExample: "In my free time, I like to walk and read.",
  },
  {
    number: 2,
    title: "A Quiet Evening at Home",
    image: null,
    imageNote: "The narrator sitting in a favourite chair by a window with a warm lamp, a cup of tea and an open book nearby, dark calm street visible outside.",
    story:
      "Tonight, I want a quiet and calm evening in my home. After dinner, I wash the dishes and clean my small kitchen. Then I turn off the big lights and turn on a soft, warm lamp. I make a cup of tea and sit in my favourite chair by the window. I do not look at my phone or my work emails tonight. Instead, I open a simple book and read a few quiet pages. Outside, the city is dark, and the street is calm and peaceful. I feel my body relax and my mind become slow and soft. A quiet evening at home is simple, but it feels very good. As I sit in the warm light, I feel calm because I give myself time to rest.",
    questions: [
      "What does the writer make to drink in the evening?",
      "What does the writer read?",
      "How does the writer feel at the end?",
    ],
    trueFalse: [
      { text: "The writer wants a calm evening at home.", answer: true },
      { text: "The writer reads work emails all night.", answer: false },
      { text: "The writer feels calm because they give themselves time to rest.", answer: true },
    ],
    buildSentence: [
      {
        target: "I make a cup of tea and sit in my favourite chair by the window.",
        jumbled: ["a", "make", "cup", "I", "of", "and", "tea", "in", "sit", "favourite", "my", "chair", "the", "by", "window."],
      },
      {
        target: "Instead, I open a simple book and read a few quiet pages.",
        jumbled: ["I", "Instead,", "open", "simple", "a", "book", "read", "and", "few", "a", "pages.", "quiet"],
      },
      {
        target: "As I sit in the warm light, I feel calm because I give myself time to rest.",
        jumbled: ["sit", "I", "in", "As", "warm", "the", "light,", "feel", "I", "calm", "because", "give", "I", "time", "myself", "rest.", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a calm evening.",
    mySentenceExample: "I drink tea and read a book at night.",
  },
  {
    number: 3,
    title: "A Walk in the Park",
    image: null,
    imageNote: "The narrator walking slowly along a path in a green park in the evening, tall trees around, children playing with a ball and older people sitting and talking in the background.",
    story:
      "On a nice evening, I decide to take a walk in the park. I put on comfortable shoes and a light jacket for the cool air. The park is near my home, so I walk there in just a few minutes. Many people walk, run, or sit on the green grass with their families. I walk slowly along the path and look at the tall green trees. Some children play with a ball, and some old people sit and talk. I breathe the fresh air and feel my body become light and free. I do not think about work; I only enjoy the calm park. A walk in the park is free, easy, and good for my health. When I walk home, I feel fresh and happy because a simple walk lifts my mood.",
    questions: [
      "What does the writer put on before the walk?",
      "What do the children do in the park?",
      "How does the writer feel when walking home?",
    ],
    trueFalse: [
      { text: "The writer takes a walk in the park in the evening.", answer: true },
      { text: "The writer thinks about work during the whole walk.", answer: false },
      { text: "The writer feels fresh and happy after the walk.", answer: true },
    ],
    buildSentence: [
      {
        target: "The park is near my home, so I walk there in just a few minutes.",
        jumbled: ["park", "near", "is", "The", "home,", "my", "walk", "so", "there", "I", "just", "in", "few", "a", "minutes."],
      },
      {
        target: "I breathe the fresh air and feel my body become light and free.",
        jumbled: ["breathe", "I", "the", "air", "fresh", "feel", "and", "body", "my", "become", "light", "free.", "and"],
      },
      {
        target: "When I walk home, I feel fresh and happy because a simple walk lifts my mood.",
        jumbled: ["I", "walk", "home,", "When", "feel", "I", "fresh", "happy", "and", "because", "simple", "a", "lifts", "walk", "mood.", "my"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about walking in your free time.",
    mySentenceExample: "I walk in the park to feel calm and free.",
  },
  {
    number: 4,
    title: "Watching a Movie",
    image: null,
    imageNote: "The narrator sitting on a soft sofa in a dim living room with a bowl of popcorn and a glass of juice, watching a movie on a bright screen.",
    story:
      "On Friday night, I want to relax and watch a good movie at home. I make some popcorn in a bowl and pour a cool glass of juice. I turn off the big lights and sit on my soft, comfortable sofa. I choose a fun and simple movie that I really want to see. The story is exciting, and I forget about my busy week at work. I laugh at the funny parts and feel surprised at the exciting parts. The movie takes me to a new world for about two hours. I eat my popcorn slowly and enjoy every minute of the film. When the movie ends, I feel happy and calm inside. As I turn off the screen, I feel relaxed because a good movie is a nice, easy hobby.",
    questions: [
      "What does the writer make to eat while watching the movie?",
      "When does the writer watch the movie?",
      "How does the writer feel when the movie ends?",
    ],
    trueFalse: [
      { text: "The writer watches a movie on Friday night.", answer: true },
      { text: "The movie is boring and the writer turns it off.", answer: false },
      { text: "The writer feels relaxed because a good movie is a nice hobby.", answer: true },
    ],
    buildSentence: [
      {
        target: "I make some popcorn in a bowl and pour a cool glass of juice.",
        jumbled: ["some", "make", "popcorn", "I", "a", "in", "and", "bowl", "pour", "cool", "a", "of", "glass", "juice."],
      },
      {
        target: "The story is exciting, and I forget about my busy week at work.",
        jumbled: ["story", "is", "The", "exciting,", "I", "and", "about", "forget", "busy", "my", "at", "week", "work."],
      },
      {
        target: "As I turn off the screen, I feel relaxed because a good movie is a nice, easy hobby.",
        jumbled: ["turn", "I", "off", "As", "screen,", "the", "feel", "I", "relaxed", "because", "good", "a", "is", "movie", "nice,", "a", "hobby.", "easy"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a movie you like.",
    mySentenceExample: "I watch a fun movie to relax on the weekend.",
  },
  {
    number: 5,
    title: "Cooking as a Hobby",
    image: null,
    imageNote: "The narrator wearing a clean apron in a kitchen, cutting vegetables on a wooden board, a phone with a recipe propped nearby, rice and chicken cooking on the stove.",
    story:
      "This weekend, I want to try cooking as a fun new hobby. I go to the market and buy fresh vegetables, rice, and chicken. In my kitchen, I wash my hands and put on a clean apron. I cut the vegetables into small pieces on a wooden board. I follow a simple recipe on my phone, step by step. I cook the rice, fry the chicken, and mix the colourful vegetables. My kitchen smells warm and delicious, like a small restaurant. I taste the food and add a little salt to make it better. When the meal is ready, I sit down and eat my own cooking. As I enjoy my meal, I feel proud because I made something good with my own hands.",
    questions: [
      "What does the writer buy at the market?",
      "What does the writer follow to cook?",
      "How does the writer feel while eating the meal?",
    ],
    trueFalse: [
      { text: "The writer tries cooking as a new hobby.", answer: true },
      { text: "The writer buys only sweets at the market.", answer: false },
      { text: "The writer feels proud because they cooked with their own hands.", answer: true },
    ],
    buildSentence: [
      {
        target: "I go to the market and buy fresh vegetables, rice, and chicken.",
        jumbled: ["go", "to", "I", "market", "the", "buy", "and", "vegetables,", "fresh", "rice,", "chicken.", "and"],
      },
      {
        target: "I follow a simple recipe on my phone, step by step.",
        jumbled: ["follow", "I", "a", "recipe", "simple", "my", "on", "phone,", "by", "step", "step."],
      },
      {
        target: "As I enjoy my meal, I feel proud because I made something good with my own hands.",
        jumbled: ["enjoy", "I", "my", "As", "meal,", "feel", "I", "proud", "because", "made", "I", "good", "something", "my", "with", "hands.", "own"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about cooking.",
    mySentenceExample: "I like to cook simple food at home.",
  },
  {
    number: 6,
    title: "Listening to Music",
    image: null,
    imageNote: "The narrator sitting on a sofa with eyes closed, listening to music with a small speaker or headphones nearby, soft warm lighting in the room.",
    story:
      "In the evening, I like to listen to music to relax my mind. I sit on my sofa, close my eyes, and play my favourite songs. The soft music fills my room and makes me feel calm and happy. Some songs are slow and quiet, and some songs are fun and fast. When a fast song plays, I move my head and tap my feet. I remember happy times from my life when I hear an old song. Music helps me forget my stress from the busy day at work. Sometimes I sing along softly to the words I know well. Listening to music is a simple and free hobby that I love. As the music plays, I feel peaceful because it fills my heart with good feelings.",
    questions: [
      "When does the writer like to listen to music?",
      "What does the writer do when a fast song plays?",
      "How does the writer feel as the music plays?",
    ],
    trueFalse: [
      { text: "The writer listens to music to relax the mind.", answer: true },
      { text: "Music makes the writer feel more stressed.", answer: false },
      { text: "The writer feels peaceful as the music plays.", answer: true },
    ],
    buildSentence: [
      {
        target: "I sit on my sofa, close my eyes, and play my favourite songs.",
        jumbled: ["on", "sit", "I", "sofa,", "my", "close", "eyes,", "my", "play", "and", "favourite", "my", "songs."],
      },
      {
        target: "Music helps me forget my stress from the busy day at work.",
        jumbled: ["helps", "Music", "me", "my", "forget", "from", "stress", "busy", "the", "at", "day", "work."],
      },
      {
        target: "As the music plays, I feel peaceful because it fills my heart with good feelings.",
        jumbled: ["music", "the", "plays,", "As", "feel", "I", "peaceful", "because", "fills", "it", "heart", "my", "good", "with", "feelings."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about music you like.",
    mySentenceExample: "I listen to soft music to relax.",
  },
  {
    number: 7,
    title: "Meeting a Friend for Coffee",
    image: null,
    imageNote: "The narrator and Leo sitting at a table by a big sunny café window, cups of coffee and tea between them, both laughing mid-conversation.",
    story:
      "On Saturday afternoon, I meet my friend Leo for coffee. We choose a small café near the park with big, sunny windows. I order a warm coffee, and Leo orders a cup of tea. We sit at a table by the window and talk about our week. Leo tells me a funny story, and I laugh out loud. I tell him about my new hobbies, like cooking and walking. We talk about our dreams, our families, and our plans. The time passes quickly because we enjoy each other's company. It feels so good to talk with a real friend, not a phone. As I finish my coffee, I feel happy because good friends make free time special.",
    questions: [
      "Who does the writer meet for coffee?",
      "What does the writer order at the café?",
      "What do the writer and Leo talk about?",
    ],
    trueFalse: [
      { text: "The writer meets Leo for coffee on Saturday.", answer: true },
      { text: "The writer and Leo do not talk to each other.", answer: false },
      { text: "The writer feels happy because good friends make free time special.", answer: true },
    ],
    buildSentence: [
      {
        target: "We choose a small café near the park with big, sunny windows.",
        jumbled: ["choose", "We", "a", "café", "small", "the", "near", "park", "big,", "with", "windows.", "sunny"],
      },
      {
        target: "We sit at a table by the window and talk about our week.",
        jumbled: ["sit", "at", "We", "a", "by", "table", "the", "window", "talk", "and", "our", "about", "week."],
      },
      {
        target: "As I finish my coffee, I feel happy because good friends make free time special.",
        jumbled: ["finish", "I", "my", "As", "coffee,", "feel", "I", "happy", "because", "friends", "good", "free", "make", "time", "special."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a friend.",
    mySentenceExample: "I meet my friend for coffee on the weekend.",
  },
  {
    number: 8,
    title: "Trying a New Class",
    image: null,
    imageNote: "The narrator sitting at a table in a small art classroom with pencils and paper, drawing a bowl of colourful fruit, a kind teacher nearby offering guidance.",
    story:
      "This week, I decide to try a new class in my free time. I find a small art class in a building near my office. On the first day, I feel a little nervous, but also excited to learn. The teacher is kind and shows us how to draw simple pictures. I sit next to a friendly woman who is also a beginner like me. We use pencils and paper to draw a bowl of colourful fruit. At first, my drawing is not good, but I do not give up. The teacher says, “Everyone learns step by step, so keep trying.” Slowly, my drawing becomes better, and I feel proud of my work. As I leave the class, I feel happy because I learn something new and fun.",
    questions: [
      "What kind of class does the writer try?",
      "What do they draw in the class?",
      "What does the teacher say when the writer's drawing is not good?",
    ],
    trueFalse: [
      { text: "The writer tries an art class.", answer: true },
      { text: "The writer gives up because the first drawing is not good.", answer: false },
      { text: "The writer feels happy because they learn something new.", answer: true },
    ],
    buildSentence: [
      {
        target: "I find a small art class in a building near my office.",
        jumbled: ["find", "I", "a", "art", "small", "in", "class", "a", "building", "my", "near", "office."],
      },
      {
        target: "We use pencils and paper to draw a bowl of colourful fruit.",
        jumbled: ["use", "We", "and", "pencils", "paper", "draw", "to", "bowl", "a", "colourful", "of", "fruit."],
      },
      {
        target: "As I leave the class, I feel happy because I learn something new and fun.",
        jumbled: ["leave", "I", "the", "As", "class,", "feel", "I", "happy", "because", "learn", "I", "something", "new", "fun.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a class you want to try.",
    mySentenceExample: "I want to try an art class in my free time.",
  },
  {
    number: 9,
    title: "A Relaxing Weekend",
    image: null,
    imageNote: "A gentle montage feel in one scene -- the narrator waking up late with coffee in bed, sunlight streaming in, a book and cleaning supplies visible nearby suggesting a slow relaxed weekend.",
    story:
      "This weekend, I want to relax and enjoy my free time slowly. On Saturday morning, I wake up late and drink my coffee in bed. I do not rush, and I do not look at my work emails. In the afternoon, I take a walk in the park and enjoy the sun. Later, I cook a simple, healthy meal and eat it near the window. In the evening, I watch a movie and listen to soft music. On Sunday, I meet Leo, and we talk and laugh at a café. I read my book, clean my home, and rest on my sofa. This weekend feels full of small, happy, and calm moments. As the weekend ends, I feel rested because I used my free time in a good way.",
    questions: [
      "What does the writer do on Saturday morning?",
      "Who does the writer meet on Sunday?",
      "How does the writer feel as the weekend ends?",
    ],
    trueFalse: [
      { text: "The writer wakes up late on Saturday morning.", answer: true },
      { text: "The writer works and checks emails all weekend.", answer: false },
      { text: "The writer feels rested at the end of the weekend.", answer: true },
    ],
    buildSentence: [
      {
        target: "On Saturday morning, I wake up late and drink my coffee in bed.",
        jumbled: ["Saturday", "On", "morning,", "wake", "I", "late", "up", "and", "my", "drink", "in", "coffee", "bed."],
      },
      {
        target: "Later, I cook a simple, healthy meal and eat it near the window.",
        jumbled: ["I", "Later,", "cook", "simple,", "a", "meal", "healthy", "eat", "and", "it", "the", "near", "window."],
      },
      {
        target: "As the weekend ends, I feel rested because I used my free time in a good way.",
        jumbled: ["weekend", "the", "ends,", "As", "feel", "I", "rested", "because", "used", "I", "free", "my", "in", "time", "good", "a", "way."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a relaxing weekend.",
    mySentenceExample: "I rest and enjoy my free time on the weekend.",
  },
  {
    number: 10,
    title: "A Happier Free Time",
    image: null,
    imageNote: "The narrator standing in a bright cozy apartment surrounded by small signs of new hobbies -- a book, a music speaker, art supplies, cooking ingredients -- looking calm and content.",
    story:
      "After a few weeks of new hobbies, I feel happier and more balanced. In the past, I only worked and looked at my phone every evening. Now I walk, cook, read, and listen to music in my free time. I meet my friend Leo and enjoy real conversations at a café. I try a new art class and learn something fun every week. My mind feels calm, and my body feels rested and strong. My free time is not empty anymore; it is full of small, good things. My friends say, “You look happy and relaxed these days.” I understand now that free time is important for a good life. As I look at my new hobbies, I feel proud and thankful because my life after work is full and happy.",
    questions: [
      "How did the writer spend free time in the past?",
      "What hobbies does the writer do now?",
      "How does the writer feel about life after work at the end?",
    ],
    trueFalse: [
      { text: "In the past, the writer only worked and looked at the phone.", answer: true },
      { text: "The writer feels more empty and bored now.", answer: false },
      { text: "The writer feels proud and thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "Now I walk, cook, read, and listen to music in my free time.",
        jumbled: ["I", "Now", "cook,", "walk,", "read,", "listen", "and", "music", "to", "my", "in", "time.", "free"],
      },
      {
        target: "I understand now that free time is important for a good life.",
        jumbled: ["understand", "I", "now", "free", "that", "is", "time", "for", "important", "a", "life.", "good"],
      },
      {
        target: "As I look at my new hobbies, I feel proud and thankful because my life after work is full and happy.",
        jumbled: ["look", "I", "at", "As", "new", "my", "hobbies,", "feel", "I", "proud", "thankful", "and", "because", "life", "my", "work", "after", "full", "is", "happy.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about how your free time makes you feel.",
    mySentenceExample: "My hobbies make my free time happy and full.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

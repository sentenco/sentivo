// A1 Adults digital storybook, Book 47: "Learning to Use My New Phone"
// Static content -- no Supabase. Seventh book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Learning to Use My New Phone";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Beatriz sitting at her kitchen table, looking curiously at a new smartphone box, an instruction pamphlet spread out beside her.";

export const CHARACTERS = [
  { name: "Beatriz", role: "The narrator, an adult", look: "Reading glasses on a chain, patient expression, unfamiliar with new technology at first." },
  { name: "Noah", role: "Beatriz's nephew", look: "Casual T-shirt, always holding his own phone, patient and helpful with technology." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A New Phone Arrives",
    image: null,
    imageNote: "Beatriz opening a phone box on her kitchen table, looking at the new smartphone inside with a curious but uncertain expression.",
    story:
      "My old phone finally stopped working last week, so I bought a new smartphone yesterday. The box sits on my kitchen table, and I open it slowly and carefully. Inside, I find the phone, a charging cable, and a small instruction pamphlet. My old phone was very simple, only for calling and sending short messages. This new phone looks much more complicated, with a large screen and many small icons. I feel a little nervous about learning something so new at my age. Still, I know many useful things are possible with a phone like this one.",
    questions: [
      "Why does Beatriz buy a new phone?",
      "What does Beatriz find inside the box?",
      "How does Beatriz feel about learning something new?",
    ],
    trueFalse: [
      { text: "Beatriz's old phone stopped working last week.", answer: true },
      { text: "The box contains a phone, cable, and pamphlet.", answer: true },
      { text: "Beatriz's old phone had a large complicated screen.", answer: false },
      { text: "Beatriz feels a little nervous about this.", answer: true },
      { text: "Beatriz thinks the phone can do nothing useful.", answer: false },
    ],
    buildSentence: [
      { target: "I bought a new phone.", jumbled: ["bought", "a", "I", "new", "phone."] },
      { target: "I open it slowly.", jumbled: ["open", "it", "I", "slowly."] },
      { target: "I feel a little nervous.", jumbled: ["feel", "a", "I", "little", "nervous."] },
      { target: "This phone looks more complicated.", jumbled: ["This", "phone", "looks", "more", "complicated."] },
      { target: "Many useful things are possible with this phone.", jumbled: ["Many", "useful", "things", "are", "possible", "with", "this", "phone."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning to use something new.",
    mySentenceExample: "I felt nervous learning to use my new computer.",
  },
  {
    number: 2,
    title: "Calling Noah for Help",
    image: null,
    imageNote: "Beatriz sitting on her couch, holding her old phone to call her nephew, the new smartphone box beside her.",
    story:
      "Instead of guessing everything alone, I decide to call my nephew Noah for help. He is young and always seems to understand technology very quickly and easily. “Aunt Beatriz, I can come over this weekend and help you,” he says kindly on the phone. I feel relieved knowing I will not have to figure this out completely alone. Noah always explains things patiently, without making me feel silly for asking simple questions. I thank him and tell him I will have some tea and snacks ready. Waiting for Saturday, I feel a little more hopeful about this new phone.",
    questions: [
      "Who does Beatriz call for help?",
      "What does Noah offer to do?",
      "How does Beatriz feel after talking to Noah?",
    ],
    trueFalse: [
      { text: "Beatriz calls her nephew Noah for help.", answer: true },
      { text: "Noah refuses to help Beatriz at all.", answer: false },
      { text: "Noah offers to come over this weekend.", answer: true },
      { text: "Beatriz feels relieved after talking to Noah.", answer: true },
      { text: "Beatriz feels more worried after the call.", answer: false },
    ],
    buildSentence: [
      { target: "I call Noah for help.", jumbled: ["call", "Noah", "I", "for", "help."] },
      { target: "I feel relieved now.", jumbled: ["feel", "relieved", "I", "now."] },
      { target: "He explains things patiently.", jumbled: ["He", "explains", "things", "patiently."] },
      { target: "I thank him kindly today.", jumbled: ["thank", "him", "I", "kindly", "today."] },
      { target: "I feel a little more hopeful now.", jumbled: ["I", "feel", "a", "little", "more", "hopeful", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone for help with something new.",
    mySentenceExample: "I asked my daughter for help with my new computer.",
  },
  {
    number: 3,
    title: "Turning It On",
    image: null,
    imageNote: "Noah sitting beside Beatriz on the couch, showing her how to press the power button on her new phone.",
    story:
      "On Saturday, Noah arrives and sits beside me with a warm smile on his face. “Let's start simple,” he says, picking up the new phone gently from the table. He shows me the small button on the side used to turn the phone on. I press it carefully, and the screen lights up brightly, showing colorful icons everywhere. “Don't worry, everything here is easy once you know where to look,” he reassures me kindly. He explains the icons slowly, one at a time, without rushing through any explanation. I feel my nervousness slowly fading with each simple, clear step he shows me.",
    questions: [
      "What does Noah say to start with?",
      "What does the small button do?",
      "How does Noah explain the icons?",
    ],
    trueFalse: [
      { text: "Noah says let's start simple.", answer: true },
      { text: "The small button turns the phone on.", answer: true },
      { text: "Noah rushes through the explanation quickly.", answer: false },
      { text: "Noah explains the icons slowly, one at a time.", answer: true },
      { text: "Beatriz's nervousness grows stronger with each step.", answer: false },
    ],
    buildSentence: [
      { target: "Let's start simple, he says.", jumbled: ["start", "simple,", "Let's", "he", "says."] },
      { target: "I press it carefully now.", jumbled: ["press", "it", "I", "carefully", "now."] },
      { target: "The screen lights up brightly.", jumbled: ["screen", "lights", "The", "up", "brightly."] },
      { target: "He explains slowly, one at a time.", jumbled: ["He", "explains", "slowly,", "one", "at", "a", "time."] },
      { target: "My nervousness slowly fades with each step.", jumbled: ["My", "nervousness", "slowly", "fades", "with", "each", "step."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone explaining something to you slowly and clearly.",
    mySentenceExample: "My teacher explained the lesson slowly and clearly to me.",
  },
  {
    number: 4,
    title: "Sending a Text Message",
    image: null,
    imageNote: "Beatriz carefully typing a text message on her new phone while Noah watches and points at the screen, both smiling.",
    story:
      "Next, Noah shows me how to open the messages app and find a contact. My hands feel a little clumsy, but I follow his instructions step by step carefully. I choose my sister's name from the contact list, feeling proud I found it myself. I type a short message slowly, checking each letter twice before sending it. “Hi Carmen, I have a new phone now,” I write with careful concentration. I press the send button, and the message disappears from the screen immediately. A minute later, my phone buzzes with a reply from my sister. I feel a small burst of excitement seeing it work.",
    questions: [
      "What app does Noah show Beatriz first?",
      "Who does Beatriz choose to message?",
      "How does Beatriz feel when the reply arrives?",
    ],
    trueFalse: [
      { text: "Noah shows Beatriz the messages app.", answer: true },
      { text: "Beatriz messages her sister Carmen.", answer: true },
      { text: "Beatriz sends the message without checking it.", answer: false },
      { text: "Beatriz's phone buzzes with a reply.", answer: true },
      { text: "Beatriz feels nothing seeing the reply.", answer: false },
    ],
    buildSentence: [
      { target: "I type a short message.", jumbled: ["type", "a", "I", "short", "message."] },
      { target: "I press the send button.", jumbled: ["press", "the", "I", "send", "button."] },
      { target: "I feel proud right now.", jumbled: ["feel", "proud", "I", "right", "now."] },
      { target: "My hands feel a little clumsy.", jumbled: ["My", "hands", "feel", "a", "little", "clumsy."] },
      { target: "I feel a small burst of excitement.", jumbled: ["I", "feel", "a", "small", "burst", "of", "excitement."] },
    ],
    mySentencePrompt: "Write or say one sentence about sending a message to someone important to you.",
    mySentenceExample: "I sent a message to my sister to share my good news.",
  },
  {
    number: 5,
    title: "Taking a Photo",
    image: null,
    imageNote: "Beatriz holding up her new phone, taking a photo of Noah as he smiles and makes a funny pose in the living room.",
    story:
      "Noah suggests we practice something more fun: taking a photo with the camera app. He shows me where the camera icon is and how to open it quickly. I point the phone at him, and he makes a silly, funny pose for the picture. I press the round button on the screen, and the phone makes a small clicking sound. The photo appears on the screen instantly, showing Noah laughing in a funny position. I laugh too, surprised at how clear and colorful the picture looks. Taking photos feels much easier than I expected it to be at first.",
    questions: [
      "What does Noah suggest they practice?",
      "What does Noah do for the photo?",
      "How does the photo look on the screen?",
    ],
    trueFalse: [
      { text: "Noah suggests taking a photo with the camera app.", answer: true },
      { text: "Noah refuses to pose for any picture.", answer: false },
      { text: "The phone makes a small clicking sound.", answer: true },
      { text: "The photo looks clear and colorful.", answer: true },
      { text: "Taking photos feels harder than Beatriz expected.", answer: false },
    ],
    buildSentence: [
      { target: "I point the phone.", jumbled: ["point", "the", "I", "phone."] },
      { target: "I press the round button.", jumbled: ["press", "the", "I", "round", "button."] },
      { target: "I laugh too, surprised.", jumbled: ["laugh", "too,", "I", "surprised."] },
      { target: "The photo appears instantly.", jumbled: ["photo", "appears", "The", "instantly."] },
      { target: "Taking photos feels much easier than expected.", jumbled: ["Taking", "photos", "feels", "much", "easier", "than", "expected."] },
    ],
    mySentencePrompt: "Write or say one sentence about taking a photo of someone or something.",
    mySentenceExample: "I took a photo of my grandchildren at the park.",
  },
  {
    number: 6,
    title: "Getting a Little Confused",
    image: null,
    imageNote: "Beatriz frowning slightly at the phone screen, several apps open at once, Noah pointing helpfully at one specific button.",
    story:
      "Trying to explore on my own, I accidentally open several apps at the same time without understanding it. The screen becomes crowded with different windows, and I feel confused about what happened. “I think I broke it,” I tell Noah, feeling a little worried about my mistake. Noah laughs gently and reassures me that nothing is actually broken at all. He shows me a simple button that closes extra apps and cleans up the screen easily. I feel relieved that fixing my mistake was much simpler than I first thought. Technology mistakes, I realize, are usually not as serious as they seem.",
    questions: [
      "What does Beatriz accidentally do?",
      "What does Beatriz worry about?",
      "How does Noah help fix the confusion?",
    ],
    trueFalse: [
      { text: "Beatriz accidentally opens several apps at once.", answer: true },
      { text: "Beatriz feels completely calm about this mistake.", answer: false },
      { text: "Beatriz worries she broke the phone.", answer: true },
      { text: "Noah shows her a button that closes extra apps.", answer: true },
      { text: "Fixing the mistake turns out to be very difficult.", answer: false },
    ],
    buildSentence: [
      { target: "I feel confused now.", jumbled: ["feel", "confused", "I", "now."] },
      { target: "I think I broke it.", jumbled: ["think", "I", "I", "broke", "it."] },
      { target: "Nothing is actually broken.", jumbled: ["is", "actually", "Nothing", "broken."] },
      { target: "I feel relieved about this.", jumbled: ["feel", "relieved", "I", "about", "this."] },
      { target: "Technology mistakes are usually not that serious.", jumbled: ["Technology", "mistakes", "are", "usually", "not", "that", "serious."] },
    ],
    mySentencePrompt: "Write or say one sentence about a mistake that turned out to be less serious than you thought.",
    mySentenceExample: "My mistake with the printer was less serious than I thought.",
  },
  {
    number: 7,
    title: "Setting Up Video Calls",
    image: null,
    imageNote: "Beatriz smiling and waving at her phone screen during a video call, Noah sitting beside her helping set up the app.",
    story:
      "Noah asks if I would like to learn video calling, so I can see my family more often. My daughter lives far away, and this idea excites me immediately and completely. He downloads a simple video calling app and shows me how it works. We call my daughter together, and her smiling face appears on my screen suddenly. “Mom, you're using a smartphone now?” she asks, clearly surprised and happy about it. We talk for several minutes, and I feel genuinely happy seeing her face so clearly. This feature alone already makes the whole new phone feel worth it.",
    questions: [
      "What does Noah ask if Beatriz would like to learn?",
      "Who do they call together?",
      "How does Beatriz's daughter react?",
    ],
    trueFalse: [
      { text: "Noah asks if Beatriz wants to learn video calling.", answer: true },
      { text: "Beatriz's daughter lives very close by.", answer: false },
      { text: "They call Beatriz's daughter together.", answer: true },
      { text: "Beatriz's daughter feels surprised and happy.", answer: true },
      { text: "Beatriz feels this feature is not worth it.", answer: false },
    ],
    buildSentence: [
      { target: "This excites me completely.", jumbled: ["excites", "me", "This", "completely."] },
      { target: "We call my daughter together.", jumbled: ["call", "my", "We", "daughter", "together."] },
      { target: "I feel genuinely happy now.", jumbled: ["feel", "genuinely", "I", "happy", "now."] },
      { target: "Her smiling face appears suddenly.", jumbled: ["Her", "smiling", "face", "appears", "suddenly."] },
      { target: "This feature already makes the phone feel worth it.", jumbled: ["This", "feature", "already", "makes", "the", "phone", "feel", "worth", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about talking to a family member using video calling.",
    mySentenceExample: "I love talking to my daughter using video calling.",
  },
  {
    number: 8,
    title: "Practicing Alone",
    image: null,
    imageNote: "Beatriz sitting alone on her couch that evening, confidently scrolling through her phone with a small smile.",
    story:
      "After Noah leaves, I decide to practice using my phone a little more by myself. I open the camera app again and take a few more photos around my apartment. I also check the messages app to see if my sister replied again. Slowly, I feel more comfortable finding buttons and menus without asking anyone for help. I make a small mistake once, but I remember Noah's advice about the button that fixes things. Fixing it myself this time makes me feel proud of my quick progress today. Learning something new alone, even in small steps, feels genuinely rewarding.",
    questions: [
      "What does Beatriz practice after Noah leaves?",
      "How does Beatriz feel finding things without help?",
      "How does Beatriz fix her small mistake this time?",
    ],
    trueFalse: [
      { text: "Beatriz practices using her phone alone.", answer: true },
      { text: "Beatriz refuses to open the camera app again.", answer: false },
      { text: "Beatriz feels more comfortable finding things now.", answer: true },
      { text: "Beatriz fixes her mistake herself this time.", answer: true },
      { text: "Beatriz feels nothing about this small progress.", answer: false },
    ],
    buildSentence: [
      { target: "I practice a little more.", jumbled: ["practice", "a", "I", "little", "more."] },
      { target: "I feel more comfortable now.", jumbled: ["feel", "more", "I", "comfortable", "now."] },
      { target: "I fix it myself this time.", jumbled: ["fix", "it", "I", "myself", "this", "time."] },
      { target: "I feel proud of my progress.", jumbled: ["I", "feel", "proud", "of", "my", "progress."] },
      { target: "Learning something new alone feels genuinely rewarding.", jumbled: ["Learning", "something", "new", "alone", "feels", "genuinely", "rewarding."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something new by yourself.",
    mySentenceExample: "I practiced my new skill by myself and felt proud.",
  },
  {
    number: 9,
    title: "Showing a Friend",
    image: null,
    imageNote: "Beatriz sitting at a café table with a friend, both looking at her phone screen as she shows off a photo, smiling proudly.",
    story:
      "The next day, I meet my friend Rosa for coffee at our favorite small café. I proudly show her my new phone and the photos I took yesterday. “You learned all this so quickly,” Rosa says, clearly impressed by my new skills. I explain how my nephew helped me and how I practiced more by myself afterward. Rosa admits she also wants a new phone but feels nervous about learning it too. I encourage her kindly, telling her it feels difficult at first but gets easier quickly. Sharing what I learned with a friend makes me feel confident and helpful today.",
    questions: [
      "Who does Beatriz meet for coffee?",
      "What does Beatriz show Rosa?",
      "What does Rosa admit she wants?",
    ],
    trueFalse: [
      { text: "Beatriz meets her friend Rosa for coffee.", answer: true },
      { text: "Beatriz hides her new phone from Rosa.", answer: false },
      { text: "Rosa admits she also wants a new phone.", answer: true },
      { text: "Beatriz encourages Rosa kindly.", answer: true },
      { text: "Beatriz feels unhelpful sharing what she learned.", answer: false },
    ],
    buildSentence: [
      { target: "I meet Rosa for coffee.", jumbled: ["meet", "Rosa", "I", "for", "coffee."] },
      { target: "I show her my phone.", jumbled: ["show", "her", "I", "my", "phone."] },
      { target: "I encourage her kindly today.", jumbled: ["encourage", "her", "I", "kindly", "today."] },
      { target: "You learned all this quickly.", jumbled: ["learned", "all", "You", "this", "quickly."] },
      { target: "I feel confident and helpful today.", jumbled: ["I", "feel", "confident", "and", "helpful", "today."] },
    ],
    mySentencePrompt: "Write or say one sentence about teaching or showing a friend something new.",
    mySentenceExample: "I showed my friend how to use a new app.",
  },
  {
    number: 10,
    title: "Comfortable with My Phone",
    image: null,
    imageNote: "Beatriz sitting comfortably on her couch, video calling her daughter and looking at photos, completely relaxed and confident.",
    story:
      "One week later, using my new phone feels completely normal, almost like a natural part of my day. I video call my daughter every few days now, something I never imagined doing so easily before. I take photos of small, simple moments, like my morning tea or a pretty flower outside. My old worries about this new technology already feel a little silly looking back now. Noah checks in sometimes, proud of how comfortable I have become with everything so quickly. Learning something new at my age felt scary at first, but now it feels genuinely wonderful.",
    questions: [
      "How does using the phone feel one week later?",
      "What does Beatriz do every few days now?",
      "How does Beatriz feel about learning something new now?",
    ],
    trueFalse: [
      { text: "Using the phone feels completely normal now.", answer: true },
      { text: "Beatriz video calls her daughter every few days.", answer: true },
      { text: "Beatriz's old worries still feel completely serious now.", answer: false },
      { text: "Noah checks in, proud of Beatriz's progress.", answer: true },
      { text: "Beatriz feels this experience was completely wasted.", answer: false },
    ],
    buildSentence: [
      { target: "This feels completely normal now.", jumbled: ["feels", "completely", "This", "normal", "now."] },
      { target: "I take photos of small moments.", jumbled: ["take", "photos", "I", "of", "small", "moments."] },
      { target: "He checks in sometimes, proud.", jumbled: ["checks", "in", "He", "sometimes,", "proud."] },
      { target: "My old worries feel a little silly now.", jumbled: ["My", "old", "worries", "feel", "a", "little", "silly", "now."] },
      { target: "This felt scary at first, but now feels wonderful.", jumbled: ["This", "felt", "scary", "at", "first,", "but", "now", "feels", "wonderful."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that felt scary at first but became comfortable.",
    mySentenceExample: "Using a computer felt scary at first but became comfortable for me.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

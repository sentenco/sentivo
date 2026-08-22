// B1 Teens digital storybook, Book 49: "Taking a Break from Social Media"
// Static content -- no Supabase. First book in a new B1 Teens batch
// (Books 49-56) -- the first B1-level content in Story Book at all.
// Kids does not get B1 (per the user, matching the CEFR ceiling used
// elsewhere in the app -- Kids tops out at A2/B2 in the main curriculum
// but Story Book specifically stops Kids at A2). Calibrated to the CEFR
// A2-to-B1 jump documented for the main curriculum (see memory
// project_b1_level_jump_and_approach): past simple + past continuous
// together, occasional controlled past perfect, first/second
// conditionals, modals (should/must/might/have to), complex sentences
// with because/although/so/when/while, basic relative clauses, and more
// abstract teen themes (here: digital wellbeing/online identity) rather
// than purely concrete event narration. Same Teens-track shape: 3
// questions, 5 True/False, 5 Build-a-Sentence per chapter,
// shortest-to-longest, but noticeably more complex than the A2 batch.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Taking a Break from Social Media";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Zoe sitting on her bedroom floor, placing her phone into a small box labeled '7 Days,' a journal and pen open beside her.";

export const CHARACTERS = [
  { name: "Zoe", role: "The narrator, a teenager", look: "Hair in a loose bun, oversized sweater, thoughtful and a little exhausted at first." },
  { name: "Priya", role: "Zoe's close friend", look: "Short curly hair, colorful scrunchies, supportive and understanding." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Too Much Scrolling",
    image: null,
    imageNote: "Zoe lying on her bed at night, her face lit only by her phone screen, a tired but tense expression as she scrolls endlessly.",
    story:
      "Lately, I've noticed that I check my phone almost constantly, even when nothing important is happening. Last night, I was scrolling through photos of a classmate's vacation when I suddenly felt strangely empty inside. Everyone online seems to be having a more exciting, more successful life than I am, or at least that's how it feels. I know comparing myself like this isn't healthy, but I can't seem to stop doing it anyway. My screen time report this week showed nearly seven hours a day, which honestly shocked me. Something has to change, although I'm not entirely sure what that should look like yet.",
    questions: [
      "What does Zoe notice about her phone habits lately?",
      "How does Zoe feel scrolling through the vacation photos?",
      "What did Zoe's screen time report show?",
    ],
    trueFalse: [
      { text: "Zoe checks her phone almost constantly.", answer: true },
      { text: "Zoe feels great after scrolling through her classmate's photos.", answer: false },
      { text: "Zoe's screen time was nearly seven hours a day.", answer: true },
      { text: "Zoe knows exactly what she needs to change.", answer: false },
      { text: "Zoe thinks comparing herself online isn't healthy.", answer: true },
    ],
    buildSentence: [
      { target: "I felt strangely empty.", jumbled: ["felt", "strangely", "I", "empty."] },
      { target: "Something has to change.", jumbled: ["has", "to", "Something", "change."] },
      { target: "I can't seem to stop.", jumbled: ["can't", "seem", "I", "to", "stop."] },
      { target: "I was scrolling when I felt this way.", jumbled: ["I", "was", "scrolling", "when", "I", "felt", "this", "way."] },
      { target: "Although I'm not sure what that should look like, something has to change.", jumbled: ["Although", "I'm", "not", "sure", "what", "that", "should", "look", "like,", "something", "has", "to", "change."] },
    ],
    mySentencePrompt: "Write or say one sentence about a habit you noticed you wanted to change.",
    mySentenceExample: "I noticed I wanted to change how much time I spend online.",
  },
  {
    number: 2,
    title: "Priya's Idea",
    image: null,
    imageNote: "Zoe and Priya sitting together at a café table, Priya gesturing enthusiastically while explaining an idea, Zoe looking uncertain.",
    story:
      "The next day, I tell Priya how empty and exhausted social media has been making me feel. Instead of just sympathizing, she suggests something bold: a full week without any social media apps at all. “If you deleted the apps, you wouldn't even be tempted to check them,” she reasons calmly. I feel a flash of panic just imagining it, since I've never gone more than a few hours without checking something. Priya, who tried something similar last year, says the first two days were the hardest by far. Although the idea terrifies me a little, part of me is genuinely curious what would happen.",
    questions: [
      "What does Priya suggest to Zoe?",
      "How does Zoe feel imagining a week without social media?",
      "What does Priya say about her own experience?",
    ],
    trueFalse: [
      { text: "Priya suggests a full week without social media.", answer: true },
      { text: "Zoe feels completely calm imagining this idea.", answer: false },
      { text: "Priya has tried something similar before.", answer: true },
      { text: "Priya says the idea would be easy from day one.", answer: false },
      { text: "Zoe feels a little curious despite her fear.", answer: true },
    ],
    buildSentence: [
      { target: "I feel a flash of panic.", jumbled: ["feel", "a", "I", "flash", "of", "panic."] },
      { target: "Priya suggests something bold today.", jumbled: ["Priya", "suggests", "something", "bold", "today."] },
      { target: "I'm genuinely curious what would happen.", jumbled: ["I'm", "genuinely", "curious", "what", "would", "happen."] },
      { target: "If you deleted the apps, you wouldn't be tempted.", jumbled: ["If", "you", "deleted", "the", "apps,", "you", "wouldn't", "be", "tempted."] },
      { target: "Although the idea terrifies me, part of me is curious.", jumbled: ["Although", "the", "idea", "terrifies", "me,", "part", "of", "me", "is", "curious."] },
    ],
    mySentencePrompt: "Write or say one sentence about a bold idea a friend once suggested to you.",
    mySentenceExample: "My friend suggested a bold idea to try running a marathon together.",
  },
  {
    number: 3,
    title: "Deleting the Apps",
    image: null,
    imageNote: "Zoe's finger hovering over an app icon on her phone screen, hesitating before finally pressing delete, a determined expression on her face.",
    story:
      "That evening, I sit on my bed, staring at the apps I want to remove for the week ahead. My thumb hovers over the first icon for almost a full minute before I finally press delete. Deleting the second and third apps feels slightly easier, though my hands are still shaking a little. Once everything is gone, my home screen looks strangely empty, almost like something is missing from my life already. I set a reminder for exactly seven days from now, when I will allow myself to reinstall everything. Whatever happens this week, I have already committed, and there's no turning back now.",
    questions: [
      "What does Zoe do with the apps that evening?",
      "How does Zoe's home screen look afterward?",
      "What does Zoe set a reminder for?",
    ],
    trueFalse: [
      { text: "Zoe deletes the apps that evening.", answer: true },
      { text: "Zoe's hands feel completely steady the whole time.", answer: false },
      { text: "Zoe's home screen looks strangely empty afterward.", answer: true },
      { text: "Zoe sets a reminder for seven days later.", answer: true },
      { text: "Zoe decides to reinstall the apps immediately.", answer: false },
    ],
    buildSentence: [
      { target: "My thumb hovers over it.", jumbled: ["thumb", "hovers", "My", "over", "it."] },
      { target: "There's no turning back now.", jumbled: ["is", "no", "There's", "turning", "back", "now."] },
      { target: "I finally press delete now.", jumbled: ["I", "finally", "press", "delete", "now."] },
      { target: "My hands are still shaking a little.", jumbled: ["My", "hands", "are", "still", "shaking", "a", "little."] },
      { target: "Whatever happens this week, I have already committed.", jumbled: ["Whatever", "happens", "this", "week,", "I", "have", "already", "committed."] },
    ],
    mySentencePrompt: "Write or say one sentence about committing to a difficult decision.",
    mySentenceExample: "I committed to waking up earlier even though it felt hard at first.",
  },
  {
    number: 4,
    title: "The First Uncomfortable Day",
    image: null,
    imageNote: "Zoe sitting at her desk, reaching automatically for her phone out of habit, then pausing with a frustrated expression when she remembers the apps are gone.",
    story:
      "By the next morning, I already notice how many times I reach for my phone out of pure habit. While waiting for the bus, I catch myself unlocking my phone at least six times, each time remembering there's nothing there now. The silence feels uncomfortable, almost like a constant itch I can't scratch no matter how hard I try. At lunch, I overhear friends discussing a video that went viral, and I feel a strange pang of exclusion. I had never realized how much of my social life actually depended on staying constantly updated online. This first day feels much harder than I honestly expected it to be.",
    questions: [
      "What does Zoe notice by the next morning?",
      "How many times does Zoe unlock her phone while waiting for the bus?",
      "How does Zoe feel hearing about the viral video at lunch?",
    ],
    trueFalse: [
      { text: "Zoe reaches for her phone out of habit.", answer: true },
      { text: "Zoe unlocks her phone at least six times waiting for the bus.", answer: true },
      { text: "Zoe feels completely unaffected by the silence.", answer: false },
      { text: "Zoe feels a pang of exclusion at lunch.", answer: true },
      { text: "This first day feels easier than Zoe expected.", answer: false },
    ],
    buildSentence: [
      { target: "The silence feels uncomfortable now.", jumbled: ["silence", "feels", "The", "uncomfortable", "now."] },
      { target: "I catch myself unlocking my phone.", jumbled: ["I", "catch", "myself", "unlocking", "my", "phone."] },
      { target: "I feel a strange pang of exclusion.", jumbled: ["I", "feel", "a", "strange", "pang", "of", "exclusion."] },
      { target: "This day feels harder than I expected.", jumbled: ["This", "day", "feels", "harder", "than", "I", "expected."] },
      { target: "I had never realized how much I depended on this.", jumbled: ["I", "had", "never", "realized", "how", "much", "I", "depended", "on", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about a habit that was harder to break than you expected.",
    mySentenceExample: "Breaking my habit of checking messages was harder than I expected.",
  },
  {
    number: 5,
    title: "Filling the Empty Time",
    image: null,
    imageNote: "Zoe sitting on her bedroom floor with an old sketchbook, drawing intently, evening sunlight coming through the window.",
    story:
      "Without endless scrolling to fill my free time, I suddenly realize how many empty hours I actually have. That evening, instead of reaching for my phone, I dig out an old sketchbook I hadn't touched in months. I sit by my window and draw for almost an hour, something I used to genuinely love doing years ago. While I was drawing, I completely forgot to check the time, which almost never happens anymore lately. It occurs to me that I had been using my phone partly to avoid boredom, but also to avoid deeper, quieter thoughts. Rediscovering this small hobby feels unexpectedly comforting, like reconnecting with an old friend.",
    questions: [
      "What does Zoe dig out that evening?",
      "What happens to Zoe's sense of time while drawing?",
      "What does Zoe realize about why she used her phone?",
    ],
    trueFalse: [
      { text: "Zoe digs out an old sketchbook that evening.", answer: true },
      { text: "Zoe checks the time constantly while drawing.", answer: false },
      { text: "Zoe realizes she used her phone to avoid quiet thoughts too.", answer: true },
      { text: "Zoe finds drawing to be a boring activity.", answer: false },
      { text: "Rediscovering this hobby feels comforting to Zoe.", answer: true },
    ],
    buildSentence: [
      { target: "I dig out my sketchbook.", jumbled: ["dig", "out", "I", "my", "sketchbook."] },
      { target: "This feels unexpectedly comforting now.", jumbled: ["feels", "unexpectedly", "This", "comforting", "now."] },
      { target: "I completely forgot to check the time.", jumbled: ["I", "completely", "forgot", "to", "check", "the", "time."] },
      { target: "I used my phone to avoid boredom.", jumbled: ["I", "used", "my", "phone", "to", "avoid", "boredom."] },
      { target: "While I was drawing, I forgot about everything else.", jumbled: ["While", "I", "was", "drawing,", "I", "forgot", "about", "everything", "else."] },
    ],
    mySentencePrompt: "Write or say one sentence about rediscovering a hobby you had forgotten about.",
    mySentenceExample: "I rediscovered painting after not doing it for years.",
  },
  {
    number: 6,
    title: "A Moment of Temptation",
    image: null,
    imageNote: "Zoe standing in the app store on her phone, her finger hovering over the download button, a conflicted expression on her face.",
    story:
      "On day four, something stressful happens at school, and my first instinct is to post about it online. I open the app store without even thinking, my finger already hovering over the download button. I pause, remembering how I felt during that first uncomfortable day, and how proud I had been of getting through it. If I reinstalled the app now, all that earlier effort would basically be wasted, I remind myself firmly. Instead, I text Priya directly, explaining what happened and how frustrated I feel about it. She responds within minutes, and somehow, this feels like a more genuine kind of connection anyway.",
    questions: [
      "What happens at school on day four?",
      "What is Zoe's first instinct?",
      "What does Zoe do instead of reinstalling the app?",
    ],
    trueFalse: [
      { text: "Something stressful happens at school on day four.", answer: true },
      { text: "Zoe's first instinct is to post about it online.", answer: true },
      { text: "Zoe reinstalls the app without any hesitation.", answer: false },
      { text: "Zoe texts Priya directly instead.", answer: true },
      { text: "Zoe feels this text conversation is less genuine.", answer: false },
    ],
    buildSentence: [
      { target: "I pause, remembering that day.", jumbled: ["pause,", "remembering", "I", "that", "day."] },
      { target: "I text Priya directly instead.", jumbled: ["text", "Priya", "I", "directly", "instead."] },
      { target: "My finger hovers over the button.", jumbled: ["My", "finger", "hovers", "over", "the", "button."] },
      { target: "This feels like a genuine connection anyway.", jumbled: ["This", "feels", "like", "a", "genuine", "connection", "anyway."] },
      { target: "If I reinstalled it now, my effort would be wasted.", jumbled: ["If", "I", "reinstalled", "it", "now,", "my", "effort", "would", "be", "wasted."] },
    ],
    mySentencePrompt: "Write or say one sentence about resisting a temptation to go back to an old habit.",
    mySentenceExample: "I resisted the temptation to skip practice when I felt tired.",
  },
  {
    number: 7,
    title: "A Real Conversation",
    image: null,
    imageNote: "Zoe and Priya sitting together on a park bench, deep in conversation, phones nowhere in sight, both looking relaxed and engaged.",
    story:
      "On day five, Priya and I meet at the park, and I notice something different about our conversation right away. Normally, we would both glance at our phones occasionally, even mid-conversation, without really meaning to. Today, neither of us has that option, so we talk uninterrupted for almost two hours straight. I tell her things I probably wouldn't have shared over text, since talking in person feels more vulnerable somehow. She admits she has also been thinking about deleting her apps permanently, not just for this one week. Walking home afterward, I realize this might be the longest real conversation we've had in months.",
    questions: [
      "What does Zoe notice about their conversation today?",
      "How long do they talk uninterrupted?",
      "What does Priya admit she has been thinking about?",
    ],
    trueFalse: [
      { text: "Zoe and Priya meet at the park on day five.", answer: true },
      { text: "They both check their phones during the conversation.", answer: false },
      { text: "They talk uninterrupted for almost two hours.", answer: true },
      { text: "Priya admits she's considered deleting her apps permanently.", answer: true },
      { text: "Zoe feels this wasn't a particularly meaningful conversation.", answer: false },
    ],
    buildSentence: [
      { target: "We talk uninterrupted today.", jumbled: ["talk", "uninterrupted", "We", "today."] },
      { target: "This feels more vulnerable somehow.", jumbled: ["feels", "more", "This", "vulnerable", "somehow."] },
      { target: "She admits she's been thinking too.", jumbled: ["She", "admits", "she's", "been", "thinking", "too."] },
      { target: "Neither of us has that option today.", jumbled: ["Neither", "of", "us", "has", "that", "option", "today."] },
      { target: "This might be the longest conversation we've had in months.", jumbled: ["This", "might", "be", "the", "longest", "conversation", "we've", "had", "in", "months."] },
    ],
    mySentencePrompt: "Write or say one sentence about a meaningful conversation you had without distractions.",
    mySentenceExample: "I had a meaningful conversation with my grandmother without any distractions.",
  },
  {
    number: 8,
    title: "The Seventh Day",
    image: null,
    imageNote: "Zoe sitting on her bed, looking at her phone's app store, the reminder notification visible on the screen, a thoughtful expression on her face.",
    story:
      "The reminder finally goes off: seven days have passed, and I'm technically free to reinstall everything now. Surprisingly, I don't feel the urgent excitement I expected to feel at this exact moment. Instead, I open my journal, where I've been writing down thoughts and feelings all week instead of posting them. Reading back through my entries, I notice how much calmer and more present I have generally felt lately. If I reinstall everything exactly as before, I might slide right back into my old habits within days. I decide to think about this decision carefully rather than rushing into anything immediately.",
    questions: [
      "What happens when the reminder finally goes off?",
      "How does Zoe feel compared to what she expected?",
      "What does Zoe decide to do about reinstalling everything?",
    ],
    trueFalse: [
      { text: "The reminder goes off after seven days.", answer: true },
      { text: "Zoe feels intense excitement to reinstall everything immediately.", answer: false },
      { text: "Zoe has been writing in a journal all week.", answer: true },
      { text: "Zoe feels calmer and more present lately.", answer: true },
      { text: "Zoe decides to rush the decision immediately.", answer: false },
    ],
    buildSentence: [
      { target: "The reminder finally goes off.", jumbled: ["reminder", "finally", "The", "goes", "off."] },
      { target: "I open my journal instead.", jumbled: ["open", "my", "I", "journal", "instead."] },
      { target: "I feel calmer and more present.", jumbled: ["I", "feel", "calmer", "and", "more", "present."] },
      { target: "I decide to think about this carefully.", jumbled: ["I", "decide", "to", "think", "about", "this", "carefully."] },
      { target: "If I reinstall everything, I might slide back into old habits.", jumbled: ["If", "I", "reinstall", "everything,", "I", "might", "slide", "back", "into", "old", "habits."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal and reflecting on what you learned.",
    mySentenceExample: "Reaching my goal taught me that I am stronger than I thought.",
  },
  {
    number: 9,
    title: "Finding a New Balance",
    image: null,
    imageNote: "Zoe reinstalling one app on her phone while turning off notifications in the settings menu, a calm and deliberate expression on her face.",
    story:
      "After thinking it over for two more days, I decide on a middle ground instead of an all-or-nothing choice. I reinstall only one app, the one I actually use to stay connected with distant relatives, nothing else. I also turn off all notifications, so checking the app becomes a conscious choice rather than an automatic reflex. If a notification isn't controlling my attention constantly, I feel like I'm the one actually in charge now. Priya, impressed by this compromise, decides to try something similar with her own accounts. This new approach feels more sustainable than either extreme, whether that's constant scrolling or complete avoidance.",
    questions: [
      "What decision does Zoe make after two more days?",
      "Which app does Zoe reinstall?",
      "What does Zoe do with her notifications?",
    ],
    trueFalse: [
      { text: "Zoe decides on a middle ground compromise.", answer: true },
      { text: "Zoe reinstalls every single app she had before.", answer: false },
      { text: "Zoe turns off all her notifications.", answer: true },
      { text: "Priya decides to try something similar too.", answer: true },
      { text: "Zoe feels this new approach is unsustainable.", answer: false },
    ],
    buildSentence: [
      { target: "I decide on a middle ground.", jumbled: ["decide", "on", "I", "a", "middle", "ground."] },
      { target: "I turn off all notifications.", jumbled: ["turn", "off", "I", "all", "notifications."] },
      { target: "I feel like I'm in charge now.", jumbled: ["I", "feel", "like", "I'm", "in", "charge", "now."] },
      { target: "This feels more sustainable than either extreme.", jumbled: ["This", "feels", "more", "sustainable", "than", "either", "extreme."] },
      { target: "If a notification isn't controlling me, I'm in charge.", jumbled: ["If", "a", "notification", "isn't", "controlling", "me,", "I'm", "in", "charge."] },
    ],
    mySentencePrompt: "Write or say one sentence about finding a balanced approach to something in your life.",
    mySentenceExample: "I found a balanced approach to studying and relaxing during exams.",
  },
  {
    number: 10,
    title: "Looking Back",
    image: null,
    imageNote: "Zoe sitting at her desk, writing in her journal one final entry, her phone resting face-down beside her, a peaceful expression on her face.",
    story:
      "A month later, I look back at that first uncomfortable day and barely recognize how anxious I felt then. My screen time has dropped significantly, not because I forced it, but because I genuinely don't need it as much anymore. I still draw regularly now, something I almost gave up entirely before this whole experiment began. Whenever I feel that familiar urge to compare myself to others online, I remember how empty that feeling actually was. Priya and I meet in person far more often now, having real conversations instead of just liking each other's posts. Taking that break taught me that stepping back sometimes helps you see yourself more clearly.",
    questions: [
      "How does Zoe's screen time compare to before?",
      "What does Zoe still do regularly now?",
      "What did taking the break teach Zoe?",
    ],
    trueFalse: [
      { text: "Zoe's screen time has dropped significantly.", answer: true },
      { text: "Zoe gave up drawing again after the experiment.", answer: false },
      { text: "Zoe and Priya meet in person more often now.", answer: true },
      { text: "Zoe still compares herself constantly to others online.", answer: false },
      { text: "Zoe learned that stepping back helps her see herself clearly.", answer: true },
    ],
    buildSentence: [
      { target: "I still draw regularly now.", jumbled: ["still", "draw", "I", "regularly", "now."] },
      { target: "My screen time has dropped significantly.", jumbled: ["My", "screen", "time", "has", "dropped", "significantly."] },
      { target: "I barely recognize how anxious I felt.", jumbled: ["I", "barely", "recognize", "how", "anxious", "I", "felt."] },
      { target: "We meet in person far more often now.", jumbled: ["We", "meet", "in", "person", "far", "more", "often", "now."] },
      { target: "Stepping back sometimes helps you see yourself more clearly.", jumbled: ["Stepping", "back", "sometimes", "helps", "you", "see", "yourself", "more", "clearly."] },
    ],
    mySentencePrompt: "Write or say one sentence about something a break or pause taught you about yourself.",
    mySentenceExample: "Taking a break from studying taught me that I needed more rest.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

// A1 Adults digital storybook, Book 44: "Taking the Bus to Work"
// Static content -- no Supabase. Fourth book in the A1 Adults batch
// (Books 41-48). Same structure/level as storybookData41.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Taking the Bus to Work";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Angela standing at a bus stop with a coffee cup, checking her watch as a city bus approaches, other commuters waiting nearby.";

export const CHARACTERS = [
  { name: "Angela", role: "The narrator, an adult who takes the bus to work", look: "Work bag, comfortable shoes, calm but always watching the time." },
  { name: "Walter", role: "A regular rider Angela sees every morning", look: "Newspaper under his arm, warm smile, chatty and friendly." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The Morning Routine",
    image: null,
    imageNote: "Angela leaving her apartment building with a coffee cup and work bag, checking her watch on a quiet morning street.",
    story:
      "Every morning, I leave my apartment at exactly seven-fifteen to catch the bus to work. I do not own a car, so the bus is my main way to travel. I grab my coffee, check my bag for my badge, and lock my door carefully. The walk to the bus stop takes about five minutes down a quiet street. I like this short walk because it helps me wake up before work starts. My bus usually arrives around seven-thirty, so I try not to be late. Today, the morning air feels a little cold, so I walk a bit faster than usual.",
    questions: [
      "What time does Angela leave her apartment?",
      "Why does Angela take the bus?",
      "How long does the walk to the bus stop take?",
    ],
    trueFalse: [
      { text: "Angela leaves her apartment at seven-fifteen.", answer: true },
      { text: "Angela owns a car and drives to work.", answer: false },
      { text: "The walk to the bus stop takes about five minutes.", answer: true },
      { text: "Angela's bus usually arrives around seven-thirty.", answer: true },
      { text: "The morning air feels warm today.", answer: false },
    ],
    buildSentence: [
      { target: "I leave my apartment early.", jumbled: ["leave", "my", "I", "apartment", "early."] },
      { target: "I grab my coffee first.", jumbled: ["grab", "my", "I", "coffee", "first."] },
      { target: "I walk to the bus stop.", jumbled: ["walk", "to", "I", "the", "bus", "stop."] },
      { target: "This helps me wake up.", jumbled: ["helps", "me", "This", "wake", "up."] },
      { target: "I try not to be late today.", jumbled: ["I", "try", "not", "to", "be", "late", "today."] },
    ],
    mySentencePrompt: "Write or say one sentence about your morning routine.",
    mySentenceExample: "My morning routine starts with a cup of coffee.",
  },
  {
    number: 2,
    title: "Waiting at the Stop",
    image: null,
    imageNote: "Angela standing at a covered bus stop with a few other commuters, checking her phone for the bus schedule.",
    story:
      "At the bus stop, a few other people are already waiting for the same bus. I check my phone to see how many minutes until the bus arrives. The app says three minutes, so I have a little time to relax. I see Walter, a man I recognize from riding this bus almost every day. He always carries a newspaper under his arm and smiles at everyone politely. We nod at each other, though we have never really talked before today. The morning traffic passes by slowly, and I hear the sounds of the busy city waking up around us.",
    questions: [
      "Who else is waiting at the bus stop?",
      "What does Angela check on her phone?",
      "What does Walter always carry?",
    ],
    trueFalse: [
      { text: "A few other people are waiting at the stop.", answer: true },
      { text: "Angela checks her phone for the bus time.", answer: true },
      { text: "Walter always carries a newspaper.", answer: true },
      { text: "Angela and Walter are old close friends already.", answer: false },
      { text: "The city sounds nothing like a busy place.", answer: false },
    ],
    buildSentence: [
      { target: "I check my phone now.", jumbled: ["check", "my", "I", "phone", "now."] },
      { target: "I see Walter today.", jumbled: ["see", "Walter", "I", "today."] },
      { target: "We nod at each other.", jumbled: ["nod", "at", "We", "each", "other."] },
      { target: "He smiles at everyone politely.", jumbled: ["He", "smiles", "at", "everyone", "politely."] },
      { target: "I have a little time to relax.", jumbled: ["I", "have", "a", "little", "time", "to", "relax."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone you see often but do not know well.",
    mySentenceExample: "I see my neighbor often but do not know him well.",
  },
  {
    number: 3,
    title: "Getting On the Bus",
    image: null,
    imageNote: "Angela stepping onto a city bus, tapping her transit card on the reader, the driver nodding as passengers board behind her.",
    story:
      "The bus finally arrives, and the doors open with a soft hissing sound. I step on carefully and tap my transit card on the small reader by the door. The driver nods at me kindly, and I walk toward an empty seat near the middle. Walter gets on right behind me and sits a few rows back with his newspaper. The bus is not too crowded today, which makes the ride feel more comfortable. I look out the window as the bus starts moving through the busy city streets. My commute officially begins now, and I settle in for the ride.",
    questions: [
      "What sound do the bus doors make?",
      "What does Angela tap on the reader?",
      "Where does Angela sit on the bus?",
    ],
    trueFalse: [
      { text: "The bus doors open with a hissing sound.", answer: true },
      { text: "Angela pays with cash instead of a card.", answer: false },
      { text: "Angela sits near the middle of the bus.", answer: true },
      { text: "The bus is extremely crowded today.", answer: false },
      { text: "Angela looks out the window as the bus moves.", answer: true },
    ],
    buildSentence: [
      { target: "The bus finally arrives.", jumbled: ["finally", "arrives.", "The", "bus"] },
      { target: "I step on carefully.", jumbled: ["step", "on", "I", "carefully."] },
      { target: "I tap my transit card.", jumbled: ["tap", "my", "I", "transit", "card."] },
      { target: "I look out the window.", jumbled: ["look", "out", "I", "the", "window."] },
      { target: "My commute officially begins now.", jumbled: ["My", "commute", "officially", "begins", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about getting onto a bus or train.",
    mySentenceExample: "I tap my card and find a seat when I get on the bus.",
  },
  {
    number: 4,
    title: "A Crowded Stop",
    image: null,
    imageNote: "Angela standing and holding a bus pole as many new passengers crowd into the bus at a busy downtown stop.",
    story:
      "A few stops later, the bus arrives at a busy downtown corner near many office buildings. Many people get on the bus at once, and it suddenly feels much more crowded than before. I stand up and give my seat to an older woman carrying heavy grocery bags. She thanks me kindly, and I move toward the back to hold onto a pole instead. The bus feels warm now with so many people standing close together. I check the time on my phone and see I still have fifteen minutes before work starts. The bus continues moving slowly through the traffic.",
    questions: [
      "Where does the bus arrive a few stops later?",
      "What does Angela do for the older woman?",
      "How does the bus feel now with more people?",
    ],
    trueFalse: [
      { text: "The bus arrives at a busy downtown corner.", answer: true },
      { text: "Angela refuses to give up her seat.", answer: false },
      { text: "Angela gives her seat to an older woman.", answer: true },
      { text: "The bus feels warm with many people standing.", answer: true },
      { text: "Angela has no time left before work starts.", answer: false },
    ],
    buildSentence: [
      { target: "Many people get on.", jumbled: ["get", "on.", "Many", "people"] },
      { target: "I stand up now.", jumbled: ["stand", "up", "I", "now."] },
      { target: "She thanks me kindly.", jumbled: ["thanks", "me", "She", "kindly."] },
      { target: "I hold onto a pole.", jumbled: ["hold", "onto", "I", "a", "pole."] },
      { target: "I still have fifteen minutes before work.", jumbled: ["I", "still", "have", "fifteen", "minutes", "before", "work."] },
    ],
    mySentencePrompt: "Write or say one sentence about giving up your seat for someone.",
    mySentenceExample: "I gave up my seat for an elderly man on the train.",
  },
  {
    number: 5,
    title: "A Short Delay",
    image: null,
    imageNote: "Angela looking worried at her phone while the bus sits still in traffic, other passengers also checking their phones.",
    story:
      "Suddenly, the bus stops moving and stays still for several minutes in heavy traffic. I look out the window and see a long line of cars stopped ahead of us too. I check my phone and feel a small wave of worry about being late for work. Other passengers also look a little impatient, checking their phones or watches quietly. The driver announces there is an accident ahead, causing this unexpected delay today. I take a deep breath and remind myself that being a few minutes late happens sometimes. There is nothing I can really do except wait patiently now.",
    questions: [
      "What happens to the bus suddenly?",
      "What does Angela feel about being late?",
      "What does the driver announce?",
    ],
    trueFalse: [
      { text: "The bus stops moving in heavy traffic.", answer: true },
      { text: "Angela feels no worry at all about being late.", answer: false },
      { text: "The driver announces there is an accident ahead.", answer: true },
      { text: "Other passengers also seem a little impatient.", answer: true },
      { text: "Angela decides to get off and walk immediately.", answer: false },
    ],
    buildSentence: [
      { target: "The bus stops moving.", jumbled: ["stops", "moving.", "The", "bus"] },
      { target: "I feel a small worry.", jumbled: ["feel", "a", "I", "small", "worry."] },
      { target: "I take a deep breath.", jumbled: ["take", "a", "I", "deep", "breath."] },
      { target: "There is an accident ahead.", jumbled: ["is", "an", "There", "accident", "ahead."] },
      { target: "There is nothing I can do except wait.", jumbled: ["There", "is", "nothing", "I", "can", "do", "except", "wait."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting patiently during an unexpected delay.",
    mySentenceExample: "I waited patiently during an unexpected delay at the airport.",
  },
  {
    number: 6,
    title: "Talking with Walter",
    image: null,
    imageNote: "Angela and Walter standing together holding poles on the bus, talking and smiling during the delay, Walter's newspaper folded under his arm.",
    story:
      "During the delay, Walter walks over and stands near me, holding onto the same pole. “Traffic like this happens more than I would like,” he says with a small laugh. I laugh too and agree, feeling glad for the friendly conversation during this boring wait. He asks where I work, and I tell him about my office near the city center. He tells me he works at a small bookstore not too far from my office building. We talk easily for the rest of the delay, and the time passes much faster now. I feel happy to finally know his name properly.",
    questions: [
      "What does Walter say about the traffic?",
      "What does Walter ask Angela?",
      "Where does Walter work?",
    ],
    trueFalse: [
      { text: "Walter walks over and stands near Angela.", answer: true },
      { text: "Walter refuses to speak with Angela at all.", answer: false },
      { text: "Walter asks Angela where she works.", answer: true },
      { text: "Walter works at a small bookstore.", answer: true },
      { text: "The time passes more slowly after they talk.", answer: false },
    ],
    buildSentence: [
      { target: "Walter walks over now.", jumbled: ["walks", "over", "Walter", "now."] },
      { target: "I laugh too, honestly.", jumbled: ["laugh", "too,", "I", "honestly."] },
      { target: "He asks where I work.", jumbled: ["asks", "where", "He", "I", "work."] },
      { target: "We talk easily together.", jumbled: ["talk", "easily", "We", "together."] },
      { target: "I feel happy to finally know his name.", jumbled: ["I", "feel", "happy", "to", "finally", "know", "his", "name."] },
    ],
    mySentencePrompt: "Write or say one sentence about a conversation that made a boring wait better.",
    mySentenceExample: "A conversation with a coworker made a boring wait better.",
  },
  {
    number: 7,
    title: "Moving Again",
    image: null,
    imageNote: "Angela looking relieved as the bus begins moving forward again, traffic clearing ahead through the front window.",
    story:
      "After nearly fifteen minutes, the traffic finally starts moving again, and the bus continues its route. I feel relief as the bus picks up speed, moving smoothly through the remaining streets. Walter returns to his seat, giving me a friendly nod before sitting down again. I check my phone and calculate that I will only be a few minutes late now. My manager understands occasional delays, so I do not feel too worried about it anymore. The city passes by outside the window, and familiar buildings tell me my stop is getting closer. I gather my bag, getting ready to get off soon.",
    questions: [
      "How long does the traffic delay last?",
      "How does Angela feel when the bus starts moving?",
      "What does Angela calculate on her phone?",
    ],
    trueFalse: [
      { text: "The traffic delay lasts nearly fifteen minutes.", answer: true },
      { text: "Angela feels no relief when the bus moves again.", answer: false },
      { text: "Angela calculates she will be only a few minutes late.", answer: true },
      { text: "Walter stays standing next to Angela the whole time.", answer: false },
      { text: "Angela gathers her bag to get off soon.", answer: true },
    ],
    buildSentence: [
      { target: "The traffic starts moving.", jumbled: ["starts", "moving.", "The", "traffic"] },
      { target: "I feel relief now.", jumbled: ["feel", "relief", "I", "now."] },
      { target: "I gather my bag now.", jumbled: ["gather", "my", "I", "bag", "now."] },
      { target: "My stop is getting closer.", jumbled: ["My", "stop", "is", "getting", "closer."] },
      { target: "I will only be a few minutes late now.", jumbled: ["I", "will", "only", "be", "a", "few", "minutes", "late", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling relieved when a problem finally ends.",
    mySentenceExample: "I felt relieved when the long line finally ended.",
  },
  {
    number: 8,
    title: "Getting Off the Bus",
    image: null,
    imageNote: "Angela stepping off the bus onto a busy sidewalk near her office building, waving goodbye to Walter through the bus window.",
    story:
      "The bus finally reaches my stop, and I press the button to signal the driver to stop. I wave goodbye to Walter, who smiles and says, “See you tomorrow!” I step off the bus and onto the busy sidewalk near my office building. The fresh air feels nice after standing inside the warm, crowded bus for so long. I walk quickly toward the entrance, checking the time one more time on my phone. I am only five minutes late, which feels completely manageable and not too serious. Walking through the office doors, I already feel ready to start my workday.",
    questions: [
      "What does Angela do to signal the driver?",
      "What does Walter say as Angela leaves?",
      "How late is Angela to work?",
    ],
    trueFalse: [
      { text: "Angela presses a button to signal the driver.", answer: true },
      { text: "Walter says nothing as Angela leaves.", answer: false },
      { text: "Angela is only five minutes late.", answer: true },
      { text: "The fresh air feels unpleasant to Angela.", answer: false },
      { text: "Angela feels ready to start her workday.", answer: true },
    ],
    buildSentence: [
      { target: "I press the button.", jumbled: ["press", "the", "I", "button."] },
      { target: "I wave goodbye now.", jumbled: ["wave", "goodbye", "I", "now."] },
      { target: "See you tomorrow, he says.", jumbled: ["you", "tomorrow,", "See", "he", "says."] },
      { target: "This feels completely manageable to me.", jumbled: ["This", "feels", "completely", "manageable", "to", "me."] },
      { target: "I already feel ready to start my workday.", jumbled: ["I", "already", "feel", "ready", "to", "start", "my", "workday."] },
    ],
    mySentencePrompt: "Write or say one sentence about arriving somewhere a little late but feeling okay about it.",
    mySentenceExample: "I arrived a little late but felt okay because I had a good reason.",
  },
  {
    number: 9,
    title: "The Ride Home",
    image: null,
    imageNote: "Angela sitting on the bus in the evening, looking tired but relaxed, city lights beginning to glow outside the window.",
    story:
      "After a long workday, I walk back to the same bus stop for my ride home in the evening. The sky is turning orange, and the streets feel calmer than during the busy morning rush. I sit near a window this time, since the bus is much less crowded now. I see Walter again, and we chat briefly about our workdays before he gets off at his stop. He waves and says, “See you tomorrow morning!” before stepping off happily. I feel tired but satisfied after a full day of work, and the bus ride feels like a nice, quiet break.",
    questions: [
      "What is the sky doing on Angela's ride home?",
      "Where does Angela sit on the way home?",
      "What does Walter say before getting off?",
    ],
    trueFalse: [
      { text: "The sky is turning orange on the ride home.", answer: true },
      { text: "The bus is much more crowded than in the morning.", answer: false },
      { text: "Angela sits near a window this time.", answer: true },
      { text: "Walter says see you tomorrow morning.", answer: true },
      { text: "Angela feels annoyed by the ride home.", answer: false },
    ],
    buildSentence: [
      { target: "The sky is turning orange.", jumbled: ["sky", "is", "The", "turning", "orange."] },
      { target: "I sit near a window.", jumbled: ["sit", "near", "I", "a", "window."] },
      { target: "I feel tired but satisfied.", jumbled: ["feel", "tired", "I", "but", "satisfied."] },
      { target: "We chat briefly about our workdays.", jumbled: ["We", "chat", "briefly", "about", "our", "workdays."] },
      { target: "This bus ride feels like a nice, quiet break.", jumbled: ["This", "bus", "ride", "feels", "like", "a", "nice,", "quiet", "break."] },
    ],
    mySentencePrompt: "Write or say one sentence about a quiet moment at the end of a busy day.",
    mySentenceExample: "A quiet walk home is my favorite moment at the end of a busy day.",
  },
  {
    number: 10,
    title: "Part of My Day",
    image: null,
    imageNote: "Angela sitting at home that evening, looking at a bus schedule app on her phone with a calm, satisfied expression.",
    story:
      "At home that evening, I think about my day and the small moments that happened on the bus. The morning delay was frustrating at first, but talking with Walter made it feel much better. I realize the bus ride is not just a way to get to work anymore. It has become a small, familiar part of my daily life, filled with routine and friendly faces. Tomorrow, I will see Walter again at the same stop, and we might talk about our days once more. Taking the bus used to feel like just a task, but now it feels comfortable and familiar.",
    questions: [
      "What does Angela think about that evening?",
      "What made the morning delay feel better?",
      "How does taking the bus feel to Angela now?",
    ],
    trueFalse: [
      { text: "Angela thinks about her day and the bus ride.", answer: true },
      { text: "Talking with Walter made the delay feel worse.", answer: false },
      { text: "The bus ride has become part of Angela's daily life.", answer: true },
      { text: "Angela expects to see Walter again tomorrow.", answer: true },
      { text: "Taking the bus still feels like just a task to Angela.", answer: false },
    ],
    buildSentence: [
      { target: "I think about my day.", jumbled: ["think", "about", "I", "my", "day."] },
      { target: "This feels comfortable and familiar.", jumbled: ["feels", "comfortable", "This", "and", "familiar."] },
      { target: "I will see Walter again tomorrow.", jumbled: ["will", "see", "I", "Walter", "again", "tomorrow."] },
      { target: "This has become part of my daily life.", jumbled: ["This", "has", "become", "part", "of", "my", "daily", "life."] },
      { target: "Taking the bus used to feel like just a task.", jumbled: ["Taking", "the", "bus", "used", "to", "feel", "like", "just", "a", "task."] },
    ],
    mySentencePrompt: "Write or say one sentence about a routine that became more comfortable over time.",
    mySentenceExample: "My morning routine became more comfortable over time at my new job.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

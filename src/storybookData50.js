// B1 Teens digital storybook, Book 50: "Organizing a Fundraiser"
// Static content -- no Supabase. Second book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Organizing a Fundraiser";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Amir standing in front of a bulletin board covered in fundraiser flyers, holding a clipboard, determined expression, school hallway visible around him.";

export const CHARACTERS = [
  { name: "Amir", role: "The narrator, a teenager", look: "Glasses, hoodie, organized but easily overwhelmed under pressure." },
  { name: "Lena", role: "Amir's classmate and fundraiser partner", look: "Braided hair, denim jacket, practical and encouraging." },
  { name: "Mr. Okafor", role: "The teacher supervising the fundraiser", look: "Cardigan, calm demeanor, supportive but hands-off." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "A School in Need",
    image: null,
    imageNote: "Amir standing in a school library with damaged, worn-out books stacked on a cart, looking thoughtfully at the collection.",
    story:
      "During library club, I notice how many of our books are falling apart, with torn pages and broken spines everywhere. When I ask the librarian about replacing them, she explains that the school simply doesn't have the budget this year. This bothers me more than I expected, since I've always loved this library since I was younger. If nobody does something, these books will just keep getting worse until students can't use them properly anymore. I mention this to Lena at lunch, and she immediately suggests we organize a fundraiser ourselves. The idea feels ambitious, but something about it also feels genuinely worth trying.",
    questions: [
      "What does Amir notice about the library books?",
      "What does the librarian say about the budget?",
      "What does Lena suggest at lunch?",
    ],
    trueFalse: [
      { text: "Amir notices many books are falling apart.", answer: true },
      { text: "The librarian says the school has plenty of budget.", answer: false },
      { text: "Amir has always loved the library.", answer: true },
      { text: "Lena suggests organizing a fundraiser.", answer: true },
      { text: "Amir feels this idea is not worth trying.", answer: false },
    ],
    buildSentence: [
      { target: "This bothers me more.", jumbled: ["bothers", "me", "This", "more."] },
      { target: "She suggests a fundraiser immediately.", jumbled: ["She", "suggests", "a", "fundraiser", "immediately."] },
      { target: "This idea feels ambitious somehow.", jumbled: ["This", "idea", "feels", "ambitious", "somehow."] },
      { target: "The school doesn't have the budget.", jumbled: ["The", "school", "doesn't", "have", "the", "budget."] },
      { target: "If nobody does something, these books will keep getting worse.", jumbled: ["If", "nobody", "does", "something,", "these", "books", "will", "keep", "getting", "worse."] },
    ],
    mySentencePrompt: "Write or say one sentence about a problem you noticed that you wanted to fix.",
    mySentenceExample: "I noticed a problem with litter and wanted to organize a cleanup.",
  },
  {
    number: 2,
    title: "Getting Permission",
    image: null,
    imageNote: "Amir and Lena standing in front of Mr. Okafor's desk, presenting a written proposal, the teacher reading it thoughtfully.",
    story:
      "Before starting anything, Lena and I know we need permission from a teacher to organize this properly. We write a short proposal explaining our goal and bring it to Mr. Okafor after class. He reads it carefully, asking several questions about our plan and how we intend to collect donations. “If you're serious about this, I'll support you, but you'll need to handle most of the organizing yourselves,” he says. I feel a mix of excitement and nervousness, since neither of us has organized something like this before. Lena squeezes my arm reassuringly, reminding me that we can figure out the details together as we go.",
    questions: [
      "What do Amir and Lena bring to Mr. Okafor?",
      "What does Mr. Okafor ask about?",
      "What does Mr. Okafor say he will do?",
    ],
    trueFalse: [
      { text: "Amir and Lena write a proposal.", answer: true },
      { text: "Mr. Okafor refuses to even read their proposal.", answer: false },
      { text: "Mr. Okafor asks about their plan and donations.", answer: true },
      { text: "Mr. Okafor says he will support them.", answer: true },
      { text: "Amir feels no nervousness about this at all.", answer: false },
    ],
    buildSentence: [
      { target: "We write a short proposal.", jumbled: ["write", "a", "We", "short", "proposal."] },
      { target: "I feel excitement and nervousness.", jumbled: ["feel", "excitement", "I", "and", "nervousness."] },
      { target: "He reads it carefully today.", jumbled: ["He", "reads", "it", "carefully", "today."] },
      { target: "We can figure this out together.", jumbled: ["We", "can", "figure", "this", "out", "together."] },
      { target: "If you're serious, I'll support you, but you'll organize it.", jumbled: ["If", "you're", "serious,", "I'll", "support", "you,", "but", "you'll", "organize", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking someone for permission to do something.",
    mySentenceExample: "I asked my teacher for permission to start a school club.",
  },
  {
    number: 3,
    title: "Choosing a Plan",
    image: null,
    imageNote: "Amir and Lena sitting at a table covered in sticky notes, brainstorming different fundraiser ideas, both looking focused and animated.",
    story:
      "That weekend, Lena and I meet to brainstorm what kind of fundraiser would actually work for our school. We consider a bake sale, but Lena points out that several clubs already do that every semester. Instead, we decide on a talent show, charging a small entry fee for both performers and audience members. Although we've never organized an event this large, we figure the excitement might attract more donations than a simple sale would. We divide our tasks carefully: I'll handle the venue and equipment, while Lena manages sign-ups and publicity. By the end of our meeting, our sticky-note wall looks chaotic, but our plan finally feels solid.",
    questions: [
      "What event do Amir and Lena decide on?",
      "Why do they avoid a bake sale?",
      "How do they divide their tasks?",
    ],
    trueFalse: [
      { text: "Amir and Lena decide on a talent show.", answer: true },
      { text: "They avoid a bake sale because other clubs already do one.", answer: true },
      { text: "Amir will handle sign-ups and publicity.", answer: false },
      { text: "Lena manages sign-ups and publicity.", answer: true },
      { text: "Their plan feels completely unclear by the end.", answer: false },
    ],
    buildSentence: [
      { target: "We decide on a talent show.", jumbled: ["decide", "on", "We", "a", "talent", "show."] },
      { target: "We divide our tasks carefully.", jumbled: ["divide", "our", "We", "tasks", "carefully."] },
      { target: "Our plan finally feels solid now.", jumbled: ["Our", "plan", "finally", "feels", "solid", "now."] },
      { target: "We've never organized an event this large.", jumbled: ["We've", "never", "organized", "an", "event", "this", "large."] },
      { target: "Although we've never done this, our plan feels solid.", jumbled: ["Although", "we've", "never", "done", "this,", "our", "plan", "feels", "solid."] },
    ],
    mySentencePrompt: "Write or say one sentence about dividing tasks with someone on a project.",
    mySentenceExample: "We divided our tasks so each person handled a different part.",
  },
  {
    number: 4,
    title: "Spreading the Word",
    image: null,
    imageNote: "Amir hanging colorful flyers on a school bulletin board while Lena posts about the event on a laptop nearby, both looking busy and focused.",
    story:
      "With our plan set, Lena and I spend the next week spreading the word throughout school as widely as possible. I design and print flyers, hanging them near the cafeteria, gym, and main entrance where everyone passes daily. Lena creates a sign-up sheet online and shares it through every class group chat she can access. We also ask teachers if we can make short morning announcements about the event and our cause. Some students seem enthusiastic immediately, while others walk past our flyers without even glancing at them. Despite the mixed reactions, five acts sign up within just the first two days, which honestly surprises us both.",
    questions: [
      "What does Amir do to spread the word?",
      "What does Lena create online?",
      "How many acts sign up within the first two days?",
    ],
    trueFalse: [
      { text: "Amir designs and prints flyers.", answer: true },
      { text: "Lena creates a sign-up sheet online.", answer: true },
      { text: "Every single student reacts enthusiastically to the flyers.", answer: false },
      { text: "Five acts sign up within the first two days.", answer: true },
      { text: "Amir and Lena feel unsurprised by the response.", answer: false },
    ],
    buildSentence: [
      { target: "I design and print flyers.", jumbled: ["design", "and", "I", "print", "flyers."] },
      { target: "Five acts sign up already.", jumbled: ["Five", "acts", "sign", "up", "already."] },
      { target: "This honestly surprises us both.", jumbled: ["This", "honestly", "surprises", "us", "both."] },
      { target: "We spread the word throughout school.", jumbled: ["We", "spread", "the", "word", "throughout", "school."] },
      { target: "Some students seemed enthusiastic while others ignored it.", jumbled: ["Some", "students", "seemed", "enthusiastic", "while", "others", "ignored", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about spreading the word about an event or cause.",
    mySentenceExample: "I spread the word about our fundraiser through social media.",
  },
  {
    number: 5,
    title: "A Setback",
    image: null,
    imageNote: "Amir looking worried at his phone, reading a message that the school gym is unavailable, Lena standing nearby with a concerned expression.",
    story:
      "Ten days before the show, I receive a message that the gym has been double-booked for a sports event instead. Panic rushes through me immediately, since we had already promised performers a specific date and location. If we cancel now, all the momentum we've built over the past week would completely disappear. I call Lena right away, and although she sounds worried too, she stays remarkably calm about the situation. “Let's ask Mr. Okafor if the cafeteria could work instead,” she suggests, already thinking practically. I hadn't even considered that option, but suddenly it seems like exactly the solution we desperately need.",
    questions: [
      "What message does Amir receive ten days before the show?",
      "What does Amir worry might happen if they cancel?",
      "What does Lena suggest instead?",
    ],
    trueFalse: [
      { text: "The gym has been double-booked for a sports event.", answer: true },
      { text: "Amir feels completely calm about this news.", answer: false },
      { text: "Lena suggests using the cafeteria instead.", answer: true },
      { text: "Amir had already considered using the cafeteria.", answer: false },
      { text: "Lena stays remarkably calm about the situation.", answer: true },
    ],
    buildSentence: [
      { target: "Panic rushes through me.", jumbled: ["rushes", "through", "Panic", "me."] },
      { target: "She stays remarkably calm today.", jumbled: ["She", "stays", "remarkably", "calm", "today."] },
      { target: "I call Lena right away.", jumbled: ["call", "Lena", "I", "right", "away."] },
      { target: "This seems like exactly what we need.", jumbled: ["This", "seems", "like", "exactly", "what", "we", "need."] },
      { target: "If we cancel now, all our momentum would disappear.", jumbled: ["If", "we", "cancel", "now,", "all", "our", "momentum", "would", "disappear."] },
    ],
    mySentencePrompt: "Write or say one sentence about staying calm during an unexpected problem.",
    mySentenceExample: "I stayed calm when my plan suddenly changed at the last minute.",
  },
  {
    number: 6,
    title: "A New Location",
    image: null,
    imageNote: "Amir and Lena arranging chairs and a small stage area in the school cafeteria, Mr. Okafor helping move a table nearby.",
    story:
      "Mr. Okafor agrees the cafeteria could work, though it means rearranging our entire setup completely from scratch. Together, we measure the space and realize we'll need a smaller stage than originally planned for the gym. Lena redesigns the seating chart while I contact each performer to explain the sudden change of venue. Surprisingly, nobody drops out, and one performer even offers to help us build a simple platform stage. Working through this setback together, rather than separately, actually brings Lena and me closer as genuine partners. By the end of the day, exhausted but relieved, our new plan feels even more solid than before.",
    questions: [
      "What does Mr. Okafor agree to?",
      "What does Lena redesign?",
      "How does this setback affect Amir and Lena's partnership?",
    ],
    trueFalse: [
      { text: "Mr. Okafor agrees the cafeteria could work.", answer: true },
      { text: "Lena redesigns the seating chart.", answer: true },
      { text: "Every single performer drops out immediately.", answer: false },
      { text: "This setback brings Amir and Lena closer.", answer: true },
      { text: "Their new plan feels weaker than before.", answer: false },
    ],
    buildSentence: [
      { target: "We measure the space together.", jumbled: ["measure", "the", "We", "space", "together."] },
      { target: "Nobody drops out, surprisingly.", jumbled: ["Nobody", "drops", "out,", "surprisingly."] },
      { target: "Lena redesigns the seating chart.", jumbled: ["Lena", "redesigns", "the", "seating", "chart."] },
      { target: "This brings us closer as partners.", jumbled: ["This", "brings", "us", "closer", "as", "partners."] },
      { target: "Working through this together brings us closer as partners.", jumbled: ["Working", "through", "this", "together", "brings", "us", "closer", "as", "partners."] },
    ],
    mySentencePrompt: "Write or say one sentence about overcoming a setback together with someone.",
    mySentenceExample: "We overcame a setback together when our project plan changed suddenly.",
  },
  {
    number: 7,
    title: "The Night Before",
    image: null,
    imageNote: "Amir lying awake in bed at night, staring at the ceiling, a checklist visible on his nightstand under a small lamp.",
    story:
      "The night before the fundraiser, I lie awake, running through every possible thing that could go wrong tomorrow. What if not enough people show up, or what if the sound equipment fails during a performance? Lena had told me earlier that worrying wouldn't change anything, but my mind refuses to listen right now. I finally get up and review our checklist one more time, just to reassure myself everything is actually ready. Ticket sales have already covered nearly half our fundraising goal, which should feel more comforting than it currently does. Eventually, exhaustion wins over anxiety, and I drift into a restless, uneasy sleep before the big day.",
    questions: [
      "What does Amir do the night before the fundraiser?",
      "What had Lena told him earlier?",
      "How much of the fundraising goal have ticket sales covered?",
    ],
    trueFalse: [
      { text: "Amir lies awake worrying the night before.", answer: true },
      { text: "Lena told him worrying wouldn't change anything.", answer: true },
      { text: "Amir feels completely relaxed and confident that night.", answer: false },
      { text: "Ticket sales have covered nearly half the goal.", answer: true },
      { text: "Amir sleeps peacefully without any trouble.", answer: false },
    ],
    buildSentence: [
      { target: "I lie awake tonight.", jumbled: ["lie", "awake", "I", "tonight."] },
      { target: "My mind refuses to listen.", jumbled: ["mind", "refuses", "My", "to", "listen."] },
      { target: "I review our checklist again.", jumbled: ["review", "our", "I", "checklist", "again."] },
      { target: "Exhaustion wins over anxiety eventually.", jumbled: ["Exhaustion", "wins", "over", "anxiety", "eventually."] },
      { target: "This should feel more comforting than it currently does.", jumbled: ["This", "should", "feel", "more", "comforting", "than", "it", "currently", "does."] },
    ],
    mySentencePrompt: "Write or say one sentence about a night before an important event when you couldn't sleep well.",
    mySentenceExample: "I couldn't sleep well the night before my big exam.",
  },
  {
    number: 8,
    title: "Fundraiser Night",
    image: null,
    imageNote: "A cafeteria transformed with string lights and a small stage, students filling seats as Amir stands nervously near the entrance checking tickets.",
    story:
      "By six o'clock, the cafeteria looks completely transformed, with string lights and a small handmade stage in the corner. Students begin arriving steadily, and within twenty minutes, nearly every seat has someone sitting in it. Lena manages backstage while I greet guests at the door, collecting tickets and directing people to open seats. When the first performer steps onto the stage, the room erupts into supportive applause, and my nervousness slowly starts fading. Performance after performance goes smoothly, each one met with genuine enthusiasm from the packed, energetic crowd. Watching everything come together after weeks of planning feels genuinely overwhelming, in the best possible way.",
    questions: [
      "How does the cafeteria look by six o'clock?",
      "What does Amir do at the door?",
      "How does the crowd react to the performances?",
    ],
    trueFalse: [
      { text: "The cafeteria looks completely transformed by six.", answer: true },
      { text: "Nearly every seat has someone in it.", answer: true },
      { text: "Amir manages backstage during the show.", answer: false },
      { text: "The crowd reacts with genuine enthusiasm.", answer: true },
      { text: "Amir feels nothing watching it all come together.", answer: false },
    ],
    buildSentence: [
      { target: "Students begin arriving steadily.", jumbled: ["Students", "begin", "arriving", "steadily."] },
      { target: "My nervousness slowly starts fading.", jumbled: ["My", "nervousness", "slowly", "starts", "fading."] },
      { target: "The room erupts into applause.", jumbled: ["room", "erupts", "The", "into", "applause."] },
      { target: "This feels genuinely overwhelming in the best way.", jumbled: ["This", "feels", "genuinely", "overwhelming", "in", "the", "best", "way."] },
      { target: "Watching this come together after weeks of planning feels overwhelming.", jumbled: ["Watching", "this", "come", "together", "after", "weeks", "of", "planning", "feels", "overwhelming."] },
    ],
    mySentencePrompt: "Write or say one sentence about watching something you planned finally come together.",
    mySentenceExample: "Watching our project come together after weeks of work felt amazing.",
  },
  {
    number: 9,
    title: "Counting the Donations",
    image: null,
    imageNote: "Amir and Lena sitting at a table after the event, counting money and tickets together, both looking exhausted but excited.",
    story:
      "After the last performer bows and the crowd slowly filters out, Lena and I sit down to count everything we raised tonight. Ticket sales, plus a few generous extra donations, add up to more money than either of us had honestly expected. When we reach the final total, we look at each other, both too stunned to speak for a moment. “We actually did this,” Lena finally says, her voice filled with disbelief and quiet pride. I think about the worn-out library books that started this whole idea just a few weeks ago. Tomorrow, we'll present the total to Mr. Okafor and the librarian, but tonight, we simply celebrate quietly together.",
    questions: [
      "What do Amir and Lena do after the show ends?",
      "How does the total compare to what they expected?",
      "What does Lena say when they reach the final total?",
    ],
    trueFalse: [
      { text: "Amir and Lena count everything they raised.", answer: true },
      { text: "The total raised is less than they expected.", answer: false },
      { text: "Lena says we actually did this.", answer: true },
      { text: "Amir thinks about the worn-out library books.", answer: true },
      { text: "They plan to present the total tomorrow.", answer: true },
    ],
    buildSentence: [
      { target: "We count everything tonight.", jumbled: ["count", "everything", "We", "tonight."] },
      { target: "We actually did this, she says.", jumbled: ["actually", "did", "We", "this,", "she", "says."] },
      { target: "We simply celebrate quietly together.", jumbled: ["We", "simply", "celebrate", "quietly", "together."] },
      { target: "This adds up to more than we expected.", jumbled: ["This", "adds", "up", "to", "more", "than", "we", "expected."] },
      { target: "Both of us were too stunned to speak for a moment.", jumbled: ["Both", "of", "us", "were", "too", "stunned", "to", "speak", "for", "a", "moment."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment when hard work finally paid off.",
    mySentenceExample: "My hard work finally paid off when I saw my final grade.",
  },
  {
    number: 10,
    title: "New Books for the Library",
    image: null,
    imageNote: "Amir and Lena standing in the library, helping the librarian unbox brand-new books, both smiling proudly at the shelf.",
    story:
      "Two weeks later, boxes of brand-new books arrive at the library, purchased entirely with the money we raised together. The librarian nearly cries when she sees the collection, thanking Amir and Lena repeatedly for their thoughtful effort. Helping unpack and shelve the books feels even more satisfying than the fundraiser night itself somehow. Several classmates who attended the show now stop by regularly, asking when the next fundraiser might happen. I never expected that noticing a small problem could lead to something this meaningful and lasting. If I hadn't mentioned those torn pages to Lena, none of this would have happened at all.",
    questions: [
      "What arrives at the library two weeks later?",
      "How does the librarian react?",
      "What do several classmates ask Amir now?",
    ],
    trueFalse: [
      { text: "Boxes of brand-new books arrive two weeks later.", answer: true },
      { text: "The librarian feels nothing about this gift.", answer: false },
      { text: "Classmates ask when the next fundraiser might happen.", answer: true },
      { text: "Amir never expected this to become so meaningful.", answer: true },
      { text: "Amir regrets mentioning the torn pages to Lena.", answer: false },
    ],
    buildSentence: [
      { target: "New books arrive at the library.", jumbled: ["New", "books", "arrive", "at", "the", "library."] },
      { target: "This feels even more satisfying.", jumbled: ["This", "feels", "even", "more", "satisfying."] },
      { target: "The librarian nearly cries seeing this.", jumbled: ["The", "librarian", "nearly", "cries", "seeing", "this."] },
      { target: "I never expected this to become so meaningful.", jumbled: ["I", "never", "expected", "this", "to", "become", "so", "meaningful."] },
      { target: "If I hadn't mentioned it, none of this would have happened.", jumbled: ["If", "I", "hadn't", "mentioned", "it,", "none", "of", "this", "would", "have", "happened."] },
    ],
    mySentencePrompt: "Write or say one sentence about a small action that led to a bigger, meaningful result.",
    mySentenceExample: "A small idea I shared led to a meaningful project at my school.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

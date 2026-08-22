// A2 Teens digital storybook, Book 32: "The School Debate Team"
// Static content -- no Supabase. Second book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "The School Debate Team";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Diego standing at a podium in a school gymnasium, notecards in hand, Priya seated at a nearby table giving an encouraging thumbs up, judges visible in the background.";

export const CHARACTERS = [
  { name: "Diego", role: "The narrator, a teenager", look: "Curly hair, collared shirt, thoughtful but easily nervous when speaking in public." },
  { name: "Priya", role: "Diego's debate partner", look: "Long braid, blazer, quick-thinking and confident." },
  { name: "Mr. Alvarez", role: "The debate team coach", look: "Bow tie, sharp eyes, demanding but genuinely supportive." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Joining the Team",
    image: null,
    imageNote: "Diego standing nervously outside a classroom door with a 'Debate Club Tryouts' sign, peeking through the small window at students already inside.",
    story:
      "After my English teacher mentions that I argue persuasively during class discussions, she suggests I try out for the school debate team. I stand outside the classroom door for a full minute, unsure whether I actually have the confidence to walk inside. Public speaking has never been something I enjoyed, and the idea of debating strangers in front of judges sounds genuinely terrifying. Still, something about the challenge pulls at my curiosity. Taking a deep breath, I finally push open the door and step into a room full of students who all seem far more prepared than I feel.",
    questions: [
      "Why does the teacher suggest Diego try debate?",
      "How does Diego feel about public speaking?",
      "What does Diego finally do?",
    ],
    trueFalse: [
      { text: "Diego's teacher suggests he try out for debate.", answer: true },
      { text: "Diego has always loved public speaking.", answer: false },
      { text: "Diego stands outside the door unsure at first.", answer: true },
      { text: "Diego decides not to go inside at all.", answer: false },
      { text: "Diego feels the other students seem more prepared.", answer: true },
    ],
    buildSentence: [
      { target: "I stand outside nervously.", jumbled: ["stand", "outside", "I", "nervously."] },
      { target: "This sounds genuinely terrifying.", jumbled: ["sounds", "genuinely", "This", "terrifying."] },
      { target: "I push open the door.", jumbled: ["push", "open", "I", "the", "door."] },
      { target: "Something pulls at my curiosity.", jumbled: ["pulls", "at", "Something", "my", "curiosity."] },
      { target: "I have never enjoyed public speaking very much.", jumbled: ["have", "never", "I", "enjoyed", "public", "speaking", "very", "much."] },
    ],
    mySentencePrompt: "Write or say one sentence about a challenge you decided to try even though it scared you.",
    mySentenceExample: "I decided to try out for the school play even though public speaking scares me.",
  },
  {
    number: 2,
    title: "Learning the Rules",
    image: null,
    imageNote: "Mr. Alvarez writing debate format rules on a whiteboard while a room of students, including Diego, take notes with confused expressions.",
    story:
      "Mr. Alvarez begins the meeting by explaining the debate format, and honestly, the rules feel completely overwhelming at first. There are opening statements, rebuttals, cross-examinations, and closing arguments, each with strict time limits I struggle to keep straight. “Don't worry, everyone feels lost during their first week,” Mr. Alvarez says, noticing my confused expression among several others. He explains that debate isn't really about winning arguments through volume, but through logic, evidence, and staying calm under pressure. By the end of the meeting, my head spins with new vocabulary, but a small part of me feels intrigued rather than defeated.",
    questions: [
      "What does Mr. Alvarez explain?",
      "What does Mr. Alvarez say about winning debates?",
      "How does Diego feel by the end of the meeting?",
    ],
    trueFalse: [
      { text: "Mr. Alvarez explains the debate format.", answer: true },
      { text: "The rules feel simple to Diego immediately.", answer: false },
      { text: "Mr. Alvarez says debate is about staying calm and using logic.", answer: true },
      { text: "Diego is the only confused student in the room.", answer: false },
      { text: "Diego feels intrigued rather than defeated.", answer: true },
    ],
    buildSentence: [
      { target: "The rules feel overwhelming.", jumbled: ["feel", "overwhelming.", "The", "rules"] },
      { target: "My head spins slightly.", jumbled: ["spins", "slightly.", "My", "head"] },
      { target: "Everyone feels lost sometimes.", jumbled: ["feels", "lost", "Everyone", "sometimes."] },
      { target: "I feel intrigued rather than defeated.", jumbled: ["feel", "intrigued", "I", "rather", "than", "defeated."] },
      { target: "Debate is about logic, evidence, and staying calm.", jumbled: ["is", "about", "Debate", "logic,", "evidence,", "and", "staying", "calm."] },
    ],
    mySentencePrompt: "Write or say one sentence about learning something with a lot of new rules.",
    mySentenceExample: "Learning chess felt overwhelming because there were so many new rules.",
  },
  {
    number: 3,
    title: "Finding a Partner",
    image: null,
    imageNote: "Priya introducing herself to Diego with a confident handshake, both standing beside a table with debate topic cards spread out.",
    story:
      "For team debates, Mr. Alvarez pairs students together, and I end up partnered with Priya, someone I have only ever seen around school but never actually spoken to. “I've heard you're good at arguing,” Priya says with a grin, extending her hand for a confident handshake. I laugh nervously, admitting I'm not sure that's necessarily a compliment. As we start discussing our first practice topic, I quickly notice Priya thinks incredibly fast on her feet, building arguments almost effortlessly. Working alongside someone so naturally talented feels intimidating at first, but I also sense this partnership could genuinely help me improve.",
    questions: [
      "Who does Diego get paired with?",
      "What does Priya say about Diego?",
      "What does Diego notice about Priya's thinking?",
    ],
    trueFalse: [
      { text: "Diego is paired with Priya.", answer: true },
      { text: "Diego and Priya were already close friends before this.", answer: false },
      { text: "Priya thinks quickly and builds arguments easily.", answer: true },
      { text: "Diego feels nothing intimidating about working with Priya.", answer: false },
      { text: "Diego senses the partnership could help him improve.", answer: true },
    ],
    buildSentence: [
      { target: "I laugh nervously back.", jumbled: ["laugh", "nervously", "I", "back."] },
      { target: "Priya extends her hand.", jumbled: ["extends", "her", "Priya", "hand."] },
      { target: "This feels intimidating at first.", jumbled: ["feels", "intimidating", "This", "at", "first."] },
      { target: "Priya thinks incredibly fast on her feet.", jumbled: ["thinks", "incredibly", "Priya", "fast", "on", "her", "feet."] },
      { target: "This partnership could genuinely help me improve.", jumbled: ["could", "genuinely", "This", "partnership", "help", "me", "improve."] },
    ],
    mySentencePrompt: "Write or say one sentence about working with someone talented at something you find hard.",
    mySentenceExample: "Working with my talented friend on math helped me understand it better.",
  },
  {
    number: 4,
    title: "Building an Argument",
    image: null,
    imageNote: "Diego and Priya sitting at a library table surrounded by printed articles and highlighted notes, building an outline together on a shared laptop.",
    story:
      "Our first assigned topic asks whether school uniforms should be required, and Priya suggests we spend the whole weekend researching both sides thoroughly. “Understanding the opposing argument makes your own argument stronger,” she explains, opening several tabs of articles on her laptop. We highlight key statistics and organize our strongest points into a clear, logical outline. I discover that building a genuinely persuasive argument requires much more careful thinking than simply stating an opinion loudly. By Sunday evening, we have transformed a messy pile of research into three solid, well-supported points that I actually feel proud presenting.",
    questions: [
      "What is their first assigned topic?",
      "What does Priya say about understanding the opposing argument?",
      "How do they organize their research?",
    ],
    trueFalse: [
      { text: "Their topic is about school uniforms.", answer: true },
      { text: "Priya says understanding the other side makes your argument stronger.", answer: true },
      { text: "They ignore the opposing side completely.", answer: false },
      { text: "Building a persuasive argument requires careful thinking.", answer: true },
      { text: "They end up with no real points by Sunday.", answer: false },
    ],
    buildSentence: [
      { target: "We research both sides.", jumbled: ["research", "both", "We", "sides."] },
      { target: "We highlight key statistics.", jumbled: ["highlight", "key", "We", "statistics."] },
      { target: "I feel proud presenting this.", jumbled: ["feel", "proud", "I", "presenting", "this."] },
      { target: "We organize our strongest points.", jumbled: ["organize", "our", "We", "strongest", "points."] },
      { target: "Understanding the opposing argument makes your own argument stronger.", jumbled: ["Understanding", "the", "opposing", "argument", "makes", "your", "own", "stronger."] },
    ],
    mySentencePrompt: "Write or say one sentence about researching both sides of an issue.",
    mySentenceExample: "I researched both sides before choosing my opinion for the essay.",
  },
  {
    number: 5,
    title: "The Practice Round",
    image: null,
    imageNote: "Diego standing awkwardly while another teammate debates against him during practice, notecards shaking slightly in his hands, Mr. Alvarez observing with a clipboard.",
    story:
      "Mr. Alvarez organizes a practice round where different pairs debate against each other under timed, realistic conditions. When it's my turn to speak, my prepared notecards suddenly feel useless, and my mind goes completely blank for several agonizing seconds. I stumble through my opening statement, repeating myself awkwardly while my opponent watches with a patient but slightly amused expression. Priya tries subtly signaling encouragement from the sidelines, but nervousness completely overwhelms my ability to think clearly. When my three minutes finally end, I sit down feeling embarrassed, wondering whether I made a serious mistake joining this team.",
    questions: [
      "What does Mr. Alvarez organize?",
      "What happens to Diego's mind during his turn?",
      "How does Diego feel when his three minutes end?",
    ],
    trueFalse: [
      { text: "Mr. Alvarez organizes a timed practice round.", answer: true },
      { text: "Diego speaks confidently without any trouble.", answer: false },
      { text: "Diego's mind goes blank for several seconds.", answer: true },
      { text: "Priya tries to signal encouragement to Diego.", answer: true },
      { text: "Diego feels proud and confident afterward.", answer: false },
    ],
    buildSentence: [
      { target: "My mind goes blank.", jumbled: ["goes", "blank.", "My", "mind"] },
      { target: "I feel embarrassed afterward.", jumbled: ["feel", "embarrassed", "I", "afterward."] },
      { target: "My notecards feel useless suddenly.", jumbled: ["feel", "useless", "My", "notecards", "suddenly."] },
      { target: "Nervousness overwhelms my ability to think.", jumbled: ["overwhelms", "my", "Nervousness", "ability", "to", "think."] },
      { target: "I wonder whether I made a serious mistake.", jumbled: ["wonder", "whether", "I", "I", "made", "a", "serious", "mistake."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time your mind went blank during something important.",
    mySentenceExample: "My mind went blank during my first piano recital in front of everyone.",
  },
  {
    number: 6,
    title: "A Setback",
    image: null,
    imageNote: "Diego sitting alone on the bleachers after practice, looking discouraged, his notecards scattered beside him.",
    story:
      "After practice ends, I sit alone on the bleachers, replaying my embarrassing performance over and over in my head. Maybe Priya deserves a better partner, someone who doesn't freeze up the moment real pressure appears in front of an audience. I seriously consider quitting the team altogether, convinced that today's disaster proves I simply don't belong here among naturally confident speakers. My notecards lie scattered beside me, a small, defeated reminder of hours spent preparing for something I still completely failed at delivering. Part of me wants to disappear quietly before anyone notices how discouraged I actually feel.",
    questions: [
      "Where does Diego sit after practice?",
      "What does Diego consider doing?",
      "How does Diego feel looking at his notecards?",
    ],
    trueFalse: [
      { text: "Diego sits alone on the bleachers.", answer: true },
      { text: "Diego feels completely confident after practice.", answer: false },
      { text: "Diego considers quitting the team.", answer: true },
      { text: "Diego believes he prepared for nothing at all.", answer: false },
      { text: "Diego wants to disappear quietly.", answer: true },
    ],
    buildSentence: [
      { target: "I sit alone quietly.", jumbled: ["sit", "alone", "I", "quietly."] },
      { target: "I might not belong here.", jumbled: ["might", "not", "I", "belong", "here."] },
      { target: "I seriously consider quitting completely.", jumbled: ["seriously", "consider", "I", "quitting", "completely."] },
      { target: "My notecards lie scattered beside me.", jumbled: ["lie", "scattered", "My", "notecards", "beside", "me."] },
      { target: "Part of me wants to disappear quietly.", jumbled: ["of", "me", "Part", "wants", "to", "disappear", "quietly."] },
    ],
    mySentencePrompt: "Write or say one sentence about a time you felt discouraged after trying something new.",
    mySentenceExample: "I felt discouraged after my first attempt at painting looked messy.",
  },
  {
    number: 7,
    title: "Priya's Advice",
    image: null,
    imageNote: "Priya sitting down beside Diego on the bleachers, speaking gently and pointing at his scattered notecards while he listens.",
    story:
      "Just as I'm about to leave, Priya walks over and sits beside me without saying a word at first. “Everyone freezes their first time. I did too,” she finally admits, surprising me completely. She explains that the problem wasn't my argument, which was actually well-researched, but rather that I tried memorizing every word instead of just knowing my main points. “Speak like you're explaining it to a friend,” she suggests, “not reciting a script.” Hearing that even Priya struggled once makes my failure feel less permanent, and slowly, a small flicker of determination replaces my earlier urge to quit.",
    questions: [
      "What does Priya admit about her own first time?",
      "What does Priya say the real problem was?",
      "What advice does Priya give Diego?",
    ],
    trueFalse: [
      { text: "Priya admits she froze during her first time too.", answer: true },
      { text: "Priya says Diego's argument itself was badly researched.", answer: false },
      { text: "Priya suggests speaking like explaining to a friend.", answer: true },
      { text: "Diego feels his failure is permanent after hearing this.", answer: false },
      { text: "Diego feels a small flicker of determination return.", answer: true },
    ],
    buildSentence: [
      { target: "Priya sits beside me.", jumbled: ["sits", "beside", "Priya", "me."] },
      { target: "Everyone freezes their first time.", jumbled: ["freezes", "their", "Everyone", "first", "time."] },
      { target: "I did too, honestly.", jumbled: ["did", "too,", "I", "honestly."] },
      { target: "Speak like you're explaining to a friend.", jumbled: ["like", "you're", "Speak", "explaining", "to", "a", "friend."] },
      { target: "A small flicker of determination replaces my urge to quit.", jumbled: ["of", "determination", "A", "small", "flicker", "replaces", "my", "urge", "to", "quit."] },
    ],
    mySentencePrompt: "Write or say one sentence about advice that helped you feel less alone in a struggle.",
    mySentenceExample: "Hearing my sister struggled too helped me feel less alone in learning guitar.",
  },
  {
    number: 8,
    title: "The Real Tournament",
    image: null,
    imageNote: "Diego and Priya walking into a school gymnasium filled with tables and competing teams, both wearing matching team badges, nervous but determined.",
    story:
      "A month later, our team travels to a real regional debate tournament held at a different school's gymnasium. The room buzzes with dozens of students in matching team colors, and my nerves return instantly at the sight of unfamiliar, confident faces everywhere. Priya squeezes my shoulder reassuringly as we find our assigned table for the first round. Remembering her advice, I focus on knowing my main points rather than reciting memorized sentences word for word. When my turn comes, my voice shakes slightly at first, but I push through, speaking more naturally than I ever managed during practice.",
    questions: [
      "Where does the tournament take place?",
      "How does Diego feel seeing the competing teams?",
      "What does Diego remember when it's his turn?",
    ],
    trueFalse: [
      { text: "The tournament takes place at a different school.", answer: true },
      { text: "Diego feels completely relaxed seeing the other teams.", answer: false },
      { text: "Priya squeezes Diego's shoulder reassuringly.", answer: true },
      { text: "Diego forgets Priya's advice completely.", answer: false },
      { text: "Diego speaks more naturally than during practice.", answer: true },
    ],
    buildSentence: [
      { target: "My nerves return instantly.", jumbled: ["return", "instantly.", "My", "nerves"] },
      { target: "My voice shakes slightly.", jumbled: ["shakes", "slightly.", "My", "voice"] },
      { target: "I push through anyway.", jumbled: ["push", "through", "I", "anyway."] },
      { target: "We find our assigned table.", jumbled: ["find", "our", "We", "assigned", "table."] },
      { target: "I speak more naturally than during practice.", jumbled: ["speak", "more", "I", "naturally", "than", "during", "practice."] },
    ],
    mySentencePrompt: "Write or say one sentence about a competition or event that made you nervous.",
    mySentenceExample: "My first swim meet made me nervous but excited at the same time.",
  },
  {
    number: 9,
    title: "Facing a Tough Opponent",
    image: null,
    imageNote: "Diego standing across from a confident, sharply dressed opposing debater, both mid-argument at a debate table, judges taking notes nearby.",
    story:
      "Our final round pairs us against the tournament's top-ranked team, a duo known for their sharp, quick rebuttals that had eliminated several other teams already. My stomach tightens as their lead speaker begins, effortlessly dismantling parts of an argument we had prepared. Instead of panicking like I might have weeks ago, I remember Priya's advice and calmly build on our remaining points instead. When it's my turn for rebuttal, I surprise myself by responding smoothly, addressing their argument directly instead of ignoring it. Whether we win or lose, I realize I am actually holding my own.",
    questions: [
      "Who do they face in the final round?",
      "What does the opposing lead speaker do?",
      "How does Diego react compared to how he might have before?",
    ],
    trueFalse: [
      { text: "They face the tournament's top-ranked team.", answer: true },
      { text: "Diego panics completely and gives up.", answer: false },
      { text: "Diego remembers Priya's advice during the round.", answer: true },
      { text: "Diego ignores the opponent's argument entirely.", answer: false },
      { text: "Diego realizes he is holding his own.", answer: true },
    ],
    buildSentence: [
      { target: "My stomach tightens instantly.", jumbled: ["tightens", "instantly.", "My", "stomach"] },
      { target: "I respond smoothly instead.", jumbled: ["respond", "smoothly", "I", "instead."] },
      { target: "I am holding my own.", jumbled: ["am", "holding", "I", "my", "own."] },
      { target: "I remember Priya's advice calmly.", jumbled: ["remember", "Priya's", "I", "advice", "calmly."] },
      { target: "I address their argument directly instead of ignoring it.", jumbled: ["address", "their", "I", "argument", "directly", "instead", "of", "ignoring", "it."] },
    ],
    mySentencePrompt: "Write or say one sentence about facing a difficult challenger or challenge.",
    mySentenceExample: "I faced a difficult opponent in chess but stayed calm and focused.",
  },
  {
    number: 10,
    title: "Win or Lose, We Grew",
    image: null,
    imageNote: "Diego and Priya standing together outside the gymnasium after the tournament, holding a small participation ribbon, both smiling proudly despite not winning first place.",
    story:
      "In the end, our team doesn't win the tournament, losing narrowly to the top-ranked pair by only a few judge points. Standing outside the gymnasium afterward, I expect to feel crushed, but strangely, I mostly feel proud instead. “Remember how you froze during that first practice round?” Priya asks, grinning as she recalls how far I have actually come. She's right; the nervous, blank-minded version of myself from weeks ago would never have survived facing the tournament's toughest team so calmly. Walking to the car, I already find myself looking forward to next semester's competition, something I never expected to feel.",
    questions: [
      "Does their team win the tournament?",
      "How does Diego feel afterward, unexpectedly?",
      "What does Diego look forward to by the end?",
    ],
    trueFalse: [
      { text: "Their team loses narrowly to the top-ranked pair.", answer: true },
      { text: "Diego feels completely crushed afterward.", answer: false },
      { text: "Priya reminds Diego how far he has come.", answer: true },
      { text: "Diego decides he never wants to debate again.", answer: false },
      { text: "Diego looks forward to next semester's competition.", answer: true },
    ],
    buildSentence: [
      { target: "I mostly feel proud.", jumbled: ["mostly", "feel", "I", "proud."] },
      { target: "We lose narrowly today.", jumbled: ["lose", "narrowly", "We", "today."] },
      { target: "Look how far you've come.", jumbled: ["how", "far", "Look", "you've", "come."] },
      { target: "I never expected to feel this.", jumbled: ["never", "expected", "I", "to", "feel", "this."] },
      { target: "That nervous version of myself would never have survived this.", jumbled: ["nervous", "version", "That", "of", "myself", "would", "never", "have", "survived", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about growing from an experience even without winning.",
    mySentenceExample: "I grew a lot from the competition even though our team didn't win first place.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

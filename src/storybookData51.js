// B1 Teens digital storybook, Book 51: "Failing the Try-Outs"
// Static content -- no Supabase. Third book in the B1 Teens batch
// (Books 49-56). Same structure/level as storybookData49.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Failing the Try-Outs";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Jordan standing alone outside the gym doors, staring at a posted list without his name on it, shoulders slumped in disappointment.";

export const CHARACTERS = [
  { name: "Jordan", role: "The narrator, a teenager", look: "Athletic build, team jersey, determined but struggling with disappointment." },
  { name: "Coach Reeves", role: "The basketball team's coach", look: "Whistle around his neck, clipboard, honest but encouraging." },
  { name: "Mei", role: "Jordan's classmate and friend", look: "Ponytail, glasses, thoughtful and steady presence." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Preparing for Try-Outs",
    image: null,
    imageNote: "Jordan practicing basketball shots alone on an outdoor court at sunset, sweat visible, a determined expression on his face.",
    story:
      "For the past two months, I've practiced basketball almost every single day after school without exception. Making the varsity team has been my main goal since I started high school, and try-outs are finally tomorrow. I've been shooting free throws, running drills, and watching game footage whenever I possibly have free time. If I make the team this year, it would prove all those early morning practices were genuinely worth the effort. My legs ache tonight from today's final practice session, but I feel more prepared than I've ever felt before. Tomorrow will either confirm everything I've worked toward or force me to reconsider my whole plan.",
    questions: [
      "How long has Jordan been practicing basketball?",
      "What has been Jordan's main goal since high school started?",
      "How does Jordan feel the night before try-outs?",
    ],
    trueFalse: [
      { text: "Jordan has practiced almost every day for two months.", answer: true },
      { text: "Making the varsity team has been Jordan's main goal.", answer: true },
      { text: "Try-outs are scheduled for next month.", answer: false },
      { text: "Jordan's legs ache from today's practice.", answer: true },
      { text: "Jordan feels less prepared than ever before.", answer: false },
    ],
    buildSentence: [
      { target: "My legs ache tonight.", jumbled: ["legs", "ache", "My", "tonight."] },
      { target: "Try-outs are finally tomorrow.", jumbled: ["are", "finally", "Try-outs", "tomorrow."] },
      { target: "I feel more prepared than ever.", jumbled: ["I", "feel", "more", "prepared", "than", "ever."] },
      { target: "I've practiced almost every day.", jumbled: ["I've", "practiced", "almost", "every", "day."] },
      { target: "If I make the team, it would prove my effort worthwhile.", jumbled: ["If", "I", "make", "the", "team,", "it", "would", "prove", "my", "effort", "worthwhile."] },
    ],
    mySentencePrompt: "Write or say one sentence about preparing hard for something important.",
    mySentenceExample: "I prepared hard for my exam by studying every night.",
  },
  {
    number: 2,
    title: "Try-Out Day",
    image: null,
    imageNote: "Jordan standing in a crowded gym with other hopeful players, stretching nervously while Coach Reeves observes from the sidelines.",
    story:
      "The gym feels crowded and tense as nearly thirty players stretch and warm up before try-outs officially begin. Coach Reeves walks around with his clipboard, occasionally jotting down notes while watching everyone carefully. My hands feel slightly sweaty, though I try to focus only on my own performance rather than comparing myself to others. During the scrimmage portion, I make a few solid plays, though I also miss an easy shot I normally never miss. While running drills, I notice Coach Reeves watching me specifically at one point, which makes me both hopeful and nervous simultaneously. By the end of the session, I genuinely have no idea how well I actually performed.",
    questions: [
      "How many players are trying out?",
      "What does Jordan try to focus on?",
      "How does Jordan feel by the end of the session?",
    ],
    trueFalse: [
      { text: "Nearly thirty players are trying out.", answer: true },
      { text: "Jordan tries to focus only on comparing himself to others.", answer: false },
      { text: "Jordan misses an easy shot he normally makes.", answer: true },
      { text: "Coach Reeves watches Jordan at one point.", answer: true },
      { text: "Jordan feels completely confident about his performance.", answer: false },
    ],
    buildSentence: [
      { target: "My hands feel slightly sweaty.", jumbled: ["hands", "feel", "My", "slightly", "sweaty."] },
      { target: "I make a few solid plays.", jumbled: ["make", "a", "I", "few", "solid", "plays."] },
      { target: "This makes me hopeful and nervous.", jumbled: ["This", "makes", "me", "hopeful", "and", "nervous."] },
      { target: "I try to focus on my performance.", jumbled: ["I", "try", "to", "focus", "on", "my", "performance."] },
      { target: "I have no idea how well I performed.", jumbled: ["I", "have", "no", "idea", "how", "well", "I", "performed."] },
    ],
    mySentencePrompt: "Write or say one sentence about being nervous during an important test or tryout.",
    mySentenceExample: "I felt nervous during my driving test but tried to focus.",
  },
  {
    number: 3,
    title: "The Waiting Period",
    image: null,
    imageNote: "Jordan sitting at his desk at home, staring at his phone, refreshing the school website repeatedly, a tense expression on his face.",
    story:
      "Coach Reeves announced the results would be posted three days later, which somehow feels like an eternity right now. Every hour that passes, I find myself checking my phone, half expecting some kind of early notification. Mei, noticing my constant anxiety at lunch, reminds me that overthinking this won't actually change the outcome at all. She's right, logically, but knowing something intellectually doesn't always calm the nervous feeling in my stomach. That night, I replay every single play from try-outs, wondering if I could have done something differently. If only results came out immediately, this waiting period wouldn't feel nearly as unbearable as it currently does.",
    questions: [
      "When did Coach Reeves say results would be posted?",
      "What does Mei remind Jordan at lunch?",
      "What does Jordan do that night?",
    ],
    trueFalse: [
      { text: "Results will be posted three days later.", answer: true },
      { text: "Jordan feels completely calm during the waiting period.", answer: false },
      { text: "Mei reminds Jordan that overthinking won't change anything.", answer: true },
      { text: "Jordan replays every play from try-outs that night.", answer: true },
      { text: "Jordan feels this waiting period is easy to bear.", answer: false },
    ],
    buildSentence: [
      { target: "This feels like an eternity.", jumbled: ["feels", "like", "This", "an", "eternity."] },
      { target: "I check my phone constantly.", jumbled: ["check", "my", "I", "phone", "constantly."] },
      { target: "She's right, logically speaking.", jumbled: ["is", "right,", "She's", "logically", "speaking."] },
      { target: "I wonder if I could have done differently.", jumbled: ["I", "wonder", "if", "I", "could", "have", "done", "differently."] },
      { target: "If results came out immediately, this wouldn't feel unbearable.", jumbled: ["If", "results", "came", "out", "immediately,", "this", "wouldn't", "feel", "unbearable."] },
    ],
    mySentencePrompt: "Write or say one sentence about waiting anxiously for important news.",
    mySentenceExample: "I waited anxiously for news about my college application.",
  },
  {
    number: 4,
    title: "The List",
    image: null,
    imageNote: "Jordan standing in a crowd of students outside the gym, scanning a posted list on the door, his expression shifting from hope to disappointment.",
    story:
      "On the third morning, a crowd already surrounds the gym doors before I even arrive at school. I push through gently, my heart pounding as I scan the list for my name among the others. I read it once, then twice, my stomach sinking lower with each careful pass through the names. My name isn't there, and for a moment, I genuinely cannot process what that actually means. Students around me celebrate loudly, hugging each other, while I stand frozen, feeling completely invisible in the noisy crowd. I quietly step back and walk away before anyone notices the tears threatening to form in my eyes.",
    questions: [
      "What does Jordan find when he reaches the gym doors?",
      "How many times does Jordan read the list?",
      "How does Jordan feel when he doesn't find his name?",
    ],
    trueFalse: [
      { text: "A crowd already surrounds the gym doors.", answer: true },
      { text: "Jordan finds his name on the list immediately.", answer: false },
      { text: "Jordan's stomach sinks reading the list.", answer: true },
      { text: "Jordan feels completely invisible in the crowd.", answer: true },
      { text: "Jordan celebrates loudly with everyone else.", answer: false },
    ],
    buildSentence: [
      { target: "My heart pounds now.", jumbled: ["heart", "pounds", "My", "now."] },
      { target: "My name isn't there.", jumbled: ["name", "isn't", "My", "there."] },
      { target: "I stand frozen, feeling invisible.", jumbled: ["I", "stand", "frozen,", "feeling", "invisible."] },
      { target: "I quietly step back and walk away.", jumbled: ["I", "quietly", "step", "back", "and", "walk", "away."] },
      { target: "I cannot process what that actually means.", jumbled: ["I", "cannot", "process", "what", "that", "actually", "means."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment of disappointment you experienced.",
    mySentenceExample: "I felt disappointed when I didn't get the part in the school play.",
  },
  {
    number: 5,
    title: "Alone with the News",
    image: null,
    imageNote: "Jordan sitting alone on a bench outside the school, staring at the ground, his basketball bag beside him, a heavy expression on his face.",
    story:
      "I sit alone on a bench outside, unable to face going back into a school full of celebrating classmates. Two months of early mornings, sore muscles, and missed hangouts suddenly feel completely pointless in this exact moment. I text my mom that I'll walk home instead of getting picked up, needing time alone before facing anyone. Although I know logically that one failed try-out doesn't define my entire future, it certainly doesn't feel that way right now. I keep replaying that missed shot from try-out day, wondering if it single-handedly cost me my spot. The disappointment sits heavy in my chest, making even simple breathing feel oddly difficult today.",
    questions: [
      "Where does Jordan sit after seeing the list?",
      "What does Jordan text his mom?",
      "What does Jordan keep replaying?",
    ],
    trueFalse: [
      { text: "Jordan sits alone on a bench outside.", answer: true },
      { text: "Jordan feels his two months of work were pointless right now.", answer: true },
      { text: "Jordan texts his mom to pick him up immediately.", answer: false },
      { text: "Jordan keeps replaying the missed shot from try-outs.", answer: true },
      { text: "Jordan feels completely fine and unaffected.", answer: false },
    ],
    buildSentence: [
      { target: "I sit alone right now.", jumbled: ["sit", "alone", "I", "right", "now."] },
      { target: "The disappointment sits heavy inside.", jumbled: ["disappointment", "sits", "The", "heavy", "inside."] },
      { target: "I need time alone first.", jumbled: ["I", "need", "time", "alone", "first."] },
      { target: "I wonder if that shot cost me my spot.", jumbled: ["I", "wonder", "if", "that", "shot", "cost", "me", "my", "spot."] },
      { target: "Although I know this logically, it doesn't feel that way.", jumbled: ["Although", "I", "know", "this", "logically,", "it", "doesn't", "feel", "that", "way."] },
    ],
    mySentencePrompt: "Write or say one sentence about needing time alone after disappointing news.",
    mySentenceExample: "I needed time alone after hearing disappointing news about my grade.",
  },
  {
    number: 6,
    title: "Mei's Visit",
    image: null,
    imageNote: "Mei sitting beside Jordan on his front porch that evening, talking gently while he listens with a tired, thoughtful expression.",
    story:
      "That evening, Mei shows up unannounced at my house, having heard the news from someone at school. She doesn't offer empty comfort or pretend the situation isn't genuinely disappointing, which I appreciate more than expected. Instead, she asks thoughtful questions about what basketball actually means to me beyond just making this particular team. I admit I love the sport itself deeply, not only the status of wearing a varsity jersey. “Maybe there are other ways to keep playing, even if this specific door closed,” she suggests carefully. Her perspective doesn't erase my disappointment completely, but it does offer something I desperately needed: a slightly wider view.",
    questions: [
      "How does Mei find out about the news?",
      "What does Mei avoid doing?",
      "What does Mei suggest to Jordan?",
    ],
    trueFalse: [
      { text: "Mei shows up unannounced at Jordan's house.", answer: true },
      { text: "Mei pretends the situation isn't disappointing at all.", answer: false },
      { text: "Mei asks what basketball actually means to Jordan.", answer: true },
      { text: "Mei suggests there might be other ways to keep playing.", answer: true },
      { text: "Jordan feels her perspective offers him nothing at all.", answer: false },
    ],
    buildSentence: [
      { target: "Mei shows up unannounced today.", jumbled: ["Mei", "shows", "up", "unannounced", "today."] },
      { target: "I appreciate this more than expected.", jumbled: ["I", "appreciate", "this", "more", "than", "expected."] },
      { target: "I love the sport itself deeply.", jumbled: ["I", "love", "the", "sport", "itself", "deeply."] },
      { target: "She offers a slightly wider view.", jumbled: ["She", "offers", "a", "slightly", "wider", "view."] },
      { target: "Maybe there are other ways to keep playing.", jumbled: ["Maybe", "there", "are", "other", "ways", "to", "keep", "playing."] },
    ],
    mySentencePrompt: "Write or say one sentence about a friend who helped you see a situation differently.",
    mySentenceExample: "My friend helped me see my failed test differently by asking good questions.",
  },
  {
    number: 7,
    title: "Talking to Coach Reeves",
    image: null,
    imageNote: "Jordan standing in Coach Reeves's office, listening carefully as the coach gives feedback, both looking serious but respectful.",
    story:
      "A few days later, I gather enough courage to ask Coach Reeves for honest feedback about my try-out performance. He seems genuinely pleased I asked, explaining that my skills were actually solid, but my consistency needs more work overall. “You have real potential, Jordan, but there were three other players slightly more consistent this particular year,” he explains honestly. Hearing this stings, but it also feels considerably more useful than simply wondering endlessly what went wrong. He mentions a summer development league that could help me improve specific weaknesses before next year's try-outs. Walking out of his office, I feel something unexpected: cautious hope instead of pure defeat.",
    questions: [
      "What does Jordan ask Coach Reeves for?",
      "What does Coach Reeves say about Jordan's skills?",
      "What does Coach Reeves mention that could help Jordan?",
    ],
    trueFalse: [
      { text: "Jordan asks Coach Reeves for honest feedback.", answer: true },
      { text: "Coach Reeves says Jordan's skills were actually solid.", answer: true },
      { text: "Coach Reeves refuses to explain anything to Jordan.", answer: false },
      { text: "Coach Reeves mentions a summer development league.", answer: true },
      { text: "Jordan feels pure defeat walking out of the office.", answer: false },
    ],
    buildSentence: [
      { target: "This stings, but it helps.", jumbled: ["This", "stings,", "but", "it", "helps."] },
      { target: "I gather enough courage today.", jumbled: ["I", "gather", "enough", "courage", "today."] },
      { target: "You have real potential, Jordan.", jumbled: ["have", "real", "You", "potential,", "Jordan."] },
      { target: "I feel cautious hope instead of defeat.", jumbled: ["I", "feel", "cautious", "hope", "instead", "of", "defeat."] },
      { target: "This feels more useful than wondering what went wrong.", jumbled: ["This", "feels", "more", "useful", "than", "wondering", "what", "went", "wrong."] },
    ],
    mySentencePrompt: "Write or say one sentence about asking for honest feedback after a disappointment.",
    mySentenceExample: "I asked for honest feedback after failing my driving test the first time.",
  },
  {
    number: 8,
    title: "Joining the Summer League",
    image: null,
    imageNote: "Jordan practicing drills with a small group of players at an outdoor court during summer, sweating but focused and determined.",
    story:
      "I decide to sign up for the summer development league Coach Reeves mentioned, despite still feeling residual disappointment about missing varsity. The league feels different from regular try-outs, focused more on genuine skill-building than immediate competition or comparison. I work specifically on my consistency, practicing the same shots repeatedly until they feel completely automatic rather than uncertain. Some days feel discouraging, especially when progress seems painfully slow compared to what I'm hoping for. However, other days bring small breakthroughs, moments where something finally clicks into place after weeks of repetitive effort. Slowly, I begin rebuilding not just my basketball skills, but also my confidence in myself.",
    questions: [
      "What does Jordan decide to sign up for?",
      "What does Jordan work on specifically?",
      "What does Jordan begin rebuilding besides basketball skills?",
    ],
    trueFalse: [
      { text: "Jordan signs up for the summer development league.", answer: true },
      { text: "The league focuses only on competition, not skill-building.", answer: false },
      { text: "Jordan works specifically on his consistency.", answer: true },
      { text: "Some days feel discouraging for Jordan.", answer: true },
      { text: "Jordan begins rebuilding his confidence too.", answer: true },
    ],
    buildSentence: [
      { target: "I sign up for this league.", jumbled: ["sign", "up", "I", "for", "this", "league."] },
      { target: "Some days feel discouraging still.", jumbled: ["Some", "days", "feel", "discouraging", "still."] },
      { target: "Something finally clicks into place.", jumbled: ["Something", "finally", "clicks", "into", "place."] },
      { target: "I work specifically on my consistency.", jumbled: ["I", "work", "specifically", "on", "my", "consistency."] },
      { target: "I begin rebuilding my confidence in myself too.", jumbled: ["I", "begin", "rebuilding", "my", "confidence", "in", "myself", "too."] },
    ],
    mySentencePrompt: "Write or say one sentence about rebuilding your confidence after a setback.",
    mySentenceExample: "I rebuilt my confidence after a setback by practicing consistently.",
  },
  {
    number: 9,
    title: "A Different Kind of Team",
    image: null,
    imageNote: "Jordan laughing with his summer league teammates after a game, all high-fiving each other, a relaxed and happy atmosphere.",
    story:
      "By midsummer, I've become genuinely close with several teammates from the development league, something I hadn't expected at all. Unlike the pressure-filled atmosphere of varsity try-outs, this group feels supportive, encouraging each other through mistakes rather than judging them harshly. One teammate, Marcus, also didn't make varsity this year, and we bond over our shared disappointment and determination. We practice extra hours together sometimes, pushing each other to improve rather than competing against one another directly. I realize this experience is teaching me something varsity might not have: genuine teamwork built on mutual support instead of only competition. Missing that first list might have led me somewhere unexpectedly valuable.",
    questions: [
      "What has Jordan become by midsummer?",
      "Who is Marcus, and what do he and Jordan share?",
      "What is Jordan realizing about this experience?",
    ],
    trueFalse: [
      { text: "Jordan has become close with several teammates.", answer: true },
      { text: "This group judges each other harshly for mistakes.", answer: false },
      { text: "Marcus also didn't make varsity this year.", answer: true },
      { text: "Jordan and Marcus practice extra hours together.", answer: true },
      { text: "Jordan feels this experience taught him nothing valuable.", answer: false },
    ],
    buildSentence: [
      { target: "This group feels supportive now.", jumbled: ["This", "group", "feels", "supportive", "now."] },
      { target: "We bond over shared disappointment.", jumbled: ["We", "bond", "over", "shared", "disappointment."] },
      { target: "We push each other to improve.", jumbled: ["We", "push", "each", "other", "to", "improve."] },
      { target: "This experience is teaching me something new.", jumbled: ["This", "experience", "is", "teaching", "me", "something", "new."] },
      { target: "Missing that list might have led me somewhere valuable.", jumbled: ["Missing", "that", "list", "might", "have", "led", "me", "somewhere", "valuable."] },
    ],
    mySentencePrompt: "Write or say one sentence about a supportive group or team you've been part of.",
    mySentenceExample: "My study group was a supportive team that helped me through exams.",
  },
  {
    number: 10,
    title: "Looking Toward Next Year",
    image: null,
    imageNote: "Jordan standing on the outdoor court at sunset, basketball in hand, looking confidently toward the school building in the distance.",
    story:
      "As summer ends, I reflect on how differently this season turned out compared to what I had originally planned. If someone had told me in spring that failing try-outs would lead to genuine growth, I probably wouldn't have believed them. My consistency has improved noticeably, something Coach Reeves himself noticed when he stopped by one of our league games recently. I'm planning to try out again next year, though this time with a healthier perspective on what success actually means. Whether or not I make the team, I now know that setbacks don't have to be endings, only unexpected redirections. This summer taught me resilience matters more than any single try-out result ever could.",
    questions: [
      "What does Jordan reflect on as summer ends?",
      "What did Coach Reeves notice when he stopped by?",
      "What has Jordan learned about setbacks?",
    ],
    trueFalse: [
      { text: "Jordan reflects on how the season turned out.", answer: true },
      { text: "Coach Reeves noticed Jordan's improved consistency.", answer: true },
      { text: "Jordan decides never to try out for the team again.", answer: false },
      { text: "Jordan learned setbacks don't have to be endings.", answer: true },
      { text: "Jordan believes resilience matters less than results.", answer: false },
    ],
    buildSentence: [
      { target: "My consistency has improved noticeably.", jumbled: ["My", "consistency", "has", "improved", "noticeably."] },
      { target: "I'm planning to try out again.", jumbled: ["I'm", "planning", "to", "try", "out", "again."] },
      { target: "Setbacks don't have to be endings.", jumbled: ["Setbacks", "don't", "have", "to", "be", "endings."] },
      { target: "This summer taught me resilience matters more.", jumbled: ["This", "summer", "taught", "me", "resilience", "matters", "more."] },
      { target: "If someone had told me this in spring, I wouldn't have believed them.", jumbled: ["If", "someone", "had", "told", "me", "this", "in", "spring,", "I", "wouldn't", "have", "believed", "them."] },
    ],
    mySentencePrompt: "Write or say one sentence about what you learned from a difficult setback.",
    mySentenceExample: "I learned that setbacks can lead to unexpected growth if I keep trying.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

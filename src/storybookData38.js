// A2 Teens digital storybook, Book 38: "Learning to Skateboard"
// Static content -- no Supabase. Eighth and final book in the A2 Teens
// batch (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Learning to Skateboard";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Marcus balancing confidently on a skateboard at a sunny skate park, Dev and Jasmine cheering nearby, colorful ramps and graffiti art in the background.";

export const CHARACTERS = [
  { name: "Marcus", role: "The narrator, a teenager", look: "Short hair, graphic T-shirt, eager but visibly wobbly on wheels at first." },
  { name: "Dev", role: "A friendly, experienced skater Marcus meets", look: "Beanie, scraped knees, encouraging and patient." },
  { name: "Jasmine", role: "An older skater at the park", look: "Nose ring, worn-in sneakers, confident and generous with advice." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "The New Skateboard",
    image: null,
    imageNote: "Marcus unwrapping a brand-new skateboard on his birthday, eyes wide with excitement, his family watching and smiling in the living room.",
    story:
      "For my sixteenth birthday, my older cousin surprises me with something I've secretly wanted for months: a genuine, brand-new skateboard with bright orange wheels. I have watched skating videos online countless times, admiring how effortlessly experienced skaters glide, flip, and balance with apparent ease. Holding the smooth wooden deck in my hands, I feel a rush of excitement mixed with sudden, unexpected nervousness about actually trying it myself. “You'll fall a lot before you get good,” my cousin warns honestly, though his warning barely dampens my enthusiasm. That evening, I can't wait to finally step onto it for the very first time.",
    questions: [
      "What does Marcus's cousin give him?",
      "What has Marcus watched countless times?",
      "What warning does his cousin give?",
    ],
    trueFalse: [
      { text: "Marcus's cousin gives him a skateboard.", answer: true },
      { text: "Marcus has never watched any skating videos before.", answer: false },
      { text: "His cousin warns he'll fall a lot before getting good.", answer: true },
      { text: "Marcus feels nothing about trying it himself.", answer: false },
      { text: "Marcus can't wait to step onto it.", answer: true },
    ],
    buildSentence: [
      { target: "I feel a rush of excitement.", jumbled: ["feel", "a", "I", "rush", "of", "excitement."] },
      { target: "You'll fall a lot first.", jumbled: ["fall", "a", "You'll", "lot", "first."] },
      { target: "I can't wait to try.", jumbled: ["can't", "wait", "I", "to", "try."] },
      { target: "I hold the smooth wooden deck.", jumbled: ["hold", "the", "I", "smooth", "wooden", "deck."] },
      { target: "This barely dampens my enthusiasm at all.", jumbled: ["This", "barely", "dampens", "my", "enthusiasm", "at", "all."] },
    ],
    mySentencePrompt: "Write or say one sentence about receiving a gift you had wanted for a long time.",
    mySentenceExample: "I received a bicycle I had wanted for a long time on my birthday.",
  },
  {
    number: 2,
    title: "Wobbly First Try",
    image: null,
    imageNote: "Marcus wobbling unsteadily on his skateboard in his driveway, arms flailing for balance, his younger sister watching and giggling from the porch.",
    story:
      "In our driveway, I step onto the skateboard for the first time, immediately discovering that standing still on wheels feels shockingly harder than any video suggested. My arms flail wildly for balance, and within seconds, I topple sideways onto the grass, feeling slightly foolish despite no one else being around. My little sister watches from the porch, giggling openly at my clumsy, uncoordinated attempts to simply stay upright. Determined despite the embarrassment, I climb back on repeatedly, falling nearly a dozen times before managing even a few wobbly, uncertain seconds of actual balance. This is definitely harder than it looks online.",
    questions: [
      "What does Marcus discover about standing on the skateboard?",
      "Who watches and giggles at Marcus?",
      "How many times does Marcus fall?",
    ],
    trueFalse: [
      { text: "Standing still on wheels feels harder than expected.", answer: true },
      { text: "Marcus stays perfectly balanced on his first try.", answer: false },
      { text: "Marcus's little sister watches and giggles.", answer: true },
      { text: "Marcus gives up after falling once.", answer: false },
      { text: "Marcus falls nearly a dozen times.", answer: true },
    ],
    buildSentence: [
      { target: "My arms flail wildly.", jumbled: ["flail", "wildly.", "My", "arms"] },
      { target: "I climb back on repeatedly.", jumbled: ["climb", "back", "I", "on", "repeatedly."] },
      { target: "This is definitely harder than expected.", jumbled: ["is", "definitely", "This", "harder", "than", "expected."] },
      { target: "I feel slightly foolish about this.", jumbled: ["feel", "slightly", "I", "foolish", "about", "this."] },
      { target: "I manage a few wobbly, uncertain seconds of balance.", jumbled: ["I", "manage", "a", "few", "wobbly,", "uncertain", "seconds", "of", "balance."] },
    ],
    mySentencePrompt: "Write or say one sentence about something that was harder than it looked at first.",
    mySentenceExample: "Cooking rice was harder than it looked when I first tried it.",
  },
  {
    number: 3,
    title: "The Skate Park",
    image: null,
    imageNote: "Marcus standing hesitantly at the entrance of a busy skate park, watching skilled skaters perform tricks on ramps, his skateboard held nervously under his arm.",
    story:
      "After a week of driveway practice, I finally muster enough courage to visit the local skate park everyone at school talks about constantly. Standing at the entrance, I watch several skilled skaters gliding smoothly across ramps, performing tricks that look impossibly graceful and effortless from where I stand. Suddenly, my modest driveway progress feels embarrassingly insignificant compared to their obvious expertise and confident, practiced movements. Part of me considers turning around immediately, convinced everyone will notice how obviously inexperienced I actually am. Taking a deep breath instead, I step through the gate, reminding myself everyone here started exactly where I'm standing now.",
    questions: [
      "Where does Marcus finally visit?",
      "What does Marcus watch skilled skaters doing?",
      "What does Marcus consider doing?",
    ],
    trueFalse: [
      { text: "Marcus visits the local skate park.", answer: true },
      { text: "Marcus feels his progress is impressive compared to others.", answer: false },
      { text: "Marcus considers turning around immediately.", answer: true },
      { text: "Marcus refuses to enter the park at all.", answer: false },
      { text: "Marcus reminds himself everyone started somewhere.", answer: true },
    ],
    buildSentence: [
      { target: "I muster enough courage finally.", jumbled: ["muster", "enough", "I", "courage", "finally."] },
      { target: "I step through the gate.", jumbled: ["step", "through", "I", "the", "gate."] },
      { target: "This looks impossibly graceful somehow.", jumbled: ["looks", "impossibly", "This", "graceful", "somehow."] },
      { target: "My progress feels embarrassingly insignificant now.", jumbled: ["progress", "feels", "My", "embarrassingly", "insignificant", "now."] },
      { target: "Everyone here started exactly where I'm standing now.", jumbled: ["Everyone", "here", "started", "exactly", "where", "I'm", "standing", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about feeling nervous entering a new place or group.",
    mySentenceExample: "I felt nervous entering the gym for the first time alone.",
  },
  {
    number: 4,
    title: "Dev Offers Tips",
    image: null,
    imageNote: "Dev crouching beside Marcus at the edge of the skate park, demonstrating proper foot placement on a skateboard, both smiling casually.",
    story:
      "Sitting awkwardly on a bench, watching rather than participating, I notice a friendly-looking guy named Dev approaching with an easy, welcoming smile. “First time here? I remember mine,” he says casually, sitting down beside me without any judgment in his tone whatsoever. He offers a few beginner tips about foot placement and weight distribution, things I hadn't considered while practicing alone in my driveway. Dev demonstrates a simple pushing motion, encouraging me to try it slowly on flat ground before attempting anything more ambitious. His patient, friendly guidance makes the intimidating park suddenly feel considerably more welcoming and approachable than before.",
    questions: [
      "Who approaches Marcus at the skate park?",
      "What does Dev offer Marcus?",
      "How does Dev's guidance make Marcus feel?",
    ],
    trueFalse: [
      { text: "Dev approaches Marcus with a friendly smile.", answer: true },
      { text: "Dev judges Marcus harshly for being new.", answer: false },
      { text: "Dev offers beginner tips about foot placement.", answer: true },
      { text: "Dev refuses to demonstrate anything himself.", answer: false },
      { text: "The park feels more welcoming after Dev's help.", answer: true },
    ],
    buildSentence: [
      { target: "Dev approaches with a smile.", jumbled: ["approaches", "with", "Dev", "a", "smile."] },
      { target: "I remember mine too.", jumbled: ["remember", "mine", "I", "too."] },
      { target: "He offers a few tips.", jumbled: ["offers", "a", "He", "few", "tips."] },
      { target: "Dev demonstrates a simple pushing motion.", jumbled: ["demonstrates", "a", "Dev", "simple", "pushing", "motion."] },
      { target: "This park suddenly feels considerably more welcoming.", jumbled: ["This", "park", "suddenly", "feels", "considerably", "more", "welcoming."] },
    ],
    mySentencePrompt: "Write or say one sentence about a stranger who helped you feel welcome somewhere.",
    mySentenceExample: "A stranger helped me feel welcome on my first day at a new gym.",
  },
  {
    number: 5,
    title: "A Painful Fall",
    image: null,
    imageNote: "Marcus sitting on the ground clutching his scraped elbow, wincing in pain, his skateboard lying nearby, other skaters glancing over with concern.",
    story:
      "Feeling slightly more confident after Dev's tips, I attempt a gentle slope, gaining more speed than I anticipated and quickly losing complete control. My board shoots forward unexpectedly, and I crash hard onto the pavement, scraping my elbow painfully against the rough concrete surface. Pain shoots through my arm, and for a moment, embarrassed tears threaten to well up despite my genuine effort to stay composed in front of strangers. Several skaters glance over with concern, though thankfully no one laughs or makes the situation feel worse than it already does. Sitting there, clutching my throbbing elbow, I seriously question whether skating is really worth this.",
    questions: [
      "What does Marcus attempt after Dev's tips?",
      "What happens to Marcus's board?",
      "How does Marcus feel sitting on the ground?",
    ],
    trueFalse: [
      { text: "Marcus attempts a gentle slope.", answer: true },
      { text: "Marcus stays completely in control the whole time.", answer: false },
      { text: "Marcus scrapes his elbow on the pavement.", answer: true },
      { text: "Other skaters laugh loudly at Marcus.", answer: false },
      { text: "Marcus questions whether skating is worth it.", answer: true },
    ],
    buildSentence: [
      { target: "Pain shoots through my arm.", jumbled: ["shoots", "through", "Pain", "my", "arm."] },
      { target: "I crash hard onto pavement.", jumbled: ["crash", "hard", "I", "onto", "pavement."] },
      { target: "I seriously question this decision.", jumbled: ["seriously", "question", "I", "this", "decision."] },
      { target: "My board shoots forward unexpectedly.", jumbled: ["board", "shoots", "My", "forward", "unexpectedly."] },
      { target: "Embarrassed tears threaten to well up despite my effort.", jumbled: ["Embarrassed", "tears", "threaten", "to", "well", "up", "despite", "my", "effort."] },
    ],
    mySentencePrompt: "Write or say one sentence about a painful fall or accident you had.",
    mySentenceExample: "I had a painful fall while learning to rollerblade last year.",
  },
  {
    number: 6,
    title: "Jasmine's Encouragement",
    image: null,
    imageNote: "Jasmine crouching beside Marcus, showing him a scar on her own knee while smiling encouragingly, both sitting on the edge of the ramp.",
    story:
      "An older skater named Jasmine walks over, offering a hand to help me up while examining my scraped elbow with practiced, unbothered casualness. “Want to see something?” she asks, rolling up her pant leg to reveal an impressive collection of old scars and faded bruises across her knee. “Everyone here has stories like yours,” she explains, sitting down beside me on the edge of a ramp. She shares how she broke her wrist during her second month of skating, yet kept practicing anyway because quitting felt worse than temporary pain ever could. Her honesty about struggling too somehow makes my own embarrassment feel considerably lighter.",
    questions: [
      "Who walks over to help Marcus?",
      "What does Jasmine show Marcus?",
      "What happened to Jasmine during her second month?",
    ],
    trueFalse: [
      { text: "Jasmine walks over to help Marcus up.", answer: true },
      { text: "Jasmine shows Marcus scars on her knee.", answer: true },
      { text: "Jasmine says everyone here has stories like his.", answer: true },
      { text: "Jasmine broke her wrist during her second month skating.", answer: true },
      { text: "Marcus feels worse after talking to Jasmine.", answer: false },
    ],
    buildSentence: [
      { target: "Jasmine offers a hand.", jumbled: ["offers", "a", "Jasmine", "hand."] },
      { target: "Want to see something?", jumbled: ["to", "see", "Want", "something?"] },
      { target: "Everyone here has stories.", jumbled: ["here", "has", "Everyone", "stories."] },
      { target: "Quitting felt worse than pain.", jumbled: ["felt", "worse", "Quitting", "than", "pain."] },
      { target: "Her honesty makes my embarrassment feel considerably lighter.", jumbled: ["Her", "honesty", "makes", "my", "embarrassment", "feel", "considerably", "lighter."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone sharing their own struggle to make you feel better.",
    mySentenceExample: "My coach shared his own struggle to make me feel better about losing.",
  },
  {
    number: 7,
    title: "Small Progress",
    image: null,
    imageNote: "Marcus rolling smoothly across flat pavement at the skate park, arms outstretched for balance, a small proud smile on his face.",
    story:
      "Over the following two weeks, I return to the skate park almost daily, gradually noticing small but genuinely encouraging improvements in my balance and confidence. Pushing off and gliding across flat ground no longer requires intense concentration, becoming instead something closer to natural, automatic movement. Dev and Jasmine both offer occasional encouragement whenever they spot me practicing, sometimes shouting friendly tips as they skate past effortlessly. I still fall occasionally, though considerably less often than during my first painful week, and the falls themselves feel less discouraging now somehow. Each small success, however minor it seems, motivates me to keep returning consistently.",
    questions: [
      "How often does Marcus return to the skate park?",
      "What no longer requires intense concentration?",
      "How do Dev and Jasmine help Marcus?",
    ],
    trueFalse: [
      { text: "Marcus returns to the skate park almost daily.", answer: true },
      { text: "Pushing off still requires intense concentration.", answer: false },
      { text: "Dev and Jasmine offer occasional encouragement.", answer: true },
      { text: "Marcus never falls anymore at all.", answer: false },
      { text: "Small successes motivate Marcus to keep returning.", answer: true },
    ],
    buildSentence: [
      { target: "I notice small improvements.", jumbled: ["notice", "small", "I", "improvements."] },
      { target: "I still fall occasionally now.", jumbled: ["still", "fall", "I", "occasionally", "now."] },
      { target: "This feels less discouraging somehow.", jumbled: ["feels", "less", "This", "discouraging", "somehow."] },
      { target: "Each small success motivates me.", jumbled: ["Each", "small", "success", "motivates", "me."] },
      { target: "This becomes something closer to natural, automatic movement.", jumbled: ["This", "becomes", "something", "closer", "to", "natural,", "automatic", "movement."] },
    ],
    mySentencePrompt: "Write or say one sentence about noticing small improvements while practicing something.",
    mySentenceExample: "I noticed small improvements in my drawing after practicing every day.",
  },
  {
    number: 8,
    title: "Trying a Trick",
    image: null,
    imageNote: "Marcus attempting to pop his skateboard into the air, one foot pressing the tail down, the board flying sideways instead of flipping properly.",
    story:
      "Feeling more confident after weeks of steady progress, I decide it's finally time to attempt my first actual trick, a basic jump called an ollie. Dev explains the technique patiently, demonstrating how pressing the tail down while sliding your front foot forward should launch the board upward smoothly. My first attempt sends the board flying sideways awkwardly, missing my feet entirely and rolling several feet away across the pavement. I try again and again, each attempt slightly different but equally unsuccessful, my frustration building steadily with every failed try. Dev reminds me patiently that this particular trick took him nearly a month to master properly.",
    questions: [
      "What trick does Marcus decide to attempt?",
      "What does Dev explain about the technique?",
      "How long did this trick take Dev to master?",
    ],
    trueFalse: [
      { text: "Marcus attempts an ollie for the first time.", answer: true },
      { text: "Marcus lands the trick perfectly on his first try.", answer: false },
      { text: "Dev explains the technique patiently.", answer: true },
      { text: "This trick took Dev nearly a month to master.", answer: true },
      { text: "Marcus gives up after one attempt.", answer: false },
    ],
    buildSentence: [
      { target: "I attempt my first trick.", jumbled: ["attempt", "my", "I", "first", "trick."] },
      { target: "My frustration builds steadily now.", jumbled: ["builds", "steadily", "My", "frustration", "now."] },
      { target: "I try again and again.", jumbled: ["try", "again", "I", "and", "again."] },
      { target: "Dev explains the technique patiently.", jumbled: ["explains", "the", "Dev", "technique", "patiently."] },
      { target: "This trick took him nearly a month to master.", jumbled: ["This", "trick", "took", "him", "nearly", "a", "month", "to", "master."] },
    ],
    mySentencePrompt: "Write or say one sentence about attempting something difficult for the first time.",
    mySentenceExample: "I attempted a backflip on the trampoline for the first time yesterday.",
  },
  {
    number: 9,
    title: "Landing It",
    image: null,
    imageNote: "Marcus's skateboard popping cleanly into the air beneath his feet, landing smoothly back on the pavement, Dev and Jasmine cheering with raised fists nearby.",
    story:
      "After nearly two weeks of failed, frustrating attempts, something finally clicks during my regular Saturday practice session at the park. My foot presses the tail at exactly the right angle, and suddenly the board pops cleanly into the air beneath me, hovering briefly before landing smoothly back under my feet. Stunned, I nearly forget to keep rolling forward, catching myself just in time to avoid another embarrassing fall immediately afterward. Dev and Jasmine, who happened to be watching, erupt into genuine, enthusiastic cheers from across the park. “You got it! You actually got it!” Dev shouts, running over with an excited high-five waiting.",
    questions: [
      "What finally happens during Marcus's practice session?",
      "What does Marcus almost forget to do?",
      "How do Dev and Jasmine react?",
    ],
    trueFalse: [
      { text: "Something finally clicks during Marcus's practice.", answer: true },
      { text: "The board pops cleanly into the air.", answer: true },
      { text: "Marcus lands but forgets to keep rolling and falls anyway.", answer: false },
      { text: "Dev and Jasmine erupt into cheers.", answer: true },
      { text: "Dev runs over with an excited high-five.", answer: true },
    ],
    buildSentence: [
      { target: "Something finally clicks now.", jumbled: ["finally", "clicks", "Something", "now."] },
      { target: "You actually got it!", jumbled: ["actually", "got", "You", "it!"] },
      { target: "I catch myself just in time.", jumbled: ["catch", "myself", "I", "just", "in", "time."] },
      { target: "They erupt into enthusiastic cheers.", jumbled: ["erupt", "into", "They", "enthusiastic", "cheers."] },
      { target: "The board hovers briefly before landing smoothly back.", jumbled: ["The", "board", "hovers", "briefly", "before", "landing", "smoothly", "back."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally succeeding after many failed attempts.",
    mySentenceExample: "I finally succeeded at whistling after many failed attempts all summer.",
  },
  {
    number: 10,
    title: "Part of the Crew",
    image: null,
    imageNote: "Marcus sitting on the ramp edge laughing with Dev and Jasmine and a few other skaters, all sharing snacks together as the sun sets over the park.",
    story:
      "By evening, word of my landed ollie has apparently spread among the regular skaters, and several others come over to congratulate me warmly on my progress. Sitting on the edge of a ramp afterward, sharing snacks with Dev, Jasmine, and a few others whose names I'm finally starting to learn, I feel genuinely different than I did weeks earlier. This place that once felt intimidating and unwelcoming now feels almost like a second home, filled with people who understand exactly what today's small victory meant. Watching the sunset paint the ramps orange, I realize that every scraped elbow along the way was completely worth this feeling.",
    questions: [
      "What has spread among the regular skaters?",
      "Where does Marcus sit sharing snacks?",
      "How does the park feel to Marcus now compared to before?",
    ],
    trueFalse: [
      { text: "Word of Marcus's landed ollie has spread.", answer: true },
      { text: "Several skaters come over to congratulate Marcus.", answer: true },
      { text: "Marcus still feels like a complete stranger there.", answer: false },
      { text: "The park now feels almost like a second home.", answer: true },
      { text: "Marcus regrets all the scraped elbows along the way.", answer: false },
    ],
    buildSentence: [
      { target: "Several others congratulate me warmly.", jumbled: ["Several", "others", "congratulate", "me", "warmly."] },
      { target: "I feel genuinely different now.", jumbled: ["feel", "genuinely", "I", "different", "now."] },
      { target: "This feels like a second home.", jumbled: ["feels", "like", "This", "a", "second", "home."] },
      { target: "I'm finally starting to learn their names.", jumbled: ["I'm", "finally", "starting", "to", "learn", "their", "names."] },
      { target: "Every scraped elbow along the way was completely worth this.", jumbled: ["Every", "scraped", "elbow", "along", "the", "way", "was", "completely", "worth", "this."] },
    ],
    mySentencePrompt: "Write or say one sentence about finally feeling like you belonged somewhere new.",
    mySentenceExample: "I finally felt like I belonged at my new school after joining the soccer team.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

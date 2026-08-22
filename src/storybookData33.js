// A2 Teens digital storybook, Book 33: "Learning to Drive"
// Static content -- no Supabase. Third book in the A2 Teens batch
// (Books 31-38). Same structure/level as storybookData31.js.
// Images are not generated yet. image/coverImage are left null so
// StoryBook.jsx's built-in ImagePlaceholder fallback renders instead.

export const STORYBOOK_TITLE = "Learning to Drive";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "Sofia sitting proudly in the driver's seat of a car, hands on the wheel, Dad in the passenger seat smiling, an empty parking lot visible through the windshield.";

export const CHARACTERS = [
  { name: "Sofia", role: "The narrator, a teenager", look: "Ponytail, denim jacket, eager but easily anxious behind the wheel at first." },
  { name: "Dad", role: "Sofia's father", look: "Baseball cap, relaxed posture, patient and calm under pressure." },
  { name: "Mr. Kim", role: "Sofia's driving instructor", look: "Neat button-up shirt, clipboard, professional and reassuring." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "Turning Sixteen",
    image: null,
    imageNote: "Sofia holding up her freshly printed learner's permit outside the local DMV office, Dad standing proudly beside her with car keys in hand.",
    story:
      "The moment I turn sixteen, getting my learner's permit becomes the only thing I can think about, day and night. Dad takes me to the local office on my actual birthday, and I fill out the paperwork with hands that shake slightly from excitement. When the clerk finally hands me my temporary permit, I stare at it like it's some kind of golden ticket to freedom. “Ready for your first real lesson this weekend?” Dad asks, grinning as we walk back to the car together. I nod enthusiastically, though a small, nervous flutter mixes with all my excitement.",
    questions: [
      "What does Sofia get on her birthday?",
      "How do Sofia's hands feel while filling out paperwork?",
      "What does Dad ask Sofia?",
    ],
    trueFalse: [
      { text: "Sofia gets her learner's permit on her birthday.", answer: true },
      { text: "Sofia feels completely calm filling out the paperwork.", answer: false },
      { text: "Dad asks if she's ready for her first lesson.", answer: true },
      { text: "Sofia feels no excitement at all about driving.", answer: false },
      { text: "Sofia feels a nervous flutter mixed with excitement.", answer: true },
    ],
    buildSentence: [
      { target: "My hands shake slightly.", jumbled: ["shake", "slightly.", "My", "hands"] },
      { target: "I nod enthusiastically back.", jumbled: ["nod", "enthusiastically", "I", "back."] },
      { target: "This feels like freedom.", jumbled: ["feels", "like", "This", "freedom."] },
      { target: "Dad grins as we walk.", jumbled: ["grins", "as", "Dad", "we", "walk."] },
      { target: "A nervous flutter mixes with all my excitement.", jumbled: ["A", "nervous", "flutter", "mixes", "with", "all", "my", "excitement."] },
    ],
    mySentencePrompt: "Write or say one sentence about something you looked forward to on a birthday.",
    mySentenceExample: "I looked forward to getting my first phone on my birthday.",
  },
  {
    number: 2,
    title: "The First Lesson",
    image: null,
    imageNote: "Sofia sitting in the driver's seat of an empty parking lot, gripping the steering wheel tightly, Mr. Kim in the passenger seat calmly giving instructions.",
    story:
      "Saturday morning, Mr. Kim meets us at an empty church parking lot for my very first actual driving lesson. Sitting in the driver's seat for the first time feels strangely unfamiliar, even though I have watched Dad drive thousands of times before. “Adjust your mirrors first, then find the brake with your right foot,” Mr. Kim instructs patiently, noticing my white-knuckled grip on the wheel. Starting the engine sends an unexpected jolt of nervous energy through my entire body. Slowly, carefully, I press the gas pedal, and the car creeps forward for the very first time under my own control.",
    questions: [
      "Where does the first lesson take place?",
      "What does Mr. Kim tell Sofia to adjust first?",
      "How does Sofia feel starting the engine?",
    ],
    trueFalse: [
      { text: "The first lesson takes place in an empty parking lot.", answer: true },
      { text: "Sofia feels completely comfortable in the driver's seat immediately.", answer: false },
      { text: "Mr. Kim tells her to adjust her mirrors first.", answer: true },
      { text: "Sofia refuses to start the engine.", answer: false },
      { text: "The car creeps forward under Sofia's control.", answer: true },
    ],
    buildSentence: [
      { target: "This feels strangely unfamiliar.", jumbled: ["feels", "strangely", "This", "unfamiliar."] },
      { target: "I press the gas pedal.", jumbled: ["press", "the", "I", "gas", "pedal."] },
      { target: "Mr. Kim instructs patiently again.", jumbled: ["instructs", "patiently", "Mr.", "Kim", "again."] },
      { target: "The car creeps slowly forward.", jumbled: ["creeps", "slowly", "The", "car", "forward."] },
      { target: "Starting the engine sends nervous energy through my body.", jumbled: ["Starting", "the", "engine", "sends", "nervous", "energy", "through", "my", "body."] },
    ],
    mySentencePrompt: "Write or say one sentence about doing something for the very first time.",
    mySentenceExample: "Riding a horse for the first time felt strangely unfamiliar to me.",
  },
  {
    number: 3,
    title: "Stalling in the Parking Lot",
    image: null,
    imageNote: "Sofia looking embarrassed with her hands over her face as the car sits stalled beside a knocked-over orange traffic cone.",
    story:
      "Halfway through the lesson, Mr. Kim asks me to practice a simple turn around a row of orange traffic cones. Focusing too hard on steering, I forget to press the gas steadily, and the engine suddenly sputters and dies completely. My cheeks flush red with embarrassment as the car rolls slightly and knocks over one of the cones with a soft thud. “Happens to literally everyone,” Mr. Kim reassures me calmly, not seeming bothered in the slightest by my obvious mistake. Restarting the engine, I try again, determined not to let one small stall ruin my entire confidence.",
    questions: [
      "What does Mr. Kim ask Sofia to practice?",
      "What happens to the engine?",
      "What does Mr. Kim say about stalling?",
    ],
    trueFalse: [
      { text: "Sofia practices turning around traffic cones.", answer: true },
      { text: "The engine sputters and dies.", answer: true },
      { text: "Mr. Kim gets angry about the mistake.", answer: false },
      { text: "Sofia knocks over one of the cones.", answer: true },
      { text: "Sofia refuses to try driving again.", answer: false },
    ],
    buildSentence: [
      { target: "The engine sputters loudly.", jumbled: ["sputters", "loudly.", "The", "engine"] },
      { target: "My cheeks flush red.", jumbled: ["flush", "red.", "My", "cheeks"] },
      { target: "This happens to everyone.", jumbled: ["happens", "to", "This", "everyone."] },
      { target: "I try again determined.", jumbled: ["try", "again", "I", "determined."] },
      { target: "I don't let one small stall ruin my confidence.", jumbled: ["don't", "let", "I", "one", "small", "stall", "ruin", "my", "confidence."] },
    ],
    mySentencePrompt: "Write or say one sentence about an embarrassing mistake you recovered from.",
    mySentenceExample: "I tripped in front of my class but recovered and kept walking confidently.",
  },
  {
    number: 4,
    title: "Dad's Patience",
    image: null,
    imageNote: "Dad sitting calmly in the passenger seat of the family car in a wide empty lot, gesturing encouragingly as Sofia practices turns.",
    story:
      "Between official lessons with Mr. Kim, Dad offers to take me practicing in an empty lot near our neighborhood every evening. Unlike my nervous energy, Dad stays remarkably relaxed no matter how many mistakes I make during our sessions together. “You're overthinking the mirrors again,” he says gently one evening, without a hint of frustration in his tone. His calm presence in the passenger seat somehow makes me feel braver about attempting trickier maneuvers I would otherwise avoid. After a week of these evening practice sessions, steering and braking finally start feeling less like separate, terrifying tasks and more like one smooth motion.",
    questions: [
      "Where does Dad take Sofia to practice?",
      "How does Dad react to Sofia's mistakes?",
      "How do steering and braking start feeling after a week?",
    ],
    trueFalse: [
      { text: "Dad takes Sofia practicing in an empty lot.", answer: true },
      { text: "Dad gets frustrated with every mistake Sofia makes.", answer: false },
      { text: "Dad tells Sofia she's overthinking the mirrors.", answer: true },
      { text: "Sofia feels braver because of Dad's calm presence.", answer: true },
      { text: "Steering and braking still feel completely separate after a week.", answer: false },
    ],
    buildSentence: [
      { target: "Dad stays remarkably relaxed.", jumbled: ["stays", "remarkably", "Dad", "relaxed."] },
      { target: "I feel braver now.", jumbled: ["feel", "braver", "I", "now."] },
      { target: "You're overthinking the mirrors again.", jumbled: ["overthinking", "the", "You're", "mirrors", "again."] },
      { target: "His calm presence helps me somehow.", jumbled: ["calm", "presence", "His", "helps", "me", "somehow."] },
      { target: "This finally feels like one smooth motion.", jumbled: ["finally", "feels", "This", "like", "one", "smooth", "motion."] },
    ],
    mySentencePrompt: "Write or say one sentence about someone who was patient with you while you learned something.",
    mySentenceExample: "My grandma was very patient with me while I learned to knit.",
  },
  {
    number: 5,
    title: "Merging onto the Road",
    image: null,
    imageNote: "Sofia gripping the steering wheel tightly, checking her mirrors nervously as the car merges onto a busy street with several other vehicles.",
    story:
      "Three weeks into lessons, Mr. Kim announces it's time to practice driving on an actual street instead of the empty lot. My heart pounds as I check my mirrors repeatedly, waiting anxiously for a large enough gap between passing cars. “Signal, check your blind spot, then go,” Mr. Kim reminds me calmly, though his voice sounds distant beneath my own racing thoughts. When I finally merge, the car accelerates smoothly into traffic, and for a brief, thrilling moment, I actually feel like a real driver instead of just a nervous teenager pretending. The unfamiliar sensation of real speed takes some getting used to.",
    questions: [
      "What does Mr. Kim announce it's time to practice?",
      "What does Sofia check repeatedly?",
      "How does Sofia feel merging into traffic?",
    ],
    trueFalse: [
      { text: "Mr. Kim announces it's time to drive on a real street.", answer: true },
      { text: "Sofia's heart pounds while checking mirrors.", answer: true },
      { text: "Sofia refuses to merge into traffic at all.", answer: false },
      { text: "Sofia feels like a real driver for a moment.", answer: true },
      { text: "Real speed feels completely familiar to Sofia immediately.", answer: false },
    ],
    buildSentence: [
      { target: "My heart pounds fast.", jumbled: ["pounds", "fast.", "My", "heart"] },
      { target: "I finally merge smoothly.", jumbled: ["finally", "merge", "I", "smoothly."] },
      { target: "Signal, check your blind spot.", jumbled: ["check", "your", "Signal,", "blind", "spot."] },
      { target: "I feel like a real driver.", jumbled: ["feel", "like", "I", "a", "real", "driver."] },
      { target: "Real speed takes some getting used to.", jumbled: ["takes", "some", "Real", "speed", "getting", "used", "to."] },
    ],
    mySentencePrompt: "Write or say one sentence about a moment you felt more grown up than usual.",
    mySentenceExample: "I felt more grown up when I cooked dinner for my whole family alone.",
  },
  {
    number: 6,
    title: "A Close Call",
    image: null,
    imageNote: "Sofia braking hard with wide eyes as another car pulls out unexpectedly ahead, Mr. Kim calmly reaching for the instructor's brake pedal.",
    story:
      "During our fourth lesson on a quiet residential street, a car suddenly pulls out from a driveway without checking properly for oncoming traffic. My whole body freezes for a split second before instinct kicks in, and I slam the brake hard, my heart lurching into my throat. Mr. Kim's hand hovers near his own instructor brake, ready to intervene if needed, but somehow we stop safely with plenty of room to spare. “You reacted exactly right,” he says, though my hands won't stop trembling for several long minutes afterward. That moment terrifies me more than any mistake I've made so far.",
    questions: [
      "What does another car do suddenly?",
      "What does Sofia's body do at first?",
      "What does Mr. Kim say about Sofia's reaction?",
    ],
    trueFalse: [
      { text: "A car pulls out without checking for traffic.", answer: true },
      { text: "Sofia's body freezes for a split second.", answer: true },
      { text: "They crash into the other car.", answer: false },
      { text: "Mr. Kim says Sofia reacted exactly right.", answer: true },
      { text: "Sofia's hands stop trembling immediately afterward.", answer: false },
    ],
    buildSentence: [
      { target: "My body freezes briefly.", jumbled: ["freezes", "briefly.", "My", "body"] },
      { target: "I slam the brake.", jumbled: ["slam", "the", "I", "brake."] },
      { target: "You reacted exactly right.", jumbled: ["reacted", "exactly", "You", "right."] },
      { target: "My hands won't stop trembling.", jumbled: ["won't", "stop", "My", "hands", "trembling."] },
      { target: "This terrifies me more than any mistake so far.", jumbled: ["terrifies", "me", "This", "more", "than", "any", "mistake", "so", "far."] },
    ],
    mySentencePrompt: "Write or say one sentence about a scary moment where you had to react quickly.",
    mySentenceExample: "I had to react quickly when a ball flew toward my face during practice.",
  },
  {
    number: 7,
    title: "Talking It Through",
    image: null,
    imageNote: "Sofia sitting on the porch steps at home with Dad, talking quietly while the car sits parked in the driveway behind them.",
    story:
      "That evening, I tell Dad about the close call, admitting quietly that maybe I'm not actually cut out for driving after all. Instead of dismissing my fear, Dad listens carefully and shares a similar story from when he first learned to drive decades ago. “Fear after a close call means you're taking this seriously, not that you're failing,” he explains, sitting beside me on the porch steps. He reminds me that even experienced drivers face unpredictable situations sometimes, and reacting well matters more than never feeling scared at all. Slowly, talking honestly about my fear makes it feel much more manageable than before.",
    questions: [
      "What does Sofia tell Dad about?",
      "What does Dad share with Sofia?",
      "What does Dad say fear after a close call means?",
    ],
    trueFalse: [
      { text: "Sofia tells Dad about the close call.", answer: true },
      { text: "Dad dismisses Sofia's fear immediately.", answer: false },
      { text: "Dad shares a similar story from his own past.", answer: true },
      { text: "Dad says fear means Sofia is taking driving seriously.", answer: true },
      { text: "Talking about it makes Sofia's fear feel worse.", answer: false },
    ],
    buildSentence: [
      { target: "Dad listens carefully today.", jumbled: ["listens", "carefully", "Dad", "today."] },
      { target: "This feels more manageable now.", jumbled: ["feels", "more", "This", "manageable", "now."] },
      { target: "Dad shares a similar story.", jumbled: ["shares", "a", "Dad", "similar", "story."] },
      { target: "Even experienced drivers face unpredictable situations.", jumbled: ["experienced", "drivers", "Even", "face", "unpredictable", "situations."] },
      { target: "Fear after a close call means you're taking this seriously.", jumbled: ["Fear", "after", "a", "close", "call", "means", "you're", "taking", "this", "seriously."] },
    ],
    mySentencePrompt: "Write or say one sentence about talking through a fear with someone who understood.",
    mySentenceExample: "Talking through my fear of the dentist with my mom made it feel manageable.",
  },
  {
    number: 8,
    title: "Parallel Parking Practice",
    image: null,
    imageNote: "Sofia looking over her shoulder while carefully reversing the car between two orange cones set up to look like parked vehicles.",
    story:
      "With only two weeks left before my driving test, Mr. Kim insists we dedicate an entire lesson purely to parallel parking, a skill I have been quietly dreading. He sets up two cones representing parked cars, and my first three attempts end with the car angled awkwardly, nowhere close to the curb. “Slow down and trust the mirrors,” Mr. Kim repeats patiently, refusing to let frustration creep into his voice despite my repeated failures. On my seventh attempt, something finally clicks, and the car glides smoothly into the space between the cones. The relief and pride I feel afterward completely erase my earlier frustration.",
    questions: [
      "What skill does Mr. Kim want to practice?",
      "How do Sofia's first three attempts go?",
      "What happens on Sofia's seventh attempt?",
    ],
    trueFalse: [
      { text: "Mr. Kim wants to practice parallel parking.", answer: true },
      { text: "Sofia parks perfectly on her very first try.", answer: false },
      { text: "Mr. Kim tells her to slow down and trust the mirrors.", answer: true },
      { text: "Sofia gives up after the third attempt.", answer: false },
      { text: "The car glides smoothly into the space on the seventh try.", answer: true },
    ],
    buildSentence: [
      { target: "Something finally clicks today.", jumbled: ["finally", "clicks", "Something", "today."] },
      { target: "I feel relieved and proud.", jumbled: ["feel", "relieved", "I", "and", "proud."] },
      { target: "Slow down and trust the mirrors.", jumbled: ["down", "and", "Slow", "trust", "the", "mirrors."] },
      { target: "My first three attempts end awkwardly.", jumbled: ["first", "three", "My", "attempts", "end", "awkwardly."] },
      { target: "This relief completely erases my earlier frustration.", jumbled: ["This", "relief", "completely", "erases", "my", "earlier", "frustration."] },
    ],
    mySentencePrompt: "Write or say one sentence about practicing something until it finally worked.",
    mySentenceExample: "I practiced free throws until they finally started going in consistently.",
  },
  {
    number: 9,
    title: "The Driving Test",
    image: null,
    imageNote: "Sofia sitting nervously in the driver's seat outside the DMV testing center, an examiner with a clipboard sitting beside her, Dad watching anxiously from the sidewalk.",
    story:
      "The morning of my actual driving test, I barely eat breakfast, my stomach far too full of nervous butterflies to handle food. A serious-looking examiner climbs into the passenger seat with a clipboard, instructing me to begin with a simple three-point turn. My hands feel clammy against the steering wheel, but I remind myself of everything Mr. Kim and Dad taught me over these past weeks. Through parallel parking, lane changes, and a nerve-wracking stop at a busy intersection, I focus entirely on staying calm rather than perfect. Twenty long minutes later, we finally pull back into the testing center parking lot.",
    questions: [
      "How does Sofia feel eating breakfast that morning?",
      "Who climbs into the passenger seat?",
      "What does Sofia focus on during the test?",
    ],
    trueFalse: [
      { text: "Sofia barely eats breakfast that morning.", answer: true },
      { text: "A serious examiner sits in the passenger seat.", answer: true },
      { text: "Sofia's hands feel completely dry and relaxed.", answer: false },
      { text: "Sofia focuses on staying calm rather than perfect.", answer: true },
      { text: "The test lasts only two minutes.", answer: false },
    ],
    buildSentence: [
      { target: "My hands feel clammy.", jumbled: ["feel", "clammy.", "My", "hands"] },
      { target: "I barely eat breakfast.", jumbled: ["barely", "eat", "I", "breakfast."] },
      { target: "I focus on staying calm.", jumbled: ["focus", "on", "I", "staying", "calm."] },
      { target: "We finally pull back into the lot.", jumbled: ["finally", "pull", "We", "back", "into", "the", "lot."] },
      { target: "I remind myself of everything they taught me.", jumbled: ["remind", "myself", "I", "of", "everything", "they", "taught", "me."] },
    ],
    mySentencePrompt: "Write or say one sentence about a test or exam that made you very nervous.",
    mySentenceExample: "My swimming test made me very nervous before I dove into the pool.",
  },
  {
    number: 10,
    title: "Passing the Test",
    image: null,
    imageNote: "Sofia hugging Dad tightly outside the DMV, holding a printed 'PASS' slip, both grinning widely with pure joy.",
    story:
      "Back inside the testing center, the examiner reviews her notes silently while my heart hammers against my ribs, waiting for the verdict. “Congratulations, you passed,” she finally says, and pure relief floods through my entire body all at once. I rush outside to find Dad waiting anxiously, and the moment he sees my face, he already knows the answer before I even speak. We hug tightly right there on the sidewalk, and I think back on every stall, every nervous mirror check, and that one terrifying close call. Looking back, all those difficult moments feel completely worth it now.",
    questions: [
      "What does the examiner say to Sofia?",
      "How does Sofia feel hearing the news?",
      "What does Sofia think back on afterward?",
    ],
    trueFalse: [
      { text: "The examiner tells Sofia she passed.", answer: true },
      { text: "Sofia feels disappointed hearing the news.", answer: false },
      { text: "Dad is waiting anxiously outside.", answer: true },
      { text: "Sofia forgets about all the difficult moments completely.", answer: false },
      { text: "Sofia feels the hard moments were worth it.", answer: true },
    ],
    buildSentence: [
      { target: "I passed my test.", jumbled: ["passed", "my", "I", "test."] },
      { target: "Relief floods through me.", jumbled: ["floods", "through", "Relief", "me."] },
      { target: "We hug tightly together.", jumbled: ["hug", "tightly", "We", "together."] },
      { target: "Dad already knows the answer.", jumbled: ["already", "knows", "Dad", "the", "answer."] },
      { target: "All those difficult moments feel completely worth it now.", jumbled: ["All", "those", "difficult", "moments", "feel", "completely", "worth", "it", "now."] },
    ],
    mySentencePrompt: "Write or say one sentence about reaching a goal after facing many small challenges.",
    mySentenceExample: "I reached my goal of running a mile after facing many tiring practices.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

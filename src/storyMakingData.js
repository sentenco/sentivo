// Writing category, Story Making activity: 10 items per CEFR level group
// (A1-A2 / B1-B2 / C1-C2), 30 total. Shape per item:
// { key, title, cefrGroup, focus, scene, image, words, prompt, sample, connectors }
// "connectors" are the transition/cohesive words each story actually
// needs to write it well -- null for every A1-A2 item (not needed yet
// at that level), cause-and-effect and contrast connectors for B1-B2,
// more formal cohesive devices for C1-C2. Each list is grounded in
// words the "sample" answer itself uses, not generic filler. "scene"
// keys into the placeholder illustrations in StoryMakingActivity.jsx,
// used until "image" (a real generated picture) is wired in; "bonus" is the
// neutral placeholder used for topics without bespoke art. No more
// main+bonus round pairing now that each level has 10 unique topics.
import parkImg from "./assets/story-making/park.jpg";
import parkZooImg from "./assets/story-making/park-zoo.jpg";
import lostPuppyImg from "./assets/story-making/lost-puppy.jpg";
import newStudentImg from "./assets/story-making/new-student.jpg";
import birthdayPartyImg from "./assets/story-making/birthday-party.jpg";
import rainyDayImg from "./assets/story-making/rainy-day.jpg";
import meetingTheNeighborImg from "./assets/story-making/meeting-the-neighbor.jpg";
import atTheMarketImg from "./assets/story-making/at-the-market.jpg";
import petsNewTrickImg from "./assets/story-making/pets-new-trick.jpg";
import tripToTheBeachImg from "./assets/story-making/trip-to-the-beach.jpg";
import theSchoolPlayImg from "./assets/story-making/the-school-play.jpg";
import theBrokenBikeImg from "./assets/story-making/the-broken-bike.jpg";
import theCoffeeShopSpillImg from "./assets/story-making/the-coffee-shop-spill.jpg";
import theLostWalletImg from "./assets/story-making/the-lost-wallet.jpg";
import missedFlightImg from "./assets/story-making/missed-flight.jpg";
import weekendVolunteerProjectImg from "./assets/story-making/weekend-volunteer-project.jpg";
import theStudyGroupImg from "./assets/story-making/the-study-group.jpg";
import startingANewJobImg from "./assets/story-making/starting-a-new-job.jpg";
import theNeighborhoodFestivalImg from "./assets/story-making/the-neighborhood-festival.jpg";
import theJobInterviewImg from "./assets/story-making/the-job-interview.jpg";
import theDifficultCallImg from "./assets/story-making/the-difficult-call.jpg";
import theDelayedFlightImg from "./assets/story-making/the-delayed-flight.jpg";
import theProductLaunchImg from "./assets/story-making/the-product-launch.jpg";
import theFailedNegotiationImg from "./assets/story-making/the-failed-negotiation.jpg";
import theMentorsAdviceImg from "./assets/story-making/the-mentors-advice.jpg";
import theConferenceKeynoteImg from "./assets/story-making/the-conference-keynote.jpg";
import theTeamRestructuringImg from "./assets/story-making/the-team-restructuring.jpg";
import theWhistleblowerImg from "./assets/story-making/the-whistleblower.jpg";
import theInvestmentPitchImg from "./assets/story-making/the-investment-pitch.jpg";
import theRetirementPartyImg from "./assets/story-making/the-retirement-party.jpg";

const A1A2 = [
  {
    key: "dayAtThePark",
    title: "A Day at the Park",
    focus: "Simple past, sequencing (first, then, after)",
    scene: "park",
    image: parkImg,
    words: ["park", "sun", "friends", "ball", "ice cream", "laugh"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Last Saturday, the sun was shining at the park. I met my friends near the big tree. First, we played with a ball for an hour. After that, we bought ice cream from a small cart. We sat on the grass and laughed all afternoon.",
    connectors: null,
  },
  {
    key: "theLostPuppy",
    title: "The Lost Puppy",
    focus: "Simple past, adjectives, feelings",
    scene: "lostPuppy",
    image: lostPuppyImg,
    words: ["puppy", "street", "scared", "boy", "help", "home"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "A small puppy was walking alone on the street. It looked scared and tired. A kind boy saw the puppy and stopped to help. He gave it some water and checked its collar. Then he walked the puppy safely back home.",
    connectors: null,
  },
  {
    key: "theZooTrip",
    title: "The Zoo Trip",
    focus: "Simple past, sequencing words",
    scene: "bonus",
    image: parkZooImg,
    words: ["zoo", "elephant", "camera", "excited", "feed", "laugh"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Our class went to the zoo on Friday morning. Everyone was excited to see the elephants. First, we watched the zookeeper feed them fruit and vegetables. Then we took photos with my camera near the fence. We laughed all the way back to the bus.",
    connectors: null,
  },
  {
    key: "theNewStudent",
    title: "The New Student",
    focus: "Simple past, feelings vocabulary",
    scene: "bonus",
    image: newStudentImg,
    words: ["new student", "shy", "lunch", "invite", "friend", "smile"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "A new student sat alone at lunch on her first day. She looked shy and didn't talk to anyone. Mia noticed her and invited her to sit with our group. We asked her questions about her old school. By the end of lunch, she was smiling and laughing with her new friends.",
    connectors: null,
  },
  {
    key: "birthdayParty",
    title: "Birthday Party",
    focus: "Simple past, party vocabulary",
    scene: "party",
    image: birthdayPartyImg,
    words: ["birthday", "balloons", "cake", "friends", "gift", "sing"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "It was my little brother's birthday last weekend. Our house was full of colorful balloons and a big chocolate cake. All of his friends came to celebrate with him. We sang the birthday song and he opened his gifts. It was a very happy day for our whole family.",
    connectors: null,
  },
  {
    key: "aRainyDay",
    title: "A Rainy Day",
    focus: "Simple past, weather vocabulary",
    scene: "rain",
    image: rainyDayImg,
    words: ["rain", "umbrella", "puddle", "boots", "run", "laugh"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "The rain started suddenly while we were walking to school. I opened my umbrella, but the wind turned it inside out. My sister jumped straight into a deep puddle in her yellow boots. We had to run the rest of the way, completely soaked. By the time we arrived, we couldn't stop laughing.",
    connectors: null,
  },
  {
    key: "meetingTheNeighbor",
    title: "Meeting the Neighbor",
    focus: "Simple past, everyday vocabulary",
    scene: "neighbor",
    image: meetingTheNeighborImg,
    words: ["neighbor", "moving truck", "boxes", "coffee", "smile", "welcome"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "A moving truck stopped in front of the house next door yesterday. Our new neighbor carried box after box into her new home. In the afternoon, I brought her a cup of coffee. She smiled and thanked me for the warm welcome. We talked on the porch for almost an hour.",
    connectors: null,
  },
  {
    key: "atTheMarket",
    title: "At the Market",
    focus: "Simple past, shopping vocabulary",
    scene: "market",
    image: atTheMarketImg,
    words: ["market", "vegetables", "basket", "seller", "price", "bag"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "On Sunday morning, I walked to the local market to buy fresh vegetables. I filled my basket with tomatoes, onions, and peppers. The seller told me a fair price for everything. I paid and packed it all into my bag. It was a simple trip, but I enjoyed every minute of it.",
    connectors: null,
  },
  {
    key: "myPetsTrick",
    title: "My Pet's New Trick",
    focus: "Simple past, adjectives",
    scene: "bonus",
    image: petsNewTrickImg,
    words: ["dog", "trick", "practice", "treat", "proud", "clap"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "My dog Rocky learned a new trick this month. Every evening, we practiced for ten minutes in the garden. I gave him a small treat every time he did it right. Yesterday he finally rolled over perfectly for the first time. My whole family clapped and I felt so proud of him.",
    connectors: null,
  },
  {
    key: "tripToTheBeach",
    title: "A Trip to the Beach",
    focus: "Simple past, sequencing words",
    scene: "bonus",
    image: tripToTheBeachImg,
    words: ["beach", "sandcastle", "waves", "shells", "sunscreen", "tired"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "We drove to the beach early to find a good spot. First, my brother and I built a big sandcastle near the water. Then we collected small shells along the shore. After lunch, we put on more sunscreen and played in the waves. By evening, we were tired but very happy.",
    connectors: null,
  },
];

const B1B2 = [
  {
    key: "theSchoolPlay",
    title: "The School Play",
    focus: "Past continuous + simple past, sequencing",
    scene: "bonus",
    image: theSchoolPlayImg,
    words: ["school play", "backstage", "forgot", "lines", "audience", "applause"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Backstage before the school play, everyone was nervous and quiet. Just before her scene, Priya suddenly forgot her lines. Her friend whispered the first word from behind the curtain. Priya took a breath and finished the scene perfectly. The audience gave her a huge round of applause.",
    connectors: ["Just before", "Then", "By the end"],
  },
  {
    key: "theBrokenBike",
    title: "The Broken Bike",
    focus: "Past tense narrative, descriptive detail",
    scene: "bonus",
    image: theBrokenBikeImg,
    words: ["bike", "flat tire", "stranded", "stranger", "fix", "grateful"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Halfway home, Leo's bike suddenly got a flat tire. He was stranded on a quiet road far from home. A stranger walking his dog stopped and offered to help. Together they managed to fix the tire in ten minutes. Leo thanked him and felt grateful the whole ride home.",
    connectors: ["Suddenly", "Fortunately", "In the end"],
  },
  {
    key: "theCoffeeShopSpill",
    title: "The Coffee Shop Spill",
    focus: "Past continuous + simple past, connectors",
    scene: "bonus",
    image: theCoffeeShopSpillImg,
    words: ["coffee shop", "stranger", "laptop", "spilled", "apologize", "conversation"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "I was working on my laptop at a busy coffee shop. A stranger accidentally spilled coffee near my table. He apologized right away and helped me dry my papers. We ended up sharing a table for the rest of the morning. It turned into a nice conversation between two strangers.",
    connectors: ["Suddenly", "As a result", "In the end"],
  },
  {
    key: "theLostWallet",
    title: "The Lost Wallet",
    focus: "Past tense, feelings vocabulary",
    scene: "bonus",
    image: theLostWalletImg,
    words: ["wallet", "lost", "worried", "stranger", "return", "thankful"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "I noticed my wallet was missing as soon as I got home. I felt worried and tried to remember every place I had visited. A stranger found it on the sidewalk near the market. She called the number on my card and offered to return it. I was so thankful that I brought her a small gift the next day.",
    connectors: ["At first", "Fortunately", "In the end"],
  },
  {
    key: "theJobInterview",
    title: "The Job Interview",
    focus: "Past tense, workplace vocabulary, connectors",
    scene: "interview",
    image: theJobInterviewImg,
    words: ["interview", "nervous", "suit", "questions", "handshake", "confident"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "David put on his best suit for the interview, even though he felt nervous. The manager asked several questions about his previous experience. Although his hands were shaking, he answered clearly and honestly. At the end, they shared a firm handshake. He left the office feeling far more confident than when he arrived.",
    connectors: ["Even though", "Although", "In the end"],
  },
  {
    key: "missedFlight",
    title: "Missed Flight",
    focus: "Past tense narrative, cause and effect",
    scene: "airport",
    image: missedFlightImg,
    words: ["airport", "delay", "luggage", "gate", "worried", "rebook"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Traffic on the way to the airport caused a long delay. By the time I checked my luggage, I only had ten minutes left. I ran through the terminal, but the gate had already closed. I felt worried as I watched my flight leave without me. Luckily, an airline agent helped me rebook a seat on the next flight.",
    connectors: ["As a result", "But", "Luckily"],
  },
  {
    key: "weekendVolunteerProject",
    title: "A Weekend Volunteer Project",
    focus: "Past tense narrative, cause and effect",
    scene: "bonus",
    image: weekendVolunteerProjectImg,
    words: ["volunteer", "shelter", "paint", "team", "exhausted", "rewarding"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Our office organized a volunteer day at a local animal shelter. Since the building badly needed repairs, our team spent the morning painting the walls. Everyone worked together, even though the weather was hot. By the afternoon we were completely exhausted but proud of what we had done. It turned out to be one of the most rewarding weekends I've had in a long time.",
    connectors: ["Since", "Even though", "By the afternoon"],
  },
  {
    key: "theStudyGroup",
    title: "The Study Group",
    focus: "Past tense narrative, connectors",
    scene: "bonus",
    image: theStudyGroupImg,
    words: ["exam", "study group", "notes", "confused", "explain", "relieved"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Two nights before the exam, I was still confused about half the material. Because my notes made no sense to me, I asked a few classmates to form a study group. One of them explained the topic in a way that finally made it click. We quizzed each other until almost midnight. I walked into the exam feeling far more relieved than I expected.",
    connectors: ["Because", "Then", "In the end"],
  },
  {
    key: "startingANewJob",
    title: "Starting a New Job",
    focus: "Past tense, workplace vocabulary",
    scene: "bonus",
    image: startingANewJobImg,
    words: ["first day", "colleagues", "overwhelmed", "training", "mistake", "settle in"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "On my first day, my new colleagues welcomed me with a short office tour. I felt a little overwhelmed trying to remember everyone's name. During training, I made a small mistake with the booking system, but my manager just laughed it off. By the end of the week, I had already learned the basics of my role. It didn't take long to settle in and feel part of the team.",
    connectors: ["During", "But", "By the end"],
  },
  {
    key: "theNeighborhoodFestival",
    title: "The Neighborhood Festival",
    focus: "Past tense narrative, sequencing",
    scene: "bonus",
    image: theNeighborhoodFestivalImg,
    words: ["festival", "stalls", "organize", "crowd", "music", "proud"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Our neighborhood association decided to organize a small street festival this year. Volunteers set up food stalls and a stage for live music along the main road. By the afternoon, a huge crowd had gathered, far more than anyone expected. Local bands played until sunset while children ran between the stalls. Everyone agreed it was the best festival the neighborhood had ever had, and I felt proud to have helped plan it.",
    connectors: ["By the afternoon", "Meanwhile", "In the end"],
  },
];

const C1C2 = [
  {
    key: "theDifficultCall",
    title: "The Difficult Call",
    focus: "Past tense narrative, workplace register",
    scene: "bonus",
    image: theDifficultCallImg,
    words: ["client", "complaint", "frustrated", "solution", "calm", "resolved"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "An important client called the office with an angry complaint. The manager sounded frustrated as she explained what had gone wrong. James stayed calm and listened carefully to every detail. He offered a clear solution within a few minutes. By the end of the call, the issue was fully resolved.",
    connectors: ["As", "Nevertheless", "By the end"],
  },
  {
    key: "theDelayedFlight",
    title: "The Delayed Flight",
    focus: "Past tense narrative, connectors",
    scene: "bonus",
    image: theDelayedFlightImg,
    words: ["business trip", "delayed flight", "meeting", "laptop", "reschedule", "relieved"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Sarah's flight was delayed just hours before an important business trip. She worried she would miss the client meeting entirely. Using her laptop at the gate, she managed to reschedule the meeting for later that afternoon. Her flight finally boarded two hours late. She felt relieved when she landed with enough time to prepare.",
    connectors: ["Just hours before", "Nevertheless", "Eventually"],
  },
  {
    key: "theProductLaunch",
    title: "The Product Launch",
    focus: "Past tense narrative, concession clauses",
    scene: "bonus",
    image: theProductLaunchImg,
    words: ["launch", "deadline", "malfunction", "crisis", "improvise", "applause"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "The product launch had been scheduled for months, and the whole team had worked toward the deadline relentlessly. Minutes before the demo, the main prototype suffered an unexpected malfunction backstage. Although the crisis threatened to derail the entire presentation, Mei calmly improvised with a backup unit she had brought just in case. The audience never noticed anything had gone wrong. When the demo ended, the room erupted into applause.",
    connectors: ["Although", "Nevertheless", "In the end"],
  },
  {
    key: "theFailedNegotiation",
    title: "The Failed Negotiation",
    focus: "Past tense narrative, hedging language",
    scene: "bonus",
    image: theFailedNegotiationImg,
    words: ["negotiation", "impasse", "concession", "walk away", "reconsider", "compromise"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "After three hours, the negotiation had reached a complete impasse. Neither side seemed willing to offer a meaningful concession. Frustrated, the supplier's representative threatened to walk away from the deal entirely. It was only after a short break that both parties agreed to reconsider their positions. By evening, they had reached a compromise that neither had expected at the start of the day.",
    connectors: ["At first", "It was only after", "By evening"],
  },
  {
    key: "theMentorsAdvice",
    title: "The Mentor's Advice",
    focus: "Past tense narrative, reflective tone",
    scene: "bonus",
    image: theMentorsAdviceImg,
    words: ["mentor", "self-doubt", "perspective", "candid", "reassess", "gratitude"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Riddled with self-doubt after a disappointing quarter, Alex reached out to his old mentor for perspective. Over coffee, she was refreshingly candid about her own early failures in the industry. Her advice pushed him to reassess not just his strategy, but his entire definition of success. He left the conversation with a clarity he hadn't felt in months. Years later, he still credits that single conversation with a deep sense of gratitude.",
    connectors: ["At first", "As a result", "Years later"],
  },
  {
    key: "theConferenceKeynote",
    title: "The Conference Keynote",
    focus: "Past tense narrative, formal register",
    scene: "bonus",
    image: theConferenceKeynoteImg,
    words: ["keynote", "audience", "technical difficulty", "composure", "resonate", "standing ovation"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "Minutes before the keynote, a technical difficulty wiped out the entire slide deck in front of a packed audience. Rather than panic, the speaker maintained her composure and simply spoke from memory instead. Without the slides constraining her, the talk became noticeably more personal and seemed to resonate even more deeply with the crowd. She wove in stories she had never planned to share. By the closing remarks, the audience rose for a standing ovation.",
    connectors: ["Rather than", "As a result", "By the closing remarks"],
  },
  {
    key: "theTeamRestructuring",
    title: "The Team Restructuring",
    focus: "Past tense narrative, passive constructions",
    scene: "bonus",
    image: theTeamRestructuringImg,
    words: ["restructuring", "uncertainty", "morale", "transparent", "reassign", "cautiously optimistic"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "News of the company restructuring spread quickly, and uncertainty settled over the whole department. Morale dropped noticeably as rumors circulated faster than any official statement. To address this, the director held a transparent town hall explaining exactly which roles would be reassigned. Though several employees remained anxious about the changes, most left the meeting feeling somewhat reassured. By the following month, the team had grown cautiously optimistic about the new direction.",
    connectors: ["To address this", "Though", "By the following month"],
  },
  {
    key: "theWhistleblower",
    title: "The Whistleblower",
    focus: "Past tense narrative, formal/legal vocabulary",
    scene: "bonus",
    image: theWhistleblowerImg,
    words: ["irregularities", "conscience", "anonymous", "retaliation", "investigation", "vindicated"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "For weeks, Noor had noticed troubling irregularities in the company's financial reports. Her conscience eventually outweighed her fear of consequences, and she filed an anonymous report with the compliance team. She braced herself for possible retaliation from senior management. Instead, an internal investigation was launched within days and confirmed everything she had suspected. Months later, she felt entirely vindicated, though she never once regretted the risk she had taken.",
    connectors: ["Eventually", "Instead", "Months later"],
  },
  {
    key: "theInvestmentPitch",
    title: "The Investment Pitch",
    focus: "Past tense narrative, formal register",
    scene: "bonus",
    image: theInvestmentPitchImg,
    words: ["pitch", "investors", "skeptical", "traction", "pivot", "secured funding"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "The founders had rehearsed their pitch dozens of times before finally standing in front of the investors. At first, the panel seemed openly skeptical of the company's early traction. Sensing this, one founder made a bold decision to pivot the presentation toward a different market entirely. The shift caught the investors' attention almost immediately. By the end of the meeting, the startup had secured the funding it desperately needed.",
    connectors: ["At first", "Sensing this", "By the end"],
  },
  {
    key: "theRetirementParty",
    title: "The Retirement Party",
    focus: "Past tense narrative, reflective/formal tone",
    scene: "bonus",
    image: theRetirementPartyImg,
    words: ["retirement", "decades", "tribute", "nostalgic", "legacy", "bittersweet"],
    prompt: "Look at the picture and use the words to write a short, 5-sentence story.",
    sample: "After four decades at the same company, Mr. Alvarez's retirement party filled the office with an unusually reflective mood. Colleague after colleague stood up to pay tribute to the mentorship he had quietly offered over the years. Many admitted feeling nostalgic for the early days he had helped shape. Someone joked that his legacy would outlast the building itself. It was, everyone agreed, a genuinely bittersweet way to end such a long career.",
    connectors: ["After four decades", "Meanwhile", "In the end"],
  },
];

const STORY_MAKING_SETS = [
  ...A1A2.map((t) => ({ ...t, cefrGroup: "A1-A2" })),
  ...B1B2.map((t) => ({ ...t, cefrGroup: "B1-B2" })),
  ...C1C2.map((t) => ({ ...t, cefrGroup: "C1-C2" })),
];

export default STORY_MAKING_SETS;

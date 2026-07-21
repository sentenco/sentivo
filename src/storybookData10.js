// A1 Adults digital storybook, Book 10: "Feeling Better Again"
// Static content -- no Supabase, mirrors the pattern in storybookData9.js.
// Like Books 7-9, this narrator is an adult and stays gender-neutral
// throughout, matching the source text. The receptionist and Dr. Santos
// are explicitly "she" in the source; the pharmacist is explicitly "he";
// the nurse is never gendered, so stays neutral.
// Images are not generated yet (Midjourney subscription paused as of 2026-07-21).
// image/coverImage are left null so StoryBook.jsx's built-in ImagePlaceholder
// fallback renders instead -- swap in real imports from ./assets/storybook10/
// once art exists, same as storybookData.js / storybookData2.js do.

export const STORYBOOK_TITLE = "Feeling Better Again";
export const COVER_IMAGE = null;
export const COVER_IMAGE_NOTE =
  "The narrator sitting calmly in a bright, clean clinic waiting room holding a small form, a plant and a health poster visible on the wall nearby.";

// A consistent "look" for each recurring character, so every chapter's
// image placeholder note can reference the same description -- keeps an
// illustrator's art consistent across all 10 chapters.
export const CHARACTERS = [
  { name: "The narrator", role: "A patient with a sore throat", look: "Simple comfortable clothing, a little tired at first but calm, no gendered features emphasized -- the source text never assigns a pronoun to this character." },
  { name: "The receptionist", role: "Works the front desk of the clinic", look: "Neat cardigan or blouse, warm and welcoming smile -- explicitly \"she\" in the source text." },
  { name: "Dr. Santos", role: "The clinic doctor", look: "White coat, stethoscope, gentle and reassuring manner -- explicitly \"she\" in the source text." },
  { name: "The nurse", role: "Calls patients in from the waiting room", look: "Simple scrubs, calm and efficient -- the source text never assigns a pronoun to this character, so keep neutral." },
  { name: "The pharmacist", role: "Works the clinic's small pharmacy counter", look: "White coat, friendly and reassuring -- explicitly \"he\" in the source text." },
];

export const CHAPTERS = [
  {
    number: 1,
    title: "My First Visit to the Clinic",
    image: null,
    imageNote: "The narrator walking into a small neighborhood clinic looking a little unwell, the receptionist smiling from behind the front desk, quiet street visible through the door.",
    story:
      "This morning, I wake up with a sore throat and a heavy head. At first, I sit on my bed and hope I will feel better soon. I drink some water, but my throat still hurts, and my body feels weak. Then I decide to visit the small clinic near my apartment. I put on a clean shirt, take my bag, and walk slowly down the street. When I arrive at the clinic, I see a woman sitting behind a desk near the door. She smiles and says, “Good morning, how can I help you?” I tell her, “I have a sore throat, and I do not feel well today.” She gives me a form and asks me to sit down and wait for the doctor. As I sit in the quiet room, I still feel sick, but I also feel calm because I know help is coming.",
    questions: [
      "How does the writer feel in the morning?",
      "Where does the writer go?",
      "What does the woman at the desk give to the writer?",
    ],
    trueFalse: [
      { text: "The writer wakes up with a sore throat.", answer: true },
      { text: "The writer goes to a shop near the apartment.", answer: false },
      { text: "The writer feels calm at the end because help is coming.", answer: true },
    ],
    buildSentence: [
      {
        target: "This morning, I wake up with a sore throat and a heavy head.",
        jumbled: ["and", "a", "up", "This", "heavy", "sore", "I", "morning,", "throat", "wake", "with", "head.", "a"],
      },
      {
        target: "Then I decide to visit the small clinic near my apartment.",
        jumbled: ["the", "apartment.", "I", "decide", "visit", "small", "clinic", "my", "near", "Then", "to"],
      },
      {
        target: "As I sit in the quiet room, I still feel sick, but I also feel calm because I know help is coming.",
        jumbled: ["I", "feel", "know", "in", "I", "calm", "because", "sit", "room,", "help", "also", "quiet", "the", "sick,", "but", "As", "coming.", "I", "still", "is", "feel"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about going to a clinic or doctor.",
    mySentenceExample: "I go to the clinic when I do not feel well.",
  },
  {
    number: 2,
    title: "Talking to the Receptionist",
    image: null,
    imageNote: "The narrator writing on a small white form at the front desk, the receptionist typing details into a computer and smiling warmly.",
    story:
      "At the desk, the kind receptionist gives me a small white form to fill in. The form asks for my name, my age, and my phone number. I write my details slowly and carefully with a black pen. Then she asks, “Is this your first visit to our clinic?” I say, “Yes, this is my first time here today.” She types my name into her computer and makes a new file for me. She asks me what problem brings me to the clinic today. I tell her, “I have a sore throat and a headache since this morning.” She smiles and says, “Please sit down, and the doctor will call you soon.” As I give back the form, I feel calm because the receptionist is helpful and kind.",
    questions: [
      "What does the receptionist give the writer to fill in?",
      "What three things does the form ask for?",
      "What does the receptionist say the writer should do?",
    ],
    trueFalse: [
      { text: "The form asks for the writer's name, age, and phone number.", answer: true },
      { text: "This is the writer's tenth visit to the clinic.", answer: false },
      { text: "The writer feels calm because the receptionist is kind.", answer: true },
    ],
    buildSentence: [
      {
        target: "The form asks for my name, my age, and my phone number.",
        jumbled: ["form", "asks", "The", "my", "for", "name,", "age,", "my", "my", "and", "number.", "phone"],
      },
      {
        target: "I tell her, “I have a sore throat and a headache since this morning.”",
        jumbled: ["her,", "tell", "I", "have", "“I", "sore", "a", "throat", "a", "and", "since", "headache", "morning.”", "this"],
      },
      {
        target: "As I give back the form, I feel calm because the receptionist is helpful and kind.",
        jumbled: ["give", "I", "back", "As", "form,", "the", "feel", "I", "calm", "because", "receptionist", "the", "helpful", "is", "kind.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about filling in a form.",
    mySentenceExample: "I write my name and age on the form.",
  },
  {
    number: 3,
    title: "Waiting for the Doctor",
    image: null,
    imageNote: "The narrator sitting quietly in a clean waiting room with soft chairs, a clock, health posters, and a big plant, a nurse calling another patient in the background.",
    story:
      "After I give back the form, I sit down on a chair in the waiting room. The room is clean and quiet, with soft chairs and a small table. A few other people wait too, and some of them look a little tired. On the wall, there is a clock, some health posters, and a big plant. I hold my bag on my lap and take slow, deep breaths. My throat still hurts, but the calm room helps me feel less worried. I read a health poster about washing hands and drinking clean water. A nurse comes out and calls another patient into a room. I wait for about ten minutes and try to stay calm and patient. As I wait quietly, I feel okay because I know the doctor will help me soon.",
    questions: [
      "Where does the writer sit after giving back the form?",
      "What is on the wall of the waiting room?",
      "What does the health poster talk about?",
    ],
    trueFalse: [
      { text: "The waiting room is clean and quiet.", answer: true },
      { text: "The writer waits for many hours.", answer: false },
      { text: "The writer feels okay because the doctor will help soon.", answer: true },
    ],
    buildSentence: [
      {
        target: "On the wall, there is a clock, some health posters, and a big plant.",
        jumbled: ["the", "On", "there", "wall,", "a", "is", "clock,", "health", "some", "and", "posters,", "big", "a", "plant."],
      },
      {
        target: "I read a health poster about washing hands and drinking clean water.",
        jumbled: ["a", "read", "health", "I", "about", "poster", "hands", "washing", "drinking", "and", "water.", "clean"],
      },
      {
        target: "As I wait quietly, I feel okay because I know the doctor will help me soon.",
        jumbled: ["wait", "I", "quietly,", "As", "feel", "I", "okay", "because", "know", "I", "doctor", "the", "help", "will", "soon.", "me"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about waiting at a clinic.",
    mySentenceExample: "I wait quietly for my turn at the clinic.",
  },
  {
    number: 4,
    title: "Meeting the Doctor",
    image: null,
    imageNote: "The narrator sitting down beside Dr. Santos's desk in a bright clean office, Dr. Santos smiling warmly and reading the form on her computer screen.",
    story:
      "Soon, the nurse opens a door and calls, “Please come in, it is your turn.” I stand up, walk into the room, and see a kind doctor at her desk. She smiles and says, “Hello, my name is Dr. Santos, please sit down.” I sit on the chair next to her desk and put my bag on the floor. She looks at my form on her computer and reads my details. Then she asks, “How are you feeling today, and what is the problem?” Her voice is soft and calm, so I do not feel nervous anymore. I feel that she really wants to listen and help me get better. The room is bright and clean, and everything feels safe and quiet. As I sit with Dr. Santos, I feel calm because she is friendly and kind.",
    questions: [
      "Who calls the writer into the room?",
      "What is the doctor's name?",
      "What does the doctor ask the writer?",
    ],
    trueFalse: [
      { text: "Dr. Santos is a kind doctor.", answer: true },
      { text: "The writer feels very nervous with the doctor.", answer: false },
      { text: "The writer feels calm because the doctor is friendly.", answer: true },
    ],
    buildSentence: [
      {
        target: "She smiles and says, “Hello, my name is Dr. Santos, please sit down.”",
        jumbled: ["smiles", "She", "says,", "and", "my", "“Hello,", "is", "name", "Santos,", "Dr.", "sit", "please", "down.”"],
      },
      {
        target: "Then she asks, “How are you feeling today, and what is the problem?”",
        jumbled: ["she", "Then", "asks,", "are", "“How", "feeling", "you", "and", "today,", "is", "what", "problem?”", "the"],
      },
      {
        target: "As I sit with Dr. Santos, I feel calm because she is friendly and kind.",
        jumbled: ["sit", "I", "with", "As", "Santos,", "Dr.", "feel", "I", "calm", "because", "is", "she", "friendly", "kind.", "and"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about meeting a doctor.",
    mySentenceExample: "The doctor is kind and helps me feel calm.",
  },
  {
    number: 5,
    title: "Describing My Symptoms",
    image: null,
    imageNote: "The narrator explaining symptoms to Dr. Santos, who listens carefully and writes notes on her computer, calm and attentive.",
    story:
      "Dr. Santos asks me to tell her about my problem step by step. I say, “Since this morning, I have a sore throat and a headache.” She asks, “Do you have a fever or a cough too?” I tell her, “Yes, I feel a little hot, and I cough sometimes.” She asks when the problem started and how I feel now. I explain that I woke up feeling weak and tired today. She listens carefully and writes some notes on her computer. Then she asks if I sleep well and drink enough water each day. I answer all her questions slowly and honestly. As I describe my symptoms, I feel relieved because the doctor understands my problem clearly.",
    questions: [
      "What symptoms does the writer have?",
      "What does the doctor ask about besides the sore throat?",
      "What does the doctor do while the writer speaks?",
    ],
    trueFalse: [
      { text: "The writer has a sore throat and a headache.", answer: true },
      { text: "The doctor does not listen to the writer.", answer: false },
      { text: "The writer feels relieved because the doctor understands.", answer: true },
    ],
    buildSentence: [
      {
        target: "I say, “Since this morning, I have a sore throat and a headache.”",
        jumbled: ["say,", "I", "this", "“Since", "I", "morning,", "a", "have", "throat", "sore", "a", "and", "headache.”"],
      },
      {
        target: "She listens carefully and writes some notes on her computer.",
        jumbled: ["listens", "She", "and", "carefully", "some", "writes", "notes", "her", "on", "computer."],
      },
      {
        target: "As I describe my symptoms, I feel relieved because the doctor understands my problem clearly.",
        jumbled: ["describe", "I", "symptoms,", "As", "my", "feel", "I", "relieved", "because", "doctor", "the", "my", "understands", "clearly.", "problem"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about telling a doctor how you feel.",
    mySentenceExample: "I tell the doctor about my sore throat.",
  },
  {
    number: 6,
    title: "The Simple Check-Up",
    image: null,
    imageNote: "Dr. Santos checking the narrator's throat with a small light, a thermometer and stethoscope visible on the desk, the narrator's mouth open saying 'ahhh'.",
    story:
      "Next, Dr. Santos says, “Let me check you now, please do not worry.” She puts a small thermometer under my arm to check my temperature. Then she looks inside my throat with a little light and a stick. “Say 'ahhh' for me, please,” she says, and I open my mouth wide. She listens to my chest and back with a stethoscope and asks me to breathe. Her hands are gentle, and she tells me each step before she does it. She checks my temperature and says, “You have a small fever, but it is not serious.” I feel calm because she explains everything in a clear and kind way. She writes some notes and gives me a soft, friendly smile. As the check-up ends, I feel relieved because my problem is small and easy to treat.",
    questions: [
      "What does the doctor put under the writer's arm?",
      "What does the doctor ask the writer to say?",
      "What does the doctor say about the fever?",
    ],
    trueFalse: [
      { text: "The doctor checks the writer's throat with a light.", answer: true },
      { text: "The doctor says the problem is very serious.", answer: false },
      { text: "The writer feels relieved at the end of the check-up.", answer: true },
    ],
    buildSentence: [
      {
        target: "She puts a small thermometer under my arm to check my temperature.",
        jumbled: ["puts", "She", "a", "thermometer", "small", "my", "under", "to", "arm", "my", "check", "temperature."],
      },
      {
        target: "She listens to my chest and back with a stethoscope and asks me to breathe.",
        jumbled: ["to", "listens", "She", "chest", "my", "back", "and", "a", "with", "stethoscope", "asks", "and", "to", "me", "breathe."],
      },
      {
        target: "As the check-up ends, I feel relieved because my problem is small and easy to treat.",
        jumbled: ["check-up", "the", "ends,", "As", "feel", "I", "relieved", "because", "problem", "my", "small", "is", "to", "easy", "and", "treat."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about a doctor's check-up.",
    mySentenceExample: "The doctor checks my throat and my temperature.",
  },
  {
    number: 7,
    title: "Getting My Medicine",
    image: null,
    imageNote: "Dr. Santos handing the narrator a small prescription paper across the desk, explaining instructions with a calm gesture, the narrator listening carefully.",
    story:
      "After the check-up, Dr. Santos tells me what I need to do to get better. She says, “You have a small throat infection, so I will give you some medicine.” She writes a prescription on a small piece of paper for me. “Take this medicine two times a day, after your meals,” she explains. She also tells me to drink a lot of warm water and rest at home. “Do not drink cold drinks, and try to sleep well tonight,” she adds. I listen carefully and repeat the instructions so I remember them. She asks, “Do you have any questions for me before you go?” I say, “No, thank you, Dr. Santos, you explain everything clearly.” As I take the prescription, I feel hopeful because now I know how to get better.",
    questions: [
      "What does the doctor say the writer has?",
      "How many times a day should the writer take the medicine?",
      "What does the doctor tell the writer to drink?",
    ],
    trueFalse: [
      { text: "The doctor gives the writer a prescription for medicine.", answer: true },
      { text: "The doctor says to drink cold drinks.", answer: false },
      { text: "The writer feels hopeful because they know how to get better.", answer: true },
    ],
    buildSentence: [
      {
        target: "Take this medicine two times a day, after your meals.",
        jumbled: ["this", "Take", "two", "medicine", "a", "times", "after", "day,", "meals.", "your"],
      },
      {
        target: "She also tells me to drink a lot of warm water and rest at home.",
        jumbled: ["also", "tells", "She", "to", "me", "a", "drink", "of", "lot", "water", "warm", "rest", "and", "home.", "at"],
      },
      {
        target: "As I take the prescription, I feel hopeful because now I know how to get better.",
        jumbled: ["take", "I", "the", "As", "prescription,", "feel", "I", "hopeful", "because", "know", "I", "now", "to", "how", "better.", "get"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about medicine from a doctor.",
    mySentenceExample: "I take my medicine two times a day.",
  },
  {
    number: 8,
    title: "At the Pharmacy",
    image: null,
    imageNote: "The narrator handing a prescription to a friendly pharmacist in a white coat behind the pharmacy counter, a small paper bag of medicine and throat lozenges nearby.",
    story:
      "I leave the doctor's room and walk to the small pharmacy in the clinic. Behind the counter, a friendly pharmacist in a white coat smiles at me. I give him the prescription from Dr. Santos and wait for a minute. He reads the paper and finds my medicine on a shelf behind him. He puts the medicine in a small paper bag with a white label. “Take one tablet two times a day, after your meals,” he tells me. He also gives me some throat lozenges to help with the pain. I pay for the medicine and put the bag safely in my hand. He says, “Get well soon, and drink lots of warm water.” As I leave the pharmacy, I feel ready because now I have everything I need to get better.",
    questions: [
      "Who is behind the pharmacy counter?",
      "What does the pharmacist put the medicine in?",
      "What does the pharmacist give besides the tablets?",
    ],
    trueFalse: [
      { text: "The pharmacist wears a white coat.", answer: true },
      { text: "The writer does not pay for the medicine.", answer: false },
      { text: "The writer feels ready to get better at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "I give him the prescription from Dr. Santos and wait for a minute.",
        jumbled: ["him", "give", "the", "I", "from", "prescription", "Santos", "Dr.", "wait", "and", "a", "for", "minute."],
      },
      {
        target: "He puts the medicine in a small paper bag with a white label.",
        jumbled: ["puts", "He", "the", "medicine", "a", "in", "paper", "small", "with", "bag", "white", "a", "label."],
      },
      {
        target: "As I leave the pharmacy, I feel ready because now I have everything I need to get better.",
        jumbled: ["leave", "I", "the", "As", "pharmacy,", "feel", "I", "ready", "because", "have", "I", "now", "everything", "need", "I", "better.", "get", "to"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about getting medicine at a pharmacy.",
    mySentenceExample: "I buy my medicine at the pharmacy.",
  },
  {
    number: 9,
    title: "Resting at Home",
    image: null,
    imageNote: "The narrator lying on a bed under a soft blanket in a quiet dim room, a cup of warm tea with honey on the nightstand, phone put away.",
    story:
      "When I get home, I take off my shoes and change into soft, warm clothes. I drink a big glass of warm water, just like the doctor tells me. Then I take my first tablet after I eat a small, simple lunch. I make a cup of warm tea with honey to help my sore throat. I lie down on my bed with a soft blanket and close my eyes. I turn off the bright lights and let my body rest in the quiet room. I do not use my phone too much, so my eyes can rest too. In the afternoon, I sleep for a while and feel a little better after. My throat still hurts a bit, but the pain is not as strong now. As I rest at home, I feel calm because I am taking good care of myself.",
    questions: [
      "What does the writer drink at home, like the doctor says?",
      "What does the writer put in the warm tea?",
      "How does the writer feel after sleeping in the afternoon?",
    ],
    trueFalse: [
      { text: "The writer takes the first tablet after eating lunch.", answer: true },
      { text: "The writer uses the phone all afternoon.", answer: false },
      { text: "The writer feels calm because they are taking care of themselves.", answer: true },
    ],
    buildSentence: [
      {
        target: "I drink a big glass of warm water, just like the doctor tells me.",
        jumbled: ["a", "drink", "big", "I", "of", "glass", "water,", "warm", "like", "just", "doctor", "the", "me.", "tells"],
      },
      {
        target: "I make a cup of warm tea with honey to help my sore throat.",
        jumbled: ["a", "make", "cup", "I", "warm", "of", "with", "tea", "to", "honey", "my", "help", "throat.", "sore"],
      },
      {
        target: "As I rest at home, I feel calm because I am taking good care of myself.",
        jumbled: ["rest", "I", "at", "As", "home,", "feel", "I", "calm", "because", "am", "I", "good", "taking", "of", "care", "myself."],
      },
    ],
    mySentencePrompt: "Write or say one sentence about resting when you are sick.",
    mySentenceExample: "I rest and drink warm water when I am sick.",
  },
  {
    number: 10,
    title: "Feeling Better Again",
    image: null,
    imageNote: "The narrator standing by an open window with bright fresh light, smiling and full of energy, an empty medicine bottle and finished tea cup visible nearby showing recovery.",
    story:
      "After a few days of medicine and rest, I wake up and feel much better. My throat does not hurt anymore, and my head feels light and clear. I do not have a fever, and my body feels strong and full of energy. I remember the first morning, when I felt weak, hot, and worried. Now I am thankful for Dr. Santos, the kind nurse, and the friendly pharmacist. I finish all my medicine, exactly as the doctor tells me to. I drink water, eat healthy food, and sleep well every night. I understand now that going to the doctor early is a smart and good choice. Next time I feel sick, I will not be afraid to visit the clinic. As I feel healthy again, I feel happy and thankful because I got the help I needed.",
    questions: [
      "How does the writer feel after a few days of medicine and rest?",
      "Who does the writer feel thankful for?",
      "What did the writer learn about going to the doctor?",
    ],
    trueFalse: [
      { text: "The writer feels much better after a few days.", answer: true },
      { text: "The writer still has a fever and a sore throat.", answer: false },
      { text: "The writer feels happy and thankful at the end.", answer: true },
    ],
    buildSentence: [
      {
        target: "After a few days of medicine and rest, I wake up and feel much better.",
        jumbled: ["a", "After", "days", "few", "medicine", "of", "rest,", "and", "wake", "I", "and", "up", "much", "feel", "better."],
      },
      {
        target: "I understand now that going to the doctor early is a smart and good choice.",
        jumbled: ["understand", "I", "now", "going", "that", "the", "to", "doctor", "is", "early", "smart", "a", "good", "and", "choice."],
      },
      {
        target: "As I feel healthy again, I feel happy and thankful because I got the help I needed.",
        jumbled: ["feel", "I", "healthy", "As", "again,", "feel", "I", "happy", "thankful", "and", "because", "got", "I", "help", "the", "needed.", "I"],
      },
    ],
    mySentencePrompt: "Write or say one sentence about feeling better after being sick.",
    mySentenceExample: "I feel healthy and happy again now.",
  },
];

export default {
  title: STORYBOOK_TITLE,
  coverImage: COVER_IMAGE,
  coverImageNote: COVER_IMAGE_NOTE,
  chapters: CHAPTERS,
  chapterImageAspect: "3 / 2",
};

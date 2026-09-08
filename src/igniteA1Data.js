// Ignite (A1 Teens) lesson content, data-driven -- keyed "unit-lesson".
// Converted from IGNITEA1TEENS.docx. Unit 1 Lesson 1 is the separate,
// bespoke TeensSayHelloLesson.jsx (built earlier); everything here is
// rendered by the generic IgniteLesson.jsx player. Each unit's 5th lesson
// is "Unit Review" -- the docx's own capstone/summative lesson, no new
// language, matches the locked "5 teaching + test" shape under a
// different real name.

export const IGNITE_A1_LESSONS = {
  "1-2": {
    slides: [
      { type: "title", stage: "Unit 1 · Lesson 2", eyebrow: "A1 · Ignite", title: "Questions and Answers", subtitle: "Ask and answer basic introduction questions." },
      { type: "vocab", stage: "Ask & Answer", heading: "Five Questions", subheading: "New questions to ask someone new", items: [{ label: "What's your name?" }, { label: "How old are you?" }, { label: "Where are you from?" }, { label: "Favorite color?" }, { label: "Favorite food?" }] },
      { type: "examples", stage: "Learn It", heading: "Question → Answer", subheading: "Notice the pattern", rows: [["What's your name?", "My name is Anna."], ["Where are you from?", "I'm from Korea."]] },
      { type: "dialogue", stage: "Try It", heading: "Ask, Then Answer", subheading: "Then reverse it", turns: [{ who: "teacher", text: "I'm from Japan." }, { who: "student", text: "Where are you from?" }] },
      { type: "dialogue", stage: "Question Detective", heading: "Question Detective", subheading: "Discover five things about a mystery person", turns: [{ who: "student", text: "What's your name?" }, { who: "teacher", text: "I'm Leo." }, { who: "student", text: "How old are you?" }, { who: "teacher", text: "I'm 15." }] },
      { type: "practice", stage: "Exit Check", heading: "Ask Three Questions", subheading: "Ask your teacher independently, no help", line: "___? ___? ___?" },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now ask and answer basic questions about yourself. Next up: spelling and numbers." },
    ],
  },
  "1-3": {
    slides: [
      { type: "title", stage: "Unit 1 · Lesson 3", eyebrow: "A1 · Ignite", title: "Spelling and Numbers", subtitle: "Spell your name and say numbers 1-20." },
      { type: "vocab", stage: "Getting Ready", heading: "The Alphabet", subheading: "A, B, C... spelled out loud", items: [{ label: "A-B-C" }, { label: "How do you spell that?" }] },
      { type: "examples", stage: "Learn It", heading: "Spell It Out", subheading: "Letter by letter", rows: [["How do you spell your name?", "A-L-E-X."], ["How old are you?", "I'm 14."]] },
      { type: "dialogue", stage: "Try It", heading: "Spell & Count", subheading: "Ask and answer", turns: [{ who: "teacher", text: "How do you spell your name?" }, { who: "student", text: "S-A-M." }, { who: "teacher", text: "How old are you?" }, { who: "student", text: "I'm 13." }] },
      { type: "dialogue", stage: "Spell It Challenge", heading: "Spell It Challenge", subheading: "Spell a mystery name letter by letter, student writes it down", turns: [{ who: "teacher", text: "M-A-R-C-U-S." }, { who: "student", text: "Is your name Marcus?" }, { who: "teacher", text: "Yes! And I'm sixteen." }] },
      { type: "practice", stage: "Exit Check", heading: "Spell & Say", subheading: "Spell your own name and say your age", line: "My name is ___. It's spelled ___. I'm ___ years old." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now spell your name and share your age with numbers. Next up: meeting someone new." },
    ],
  },
  "1-4": {
    slides: [
      { type: "title", stage: "Unit 1 · Lesson 4", eyebrow: "A1 · Ignite", title: "Meeting Someone New", subtitle: "Put greetings, questions, and spelling together in one conversation." },
      { type: "vocab", stage: "Getting Ready", heading: "Everything So Far", subheading: "Greet, name, spell, age, country", items: [{ label: "Hi!" }, { label: "Name?" }, { label: "Spell it" }, { label: "Age?" }, { label: "From?" }] },
      { type: "examples", stage: "Learn It", heading: "One Full Conversation", subheading: "All the pieces together", rows: [["Hi! What's your name?", "Hi! I'm Mia."], ["How do you spell that?", "M-I-A."]] },
      { type: "dialogue", stage: "Try It", heading: "Full Conversation Practice", subheading: "Greet, ask, spell, and answer", turns: [{ who: "teacher", text: "Hi! I'm Daniel." }, { who: "student", text: "Nice to meet you! How old are you?" }, { who: "teacher", text: "I'm 15. And you?" }] },
      { type: "dialogue", stage: "Meet a Stranger", heading: "Meet a Stranger", subheading: "A whole first meeting, start to finish", turns: [{ who: "teacher", text: "Hello, I don't think we've met." }, { who: "student", text: "Hi! I'm ___. Nice to meet you." }, { who: "teacher", text: "Where are you from?" } ] },
      { type: "practice", stage: "Exit Check", heading: "Meet Someone New", subheading: "A complete first-meeting conversation, on your own", line: "Hi! I'm ___. I'm from ___. I'm ___ years old." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now handle a full first-meeting conversation on your own. Next up: Unit Review." },
    ],
  },
  "1-5": {
    slides: [
      { type: "title", stage: "Unit 1 · Unit Review", eyebrow: "A1 · Ignite", title: "Unit Review", subtitle: "Complete a first-meeting conversation independently. No new language today." },
      { type: "vocab", stage: "Warm-Up", heading: "Quick-Fire Review", subheading: "Answer fast", items: [{ label: "What's your name?" }, { label: "How old are you?" }, { label: "Where are you from?" }, { label: "How do you spell it?" }] },
      { type: "examples", stage: "Review", heading: "Greet → Name → Spell → Age → Country", subheading: "The whole unit in one chain", rows: [["What's your name?", "My name is Alex."], ["How do you spell that?", "A-L-E-X."]] },
      { type: "dialogue", stage: "Controlled Review", heading: "Choose the Response", subheading: "Pick the right answer for each situation", turns: [{ who: "teacher", text: "How do you spell that?" }, { who: "student", text: "A-L-E-X." }] },
      { type: "dialogue", stage: "The First Meeting Final Challenge", heading: "Final Challenge: Round 1", subheading: "Guided — follow the roadmap: HELLO → NAME → SPELL → AGE → FROM → NICE TO MEET", turns: [{ who: "teacher", text: "Hi!" }, { who: "student", text: "Hi! I'm ___. N-A-M-E. I'm ___ years old, from ___. Nice to meet you!" }] },
      { type: "dialogue", stage: "Final Challenge: Round 2 & 3", heading: "No Roadmap, Then a Surprise", subheading: "Remember it all yourself, then meet a new student at school", turns: [{ who: "teacher", text: "Hello! Nice to meet you." }, { who: "student", text: "Hi! I'm ___. Nice to meet you too!" } ] },
      { type: "landing", stage: "Unit Complete!", heading: "Unit 1 Complete!", caption: "You can greet someone, ask and answer questions, spell your name, and handle a full first meeting on your own." },
    ],
  },
};

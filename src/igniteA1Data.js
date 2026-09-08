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
  "2-1": {
    slides: [
      { type: "title", stage: "Unit 2 · Lesson 1", eyebrow: "A1 · Ignite", title: "My Family", subtitle: "Name basic family members." },
      { type: "vocab", stage: "Getting Ready", heading: "Family Words", subheading: "New words for this unit", items: [{ label: "mom" }, { label: "dad" }, { label: "brother" }, { label: "sister" }, { label: "grandma" }, { label: "grandpa" }] },
      { type: "examples", stage: "Learn It", heading: "This Is My...", subheading: "Point and name", rows: [["Who is this?", "This is the mother."], ["Show me the brother.", "This is my brother."]] },
      { type: "dialogue", stage: "Try It", heading: "Who Is This?", subheading: "Identify each family member", turns: [{ who: "teacher", text: "Who is this?" }, { who: "student", text: "This is the mother." }, { who: "teacher", text: "Show me the brother." }] },
      { type: "dialogue", stage: "Family Tree Mystery", heading: "Family Tree Mystery", subheading: "The Park Family: Dad David, Mom Lisa, Brother Max, Sister Emma", turns: [{ who: "teacher", text: "I'm a girl. I'm Max's sister. Who am I?" }, { who: "student", text: "Emma!" }, { who: "teacher", text: "Do you have a brother or a sister?" }] },
      { type: "practice", stage: "Exit Check", heading: "Name Five", subheading: "Name each family member without help", line: "This is my ___. This is my ___. This is my ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now name the people in a family. Next up: talking about them." },
    ],
  },
  "2-2": {
    slides: [
      { type: "title", stage: "Unit 2 · Lesson 2", eyebrow: "A1 · Ignite", title: "Talking About Family", subtitle: "Say simple facts about family members." },
      { type: "vocab", stage: "Getting Ready", heading: "I Have...", subheading: "New patterns for this unit", items: [{ label: "I have one brother." }, { label: "His name is..." }, { label: "Her name is..." }, { label: "He is ___ years old." }] },
      { type: "examples", stage: "Learn It", heading: "Build a Fact", subheading: "Relationship + name + age", rows: [["Sophie, sister, 13", "She is my sister. Her name is Sophie. She is 13."]] },
      { type: "dialogue", stage: "Try It", heading: "Give the Facts", subheading: "Turn information into sentences", turns: [{ who: "teacher", text: "Sophie. Sister. 13." }, { who: "student", text: "She is my sister. Her name is Sophie. She is 13 years old." }] },
      { type: "dialogue", stage: "Family Profile Cards", heading: "Family Profile Cards", subheading: "Maya, sister, 14, favorite color purple — some clues hidden each round", turns: [{ who: "teacher", text: "👧 Sister, 14. Tell me about her." }, { who: "student", text: "She is my sister. She is 14 years old." }, { who: "teacher", text: "Now: Jack, brother, 16." }] },
      { type: "practice", stage: "Exit Check", heading: "Talk About Family", subheading: "One family member, at least 3 facts, 20-30 seconds", line: "This is my ___. ___'s name is ___. ___ is ___ years old." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now share real facts about your family. Next up: describing people." },
    ],
  },
  "2-3": {
    slides: [
      { type: "title", stage: "Unit 2 · Lesson 3", eyebrow: "A1 · Ignite", title: "People I Know", subtitle: "Describe people with simple words." },
      { type: "vocab", stage: "Getting Ready", heading: "Appearance & Personality", subheading: "New describing words", items: [{ label: "tall / short" }, { label: "long hair / short hair" }, { label: "nice / funny" }, { label: "friendly / quiet" }] },
      { type: "message", stage: "Learn It", heading: "Is + Adjective, Has + Noun", subheading: "Two different patterns", lines: ["She *is* tall.", "She *has* long hair.", "He *is* funny."] },
      { type: "dialogue", stage: "Try It", heading: "Describe What You See", subheading: "Look at a person and describe them", turns: [{ who: "teacher", text: "What can you see?" }, { who: "student", text: "He is tall. He has short hair." }] },
      { type: "dialogue", stage: "Who Am I Describing?", heading: "Who Am I Describing?", subheading: "Alex tall/funny, Mia short/friendly, Ben quiet, Sara nice — guess from clues", turns: [{ who: "teacher", text: "This person is tall. This person has long hair. This person is friendly." }, { who: "student", text: "Mia!" }, { who: "teacher", text: "Now you describe someone for me." }] },
      { type: "practice", stage: "Exit Check", heading: "Describe One Person", subheading: "At least three simple sentences", line: "He/She is my ___. He/She is ___. He/She has ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now describe people you know. Next up: family questions." },
    ],
  },
  "2-4": {
    slides: [
      { type: "title", stage: "Unit 2 · Lesson 4", eyebrow: "A1 · Ignite", title: "Family Questions", subtitle: "Answer simple questions about family." },
      { type: "vocab", stage: "Getting Ready", heading: "Family Questions", subheading: "New questions for this unit", items: [{ label: "Do you have a brother?" }, { label: "How many sisters?" }, { label: "What's his/her name?" }, { label: "What is he/she like?" }] },
      { type: "examples", stage: "Learn It", heading: "Question → Answer", subheading: "The key patterns", rows: [["Do you have a brother?", "Yes, I do."], ["How many brothers do you have?", "I have two brothers."]] },
      { type: "dialogue", stage: "Try It", heading: "Ask, Then Match", subheading: "Answer, then match answers to questions", turns: [{ who: "teacher", text: "Do you have a sister?" }, { who: "student", text: "Yes, I do." }] },
      { type: "dialogue", stage: "Family Interview", heading: "Family Interview", subheading: "You interview the teacher's fictional character, then switch roles", turns: [{ who: "student", text: "Do you have a brother?" }, { who: "teacher", text: "Yes, I do." }, { who: "student", text: "What's his name?" }, { who: "teacher", text: "His name is Leo." }] },
      { type: "practice", stage: "Exit Check", heading: "Answer Independently", subheading: "3-4 random family questions", line: "Yes, I do. / No, I don't. I have ___ ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now ask and answer family questions confidently. Next up: Unit Review." },
    ],
  },
  "2-5": {
    slides: [
      { type: "title", stage: "Unit 2 · Unit Review", eyebrow: "A1 · Ignite", title: "Unit Review", subtitle: "Talk briefly about family using everything you've learned. No new language today." },
      { type: "vocab", stage: "Quick Review", heading: "Family → Facts → Description → Questions", subheading: "Everything from this unit", items: [{ label: "family members" }, { label: "numbers" }, { label: "ages" }, { label: "appearance" }, { label: "personality" }] },
      { type: "message", stage: "Language Review", heading: "Who? → Facts → Description", subheading: "Your speaking structure", lines: ["This is my brother. His name is Alex. He is *15* years old. He is *tall and funny*."] },
      { type: "dialogue", stage: "Controlled Practice", heading: "Talk About the Profile", subheading: "Use a fictional profile to build sentences", turns: [{ who: "teacher", text: "Sophie, sister, 13, funny. Tell me about her." }, { who: "student", text: "This is my sister. Her name is Sophie. She is 13. She is funny." }] },
      { type: "dialogue", stage: "My Family, My Story", heading: "My Family, My Story", subheading: "Choose real or fictional, prepare, then present 30-60 seconds", turns: [{ who: "student", text: "This is my family. This is my mom. Her name is Anna. She is 40 years old. She is friendly." }, { who: "teacher", text: "What's her name? How old is your brother?" } ] },
      { type: "practice", stage: "Exit Check", heading: "Tell Me About Your Family", subheading: "Speak independently for 30-60 seconds", line: "This is my family. This is my ___. ___'s name is ___. ___ is ___." },
      { type: "landing", stage: "Unit Complete!", heading: "Unit 2 Complete!", caption: "You can name family members, give facts, describe people, answer questions, and talk about your family." },
    ],
  },
  "3-1": {
    slides: [
      { type: "title", stage: "Unit 3 · Lesson 1", eyebrow: "A1 · Ignite", title: "School Subjects", subtitle: "Name basic school subjects." },
      { type: "vocab", stage: "Getting Ready", heading: "School Subjects", subheading: "New words for this unit", items: [{ label: "English" }, { label: "Math" }, { label: "Science" }, { label: "History" }, { label: "Art" }, { label: "PE" }] },
      { type: "examples", stage: "Learn It", heading: "This Is My Subject", subheading: "Name and complete", rows: [["I have ___.", "I have Math."], ["My favorite subject is ___.", "My favorite subject is English."]] },
      { type: "dialogue", stage: "Try It", heading: "Complete the Sentence", subheading: "Identify subjects and complete sentences", turns: [{ who: "teacher", text: "I have ___." }, { who: "student", text: "I have Science." }, { who: "teacher", text: "My favorite subject is ___." }] },
      { type: "dialogue", stage: "Subject Schedule Challenge", heading: "Subject Schedule Challenge", subheading: "Read, then recall a fictional school schedule", turns: [{ who: "teacher", text: "What do you have on Monday?" }, { who: "student", text: "I have Math and English." }, { who: "teacher", text: "What is your favorite subject?" }] },
      { type: "practice", stage: "Exit Check", heading: "Name Five Subjects", subheading: "Then say one sentence about a favorite", line: "I have ___, ___, and ___. My favorite subject is ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now name school subjects and say your favorite. Next up: your school day." },
    ],
  },
  "3-2": {
    slides: [
      { type: "title", stage: "Unit 3 · Lesson 2", eyebrow: "A1 · Ignite", title: "My School Day", subtitle: "Say simple sentences about your school day." },
      { type: "vocab", stage: "Getting Ready", heading: "My Day", subheading: "New patterns for this unit", items: [{ label: "I go to school at 7:30." }, { label: "I have lunch at 12." }, { label: "I go home at 4." }] },
      { type: "examples", stage: "Learn It", heading: "The School-Day Sequence", subheading: "Go to school → classes → lunch → classes → go home", rows: [["What time do you go to school?", "I go to school at 7:30."], ["What time is lunch?", "I have lunch at 12."]] },
      { type: "dialogue", stage: "Try It", heading: "Change the Time", subheading: "Give a time or subject, get a sentence back", turns: [{ who: "teacher", text: "8:00" }, { who: "student", text: "I go to school at 8:00." }] },
      { type: "dialogue", stage: "My School Day Timeline", heading: "My School Day Timeline", subheading: "Order the events, then build your own timeline", turns: [{ who: "teacher", text: "Put these in order: lunch, go home, go to school, classes." }, { who: "student", text: "I go to school. I have classes. I have lunch. I go home." }] },
      { type: "practice", stage: "Exit Check", heading: "A Day in My Life", subheading: "3-4 sentences about a school day", line: "I go to school at ___. I have ___ in the morning. I have lunch at ___. I go home at ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now describe your school day in order. Next up: teachers and classmates." },
    ],
  },
  "3-3": {
    slides: [
      { type: "title", stage: "Unit 3 · Lesson 3", eyebrow: "A1 · Ignite", title: "Teachers and Classmates", subtitle: "Describe people at school in simple terms." },
      { type: "vocab", stage: "Getting Ready", heading: "School People", subheading: "New words for this unit", items: [{ label: "teacher / classmate" }, { label: "strict / nice" }, { label: "tall / short" }, { label: "friendly / quiet" }] },
      { type: "message", stage: "Learn It", heading: "Is + Adjective, Has + Noun", subheading: "The same two patterns from Unit 2", lines: ["My teacher *is* nice.", "He *is* tall.", "My classmate *has* short hair."] },
      { type: "dialogue", stage: "Try It", heading: "Person + Adjective", subheading: "Turn a pair into a sentence", turns: [{ who: "teacher", text: "Teacher + funny." }, { who: "student", text: "The teacher is funny." }] },
      { type: "dialogue", stage: "School People Mystery", heading: "School People Mystery", subheading: "Guess from clues, then compare two people", turns: [{ who: "teacher", text: "This person is tall. This person is friendly." }, { who: "student", text: "Is it the teacher?" }, { who: "teacher", text: "Now compare: he is tall, but she is ___." }] },
      { type: "practice", stage: "Exit Check", heading: "Describe One Person", subheading: "3 sentences about a teacher or classmate", line: "My ___ is ___. He/She is ___. He/She has ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now describe teachers and classmates. Next up: school questions." },
    ],
  },
  "3-4": {
    slides: [
      { type: "title", stage: "Unit 3 · Lesson 4", eyebrow: "A1 · Ignite", title: "School Questions", subtitle: "Answer simple questions about school life." },
      { type: "vocab", stage: "Getting Ready", heading: "School Questions", subheading: "New questions for this unit", items: [{ label: "What's your favorite subject?" }, { label: "What time do you go to school?" }, { label: "Do you like school?" }, { label: "What is your school like?" }] },
      { type: "examples", stage: "Learn It", heading: "Question → Answer", subheading: "What information does each question want?", rows: [["What's your favorite subject?", "My favorite subject is Math."], ["Do you like school?", "Yes, I do."]] },
      { type: "dialogue", stage: "Try It", heading: "Answer in Random Order", subheading: "Use sentence starters if you need them", turns: [{ who: "teacher", text: "What time do you go to school?" }, { who: "student", text: "I go to school at 7:30." }] },
      { type: "dialogue", stage: "School Interview Challenge", heading: "School Interview Challenge", subheading: "You interview a fictional student, then ask a follow-up question", turns: [{ who: "teacher", text: "My favorite subject is Art." }, { who: "student", text: "Why do you like Art?" }, { who: "teacher", text: "Because it's fun. Now ask me another question." }] },
      { type: "practice", stage: "Exit Check", heading: "Answer Independently", subheading: "3 random questions", line: "My favorite subject is ___. I go to school at ___. Yes/No, I ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now answer questions about your school life. Next up: Unit Review." },
    ],
  },
  "3-5": {
    slides: [
      { type: "title", stage: "Unit 3 · Unit Review", eyebrow: "A1 · Ignite", title: "Unit Review", subtitle: "Speak briefly about school subjects and school life. No new language today." },
      { type: "vocab", stage: "Quick Start", heading: "Rapid-Fire Review", subheading: "Name a subject, a school person, an activity", items: [{ label: "Name a subject" }, { label: "Name a school person" }, { label: "Say a school-day activity" }, { label: "Describe a person" }] },
      { type: "message", stage: "Review", heading: "Your School-Talk Patterns", subheading: "Quick correction and review", lines: ["I have… My favorite subject is…", "I go to school at…", "He/She is… He/She has…"] },
      { type: "dialogue", stage: "Try It", heading: "Turn Prompts Into Sentences", subheading: "Math / 7:30 / teacher + funny / lunch", turns: [{ who: "teacher", text: "teacher + funny" }, { who: "student", text: "The teacher is funny." }] },
      { type: "dialogue", stage: "My School Life Challenge", heading: "My School Life Challenge", subheading: "Build a 45-60 second School Life Talk, then answer follow-ups", turns: [{ who: "student", text: "My school is big. My favorite subject is Math. I go to school at 7:30." }, { who: "teacher", text: "What do you do at lunch? Describe one person at your school." } ] },
      { type: "practice", stage: "Exit Check", heading: "Tell Me About Your School Life", subheading: "Favorite subject, school time, and describe one person", line: "My favorite subject is ___. I go to school at ___. My ___ is ___." },
      { type: "landing", stage: "Unit Complete!", heading: "Unit 3 Complete!", caption: "You can name subjects, describe your school day, describe school people, and answer school questions." },
    ],
  },
  "4-1": {
    slides: [
      { type: "title", stage: "Unit 4 · Lesson 1", eyebrow: "A1 · Ignite", title: "Friends and Words for People", subtitle: "Name words for friends and describe friendship." },
      { type: "vocab", stage: "Getting Ready", heading: "Words for Friends", subheading: "New words for this unit", items: [{ label: "friend / best friend" }, { label: "classmate / teammate" }, { label: "kind / helpful" }, { label: "funny / friendly" }] },
      { type: "examples", stage: "Learn It", heading: "He/She Is + Adjective", subheading: "Relationship + personality", rows: [["best friend + funny", "My best friend is funny."], ["classmate + kind", "My classmate is kind."]] },
      { type: "dialogue", stage: "Try It", heading: "Mix Relationship & Personality", subheading: "Turn a pair into a sentence", turns: [{ who: "teacher", text: "best friend + funny" }, { who: "student", text: "My best friend is funny." }] },
      { type: "dialogue", stage: "Friendship Match-Up", heading: "Friendship Match-Up", subheading: "Match friend profiles to clues, then create your own", turns: [{ who: "teacher", text: "This person is kind and helpful. Who is it?" }, { who: "student", text: "That's my classmate!" }, { who: "teacher", text: "Now choose the best friend for this character and explain why." }] },
      { type: "practice", stage: "Exit Check", heading: "Describe a Friend", subheading: "Relationship + 2 personality words + 1 extra detail", line: "My ___ is ___ and ___. ___ also ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now describe your friends. Next up: what friends like." },
    ],
  },
  "4-2": {
    slides: [
      { type: "title", stage: "Unit 4 · Lesson 2", eyebrow: "A1 · Ignite", title: "What Friends Like", subtitle: "Talk about a friend's likes using the simple present." },
      { type: "vocab", stage: "Getting Ready", heading: "He Likes / She Likes", subheading: "New patterns for this unit", items: [{ label: "He likes basketball." }, { label: "She doesn't like soccer." }, { label: "Does he like music?" }] },
      { type: "examples", stage: "Learn It", heading: "I Like, He/She Likes", subheading: "Watch the -s", rows: [["Mia + music", "Mia likes music."], ["I + video games", "I like video games."]] },
      { type: "dialogue", stage: "Try It", heading: "Positive and Negative", subheading: "Practice both forms", turns: [{ who: "teacher", text: "Mia + music" }, { who: "student", text: "Mia likes music." }, { who: "teacher", text: "Alex + soccer (no)" }, { who: "student", text: "Alex doesn't like soccer." }] },
      { type: "dialogue", stage: "Friend Likes Investigator", heading: "Friend Likes Investigator", subheading: "Three fictional friends — ask, remember, report", turns: [{ who: "teacher", text: "Who likes basketball?" }, { who: "student", text: "Alex likes basketball." }, { who: "student", text: "Does Alex like music too?" }, { who: "teacher", text: "No, he doesn't." }] },
      { type: "practice", stage: "Exit Check", heading: "What Does Your Friend Like?", subheading: "3 sentences about a fictional friend", line: "He/She likes ___. He/She likes ___. He/She doesn't like ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now talk about what your friends like. Next up: free-time activities." },
    ],
  },
  "4-3": {
    slides: [
      { type: "title", stage: "Unit 4 · Lesson 3", eyebrow: "A1 · Ignite", title: "Free Time Activities", subtitle: "Name common free-time activities." },
      { type: "vocab", stage: "Getting Ready", heading: "Free-Time Activities", subheading: "New words for this unit", items: [{ label: "play video games" }, { label: "watch movies" }, { label: "listen to music" }, { label: "hang out with friends" }, { label: "ride a bike" }] },
      { type: "examples", stage: "Learn It", heading: "I + Activity", subheading: "Name it, then use it in a sentence", rows: [["watch movies", "I watch movies."], ["listen to music", "I listen to music."]] },
      { type: "dialogue", stage: "Try It", heading: "Activity → Sentence", subheading: "Turn each activity into a sentence", turns: [{ who: "teacher", text: "watch movies" }, { who: "student", text: "I watch movies." }] },
      { type: "dialogue", stage: "Free-Time Choice Board", heading: "Free-Time Choice Board", subheading: "Choose activities for a fictional teen, then adapt to a new situation", turns: [{ who: "teacher", text: "Choose 3 activities for this teen and explain why." }, { who: "student", text: "He likes playing video games because it's fun." }, { who: "teacher", text: "It's raining. You have one free hour. What do you do?" }] },
      { type: "practice", stage: "Exit Check", heading: "Name Five Activities", subheading: "Then say which one you like most", line: "I like ___, ___, and ___. My favorite is ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now talk about free-time activities. Next up: friends and free time questions." },
    ],
  },
  "4-4": {
    slides: [
      { type: "title", stage: "Unit 4 · Lesson 4", eyebrow: "A1 · Ignite", title: "Friends and Free Time Questions", subtitle: "Ask and answer questions about friends and free time." },
      { type: "vocab", stage: "Getting Ready", heading: "Friend & Free-Time Questions", subheading: "New questions for this unit", items: [{ label: "Who is your best friend?" }, { label: "What does your friend like?" }, { label: "What do you do in your free time?" }, { label: "Do you like sports?" }] },
      { type: "examples", stage: "Learn It", heading: "Question → Answer", subheading: "What / Does / Do questions", rows: [["What do you do in your free time?", "I watch movies."], ["Does your friend like music?", "Yes, she does."]] },
      { type: "dialogue", stage: "Try It", heading: "Answer or Match", subheading: "Answer directly, or match answer to question", turns: [{ who: "teacher", text: "I like gaming." }, { who: "student", text: "What is your favorite free-time activity?" }] },
      { type: "dialogue", stage: "Free-Time Chat Show", heading: "Free-Time Chat Show", subheading: "You host — interview the guest, then ask a natural follow-up", turns: [{ who: "student", text: "Who is your best friend?" }, { who: "teacher", text: "My best friend is Alex. I like gaming." }, { who: "student", text: "What games do you like?" }] },
      { type: "practice", stage: "Exit Check", heading: "Answer & Ask", subheading: "3 random questions, then ask the teacher 1", line: "My best friend is ___. In my free time, I ___." },
      { type: "landing", stage: "Wrap-Up", heading: "Nice Work!", caption: "You can now ask and answer questions about friends and free time. Next up: Unit Review." },
    ],
  },
  "4-5": {
    slides: [
      { type: "title", stage: "Unit 4 · Unit Review", eyebrow: "A1 · Ignite", title: "Unit Review", subtitle: "Talk briefly about friends and free time. No new language today." },
      { type: "vocab", stage: "Quick Start", heading: "Rapid-Fire Review", subheading: "Name a friend, describe them, name activities", items: [{ label: "Name a type of friend" }, { label: "Describe a friend" }, { label: "Name 3 free-time activities" }, { label: "Say something a friend likes" }] },
      { type: "message", stage: "Review", heading: "Your Friends & Free-Time Patterns", subheading: "Quick correction and review", lines: ["He likes… She doesn't like…", "Does he/she like…?", "My friend is…"] },
      { type: "dialogue", stage: "Try It", heading: "Mixed Prompts", subheading: "friend + funny / friend + music / I + video games", turns: [{ who: "teacher", text: "she + basketball" }, { who: "student", text: "She likes basketball." }] },
      { type: "dialogue", stage: "My Friends & Free Time Story", heading: "My Friends & Free Time Story", subheading: "Build a 45-60 second talk, then retell it from memory", turns: [{ who: "student", text: "My friend Alex is funny. He likes basketball. We hang out and play video games together." }, { who: "teacher", text: "What do you like doing in your free time?" } ] },
      { type: "practice", stage: "Exit Check", heading: "Tell Me About a Friend", subheading: "Who they are, what they like, what you do together", line: "My friend is ___. He/She likes ___. We ___ together." },
      { type: "landing", stage: "Unit Complete!", heading: "Unit 4 Complete!", caption: "You can describe friends, talk about their likes, name free-time activities, and answer questions about both." },
    ],
  },
};

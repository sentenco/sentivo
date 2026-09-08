// SOAR A2 Kids lesson data, keyed "unit-lesson". Consumed by SoarLesson.jsx.
// Content adapted from SOARA2KIDS.docx -- each lesson's Goal + 5 numbered
// teaching steps (the ⭐ step is usually the richest/most interactive one)
// mapped onto the same 6-slide "Sky Voyage" shell established by Unit 1
// Lesson 1 (SchoolSubjectsLesson.jsx): Getting Ready, Taking Off, [a
// content-appropriate middle stage], Flight Log, Postcard Message, Landing.

export const SOAR_A2_LESSONS = {
  // ---------- Unit 1: School Life ----------
  "1-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 1 · Lesson 2", title: "My School Day", subtitle: "Sequence a school day using first, then, after that, finally." },
      { type: "pairs", stage: "Getting Ready", heading: "Ready to Fly?", subheading: "What subjects do you have? What's your favorite?", knownLabel: "Last time", known: [{ emoji: "🎨", label: "art" }, { emoji: "🔢", label: "math" }], newLabel: "Today", items: [{ emoji: "⏰", label: "sequence" }, { emoji: "🏫", label: "school day" }] },
      { type: "chips", stage: "Taking Off", heading: "Sequencing Words", subheading: "Four words to order your day", items: ["First", "Then", "After that", "Finally"] },
      { type: "log", stage: "Build My School Day", heading: "Arrive → English → Math → Lunch → Home", subheading: "Model: First, I arrive at school. Then, I have English.", rows: ["First, I ___", "Then, I ___", "After that, I ___", "Finally, I ___"] },
      { type: "dialogue", stage: "Flight Log", heading: "School Day Story", subheading: "Take turns adding one event, using a sequencing word each time", turns: [{ who: "teacher", text: "First, I go to school." }, { who: "student", text: "Then, I have Math." }, { who: "teacher", text: "After that, I have lunch." }, { who: "student", text: "Finally, I go home!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "My School Day", subheading: "Tell me about your school day (4-6 sentences)", line: "First, I ___. Then, I ___. After that, I ___. Finally, I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "My School Day", caption: "First, I go to school. Then, I have English. After that, I have lunch. Finally, I go home." },
    ],
  },
  "1-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 1 · Lesson 3", title: "After-School Clubs", subtitle: "Talk about after-school activities and compare preferences." },
      { type: "chips", stage: "Getting Ready", heading: "What Do You Do After School?", subheading: "Games, TV, homework, or sports?", items: ["basketball", "soccer", "swimming", "drawing", "dancing", "music", "reading", "coding", "cooking", "art club"] },
      { type: "message", stage: "Taking Off", heading: "Club Match", subheading: "What can you do in each club?", lines: ["You can *draw* in the art club.", "You can *play basketball* in the sports club."] },
      { type: "message", stage: "What Would You Choose?", heading: "🏀 Basketball Club vs 🎨 Art Club", subheading: "Which club do you want to join? Why?", lines: ["I want to join the *basketball club* because I like sports."] },
      { type: "message", stage: "Flight Log", heading: "Choose Your Club", subheading: "Compare two clubs and defend your choice", lines: ["I *prefer* Art Club.", "I like Art Club *more than* Basketball Club.", "Art is *more fun than* basketball."] },
      { type: "postcard", stage: "Postcard Message", heading: "My Perfect Club", subheading: "Describe your ideal after-school club", line: "My favorite club is a ___ club. I like ___. I prefer ___ to ___ because it is ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "My Perfect Club", caption: "My favorite club is a music club. I prefer music to sports because it is fun." },
    ],
  },
  "1-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 1 · Lesson 4", title: "A Class Project", subtitle: "Describe a simple class project using sequencing and because." },
      { type: "chips", stage: "Getting Ready", heading: "Project Words", subheading: "New words for today", items: ["project", "group", "idea", "topic", "poster", "picture", "write", "draw", "practice", "present"] },
      { type: "steps", stage: "Taking Off", heading: "Build the Project", subheading: "\"Animals Around the World\" — what can we do?", items: ["Choose a topic", "Find information", "Make a poster", "Present the project"] },
      { type: "log", stage: "Build the Project", heading: "Put It in Order", subheading: "Use all four sequencing words", rows: ["First, we ___ a topic.", "Then, we ___ information.", "After that, we make a ___.", "Finally, we ___ it."] },
      { type: "dialogue", stage: "Flight Log", heading: "Project Pitch", subheading: "Your class needs a new project! Explain yours.", turns: [{ who: "teacher", text: "What is your project? What do you do first?" }, { who: "student", text: "First, we choose a topic. Then, we find information." }, { who: "teacher", text: "Why is it interesting?" }, { who: "student", text: "Because I love animals!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Mini Presentation", subheading: "Give a 30-60 second project pitch", line: "My project is about ___. First, we ___. Then, we ___. It is interesting because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "My Class Project", caption: "First, we choose a topic. Then, we find information. Finally, we present it." },
    ],
  },
  "1-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 1 · Lesson 5", title: "Unit Review", subtitle: "Talk and write briefly about school life, school days, and simple projects." },
      { type: "chips", stage: "Getting Ready", heading: "Quick School Challenge", subheading: "Name five school subjects!", items: ["Math", "English", "Science", "Art", "History", "Music", "P.E.", "Geography"] },
      { type: "log", stage: "Taking Off", heading: "Build My School Day", subheading: "Use all four sequencing words", rows: ["First, I ___", "Then, I ___", "After that, I ___", "Finally, I ___"] },
      { type: "dialogue", stage: "Flight Log", heading: "School Life Interview Show", subheading: "Answer mixed questions about school", turns: [{ who: "teacher", text: "What subject do you like? Why?" }, { who: "student", text: "I like Science because it is interesting." }, { who: "teacher", text: "Tell me about a class project." }, { who: "student", text: "First, we chose a topic. Then, we made a poster." }] },
      { type: "message", stage: "My Class Project", heading: "My Class Project", subheading: "Use First, Then, After that, Finally, and because", lines: ["What is your project about? Why did you choose it?"] },
      { type: "postcard", stage: "Postcard Message", heading: "My School Life", subheading: "Write 4-6 sentences: subjects, opinion, school-day sequence, activity", line: "I have ___ at school. I like ___ because it is ___. First, I have ___. After school, I like ___." },
      { type: "landing", stage: "Landing", heading: "Unit 1 Complete!", cardTitle: "My School Life", caption: "I have English, Math, and Science. I like Science because it is interesting." },
    ],
  },

  // ---------- Unit 2: Yesterday & Today ----------
  "2-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 1", title: "Irregular Surprises!", subtitle: "Use went, ate, and saw to talk about recent events." },
      { type: "message", stage: "Getting Ready", heading: "What Did You Do Yesterday?", subheading: "Let's find out!", lines: ["What did you do *yesterday*?"] },
      { type: "table", stage: "Taking Off", heading: "Past or Present?", subheading: "Three verbs that change completely in the past", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]] },
      { type: "message", stage: "What Happened?", heading: "What Happened?", subheading: "🏫 School · 🍕 Pizza · 🐶 Dog", lines: ["I *went* to school.", "I *ate* pizza.", "I *saw* a dog."] },
      { type: "dialogue", stage: "Flight Log", heading: "What Happened Yesterday?", subheading: "Build a funny yesterday story together", turns: [{ who: "teacher", text: "Yesterday, Tom went to the park." }, { who: "teacher", text: "What happened next?" }, { who: "student", text: "Then he saw a dog!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Recount", subheading: "What did you do yesterday? (3 sentences)", line: "Yesterday, I ___. I ___. I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Yesterday", caption: "Yesterday, I went to school. I ate pizza. I saw my friend." },
    ],
  },
  "2-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 2", title: "More Irregulars!", subtitle: "Use had, did, and made to talk about past activities." },
      { type: "table", stage: "Getting Ready", heading: "Review", subheading: "go/eat/see in the past", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"]] },
      { type: "table", stage: "Taking Off", heading: "Meet the New Irregulars", subheading: "Three more verbs that change in the past", rows: [["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "message", stage: "What Did You Do?", heading: "What Did You Do?", subheading: "📚 Homework · 🍳 Breakfast · 🎨 Picture", lines: ["I *did* my homework.", "I *had* breakfast.", "I *made* a picture."] },
      { type: "dialogue", stage: "Flight Log", heading: "Yesterday Reporter", subheading: "Report what someone did: morning, afternoon, evening", turns: [{ who: "teacher", text: "In the morning, he had breakfast." }, { who: "student", text: "In the afternoon, he made a cake." }, { who: "student", text: "In the evening, he did his homework." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Speed Round", subheading: "have → had, do → did, make → made — now reverse it!", line: "had → ___, did → ___, made → ___" },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "More Irregulars", caption: "I had breakfast. I did my homework. I made a picture." },
    ],
  },
  "2-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 3", title: "Yesterday's Story!", subtitle: "Connect irregular verbs to tell a short story about yesterday." },
      { type: "table", stage: "Getting Ready", heading: "Irregular Verb Review", subheading: "Rapid-fire recall", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "log", stage: "Taking Off", heading: "Put the Story Together", subheading: "Wake up → Eat breakfast → Go to school → See a friend", rows: ["First, I ___ breakfast.", "Then, I ___ to school.", "After that, I ___ my friend."] },
      { type: "dialogue", stage: "Flight Log", heading: "Story Telephone", subheading: "Add one event at a time, building a story together", turns: [{ who: "teacher", text: "Yesterday, Mia went to the park." }, { who: "student", text: "Yesterday, Mia went to the park. Then she saw a dog." }, { who: "teacher", text: "...and then she made a new friend!" }] },
      { type: "message", stage: "My Yesterday", heading: "My Yesterday", subheading: "Tell a short story (4-5 sentences, 3+ irregular verbs)", lines: ["What was the most interesting thing you did *yesterday*?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Question", subheading: "One last thought", line: "The most interesting thing I did yesterday was ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Yesterday's Story", caption: "First, I had breakfast. Then, I went to school. After that, I saw my friend." },
    ],
  },
  "2-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 4", title: "Let's Review!", subtitle: "Review all irregular verbs and connect events into a clear recount." },
      { type: "table", stage: "Memory Challenge", heading: "Give the Past Form", subheading: "go, eat, see, have, do, make", rows: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"], ["do", "did"], ["make", "made"]] },
      { type: "dialogue", stage: "Fix the Story", heading: "Fix the Story", subheading: "Catch the mistake and correct it", turns: [{ who: "teacher", text: "Yesterday, I go to school." }, { who: "student", text: "No! You went to school." }, { who: "teacher", text: "I eat pizza." }, { who: "student", text: "You ate pizza!" }] },
      { type: "log", stage: "Connect the Events", heading: "Connect the Events", subheading: "I went to the park. I saw my friend. I ate ice cream.", rows: ["First, I ___", "Then, I ___", "After that, ___"] },
      { type: "dialogue", stage: "Flight Log", heading: "Past Tense Detective", subheading: "Find and correct the mistakes, then retell the story", turns: [{ who: "teacher", text: "Yesterday, I go to school. I eat lunch." }, { who: "student", text: "I went to school. I ate lunch. I saw my friend." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Review", subheading: "Tell me three things you did yesterday", line: "I ___. I ___. I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "Yesterday, I went to school. I ate lunch. I saw my friend." },
    ],
  },
  "2-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Lesson 5", title: "Show What You Know!", subtitle: "Free practice — show what you can really do with the past tense." },
      { type: "message", stage: "Getting Ready", heading: "Conversation Starter", subheading: "Tell me about yesterday", lines: ["Where did you go? What did you eat? Who did you see?"] },
      { type: "dialogue", stage: "Flight Log", heading: "One-Minute Yesterday", subheading: "Talk for one minute about yesterday", turns: [{ who: "teacher", text: "Where did you go?" }, { who: "student", text: "I went to my grandma's house." }, { who: "teacher", text: "What did you eat?" }, { who: "student", text: "I ate her special soup!" }] },
      { type: "message", stage: "Real-Life Recount", heading: "Real-Life Recount", subheading: "Tell me about something fun you did recently", lines: ["What happened next?"] },
      { type: "dialogue", stage: "Teacher & Student Story", heading: "Teacher & Student Story", subheading: "Take turns adding one event", turns: [{ who: "teacher", text: "Yesterday, I went to the park." }, { who: "student", text: "Then, I saw a dog." }, { who: "teacher", text: "After that, I ate ice cream." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Mini Writing", subheading: "Write 4-6 sentences about a recent event", line: "Yesterday, I ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "Yesterday, I went to the park. I saw a dog. I ate ice cream." },
    ],
  },
  "2-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 2 · Test", title: "Unit 2 Test", subtitle: "Summative check: can you actually recount a recent event?" },
      { type: "table", stage: "Part 1: Verb Check", heading: "Complete the Past Form", subheading: "go, eat, see, have, do, make", rows: [["go", "____"], ["eat", "____"], ["see", "____"], ["have", "____"], ["do", "____"], ["make", "____"]] },
      { type: "message", stage: "Part 2: Sentences", heading: "Make Sentences", subheading: "Use went, ate, saw, had, did, made", lines: ["Make a sentence with each irregular verb."] },
      { type: "log", stage: "Part 3: Sequencing", heading: "Put It in Order", subheading: "Tell the story using all four connectors", rows: ["First, ___", "Then, ___", "After that, ___", "Finally, ___"] },
      { type: "dialogue", stage: "Part 4: Speaking ⭐", heading: "Tell Me About Yesterday", subheading: "Target: 5-6 connected sentences", turns: [{ who: "teacher", text: "Tell me about something you did yesterday." }] },
      { type: "postcard", stage: "Part 5: Writing", heading: "Short Writing", subheading: "5-6 sentences", line: "What did you do yesterday? ___" },
      { type: "landing", stage: "Landing", heading: "Unit 2 Complete!", cardTitle: "Unit 2 Test", caption: "Great work recounting the past!" },
    ],
  },

  // ---------- Unit 3: Weather & Seasons ----------
  "3-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 1", title: "What's the Weather?", subtitle: "Use weather words and \"There is...\" to describe weather scenes." },
      { type: "chips", stage: "Getting Ready", heading: "Weather Words", subheading: "What's the weather like today?", items: ["☀️ sunny", "🌧️ rainy", "☁️ cloudy", "💨 windy", "⛈️ stormy", "❄️ snowy", "🌫️ foggy", "🌈 rainbow"] },
      { type: "message", stage: "Taking Off", heading: "Weather Detective", subheading: "What can you see?", lines: ["It is *sunny*.", "There is a *rainbow*.", "There is a *cloud*."] },
      { type: "message", stage: "What's in the Picture?", heading: "What's in the Picture?", subheading: "A busy weather scene", lines: ["There is a *sun*.", "There is a big *cloud*.", "Is it sunny or rainy?"] },
      { type: "message", stage: "Flight Log", heading: "Mystery Weather Picture", subheading: "Predict before the picture is fully revealed", lines: ["There is a *cloud*. There is a *rainbow*. It is *rainy*."] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe today's weather (3-4 sentences)", line: "Today it is ___. There is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What's the Weather?", caption: "It is rainy. There is a rainbow. There are clouds." },
    ],
  },
  "3-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 2", title: "Four Seasons!", subtitle: "Name the four seasons and use \"There are...\" to describe them." },
      { type: "chips", stage: "Getting Ready", heading: "Meet the Four Seasons", subheading: "🌸 Spring · ☀️ Summer · 🍂 Autumn · ❄️ Winter", items: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"] },
      { type: "message", stage: "Taking Off", heading: "Season Detective", subheading: "Spot the clues", lines: ["There are *flowers*. → Spring", "There are *leaves*. → Autumn", "There is *snow*. → Winter"] },
      { type: "dialogue", stage: "Flight Log", heading: "Season Interview", subheading: "Ask and answer about the four seasons", turns: [{ who: "teacher", text: "What season has flowers?" }, { who: "student", text: "There are flowers in spring!" }, { who: "teacher", text: "What season has snow?" }, { who: "student", text: "There are snowflakes in winter." }] },
      { type: "message", stage: "My Favorite Season", heading: "My Favorite Season", subheading: "What's your favorite season? Why?", lines: ["My favorite season is *summer* because it is sunny."] },
      { type: "postcard", stage: "Postcard Message", heading: "My Favorite Season", subheading: "Complete the sentence", line: "My favorite season is ___ because it is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Four Seasons", caption: "My favorite season is summer because it is sunny. There are many sunny days." },
    ],
  },
  "3-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 3", title: "Weather Talk!", subtitle: "Describe today's weather using vocabulary and there is / there are." },
      { type: "message", stage: "Getting Ready", heading: "Quick Review", subheading: "Flash-round", lines: ["It's *cloudy*.", "It's *windy*.", "There is a *rainbow*.", "There are *clouds*."] },
      { type: "message", stage: "Taking Off", heading: "Weather Around the World", subheading: "What's the weather like in City A?", lines: ["It's *rainy*.", "There are *clouds* in City B."] },
      { type: "log", stage: "Build a Weather Report", heading: "Build a Weather Report", subheading: "Fill in your own report", rows: ["Today in ___:", "Weather: ___", "There is: ___", "There are: ___"] },
      { type: "message", stage: "Flight Log", heading: "Weather Forecast", subheading: "City A: sunny · City B: rainy · City C: windy", lines: ["In City A, it is *sunny*.", "There are *clouds* in City B.", "What's the weather like tomorrow?"] },
      { type: "dialogue", stage: "Postcard Message", heading: "Weather Conversation", subheading: "Do you like this weather?", turns: [{ who: "teacher", text: "What's the weather like today?" }, { who: "student", text: "It's sunny!" }, { who: "teacher", text: "Do you like this weather?" }, { who: "student", text: "Yes, I do because I like sunny days." }] },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Weather Talk!", caption: "In City A, it is sunny. There are clouds in City B." },
    ],
  },
  "3-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 4", title: "Let's Review!", subtitle: "Review weather, seasons, and there is / there are." },
      { type: "chips", stage: "Weather Speed Round", heading: "Weather Speed Round", subheading: "Say it fast!", items: ["It's sunny!", "It's windy!", "It's snowy!"] },
      { type: "message", stage: "Season Challenge", heading: "Season Challenge", subheading: "Give the season from the clue", lines: ["There are *flowers*. → Spring!", "There are colorful *leaves*. → Autumn!", "There is *snow*. → Winter!"] },
      { type: "dialogue", stage: "Fix My Weather", heading: "Fix My Weather", subheading: "Catch the mistake", turns: [{ who: "teacher", text: "There are a rainbow." }, { who: "student", text: "No! There is a rainbow." }, { who: "teacher", text: "There is clouds." }, { who: "student", text: "There are clouds!" }] },
      { type: "message", stage: "Flight Log", heading: "What's Wrong With This Weather?", subheading: "Spot the strange weather and correct it", lines: ["\"It is winter. There are flowers everywhere and no snow.\" Is this correct?", "No — there are usually *snowflakes* in winter."] },
      { type: "postcard", stage: "Postcard Message", heading: "Mini Weather Report", subheading: "Use weather, a season, there is, and there are", line: "Today it is ___. It is ___ season. There is ___. There are ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "It is winter. There is snow. There are snowflakes everywhere." },
    ],
  },
  "3-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Lesson 5", title: "Show What You Know!", subtitle: "Free practice — talk about weather and seasons on your own." },
      { type: "message", stage: "Conversation", heading: "Conversation", subheading: "What's the weather like today?", lines: ["Do you like it? What's your favorite weather? What's your favorite season?"] },
      { type: "message", stage: "Flight Log", heading: "Plan a Weather Trip", subheading: "You can travel to one place — where do you want to go?", lines: ["I want to go to the beach because it is *sunny*.", "There are clouds, but it is *warm*."] },
      { type: "message", stage: "Plan a Holiday", heading: "Plan a Holiday", subheading: "Where, what season, what's the weather, what can you see/do?", lines: ["I want to go to Japan in winter. It is cold and snowy. There are mountains and there is snow."] },
      { type: "message", stage: "Weather Reporter Challenge", heading: "Weather Reporter Challenge", subheading: "Give a 30-45 second weather report — no sentence frame!", lines: ["What's the weather like today, and what will it be like tomorrow?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Short Writing", subheading: "\"My Favorite Season\" (4-6 sentences)", line: "My favorite season is ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "My favorite season is summer. It is hot and sunny. There are many sunny days." },
    ],
  },
  "3-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 3 · Test", title: "Unit 3 Test", subtitle: "Can you describe weather and seasons without heavy support?" },
      { type: "chips", stage: "Part 1: Weather Vocabulary", heading: "Identify the Weather", subheading: "Name each picture", items: ["sunny", "rainy", "cloudy", "windy", "stormy", "snowy", "foggy"] },
      { type: "chips", stage: "Part 2: Seasons", heading: "Name the Seasons", subheading: "Give one thing associated with each", items: ["🌸 Spring", "☀️ Summer", "🍂 Autumn", "❄️ Winter"] },
      { type: "log", stage: "Part 3: There Is / Are", heading: "Complete the Sentences", subheading: "Fill in is or are", rows: ["There ___ a rainbow.", "There ___ clouds.", "There ___ snow.", "There ___ flowers."] },
      { type: "message", stage: "Part 4: Picture Description ⭐", heading: "Describe the Picture", subheading: "Weather, season, and things in the picture", lines: ["What can you see?"] },
      { type: "postcard", stage: "Part 5-6: Speaking & Writing", heading: "Your Favorite Season", subheading: "5-6 sentences with a reason", line: "My favorite season is ___. It is ___. I like it because ___." },
      { type: "landing", stage: "Landing", heading: "Unit 3 Complete!", cardTitle: "Unit 3 Test", caption: "My favorite season is summer. There are many sunny days. I like going to the beach." },
    ],
  },
};

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

  // ---------- Unit 4: Around Town ----------
  "4-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 1", title: "Places in Town! 🏙️", subtitle: "Name common places in town and say where one place is using next to." },
      { type: "chips", stage: "Getting Ready", heading: "Places in Town", subheading: "What places do you know?", items: ["store", "park", "school", "library", "hospital", "restaurant", "supermarket", "bank", "bus stop", "playground"] },
      { type: "message", stage: "Taking Off", heading: "Where Is It?", subheading: "🏫 School | 🏪 Store", lines: ["The store is *next to* the school.", "What is next to the park?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Town Tour Guide", subheading: "Be the tour guide!", turns: [{ who: "teacher", text: "Where can I go to read?" }, { who: "student", text: "There is a library. The library is next to the park." }, { who: "teacher", text: "Where can I go to buy food?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe your town (3-4 sentences)", line: "There is a ___. The ___ is next to the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Places in Town", caption: "There is a school. The park is next to the school. The store is next to the park." },
    ],
  },
  "4-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 2", title: "Where Is It? 📍", subtitle: "Describe where places are using behind and between." },
      { type: "message", stage: "Getting Ready", heading: "Warm-Up Review", subheading: "Use yesterday's town map", lines: ["Where is the school? What is next to the park?"] },
      { type: "message", stage: "Taking Off", heading: "New Prepositions", subheading: "behind · between", lines: ["The park is *behind* the school.", "The bank is *between* the store and the library."] },
      { type: "message", stage: "Map Detective", heading: "Map Detective", subheading: "Answer in complete sentences", lines: ["What is behind the school?", "What is between the bank and the park?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Hidden Place", subheading: "Ask yes/no questions to find the secret place", turns: [{ who: "student", text: "Is it next to the school?" }, { who: "teacher", text: "No." }, { who: "student", text: "Is it between the store and the library?" }, { who: "teacher", text: "Yes!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe 3 locations without being prompted", line: "The ___ is next to the ___. The ___ is behind the ___. The ___ is between the ___ and the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Where Is It?", caption: "The library is next to the school. The bank is between the store and the hospital." },
    ],
  },
  "4-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 3", title: "Giving Directions! 🗺️", subtitle: "Give and follow simple directions to a place." },
      { type: "chips", stage: "Getting Ready", heading: "Direction Words", subheading: "New words for today", items: ["go", "turn", "left", "right", "straight", "stop", "go past"] },
      { type: "message", stage: "Taking Off", heading: "Learn Directions", subheading: "⬆️ Go straight · ⬅️ Turn left · ➡️ Turn right · 🛑 Stop", lines: ["Go straight!", "Turn left!"] },
      { type: "message", stage: "Build a Route", heading: "Build a Route", subheading: "Break the direction into small steps", lines: ["Go straight. Turn right. The park is on your *left*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Lost Tourist", subheading: "Help the lost tourist find the bank!", turns: [{ who: "teacher", text: "I'm at the school. I want to go to the bank. Help me!" }, { who: "student", text: "Go straight. Turn left. Go past the park. The bank is on your right." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Give directions from one place to another (2-3 steps)", line: "Go ___. Turn ___. The ___ is on your ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Giving Directions!", caption: "Go straight. Turn left. Go past the park. The bank is on your right." },
    ],
  },
  "4-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Combine places, prepositions, and directions to communicate around a town." },
      { type: "chips", stage: "Fast Retrieval", heading: "Fast Retrieval", subheading: "Name the places, then answer: Where is the bank?", items: ["store", "park", "school", "library", "hospital", "restaurant", "bank"] },
      { type: "dialogue", stage: "Fix the Map", heading: "Fix the Map", subheading: "The picture shows the store is BEHIND the school", turns: [{ who: "teacher", text: "The store is next to the school." }, { who: "student", text: "No! The store is behind the school." }] },
      { type: "message", stage: "Direction Challenge", heading: "Direction Challenge", subheading: "Follow the route, then switch roles", lines: ["Go straight. Turn left. Stop."] },
      { type: "dialogue", stage: "Flight Log", heading: "Wrong Directions", subheading: "Catch the mistake — the map shows the library is on the LEFT", turns: [{ who: "teacher", text: "Go straight. Turn left. The library is on your right." }, { who: "student", text: "No, it's on your left! Go straight, turn left, and the library is on your left." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Tell me about your town", line: "There is a ___. The ___ is next to the ___. To get to the ___, go ___ and turn ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "There is a school. The park is next to the school. Go straight and turn right to reach the store." },
    ],
  },
  "4-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Use the unit language independently — no reveal!" },
      { type: "message", stage: "Mystery Town", heading: "Mystery Town", subheading: "A brand-new town map", lines: ["Tell me about this town."] },
      { type: "dialogue", stage: "Flight Log", heading: "My Town Tour", subheading: "Give a complete virtual tour", turns: [{ who: "teacher", text: "Where is the hospital?" }, { who: "student", text: "The hospital is next to the bank." }, { who: "teacher", text: "How do I get to the supermarket?" }, { who: "student", text: "Go straight, then turn right." }] },
      { type: "message", stage: "Change the Map", heading: "Change the Map", subheading: "Adapt to a changing situation", lines: ["Move the park. Where is it now? What is next to it?"] },
      { type: "message", stage: "My Town", heading: "My Town", subheading: "Create or imagine your own town", lines: ["What places are in your town? What is your favorite place?"] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "Can you help me find it?", line: "My favorite place is the ___. It is next to the ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "There is a park in my town. My favorite place is the library, next to the park." },
    ],
  },
  "4-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 4 · Test", title: "Unit 4 Test", subtitle: "Around Town — describe places and navigate independently." },
      { type: "chips", stage: "Part 1: Places", heading: "Name the Places", subheading: "6-8 pictures", items: ["store", "park", "school", "library", "hospital", "bank"] },
      { type: "message", stage: "Part 2: Where Is It?", heading: "Where Is It?", subheading: "Use next to, behind, between", lines: ["What is next to the school? What is behind the library?"] },
      { type: "message", stage: "Part 3-4: Directions ⭐", heading: "Give Directions", subheading: "I'm at the school. How can I get to the supermarket?", lines: ["Go straight. Turn right. Go straight again. The supermarket is on your *left*."] },
      { type: "message", stage: "Part 5: Speaking", heading: "Tell Me About Your Town", subheading: "4-6 connected sentences", lines: ["There is a school in my town. The park is next to the school."] },
      { type: "postcard", stage: "Part 6: Writing", heading: "Short Writing", subheading: "3-5 sentences about the town/map", line: "There is a ___ next to the ___. The ___ is between the ___ and the ___." },
      { type: "landing", stage: "Landing", heading: "Unit 4 Complete!", cardTitle: "Unit 4 Test", caption: "There is a park next to the school. The bank is between the store and the library." },
    ],
  },

  // ---------- Unit 5: Let's Go Shopping ----------
  "5-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 1", title: "At the Store! 🛒", subtitle: "Identify shopping items and ask \"How much is it?\" / \"How much are they?\"" },
      { type: "chips", stage: "Getting Ready", heading: "Shopping Words", subheading: "Today we're going shopping!", items: ["shirt", "shoes", "book", "pencil", "apple", "water", "toy", "bag"] },
      { type: "message", stage: "Taking Off", heading: "How Much?", subheading: "👕 $5 · 👟 $10 (pair)", lines: ["How much is it? It's *five dollars*.", "How much are they? They're *ten dollars*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Customer Interview", subheading: "Teacher: store employee. You: customer.", turns: [{ who: "teacher", text: "Can I help you? What do you want?" }, { who: "student", text: "How much is it?" }, { who: "student", text: "How much are they?" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Choose 3 things you want to buy", line: "I want a ___. It's ___ dollars." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "At the Store!", caption: "How much is it? It's five dollars. How much are they? They're ten dollars." },
    ],
  },
  "5-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 2", title: "Counting Money! 💰", subtitle: "Understand and say common prices and quantities." },
      { type: "message", stage: "Getting Ready", heading: "Warm-Up", subheading: "Quick price review", lines: ["How much is the book? How much are the shoes?"] },
      { type: "message", stage: "Taking Off", heading: "Prices & Quantities", subheading: "🍎 → one apple · 🍎🍎 → two apples", lines: ["One apple is *10 pesos*.", "Two apples are *20 pesos*."] },
      { type: "dialogue", stage: "How Many?", heading: "How Many?", subheading: "Practice with different products", turns: [{ who: "teacher", text: "How many do you want?" }, { who: "student", text: "I want two." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Budget", subheading: "You have 20 pesos! What will you buy?", turns: [{ who: "teacher", text: "You have 20 pesos." }, { who: "student", text: "I want two apples. They are five pesos. I have twenty pesos." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Buy three things — say what and how many", line: "I want ___ ___(s). They are ___ pesos." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Counting Money!", caption: "I want two apples. They are twenty pesos. I have thirty pesos." },
    ],
  },
  "5-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 3", title: "Let's Buy Something! 🛍️", subtitle: "Take part in a simple shopping conversation from beginning to end." },
      { type: "chips", stage: "Getting Ready", heading: "Customer Phrases", subheading: "What you say when shopping", items: ["Hello.", "I'd like a ___, please.", "How much is it?", "I'll take it, please.", "Thank you."] },
      { type: "dialogue", stage: "Taking Off", heading: "Build the Conversation", subheading: "Customer and Cashier", turns: [{ who: "student", text: "Hello. I'd like a book, please." }, { who: "teacher", text: "Sure. It's 50 pesos." }, { who: "student", text: "I'll take it, please." }] },
      { type: "dialogue", stage: "Flight Log", heading: "The Busy Cashier", subheading: "Complete several purchases — even when there's a problem!", turns: [{ who: "teacher", text: "Sorry, we're out of apples." }, { who: "student", text: "Okay. I'd like a banana, please." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Complete a shopping conversation on your own", line: "Hello. I'd like a ___, please. How much is it? I'll take it, please." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Buy Something!", caption: "Hello. I'd like a book, please. It's 50 pesos. I'll take it, please. Thank you!" },
    ],
  },
  "5-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Use shopping vocabulary, prices, quantities, and expressions together." },
      { type: "message", stage: "Shopping Speed Round", heading: "Shopping Speed Round", subheading: "Say the price fast!", lines: ["It's *20 pesos*.", "They're *50 pesos*."] },
      { type: "message", stage: "Quantity Challenge", heading: "Quantity Challenge", subheading: "🍎🍎🍎", lines: ["How many apples? How much are three apples?"] },
      { type: "dialogue", stage: "Fix the Shopping Mistake", heading: "Fix the Shopping Mistake", subheading: "Catch and correct the error", turns: [{ who: "teacher", text: "Two apples? They're ten dollars." }, { who: "student", text: "No, they're five dollars!" }] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Mistakes", subheading: "Find and correct more mistakes", turns: [{ who: "teacher", text: "You want three books?" }, { who: "student", text: "No, I want two books." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "What do you usually buy at a store?", line: "I usually buy ___ because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "I usually buy books because I like reading. They're around 50 pesos." },
    ],
  },
  "5-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Use shopping language independently — no reveal!" },
      { type: "message", stage: "Mystery Store", heading: "Mystery Store", subheading: "New products, new prices", lines: ["You are shopping. What do you want?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Shopping Trip", subheading: "You need food for a picnic. You have 30 pesos.", turns: [{ who: "teacher", text: "Welcome! What can I get you?" }, { who: "student", text: "I'd like two apples and a water, please." }] },
      { type: "dialogue", stage: "The Price Changed!", heading: "The Price Changed!", subheading: "Respond spontaneously", turns: [{ who: "teacher", text: "Oh! The apples are now 80 pesos." }, { who: "student", text: "Hmm, do you have anything cheaper?" }] },
      { type: "message", stage: "Switch Roles", heading: "Switch Roles", subheading: "Now you're the cashier!", lines: ["Check the picture and respond appropriately when the teacher shops."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "What did you buy? How much did you spend?", line: "I bought ___ and ___. I spent ___ pesos." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I bought two apples and a water. I spent thirty pesos. My favorite thing was the apples!" },
    ],
  },
  "5-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 5 · Test", title: "Unit 5 Test", subtitle: "Let's Go Shopping — handle a shopping situation independently." },
      { type: "chips", stage: "Part 1: Vocabulary", heading: "Name the Products", subheading: "8-10 products", items: ["shirt", "shoes", "book", "apple", "water", "toy"] },
      { type: "message", stage: "Part 2-3: Prices & Quantities", heading: "Prices & Quantities", subheading: "How much is/are it/they? How many?", lines: ["How much is the shirt? How many apples are there?"] },
      { type: "message", stage: "Part 4: Questions", heading: "Ask the Questions", subheading: "You ask this time!", lines: ["How much is the book? How much are the pencils?"] },
      { type: "dialogue", stage: "Part 5: Roleplay ⭐", heading: "Shopping Roleplay", subheading: "Choose, ask, decide, and buy politely", turns: [{ who: "student", text: "Hello. I'd like two apples, please. How much are they?" }, { who: "teacher", text: "They're 40 pesos." }, { who: "student", text: "Okay. I'll take them, please." }] },
      { type: "postcard", stage: "Part 6: Writing", heading: "Short Writing", subheading: "3-5 sentences", line: "I want to buy ___. They are ___ pesos. I like shopping for ___." },
      { type: "landing", stage: "Landing", heading: "Unit 5 Complete!", cardTitle: "Unit 5 Test", caption: "I want to buy two apples. They are 40 pesos. I also want a book for 50 pesos." },
    ],
  },

  // ---------- Unit 6: Jobs People Do ----------
  "6-1": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 1", title: "What's Your Job? 👨‍💼", subtitle: "Identify jobs and describe people with He is a... / She is a..." },
      { type: "chips", stage: "Getting Ready", heading: "Jobs", subheading: "Today, let's talk about people and their jobs!", items: ["teacher", "doctor", "nurse", "police officer", "firefighter", "chef", "farmer", "driver", "dentist"] },
      { type: "message", stage: "Taking Off", heading: "He or She?", subheading: "👨‍🍳 → chef · 👩‍⚕️ → doctor", lines: ["He is a *chef*.", "She is a *doctor*."] },
      { type: "dialogue", stage: "Flight Log", heading: "Job Interview", subheading: "Guess the mystery worker!", turns: [{ who: "student", text: "What is your job?" }, { who: "teacher", text: "I help sick people." }, { who: "student", text: "Are you a doctor?" }, { who: "teacher", text: "Yes!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Describe 4 people's jobs", line: "He is a ___. She is a ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "What's Your Job?", caption: "He is a firefighter. She is a nurse." },
    ],
  },
  "6-2": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 2", title: "More Jobs! 👩‍🔧", subtitle: "Talk about more jobs and describe simple job duties." },
      { type: "chips", stage: "Getting Ready", heading: "More Jobs", subheading: "New workers to meet", items: ["engineer", "pilot", "mechanic", "artist", "baker", "veterinarian", "photographer", "scientist"] },
      { type: "message", stage: "Taking Off", heading: "Jobs + Duties", subheading: "👨‍🔧 Mechanic → fixes cars · 👩‍🍳 Baker → makes bread", lines: ["She is a *baker*. She *makes bread*.", "He is a *mechanic*. He *fixes cars*."] },
      { type: "dialogue", stage: "Who Does What?", heading: "Who Does What?", subheading: "Connect the job to the action", turns: [{ who: "teacher", text: "She makes bread." }, { who: "student", text: "She is a baker!" }] },
      { type: "dialogue", stage: "Flight Log", heading: "Who Am I?", subheading: "Guess the job from the clues", turns: [{ who: "teacher", text: "I work with animals. I help sick animals." }, { who: "student", text: "You are a veterinarian!" }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Challenge", subheading: "Choose 3 jobs and describe what each person does", line: "She is a ___. She ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "More Jobs!", caption: "He is a pilot. He flies a plane. She is a veterinarian. She cares for animals." },
    ],
  },
  "6-3": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 3", title: "Community Helpers! 🚒", subtitle: "Talk about how different workers help people in the community." },
      { type: "message", stage: "Getting Ready", heading: "How Do They Help?", subheading: "Who helps sick people? Who keeps people safe?", lines: ["A firefighter *helps people*.", "A doctor *treats sick people*."] },
      { type: "message", stage: "Taking Off", heading: "Community Problems", subheading: "Who can help?", lines: ["I am sick. Who can help me?", "There is a fire. Who can help?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Emergency Call", subheading: "Identify the right helper and explain why", turns: [{ who: "teacher", text: "Someone is sick!" }, { who: "student", text: "A doctor can help because she treats sick people." }] },
      { type: "message", stage: "Postcard Message", heading: "Exit Talk", subheading: "Which community helper is important to you? Why?", lines: ["I think firefighters are important because *they help people*."] },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Community Helpers!", caption: "A doctor treats sick people. A police officer keeps people safe." },
    ],
  },
  "6-4": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 4", title: "Let's Review! 🔄", subtitle: "Combine jobs, job duties, and community-helper language." },
      { type: "chips", stage: "Job Speed Round", heading: "Job Speed Round", subheading: "Say it fast!", items: ["driver", "nurse", "farmer", "chef", "pilot", "baker"] },
      { type: "dialogue", stage: "What Do They Do?", heading: "What Do They Do?", subheading: "Job → duty", turns: [{ who: "teacher", text: "She is a chef." }, { who: "student", text: "She cooks food." }] },
      { type: "dialogue", stage: "Fix the Mistake", heading: "Fix the Mistake", subheading: "Catch the error", turns: [{ who: "teacher", text: "A doctor fixes cars." }, { who: "student", text: "No! A mechanic fixes cars." }] },
      { type: "dialogue", stage: "Flight Log", heading: "Job Mistake Challenge", subheading: "Correct the mistake, then say who CAN help", turns: [{ who: "teacher", text: "A firefighter delivers letters." }, { who: "student", text: "No. A mail carrier delivers letters." }] },
      { type: "postcard", stage: "Postcard Message", heading: "Exit Talk", subheading: "Talk about three community helpers", line: "A ___ helps people by ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Let's Review!", caption: "A firefighter helps people. A teacher helps students learn." },
    ],
  },
  "6-5": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Lesson 5", title: "Show What You Know! ⭐", subtitle: "Communicate about jobs and community helpers independently." },
      { type: "message", stage: "Mystery Workers", heading: "Mystery Workers", subheading: "Describe them yourself", lines: ["Who is this? What does this person do?"] },
      { type: "dialogue", stage: "Flight Log", heading: "Community Help Desk", subheading: "You work at the help desk — who can solve each problem?", turns: [{ who: "teacher", text: "My dog is sick." }, { who: "student", text: "A veterinarian can help. They care for animals." }, { who: "teacher", text: "There's a fire!" }] },
      { type: "dialogue", stage: "Guess My Job", heading: "Guess My Job", subheading: "Give clues without saying the job", turns: [{ who: "teacher", text: "I work in a hospital. I help sick people." }, { who: "student", text: "You're a doctor!" }] },
      { type: "message", stage: "My Dream Job", heading: "My Dream Job", subheading: "What job would you like to have? Why?", lines: ["I want to be a *veterinarian* because I like animals."] },
      { type: "postcard", stage: "Postcard Message", heading: "Quick Reflection", subheading: "Which job helps people the most?", line: "I think a ___ helps people the most because ___." },
      { type: "landing", stage: "Landing", heading: "You've Landed!", cardTitle: "Show What You Know!", caption: "I want to be a veterinarian because I like animals and want to help them." },
    ],
  },
  "6-6": {
    slides: [
      { type: "title", stage: "A2 · Soar", eyebrow: "Unit 6 · Test", title: "Unit 6 Test", subtitle: "Jobs People Do — identify, describe, and explain independently." },
      { type: "chips", stage: "Part 1: Jobs", heading: "Name the Jobs", subheading: "8-10 pictures", items: ["teacher", "doctor", "firefighter", "chef", "mechanic", "pilot"] },
      { type: "message", stage: "Part 2: He or She?", heading: "He or She?", subheading: "Complete sentences", lines: ["He is a *firefighter*.", "She is a *doctor*."] },
      { type: "message", stage: "Part 3: Duties", heading: "What Does a Mechanic Do?", subheading: "Job → duty", lines: ["A mechanic *fixes cars*."] },
      { type: "dialogue", stage: "Part 4: Who Can Help? ⭐", heading: "Who Can Help?", subheading: "Identify the helper and explain why", turns: [{ who: "teacher", text: "My dog is sick. Who can help?" }, { who: "student", text: "A veterinarian can help. She cares for sick animals." }] },
      { type: "postcard", stage: "Part 5-6: Speaking & Writing", heading: "Community Helpers", subheading: "3-4 helpers, with a reason", line: "She is a ___. She ___. I think ___s are important because ___." },
      { type: "landing", stage: "Landing", heading: "Unit 6 Complete!", cardTitle: "Unit 6 Test", caption: "She is a veterinarian. She takes care of animals. I think veterinarians are important." },
    ],
  },
};

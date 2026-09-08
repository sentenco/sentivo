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
};

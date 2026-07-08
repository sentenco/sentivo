-- A2 Adults Unit 12: Goals, Progress, and Final Communication (5 lessons)
-- Generated from project_a2_adults_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What I Can Do Now
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  'What I Can Do Now',
  'A2',
  'adults',
  12,
  1,
  'Describe simple progress in English and daily life communication.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📈",
  "questions": [
    "What can you do better now than before?",
    "Do you feel more confident in English?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Progress",
      "bg": "#FAECE7"
    },
    {
      "word": "Improved",
      "bg": "#E1F5EE"
    },
    {
      "word": "Confident",
      "bg": "#EEEDFE"
    },
    {
      "word": "Can now",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can you do better now?",
    "Do you feel more confident?"
  ],
  "student": [
    "I can now write short emails.",
    "Yes, I feel much more confident."
  ],
  "note": "Think about your real progress!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have made great [progress]."
    },
    {
      "speaker": "B",
      "text": "My speaking has [improved] a lot."
    },
    {
      "speaker": "A",
      "text": "I feel [confident] now."
    }
  ],
  "blanks": [
    "progress",
    "improved",
    "confident"
  ]
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What can you do better now than before?"
    },
    {
      "speaker": "B",
      "text": "I can now write short emails and messages confidently. My progress has been great."
    },
    {
      "speaker": "A",
      "text": "My speaking has improved a lot too. I feel much more confident."
    },
    {
      "speaker": "B",
      "text": "That's a real achievement!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have made great progress in English. I can now write short emails and messages confidently. My speaking has improved too, especially with everyday conversations. I feel much more confident than when I started.",
  "questions": [
    "What can the writer do now?",
    "What has improved?",
    "How does the writer feel now?"
  ]
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I can now ___.",
    "My ___ has improved.",
    "I feel ___ now."
  ]
}$json$::jsonb,
  true
),
(
  'c1bacde5-72a3-4d41-affd-2a0401116b8a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my English progress",
    "Use 'improved' and 'confident'",
    "Talk about what I can do now"
  ],
  "challenge": "Tell me what you can do better now than before!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Next Goals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  'My Next Goals',
  'A2',
  'adults',
  12,
  2,
  'Talk about short future goals and reasons.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎯",
  "questions": [
    "What is your next goal for English?",
    "Why is that goal important?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Goal",
      "bg": "#FAECE7"
    },
    {
      "word": "Want to",
      "bg": "#E1F5EE"
    },
    {
      "word": "Improve further",
      "bg": "#EEEDFE"
    },
    {
      "word": "Reason",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your next goal?",
    "Why is it important?"
  ],
  "student": [
    "My next goal is to write longer emails.",
    "It's important because I use English at work."
  ],
  "note": "Think about your next real goal!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My next [goal] is to speak more fluently."
    },
    {
      "speaker": "B",
      "text": "I [want to] travel and use English."
    },
    {
      "speaker": "A",
      "text": "I want to [improve further] this year."
    }
  ],
  "blanks": [
    "goal",
    "want to",
    "improve further"
  ]
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your next goal for English?"
    },
    {
      "speaker": "B",
      "text": "My next goal is to speak more fluently because I want to travel."
    },
    {
      "speaker": "A",
      "text": "I want to improve further so I can use English confidently at work."
    },
    {
      "speaker": "B",
      "text": "Those are great goals!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My next goal is to speak English more fluently because I want to travel next year. I also want to improve my writing so I can use English confidently at work. These goals matter to me because English opens new opportunities.",
  "questions": [
    "What is the writer's next goal?",
    "Why does the writer want to travel?",
    "Why do these goals matter?"
  ]
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My next goal is ___.",
    "I want to ___ because ___.",
    "This goal matters to me because ___."
  ]
}$json$::jsonb,
  true
),
(
  '7375abf9-d02b-40f7-a360-c81824c0b4f2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about a future goal",
    "Use 'going to' and 'want to'",
    "Give a reason for a goal"
  ],
  "challenge": "Tell me your next goal for English and why it matters!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Success Story
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  'A Success Story',
  'A2',
  'adults',
  12,
  3,
  'Describe a simple past success or useful experience.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏆",
  "questions": [
    "Have you used English successfully recently?",
    "What did you learn?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Learned",
      "bg": "#FAECE7"
    },
    {
      "word": "Understood",
      "bg": "#E1F5EE"
    },
    {
      "word": "Used",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finished",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "When did you use English successfully?",
    "What did you learn from it?"
  ],
  "student": [
    "I used English at a job interview.",
    "I learned that I can communicate well."
  ],
  "note": "Think of a moment you used English successfully!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [learned] a lot from that experience."
    },
    {
      "speaker": "B",
      "text": "I [understood] everything they said."
    },
    {
      "speaker": "A",
      "text": "I [used] English at work successfully."
    }
  ],
  "blanks": [
    "learned",
    "understood",
    "used"
  ]
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about a time you used English successfully."
    },
    {
      "speaker": "B",
      "text": "First, I used English at a job interview. Then, I understood every question clearly."
    },
    {
      "speaker": "A",
      "text": "After that, I answered confidently. Finally, I got the job!"
    },
    {
      "speaker": "B",
      "text": "What a wonderful success story!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Last month, I used English at a job interview for the first time. First, I understood every question clearly. Then, I answered confidently in English. After that, the interviewer smiled. Finally, I got the job! I learned that I really can communicate well.",
  "questions": [
    "Where did the writer use English?",
    "How did the interview go?",
    "What did the writer learn?"
  ]
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I used English successfully when ___.",
    "I understood ___.",
    "I learned that ___."
  ]
}$json$::jsonb,
  true
),
(
  'c4245b92-ac7e-4813-8695-5fb9cf2c407f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: learned, understood, used, finished",
    "Tell a success story",
    "Reflect on using English well"
  ],
  "challenge": "Tell me about a time you used English successfully!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Final Communication Portfolio
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  'My Final Communication Portfolio',
  'A2',
  'adults',
  12,
  4,
  'Write a short final note about progress, goals, and useful English.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📁",
  "questions": [
    "What are you most proud of in your English learning?",
    "What is your next step?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Portfolio",
      "bg": "#FAECE7"
    },
    {
      "word": "Achievement",
      "bg": "#E1F5EE"
    },
    {
      "word": "Next step",
      "bg": "#EEEDFE"
    },
    {
      "word": "Grateful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you most proud of?",
    "What is your next step?"
  ],
  "student": [
    "I'm proud of my speaking progress.",
    "My next step is to keep practicing."
  ],
  "note": "Think about your English learning journey!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my final [portfolio] note."
    },
    {
      "speaker": "B",
      "text": "My biggest [achievement] is speaking confidently."
    },
    {
      "speaker": "A",
      "text": "My [next step] is to keep learning."
    }
  ],
  "blanks": [
    "portfolio",
    "achievement",
    "next step"
  ]
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you write in your final portfolio note?"
    },
    {
      "speaker": "B",
      "text": "My biggest achievement is writing emails and messages confidently."
    },
    {
      "speaker": "A",
      "text": "My next step is to keep practicing speaking. I'm grateful for this journey."
    },
    {
      "speaker": "B",
      "text": "That's a wonderful reflection."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My final note: I can now write emails, have simple conversations, and understand everyday English. My biggest achievement is feeling confident when I speak. My next step is to keep practicing and maybe take a higher-level course. I am grateful for everything I've learned.",
  "questions": [
    "What can the writer do now?",
    "What is the writer's biggest achievement?",
    "What is the next step?"
  ]
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I can now ___.",
    "My biggest achievement is ___.",
    "My next step is ___."
  ]
}$json$::jsonb,
  true
),
(
  '20f408bd-e87e-41d0-a52a-e3e98cae9977',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short final portfolio note",
    "Reflect on achievements",
    "State a next step"
  ],
  "challenge": "Write and read me your final communication portfolio note!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  'Unit Review',
  'A2',
  'adults',
  12,
  5,
  'Review progress, goals, a success story, and a final portfolio note.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Adults"
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "What progress have you made?",
    "What is your next goal?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Progress",
      "bg": "#FAECE7"
    },
    {
      "word": "Goal",
      "bg": "#E1F5EE"
    },
    {
      "word": "Success",
      "bg": "#EEEDFE"
    },
    {
      "word": "Grateful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What progress have you made?",
    "What is your next goal?"
  ],
  "student": [
    "I can write emails confidently now.",
    "My next goal is to speak more fluently."
  ],
  "note": "Use everything you learned this unit and this whole level!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have made great [progress] in English."
    },
    {
      "speaker": "B",
      "text": "My next [goal] is to keep improving."
    },
    {
      "speaker": "A",
      "text": "That job interview was a real [success]."
    }
  ],
  "blanks": [
    "progress",
    "goal",
    "success"
  ]
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your English progress and your next goal."
    },
    {
      "speaker": "B",
      "text": "I've made great progress, I can write emails and speak more confidently now."
    },
    {
      "speaker": "A",
      "text": "My next goal is to keep improving and maybe move to a higher level."
    },
    {
      "speaker": "B",
      "text": "I'm really grateful for this whole journey."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have made great progress in English this year. I can now write emails, have conversations, and understand everyday situations confidently. Last month, I used English successfully at a job interview and got the job! My next goal is to keep improving and speak even more fluently. I am grateful for everything I've learned.",
  "questions": [
    "What progress has the writer made?",
    "What success did the writer have?",
    "What is the writer's next goal?"
  ]
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have made progress in ___.",
    "My biggest success was ___.",
    "My next goal is ___."
  ]
}$json$::jsonb,
  true
),
(
  '4b337b77-c1a1-4793-a475-a342b7c87e0a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Reflect on my English progress",
    "Talk about future goals",
    "Tell a success story",
    "Write a final portfolio note"
  ],
  "challenge": "Tell me all about your English journey, from start to now!"
}$json$::jsonb,
  true
);

-- A1 Teens Unit 6: My Daily Routine (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Daily Routine
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  'My Daily Routine',
  'A1',
  'teens',
  6,
  1,
  'Name common daily routine verbs.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What do you do every day?",
    "Do you study every day?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Get Up",
      "bg": "#FAECE7"
    },
    {
      "word": "Wash",
      "bg": "#E1F5EE"
    },
    {
      "word": "Eat",
      "bg": "#EEEDFE"
    },
    {
      "word": "Study",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do every day?",
    "Do you study every day?"
  ],
  "student": [
    "I get up and eat.",
    "Yes, I study every day."
  ],
  "note": "Think about your real daily actions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [get up] at 7."
    },
    {
      "speaker": "B",
      "text": "I [eat] breakfast."
    },
    {
      "speaker": "A",
      "text": "I [study] every day."
    }
  ],
  "blanks": [
    "get up",
    "eat",
    "study"
  ]
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do every day?"
    },
    {
      "speaker": "B",
      "text": "I get up, wash, and eat breakfast."
    },
    {
      "speaker": "A",
      "text": "I study every day too!"
    },
    {
      "speaker": "B",
      "text": "Same here!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every day, I get up. I wash my face. I eat breakfast. I go to school. I study. At night, I sleep. This is my daily routine!",
  "questions": [
    "What does the writer do first?",
    "Does the writer go to school?",
    "What happens at night?"
  ]
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get up at ___.",
    "I eat ___.",
    "I study ___."
  ]
}$json$::jsonb,
  true
),
(
  'c9903aba-9873-46ca-a6df-3ab704e9afb9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four routine verbs",
    "Say 'I ___ every day'",
    "Talk about my daily routine"
  ],
  "challenge": "Tell me three things you do every day!"
}$json$::jsonb,
  true
);

-- Lesson 2: Time in My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  'Time in My Day',
  'A1',
  'teens',
  6,
  2,
  'Say simple routine times.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🕖",
  "questions": [
    "What time do you wake up?",
    "What time do you go to bed?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "In the Morning",
      "bg": "#FAECE7"
    },
    {
      "word": "At 7 O'clock",
      "bg": "#E1F5EE"
    },
    {
      "word": "At Night",
      "bg": "#EEEDFE"
    },
    {
      "word": "Time",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you get up?",
    "What time do you sleep?"
  ],
  "student": [
    "I get up at 7.",
    "I sleep at 10."
  ],
  "note": "Say your real times!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I get up [in the morning]."
    },
    {
      "speaker": "B",
      "text": "I eat [at 7 o'clock]."
    },
    {
      "speaker": "A",
      "text": "I sleep [at night]."
    }
  ],
  "blanks": [
    "in the morning",
    "at 7 o'clock",
    "at night"
  ]
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What time do you get up?"
    },
    {
      "speaker": "B",
      "text": "I get up at 6:30 in the morning."
    },
    {
      "speaker": "A",
      "text": "What time do you sleep?"
    },
    {
      "speaker": "B",
      "text": "I sleep at 10 at night!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In the morning, I get up at 7 o'clock. I eat breakfast at 7:30. At night, I sleep at 10 o'clock. I have a regular schedule!",
  "questions": [
    "What time does the writer get up?",
    "What time does the writer eat breakfast?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get up at ___.",
    "I eat breakfast at ___.",
    "I sleep at ___."
  ]
}$json$::jsonb,
  true
),
(
  'f6b7aa33-abd1-496e-96e8-e56f80a730ee',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say time phrases",
    "Say 'at ___ o'clock'",
    "Talk about my daily schedule"
  ],
  "challenge": "Tell me three times from your day!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '35b01559-36a8-487c-b21e-f82425e1602c',
  'My Morning',
  'A1',
  'teens',
  6,
  3,
  'Describe a simple morning routine.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌅",
  "questions": [
    "What is the first thing you do in the morning?",
    "Do you eat breakfast?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "First",
      "bg": "#FAECE7"
    },
    {
      "word": "Then",
      "bg": "#E1F5EE"
    },
    {
      "word": "After That",
      "bg": "#EEEDFE"
    },
    {
      "word": "Breakfast",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first?",
    "What do you do then?"
  ],
  "student": [
    "First, I get up.",
    "Then, I eat breakfast."
  ],
  "note": "Describe your real morning in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], I get up."
    },
    {
      "speaker": "B",
      "text": "[Then], I wash my face."
    },
    {
      "speaker": "A",
      "text": "[After that], I eat breakfast."
    }
  ],
  "blanks": [
    "First",
    "Then",
    "After that"
  ]
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do first in the morning?"
    },
    {
      "speaker": "B",
      "text": "First, I get up and wash my face."
    },
    {
      "speaker": "A",
      "text": "Then what?"
    },
    {
      "speaker": "B",
      "text": "Then I eat breakfast and go to school!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I get up at 7. Then, I wash my face. After that, I eat breakfast. Finally, I go to school. This is my morning routine!",
  "questions": [
    "What does the writer do first?",
    "What happens after washing?",
    "Where does the writer go finally?"
  ]
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "Then, I ___.",
    "After that, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '35b01559-36a8-487c-b21e-f82425e1602c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'first', 'then', 'after that'",
    "Describe my morning in order",
    "Talk about breakfast"
  ],
  "challenge": "Describe your morning routine in order!"
}$json$::jsonb,
  true
);

-- Lesson 4: Daily Routine Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  'Daily Routine Questions',
  'A1',
  'teens',
  6,
  4,
  'Ask and answer basic routine questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "What time do you get up?",
    "What do you do in the morning?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What Time",
      "bg": "#FAECE7"
    },
    {
      "word": "In the Morning",
      "bg": "#E1F5EE"
    },
    {
      "word": "Routine",
      "bg": "#EEEDFE"
    },
    {
      "word": "Schedule",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you get up?",
    "What do you do in the morning?"
  ],
  "student": [
    "I get up at 7.",
    "I eat and go to school."
  ],
  "note": "Answer about your real routine!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What time] do you get up?"
    },
    {
      "speaker": "B",
      "text": "What do you do [in the morning]?"
    },
    {
      "speaker": "A",
      "text": "That's my [routine]."
    }
  ],
  "blanks": [
    "What time",
    "in the morning",
    "routine"
  ]
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What time do you get up?"
    },
    {
      "speaker": "B",
      "text": "I get up at 6:45."
    },
    {
      "speaker": "A",
      "text": "What do you do in the morning?"
    },
    {
      "speaker": "B",
      "text": "I wash, eat, and go to school!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What time do you get up? I get up at 7. What do you do in the morning? I wash, eat breakfast, and go to school. That's my daily routine!",
  "questions": [
    "What time does the writer get up?",
    "What does the writer do in the morning?",
    "Is this a daily routine?"
  ]
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "What time do you get up? ___.",
    "In the morning, I ___.",
    "My routine is ___."
  ]
}$json$::jsonb,
  true
),
(
  '13d57b3b-9f13-42d6-9c74-f8d93cbbd637',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What time do you ___?'",
    "Ask about morning routines",
    "Answer routine questions"
  ],
  "challenge": "Ask me what time I get up and what I do in the morning!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c193991c-9824-4f62-b619-dde875cbf741',
  'Unit Review',
  'A1',
  'teens',
  6,
  5,
  'Describe a simple daily routine.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens"
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What routine words do you remember?",
    "Can you describe your day?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Get Up",
      "bg": "#FAECE7"
    },
    {
      "word": "Eat",
      "bg": "#E1F5EE"
    },
    {
      "word": "Study",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sleep",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you get up?",
    "What do you do every day?"
  ],
  "student": [
    "I get up at 7.",
    "I study every day."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [get up] at 7."
    },
    {
      "speaker": "B",
      "text": "[Then], I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "I [study] every day."
    }
  ],
  "blanks": [
    "get up",
    "Then",
    "study"
  ]
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What time do you get up?"
    },
    {
      "speaker": "B",
      "text": "I get up at 7. Then I eat and go to school."
    },
    {
      "speaker": "A",
      "text": "What do you do at night?"
    },
    {
      "speaker": "B",
      "text": "I study, then I sleep at 10!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every day, I get up at 7. Then I eat breakfast. After that, I go to school and study. At night, I sleep at 10 o'clock. This is my daily routine!",
  "questions": [
    "What time does the writer get up?",
    "What does the writer do after breakfast?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get up at ___.",
    "Then, I ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'c193991c-9824-4f62-b619-dde875cbf741',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name routine verbs",
    "Say times in my day",
    "Describe my routine in order",
    "Ask routine questions"
  ],
  "challenge": "Describe your whole daily routine to me!"
}$json$::jsonb,
  true
);

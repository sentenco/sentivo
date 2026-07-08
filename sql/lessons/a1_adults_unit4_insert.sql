-- A1 Adults Unit 4: Daily Routine and Time (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  'My Day',
  'A1',
  'adults',
  4,
  1,
  'Name common daily routine verbs.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you do every day?",
    "Do you go to work every day?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
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
      "word": "Go To Work",
      "bg": "#E1F5EE"
    },
    {
      "word": "Come Home",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sleep",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do every day?",
    "Do you go to work?"
  ],
  "student": [
    "I get up and go to work.",
    "Yes, every day."
  ],
  "note": "Think about your real daily actions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [get up] at 6."
    },
    {
      "speaker": "B",
      "text": "I [go to work] at 8."
    },
    {
      "speaker": "A",
      "text": "I [come home] at 6pm."
    }
  ],
  "blanks": [
    "get up",
    "go to work",
    "come home"
  ]
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
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
      "text": "I get up, eat, and go to work."
    },
    {
      "speaker": "A",
      "text": "I come home at 6pm every day!"
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
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every day, I get up. I wash and eat breakfast. I go to work. I come home at 6pm. At night, I sleep. This is my daily routine!",
  "questions": [
    "What does the writer do first?",
    "What time does the writer come home?",
    "What happens at night?"
  ]
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get up at ___.",
    "I go to work at ___.",
    "I come home at ___."
  ]
}$json$::jsonb,
  true
),
(
  '92fa8f41-e2aa-47d8-be11-a68bc9bce3f7',
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
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
  'Time in My Day',
  'A1',
  'adults',
  4,
  2,
  'Say simple routine times.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What time do you wake up?",
    "What time do you go to bed?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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
      "word": "In the Evening",
      "bg": "#EEEDFE"
    },
    {
      "word": "At Night",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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
    "I get up at 6.",
    "I sleep at 11."
  ],
  "note": "Say your real times!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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
      "text": "I relax [in the evening]."
    }
  ],
  "blanks": [
    "in the morning",
    "at 7 o'clock",
    "in the evening"
  ]
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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
      "text": "I sleep at 11 at night!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "In the morning, I get up at 6 o'clock. I eat breakfast at 7. In the evening, I relax. At night, I sleep at 11 o'clock.",
  "questions": [
    "What time does the writer get up?",
    "What time does the writer eat breakfast?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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
  '73ff6083-c37b-4fc2-ab77-572b0879c3ef',
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

-- Lesson 3: A Typical Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
  'A Typical Morning',
  'A1',
  'adults',
  4,
  3,
  'Describe a simple morning routine.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What is the first thing you do in the morning?",
    "Do you eat breakfast at home?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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
      "text": "[Then], I wash and dress."
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
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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
      "text": "First, I get up and wash."
    },
    {
      "speaker": "A",
      "text": "Then what?"
    },
    {
      "speaker": "B",
      "text": "Then I eat breakfast and go to work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I get up at 6. Then, I wash and dress. After that, I eat breakfast. Finally, I go to work. This is my morning routine!",
  "questions": [
    "What does the writer do first?",
    "What happens after washing?",
    "Where does the writer go finally?"
  ]
}$json$::jsonb,
  true
),
(
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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
  'fd35e416-6310-4a6d-b073-0f46cf3e178a',
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

-- Lesson 4: Routine Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
  'Routine Questions',
  'A1',
  'adults',
  4,
  4,
  'Ask and answer basic routine questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What time do you get up?",
    "What do you do in the morning?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
    "I get up at 6.",
    "I eat and go to work."
  ],
  "note": "Answer about your real routine!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
      "text": "I get up at 6:15."
    },
    {
      "speaker": "A",
      "text": "What do you do in the morning?"
    },
    {
      "speaker": "B",
      "text": "I wash, eat, and go to work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "What time do you get up? I get up at 6. What do you do in the morning? I wash, eat breakfast, and go to work. That's my daily routine!",
  "questions": [
    "What time does the writer get up?",
    "What does the writer do in the morning?",
    "Is this a daily routine?"
  ]
}$json$::jsonb,
  true
),
(
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
  '9fa869f3-a4ed-43fb-9890-a6eefcf80a1f',
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
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
  'Unit Review',
  'A1',
  'adults',
  4,
  5,
  'Describe a simple daily routine.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Adults"
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What routine words do you remember?",
    "Can you describe your day?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
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
      "word": "Go To Work",
      "bg": "#E1F5EE"
    },
    {
      "word": "Eat",
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
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
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
    "I get up at 6.",
    "I go to work every day."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [get up] at 6."
    },
    {
      "speaker": "B",
      "text": "[Then], I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "I [go to work] every day."
    }
  ],
  "blanks": [
    "get up",
    "Then",
    "go to work"
  ]
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
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
      "text": "I get up at 6. Then I eat and go to work."
    },
    {
      "speaker": "A",
      "text": "What do you do at night?"
    },
    {
      "speaker": "B",
      "text": "I relax, then I sleep at 11!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Every day, I get up at 6. Then I eat breakfast. After that, I go to work. At night, I relax and sleep at 11 o'clock. This is my daily routine!",
  "questions": [
    "What time does the writer get up?",
    "What does the writer do after breakfast?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
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
  '71eac771-2e71-408d-a006-9b2b1c4be64a',
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

-- A1 Adults Unit 4: Daily Routine (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  'My Day',
  'A1',
  'adults',
  4,
  1,
  'Name daily routine actions. [Foundation, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
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
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What time do you wake up?",
    "What time do you sleep?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wake up",
      "bg": "#FAECE7"
    },
    {
      "word": "Get dressed",
      "bg": "#E1F5EE"
    },
    {
      "word": "Go to work",
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
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What time do you wake up?",
    "What do you do next?"
  ],
  "student": [
    "I wake up at 7am.",
    "I get dressed."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [wake up] at 7am."
    },
    {
      "speaker": "B",
      "text": "I [get dressed]."
    },
    {
      "speaker": "A",
      "text": "I [go to work]."
    }
  ],
  "blanks": [
    "wake up",
    "get dressed",
    "go to work"
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wake up at 7am."
    },
    {
      "speaker": "B",
      "text": "I get dressed."
    },
    {
      "speaker": "A",
      "text": "I go to work at 8am."
    },
    {
      "speaker": "B",
      "text": "Now describe your own morning using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to describe a morning, then describe your own."
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I wake up at 7am. I get dressed. I go to work at 8am. I sleep at 10pm.",
  "questions": [
    "What time does the writer wake up?",
    "What time does work start?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wake up at ___.",
    "I get dressed and ___.",
    "I sleep at ___."
  ]
}$json$::jsonb,
  true
),
(
  '27cde442-7147-420f-be94-1fb02e8fba9b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 daily actions",
    "Say wake up and sleep times",
    "Talk about my morning"
  ],
  "challenge": "Tell me your daily routine!"
}$json$::jsonb,
  true
);

-- Lesson 2: Time in My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  'Time in My Day',
  'A1',
  'adults',
  4,
  2,
  'Use frequency words with routine actions. [Foundation, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
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
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍳",
  "questions": [
    "Do you always eat breakfast?",
    "Do you sometimes work late?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Usually",
      "bg": "#FAECE7"
    },
    {
      "word": "Always",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sometimes",
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
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you always eat breakfast?",
    "Do you sometimes work late?"
  ],
  "student": [
    "Yes, I always eat breakfast.",
    "I sometimes work late."
  ],
  "note": "Use the word bank: usually, always, sometimes, breakfast.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [usually] eat [breakfast] at 7am."
    },
    {
      "speaker": "B",
      "text": "I [always] wake up early."
    },
    {
      "speaker": "A",
      "text": "I [sometimes] work late."
    }
  ],
  "blanks": [
    "usually",
    "always",
    "sometimes"
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I always wake up early' or 'I wake always up early'?"
    },
    {
      "speaker": "B",
      "text": "'I always wake up early' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Do you usually eat breakfast?"
    },
    {
      "speaker": "B",
      "text": "Yes, I usually eat breakfast at 7am."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own routine."
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually eat breakfast at 7am. I always wake up early. Sometimes I work late.",
  "questions": [
    "When does the writer usually eat breakfast?",
    "Does the writer always wake up early?",
    "When does the writer sometimes work late?"
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually ___.",
    "I always ___.",
    "Sometimes I ___."
  ]
}$json$::jsonb,
  true
),
(
  '1eed99e0-7cd5-40cb-98d4-3aa9f7d46159',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'usually', 'always', 'sometimes'",
    "Talk about breakfast time",
    "Talk about my work schedule"
  ],
  "challenge": "Tell me your usual routine, and something you sometimes do differently!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Typical Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  'A Typical Morning',
  'A1',
  'adults',
  4,
  3,
  'Sequence a morning routine. [Foundation, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
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
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌅",
  "questions": [
    "What do you do first in the morning?",
    "What do you do last?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
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
      "word": "After that",
      "bg": "#EEEDFE"
    },
    {
      "word": "Finally",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first?",
    "What do you do after that?"
  ],
  "student": [
    "First, I wake up.",
    "Then, I get dressed."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], I wake up."
    },
    {
      "speaker": "B",
      "text": "[Then], I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "[Finally], I go to work."
    }
  ],
  "blanks": [
    "first",
    "then",
    "finally"
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
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
      "text": "First, I wake up. Then, I eat breakfast."
    },
    {
      "speaker": "A",
      "text": "After that, I get dressed. Finally, I go to work."
    },
    {
      "speaker": "B",
      "text": "Your turn to describe your own morning in order!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. Then, I eat breakfast. After that, I get dressed. Finally, I go to work.",
  "questions": [
    "What does the writer do first?",
    "What does the writer do after breakfast?",
    "What is the last step?"
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "Then, I ___.",
    "Finally, I ___."
  ]
}$json$::jsonb,
  true
),
(
  'ae6ca1af-87a4-4937-9969-14bb441b7423',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'first, then, after that, finally'",
    "Sequence my morning",
    "Ask about someone's morning"
  ],
  "challenge": "Tell me your morning routine in order!"
}$json$::jsonb,
  true
);

-- Lesson 4: Routine Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  'Routine Questions',
  'A1',
  'adults',
  4,
  4,
  'Combine routine and frequency into a full-day description. [Foundation, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
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
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😴",
  "questions": [
    "Is your day busy or relaxed?",
    "Do you have free time?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Busy",
      "bg": "#FAECE7"
    },
    {
      "word": "Free time",
      "bg": "#E1F5EE"
    },
    {
      "word": "Relax",
      "bg": "#EEEDFE"
    },
    {
      "word": "Every day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your day busy?",
    "Do you have free time?"
  ],
  "student": [
    "Yes, my day is busy.",
    "I have free time at night."
  ],
  "note": "Put it all together: routine + sequence + frequency.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [busy] every day."
    },
    {
      "speaker": "B",
      "text": "I have [free time] at night."
    },
    {
      "speaker": "A",
      "text": "I [relax] before I sleep."
    }
  ],
  "blanks": [
    "busy",
    "free time",
    "relax"
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Describe your day, in your own words -- busy or with free time?"
    },
    {
      "speaker": "B",
      "text": "I am busy every day. I have free time at night, so I relax before I sleep."
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you're busy every day, and you relax at night."
    },
    {
      "speaker": "B",
      "text": "Yes, exactly!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your sentence back to check it."
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up at 7am. I usually eat breakfast. Then, I go to work. I am busy every day. I have free time at night, so I relax before I sleep.",
  "questions": [
    "What time does the writer wake up?",
    "Is the day busy or relaxed?",
    "What does the writer do at night?"
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "I am busy/free ___.",
    "I relax by ___."
  ]
}$json$::jsonb,
  true
),
(
  '08cdd8ad-872d-4b1c-8f4d-ab0404a90670',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Say if I'm busy or have free time",
    "Say how I relax"
  ],
  "challenge": "Tell me all about your daily routine, from morning to night!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  'Unit Review',
  'A1',
  'adults',
  4,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
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
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What is your morning routine?",
    "Is your day busy?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Routine",
      "bg": "#FAECE7"
    },
    {
      "word": "First",
      "bg": "#E1F5EE"
    },
    {
      "word": "Usually",
      "bg": "#EEEDFE"
    },
    {
      "word": "Busy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your routine?",
    "Is your day busy?"
  ],
  "student": [
    "First, I wake up, then I eat breakfast.",
    "Yes, my day is busy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [routine] starts at 7am."
    },
    {
      "speaker": "B",
      "text": "[First], I wake up."
    },
    {
      "speaker": "A",
      "text": "I [usually] eat breakfast."
    }
  ],
  "blanks": [
    "routine",
    "first",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your daily routine."
    },
    {
      "speaker": "B",
      "text": "First, I wake up. I usually eat breakfast, then go to work."
    },
    {
      "speaker": "A",
      "text": "I am busy every day, so I relax at night."
    },
    {
      "speaker": "B",
      "text": "Sounds like a good routine!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. I usually eat breakfast. Then, I go to work. I am busy every day, so I relax at night.",
  "questions": [
    "What is the first step?",
    "What does the writer usually do?",
    "Why does the writer relax at night?"
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "I usually ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '2ec7b3a0-6dc8-40c4-a78e-72ff2f6f3573',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my routine",
    "Use frequency words",
    "Talk about my whole day"
  ],
  "challenge": "Tell me all about your daily routine!"
}$json$::jsonb,
  true
);

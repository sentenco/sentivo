-- A1 Teens Unit 6: Daily Routine (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Daily Routine
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
  'My Daily Routine',
  'A1',
  'teens',
  6,
  1,
  'Describe a typical work or study day. [Combination, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
      "word": "Go to school",
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
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
  "note": "Point to a clock picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
      "text": "I [go to school]."
    }
  ],
  "blanks": [
    "wake up",
    "get dressed",
    "go to school"
  ]
}$json$::jsonb,
  true
),
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
      "text": "I go to school at 8am."
    },
    {
      "speaker": "B",
      "text": "I sleep at 10pm!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole routine out loud together."
}$json$::jsonb,
  true
),
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I wake up at 7am. I get dressed. I go to school at 8am. I sleep at 10pm.",
  "questions": [
    "What time does the writer wake up?",
    "What time does school start?",
    "What time does the writer sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
  '1f0095cb-85e7-425e-9871-3ebb19d3caf2',
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
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  'Time in My Day',
  'A1',
  'teens',
  6,
  2,
  'Use frequency words with routine actions. [Combination, L2, format E: choose-the-better-answer]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
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
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍳",
  "questions": [
    "Do you always eat breakfast?",
    "Do you sometimes wake up late?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
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
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you always eat breakfast?",
    "Do you sometimes wake up late?"
  ],
  "student": [
    "Yes, I always eat breakfast.",
    "I sometimes wake up late."
  ],
  "note": "Use the word bank: usually, always, sometimes, breakfast.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
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
      "text": "I [sometimes] wake up late."
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
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I usually eat breakfast' or 'I usually eats breakfast'?"
    },
    {
      "speaker": "B",
      "text": "'I usually eat breakfast' is correct. No 's' with I."
    },
    {
      "speaker": "A",
      "text": "Good! Do you always wake up early?"
    },
    {
      "speaker": "B",
      "text": "I sometimes wake up late on weekends."
    }
  ],
  "note": "Choose the correct sentence first, then answer honestly about your own routine."
}$json$::jsonb,
  true
),
(
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I usually eat breakfast at 7am. I always wake up early. Sometimes I wake up late on weekends.",
  "questions": [
    "When does the writer usually eat breakfast?",
    "Does the writer always wake up early?",
    "When does the writer sometimes wake up late?"
  ]
}$json$::jsonb,
  true
),
(
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
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
  'bc3f48d1-38a8-46a2-99f8-9032192a2e15',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'usually', 'always', 'sometimes'",
    "Talk about breakfast time",
    "Talk about weekend routine"
  ],
  "challenge": "Tell me your usual routine, and something you sometimes do differently!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Morning
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
  'My Morning',
  'A1',
  'teens',
  6,
  3,
  'Unchanged by the rotation rework -- L3 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
      "text": "[Finally], I go to school."
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
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
      "text": "First, I wake up. Then, I eat breakfast. What do you do?"
    },
    {
      "speaker": "A",
      "text": "After that, I get dressed. Finally, I go to school."
    },
    {
      "speaker": "B",
      "text": "Your turn to ask me something!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. Then, I eat breakfast. After that, I get dressed. Finally, I go to school.",
  "questions": [
    "What does the writer do first?",
    "What does the writer do after breakfast?",
    "What is the last step?"
  ]
}$json$::jsonb,
  true
),
(
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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
  'dd5139e2-25d1-443c-bdbc-cc576035bb83',
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

-- Lesson 4: Daily Routine Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4afc8019-7f09-4620-8f93-648876be60ed',
  'Daily Routine Questions',
  'A1',
  'teens',
  6,
  4,
  'Combine routine and frequency into a full-day talk. [Combination, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
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
  '4afc8019-7f09-4620-8f93-648876be60ed',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😴",
  "questions": [
    "Is your day busy or relaxed?",
    "Are you tired at night?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Every day",
      "bg": "#FAECE7"
    },
    {
      "word": "Busy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tired",
      "bg": "#EEEDFE"
    },
    {
      "word": "Relax",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your day busy?",
    "Are you tired at night?"
  ],
  "student": [
    "Yes, my day is busy.",
    "I am tired at night."
  ],
  "note": "Put it all together: routine + sequence + frequency + feeling.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [busy] [every day]."
    },
    {
      "speaker": "B",
      "text": "I am [tired] at night."
    },
    {
      "speaker": "A",
      "text": "I [relax] before I sleep."
    }
  ],
  "blanks": [
    "busy",
    "every day",
    "tired"
  ]
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Describe your day, in your own words -- busy or relaxed?"
    },
    {
      "speaker": "B",
      "text": "I am busy every day. I am tired at night, so I relax before I sleep."
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
  '4afc8019-7f09-4620-8f93-648876be60ed',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up at 7am. I usually eat breakfast. Then, I go to school. I am busy every day. I am tired at night, so I relax before I sleep.",
  "questions": [
    "What time does the writer wake up?",
    "Is the day busy or relaxed?",
    "What does the writer do before sleep?"
  ]
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, I ___.",
    "I am busy/tired ___.",
    "I relax by ___."
  ]
}$json$::jsonb,
  true
),
(
  '4afc8019-7f09-4620-8f93-648876be60ed',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Say if I'm busy or tired",
    "Say how I relax"
  ],
  "challenge": "Tell me all about your daily routine, from morning to night!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2b086c82-dc24-434c-a366-9dd593093cc7',
  'Unit Review',
  'A1',
  'teens',
  6,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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
  '2b086c82-dc24-434c-a366-9dd593093cc7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What is your morning routine?",
    "Are you tired at night?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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
      "word": "Tired",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2b086c82-dc24-434c-a366-9dd593093cc7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your routine?",
    "Are you tired at night?"
  ],
  "student": [
    "First, I wake up, then I eat breakfast.",
    "Yes, I am tired at night."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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
      "text": "First, I wake up. I usually eat breakfast, then go to school."
    },
    {
      "speaker": "A",
      "text": "I am tired at night, so I relax before I sleep."
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
  '2b086c82-dc24-434c-a366-9dd593093cc7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "First, I wake up. I usually eat breakfast. Then, I go to school. I am tired at night, so I relax.",
  "questions": [
    "What is the first step?",
    "What does the writer usually do?",
    "Why does the writer relax at night?"
  ]
}$json$::jsonb,
  true
),
(
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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
  '2b086c82-dc24-434c-a366-9dd593093cc7',
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

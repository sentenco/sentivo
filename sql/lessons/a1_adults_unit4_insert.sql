-- A1 Adults Unit 4: Daily Routine (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
  'My Day',
  'A1',
  'adults',
  4,
  1,
  'Name daily routine actions. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
      "text": "I sleep at 10pm!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'e4bf3d1f-25ed-47de-b2db-df8e3da1ec28',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
  'Time in My Day',
  'A1',
  'adults',
  4,
  2,
  'Use frequency words with routine actions. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you always eat breakfast?"
    },
    {
      "speaker": "B",
      "text": "Yes, I usually eat breakfast at 7am. Do you always wake up early?"
    },
    {
      "speaker": "A",
      "text": "I sometimes work late."
    },
    {
      "speaker": "B",
      "text": "Me too, sometimes!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  'f04e3cce-518d-4b37-818a-f8506e1167d7',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
  'A Typical Morning',
  'A1',
  'adults',
  4,
  3,
  'Sequence a morning routine. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
      "text": "After that, I get dressed. Finally, I go to work."
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  '82630601-fa9f-4ae8-aa88-9adb67714e2f',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
  'Routine Questions',
  'A1',
  'adults',
  4,
  4,
  'Combine routine and frequency into a full-day description. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your day."
    },
    {
      "speaker": "B",
      "text": "First, I wake up at 7am. I usually eat breakfast, then go to work."
    },
    {
      "speaker": "A",
      "text": "I am busy every day, but I have free time at night. I relax before I sleep."
    },
    {
      "speaker": "B",
      "text": "That's a full day!"
    }
  ],
  "note": "Mini talk: tell me all about your daily routine in a few sentences."
}$json$::jsonb,
  true
),
(
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'fc050935-7ccb-4b4a-86a6-fa44c3e8b67a',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
  'Unit Review',
  'A1',
  'adults',
  4,
  5,
  'Review daily routine and frequency words. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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
  'ee0a34ff-3514-4100-90a6-b584d5a1509e',
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

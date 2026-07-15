-- A1 Teens Unit 6: Daily Routine (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Daily Routine
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '33bc5534-6ef6-460d-b328-426c62ce4985',
  'My Daily Routine',
  'A1',
  'teens',
  6,
  1,
  'Name daily routine actions. [Combination, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '33bc5534-6ef6-460d-b328-426c62ce4985',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
  'Time in My Day',
  'A1',
  'teens',
  6,
  2,
  'Use frequency words with routine actions. [Combination, Lesson 2: controlled practice, 2 combined targets]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
      "text": "I sometimes wake up late."
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  '1cfadb89-d972-4893-bbe9-50c2e955b0a6',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
  'My Morning',
  'A1',
  'teens',
  6,
  3,
  'Sequence a morning routine. [Combination, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'a76e6948-61dc-44b8-b85d-3703dab1c484',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
  'Daily Routine Questions',
  'A1',
  'teens',
  6,
  4,
  'Combine routine and frequency into a full-day talk. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
      "text": "First, I wake up at 7am. I usually eat breakfast, then go to school."
    },
    {
      "speaker": "A",
      "text": "I am busy every day, and tired at night. I relax before I sleep."
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'b2747654-3f24-4b8a-a43b-46913d43ebc5',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
  'Unit Review',
  'A1',
  'teens',
  6,
  5,
  'Review daily routine and frequency words. [Combination, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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
  'de7f4438-667b-4750-a0da-fe33f1b8e78d',
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

-- A1 Teens Unit 1: Hello and Me (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hello and Me
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  'Hello and Me',
  'A1',
  'teens',
  1,
  1,
  'Say name and basic greetings. [Foundation, Lesson 1: notice/receptive, matching-style activity]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
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
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What is your name?",
    "Can you say hello in English?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "Name",
      "bg": "#E1F5EE"
    },
    {
      "word": "I am",
      "bg": "#EEEDFE"
    },
    {
      "word": "Nice to meet you",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hello! What is your name?",
    "Nice to meet you!"
  ],
  "student": [
    "Hello! My name is ___.",
    "Nice to meet you too!"
  ],
  "note": "Point to yourself and say your name!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hello]! I am Leo."
    },
    {
      "speaker": "B",
      "text": "My [name] is Ana."
    },
    {
      "speaker": "A",
      "text": "[Nice to meet you]!"
    }
  ],
  "blanks": [
    "hello",
    "name",
    "nice to meet you"
  ]
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Leo."
    },
    {
      "speaker": "B",
      "text": "Hello! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you, Ana!"
    },
    {
      "speaker": "B",
      "text": "Nice to meet you too!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Leo. Nice to meet you!",
  "questions": [
    "What is the boy's name?",
    "What does he say first?",
    "What does 'nice to meet you' mean?"
  ]
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "Nice to meet you!"
  ]
}$json$::jsonb,
  true
),
(
  'd1ce9dbf-8643-4a0b-ae1f-d0c8249bb79b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hello'",
    "Say 'My name is ___'",
    "Say 'Nice to meet you'"
  ],
  "challenge": "Say hello and tell me your name!"
}$json$::jsonb,
  true
);

-- Lesson 2: Questions and Answers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  'Questions and Answers',
  'A1',
  'teens',
  1,
  2,
  'Ask and answer ''What is your name?'' and ''How old are you?''. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
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
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❓",
  "questions": [
    "How old are you?",
    "What is your name?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What",
      "bg": "#FAECE7"
    },
    {
      "word": "How old",
      "bg": "#E1F5EE"
    },
    {
      "word": "Years old",
      "bg": "#EEEDFE"
    },
    {
      "word": "I am",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your name?",
    "How old are you?"
  ],
  "student": [
    "My name is ___.",
    "I am ___ years old."
  ],
  "note": "Use the word bank: What, How old, years old, I am.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What] is your name?"
    },
    {
      "speaker": "B",
      "text": "[How old] are you?"
    },
    {
      "speaker": "A",
      "text": "I am 14 [years old]."
    }
  ],
  "blanks": [
    "what",
    "how old",
    "years old"
  ]
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Ana. How old are you?"
    },
    {
      "speaker": "A",
      "text": "I am 14 years old."
    },
    {
      "speaker": "B",
      "text": "I am 14 years old too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Ana. I am 14 years old. What is your name? How old are you?",
  "questions": [
    "What is Ana's name?",
    "How old is Ana?",
    "What two questions does Ana ask?"
  ]
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am ___ years old.",
    "What is your name?"
  ]
}$json$::jsonb,
  true
),
(
  '9b916ff8-a4b2-4cd3-86c7-9c903c699ff1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What is your name?'",
    "Ask 'How old are you?'",
    "Answer both questions"
  ],
  "challenge": "Ask me your name and age, then answer mine!"
}$json$::jsonb,
  true
);

-- Lesson 3: Spelling and Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  'Spelling and Numbers',
  'A1',
  'teens',
  1,
  3,
  'Spell your name and say numbers 1-20. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
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
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔤",
  "questions": [
    "Can you spell your name?",
    "What number is your age?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Spell",
      "bg": "#FAECE7"
    },
    {
      "word": "Letter",
      "bg": "#E1F5EE"
    },
    {
      "word": "Number",
      "bg": "#EEEDFE"
    },
    {
      "word": "How do you spell",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do you spell your name?",
    "Can you say a number?"
  ],
  "student": [
    "L-E-O. Leo.",
    "The number is 14."
  ],
  "note": "Two ways to say it: which sounds better, 'spell it' or 'say the letters'? Both are fine!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How do you spell] your name?"
    },
    {
      "speaker": "B",
      "text": "L-E-O. That's my [letter]s."
    },
    {
      "speaker": "A",
      "text": "What [number] is your age?"
    }
  ],
  "blanks": [
    "how do you spell",
    "letter",
    "number"
  ]
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you spell your name?"
    },
    {
      "speaker": "B",
      "text": "L-E-O. And you?"
    },
    {
      "speaker": "A",
      "text": "A-N-A. What number is your age?"
    },
    {
      "speaker": "B",
      "text": "Fourteen. Your turn to ask me!"
    }
  ],
  "note": "Student asks first this time. Teacher answers, then asks back."
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How do you spell your name? L-E-O. My age is a number: 14. Fourteen years old.",
  "questions": [
    "How do you spell Leo's name?",
    "What is Leo's age as a number?",
    "What is 14 in words?"
  ]
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is spelled: ___.",
    "My age is the number ___.",
    "In words, my age is ___."
  ]
}$json$::jsonb,
  true
),
(
  '7b30cbd8-2777-4873-9c16-d98bc59b702a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Spell my name out loud",
    "Say a number 1-20",
    "Ask someone to spell their name"
  ],
  "challenge": "Spell your name for me, then tell me your age as a number!"
}$json$::jsonb,
  true
);

-- Lesson 4: Meeting Someone New
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  'Meeting Someone New',
  'A1',
  'teens',
  1,
  4,
  'Combine greetings, name, age, and spelling in one short talk. [Foundation, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
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
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🤝",
  "questions": [
    "Have you met someone new this week?",
    "What do you say first when you meet someone?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Meet",
      "bg": "#FAECE7"
    },
    {
      "word": "New",
      "bg": "#E1F5EE"
    },
    {
      "word": "Friend",
      "bg": "#EEEDFE"
    },
    {
      "word": "Talk",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Let's meet! What is your name?",
    "Nice to meet a new friend!"
  ],
  "student": [
    "Hello! My name is ___, I am ___ years old.",
    "Nice to meet you too!"
  ],
  "note": "Put it all together: hello, name, age, spelling.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Let's [meet]! Hello, I'm Leo."
    },
    {
      "speaker": "B",
      "text": "Hi, [new] friend! I'm Ana."
    },
    {
      "speaker": "A",
      "text": "Let's [talk] more!"
    }
  ],
  "blanks": [
    "meet",
    "new",
    "talk"
  ]
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Leo. L-E-O. I am 14 years old."
    },
    {
      "speaker": "B",
      "text": "Nice to meet you, Leo! My name is Ana. A-N-A. I am 14 too."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you, Ana!"
    },
    {
      "speaker": "B",
      "text": "Let's be friends!"
    }
  ],
  "note": "Mini role-play: pretend you're meeting for the first time. Use everything from this unit."
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Leo, L-E-O. I am 14 years old. Nice to meet you!",
  "questions": [
    "What is the boy's name, spelled out?",
    "How old is he?",
    "What does he say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___, ___.",
    "I am ___ years old.",
    "Nice to meet you!"
  ]
}$json$::jsonb,
  true
),
(
  'be02f2eb-16dd-45b5-984d-2d85b853d6de',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Introduce myself with name, spelling, and age",
    "Greet someone new",
    "Use everything from this unit together"
  ],
  "challenge": "Meet me for the first time! Tell me your name, spell it, and say your age."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '044b0572-32c3-4eca-9544-c15361f7d295',
  'Unit Review',
  'A1',
  'teens',
  1,
  5,
  'Review greetings, questions, spelling, and numbers. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
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
  '044b0572-32c3-4eca-9544-c15361f7d295',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What is your name?",
    "How old are you?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7"
    },
    {
      "word": "Name",
      "bg": "#E1F5EE"
    },
    {
      "word": "How old",
      "bg": "#EEEDFE"
    },
    {
      "word": "Spell",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your name?",
    "How old are you?"
  ],
  "student": [
    "My name is ___.",
    "I am ___ years old."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Hello]! What is your [name]?"
    },
    {
      "speaker": "B",
      "text": "My name is Ana. [How old] are you?"
    },
    {
      "speaker": "A",
      "text": "I can [spell] my name: L-E-O."
    }
  ],
  "blanks": [
    "hello",
    "name",
    "spell"
  ]
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! What is your name?"
    },
    {
      "speaker": "B",
      "text": "My name is Ana, A-N-A. How old are you?"
    },
    {
      "speaker": "A",
      "text": "I am 14 years old. Nice to meet you!"
    },
    {
      "speaker": "B",
      "text": "Nice to meet you too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Ana, A-N-A. I am 14 years old. Nice to meet you!",
  "questions": [
    "What is the girl's name?",
    "How is her name spelled?",
    "How old is she?"
  ]
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "I am ___ years old.",
    "Nice to meet you!"
  ]
}$json$::jsonb,
  true
),
(
  '044b0572-32c3-4eca-9544-c15361f7d295',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Greet someone",
    "Say and spell my name",
    "Say my age"
  ],
  "challenge": "Introduce yourself to me: hello, name, spelling, and age!"
}$json$::jsonb,
  true
);

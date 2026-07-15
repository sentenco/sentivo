-- SUPERSEDED: do not run this file. delete_all_a1.sql now wipes all of A1
-- (including Units 1-2) before a fresh full re-insert, so there are no
-- rows left for this UPDATE-based script to target. Kept for reference
-- only -- its lesson content (5-lesson structure, merged reviews) will be
-- reused in the fresh insert version instead.
--
-- Fix A1 Kids Unit 1 & Unit 2: normalize from 6/7 lessons to the standard 5-lesson-per-unit shape.
-- Unit 1: merges 'All About Me' + 'What Can You Say?' into one Unit Review (L5). Drops the old L6.
-- Unit 2: merges 'Breakfast Time' into 'My Morning' (L1). Renumbers School/Afternoon/Evening to L2/L3/L4.
--         Merges 'All About My Day' + 'My Day Check' into one Unit Review (L5). Drops the old L7.
-- All kept lessons reuse their existing row IDs -- titles preserved, content fully replaced.
-- Run this whole script in the Supabase SQL editor.

begin;

-- Remove the lessons being merged away (their content is folded into the lessons kept above).
delete from lesson_slides where lesson_id = '43ece396-6750-4f38-9a74-e46cd80553f1';
delete from lessons where id = '43ece396-6750-4f38-9a74-e46cd80553f1';
delete from lesson_slides where lesson_id = 'd0da7f91-4718-4603-a746-74fd94579e99';
delete from lessons where id = 'd0da7f91-4718-4603-a746-74fd94579e99';
delete from lesson_slides where lesson_id = '5926d50a-2aa7-4c83-995d-c367068deade';
delete from lessons where id = '5926d50a-2aa7-4c83-995d-c367068deade';

-- ===== Unit 1 =====
-- Lesson 1: Hello & My Name
update lessons set lesson_number = 1, topic = 'Say hello, introduce yourself, and ask "What''s your name?" [Foundation, L1: notice/receptive]', slide_count = 9 where id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8';
delete from lesson_slides where lesson_id = '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👋",
  "questions": [
    "What do you say when you meet someone?",
    "What do you say when you leave?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
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
      "word": "Hi",
      "bg": "#E1F5EE"
    },
    {
      "word": "Goodbye",
      "bg": "#EEEDFE"
    },
    {
      "word": "My name is",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Hello! What is your name?",
    "Goodbye!"
  ],
  "student": [
    "Hi! My name is ___.",
    "Goodbye!"
  ],
  "note": "Point to yourself and say your name!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
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
      "text": "[Hi]! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "[Goodbye]!"
    }
  ],
  "blanks": [
    "hello",
    "hi",
    "goodbye"
  ]
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
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
      "text": "Hi! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "Nice to meet you!"
    },
    {
      "speaker": "B",
      "text": "Goodbye!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hello! My name is Leo. Hi! My name is Ana. Goodbye!",
  "questions": [
    "What is the boy's name?",
    "What is the girl's name?",
    "What do they say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Hello! My name is ___.",
    "Hi!",
    "Goodbye!"
  ]
}$json$::jsonb,
  true
),
(
  '7acde7dd-dd5f-4f70-9286-b3a75d1fe3f8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Hello' and 'Goodbye'",
    "Say 'My name is ___'",
    "Greet a friend"
  ],
  "challenge": "Say hello and tell me your name!"
}$json$::jsonb,
  true
);

-- Lesson 2: My Age
update lessons set lesson_number = 2, topic = 'Count numbers and share your age. [Foundation, L2: controlled practice]', slide_count = 9 where id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b';
delete from lesson_slides where lesson_id = '72ccde1c-4da0-4aaf-95d6-2aec97565c8b';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎂",
  "questions": [
    "How old are you?",
    "Can you count to five?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "One",
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
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How old are you?",
    "Can you count?"
  ],
  "student": [
    "I am seven years old.",
    "One, two, three!"
  ],
  "note": "Use the word bank: one, how old, years old, I am.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How old] are you?"
    },
    {
      "speaker": "B",
      "text": "I am seven [years old]."
    },
    {
      "speaker": "A",
      "text": "[I am] eight!"
    }
  ],
  "blanks": [
    "how old",
    "years old",
    "i am"
  ]
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How old are you?"
    },
    {
      "speaker": "B",
      "text": "I am seven years old. How old are you?"
    },
    {
      "speaker": "A",
      "text": "I am eight years old."
    },
    {
      "speaker": "B",
      "text": "Let's count together!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How old are you? I am seven years old. I can count: one, two, three, four, five!",
  "questions": [
    "How old is the child?",
    "What can the child count?",
    "What is the highest number said?"
  ]
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am ___ years old.",
    "I can count to ___.",
    "How old are you?"
  ]
}$json$::jsonb,
  true
),
(
  '72ccde1c-4da0-4aaf-95d6-2aec97565c8b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my age",
    "Ask 'How old are you?'",
    "Count to five"
  ],
  "challenge": "Tell me your age and count to five!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Family
update lessons set lesson_number = 3, topic = 'Learn family words and talk about who is in your family. [Foundation, L3: freer practice, TPR game]', slide_count = 9 where id = 'ec23fc1b-0186-45b3-810d-f671b8da12f4';
delete from lesson_slides where lesson_id = 'ec23fc1b-0186-45b3-810d-f671b8da12f4';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Do you have a sister or brother?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7"
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE"
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mom?"
  ],
  "student": [
    "This is my mom.",
    "Yes, this is my dad!"
  ],
  "note": "Point to a family photo and name each person!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mom]."
    },
    {
      "speaker": "B",
      "text": "This is my [dad]."
    },
    {
      "speaker": "A",
      "text": "I have one [sister]."
    }
  ],
  "blanks": [
    "mom",
    "dad",
    "sister"
  ]
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mom."
    },
    {
      "speaker": "B",
      "text": "This is my dad."
    },
    {
      "speaker": "A",
      "text": "I have one sister."
    },
    {
      "speaker": "B",
      "text": "I have one brother! Point to your family!"
    }
  ],
  "note": "Point-and-name game: point to each family member and say who they are!"
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my mom. This is my dad. I have one sister and one brother.",
  "questions": [
    "Who is in the family?",
    "How many sisters?",
    "How many brothers?"
  ]
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ sister(s).",
    "I have ___ brother(s)."
  ]
}$json$::jsonb,
  true
),
(
  'ec23fc1b-0186-45b3-810d-f671b8da12f4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Point to my family"
  ],
  "challenge": "Point to your family and name everyone!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Likes
update lessons set lesson_number = 4, topic = 'Say what you like and don''t like, and answer "Do you like...?" [Foundation, L4: production, show-and-tell]', slide_count = 9 where id = 'c3883858-6afe-4438-a052-240cd3e95bc4';
delete from lesson_slides where lesson_id = 'c3883858-6afe-4438-a052-240cd3e95bc4';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What do you like?",
    "What don't you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Like",
      "bg": "#FAECE7"
    },
    {
      "word": "Don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Love",
      "bg": "#EEEDFE"
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like pizza?",
    "What is your favorite thing?"
  ],
  "student": [
    "Yes, I like pizza!",
    "My favorite is cats."
  ],
  "note": "Show-and-tell: tell me your favorites!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] pizza."
    },
    {
      "speaker": "B",
      "text": "I [don't like] spiders."
    },
    {
      "speaker": "A",
      "text": "I [love] cats!"
    }
  ],
  "blanks": [
    "like",
    "don't like",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like pizza. I love cats."
    },
    {
      "speaker": "B",
      "text": "I don't like spiders. I like dogs."
    },
    {
      "speaker": "A",
      "text": "My favorite food is pizza!"
    },
    {
      "speaker": "B",
      "text": "Show me your favorite thing!"
    }
  ],
  "note": "Show-and-tell: show me a favorite toy or picture and tell me why you like it!"
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. I like cats. I don't like spiders. My favorite is cats!",
  "questions": [
    "What does the writer like?",
    "What doesn't the writer like?",
    "What is the favorite?"
  ]
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I don't like ___.",
    "My favorite is ___."
  ]
}$json$::jsonb,
  true
),
(
  'c3883858-6afe-4438-a052-240cd3e95bc4',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___'",
    "Say 'I don't like ___'",
    "Show-and-tell my favorite thing"
  ],
  "challenge": "Tell me three things you like and one thing you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 5: All About Me
update lessons set lesson_number = 5, topic = 'Unit Review — show what you can say about hello, your name, age, family, and likes. [Foundation, L5: tier-matched mixed review]', slide_count = 9 where id = '8b43e886-94e1-426d-93f3-abab9d758544';
delete from lesson_slides where lesson_id = '8b43e886-94e1-426d-93f3-abab9d758544';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌟",
  "questions": [
    "What is your name?",
    "How old are you?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Name",
      "bg": "#FAECE7"
    },
    {
      "word": "Age",
      "bg": "#E1F5EE"
    },
    {
      "word": "Family",
      "bg": "#EEEDFE"
    },
    {
      "word": "Like",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your name?",
    "Tell me about your family."
  ],
  "student": [
    "My name is ___.",
    "This is my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [name] is Mia."
    },
    {
      "speaker": "B",
      "text": "I am seven years old. This is my [family]."
    },
    {
      "speaker": "A",
      "text": "I [like] cats!"
    }
  ],
  "blanks": [
    "name",
    "family",
    "like"
  ]
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Hello! My name is Mia. I am seven years old."
    },
    {
      "speaker": "B",
      "text": "This is my family: mom, dad, and one sister."
    },
    {
      "speaker": "A",
      "text": "I like cats. Goodbye!"
    },
    {
      "speaker": "B",
      "text": "Goodbye! Nice to meet you!"
    }
  ],
  "note": "Mini show-and-tell: introduce yourself with everything from this unit!"
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Hi! My name is Mia. I am seven years old. I have a mom, a dad, and a sister. I like cats.",
  "questions": [
    "What is the girl's name?",
    "How old is she?",
    "What does she like?"
  ]
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My name is ___.",
    "I am ___ years old.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  '8b43e886-94e1-426d-93f3-abab9d758544',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say hello and my name",
    "Say my age",
    "Talk about my family and likes"
  ],
  "challenge": "Tell me all about you: name, age, family, and something you like!"
}$json$::jsonb,
  true
);

-- ===== Unit 2 =====
-- Lesson 1: My Morning
update lessons set lesson_number = 1, topic = 'Talk about your morning routine: wake up, brush your teeth, get dressed, and eat breakfast. [Foundation, L1: notice/receptive]', slide_count = 9 where id = '8f1e3614-3189-40bf-b009-da064d03b833';
delete from lesson_slides where lesson_id = '8f1e3614-3189-40bf-b009-da064d03b833';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⏰",
  "questions": [
    "What time do you wake up?",
    "What do you eat for breakfast?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
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
      "word": "Brush my teeth",
      "bg": "#E1F5EE"
    },
    {
      "word": "Get dressed",
      "bg": "#EEEDFE"
    },
    {
      "word": "Eat breakfast",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in the morning?",
    "What do you eat for breakfast?"
  ],
  "student": [
    "First, I wake up.",
    "I eat bread and milk."
  ],
  "note": "Act out each morning action, then say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [wake up]."
    },
    {
      "speaker": "B",
      "text": "I [brush my teeth]."
    },
    {
      "speaker": "A",
      "text": "I [get dressed]."
    }
  ],
  "blanks": [
    "wake up",
    "brush my teeth",
    "get dressed"
  ]
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wake up."
    },
    {
      "speaker": "B",
      "text": "I brush my teeth."
    },
    {
      "speaker": "A",
      "text": "I get dressed."
    },
    {
      "speaker": "B",
      "text": "I eat breakfast!"
    }
  ],
  "note": "Teacher says the action first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My morning. I wake up. I brush my teeth. I get dressed. I eat breakfast.",
  "questions": [
    "What does the child do first?",
    "What does the child do after brushing teeth?",
    "What is the last thing?"
  ]
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wake up.",
    "I brush my teeth and ___.",
    "I eat ___ for breakfast."
  ]
}$json$::jsonb,
  true
),
(
  '8f1e3614-3189-40bf-b009-da064d03b833',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 morning actions",
    "Sequence my morning",
    "Say what I eat for breakfast"
  ],
  "challenge": "Tell me your whole morning in order!"
}$json$::jsonb,
  true
);

-- Lesson 2: Go to School
update lessons set lesson_number = 2, topic = 'Talk about your school morning: get your bag, put on your shoes, take the bus, go to school. [Foundation, L2: controlled practice]', slide_count = 9 where id = 'be2d5796-765a-452e-8d55-b37a39a6fcd0';
delete from lesson_slides where lesson_id = 'be2d5796-765a-452e-8d55-b37a39a6fcd0';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎒",
  "questions": [
    "Do you take the bus to school?",
    "What is in your school bag?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "School bag",
      "bg": "#FAECE7"
    },
    {
      "word": "Shoes",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bus",
      "bg": "#EEEDFE"
    },
    {
      "word": "School",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you take to school?",
    "Do you take the bus?"
  ],
  "student": [
    "I take my school bag.",
    "Yes, I take the bus."
  ],
  "note": "Use the word bank: school bag, shoes, bus, school.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I get my [school bag]."
    },
    {
      "speaker": "B",
      "text": "I put on my [shoes]."
    },
    {
      "speaker": "A",
      "text": "I take the [bus] to [school]."
    }
  ],
  "blanks": [
    "school bag",
    "shoes",
    "bus"
  ]
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I get my school bag. I put on my shoes."
    },
    {
      "speaker": "B",
      "text": "I take the bus to school. Do you take the bus?"
    },
    {
      "speaker": "A",
      "text": "Yes! I go to school every day."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I get my school bag. I put on my shoes. I take the bus. I go to school.",
  "questions": [
    "What does the child get first?",
    "What does the child put on?",
    "How does the child go to school?"
  ]
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I get my ___.",
    "I put on my ___.",
    "I take the ___ to school."
  ]
}$json$::jsonb,
  true
),
(
  'be2d5796-765a-452e-8d55-b37a39a6fcd0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 school-morning words",
    "Sequence getting ready for school",
    "Say how I go to school"
  ],
  "challenge": "Tell me how you get ready and go to school!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Afternoon
update lessons set lesson_number = 3, topic = 'Talk about your afternoon routine: eat lunch, do homework, play, watch TV. [Foundation, L3: freer practice, TPR game]', slide_count = 9 where id = 'c5ccff6d-9c49-49ac-bff2-b4462ea79779';
delete from lesson_slides where lesson_id = 'c5ccff6d-9c49-49ac-bff2-b4462ea79779';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏡",
  "questions": [
    "What do you do after school?",
    "Do you watch TV in the afternoon?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Lunch",
      "bg": "#FAECE7"
    },
    {
      "word": "Homework",
      "bg": "#E1F5EE"
    },
    {
      "word": "Play",
      "bg": "#EEEDFE"
    },
    {
      "word": "TV",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do after school?",
    "Do you play or watch TV?"
  ],
  "student": [
    "I eat lunch and do homework.",
    "I play and watch TV."
  ],
  "note": "Act out an afternoon action, and I'll guess it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat [lunch]."
    },
    {
      "speaker": "B",
      "text": "I do my [homework]."
    },
    {
      "speaker": "A",
      "text": "I [play] and watch [TV]."
    }
  ],
  "blanks": [
    "lunch",
    "homework",
    "tv"
  ]
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do after school?"
    },
    {
      "speaker": "B",
      "text": "I eat lunch. Then I do my homework."
    },
    {
      "speaker": "A",
      "text": "After that, I play and watch TV."
    },
    {
      "speaker": "B",
      "text": "Act out one thing you do!"
    }
  ],
  "note": "Act-it-out game: act out an afternoon action, teacher guesses the word!"
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My afternoon. I eat lunch. I do homework. I play. I watch TV.",
  "questions": [
    "What does the child eat?",
    "What does the child do after lunch?",
    "What two things happen at the end?"
  ]
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for lunch.",
    "I do my ___.",
    "I play and watch ___."
  ]
}$json$::jsonb,
  true
),
(
  'c5ccff6d-9c49-49ac-bff2-b4462ea79779',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 afternoon activities",
    "Sequence my afternoon",
    "Act out an afternoon action"
  ],
  "challenge": "Tell me your afternoon and act one part out!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Evening
update lessons set lesson_number = 4, topic = 'Talk about your evening routine: eat dinner, take a bath, put on pajamas, go to bed. [Foundation, L4: production, show-and-tell]', slide_count = 9 where id = 'd77ac757-89a3-405e-a5d7-30ac7bf396dc';
delete from lesson_slides where lesson_id = 'd77ac757-89a3-405e-a5d7-30ac7bf396dc';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌙",
  "questions": [
    "What do you do before bed?",
    "Do you take a bath at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dinner",
      "bg": "#FAECE7"
    },
    {
      "word": "Bath",
      "bg": "#E1F5EE"
    },
    {
      "word": "Pajamas",
      "bg": "#EEEDFE"
    },
    {
      "word": "Bed",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do in the evening?",
    "What time do you go to bed?"
  ],
  "student": [
    "I eat dinner and take a bath.",
    "I go to bed at 8pm."
  ],
  "note": "Show-and-tell: show me your evening routine in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat [dinner]."
    },
    {
      "speaker": "B",
      "text": "I take a [bath]."
    },
    {
      "speaker": "A",
      "text": "I put on my [pajamas] and go to [bed]."
    }
  ],
  "blanks": [
    "dinner",
    "bath",
    "pajamas"
  ]
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat dinner. Then I take a bath."
    },
    {
      "speaker": "B",
      "text": "I put on my pajamas. Then I go to bed."
    },
    {
      "speaker": "A",
      "text": "What time do you go to bed?"
    },
    {
      "speaker": "B",
      "text": "I go to bed at 8pm. Show me your evening!"
    }
  ],
  "note": "Show-and-tell: act out your whole evening routine in order!"
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My evening. I eat dinner. I take a bath. I put on pajamas. I go to bed.",
  "questions": [
    "What does the child eat?",
    "What does the child do after dinner?",
    "What is the last thing before bed?"
  ]
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___ for dinner.",
    "I take a ___.",
    "I put on my ___ and go to bed."
  ]
}$json$::jsonb,
  true
),
(
  'd77ac757-89a3-405e-a5d7-30ac7bf396dc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 evening actions",
    "Sequence my evening",
    "Show-and-tell my bedtime routine"
  ],
  "challenge": "Show me your evening routine, from dinner to bed!"
}$json$::jsonb,
  true
);

-- Lesson 5: All About My Day
update lessons set lesson_number = 5, topic = 'Unit Review — talk about your whole day, from morning to night. [Foundation, L5: tier-matched mixed review]', slide_count = 9 where id = '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc';
delete from lesson_slides where lesson_id = '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc';
insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌞",
  "questions": [
    "What do you do in the morning?",
    "What do you do at night?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Morning",
      "bg": "#FAECE7"
    },
    {
      "word": "School",
      "bg": "#E1F5EE"
    },
    {
      "word": "Afternoon",
      "bg": "#EEEDFE"
    },
    {
      "word": "Evening",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first in your day?",
    "What do you do last?"
  ],
  "student": [
    "First, I wake up.",
    "Finally, I go to bed."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In the [morning], I wake up and eat breakfast."
    },
    {
      "speaker": "B",
      "text": "I go to [school] and eat lunch."
    },
    {
      "speaker": "A",
      "text": "In the [evening], I go to bed."
    }
  ],
  "blanks": [
    "morning",
    "school",
    "evening"
  ]
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "In the morning, I wake up and eat breakfast."
    },
    {
      "speaker": "B",
      "text": "I go to school and eat lunch. Then I play."
    },
    {
      "speaker": "A",
      "text": "In the evening, I eat dinner and go to bed."
    },
    {
      "speaker": "B",
      "text": "Tell me your whole day!"
    }
  ],
  "note": "Mixed review: put your whole day in order, from morning to night!"
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My day. I wake up. I go to school. I eat lunch. I do homework. I eat dinner. I go to bed.",
  "questions": [
    "What does the child do first?",
    "What happens at school?",
    "What is the last thing at night?"
  ]
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "In the morning, I ___.",
    "At school, I ___.",
    "At night, I ___."
  ]
}$json$::jsonb,
  true
),
(
  '90f05aaf-c00b-4bec-9d7d-e7eb73ea6dbc',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Sequence my whole day",
    "Name morning, school, afternoon, evening actions",
    "Tell my day in order"
  ],
  "challenge": "Tell me your whole day, from wake-up to bedtime!"
}$json$::jsonb,
  true
);

commit;
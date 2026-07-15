-- PILOT (update-in-place): A1 Kids Unit 1 Lesson 1 in the new 9-slide
-- architecture. Your Kids A1 rollout is already live in Supabase, so this
-- replaces just this one lesson's slides in place instead of re-inserting
-- the lessons row (which already exists with this id).
begin;

update lessons set
  topic = 'Say hello, introduce yourself, and ask "What''s your name?" [Foundation, new 9-slide architecture: Title/Warmup/Vocabulary/Highlight/Practice/Perform/Speaking/Review/Closer]',
  slide_count = 9
where id = '9aa46d70-41a5-4721-a1be-4311c01c1366';

delete from lesson_slides where lesson_id = '9aa46d70-41a5-4721-a1be-4311c01c1366';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Hello & My Name' -- A warm, welcoming scene of a diverse group of children at the start of a school day -- waving hello, smiling, everyday classroom or playground setting."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
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
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hello",
      "bg": "#FAECE7",
      "image_note": "A child waving hello with a big smile, warm and welcoming."
    },
    {
      "word": "Hi",
      "bg": "#E1F5EE",
      "image_note": "A child waving hi cheerfully, close-up, friendly expression."
    },
    {
      "word": "Goodbye",
      "bg": "#EEEDFE",
      "image_note": "A child waving goodbye while walking away, warm sunset colors."
    },
    {
      "word": "My name is",
      "bg": "#FAEEDA",
      "image_note": "A child pointing to themselves with a nametag or speech bubble."
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
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
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Match the Greetings",
  "subtitle": "Tap a picture, then tap its word.",
  "instruction": "Match each picture to its word.",
  "pairs": [
    {
      "emoji": "👋",
      "word": "Hello"
    },
    {
      "emoji": "🙋",
      "word": "Hi"
    },
    {
      "emoji": "🚶",
      "word": "Goodbye"
    },
    {
      "emoji": "🏷️",
      "word": "My name is"
    }
  ]
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "scene": "Two friends meet at the park.",
  "lines": [
    {
      "speaker": "A",
      "text": "Hello! I am Leo."
    },
    {
      "speaker": "B",
      "text": "Hi! My name is Ana."
    },
    {
      "speaker": "A",
      "text": "Goodbye!"
    }
  ],
  "twist": "Now act it out again with YOUR real name!"
}$json$::jsonb,
  true
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  7,
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
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  8,
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
),
(
  '9aa46d70-41a5-4721-a1be-4311c01c1366',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "👋",
  "headline": "You did it!",
  "goal": "You can say hello and tell me your name!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

commit;

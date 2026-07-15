-- A1 Kids Unit 4: Colors and Numbers (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Colors
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  'Colors',
  'A1',
  'kids',
  4,
  1,
  'Name basic colors. [Foundation, Lesson 1: notice/receptive, matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
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
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌈",
  "questions": [
    "What is your favorite color?",
    "Do you see red?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7"
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE"
    },
    {
      "word": "Yellow",
      "bg": "#EEEDFE"
    },
    {
      "word": "Green",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "Do you like red?"
  ],
  "student": [
    "This is red.",
    "Yes, I like red!"
  ],
  "note": "Point to something red, blue, yellow, or green!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [red]."
    },
    {
      "speaker": "B",
      "text": "This is [blue]."
    },
    {
      "speaker": "A",
      "text": "This is [yellow]."
    }
  ],
  "blanks": [
    "red",
    "blue",
    "yellow"
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is red."
    },
    {
      "speaker": "B",
      "text": "This is blue."
    },
    {
      "speaker": "A",
      "text": "This is yellow."
    },
    {
      "speaker": "B",
      "text": "This is green!"
    }
  ],
  "note": "Teacher says the color first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is red. This is blue. This is yellow. This is green.",
  "questions": [
    "What color is first?",
    "What color is next?",
    "Name all four colors."
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "My favorite color is ___.",
    "I see ___."
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 colors",
    "Say 'This is ___'",
    "Point to a color"
  ],
  "challenge": "Point to something and say its color!"
}$json$::jsonb,
  true
);

-- Lesson 2: Numbers
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  'Numbers',
  'A1',
  'kids',
  4,
  2,
  'Count 1-10. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
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
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔢",
  "questions": [
    "Can you count to four?",
    "How many fingers do you have?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
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
      "word": "Two",
      "bg": "#E1F5EE"
    },
    {
      "word": "Three",
      "bg": "#EEEDFE"
    },
    {
      "word": "Four",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many is this?",
    "Can you count?"
  ],
  "student": [
    "This is one.",
    "One, two, three, four!"
  ],
  "note": "Count on your fingers!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [one]."
    },
    {
      "speaker": "B",
      "text": "This is [two]."
    },
    {
      "speaker": "A",
      "text": "This is [three]."
    }
  ],
  "blanks": [
    "one",
    "two",
    "three"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "One."
    },
    {
      "speaker": "B",
      "text": "Two."
    },
    {
      "speaker": "A",
      "text": "Three."
    },
    {
      "speaker": "B",
      "text": "Four!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "One, two, three, four. I can count to four!",
  "questions": [
    "What number is first?",
    "What number is last?",
    "Can the writer count to four?"
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "One, two, ___.",
    "I can count to ___.",
    "This is number ___."
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count 1 to 4",
    "Say numbers out loud",
    "Count my fingers"
  ],
  "challenge": "Count to four with me!"
}$json$::jsonb,
  true
);

-- Lesson 3: Count and Match
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  'Count and Match',
  'A1',
  'kids',
  4,
  3,
  'Match numbers to colors and objects. [Foundation, Lesson 3: freer practice, TPR game]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
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
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖐️",
  "questions": [
    "How many red things do you see?",
    "Can you count to five?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Five",
      "bg": "#FAECE7"
    },
    {
      "word": "How many",
      "bg": "#E1F5EE"
    },
    {
      "word": "Match",
      "bg": "#EEEDFE"
    },
    {
      "word": "Count",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How many red things?",
    "Can you count them?"
  ],
  "student": [
    "I see five red things.",
    "One, two, three, four, five!"
  ],
  "note": "Point and count out loud!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How many] red things?"
    },
    {
      "speaker": "B",
      "text": "I [count] them: one, two, three."
    },
    {
      "speaker": "A",
      "text": "[Five] blue things!"
    }
  ],
  "blanks": [
    "how many",
    "count",
    "five"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How many red things do you see?"
    },
    {
      "speaker": "B",
      "text": "One, two, three! Three red things."
    },
    {
      "speaker": "A",
      "text": "How many blue things?"
    },
    {
      "speaker": "B",
      "text": "Five blue things! Your turn to count!"
    }
  ],
  "note": "Point around the room and count things by color together!"
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I see three red things. I see five blue things. I like to count and match colors.",
  "questions": [
    "How many red things?",
    "How many blue things?",
    "What does the writer like to do?"
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I see ___ red things.",
    "I see ___ blue things.",
    "I like to count and ___."
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Count to five",
    "Match numbers to colors",
    "Ask 'How many?'"
  ],
  "challenge": "Count five things of your favorite color!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Favorite Number
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  'My Favorite Number',
  'A1',
  'kids',
  4,
  4,
  'Show and tell a favorite number and color. [Foundation, Lesson 4: production, show-and-tell]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
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
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⭐",
  "questions": [
    "What is your favorite number?",
    "What is your favorite color?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Favorite",
      "bg": "#FAECE7"
    },
    {
      "word": "Because",
      "bg": "#E1F5EE"
    },
    {
      "word": "Like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Number",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite number?",
    "What is your favorite color?"
  ],
  "student": [
    "My favorite number is three.",
    "My favorite color is blue."
  ],
  "note": "Think of your favorite number and color!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [favorite] number is three."
    },
    {
      "speaker": "B",
      "text": "I [like] the color blue."
    },
    {
      "speaker": "A",
      "text": "My favorite [number] is five!"
    }
  ],
  "blanks": [
    "favorite",
    "like",
    "number"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite number is three. My favorite color is blue."
    },
    {
      "speaker": "B",
      "text": "My favorite number is five. My favorite color is red."
    },
    {
      "speaker": "A",
      "text": "I like blue and three together!"
    },
    {
      "speaker": "B",
      "text": "I like red and five!"
    }
  ],
  "note": "Show-and-tell: draw your favorite number and color, then tell me about it!"
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite number is three. My favorite color is blue. I like blue and three!",
  "questions": [
    "What is the favorite number?",
    "What is the favorite color?",
    "Does the writer like them together?"
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite number is ___.",
    "My favorite color is ___.",
    "I like ___."
  ]
}$json$::jsonb,
  true
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say my favorite number",
    "Say my favorite color",
    "Show-and-tell my favorites"
  ],
  "challenge": "Tell me your favorite number and color!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  'Unit Review',
  'A1',
  'kids',
  4,
  5,
  'Review colors and numbers. [Foundation, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
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
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌈",
  "questions": [
    "What color do you see?",
    "Can you count to four?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Red",
      "bg": "#FAECE7"
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE"
    },
    {
      "word": "One",
      "bg": "#EEEDFE"
    },
    {
      "word": "Two",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is this?",
    "How many is this?"
  ],
  "student": [
    "This is red.",
    "This is two."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [red]."
    },
    {
      "speaker": "B",
      "text": "This is number [one]."
    },
    {
      "speaker": "A",
      "text": "I [like] blue and three."
    }
  ],
  "blanks": [
    "red",
    "one",
    "like"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is red. This is number one."
    },
    {
      "speaker": "B",
      "text": "This is blue. This is number two."
    },
    {
      "speaker": "A",
      "text": "I like blue and three together!"
    },
    {
      "speaker": "B",
      "text": "I like red and one!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is red. This is number one. My favorite color is blue. My favorite number is three.",
  "questions": [
    "What color is shown first?",
    "What is the favorite color?",
    "What is the favorite number?"
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is ___.",
    "My favorite color is ___.",
    "My favorite number is ___."
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name colors",
    "Count 1 to 5",
    "Say my favorite color and number"
  ],
  "challenge": "Tell me your favorite color and number!"
}$json$::jsonb,
  true
);

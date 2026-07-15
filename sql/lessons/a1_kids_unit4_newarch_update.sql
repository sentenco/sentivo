-- A1 Kids Unit 4: new 9-slide architecture (update-in-place)
-- Title/Warmup/Vocabulary/Highlight/Practice/Activity/Reading-or-Speaking/Review/Wrap-up.
-- Kids A1 is already live in Supabase -- this UPDATEs each lesson's topic/
-- slide_count and replaces its lesson_slides in place. Wrapped in one transaction
-- per unit so a mistake can't half-apply.
begin;

-- Lesson c7e53235: Colors
update lessons set
  topic = 'Name basic colors.',
  slide_count = 9
where id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

delete from lesson_slides where lesson_id = 'c7e53235-a359-48da-82f9-ae4380ca518e';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Colors' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
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
      "bg": "#FAECE7",
      "image_note": "A simple red shape (e.g. a red apple or red ball), bold solid color."
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE",
      "image_note": "A simple blue shape (e.g. a blue ball or blue sky), bold solid color."
    },
    {
      "word": "Yellow",
      "bg": "#EEEDFE",
      "image_note": "A simple yellow shape (e.g. a yellow sun or banana), bold solid color."
    },
    {
      "word": "Green",
      "bg": "#FAEEDA",
      "image_note": "A simple green shape (e.g. a green leaf or green apple), bold solid color."
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
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "Which One?",
  "subtitle": "Tap the correct answer.",
  "instruction": "Which one is red?",
  "options": [
    {
      "text": "Apple",
      "emoji": "🍎"
    },
    {
      "text": "Leaf",
      "emoji": "🍃"
    }
  ],
  "correctIndex": 0
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Which One?",
  "subtitle": "Pick one and tell me why!",
  "prompt": "Which color do you like better?",
  "options": [
    {
      "text": "Red",
      "emoji": "🔴"
    },
    {
      "text": "Blue",
      "emoji": "🔵"
    }
  ]
}$json$::jsonb,
  true
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  7,
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
  8,
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
),
(
  'c7e53235-a359-48da-82f9-ae4380ca518e',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌈",
  "headline": "You did it!",
  "goal": "You can name 4 colors!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson c66b374c: Numbers
update lessons set
  topic = 'Count 1-10.',
  slide_count = 9
where id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

delete from lesson_slides where lesson_id = 'c66b374c-073b-4618-b34b-66da50d7ead3';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Numbers' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
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
      "bg": "#FAECE7",
      "image_note": "A single large numeral '1' with one matching object beside it (e.g. one apple)."
    },
    {
      "word": "Two",
      "bg": "#E1F5EE",
      "image_note": "A large numeral '2' with two matching objects beside it."
    },
    {
      "word": "Three",
      "bg": "#EEEDFE",
      "image_note": "A large numeral '3' with three matching objects beside it."
    },
    {
      "word": "Four",
      "bg": "#FAEEDA",
      "image_note": "A large numeral '4' with four matching objects beside it."
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
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Small or Big Number?",
  "subtitle": "Drag each number to the right group.",
  "instruction": "Drag each number to the right group!",
  "buckets": [
    {
      "label": "1-2",
      "emoji": "✌️"
    },
    {
      "label": "3-4",
      "emoji": "🖐️"
    }
  ],
  "items": [
    {
      "text": "One",
      "emoji": "1️⃣",
      "bucket": 0
    },
    {
      "text": "Two",
      "emoji": "2️⃣",
      "bucket": 0
    },
    {
      "text": "Three",
      "emoji": "3️⃣",
      "bucket": 1
    },
    {
      "text": "Four",
      "emoji": "4️⃣",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "roleplay",
  "tag": "Activity",
  "title": "Act It Out",
  "subtitle": "Play the scene together.",
  "scene": "Two friends count together.",
  "lines": [
    {
      "speaker": "A",
      "text": "Let's count! One, two."
    },
    {
      "speaker": "B",
      "text": "Three, four!"
    },
    {
      "speaker": "A",
      "text": "Great job! Can you count to five?"
    }
  ],
  "twist": "Now count as high as YOU can!"
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
),
(
  'c66b374c-073b-4618-b34b-66da50d7ead3',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🔢",
  "headline": "You did it!",
  "goal": "You can count from one to four!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 5546d8a9: Count and Match
update lessons set
  topic = 'Match numbers to colors and objects.',
  slide_count = 9
where id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

delete from lesson_slides where lesson_id = '5546d8a9-9d92-476c-b548-8ed23c96bcab';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Count and Match' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
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
      "bg": "#FAECE7",
      "image_note": "A large numeral '5' with five matching objects beside it."
    },
    {
      "word": "How many",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Match",
      "bg": "#EEEDFE",
      "image_note": "Two identical simple shapes or numbers connected by a line, puzzle-piece feel."
    },
    {
      "word": "Count",
      "bg": "#FAEEDA",
      "image_note": "A row of simple objects (like blocks or stars) lined up to be counted."
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
  'practice',
  null,
  null,
  $json${
  "mode": "order",
  "tag": "Practice",
  "title": "Counting Order",
  "subtitle": "Put the numbers in order.",
  "instruction": "Put the numbers in counting order!",
  "items": [
    {
      "text": "One",
      "emoji": "1️⃣"
    },
    {
      "text": "Two",
      "emoji": "2️⃣"
    },
    {
      "text": "Three",
      "emoji": "3️⃣"
    },
    {
      "text": "Four",
      "emoji": "4️⃣"
    }
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Count something in the room and tell me how many!",
  "starters": [
    "I see...",
    "I count..."
  ]
}$json$::jsonb,
  true
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  7,
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
  8,
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
),
(
  '5546d8a9-9d92-476c-b548-8ed23c96bcab',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🖐️",
  "headline": "You did it!",
  "goal": "You can count and match numbers to things!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson f7dd2a6c: My Favorite Number
update lessons set
  topic = 'Show and tell a favorite number and color.',
  slide_count = 9
where id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

delete from lesson_slides where lesson_id = 'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'My Favorite Number' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
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
      "bg": "#FAECE7",
      "image_note": "A single object with a small star or heart on it, marking it as special."
    },
    {
      "word": "Because",
      "bg": "#E1F5EE",
      "image_note": "Functional/grammar word, not a concrete object -- skip a literal picture. If illustrating, show the example sentence in action instead of the word alone."
    },
    {
      "word": "Like",
      "bg": "#EEEDFE",
      "image_note": "Simple, bright, kid-friendly illustration of 'Like' -- one clear subject, no text in the image, no background clutter."
    },
    {
      "word": "Number",
      "bg": "#FAEEDA",
      "image_note": "A friendly numeral character, simple and colorful."
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
  'practice',
  null,
  null,
  $json${
  "mode": "blank",
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
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Interview Time",
  "subtitle": "Answer each question.",
  "questions": [
    "What is your favorite number?",
    "What is your favorite color?",
    "Why do you like them?"
  ]
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
),
(
  'f7dd2a6c-f03d-450e-a9ee-b5ff219a2f12',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "⭐",
  "headline": "You did it!",
  "goal": "You can share your favorite number and color!",
  "closing": "See you next time!"
}$json$::jsonb,
  true
);

-- Lesson 1ef356b7: Unit Review
update lessons set
  topic = 'Review colors and numbers.',
  slide_count = 9
where id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

delete from lesson_slides where lesson_id = '1ef356b7-5118-4428-b1e2-8809975cbce9';

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids",
  "image_note": "Hero image for 'Unit Review' -- A tidy, colorful classroom corner showing school supplies -- desks, books, pencils, backpacks."
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
      "bg": "#FAECE7",
      "image_note": "A simple red shape (e.g. a red apple or red ball), bold solid color."
    },
    {
      "word": "Blue",
      "bg": "#E1F5EE",
      "image_note": "A simple blue shape (e.g. a blue ball or blue sky), bold solid color."
    },
    {
      "word": "One",
      "bg": "#EEEDFE",
      "image_note": "A single large numeral '1' with one matching object beside it (e.g. one apple)."
    },
    {
      "word": "Two",
      "bg": "#FAEEDA",
      "image_note": "A large numeral '2' with two matching objects beside it."
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
  'practice',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Unit Review",
  "title": "Mix It Up!",
  "subtitle": "Try one of each.",
  "parts": [
    {
      "mode": "choice",
      "instruction": "Which one is red?",
      "options": [
        {
          "text": "Apple",
          "emoji": "🍎"
        },
        {
          "text": "Leaf",
          "emoji": "🍃"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "sort",
      "instruction": "Drag each number to the right group!",
      "buckets": [
        {
          "label": "1-2",
          "emoji": "✌️"
        },
        {
          "label": "3-4",
          "emoji": "🖐️"
        }
      ],
      "items": [
        {
          "text": "One",
          "emoji": "1️⃣",
          "bucket": 0
        },
        {
          "text": "Three",
          "emoji": "3️⃣",
          "bucket": 1
        },
        {
          "text": "Four",
          "emoji": "4️⃣",
          "bucket": 1
        }
      ]
    },
    {
      "mode": "order",
      "instruction": "Put the numbers in counting order!",
      "items": [
        {
          "text": "One",
          "emoji": "1️⃣"
        },
        {
          "text": "Two",
          "emoji": "2️⃣"
        },
        {
          "text": "Three",
          "emoji": "3️⃣"
        }
      ]
    },
    {
      "mode": "blank",
      "dialogue": [
        {
          "speaker": "A",
          "text": "My favorite color is [blue]."
        },
        {
          "speaker": "B",
          "text": "My favorite [number] is three."
        }
      ],
      "blanks": [
        "blue",
        "number"
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Unit Review",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute!",
  "prompt": "Tell me your favorite color and number, and count for me!",
  "starters": [
    "My favorite color is...",
    "My favorite number is...",
    "I can count to..."
  ]
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
),
(
  '1ef356b7-5118-4428-b1e2-8809975cbce9',
  9,
  'closer',
  null,
  null,
  $json${
  "sticker": "🌈",
  "headline": "Great job!",
  "goal": "You can talk about colors and numbers!",
  "closing": "See you in Unit 5!"
}$json$::jsonb,
  true
);

commit;

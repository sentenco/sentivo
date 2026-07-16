-- A1 Teens Unit 1: Me and My Basic Profile (5 lessons) -- New 9-slide architecture, Foundation tier
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Name, My Age, My Story
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  'My Name, My Age, My Story',
  'A1',
  'teens',
  1,
  1,
  'Say my name, age, birthday, and where I''m from. [Foundation, Lesson 1: recognition, tap-to-reveal identity cards]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens",
  "image_note": "A set of mystery ID cards -- birthday cake, flag, name tag, number -- ready to flip over."
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎴",
  "questions": [
    "What's your name?",
    "Where are you from?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "subtitle": "Tap a card to see it bigger.",
  "words": [
    {
      "word": "My name is"
    },
    {
      "word": "I am ... years old"
    },
    {
      "word": "My birthday is ..."
    },
    {
      "word": "I'm from ..."
    }
  ]
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  4,
  'phrases',
  null,
  null,
  $json${
  "tag": "Highlight",
  "title": "Practice the Conversation",
  "teacher": [
    "Hi! What's your name?",
    "When's your birthday?"
  ],
  "student": [
    "My name is ___.",
    "My birthday is in ___."
  ],
  "note": "Say your real name and birthday month!",
  "image_note": "Two teens comparing ID cards and laughing."
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "match",
  "tag": "Practice",
  "title": "Mystery Card Match",
  "subtitle": "Match each icon to its word.",
  "instruction": "Match the picture to the word.",
  "pairs": [
    {
      "emoji": "📛",
      "word": "name"
    },
    {
      "emoji": "🎂",
      "word": "birthday"
    },
    {
      "emoji": "🌍",
      "word": "country"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Tap-to-Reveal Cards",
  "subtitle": "Flip a card and answer it.",
  "questions": [
    "What's your name?",
    "How old are you?",
    "When's your birthday?"
  ]
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  7,
  'speaking',
  null,
  null,
  $json${
  "tag": "Speaking",
  "title": "Your Turn",
  "subtitle": "Practice speaking with a partner.",
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's your name?"
    },
    {
      "speaker": "B",
      "text": "My name is ___."
    },
    {
      "speaker": "A",
      "text": "When's your birthday?"
    },
    {
      "speaker": "B",
      "text": "My birthday is in ___."
    }
  ],
  "note": "Say your own name and birthday."
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  8,
  'review',
  null,
  null,
  $json${
  "tag": "Review",
  "title": "Today I can...",
  "checklist": [
    "Say my name",
    "Say my age",
    "Say my birthday"
  ],
  "challenge": "Tell me your name and birthday!"
}$json$::jsonb,
  true
),
(
  'ad0fa779-8234-4b2e-a647-d30bade5ec9f',
  9,
  'closer',
  null,
  null,
  $json${
  "headline": "Great job!",
  "goal": "You can talk about yourself.",
  "closing": "See you next time!",
  "sticker": "🎴"
}$json$::jsonb,
  true
);

-- Lesson 2: My Favorite Things
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  'My Favorite Things',
  'A1',
  'teens',
  1,
  2,
  'Say what I like and don''t like. [Foundation, Lesson 2: controlled choice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens",
  "image_note": "A teen looking happily at music and game icons."
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎵",
  "questions": [
    "What do you like?",
    "Music or games?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "subtitle": "Tap a card to see it bigger.",
  "words": [
    {
      "word": "I like"
    },
    {
      "word": "I don't like"
    },
    {
      "word": "favorite"
    },
    {
      "word": "because"
    }
  ]
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  4,
  'phrases',
  null,
  null,
  $json${
  "title": "Practice the Conversation",
  "teacher": [
    "What do you like?",
    "Do you like music?"
  ],
  "student": [
    "I like ___.",
    "Yes, I like music!"
  ],
  "note": "Point to something you like!",
  "image_note": "A teen pointing at a music icon."
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "choice",
  "tag": "Practice",
  "title": "This or That",
  "subtitle": "Tap the right picture.",
  "instruction": "Which one is 'games'?",
  "options": [
    {
      "emoji": "🎵",
      "text": "Music"
    },
    {
      "emoji": "🎮",
      "text": "Games"
    },
    {
      "emoji": "🍕",
      "text": "Pizza"
    }
  ],
  "correctIndex": 1
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "interview",
  "tag": "Activity",
  "title": "Ask and Answer",
  "subtitle": "Ask your teacher these questions.",
  "questions": [
    "What is your favorite food?",
    "What music do you like?",
    "Games or music?"
  ]
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  7,
  'reading',
  null,
  null,
  $json${
  "tag": "Reading",
  "title": "Read and Answer",
  "subtitle": "Read the text, then answer.",
  "text": "Leo likes music. He likes pizza too. He doesn't like noodles.",
  "questions": [
    "What does Leo like?",
    "What doesn't Leo like?"
  ],
  "image_note": "A teen boy with headphones and a slice of pizza."
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  8,
  'review',
  null,
  null,
  $json${
  "tag": "Review",
  "title": "Today I can...",
  "checklist": [
    "Say 'I like'",
    "Say 'I don't like'",
    "Say my favorite thing"
  ],
  "challenge": "Tell me one thing you like!"
}$json$::jsonb,
  true
),
(
  '634d1349-5359-4fc3-8573-9552fd2fd3a8',
  9,
  'closer',
  null,
  null,
  $json${
  "headline": "Nice work!",
  "goal": "You can say what you like.",
  "closing": "See you next time!",
  "sticker": "🎵"
}$json$::jsonb,
  true
);

-- Lesson 3: My Week in Simple English
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  'My Week in Simple English',
  'A1',
  'teens',
  1,
  3,
  'Talk about my week. [Foundation, Lesson 3: sequencing]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens",
  "image_note": "A weekly planner with simple icons for each day."
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What day is it?",
    "What do you do this week?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "subtitle": "Tap a card to see it bigger.",
  "words": [
    {
      "word": "Monday"
    },
    {
      "word": "school"
    },
    {
      "word": "weekend"
    },
    {
      "word": "every day"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  4,
  'phrases',
  null,
  null,
  $json${
  "title": "Practice the Conversation",
  "teacher": [
    "What do you do on Monday?",
    "What about the weekend?"
  ],
  "student": [
    "I go to school.",
    "I play games."
  ],
  "note": "Talk about your real week!",
  "image_note": "A teen looking at a wall calendar."
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "order",
  "tag": "Practice",
  "title": "Drag My Week",
  "subtitle": "Drag the days in order.",
  "instruction": "Put the days in order.",
  "items": [
    {
      "emoji": "1️⃣",
      "text": "Monday"
    },
    {
      "emoji": "2️⃣",
      "text": "Tuesday"
    },
    {
      "emoji": "3️⃣",
      "text": "Wednesday"
    },
    {
      "emoji": "4️⃣",
      "text": "Thursday"
    }
  ]
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Show and Tell",
  "subtitle": "Talk for one minute.",
  "prompt": "Tell me about your week.",
  "starters": [
    "On Monday, I...",
    "On the weekend, I..."
  ]
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  7,
  'speaking',
  null,
  null,
  $json${
  "tag": "Speaking",
  "title": "Your Turn",
  "subtitle": "Practice speaking with a partner.",
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do on Monday?"
    },
    {
      "speaker": "B",
      "text": "I go to school."
    },
    {
      "speaker": "A",
      "text": "What about Saturday?"
    },
    {
      "speaker": "B",
      "text": "I play with friends."
    }
  ],
  "note": "Talk about your real week."
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  8,
  'review',
  null,
  null,
  $json${
  "tag": "Review",
  "title": "Today I can...",
  "checklist": [
    "Say the days of the week",
    "Say what I do on Monday",
    "Say what I do on weekends"
  ],
  "challenge": "Tell me about your week!"
}$json$::jsonb,
  true
),
(
  'ba25bc10-1985-4d98-ab13-8a7ce502df90',
  9,
  'closer',
  null,
  null,
  $json${
  "headline": "Well done!",
  "goal": "You can talk about your week.",
  "closing": "See you next time!",
  "sticker": "📅"
}$json$::jsonb,
  true
);

-- Lesson 4: My "About Me" Card
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  'My "About Me" Card',
  'A1',
  'teens',
  1,
  4,
  'Build a simple ''about me'' description. [Foundation, Lesson 4: categorizing]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens",
  "image_note": "A digital profile card with icons for age, hobby, food, and subject."
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🪪",
  "questions": [
    "What is your favorite subject?",
    "What is your favorite food?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "subtitle": "Tap a card to see it bigger.",
  "words": [
    {
      "word": "my hobby"
    },
    {
      "word": "my favorite food"
    },
    {
      "word": "my favorite subject"
    },
    {
      "word": "about me"
    }
  ]
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  4,
  'phrases',
  null,
  null,
  $json${
  "title": "Practice the Conversation",
  "teacher": [
    "What is your hobby?",
    "What is your favorite subject?"
  ],
  "student": [
    "My hobby is ___.",
    "My favorite subject is ___."
  ],
  "note": "Say something true about you!",
  "image_note": "A teen filling in a simple profile card."
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "sort",
  "tag": "Practice",
  "title": "Profile Builder",
  "subtitle": "Drag each word to its group.",
  "instruction": "Sort the words into groups.",
  "buckets": [
    {
      "emoji": "🎨",
      "label": "Hobby"
    },
    {
      "emoji": "📚",
      "label": "Subject"
    }
  ],
  "items": [
    {
      "emoji": "⚽",
      "text": "football",
      "bucket": 0
    },
    {
      "emoji": "🎸",
      "text": "guitar",
      "bucket": 0
    },
    {
      "emoji": "➕",
      "text": "math",
      "bucket": 1
    },
    {
      "emoji": "🎨",
      "text": "art",
      "bucket": 1
    }
  ]
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "choose",
  "tag": "Activity",
  "title": "Choose Your Card",
  "subtitle": "Pick your favorites.",
  "prompt": "What is your favorite food?",
  "options": [
    {
      "emoji": "🍕",
      "text": "Pizza"
    },
    {
      "emoji": "🍜",
      "text": "Noodles"
    }
  ]
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  7,
  'reading',
  null,
  null,
  $json${
  "tag": "Reading",
  "title": "Read and Answer",
  "subtitle": "Read the text, then answer.",
  "text": "This is Mia's card. Her hobby is dancing. Her favorite subject is art.",
  "questions": [
    "What is Mia's hobby?",
    "What subject does she like?"
  ],
  "image_note": "A profile card for a teen girl named Mia."
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  8,
  'review',
  null,
  null,
  $json${
  "tag": "Review",
  "title": "Today I can...",
  "checklist": [
    "Say my hobby",
    "Say my favorite food",
    "Say my favorite subject"
  ],
  "challenge": "Tell me about your card!"
}$json$::jsonb,
  true
),
(
  '46a04d53-adcf-42fa-98e5-5cb7beda6db6',
  9,
  'closer',
  null,
  null,
  $json${
  "headline": "Awesome!",
  "goal": "You can talk about yourself.",
  "closing": "See you next time!",
  "sticker": "🪪"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  'Unit Review',
  'A1',
  'teens',
  1,
  5,
  'Unit Review -- name, age, likes, week, and profile. [Foundation, Lesson 5: mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Teens",
  "image_note": "A locked profile board slowly unlocking, game-show style."
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🔓",
  "questions": [
    "What is your name?",
    "What do you like?"
  ],
  "title": "Let's review!"
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "subtitle": "Tap a card to see it bigger.",
  "words": [
    {
      "word": "name"
    },
    {
      "word": "age"
    },
    {
      "word": "favorite"
    },
    {
      "word": "week"
    }
  ]
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  4,
  'phrases',
  null,
  null,
  $json${
  "title": "Practice the Conversation",
  "teacher": [
    "Tell me about yourself.",
    "What do you like?"
  ],
  "student": [
    "My name is ___.",
    "I like ___."
  ],
  "note": "Use everything you learned!",
  "image_note": "A teen proudly presenting a finished profile board."
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  5,
  'practice',
  null,
  null,
  $json${
  "mode": "mixed",
  "tag": "Practice",
  "title": "Unlock the Board",
  "subtitle": "Complete each part to unlock.",
  "parts": [
    {
      "mode": "match",
      "instruction": "Match the picture to the word.",
      "pairs": [
        {
          "emoji": "📛",
          "word": "name"
        },
        {
          "emoji": "🎂",
          "word": "age"
        }
      ]
    },
    {
      "mode": "choice",
      "instruction": "Which one is 'music'?",
      "options": [
        {
          "emoji": "🎵",
          "text": "Music"
        },
        {
          "emoji": "🎮",
          "text": "Games"
        }
      ],
      "correctIndex": 0
    },
    {
      "mode": "order",
      "instruction": "Put the days in order.",
      "items": [
        {
          "emoji": "1️⃣",
          "text": "Monday"
        },
        {
          "emoji": "2️⃣",
          "text": "Tuesday"
        },
        {
          "emoji": "3️⃣",
          "text": "Wednesday"
        }
      ]
    }
  ]
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  6,
  'perform',
  null,
  null,
  $json${
  "mode": "talk",
  "tag": "Activity",
  "title": "Final Talk",
  "subtitle": "Talk for one minute.",
  "prompt": "Tell me all about yourself!",
  "starters": [
    "My name is...",
    "I like...",
    "On Monday, I..."
  ]
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  7,
  'reading',
  null,
  null,
  $json${
  "tag": "Reading",
  "title": "Read and Answer",
  "subtitle": "Read the text, then answer.",
  "text": "You know English now. You can say your name. You can say what you like.",
  "questions": [
    "What can you say now?"
  ],
  "image_note": "A trophy on a game board, celebration style."
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  8,
  'review',
  null,
  null,
  $json${
  "tag": "Review",
  "title": "Today I can...",
  "checklist": [
    "Say my name and age",
    "Say what I like",
    "Talk about my week",
    "Talk about myself"
  ],
  "challenge": "Tell me all about yourself!"
}$json$::jsonb,
  true
),
(
  'd32880ed-96d2-47a8-a304-64f5198c2b26',
  9,
  'closer',
  null,
  null,
  $json${
  "headline": "You did it!",
  "goal": "You finished Unit 1!",
  "closing": "See you in Unit 2!",
  "sticker": "🏆"
}$json$::jsonb,
  true
);

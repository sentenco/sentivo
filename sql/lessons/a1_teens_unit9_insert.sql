-- A1 Teens Unit 9: Clothes and Style (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Clothes and Style
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  'Clothes and Style',
  'A1',
  'teens',
  9,
  1,
  'Name basic clothes and style words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
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
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👕",
  "questions": [
    "What are you wearing today?",
    "Do you like jeans?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Shirt",
      "bg": "#FAECE7"
    },
    {
      "word": "Jeans",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dress",
      "bg": "#EEEDFE"
    },
    {
      "word": "Shoes",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Do you wear jeans?"
  ],
  "student": [
    "It is a shirt.",
    "Yes, I wear jeans a lot!"
  ],
  "note": "Look at what you're wearing right now!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I wear a [shirt]."
    },
    {
      "speaker": "B",
      "text": "I wear [jeans]."
    },
    {
      "speaker": "A",
      "text": "I wear [shoes]."
    }
  ],
  "blanks": [
    "shirt",
    "jeans",
    "shoes"
  ]
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you wearing today?"
    },
    {
      "speaker": "B",
      "text": "I'm wearing a shirt and jeans."
    },
    {
      "speaker": "A",
      "text": "I'm wearing a dress!"
    },
    {
      "speaker": "B",
      "text": "Nice!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I wear a shirt. I wear jeans. I wear shoes. Sometimes I wear a jacket. I choose my clothes every morning!",
  "questions": [
    "What does the writer wear?",
    "Does the writer wear a jacket?",
    "When does the writer choose clothes?"
  ]
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I wear a ___.",
    "I like wearing ___.",
    "Today I am wearing ___."
  ]
}$json$::jsonb,
  true
),
(
  'f5dbaddc-8f43-4193-8df4-9cf7746a678a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four clothes items",
    "Say 'I wear ___'",
    "Talk about my clothes"
  ],
  "challenge": "Tell me what you're wearing right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: What Are You Wearing?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  'What Are You Wearing?',
  'A1',
  'teens',
  9,
  2,
  'Describe what someone is wearing.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
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
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧥",
  "questions": [
    "What is your friend wearing today?",
    "Are you wearing a jacket?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wearing",
      "bg": "#FAECE7"
    },
    {
      "word": "Jacket",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cap",
      "bg": "#EEEDFE"
    },
    {
      "word": "He/She Is",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is he wearing?",
    "Is she wearing a cap?"
  ],
  "student": [
    "He is wearing a jacket.",
    "Yes, she is wearing a cap!"
  ],
  "note": "Describe someone you can see or imagine!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "He is [wearing] a jacket."
    },
    {
      "speaker": "B",
      "text": "She is wearing a [cap]."
    },
    {
      "speaker": "A",
      "text": "[He/She is] wearing shoes."
    }
  ],
  "blanks": [
    "wearing",
    "cap",
    "He/She is"
  ]
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is he wearing?"
    },
    {
      "speaker": "B",
      "text": "He is wearing a shirt and jeans."
    },
    {
      "speaker": "A",
      "text": "Is she wearing a dress?"
    },
    {
      "speaker": "B",
      "text": "Yes, she is wearing a blue dress!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My friend is wearing a jacket. He is wearing jeans too. My sister is wearing a dress. She is wearing a cap. Everyone has their own style!",
  "questions": [
    "What is the friend wearing?",
    "What is the sister wearing?",
    "Does everyone have their own style?"
  ]
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "He is wearing ___.",
    "She is wearing ___.",
    "My friend is wearing ___."
  ]
}$json$::jsonb,
  true
),
(
  'be074df0-ee6e-43f4-b485-0cd45a93de07',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'He/She is wearing ___'",
    "Describe someone's outfit",
    "Talk about style"
  ],
  "challenge": "Describe what someone near you is wearing!"
}$json$::jsonb,
  true
);

-- Lesson 3: Style and Color
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  'Style and Color',
  'A1',
  'teens',
  9,
  3,
  'Describe clothes with colors.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
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
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What color shirt do you like?",
    "Do you wear black clothes?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Black",
      "bg": "#FAECE7"
    },
    {
      "word": "White",
      "bg": "#E1F5EE"
    },
    {
      "word": "Red Shirt",
      "bg": "#EEEDFE"
    },
    {
      "word": "Blue Jeans",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is your shirt?",
    "Do you like black clothes?"
  ],
  "student": [
    "My shirt is red.",
    "Yes, I like black clothes!"
  ],
  "note": "Describe your real clothes with colors!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [red shirt]."
    },
    {
      "speaker": "B",
      "text": "I have [blue jeans]."
    },
    {
      "speaker": "A",
      "text": "I like [black] shoes."
    }
  ],
  "blanks": [
    "red shirt",
    "blue jeans",
    "black"
  ]
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What color is your shirt?"
    },
    {
      "speaker": "B",
      "text": "My shirt is white."
    },
    {
      "speaker": "A",
      "text": "I have blue jeans!"
    },
    {
      "speaker": "B",
      "text": "Blue jeans are cool!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a red shirt. I have blue jeans. I like black shoes. My favorite outfit is my red shirt and blue jeans. Colors make clothes fun!",
  "questions": [
    "What color is the shirt?",
    "What color are the jeans?",
    "What is the favorite outfit?"
  ]
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ ___ (color + item).",
    "My favorite outfit is ___.",
    "I like ___ clothes."
  ]
}$json$::jsonb,
  true
),
(
  'd810add2-a802-4d8f-98bc-2861b25467d3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe clothes with colors",
    "Say 'I have a ___ ___'",
    "Talk about a favorite outfit"
  ],
  "challenge": "Describe your favorite outfit using colors!"
}$json$::jsonb,
  true
);

-- Lesson 4: Shopping for Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  'Shopping for Clothes',
  'A1',
  'teens',
  9,
  4,
  'Ask for a clothing item simply.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
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
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "Do you like shopping for clothes?",
    "What clothes do you want to buy?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I Want",
      "bg": "#FAECE7"
    },
    {
      "word": "Can I Have This",
      "bg": "#E1F5EE"
    },
    {
      "word": "Shop",
      "bg": "#EEEDFE"
    },
    {
      "word": "Buy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you want?",
    "Can I help you?"
  ],
  "student": [
    "I want a jacket.",
    "Can I have this shirt, please?"
  ],
  "note": "Practice like you're really in a clothes shop!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I want] a jacket."
    },
    {
      "speaker": "B",
      "text": "[Can I have this] shirt?"
    },
    {
      "speaker": "A",
      "text": "I want to [buy] shoes."
    }
  ],
  "blanks": [
    "I want",
    "Can I have this",
    "buy"
  ]
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you want to buy?"
    },
    {
      "speaker": "B",
      "text": "I want a new jacket."
    },
    {
      "speaker": "A",
      "text": "Can I have this shirt, please?"
    },
    {
      "speaker": "B",
      "text": "Yes, of course!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go shopping for clothes. I want a jacket. I say, 'Can I have this shirt, please?' Shopping is fun when I know the right words!",
  "questions": [
    "What does the writer want?",
    "What does the writer say in the shop?",
    "Is shopping fun?"
  ]
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want a ___.",
    "Can I have this ___?",
    "I want to buy ___."
  ]
}$json$::jsonb,
  true
),
(
  '63bf9aa7-6b86-4933-b17d-4cdacc0d7abe',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I want a ___'",
    "Say 'Can I have this ___?'",
    "Practice shopping for clothes"
  ],
  "challenge": "Ask me for a piece of clothing like you're in a shop!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  'Unit Review',
  'A1',
  'teens',
  9,
  5,
  'Describe clothes, colors, and a simple shopping request.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
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
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👕",
  "questions": [
    "What clothes words do you remember?",
    "What are you wearing today?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Shirt",
      "bg": "#FAECE7"
    },
    {
      "word": "Jeans",
      "bg": "#E1F5EE"
    },
    {
      "word": "Wearing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Buy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you wearing?",
    "What do you want to buy?"
  ],
  "student": [
    "I'm wearing a shirt.",
    "I want to buy shoes."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [wearing] a shirt."
    },
    {
      "speaker": "B",
      "text": "I have blue [jeans]."
    },
    {
      "speaker": "A",
      "text": "I want to [buy] a jacket."
    }
  ],
  "blanks": [
    "wearing",
    "jeans",
    "buy"
  ]
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you wearing today?"
    },
    {
      "speaker": "B",
      "text": "I'm wearing a red shirt and jeans."
    },
    {
      "speaker": "A",
      "text": "What do you want to buy?"
    },
    {
      "speaker": "B",
      "text": "I want to buy new shoes!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I am wearing a red shirt and blue jeans. I like black shoes too. When I go shopping, I say 'I want' and 'Can I have this?' Clothes and style are fun!",
  "questions": [
    "What is the writer wearing?",
    "What color shoes does the writer like?",
    "What does the writer say when shopping?"
  ]
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am wearing ___.",
    "I like ___ clothes.",
    "I want to buy ___."
  ]
}$json$::jsonb,
  true
),
(
  '6ab9bdda-a8ce-4cb4-8dda-badd3af034e3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name clothes items",
    "Describe clothes with colors",
    "Describe what someone is wearing",
    "Ask for clothes in a shop"
  ],
  "challenge": "Describe your outfit and then 'buy' something from me!"
}$json$::jsonb,
  true
);

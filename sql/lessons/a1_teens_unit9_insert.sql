-- A1 Teens Unit 9: Clothes and Style (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Clothes and Style
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  'Clothes and Style',
  'A1',
  'teens',
  9,
  1,
  'Name clothes items. [Bridge, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
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
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👕",
  "questions": [
    "What are you wearing today?",
    "Do you have jeans?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
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
      "word": "Shoes",
      "bg": "#EEEDFE"
    },
    {
      "word": "Jacket",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you wearing?",
    "Do you have a jacket?"
  ],
  "student": [
    "I'm wearing a shirt.",
    "Yes, I have a jacket."
  ],
  "note": "Point to something you're wearing!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm wearing a [shirt]."
    },
    {
      "speaker": "B",
      "text": "I have [jeans] and [shoes]."
    },
    {
      "speaker": "A",
      "text": "I have a [jacket] too."
    }
  ],
  "blanks": [
    "shirt",
    "jeans",
    "jacket"
  ]
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm wearing a shirt and jeans."
    },
    {
      "speaker": "B",
      "text": "I'm wearing shoes and a jacket."
    },
    {
      "speaker": "A",
      "text": "I like your jacket!"
    },
    {
      "speaker": "B",
      "text": "Thank you!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole outfit description together."
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'm wearing a shirt and jeans today. I have shoes too. My jacket is at home.",
  "questions": [
    "What is the writer wearing?",
    "What does the writer have?",
    "Where is the jacket?"
  ]
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm wearing a ___.",
    "I have ___ and ___.",
    "My ___ is at home."
  ]
}$json$::jsonb,
  true
),
(
  'e790deeb-0312-4491-86cb-a4a0f496da0d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 clothes items",
    "Say 'I'm wearing ___'",
    "Talk about my clothes today"
  ],
  "challenge": "Tell me what you're wearing today!"
}$json$::jsonb,
  true
);

-- Lesson 2: What Are You Wearing?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  'What Are You Wearing?',
  'A1',
  'teens',
  9,
  2,
  'Describe clothes with color and connector ''and''. [Bridge, L2, format M: teacher models, student echoes]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
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
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What color is your shirt?",
    "Do you like red or blue?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
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
      "word": "And",
      "bg": "#EEEDFE"
    },
    {
      "word": "Black",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What color is your shirt?",
    "Do you like red and blue?"
  ],
  "student": [
    "My shirt is blue.",
    "I like red and blue."
  ],
  "note": "Use the word bank: red, blue, and, black.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My shirt is [red] [and] my jeans are [blue]."
    },
    {
      "speaker": "B",
      "text": "My shoes are [black]."
    },
    {
      "speaker": "A",
      "text": "I like red and black."
    }
  ],
  "blanks": [
    "red",
    "and",
    "black"
  ]
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My shirt is red and my jeans are blue."
    },
    {
      "speaker": "B",
      "text": "My shoes are black and my jacket is blue."
    },
    {
      "speaker": "A",
      "text": "Nice colors!"
    },
    {
      "speaker": "B",
      "text": "Thanks!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My shirt is red and my jeans are blue. My shoes are black. I like red and blue together.",
  "questions": [
    "What color is the shirt?",
    "What color are the shoes?",
    "What two colors does the writer like together?"
  ]
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My shirt is ___ and my ___ is ___.",
    "My shoes are ___.",
    "I like ___ and ___."
  ]
}$json$::jsonb,
  true
),
(
  '4e091757-6e6e-4e18-b563-40bf5ffd6b29',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name clothes colors",
    "Use 'and' to join two ideas",
    "Describe an outfit with colors"
  ],
  "challenge": "Tell me the colors of your clothes today!"
}$json$::jsonb,
  true
);

-- Lesson 3: Style and Color
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  'Style and Color',
  'A1',
  'teens',
  9,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
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
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👟",
  "questions": [
    "Is your favorite shirt old or new?",
    "Are your shoes comfortable?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "But",
      "bg": "#FAECE7"
    },
    {
      "word": "Comfortable",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nice",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are your shoes comfortable?",
    "Is your jacket old or new?"
  ],
  "student": [
    "Yes, they are comfortable.",
    "It's old, but I like it."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My jacket is old, [but] I like it."
    },
    {
      "speaker": "B",
      "text": "My shoes are [comfortable]."
    },
    {
      "speaker": "A",
      "text": "They are [nice] too."
    }
  ],
  "blanks": [
    "but",
    "comfortable",
    "nice"
  ]
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your jacket old or new?"
    },
    {
      "speaker": "B",
      "text": "It's old, but I like it. Are your shoes comfortable?"
    },
    {
      "speaker": "A",
      "text": "Yes, they're comfortable and nice."
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
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My jacket is old, but I like it. My shoes are new. They are comfortable and nice.",
  "questions": [
    "Is the jacket old or new?",
    "Does the writer like the jacket?",
    "Are the shoes comfortable?"
  ]
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is old, but ___.",
    "My ___ are comfortable.",
    "I like them because ___."
  ]
}$json$::jsonb,
  true
),
(
  '3eaad0fc-c695-4d2d-8544-025627e60549',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'but' to join two ideas",
    "Say 'comfortable' and 'nice'",
    "Give a simple opinion about clothes"
  ],
  "challenge": "Tell me about an old thing you still like, using 'but'!"
}$json$::jsonb,
  true
);

-- Lesson 4: Shopping for Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1a081261-75c1-4e7e-9333-080fb1152674',
  'Shopping for Clothes',
  'A1',
  'teens',
  9,
  4,
  'Unchanged by the rotation rework -- L4 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
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
  '1a081261-75c1-4e7e-9333-080fb1152674',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "Do you like shopping for clothes?",
    "Do you try clothes on first?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "How much",
      "bg": "#FAECE7"
    },
    {
      "word": "Try on",
      "bg": "#E1F5EE"
    },
    {
      "word": "Buy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Size",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much is this shirt?",
    "Can I try it on?"
  ],
  "student": [
    "It's 10 dollars.",
    "Yes, you can try it on."
  ],
  "note": "Put it all together: color + opinion + shopping words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How much] is this jacket?"
    },
    {
      "speaker": "B",
      "text": "Can I [try on] this shirt?"
    },
    {
      "speaker": "A",
      "text": "I want to [buy] it."
    }
  ],
  "blanks": [
    "how much",
    "try on",
    "buy"
  ]
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much is this jacket?"
    },
    {
      "speaker": "B",
      "text": "It's 20 dollars. Can I help you?"
    },
    {
      "speaker": "A",
      "text": "Can I try it on? I like the color, but I want the right size."
    },
    {
      "speaker": "B",
      "text": "Of course!"
    }
  ],
  "note": "Mini role-play: shop for clothes at a pretend store."
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How much is this jacket? It's 20 dollars. Can I try it on? I like the color, but I want the right size. I want to buy it.",
  "questions": [
    "How much is the jacket?",
    "What does the customer want to do first?",
    "Does the customer want to buy it?"
  ]
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "How much is this ___?",
    "Can I try on this ___?",
    "I want to buy ___."
  ]
}$json$::jsonb,
  true
),
(
  '1a081261-75c1-4e7e-9333-080fb1152674',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'How much is this?'",
    "Ask to try something on",
    "Say 'I want to buy ___'"
  ],
  "challenge": "Go shopping with me! Ask about a price and try something on."
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  'Unit Review',
  'A1',
  'teens',
  9,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
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
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👕",
  "questions": [
    "What are you wearing today?",
    "Do you like shopping?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
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
      "word": "Color",
      "bg": "#E1F5EE"
    },
    {
      "word": "But",
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
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you wearing?",
    "Do you like shopping for clothes?"
  ],
  "student": [
    "I'm wearing a blue shirt.",
    "Yes, I like shopping."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [wearing] a red shirt."
    },
    {
      "speaker": "B",
      "text": "I like the [color]."
    },
    {
      "speaker": "A",
      "text": "It's old, [but] I like it."
    }
  ],
  "blanks": [
    "wearing",
    "color",
    "but"
  ]
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your clothes today."
    },
    {
      "speaker": "B",
      "text": "I'm wearing a red shirt and blue jeans. I like the colors together."
    },
    {
      "speaker": "A",
      "text": "My shoes are old, but I still like them."
    },
    {
      "speaker": "B",
      "text": "Nice style!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'm wearing a red shirt and blue jeans. I like the colors together. My shoes are old, but I still like them.",
  "questions": [
    "What is the writer wearing?",
    "What colors does the writer like together?",
    "Are the shoes old or new?"
  ]
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'm wearing ___.",
    "I like the ___.",
    "My ___ is old, but ___."
  ]
}$json$::jsonb,
  true
),
(
  'c6d9c4a7-694b-4313-8afa-732b97f49772',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my clothes and colors",
    "Give a simple opinion with 'but'",
    "Talk about shopping"
  ],
  "challenge": "Tell me all about your style and clothes!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 7: Food and Drinks (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a3a1564b-1039-4ead-aff1-de752284af66',
  'Food and Drinks',
  'A1',
  'adults',
  7,
  1,
  'Name common foods and drinks. [Combination, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
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
  'a3a1564b-1039-4ead-aff1-de752284af66',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "Do you drink coffee or tea?",
    "Do you eat cheese?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Coffee",
      "bg": "#FAECE7"
    },
    {
      "word": "Tea",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bread",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cheese",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you drink coffee?",
    "Do you eat cheese?"
  ],
  "student": [
    "Yes, I drink coffee.",
    "Yes, I eat cheese."
  ],
  "note": "Read the model text, then find the food words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink [coffee] every morning."
    },
    {
      "speaker": "B",
      "text": "I drink [tea] instead."
    },
    {
      "speaker": "A",
      "text": "I eat [bread] and [cheese]."
    }
  ],
  "blanks": [
    "coffee",
    "tea",
    "cheese"
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink coffee every morning."
    },
    {
      "speaker": "B",
      "text": "I drink tea instead."
    },
    {
      "speaker": "A",
      "text": "I eat bread and cheese for breakfast."
    },
    {
      "speaker": "B",
      "text": "Now tell me your own breakfast, using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to talk about breakfast, then use your own."
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I drink coffee every morning. I eat bread and cheese for breakfast.",
  "questions": [
    "What does the writer drink?",
    "When does the writer drink coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I drink ___.",
    "I eat ___.",
    "For breakfast, I have ___."
  ]
}$json$::jsonb,
  true
),
(
  'a3a1564b-1039-4ead-aff1-de752284af66',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods or drinks",
    "Say 'I drink/eat ___'",
    "Talk about my breakfast"
  ],
  "challenge": "Tell me what you eat and drink for breakfast!"
}$json$::jsonb,
  true
);

-- Lesson 2: Likes and Dislikes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  'Likes and Dislikes',
  'A1',
  'adults',
  7,
  2,
  'Say food likes and dislikes with a reason. [Combination, L2, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
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
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😋",
  "questions": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I like",
      "bg": "#FAECE7"
    },
    {
      "word": "I don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Delicious",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "student": [
    "Yes, I like coffee.",
    "I like it because it's delicious."
  ],
  "note": "Use the word bank: I like, I don't like, because, delicious.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] coffee [because] it's [delicious]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] tea."
    },
    {
      "speaker": "A",
      "text": "I like cheese too."
    }
  ],
  "blanks": [
    "i like",
    "because",
    "i don't like"
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like coffee because it's delicious."
    },
    {
      "speaker": "B",
      "text": "I like coffee too, because it's delicious!"
    },
    {
      "speaker": "A",
      "text": "I don't like tea."
    },
    {
      "speaker": "B",
      "text": "I don't like tea either."
    }
  ],
  "note": "Read the model line, then say a matching sentence about your own taste."
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like coffee because it's delicious. I don't like tea. I like cheese too.",
  "questions": [
    "Why does the writer like coffee?",
    "What doesn't the writer like?",
    "What else does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ because ___.",
    "I don't like ___.",
    "I also like ___."
  ]
}$json$::jsonb,
  true
),
(
  'ee22ac9d-6c95-481c-89dd-55e0db4c0975',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___ because ___'",
    "Say 'I don't like ___'",
    "Give a one-clause reason"
  ],
  "challenge": "Tell me a food you like and a food you don't like, with a reason!"
}$json$::jsonb,
  true
);

-- Lesson 3: Meals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  'Meals',
  'A1',
  'adults',
  7,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
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
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you usually eat for lunch?",
    "What do you eat for dinner?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Breakfast",
      "bg": "#FAECE7"
    },
    {
      "word": "Lunch",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dinner",
      "bg": "#EEEDFE"
    },
    {
      "word": "Usually",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you eat for breakfast?",
    "What do you eat for dinner?"
  ],
  "student": [
    "I usually eat eggs for breakfast.",
    "I eat rice for dinner."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "For [breakfast], I eat eggs."
    },
    {
      "speaker": "B",
      "text": "For [lunch], I eat a sandwich."
    },
    {
      "speaker": "A",
      "text": "I [usually] eat rice for dinner."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you eat for breakfast?"
    },
    {
      "speaker": "B",
      "text": "I usually eat eggs for breakfast. What do you eat for lunch?"
    },
    {
      "speaker": "A",
      "text": "I eat a sandwich for lunch. I eat rice for dinner."
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
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For breakfast, I eat eggs. For lunch, I eat a sandwich. For dinner, I usually eat rice.",
  "questions": [
    "What does the writer eat for breakfast?",
    "What does the writer eat for lunch?",
    "What does the writer usually eat for dinner?"
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For breakfast, I eat ___.",
    "For lunch, I eat ___.",
    "For dinner, I usually eat ___."
  ]
}$json$::jsonb,
  true
),
(
  '852dd17f-c2e2-46c5-9d5e-a8c25e65bad1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name breakfast, lunch, dinner foods",
    "Say 'For ___, I eat ___'",
    "Ask about mealtimes"
  ],
  "challenge": "Tell me what you eat for breakfast, lunch, and dinner!"
}$json$::jsonb,
  true
);

-- Lesson 4: Ordering in a Café
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  'Ordering in a Café',
  'A1',
  'adults',
  7,
  4,
  'Combine food vocabulary into an ordering conversation. [Combination, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
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
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "What would you order at a café?",
    "Do you eat here or take food to go?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Can I have",
      "bg": "#FAECE7"
    },
    {
      "word": "To go",
      "bg": "#E1F5EE"
    },
    {
      "word": "Here or to go",
      "bg": "#EEEDFE"
    },
    {
      "word": "Anything else",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can I get you?",
    "Here or to go?"
  ],
  "student": [
    "Can I have a coffee, please?",
    "Here, please."
  ],
  "note": "Put it all together: order + place + politeness.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    },
    {
      "speaker": "B",
      "text": "[Here or to go]?"
    },
    {
      "speaker": "A",
      "text": "[To go], please."
    }
  ],
  "blanks": [
    "can i have",
    "here or to go",
    "to go"
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you order, and here or to go?"
    },
    {
      "speaker": "B",
      "text": "Can I have a ___, please? ___, please."
    },
    {
      "speaker": "A",
      "text": "Anything else?"
    },
    {
      "speaker": "B",
      "text": "___."
    }
  ],
  "note": "Fill in your own order -- no word bank this time. Say your full order out loud."
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Can I have a coffee and some bread, please? Here or to go? To go, please.",
  "questions": [
    "What did the customer order?",
    "What did the barista ask?",
    "Did the customer want it here or to go?"
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Can I have ___, please?",
    "Here or to go?",
    "___, please."
  ]
}$json$::jsonb,
  true
),
(
  'a55f7987-d2b9-464f-9bf3-9034f0318185',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order politely with 'Can I have'",
    "Answer 'here or to go'",
    "Complete a café order"
  ],
  "challenge": "Order something from me at a pretend café!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  'Unit Review',
  'A1',
  'adults',
  7,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
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
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Food",
      "bg": "#FAECE7"
    },
    {
      "word": "Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Breakfast",
      "bg": "#EEEDFE"
    },
    {
      "word": "Can I have",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "student": [
    "My favorite food is cheese.",
    "I eat eggs for breakfast."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [food] is coffee and bread."
    },
    {
      "speaker": "B",
      "text": "I [like] cheese because it's tasty."
    },
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    }
  ],
  "blanks": [
    "food",
    "like",
    "can i have"
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite food and drink."
    },
    {
      "speaker": "B",
      "text": "My favorite food is cheese. I like coffee because it's delicious."
    },
    {
      "speaker": "A",
      "text": "I eat eggs for breakfast every day."
    },
    {
      "speaker": "B",
      "text": "Can I have a coffee, please?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite food is cheese. I like coffee because it's delicious. I eat eggs for breakfast every day.",
  "questions": [
    "What is the favorite food?",
    "Why does the writer like coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite food is ___.",
    "I like ___ because ___.",
    "For breakfast, I eat ___."
  ]
}$json$::jsonb,
  true
),
(
  'f9018768-ce06-4d07-972b-3a2ed25b7083',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about favorite food and drink",
    "Give a reason",
    "Order food politely"
  ],
  "challenge": "Tell me all about your favorite food and drinks!"
}$json$::jsonb,
  true
);

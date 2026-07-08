-- A1 Adults Unit 7: Food and Drinks (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6723fbac-e990-43ab-af81-1765804465e7',
  'Food and Drinks',
  'A1',
  'adults',
  7,
  1,
  'Name basic food and drink items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6723fbac-e990-43ab-af81-1765804465e7',
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
  '6723fbac-e990-43ab-af81-1765804465e7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you usually eat?",
    "Do you drink coffee or tea?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
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
      "word": "Rice",
      "bg": "#EEEDFE"
    },
    {
      "word": "Chicken",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you drink in the morning?",
    "Do you like chicken?"
  ],
  "student": [
    "I drink coffee.",
    "Yes, I like chicken!"
  ],
  "note": "Think about what you really eat and drink!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink [coffee]."
    },
    {
      "speaker": "B",
      "text": "I eat [rice]."
    },
    {
      "speaker": "A",
      "text": "I like [chicken]."
    }
  ],
  "blanks": [
    "coffee",
    "rice",
    "chicken"
  ]
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you drink in the morning?"
    },
    {
      "speaker": "B",
      "text": "I drink tea every morning."
    },
    {
      "speaker": "A",
      "text": "I drink coffee!"
    },
    {
      "speaker": "B",
      "text": "Coffee is great too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I drink coffee every morning. I eat rice and chicken for lunch. Sometimes I drink tea. Food and drinks are important every day!",
  "questions": [
    "What does the writer drink in the morning?",
    "What does the writer eat for lunch?",
    "Does the writer sometimes drink tea?"
  ]
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I drink ___.",
    "I eat ___.",
    "I like ___ for lunch."
  ]
}$json$::jsonb,
  true
),
(
  '6723fbac-e990-43ab-af81-1765804465e7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four foods/drinks",
    "Say 'I drink ___' / 'I eat ___'",
    "Talk about meals"
  ],
  "challenge": "Tell me what you usually eat and drink!"
}$json$::jsonb,
  true
);

-- Lesson 2: Likes and Dislikes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0129bc89-3834-47e7-8999-d1e436d82503',
  'Likes and Dislikes',
  'A1',
  'adults',
  7,
  2,
  'Say what food and drinks they like or don''t like.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
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
  '0129bc89-3834-47e7-8999-d1e436d82503',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What food do you like?",
    "What food don't you like?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Salad",
      "bg": "#FAECE7"
    },
    {
      "word": "Sweet",
      "bg": "#E1F5EE"
    },
    {
      "word": "Spicy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Healthy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like salad?",
    "Do you like spicy food?"
  ],
  "student": [
    "Yes, I love salad!",
    "No, I don't like spicy food."
  ],
  "note": "Give your real food opinions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] salad."
    },
    {
      "speaker": "B",
      "text": "I don't [like] spicy food."
    },
    {
      "speaker": "A",
      "text": "I like [healthy] food."
    }
  ],
  "blanks": [
    "like",
    "like",
    "healthy"
  ]
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like salad?"
    },
    {
      "speaker": "B",
      "text": "Yes, I eat salad every day."
    },
    {
      "speaker": "A",
      "text": "Do you like spicy food?"
    },
    {
      "speaker": "B",
      "text": "No, I don't like spicy food much."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like salad. I like healthy food. I don't like spicy food. I don't like sweet food very much. Everyone has different tastes!",
  "questions": [
    "What does the writer like?",
    "What does the writer not like?",
    "Do people have different tastes?"
  ]
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I don't like ___.",
    "My favorite food is ___."
  ]
}$json$::jsonb,
  true
),
(
  '0129bc89-3834-47e7-8999-d1e436d82503',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___'",
    "Say 'I don't like ___'",
    "Talk about food preferences"
  ],
  "challenge": "Tell me a food you like and one you don't!"
}$json$::jsonb,
  true
);

-- Lesson 3: Meals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  'Meals',
  'A1',
  'adults',
  7,
  3,
  'Talk about simple meal routines.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
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
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you eat for breakfast?",
    "What time do you have lunch?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
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
      "word": "Snack",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you eat for breakfast?",
    "Do you eat a snack?"
  ],
  "student": [
    "I eat toast for breakfast.",
    "Yes, I eat a snack in the afternoon!"
  ],
  "note": "Think about your real meals!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I eat [breakfast] at 7."
    },
    {
      "speaker": "B",
      "text": "I eat [lunch] at work."
    },
    {
      "speaker": "A",
      "text": "I eat [dinner] with my family."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "dinner"
  ]
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
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
      "text": "I eat eggs and coffee."
    },
    {
      "speaker": "A",
      "text": "What about lunch?"
    },
    {
      "speaker": "B",
      "text": "I eat rice and chicken at work!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat breakfast at 7. I eat lunch at work. I eat dinner with my family at 7pm. Sometimes I have a snack in the afternoon. I eat three meals a day!",
  "questions": [
    "What time does the writer eat breakfast?",
    "Where does the writer eat lunch?",
    "Who does the writer eat dinner with?"
  ]
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat breakfast at ___.",
    "I eat lunch at ___.",
    "I eat dinner with ___."
  ]
}$json$::jsonb,
  true
),
(
  '77104511-1bc9-4db2-a09b-0396e07a8447',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four meals",
    "Say meal times",
    "Talk about my meal routine"
  ],
  "challenge": "Tell me about your meals today!"
}$json$::jsonb,
  true
);

-- Lesson 4: Ordering in a Café
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  'Ordering in a Café',
  'A1',
  'adults',
  7,
  4,
  'Use a simple order in a café or restaurant situation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
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
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you say to order food?",
    "Have you ordered food in English?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
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
      "word": "Can I Have",
      "bg": "#E1F5EE"
    },
    {
      "word": "Menu",
      "bg": "#EEEDFE"
    },
    {
      "word": "Please",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
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
    "I want a coffee, please.",
    "Can I have the menu?"
  ],
  "note": "Practice ordering like you're really at a café!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I want] a coffee, please."
    },
    {
      "speaker": "B",
      "text": "[Can I have] the menu?"
    },
    {
      "speaker": "A",
      "text": "Thank you, [please]."
    }
  ],
  "blanks": [
    "I want",
    "Can I have",
    "please"
  ]
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you want?"
    },
    {
      "speaker": "B",
      "text": "I want a sandwich, please."
    },
    {
      "speaker": "A",
      "text": "Can I have some tea too?"
    },
    {
      "speaker": "B",
      "text": "Of course! Here you go."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I want a coffee, please. Can I have the menu too? Thank you! Ordering at a café is easy when you know simple phrases.",
  "questions": [
    "What does the writer want?",
    "What else does the writer ask for?",
    "Is ordering easy?"
  ]
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want a ___, please.",
    "Can I have ___?",
    "Thank you for the ___."
  ]
}$json$::jsonb,
  true
),
(
  'dc8737db-b7e1-4d70-92be-ffef7c9c4a62',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I want ___, please'",
    "Say 'Can I have ___?'",
    "Order food politely"
  ],
  "challenge": "Order your favorite drink from me right now!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  'Unit Review',
  'A1',
  'adults',
  7,
  5,
  'Talk about food, drinks, and simple preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
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
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What food words do you remember?",
    "What do you like to eat?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
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
      "word": "Salad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Breakfast",
      "bg": "#EEEDFE"
    },
    {
      "word": "Please",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you like?",
    "What do you want?"
  ],
  "student": [
    "I like coffee.",
    "I want water, please."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] coffee."
    },
    {
      "speaker": "B",
      "text": "I eat [breakfast] at 7."
    },
    {
      "speaker": "A",
      "text": "[Can I have] some water?"
    }
  ],
  "blanks": [
    "like",
    "breakfast",
    "Can I have"
  ]
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you like to eat?"
    },
    {
      "speaker": "B",
      "text": "I like salad and rice."
    },
    {
      "speaker": "A",
      "text": "What do you want to drink?"
    },
    {
      "speaker": "B",
      "text": "I want coffee, please!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like coffee and salad. I don't like spicy food. I eat breakfast at 7 and lunch at work. When I order food, I say 'I want' and 'please'. Food is important to me!",
  "questions": [
    "What does the writer like?",
    "What time is breakfast?",
    "How does the writer order food?"
  ]
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I eat ___ at ___.",
    "I want ___, please."
  ]
}$json$::jsonb,
  true
),
(
  'fa414a99-9ea3-4e56-893f-c4e1b4e5fc85',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name foods and drinks",
    "Say likes and dislikes",
    "Talk about meals",
    "Order food politely"
  ],
  "challenge": "Order a meal from me, from start to finish!"
}$json$::jsonb,
  true
);

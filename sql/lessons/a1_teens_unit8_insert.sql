-- A1 Teens Unit 8: Food and Drinks (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  'Food and Drinks',
  'A1',
  'teens',
  8,
  1,
  'Name basic food and drink items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
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
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥤",
  "questions": [
    "What do you usually eat?",
    "Do you drink tea or juice?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Water",
      "bg": "#FAECE7"
    },
    {
      "word": "Tea",
      "bg": "#E1F5EE"
    },
    {
      "word": "Juice",
      "bg": "#EEEDFE"
    },
    {
      "word": "Bread",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you drink?",
    "Do you like tea?"
  ],
  "student": [
    "I drink water.",
    "Yes, I like tea!"
  ],
  "note": "Think about what you really eat and drink!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink [water]."
    },
    {
      "speaker": "B",
      "text": "I like [juice]."
    },
    {
      "speaker": "A",
      "text": "I eat [bread]."
    }
  ],
  "blanks": [
    "water",
    "juice",
    "bread"
  ]
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you drink?"
    },
    {
      "speaker": "B",
      "text": "I drink tea every morning."
    },
    {
      "speaker": "A",
      "text": "I like juice!"
    },
    {
      "speaker": "B",
      "text": "Juice is great too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I drink water every day. I like tea in the morning. Sometimes I drink juice. I eat bread and rice. Food and drinks are important!",
  "questions": [
    "What does the writer drink every day?",
    "When does the writer drink tea?",
    "What food does the writer eat?"
  ]
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I drink ___.",
    "I eat ___.",
    "I like ___ in the morning."
  ]
}$json$::jsonb,
  true
),
(
  'defc5acd-4141-4102-859c-6c6fc03c4c0a',
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
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  'Likes and Dislikes',
  'A1',
  'teens',
  8,
  2,
  'Say what food and drinks they like or don''t like.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
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
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "What food do you like?",
    "What food don't you like?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Pizza",
      "bg": "#FAECE7"
    },
    {
      "word": "Vegetables",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sweet",
      "bg": "#EEEDFE"
    },
    {
      "word": "Spicy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like pizza?",
    "Do you like spicy food?"
  ],
  "student": [
    "Yes, I love pizza!",
    "No, I don't like spicy food."
  ],
  "note": "Give your real food opinions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
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
      "text": "I don't [like] vegetables."
    },
    {
      "speaker": "A",
      "text": "I like [sweet] food."
    }
  ],
  "blanks": [
    "like",
    "like",
    "sweet"
  ]
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like pizza?"
    },
    {
      "speaker": "B",
      "text": "Yes, I love pizza!"
    },
    {
      "speaker": "A",
      "text": "Do you like vegetables?"
    },
    {
      "speaker": "B",
      "text": "No, I don't like vegetables much."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. I like sweet food. I don't like spicy food. I don't like vegetables very much. Everyone has different tastes!",
  "questions": [
    "What does the writer like?",
    "What does the writer not like?",
    "Do people have different tastes?"
  ]
}$json$::jsonb,
  true
),
(
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
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
  'a6d77b79-6d55-47a8-a8b5-f402f4514acf',
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

-- Lesson 3: At Mealtimes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
  'At Mealtimes',
  'A1',
  'teens',
  8,
  3,
  'Talk about simple meal routines.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you eat for breakfast?",
    "What time do you have lunch?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
    "I eat bread for breakfast.",
    "Yes, I eat a snack after school!"
  ],
  "note": "Think about your real meals!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
      "text": "I eat [lunch] at school."
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
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
      "text": "I eat bread and eggs."
    },
    {
      "speaker": "A",
      "text": "What about lunch?"
    },
    {
      "speaker": "B",
      "text": "I eat rice and chicken at school!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat breakfast at 7. I eat lunch at school. I eat dinner with my family at 7pm. Sometimes I have a snack after school. I eat three meals a day!",
  "questions": [
    "What time does the writer eat breakfast?",
    "Where does the writer eat lunch?",
    "Who does the writer eat dinner with?"
  ]
}$json$::jsonb,
  true
),
(
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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
  'eab0dd26-2823-461a-90f1-7a429c1fa35e',
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

-- Lesson 4: Ordering Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
  'Ordering Food',
  'A1',
  'teens',
  8,
  4,
  'Use a simple order in a food situation.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "What do you say to order food?",
    "Have you ordered food in English?"
  ],
  "title": "Let's Start!"
}$json$::jsonb,
  true
),
(
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
      "word": "Please",
      "bg": "#EEEDFE"
    },
    {
      "word": "Menu",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
    "I want a pizza, please.",
    "Can I have some water?"
  ],
  "note": "Practice ordering like you're really at a restaurant!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I want] a pizza, please."
    },
    {
      "speaker": "B",
      "text": "[Can I have] some juice?"
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
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
      "text": "Can I have some water too?"
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
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I want a pizza, please. Can I have some juice too? Thank you! Ordering food is easy when you know simple phrases.",
  "questions": [
    "What does the writer want?",
    "What else does the writer ask for?",
    "Is ordering food easy?"
  ]
}$json$::jsonb,
  true
),
(
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
  '0eae2f7e-44b2-4c1f-a16a-f5fbc4fc8769',
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
  "challenge": "Order your favorite food from me right now!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
  'Unit Review',
  'A1',
  'teens',
  8,
  5,
  'Talk about food, drinks, and simple preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "What food words do you remember?",
    "What do you like to eat?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Water",
      "bg": "#FAECE7"
    },
    {
      "word": "Pizza",
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
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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
    "I like pizza.",
    "I want water, please."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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
      "text": "I like pizza and bread."
    },
    {
      "speaker": "A",
      "text": "What do you want to drink?"
    },
    {
      "speaker": "B",
      "text": "I want juice, please!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza and bread. I don't like spicy food. I eat breakfast at 7 and lunch at school. When I order food, I say 'I want' and 'please'. Food is important to me!",
  "questions": [
    "What does the writer like?",
    "What time is breakfast?",
    "How does the writer order food?"
  ]
}$json$::jsonb,
  true
),
(
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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
  '7b8097e1-7f5e-4dc9-97e7-dfc5086dc1c0',
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

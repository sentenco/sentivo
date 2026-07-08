-- A1 Kids Unit 8: Food I Like (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  'Food',
  'A1',
  'kids',
  8,
  1,
  'Identify common food items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
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
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍞",
  "questions": [
    "What did you eat today?",
    "What is your favorite food?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bread",
      "bg": "#FAECE7"
    },
    {
      "word": "Rice",
      "bg": "#E1F5EE"
    },
    {
      "word": "Egg",
      "bg": "#EEEDFE"
    },
    {
      "word": "Milk",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this rice?"
  ],
  "student": [
    "It is rice.",
    "Yes, it is bread!"
  ],
  "note": "Think about food you ate today!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [bread]."
    },
    {
      "speaker": "B",
      "text": "This is [rice]."
    },
    {
      "speaker": "A",
      "text": "This is [milk]."
    }
  ],
  "blanks": [
    "bread",
    "rice",
    "milk"
  ]
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is this?"
    },
    {
      "speaker": "B",
      "text": "It is an egg!"
    },
    {
      "speaker": "A",
      "text": "What did you eat today?"
    },
    {
      "speaker": "B",
      "text": "I ate rice and chicken!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat food every day. I eat bread. I eat rice. I eat eggs. I drink milk. Food makes me strong!",
  "questions": [
    "What does the writer eat?",
    "Does the writer drink milk?",
    "Why is food important?"
  ]
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___.",
    "I drink ___.",
    "My favorite food is ___."
  ]
}$json$::jsonb,
  true
),
(
  '5a79ef5b-25d9-41f0-a410-b6a142a0d69e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four foods",
    "Say 'This is ___'",
    "Talk about food I eat"
  ],
  "challenge": "Tell me what you ate today!"
}$json$::jsonb,
  true
);

-- Lesson 2: Fruits
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  'Fruits',
  'A1',
  'kids',
  8,
  2,
  'Name common fruits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
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
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "What is your favorite fruit?",
    "Do you like apples?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Apple",
      "bg": "#FAECE7"
    },
    {
      "word": "Banana",
      "bg": "#E1F5EE"
    },
    {
      "word": "Orange",
      "bg": "#EEEDFE"
    },
    {
      "word": "Grapes",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What fruit is this?",
    "Do you like bananas?"
  ],
  "student": [
    "It is an apple.",
    "Yes, I like bananas!"
  ],
  "note": "Think of your favorite fruit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [apples]."
    },
    {
      "speaker": "B",
      "text": "I like [bananas]."
    },
    {
      "speaker": "A",
      "text": "I like [oranges]."
    }
  ],
  "blanks": [
    "apples",
    "bananas",
    "oranges"
  ]
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite fruit?"
    },
    {
      "speaker": "B",
      "text": "My favorite fruit is grapes."
    },
    {
      "speaker": "A",
      "text": "I like oranges!"
    },
    {
      "speaker": "B",
      "text": "Oranges are yummy!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like fruit. I like apples. I like bananas. I like oranges. My favorite fruit is grapes. Fruit is sweet and healthy!",
  "questions": [
    "What fruits does the writer like?",
    "What is the writer's favorite fruit?",
    "Is fruit healthy?"
  ]
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "My favorite fruit is ___.",
    "___ is sweet."
  ]
}$json$::jsonb,
  true
),
(
  '9ec61994-abee-4ca8-a187-4ffbf6914dc5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four fruits",
    "Say 'I like ___'",
    "Talk about favorite fruit"
  ],
  "challenge": "Tell me your favorite fruit!"
}$json$::jsonb,
  true
);

-- Lesson 3: I Like / I Don't Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  'I Like / I Don''t Like',
  'A1',
  'kids',
  8,
  3,
  'Express simple food preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
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
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😋",
  "questions": [
    "What food do you like?",
    "What food don't you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Chicken",
      "bg": "#FAECE7"
    },
    {
      "word": "Vegetables",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cake",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fish",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like vegetables?",
    "Do you like cake?"
  ],
  "student": [
    "I don't like vegetables.",
    "Yes, I like cake!"
  ],
  "note": "Think of one food you like and one you don't!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [like] chicken."
    },
    {
      "speaker": "B",
      "text": "I don't [like] fish."
    },
    {
      "speaker": "A",
      "text": "I like [cake]."
    }
  ],
  "blanks": [
    "like",
    "like",
    "cake"
  ]
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like vegetables?"
    },
    {
      "speaker": "B",
      "text": "No, I don't like vegetables."
    },
    {
      "speaker": "A",
      "text": "Do you like chicken?"
    },
    {
      "speaker": "B",
      "text": "Yes, I like chicken!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like chicken. I like cake. I don't like fish. I don't like vegetables very much. Everyone likes different food!",
  "questions": [
    "What food does the writer like?",
    "What food does the writer not like?",
    "Does everyone like the same food?"
  ]
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I don't like ___.",
    "My friend likes ___."
  ]
}$json$::jsonb,
  true
),
(
  '419ccf14-e86a-461b-aa2d-cae8af0dc47a',
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
  "challenge": "Tell me one food you like and one you don't like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Healthy Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  'Healthy Food',
  'A1',
  'kids',
  8,
  4,
  'Recognize simple healthy food.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
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
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥦",
  "questions": [
    "What food is healthy?",
    "Do you eat vegetables?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Healthy",
      "bg": "#FAECE7"
    },
    {
      "word": "Carrot",
      "bg": "#E1F5EE"
    },
    {
      "word": "Broccoli",
      "bg": "#EEEDFE"
    },
    {
      "word": "Water",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this healthy?",
    "Do you drink water?"
  ],
  "student": [
    "Yes, it is healthy.",
    "Yes, I drink water every day!"
  ],
  "note": "Think about food that is good for you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Carrots are [healthy]."
    },
    {
      "speaker": "B",
      "text": "I eat [broccoli]."
    },
    {
      "speaker": "A",
      "text": "I drink [water]."
    }
  ],
  "blanks": [
    "healthy",
    "broccoli",
    "water"
  ]
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's healthy?"
    },
    {
      "speaker": "B",
      "text": "Carrots and broccoli are healthy!"
    },
    {
      "speaker": "A",
      "text": "I eat vegetables. It's healthy!"
    },
    {
      "speaker": "B",
      "text": "I drink water every day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat healthy food. I eat carrots. I eat broccoli. I drink water every day. Healthy food makes me strong and happy!",
  "questions": [
    "What healthy food does the writer eat?",
    "Does the writer drink water?",
    "How does healthy food make the writer feel?"
  ]
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___. It's healthy.",
    "I drink ___.",
    "Healthy food makes me ___."
  ]
}$json$::jsonb,
  true
),
(
  '87e2a439-0b86-4bbc-9d99-bf0fbb408d3e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name healthy foods",
    "Say 'It's healthy'",
    "Talk about healthy eating"
  ],
  "challenge": "Name one healthy food you eat!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  'Unit Review',
  'A1',
  'kids',
  8,
  5,
  'Review food vocabulary and preference language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
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
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "What foods do you remember?",
    "What do you like to eat?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bread",
      "bg": "#FAECE7"
    },
    {
      "word": "Apple",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chicken",
      "bg": "#EEEDFE"
    },
    {
      "word": "Water",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Do you like it?"
  ],
  "student": [
    "It is an apple.",
    "Yes, I like it!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is [bread]."
    },
    {
      "speaker": "B",
      "text": "I like [apples]."
    },
    {
      "speaker": "A",
      "text": "I don't [like] fish."
    }
  ],
  "blanks": [
    "bread",
    "apples",
    "like"
  ]
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite food?"
    },
    {
      "speaker": "B",
      "text": "My favorite food is chicken."
    },
    {
      "speaker": "A",
      "text": "I like apples and water!"
    },
    {
      "speaker": "B",
      "text": "Healthy food is good for us!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I eat many foods. I eat bread and rice. I like apples and bananas. I don't like fish. I drink water every day. I try to eat healthy food!",
  "questions": [
    "What does the writer eat?",
    "What fruit does the writer like?",
    "What does the writer not like?"
  ]
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I eat ___.",
    "I like ___.",
    "I don't like ___."
  ]
}$json$::jsonb,
  true
),
(
  '96d5c817-c957-4069-8a39-bfe4e37f63ca',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name foods and fruits",
    "Say 'I like ___' / 'I don't like ___'",
    "Talk about healthy food"
  ],
  "challenge": "Tell me three foods you like and one you don't!"
}$json$::jsonb,
  true
);

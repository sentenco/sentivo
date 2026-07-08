-- A2 Kids Unit 8: Food, Cooking, and Healthy Habits (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Meals and Snacks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  'Meals and Snacks',
  'A2',
  'kids',
  8,
  1,
  'Talk about simple meals and snacks during the day.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you eat for breakfast?",
    "What is your favorite snack?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
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
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you eat for breakfast?",
    "What is your favorite snack?"
  ],
  "student": [
    "For breakfast I eat eggs.",
    "My favorite snack is fruit."
  ],
  "note": "Think about what you eat every day!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "For [breakfast] I eat eggs and toast."
    },
    {
      "speaker": "B",
      "text": "For [lunch] I eat a sandwich."
    },
    {
      "speaker": "A",
      "text": "My favorite [snack] is fruit."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "snack"
  ]
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
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
      "text": "I eat eggs and toast. What about lunch?"
    },
    {
      "speaker": "A",
      "text": "For lunch I eat soup and a sandwich."
    },
    {
      "speaker": "B",
      "text": "That sounds delicious!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia's day of food. For breakfast, she eats eggs and toast. For lunch, she eats a sandwich and juice. For dinner, she eats soup and rice. Her favorite snack is fruit in the afternoon.",
  "questions": [
    "What does Mia eat for breakfast?",
    "What does Mia eat for dinner?",
    "What is Mia's favorite snack?"
  ]
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For breakfast, I eat ___.",
    "For lunch, I eat ___.",
    "My favorite snack is ___."
  ]
}$json$::jsonb,
  true
),
(
  '2e3fe0b8-4ebb-421f-871f-043cfb004999',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name meals of the day",
    "Say what I eat for each meal",
    "Talk about my favorite snack"
  ],
  "challenge": "Tell me what you eat in one whole day!"
}$json$::jsonb,
  true
);

-- Lesson 2: A Simple Recipe
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  'A Simple Recipe',
  'A2',
  'kids',
  8,
  2,
  'Understand and describe a very simple recipe using sequencing words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥗",
  "questions": [
    "Do you help cook at home?",
    "What is your favorite recipe?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cut",
      "bg": "#FAECE7"
    },
    {
      "word": "Mix",
      "bg": "#E1F5EE"
    },
    {
      "word": "Add",
      "bg": "#EEEDFE"
    },
    {
      "word": "Recipe",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do first?",
    "What do you add next?"
  ],
  "student": [
    "First, I cut the fruit.",
    "Then, I mix it together."
  ],
  "note": "Think about the steps of a recipe!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "First, we [cut] the apples."
    },
    {
      "speaker": "B",
      "text": "Then, we [mix] the fruit."
    },
    {
      "speaker": "A",
      "text": "Finally, we [add] some honey."
    }
  ],
  "blanks": [
    "cut",
    "mix",
    "add"
  ]
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do you make a fruit salad?"
    },
    {
      "speaker": "B",
      "text": "First, we cut the apples and bananas. Then, we mix them together."
    },
    {
      "speaker": "A",
      "text": "After that, we add some honey. Finally, we eat it!"
    },
    {
      "speaker": "B",
      "text": "Yum, that sounds tasty!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How to make a fruit salad. First, cut the apples and bananas. Then, mix the fruit in a bowl. After that, add a little honey. Finally, enjoy your fruit salad! It is healthy and sweet.",
  "questions": [
    "What do you do first?",
    "What do you add after mixing?",
    "Is the fruit salad healthy?"
  ]
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we ___.",
    "Then, we ___.",
    "Finally, we ___."
  ]
}$json$::jsonb,
  true
),
(
  'cfd7cdf7-505e-4f1d-a40c-3ce2b640a7f8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a simple recipe in order",
    "Use cooking verbs: cut, mix, add",
    "Use sequencing words"
  ],
  "challenge": "Tell me the steps of your favorite simple recipe!"
}$json$::jsonb,
  true
);

-- Lesson 3: Healthy or Not?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  'Healthy or Not?',
  'A2',
  'kids',
  8,
  3,
  'Compare foods and say which are healthier using simple reasons.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🥦",
  "questions": [
    "Is fruit healthy or unhealthy?",
    "What healthy food do you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
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
      "word": "Unhealthy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Vegetables",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sugar",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is this food healthy?",
    "Why is it healthy or unhealthy?"
  ],
  "student": [
    "Yes, vegetables are healthy.",
    "Candy is unhealthy because it has a lot of sugar."
  ],
  "note": "Think about why a food is healthy or not!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Vegetables] are healthier than candy."
    },
    {
      "speaker": "B",
      "text": "Candy has too much [sugar]."
    },
    {
      "speaker": "A",
      "text": "Fruit is a [healthy] snack."
    }
  ],
  "blanks": [
    "vegetables",
    "sugar",
    "healthy"
  ]
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is this lunchbox healthy?"
    },
    {
      "speaker": "B",
      "text": "Yes, it has vegetables and fruit. It is healthier than mine."
    },
    {
      "speaker": "A",
      "text": "My lunchbox has candy. It has too much sugar!"
    },
    {
      "speaker": "B",
      "text": "Maybe add some fruit next time!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two lunchboxes are different. Mia's lunchbox has a sandwich, carrots, and an apple. It is healthy. Leo's lunchbox has candy and chips. It has too much sugar and is less healthy. Mia's lunchbox is healthier than Leo's.",
  "questions": [
    "What is in Mia's lunchbox?",
    "What is in Leo's lunchbox?",
    "Whose lunchbox is healthier?"
  ]
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is healthier than ___.",
    "___ has too much sugar.",
    "A healthy food I like is ___."
  ]
}$json$::jsonb,
  true
),
(
  'd6bba5de-d91d-4047-84ff-c961fbe15f4c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare healthy and unhealthy foods",
    "Use 'healthier than'",
    "Give a reason with 'because'"
  ],
  "challenge": "Tell me about a healthy meal you like!"
}$json$::jsonb,
  true
);

-- Lesson 4: Yesterday's Picnic
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  'Yesterday''s Picnic',
  'A2',
  'kids',
  8,
  4,
  'Talk about a simple past picnic or meal event.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧺",
  "questions": [
    "Have you had a picnic?",
    "What did you eat at a picnic?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ate",
      "bg": "#FAECE7"
    },
    {
      "word": "Drank",
      "bg": "#E1F5EE"
    },
    {
      "word": "Made",
      "bg": "#EEEDFE"
    },
    {
      "word": "Picnic",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you eat at the picnic?",
    "Did you have fun?"
  ],
  "student": [
    "I ate a sandwich.",
    "Yes, it was a lot of fun."
  ],
  "note": "Think about a picnic or meal you remember!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Yesterday, we [ate] sandwiches."
    },
    {
      "speaker": "B",
      "text": "We [drank] juice."
    },
    {
      "speaker": "A",
      "text": "We [made] a fruit salad together."
    }
  ],
  "blanks": [
    "ate",
    "drank",
    "made"
  ]
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do at the picnic yesterday?"
    },
    {
      "speaker": "B",
      "text": "First, we made sandwiches. Then, we ate and drank juice."
    },
    {
      "speaker": "A",
      "text": "After that, we played games. Finally, we shared a fruit salad."
    },
    {
      "speaker": "B",
      "text": "That sounds like a perfect picnic!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, my family had a picnic in the park. First, we made sandwiches at home. Then, we ate them under a big tree. We drank juice and played games. Finally, we shared a fruit salad. It was a wonderful day.",
  "questions": [
    "What did the family make first?",
    "Where did they eat?",
    "What did they share finally?"
  ]
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, we ___.",
    "We ate ___ and drank ___.",
    "It was a ___ day."
  ]
}$json$::jsonb,
  true
),
(
  '369afebe-abc9-4d6c-a873-23538aa38ce3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: ate, drank, made",
    "Tell a picnic story in order",
    "Say what I ate recently"
  ],
  "challenge": "Tell me about a picnic or meal you remember!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  'Unit Review',
  'A2',
  'kids',
  8,
  5,
  'Review meals, recipes, healthy food, and a past picnic.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Kids"
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍎",
  "questions": [
    "What is your favorite meal?",
    "What did you eat yesterday?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Meal",
      "bg": "#FAECE7"
    },
    {
      "word": "Recipe",
      "bg": "#E1F5EE"
    },
    {
      "word": "Healthy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Picnic",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you eat for lunch?",
    "Is it healthy?"
  ],
  "student": [
    "For lunch I eat vegetables.",
    "Yes, it is very healthy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "For lunch I eat a healthy [meal]."
    },
    {
      "speaker": "B",
      "text": "First, we cut the fruit for the [recipe]."
    },
    {
      "speaker": "A",
      "text": "Yesterday, we had a fun [picnic]."
    }
  ],
  "blanks": [
    "meal",
    "recipe",
    "picnic"
  ]
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite healthy meal?"
    },
    {
      "speaker": "B",
      "text": "My favorite meal is a fruit salad because it is healthy and sweet."
    },
    {
      "speaker": "A",
      "text": "Yesterday, we had a picnic and made sandwiches together."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great day!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love healthy food. My favorite meal is a fruit salad because it is sweet and good for me. Yesterday, my family had a picnic. We made sandwiches, ate fruit, and drank juice. It was healthier than eating candy!",
  "questions": [
    "What is the writer's favorite meal?",
    "What did the family do yesterday?",
    "What did they eat and drink?"
  ]
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite healthy meal is ___.",
    "Yesterday, I ate ___.",
    "I think ___ is healthier than ___."
  ]
}$json$::jsonb,
  true
),
(
  '38a02d88-a76e-4b0f-829d-fb0cae6d72ce',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about meals and snacks",
    "Describe a simple recipe",
    "Compare healthy foods",
    "Tell a past food story"
  ],
  "challenge": "Tell me all about your favorite healthy food!"
}$json$::jsonb,
  true
);

-- A2 Kids Unit 3: Clothes and Getting Ready (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: What Are You Wearing?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7fc02795-9063-417e-a336-5501a1ac5353',
  'What Are You Wearing?',
  'A2',
  'kids',
  3,
  1,
  'Describe basic clothes and what someone is wearing.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
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
  '7fc02795-9063-417e-a336-5501a1ac5353',
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
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "T-shirt",
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
  '7fc02795-9063-417e-a336-5501a1ac5353',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you wearing?",
    "Is she wearing a dress?"
  ],
  "student": [
    "I am wearing a T-shirt and jeans.",
    "Yes, she is wearing a dress."
  ],
  "note": "Look at your clothes before you answer!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "He is wearing a [T-shirt]."
    },
    {
      "speaker": "B",
      "text": "She is wearing a [dress]."
    },
    {
      "speaker": "A",
      "text": "I am wearing [jeans] and a jacket."
    }
  ],
  "blanks": [
    "t-shirt",
    "dress",
    "jeans"
  ]
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
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
      "text": "I am wearing a T-shirt and jeans."
    },
    {
      "speaker": "A",
      "text": "She is wearing a dress and a jacket."
    },
    {
      "speaker": "B",
      "text": "That's a nice outfit!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Look at my friends today. Sam is wearing a blue T-shirt and jeans. Ana is wearing a red dress. Leo is wearing a jacket and shoes. Everyone looks great!",
  "questions": [
    "What is Sam wearing?",
    "What is Ana wearing?",
    "What is Leo wearing?"
  ]
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I am wearing ___.",
    "He is wearing ___.",
    "She is wearing ___."
  ]
}$json$::jsonb,
  true
),
(
  '7fc02795-9063-417e-a336-5501a1ac5353',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name clothes items",
    "Say 'I am wearing ___'",
    "Describe what others are wearing"
  ],
  "challenge": "Tell me what you are wearing right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Clothes for Different Weather
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  'Clothes for Different Weather',
  'A2',
  'kids',
  3,
  2,
  'Choose clothes for weather and give reasons with because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
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
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌦️",
  "questions": [
    "What do you wear when it is cold?",
    "What do you wear when it is sunny?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sunny",
      "bg": "#FAECE7"
    },
    {
      "word": "Rainy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Windy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cold",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the weather like today?",
    "What do you wear?"
  ],
  "student": [
    "Today it is cold, so I wear a jacket.",
    "Today it is sunny, so I wear a T-shirt."
  ],
  "note": "Think about today's real weather!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Today it is [sunny], so I wear a T-shirt."
    },
    {
      "speaker": "B",
      "text": "Today it is [rainy], so I wear a raincoat."
    },
    {
      "speaker": "A",
      "text": "Today it is [cold], so I wear a jacket."
    }
  ],
  "blanks": [
    "sunny",
    "rainy",
    "cold"
  ]
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is the weather like today?"
    },
    {
      "speaker": "B",
      "text": "Today it is windy, so I wear a jacket."
    },
    {
      "speaker": "A",
      "text": "I wear boots because it is rainy."
    },
    {
      "speaker": "B",
      "text": "Good idea, stay dry!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two friends message about the weather. Mia says: today it is cold and windy, so I wear a jacket and a hat. Leo says: today it is sunny, so I wear a T-shirt and shorts.",
  "questions": [
    "What is the weather for Mia?",
    "What does Mia wear?",
    "What does Leo wear and why?"
  ]
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today it is ___, so I wear ___.",
    "When it is rainy, I wear ___.",
    "When it is hot, I wear ___."
  ]
}$json$::jsonb,
  true
),
(
  '85a4aa38-d3b8-46c6-a877-51faa37df51e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Match clothes to weather",
    "Use 'because' with weather",
    "Say what I wear today"
  ],
  "challenge": "Tell me the weather today and what you are wearing!"
}$json$::jsonb,
  true
);

-- Lesson 3: Comparing Clothes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '51bc6593-be08-4036-9743-e1e850096186',
  'Comparing Clothes',
  'A2',
  'kids',
  3,
  3,
  'Compare clothes using bigger, smaller, longer, shorter, more colorful.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '51bc6593-be08-4036-9743-e1e850096186',
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
  '51bc6593-be08-4036-9743-e1e850096186',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your jacket longer or shorter than mine?",
    "Which shirt is more colorful?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Longer",
      "bg": "#FAECE7"
    },
    {
      "word": "Shorter",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bigger",
      "bg": "#EEEDFE"
    },
    {
      "word": "More colorful",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which shirt is bigger?",
    "Which one is more colorful?"
  ],
  "student": [
    "The red shirt is bigger.",
    "My dress is more colorful than yours."
  ],
  "note": "Look at two clothes items and compare them!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My jacket is [longer] than yours."
    },
    {
      "speaker": "B",
      "text": "Your shoes are [bigger] than mine."
    },
    {
      "speaker": "A",
      "text": "This dress is [more colorful]."
    }
  ],
  "blanks": [
    "longer",
    "bigger",
    "more colorful"
  ]
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your jacket longer or shorter than mine?"
    },
    {
      "speaker": "B",
      "text": "My jacket is longer than yours."
    },
    {
      "speaker": "A",
      "text": "Your shirt is more colorful than my shirt."
    },
    {
      "speaker": "B",
      "text": "Thank you, I like bright colors!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two costumes for the school show. The dragon costume is bigger and more colorful. It has long sleeves and a green tail. The cat costume is smaller and has short sleeves. Both costumes look great!",
  "questions": [
    "Which costume is bigger?",
    "What color is the dragon costume?",
    "Which costume has short sleeves?"
  ]
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My ___ is bigger than ___.",
    "This shirt is more colorful than ___.",
    "My shoes are ___ than my sister's."
  ]
}$json$::jsonb,
  true
),
(
  '51bc6593-be08-4036-9743-e1e850096186',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use comparatives for clothes",
    "Compare size and color",
    "Talk about two clothes items"
  ],
  "challenge": "Compare two things you are wearing or own!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Clothes for a Special Day
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  'My Clothes for a Special Day',
  'A2',
  'kids',
  3,
  4,
  'Write a short outfit description for a special day.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
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
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎉",
  "questions": [
    "What do you wear on your birthday?",
    "What is a special day for you?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Birthday",
      "bg": "#FAECE7"
    },
    {
      "word": "School trip",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sports day",
      "bg": "#EEEDFE"
    },
    {
      "word": "Special",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your special day?",
    "What do you wear?"
  ],
  "student": [
    "My special day is my birthday.",
    "I wear a nice dress and shoes."
  ],
  "note": "Think of your favorite special day!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "On my [birthday], I wear my best dress."
    },
    {
      "speaker": "B",
      "text": "On [sports day], I wear shorts and trainers."
    },
    {
      "speaker": "A",
      "text": "I wear a jacket for the [school trip]."
    }
  ],
  "blanks": [
    "birthday",
    "sports day",
    "school trip"
  ]
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you wear on your birthday?"
    },
    {
      "speaker": "B",
      "text": "I wear my best dress and new shoes because it is special."
    },
    {
      "speaker": "A",
      "text": "On sports day, I wear shorts and trainers because I run a lot."
    },
    {
      "speaker": "B",
      "text": "That makes sense!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Ella is going to a school party. She is wearing a purple dress and white shoes because it is a special day. She is happy and excited to see her friends.",
  "questions": [
    "Where is Ella going?",
    "What is Ella wearing?",
    "Why is Ella wearing special clothes?"
  ]
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On my special day, I wear ___.",
    "I wear it because ___.",
    "My favorite special day is ___."
  ]
}$json$::jsonb,
  true
),
(
  'c4b4b287-72cd-48d7-93e3-e2b76ae4c20d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name special days",
    "Describe an outfit for an event",
    "Use 'because' to explain"
  ],
  "challenge": "Tell me about your outfit for a special day!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  'Unit Review',
  'A2',
  'kids',
  3,
  5,
  'Review clothes, weather, comparisons, and special-day outfits.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
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
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👗",
  "questions": [
    "What are you wearing today?",
    "What is your special day?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
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
      "word": "Weather",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bigger",
      "bg": "#EEEDFE"
    },
    {
      "word": "Special",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you wearing?",
    "What do you wear for a special day?"
  ],
  "student": [
    "I am wearing a jacket because it is cold.",
    "I wear my best clothes for my birthday."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I am [wearing] a red jacket today."
    },
    {
      "speaker": "B",
      "text": "The [weather] is cold, so I wear a hat."
    },
    {
      "speaker": "A",
      "text": "My dress is [bigger] and more colorful."
    }
  ],
  "blanks": [
    "wearing",
    "weather",
    "bigger"
  ]
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What are you wearing today and why?"
    },
    {
      "speaker": "B",
      "text": "I am wearing a jacket because the weather is cold."
    },
    {
      "speaker": "A",
      "text": "What do you wear on your special day?"
    },
    {
      "speaker": "B",
      "text": "I wear my best dress because it is more colorful and fun."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today the weather is cold and windy, so I am wearing a big warm jacket. Tomorrow is my birthday, a very special day. I will wear my best dress. It is more colorful than my jacket!",
  "questions": [
    "What is the weather today?",
    "What is tomorrow?",
    "What will the writer wear tomorrow?"
  ]
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Today I am wearing ___ because ___.",
    "For a special day, I wear ___.",
    "My favorite clothes item is ___."
  ]
}$json$::jsonb,
  true
),
(
  '341b8b02-6ac2-448a-ae1b-b1f471b323e2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe clothes",
    "Match clothes to weather",
    "Compare clothes",
    "Talk about special-day outfits"
  ],
  "challenge": "Tell me all about your clothes and style!"
}$json$::jsonb,
  true
);

-- A1 Adults Unit 6: Shopping and Money (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: In the Shop
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '28a6be01-88dc-489d-ae47-a877974934af',
  'In the Shop',
  'A1',
  'adults',
  6,
  1,
  'Name common shop items and places.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '28a6be01-88dc-489d-ae47-a877974934af',
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
  '28a6be01-88dc-489d-ae47-a877974934af',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Where do you shop?",
    "Do you go to the supermarket often?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Supermarket",
      "bg": "#FAECE7"
    },
    {
      "word": "Pharmacy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bread",
      "bg": "#EEEDFE"
    },
    {
      "word": "Ticket",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you buy bread?",
    "Do you go to the pharmacy?"
  ],
  "student": [
    "I buy bread at the supermarket.",
    "Yes, sometimes."
  ],
  "note": "Think about where you really shop!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I buy bread at the [supermarket]."
    },
    {
      "speaker": "B",
      "text": "I go to the [pharmacy]."
    },
    {
      "speaker": "A",
      "text": "I need a [ticket]."
    }
  ],
  "blanks": [
    "supermarket",
    "pharmacy",
    "ticket"
  ]
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you buy milk?"
    },
    {
      "speaker": "B",
      "text": "I buy milk at the supermarket."
    },
    {
      "speaker": "A",
      "text": "I go to the pharmacy for medicine!"
    },
    {
      "speaker": "B",
      "text": "Me too, sometimes."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I buy bread at the supermarket. I buy medicine at the pharmacy. I buy a ticket at the station. I go shopping every week!",
  "questions": [
    "Where does the writer buy bread?",
    "Where does the writer buy medicine?",
    "How often does the writer shop?"
  ]
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I buy ___ at the ___.",
    "I go to the ___.",
    "I shop ___."
  ]
}$json$::jsonb,
  true
),
(
  '28a6be01-88dc-489d-ae47-a877974934af',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four shop items/places",
    "Say 'I buy ___ at the ___'",
    "Talk about shopping"
  ],
  "challenge": "Tell me where you buy three things!"
}$json$::jsonb,
  true
);

-- Lesson 2: Prices and Money
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  'Prices and Money',
  'A1',
  'adults',
  6,
  2,
  'Ask and answer simple questions about prices.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
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
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you check prices before buying?",
    "Is coffee expensive where you live?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "How Much",
      "bg": "#FAECE7"
    },
    {
      "word": "Price",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dollar",
      "bg": "#EEEDFE"
    },
    {
      "word": "Expensive",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much is it?",
    "Is it expensive?"
  ],
  "student": [
    "It's ten dollars.",
    "No, it's cheap!"
  ],
  "note": "Ask about a real price!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How much] is it?"
    },
    {
      "speaker": "B",
      "text": "It's ten [dollars]."
    },
    {
      "speaker": "A",
      "text": "That is [expensive]!"
    }
  ],
  "blanks": [
    "How much",
    "dollars",
    "expensive"
  ]
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much is this bread?"
    },
    {
      "speaker": "B",
      "text": "It's two dollars."
    },
    {
      "speaker": "A",
      "text": "Is it expensive?"
    },
    {
      "speaker": "B",
      "text": "No, it's cheap!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How much is it? It's ten dollars. Is it expensive? No, it's not expensive. I always ask the price before I buy!",
  "questions": [
    "How much is the item?",
    "Is it expensive?",
    "What does the writer always ask?"
  ]
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "How much is it? It's ___.",
    "Is it expensive? ___.",
    "I want to buy a ___ for ___ dollars."
  ]
}$json$::jsonb,
  true
),
(
  '87678242-0a90-4cb5-90c5-d6f3416c9ff2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'How much is it?'",
    "Say a price",
    "Say 'expensive' or 'cheap'"
  ],
  "challenge": "Ask me the price of something!"
}$json$::jsonb,
  true
);

-- Lesson 3: Shopping Requests
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
  'Shopping Requests',
  'A1',
  'adults',
  6,
  3,
  'Make simple requests in a shop.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
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
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What do you usually buy at the shop?",
    "Do you say 'please' when shopping?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
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
      "word": "Thank You",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
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
    "I want some bread, please.",
    "Can I have a bag?"
  ],
  "note": "Practice like you're really in a shop!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I want] some bread."
    },
    {
      "speaker": "B",
      "text": "[Can I have] a bag?"
    },
    {
      "speaker": "A",
      "text": "[Thank you]!"
    }
  ],
  "blanks": [
    "I want",
    "Can I have",
    "Thank you"
  ]
}$json$::jsonb,
  true
),
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
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
      "text": "I want some milk, please."
    },
    {
      "speaker": "A",
      "text": "Can I have a bag too?"
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
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I want some bread, please. Can I have a bag? Thank you! Shopping is easy when I know simple phrases.",
  "questions": [
    "What does the writer want?",
    "What does the writer ask for?",
    "Is shopping easy for the writer?"
  ]
}$json$::jsonb,
  true
),
(
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
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
  '6dcca2b6-2c7a-4a33-8b12-041ffa240de7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I want ___, please'",
    "Say 'Can I have ___?'",
    "Shop politely"
  ],
  "challenge": "Ask me for something like you're in a shop!"
}$json$::jsonb,
  true
);

-- Lesson 4: Quantities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  'Quantities',
  'A1',
  'adults',
  6,
  4,
  'Use simple quantity words with shopping items.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
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
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "Do you make a shopping list?",
    "What's on your list this week?"
  ],
  "title": "Warm-up"
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Some",
      "bg": "#FAECE7"
    },
    {
      "word": "A Bottle Of",
      "bg": "#E1F5EE"
    },
    {
      "word": "A Bag Of",
      "bg": "#EEEDFE"
    },
    {
      "word": "Two",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much water do you want?",
    "Do you want a bag of rice?"
  ],
  "student": [
    "I want a bottle of water.",
    "Yes, a bag of rice, please."
  ],
  "note": "Think about a real shopping list!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I want [some] milk."
    },
    {
      "speaker": "B",
      "text": "I want [a bottle of] water."
    },
    {
      "speaker": "A",
      "text": "I want [a bag of] rice."
    }
  ],
  "blanks": [
    "some",
    "a bottle of",
    "a bag of"
  ]
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What's on your shopping list?"
    },
    {
      "speaker": "B",
      "text": "I need a bottle of water and some bread."
    },
    {
      "speaker": "A",
      "text": "I need a bag of rice too!"
    },
    {
      "speaker": "B",
      "text": "Let's go shopping!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My shopping list: some milk, a bottle of water, a bag of rice, two apples. I always make a list before shopping!",
  "questions": [
    "What is on the shopping list?",
    "How many apples does the writer want?",
    "Does the writer make a list?"
  ]
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I want some ___.",
    "I want a bottle of ___.",
    "I want a bag of ___."
  ]
}$json$::jsonb,
  true
),
(
  'b02c569b-d2bd-4cc4-97aa-2ea61bf40ca5',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'some', 'a bottle of', 'a bag of'",
    "Make a shopping list",
    "Talk about quantities"
  ],
  "challenge": "Tell me your shopping list!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  'Unit Review',
  'A1',
  'adults',
  6,
  5,
  'Talk briefly about shopping, prices, and requests.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
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
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "",
  "questions": [
    "What shopping words do you remember?",
    "Where do you like to shop?"
  ],
  "title": "Unit Review"
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Supermarket",
      "bg": "#FAECE7"
    },
    {
      "word": "How Much",
      "bg": "#E1F5EE"
    },
    {
      "word": "I Want",
      "bg": "#EEEDFE"
    },
    {
      "word": "Some",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "How much is it?"
  ],
  "student": [
    "I shop at the supermarket.",
    "It's ten dollars."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I go to the [supermarket]."
    },
    {
      "speaker": "B",
      "text": "[How much] is it?"
    },
    {
      "speaker": "A",
      "text": "[I want] some bread."
    }
  ],
  "blanks": [
    "supermarket",
    "How much",
    "I want"
  ]
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you buy food?"
    },
    {
      "speaker": "B",
      "text": "I buy food at the supermarket."
    },
    {
      "speaker": "A",
      "text": "How much is bread there?"
    },
    {
      "speaker": "B",
      "text": "It's about two dollars!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I go shopping at the supermarket every week. I buy bread, milk, and rice. I always ask, 'How much is it?' I say 'please' and 'thank you' too!",
  "questions": [
    "Where does the writer shop?",
    "What does the writer buy?",
    "What polite words does the writer use?"
  ]
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I shop at the ___.",
    "I buy ___.",
    "How much is ___? It's ___."
  ]
}$json$::jsonb,
  true
),
(
  '23faa6b7-2e13-45bd-84b1-89b0cab06bcb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name shop items and places",
    "Ask about prices",
    "Make polite requests",
    "Use quantities"
  ],
  "challenge": "Go shopping with me — ask for three things and their prices!"
}$json$::jsonb,
  true
);

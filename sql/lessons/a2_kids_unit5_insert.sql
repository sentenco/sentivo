-- A2 Kids Unit 5: Shopping and Money (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Shops and Things to Buy
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  'Shops and Things to Buy',
  'A2',
  'kids',
  5,
  1,
  'Say what people buy in different shops.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
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
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "What shops are near you?",
    "Where do you buy toys?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Toy shop",
      "bg": "#FAECE7"
    },
    {
      "word": "Bookstore",
      "bg": "#E1F5EE"
    },
    {
      "word": "Supermarket",
      "bg": "#EEEDFE"
    },
    {
      "word": "Clothes shop",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you buy at the toy shop?",
    "Where do you buy books?"
  ],
  "student": [
    "You buy toys at the toy shop.",
    "You buy books at the bookstore."
  ],
  "note": "Think of things you buy at each shop!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "You buy toys at the [toy shop]."
    },
    {
      "speaker": "B",
      "text": "You buy books at the [bookstore]."
    },
    {
      "speaker": "A",
      "text": "You buy food at the [supermarket]."
    }
  ],
  "blanks": [
    "toy shop",
    "bookstore",
    "supermarket"
  ]
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you buy toys?"
    },
    {
      "speaker": "B",
      "text": "You buy toys at the toy shop."
    },
    {
      "speaker": "A",
      "text": "I buy shirts at the clothes shop."
    },
    {
      "speaker": "B",
      "text": "I buy fruit at the supermarket."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four friends go shopping. Sam buys a toy car at the toy shop. Mia buys a storybook at the bookstore. Leo buys apples at the supermarket. Ana buys a new hat at the clothes shop.",
  "questions": [
    "Where does Sam buy a toy car?",
    "Where does Mia buy a book?",
    "What does Ana buy?"
  ]
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "You buy ___ at the ___.",
    "I want to buy ___.",
    "My favorite shop is ___."
  ]
}$json$::jsonb,
  true
),
(
  '9b4a7917-9456-4c4b-bd25-5806dbff5970',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name different shops",
    "Say 'You buy ___ at the ___'",
    "Talk about what I want to buy"
  ],
  "challenge": "Tell me one thing you want to buy and where!"
}$json$::jsonb,
  true
);

-- Lesson 2: How Much Is It?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  'How Much Is It?',
  'A2',
  'kids',
  5,
  2,
  'Ask and answer simple price questions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
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
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💰",
  "questions": [
    "How much is your favorite toy?",
    "Is it cheap or expensive?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Price",
      "bg": "#FAECE7"
    },
    {
      "word": "Dollar",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheap",
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
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
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
    "It is five dollars.",
    "No, it is cheap."
  ],
  "note": "Practice asking about prices!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much is the [price] of the ball?"
    },
    {
      "speaker": "B",
      "text": "It is two [dollar]s."
    },
    {
      "speaker": "A",
      "text": "That is very [cheap]!"
    }
  ],
  "blanks": [
    "price",
    "dollar",
    "cheap"
  ]
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much is the toy car?"
    },
    {
      "speaker": "B",
      "text": "It is three dollars."
    },
    {
      "speaker": "A",
      "text": "That's cheap! How much is the storybook?"
    },
    {
      "speaker": "B",
      "text": "It is eight dollars. That is expensive!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At the shop, the ball costs two dollars. The storybook costs eight dollars. The toy car costs three dollars. The ball is the cheapest item and the storybook is the most expensive.",
  "questions": [
    "How much does the ball cost?",
    "How much does the storybook cost?",
    "Which item is the cheapest?"
  ]
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ costs ___ dollars.",
    "How much is the ___?",
    "It is ___ (cheap/expensive)."
  ]
}$json$::jsonb,
  true
),
(
  '3daccfe9-4bef-4e31-a32f-a746c3d242de',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'How much is it?'",
    "Answer with a price",
    "Say 'cheap' and 'expensive'"
  ],
  "challenge": "Ask me the price of three things!"
}$json$::jsonb,
  true
);

-- Lesson 3: Comparing Prices
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  'Comparing Prices',
  'A2',
  'kids',
  5,
  3,
  'Compare prices using more and less.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
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
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📊",
  "questions": [
    "Which is more expensive, a toy or a book?",
    "What is the cheapest thing you own?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "More expensive",
      "bg": "#FAECE7"
    },
    {
      "word": "Less expensive",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheapest",
      "bg": "#EEEDFE"
    },
    {
      "word": "Same price",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Which shop is cheaper?",
    "Is this more expensive than that?"
  ],
  "student": [
    "Shop A is cheaper than shop B.",
    "Yes, this is more expensive."
  ],
  "note": "Compare two prices before you answer!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The toy shop is [more expensive] than the supermarket."
    },
    {
      "speaker": "B",
      "text": "The bookstore is [less expensive] than the toy shop."
    },
    {
      "speaker": "A",
      "text": "This ball is the [cheapest] toy."
    }
  ],
  "blanks": [
    "more expensive",
    "less expensive",
    "cheapest"
  ]
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which shop is cheaper, the toy shop or the bookstore?"
    },
    {
      "speaker": "B",
      "text": "The bookstore is less expensive than the toy shop."
    },
    {
      "speaker": "A",
      "text": "This shop has more toys and lower prices."
    },
    {
      "speaker": "B",
      "text": "Let's shop here then!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two shops sell the same ball. Shop A sells it for two dollars. Shop B sells it for four dollars. Shop A is cheaper than Shop B. Shop B has more toys, but Shop A has better prices.",
  "questions": [
    "How much does Shop A sell the ball for?",
    "Which shop is cheaper?",
    "What does Shop B have more of?"
  ]
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is cheaper than ___.",
    "This is the most expensive ___.",
    "I prefer the shop with ___."
  ]
}$json$::jsonb,
  true
),
(
  '346805ae-e6c9-4893-bb8c-f9f47c9adaa8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare prices at two shops",
    "Use 'cheaper' and 'more expensive'",
    "Choose the best shop"
  ],
  "challenge": "Compare the prices of two things you know!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Shopping List
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  'My Shopping List',
  'A2',
  'kids',
  5,
  4,
  'Write a short shopping list and plan with sequencing words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
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
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📝",
  "questions": [
    "What is on your shopping list?",
    "What do you need from the shop?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "List",
      "bg": "#FAECE7"
    },
    {
      "word": "Cupboard",
      "bg": "#E1F5EE"
    },
    {
      "word": "Need",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plan",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you need to buy?",
    "Where do you go first?"
  ],
  "student": [
    "I need bread and milk.",
    "First, I go to the bakery."
  ],
  "note": "Make a plan for your shopping trip!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [need] bread and milk."
    },
    {
      "speaker": "B",
      "text": "First, we go to the bakery, then the [supermarket]."
    },
    {
      "speaker": "A",
      "text": "This is my shopping [list]."
    }
  ],
  "blanks": [
    "need",
    "supermarket",
    "list"
  ]
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is on your shopping list?"
    },
    {
      "speaker": "B",
      "text": "I need bread, milk, and apples."
    },
    {
      "speaker": "A",
      "text": "First, we go to the bakery, then the supermarket."
    },
    {
      "speaker": "B",
      "text": "Good plan! Let's go."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mom's shopping list has three things: bread, milk, and apples. First, we go to the bakery for bread. Then, we go to the supermarket for milk and apples. We check the cupboard first to see what we need.",
  "questions": [
    "What three things are on the list?",
    "Where do they go first?",
    "Why do they check the cupboard?"
  ]
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My shopping list has ___.",
    "First, I go to ___.",
    "I need ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'beca2fae-94d3-4dc6-b36f-b0b7d6c855ae',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short shopping list",
    "Plan a shopping trip in order",
    "Say what I need"
  ],
  "challenge": "Tell me your shopping list and plan!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  'Unit Review',
  'A2',
  'kids',
  5,
  5,
  'Review shops, prices, comparisons, and shopping plans.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
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
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛒",
  "questions": [
    "What is your favorite shop?",
    "What do you need to buy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Shop",
      "bg": "#FAECE7"
    },
    {
      "word": "Price",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheaper",
      "bg": "#EEEDFE"
    },
    {
      "word": "List",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much is it?",
    "What shop do you like?"
  ],
  "student": [
    "It is five dollars.",
    "I like the toy shop."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How much is the [price] of this toy?"
    },
    {
      "speaker": "B",
      "text": "This shop is [cheaper] than that one."
    },
    {
      "speaker": "A",
      "text": "This is my shopping [list]."
    }
  ],
  "blanks": [
    "price",
    "cheaper",
    "list"
  ]
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is on your shopping list today?"
    },
    {
      "speaker": "B",
      "text": "I need bread and apples. How much are they?"
    },
    {
      "speaker": "A",
      "text": "Bread is two dollars and apples are three dollars."
    },
    {
      "speaker": "B",
      "text": "That's cheaper than yesterday!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Today I went shopping with my list. I needed bread, milk, and a new book. First, I went to the bakery. Bread was two dollars, cheaper than last week. Then, I went to the bookstore. The book was eight dollars, quite expensive!",
  "questions": [
    "What was on the shopping list?",
    "How much was the bread?",
    "How much was the book?"
  ]
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My shopping list has ___.",
    "The ___ was ___ dollars.",
    "My favorite shop is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'dca574cf-8c5c-48b2-a398-3ff31fb9d7e9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name shops and items",
    "Ask and answer about prices",
    "Compare prices",
    "Write a shopping plan"
  ],
  "challenge": "Tell me all about your shopping trip!"
}$json$::jsonb,
  true
);

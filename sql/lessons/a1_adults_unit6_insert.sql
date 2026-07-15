-- A1 Adults Unit 6: Shopping and Money (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: In the Shop
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  'In the Shop',
  'A1',
  'adults',
  6,
  1,
  'Name shops and shopping vocabulary. [Combination, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
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
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛒",
  "questions": [
    "Do you go to the supermarket every week?",
    "Do you like the bakery?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
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
      "word": "Bakery",
      "bg": "#E1F5EE"
    },
    {
      "word": "Shop assistant",
      "bg": "#EEEDFE"
    },
    {
      "word": "Customer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "Do you go to the bakery?"
  ],
  "student": [
    "I shop at the supermarket.",
    "Yes, I go to the bakery."
  ],
  "note": "Read the model text, then find the shop words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I shop at the [supermarket]."
    },
    {
      "speaker": "B",
      "text": "I buy bread at the [bakery]."
    },
    {
      "speaker": "A",
      "text": "The [shop assistant] is helpful."
    }
  ],
  "blanks": [
    "supermarket",
    "bakery",
    "shop assistant"
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I shop at the supermarket every week."
    },
    {
      "speaker": "B",
      "text": "I go to the bakery for bread."
    },
    {
      "speaker": "A",
      "text": "The shop assistant is helpful."
    },
    {
      "speaker": "B",
      "text": "I am a customer there too!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole passage together."
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I shop at the supermarket every week. I go to the bakery for bread. The shop assistant is helpful.",
  "questions": [
    "Where does the writer shop every week?",
    "What does the writer buy at the bakery?",
    "Is the shop assistant helpful?"
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I shop at the ___.",
    "I buy ___ at the ___.",
    "The shop assistant is ___."
  ]
}$json$::jsonb,
  true
),
(
  'b90b70d4-599c-47bb-b5db-5bb8143526a3',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 shopping words",
    "Say 'I shop at the ___'",
    "Talk about a shop I go to"
  ],
  "challenge": "Tell me about a shop you go to!"
}$json$::jsonb,
  true
);

-- Lesson 2: Prices and Money
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  'Prices and Money',
  'A1',
  'adults',
  6,
  2,
  'Ask and answer about prices. [Combination, L2, format E: choose-the-better-response]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
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
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💰",
  "questions": [
    "How much does bread cost?",
    "Is fruit expensive?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
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
      "word": "Price",
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
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much is this?",
    "Is it expensive?"
  ],
  "student": [
    "It is five dollars.",
    "No, it is cheap."
  ],
  "note": "Use the word bank: how much, price, cheap, expensive.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[How much] is this bread?"
    },
    {
      "speaker": "B",
      "text": "The [price] is two dollars."
    },
    {
      "speaker": "A",
      "text": "That is [cheap]!"
    }
  ],
  "blanks": [
    "how much",
    "price",
    "cheap"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'How much is this?' or 'How many is this?'?"
    },
    {
      "speaker": "B",
      "text": "'How much is this?' is correct for price."
    },
    {
      "speaker": "A",
      "text": "Good. Is that cheap or expensive to you?"
    },
    {
      "speaker": "B",
      "text": "That's cheap for me."
    }
  ],
  "note": "Choose the correct question first, then answer about prices you know."
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "How much is this bread? The price is two dollars. That is cheap. The shoes are fifty dollars. That is expensive.",
  "questions": [
    "How much is the bread?",
    "Is the bread cheap or expensive?",
    "How much are the shoes?"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The price of ___ is ___.",
    "It is cheap/expensive.",
    "How much is the ___?"
  ]
}$json$::jsonb,
  true
),
(
  'cb36fdd8-b804-4074-84e4-7f605f33332d',
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

-- Lesson 3: Shopping Requests
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '25586155-90df-404b-8110-d45b396d633a',
  'Shopping Requests',
  'A1',
  'adults',
  6,
  3,
  'Unchanged by the rotation rework -- L3 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '25586155-90df-404b-8110-d45b396d633a',
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
  '25586155-90df-404b-8110-d45b396d633a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "How do you ask for something politely in a shop?",
    "What do you say when you finish shopping?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I'd like",
      "bg": "#FAECE7"
    },
    {
      "word": "Please",
      "bg": "#E1F5EE"
    },
    {
      "word": "Anything else",
      "bg": "#EEEDFE"
    },
    {
      "word": "That's all",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you like?",
    "Anything else?"
  ],
  "student": [
    "I'd like some bread, please.",
    "No, that's all, thank you."
  ],
  "note": "Two answers are given. Choose the more polite one.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like] some bread, [please]."
    },
    {
      "speaker": "B",
      "text": "[Anything else]?"
    },
    {
      "speaker": "A",
      "text": "No, [that's all]."
    }
  ],
  "blanks": [
    "i'd like",
    "anything else",
    "that's all"
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Good morning! What would you like?"
    },
    {
      "speaker": "B",
      "text": "I'd like some bread and milk, please."
    },
    {
      "speaker": "A",
      "text": "Anything else?"
    },
    {
      "speaker": "B",
      "text": "No, that's all, thank you."
    }
  ],
  "note": "Mini role-play: shop assistant and customer at a bakery."
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Good morning! I'd like some bread and milk, please. Anything else? No, that's all, thank you.",
  "questions": [
    "What does the customer want?",
    "What does the shop assistant ask?",
    "What does the customer say at the end?"
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like ___, please.",
    "Anything else?",
    "No, that's all, thank you."
  ]
}$json$::jsonb,
  true
),
(
  '25586155-90df-404b-8110-d45b396d633a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask politely with 'I'd like'",
    "Answer 'Anything else?'",
    "Close a request with 'that's all'"
  ],
  "challenge": "Order something from me at a pretend shop!"
}$json$::jsonb,
  true
);

-- Lesson 4: Quantities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  'Quantities',
  'A1',
  'adults',
  6,
  4,
  'Combine requests with quantities. [Combination, L4, format M: independent production, teacher matches back]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
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
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍇",
  "questions": [
    "How much fruit do you buy?",
    "Do you buy a bottle of milk?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "A kilo of",
      "bg": "#FAECE7"
    },
    {
      "word": "A bottle of",
      "bg": "#E1F5EE"
    },
    {
      "word": "A few",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enough",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How much would you like?",
    "Is that enough?"
  ],
  "student": [
    "I'd like a kilo of apples.",
    "Yes, that's enough."
  ],
  "note": "Put it all together: request + quantity + politeness.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like [a kilo of] apples."
    },
    {
      "speaker": "B",
      "text": "And [a bottle of] milk."
    },
    {
      "speaker": "A",
      "text": "Just [a few] eggs too."
    }
  ],
  "blanks": [
    "a kilo of",
    "a bottle of",
    "a few"
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me your shopping list, in your own words."
    },
    {
      "speaker": "B",
      "text": "I'd like a kilo of ___, a bottle of ___, and a few ___."
    },
    {
      "speaker": "A",
      "text": "I'll say it back: you'd like a kilo of ___, a bottle of ___, and a few ___."
    },
    {
      "speaker": "B",
      "text": "Yes, that's enough, thank you!"
    }
  ],
  "note": "You speak first, fully in your own words. Teacher matches your list back to check it."
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I'd like a kilo of apples and a bottle of milk. I'd like a few eggs too. That's enough, thank you.",
  "questions": [
    "What does the customer want?",
    "How much milk?",
    "Is that enough?"
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like a kilo of ___.",
    "I'd like a bottle of ___.",
    "That's enough, thank you."
  ]
}$json$::jsonb,
  true
),
(
  'a957ac5b-58d7-4acd-b18a-c162bbd90ee8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use quantities: kilo, bottle, a few",
    "Make a shopping request with quantity",
    "Close a request politely"
  ],
  "challenge": "Order groceries from me with quantities!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  'Unit Review',
  'A1',
  'adults',
  6,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
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
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛍️",
  "questions": [
    "Where do you shop?",
    "What would you like to buy?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
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
      "word": "I'd like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Enough",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you shop?",
    "What would you like?"
  ],
  "student": [
    "I shop at the supermarket.",
    "I'd like some bread, please."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [shop] at the supermarket."
    },
    {
      "speaker": "B",
      "text": "The [price] is cheap."
    },
    {
      "speaker": "A",
      "text": "[I'd like] a kilo of apples."
    }
  ],
  "blanks": [
    "shop",
    "price",
    "i'd like"
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your shopping."
    },
    {
      "speaker": "B",
      "text": "I shop at the supermarket. The prices are cheap there."
    },
    {
      "speaker": "A",
      "text": "I'd like a kilo of apples and a bottle of milk, please."
    },
    {
      "speaker": "B",
      "text": "Anything else?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I shop at the supermarket. The prices are cheap there. I'd like a kilo of apples and a bottle of milk.",
  "questions": [
    "Where does the writer shop?",
    "Are the prices cheap or expensive?",
    "What does the writer want to buy?"
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I shop at ___.",
    "The prices are ___.",
    "I'd like ___."
  ]
}$json$::jsonb,
  true
),
(
  '651736d2-a7cf-47a5-9d5f-2f2a18957f6f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name shops and prices",
    "Ask 'How much?'",
    "Make a polite shopping request"
  ],
  "challenge": "Tell me all about your shopping!"
}$json$::jsonb,
  true
);

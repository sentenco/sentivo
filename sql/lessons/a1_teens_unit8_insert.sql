-- A1 Teens Unit 8: Food and Drinks (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  'Food and Drinks',
  'A1',
  'teens',
  8,
  1,
  'Name common foods and drinks. [Combination, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
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
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "Do you like pizza?",
    "Do you drink juice?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
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
      "word": "Juice",
      "bg": "#E1F5EE"
    },
    {
      "word": "Rice",
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
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like pizza?",
    "What do you drink?"
  ],
  "student": [
    "Yes, I like pizza.",
    "I drink juice."
  ],
  "note": "Point to a food picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like [pizza]."
    },
    {
      "speaker": "B",
      "text": "I drink [juice]."
    },
    {
      "speaker": "A",
      "text": "I eat [rice] too."
    }
  ],
  "blanks": [
    "pizza",
    "juice",
    "rice"
  ]
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like pizza."
    },
    {
      "speaker": "B",
      "text": "I drink juice."
    },
    {
      "speaker": "A",
      "text": "I eat rice too."
    },
    {
      "speaker": "B",
      "text": "I drink water!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like pizza. I drink juice. I eat rice too. I also drink water.",
  "questions": [
    "What food does the writer like?",
    "What does the writer drink?",
    "What else does the writer eat?"
  ]
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I drink ___.",
    "I eat ___."
  ]
}$json$::jsonb,
  true
),
(
  '8308a23d-f50f-4320-b1d8-0593c4e84cea',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods or drinks",
    "Say 'I like ___'",
    "Say what I drink"
  ],
  "challenge": "Tell me your favorite food and drink!"
}$json$::jsonb,
  true
);

-- Lesson 2: Likes and Dislikes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  'Likes and Dislikes',
  'A1',
  'teens',
  8,
  2,
  'Say food likes and dislikes with a reason. [Combination, Lesson 2: controlled practice, 2 combined targets]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
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
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😋",
  "questions": [
    "What food is delicious to you?",
    "What don't you like to eat?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Delicious",
      "bg": "#FAECE7"
    },
    {
      "word": "Don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sweet",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like pizza?",
    "Why do you like it?"
  ],
  "student": [
    "Yes, pizza is delicious.",
    "I like it because it's sweet."
  ],
  "note": "Use the word bank: delicious, don't like, because, sweet.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Pizza is [delicious]."
    },
    {
      "speaker": "B",
      "text": "I [don't like] fish."
    },
    {
      "speaker": "A",
      "text": "I like cake [because] it's [sweet]."
    }
  ],
  "blanks": [
    "delicious",
    "don't like",
    "sweet"
  ]
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
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
      "text": "Yes, pizza is delicious. I don't like fish, though."
    },
    {
      "speaker": "A",
      "text": "I like cake because it's sweet."
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Pizza is delicious. I don't like fish. I like cake because it's sweet.",
  "questions": [
    "Is pizza delicious or bad?",
    "What doesn't the writer like?",
    "Why does the writer like cake?"
  ]
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is delicious.",
    "I don't like ___.",
    "I like ___ because it's ___."
  ]
}$json$::jsonb,
  true
),
(
  '2c417a1c-19bd-4233-be98-48436e64ec59',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'delicious' and 'sweet'",
    "Say 'I don't like ___'",
    "Give a reason with 'because'"
  ],
  "challenge": "Tell me a food you like and a food you don't like, with a reason!"
}$json$::jsonb,
  true
);

-- Lesson 3: At Mealtimes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
  'At Mealtimes',
  'A1',
  'teens',
  8,
  3,
  'Talk about breakfast, lunch, and dinner. [Combination, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you eat for breakfast?",
    "What do you eat for dinner?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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
      "word": "Every day",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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
    "I eat eggs for breakfast.",
    "I eat rice for dinner."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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
      "text": "For dinner, I eat rice [every day]."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "every day"
  ]
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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
      "text": "I eat eggs for breakfast. What do you eat for lunch?"
    },
    {
      "speaker": "A",
      "text": "I eat a sandwich for lunch. I eat rice for dinner every day."
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
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For breakfast, I eat eggs. For lunch, I eat a sandwich. For dinner, I eat rice every day.",
  "questions": [
    "What does the writer eat for breakfast?",
    "What does the writer eat for lunch?",
    "What does the writer eat every day?"
  ]
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For breakfast, I eat ___.",
    "For lunch, I eat ___.",
    "For dinner, I eat ___."
  ]
}$json$::jsonb,
  true
),
(
  'ba0349e2-3ecb-4ae0-99dd-4005aa239946',
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

-- Lesson 4: Ordering Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  'Ordering Food',
  'A1',
  'teens',
  8,
  4,
  'Combine food vocabulary into a simple ordering conversation. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
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
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "What would you order at a restaurant?",
    "Do you say please and thank you?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
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
      "word": "Menu",
      "bg": "#EEEDFE"
    },
    {
      "word": "Thank you",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
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
    "I'd like pizza, please.",
    "No, thank you."
  ],
  "note": "Put it all together: order + please + thank you.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I'd like] pizza, [please]."
    },
    {
      "speaker": "B",
      "text": "Can I see the [menu]?"
    },
    {
      "speaker": "A",
      "text": "[Thank you]!"
    }
  ],
  "blanks": [
    "i'd like",
    "please",
    "thank you"
  ]
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Can I see the menu, please?"
    },
    {
      "speaker": "B",
      "text": "Of course! What would you like?"
    },
    {
      "speaker": "A",
      "text": "I'd like pizza and juice, please."
    },
    {
      "speaker": "B",
      "text": "Thank you!"
    }
  ],
  "note": "Mini role-play: order food at a pretend restaurant."
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Can I see the menu, please? I'd like pizza and juice. Thank you! Pizza is delicious.",
  "questions": [
    "What did the customer ask for?",
    "What did they order?",
    "Did they say thank you?"
  ]
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like ___, please.",
    "Can I see the ___?",
    "Thank you!"
  ]
}$json$::jsonb,
  true
),
(
  '248d35f8-1842-4b2f-a536-4f1371fe3103',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order food politely",
    "Say 'please' and 'thank you'",
    "Ask for a menu"
  ],
  "challenge": "Order a meal from me at a pretend restaurant!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  'Unit Review',
  'A1',
  'teens',
  8,
  5,
  'Review food, likes, mealtimes, and ordering. [Combination, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
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
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
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
      "word": "Delicious",
      "bg": "#E1F5EE"
    },
    {
      "word": "Breakfast",
      "bg": "#EEEDFE"
    },
    {
      "word": "I'd like",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
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
    "My favorite food is pizza.",
    "I eat eggs for breakfast."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [food] is pizza."
    },
    {
      "speaker": "B",
      "text": "It is [delicious]."
    },
    {
      "speaker": "A",
      "text": "[I'd like] some, please."
    }
  ],
  "blanks": [
    "food",
    "delicious",
    "i'd like"
  ]
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite food."
    },
    {
      "speaker": "B",
      "text": "My favorite food is pizza. It is delicious. I eat it for lunch."
    },
    {
      "speaker": "A",
      "text": "I'd like some pizza, please!"
    },
    {
      "speaker": "B",
      "text": "Me too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite food is pizza. It is delicious. I eat it for lunch. I'd like pizza every day!",
  "questions": [
    "What is the favorite food?",
    "Is it delicious or bad?",
    "When does the writer eat it?"
  ]
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite food is ___.",
    "It is ___.",
    "I eat it for ___."
  ]
}$json$::jsonb,
  true
),
(
  '75f5e066-e875-4aef-98e1-f8987be824b6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about favorite food",
    "Give a reason",
    "Order food politely"
  ],
  "challenge": "Tell me all about your favorite food and drinks!"
}$json$::jsonb,
  true
);

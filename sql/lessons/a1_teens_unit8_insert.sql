-- A1 Teens Unit 8: Food and Drinks (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
  'Food and Drinks',
  'A1',
  'teens',
  8,
  1,
  'Name common foods and drinks. [Combination, L1, format E: choose-the-better-answer]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I like pizza' or 'I likes pizza'?"
    },
    {
      "speaker": "B",
      "text": "'I like pizza' is correct."
    },
    {
      "speaker": "A",
      "text": "Good! What do you drink?"
    },
    {
      "speaker": "B",
      "text": "I drink juice and water."
    }
  ],
  "note": "Choose the correct sentence first, then answer about your own food and drinks."
}$json$::jsonb,
  true
),
(
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '575bffa2-d438-4173-bb05-6da5cd84fc7f',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
  'Likes and Dislikes',
  'A1',
  'teens',
  8,
  2,
  'Unchanged by the rotation rework -- L2 format F, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  '1f3f8952-d8a3-4207-b679-523bae9bb872',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
  'At Mealtimes',
  'A1',
  'teens',
  8,
  3,
  'Talk about breakfast, lunch, and dinner. [Combination, L3, format M: student-led matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
      "text": "I eat rice [every day]."
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "For breakfast, I eat eggs."
    },
    {
      "speaker": "B",
      "text": "For breakfast, I eat eggs too!"
    },
    {
      "speaker": "A",
      "text": "For lunch, I eat a sandwich."
    },
    {
      "speaker": "B",
      "text": "For lunch, I eat rice."
    }
  ],
  "note": "Student says a line first this time. Teacher echoes it back, matching!"
}$json$::jsonb,
  true
),
(
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'f47eb519-f720-4831-9724-18bbcaf6e2dc',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
  'Ordering Food',
  'A1',
  'teens',
  8,
  4,
  'Unchanged by the rotation rework -- L4 format R, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  'e17e5a40-46bf-4d5c-8ea4-d558459d72e3',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
  'Unit Review',
  'A1',
  'teens',
  8,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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
  '05c53742-e92b-40f5-8d43-4d6bedad625e',
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

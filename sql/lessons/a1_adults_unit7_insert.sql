-- A1 Adults Unit 7: Food and Drinks (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Food and Drinks
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  'Food and Drinks',
  'A1',
  'adults',
  7,
  1,
  'Name common foods and drinks. [Combination, Lesson 1: notice/receptive, read-and-identify]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
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
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "Do you drink coffee or tea?",
    "Do you eat cheese?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
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
      "word": "Bread",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cheese",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you drink coffee?",
    "Do you eat cheese?"
  ],
  "student": [
    "Yes, I drink coffee.",
    "Yes, I eat cheese."
  ],
  "note": "Read the model text, then find the food words.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink [coffee] every morning."
    },
    {
      "speaker": "B",
      "text": "I drink [tea] instead."
    },
    {
      "speaker": "A",
      "text": "I eat [bread] and [cheese]."
    }
  ],
  "blanks": [
    "coffee",
    "tea",
    "cheese"
  ]
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I drink coffee every morning."
    },
    {
      "speaker": "B",
      "text": "I drink tea instead."
    },
    {
      "speaker": "A",
      "text": "I eat bread and cheese for breakfast."
    },
    {
      "speaker": "B",
      "text": "I like that too!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I drink coffee every morning. I eat bread and cheese for breakfast.",
  "questions": [
    "What does the writer drink?",
    "When does the writer drink coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I drink ___.",
    "I eat ___.",
    "For breakfast, I have ___."
  ]
}$json$::jsonb,
  true
),
(
  '53782ab4-d9c4-47f6-a28e-e66a3f2a3ae2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 foods or drinks",
    "Say 'I drink/eat ___'",
    "Talk about my breakfast"
  ],
  "challenge": "Tell me what you eat and drink for breakfast!"
}$json$::jsonb,
  true
);

-- Lesson 2: Likes and Dislikes
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  'Likes and Dislikes',
  'A1',
  'adults',
  7,
  2,
  'Say food likes and dislikes with a reason. [Combination, Lesson 2: controlled practice, fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
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
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😋",
  "questions": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "I like",
      "bg": "#FAECE7"
    },
    {
      "word": "I don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Delicious",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you like coffee?",
    "Why do you like it?"
  ],
  "student": [
    "Yes, I like coffee.",
    "I like it because it's delicious."
  ],
  "note": "Use the word bank: I like, I don't like, because, delicious.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[I like] coffee [because] it's [delicious]."
    },
    {
      "speaker": "B",
      "text": "[I don't like] tea."
    },
    {
      "speaker": "A",
      "text": "I like cheese too."
    }
  ],
  "blanks": [
    "i like",
    "because",
    "i don't like"
  ]
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you like coffee?"
    },
    {
      "speaker": "B",
      "text": "Yes, I like coffee because it's delicious. I don't like tea, though."
    },
    {
      "speaker": "A",
      "text": "I like cheese because it's tasty."
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
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like coffee because it's delicious. I don't like tea. I like cheese too.",
  "questions": [
    "Why does the writer like coffee?",
    "What doesn't the writer like?",
    "What else does the writer like?"
  ]
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___ because ___.",
    "I don't like ___.",
    "I also like ___."
  ]
}$json$::jsonb,
  true
),
(
  'f5d39944-a496-40c4-a36f-5298b6e1c349',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I like ___ because ___'",
    "Say 'I don't like ___'",
    "Give a one-clause reason"
  ],
  "challenge": "Tell me a food you like and a food you don't like, with a reason!"
}$json$::jsonb,
  true
);

-- Lesson 3: Meals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
  'Meals',
  'A1',
  'adults',
  7,
  3,
  'Talk about breakfast, lunch, and dinner. [Combination, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "What do you usually eat for lunch?",
    "What do you eat for dinner?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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
      "word": "Usually",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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
    "I usually eat eggs for breakfast.",
    "I eat rice for dinner."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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
      "text": "I [usually] eat rice for dinner."
    }
  ],
  "blanks": [
    "breakfast",
    "lunch",
    "usually"
  ]
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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
      "text": "I usually eat eggs for breakfast. What do you eat for lunch?"
    },
    {
      "speaker": "A",
      "text": "I eat a sandwich for lunch. I eat rice for dinner."
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
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "For breakfast, I eat eggs. For lunch, I eat a sandwich. For dinner, I usually eat rice.",
  "questions": [
    "What does the writer eat for breakfast?",
    "What does the writer eat for lunch?",
    "What does the writer usually eat for dinner?"
  ]
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "For breakfast, I eat ___.",
    "For lunch, I eat ___.",
    "For dinner, I usually eat ___."
  ]
}$json$::jsonb,
  true
),
(
  'b8acbb8b-567e-4a2c-ac16-0a0a322917f0',
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

-- Lesson 4: Ordering in a Café
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  'Ordering in a Café',
  'A1',
  'adults',
  7,
  4,
  'Combine food vocabulary into an ordering conversation. [Combination, Lesson 4: production, mini role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
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
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧾",
  "questions": [
    "What would you order at a café?",
    "Do you eat here or take food to go?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Can I have",
      "bg": "#FAECE7"
    },
    {
      "word": "To go",
      "bg": "#E1F5EE"
    },
    {
      "word": "Here or to go",
      "bg": "#EEEDFE"
    },
    {
      "word": "Anything else",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can I get you?",
    "Here or to go?"
  ],
  "student": [
    "Can I have a coffee, please?",
    "Here, please."
  ],
  "note": "Put it all together: order + place + politeness.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    },
    {
      "speaker": "B",
      "text": "[Here or to go]?"
    },
    {
      "speaker": "A",
      "text": "[To go], please."
    }
  ],
  "blanks": [
    "can i have",
    "here or to go",
    "to go"
  ]
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Good morning! Can I have a coffee and some bread, please?"
    },
    {
      "speaker": "B",
      "text": "Of course. Here or to go?"
    },
    {
      "speaker": "A",
      "text": "To go, please. Anything else I need?"
    },
    {
      "speaker": "B",
      "text": "That's all, thank you!"
    }
  ],
  "note": "Mini role-play: order food and drinks at a pretend café."
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Can I have a coffee and some bread, please? Here or to go? To go, please.",
  "questions": [
    "What did the customer order?",
    "What did the barista ask?",
    "Did the customer want it here or to go?"
  ]
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Can I have ___, please?",
    "Here or to go?",
    "___, please."
  ]
}$json$::jsonb,
  true
),
(
  '8f1bd7fe-746c-4759-b633-4b1a5ed066ff',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order politely with 'Can I have'",
    "Answer 'here or to go'",
    "Complete a café order"
  ],
  "challenge": "Order something from me at a pretend café!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  'Unit Review',
  'A1',
  'adults',
  7,
  5,
  'Review food, likes, mealtimes, and ordering. [Combination, Lesson 5: tier-matched mixed review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
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
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "☕",
  "questions": [
    "What is your favorite food?",
    "What do you eat for breakfast?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
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
      "word": "Like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Breakfast",
      "bg": "#EEEDFE"
    },
    {
      "word": "Can I have",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
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
    "My favorite food is cheese.",
    "I eat eggs for breakfast."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [food] is coffee and bread."
    },
    {
      "speaker": "B",
      "text": "I [like] cheese because it's tasty."
    },
    {
      "speaker": "A",
      "text": "[Can I have] a coffee, please?"
    }
  ],
  "blanks": [
    "food",
    "like",
    "can i have"
  ]
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your favorite food and drink."
    },
    {
      "speaker": "B",
      "text": "My favorite food is cheese. I like coffee because it's delicious."
    },
    {
      "speaker": "A",
      "text": "I eat eggs for breakfast every day."
    },
    {
      "speaker": "B",
      "text": "Can I have a coffee, please?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite food is cheese. I like coffee because it's delicious. I eat eggs for breakfast every day.",
  "questions": [
    "What is the favorite food?",
    "Why does the writer like coffee?",
    "What does the writer eat for breakfast?"
  ]
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite food is ___.",
    "I like ___ because ___.",
    "For breakfast, I eat ___."
  ]
}$json$::jsonb,
  true
),
(
  'ff8b84e5-607c-45ea-b3ce-b04af67458a7',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about favorite food and drink",
    "Give a reason",
    "Order food politely"
  ],
  "challenge": "Tell me all about your favorite food and drinks!"
}$json$::jsonb,
  true
);

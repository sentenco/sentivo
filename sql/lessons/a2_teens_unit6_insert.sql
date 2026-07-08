-- A2 Teens Unit 6: Food and Going Out (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Where Shall We Eat?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  'Where Shall We Eat?',
  'A2',
  'teens',
  6,
  1,
  'Suggest and respond to ideas about where to eat.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍜",
  "questions": [
    "Where do you like to eat with friends?",
    "Do you have a food craving right now?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Shall we",
      "bg": "#FAECE7"
    },
    {
      "word": "Craving",
      "bg": "#E1F5EE"
    },
    {
      "word": "Nearby",
      "bg": "#EEEDFE"
    },
    {
      "word": "Suggestion",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Shall we get pizza?",
    "What are you craving?"
  ],
  "student": [
    "Sure, that sounds great.",
    "I'm craving noodles."
  ],
  "note": "Practice suggesting a place to eat!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Shall we] try that new café?"
    },
    {
      "speaker": "B",
      "text": "I'm [craving] something sweet."
    },
    {
      "speaker": "A",
      "text": "There's a good place [nearby]."
    }
  ],
  "blanks": [
    "shall we",
    "craving",
    "nearby"
  ]
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Shall we get something to eat?"
    },
    {
      "speaker": "B",
      "text": "Sure, I'm craving noodles. Is there a place nearby?"
    },
    {
      "speaker": "A",
      "text": "Yes, there's a great noodle place two minutes away."
    },
    {
      "speaker": "B",
      "text": "Perfect, let's go!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message thread: Shall we grab lunch today? Sure! What are you craving? I'm craving something spicy. There's a new Thai place nearby. Sounds perfect, let's meet there at 1pm!",
  "questions": [
    "What is the person craving?",
    "What kind of place is nearby?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Shall we ___?",
    "I'm craving ___.",
    "There's a good place ___."
  ]
}$json$::jsonb,
  true
),
(
  '20fc1e19-96a0-4d24-8b7b-f17ea7084c7d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Suggest a place to eat",
    "Say 'Shall we...?'",
    "Respond to a food suggestion"
  ],
  "challenge": "Suggest a place to eat with me!"
}$json$::jsonb,
  true
);

-- Lesson 2: Ordering Food
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  'Ordering Food',
  'A2',
  'teens',
  6,
  2,
  'Order food politely using simple restaurant language.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍽️",
  "questions": [
    "How do you order food politely?",
    "Do you eat in or take food to go?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Order",
      "bg": "#FAECE7"
    },
    {
      "word": "Recommend",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bill",
      "bg": "#EEEDFE"
    },
    {
      "word": "To go",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What would you like to order?",
    "Would you like it to go?"
  ],
  "student": [
    "I'd like a burger, please.",
    "No, I'll eat here."
  ],
  "note": "Practice ordering politely!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'd like to [order] a sandwich."
    },
    {
      "speaker": "B",
      "text": "What do you [recommend]?"
    },
    {
      "speaker": "A",
      "text": "Can I have the [bill], please?"
    }
  ],
  "blanks": [
    "order",
    "recommend",
    "bill"
  ]
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What would you like to order?"
    },
    {
      "speaker": "B",
      "text": "I'd like the chicken sandwich, please. What do you recommend?"
    },
    {
      "speaker": "A",
      "text": "The pasta is great here. Would you like it to go?"
    },
    {
      "speaker": "B",
      "text": "No thanks, I'll eat here. Can I have the bill later?"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "At the café: Hi, what would you like to order? I'd like the veggie burger, please. Would you like fries with that? Yes, please. Anything to drink? Just water, thanks. Here's your bill whenever you're ready.",
  "questions": [
    "What did the customer order?",
    "Did they order fries?",
    "What did they drink?"
  ]
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I'd like to order ___.",
    "Can I have ___, please?",
    "I'll eat here / take it to go."
  ]
}$json$::jsonb,
  true
),
(
  '83f7247a-d1b2-47b5-b28a-3918f307e63a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Order food politely",
    "Ask for a recommendation",
    "Ask for the bill"
  ],
  "challenge": "Order a meal from me at a pretend restaurant!"
}$json$::jsonb,
  true
);

-- Lesson 3: Best and Worst Meals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  'Best and Worst Meals',
  'A2',
  'teens',
  6,
  3,
  'Compare meals and eating experiences using superlatives and comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🌶️",
  "questions": [
    "What is the tastiest meal you've had?",
    "What was your worst food experience?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tastiest",
      "bg": "#FAECE7"
    },
    {
      "word": "Worst",
      "bg": "#E1F5EE"
    },
    {
      "word": "Spicier",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fresher",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is the tastiest meal you've had?",
    "Was it spicier than usual?"
  ],
  "student": [
    "The tastiest meal was my grandma's soup.",
    "Yes, it was spicier than I expected."
  ],
  "note": "Think of your best and worst food memories!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "That was the [tastiest] meal I've ever had."
    },
    {
      "speaker": "B",
      "text": "This dish is [spicier] than the last one."
    },
    {
      "speaker": "A",
      "text": "That was honestly my [worst] meal ever."
    }
  ],
  "blanks": [
    "tastiest",
    "spicier",
    "worst"
  ]
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is the tastiest meal you've ever had?"
    },
    {
      "speaker": "B",
      "text": "My grandma's soup, definitely. It's fresher and tastier than any restaurant."
    },
    {
      "speaker": "A",
      "text": "My worst meal was at a new place, it was too spicy for me!"
    },
    {
      "speaker": "B",
      "text": "That sounds like a rough experience!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two friends compare food memories. Zara says the tastiest meal she had was her mom's homemade pasta, fresher than any restaurant. Omar says his worst meal was way spicier than he expected and he couldn't finish it.",
  "questions": [
    "What was Zara's tastiest meal?",
    "Why does Zara say it was better than a restaurant?",
    "What happened with Omar's meal?"
  ]
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The tastiest meal I've had was ___.",
    "It was ___ than ___.",
    "My worst food experience was ___."
  ]
}$json$::jsonb,
  true
),
(
  'b6043f6b-0e75-41e6-96b8-1d760b691a17',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use superlatives: tastiest, worst",
    "Use comparatives: spicier, fresher",
    "Talk about food memories"
  ],
  "challenge": "Tell me your best and worst food memories!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Food Review Post
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  'A Food Review Post',
  'A2',
  'teens',
  6,
  4,
  'Write a short food review post.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📝",
  "questions": [
    "Have you reviewed a restaurant before?",
    "What makes a good food review?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
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
      "word": "Overpriced",
      "bg": "#E1F5EE"
    },
    {
      "word": "Portion",
      "bg": "#EEEDFE"
    },
    {
      "word": "Atmosphere",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Was the food delicious?",
    "Was it overpriced?"
  ],
  "student": [
    "Yes, it was delicious.",
    "A little overpriced, but worth it."
  ],
  "note": "Think about a meal you'd review!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The food was [delicious]."
    },
    {
      "speaker": "B",
      "text": "It was a bit [overpriced] though."
    },
    {
      "speaker": "A",
      "text": "The [atmosphere] was really nice."
    }
  ],
  "blanks": [
    "delicious",
    "overpriced",
    "atmosphere"
  ]
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How was your meal at the new café?"
    },
    {
      "speaker": "B",
      "text": "The food was delicious and the atmosphere was cozy."
    },
    {
      "speaker": "A",
      "text": "Was it expensive?"
    },
    {
      "speaker": "B",
      "text": "A little overpriced, but the portion was big, so it was worth it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My review of the new café: the food was delicious and the atmosphere was cozy and quiet. The portions were generous. It was a little overpriced, but I would still recommend it for a special occasion.",
  "questions": [
    "What did the reviewer think of the food?",
    "What was the atmosphere like?",
    "Would the reviewer recommend it?"
  ]
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My review of ___: the food was ___.",
    "The atmosphere was ___.",
    "I would/wouldn't recommend it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'ebb643b7-ee3a-4759-a2af-a4d6d3db522c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Write a short food review",
    "Describe food and atmosphere",
    "Give a recommendation"
  ],
  "challenge": "Write and read me a food review!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  'Unit Review',
  'A2',
  'teens',
  6,
  5,
  'Review food suggestions, ordering, comparisons, and a food review.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🍕",
  "questions": [
    "Where do you like to eat?",
    "What is the tastiest food you know?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Craving",
      "bg": "#FAECE7"
    },
    {
      "word": "Order",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tastiest",
      "bg": "#EEEDFE"
    },
    {
      "word": "Review",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What are you craving?",
    "What would you order?"
  ],
  "student": [
    "I'm craving pizza.",
    "I'd order the pasta."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I'm [craving] something spicy."
    },
    {
      "speaker": "B",
      "text": "I'd like to [order] the noodles."
    },
    {
      "speaker": "A",
      "text": "That was the [tastiest] meal ever!"
    }
  ],
  "blanks": [
    "craving",
    "order",
    "tastiest"
  ]
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Shall we eat out today? What are you craving?"
    },
    {
      "speaker": "B",
      "text": "I'm craving noodles. I'd like to order the spicy ones."
    },
    {
      "speaker": "A",
      "text": "That was the tastiest meal I've had in months!"
    },
    {
      "speaker": "B",
      "text": "I should write a review about it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday, my friend and I decided to eat out. I was craving something spicy, so we ordered noodles at a new place nearby. It was the tastiest meal I've had in months! The atmosphere was nice too. I wrote a review recommending it to everyone.",
  "questions": [
    "What was the writer craving?",
    "What did they order?",
    "What did the writer do after the meal?"
  ]
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I was craving ___.",
    "We ordered ___.",
    "It was the tastiest/worst meal because ___."
  ]
}$json$::jsonb,
  true
),
(
  '67a88f45-3300-493f-9193-0aaed583d8d9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Suggest a place to eat",
    "Order food politely",
    "Compare meals",
    "Write a food review"
  ],
  "challenge": "Tell me all about your favorite food experience!"
}$json$::jsonb,
  true
);

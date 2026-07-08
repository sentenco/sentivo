-- A2 Kids Unit 2: Hobbies and Free Time (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Weekend Activities
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  'Weekend Activities',
  'A2',
  'kids',
  2,
  1,
  'Talk about weekend hobbies and simple preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
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
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛼",
  "questions": [
    "What do you do on weekends?",
    "Do you like to ride a bike?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Skate",
      "bg": "#FAECE7"
    },
    {
      "word": "Read comics",
      "bg": "#E1F5EE"
    },
    {
      "word": "Ride a bike",
      "bg": "#EEEDFE"
    },
    {
      "word": "Draw",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do on weekends?",
    "Do you like to skate?"
  ],
  "student": [
    "I like to ride a bike.",
    "I don't like to skate."
  ],
  "note": "Think of your favorite weekend activity!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I like to [skate] on weekends."
    },
    {
      "speaker": "B",
      "text": "I like to [read comics]."
    },
    {
      "speaker": "A",
      "text": "I don't like to [draw]."
    }
  ],
  "blanks": [
    "skate",
    "read comics",
    "draw"
  ]
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do on weekends?"
    },
    {
      "speaker": "B",
      "text": "I like to ride a bike. What about you?"
    },
    {
      "speaker": "A",
      "text": "I like to read comics and draw."
    },
    {
      "speaker": "B",
      "text": "That sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four kids talk about weekends. Sam likes to skate. Mia likes to read comics. Leo likes to ride a bike. Ana likes to draw. They all have different favorite activities!",
  "questions": [
    "What does Sam like to do?",
    "What does Mia like to do?",
    "What does Ana like to do?"
  ]
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On weekends, I like to ___.",
    "I don't like to ___.",
    "My favorite weekend activity is ___."
  ]
}$json$::jsonb,
  true
),
(
  '94c83a42-e031-4b7c-94de-e6164c90be4c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name weekend activities",
    "Say 'I like to ___'",
    "Say 'I don't like to ___'"
  ],
  "challenge": "Tell me your favorite weekend activity!"
}$json$::jsonb,
  true
);

-- Lesson 2: Last Weekend
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  'Last Weekend',
  'A2',
  'kids',
  2,
  2,
  'Say simple past sentences about last weekend.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
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
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📅",
  "questions": [
    "What did you do last weekend?",
    "Did you play a game?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Played",
      "bg": "#FAECE7"
    },
    {
      "word": "Watched",
      "bg": "#E1F5EE"
    },
    {
      "word": "Visited",
      "bg": "#EEEDFE"
    },
    {
      "word": "Helped",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do last weekend?",
    "Did you watch TV?"
  ],
  "student": [
    "I played with my friends.",
    "I watched a movie."
  ],
  "note": "Remember: yesterday and last weekend use the past!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Last weekend, I [played] football."
    },
    {
      "speaker": "B",
      "text": "I [watched] a movie."
    },
    {
      "speaker": "A",
      "text": "I [visited] my grandma."
    }
  ],
  "blanks": [
    "played",
    "watched",
    "visited"
  ]
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What did you do last weekend?"
    },
    {
      "speaker": "B",
      "text": "I played football and watched a movie."
    },
    {
      "speaker": "A",
      "text": "I visited my grandma and helped her in the garden."
    },
    {
      "speaker": "B",
      "text": "That sounds like a nice weekend!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Leo's Saturday was fun. In the morning, he played football with his friends. In the afternoon, he watched a movie at home. In the evening, he visited his grandma and helped her cook dinner.",
  "questions": [
    "What did Leo do in the morning?",
    "What did Leo do in the afternoon?",
    "Who did Leo visit in the evening?"
  ]
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Last weekend, I played ___.",
    "I watched ___.",
    "I visited ___."
  ]
}$json$::jsonb,
  true
),
(
  'cb950d2e-6444-4f6a-aa93-481989cccbeb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: played, watched, visited, helped",
    "Say what I did last weekend",
    "Ask 'What did you do?'"
  ],
  "challenge": "Tell me three things you did last weekend!"
}$json$::jsonb,
  true
);

-- Lesson 3: Fun Comparisons
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  'Fun Comparisons',
  'A2',
  'kids',
  2,
  3,
  'Compare hobbies using bigger, smaller, more, less.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
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
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚖️",
  "questions": [
    "Is cycling faster than walking?",
    "Is chess quiet or noisy?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Faster",
      "bg": "#FAECE7"
    },
    {
      "word": "Quieter",
      "bg": "#E1F5EE"
    },
    {
      "word": "More fun",
      "bg": "#EEEDFE"
    },
    {
      "word": "Less fun",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is cycling faster than walking?",
    "Which is more fun for you?"
  ],
  "student": [
    "Cycling is faster than walking.",
    "Football is more fun for me."
  ],
  "note": "Think of two hobbies to compare!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Cycling is [faster] than walking."
    },
    {
      "speaker": "B",
      "text": "Chess is [quieter] than football."
    },
    {
      "speaker": "A",
      "text": "Drawing is [more fun] than homework."
    }
  ],
  "blanks": [
    "faster",
    "quieter",
    "more fun"
  ]
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is cycling faster than walking?"
    },
    {
      "speaker": "B",
      "text": "Yes, cycling is faster! But walking is quieter."
    },
    {
      "speaker": "A",
      "text": "I think chess is more fun than football."
    },
    {
      "speaker": "B",
      "text": "Really? I think football is more fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Tom and Kim compare hobbies. Tom says cycling is faster than walking, but walking is quieter. Kim says chess is quieter than football, and she thinks chess is more fun because you have to think.",
  "questions": [
    "Is cycling faster or slower than walking?",
    "Is chess quieter or louder than football?",
    "Why does Kim like chess?"
  ]
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is faster than ___.",
    "___ is quieter than ___.",
    "I think ___ is more fun because ___."
  ]
}$json$::jsonb,
  true
),
(
  '41764c93-30d3-42b4-b7de-7d8eb147e27f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use comparatives: faster, quieter, more fun",
    "Compare two hobbies",
    "Give my opinion"
  ],
  "challenge": "Compare two of your hobbies for me!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Hobby Poster
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  'A Hobby Poster',
  'A2',
  'kids',
  2,
  4,
  'Describe a hobby in connected sentences for a mini poster.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
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
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📋",
  "questions": [
    "What tools do you need for your hobby?",
    "Where do you do your hobby?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tools",
      "bg": "#FAECE7"
    },
    {
      "word": "Place",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Poster",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "Where do you do it?"
  ],
  "student": [
    "My hobby is drawing.",
    "I do it at home."
  ],
  "note": "Think about your hobby, tools, place, and reason!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My hobby is drawing. I do it at [home]."
    },
    {
      "speaker": "B",
      "text": "I use pencils and paper as [tools]."
    },
    {
      "speaker": "A",
      "text": "I like it [because] it is relaxing."
    }
  ],
  "blanks": [
    "home",
    "tools",
    "because"
  ]
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your hobby and where do you do it?"
    },
    {
      "speaker": "B",
      "text": "My hobby is drawing. I do it at home with pencils and paper."
    },
    {
      "speaker": "A",
      "text": "I like it because it is relaxing and fun."
    },
    {
      "speaker": "B",
      "text": "That's a great hobby!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is drawing. I do it at home in my room. I use pencils, paper, and colors. I like it because it is relaxing and I can make anything I imagine.",
  "questions": [
    "What is the writer's hobby?",
    "Where does the writer draw?",
    "What tools does the writer use?"
  ]
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I like ___.",
    "I do it at ___.",
    "I like it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'a7c06b75-82ff-45ae-b08b-d8995100289b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my hobby, tools, and place",
    "Use 'because' to give a reason",
    "Make a mini hobby poster"
  ],
  "challenge": "Show and tell me about your hobby poster!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  'Unit Review',
  'A2',
  'kids',
  2,
  5,
  'Review hobbies, past tense, and comparisons.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
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
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎯",
  "questions": [
    "What is your favorite hobby?",
    "What did you do last weekend?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Weekend",
      "bg": "#E1F5EE"
    },
    {
      "word": "Faster",
      "bg": "#EEEDFE"
    },
    {
      "word": "Because",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "What did you do last weekend?"
  ],
  "student": [
    "My hobby is riding a bike.",
    "Last weekend I played with friends."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [hobby] is drawing."
    },
    {
      "speaker": "B",
      "text": "Last [weekend], I played football."
    },
    {
      "speaker": "A",
      "text": "Cycling is [faster] than walking."
    }
  ],
  "blanks": [
    "hobby",
    "weekend",
    "faster"
  ]
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite hobby?"
    },
    {
      "speaker": "B",
      "text": "I like riding a bike because it is fast and fun."
    },
    {
      "speaker": "A",
      "text": "What did you do last weekend?"
    },
    {
      "speaker": "B",
      "text": "I rode my bike and visited my friend."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have many hobbies. My favorite is riding a bike because it is fast and fun. Last weekend, I rode my bike in the park and visited my friend. Riding a bike is more fun than watching TV for me.",
  "questions": [
    "What is the writer's favorite hobby?",
    "What did the writer do last weekend?",
    "What does the writer think is more fun than TV?"
  ]
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite hobby is ___.",
    "Last weekend, I ___.",
    "___ is more fun than ___ for me."
  ]
}$json$::jsonb,
  true
),
(
  '8606999b-2c1e-4941-8ed9-7f37710193cf',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about hobbies",
    "Use past tense for last weekend",
    "Compare activities"
  ],
  "challenge": "Tell me all about your free time!"
}$json$::jsonb,
  true
);

-- A2 Kids Unit 6: Sports and Outdoor Fun (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Sports I Play
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  'Sports I Play',
  'A2',
  'kids',
  6,
  1,
  'Name common sports and say where or with whom they play them.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
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
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚽",
  "questions": [
    "What sport do you play?",
    "Do you play with friends or family?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Football",
      "bg": "#FAECE7"
    },
    {
      "word": "Swimming",
      "bg": "#E1F5EE"
    },
    {
      "word": "Badminton",
      "bg": "#EEEDFE"
    },
    {
      "word": "Basketball",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What sport do you play?",
    "Where do you play it?"
  ],
  "student": [
    "I play football at the park.",
    "I play with my friends."
  ],
  "note": "Think about your favorite sport!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I play [football] at the park with my friends."
    },
    {
      "speaker": "B",
      "text": "I play [swimming] at the pool with my sister."
    },
    {
      "speaker": "A",
      "text": "I play [basketball] at school."
    }
  ],
  "blanks": [
    "football",
    "swimming",
    "basketball"
  ]
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What sport do you play?"
    },
    {
      "speaker": "B",
      "text": "I play badminton in the garden with my brother."
    },
    {
      "speaker": "A",
      "text": "I play football at the park with my friends."
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
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four kids talk about sports. Sam plays football at the park with his friends. Mia plays swimming at the pool with her sister. Leo plays badminton in the garden. Ana plays basketball at school with her class.",
  "questions": [
    "Where does Sam play football?",
    "Who does Mia swim with?",
    "Where does Ana play basketball?"
  ]
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I play ___ at the ___.",
    "I play with my ___.",
    "My favorite sport is ___."
  ]
}$json$::jsonb,
  true
),
(
  '311e8c24-8610-4dd7-959d-863d7c24a25e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name common sports",
    "Say where I play a sport",
    "Say who I play with"
  ],
  "challenge": "Tell me your favorite sport and where you play it!"
}$json$::jsonb,
  true
);

-- Lesson 2: Better and Faster
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  'Better and Faster',
  'A2',
  'kids',
  6,
  2,
  'Compare sports and activities using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
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
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏃",
  "questions": [
    "Is swimming faster or slower than running?",
    "Which sport is more fun for you?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
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
      "word": "Harder",
      "bg": "#E1F5EE"
    },
    {
      "word": "More fun",
      "bg": "#EEEDFE"
    },
    {
      "word": "Safer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is football harder than swimming?",
    "Which sport is more fun?"
  ],
  "student": [
    "Football is harder than swimming.",
    "Basketball is more fun for me."
  ],
  "note": "Compare two sports you know!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Running is [faster] than walking."
    },
    {
      "speaker": "B",
      "text": "Swimming is [safer] than skating."
    },
    {
      "speaker": "A",
      "text": "Football is [more fun] than chess."
    }
  ],
  "blanks": [
    "faster",
    "safer",
    "more fun"
  ]
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is swimming faster than running?"
    },
    {
      "speaker": "B",
      "text": "No, running is faster! But swimming is safer."
    },
    {
      "speaker": "A",
      "text": "I think basketball is more fun than badminton."
    },
    {
      "speaker": "B",
      "text": "I think badminton is easier though!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Leo and Ana compare sports. Leo says football is harder than swimming, but more fun. Ana says swimming is safer than skating, and she thinks it is more relaxing. They both agree that being active is important.",
  "questions": [
    "What does Leo think is harder?",
    "What does Ana think is safer?",
    "What do they both agree on?"
  ]
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "___ is faster than ___.",
    "I think ___ is safer than ___.",
    "___ is more fun for me because ___."
  ]
}$json$::jsonb,
  true
),
(
  '8479dc91-3b26-4dd9-acfe-82fed0452b91',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use comparatives for sports",
    "Compare speed and difficulty",
    "Give my opinion about sports"
  ],
  "challenge": "Compare two sports and tell me which you prefer!"
}$json$::jsonb,
  true
);

-- Lesson 3: Sports Day Yesterday
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  'Sports Day Yesterday',
  'A2',
  'kids',
  6,
  3,
  'Talk about simple past events in a sports day story.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
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
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏆",
  "questions": [
    "Did you play a sport yesterday?",
    "Did you run or jump?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Ran",
      "bg": "#FAECE7"
    },
    {
      "word": "Jumped",
      "bg": "#E1F5EE"
    },
    {
      "word": "Cheered",
      "bg": "#EEEDFE"
    },
    {
      "word": "Won",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What did you do at sports day?",
    "Did you win?"
  ],
  "student": [
    "I ran and jumped.",
    "Yes, I won a race!"
  ],
  "note": "Think about a sports day you remember!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Yesterday I [ran] in a race."
    },
    {
      "speaker": "B",
      "text": "I [jumped] very high."
    },
    {
      "speaker": "A",
      "text": "Everyone [cheered] for me."
    }
  ],
  "blanks": [
    "ran",
    "jumped",
    "cheered"
  ]
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What happened at sports day yesterday?"
    },
    {
      "speaker": "B",
      "text": "First, we ran a race. Then, we jumped and played games."
    },
    {
      "speaker": "A",
      "text": "After that, everyone cheered. Finally, my team won!"
    },
    {
      "speaker": "B",
      "text": "Congratulations!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Yesterday was sports day at school. First, we ran a fast race. Then, we jumped as high as we could. After that, our friends cheered loudly. Finally, my team won the game! It was a great day.",
  "questions": [
    "What did they do first?",
    "What did they do after running?",
    "Who won the game?"
  ]
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Yesterday, I ___.",
    "Then, I ___.",
    "Finally, ___."
  ]
}$json$::jsonb,
  true
),
(
  'dfa2ab99-cf55-45fd-a3d6-5a7f2ad13112',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use past verbs: ran, jumped, cheered, won",
    "Tell a sports day story in order",
    "Say what happened yesterday"
  ],
  "challenge": "Tell me about a sports day you remember!"
}$json$::jsonb,
  true
);

-- Lesson 4: My Outdoor Challenge
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  'My Outdoor Challenge',
  'A2',
  'kids',
  6,
  4,
  'Describe a simple outdoor challenge and say why it is fun.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
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
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧗",
  "questions": [
    "What outdoor challenge have you tried?",
    "Do you like to climb?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Challenge",
      "bg": "#FAECE7"
    },
    {
      "word": "Climb",
      "bg": "#E1F5EE"
    },
    {
      "word": "Race",
      "bg": "#EEEDFE"
    },
    {
      "word": "Brave",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What challenge did you try?",
    "Was it fun or hard?"
  ],
  "student": [
    "I tried a bike race.",
    "It was hard but fun."
  ],
  "note": "Think of a challenge you tried outside!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I tried a bike [race] and it was fun."
    },
    {
      "speaker": "B",
      "text": "I tried to [climb] a tree, but it was hard."
    },
    {
      "speaker": "A",
      "text": "You were very [brave]!"
    }
  ],
  "blanks": [
    "race",
    "climb",
    "brave"
  ]
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What outdoor challenge did you try?"
    },
    {
      "speaker": "B",
      "text": "I tried a bike race. It was hard, but I liked it because it was exciting."
    },
    {
      "speaker": "A",
      "text": "I tried to climb a small hill. I felt brave!"
    },
    {
      "speaker": "B",
      "text": "That's amazing!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Tom tried a bike race in the park. It was hard, but he liked it because it was exciting and fast. He felt tired but happy. He wants to try climbing next because it looks like a brave challenge.",
  "questions": [
    "What challenge did Tom try?",
    "Why did Tom like it?",
    "What does Tom want to try next?"
  ]
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I tried ___.",
    "It was ___ because ___.",
    "Next, I want to try ___."
  ]
}$json$::jsonb,
  true
),
(
  'f7c6591d-1cbb-40f2-9976-94d3568b1035',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe an outdoor challenge",
    "Say why an activity is fun or hard",
    "Use 'because' to explain"
  ],
  "challenge": "Tell me about a challenge you want to try!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  'Unit Review',
  'A2',
  'kids',
  6,
  5,
  'Review sports, comparisons, and a past activity story.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
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
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏅",
  "questions": [
    "What sport do you play?",
    "What did you do yesterday?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Sport",
      "bg": "#FAECE7"
    },
    {
      "word": "Faster",
      "bg": "#E1F5EE"
    },
    {
      "word": "Yesterday",
      "bg": "#EEEDFE"
    },
    {
      "word": "Challenge",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite sport?",
    "What did you do at sports day?"
  ],
  "student": [
    "My favorite sport is football.",
    "I ran and jumped."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [sport] is swimming."
    },
    {
      "speaker": "B",
      "text": "Swimming is [faster] than walking."
    },
    {
      "speaker": "A",
      "text": "[Yesterday], I tried a new challenge."
    }
  ],
  "blanks": [
    "sport",
    "faster",
    "yesterday"
  ]
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite sport and why?"
    },
    {
      "speaker": "B",
      "text": "My favorite sport is basketball because it is more fun than chess."
    },
    {
      "speaker": "A",
      "text": "What did you do at sports day?"
    },
    {
      "speaker": "B",
      "text": "I ran a race and my team won!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love sports. My favorite is basketball because it is more fun than other games. Yesterday, my class had sports day. First, we ran a race. Then, we played basketball. My team won! It was a brave and exciting day.",
  "questions": [
    "What is the writer's favorite sport?",
    "What happened at sports day?",
    "Did the writer's team win?"
  ]
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite sport is ___ because ___.",
    "Yesterday, I ___.",
    "My outdoor challenge was ___."
  ]
}$json$::jsonb,
  true
),
(
  'b3f09129-6a31-4c0f-b96c-72e849be4bba',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about sports",
    "Compare sports",
    "Tell a past sports story",
    "Describe a challenge"
  ],
  "challenge": "Tell me all about sports and challenges you like!"
}$json$::jsonb,
  true
);

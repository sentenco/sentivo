-- A2 Kids Unit 7: Friends and Getting Along (5 lessons)
-- Generated from project_a2_kids_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Friends
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  'My Friends',
  'A2',
  'kids',
  7,
  1,
  'Describe a friend using simple appearance and personality words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
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
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧑‍🤝‍🧑",
  "questions": [
    "Who is your best friend?",
    "Is your friend funny?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Friendly",
      "bg": "#FAECE7"
    },
    {
      "word": "Funny",
      "bg": "#E1F5EE"
    },
    {
      "word": "Helpful",
      "bg": "#EEEDFE"
    },
    {
      "word": "Tall",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your friend like?",
    "Is she tall or short?"
  ],
  "student": [
    "My friend is friendly and funny.",
    "She is tall."
  ],
  "note": "Think about your best friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My friend is [friendly] and [funny]."
    },
    {
      "speaker": "B",
      "text": "My friend is [helpful]."
    },
    {
      "speaker": "A",
      "text": "My friend is [tall]."
    }
  ],
  "blanks": [
    "friendly",
    "funny",
    "helpful"
  ]
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your best friend like?"
    },
    {
      "speaker": "B",
      "text": "My friend is friendly and funny. She likes to tell jokes."
    },
    {
      "speaker": "A",
      "text": "My friend is tall and helpful. He likes to help everyone."
    },
    {
      "speaker": "B",
      "text": "Our friends sound great!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Meet four friends. Sam is friendly and tall. He likes basketball. Mia is funny and short. She likes to tell jokes. Leo is quiet and helpful. Ana is friendly and funny too. They are all good friends.",
  "questions": [
    "What is Sam like?",
    "What is Mia like?",
    "What is Leo like?"
  ]
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My friend is ___ and ___.",
    "He/She likes ___.",
    "I like my friend because ___."
  ]
}$json$::jsonb,
  true
),
(
  '9cbb6bf4-76ca-4d3d-a0ec-ae139a811650',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a friend's personality",
    "Describe a friend's appearance",
    "Say 'My friend is ___ and ___'"
  ],
  "challenge": "Describe your best friend to me!"
}$json$::jsonb,
  true
);

-- Lesson 2: Playing Together
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  'Playing Together',
  'A2',
  'kids',
  7,
  2,
  'Talk about shared activities with a friend using and and because.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
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
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What do you do with your friend?",
    "Do you draw together?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Draw",
      "bg": "#FAECE7"
    },
    {
      "word": "Talk",
      "bg": "#E1F5EE"
    },
    {
      "word": "Share",
      "bg": "#EEEDFE"
    },
    {
      "word": "Together",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What do you do together?",
    "Why do you like it?"
  ],
  "student": [
    "We draw and talk.",
    "We like it because it is fun."
  ],
  "note": "Think about something you do with a friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We [draw] and [talk] together."
    },
    {
      "speaker": "B",
      "text": "We [share] our toys."
    },
    {
      "speaker": "A",
      "text": "We play [together] because it is fun."
    }
  ],
  "blanks": [
    "draw",
    "share",
    "together"
  ]
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What do you do with your friend?"
    },
    {
      "speaker": "B",
      "text": "We draw and talk together. We like it because it is relaxing."
    },
    {
      "speaker": "A",
      "text": "We play outside because it is fun and we share our toys."
    },
    {
      "speaker": "B",
      "text": "That sounds like a great friendship!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Mia and her friend have a fun afternoon. They draw and talk together. They share their crayons. Then, they play outside because it is sunny. They like being together because they always have fun.",
  "questions": [
    "What do Mia and her friend do first?",
    "What do they share?",
    "Why do they play outside?"
  ]
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My friend and I ___ and ___.",
    "We share ___.",
    "We like it because ___."
  ]
}$json$::jsonb,
  true
),
(
  'da36ba1e-d61e-4b84-a8e5-a1916b95b7d0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about shared activities",
    "Use 'and' to connect ideas",
    "Use 'because' to give a reason"
  ],
  "challenge": "Tell me what you do with your friend and why you like it!"
}$json$::jsonb,
  true
);

-- Lesson 3: A Small Problem
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  'A Small Problem',
  'A2',
  'kids',
  7,
  3,
  'Understand and retell a simple social problem story in the past.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
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
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧩",
  "questions": [
    "Have you ever lost a toy?",
    "Did a friend help you find it?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Wanted",
      "bg": "#FAECE7"
    },
    {
      "word": "Lost",
      "bg": "#E1F5EE"
    },
    {
      "word": "Found",
      "bg": "#EEEDFE"
    },
    {
      "word": "Shared",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What happened in the story?",
    "Who was helpful?"
  ],
  "student": [
    "Leo lost his ball.",
    "Ana helped him find it."
  ],
  "note": "Think about the order of the story!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Leo [wanted] to play, but he [lost] his ball."
    },
    {
      "speaker": "B",
      "text": "Ana [found] the ball under the tree."
    },
    {
      "speaker": "A",
      "text": "They [shared] the ball and played together."
    }
  ],
  "blanks": [
    "wanted",
    "found",
    "shared"
  ]
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What happened to Leo's ball?"
    },
    {
      "speaker": "B",
      "text": "First, Leo wanted to play, but he lost his ball."
    },
    {
      "speaker": "A",
      "text": "Then, Ana looked for it. After that, she found it under the tree."
    },
    {
      "speaker": "B",
      "text": "Finally, they shared the ball and played together!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Leo wanted to play football, but he lost his ball. He felt sad. Ana saw Leo was sad and helped him look. After that, she found the ball under a tree. Finally, they shared the ball and played together happily.",
  "questions": [
    "What did Leo lose?",
    "Who helped Leo?",
    "Where was the ball found?"
  ]
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, Leo ___.",
    "Then, Ana ___.",
    "Finally, they ___."
  ]
}$json$::jsonb,
  true
),
(
  '049a8a6a-4744-4955-a0cb-1d6f1348203f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Retell a simple past story",
    "Use past verbs: wanted, lost, found, shared",
    "Say who was helpful"
  ],
  "challenge": "Tell me a short story about a small problem and how it was solved!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Good Friend Note
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  'A Good Friend Note',
  'A2',
  'kids',
  7,
  4,
  'Write a short note about what makes a good friend.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
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
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "💌",
  "questions": [
    "What makes a good friend?",
    "Is your friend kind?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Kind",
      "bg": "#FAECE7"
    },
    {
      "word": "Honest",
      "bg": "#E1F5EE"
    },
    {
      "word": "Loyal",
      "bg": "#EEEDFE"
    },
    {
      "word": "Note",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What makes a good friend?",
    "Is your friend kind?"
  ],
  "student": [
    "A good friend is kind and honest.",
    "Yes, my friend is very kind."
  ],
  "note": "Think about the qualities of a good friend!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A good friend is [kind] and helpful."
    },
    {
      "speaker": "B",
      "text": "A good friend is [honest]."
    },
    {
      "speaker": "A",
      "text": "A good friend is [loyal] too."
    }
  ],
  "blanks": [
    "kind",
    "honest",
    "loyal"
  ]
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What makes a good friend?"
    },
    {
      "speaker": "B",
      "text": "A good friend is kind and honest because they tell the truth."
    },
    {
      "speaker": "A",
      "text": "A good friend is loyal and shares their things."
    },
    {
      "speaker": "B",
      "text": "I agree! My friend is like that."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "A good friend is kind and helpful. My friend Mia is a good friend because she is honest and she always shares her lunch with me. We play together and help each other. I am happy to have a good friend like her.",
  "questions": [
    "What two qualities does the text mention first?",
    "What does Mia share?",
    "Why is the writer happy?"
  ]
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A good friend is ___ and ___.",
    "My friend is a good friend because ___.",
    "We ___ together."
  ]
}$json$::jsonb,
  true
),
(
  'c1f0fa50-89a9-44ad-acf5-ad5434004187',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name good-friend qualities",
    "Write a short note about a friend",
    "Use 'because' to explain"
  ],
  "challenge": "Write and read me a note about a good friend!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  'Unit Review',
  'A2',
  'kids',
  7,
  5,
  'Review friend descriptions, shared activities, and a problem story.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
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
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👫",
  "questions": [
    "Who is your best friend?",
    "What do you do together?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Friend",
      "bg": "#FAECE7"
    },
    {
      "word": "Together",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
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
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your friend like?",
    "What makes a good friend?"
  ],
  "student": [
    "My friend is kind and funny.",
    "A good friend is honest and helpful."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [friend] is kind and funny."
    },
    {
      "speaker": "B",
      "text": "We play [together] every day."
    },
    {
      "speaker": "A",
      "text": "She [helped] me find my toy."
    }
  ],
  "blanks": [
    "friend",
    "together",
    "helped"
  ]
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your best friend."
    },
    {
      "speaker": "B",
      "text": "My friend is kind and funny. We play together every day."
    },
    {
      "speaker": "A",
      "text": "Yesterday, she helped me find my lost toy."
    },
    {
      "speaker": "B",
      "text": "That's what good friends do!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My best friend is Mia. She is kind and funny. We draw and play together every day. Yesterday, I lost my pencil, and Mia helped me find it. A good friend is kind, honest, and helpful. I am glad Mia is my friend.",
  "questions": [
    "What is Mia like?",
    "What did Mia help find?",
    "What makes a good friend, according to the text?"
  ]
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My best friend is ___.",
    "We ___ together.",
    "A good friend is ___."
  ]
}$json$::jsonb,
  true
),
(
  '7e33f840-8fa9-4a5b-903d-f57940384d38',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe a friend",
    "Talk about shared activities",
    "Retell a small problem story",
    "Say what makes a good friend"
  ],
  "challenge": "Tell me all about your best friend!"
}$json$::jsonb,
  true
);

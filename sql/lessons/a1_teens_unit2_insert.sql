-- A1 Teens Unit 2: My Family (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  'My Family',
  'A1',
  'teens',
  2,
  1,
  'Name immediate family members. [Foundation, L1, format F: fill-in-blank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
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
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Do you have a sister or brother?",
    "Who is in your family?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mom",
      "bg": "#FAECE7"
    },
    {
      "word": "Dad",
      "bg": "#E1F5EE"
    },
    {
      "word": "Sister",
      "bg": "#EEEDFE"
    },
    {
      "word": "Brother",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your mom?"
  ],
  "student": [
    "This is my mom.",
    "Yes, this is my dad."
  ],
  "note": "Point to a family photo when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [Mom]."
    },
    {
      "speaker": "B",
      "text": "This is my [Dad]."
    },
    {
      "speaker": "A",
      "text": "I have one [sister]."
    }
  ],
  "blanks": [
    "mom",
    "dad",
    "sister"
  ]
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my mom."
    },
    {
      "speaker": "B",
      "text": "This is my dad."
    },
    {
      "speaker": "A",
      "text": "I have one sister."
    },
    {
      "speaker": "B",
      "text": "I have one brother!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. This is my mom. This is my dad. I have one sister and one brother.",
  "questions": [
    "Who is in the family?",
    "How many sisters?",
    "How many brothers?"
  ]
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ sister(s).",
    "I have ___ brother(s)."
  ]
}$json$::jsonb,
  true
),
(
  '6a45f88b-04dc-4804-9e4e-02f08cdbde66',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 family members",
    "Say 'This is my ___'",
    "Talk about my family"
  ],
  "challenge": "Tell me who is in your family!"
}$json$::jsonb,
  true
);

-- Lesson 2: Talking About Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  'Talking About Family',
  'A1',
  'teens',
  2,
  2,
  'Describe family members with simple adjectives. [Foundation, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
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
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵",
  "questions": [
    "Is your grandma kind?",
    "Is someone in your family funny?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Grandma",
      "bg": "#FAECE7"
    },
    {
      "word": "Grandpa",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Funny",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your grandma kind?",
    "Is your dad funny?"
  ],
  "student": [
    "Yes, my grandma is kind.",
    "Yes, my dad is funny."
  ],
  "note": "Use the word bank: grandma, grandpa, kind, funny.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [grandma]."
    },
    {
      "speaker": "B",
      "text": "This is my [grandpa]."
    },
    {
      "speaker": "A",
      "text": "She is [kind]."
    }
  ],
  "blanks": [
    "grandma",
    "grandpa",
    "kind"
  ]
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my grandma. She is kind."
    },
    {
      "speaker": "B",
      "text": "This is my grandpa. He is funny."
    },
    {
      "speaker": "A",
      "text": "Nice to meet your family!"
    },
    {
      "speaker": "B",
      "text": "Nice to meet yours too!"
    }
  ],
  "note": "Mini role-play: introduce your grandma and grandpa, using the lines above as your script."
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My grandma is kind. My grandpa is funny. My mom is kind too. My family is nice.",
  "questions": [
    "Is grandma kind or unkind?",
    "Is grandpa funny or serious?",
    "Is mom kind or unkind?"
  ]
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My grandma is ___.",
    "My grandpa is ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  'd210d03c-b55d-4a6a-a3b7-447a5a917ffb',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'kind' and 'funny'",
    "Describe a family member",
    "Say 'My ___ is ___'"
  ],
  "challenge": "Describe one person in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: People I Know
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  'People I Know',
  'A1',
  'teens',
  2,
  3,
  'Talk about cousins, aunts, and uncles. [Foundation, L3, format M: student-led matching]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
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
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👪",
  "questions": [
    "Do you have a cousin?",
    "Do you have an aunt or uncle?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cousin",
      "bg": "#FAECE7"
    },
    {
      "word": "Aunt",
      "bg": "#E1F5EE"
    },
    {
      "word": "Uncle",
      "bg": "#EEEDFE"
    },
    {
      "word": "Family",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a cousin?",
    "How many aunts do you have?"
  ],
  "student": [
    "Yes, I have two cousins.",
    "I have one aunt."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [cousin]."
    },
    {
      "speaker": "B",
      "text": "I have an [aunt] and an [uncle]."
    },
    {
      "speaker": "A",
      "text": "My whole [family] is big!"
    }
  ],
  "blanks": [
    "cousin",
    "aunt",
    "family"
  ]
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a cousin."
    },
    {
      "speaker": "B",
      "text": "I have a cousin too!"
    },
    {
      "speaker": "A",
      "text": "I have an aunt and an uncle."
    },
    {
      "speaker": "B",
      "text": "I have an aunt and an uncle too!"
    }
  ],
  "note": "Student says a line first this time. Teacher echoes it back, matching!"
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have two cousins. I have one aunt and one uncle. My family is big!",
  "questions": [
    "How many cousins?",
    "How many aunts?",
    "Is the family big or small?"
  ]
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have ___ cousin(s).",
    "I have ___ aunt(s) and ___ uncle(s).",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '1c148a04-c36d-4048-8f2c-41ec8ffbe936',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name cousin, aunt, uncle",
    "Ask about someone's family",
    "Say if my family is big or small"
  ],
  "challenge": "Ask me about my family, then tell me about yours!"
}$json$::jsonb,
  true
);

-- Lesson 4: Family Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  'Family Questions',
  'A1',
  'teens',
  2,
  4,
  'Combine family vocabulary into a short talk. [Foundation, L4, format E: error-spot + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
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
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "Is your family big or small?",
    "Do you love your family?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Big",
      "bg": "#FAECE7"
    },
    {
      "word": "Small",
      "bg": "#E1F5EE"
    },
    {
      "word": "Together",
      "bg": "#EEEDFE"
    },
    {
      "word": "Love",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your family big or small?",
    "Do you like being together?"
  ],
  "student": [
    "My family is big.",
    "Yes, I love my family."
  ],
  "note": "Put it all together: family members + description.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My family is [big]."
    },
    {
      "speaker": "B",
      "text": "My family is [small]."
    },
    {
      "speaker": "A",
      "text": "I [love] my family."
    }
  ],
  "blanks": [
    "big",
    "small",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your family big or small?"
    },
    {
      "speaker": "B",
      "text": "My family is big! We are together every weekend."
    },
    {
      "speaker": "A",
      "text": "One of these is wrong: 'My family is big small.' Can you fix it?"
    },
    {
      "speaker": "B",
      "text": "My family is big! Just one word, not two. Now tell me about your own family."
    }
  ],
  "note": "Find the mistake in the sentence, fix it, then describe your own family in your own words."
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My family is big. I have a mom, a dad, and two sisters. We are together every weekend. I love my family.",
  "questions": [
    "Is the family big or small?",
    "Who is in the family?",
    "When are they together?"
  ]
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My family is ___.",
    "I have ___.",
    "I love my family because ___."
  ]
}$json$::jsonb,
  true
),
(
  'df3f8d5d-92b5-4f8d-974d-c9c49c6bf00f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my family size",
    "Name family members",
    "Say I love my family"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  'Unit Review',
  'A1',
  'teens',
  2,
  5,
  'Unit Review -- tier-matched mixed review. Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
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
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Is your family big or small?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Family",
      "bg": "#FAECE7"
    },
    {
      "word": "Mom",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Big",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is your family big or small?"
  ],
  "student": [
    "This is my mom.",
    "My family is big."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [family]."
    },
    {
      "speaker": "B",
      "text": "This is my [mom]. She is [kind]."
    },
    {
      "speaker": "A",
      "text": "My family is [big]."
    }
  ],
  "blanks": [
    "family",
    "mom",
    "big"
  ]
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your family."
    },
    {
      "speaker": "B",
      "text": "This is my mom. She is kind. My family is big."
    },
    {
      "speaker": "A",
      "text": "I have a cousin and an aunt too."
    },
    {
      "speaker": "B",
      "text": "Nice family!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. My mom is kind. My family is big. I love my family.",
  "questions": [
    "Who is kind?",
    "Is the family big or small?",
    "Does the writer love the family?"
  ]
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my family.",
    "My ___ is ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '78dc55b7-4066-4eea-9495-f2e679f2c09e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name family members",
    "Describe a family member",
    "Say if my family is big or small"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

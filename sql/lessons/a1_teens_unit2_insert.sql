-- A1 Teens Unit 2: My Family (5 lessons) — TIERED (Foundation)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
  'My Family',
  'A1',
  'teens',
  2,
  1,
  'Name immediate family members. [Foundation, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [mom]."
    },
    {
      "speaker": "B",
      "text": "This is my [dad]."
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'a9351fe8-670a-424d-989d-0d0fdc6ed0a8',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
  'Talking About Family',
  'A1',
  'teens',
  2,
  2,
  'Describe family members with simple adjectives. [Foundation, Lesson 2: controlled practice]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [grandma] is kind."
    },
    {
      "speaker": "B",
      "text": "My [grandpa] is funny."
    },
    {
      "speaker": "A",
      "text": "My mom is [kind] too."
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your grandma kind?"
    },
    {
      "speaker": "B",
      "text": "Yes, my grandma is kind. Is your grandpa funny?"
    },
    {
      "speaker": "A",
      "text": "Yes, my grandpa is very funny!"
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  'b428c7b2-3fd4-4336-a4d0-dc4cc9d6479b',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
  'People I Know',
  'A1',
  'teens',
  2,
  3,
  'Talk about cousins, aunts, and uncles. [Foundation, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a cousin?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have two cousins. Do you have an aunt?"
    },
    {
      "speaker": "A",
      "text": "Yes, I have one aunt and one uncle."
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '1cb88731-6cbd-4281-86df-b0db71509f30',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
  'Family Questions',
  'A1',
  'teens',
  2,
  4,
  'Combine family vocabulary into a short family talk. [Foundation, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
      "text": "We are [together] every weekend."
    },
    {
      "speaker": "A",
      "text": "I [love] my family."
    }
  ],
  "blanks": [
    "big",
    "together",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
      "text": "My family is big. I have a mom, a dad, two sisters, and one brother."
    },
    {
      "speaker": "A",
      "text": "We are together every weekend. I love my family."
    },
    {
      "speaker": "B",
      "text": "That sounds wonderful!"
    }
  ],
  "note": "Mini talk: tell me all about your family in a few sentences."
}$json$::jsonb,
  true
),
(
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '5176262c-1c4c-49f8-94d2-9accded32ce0',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
  'Unit Review',
  'A1',
  'teens',
  2,
  5,
  'Review family vocabulary and descriptions. [Foundation, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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
  '4a487eca-34d9-438e-9910-1db95d62a20f',
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

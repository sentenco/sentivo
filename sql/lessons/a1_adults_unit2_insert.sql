-- A1 Adults Unit 2: My Family (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Family
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  'My Family',
  'A1',
  'adults',
  2,
  1,
  'Name immediate family members. [Foundation, L1, format F: heaviest scaffold, full word bank]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
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
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Do you have a husband or wife?",
    "Do you have children?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Husband",
      "bg": "#FAECE7"
    },
    {
      "word": "Wife",
      "bg": "#E1F5EE"
    },
    {
      "word": "Son",
      "bg": "#EEEDFE"
    },
    {
      "word": "Daughter",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Is this your husband?"
  ],
  "student": [
    "This is my husband.",
    "Yes, this is my wife."
  ],
  "note": "Read the model text, then practice it.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [husband]."
    },
    {
      "speaker": "B",
      "text": "This is my [wife]."
    },
    {
      "speaker": "A",
      "text": "I have one [son]."
    }
  ],
  "blanks": [
    "husband",
    "wife",
    "son"
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my husband."
    },
    {
      "speaker": "B",
      "text": "This is my wife."
    },
    {
      "speaker": "A",
      "text": "I have one son."
    },
    {
      "speaker": "B",
      "text": "I have one daughter!"
    }
  ],
  "note": "Fill in the blanks with the word bank, then read the whole introduction together."
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my husband. This is my wife. I have one son and one daughter.",
  "questions": [
    "Who is in the family?",
    "How many sons?",
    "How many daughters?"
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have ___ son(s).",
    "I have ___ daughter(s)."
  ]
}$json$::jsonb,
  true
),
(
  'e5c553f5-53a9-40fa-bc03-23029008894f',
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
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  'Talking About Family',
  'A1',
  'adults',
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
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
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
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👵",
  "questions": [
    "Are your parents kind?",
    "Are your parents retired?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Parents",
      "bg": "#FAECE7"
    },
    {
      "word": "Kind",
      "bg": "#E1F5EE"
    },
    {
      "word": "Hardworking",
      "bg": "#EEEDFE"
    },
    {
      "word": "Retired",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Are your parents kind?",
    "Is your father retired?"
  ],
  "student": [
    "Yes, my parents are kind.",
    "Yes, my father is retired."
  ],
  "note": "Use the word bank: parents, kind, hardworking, retired.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [parents] are kind."
    },
    {
      "speaker": "B",
      "text": "My father is [hardworking]."
    },
    {
      "speaker": "A",
      "text": "My mother is [retired]."
    }
  ],
  "blanks": [
    "parents",
    "hardworking",
    "retired"
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My parents are kind. My father is hardworking."
    },
    {
      "speaker": "B",
      "text": "My mother is retired now."
    },
    {
      "speaker": "A",
      "text": "That's nice. My parents are retired too."
    },
    {
      "speaker": "B",
      "text": "Now tell me about your own parents using these lines!"
    }
  ],
  "note": "Short role-play: introduce your parents to a new colleague using the lines above."
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My parents are kind. My father is hardworking. My mother is retired. My family is nice.",
  "questions": [
    "Are the parents kind or unkind?",
    "Is the father hardworking?",
    "Is the mother working or retired?"
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My parents are ___.",
    "My father is ___.",
    "My mother is ___."
  ]
}$json$::jsonb,
  true
),
(
  '72d0b2c4-550e-4f13-810f-eaa7b325ece8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'kind' and 'hardworking'",
    "Describe a family member",
    "Say 'My ___ is ___'"
  ],
  "challenge": "Describe one person in your family!"
}$json$::jsonb,
  true
);

-- Lesson 3: Describing People
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  'Describing People',
  'A1',
  'adults',
  2,
  3,
  'Describe family with simple physical descriptions. [Foundation, L3, format M: read and identify, then match]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
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
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📏",
  "questions": [
    "Is your son tall or short?",
    "Are your parents young or old?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Tall",
      "bg": "#FAECE7"
    },
    {
      "word": "Short",
      "bg": "#E1F5EE"
    },
    {
      "word": "Young",
      "bg": "#EEEDFE"
    },
    {
      "word": "Old",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your son tall?",
    "Are your parents old?"
  ],
  "student": [
    "Yes, my son is tall.",
    "My parents are not old, they are young."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My son is [tall]."
    },
    {
      "speaker": "B",
      "text": "My daughter is [short]."
    },
    {
      "speaker": "A",
      "text": "My wife is [young]."
    }
  ],
  "blanks": [
    "tall",
    "short",
    "young"
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My son is tall."
    },
    {
      "speaker": "B",
      "text": "My son is tall too!"
    },
    {
      "speaker": "A",
      "text": "My daughter is short."
    },
    {
      "speaker": "B",
      "text": "My daughter is short too!"
    }
  ],
  "note": "Read the model line, find the describing word, then say a matching sentence about your own family."
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My son is tall. My daughter is short. My wife is young. My family is nice.",
  "questions": [
    "Is the son tall or short?",
    "Is the daughter tall or short?",
    "Is the wife young or old?"
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My son/daughter is ___.",
    "My husband/wife is ___.",
    "My family is ___."
  ]
}$json$::jsonb,
  true
),
(
  '77778ac6-9420-42ee-a334-cfe751b33aa2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'tall', 'short', 'young', 'old'",
    "Describe a family member's appearance",
    "Ask about someone's family"
  ],
  "challenge": "Describe one family member's appearance to me!"
}$json$::jsonb,
  true
);

-- Lesson 4: Family Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  'Family Questions',
  'A1',
  'adults',
  2,
  4,
  'Combine family vocabulary into a short description. [Foundation, L4, format E: choose-the-better-response + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
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
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Live with",
      "bg": "#FAECE7"
    },
    {
      "word": "Together",
      "bg": "#E1F5EE"
    },
    {
      "word": "Close",
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
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who do you live with?",
    "Are you close to your family?"
  ],
  "student": [
    "I live with my husband and children.",
    "Yes, we are close."
  ],
  "note": "Put it all together: family members + description.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [live with] my wife and two children."
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
    "live with",
    "together",
    "love"
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I live with my family' or 'I live in my family'?"
    },
    {
      "speaker": "B",
      "text": "'I live with my family' is correct."
    },
    {
      "speaker": "A",
      "text": "Good. Now tell me: who do you live with, and are you close to them?"
    },
    {
      "speaker": "B",
      "text": "I live with my husband and children. We are close."
    }
  ],
  "note": "Choose the correct sentence first, then answer fully in your own words about your own family."
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I live with my husband and one son. My parents are retired. We are close, and I love my family.",
  "questions": [
    "Who does the writer live with?",
    "Are the parents working or retired?",
    "Is the family close?"
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I live with ___.",
    "My family is ___.",
    "I love my family because ___."
  ]
}$json$::jsonb,
  true
),
(
  '716efe02-e2ee-4a6d-81c2-6f68dce816d9',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe who I live with",
    "Describe my family",
    "Say I am close to my family"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  'Unit Review',
  'A1',
  'adults',
  2,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
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
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👨‍👩‍👧‍👦",
  "questions": [
    "Who is in your family?",
    "Who do you live with?"
  ],
  "title": "Let's begin"
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
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
      "word": "Husband",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kind",
      "bg": "#EEEDFE"
    },
    {
      "word": "Live with",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Who is this?",
    "Who do you live with?"
  ],
  "student": [
    "This is my husband.",
    "I live with my family."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
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
      "text": "This is my [husband]. He is [kind]."
    },
    {
      "speaker": "A",
      "text": "I [live with] my family."
    }
  ],
  "blanks": [
    "family",
    "husband",
    "live with"
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
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
      "text": "This is my wife. She is kind. I live with my family."
    },
    {
      "speaker": "A",
      "text": "I have one daughter and one son too."
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
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my family. My wife is kind. I live with my family. I love my family.",
  "questions": [
    "Who is kind?",
    "Who does the writer live with?",
    "Does the writer love the family?"
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my family.",
    "My ___ is ___.",
    "I live with ___."
  ]
}$json$::jsonb,
  true
),
(
  '5fe9e769-07c2-4526-b199-7b00081258d1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name family members",
    "Describe a family member",
    "Say who I live with"
  ],
  "challenge": "Tell me all about your family!"
}$json$::jsonb,
  true
);

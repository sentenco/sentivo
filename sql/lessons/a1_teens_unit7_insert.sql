-- A1 Teens Unit 7: My Room (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  'My Room',
  'A1',
  'teens',
  7,
  1,
  'Name furniture and room objects. [Combination, L1, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
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
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛏️",
  "questions": [
    "Do you have a desk in your room?",
    "Is your bed big or small?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Bed",
      "bg": "#FAECE7"
    },
    {
      "word": "Desk",
      "bg": "#E1F5EE"
    },
    {
      "word": "Chair",
      "bg": "#EEEDFE"
    },
    {
      "word": "Window",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your room?",
    "Do you have a desk?"
  ],
  "student": [
    "I have a bed.",
    "Yes, I have a desk."
  ],
  "note": "Point to something in your room!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a [bed]."
    },
    {
      "speaker": "B",
      "text": "I have a [desk] and a [chair]."
    },
    {
      "speaker": "A",
      "text": "I have a [window] too."
    }
  ],
  "blanks": [
    "bed",
    "desk",
    "window"
  ]
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I have a bed in my room."
    },
    {
      "speaker": "B",
      "text": "I have a desk and a chair."
    },
    {
      "speaker": "A",
      "text": "I have a window too."
    },
    {
      "speaker": "B",
      "text": "Now describe your own room using these lines!"
    }
  ],
  "note": "Short role-play: use the exact lines above to describe a room, then describe your own."
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a bed in my room. I have a desk and a chair. I have a window too.",
  "questions": [
    "What does the writer have?",
    "What is at the desk?",
    "Does the room have a window?"
  ]
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___ in my room.",
    "I have a ___ and a ___.",
    "My room has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '5a46bbef-8719-4582-a2ee-ded2fd6e575b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 room objects",
    "Say 'I have a ___'",
    "Talk about my room"
  ],
  "challenge": "Tell me what is in your room!"
}$json$::jsonb,
  true
);

-- Lesson 2: In My Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  'In My Room',
  'A1',
  'teens',
  7,
  2,
  'Use ''there is/are'' and prepositions of place. [Combination, L2, format M: teacher models, student echoes]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
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
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "📍",
  "questions": [
    "What is on your desk?",
    "What is next to your bed?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "There is",
      "bg": "#FAECE7"
    },
    {
      "word": "There are",
      "bg": "#E1F5EE"
    },
    {
      "word": "On",
      "bg": "#EEEDFE"
    },
    {
      "word": "Next to",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is on your desk?",
    "What is next to your bed?"
  ],
  "student": [
    "There is a lamp on my desk.",
    "There is a chair next to my bed."
  ],
  "note": "Use the word bank: there is, there are, on, next to.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[There is] a lamp [on] my desk."
    },
    {
      "speaker": "B",
      "text": "[There are] books [on] my shelf."
    },
    {
      "speaker": "A",
      "text": "There is a chair [next to] my bed."
    }
  ],
  "blanks": [
    "there is",
    "there are",
    "next to"
  ]
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "There is a lamp on my desk."
    },
    {
      "speaker": "B",
      "text": "There are books on my shelf."
    },
    {
      "speaker": "A",
      "text": "There is a chair next to my bed."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "There is a lamp on my desk. There are books on my shelf. There is a chair next to my bed.",
  "questions": [
    "What is on the desk?",
    "What is on the shelf?",
    "What is next to the bed?"
  ]
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "There is a ___ on my ___.",
    "There are ___ on my ___.",
    "There is a ___ next to my ___."
  ]
}$json$::jsonb,
  true
),
(
  '7b234a38-e3e7-4813-98ec-e03210a9fa22',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Use 'there is' and 'there are'",
    "Use 'on' and 'next to'",
    "Describe where things are"
  ],
  "challenge": "Tell me what's in your room and where!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Space
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  'My Space',
  'A1',
  'teens',
  7,
  3,
  'Unchanged by the rotation rework -- L3 format E, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
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
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧹",
  "questions": [
    "Is your room messy or tidy?",
    "Is your room colorful?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Messy",
      "bg": "#FAECE7"
    },
    {
      "word": "Tidy",
      "bg": "#E1F5EE"
    },
    {
      "word": "Colorful",
      "bg": "#EEEDFE"
    },
    {
      "word": "Cozy",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is your room messy or tidy?",
    "Is it colorful?"
  ],
  "student": [
    "My room is tidy.",
    "Yes, it's colorful."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My room is [tidy], not [messy]."
    },
    {
      "speaker": "B",
      "text": "My room is [colorful]."
    },
    {
      "speaker": "A",
      "text": "It is [cozy]."
    }
  ],
  "blanks": [
    "tidy",
    "messy",
    "colorful"
  ]
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is your room messy or tidy?"
    },
    {
      "speaker": "B",
      "text": "My room is tidy. Is your room colorful?"
    },
    {
      "speaker": "A",
      "text": "Yes, it's colorful and cozy."
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
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My room is tidy, not messy. It is colorful and cozy. I like my room a lot.",
  "questions": [
    "Is the room messy or tidy?",
    "Is the room colorful?",
    "Does the writer like the room?"
  ]
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My room is ___, not ___.",
    "It is ___.",
    "I like my room because ___."
  ]
}$json$::jsonb,
  true
),
(
  'b3b63939-c4b1-4cb6-a24a-dd0747f4bbb1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'messy', 'tidy', 'colorful', 'cozy'",
    "Describe my room with an opinion",
    "Ask about someone's room"
  ],
  "challenge": "Tell me about your room and if you like it!"
}$json$::jsonb,
  true
);

-- Lesson 4: Room Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  'Room Questions',
  'A1',
  'teens',
  7,
  4,
  'Combine furniture, location, and opinion into a room description. [Combination, L4, format F: open fill-in, minimal scaffolding]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
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
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🖼️",
  "questions": [
    "What is your favorite thing in your room?",
    "Do you have a poster on the wall?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "My favorite",
      "bg": "#FAECE7"
    },
    {
      "word": "Corner",
      "bg": "#E1F5EE"
    },
    {
      "word": "Wall",
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
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your favorite thing?",
    "Do you have a poster?"
  ],
  "student": [
    "My favorite thing is my bed.",
    "Yes, I have a poster on the wall."
  ],
  "note": "Put it all together: furniture + location + opinion.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[My favorite] thing is my desk."
    },
    {
      "speaker": "B",
      "text": "There is a [poster] on the [wall]."
    },
    {
      "speaker": "A",
      "text": "My bed is in the [corner]."
    }
  ],
  "blanks": [
    "my favorite",
    "poster",
    "corner"
  ]
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite thing in your room, and where is it?"
    },
    {
      "speaker": "B",
      "text": "My favorite thing is ___. It is in the ___."
    },
    {
      "speaker": "A",
      "text": "Is there a poster on your wall?"
    },
    {
      "speaker": "B",
      "text": "Yes / No, ___."
    }
  ],
  "note": "Fill in your own answers -- no word bank this time. Say your full answers out loud."
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My room is colorful and tidy. There is a poster on the wall. My favorite thing is my desk, in the corner next to the window.",
  "questions": [
    "Is the room colorful or plain?",
    "What is on the wall?",
    "What is the writer's favorite thing?"
  ]
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My room is ___.",
    "There is a ___ on the ___.",
    "My favorite thing is ___."
  ]
}$json$::jsonb,
  true
),
(
  'f8df8b49-850b-40db-9138-d4a59e21999e',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my room with furniture and location",
    "Say my favorite thing",
    "Give an opinion about my room"
  ],
  "challenge": "Tell me all about your room!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  'Unit Review',
  'A1',
  'teens',
  7,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
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
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🛏️",
  "questions": [
    "What is in your room?",
    "Is your room tidy?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Room",
      "bg": "#FAECE7"
    },
    {
      "word": "There is",
      "bg": "#E1F5EE"
    },
    {
      "word": "Tidy",
      "bg": "#EEEDFE"
    },
    {
      "word": "Favorite",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is in your room?",
    "Is your room tidy?"
  ],
  "student": [
    "There is a bed and a desk.",
    "Yes, my room is tidy."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [room] has a bed and a desk."
    },
    {
      "speaker": "B",
      "text": "[There is] a poster on the wall."
    },
    {
      "speaker": "A",
      "text": "My room is [tidy]."
    }
  ],
  "blanks": [
    "room",
    "there is",
    "tidy"
  ]
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your room."
    },
    {
      "speaker": "B",
      "text": "My room has a bed and a desk. There is a poster on the wall."
    },
    {
      "speaker": "A",
      "text": "My favorite thing is my window. My room is tidy and colorful."
    },
    {
      "speaker": "B",
      "text": "Nice room!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My room has a bed and a desk. There is a poster on the wall. My room is tidy and colorful.",
  "questions": [
    "What furniture is in the room?",
    "What is on the wall?",
    "Is the room tidy or messy?"
  ]
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My room has ___.",
    "There is a ___ on the ___.",
    "My room is ___."
  ]
}$json$::jsonb,
  true
),
(
  'b27ff332-7fa3-48c7-addd-47c31895483c',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name room furniture",
    "Describe where things are",
    "Give an opinion about my room"
  ],
  "challenge": "Tell me all about your room!"
}$json$::jsonb,
  true
);

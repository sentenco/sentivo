-- A1 Teens Unit 7: My Room (5 lessons) — TIERED (Combination)
-- Regenerated per the Sentivo Intra-Level Progression Framework + lesson-level escalation + task rotation.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: My Room
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
  'My Room',
  'A1',
  'teens',
  7,
  1,
  'Name furniture and room objects. [Combination, Lesson 1: notice/receptive]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
      "text": "My room has a window too!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '909f4e72-0452-43a6-96fe-7b8a26002cc4',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
  'In My Room',
  'A1',
  'teens',
  7,
  2,
  'Use ''there is/are'' and prepositions of place. [Combination, Lesson 2: controlled practice, 2 combined targets]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is on your desk?"
    },
    {
      "speaker": "B",
      "text": "There is a lamp on my desk. What is next to your bed?"
    },
    {
      "speaker": "A",
      "text": "There is a chair next to my bed. There are books on my shelf too."
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  '5ea76edb-a1df-447f-8305-b57cd0af0d57',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
  'My Space',
  'A1',
  'teens',
  7,
  3,
  'Describe your room with a simple opinion. [Combination, Lesson 3: freer practice, role reversal]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  'd832ca13-975f-465d-87c2-52bb84c3d60b',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
  'Room Questions',
  'A1',
  'teens',
  7,
  4,
  'Combine furniture, location, and opinion into a room description. [Combination, Lesson 4: production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
      "text": "My room is colorful and tidy. There is a poster on the wall."
    },
    {
      "speaker": "A",
      "text": "My favorite thing is my desk, in the corner next to the window."
    },
    {
      "speaker": "B",
      "text": "Your room sounds nice!"
    }
  ],
  "note": "Mini talk: tell me all about your room in a few sentences."
}$json$::jsonb,
  true
),
(
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  '33e3ac39-f975-47aa-9d15-350ef91d6812',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
  'Unit Review',
  'A1',
  'teens',
  7,
  5,
  'Review room vocabulary, location, and opinion. [Combination, Lesson 5: tier-matched review]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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
  'cc7b0a31-3256-4271-a900-66d2ea1bf550',
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

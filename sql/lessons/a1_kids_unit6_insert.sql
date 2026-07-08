-- A1 Kids Unit 6: Animals (5 lessons)
-- Generated from project_a1_kids_master_curriculum memory, Unit 6.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  'Animals',
  'A1',
  'kids',
  6,
  1,
  'Identify common animals.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "What animals do you know?",
    "What sound does a dog make?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7"
    },
    {
      "word": "Cat",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bird",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fish",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this animal?",
    "Is it a dog?"
  ],
  "student": [
    "It is a dog.",
    "No, it is a cat!"
  ],
  "note": "Make an animal sound when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is a [dog]."
    },
    {
      "speaker": "B",
      "text": "It is a [cat]."
    },
    {
      "speaker": "A",
      "text": "It is a [bird]."
    }
  ],
  "blanks": [
    "dog",
    "cat",
    "bird"
  ]
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is this animal?"
    },
    {
      "speaker": "B",
      "text": "It is a fish!"
    },
    {
      "speaker": "A",
      "text": "What sound does a dog make?"
    },
    {
      "speaker": "B",
      "text": "Woof woof!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like animals! A dog says woof. A cat says meow. A bird can fly. A fish can swim. Animals are fun!",
  "questions": [
    "What sound does a dog make?",
    "What sound does a cat make?",
    "What can a fish do?"
  ]
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A dog says ___.",
    "My favorite animal is ___.",
    "A ___ can ___."
  ]
}$json$::jsonb,
  true
),
(
  '1d55c419-a820-4dfd-9e57-f2357cd9f716',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four animals",
    "Say animal sounds",
    "Answer 'What is this animal?'"
  ],
  "challenge": "Name your favorite animal and make its sound!"
}$json$::jsonb,
  true
);

-- Lesson 2: Farm Animals
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '709388bc-3198-4079-b4c2-103f383a7265',
  'Farm Animals',
  'A1',
  'kids',
  6,
  2,
  'Name common farm animals.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐄",
  "questions": [
    "Have you visited a farm?",
    "What animals live on a farm?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Cow",
      "bg": "#FAECE7"
    },
    {
      "word": "Pig",
      "bg": "#E1F5EE"
    },
    {
      "word": "Horse",
      "bg": "#EEEDFE"
    },
    {
      "word": "Sheep",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What animal is this?",
    "Is it a cow?"
  ],
  "student": [
    "It is a cow.",
    "Yes, it is a pig!"
  ],
  "note": "Think about a farm you have seen or a picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is a [cow]."
    },
    {
      "speaker": "B",
      "text": "It is a [pig]."
    },
    {
      "speaker": "A",
      "text": "It is a [horse]."
    }
  ],
  "blanks": [
    "cow",
    "pig",
    "horse"
  ]
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What animal is this?"
    },
    {
      "speaker": "B",
      "text": "It is a sheep!"
    },
    {
      "speaker": "A",
      "text": "What sound does a cow make?"
    },
    {
      "speaker": "B",
      "text": "Moo moo!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "On the farm, I see a cow. I see a pig. I see a horse. I see a sheep. The farm has many animals!",
  "questions": [
    "What animals are on the farm?",
    "Does the farm have a horse?",
    "How many animals does the writer see?"
  ]
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "On the farm, I see a ___.",
    "A cow says ___.",
    "My favorite farm animal is ___."
  ]
}$json$::jsonb,
  true
),
(
  '709388bc-3198-4079-b4c2-103f383a7265',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four farm animals",
    "Say 'On the farm, I see a ___'",
    "Talk about farm animals"
  ],
  "challenge": "Name three farm animals right now!"
}$json$::jsonb,
  true
);

-- Lesson 3: Pets
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  'Pets',
  'A1',
  'kids',
  6,
  3,
  'Say pet names and basic preferences.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐱",
  "questions": [
    "Do you have a pet?",
    "What pet would you like?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Rabbit",
      "bg": "#FAECE7"
    },
    {
      "word": "Pet",
      "bg": "#E1F5EE"
    },
    {
      "word": "Like",
      "bg": "#EEEDFE"
    },
    {
      "word": "Have",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you have a pet?",
    "What pet do you like?"
  ],
  "student": [
    "Yes, I have a dog.",
    "I like cats!"
  ],
  "note": "Think of a real or dream pet!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [have] a dog."
    },
    {
      "speaker": "B",
      "text": "I [like] cats."
    },
    {
      "speaker": "A",
      "text": "I want a [rabbit]."
    }
  ],
  "blanks": [
    "have",
    "like",
    "rabbit"
  ]
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Do you have a pet?"
    },
    {
      "speaker": "B",
      "text": "Yes, I have a cat."
    },
    {
      "speaker": "A",
      "text": "I like rabbits!"
    },
    {
      "speaker": "B",
      "text": "Rabbits are cute!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I have a pet. I have a dog. My dog is small. I like my dog very much. My friend has a cat. She likes her cat too!",
  "questions": [
    "What pet does the writer have?",
    "Is the dog big or small?",
    "What pet does the friend have?"
  ]
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "I like ___.",
    "My pet is ___."
  ]
}$json$::jsonb,
  true
),
(
  '32bc09a2-d3a2-44ec-a5d8-e76cf4449960',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I have a ___'",
    "Say 'I like ___'",
    "Talk about pets"
  ],
  "challenge": "Tell me about a pet you have or want!"
}$json$::jsonb,
  true
);

-- Lesson 4: Animal Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  'Animal Actions',
  'A1',
  'kids',
  6,
  4,
  'Match animals with simple actions or sounds.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐸",
  "questions": [
    "Can you jump like a frog?",
    "What animal can fly?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Jump",
      "bg": "#FAECE7"
    },
    {
      "word": "Swim",
      "bg": "#E1F5EE"
    },
    {
      "word": "Fly",
      "bg": "#EEEDFE"
    },
    {
      "word": "Run",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What can a bird do?",
    "Can a fish fly?"
  ],
  "student": [
    "A bird can fly.",
    "No, a fish can swim!"
  ],
  "note": "Act out the action when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "A frog can [jump]."
    },
    {
      "speaker": "B",
      "text": "A fish can [swim]."
    },
    {
      "speaker": "A",
      "text": "A bird can [fly]."
    }
  ],
  "blanks": [
    "jump",
    "swim",
    "fly"
  ]
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What can a dog do?"
    },
    {
      "speaker": "B",
      "text": "A dog can run!"
    },
    {
      "speaker": "A",
      "text": "What can a fish do?"
    },
    {
      "speaker": "B",
      "text": "A fish can swim!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Animals can do many things. A frog can jump. A fish can swim. A bird can fly. A dog can run. I like to watch animals move!",
  "questions": [
    "What can a frog do?",
    "What can a bird do?",
    "What can a dog do?"
  ]
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "A frog can ___.",
    "A bird can ___.",
    "I can ___."
  ]
}$json$::jsonb,
  true
),
(
  'b04f3a48-ba21-444b-802d-87a0b11df536',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say animal actions",
    "Say 'A ___ can ___'",
    "Act out an animal"
  ],
  "challenge": "Act out an animal action and let me guess!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'f926373a-6001-4465-98c9-81f23b3add4a',
  'Unit Review',
  'A1',
  'kids',
  6,
  5,
  'Review animal vocabulary from Unit 6.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A1 · Beginner · Kids"
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🐶",
  "questions": [
    "What animals do you remember?",
    "What can animals do?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Dog",
      "bg": "#FAECE7"
    },
    {
      "word": "Cow",
      "bg": "#E1F5EE"
    },
    {
      "word": "Bird",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fish",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Animal Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this animal?",
    "What can it do?"
  ],
  "student": [
    "It is a dog.",
    "It can run."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "It is a [dog]."
    },
    {
      "speaker": "B",
      "text": "A bird can [fly]."
    },
    {
      "speaker": "A",
      "text": "I [have] a cat."
    }
  ],
  "blanks": [
    "dog",
    "fly",
    "have"
  ]
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your favorite animal?"
    },
    {
      "speaker": "B",
      "text": "My favorite animal is a dog!"
    },
    {
      "speaker": "A",
      "text": "What can it do?"
    },
    {
      "speaker": "B",
      "text": "It can run and jump!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I like animals. I have a dog. My dog can run and jump. On the farm, I see a cow and a horse. A bird can fly. Animals are amazing!",
  "questions": [
    "What pet does the writer have?",
    "What can the dog do?",
    "What can a bird do?"
  ]
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have a ___.",
    "A ___ can ___.",
    "My favorite animal is ___."
  ]
}$json$::jsonb,
  true
),
(
  'f926373a-6001-4465-98c9-81f23b3add4a',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name farm and pet animals",
    "Say animal actions",
    "Say 'I have a ___'",
    "Talk about my favorite animal"
  ],
  "challenge": "Tell me about your favorite animal and what it can do!"
}$json$::jsonb,
  true
);

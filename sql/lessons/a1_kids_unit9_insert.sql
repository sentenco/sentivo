-- A1 Kids Unit 9: My Body (5 lessons)
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Body Parts
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  'Body Parts',
  'A1',
  'kids',
  9,
  1,
  'Name common body parts.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
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
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙆",
  "questions": [
    "Can you touch your head?",
    "What body parts do you know?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7"
    },
    {
      "word": "Arm",
      "bg": "#E1F5EE"
    },
    {
      "word": "Leg",
      "bg": "#EEEDFE"
    },
    {
      "word": "Hand",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this your hand?"
  ],
  "student": [
    "It is my head.",
    "Yes, this is my hand!"
  ],
  "note": "Point to your own body when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "This is my [arm]."
    },
    {
      "speaker": "A",
      "text": "This is my [leg]."
    }
  ],
  "blanks": [
    "head",
    "arm",
    "leg"
  ]
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is this?"
    },
    {
      "speaker": "B",
      "text": "It is my hand!"
    },
    {
      "speaker": "A",
      "text": "Touch your head!"
    },
    {
      "speaker": "B",
      "text": "I touched my head!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my body. This is my head. This is my arm. This is my leg. This is my hand. I have a strong body!",
  "questions": [
    "What body parts does the writer name?",
    "Is the body strong?",
    "Point to your own head!"
  ]
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have two ___.",
    "My body has a ___."
  ]
}$json$::jsonb,
  true
),
(
  '17d05677-8282-4c97-aaf4-38b42e5bcea6',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four body parts",
    "Say 'This is my ___'",
    "Point to body parts"
  ],
  "challenge": "Point to and name three body parts right now!"
}$json$::jsonb,
  true
);

-- Lesson 2: Touch Your…
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  'Touch Your…',
  'A1',
  'kids',
  9,
  2,
  'Understand and respond to simple body instructions.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
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
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👆",
  "questions": [
    "Can you touch your nose?",
    "Can you touch your foot?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Touch",
      "bg": "#FAECE7"
    },
    {
      "word": "Foot",
      "bg": "#E1F5EE"
    },
    {
      "word": "Shoulder",
      "bg": "#EEEDFE"
    },
    {
      "word": "Knee",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Touch your foot!",
    "Touch your shoulder!"
  ],
  "student": [
    "I touched my foot!",
    "I touched my shoulder!"
  ],
  "note": "Actually do the action when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Touch] your knee."
    },
    {
      "speaker": "B",
      "text": "I touched my [foot]."
    },
    {
      "speaker": "A",
      "text": "Touch your [shoulder]."
    }
  ],
  "blanks": [
    "Touch",
    "foot",
    "shoulder"
  ]
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Touch your knee!"
    },
    {
      "speaker": "B",
      "text": "I touched my knee!"
    },
    {
      "speaker": "A",
      "text": "Touch your shoulder!"
    },
    {
      "speaker": "B",
      "text": "I touched my shoulder too!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My teacher says, 'Touch your foot!' I touch my foot. My teacher says, 'Touch your shoulder!' I touch my shoulder. I like this game!",
  "questions": [
    "What does the teacher say first?",
    "What does the writer touch second?",
    "Does the writer like the game?"
  ]
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Touch your ___.",
    "I touched my ___.",
    "My favorite body game is ___."
  ]
}$json$::jsonb,
  true
),
(
  'ba7d3e80-04fb-4e26-9656-7be4efdde361',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'Touch your ___'",
    "Follow body instructions",
    "Name more body parts"
  ],
  "challenge": "Touch three body parts when I say them!"
}$json$::jsonb,
  true
);

-- Lesson 3: My Face
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  'My Face',
  'A1',
  'kids',
  9,
  3,
  'Name face parts.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
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
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "😊",
  "questions": [
    "What do you see on a face?",
    "How many eyes do you have?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Eyes",
      "bg": "#FAECE7"
    },
    {
      "word": "Nose",
      "bg": "#E1F5EE"
    },
    {
      "word": "Mouth",
      "bg": "#EEEDFE"
    },
    {
      "word": "Ears",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Is this your nose?"
  ],
  "student": [
    "These are my eyes.",
    "Yes, this is my nose!"
  ],
  "note": "Point to your own face when you practice!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "These are my [eyes]."
    },
    {
      "speaker": "B",
      "text": "This is my [nose]."
    },
    {
      "speaker": "A",
      "text": "This is my [mouth]."
    }
  ],
  "blanks": [
    "eyes",
    "nose",
    "mouth"
  ]
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is this?"
    },
    {
      "speaker": "B",
      "text": "These are my ears!"
    },
    {
      "speaker": "A",
      "text": "How many eyes do you have?"
    },
    {
      "speaker": "B",
      "text": "I have two eyes!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my face. I have two eyes. I have one nose. I have one mouth. I have two ears. My face is happy today!",
  "questions": [
    "How many eyes does the writer have?",
    "How many ears does the writer have?",
    "Is the writer's face happy?"
  ]
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I have two ___.",
    "This is my ___.",
    "My face is ___ today."
  ]
}$json$::jsonb,
  true
),
(
  'aed7960a-73d4-4133-b57b-51c9f4a2180f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name four face parts",
    "Say how many eyes/ears I have",
    "Point to my own face"
  ],
  "challenge": "Point to and name three parts of your face!"
}$json$::jsonb,
  true
);

-- Lesson 4: Body Actions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  'Body Actions',
  'A1',
  'kids',
  9,
  4,
  'Use simple action language with body parts.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
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
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "👏",
  "questions": [
    "Can you clap your hands?",
    "Can you jump with your legs?"
  ],
  "title": "What do you see?"
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Clap",
      "bg": "#FAECE7"
    },
    {
      "word": "Wave",
      "bg": "#E1F5EE"
    },
    {
      "word": "Kick",
      "bg": "#EEEDFE"
    },
    {
      "word": "Stomp",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Clap your hands!",
    "Wave your hand!"
  ],
  "student": [
    "I clap my hands!",
    "I wave my hand!"
  ],
  "note": "Do the action when you say it!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Clap] your hands."
    },
    {
      "speaker": "B",
      "text": "[Wave] your hand."
    },
    {
      "speaker": "A",
      "text": "[Stomp] your feet."
    }
  ],
  "blanks": [
    "Clap",
    "Wave",
    "Stomp"
  ]
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Clap your hands!"
    },
    {
      "speaker": "B",
      "text": "I am clapping!"
    },
    {
      "speaker": "A",
      "text": "Kick with your leg!"
    },
    {
      "speaker": "B",
      "text": "I am kicking!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I can clap my hands. I can wave my hand. I can kick with my leg. I can stomp my feet. My body can do many things!",
  "questions": [
    "What can the writer do with their hands?",
    "What can the writer do with their leg?",
    "What can the writer's body do?"
  ]
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I can clap my ___.",
    "I can kick with my ___.",
    "My body can ___."
  ]
}$json$::jsonb,
  true
),
(
  '16032e84-358d-4b06-93f2-acb437cc6ba2',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say body actions",
    "Say 'I can ___ my ___'",
    "Do actions with my body"
  ],
  "challenge": "Clap, wave, and stomp for me right now!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  'Unit Review',
  'A1',
  'kids',
  9,
  5,
  'Review body vocabulary.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
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
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🙆",
  "questions": [
    "What body parts do you remember?",
    "What actions can your body do?"
  ],
  "title": "Let's Review!"
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Head",
      "bg": "#FAECE7"
    },
    {
      "word": "Hand",
      "bg": "#E1F5EE"
    },
    {
      "word": "Eyes",
      "bg": "#EEEDFE"
    },
    {
      "word": "Foot",
      "bg": "#FAEEDA"
    }
  ],
  "title": "Review Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is this?",
    "Touch your foot!"
  ],
  "student": [
    "This is my head.",
    "I touched my foot!"
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "This is my [head]."
    },
    {
      "speaker": "B",
      "text": "These are my [eyes]."
    },
    {
      "speaker": "A",
      "text": "I can [clap] my hands."
    }
  ],
  "blanks": [
    "head",
    "eyes",
    "clap"
  ]
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Touch your nose!"
    },
    {
      "speaker": "B",
      "text": "I touched my nose!"
    },
    {
      "speaker": "A",
      "text": "Clap your hands!"
    },
    {
      "speaker": "B",
      "text": "I am clapping now!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "This is my body. I have two eyes and one nose. I have two hands and two feet. I can clap my hands. I can kick with my leg. My body is strong!",
  "questions": [
    "How many eyes does the writer have?",
    "What can the writer clap?",
    "Is the writer's body strong?"
  ]
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "This is my ___.",
    "I have two ___.",
    "I can ___ my ___."
  ]
}$json$::jsonb,
  true
),
(
  '5088fa85-f902-43eb-bfb1-7a138e13a1a8',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name body and face parts",
    "Follow body instructions",
    "Say body actions"
  ],
  "challenge": "Point to a body part and do an action with it!"
}$json$::jsonb,
  true
);

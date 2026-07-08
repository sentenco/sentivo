-- A2 Teens Unit 7: Town Life and Getting Around (5 lessons)
-- Generated from project_a2_teens_master_curriculum memory.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Places Teens Go
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  'Places Teens Go',
  'A2',
  'teens',
  7,
  1,
  'Name places teens go and what they do there.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏬",
  "questions": [
    "Where do you go with friends after school?",
    "Do you like the mall or the skate park?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Mall",
      "bg": "#FAECE7"
    },
    {
      "word": "Arcade",
      "bg": "#E1F5EE"
    },
    {
      "word": "Skate park",
      "bg": "#EEEDFE"
    },
    {
      "word": "Café",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you usually go with friends?",
    "What do you do at the mall?"
  ],
  "student": [
    "We usually go to the mall.",
    "We shop and get food."
  ],
  "note": "Think about places you go with friends!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "We usually go to the [mall] after school."
    },
    {
      "speaker": "B",
      "text": "I love the [arcade] on weekends."
    },
    {
      "speaker": "A",
      "text": "My friends skate at the [skate park]."
    }
  ],
  "blanks": [
    "mall",
    "arcade",
    "skate park"
  ]
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where do you usually go with friends?"
    },
    {
      "speaker": "B",
      "text": "We usually go to the café or the mall. What about you?"
    },
    {
      "speaker": "A",
      "text": "I like the arcade and sometimes the skate park."
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
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Four teens share where they hang out. Sam goes to the skate park every weekend. Mia loves the café near school for studying. Leo plays games at the arcade. Ana likes shopping at the mall with friends.",
  "questions": [
    "Where does Sam go every weekend?",
    "Where does Mia like to study?",
    "What does Leo do at the arcade?"
  ]
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I usually go to the ___.",
    "I go there to ___.",
    "My favorite place in town is ___."
  ]
}$json$::jsonb,
  true
),
(
  'c6abdb91-c9e1-422e-aa0e-1c98b6376ac0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places teens go",
    "Say what I do there",
    "Talk about my favorite hangout"
  ],
  "challenge": "Tell me your favorite place to hang out and why!"
}$json$::jsonb,
  true
);

-- Lesson 2: Directions and Meeting Points
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'db75b44d-589f-469f-b7a3-76198dd68161',
  'Directions and Meeting Points',
  'A2',
  'teens',
  7,
  2,
  'Give and understand simple directions and meeting points.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🧭",
  "questions": [
    "Can you give directions to your school?",
    "Where is a good meeting point near you?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Turn left",
      "bg": "#FAECE7"
    },
    {
      "word": "Straight ahead",
      "bg": "#E1F5EE"
    },
    {
      "word": "Across from",
      "bg": "#EEEDFE"
    },
    {
      "word": "Meeting point",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "How do I get to the café?",
    "Where should we meet?"
  ],
  "student": [
    "Turn left and it's straight ahead.",
    "Let's meet across from the mall."
  ],
  "note": "Practice giving simple directions!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[Turn left] at the corner."
    },
    {
      "speaker": "B",
      "text": "Then go [straight ahead]."
    },
    {
      "speaker": "A",
      "text": "The café is [across from] the school."
    }
  ],
  "blanks": [
    "turn left",
    "straight ahead",
    "across from"
  ]
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "How do I get to the arcade from here?"
    },
    {
      "speaker": "B",
      "text": "Turn left at the corner, then go straight ahead."
    },
    {
      "speaker": "A",
      "text": "It's across from the skate park, right?"
    },
    {
      "speaker": "B",
      "text": "Exactly! You can't miss it."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Message: how do I get to the meeting point? Turn left at the mall, then go straight ahead for two minutes. The café is across from the bus stop. See you there at 4pm!",
  "questions": [
    "What is the first direction given?",
    "Where is the café located?",
    "What time will they meet?"
  ]
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "Turn ___ at the ___.",
    "The place is across from ___.",
    "Let's meet at ___."
  ]
}$json$::jsonb,
  true
),
(
  'db75b44d-589f-469f-b7a3-76198dd68161',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Give simple directions",
    "Understand a meeting point message",
    "Use 'turn left/right' and 'across from'"
  ],
  "challenge": "Give me directions to your favorite hangout spot!"
}$json$::jsonb,
  true
);

-- Lesson 3: Busy or Quiet?
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '39adae76-e783-4969-943c-f999db6ef503',
  'Busy or Quiet?',
  'A2',
  'teens',
  7,
  3,
  'Compare places in town using comparatives.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '39adae76-e783-4969-943c-f999db6ef503',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🚶‍♀️",
  "questions": [
    "Is the mall busy or quiet on weekends?",
    "Do you prefer busy or peaceful places?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Crowded",
      "bg": "#FAECE7"
    },
    {
      "word": "Peaceful",
      "bg": "#E1F5EE"
    },
    {
      "word": "Livelier",
      "bg": "#EEEDFE"
    },
    {
      "word": "Calmer",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Is the mall busier than the café?",
    "Which place is calmer?"
  ],
  "student": [
    "Yes, the mall is much busier.",
    "The café is calmer than the mall."
  ],
  "note": "Compare two places in town!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "The mall is [crowded] on weekends."
    },
    {
      "speaker": "B",
      "text": "The park is more [peaceful]."
    },
    {
      "speaker": "A",
      "text": "The arcade is [livelier] than the library."
    }
  ],
  "blanks": [
    "crowded",
    "peaceful",
    "livelier"
  ]
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Is the mall busy or quiet on Saturdays?"
    },
    {
      "speaker": "B",
      "text": "It's really crowded. I prefer calmer places like the park."
    },
    {
      "speaker": "A",
      "text": "The arcade is livelier, but the library is much calmer."
    },
    {
      "speaker": "B",
      "text": "I like both, depending on my mood."
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "Two friends compare their town's places. Leo says the mall is crowded and loud on weekends, while the park is more peaceful. Ana says the arcade is livelier than the library, which is much calmer for studying.",
  "questions": [
    "What does Leo say about the mall?",
    "What is more peaceful, according to Leo?",
    "What does Ana compare?"
  ]
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "The ___ is busier than the ___.",
    "I prefer ___ places because ___.",
    "The ___ is calmer than the ___."
  ]
}$json$::jsonb,
  true
),
(
  '39adae76-e783-4969-943c-f999db6ef503',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Compare places using busy/quiet adjectives",
    "Use comparatives",
    "Say which places I prefer"
  ],
  "challenge": "Compare two places in your town!"
}$json$::jsonb,
  true
);

-- Lesson 4: A Day Out Plan
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '16853284-d779-4d2e-8d35-f4d60876030f',
  'A Day Out Plan',
  'A2',
  'teens',
  7,
  4,
  'Write a short plan for a day out using sequencing words.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🗓️",
  "questions": [
    "What would a perfect day out look like for you?",
    "Where would you go first?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Plan",
      "bg": "#FAECE7"
    },
    {
      "word": "First",
      "bg": "#E1F5EE"
    },
    {
      "word": "Afterward",
      "bg": "#EEEDFE"
    },
    {
      "word": "Wrap up",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your plan for the day?",
    "Where will you go first?"
  ],
  "student": [
    "First, we'll go to the mall.",
    "Afterward, we'll get food."
  ],
  "note": "Plan a day out in order!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[First], we'll go to the arcade."
    },
    {
      "speaker": "B",
      "text": "[Afterward], we'll grab food."
    },
    {
      "speaker": "A",
      "text": "We'll [wrap up] at the café."
    }
  ],
  "blanks": [
    "first",
    "afterward",
    "wrap up"
  ]
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What is your plan for a perfect day out?"
    },
    {
      "speaker": "B",
      "text": "First, we'll go to the skate park. Afterward, we'll get food at the mall."
    },
    {
      "speaker": "A",
      "text": "Then we'll wrap up the day at the café."
    },
    {
      "speaker": "B",
      "text": "That sounds like a perfect plan!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My perfect day out plan: first, we'll meet at the skate park at 10am. Afterward, we'll get lunch at the new café nearby. Then, we'll go shopping at the mall. Finally, we'll wrap up the day watching a movie.",
  "questions": [
    "Where do they meet first?",
    "What do they do afterward?",
    "How do they wrap up the day?"
  ]
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "First, we'll ___.",
    "Afterward, we'll ___.",
    "We'll wrap up by ___."
  ]
}$json$::jsonb,
  true
),
(
  '16853284-d779-4d2e-8d35-f4d60876030f',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Plan a day out in order",
    "Use sequencing words",
    "Write a short connected plan"
  ],
  "challenge": "Tell me your plan for a perfect day out!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  'Unit Review',
  'A2',
  'teens',
  7,
  5,
  'Review town places, directions, comparisons, and a day-out plan.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  1,
  'title',
  null,
  null,
  $json${
  "badge": "A2 · Elementary · Teens"
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏙️",
  "questions": [
    "Where do you like to hang out?",
    "What's your plan this weekend?"
  ],
  "title": "What's your take?"
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hangout",
      "bg": "#FAECE7"
    },
    {
      "word": "Directions",
      "bg": "#E1F5EE"
    },
    {
      "word": "Busier",
      "bg": "#EEEDFE"
    },
    {
      "word": "Plan",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Where do you hang out?",
    "What's your plan for the weekend?"
  ],
  "student": [
    "I hang out at the skate park.",
    "My plan is to meet friends at the mall."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My favorite [hangout] is the café."
    },
    {
      "speaker": "B",
      "text": "Can you give me [directions] there?"
    },
    {
      "speaker": "A",
      "text": "It's [busier] than the library, but I like it."
    }
  ],
  "blanks": [
    "hangout",
    "directions",
    "busier"
  ]
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Where's your favorite hangout in town?"
    },
    {
      "speaker": "B",
      "text": "The skate park. It's busier than the library, but full of energy."
    },
    {
      "speaker": "A",
      "text": "Can you give me directions there?"
    },
    {
      "speaker": "B",
      "text": "Sure, turn left at the mall and it's straight ahead!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My favorite hangout is the skate park. It's busier and livelier than the library, but I love the energy. To get there, turn left at the mall and go straight ahead. My plan for Saturday: first, meet friends there, then grab food afterward.",
  "questions": [
    "What is the writer's favorite hangout?",
    "How do you get there?",
    "What is the plan for Saturday?"
  ]
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My favorite hangout is ___.",
    "To get there, ___.",
    "My plan for this weekend is ___."
  ]
}$json$::jsonb,
  true
),
(
  '9c302c76-c0af-4f7f-b102-5ed8612230c0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name places teens go",
    "Give directions",
    "Compare places",
    "Plan a day out"
  ],
  "challenge": "Tell me all about your town and your weekend plans!"
}$json$::jsonb,
  true
);

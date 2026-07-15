-- A1 Teens Unit 5: Hobbies and Interests (5 lessons) — TIERED + ROTATED
-- Per docs/curriculum/a1-teens-adults-rotation-rework.md. Vocab/reading/writing/review
-- unchanged from the tiered pilot; only activity+speaking reshuffled to the new
-- per-unit format assignment, keeping each lesson's difficulty position intact.
-- Run this whole script in the Supabase SQL editor.

-- Lesson 1: Hobbies and Interests
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  'Hobbies and Interests',
  'A1',
  'teens',
  5,
  1,
  'Unchanged by the rotation rework -- L1 format M, matches original order.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
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
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "⚽",
  "questions": [
    "What is your hobby?",
    "Do you like football?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Football",
      "bg": "#E1F5EE"
    },
    {
      "word": "Dancing",
      "bg": "#EEEDFE"
    },
    {
      "word": "Painting",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "Do you like dancing?"
  ],
  "student": [
    "My hobby is football.",
    "Yes, I like dancing."
  ],
  "note": "Point to a hobby picture!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [hobby] is football."
    },
    {
      "speaker": "B",
      "text": "I like [dancing]."
    },
    {
      "speaker": "A",
      "text": "I like [painting] too."
    }
  ],
  "blanks": [
    "hobby",
    "dancing",
    "painting"
  ]
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My hobby is football."
    },
    {
      "speaker": "B",
      "text": "My hobby is dancing."
    },
    {
      "speaker": "A",
      "text": "I like painting too."
    },
    {
      "speaker": "B",
      "text": "I like painting too!"
    }
  ],
  "note": "Teacher says the line first. Student repeats, then says it alone."
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is football. I like dancing too. My friend likes painting.",
  "questions": [
    "What is the hobby?",
    "What else does the writer like?",
    "What does the friend like?"
  ]
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I like ___.",
    "My friend likes ___."
  ]
}$json$::jsonb,
  true
),
(
  '86c33efe-b799-4562-99fd-0459b3c9fcb1',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Name 4 hobbies",
    "Say 'My hobby is ___'",
    "Talk about a friend's hobby"
  ],
  "challenge": "Tell me your hobby!"
}$json$::jsonb,
  true
);

-- Lesson 2: I Like / I Don't Like
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  'I Like / I Don''t Like',
  'A1',
  'teens',
  5,
  2,
  'Say likes and dislikes with a reason. [Combination, L2, format R: short scripted role-play]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
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
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "❤️",
  "questions": [
    "What do you love?",
    "What don't you like?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Love",
      "bg": "#FAECE7"
    },
    {
      "word": "Don't like",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Fun",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you love football?",
    "Why do you like it?"
  ],
  "student": [
    "Yes, I love football.",
    "I like it because it's fun."
  ],
  "note": "Use the word bank: love, don't like, because, fun.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I [love] football [because] it's fun."
    },
    {
      "speaker": "B",
      "text": "I [don't like] math."
    },
    {
      "speaker": "A",
      "text": "Dancing is [fun] too."
    }
  ],
  "blanks": [
    "love",
    "don't like",
    "fun"
  ]
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I love football because it's fun."
    },
    {
      "speaker": "B",
      "text": "I don't like football, but I love dancing."
    },
    {
      "speaker": "A",
      "text": "Why do you love dancing?"
    },
    {
      "speaker": "B",
      "text": "Because it's fun!"
    }
  ],
  "note": "Short role-play: use the exact lines above to compare hobbies, then swap roles."
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "I love football because it's fun. I don't like math. My friend loves dancing because it's fun too.",
  "questions": [
    "Why does the writer love football?",
    "What doesn't the writer like?",
    "Why does the friend love dancing?"
  ]
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "I love ___ because ___.",
    "I don't like ___.",
    "My friend loves ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  '40c7272f-2abc-4060-9c80-cb1bc4527896',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Say 'I love ___ because ___'",
    "Say 'I don't like ___'",
    "Give a simple reason with 'because'"
  ],
  "challenge": "Tell me one thing you love, and why!"
}$json$::jsonb,
  true
);

-- Lesson 3: Interest Questions
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  'Interest Questions',
  'A1',
  'teens',
  5,
  3,
  'Ask and answer about hobbies with reasons. [Combination, L3, format F: guided fill-in]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
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
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What hobby do you have?",
    "Is it exciting or boring?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "What hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Why",
      "bg": "#E1F5EE"
    },
    {
      "word": "Boring",
      "bg": "#EEEDFE"
    },
    {
      "word": "Exciting",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What hobby do you have?",
    "Why do you like it?"
  ],
  "student": [
    "My hobby is painting.",
    "It's exciting, not boring."
  ],
  "note": "Ask me first this time, then I'll ask you!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "[What hobby] do you have?"
    },
    {
      "speaker": "B",
      "text": "[Why] do you like it?"
    },
    {
      "speaker": "A",
      "text": "It's [exciting], not boring."
    }
  ],
  "blanks": [
    "what hobby",
    "why",
    "exciting"
  ]
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "What hobby do you have?"
    },
    {
      "speaker": "B",
      "text": "My hobby is dancing. Why do you like football?"
    },
    {
      "speaker": "A",
      "text": "Because it's exciting, not boring."
    },
    {
      "speaker": "B",
      "text": "Fill in your own answer now!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is dancing. It's exciting, not boring. My friend's hobby is football because it's fun.",
  "questions": [
    "Is dancing exciting or boring, for the writer?",
    "What is the friend's hobby?",
    "Why does the friend like football?"
  ]
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "It's ___, not boring.",
    "My friend's hobby is ___ because ___."
  ]
}$json$::jsonb,
  true
),
(
  'c315486c-1aa6-4a45-a94c-db038cd29b1b',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Ask 'What hobby do you have?'",
    "Say 'exciting' or 'boring'",
    "Give a reason for a hobby"
  ],
  "challenge": "Ask me about my hobby, then tell me about yours with a reason!"
}$json$::jsonb,
  true
);

-- Lesson 4: Hobbies in Real Life
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  'Hobbies in Real Life',
  'A1',
  'teens',
  5,
  4,
  'Combine hobby vocabulary into a short talk. [Combination, L4, format E: choose-the-better-answer + independent production]',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
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
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🏆",
  "questions": [
    "Do you do your hobby alone or with friends?",
    "How often do you practice?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Every week",
      "bg": "#FAECE7"
    },
    {
      "word": "Alone",
      "bg": "#E1F5EE"
    },
    {
      "word": "With friends",
      "bg": "#EEEDFE"
    },
    {
      "word": "Practice",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "Do you do it alone or with friends?",
    "How often do you practice?"
  ],
  "student": [
    "I do it with friends.",
    "I practice every week."
  ],
  "note": "Put it all together: hobby + reason + how often + with whom.",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "I practice [every week]."
    },
    {
      "speaker": "B",
      "text": "I do it [with friends]."
    },
    {
      "speaker": "A",
      "text": "Sometimes I dance [alone]."
    }
  ],
  "blanks": [
    "every week",
    "with friends",
    "alone"
  ]
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Which is correct: 'I practice every week' or 'I practice every weeks'?"
    },
    {
      "speaker": "B",
      "text": "'I practice every week' is correct. No 's' on week."
    },
    {
      "speaker": "A",
      "text": "Good! Now tell me: how often do YOU practice your hobby, and with who?"
    },
    {
      "speaker": "B",
      "text": "I practice every week with my friends."
    }
  ],
  "note": "Fix the mistake first, then answer fully in your own words -- no word bank this time."
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is football. I love it because it's fun. I practice every week with my friends. It's not boring, it's exciting!",
  "questions": [
    "What is the hobby?",
    "How often does the writer practice?",
    "Who does the writer practice with?"
  ]
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I love it because ___.",
    "I practice ___ with ___."
  ]
}$json$::jsonb,
  true
),
(
  'cb771bf8-b767-40ba-8987-1489bce7ff3d',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Describe my hobby with a reason",
    "Say how often I do it",
    "Say who I do it with"
  ],
  "challenge": "Tell me all about your hobby!"
}$json$::jsonb,
  true
);

-- Lesson 5: Unit Review
insert into lessons (id, title, level, age_track, unit_number, lesson_number, topic, duration_minutes, slide_count, is_active)
values (
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  'Unit Review',
  'A1',
  'teens',
  5,
  5,
  'Unchanged by the rotation rework.',
  25,
  9,
  true
);

insert into lesson_slides (lesson_id, slide_number, slide_type, title, subtitle, content, is_active)
values
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
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
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  2,
  'warmup',
  null,
  null,
  $json${
  "display": "🎨",
  "questions": [
    "What is your hobby?",
    "Why do you love it?"
  ],
  "title": "Let's start!"
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  3,
  'vocabulary',
  null,
  null,
  $json${
  "words": [
    {
      "word": "Hobby",
      "bg": "#FAECE7"
    },
    {
      "word": "Love",
      "bg": "#E1F5EE"
    },
    {
      "word": "Because",
      "bg": "#EEEDFE"
    },
    {
      "word": "Every week",
      "bg": "#FAEEDA"
    }
  ],
  "title": "New Words",
  "subtitle": "Tap a card to see it bigger."
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  4,
  'phrases',
  null,
  null,
  $json${
  "teacher": [
    "What is your hobby?",
    "Why do you love it?"
  ],
  "student": [
    "My hobby is dancing.",
    "I love it because it's fun."
  ],
  "note": "Use everything you learned this unit!",
  "title": "Practice the Conversation"
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  5,
  'activity',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "My [hobby] is painting."
    },
    {
      "speaker": "B",
      "text": "I [love] it [because] it's fun."
    },
    {
      "speaker": "A",
      "text": "I practice [every week]."
    }
  ],
  "blanks": [
    "hobby",
    "love",
    "every week"
  ]
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  6,
  'speaking',
  null,
  null,
  $json${
  "dialogue": [
    {
      "speaker": "A",
      "text": "Tell me about your hobby."
    },
    {
      "speaker": "B",
      "text": "My hobby is dancing. I love it because it's exciting. I practice every week."
    },
    {
      "speaker": "A",
      "text": "I do it with my friends."
    },
    {
      "speaker": "B",
      "text": "Sounds fun!"
    }
  ],
  "note": "Switch! Student becomes A, teacher becomes B."
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  7,
  'reading',
  null,
  null,
  $json${
  "text": "My hobby is dancing. I love it because it's exciting. I practice every week with my friends.",
  "questions": [
    "What is the hobby?",
    "Why does the writer love it?",
    "How often does the writer practice?"
  ]
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  8,
  'writing',
  null,
  null,
  $json${
  "prompts": [
    "My hobby is ___.",
    "I love it because ___.",
    "I practice ___."
  ]
}$json$::jsonb,
  true
),
(
  '187cc8fa-c8d6-4d43-8636-aeb8f8b432e0',
  9,
  'review',
  null,
  null,
  $json${
  "checklist": [
    "Talk about my hobby",
    "Give a reason with 'because'",
    "Say how often and with whom"
  ],
  "challenge": "Tell me all about your hobby!"
}$json$::jsonb,
  true
);
